"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import BottomControlBar from "@/components/BottomControlBar";

const PRACTICAL_SITUATIONS = [
  {
    id: 1,
    title: "Situace #1 – Křižovatka tvaru T",
    question:
      "Jedeš po hlavní silnici rovně, z vedlejší ulice zprava vyjíždí osobní auto. Jak budeš pokračovat?",
    correctAction: "straight", // "left" | "stop" | "straight" | "right"
  },
  {
    id: 2,
    title: "Situace #2 – Chodec u přechodu",
    question:
      "Blížíš se k přechodu pro chodce, ke kterému právě přichází chodec v úmyslu přejít. Co uděláš?",
    correctAction: "stop",
  },
  {
    id: 3,
    title: "Situace #3 – Odbočování vlevo",
    question:
      "Protijedoucí vozidla už projela a křižovatka je volná. Kterým směrem pokračuješ?",
    correctAction: "left",
  },
  {
    id: 4,
    title: "Situace #4 – Kruhový objezd",
    question:
      "Vyjíždíš prvním výjezdem z kruhového objezdu. Který směr zvolíš?",
    correctAction: "right",
  },
];

const ACTION_LABELS = {
  left: "Do leva",
  stop: "Stát",
  straight: "Rovně",
  right: "Do prava",
};

function useIsDarkTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const root = document.documentElement;
      const body = document.body;
      const dataTheme =
        root.getAttribute("data-theme") || body?.getAttribute("data-theme");
      const storedTheme = localStorage.getItem("theme");

      if (
        root.classList.contains("light") ||
        body?.classList.contains("light") ||
        dataTheme === "light" ||
        storedTheme === "light"
      ) {
        setIsDark(false);
        return;
      }

      if (
        root.classList.contains("dark") ||
        body?.classList.contains("dark") ||
        dataTheme === "dark" ||
        storedTheme === "dark"
      ) {
        setIsDark(true);
        return;
      }

      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });
    if (document.body) {
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["class", "data-theme"],
      });
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", checkTheme);
    window.addEventListener("storage", checkTheme);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", checkTheme);
      window.removeEventListener("storage", checkTheme);
    };
  }, []);

  return isDark;
}

