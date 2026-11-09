import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getArticle, formatDate } from "../../data/articlesData";

export const alt = "Ubaid Bin Waris: engineering article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
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
        <span>UBW / ARTICLE</span>
        <span>{formatDate(article.published).toUpperCase()}</span>
      </div>
      <div style={{ fontSize: 58, fontWeight: 700, letterSpacing: -2, lineHeight: 1.1 }}>
        {article.title}
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
