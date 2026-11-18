import type { Metadata } from "next";
import { siteUrl } from "../lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Klub MBC | Bimbel Privat & Klasikal di Klaten", template: "%s | Klub MBC Klaten" },
  description: "Klub MBC di Klaten menyediakan les pelajaran sekolah, mengaji, melukis, karate, serta kelas privat dan klasikal.",
  ...(siteUrl() ? { metadataBase: new URL(siteUrl()!) } : {}),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}