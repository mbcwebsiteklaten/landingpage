import type { Metadata } from "next";

/** Only use an explicitly configured, verified public origin. */
export function siteUrl(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return undefined;
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" && !(url.protocol === "http:" && url.hostname === "localhost")) return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}

export function pageSeo(path: string, title: string, description: string): Metadata {
  const origin = siteUrl();
  const url = origin ? `${origin}${path}` : undefined;
  return {
    title: { absolute: title },
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      title,
      description,
      type: "website",
      locale: "id_ID",
      siteName: "Klub MBC",
      ...(url ? { url, images: [{ url: `${origin}/foto-foto/kbm-2.jpeg`, width: 1600, height: 1200, alt: "Kegiatan belajar siswa di Klub MBC Klaten" }] } : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}