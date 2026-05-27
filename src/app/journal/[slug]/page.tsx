"use client";

import { useEffect, useState } from "react";
import { Link } from "next-view-transitions";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Entry {
  id: string; title: string; timestamp: string; slug: string; content: string;
}

const mdComponents: Components = {
  h1: ({ children }) => <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, fontFamily: "var(--font-display)", color: "#f1eee7", margin: "2rem 0 1rem", lineHeight: 1.1 }}>{children}</h1>,
  h2: ({ children }) => <h2 style={{ fontSize: "1.5rem", fontWeight: 400, fontFamily: "var(--font-display)", color: "#f1eee7", margin: "2.5rem 0 1rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(241,238,231,0.1)", lineHeight: 1.2 }}>{children}</h2>,
  h3: ({ children }) => <h3 style={{ fontSize: "1.2rem", fontWeight: 500, fontFamily: "var(--font-body)", color: "rgba(241,238,231,0.9)", margin: "2rem 0 0.75rem", lineHeight: 1.3 }}>{children}</h3>,
  p: ({ children }) => <p style={{ margin: "0 0 1.25rem", fontSize: "1rem", lineHeight: 1.8, color: "rgba(241,238,231,0.7)", fontFamily: "var(--font-body)", fontWeight: 400 }}>{children}</p>,
  ul: ({ children }) => <ul style={{ margin: "0 0 1.25rem", paddingLeft: "1.5rem", color: "rgba(241,238,231,0.65)", fontFamily: "var(--font-body)" }}>{children}</ul>,
  ol: ({ children }) => <ol style={{ margin: "0 0 1.25rem", paddingLeft: "1.5rem", color: "rgba(241,238,231,0.65)", fontFamily: "var(--font-body)" }}>{children}</ol>,
  li: ({ children }) => <li style={{ marginBottom: "0.5rem", lineHeight: 1.7, fontSize: "0.95rem" }}>{children}</li>,
  a: ({ href, children }) => <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noreferrer" : undefined} style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>{children}</a>,
  strong: ({ children }) => <strong style={{ fontWeight: 600, color: "#f1eee7" }}>{children}</strong>,
  em: ({ children }) => <em style={{ fontStyle: "italic", color: "rgba(241,238,231,0.8)" }}>{children}</em>,
  blockquote: ({ children }) => <blockquote style={{ margin: "2rem 0", padding: "0.5rem 0 0.5rem 1.5rem", borderLeft: "2px solid rgba(139,166,157,0.5)", color: "rgba(241,238,231,0.5)", fontStyle: "italic", fontFamily: "var(--font-body)" }}>{children}</blockquote>,
  hr: () => <hr style={{ margin: "2.5rem 0", border: "none", borderTop: "1px solid rgba(241,238,231,0.08)" }} />,
  code: ({ className, children }) => {
    const inline = !className;
    return inline
      ? <code style={{ background: "rgba(241,238,231,0.06)", padding: "0.15rem 0.4rem", borderRadius: 4, fontSize: "0.9em", fontFamily: "monospace", color: "rgba(241,238,231,0.85)" }}>{children}</code>
      : <code className={className}>{children}</code>;
  },
  pre: ({ children }) => <pre style={{ margin: "0 0 1.5rem", padding: "1.25rem", background: "rgba(241,238,231,0.03)", border: "1px solid rgba(241,238,231,0.08)", borderRadius: 12, overflow: "auto", fontSize: "0.85rem", fontFamily: "monospace", color: "rgba(241,238,231,0.7)", lineHeight: 1.6 }}>{children}</pre>,
};

export default function JournalSlugPage() {
  const { slug } = useParams<{ slug: string }>();
  const [entry, setEntry] = useState<Entry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/journal?slug=${slug}`, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        const found = Array.isArray(d) ? d[0] : d;
        setEntry(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  return (
    <main style={{ minHeight: "100dvh", background: "#141412", color: "#f1eee7" }}>
      <Navbar />
      <article style={{ maxWidth: "740px", margin: "0 auto", padding: "clamp(6rem, 10vh, 10rem) clamp(1.5rem, 6vw, 4rem) clamp(4rem, 6vh, 6rem)" }}>
        {loading ? (
          <p style={{ color: "rgba(241,238,231,0.2)", textAlign: "center", fontFamily: "var(--font-body)" }}>Loading…</p>
        ) : entry ? (
          <>
            <header style={{ marginBottom: "clamp(2rem, 4vh, 3rem)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontFamily: "var(--font-body)" }}>Signal</span>
                <span style={{ color: "rgba(241,238,231,0.15)" }}>·</span>
                <time style={{ fontSize: "0.7rem", color: "rgba(241,238,231,0.3)", fontFamily: "var(--font-body)" }}>
                  {new Date(entry.timestamp).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </time>
              </div>
              <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.03em", margin: 0, fontFamily: "var(--font-display)" }}>
                {entry.title}
              </h1>
            </header>

            <div style={{ fontFamily: "var(--font-body)" }}>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
                {entry.content}
              </ReactMarkdown>
            </div>

            <nav style={{ marginTop: "clamp(3rem, 6vh, 5rem)", paddingTop: "1.5rem", borderTop: "1px solid rgba(241,238,231,0.1)" }}>
              <Link href="/journal" style={{ color: "rgba(241,238,231,0.35)", textDecoration: "none", fontSize: "0.875rem", fontFamily: "var(--font-body)" }}>
                ← All entries
              </Link>
            </nav>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "4rem 0", color: "rgba(241,238,231,0.2)", fontFamily: "var(--font-body)" }}>
            Entry not found.
            <br /><br />
            <Link href="/journal" style={{ color: "var(--accent)" }}>Back to journal</Link>
          </div>
        )}
      </article>
      <Footer />
    </main>
  );
}
