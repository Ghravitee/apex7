import { useState } from "react";
import type { MouseEvent } from "react";

const tokenFacts = [
  { label: "Symbol", value: "TBA" },
  { label: "Chain", value: "Robinhood Chain" },
  { label: "Total supply", value: "TBA" },
  { label: "Contract", value: "TBA" },
];

// Illustrative only — replace with real allocation once client confirms
const allocation = [
  { label: "Public / liquidity", pct: 40, color: "var(--color-lemon)" },
  { label: "Team", pct: 20, color: "var(--color-steel)" },
  { label: "Treasury", pct: 25, color: "var(--color-ice-dim)" },
  { label: "Ecosystem / rewards", pct: 15, color: "var(--color-line)" },
];

function ReticleCorner({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const base = "absolute h-4 w-4 border-lemon/40";
  const map: Record<string, string> = {
    tl: "top-0 left-0 border-l border-t",
    tr: "top-0 right-0 border-r border-t",
    bl: "bottom-0 left-0 border-l border-b",
    br: "bottom-0 right-0 border-r border-b",
  };
  return <span className={`${base} ${map[position]}`} aria-hidden="true" />;
}

function FactCard({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-lg border border-line bg-panel/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lemon/30 hover:bg-panel/80 hover:shadow-[0_8px_30px_-8px_rgba(216,255,62,0.15)]"
    >
      <ReticleCorner position="tl" />
      <ReticleCorner position="br" />
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(140px circle at var(--x, 50%) var(--y, 0%), rgba(216,255,62,0.08), transparent 70%)",
        }}
      />
      <p className="relative font-mono text-[11px] uppercase tracking-wide text-steel transition-colors duration-300 group-hover:text-lemon/70">
        {label}
      </p>
      <p className="relative mt-2 truncate font-mono text-sm text-ice">
        {value}
      </p>
    </div>
  );
}

export function TokenInfo() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="token"
      className="relative overflow-hidden border-t border-line/60 py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--color-ice) 0px, var(--color-ice) 1px, transparent 1px, transparent 16px), repeating-linear-gradient(-45deg, var(--color-ice) 0px, var(--color-ice) 1px, transparent 1px, transparent 16px)",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 75% 60%, black 25%, transparent 85%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div
          data-aos="fade-up"
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-lemon">
              Token
            </p>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-bold tracking-tight text-ice sm:text-4xl">
              The token behind the agents
            </h2>
          </div>
          <span className="rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-[11px] text-steel">
            Details finalizing — check back soon
          </span>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tokenFacts.map((fact, i) => (
            <FactCard
              key={fact.label}
              label={fact.label}
              value={fact.value}
              delay={100 + i * 80}
            />
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="150" className="mt-14">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-lg font-semibold text-ice">
              Allocation
            </h3>
            <span className="font-mono text-[11px] text-steel">
              Illustrative — final split TBA
            </span>
          </div>

          <div className="mt-5 flex h-3 w-full overflow-hidden rounded-full border border-line">
            {allocation.map((a) => {
              const isHovered = hovered === a.label;
              const isDimmed = hovered !== null && !isHovered;
              return (
                <div
                  key={a.label}
                  onMouseEnter={() => setHovered(a.label)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    width: `${a.pct}%`,
                    backgroundColor: a.color,
                    opacity: isDimmed ? 0.35 : 1,
                    transform: isHovered ? "scaleY(1.4)" : "scaleY(1)",
                  }}
                  className="h-full origin-center cursor-default transition-all duration-300 first:rounded-l-full last:rounded-r-full"
                />
              );
            })}
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {allocation.map((a) => {
              const isHovered = hovered === a.label;
              const isDimmed = hovered !== null && !isHovered;
              return (
                <button
                  key={a.label}
                  type="button"
                  onMouseEnter={() => setHovered(a.label)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex items-center gap-2 transition-opacity duration-300"
                  style={{ opacity: isDimmed ? 0.4 : 1 }}
                >
                  <span
                    className="h-2.5 w-2.5 rounded-sm transition-transform duration-300"
                    style={{
                      backgroundColor: a.color,
                      transform: isHovered ? "scale(1.3)" : "scale(1)",
                    }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs text-ice-dim">
                    {a.label} <span className="text-steel">— {a.pct}%</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
