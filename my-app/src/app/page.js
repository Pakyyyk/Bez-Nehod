import Navbar from '../components/Navbar';
import MenuCard from '../components/MenuCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[800px] pointer-events-none z-0">
        
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-600/60 filter blur-[140px] opacity-80 animate-aurora-1"></div>
        
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-600/60 filter blur-[140px] opacity-80 animate-aurora-2"></div>
        
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-cyan-500/40 filter blur-[140px] opacity-80 animate-aurora-3"></div>
        
      </div>

      <Navbar />

      <main className="relative z-10 flex flex-col items-center justify-center gap-16 w-full px-8">

      <h1 className="
        text-8xl md:text-[130px] font-black tracking-widest text-center leading-none text-white
        
        [-webkit-text-stroke:0.75px_rgba(255,255,255,0.4)]
        
        drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]
      ">
        BEZ NEHOD
      </h1>

        <div className="grid w-full max-w-5xl grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          <MenuCard title="Teorie" />
          <MenuCard title="Praxe" />
          <MenuCard title="Učení" />
        </div>
      </main>
    </div>
  )
}