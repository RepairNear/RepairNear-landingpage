import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// iOS home-screen / bookmark icon. Apple rounds the corners itself, so we serve
// a full-bleed black square (no transparency) with the centered mark cropped in,
// framed the same way as the browser-tab icon for a consistent brand.

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const data = await readFile(
    join(process.cwd(), "public/photos/repairnear-logo.jpeg")
  );
  const src = `data:image/jpeg;base64,${data.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#0B0B0A",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={270} height={203} style={{ objectFit: "cover" }} alt="" />
      </div>
    ),
    { ...size }
  );
}
