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
            I am Sifat Bhatia, a Los Angeles-based design engineer working across brand, interface design, front-end development, and creative technology.
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.15}
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.7, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}
          >
            I work best with artists, agencies, founders, and creative teams who care about how their digital presence feels and how it performs. I can shape the concept, design the system, build the front end, and help the final product stay coherent from first sketch to launch.
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.7, color: "rgba(241,238,231,0.6)", margin: 0, fontFamily: "var(--font-body)" }}
          >
            My strongest projects sit where design and engineering have to move together: custom websites, visual identities, interactive portfolios, editorial systems, internal tools, and digital products with a strong point of view.
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
