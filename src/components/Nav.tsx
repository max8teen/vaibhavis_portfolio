import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 py-6 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <Link to="/" className="font-display text-xl md:text-2xl text-foreground">Vaibhavi Dahiwal</Link>
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
    </motion.nav>
  );
}