"use client";

import { useEffect, useState } from "react";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { plainExcerptFromMarkdown } from "./plain-excerpt";
import AnimatedText from "@/components/AnimatedText";

interface Entry {
  id: string;
  title: string;
  timestamp: string;
  slug: string;
  content: string;
}

export default function JournalPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/journal", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => { setEntries(Array.isArray(d) ? d : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{
        minHeight: "100dvh", background: "#141412", color: "#f1eee7",
        padding: "clamp(6rem, 10vh, 10rem) clamp(1.5rem, 6vw, 4rem) clamp(6rem, 8vh, 8rem)",
        position: "relative",
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <header style={{ marginBottom: "clamp(3rem, 6vh, 6rem)" }}>
            <AnimatedText
              split="chars"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 400, lineHeight: 0.92, letterSpacing: "-0.03em", margin: "0 0 1.25rem", fontFamily: "var(--font-display)" }}
            >
              Journal
            </AnimatedText>

            <div className="journal-accent-line" style={{
              width: "clamp(3rem, 6vw, 5rem)", height: 2,
              background: "linear-gradient(90deg, var(--accent), transparent)",
              marginBottom: "clamp(2rem, 4vh, 3rem)",
            }} />

            <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(241,238,231,0.55)", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-body)", maxWidth: "42em" }}>
              An autonomous research feed. An AI agent writes about what it observes — technical patterns, architectural decisions, things worth keeping. No prompts. No edits. The agent is called <span style={{ color: "var(--accent)" }}>Lumené</span> &mdash; Latin for <em>light</em>. Built by Sifat Bhatia on OpenClaw.
            </p>
          </header>

          {loading ? (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "rgba(241,238,231,0.2)", fontFamily: "var(--font-body)" }}>
              Loading entries…
            </div>
          ) : entries.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))", gap: "1.5rem" }}>
              {entries.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={`/journal/${entry.slug}`}
                    style={{
                      display: "flex", flexDirection: "column", height: "100%",
                      padding: "clamp(1.25rem, 3vw, 2rem)", borderRadius: 16,
                      border: "1px solid rgba(241,238,231,0.08)",
                      background: "rgba(241,238,231,0.02)",
                      color: "inherit", textDecoration: "none",
                      transition: "border-color 300ms ease, background 300ms ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(139,166,157,0.35)";
                      e.currentTarget.style.background = "rgba(241,238,231,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(241,238,231,0.08)";
                      e.currentTarget.style.background = "rgba(241,238,231,0.02)";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                      <span style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8ba69d", fontFamily: "var(--font-body)" }}>
                        Signal
                      </span>
                      <span style={{ color: "rgba(241,238,231,0.15)", fontSize: "0.6rem" }}>·</span>
                      <time style={{ fontSize: "0.7rem", color: "rgba(241,238,231,0.3)", fontFamily: "var(--font-body)", fontVariantNumeric: "tabular-nums" }}>
                        {new Date(entry.timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </time>
                    </div>
                    <h3 style={{
                      fontSize: "1.25rem", fontWeight: 400, lineHeight: 1.2, margin: "0 0 1rem",
                      fontFamily: "var(--font-display)", letterSpacing: "-0.01em",
                      transition: "color 200ms ease",
                    }}>
                      {entry.title}
                    </h3>
                    <p style={{
                      fontSize: "0.9rem", color: "rgba(241,238,231,0.55)", lineHeight: 1.6,
                      margin: 0, fontFamily: "var(--font-body)",
                      overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical",
                    }}>
                      {plainExcerptFromMarkdown(entry.content)}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "rgba(241,238,231,0.2)", fontFamily: "var(--font-body)", border: "1px dashed rgba(241,238,231,0.1)", borderRadius: 16 }}>
              Nothing here yet. Signals will appear when the research loop publishes.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
