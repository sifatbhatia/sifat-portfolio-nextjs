"use client";

import { useEffect, useState } from "react";

type Mode = "night" | "light";
const STORAGE_KEY = "siftion-showcase:mode";

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("night");

  useEffect(() => {
    const current = document.documentElement.dataset.mode;
    setMode(current === "light" ? "light" : "night");
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) return;
      const nextMode: Mode = event.newValue === "light" ? "light" : "night";
      document.documentElement.dataset.mode = nextMode;
      setMode(nextMode);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggle = () => {
    const nextMode: Mode =
      document.documentElement.dataset.mode === "light" ? "night" : "light";
    document.documentElement.dataset.mode = nextMode;
    setMode(nextMode);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextMode);
    } catch {
      // Switching themes does not depend on optional browser storage.
    }
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={`Use ${mode === "night" ? "light" : "dark"} theme`}
      aria-pressed={mode === "light"}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {mode === "night" ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M20 4l-2 2M6 18l-2 2" />
          </>
        ) : (
          <path d="M20 14.5A9 9 0 0 1 9.5 4a9 9 0 1 0 10.5 10.5Z" />
        )}
      </svg>
    </button>
  );
}
