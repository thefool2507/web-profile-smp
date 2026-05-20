import { useEffect, useState, useCallback } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Trophy,
  Users,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Building2,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import classroom from "@/assets/students-classroom.jpg";
import heroSchool from "@/assets/hero-school.jpg";
import galleryPraying from "@/assets/ekskul-ipm.jpg";
import galleryCeremony from "@/assets/gallery-ceremony.jpg";
import galleryTrophy from "@/assets/gallery-trophy.jpg";
import prestasiHw from "@/assets/ekskul-hw.jpg";
import prestasiKaligrafi from "@/assets/prestasi-kaligrafi.jpg";
import { PrestasiCounter } from "@/components/PrestasiCounter";
import { GalleryGrid } from "@/components/GalleryGrid";
import { TeachersSection } from "@/components/TeachersSection";
import { Testimonials } from "@/components/Testimonials";
import { PrestasiShowcase } from "@/components/PrestasiShowcase";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const SLIDES = [
  {
    img: heroSchool,
    label: "Lingkungan Belajar",
  },
  {
    img: galleryPraying,
    caption: "Aktualisasi hidup berorganisasi",
    label: "Organisasi",
  },
  {
    img: galleryCeremony,
    caption: "Upacara dan kegiatan kesiswaan",
    label: "Kedisiplinan",
  },
  {
    img: galleryTrophy,
    caption: "Prestasi gemilang di berbagai lomba",
    label: "Berkarir",
  },
  {
    img: prestasiHw,
    caption: "Hizbul Wathan organisasi kepanduan Muhammadiyah",
    label: "Kepanduan",
  },
  {
    img: prestasiKaligrafi,
    caption: "Juara 1 Cerdas Cermat tingkat Jember Selatan",
    label: "Berprestasi",
  },
];

const INTERVAL_MS = 5000;

function HeroSlider() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setActive((idx + SLIDES.length) % SLIDES.length);
        setAnimating(false);
      }, 400);
    },
    [animating],
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // auto-advance
  useEffect(() => {
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative h-[92vh] min-h-[580px] overflow-hidden">
      {/* Background slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.img}
          aria-hidden={i !== active}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === active && !animating ? 1 : 0 }}
        >
          <img
            src={slide.img}
            alt={slide.caption}
            className="h-full w-full object-cover object-center"
            loading={i === 0 ? "eager" : "lazy"}
          />
          {/* overlay gelap */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
      ))}

      {/* Konten utama */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white lg:px-8">
        {/* Label slide aktif */}
        <span
          key={active + "-label"}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm"
          style={{ animation: "fadeUp 0.5s ease both" }}
        >
          <Sparkles className="h-3.5 w-3.5" />
          {SLIDES[active].label} · Sejak 1968
        </span>

        <h1
          key={active + "-h1"}
          className="max-w-4xl font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
          style={{ animation: "fadeUp 0.5s 0.1s ease both" }}
        >
          <h1>
            SMP{" "}
            <span className="text-gold whitespace-nowrap">
              Muhammadiyah 7
            </span>{" "}
            Wuluhan
          </h1>
        </h1>

        <p
          key={active + "-p"}
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
          style={{ animation: "fadeUp 0.5s 0.2s ease both" }}
        >
          {SLIDES[active].caption}
        </p>

        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          style={{ animation: "fadeUp 0.5s 0.3s ease both" }}
        >
          <Link
            to="/ppdb"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-primary-deep shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Daftar PPDB Sekarang <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/tentang"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/20"
          >
            Pelajari Sekolah Kami
          </Link>
        </div>

        {/* Stats bar */}
        <dl
          className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-4 border-t border-white/20 pt-8"
          style={{ animation: "fadeUp 0.5s 0.4s ease both" }}
        >
          {[
            { v: "56+", l: "Tahun Mendidik" },
            { v: "100%", l: "Lulus & Lanjut SMA" },
            { v: "5+", l: "Ekstrakurikuler" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <dt className="font-display text-3xl font-extrabold text-gold">{s.v}</dt>
              <dd className="mt-0.5 text-[11px] uppercase tracking-widest text-white/60">{s.l}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Tombol prev / next */}
      <button
        onClick={prev}
        aria-label="Foto sebelumnya"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/25 lg:left-8"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Foto berikutnya"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/25 lg:right-8"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot indicator */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="h-1.5 rounded-full bg-white/50 transition-all"
            style={{
              width: i === active ? "2rem" : "0.375rem",
              backgroundColor: i === active ? "var(--color-gold, #f5c842)" : undefined,
            }}
          />
        ))}
      </div>

      {/* Progress bar bawah */}
      <div className="absolute bottom-0 inset-x-0 h-0.5 bg-white/10">
        <div
          key={active}
          className="h-full bg-gold"
          style={{ animation: `progress ${INTERVAL_MS}ms linear` }}
        />
      </div>
    </section>
  );
}

