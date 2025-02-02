import { IBM_Plex_Mono, Inter, Monoton, Rubik } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const monoton = Monoton({
  variable: "--font-monoton",
  subsets: ["latin"],
  weight: ["400"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio - Willyan Costa",
    default: "Portfolio - Willyan Costa",
  },
  description: "Portfolio de Willyan Costa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${plexMono.variable} ${monoton.variable} ${rubik.variable} scroll-smooth `}
    >
      <body className="bgbody">{children}</body>
    </html>
  );
}
