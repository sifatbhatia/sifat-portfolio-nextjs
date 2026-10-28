"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import ArrowIcon from "@/components/ArrowIcon";
import EyeTracker from "@/components/EyeTracker";
import styles from "./not-found-wayfinder.module.css";

const destinations = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/journal", label: "Journal" },
];

export default function NotFoundWayfinder() {
  const pathname = usePathname();

  return (
    <section className={styles.page} aria-labelledby="not-found-title">
      <div className={styles.frame}>
        <header className={styles.intro}>
          <p className={styles.kicker}>Page not found</p>
          <h1 className={styles.title} id="not-found-title">
            This route stops here
          </h1>
          <p className={styles.copy}>
            The address below doesn’t resolve. Choose a route back into the site.
          </p>
        </header>

        <div className={styles.routeMap}>
          <div className={styles.requestedAddress}>
            <span className={styles.addressLabel}>The address</span>
            <code className={styles.addressPath}>{pathname || "/"}</code>
          </div>

          <span className={styles.routeLine} aria-hidden="true" />

          <div className={styles.waypoint}>
            <EyeTracker size={120} follow={40} bounce={30} />
          </div>

          <span className={styles.branchLine} aria-hidden="true" />

          <nav className={styles.destinations} aria-label="Choose another page">
            {destinations.map(({ href, label }) => (
              <Link className={styles.destination} href={href} key={href}>
                <span>{label}</span>
                <ArrowIcon
                  className={styles.arrow}
                  direction="up-right"
                  width={18}
                  height={18}
                />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
