import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono, Cascadia_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  display: "swap",
});

const cascadia = Cascadia_Code({
  variable: "--font-cascadia",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  // Next ships no metric overrides for Cascadia Code, so it cannot build a
  // size-adjusted fallback. Opting out keeps the fallback stable instead of
  // reflowing on swap.
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Emmanuel David — Full Stack & ML Developer",
  description:
    "Full Stack & Machine Learning Developer crafting scalable web systems, intelligent APIs, and high-performance data architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} ${cascadia.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
