"use client";

<<<<<<< HEAD
import { useEffect, useRef } from "react";
=======
import { useEffect, useRef, useState } from "react";
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
import Image from "next/image";
import { Link } from "next-view-transitions";
import { projects } from "@/lib/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURED = projects.slice(0, 3);

function ProjectEncounter({ project, index }: { project: typeof projects[0]; index: number }) {
<<<<<<< HEAD
=======
  const [hovered, setHovered] = useState(false);

>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-card
      className="selected-work-row"
<<<<<<< HEAD
      style={{
        display: "grid",
=======
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(3rem, 0.22fr) minmax(0, 1fr) minmax(18rem, 0.72fr)",
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
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
<<<<<<< HEAD
        className="sw-index"
        data-card-detail
        style={{
          alignSelf: "start",
          fontFamily: "var(--font-body)",
          fontSize: "0.72rem",
          letterSpacing: "0.18em",
          lineHeight: 1,
=======
        style={{
          alignSelf: "start",
          color: hovered ? "var(--accent)" : "rgba(241,238,231,0.24)",
          fontFamily: "var(--font-body)",
          fontSize: "0.72rem",
          letterSpacing: "0.18em",
          paddingTop: "0.25rem",
          transition: "color 250ms ease",
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div>
        <p
<<<<<<< HEAD
          className="sw-role"
          data-card-detail
=======
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
          style={{
            fontSize: "0.66rem",
            fontWeight: 400,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
<<<<<<< HEAD
            margin: "0 0 0.85rem",
            fontFamily: "var(--font-body)",
=======
            color: hovered ? "rgba(139,166,157,0.9)" : "rgba(241,238,231,0.32)",
            margin: "0 0 0.85rem",
            fontFamily: "var(--font-body)",
            transition: "color 250ms ease",
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
          }}
        >
          {project.role}
        </p>
        <h3
<<<<<<< HEAD
          data-card-detail
=======
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
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
<<<<<<< HEAD
          data-card-detail
=======
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
          style={{
            fontSize: "clamp(0.95rem, 1.15vw, 1.05rem)",
            lineHeight: 1.7,
            color: "rgba(241,238,231,0.56)",
            margin: "1rem 0 0",
            fontFamily: "var(--font-body)",
            maxWidth: "42rem",
          }}
        >
<<<<<<< HEAD
          {project.summary ?? project.description.split(". ")[0] + "."}
=======
          {project.description}
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
        </p>
      </div>

      <div
<<<<<<< HEAD
        className="sw-media"
        data-card-media
=======
        className="selected-work-media"
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
        style={{
          position: "relative",
          aspectRatio: "16/10",
          overflow: "hidden",
          borderRadius: 10,
<<<<<<< HEAD
          border: "1px solid rgba(241,238,231,0.08)",
          background: "rgba(241,238,231,0.025)",
          transform: "translateY(0)",
=======
          border: hovered ? "1px solid rgba(139,166,157,0.28)" : "1px solid rgba(241,238,231,0.08)",
          background: "rgba(241,238,231,0.025)",
          opacity: hovered ? 1 : 0.58,
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          transition: "opacity 500ms ease, transform 500ms cubic-bezier(0.16,1,0.3,1), border-color 300ms ease",
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
        }}
      >
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 767px) 100vw, 36vw"
<<<<<<< HEAD
          className="sw-img"
          loading="lazy"
          style={{
            objectFit: "cover",
=======
          style={{
            objectFit: "cover",
            transition: "transform 900ms cubic-bezier(0.16,1,0.3,1), filter 900ms ease",
            transform: hovered ? "scale(1.025)" : "scale(1)",
            filter: hovered
              ? "grayscale(12%) contrast(0.95) brightness(0.86)"
              : "grayscale(55%) contrast(0.82) brightness(0.58)",
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
          }}
        />
        <div
          aria-hidden="true"
<<<<<<< HEAD
          className="sw-overlay"
          style={{
            position: "absolute",
            inset: 0,
=======
          style={{
            position: "absolute",
            inset: 0,
            background: hovered
              ? "linear-gradient(180deg, rgba(20,20,18,0.04), rgba(20,20,18,0.16))"
              : "linear-gradient(180deg, rgba(20,20,18,0.08), rgba(20,20,18,0.32))",
            transition: "background 500ms ease",
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
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
<<<<<<< HEAD
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
=======
      const heading = section.querySelector("[data-heading]");
      const cards = section.querySelectorAll("[data-card]");

      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "expo.out",
            scrollTrigger: {
              trigger: heading,
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

<<<<<<< HEAD
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

=======
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 36 },
          {
<<<<<<< HEAD
            opacity: 1, y: 0,
=======
            opacity: 1,
            y: 0,
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
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
<<<<<<< HEAD

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
=======
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "clamp(6rem, 10vh, 10rem) clamp(1.5rem, 6vw, 4rem)", maxWidth: "1400px", margin: "0 auto" }}>
<<<<<<< HEAD
      <div className="selected-work-intro" style={{ display: "grid", gap: "clamp(2rem, 6vw, 5rem)", alignItems: "end", marginBottom: "clamp(2.5rem, 6vh, 4.5rem)" }}>
        <div data-selected-intro>
=======
      <div className="selected-work-intro" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(16rem, 0.45fr)", gap: "clamp(2rem, 6vw, 5rem)", alignItems: "end", marginBottom: "clamp(2.5rem, 6vh, 4.5rem)" }}>
        <div>
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
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
<<<<<<< HEAD
            Selected work.
=======
            Things I&apos;m proud of.
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
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
<<<<<<< HEAD
            A few recent websites, identities, and products.
=======
            Recent websites, brand systems, and tools built for music, entertainment, agencies, and creative teams.
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
          </p>
        </div>

        <p
<<<<<<< HEAD
          data-selected-aside
=======
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
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
<<<<<<< HEAD
          Built for people with something specific to say, sell, or bring into the world.
=======
          Not work as objects. Work as meeting: a person, a context, a constraint, and the care required to make something answer back.
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
        </p>
      </div>

      <div style={{ borderBottom: "1px solid rgba(241,238,231,0.1)" }}>
        {FEATURED.map((p, i) => (
          <ProjectEncounter key={p.slug} project={p} index={i} />
        ))}
      </div>

<<<<<<< HEAD
      <div data-selected-cta style={{ marginTop: "clamp(3rem, 5vh, 4rem)", textAlign: "center" }}>
        <Link
          href="/projects"
          className="view-all-projects"
=======
      <div style={{ marginTop: "clamp(3rem, 5vh, 4rem)", textAlign: "center" }}>
        <Link
          href="/projects"
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.85rem 2.5rem",
            borderRadius: "999px",
<<<<<<< HEAD
=======
            background: "rgba(241,238,231,0.06)",
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
            border: "1px solid rgba(241,238,231,0.15)",
            color: "#f1eee7",
            fontSize: "0.9rem",
            fontFamily: "var(--font-body)",
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: "0.02em",
<<<<<<< HEAD
          }}
        >
          View all projects
          <span className="view-all-arrow" style={{ fontSize: "1.1rem", lineHeight: 1 }}>→</span>
=======
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            transition: "background 200ms ease, box-shadow 200ms ease, transform 200ms ease",
            transform: "translateY(0)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(241,238,231,0.12)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.25)";
            e.currentTarget.style.transform = "translateY(-2px)";
            const arrow = e.currentTarget.querySelector("span");
            if (arrow) (arrow as HTMLElement).style.transform = "translateX(4px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(241,238,231,0.06)";
            e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.15)";
            e.currentTarget.style.transform = "translateY(0)";
            const arrow = e.currentTarget.querySelector("span");
            if (arrow) (arrow as HTMLElement).style.transform = "translateX(0)";
          }}
          onFocus={e => {
            e.currentTarget.style.background = "rgba(241,238,231,0.12)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.25)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onBlur={e => {
            e.currentTarget.style.background = "rgba(241,238,231,0.06)";
            e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.15)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          View all projects
          <span style={{ fontSize: "1.1rem", lineHeight: 1, transition: "transform 200ms ease" }}>→</span>
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
        </Link>
      </div>
    </section>
  );
}
