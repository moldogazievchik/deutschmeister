import { useParams, Link } from 'react-router-dom';
import { ChevronRight, BookOpen, FileText, CheckCircle, Lock } from 'lucide-react';
import { Card, Badge, Progress, Button } from '../components/ui';
import { useProgressStore } from '../store/progressStore';
import { levelsContent } from '../data/levels';
import type { Level as LevelType } from '../types';

export function Level() {
  const { level } = useParams<{ level: string }>();
  const { isLessonCompleted } = useProgressStore();

  const levelData = levelsContent[level as LevelType];

  if (!levelData) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '0.5rem' }}>
          Уровень не найден
        </h2>
        <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
          Контент для этого уровня ещё в разработке
        </p>
        <Link to="/levels">
          <Button>Вернуться к уровням</Button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <Badge variant="level" level={level as LevelType} size="lg">
              {level?.toUpperCase()}
            </Badge>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gray-900)' }}>{levelData.title}</h1>
          </div>
          <p style={{ color: 'var(--gray-600)' }}>{levelData.description}</p>
        </div>
      </div>

      {/* Level Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-600)' }}>{levelData.modules.length}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>модулей</p>
          </div>
        </Card>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-600)' }}>{levelData.totalWords}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>слов</p>
          </div>
        </Card>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-600)' }}>{levelData.estimatedHours}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>часов</p>
          </div>
        </Card>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-600)' }}>Goethe</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>{level?.toUpperCase()}</p>
          </div>
        </Card>
      </div>

      {/* Goals */}
      <Card>
        <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '1rem' }}>Цели уровня</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem' }}>
          {levelData.goals.map((goal, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <CheckCircle style={{ width: '1.25rem', height: '1.25rem', color: '#22c55e', flexShrink: 0, marginTop: '0.125rem' }} />
              <span style={{ color: 'var(--gray-700)' }}>{goal}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Modules */}
      <div>
        <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '1rem' }}>Модули</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {levelData.modules.map((module, index) => {
            const lessonsCompleted = module.lessons?.filter((l) =>
              isLessonCompleted(`${level}-${module.id}-${l.id}`)
            ).length || 0;
            const totalLessons = module.lessons?.length || 0;
            const progress = totalLessons > 0 ? (lessonsCompleted / totalLessons) * 100 : 0;
            // Unlock if: first module, OR has any progress, OR previous module has at least 1 completed lesson
            const prevModule = index > 0 ? levelData.modules[index - 1] : null;
            const prevModuleHasProgress = prevModule?.lessons?.some((l) =>
              isLessonCompleted(`${level}-${prevModule.id}-${l.id}`)
            ) || false;
            const isUnlocked = index === 0 || progress > 0 || prevModuleHasProgress;

            const getModuleBgColor = () => {
              if (progress === 100) return '#dcfce7';
              if (isUnlocked) return 'var(--primary-100)';
              return 'var(--gray-100)';
            };

            return (
              <Link
                key={module.id}
                to={isUnlocked ? `/levels/${level}/${module.id}` : '#'}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: isUnlocked ? 'pointer' : 'not-allowed'
                }}
              >
                <Card style={{ opacity: isUnlocked ? 1 : 0.6, transition: 'all 0.2s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {/* Module Number */}
                    <div
                      style={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: getModuleBgColor(),
                        flexShrink: 0
                      }}
                    >
                      {progress === 100 ? (
                        <CheckCircle style={{ width: '1.5rem', height: '1.5rem', color: '#16a34a' }} />
                      ) : !isUnlocked ? (
                        <Lock style={{ width: '1.5rem', height: '1.5rem', color: 'var(--gray-400)' }} />
                      ) : (
                        <span style={{ fontWeight: 700, color: 'var(--primary-600)' }}>{module.id}</span>
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                        <h4 style={{ fontWeight: 600 }}>{module.title}</h4>
                        <span style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>({module.titleDe})</span>
                      </div>
                      <p style={{
                        fontSize: '0.875rem',
                        color: 'var(--gray-600)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {module.description}
                      </p>

                      {isUnlocked && totalLessons > 0 && (
                        <div style={{ marginTop: '0.5rem' }}>
                          <Progress value={progress} size="sm" />
                          <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginTop: '0.25rem' }}>
                            {lessonsCompleted} из {totalLessons} уроков
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Action */}
                    {isUnlocked && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ textAlign: 'right', fontSize: '0.875rem', color: 'var(--gray-500)' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', justifyContent: 'flex-end' }}>
                            <BookOpen style={{ width: '1rem', height: '1rem' }} />
                            <span>{module.vocabulary?.length || 0} слов</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', justifyContent: 'flex-end' }}>
                            <FileText style={{ width: '1rem', height: '1rem' }} />
                            <span>{module.grammar?.length || 0} тем</span>
                          </div>
                        </div>
                        <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: 'var(--gray-400)' }} />
                      </div>
                    )}
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
