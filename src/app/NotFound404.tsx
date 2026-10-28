"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import ArrowIcon from "@/components/ArrowIcon";
import EyeTracker from "@/components/EyeTracker";
import styles from "./not-found-404.module.css";

export default function NotFound404() {
  const pathname = usePathname();

  return (
    <section className={styles.page} aria-labelledby="not-found-title">
      <div className={styles.frame}>
        <div className={styles.figure}>
          <span className={styles.digit} aria-hidden="true">4</span>
          <span className={styles.zero}>
            <EyeTracker
              size={240}
              shape="Circle"
              follow={55}
              bounce={18}
              eyeScale={1.25}
            />
          </span>
          <span className={styles.digit} aria-hidden="true">4</span>
        </div>

        <div className={styles.message}>
          <h1 className={styles.title} id="not-found-title">
            Nothing at this address
          </h1>
          <p className={styles.copy}>
            That path doesn’t exist. Start with the work or head home.
          </p>

          <div className={styles.address}>
            <span className={styles.addressLabel}>You were looking for</span>
            <code className={styles.addressPath}>{pathname || "/"}</code>
          </div>

          <nav className={styles.destinations} aria-label="Ways back into the portfolio">
            <Link className={styles.primary} href="/projects">
              <span>Browse selected work</span>
              <ArrowIcon direction="right" width={18} height={18} />
            </Link>
            <Link className={styles.secondary} href="/">
              Back to the homepage
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
