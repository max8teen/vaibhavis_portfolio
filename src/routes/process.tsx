import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { StudioPractice } from "@/components/sections/StudioPractice";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Vaibhavi Dahiwal" },
      { name: "description", content: "The studio practice — pigment, paper, patience." },
    ],
  }),
  component: Process,
});

const steps = [
  { n: "01", t: "Invocation", d: "Each work begins with quiet — a sketchbook page, a chosen subject, a moment of stillness." },
  { n: "02", t: "Material", d: "Cotton rag, graphite, charcoal, raw pigment. Materials chosen for their honesty." },
  { n: "03", t: "Form", d: "Long sittings. Slow build. Layer over layer until form breathes on its own." },
  { n: "04", t: "Reverence", d: "Mistakes are kept; histories are visible. The piece is finished when it stops asking." },
];

function Process() {
  return (
    <main>
      <PageHero kicker="प्रक्रिया" title="The Process" subtitle="An unhurried devotion to the hand-made." />
      <StudioPractice />
      <section className="py-32 px-6 md:px-16 bg-muted/40">
        <div className="grid md:grid-cols-2 gap-16">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="border-t border-border pt-8">
                <p className="font-ui text-xs text-secondary mb-3">{s.n}</p>
                <h3 className="font-display text-3xl md:text-4xl text-foreground mb-3">{s.t}</h3>
                <p className="font-body text-lg text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}