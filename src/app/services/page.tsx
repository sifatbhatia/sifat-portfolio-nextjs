import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services",
  description: "Design, development, branding, and strategy services by Sifat Bhatia.",
};

const SERVICES = [
  {
    num: "01",
    title: "Design",
    description:
      "Visual identity, UI/UX, and design systems. From concept to pixel-perfect execution. I design with code in mind — every decision is made knowing how it will be built.",
    deliverables: ["Wireframes & prototypes", "High-fidelity mockups", "Design systems", "Motion design specs", "Accessibility audits"],
  },
  {
    num: "02",
    title: "Development",
    description:
      "React, Next.js, GSAP, and everything in between. Fast, accessible, and built to last. I write production code that scales — no shortcuts, no technical debt you will regret later.",
    deliverables: ["React / Next.js applications", "Animation & interaction systems", "CMS integration", "Performance optimization", "PWA development"],
  },
  {
    num: "03",
    title: "Branding",
    description:
      "Logos, typography, color systems, and the intangible feeling that makes a brand stick. I build identities that work across every touchpoint — web, print, social, and beyond.",
    deliverables: ["Logo design", "Typography systems", "Color palettes", "Brand guidelines", "Social assets"],
  },
  {
    num: "04",
    title: "Strategy",
    description:
      "Content architecture, user journeys, and the thinking before the building. I help teams figure out what to build and why — before a single pixel is pushed.",
    deliverables: ["Content strategy", "User research", "Information architecture", "Technical consulting", "No-code / low-code solutions"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100dvh", background: "#141412", color: "#f1eee7" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "clamp(8rem, 15vh, 12rem) clamp(1.5rem, 6vw, 4rem) clamp(6rem, 10vh, 8rem)" }}>
          <header style={{ marginBottom: "clamp(4rem, 8vh, 6rem)", maxWidth: "800px" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(241,238,231,0.3)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
              Services
            </p>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.02em", margin: "0 0 1.5rem", fontFamily: "var(--font-display)" }}>
              What I do, and how I do it.
            </h1>
            <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.7, color: "rgba(241,238,231,0.5)", margin: 0, fontFamily: "var(--font-body)" }}>
              Full-spectrum design and development practice. From first sketch to deployed code. Every project is built from the ground up — no templates, no compromises.
            </p>
          </header>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {SERVICES.map((svc, i) => (
              <div
                key={svc.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 0.5fr) minmax(0, 1.5fr) minmax(0, 1fr)",
                  gap: "clamp(2rem, 4vw, 4rem)",
                  padding: "clamp(2.5rem, 5vh, 3.5rem) 0",
                  borderTop: i === 0 ? "1px solid rgba(241,238,231,0.1)" : undefined,
                  borderBottom: "1px solid rgba(241,238,231,0.1)",
                  alignItems: "start",
                }}
              >
                <div>
                  <span style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.1em", color: "rgba(241,238,231,0.2)", fontFamily: "var(--font-body)" }}>
                    {svc.num}
                  </span>
                </div>
                <div>
                  <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1, margin: "0 0 1rem", fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
                    {svc.title}
                  </h2>
                  <p style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", lineHeight: 1.7, color: "rgba(241,238,231,0.5)", margin: 0, fontFamily: "var(--font-body)", maxWidth: "40rem" }}>
                    {svc.description}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.65rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(241,238,231,0.25)", margin: "0 0 0.75rem", fontFamily: "var(--font-body)" }}>
                    Deliverables
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    {svc.deliverables.map((d) => (
                      <li key={d} style={{ fontSize: "0.85rem", color: "rgba(241,238,231,0.4)", fontFamily: "var(--font-body)" }}>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "clamp(4rem, 8vh, 6rem)", padding: "clamp(2.5rem, 5vh, 3.5rem)", borderRadius: 20, border: "1px solid rgba(241,238,231,0.08)", background: "rgba(241,238,231,0.02)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "clamp(2rem, 4vw, 4rem)", alignItems: "center" }}>
              <div>
                <p style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 1rem", fontFamily: "var(--font-body)" }}>
                  Process
                </p>
                <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 400, lineHeight: 1.1, margin: "0 0 1rem", fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
                  How we work together.
                </h3>
                <p style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", lineHeight: 1.7, color: "rgba(241,238,231,0.5)", margin: 0, fontFamily: "var(--font-body)" }}>
                  Every project starts with a conversation. No forms to fill, no bureaucratic intake. We talk about what you are trying to achieve, who it is for, and what success looks like. Then I build it — with check-ins, not approvals. You see progress every few days, not at a big reveal.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { step: "Discovery", detail: "1-2 calls to understand the problem, audience, and constraints." },
                  { step: "Design", detail: "Wireframes → visual design → motion specs. You see everything as it develops." },
                  { step: "Build", detail: "Component by component, page by page. Weekly demos, not monthly reviews." },
                  { step: "Launch", detail: "Deployment, analytics, handoff. Plus 30 days of support for anything that breaks." },
                ].map((phase) => (
                  <div key={phase.step} style={{ display: "flex", gap: "1rem", alignItems: "baseline" }}>
                    <span style={{ fontSize: "0.7rem", color: "var(--accent)", fontFamily: "var(--font-body)", fontWeight: 600, minWidth: "5rem" }}>
                      {phase.step}
                    </span>
                    <p style={{ fontSize: "0.85rem", color: "rgba(241,238,231,0.4)", margin: 0, fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                      {phase.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
