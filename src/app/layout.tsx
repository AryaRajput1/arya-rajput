import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/header/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Arya Rajput – Full‑Stack Developer',
    template: '%s | Arya Rajput',
  },
  description:
    'Portfolio of Arya Rajput – 25‑year‑old software engineer crafting performant web & mobile experiences with TypeScript, React, Next.js, Vue.js and cloud‑native tooling.',
  applicationName: 'Arya Rajput Portfolio',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Arya Rajput',
    'software developer',
    'Frontend Developer',
    'full‑stack',
    'Next.js',
    'TypeScript',
    'React',
    'portfolio',
    'web performance',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-gray-800 h-full">
          <Navbar />
          <main className="max-w-6xl mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
