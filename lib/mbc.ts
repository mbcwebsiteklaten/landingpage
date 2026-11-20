export const whatsappNumber = "6281285934971";
export const whatsappUrl = (message = "Halo Klub MBC, saya ingin bertanya tentang program les yang tersedia.") => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export type Program = {
  slug: string;
  category: string;
  title: string;
  description: string;
  levels: string[];
  color: string;
  icon: string;
  benefits: string[];
  note?: string;
};

export const programs: Program[] = [
  { slug: "matematika", category: "Program Akademik", title: "Les Matematika", description: "Anak bisa mengulang materi yang belum dipahami dan berlatih soal sesuai jenjangnya.", levels: ["TK", "SD", "SMP", "SMA/K"], color: "yellow", icon: "∑", benefits: ["Memahami konsep sebelum mengerjakan soal", "Latihan soal bertahap", "Belajar sesuai materi yang sedang dibutuhkan"] },
  { slug: "bahasa", category: "Program Akademik", title: "Les Bahasa", description: "Ada pilihan Bahasa Jerman, Arab, Inggris, dan Indonesia untuk siswa SD hingga SMA/K.", levels: ["SD", "SMP", "SMA/K"], color: "blue", icon: "文", benefits: ["Bahasa Jerman", "Bahasa Arab", "Bahasa Inggris", "Bahasa Indonesia"] },
  { slug: "tka", category: "Program Akademik", title: "Pendampingan TKA", description: "Persiapan TKA lewat pembahasan materi, latihan soal, dan try out.", levels: ["SD", "SMP", "SMA"], color: "orange", icon: "★", benefits: ["Materi sesuai kisi-kisi TKA", "Latihan soal beserta pembahasannya", "Try out untuk melihat hasil latihan", "Kelas interaktif dengan jumlah siswa terbatas", "Evaluasi belajar secara berkala"] },
  { slug: "sains-ipas", category: "Program Akademik", title: "Les Sains / IPAS", description: "Membahas materi sains dan IPAS yang sedang dipelajari di sekolah.", levels: ["SD", "SMP", "SMA/K"], color: "green", icon: "⚗", benefits: ["Membahas konsep sains", "Mengaitkan materi dengan hal sehari-hari", "Berlatih mengerjakan soal"] },
  { slug: "calistung", category: "Program Pendidikan Dasar", title: "Les Calistung", description: "Anak belajar mengenal huruf, membaca, menulis, dan berhitung sambil bermain.", levels: ["Pra-TK", "TK", "SD"], color: "pink", icon: "abc", benefits: ["Mengenal huruf dan angka", "Belajar membaca", "Latihan menulis", "Belajar sambil bermain"] },
  { slug: "sempoa", category: "Program Pendidikan Dasar", title: "Les Sempoa", description: "Berlatih berhitung dengan sempoa sambil melatih fokus dan daya ingat.", levels: ["TK", "SD", "SMP"], color: "purple", icon: "◇", benefits: ["Berlatih fokus saat berhitung", "Berhitung lebih cepat dan tepat", "Melatih daya ingat", "Lebih berani mencoba soal hitungan"] },
  { slug: "mengaji", category: "Program Keagamaan", title: "Les Mengaji", description: "Belajar Iqra’, Al-Qur’an, tajwid, dan hafalan sesuai kemampuan peserta.", levels: ["TK", "SD", "SMP", "SMA/K", "Dewasa"], color: "teal", icon: "☾", benefits: ["Iqra’ dan Al-Qur’an", "Tajwid dan tahsin", "Hafalan surat pendek dan doa", "Praktik ibadah dan adab Islami"] },
  { slug: "melukis-mewarnai", category: "Kreativitas & Bakat", title: "Les Melukis & Mewarnai", description: "Anak mencoba teknik mewarnai dan belajar memadukan warna lewat karya sendiri.", levels: ["Pra-TK", "TK", "SD"], color: "pink", icon: "✎", benefits: ["Teknik dasar mewarnai", "Mengenal dan memadukan warna", "Berlatih rapi dan teliti", "Mencoba ide dan imajinasi sendiri"] },
  { slug: "karate-for-kids", category: "Kreativitas & Bakat", title: "Karate For Kids", description: "Latihan karate untuk anak bersama Ilham senpai setiap Senin dan Rabu.", levels: ["TK", "SD", "SMP"], color: "red", icon: "✦", benefits: ["Mengenal gerakan dasar karate", "Berlatih disiplin dan tanggung jawab", "Berani dan percaya diri saat berlatih"], note: "Senin & Rabu, 16.00–17.15 WIB · Pelataran Klinik Sehat Safinah · bersama Ilham senpai" },
  { slug: "mini-class", category: "Pilihan Kelas", title: "Program Les Mini Class", description: "Belajar bersama maksimal delapan siswa, dengan materi sekolah dan bantuan PR.", levels: ["Sesuai program"], color: "yellow", icon: "8", benefits: ["Maksimal 8 siswa", "Bisa bertanya dan berdiskusi di kelas", "Materi mengikuti pelajaran sekolah", "Bantuan mengerjakan PR"] },
  { slug: "les-privat", category: "Pilihan Kelas", title: "Les Privat Klub MBC", description: "Satu siswa belajar bersama satu guru; kelas privat juga bisa di rumah.", levels: ["Sesuai kebutuhan"], color: "blue", icon: "1:1", benefits: ["Satu siswa bersama satu guru", "Bisa belajar di rumah", "Bantuan mengerjakan PR", "Membahas materi yang masih sulit"] },
];

export function getProgram(slug: string) { return programs.find((program) => program.slug === slug); }