"use client";

import { useState, useEffect } from "react";

export default function BottomControlBar({
  // Režim pro /praxe: [ ( < ) ]  [  stát  |  rovně  ]  [ ( > ) ] s popisky nahoře
  praxeMode = false,
  selectedAction = null,
  isCorrect = null,
  onActionSelect,
  // Sjednocený režim pro /teorie a /uceni: [ ( < ) ]  [  nápověda / komplexní vysvětlení  ]  [ ( > ) ]
  centerLabel = "",
  centerText = "",
  accentColor = "default",
  onCenterClick,
  hideArrows = false,
  onPrev,
  onNext,
  prevDisabled = false,
  nextDisabled = false,
  isDark: isDarkProp,
}) {
  const [detectedDark, setDetectedDark] = useState(true);

  useEffect(() => {
    if (typeof isDarkProp === "boolean") return;

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
        setDetectedDark(false);
        return;
      }

      if (
        root.classList.contains("dark") ||
        body?.classList.contains("dark") ||
        dataTheme === "dark" ||
        storedTheme === "dark"
      ) {
        setDetectedDark(true);
        return;
      }

      setDetectedDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });
    return () => observer.disconnect();
  }, [isDarkProp]);

  const isDark = typeof isDarkProp === "boolean" ? isDarkProp : detectedDark;

  // 1) REŽIM PRO PRAXI PODLE NÁČRTU
  if (praxeMode) {
    const getSelectedStyle = (actionId) => {
      if (selectedAction !== actionId) return "";
      if (isCorrect) {
        return isDark
          ? "!bg-emerald-500/35 !border-emerald-400 !text-emerald-100"
          : "!bg-emerald-500 !border-emerald-600 !text-white";
      }
      return isDark
        ? "!bg-rose-500/35 !border-rose-400 !text-rose-100"
        : "!bg-rose-500 !border-rose-600 !text-white";
    };

    const getLabelStyle = (actionId) => {
      if (selectedAction === actionId) {
        return isCorrect
          ? isDark
            ? "text-emerald-300 font-semibold"
            : "text-emerald-700 font-semibold"
          : isDark
          ? "text-rose-300 font-semibold"
          : "text-rose-700 font-semibold";
      }
      return isDark ? "text-amber-100/80" : "text-stone-700";
    };

    const ovalBtnStyle = isDark
      ? "w-20 sm:w-28 h-12 shrink-0 rounded-full bg-amber-950/40 hover:bg-amber-900/60 active:scale-95 border border-amber-400/35 backdrop-blur-xl flex items-center justify-center text-amber-50 transition-all duration-150 cursor-pointer disabled:cursor-not-allowed shadow-lg shadow-black/30"
      : "w-20 sm:w-28 h-12 shrink-0 rounded-full bg-white/85 hover:bg-amber-50 active:scale-95 border border-amber-900/20 backdrop-blur-xl flex items-center justify-center text-stone-900 transition-all duration-150 cursor-pointer disabled:cursor-not-allowed shadow-sm";

    const splitHalfStyle = isDark
      ? "w-1/2 h-full flex items-center justify-center text-amber-100/70 hover:text-white hover:bg-amber-900/50 active:bg-amber-800/60 transition-colors duration-150 cursor-pointer disabled:cursor-not-allowed"
      : "w-1/2 h-full flex items-center justify-center text-stone-700 hover:text-stone-950 hover:bg-amber-100/75 active:bg-amber-200/75 transition-colors duration-150 cursor-pointer disabled:cursor-not-allowed";

    return (
      <div className="w-full flex flex-col gap-1.5 select-none">
        {/* Horní řádek popisků přesně nad jednotlivými tlačítky */}
        <div className="w-full flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium tracking-wide">
          <span
            className={`w-20 sm:w-28 shrink-0 text-center transition-colors ${getLabelStyle(
              "left"
            )}`}
          >
            do leva
          </span>

          <div className="flex-1 flex items-center">
            <span
              className={`w-1/2 text-center transition-colors ${getLabelStyle(
                "stop"
              )}`}
            >
              stát
            </span>
            <span
              className={`w-1/2 text-center transition-colors ${getLabelStyle(
                "straight"
              )}`}
            >
              rovně
            </span>
          </div>

          <span
            className={`w-20 sm:w-28 shrink-0 text-center transition-colors ${getLabelStyle(
              "right"
            )}`}
          >
            do prava
          </span>
        </div>

        {/* Spodní ovládací prvky: [ ( < ) ]  [  |  ]  [ ( > ) ] */}
        <div className="w-full flex items-center gap-3 sm:gap-4">
          {/* Levý ovál: do leva */}
          <button
            type="button"
            disabled={selectedAction !== null}
            onClick={() => onActionSelect?.("left")}
            aria-label="Do leva"
            className={`${ovalBtnStyle} ${getSelectedStyle("left")}`}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Středový rozpůlený bar: stát | rovně */}
          <div
            className={`flex-1 h-12 rounded-full border backdrop-blur-xl overflow-hidden flex items-center transition-colors ${
              isDark
                ? "bg-amber-950/40 border-amber-400/35 shadow-lg shadow-black/30"
                : "bg-white/85 border-amber-900/20 shadow-sm"
            }`}
          >
            <button
              type="button"
              disabled={selectedAction !== null}
              onClick={() => onActionSelect?.("stop")}
              aria-label="Stát"
              className={`${splitHalfStyle} border-r ${
                isDark ? "border-amber-400/35" : "border-amber-900/20"
              } ${getSelectedStyle("stop")}`}
            >
              <span className="w-2.5 h-2.5 rounded-xs bg-current opacity-60" />
            </button>

            <button
              type="button"
              disabled={selectedAction !== null}
              onClick={() => onActionSelect?.("straight")}
              aria-label="Rovně"
              className={`${splitHalfStyle} ${getSelectedStyle("straight")}`}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 opacity-70"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="6 11 12 5 18 11" />
              </svg>
            </button>
          </div>

          {/* Pravý ovál: do prava */}
          <button
            type="button"
            disabled={selectedAction !== null}
            onClick={() => onActionSelect?.("right")}
            aria-label="Do prava"
            className={`${ovalBtnStyle} ${getSelectedStyle("right")}`}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // 2) SJEDNOCENÝ REŽIM PRO OSTATNÍ STRÁNKY (/teorie, /uceni/kategorie)
  const label = centerLabel || centerText;

  const accentStyles = {
    emerald:
      "bg-white/85 hover:bg-emerald-50 border-emerald-900/20 text-stone-900 shadow-sm dark:bg-emerald-950/40 dark:hover:bg-emerald-900/60 dark:border-emerald-400/35 dark:text-emerald-50 dark:shadow-lg dark:shadow-black/30",
    rose:
      "bg-white/85 hover:bg-rose-50 border-rose-900/20 text-stone-900 shadow-sm dark:bg-rose-950/40 dark:hover:bg-rose-900/60 dark:border-rose-400/35 dark:text-rose-50 dark:shadow-lg dark:shadow-black/30",
    amber:
      "bg-white/85 hover:bg-amber-50 border-amber-900/20 text-stone-900 shadow-sm dark:bg-amber-950/40 dark:hover:bg-amber-900/60 dark:border-amber-400/35 dark:text-amber-50 dark:shadow-lg dark:shadow-black/30",
    default:
      "bg-white/85 hover:bg-white border-stone-900/20 text-stone-900 shadow-sm dark:bg-white/[0.06] dark:hover:bg-white/[0.14] dark:border-white/20 dark:text-white/95 dark:shadow-lg dark:shadow-black/30",
  };

  const currentAccent = accentStyles[accentColor] || accentStyles.default;

  const unifiedOvalBtnStyle =
    "w-20 sm:w-28 h-12 shrink-0 rounded-full border backdrop-blur-xl flex items-center justify-center transition-all duration-150 cursor-pointer active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100";

  const unifiedCenterBtnStyle =
    "flex-1 h-12 px-6 rounded-full border backdrop-blur-xl flex items-center justify-center text-sm sm:text-base font-medium tracking-wide transition-all duration-150";

  return (
    <div className="w-full flex items-center gap-3 sm:gap-4 select-none">
      {!hideArrows && (
        <button
          type="button"
          disabled={prevDisabled}
          onClick={onPrev}
          aria-label="Předchozí"
          className={`${unifiedOvalBtnStyle} ${currentAccent}`}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      <button
        type="button"
        onClick={onCenterClick}
        className={`${unifiedCenterBtnStyle} ${currentAccent} ${
          onCenterClick
            ? "cursor-pointer active:scale-[0.99]"
            : "cursor-default"
        }`}
      >
        {label}
      </button>

      {!hideArrows && (
        <button
          type="button"
          disabled={nextDisabled}
          onClick={onNext}
          aria-label="Další"
          className={`${unifiedOvalBtnStyle} ${currentAccent}`}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
