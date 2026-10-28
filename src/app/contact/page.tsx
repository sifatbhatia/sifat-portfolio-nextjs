import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArrowIcon from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  description:
    "Contact Sifat Bhatia about websites, identities, and web product work.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="contact-page">
        <section className="contact-content" aria-labelledby="contact-title">
          <p className="page-kicker">Contact</p>
          <h1 id="contact-title">A rough first note is fine.</h1>
          <p className="contact-intro">
            I work on websites, identities, and web products. Send me the goal,
            what already exists, and your target date.
          </p>
          <a
            className="contact-email"
            href="mailto:sifatbht@gmail.com?subject=Project%20inquiry"
          >
            <span>sifatbht@gmail.com</span>
            <ArrowIcon direction="up-right" />
          </a>
          <dl className="contact-details">
            <div>
              <dt>Based</dt>
              <dd>Los Angeles, California</dd>
            </div>
            <div>
              <dt>Work</dt>
              <dd>
                Websites, identity, and web products from visual direction
                through implementation
              </dd>
            </div>
          </dl>
        </section>
      </main>
      <Footer />
    </>
  );
}
