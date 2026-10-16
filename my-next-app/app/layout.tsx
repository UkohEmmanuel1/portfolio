import type { Metadata } from "next";

import "./globals.css";

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
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
