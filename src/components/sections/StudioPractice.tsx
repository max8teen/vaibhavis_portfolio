import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import studioImg from "@/assets/hero2.jpg";

// Sketch images — Unsplash CDN (loads in browser)
const sketchImages = [
  {
    src: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=800&q=85&auto=format&fit=crop",
    title: "Head Study I",
    medium: "Graphite on Cartridge",
  },
  {
    src: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=800&q=85&auto=format&fit=crop",
    title: "Figure — Seated",
    medium: "Charcoal on Newsprint",
  },
  {
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=85&auto=format&fit=crop",
    title: "Hands Study II",
    medium: "Sanguine on Rag",
  },
  {
    src: "https://images.unsplash.com/photo-1579541591970-3a4eabb8d59a?w=800&q=85&auto=format&fit=crop",
    title: "Botanical Study",
    medium: "Ink & Wash",
  },
  {
    src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=85&auto=format&fit=crop",
    title: "Impasto Detail",
    medium: "Oil on Cotton",
  },
  {
    src: "https://images.unsplash.com/photo-1589241062272-c0a000072dfa?w=800&q=85&auto=format&fit=crop",
    title: "Drapery Study",
    medium: "Charcoal on Rag",
  },
];

const paintingImages = [
  {
    src: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=1200&q=85&auto=format&fit=crop",
    alt: "Oil painting in progress on easel",
  },
  {
    src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=900&q=85&auto=format&fit=crop",
    alt: "Close up layered oil paint",
  },
  {
    src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=900&q=85&auto=format&fit=crop",
    alt: "Abstract oil painting texture",
  },
];

const processSteps = [
  { n: "I", title: "Observation", desc: "The eye trains before the hand moves. Sustained looking—light, shadow, form, gesture—precedes every mark." },
  { n: "II", title: "Sketching", desc: "Raw charcoal on rough rag paper. Lines that commit, erase, and commit again. The sketch is never precious." },
  { n: "III", title: "Rendering", desc: "Pigment meets surface. Impasto layers build slowly. Each palette-knife pass a micro-decision made irreversible." },
];

