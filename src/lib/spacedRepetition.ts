/**
 * SM-2 Spaced Repetition Algorithm
 * Based on SuperMemo 2 algorithm
 *
 * Quality ratings:
 * 0 - Complete blackout
 * 1 - Incorrect, but upon seeing correct answer, remembered
 * 2 - Incorrect, but correct answer seemed easy to recall
 * 3 - Correct with significant difficulty
 * 4 - Correct after hesitation
 * 5 - Perfect response
 */

export interface SM2Result {
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReview: Date;
}

export interface SM2State {
  easeFactor: number;
  interval: number;
  repetitions: number;
}

const MIN_EASE_FACTOR = 1.3;
const DEFAULT_EASE_FACTOR = 2.5;

export function calculateSM2(
  quality: number,
  state: SM2State = { easeFactor: DEFAULT_EASE_FACTOR, interval: 0, repetitions: 0 }
): SM2Result {
  // Clamp quality between 0 and 5
  quality = Math.max(0, Math.min(5, quality));

  let { easeFactor, interval, repetitions } = state;

  // Calculate new ease factor
  easeFactor = Math.max(
    MIN_EASE_FACTOR,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  // If quality < 3, reset repetitions
  if (quality < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    // Calculate new interval
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  }

  // Calculate next review date
  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  return {
    easeFactor,
    interval,
    repetitions,
    nextReview,
  };
}

/**
 * Convert user answer (correct/incorrect) to SM2 quality
 */
export function answerToQuality(correct: boolean, timeSpent: number, avgTime: number = 5000): number {
  if (!correct) {
    return 1; // Incorrect but will remember
  }

  // Adjust quality based on time spent
  const timeRatio = timeSpent / avgTime;

  if (timeRatio < 0.5) {
    return 5; // Very fast = perfect
  } else if (timeRatio < 1) {
    return 4; // Fast = correct after hesitation
  } else if (timeRatio < 2) {
    return 3; // Normal = correct with difficulty
  } else {
    return 3; // Slow but correct
  }
}

/**
 * Get words due for review
 */
export function getWordsForReview<T extends { nextReview: string }>(
  words: T[],
  limit: number = 20
): T[] {
  const now = new Date();

  return words
    .filter(word => new Date(word.nextReview) <= now)
    .sort((a, b) => new Date(a.nextReview).getTime() - new Date(b.nextReview).getTime())
    .slice(0, limit);
}

/**
 * Get new words to learn
 */
export function getNewWords<T extends { id: string }>(
  allWords: T[],
  learnedWordIds: Set<string>,
  limit: number = 10
): T[] {
  return allWords
    .filter(word => !learnedWordIds.has(word.id))
    .slice(0, limit);
}

/**
 * Calculate familiarity level (0-5) from SM2 state
 */
export function calculateFamiliarity(state: SM2State): number {
  const { repetitions, easeFactor } = state;

  if (repetitions === 0) return 0;
  if (repetitions === 1) return 1;
  if (repetitions <= 3) return 2;
  if (repetitions <= 6) return 3;
  if (easeFactor >= 2.5) return 5;
  return 4;
}
