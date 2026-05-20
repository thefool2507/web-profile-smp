import { MessageCircle } from "lucide-react";

const PHONE = "6282336028547"; // Bu Farid — Panitia PPDB
const MESSAGE = encodeURIComponent(
  "Assalamu'alaikum, saya tertarik dengan PPDB SMP Muhammadiyah 7 Wuluhan. Boleh minta informasinya?",
);

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat panitia PPDB via WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-elegant transition-transform hover:-translate-y-0.5 sm:bottom-7 sm:right-7"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/40" aria-hidden />
        <MessageCircle className="relative h-5 w-5" />
      </span>
      <span className="hidden sm:inline">Chat Panitia PPDB</span>
    </a>
  );
}
