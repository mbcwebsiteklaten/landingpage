import Link from "next/link";
import { programs, whatsappUrl } from "../../lib/mbc";
import ProgramMap from "../../components/ProgramMap";
import { pageSeo } from "../../lib/seo";

export const metadata = pageSeo("/program", "Program Bimbel di Klaten | Klub MBC", "Lihat pilihan les di Klub MBC Klaten: matematika, bahasa, TKA, calistung, sempoa, mengaji, melukis, karate, Mini Class, dan les privat.");

export default function ProgramPage() {
  return (
    <main className="program-explorer">
      <header className="program-explorer-hero">
        <div className="container">
          <Link className="program-back" href="/">← Beranda</Link>
          <div className="program-hero-content">
            <div>
              <p className="program-kicker">Program belajar di Klub MBC · Klaten</p>
              <h1>Lagi cari les<br /><span>untuk anak?</span></h1>
              <p className="program-hero-copy">Di sini ada les pelajaran sekolah, mengaji, melukis, sampai karate. Lihat pilihannya, lalu tanyakan jadwalnya kepada admin.</p>
            </div>
            <div className="program-facts" aria-label="Informasi singkat Klub MBC">
              <div><strong>{programs.length}</strong><span>pilihan program</span></div>
              <div><strong>2</strong><span>cara belajar</span></div>
            </div>
          </div>
        </div>
      </header>

      <section className="program-map section" aria-labelledby="program-map-heading">
        <div className="container">
          <div className="program-map-intro">
            <div><p className="program-kicker">Daftar les</p><h2 id="program-map-heading">Mau belajar apa?</h2></div>
            <p>Pilih salah satu program untuk melihat jenjang, materi, dan informasi pendaftarannya.</p>
          </div>
          <ProgramMap />
        </div>
      </section>

      <section className="program-contact-cta">
        <div className="container program-contact-inner">
          <div><p className="program-kicker">Belum yakin?</p><h2>Belum tahu kelas mana<br /><span>yang cocok untuk anak?</span></h2></div>
          <a className="button button-green" href={whatsappUrl()} target="_blank" rel="noreferrer">Tanya admin lewat WhatsApp ↗</a>
        </div>
      </section>
    </main>
  );
}