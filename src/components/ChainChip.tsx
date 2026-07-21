function ChainMark() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-4 w-4" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="var(--color-lemon)" />
      <path
        d="M12 23.5 19.5 9.8h3.4l-4 8.1h3.9L13.6 24.7l1.9-6.1H12l0-.1Z"
        fill="var(--color-arctic)"
      />
    </svg>
  );
}

export function ChainChip() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-xs text-ice-dim">
      <ChainMark />
      Built on Robinhood Chain
    </span>
  );
}
