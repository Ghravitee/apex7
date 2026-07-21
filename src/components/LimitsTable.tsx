const limits = [
  {
    key: "max_size_per_trade",
    desc: "The largest single buy or sell, in USD or ETH",
  },
  {
    key: "wallet_share_cap",
    desc: "Maximum % of wallet balance usable in one trade",
  },
  {
    key: "slippage_tolerance",
    desc: "How much price movement is acceptable before a trade is rejected",
  },
  {
    key: "cooldown",
    desc: "How often the agent is allowed to act, e.g. every 15–30 minutes",
  },
  {
    key: "token_scope",
    desc: "Any qualifying token, or only ones you've listed",
  },
];

export function LimitsTable() {
  return (
    <section
      id="limits"
      className="relative overflow-hidden border-t border-line/60 py-24"
    >
      {/* dot-grid texture, distinct from the hero's line-grid and how-it-works' scanlines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-ice) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 80% 40%, black 30%, transparent 85%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:items-start">
          <div data-aos="fade-up">
            <p className="font-mono text-xs uppercase tracking-widest text-lemon">
              Controls
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ice sm:text-4xl">
              Hard rules. No exceptions.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ice-dim">
              Every decision the agent makes is checked against these before it
              can execute — even if its own reasoning suggested otherwise.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="120">
            <div className="overflow-hidden rounded-lg border border-line bg-panel">
              {/* terminal-style header bar */}
              <div className="flex items-center justify-between border-b border-line bg-panel-2/60 px-5 py-3">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  </div>
                  <span className="font-mono text-xs text-steel">
                    agent.config
                  </span>
                </div>
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-lemon">
                  <span className="h-1.5 w-1.5 rounded-full bg-lemon animate-pulse-soft" />
                  {limits.length}/{limits.length} enforced
                </span>
              </div>

              {limits.map((row, i) => (
                <div
                  key={row.key}
                  className={`group flex flex-col gap-1.5 border-l-2 border-l-transparent px-5 py-4 transition-colors duration-200 hover:border-l-lemon hover:bg-panel-2/40 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
                    i !== limits.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
                    <code className="w-full shrink-0 font-mono text-sm text-lemon sm:w-56">
                      {row.key}
                    </code>
                    <p className="text-sm text-ice-dim">{row.desc}</p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-wide text-steel opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                      <path
                        d="M3 8.5 6.2 11.5 13 4.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    enforced
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
