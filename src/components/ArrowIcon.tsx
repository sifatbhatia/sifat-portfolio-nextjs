import type { SVGProps } from "react";

type Direction = "right" | "up-right" | "left" | "up";

const paths: Record<Direction, string> = {
  right: "M4 12h15M13 5l7 7-7 7",
  "up-right": "M5 19 19 5M6 5h13v13",
  left: "M20 12H5m7 7-7-7 7-7",
  up: "M12 20V5m-7 7 7-7 7 7",
};

export default function ArrowIcon({
  direction = "right",
  ...props
}: SVGProps<SVGSVGElement> & { direction?: Direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d={paths[direction]} />
    </svg>
  );
}