export default function PraxePage() {
  const isDark = useIsDarkTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAction, setSelectedAction] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentSituation = PRACTICAL_SITUATIONS[currentIndex];

  const handleActionSelect = useCallback(
    (action) => {
      if (selectedAction || !currentSituation) return;

      setSelectedAction(action);
      const correct = action === currentSituation.correctAction;
      setIsCorrect(correct);

      setTimeout(() => {
        setSelectedAction(null);
        setIsCorrect(null);
        setCurrentIndex((prev) =>
          prev < PRACTICAL_SITUATIONS.length - 1 ? prev + 1 : 0
        );
      }, 1050);
    },
    [selectedAction, currentSituation]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        e.preventDefault();
        handleActionSelect("left");
      } else if (
        e.key === "ArrowDown" ||
        e.key === "s" ||
        e.key === "S" ||
        e.key === " "
      ) {
        e.preventDefault();
        handleActionSelect("stop");
      } else if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        e.preventDefault();
        handleActionSelect("straight");
      } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        e.preventDefault();
        handleActionSelect("right");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleActionSelect]);

  if (!currentSituation) return null;

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#0b0602] text-white" : "bg-[#fffaf3] text-stone-900"
      }`}
    >
      {/* Vyjíždějící navbar */}
      <Navbar />

      {/* Oranžový ambientní přechod v pozadí */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: isDark
            ? "radial-gradient(circle at 50% 45%, rgba(217, 119, 6, 0.42) 0%, rgba(146, 64, 14, 0.22) 48%, rgba(10, 5, 1, 0.98) 100%)"
            : "radial-gradient(circle at 50% 45%, rgba(251, 146, 60, 0.24) 0%, rgba(253, 186, 116, 0.26) 50%, rgba(255, 251, 245, 0.97) 100%)",
        }}
      />

      <main className="relative z-10 h-screen w-full flex flex-col justify-between px-3 sm:px-6 pt-16 pb-5 gap-4">
        {/* Velký celoobrazovkový rám pro vizuální ukázku */}
        <section
          className={`relative flex-1 w-full rounded-2xl border backdrop-blur-xl overflow-hidden flex flex-col justify-between p-6 sm:p-10 transition-all duration-300 ${
            selectedAction
              ? isCorrect
                ? isDark
                  ? "bg-emerald-950/40 border-emerald-400/60 shadow-2xl shadow-emerald-950/50"
                  : "bg-emerald-50/90 border-emerald-500/60 shadow-xl"
                : isDark
                ? "bg-rose-950/40 border-rose-400/60 shadow-2xl shadow-rose-950/50"
                : "bg-rose-50/90 border-rose-500/60 shadow-xl"
              : isDark
              ? "bg-amber-950/25 border-amber-400/30 shadow-2xl shadow-black/60"
              : "bg-white/80 border-amber-900/20 shadow-xl shadow-amber-900/10"
          }`}
        >
          {/* Vodicí úhlopříčky */}
          <svg
            className={`pointer-events-none absolute inset-0 w-full h-full ${
              isDark ? "opacity-20" : "opacity-25"
            }`}
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="100%"
              stroke={isDark ? "#f59e0b" : "#d97706"}
              strokeWidth="1"
            />
            <line
              x1="100%"
              y1="0"
              x2="0"
              y2="100%"
              stroke={isDark ? "#f59e0b" : "#d97706"}
              strokeWidth="1"
            />
          </svg>

          {/* Horní info lišta uvnitř simulace */}
          <div className="relative z-10 flex items-center justify-between text-xs sm:text-sm font-medium">
            <span
              className={`px-3 py-1 rounded-full border ${
                isDark
                  ? "bg-amber-500/15 border-amber-400/30 text-amber-200"
                  : "bg-amber-500/10 border-amber-600/25 text-amber-900"
              }`}
            >
              {currentSituation.title}
            </span>
            <span
              className={`px-3 py-1 rounded-full border font-mono ${
                isDark
                  ? "bg-black/30 border-white/10 text-amber-100/80"
                  : "bg-white/70 border-stone-900/10 text-stone-700"
              }`}
            >
              {currentIndex + 1} / {PRACTICAL_SITUATIONS.length}
            </span>
          </div>

          {/* Středový blok – vizuální ukázka */}
          <div className="relative z-10 my-auto mx-auto max-w-3xl text-center flex flex-col items-center gap-4">
            <div
              className={`px-4 py-1.5 rounded-lg text-xs uppercase tracking-widest font-semibold border ${
                isDark
                  ? "bg-amber-500/15 border-amber-400/25 text-amber-300"
                  : "bg-amber-500/15 border-amber-500/30 text-amber-900"
              }`}
            >
              Vizuální ukázka
            </div>

            <p className="text-lg sm:text-2xl font-medium leading-relaxed">
              {currentSituation.question}
            </p>

            {selectedAction && (
              <div
                className={`mt-2 px-5 py-2 rounded-full border text-sm sm:text-base font-semibold ${
                  isCorrect
                    ? isDark
                      ? "bg-emerald-500/25 border-emerald-400 text-emerald-200"
                      : "bg-emerald-600 border-emerald-700 text-white"
                    : isDark
                    ? "bg-rose-500/25 border-rose-400 text-rose-200"
                    : "bg-rose-600 border-rose-700 text-white"
                }`}
              >
                {isCorrect
                  ? `Správně! (${ACTION_LABELS[selectedAction]})`
                  : `Chyba! Správná volba: ${
                      ACTION_LABELS[currentSituation.correctAction]
                    }`}
              </div>
            )}
          </div>

          <div className="h-2" />
        </section>

        {/* Spodní lišta roztažená do stran */}
        <footer className="w-full shrink-0">
          <BottomControlBar
            praxeMode={true}
            selectedAction={selectedAction}
            isCorrect={isCorrect}
            onActionSelect={handleActionSelect}
            isDark={isDark}
          />
        </footer>
      </main>
    </div>
  );
}