"use client";

import { Link } from "next-view-transitions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";
import AnimatedText from "@/components/AnimatedText";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "clamp(6rem, 10vh, 10rem) clamp(1.5rem, 6vw, 4rem) clamp(6rem, 8vh, 8rem)", maxWidth: "1400px", margin: "0 auto" }}>
        <header style={{ marginBottom: "clamp(3rem, 6vh, 6rem)" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(241,238,231,0.3)", margin: "0 0 1rem", fontFamily: "var(--font-body)" }}>Work</p>
          <AnimatedText
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.02em", margin: 0, fontFamily: "var(--font-display)", color: "#f1eee7" }}
          >
            Everything I&apos;ve built, and who I built it with.
          </AnimatedText>
        </header>

        <div style={{ display: "grid", gap: 0 }}>
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              style={{
                display: "block", padding: "clamp(1.5rem, 3vh, 2.5rem) 0",
                borderBottom: "1px solid rgba(241,238,231,0.1)",
                color: "inherit", textDecoration: "none",
                transition: "padding-left 200ms ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.paddingLeft = "1rem")}
              onMouseLeave={e => (e.currentTarget.style.paddingLeft = "0")}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "2rem", flexWrap: "wrap" }}>
                <div>
                  <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(241,238,231,0.3)", margin: "0 0 0.5rem", fontFamily: "var(--font-body)" }}>
                    {String(i + 1).padStart(2, "0")} &middot; {p.role}
                  </p>
                  <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, margin: 0, fontFamily: "var(--font-display)", color: "#f1eee7" }}>
                    {p.title}
                  </h2>
                  <p style={{ fontSize: "1rem", color: "rgba(241,238,231,0.4)", margin: "0.5rem 0 0", maxWidth: "36rem", fontFamily: "var(--font-body)" }}>
                    {p.description}
                  </p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {p.stack.slice(0, 3).map(s => (
                    <span key={s} style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(241,238,231,0.25)", padding: "0.35rem 0.75rem", border: "1px solid rgba(241,238,231,0.08)", borderRadius: "999px" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
