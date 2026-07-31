import { AgentLogTicker } from "./AgentLogTicker";
import { ChainChip } from "./ChainChip";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* faint technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ice) 1px, transparent 1px), linear-gradient(90deg, var(--color-ice) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 60% 20%, black 40%, transparent 90%)",
        }}
        aria-hidden="true"
      />

      {/* primary glow, top right */}
      <div
        className="pointer-events-none absolute -top-40 right-0 size-128 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-lemon), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* secondary, dimmer glow, lower left */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 size-96 -translate-x-1/3 translate-y-1/3 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-lemon), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-16 md:grid-cols-2 md:items-center md:pb-28 md:pt-24">
        <div className="min-w-0" data-aos="fade-up" data-aos-duration="900">
          <ChainChip />
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-lemon">
            Autonomous Portfolio Execution — 7
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ice sm:text-5xl">
            Your strategy.
            <br />
            <span className="text-lemon">Its execution.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ice-dim">
            APEX7 runs an autonomous trading agent with its own wallet, on a
            schedule, against rules you write in plain language. Every decision
            is checked against your limits before it executes — and logged with
            the reasoning behind it.
          </p>
          <div className="mt-8 flex flex-col  sm:flex-row items-center gap-4">
            <a
              href="https://t.me/apex7agent_bot"
              className="rounded-md bg-lemon px-6 py-3 text-sm font-semibold text-arctic transition hover:bg-lemon-dim w-full text-center"
            >
              Deploy an agent
            </a>
            <a
              href="https://launch.genesispad.app/token/robinhood/0x81da288556B23b5fc83D9662Ffe6De68797217C4"
              className="rounded-md border border-line px-6 py-3 text-sm font-medium text-ice-dim transition hover:border-lemon/40 hover:bg-lemon/5 hover:text-lemon w-full text-center"
            >
              Buy APEX7
            </a>
          </div>
          <p className="mt-6 font-mono text-xs text-steel">
            Real money. Real risk. Fund only what you're willing to lose.
          </p>
        </div>

        <div
          className="min-w-0"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
        >
          <AgentLogTicker />
        </div>
      </div>
    </section>
  );
}
