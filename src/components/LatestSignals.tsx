"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import { plainExcerptFromMarkdown } from "@/app/journal/plain-excerpt";
import AnimatedText from "./AnimatedText";

interface Entry {
  id: string;
  title: string;
  timestamp: string;
  slug: string;
  content: string;
}

function useMediaQuery(query: string): boolean {
  const subscribe = useCallback((notify: () => void) => {
    const mq = window.matchMedia(query);
    mq.addEventListener("change", notify);
    return () => mq.removeEventListener("change", notify);
  }, [query]);

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

export default function LatestSignals() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    fetch("/api/journal", { cache: "no-store" })
      .then(r => r.ok ? r.json() : [])
      .then(d => { setEntries(Array.isArray(d) ? d.slice(0, 4) : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const visible = isDesktop ? entries.slice(0, 3) : entries;

  if (loading) return null;
  if (visible.length === 0) return null;

  return (
    <section style={{ padding: "clamp(4rem, 8vh, 8rem) clamp(1.5rem, 6vw, 4rem)", maxWidth: "1400px", margin: "0 auto" }}>
      <header style={{ marginBottom: "clamp(3rem, 6vh, 5rem)" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(241,238,231,0.3)", margin: "0 0 1rem", fontFamily: "var(--font-body)" }}>
          Journal
        </p>
        <AnimatedText
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.02em", margin: 0, fontFamily: "var(--font-display)", color: "#f1eee7" }}
        >
          Recent entries
        </AnimatedText>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))", gap: "1.5rem" }}>
        {visible.map((entry, i) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
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
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(139,166,157,0.35)"; e.currentTarget.style.background = "rgba(241,238,231,0.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(241,238,231,0.08)"; e.currentTarget.style.background = "rgba(241,238,231,0.02)"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8ba69d", fontFamily: "var(--font-body)" }}>
                  Journal
                </span>
                <span style={{ color: "rgba(241,238,231,0.15)", fontSize: "0.6rem" }}>·</span>
                <time style={{ fontSize: "0.7rem", color: "rgba(241,238,231,0.3)", fontFamily: "var(--font-body)", fontVariantNumeric: "tabular-nums" }}>
                  {new Date(entry.timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </time>
              </div>
              <h3 style={{
                fontSize: "1.15rem", fontWeight: 400, lineHeight: 1.2, margin: "0 0 0.75rem",
                fontFamily: "var(--font-display)", letterSpacing: "-0.01em",
              }}>
                {entry.title}
              </h3>
              <p style={{
                fontSize: "0.85rem", color: "rgba(241,238,231,0.55)", lineHeight: 1.6,
                margin: 0, fontFamily: "var(--font-body)",
                overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical",
              }}>
                {plainExcerptFromMarkdown(entry.content)}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      <div style={{ marginTop: "clamp(2rem, 4vh, 3rem)", textAlign: "center" }}>
        <Link
          href="/journal"
          style={{
            display: "inline-block", padding: "0.75rem 2rem", borderRadius: "999px",
            border: "1px solid rgba(241,238,231,0.12)", color: "rgba(241,238,231,0.6)",
            fontSize: "0.875rem", fontFamily: "var(--font-body)", textDecoration: "none",
            transition: "background 200ms ease, color 200ms ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(241,238,231,0.06)"; e.currentTarget.style.color = "#f1eee7"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(241,238,231,0.6)"; }}
        >
          Read all →
        </Link>
      </div>
    </section>
  );
}
