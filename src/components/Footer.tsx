"use client";

import { useCallback, useState, useSyncExternalStore } from "react";
import Image from "next/image";
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
  { label: "DESIGN & DEVELOPMENT", alignRight: true },
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

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [],
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

/* ------------------------------------------------------------------ */
/*  Constants                                                         */
/* ------------------------------------------------------------------ */

const NAV_TEXT = {
  fontFamily: "var(--font-body)",
  fontSize: "clamp(1.15rem, 1.5vw, 23.9px)",
  fontWeight: 700,
  letterSpacing: "-0.055em",       // Figma: −1.31px ÷ 23.9px
  lineHeight: "22px",
  textTransform: "uppercase" as const,
  textDecoration: "none",
} as const satisfies React.CSSProperties;

const BOTTOM_TEXT = {
  fontFamily: "var(--font-body)",
  fontSize: "21px",
  fontWeight: 700,
  letterSpacing: "-0.055em",       // Figma: −1.15px ÷ 21px
  lineHeight: "19.3px",
  textTransform: "uppercase" as const,
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
} as const satisfies React.CSSProperties;

const COLOR_NAV = "rgba(247,247,242,0.86)";   // #f7f7f2db
const COLOR_BOTTOM = "rgba(247,247,242,0.58)"; // #f7f7f294
const COLOR_HOVER = "#f7f7f2";

/* ------------------------------------------------------------------ */
/*  Sub‑components                                                    */
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
    ...NAV_TEXT,
    color: hovered ? COLOR_HOVER : COLOR_NAV,
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

function BottomBarItem({
  item,
  index,
  count,
}: {
  item: (typeof BOTTOM_BAR_ITEMS)[number];
  index: number;
  count: number;
}) {
  const [hovered, setHovered] = useState(false);
  const isLast = index === count - 1;
  const hasHref = "href" in item && item.href;

  const style: React.CSSProperties = {
    ...BOTTOM_TEXT,
    color: hovered && hasHref ? COLOR_HOVER : COLOR_BOTTOM,
    cursor: hasHref ? "pointer" : undefined,
    textAlign: isLast ? "right" : "left",
    transition: "color 200ms ease",
    width: "fit-content",
  };

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  if (hasHref) {
    return <a href={item.href!} style={style} {...handlers}>{item.label}</a>;
  }

  return <span style={style}>{item.label}</span>;
}

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [logoHovered, setLogoHovered] = useState(false);

  const sectionGap = isMobile ? "clamp(3rem, 8vw, 5rem)" : "108px";
  const gridGap = isMobile ? "clamp(2rem, 5vw, 3rem)" : "72.32px";

  return (
    <footer
      style={{
        width: "100%",
        background: "#030303",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: sectionGap,
        padding: isMobile
          ? "clamp(3rem, 12vw, 5rem) clamp(1rem, 4vw, 1.5rem)"
          : "101px 23px 0 21px",
      }}
    >
      {/* ── Top section: 3‑col grid ── */}
      <div
        style={{
          display: isMobile ? "flex" : "grid",
          flexDirection: "column",
          gridTemplateColumns:
            "minmax(0, 1.25fr) minmax(0, 1.55fr) minmax(0, 1.05fr)",
          gap: gridGap,
          width: "100%",
          paddingBottom: isMobile ? "0" : "168px",
        }}
      >
        {/* Philosophy */}
        <section
          aria-label="Brand statement"
          style={{
            maxWidth: isMobile ? "none" : "265.43px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p style={{ margin: 0, ...NAV_TEXT, color: COLOR_NAV }}>
            BUILT ON THE BELIEF
            <br />
            THAT REAL LIVING
            <br />
            IS MEETING.
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
            gap: isMobile ? "clamp(0.4rem, 0.6vw, 0.75rem)" : undefined,
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
            gap: isMobile ? "clamp(0.4rem, 0.6vw, 0.75rem)" : undefined,
          }}
        >
          {SOCIAL_LINKS.map((link) => (
            <NavLink key={link.label} href={link.href} external={link.external}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* ── Logo ── */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxHeight: isMobile ? "none" : "364.95px",
        }}
      >
        <Link
          href="/"
          aria-label="Back to home"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1676.39px",
            opacity: logoHovered ? 0.85 : 1,
            transition: "opacity 300ms ease",
          }}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Image
            src="/assets/footer__logo.svg"
            alt="SIFAT BHATIA"
            width={1677}
            height={198}
            unoptimized
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Link>
      </div>

      {/* ── Bottom bar ── */}
      {isMobile ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "clamp(0.3rem, 1vw, 0.5rem)",
            width: "100%",
          }}
        >
          {BOTTOM_BAR_ITEMS.map((item, i) => (
            <BottomBarItem key={item.label} item={item} index={i} count={BOTTOM_BAR_ITEMS.length} />
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            width: "100%",
          }}
        >
          {BOTTOM_BAR_ITEMS.map((item, i) => (
            <BottomBarItem key={item.label} item={item} index={i} count={BOTTOM_BAR_ITEMS.length} />
          ))}
        </div>
      )}
    </footer>
  );
}
