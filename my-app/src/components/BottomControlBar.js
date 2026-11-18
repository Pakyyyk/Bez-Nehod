export default function BottomControlBar({
  centerLabel = "nápověda",
  accentColor = "cyan",
  className = "",
}) {
  const accentMap = {
    cyan: "hover:border-cyan-200/50 hover:shadow-[0_8px_32px_rgba(34,211,238,0.18)] focus-visible:ring-cyan-200/70",
    emerald: "hover:border-emerald-300/50 hover:shadow-[0_8px_32px_rgba(16,185,129,0.18)] focus-visible:ring-emerald-300/70",
    amber: "hover:border-amber-300/50 hover:shadow-[0_8px_32px_rgba(245,158,11,0.18)] focus-visible:ring-amber-300/70",
    rose: "hover:border-rose-300/50 hover:shadow-[0_8px_32px_rgba(244,63,94,0.18)] focus-visible:ring-rose-300/70",
  };

  const accentClasses = accentMap[accentColor] || accentMap.cyan;

  return (
    <div className={`w-full max-w-6xl mx-auto flex items-center justify-between gap-3 sm:gap-6 ${className}`}>
      {/* Levé tlačítko (<) */}
      <button
        type="button"
        aria-label="Předchozí"
        className={`flex h-12 sm:h-14 w-24 sm:w-36 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 ${accentClasses}`}
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Středové tlačítko (čekat / nápověda / vysvětlení do detailu) */}
      <button
        type="button"
        className={`flex h-12 sm:h-14 flex-1 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-6 text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-white/95 shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 ${accentClasses}`}
      >
        {centerLabel}
      </button>

      {/* Pravé tlačítko (>) */}
      <button
        type="button"
        aria-label="Další"
        className={`flex h-12 sm:h-14 w-24 sm:w-36 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 ${accentClasses}`}
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
