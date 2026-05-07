export function Marquee({ text }: { text: string }) {
  const items = Array.from({ length: 6 });
  return (
    <div className="overflow-hidden border-y border-border py-8 bg-muted/30">
      <div className="flex gap-16 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {items.map((_, i) => (
          <span key={i} className="font-display text-4xl md:text-6xl text-foreground/80">
            {text} <span className="text-secondary">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}