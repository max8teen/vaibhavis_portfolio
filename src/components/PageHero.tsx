import { motion } from "framer-motion";

export function PageHero({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <section className="pt-40 pb-20 px-6 md:px-16 border-b border-border">
      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.4, duration: 0.8 }}
        className="font-accent text-xl text-secondary mb-4"
      >
        {kicker}
      </motion.p>
      <h1 className="font-display text-5xl md:text-8xl text-foreground overflow-hidden">
        <motion.span
          className="inline-block"
          initial={{ y: "110%" }} animate={{ y: 0 }}
          transition={{ delay: 2.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.span>
      </h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1 }}
          className="font-body text-lg text-muted-foreground mt-6 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </section>
  );
}