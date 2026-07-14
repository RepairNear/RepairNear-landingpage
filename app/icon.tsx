import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Tab / title-bar icon — the RepairNear mark on its black tile, framed square.
// The source asset is a padded 4:3 JPEG, so we cover-crop into the centered
// mark instead of letting the browser squish the whole landscape image.

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const data = await readFile(
    join(process.cwd(), "public/photos/repairnear-logo.jpeg")
  );
  const src = `data:image/jpeg;base64,${data.toString("base64")}`;

  // Transparent canvas + rounded image = rounded corners that drop out of the
  // PNG (Satori won't clip an overflowing child to a rounded container, so the
  // radius has to live on the image itself).
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          width={64}
          height={64}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 14,
          }}
          alt=""
        />
      </div>
    ),
    { ...size }
  );
}
