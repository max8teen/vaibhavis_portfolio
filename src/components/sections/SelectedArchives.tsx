import { Reveal } from "@/components/Reveal";
import { artworks } from "@/lib/artworks";
import { motion } from "framer-motion";
import { useState } from "react";

const cats = ["All", "Devotional", "Portrait", "Nature", "Study"] as const;

export function SelectedArchives() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const items = cat === "All" ? artworks : artworks.filter((a) => a.category === cat);

  return (
    <section className="py-32 md:py-48 px-6 md:px-16 bg-[#111] text-white relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl">Selected Archives</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-3">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                data-cursor-hover
                className={`px-5 py-2 rounded-full font-ui text-[10px] uppercase border transition-all ${
                  cat === c ? "bg-secondary border-secondary text-white" : "border-white/20 text-white/60 hover:text-white hover:border-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((a, i) => (
          <motion.div
            layout
            key={a.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={i % 4 === 0 ? "md:row-span-2" : ""}
          >
            <div className="bg-white p-6 md:p-10 shadow-2xl group overflow-hidden">
              <div className="border-4 border-white ring-1 ring-black/80 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
            <p className="font-ui text-[10px] uppercase mt-4 text-white/50 text-center">
              {a.title} — {a.year}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}