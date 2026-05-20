import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Shield, Swords, Trophy, Music, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import imgHw from "@/assets/ekskul-hw.jpg";
import imgSilat from "@/assets/ekskul-tapaksuci.jpg";
import imgFutsal from "@/assets/ekskul-futsal.jpg";
import imgHadrah from "@/assets/ekskul-hadrah.jpg";
import imgIpm from "@/assets/ekskul-ipm.jpg";

export const Route = createFileRoute("/ekstrakurikuler")({
  component: EkstraPage,
});

const ekskul = [
  { icon: Shield, name: "Hizbul Wathan", desc: "Kepanduan Muhammadiyah untuk kemandirian dan kepemimpinan.", img: imgHw },
  { icon: Swords, name: "Tapak Suci", desc: "Pencak silat persaudaraan Muhammadiyah.", img: imgSilat },
  { icon: Trophy, name: "Futsal", desc: "Pengembangan sportivitas dan kerja tim.", img: imgFutsal },
  { icon: Music, name: "Hadrah", desc: "Seni musik islami yang membentuk cita rasa religius.", img: imgHadrah },
  { icon: Users, name: "IPM / OSIS", desc: "Organisasi siswa untuk kepemimpinan & kepedulian sosial.", img: imgIpm },
];

const pembina = [
  "Ustadz Ngadiyah, S.Pd.I., M.Pd.",
  "Ibu Luluk Ari Sarmi",
  "HW Qobilah Mujahid Wuluhan",
  "Mas Pony Wijaya",
];

function EkstraPage() {
  useEffect(() => {
    document.title = "Ekstrakurikuler — SMP Muhammadiyah 7 Wuluhan";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Kegiatan Siswa"
        title="Ekstrakurikuler & Pembinaan"
        description="Wadah pengembangan minat, bakat, dan karakter Islami siswa di luar jam pelajaran."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ekskul.map((e) => (
            <article key={e.name} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant">
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={e.img}
                  alt={e.name}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex rounded-xl bg-gradient-hero p-2.5 text-primary-foreground shadow-card">
                  <e.icon className="h-4 w-4" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary-deep">{e.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-surface p-8 shadow-card sm:p-10">
          <h2 className="font-display text-2xl font-bold text-primary-deep">Pembina Ekstrakurikuler</h2>
          <p className="mt-2 text-sm text-muted-foreground">Para pembina yang mendampingi kegiatan siswa.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {pembina.map((p) => (
              <li key={p} className="flex items-center gap-3 rounded-xl bg-background px-4 py-3 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-gold" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
