import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vaibhavi Dahiwal" },
      { name: "description", content: "About the artist Vaibhavi Dahiwal." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main>
      <PageHero kicker="परिचय" title="About" />
      <section className="py-32 px-6 md:px-16 grid md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-7">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1400&q=80"
            alt="Portrait of Vaibhavi Dahiwal in her studio"
            className="w-full aspect-[4/5] object-cover"
          />
        </Reveal>
        <div className="md:col-span-5 flex flex-col justify-center gap-6">
          <Reveal>
            <p className="font-accent text-xl text-secondary">कलाकार</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">A devotional practice</h2>
            <p className="font-body text-lg text-foreground leading-relaxed">
              Vaibhavi Dahiwal is a Pune-based artist whose work draws from classical Indian iconography, lived ritual, and the quiet of long studio days.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              She trained in fine arts and has spent the last decade in dialogue with graphite, charcoal, and oil — building a body of work that is unapologetically slow, deliberate, and made by hand.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-t border-border pt-4">
                <p className="font-ui text-[10px] uppercase text-muted-foreground">Based</p>
                <p className="font-display text-2xl text-foreground">Pune, IN</p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="font-ui text-[10px] uppercase text-muted-foreground">Practice</p>
                <p className="font-display text-2xl text-foreground">10+ yrs</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}