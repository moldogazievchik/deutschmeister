import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Level, Skills, ExerciseResult } from '../types';

interface ProgressState {
  completedLessons: Record<string, boolean>; // "a1-1-1": true
  moduleScores: Record<string, number>; // "a1-1": 85
  exerciseResults: Record<string, ExerciseResult>;
  skills: Skills;

  // Actions
  completeLesson: (lessonKey: string) => void;
  setModuleScore: (moduleKey: string, score: number) => void;
  addExerciseResult: (result: ExerciseResult) => void;
  updateSkill: (skill: keyof Skills, value: number) => void;
  getLevelProgress: (level: Level) => number;
  isLessonCompleted: (lessonKey: string) => boolean;
  resetProgress: () => void;
}

const initialSkills: Skills = {
  lesen: 0,
  hoeren: 0,
  schreiben: 0,
  sprechen: 0,
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedLessons: {},
      moduleScores: {},
      exerciseResults: {},
      skills: { ...initialSkills },

      completeLesson: (lessonKey) =>
        set((state) => ({
          completedLessons: { ...state.completedLessons, [lessonKey]: true },
        })),

      setModuleScore: (moduleKey, score) =>
        set((state) => ({
          moduleScores: { ...state.moduleScores, [moduleKey]: score },
        })),

      addExerciseResult: (result) =>
        set((state) => ({
          exerciseResults: { ...state.exerciseResults, [result.exerciseId]: result },
        })),

      updateSkill: (skill, value) =>
        set((state) => ({
          skills: {
            ...state.skills,
            [skill]: Math.min(100, Math.max(0, value)),
          },
        })),

      getLevelProgress: (level) => {
        const { completedLessons } = get();
        const levelLessons = Object.keys(completedLessons).filter((key) =>
          key.startsWith(level)
        );
        const completed = levelLessons.filter((key) => completedLessons[key]).length;
        // Assuming ~50 lessons per level for percentage calculation
        const total = 50;
        return Math.round((completed / total) * 100);
      },

      isLessonCompleted: (lessonKey) => {
        return get().completedLessons[lessonKey] || false;
      },

      resetProgress: () =>
        set({
          completedLessons: {},
          moduleScores: {},
          exerciseResults: {},
          skills: { ...initialSkills },
        }),
    }),
    {
      name: 'deutschmeister-progress',
    }
  )
);
