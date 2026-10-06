"use client";

import { useLayoutEffect } from "react";

export default function ProjectScrollReset() {
  useLayoutEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    scrollToTop();
    requestAnimationFrame(scrollToTop);
  }, []);

  return null;
}
