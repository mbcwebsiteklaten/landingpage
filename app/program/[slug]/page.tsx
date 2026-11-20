import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgram, programs, whatsappUrl } from "../../../lib/mbc";
import { breadcrumbSchema, pageSeo } from "../../../lib/seo";

export function generateStaticParams() { return programs.map((program) => ({ slug: program.slug })); }
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const program = getProgram(params.slug);
  if (!program) return { title: "Program tidak ditemukan" };
  return pageSeo(`/program/${program.slug}`, `${program.title} di Klaten | Klub MBC`, `${program.description} Tersedia untuk ${program.levels.join(", ")}. Tanyakan jadwal les di Klub MBC Klaten.`);
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = getProgram(params.slug);
  if (!program) notFound();
  const breadcrumb = breadcrumbSchema([{ name: "Beranda", path: "/" }, { name: "Program", path: "/program" }, { name: program.title, path: `/program/${program.slug}` }]);
  return <main className="inner-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} /><section className={`detail-hero ${program.color}`}><div className="container"><Link className="back-link" href="/program">← Semua program</Link><span className="detail-icon">{program.icon}</span><p className="eyebrow">{program.category}</p><h1>{program.title}</h1><p>{program.description}</p></div></section><section className="section"><div className="container detail-grid"><article className="detail-main"><p className="eyebrow">TENTANG KELAS INI</p><h2>Yang dipelajari<br /><em>di kelas ini.</em></h2><ul>{program.benefits.map((benefit) => <li key={benefit}><span>✓</span>{benefit}</li>)}</ul>{program.note && <div className="detail-note">{program.note}</div>}</article><aside className="detail-aside"><p className="eyebrow">JENJANG TERSEDIA</p><div className="detail-levels">{program.levels.map((level) => <span key={level}>{level}</span>)}</div><h3>Ingin tahu jadwalnya?</h3><p>Chat admin untuk menanyakan jadwal, tempat belajar, dan cara mendaftarnya.</p><a className="button button-green" href={whatsappUrl(`Halo Klub MBC, saya ingin bertanya tentang ${program.title}. Apakah masih ada kelas yang tersedia?`)} target="_blank" rel="noreferrer">Tanya tentang kelas ini ↗</a></aside></div></section></main>;
}