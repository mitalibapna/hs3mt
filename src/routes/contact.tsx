import { createFileRoute } from "@tanstack/react-router";
import SiteLayout from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | HS3MT" },
      { name: "description", content: "Get in touch with the HS3MT team and join the mailing list for competition updates." },
      { property: "og:title", content: "Contact HS3MT" },
      { property: "og:description", content: "Reach the HS3MT team and stay up to date." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Contact</div>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">
            Get in <span className="italic text-gradient-gold">touch</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Questions about the competition, judging, or partnerships? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSflMjUq7m6bgbk1x3QEdZ5U5fixoOlViQgZ4dOD3V0s1BF2FA/viewform?usp=dialog"
            target="_blank" rel="noreferrer"
            className="card-elegant p-8 group"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Mailing List</div>
            <div className="mt-3 font-display text-2xl text-foreground">
              Get competition updates
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Be the first to know when submissions open, deadlines approach, and winners are announced.
            </p>
            <div className="mt-5 text-sm text-gold-bright">Join the list →</div>
          </a>

          <a
            href="https://www.youtube.com/@HS3MT/videos"
            target="_blank" rel="noreferrer"
            className="card-elegant p-8 group"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-gold">YouTube</div>
            <div className="mt-3 font-display text-2xl text-foreground">
              Watch past presentations
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              See how previous HS3MT finalists distilled their research into three powerful minutes.
            </p>
            <div className="mt-5 text-sm text-gold-bright">Open channel →</div>
          </a>
        </div>

        <div className="mt-12 card-elegant p-8 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Email</div>
          <a href="mailto:info@hs3mt.org" className="mt-3 inline-block font-display text-3xl text-gradient-gold hover:underline">
            info@hs3mt.org
          </a>
          <p className="mt-3 text-sm text-muted-foreground">We typically respond within a few business days.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
