export interface ProjectData {
  slug: string;
  title: string;
  role: string;
  year: string;
  engagement?: string;
  client?: string;
  url?: string;
  previewUrl?: string;
  conceptLinks?: { label: string; url: string }[];
  description: string;
  summary?: string;
  challenge: string;
  approach: string;
  outcome: string;
  stack: string[];
  testimonial?: { quote: string; attribution: string };
  heroImage: string;
  caseStudyImage?: string;
  screenshots: { type: "laptop" | "phone"; src: string; caption?: string }[];
  highlights?: string[];
  metrics?: { value: string; label: string }[];
}

export const projects: ProjectData[] = [
  {
    slug: "j-worra",
    title: "J. Worra",
    role: "Brand Direction / Website Development",
    year: "2024-2026",
    engagement: "2018 – Present",
    url: "https://www.jworra.com/",
    summary:
      "I’ve shaped J. Worra’s brand and website since 2018, keeping releases, tour dates, press, and booking together as the artist’s schedule moves.",
    description:
      "Since 2018, I have led J. Worra’s brand direction, logo, and successive website builds. The current Next.js site brings Spotify-powered releases and discography together with tour dates, press, and booking contacts. I continue to support the site around releases and tours, alongside analytics and technical SEO.",
    challenge:
      "Releases, tours, press, and booking do not happen on the same schedule, but they all point back to the same artist. The site needs to hold those audiences together without turning J. Worra’s identity into a list of links.",
    approach:
      "I started with the artist identity and carried it through the logo, visual direction, and each web iteration. The current Next.js build keeps releases, tour dates, press, and booking close to the music instead of splitting them into disconnected destinations. Spotify supplies the release and discography data; I handle the surrounding site, analytics, technical SEO, and updates as the artist’s calendar changes.",
    outcome:
      "The site has remained part of the artist’s working kit through successive releases and tours. I continue to maintain the web presence, update campaign details, and keep the listening, press, and booking paths current.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Spotify Web API",
      "Webflow",
      "Brand Identity",
    ],
    highlights: [
      "Sole designer and developer for the artist’s brand and website since 2018",
      "Created the brand direction, logo, and each website iteration",
      "Built the current site with Next.js, TypeScript, and Tailwind CSS",
      "Integrated Spotify releases and discography",
      "Set up analytics and handle technical SEO",
      "Continue web support for releases, tours, press, booking, and marketing",
    ],
    heroImage: "/assets/previews/j-worra/rock-iphone-mockup.webp",
    screenshots: [
      {
        type: "laptop",
        src: "/assets/previews/j-worra/desktop-1440x900.png",
        caption: "Homepage: Full desktop view",
      },
      {
        type: "phone",
        src: "/assets/previews/j-worra/mobile-hero-2026.jpg",
        caption: "Mobile hero: 2026 refresh",
      },
    ],
  },
  {
    slug: "l-affaire-musicale",
    title: "L'Affaire Musicale",
    role: "Brand Identity / Website Refresh",
    year: "2026",
    conceptLinks: [
      { label: "View LAM concept", url: "https://lam.siftion.com/" },
      { label: "View L'Affaire concept", url: "https://laffaire.siftion.com/" },
    ],
    engagement: "March 2019 – October 2026",
    summary:
      "I designed L’Affaire Musicale’s logo and brand identity, then carried them into a clearer Squarespace presence for the roster and inquiries.",
    description:
      "From March 2019 to October 2026, I designed L’Affaire Musicale’s logo and brand identity, then carried that direction into its website and roster-artist sites. The engagement also covered UI/UX, style guides, Squarespace development, SEO, and work for sister event brand Wicked Paradise. The case-study preview is a static mirror from that period, not the current live site or editable Squarespace backend.",
    challenge: `The earlier site read more like an events page than an artist-management company. A visitor needed to understand what L’Affaire did, find the roster, and reach the right contact without digging through a generic agency template.

The refresh had to make the management identity legible at a glance while leaving room for the artists and event brand to keep their own character.`,
    approach: `I designed the logo and used it as the anchor for the site: a centered wordmark, monochrome surfaces, restrained sans-serif type, and direct paths into the roster and contact. The artists stay the focus, while the agency is easy to place.

Within Squarespace, custom HTML, CSS, and JavaScript gave the layout more control while keeping the site manageable for updates. I carried the identity through roster and artist pages, then supported the wider engagement with site management and SEO.

The case-study preview is a static mirror of the earlier Squarespace site. It preserves that work, but it is not the current live site or a replacement backend.`,
    outcome:
      "The engagement produced a clearer management-company front door, a more deliberate roster presentation, and a visual system that could carry across the company and its artist pages. My contract with L’Affaire Musicale and Wicked Paradise ended in October 2026; this case study documents that completed work.",
    stack: ["Squarespace", "HTML", "CSS", "JavaScript", "Brand Identity"],
    highlights: [
      "Designed the L’Affaire Musicale logo and brand identity",
      "Developed UI/UX direction and style guides for the management company",
      "Customized Squarespace with HTML, CSS, and JavaScript",
      "Established typography, color, spacing, and layout direction",
      "Organized navigation around artists, music, and contact",
      "Built roster artist pages and supported site maintenance and SEO",
      "Completed the contract engagement in October 2026",
    ],
    heroImage: "/assets/previews/l-affaire-musicale/screenshot-1.webp",
    screenshots: [
      {
        type: "laptop",
        src: "/assets/previews/l-affaire-musicale/screenshot-1.webp",
        caption: "Homepage with refreshed brand identity",
      },
    ],
  },
  {
    slug: "qlo-agency",
    title: "QLO Agency",
    role: "Webflow Development",
    year: "2024",
    engagement: "2024 – Present",
    summary:
      "QLO’s Webflow site pairs a motion-led studio portfolio with custom GSAP work and a project CRM behind the scenes.",
    description:
      "I develop QLO Agency’s own Webflow site, bringing its brand, digital, and motion offer into one portfolio experience. Custom GSAP motion gives the pages their rhythm; the site’s work archive presents projects across disciplines, while a project CRM supports the studio’s project workflow. This is more than a Webflow assembly job: the build connects custom interaction, project operations, and a responsive public-facing site.",
    challenge:
      "QLO needed its own site to do more than list services. It had to express the studio’s range across brand, digital, and motion, give varied work room to speak, and support the project workflow behind that public portfolio. The interaction needed to feel authored, not like a stack of default Webflow reveals.",
    approach:
      "I built the site in Webflow and used GSAP for custom motion, including SplitText and ScrollTrigger, coordinated with Lenis smooth scrolling. The public work archive moves between projects such as Esq. Capsule, LVH, Beats & Brew, Inter, and Bnine; service and approach pages give the studio’s broader offer a clear structure. A project CRM supports the work behind the showcase, so the site is both a brand experience and part of the studio’s operating setup.",
    outcome:
      "QLO has a responsive studio site with a motion-led project showcase and a project CRM supporting its workflow. The build brings the public story and the system behind the work closer together, instead of treating the site as a static gallery.",
    stack: ["Webflow", "GSAP", "SplitText", "ScrollTrigger", "Lenis", "JavaScript", "CSS", "Project CRM"],
    highlights: [
      "Built custom GSAP motion using SplitText and ScrollTrigger",
      "Synced scroll-driven motion with Lenis",
      "Developed the Webflow site for QLO’s brand, digital, and motion studio",
      "Connected the work showcase to a project CRM",
      "Structured the site around studio services, approach, and project work",
    ],
    heroImage: "/assets/previews/qlo-agency/screenshot-1.webp",
    screenshots: [
      {
        type: "laptop",
        src: "/assets/previews/qlo-agency/screenshot-1.webp",
        caption: "Custom Webflow build with CMS collections",
      },
    ],
  },
  {
    slug: "wicked-paradise",
    title: "Wicked Paradise",
    role: "Event Website / Brand Presence",
    year: "2024",
    engagement: "March 2019 – October 2026",
    summary:
      "An image-led event site that lets the atmosphere sell the night, while keeping event discovery and sign-up clear.",
    description:
      "I handled website direction, UI/UX, style guides, SEO, and maintenance for Wicked Paradise as part of the March 2019 to October 2026 engagement with L’Affaire Musicale. The case study shows the event-focused site from that period: large party imagery up front, with direct routes to events, media, social, and contact.",
    challenge:
      "An event site has two jobs at once: make the night feel worth leaving home for, then help someone find the next date or stay in the loop. Too much structure drains the atmosphere; too little leaves the visitor with nowhere to go.",
    approach:
      "I let the party photography carry the first impression, then kept the navigation and event details direct: what it is, where it is, what is next, and how to stay connected. The image-led layout gives the event its own world without making the practical information hard to reach on mobile.",
    outcome:
      "The project delivered an image-led event presence with clear paths to discovery, media, and updates. I managed the site alongside L’Affaire Musicale through the end of the contract in October 2026; the case images document that period, not the current live site.",
    stack: [
      "Web Design",
      "Event Website",
      "Responsive Design",
      "Creative Direction",
    ],
    highlights: [
      "Created a visual-first web direction for a music and nightlife event brand",
      "Centered the experience around event energy, media, and social discovery",
      "Kept navigation direct for gallery, events, and contact paths",
      "Used high-impact imagery to make the brand legible quickly",
      "Built a responsive structure for visitors arriving from mobile and social links",
    ],
    heroImage: "/assets/previews/wicked-paradise/screenshot-1.webp",
    screenshots: [
      {
        type: "laptop",
        src: "/assets/previews/wicked-paradise/screenshot-1.webp",
        caption: "Homepage with event-led visual direction",
      },
      {
        type: "laptop",
        src: "/assets/previews/wicked-paradise/screenshot-2.webp",
        caption: "Event brand and navigation system",
      },
      {
        type: "laptop",
        src: "/assets/previews/wicked-paradise/screenshot-3.webp",
        caption: "Media-forward event presence",
      },
      {
        type: "laptop",
        src: "/assets/previews/wicked-paradise/screenshot-4.webp",
        caption: "Supporting content and social paths",
      },
    ],
  },
  {
    slug: "willcall",
    title: "WillCall",
    role: "Ticketing Product / Full-Stack Development",
    year: "2026",
    url: "https://willcall.siftion.com/",
    summary:
      "A server-backed ticketing prototype from event discovery and ticket allocation to attendee management and door check-in.",
    description:
      "WillCall is a live, server-backed ticketing prototype. The public showcase uses fictional events and Neon-backed bookings; it takes no payment, and showcase passes are not valid for real-world entry. Organizers can publish events, set ticket tiers and sales windows, find or export attendee records, and check guests in by rotating QR scan or manual lookup. Paid checkout is not enabled in the showcase.",
    challenge: `Ticketing doesn't end at checkout. Event details, ticket caps, attendee records, and admission all need to stay in sync, while organizers need a fast way to find people at the door. WillCall treats the event, the ticket, and the check-in as parts of one product rather than separate tools.`,
    approach: `I built a public event board alongside organizer tools for event setup, ticket tiers, quantities, and sales windows. Organizers can review sold allocations, search attendees by name or email, export the list, and record check-ins with a rotating QR scan or manual lookup. Bookings persist to Neon. The public showcase uses fictional events and no-payment bookings, so it demonstrates the workflow without pretending to be a real ticket sale or valid admission.`,
    outcome:
      "WillCall is live at willcall.siftion.com as a server-backed demonstration. The product spans event discovery, ticket allocation, attendee management, and door check-in; the hosted showcase clearly states that it takes no payment and its passes are not valid for real entry.",
    stack: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "Prisma",
      "Neon (PostgreSQL)",
      "Stripe",
      "WebSockets",
    ],
    highlights: [
      "Connected event discovery, ticket allocation, and door operations",
      "Built organizer tools for ticket tiers, quantities, and sales windows",
      "Added attendee search, list export, QR scanning, and manual check-in",
      "Persisted showcase bookings and check-in state to Neon",
      "Clearly separated the fictional, no-payment demo from real ticket sales",
    ],
    heroImage: "/assets/previews/willcall/current-home-desktop.webp",
    caseStudyImage: "/assets/previews/willcall/current-home-desktop.webp",
    screenshots: [
      {
        type: "laptop",
        src: "/assets/previews/willcall/current-home-desktop.webp",
        caption: "Current event discovery homepage",
      },
      {
        type: "laptop",
        src: "/assets/previews/willcall/current-event-detail-desktop.webp",
        caption: "Sample event detail and ticket selection",
      },
      {
        type: "phone",
        src: "/assets/previews/willcall/current-home-mobile.webp",
        caption: "Mobile event discovery",
      },
    ],
  },
  {
    slug: "sam-blacky",
    title: "Sam Blacky",
    role: "Artist Website / Creative Direction",
    year: "2026",
    url: "https://samblacky.com/",
    summary:
      "A music-first artist-site direction with bold photography and direct paths to music, brand work, artist story, and contact.",
    description:
      "A website and creative direction for Sam Blacky, organized around four direct routes: music, brands, about, and contact. The case-study design leads with a full-bleed artist portrait, violet light, and a restrained navigation so the image establishes the mood while the next step stays obvious.",
    challenge: `An artist website has to hold two kinds of attention: fans looking for the music and industry visitors looking for brand or contact information. The page needed a strong visual introduction without making those paths compete with the portrait.

The direction needed to feel like Sam Blacky, not a generic press page, while keeping the next action easy to spot.`,
    approach: `I let one full-bleed portrait carry the first screen, then kept the navigation to four clear paths: Music, Brands, About, and Contact. Violet light and the pink accent make the image feel like part of the artist’s world, while the compact menu keeps practical routes visible.

The visual hierarchy does the work in order: recognize the artist, find the music, then move toward brand or contact details without a long press-page detour.`,
    outcome:
      "The result is a music-first website direction with a distinct visual opening and direct routes for fans and industry visitors. The artist image sets the tone; music, brand work, and contact stay one step away.",
    stack: [
      "Web Design",
      "Creative Direction",
      "Artist Website",
      "Responsive Design",
    ],
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
      {
        type: "laptop",
        src: "/assets/previews/sam-blacky/screenshot-1.webp",
        caption: "Homepage with bold visual identity",
      },
      {
        type: "laptop",
        src: "/assets/previews/sam-blacky/screenshot-2.webp",
        caption: "Music and releases",
      },
      {
        type: "laptop",
        src: "/assets/previews/sam-blacky/screenshot-3.webp",
        caption: "Artist story and photography",
      },
    ],
  },
  {
    slug: "clipkeep",
    title: "ClipKeep",
    role: "Product Design / Full-Stack Development",
    year: "2024-2026",
    summary:
      "A private, local-first home for social saves across TikTok, Instagram, and YouTube, with collections, search, and resilient link capture.",
    url: "https://clipkeep.vercel.app",
    description:
      "ClipKeep turns platform-specific saves into a personal library. Clips stay in local storage by default; collections, favorites, search, and metadata previews make them easier to find again. Optional Supabase sync stores encrypted vault snapshots, while URL cleanup and metadata fallbacks handle the odd share links each platform produces. AI summaries remain experimental, not a requirement for using the vault.",
    challenge: `Social saves are split across apps, chats, notes, and browser tabs. The saved clip may still be there, but the path back to it is usually buried in the platform that captured it.

Then the links themselves get messy. Mobile share URLs, redirects, tracking parameters, and short links can all break metadata. ClipKeep needed to make capture tolerant of that mess, not ask people to clean URLs by hand.`,
    approach: `The vault starts local, before accounts or cloud sync. From the library, people can sort clips into collections, mark favorites, search, and revisit metadata across TikTok, Instagram, and YouTube.

Capture is treated as a pipeline: normalize the URL, strip tracking noise, resolve short links where possible, preserve platform meaning, and fall back when a metadata source fails. Optional Supabase sync stores encrypted snapshots; AI summaries are experimental and stay outside the core save-and-find flow.`,
    outcome: `ClipKeep is a working prototype for keeping social saves in one searchable place. Its central product decision is simple: save locally first, then make capture resilient enough that a broken preview or inconsistent share link does not have to derail the save.

Optional encrypted sync and experimental summaries extend the vault without becoming prerequisites.`,
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "NVIDIA AI API",
    ],
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
      {
        type: "laptop",
        src: "/assets/previews/clipkeep/screenshot-1.webp",
        caption: "Clip vault home and saved-link library",
      },
      {
        type: "laptop",
        src: "/assets/previews/clipkeep/screenshot-2.webp",
        caption: "Clip organization, metadata, and browsing interface",
      },
    ],
  },
  {
    slug: "aer",
    title: "Aer",
    role: "Weather App / Front-End System",
    year: "2026",
    url: "https://aer-psi.vercel.app/",
    summary:
      "A weather interface that lets the conditions shape the palette, while hourly and seven-day detail stay readable.",
    description:
      "Aer turns live Open-Meteo data into a quiet forecast surface: current conditions, city search, hourly detail, and a seven-day view. Temperature shifts the background palette, while the numbers remain easy to read. The app needs no weather API key and includes unit switching, system-aware color modes, voice playback, and embeddable widgets.",
    challenge: `A forecast gives you numbers; Aer adds a quick visual read of the conditions without asking color to replace the forecast details.

The interface still had to carry the useful details: city search, current conditions, hourly weather, a weekly outlook, unit switching, voice playback, and embeddable widgets.`,
    approach: `Temperature sets the atmosphere: warmer conditions pull the page toward amber, colder ones toward blue. The forecast cards keep the actual data legible, so color adds a quick read rather than replacing the numbers.

I kept the interaction small and useful: tap the temperature to switch units, search cities with a debounced request that cancels stale results, and choose light or dark with the system setting. Open-Meteo keeps the core forecast keyless; voice playback and embeddable widget sizes extend the app for other contexts.

The production pass trimmed unused dependencies and components, extracted the pieces most likely to drift, and added unit coverage for conversions, condition mapping, dates, and responsive hooks.`,
    outcome: `Aer pairs a live forecast with an interface that changes tone with the weather, while keeping city search and short- and week-range forecasts close at hand.

The production pass reduced runtime dependencies from 54 to 7, removed unused UI files, and added 24 tests around weather mapping, conversions, dates, and responsive hooks.`,
    stack: [
      "Vite",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Open-Meteo",
      "Supabase",
    ],
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
      {
        type: "laptop",
        src: "/assets/previews/aer/screenshot-1.png",
        caption: "Desktop weather interface with adaptive gradient state",
      },
      {
        type: "phone",
        src: "/assets/previews/aer/mobile-390x844.png",
        caption: "Mobile forecast layout and system-aware dark mode",
      },
    ],
  },
  {
    slug: "cherry-tooth",
    title: "Cherry Tooth",
    role: "Artist Website / Visual Direction",
    year: "2024",
    conceptLinks: [
      { label: "View Cherry Tooth concept", url: "https://cherrytooth.siftion.com/" },
    ],
    summary:
      "A compact artist-site direction where a vivid portrait and red-pink palette lead into music, artist information, and merch.",
    description:
      "A website and visual direction for Cherry Tooth, a DJ and producer. A full-bleed portrait, oversized wordmark, and red-pink palette give the page its first impression; the navigation stays short, with direct paths to music, about, and merch.",
    challenge:
      "An artist page has to establish a point of view quickly, then get fans to the music and merch without turning into a press-kit maze. The visual identity should do the introduction; the navigation should not make people search for the basics.",
    approach:
      "I let one portrait, a saturated red-pink palette, and an oversized wordmark carry the visual weight. The page stays intentionally short: music, about, and merch are clear destinations rather than nested branches. That keeps the artist image in charge while giving fans a direct way through.",
    outcome:
      "The result is a focused artist-site direction with a strong first image and a short route to music, artist information, and merch. It is presented here as website and visual-direction work, without claiming a separate commercial outcome.",
    stack: [
      "Web Design",
      "Artist Website",
      "Creative Direction",
      "Responsive Design",
    ],
    highlights: [
      "Created a bold artist-site direction around photography, color, and oversized type",
      "Kept the page structure focused on music, about, merch, and discovery",
      "Built a red-and-pink visual system around photography and oversized type",
      "Designed the experience to feel playful without losing clarity",
      "Supported fan-facing paths with simple navigation and mobile-friendly hierarchy",
    ],
    heroImage: "/assets/previews/cherry-tooth/screenshot-1.webp",
    screenshots: [
      {
        type: "laptop",
        src: "/assets/previews/cherry-tooth/screenshot-1.webp",
        caption: "Homepage with bold artist identity",
      },
      {
        type: "laptop",
        src: "/assets/previews/cherry-tooth/screenshot-2.webp",
        caption: "Music and artist-world direction",
      },
      {
        type: "laptop",
        src: "/assets/previews/cherry-tooth/screenshot-3.webp",
        caption: "Supporting page and content system",
      },
    ],
  },
  {
    slug: "sifs-utilities",
    title: "Sif's Utilities",
    role: "Creative Tools / Product Refresh",
    year: "2026",
    url: "https://sifs-utils.vercel.app/",
    summary:
      "A browser-first toolbox for image, video, PDF, and metadata chores, designed to open straight into the work.",
    description:
      "Sif’s Utilities groups small file jobs in one place: compress an image or video, crop, clean a PDF, remove metadata, build an icon, or format JSON and YAML. The interface starts with the task, not an account screen. Most work runs in the browser, with a direct path from file to adjustment to download.",
    challenge:
      "Small file jobs live in an awkward gap: too trivial for a desktop suite, too specific for a general-purpose editor. MeowGen was the one-off starting point. The next version needed more tools without making the hub feel like another product dashboard.",
    approach:
      "I organized the hub around the job in front of you. Each utility gets its own entry point and controls, while the same quiet card system makes the growing list easy to scan. Most tools run in the browser; the flow is built around choosing the task, dropping in a file, making an adjustment, and downloading the result.",
    outcome:
      "The original one-off experiment has become a wider set of small browser tools. The interface stays focused on quick file jobs instead of pretending each one needs a full application around it.",
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
      {
        type: "laptop",
        src: "/assets/previews/sifs-utilities/screenshot-1.webp",
        caption: "Refreshed utilities index",
      },
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
    stack: [
      "HTML",
      "CSS",
      "Vanilla JavaScript",
      "Design Systems",
      "Accessibility",
    ],
    highlights: [
      "Built a full design token system for color, spacing, typography, shadows, and motion",
      "Created a responsive floral e-commerce experience without external JavaScript frameworks",
      "Implemented product cards with wishlist, cart states, toast notifications, and inquiry flows",
      "Added accessibility details including skip links, focus states, ARIA labels, and reduced motion support",
      "Used IntersectionObserver, passive listeners, and transform-based animation for smooth rendering",
      "Designed a warm editorial visual language around artisan florals and founder storytelling",
    ],
    metrics: [{ value: "0", label: "External JS dependencies" }],
    heroImage: "/assets/previews/petal-and-stem/screenshot-1.png",
    screenshots: [
      {
        type: "laptop",
        src: "/assets/previews/petal-and-stem/screenshot-1.png",
        caption: "Desktop hero and shopping entry points",
      },
      {
        type: "phone",
        src: "/assets/previews/petal-and-stem/mobile-390x844.png",
        caption: "Mobile floral e-commerce experience",
      },
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
      {
        type: "laptop",
        src: "/assets/previews/experimental-sites/screenshot-1.png",
        caption:
          "Retro web experiment with intentionally excessive visual language",
      },
      {
        type: "phone",
        src: "/assets/previews/experimental-sites/mobile-390x844.png",
        caption: "Mobile view of the experimental retro interface",
      },
    ],
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
