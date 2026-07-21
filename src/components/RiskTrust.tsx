const points = [
  {
    title: "This is not a savings product",
    body: "Value moves both ways, including to zero on any individual token. Treat this as an actively-managed risk position, not a passive one.",
    icon: (
      <path
        d="M8 3v6M8 11.2v.01"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "New chains carry extra risk",
    body: "Robinhood Chain is permissionless — anyone can create a token or pool, including scams. Agents filter for basic red flags, but no filter catches everything.",
    icon: (
      <path
        d="M6 10 10 6M5.5 8 4 9.5a2.1 2.1 0 0 0 3 3L8.5 11M10.5 5 12 3.5a2.1 2.1 0 0 1 3 3L13.5 8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Your keys are your responsibility",
    body: "An agent's private key is shown once. If it's lost or shared, funds in that wallet can't be recovered or protected by the platform.",
    icon: (
      <path
        d="M6.5 9.5a3 3 0 1 1 2.1-5.1 3 3 0 0 1-2.1 5.1Zm0 0L12 15m0 0 1.5-1.5M12 15l1.5 1.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Nothing here is financial advice",
    body: "No result is guaranteed. Fund only what you're willing to lose, and make your own decisions about how much that is.",
    icon: (
      <path
        d="M8 3.5v9M4 5.5h8M5 5.5 3 8.8h4L5 5.5Zm6 0-2 3.3h4l-2-3.3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export function RiskTrust() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden border-t border-line/60 bg-panel/40 py-24"
    >
      {/* thin hazard-stripe accent, restrained — a nod to "caution" without being loud */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[3px] opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, var(--color-alert) 0px, var(--color-alert) 8px, transparent 8px, transparent 16px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div data-aos="fade-up">
          <p className="font-mono text-xs uppercase tracking-widest text-alert">
            Risk
          </p>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-bold tracking-tight text-ice sm:text-4xl">
            Real money. We won't dress that up.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {points.map((p, i) => (
            <div
              key={p.title}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="flex gap-4 rounded-lg border border-line/70 bg-panel/50 p-5"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-alert/30 bg-alert/5 text-alert">
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                  {p.icon}
                </svg>
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-ice">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ice-dim">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
