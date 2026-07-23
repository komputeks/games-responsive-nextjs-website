import PageHero from "@/components/PageHero";
import { recentGames, reviews } from "@/lib/data";

function Stars({ count }: { count: number }) {
  return <div className="rating">{"★".repeat(count)}{"☆".repeat(5 - count)}</div>;
}

export default function GamesPage() {
  return (
    <>
      <PageHero title="Games" background="/images/page-top-bg/2.jpg" />

      <section className="recent-game-section spad">
        <div className="container">
          <div className="section-title">
            <div className="cata new">library</div>
            <h2>All Recent Games</h2>
          </div>
          <div className="rg-grid">
            {recentGames.map((game) => (
              <article className="recent-game-item" key={game.title + game.image}>
                <div
                  className="rgi-thumb"
                  style={{ backgroundImage: `url(${game.image})` }}
                >
                  <div className={`cata ${game.cata}`}>{game.cata}</div>
                </div>
                <div className="rgi-content">
                  <h5>{game.title}</h5>
                  <p>{game.text}</p>
                  <span className="comment">{game.comments} Comments</span>
                  <div className="rgi-extra">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/icons/star.png" alt="" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/icons/heart.png" alt="" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="review-section spad">
        <div className="container">
          <div className="section-title">
            <div className="cata orange">scores</div>
            <h2>Game Reviews</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-item" key={review.title}>
                <div
                  className="review-cover"
                  style={{ backgroundImage: `url(${review.image})` }}
                >
                  <div className={`score ${review.scoreClass}`.trim()}>
                    {review.score}
                  </div>
                </div>
                <div className="review-text">
                  <h5>{review.title}</h5>
                  <p>{review.text}</p>
                  <Stars count={review.rating} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
