"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  children: string;
  style?: React.CSSProperties;
  className?: string;
  split?: "words" | "chars" | "lines";
  delay?: number;
  start?: string;
}

export default function AnimatedText({
  as: Tag = "p",
  children,
  style,
  className,
  split = "lines",
  delay = 0,
  start = "top 75%",
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets =
        split === "chars"
          ? [...el.querySelectorAll(".at-char")]
          : split === "lines"
            ? [el]
            : [...el.querySelectorAll(".at-word")];

      gsap.fromTo(
        targets,
        { opacity: 0, y: split === "chars" ? 20 : split === "lines" ? 24 : 30, rotateX: split === "chars" ? -40 : 0, scale: split === "lines" ? 0.96 : 1 },
        {
          opacity: 1, y: 0, rotateX: 0, scale: 1,
          duration: split === "chars" ? 0.5 : split === "lines" ? 0.8 : 0.7,
          stagger: split === "chars" ? 0.02 : 0.06,
          ease: split === "lines" ? "expo.out" : "power3.out",
          delay,
          scrollTrigger: { trigger: el, start, toggleActions: "play none none none" },
        }
      );
    });

    return () => ctx.revert();
  }, [children, split, delay, start]);

  if (split === "lines") {
    return <Tag ref={ref as any} className={className} style={style}>{children}</Tag>;
  }

  const words = children.split(" ");

  if (split === "chars") {
    return (
      <Tag ref={ref as any} className={className} style={{ ...style, display: "inline-flex", flexWrap: "wrap", gap: "0.15em", justifyContent: "center" }}>
        {words.map((word, wi) => (
          <span key={wi} style={{ display: "inline-flex", overflow: "hidden", paddingBottom: "0.12em" }}>
            {word.split("").map((char, ci) => (
              <span key={ci} className="at-char" style={{ display: "inline-block" }}>
                {char}
              </span>
            ))}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag ref={ref as any} className={className} style={style}>
      {words.map((word, i) => (
        <span key={i} className="at-word" style={{ display: "inline-block", overflow: "hidden", marginRight: "0.25em", verticalAlign: "top" }}>
          {word}
        </span>
      ))}
    </Tag>
  );
}
