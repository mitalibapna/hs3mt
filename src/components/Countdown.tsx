import { useEffect, useState } from "react";

// Competition opens December 1st, 2026
const TARGET = new Date("2026-12-01T00:00:00").getTime();

function diff(now: number) {
  const ms = Math.max(0, TARGET - now);
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { days, hours, minutes, seconds, done: ms === 0 };
}

function Cell({ value, label, mounted }: { value: number; label: string; mounted: boolean }) {
  const padded = mounted ? String(value).padStart(2, "0") : "––";
  return (
    <div className="group relative">
      <div className="card-elegant px-4 py-5 sm:px-6 sm:py-7 min-w-[78px] sm:min-w-[110px] text-center">
        <div className="font-display text-4xl sm:text-6xl text-gradient-gold tabular-nums leading-none">
          {padded}
        </div>
        <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {label}
        </div>
      </div>
    </div>
  );
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState(() => diff(TARGET)); // safe default for SSR
  useEffect(() => {
    setMounted(true);
    setT(diff(Date.now()));
    const id = setInterval(() => setT(diff(Date.now())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-gold">
        <span className="h-px w-8 bg-gold/60" />
        {t.done ? "Submissions Open" : "Submissions Open In"}
        <span className="h-px w-8 bg-gold/60" />
      </div>
      <div className="mt-5 flex items-center gap-2 sm:gap-3">
        <Cell value={t.days} label="Days" mounted={mounted} />
        <span className="font-display text-3xl sm:text-5xl text-gold/40">:</span>
        <Cell value={t.hours} label="Hours" mounted={mounted} />
        <span className="font-display text-3xl sm:text-5xl text-gold/40">:</span>
        <Cell value={t.minutes} label="Minutes" mounted={mounted} />
        <span className="font-display text-3xl sm:text-5xl text-gold/40">:</span>
        <Cell value={t.seconds} label="Seconds" mounted={mounted} />
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        December 1, 2026. That is when the 2026 to 2027 HS3MT opens.
      </div>
    </div>
  );
}
