import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Level, User } from '../types';
import { getDateString, isYesterday } from '../lib/utils';

interface UserState extends User {
  // Actions
  setName: (name: string) => void;
  setCurrentLevel: (level: Level) => void;
  setTargetLevel: (level: Level) => void;
  setDailyGoal: (minutes: number) => void;
  completeOnboarding: () => void;
  updateActivity: () => void;
  resetProgress: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      // Initial state
      name: '',
      currentLevel: 'a1',
      targetLevel: 'b2',
      dailyGoalMinutes: 30,
      streak: 0,
      lastActivityDate: '',
      onboardingCompleted: false,
      createdAt: new Date().toISOString(),

      // Actions
      setName: (name) => set({ name }),

      setCurrentLevel: (level) => set({ currentLevel: level }),

      setTargetLevel: (level) => set({ targetLevel: level }),

      setDailyGoal: (minutes) => set({ dailyGoalMinutes: minutes }),

      completeOnboarding: () => set({ onboardingCompleted: true }),

      updateActivity: () => {
        const { lastActivityDate, streak } = get();
        const today = getDateString();

        if (lastActivityDate === today) {
          // Already active today
          return;
        }

        let newStreak = streak;

        if (isYesterday(lastActivityDate)) {
          // Continue streak
          newStreak = streak + 1;
        } else if (lastActivityDate === '') {
          // First activity
          newStreak = 1;
        } else {
          // Streak broken
          newStreak = 1;
        }

        set({
          lastActivityDate: today,
          streak: newStreak,
        });
      },

      resetProgress: () =>
        set({
          name: '',
          currentLevel: 'a1',
          targetLevel: 'b2',
          dailyGoalMinutes: 30,
          streak: 0,
          lastActivityDate: '',
          onboardingCompleted: false,
        }),
    }),
    {
      name: 'deutschmeister-user',
    }
  )
);
