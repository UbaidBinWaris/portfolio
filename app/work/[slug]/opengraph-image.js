import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getWork, projectStatus } from "../../data/workData";

export const alt = "Ubaid Bin Waris — project case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }) {
  const project = getWork((await params).slug);
  if (!project) notFound();
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
        <span>UBW / {project.category.toUpperCase()}</span>
        <span>{projectStatus(project).toUpperCase()}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ fontSize: 60, fontWeight: 700, letterSpacing: -2 }}>
          {project.title}
        </div>
        <div style={{ fontSize: 28, color: "#525252", lineHeight: 1.4 }}>
          {project.stack.slice(0, 5).join("  ·  ")}
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
