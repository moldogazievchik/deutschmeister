import { Link } from 'react-router-dom';
import { BookOpen, Headphones, Pencil, Mic, Target, ChevronRight } from 'lucide-react';
import { Card, Badge, Progress } from '../components/ui';
import { useProgressStore } from '../store/progressStore';
import { useUserStore } from '../store/userStore';

const practiceTypes = [
  {
    id: 'lesen',
    name: 'Lesen',
    nameRu: 'Чтение',
    description: 'Тексты и задания на понимание прочитанного',
    icon: BookOpen,
    bgColor: '#dbeafe',
    color: '#2563eb',
  },
  {
    id: 'hoeren',
    name: 'Hören',
    nameRu: 'Аудирование',
    description: 'Прослушивание и задания на понимание',
    icon: Headphones,
    bgColor: '#f3e8ff',
    color: '#9333ea',
  },
  {
    id: 'schreiben',
    name: 'Schreiben',
    nameRu: 'Письмо',
    description: 'Написание текстов и писем',
    icon: Pencil,
    bgColor: '#dcfce7',
    color: '#16a34a',
  },
  {
    id: 'sprechen',
    name: 'Sprechen',
    nameRu: 'Говорение',
    description: 'Устная речь и диалоги',
    icon: Mic,
    bgColor: '#ffedd5',
    color: '#ea580c',
  },
];

export function Practice() {
  const { skills } = useProgressStore();
  const { currentLevel } = useUserStore();

  const getSkillValue = (skillId: string) => {
    return skills[skillId as keyof typeof skills] || 0;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '0.25rem' }}>
          Тренировка
        </h1>
        <p style={{ color: 'var(--gray-600)' }}>
          Практикуй все 4 навыка для подготовки к Goethe-Zertifikat
        </p>
      </div>

      {/* Skills Overview */}
      <Card>
        <h3 style={{ fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Target style={{ width: '1.25rem', height: '1.25rem' }} />
          Текущий уровень навыков
          <Badge variant="level" level={currentLevel} size="sm" style={{ marginLeft: '0.5rem' }} />
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
          {practiceTypes.map((type) => (
            <div key={type.id} style={{ textAlign: 'center' }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                backgroundColor: type.bgColor,
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.5rem'
              }}>
                <type.icon style={{ width: '1.5rem', height: '1.5rem', color: type.color }} />
              </div>
              <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>{type.name}</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{getSkillValue(type.id)}%</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Practice Types */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
        {practiceTypes.map((type) => (
          <Link key={type.id} to={`/practice/${type.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card style={{ height: '100%', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  backgroundColor: type.bgColor,
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <type.icon style={{ width: '1.75rem', height: '1.75rem', color: type.color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontWeight: 700, fontSize: '1.125rem' }}>{type.name}</h3>
                    <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: 'var(--gray-400)' }} />
                  </div>
                  <p style={{ color: 'var(--gray-500)', marginBottom: '0.25rem' }}>{type.nameRu}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: '0.75rem' }}>{type.description}</p>
                  <Progress value={getSkillValue(type.id)} size="sm" />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Practice */}
      <Card>
        <h3 style={{ fontWeight: 600, marginBottom: '1rem' }}>Быстрая тренировка</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.75rem' }}>
          <Link
            to="/vocabulary/practice"
            style={{
              padding: '1rem',
              backgroundColor: 'var(--gray-50)',
              borderRadius: '0.75rem',
              textAlign: 'center',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'background-color 0.2s'
            }}
          >
            <BookOpen style={{ width: '1.5rem', height: '1.5rem', color: 'var(--gray-600)', margin: '0 auto 0.5rem' }} />
            <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>Слова</p>
          </Link>
          <Link
            to={`/levels/${currentLevel}`}
            style={{
              padding: '1rem',
              backgroundColor: 'var(--gray-50)',
              borderRadius: '0.75rem',
              textAlign: 'center',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'background-color 0.2s'
            }}
          >
            <Target style={{ width: '1.5rem', height: '1.5rem', color: 'var(--gray-600)', margin: '0 auto 0.5rem' }} />
            <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>Грамматика</p>
          </Link>
          <Link
            to="/practice/hoeren"
            style={{
              padding: '1rem',
              backgroundColor: 'var(--gray-50)',
              borderRadius: '0.75rem',
              textAlign: 'center',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'background-color 0.2s'
            }}
          >
            <Headphones style={{ width: '1.5rem', height: '1.5rem', color: 'var(--gray-600)', margin: '0 auto 0.5rem' }} />
            <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>Аудио</p>
          </Link>
          <Link
            to="/exams"
            style={{
              padding: '1rem',
              backgroundColor: 'var(--gray-50)',
              borderRadius: '0.75rem',
              textAlign: 'center',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'background-color 0.2s'
            }}
          >
            <Pencil style={{ width: '1.5rem', height: '1.5rem', color: 'var(--gray-600)', margin: '0 auto 0.5rem' }} />
            <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>Тест Goethe</p>
          </Link>
        </div>
      </Card>
    </div>
  );
}
