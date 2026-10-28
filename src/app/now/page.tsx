import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaterialIcon from "@/components/MaterialIcon";
import { Link } from "next-view-transitions";
import AnimatedText from "@/components/AnimatedText";

export const metadata: Metadata = {
  title: "Now",
  description:
    "A current update from Sifat Bhatia is coming soon. Browse selected work in the meantime.",
};

export default function NowPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg)",
          color: "var(--text)",
          padding: "6rem 2rem 4rem",
        }}
      >
        <div style={{ maxWidth: "34rem", textAlign: "center" }}>
          <p
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(var(--sf-ink-rgb), 0.25)",
              margin: "0 0 1.25rem",
              fontFamily: "var(--font-body)",
            }}
          >
            Now
          </p>
          <AnimatedText
            as="h1"
            style={{
              fontSize: "clamp(2.75rem, 7vw, 5rem)",
              fontWeight: 400.0,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              margin: "0 0 1rem",
              fontFamily: "var(--font-display)",
              textAlign: "center",
              justifyContent: "center",
            }}
            split="chars"
          >
            Coming soon
          </AnimatedText>
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
              lineHeight: 1.6,
              color: "rgba(var(--sf-ink-rgb), 0.5)",
              margin: "0 auto 1rem",
              fontFamily: "var(--font-body)",
              maxWidth: "26rem",
            }}
          >
            I&apos;m putting together a proper update on what I&apos;m working
            on. For now, the projects page has the clearest view of my recent
            work.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link className="sf-button sf-button--secondary now-cta" href="/">
              Go home
            </Link>
            <Link
              className="sf-button sf-button--ghost now-cta now-cta-ghost"
              href="/projects"
            >
              See work
              <MaterialIcon className="now-cta-arrow" name="arrow_forward" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
