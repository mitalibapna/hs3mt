import { useEffect, useRef, useState } from "react";

const START = 180; // 3 minutes in seconds

function format(total: number) {
  const m = Math.floor(total / 60);
  const s = Math.floor(total % 60);
  return { m: String(m), s: String(s).padStart(2, "0") };
}

export default function ThreeMinuteTimer() {
  const [mounted, setMounted] = useState(false);
  const [running, setRunning] = useState(false);
  const [remaining, setRemaining] = useState(START);
  const rafRef = useRef<number | null>(null);
  const startedAtRef = useRef<number | null>(null);
  const startFromRef = useRef<number>(START);

  useEffect(() => setMounted(true), []);

  // Auto start once visible on first paint
  useEffect(() => {
    if (mounted && !running && remaining === START) {
      const t = setTimeout(() => setRunning(true), 500);
      return () => clearTimeout(t);
    }
  }, [mounted, running, remaining]);

  useEffect(() => {
    if (!running) return;
    startedAtRef.current = performance.now();
    startFromRef.current = remaining;

    const tick = (now: number) => {
      const elapsed = (now - (startedAtRef.current ?? now)) / 1000;
      const next = Math.max(0, startFromRef.current - elapsed);
      setRemaining(next);
      if (next <= 0) {
        setRunning(false);
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [running]);

  const reset = () => {
    setRunning(false);
    setRemaining(START);
  };

  const toggle = () => {
    if (remaining <= 0) {
      setRemaining(START);
      setRunning(true);
    } else {
      setRunning((r) => !r);
    }
  };

  const display = format(mounted ? remaining : START);
  const progress = mounted ? remaining / START : 1; // 1 -> 0
  const dash = 2 * Math.PI * 120; // r = 120
  const offset = dash * (1 - progress);
  const finished = mounted && remaining <= 0;

  return (
    <div className="relative mx-auto flex w-full max-w-lg flex-col items-center">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-gold">
        <span className="h-px w-10 bg-gold/60" />
        {finished ? "Time's up" : running ? "Live" : "The Format"}
        <span className="h-px w-10 bg-gold/60" />
      </div>

      <div className="relative mt-6 aspect-square w-[280px] sm:w-[340px]">
        {/* glow */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_65%)] blur-2xl" />

        <svg viewBox="0 0 280 280" className="absolute inset-0 h-full w-full -rotate-90">
          <defs>
            <linearGradient id="goldStroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--gold-bright)" />
              <stop offset="100%" stopColor="var(--gold-deep)" />
            </linearGradient>
          </defs>
          <circle
            cx="140"
            cy="140"
            r="120"
            fill="none"
            stroke="color-mix(in oklab, var(--gold) 18%, transparent)"
            strokeWidth="2"
          />
          <circle
            cx="140"
            cy="140"
            r="120"
            fill="none"
            stroke="url(#goldStroke)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={dash}
            strokeDashoffset={offset}
            style={{ transition: running ? "none" : "stroke-dashoffset 0.6s ease" }}
          />
          {/* tick marks */}
          {Array.from({ length: 60 }).map((_, i) => {
            const angle = (i / 60) * 360;
            const long = i % 5 === 0;
            return (
              <line
                key={i}
                x1="140"
                y1={long ? 28 : 32}
                x2="140"
                y2={long ? 38 : 36}
                stroke={long ? "var(--gold)" : "color-mix(in oklab, var(--gold) 35%, transparent)"}
                strokeWidth={long ? 1.5 : 1}
                transform={`rotate(${angle} 140 140)`}
              />
            );
          })}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="font-display text-7xl sm:text-8xl tabular-nums leading-none text-gradient-gold">
            {display.m}
            <span className={running ? "opacity-100" : "opacity-40"}>:</span>
            {display.s}
          </div>
          <div className="mt-3 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Three Minutes. One Idea.
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button
          onClick={toggle}
          className="btn-gold btn-gold-hover rounded-full px-6 py-2 text-xs uppercase tracking-[0.25em]"
        >
          {finished ? "Run Again" : running ? "Pause" : remaining < START ? "Resume" : "Start"}
        </button>
        <button
          onClick={reset}
          className="btn-ghost-gold rounded-full px-6 py-2 text-xs uppercase tracking-[0.25em]"
        >
          Reset
        </button>
      </div>

      <p className="mt-5 max-w-sm text-center text-sm text-muted-foreground">
        This is the entire stage. One slide, no props, no second takes. The clock is the judge.
      </p>
    </div>
  );
}
