"use client";

import { useEffect, useState } from "react";

export function NyanCat() {
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [topPosition, setTopPosition] = useState(10); // percentage (middle of top safe zone)

  useEffect(() => {
    // Change direction and random position after animation completes
    const timer = setTimeout(() => {
      setDirection((prev) => (prev === "right" ? "left" : "right"));
      // Random position in top 20% (0-20%) or bottom (60-80%) of viewport
      // Bottom limit: 60% to (100% - gif height ≈ 20%) = 60-80%
      const isTop = Math.random() > 0.5;
      setTopPosition(isTop ? Math.random() * 20 : Math.random() * 20 + 60);
    }, 11500);

    return () => clearTimeout(timer);
  }, [direction]);

  return (
    <div
      className={`fixed z-50 pointer-events-none ${
        direction === "right"
          ? "-left-[500px] animate-nyan-fly-right"
          : "-right-[500px] animate-nyan-fly-left"
      }`}
      style={{ top: `${topPosition}%` }}
    >
      {/* Nyan Cat */}
      <div className="animate-bounce-subtle">
        <img
          src="/images/nyan-cat.gif"
          alt="Nyan Cat"
          className="w-[480px] h-auto"
          style={{
            transform: direction === "left" ? "scaleX(-1)" : "scaleX(1)",
          }}
        />
      </div>
    </div>
  );
}
