import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Wifi, Zap, BookOpen, Monitor, Trophy, Heart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import imgMushola from "@/assets/fasilitas-mushola.jpg";
import imgPerpus from "@/assets/fasilitas-perpus.jpg";
import imgLab from "@/assets/fasilitas-lab.jpg";
import imgLapangan from "@/assets/fasilitas-lapangan.jpg";
import imgClassroom from "@/assets/students-classroom.jpg";

export const Route = createFileRoute("/fasilitas")({
  component: FasilitasPage,
});

const fasilitas = [
  { img: imgMushola, name: "Mushola Sekolah", desc: "Tempat ibadah luas untuk sholat berjamaah dan pembiasaan ibadah harian siswa." },
  { img: imgPerpus, name: "Perpustakaan", desc: "Koleksi buku pelajaran, agama, dan literasi umum yang lengkap." },
  { img: imgLab, name: "Lab Komputer", desc: "Unit komputer terhubung internet untuk pembelajaran TIK dan ANBK." },
  { img: imgLapangan, name: "Lapangan Olahraga", desc: "Lapangan futsal & basket untuk PJOK dan kegiatan ekstrakurikuler." },
  { img: imgClassroom, name: "Ruang Kelas Nyaman", desc: "Ruang kelas terang, berventilasi baik, dan kondusif untuk belajar." },
  { img: imgPerpus, name: "UKS & Konseling", desc: "Layanan kesehatan sekolah dan bimbingan konseling untuk siswa." },
];

const features = [
  { icon: Wifi, t: "WiFi Sekolah", s: "Akses internet di area sekolah" },
  { icon: Zap, t: "Listrik PLN", s: "Daya cukup untuk seluruh kegiatan" },
  { icon: BookOpen, t: "Kurikulum Terintegrasi", s: "KTSP + nilai keislaman" },
  { icon: Monitor, t: "Pembelajaran Digital", s: "Dukungan TIK & ANBK" },
  { icon: Trophy, t: "Pembinaan Prestasi", s: "Akademik & non-akademik" },
  { icon: Heart, t: "Lingkungan Religius", s: "Budaya Islami sehari-hari" },
];

function FasilitasPage() {
  useEffect(() => {
    document.title = "Fasilitas Sekolah — SMP Muhammadiyah 7 Wuluhan";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Sarana & Prasarana"
        title="Fasilitas Pendukung Belajar"
        description="Lingkungan sekolah yang nyaman, lengkap, dan religius untuk mendukung tumbuh-kembang pelajar."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fasilitas.map((f) => (
            <article key={f.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant">
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={f.img}
                  alt={f.name}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-primary-deep">{f.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-surface p-8 shadow-card sm:p-10">
          <h2 className="font-display text-2xl font-bold text-primary-deep">Keunggulan Sekolah</h2>
          <p className="mt-2 text-sm text-muted-foreground">Hal-hal yang menjadi nilai tambah pengalaman belajar siswa.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.t} className="rounded-2xl border border-border bg-background p-5">
                <f.icon className="h-6 w-6 text-gold" />
                <div className="mt-3 font-display font-bold text-primary-deep">{f.t}</div>
                <div className="text-sm text-muted-foreground">{f.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
