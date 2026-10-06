"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { projects } from "@/lib/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURED = projects.slice(0, 3);

function ProjectEncounter({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-card
      className="selected-work-row"
      style={{
        display: "grid",
        gap: "clamp(1.25rem, 4vw, 4rem)",
        alignItems: "center",
        padding: "clamp(2rem, 5vh, 3.75rem) 0",
        borderTop: "1px solid rgba(241,238,231,0.1)",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <span
        aria-hidden="true"
        className="sw-index"
        data-card-detail
        style={{
          alignSelf: "start",
          fontFamily: "var(--font-body)",
          fontSize: "0.72rem",
          letterSpacing: "0.18em",
          lineHeight: 1,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div>
        <p
          className="sw-role"
          data-card-detail
          style={{
            fontSize: "0.66rem",
            fontWeight: 400,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            margin: "0 0 0.85rem",
            fontFamily: "var(--font-body)",
          }}
        >
          {project.role}
        </p>
        <h3
          data-card-detail
          style={{
            fontSize: "clamp(2.1rem, 4.8vw, 4.8rem)",
            fontWeight: 400,
            lineHeight: 0.92,
            letterSpacing: "-0.025em",
            margin: 0,
            fontFamily: "var(--font-display)",
            color: "#f1eee7",
          }}
        >
          {project.title}
        </h3>
        <p
          data-card-detail
          style={{
            fontSize: "clamp(0.95rem, 1.15vw, 1.05rem)",
            lineHeight: 1.7,
            color: "rgba(241,238,231,0.56)",
            margin: "1rem 0 0",
            fontFamily: "var(--font-body)",
            maxWidth: "42rem",
          }}
        >
          {project.summary ?? project.description.split(". ")[0] + "."}
        </p>
      </div>

      <div
        className="sw-media"
        data-card-media
        style={{
          position: "relative",
          aspectRatio: "16/10",
          overflow: "hidden",
          borderRadius: 10,
          border: "1px solid rgba(241,238,231,0.08)",
          background: "rgba(241,238,231,0.025)",
          transform: "translateY(0)",
        }}
      >
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 767px) 100vw, 36vw"
          className="sw-img"
          loading="lazy"
          style={{
            objectFit: "cover",
          }}
        />
        <div
          aria-hidden="true"
          className="sw-overlay"
          style={{
            position: "absolute",
            inset: 0,
          }}
        />
      </div>
    </Link>
  );
}

export default function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const intro = section.querySelector("[data-selected-intro]");
      const aside = section.querySelector("[data-selected-aside]");
      const cards = section.querySelectorAll("[data-card]");
      const cardDetails = section.querySelectorAll("[data-card-detail]");
      const media = section.querySelectorAll("[data-card-media]");
      const cta = section.querySelector("[data-selected-cta]");

      if (intro) {
        gsap.fromTo(
          intro.children,
          { opacity: 0, y: 24, filter: "blur(2px)" },
          {
            opacity: 1, y: 0, filter: "blur(0px)",
            duration: 0.75,
            ease: "expo.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: intro,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (aside) {
        gsap.fromTo(
          aside,
          { opacity: 0, x: 18 },
          {
            opacity: 1, x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: aside,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 36 },
          {
            opacity: 1, y: 0,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (cardDetails.length) {
        gsap.fromTo(
          cardDetails,
          { opacity: 0, y: 12 },
          {
            opacity: 1, y: 0,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.035,
            scrollTrigger: {
              trigger: cards[0],
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (media.length) {
        gsap.fromTo(
          media,
          { clipPath: "inset(8% 0% 8% 0%)", y: 18 },
          {
            clipPath: "inset(0% 0% 0% 0%)", y: 0,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: section,
              start: "top 76%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (cta) {
        gsap.fromTo(
          cta,
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0,
            duration: 0.55,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cta,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "clamp(6rem, 10vh, 10rem) clamp(1.5rem, 6vw, 4rem)", maxWidth: "1400px", margin: "0 auto" }}>
      <div className="selected-work-intro" style={{ display: "grid", gap: "clamp(2rem, 6vw, 5rem)", alignItems: "end", marginBottom: "clamp(2.5rem, 6vh, 4.5rem)" }}>
        <div data-selected-intro>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(241,238,231,0.3)",
              margin: "0 0 1rem",
              fontFamily: "var(--font-body)",
            }}
          >
            Selected projects
          </p>
          <h2
            data-heading
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              margin: 0,
              fontFamily: "var(--font-display)",
              color: "#f1eee7",
            }}
          >
            Selected work.
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
              lineHeight: 1.7,
              color: "rgba(241,238,231,0.5)",
              margin: "1.5rem 0 0",
              fontFamily: "var(--font-body)",
              maxWidth: "36rem",
            }}
          >
            A few recent websites, identities, and products.
          </p>
        </div>

        <p
          data-selected-aside
          style={{
            borderLeft: "1px solid rgba(139,166,157,0.32)",
            color: "rgba(241,238,231,0.46)",
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.86rem, 1vw, 0.95rem)",
            lineHeight: 1.7,
            margin: 0,
            paddingLeft: "1.25rem",
          }}
        >
          Built for people with something specific to say, sell, or bring into the world.
        </p>
      </div>

      <div style={{ borderBottom: "1px solid rgba(241,238,231,0.1)" }}>
        {FEATURED.map((p, i) => (
          <ProjectEncounter key={p.slug} project={p} index={i} />
        ))}
      </div>

      <div data-selected-cta style={{ marginTop: "clamp(3rem, 5vh, 4rem)", textAlign: "center" }}>
        <Link
          href="/projects"
          className="view-all-projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.85rem 2.5rem",
            borderRadius: "999px",
            border: "1px solid rgba(241,238,231,0.15)",
            color: "#f1eee7",
            fontSize: "0.9rem",
            fontFamily: "var(--font-body)",
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          View all projects
          <span className="view-all-arrow" style={{ fontSize: "1.1rem", lineHeight: 1 }}>→</span>
        </Link>
      </div>
    </section>
  );
}
