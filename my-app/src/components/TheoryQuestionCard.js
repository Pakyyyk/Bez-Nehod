export default function TheoryQuestionCard({
  questionText = "otázka",
  mediaLabel = "vizualizace k dané otázce",
}) {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6">
      {/* Box vizualizace k dané otázce */}
      <div className="relative w-full aspect-[16/9] max-h-[360px] rounded-2xl border border-white/15 bg-white/[0.05] shadow-[0_16px_48px_rgba(0,0,0,0.35)] backdrop-blur-xl overflow-hidden flex items-center justify-center p-6">
        {/* Úhlopříčky podle wireframe */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.3" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.3" />
          </svg>
        </div>

        {/* Středový štítek vizualizace */}
        <div className="relative z-10 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-4 backdrop-blur-md text-center shadow-lg">
          <span className="text-base sm:text-lg font-medium tracking-wide text-white/85">
            {mediaLabel}
          </span>
        </div>
      </div>

      {/* Text / tlačítko otázky */}
      <div className="w-full text-center px-2">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-white">
          {questionText}
        </h2>
      </div>
    </div>
  );
}
