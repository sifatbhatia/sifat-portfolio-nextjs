"use client";

import { ProjectData } from "@/lib/projects";
import AnimatedText from "./AnimatedText";

// ─── Device Mockups (pure CSS) ────────────────────────────────────────────────

function LaptopMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mockup-laptop" aria-label={`Laptop mockup showing: ${alt}`}>
      {/* Lid / screen housing */}
      <div className="laptop-lid">
        {/* Camera dot */}
        <div className="laptop-camera" />
        {/* Active screen area */}
        <div className="laptop-screen">
          <img src={src} alt={alt} />
        </div>
      </div>
      {/* Base / keyboard deck */}
      <div className="laptop-base">
        {/* Keyboard surface */}
        <div className="laptop-keyboard" />
        {/* Trackpad */}
        <div className="laptop-trackpad" />
      </div>
    </div>
  );
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mockup-iphone" aria-label={`iPhone mockup showing: ${alt}`}>
      {/* Body */}
      <div className="iphone-body">
        {/* Notch */}
        <div className="iphone-notch">
          <div className="iphone-notch-speaker" />
          <div className="iphone-notch-camera" />
        </div>
        {/* Screen */}
        <div className="iphone-screen">
          <img src={src} alt={alt} />
        </div>
        {/* Home indicator */}
        <div className="iphone-home-indicator" />
      </div>
    </div>
  );
}

// ─── Section Block ────────────────────────────────────────────────────────────

function SectionBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="case-study-section"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 4fr 2fr",
        gap: "clamp(2rem, 4vw, 3rem)",
        marginBottom: "clamp(3rem, 6vh, 5rem)",
        fontFamily: "var(--font-body)",
      }}
    >
      <div
        style={{
          fontSize: "0.75rem",
          fontWeight: 400,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(241,238,231,0.25)",
          position: "sticky",
          top: "2rem",
          alignSelf: "start",
        }}
      >
        {label}
      </div>
      <div>{children}</div>
      <div />
    </section>
  );
}

// ─── Key Features Grid ────────────────────────────────────────────────────────

function FeatureItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="feature-item">
      <div className="feature-icon">{icon}</div>
      <p>{text}</p>
    </div>
  );
}

// ─── Metrics Callout ───────────────────────────────────────────────────────────

