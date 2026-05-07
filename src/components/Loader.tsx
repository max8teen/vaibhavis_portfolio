import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18;
      if (p >= 100) { p = 100; clearInterval(id); setTimeout(() => setDone(true), 400); }
      setPct(Math.floor(p));
    }, 120);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.p
            className="font-accent text-2xl text-secondary mb-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          >
            प्राण प्रतिष्ठा
          </motion.p>
          <h1 className="shimmer-text font-display text-5xl md:text-7xl tracking-wide">
            Vaibhavi Dahiwal
          </h1>
          <div className="mt-10 w-64 h-px bg-border overflow-hidden">
            <motion.div className="h-full bg-secondary" style={{ width: `${pct}%` }} />
          </div>
          <p className="font-ui text-xs uppercase mt-4 text-muted-foreground">{pct}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}