'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import AuroraBackground from '../../components/AuroraBackground';
import PracticalControls from '../../components/PracticalControls';
import { PRACTICAL_SCENARIOS } from '../../data/questionsData';

const DIRECTIONS = [
  { id: 'vlevo', label: 'Vlevo', arrow: '↰' },
  { id: 'rovne', label: 'Rovně', arrow: '↑' },
  { id: 'vpravo', label: 'Vpravo', arrow: '↱' },
];

export default function PraxePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedActions, setSelectedActions] = useState({});

  const scenario = PRACTICAL_SCENARIOS[currentIndex];
  const userAction = selectedActions[scenario.id];
  const isAnswered = Boolean(userAction);
  const isCorrect = userAction === scenario.correctAction;

  const handleChooseAction = (actionId) => {
    if (isAnswered) return;
    setSelectedActions((prev) => ({
      ...prev,
      [scenario.id]: actionId,
    }));
  };

  const getDirectionStyle = (dirId) => {
    if (!isAnswered) {
      return 'border-glass-border bg-glass text-ink hover:-translate-y-1 hover:border-amber-400/60 hover:bg-glass-hover';
    }
    if (dirId === scenario.correctAction) {
      return 'border-emerald-500 bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 shadow-[0_0_25px_rgba(16,185,129,0.25)]';
    }
    if (dirId === userAction) {
      return 'border-rose-500 bg-rose-500/20 text-rose-800 dark:text-rose-200 shadow-[0_0_25px_rgba(244,63,94,0.25)]';
    }
    return 'border-glass-border bg-glass/50 text-ink-muted opacity-55';
  };

  const getWaitStatus = () => {
    if (!isAnswered) return 'default';
    if (scenario.correctAction === 'cekat') return 'correct';
    if (userAction === 'cekat') return 'wrong';
    return 'default';
  };

  return (
    <div className="min-h-screen bg-surface text-ink flex flex-col relative overflow-hidden transition-colors duration-300">
      <AuroraBackground theme="Praxe" />
      <Navbar />

      <main className="relative z-10 flex-1 flex flex-col justify-between p-4 sm:p-6 md:p-8 min-h-screen">
        <div className="relative flex-1 w-full rounded-2xl border border-glass-border bg-glass shadow-glass backdrop-blur-xl overflow-hidden flex flex-col justify-between p-4 sm:p-6 md:p-8">
          <div className="absolute inset-0 pointer-events-none opacity-15">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.25" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.25" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between text-sm font-medium text-ink-muted">
            <span>{scenario.title}</span>
            <span>
              Situace <strong className="text-ink">{currentIndex + 1}</strong> / {PRACTICAL_SCENARIOS.length}
            </span>
          </div>

          <div className="relative z-10 my-auto flex flex-col items-center justify-center gap-6 text-center max-w-2xl mx-auto">
            <div className="rounded-2xl border border-glass-border bg-glass px-6 py-5 backdrop-blur-md shadow-glass">
              <p className="text-lg sm:text-2xl font-medium tracking-wide text-ink">
                {scenario.situation}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-5 w-full">
              {DIRECTIONS.map((dir) => (
                <button
                  key={dir.id}
                  type="button"
                  disabled={isAnswered}
                  onClick={() => handleChooseAction(dir.id)}
                  className={`flex flex-col items-center justify-center gap-1 rounded-2xl border py-4 px-3 backdrop-blur-xl shadow-glass transition-all duration-200 cursor-pointer disabled:cursor-default ${getDirectionStyle(dir.id)}`}
                >
                  <span className="text-2xl sm:text-3xl font-bold">{dir.arrow}</span>
                  <span className="text-sm sm:text-base font-semibold tracking-wide">{dir.label}</span>
                </button>
              ))}
            </div>

            {isAnswered && (
              <div
                className={`w-full rounded-2xl border px-5 py-3.5 text-sm sm:text-base font-medium backdrop-blur-md ${
                  isCorrect
                    ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-700 dark:text-emerald-200'
                    : 'border-rose-500/40 bg-rose-500/15 text-rose-700 dark:text-rose-200'
                }`}
              >
                {isCorrect
                  ? scenario.explanation
                  : `Špatný směr! ${scenario.explanation}`}
              </div>
            )}
          </div>

          <div className="relative z-10 w-full pt-4">
            <PracticalControls
              waitLabel="čekat"
              onWaitClick={() => handleChooseAction('cekat')}
              waitStatus={getWaitStatus()}
              onPrev={() => setCurrentIndex((i) => i - 1)}
              onNext={() => setCurrentIndex((i) => i + 1)}
              prevDisabled={currentIndex === 0}
              nextDisabled={currentIndex === PRACTICAL_SCENARIOS.length - 1}
            />
          </div>
        </div>
      </main>
    </div>
  );
}