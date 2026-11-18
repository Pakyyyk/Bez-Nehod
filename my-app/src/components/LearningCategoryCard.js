export default function LearningCategoryCard({ title = "název kategorie" }) {
  return (
    <button
      type="button"
      className="group relative aspect-square w-full flex flex-col items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-rose-300/45 hover:bg-white/[0.11] hover:shadow-[0_12px_36px_rgba(244,63,94,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/70"
    >
      {/* Úhlopříčky podle wireframe */}
      <div className="absolute inset-0 pointer-events-none opacity-15 group-hover:opacity-25 transition-opacity">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <span className="relative z-10 text-sm sm:text-base font-bold tracking-wide text-white/90 text-center leading-snug group-hover:text-rose-100 transition-colors">
        {title}
      </span>
    </button>
  );
}
