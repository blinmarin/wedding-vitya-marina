"use client";

import { useState, useEffect } from "react";

export function WishlistAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsImageLoaded(false);
    }
  }, [isOpen]);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-sunny text-deep font-semibold rounded-lg shadow-md hover:bg-sunny/80 hover:shadow-lg transition-all duration-300 flex items-center justify-between group"
      >
        <span className="text-lg">Развернуть вишлист</span>
        <span
          className={`text-lg transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="mt-4 p-6 bg-white rounded-lg shadow-md border-2 border-sunny/30 animate-fadeIn">
          <p className="text-gray-600 leading-relaxed mb-4">
            Деньги
          </p>
          <div className="relative w-full">
            {!isImageLoaded && (
              <div className="w-full aspect-video bg-gray-200 rounded-lg shadow-md animate-pulse flex items-center justify-center">
                <div className="text-gray-400 text-sm">Загрузка...</div>
              </div>
            )}
            <img
              src="/images/many.jpg"
              alt="Деньги"
              className={`w-full h-auto rounded-lg shadow-md transition-opacity duration-300 ${
                isImageLoaded ? "opacity-100" : "opacity-0 absolute top-0 left-0"
              }`}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
