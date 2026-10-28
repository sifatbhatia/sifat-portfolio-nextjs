"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
  type KeyboardEvent,
} from "react";
import ArrowIcon from "./ArrowIcon";

function pausePage(paused: boolean) {
  document.documentElement.classList.toggle("cs-viewer-open", paused);
  window.dispatchEvent(
    new CustomEvent("journal-modal:toggle", { detail: { paused } }),
  );
}

export default function ProjectImage({
  src,
  caption,
  width,
  height,
  priority = false,
  className = "",
}: {
  src: string;
  caption: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLAnchorElement | null>(null);
  const [open, setOpen] = useState(false);
  const captionId = useId();

  useEffect(() => {
    const modal = dialog.current;
    return () => {
      if (modal?.open) {
        modal.close();
        pausePage(false);
      }
    };
  }, []);

  function enlarge(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !dialog.current?.showModal
    )
      return;
    event.preventDefault();
    trigger.current = event.currentTarget;
    setOpen(true);
    dialog.current.showModal();
    pausePage(true);
  }

  function close() {
    setOpen(false);
    pausePage(false);
    trigger.current?.focus({ preventScroll: true });
  }

  function containFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const controls = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>("button, a[href]"),
    );
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
    <figure className={`cs-image ${className}`}>
      <a
        className="cs-image-link"
        href={src}
        target="_blank"
        rel="noreferrer"
        onClick={enlarge}
        aria-label={`Enlarge: ${caption}`}
      >
        <Image
          src={src}
          alt={caption}
          width={width}
          height={height}
          priority={priority}
          sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1600px) 90vw, 1440px"
        />
      </a>
      <figcaption>
        <span>{caption}</span>
        <a href={src} target="_blank" rel="noreferrer" onClick={enlarge}>
          Enlarge
          <ArrowIcon direction="up-right" />
        </a>
      </figcaption>
      <dialog
        ref={dialog}
        className="cs-dialog"
        aria-labelledby={captionId}
        onClose={close}
        onKeyDown={containFocus}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="cs-dialog-panel">
          <div className="cs-dialog-bar">
            <p id={captionId}>{caption}</p>
            <a
              className="cs-text-link"
              href={src}
              target="_blank"
              rel="noreferrer"
            >
              Open original
              <ArrowIcon direction="up-right" />
            </a>
            <button
              className="sf-button cs-close"
              type="button"
              onClick={() => dialog.current?.close()}
              aria-label="Close image"
              autoFocus
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <div className="cs-dialog-scroll" data-lenis-prevent>
            {open && (
              <img src={src} alt={caption} width={width} height={height} />
            )}
          </div>
        </div>
      </dialog>
    </figure>
  );
}
