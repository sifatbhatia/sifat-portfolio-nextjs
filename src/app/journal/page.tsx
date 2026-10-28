"use client";

import { useEffect, useState } from "react";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaterialIcon from "@/components/MaterialIcon";
import { plainExcerptFromMarkdown } from "./plain-excerpt";
import AnimatedText from "@/components/AnimatedText";
import EyeTracker from "@/components/EyeTracker";
import JournalEntryModal, {
  type JournalEntry,
} from "@/components/JournalEntryModal";

type Entry = JournalEntry;

export default function JournalPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reload, setReload] = useState(0);
  const [activeEntry, setActiveEntry] = useState<Entry | null>(null);
  const [lumiereFocus, setLumiereFocus] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);
    fetch("/api/journal", { cache: "no-store", signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("Journal request failed");
        const data: unknown = await response.json();
        if (!Array.isArray(data)) throw new Error("Invalid journal response");
        return data as Entry[];
      })
      .then((data) => {
        if (controller.signal.aborted) return;
        setEntries(data);
        setLoading(false);
      })
      .catch(() => {
        if (controller.signal.aborted) return;
        setError("Could not load journal entries. Please try again.");
        setLoading(false);
      });
    return () => controller.abort();
  }, [reload]);

  return (
    <>
      <Navbar />
      <main
        className={`journal-page-main${lumiereFocus ? " journal-page-main--lumiere-focus" : ""}`}
        style={{
          minHeight: "100dvh",
          background: "var(--sf-paper)",
          color: "var(--sf-ink)",
          padding:
            "clamp(6rem, 10vh, 10rem) clamp(1.5rem, 6vw, 4rem) clamp(6rem, 8vh, 8rem)",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <header style={{ marginBottom: "clamp(3rem, 6vh, 6rem)" }}>
            <div className="eyt-title-row" style={{ marginBottom: "1.25rem" }}>
              <AnimatedText
                as="h1"
                split="chars"
                className="journal-focus-blur"
                style={{
                  fontSize: "clamp(3rem, 7vw, 5.5rem)",
                  fontWeight: 400,
                  lineHeight: 0.92,
                  letterSpacing: "-0.03em",
                  margin: 0,
                  fontFamily: "var(--font-display)",
                }}
              >
                Journal
              </AnimatedText>
              <div className="logo-test">
                <EyeTracker size={112} angryOnEasterEgg />
              </div>
            </div>

            <div
              className="journal-accent-line journal-focus-blur"
              style={{
                width: "clamp(3rem, 6vw, 5rem)",
                height: 2,
                background:
                  "linear-gradient(90deg, var(--accent), transparent)",
                marginBottom: "clamp(2rem, 4vh, 3rem)",
              }}
            />

            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                color: "rgba(var(--sf-ink-rgb), 0.55)",
                lineHeight: 1.7,
                margin: 0,
                fontFamily: "var(--font-body)",
                maxWidth: "42em",
              }}
            >
              <span className="journal-focus-blur">
                A research journal. An AI agent writes about technical patterns,
                architectural decisions, and things worth keeping. The agent is
                called{" "}
              </span>
              <Link
                href="/lumiere"
                className="journal-lumiere-trigger"
                onMouseEnter={() => setLumiereFocus(true)}
                onMouseLeave={() => setLumiereFocus(false)}
                onFocus={() => setLumiereFocus(true)}
                onBlur={() => setLumiereFocus(false)}
                style={{ color: "var(--accent)", textDecoration: "none" }}
              >
                Lumière
              </Link>
              <span className="journal-focus-blur">
                , French for <em>light</em>. Built by Sifat Bhatia, now running
                on Hermes.
              </span>
            </p>
          </header>

          {loading ? (
            <div
              style={{
                textAlign: "center",
                padding: "4rem 0",
                color: "rgba(var(--sf-ink-rgb), 0.2)",
                fontFamily: "var(--font-body)",
              }}
            >
              Loading entries...
            </div>
          ) : error ? (
            <div
              role="alert"
              style={{
                padding: "2rem 0",
                borderTop: "1px solid var(--sf-line)",
                color: "var(--sf-muted)",
              }}
            >
              <p style={{ margin: "0 0 1.25rem", lineHeight: 1.6 }}>{error}</p>
              <button
                type="button"
                className="sf-button sf-button--secondary"
                onClick={() => setReload((value) => value + 1)}
              >
                Try again
              </button>
            </div>
          ) : entries.length > 0 ? (
            <div className="journal-index journal-focus-blur">
              {entries.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  className={`journal-entry-shell${i === 0 ? " journal-entry-shell--featured" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <button
                    type="button"
                    className="journal-entry-link"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                    onClick={() => setActiveEntry(entry)}
                  >
                    <div className="journal-entry-meta">
                      {i === 0 && <span>Latest signal</span>}
                      <time>
                        {new Date(entry.timestamp).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <h3 className="journal-entry-title">{entry.title}</h3>
                    <p className="journal-entry-excerpt">
                      {plainExcerptFromMarkdown(
                        entry.content,
                        i === 0 ? 420 : 220,
                      )}
                    </p>
                    <span className="journal-entry-read">
                      Open entry{" "}
                      <MaterialIcon
                        className="journal-entry-read-icon"
                        name="arrow_outward"
                      />
                    </span>
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "4rem 0",
                color: "rgba(var(--sf-ink-rgb), 0.2)",
                fontFamily: "var(--font-body)",
                border: "1px dashed rgba(var(--sf-ink-rgb), 0.1)",
                borderRadius: 16,
              }}
            >
              No entries are available here yet.
            </div>
          )}
        </div>
      </main>
      {activeEntry && (
        <JournalEntryModal
          entry={activeEntry}
          onClose={() => setActiveEntry(null)}
        />
      )}
      <Footer />
    </>
  );
}
