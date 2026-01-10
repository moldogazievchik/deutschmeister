import type { LevelInfo } from '../../../types';
import { a2Modules } from './modules';
import { a2Vocabulary } from './vocabulary';

export const a2Data: LevelInfo = {
  id: 'a2',
  name: 'Grundstufe',
  title: 'Базовый уровень',
  description: 'Повседневные ситуации, прошедшее время Perfekt, придаточные предложения. Уверенное общение в типичных ситуациях.',
  color: 'emerald',
  modules: a2Modules,
  totalWords: 1200,
  estimatedHours: 120,
  goals: [
    'Понимать фразы о семье, покупках, работе, здоровье',
    'Читать короткие тексты: объявления, меню, расписания',
    'Описывать прошлый опыт и планы на будущее',
    'Справляться в типичных ситуациях: магазин, врач, вокзал',
    'Писать простые письма и заполнять формуляры',
    'Сдать Goethe-Zertifikat A2',
  ],
};

export { a2Modules, a2Vocabulary };
