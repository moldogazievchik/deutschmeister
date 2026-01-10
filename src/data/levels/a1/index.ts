import type { LevelInfo } from '../../../types';
import { a1Modules } from './modules';
import { a1Vocabulary } from './vocabulary';

export const a1Data: LevelInfo = {
  id: 'a1',
  name: 'Anfänger',
  title: 'Начинающий уровень',
  description: 'Базовые фразы, представление себя, простые диалоги. Первый шаг к немецкому языку.',
  color: 'green',
  modules: a1Modules,
  totalWords: 800,
  estimatedHours: 100,
  goals: [
    'Понимать знакомые слова и простые фразы о себе и семье',
    'Читать короткие тексты: вывески, объявления, анкеты',
    'Представиться и задать простые вопросы',
    'Заполнить анкету, написать короткую открытку',
    'Понимать медленную и чёткую речь',
    'Сдать Goethe-Zertifikat A1',
  ],
};

export { a1Modules, a1Vocabulary };
