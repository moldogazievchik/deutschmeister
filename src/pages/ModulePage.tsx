import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  ChevronRight,
  Check,
  Lock,
  Play,
  FileText,
  Clock,
  Target,
  Lightbulb,
  AlertCircle,
} from 'lucide-react';
import { Card, Button, Progress, Badge, Modal } from '../components/ui';
import { useProgressStore } from '../store/progressStore';
import { useActivityStore } from '../store/activityStore';
import { levelsContent } from '../data/levels';
import type { Level, Lesson, GrammarTopic } from '../types';

type TabType = 'lessons' | 'grammar' | 'vocabulary';

export function ModulePage() {
  const { level, module } = useParams<{ level: string; module: string }>();
  const navigate = useNavigate();
  const { isLessonCompleted, completeLesson } = useProgressStore();
  const { logActivity } = useActivityStore();

  const [activeTab, setActiveTab] = useState<TabType>('lessons');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedGrammar, setSelectedGrammar] = useState<GrammarTopic | null>(null);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [lessonStats, setLessonStats] = useState({ correct: 0, total: 0 });

  const levelData = level ? levelsContent[level as Level] : null;
  const moduleData = levelData?.modules.find(m => m.id === Number(module));

  if (!levelData || !moduleData) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Модуль не найден</p>
        <Button onClick={() => navigate('/levels')} style={{ marginTop: '1rem' }}>
          К уровням
        </Button>
      </div>
    );
  }

  const completedLessons = moduleData.lessons.filter(
    l => isLessonCompleted(`${level}-${module}-${l.id}`)
  ).length;
  const totalLessons = moduleData.lessons.length;
  const moduleProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  const currentExercise = selectedLesson?.exercises[exerciseIndex];

  const handleCheckAnswer = () => {
    if (!currentExercise) return;

    const correctAnswer = Array.isArray(currentExercise.correctAnswer)
      ? currentExercise.correctAnswer[0]
      : currentExercise.correctAnswer;

    const correct = userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
    setIsCorrect(correct);
    setShowResult(true);
    setLessonStats(prev => ({
      correct: correct ? prev.correct + 1 : prev.correct,
      total: prev.total + 1,
    }));
  };

  const handleNextExercise = () => {
    if (!selectedLesson) return;

    if (exerciseIndex < selectedLesson.exercises.length - 1) {
      setExerciseIndex(prev => prev + 1);
      setUserAnswer('');
      setShowResult(false);
    } else {
      // Lesson completed
      completeLesson(`${level}-${module}-${selectedLesson.id}`);
      logActivity({
        minutesStudied: selectedLesson.duration,
        exercisesCompleted: selectedLesson.exercises.length,
        lessonsCompleted: 1,
      });
      setSelectedLesson(null);
      setExerciseIndex(0);
      setLessonStats({ correct: 0, total: 0 });
    }
  };

  const startLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setExerciseIndex(0);
    setUserAnswer('');
    setShowResult(false);
    setLessonStats({ correct: 0, total: 0 });
  };

  const closeLesson = () => {
    setSelectedLesson(null);
    setExerciseIndex(0);
    setUserAnswer('');
    setShowResult(false);
    setLessonStats({ correct: 0, total: 0 });
  };

  const tabs = [
    { id: 'lessons' as TabType, label: 'Уроки', icon: BookOpen, count: moduleData.lessons.length },
    { id: 'grammar' as TabType, label: 'Грамматика', icon: GraduationCap, count: moduleData.grammar.length },
    { id: 'vocabulary' as TabType, label: 'Слова', icon: FileText, count: moduleData.vocabulary.length },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        <button
          onClick={() => navigate(`/levels/${level}`)}
          style={{
            padding: '0.5rem',
            borderRadius: '0.5rem',
            border: 'none',
            background: 'var(--gray-100)',
            cursor: 'pointer',
          }}
        >
          <ArrowLeft style={{ width: '1.25rem', height: '1.25rem' }} />
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
            <Badge variant="level" level={level as Level} size="sm" />
            <span style={{ color: 'var(--gray-400)' }}>Модуль {moduleData.id}</span>
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gray-900)' }}>
            {moduleData.title}
          </h1>
          <p style={{ color: 'var(--gray-600)', marginTop: '0.25rem' }}>
            {moduleData.titleDe}
          </p>
        </div>
      </div>

      {/* Progress Card */}
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <h3 style={{ fontWeight: 600 }}>Прогресс модуля</h3>
          <span style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
            {completedLessons}/{totalLessons} уроков
          </span>
        </div>
        <Progress value={moduleProgress} size="md" />
        <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginTop: '0.75rem' }}>
          {moduleData.description}
        </p>
      </Card>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        borderBottom: '1px solid var(--gray-200)',
        paddingBottom: '0.5rem',
      }}>
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                border: 'none',
                background: isActive ? 'var(--primary-50)' : 'transparent',
                color: isActive ? 'var(--primary-700)' : 'var(--gray-600)',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: isActive ? 600 : 400,
                transition: 'all 0.2s',
              }}
            >
              <Icon style={{ width: '1rem', height: '1rem' }} />
              {tab.label}
              <Badge size="sm" style={{
                backgroundColor: isActive ? 'var(--primary-200)' : 'var(--gray-200)',
                color: isActive ? 'var(--primary-800)' : 'var(--gray-600)',
              }}>
                {tab.count}
              </Badge>
            </button>
          );
        })}
      </div>

      {/* Content */}
      {activeTab === 'lessons' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {moduleData.lessons.length > 0 ? (
            moduleData.lessons.map((lesson, index) => {
              const lessonKey = `${level}-${module}-${lesson.id}`;
              const completed = isLessonCompleted(lessonKey);
              const isLocked = index > 0 && !isLessonCompleted(`${level}-${module}-${moduleData.lessons[index - 1].id}`);

              return (
                <Card
                  key={lesson.id}
                  onClick={() => !isLocked && startLesson(lesson)}
                  style={{
                    cursor: isLocked ? 'not-allowed' : 'pointer',
                    opacity: isLocked ? 0.5 : 1,
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: completed
                        ? '#dcfce7'
                        : isLocked
                          ? 'var(--gray-100)'
                          : 'var(--primary-50)',
                    }}>
                      {completed ? (
                        <Check style={{ width: '1.5rem', height: '1.5rem', color: '#16a34a' }} />
                      ) : isLocked ? (
                        <Lock style={{ width: '1.25rem', height: '1.25rem', color: 'var(--gray-400)' }} />
                      ) : (
                        <Play style={{ width: '1.5rem', height: '1.5rem', color: 'var(--primary-600)' }} />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <h3 style={{ fontWeight: 600 }}>{lesson.title}</h3>
                        <Badge size="sm" style={{
                          backgroundColor:
                            lesson.type === 'vocabulary' ? '#dbeafe' :
                            lesson.type === 'grammar' ? '#f3e8ff' :
                            lesson.type === 'test' ? '#ffedd5' : 'var(--gray-100)',
                          color:
                            lesson.type === 'vocabulary' ? '#2563eb' :
                            lesson.type === 'grammar' ? '#9333ea' :
                            lesson.type === 'test' ? '#ea580c' : 'var(--gray-600)',
                        }}>
                          {lesson.type === 'vocabulary' && 'Слова'}
                          {lesson.type === 'grammar' && 'Грамматика'}
                          {lesson.type === 'test' && 'Тест'}
                        </Badge>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
                        {lesson.titleDe}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--gray-400)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Clock style={{ width: '0.875rem', height: '0.875rem' }} />
                          ~{lesson.duration} мин
                        </span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--gray-400)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Target style={{ width: '0.875rem', height: '0.875rem' }} />
                          {lesson.exercises.length} упражнений
                        </span>
                      </div>
                    </div>
                    <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: 'var(--gray-400)' }} />
                  </div>
                </Card>
              );
            })
          ) : (
            <Card style={{ textAlign: 'center', padding: '2rem' }}>
              <p style={{ color: 'var(--gray-500)' }}>Уроки этого модуля скоро появятся</p>
            </Card>
          )}
        </div>
      )}

      {activeTab === 'grammar' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {moduleData.grammar.length > 0 ? (
            moduleData.grammar.map((topic) => (
              <Card
                key={topic.id}
                onClick={() => setSelectedGrammar(topic)}
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
            ))
          ) : (
            <Card style={{ textAlign: 'center', padding: '2rem' }}>
              <p style={{ color: 'var(--gray-500)' }}>Грамматика этого модуля скоро появится</p>
            </Card>
          )}
        </div>
      )}

      {activeTab === 'vocabulary' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {moduleData.vocabulary.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
              {moduleData.vocabulary.map((word) => (
                <Card key={word.id} style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    {word.article && (
                      <Badge size="sm" style={{ backgroundColor: 'var(--gray-100)', color: 'var(--gray-600)' }}>
                        {word.article}
                      </Badge>
                    )}
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '1rem' }}>{word.german}</p>
                      <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem' }}>{word.russian}</p>
                      {word.examples[0] && (
                        <p style={{
                          fontSize: '0.75rem',
                          color: 'var(--gray-500)',
                          marginTop: '0.5rem',
                          fontStyle: 'italic',
                        }}>
                          "{word.examples[0].german}"
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card style={{ textAlign: 'center', padding: '2rem' }}>
              <p style={{ color: 'var(--gray-500)' }}>Словарь этого модуля скоро появится</p>
            </Card>
          )}
        </div>
      )}

      {/* Lesson Modal */}
      <Modal isOpen={!!selectedLesson} onClose={closeLesson} title={selectedLesson?.title || ''}>
        {selectedLesson && (
          <div>
            {/* Lesson intro */}
            {exerciseIndex === 0 && !showResult && selectedLesson.content.introduction && (
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  padding: '1rem',
                  backgroundColor: 'var(--primary-50)',
                  borderRadius: '0.75rem',
                  marginBottom: '1rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Lightbulb style={{ width: '1rem', height: '1rem', color: 'var(--primary-600)' }} />
                    <span style={{ fontWeight: 600, color: 'var(--primary-700)' }}>Введение</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--primary-800)' }}>
                    {selectedLesson.content.introduction}
                  </p>
                </div>

                {selectedLesson.content.tips && selectedLesson.content.tips.length > 0 && (
                  <div style={{ padding: '1rem', backgroundColor: 'var(--gray-50)', borderRadius: '0.75rem' }}>
                    <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Советы:</p>
                    <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                      {selectedLesson.content.tips.map((tip, i) => (
                        <li key={i} style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: '0.25rem' }}>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Progress */}
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
                  Упражнение {exerciseIndex + 1} из {selectedLesson.exercises.length}
                </span>
                <span style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
                  {lessonStats.correct}/{lessonStats.total} правильно
                </span>
              </div>
              <Progress
                value={(exerciseIndex / selectedLesson.exercises.length) * 100}
                size="sm"
              />
            </div>

            {/* Exercise */}
            {currentExercise && (
              <div>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  marginBottom: '1rem',
                  lineHeight: 1.5,
                }}>
                  {currentExercise.question}
                </p>

                {/* Multiple Choice */}
                {currentExercise.type === 'multiple-choice' && currentExercise.options && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {currentExercise.options.map((option, i) => {
                      const correctAnswer = Array.isArray(currentExercise.correctAnswer)
                        ? currentExercise.correctAnswer[0]
                        : currentExercise.correctAnswer;
                      let bgColor = 'var(--gray-50)';
                      let borderColor = 'var(--gray-200)';

                      if (showResult) {
                        if (option === correctAnswer) {
                          bgColor = '#dcfce7';
                          borderColor = '#16a34a';
                        } else if (option === userAnswer) {
                          bgColor = '#fee2e2';
                          borderColor = '#dc2626';
                        }
                      } else if (option === userAnswer) {
                        bgColor = 'var(--primary-50)';
                        borderColor = 'var(--primary-500)';
                      }

                      return (
                        <button
                          key={i}
                          onClick={() => !showResult && setUserAnswer(option)}
                          disabled={showResult}
                          style={{
                            padding: '0.75rem',
                            borderRadius: '0.5rem',
                            border: `2px solid ${borderColor}`,
                            backgroundColor: bgColor,
                            cursor: showResult ? 'default' : 'pointer',
                            textAlign: 'left',
                            fontSize: '0.875rem',
                          }}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Fill blank / Translation */}
                {(currentExercise.type === 'fill-blank' || currentExercise.type === 'translation') && (
                  <div>
                    <input
                      type="text"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && !showResult && handleCheckAnswer()}
                      placeholder="Введите ответ..."
                      disabled={showResult}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        fontSize: '1rem',
                        borderRadius: '0.5rem',
                        border: showResult
                          ? isCorrect
                            ? '2px solid #16a34a'
                            : '2px solid #dc2626'
                          : '2px solid var(--gray-300)',
                        backgroundColor: showResult
                          ? isCorrect
                            ? '#dcfce7'
                            : '#fee2e2'
                          : 'white',
                        outline: 'none',
                      }}
                    />
                    {showResult && !isCorrect && (
                      <p style={{ marginTop: '0.5rem', color: '#dc2626', fontSize: '0.875rem' }}>
                        Правильный ответ: <strong>
                          {Array.isArray(currentExercise.correctAnswer)
                            ? currentExercise.correctAnswer[0]
                            : currentExercise.correctAnswer}
                        </strong>
                      </p>
                    )}
                  </div>
                )}

                {/* Explanation */}
                {showResult && currentExercise.explanation && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '0.75rem',
                    backgroundColor: 'var(--gray-50)',
                    borderRadius: '0.5rem',
                    borderLeft: `3px solid ${isCorrect ? '#16a34a' : '#f59e0b'}`,
                  }}>
                    <p style={{ fontSize: '0.875rem', color: 'var(--gray-700)' }}>
                      {currentExercise.explanation}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Actions */}
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
              {!showResult ? (
                <Button onClick={handleCheckAnswer} disabled={!userAnswer} style={{ flex: 1 }}>
                  Проверить
                </Button>
              ) : (
                <Button onClick={handleNextExercise} style={{ flex: 1 }}>
                  {exerciseIndex < selectedLesson.exercises.length - 1 ? 'Далее' : 'Завершить урок'}
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>

      {/* Grammar Modal */}
      <Modal isOpen={!!selectedGrammar} onClose={() => setSelectedGrammar(null)} title={selectedGrammar?.title || ''}>
        {selectedGrammar && (
          <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
            <Badge size="sm" style={{ marginBottom: '1rem' }}>
              {selectedGrammar.titleDe}
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
                {selectedGrammar.explanation}
              </pre>
            </div>

            {/* Comparison with Russian */}
            {selectedGrammar.comparisonWithRussian && (
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
                  {selectedGrammar.comparisonWithRussian}
                </p>
              </div>
            )}

            {/* Common Mistakes */}
            {selectedGrammar.commonMistakes && selectedGrammar.commonMistakes.length > 0 && (
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertCircle style={{ width: '1rem', height: '1rem', color: '#dc2626' }} />
                  Типичные ошибки
                </h4>
                {selectedGrammar.commonMistakes.map((mistake, i) => (
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
            {selectedGrammar.examples.length > 0 && (
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Примеры</h4>
                {selectedGrammar.examples.map((ex, i) => (
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
