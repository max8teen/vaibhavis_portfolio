import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let rx = 0, ry = 0, x = 0, y = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    const loop = () => {
      rx += (x - rx) * 0.15; ry += (y - ry) * 0.15;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(loop);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    loop();
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[9998] -ml-1 -mt-1 h-2 w-2 rounded-full bg-secondary mix-blend-difference hidden md:block" />
      <div
        ref={ring}
        className={`pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-secondary mix-blend-difference transition-[width,height,margin] duration-300 hidden md:block ${
          hover ? "h-12 w-12 -ml-6 -mt-6" : "h-8 w-8 -ml-4 -mt-4"
        }`}
      />
    </>
  );
}