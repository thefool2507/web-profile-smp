import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const socials = [
  { Icon: Facebook, label: "Facebook SMP Muhammadiyah 7 Wuluhan", href: "https://www.facebook.com/smpmutu.wuluhan" },
  { Icon: Instagram, label: "Instagram @smpmutu_wuluhan", href: "https://www.instagram.com/smpmutu_wuluhan" },
  { Icon: Youtube, label: "YouTube SMP Muhammadiyah 7 Wuluhan", href: "https://www.youtube.com/@smpmuhammadiyah7wuluhan" },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-primary-deep text-primary-foreground">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-gold" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo SMP Muhammadiyah 7 Wuluhan"
              className="h-12 w-12 rounded-md bg-white/10 p-1"
              width={48}
              height={48}
            />
            <div>
              <div className="font-display text-lg font-bold">SMP MUHAMMADIYAH 7</div>
              <div className="text-sm uppercase tracking-[0.2em] text-gold">WULUHAN</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
            Membentuk manusia muslim berkarakter, inovatif, terampil dalam
            berkarya dan berprestasi sejak 1968.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2.5 transition hover:bg-gold hover:text-gold-foreground"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Navigasi</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/tentang" className="hover:text-gold">Tentang Sekolah</Link></li>
            <li><Link to="/visi-misi" className="hover:text-gold">Visi &amp; Misi</Link></li>
            <li><Link to="/ekstrakurikuler" className="hover:text-gold">Ekstrakurikuler</Link></li>
            <li><Link to="/ppdb" className="hover:text-gold">PPDB Online</Link></li>
            <li><Link to="/kontak" className="hover:text-gold">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Kontak</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>Jl. Ahmad Yani No. 42, Tamansari, Wuluhan, Jember</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href="tel:0336721979" className="hover:text-gold">(0336) 721979</a>
            </li>
            <li className="flex gap-2.5 break-all">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a href="mailto:smpmuhammadiyah7wuluhan@gmail.com" className="hover:text-gold">
                smpmuhammadiyah7wuluhan@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} SMP Muhammadiyah 7 Wuluhan. Semua hak dilindungi.</p>
          <p>NPSN 20523912 · Terakreditasi BAN-S/M</p>
        </div>
      </div>
    </footer>
  );
}
