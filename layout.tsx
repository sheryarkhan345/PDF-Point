import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pdfpoint.example"),
  title: { default: "PDF Point — PDF Work Made Easy", template: "%s | PDF Point" },
  description: "Simple online tools for everyday PDF and document tasks. Explore PDF Point's growing toolkit.",
  applicationName: "PDF Point",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Point",
    title: "PDF Point — PDF Work Made Easy",
    description: "All your PDF tools in one place.",
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
