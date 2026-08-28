import type { Metadata, Viewport } from "next";
import "./globals.css";

const deploymentUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (deploymentUrl ? `https://${deploymentUrl}` : "http://localhost:3000");

const description = "The official home of $DOBERMANN on Solana.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "$DOBERMANN | StealthDobie",
  description,
  applicationName: "StealthDobie",
  icons: {
    icon: "/stealthdobie-emblem.png",
    apple: "/stealthdobie-emblem.png",
  },
  openGraph: {
    title: "$DOBERMANN",
    description,
    siteName: "StealthDobie",
    type: "website",
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
    title: "$DOBERMANN",
    description,
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
      <body>{children}</body>
    </html>
  );
}