export function StudioPractice() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const floatY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section
      ref={sectionRef}
      className="bg-background relative overflow-hidden"
      id="process"
    >
      {/* ── Grain texture layer ── */}
      <div className="absolute inset-0 texture-paper opacity-40 pointer-events-none" />

      {/* ══════════════════════════════════════
          PART 1 — HERO SPLIT: main image + text
      ══════════════════════════════════════ */}
      <div className="py-32 md:py-48 px-6 md:px-16">
        <div className="grid grid-cols-12 gap-6 md:gap-12 items-center relative">

          {/* Left: main studio image + floating brush detail */}
          <div className="col-span-12 md:col-span-7 order-2 md:order-1 relative pb-12 lg:pb-0">
            <Reveal>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <img
                  src={studioImg}
                  alt="Vaibhavi Dahiwal's studio — Ganesha drawing on easel with paints"
                  className="w-full aspect-[16/10] object-cover object-center"
                />
              </motion.div>
            </Reveal>

            {/* Floating offset inset — brush detail */}
            <Reveal delay={0.35}>
              <motion.div
                style={{ y: floatY }}
                className="absolute -bottom-8 -right-4 md:-right-10 w-[45%] lg:w-[38%] border border-border bg-background p-3 hidden lg:block z-10 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=900&q=85&auto=format&fit=crop"
                  alt="Macro of brush bristles applying impasto paint"
                  className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <p className="font-ui text-[9px] uppercase tracking-widest text-muted-foreground mt-2 text-center">
                  Impasto — Oil on Cotton
                </p>
              </motion.div>
            </Reveal>
          </div>

          {/* Right: text */}
          <div className="col-span-12 md:col-span-4 md:col-start-9 order-1 md:order-2">
            <Reveal>
              <p className="font-accent text-xl text-secondary mb-4">प्राण प्रतिष्ठा</p>
              <h2 className="font-display text-4xl md:text-6xl text-foreground mb-8 leading-tight">
                The Studio<br />Practice
              </h2>
              <p className="font-body text-xl text-foreground mb-6 leading-relaxed">
                Every piece begins as an act of reverence. The studio is a sanctum where raw
                materials—pigment, oil, raw cotton—are coaxed into breathing forms.
              </p>
              <p className="font-body text-base text-muted-foreground mb-10 leading-relaxed">
                The process rejects the sterile nature of digital perfection, favoring the honest,
                tactile reality of human touch. Mistakes are not erased; they are embedded as history.
              </p>
              <Link
                to="/process"
                className="inline-flex items-center gap-2 font-ui text-[11px] uppercase text-secondary border-b border-secondary pb-1 hover:gap-4 transition-all"
              >
                View the process <span>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          PART 2 — PROCESS STEPS
      ══════════════════════════════════════ */}
      <div className="px-6 md:px-16 pb-24 md:pb-40">
        <Reveal>
          <p className="font-ui text-[10px] uppercase tracking-widest text-muted-foreground mb-10">
            — The Method
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.12}>
              <motion.div
                className="bg-background p-8 md:p-12 group relative overflow-hidden"
                whileHover={{ backgroundColor: "var(--muted)" }}
                transition={{ duration: 0.4 }}
              >
                {/* Hover accent bar */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-secondary origin-bottom"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
                <p className="font-display text-4xl text-border group-hover:text-secondary/40 transition-colors duration-500 mb-6 leading-none">
                  {step.n}
                </p>
                <h3 className="font-display text-2xl text-foreground mb-3">{step.title}</h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          PART 3 — SKETCH GRID
      ══════════════════════════════════════ */}
      <div className="bg-[#111] py-24 md:py-40 px-6 md:px-16">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
            <div>
              <p className="font-accent text-lg text-secondary mb-3">स्केचबुक</p>
              <h2 className="font-display text-3xl md:text-5xl text-white">Studies &<br />Observations</h2>
            </div>
            <p className="font-body text-base text-white/40 max-w-xs text-right leading-relaxed">
              The sketchbook is where thinking happens. Unguarded, unsettled, honest.
            </p>
          </div>
        </Reveal>

        {/* 3-col masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {sketchImages.map((img, i) => (
            <Reveal key={img.title} delay={i * 0.09}>
              <motion.div
                className={`group relative overflow-hidden bg-white/5 ${i === 1 || i === 4 ? "md:mt-10" : ""}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={img.src}
                    alt={img.title}
                    className={`w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ${
                      i % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                {/* Caption overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 md:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                >
                  <div>
                    <p className="font-display text-white text-lg md:text-xl">{img.title}</p>
                    <p className="font-ui text-[9px] uppercase tracking-widest text-white/60 mt-1">
                      {img.medium}
                    </p>
                  </div>
                </motion.div>
                {/* Always-visible index badge */}
                <span className="absolute top-3 right-3 font-ui text-[9px] tracking-widest text-white/40 bg-black/40 px-2 py-1 backdrop-blur-sm">
                  0{i + 1}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          PART 4 — PAINTING SPOTLIGHT
      ══════════════════════════════════════ */}
      <div className="py-24 md:py-40 px-6 md:px-16 bg-background">
        <Reveal>
          <p className="font-ui text-[10px] uppercase tracking-widest text-muted-foreground mb-12">
            — Oil & Mixed Media
          </p>
        </Reveal>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          {/* Painting image collage */}
          <div className="col-span-12 md:col-span-7 relative">
            <Reveal>
              <motion.div
                className="overflow-hidden w-full"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={paintingImages[0].src}
                  alt={paintingImages[0].alt}
                  className="w-full aspect-[4/3] object-cover"
                />
              </motion.div>
            </Reveal>

            {/* Two smaller offset images below */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {paintingImages.slice(1).map((p, i) => (
                <Reveal key={i} delay={0.15 + i * 0.1}>
                  <motion.div
                    style={{ y: i === 0 ? floatY2 : floatY }}
                    className="overflow-hidden"
                  >
                    <motion.img
                      src={p.src}
                      alt={p.alt}
                      className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-16">
            <Reveal>
              <blockquote className="border-l-2 border-secondary pl-6 mb-10">
                <p className="font-body text-xl text-foreground italic leading-relaxed">
                  "The mistake is never the enemy. It is an instruction from the material itself."
                </p>
                <cite className="font-ui text-[9px] uppercase tracking-widest text-muted-foreground block mt-3 not-italic">
                  — Studio Notes, 2023
                </cite>
              </blockquote>

              <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                Working primarily in oil, the impasto builds over weeks. Layers speak to each other
                across time, the earliest marks visible as geological strata beneath the final surface.
              </p>

              <p className="font-body text-base text-muted-foreground mb-10 leading-relaxed">
                Cotton rag, graphite, charcoal, raw pigment — materials chosen for their honesty. Each
                sitting is long. The build is slow. Form arrives when it stops asking.
              </p>

              {/* Materials tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {["Charcoal", "Sanguine", "Conte", "Oil Paint", "Gouache", "Ink Wash", "Watercolour", "Raw Cotton"].map((m) => (
                  <motion.span
                    key={m}
                    className="font-ui text-[9px] uppercase tracking-widest border border-border text-muted-foreground px-3 py-1.5 cursor-default"
                    whileHover={{ borderColor: "var(--secondary)", color: "var(--secondary)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {m}
                  </motion.span>
                ))}
              </div>

              <Link
                to="/commission"
                className="inline-flex items-center gap-2 font-ui text-[11px] uppercase text-secondary border-b border-secondary pb-1 hover:gap-4 transition-all"
              >
                Commission original work <span>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}