import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

// Deadline gelombang PPDB — sesuaikan setiap tahun ajaran baru
// Format: YYYY-MM-DD
const PPDB_DEADLINE = "2025-07-15T23:59:59+07:00";

function getTimeLeft(targetMs: number) {
  const ms = Math.max(0, targetMs - Date.now());
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  return { days, hours, minutes, expired: ms === 0 };
}

export function AnnouncementBar() {
  const targetMs = new Date(PPDB_DEADLINE).getTime();
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetMs));

  useEffect(() => {
    if (timeLeft.expired) return;
    const id = setInterval(() => setTimeLeft(getTimeLeft(targetMs)), 60_000);
    return () => clearInterval(id);
  }, [targetMs, timeLeft.expired]);

  return (
    <div className="relative z-40 bg-gradient-hero text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2 text-center text-[12px] sm:text-xs lg:justify-between lg:px-8">
        <p className="inline-flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          <span>
            <span className="font-semibold text-gold">PPDB dibuka</span>
            <span className="opacity-80">
              {" "}
              · Gratis pendaftaran + beasiswa 1 tahun untuk 20 pendaftar pertama
            </span>
          </span>
        </p>
        <p className="inline-flex items-center gap-2">
          {!timeLeft.expired && (
            <span className="hidden font-mono tabular-nums sm:inline">
              Tutup dalam{" "}
              <span className="font-bold text-gold">
                {timeLeft.days}h {timeLeft.hours}j {timeLeft.minutes}m
              </span>
            </span>
          )}
          <Link
            to="/ppdb"
            className="inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 font-semibold text-gold-foreground transition hover:opacity-90"
          >
            Daftar Sekarang <ArrowRight className="h-3 w-3" />
          </Link>
        </p>
      </div>
    </div>
  );
}
