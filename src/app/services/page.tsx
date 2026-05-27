import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services - Web Design, Development, Branding, and Creative Technology",
  description: "Custom website design, front-end development, brand identity, creative technology, and strategy services from Sifat Bhatia.",
};

const SERVICES = [
  {
    num: "01",
    title: "Custom Website Design",
    description:
      "For artists, agencies, studios, event brands, and creative businesses that need a site with a point of view.",
    deliverables: ["Site strategy and page structure", "Wireframes and high-fidelity design", "Responsive design system", "Motion direction", "Accessibility review"],
  },
  {
    num: "02",
    title: "Front-End Development",
    description:
      "Production websites and interfaces built with modern front-end tools.",
    deliverables: ["React and Next.js builds", "Webflow development", "CMS integration", "Animation and interaction systems", "Performance optimization", "Launch support"],
  },
  {
    num: "03",
    title: "Brand Identity",
    description:
      "Visual systems that make a brand easier to recognize, explain, and use.",
    deliverables: ["Logo and wordmark direction", "Typography and color systems", "Brand guidelines", "Social and launch assets", "Web-ready identity system"],
  },
  {
    num: "04",
    title: "Creative Technology",
    description:
      "Custom digital tools and interactive systems for teams whose ideas do not fit neatly inside a template.",
    deliverables: ["Small web apps and utilities", "AI-assisted workflow prototypes", "WebGL and interactive experiments", "Internal tools", "Technical consulting"],
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
              Websites, brands, and digital products built from idea to launch.
            </h1>
            <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.7, color: "rgba(241,238,231,0.5)", margin: 0, fontFamily: "var(--font-body)" }}>
              I help artists, agencies, founders, and creative teams turn unclear digital ideas into sharp, usable, memorable experiences. That can mean a custom website, a brand identity, a CMS-backed editorial system, a Webflow build, or a small product that solves a specific workflow problem.
            </p>
          </header>

          <div className="services-list" style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {SERVICES.map((svc, i) => (
              <div
                key={svc.num}
                className="services-item"
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
                      <li key={d} style={{ fontSize: "0.85rem", color: "rgba(241,238,231,0.55)", fontFamily: "var(--font-body)" }}>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="services-process" style={{ marginTop: "clamp(4rem, 8vh, 6rem)", padding: "clamp(2.5rem, 5vh, 3.5rem)", borderRadius: 20, border: "1px solid rgba(241,238,231,0.08)", background: "rgba(241,238,231,0.02)" }}>
            <div className="services-process-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "clamp(2rem, 4vw, 4rem)", alignItems: "center" }}>
              <div>
                <p style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 1rem", fontFamily: "var(--font-body)" }}>
                  Process
                </p>
                <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 400, lineHeight: 1.1, margin: "0 0 1rem", fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
                  How we work together.
                </h3>
                <p style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", lineHeight: 1.7, color: "rgba(241,238,231,0.5)", margin: 0, fontFamily: "var(--font-body)" }}>
                  We clarify the audience, the problem, the constraints, and what success should look like. Then I turn the raw idea into structure: pages, flows, visual references, technical approach, and the first design direction. You see the system as it develops with regular demos so the work stays visible and decisions stay grounded.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { step: "Discovery", detail: "We clarify the audience, the problem, the constraints, and what success should look like. This usually takes one or two focused calls." },
                  { step: "Direction", detail: "I turn the raw idea into structure: pages, flows, visual references, technical approach, and the first design direction." },
                  { step: "Design", detail: "You see the system as it develops: wireframes, visual design, key states, motion direction, and the content hierarchy." },
                  { step: "Build", detail: "I build component by component and page by page, with regular demos so the work stays visible and decisions stay grounded." },
                  { step: "Launch", detail: "I handle deployment, QA, analytics basics, handoff, and 30 days of post-launch support for bugs or launch issues." },
                ].map((phase) => (
                  <div key={phase.step} style={{ display: "flex", gap: "1rem", alignItems: "baseline" }}>
                    <span style={{ fontSize: "0.7rem", color: "var(--accent)", fontFamily: "var(--font-body)", fontWeight: 600, minWidth: "5rem" }}>
                      {phase.step}
                    </span>
                    <p style={{ fontSize: "0.85rem", color: "rgba(241,238,231,0.55)", margin: 0, fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                      {phase.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="services-faq" style={{ marginTop: "clamp(4rem, 8vh, 6rem)" }}>
            <p style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 2rem", fontFamily: "var(--font-body)" }}>
              FAQ
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { q: "Do you only design, or do you also build?", a: "I do both. I can handle the visual system and the front-end implementation, which keeps the final site closer to the original idea." },
                { q: "What kinds of clients are the best fit?", a: "Artists, agencies, creative brands, founders, and small teams that need a custom digital presence or product rather than a generic template." },
                { q: "Can you work in Webflow?", a: "Yes. I build custom Webflow sites with CMS collections, reusable components, custom interactions, and editing guardrails for clients." },
                { q: "Can you work with an existing brand?", a: "Yes. I can extend an existing identity into a stronger website or digital system, or rebuild the identity if the current one is holding the project back." },
                { q: "What should I send before reaching out?", a: "Send the current site or idea, the audience, what is not working, the rough timeline, and what you want people to do after landing on the finished experience." },
              ].map((faq, i) => (
                <div key={i} style={{ padding: "1.5rem 0", borderTop: i === 0 ? "1px solid rgba(241,238,231,0.1)" : "1px solid rgba(241,238,231,0.06)" }}>
                  <h4 style={{ fontSize: "1rem", fontWeight: 500, margin: "0 0 0.5rem", fontFamily: "var(--font-body)", color: "#f1eee7" }}>
                    {faq.q}
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "rgba(241,238,231,0.5)", margin: 0, fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
