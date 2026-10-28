import AnimatedText from "./AnimatedText";

export default function About() {
  return (
    <section
      style={{
        padding: "clamp(4rem, 8vh, 8rem) clamp(1.5rem, 6vw, 4rem)",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <div
        className="about-grid"
        style={{
          display: "grid",
          gap: "clamp(3rem, 6vw, 6rem)",
          alignItems: "start",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(var(--sf-ink-rgb), 0.3)",
              margin: "0 0 1.5rem",
              fontFamily: "var(--font-body)",
            }}
          >
            About
          </p>
          <AnimatedText
            as="h2"
            split="words"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              margin: 0,
              fontFamily: "var(--font-display)",
              color: "var(--sf-ink)",
            }}
          >
            Design and development
          </AnimatedText>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <AnimatedText
            as="p"
            delay={0.1}
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
              lineHeight: 1.7,
              color: "rgba(var(--sf-ink-rgb), 0.6)",
              margin: 0,
              fontFamily: "var(--font-body)",
            }}
          >
            I&apos;m Sifat Bhatia, a Los Angeles-based design engineer with 8+
            years across brand identity, interface design, and full-stack
            development.
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.15}
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
              lineHeight: 1.7,
              color: "rgba(var(--sf-ink-rgb), 0.6)",
              margin: 0,
              fontFamily: "var(--font-body)",
            }}
          >
            I run Siftion, an independent studio for artists, agencies, and
            nonprofits. I design in Figma and build with React, Next.js,
            TypeScript, Node, PostgreSQL, Supabase, and Stripe.
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
              lineHeight: 1.7,
              color: "rgba(var(--sf-ink-rgb), 0.6)",
              margin: 0,
              fontFamily: "var(--font-body)",
            }}
          >
            I take projects from scoping and visual direction through
            development, launch, and ongoing support, with accessibility,
            performance, and technical SEO considered throughout.
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
