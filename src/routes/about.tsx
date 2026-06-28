import { createFileRoute, Link } from "@tanstack/react-router";
import SiteLayout from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | HS3MT" },
      { name: "description", content: "About HS3MT: a national academic competition inspired by the Three Minute Thesis (3MT®), challenging high school students to share research in three minutes." },
      { property: "og:title", content: "About HS3MT" },
      { property: "og:description", content: "Learn about the High School Three-Minute Thesis competition." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">About</div>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl">
          What is <span className="italic text-gradient-gold">HS3MT</span>?
        </h1>
        <div className="hairline mt-10" />
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            <span className="text-foreground">HS3MT</span> is a national competition that challenges high school students to turn research in <span className="text-foreground">all disciplines</span>, including STEM, the humanities, social sciences, and more, into clear and powerful presentations. Each talk is just three minutes, using one slide and no props.
          </p>
          <p>
            Inspired by the world renowned Three Minute Thesis (3MT®), the competition helps students develop real communication skills and learn to speak with confidence.
          </p>
          <p>
            It is more than a presentation. It is preparation for the real world, because your ideas only matter if people understand them.
          </p>
        </div>

        <div className="mt-14 card-elegant p-8">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Official Recognition</div>
          <p className="mt-3 text-foreground leading-relaxed">
            HS3MT is conducted with official written consent from <span className="italic">The University of Queensland</span>, creators and owners of the Three Minute Thesis® (3MT®) competition.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/competition" className="btn-gold btn-gold-hover rounded-full px-6 py-3 text-sm">Competition Details</Link>
          <Link to="/resources" className="btn-ghost-gold rounded-full px-6 py-3 text-sm">Watch Examples</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
