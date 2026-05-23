import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sifat Bhatia — Design Engineer & Creative Technologist",
    template: "%s | Sifat Bhatia",
  },
  description:
    "Sifat Bhatia is a design engineer and creative technologist based in Los Angeles. He builds websites, brand identities, and digital experiences for artists, agencies, and creative brands. Expert in React, Next.js, GSAP, Webflow, and design systems. Open for freelance and full-time opportunities.",
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
  publisher: "Siftion",
  metadataBase: new URL("https://sifat.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sifat.tech",
    siteName: "Sifat Bhatia — Design Engineer",
    title: "Sifat Bhatia — Design Engineer & Creative Technologist",
    description:
      "Design engineer based in Los Angeles. Building websites, brand identities, and digital experiences for artists, agencies, and creative brands.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sifat Bhatia — Design Engineer & Creative Technologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sifat Bhatia — Design Engineer & Creative Technologist",
    description:
      "Design engineer based in Los Angeles. Building websites, brand identities, and digital experiences for artists, agencies, and creative brands.",
    images: ["/assets/og-image.png"],
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
  verification: {
    google: "google-site-verification-code", // Replace with actual code when available
  },
  category: "portfolio",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sifat Bhatia",
  jobTitle: "Design Engineer & Creative Technologist",
  description:
    "Sifat Bhatia is a design engineer and creative technologist based in Los Angeles. He specializes in building websites, brand identities, and digital experiences for artists, agencies, and creative brands.",
  url: "https://sifat.tech",
  sameAs: [
    "https://github.com/sifatbhatia",
    "https://www.instagram.com/sifatxo/",
    "https://www.linkedin.com/in/sifatbhatia",
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
      description: "BS Degree, Valedictorian",
    },
    {
      "@type": "EducationalOrganization",
      name: "Westcliff University",
      description: "MS in Information Technology (in progress)",
    },
  ],
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
  name: "Sifat Bhatia — Design Engineer",
  url: "https://sifat.tech",
  description:
    "Portfolio of Sifat Bhatia, a design engineer and creative technologist based in Los Angeles.",
  publisher: {
    "@type": "Person",
    name: "Sifat Bhatia",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://sifat.tech/projects?q={search_term_string}",
    },
    "query-input": {
      "@type": "PropertyValueSpecification",
      valueName: "search_term_string",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en" data-scroll-behavior="smooth">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Young+Serif&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=block"
            rel="stylesheet"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
        </head>
        <body className="antialiased">{children}</body>
      </html>
    </ViewTransitions>
  );
}
