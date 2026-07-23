import PageHero from "@/components/PageHero";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" background="/images/page-top-bg/3.jpg" />
      <section className="recent-game-section spad">
        <div className="container">
          <div className="section-title">
            <div className="cata adventure">news</div>
            <h2>Latest From The Blog</h2>
          </div>
          <div className="rg-grid">
            {blogPosts.map((post) => (
              <article className="recent-game-item" key={post.title}>
                <div
                  className="rgi-thumb"
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  <div className={`cata ${post.cata}`}>{post.cata}</div>
                </div>
                <div className="rgi-content">
                  <h5>{post.title}</h5>
                  <p>{post.text}</p>
                  <span className="comment">{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
