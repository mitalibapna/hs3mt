import { createFileRoute } from "@tanstack/react-router";
import SiteLayout from "@/components/SiteLayout";

export const Route = createFileRoute("/winners")({
  head: () => ({
    meta: [
      { title: "Winners | HS3MT" },
      { name: "description", content: "The 2026 HS3MT national champion and honorable mentions." },
      { property: "og:title", content: "HS3MT Winners" },
      { property: "og:description", content: "Celebrating the 2026 HS3MT national champion and honorable mentions." },
    ],
  }),
  component: Winners,
});

const honorable = ["Collin Lu", "Myra Kulkarni", "Kemdi Ekeanyanwu", "Isha Stauber"];

function Winners() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">2026 Champions</div>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">
            Recognized <span className="italic text-gradient-gold">Participants</span>
          </h1>
        </div>

        <div className="mt-14 card-elegant relative overflow-hidden p-10 sm:p-16 text-center">
          <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_center,var(--gold),transparent_60%)]" />
          <div className="text-xs uppercase tracking-[0.3em] text-gold">National Champion</div>
          <h2 className="font-display text-6xl sm:text-8xl text-gradient-gold mt-3">Anvi Singh</h2>
          <p className="mt-4 text-muted-foreground">2026 HS3MT National Champion</p>
        </div>

        <div className="mt-14">
          <div className="text-center text-xs uppercase tracking-[0.3em] text-gold">Honorable Mentions</div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {honorable.map((name) => (
              <div key={name} className="card-elegant p-6 text-center">
                <div className="font-display text-2xl text-foreground">{name}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.25em] text-gold">Honorable Mention</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://www.youtube.com/@HS3MT/videos"
            target="_blank"
            rel="noreferrer"
            className="btn-gold btn-gold-hover inline-flex rounded-full px-7 py-3 text-sm"
          >
            Watch the 2026 Presentations
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
