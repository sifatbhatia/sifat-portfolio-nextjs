"use client";

import { Link } from "next-view-transitions";
import EyeTracker from "@/components/EyeTracker";
import MaterialIcon from "@/components/MaterialIcon";
import styles from "./not-found-editorial.module.css";

const destinations = [
  { href: "/projects", title: "Selected work" },
  { href: "/journal", title: "Journal" },
  { href: "/", title: "Home" },
];

export default function NotFoundEditorialScene() {
  return (
    <section className={`hero-section ${styles.hero}`} aria-label="Page not found">
      <div className={styles.layout}>
        <h1 className={styles.headline}>
          <span>I couldn&apos;t find</span>
          <span>that page</span>
        </h1>

        <div className={styles.content}>
          <div className={styles.avatarStage}>
            <EyeTracker size={440} follow={40} bounce={30} />
          </div>

          <div className={styles.recovery}>
            <p className={styles.copy}>
              That address doesn&apos;t exist. The rest of the site does.
            </p>
            <nav className={styles.destinations} aria-label="Go to">
              {destinations.map((destination) => (
                <Link
                  key={destination.href}
                  className={styles.destination}
                  href={destination.href}
                >
                  <span>{destination.title}</span>
                  <MaterialIcon
                    name="arrow_outward"
                    className={styles.arrow}
                  />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
