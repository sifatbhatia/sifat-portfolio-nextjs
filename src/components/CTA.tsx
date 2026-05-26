"use client";

import { useState } from "react";
import AnimatedText from "./AnimatedText";

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
        padding: "0.85rem 2.5rem", borderRadius: "999px", minWidth: 200,
        background: hovered ? "#282821" : "#141412",
        color: "#f1eee7",
        fontSize: "0.9rem", fontFamily: "var(--font-body)", textDecoration: "none",
        fontWeight: 500, letterSpacing: "0.02em",
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.2)" : "0 2px 8px rgba(0,0,0,0.1)",
        transition: "background 200ms ease, box-shadow 200ms ease, transform 200ms ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <span style={{
        display: "inline-block",
        transition: "transform 200ms ease, opacity 200ms ease",
        transform: hovered ? "translateX(4px)" : "translateX(0)",
        opacity: hovered ? 1 : 0.5,
      }}>→</span>
    </a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
        padding: "0.85rem 2.5rem", borderRadius: "999px", minWidth: 200,
        border: "1px solid rgba(20,20,18,0.2)",
        color: hovered ? "#141412" : "rgba(20,20,18,0.6)",
        background: hovered ? "rgba(20,20,18,0.06)" : "transparent",
        fontSize: "0.9rem", fontFamily: "var(--font-body)", textDecoration: "none",
        fontWeight: 500, letterSpacing: "0.02em",
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.08)" : "none",
        transition: "background 200ms ease, color 200ms ease, box-shadow 200ms ease, transform 200ms ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <span style={{
        display: "inline-block",
        transition: "transform 200ms ease, opacity 200ms ease",
        transform: hovered ? "translateX(4px)" : "translateX(0)",
        opacity: hovered ? 1 : 0.5,
      }}>↗</span>
    </a>
  );
}

export default function CTA() {
  return (
    <section className="cta-section" style={{
      padding: "clamp(6rem, 12vh, 10rem) clamp(1.5rem, 6vw, 4rem)",
      background: "#f1eee7",
      color: "#141412",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
        <p style={{
          fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase",
          color: "rgba(20,20,18,0.35)", margin: "0 0 2rem", fontFamily: "var(--font-body)",
        }}>
          Get in touch
        </p>
        <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <AnimatedText
              split="chars"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 400, lineHeight: 0.95,
                letterSpacing: "-0.03em", fontFamily: "var(--font-display)",
              }}
            >
              Let&apos;s build something that matters.
            </AnimatedText>
          </div>
        </div>
        <AnimatedText
          as="p"
          delay={0.15}
          style={{
            fontSize: "clamp(1rem, 1.4vw, 1.2rem)", lineHeight: 1.7,
            color: "rgba(20,20,18,0.55)", margin: "0 0 3rem", fontFamily: "var(--font-body)",
            maxWidth: "32rem", marginLeft: "auto", marginRight: "auto",
          }}
        >
          I work with people who care deeply about what they make. If that&apos;s you, let&apos;s talk.
        </AnimatedText>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <PrimaryButton href="mailto:sifatbht@gmail.com">sifatbht@gmail.com</PrimaryButton>
          <SecondaryButton href="https://www.instagram.com/siftion/">Instagram</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
