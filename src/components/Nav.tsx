import { AgentNode } from "./Marks";
import logo from "../assets/apex_logo.png";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-arctic/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="">
          <img src={logo} alt="APEX7" className="w-20 h-10" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#how-it-works"
            className="text-sm text-ice-dim transition hover:text-ice"
          >
            How it works
          </a>
          <a
            href="#limits"
            className="text-sm text-ice-dim transition hover:text-ice"
          >
            Controls
          </a>
          <a
            href="#trust"
            className="text-sm text-ice-dim transition hover:text-ice"
          >
            Risk
          </a>
          <a
            href="#faq"
            className="text-sm text-ice-dim transition hover:text-ice"
          >
            FAQ
          </a>
        </nav>

        <a
          href="#launch"
          className="flex items-center gap-2 rounded-md bg-lemon px-4 py-2 text-sm font-semibold text-arctic transition hover:bg-lemon-dim"
        >
          <AgentNode />
          Launch an agent
        </a>
      </div>
    </header>
  );
}
