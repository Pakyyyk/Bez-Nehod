export default function MenuCard({ title }) {
  return (
    <button className="flex items-center justify-center w-full md:w-80 h-32 border-2 border-red-500/60 rounded-2xl bg-red-600/30 backdrop-blur-lg hover:bg-red-500/60 hover:border-red-400/80 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_30px_rgba(255,0,0,0.5)] group px-4">
      
      <span 
        className="text-5xl md:text-6xl font-black tracking-widest drop-shadow-[0_8px_16px_rgba(255,0,0,0.6)] [-webkit-text-stroke:1px_rgba(255,100,100,0.8)] group-hover:[-webkit-text-stroke:1px_rgba(255,200,200,1)] transition-all duration-300"
        style={{ color: 'rgba(255, 30, 30, 0.5)' }}
      >
        {title}
      </span>

    </button>
  )
}