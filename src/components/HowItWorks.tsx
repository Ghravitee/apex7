import { useEffect, useRef, useState } from "react";

const steps = [
  {
    n: "01",
    title: "Create your agent",
    body: "Name it and generate a wallet — separate from your login wallet, belonging only to this agent. Its private key is shown once. Save it.",
  },
  {
    n: "02",
    title: "Write your strategy",
    body: "Describe how it should behave, in plain language. \u201cFocus on new pools with rising volume in their first hour. Take profit at 15%, cut losses at 8%.\u201d",
  },
  {
    n: "03",
    title: "Set your limits",
    body: "Max size per trade, wallet share cap, slippage tolerance, cooldown, token scope. Hard rules the agent cannot exceed, regardless of what it decides.",
  },
  {
    n: "04",
    title: "Fund the wallet",
    body: "Send ETH to your agent's address. A minimum balance is required before trading switches on — enough to cover trade size and gas.",
  },
  {
    n: "05",
    title: "Turn it on",
    body: "From here it runs unattended: checks the market on schedule, weighs it against your strategy, and files every decision through your limits before anything executes.",
  },
  {
    n: "06",
    title: "Monitor and adjust",
    body: "Watch holdings, P&L, and a full activity log — every trade attempted, whether it ran or was skipped, and why. Pause, rewrite the strategy, or withdraw anytime.",
  },
];

const CYCLE_MS = 2200;

function CornerTick({
  position,
  active,
}: {
  position: "tl" | "br";
  active: boolean;
}) {
  const map =
    position === "tl"
      ? "top-3 left-3 border-l border-t"
      : "bottom-3 right-3 border-r border-b";
  return (
    <span
      className={`pointer-events-none absolute h-3 w-3 transition-colors duration-300 ${map} ${
        active ? "border-lemon/60" : "border-line"
      }`}
    />
  );
}

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (reducedMotion.current) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-t border-line/60 py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, var(--color-ice) 0px, var(--color-ice) 1px, transparent 1px, transparent 14px)",
          maskImage:
            "radial-gradient(ellipse 70% 50% at 20% 30%, black 30%, transparent 85%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-lemon">
            Setup
          </p>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-bold tracking-tight text-ice sm:text-4xl">
            Six steps. Then it runs without you.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {steps.map((step, i) => {
            const isActive = active === i;
            return (
              <div
                key={step.n}
                className={`relative overflow-hidden rounded-lg border p-6 transition-colors duration-500 ${
                  isActive
                    ? "border-lemon/30 bg-panel/70"
                    : "border-line bg-panel/40"
                }`}
              >
                <CornerTick position="tl" active={isActive} />
                <CornerTick position="br" active={isActive} />

                <span
                  className={`pointer-events-none absolute -right-3 -top-8 select-none font-display text-8xl font-bold transition-colors duration-500 ${
                    isActive ? "text-lemon/10" : "text-line/50"
                  }`}
                  aria-hidden="true"
                >
                  {step.n}
                </span>

                <div className="relative flex gap-5">
                  <span
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[11px] transition-colors duration-500 ${
                      isActive
                        ? "border-lemon bg-lemon/10 text-lemon"
                        : "border-lemon/30 text-lemon"
                    }`}
                  >
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ice">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ice-dim">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
