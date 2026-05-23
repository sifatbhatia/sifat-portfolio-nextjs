"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  { title: "J. Worra", sub: "Artist Website / Web Identity", img: "/assets/previews/j-worra/screenshot-1.webp" },
  { title: "Sif's Utilities", sub: "Privacy-first Tool Suite", img: "/assets/previews/sifs-utilities/screenshot-1.webp" },
  { title: "L'Affaire Musicale", sub: "Agency Rebrand", img: "/assets/previews/l-affaire-musicale/screenshot-1.webp" },
  { title: "QLO Agency", sub: "Studio Identity", img: "/assets/previews/qlo-agency/screenshot-1.webp" },
  { title: "ClipKeep", sub: "Social clip vault", img: "/assets/previews/clipkeep/screenshot-1.webp" },
  { title: "Sam Blacky", sub: "Artist Platform", img: "/assets/previews/sam-blacky/screenshot-1.webp" },
  { title: "Cherry Tooth", sub: "Brand Identity", img: "/assets/previews/cherry-tooth/screenshot-1.webp" },
  { title: "Wicked Paradise", sub: "Event Experience", img: "/assets/previews/wicked-paradise/screenshot-1.webp" },
];
const LOOP_ITEMS = [...PROJECTS, ...PROJECTS];


function Carousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLAnchorElement[]>([]);
  const titleRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef(0);
  const lerpTarget = useRef(0);
  const lerpCurrent = useRef(0);
  const mouseInside = useRef(false);
  const prevActive = useRef<HTMLElement | null>(null);
  const isMobile = useRef(false);
  const registerItem = useCallback((el: HTMLAnchorElement | null, i: number) => { if (el) itemsRef.current[i] = el; }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    const C = { HOVER_SCALE: 1.35, LERP: 0.07, MOBILE_BP: 768, MAX_S: 2.7, MIN_S: 1, FALLOFF: 0.7 };
    const mql = window.matchMedia(`(max-width: ${C.MOBILE_BP - 1}px)`);
    isMobile.current = mql.matches;
    const getMax = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
    const clamp = (x: number) => { const m = getMax(); return m === 0 ? 0 : Math.max(-m, Math.min(0, x)); };
    const lerp = (a: number, b: number, t: number) => { const d = b - a; return Math.abs(d) > 0.05 ? a + d * t : b; };
    function updActive() {
      const cx = viewport!.clientWidth / 2; let best: HTMLElement | null = null; let bd = Infinity;
      for (const it of itemsRef.current) { if (!it) continue; const r = it.getBoundingClientRect(); const d = Math.abs(r.left + r.width / 2 - cx); if (d < bd) { bd = d; best = it; } }
      if (best && best !== prevActive.current) { prevActive.current?.classList.remove("is-active"); best.classList.add("is-active"); prevActive.current = best; }
    }
    function updMobile() {
      if (!titleRef.current || !subtitleRef.current) return;
      const cy = window.innerHeight / 2; const fo = window.innerHeight * C.FALLOFF; let best: HTMLElement | null = null; let bd = Infinity;
      for (const it of itemsRef.current) { if (!it) continue; const r = it.getBoundingClientRect(); const iy = r.top + r.height / 2; const d = Math.abs(iy - cy); const t = Math.min(1, d / Math.max(1, fo)); const e = 1 - Math.pow(t, 1.5); const s = C.MIN_S + e * (C.MAX_S - C.MIN_S); (it as HTMLElement).style.setProperty("--scroll-scale", s.toFixed(3)); if (d < bd) { bd = d; best = it; } }
      if (best) { titleRef.current.textContent = best.querySelector(".cap-title")?.textContent || ""; subtitleRef.current.textContent = best.querySelector(".cap-sub")?.textContent || ""; }
    }
    function tick() {
      if (!isMobile.current) { lerpCurrent.current = lerp(lerpCurrent.current, lerpTarget.current, C.LERP); lerpCurrent.current = clamp(lerpCurrent.current); track!.style.transform = `translate3d(${lerpCurrent.current}px,0,0)`; updActive(); }
      else { updMobile(); }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    const mm = (e: MouseEvent) => { if (isMobile.current) return; mouseInside.current = true; const r = viewport.getBoundingClientRect(); lerpTarget.current = -getMax() * Math.max(0, Math.min(1, (e.clientX - r.left) / Math.max(1, r.width))); };
    const me = () => { mouseInside.current = true; }; const ml = () => { mouseInside.current = false; };
    const ih = (e: Event) => { if (isMobile.current) return; const it = (e.target as HTMLElement).closest(".carousel-item") as HTMLElement; if (!it) return; it.classList.add("is-hovered"); track.classList.add("has-hover"); it.style.setProperty("--scale", String(C.HOVER_SCALE)); };
    const il = (e: Event) => { const it = (e.target as HTMLElement).closest(".carousel-item") as HTMLElement; if (!it) return; it.classList.remove("is-hovered"); track.classList.remove("has-hover"); it.style.setProperty("--scale", "1"); };
    viewport.addEventListener("mousemove", mm); viewport.addEventListener("mouseenter", me); viewport.addEventListener("mouseleave", ml);
    track.addEventListener("mouseenter", ih, true); track.addEventListener("mouseleave", il, true);
    const onR = () => { lerpCurrent.current = clamp(lerpCurrent.current); lerpTarget.current = clamp(lerpTarget.current); };
    const onM = (e: MediaQueryListEvent) => { isMobile.current = e.matches; if (!isMobile.current) { lerpTarget.current = clamp(lerpTarget.current); lerpCurrent.current = clamp(lerpCurrent.current); } };
    mql.addEventListener("change", onM); window.addEventListener("resize", onR);
    return () => { cancelAnimationFrame(rafRef.current); viewport.removeEventListener("mousemove", mm); viewport.removeEventListener("mouseenter", me); viewport.removeEventListener("mouseleave", ml); track.removeEventListener("mouseenter", ih, true); track.removeEventListener("mouseleave", il, true); mql.removeEventListener("change", onM); window.removeEventListener("resize", onR); };
  }, []);
  return (
    <>
      <div ref={viewportRef} className="carousel-viewport" style={{ width: "100%", height: "30vh", minHeight: 240, overflowX: "clip", overflowY: "visible", position: "relative", display: "flex", alignItems: "center" }}>
        <div ref={trackRef} style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", alignItems: "center", height: "100%", flexShrink: 0, minWidth: "max-content", willChange: "transform", padding: "0 40px", gap: 0 }}>
          {PROJECTS.map((p, i) => (
            <a key={i} ref={(el) => registerItem(el, i)} className="carousel-item" href={`/projects/${p.title.toLowerCase().replace(/\s+/g, "-")}`} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", flexShrink: 0, width: "calc(18vw * var(--scale, 1))", padding: "0 8px", color: "inherit", textDecoration: "none", transition: "width 600ms cubic-bezier(0,0.4,0.6,1)" }}>
              <div style={{ width: "100%", aspectRatio: "16/10", borderRadius: 14, border: "1px solid rgba(246,232,234,0.10)", overflow: "hidden", background: "rgba(246,232,234,0.02)" }}>
                <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }} />
              </div>
              <div className="carousel-caption" style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 2, width: "100%"}}>
                <span className="cap-title" style={{ fontSize: "clamp(13px,1.05vw,16px)", color: "#f1eee7" }}>{p.title}</span>
                <span className="cap-sub" style={{ fontSize: "clamp(10px,0.85vw,13px)", color: "rgba(246,232,234,0.55)", textTransform: "uppercase", letterSpacing: "0.12em" }}>{p.sub}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div style={{ display: "none" }} className="mobile-caption">
        <span ref={titleRef} style={{ display: "block", fontSize: 15, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2, color: "#f1eee7" }} />
        <span ref={subtitleRef} style={{ display: "block", fontSize: 11, marginTop: 4, lineHeight: 1.35, opacity: 0.92, color: "rgba(246,232,234,0.7)" }} />
      </div>
    </>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const svg = svgRef.current;
    const carouselWrap = carouselWrapperRef.current;
    if (!section || !svg || !carouselWrap) return;
    const gsapCtx = gsap.context(() => {
      const letters = [...svg.querySelectorAll("path")];
      if (!letters.length) return;
      const count = letters.length;
      const center = (count - 1) / 2;
      const scrollTl = gsap.timeline({ paused: true });
      scrollTl.to(letters, { y: -900, x: (i: number) => (i - center) * 55, rotationZ: (i: number) => (i - center) * 2.5, stagger: { each: 0.09, from: "start" }, ease: "power3.in", duration: 1 });
      const startYMult = window.innerWidth < 768 ? 0.38 : 0.52;
      const startY = -(window.innerHeight * startYMult);
      gsap.set(letters, { y: startY, x: (i: number) => (i - center) * 22, rotationZ: (i: number) => (i - center) * 2 });
      gsap.set(carouselWrap, { opacity: 0 });
      let entranceDone = false;
      const entrance = gsap.timeline({ onComplete: () => { entranceDone = true; } });
      entrance.to(letters, { y: 0, x: 0, rotationZ: 0, stagger: { each: 0.08, from: "start" }, ease: "power4.out", duration: 1.05, delay: 0.15 });
      const carouselItems = carouselWrap.querySelectorAll(".carousel-item");
      gsap.set(carouselItems, { y: 20, opacity: 0 });
      entrance.to(carouselWrap, { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4");
      entrance.to(carouselItems, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.06 }, "-=0.3");
      ScrollTrigger.create({ trigger: section, start: "top top", end: "bottom top", scrub: 0.45, onUpdate: (self) => { if (!entranceDone) return; const p = self.progress; scrollTl.progress(p); if (window.innerWidth >= 768) { gsap.set(carouselWrap, { opacity: Math.max(0, 1 - p * 2.5) }); } } });
    });
    ctxRef.current = gsapCtx;
    return () => gsapCtx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ position: "relative", width: "100%", minHeight: "100dvh", overflow: "hidden", display: "flex", flexDirection: "column", background: "#141412", color: "#f1eee7" }}>
      <div ref={carouselWrapperRef} className="hero-carousel-wrap" style={{ flex: "1 1 auto", minHeight: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "env(safe-area-inset-bottom, 0px)", paddingTop: "clamp(6rem, 10vh, 10rem)" }}>
        <Carousel />
      </div>
      <p className="hero-tagline" style={{ padding: "0rem 6rem", color: "var(--text-soft, #b8b1a6)", fontSize: "clamp(1rem, 1.4vw, 1.2rem)", fontWeight: 420, letterSpacing: "-0.01em", lineHeight: 1.5, textAlign: "right", opacity: 0.7 }}>
        I build for people who care deeply about what they make.
      </p>
      <div className="hero-wordmark" style={{ width: "100vw", marginLeft: "calc(50% - 50vw)", flexShrink: 0, overflow: "visible" }}>
        <svg ref={svgRef} width="1380" height="374" viewBox="0 0 1380 374" fill="none" style={{ display: "block", width: "100%", height: "auto" }}>
          <path fill="#f1eee7" d="M0 139.131C0 125.257 2.64839 112.24 7.94517 100.081C13.242 87.9217 20.4082 77.3212 29.4439 68.2796C38.6353 59.0821 49.3068 51.8333 61.4582 46.533C73.6097 41.2328 86.6179 38.5826 100.483 38.5826H254.245V105.693H100.483C95.8094 105.693 91.4474 106.551 87.3969 108.265C83.3464 109.98 79.7633 112.396 76.6475 115.514C73.6876 118.476 71.3508 121.984 69.6371 126.037C67.9234 130.09 67.0666 134.455 67.0666 139.131C67.0666 143.808 67.9234 148.251 69.6371 152.46C71.3508 156.513 73.6876 160.099 76.6475 163.216C79.7633 166.178 83.3464 168.517 87.3969 170.231C91.4474 171.946 95.8094 172.804 100.483 172.804H167.55C181.415 172.804 194.423 175.454 206.574 180.754C218.882 185.898 229.553 193.069 238.589 202.267C247.78 211.308 254.947 221.987 260.088 234.302C265.384 246.461 268.033 259.478 268.033 273.352C268.033 287.227 265.384 300.243 260.088 312.403C254.947 324.562 247.78 335.241 238.589 344.438C229.553 353.48 218.882 360.651 206.574 365.951C194.423 371.251 181.415 373.901 167.55 373.901H18.6945V306.791H167.55C172.223 306.791 176.585 305.933 180.636 304.219C184.686 302.504 188.191 300.165 191.151 297.204C194.267 294.086 196.682 290.5 198.396 286.447C200.109 282.394 200.966 278.029 200.966 273.352C200.966 268.676 200.109 264.311 198.396 260.258C196.682 256.205 194.267 252.697 191.151 249.735C188.191 246.617 184.686 244.201 180.636 242.486C176.585 240.771 172.223 239.914 167.55 239.914H100.483C86.6179 239.914 73.6097 237.264 61.4582 231.964C49.3068 226.663 38.6353 219.493 29.4439 210.451C20.4082 201.253 13.242 190.575 7.94517 178.416C2.64839 166.1 0 153.006 0 139.131Z" />
          <path fill="#f1eee7" d="M366.794 55.4188C366.794 61.3426 365.625 66.8767 363.289 72.021C361.108 77.1654 358.07 81.6862 354.175 85.5834C350.28 89.3248 345.685 92.3646 340.388 94.703C335.247 96.8854 329.716 97.9766 323.796 97.9766C317.876 97.9766 312.268 96.8854 306.971 94.703C301.83 92.3646 297.312 89.3248 293.418 85.5834C289.679 81.6862 286.641 77.1654 284.304 72.021C282.123 66.8767 281.033 61.3426 281.033 55.4188C281.033 49.6509 282.123 44.1947 284.304 39.0504C286.641 33.7501 289.679 29.2293 293.418 25.488C297.312 21.5907 301.83 18.5509 306.971 16.3684C312.268 14.0301 317.876 12.8609 323.796 12.8609C329.716 12.8609 335.247 14.0301 340.388 16.3684C345.685 18.5509 350.28 21.5907 354.175 25.488C358.07 29.2293 361.108 33.7501 363.289 39.0504C365.625 44.1947 366.794 49.6509 366.794 55.4188ZM355.811 373.901H291.548V123.465H355.811V373.901Z" />
          <path fill="#f1eee7" d="M474.668 373.901H410.873V187.068H379.794V123.465H410.873V111.539C410.873 96.106 413.756 81.6082 419.52 68.0458C425.44 54.4834 433.463 42.7138 443.589 32.7368C453.871 22.604 465.789 14.6536 479.342 8.88571C492.896 2.9619 507.384 0 522.807 0H570.712V63.603H522.807C515.952 63.603 509.565 64.8501 503.645 67.3443C497.881 69.6827 492.818 73.0343 488.456 77.3992C484.249 81.6082 480.9 86.6746 478.407 92.5984C475.915 98.3664 474.668 104.68 474.668 111.539V123.465H552.952V187.068H474.668V373.901Z" />
          <path fill="#f1eee7" d="M726.725 373.901C711.302 373.901 696.813 371.017 683.26 365.249C669.706 359.326 657.789 351.297 647.507 341.164C637.38 330.876 629.357 318.95 623.437 305.388C617.673 291.825 614.791 277.328 614.791 261.895V187.535H583.712V123.932H614.791V23.8511H678.353V123.932H775.097V187.535H678.353V261.895C678.353 268.598 679.599 274.911 682.091 280.835C684.584 286.603 688.011 291.669 692.373 296.034C696.735 300.399 701.876 303.907 707.796 306.557C713.716 309.051 720.026 310.298 726.725 310.298H775.097V373.901H726.725Z" />
          <path fill="#f1eee7" d="M873.858 55.4188C873.858 61.3426 872.689 66.8767 870.353 72.021C868.172 77.1654 865.134 81.6862 861.239 85.5834C857.344 89.3248 852.749 92.3646 847.452 94.703C842.311 96.8854 836.78 97.9766 830.86 97.9766C824.94 97.9766 819.332 96.8854 814.035 94.703C808.894 92.3646 804.376 89.3248 800.482 85.5834C796.743 81.6862 793.705 77.1654 791.368 72.021C789.187 66.8767 788.097 61.3426 788.097 55.4188C788.097 49.6509 789.187 44.1947 791.368 39.0504C793.705 33.7501 796.743 29.2293 800.482 25.488C804.376 21.5907 808.894 18.5509 814.035 16.3684C819.332 14.0301 824.94 12.8609 830.86 12.8609C836.78 12.8609 842.311 14.0301 847.452 16.3684C852.749 18.5509 857.344 21.5907 861.239 25.488C865.134 29.2293 868.172 33.7501 870.353 39.0504C872.689 44.1947 873.858 49.6509 873.858 55.4188ZM862.875 373.901H798.612V123.465H862.875V373.901Z" />
          <path fill="#f1eee7" d="M1142.51 241.785C1142.51 260.492 1139.16 277.951 1132.46 294.164C1125.76 310.22 1116.64 324.173 1105.12 336.02C1093.59 347.712 1080.03 356.987 1064.46 363.846C1049.03 370.55 1032.44 373.901 1014.68 373.901C997.078 373.901 980.486 370.55 964.907 363.846C949.484 356.987 935.931 347.712 924.247 336.02C912.719 324.173 903.605 310.22 896.906 294.164C890.207 277.951 886.858 260.492 886.858 241.785C886.858 222.766 890.207 205.151 896.906 188.938C903.605 172.726 912.719 158.774 924.247 147.082C935.931 135.234 949.484 125.959 964.907 119.256C980.486 112.552 997.078 109.201 1014.68 109.201C1032.44 109.201 1049.03 112.396 1064.46 118.788C1080.03 125.023 1093.59 133.987 1105.12 145.679C1116.64 157.215 1125.76 171.167 1132.46 187.535C1139.16 203.748 1142.51 221.831 1142.51 241.785ZM1078.24 241.785C1078.24 231.496 1076.53 222.221 1073.1 213.959C1069.83 205.54 1065.31 198.37 1059.55 192.446C1053.78 186.366 1047.01 181.767 1039.22 178.65C1031.58 175.376 1023.41 173.739 1014.68 173.739C1005.96 173.739 997.701 175.376 989.911 178.65C982.278 181.767 975.579 186.366 969.815 192.446C964.206 198.37 959.766 205.54 956.495 213.959C953.223 222.221 951.588 231.496 951.588 241.785C951.588 251.45 953.223 260.414 956.495 268.676C959.766 276.938 964.206 284.109 969.815 290.189C975.579 296.268 982.278 301.101 989.911 304.686C997.701 308.116 1005.96 309.831 1014.68 309.831C1023.41 309.831 1031.58 308.194 1039.22 304.92C1047.01 301.646 1053.78 297.048 1059.55 291.124C1065.31 285.2 1069.83 278.029 1073.1 269.611C1076.53 261.193 1078.24 251.918 1078.24 241.785Z" />
          <path fill="#f1eee7" d="M1219.3 373.901H1155.51V123.465H1170.93L1191.96 147.783C1202.24 138.43 1213.85 131.259 1226.78 126.271C1239.86 121.126 1253.5 118.554 1267.67 118.554C1282.94 118.554 1297.35 121.516 1310.9 127.44C1324.46 133.208 1336.3 141.236 1346.42 151.525C1356.55 161.658 1364.49 173.583 1370.26 187.301C1376.18 200.864 1379.14 215.362 1379.14 230.795V373.901H1315.34V230.795C1315.34 224.247 1314.1 218.09 1311.6 212.322C1309.11 206.398 1305.68 201.254 1301.32 196.889C1296.96 192.524 1291.9 189.094 1286.13 186.6C1280.37 184.106 1274.22 182.859 1267.67 182.859C1260.97 182.859 1254.66 184.106 1248.74 186.6C1242.82 189.094 1237.68 192.524 1233.32 196.889C1228.96 201.254 1225.53 206.398 1223.04 212.322C1220.55 218.09 1219.3 224.247 1219.3 230.795V373.901Z" />
        </svg>
      </div>
    </section>
  );
}
