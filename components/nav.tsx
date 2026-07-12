import Link from "next/link";
import { LogoMark } from "@/components/ui/logo";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Protection", href: "#protection" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-30 bg-bg">
      <div className="container-page flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark size={36} />
          <span className="text-lg font-extrabold tracking-tight">
            RepairNear
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex px-5 py-2 text-sm font-semibold rounded-[11px] bg-accent text-white transition-colors hover:bg-accent-deep"
        >
          Get the app
        </a>
      </div>
    </nav>
  );
}
