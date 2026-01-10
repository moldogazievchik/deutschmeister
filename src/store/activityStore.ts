import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { DailyActivity } from '../types';
import { getDateString } from '../lib/utils';

interface ActivityState {
  dailyStats: Record<string, DailyActivity>;

  // Actions
  logActivity: (activity: Partial<Omit<DailyActivity, 'date'>>) => void;
  getTodayActivity: () => DailyActivity;
  getWeekActivity: () => DailyActivity[];
  getTotalMinutesStudied: () => number;
  getTotalWordsLearned: () => number;
  resetActivity: () => void;
}

const createEmptyDailyActivity = (date: string): DailyActivity => ({
  date,
  minutesStudied: 0,
  wordsLearned: 0,
  wordsReviewed: 0,
  exercisesCompleted: 0,
  lessonsCompleted: 0,
});

export const useActivityStore = create<ActivityState>()(
  persist(
    (set, get) => ({
      dailyStats: {},

      logActivity: (activity) => {
        const today = getDateString();
        const { dailyStats } = get();
        const todayStats = dailyStats[today] || createEmptyDailyActivity(today);

        set({
          dailyStats: {
            ...dailyStats,
            [today]: {
              ...todayStats,
              minutesStudied: todayStats.minutesStudied + (activity.minutesStudied || 0),
              wordsLearned: todayStats.wordsLearned + (activity.wordsLearned || 0),
              wordsReviewed: todayStats.wordsReviewed + (activity.wordsReviewed || 0),
              exercisesCompleted: todayStats.exercisesCompleted + (activity.exercisesCompleted || 0),
              lessonsCompleted: todayStats.lessonsCompleted + (activity.lessonsCompleted || 0),
            },
          },
        });
      },

      getTodayActivity: () => {
        const today = getDateString();
        return get().dailyStats[today] || createEmptyDailyActivity(today);
      },

      getWeekActivity: () => {
        const { dailyStats } = get();
        const result: DailyActivity[] = [];

        for (let i = 6; i >= 0; i--) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          const dateStr = getDateString(date);
          result.push(dailyStats[dateStr] || createEmptyDailyActivity(dateStr));
        }

        return result;
      },

      getTotalMinutesStudied: () => {
        const { dailyStats } = get();
        return Object.values(dailyStats).reduce((sum, day) => sum + day.minutesStudied, 0);
      },

      getTotalWordsLearned: () => {
        const { dailyStats } = get();
        return Object.values(dailyStats).reduce((sum, day) => sum + day.wordsLearned, 0);
      },

      resetActivity: () => set({ dailyStats: {} }),
    }),
    {
      name: 'deutschmeister-activity',
    }
  )
);
