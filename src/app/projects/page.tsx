"use client";

import { Link } from "next-view-transitions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";
import AnimatedText from "@/components/AnimatedText";

type IndexProject = Pick<
  (typeof projects)[number],
  | "slug"
  | "title"
  | "role"
  | "description"
  | "summary"
  | "stack"
  | "url"
  | "previewUrl"
>;
const primarySlugs = new Set([
  "willcall",
  "j-worra",
  "l-affaire-musicale",
  "sam-blacky",
  "clipkeep",
  "aer",
  "wicked-paradise",
  "cherry-tooth",
  "qlo-agency",
]);
const primaryProjects: IndexProject[] = projects
  .filter((project) => primarySlugs.has(project.slug))
  .flatMap((project) => {
    const { slug } = project;
    if (slug === "sam-blacky" || slug === "qlo-agency")
      return [{ ...project, url: undefined }];
    if (slug === "wicked-paradise")
      return [{ ...project, url: "https://wckdparadise.com/" }];
    if (slug === "cherry-tooth") return [{ ...project, url: undefined }];
    return [project];
  });
const utilities = projects.find((project) => project.slug === "sifs-utilities");
const miscProjects: IndexProject[] = [
  ...(utilities ? [utilities] : []),
  {
    slug: "purrify",
    title: "Purrify",
    role: "Creative Tools / Web App",
    url: "https://purrify.siftion.com/",
    summary:
      "A playful cat-GIF search experiment for the moment when someone has a very specific cat mood.",
    description:
      "Purrify treats finding a cat GIF as the whole point: a light, visual browse with search for the exact cat moment in your head. It is a small creative-tool experiment, not a broader content platform.",
    stack: ["Next.js", "React", "TypeScript", "Creative Tools"],
  },
  {
    slug: "loop",
    title: "Loop",
    role: "GIF Search",
    url: "https://loop.siftion.com/",
    summary: "A GIF search app for reactions, people, films, and anything else.",
    description:
      "Loop searches GIFs across reactions, people, films, and more. Favorites are saved in the current browser.",
    stack: [],
  },
  {
    slug: "woofly",
    title: "Woofly",
    role: "Dog GIF Search",
    url: "https://woofly.siftion.com/",
    summary: "A dog GIF search app for breeds, moods, and reactions.",
    description:
      "Woofly focuses GIF search on dog breeds, moods, and reactions. Favorites are saved in the current browser.",
    stack: [],
  },
];

export default function ProjectsPage() {
  const renderProjectLink = (p: IndexProject, i: number) => {
    const content = (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(var(--sf-ink-rgb), 0.3)",
              margin: "0 0 0.5rem",
              fontFamily: "var(--font-body)",
            }}
          >
            {String(i + 1).padStart(2, "0")} &middot; {p.role}
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 400,
              margin: 0,
              fontFamily: "var(--font-display)",
              color: "var(--sf-ink)",
            }}
          >
            {p.title}
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(var(--sf-ink-rgb), 0.55)",
              margin: "0.5rem 0 0",
              maxWidth: "36rem",
              fontFamily: "var(--font-body)",
            }}
          >
            {p.summary ?? p.description.split(". ")[0] + "."}
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {p.stack.slice(0, 3).map((s) => (
            <span
              key={s}
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(var(--sf-ink-rgb), 0.25)",
                padding: "0.35rem 0.75rem",
                border: "1px solid rgba(var(--sf-ink-rgb), 0.08)",
                borderRadius: "999px",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    );
    const style = {
      display: "block",
      padding: "clamp(1.5rem, 3vh, 2.5rem) 0",
      borderBottom: "1px solid rgba(var(--sf-ink-rgb), 0.1)",
      color: "inherit",
      textDecoration: "none",
      transition: "padding-left 200ms ease",
    };
    const hasCaseStudy = projects.some((project) => project.slug === p.slug);
    const externalUrl = hasCaseStudy ? undefined : p.previewUrl ?? p.url;
    const href = hasCaseStudy ? `/projects/${p.slug}` : externalUrl;
    return href ? (
      <Link
        key={p.slug}
        href={href}
        target={externalUrl ? "_blank" : undefined}
        rel={externalUrl ? "noreferrer" : undefined}
        style={style}
        onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "1rem")}
        onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0")}
        onFocus={(e) => (e.currentTarget.style.paddingLeft = "1rem")}
        onBlur={(e) => (e.currentTarget.style.paddingLeft = "0")}
      >
        {content}
      </Link>
    ) : (
      <div key={p.slug} style={style}>
        {content}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <main
        style={{
          padding:
            "clamp(6rem, 10vh, 10rem) clamp(1.5rem, 6vw, 4rem) clamp(6rem, 8vh, 8rem)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <header style={{ marginBottom: "clamp(3rem, 6vh, 6rem)" }}>
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
            Work
          </p>
          <AnimatedText
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              margin: 0,
              fontFamily: "var(--font-display)",
              color: "var(--sf-ink)",
            }}
          >
            Selected work
          </AnimatedText>
          <p
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
              lineHeight: 1.7,
              color: "rgba(var(--sf-ink-rgb), 0.5)",
              margin: "1.5rem 0 0",
              fontFamily: "var(--font-body)",
              maxWidth: "36rem",
            }}
          >
            Websites, identities, and tools made with artists, agencies, and
            creative teams.
          </p>
        </header>

        <div style={{ display: "grid", gap: 0 }}>
          {primaryProjects.map(renderProjectLink)}
        </div>

        <section style={{ marginTop: "clamp(5rem, 10vh, 8rem)" }}>
          <div
            style={{
              marginBottom: "clamp(1.5rem, 4vh, 2.5rem)",
              maxWidth: "44rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(var(--sf-signal-rgb), 0.75)",
                margin: "0 0 1rem",
                fontFamily: "var(--font-body)",
              }}
            >
              Experiments / small worlds
            </p>
            <p
              style={{
                fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                lineHeight: 1.7,
                color: "rgba(var(--sf-ink-rgb), 0.48)",
                margin: 0,
                fontFamily: "var(--font-body)",
              }}
            >
              Smaller studies, speculative builds, and playful tools.
            </p>
          </div>

          <div style={{ display: "grid", gap: 0 }}>
            {miscProjects.map(renderProjectLink)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
