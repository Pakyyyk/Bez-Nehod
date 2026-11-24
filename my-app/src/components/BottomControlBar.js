export default function BottomControlBar({
  centerLabel = "nápověda",
  accentColor = "cyan",
  className = "",
}) {
  const accentMap = {
    cyan: "hover:border-cyan-400/50 focus-visible:ring-cyan-400/70",
    emerald: "hover:border-emerald-400/50 focus-visible:ring-emerald-400/70",
    amber: "hover:border-amber-400/50 focus-visible:ring-amber-400/70",
    rose: "hover:border-rose-400/50 focus-visible:ring-rose-400/70",
  };

  const accentClasses = accentMap[accentColor] || accentMap.cyan;

  return (
    <div className={`w-full max-w-6xl mx-auto flex items-center justify-between gap-3 sm:gap-6 ${className}`}>
      <button
        type="button"
        aria-label="Předchozí"
        className={`flex h-12 sm:h-14 w-24 sm:w-36 shrink-0 cursor-pointer items-center justify-center rounded-full border border-glass-border bg-glass text-ink shadow-glass backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-glass-hover focus-visible:outline-none focus-visible:ring-2 ${accentClasses}`}
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        className={`flex h-12 sm:h-14 flex-1 cursor-pointer items-center justify-center rounded-full border border-glass-border bg-glass px-6 text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-ink shadow-glass backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-glass-hover focus-visible:outline-none focus-visible:ring-2 ${accentClasses}`}
      >
        {centerLabel}
      </button>

      <button
        type="button"
        aria-label="Další"
        className={`flex h-12 sm:h-14 w-24 sm:w-36 shrink-0 cursor-pointer items-center justify-center rounded-full border border-glass-border bg-glass text-ink shadow-glass backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-glass-hover focus-visible:outline-none focus-visible:ring-2 ${accentClasses}`}
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}