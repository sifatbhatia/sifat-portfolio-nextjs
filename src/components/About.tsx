import AnimatedText from "./AnimatedText";

export default function About() {
  return (
    <section style={{ padding: "clamp(4rem, 8vh, 8rem) clamp(1.5rem, 6vw, 4rem)", maxWidth: "1400px", margin: "0 auto" }}>
<<<<<<< HEAD
      <div className="about-grid" style={{ display: "grid", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "start" }}>
=======
      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "start" }}>
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
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
<<<<<<< HEAD
            I&apos;m Sifat Bhatia, a Los Angeles-based design engineer working across identity, interface design, front-end development, and creative technology.
=======
            I am Sifat Bhatia, a Los Angeles-based design engineer working across brand, interface design, front-end development, and creative technology.
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.15}
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.7, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}
          >
<<<<<<< HEAD
            I work with artists, agencies, founders, and creative teams who care how their work is met. I shape the concept, design the system, and build the front end.
=======
            I work best with artists, agencies, founders, and creative teams who care about how their work is met. I can shape the concept, design the system, build the front end, and keep the experience coherent from first sketch to launch.
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.7, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}
          >
<<<<<<< HEAD
            The best projects sit where design and engineering have to move together: custom websites, identities, interactive portfolios, and small software with a point of view.
=======
            My strongest projects sit where design and engineering have to move together: custom websites, visual identities, interactive portfolios, editorial systems, internal tools, and small software shaped around a real point of view.
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
