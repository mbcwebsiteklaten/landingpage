import Link from "next/link";
import PhotoGallery from "./PhotoGallery";
import { pageSeo } from "../../lib/seo";

export const metadata = pageSeo("/galeri", "Foto Kegiatan Belajar | Klub MBC Klaten", "Lihat foto kelas bersama, les privat, latihan dengan komputer, dan kelas melukis di bimbel Klub MBC Klaten.");

export default function GaleriPage() {
  return (
    <main className="inner-page">
      <header className="inner-hero inner-hero-pink">
        <div className="container">
          <Link className="back-link" href="/">← Kembali ke beranda</Link>
          <p className="eyebrow">GALERI KEGIATAN</p>
          <h1>Begini suasana<br /><em>belajar di sini.</em></h1>
          <p>Lihat foto anak-anak saat belajar bersama, les privat, melukis, dan mengerjakan latihan dengan komputer.</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <PhotoGallery />
        </div>
      </section>
    </main>
  );
}