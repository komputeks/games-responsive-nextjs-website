import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const token = process.env.GITHUB_PAT;
const owner = process.env.GITHUB_USERNAME || "Komputeks";
const email = process.env.GITHUB_EMAIL || "xpatworld2021@gmail.com";
const repoName = process.env.GITHUB_REPO || "games-responsive-nextjs-website";
const repoDesc =
  "Games Responsive HTML Website Template clone built with Next.js 16.2.9 (frontend only)";

// Only publish on Vercel production (or when FORCE_GITHUB_PUSH=1)
if (!token) {
  console.log("[push-to-github] No GITHUB_PAT — skip");
  process.exit(0);
}
if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
  console.log(
    `[push-to-github] VERCEL_ENV=${process.env.VERCEL_ENV} — skip (production only)`
  );
  process.exit(0);
}
if (!process.env.VERCEL_ENV && process.env.FORCE_GITHUB_PUSH !== "1") {
  console.log(
    "[push-to-github] Not on Vercel and FORCE_GITHUB_PUSH!=1 — skip"
  );
  process.exit(0);
}

const IGNORE_DIRS = new Set([
  "node_modules",
  ".next",
  "next-dist",
  ".next-old-busy",
  ".git",
  ".vercel",
  "api",
  "dist",
  "out",
  "coverage",
]);
const IGNORE_FILES = new Set([
  ".env",
  "build-log.txt",
  "package-lock.json",
  ".DS_Store",
]);

function shouldIgnore(relPath) {
  const parts = relPath.split(sep);
  if (parts.some((p) => IGNORE_DIRS.has(p))) return true;
  const base = parts[parts.length - 1];
  if (IGNORE_FILES.has(base)) return true;
  if (base.endsWith(".log")) return true;
  if (base.startsWith(".env")) return true;
  return false;
}

function walk(dir, root = dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const rel = relative(root, full);
    if (shouldIgnore(rel)) continue;
    const st = statSync(full);
    if (st.isDirectory()) walk(full, root, files);
    else files.push(rel.split(sep).join("/"));
  }
  return files;
}

async function api(endpoint, init = {}) {
  const res = await fetch(`https://api.github.com${endpoint}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
      "User-Agent": "games-responsive-nextjs-uploader",
      ...(init.headers || {}),
    },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.message || `GitHub ${res.status} ${endpoint}`);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

async function main() {
  console.log(`[push-to-github] owner=${owner} repo=${repoName}`);
  console.log(
    `[push-to-github] VERCEL_ENV=${process.env.VERCEL_ENV || "(unset)"}`
  );

  const me = await api("/user");
  console.log(`[push-to-github] auth as ${me.login}`);
  const finalOwner = me.login;

  let exists = true;
  try {
    await api(`/repos/${finalOwner}/${repoName}`);
    console.log("[push-to-github] repo exists");
  } catch (e) {
    if (e.status === 404) exists = false;
    else throw e;
  }

  if (!exists) {
    await api("/user/repos", {
      method: "POST",
      body: JSON.stringify({
        name: repoName,
        description: repoDesc,
        private: false,
        auto_init: false,
      }),
    });
    console.log("[push-to-github] repo created");
  }

  const files = walk(process.cwd());
  console.log(`[push-to-github] uploading ${files.length} files via Contents API`);

  let ok = 0;
  for (const file of files) {
    const buf = readFileSync(file);
    const content = buf.toString("base64");
    let sha;
    try {
      const current = await api(
        `/repos/${finalOwner}/${repoName}/contents/${file}`
      );
      sha = current.sha;
    } catch {
      sha = undefined;
    }

    await api(`/repos/${finalOwner}/${repoName}/contents/${file}`, {
      method: "PUT",
      body: JSON.stringify({
        message: sha ? `Update ${file}` : `Add ${file}`,
        content,
        branch: "main",
        committer: { name: owner, email },
        author: { name: owner, email },
        ...(sha ? { sha } : {}),
      }),
    });
    ok += 1;
    if (ok % 10 === 0 || ok === files.length) {
      console.log(`[push-to-github] ${ok}/${files.length}`);
    }
  }

  console.log(
    `[push-to-github] Success: https://github.com/${finalOwner}/${repoName}`
  );
}

main().catch((error) => {
  console.error("[push-to-github] FAILED:", error.message || error);
  // Fail the build so we notice — user explicitly asked for GitHub upload
  process.exit(1);
});
