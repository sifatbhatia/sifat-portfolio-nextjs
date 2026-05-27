import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Selected websites, identities, tools, and experiments by Sifat Bhatia for artists, agencies, and creative teams.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Selected Work | Sifat Bhatia",
    description:
      "Selected websites, identities, tools, and experiments by Sifat Bhatia for artists, agencies, and creative teams.",
    url: "/projects",
    type: "website",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
