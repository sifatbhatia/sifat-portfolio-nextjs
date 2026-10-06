import { ImageResponse } from "next/og";

export const alt = "Sifat Bhatia — Design Engineer & Creative Technologist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#141412",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(241,238,231,0.45)",
          }}
        >
          Los Angeles &middot; Design Engineer
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 108,
              lineHeight: 1,
              letterSpacing: -3,
              color: "#f1eee7",
            }}
          >
            Sifat Bhatia
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 32,
              color: "rgba(241,238,231,0.6)",
            }}
          >
            Building websites for people with worlds worth meeting.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 24,
            color: "#8ba69d",
          }}
        >
          sifat.tech
        </div>
      </div>
    ),
    { ...size }
  );
}
