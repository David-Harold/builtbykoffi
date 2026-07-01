import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David-Harold Koffi-Essiben",
  description: "Software engineer and builder based in Kigali. Building at the intersection of technology and Africa.",
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
      <body className="min-h-full flex flex-col bg-[#0F0F0F]">
        <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between border-b border-[#1a1a1a]">
          <a href="/" className="text-[#EDEBE4] font-medium text-sm tracking-widest">
            builtbykoffi
          </a>
          <div className="flex gap-8">
            <a href="#work" className="text-[#3A3A38] hover:text-[#EDEBE4] text-sm transition">Work</a>
            <a href="#about" className="text-[#3A3A38] hover:text-[#EDEBE4] text-sm transition">About</a>
            <a href="#contact" className="text-[#3A3A38] hover:text-[#EDEBE4] text-sm transition">Contact</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}