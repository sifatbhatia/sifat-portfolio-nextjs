"use client";

import { useCallback, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";

const primaryLinks = [
  { href: "/projects", label: "PROJECTS" },
  { href: "/journal", label: "JOURNAL" },
  { href: "/services", label: "SERVICES" },
  { href: "/now", label: "NOW" },
];

const socialLinks = [
  { href: "https://www.instagram.com/siftion/", label: "INSTAGRAM", external: true },
  { href: "mailto:sifatbht@gmail.com", label: "EMAIL" },
];

const bottomBarItems = [
  { label: "LOS ANGELES", href: null as string | null, external: false },
  { label: "© SIFTION", href: null as string | null, external: false },
  { label: "SIFATBHT@GMAIL.COM", href: "mailto:sifatbht@gmail.com", external: false },
  { label: "DESIGN & DEVELOPMENT", href: null as string | null, external: false },
];

function useMediaQuery(query: string): boolean {
  const subscribe = useCallback((notify: () => void) => {
    const mq = window.matchMedia(query);
    mq.addEventListener("change", notify);
    return () => mq.removeEventListener("change", notify);
  }, [query]);

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

function NavLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  const [hovered, setHovered] = useState(false);

  const style = {
    color: hovered ? "#f7f7f2" : "rgba(247,247,242,0.86)",
    fontSize: "clamp(1.15rem, 2vw, 23.9px)",
    fontWeight: 700,
    fontFamily: "var(--font-body)",
    letterSpacing: "-0.03em",
    lineHeight: "clamp(1.1rem, 1.85vw, 22px)",
    textTransform: "uppercase" as const,
    textDecoration: "none",
    whiteSpace: "nowrap" as const,
    transition: "color 200ms ease",
  } as React.CSSProperties;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" style={style}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} style={style}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {children}
    </Link>
  );
}

function BottomBarItem({ item, style }: { item: typeof bottomBarItems[0]; style: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  const finalStyle = {
    ...style,
    color: hovered && item.href ? "#f7f7f2" : style.color,
    transition: "color 200ms ease",
    cursor: item.href ? "pointer" : undefined,
  } as React.CSSProperties;
  const handlers = item.href ? {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  } : {};

  if (item.href && item.external) {
    return <a href={item.href} target="_blank" rel="noreferrer" style={finalStyle} {...handlers}>{item.label}</a>;
  }
  if (item.href) {
    return <a href={item.href} style={finalStyle} {...handlers}>{item.label}</a>;
  }
  return <span style={finalStyle}>{item.label}</span>;
}

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <footer style={{
      width: "100%",
      background: "#030303",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: isMobile ? "clamp(1.5rem, 4vw, 2.5rem)" : "44.4px",
      padding: isMobile
        ? "clamp(3rem, 15vw, 5rem) clamp(1rem, 4vw, 1.5rem) clamp(2rem, 5vw, 3rem)"
        : "220px 23px 44px 21px",
    }}>
      {/* Top: desktop=3-col grid, mobile=stacked flex */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingBottom: isMobile ? "clamp(2rem, 10vw, 4rem)" : "168px",
      }}>
        {/* On desktop: grid container. On mobile: flex column items */}
        <div style={{
          display: isMobile ? "flex" : "grid",
          flexDirection: "column",
          gridTemplateColumns: isDesktop
            ? "minmax(0,1.25fr) minmax(0,1.55fr) minmax(0,1.05fr)"
            : isMobile ? "1fr" : "1fr 1fr 1fr",
          gap: isMobile ? "clamp(2rem, 5vw, 3rem)" : "72.32px",
          width: "100%",
        }}>
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
            <p style={{
              margin: 0,
              color: "rgba(247,247,242,0.86)",
              fontSize: "clamp(1.15rem, 2vw, 23.9px)",
              fontWeight: 700,
              fontFamily: "var(--font-body)",
              letterSpacing: "-0.03em",
              lineHeight: "clamp(1.1rem, 1.85vw, 22px)",
              textTransform: "uppercase",
            }}>
              Built on the belief<br />
              that real living<br />
              is meeting.
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
              gap: "clamp(0.4rem, 0.6vw, 0.75rem)",
            }}
          >
            {primaryLinks.map(link => (
              <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
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
              gap: "clamp(0.4rem, 0.6vw, 0.75rem)",
            }}
          >
            {socialLinks.map((link, i) => (
              <NavLink key={`${link.label}-${i}`} href={link.href} external={link.external}>{link.label}</NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Logo */}
      <div style={{
        width: "100%",
        alignSelf: "stretch",
      }}>
        <Link
          href="/"
          aria-label="Back to home"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            opacity: logoHovered ? 0.85 : 1,
            transition: "opacity 300ms ease",
          }}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Image
            src="/assets/footer__logo.svg"
            alt="SIFAT BHATIA"
            width={1702}
            height={203}
            priority={false}
            unoptimized
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              maxWidth: "100%",
            }}
          />
        </Link>
      </div>

      {/* Bottom bar */}
      {isMobile ? (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "clamp(0.3rem, 1vw, 0.5rem)",
          width: "100%",
        }}>
          {bottomBarItems.map((item, index) => {
            const isLast = index === bottomBarItems.length - 1;
            return (
              <BottomBarItem
                key={item.label}
                item={item}
                style={{
                  color: "rgba(247,247,242,0.72)",
                  fontSize: "clamp(0.85rem, 3vw, 21px)",
                  fontWeight: 700,
                  fontFamily: "var(--font-body)",
                  letterSpacing: "-0.02em",
                  lineHeight: "clamp(0.8rem, 2.8vw, 19.3px)",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  textAlign: isLast ? "right" : undefined,
                  width: isLast ? "100%" : undefined,
                } as React.CSSProperties}
              />
            );
          })}
        </div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          width: "100%",
        }}>
          {bottomBarItems.map((item, index) => {
            const isLast = index === bottomBarItems.length - 1;
            return (
              <BottomBarItem
                key={item.label}
                item={item}
                style={{
                  color: "rgba(247,247,242,0.72)",
                  fontSize: "21px",
                  fontWeight: 700,
                  fontFamily: "var(--font-body)",
                  letterSpacing: "-0.02em",
                  lineHeight: "19.3px",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  textAlign: isLast ? "right" : "left",
                } as React.CSSProperties}
              />
            );
          })}
        </div>
      )}
    </footer>
  );
}
