import { createFileRoute, Link } from "@tanstack/react-router";
import SiteLayout from "@/components/SiteLayout";
import ThreeMinuteTimer from "@/components/ThreeMinuteTimer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HS3MT | High School Three Minute Thesis" },
      { name: "description", content: "A national academic competition where high school students share big ideas in just three minutes. Compete for the HS3MT title and a $1,000 grand prize." },
      { property: "og:title", content: "HS3MT | High School Three Minute Thesis" },
      { property: "og:description", content: "Three minutes. One slide. One big idea. Compete for the national title and a $1,000 grand prize." },
    ],
  }),
  component: Home,
});

const pillars = [
  { title: "Build Confidence", body: "Learn to speak clearly through video presentations that hold any audience.", icon: "M12 2v20M5 8l7-6 7 6" },
  { title: "Sharpen Your Thinking", body: "Turn complex research into something anyone can understand in three minutes.", icon: "M4 4h16v16H4z M8 8h8v8H8z" },
  { title: "Connect With Others", body: "Join a national network of student thinkers, researchers, and storytellers.", icon: "M12 12a4 4 0 100-8 4 4 0 000 8zM2 22a10 10 0 0120 0" },
  { title: "Earn Recognition", body: "The national champion takes home a $1,000 cash prize and the HS3MT title. Top finalists are also honored.", icon: "M8 21h8M12 17v4M6 3h12l-1 9a5 5 0 01-10 0L6 3z" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,color-mix(in_oklab,var(--gold)_20%,transparent),transparent_70%)]" />
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[500px] w-[900px] rounded-full blur-3xl bg-gold/5" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 text-center">
          <div className="fade-up inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-gold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold pulse-gold" />
            2026 to 2027 Season
          </div>

          <h1 className="fade-up mt-6 font-display text-5xl sm:text-7xl md:text-[88px] leading-[1.02]">
            <span className="shimmer-text">Three minutes.</span>
            <br />
            <span className="text-foreground">One slide. One </span>
            <span className="italic text-gradient-gold">big idea.</span>
          </h1>

          <p className="fade-up mx-auto mt-7 max-w-2xl text-lg text-muted-foreground">
            HS3MT is the national academic competition where high school students turn research from every discipline into clear, powerful three minute presentations.
          </p>

          <div className="fade-up mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/competition" className="btn-gold btn-gold-hover rounded-full px-7 py-3 text-sm">
              Enter the Competition
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSflMjUq7m6bgbk1x3QEdZ5U5fixoOlViQgZ4dOD3V0s1BF2FA/viewform?usp=dialog"
              target="_blank" rel="noreferrer"
              className="btn-ghost-gold rounded-full px-7 py-3 text-sm"
            >
              Join Mailing List
            </a>
          </div>

          {/* The 3:00 Timer */}
          <div className="mt-16">
            <ThreeMinuteTimer />
          </div>

          {/* Prize strip */}
          <div className="mx-auto mt-20 max-w-4xl card-elegant px-6 py-8 sm:px-10 sm:py-10">
            <div className="grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-border text-center">
              <div className="sm:pr-6">
                <div className="text-xs uppercase tracking-[0.3em] text-gold">Grand Prize</div>
                <div className="font-display text-4xl text-gradient-gold mt-2">$1,000</div>
                <div className="mt-1 text-xs text-muted-foreground">Plus the national title</div>
              </div>
              <div className="sm:px-6">
                <div className="text-xs uppercase tracking-[0.3em] text-gold">Format</div>
                <div className="font-display text-4xl text-foreground mt-2">3 : 00</div>
                <div className="mt-1 text-xs text-muted-foreground">One slide, no props</div>
              </div>
              <div className="sm:pl-6">
                <div className="text-xs uppercase tracking-[0.3em] text-gold">Open To</div>
                <div className="font-display text-4xl text-foreground mt-2">All HS</div>
                <div className="mt-1 text-xs text-muted-foreground">Every discipline welcome</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">What is HS3MT?</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-foreground">
              A national stage for <span className="italic text-gradient-gold">big high school ideas.</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                HS3MT challenges high school students to turn research in <span className="text-foreground">every discipline</span>, from STEM to the humanities to the social sciences, into clear and powerful presentations. Each talk is just three minutes, with one slide and no props.
              </p>
              <p>
                Inspired by the world renowned Three Minute Thesis (3MT®), the competition helps students develop real communication skills and learn to speak with confidence.
              </p>
              <p>
                It is more than a presentation. It is preparation for the real world, because your ideas only matter if people understand them.
              </p>
            </div>
            <div className="mt-8 flex gap-3">
              <Link to="/about" className="btn-ghost-gold rounded-full px-5 py-2 text-sm">Read more</Link>
              <Link to="/resources" className="text-sm text-gold-bright hover:underline self-center">See examples →</Link>
            </div>
          </div>

          <div className="relative">
            <div className="card-elegant p-8">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.3em] text-gold">Key Dates</div>
                <div className="text-xs text-muted-foreground">2026 to 2027</div>
              </div>
              <ul className="mt-6 space-y-5">
                {[
                  { date: "Dec 1, 2026", title: "Competition Opens", body: "Submissions begin." },
                  { date: "Jan 30, 2027", title: "Submission Deadline", body: "All entries due." },
                  { date: "Mar 13, 2027", title: "Finalists and Winner Announced", body: "National champion revealed." },
                ].map((d) => (
                  <li key={d.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-2 w-2 rounded-full bg-gold" />
                      <div className="h-full w-px bg-border" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.25em] text-gold">{d.date}</div>
                      <div className="font-display text-xl text-foreground mt-1">{d.title}</div>
                      <div className="text-sm text-muted-foreground">{d.body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Why It Matters</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Four reasons to compete.</h2>
        </div>
        <div className="hairline mt-10" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div key={p.title} className="card-elegant p-6 fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gold/40 bg-gold/10">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-bright">
                  <path d={p.icon} />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-2xl text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2026 WINNERS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="card-elegant relative overflow-hidden p-10 sm:p-14">
          <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_top_right,var(--gold),transparent_60%)]" />
          <div className="text-xs uppercase tracking-[0.3em] text-gold">2026 Recognized Participants</div>
          <div className="mt-4 grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Winner</div>
              <h3 className="font-display text-5xl sm:text-6xl text-gradient-gold mt-2">Anvi Singh</h3>
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Honorable Mentions</div>
              <ul className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1 font-display text-xl text-foreground">
                <li>Collin Lu</li>
                <li>Myra Kulkarni</li>
                <li>Kemdi Ekeanyanwu</li>
                <li>Isha Stauber</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.youtube.com/@HS3MT/videos" target="_blank" rel="noreferrer"
              className="btn-gold btn-gold-hover rounded-full px-5 py-2 text-sm"
            >
              Watch Their Videos
            </a>
            <Link to="/winners" className="btn-ghost-gold rounded-full px-5 py-2 text-sm">See all winners</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl sm:text-5xl">
          Your idea deserves <span className="italic text-gradient-gold">three minutes</span> on a national stage.
        </h2>
        <p className="mt-4 text-muted-foreground">
          The 2026 to 2027 HS3MT Competition opens December 1, 2026. Be ready.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/competition" className="btn-gold btn-gold-hover rounded-full px-7 py-3 text-sm">
            View Competition Details
          </Link>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSflMjUq7m6bgbk1x3QEdZ5U5fixoOlViQgZ4dOD3V0s1BF2FA/viewform?usp=dialog"
            target="_blank" rel="noreferrer"
            className="btn-ghost-gold rounded-full px-7 py-3 text-sm"
          >
            Get Updates
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
