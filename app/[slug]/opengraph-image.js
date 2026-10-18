import { ImageResponse } from "next/og";
import { getService } from "../data/servicesData";
import { notFound } from "next/navigation";

export const alt = "Ubaid Bin Waris — engineering services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }) {
  const service = getService((await params).slug);
  if (!service) notFound();
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#ffffff",
        color: "#0a0a0a",
        padding: "60px 72px",
        border: "2px solid #e5e5e5",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#6b6b6b",
          fontSize: 22,
        }}
      >
        <span>UBW / {service.category.toUpperCase()}</span>
        <span>{service.number}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ fontSize: 62, fontWeight: 700, letterSpacing: -2 }}>
          {service.headline}
        </div>
        <div
          style={{
            fontSize: 62,
            fontWeight: 700,
            letterSpacing: -2,
            color: "#6b6b6b",
          }}
        >
          {service.accent}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
          borderTop: "1px solid #e5e5e5",
          paddingTop: 24,
        }}
      >
        <span>Ubaid Bin Waris</span>
        <span>ubaidbinwaris.com</span>
      </div>
    </div>,
    size,
  );
}
