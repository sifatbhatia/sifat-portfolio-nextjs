"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "next-view-transitions";
import { projects } from "@/lib/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURED = projects.slice(0, 3);

function ProjectCard({ project, index, large }: { project: typeof projects[0]; index: number; large?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${project.slug}`}
      style={{ display: "block", color: "inherit", textDecoration: "none" }}
    >
      <div
        data-card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: large ? 20 : 14,
          aspectRatio: large ? "21/10" : "4/3",
          background: "rgba(241,238,231,0.03)",
          cursor: "pointer",
        }}
      >
        <img
          src={project.heroImage}
          alt={project.title}
          style={{
            width: "100%", height: "100%", objectFit: "contain", display: "block",
            transition: "transform 800ms cubic-bezier(0.16,1,0.3,1), filter 800ms ease",
            transform: hovered ? "scale(1.03)" : "scale(1)",
            filter: hovered ? "none" : "grayscale(40%) contrast(0.85) brightness(0.75)",
          }}
        />

        <div style={{
          position: "absolute", inset: 0,
          background: hovered
            ? "linear-gradient(to top, rgba(20,20,18,0.95) 0%, rgba(20,20,18,0.3) 50%, transparent 100%)"
            : "linear-gradient(to top, rgba(20,20,18,0.7) 0%, transparent 60%)",
          transition: "background 600ms ease",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "clamp(1.5rem, 3vw, 2.5rem)",
        }}>
          <p style={{
            fontSize: "0.6rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--accent)", margin: "0 0 0.5rem", fontFamily: "var(--font-body)",
            opacity: hovered ? 1 : 0.6, transition: "opacity 400ms ease",
          }}>
            {String(index + 1).padStart(2, "0")} &middot; {project.role}
          </p>
          <h3 style={{
            fontSize: large ? "clamp(2rem, 4vw, 3.5rem)" : "clamp(1.5rem, 2.5vw, 2.25rem)",
            fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.02em",
            margin: "0 0 0.5rem", fontFamily: "var(--font-display)", color: "#f1eee7",
          }}>
            {project.title}
          </h3>
          <p style={{
            fontSize: "clamp(0.8rem, 1vw, 0.95rem)", lineHeight: 1.6,
            color: "rgba(241,238,231,0.6)", margin: 0,
            fontFamily: "var(--font-body)", maxWidth: "32rem",
            maxHeight: hovered ? "4rem" : "0",
            opacity: hovered ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 500ms ease, opacity 400ms ease 100ms",
          }}>
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector("[data-heading]");
      const cards = section.querySelectorAll("[data-card]");

      if (heading) {
        gsap.fromTo(heading,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.8,
            ease: "expo.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (cards.length) {
        gsap.fromTo(cards,
          { opacity: 0, y: 50, scale: 0.97 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
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
      <div style={{ marginBottom: "clamp(3rem, 6vh, 5rem)" }}>
        <p style={{
          fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase",
          color: "rgba(241,238,231,0.3)", margin: "0 0 1rem", fontFamily: "var(--font-body)",
        }}>
          Selected projects
        </p>
        <h2 data-heading
          style={{
            fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 400, lineHeight: 0.95,
            letterSpacing: "-0.02em", margin: 0, fontFamily: "var(--font-display)", color: "#f1eee7",
          }}
        >
          Things I&apos;m proud of.
        </h2>
        <p style={{
          fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.7,
          color: "rgba(241,238,231,0.5)", margin: "1.5rem 0 0",
          fontFamily: "var(--font-body)", maxWidth: "36rem",
        }}>
          Recent websites, brand systems, and tools built for music, entertainment, agencies, and creative teams.
        </p>
      </div>

      <div style={{ marginBottom: "clamp(1rem, 2vw, 1.5rem)" }}>
        <ProjectCard project={FEATURED[0]} index={0} large />
      </div>

      <div className="selected-work-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(1rem, 2vw, 1.5rem)" }}>
        {FEATURED.slice(1).map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i + 1} />
        ))}
      </div>

      <div style={{ marginTop: "clamp(3rem, 5vh, 4rem)", textAlign: "center" }}>
        <Link
          href="/projects"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.75rem",
            padding: "0.85rem 2.5rem", borderRadius: "999px",
            background: "rgba(241,238,231,0.06)",
            border: "1px solid rgba(241,238,231,0.15)",
            color: "#f1eee7",
            fontSize: "0.9rem", fontFamily: "var(--font-body)", textDecoration: "none",
            fontWeight: 500, letterSpacing: "0.02em",
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
        >
          View all projects
          <span style={{ fontSize: "1.1rem", lineHeight: 1, transition: "transform 200ms ease" }}>→</span>
        </Link>
      </div>
    </section>
  );
}
