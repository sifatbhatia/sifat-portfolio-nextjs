"use client";

import { useState } from "react";
import { Link } from "next-view-transitions";
import AnimatedText from "./AnimatedText";

const SERVICES = [
  {
    title: "Design",
    desc: "Visual identity, UI/UX, and design systems. From concept to pixel-perfect execution.",
    icon: "01",
  },
  {
    title: "Development",
    desc: "React, Next.js, GSAP, and everything in between. Fast, accessible, and built to last.",
    icon: "02",
  },
  {
    title: "Branding",
    desc: "Logos, typography, color systems, and the intangible feeling that makes a brand stick.",
    icon: "03",
  },
  {
    title: "Strategy",
    desc: "Content architecture, user journeys, and the thinking before the building.",
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
    >
      <p style={{ fontSize: "0.65rem", fontWeight: 400, letterSpacing: "0.15em", color: "rgba(241,238,231,0.2)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
        {service.icon}
      </p>
      <h3 style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)", fontWeight: 400, margin: "0 0 1rem", fontFamily: "var(--font-display)", color: "#f1eee7" }}>
        {service.title}
      </h3>
      <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "rgba(241,238,231,0.45)", margin: 0, fontFamily: "var(--font-body)" }}>
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
        display: "inline-block", padding: "0.75rem 2rem", borderRadius: "999px",
        border: "1px solid rgba(241,238,231,0.12)",
        color: hovered ? "#f1eee7" : "rgba(241,238,231,0.6)",
        background: hovered ? "rgba(241,238,231,0.06)" : "transparent",
        fontSize: "0.875rem", fontFamily: "var(--font-body)", textDecoration: "none",
        transition: "background 200ms ease, color 200ms ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
