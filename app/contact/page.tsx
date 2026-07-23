import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" background="/images/page-top-bg/5.jpg" />
      <section className="spad" style={{ background: "#fff" }}>
        <div className="container contact-grid">
          <form className="contact-form">
            <h3 style={{ margin: "0 0 8px", fontSize: 28, fontWeight: 500 }}>
              Get in touch
            </h3>
            <p style={{ margin: "0 0 8px", color: "#878787", lineHeight: 1.7 }}>
              Questions about reviews, partnerships, or tournaments? Send a message
              and the Game Warrior team will get back to you.
            </p>
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required />
            <button className="site-btn" type="submit">
              Send Message
            </button>
          </form>

          <aside className="contact-info">
            <h4>Contact Info</h4>
            <p>
              <strong>Address</strong>
              <br />
              1481 Creekside Lane
              <br />
              Avila Beach, CA 93424
            </p>
            <p>
              <strong>Phone</strong>
              <br />
              +53 345 7953 32453
            </p>
            <p>
              <strong>Email</strong>
              <br />
              office@gamewarrior.com
            </p>
            <p>
              <strong>Hours</strong>
              <br />
              Mon–Fri: 9:00 – 18:00
              <br />
              Sat–Sun: Community events only
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
