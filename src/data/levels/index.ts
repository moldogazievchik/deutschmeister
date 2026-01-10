import { a1Data } from './a1';
import { a2Data } from './a2';
import { b1Data } from './b1';
import { b2Data } from './b2';
import type { Level, LevelInfo } from '../../types';

export const levelsContent: Record<Level, LevelInfo> = {
  a1: a1Data,
  a2: a2Data,
  b1: b1Data,
  b2: b2Data,
  c1: {
    id: 'c1',
    name: 'Oberstufe',
    title: 'Продвинутый уровень',
    description: 'Беглая речь, научные тексты, нюансы языка. Свободное владение немецким на уровне носителя.',
    color: 'purple',
    modules: [],
    totalWords: 2500,
    estimatedHours: 300,
    goals: [
      'Понимать объёмные сложные тексты с имплицитным значением',
      'Выражаться бегло и спонтанно без явного поиска слов',
      'Гибко использовать язык в социальных и профессиональных целях',
      'Писать ясные, хорошо структурированные тексты на сложные темы',
      'Понимать практически любую устную и письменную речь',
      'Сдать Goethe-Zertifikat C1',
    ],
  },
};

export { a1Data, a2Data, b1Data, b2Data };
