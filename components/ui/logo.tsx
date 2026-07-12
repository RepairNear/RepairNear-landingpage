/**
 * LogoMark: black rounded square containing the RepairNear infinity+plug mark.
 *
 * The SVG below is a placeholder approximation. When the designed logo asset
 * is ready, drop it into `public/logo-mark.svg` and swap this for an <Image />.
 */

type LogoMarkProps = {
  size?: number;
  className?: string;
};

export function LogoMark({ size = 36, className }: LogoMarkProps) {
  const radius = Math.round(size * 0.25);
  const svgW = Math.round(size * 0.67);
  const svgH = Math.round(size * 0.44);

  return (
    <span
      className={className}
      style={{
        width: size,
        height: size,
        background: "var(--color-ink)",
        borderRadius: radius,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px -4px rgba(0,0,0,.25)",
      }}
    >
      <svg
        viewBox="0 0 60 40"
        width={svgW}
        height={svgH}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 8,20 C 8,10 22,10 30,20 C 38,30 52,30 52,20 C 52,10 38,10 30,20 C 22,30 8,30 8,20 Z" />
          <path d="M 47,13 L 53,7" />
          <line x1="50" y1="4" x2="52" y2="6" />
          <line x1="53" y1="1" x2="55" y2="3" />
        </g>
      </svg>
    </span>
  );
}
