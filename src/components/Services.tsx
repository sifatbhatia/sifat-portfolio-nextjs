"use client";

import { Link } from "next-view-transitions";
import AnimatedText from "./AnimatedText";
import MaterialIcon from "./MaterialIcon";

const SERVICES = [
  {
    title: "Web Design and Development",
    desc: "Custom websites, from content structure and visual design to front-end implementation.",
    icon: "01",
  },
  {
    title: "Brand and Identity Systems",
    desc: "Logos, typography, color systems, and brand guidelines.",
    icon: "02",
  },
  {
    title: "Creative Technology",
    desc: "Interactive systems and custom tools for ideas that need a more specific form.",
    icon: "03",
  },
  {
    title: "Strategy and Structure",
    desc: "Content, structure, and technical decisions made before the build gets expensive.",
    icon: "04",
  },
];

function ServiceCard({ service }: { service: (typeof SERVICES)[0] }) {
  return (
    <article className="service-card">
      <p className="service-index">{service.icon}</p>
      <div className="service-card-main">
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
      </div>
    </article>
  );
}

function HoverLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="sf-button sf-button--secondary view-all-projects"
    >
      {children}
      <MaterialIcon className="view-all-arrow" name="arrow_forward" />
    </Link>
  );
}

export default function Services() {
  return (
    <section
      className="services-section"
      style={{
        padding: "clamp(5rem, 10vh, 10rem) clamp(1.5rem, 6vw, 4rem)",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <header className="services-header">
        <div className="services-heading">
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(var(--sf-ink-rgb), 0.3)",
              margin: "0 0 1rem",
              fontFamily: "var(--font-body)",
            }}
          >
            Services
          </p>
          <AnimatedText
            as="h2"
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
            What I do
          </AnimatedText>
        </div>
        <p className="services-intro">
          Website design, front-end development, identity systems, and custom
          tools.
        </p>
      </header>

      <div className="services-grid">
        {SERVICES.map((s) => (
          <ServiceCard key={s.title} service={s} />
        ))}
      </div>

      <div style={{ marginTop: "clamp(2rem, 4vh, 3rem)", textAlign: "center" }}>
        <HoverLink href="/services">Learn more</HoverLink>
      </div>
    </section>
  );
}
