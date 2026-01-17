"use client";

import { useState, useEffect } from "react";

const memes = [
  { src: "/images/meme-welding.jpg", isCorrect: false },
  { src: "/images/meme-carpet.jpg", isCorrect: false },
  { src: "/images/meme-stove.jpg", isCorrect: false },
  { src: "/images/meme-heating.jpg", isCorrect: false },
  { src: "/images/meme-wedding.jpg", isCorrect: true },
];

// Firework particle component
function FireworkParticle({
  delay,
  x,
  y,
  color,
  size = "md",
}: {
  delay: number;
  x: number;
  y: number;
  color: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-4 h-4",
    lg: "w-6 h-6",
  };

  return (
    <div
      className={`absolute ${sizeClasses[size]} rounded-full opacity-0`}
      style={
        {
          left: "50%",
          top: "50%",
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`,
          animation: `firework-particle 1.2s ease-out ${delay}s forwards`,
          "--tx": `${x}px`,
          "--ty": `${y}px`,
        } as React.CSSProperties
      }
    />
  );
}

// Firework burst component
function FireworkBurst({
  centerX,
  centerY,
  delay,
  intensity = "normal",
}: {
  centerX: number;
  centerY: number;
  delay: number;
  intensity?: "normal" | "big";
}) {
  const colors = [
    "#FF6B8B",
    "#FFD166",
    "#2DE2A0",
    "#FF9F43",
    "#EE5A24",
    "#F8EFBA",
    "#FD79A8",
    "#00D9FF",
    "#FF00FF",
  ];
  const particles = [];
  const particleCount = intensity === "big" ? 16 : 12;
  const baseDistance = intensity === "big" ? 120 : 80;
  const randomDistance = intensity === "big" ? 80 : 50;

  // Create particles in a circular pattern
  for (let i = 0; i < particleCount; i++) {
    const angle = (i * (360 / particleCount) * Math.PI) / 180;
    const distance = baseDistance + Math.random() * randomDistance;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const sizes: Array<"sm" | "md" | "lg"> = ["sm", "md", "lg"];
    const size = sizes[Math.floor(Math.random() * sizes.length)];

    particles.push(
      <FireworkParticle
        key={i}
        delay={delay}
        x={x}
        y={y}
        color={color}
        size={size}
      />
    );
  }

  // Add extra inner ring of smaller particles
  for (let i = 0; i < 8; i++) {
    const angle = ((i * 45 + 22.5) * Math.PI) / 180;
    const distance = 40 + Math.random() * 30;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const color = colors[Math.floor(Math.random() * colors.length)];

    particles.push(
      <FireworkParticle
        key={`inner-${i}`}
        delay={delay + 0.1}
        x={x}
        y={y}
        color={color}
        size="sm"
      />
    );
  }

  return (
    <div
      className="absolute"
      style={{ left: `${centerX}%`, top: `${centerY}%` }}
    >
      {particles}
    </div>
  );
}

// Main fireworks display
function Fireworks() {
  const [bursts, setBursts] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      delay: number;
      intensity: "normal" | "big";
    }>
  >([]);
  const [sparkles, setSparkles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      color: string;
      delay: number;
      size: number;
    }>
  >([]);

  useEffect(() => {
    // Create multiple firework bursts - more and bigger
    const newBursts: Array<{
      id: number;
      x: number;
      y: number;
      delay: number;
      intensity: "normal" | "big";
    }> = [
      { id: 1, x: 50, y: 50, delay: 0, intensity: "big" },
      { id: 2, x: 20, y: 25, delay: 0.2, intensity: "big" },
      { id: 3, x: 80, y: 30, delay: 0.4, intensity: "big" },
      { id: 4, x: 25, y: 75, delay: 0.5, intensity: "normal" },
      { id: 5, x: 75, y: 70, delay: 0.6, intensity: "normal" },
      { id: 6, x: 50, y: 35, delay: 0.8, intensity: "big" },
      { id: 7, x: 15, y: 50, delay: 1.0, intensity: "normal" },
      { id: 8, x: 85, y: 50, delay: 1.1, intensity: "normal" },
      { id: 9, x: 50, y: 80, delay: 1.3, intensity: "big" },
    ];
    setBursts(newBursts);

    // Create sparkles - more and bigger
    const colors = [
      "#FFD700",
      "#FF6B8B",
      "#2DE2A0",
      "#FFF",
      "#00D9FF",
      "#FF00FF",
    ];
    const newSparkles = [...Array(30)].map((_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 1.2,
      size: 3 + Math.random() * 5,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: "-50%",
        top: "-50%",
        width: "200%",
        height: "200%",
      }}
    >
      {/* Position bursts relative to center (which is the original image area) */}
      <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2">
        {bursts.map((burst) => (
          <FireworkBurst
            key={burst.id}
            centerX={burst.x}
            centerY={burst.y}
            delay={burst.delay}
            intensity={burst.intensity}
          />
        ))}

        {/* Glowing center effect - bigger */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full opacity-0"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.9) 0%, rgba(255,107,139,0.5) 40%, rgba(46,226,160,0.3) 60%, transparent 80%)",
            animation: "glow-pulse 1s ease-out forwards",
          }}
        />

        {/* Sparkle trail - bigger */}
        {sparkles.map((sparkle) => (
          <div
            key={`sparkle-${sparkle.id}`}
            className="absolute rounded-full"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              backgroundColor: sparkle.color,
              boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}, 0 0 ${
                sparkle.size * 4
              }px ${sparkle.color}`,
              animation: `firework-sparkle ${
                0.6 + Math.random() * 0.6
              }s ease-out ${sparkle.delay}s forwards`,
              opacity: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function MemeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, boolean>
  >({});
  const [showFireworks, setShowFireworks] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? memes.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === memes.length - 1 ? 0 : prev + 1));
  };

  const handleCheckboxChange = (index: number) => {
    const isCorrect = memes[index].isCorrect;

    setSelectedAnswers((prev) => ({
      ...prev,
      [index]: true,
    }));

    if (isCorrect) {
      setShowFireworks(true);
      setTimeout(() => setShowFireworks(false), 3000);
    }
  };

  const currentMeme = memes[currentIndex];
  const isCurrentSelected = selectedAnswers[currentIndex];
  const isCurrentCorrect = currentMeme.isCorrect;
  const isCurrentWrong = isCurrentSelected && !isCurrentCorrect;

  return (
    <div className="relative w-full max-w-[665px]">
      {/* Main carousel area with side buttons */}
      <div className="flex items-center gap-3">
        {/* Previous button */}
        <button
          onClick={goToPrevious}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-gray-300 shadow-md flex items-center justify-center text-gray-600 hover:border-accent hover:text-accent hover:scale-110 transition-all"
          aria-label="Предыдущий мем"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Image container - height ~325px with 16:9 aspect ratio */}
        <div
          className={`relative w-[444px] md:w-[578px] rounded-xl border-4 shadow-xl transition-all duration-300 ${
            isCurrentWrong
              ? "border-red-500 bg-red-100"
              : isCurrentSelected && isCurrentCorrect
              ? "border-green-500 bg-green-100"
              : "border-white bg-white"
          }`}
        >
          <img
            src={currentMeme.src}
            alt="Мем"
            className={`w-full aspect-video object-contain rounded-lg transition-all duration-300 ${
              isCurrentWrong ? "opacity-50 grayscale" : ""
            }`}
          />

          {/* Wrong answer overlay */}
          {isCurrentWrong && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl animate-shake">❌</span>
            </div>
          )}

          {/* Pointing hand emoji - draws attention to checkbox */}
          {!isCurrentSelected && (
            <div
              className="absolute bottom-4 right-20 text-6xl animate-point-down"
              style={{ animation: "point-bounce 1.5s ease-in-out infinite" }}
            >
              👉
            </div>
          )}

          {/* Checkbox - inside image, bottom-right */}
          <label className="absolute bottom-3 right-3 cursor-pointer z-10">
            <input
              type="checkbox"
              checked={isCurrentSelected || false}
              onChange={() => handleCheckboxChange(currentIndex)}
              disabled={isCurrentSelected}
              className="carousel-checkbox-small"
            />
          </label>

          {/* Fireworks animation for correct answer */}
          {showFireworks && isCurrentSelected && isCurrentCorrect && (
            <Fireworks />
          )}
        </div>

        {/* Next button */}
        <button
          onClick={goToNext}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-gray-300 shadow-md flex items-center justify-center text-gray-600 hover:border-accent hover:text-accent hover:scale-110 transition-all"
          aria-label="Следующий мем"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {memes.map((meme, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-accent"
                : selectedAnswers[index]
                ? meme.isCorrect
                  ? "bg-green-500"
                  : "bg-red-400"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
