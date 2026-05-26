"use client";

import { useState } from "react";
import { Link } from "next-view-transitions";

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  const [hovered, setHovered] = useState(false);

  const base = {
    color: hovered ? "#f1eee7" : "rgba(241,238,231,0.5)",
    textDecoration: "none",
    fontSize: "0.875rem",
    fontWeight: 400,
    letterSpacing: "0.02em",
    fontFamily: "var(--font-body)",
    transition: "color 200ms ease",
  } as React.CSSProperties;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" style={base}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} style={base}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer style={{
      width: "100%", background: "#030303", color: "#f1eee7",
      padding: "clamp(4rem, 8vh, 6rem) clamp(1.5rem, 6vw, 4rem) clamp(2rem, 4vh, 3rem)",
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Top row: Nav / Connect / Philosophy */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1.5fr)",
          gap: "clamp(2rem, 4vw, 4rem)",
          marginBottom: "clamp(3rem, 5vh, 5rem)",
        }}>
          <div>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(241,238,231,0.2)", margin: "0 0 1.25rem", fontFamily: "var(--font-body)" }}>
              Navigate
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/journal">Journal</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/now">Now</FooterLink>
            </nav>
          </div>

          <div>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(241,238,231,0.2)", margin: "0 0 1.25rem", fontFamily: "var(--font-body)" }}>
              Connect
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <FooterLink href="https://www.instagram.com/sifatxo/" external>Instagram</FooterLink>
              <FooterLink href="mailto:sifatbht@gmail.com">Email</FooterLink>
            </nav>
          </div>

          <div>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(241,238,231,0.2)", margin: "0 0 1.25rem", fontFamily: "var(--font-body)" }}>
              Philosophy
            </p>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "rgba(241,238,231,0.35)", margin: 0, fontFamily: "var(--font-body)", maxWidth: "24em" }}>
              Built on the belief that real living is meeting.
            </p>
          </div>
        </div>

        {/* Logo */}
        <a href="/" aria-label="Back to home" style={{
          display: "flex", justifyContent: "center",
          padding: "clamp(1.5rem, 3vh, 3rem) 0",
          borderTop: "1px solid rgba(241,238,231,0.06)",
          borderBottom: "1px solid rgba(241,238,231,0.06)",
        }}>
          <img
            src="/assets/Siftion.svg"
            alt="Siftion"
            style={{
              display: "block", width: "100%", maxWidth: "400px",
              height: "auto", filter: "invert(1)",
            }}
          />
        </a>

        {/* Bottom bar */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: "1.5rem",
          color: "rgba(241,238,231,0.2)",
          fontSize: "0.75rem", fontFamily: "var(--font-body)",
        }}>
          <span>Los Angeles</span>
          <span>&copy; SIFTION</span>
          <span>Design &amp; Development</span>
        </div>
      </div>
    </footer>
  );
}
