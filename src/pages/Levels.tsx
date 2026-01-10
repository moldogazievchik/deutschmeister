import { Link } from 'react-router-dom';
import { ChevronRight, Lock, CheckCircle } from 'lucide-react';
import { Card, Badge, Progress } from '../components/ui';
import { useUserStore } from '../store/userStore';
import { useProgressStore } from '../store/progressStore';
import type { Level } from '../types';

interface LevelData {
  id: Level;
  name: string;
  nameDe: string;
  description: string;
  modules: number;
  words: number;
  hours: string;
  color: string;
  bgColor: string;
}

const levelsData: LevelData[] = [
  {
    id: 'a1',
    name: 'Начинающий',
    nameDe: 'Anfänger',
    description: 'Базовые фразы, представление себя, простые диалоги',
    modules: 10,
    words: 800,
    hours: '80-100',
    color: '#16a34a',
    bgColor: '#f0fdf4',
  },
  {
    id: 'a2',
    name: 'Базовый',
    nameDe: 'Grundstufe',
    description: 'Повседневные ситуации, Perfekt, придаточные предложения',
    modules: 12,
    words: 1200,
    hours: '100-120',
    color: '#059669',
    bgColor: '#ecfdf5',
  },
  {
    id: 'b1',
    name: 'Средний 1',
    nameDe: 'Mittelstufe 1',
    description: 'Самостоятельное общение, Konjunktiv II, пассив',
    modules: 12,
    words: 1500,
    hours: '150-180',
    color: '#2563eb',
    bgColor: '#eff6ff',
  },
  {
    id: 'b2',
    name: 'Средний 2',
    nameDe: 'Mittelstufe 2',
    description: 'Свободное общение, академический стиль, аргументация',
    modules: 12,
    words: 2000,
    hours: '200-250',
    color: '#4f46e5',
    bgColor: '#eef2ff',
  },
  {
    id: 'c1',
    name: 'Продвинутый',
    nameDe: 'Oberstufe',
    description: 'Беглая речь, научные тексты, нюансы языка',
    modules: 12,
    words: 2500,
    hours: '250-300',
    color: '#9333ea',
    bgColor: '#faf5ff',
  },
];

const levelOrder: Level[] = ['a1', 'a2', 'b1', 'b2', 'c1'];

export function Levels() {
  const { currentLevel } = useUserStore();
  const { getLevelProgress } = useProgressStore();

  const currentLevelIndex = levelOrder.indexOf(currentLevel);

  const isLevelUnlocked = (level: Level) => {
    const levelIndex = levelOrder.indexOf(level);
    return levelIndex <= currentLevelIndex;
  };

  const isLevelCompleted = (level: Level) => {
    const levelIndex = levelOrder.indexOf(level);
    return levelIndex < currentLevelIndex;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '0.25rem' }}>
          Уровни обучения
        </h1>
        <p style={{ color: 'var(--gray-600)' }}>
          Пройди путь от A1 до C1 по стандартам CEFR и Goethe-Institut
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {levelsData.map((level) => {
          const unlocked = isLevelUnlocked(level.id);
          const completed = isLevelCompleted(level.id);
          const progress = getLevelProgress(level.id);
          const isCurrent = level.id === currentLevel;

          return (
            <Link
              key={level.id}
              to={unlocked ? `/levels/${level.id}` : '#'}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                cursor: unlocked ? 'pointer' : 'not-allowed'
              }}
            >
              <Card style={{
                position: 'relative',
                overflow: 'hidden',
                opacity: unlocked ? 1 : 0.6,
                transition: 'all 0.2s'
              }}>
                {/* Background decoration */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '8rem',
                    height: '8rem',
                    marginRight: '-2rem',
                    marginTop: '-2rem',
                    borderRadius: '50%',
                    backgroundColor: level.bgColor,
                    opacity: 0.5
                  }}
                />

                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  {/* Level badge */}
                  <div
                    style={{
                      width: '4rem',
                      height: '4rem',
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: level.bgColor,
                      flexShrink: 0
                    }}
                  >
                    {completed ? (
                      <CheckCircle style={{ width: '2rem', height: '2rem', color: level.color }} />
                    ) : !unlocked ? (
                      <Lock style={{ width: '2rem', height: '2rem', color: 'var(--gray-400)' }} />
                    ) : (
                      <span style={{ fontSize: '1.5rem', fontWeight: 700, color: level.color }}>
                        {level.id.toUpperCase()}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                      <h3 style={{ fontWeight: 700, fontSize: '1.125rem' }}>{level.id.toUpperCase()}</h3>
                      <span style={{ color: 'var(--gray-400)' }}>—</span>
                      <span style={{ color: 'var(--gray-600)' }}>{level.name}</span>
                      <span style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>({level.nameDe})</span>
                      {isCurrent && (
                        <Badge variant="info" size="sm">
                          Текущий
                        </Badge>
                      )}
                    </div>
                    <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem', marginBottom: '0.75rem' }}>{level.description}</p>

                    {unlocked && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.875rem', color: 'var(--gray-500)' }}>
                        <span>{level.modules} модулей</span>
                        <span>{level.words} слов</span>
                        <span>~{level.hours} часов</span>
                      </div>
                    )}

                    {isCurrent && progress > 0 && (
                      <div style={{ marginTop: '0.75rem' }}>
                        <Progress value={progress} size="sm" />
                        <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginTop: '0.25rem' }}>{progress}% пройдено</p>
                      </div>
                    )}
                  </div>

                  {/* Arrow */}
                  {unlocked && <ChevronRight style={{ width: '1.5rem', height: '1.5rem', color: 'var(--gray-400)' }} />}
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
