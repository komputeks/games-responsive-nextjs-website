import Link from "next/link";
import { Facebook, Instagram, Twitch, Twitter, Youtube } from "lucide-react";
import { latestNews } from "@/lib/data";

export default function Footer() {
  return (
    <>
      <section className="footer-top-section">
        <div className="container footer-widgets">
          <div className="footer-widget">
            <div className="footer-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/footer-logo.png" alt="" width={48} height={48} />
              Game <span>Warrior</span>
            </div>
            <p>
              Game Warrior is your responsive gaming magazine for releases,
              reviews, tournaments, and community stories. Built for fans who
              live between matchmaking queues and midnight raids.
            </p>
            <p>
              1481 Creekside Lane
              <br />
              Avila Beach, CA 93424
              <br />
              +53 345 7953 32453
              <br />
              office@gamewarrior.com
            </p>
          </div>

          <div className="footer-widget">
            <h5>Latest Posts</h5>
            {latestNews.map((item) => (
              <div className="fw-latest" key={item.title}>
                <div
                  className="thumb"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div>
                  <h6>{item.title}</h6>
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="footer-widget">
            <h5>Top Comments</h5>
            <ul className="fw-comments">
              <li>
                <strong>John Doe</strong> on <Link href="/blog">Night Raid guide</Link>
              </li>
              <li>
                <strong>Sarah Lee</strong> on <Link href="/games">Doom tournament</Link>
              </li>
              <li>
                <strong>Mike Ross</strong> on <Link href="/blog">Ranked climb tips</Link>
              </li>
              <li>
                <strong>Ava Chen</strong> on <Link href="/games">Assassin’s Creed review</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Game Warrior. All rights reserved.</p>
          <div className="socials">
            <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" aria-label="Youtube"><Youtube size={16} /></a>
            <a href="#" aria-label="Twitch"><Twitch size={16} /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
