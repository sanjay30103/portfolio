import { ImageResponse } from "next/og";
import { hero, site } from "@/data/content";

export const dynamic = "force-static";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Auto-generated social share image (used for Open Graph + Twitter).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0a0b",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          color: "#ededef",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#c8f169",
              color: "#0b0f02",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {site.initials}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>{`${site.name} · ${site.role}`}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 82, lineHeight: 1.04, letterSpacing: -3 }}>
          <span>{hero.headline}</span>
          <span style={{ color: "#a1a1aa" }}>{hero.headlineAccent}</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#c8f169" }}>{hero.techLine.join("  ·  ")}</div>
      </div>
    ),
    size,
  );
}
