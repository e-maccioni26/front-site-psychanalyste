import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/animations.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimationObserver from "../components/AnimationObserver";

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
    default: "Hervé Maccioni | Psychanalyste & Psychothérapeute à Bordeaux",
    template: "%s | Hervé Maccioni - Psychanalyste",
  },
  description: "Hervé Maccioni, psychanalyste et psychothérapeute à Bordeaux. Accompagnement en psychanalyse, psychothérapie individuelle, de couple et familiale. Retrouvez un équilibre et un bien-être durables.",
  keywords: ["psychanalyste bordeaux", "psychothérapeute bordeaux", "psychanalyse", "psychothérapie", "thérapie de couple bordeaux", "thérapie familiale bordeaux", "bien-être mental", "santé mentale", "cabinet psy bordeaux", "aide psychologique"],
  applicationName: "Hervé Maccioni - Psychanalyste",
  authors: [{ name: "Hervé Maccioni" }],
  creator: "Elone Maccioni", 
  publisher: "Hervé Maccioni",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hervemaccioni.fr'),
  openGraph: {
    title: "Hervé Maccioni | Psychanalyste & Psychothérapeute à Bordeaux",
    description: "Hervé Maccioni, psychanalyste et psychothérapeute à Bordeaux. Accompagnement en psychanalyse, psychothérapie individuelle, de couple et familiale. Retrouvez un équilibre et un bien-être durables.",
    url: "https://hervemaccioni.fr",
    siteName: "Hervé Maccioni - Psychanalyste",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hervé Maccioni - Psychanalyste & Psychothérapeute à Bordeaux",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hervé Maccioni | Psychanalyste & Psychothérapeute à Bordeaux",
    description: "Hervé Maccioni, psychanalyste et psychothérapeute à Bordeaux. Accompagnement en psychanalyse, psychothérapie individuelle, de couple et familiale. Retrouvez un équilibre et un bien-être durables.",
    images: ["/images/twitter-image.jpg"], 
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png", 
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar />
          {children}
          <Footer />
          <AnimationObserver />
      </body>
    </html>
  );
}