import { artworks } from "@/lib/artworks";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

export function LivingArchive() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  const [active, setActive] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative h-[300vh] bg-background" id="living-archive">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-6 md:px-16 mb-12">
          <Reveal>
            <p className="font-accent text-xl text-secondary mb-3">अनंत संग्रह</p>
            <h2 className="font-display text-4xl md:text-7xl text-foreground">The Living Archive</h2>
            <p className="font-body text-muted-foreground mt-4 max-w-md">
              A horizontal procession of works — scroll to wander through the studio.
            </p>
          </Reveal>
        </div>
        <motion.div style={{ x }} className="flex gap-8 md:gap-12 pl-6 md:pl-16 will-change-transform">
          {artworks.map((a, i) => (
            <div
              key={a.id}
              data-cursor-hover
              onClick={() => setActive(i)}
              className="group relative shrink-0 w-[70vw] md:w-[35vw] h-[55vh] overflow-hidden cursor-pointer"
            >
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <p className="font-display text-white text-2xl">{a.title}</p>
                  <p className="font-ui text-[10px] uppercase text-white/70 mt-1">{a.medium} — {a.year}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex flex-col md:flex-row"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-8 right-8 z-10 font-ui text-[11px] uppercase text-foreground hover:text-secondary transition-colors"
            >
              ✕ Close
            </button>
            <motion.div
              className="w-full md:w-2/3 h-1/2 md:h-full p-8 md:p-16 flex items-center justify-center"
              initial={{ scale: 0.92 }} animate={{ scale: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={artworks[active].image} alt={artworks[active].title} className="max-w-full max-h-full object-contain shadow-2xl" />
            </motion.div>
            <motion.div
              className="w-full md:w-1/3 h-1/2 md:h-full bg-muted p-8 md:p-16 flex flex-col justify-center border-l border-border"
              initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="font-accent text-secondary text-lg mb-4">कलाकृति</p>
              <h3 className="font-display text-4xl text-foreground mb-4">{artworks[active].title}</h3>
              <p className="font-body text-lg text-muted-foreground mb-2">{artworks[active].medium}</p>
              <p className="font-ui text-[10px] uppercase text-muted-foreground">{artworks[active].year} · {artworks[active].category}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}