import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { PrestasiShowcase } from "@/components/PrestasiShowcase";
import { PrestasiCounter } from "@/components/PrestasiCounter";

export const Route = createFileRoute("/prestasi")({
  component: PrestasiPage,
});

function PrestasiPage() {
  useEffect(() => {
    document.title = "Prestasi Siswa — SMP Muhammadiyah 7 Wuluhan";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Capaian Siswa"
        title="Prestasi yang Membanggakan"
        description="Hasil kerja keras siswa, guru, dan orang tua. Sebagian capaian akademik & non-akademik kami."
      />
      <PrestasiCounter />
      <PrestasiShowcase />
    </>
  );
}
