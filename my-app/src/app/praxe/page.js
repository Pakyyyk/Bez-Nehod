import Navbar from '../../components/Navbar';
import AuroraBackground from '../../components/AuroraBackground';
import PracticalControls from '../../components/PracticalControls';

export default function PraxePage() {
  return (
    <div className="min-h-screen bg-surface text-ink flex flex-col relative overflow-hidden transition-colors duration-300">
      <AuroraBackground theme="Praxe" />
      <Navbar />

      <main className="relative z-10 flex-1 flex flex-col justify-between p-4 sm:p-6 md:p-8 min-h-screen">
        <div className="relative flex-1 w-full rounded-2xl border border-glass-border bg-glass shadow-glass backdrop-blur-xl overflow-hidden flex flex-col justify-between p-4 sm:p-6 md:p-8">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.25" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.25" />
            </svg>
          </div>

          <div />

          <div className="relative z-10 my-auto flex items-center justify-center text-center">
            <div className="rounded-2xl border border-glass-border bg-glass px-8 py-6 backdrop-blur-md shadow-glass">
              <p className="text-2xl sm:text-3xl font-medium tracking-wide text-ink">
                praktická simulace
              </p>
            </div>
          </div>

          <div className="relative z-10 w-full pt-4">
            <PracticalControls waitLabel="čekat" />
          </div>
        </div>
      </main>
    </div>
  );
}