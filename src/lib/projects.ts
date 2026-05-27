export interface ProjectData {
  slug: string; title: string; role: string; year: string; client?: string; url?: string;
  description: string; challenge: string; approach: string; outcome: string;
  stack: string[];
  testimonial?: { quote: string; attribution: string };
  heroImage: string;
  screenshots: { type: "laptop" | "phone"; src: string; caption?: string }[];
  highlights?: string[];
  metrics?: { value: string; label: string }[];
}

export const projects: ProjectData[] = [
  {
    slug: "j-worra",
    title: "J. Worra",
    role: "Artist Website / Webflow to Next.js",
    year: "2024-2026",
    url: "https://www.jworra.com/",
    description:
      "Full artist website redesign and development for J. Worra, evolving the site from a plain legacy presence to a Webflow direction and finally a custom Next.js experience built around music, tour dates, social links, and booking access.",
    challenge: `The project was not just to make the site look better. The real challenge was to move J. Worra's web presence out of a generic artist-site format and into something that felt more current, more direct, and more aligned with the artist's music and live presence.

The site needed to serve multiple audiences at once:

- Fans looking for music, tour dates, and social links
- Booking teams looking for the right contact path
- Management and industry contacts looking for credibility and quick information
- Press or partners looking for a clear read on the artist's world`,
    approach: `I treated the redesign as an artist-platform evolution rather than a single-page reskin.

The structure was reduced to the essentials: upcoming dates, music, artist context, contact, and social/streaming access. The visual system moved toward dark atmosphere, large identity moments, high-contrast interface elements, and a more performance-minded front end.

The Webflow version helped define the brand and layout direction. The Next.js version gave the final site more control, speed, flexibility, and polish.`,
    outcome: `The current J. Worra site is a stronger central hub for the artist. It keeps the essential information accessible while giving the brand a more distinctive digital presence.

The redesign creates a clear progression from a plain legacy site to a custom-built artist experience: more atmospheric, more usable, and more aligned with a modern touring DJ and producer.`,
    stack: ["Webflow", "Next.js", "React", "Motion Systems", "Responsive Design"],
    highlights: [
      "Fully redesigned the artist website from the legacy version",
      "Built an intermediate Webflow version to establish the new direction",
      "Developed the current custom Next.js site",
      "Reworked the site hierarchy around dates, music, artist identity, and contact",
      "Created a darker, more immersive visual direction",
      "Improved access to streaming links, tour dates, management, and booking contacts",
      "Built a responsive experience for fans and industry visitors",
    ],
    heroImage: "/assets/previews/j-worra/desktop-1440x900.png",
    screenshots: [
      { type: "laptop", src: "/assets/previews/j-worra/desktop-1440x900.png", caption: "Homepage — Full desktop view" },
      { type: "phone", src: "/assets/previews/j-worra/mobile-390x844.png", caption: "Mobile — Hero section" },
    ],
  },
  {
    slug: "l-affaire-musicale",
    title: "L'Affaire Musicale",
    role: "Brand Identity / Website Refresh",
    year: "2026",
    url: "https://www.laffairemusicale.com/",
    description:
      "Full brand and website refresh for L'Affaire Musicale, including logo design, visual identity, creative direction, and a redesigned digital presence for the dance music management company.",
    challenge: `The previous site had useful information, but the brand felt dated and visually underpowered. It did not reflect the agency's taste, roster, relationships, or position inside the dance music world.

The company needed to move away from an older events-page feeling and toward something that looked like a serious management house: clearer, more premium, more intentional, and easier to understand at a glance.`,
    approach: `The refresh uses a restrained editorial system: a redesigned wordmark, warm neutral palette, large serif typography, disciplined spacing, and a cleaner page structure.

The site was reorganized around the signals that matter most for a management company:

- What L'Affaire Musicale does
- Who the roster includes
- What areas the company works across
- Who leads the company
- How artists, partners, and industry contacts can reach out

The brand direction balances polish with music-industry edge. It needed to feel elevated without becoming sterile, and stylish without hiding the actual business information.`,
    outcome: `The refreshed site now gives L'Affaire Musicale a stronger first impression and a clearer business presence. It presents the agency as a modern management company rather than a dated event brand.

The new identity can extend beyond the website into roster materials, pitch decks, social assets, booking conversations, and future brand collateral.`,
    stack: ["Web Design", "Brand Identity", "Typography", "Creative Direction"],
    highlights: [
      "Redesigned the L'Affaire Musicale logo",
      "Created a refreshed visual identity for the agency",
      "Established typography, color, spacing, and layout direction",
      "Reworked the website around roster, services, leadership, and inquiries",
      "Clarified the agency's management, booking, branding, and artist-development positioning",
      "Created a more premium digital presence for the company and its artists",
    ],
    heroImage: "/assets/previews/l-affaire-musicale/screenshot-1.webp",
    screenshots: [
      { type: "laptop", src: "/assets/previews/l-affaire-musicale/screenshot-1.webp", caption: "Homepage with refreshed brand identity" },
    ],
  },
  {
    slug: "sam-blacky",
    title: "Sam Blacky",
    role: "Artist Website / Creative Direction",
    year: "2026",
    url: "https://samblacky.com/",
    description:
      "Artist website refresh for Sam Blacky, focused on stronger visual identity, music-forward structure, bolder photography, and clearer paths for fans, brands, press, and booking contacts.",
    challenge: `The existing site had the right basic information, but it felt static and dated. The design leaned more toward a simple press page than a living artist world.

Sam's brand sits across dance music, travel, fashion, nightlife, and global club culture. The website needed to carry more of that energy without making the core actions harder to find: listen, learn, contact, and explore brand/music work.`,
    approach: `The redesign uses a louder, sharper visual system built around Sam's existing identity: bold black-and-white logo treatment, vivid purple artist photography, electric pink motion language, oversized type, and a simpler page flow.

The site structure was reorganized around the content people actually look for on an artist site:

- Music and releases
- Artist story
- Brand presence
- Contact and management inquiries

The direction intentionally feels less corporate and more direct. It gives the site more personality while keeping the page useful for industry visitors.`,
    outcome: `The refreshed direction makes Sam Blacky's digital presence feel more current, more energetic, and more connected to her world as a DJ and producer.

It turns the site from a basic information page into a stronger artist showcase that can support releases, bookings, brand conversations, and fan discovery.`,
    stack: ["Web Design", "Creative Direction", "Artist Website", "Responsive Design"],
    highlights: [
      "Refreshed the website direction for Sam Blacky's artist brand",
      "Created a bolder visual system around photography, contrast, and music energy",
      "Reworked the page hierarchy around music, about, brands, and contact",
      "Gave the site a more direct artist-first presence",
      "Created a stronger showcase for releases and visual identity",
      "Clarified contact access for management and booking conversations",
    ],
    heroImage: "/assets/previews/sam-blacky/screenshot-1.webp",
    screenshots: [
      { type: "laptop", src: "/assets/previews/sam-blacky/screenshot-1.webp", caption: "Homepage with bold visual identity" },
      { type: "phone", src: "/assets/previews/sam-blacky/screenshot-2.webp", caption: "Mobile — Artist showcase" },
      { type: "laptop", src: "/assets/previews/sam-blacky/screenshot-3.webp", caption: "Music and releases section" },
    ],
  },
  {
    slug: "clipkeep",
    title: "ClipKeep",
    role: "Full-Stack Product",
    year: "2025",
    url: "https://clipkeep.vercel.app",
    description:
      "Clipboard manager designed around fast capture, search, and reuse. Built as a lean PWA with a keyboard-first interface and minimal overhead.",
    challenge:
      "Clipboard managers were either too complex or too limited. Users needed something that just worked — save, search, paste — without the bloat.",
    approach:
      "Focused on the core loop: copy → auto-save → search → paste. Everything else was cut. PWA-first, under 50KB initial load, zero dependencies beyond React.",
    outcome:
      "Ships as a PWA. Used daily by early testers. The simplicity became the feature — people chose it specifically because it does less.",
    stack: ["React", "TypeScript", "Tailwind"],
    highlights: [
      "PWA with offline clipboard storage",
      "Full-text search across clipboard history",
      "Keyboard-first interface with zero-mouse workflow",
      "Under 50KB initial JS payload",
    ],
    heroImage: "/assets/previews/clipkeep/screenshot-1.webp",
    screenshots: [{ type: "laptop", src: "/assets/previews/clipkeep/screenshot-1.webp", caption: "Clipboard history with full-text search" }],
  },
  {
    slug: "qlo-agency",
    title: "QLO Agency",
    role: "Webflow Development",
    year: "2024",
    description:
      "Custom Webflow development for agency-led client projects, including component systems, CMS collections, custom interactions, and editing guardrails.",
    challenge:
      "Agency clients needed sites they could edit themselves without breaking design integrity.",
    approach:
      "Built modular Webflow component libraries with reusable CMS collections. Custom interactions where CMS couldn't reach.",
    outcome:
      "Multiple client sites shipped. Clients edit content independently. Designer still controls the system.",
    stack: ["Webflow", "JavaScript", "CSS"],
    highlights: [
      "Reusable component library in Webflow CMS",
      "Custom interaction logic where CMS falls short",
      "Client editing guardrails to protect design system",
      "3rd-party API integrations for dynamic content",
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
