"use client";

import { useEffect, useState } from "react";

export function NyanCat() {
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [topPosition, setTopPosition] = useState(10);
  const [isOff, setIsOff] = useState(false);

  useEffect(() => {
    if (isOff) return;

    const timer = setTimeout(() => {
      setDirection((prev) => (prev === "right" ? "left" : "right"));

      const isMobile = window.innerWidth < 768;
      const isTop = Math.random() > 0.5;

      if (isMobile) {
        setTopPosition(isTop ? Math.random() * 10 : Math.random() * 10 + 70);
      } else {
        setTopPosition(isTop ? Math.random() * 20 : Math.random() * 20 + 60);
      }
    }, 11500);

    return () => clearTimeout(timer);
  }, [direction, isOff]);

  return (
    <>
      {/* Toggle checkbox */}
      <label className="fixed bottom-3 right-3 z-60 flex items-center gap-2 cursor-pointer select-none bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md hover:shadow-lg transition-shadow">
        <input
          type="checkbox"
          checked={isOff}
          onChange={() => setIsOff((prev) => !prev)}
          className="w-4 h-4 accent-red-500 cursor-pointer"
        />
        <span className="text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">
          {isOff ? (
            <span className="flex items-center gap-1">
              Ты чево наделал
              <img
                src="/images/cat_off.png"
                alt="cat off"
                className="inline-block h-4 md:h-5 w-auto"
              />
            </span>
          ) : (
            "роскомнадзорнуть nyan-кота"
          )}
        </span>
      </label>

      {/* Nyan Cat */}
      {!isOff && (
        <div
          className={`fixed z-50 pointer-events-none ${
            direction === "right"
              ? "-left-[500px] animate-nyan-fly-right"
              : "-right-[500px] animate-nyan-fly-left"
          }`}
          style={{ top: `${topPosition}%` }}
        >
          <div className="animate-bounce-subtle">
            <img
              src="/images/nyan-cat.gif"
              alt="Nyan Cat"
              className="w-[369px] md:w-[480px] h-auto"
              style={{
                transform: direction === "left" ? "scaleX(-1)" : "scaleX(1)",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
