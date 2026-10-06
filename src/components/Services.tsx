"use client";

import { Link } from "next-view-transitions";
import AnimatedText from "./AnimatedText";

const SERVICES = [
  {
    title: "Web Design and Development",
    desc: "Websites with a clear point of view, from first structure to polished front end.",
    icon: "01",
  },
  {
    title: "Brand and Identity Systems",
    desc: "Identity systems that make a world recognizable without sanding it flat.",
    icon: "02",
  },
  {
    title: "Creative Technology",
    desc: "Interactive systems and custom tools for ideas that need a more specific form.",
    icon: "03",
  },
  {
    title: "Strategy and Structure",
    desc: "Content, structure, and technical decisions made before the build gets expensive.",
    icon: "04",
  },
];

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  return (
    <article
      className="service-card"
    >
      <p className="service-index">
        {service.icon}
      </p>
      <div className="service-card-main">
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
      </div>
    </article>
  );
}

function HoverLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="view-all-projects"
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.85rem 2.5rem", borderRadius: "999px",
        border: "1px solid rgba(241,238,231,0.15)",
        color: "#f1eee7",
        fontSize: "0.9rem", fontFamily: "var(--font-body)", textDecoration: "none",
        fontWeight: 500, letterSpacing: "0.02em",
      }}
    >
      {children}
      <span className="view-all-arrow" aria-hidden="true">→</span>
    </Link>
  );
}

export default function Services() {
  return (
    <section className="services-section" style={{ padding: "clamp(5rem, 10vh, 10rem) clamp(1.5rem, 6vw, 4rem)", maxWidth: "1400px", margin: "0 auto" }}>
      <header className="services-header">
        <div className="services-heading">
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(241,238,231,0.3)", margin: "0 0 1rem", fontFamily: "var(--font-body)" }}>
            Services
          </p>
          <AnimatedText
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.02em", margin: 0, fontFamily: "var(--font-display)", color: "#f1eee7" }}
          >
            What I do.
          </AnimatedText>
        </div>
        <p className="services-intro">
          Design, direction, and code for things that need to work and feel like themselves.
        </p>
      </header>

      <div className="services-grid">
        {SERVICES.map(s => (
          <ServiceCard key={s.title} service={s} />
        ))}
      </div>

      <div style={{ marginTop: "clamp(2rem, 4vh, 3rem)", textAlign: "center" }}>
          <HoverLink href="/services">Learn more</HoverLink>
      </div>
    </section>
  );
}
