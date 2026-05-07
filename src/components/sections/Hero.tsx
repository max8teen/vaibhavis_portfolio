import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import heroMobileImg from "@/assets/hero1.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {/* Desktop image */}
        <img
          src={heroImg}
          alt="Vaibhavi Dahiwal studio with devotional Ganesha drawing on easel"
          className="hidden md:block w-full h-full object-cover object-center"
        />
        {/* Mobile image — portraits & paintings wall */}
        <img
          src={heroMobileImg}
          alt="Vaibhavi Dahiwal studio wall with portraits and paintings"
          className="block md:hidden w-full h-full object-cover object-center"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-ui text-[10px] uppercase text-foreground/60"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
