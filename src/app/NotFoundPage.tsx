"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import ArrowIcon from "@/components/ArrowIcon";
import EyeTracker from "@/components/EyeTracker";
import styles from "./not-found-page.module.css";

export default function NotFoundPage() {
  const pathname = usePathname();

  return (
    <section className={styles.page} aria-labelledby="not-found-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>404</p>
          <div className={`eyt-title-row ${styles.titleRow}`}>
            <h1 className={styles.title} id="not-found-title">
              Nothing here
            </h1>
            <div className="logo-test">
              <EyeTracker size={112} />
            </div>
          </div>
        </header>

        <p className={styles.copy}>
          No page at <code className={styles.path}>{pathname || "/"}</code>. Try
          the selected work or head home.
        </p>

        <nav className={styles.destinations} aria-label="Ways back into the portfolio">
          <Link className={styles.destination} href="/projects">
            <span>Selected work</span>
            <ArrowIcon className={styles.arrow} direction="right" width={20} height={20} />
          </Link>
          <Link className={styles.destination} href="/">
            <span>Home</span>
            <ArrowIcon className={styles.arrow} direction="right" width={20} height={20} />
          </Link>
        </nav>
      </div>
    </section>
  );
}
