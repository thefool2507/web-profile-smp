import { Trophy, Medal, Award } from "lucide-react";
import imgSilat from "@/assets/prestasi-silat.jpg";
import imgTahfidz from "@/assets/prestasi-tahfidz.jpg";
import imgPidato from "@/assets/prestasi-pidato.jpg";
import imgIpa from "@/assets/prestasi-ipa.jpg";
import imgKaligrafi from "@/assets/prestasi-kaligrafi.jpg";
import imgHw from "@/assets/prestasi-hw.jpg";

const items = [
  { y: "2024", t: "Juara 1 Pencak Silat Tapak Suci", c: "Kejuaraan Kabupaten Jember", icon: Trophy, tone: "gold", img: imgSilat },
  { y: "2024", t: "Juara 2 Tahfidz Qur'an", c: "Pekan Olahraga & Seni Pelajar", icon: Medal, tone: "blue", img: imgTahfidz },
  { y: "2023", t: "Juara 3 Lomba Pidato Bahasa Arab", c: "Tingkat Karesidenan Besuki", icon: Medal, tone: "blue", img: imgPidato },
  { y: "2023", t: "Juara Harapan 1 Olimpiade IPA", c: "Tingkat Kabupaten", icon: Award, tone: "blue", img: imgIpa },
  { y: "2023", t: "Juara 1 Kaligrafi Islami", c: "Festival Muhammadiyah Cabang Wuluhan", icon: Trophy, tone: "gold", img: imgKaligrafi },
  { y: "2022", t: "Juara 2 Hizbul Wathan", c: "Jambore Daerah Jember", icon: Medal, tone: "blue", img: imgHw },
];

export function PrestasiShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Bukti Nyata</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary-deep sm:text-4xl">
            Prestasi Siswa Kami
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sebagian capaian akademik &amp; non-akademik dalam tiga tahun terakhir.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => {
          const isGold = it.tone === "gold";
          return (
            <article
              key={it.t}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={it.img}
                  alt={it.t}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div
                  className={`absolute left-4 top-4 inline-flex rounded-xl p-2.5 shadow-card ${
                    isGold
                      ? "bg-gradient-gold text-gold-foreground"
                      : "bg-gradient-hero text-primary-foreground"
                  }`}
                >
                  <it.icon className="h-4 w-4" />
                </div>
                <span className="absolute right-4 top-4 rounded-full bg-background/85 px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-primary-deep backdrop-blur">
                  {it.y}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold leading-snug text-primary-deep">
                  {it.t}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.c}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