function MetricsBlock({
  metrics,
}: {
  metrics?: { value: string; label: string }[];
}) {
  if (!metrics || metrics.length === 0) return null;
  return (
    <div className="metrics-block">
      <p className="metrics-label">Results & Impact</p>
      <div className="metrics-grid">
        {metrics.map((m, i) => (
          <div key={i} className="metric-item">
            <span className="metric-value">{m.value}</span>
            <span className="metric-label">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CaseStudy({ project }: { project: ProjectData }) {
  const paragraphs = (text: string) =>
    text.split("\n\n").filter(Boolean);

  return (
    <article
      className="case-study-article"
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding:
          "clamp(4rem, 8vh, 8rem) clamp(1.5rem, 6vw, 4rem) clamp(2rem, 5vh, 4rem)",
        color: "#f1eee7",
      }}
    >
      {/* ── Header ── */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          borderBottom: "1px solid rgba(241,238,231,0.15)",
          paddingBottom: "2rem",
          marginBottom: "clamp(3rem, 6vh, 6rem)",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(241,238,231,0.55)",
              margin: 0,
              fontFamily: "var(--font-body)",
            }}
          >
            {project.role}
          </p>
        </div>
        <time
          style={{
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "0.05em",
            color: "rgba(241,238,231,0.55)",
          }}
        >
          {project.year}
        </time>
      </header>

      {/* ── Hero Title + Meta ── */}
      <section
        className="case-study-header"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "clamp(2rem, 6vw, 5rem)",
          marginBottom: "clamp(3rem, 6vh, 6rem)",
        }}
      >
        <div>
          <AnimatedText
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              margin: "0 0 2rem",
              fontFamily: "var(--font-display)",
            }}
          >
            {project.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.1}
            style={{
              fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
              fontWeight: 400,
              lineHeight: 1.5,
              color: "rgba(241,238,231,0.6)",
              maxWidth: "40rem",
              margin: 0,
              fontFamily: "var(--font-body)",
            }}
          >
            {project.description}
          </AnimatedText>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            gap: "1rem",
            fontSize: "0.875rem",
            fontWeight: 400,
            fontFamily: "var(--font-body)",
          }}
        >
          <p style={{ margin: 0, color: "rgba(241,238,231,0.6)" }}>
            {project.role}
          </p>
          <p style={{ margin: 0, color: "rgba(241,238,231,0.55)" }}>
            {project.year}
          </p>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--accent)", textDecoration: "none" }}
            >
              Live Site →
            </a>
          )}
        </div>
      </section>

      {/* ── Full-width Featured Image ── */}
      <section style={{ marginBottom: "clamp(3rem, 6vh, 6rem)" }}>
        <div
          style={{
            aspectRatio: "16/9",
            overflow: "hidden",
          }}
        >
          <img
            src={project.heroImage}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              filter: "grayscale(30%) contrast(0.9) brightness(0.9)",
            }}
          />
        </div>
        <p
          style={{
            fontSize: "0.75rem",
            color: "rgba(241,238,231,0.3)",
            letterSpacing: "0.05em",
            marginTop: "0.75rem",
            fontFamily: "var(--font-body)",
          }}
        >
          Figure 01 — {project.title}
        </p>
      </section>

      {/* ── Challenge / Approach / Outcome ── */}
      <SectionBlock label="Challenge">
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {paragraphs(project.challenge).map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.75,
                color: "rgba(241,238,231,0.65)",
                margin: 0,
                fontFamily: "var(--font-body)",
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock label="Approach">
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {paragraphs(project.approach).map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.75,
                color: "rgba(241,238,231,0.55)",
                margin: 0,
                fontFamily: "var(--font-body)",
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock label="Outcome">
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {paragraphs(project.outcome).map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.75,
                color: "rgba(241,238,231,0.55)",
                margin: 0,
                fontFamily: "var(--font-body)",
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </SectionBlock>

      {/* ── Key Features ── */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="features-section">
          <div className="features-header">
            <span className="features-eyebrow">Key Features</span>
          </div>
          <div className="features-grid">
            {project.highlights.map((h, i) => (
              <FeatureItem
                key={i}
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 9L7 13L15 5"
                      stroke="var(--accent)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                text={h}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── Metrics ── */}
      <MetricsBlock metrics={project.metrics} />

      {/* ── Device Mockup Gallery ── */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="gallery-section">
          <div className="gallery-header">
            <span className="gallery-eyebrow">Screenshots</span>
          </div>
          <div className="gallery-grid">
            {project.screenshots.map((shot, i) => (
              <div
                key={i}
                className={`gallery-item gallery-item--${shot.type}`}
              >
                {shot.type === "laptop" ? (
                  <LaptopMockup src={shot.src} alt={`${project.title} screenshot ${i + 1}`} />
                ) : (
                  <PhoneMockup src={shot.src} alt={`${project.title} screenshot ${i + 1}`} />
                )}
                <p className="gallery-caption">
                  {shot.caption || `Fig ${String(i + 2).padStart(2, "0")} — ${project.title}`}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Testimonial ── */}
      {project.testimonial && (
        <section
          style={{
            padding: "clamp(4rem, 8vh, 6rem) 0",
            margin: "clamp(3rem, 6vh, 6rem) 0",
            borderTop: "1px solid rgba(241,238,231,0.1)",
            borderBottom: "1px solid rgba(241,238,231,0.1)",
          }}
        >
          <blockquote
            style={{
              maxWidth: "60rem",
              margin: "0 auto",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              color: "rgba(241,238,231,0.72)",
              fontFamily: "var(--font-display)",
            }}
          >
            &ldquo;{project.testimonial.quote}&rdquo;
          </blockquote>
          <p
            style={{
              fontSize: "0.875rem",
              color: "rgba(241,238,231,0.3)",
              marginTop: "1.5rem",
              textAlign: "center",
              fontFamily: "var(--font-body)",
            }}
          >
            — {project.testimonial.attribution}
          </p>
        </section>
      )}
    </article>
  );
}