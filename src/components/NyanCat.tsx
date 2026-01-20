"use client";

import { useEffect, useState } from "react";

export function NyanCat() {
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [topPosition, setTopPosition] = useState(10); // percentage (middle of top safe zone)

  useEffect(() => {
    // Change direction and random position after animation completes
    const timer = setTimeout(() => {
      setDirection((prev) => (prev === "right" ? "left" : "right"));
      
      const isMobile = window.innerWidth < 768;
      const isTop = Math.random() > 0.5;
      
      if (isMobile) {
        // Mobile: top 0-10%, bottom 70-80%
        setTopPosition(isTop ? Math.random() * 10 : Math.random() * 10 + 70);
      } else {
        // Desktop: top 0-20%, bottom 60-80%
        setTopPosition(isTop ? Math.random() * 20 : Math.random() * 20 + 60);
      }
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
