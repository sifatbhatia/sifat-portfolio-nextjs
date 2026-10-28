import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import LenisProvider from "@/components/lenis-provider";
import "./globals.css";
import "./siftion-tokens.css";
import "./siftion-controls.css";
import "./siftion-portfolio.css";

export const metadata: Metadata = {
  title: {
    default:
      "Sifat Bhatia - Design Engineer and Creative Technologist in Los Angeles",
    template: "%s | Sifat Bhatia",
  },
  description:
    "Sifat Bhatia is a Los Angeles-based design engineer with 8+ years building brand identities, websites, and full-stack web products for artists, agencies, and nonprofits.",
  keywords: [
    "Sifat Bhatia",
    "design engineer",
    "creative technologist",
    "frontend developer",
    "web designer",
    "Los Angeles",
    "React",
    "Next.js",
    "GSAP",
    "Webflow",
    "brand identity",
    "UI/UX",
    "design systems",
    "portfolio",
    "freelance developer",
    "hire developer LA",
  ],
  authors: [{ name: "Sifat Bhatia", url: "https://sifat.tech" }],
  creator: "Sifat Bhatia",
  publisher: "Sifat Bhatia",
  metadataBase: new URL("https://sifat.tech"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sifat.tech",
    siteName: "Sifat Bhatia: Design Engineer",
    title: "Sifat Bhatia, Design Engineer",
    description:
      "Sifat Bhatia is a Los Angeles-based design engineer. Work spans artist sites, brand identities, and web products.",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Chrome S and B emblem beside a J. Worra artist website screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sifat Bhatia, Design Engineer",
    description:
      "Sifat Bhatia is a Los Angeles-based design engineer. Work spans artist sites, brand identities, and web products.",
    images: ["/social-preview.png"],
    creator: "@sifatxo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "portfolio",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sifat Bhatia",
  jobTitle: "Design Engineer & Creative Technologist",
  description:
    "Sifat Bhatia is a design engineer and creative technologist based in Los Angeles. He builds websites, identities, and interactive tools through close attention to people, context, and constraint.",
  url: "https://sifat.tech",
  sameAs: [
    "https://github.com/sifatbhatia",
    "https://www.instagram.com/siftion/",
    "https://www.linkedin.com/in/siftion",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "GSAP",
    "Webflow",
    "UI/UX Design",
    "Brand Identity",
    "Design Systems",
    "Frontend Development",
    "Creative Technology",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Siftion",
    url: "https://sifat.tech",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Full Sail University",
      description: "B.S., Web Design & Development, Valedictorian (2021)",
    },
    {
      "@type": "EducationalOrganization",
      name: "Los Angeles City College",
      description: "Computer Science studies, 2023–2026",
    },
  ],
  affiliation: {
    "@type": "EducationalOrganization",
    name: "Westcliff University",
    description: "M.S., Information Technology, 2026–Present (in progress)",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sifat Bhatia: Design Engineer",
  url: "https://sifat.tech",
  description:
    "Portfolio of Sifat Bhatia, a design engineer and creative technologist based in Los Angeles.",
  publisher: {
    "@type": "Person",
    name: "Sifat Bhatia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" data-mode="night">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
        </head>
        <body className="antialiased">
          <LenisProvider>{children}</LenisProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
