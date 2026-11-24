export default function MainHeading({ title, subtitle, className = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center text-center gap-2 mb-8 ${className}`}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest uppercase text-ink drop-shadow-sm">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm sm:text-base text-ink-muted max-w-xl tracking-wide">
          {subtitle}
        </p>
      )}
    </div>
  );
}