import React from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#B2C2A2",
  colorTo = "#E5A186",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        "[background:linear-gradient(white,white)_padding-box,conic-gradient(from_calc(var(--anchor)*1deg),#0000_calc(var(--anchor)*1%),var(--color-from)_calc((var(--anchor)+10)*1%),var(--color-to)_calc((var(--anchor)+20)*1%),#0000_calc((var(--anchor)+30)*1%))_border-box]",
        "animate-border-beam",
        className,
      )}
    />
  );
};
