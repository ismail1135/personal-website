import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,      // Maksimum yakınlaştırmayı 1 ile sınırlar
  userScalable: false,  // Kullanıcının yakınlaştırmasını kapatır
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ismail altın",
  description: "My personal website, where I share my projects, blog posts, and more.",
  authors: [{ name: "ismail altın", url: "https://ismail-altin.com" }],
  keywords: ["ismail altın", "personal website", "portfolio", "blog", "projects", "web development", "software engineering", "programming", "technology", "ismail altın portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-full">{children}</body>
    </html>
  );
}
