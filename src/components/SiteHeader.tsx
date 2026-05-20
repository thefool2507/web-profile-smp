import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

type NavItem =
  | { to: string; label: string }
  | { label: string; children: { to: string; label: string }[] };

const nav: NavItem[] = [
  { to: "/", label: "Beranda" },
  {
    label: "Profil",
    children: [
      { to: "/tentang", label: "Tentang Sekolah" },
      { to: "/visi-misi", label: "Visi & Misi" },
      { to: "/sambutan", label: "Sambutan Kepsek" },
      { to: "/fasilitas", label: "Fasilitas" },
    ],
  },
  {
    label: "Akademik",
    children: [
      { to: "/ekstrakurikuler", label: "Ekstrakurikuler" },
      { to: "/prestasi", label: "Prestasi" },
    ],
  },
  { to: "/ppdb", label: "PPDB" },
  { to: "/kontak", label: "Kontak" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Logo SMP Muhammadiyah 7 Wuluhan" className="h-12 w-12" width={48} height={48} />
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-primary-deep">SMP MUHAMMADIYAH 7</div>
            <div className="text-[14px] font-semibold uppercase tracking-[0.18em] text-gold">WULUHAN</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) =>
            "children" in n ? (
              <div key={n.label} className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary group-hover:bg-secondary group-hover:text-primary"
                >
                  {n.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-elegant">
                    <ul className="py-2">
                      {n.children.map((c) => (
                        <li key={c.to}>
                          <Link
                            to={c.to}
                            activeProps={{ className: "bg-secondary text-primary" }}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary bg-secondary" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              >
                {n.label}
              </Link>
            )
          )}
          <Link
            to="/ppdb"
            className="ml-2 inline-flex items-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            Daftar PPDB
          </Link>
        </nav>

        <button
          className="rounded-md p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) =>
              "children" in n ? (
                <div key={n.label} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setOpenGroup((g) => (g === n.label ? null : n.label))}
                    className="flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-semibold text-foreground/85"
                  >
                    {n.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openGroup === n.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openGroup === n.label && (
                    <div className="ml-2 mt-1 flex flex-col border-l border-border pl-3">
                      {n.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          activeProps={{ className: "text-primary bg-secondary" }}
                          className="rounded-lg px-4 py-2 text-sm text-foreground/75"
                          onClick={() => setOpen(false)}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  activeProps={{ className: "text-primary bg-secondary" }}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
