import { useEffect } from "react";
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
} from "lucide-react";
import hero from "@/assets/hero-school.jpg";
import classroom from "@/assets/students-classroom.jpg";
import pattern from "@/assets/pattern-islamic.jpg";
import { PrestasiCounter } from "@/components/PrestasiCounter";
import { GalleryGrid } from "@/components/GalleryGrid";
import { TeachersSection } from "@/components/TeachersSection";
import { Testimonials } from "@/components/Testimonials";
import { PrestasiShowcase } from "@/components/PrestasiShowcase";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  useEffect(() => {
    document.title = "SMP Muhammadiyah 7 Wuluhan — Beranda";
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{ backgroundImage: `url(${pattern})`, backgroundSize: "420px" }}
          aria-hidden
        />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/30 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary-deep/60 blur-3xl" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Sejak 1968 · Terakreditasi BAN-S/M
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
              Membentuk <span className="text-gold">Generasi Muslim</span>{" "}
              yang Berkarakter &amp; Berprestasi
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              SMP Muhammadiyah 7 Wuluhan adalah sekolah menengah pertama Islami
              modern di Kabupaten Jember, berkomitmen mencetak pelajar yang
              berakhlak mulia, inovatif, dan terampil dalam berkarya.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/ppdb"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                Daftar PPDB Sekarang <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/tentang"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/10"
              >
                Pelajari Sekolah Kami
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {[
                { v: "56+", l: "Tahun Mendidik" },
                { v: "100%", l: "Lulus & Lanjut SMA" },
                { v: "5+", l: "Ekstrakurikuler" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-3xl font-extrabold text-gold">{s.v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/70">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-gold opacity-30 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-elegant">
              <img
                src={hero}
                alt="Gedung SMP Muhammadiyah 7 Wuluhan"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-background p-5 text-foreground shadow-elegant sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-gold p-2.5">
                  <GraduationCap className="h-5 w-5 text-gold-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Lulusan</div>
                  <div className="font-display text-lg font-bold text-primary-deep">Diterima di SMA Favorit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PrestasiCounter />

      {/* PILAR KEUNGGULAN */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Keunggulan</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary-deep sm:text-4xl">
            Mengapa Memilih SMP Mutu 7?
          </h2>
          <p className="mt-4 text-muted-foreground">Empat pilar yang menjadi fondasi pendidikan kami.</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Akhlak Mulia", desc: "Pembiasaan ibadah, akhlak Qur'ani, dan karakter Islami yang kuat." },
            { icon: BookOpen, title: "Pembelajaran Bermakna", desc: "Kelas menarik, menyenangkan, dan berorientasi pada karakter siswa." },
            { icon: Trophy, title: "Prestasi & Karya", desc: "Mendorong siswa berprestasi akademik maupun non-akademik." },
            { icon: Users, title: "Lingkungan Inklusif", desc: "Ruang tumbuh untuk intelektual, sosial, emosional, dan keterampilan." },
          ].map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant"
            >
              <div className="inline-flex rounded-xl bg-gradient-hero p-3 text-primary-foreground transition-transform group-hover:rotate-3">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-primary-deep">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
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
            <div className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-2xl border-4 border-gold bg-background sm:block" aria-hidden />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Tentang Kami</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary-deep sm:text-4xl text-balance">
              Sekolah amal usaha Muhammadiyah yang tumbuh bersama generasi sejak 1968.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Berada di bawah naungan Pimpinan Daerah Muhammadiyah Kabupaten Jember, kami berikhtiar
              membentuk manusia muslim yang berwawasan unggul serta terampil dalam berkarya dan berprestasi.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Building2, k: "NPSN", v: "20523912" },
                { icon: ShieldCheck, k: "Akreditasi", v: "BAN-S/M" },
                { icon: GraduationCap, k: "Jenjang", v: "SMP Swasta" },
                { icon: Sparkles, k: "Naungan", v: "PDM Jember" },
              ].map((i) => (
                <div key={i.k} className="rounded-xl border border-border bg-card p-4">
                  <i.icon className="h-5 w-5 text-gold" />
                  <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{i.k}</div>
                  <div className="font-display font-bold text-primary-deep">{i.v}</div>
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
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Sambutan Kepala Sekolah</span>
          <p className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-snug text-balance sm:text-3xl">
            "Kami berikhtiar melahirkan generasi unggul yang berakhlak mulia, cerdas,
            dan siap berkontribusi di tengah masyarakat."
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-gold" />
            <div>
              <div className="font-display font-bold">Faridatul Maysaroh, S.Pd.</div>
              <div className="text-sm text-primary-foreground/70">Kepala Sekolah</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA PPDB */}
      <section className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card sm:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-gold opacity-30 blur-3xl" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">PPDB Tahun Ajaran Baru</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-deep sm:text-4xl text-balance">
                Gratis biaya pendaftaran &amp; beasiswa 1 tahun untuk 20 pendaftar pertama.
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
