"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

export interface JournalEntry {
  id: string;
  title: string;
  timestamp: string;
  slug: string;
  content: string;
}

const markdownComponents: Components = {
  h1: ({ children }) => <h1 className="journal-modal-h1">{children}</h1>,
  h2: ({ children }) => <h2 className="journal-modal-h2">{children}</h2>,
  h3: ({ children }) => <h3 className="journal-modal-h3">{children}</h3>,
  p: ({ children }) => <p className="journal-modal-p">{children}</p>,
  ul: ({ children }) => <ul className="journal-modal-list">{children}</ul>,
  ol: ({ children }) => <ol className="journal-modal-list">{children}</ol>,
  li: ({ children }) => <li>{children}</li>,
  a: ({ href, children }) => <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noreferrer" : undefined}>{children}</a>,
  strong: ({ children }) => <strong>{children}</strong>,
  em: ({ children }) => <em>{children}</em>,
  blockquote: ({ children }) => <blockquote className="journal-modal-quote">{children}</blockquote>,
  hr: () => <hr className="journal-modal-rule" />,
  pre: ({ children }) => <pre className="journal-modal-code">{children}</pre>,
};

export default function JournalEntryModal({ entry, onClose }: { entry: JournalEntry; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") requestClose();
    };
    const requestClose = () => {
      setIsClosing(true);
      closeTimerRef.current = window.setTimeout(onClose, 220);
    };
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("journal-modal-open");
    window.dispatchEvent(new CustomEvent("journal-modal:toggle", { detail: { paused: true } }));
    document.addEventListener("keydown", onKeyDown);
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    return () => {
      if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("journal-modal-open");
      window.dispatchEvent(new CustomEvent("journal-modal:toggle", { detail: { paused: false } }));
      document.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [onClose]);

  const requestClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(onClose, 220);
  };

  return (
    <div className={`journal-modal-backdrop${isClosing ? " is-closing" : ""}`} role="presentation" onMouseDown={(event) => event.target === event.currentTarget && requestClose()}>
      <section className="journal-modal" data-lenis-prevent role="dialog" aria-modal="true" aria-labelledby="journal-modal-title">
        <button ref={closeButtonRef} type="button" className="journal-modal-close" onClick={requestClose} aria-label="Close entry"><span className="journal-modal-close-mark" aria-hidden="true" /></button>
        <header className="journal-modal-header">
          <div className="journal-modal-meta">
            <span>Signal</span>
            <span aria-hidden="true">·</span>
            <time>{new Date(entry.timestamp).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
          </div>
          <h2 id="journal-modal-title">{entry.title}</h2>
        </header>
        <div className="journal-modal-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{entry.content}</ReactMarkdown>
        </div>
      </section>
    </div>
  );
}
