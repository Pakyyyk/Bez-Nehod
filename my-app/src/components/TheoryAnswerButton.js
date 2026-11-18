export default function TheoryAnswerButton({ text = "odpověď" }) {
  return (
    <button
      type="button"
      className="group relative flex w-full items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 sm:py-4 text-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300/45 hover:bg-white/[0.11] hover:text-white hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70"
    >
      <span className="text-base sm:text-lg md:text-xl font-bold tracking-wide text-center">
        {text}
      </span>
    </button>
  );
}
