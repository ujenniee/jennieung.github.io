import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#171717",
              color: "white",
              fontSize: 24,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            JU
          </div>
          <div style={{ fontSize: 26, color: "#666666" }}>{siteConfig.location}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, color: "#171717", letterSpacing: -2 }}>
            {siteConfig.name}
          </div>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#666666" }}
        >
          <div>{siteConfig.role}</div>
          <div style={{ color: "#dadada" }}>·</div>
          <div>University of Washington</div>
        </div>
      </div>
    ),
    size,
  );
}
