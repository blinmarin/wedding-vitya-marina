"use client";

import { useState } from "react";

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

  const alcoholOptions = [
    { id: "champagne", label: "🍾 Шампанское" },
    { id: "wine-red", label: "🍷 Красное вино" },
    { id: "wine-white", label: "🥂 Белое вино" },
    { id: "vodka", label: "🥃 Водка" },
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
      const params = new URLSearchParams({
        name: submitData.name,
        attending: submitData.attending,
        alcohol: submitData.alcohol,
      });

      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbwnHt9u04ILFH-Q_BS_6zaSs2vvSJkQGJGdxaR_kSyOkAzDMYxP8BwMvuY0P5VVbGfX/exec?${params.toString()}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      alert("Ошибка при отправке. Пожалуйста, попробуйте снова.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="xp-window max-w-lg mx-auto">
        <div className="xp-titlebar">
          <span>✅ Ответ отправлен!</span>
          <div className="flex gap-1">
            <button className="w-5 h-5 bg-gradient-to-b from-red-400 to-red-600 rounded-sm text-xs border border-white/30">
              ×
            </button>
          </div>
        </div>
        <div className="p-8 bg-white text-center">
          <p className="text-6xl mb-4">🎉</p>
          <h3 className="text-2xl font-bold text-deep mb-2">Спасибо!</h3>
          <p className="text-gray-600">
            Ваш ответ сохранён. Ждём вас на свадьбе!
          </p>
          <p className="text-sm text-gray-400 mt-4 italic">
            «Британские учёные доказали: вы — лучший гость»
          </p>
        </div>
      </div>
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
            👤 Имя и Фамилия
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="retro-input"
            placeholder="Иван Иванов"
          />
        </div>

        {/* Attendance */}
        <div>
          <label className="block text-sm font-semibold text-deep mb-2">
            🎯 Вы придёте?
          </label>
          <div className="space-y-2">
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
              <span>🤔 Пока не уверен(а)</span>
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
              <span>😢 К сожалению, не смогу</span>
            </label>
          </div>
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
                <span className={option.id === "tea" ? "text-sm" : ""}>
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
            disabled={isSubmitting || !formData.name || !formData.attending}
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
