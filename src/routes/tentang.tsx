import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Building2, Calendar, MapPin, Phone, Mail, ShieldCheck, Wifi } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/tentang")({
  component: TentangPage,
});

const identitas = [
  { k: "Nama Sekolah", v: "SMP Muhammadiyah 7 Wuluhan" },
  { k: "NPSN", v: "20523912" },
  { k: "Jenjang", v: "SMP Swasta" },
  { k: "Naungan", v: "Yayasan PDM Kab. Jember" },
  { k: "Akreditasi", v: "Terakreditasi BAN-S/M" },
  { k: "Kurikulum", v: "KTSP" },
  { k: "Tahun Berdiri", v: "1 Januari 1968" },
  { k: "Luas Tanah", v: "1.656 m²" },
];

function TentangPage() {
  useEffect(() => {
    document.title = "Tentang Sekolah — SMP Muhammadiyah 7 Wuluhan";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Tentang Sekolah"
        title="Sekolah Islami yang Tumbuh Bersama Generasi"
        description="Berdiri sejak 1968 sebagai amal ibadah dan amal usaha Muhammadiyah, kami berikhtiar membentuk manusia muslim yang unggul dan berkarya."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-bold text-primary-deep">Sejarah Singkat</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            SMP Muhammadiyah 7 Wuluhan adalah sekolah menengah pertama swasta di bawah naungan
            Pimpinan Daerah Muhammadiyah Kabupaten Jember. Berdiri berdasarkan SK Pendirian
            No. 3730/II-VII/JTM-6879 tertanggal <strong>1 Januari 1968</strong>, sekolah ini telah
            mendidik banyak generasi di Wuluhan dan sekitarnya.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Sebagai amal usaha Muhammadiyah, sekolah berkomitmen melahirkan pelajar yang
            berakhlak mulia, rajin beribadah, serta terampil berkarya dan berprestasi.
            Banyak alumni kami yang melanjutkan ke SMA favorit.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Calendar, t: "56+ Tahun", s: "Pengalaman mendidik" },
              { icon: ShieldCheck, t: "Terakreditasi", s: "Resmi BAN-S/M" },
              { icon: Wifi, t: "Fasilitas", s: "WiFi & PLN" },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <f.icon className="h-6 w-6 text-gold" />
                <div className="mt-3 font-display font-bold text-primary-deep">{f.t}</div>
                <div className="text-sm text-muted-foreground">{f.s}</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-border bg-surface p-7 shadow-card">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-hero p-2.5 text-primary-foreground"><Building2 className="h-5 w-5" /></div>
            <h3 className="font-display text-xl font-bold text-primary-deep">Identitas Sekolah</h3>
          </div>
          <dl className="mt-6 divide-y divide-border">
            {identitas.map((i) => (
              <div key={i.k} className="flex justify-between gap-4 py-3 text-sm">
                <dt className="text-muted-foreground">{i.k}</dt>
                <dd className="text-right font-semibold text-foreground">{i.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
            <div className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-gold" /><span>Jl. Ahmad Yani No. 42, Tamansari, Wuluhan, Jember, Jawa Timur</span></div>
            <div className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-gold" /><span>(0336) 721979</span></div>
            <div className="flex gap-3 break-all"><Mail className="h-5 w-5 shrink-0 text-gold" /><span>smpmuhammadiyah7wuluhan@gmail.com</span></div>
          </div>
        </aside>
      </section>
    </>
  );
}
