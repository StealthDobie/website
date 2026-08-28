import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { siteDescription, siteName, siteUrl, tokenTicker } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteName} (${tokenTicker}) | Official Solana Token`,
  description: siteDescription,
  applicationName: siteName,
  alternates: {
    canonical: siteUrl,
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
  openGraph: {
    title: `${siteName} (${tokenTicker})`,
    description: siteDescription,
    siteName,
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/og.png",
        width: 1664,
        height: 936,
        alt: "$DOBERMANN pixel-art tactical Dobermann and wordmark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} (${tokenTicker})`,
    description: siteDescription,
    site: "@StealthDobie",
    creator: "@StealthDobie",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#030605",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
