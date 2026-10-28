"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import AnimatedText from "./AnimatedText";
import MaterialIcon from "./MaterialIcon";
import ArrowIcon from "./ArrowIcon";

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [toast, setToast] = useState(false);
  const [icon, setIcon] = useState("arrow_forward");
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const handleClick = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText("sifatbht@gmail.com");
        setToast(true);
        setIcon("check");
        if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
        toastTimerRef.current = setTimeout(() => {
          setToast(false);
          setIcon("arrow_forward");
        }, 2000);
      } catch {
        window.location.href = href;
      }
    },
    [href],
  );

  const handleDblClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:sifatbht@gmail.com";
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <button
        type="button"
        onClick={handleClick}
        onDoubleClick={handleDblClick}
        aria-describedby={toast ? "cta-email-copy-status" : undefined}
        className="sf-button sf-button--primary cta-primary-btn"
      >
        {children}
        <span
          className="cta-arrow"
          data-state={icon === "arrow_forward" ? "arrow" : "check"}
          style={{
            display: "inline-block",
            transition: "transform 200ms ease, opacity 200ms ease",
          }}
        >
          <MaterialIcon name={icon} />
        </span>
      </button>
      {toast && (
        <span
          id="cta-email-copy-status"
          role="status"
          aria-live="polite"
          style={{
            position: "absolute",
            bottom: "-1.15rem",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "0.75rem",
            color: "rgba(var(--cta-ink-rgb), 0.65)",
            fontFamily: "var(--font-body)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            animation: "toast-fade 2s ease forwards",
          }}
        >
          Copied - double-click to open mail
        </span>
      )}
    </div>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${children} (opens in new tab)`}
      className="sf-button sf-button--secondary cta-secondary-btn"
    >
      {children}
      <ArrowIcon
        className="cta-external-icon"
        direction="up-right"
        width={16}
        height={16}
      />
    </a>
  );
}

export default function CTA() {
  return (
    <section
      className="cta-section"
      style={{
        padding: "clamp(6rem, 12vh, 10rem) clamp(1.5rem, 6vw, 4rem)",
        background: "var(--cta-paper)",
        color: "var(--cta-ink)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(var(--cta-ink-rgb), 0.55)",
            margin: "0 0 2rem",
            fontFamily: "var(--font-body)",
          }}
        >
          Get in touch
        </p>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <AnimatedText
            as="h2"
            split="chars"
            start="top 85%"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              fontFamily: "var(--font-display)",
              justifyContent: "center",
            }}
          >
            What are you trying to ship?
          </AnimatedText>
        </div>
        <p
          style={{
            fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
            lineHeight: 1.7,
            color: "rgba(var(--cta-ink-rgb), 0.7)",
            margin: "0 0 3rem",
            fontFamily: "var(--font-body)",
            maxWidth: "32rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Send me a link, what needs to change, and the date you want to ship.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <PrimaryButton href="mailto:sifatbht@gmail.com">
            sifatbht@gmail.com
          </PrimaryButton>
          <SecondaryButton href="https://www.instagram.com/siftion/">
            Instagram
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
