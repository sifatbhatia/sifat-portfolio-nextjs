"use client";

import { useState } from "react";
import { Link } from "next-view-transitions";
import AnimatedText from "./AnimatedText";

const SERVICES = [
  {
    title: "Web Design and Development",
    desc: "Custom React, Next.js, Webflow, and CMS-backed websites built for speed, accessibility, responsive behavior, and long-term maintainability.",
    icon: "01",
  },
  {
    title: "Brand and Identity Systems",
    desc: "Logos, typography, color systems, art direction, and reusable design rules that make a brand easier to recognize and easier to use.",
    icon: "02",
  },
  {
    title: "Creative Technology",
    desc: "Motion systems, interactive interfaces, WebGL experiments, AI-assisted workflows, and custom tools for teams that need something more specific than off-the-shelf software.",
    icon: "03",
  },
  {
    title: "Strategy and Structure",
    desc: "Content architecture, user journeys, technical planning, and product thinking before the build starts.",
    icon: "04",
  },
];

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        padding: "clamp(1.5rem, 3vw, 2.5rem)", borderRadius: 16,
        borderColor: hovered ? "rgba(139,166,157,0.3)" : "rgba(241,238,231,0.08)",
        background: hovered ? "rgba(241,238,231,0.04)" : "rgba(241,238,231,0.02)",
        transition: "border-color 300ms ease, background 300ms ease",
        borderWidth: 1, borderStyle: "solid",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <p style={{ fontSize: "0.65rem", fontWeight: 400, letterSpacing: "0.15em", color: "rgba(241,238,231,0.2)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
        {service.icon}
      </p>
      <h3 style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)", fontWeight: 400, margin: "0 0 1rem", fontFamily: "var(--font-display)", color: "#f1eee7" }}>
        {service.title}
      </h3>
      <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "rgba(241,238,231,0.55)", margin: 0, fontFamily: "var(--font-body)" }}>
        {service.desc}
      </p>
    </div>
  );
}

function HoverLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      style={{
        display: "inline-block", padding: "0.85rem 2.5rem", borderRadius: "999px",
        border: "1px solid rgba(241,238,231,0.15)",
        color: hovered ? "#f1eee7" : "rgba(241,238,231,0.7)",
        background: hovered ? "rgba(241,238,231,0.10)" : "rgba(241,238,231,0.04)",
        fontSize: "0.9rem", fontFamily: "var(--font-body)", textDecoration: "none",
        fontWeight: 500, letterSpacing: "0.02em",
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.1)",
        transition: "background 200ms ease, color 200ms ease, box-shadow 200ms ease, transform 200ms ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}

export default function Services() {
  return (
    <section style={{ padding: "clamp(4rem, 8vh, 8rem) clamp(1.5rem, 6vw, 4rem)", maxWidth: "1400px", margin: "0 auto" }}>
      <header style={{ marginBottom: "clamp(3rem, 6vh, 5rem)" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(241,238,231,0.3)", margin: "0 0 1rem", fontFamily: "var(--font-body)" }}>
          Services
        </p>
        <AnimatedText
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.02em", margin: 0, fontFamily: "var(--font-display)", color: "#f1eee7" }}
        >
          What I do.
        </AnimatedText>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.5rem" }}>
        {SERVICES.map(s => (
          <ServiceCard key={s.title} service={s} />
        ))}
      </div>

      <div style={{ marginTop: "clamp(2rem, 4vh, 3rem)", textAlign: "center" }}>
        <HoverLink href="/services">Learn more →</HoverLink>
      </div>
    </section>
  );
}
