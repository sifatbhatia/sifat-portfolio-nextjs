"use client";

<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
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

<<<<<<< HEAD
function SkeletonCard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "clamp(1.25rem, 3vw, 2rem)",
        borderRadius: 16,
        border: "1px solid rgba(241,238,231,0.08)",
        background: "rgba(241,238,231,0.02)",
        gap: "1rem",
      }}
    >
      <div className="skeleton" style={{ width: "60%", height: "0.7rem" }} />
      <div className="skeleton" style={{ width: "80%", height: "1.2rem", marginTop: "0.5rem" }} />
      <div className="skeleton" style={{ width: "100%", height: "3.5rem", marginTop: "0.25rem" }} />
    </div>
  );
=======
function useMediaQuery(query: string): boolean {
  const subscribe = useCallback((notify: () => void) => {
    const mq = window.matchMedia(query);
    mq.addEventListener("change", notify);
    return () => mq.removeEventListener("change", notify);
  }, [query]);

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
}

export default function LatestSignals() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/journal", { cache: "no-store" })
      .then(r => {
        if (!r.ok) throw new Error("Failed to fetch");
        return r.json();
      })
      .then(d => {
        setEntries(Array.isArray(d) ? d.slice(0, 6) : []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
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
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div
              key={i}
              className={i === 4 ? "latest-entry-fourth" : i > 4 ? "latest-entry-wide-extra" : undefined}
            >
              <SkeletonCard />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
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
        <div className="error-state">
          Couldn&apos;t load journal entries. <Link href="/journal" style={{ color: "var(--accent)", textDecoration: "underline" }}>View the journal directly →</Link>
        </div>
      </section>
    );
  }

  if (entries.length === 0) return null;
=======
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
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2

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
<<<<<<< HEAD
        {entries.map((entry, i) => (
          <motion.div
            key={entry.id}
            className={i === 3 ? "latest-entry-fourth" : i > 3 ? "latest-entry-wide-extra" : undefined}
=======
        {visible.map((entry, i) => (
          <motion.div
            key={entry.id}
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/journal/${entry.slug}`}
<<<<<<< HEAD
              className="journal-card"
=======
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
              style={{
                display: "flex", flexDirection: "column", height: "100%",
                padding: "clamp(1.25rem, 3vw, 2rem)", borderRadius: 16,
                border: "1px solid rgba(241,238,231,0.08)",
                background: "rgba(241,238,231,0.02)",
                color: "inherit", textDecoration: "none",
<<<<<<< HEAD
              }}
=======
                transition: "border-color 300ms ease, background 300ms ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(139,166,157,0.35)"; e.currentTarget.style.background = "rgba(241,238,231,0.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(241,238,231,0.08)"; e.currentTarget.style.background = "rgba(241,238,231,0.02)"; }}
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
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
<<<<<<< HEAD
          className="view-all-projects"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.85rem 2.5rem", borderRadius: "999px",
            border: "1px solid rgba(241,238,231,0.15)", color: "#f1eee7",
            fontSize: "0.9rem", fontFamily: "var(--font-body)", textDecoration: "none",
            fontWeight: 500, letterSpacing: "0.02em",
          }}
        >
          Read all <span className="view-all-arrow" aria-hidden="true">→</span>
=======
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
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
        </Link>
      </div>
    </section>
  );
}
