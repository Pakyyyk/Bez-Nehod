export default function MainHeading({ title, subtitle, className = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center text-center gap-2 mb-8 ${className}`}>
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest uppercase text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
      >
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm sm:text-base text-white/60 max-w-xl tracking-wide">
          {subtitle}
        </p>
      )}
    </div>
  );
}
