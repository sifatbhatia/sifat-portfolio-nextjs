"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";

const primaryLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/journal", label: "Journal" },
  { href: "/services", label: "Services" },
  { href: "/now", label: "Now" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="footer-nav-link">
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-intro">
          <p className="footer-eyebrow">Siftion</p>
          <p className="footer-statement">Designing and building things worth spending time with.</p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="footer-eyebrow">Explore</p>
          {primaryLinks.map((link) => <FooterLink key={link.href} {...link} />)}
        </nav>

        <nav aria-label="Social links">
          <p className="footer-eyebrow">Elsewhere</p>
          <a className="footer-nav-link" href="https://www.instagram.com/siftion/" target="_blank" rel="noreferrer">Instagram</a>
          <a className="footer-nav-link" href="mailto:sifatbht@gmail.com">Email</a>
        </nav>
      </div>

      <div className="footer-wordmark">
        <Link href="/" aria-label="Back to home">
          <Image src="/assets/footer__logo.svg" alt="Sifat Bhatia" width={1702} height={203} unoptimized />
        </Link>
      </div>

      <div className="footer-bottom-bar">
        <span>© Siftion</span>
        <span>Los Angeles, CA</span>
        <span>Design + Development</span>
        <button className="footer-bottom-link" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
      </div>
    </footer>
  );
}
