"use client";

export default function BottomControlBar({
  onPrev,
  onNext,
  centerText = "čekat",
  hideArrows = false,
}) {
  return (
    <div className="flex items-center justify-center gap-4 w-full max-w-4xl mx-auto">
      {!hideArrows && (
        <button
          type="button"
          onClick={onPrev}
          aria-label="Předchozí"
          className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition cursor-pointer text-white"
        >
          &lt;
        </button>
      )}

      <div className="flex-1 py-4 px-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-center font-medium text-white">
        {centerText}
      </div>

      {!hideArrows && (
        <button
          type="button"
          onClick={onNext}
          aria-label="Další"
          className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition cursor-pointer text-white"
        >
          &gt;
        </button>
      )}
    </div>
  );
}