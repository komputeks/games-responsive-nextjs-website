import Hero from "@/components/Hero";
import {
  features,
  latestNews,
  recentGames,
  reviews,
  tournaments,
} from "@/lib/data";

function Stars({ count }: { count: number }) {
  return <div className="rating">{"★".repeat(count)}{"☆".repeat(5 - count)}</div>;
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="latest-news">
        <div className="container news-grid">
          {latestNews.map((item) => (
            <article className="ln-item" key={item.title}>
              <div
                className="ln-thumb"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="ln-text">
                <h5>{item.title}</h5>
                <p>{item.text}</p>
                <div className="ln-meta">{item.date}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section spad">
        <div className="container">
          <div className="feature-grid">
            {features.map((item) => (
              <article
                className="feature-item"
                key={item.title + item.image}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className={`cata ${item.cata}`}>{item.cata}</div>
                <div className="fi-content">
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                  <a className="comment" href="/blog">
                    3 Comments
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="recent-game-section spad" id="recent-games">
        <div className="container">
          <div className="section-title">
            <div className="cata new">new</div>
            <h2>Recent Games</h2>
          </div>
          <div className="rg-grid">
            {recentGames.slice(0, 3).map((game) => (
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
                  <a className="comment" href="/games">
                    {game.comments} Comments
                  </a>
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

      <section className="tournaments-section spad">
        <div className="container">
          <div className="tournament-title">Tournaments</div>
          <div className="tournament-grid">
            {tournaments.map((t) => (
              <article className="tournament-item" key={t.title}>
                <div
                  className="ti-thumb"
                  style={{ backgroundImage: `url(${t.image})` }}
                >
                  <div className="ti-notic">{t.badge}</div>
                </div>
                <div className="ti-content">
                  <h4>{t.title}</h4>
                  <p>{t.text}</p>
                  <ul>
                    {t.meta.map((m) => (
                      <li key={m.label}>
                        <span>{m.label}:</span>
                        {m.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="review-section spad">
        <div className="container">
          <div className="section-title">
            <div className="cata orange">reviews</div>
            <h2>Latest Reviews</h2>
          </div>
          <div className="review-grid">
            {reviews.slice(0, 3).map((review) => (
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
