import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Calendar, FileText, Gift, Phone, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { BiayaSection } from "@/components/BiayaSection";

export const Route = createFileRoute("/ppdb")({
  component: PPDBPage,
});

const gelombang = [
  { g: "Gelombang 1", d: "2 Januari – 30 Maret" },
  { g: "Gelombang 2", d: "1 April – 1 Juni" },
  { g: "Gelombang 3", d: "3 Juni – 15 Juli" },
];

const syarat = [
  "Fotocopy ijazah SD/MI",
  "Pas foto hitam putih ukuran 3x4 sebanyak 4 lembar",
  "Fotocopy KK dan akta kelahiran",
  "Menyerahkan NISN",
  "Melampirkan KIP (jika punya)",
];

const panitia = [
  { n: "Bu Farid", p: "082336028547" },
  { n: "Bu Meta", p: "082334135715" },
  { n: "Bu Luluk", p: "081555851241" },
  { n: "Pak Suem", p: "081232696157" },
];

function PPDBPage() {
  useEffect(() => {
    document.title = "PPDB Online — SMP Muhammadiyah 7 Wuluhan";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Penerimaan Peserta Didik Baru"
        title="PPDB SMP Muhammadiyah 7 Wuluhan"
        description="Bergabunglah bersama keluarga besar kami. Gratis biaya pendaftaran dan beasiswa pendidikan 1 tahun untuk 20 pendaftar pertama."
      />

      {/* PROMO */}
      <section className="relative z-20 mx-auto -mt-10 max-w-7xl px-4 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl bg-gradient-gold p-6 text-gold-foreground shadow-elegant">
            <Gift className="h-10 w-10" />
            <div>
              <div className="font-display text-xl font-bold">Gratis Biaya Pendaftaran</div>
              <div className="text-sm opacity-90">Untuk semua calon peserta didik.</div>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl bg-gradient-hero p-6 text-primary-foreground shadow-elegant">
            <Gift className="h-10 w-10 text-gold" />
            <div>
              <div className="font-display text-xl font-bold">Beasiswa 1 Tahun</div>
              <div className="text-sm opacity-90">Untuk 20 pendaftar pertama.</div>
            </div>
          </div>
        </div>
      </section>

      {/* GELOMBANG */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Jadwal</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary-deep">Gelombang Pendaftaran</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {gelombang.map((g, i) => (
            <div key={g.g} className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="absolute right-5 top-5 font-display text-5xl font-extrabold text-gold/20">0{i + 1}</div>
              <Calendar className="h-6 w-6 text-primary" />
              <div className="mt-4 font-display text-xl font-bold text-primary-deep">{g.g}</div>
              <div className="mt-1 text-sm text-muted-foreground">{g.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SYARAT + SISTEM */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="inline-flex rounded-xl bg-gradient-hero p-3 text-primary-foreground">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold text-primary-deep">Syarat Pendaftaran</h3>
            <ul className="mt-5 space-y-3">
              {syarat.map((s) => (
                <li key={s} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="inline-flex rounded-xl bg-gradient-gold p-3 text-gold-foreground">
              <ArrowRight className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold text-primary-deep">Sistem Pendaftaran</h3>
            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-border p-5">
                <div className="font-display font-bold text-primary-deep">Offline</div>
                <p className="mt-1 text-sm text-muted-foreground">Datang langsung ke kantor SMP Muhammadiyah 7 Wuluhan.</p>
              </div>
              <div className="rounded-xl border border-border p-5">
                <div className="font-display font-bold text-primary-deep">Online</div>
                <p className="mt-1 text-sm text-muted-foreground">Mengisi formulir digital melalui kontak panitia di bawah.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PANITIA */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Kontak</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary-deep">Panitia PPDB</h2>
          <p className="mt-3 text-muted-foreground">Hubungi panitia untuk informasi lebih lanjut.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {panitia.map((p) => (
            <a
              key={p.n}
              href={`tel:${p.p}`}
              className="group rounded-2xl border border-border bg-card p-6 text-center shadow-card transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-elegant"
            >
              <div className="mx-auto inline-flex rounded-full bg-gradient-gold p-3 text-gold-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-lg font-bold text-primary-deep">{p.n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{p.p}</div>
            </a>
          ))}
        </div>
      </section>

      <BiayaSection />

      <FaqSection />
    </>
  );
}
