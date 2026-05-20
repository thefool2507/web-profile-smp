import { GraduationCap } from "lucide-react";
import t1 from "@/assets/teacher-1.jpg";
import t2 from "@/assets/teacher-2.jpg";
import t3 from "@/assets/teacher-3.jpg";
import t4 from "@/assets/teacher-4.jpg";
import t5 from "@/assets/teacher-5.jpg";
import t6 from "@/assets/teacher-6.jpg";

const teachers = [
  { name: "Faridatul Maysaroh, S.Pd., S.H.", role: "Kepala Sekolah", subject: "Pancasila", img: t1 },
  { name: "Suem Hariyadi, S.Pd.", role: "Wakil Kepala Sekolah", subject: "IPS Terpadu", img: t4 },
  { name: "Dessy Ratnasari, S.Pd.", role: "Kepala Perpustakaan", subject: "Bahasa Inggris", img: t3 },
  { name: "Ahmad Jamian, S.Pd.I.", role: "Wakil kurikulum", subject: "IPA Terpadu", img: t5 },
  { name: "Luluk Anis Siami, S.Pd.", role: "Wakil Kesiswaan", subject: "Kesenian", img: t2 },
  { name: "Edy Purnomo, S.Ag.", role: "Wali Kelas", subject: "Agama Islam", img: t6 },
];

export function TeachersSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Tenaga Pendidik</span>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary-deep sm:text-4xl">
          Dibimbing oleh Guru Berdedikasi
        </h2>
        <p className="mt-4 text-muted-foreground">
          Para pengajar profesional dan berpengalaman yang siap membimbing putra-putri Anda.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((t) => (
          <article
            key={t.name}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-elegant"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              <img
                src={t.img}
                alt={`Foto ${t.name}`}
                loading="lazy"
                width={512}
                height={512}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 to-transparent" />
              <span className="absolute bottom-3 left-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-foreground shadow-card">
                {t.role}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-bold leading-snug text-primary-deep">{t.name}</h3>
              <div className="mt-4 flex items-center gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>Mengajar <span className="font-semibold text-foreground">{t.subject}</span></span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
