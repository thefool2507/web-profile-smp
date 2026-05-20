import { Award, Users, GraduationCap, Trophy } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const items = [
  { icon: Users, value: 50, suffix: "+", label: "Siswa Aktif" },
  { icon: GraduationCap, value: 620, suffix: "+", label: "Alumni Tersebar" },
  { icon: Trophy, value: 67, suffix: "+", label: "Prestasi Kejuaraan" },
  { icon: Award, value: 56, suffix: "", label: "Tahun Pengalaman" },
];

export function PrestasiCounter() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Pencapaian Kami</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary-deep sm:text-4xl">
            Angka yang Berbicara
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.label}
              className="group rounded-2xl border border-border bg-card p-7 text-center shadow-card transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-elegant"
            >
              <div className="mx-auto inline-flex rounded-2xl bg-gradient-hero p-3.5 text-primary-foreground transition-transform group-hover:scale-110">
                <it.icon className="h-6 w-6" />
              </div>
              <div className="mt-5 font-display text-4xl font-extrabold text-primary-deep sm:text-5xl">
                <AnimatedCounter value={it.value} suffix={it.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
