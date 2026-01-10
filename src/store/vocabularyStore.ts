import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { WordProgress } from '../types';
import { calculateSM2, answerToQuality, calculateFamiliarity, getWordsForReview } from '../lib/spacedRepetition';

interface VocabularyState {
  words: Record<string, WordProgress>;

  // Actions
  addWord: (wordId: string) => void;
  reviewWord: (wordId: string, correct: boolean, timeSpent: number) => void;
  getWordProgress: (wordId: string) => WordProgress | undefined;
  getWordsForReview: (limit?: number) => WordProgress[];
  getLearnedWordsCount: () => number;
  getTotalWordsCount: () => number;
  getWordFamiliarity: (wordId: string) => number;
  resetVocabulary: () => void;
}

const createInitialWordProgress = (wordId: string): WordProgress => ({
  wordId,
  familiarity: 0,
  easeFactor: 2.5,
  interval: 0,
  nextReview: new Date().toISOString(),
  timesCorrect: 0,
  timesIncorrect: 0,
});

export const useVocabularyStore = create<VocabularyState>()(
  persist(
    (set, get) => ({
      words: {},

      addWord: (wordId) => {
        const { words } = get();
        if (!words[wordId]) {
          set({
            words: {
              ...words,
              [wordId]: createInitialWordProgress(wordId),
            },
          });
        }
      },

      reviewWord: (wordId, correct, timeSpent) => {
        const { words } = get();
        const wordProgress = words[wordId] || createInitialWordProgress(wordId);

        const quality = answerToQuality(correct, timeSpent);
        const sm2Result = calculateSM2(quality, {
          easeFactor: wordProgress.easeFactor,
          interval: wordProgress.interval,
          repetitions: wordProgress.timesCorrect,
        });

        const updatedProgress: WordProgress = {
          ...wordProgress,
          easeFactor: sm2Result.easeFactor,
          interval: sm2Result.interval,
          nextReview: sm2Result.nextReview.toISOString(),
          timesCorrect: correct ? wordProgress.timesCorrect + 1 : wordProgress.timesCorrect,
          timesIncorrect: correct ? wordProgress.timesIncorrect : wordProgress.timesIncorrect + 1,
          lastReviewed: new Date().toISOString(),
          familiarity: calculateFamiliarity({
            easeFactor: sm2Result.easeFactor,
            interval: sm2Result.interval,
            repetitions: sm2Result.repetitions,
          }),
        };

        set({
          words: {
            ...words,
            [wordId]: updatedProgress,
          },
        });
      },

      getWordProgress: (wordId) => {
        return get().words[wordId];
      },

      getWordsForReview: (limit = 20) => {
        const { words } = get();
        const wordList = Object.values(words);
        return getWordsForReview(wordList, limit);
      },

      getLearnedWordsCount: () => {
        const { words } = get();
        return Object.values(words).filter((w) => w.familiarity >= 1).length;
      },

      getTotalWordsCount: () => {
        return Object.keys(get().words).length;
      },

      getWordFamiliarity: (wordId) => {
        const progress = get().words[wordId];
        return progress?.familiarity || 0;
      },

      resetVocabulary: () => set({ words: {} }),
    }),
    {
      name: 'deutschmeister-vocabulary',
    }
  )
);
