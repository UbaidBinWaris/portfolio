import { ImageResponse } from "next/og";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#081426",
        color: "#b4e9d9",
        fontSize: 132,
        fontWeight: 700,
        letterSpacing: -10,
      }}
    >
      UBW.
    </div>,
    size,
  );
}
