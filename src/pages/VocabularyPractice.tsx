import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Check,
  X,
  RotateCcw,
  Trophy,
  Brain,
  ChevronRight,
} from 'lucide-react';
import { Card, Button, Progress, Badge } from '../components/ui';
import { useVocabularyStore } from '../store/vocabularyStore';
import { useActivityStore } from '../store/activityStore';
import { useUserStore } from '../store/userStore';
import { a1Vocabulary } from '../data/levels/a1';
import type { Word } from '../types';

type PracticeMode = 'flashcard' | 'quiz' | 'typing';
type SessionState = 'ready' | 'practicing' | 'result';

interface SessionStats {
  correct: number;
  incorrect: number;
  totalTime: number;
}

export function VocabularyPractice() {
  const navigate = useNavigate();
  const { currentLevel } = useUserStore();
  const {
    getWordsForReview,
    reviewWord,
    addWord,
    getWordProgress,
  } = useVocabularyStore();
  const { logActivity } = useActivityStore();

  const [mode, setMode] = useState<PracticeMode>('flashcard');
  const [sessionState, setSessionState] = useState<SessionState>('ready');
  const [practiceWords, setPracticeWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [stats, setStats] = useState<SessionStats>({ correct: 0, incorrect: 0, totalTime: 0 });
  const [startTime, setStartTime] = useState<number>(0);
  const [userInput, setUserInput] = useState('');
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Get words for the session
  const prepareSession = useCallback(() => {
    // Get words that need review
    const wordsForReview = getWordsForReview(10);

    // If no words for review, get some new words from vocabulary
    let sessionWords: Word[] = [];

    if (wordsForReview.length > 0) {
      // Map progress to actual words
      sessionWords = wordsForReview
        .map(progress => a1Vocabulary.find(w => w.id === progress.wordId))
        .filter((w): w is Word => w !== undefined);
    }

    // Add new words if needed
    if (sessionWords.length < 10) {
      const existingIds = new Set([...sessionWords.map(w => w.id), ...wordsForReview.map(p => p.wordId)]);
      const newWords = a1Vocabulary
        .filter(w => !existingIds.has(w.id) && w.level === currentLevel)
        .slice(0, 10 - sessionWords.length);

      // Add new words to the store
      newWords.forEach(w => addWord(w.id));
      sessionWords = [...sessionWords, ...newWords];
    }

    // Shuffle the words
    sessionWords = sessionWords.sort(() => Math.random() - 0.5);

    setPracticeWords(sessionWords);
    setCurrentIndex(0);
    setShowAnswer(false);
    setStats({ correct: 0, incorrect: 0, totalTime: 0 });
    setStartTime(Date.now());
    setSessionState('practicing');
  }, [getWordsForReview, currentLevel, addWord]);

  const currentWord = practiceWords[currentIndex];

  // Generate quiz options
  useEffect(() => {
    if (mode === 'quiz' && currentWord && sessionState === 'practicing') {
      const correctAnswer = currentWord.russian;
      const wrongAnswers = a1Vocabulary
        .filter(w => w.id !== currentWord.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.russian);

      const options = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
      setQuizOptions(options);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  }, [currentWord, mode, sessionState]);

  const handleAnswer = (correct: boolean) => {
    const timeSpent = Date.now() - startTime;

    if (currentWord) {
      reviewWord(currentWord.id, correct, timeSpent);
    }

    setStats(prev => ({
      ...prev,
      correct: correct ? prev.correct + 1 : prev.correct,
      incorrect: correct ? prev.incorrect : prev.incorrect + 1,
      totalTime: prev.totalTime + timeSpent,
    }));

    // Move to next word or finish
    if (currentIndex < practiceWords.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
      setUserInput('');
      setSelectedOption(null);
      setIsCorrect(null);
      setStartTime(Date.now());
    } else {
      finishSession();
    }
  };

  const handleQuizSelect = (option: string) => {
    if (selectedOption !== null) return; // Already answered

    setSelectedOption(option);
    const correct = option === currentWord?.russian;
    setIsCorrect(correct);

    setTimeout(() => {
      handleAnswer(correct);
    }, 1000);
  };

  const handleTypingSubmit = () => {
    if (!currentWord) return;

    const correct = userInput.toLowerCase().trim() === currentWord.russian.toLowerCase().trim();
    setIsCorrect(correct);
    setShowAnswer(true);

    setTimeout(() => {
      handleAnswer(correct);
    }, 1500);
  };

  const finishSession = () => {
    setSessionState('result');

    // Record activity
    logActivity({
      minutesStudied: Math.round(stats.totalTime / 60000),
      wordsReviewed: stats.correct + stats.incorrect,
      exercisesCompleted: 1,
    });
  };

  const resetSession = () => {
    setSessionState('ready');
    setPracticeWords([]);
    setCurrentIndex(0);
    setShowAnswer(false);
    setStats({ correct: 0, incorrect: 0, totalTime: 0 });
    setUserInput('');
  };

  const progress = practiceWords.length > 0
    ? ((currentIndex + 1) / practiceWords.length) * 100
    : 0;

  // Ready state - select mode
  if (sessionState === 'ready') {
    const wordsForReview = getWordsForReview(20);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => navigate('/vocabulary')}
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
              Тренировка слов
            </h1>
            <p style={{ color: 'var(--gray-600)' }}>
              Выбери режим тренировки
            </p>
          </div>
        </div>

        {wordsForReview.length > 0 && (
          <Card style={{ backgroundColor: '#fef9c3', border: '1px solid #fde047' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Brain style={{ width: '1.5rem', height: '1.5rem', color: '#a16207' }} />
              <div>
                <p style={{ fontWeight: 600 }}>{wordsForReview.length} слов ждут повторения</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                  Пора освежить память!
                </p>
              </div>
            </div>
          </Card>
        )}

        <div style={{ display: 'grid', gap: '1rem' }}>
          <Card
            onClick={() => { setMode('flashcard'); prepareSession(); }}
            style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                  <RotateCcw style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb' }} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: '1.125rem' }}>Карточки</h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem' }}>
                    Классический режим с переворачивающимися карточками
                  </p>
                </div>
              </div>
              <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: 'var(--gray-400)' }} />
            </div>
          </Card>

          <Card
            onClick={() => { setMode('quiz'); prepareSession(); }}
            style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                  <Check style={{ width: '1.5rem', height: '1.5rem', color: '#9333ea' }} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: '1.125rem' }}>Тест</h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem' }}>
                    Выбери правильный перевод из вариантов
                  </p>
                </div>
              </div>
              <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: 'var(--gray-400)' }} />
            </div>
          </Card>

          <Card
            onClick={() => { setMode('typing'); prepareSession(); }}
            style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                  <span style={{ fontSize: '1.25rem' }}>⌨️</span>
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: '1.125rem' }}>Ввод</h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem' }}>
                    Напиши перевод самостоятельно
                  </p>
                </div>
              </div>
              <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: 'var(--gray-400)' }} />
            </div>
          </Card>
        </div>
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
            Тренировка завершена
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
            <Button onClick={() => navigate('/vocabulary')}>
              К словарю
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Practicing state
  if (!currentWord) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Нет слов для тренировки</p>
        <Button onClick={() => navigate('/vocabulary')} style={{ marginTop: '1rem' }}>
          К словарю
        </Button>
      </div>
    );
  }

  const wordProgress = getWordProgress(currentWord.id);
  const familiarity = wordProgress?.familiarity || 0;

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
          {currentIndex + 1}/{practiceWords.length}
        </span>
      </div>

      {/* Flashcard Mode */}
      {mode === 'flashcard' && (
        <Card
          onClick={() => setShowAnswer(!showAnswer)}
          style={{
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s',
            perspective: '1000px',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <Badge variant="level" level={currentWord.level} size="sm" />
            {currentWord.article && (
              <Badge size="sm" style={{ backgroundColor: 'var(--gray-100)', color: 'var(--gray-600)' }}>
                {currentWord.article}
              </Badge>
            )}
            {familiarity > 0 && (
              <Badge size="sm" style={{ backgroundColor: '#dcfce7', color: '#16a34a' }}>
                {familiarity}/5
              </Badge>
            )}
          </div>

          <p style={{
            fontSize: '2rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '0.5rem'
          }}>
            {showAnswer ? currentWord.russian : currentWord.german}
          </p>

          {showAnswer && currentWord.examples[0] && (
            <p style={{
              fontSize: '1rem',
              color: 'var(--gray-600)',
              textAlign: 'center',
              marginTop: '1rem',
              fontStyle: 'italic'
            }}>
              "{currentWord.examples[0].german}"
            </p>
          )}

          <p style={{
            fontSize: '0.875rem',
            color: 'var(--gray-400)',
            marginTop: '1.5rem'
          }}>
            {showAnswer ? 'Нажми для следующего' : 'Нажми, чтобы показать ответ'}
          </p>
        </Card>
      )}

      {/* Quiz Mode */}
      {mode === 'quiz' && (
        <div>
          <Card style={{
            minHeight: '150px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              {currentWord.article && (
                <Badge size="sm" style={{ backgroundColor: 'var(--gray-100)', color: 'var(--gray-600)' }}>{currentWord.article}</Badge>
              )}
            </div>
            <p style={{ fontSize: '1.75rem', fontWeight: 700, textAlign: 'center' }}>
              {currentWord.german}
            </p>
          </Card>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {quizOptions.map((option, index) => {
              let bgColor = 'var(--gray-50)';
              let borderColor = 'var(--gray-200)';

              if (selectedOption !== null) {
                if (option === currentWord.russian) {
                  bgColor = '#dcfce7';
                  borderColor = '#16a34a';
                } else if (option === selectedOption && !isCorrect) {
                  bgColor = '#fee2e2';
                  borderColor = '#dc2626';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleQuizSelect(option)}
                  disabled={selectedOption !== null}
                  style={{
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: `2px solid ${borderColor}`,
                    backgroundColor: bgColor,
                    cursor: selectedOption !== null ? 'default' : 'pointer',
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
        </div>
      )}

      {/* Typing Mode */}
      {mode === 'typing' && (
        <div>
          <Card style={{
            minHeight: '150px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              {currentWord.article && (
                <Badge size="sm" style={{ backgroundColor: 'var(--gray-100)', color: 'var(--gray-600)' }}>{currentWord.article}</Badge>
              )}
            </div>
            <p style={{ fontSize: '1.75rem', fontWeight: 700, textAlign: 'center' }}>
              {currentWord.german}
            </p>
          </Card>

          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !showAnswer && handleTypingSubmit()}
              placeholder="Введи перевод..."
              disabled={showAnswer}
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1rem',
                borderRadius: '0.75rem',
                border: showAnswer
                  ? isCorrect
                    ? '2px solid #16a34a'
                    : '2px solid #dc2626'
                  : '2px solid var(--gray-300)',
                backgroundColor: showAnswer
                  ? isCorrect
                    ? '#dcfce7'
                    : '#fee2e2'
                  : 'white',
                outline: 'none',
              }}
            />
          </div>

          {showAnswer && !isCorrect && (
            <p style={{
              textAlign: 'center',
              color: '#dc2626',
              marginBottom: '1rem'
            }}>
              Правильный ответ: <strong>{currentWord.russian}</strong>
            </p>
          )}

          {!showAnswer && (
            <Button onClick={handleTypingSubmit} style={{ width: '100%' }}>
              Проверить
            </Button>
          )}
        </div>
      )}

      {/* Answer buttons for flashcard mode */}
      {mode === 'flashcard' && showAnswer && (
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Button
            variant="outline"
            onClick={() => handleAnswer(false)}
            style={{
              flex: 1,
              borderColor: '#dc2626',
              color: '#dc2626'
            }}
          >
            <X style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
            Не знаю
          </Button>
          <Button
            onClick={() => handleAnswer(true)}
            style={{
              flex: 1,
              backgroundColor: '#16a34a'
            }}
          >
            <Check style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
            Знаю
          </Button>
        </div>
      )}

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
