"use client";

import { useState } from "react";
import { Link } from "next-view-transitions";

const letters = [
  { char: "S", w: 181.34 },
  { char: "I", w: 38.30 },
  { char: "F", w: 148.11 },
  { char: "A", w: 181.34 },
  { char: "T", w: 155.96 },
  { char: "B", w: 147.88 },
  { char: "H", w: 148.11 },
  { char: "A", w: 181.34 },
  { char: "T", w: 122.51 },
  { char: "I", w: 38.30 },
  { char: "A", w: 147.65 },
];

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  const [hovered, setHovered] = useState(false);

  const baseStyle = {
    color: hovered ? "#f7f7f2" : "rgba(247,247,242,0.86)",
    textDecoration: "none",
    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
    fontWeight: 750,
    lineHeight: 0.92,
    letterSpacing: "-0.04em",
    textTransform: "uppercase" as const,
    transition: "color 200ms ease",
  } as React.CSSProperties;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" style={baseStyle}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} style={baseStyle}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer style={{
      width: "100%", background: "#030303", color: "#f1eee7",
      padding: "clamp(3rem, 6vh, 5rem) clamp(1.5rem, 6vw, 4rem) 0",
    }}>
      {/* Top: Philosophy / Nav / Connect */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
        gap: "clamp(2rem, 5vw, 6rem)", alignItems: "start",
        maxWidth: "1400px", margin: "0 auto",
        paddingBottom: "clamp(3rem, 6vh, 6rem)",
      }}>
        <div>
          <div style={{
            color: "rgba(247,247,242,0.86)",
            fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
            fontWeight: 700,
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
            fontFamily: "var(--font-body)",
          }}>
            Built on the belief<br />
            that real living<br />
            is meeting.
          </div>
        </div>

        <nav aria-label="Footer navigation" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { href: "/projects", label: "Projects" },
            { href: "/journal", label: "Journal" },
            { href: "/services", label: "Services" },
            { href: "/now", label: "Now" },
          ].map(link => (
            <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>
          ))}
        </nav>

        <nav aria-label="Social links" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <FooterLink href="https://www.instagram.com/siftion/" external>Instagram</FooterLink>
          <FooterLink href="mailto:sifatbht@gmail.com">Email</FooterLink>
        </nav>
      </div>

      {/* Block-letter logo — full viewport width */}
      <div style={{
        width: "100vw", marginLeft: "calc(50% - 50vw)",
        borderTop: "1px solid rgba(247,247,242,0.06)",
        padding: "clamp(2rem, 4vh, 4rem) clamp(1.5rem, 6vw, 4rem)",
        display: "flex", justifyContent: "center",
        boxSizing: "border-box",
      }}>
        <a href="/" aria-label="Back to home" style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          gap: "clamp(0.15rem, 0.4vw, 0.5rem)",
          flexWrap: "wrap", textDecoration: "none",
          maxWidth: "1200px", width: "100%",
        }}>
          {letters.map((l, i) => (
            <div
              key={i}
              title={l.char}
              style={{
                width: `clamp(${l.w * 0.05}px, ${l.w / 1200 * 100}vw, ${l.w}px)`,
                height: `clamp(0.8rem, 4vh, 2.4rem)`,
                background: "#f7f7f2",
                borderRadius: "1px",
              }}
            />
          ))}
        </a>
      </div>
    </footer>
  );
}
