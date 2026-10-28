"use client";

import type { CSSProperties } from "react";

type MaterialIconProps = {
  name: string;
  className?: string;
  style?: CSSProperties;
};

const svgPaths: Record<string, string> = {
  arrow_forward: "M4 12h15M13 5l7 7-7 7",
  arrow_upward: "M12 20V5m-7 7 7-7 7 7",
  arrow_outward: "M5 19 19 5M6 5h13v13",
  north_east: "M5 19 19 5M6 5h13v13",
  check: "m5 12 4 4L19 6",
};

/** SVG for directional controls; the local symbol font covers other icons. */
export default function MaterialIcon({
  name,
  className = "",
  style,
}: MaterialIconProps) {
  if (svgPaths[name])
    return (
      <svg
        className={className}
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          width: "1em",
          height: "1em",
          display: "inline-block",
          verticalAlign: "middle",
          ...style,
        }}
      >
        <path d={svgPaths[name]} />
      </svg>
    );
  return (
    <span
      className={`material-symbols-outlined ${className}`.trim()}
      aria-hidden="true"
      style={style}
    >
      {name}
    </span>
  );
}
