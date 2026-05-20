import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import ceremony from "@/assets/gallery-ceremony.jpg";
import praying from "@/assets/gallery-praying.jpg";
import pencak from "@/assets/gallery-pencak.jpg";
import trophy from "@/assets/gallery-trophy.jpg";
import classroom from "@/assets/students-classroom.jpg";
import hero from "@/assets/hero-school.jpg";

const photos = [
  { src: ceremony, alt: "Upacara bendera siswa", caption: "Upacara Bendera Setiap Senin" },
  { src: praying, alt: "Sholat berjamaah di masjid sekolah", caption: "Sholat Berjamaah" },
  { src: pencak, alt: "Latihan Tapak Suci", caption: "Ekstrakurikuler Tapak Suci" },
  { src: trophy, alt: "Siswa memenangkan kejuaraan", caption: "Juara Lomba Tingkat Kabupaten" },
  { src: classroom, alt: "Suasana kelas", caption: "Pembelajaran Aktif di Kelas" },
  { src: hero, alt: "Gedung sekolah", caption: "Lingkungan Sekolah Nyaman" },
];

export function GalleryGrid() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Galeri Kegiatan</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary-deep sm:text-4xl">
            Suasana Belajar & Beribadah
          </h2>
          <p className="mt-3 text-muted-foreground">
            Lihat keseharian, prestasi, dan kegiatan keagamaan siswa-siswi kami.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-2xl shadow-card transition-all hover:shadow-elegant ${
              i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
            }`}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              width={800}
              height={800}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/85 via-primary-deep/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left text-sm font-semibold text-primary-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              {p.caption}
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{open !== null ? photos[open].caption : "Galeri"}</DialogTitle>
          {open !== null && (
            <div className="overflow-hidden rounded-2xl bg-card">
              <img
                src={photos[open].src}
                alt={photos[open].alt}
                width={1200}
                height={1200}
                className="h-auto w-full object-contain"
              />
              <div className="bg-primary-deep p-5 text-center text-primary-foreground">
                <div className="font-display text-lg font-semibold">{photos[open].caption}</div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
