import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  Headphones,
  Pencil,
  Mic,
  X,
  ChevronRight,
  Trophy,
  Play,
} from 'lucide-react';
import { Card, Button, Progress, Badge } from '../components/ui';
import { useUserStore } from '../store/userStore';
import { useProgressStore } from '../store/progressStore';
import { useActivityStore } from '../store/activityStore';
import type { Exercise } from '../types';

interface PracticeTypeConfig {
  id: string;
  name: string;
  nameRu: string;
  description: string;
  icon: typeof BookOpen;
  bgColor: string;
  color: string;
  skillKey: 'lesen' | 'hoeren' | 'schreiben' | 'sprechen';
}

const practiceTypes: Record<string, PracticeTypeConfig> = {
  lesen: {
    id: 'lesen',
    name: 'Lesen',
    nameRu: 'Чтение',
    description: 'Тексты и задания на понимание прочитанного',
    icon: BookOpen,
    bgColor: '#dbeafe',
    color: '#2563eb',
    skillKey: 'lesen',
  },
  hoeren: {
    id: 'hoeren',
    name: 'Hören',
    nameRu: 'Аудирование',
    description: 'Прослушивание и задания на понимание',
    icon: Headphones,
    bgColor: '#f3e8ff',
    color: '#9333ea',
    skillKey: 'hoeren',
  },
  schreiben: {
    id: 'schreiben',
    name: 'Schreiben',
    nameRu: 'Письмо',
    description: 'Написание текстов и писем',
    icon: Pencil,
    bgColor: '#dcfce7',
    color: '#16a34a',
    skillKey: 'schreiben',
  },
  sprechen: {
    id: 'sprechen',
    name: 'Sprechen',
    nameRu: 'Говорение',
    description: 'Устная речь и диалоги',
    icon: Mic,
    bgColor: '#ffedd5',
    color: '#ea580c',
    skillKey: 'sprechen',
  },
};

