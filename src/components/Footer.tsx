"use client";

import { useCallback, useState, useSyncExternalStore } from "react";
import { Link } from "next-view-transitions";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const PRIMARY_LINKS = [
  { href: "/projects", label: "PROJECTS" },
  { href: "/journal", label: "JOURNAL" },
  { href: "/services", label: "SERVICES" },
  { href: "/now", label: "NOW" },
] as const;

const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/siftion/", label: "INSTAGRAM", external: true },
  { href: "mailto:sifatbht@gmail.com", label: "EMAIL", external: false },
] as const;

const BOTTOM_BAR_ITEMS = [
  { label: "LOS ANGELES" },
  { label: "© SIFTION" },
  { label: "SIFATBHT@GMAIL.COM", href: "mailto:sifatbht@gmail.com" },
  { label: "DESIGN & DEVELOPMENT" },
] as const;

/* ------------------------------------------------------------------ */
/*  Hooks                                                             */
/* ------------------------------------------------------------------ */

function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (notify: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", notify);
      return () => mq.removeEventListener("change", notify);
    },
    [query],
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, []);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

/* ------------------------------------------------------------------ */
/*  Tokens                                                            */
/* ------------------------------------------------------------------ */

const TEXT_NAV = {
  fontFamily: "var(--font-body)",
  fontSize: "clamp(1.15rem, 1.5vw, 23.9px)",
  fontWeight: 700,
  letterSpacing: "-0.055em",
  lineHeight: "22px",
  textTransform: "uppercase",
  textDecoration: "none",
} satisfies React.CSSProperties;

const TEXT_BTM = {
  fontFamily: "var(--font-body)",
  fontSize: "21px",
  fontWeight: 700,
  letterSpacing: "-0.055em",
  lineHeight: "19.3px",
  textTransform: "uppercase",
  textDecoration: "none",
} satisfies React.CSSProperties;

const COL_NAV = "rgba(247,247,242,0.86)";
const COL_BTM = "rgba(247,247,242,0.58)";
const COL_HVR = "#f7f7f2";

/* ------------------------------------------------------------------ */
/*  Sub-components                                                    */
/* ------------------------------------------------------------------ */

function NavLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const style: React.CSSProperties = {
    ...TEXT_NAV,
    color: hovered ? COL_HVR : COL_NAV,
    transition: "color 200ms ease",
    width: "fit-content",
  };
  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" style={style} {...handlers}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} style={style} {...handlers}>
      {children}
    </Link>
  );
}

function BottomBarItem({ label, href }: { label: string; href?: string }) {
  const [hovered, setHovered] = useState(false);
  const style: React.CSSProperties = {
    ...TEXT_BTM,
    color: hovered && href ? COL_HVR : COL_BTM,
    cursor: href ? "pointer" : undefined,
    transition: "color 200ms ease",
    whiteSpace: "nowrap",
  };
  const handlers = href
    ? {
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
      }
    : {};

  if (href) {
    return (
      <a href={href} style={style} {...handlers}>
        {label}
      </a>
    );
  }

  return <span style={style}>{label}</span>;
}

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [logoHovered, setLogoHovered] = useState(false);

  const sGap = isMobile ? "clamp(3rem, 8vw, 5rem)" : "108px";
  const gGap = isMobile ? "clamp(2rem, 5vw, 3rem)" : "72.32px";
  const fPad = isMobile
    ? "clamp(3rem, 12vw, 5rem) clamp(1rem, 4vw, 1.5rem)"
    : "101px 23px 0 21px";

  return (
    <footer
      style={{
        width: "100%",
        background: "#030303",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: sGap,
        padding: fPad,
      }}
    >
      {/* ── Top section: 3‑col grid ── */}
      <div
        style={{
          display: isMobile ? "flex" : "grid",
          flexDirection: "column",
          gridTemplateColumns:
            "minmax(0, 1.25fr) minmax(0, 1.55fr) minmax(0, 1.05fr)",
          gap: gGap,
          width: "100%",
          paddingBottom: isMobile ? "0" : "96px",
        }}
      >
        {/* Philosophy */}
        <section
          aria-label="Brand statement"
          style={{
            maxWidth: isMobile ? "none" : "280px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p style={{ margin: 0, ...TEXT_NAV, color: COL_NAV, maxWidth: "265px" }}>
            Built on the belief that real living is meeting.
          </p>
        </section>

        {/* Primary navigation */}
        <nav
          aria-label="Primary footer navigation"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: isMobile ? "clamp(0.4rem, 0.6vw, 0.75rem)" : "0",
          }}
        >
          {PRIMARY_LINKS.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Social links */}
        <nav
          aria-label="Social links"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: isMobile ? "clamp(0.4rem, 0.6vw, 0.75rem)" : "0",
          }}
        >
          {SOCIAL_LINKS.map((link) => (
            <NavLink key={link.label} href={link.href} external={link.external}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* ── Logo wordmark ── */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          aria-label="Back to home"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1677px",
            opacity: logoHovered ? 0.85 : 1,
            transition: "opacity 300ms ease",
          }}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <img
            src="/assets/footer__logo.svg"
            alt="SIFAT BHATIA"
            width={1677}
            height={198}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Link>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? "clamp(0.3rem, 1vw, 0.5rem)" : "0",
        }}
      >
        {BOTTOM_BAR_ITEMS.map((item) => (
          <BottomBarItem key={item.label} label={item.label} href={"href" in item ? item.href : undefined} />
        ))}
      </div>
    </footer>
  );
}
