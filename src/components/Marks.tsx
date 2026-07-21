/** Original APEX7 mark: an asymmetric peak (the apex) cut by a diagonal claw-slash. */
export function Apex7Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="10" fill="var(--color-panel-2)" stroke="var(--color-line)" />
      <path
        d="M24 9 L38 34 L27.5 34 L24 26.5 L20.5 34 L10 34 Z"
        fill="var(--color-ice)"
      />
      <path d="M15 34 L30.5 15.5 L33.5 21 L21 34 Z" fill="var(--color-lemon)" />
    </svg>
  );
}

/** Small live-status node used next to the mark or in nav — an agent "online" pulse. */
export function AgentNode({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-flex h-2 w-2 ${className}`}>
      <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-lemon" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-lemon" />
    </span>
  );
}
