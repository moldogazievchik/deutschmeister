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
          {
            id: 'a1-1-1-ex3',
            type: 'multiple-choice',
            question: 'Какое приветствие используют утром?',
            options: ['Guten Abend', 'Gute Nacht', 'Guten Morgen', 'Auf Wiedersehen'],
            correctAnswer: 'Guten Morgen',
            points: 1,
          },
          {
            id: 'a1-1-1-ex4',
            type: 'translation',
            question: 'Переведите: Доброй ночи!',
            correctAnswer: 'Gute Nacht!',
            points: 2,
          },
          {
            id: 'a1-1-1-ex5',
            type: 'fill-blank',
            question: 'Guten ___! (вечер)',
            correctAnswer: 'Abend',
            points: 1,
          },
          {
            id: 'a1-1-1-ex6',
            type: 'true-false',
            question: '"Auf Wiedersehen" — это неформальное прощание.',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Auf Wiedersehen — формальное прощание. Неформальное — Tschüss.',
            points: 1,
          },
          {
            id: 'a1-1-1-ex7',
            type: 'matching',
            question: 'Соедините приветствия с их значением',
            options: ['Hallo', 'Tschüss', 'Guten Morgen', 'Gute Nacht'],
            correctAnswer: ['Привет', 'Пока', 'Доброе утро', 'Спокойной ночи'],
            points: 4,
          },
          {
            id: 'a1-1-1-ex8',
            type: 'multiple-choice',
            question: 'Как поздороваться вечером?',
            options: ['Guten Morgen', 'Guten Tag', 'Guten Abend', 'Gute Nacht'],
            correctAnswer: 'Guten Abend',
            points: 1,
          },
          {
            id: 'a1-1-1-ex9',
            type: 'translation',
            question: 'Переведите: Привет!',
            correctAnswer: 'Hallo!',
            points: 1,
          },
          {
            id: 'a1-1-1-ex10',
            type: 'fill-blank',
            question: 'Auf ___! (До свидания)',
            correctAnswer: 'Wiedersehen',
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
          {
            id: 'a1-1-2-ex3',
            type: 'multiple-choice',
            question: 'Как спросить "Как тебя зовут?" формально?',
            options: ['Wie heißt du?', 'Wie heißen Sie?', 'Wer bist du?', 'Was ist dein Name?'],
            correctAnswer: 'Wie heißen Sie?',
            points: 1,
          },
          {
            id: 'a1-1-2-ex4',
            type: 'fill-blank',
            question: 'Ich ___ Peter. (зовут)',
            correctAnswer: 'heiße',
            points: 1,
          },
          {
            id: 'a1-1-2-ex5',
            type: 'translation',
            question: 'Переведите: Откуда ты?',
            correctAnswer: 'Woher kommst du?',
            points: 2,
          },
          {
            id: 'a1-1-2-ex6',
            type: 'multiple-choice',
            question: 'Как ответить на вопрос "Woher kommst du?", если вы из России?',
            options: ['Ich bin Russland.', 'Ich komme aus Russland.', 'Ich wohne Russland.', 'Ich heiße Russland.'],
            correctAnswer: 'Ich komme aus Russland.',
            points: 1,
          },
          {
            id: 'a1-1-2-ex7',
            type: 'fill-blank',
            question: 'Wo ___ du? (живёшь)',
            correctAnswer: 'wohnst',
            points: 1,
          },
          {
            id: 'a1-1-2-ex8',
            type: 'translation',
            question: 'Переведите: Я живу в Берлине.',
            correctAnswer: 'Ich wohne in Berlin.',
            points: 2,
          },
          {
            id: 'a1-1-2-ex9',
            type: 'true-false',
            question: '"Ich komme aus Deutschland" означает "Я живу в Германии".',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Это означает "Я из Германии" (происхождение). "Я живу" — Ich wohne.',
            points: 1,
          },
          {
            id: 'a1-1-2-ex10',
            type: 'multiple-choice',
            question: 'Выберите правильный вопрос о месте жительства:',
            options: ['Woher wohnst du?', 'Wo kommst du?', 'Wo wohnst du?', 'Wie wohnst du?'],
            correctAnswer: 'Wo wohnst du?',
            points: 1,
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
          {
            id: 'a1-1-3-ex3',
            type: 'matching',
            question: 'Соедините местоимения с переводом',
            options: ['ich', 'du', 'wir', 'sie (мн.ч.)'],
            correctAnswer: ['я', 'ты', 'мы', 'они'],
            points: 4,
          },
          {
            id: 'a1-1-3-ex4',
            type: 'fill-blank',
            question: '___ ist Lehrerin. (она)',
            correctAnswer: 'Sie',
            points: 1,
          },
          {
            id: 'a1-1-3-ex5',
            type: 'multiple-choice',
            question: 'Какое местоимение означает "мы"?',
            options: ['ihr', 'sie', 'wir', 'es'],
            correctAnswer: 'wir',
            points: 1,
          },
          {
            id: 'a1-1-3-ex6',
            type: 'fill-blank',
            question: '___ seid Studenten. (вы, мн.ч. неформ.)',
            correctAnswer: 'Ihr',
            points: 1,
          },
          {
            id: 'a1-1-3-ex7',
            type: 'true-false',
            question: '"Sie" с большой буквы означает "она".',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Sie с большой буквы — вежливое "Вы". "Она" — sie с маленькой.',
            points: 1,
          },
          {
            id: 'a1-1-3-ex8',
            type: 'multiple-choice',
            question: 'Какое местоимение используется для среднего рода?',
            options: ['er', 'sie', 'es', 'ihr'],
            correctAnswer: 'es',
            points: 1,
          },
          {
            id: 'a1-1-3-ex9',
            type: 'fill-blank',
            question: '___ kommt aus Deutschland. (он)',
            correctAnswer: 'Er',
            points: 1,
          },
          {
            id: 'a1-1-3-ex10',
            type: 'multiple-choice',
            question: 'Как сказать "они" по-немецки?',
            options: ['wir', 'ihr', 'sie', 'Sie'],
            correctAnswer: 'sie',
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
          {
            id: 'a1-1-4-ex4',
            type: 'fill-blank',
            question: 'Du ___ sehr nett.',
            correctAnswer: 'bist',
            points: 1,
          },
          {
            id: 'a1-1-4-ex5',
            type: 'multiple-choice',
            question: 'Выберите правильную форму: "Ihr ___ aus Berlin."',
            options: ['bin', 'bist', 'ist', 'seid'],
            correctAnswer: 'seid',
            points: 1,
          },
          {
            id: 'a1-1-4-ex6',
            type: 'matching',
            question: 'Соедините местоимения с формами глагола sein',
            options: ['ich', 'du', 'er/sie/es', 'wir'],
            correctAnswer: ['bin', 'bist', 'ist', 'sind'],
            points: 4,
          },
          {
            id: 'a1-1-4-ex7',
            type: 'translation',
            question: 'Переведите: Ты студент?',
            correctAnswer: 'Bist du Student?',
            points: 2,
          },
          {
            id: 'a1-1-4-ex8',
            type: 'fill-blank',
            question: 'Sie (они) ___ aus Frankreich.',
            correctAnswer: 'sind',
            points: 1,
          },
          {
            id: 'a1-1-4-ex9',
            type: 'true-false',
            question: 'Форма "ist" используется с местоимениями er, sie (она), es.',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Правда',
            points: 1,
          },
          {
            id: 'a1-1-4-ex10',
            type: 'translation',
            question: 'Переведите: Мы из России.',
            correctAnswer: 'Wir sind aus Russland.',
            points: 2,
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
          {
            id: 'a1-1-5-ex4',
            type: 'translation',
            question: 'Переведите: Я из Москвы.',
            correctAnswer: 'Ich komme aus Moskau.',
            points: 2,
          },
          {
            id: 'a1-1-5-ex5',
            type: 'fill-blank',
            question: 'Wie ___ Sie? (зовут, формально)',
            correctAnswer: 'heißen',
            points: 1,
          },
          {
            id: 'a1-1-5-ex6',
            type: 'multiple-choice',
            question: 'Как попрощаться формально?',
            options: ['Tschüss', 'Hallo', 'Auf Wiedersehen', 'Hi'],
            correctAnswer: 'Auf Wiedersehen',
            points: 1,
          },
          {
            id: 'a1-1-5-ex7',
            type: 'fill-blank',
            question: '___ wohnst du? (где)',
            correctAnswer: 'Wo',
            points: 1,
          },
          {
            id: 'a1-1-5-ex8',
            type: 'translation',
            question: 'Переведите: Мы студенты.',
            correctAnswer: 'Wir sind Studenten.',
            points: 2,
          },
          {
            id: 'a1-1-5-ex9',
            type: 'multiple-choice',
            question: 'Какое местоимение означает "вы" (неформально, мн.ч.)?',
            options: ['Sie', 'du', 'ihr', 'wir'],
            correctAnswer: 'ihr',
            points: 1,
          },
          {
            id: 'a1-1-5-ex10',
            type: 'fill-blank',
            question: 'Er ___ Arzt. (есть/является)',
            correctAnswer: 'ist',
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
          {
            id: 'a1-2-1-ex2',
            type: 'multiple-choice',
            question: 'Как сказать "дедушка" по-немецки?',
            options: ['der Vater', 'der Großvater', 'der Onkel', 'der Bruder'],
            correctAnswer: 'der Großvater',
            points: 1,
          },
          {
            id: 'a1-2-1-ex3',
            type: 'translation',
            question: 'Переведите: бабушка',
            correctAnswer: 'die Großmutter',
            points: 1,
          },
          {
            id: 'a1-2-1-ex4',
            type: 'fill-blank',
            question: 'Mein Vater und meine Mutter sind meine ___. (родители)',
            correctAnswer: 'Eltern',
            points: 1,
          },
          {
            id: 'a1-2-1-ex5',
            type: 'multiple-choice',
            question: 'Как называют детей (мн.ч.)?',
            options: ['das Kind', 'die Kinder', 'die Kindern', 'der Kind'],
            correctAnswer: 'die Kinder',
            points: 1,
          },
          {
            id: 'a1-2-1-ex6',
            type: 'matching',
            question: 'Соедините слова',
            options: ['der Onkel', 'die Tante', 'der Cousin', 'die Cousine'],
            correctAnswer: ['дядя', 'тётя', 'двоюродный брат', 'двоюродная сестра'],
            points: 4,
          },
          {
            id: 'a1-2-1-ex7',
            type: 'true-false',
            question: '"Die Geschwister" означает "родители".',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Die Geschwister — братья и сёстры. Родители — die Eltern.',
            points: 1,
          },
          {
            id: 'a1-2-1-ex8',
            type: 'fill-blank',
            question: 'Mein Bruder ist mein ___. (брат/сестра - общее)',
            correctAnswer: 'Geschwister',
            points: 1,
          },
          {
            id: 'a1-2-1-ex9',
            type: 'multiple-choice',
            question: 'Как сказать "муж"?',
            options: ['der Mann', 'die Frau', 'der Sohn', 'die Tochter'],
            correctAnswer: 'der Mann',
            points: 1,
          },
          {
            id: 'a1-2-1-ex10',
            type: 'translation',
            question: 'Переведите: сын и дочь',
            correctAnswer: 'der Sohn und die Tochter',
            points: 2,
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
          {
            id: 'a1-2-2-ex3',
            type: 'fill-blank',
            question: 'Er ___ eine Schwester.',
            correctAnswer: 'hat',
            points: 1,
          },
          {
            id: 'a1-2-2-ex4',
            type: 'multiple-choice',
            question: 'Выберите правильную форму: "Wir ___ zwei Kinder."',
            options: ['habe', 'hast', 'hat', 'haben'],
            correctAnswer: 'haben',
            points: 1,
          },
          {
            id: 'a1-2-2-ex5',
            type: 'matching',
            question: 'Соедините местоимения с формами haben',
            options: ['ich', 'du', 'er/sie/es', 'wir'],
            correctAnswer: ['habe', 'hast', 'hat', 'haben'],
            points: 4,
          },
          {
            id: 'a1-2-2-ex6',
            type: 'fill-blank',
            question: 'Ihr ___ viel Zeit.',
            correctAnswer: 'habt',
            points: 1,
          },
          {
            id: 'a1-2-2-ex7',
            type: 'translation',
            question: 'Переведите: У меня есть собака.',
            correctAnswer: 'Ich habe einen Hund.',
            points: 2,
          },
          {
            id: 'a1-2-2-ex8',
            type: 'true-false',
            question: 'Для выражения возраста в немецком используют глагол haben.',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Для возраста используют sein: Ich bin 25 Jahre alt.',
            points: 1,
          },
          {
            id: 'a1-2-2-ex9',
            type: 'fill-blank',
            question: 'Sie (они) ___ keine Zeit.',
            correctAnswer: 'haben',
            points: 1,
          },
          {
            id: 'a1-2-2-ex10',
            type: 'translation',
            question: 'Переведите: У тебя есть братья и сёстры?',
            correctAnswer: 'Hast du Geschwister?',
            points: 2,
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
          {
            id: 'a1-2-3-ex3',
            type: 'multiple-choice',
            question: 'Выберите правильную форму: "___ Schwester ist 20 Jahre alt." (его)',
            options: ['mein', 'dein', 'sein', 'ihr'],
            correctAnswer: 'sein',
            points: 1,
          },
          {
            id: 'a1-2-3-ex4',
            type: 'fill-blank',
            question: '___ Kinder spielen im Garten. (наши)',
            correctAnswer: 'Unsere',
            points: 1,
          },
          {
            id: 'a1-2-3-ex5',
            type: 'matching',
            question: 'Соедините местоимения',
            options: ['mein', 'dein', 'sein', 'ihr'],
            correctAnswer: ['мой', 'твой', 'его', 'её'],
            points: 4,
          },
          {
            id: 'a1-2-3-ex6',
            type: 'fill-blank',
            question: 'Ist das ___ Auto? (ваше, формально)',
            correctAnswer: 'Ihr',
            points: 1,
          },
          {
            id: 'a1-2-3-ex7',
            type: 'translation',
            question: 'Переведите: Это моя сестра.',
            correctAnswer: 'Das ist meine Schwester.',
            points: 2,
          },
          {
            id: 'a1-2-3-ex8',
            type: 'true-false',
            question: '"Meine" используется с существительными женского рода.',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Правда',
            points: 1,
          },
          {
            id: 'a1-2-3-ex9',
            type: 'fill-blank',
            question: '___ Bruder heißt Max. (её)',
            correctAnswer: 'Ihr',
            points: 1,
          },
          {
            id: 'a1-2-3-ex10',
            type: 'multiple-choice',
            question: 'Какое притяжательное местоимение соответствует "wir"?',
            options: ['mein', 'euer', 'unser', 'ihr'],
            correctAnswer: 'unser',
            points: 1,
          },
        ],
      },
      {
        id: 4,
        moduleId: 2,
        level: 'a1',
        title: 'Профессии и возраст',
        titleDe: 'Berufe und Alter',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Научимся называть профессии и говорить о возрасте',
        },
        exercises: [
          {
            id: 'a1-2-4-ex1',
            type: 'matching',
            question: 'Соедините профессии с переводом',
            options: ['der Arzt', 'der Lehrer', 'der Student', 'der Ingenieur'],
            correctAnswer: ['врач', 'учитель', 'студент', 'инженер'],
            points: 4,
          },
          {
            id: 'a1-2-4-ex2',
            type: 'multiple-choice',
            question: 'Как спросить "Сколько тебе лет?"',
            options: ['Wie alt bist du?', 'Wie Jahre hast du?', 'Was alt bist du?', 'Wieviel Jahre bist du?'],
            correctAnswer: 'Wie alt bist du?',
            points: 1,
          },
          {
            id: 'a1-2-4-ex3',
            type: 'fill-blank',
            question: 'Ich ___ 25 Jahre alt.',
            correctAnswer: 'bin',
            points: 1,
          },
          {
            id: 'a1-2-4-ex4',
            type: 'translation',
            question: 'Переведите: Она врач.',
            correctAnswer: 'Sie ist Ärztin.',
            points: 2,
          },
          {
            id: 'a1-2-4-ex5',
            type: 'multiple-choice',
            question: 'Какая женская форма профессии "der Lehrer"?',
            options: ['die Lehrern', 'die Lehrerin', 'die Lehrera', 'die Lehrer'],
            correctAnswer: 'die Lehrerin',
            points: 1,
          },
          {
            id: 'a1-2-4-ex6',
            type: 'fill-blank',
            question: 'Mein Vater ist ___ von Beruf. (инженер)',
            correctAnswer: 'Ingenieur',
            points: 1,
          },
          {
            id: 'a1-2-4-ex7',
            type: 'true-false',
            question: 'Перед названием профессии в немецком ставится артикль: "Ich bin ein Arzt."',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Артикль не ставится: Ich bin Arzt.',
            points: 1,
          },
          {
            id: 'a1-2-4-ex8',
            type: 'matching',
            question: 'Женские формы профессий',
            options: ['der Arzt', 'der Koch', 'der Kellner', 'der Verkäufer'],
            correctAnswer: ['die Ärztin', 'die Köchin', 'die Kellnerin', 'die Verkäuferin'],
            points: 4,
          },
          {
            id: 'a1-2-4-ex9',
            type: 'translation',
            question: 'Переведите: Моей маме 50 лет.',
            correctAnswer: 'Meine Mutter ist 50 Jahre alt.',
            points: 2,
          },
          {
            id: 'a1-2-4-ex10',
            type: 'fill-blank',
            question: 'Was ___ du von Beruf? (есть/являешься)',
            correctAnswer: 'bist',
            points: 1,
          },
        ],
      },
      {
        id: 5,
        moduleId: 2,
        level: 'a1',
        title: 'Мини-тест',
        titleDe: 'Mini-Test',
        type: 'test',
        duration: 15,
        content: {
          introduction: 'Проверим знания по модулю 2',
        },
        exercises: [
          {
            id: 'a1-2-5-ex1',
            type: 'translation',
            question: 'Переведите: У меня есть брат и сестра.',
            correctAnswer: 'Ich habe einen Bruder und eine Schwester.',
            points: 2,
          },
          {
            id: 'a1-2-5-ex2',
            type: 'fill-blank',
            question: '___ Vater ist Arzt. (мой)',
            correctAnswer: 'Mein',
            points: 1,
          },
          {
            id: 'a1-2-5-ex3',
            type: 'multiple-choice',
            question: 'Выберите правильную форму haben: "Sie (она) ___ zwei Kinder."',
            options: ['habe', 'hast', 'hat', 'haben'],
            correctAnswer: 'hat',
            points: 1,
          },
          {
            id: 'a1-2-5-ex4',
            type: 'fill-blank',
            question: 'Wie alt ___ du?',
            correctAnswer: 'bist',
            points: 1,
          },
          {
            id: 'a1-2-5-ex5',
            type: 'translation',
            question: 'Переведите: бабушка и дедушка',
            correctAnswer: 'die Großmutter und der Großvater',
            points: 2,
          },
          {
            id: 'a1-2-5-ex6',
            type: 'multiple-choice',
            question: 'Как сказать "Я студентка" (женщина)?',
            options: ['Ich bin Student.', 'Ich bin Studentin.', 'Ich bin eine Studentin.', 'Ich habe Studentin.'],
            correctAnswer: 'Ich bin Studentin.',
            points: 1,
          },
          {
            id: 'a1-2-5-ex7',
            type: 'fill-blank',
            question: 'Das ist ___ Schwester. (его)',
            correctAnswer: 'seine',
            points: 1,
          },
          {
            id: 'a1-2-5-ex8',
            type: 'translation',
            question: 'Переведите: Моему брату 30 лет.',
            correctAnswer: 'Mein Bruder ist 30 Jahre alt.',
            points: 2,
          },
          {
            id: 'a1-2-5-ex9',
            type: 'fill-blank',
            question: '___ ihr Geschwister? (иметь)',
            correctAnswer: 'Habt',
            points: 1,
          },
          {
            id: 'a1-2-5-ex10',
            type: 'multiple-choice',
            question: 'Как сказать "родители"?',
            options: ['die Kinder', 'die Geschwister', 'die Eltern', 'die Familie'],
            correctAnswer: 'die Eltern',
            points: 1,
          },
        ],
      },
    ],
  },
  // Модуль 3: Еда и напитки
  {
    id: 3,
    level: 'a1',
    title: 'Еда и напитки',
    titleDe: 'Essen und Trinken',
    description: 'Еда, напитки, в ресторане, артикли',
    vocabulary: a1Vocabulary.filter(w => w.tags?.includes('module-3')),
    grammar: [
      {
        id: 'a1-g3-1',
        level: 'a1',
        title: 'Определённый артикль',
        titleDe: 'Der bestimmte Artikel',
        description: 'der, die, das',
        explanation: `
# Определённый артикль (der bestimmte Artikel)

В немецком языке 3 рода и 3 артикля:

| Род | Артикль | Пример |
|-----|---------|--------|
| Мужской (maskulin) | **der** | der Apfel (яблоко) |
| Женский (feminin) | **die** | die Banane (банан) |
| Средний (neutral) | **das** | das Brot (хлеб) |

## Множественное число
Для всех родов: **die**
- die Äpfel, die Bananen, die Brote

## Как запомнить род?
- Учите слова сразу с артиклем!
- Некоторые окончания указывают на род:
  - **-ung, -heit, -keit, -schaft** → die
  - **-chen, -lein** → das
        `,
        comparisonWithRussian: 'В русском тоже 3 рода, но они часто не совпадают с немецким!',
        examples: [
          { german: 'Der Kaffee ist heiß.', russian: 'Кофе горячий.' },
          { german: 'Die Suppe schmeckt gut.', russian: 'Суп вкусный.' },
          { german: 'Das Wasser ist kalt.', russian: 'Вода холодная.' },
        ],
        exercises: [],
      },
      {
        id: 'a1-g3-2',
        level: 'a1',
        title: 'Неопределённый артикль',
        titleDe: 'Der unbestimmte Artikel',
        description: 'ein, eine',
        explanation: `
# Неопределённый артикль (der unbestimmte Artikel)

| Род | Артикль | Пример |
|-----|---------|--------|
| Мужской | **ein** | ein Apfel |
| Женский | **eine** | eine Banane |
| Средний | **ein** | ein Brot |

## Отрицание: kein/keine
- **kein** Apfel (никакого яблока)
- **keine** Banane (никакого банана)
- **kein** Brot (никакого хлеба)

## Когда использовать?
- **ein/eine** — когда говорим о чём-то впервые или неконкретном
- **der/die/das** — когда говорим о чём-то конкретном
        `,
        examples: [
          { german: 'Ich möchte einen Kaffee.', russian: 'Я хочу (один) кофе.' },
          { german: 'Das ist eine Orange.', russian: 'Это апельсин.' },
          { german: 'Ich habe kein Geld.', russian: 'У меня нет денег.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 3,
        level: 'a1',
        title: 'Продукты питания',
        titleDe: 'Lebensmittel',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Выучим названия основных продуктов питания',
          tips: ['Запоминайте слова вместе с артиклем!', 'Обращайте внимание на род существительных'],
        },
        exercises: [
          {
            id: 'a1-3-1-ex1',
            type: 'matching',
            question: 'Соедините продукты с переводом',
            options: ['das Brot', 'der Käse', 'die Butter', 'das Ei'],
            correctAnswer: ['хлеб', 'сыр', 'масло', 'яйцо'],
            points: 4,
          },
          {
            id: 'a1-3-1-ex2',
            type: 'multiple-choice',
            question: 'Какой артикль у слова "Apfel" (яблоко)?',
            options: ['der', 'die', 'das', 'ein'],
            correctAnswer: 'der',
            points: 1,
          },
          {
            id: 'a1-3-1-ex3',
            type: 'translation',
            question: 'Переведите: мясо',
            correctAnswer: 'das Fleisch',
            points: 1,
          },
          {
            id: 'a1-3-1-ex4',
            type: 'fill-blank',
            question: '___ Tomate ist rot. (артикль)',
            correctAnswer: 'Die',
            points: 1,
          },
          {
            id: 'a1-3-1-ex5',
            type: 'multiple-choice',
            question: 'Как сказать "рыба" по-немецки?',
            options: ['das Fleisch', 'der Fisch', 'das Hähnchen', 'die Wurst'],
            correctAnswer: 'der Fisch',
            points: 1,
          },
          {
            id: 'a1-3-1-ex6',
            type: 'matching',
            question: 'Соедините фрукты',
            options: ['die Orange', 'die Banane', 'die Traube', 'die Erdbeere'],
            correctAnswer: ['апельсин', 'банан', 'виноград', 'клубника'],
            points: 4,
          },
          {
            id: 'a1-3-1-ex7',
            type: 'fill-blank',
            question: 'Ich esse gern ___. (сыр)',
            correctAnswer: 'Käse',
            points: 1,
          },
          {
            id: 'a1-3-1-ex8',
            type: 'true-false',
            question: '"Das Gemüse" означает "фрукты".',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Das Gemüse — овощи. Фрукты — das Obst.',
            points: 1,
          },
          {
            id: 'a1-3-1-ex9',
            type: 'multiple-choice',
            question: 'Какой артикль у слова "Kartoffel" (картофель)?',
            options: ['der', 'die', 'das', 'den'],
            correctAnswer: 'die',
            points: 1,
          },
          {
            id: 'a1-3-1-ex10',
            type: 'translation',
            question: 'Переведите: Я люблю хлеб.',
            correctAnswer: 'Ich mag Brot.',
            points: 2,
          },
        ],
      },
      {
        id: 2,
        moduleId: 3,
        level: 'a1',
        title: 'Напитки',
        titleDe: 'Getränke',
        type: 'vocabulary',
        duration: 15,
        content: {
          introduction: 'Выучим названия напитков',
        },
        exercises: [
          {
            id: 'a1-3-2-ex1',
            type: 'matching',
            question: 'Соедините напитки с переводом',
            options: ['das Wasser', 'der Kaffee', 'der Tee', 'die Milch'],
            correctAnswer: ['вода', 'кофе', 'чай', 'молоко'],
            points: 4,
          },
          {
            id: 'a1-3-2-ex2',
            type: 'multiple-choice',
            question: 'Какой артикль у слова "Bier" (пиво)?',
            options: ['der', 'die', 'das', 'den'],
            correctAnswer: 'das',
            points: 1,
          },
          {
            id: 'a1-3-2-ex3',
            type: 'fill-blank',
            question: 'Ich trinke gern ___. (кофе)',
            correctAnswer: 'Kaffee',
            points: 1,
          },
          {
            id: 'a1-3-2-ex4',
            type: 'translation',
            question: 'Переведите: апельсиновый сок',
            correctAnswer: 'der Orangensaft',
            points: 1,
          },
          {
            id: 'a1-3-2-ex5',
            type: 'multiple-choice',
            question: 'Как сказать "вино" по-немецки?',
            options: ['das Bier', 'der Wein', 'der Saft', 'das Wasser'],
            correctAnswer: 'der Wein',
            points: 1,
          },
          {
            id: 'a1-3-2-ex6',
            type: 'fill-blank',
            question: '___ Tee ist heiß. (артикль)',
            correctAnswer: 'Der',
            points: 1,
          },
          {
            id: 'a1-3-2-ex7',
            type: 'true-false',
            question: '"Die Limonade" — это лимонад.',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Правда',
            points: 1,
          },
          {
            id: 'a1-3-2-ex8',
            type: 'translation',
            question: 'Переведите: Я пью воду.',
            correctAnswer: 'Ich trinke Wasser.',
            points: 2,
          },
          {
            id: 'a1-3-2-ex9',
            type: 'multiple-choice',
            question: 'Какой напиток "der Kakao"?',
            options: ['какао', 'кофе', 'чай', 'сок'],
            correctAnswer: 'какао',
            points: 1,
          },
          {
            id: 'a1-3-2-ex10',
            type: 'fill-blank',
            question: 'Möchten Sie ___ oder Tee? (кофе)',
            correctAnswer: 'Kaffee',
            points: 1,
          },
        ],
      },
      {
        id: 3,
        moduleId: 3,
        level: 'a1',
        title: 'Артикли',
        titleDe: 'Artikel',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'Изучим определённый и неопределённый артикли',
        },
        exercises: [
          {
            id: 'a1-3-3-ex1',
            type: 'multiple-choice',
            question: 'Какой определённый артикль для мужского рода?',
            options: ['der', 'die', 'das', 'den'],
            correctAnswer: 'der',
            points: 1,
          },
          {
            id: 'a1-3-3-ex2',
            type: 'fill-blank',
            question: '___ Frau trinkt Kaffee. (определённый артикль)',
            correctAnswer: 'Die',
            points: 1,
          },
          {
            id: 'a1-3-3-ex3',
            type: 'matching',
            question: 'Соедините род с артиклем',
            options: ['maskulin', 'feminin', 'neutral', 'Plural'],
            correctAnswer: ['der', 'die', 'das', 'die'],
            points: 4,
          },
          {
            id: 'a1-3-3-ex4',
            type: 'fill-blank',
            question: 'Das ist ___ Apfel. (неопределённый артикль)',
            correctAnswer: 'ein',
            points: 1,
          },
          {
            id: 'a1-3-3-ex5',
            type: 'multiple-choice',
            question: 'Какой неопределённый артикль для женского рода?',
            options: ['ein', 'eine', 'einen', 'einer'],
            correctAnswer: 'eine',
            points: 1,
          },
          {
            id: 'a1-3-3-ex6',
            type: 'fill-blank',
            question: 'Ich habe ___ Schwester. (неопр. артикль, ж.р.)',
            correctAnswer: 'eine',
            points: 1,
          },
          {
            id: 'a1-3-3-ex7',
            type: 'true-false',
            question: 'Во множественном числе неопределённый артикль — "eine".',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Во множественном числе неопределённого артикля нет.',
            points: 1,
          },
          {
            id: 'a1-3-3-ex8',
            type: 'multiple-choice',
            question: 'Выберите правильный вариант: "Ich möchte ___ Kaffee."',
            options: ['der', 'die', 'einen', 'eine'],
            correctAnswer: 'einen',
            points: 1,
          },
          {
            id: 'a1-3-3-ex9',
            type: 'fill-blank',
            question: 'Ich habe ___ Geld. (нет, отрицание)',
            correctAnswer: 'kein',
            points: 1,
          },
          {
            id: 'a1-3-3-ex10',
            type: 'translation',
            question: 'Переведите: У меня нет машины.',
            correctAnswer: 'Ich habe kein Auto.',
            points: 2,
          },
        ],
      },
      {
        id: 4,
        moduleId: 3,
        level: 'a1',
        title: 'В ресторане',
        titleDe: 'Im Restaurant',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Научимся заказывать еду в ресторане',
        },
        exercises: [
          {
            id: 'a1-3-4-ex1',
            type: 'multiple-choice',
            question: 'Как вежливо попросить меню?',
            options: ['Geben Sie mir die Karte!', 'Die Speisekarte, bitte.', 'Ich will die Karte.', 'Karte!'],
            correctAnswer: 'Die Speisekarte, bitte.',
            points: 1,
          },
          {
            id: 'a1-3-4-ex2',
            type: 'translation',
            question: 'Переведите: Я хотел бы заказать.',
            correctAnswer: 'Ich möchte bestellen.',
            points: 2,
          },
          {
            id: 'a1-3-4-ex3',
            type: 'fill-blank',
            question: 'Die ___, bitte. (счёт)',
            correctAnswer: 'Rechnung',
            points: 1,
          },
          {
            id: 'a1-3-4-ex4',
            type: 'matching',
            question: 'Соедините фразы',
            options: ['Guten Appetit!', 'Prost!', 'Danke, gleichfalls!', 'Zahlen, bitte!'],
            correctAnswer: ['Приятного аппетита!', 'Ура!/За здоровье!', 'Спасибо, взаимно!', 'Счёт, пожалуйста!'],
            points: 4,
          },
          {
            id: 'a1-3-4-ex5',
            type: 'multiple-choice',
            question: 'Как сказать "официант"?',
            options: ['der Kellner', 'der Koch', 'der Gast', 'der Tisch'],
            correctAnswer: 'der Kellner',
            points: 1,
          },
          {
            id: 'a1-3-4-ex6',
            type: 'fill-blank',
            question: 'Ich ___ einen Salat. (хотел бы)',
            correctAnswer: 'möchte',
            points: 1,
          },
          {
            id: 'a1-3-4-ex7',
            type: 'translation',
            question: 'Переведите: Что вы рекомендуете?',
            correctAnswer: 'Was empfehlen Sie?',
            points: 2,
          },
          {
            id: 'a1-3-4-ex8',
            type: 'true-false',
            question: '"Das Trinkgeld" означает "напиток".',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Das Trinkgeld — чаевые. Напиток — das Getränk.',
            points: 1,
          },
          {
            id: 'a1-3-4-ex9',
            type: 'multiple-choice',
            question: 'Как спросить "Есть ли свободный столик?"',
            options: ['Haben Sie Tisch?', 'Ist hier frei?', 'Haben Sie einen Tisch frei?', 'Wo ist der Tisch?'],
            correctAnswer: 'Haben Sie einen Tisch frei?',
            points: 1,
          },
          {
            id: 'a1-3-4-ex10',
            type: 'fill-blank',
            question: 'Das ___ sehr gut! (вкусно)',
            correctAnswer: 'schmeckt',
            points: 1,
          },
        ],
      },
      {
        id: 5,
        moduleId: 3,
        level: 'a1',
        title: 'Мини-тест',
        titleDe: 'Mini-Test',
        type: 'test',
        duration: 15,
        content: {
          introduction: 'Проверим знания по модулю 3',
        },
        exercises: [
          {
            id: 'a1-3-5-ex1',
            type: 'fill-blank',
            question: '___ Kaffee ist heiß. (определённый артикль)',
            correctAnswer: 'Der',
            points: 1,
          },
          {
            id: 'a1-3-5-ex2',
            type: 'translation',
            question: 'Переведите: Я хочу воду.',
            correctAnswer: 'Ich möchte Wasser.',
            points: 2,
          },
          {
            id: 'a1-3-5-ex3',
            type: 'multiple-choice',
            question: 'Какой артикль у "Milch"?',
            options: ['der', 'die', 'das', 'den'],
            correctAnswer: 'die',
            points: 1,
          },
          {
            id: 'a1-3-5-ex4',
            type: 'fill-blank',
            question: 'Ich esse ___ Apfel. (неопределённый артикль)',
            correctAnswer: 'einen',
            points: 1,
          },
          {
            id: 'a1-3-5-ex5',
            type: 'matching',
            question: 'Соедините слова',
            options: ['das Obst', 'das Gemüse', 'das Fleisch', 'der Fisch'],
            correctAnswer: ['фрукты', 'овощи', 'мясо', 'рыба'],
            points: 4,
          },
          {
            id: 'a1-3-5-ex6',
            type: 'translation',
            question: 'Переведите: Счёт, пожалуйста.',
            correctAnswer: 'Die Rechnung, bitte.',
            points: 2,
          },
          {
            id: 'a1-3-5-ex7',
            type: 'fill-blank',
            question: 'Ich habe ___ Hunger. (отрицание)',
            correctAnswer: 'keinen',
            points: 1,
          },
          {
            id: 'a1-3-5-ex8',
            type: 'multiple-choice',
            question: 'Как сказать "Приятного аппетита"?',
            options: ['Guten Tag!', 'Guten Appetit!', 'Gute Nacht!', 'Guten Morgen!'],
            correctAnswer: 'Guten Appetit!',
            points: 1,
          },
          {
            id: 'a1-3-5-ex9',
            type: 'fill-blank',
            question: 'Das Essen ___ gut. (вкусно)',
            correctAnswer: 'schmeckt',
            points: 1,
          },
          {
            id: 'a1-3-5-ex10',
            type: 'translation',
            question: 'Переведите: Я пью чай с молоком.',
            correctAnswer: 'Ich trinke Tee mit Milch.',
            points: 2,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    level: 'a1',
    title: 'Мой день',
    titleDe: 'Mein Tag',
    description: 'Распорядок дня, время, отделяемые приставки',
    vocabulary: a1Vocabulary.filter(w => w.tags?.includes('module-4')),
    grammar: [
      {
        id: 'a1-g4-1',
        level: 'a1',
        title: 'Отделяемые приставки',
        titleDe: 'Trennbare Verben',
        description: 'aufstehen, anfangen, einkaufen...',
        explanation: `
# Отделяемые приставки (Trennbare Verben)

Многие немецкие глаголы имеют отделяемые приставки:
**auf-, an-, ein-, aus-, mit-, vor-, zu-, ab-, weg-**

## Как они работают?
В предложении приставка уходит в конец:

| Инфинитив | Предложение |
|-----------|-------------|
| **auf**stehen | Ich stehe um 7 Uhr **auf**. |
| **ein**kaufen | Wir kaufen im Supermarkt **ein**. |
| **an**fangen | Der Film fängt um 8 Uhr **an**. |

## Важно!
- Приставка всегда ударная: **AUF**stehen
- В словаре: aufstehen, einkaufen, anfangen
        `,
        comparisonWithRussian: 'В русском похожее: "вставать" = "встать", но приставка не отделяется.',
        examples: [
          { german: 'Ich stehe um 7 Uhr auf.', russian: 'Я встаю в 7 часов.' },
          { german: 'Wann fängt der Kurs an?', russian: 'Когда начинается курс?' },
          { german: 'Sie kauft im Supermarkt ein.', russian: 'Она делает покупки в супермаркете.' },
        ],
        exercises: [],
      },
      {
        id: 'a1-g4-2',
        level: 'a1',
        title: 'Время',
        titleDe: 'Die Uhrzeit',
        description: 'Wie spät ist es?',
        explanation: `
# Время (Die Uhrzeit)

## Официальное время (24 часа)
- 14:30 → Es ist vierzehn Uhr dreißig.
- 09:15 → Es ist neun Uhr fünfzehn.

## Разговорное время (12 часов)
| Время | Немецкий |
|-------|----------|
| 8:00 | acht Uhr |
| 8:15 | Viertel nach acht |
| 8:30 | halb neun (!) |
| 8:45 | Viertel vor neun |

## Внимание!
**halb neun** = 8:30 (половина девятого, НЕ половина восьмого!)
        `,
        examples: [
          { german: 'Wie spät ist es?', russian: 'Который час?' },
          { german: 'Es ist halb zehn.', russian: 'Половина десятого (9:30).' },
          { german: 'Um wie viel Uhr kommst du?', russian: 'Во сколько ты придёшь?' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 4,
        level: 'a1',
        title: 'Распорядок дня',
        titleDe: 'Tagesablauf',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Научимся описывать свой день',
        },
        exercises: [
          {
            id: 'a1-4-1-ex1',
            type: 'matching',
            question: 'Соедините действия',
            options: ['aufstehen', 'frühstücken', 'arbeiten', 'schlafen'],
            correctAnswer: ['вставать', 'завтракать', 'работать', 'спать'],
            points: 4,
          },
          {
            id: 'a1-4-1-ex2',
            type: 'multiple-choice',
            question: 'Что означает "duschen"?',
            options: ['есть', 'спать', 'принимать душ', 'работать'],
            correctAnswer: 'принимать душ',
            points: 1,
          },
          {
            id: 'a1-4-1-ex3',
            type: 'fill-blank',
            question: 'Ich ___ um 7 Uhr auf. (вставать)',
            correctAnswer: 'stehe',
            points: 1,
          },
          {
            id: 'a1-4-1-ex4',
            type: 'translation',
            question: 'Переведите: Я завтракаю в 8 часов.',
            correctAnswer: 'Ich frühstücke um 8 Uhr.',
            points: 2,
          },
          {
            id: 'a1-4-1-ex5',
            type: 'multiple-choice',
            question: 'Как сказать "обедать"?',
            options: ['frühstücken', 'zu Mittag essen', 'zu Abend essen', 'schlafen'],
            correctAnswer: 'zu Mittag essen',
            points: 1,
          },
          {
            id: 'a1-4-1-ex6',
            type: 'fill-blank',
            question: 'Am Abend ___ ich fern. (смотреть ТВ)',
            correctAnswer: 'sehe',
            points: 1,
          },
          {
            id: 'a1-4-1-ex7',
            type: 'matching',
            question: 'Части дня',
            options: ['der Morgen', 'der Mittag', 'der Abend', 'die Nacht'],
            correctAnswer: ['утро', 'полдень', 'вечер', 'ночь'],
            points: 4,
          },
          {
            id: 'a1-4-1-ex8',
            type: 'true-false',
            question: '"Zu Abend essen" означает "завтракать".',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Zu Abend essen — ужинать. Завтракать — frühstücken.',
            points: 1,
          },
          {
            id: 'a1-4-1-ex9',
            type: 'translation',
            question: 'Переведите: Я иду спать в 11 часов.',
            correctAnswer: 'Ich gehe um 11 Uhr schlafen.',
            points: 2,
          },
          {
            id: 'a1-4-1-ex10',
            type: 'fill-blank',
            question: 'Wann ___ du zur Arbeit? (ехать)',
            correctAnswer: 'fährst',
            points: 1,
          },
        ],
      },
      {
        id: 2,
        moduleId: 4,
        level: 'a1',
        title: 'Время',
        titleDe: 'Die Uhrzeit',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'Научимся называть время',
        },
        exercises: [
          {
            id: 'a1-4-2-ex1',
            type: 'multiple-choice',
            question: 'Как спросить "Который час?"',
            options: ['Wie Uhr ist es?', 'Wie spät ist es?', 'Was Uhr ist?', 'Wann ist es?'],
            correctAnswer: 'Wie spät ist es?',
            points: 1,
          },
          {
            id: 'a1-4-2-ex2',
            type: 'fill-blank',
            question: 'Es ist ___ Uhr. (три)',
            correctAnswer: 'drei',
            points: 1,
          },
          {
            id: 'a1-4-2-ex3',
            type: 'multiple-choice',
            question: 'Что означает "halb neun"?',
            options: ['9:30', '8:30', '8:00', '9:00'],
            correctAnswer: '8:30',
            points: 1,
          },
          {
            id: 'a1-4-2-ex4',
            type: 'translation',
            question: 'Переведите: Сейчас четверть пятого.',
            correctAnswer: 'Es ist Viertel nach vier.',
            points: 2,
          },
          {
            id: 'a1-4-2-ex5',
            type: 'fill-blank',
            question: 'Der Film beginnt ___ acht Uhr. (в)',
            correctAnswer: 'um',
            points: 1,
          },
          {
            id: 'a1-4-2-ex6',
            type: 'matching',
            question: 'Соедините время',
            options: ['7:15', '7:30', '7:45', '8:00'],
            correctAnswer: ['Viertel nach sieben', 'halb acht', 'Viertel vor acht', 'acht Uhr'],
            points: 4,
          },
          {
            id: 'a1-4-2-ex7',
            type: 'multiple-choice',
            question: 'Как сказать 14:30 официально?',
            options: ['halb drei', 'vierzehn Uhr dreißig', 'zwei Uhr dreißig', 'halb fünfzehn'],
            correctAnswer: 'vierzehn Uhr dreißig',
            points: 1,
          },
          {
            id: 'a1-4-2-ex8',
            type: 'true-false',
            question: '"Viertel vor zehn" означает 9:45.',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Правда',
            points: 1,
          },
          {
            id: 'a1-4-2-ex9',
            type: 'fill-blank',
            question: 'Um wie viel ___ beginnt der Kurs? (час)',
            correctAnswer: 'Uhr',
            points: 1,
          },
          {
            id: 'a1-4-2-ex10',
            type: 'translation',
            question: 'Переведите: Во сколько ты встаёшь?',
            correctAnswer: 'Um wie viel Uhr stehst du auf?',
            points: 2,
          },
        ],
      },
      {
        id: 3,
        moduleId: 4,
        level: 'a1',
        title: 'Отделяемые приставки',
        titleDe: 'Trennbare Verben',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'Глаголы с отделяемыми приставками',
        },
        exercises: [
          {
            id: 'a1-4-3-ex1',
            type: 'fill-blank',
            question: 'Ich stehe um 6 Uhr ___. (auf)',
            correctAnswer: 'auf',
            points: 1,
          },
          {
            id: 'a1-4-3-ex2',
            type: 'multiple-choice',
            question: 'Какой глагол с отделяемой приставкой?',
            options: ['verstehen', 'aufstehen', 'bestellen', 'gefallen'],
            correctAnswer: 'aufstehen',
            points: 1,
          },
          {
            id: 'a1-4-3-ex3',
            type: 'fill-blank',
            question: 'Der Film fängt um 8 Uhr ___. (начинаться)',
            correctAnswer: 'an',
            points: 1,
          },
          {
            id: 'a1-4-3-ex4',
            type: 'translation',
            question: 'Переведите: Она делает покупки в супермаркете.',
            correctAnswer: 'Sie kauft im Supermarkt ein.',
            points: 2,
          },
          {
            id: 'a1-4-3-ex5',
            type: 'matching',
            question: 'Соедините глаголы с переводом',
            options: ['aufstehen', 'einkaufen', 'fernsehen', 'anfangen'],
            correctAnswer: ['вставать', 'делать покупки', 'смотреть ТВ', 'начинать'],
            points: 4,
          },
          {
            id: 'a1-4-3-ex6',
            type: 'fill-blank',
            question: 'Wann rufst du mich ___? (звонить)',
            correctAnswer: 'an',
            points: 1,
          },
          {
            id: 'a1-4-3-ex7',
            type: 'multiple-choice',
            question: 'Выберите правильный порядок слов:',
            options: ['Ich aufstehe um 7 Uhr.', 'Ich stehe auf um 7 Uhr.', 'Ich stehe um 7 Uhr auf.', 'Auf ich stehe um 7 Uhr.'],
            correctAnswer: 'Ich stehe um 7 Uhr auf.',
            points: 1,
          },
          {
            id: 'a1-4-3-ex8',
            type: 'true-false',
            question: 'В глаголе "verstehen" приставка "ver-" отделяемая.',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Приставки be-, ge-, er-, ver-, ent-, emp-, miss- неотделяемые.',
            points: 1,
          },
          {
            id: 'a1-4-3-ex9',
            type: 'fill-blank',
            question: 'Er sieht jeden Abend ___. (ТВ)',
            correctAnswer: 'fern',
            points: 1,
          },
          {
            id: 'a1-4-3-ex10',
            type: 'translation',
            question: 'Переведите: Магазин открывается в 9 часов.',
            correctAnswer: 'Das Geschäft macht um 9 Uhr auf.',
            points: 2,
          },
        ],
      },
      {
        id: 4,
        moduleId: 4,
        level: 'a1',
        title: 'Дни недели',
        titleDe: 'Wochentage',
        type: 'vocabulary',
        duration: 15,
        content: {
          introduction: 'Выучим дни недели',
        },
        exercises: [
          {
            id: 'a1-4-4-ex1',
            type: 'matching',
            question: 'Соедините дни недели',
            options: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag'],
            correctAnswer: ['понедельник', 'вторник', 'среда', 'четверг'],
            points: 4,
          },
          {
            id: 'a1-4-4-ex2',
            type: 'multiple-choice',
            question: 'Какой день "Freitag"?',
            options: ['четверг', 'пятница', 'суббота', 'воскресенье'],
            correctAnswer: 'пятница',
            points: 1,
          },
          {
            id: 'a1-4-4-ex3',
            type: 'fill-blank',
            question: 'Am ___ gehe ich ins Kino. (в субботу)',
            correctAnswer: 'Samstag',
            points: 1,
          },
          {
            id: 'a1-4-4-ex4',
            type: 'translation',
            question: 'Переведите: воскресенье',
            correctAnswer: 'der Sonntag',
            points: 1,
          },
          {
            id: 'a1-4-4-ex5',
            type: 'multiple-choice',
            question: 'Какой предлог используется с днями недели?',
            options: ['in', 'an', 'auf', 'mit'],
            correctAnswer: 'an',
            points: 1,
          },
          {
            id: 'a1-4-4-ex6',
            type: 'matching',
            question: 'Выходные дни',
            options: ['Samstag', 'Sonntag', 'das Wochenende', 'der Werktag'],
            correctAnswer: ['суббота', 'воскресенье', 'выходные', 'будний день'],
            points: 4,
          },
          {
            id: 'a1-4-4-ex7',
            type: 'fill-blank',
            question: 'Was machst du am ___? (в понедельник)',
            correctAnswer: 'Montag',
            points: 1,
          },
          {
            id: 'a1-4-4-ex8',
            type: 'true-false',
            question: '"Mittwoch" — это середина недели (среда).',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Правда',
            points: 1,
          },
          {
            id: 'a1-4-4-ex9',
            type: 'translation',
            question: 'Переведите: Я работаю с понедельника по пятницу.',
            correctAnswer: 'Ich arbeite von Montag bis Freitag.',
            points: 2,
          },
          {
            id: 'a1-4-4-ex10',
            type: 'multiple-choice',
            question: 'Какой день идёт после Donnerstag?',
            options: ['Mittwoch', 'Freitag', 'Samstag', 'Dienstag'],
            correctAnswer: 'Freitag',
            points: 1,
          },
        ],
      },
      {
        id: 5,
        moduleId: 4,
        level: 'a1',
        title: 'Мини-тест',
        titleDe: 'Mini-Test',
        type: 'test',
        duration: 15,
        content: {
          introduction: 'Проверим знания по модулю 4',
        },
        exercises: [
          {
            id: 'a1-4-5-ex1',
            type: 'fill-blank',
            question: 'Ich stehe um 7 Uhr ___.',
            correctAnswer: 'auf',
            points: 1,
          },
          {
            id: 'a1-4-5-ex2',
            type: 'translation',
            question: 'Переведите: Который час?',
            correctAnswer: 'Wie spät ist es?',
            points: 2,
          },
          {
            id: 'a1-4-5-ex3',
            type: 'multiple-choice',
            question: 'Что означает "halb elf"?',
            options: ['11:30', '10:30', '10:00', '11:00'],
            correctAnswer: '10:30',
            points: 1,
          },
          {
            id: 'a1-4-5-ex4',
            type: 'fill-blank',
            question: 'Am ___ habe ich frei. (в воскресенье)',
            correctAnswer: 'Sonntag',
            points: 1,
          },
          {
            id: 'a1-4-5-ex5',
            type: 'translation',
            question: 'Переведите: Фильм начинается в 8 часов.',
            correctAnswer: 'Der Film fängt um 8 Uhr an.',
            points: 2,
          },
          {
            id: 'a1-4-5-ex6',
            type: 'matching',
            question: 'Распорядок дня',
            options: ['aufstehen', 'frühstücken', 'arbeiten', 'schlafen gehen'],
            correctAnswer: ['вставать', 'завтракать', 'работать', 'ложиться спать'],
            points: 4,
          },
          {
            id: 'a1-4-5-ex7',
            type: 'fill-blank',
            question: 'Um wie viel ___ fährt der Zug? (час)',
            correctAnswer: 'Uhr',
            points: 1,
          },
          {
            id: 'a1-4-5-ex8',
            type: 'multiple-choice',
            question: 'Какой день недели "Dienstag"?',
            options: ['понедельник', 'вторник', 'среда', 'четверг'],
            correctAnswer: 'вторник',
            points: 1,
          },
          {
            id: 'a1-4-5-ex9',
            type: 'fill-blank',
            question: 'Sie kauft im Supermarkt ___.',
            correctAnswer: 'ein',
            points: 1,
          },
          {
            id: 'a1-4-5-ex10',
            type: 'translation',
            question: 'Переведите: Я смотрю телевизор вечером.',
            correctAnswer: 'Ich sehe am Abend fern.',
            points: 2,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    level: 'a1',
    title: 'Жильё',
    titleDe: 'Wohnen',
    description: 'Квартира, мебель, предлоги места',
    vocabulary: a1Vocabulary.filter(w => w.tags?.includes('module-5')),
    grammar: [
      {
        id: 'a1-g5-1',
        level: 'a1',
        title: 'Предлоги места',
        titleDe: 'Lokale Präpositionen',
        description: 'in, auf, unter, neben, vor, hinter...',
        explanation: `
# Предлоги места (Lokale Präpositionen)

## Основные предлоги
| Предлог | Значение | Пример |
|---------|----------|--------|
| **in** | в | in der Küche (на кухне) |
| **auf** | на | auf dem Tisch (на столе) |
| **unter** | под | unter dem Bett (под кроватью) |
| **neben** | рядом с | neben dem Schrank (рядом со шкафом) |
| **vor** | перед | vor dem Haus (перед домом) |
| **hinter** | за | hinter dem Sofa (за диваном) |
| **über** | над | über dem Bild (над картиной) |
| **zwischen** | между | zwischen den Stühlen (между стульями) |

## Wo? (Где?) → Dativ
После этих предлогов используется Dativ:
- der → dem, die → der, das → dem
        `,
        examples: [
          { german: 'Die Lampe ist auf dem Tisch.', russian: 'Лампа на столе.' },
          { german: 'Das Buch liegt unter dem Bett.', russian: 'Книга лежит под кроватью.' },
          { german: 'Der Stuhl steht neben dem Schrank.', russian: 'Стул стоит рядом со шкафом.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 5,
        level: 'a1',
        title: 'Комнаты',
        titleDe: 'Die Zimmer',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Выучим названия комнат',
        },
        exercises: [
          {
            id: 'a1-5-1-ex1',
            type: 'matching',
            question: 'Соедините комнаты с переводом',
            options: ['die Küche', 'das Schlafzimmer', 'das Bad', 'das Wohnzimmer'],
            correctAnswer: ['кухня', 'спальня', 'ванная', 'гостиная'],
            points: 4,
          },
          {
            id: 'a1-5-1-ex2',
            type: 'multiple-choice',
            question: 'Где готовят еду?',
            options: ['im Schlafzimmer', 'in der Küche', 'im Bad', 'im Flur'],
            correctAnswer: 'in der Küche',
            points: 1,
          },
          {
            id: 'a1-5-1-ex3',
            type: 'fill-blank',
            question: 'Ich schlafe im ___. (спальня)',
            correctAnswer: 'Schlafzimmer',
            points: 1,
          },
          {
            id: 'a1-5-1-ex4',
            type: 'translation',
            question: 'Переведите: коридор',
            correctAnswer: 'der Flur',
            points: 1,
          },
          {
            id: 'a1-5-1-ex5',
            type: 'multiple-choice',
            question: 'Какой артикль у "Badezimmer"?',
            options: ['der', 'die', 'das', 'den'],
            correctAnswer: 'das',
            points: 1,
          },
          {
            id: 'a1-5-1-ex6',
            type: 'matching',
            question: 'Типы жилья',
            options: ['die Wohnung', 'das Haus', 'das Zimmer', 'der Balkon'],
            correctAnswer: ['квартира', 'дом', 'комната', 'балкон'],
            points: 4,
          },
          {
            id: 'a1-5-1-ex7',
            type: 'fill-blank',
            question: 'Wir sehen im ___ fern. (гостиная)',
            correctAnswer: 'Wohnzimmer',
            points: 1,
          },
          {
            id: 'a1-5-1-ex8',
            type: 'true-false',
            question: '"Der Keller" — это чердак.',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Der Keller — подвал. Чердак — der Dachboden.',
            points: 1,
          },
          {
            id: 'a1-5-1-ex9',
            type: 'translation',
            question: 'Переведите: Моя квартира большая.',
            correctAnswer: 'Meine Wohnung ist groß.',
            points: 2,
          },
          {
            id: 'a1-5-1-ex10',
            type: 'multiple-choice',
            question: 'Как сказать "туалет"?',
            options: ['das Bad', 'die Toilette', 'die Küche', 'der Flur'],
            correctAnswer: 'die Toilette',
            points: 1,
          },
        ],
      },
      {
        id: 2,
        moduleId: 5,
        level: 'a1',
        title: 'Мебель',
        titleDe: 'Die Möbel',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Выучим названия мебели',
        },
        exercises: [
          {
            id: 'a1-5-2-ex1',
            type: 'matching',
            question: 'Соедините мебель',
            options: ['der Tisch', 'der Stuhl', 'das Bett', 'der Schrank'],
            correctAnswer: ['стол', 'стул', 'кровать', 'шкаф'],
            points: 4,
          },
          {
            id: 'a1-5-2-ex2',
            type: 'multiple-choice',
            question: 'На чём сидят?',
            options: ['auf dem Tisch', 'auf dem Stuhl', 'auf dem Bett', 'auf dem Schrank'],
            correctAnswer: 'auf dem Stuhl',
            points: 1,
          },
          {
            id: 'a1-5-2-ex3',
            type: 'fill-blank',
            question: 'Die Lampe steht auf dem ___. (стол)',
            correctAnswer: 'Tisch',
            points: 1,
          },
          {
            id: 'a1-5-2-ex4',
            type: 'translation',
            question: 'Переведите: диван',
            correctAnswer: 'das Sofa',
            points: 1,
          },
          {
            id: 'a1-5-2-ex5',
            type: 'multiple-choice',
            question: 'Какой артикль у "Regal" (полка)?',
            options: ['der', 'die', 'das', 'den'],
            correctAnswer: 'das',
            points: 1,
          },
          {
            id: 'a1-5-2-ex6',
            type: 'matching',
            question: 'Ещё мебель',
            options: ['der Sessel', 'der Spiegel', 'der Teppich', 'die Lampe'],
            correctAnswer: ['кресло', 'зеркало', 'ковёр', 'лампа'],
            points: 4,
          },
          {
            id: 'a1-5-2-ex7',
            type: 'fill-blank',
            question: 'Das Bild hängt an der ___. (стена)',
            correctAnswer: 'Wand',
            points: 1,
          },
          {
            id: 'a1-5-2-ex8',
            type: 'true-false',
            question: '"Das Regal" — это полка.',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Правда',
            points: 1,
          },
          {
            id: 'a1-5-2-ex9',
            type: 'translation',
            question: 'Переведите: Книга на столе.',
            correctAnswer: 'Das Buch ist auf dem Tisch.',
            points: 2,
          },
          {
            id: 'a1-5-2-ex10',
            type: 'fill-blank',
            question: 'Die Kleidung ist im ___. (шкаф)',
            correctAnswer: 'Schrank',
            points: 1,
          },
        ],
      },
      {
        id: 3,
        moduleId: 5,
        level: 'a1',
        title: 'Предлоги места',
        titleDe: 'Lokale Präpositionen',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'Научимся описывать расположение предметов',
        },
        exercises: [
          {
            id: 'a1-5-3-ex1',
            type: 'multiple-choice',
            question: 'Выберите правильный предлог: "Die Katze sitzt ___ dem Tisch."',
            options: ['in', 'auf', 'unter', 'an'],
            correctAnswer: 'auf',
            points: 1,
          },
          {
            id: 'a1-5-3-ex2',
            type: 'fill-blank',
            question: 'Das Buch liegt ___ dem Bett. (под)',
            correctAnswer: 'unter',
            points: 1,
          },
          {
            id: 'a1-5-3-ex3',
            type: 'matching',
            question: 'Соедините предлоги',
            options: ['auf', 'unter', 'neben', 'vor'],
            correctAnswer: ['на', 'под', 'рядом с', 'перед'],
            points: 4,
          },
          {
            id: 'a1-5-3-ex4',
            type: 'fill-blank',
            question: 'Die Lampe hängt ___ dem Tisch. (над)',
            correctAnswer: 'über',
            points: 1,
          },
          {
            id: 'a1-5-3-ex5',
            type: 'translation',
            question: 'Переведите: Стул стоит рядом со столом.',
            correctAnswer: 'Der Stuhl steht neben dem Tisch.',
            points: 2,
          },
          {
            id: 'a1-5-3-ex6',
            type: 'multiple-choice',
            question: 'Wo ist die Katze? — ___ dem Sofa. (за)',
            options: ['vor', 'neben', 'hinter', 'unter'],
            correctAnswer: 'hinter',
            points: 1,
          },
          {
            id: 'a1-5-3-ex7',
            type: 'fill-blank',
            question: 'Der Teppich liegt ___ den Stühlen. (между)',
            correctAnswer: 'zwischen',
            points: 1,
          },
          {
            id: 'a1-5-3-ex8',
            type: 'true-false',
            question: 'После предлогов места с вопросом "Wo?" используется Akkusativ.',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'После "Wo?" используется Dativ, после "Wohin?" — Akkusativ.',
            points: 1,
          },
          {
            id: 'a1-5-3-ex9',
            type: 'translation',
            question: 'Переведите: Картина висит на стене.',
            correctAnswer: 'Das Bild hängt an der Wand.',
            points: 2,
          },
          {
            id: 'a1-5-3-ex10',
            type: 'fill-blank',
            question: 'Das Auto steht ___ dem Haus. (перед)',
            correctAnswer: 'vor',
            points: 1,
          },
        ],
      },
      {
        id: 4,
        moduleId: 5,
        level: 'a1',
        title: 'Описание квартиры',
        titleDe: 'Wohnungsbeschreibung',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Научимся описывать жильё',
        },
        exercises: [
          {
            id: 'a1-5-4-ex1',
            type: 'matching',
            question: 'Характеристики жилья',
            options: ['groß', 'klein', 'hell', 'dunkel'],
            correctAnswer: ['большой', 'маленький', 'светлый', 'тёмный'],
            points: 4,
          },
          {
            id: 'a1-5-4-ex2',
            type: 'multiple-choice',
            question: 'Как спросить "Сколько комнат?"',
            options: ['Wie viele Zimmer hat die Wohnung?', 'Was Zimmer hat die Wohnung?', 'Wo sind die Zimmer?', 'Wann Zimmer?'],
            correctAnswer: 'Wie viele Zimmer hat die Wohnung?',
            points: 1,
          },
          {
            id: 'a1-5-4-ex3',
            type: 'fill-blank',
            question: 'Die Wohnung hat drei ___. (комнаты)',
            correctAnswer: 'Zimmer',
            points: 1,
          },
          {
            id: 'a1-5-4-ex4',
            type: 'translation',
            question: 'Переведите: Квартира очень светлая.',
            correctAnswer: 'Die Wohnung ist sehr hell.',
            points: 2,
          },
          {
            id: 'a1-5-4-ex5',
            type: 'multiple-choice',
            question: 'Как сказать "аренда/арендная плата"?',
            options: ['die Miete', 'das Geld', 'der Preis', 'die Kosten'],
            correctAnswer: 'die Miete',
            points: 1,
          },
          {
            id: 'a1-5-4-ex6',
            type: 'fill-blank',
            question: 'Die ___ kostet 800 Euro. (аренда)',
            correctAnswer: 'Miete',
            points: 1,
          },
          {
            id: 'a1-5-4-ex7',
            type: 'matching',
            question: 'Удобства',
            options: ['der Aufzug', 'der Garten', 'die Garage', 'die Heizung'],
            correctAnswer: ['лифт', 'сад', 'гараж', 'отопление'],
            points: 4,
          },
          {
            id: 'a1-5-4-ex8',
            type: 'true-false',
            question: '"Möbliert" означает "без мебели".',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Möbliert — с мебелью. Без мебели — unmöbliert.',
            points: 1,
          },
          {
            id: 'a1-5-4-ex9',
            type: 'translation',
            question: 'Переведите: Я ищу квартиру.',
            correctAnswer: 'Ich suche eine Wohnung.',
            points: 2,
          },
          {
            id: 'a1-5-4-ex10',
            type: 'fill-blank',
            question: 'Die Wohnung ist im dritten ___. (этаж)',
            correctAnswer: 'Stock',
            points: 1,
          },
        ],
      },
      {
        id: 5,
        moduleId: 5,
        level: 'a1',
        title: 'Мини-тест',
        titleDe: 'Mini-Test',
        type: 'test',
        duration: 15,
        content: {
          introduction: 'Проверим знания по модулю 5',
        },
        exercises: [
          {
            id: 'a1-5-5-ex1',
            type: 'fill-blank',
            question: 'Die Lampe steht ___ dem Tisch. (на)',
            correctAnswer: 'auf',
            points: 1,
          },
          {
            id: 'a1-5-5-ex2',
            type: 'translation',
            question: 'Переведите: Моя квартира имеет три комнаты.',
            correctAnswer: 'Meine Wohnung hat drei Zimmer.',
            points: 2,
          },
          {
            id: 'a1-5-5-ex3',
            type: 'matching',
            question: 'Комнаты',
            options: ['die Küche', 'das Schlafzimmer', 'das Bad', 'der Flur'],
            correctAnswer: ['кухня', 'спальня', 'ванная', 'коридор'],
            points: 4,
          },
          {
            id: 'a1-5-5-ex4',
            type: 'fill-blank',
            question: 'Das Buch liegt ___ dem Bett. (под)',
            correctAnswer: 'unter',
            points: 1,
          },
          {
            id: 'a1-5-5-ex5',
            type: 'multiple-choice',
            question: 'Где готовят еду?',
            options: ['im Schlafzimmer', 'in der Küche', 'im Wohnzimmer', 'im Flur'],
            correctAnswer: 'in der Küche',
            points: 1,
          },
          {
            id: 'a1-5-5-ex6',
            type: 'translation',
            question: 'Переведите: стол и стул',
            correctAnswer: 'der Tisch und der Stuhl',
            points: 2,
          },
          {
            id: 'a1-5-5-ex7',
            type: 'fill-blank',
            question: 'Der Schrank steht ___ dem Bett. (рядом)',
            correctAnswer: 'neben',
            points: 1,
          },
          {
            id: 'a1-5-5-ex8',
            type: 'multiple-choice',
            question: 'Какой артикль у "Sofa"?',
            options: ['der', 'die', 'das', 'den'],
            correctAnswer: 'das',
            points: 1,
          },
          {
            id: 'a1-5-5-ex9',
            type: 'fill-blank',
            question: 'Die Wohnung ist sehr ___. (светлая)',
            correctAnswer: 'hell',
            points: 1,
          },
          {
            id: 'a1-5-5-ex10',
            type: 'translation',
            question: 'Переведите: Картина висит над диваном.',
            correctAnswer: 'Das Bild hängt über dem Sofa.',
            points: 2,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    level: 'a1',
    title: 'Свободное время',
    titleDe: 'Freizeit',
    description: 'Хобби, спорт, gern/lieber',
    vocabulary: a1Vocabulary.filter(w => w.tags?.includes('module-6')),
    grammar: [
      {
        id: 'a1-g6-1',
        level: 'a1',
        title: 'Gern и lieber',
        titleDe: 'Gern und lieber',
        description: 'Выражение предпочтений',
        explanation: `
# Gern и lieber — выражение предпочтений

## Gern (охотно, с удовольствием)
Ставится после глагола:
- Ich **spiele gern** Fußball. (Я люблю играть в футбол.)
- Sie **liest gern** Bücher. (Она любит читать книги.)

## Lieber (больше, предпочтительнее)
Сравнительная степень от gern:
- Ich spiele **lieber** Tennis. (Я больше люблю теннис.)

## Порядок предпочтений
1. gern → lieber → am liebsten
- Ich höre gern Musik. (мне нравится)
- Ich höre lieber Rock. (больше нравится)
- Am liebsten höre ich Jazz. (больше всего)
        `,
        examples: [
          { german: 'Ich schwimme gern.', russian: 'Я люблю плавать.' },
          { german: 'Ich spiele lieber Fußball.', russian: 'Я больше люблю играть в футбол.' },
          { german: 'Am liebsten lese ich Krimis.', russian: 'Больше всего я люблю читать детективы.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 6,
        level: 'a1',
        title: 'Хобби',
        titleDe: 'Hobbys',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Выучим названия хобби',
        },
        exercises: [
          {
            id: 'a1-6-1-ex1',
            type: 'matching',
            question: 'Соедините хобби',
            options: ['lesen', 'schwimmen', 'kochen', 'tanzen'],
            correctAnswer: ['читать', 'плавать', 'готовить', 'танцевать'],
            points: 4,
          },
          {
            id: 'a1-6-1-ex2',
            type: 'multiple-choice',
            question: 'Как спросить "Какие у тебя хобби?"',
            options: ['Was machst du?', 'Was sind deine Hobbys?', 'Wer bist du?', 'Wo wohnst du?'],
            correctAnswer: 'Was sind deine Hobbys?',
            points: 1,
          },
          {
            id: 'a1-6-1-ex3',
            type: 'fill-blank',
            question: 'Mein Hobby ist ___. (музыка)',
            correctAnswer: 'Musik',
            points: 1,
          },
          {
            id: 'a1-6-1-ex4',
            type: 'translation',
            question: 'Переведите: Я люблю читать.',
            correctAnswer: 'Ich lese gern.',
            points: 2,
          },
          {
            id: 'a1-6-1-ex5',
            type: 'multiple-choice',
            question: 'Что означает "malen"?',
            options: ['петь', 'рисовать', 'танцевать', 'играть'],
            correctAnswer: 'рисовать',
            points: 1,
          },
          {
            id: 'a1-6-1-ex6',
            type: 'matching',
            question: 'Ещё хобби',
            options: ['fotografieren', 'reisen', 'Musik hören', 'Filme sehen'],
            correctAnswer: ['фотографировать', 'путешествовать', 'слушать музыку', 'смотреть фильмы'],
            points: 4,
          },
          {
            id: 'a1-6-1-ex7',
            type: 'fill-blank',
            question: 'Sie ___ gern. (готовит)',
            correctAnswer: 'kocht',
            points: 1,
          },
          {
            id: 'a1-6-1-ex8',
            type: 'true-false',
            question: '"Wandern" означает "бегать".',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Wandern — ходить в походы. Бегать — laufen/joggen.',
            points: 1,
          },
          {
            id: 'a1-6-1-ex9',
            type: 'translation',
            question: 'Переведите: В свободное время я играю на гитаре.',
            correctAnswer: 'In meiner Freizeit spiele ich Gitarre.',
            points: 2,
          },
          {
            id: 'a1-6-1-ex10',
            type: 'fill-blank',
            question: 'Ich ___ gern Filme. (смотреть)',
            correctAnswer: 'sehe',
            points: 1,
          },
        ],
      },
      {
        id: 2,
        moduleId: 6,
        level: 'a1',
        title: 'Спорт',
        titleDe: 'Sport',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Выучим виды спорта',
        },
        exercises: [
          {
            id: 'a1-6-2-ex1',
            type: 'matching',
            question: 'Виды спорта',
            options: ['Fußball', 'Tennis', 'Schwimmen', 'Volleyball'],
            correctAnswer: ['футбол', 'теннис', 'плавание', 'волейбол'],
            points: 4,
          },
          {
            id: 'a1-6-2-ex2',
            type: 'multiple-choice',
            question: 'Какой глагол используется со спортом?',
            options: ['machen', 'spielen или machen', 'gehen', 'haben'],
            correctAnswer: 'spielen или machen',
            points: 1,
          },
          {
            id: 'a1-6-2-ex3',
            type: 'fill-blank',
            question: 'Ich ___ gern Fußball. (играть)',
            correctAnswer: 'spiele',
            points: 1,
          },
          {
            id: 'a1-6-2-ex4',
            type: 'translation',
            question: 'Переведите: Она занимается йогой.',
            correctAnswer: 'Sie macht Yoga.',
            points: 2,
          },
          {
            id: 'a1-6-2-ex5',
            type: 'multiple-choice',
            question: 'Как сказать "бег"?',
            options: ['das Schwimmen', 'das Laufen', 'das Tanzen', 'das Spielen'],
            correctAnswer: 'das Laufen',
            points: 1,
          },
          {
            id: 'a1-6-2-ex6',
            type: 'matching',
            question: 'Ещё спорт',
            options: ['Basketball', 'Ski fahren', 'Rad fahren', 'Joggen'],
            correctAnswer: ['баскетбол', 'кататься на лыжах', 'кататься на велосипеде', 'бегать'],
            points: 4,
          },
          {
            id: 'a1-6-2-ex7',
            type: 'fill-blank',
            question: 'Er ___ jeden Tag ins Fitnessstudio. (ходить)',
            correctAnswer: 'geht',
            points: 1,
          },
          {
            id: 'a1-6-2-ex8',
            type: 'true-false',
            question: 'С "Fußball spielen" используется артикль.',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Fußball spielen — без артикля.',
            points: 1,
          },
          {
            id: 'a1-6-2-ex9',
            type: 'translation',
            question: 'Переведите: Зимой я катаюсь на лыжах.',
            correctAnswer: 'Im Winter fahre ich Ski.',
            points: 2,
          },
          {
            id: 'a1-6-2-ex10',
            type: 'fill-blank',
            question: 'Wir ___ gern Volleyball. (играем)',
            correctAnswer: 'spielen',
            points: 1,
          },
        ],
      },
      {
        id: 3,
        moduleId: 6,
        level: 'a1',
        title: 'Gern и lieber',
        titleDe: 'Gern und lieber',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'Научимся выражать предпочтения',
        },
        exercises: [
          {
            id: 'a1-6-3-ex1',
            type: 'fill-blank',
            question: 'Ich lese ___ Bücher. (с удовольствием)',
            correctAnswer: 'gern',
            points: 1,
          },
          {
            id: 'a1-6-3-ex2',
            type: 'multiple-choice',
            question: 'Где стоит "gern" в предложении?',
            options: ['в начале', 'после глагола', 'в конце', 'перед субъектом'],
            correctAnswer: 'после глагола',
            points: 1,
          },
          {
            id: 'a1-6-3-ex3',
            type: 'translation',
            question: 'Переведите: Я больше люблю плавать.',
            correctAnswer: 'Ich schwimme lieber.',
            points: 2,
          },
          {
            id: 'a1-6-3-ex4',
            type: 'fill-blank',
            question: 'Am ___ esse ich Pizza. (больше всего)',
            correctAnswer: 'liebsten',
            points: 1,
          },
          {
            id: 'a1-6-3-ex5',
            type: 'matching',
            question: 'Степени сравнения',
            options: ['gern', 'lieber', 'am liebsten'],
            correctAnswer: ['охотно', 'охотнее', 'охотнее всего'],
            points: 3,
          },
          {
            id: 'a1-6-3-ex6',
            type: 'multiple-choice',
            question: 'Выберите правильный порядок слов:',
            options: ['Ich gern spiele Tennis.', 'Ich spiele gern Tennis.', 'Gern ich spiele Tennis.', 'Tennis spiele ich gern.'],
            correctAnswer: 'Ich spiele gern Tennis.',
            points: 1,
          },
          {
            id: 'a1-6-3-ex7',
            type: 'fill-blank',
            question: 'Sie hört ___ Musik als Podcasts. (больше)',
            correctAnswer: 'lieber',
            points: 1,
          },
          {
            id: 'a1-6-3-ex8',
            type: 'true-false',
            question: '"Lieber" — превосходная степень от "gern".',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Lieber — сравнительная. Превосходная — am liebsten.',
            points: 1,
          },
          {
            id: 'a1-6-3-ex9',
            type: 'translation',
            question: 'Переведите: Что ты любишь делать?',
            correctAnswer: 'Was machst du gern?',
            points: 2,
          },
          {
            id: 'a1-6-3-ex10',
            type: 'fill-blank',
            question: 'Er trinkt ___ Kaffee als Tee. (больше)',
            correctAnswer: 'lieber',
            points: 1,
          },
        ],
      },
      {
        id: 4,
        moduleId: 6,
        level: 'a1',
        title: 'Планы на выходные',
        titleDe: 'Wochenendpläne',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Научимся говорить о планах',
        },
        exercises: [
          {
            id: 'a1-6-4-ex1',
            type: 'matching',
            question: 'Активности',
            options: ['ins Kino gehen', 'Freunde treffen', 'einkaufen gehen', 'zu Hause bleiben'],
            correctAnswer: ['пойти в кино', 'встретиться с друзьями', 'пойти за покупками', 'остаться дома'],
            points: 4,
          },
          {
            id: 'a1-6-4-ex2',
            type: 'multiple-choice',
            question: 'Как спросить "Что ты делаешь в субботу?"',
            options: ['Was machst du am Samstag?', 'Wo bist du am Samstag?', 'Wer kommt am Samstag?', 'Wann ist Samstag?'],
            correctAnswer: 'Was machst du am Samstag?',
            points: 1,
          },
          {
            id: 'a1-6-4-ex3',
            type: 'fill-blank',
            question: 'Am Wochenende ___ ich meine Eltern. (навещать)',
            correctAnswer: 'besuche',
            points: 1,
          },
          {
            id: 'a1-6-4-ex4',
            type: 'translation',
            question: 'Переведите: Давай пойдём в ресторан!',
            correctAnswer: 'Lass uns ins Restaurant gehen!',
            points: 2,
          },
          {
            id: 'a1-6-4-ex5',
            type: 'multiple-choice',
            question: 'Как предложить что-то?',
            options: ['Ich will...', 'Wollen wir...?', 'Du musst...', 'Ich kann...'],
            correctAnswer: 'Wollen wir...?',
            points: 1,
          },
          {
            id: 'a1-6-4-ex6',
            type: 'fill-blank',
            question: '___ wir zusammen kochen? (хотим)',
            correctAnswer: 'Wollen',
            points: 1,
          },
          {
            id: 'a1-6-4-ex7',
            type: 'matching',
            question: 'Места',
            options: ['das Kino', 'das Theater', 'das Museum', 'der Park'],
            correctAnswer: ['кино', 'театр', 'музей', 'парк'],
            points: 4,
          },
          {
            id: 'a1-6-4-ex8',
            type: 'true-false',
            question: '"Hast du Lust?" означает "Ты голоден?".',
            options: ['Правда', 'Ложь'],
            correctAnswer: 'Ложь',
            explanation: 'Hast du Lust? — У тебя есть желание?/Хочешь?',
            points: 1,
          },
          {
            id: 'a1-6-4-ex9',
            type: 'translation',
            question: 'Переведите: Мне нужно работать в субботу.',
            correctAnswer: 'Ich muss am Samstag arbeiten.',
            points: 2,
          },
          {
            id: 'a1-6-4-ex10',
            type: 'fill-blank',
            question: 'Hast du ___ ins Kino zu gehen? (желание)',
            correctAnswer: 'Lust',
            points: 1,
          },
        ],
      },
      {
        id: 5,
        moduleId: 6,
        level: 'a1',
        title: 'Мини-тест',
        titleDe: 'Mini-Test',
        type: 'test',
        duration: 15,
        content: {
          introduction: 'Проверим знания по модулю 6',
        },
        exercises: [
          {
            id: 'a1-6-5-ex1',
            type: 'fill-blank',
            question: 'Ich spiele ___ Tennis. (с удовольствием)',
            correctAnswer: 'gern',
            points: 1,
          },
          {
            id: 'a1-6-5-ex2',
            type: 'translation',
            question: 'Переведите: Какие у тебя хобби?',
            correctAnswer: 'Was sind deine Hobbys?',
            points: 2,
          },
          {
            id: 'a1-6-5-ex3',
            type: 'matching',
            question: 'Хобби',
            options: ['lesen', 'schwimmen', 'kochen', 'reisen'],
            correctAnswer: ['читать', 'плавать', 'готовить', 'путешествовать'],
            points: 4,
          },
          {
            id: 'a1-6-5-ex4',
            type: 'fill-blank',
            question: 'Er spielt ___ Fußball als Basketball. (больше)',
            correctAnswer: 'lieber',
            points: 1,
          },
          {
            id: 'a1-6-5-ex5',
            type: 'translation',
            question: 'Переведите: Давай пойдём в кино!',
            correctAnswer: 'Lass uns ins Kino gehen!',
            points: 2,
          },
          {
            id: 'a1-6-5-ex6',
            type: 'multiple-choice',
            question: 'Что означает "wandern"?',
            options: ['бегать', 'плавать', 'ходить в походы', 'танцевать'],
            correctAnswer: 'ходить в походы',
            points: 1,
          },
          {
            id: 'a1-6-5-ex7',
            type: 'fill-blank',
            question: 'Am ___ höre ich Jazz. (больше всего)',
            correctAnswer: 'liebsten',
            points: 1,
          },
          {
            id: 'a1-6-5-ex8',
            type: 'multiple-choice',
            question: 'Как предложить пойти куда-то?',
            options: ['Du musst gehen.', 'Ich gehe.', 'Wollen wir gehen?', 'Er geht.'],
            correctAnswer: 'Wollen wir gehen?',
            points: 1,
          },
          {
            id: 'a1-6-5-ex9',
            type: 'fill-blank',
            question: 'Sie ___ gern Yoga. (делает)',
            correctAnswer: 'macht',
            points: 1,
          },
          {
            id: 'a1-6-5-ex10',
            type: 'translation',
            question: 'Переведите: В свободное время я читаю книги.',
            correctAnswer: 'In meiner Freizeit lese ich Bücher.',
            points: 2,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    level: 'a1',
    title: 'Покупки',
    titleDe: 'Einkaufen',
    description: 'Магазины, одежда, числительные',
    vocabulary: a1Vocabulary.filter(w => w.tags?.includes('module-7')),
    grammar: [
      {
        id: 'a1-g7-1',
        level: 'a1',
        title: 'Числительные',
        titleDe: 'Zahlen',
        description: '1-100 и дальше',
        explanation: `
# Числительные (Zahlen)

## 1-12
eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf

## 13-19: -zehn
dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn

## 20-90: -zig
zwanzig, dreißig, vierzig, fünfzig, sechzig, siebzig, achtzig, neunzig

## 21-99: единицы + und + десятки
**einundzwanzig** (21), **zweiunddreißig** (32)

## 100+
hundert, zweihundert... tausend
        `,
        examples: [
          { german: 'Das kostet fünfzehn Euro.', russian: 'Это стоит 15 евро.' },
          { german: 'Ich bin einundzwanzig Jahre alt.', russian: 'Мне 21 год.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 7,
        level: 'a1',
        title: 'Магазины',
        titleDe: 'Geschäfte',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Выучим названия магазинов' },
        exercises: [
          { id: 'a1-7-1-ex1', type: 'matching', question: 'Типы магазинов', options: ['der Supermarkt', 'die Bäckerei', 'die Apotheke', 'das Kaufhaus'], correctAnswer: ['супермаркет', 'пекарня', 'аптека', 'универмаг'], points: 4 },
          { id: 'a1-7-1-ex2', type: 'multiple-choice', question: 'Где покупают хлеб?', options: ['in der Apotheke', 'in der Bäckerei', 'im Supermarkt', 'in der Metzgerei'], correctAnswer: 'in der Bäckerei', points: 1 },
          { id: 'a1-7-1-ex3', type: 'fill-blank', question: 'Ich gehe in den ___. (супермаркет)', correctAnswer: 'Supermarkt', points: 1 },
          { id: 'a1-7-1-ex4', type: 'translation', question: 'Переведите: Мясной магазин', correctAnswer: 'die Metzgerei', points: 1 },
          { id: 'a1-7-1-ex5', type: 'multiple-choice', question: 'Где покупают лекарства?', options: ['in der Bäckerei', 'im Supermarkt', 'in der Apotheke', 'im Kaufhaus'], correctAnswer: 'in der Apotheke', points: 1 },
          { id: 'a1-7-1-ex6', type: 'matching', question: 'Ещё магазины', options: ['der Markt', 'der Buchladen', 'das Schuhgeschäft', 'der Kiosk'], correctAnswer: ['рынок', 'книжный магазин', 'обувной магазин', 'киоск'], points: 4 },
          { id: 'a1-7-1-ex7', type: 'fill-blank', question: 'Die ___ ist um 18 Uhr geschlossen. (аптека)', correctAnswer: 'Apotheke', points: 1 },
          { id: 'a1-7-1-ex8', type: 'true-false', question: '"Die Drogerie" — это аптека.', options: ['Правда', 'Ложь'], correctAnswer: 'Ложь', explanation: 'Drogerie — магазин косметики/бытовой химии.', points: 1 },
          { id: 'a1-7-1-ex9', type: 'translation', question: 'Переведите: Магазин открыт.', correctAnswer: 'Das Geschäft ist geöffnet.', points: 2 },
          { id: 'a1-7-1-ex10', type: 'fill-blank', question: 'Der Supermarkt ist ___ 20 Uhr geöffnet. (до)', correctAnswer: 'bis', points: 1 },
        ],
      },
      {
        id: 2,
        moduleId: 7,
        level: 'a1',
        title: 'Одежда',
        titleDe: 'Kleidung',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Выучим названия одежды' },
        exercises: [
          { id: 'a1-7-2-ex1', type: 'matching', question: 'Одежда', options: ['das Hemd', 'die Hose', 'der Rock', 'das Kleid'], correctAnswer: ['рубашка', 'брюки', 'юбка', 'платье'], points: 4 },
          { id: 'a1-7-2-ex2', type: 'multiple-choice', question: 'Какой артикль у "Jacke"?', options: ['der', 'die', 'das', 'den'], correctAnswer: 'die', points: 1 },
          { id: 'a1-7-2-ex3', type: 'fill-blank', question: 'Die ___ ist zu groß. (рубашка)', correctAnswer: 'Hemd', points: 1 },
          { id: 'a1-7-2-ex4', type: 'translation', question: 'Переведите: туфли', correctAnswer: 'die Schuhe', points: 1 },
          { id: 'a1-7-2-ex5', type: 'multiple-choice', question: 'Как спросить "Какой у вас размер?"', options: ['Welche Größe haben Sie?', 'Was kostet das?', 'Wo ist das?', 'Wie heißt das?'], correctAnswer: 'Welche Größe haben Sie?', points: 1 },
          { id: 'a1-7-2-ex6', type: 'matching', question: 'Ещё одежда', options: ['der Pullover', 'der Mantel', 'die Socken', 'der Anzug'], correctAnswer: ['свитер', 'пальто', 'носки', 'костюм'], points: 4 },
          { id: 'a1-7-2-ex7', type: 'fill-blank', question: 'Kann ich die Hose ___? (примерить)', correctAnswer: 'anprobieren', points: 1 },
          { id: 'a1-7-2-ex8', type: 'true-false', question: '"Die Jeans" — это слово в единственном числе.', options: ['Правда', 'Ложь'], correctAnswer: 'Правда', points: 1 },
          { id: 'a1-7-2-ex9', type: 'translation', question: 'Переведите: Это слишком дорого.', correctAnswer: 'Das ist zu teuer.', points: 2 },
          { id: 'a1-7-2-ex10', type: 'fill-blank', question: 'Die Jacke ___ mir gut. (подходит)', correctAnswer: 'passt', points: 1 },
        ],
      },
      {
        id: 3,
        moduleId: 7,
        level: 'a1',
        title: 'Числа и цены',
        titleDe: 'Zahlen und Preise',
        type: 'grammar',
        duration: 25,
        content: { introduction: 'Научимся называть числа и цены' },
        exercises: [
          { id: 'a1-7-3-ex1', type: 'fill-blank', question: '15 = fünf___', correctAnswer: 'zehn', points: 1 },
          { id: 'a1-7-3-ex2', type: 'multiple-choice', question: 'Как сказать 21?', options: ['zwanzigseins', 'einundzwanzig', 'zweinsig', 'einzwanzig'], correctAnswer: 'einundzwanzig', points: 1 },
          { id: 'a1-7-3-ex3', type: 'translation', question: 'Переведите: 45 евро', correctAnswer: 'fünfundvierzig Euro', points: 2 },
          { id: 'a1-7-3-ex4', type: 'fill-blank', question: '30 = drei___', correctAnswer: 'ßig', points: 1 },
          { id: 'a1-7-3-ex5', type: 'matching', question: 'Числа', options: ['zwölf', 'siebzehn', 'dreißig', 'hundert'], correctAnswer: ['12', '17', '30', '100'], points: 4 },
          { id: 'a1-7-3-ex6', type: 'multiple-choice', question: 'Как спросить "Сколько это стоит?"', options: ['Was kostet das?', 'Wie ist das?', 'Wo kostet das?', 'Wer kostet das?'], correctAnswer: 'Was kostet das?', points: 1 },
          { id: 'a1-7-3-ex7', type: 'fill-blank', question: 'Das kostet ___ Euro. (99)', correctAnswer: 'neunundneunzig', points: 1 },
          { id: 'a1-7-3-ex8', type: 'true-false', question: '16 — это "sechszehn".', options: ['Правда', 'Ложь'], correctAnswer: 'Правда', points: 1 },
          { id: 'a1-7-3-ex9', type: 'translation', question: 'Переведите: Это стоит 25 евро.', correctAnswer: 'Das kostet fünfundzwanzig Euro.', points: 2 },
          { id: 'a1-7-3-ex10', type: 'fill-blank', question: 'Ich nehme ___. (это)', correctAnswer: 'das', points: 1 },
        ],
      },
      {
        id: 4,
        moduleId: 7,
        level: 'a1',
        title: 'Диалоги в магазине',
        titleDe: 'Im Geschäft',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Фразы для покупок' },
        exercises: [
          { id: 'a1-7-4-ex1', type: 'matching', question: 'Фразы', options: ['Kann ich Ihnen helfen?', 'Ich schaue nur.', 'Das nehme ich.', 'Kann ich bar zahlen?'], correctAnswer: ['Могу я вам помочь?', 'Я только смотрю.', 'Я это возьму.', 'Можно заплатить наличными?'], points: 4 },
          { id: 'a1-7-4-ex2', type: 'multiple-choice', question: 'Как попросить скидку?', options: ['Gibt es einen Rabatt?', 'Was ist das?', 'Wo ist die Kasse?', 'Wie heißen Sie?'], correctAnswer: 'Gibt es einen Rabatt?', points: 1 },
          { id: 'a1-7-4-ex3', type: 'fill-blank', question: 'Wo ist die ___? (касса)', correctAnswer: 'Kasse', points: 1 },
          { id: 'a1-7-4-ex4', type: 'translation', question: 'Переведите: Можно платить картой?', correctAnswer: 'Kann ich mit Karte zahlen?', points: 2 },
          { id: 'a1-7-4-ex5', type: 'multiple-choice', question: 'Как сказать "слишком маленький"?', options: ['zu groß', 'zu klein', 'zu teuer', 'zu billig'], correctAnswer: 'zu klein', points: 1 },
          { id: 'a1-7-4-ex6', type: 'fill-blank', question: 'Haben Sie das in ___? (другом цвете)', correctAnswer: 'einer anderen Farbe', points: 1 },
          { id: 'a1-7-4-ex7', type: 'matching', question: 'Цвета', options: ['rot', 'blau', 'grün', 'schwarz'], correctAnswer: ['красный', 'синий', 'зелёный', 'чёрный'], points: 4 },
          { id: 'a1-7-4-ex8', type: 'true-false', question: '"Der Kassenbon" — это чек.', options: ['Правда', 'Ложь'], correctAnswer: 'Правда', points: 1 },
          { id: 'a1-7-4-ex9', type: 'translation', question: 'Переведите: Я хотел бы это вернуть.', correctAnswer: 'Ich möchte das zurückgeben.', points: 2 },
          { id: 'a1-7-4-ex10', type: 'fill-blank', question: 'Das ist im ___. (на распродаже)', correctAnswer: 'Angebot', points: 1 },
        ],
      },
      {
        id: 5,
        moduleId: 7,
        level: 'a1',
        title: 'Мини-тест',
        titleDe: 'Mini-Test',
        type: 'test',
        duration: 15,
        content: { introduction: 'Проверим знания по модулю 7' },
        exercises: [
          { id: 'a1-7-5-ex1', type: 'fill-blank', question: 'Das kostet ___ Euro. (35)', correctAnswer: 'fünfunddreißig', points: 1 },
          { id: 'a1-7-5-ex2', type: 'translation', question: 'Переведите: Где пекарня?', correctAnswer: 'Wo ist die Bäckerei?', points: 2 },
          { id: 'a1-7-5-ex3', type: 'matching', question: 'Одежда', options: ['das Hemd', 'die Hose', 'die Jacke', 'die Schuhe'], correctAnswer: ['рубашка', 'брюки', 'куртка', 'туфли'], points: 4 },
          { id: 'a1-7-5-ex4', type: 'fill-blank', question: 'Kann ich das ___? (примерить)', correctAnswer: 'anprobieren', points: 1 },
          { id: 'a1-7-5-ex5', type: 'multiple-choice', question: 'Как спросить цену?', options: ['Was kostet das?', 'Wo ist das?', 'Wie ist das?', 'Wer ist das?'], correctAnswer: 'Was kostet das?', points: 1 },
          { id: 'a1-7-5-ex6', type: 'translation', question: 'Переведите: Это слишком дорого.', correctAnswer: 'Das ist zu teuer.', points: 2 },
          { id: 'a1-7-5-ex7', type: 'fill-blank', question: 'Ich zahle ___. (наличными)', correctAnswer: 'bar', points: 1 },
          { id: 'a1-7-5-ex8', type: 'multiple-choice', question: '67 — это:', options: ['sechsundsiebzig', 'siebundsechzig', 'siebenundsechzig', 'sechzig sieben'], correctAnswer: 'siebenundsechzig', points: 1 },
          { id: 'a1-7-5-ex9', type: 'fill-blank', question: 'Die Größe ___ mir nicht. (не подходит)', correctAnswer: 'passt', points: 1 },
          { id: 'a1-7-5-ex10', type: 'translation', question: 'Переведите: Где касса?', correctAnswer: 'Wo ist die Kasse?', points: 2 },
        ],
      },
    ],
  },
  {
    id: 8,
    level: 'a1',
    title: 'Назначение встреч',
    titleDe: 'Termine',
    description: 'Дни недели, месяцы, договорённости',
    vocabulary: a1Vocabulary.filter(w => w.tags?.includes('module-8')),
    grammar: [
      {
        id: 'a1-g8-1',
        level: 'a1',
        title: 'Модальные глаголы',
        titleDe: 'Modalverben',
        description: 'können, müssen, wollen',
        explanation: `
# Модальные глаголы

| | können (мочь) | müssen (должен) | wollen (хотеть) |
|---|---|---|---|
| ich | kann | muss | will |
| du | kannst | musst | willst |
| er/sie | kann | muss | will |
| wir | können | müssen | wollen |
| ihr | könnt | müsst | wollt |
| sie/Sie | können | müssen | wollen |

Основной глагол идёт в конец в инфинитиве:
**Ich kann** heute nicht **kommen**.
        `,
        examples: [
          { german: 'Ich kann morgen kommen.', russian: 'Я могу прийти завтра.' },
          { german: 'Du musst zum Arzt gehen.', russian: 'Тебе нужно к врачу.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 8,
        level: 'a1',
        title: 'Месяцы и даты',
        titleDe: 'Monate und Datum',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Выучим месяцы и даты' },
        exercises: [
          { id: 'a1-8-1-ex1', type: 'matching', question: 'Месяцы', options: ['Januar', 'April', 'Juli', 'Oktober'], correctAnswer: ['январь', 'апрель', 'июль', 'октябрь'], points: 4 },
          { id: 'a1-8-1-ex2', type: 'multiple-choice', question: 'Как спросить "Какое сегодня число?"', options: ['Welches Datum ist heute?', 'Was ist heute?', 'Wann ist heute?', 'Wo ist heute?'], correctAnswer: 'Welches Datum ist heute?', points: 1 },
          { id: 'a1-8-1-ex3', type: 'fill-blank', question: 'Heute ist der erste ___. (январь)', correctAnswer: 'Januar', points: 1 },
          { id: 'a1-8-1-ex4', type: 'translation', question: 'Переведите: 15 марта', correctAnswer: 'der fünfzehnte März', points: 2 },
          { id: 'a1-8-1-ex5', type: 'multiple-choice', question: 'Какой месяц идёт после Mai?', options: ['April', 'Juni', 'Juli', 'März'], correctAnswer: 'Juni', points: 1 },
          { id: 'a1-8-1-ex6', type: 'matching', question: 'Ещё месяцы', options: ['Februar', 'Mai', 'August', 'November'], correctAnswer: ['февраль', 'май', 'август', 'ноябрь'], points: 4 },
          { id: 'a1-8-1-ex7', type: 'fill-blank', question: 'Im ___ ist es warm. (июль)', correctAnswer: 'Juli', points: 1 },
          { id: 'a1-8-1-ex8', type: 'true-false', question: '"Der dritte" означает "третье (число)".', options: ['Правда', 'Ложь'], correctAnswer: 'Правда', points: 1 },
          { id: 'a1-8-1-ex9', type: 'translation', question: 'Переведите: Мой день рождения в декабре.', correctAnswer: 'Mein Geburtstag ist im Dezember.', points: 2 },
          { id: 'a1-8-1-ex10', type: 'fill-blank', question: 'Wann hast du ___? (день рождения)', correctAnswer: 'Geburtstag', points: 1 },
        ],
      },
      {
        id: 2,
        moduleId: 8,
        level: 'a1',
        title: 'Модальные глаголы',
        titleDe: 'Modalverben',
        type: 'grammar',
        duration: 25,
        content: { introduction: 'können, müssen, wollen' },
        exercises: [
          { id: 'a1-8-2-ex1', type: 'fill-blank', question: 'Ich ___ heute nicht kommen. (могу)', correctAnswer: 'kann', points: 1 },
          { id: 'a1-8-2-ex2', type: 'multiple-choice', question: 'Выберите правильную форму: "Du ___ zum Arzt gehen."', options: ['muss', 'musst', 'müssen', 'müsst'], correctAnswer: 'musst', points: 1 },
          { id: 'a1-8-2-ex3', type: 'fill-blank', question: 'Er ___ morgen arbeiten. (должен)', correctAnswer: 'muss', points: 1 },
          { id: 'a1-8-2-ex4', type: 'translation', question: 'Переведите: Я хочу пойти в кино.', correctAnswer: 'Ich will ins Kino gehen.', points: 2 },
          { id: 'a1-8-2-ex5', type: 'matching', question: 'Модальные глаголы', options: ['können', 'müssen', 'wollen', 'dürfen'], correctAnswer: ['мочь', 'быть должным', 'хотеть', 'иметь разрешение'], points: 4 },
          { id: 'a1-8-2-ex6', type: 'fill-blank', question: 'Wir ___ zusammen lernen. (хотим)', correctAnswer: 'wollen', points: 1 },
          { id: 'a1-8-2-ex7', type: 'multiple-choice', question: 'Где стоит инфинитив с модальным глаголом?', options: ['в начале', 'после модального', 'в конце', 'перед субъектом'], correctAnswer: 'в конце', points: 1 },
          { id: 'a1-8-2-ex8', type: 'true-false', question: '"Ich kann schwimmen" — правильный порядок слов.', options: ['Правда', 'Ложь'], correctAnswer: 'Правда', points: 1 },
          { id: 'a1-8-2-ex9', type: 'translation', question: 'Переведите: Ты можешь мне помочь?', correctAnswer: 'Kannst du mir helfen?', points: 2 },
          { id: 'a1-8-2-ex10', type: 'fill-blank', question: '___ ihr morgen kommen? (можете)', correctAnswer: 'Könnt', points: 1 },
        ],
      },
      {
        id: 3,
        moduleId: 8,
        level: 'a1',
        title: 'Назначение встречи',
        titleDe: 'Einen Termin machen',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Научимся договариваться о встрече' },
        exercises: [
          { id: 'a1-8-3-ex1', type: 'matching', question: 'Фразы', options: ['Haben Sie Zeit?', 'Passt Ihnen...?', 'Geht es um...?', 'Ich habe einen Termin.'], correctAnswer: ['У вас есть время?', 'Вам подходит...?', 'Речь идёт о...?', 'У меня назначена встреча.'], points: 4 },
          { id: 'a1-8-3-ex2', type: 'multiple-choice', question: 'Как отменить встречу?', options: ['Ich möchte den Termin absagen.', 'Ich habe Zeit.', 'Ich komme gern.', 'Das passt mir.'], correctAnswer: 'Ich möchte den Termin absagen.', points: 1 },
          { id: 'a1-8-3-ex3', type: 'fill-blank', question: 'Können wir einen ___ machen? (встречу)', correctAnswer: 'Termin', points: 1 },
          { id: 'a1-8-3-ex4', type: 'translation', question: 'Переведите: Мне это подходит.', correctAnswer: 'Das passt mir.', points: 2 },
          { id: 'a1-8-3-ex5', type: 'multiple-choice', question: 'Как сказать "К сожалению, я занят"?', options: ['Leider bin ich beschäftigt.', 'Ich habe Zeit.', 'Das ist gut.', 'Ich komme gern.'], correctAnswer: 'Leider bin ich beschäftigt.', points: 1 },
          { id: 'a1-8-3-ex6', type: 'fill-blank', question: '___ wir uns um 15 Uhr treffen? (давайте)', correctAnswer: 'Wollen', points: 1 },
          { id: 'a1-8-3-ex7', type: 'matching', question: 'Слова', options: ['der Termin', 'die Verabredung', 'verschieben', 'absagen'], correctAnswer: ['встреча/приём', 'договорённость', 'перенести', 'отменить'], points: 4 },
          { id: 'a1-8-3-ex8', type: 'true-false', question: '"Verschieben" означает "отменить".', options: ['Правда', 'Ложь'], correctAnswer: 'Ложь', explanation: 'Verschieben — перенести. Отменить — absagen.', points: 1 },
          { id: 'a1-8-3-ex9', type: 'translation', question: 'Переведите: Можем перенести на среду?', correctAnswer: 'Können wir auf Mittwoch verschieben?', points: 2 },
          { id: 'a1-8-3-ex10', type: 'fill-blank', question: 'Ich ___ den Termin bestätigen. (хотел бы)', correctAnswer: 'möchte', points: 1 },
        ],
      },
      {
        id: 4,
        moduleId: 8,
        level: 'a1',
        title: 'У врача',
        titleDe: 'Beim Arzt',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Запись к врачу' },
        exercises: [
          { id: 'a1-8-4-ex1', type: 'matching', question: 'Фразы', options: ['Ich brauche einen Termin.', 'Ist der Arzt da?', 'Haben Sie Ihre Versicherungskarte?', 'Bitte nehmen Sie Platz.'], correctAnswer: ['Мне нужна запись.', 'Врач на месте?', 'У вас есть страховая карта?', 'Присаживайтесь, пожалуйста.'], points: 4 },
          { id: 'a1-8-4-ex2', type: 'multiple-choice', question: 'Как сказать "Мне плохо"?', options: ['Mir geht es gut.', 'Mir geht es schlecht.', 'Ich bin müde.', 'Ich habe Hunger.'], correctAnswer: 'Mir geht es schlecht.', points: 1 },
          { id: 'a1-8-4-ex3', type: 'fill-blank', question: 'Ich möchte einen Termin beim ___ machen. (врач)', correctAnswer: 'Arzt', points: 1 },
          { id: 'a1-8-4-ex4', type: 'translation', question: 'Переведите: У меня болит голова.', correctAnswer: 'Ich habe Kopfschmerzen.', points: 2 },
          { id: 'a1-8-4-ex5', type: 'multiple-choice', question: 'Что такое "die Sprechstunde"?', options: ['выходной', 'приёмные часы', 'перерыв', 'каникулы'], correctAnswer: 'приёмные часы', points: 1 },
          { id: 'a1-8-4-ex6', type: 'fill-blank', question: 'Die ___ ist montags bis freitags. (приём)', correctAnswer: 'Sprechstunde', points: 1 },
          { id: 'a1-8-4-ex7', type: 'matching', question: 'Медицина', options: ['der Arzt', 'die Ärztin', 'das Krankenhaus', 'die Praxis'], correctAnswer: ['врач', 'врач (ж)', 'больница', 'кабинет врача'], points: 4 },
          { id: 'a1-8-4-ex8', type: 'true-false', question: '"Die Krankenkasse" — это больница.', options: ['Правда', 'Ложь'], correctAnswer: 'Ложь', explanation: 'Krankenkasse — страховая компания.', points: 1 },
          { id: 'a1-8-4-ex9', type: 'translation', question: 'Переведите: Когда есть свободное время?', correctAnswer: 'Wann haben Sie einen freien Termin?', points: 2 },
          { id: 'a1-8-4-ex10', type: 'fill-blank', question: 'Ist es ___? (срочно)', correctAnswer: 'dringend', points: 1 },
        ],
      },
      {
        id: 5,
        moduleId: 8,
        level: 'a1',
        title: 'Мини-тест',
        titleDe: 'Mini-Test',
        type: 'test',
        duration: 15,
        content: { introduction: 'Проверим знания по модулю 8' },
        exercises: [
          { id: 'a1-8-5-ex1', type: 'fill-blank', question: 'Ich ___ morgen nicht kommen. (могу)', correctAnswer: 'kann', points: 1 },
          { id: 'a1-8-5-ex2', type: 'translation', question: 'Переведите: Какое сегодня число?', correctAnswer: 'Welches Datum ist heute?', points: 2 },
          { id: 'a1-8-5-ex3', type: 'matching', question: 'Месяцы', options: ['März', 'Juni', 'September', 'Dezember'], correctAnswer: ['март', 'июнь', 'сентябрь', 'декабрь'], points: 4 },
          { id: 'a1-8-5-ex4', type: 'fill-blank', question: 'Du ___ zum Arzt gehen. (должен)', correctAnswer: 'musst', points: 1 },
          { id: 'a1-8-5-ex5', type: 'translation', question: 'Переведите: Мне это не подходит.', correctAnswer: 'Das passt mir nicht.', points: 2 },
          { id: 'a1-8-5-ex6', type: 'multiple-choice', question: 'Как отменить встречу?', options: ['absagen', 'verschieben', 'bestätigen', 'machen'], correctAnswer: 'absagen', points: 1 },
          { id: 'a1-8-5-ex7', type: 'fill-blank', question: 'Wir ___ einen Termin machen. (хотим)', correctAnswer: 'wollen', points: 1 },
          { id: 'a1-8-5-ex8', type: 'multiple-choice', question: 'Какой месяц идёт после August?', options: ['Juli', 'September', 'Oktober', 'Juni'], correctAnswer: 'September', points: 1 },
          { id: 'a1-8-5-ex9', type: 'fill-blank', question: 'Heute ist der ___ Mai. (15-е)', correctAnswer: 'fünfzehnte', points: 1 },
          { id: 'a1-8-5-ex10', type: 'translation', question: 'Переведите: Ты можешь прийти в среду?', correctAnswer: 'Kannst du am Mittwoch kommen?', points: 2 },
        ],
      },
    ],
  },
  {
    id: 9,
    level: 'a1',
    title: 'Тело и здоровье',
    titleDe: 'Körper und Gesundheit',
    description: 'Части тела, самочувствие, Imperativ',
    vocabulary: a1Vocabulary.filter(w => w.tags?.includes('module-9')),
    grammar: [
      {
        id: 'a1-g9-1',
        level: 'a1',
        title: 'Императив',
        titleDe: 'Imperativ',
        description: 'Повелительное наклонение',
        explanation: `
# Императив (Imperativ)

Для просьб и команд.

| Форма | Пример |
|-------|--------|
| **du** | Komm! Trink! Iss! |
| **ihr** | Kommt! Trinkt! Esst! |
| **Sie** | Kommen Sie! Trinken Sie! |

## Образование для du:
Основа глагола (без -st):
- du kommst → Komm!
- du trinkst → Trink!
        `,
        examples: [
          { german: 'Trink mehr Wasser!', russian: 'Пей больше воды!' },
          { german: 'Nehmen Sie diese Tabletten!', russian: 'Принимайте эти таблетки!' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 9,
        level: 'a1',
        title: 'Части тела',
        titleDe: 'Körperteile',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Выучим части тела' },
        exercises: [
          { id: 'a1-9-1-ex1', type: 'matching', question: 'Части тела', options: ['der Kopf', 'der Arm', 'das Bein', 'die Hand'], correctAnswer: ['голова', 'рука', 'нога', 'кисть'], points: 4 },
          { id: 'a1-9-1-ex2', type: 'multiple-choice', question: 'Какой артикль у "Auge"?', options: ['der', 'die', 'das', 'den'], correctAnswer: 'das', points: 1 },
          { id: 'a1-9-1-ex3', type: 'fill-blank', question: 'Ich habe ___schmerzen. (голова)', correctAnswer: 'Kopf', points: 1 },
          { id: 'a1-9-1-ex4', type: 'translation', question: 'Переведите: нос', correctAnswer: 'die Nase', points: 1 },
          { id: 'a1-9-1-ex5', type: 'multiple-choice', question: 'Как сказать "ухо"?', options: ['das Auge', 'die Nase', 'das Ohr', 'der Mund'], correctAnswer: 'das Ohr', points: 1 },
          { id: 'a1-9-1-ex6', type: 'matching', question: 'Ещё части', options: ['der Bauch', 'der Rücken', 'der Fuß', 'der Finger'], correctAnswer: ['живот', 'спина', 'ступня', 'палец'], points: 4 },
          { id: 'a1-9-1-ex7', type: 'fill-blank', question: 'Mein ___ tut weh. (спина)', correctAnswer: 'Rücken', points: 1 },
          { id: 'a1-9-1-ex8', type: 'true-false', question: '"Das Bein" — это рука.', options: ['Правда', 'Ложь'], correctAnswer: 'Ложь', explanation: 'Das Bein — нога. Рука — der Arm.', points: 1 },
          { id: 'a1-9-1-ex9', type: 'translation', question: 'Переведите: У меня болят глаза.', correctAnswer: 'Meine Augen tun weh.', points: 2 },
          { id: 'a1-9-1-ex10', type: 'fill-blank', question: 'Der ___ ist gebrochen. (палец)', correctAnswer: 'Finger', points: 1 },
        ],
      },
      {
        id: 2,
        moduleId: 9,
        level: 'a1',
        title: 'Здоровье и болезни',
        titleDe: 'Gesundheit und Krankheit',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Как говорить о здоровье' },
        exercises: [
          { id: 'a1-9-2-ex1', type: 'matching', question: 'Симптомы', options: ['Fieber haben', 'Husten haben', 'Schnupfen haben', 'Schmerzen haben'], correctAnswer: ['иметь температуру', 'кашлять', 'иметь насморк', 'испытывать боль'], points: 4 },
          { id: 'a1-9-2-ex2', type: 'multiple-choice', question: 'Как сказать "Я болен"?', options: ['Ich bin müde.', 'Ich bin krank.', 'Ich bin gesund.', 'Ich bin fit.'], correctAnswer: 'Ich bin krank.', points: 1 },
          { id: 'a1-9-2-ex3', type: 'fill-blank', question: 'Ich habe ___. (грипп)', correctAnswer: 'Grippe', points: 1 },
          { id: 'a1-9-2-ex4', type: 'translation', question: 'Переведите: У меня болит горло.', correctAnswer: 'Ich habe Halsschmerzen.', points: 2 },
          { id: 'a1-9-2-ex5', type: 'multiple-choice', question: 'Что означает "die Erkältung"?', options: ['грипп', 'простуда', 'головная боль', 'температура'], correctAnswer: 'простуда', points: 1 },
          { id: 'a1-9-2-ex6', type: 'fill-blank', question: 'Gute ___! (выздоровления)', correctAnswer: 'Besserung', points: 1 },
          { id: 'a1-9-2-ex7', type: 'matching', question: 'Лекарства', options: ['die Tablette', 'der Hustensaft', 'die Salbe', 'das Pflaster'], correctAnswer: ['таблетка', 'сироп от кашля', 'мазь', 'пластырь'], points: 4 },
          { id: 'a1-9-2-ex8', type: 'true-false', question: '"Gesund" означает "больной".', options: ['Правда', 'Ложь'], correctAnswer: 'Ложь', explanation: 'Gesund — здоровый. Больной — krank.', points: 1 },
          { id: 'a1-9-2-ex9', type: 'translation', question: 'Переведите: Примите эту таблетку.', correctAnswer: 'Nehmen Sie diese Tablette.', points: 2 },
          { id: 'a1-9-2-ex10', type: 'fill-blank', question: 'Sie brauchen ein ___. (рецепт)', correctAnswer: 'Rezept', points: 1 },
        ],
      },
      {
        id: 3,
        moduleId: 9,
        level: 'a1',
        title: 'Императив',
        titleDe: 'Imperativ',
        type: 'grammar',
        duration: 25,
        content: { introduction: 'Повелительное наклонение' },
        exercises: [
          { id: 'a1-9-3-ex1', type: 'fill-blank', question: '___ viel Wasser! (пей, du)', correctAnswer: 'Trink', points: 1 },
          { id: 'a1-9-3-ex2', type: 'multiple-choice', question: 'Как сказать "Приходите!" (Sie)?', options: ['Komm!', 'Kommt!', 'Kommen Sie!', 'Kommen!'], correctAnswer: 'Kommen Sie!', points: 1 },
          { id: 'a1-9-3-ex3', type: 'fill-blank', question: '___ leise! (будьте, ihr)', correctAnswer: 'Seid', points: 1 },
          { id: 'a1-9-3-ex4', type: 'translation', question: 'Переведите: Ешь овощи! (du)', correctAnswer: 'Iss Gemüse!', points: 2 },
          { id: 'a1-9-3-ex5', type: 'matching', question: 'Императив (du)', options: ['kommen', 'trinken', 'essen', 'nehmen'], correctAnswer: ['Komm!', 'Trink!', 'Iss!', 'Nimm!'], points: 4 },
          { id: 'a1-9-3-ex6', type: 'fill-blank', question: '___ Sie bitte hier! (подождите)', correctAnswer: 'Warten', points: 1 },
          { id: 'a1-9-3-ex7', type: 'multiple-choice', question: 'Какая форма "sein" для du в императиве?', options: ['Bist!', 'Sei!', 'Seid!', 'Sind!'], correctAnswer: 'Sei!', points: 1 },
          { id: 'a1-9-3-ex8', type: 'true-false', question: 'В императиве для "du" окончание -st убирается.', options: ['Правда', 'Ложь'], correctAnswer: 'Правда', points: 1 },
          { id: 'a1-9-3-ex9', type: 'translation', question: 'Переведите: Оставайтесь дома! (Sie)', correctAnswer: 'Bleiben Sie zu Hause!', points: 2 },
          { id: 'a1-9-3-ex10', type: 'fill-blank', question: '___ ruhig! (будь, du)', correctAnswer: 'Sei', points: 1 },
        ],
      },
      {
        id: 4,
        moduleId: 9,
        level: 'a1',
        title: 'У врача',
        titleDe: 'Beim Arzt',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'На приёме у врача' },
        exercises: [
          { id: 'a1-9-4-ex1', type: 'matching', question: 'Фразы врача', options: ['Was fehlt Ihnen?', 'Wo tut es weh?', 'Machen Sie den Mund auf!', 'Atmen Sie tief!'], correctAnswer: ['Что вас беспокоит?', 'Где болит?', 'Откройте рот!', 'Дышите глубоко!'], points: 4 },
          { id: 'a1-9-4-ex2', type: 'multiple-choice', question: 'Как сказать "Мне плохо"?', options: ['Mir ist schlecht.', 'Mir ist gut.', 'Ich bin müde.', 'Ich bin krank.'], correctAnswer: 'Mir ist schlecht.', points: 1 },
          { id: 'a1-9-4-ex3', type: 'fill-blank', question: 'Ich brauche eine ___. (больничный)', correctAnswer: 'Krankschreibung', points: 1 },
          { id: 'a1-9-4-ex4', type: 'translation', question: 'Переведите: Вам нужно отдыхать.', correctAnswer: 'Sie müssen sich ausruhen.', points: 2 },
          { id: 'a1-9-4-ex5', type: 'multiple-choice', question: 'Как спросить "Это серьёзно?"', options: ['Ist es teuer?', 'Ist es ernst?', 'Ist es schnell?', 'Ist es gut?'], correctAnswer: 'Ist es ernst?', points: 1 },
          { id: 'a1-9-4-ex6', type: 'fill-blank', question: 'Haben Sie ___? (аллергия)', correctAnswer: 'Allergien', points: 1 },
          { id: 'a1-9-4-ex7', type: 'matching', question: 'Действия', options: ['untersuchen', 'verschreiben', 'impfen', 'messen'], correctAnswer: ['осматривать', 'прописывать', 'прививать', 'измерять'], points: 4 },
          { id: 'a1-9-4-ex8', type: 'true-false', question: '"Die Untersuchung" — это осмотр.', options: ['Правда', 'Ложь'], correctAnswer: 'Правда', points: 1 },
          { id: 'a1-9-4-ex9', type: 'translation', question: 'Переведите: Я измерю вам давление.', correctAnswer: 'Ich messe Ihren Blutdruck.', points: 2 },
          { id: 'a1-9-4-ex10', type: 'fill-blank', question: 'Nehmen Sie diese ___ dreimal täglich. (таблетки)', correctAnswer: 'Tabletten', points: 1 },
        ],
      },
      {
        id: 5,
        moduleId: 9,
        level: 'a1',
        title: 'Мини-тест',
        titleDe: 'Mini-Test',
        type: 'test',
        duration: 15,
        content: { introduction: 'Проверим знания по модулю 9' },
        exercises: [
          { id: 'a1-9-5-ex1', type: 'fill-blank', question: 'Ich habe ___schmerzen. (живот)', correctAnswer: 'Bauch', points: 1 },
          { id: 'a1-9-5-ex2', type: 'translation', question: 'Переведите: Я болен.', correctAnswer: 'Ich bin krank.', points: 2 },
          { id: 'a1-9-5-ex3', type: 'matching', question: 'Части тела', options: ['der Kopf', 'der Arm', 'das Bein', 'der Bauch'], correctAnswer: ['голова', 'рука', 'нога', 'живот'], points: 4 },
          { id: 'a1-9-5-ex4', type: 'fill-blank', question: '___ viel Wasser! (пей, du)', correctAnswer: 'Trink', points: 1 },
          { id: 'a1-9-5-ex5', type: 'translation', question: 'Переведите: Где болит?', correctAnswer: 'Wo tut es weh?', points: 2 },
          { id: 'a1-9-5-ex6', type: 'multiple-choice', question: 'Как сказать "Поправляйся!"', options: ['Viel Spaß!', 'Gute Besserung!', 'Guten Tag!', 'Viel Erfolg!'], correctAnswer: 'Gute Besserung!', points: 1 },
          { id: 'a1-9-5-ex7', type: 'fill-blank', question: '___ Sie bitte Platz! (садитесь)', correctAnswer: 'Nehmen', points: 1 },
          { id: 'a1-9-5-ex8', type: 'multiple-choice', question: 'Что такое "die Erkältung"?', options: ['грипп', 'простуда', 'аллергия', 'травма'], correctAnswer: 'простуда', points: 1 },
          { id: 'a1-9-5-ex9', type: 'fill-blank', question: 'Ich habe ___. (температура)', correctAnswer: 'Fieber', points: 1 },
          { id: 'a1-9-5-ex10', type: 'translation', question: 'Переведите: Оставайся в постели! (du)', correctAnswer: 'Bleib im Bett!', points: 2 },
        ],
      },
    ],
  },
  {
    id: 10,
    level: 'a1',
    title: 'Ориентирование',
    titleDe: 'Orientierung',
    description: 'Город, транспорт, предлоги направления',
    vocabulary: a1Vocabulary.filter(w => w.tags?.includes('module-10')),
    grammar: [
      {
        id: 'a1-g10-1',
        level: 'a1',
        title: 'Предлоги направления',
        titleDe: 'Direktionale Präpositionen',
        description: 'Wohin? — в, на, к',
        explanation: `
# Предлоги направления (Wohin?)

## Основные предлоги
| Предлог | Падеж | Пример |
|---------|-------|--------|
| **in + Akk** | куда? | Ich gehe **in die** Stadt. |
| **zu + Dat** | к кому/чему | Ich gehe **zum** Arzt. |
| **nach** | (города, страны) | Ich fahre **nach** Berlin. |

## zu + Dativ (слитные формы)
- zu + dem = **zum** (Ich gehe zum Bahnhof.)
- zu + der = **zur** (Ich gehe zur Post.)
        `,
        examples: [
          { german: 'Ich gehe in den Park.', russian: 'Я иду в парк.' },
          { german: 'Wir fahren nach München.', russian: 'Мы едем в Мюнхен.' },
          { german: 'Geh zum Arzt!', russian: 'Иди к врачу!' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 10,
        level: 'a1',
        title: 'Места в городе',
        titleDe: 'Orte in der Stadt',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Выучим места в городе' },
        exercises: [
          { id: 'a1-10-1-ex1', type: 'matching', question: 'Места', options: ['der Bahnhof', 'die Post', 'die Bank', 'das Rathaus'], correctAnswer: ['вокзал', 'почта', 'банк', 'ратуша'], points: 4 },
          { id: 'a1-10-1-ex2', type: 'multiple-choice', question: 'Где покупают билеты на поезд?', options: ['auf der Post', 'am Bahnhof', 'in der Bank', 'im Rathaus'], correctAnswer: 'am Bahnhof', points: 1 },
          { id: 'a1-10-1-ex3', type: 'fill-blank', question: 'Wo ist der ___? (вокзал)', correctAnswer: 'Bahnhof', points: 1 },
          { id: 'a1-10-1-ex4', type: 'translation', question: 'Переведите: остановка автобуса', correctAnswer: 'die Bushaltestelle', points: 1 },
          { id: 'a1-10-1-ex5', type: 'multiple-choice', question: 'Как сказать "аптека"?', options: ['die Bank', 'die Post', 'die Apotheke', 'das Krankenhaus'], correctAnswer: 'die Apotheke', points: 1 },
          { id: 'a1-10-1-ex6', type: 'matching', question: 'Ещё места', options: ['die Kirche', 'das Krankenhaus', 'die Schule', 'der Flughafen'], correctAnswer: ['церковь', 'больница', 'школа', 'аэропорт'], points: 4 },
          { id: 'a1-10-1-ex7', type: 'fill-blank', question: 'Das ___ ist neben der Kirche. (ратуша)', correctAnswer: 'Rathaus', points: 1 },
          { id: 'a1-10-1-ex8', type: 'true-false', question: '"Der Flughafen" — это вокзал.', options: ['Правда', 'Ложь'], correctAnswer: 'Ложь', explanation: 'Flughafen — аэропорт. Вокзал — Bahnhof.', points: 1 },
          { id: 'a1-10-1-ex9', type: 'translation', question: 'Переведите: Где ближайшая аптека?', correctAnswer: 'Wo ist die nächste Apotheke?', points: 2 },
          { id: 'a1-10-1-ex10', type: 'fill-blank', question: 'Die ___ ist gegenüber. (почта)', correctAnswer: 'Post', points: 1 },
        ],
      },
      {
        id: 2,
        moduleId: 10,
        level: 'a1',
        title: 'Транспорт',
        titleDe: 'Verkehrsmittel',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Виды транспорта' },
        exercises: [
          { id: 'a1-10-2-ex1', type: 'matching', question: 'Транспорт', options: ['der Bus', 'die U-Bahn', 'die Straßenbahn', 'der Zug'], correctAnswer: ['автобус', 'метро', 'трамвай', 'поезд'], points: 4 },
          { id: 'a1-10-2-ex2', type: 'multiple-choice', question: 'Как купить билет?', options: ['Ich möchte eine Fahrkarte.', 'Ich möchte ein Brot.', 'Ich möchte ein Buch.', 'Ich möchte einen Kaffee.'], correctAnswer: 'Ich möchte eine Fahrkarte.', points: 1 },
          { id: 'a1-10-2-ex3', type: 'fill-blank', question: 'Der ___ fährt um 10 Uhr. (поезд)', correctAnswer: 'Zug', points: 1 },
          { id: 'a1-10-2-ex4', type: 'translation', question: 'Переведите: такси', correctAnswer: 'das Taxi', points: 1 },
          { id: 'a1-10-2-ex5', type: 'multiple-choice', question: 'Как спросить "Когда отправляется поезд?"', options: ['Wann fährt der Zug ab?', 'Wo ist der Zug?', 'Was kostet der Zug?', 'Wie ist der Zug?'], correctAnswer: 'Wann fährt der Zug ab?', points: 1 },
          { id: 'a1-10-2-ex6', type: 'matching', question: 'Ещё транспорт', options: ['das Fahrrad', 'das Auto', 'das Flugzeug', 'das Schiff'], correctAnswer: ['велосипед', 'машина', 'самолёт', 'корабль'], points: 4 },
          { id: 'a1-10-2-ex7', type: 'fill-blank', question: 'Ich fahre mit dem ___. (автобус)', correctAnswer: 'Bus', points: 1 },
          { id: 'a1-10-2-ex8', type: 'true-false', question: '"Umsteigen" означает "выходить".', options: ['Правда', 'Ложь'], correctAnswer: 'Ложь', explanation: 'Umsteigen — пересаживаться. Выходить — aussteigen.', points: 1 },
          { id: 'a1-10-2-ex9', type: 'translation', question: 'Переведите: Где остановка метро?', correctAnswer: 'Wo ist die U-Bahn-Haltestelle?', points: 2 },
          { id: 'a1-10-2-ex10', type: 'fill-blank', question: 'Ich muss am Hauptbahnhof ___. (пересесть)', correctAnswer: 'umsteigen', points: 1 },
        ],
      },
      {
        id: 3,
        moduleId: 10,
        level: 'a1',
        title: 'Предлоги направления',
        titleDe: 'Direktionale Präpositionen',
        type: 'grammar',
        duration: 25,
        content: { introduction: 'Куда? — in, zu, nach' },
        exercises: [
          { id: 'a1-10-3-ex1', type: 'fill-blank', question: 'Ich gehe ___ den Park. (в)', correctAnswer: 'in', points: 1 },
          { id: 'a1-10-3-ex2', type: 'multiple-choice', question: 'Какой предлог с городами?', options: ['in', 'zu', 'nach', 'an'], correctAnswer: 'nach', points: 1 },
          { id: 'a1-10-3-ex3', type: 'fill-blank', question: 'Ich fahre ___ Berlin. (в)', correctAnswer: 'nach', points: 1 },
          { id: 'a1-10-3-ex4', type: 'translation', question: 'Переведите: Я иду к врачу.', correctAnswer: 'Ich gehe zum Arzt.', points: 2 },
          { id: 'a1-10-3-ex5', type: 'matching', question: 'Предлоги', options: ['in die Stadt', 'zum Bahnhof', 'nach Hause', 'zur Post'], correctAnswer: ['в город', 'на вокзал', 'домой', 'на почту'], points: 4 },
          { id: 'a1-10-3-ex6', type: 'fill-blank', question: 'Gehen Sie ___ Post! (на, к)', correctAnswer: 'zur', points: 1 },
          { id: 'a1-10-3-ex7', type: 'multiple-choice', question: '"Zum" — это сочетание:', options: ['zu + dem', 'zu + der', 'zu + das', 'zu + die'], correctAnswer: 'zu + dem', points: 1 },
          { id: 'a1-10-3-ex8', type: 'true-false', question: 'С "nach" используется Akkusativ.', options: ['Правда', 'Ложь'], correctAnswer: 'Ложь', explanation: 'Nach не требует падежа с географич. названиями.', points: 1 },
          { id: 'a1-10-3-ex9', type: 'translation', question: 'Переведите: Как пройти к вокзалу?', correctAnswer: 'Wie komme ich zum Bahnhof?', points: 2 },
          { id: 'a1-10-3-ex10', type: 'fill-blank', question: 'Ich gehe ___ Hause. (домой)', correctAnswer: 'nach', points: 1 },
        ],
      },
      {
        id: 4,
        moduleId: 10,
        level: 'a1',
        title: 'Спрашиваем дорогу',
        titleDe: 'Nach dem Weg fragen',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Как спросить и объяснить дорогу' },
        exercises: [
          { id: 'a1-10-4-ex1', type: 'matching', question: 'Направления', options: ['geradeaus', 'links', 'rechts', 'zurück'], correctAnswer: ['прямо', 'налево', 'направо', 'назад'], points: 4 },
          { id: 'a1-10-4-ex2', type: 'multiple-choice', question: 'Как вежливо спросить дорогу?', options: ['Entschuldigung, wo ist...?', 'Wo ist das?', 'Sag mir!', 'Ich will wissen...'], correctAnswer: 'Entschuldigung, wo ist...?', points: 1 },
          { id: 'a1-10-4-ex3', type: 'fill-blank', question: 'Gehen Sie ___ und dann links. (прямо)', correctAnswer: 'geradeaus', points: 1 },
          { id: 'a1-10-4-ex4', type: 'translation', question: 'Переведите: первая улица направо', correctAnswer: 'die erste Straße rechts', points: 2 },
          { id: 'a1-10-4-ex5', type: 'multiple-choice', question: 'Что означает "an der Ecke"?', options: ['на углу', 'напротив', 'рядом', 'далеко'], correctAnswer: 'на углу', points: 1 },
          { id: 'a1-10-4-ex6', type: 'fill-blank', question: 'Die Bank ist ___ der Kirche. (напротив)', correctAnswer: 'gegenüber', points: 1 },
          { id: 'a1-10-4-ex7', type: 'matching', question: 'Фразы', options: ['in der Nähe', 'weit weg', 'um die Ecke', 'auf der linken Seite'], correctAnswer: ['поблизости', 'далеко', 'за углом', 'слева'], points: 4 },
          { id: 'a1-10-4-ex8', type: 'true-false', question: '"Gegenüber" означает "рядом".', options: ['Правда', 'Ложь'], correctAnswer: 'Ложь', explanation: 'Gegenüber — напротив. Рядом — neben.', points: 1 },
          { id: 'a1-10-4-ex9', type: 'translation', question: 'Переведите: Это далеко отсюда?', correctAnswer: 'Ist es weit von hier?', points: 2 },
          { id: 'a1-10-4-ex10', type: 'fill-blank', question: 'Nehmen Sie die ___ Straße links. (вторая)', correctAnswer: 'zweite', points: 1 },
        ],
      },
      {
        id: 5,
        moduleId: 10,
        level: 'a1',
        title: 'Мини-тест',
        titleDe: 'Mini-Test',
        type: 'test',
        duration: 15,
        content: { introduction: 'Проверим знания по модулю 10' },
        exercises: [
          { id: 'a1-10-5-ex1', type: 'fill-blank', question: 'Ich fahre ___ München. (в)', correctAnswer: 'nach', points: 1 },
          { id: 'a1-10-5-ex2', type: 'translation', question: 'Переведите: Где вокзал?', correctAnswer: 'Wo ist der Bahnhof?', points: 2 },
          { id: 'a1-10-5-ex3', type: 'matching', question: 'Транспорт', options: ['der Bus', 'die U-Bahn', 'der Zug', 'das Taxi'], correctAnswer: ['автобус', 'метро', 'поезд', 'такси'], points: 4 },
          { id: 'a1-10-5-ex4', type: 'fill-blank', question: 'Gehen Sie ___ und dann rechts. (прямо)', correctAnswer: 'geradeaus', points: 1 },
          { id: 'a1-10-5-ex5', type: 'translation', question: 'Переведите: Как пройти к почте?', correctAnswer: 'Wie komme ich zur Post?', points: 2 },
          { id: 'a1-10-5-ex6', type: 'multiple-choice', question: 'Что означает "umsteigen"?', options: ['выходить', 'входить', 'пересаживаться', 'ехать'], correctAnswer: 'пересаживаться', points: 1 },
          { id: 'a1-10-5-ex7', type: 'fill-blank', question: 'Ich gehe ___ Arzt. (к)', correctAnswer: 'zum', points: 1 },
          { id: 'a1-10-5-ex8', type: 'multiple-choice', question: '"Die erste Straße links" — это:', options: ['первая улица налево', 'вторая улица направо', 'прямо', 'назад'], correctAnswer: 'первая улица налево', points: 1 },
          { id: 'a1-10-5-ex9', type: 'fill-blank', question: 'Der Bahnhof ist ___ der Post. (напротив)', correctAnswer: 'gegenüber', points: 1 },
          { id: 'a1-10-5-ex10', type: 'translation', question: 'Переведите: Я еду на автобусе.', correctAnswer: 'Ich fahre mit dem Bus.', points: 2 },
        ],
      },
    ],
  },
];
