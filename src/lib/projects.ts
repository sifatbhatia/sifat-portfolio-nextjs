export interface ProjectData {
  slug: string; title: string; role: string; year: string; client?: string; url?: string;
  description: string; summary?: string; challenge: string; approach: string; outcome: string;
  stack: string[];
  testimonial?: { quote: string; attribution: string };
  heroImage: string;
  screenshots: { type: "laptop" | "phone"; src: string; caption?: string }[];
  highlights?: string[];
  metrics?: { value: string; label: string }[];
}

export const projects: ProjectData[] = [
  {
    slug: "willcall",
    title: "Willcall",
    role: "Ticketing Product / Full-Stack Development",
    year: "2026",
    url: "https://willcall-three.vercel.app/",
    summary: "A ticket-drop product for live rooms, built around demand, clarity, and the rush of finding the right night.",
    description:
      "A ticket-drop product for rooms that sell out, designed around live demand, clear pricing, and the small rush of finding the right night before it disappears.",
    challenge: `Ticketing interfaces usually make the event do all the emotional work. The product around it becomes a dense checkout utility: dates, prices, buttons, and a lot of friction between finding a room and deciding to enter it.

Willcall needed to make the whole drop feel immediate without turning the interface into noise. Visitors should be able to scan what is live, understand the room and price quickly, and move toward a ticket with confidence. Organizers needed an equally direct path to launch a drop and reach the right audience.`,
    approach: `I treated Willcall as a live product surface rather than a directory of events.

The visual language uses oversized editorial type, tight metadata, strong image crops, and a restrained black-and-white foundation with warm red signals for live state and action. The hierarchy stays deliberately human: what is happening, where it is happening, when it is happening, and what it costs.

The product system is built around the drop as the central unit. Live inventory, demand, venue context, ticket actions, organizer entry points, and empty states all belong to the same visual grammar, so the interface still feels coherent when the content changes.`,
    outcome: `Willcall gives ticket discovery a stronger point of view. It feels closer to a considered cultural product than a generic event marketplace, while keeping the practical path to a ticket fast.

The result is a polished foundation for a product that can carry live drops, organizer workflows, and the social energy around rooms people actually want to be in.`,
    stack: ["Next.js", "React", "TypeScript", "Product Design", "Responsive Systems"],
    highlights: [
      "Designed a ticket-drop experience around live demand and fast decision-making",
      "Created a clear visual hierarchy for venue, date, capacity, price, and ticket action",
      "Built a flexible event surface for live drops, organizer entry points, and empty states",
      "Used editorial typography and image-led composition to give the product a distinct cultural voice",
      "Designed responsive layouts that preserve urgency and clarity across screen sizes",
    ],
    heroImage: "/assets/previews/willcall/grid-hero.webp",
    screenshots: [
      { type: "laptop", src: "/assets/previews/willcall/hero-drop.webp", caption: "Homepage hero and live ticket-drop entry point" },
      { type: "laptop", src: "/assets/previews/willcall/grid-hero.webp", caption: "Live drops grid with venue, date, price, and status metadata" },
      { type: "laptop", src: "/assets/previews/willcall/scan-success.webp", caption: "Ticket scan confirmation moment" },
      { type: "phone", src: "/assets/previews/willcall/empty-drops.webp", caption: "Responsive empty-state and discovery surface" },
    ],
  },
  {
    slug: "j-worra",
    title: "J. Worra",
    role: "Artist Website / Webflow to Next.js",
    year: "2024-2026",
    url: "https://www.jworra.com/",
    summary: "An artist platform that brings music, dates, social links, and the world around J. Worra into one direct experience.",
    description:
      "Artist website redesign and development for J. Worra, evolving the site from a plain legacy presence into a custom Next.js experience shaped around music, tour dates, social links, and the artist world visitors are trying to reach.",
    challenge: `The project was not just to make the site look better. The real challenge was to move J. Worra's web presence out of a generic artist-site format and into something that felt more current, more direct, and more aligned with the artist's music and live presence.

The site needed to serve multiple audiences at once:

- Fans looking for music, tour dates, and social links
- Booking teams looking for the right contact path
- Management and industry contacts looking for credibility and quick information
- Press or partners looking for a clear read on the artist's world`,
    approach: `I treated the redesign as an artist-platform evolution rather than a single-page reskin.

The structure was reduced to the essentials: upcoming dates, music, artist context, contact, and social/streaming access. The visual system moved toward dark atmosphere, large identity moments, high-contrast interface elements, and a more performance-minded front end.

The Webflow version helped define the brand and layout direction. The Next.js version gave the final site more control, speed, flexibility, and polish.`,
    outcome: `The current J. Worra site is a clearer meeting point for the artist. It keeps the essential information accessible while giving the brand a more distinctive atmosphere.

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
    heroImage: "/assets/previews/j-worra/rock-iphone-mockup.webp",
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
    summary: "A sharper identity and web presence for the people, artists, and relationships behind a dance music management company.",
    description:
      "Brand and website refresh for L'Affaire Musicale, including logo design, visual identity, creative direction, and a redesigned site for the people, artists, and relationships around the dance music management company.",
    challenge: `The previous site had useful information, but the brand felt dated and visually underpowered. It did not reflect the agency's taste, roster, relationships, or position inside the dance music world.

The company needed to move away from an older events-page feeling and toward something that felt like a serious management house: clearer, more intentional, and easier to understand at a glance.`,
    approach: `The refresh uses a restrained editorial system: a redesigned wordmark, warm neutral palette, large serif typography, disciplined spacing, and a cleaner page structure.

The site was reorganized around the signals that matter most for a management company:

- What L'Affaire Musicale does
- Who the roster includes
- What areas the company works across
- Who leads the company
- How artists, partners, and industry contacts can reach out

The brand direction balances restraint with music-industry edge. It needed to feel elevated without becoming sterile, and stylish without hiding the people and relationships behind the business.`,
    outcome: `The refreshed site now gives L'Affaire Musicale a stronger first impression and a clearer business presence. It presents the agency as a modern management company rather than a dated event brand.

The new identity can extend beyond the website into roster materials, pitch decks, social assets, booking conversations, and future brand collateral.`,
    stack: ["Web Design", "Brand Identity", "Typography", "Creative Direction"],
    highlights: [
      "Redesigned the L'Affaire Musicale logo",
      "Created a refreshed visual identity for the agency",
      "Established typography, color, spacing, and layout direction",
      "Reworked the website around roster, services, leadership, and inquiries",
      "Clarified the agency's management, booking, branding, and artist-development positioning",
      "Created a clearer, more recognizable web presence for the company and its artists",
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
    summary: "A louder artist website direction built around music, photography, travel, fashion, and the energy around Sam Blacky.",
    description:
      "Artist website refresh for Sam Blacky, focused on stronger visual identity, music-forward structure, bolder photography, and clearer paths for fans, brands, press, and booking contacts to meet the world around the artist.",
    challenge: `The existing site had the right basic information, but it felt static and dated. The design leaned more toward a simple press page than a living artist world.

Sam's brand sits across dance music, travel, fashion, nightlife, and global club culture. The website needed to carry more of that energy without making the core actions harder to find: listen, learn, contact, and explore brand/music work.`,
    approach: `The redesign uses a louder, sharper visual system built around Sam's existing identity: bold black-and-white logo treatment, vivid purple artist photography, electric pink motion language, oversized type, and a simpler page flow.

The site structure was reorganized around the content people actually look for on an artist site:

- Music and releases
- Artist story
- Brand world
- Contact and management inquiries

The direction intentionally feels less corporate and more direct. It gives the site more personality while keeping the page useful for industry visitors.`,
    outcome: `The refreshed direction makes Sam Blacky's site feel more current, more energetic, and more connected to her world as a DJ and producer.

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
    role: "Product Design / Full-Stack Development",
    year: "2024-2026",
    summary: "A local-first clip vault that turns scattered social saves into a calm, searchable personal library.",
    url: "https://clipkeep.vercel.app",
    description:
      "A local-first clip vault for saving, organizing, and revisiting social media content from TikTok, Instagram Reels, and YouTube. ClipKeep turns scattered links into a calm personal library with collections, favorites, metadata previews, search, optional encrypted sync, and experimental AI summaries.",
    challenge: `Saving social content is easy, but finding it again is hard. Useful or entertaining clips get scattered across native save folders, chats, notes, browser tabs, and platform-specific libraries with limited search.

The harder problem was platform messiness. Instagram Reels, TikTok, and YouTube links behave inconsistently across mobile share URLs, redirects, tracking parameters, short links, and unreliable metadata sources. ClipKeep needed to make capture feel simple even when the incoming URLs were not.`,
    approach: `The product is designed as a quiet personal archive rather than a loud social app. The interface uses soft surfaces, restrained motion, clear spacing, and mobile-first navigation so saving and browsing clips feels lightweight and almost native.

The core flow is local-first: clips and collections are stored locally by default so the app stays fast and usable without login friction. Users can organize clips into collections, mark favorites, search their vault, and capture metadata from TikTok, Instagram, and YouTube.

On the technical side, I treated capture as a resilient pipeline: normalize the URL, clean tracking parameters, preserve platform semantics, resolve short links where possible, fetch metadata, and fallback gracefully. Optional Supabase sync stores encrypted vault snapshots instead of plaintext user content, and AI summaries are clearly marked experimental with a local fallback when the model is unavailable.`,
    outcome: `ClipKeep now feels more like a complete product: new visitors land on a proper home page, returning users enter the app directly, mobile buttons behave correctly, social capture is more robust, cloud sync is safer, and AI summaries are framed as an enhancement rather than a dependency.

The project reinforced that social URLs are moving targets, not clean APIs. The strongest user experience came from making the save flow resilient: normalize, resolve, fetch metadata, fallback gracefully, and never let one platform failure prevent the user from saving a clip.`,
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "NVIDIA AI API"],
    highlights: [
      "Built a local-first vault for TikTok, Instagram Reels, and YouTube links",
      "Added collections, favorites, search, metadata previews, and returning-user routing",
      "Parsed messy mobile share links, cleaned tracking parameters, and resolved short links where possible",
      "Preserved YouTube Shorts semantics while still supporting oEmbed metadata",
      "Shifted cloud sync toward encrypted Supabase vault snapshots instead of plaintext user content",
      "Added experimental NVIDIA AI summaries with a local fallback when AI is unavailable",
      "Improved the mobile landing experience so new visitors see the product story and returning users go directly into the app",
      "Designed future paths for share-sheet capture, duplicate detection, collection filters, sync status, and transcript-aware summaries",
    ],
    metrics: [
      { value: "3", label: "Social platforms parsed" },
      { value: "Local", label: "Default storage model" },
      { value: "Encrypted", label: "Optional sync snapshots" },
    ],
    heroImage: "/assets/previews/clipkeep/screenshot-1.webp",
    screenshots: [
      { type: "laptop", src: "/assets/previews/clipkeep/screenshot-1.webp", caption: "Clip vault home and saved-link library" },
      { type: "laptop", src: "/assets/previews/clipkeep/screenshot-2.webp", caption: "Clip organization, metadata, and browsing interface" },
    ],
  },
  {
    slug: "aer",
    title: "Aer",
    role: "Weather App / Front-End System",
    year: "2026",
    url: "https://aer-psi.vercel.app/",
    summary: "A weather interface that translates live conditions into atmosphere through color, motion, and a quiet utility-first system.",
    description:
      "A minimal real-time weather app that lets the interface meet the weather itself: Open-Meteo conditions, hourly data, a 7-day forecast, adaptive gradients, and embeddable widgets shaped around temperature and system preference.",
    challenge: `Most weather apps treat conditions as information placed inside a generic shell. Aer started from a different question: what if the interface changed because the weather changed?

The app needed to stay quiet and immediate while carrying several layers of utility: city search, current conditions, hourly weather, a weekly forecast, temperature unit switching, dark-mode adaptation, text-to-speech output, and embeddable widget states.`,
    approach: `The core design decision was to make the weather visible before a user reads a number. Warm days move toward amber; cold mornings move toward deep blue. The gradients are not decoration. They are data translated into atmosphere.

Glassmorphism cards sit over the gradient to create depth without clutter. Typography stays sparse, with the temperature treated as the hero interaction: tap it to switch between Fahrenheit and Celsius.

On the engineering side, the app uses Open-Meteo without an API key, AbortController-cancelled debounce for city search, system-aware dark mode, and an ElevenLabs text-to-speech forecast routed through a Supabase Edge Function. The implementation was also hardened through dependency trimming, dead-code removal, extracted utility functions, loading skeletons, and unit tests around the parts most likely to drift.`,
    outcome: `Aer became a small, coherent weather system rather than a generic forecast page. It gives visitors the facts quickly, but the real detail is that the interface feels different as the conditions change.

The production pass brought the codebase into a cleaner state: strict TypeScript coverage, a smaller dependency surface, eliminated unused UI files, tested utility functions, and a more resilient search flow that avoids stale API results.`,
    stack: ["Vite", "React 18", "TypeScript", "Tailwind CSS", "Open-Meteo", "Supabase"],
    highlights: [
      "Integrated live weather data through the Open-Meteo API without requiring an API key",
      "Built city search with autocomplete and AbortController-cancelled debounce to prevent stale results",
      "Mapped temperature to adaptive gradients across light and dark system modes",
      "Added text-to-speech forecast playback through ElevenLabs and a Supabase Edge Function",
      "Created embeddable widgets at small, medium, and large sizes using URL parameters",
      "Reduced runtime dependencies from 54 to 7 after a manual dependency audit",
      "Removed 46 unused shadcn/ui component files and a parallel toast system",
      "Added 24 unit tests for conversions, weather condition mapping, date formatting, and responsive hooks",
    ],
    metrics: [
      { value: "24", label: "Unit tests" },
      { value: "7", label: "Runtime dependencies" },
      { value: "0", label: "Weather API keys required" },
    ],
    heroImage: "/assets/previews/aer/screenshot-1.png",
    screenshots: [
      { type: "laptop", src: "/assets/previews/aer/screenshot-1.png", caption: "Desktop weather interface with adaptive gradient state" },
      { type: "phone", src: "/assets/previews/aer/mobile-390x844.png", caption: "Mobile forecast layout and system-aware dark mode" },
    ],
  },
  {
    slug: "wicked-paradise",
    title: "Wicked Paradise",
    role: "Event Website / Brand Presence",
    year: "2024",
    description:
      "Website direction for Wicked Paradise, a music and nightlife event brand, built around fast recognition, event energy, social discovery, and a visual system that carries the feeling of a live party.",
    challenge:
      "Event brands have to communicate quickly. Visitors are usually looking for proof of energy, event context, media, social links, and a path to the next show. The challenge was to make the site feel active and atmospheric without hiding the basic actions people need.",
    approach:
      "The direction uses high-impact event imagery, bold brand placement, direct navigation, and visible social/contact paths. The site leans into the world of the event instead of treating it like a generic landing page, while keeping the structure simple enough for people arriving from social or mobile contexts.",
    outcome:
      "The result gives Wicked Paradise a more immediate digital home: visual first, event-aware, and easier to understand at a glance. It supports discovery, credibility, and the kind of quick emotional read that nightlife and music brands depend on.",
    stack: ["Web Design", "Event Website", "Responsive Design", "Creative Direction"],
    highlights: [
      "Created a visual-first web direction for a music and nightlife event brand",
      "Centered the experience around event energy, media, and social discovery",
      "Kept navigation direct for gallery, events, and contact paths",
      "Used high-impact imagery to make the brand legible quickly",
      "Built a responsive structure for visitors arriving from mobile and social links",
    ],
    heroImage: "/assets/previews/wicked-paradise/screenshot-1.webp",
    screenshots: [
      { type: "laptop", src: "/assets/previews/wicked-paradise/screenshot-1.webp", caption: "Homepage with event-led visual direction" },
      { type: "laptop", src: "/assets/previews/wicked-paradise/screenshot-2.webp", caption: "Event brand and navigation system" },
      { type: "laptop", src: "/assets/previews/wicked-paradise/screenshot-3.webp", caption: "Media-forward event presence" },
      { type: "laptop", src: "/assets/previews/wicked-paradise/screenshot-4.webp", caption: "Supporting content and social paths" },
    ],
  },
  {
    slug: "cherry-tooth",
    title: "Cherry Tooth",
    role: "Artist Website / Visual Direction",
    year: "2024",
    description:
      "Artist website direction for Cherry Tooth, built around a bold red-and-pink visual world, direct music/about/merch access, and a playful identity that feels specific to the artist instead of generic.",
    challenge:
      "The site needed to work as more than a simple artist page. It had to carry a strong visual identity, make the core paths obvious, and give visitors a quick sense of the artist's world without overcomplicating the experience.",
    approach:
      "The direction keeps the structure direct: home, music, about, and merch. Large-scale photography, oversized type, and a limited color system do most of the brand work. The goal was to make the page feel confident and memorable while keeping it usable for fans and first-time visitors.",
    outcome:
      "The result is a distinctive artist presence with clear navigation, strong recall, and a visual system that can extend into releases, merch, and social moments. It feels like an artist world rather than a neutral template.",
    stack: ["Web Design", "Artist Website", "Creative Direction", "Responsive Design"],
    highlights: [
      "Created a bold artist-site direction around photography, color, and oversized type",
      "Kept the page structure focused on music, about, merch, and discovery",
      "Built a memorable red-and-pink visual system for stronger brand recall",
      "Designed the experience to feel playful without losing clarity",
      "Supported fan-facing paths with simple navigation and mobile-friendly hierarchy",
    ],
    heroImage: "/assets/previews/cherry-tooth/screenshot-1.webp",
    screenshots: [
      { type: "laptop", src: "/assets/previews/cherry-tooth/screenshot-1.webp", caption: "Homepage with bold artist identity" },
      { type: "laptop", src: "/assets/previews/cherry-tooth/screenshot-2.webp", caption: "Music and artist-world direction" },
      { type: "laptop", src: "/assets/previews/cherry-tooth/screenshot-3.webp", caption: "Supporting page and content system" },
    ],
  },
  {
    slug: "sifs-utilities",
    title: "Sif's Utilities",
    role: "Creative Tools / Product Refresh",
    year: "2026",
    url: "https://cat-gif-generator-three.vercel.app/",
    description:
      "A collection of browser-based creative utilities, evolving from the original MeowGen experiment at meowgen.vercel.app into a sharper set of small tools for image, PDF, video, metadata, grain, icon, and playful generation workflows.",
    challenge:
      "The original version, MeowGen, was a fun single-purpose experiment hosted at meowgen.vercel.app. The opportunity was to treat that energy as a starting point and expand it into a more useful utility surface without making it feel heavy or overbuilt.",
    approach:
      "The refresh turns the idea into a small tool system: individual cards, simple labels, direct entry points, and a light interface that lets each utility stand on its own. The structure is intentionally modular so new tools can be added without redesigning the whole experience.",
    outcome:
      "The current version moves from a one-off generator into a broader creative toolkit. It keeps the playful spirit of the original while making the system easier to scan, extend, and use across multiple practical browser-based tasks.",
    stack: ["Next.js", "React", "Creative Tools", "Product Design"],
    highlights: [
      "Evolved the original MeowGen concept into a broader utility collection",
      "Created a modular card system for lightweight browser tools",
      "Added utilities for image compression, PDF compression, circle crops, video compression, metadata removal, grain, icons, and generation",
      "Kept the interface simple enough for quick repeated use",
      "Built the refreshed version as a clearer, more extensible tool surface",
    ],
    heroImage: "/assets/previews/sifs-utilities/screenshot-1.webp",
    screenshots: [
      { type: "laptop", src: "/assets/previews/sifs-utilities/screenshot-1.webp", caption: "Refreshed utilities index" },
    ],
  },
  {
    slug: "petal-and-stem",
    title: "Petal & Stem",
    role: "E-Commerce / Brand Website",
    year: "2024",
    client: "Petal & Stem (Fictional)",
    description:
      "An artisan floral e-commerce concept for a Portland studio, built with vanilla HTML, CSS, and JavaScript around a full design token system, responsive shopping paths, accessible interactions, and a warm editorial world.",
    challenge: `Design and develop a refined e-commerce experience for an artisan floral studio that conveys craftsmanship and elegance while providing a seamless shopping experience across devices.

The site needed to communicate an intentional floral practice, present signature arrangements in a curated way, tell the founder's story, build trust through testimonials and social proof, and create clear purchase and inquiry paths without aggressive sales pressure.`,
    approach: `I built the project from a design-system foundation: warm cream surfaces, rose, sage, and gold accents, a 4px spacing scale, fluid typography, and carefully defined motion curves.

The implementation uses semantic HTML, responsive grids, skip links, focus-visible states, ARIA labels, reduced-motion support, and vanilla JavaScript for cart states, toast feedback, form validation, animated counters, scroll-aware navigation, and micro-interactions.

No external JavaScript framework was used. The goal was to prove that a careful, refined e-commerce experience can still be fast, accessible, and maintainable with native browser primitives.`,
    outcome: `The final concept balances aesthetic refinement with functional clarity. It feels handcrafted and editorial while still supporting discovery, trust, and gentle inquiry paths.

Technically, the project demonstrates a zero-dependency front end, responsive behavior from mobile to desktop, accessible interaction patterns, and performance-minded animation choices using transforms, passive listeners, and IntersectionObserver.`,
    stack: ["HTML", "CSS", "Vanilla JavaScript", "Design Systems", "Accessibility"],
    highlights: [
      "Built a full design token system for color, spacing, typography, shadows, and motion",
      "Created a responsive floral e-commerce experience without external JavaScript frameworks",
      "Implemented product cards with wishlist, cart states, toast notifications, and inquiry flows",
      "Added accessibility details including skip links, focus states, ARIA labels, and reduced motion support",
      "Used IntersectionObserver, passive listeners, and transform-based animation for smooth rendering",
      "Designed a warm editorial visual language around artisan florals and founder storytelling",
    ],
    metrics: [
      { value: "0", label: "External JS dependencies" },
      { value: "95+", label: "Estimated Lighthouse performance" },
      { value: "100", label: "Estimated accessibility score" },
    ],
    heroImage: "/assets/previews/petal-and-stem/screenshot-1.png",
    screenshots: [
      { type: "laptop", src: "/assets/previews/petal-and-stem/screenshot-1.png", caption: "Desktop hero and shopping entry points" },
      { type: "phone", src: "/assets/previews/petal-and-stem/mobile-390x844.png", caption: "Mobile floral e-commerce experience" },
    ],
  },
  {
    slug: "experimental-sites",
    title: "Experimental Creative Sites",
    role: "Creative Coding / Web Experiments",
    year: "2024",
    description:
      "A set of experimental browser experiences exploring psychedelic WebGL visuals, procedural audio, particle systems, and deliberately chaotic retro web aesthetics as a technical and creative counterpoint to client work.",
    challenge: `Create immersive, unconventional web experiences that push browser visuals while maintaining performance, interaction, and a clear creative point of view.

The work balanced visual complexity with 60fps rendering, mathematical precision with organic movement, user control with autonomous visuals, and modern browser capabilities with practical compatibility concerns.`,
    approach: `The project explored two poles of web expression.

One direction focused on psychedelic visualization: shader programming, fractal brownian motion, domain warping, kaleidoscopic transformations, canvas particle systems, mouse interaction, and procedural audio through the Web Audio API.

The other direction deliberately revived 1990s web aesthetics: Comic Sans, rainbow gradients, marquees, fake visitor counters, pop-up chains, guestbook prompts, MIDI-player nostalgia, and intentionally excessive interaction patterns.

That retro site became a timed chaos engine: Norton-style virus scans, fake download managers, Windows Update warnings, AIM messages, random notifications, right-click protection, page-title changes, shifting backgrounds, guestbook entries, and a Konami-code mode that triggers ten seconds of full-page visual insanity. The point was not polish. The point was control over chaos.`,
    outcome: `The experiments demonstrate range beyond conventional websites: shader-based graphics, procedural audio, particle physics, custom cursors, and intentionally "bad" design executed with craft.

They function as creative coding studies, technical demos, and reminders that the browser can be a stage, an instrument, a joke, and a visual system all at once.`,
    stack: ["WebGL", "Canvas API", "SVG", "Web Audio API", "Creative Coding"],
    highlights: [
      "Built WebGL fragment shader experiments with FBM, domain warping, and kaleidoscopic transforms",
      "Explored procedural audio using oscillators, LFO modulation, filters, and noise textures",
      "Created canvas particle systems with trails, burst effects, and mouse interaction",
      "Designed multiple visual modes including fractal dream, kaleidoscope, infinite tunnel, cosmic melt, sacred geometry, and void collapse",
      "Built a deliberately chaotic GeoCities-style page with marquees, counters, pop-ups, retro browser chrome, and fake system notifications",
      "Orchestrated 15+ timed notifications including fake virus scans, download managers, AIM messages, Windows Update warnings, and visitor popups",
      "Added a Konami-code easter egg that triggers ten seconds of site-wide visual chaos",
      "Used controlled randomness for background changes, cursor states, screen shakes, guestbook entries, and floating elements",
      "Used the project as a technical playground for performance, immersion, and intentional aesthetic excess",
    ],
    heroImage: "/assets/previews/experimental-sites/screenshot-1.png",
    screenshots: [
      { type: "laptop", src: "/assets/previews/experimental-sites/screenshot-1.png", caption: "Retro web experiment with intentionally excessive visual language" },
      { type: "phone", src: "/assets/previews/experimental-sites/mobile-390x844.png", caption: "Mobile view of the experimental retro interface" },
    ],
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
