import { Link } from 'react-router-dom';
import {
  Flame,
  BookOpen,
  Target,
  Clock,
  ChevronRight,
  TrendingUp,
  Play,
} from 'lucide-react';
import { Card, Progress, Badge, Button } from '../components/ui';
import { useUserStore } from '../store/userStore';
import { useProgressStore } from '../store/progressStore';
import { useActivityStore } from '../store/activityStore';
import { useVocabularyStore } from '../store/vocabularyStore';
import { formatMinutes, getLevelName } from '../lib/utils';

export function Dashboard() {
  const { name, currentLevel, targetLevel, dailyGoalMinutes, streak } = useUserStore();
  const { skills } = useProgressStore();
  const getTodayActivity = useActivityStore((state) => state.getTodayActivity);
  const getWeekActivity = useActivityStore((state) => state.getWeekActivity);
  const getLearnedWordsCount = useVocabularyStore((state) => state.getLearnedWordsCount);
  const getWordsForReview = useVocabularyStore((state) => state.getWordsForReview);

  const todayActivity = getTodayActivity();
  const weekActivity = getWeekActivity();
  const learnedWords = getLearnedWordsCount();
  const wordsForReview = getWordsForReview();

  const goalProgress = Math.min(100, (todayActivity.minutesStudied / dailyGoalMinutes) * 100);

  const skillsList = [
    { name: 'Lesen', value: skills.lesen, color: '#3b82f6' },
    { name: 'Hören', value: skills.hoeren, color: '#a855f7' },
    { name: 'Schreiben', value: skills.schreiben, color: '#22c55e' },
    { name: 'Sprechen', value: skills.sprechen, color: '#f97316' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Welcome Header */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '0.25rem' }}>
            Guten Tag, {name || 'Студент'}!
          </h1>
          <p style={{ color: 'var(--gray-600)', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.25rem' }}>
            Текущий уровень: <Badge variant="level" level={currentLevel} />
            <span style={{ margin: '0 0.5rem' }}>→</span>
            Цель: <Badge variant="level" level={targetLevel} />
          </p>
        </div>
        <Link to={`/levels/${currentLevel}`}>
          <Button>
            <Play style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
            Продолжить обучение
          </Button>
        </Link>
      </div>

      {/* Stats Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {/* Streak */}
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '3rem',
              height: '3rem',
              backgroundColor: '#ffedd5',
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Flame className={streak > 0 ? 'animate-flame' : ''} style={{ width: '1.5rem', height: '1.5rem', color: '#f97316' }} />
            </div>
            <div>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{streak}</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>дней подряд</p>
            </div>
          </div>
        </Card>

        {/* Words Learned */}
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '3rem',
              height: '3rem',
              backgroundColor: '#dbeafe',
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <BookOpen style={{ width: '1.5rem', height: '1.5rem', color: '#3b82f6' }} />
            </div>
            <div>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{learnedWords}</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>слов изучено</p>
            </div>
          </div>
        </Card>

        {/* Today's Progress */}
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '3rem',
              height: '3rem',
              backgroundColor: '#dcfce7',
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Clock style={{ width: '1.5rem', height: '1.5rem', color: '#22c55e' }} />
            </div>
            <div>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{formatMinutes(todayActivity.minutesStudied)}</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>сегодня</p>
            </div>
          </div>
        </Card>

        {/* Exercises */}
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '3rem',
              height: '3rem',
              backgroundColor: '#f3e8ff',
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Target style={{ width: '1.5rem', height: '1.5rem', color: '#a855f7' }} />
            </div>
            <div>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{todayActivity.exercisesCompleted}</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>упражнений</p>
            </div>
          </div>
        </Card>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {/* Today's Plan */}
        <Card style={{ gridColumn: 'span 2' }}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Сегодняшний план</h3>
              <span style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
                {Math.round(goalProgress)}% выполнено
              </span>
            </div>
            <Progress value={goalProgress} size="lg" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {/* Words to Review */}
            {wordsForReview.length > 0 && (
              <Link
                to="/vocabulary/practice"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  backgroundColor: '#fef9c3',
                  borderRadius: '0.75rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'background-color 0.2s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    backgroundColor: '#fde047',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <BookOpen style={{ width: '1.25rem', height: '1.25rem', color: '#a16207' }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 500 }}>Повторить слова</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>{wordsForReview.length} слов ждут повторения</p>
                  </div>
                </div>
                <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: 'var(--gray-400)' }} />
              </Link>
            )}

            {/* Continue Level */}
            <Link
              to={`/levels/${currentLevel}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem',
                backgroundColor: 'var(--primary-50)',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'background-color 0.2s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: 'var(--primary-200)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Play style={{ width: '1.25rem', height: '1.25rem', color: 'var(--primary-700)' }} />
                </div>
                <div>
                  <p style={{ fontWeight: 500 }}>Продолжить {currentLevel.toUpperCase()}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>{getLevelName(currentLevel)}</p>
                </div>
              </div>
              <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: 'var(--gray-400)' }} />
            </Link>

            {/* Practice */}
            <Link
              to="/practice"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem',
                backgroundColor: 'var(--gray-50)',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'background-color 0.2s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: 'var(--gray-200)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Target style={{ width: '1.25rem', height: '1.25rem', color: 'var(--gray-700)' }} />
                </div>
                <div>
                  <p style={{ fontWeight: 500 }}>Тренировка</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>Упражнения на все навыки</p>
                </div>
              </div>
              <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: 'var(--gray-400)' }} />
            </Link>
          </div>
        </Card>

        {/* Skills */}
        <Card>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Навыки</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {skillsList.map((skill) => (
              <div key={skill.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{skill.name}</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>{skill.value}%</span>
                </div>
                <div style={{
                  height: '0.5rem',
                  backgroundColor: 'var(--gray-200)',
                  borderRadius: '9999px',
                  overflow: 'hidden'
                }}>
                  <div
                    style={{
                      height: '100%',
                      borderRadius: '9999px',
                      transition: 'all 0.5s',
                      width: `${skill.value}%`,
                      backgroundColor: skill.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Week Activity */}
      <Card>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <TrendingUp style={{ width: '1.25rem', height: '1.25rem' }} />
          Активность за неделю
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '0.5rem',
          height: '8rem'
        }}>
          {weekActivity.map((day, index) => {
            const height = Math.max(10, (day.minutesStudied / dailyGoalMinutes) * 100);
            const isToday = index === 6;
            return (
              <div key={day.date} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    width: '100%',
                    borderRadius: '0.5rem 0.5rem 0 0',
                    transition: 'all 0.3s',
                    backgroundColor: isToday ? 'var(--primary-500)' : 'var(--gray-300)',
                    height: `${Math.min(100, height)}%`
                  }}
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginTop: '0.5rem' }}>
                  {new Date(day.date).toLocaleDateString('ru', { weekday: 'short' })}
                </span>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
