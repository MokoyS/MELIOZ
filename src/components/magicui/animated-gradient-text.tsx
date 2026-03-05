import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "inline animate-gradient bg-gradient-to-r from-[#B2C2A2] via-[#849673] to-[#E5A186] bg-[length:var(--bg-size,300%)] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
