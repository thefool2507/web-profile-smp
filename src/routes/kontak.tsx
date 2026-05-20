import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/kontak")({
  component: KontakPage,
});

const socials = [
  { icon: Facebook, name: "Facebook", v: "Smp Mutu Wuluhan", href: "#" },
  { icon: Instagram, name: "Instagram", v: "@smpmutu_wuluhan", href: "#" },
  { icon: Youtube, name: "YouTube", v: "smp muhammadiyah 7 Wuluhan", href: "#" },
];

function KontakPage() {
  useEffect(() => {
    document.title = "Kontak & Lokasi — SMP Muhammadiyah 7 Wuluhan";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="Hubungi Kami"
        description="Kami senang menjawab pertanyaan Anda tentang sekolah, PPDB, atau kunjungan."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div className="space-y-5">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex gap-4">
              <div className="rounded-xl bg-gradient-hero p-3 text-primary-foreground"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Alamat</div>
                <div className="mt-1 font-semibold text-foreground">Jl. Ahmad Yani No. 42</div>
                <div className="text-sm text-muted-foreground">Desa Tamansari, Wuluhan, Kabupaten Jember, Jawa Timur</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex gap-4">
              <div className="rounded-xl bg-gradient-gold p-3 text-gold-foreground"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Telepon</div>
                <a href="tel:0336721979" className="mt-1 block font-semibold text-foreground hover:text-primary">(0336) 721979</a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex gap-4">
              <div className="rounded-xl bg-gradient-hero p-3 text-primary-foreground"><Mail className="h-5 w-5" /></div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <a href="mailto:smpmuhammadiyah7wuluhan@gmail.com" className="mt-1 block break-all font-semibold text-foreground hover:text-primary">
                  smpmuhammadiyah7wuluhan@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary-deep">Media Sosial</div>
            <ul className="mt-4 space-y-3">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} className="flex items-center gap-3 rounded-lg bg-background px-3 py-2.5 text-sm transition hover:bg-secondary">
                    <s.icon className="h-4 w-4 text-gold" />
                    <span className="font-medium">{s.name}</span>
                    <span className="ml-auto text-muted-foreground">{s.v}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
          <iframe
            title="Lokasi SMP Muhammadiyah 7 Wuluhan"
            src="https://www.google.com/maps?q=SMP+Muhammadiyah+7+Wuluhan+Jember&output=embed"
            className="h-full min-h-[480px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
