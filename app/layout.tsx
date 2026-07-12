import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RepairNear — Trusted device repair, near you",
  description:
    "Compare verified repair shops across Ghana, see the price upfront, and follow your device from drop-off to pickup.",
  keywords: [
    "device repair Ghana",
    "phone repair Ghana",
    "laptop repair Ghana",
    "trusted technicians",
    "RepairNear",
  ],
  openGraph: {
    title: "RepairNear — Trusted device repair, near you",
    description:
      "Compare verified repair shops across Ghana, see the price upfront, and follow your device from drop-off to pickup.",
    type: "website",
    locale: "en_GH",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${plexMono.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
