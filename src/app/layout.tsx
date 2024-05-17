import type { Metadata } from "next";
import localFont from "@next/font/local";
import "./globals.css";

const geist = localFont({
  src: [
    {
      path: "../../public/fonts/Geist-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Geist-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Chilli Guava",
  description: "Build better software faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans`}>{children}</body>
    </html>
  );
}
