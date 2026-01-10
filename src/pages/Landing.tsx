import { Link } from 'react-router-dom';
import {
  GraduationCap,
  BookOpen,
  Mic,
  FileCheck,
  Target,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../components/ui';

const features = [
  {
    icon: GraduationCap,
    title: 'От A1 до C1',
    description: 'Полный путь от начинающего до продвинутого уровня',
  },
  {
    icon: BookOpen,
    title: 'Словарь с повторением',
    description: 'Система Spaced Repetition для эффективного запоминания',
  },
  {
    icon: Mic,
    title: '4 навыка',
    description: 'Lesen, Hören, Schreiben, Sprechen — всё в одном месте',
  },
  {
    icon: FileCheck,
    title: 'Формат Goethe',
    description: 'Задания в формате реальных экзаменов Goethe-Institut',
  },
];

const levels = [
  { level: 'A1', name: 'Anfänger', color: '#22c55e' },
  { level: 'A2', name: 'Grundstufe', color: '#10b981' },
  { level: 'B1', name: 'Mittelstufe 1', color: '#3b82f6' },
  { level: 'B2', name: 'Mittelstufe 2', color: '#6366f1' },
  { level: 'C1', name: 'Oberstufe', color: '#a855f7' },
];

export function Landing() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--gray-100)',
        zIndex: 50
      }}>
        <div style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="german-gradient" style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem' }} />
            <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>DeutschMeister</span>
          </div>
          <Link to="/onboarding">
            <Button>Начать обучение</Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ paddingTop: '8rem', paddingBottom: '5rem', padding: '8rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div style={{ maxWidth: '48rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: 'var(--primary-50)',
              borderRadius: '9999px',
              color: 'var(--primary-700)',
              fontSize: '0.875rem',
              fontWeight: 500,
              marginBottom: '1.5rem'
            }}>
              <Target style={{ width: '1rem', height: '1rem' }} />
              Подготовка к Goethe-Zertifikat
            </div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 700,
              color: 'var(--gray-900)',
              marginBottom: '1.5rem',
              lineHeight: 1.1
            }}>
              Выучи немецкий для{' '}
              <span style={{ color: 'var(--primary-600)' }}>магистратуры в Германии</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--gray-600)',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              Самодостаточная платформа для изучения немецкого языка от A1 до C1.
              Подготовься к экзаменам Goethe-Institut и учёбе в университете.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/onboarding">
                <Button size="lg">
                  Начать бесплатно
                  <ArrowRight style={{ width: '1.25rem', height: '1.25rem', marginLeft: '0.5rem' }} />
                </Button>
              </Link>
              <Link to="/levels">
                <Button variant="outline" size="lg">
                  Посмотреть программу
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: 'var(--gray-50)' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Уровни обучения
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            {levels.map((item) => (
              <div
                key={item.level}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.5rem',
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--gray-100)'
                }}
              >
                <div style={{
                  width: '0.75rem',
                  height: '0.75rem',
                  borderRadius: '50%',
                  backgroundColor: item.color
                }} />
                <div>
                  <span style={{ fontWeight: 700, fontSize: '1.125rem' }}>{item.level}</span>
                  <span style={{ color: 'var(--gray-500)', marginLeft: '0.5rem' }}>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            Всё, что нужно для успеха
          </h2>
          <p style={{
            color: 'var(--gray-600)',
            textAlign: 'center',
            marginBottom: '3rem',
            maxWidth: '32rem',
            margin: '0 auto 3rem'
          }}>
            Один сайт — полное обучение. Без сторонних курсов и учебников.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {features.map((feature) => (
              <div
                key={feature.title}
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  border: '1px solid var(--gray-100)'
                }}
              >
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: 'var(--primary-100)',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <feature.icon style={{ width: '1.5rem', height: '1.5rem', color: 'var(--primary-600)' }} />
                </div>
                <h3 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--gray-600)' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll achieve */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--gray-900)', color: 'white' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            К чему ты придёшь
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              'Понимать лекции в университете',
              'Читать научные тексты',
              'Писать формальные письма и эссе',
              'Уверенно сдать Goethe-Zertifikat B2/C1',
              'Общаться с профессорами и коллегами',
              'Быть готовым к жизни в Германии',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle style={{ width: '1.5rem', height: '1.5rem', color: '#4ade80', flexShrink: 0 }} />
                <span style={{ fontSize: '1.125rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '1rem' }}>
            Готов начать?
          </h2>
          <p style={{ color: 'var(--gray-600)', marginBottom: '2rem' }}>
            Пройди короткий онбординг и начни свой путь к немецкому C1
          </p>
          <Link to="/onboarding">
            <Button size="lg">
              Начать обучение
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem', marginLeft: '0.5rem' }} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 1.5rem', borderTop: '1px solid var(--gray-100)' }}>
        <div style={{
          maxWidth: '72rem',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="german-gradient" style={{ width: '1.5rem', height: '1.5rem', borderRadius: '0.25rem' }} />
            <span style={{ fontWeight: 600 }}>DeutschMeister</span>
          </div>
          <p style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>
            Немецкий язык для поступления в магистратуру Германии
          </p>
        </div>
      </footer>
    </div>
  );
}
