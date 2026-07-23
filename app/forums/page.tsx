import PageHero from "@/components/PageHero";
import { forumTopics } from "@/lib/data";

export default function ForumsPage() {
  return (
    <>
      <PageHero title="Forums" background="/images/page-top-bg/4.jpg" />
      <section className="spad" style={{ background: "#fff" }}>
        <div className="container">
          <div className="section-title">
            <div className="cata strategy">community</div>
            <h2>Active Forum Topics</h2>
          </div>
          <div
            style={{
              display: "grid",
              gap: 16,
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {forumTopics.map((topic) => (
              <article
                key={topic.title}
                style={{
                  border: "1px solid #d6dee7",
                  background: "#eef2f6",
                  borderRadius: 8,
                  padding: "20px 22px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 12,
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    className={`cata ${
                      topic.tag === "Support"
                        ? "new"
                        : topic.tag === "Official"
                          ? "orange"
                          : topic.tag === "Media"
                            ? "adventure"
                            : "racing"
                    }`}
                    style={{ marginBottom: 10 }}
                  >
                    {topic.tag}
                  </div>
                  <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 500 }}>
                    {topic.title}
                  </h3>
                  <p style={{ margin: 0, color: "#878787", fontSize: 14 }}>
                    Started by <strong style={{ color: "#131313" }}>{topic.author}</strong>
                  </p>
                </div>
                <div style={{ textAlign: "right", color: "#131313", fontWeight: 500 }}>
                  {topic.replies}
                  <div style={{ color: "#878787", fontSize: 12, fontWeight: 400 }}>
                    replies
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
