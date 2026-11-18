import Navbar from '../../components/Navbar';
import AuroraBackground from '../../components/AuroraBackground';
import PracticalControls from '../../components/PracticalControls';

export default function PraxePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] flex flex-col relative overflow-hidden">
      <AuroraBackground theme="Praxe" />
      <Navbar />

      <main className="relative z-10 flex-1 flex flex-col justify-between p-4 sm:p-6 md:p-8 min-h-screen">
        {/* Plocha praktické simulace s ovládací lištou vespod */}
        <div className="relative flex-1 w-full rounded-2xl border border-white/15 bg-white/[0.04] shadow-[0_16px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl overflow-hidden flex flex-col justify-between p-4 sm:p-6 md:p-8">
          {/* Úhlopříčky podle wireframe */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.25" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.25" />
            </svg>
          </div>

          {/* Horní spacer pro vycentrování */}
          <div />

          {/* Středový štítek "praktická simulace" */}
          <div className="relative z-10 my-auto flex items-center justify-center text-center">
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] px-8 py-6 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
              <p className="text-2xl sm:text-3xl font-medium tracking-wide text-white/90">
                praktická simulace
              </p>
            </div>
          </div>

          {/* Spodní ovládací tlačítka (< | čekat | >) */}
          <div className="relative z-10 w-full pt-4">
            <PracticalControls waitLabel="čekat" />
          </div>
        </div>
      </main>
    </div>
  );
}
