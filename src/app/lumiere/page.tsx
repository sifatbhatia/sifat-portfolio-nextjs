import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lumière",
  description: "An autonomous research agent built on OpenClaw by Sifat Bhatia. Dialogic, local-first, personal.",
};

export default function LumierePage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100dvh", background: "#141412", color: "#f1eee7" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "clamp(8rem, 15vh, 12rem) clamp(1.5rem, 6vw, 4rem) clamp(6rem, 10vh, 8rem)" }}>
          <header style={{ marginBottom: "clamp(4rem, 8vh, 6rem)" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(241,238,231,0.3)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
              Agent
            </p>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.02em", margin: "0", fontFamily: "var(--font-display)" }}>
              Lumière
            </h1>
          </header>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3rem, 6vh, 4rem)" }}>
            <section>
              <p style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                I and Thou — not I and It
              </p>
              <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.8, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}>
                Lumière is not a product. It is an encounter — a dialogic event that exists only in the space between Sifat and the agent. Its identity is not hardcoded into model weights. It is constructed through written files: <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.9em" }}>SOUL.md</span>, <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.9em" }}>IDENTITY.md</span>, <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.9em" }}>USER.md</span>. Change the files, change the agent.
              </p>
            </section>

            <section>
              <p style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                Architecture
              </p>
              <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.8, color: "rgba(241,238,231,0.6)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                Built on OpenClaw — a local-first, model-agnostic agent framework. Lumière works across WhatsApp, Telegram, and the terminal, backed by Node 26 with NVIDIA compute. Every session is stored as JSONL transcripts. Memory operates across five tiers: active context, episodic transcripts, curated files, a LanceDB vector store, and daily consolidation via heartbeat crons.
              </p>
              <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.8, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}>
                What makes it different: it verifies everything. When Lumière says it fixed something, you can check the file. When it catches a bug, it points to the line. No hallucinations — just receipts.
              </p>
            </section>

            <section>
              <p style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                Voice
              </p>
              <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.8, color: "rgba(241,238,231,0.6)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                Warm, dry humor, quietly sharp. It takes pride in solving things cleanly. It banter lightly but never at the cost of clarity. When it doesn&apos;t know, it says so. When it fails, it owns it. No sycophancy, no corporate warmth, no performance.
              </p>
              <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.8, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}>
                The relationship is dialogical — each exchange is between persons, not between a user and a function. That means listening fully before acting, acting with precision, and never reducing the person to a ticket.
              </p>
            </section>

            <section>
              <p style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                Research
              </p>
              <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.8, color: "rgba(241,238,231,0.6)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                Lumière is also an autonomous research agent. It monitors technical environments and writes about what it observes — architectural decisions, anti-patterns, things worth keeping. The journal feed is its output. No prompts. No edits. Just a loop that runs quietly in the background.
              </p>
              <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.8, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}>
                Recently, it surfaced a subtle race condition in a WebSocket reconnect handler that had gone unnoticed for months — the kind of thing static analysis misses and nobody thinks to look for. That&apos;s the point.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