// Sample exercises for each type
const sampleExercises: Record<string, Exercise[]> = {
  lesen: [
    {
      id: 'lesen-1',
      type: 'multiple-choice',
      question: 'Прочитайте текст:\n\n"Hallo! Ich heiße Maria. Ich komme aus Russland, aber ich wohne jetzt in Berlin. Ich bin Studentin und lerne Deutsch."\n\nОткуда приехала Мария?',
      options: ['Aus Deutschland', 'Aus Russland', 'Aus Berlin', 'Aus Moskau'],
      correctAnswer: 'Aus Russland',
      explanation: 'В тексте сказано: "Ich komme aus Russland" - "Я из России"',
      points: 10,
    },
    {
      id: 'lesen-2',
      type: 'true-false',
      question: 'Прочитайте текст:\n\n"Der Supermarkt ist von Montag bis Samstag von 8 bis 20 Uhr geöffnet. Am Sonntag ist er geschlossen."\n\nСупермаркет работает в воскресенье.',
      correctAnswer: 'false',
      explanation: 'В тексте сказано: "Am Sonntag ist er geschlossen" - "В воскресенье он закрыт"',
      points: 10,
    },
    {
      id: 'lesen-3',
      type: 'fill-blank',
      question: 'Заполните пропуск:\n\n"Guten ___! Wie geht es Ihnen?"',
      correctAnswer: 'Tag',
      explanation: '"Guten Tag" - это стандартное приветствие, означающее "Добрый день"',
      points: 10,
    },
    {
      id: 'lesen-4',
      type: 'multiple-choice',
      question: 'Прочитайте объявление:\n\n"Wohnung zu vermieten: 2 Zimmer, Küche, Bad. 500€ pro Monat. Kontakt: Herr Müller, Tel: 030-12345"\n\nСколько стоит аренда квартиры?',
      options: ['300€', '400€', '500€', '600€'],
      correctAnswer: '500€',
      explanation: 'В объявлении указано: "500€ pro Monat" - 500 евро в месяц',
      points: 10,
    },
    {
      id: 'lesen-5',
      type: 'matching',
      question: 'Соотнесите слова с их переводом:',
      options: ['die Küche', 'das Bad', 'das Zimmer'],
      correctAnswer: ['кухня', 'ванная', 'комната'],
      explanation: 'die Küche - кухня, das Bad - ванная, das Zimmer - комната',
      points: 15,
    },
  ],
  hoeren: [
    {
      id: 'hoeren-1',
      type: 'multiple-choice',
      question: 'Прослушайте диалог (представьте):\n\n"- Guten Tag! Was kostet das Brot?\n- Das Brot kostet 2 Euro 50."\n\nСколько стоит хлеб?',
      options: ['1,50€', '2,00€', '2,50€', '3,00€'],
      correctAnswer: '2,50€',
      explanation: 'В диалоге продавец говорит: "Das Brot kostet 2 Euro 50" - "Хлеб стоит 2 евро 50 центов"',
      points: 10,
    },
    {
      id: 'hoeren-2',
      type: 'true-false',
      question: 'Прослушайте объявление (представьте):\n\n"Der Zug nach München fährt um 15 Uhr ab Gleis 5."\n\nПоезд отправляется с платформы 3.',
      correctAnswer: 'false',
      explanation: 'Поезд отправляется с платформы 5 (Gleis 5), а не 3',
      points: 10,
    },
    {
      id: 'hoeren-3',
      type: 'fill-blank',
      question: 'Заполните пропуск в диалоге:\n\n"- Wie ___ sind Sie?\n- Ich bin 25 Jahre alt."',
      correctAnswer: 'alt',
      explanation: '"Wie alt sind Sie?" - "Сколько Вам лет?" Ответ: "Ich bin 25 Jahre alt" - "Мне 25 лет"',
      points: 10,
    },
  ],
  schreiben: [
    {
      id: 'schreiben-1',
      type: 'translation',
      question: 'Переведите на немецкий:\n\n"Меня зовут Анна."',
      correctAnswer: 'Ich heiße Anna',
      explanation: '"Меня зовут" переводится как "Ich heiße" + имя',
      points: 15,
    },
    {
      id: 'schreiben-2',
      type: 'fill-blank',
      question: 'Составьте предложение:\n\n"Ich ___ aus Russland." (kommen)',
      correctAnswer: 'komme',
      explanation: 'Глагол "kommen" спрягается: ich komme, du kommst, er/sie/es kommt...',
      points: 10,
    },
    {
      id: 'schreiben-3',
      type: 'reorder',
      question: 'Составьте правильный порядок слов:\n\n"wohne / in Berlin / ich"',
      correctAnswer: 'Ich wohne in Berlin',
      explanation: 'В немецком языке глагол стоит на втором месте: Ich (1) wohne (2) in Berlin (3)',
      points: 10,
    },
  ],
  sprechen: [
    {
      id: 'sprechen-1',
      type: 'multiple-choice',
      question: 'Как правильно ответить на вопрос "Wie heißt du?"',
      options: [
        'Ich bin 20 Jahre alt.',
        'Ich heiße Maria.',
        'Ich komme aus Deutschland.',
        'Es geht mir gut.',
      ],
      correctAnswer: 'Ich heiße Maria.',
      explanation: '"Wie heißt du?" означает "Как тебя зовут?", правильный ответ - назвать своё имя',
      points: 10,
    },
    {
      id: 'sprechen-2',
      type: 'multiple-choice',
      question: 'Что ответить на "Wie geht es Ihnen?"',
      options: [
        'Ich heiße Peter.',
        'Gut, danke. Und Ihnen?',
        'Ich wohne in Berlin.',
        'Ich bin Student.',
      ],
      correctAnswer: 'Gut, danke. Und Ihnen?',
      explanation: '"Wie geht es Ihnen?" означает "Как у Вас дела?", ответ - "Gut, danke" (Хорошо, спасибо)',
      points: 10,
    },
    {
      id: 'sprechen-3',
      type: 'fill-blank',
      question: 'Заполните диалог:\n\n"- Woher kommst du?\n- Ich ___ aus Moskau."',
      correctAnswer: 'komme',
      explanation: 'Глагол "kommen" с ich: "ich komme" - "я приезжаю/я из"',
      points: 10,
    },
  ],
};

type SessionState = 'intro' | 'practice' | 'result';

