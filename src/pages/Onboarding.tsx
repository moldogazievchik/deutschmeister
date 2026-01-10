import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Target, Clock, GraduationCap } from 'lucide-react';
import { Button, Input } from '../components/ui';
import { useUserStore } from '../store/userStore';
import type { Level } from '../types';

type Step = 'welcome' | 'name' | 'goal' | 'time' | 'level' | 'complete';

const targetLevels: { level: Level; name: string; description: string }[] = [
  { level: 'b1', name: 'B1', description: 'Базовый уровень для жизни в Германии' },
  { level: 'b2', name: 'B2', description: 'Минимум для университета (рекомендуется)' },
  { level: 'c1', name: 'C1', description: 'Полноценная учёба и работа' },
];

const timeOptions = [
  { minutes: 15, label: '15 минут', description: 'Лёгкий темп' },
  { minutes: 30, label: '30 минут', description: 'Рекомендуется' },
  { minutes: 60, label: '1 час', description: 'Интенсив' },
  { minutes: 120, label: '2+ часа', description: 'Максимальный прогресс' },
];

export function Onboarding() {
  const navigate = useNavigate();
  const { setName, setTargetLevel, setDailyGoal, completeOnboarding, name, targetLevel, dailyGoalMinutes } = useUserStore();

  const [step, setStep] = useState<Step>('welcome');
  const [localName, setLocalName] = useState(name || '');

  const handleNext = () => {
    const steps: Step[] = ['welcome', 'name', 'goal', 'time', 'level', 'complete'];
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps: Step[] = ['welcome', 'name', 'goal', 'time', 'level', 'complete'];
    const currentIndex = steps.indexOf(step);
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
    }
  };

  const handleComplete = () => {
    completeOnboarding();
    navigate('/dashboard');
  };

  const handleNameSubmit = () => {
    if (localName.trim()) {
      setName(localName.trim());
      handleNext();
    }
  };

  const cardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '32rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: 'var(--shadow-lg)',
    padding: '2rem'
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--gray-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div style={cardStyle}>
        {/* Progress */}
        <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '2rem' }}>
          {['welcome', 'name', 'goal', 'time', 'level'].map((s, i) => (
            <div
              key={s}
              style={{
                height: '0.375rem',
                flex: 1,
                borderRadius: '9999px',
                backgroundColor: ['welcome', 'name', 'goal', 'time', 'level'].indexOf(step) >= i
                  ? 'var(--primary-600)'
                  : 'var(--gray-200)',
                transition: 'background-color 0.3s'
              }}
            />
          ))}
        </div>

        {/* Welcome */}
        {step === 'welcome' && (
          <div style={{ textAlign: 'center' }}>
            <div
              className="german-gradient"
              style={{
                width: '5rem',
                height: '5rem',
                borderRadius: '1rem',
                margin: '0 auto 1.5rem'
              }}
            />
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Willkommen!</h1>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
              Добро пожаловать в DeutschMeister
            </h2>
            <p style={{ color: 'var(--gray-600)', marginBottom: '2rem' }}>
              Давай настроим твой персональный план обучения немецкому языку.
              Это займёт пару минут.
            </p>
            <Button onClick={handleNext} style={{ width: '100%' }}>
              Начать
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem', marginLeft: '0.5rem' }} />
            </Button>
          </div>
        )}

        {/* Name */}
        {step === 'name' && (
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Как тебя зовут?
            </h2>
            <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
              Мы будем обращаться к тебе по имени
            </p>
            <Input
              placeholder="Твоё имя"
              value={localName}
              onChange={(e) => setLocalName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleNameSubmit()}
              autoFocus
            />
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <Button variant="ghost" onClick={handleBack}>
                <ArrowLeft style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
                Назад
              </Button>
              <Button onClick={handleNameSubmit} disabled={!localName.trim()} style={{ flex: 1 }}>
                Продолжить
                <ArrowRight style={{ width: '1.25rem', height: '1.25rem', marginLeft: '0.5rem' }} />
              </Button>
            </div>
          </div>
        )}

        {/* Goal */}
        {step === 'goal' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                backgroundColor: 'var(--primary-100)',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Target style={{ width: '1.25rem', height: '1.25rem', color: 'var(--primary-600)' }} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Какая твоя цель?</h2>
                <p style={{ color: 'var(--gray-600)' }}>Выбери целевой уровень</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {targetLevels.map((item) => (
                <button
                  key={item.level}
                  onClick={() => setTargetLevel(item.level)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: `2px solid ${targetLevel === item.level ? 'var(--primary-600)' : 'var(--gray-200)'}`,
                    backgroundColor: targetLevel === item.level ? 'var(--primary-50)' : 'white',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: '1.125rem' }}>{item.name}</span>
                      <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem' }}>{item.description}</p>
                    </div>
                    <div style={{
                      width: '1.25rem',
                      height: '1.25rem',
                      borderRadius: '50%',
                      border: `2px solid ${targetLevel === item.level ? 'var(--primary-600)' : 'var(--gray-300)'}`,
                      backgroundColor: targetLevel === item.level ? 'var(--primary-600)' : 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {targetLevel === item.level && (
                        <svg style={{ width: '0.75rem', height: '0.75rem', color: 'white' }} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <Button variant="ghost" onClick={handleBack}>
                <ArrowLeft style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
                Назад
              </Button>
              <Button onClick={handleNext} style={{ flex: 1 }}>
                Продолжить
                <ArrowRight style={{ width: '1.25rem', height: '1.25rem', marginLeft: '0.5rem' }} />
              </Button>
            </div>
          </div>
        )}

        {/* Time */}
        {step === 'time' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                backgroundColor: 'var(--primary-100)',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Clock style={{ width: '1.25rem', height: '1.25rem', color: 'var(--primary-600)' }} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Сколько времени в день?</h2>
                <p style={{ color: 'var(--gray-600)' }}>Это можно изменить потом</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
              {timeOptions.map((option) => (
                <button
                  key={option.minutes}
                  onClick={() => setDailyGoal(option.minutes)}
                  style={{
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: `2px solid ${dailyGoalMinutes === option.minutes ? 'var(--primary-600)' : 'var(--gray-200)'}`,
                    backgroundColor: dailyGoalMinutes === option.minutes ? 'var(--primary-50)' : 'white',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '1.125rem' }}>{option.label}</div>
                  <div style={{ color: 'var(--gray-600)', fontSize: '0.875rem' }}>{option.description}</div>
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <Button variant="ghost" onClick={handleBack}>
                <ArrowLeft style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
                Назад
              </Button>
              <Button onClick={handleNext} style={{ flex: 1 }}>
                Продолжить
                <ArrowRight style={{ width: '1.25rem', height: '1.25rem', marginLeft: '0.5rem' }} />
              </Button>
            </div>
          </div>
        )}

        {/* Level */}
        {step === 'level' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                backgroundColor: 'var(--primary-100)',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <GraduationCap style={{ width: '1.25rem', height: '1.25rem', color: 'var(--primary-600)' }} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Твой текущий уровень</h2>
                <p style={{ color: 'var(--gray-600)' }}>С чего начнём?</p>
              </div>
            </div>
            <div style={{
              padding: '1rem',
              backgroundColor: 'var(--gray-50)',
              borderRadius: '0.75rem',
              marginBottom: '1.5rem'
            }}>
              <p style={{ textAlign: 'center', color: 'var(--gray-600)' }}>
                Мы начнём с уровня <strong>A1</strong>. Если ты уже знаешь немецкий,
                ты можешь пройти тест для определения уровня позже в настройках.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Button variant="ghost" onClick={handleBack}>
                <ArrowLeft style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
                Назад
              </Button>
              <Button onClick={handleNext} style={{ flex: 1 }}>
                Начать с A1
                <ArrowRight style={{ width: '1.25rem', height: '1.25rem', marginLeft: '0.5rem' }} />
              </Button>
            </div>
          </div>
        )}

        {/* Complete */}
        {step === 'complete' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '5rem',
              height: '5rem',
              backgroundColor: 'var(--green-100)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem'
            }}>
              <svg style={{ width: '2.5rem', height: '2.5rem', color: 'var(--green-600)' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Отлично, {name}!</h2>
            <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
              Твой план готов. Цель: <strong>{targetLevel.toUpperCase()}</strong>, {dailyGoalMinutes} минут в день.
            </p>
            <div style={{
              padding: '1rem',
              backgroundColor: 'var(--primary-50)',
              borderRadius: '0.75rem',
              marginBottom: '1.5rem'
            }}>
              <p style={{ color: 'var(--primary-700)' }}>
                При таком темпе ты достигнешь цели примерно за{' '}
                <strong>
                  {targetLevel === 'b1' ? '6-8' : targetLevel === 'b2' ? '10-12' : '14-18'} месяцев
                </strong>
              </p>
            </div>
            <Button onClick={handleComplete} size="lg" style={{ width: '100%' }}>
              Перейти к обучению
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem', marginLeft: '0.5rem' }} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
