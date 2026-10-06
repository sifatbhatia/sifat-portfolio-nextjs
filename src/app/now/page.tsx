import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pressLinks = [
  {
    title: "VoyageLA",
    description: "A conversation about building a creative practice in Los Angeles.",
    href: "https://voyagela.com/interview/meet-sifat-bhatia-of-los-angeles/",
  },
  {
    title: "Shoutout LA",
    description: "On web design, development, and the work behind Siftion.",
    href: "https://shoutoutla.com/meet-sifat-bhatia-web-designer-developer/",
  },
  {
    title: "Bold Journey",
    description: "A profile on creative growth, resilience, and career direction.",
    href: "https://boldjourney.com/meet-sifat-bhatia",
  },
];

export const metadata: Metadata = {
  title: "Now",
  description: "What Sifat Bhatia is currently working on, learning, and looking for.",
};

export default function NowPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100dvh", background: "#141412", color: "#f1eee7" }}>
        <div className="now-page" style={{ maxWidth: "900px", margin: "0 auto", padding: "clamp(8rem, 15vh, 12rem) clamp(1.5rem, 6vw, 4rem) clamp(6rem, 10vh, 8rem)" }}>
          <header style={{ marginBottom: "clamp(4rem, 8vh, 6rem)" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(241,238,231,0.3)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
              Now
            </p>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.02em", margin: 0, fontFamily: "var(--font-display)" }}>
              Where my attention lives.
            </h1>
          </header>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3rem, 6vh, 4rem)" }}>
            <section>
              <p style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                Looking for
              </p>
              <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.7, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}>
                I&apos;m actively looking for my next full-time role as a Design Engineer, Creative Technologist, or Senior Frontend Developer. Open to remote, hybrid, and in-person opportunities in Los Angeles and beyond.
              </p>
            </section>

            <section>
              <p style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                Building
              </p>
              <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.7, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}>
                Working on Siftion — my design and development practice. Rebuilding my portfolio in Next.js — this site. Experimenting with AI-assisted design workflows and what the web could feel like when you stop thinking in templates. Extending Lumière, a system at the intersection of design, architecture, and synthetic cognition.
              </p>
            </section>

            <section>
              <p style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                Learning
              </p>
              <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.7, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}>
                Diving deeper into animations, interaction design, design systems architecture, creative coding with WebGL/Three.js, and the intersection of AI and frontend development. Always studying how great brands make people feel something.
              </p>
            </section>

            <section>
              <p style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                Living
              </p>
              <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.7, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}>
                Based in Los Angeles. Sima & Lia have been with me for about a year now. Exploring coffee shops, nature, spirituality, and the music/entertainment design niche. Trying to build things that matter while the world feels uncertain.
              </p>
            </section>

            <section>
              <p style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                Elsewhere
              </p>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {pressLinks.map((link) => (
                  <a
                    key={link.href}
                    className="now-press-link"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "minmax(0, 0.55fr) minmax(0, 1.45fr)",
                      gap: "clamp(1rem, 3vw, 2rem)",
                      padding: "1rem 0",
                      borderTop: "1px solid rgba(241,238,231,0.08)",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <span style={{ fontSize: "0.85rem", color: "rgba(241,238,231,0.42)", fontFamily: "var(--font-body)" }}>
                      {link.title}
                    </span>
                    <span style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.55, color: "rgba(241,238,231,0.64)", fontFamily: "var(--font-body)" }}>
                      {link.description} <span aria-hidden="true" style={{ color: "var(--accent)" }}>↗</span>
                    </span>
                  </a>
                ))}
              </div>
            </section>

            <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(241,238,231,0.08)" }}>
              <p style={{ fontSize: "0.8rem", color: "rgba(241,238,231,0.3)", fontFamily: "var(--font-body)" }}>
                Last updated: July 2026
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
