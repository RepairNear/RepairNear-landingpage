/**
 * LogoMark: the RepairNear infinity+plug mark on a black rounded tile.
 *
 * Renders the brand asset at public/photos/repairnear-logo.jpeg. The mark is
 * white on black, so it sits on a black tile to stay visible on light surfaces.
 * Shared by the nav, the inline hero mark, and the footer.
 */

import Image from "next/image";

type LogoMarkProps = {
  size?: number;
  className?: string;
};

export function LogoMark({ size = 36, className }: LogoMarkProps) {
  const radius = Math.round(size * 0.25);

  return (
    <span
      className={className}
      style={{
        position: "relative",
        width: size,
        height: size,
        background: "var(--color-ink)",
        borderRadius: radius,
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "middle",
        boxShadow: "0 4px 10px -4px rgba(0,0,0,.25)",
      }}
    >
      <Image
        src="/photos/repairnear-logo.jpeg"
        alt="RepairNear"
        fill
        sizes={`${size}px`}
        className="object-cover"
      />
    </span>
  );
}
