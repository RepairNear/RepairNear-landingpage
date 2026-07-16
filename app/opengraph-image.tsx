import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Social share card (Open Graph / Twitter) — brand cream canvas, the
// RepairNear tile mark, and the hero headline in Manrope ExtraBold.

export const alt =
  "RepairNear — Find trusted phone, laptop and device repair technicians near you in Ghana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [logoData, manropeExtraBold] = await Promise.all([
    readFile(join(process.cwd(), "public/photos/repairnear-logo.jpeg")),
    readFile(join(process.cwd(), "assets/fonts/Manrope-ExtraBold.ttf")),
  ]);
  const logoSrc = `data:image/jpeg;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#F6F4EF",
          fontFamily: "Manrope",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 10,
            display: "flex",
            backgroundColor: "#F2782E",
          }}
        />

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={92}
            height={92}
            style={{ objectFit: "cover", borderRadius: 22 }}
            alt=""
          />
          <div
            style={{
              display: "flex",
              fontSize: 40,
              color: "#0B0B0A",
              letterSpacing: "-0.02em",
            }}
          >
            RepairNear
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 84,
            lineHeight: 1.04,
            letterSpacing: "-0.035em",
            color: "#0B0B0A",
          }}
        >
          <div style={{ display: "flex" }}>Find trusted repair</div>
          <div style={{ display: "flex", gap: 22 }}>
            technicians<span style={{ color: "#F2782E" }}>Near You.</span>
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 27, color: "#6B6A66" }}>
            Verified repair shops across Ghana
          </div>
          <div style={{ display: "flex", fontSize: 27, color: "#146357" }}>
            www.repairnearapp.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Manrope",
          data: manropeExtraBold,
          style: "normal",
          weight: 800,
        },
      ],
    }
  );
}
