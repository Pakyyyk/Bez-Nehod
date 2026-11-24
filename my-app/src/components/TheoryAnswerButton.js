export default function TheoryAnswerButton({
  text = "odpověď",
  status = "default",
  disabled = false,
  onClick,
}) {
  const statusStyles = {
    default:
      "border-glass-border bg-glass text-ink hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-glass-hover",
    correct:
      "border-emerald-500 bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 shadow-[0_0_25px_rgba(16,185,129,0.25)]",
    wrong:
      "border-rose-500 bg-rose-500/20 text-rose-800 dark:text-rose-200 shadow-[0_0_25px_rgba(244,63,94,0.25)]",
    dimmed:
      "border-glass-border bg-glass/50 text-ink-muted opacity-55",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`group relative flex w-full cursor-pointer items-center justify-between rounded-full border px-6 py-3.5 sm:py-4 shadow-glass backdrop-blur-xl transition-all duration-200 disabled:cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 ${statusStyles[status]}`}
    >
      <span className="w-6" />
      <span className="text-base sm:text-lg md:text-xl font-bold tracking-wide text-center">
        {text}
      </span>
      <span className="w-6 text-right font-bold text-lg">
        {status === "correct" && "✓"}
        {status === "wrong" && "✕"}
      </span>
    </button>
  );
}