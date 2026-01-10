import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  ChevronRight,
  Lightbulb,
  AlertCircle,
  Lock,
} from 'lucide-react';
import { Card, Badge, Modal, Button } from '../components/ui';
import { useUserStore } from '../store/userStore';
import { levelsContent } from '../data/levels';
import type { Level, GrammarTopic } from '../types';

export function Grammar() {
  const { currentLevel } = useUserStore();
  const [selectedTopic, setSelectedTopic] = useState<GrammarTopic | null>(null);
  const [activeLevel, setActiveLevel] = useState<Level>(currentLevel);

  // Collect all grammar topics from all levels
  const grammarByLevel: Record<Level, GrammarTopic[]> = {
    a1: [],
    a2: [],
    b1: [],
    b2: [],
    c1: [],
  };

  Object.entries(levelsContent).forEach(([level, data]) => {
    data.modules.forEach(module => {
      if (module.grammar && module.grammar.length > 0) {
        grammarByLevel[level as Level].push(...module.grammar);
      }
    });
  });

  const levels: { id: Level; name: string; color: string }[] = [
    { id: 'a1', name: 'A1', color: '#22c55e' },
    { id: 'a2', name: 'A2', color: '#10b981' },
    { id: 'b1', name: 'B1', color: '#3b82f6' },
    { id: 'b2', name: 'B2', color: '#6366f1' },
    { id: 'c1', name: 'C1', color: '#a855f7' },
  ];

  // Grammar categories for overview when there's no data
  const grammarCategories = [
    {
      title: 'Основы',
      titleDe: 'Grundlagen',
      items: ['Личные местоимения', 'Глаголы sein и haben', 'Порядок слов', 'Артикли'],
      level: 'a1' as Level,
    },
    {
      title: 'Глаголы',
      titleDe: 'Verben',
      items: ['Настоящее время', 'Прошедшее время (Perfekt)', 'Модальные глаголы', 'Отделяемые приставки'],
      level: 'a1' as Level,
    },
    {
      title: 'Падежи',
      titleDe: 'Kasus',
      items: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
      level: 'a2' as Level,
    },
    {
      title: 'Предложения',
      titleDe: 'Sätze',
      items: ['Придаточные предложения', 'Относительные предложения', 'Косвенная речь'],
      level: 'b1' as Level,
    },
  ];

  const currentLevelIndex = levels.findIndex(l => l.id === currentLevel);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '0.25rem' }}>
          Грамматика
        </h1>
        <p style={{ color: 'var(--gray-600)' }}>
          Изучай правила немецкого языка по уровням
        </p>
      </div>

      {/* Level Tabs */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem',
      }}>
        {levels.map((level, index) => {
          const isActive = activeLevel === level.id;
          const isLocked = index > currentLevelIndex;
          const topicsCount = grammarByLevel[level.id].length;

          return (
            <button
              key={level.id}
              onClick={() => !isLocked && setActiveLevel(level.id)}
              disabled={isLocked}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.25rem',
                border: `2px solid ${isActive ? level.color : 'var(--gray-200)'}`,
                background: isActive ? `${level.color}15` : 'white',
                color: isLocked ? 'var(--gray-400)' : isActive ? level.color : 'var(--gray-600)',
                borderRadius: '0.75rem',
                cursor: isLocked ? 'not-allowed' : 'pointer',
                fontWeight: isActive ? 600 : 400,
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              {isLocked && <Lock style={{ width: '0.875rem', height: '0.875rem' }} />}
              {level.name}
              {topicsCount > 0 && (
                <span style={{
                  fontSize: '0.75rem',
                  backgroundColor: isActive ? level.color : 'var(--gray-200)',
                  color: isActive ? 'white' : 'var(--gray-600)',
                  padding: '0.125rem 0.5rem',
                  borderRadius: '9999px',
                }}>
                  {topicsCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Grammar Topics */}
      {grammarByLevel[activeLevel].length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {grammarByLevel[activeLevel].map((topic) => (
            <Card
              key={topic.id}
              onClick={() => setSelectedTopic(topic)}
              style={{ cursor: 'pointer', transition: 'all 0.2s' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '0.75rem',
                  backgroundColor: '#f3e8ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <GraduationCap style={{ width: '1.5rem', height: '1.5rem', color: '#9333ea' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{topic.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
                    {topic.titleDe}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginTop: '0.25rem' }}>
                    {topic.description}
                  </p>
                </div>
                <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: 'var(--gray-400)' }} />
              </div>
            </Card>
          ))}
        </div>
      ) : (
        /* Show categories when no topics available */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Card style={{
            backgroundColor: '#f3e8ff',
            border: '1px solid #e9d5ff',
            textAlign: 'center',
            padding: '1.5rem',
          }}>
            <GraduationCap style={{ width: '2rem', height: '2rem', color: '#9333ea', margin: '0 auto 0.75rem' }} />
            <h3 style={{ fontWeight: 600, color: '#7e22ce', marginBottom: '0.5rem' }}>
              Грамматика уровня {activeLevel.toUpperCase()}
            </h3>
            <p style={{ color: '#9333ea', fontSize: '0.875rem' }}>
              Подробные темы скоро появятся. Пока можно изучить грамматику в модулях уровня.
            </p>
            <Link to={`/levels/${activeLevel}`}>
              <Button style={{ marginTop: '1rem' }}>
                К модулям {activeLevel.toUpperCase()}
              </Button>
            </Link>
          </Card>

          {/* Grammar Categories Overview */}
          <h3 style={{ fontWeight: 600, marginTop: '0.5rem' }}>Обзор грамматики</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {grammarCategories.map((category, index) => (
              <Card key={index}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <h4 style={{ fontWeight: 600 }}>{category.title}</h4>
                  <Badge variant="level" level={category.level} size="sm" />
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginBottom: '0.75rem' }}>
                  {category.titleDe}
                </p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  {category.items.map((item, i) => (
                    <li key={i} style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: '0.25rem' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Grammar Topic Modal */}
      <Modal
        isOpen={!!selectedTopic}
        onClose={() => setSelectedTopic(null)}
        title={selectedTopic?.title || ''}
      >
        {selectedTopic && (
          <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
            <Badge size="sm" style={{ marginBottom: '1rem' }}>
              {selectedTopic.titleDe}
            </Badge>

            {/* Explanation */}
            <div style={{
              padding: '1rem',
              backgroundColor: 'var(--gray-50)',
              borderRadius: '0.75rem',
              marginBottom: '1rem',
            }}>
              <pre style={{
                whiteSpace: 'pre-wrap',
                fontFamily: 'inherit',
                fontSize: '0.875rem',
                lineHeight: 1.6,
                margin: 0,
              }}>
                {selectedTopic.explanation}
              </pre>
            </div>

            {/* Comparison with Russian */}
            {selectedTopic.comparisonWithRussian && (
              <div style={{
                padding: '1rem',
                backgroundColor: '#dbeafe',
                borderRadius: '0.75rem',
                marginBottom: '1rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Lightbulb style={{ width: '1rem', height: '1rem', color: '#2563eb' }} />
                  <span style={{ fontWeight: 600, color: '#2563eb' }}>Сравнение с русским</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#1e40af' }}>
                  {selectedTopic.comparisonWithRussian}
                </p>
              </div>
            )}

            {/* Common Mistakes */}
            {selectedTopic.commonMistakes && selectedTopic.commonMistakes.length > 0 && (
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertCircle style={{ width: '1rem', height: '1rem', color: '#dc2626' }} />
                  Типичные ошибки
                </h4>
                {selectedTopic.commonMistakes.map((mistake, i) => (
                  <div key={i} style={{
                    padding: '0.75rem',
                    backgroundColor: '#fee2e2',
                    borderRadius: '0.5rem',
                    marginBottom: '0.5rem',
                  }}>
                    <p style={{ fontSize: '0.875rem', color: '#991b1b', textDecoration: 'line-through' }}>
                      {mistake.wrong}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: '#166534', fontWeight: 500 }}>
                      {mistake.correct}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--gray-600)', marginTop: '0.25rem' }}>
                      {mistake.explanation}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Examples */}
            {selectedTopic.examples.length > 0 && (
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Примеры</h4>
                {selectedTopic.examples.map((ex, i) => (
                  <div key={i} style={{
                    padding: '0.75rem',
                    backgroundColor: '#dcfce7',
                    borderRadius: '0.5rem',
                    marginBottom: '0.5rem',
                  }}>
                    <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#166534' }}>
                      {ex.german}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                      {ex.russian}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
