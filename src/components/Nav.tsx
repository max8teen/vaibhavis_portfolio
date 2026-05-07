import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/commission", label: "Commission" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 md:px-16 py-4 md:py-6 transition-all duration-500 ${
          scrolled || menuOpen ? "bg-background/95 backdrop-blur-md border-b border-border" : ""
        }`}
      >
        {/* Logo — slightly smaller on mobile */}
        <Link
          to="/"
          className="font-display text-base md:text-2xl text-foreground leading-none"
          onClick={() => setMenuOpen(false)}
        >
          Vaibhavi Dahiwal
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-10 items-center">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-ui text-[11px] uppercase text-muted-foreground hover:text-secondary transition-colors relative group"
              activeProps={{ className: "font-ui text-[11px] uppercase text-secondary" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>

        <Link
          to="/commission"
          className="hidden md:inline-block font-ui text-[11px] uppercase text-secondary border border-secondary px-6 py-3 hover:bg-secondary hover:text-secondary-foreground transition-colors"
        >
          Inquire
        </Link>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] z-50 relative"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block w-6 h-px bg-foreground origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-px bg-foreground"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block w-6 h-px bg-foreground origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-center px-8 md:hidden"
          >
            {/* Subtle grain texture */}
            <div className="absolute inset-0 texture-paper opacity-30 pointer-events-none" />

            <nav className="flex flex-col gap-2 relative">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setMenuOpen(false)}
                    className="block font-display text-4xl text-foreground py-3 border-b border-border/40 hover:text-secondary transition-colors"
                    activeProps={{ className: "block font-display text-4xl text-secondary py-3 border-b border-border/40" }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              {/* Inquire CTA at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.42, duration: 0.4 }}
                className="mt-10"
              >
                <Link
                  to="/commission"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block font-ui text-[11px] uppercase text-secondary border border-secondary px-8 py-4 hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  Inquire
                </Link>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="font-accent text-sm text-muted-foreground mt-8"
              >
                Reverence · Patience · प्राण प्रतिष्ठा
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
