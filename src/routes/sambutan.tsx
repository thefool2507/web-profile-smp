import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import principal from "@/assets/principal.jpg";

export const Route = createFileRoute("/sambutan")({
  component: SambutanPage,
});

function SambutanPage() {
  useEffect(() => {
    document.title = "Sambutan Kepala Sekolah — SMP Muhammadiyah 7 Wuluhan";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Sambutan"
        title="Pesan Kepala Sekolah"
        description="Salam hangat dari pimpinan SMP Muhammadiyah 7 Wuluhan."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-gold opacity-25 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant">
            <img src={principal} alt="Kepala Sekolah Faridatul Maysaroh, S.Pd." width={800} height={1000} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="mt-6 rounded-2xl border border-border bg-card p-5 text-center shadow-card">
            <div className="font-display text-lg font-bold text-primary-deep">Faridatul Maysaroh, S.Pd.</div>
            <div className="text-sm text-muted-foreground">Kepala Sekolah</div>
          </div>
        </div>

        <article className="relative">
          <Quote className="h-12 w-12 text-gold/40" />
          <div className="mt-2 space-y-5 text-lg leading-relaxed text-foreground/90">
            <p>
              Assalamu'alaikum warahmatullahi wabarakatuh.
            </p>
            <p>
              Puji syukur kami panjatkan ke hadirat Allah SWT atas segala nikmat dan karunia-Nya
              sehingga SMP Muhammadiyah 7 Wuluhan terus dapat berikhtiar memberikan pendidikan
              terbaik bagi putra-putri kita.
            </p>
            <p>
              Sekolah ini hadir sebagai amal ibadah dan amal usaha Muhammadiyah, dengan tujuan
              mulia membentuk manusia muslim yang berwawasan unggul, berkarakter, serta terampil
              dalam berkarya dan berprestasi. Kami berkomitmen menyediakan lingkungan yang
              menyenangkan, menumbuhkan akhlak mulia, dan mengasah potensi setiap siswa.
            </p>
            <p>
              Banyak alumni kami melanjutkan pendidikan ke SMA favorit dan berkiprah di
              masyarakat. Mari bergabung bersama kami menumbuhkan generasi yang siap menjawab
              tantangan zaman dengan nilai-nilai Islami yang kokoh.
            </p>
            <p className="font-display font-semibold text-primary-deep">
              Wassalamu'alaikum warahmatullahi wabarakatuh.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
