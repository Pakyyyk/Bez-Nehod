import Navbar from '../../components/Navbar';
import AuroraBackground from '../../components/AuroraBackground';
import TheoryQuestionCard from '../../components/TheoryQuestionCard';
import TheoryAnswerButton from '../../components/TheoryAnswerButton';
import BottomControlBar from '../../components/BottomControlBar';

export default function TeoriePage() {
  return (
    <div className="min-h-screen bg-surface text-ink flex flex-col justify-between relative overflow-hidden transition-colors duration-300">
      <AuroraBackground theme="Teorie" />
      <Navbar />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-between w-full max-w-6xl mx-auto px-4 sm:px-8 pt-12 pb-6 gap-8">
        <TheoryQuestionCard
          questionText="otázka"
          mediaLabel="vizualizace k dané otázce"
        />

        <div className="w-full max-w-3xl flex flex-col gap-3.5 my-auto">
          <TheoryAnswerButton text="odpověď č. 1" />
          <TheoryAnswerButton text="odpověď č. 2" />
          <TheoryAnswerButton text="odpověď č. 3" />
        </div>

        <BottomControlBar
          centerLabel="nápověda"
          accentColor="emerald"
        />
      </main>
    </div>
  );
}