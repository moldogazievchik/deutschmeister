import type { LevelInfo } from '../../../types';
import { b2Modules } from './modules';
import { b2Vocabulary } from './vocabulary';

export const b2Data: LevelInfo = {
  id: 'b2',
  name: 'Mittelstufe 2',
  title: 'Средний уровень 2',
  description: 'Свободное общение, причастные конструкции, косвенная речь, академический стиль. Уверенное владение языком на профессиональном уровне.',
  color: 'indigo',
  modules: b2Modules,
  totalWords: 2000,
  estimatedHours: 250,
  goals: [
    'Понимать сложные тексты на конкретные и абстрактные темы',
    'Говорить достаточно бегло и спонтанно для общения с носителями',
    'Участвовать в дискуссиях, обосновывать позицию',
    'Понимать основное содержание лекций и докладов',
    'Писать подробные тексты по широкому кругу вопросов',
    'Сдать Goethe-Zertifikat B2',
  ],
};

export { b2Modules, b2Vocabulary };
