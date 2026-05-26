import AnimatedText from "./AnimatedText";

export default function About() {
  return (
    <section style={{ padding: "clamp(4rem, 8vh, 8rem) clamp(1.5rem, 6vw, 4rem)", maxWidth: "1400px", margin: "0 auto" }}>
      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "start" }}>
        <div>
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(241,238,231,0.3)", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
            About
          </p>
          <AnimatedText
            as="h2" split="words"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.02em", margin: 0, fontFamily: "var(--font-display)", color: "#f1eee7" }}
          >
            I build for people who care.
          </AnimatedText>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <AnimatedText
            as="p"
            delay={0.1}
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.7, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}
          >
            I&apos;m Sifat Bhatia — a design engineer based in Los Angeles, finishing my MS in Information Technology at Westcliff University. I work with artists, agencies, and creative brands who need more than a template. Every project I touch is built from the ground up, with intention.
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.15}
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.7, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}
          >
            I don&apos;t just write code or push pixels. I translate what you care about into something people can feel. Motion, typography, space, systems — every detail is a choice, not an accident. I&apos;m drawn to the edges: where design meets engineering, where spirituality meets code, where brands become experiences.
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.7, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}
          >
            When I&apos;m not building for clients, I&apos;m running an autonomous research agent called Lumière — exploring the edges of design, architecture, and what the web could be. Two shelter cats (Sima & Lia) keep me company, and I&apos;m always chasing a deeper understanding of how things work, and why.
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
