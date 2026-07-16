import Link from "next/link";
import { LogoMark } from "@/components/ui/logo";

const productLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Protection Plan", href: "/#protection" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
];

const legalLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <LogoMark size={36} />
              <span className="text-lg font-extrabold tracking-tight">
                RepairNear
              </span>
            </div>
            <p className="mt-5 text-sm text-ink-soft max-w-sm leading-relaxed">
              Trusted device repair, right around the corner. Owned and
              operated by Davis Dag Electronics, registered in Ghana.
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wider text-ink mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wider text-ink mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row sm:justify-between gap-4 text-[13px] text-ink-muted">
          <p>
            © {new Date().getFullYear()} Davis Dag Electronics. All rights
            reserved.
          </p>
          <p>Made in Ghana.</p>
        </div>
      </div>
    </footer>
  );
}
