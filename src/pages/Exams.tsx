import { useState } from 'react';
import {
  Award,
  Clock,
  BookOpen,
  Headphones,
  Pencil,
  Mic,
  ChevronRight,
  Lock,
  Play,
  Info,
  X,
  Trophy,
} from 'lucide-react';
import { Card, Badge, Button, Progress } from '../components/ui';
import { useUserStore } from '../store/userStore';
import { useActivityStore } from '../store/activityStore';
import type { Level, Exercise } from '../types';

interface ExamInfo {
  id: string;
  level: Level;
  name: string;
  description: string;
  duration: number; // minutes
  parts: ExamPart[];
  passingScore: number;
}

interface ExamPart {
  id: string;
  type: 'lesen' | 'hoeren' | 'schreiben' | 'sprechen';
  name: string;
  nameDe: string;
  duration: number;
  description: string;
  exercises: Exercise[];
}

// Sample exam data
const exams: ExamInfo[] = [
  {
    id: 'goethe-a1',
    level: 'a1',
    name: 'Goethe-Zertifikat A1: Start Deutsch 1',
    description: 'Первый официальный экзамен по немецкому языку. Подтверждает базовые знания.',
    duration: 65,
    passingScore: 60,
    parts: [
      {
        id: 'a1-lesen',
        type: 'lesen',
        name: 'Чтение',
        nameDe: 'Lesen',
        duration: 25,
        description: 'Понимание коротких текстов: объявления, вывески, письма',
        exercises: [
          {
            id: 'a1-exam-lesen-1',
            type: 'true-false',
            question: 'Прочитайте объявление:\n\n"Supermarkt EDEKA\nÖffnungszeiten:\nMo-Sa: 8:00 - 20:00\nSo: geschlossen\n\nFrisches Obst und Gemüse jeden Tag!"\n\nСупермаркет открыт в воскресенье.',
            correctAnswer: 'false',
            explanation: 'В объявлении написано "So: geschlossen" (Вс: закрыто)',
            points: 5,
          },
          {
            id: 'a1-exam-lesen-2',
            type: 'multiple-choice',
            question: 'Прочитайте письмо:\n\n"Liebe Maria,\nwie geht es dir? Ich bin jetzt in Berlin und lerne Deutsch. Der Kurs beginnt um 9 Uhr. Am Nachmittag mache ich Hausaufgaben. Am Wochenende besuche ich Museen.\nViele Grüße,\nAnna"\n\nКогда Анна делает домашние задания?',
            options: ['Am Morgen', 'Am Nachmittag', 'Am Abend', 'Am Wochenende'],
            correctAnswer: 'Am Nachmittag',
            explanation: 'В письме сказано: "Am Nachmittag mache ich Hausaufgaben" (Во второй половине дня я делаю домашние задания)',
            points: 5,
          },
          {
            id: 'a1-exam-lesen-3',
            type: 'multiple-choice',
            question: 'Прочитайте вывеску:\n\n"ARZTPRAXIS Dr. Müller\nSprechstunden:\nMo, Mi, Fr: 8-12 Uhr\nDi, Do: 14-18 Uhr\nTermin nur nach Vereinbarung"\n\nКогда можно прийти к врачу во вторник?',
            options: ['8-12 Uhr', '12-14 Uhr', '14-18 Uhr', 'Geschlossen'],
            correctAnswer: '14-18 Uhr',
            explanation: 'Во вторник (Di) приём с 14 до 18 часов',
            points: 5,
          },
        ],
      },
      {
        id: 'a1-hoeren',
        type: 'hoeren',
        name: 'Аудирование',
        nameDe: 'Hören',
        duration: 20,
        description: 'Понимание простых объявлений и разговоров',
        exercises: [
          {
            id: 'a1-exam-hoeren-1',
            type: 'multiple-choice',
            question: 'Прослушайте диалог (представьте):\n\n"- Guten Tag! Ich hätte gern ein Kilo Äpfel.\n- Gern. Das macht 2 Euro 50.\n- Und was kosten die Bananen?\n- 1 Euro 30 pro Kilo.\n- Dann nehme ich auch ein Kilo Bananen."\n\nСколько стоит килограмм яблок?',
            options: ['1,30€', '2,00€', '2,50€', '3,80€'],
            correctAnswer: '2,50€',
            explanation: 'Продавец говорит: "Das macht 2 Euro 50" (Это будет 2 евро 50)',
            points: 5,
          },
          {
            id: 'a1-exam-hoeren-2',
            type: 'true-false',
            question: 'Прослушайте объявление (представьте):\n\n"Achtung, eine Durchsage: Der ICE 578 nach Hamburg fährt heute von Gleis 12 ab. Ich wiederhole: Gleis 12, nicht Gleis 8."\n\nПоезд отправляется с платформы 8.',
            correctAnswer: 'false',
            explanation: 'Объявление говорит, что поезд отправляется с платформы 12, НЕ с платформы 8',
            points: 5,
          },
        ],
      },
      {
        id: 'a1-schreiben',
        type: 'schreiben',
        name: 'Письмо',
        nameDe: 'Schreiben',
        duration: 20,
        description: 'Заполнение анкет, написание коротких сообщений',
        exercises: [
          {
            id: 'a1-exam-schreiben-1',
            type: 'fill-blank',
            question: 'Заполните анкету:\n\nVorname: Anna\nNachname: ___\nAlter: 25\n\n(Введите типичную немецкую фамилию)',
            correctAnswer: 'Müller',
            explanation: 'Müller — самая распространённая фамилия в Германии',
            points: 5,
          },
          {
            id: 'a1-exam-schreiben-2',
            type: 'translation',
            question: 'Напишите короткий ответ на приглашение:\n\n"Vielen Dank für die Einladung. Ich komme gern."',
            correctAnswer: 'Vielen Dank für die Einladung. Ich komme gern.',
            explanation: 'Это стандартный ответ на приглашение: "Большое спасибо за приглашение. Я с удовольствием приду."',
            points: 10,
          },
        ],
      },
    ],
  },
  {
    id: 'goethe-a2',
    level: 'a2',
    name: 'Goethe-Zertifikat A2',
    description: 'Подтверждает способность общаться в простых повседневных ситуациях.',
    duration: 80,
    passingScore: 60,
    parts: [],
  },
  {
    id: 'goethe-b1',
    level: 'b1',
    name: 'Goethe-Zertifikat B1',
    description: 'Необходим для получения гражданства Германии. Средний уровень владения.',
    duration: 165,
    passingScore: 60,
    parts: [],
  },
  {
    id: 'goethe-b2',
    level: 'b2',
    name: 'Goethe-Zertifikat B2',
    description: 'Требуется для поступления в немецкие университеты.',
    duration: 190,
    passingScore: 60,
    parts: [],
  },
];

