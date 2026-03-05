"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

interface MousePosition {
  x: number;
  y: number;
}

function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [mouseOnCard, setMouseOnCard] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMouseOnCard({
        x: mousePosition.x - rect.left,
        y: mousePosition.y - rect.top,
      });
    }
  }, [mousePosition.x, mousePosition.y]);

  useEffect(() => {
    if (isHovering) {
      handleMouseMove();
    }
  }, [handleMouseMove, isHovering]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative flex size-full overflow-hidden rounded-xl border bg-neutral-100 p-4",
        className
      )}
      style={{
        background: isHovering
          ? `radial-gradient(${gradientSize}px circle at ${mouseOnCard.x}px ${mouseOnCard.y}px, ${gradientColor}${Math.round(gradientOpacity * 255).toString(16)}, transparent 80%)`
          : "",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-px rounded-xl" />
      <div className="relative z-10 flex size-full flex-col">{children}</div>
    </div>
  );
}
