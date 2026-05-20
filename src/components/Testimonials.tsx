import { Quote, Star } from "lucide-react";

const items = [
  {
    name: "Ibu Siti Nurhaliza",
    role: "Wali murid kelas IX",
    text: "Anak saya jauh lebih disiplin sholat dan mengaji sejak masuk Mutu 7. Gurunya sabar membimbing satu per satu.",
    initial: "S",
  },
  {
    name: "Nisa Qonita Azka",
    role: "Alumni 2023 · MAN 1 Jember",
    text: "Bekal akhlak dan kebiasaan belajar dari Mutu 7 sangat membantu saya saat masuk SMA Negeri. Lingkungannya hangat seperti keluarga.",
    initial: "A",
  },
  {
    name: "Bapak Hadi Susanto",
    role: "Wali murid kelas VIII",
    text: "Biaya terjangkau, fasilitas terus ditambah, dan komunikasi sekolah sangat aktif lewat WhatsApp. Sebagai orang tua saya merasa tenang.",
    initial: "H",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Suara Mereka</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary-deep sm:text-4xl">
            Dipercaya orang tua &amp; alumni
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cerita nyata dari keluarga besar SMP Muhammadiyah 7 Wuluhan.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <figure
              key={it.name}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-gold/30" aria-hidden />
              <div className="flex gap-0.5 text-gold" aria-label="Rating 5 dari 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                “{it.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-gold font-display text-lg font-bold text-gold-foreground">
                  {it.initial}
                </div>
                <div>
                  <div className="font-semibold text-primary-deep">{it.name}</div>
                  <div className="text-xs text-muted-foreground">{it.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