function HomePage() {
  useEffect(() => {
    document.title = "SMP Muhammadiyah 7 Wuluhan — Beranda";
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>

      <HeroSlider />

      <PrestasiCounter />

      {/* PILAR KEUNGGULAN */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Keunggulan
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary-deep sm:text-4xl">
            Mengapa Memilih SMP Mutu 7?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Empat pilar yang menjadi fondasi pendidikan kami.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Akhlak Mulia",
              desc: "Pembiasaan ibadah, akhlak Qur'ani, dan karakter Islami yang kuat.",
            },
            {
              icon: BookOpen,
              title: "Pembelajaran Bermakna",
              desc: "Kelas menarik, menyenangkan, dan berorientasi pada karakter siswa.",
            },
            {
              icon: Trophy,
              title: "Prestasi & Karya",
              desc: "Mendorong siswa berprestasi akademik maupun non-akademik.",
            },
            {
              icon: Users,
              title: "Lingkungan Inklusif",
              desc: "Ruang tumbuh untuk intelektual, sosial, emosional, dan keterampilan.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant"
            >
              <div className="inline-flex rounded-xl bg-gradient-hero p-3 text-primary-foreground transition-transform group-hover:rotate-3">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-primary-deep">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TENTANG STRIP */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={classroom}
                alt="Siswa belajar di kelas"
                width={1200}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-2xl border-4 border-gold bg-background sm:block"
              aria-hidden
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Tentang Kami
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold text-primary-deep sm:text-4xl">
              Sekolah amal usaha Muhammadiyah yang tumbuh bersama generasi sejak
              1968.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Berada di bawah naungan Pimpinan Daerah Muhammadiyah Kabupaten
              Jember, kami berikhtiar membentuk manusia muslim yang berwawasan
              unggul serta terampil dalam berkarya dan berprestasi.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Building2, k: "NPSN", v: "20523912" },
                { icon: ShieldCheck, k: "Akreditasi", v: "BAN-S/M" },
                { icon: GraduationCap, k: "Jenjang", v: "SMP Swasta" },
                { icon: Sparkles, k: "Naungan", v: "PDM Jember" },
              ].map((i) => (
                <div
                  key={i.k}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  <i.icon className="h-5 w-5 text-gold" />
                  <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                    {i.k}
                  </div>
                  <div className="font-display font-bold text-primary-deep">
                    {i.v}
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/tentang"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-deep"
            >
              Selengkapnya tentang sekolah <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <GalleryGrid />
      <PrestasiShowcase />
      <TeachersSection />
      <Testimonials />

      {/* KUTIPAN KEPALA SEKOLAH */}
      <section className="mx-auto max-w-5xl px-4 py-20 lg:px-8 lg:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-primary-foreground shadow-elegant sm:p-14">
          <Quote className="absolute right-8 top-8 h-24 w-24 text-gold/20" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Sambutan Kepala Sekolah
          </span>
          <p className="mt-5 max-w-3xl text-balance font-display text-2xl font-semibold leading-snug sm:text-3xl">
            "Kami berikhtiar melahirkan generasi unggul yang berakhlak mulia,
            cerdas, dan siap berkontribusi di tengah masyarakat."
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-gold" />
            <div>
              <div className="font-display font-bold">
                Faridatul Maysaroh, S.Pd.
              </div>
              <div className="text-sm text-primary-foreground/70">
                Kepala Sekolah
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA PPDB */}
      <section className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card sm:p-14">
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-gold opacity-30 blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                PPDB Tahun Ajaran Baru
              </span>
              <h2 className="mt-3 text-balance font-display text-3xl font-bold text-primary-deep sm:text-4xl">
                Gratis biaya pendaftaran &amp; beasiswa 1 tahun untuk 20
                pendaftar pertama.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/ppdb"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-deep"
              >
                Daftar Sekarang <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/kontak"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-input px-6 py-3 text-sm font-semibold hover:bg-secondary"
              >
                Hubungi Panitia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
