import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerProfile from "@/components/CareerProfile";
import MaterialIcon from "@/components/MaterialIcon";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "About Sifat Bhatia: Design Engineer",
  description:
    "Sifat Bhatia is a Los Angeles-based design engineer with 8+ years building websites and digital products for artists, agencies, nonprofits, and creative businesses.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100dvh",
          background: "var(--sf-paper)",
          color: "var(--sf-ink)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding:
              "clamp(8rem, 15vh, 12rem) clamp(1.5rem, 6vw, 4rem) clamp(6rem, 10vh, 8rem)",
          }}
        >
          <header
            style={{
              maxWidth: "1400px",
              marginBottom: "clamp(2rem, 4vh, 3rem)",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 400.0,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(var(--sf-ink-rgb), 0.3)",
                margin: "0 0 1.5rem",
                fontFamily: "var(--font-body)",
              }}
            >
              About
            </p>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 400.0,
                lineHeight: 0.96,
                letterSpacing: "-0.03em",
                margin: "0 0 1.5rem",
                fontFamily: "var(--font-display)",
                textWrap: "balance",
              }}
            >
              I&apos;m Sifat, a design engineer in Los Angeles.
            </h1>
            <p
              style={{
                maxWidth: "44rem",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                lineHeight: 1.7,
                color: "rgba(var(--sf-ink-rgb), 0.6)",
                margin: 0.0,
                fontFamily: "var(--font-body)",
              }}
            >
              I run Siftion, an independent design and development studio. For
              8+ years, I&apos;ve worked across brand identity, websites, and
              digital products, from Webflow and WordPress to custom
              React/Next.js builds and ongoing support.
            </p>
          </header>
          <CareerProfile />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "clamp(3.5rem, 8vh, 5rem)",
            }}
          >
            <Link
              className="sf-button sf-button--secondary now-cta"
              href="/projects"
            >
              See selected work
            </Link>
            <Link
              className="sf-button sf-button--ghost now-cta now-cta-ghost"
              href="/services"
            >
              Explore services
              <MaterialIcon className="now-cta-arrow" name="arrow_forward" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
