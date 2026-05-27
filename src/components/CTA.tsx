"use client";

import { useState, useCallback } from "react";
import AnimatedText from "./AnimatedText";

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  const [toast, setToast] = useState(false);
  const [icon, setIcon] = useState("→");

  const handleClick = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("sifatbht@gmail.com");
      setToast(true);
      setIcon("✓");
      setTimeout(() => { setToast(false); setIcon("→"); }, 2000);
    } catch {
      window.location.href = href;
    }
  }, [href]);

  const handleDblClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:sifatbht@gmail.com";
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <button
        type="button"
        onClick={handleClick}
        onDoubleClick={handleDblClick}
        aria-describedby={toast ? "cta-email-copy-status" : undefined}
        style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
          padding: "0.85rem 2.5rem", borderRadius: "999px", minWidth: 200,
          background: hovered ? "#282821" : "#141412",
          color: "#f1eee7", border: "none", cursor: "pointer",
          fontSize: "0.9rem", fontFamily: "var(--font-body)", textDecoration: "none",
          fontWeight: 500, letterSpacing: "0.02em",
          boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.2)" : "0 2px 8px rgba(0,0,0,0.1)",
          transition: "background 200ms ease, box-shadow 200ms ease, transform 200ms ease",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        {children}
        <span style={{
          display: "inline-block",
          transition: "transform 200ms ease, opacity 200ms ease",
          transform: hovered && icon === "→" ? "translateX(4px)" : "translateX(0)",
          opacity: icon === "→" ? (hovered ? 1 : 0.5) : 1,
        }}>{icon}</span>
      </button>
      {toast && (
        <span id="cta-email-copy-status" role="status" aria-live="polite" style={{
          position: "absolute", bottom: "-2rem", left: "50%", transform: "translateX(-50%)",
          fontSize: "0.75rem", color: "rgba(20,20,18,0.65)", fontFamily: "var(--font-body)",
          whiteSpace: "nowrap", pointerEvents: "none",
          animation: "toast-fade 2s ease forwards",
        }}>
          Copied — double-click to open mail
        </span>
      )}
    </div>
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
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
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
          color: "rgba(20,20,18,0.55)", margin: "0 0 2rem", fontFamily: "var(--font-body)",
        }}>
          Get in touch
        </p>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <AnimatedText
            split="chars"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 400, lineHeight: 0.95,
              letterSpacing: "-0.04em", fontFamily: "var(--font-display)",
              justifyContent: "center",
            }}
          >
            Building something that needs to feel more true?
          </AnimatedText>
        </div>
        <AnimatedText
          as="p"
          delay={0.15}
          style={{
            fontSize: "clamp(1rem, 1.4vw, 1.2rem)", lineHeight: 1.7,
            color: "rgba(20,20,18,0.7)", margin: "0 0 3rem", fontFamily: "var(--font-body)",
            maxWidth: "32rem", marginLeft: "auto", marginRight: "auto",
          }}
        >
          Send a short note with what you are making, what feels unresolved, and what kind of encounter the finished thing needs to create.
        </AnimatedText>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <PrimaryButton href="mailto:sifatbht@gmail.com">sifatbht@gmail.com</PrimaryButton>
          <SecondaryButton href="https://www.instagram.com/siftion/">Instagram</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
