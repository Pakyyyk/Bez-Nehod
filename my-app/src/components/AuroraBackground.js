export const themes = {
  default: {
    blob1: 'bg-blue-600/55',
    blob2: 'bg-purple-600/55',
    blob3: 'bg-cyan-500/40',
  },
  Teorie: {
    blob1: 'bg-emerald-600/55',
    blob2: 'bg-green-500/50',
    blob3: 'bg-teal-400/35',
  },
  Praxe: {
    blob1: 'bg-orange-600/55',
    blob2: 'bg-amber-500/50',
    blob3: 'bg-yellow-500/35',
  },
  Učení: {
    blob1: 'bg-red-600/55',
    blob2: 'bg-rose-600/50',
    blob3: 'bg-pink-500/35',
  },
};

export default function AuroraBackground({ theme = 'default' }) {
  const currentColors = themes[theme] || themes.default;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[800px]">
        <div
          className={`absolute top-1/2 left-1/2 w-[600px] h-[600px] ${currentColors.blob1} filter blur-[140px] opacity-80 animate-aurora-1 transition-colors duration-1000 ease-in-out`}
        />
        <div
          className={`absolute top-1/2 left-1/2 w-[500px] h-[500px] ${currentColors.blob2} filter blur-[140px] opacity-80 animate-aurora-2 transition-colors duration-1000 ease-in-out`}
        />
        <div
          className={`absolute top-1/2 left-1/2 w-[700px] h-[700px] ${currentColors.blob3} filter blur-[140px] opacity-80 animate-aurora-3 transition-colors duration-1000 ease-in-out`}
        />
      </div>
    </div>
  );
}
