import type { Metadata } from "next";
import { Cascadia_Code } from "next/font/google";
import "./globals.css";

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
  title: "Emmanuel David — Software Engineer · ML · AI · Creative",
  description:
    "Software engineer working across machine learning, applied AI, and creative practice — building intelligent systems and the interfaces that make them feel considered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cascadia.variable}>
        {children}
      </body>
    </html>
  );
}
