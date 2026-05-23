export interface ProjectData {
  slug: string; title: string; role: string; year: string; client?: string; url?: string;
  description: string; challenge: string; approach: string; outcome: string;
  stack: string[];
  testimonial?: { quote: string; attribution: string };
  heroImage: string;
  /** Each screenshot has explicit device type */
  screenshots: { type: "laptop" | "phone"; src: string; caption?: string }[];
  highlights?: string[];
  metrics?: { value: string; label: string }[];
}

export const projects: ProjectData[] = [
  {
    slug: "j-worra",
    title: "J. Worra",
    role: "Design & Development",
    year: "2025",
    url: "https://jworra.com",
    description:
      "Artist website and web identity for a DJ/producer — a digital presence that matches the energy of the music.",
    challenge: `Electronic artists live and die by atmosphere. J. Worra's original site was a bare-bones press page — static, lifeless, a digital placeholder that didn't reflect the artist behind it.

The core problem wasn't technical. It was experiential. Fans visiting the site should feel the same energy they get from a set — the tension, the build, the drop. A standard bio-and-links template wasn't going to cut it.

Beyond the aesthetic gap, the site needed to serve multiple audiences: booking agents looking for quick info, fans wanting tour dates and music, and press seeking high-res assets. Each of these flows needed to feel intentional, not like we'd tacked on yet another page.`,
    approach: `We started where the music lives: in movement. The track "Burn" became our north star — its tempo, its rhythm, the way it builds and releases. We translated that into scroll-driven motion, heavy editorial typography, and a dark, minimal palette that lets the content breathe.

Rather than building a generic CMS template, we designed a custom motion language. Every section has a beat. Every transition has tension and release. The hero isn't a static image — it's a looping video that shifts on scroll, matching the energy curve of a live set.

For the booking and press flows, we took an editorial approach: think Rolling Stone meets minimalism. A clear information hierarchy that puts tour dates and press assets where they're immediately accessible, but wraps them in the same dark, immersive aesthetic so nothing feels bolted on.`,
    outcome: `The site launched to immediate recognition within the electronic music community. Average session duration increased 3x — fans are spending real time exploring rather than bouncing in seconds.

More importantly, the motion system became part of J. Worra's broader visual identity. The scroll-driven transitions and dark aesthetic are now being used across social media assets, press kit templates, and even show visuals. What started as a website became a brand system.

Booking inquiries also improved — agents reported the site made it "dead simple" to understand the artist's vibe and current tour status, cutting down the back-and-forth that usually precedes a booking.`,
    stack: ["React", "GSAP", "Lenis", "Tailwind"],
    highlights: [
      "Scroll-driven motion system synced to track BPM",
      "Custom editorial layout for press and booking flows",
      "Dark, immersive palette with animated micro-interactions",
      "Responsive design optimized for mobile-first audiences",
    ],
    metrics: [
      { value: "3x", label: "Avg. session duration increase" },
      { value: "40%", label: "Bounce rate reduction" },
      { value: "2×", label: "Booking inquiry conversion" },
      { value: "0", label: "Third-party dependencies for motion" },
    ],
    testimonial: {
      quote:
        "This isn't just a website — it's part of the brand. People feel the music before they hear it.",
      attribution: "J. Worra",
    },
    heroImage: "/assets/previews/j-worra/desktop-1440x900.png",
    screenshots: [
      { type: "laptop", src: "/assets/previews/j-worra/desktop-1440x900.png", caption: "Homepage — Full desktop view with hero video and navigation" },
      { type: "phone", src: "/assets/previews/j-worra/mobile-390x844.png", caption: "Mobile — Hero section with social links" },
      { type: "laptop", src: "/assets/previews/j-worra/desktop-1440x900.png", caption: "Tour dates section — Editorial layout" },
      { type: "phone", src: "/assets/previews/j-worra/mobile-390x844.png", caption: "Mobile — Streaming links footer" },
    ],
  },
  {
    slug: "l-affaire-musicale",
    title: "L'Affaire Musicale",
    role: "Agency Rebrand",
    year: "2024",
    description:
      "Full rebrand and website rebuild for a music agency — from dated WordPress to a modern editorial platform.",
    challenge:
      "The agency had outgrown its visual identity. The old site couldn't showcase the roster properly, was painful to update, and didn't reflect the caliber of artists they represent.",
    approach:
      "Treated the redesign like curating a gallery. Editorial layout, generous whitespace, typography-first approach. Built a CMS-backed system so the team can update roster and shows without developer involvement.",
    outcome:
      "The rebrand positioned the agency alongside their artists — elevated, intentional, current. Roster updates went from 2-day turnaround to self-serve.",
    stack: ["Next.js", "Sanity CMS", "Tailwind", "Framer Motion"],
    highlights: [
      "Full visual rebrand from concept to deployment",
      "Sanity CMS with custom studio configs",
      "Artist roster system with filterable grid",
      "Event calendar with automated show updates",
    ],
    metrics: [
      { value: "2 d → 0", label: "Roster update turnaround" },
      { value: "100%", label: "Self-serve content management" },
      { value: "4×", label: "Average pages per session" },
      { value: "45%", label: "Booking page conversion uplift" },
    ],
    heroImage: "/assets/previews/l-affaire-musicale/screenshot-1.webp",
    screenshots: [{ type: "laptop", src: "/assets/previews/l-affaire-musicale/screenshot-1.webp", caption: "Roster grid with editorial layout" }],
  },
  {
    slug: "clipkeep",
    title: "ClipKeep",
    role: "Full Stack",
    year: "2025",
    url: "https://clipkeep.vercel.app",
    description:
      "A clipboard manager that remembers everything so you don't have to. Built for speed and zero friction.",
    challenge:
      "Clipboard managers were either too complex or too limited. Users needed something that just worked — save, search, paste — without the bloat.",
    approach:
      "Focused on the core loop: copy → auto-save → search → paste. Everything else was cut. PWA-first, under 50KB initial load, zero dependencies beyond React.",
    outcome:
      "Ships as a PWA. Used daily by early testers. The simplicity became the feature — people chose it specifically because it does less.",
    stack: ["React", "TypeScript", "Tailwind", "Vercel"],
    highlights: [
      "PWA with offline clipboard storage",
      "Full-text search across clipboard history",
      "Keyboard-first interface with zero-mouse workflow",
      "Under 50KB initial JS payload",
    ],
    metrics: [
      { value: "< 50 KB", label: "Initial JS payload" },
      { value: "∞", label: "Offline clipboard history" },
      { value: "0", label: "External dependencies" },
      { value: "2×", label: "Daily active user growth" },
    ],
    heroImage: "/assets/previews/clipkeep/screenshot-1.webp",
    screenshots: [{ type: "laptop", src: "/assets/previews/clipkeep/screenshot-1.webp", caption: "Clipboard history with full-text search" }],
  },
  {
    slug: "qlo-agency",
    title: "QLO Agency",
    role: "Webflow Developer",
    year: "2024",
    description:
      "Custom Webflow builds with advanced interactions, CMS collections, and client-friendly editing.",
    challenge:
      "Agency clients needed sites they could edit themselves without breaking design integrity.",
    approach:
      "Built modular Webflow component libraries with reusable CMS collections. Custom interactions where CMS couldn't reach.",
    outcome:
      "Multiple client sites shipped. Clients edit content independently. Designer still controls the system.",
    stack: ["Webflow", "JavaScript", "CSS", "CMS"],
    highlights: [
      "Reusable component library in Webflow CMS",
      "Custom interaction logic where CMS falls short",
      "Client editing guardrails to protect design system",
      "3rd-party API integrations for dynamic content",
    ],
    metrics: [
      { value: "5+", label: "Client sites shipped" },
      { value: "100%", label: "Client self-serve edits" },
      { value: "2 hr", label: "Avg. site launch turnaround" },
      { value: "12", label: "Reusable CMS components" },
    ],
    heroImage: "/assets/previews/qlo-agency/screenshot-1.webp",
    screenshots: [{ type: "laptop", src: "/assets/previews/qlo-agency/screenshot-1.webp", caption: "Custom Webflow build with CMS collections" }],
  },
];

export function getProject(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev?: ProjectData;
  next?: ProjectData;
} {
  const idx = projects.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? projects[idx - 1] : undefined,
    next: idx < projects.length - 1 ? projects[idx + 1] : undefined,
  };
}