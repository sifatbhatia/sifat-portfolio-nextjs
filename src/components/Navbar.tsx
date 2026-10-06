"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import gsap from "gsap";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/journal", label: "Journal" },
  { href: "/services", label: "Services" },
  { href: "/now", label: "Now" },
];

export default function Navbar() {
  const menuRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const ctx = useRef<gsap.Context | null>(null);
  const openRef = useRef(false);

  // Detect when fixed menu button is over light-background sections
  useEffect(() => {
    const button = buttonRef.current;
    const header = headerRef.current;
    if (!button || !header) return;

    let rafId: number;
    const menu = menuRef.current;
    if (!menu) return;

    const check = () => {
      const cta = document.querySelector('.cta-section');
      if (!cta) {
        button.classList.remove('is-over-light');
        header.classList.remove('is-over-light');
        menu.classList.remove('is-over-light');
        return;
      }
      const ctaRect = cta.getBoundingClientRect();
      const btnRect = button.getBoundingClientRect();
      const overlap = ctaRect.top <= btnRect.bottom && ctaRect.bottom >= btnRect.top;
      button.classList.toggle('is-over-light', overlap);
      header.classList.toggle('is-over-light', overlap);
      menu.classList.toggle('is-over-light', overlap);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(check);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    check();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    const shell = shellRef.current;
    const content = contentRef.current;
    const button = buttonRef.current;
    if (!menu || !shell || !content || !button) return;

    const CLOSED = 88;
    const links = content.querySelectorAll("li");
    const contact = content.querySelector(".menu-contact");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    ctx.current = gsap.context(() => {});
    content.inert = true;

    const setOpen = (open: boolean) => {
      if (openRef.current === open) return;
      openRef.current = open;
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      content.setAttribute("aria-hidden", String(!open));
      content.inert = !open;
      menu.classList.toggle("is-open", open);

      gsap.killTweensOf([shell, content, links]);

      const isLight = button.classList.contains("is-over-light");
      const openBorder = isLight ? "rgba(20,20,18,0.10)" : "rgba(255,247,247,0.14)";
      const closedBorder = isLight ? "rgba(20,20,18,0)" : "rgba(255,247,247,0)";
      const openBg = isLight ? "rgba(245,242,235,0.85)" : "rgba(18,18,16,0.72)";
      const closedBg = isLight ? "rgba(245,242,235,0)" : "rgba(18,18,16,0)";
      const openSaturate = isLight ? "150%" : "180%";
      const openFilter = `blur(20px) saturate(${openSaturate})`;
      const closedFilter = "blur(0px)";

      if (reduceMotion) {
        gsap.set(shell, {
          width: open ? Math.min(window.innerWidth - 24, 260) : CLOSED,
          height: open ? "auto" : CLOSED,
          borderColor: open ? openBorder : closedBorder,
          backgroundColor: open ? openBg : closedBg,
          backdropFilter: open ? openFilter : closedFilter,
        });
        shell.style.setProperty("-webkit-backdrop-filter", open ? openFilter : closedFilter);
        gsap.set(content, { opacity: open ? 1 : 0 });
        gsap.set(links, { opacity: open ? 1 : 0, y: 0, scale: 1 });
        if (contact) gsap.set(contact, { opacity: open ? 1 : 0 });
        return;
      }

      if (open) {
        const w = Math.min(window.innerWidth - 24, 260);
        gsap.set(shell, { width: CLOSED, height: CLOSED, borderColor: closedBorder });
        const tl = gsap.timeline();
        tl.to(shell, { width: w, borderColor: openBorder, duration: 0.4, ease: "power3.out" })
          .to(shell, { height: "auto", duration: 0.45, ease: "power3.out" }, "-=0.08")
          .to(content, { opacity: 1, duration: 0.2, ease: "power2.out" }, "-=0.2")
          .fromTo(links, { opacity: 0, y: 16, scale: 0.92 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.07, ease: "power3.out" }, "-=0.1");
        if (contact) tl.to(contact, { opacity: 1, duration: 0.25, ease: "power2.out" }, "-=0.15");
        shell.style.setProperty("-webkit-backdrop-filter", openFilter);
        gsap.to(shell, { backgroundColor: openBg, backdropFilter: openFilter, duration: 0.25, delay: 0.06, ease: "power2.out" });
      } else {
        gsap.to(content, { opacity: 0, duration: 0.1, ease: "power2.in" });
        gsap.to(links, { opacity: 0, y: 6, duration: 0.08, ease: "power2.in" });
        if (contact) gsap.to(contact, { opacity: 0, duration: 0.08, ease: "power2.in" });
        const ow = shell.scrollWidth;
        const oh = shell.scrollHeight;
        gsap.set(shell, { width: ow, height: oh });
        const tl = gsap.timeline();
        tl.to(shell, { height: CLOSED, duration: 0.18, ease: "power3.in" }, 0.04)
          .to(shell, { width: CLOSED, borderColor: closedBorder, duration: 0.24, ease: "power3.in" }, "-=0.06");
        gsap.to(shell, {
          backgroundColor: closedBg,
          backdropFilter: closedFilter,
          duration: 0.25,
          delay: 0.18,
          ease: "power2.out",
          onComplete: () => {
            shell.style.setProperty("-webkit-backdrop-filter", closedFilter);
          },
        });
      }
    };

    const onToggle = (e: Event) => {
      e.stopPropagation();
      setOpen(!openRef.current);
    };
    const onClose = () => setOpen(false);
    const onDocumentClick = (e: MouseEvent) => {
      if (openRef.current && !menu.contains(e.target as Node)) onClose();
    };
    const onDocumentKeydown = (e: KeyboardEvent) => {
      if (openRef.current && e.key === "Escape") {
        onClose();
        button.focus();
      }
    };

    button.addEventListener("click", onToggle);
    content.querySelectorAll("a").forEach(a => a.addEventListener("click", onClose));
    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onDocumentKeydown);

    // Hold the grid menu until the opening wordmark animation has settled.
    let initialHeroHold = true;

    // Desktop: hide at top, show on scroll
    const updateVis = () => {
      const hidden = initialHeroHold || (window.innerWidth >= 768 && window.scrollY <= 18);
      menu.style.opacity = hidden ? "0" : "1";
      menu.style.pointerEvents = hidden ? "none" : "auto";
      // Fade nav links + logo on scroll
      if (navRef.current) {
        navRef.current.style.opacity = hidden ? "1" : "0";
        navRef.current.style.transform = hidden ? "translateY(0)" : "translateY(-8px) scale(0.96)";
        navRef.current.style.pointerEvents = hidden ? "auto" : "none";
      }
      if (logoRef.current) {
        logoRef.current.style.opacity = hidden ? "1" : "0";
        logoRef.current.style.pointerEvents = hidden ? "auto" : "none";
      }
    };
    const heroHoldTimer = window.setTimeout(() => {
      initialHeroHold = false;
      updateVis();
    }, 1400);
    window.addEventListener("scroll", updateVis, { passive: true });
    window.addEventListener("resize", updateVis);
    updateVis();

    return () => {
      gsap.killTweensOf([shell, content, links]);
      button.removeEventListener("click", onToggle);
      content.querySelectorAll("a").forEach(a => a.removeEventListener("click", onClose));
      document.removeEventListener("click", onDocumentClick);
      document.removeEventListener("keydown", onDocumentKeydown);
      window.clearTimeout(heroHoldTimer);
      window.removeEventListener("scroll", updateVis);
      window.removeEventListener("resize", updateVis);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="navbar-header"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 20001,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "1.5rem 6%", color: "#fff",
          pointerEvents: "none",
        }}
      >
        <Link ref={logoRef} href="/" style={{ pointerEvents: "auto", display: "inline-flex", alignItems: "center", transition: "opacity 400ms ease", filter: "drop-shadow(0 0 10px rgba(0,0,0,0.5))" }}>
          <Image className="navbar-logo" src="/assets/Sifat -Bhatia.svg" alt="Sifat Bhatia" width={206} height={111} priority unoptimized style={{ width: "auto", height: "clamp(2rem, 3vw, 2.5rem)" }} />
        </Link>
        <nav ref={navRef} aria-label="Main navigation" style={{ display: "flex", gap: "2rem", pointerEvents: "auto", listStyle: "none", margin: 0, padding: 0, transition: "opacity 300ms ease, transform 300ms ease" }}>
          {LINKS.map(l => (
            <Link className="navbar-link" key={l.label} href={l.href} style={{ color: "rgba(255,247,247,0.75)", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", transition: "opacity 300ms ease, color 200ms ease" }}>
              {l.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Dot Menu Card */}
      <div
        ref={menuRef}
        className="grid-menu"
        style={{
          position: "fixed", zIndex: 20002, right: "6%", top: "1.5rem",
          display: "flex", justifyContent: "flex-end",
          width: "min(calc(100vw - 1.5rem), 280px)",
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 260ms ease",
        }}
      >
        <div
          ref={shellRef}
          style={{
            width: 88, height: 88, borderRadius: 18,
            border: "1px solid transparent", overflow: "hidden",
            background: "rgba(18,18,16,0)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end", padding: "0.65rem" }}>
            <div style={{ display: "flex", width: "2.8rem", height: "2.8rem", alignItems: "center", justifyContent: "center" }}>
              <button
                ref={buttonRef}
                aria-label="Open menu"
                aria-expanded={false}
                className="menu-button"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  e.currentTarget.style.setProperty('--mx', `${x}%`);
                  e.currentTarget.style.setProperty('--my', `${y}%`);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.removeProperty('--mx');
                  e.currentTarget.style.removeProperty('--my');
                }}
                style={{
                  position: "relative", display: "grid",
                  width: "1.6rem", height: "1.6rem",
                  gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(3, 1fr)",
                  placeItems: "center", gap: "0.12rem",
                  border: 0, borderRadius: "0.375rem", padding: 0, background: "transparent",
                  mixBlendMode: "normal",
                }}
              >
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    className="menu-dot"
                    style={{
                      display: "block", width: "0.36rem", height: "0.36rem",
                      borderRadius: "50%", background: "#fff",
                      transition: "opacity 200ms, transform 200ms",
                    }}
                  />
                ))}
              </button>
            </div>
          </div>

          <div
            ref={contentRef}
            aria-hidden="true"
            style={{ padding: "0.35rem 1.55rem 1.75rem", opacity: 0 }}
          >
            <p className="menu-label" style={{ margin: "0 0 0.85rem", color: "rgba(255,247,247,0.36)", fontSize: "0.68rem", fontWeight: 650, letterSpacing: "0.16em", textTransform: "uppercase" }}>
              Navigation
            </p>
            <ul style={{ display: "flex", flexDirection: "column", listStyle: "none", padding: 0, margin: 0, gap: "0.05rem" }}>
              {LINKS.map(l => (
                <li key={l.label} style={{ opacity: 0, transform: "translateY(10px)" }}>
                  <Link className="menu-nav-link" href={l.href} style={{ display: "block", padding: "0.55rem 0", color: "rgba(255,247,247,0.72)", fontSize: "1.18rem", fontWeight: 520, lineHeight: 1.08 }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="menu-contact" style={{ marginTop: "1.2rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,247,247,0.14)", opacity: 0 }}>
              <p className="menu-cta-label" style={{ margin: "0 0 0.5rem", color: "rgba(255,247,247,0.42)", fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>Open for conversation</p>
              <a href="mailto:sifatbht@gmail.com" style={{ color: "rgba(255,247,247,0.58)", fontSize: "0.85rem" }}>sifatbht@gmail.com</a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
