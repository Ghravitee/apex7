import logo from "../assets/apex_logo.png";

function XIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.3 8.9 17 2.5h-2l-4.9 5.6L6.2 2.5H1l6 8.6-6 6.9h2l5.2-6 4.3 6h5.2l-6.4-8.1Zm-1.8 2.1-.6-.9-4.8-6.8h1.9L10 8.7l.6.9 5 7.1h-1.9l-4.2-6Z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.4 3.1 15.7 16.9c-.2 1-.8 1.2-1.6.8l-4.4-3.2-2.1 2c-.2.2-.4.4-.9.4l.3-4.5 8.2-7.4c.4-.3-.1-.5-.5-.2L4.9 10.7 1 9.5c-.9-.3-.9-.9.2-1.3L17.1 2.1c.7-.3 1.4.2 1.3 1Z" />
    </svg>
  );
}

function ReticleCorner({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const base = "absolute h-5 w-5 border-lemon/40";
  const map: Record<string, string> = {
    tl: "top-0 left-0 border-l border-t",
    tr: "top-0 right-0 border-r border-t",
    bl: "bottom-0 left-0 border-l border-b",
    br: "bottom-0 right-0 border-r border-b",
  };
  return <span className={`${base} ${map[position]}`} aria-hidden="true" />;
}

export function CTAFooter() {
  return (
    <>
      <section
        id="launch"
        className="relative overflow-hidden border-t border-line/60 py-28"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 rounded-full opacity-[0.15] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-lemon), transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-2xl px-6" data-aos="fade-up">
          <div className="relative mx-auto max-w-xl px-10 py-12 text-center">
            <ReticleCorner position="tl" />
            <ReticleCorner position="tr" />
            <ReticleCorner position="bl" />
            <ReticleCorner position="br" />

            <span className="font-mono text-xs uppercase tracking-[0.2em] text-lemon">
              Ready when you are
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ice sm:text-4xl">
              Write the rules. Let it run.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ice-dim">
              Deploy your first agent on Robinhood Chain. Set your limits, fund
              what you're willing to risk, and watch it work.
            </p>
            <div className="mt-8 flex flex-col  sm:flex-row items-center gap-4">
              <a
                href="#launch"
                className="rounded-md bg-lemon px-6 py-3 text-sm font-semibold text-arctic transition hover:bg-lemon-dim w-full text-center"
              >
                Deploy an agent
              </a>
              <a
                href="#token"
                className="rounded-md border border-line px-6 py-3 text-sm font-medium text-ice-dim transition hover:border-lemon/40 hover:bg-lemon/5 hover:text-lemon w-full text-center"
              >
                Buy APEX7
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <a href="/" className="">
            <img src={logo} alt="APEX7" className="w-20 h-10" />
          </a>

          <p className="max-w-md font-mono text-xs text-steel">
            Real money software. Nothing on this page is financial advice. No
            result is guaranteed — fund only what you're willing to lose.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://x.com/apex7ag"
              aria-label="APEX7 on X"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-line text-ice-dim transition hover:border-lemon/40 hover:text-lemon"
            >
              <XIcon />
            </a>
            <a
              href="https://t.me/apex7channel"
              aria-label="APEX7 on Telegram"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-line text-ice-dim transition hover:border-lemon/40 hover:text-lemon"
            >
              <TelegramIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
