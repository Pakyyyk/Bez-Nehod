"use client";

import { useState, useEffect, useCallback } from "react";
import BottomControlBar from "@/components/BottomControlBar";
// Pokud máš data v questionsData.js, odkomentuj řádek níže a doplň správný název exportu místo PRACTICAL_SITUATIONS:
// import { PRACTICAL_SITUATIONS } from "@/data/questionsData";

const PRACTICAL_SITUATIONS = [
  {
    id: 1,
    title: "Situace #1 - Křižovatka tvaru T",
    question: "Jedeš po hlavní silnici rovně, z vedlejší ulice zprava vyjíždí osobní auto. Kam můžeš plynule pokračovat?",
    correctDirection: "straight", // "left" | "straight" | "right"
  },
  {
    id: 2,
    title: "Situace #2 - Odbočování vlevo",
    question: "Blížíš se ke křižovatce a dáváš přednost protijedoucím vozidlům. Jaký směr volíš?",
    correctDirection: "left",
  },
  {
    id: 3,
    title: "Situace #3 - Kruhový objezd",
    question: "Vyjíždíš prvním výjezdem z kruhového objezdu. Který směr zvolíš?",
    correctDirection: "right",
  },
];

export default function PraxePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDirection, setSelectedDirection] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentSituation = PRACTICAL_SITUATIONS[currentIndex];

  const directions = [
    { id: "left", label: "Vlevo", icon: "↰", key: "ArrowLeft" },
    { id: "straight", label: "Rovně", icon: "↑", key: "ArrowUp" },
    { id: "right", label: "Vpravo", icon: "↱", key: "ArrowRight" },
  ];

  const handleDirectionSelect = useCallback(
    (directionId) => {
      if (selectedDirection || !currentSituation) return;

      setSelectedDirection(directionId);
      const correct = directionId === currentSituation.correctDirection;
      setIsCorrect(correct);

      setTimeout(() => {
        setSelectedDirection(null);
        setIsCorrect(null);
        setCurrentIndex((prev) =>
          prev < PRACTICAL_SITUATIONS.length - 1 ? prev + 1 : 0
        );
      }, 800);
    },
    [selectedDirection, currentSituation]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      const matched = directions.find((d) => d.key === e.key);
      if (matched) {
        e.preventDefault();
        handleDirectionSelect(matched.id);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleDirectionSelect]);

  const getButtonStyle = (dirId) => {
    const baseStyle =
      "flex flex-col items-center justify-center p-6 rounded-2xl border backdrop-blur-md transition-all duration-200 cursor-pointer select-none";

    if (selectedDirection === dirId) {
      return isCorrect
        ? `${baseStyle} bg-emerald-500/30 border-emerald-400 text-white scale-105`
        : `${baseStyle} bg-rose-500/30 border-rose-400 text-white scale-95`;
    }

    return `${baseStyle} bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 text-white`;
  };

  if (!currentSituation) return null;

  const statusText = selectedDirection
    ? isCorrect
      ? "Správně!"
      : "Chyba!"
    : "Vyber směr jízdy";

  return (
    <main className="relative min-h-screen flex flex-col justify-between p-6">
      <header className="flex justify-between items-center text-sm text-white/80">
        <span>{currentSituation.title}</span>
        <span>
          Situace {currentIndex + 1} / {PRACTICAL_SITUATIONS.length}
        </span>
      </header>

      <section className="my-auto mx-auto w-full max-w-2xl flex flex-col gap-6">
        <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center text-lg font-medium text-white">
          {currentSituation.question}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {directions.map((dir) => (
            <button
              key={dir.id}
              type="button"
              onClick={() => handleDirectionSelect(dir.id)}
              disabled={selectedDirection !== null}
              className={getButtonStyle(dir.id)}
            >
              <span className="text-2xl mb-2">{dir.icon}</span>
              <span className="font-medium">{dir.label}</span>
            </button>
          ))}
        </div>
      </section>

      <footer className="w-full">
        <BottomControlBar centerText={statusText} hideArrows={true} />
      </footer>
    </main>
  );
}