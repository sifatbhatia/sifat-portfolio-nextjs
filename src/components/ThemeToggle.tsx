"use client";

import { useSyncExternalStore } from "react";

type Mode = "night" | "light";
const STORAGE_KEY = "siftion-showcase:mode";
const MODE_CHANGE_EVENT = "siftion:mode-change";

function subscribe(onChange: () => void) {
  const root = document.documentElement;
  root.addEventListener(MODE_CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);

  return () => {
    root.removeEventListener(MODE_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getModeSnapshot(): Mode {
  return document.documentElement.dataset.mode === "light" ? "light" : "night";
}

function getServerModeSnapshot(): Mode {
  return "night";
}

export default function ThemeToggle() {
  const mode = useSyncExternalStore(subscribe, getModeSnapshot, getServerModeSnapshot);

  const toggle = () => {
    const nextMode: Mode = mode === "night" ? "light" : "night";
    document.documentElement.dataset.mode = nextMode;
    window.localStorage.setItem(STORAGE_KEY, nextMode);
    document.documentElement.dispatchEvent(new Event(MODE_CHANGE_EVENT));
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={`Use ${mode === "night" ? "light" : "night"} theme`}
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
