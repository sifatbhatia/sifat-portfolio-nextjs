import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArrowIcon from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sifat Bhatia about design engineering, websites, identity, and creative technology.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="contact-page">
        <section className="contact-content" aria-labelledby="contact-title">
          <p className="page-kicker">Contact</p>
          <h1 id="contact-title">Tell me what you&apos;re making.</h1>
          <p className="contact-intro">
            Share the project, what you need help with, and your timing. A few direct lines are enough.
          </p>
          <a className="contact-email" href="mailto:sifatbht@gmail.com?subject=Project%20inquiry">
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
              <dd>Design engineering, websites, identity, and creative technology</dd>
            </div>
          </dl>
        </section>
      </main>
      <Footer />
    </>
  );
}
