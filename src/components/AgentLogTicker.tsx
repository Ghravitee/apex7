import { logEntries } from "../data/logEntries";

const actionStyle: Record<string, string> = {
  BUY: "text-lemon",
  SELL: "text-alert",
  SKIP: "text-ice-dim",
  HOLD: "text-steel",
};

function ReticleCorner({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const base = "absolute h-4 w-4 border-lemon/70";
  const map: Record<string, string> = {
    tl: "top-2 left-2 border-l-2 border-t-2",
    tr: "top-2 right-2 border-r-2 border-t-2",
    bl: "bottom-2 left-2 border-l-2 border-b-2",
    br: "bottom-2 right-2 border-r-2 border-b-2",
  };
  return <span className={`${base} ${map[position]}`} />;
}

export function AgentLogTicker() {
  // duplicate the list so the CSS loop can scroll seamlessly
  const doubled = [...logEntries, ...logEntries];

  return (
    <div
      className="relative h-72 overflow-hidden rounded-md border border-line bg-panel/90"
      aria-hidden="true"
    >
      <ReticleCorner position="tl" />
      <ReticleCorner position="tr" />
      <ReticleCorner position="bl" />
      <ReticleCorner position="br" />
      <div className="flex items-center justify-between gap-2 border-b border-line px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-lemon animate-pulse-soft" />
          <span className="font-mono text-xs uppercase tracking-wider text-ice-dim">
            agent · alpha-01 · tracking
          </span>
        </div>
        <span className="font-mono text-[10px] text-steel">
          sample activity
        </span>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-11 z-10 h-8 bg-gradient-to-b from-panel to-transparent" />
      <div className="animate-scroll-up px-5 py-4">
        {doubled.map((entry, i) => (
          <div
            key={i}
            className="flex items-baseline gap-3 border-b border-line/60 py-2.5 font-mono text-xs last:border-none"
          >
            <span className="text-ice-dim/60">{entry.time}</span>
            <span
              className={`w-10 shrink-0 font-medium ${actionStyle[entry.action]}`}
            >
              {entry.action}
            </span>
            <span className="w-20 shrink-0 text-ice-dim">{entry.pair}</span>
            <span className="truncate text-ice-dim/80">{entry.reason}</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-panel to-transparent" />
    </div>
  );
}
