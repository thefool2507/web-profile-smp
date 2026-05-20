import { Check, Sparkles, ShieldCheck } from "lucide-react";

const items = [
  { k: "Biaya Pendaftaran", v: "Gratis", note: "Semua calon peserta didik" },
  { k: "SPP Bulanan", v: "Rp 75.000", note: "Salah satu termurah di Wuluhan" },
  { k: "Daftar Ulang", v: "Rp 350.000", note: "Sudah termasuk kelengkapan awal" },
  { k: "Seragam (4 stel)", v: "Rp 650.000", note: "Bisa diangsur 2x" },
];

const beasiswa = [
  "Beasiswa pendidikan 1 tahun untuk 20 pendaftar pertama",
  "Potongan SPP untuk anak yatim & dhuafa",
  "Beasiswa prestasi akademik & tahfidz",
  "Keringanan untuk saudara kandung yang bersekolah di sini",
];

export function BiayaSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Transparan</span>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary-deep sm:text-4xl">
          Biaya &amp; Beasiswa
        </h2>
        <p className="mt-4 text-muted-foreground">
          Kami percaya pendidikan berkualitas tidak harus mahal. Semua biaya kami sampaikan terbuka.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <div className="flex items-center gap-2 border-b border-border bg-surface px-6 py-4">
            <ShieldCheck className="h-5 w-5 text-gold" />
            <h3 className="font-display text-lg font-bold text-primary-deep">Rincian Biaya Tahun Ajaran</h3>
          </div>
          <ul className="divide-y divide-border">
            {items.map((it) => (
              <li key={it.k} className="flex flex-wrap items-center justify-between gap-2 px-6 py-4">
                <div>
                  <div className="font-semibold text-foreground">{it.k}</div>
                  <div className="text-xs text-muted-foreground">{it.note}</div>
                </div>
                <div className="font-display text-lg font-bold text-primary">{it.v}</div>
              </li>
            ))}
          </ul>
          <div className="border-t border-border bg-surface px-6 py-3 text-xs text-muted-foreground">
            *Estimasi tahun ajaran berjalan · konfirmasi final ke panitia PPDB.
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-hero p-7 text-primary-foreground shadow-elegant">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            <Sparkles className="h-3.5 w-3.5" /> Program Beasiswa
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold leading-snug">
            Banyak jalur keringanan untuk keluarga yang membutuhkan.
          </h3>
          <ul className="mt-6 space-y-3">
            {beasiswa.map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed text-primary-foreground/90">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