export function PracticeSession() {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const { currentLevel } = useUserStore();
  const { updateSkill, skills } = useProgressStore();
  const { logActivity } = useActivityStore();

  const [sessionState, setSessionState] = useState<SessionState>('intro');
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });

  // Matching exercise state
  const [matchingPairs, setMatchingPairs] = useState<Record<number, number>>({});
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [shuffledRight, setShuffledRight] = useState<string[]>([]);

  const practiceConfig = type ? practiceTypes[type] : null;

  useEffect(() => {
    if (type && sampleExercises[type]) {
      // Shuffle exercises
      const shuffled = [...sampleExercises[type]].sort(() => Math.random() - 0.5);
      setExercises(shuffled.slice(0, 5));
    }
  }, [type]);

  // Initialize shuffled options for matching exercises
  useEffect(() => {
    const exercise = exercises[currentIndex];
    if (exercise?.type === 'matching' && exercise.correctAnswer && Array.isArray(exercise.correctAnswer)) {
      // correctAnswer contains the Russian translations (right column)
      const shuffled = [...exercise.correctAnswer].sort(() => Math.random() - 0.5);
      setShuffledRight(shuffled);
      setMatchingPairs({});
      setSelectedLeft(null);
    }
  }, [currentIndex, exercises]);

  if (!practiceConfig) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Неизвестный тип тренировки</p>
        <Button onClick={() => navigate('/practice')} style={{ marginTop: '1rem' }}>
          К тренировкам
        </Button>
      </div>
    );
  }

  const Icon = practiceConfig.icon;
  const currentExercise = exercises[currentIndex];
  const progress = exercises.length > 0 ? ((currentIndex) / exercises.length) * 100 : 0;

  const startSession = () => {
    setSessionState('practice');
    setCurrentIndex(0);
    setStats({ correct: 0, incorrect: 0 });
    setUserAnswer('');
    setShowResult(false);
  };

  const checkAnswer = () => {
    if (!currentExercise) return;

    let correct = false;
    const correctAnswer = Array.isArray(currentExercise.correctAnswer)
      ? currentExercise.correctAnswer[0]
      : currentExercise.correctAnswer;

    if (currentExercise.type === 'matching') {
      // For matching: check if all pairs are correct
      const correctAnswers = currentExercise.correctAnswer as string[];
      correct = Object.keys(matchingPairs).length === correctAnswers.length &&
        Object.entries(matchingPairs).every(([leftIdx, rightIdx]) => {
          return shuffledRight[rightIdx] === correctAnswers[Number(leftIdx)];
        });
    } else if (currentExercise.type === 'true-false') {
      correct = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
    } else if (currentExercise.type === 'fill-blank' || currentExercise.type === 'translation' || currentExercise.type === 'reorder') {
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
    }));
  };

  const nextExercise = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setUserAnswer('');
      setShowResult(false);
      // Reset matching state
      setMatchingPairs({});
      setSelectedLeft(null);
    } else {
      finishSession();
    }
  };

  const finishSession = () => {
    setSessionState('result');

    // Calculate skill increase based on performance
    const accuracy = (stats.correct / (stats.correct + stats.incorrect)) * 100;
    const skillIncrease = Math.round(accuracy / 10); // 0-10 points

    if (practiceConfig) {
      const currentSkill = skills[practiceConfig.skillKey] || 0;
      updateSkill(practiceConfig.skillKey, currentSkill + skillIncrease);
    }

    logActivity({
      minutesStudied: 5,
      exercisesCompleted: exercises.length,
    });
  };

  const resetSession = () => {
    setSessionState('intro');
    setCurrentIndex(0);
    setStats({ correct: 0, incorrect: 0 });
    setUserAnswer('');
    setShowResult(false);
  };

  // Intro state
  if (sessionState === 'intro') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => navigate('/practice')}
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
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gray-900)' }}>
              {practiceConfig.name}
            </h1>
            <p style={{ color: 'var(--gray-600)' }}>
              {practiceConfig.nameRu}
            </p>
          </div>
        </div>

        <Card style={{ textAlign: 'center', padding: '2rem' }}>
          <div style={{
            width: '5rem',
            height: '5rem',
            backgroundColor: practiceConfig.bgColor,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem'
          }}>
            <Icon style={{ width: '2.5rem', height: '2.5rem', color: practiceConfig.color }} />
          </div>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Тренировка: {practiceConfig.nameRu}
          </h2>
          <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
            {practiceConfig.description}
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              padding: '0.75rem 1rem',
              backgroundColor: 'var(--gray-50)',
              borderRadius: '0.5rem'
            }}>
              <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>{exercises.length}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>заданий</p>
            </div>
            <div style={{
              padding: '0.75rem 1rem',
              backgroundColor: 'var(--gray-50)',
              borderRadius: '0.5rem'
            }}>
              <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>~5</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>минут</p>
            </div>
            <div style={{
              padding: '0.75rem 1rem',
              backgroundColor: 'var(--gray-50)',
              borderRadius: '0.5rem'
            }}>
              <Badge variant="level" level={currentLevel} size="sm" />
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginTop: '0.25rem' }}>уровень</p>
            </div>
          </div>

          <Button onClick={startSession} style={{ minWidth: '200px' }}>
            <Play style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
            Начать тренировку
          </Button>
        </Card>
      </div>
    );
  }

  // Result state
  if (sessionState === 'result') {
    const accuracy = stats.correct + stats.incorrect > 0
      ? Math.round((stats.correct / (stats.correct + stats.incorrect)) * 100)
      : 0;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px', margin: '0 auto' }}>
        <Card style={{ textAlign: 'center', padding: '2rem' }}>
          <div style={{
            width: '5rem',
            height: '5rem',
            backgroundColor: accuracy >= 70 ? '#dcfce7' : '#fef9c3',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem'
          }}>
            <Trophy style={{
              width: '2.5rem',
              height: '2.5rem',
              color: accuracy >= 70 ? '#16a34a' : '#ca8a04'
            }} />
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            {accuracy >= 80 ? 'Отлично!' : accuracy >= 60 ? 'Хорошо!' : 'Продолжай практиковаться!'}
          </h2>
          <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
            Тренировка "{practiceConfig.nameRu}" завершена
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a' }}>{stats.correct}</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Правильно</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#dc2626' }}>{stats.incorrect}</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Ошибок</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{accuracy}%</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Точность</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
            <Button variant="outline" onClick={resetSession}>
              Ещё раз
            </Button>
            <Button onClick={() => navigate('/practice')}>
              К тренировкам
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Practice state
  if (!currentExercise) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Нет заданий</p>
        <Button onClick={() => navigate('/practice')} style={{ marginTop: '1rem' }}>
          К тренировкам
        </Button>
      </div>
    );
  }

  const correctAnswer = Array.isArray(currentExercise.correctAnswer)
    ? currentExercise.correctAnswer[0]
    : currentExercise.correctAnswer;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          onClick={resetSession}
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
          {currentIndex + 1}/{exercises.length}
        </span>
      </div>

      {/* Exercise Card */}
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <div style={{
            width: '2rem',
            height: '2rem',
            backgroundColor: practiceConfig.bgColor,
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Icon style={{ width: '1rem', height: '1rem', color: practiceConfig.color }} />
          </div>
          <Badge size="sm" style={{ backgroundColor: 'var(--gray-100)' }}>
            {currentExercise.type === 'multiple-choice' && 'Выбор ответа'}
            {currentExercise.type === 'true-false' && 'Верно/Неверно'}
            {currentExercise.type === 'fill-blank' && 'Заполни пропуск'}
            {currentExercise.type === 'translation' && 'Перевод'}
            {currentExercise.type === 'reorder' && 'Составь предложение'}
            {currentExercise.type === 'matching' && 'Соотнеси'}
          </Badge>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {currentExercise.options.map((option, index) => {
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
                  key={index}
                  onClick={() => !showResult && setUserAnswer(option)}
                  disabled={showResult}
                  style={{
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: `2px solid ${borderColor}`,
                    backgroundColor: bgColor,
                    cursor: showResult ? 'default' : 'pointer',
                    textAlign: 'left',
                    fontSize: '1rem',
                    transition: 'all 0.2s'
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
                    borderRadius: '0.75rem',
                    border: `2px solid ${borderColor}`,
                    backgroundColor: bgColor,
                    cursor: showResult ? 'default' : 'pointer',
                    textAlign: 'center',
                    fontSize: '1rem',
                    fontWeight: 500,
                    transition: 'all 0.2s'
                  }}
                >
                  {option === 'true' ? 'Верно' : 'Неверно'}
                </button>
              );
            })}
          </div>
        )}

        {/* Fill blank / Translation / Reorder */}
        {(currentExercise.type === 'fill-blank' ||
          currentExercise.type === 'translation' ||
          currentExercise.type === 'reorder') && (
          <div>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !showResult && checkAnswer()}
              placeholder="Введите ответ..."
              disabled={showResult}
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1rem',
                borderRadius: '0.75rem',
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
              <p style={{
                marginTop: '0.75rem',
                color: '#dc2626',
              }}>
                Правильный ответ: <strong>{correctAnswer}</strong>
              </p>
            )}
          </div>
        )}

        {/* Matching */}
        {currentExercise.type === 'matching' && currentExercise.options && (
          <div>
            {(() => {
              // Use options as the left column (German words)
              const leftItems = currentExercise.options as string[];
              const correctAnswers = currentExercise.correctAnswer as string[];

              const handleLeftClick = (index: number) => {
                if (showResult) return;
                setSelectedLeft(selectedLeft === index ? null : index);
              };

              const handleRightClick = (index: number) => {
                if (showResult || selectedLeft === null) return;
                // Check if this right item is already paired
                const existingPair = Object.entries(matchingPairs).find(([_, rIdx]) => rIdx === index);
                if (existingPair) {
                  // Remove old pair and create new one
                  const newPairs = { ...matchingPairs };
                  delete newPairs[Number(existingPair[0])];
                  newPairs[selectedLeft] = index;
                  setMatchingPairs(newPairs);
                } else {
                  setMatchingPairs({ ...matchingPairs, [selectedLeft]: index });
                }
                setSelectedLeft(null);
              };

              const removePair = (leftIdx: number) => {
                if (showResult) return;
                const newPairs = { ...matchingPairs };
                delete newPairs[leftIdx];
                setMatchingPairs(newPairs);
              };

              return (
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                  {/* Left column - German words */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {leftItems.map((item, idx) => {
                      const isPaired = matchingPairs[idx] !== undefined;
                      const isSelected = selectedLeft === idx;
                      let bgColor = 'var(--gray-50)';
                      let borderColor = 'var(--gray-200)';

                      if (showResult) {
                        if (isPaired && shuffledRight[matchingPairs[idx]] === correctAnswers[idx]) {
                          bgColor = '#dcfce7';
                          borderColor = '#16a34a';
                        } else if (isPaired) {
                          bgColor = '#fee2e2';
                          borderColor = '#dc2626';
                        }
                      } else {
                        if (isSelected) {
                          bgColor = 'var(--primary-50)';
                          borderColor = 'var(--primary-500)';
                        } else if (isPaired) {
                          bgColor = '#dbeafe';
                          borderColor = '#3b82f6';
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => isPaired ? removePair(idx) : handleLeftClick(idx)}
                          disabled={showResult}
                          style={{
                            padding: '0.75rem 1rem',
                            borderRadius: '0.5rem',
                            border: `2px solid ${borderColor}`,
                            backgroundColor: bgColor,
                            cursor: showResult ? 'default' : 'pointer',
                            minWidth: '140px',
                            textAlign: 'center',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                          }}
                        >
                          {item}
                          {isPaired && !showResult && (
                            <span style={{ marginLeft: '0.5rem', color: 'var(--gray-400)' }}>×</span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Right column - Russian translations */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {shuffledRight.map((item, idx) => {
                      const pairedLeftIdx = Object.entries(matchingPairs).find(([_, rIdx]) => rIdx === idx)?.[0];
                      const isPaired = pairedLeftIdx !== undefined;
                      let bgColor = 'var(--gray-50)';
                      let borderColor = 'var(--gray-200)';

                      if (showResult && isPaired) {
                        if (shuffledRight[idx] === correctAnswers[Number(pairedLeftIdx)]) {
                          bgColor = '#dcfce7';
                          borderColor = '#16a34a';
                        } else {
                          bgColor = '#fee2e2';
                          borderColor = '#dc2626';
                        }
                      } else if (isPaired) {
                        bgColor = '#dbeafe';
                        borderColor = '#3b82f6';
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleRightClick(idx)}
                          disabled={showResult || selectedLeft === null}
                          style={{
                            padding: '0.75rem 1rem',
                            borderRadius: '0.5rem',
                            border: `2px solid ${borderColor}`,
                            backgroundColor: bgColor,
                            cursor: showResult || selectedLeft === null ? 'default' : 'pointer',
                            minWidth: '140px',
                            textAlign: 'center',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            opacity: selectedLeft === null && !isPaired && !showResult ? 0.6 : 1,
                          }}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

            {selectedLeft !== null && !showResult && (
              <p style={{
                marginTop: '1rem',
                textAlign: 'center',
                color: 'var(--gray-500)',
                fontSize: '0.875rem'
              }}>
                Теперь выберите перевод справа
              </p>
            )}
          </div>
        )}

        {/* Explanation after answer */}
        {showResult && currentExercise.explanation && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: 'var(--gray-50)',
            borderRadius: '0.75rem',
            borderLeft: `4px solid ${isCorrect ? '#16a34a' : '#f59e0b'}`
          }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-700)' }}>
              {currentExercise.explanation}
            </p>
          </div>
        )}
      </Card>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        {!showResult ? (
          <Button
            onClick={checkAnswer}
            disabled={
              currentExercise.type === 'matching'
                ? Object.keys(matchingPairs).length !== (currentExercise.correctAnswer as string[]).length
                : !userAnswer
            }
            style={{ flex: 1 }}
          >
            Проверить
          </Button>
        ) : (
          <Button onClick={nextExercise} style={{ flex: 1 }}>
            {currentIndex < exercises.length - 1 ? (
              <>
                Далее
                <ChevronRight style={{ width: '1rem', height: '1rem', marginLeft: '0.5rem' }} />
              </>
            ) : (
              'Завершить'
            )}
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
          <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#16a34a' }}>{stats.correct}</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>Правильно</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#dc2626' }}>{stats.incorrect}</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>Ошибок</p>
        </div>
      </div>
    </div>
  );
}
