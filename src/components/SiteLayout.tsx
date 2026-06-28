import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import logoAsset from "@/assets/hs3mt-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/competition", label: "Competition" },
  { to: "/judges", label: "Judges" },
  { to: "/resources", label: "Resources" },
  { to: "/winners", label: "Winners" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const h = size === "lg" ? "h-12 sm:h-14" : "h-10";
  return (
    <Link to="/" className="group inline-flex items-center">
      <img
        src={logoAsset.url}
        alt="HS3MT"
        className={`${h} w-auto transition-transform duration-300 group-hover:scale-[1.02]`}
      />
    </Link>
  );
}

export default function SiteLayout({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/80 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Logo />
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => {
              const active = location.pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-3 py-2 text-sm transition-colors ${
                    active ? "text-gold-bright" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                  )}
                </Link>
              );
            })}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeBo55lrz_3LaVckTgZGbIBG3C_v8_QAnwe7Jyxp_Dw-QXG7Q/viewform?usp=preview"
              target="_blank"
              rel="noreferrer"
              className="btn-gold btn-gold-hover ml-3 rounded-full px-5 py-2 text-sm"
            >
              Enter Now
            </a>
          </nav>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden rounded-md border border-border p-2 text-foreground"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} className="py-2 text-sm text-foreground">
                  {n.label}
                </Link>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeBo55lrz_3LaVckTgZGbIBG3C_v8_QAnwe7Jyxp_Dw-QXG7Q/viewform?usp=preview"
                target="_blank"
                rel="noreferrer"
                className="btn-gold btn-gold-hover mt-3 rounded-full px-4 py-2 text-center text-sm"
              >
                Enter Now
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-20">{children ?? <Outlet />}</main>

      <footer className="border-t border-border mt-24">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-3">
          <div>
            <Logo size="lg" />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The national academic competition where high school students share big ideas in just three minutes.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Explore</div>
            <ul className="space-y-2 text-sm">
              {nav.slice(1).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-muted-foreground hover:text-gold-bright">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Stay connected</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSflMjUq7m6bgbk1x3QEdZ5U5fixoOlViQgZ4dOD3V0s1BF2FA/viewform?usp=dialog"
                  target="_blank" rel="noreferrer"
                  className="text-muted-foreground hover:text-gold-bright"
                >
                  Join the mailing list
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@HS3MT/videos" target="_blank" rel="noreferrer"
                  className="text-muted-foreground hover:text-gold-bright">
                  YouTube channel
                </a>
              </li>
              <li>
                <a href="mailto:info@hs3mt.org" className="text-muted-foreground hover:text-gold-bright">
                  info@hs3mt.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} HS3MT. All rights reserved.</div>
            <div className="max-w-xl md:text-right">
              Conducted with official written consent from The University of Queensland, creators and owners of the Three Minute Thesis® (3MT®) competition.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
