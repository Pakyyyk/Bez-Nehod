export default function MainHeading({ title, subtitle, className = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center text-center gap-2 mb-8 ${className}`}>
      <h1 
        className="text-4xl md:text-5xl lg:text-6xl tracking-widest text-white" 
        style={{ fontWeight: 300 }}
      >
        {title}
      </h1>
    </div>
  )
}