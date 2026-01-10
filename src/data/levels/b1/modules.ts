import type { Module } from '../../../types';
import { b1Vocabulary } from './vocabulary';

export const b1Modules: Module[] = [
  {
    id: 1,
    level: 'b1',
    title: 'Отношения',
    titleDe: 'Beziehungen',
    description: 'Дружба, семья, конфликты, Konjunktiv II',
    vocabulary: b1Vocabulary.filter(w => w.tags?.includes('module-1')),
    grammar: [
      {
        id: 'b1-g1-1',
        level: 'b1',
        title: 'Konjunktiv II (сослагательное наклонение)',
        titleDe: 'Konjunktiv II',
        description: 'Выражение желаний, вежливых просьб, нереальных условий',
        explanation: `
# Konjunktiv II (Сослагательное наклонение)

Используется для:
- Нереальных условий и желаний
- Вежливых просьб
- Советов

## Образование

### Самые важные формы:
| Infinitiv | Konjunktiv II |
|-----------|---------------|
| sein | wäre |
| haben | hätte |
| werden | würde |
| können | könnte |
| müssen | müsste |
| sollen | sollte |
| dürfen | dürfte |

### würde + Infinitiv (для остальных глаголов)
- ich **würde** gehen
- du **würdest** kommen
- er/sie **würde** bleiben

## Примеры использования

### Желания:
- Ich **hätte** gern mehr Zeit.
- Ich **wäre** gern reich.

### Вежливые просьбы:
- **Könntest** du mir helfen?
- **Würden** Sie bitte das Fenster öffnen?

### Нереальные условия:
- Wenn ich Zeit **hätte**, **würde** ich dich besuchen.
- Wenn ich reich **wäre**, **würde** ich ein Haus kaufen.

### Советы:
- An deiner Stelle **würde** ich das nicht tun.
- Du **solltest** mehr schlafen.
        `,
        comparisonWithRussian: 'Похоже на русское "бы": "Я бы пошёл" = "Ich würde gehen".',
        commonMistakes: [
          { wrong: 'Wenn ich Zeit habe, würde ich kommen.', correct: 'Wenn ich Zeit hätte, würde ich kommen.', explanation: 'В условии тоже нужен Konjunktiv II' },
        ],
        examples: [
          { german: 'Ich hätte gern einen Kaffee.', russian: 'Я бы хотел кофе.' },
          { german: 'Könntest du mir helfen?', russian: 'Ты мог бы мне помочь?' },
          { german: 'Wenn ich du wäre, würde ich das anders machen.', russian: 'На твоём месте я бы сделал это иначе.' },
        ],
        exercises: [],
      },
      {
        id: 'b1-g1-2',
        level: 'b1',
        title: 'Возвратные глаголы',
        titleDe: 'Reflexive Verben',
        description: 'sich freuen, sich ärgern, sich treffen...',
        explanation: `
# Возвратные глаголы (Reflexive Verben)

Глаголы с возвратным местоимением sich.

## Возвратные местоимения

| Лицо | Akkusativ | Dativ |
|------|-----------|-------|
| ich | mich | mir |
| du | dich | dir |
| er/sie/es | sich | sich |
| wir | uns | uns |
| ihr | euch | euch |
| sie/Sie | sich | sich |

## Akkusativ или Dativ?

**Akkusativ** — если нет другого объекта:
- Ich wasche **mich**. (Я моюсь.)
- Er freut **sich**. (Он радуется.)

**Dativ** — если есть другой объект в Akkusativ:
- Ich wasche **mir** die Hände. (Я мою себе руки.)
- Ich kaufe **mir** ein Buch. (Я покупаю себе книгу.)

## Важные возвратные глаголы
- sich freuen (auf/über) — радоваться
- sich ärgern (über) — злиться
- sich interessieren (für) — интересоваться
- sich erinnern (an) — вспоминать
- sich treffen (mit) — встречаться
- sich streiten (mit) — ссориться
        `,
        examples: [
          { german: 'Ich freue mich auf das Wochenende.', russian: 'Я жду выходных с нетерпением.' },
          { german: 'Er ärgert sich über seinen Kollegen.', russian: 'Он злится на своего коллегу.' },
          { german: 'Wir treffen uns morgen.', russian: 'Мы встретимся завтра.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 1,
        level: 'b1',
        title: 'Дружба и отношения',
        titleDe: 'Freundschaft und Beziehungen',
        type: 'vocabulary',
        duration: 25,
        content: {
          introduction: 'Лексика для описания отношений между людьми',
        },
        exercises: [
          {
            id: 'b1-1-1-ex1',
            type: 'multiple-choice',
            question: 'Как сказать "доверять"?',
            options: ['glauben', 'vertrauen', 'hoffen', 'denken'],
            correctAnswer: 'vertrauen',
            points: 1,
          },
          {
            id: 'b1-1-1-ex2',
            type: 'fill-blank',
            question: 'Unsere ___ dauert schon 10 Jahre. (дружба)',
            correctAnswer: 'Freundschaft',
            points: 1,
          },
        ],
      },
      {
        id: 2,
        moduleId: 1,
        level: 'b1',
        title: 'Konjunktiv II: основы',
        titleDe: 'Konjunktiv II: Grundlagen',
        type: 'grammar',
        duration: 30,
        content: {
          introduction: 'Сослагательное наклонение для желаний и вежливых просьб',
        },
        exercises: [
          {
            id: 'b1-1-2-ex1',
            type: 'fill-blank',
            question: 'Ich ___ gern mehr Zeit. (haben)',
            correctAnswer: 'hätte',
            points: 1,
          },
          {
            id: 'b1-1-2-ex2',
            type: 'fill-blank',
            question: '___ du mir bitte helfen? (können)',
            correctAnswer: 'Könntest',
            points: 1,
          },
          {
            id: 'b1-1-2-ex3',
            type: 'translation',
            question: 'Переведите: Я бы хотел кофе.',
            correctAnswer: 'Ich hätte gern einen Kaffee.',
            points: 2,
          },
        ],
      },
      {
        id: 3,
        moduleId: 1,
        level: 'b1',
        title: 'Нереальные условия',
        titleDe: 'Irreale Bedingungen',
        type: 'grammar',
        duration: 30,
        content: {
          introduction: 'Условные предложения с Konjunktiv II',
        },
        exercises: [
          {
            id: 'b1-1-3-ex1',
            type: 'fill-blank',
            question: 'Wenn ich reich ___, würde ich ein Haus kaufen.',
            correctAnswer: 'wäre',
            points: 1,
          },
          {
            id: 'b1-1-3-ex2',
            type: 'translation',
            question: 'Переведите: Если бы у меня было время, я бы тебя навестил.',
            correctAnswer: 'Wenn ich Zeit hätte, würde ich dich besuchen.',
            points: 2,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    level: 'b1',
    title: 'Образование',
    titleDe: 'Bildung',
    description: 'Учёба, экзамены, карьера, Passiv',
    vocabulary: b1Vocabulary.filter(w => w.tags?.includes('module-2')),
    grammar: [
      {
        id: 'b1-g2-1',
        level: 'b1',
        title: 'Пассивный залог (Passiv)',
        titleDe: 'Passiv',
        description: 'werden + Partizip II',
        explanation: `
# Пассивный залог (Passiv)

Когда важно действие, а не тот, кто его выполняет.

## Образование
**werden + Partizip II**

## Времена

### Präsens Passiv
- Das Buch **wird** gelesen.
- Die Prüfung **wird** geschrieben.

### Präteritum Passiv
- Das Buch **wurde** gelesen.
- Die Prüfung **wurde** geschrieben.

### Perfekt Passiv
- Das Buch **ist** gelesen **worden**.
- Die Prüfung **ist** geschrieben **worden**.

## Актив → Пассив
- **Aktiv:** Der Lehrer korrigiert die Arbeit.
- **Passiv:** Die Arbeit wird (vom Lehrer) korrigiert.

## Агент действия (von + Dativ)
- Die Prüfung wird **vom Professor** bewertet.
        `,
        comparisonWithRussian: 'Как русский пассив: "Книга читается", "Дом был построен".',
        commonMistakes: [
          { wrong: 'Das Buch ist gelesen geworden.', correct: 'Das Buch ist gelesen worden.', explanation: 'В Perfekt Passiv используется "worden", не "geworden"' },
        ],
        examples: [
          { german: 'Die Prüfung wird morgen geschrieben.', russian: 'Экзамен будет написан завтра.' },
          { german: 'Das Diplom wurde vom Rektor überreicht.', russian: 'Диплом был вручён ректором.' },
          { german: 'Die Hausarbeit ist schon korrigiert worden.', russian: 'Домашняя работа уже проверена.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 2,
        level: 'b1',
        title: 'Учёба и экзамены',
        titleDe: 'Studium und Prüfungen',
        type: 'vocabulary',
        duration: 25,
        content: {
          introduction: 'Лексика об учёбе в вузе',
        },
        exercises: [
          {
            id: 'b1-2-1-ex1',
            type: 'matching',
            question: 'Соедините слова с переводом',
            options: ['die Prüfung', 'bestehen', 'durchfallen', 'das Stipendium'],
            correctAnswer: ['экзамен', 'сдать', 'провалить', 'стипендия'],
            points: 4,
          },
        ],
      },
      {
        id: 2,
        moduleId: 2,
        level: 'b1',
        title: 'Пассивный залог',
        titleDe: 'Passiv',
        type: 'grammar',
        duration: 30,
        content: {
          introduction: 'Образование и использование пассива',
        },
        exercises: [
          {
            id: 'b1-2-2-ex1',
            type: 'fill-blank',
            question: 'Die Prüfung ___ morgen geschrieben. (werden)',
            correctAnswer: 'wird',
            points: 1,
          },
          {
            id: 'b1-2-2-ex2',
            type: 'translation',
            question: 'Переведите: Книга была прочитана.',
            correctAnswer: 'Das Buch wurde gelesen.',
            points: 2,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    level: 'b1',
    title: 'Окружающая среда',
    titleDe: 'Umwelt',
    description: 'Экология, климат, защита природы, Relativsätze',
    vocabulary: b1Vocabulary.filter(w => w.tags?.includes('module-3')),
    grammar: [
      {
        id: 'b1-g3-1',
        level: 'b1',
        title: 'Относительные придаточные',
        titleDe: 'Relativsätze',
        description: 'der, die, das как относительные местоимения',
        explanation: `
# Относительные придаточные (Relativsätze)

Придаточные, которые описывают существительное.

## Относительные местоимения

| Падеж | Maskulin | Feminin | Neutrum | Plural |
|-------|----------|---------|---------|--------|
| Nom. | der | die | das | die |
| Akk. | den | die | das | die |
| Dat. | dem | der | dem | denen |
| Gen. | dessen | deren | dessen | deren |

## Правила
1. Род и число — от существительного
2. Падеж — от функции в придаточном
3. Глагол — в конце придаточного

## Примеры

### Nominativ:
Der Mann, **der** dort steht, ist mein Lehrer.
(Мужчина, который там стоит, — мой учитель.)

### Akkusativ:
Das Buch, **das** ich lese, ist interessant.
(Книга, которую я читаю, интересная.)

### Dativ:
Die Frau, **der** ich geholfen habe, ist meine Nachbarin.
(Женщина, которой я помог, — моя соседка.)

### С предлогом:
Die Stadt, **in der** ich wohne, ist sehr schön.
(Город, в котором я живу, очень красивый.)
        `,
        comparisonWithRussian: 'Как русское "который/которая/которое", но с немецким порядком слов.',
        examples: [
          { german: 'Das ist der Film, den ich dir empfohlen habe.', russian: 'Это фильм, который я тебе рекомендовал.' },
          { german: 'Die Energie, die wir nutzen, sollte erneuerbar sein.', russian: 'Энергия, которую мы используем, должна быть возобновляемой.' },
          { german: 'Das Problem, über das wir sprechen, ist sehr wichtig.', russian: 'Проблема, о которой мы говорим, очень важная.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 3,
        level: 'b1',
        title: 'Экология и климат',
        titleDe: 'Ökologie und Klima',
        type: 'vocabulary',
        duration: 25,
        content: {
          introduction: 'Лексика об окружающей среде',
        },
        exercises: [
          {
            id: 'b1-3-1-ex1',
            type: 'fill-blank',
            question: 'Wir müssen die ___ schützen. (окружающая среда)',
            correctAnswer: 'Umwelt',
            points: 1,
          },
          {
            id: 'b1-3-1-ex2',
            type: 'multiple-choice',
            question: 'Что означает "recyceln"?',
            options: ['выбрасывать', 'загрязнять', 'перерабатывать', 'экономить'],
            correctAnswer: 'перерабатывать',
            points: 1,
          },
        ],
      },
      {
        id: 2,
        moduleId: 3,
        level: 'b1',
        title: 'Относительные придаточные',
        titleDe: 'Relativsätze',
        type: 'grammar',
        duration: 35,
        content: {
          introduction: 'Придаточные с относительными местоимениями',
        },
        exercises: [
          {
            id: 'b1-3-2-ex1',
            type: 'fill-blank',
            question: 'Das ist der Mann, ___ ich gestern gesehen habe.',
            correctAnswer: 'den',
            points: 1,
          },
          {
            id: 'b1-3-2-ex2',
            type: 'fill-blank',
            question: 'Die Frau, ___ ich geholfen habe, ist meine Nachbarin.',
            correctAnswer: 'der',
            points: 1,
          },
          {
            id: 'b1-3-2-ex3',
            type: 'translation',
            question: 'Переведите: Книга, которую я читаю, очень интересная.',
            correctAnswer: 'Das Buch, das ich lese, ist sehr interessant.',
            points: 2,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    level: 'b1',
    title: 'Политика и общество',
    titleDe: 'Politik und Gesellschaft',
    description: 'Демократия, права, мнения, Infinitiv mit zu',
    vocabulary: b1Vocabulary.filter(w => w.tags?.includes('module-4')),
    grammar: [
      {
        id: 'b1-g4-1',
        level: 'b1',
        title: 'Инфинитив с zu',
        titleDe: 'Infinitiv mit zu',
        description: 'Конструкции с zu + Infinitiv',
        explanation: `
# Инфинитив с zu

## Основное правило
После многих глаголов и выражений нужен **zu + Infinitiv**.

## После глаголов:
- versuchen (пытаться)
- beginnen, anfangen (начинать)
- aufhören (прекращать)
- vergessen (забывать)
- vorhaben (намереваться)
- hoffen (надеяться)

**Примеры:**
- Ich versuche, Deutsch **zu lernen**.
- Er hat vergessen, mich **anzurufen**.

## После выражений:
- Es ist wichtig/schwer/leicht/möglich...
- Ich habe Zeit/Lust/die Möglichkeit...

**Примеры:**
- Es ist wichtig, die Umwelt **zu schützen**.
- Ich habe keine Zeit, ins Kino **zu gehen**.

## Место zu
- Простой глагол: **zu** + Infinitiv (zu lernen)
- Отделяемая приставка: приставка + **zu** + глагол (anzurufen)

## Без zu!
После модальных глаголов и глаголов движения/восприятия:
- Ich **kann** schwimmen. (не: zu schwimmen)
- Ich **gehe** einkaufen. (не: zu einkaufen)
        `,
        examples: [
          { german: 'Es ist wichtig, seine Meinung zu sagen.', russian: 'Важно высказывать своё мнение.' },
          { german: 'Ich habe vor, mich politisch zu engagieren.', russian: 'Я намерен заниматься политикой.' },
          { german: 'Er versucht, das Gesetz zu verstehen.', russian: 'Он пытается понять закон.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 4,
        level: 'b1',
        title: 'Политика и права',
        titleDe: 'Politik und Rechte',
        type: 'vocabulary',
        duration: 25,
        content: {
          introduction: 'Лексика о политике и обществе',
        },
        exercises: [
          {
            id: 'b1-4-1-ex1',
            type: 'matching',
            question: 'Соедините слова с переводом',
            options: ['die Regierung', 'das Gesetz', 'wählen', 'die Demokratie'],
            correctAnswer: ['правительство', 'закон', 'выбирать', 'демократия'],
            points: 4,
          },
        ],
      },
      {
        id: 2,
        moduleId: 4,
        level: 'b1',
        title: 'Инфинитив с zu',
        titleDe: 'Infinitiv mit zu',
        type: 'grammar',
        duration: 30,
        content: {
          introduction: 'Конструкции с zu + инфинитив',
        },
        exercises: [
          {
            id: 'b1-4-2-ex1',
            type: 'fill-blank',
            question: 'Es ist wichtig, seine Meinung ___ sagen.',
            correctAnswer: 'zu',
            points: 1,
          },
          {
            id: 'b1-4-2-ex2',
            type: 'fill-blank',
            question: 'Er versucht, das Problem ___.',
            correctAnswer: 'zu lösen',
            points: 1,
          },
        ],
      },
      {
        id: 3,
        moduleId: 4,
        level: 'b1',
        title: 'Выражение мнения',
        titleDe: 'Meinungen ausdrücken',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Фразы для выражения мнения',
        },
        exercises: [
          {
            id: 'b1-4-3-ex1',
            type: 'translation',
            question: 'Переведите: По моему мнению, это правильно.',
            correctAnswer: 'Meiner Meinung nach ist das richtig.',
            points: 2,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    level: 'b1',
    title: 'Культура и досуг',
    titleDe: 'Kultur und Freizeit',
    description: 'Мероприятия, искусство, отдых, обзор грамматики',
    vocabulary: b1Vocabulary.filter(w => w.tags?.includes('module-5')),
    grammar: [
      {
        id: 'b1-g5-1',
        level: 'b1',
        title: 'Обзор: придаточные предложения',
        titleDe: 'Übersicht: Nebensätze',
        description: 'Все типы придаточных на уровне B1',
        explanation: `
# Обзор придаточных предложений

## Общее правило
В придаточном предложении глагол стоит **в конце**!

## Типы придаточных

### 1. dass (что)
- Ich denke, **dass** er recht **hat**.

### 2. weil (потому что)
- Ich bleibe zu Hause, **weil** ich krank **bin**.

### 3. wenn (если/когда)
- **Wenn** ich Zeit **habe**, rufe ich dich an.

### 4. obwohl (хотя)
- Er arbeitet, **obwohl** er müde **ist**.

### 5. als (когда — однократно в прошлом)
- **Als** ich jung **war**, spielte ich Fußball.

### 6. während (в то время как)
- **Während** ich lese, hört er Musik.

### 7. bevor (прежде чем)
- **Bevor** ich gehe, rufe ich dich an.

### 8. nachdem (после того как)
- **Nachdem** ich gegessen hatte, ging ich spazieren.

### 9. damit (чтобы)
- Ich lerne Deutsch, **damit** ich in Deutschland arbeiten **kann**.

### 10. Relativsätze (который)
- Das Buch, **das** ich lese, ist interessant.
        `,
        examples: [
          { german: 'Obwohl es regnet, gehen wir spazieren.', russian: 'Хотя идёт дождь, мы идём гулять.' },
          { german: 'Als ich Kind war, wohnte ich in Berlin.', russian: 'Когда я был ребёнком, я жил в Берлине.' },
          { german: 'Bevor du gehst, räum dein Zimmer auf.', russian: 'Прежде чем уйдёшь, убери комнату.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 5,
        level: 'b1',
        title: 'Культурные мероприятия',
        titleDe: 'Kulturelle Veranstaltungen',
        type: 'vocabulary',
        duration: 25,
        content: {
          introduction: 'Лексика о культуре и искусстве',
        },
        exercises: [
          {
            id: 'b1-5-1-ex1',
            type: 'fill-blank',
            question: 'Die ___ zeigt moderne Kunst. (выставка)',
            correctAnswer: 'Ausstellung',
            points: 1,
          },
          {
            id: 'b1-5-1-ex2',
            type: 'multiple-choice',
            question: 'Что означает "die Sehenswürdigkeit"?',
            options: ['сувенир', 'достопримечательность', 'зрелище', 'взгляд'],
            correctAnswer: 'достопримечательность',
            points: 1,
          },
        ],
      },
      {
        id: 2,
        moduleId: 5,
        level: 'b1',
        title: 'Обзор придаточных',
        titleDe: 'Nebensätze Übersicht',
        type: 'grammar',
        duration: 30,
        content: {
          introduction: 'Повторение всех типов придаточных',
        },
        exercises: [
          {
            id: 'b1-5-2-ex1',
            type: 'multiple-choice',
            question: 'Какой союз означает "хотя"?',
            options: ['weil', 'dass', 'obwohl', 'wenn'],
            correctAnswer: 'obwohl',
            points: 1,
          },
          {
            id: 'b1-5-2-ex2',
            type: 'fill-blank',
            question: '___ ich Kind war, wohnte ich in Berlin.',
            correctAnswer: 'Als',
            points: 1,
          },
        ],
      },
      {
        id: 3,
        moduleId: 5,
        level: 'b1',
        title: 'Итоговый тест B1',
        titleDe: 'Abschlusstest B1',
        type: 'test',
        duration: 30,
        content: {
          introduction: 'Проверьте свои знания уровня B1',
        },
        exercises: [
          {
            id: 'b1-5-3-ex1',
            type: 'fill-blank',
            question: 'Wenn ich Zeit ___, würde ich dich besuchen.',
            correctAnswer: 'hätte',
            points: 1,
          },
          {
            id: 'b1-5-3-ex2',
            type: 'fill-blank',
            question: 'Das Buch ___ gestern gelesen. (werden, Präteritum)',
            correctAnswer: 'wurde',
            points: 1,
          },
          {
            id: 'b1-5-3-ex3',
            type: 'translation',
            question: 'Переведите: Фильм, который я посмотрел, был интересным.',
            correctAnswer: 'Der Film, den ich gesehen habe, war interessant.',
            points: 2,
          },
        ],
      },
    ],
  },
];
