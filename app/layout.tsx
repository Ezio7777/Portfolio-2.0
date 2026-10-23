import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-2-0-six-wine.vercel.app"),
  title: "Sunit Pal — Software Developer",
  description:
    "Portfolio of Sunit Pal — Software Developer building full-stack web and mobile apps with React, Next.js, React Native, Node.js, FastAPI and AI-powered features.",
  keywords: [
    "Sunit Pal",
    "React Developer",
    "Full-Stack Engineer",
    "Next.js",
    "React Native",
    "TypeScript",
    "Portfolio",
    "Web Developer India",
    "FastAPI",
    "AI Developer",
  ],
  authors: [{ name: "Sunit Pal", url: "https://github.com/Ezio7777" }],
  creator: "Sunit Pal",
  icons: {
    icon: "/favicon.svg?v=3",
    shortcut: "/favicon.svg?v=3",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Sunit Pal — Software Developer",
    description:
      "Full-stack and AI-powered web & mobile applications.",
    siteName: "Sunit Pal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunit Pal — Software Developer",
    description: "Full-stack and AI-powered web & mobile applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0F13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
