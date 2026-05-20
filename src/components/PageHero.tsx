import pattern from "@/assets/pattern-islamic.jpg";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{ backgroundImage: `url(${pattern})`, backgroundSize: "380px" }}
        aria-hidden
      />
      <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-gold/25 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-24">
        <span className="inline-flex items-center rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