type ExamState = 'list' | 'info' | 'practice' | 'result';

export function Exams() {
  const { currentLevel } = useUserStore();
  const { logActivity } = useActivityStore();

  const [examState, setExamState] = useState<ExamState>('list');
  const [selectedExam, setSelectedExam] = useState<ExamInfo | null>(null);
  const [selectedPart, setSelectedPart] = useState<ExamPart | null>(null);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0, points: 0, maxPoints: 0 });

  const levelOrder: Level[] = ['a1', 'a2', 'b1', 'b2', 'c1'];
  const currentLevelIndex = levelOrder.indexOf(currentLevel);

  const currentExercise = selectedPart?.exercises[exerciseIndex];

  const handleSelectExam = (exam: ExamInfo) => {
    setSelectedExam(exam);
    setExamState('info');
  };

  const handleStartPart = (part: ExamPart) => {
    setSelectedPart(part);
    setExerciseIndex(0);
    setUserAnswer('');
    setShowResult(false);
    setStats({ correct: 0, incorrect: 0, points: 0, maxPoints: 0 });
    setExamState('practice');
  };

  const handleCheckAnswer = () => {
    if (!currentExercise) return;

    const correctAnswer = Array.isArray(currentExercise.correctAnswer)
      ? currentExercise.correctAnswer[0]
      : currentExercise.correctAnswer;

    let correct = false;
    if (currentExercise.type === 'true-false') {
      correct = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
    } else if (currentExercise.type === 'fill-blank' || currentExercise.type === 'translation') {
      correct = userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
    } else {
      correct = userAnswer === correctAnswer;
    }

    setIsCorrect(correct);
    setShowResult(true);
    setStats(prev => ({
      ...prev,
      correct: correct ? prev.correct + 1 : prev.correct,
      incorrect: correct ? prev.incorrect : prev.incorrect + 1,
      points: correct ? prev.points + currentExercise.points : prev.points,
      maxPoints: prev.maxPoints + currentExercise.points,
    }));
  };

  const handleNextExercise = () => {
    if (!selectedPart) return;

    if (exerciseIndex < selectedPart.exercises.length - 1) {
      setExerciseIndex(prev => prev + 1);
      setUserAnswer('');
      setShowResult(false);
    } else {
      finishPart();
    }
  };

  const finishPart = () => {
    setExamState('result');
    logActivity({
      minutesStudied: selectedPart?.duration || 10,
      exercisesCompleted: selectedPart?.exercises.length || 0,
    });
  };

  const handleBackToExam = () => {
    setSelectedPart(null);
    setExamState('info');
  };

  const handleBackToList = () => {
    setSelectedExam(null);
    setSelectedPart(null);
    setExamState('list');
  };

  const getPartIcon = (type: string) => {
    switch (type) {
      case 'lesen': return BookOpen;
      case 'hoeren': return Headphones;
      case 'schreiben': return Pencil;
      case 'sprechen': return Mic;
      default: return BookOpen;
    }
  };

  const getPartColor = (type: string) => {
    switch (type) {
      case 'lesen': return { bg: '#dbeafe', color: '#2563eb' };
      case 'hoeren': return { bg: '#f3e8ff', color: '#9333ea' };
      case 'schreiben': return { bg: '#dcfce7', color: '#16a34a' };
      case 'sprechen': return { bg: '#ffedd5', color: '#ea580c' };
      default: return { bg: 'var(--gray-100)', color: 'var(--gray-600)' };
    }
  };

  // List view
  if (examState === 'list') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '0.25rem' }}>
            Симулятор экзаменов Goethe
          </h1>
          <p style={{ color: 'var(--gray-600)' }}>
            Подготовься к официальным экзаменам Goethe-Institut
          </p>
        </div>

        <Card style={{ backgroundColor: '#fff7ed', border: '1px solid #fed7aa' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info style={{ width: '1.25rem', height: '1.25rem', color: '#ea580c', flexShrink: 0, marginTop: '0.125rem' }} />
            <div>
              <p style={{ fontWeight: 600, color: '#c2410c', marginBottom: '0.25rem' }}>
                Что такое Goethe-Zertifikat?
              </p>
              <p style={{ fontSize: '0.875rem', color: '#7c2d12' }}>
                Официальный сертификат знания немецкого языка, признаваемый во всём мире.
                Необходим для учёбы в Германии, получения визы и трудоустройства.
              </p>
            </div>
          </div>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {exams.map((exam) => {
            const examLevelIndex = levelOrder.indexOf(exam.level);
            const isLocked = examLevelIndex > currentLevelIndex;
            const hasContent = exam.parts.length > 0;

            return (
              <Card
                key={exam.id}
                onClick={() => !isLocked && handleSelectExam(exam)}
                style={{
                  cursor: isLocked ? 'not-allowed' : 'pointer',
                  opacity: isLocked ? 0.5 : 1,
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '0.75rem',
                    backgroundColor: isLocked ? 'var(--gray-100)' : '#fef3c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {isLocked ? (
                      <Lock style={{ width: '1.5rem', height: '1.5rem', color: 'var(--gray-400)' }} />
                    ) : (
                      <Award style={{ width: '1.75rem', height: '1.75rem', color: '#d97706' }} />
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <h3 style={{ fontWeight: 600 }}>{exam.name}</h3>
                      <Badge variant="level" level={exam.level} size="sm" />
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: '0.5rem' }}>
                      {exam.description}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--gray-500)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock style={{ width: '0.875rem', height: '0.875rem' }} />
                        {exam.duration} мин
                      </span>
                      {!hasContent && (
                        <Badge size="sm" style={{ backgroundColor: 'var(--gray-100)', color: 'var(--gray-500)' }}>
                          Скоро
                        </Badge>
                      )}
                    </div>
                  </div>
                  <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: 'var(--gray-400)' }} />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  // Exam info view
  if (examState === 'info' && selectedExam) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={handleBackToList}
            style={{
              padding: '0.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              background: 'var(--gray-100)',
              cursor: 'pointer',
            }}
          >
            <X style={{ width: '1.25rem', height: '1.25rem' }} />
          </button>
          <div>
            <Badge variant="level" level={selectedExam.level} size="sm" style={{ marginBottom: '0.25rem' }} />
            <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--gray-900)' }}>
              {selectedExam.name}
            </h1>
          </div>
        </div>

        <Card>
          <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
            {selectedExam.description}
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{selectedExam.duration}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>минут</p>
            </div>
            <div>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{selectedExam.parts.length}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>частей</p>
            </div>
            <div>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{selectedExam.passingScore}%</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>для сдачи</p>
            </div>
          </div>
        </Card>

        <h3 style={{ fontWeight: 600 }}>Части экзамена</h3>

        {selectedExam.parts.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {selectedExam.parts.map((part) => {
              const Icon = getPartIcon(part.type);
              const colors = getPartColor(part.type);

              return (
                <Card
                  key={part.id}
                  onClick={() => handleStartPart(part)}
                  style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '0.75rem',
                      backgroundColor: colors.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Icon style={{ width: '1.5rem', height: '1.5rem', color: colors.color }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <h4 style={{ fontWeight: 600 }}>{part.name}</h4>
                        <span style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
                          ({part.nameDe})
                        </span>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                        {part.description}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--gray-500)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Clock style={{ width: '0.875rem', height: '0.875rem' }} />
                          {part.duration} мин
                        </span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>
                          {part.exercises.length} заданий
                        </span>
                      </div>
                    </div>
                    <Play style={{ width: '1.25rem', height: '1.25rem', color: colors.color }} />
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card style={{ textAlign: 'center', padding: '2rem' }}>
            <p style={{ color: 'var(--gray-500)', marginBottom: '1rem' }}>
              Задания для этого экзамена ещё в разработке
            </p>
            <Button variant="outline" onClick={handleBackToList}>
              Назад к списку
            </Button>
          </Card>
        )}
      </div>
    );
  }

  // Practice view
  if (examState === 'practice' && selectedPart && currentExercise) {
    const progress = ((exerciseIndex + 1) / selectedPart.exercises.length) * 100;
    const correctAnswer = Array.isArray(currentExercise.correctAnswer)
      ? currentExercise.correctAnswer[0]
      : currentExercise.correctAnswer;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            onClick={handleBackToExam}
            style={{
              padding: '0.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              background: 'var(--gray-100)',
              cursor: 'pointer',
            }}
          >
            <X style={{ width: '1.25rem', height: '1.25rem' }} />
          </button>
          <div style={{ flex: 1, margin: '0 1rem' }}>
            <Progress value={progress} size="sm" />
          </div>
          <span style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
            {exerciseIndex + 1}/{selectedPart.exercises.length}
          </span>
        </div>

        {/* Exercise */}
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            {(() => {
              const Icon = getPartIcon(selectedPart.type);
              const colors = getPartColor(selectedPart.type);
              return (
                <div style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '0.5rem',
                  backgroundColor: colors.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Icon style={{ width: '1rem', height: '1rem', color: colors.color }} />
                </div>
              );
            })()}
            <span style={{ fontWeight: 500 }}>{selectedPart.name}</span>
          </div>

          <p style={{
            fontSize: '1rem',
            lineHeight: 1.6,
            whiteSpace: 'pre-line',
            marginBottom: '1.5rem'
          }}>
            {currentExercise.question}
          </p>

          {/* Multiple Choice */}
          {currentExercise.type === 'multiple-choice' && currentExercise.options && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {currentExercise.options.map((option, i) => {
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

          {/* True/False */}
          {currentExercise.type === 'true-false' && (
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {['true', 'false'].map((option) => {
                let bgColor = 'var(--gray-50)';
                let borderColor = 'var(--gray-200)';

                if (showResult) {
                  if (option === correctAnswer) {
                    bgColor = '#dcfce7';
                    borderColor = '#16a34a';
                  } else if (option === userAnswer && !isCorrect) {
                    bgColor = '#fee2e2';
                    borderColor = '#dc2626';
                  }
                } else if (option === userAnswer) {
                  bgColor = 'var(--primary-50)';
                  borderColor = 'var(--primary-500)';
                }

                return (
                  <button
                    key={option}
                    onClick={() => !showResult && setUserAnswer(option)}
                    disabled={showResult}
                    style={{
                      flex: 1,
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      border: `2px solid ${borderColor}`,
                      backgroundColor: bgColor,
                      cursor: showResult ? 'default' : 'pointer',
                      textAlign: 'center',
                      fontSize: '1rem',
                      fontWeight: 500,
                    }}
                  >
                    {option === 'true' ? 'Верно' : 'Неверно'}
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
                  Правильный ответ: <strong>{correctAnswer}</strong>
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
        </Card>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {!showResult ? (
            <Button onClick={handleCheckAnswer} disabled={!userAnswer} style={{ flex: 1 }}>
              Проверить
            </Button>
          ) : (
            <Button onClick={handleNextExercise} style={{ flex: 1 }}>
              {exerciseIndex < selectedPart.exercises.length - 1 ? 'Далее' : 'Завершить'}
            </Button>
          )}
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          padding: '1rem',
          backgroundColor: 'var(--gray-50)',
          borderRadius: '0.75rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#16a34a' }}>{stats.points}</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>баллов</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>{stats.correct}</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>правильно</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#dc2626' }}>{stats.incorrect}</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>ошибок</p>
          </div>
        </div>
      </div>
    );
  }

  // Result view
  if (examState === 'result' && selectedPart) {
    const accuracy = stats.correct + stats.incorrect > 0
      ? Math.round((stats.correct / (stats.correct + stats.incorrect)) * 100)
      : 0;
    const passed = accuracy >= (selectedExam?.passingScore || 60);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px', margin: '0 auto' }}>
        <Card style={{ textAlign: 'center', padding: '2rem' }}>
          <div style={{
            width: '5rem',
            height: '5rem',
            backgroundColor: passed ? '#dcfce7' : '#fee2e2',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem'
          }}>
            {passed ? (
              <Trophy style={{ width: '2.5rem', height: '2.5rem', color: '#16a34a' }} />
            ) : (
              <X style={{ width: '2.5rem', height: '2.5rem', color: '#dc2626' }} />
            )}
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            {passed ? 'Отлично! Ты сдал!' : 'Пробуй ещё!'}
          </h2>
          <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
            Часть "{selectedPart.name}" завершена
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{stats.points}/{stats.maxPoints}</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>баллов</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{accuracy}%</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>точность</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: passed ? '#16a34a' : '#dc2626' }}>
                {passed ? 'Сдано' : 'Не сдано'}
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
                нужно {selectedExam?.passingScore}%
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
            <Button variant="outline" onClick={() => handleStartPart(selectedPart)}>
              Попробовать снова
            </Button>
            <Button onClick={handleBackToExam}>
              К экзамену
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return null;
}
