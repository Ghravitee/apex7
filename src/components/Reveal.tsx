import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? undefined : 0,
        animation: visible ? `fade-up 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms both` : undefined,
      }}
    >
      {children}
    </div>
  );
}
