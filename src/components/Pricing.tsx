import { useState } from "react";
import type { MouseEvent } from "react";

const tiers = [
  {
    name: "Free",
    tag: "Get started",
    price: "$0",
    period: "/month",
    baseAgents: 1,
    holderAgents: 2,
    baseFee: 20,
    holderFee: 15,
    features: [
      "Full strategy & limit controls",
      "Complete activity log with reasoning",
      "Checks the market at the standard speed",
    ],
  },
  {
    name: "Pro",
    tag: "Scale up",
    price: "$20",
    period: "/month",
    baseAgents: 5,
    holderAgents: 6,
    baseFee: 20,
    holderFee: 15,
    features: [
      "Everything in Free",
      "Checks the market more often",
      "Room to run more agents at once",
    ],
    featured: true,
  },
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

function PricingCard({
  tier,
  isHolder,
  delay,
}: {
  tier: (typeof tiers)[number];
  isHolder: boolean;
  delay: number;
}) {
  const agents = isHolder ? tier.holderAgents : tier.baseAgents;
  const fee = isHolder ? tier.holderFee : tier.baseFee;

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
      className={`group relative rounded-xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
        tier.featured
          ? "border-lemon/40 bg-panel/80"
          : "border-line bg-panel/50 hover:border-lemon/30"
      }`}
    >
      {/* clipped layer: only the glow + corner ticks live here, so rounded corners stay clean
          without clipping the badge or anything else that needs to render outside the card */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
        <ReticleCorner position="tl" />
        <ReticleCorner position="br" />
        <span
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(220px circle at var(--x, 50%) var(--y, 0%), rgba(216,255,62,0.06), transparent 70%)",
          }}
        />
      </div>

      {tier.featured && (
        <span className="absolute right-6 top-0 z-10 -translate-y-1/2 rounded-full bg-lemon px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-arctic">
          Most agents
        </span>
      )}

      <p className="relative font-mono text-xs uppercase tracking-widest text-lemon">
        {tier.tag}
      </p>
      <h3 className="relative mt-2 font-display text-2xl font-bold text-ice">
        {tier.name}
      </h3>

      <div className="relative mt-5 flex items-baseline gap-1.5">
        <span className="font-display text-4xl font-bold text-ice">
          {tier.price}
        </span>
        {tier.price !== "TBA" && (
          <span className="font-mono text-xs text-steel">{tier.period}</span>
        )}
      </div>

      <div className="relative mt-6 grid grid-cols-2 gap-3 border-y border-line py-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-steel">
            Agent slots
          </p>
          <p className="mt-1 font-mono text-xl text-ice transition-colors duration-300">
            {agents}
            {isHolder && (
              <span className="ml-1.5 text-sm text-lemon">
                (+{tier.holderAgents - tier.baseAgents})
              </span>
            )}
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-steel">
            Performance fee
          </p>
          <p className="mt-1 font-mono text-xl text-ice transition-colors duration-300">
            {fee}%
            {isHolder && (
              <span className="ml-1.5 text-sm text-lemon">
                −{tier.baseFee - tier.holderFee}pt
              </span>
            )}
          </p>
        </div>
      </div>

      <ul className="relative mt-6 space-y-2.5">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-ice-dim">
            <svg
              viewBox="0 0 16 16"
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lemon"
              fill="none"
            >
              <path
                d="M3 8.5 6.2 11.5 13 4.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#launch"
        className={`relative mt-7 block w-full rounded-md px-6 py-3 text-center text-sm font-semibold transition ${
          tier.featured
            ? "bg-lemon text-arctic hover:bg-lemon-dim"
            : "rounded-md border border-line px-6 py-3 text-sm font-medium text-ice-dim transition hover:border-lemon/40 hover:bg-lemon/5 hover:text-lemon w-full text-center"
        }`}
      >
        {tier.price === "$0" ? "Start free" : "Get started"}
      </a>
    </div>
  );
}

export function Pricing() {
  const [isHolder, setIsHolder] = useState(false);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-line/60 py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ice) 1px, transparent 1px), linear-gradient(90deg, var(--color-ice) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 30% 70%, black 25%, transparent 85%)",
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
              Pricing
            </p>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-bold tracking-tight text-ice sm:text-4xl">
              Pay to run agents. Hold to run more.
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setIsHolder((v) => !v)}
            className="flex items-center gap-3 rounded-full border border-line bg-panel px-4 py-2 transition hover:border-steel"
          >
            <span className="font-mono text-xs text-ice-dim">
              Token holder (≥0.5% supply)
            </span>
            <span
              className={`relative h-5 w-9 shrink-0 rounded-full transition-colors duration-300 ${
                isHolder ? "bg-lemon" : "bg-line"
              }`}
            >
              <span
                className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-arctic transition-transform duration-300 ${
                  isHolder ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </span>
          </button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tiers.map((tier, i) => (
            <PricingCard
              key={tier.name}
              tier={tier}
              isHolder={isHolder}
              delay={i * 100}
            />
          ))}
        </div>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-8 max-w-xl font-mono text-xs text-steel"
        >
          Performance fee applies only to realized profit — never to your
          principal. Pro pricing is finalizing; agent limits and fee terms shown
          are current.
        </p>
      </div>
    </section>
  );
}
