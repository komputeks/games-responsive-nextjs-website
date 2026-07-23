"use client";

import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/data";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className={`hero-section ${slide.imageClass}`.trim()}>
      <div className="hero-content">
        <h1>
          {slide.titleBefore}
          <span>{slide.titleAccent}</span>
          {slide.titleAfter}
        </h1>
        <p>{slide.text}</p>
        <a className="site-btn" href="#recent-games">
          Read More
        </a>
        <div className="hero-dots" role="tablist" aria-label="Hero slides">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              className={i === index ? "active" : undefined}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
