export default function TheoryAnswerButton({ text = "odpověď" }) {
  return (
    <button
      type="button"
      className="group relative flex w-full cursor-pointer items-center justify-center rounded-full border border-glass-border bg-glass px-6 py-3.5 sm:py-4 text-ink shadow-glass backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-glass-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
    >
      <span className="text-base sm:text-lg md:text-xl font-bold tracking-wide text-center">
        {text}
      </span>
    </button>
  );
}