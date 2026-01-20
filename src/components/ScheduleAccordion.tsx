"use client";

import { useState } from "react";

interface ScheduleAccordionProps {
  time: string;
  title: string;
  subtitle: string;
  memeImg: string;
  memeAlt: string;
  showHint?: boolean;
}

export function ScheduleAccordion({
  time,
  title,
  subtitle,
  memeImg,
  memeAlt,
  showHint = false,
}: ScheduleAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setHintVisible(false);
  };

  return (
    <div className="md:hidden relative max-w-[370px] mx-auto">
      <div
        onClick={handleClick}
        className="flex items-center gap-2 justify-self-start bg-white/50 backdrop-blur-sm rounded-2xl p-2 w-full h-20 cursor-pointer active:scale-95 transition-transform duration-150"
      >
        <span className="text-xl font-bold text-gray-900 w-14 flex-shrink-0">{time}</span>
        <div className="flex-1 min-w-0">
          <h3 className="text-m font-semibold text-deep truncate">{title}</h3>
          <p className="text-s text-gray-800 truncate">{subtitle}</p>
        </div>
      </div>

      {/* Click hint - only on first item, bottom-right corner */}
      {showHint && hintVisible && (
        <img
          src="/images/click.png"
          alt="Click"
          className="absolute bottom-2 right-2 w-8 h-auto pointer-events-none z-10 animate-scale-pulse"
        />
      )}
      
      {/* Meme image accordion */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <img
          src={memeImg}
          alt={memeAlt}
          className="w-64 h-auto rounded-xl shadow-lg mx-auto"
        />
      </div>
    </div>
  );
}
