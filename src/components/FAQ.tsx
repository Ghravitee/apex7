import { useState } from "react";

const faqs = [
  {
    q: "Can I run more than one agent?",
    a: "Yes, each with its own wallet, strategy, and on/off switch, up to your account limit.",
  },
  {
    q: "Can I withdraw funds at any time?",
    a: "Yes, through the wallet controls on the agent's page, whether the agent is on or off.",
  },
  {
    q: "What happens if I turn an agent off mid-trade?",
    a: "It stops taking new actions immediately. A transaction already sent to the network before you switch off may still complete.",
  },
  {
    q: "Does the agent explain why it made a trade?",
    a: "Yes, every logged action includes a short explanation of the reasoning behind it.",
  },
  {
    q: "Can I limit an agent to specific tokens only?",
    a: "Yes, set token scope to a specific list instead of the full qualifying market.",
  },
  {
    q: "Is there a free way to try this first?",
    a: "A free tier is available to get started. Faster trading cadence and additional features are on paid tiers.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group border-b border-line">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-5 py-5 text-left"
        aria-expanded={open}
      >
        <span
          className={`shrink-0 font-mono text-xs transition-colors duration-300 ${
            open ? "text-lemon" : "text-steel"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`flex-1 font-display text-base font-medium transition-colors duration-300 ${
            open ? "text-ice" : "text-ice-dim group-hover:text-ice"
          }`}
        >
          {q}
        </span>
        <span
          className={`relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open ? "border-lemon bg-lemon/10" : "border-line"
          }`}
          aria-hidden="true"
        >
          <span
            className={`absolute h-[1.5px] w-2.5 transition-colors duration-300 ${
              open ? "bg-lemon" : "bg-ice-dim"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-2.5 rotate-90 transition-all duration-300 ${
              open ? "bg-lemon opacity-0" : "bg-ice-dim opacity-100"
            }`}
          />
        </span>
      </button>

      {/* grid-rows trick: animates height without knowing the content's real height */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-5 pl-[2.1rem] text-sm leading-relaxed text-ice-dim">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="border-t border-line/60 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div data-aos="fade-up">
          <p className="font-mono text-xs uppercase tracking-widest text-lemon">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ice sm:text-4xl">
            Questions worth answering upfront
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="mt-10">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
