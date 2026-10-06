import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Technical notes, autonomous research signals, and design engineering observations from Sifat Bhatia and Lumiere.",
  alternates: {
    canonical: "/journal",
  },
  openGraph: {
    title: "Journal | Sifat Bhatia",
    description:
      "Technical notes, autonomous research signals, and design engineering observations from Sifat Bhatia and Lumiere.",
    url: "/journal",
    type: "website",
  },
};

export default function JournalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
