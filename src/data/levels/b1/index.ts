import type { LevelInfo } from '../../../types';
import { b1Modules } from './modules';
import { b1Vocabulary } from './vocabulary';

export const b1Data: LevelInfo = {
  id: 'b1',
  name: 'Mittelstufe 1',
  title: 'Средний уровень 1',
  description: 'Самостоятельное общение, сослагательное наклонение, пассивный залог, относительные придаточные. Уверенное общение на знакомые темы.',
  color: 'blue',
  modules: b1Modules,
  totalWords: 1500,
  estimatedHours: 180,
  goals: [
    'Понимать основные моменты о работе, учёбе, досуге',
    'Справляться в большинстве ситуаций во время путешествий',
    'Описывать события, мечты, надежды и цели',
    'Обосновывать своё мнение и строить аргументацию',
    'Писать связные тексты на знакомые темы',
    'Сдать Goethe-Zertifikat B1',
  ],
};

export { b1Modules, b1Vocabulary };
