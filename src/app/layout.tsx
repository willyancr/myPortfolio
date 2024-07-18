import { IBM_Plex_Mono, Inter, Monoton, Rubik } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});
const monoton = Monoton({
  variable: '--font-monoton',
  subsets: ['latin'],
  weight: ['400'],
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  weight: ['700'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${plexMono.variable} ${monoton.variable} ${rubik.variable} `}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
