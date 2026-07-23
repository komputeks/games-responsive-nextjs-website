# Game Warrior — Games Responsive Website (Next.js)

Frontend-only clone of a classic **Games Responsive HTML Website Template**, rebuilt with **Next.js 16.2.9**.

## Stack

- Next.js `16.2.9` (App Router)
- React 19
- TypeScript
- Pure CSS (no backend, no database)

## Pages

- `/` — Home (hero, news, features, recent games, tournaments, reviews)
- `/games` — Games library + reviews
- `/blog` — Blog grid
- `/forums` — Community topics
- `/contact` — Contact form

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## GitHub upload

Set `GITHUB_PAT` in the environment, then:

```bash
npm run push:github
```

Optional env vars:

- `GITHUB_USERNAME` (default: `Komputeks`)
- `GITHUB_EMAIL` (default: `xpatworld2021@gmail.com`)
- `GITHUB_REPO` (default: `games-responsive-nextjs-website`)
