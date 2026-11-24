'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import AuroraBackground from '../../components/AuroraBackground';
import TheoryQuestionCard from '../../components/TheoryQuestionCard';
import TheoryAnswerButton from '../../components/TheoryAnswerButton';
import BottomControlBar from '../../components/BottomControlBar';
import { THEORY_QUESTIONS } from '../../data/questionsData';

export default function TeoriePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showHint, setShowHint] = useState(false);

  const currentQuestion = THEORY_QUESTIONS[currentIndex];
  const userChoice = selectedAnswers[currentQuestion.id];
  const isAnswered = Boolean(userChoice);
  const isCorrect = userChoice === currentQuestion.correctAnswerId;

  const score = THEORY_QUESTIONS.filter(
    (q) => selectedAnswers[q.id] === q.correctAnswerId
  ).length;

  const handleSelectAnswer = (answerId) => {
    if (isAnswered) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answerId,
    }));
  };

  const getAnswerStatus = (answerId) => {
    if (!isAnswered) return 'default';
    if (answerId === currentQuestion.correctAnswerId) return 'correct';
    if (answerId === userChoice) return 'wrong';
    return 'dimmed';
  };

  const goToQuestion = (nextIndex) => {
    setShowHint(false);
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="min-h-screen bg-surface text-ink flex flex-col justify-between relative overflow-hidden transition-colors duration-300">
      <AuroraBackground theme="Teorie" />
      <Navbar />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-between w-full max-w-6xl mx-auto px-4 sm:px-8 pt-10 pb-6 gap-6">
        <div className="w-full max-w-4xl flex items-center justify-between text-sm font-medium text-ink-muted">
          <span>
            Otázka <strong className="text-ink">{currentIndex + 1}</strong> / {THEORY_QUESTIONS.length}
          </span>
          <span>
            Správně: <strong className="text-emerald-500">{score}</strong>
          </span>
        </div>

        <TheoryQuestionCard
          questionText={currentQuestion.question}
          mediaLabel={currentQuestion.mediaLabel}
        />

        {(isAnswered || showHint) && (
          <div
            className={`w-full max-w-3xl rounded-2xl border px-5 py-3 text-center text-sm sm:text-base font-medium backdrop-blur-md ${
              isAnswered
                ? isCorrect
                  ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-700 dark:text-emerald-200'
                  : 'border-rose-500/40 bg-rose-500/15 text-rose-700 dark:text-rose-200'
                : 'border-glass-border bg-glass text-ink'
            }`}
          >
            {isAnswered
              ? isCorrect
                ? 'Správně! Můžeš pokračovat na další otázku.'
                : 'Špatně! Správná odpověď je označena zeleně.'
              : `💡 Nápověda: ${currentQuestion.hint}`}
          </div>
        )}

        <div className="w-full max-w-3xl flex flex-col gap-3.5 my-auto">
          {currentQuestion.answers.map((answer) => (
            <TheoryAnswerButton
              key={answer.id}
              text={answer.text}
              status={getAnswerStatus(answer.id)}
              disabled={isAnswered}
              onClick={() => handleSelectAnswer(answer.id)}
            />
          ))}
        </div>

        <BottomControlBar
          centerLabel={showHint ? 'skrýt nápovědu' : 'nápověda'}
          accentColor="emerald"
          onPrev={() => goToQuestion(currentIndex - 1)}
          onNext={() => goToQuestion(currentIndex + 1)}
          onCenterClick={() => setShowHint((prev) => !prev)}
          prevDisabled={currentIndex === 0}
          nextDisabled={currentIndex === THEORY_QUESTIONS.length - 1}
        />
      </main>
    </div>
  );
}