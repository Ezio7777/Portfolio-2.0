import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunit Portfolio",
  description:
    "Portfolio of Sunit Pal — React Developer and Full-Stack Engineer specialising in high-performance web & mobile applications, AI-integrated systems, and modern frontend architectures.",
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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Sunit Portfolio",
    description:
      "Portfolio of Sunit Pal — building high-performance web and mobile applications.",
    siteName: "Sunit Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunit Portfolio",
    description: "Building high-performance web and mobile applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08080a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise-overlay antialiased">{children}</body>
    </html>
  );
}
