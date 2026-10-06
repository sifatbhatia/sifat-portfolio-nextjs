"use client";

import { Link } from "next-view-transitions";
import AnimatedText from "@/components/AnimatedText";

export default function NotFound() {
  return (
    <main style={{
      minHeight: "100dvh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "#141412", color: "#f1eee7", padding: "2rem",
    }}>
      <div style={{ maxWidth: "36rem", textAlign: "center" }}>
        <p style={{
          fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase",
          color: "rgba(241,238,231,0.25)", margin: "0 0 2rem",
          fontFamily: "var(--font-body)",
        }}>
          404
        </p>

        <AnimatedText
          split="chars"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 400, lineHeight: 0.92,
            letterSpacing: "-0.03em", margin: "0 0 1.5rem",
            fontFamily: "var(--font-display)", textAlign: "center", justifyContent: "center",
          }}
        >
          This page doesn&apos;t exist.
        </AnimatedText>

        <AnimatedText
          as="p"
          delay={0.15}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.6,
            color: "rgba(241,238,231,0.5)", margin: "0 0 3rem",
            fontFamily: "var(--font-body)", maxWidth: "28rem", marginLeft: "auto", marginRight: "auto",
          }}
        >
          But you do. And you showed up. That&apos;s the part that matters.
        </AnimatedText>

        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{
            padding: "0.75rem 2rem", borderRadius: "999px",
            background: "rgba(241,238,231,0.08)", border: "1px solid rgba(241,238,231,0.12)",
            color: "#f1eee7", textDecoration: "none", fontSize: "0.875rem",
            fontFamily: "var(--font-body)", transition: "background 200ms ease",
          }}>
            Go home
          </Link>
          <Link href="/projects" style={{
            padding: "0.75rem 2rem", borderRadius: "999px",
            background: "transparent", border: "1px solid rgba(241,238,231,0.08)",
            color: "rgba(241,238,231,0.5)", textDecoration: "none", fontSize: "0.875rem",
            fontFamily: "var(--font-body)", transition: "background 200ms ease, color 200ms ease",
          }}>
            See work
          </Link>
        </div>
      </div>
    </main>
  );
}
