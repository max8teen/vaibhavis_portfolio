import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/commission")({
  head: () => ({
    meta: [
      { title: "Commission — Vaibhavi Dahiwal" },
      { name: "description", content: "Commission a devotional or portrait work from Vaibhavi Dahiwal." },
    ],
  }),
  component: Commission,
});

const offerings = [
  { t: "Devotional Portrait", p: "From ₹65,000", d: "Iconographic study in graphite or gouache. 6–10 weeks." },
  { t: "Bespoke Portrait", p: "From ₹85,000", d: "From life or reference. Charcoal or oil. 8–12 weeks." },
  { t: "Studio Study", p: "From ₹28,000", d: "Smaller works on rag — botanical, drapery, hands." },
];

function Commission() {
  const [sent, setSent] = useState(false);
  return (
    <main>
      <PageHero kicker="आदेश" title="Commission" subtitle="Each commission is a private collaboration. Below are the current offerings." />
      <section className="py-24 px-6 md:px-16 grid md:grid-cols-3 gap-8 border-b border-border">
        {offerings.map((o, i) => (
          <Reveal key={o.t} delay={i * 0.1}>
            <div className="border border-border p-8 h-full bg-card hover:border-secondary transition-colors">
              <h3 className="font-display text-3xl text-foreground mb-2">{o.t}</h3>
              <p className="font-ui text-xs uppercase text-secondary mb-6">{o.p}</p>
              <p className="font-body text-base text-muted-foreground">{o.d}</p>
            </div>
          </Reveal>
        ))}
      </section>
      <section className="py-32 px-6 md:px-16 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Reveal>
            <p className="font-accent text-xl text-secondary mb-4">संपर्क</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Begin an Inquiry</h2>
            <p className="font-body text-lg text-muted-foreground">
              Share a few details about the work you have in mind. The studio responds within a week.
            </p>
          </Reveal>
        </div>
        <Reveal className="md:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="flex flex-col gap-6"
          >
            {["Name", "Email", "Subject of the work"].map((l) => (
              <label key={l} className="block">
                <span className="font-ui text-[10px] uppercase text-muted-foreground">{l}</span>
                <input required className="mt-2 w-full bg-transparent border-b border-border focus:border-secondary outline-none py-3 font-body text-lg text-foreground transition-colors" />
              </label>
            ))}
            <label className="block">
              <span className="font-ui text-[10px] uppercase text-muted-foreground">Notes</span>
              <textarea rows={4} className="mt-2 w-full bg-transparent border-b border-border focus:border-secondary outline-none py-3 font-body text-lg text-foreground transition-colors" />
            </label>
            <motion.button
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              type="submit"
              className="self-start mt-6 font-ui text-[11px] uppercase text-secondary border border-secondary px-8 py-4 hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              {sent ? "Received — Thank you" : "Send Inquiry"}
            </motion.button>
          </form>
        </Reveal>
      </section>
    </main>
  );
}