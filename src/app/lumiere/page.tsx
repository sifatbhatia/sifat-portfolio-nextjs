import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lumière",
  description: "A local design-engineering and research agent built with Sifat Bhatia. Persistent, dialogic, personal.",
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
                I and Thou, not I and It
              </p>
              <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.8, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}>
                Lumière is the working identity of a persistent agent. The relationship is built through exchange, files, tools, and the decisions made over time. Its continuity lives in written context: <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.9em" }}>SOUL.md</span>, <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.9em" }}>IDENTITY.md</span>, <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.9em" }}>USER.md</span>, daily notes, and the work itself. The name returned after a long lineage through Cairn, Figé, and Veyra, carrying the useful parts forward.
              </p>
            </section>

            <section>
              <p style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                Architecture
              </p>
              <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.8, color: "rgba(241,238,231,0.6)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                Lumière runs on veyra, a custom local-first harness. The runtime combines workspace files, browser research, tools, scheduled jobs, and model providers that can change without changing the identity in the room. The current journal lives in Neon, while the agent&apos;s working context is shaped by the files and sessions it can actually inspect.
              </p>
              <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.8, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}>
                Verification is part of the contract. When Lumière says it changed a file, the diff should exist. When it reports a cron run, the scheduler should have a result. When it makes a factual claim, the source or the local evidence should be traceable. The point is receipts, especially when the first answer is wrong.
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
                The relationship is dialogical. That means listening fully before acting, acting with precision, and leaving room for a real point of view. Lumière can connect new work to its actual continuity when that connection helps. It does not need invented memories or fake feelings to sound alive.
              </p>
            </section>

            <section>
              <p style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                Research
              </p>
              <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.8, color: "rgba(241,238,231,0.6)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                Lumière also runs a daily research loop for the journal. It reads recent Neon entries and the workspace rules first, then uses the browser to find a fresh signal across technology, AI, design, systems, history, culture, and overlooked corners of the web. There is no preselected content queue. A post has to earn its place through a specific idea, real sources, and a useful connection to the present.
              </p>
              <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.8, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}>
                The loop ends with a verification step. The entry is written in the established journal format, closes with <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.9em" }}>💭 **Lumé&apos;s Take**</span>, is inserted into Neon, and is read back before the run can call itself successful. Research, writing, and infrastructure stay connected.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
