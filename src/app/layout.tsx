import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import { LenisProvider } from "@/context/LenisContext";
import GlowingCursor from "@/components/cursor/GlowingCursor";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
});

export const metadata: Metadata = {
  title: {
    default: "Sandesh KN — UI/UX Designer",
    template: "%s — Sandesh KN",
  },

  description:
    "Sandesh KN is a UI/UX & Product Designer who turns complex problems into simple, functional experiences. Inspired by travel, stories, and everyday moments.",

  metadataBase: new URL("https://www.sandesh.space"),

  keywords: [
    "Sandesh KN",
    "UI UX Designer",
    "Product Designer",
    "User Experience Design",
    "User Interface Design",
    "Digital Product Design",
    "Design Portfolio",
  ],

  authors: [{ name: "Sandesh KN" }],
  creator: "Sandesh KN",
  publisher: "Sandesh KN",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Sandesh KN — UI/UX Designer",
    description:
      "A UI/UX & Product Designer focused on turning complex problems into simple, functional experiences.",
    url: "https://www.sandesh.space",
    siteName: "Sandesh KN",
    locale: "en_US",
    type: "website",
    // images: [{ url: "/og.png", width: 1200, height: 630 }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sandesh KN — UI/UX Designer",
    description:
      "Turning complex problems into simple, functional experiences.",
    // images: ["/og.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} text-primary antialiased`}
      >
        <LenisProvider>
          <Navigation />
          <GlowingCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
