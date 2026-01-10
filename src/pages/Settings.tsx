import { useState } from 'react';
import { User, Target, Clock, Trash2, RotateCcw } from 'lucide-react';
import { Card, Button, Input } from '../components/ui';
import { useUserStore } from '../store/userStore';
import { useProgressStore } from '../store/progressStore';
import { useVocabularyStore } from '../store/vocabularyStore';
import { useActivityStore } from '../store/activityStore';
import type { Level } from '../types';

export function Settings() {
  const {
    name,
    currentLevel,
    targetLevel,
    dailyGoalMinutes,
    setName,
    setCurrentLevel,
    setTargetLevel,
    setDailyGoal,
    resetProgress: resetUserProgress,
  } = useUserStore();

  const { resetProgress: resetProgressStore } = useProgressStore();
  const { resetVocabulary } = useVocabularyStore();
  const { resetActivity } = useActivityStore();

  const [localName, setLocalName] = useState(name);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleSaveName = () => {
    if (localName.trim()) {
      setName(localName.trim());
    }
  };

  const handleResetAll = () => {
    resetUserProgress();
    resetProgressStore();
    resetVocabulary();
    resetActivity();
    setShowResetConfirm(false);
    window.location.href = '/';
  };

  const levels: Level[] = ['a1', 'a2', 'b1', 'b2', 'c1'];
  const timeOptions = [15, 30, 45, 60, 90, 120];

  const levelButtonStyle = (isActive: boolean, isDisabled: boolean = false): React.CSSProperties => ({
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    border: `2px solid ${isActive ? 'var(--primary-600)' : 'var(--gray-200)'}`,
    backgroundColor: isActive ? 'var(--primary-50)' : 'white',
    color: isDisabled ? 'var(--gray-300)' : isActive ? 'var(--primary-700)' : 'inherit',
    fontWeight: 500,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s'
  });

  return (
    <div style={{ maxWidth: '42rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '0.25rem' }}>
          Настройки
        </h1>
        <p style={{ color: 'var(--gray-600)' }}>Управление профилем и параметрами обучения</p>
      </div>

      {/* Profile */}
      <Card>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <User style={{ width: '1.25rem', height: '1.25rem' }} />
          Профиль
        </h3>
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--gray-700)', marginBottom: '0.5rem' }}>
            Имя
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Input
              value={localName}
              onChange={(e) => setLocalName(e.target.value)}
              placeholder="Ваше имя"
              style={{ flex: 1 }}
            />
            <Button onClick={handleSaveName} disabled={localName === name}>
              Сохранить
            </Button>
          </div>
        </div>
      </Card>

      {/* Learning Goals */}
      <Card>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Target style={{ width: '1.25rem', height: '1.25rem' }} />
          Цели обучения
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Current Level */}
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--gray-700)', marginBottom: '0.5rem' }}>
              Текущий уровень
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setCurrentLevel(level)}
                  style={levelButtonStyle(currentLevel === level)}
                >
                  {level.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Target Level */}
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--gray-700)', marginBottom: '0.5rem' }}>
              Целевой уровень
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {levels.map((level) => {
                const isDisabled = levels.indexOf(level) < levels.indexOf(currentLevel);
                return (
                  <button
                    key={level}
                    onClick={() => !isDisabled && setTargetLevel(level)}
                    disabled={isDisabled}
                    style={levelButtonStyle(targetLevel === level, isDisabled)}
                  >
                    {level.toUpperCase()}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Card>

      {/* Daily Goal */}
      <Card>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Clock style={{ width: '1.25rem', height: '1.25rem' }} />
          Ежедневная цель
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {timeOptions.map((minutes) => (
            <button
              key={minutes}
              onClick={() => setDailyGoal(minutes)}
              style={levelButtonStyle(dailyGoalMinutes === minutes)}
            >
              {minutes < 60 ? `${minutes} мин` : `${minutes / 60} ч`}
            </button>
          ))}
        </div>
        <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', marginTop: '0.75rem' }}>
          При текущем темпе вы достигнете цели примерно за{' '}
          <strong>
            {Math.round((levels.indexOf(targetLevel) - levels.indexOf(currentLevel) + 1) * 120 / (dailyGoalMinutes / 30))} месяцев
          </strong>
        </p>
      </Card>

      {/* Danger Zone */}
      <Card style={{ border: '1px solid #fecaca' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#dc2626' }}>
          <Trash2 style={{ width: '1.25rem', height: '1.25rem' }} />
          Опасная зона
        </h3>
        {!showResetConfirm ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontWeight: 500 }}>Сбросить весь прогресс</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Удалить все данные и начать с начала</p>
            </div>
            <Button variant="danger" onClick={() => setShowResetConfirm(true)}>
              <RotateCcw style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
              Сбросить
            </Button>
          </div>
        ) : (
          <div style={{ backgroundColor: '#fef2f2', padding: '1rem', borderRadius: '0.5rem' }}>
            <p style={{ fontWeight: 500, color: '#b91c1c', marginBottom: '1rem' }}>
              Вы уверены? Это действие нельзя отменить. Весь прогресс, слова и статистика будут удалены.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Button variant="danger" onClick={handleResetAll}>
                Да, сбросить всё
              </Button>
              <Button variant="ghost" onClick={() => setShowResetConfirm(false)}>
                Отмена
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
