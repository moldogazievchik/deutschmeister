// Level types
export type Level = 'a1' | 'a2' | 'b1' | 'b2' | 'c1';

export interface LevelInfo {
  id: Level;
  name: string;
  title: string;
  description: string;
  color: string;
  modules: Module[];
  totalWords: number;
  estimatedHours: number;
  goals: string[];
}

// Module types
export interface Module {
  id: number;
  level: Level;
  title: string;
  titleDe: string;
  description: string;
  lessons: Lesson[];
  grammar: GrammarTopic[];
  vocabulary: Word[];
}

// Lesson types
export interface Lesson {
  id: number;
  moduleId: number;
  level: Level;
  title: string;
  titleDe: string;
  type: 'vocabulary' | 'grammar' | 'lesen' | 'hoeren' | 'schreiben' | 'sprechen' | 'test';
  content: LessonContent;
  exercises: Exercise[];
  duration: number; // in minutes
}

export interface LessonContent {
  introduction?: string;
  theory?: string;
  examples?: Example[];
  tips?: string[];
}

export interface Example {
  german: string;
  russian: string;
  audio?: string;
}

// Word types
export interface Word {
  id: string;
  german: string;
  russian: string;
  article?: 'der' | 'die' | 'das';
  plural?: string;
  level: Level;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'preposition' | 'conjunction' | 'pronoun' | 'other';
  examples: Example[];
  audio?: string;
  image?: string;
  tags?: string[];
  collocations?: string[];
  synonyms?: string[];
  antonyms?: string[];
}

// Grammar types
export interface GrammarTopic {
  id: string;
  level: Level;
  title: string;
  titleDe: string;
  description: string;
  explanation: string;
  comparisonWithRussian?: string;
  commonMistakes?: CommonMistake[];
  examples: Example[];
  exercises: Exercise[];
}

export interface CommonMistake {
  wrong: string;
  correct: string;
  explanation: string;
}

// Exercise types
export type ExerciseType =
  | 'multiple-choice'
  | 'fill-blank'
  | 'matching'
  | 'translation'
  | 'listening'
  | 'dictation'
  | 'reorder'
  | 'true-false';

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  questionAudio?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  points: number;
}

export interface ExerciseResult {
  exerciseId: string;
  correct: boolean;
  userAnswer: string | string[];
  timeSpent: number;
}

// User Progress types
export interface UserProgress {
  completedLessons: Record<string, boolean>;
  moduleScores: Record<string, number>;
  exerciseResults: Record<string, ExerciseResult>;
  skills: Skills;
}

export interface Skills {
  lesen: number;
  hoeren: number;
  schreiben: number;
  sprechen: number;
}

// Vocabulary Progress (Spaced Repetition)
export interface WordProgress {
  wordId: string;
  familiarity: number; // 0-5 (SM-2)
  easeFactor: number;
  interval: number;
  nextReview: string; // ISO date
  timesCorrect: number;
  timesIncorrect: number;
  lastReviewed?: string;
}

// User types
export interface User {
  name: string;
  currentLevel: Level;
  targetLevel: Level;
  dailyGoalMinutes: number;
  streak: number;
  lastActivityDate: string;
  onboardingCompleted: boolean;
  createdAt: string;
}

// Activity types
export interface DailyActivity {
  date: string;
  minutesStudied: number;
  wordsLearned: number;
  wordsReviewed: number;
  exercisesCompleted: number;
  lessonsCompleted: number;
}
