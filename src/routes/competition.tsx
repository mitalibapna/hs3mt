import { createFileRoute } from "@tanstack/react-router";
import SiteLayout from "@/components/SiteLayout";
import Countdown from "@/components/Countdown";

export const Route = createFileRoute("/competition")({
  head: () => ({
    meta: [
      { title: "Competition | HS3MT" },
      { name: "description", content: "HS3MT 2026 to 2027 competition details. Opens December 1, 2026. Deadline January 30, 2027. Winner announced March 13, 2027." },
      { property: "og:title", content: "HS3MT Competition" },
      { property: "og:description", content: "Key dates, rules, and submission link for the HS3MT national competition." },
    ],
  }),
  component: Competition,
});

const dates = [
  { date: "December 1, 2026", title: "Competition Opens", body: "Start recording and submit your three minute thesis." },
  { date: "January 30, 2027", title: "Submission Deadline", body: "All entries must be in by this date." },
  { date: "March 13, 2027", title: "Finalists and Winner Announced", body: "The national champion and honorable mentions are revealed." },
];

const rules = [
  "A single static PowerPoint slide is permitted. No slide transitions, animations, or any kind of movement on the slide.",
  "No additional electronic media. That means no sound files and no video files.",
  "No additional props. No costumes, no musical instruments, no laboratory equipment.",
  "Presentations are limited to three minutes maximum. Anyone who goes over three minutes is disqualified.",
  "Presentations are to be spoken word. No poems, no raps, no songs.",
  "The clock starts the moment a presenter begins, whether that is through movement or through speech.",
];

const steps = [
  {
    n: "01",
    title: "Pick your idea",
    body: "Choose research, a passion project, or a question you have been chasing. Any discipline works.",
  },
  {
    n: "02",
    title: "Design one slide",
    body: "A single static PowerPoint slide. No animations, no transitions, no clutter. The slide supports your words, it does not replace them.",
  },
  {
    n: "03",
    title: "Record your three minutes",
    body: "Film yourself presenting in one continuous take. Stay under three minutes. No edits, no special effects, no second voices.",
  },
  {
    n: "04",
    title: "Submit through the form",
    body: "Upload your video and slide through the official submission form before the January 30, 2027 deadline.",
  },
];

export default function Competition() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-xs uppercase tracking-[0.3em] text-gold text-center">Competition</div>
        <h1 className="mt-3 text-center font-display text-5xl sm:text-6xl">
          The <span className="italic text-gradient-gold">2026 to 2027</span> HS3MT
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          One slide. Three minutes. A national title and a $1,000 grand prize. Submissions open soon.
        </p>

        <div className="mt-12">
          <Countdown />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeBo55lrz_3LaVckTgZGbIBG3C_v8_QAnwe7Jyxp_Dw-QXG7Q/viewform?usp=preview"
            target="_blank" rel="noreferrer"
            className="btn-gold btn-gold-hover rounded-full px-7 py-3 text-sm"
          >
            Submit Your Entry
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSflMjUq7m6bgbk1x3QEdZ5U5fixoOlViQgZ4dOD3V0s1BF2FA/viewform?usp=dialog"
            target="_blank" rel="noreferrer"
            className="btn-ghost-gold rounded-full px-7 py-3 text-sm"
          >
            Join Mailing List
          </a>
        </div>

        {/* How to enter */}
        <div className="mt-20">
          <div className="text-center text-xs uppercase tracking-[0.3em] text-gold">How To Enter</div>
          <h2 className="text-center font-display text-3xl mt-2">Four steps from idea to submission</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {steps.map((s) => (
              <div key={s.n} className="card-elegant p-6 flex gap-5">
                <div className="font-display text-5xl text-gradient-gold leading-none">{s.n}</div>
                <div>
                  <div className="font-display text-xl text-foreground">{s.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeBo55lrz_3LaVckTgZGbIBG3C_v8_QAnwe7Jyxp_Dw-QXG7Q/viewform?usp=preview"
              target="_blank" rel="noreferrer"
              className="btn-gold btn-gold-hover inline-flex rounded-full px-7 py-3 text-sm"
            >
              Open the Submission Form
            </a>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <div className="text-center text-xs uppercase tracking-[0.3em] text-gold">Key Dates</div>
          <h2 className="text-center font-display text-3xl mt-2">The road to the national stage</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {dates.map((d, i) => (
              <div key={d.title} className="card-elegant p-6 relative">
                <div className="font-display text-7xl text-gradient-gold opacity-30 absolute right-4 top-2">{i + 1}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-gold">{d.date}</div>
                <div className="mt-2 font-display text-2xl text-foreground">{d.title}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div className="mt-20">
          <div className="text-center text-xs uppercase tracking-[0.3em] text-gold">The Format</div>
          <h2 className="text-center font-display text-3xl mt-2">Competition rules</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground text-sm">
            Adapted from the official 3MT® competition guidelines.
          </p>
          <ul className="mt-8 mx-auto max-w-3xl space-y-3">
            {rules.map((r, i) => (
              <li key={i} className="card-elegant p-5 flex gap-4">
                <div className="font-display text-xl text-gold w-8 shrink-0">{String(i + 1).padStart(2, "0")}</div>
                <div className="text-foreground leading-relaxed">{r}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
