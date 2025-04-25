import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Media Tracker",
  description:
    "An easy and organized way to track your favorite anime, manga, movies, and TV shows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
