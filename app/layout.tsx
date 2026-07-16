import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import { site } from "@/lib/site";

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
  metadataBase: new URL(site.url),
  title: {
    default:
      "RepairNear — Phone, Laptop & Device Repair Near You in Ghana",
    template: "%s | RepairNear",
  },
  description:
    "Find trusted phone, tablet, laptop and computer repair technicians near you in Ghana. Compare verified repair shops by rating and distance, book a repair, and track your device from drop-off to pickup.",
  applicationName: site.name,
  category: "technology",
  keywords: [
    "phone repair Ghana",
    "phone repair near me",
    "laptop repair Ghana",
    "laptop repair Accra",
    "iPhone repair Ghana",
    "computer repair Ghana",
    "tablet repair Ghana",
    "device repair app",
    "verified repair technicians Ghana",
    "repair shops near me",
    "RepairNear",
  ],
  openGraph: {
    title: "RepairNear — Phone, Laptop & Device Repair Near You in Ghana",
    description:
      "Compare verified repair shops across Ghana by rating and distance, book a repair, and track your device from drop-off to pickup.",
    type: "website",
    locale: "en_GH",
    url: "/",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "RepairNear — Phone, Laptop & Device Repair Near You in Ghana",
    description:
      "Compare verified repair shops across Ghana by rating and distance, book a repair, and track your device from drop-off to pickup.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  itunes: {
    appId: site.appStoreId,
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
