import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 px-6 md:px-16 py-20">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div>
          <h3 className="font-display text-3xl text-foreground mb-2">Vaibhavi Dahiwal</h3>
          <p className="font-accent text-secondary text-lg">कला अनंत है</p>
        </div>
        <div className="font-body text-muted-foreground">
          <p className="font-ui text-[10px] uppercase mb-3 text-foreground">Studio</p>
          <p>Pune, Maharashtra, India</p>
          <p>studio@vaibhavidahiwal.art</p>
        </div>
        <div className="flex flex-col gap-2 font-ui text-[11px] uppercase">
          <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
          <a href="#" className="hover:text-secondary transition-colors">Behance</a>
          <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
          <Link to="/commission" className="hover:text-secondary transition-colors">Commission</Link>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center font-ui text-[10px] uppercase text-muted-foreground">
        <p>© 2026 Vaibhavi Dahiwal. Crafted with masterful humanism.</p>
        <p>Made by hand. Pixels by intention.</p>
      </div>
    </footer>
  );
}