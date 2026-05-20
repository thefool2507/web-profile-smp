import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Target, Compass } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/visi-misi")({
  component: VisiMisiPage,
});

const misi = [
  "Menciptakan profil pelajar yang berakhlak mulia dan rajin beribadah.",
  "Menciptakan pembelajaran yang menarik, menyenangkan dan berkarakter.",
  "Meningkatkan manajemen satuan pendidikan yang adaptif, berkarakter dan menjamin mutu.",
  "Menciptakan lingkungan sekolah sebagai tempat perkembangan intelektual, sosial, emosional, keterampilan dan pengembangan budaya.",
];

function VisiMisiPage() {
  useEffect(() => {
    document.title = "Visi & Misi — SMP Muhammadiyah 7 Wuluhan";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Arah Sekolah"
        title="Visi & Misi"
        description="Pijakan kami dalam mendidik dan membentuk generasi muslim yang unggul."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 lg:grid-cols-2 lg:px-8">
        <article className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-gold opacity-20 blur-2xl" aria-hidden />
          <div className="inline-flex rounded-2xl bg-gradient-hero p-3 text-primary-foreground">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Visi</h2>
          <p className="mt-3 font-display text-2xl font-bold leading-snug text-primary-deep text-balance sm:text-3xl">
            "Terbentuknya manusia muslim, berkarakter, inovatif serta terampil dalam berkarya dan berprestasi."
          </p>
        </article>

        <article className="rounded-3xl border border-border bg-card p-10 shadow-card">
          <div className="inline-flex rounded-2xl bg-gradient-gold p-3 text-gold-foreground">
            <Compass className="h-6 w-6" />
          </div>
          <h2 className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Misi</h2>
          <ol className="mt-4 space-y-4">
            {misi.map((m, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <p className="pt-1 leading-relaxed text-foreground">{m}</p>
              </li>
            ))}
          </ol>
        </article>
      </section>
    </>
  );
}
