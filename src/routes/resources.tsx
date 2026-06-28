import { createFileRoute } from "@tanstack/react-router";
import SiteLayout from "@/components/SiteLayout";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources | HS3MT" },
      { name: "description", content: "Guides and example presentations to help you prepare a winning three-minute thesis." },
      { property: "og:title", content: "HS3MT Resources" },
      { property: "og:description", content: "Tips, guides, and example presentations from past 3MT champions." },
    ],
  }),
  component: Resources,
});

const videos = [
  {
    id: "D_1MK3Ub9QM",
    title: "Winning Tips for a Successful 3MT® Presentation",
    blurb: "Astrophysics PhD student Sean McGraw introduces the 3MT, shares his award winning presentation, and breaks down how he prepared.",
    length: "12:33",
  },
  {
    id: "XxT9C61E2VE",
    title: "Three Minute Thesis Winner 2024",
    blurb: "Watch the winning presentation from the 2024 international 3MT competition.",
    length: "3:14",
  },
  {
    id: "vYzU9lyfNeI",
    title: "How to Craft Your Three-Minute Story",
    blurb: "A short workshop on structuring a powerful three-minute talk.",
    length: "8:21",
  },
];

function Resources() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Resources</div>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">
            Guides & <span className="italic text-gradient-gold">examples</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Below are guides and examples of presentations. Check out the{" "}
            <a href="https://www.youtube.com/@HS3MT/videos" target="_blank" rel="noreferrer" className="text-gold-bright underline-offset-4 hover:underline">
              HS3MT YouTube channel
            </a>{" "}
            for past participant videos.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <a
              key={v.id}
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noreferrer"
              className="card-elegant group overflow-hidden block"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink transition-transform group-hover:scale-110">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 rounded bg-background/80 px-2 py-1 text-xs text-foreground font-mono">{v.length}</div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.blurb}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 card-elegant p-8 sm:p-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Quick Prep Checklist</div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Lead with the why. Make the audience care in your first sentence.",
              "Distill your research down to one clear, surprising idea.",
              "Design a single slide that supports your words instead of duplicating them.",
              "Rehearse out loud. Time yourself. Then trim.",
              "Land an ending that gives the audience something to carry away.",
              "Submit before the January 30, 2027 deadline.",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-sm text-foreground">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
