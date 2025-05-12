import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { poppins } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Media Tracker",
  description:
    "An easy and organized way to track your favorite anime and mangas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${poppins.className} min-h-screen bg-background antialiased`
        )}
      >
        {children}
      </body>
    </html>
  );
}
