"use client";

import { Link } from "next-view-transitions";
import AnimatedText from "./AnimatedText";
import ArrowIcon from "./ArrowIcon";

const SERVICES = [
  {
    title: "Websites",
    detail: "Structure, visual design, and front-end development for artists, agencies, and creative businesses.",
    scope: "Design · Next.js · Webflow",
  },
  {
    title: "Identity",
    detail: "Wordmarks, typography, color, and art direction, carried through to the site itself.",
    scope: "Brand · Art direction · Web",
  },
  {
    title: "Digital products",
    detail: "React interfaces, small software, and tools built around a specific way of working.",
    scope: "Product · Interface · Systems",
  },
  {
    title: "Creative technology",
    detail: "Motion, interactive work, and technical experiments when the idea needs more than a static page.",
    scope: "Motion · WebGL · Prototypes",
  },
];

export default function Services() {
  return (
    <section className="services-section" aria-labelledby="services-title">
      <header className="services-header">
        <div className="services-heading">
          <p className="page-kicker">Services</p>
          <AnimatedText
            as="h2"
            split="words"
            id="services-title"
            className="services-title"
          >
            Design and development
          </AnimatedText>
        </div>
        <p className="services-intro">
          Identity, websites, and front-end work for artists and creative teams.
        </p>
      </header>

      <ol className="service-list">
        {SERVICES.map((service, index) => (
          <li className="service-row" key={service.title}>
            <span className="service-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{service.title}</h3>
            <p>{service.detail}</p>
            <span className="service-scope">{service.scope}</span>
          </li>
        ))}
      </ol>

      <Link className="section-link" href="/services">
        Full scope
        <ArrowIcon className="section-link-icon" />
      </Link>
    </section>
  );
}
