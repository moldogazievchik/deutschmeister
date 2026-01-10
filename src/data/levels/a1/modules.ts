import type { Module } from '../../../types';
import { a1Vocabulary } from './vocabulary';

export const a1Modules: Module[] = [
  {
    id: 1,
    level: 'a1',
    title: 'Знакомство',
    titleDe: 'Hallo! Ich bin...',
    description: 'Приветствие, представление себя, страны и языки',
    vocabulary: a1Vocabulary.filter(w => w.tags?.includes('module-1')),
    grammar: [
      {
        id: 'a1-g1-1',
        level: 'a1',
        title: 'Личные местоимения',
        titleDe: 'Personalpronomen',
        description: 'ich, du, er, sie, es, wir, ihr, sie, Sie',
        explanation: `
# Личные местоимения (Personalpronomen)

Местоимения заменяют существительные и указывают на лицо.

| Единственное число | Множественное число |
|-------------------|---------------------|
| ich (я)           | wir (мы)            |
| du (ты)           | ihr (вы, мн.)       |
| er (он)           | sie (они)           |
| sie (она)         | Sie (Вы, вежл.)     |
| es (оно)          |                     |

## Важно!
- **Sie** (с большой буквы) — вежливая форма «Вы» (и ед., и мн. число)
- **sie** (с маленькой) — «она» или «они» (понятно из контекста)
        `,
        comparisonWithRussian: 'В русском тоже есть местоимения, но нет различия между вежливым "Sie" и множественным "sie".',
        commonMistakes: [
          { wrong: 'sie ist Student', correct: 'sie ist Studentin', explanation: 'Для женщин используйте женскую форму профессии' },
        ],
        examples: [
          { german: 'Ich bin Maria.', russian: 'Я Мария.' },
          { german: 'Er kommt aus Deutschland.', russian: 'Он из Германии.' },
          { german: 'Wie heißen Sie?', russian: 'Как Вас зовут?' },
        ],
        exercises: [],
      },
      {
        id: 'a1-g1-2',
        level: 'a1',
        title: 'Глагол sein',
        titleDe: 'Das Verb "sein"',
        description: 'Спряжение глагола "быть"',
        explanation: `
# Глагол sein (быть)

Один из важнейших глаголов немецкого языка.

| Лицо    | Форма  |
|---------|--------|
| ich     | bin    |
| du      | bist   |
| er/sie/es | ist  |
| wir     | sind   |
| ihr     | seid   |
| sie/Sie | sind   |

## Использование
- Называние имени: Ich **bin** Peter.
- Национальность: Sie **ist** Russin.
- Профессия: Er **ist** Arzt.
- Возраст: Ich **bin** 25 Jahre alt.
        `,
        comparisonWithRussian: 'В русском глагол "быть" в настоящем времени обычно опускается: "Я студент" (не "Я есть студент"). В немецком sein обязателен!',
        commonMistakes: [
          { wrong: 'Ich 25 Jahre alt.', correct: 'Ich bin 25 Jahre alt.', explanation: 'В немецком глагол sein нельзя опускать' },
        ],
        examples: [
          { german: 'Ich bin Student.', russian: 'Я студент.' },
          { german: 'Bist du müde?', russian: 'Ты устал?' },
          { german: 'Das ist mein Buch.', russian: 'Это моя книга.' },
        ],
        exercises: [],
      },
      {
        id: 'a1-g1-3',
        level: 'a1',
        title: 'Порядок слов',
        titleDe: 'Wortstellung',
        description: 'Базовый порядок слов в предложении',
        explanation: `
# Порядок слов в немецком предложении

## Главное правило: глагол на втором месте!

**Утвердительное предложение:**
\`\`\`
[1] Субъект + [2] Глагол + [3] Остальное
Ich          lerne       Deutsch.
\`\`\`

**Вопрос с вопросительным словом:**
\`\`\`
[1] W-Wort + [2] Глагол + [3] Субъект + [4] Остальное
Wo           wohnst       du?
\`\`\`

**Вопрос да/нет:**
\`\`\`
[1] Глагол + [2] Субъект + [3] Остальное
Kommst       du          aus Russland?
\`\`\`
        `,
        comparisonWithRussian: 'В русском порядок слов свободный. В немецком глагол строго на втором месте!',
        commonMistakes: [
          { wrong: 'Morgen ich gehe ins Kino.', correct: 'Morgen gehe ich ins Kino.', explanation: 'Глагол всегда на втором месте, даже если предложение начинается с обстоятельства' },
        ],
        examples: [
          { german: 'Ich komme aus Russland.', russian: 'Я из России.' },
          { german: 'Woher kommst du?', russian: 'Откуда ты?' },
          { german: 'Heute lerne ich Deutsch.', russian: 'Сегодня я учу немецкий.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 1,
        level: 'a1',
        title: 'Приветствие',
        titleDe: 'Begrüßung',
        type: 'vocabulary',
        duration: 15,
        content: {
          introduction: 'Научимся здороваться и прощаться по-немецки',
          tips: ['Guten Tag — универсальное приветствие', 'В Баварии говорят "Grüß Gott"', 'Среди молодёжи популярно "Hi" и "Tschüss"'],
        },
        exercises: [
          {
            id: 'a1-1-1-ex1',
            type: 'multiple-choice',
            question: 'Как сказать "Добрый день" по-немецки?',
            options: ['Guten Morgen', 'Guten Tag', 'Guten Abend', 'Gute Nacht'],
            correctAnswer: 'Guten Tag',
            points: 1,
          },
          {
            id: 'a1-1-1-ex2',
            type: 'multiple-choice',
            question: 'Как сказать "Пока" неформально?',
            options: ['Auf Wiedersehen', 'Tschüss', 'Guten Tag', 'Hallo'],
            correctAnswer: 'Tschüss',
            points: 1,
          },
        ],
      },
      {
        id: 2,
        moduleId: 1,
        level: 'a1',
        title: 'Представление себя',
        titleDe: 'Sich vorstellen',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Научимся представляться и спрашивать имя',
        },
        exercises: [
          {
            id: 'a1-1-2-ex1',
            type: 'fill-blank',
            question: 'Wie ___ du?',
            correctAnswer: 'heißt',
            points: 1,
          },
          {
            id: 'a1-1-2-ex2',
            type: 'translation',
            question: 'Переведите: Меня зовут Анна.',
            correctAnswer: 'Ich heiße Anna.',
            points: 2,
          },
        ],
      },
      {
        id: 3,
        moduleId: 1,
        level: 'a1',
        title: 'Личные местоимения',
        titleDe: 'Personalpronomen',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'Изучим личные местоимения немецкого языка',
        },
        exercises: [
          {
            id: 'a1-1-3-ex1',
            type: 'fill-blank',
            question: '___ bin Student. (я)',
            correctAnswer: 'Ich',
            points: 1,
          },
          {
            id: 'a1-1-3-ex2',
            type: 'multiple-choice',
            question: 'Какое местоимение используется для вежливого обращения?',
            options: ['du', 'ihr', 'Sie', 'sie'],
            correctAnswer: 'Sie',
            points: 1,
          },
        ],
      },
      {
        id: 4,
        moduleId: 1,
        level: 'a1',
        title: 'Глагол sein',
        titleDe: 'Das Verb sein',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'Спряжение важнейшего глагола "быть"',
        },
        exercises: [
          {
            id: 'a1-1-4-ex1',
            type: 'fill-blank',
            question: 'Ich ___ aus Moskau.',
            correctAnswer: 'bin',
            points: 1,
          },
          {
            id: 'a1-1-4-ex2',
            type: 'fill-blank',
            question: 'Er ___ Lehrer.',
            correctAnswer: 'ist',
            points: 1,
          },
          {
            id: 'a1-1-4-ex3',
            type: 'fill-blank',
            question: 'Wir ___ Studenten.',
            correctAnswer: 'sind',
            points: 1,
          },
        ],
      },
      {
        id: 5,
        moduleId: 1,
        level: 'a1',
        title: 'Мини-тест',
        titleDe: 'Mini-Test',
        type: 'test',
        duration: 15,
        content: {
          introduction: 'Проверим знания по модулю 1',
        },
        exercises: [
          {
            id: 'a1-1-5-ex1',
            type: 'translation',
            question: 'Переведите: Привет! Как тебя зовут?',
            correctAnswer: 'Hallo! Wie heißt du?',
            points: 2,
          },
          {
            id: 'a1-1-5-ex2',
            type: 'fill-blank',
            question: 'Guten ___! (день)',
            correctAnswer: 'Tag',
            points: 1,
          },
          {
            id: 'a1-1-5-ex3',
            type: 'multiple-choice',
            question: 'Выберите правильную форму: "Du ___ Maria."',
            options: ['bin', 'bist', 'ist', 'sind'],
            correctAnswer: 'bist',
            points: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    level: 'a1',
    title: 'Моя семья',
    titleDe: 'Meine Familie',
    description: 'Семья, возраст, профессии, притяжательные местоимения',
    vocabulary: a1Vocabulary.filter(w => w.tags?.includes('module-2')),
    grammar: [
      {
        id: 'a1-g2-1',
        level: 'a1',
        title: 'Глагол haben',
        titleDe: 'Das Verb "haben"',
        description: 'Спряжение глагола "иметь"',
        explanation: `
# Глагол haben (иметь)

Второй важнейший глагол немецкого языка.

| Лицо      | Форма  |
|-----------|--------|
| ich       | habe   |
| du        | hast   |
| er/sie/es | hat    |
| wir       | haben  |
| ihr       | habt   |
| sie/Sie   | haben  |

## Использование
- Семья: Ich **habe** einen Bruder.
- Возраст: Ich **habe** keine Zeit.
- Вещи: **Hast** du ein Auto?
        `,
        comparisonWithRussian: 'В русском "у меня есть", в немецком "ich habe" (я имею).',
        commonMistakes: [
          { wrong: 'Ich habe 25 Jahre.', correct: 'Ich bin 25 Jahre alt.', explanation: 'Для возраста используйте sein, не haben!' },
        ],
        examples: [
          { german: 'Ich habe eine Schwester.', russian: 'У меня есть сестра.' },
          { german: 'Hast du Geschwister?', russian: 'У тебя есть братья/сёстры?' },
          { german: 'Er hat keine Zeit.', russian: 'У него нет времени.' },
        ],
        exercises: [],
      },
      {
        id: 'a1-g2-2',
        level: 'a1',
        title: 'Притяжательные местоимения',
        titleDe: 'Possessivpronomen',
        description: 'mein, dein, sein, ihr, unser, euer, Ihr',
        explanation: `
# Притяжательные местоимения

| Лицо      | Местоимение |
|-----------|-------------|
| ich       | mein (мой)  |
| du        | dein (твой) |
| er        | sein (его)  |
| sie       | ihr (её)    |
| es        | sein (его)  |
| wir       | unser (наш) |
| ihr       | euer (ваш)  |
| sie/Sie   | ihr/Ihr (их/Ваш) |

## Окончания
Притяжательные местоимения изменяются как неопределённый артикль:
- **mein** Vater (м.р.)
- **meine** Mutter (ж.р.)
- **mein** Kind (ср.р.)
        `,
        comparisonWithRussian: 'Похоже на русский, но притяжательные местоимения склоняются!',
        examples: [
          { german: 'Das ist mein Vater.', russian: 'Это мой отец.' },
          { german: 'Wie heißt deine Mutter?', russian: 'Как зовут твою маму?' },
          { german: 'Ihre Kinder sind groß.', russian: 'Ваши/Её дети большие.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 2,
        level: 'a1',
        title: 'Члены семьи',
        titleDe: 'Familienmitglieder',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Выучим слова для обозначения членов семьи',
        },
        exercises: [
          {
            id: 'a1-2-1-ex1',
            type: 'matching',
            question: 'Соедините слова с переводом',
            options: ['der Vater', 'die Mutter', 'der Bruder', 'die Schwester'],
            correctAnswer: ['отец', 'мать', 'брат', 'сестра'],
            points: 4,
          },
        ],
      },
      {
        id: 2,
        moduleId: 2,
        level: 'a1',
        title: 'Глагол haben',
        titleDe: 'Das Verb haben',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'Спряжение глагола "иметь"',
        },
        exercises: [
          {
            id: 'a1-2-2-ex1',
            type: 'fill-blank',
            question: 'Ich ___ einen Bruder.',
            correctAnswer: 'habe',
            points: 1,
          },
          {
            id: 'a1-2-2-ex2',
            type: 'fill-blank',
            question: '___ du Geschwister?',
            correctAnswer: 'Hast',
            points: 1,
          },
        ],
      },
      {
        id: 3,
        moduleId: 2,
        level: 'a1',
        title: 'Притяжательные местоимения',
        titleDe: 'Possessivpronomen',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'Мой, твой, его, её...',
        },
        exercises: [
          {
            id: 'a1-2-3-ex1',
            type: 'fill-blank',
            question: 'Das ist ___ Vater. (мой)',
            correctAnswer: 'mein',
            points: 1,
          },
          {
            id: 'a1-2-3-ex2',
            type: 'fill-blank',
            question: 'Wie heißt ___ Mutter? (твоя)',
            correctAnswer: 'deine',
            points: 1,
          },
        ],
      },
    ],
  },
  // Остальные модули (3-10) в сокращённом виде
  {
    id: 3,
    level: 'a1',
    title: 'Еда и напитки',
    titleDe: 'Essen und Trinken',
    description: 'Еда, напитки, в ресторане, артикли',
    vocabulary: [],
    grammar: [],
    lessons: [],
  },
  {
    id: 4,
    level: 'a1',
    title: 'Мой день',
    titleDe: 'Mein Tag',
    description: 'Распорядок дня, время, отделяемые приставки',
    vocabulary: [],
    grammar: [],
    lessons: [],
  },
  {
    id: 5,
    level: 'a1',
    title: 'Жильё',
    titleDe: 'Wohnen',
    description: 'Квартира, мебель, предлоги места',
    vocabulary: [],
    grammar: [],
    lessons: [],
  },
  {
    id: 6,
    level: 'a1',
    title: 'Свободное время',
    titleDe: 'Freizeit',
    description: 'Хобби, спорт, gern/lieber',
    vocabulary: [],
    grammar: [],
    lessons: [],
  },
  {
    id: 7,
    level: 'a1',
    title: 'Покупки',
    titleDe: 'Einkaufen',
    description: 'Магазины, одежда, числительные',
    vocabulary: [],
    grammar: [],
    lessons: [],
  },
  {
    id: 8,
    level: 'a1',
    title: 'Назначение встреч',
    titleDe: 'Termine',
    description: 'Дни недели, месяцы, договорённости',
    vocabulary: [],
    grammar: [],
    lessons: [],
  },
  {
    id: 9,
    level: 'a1',
    title: 'Тело и здоровье',
    titleDe: 'Körper und Gesundheit',
    description: 'Части тела, самочувствие, Imperativ',
    vocabulary: [],
    grammar: [],
    lessons: [],
  },
  {
    id: 10,
    level: 'a1',
    title: 'Ориентирование',
    titleDe: 'Orientierung',
    description: 'Город, транспорт, предлоги направления',
    vocabulary: [],
    grammar: [],
    lessons: [],
  },
];
