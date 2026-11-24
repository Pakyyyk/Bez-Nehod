import Navbar from '../../../components/Navbar';
import AuroraBackground from '../../../components/AuroraBackground';
import MainHeading from '../../../components/MainHeading';
import BottomControlBar from '../../../components/BottomControlBar';

export default function DetailKategoriePage() {
  return (
    <div className="min-h-screen bg-surface text-ink flex flex-col justify-between relative overflow-hidden transition-colors duration-300">
      <AuroraBackground theme="Učení" />
      <Navbar />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-between w-full max-w-6xl mx-auto px-4 sm:px-8 pt-14 pb-6 gap-6 min-h-screen">
        <MainHeading title="NÁZEV KATEGORIE" className="mb-0" />

        <div className="w-full max-w-4xl flex flex-col items-center gap-6 my-auto">
          <div className="relative w-full aspect-[16/9] max-h-[380px] rounded-2xl border border-glass-border bg-glass shadow-glass backdrop-blur-xl overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.3" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.3" />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-ink text-center">
            vysvětlivka č.1
          </h2>
        </div>

        <BottomControlBar
          centerLabel="vysvětlení do detailu"
          accentColor="rose"
        />
      </main>
    </div>
  );
}