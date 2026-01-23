"use client";

import { useState } from "react";
import { DraggableXPWindow } from "./DraggableXPWindow";

interface FormData {
  name: string;
  attending: string;
  alcohol: string[];
}

export function RSVPForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    attending: "",
    alcohol: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showNameError, setShowNameError] = useState(false);
  const [showAttendingError, setShowAttendingError] = useState(false);

  const alcoholOptions = [
    { id: "champagne", label: "🍾 Шампанское" },
    { id: "wine-red", label: "🍷 Красное вино" },
    { id: "wine-white", label: "🥂 Белое вино" },
    { id: "vodka", label: "🥃 Водка (на донышке)" },
    { id: "whiskey", label: "🥃 Виски" },
    { id: "cognac", label: "🥃 Коньяк" },
    { id: "beer", label: "🍺 Пивка для рывка" },
    {
      id: "tea",
      label: "🍵 Чай — он так утоляет жажду, я чувствую себя человеком",
    },
    { id: "non-alcohol", label: "🧃 Безалкогольные напитки" },
  ];

  const handleAlcoholChange = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      alcohol: prev.alcohol.includes(id)
        ? prev.alcohol.filter((a) => a !== id)
        : [...prev.alcohol, id],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate step by step
    if (!formData.name) {
      setShowNameError(true);
      setShowAttendingError(false);
      return;
    }
    
    if (!formData.attending) {
      setShowNameError(false);
      setShowAttendingError(true);
      return;
    }

    setIsSubmitting(true);

    // Format data for Google Sheets
    const submitData = {
      name: formData.name,
      attending: formData.attending,
      alcohol: formData.alcohol
        .map((id) => alcoholOptions.find((opt) => opt.id === id)?.label || id)
        .join(", "),
    };

    try {
      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbwnHt9u04ILFH-Q_BS_6zaSs2vvSJkQGJGdxaR_kSyOkAzDMYxP8BwMvuY0P5VVbGfX/exec";

      const params = new URLSearchParams({
        name: submitData.name,
        attending: submitData.attending,
        alcohol: submitData.alcohol,
      });

      await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors",
      });

      // С mode: 'no-cors' мы не можем проверить ответ,
      // но данные отправляются в Google Sheets
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      alert("Ошибка при отправке. Пожалуйста, попробуйте снова.");
    }
  };

  if (isSubmitted) {
    const isDeclined = formData.attending === "no";
    
    return (
      <DraggableXPWindow>
        <div className="xp-titlebar">
          <span>{isDeclined ? "😢 Ответ отправлен" : "✅ Ответ отправлен!"}</span>
          <div className="flex gap-1">
            <button className="w-5 h-5 bg-gradient-to-b from-red-400 to-red-600 rounded-sm text-xs border border-white/30">
              ×
            </button>
          </div>
        </div>
        <div className="p-8 bg-white text-center">
          <div className="relative mx-auto mb-4 max-w-full">
            {isDeclined ? (
              <video
                src="/images/nobody.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="mx-auto max-w-full rounded-lg"
              />
            ) : (
              <>
                {!isImageLoaded && (
                  <div className="w-64 h-48 mx-auto bg-gray-200 animate-pulse rounded-lg" />
                )}
                <img
                  src="/images/spasibo.gif"
                  alt="Спасибо!"
                  className={`mx-auto max-w-full transition-opacity duration-300 ${
                    isImageLoaded ? "opacity-100" : "opacity-0 absolute top-0 left-1/2 -translate-x-1/2"
                  }`}
                  onLoad={() => setIsImageLoaded(true)}
                />
              </>
            )}
          </div>
          <p className="text-gray-600">
            {isDeclined 
              ? "Никто не пришел на фан встречу" 
              : "Ваш ответ сохранён. Ждём вас на свадьбе!"}
          </p>
        </div>
      </DraggableXPWindow>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="xp-window max-w-lg mx-auto">
      <div className="xp-titlebar">
        <span>📋 RSVP.exe — Подтверждение участия</span>
        <div className="flex gap-1">
          <button
            type="button"
            className="w-5 h-5 bg-gradient-to-b from-blue-300 to-blue-500 rounded-sm text-xs border border-white/30"
          >
            ─
          </button>
          <button
            type="button"
            className="w-5 h-5 bg-gradient-to-b from-blue-300 to-blue-500 rounded-sm text-xs border border-white/30"
          >
            □
          </button>
          <button
            type="button"
            className="w-5 h-5 bg-gradient-to-b from-red-400 to-red-600 rounded-sm text-xs border border-white/30"
          >
            ×
          </button>
        </div>
      </div>

      <div className="p-6 bg-[#ECE9D8] space-y-6">
        {/* Name field */}
        <div>
          <label className="block text-sm font-semibold text-deep mb-2">
            👤 Фамилия и Имя 
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="retro-input"
            placeholder="Зубенко Михаил Петрович"
          />
          {showNameError && !formData.name && (
            <p className="text-red-600 text-sm mt-2 font-semibold">
              ⚠️ Нельзя просто так взять и пропустить этот вопрос
            </p>
          )}
        </div>

        {/* Attendance */}
        <div>
          <label className="block text-sm font-semibold text-deep mb-2">
            🎯 Вы придёте?
          </label>
          <div className={`space-y-2 p-2 rounded-lg transition-all ${showAttendingError && !formData.attending ? "border-2 border-red-500 bg-red-50" : ""}`}>
            <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-white/50 rounded">
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={formData.attending === "yes"}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    attending: e.target.value,
                  }))
                }
                className="retro-checkbox rounded-full"
              />
              <span>✅ Да, обязательно буду!</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-white/50 rounded">
              <input
                type="radio"
                name="attending"
                value="maybe"
                checked={formData.attending === "maybe"}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    attending: e.target.value,
                  }))
                }
                className="retro-checkbox rounded-full"
              />
              <span>🤔 Посмотрим</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-white/50 rounded">
              <input
                type="radio"
                name="attending"
                value="no"
                checked={formData.attending === "no"}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    attending: e.target.value,
                  }))
                }
                className="retro-checkbox rounded-full"
              />
              <span>😢 Не приду на фан встречу</span>
            </label>
          </div>
          {showAttendingError && !formData.attending && (
            <p className="text-red-600 text-sm mt-2 font-semibold">
              ⚠️ Нельзя просто так взять и пропустить этот вопрос
            </p>
          )}
        </div>

        {/* Alcohol preferences */}
        <div>
          <label className="block text-sm font-semibold text-deep mb-2">
            🍸 Что будете пить?{" "}
            <span className="font-normal text-gray-500">
              (можно выбрать несколько)
            </span>
          </label>
          <div className="bg-white border-2 border-inset border-gray-400 p-3 max-h-60 overflow-y-auto space-y-1">
            {alcoholOptions.map((option) => (
              <label
                key={option.id}
                className="flex items-center gap-3 cursor-pointer p-2 hover:bg-sunny/20 rounded transition-colors"
              >
                <input
                  type="checkbox"
                  checked={formData.alcohol.includes(option.id)}
                  onChange={() => handleAlcoholChange(option.id)}
                  className="retro-checkbox"
                />
                <span className={option.id === "tea" ? "text-sm" : "text-m"}>
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full retro-button text-lg font-bold ${
              isSubmitting ? "opacity-50 cursor-wait" : "hover:bg-sunny"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span> Отправляем...
              </span>
            ) : (
              "📨 Отправить ответ"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
