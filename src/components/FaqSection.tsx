import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Apakah ada tes masuk untuk calon siswa baru?",
    a: "Tidak ada tes seleksi yang memberatkan. Kami hanya melakukan wawancara singkat dan pemetaan baca tulis Al-Qur'an untuk membantu penempatan kelas yang sesuai.",
  },
  {
    q: "Berapa biaya pendaftaran dan SPP per bulan?",
    a: "Biaya pendaftaran GRATIS untuk semua calon peserta didik. 20 pendaftar pertama mendapatkan beasiswa pendidikan 1 tahun. Informasi SPP dapat diperoleh langsung dari panitia PPDB.",
  },
  {
    q: "Apakah ada program tahfidz Al-Qur'an?",
    a: "Ya, kami memiliki program tahfidz terstruktur, pembiasaan tilawah pagi, dan target hafalan juz 30 untuk seluruh siswa selama 3 tahun pendidikan.",
  },
  {
    q: "Ekstrakurikuler apa saja yang tersedia?",
    a: "Tersedia Hizbul Wathan (kepanduan), Tapak Suci (bela diri), Hadrah, English Club, Olahraga, dan beberapa ekstrakurikuler lain yang dapat dipilih sesuai minat siswa.",
  },
  {
    q: "Bagaimana sistem seragam sekolah?",
    a: "Seragam terdiri dari seragam putih biru (Senin–Selasa), batik sekolah (Rabu–Kamis), pramuka (Jumat), dan olahraga sesuai jadwal. Informasi pemesanan disampaikan saat daftar ulang.",
  },
  {
    q: "Apakah menerima siswa pindahan dari sekolah lain?",
    a: "Ya, kami menerima siswa pindahan untuk kelas 7 dan 8 dengan menyertakan surat keterangan pindah serta rapor dari sekolah asal. Silakan hubungi panitia untuk prosedur lengkap.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-4xl px-4 py-20 lg:px-8 lg:py-24">
        <div className="text-center">
          <div className="mx-auto inline-flex rounded-2xl bg-gradient-hero p-3 text-primary-foreground">
            <HelpCircle className="h-6 w-6" />
          </div>
          <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.22em] text-gold">FAQ</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary-deep sm:text-4xl">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-3 text-muted-foreground">
            Belum menemukan jawabannya? Hubungi panitia PPDB di atas.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-card data-[state=open]:border-gold/60 data-[state=open]:shadow-elegant"
            >
              <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-primary-deep hover:no-underline sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
