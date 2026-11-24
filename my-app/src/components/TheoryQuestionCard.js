export default function TheoryQuestionCard({
  questionText = "otázka",
  mediaLabel = "vizualizace k dané otázce",
}) {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6">
      <div className="relative w-full aspect-[16/9] max-h-[360px] rounded-2xl border border-glass-border bg-glass shadow-glass backdrop-blur-xl overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.3" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.3" />
          </svg>
        </div>

        <div className="relative z-10 rounded-xl border border-glass-border bg-glass px-6 py-4 backdrop-blur-md text-center shadow-glass">
          <span className="text-base sm:text-lg font-medium tracking-wide text-ink">
            {mediaLabel}
          </span>
        </div>
      </div>

      <div className="w-full text-center px-2">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-ink">
          {questionText}
        </h2>
      </div>
    </div>
  );
}