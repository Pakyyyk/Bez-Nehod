export default function BottomControlBar({
  centerLabel = "nápověda",
  accentColor = "cyan",
  onPrev,
  onNext,
  onCenterClick,
  prevDisabled = false,
  nextDisabled = false,
  centerStatus = "default",
  className = "",
}) {
  const accentMap = {
    cyan: "hover:border-cyan-400/50 focus-visible:ring-cyan-400/70",
    emerald: "hover:border-emerald-400/50 focus-visible:ring-emerald-400/70",
    amber: "hover:border-amber-400/50 focus-visible:ring-amber-400/70",
    rose: "hover:border-rose-400/50 focus-visible:ring-rose-400/70",
  };

  const centerStatusMap = {
    default: "border-glass-border bg-glass text-ink hover:bg-glass-hover",
    correct: "border-emerald-500 bg-emerald-500/20 text-emerald-700 dark:text-emerald-200",
    wrong: "border-rose-500 bg-rose-500/20 text-rose-700 dark:text-rose-200",
  };

  const accentClasses = accentMap[accentColor] || accentMap.cyan;
  const centerClasses = centerStatusMap[centerStatus] || centerStatusMap.default;

  return (
    <div className={`w-full max-w-6xl mx-auto flex items-center justify-between gap-3 sm:gap-6 ${className}`}>
      <button
        type="button"
        onClick={onPrev}
        disabled={prevDisabled}
        aria-label="Předchozí"
        className={`flex h-12 sm:h-14 w-24 sm:w-36 shrink-0 cursor-pointer items-center justify-center rounded-full border border-glass-border bg-glass text-ink shadow-glass backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-glass-hover disabled:opacity-35 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 ${accentClasses}`}
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onCenterClick}
        className={`flex h-12 sm:h-14 flex-1 cursor-pointer items-center justify-center rounded-full border px-6 text-lg sm:text-xl md:text-2xl font-medium tracking-wide shadow-glass backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 ${centerClasses} ${accentClasses}`}
      >
        {centerLabel}
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        aria-label="Další"
        className={`flex h-12 sm:h-14 w-24 sm:w-36 shrink-0 cursor-pointer items-center justify-center rounded-full border border-glass-border bg-glass text-ink shadow-glass backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-glass-hover disabled:opacity-35 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 ${accentClasses}`}
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}