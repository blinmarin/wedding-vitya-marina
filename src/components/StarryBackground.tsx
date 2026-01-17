"use client";

export function StarryBackground() {
  // Generate small stars for galaxy effect
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    animationDelay: Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden galaxy-bg">
      {/* Galaxy gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/40 via-purple-800/30 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/30 via-purple-900/40 to-transparent"></div>
      
      {/* Radial glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/15 rounded-full blur-[80px]"></div>
      
      {/* Small stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
}
