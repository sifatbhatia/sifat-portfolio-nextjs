"use client";

import { useState } from "react";
import { Link } from "next-view-transitions";

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  const [hovered, setHovered] = useState(false);

  const baseStyle = {
    color: hovered ? "#f1eee7" : "rgba(241,238,231,0.5)",
    textDecoration: "none",
    fontSize: "clamp(1.25rem, 1.8vw, 2rem)",
    fontWeight: 750,
    lineHeight: 0.92,
    letterSpacing: "-0.055em",
    textTransform: "uppercase",
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
      fontFamily: "var(--font-display)",
      padding: "clamp(3rem, 6vh, 5rem) clamp(1.5rem, 6vw, 4rem) clamp(1.5rem, 3vw, 2.5rem)",
    }}>
      {/* Top: Nav / Connect / Philosophy */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1.2fr)",
        gap: "clamp(2rem, 5vw, 6rem)", alignItems: "start",
        maxWidth: "1400px", margin: "0 auto",
        paddingTop: "clamp(2rem, 4vh, 4rem)",
        paddingBottom: "clamp(3rem, 5vh, 5rem)",
      }}>
        <div>
          <p style={{
            fontSize: "clamp(0.7rem, 1vw, 0.85rem)", fontWeight: 400, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "rgba(241,238,231,0.3)", margin: "0 0 1.5rem",
            fontFamily: "var(--font-body)",
          }}>
            Navigate
          </p>
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
        </div>

        <div>
          <p style={{
            fontSize: "clamp(0.7rem, 1vw, 0.85rem)", fontWeight: 400, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "rgba(241,238,231,0.3)", margin: "0 0 1.5rem",
            fontFamily: "var(--font-body)",
          }}>
            Connect
          </p>
          <nav aria-label="Social links" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <FooterLink href="https://www.instagram.com/siftion/" external>Instagram</FooterLink>
            <FooterLink href="mailto:sifatbht@gmail.com">Email</FooterLink>
          </nav>
        </div>

        <div>
          <p style={{
            fontSize: "clamp(0.7rem, 1vw, 0.85rem)", fontWeight: 400, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "rgba(241,238,231,0.3)", margin: "0 0 1.5rem",
            fontFamily: "var(--font-body)",
          }}>
            Philosophy
          </p>
          <span style={{
            display: "block", color: "rgba(241,238,231,0.5)",
            fontSize: "clamp(0.8rem, 1.1vw, 0.95rem)", fontWeight: 400,
            lineHeight: 1.5, letterSpacing: "0.02em", fontFamily: "var(--font-body)",
          }}>
            Built on the belief that real living is meeting.
          </span>
        </div>
      </div>

      {/* SIFTION Logo — full viewport width */}
      <div style={{
        width: "100vw", marginLeft: "calc(50% - 50vw)",
        borderTop: "1px solid rgba(241,238,231,0.06)",
        borderBottom: "1px solid rgba(241,238,231,0.06)",
      }}>
        <a href="/" aria-label="Back to home" style={{
          display: "block", width: "100%", padding: "clamp(2rem, 5vh, 5rem) clamp(1.5rem, 6vw, 4rem)",
          lineHeight: 0, textAlign: "center",
        }}>
          <img
            src="/assets/Siftion.svg"
            alt="Siftion"
            style={{
              display: "inline-block", width: "100%", maxWidth: "1200px",
              maxHeight: "clamp(10rem, 28vh, 24rem)", height: "auto",
              objectFit: "contain", filter: "invert(1)",
            }}
          />
        </a>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: "1400px", margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
        gap: "clamp(1rem, 3vw, 3rem)", alignItems: "end",
        paddingTop: "clamp(1.5rem, 3vh, 2.5rem)",
        color: "rgba(241,238,231,0.4)",
        fontSize: "clamp(0.75rem, 1vw, 0.9rem)", fontWeight: 400,
        letterSpacing: "0.05em", fontFamily: "var(--font-body)",
      }}>
        <span>Los Angeles</span>
        <span style={{ textAlign: "center" }}>&copy; SIFTION</span>
        <span style={{ textAlign: "right" }}>Design &amp; Development</span>
      </div>
    </footer>
  );
}
