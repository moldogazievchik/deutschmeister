import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Brain } from 'lucide-react';
import { Card, Badge, Button, Progress } from '../components/ui';
import { useVocabularyStore } from '../store/vocabularyStore';
import { a1Vocabulary } from '../data/levels/a1';
import type { Level } from '../types';

export function Vocabulary() {
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState<Level | 'all'>('all');
  const { getWordProgress, getWordsForReview, getLearnedWordsCount } = useVocabularyStore();

  const wordsForReview = getWordsForReview();
  const learnedCount = getLearnedWordsCount();

  // For now, only A1 vocabulary
  const allWords = a1Vocabulary;

  const filteredWords = allWords.filter((word) => {
    const matchesSearch =
      word.german.toLowerCase().includes(search.toLowerCase()) ||
      word.russian.toLowerCase().includes(search.toLowerCase());
    const matchesLevel = levelFilter === 'all' || word.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

  const getFamiliarityLabel = (familiarity: number) => {
    if (familiarity === 0) return { label: 'Новое', bgColor: '#f3f4f6', color: '#4b5563' };
    if (familiarity <= 2) return { label: 'Изучается', bgColor: '#fef9c3', color: '#a16207' };
    if (familiarity <= 4) return { label: 'Знакомое', bgColor: '#dbeafe', color: '#1d4ed8' };
    return { label: 'Выучено', bgColor: '#dcfce7', color: '#15803d' };
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    paddingLeft: '2.5rem',
    paddingRight: '1rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    border: '1px solid var(--gray-300)',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none'
  };

  const selectStyle: React.CSSProperties = {
    padding: '0.5rem 1rem',
    border: '1px solid var(--gray-300)',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
    backgroundColor: 'white'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '0.25rem' }}>
            Словарь
          </h1>
          <p style={{ color: 'var(--gray-600)' }}>
            Изучено {learnedCount} из {allWords.length} слов
          </p>
        </div>
        {wordsForReview.length > 0 && (
          <Link to="/vocabulary/practice">
            <Button>
              <Brain style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
              Повторить {wordsForReview.length} слов
            </Button>
          </Link>
        )}
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-600)' }}>{allWords.length}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Всего слов</p>
          </div>
        </Card>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a' }}>{learnedCount}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Изучено</p>
          </div>
        </Card>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ca8a04' }}>{wordsForReview.length}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>На повторение</p>
          </div>
        </Card>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <Progress value={(learnedCount / allWords.length) * 100} size="lg" />
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', marginTop: '0.5rem' }}>Прогресс</p>
          </div>
        </Card>
      </div>

      {/* Search and Filters */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '200px' }}>
          <Search style={{
            position: 'absolute',
            left: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '1.25rem',
            height: '1.25rem',
            color: 'var(--gray-400)'
          }} />
          <input
            type="text"
            placeholder="Поиск слов..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={inputStyle}
          />
        </div>
        <select
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value as Level | 'all')}
          style={selectStyle}
        >
          <option value="all">Все уровни</option>
          <option value="a1">A1</option>
          <option value="a2">A2</option>
          <option value="b1">B1</option>
          <option value="b2">B2</option>
          <option value="c1">C1</option>
        </select>
      </div>

      {/* Word List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {filteredWords.map((word) => {
          const progress = getWordProgress(word.id);
          const familiarity = progress?.familiarity || 0;
          const familiarityInfo = getFamiliarityLabel(familiarity);

          return (
            <Card key={word.id}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                      {word.article && (
                        <span style={{ color: 'var(--gray-400)', marginRight: '0.25rem' }}>{word.article}</span>
                      )}
                      {word.german}
                    </span>
                    {word.plural && (
                      <span style={{ fontSize: '0.875rem', color: 'var(--gray-400)' }}>({word.plural})</span>
                    )}
                    <Badge variant="level" level={word.level} size="sm" />
                  </div>
                  <p style={{ color: 'var(--gray-600)' }}>{word.russian}</p>
                  {word.examples[0] && (
                    <p style={{
                      fontSize: '0.875rem',
                      color: 'var(--gray-400)',
                      marginTop: '0.25rem',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {word.examples[0].german}
                    </p>
                  )}
                </div>
                <span style={{
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  backgroundColor: familiarityInfo.bgColor,
                  color: familiarityInfo.color
                }}>
                  {familiarityInfo.label}
                </span>
              </div>
            </Card>
          );
        })}

        {filteredWords.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <BookOpen style={{ width: '3rem', height: '3rem', color: 'var(--gray-300)', margin: '0 auto 1rem' }} />
            <p style={{ color: 'var(--gray-500)' }}>Слова не найдены</p>
          </div>
        )}
      </div>
    </div>
  );
}
