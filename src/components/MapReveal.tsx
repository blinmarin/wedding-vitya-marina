"use client";

import { useState } from "react";

export function MapReveal() {
  const [showImage, setShowImage] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const handleOpenMap = () => {
    setShowImage(true);
    setRevealed(true);
  };

  const handleCloseImage = () => {
    setShowImage(false);
  };

  return (
    <>
      <div className="flex flex-col gap-3 mt-4 max-w-[280px]">
        {/* Fake map button */}
        <button
          onClick={handleOpenMap}
          className="px-6 py-3 bg-mint text-white font-semibold rounded-2xl shadow-md hover:bg-mint/80 hover:shadow-lg transition-all"
        >
          Открыть карту
        </button>

        {/* Real map link - shown after reveal */}
        {revealed && (
          <a
            href="https://yandex.com/maps/?ll=37.343667%2C56.273400&mode=poi&poi%5Bpoint%5D=37.343991%2C56.273555&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D129017156252&z=20.05"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-accent text-white font-semibold rounded-2xl shadow-md hover:bg-accent/80 hover:shadow-lg transition-all text-center animate-pop"
          >
            Открыть настоящую карту
          </a>
        )}
      </div>

      {/* Metro info */}
      <div className="mt-6 text-gray-600">
        <p>Но не переживайте,</p>
        <div className=" text-gray-600 flex items-center gap-2">
          <p className="mb-2">мы отвезем вас туда на автобусе от</p>
          <a
            href="https://yandex.com/maps/213/moscow/stops/6091017542/?ll=37.546511%2C55.921689&tab=overview&z=17.85"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-mint text-white font-semibold rounded-2xl shadow-md hover:bg-mint/80 hover:shadow-lg transition-all"
            style={{ transform: "translateY(-4px)" }}
          >
            метро Физтех
          </a>
        </div>
      </div>

      {/* Modal overlay with map image */}
      {showImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
          onClick={handleCloseImage}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src="/images/map.jpg"
              alt="Карта"
              className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-center text-white text-lg font-semibold mt-4">Карта</p>
            <button
              onClick={handleCloseImage}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-red-100 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
