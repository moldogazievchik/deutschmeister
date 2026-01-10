import type { Module } from '../../../types';
import { a2Vocabulary } from './vocabulary';

export const a2Modules: Module[] = [
  {
    id: 1,
    level: 'a2',
    title: 'Путешествия',
    titleDe: 'Reisen',
    description: 'Бронирование, транспорт, отель, на границе',
    vocabulary: a2Vocabulary.filter(w => w.tags?.includes('module-1')),
    grammar: [
      {
        id: 'a2-g1-1',
        level: 'a2',
        title: 'Perfekt (прошедшее время)',
        titleDe: 'Perfekt',
        description: 'Прошедшее время с haben и sein',
        explanation: `
# Perfekt (Прошедшее время)

Самое употребительное прошедшее время в разговорной речи.

## Образование
**haben/sein + Partizip II**

### С haben (большинство глаголов):
| Лицо | Пример |
|------|--------|
| ich | habe gemacht |
| du | hast gemacht |
| er/sie/es | hat gemacht |
| wir | haben gemacht |
| ihr | habt gemacht |
| sie/Sie | haben gemacht |

### С sein (глаголы движения и изменения состояния):
- gehen → bin gegangen
- fahren → bin gefahren
- fliegen → bin geflogen
- kommen → bin gekommen
- bleiben → bin geblieben
- sein → bin gewesen
- werden → bin geworden

## Partizip II
- Слабые глаголы: ge- + основа + -t (machen → gemacht)
- Сильные глаголы: ge- + изменённая основа + -en (fahren → gefahren)
- Глаголы на -ieren: без ge- (reservieren → reserviert)
- Отделяемые приставки: приставка + ge- (aufstehen → aufgestanden)
        `,
        comparisonWithRussian: 'В русском для прошедшего достаточно одного глагола. В немецком Perfekt требует два элемента: вспомогательный глагол и причастие.',
        commonMistakes: [
          { wrong: 'Ich habe nach Berlin geflogen.', correct: 'Ich bin nach Berlin geflogen.', explanation: 'Глаголы движения используют sein' },
          { wrong: 'Ich habe reserviert das Hotel.', correct: 'Ich habe das Hotel reserviert.', explanation: 'Partizip II стоит в конце предложения' },
        ],
        examples: [
          { german: 'Ich habe ein Zimmer gebucht.', russian: 'Я забронировал номер.' },
          { german: 'Wir sind nach Italien geflogen.', russian: 'Мы полетели в Италию.' },
          { german: 'Hast du den Koffer gepackt?', russian: 'Ты упаковал чемодан?' },
        ],
        exercises: [],
      },
      {
        id: 'a2-g1-2',
        level: 'a2',
        title: 'Предлоги направления',
        titleDe: 'Direktionale Präpositionen',
        description: 'nach, in, zu, an + направление',
        explanation: `
# Предлоги направления

## nach
Используется с:
- Странами без артикля: nach Deutschland, nach Russland
- Городами: nach Berlin, nach Moskau
- Сторонами света: nach Norden, nach Süden
- Наречиями: nach Hause, nach oben

## in + Akkusativ
Используется с:
- Странами с артиклем: in die Schweiz, in die USA, in den Iran
- Закрытыми помещениями: ins Hotel, in die Stadt, ins Kino

## zu + Dativ
Используется с:
- Людьми: zum Arzt, zu meiner Freundin
- Учреждениями: zur Bank, zum Bahnhof
- Событиями: zur Party, zum Unterricht

## an + Akkusativ
- К водоёмам: ans Meer, an den See
- К вертикальным поверхностям: an die Wand
        `,
        comparisonWithRussian: 'В русском "в/на" + куда. В немецком выбор предлога зависит от типа места.',
        examples: [
          { german: 'Ich fahre nach Deutschland.', russian: 'Я еду в Германию.' },
          { german: 'Wir gehen ins Hotel.', russian: 'Мы идём в отель.' },
          { german: 'Er fährt zum Bahnhof.', russian: 'Он едет на вокзал.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 1,
        level: 'a2',
        title: 'Планирование поездки',
        titleDe: 'Eine Reise planen',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Научимся планировать путешествие и бронировать отель',
          tips: ['Слово "buchen" используется для бронирования', '"die Reise" — поездка, "die Fahrt" — путь'],
        },
        exercises: [
          {
            id: 'a2-1-1-ex1',
            type: 'multiple-choice',
            question: 'Как сказать "Я хочу забронировать номер"?',
            options: ['Ich möchte ein Zimmer kaufen', 'Ich möchte ein Zimmer buchen', 'Ich möchte ein Zimmer mieten', 'Ich möchte ein Zimmer nehmen'],
            correctAnswer: 'Ich möchte ein Zimmer buchen',
            points: 1,
          },
          {
            id: 'a2-1-1-ex2',
            type: 'fill-blank',
            question: 'Ich plane eine ___ nach Italien. (поездка)',
            correctAnswer: 'Reise',
            points: 1,
          },
        ],
      },
      {
        id: 2,
        moduleId: 1,
        level: 'a2',
        title: 'Perfekt с haben',
        titleDe: 'Perfekt mit haben',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'Учимся образовывать прошедшее время с haben',
        },
        exercises: [
          {
            id: 'a2-1-2-ex1',
            type: 'fill-blank',
            question: 'Ich ___ das Hotel gebucht. (haben)',
            correctAnswer: 'habe',
            points: 1,
          },
          {
            id: 'a2-1-2-ex2',
            type: 'fill-blank',
            question: 'Er hat den Koffer ___. (packen)',
            correctAnswer: 'gepackt',
            points: 1,
          },
          {
            id: 'a2-1-2-ex3',
            type: 'translation',
            question: 'Переведите: Ты забронировал билет?',
            correctAnswer: 'Hast du das Ticket gebucht?',
            points: 2,
          },
        ],
      },
      {
        id: 3,
        moduleId: 1,
        level: 'a2',
        title: 'Perfekt с sein',
        titleDe: 'Perfekt mit sein',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'Глаголы движения и изменения состояния образуют Perfekt с sein',
        },
        exercises: [
          {
            id: 'a2-1-3-ex1',
            type: 'fill-blank',
            question: 'Wir ___ nach Berlin geflogen.',
            correctAnswer: 'sind',
            points: 1,
          },
          {
            id: 'a2-1-3-ex2',
            type: 'multiple-choice',
            question: 'Выберите правильный вариант: "Er ___ mit dem Zug gefahren."',
            options: ['hat', 'ist', 'haben', 'sind'],
            correctAnswer: 'ist',
            points: 1,
          },
        ],
      },
      {
        id: 4,
        moduleId: 1,
        level: 'a2',
        title: 'На вокзале и в аэропорту',
        titleDe: 'Am Bahnhof und Flughafen',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Полезные фразы для вокзала и аэропорта',
        },
        exercises: [
          {
            id: 'a2-1-4-ex1',
            type: 'matching',
            question: 'Соедините слова с переводом',
            options: ['der Flughafen', 'der Bahnhof', 'das Flugzeug', 'der Zug'],
            correctAnswer: ['аэропорт', 'вокзал', 'самолёт', 'поезд'],
            points: 4,
          },
        ],
      },
      {
        id: 5,
        moduleId: 1,
        level: 'a2',
        title: 'Мини-тест: Путешествия',
        titleDe: 'Mini-Test: Reisen',
        type: 'test',
        duration: 15,
        content: {
          introduction: 'Проверим знания по теме путешествий',
        },
        exercises: [
          {
            id: 'a2-1-5-ex1',
            type: 'translation',
            question: 'Переведите: Мы полетели в Испанию.',
            correctAnswer: 'Wir sind nach Spanien geflogen.',
            points: 2,
          },
          {
            id: 'a2-1-5-ex2',
            type: 'fill-blank',
            question: 'Zeigen Sie bitte Ihren ___. (паспорт)',
            correctAnswer: 'Pass',
            points: 1,
          },
          {
            id: 'a2-1-5-ex3',
            type: 'multiple-choice',
            question: 'Какой глагол использует sein в Perfekt?',
            options: ['buchen', 'packen', 'fliegen', 'reservieren'],
            correctAnswer: 'fliegen',
            points: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    level: 'a2',
    title: 'Квартира и переезд',
    titleDe: 'Wohnung und Umzug',
    description: 'Поиск жилья, аренда, мебель, переезд',
    vocabulary: a2Vocabulary.filter(w => w.tags?.includes('module-2')),
    grammar: [
      {
        id: 'a2-g2-1',
        level: 'a2',
        title: 'Wechselpräpositionen',
        titleDe: 'Wechselpräpositionen',
        description: 'Предлоги с Dativ (где?) и Akkusativ (куда?)',
        explanation: `
# Wechselpräpositionen (Предлоги двойного управления)

Эти 9 предлогов меняют падеж в зависимости от вопроса:
- **Wo?** (где?) → Dativ
- **Wohin?** (куда?) → Akkusativ

## Предлоги
| Предлог | Значение |
|---------|----------|
| in | в |
| an | у, на (вертикально) |
| auf | на (горизонтально) |
| über | над |
| unter | под |
| vor | перед |
| hinter | за |
| neben | рядом |
| zwischen | между |

## Примеры
| Wo? (Dativ) | Wohin? (Akkusativ) |
|-------------|-------------------|
| Das Bild hängt an der Wand. | Ich hänge das Bild an die Wand. |
| Der Tisch steht im Zimmer. | Ich stelle den Tisch ins Zimmer. |
| Die Katze liegt auf dem Sofa. | Die Katze springt auf das Sofa. |
        `,
        comparisonWithRussian: 'В русском падеж зависит от глагола. В немецком важен вопрос: где или куда.',
        commonMistakes: [
          { wrong: 'Das Buch liegt auf den Tisch.', correct: 'Das Buch liegt auf dem Tisch.', explanation: 'Wo? → Dativ (dem Tisch)' },
          { wrong: 'Ich lege das Buch auf dem Tisch.', correct: 'Ich lege das Buch auf den Tisch.', explanation: 'Wohin? → Akkusativ (den Tisch)' },
        ],
        examples: [
          { german: 'Die Lampe steht auf dem Tisch.', russian: 'Лампа стоит на столе.' },
          { german: 'Ich stelle die Lampe auf den Tisch.', russian: 'Я ставлю лампу на стол.' },
          { german: 'Das Sofa steht zwischen dem Fenster und der Tür.', russian: 'Диван стоит между окном и дверью.' },
        ],
        exercises: [],
      },
      {
        id: 'a2-g2-2',
        level: 'a2',
        title: 'Глаголы положения',
        titleDe: 'Positions- und Richtungsverben',
        description: 'stehen/stellen, liegen/legen, sitzen/setzen, hängen',
        explanation: `
# Глаголы положения и действия

## Пары глаголов
| Положение (где?) | Действие (куда?) |
|------------------|------------------|
| stehen (стоять) | stellen (ставить) |
| liegen (лежать) | legen (класть) |
| sitzen (сидеть) | setzen (сажать) |
| hängen (висеть) | hängen (вешать) |

## Важно!
- Глаголы положения (stehen, liegen, sitzen) — сильные, с sein в Perfekt
- Глаголы действия (stellen, legen, setzen) — слабые, с haben в Perfekt

## Примеры
- Das Buch **liegt** auf dem Tisch. (Книга лежит на столе.)
- Ich **lege** das Buch auf den Tisch. (Я кладу книгу на стол.)
- Die Vase **steht** im Regal. (Ваза стоит на полке.)
- Ich **stelle** die Vase ins Regal. (Я ставлю вазу на полку.)
        `,
        examples: [
          { german: 'Der Schrank steht an der Wand.', russian: 'Шкаф стоит у стены.' },
          { german: 'Ich stelle den Schrank an die Wand.', russian: 'Я ставлю шкаф к стене.' },
          { german: 'Das Bild hängt über dem Sofa.', russian: 'Картина висит над диваном.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 2,
        level: 'a2',
        title: 'Поиск квартиры',
        titleDe: 'Wohnungssuche',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Лексика для поиска и аренды жилья',
        },
        exercises: [
          {
            id: 'a2-2-1-ex1',
            type: 'multiple-choice',
            question: 'Как называется арендная плата?',
            options: ['der Preis', 'die Miete', 'das Geld', 'die Kosten'],
            correctAnswer: 'die Miete',
            points: 1,
          },
          {
            id: 'a2-2-1-ex2',
            type: 'fill-blank',
            question: 'Der ___ gibt mir den Schlüssel. (арендодатель)',
            correctAnswer: 'Vermieter',
            points: 1,
          },
        ],
      },
      {
        id: 2,
        moduleId: 2,
        level: 'a2',
        title: 'Wechselpräpositionen',
        titleDe: 'Wechselpräpositionen',
        type: 'grammar',
        duration: 30,
        content: {
          introduction: 'Предлоги, меняющие падеж в зависимости от вопроса',
        },
        exercises: [
          {
            id: 'a2-2-2-ex1',
            type: 'fill-blank',
            question: 'Das Bild hängt an ___ Wand. (die)',
            correctAnswer: 'der',
            points: 1,
          },
          {
            id: 'a2-2-2-ex2',
            type: 'fill-blank',
            question: 'Ich hänge das Bild an ___ Wand. (die)',
            correctAnswer: 'die',
            points: 1,
          },
          {
            id: 'a2-2-2-ex3',
            type: 'multiple-choice',
            question: '"Das Buch liegt auf dem Tisch" — какой это падеж?',
            options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
            correctAnswer: 'Dativ',
            points: 1,
          },
        ],
      },
      {
        id: 3,
        moduleId: 2,
        level: 'a2',
        title: 'Обстановка квартиры',
        titleDe: 'Einrichtung',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Мебель и предметы интерьера',
        },
        exercises: [
          {
            id: 'a2-2-3-ex1',
            type: 'translation',
            question: 'Переведите: Мебель очень современная.',
            correctAnswer: 'Die Möbel sind sehr modern.',
            points: 2,
          },
        ],
      },
      {
        id: 4,
        moduleId: 2,
        level: 'a2',
        title: 'Мини-тест: Жильё',
        titleDe: 'Mini-Test: Wohnung',
        type: 'test',
        duration: 15,
        content: {
          introduction: 'Проверим знания по теме жилья',
        },
        exercises: [
          {
            id: 'a2-2-4-ex1',
            type: 'fill-blank',
            question: 'Der Tisch steht ___ dem Fenster. (перед)',
            correctAnswer: 'vor',
            points: 1,
          },
          {
            id: 'a2-2-4-ex2',
            type: 'translation',
            question: 'Переведите: Мы переезжаем на следующей неделе.',
            correctAnswer: 'Wir ziehen nächste Woche um.',
            points: 2,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    level: 'a2',
    title: 'Работа и карьера',
    titleDe: 'Arbeit und Beruf',
    description: 'Поиск работы, собеседование, офис, коллеги',
    vocabulary: a2Vocabulary.filter(w => w.tags?.includes('module-3')),
    grammar: [
      {
        id: 'a2-g3-1',
        level: 'a2',
        title: 'Придаточные с weil',
        titleDe: 'Nebensätze mit weil',
        description: 'Придаточные причины',
        explanation: `
# Придаточные предложения с weil (потому что)

## Порядок слов
В придаточном предложении глагол стоит **в конце**!

**Структура:**
Главное предложение + weil + подлежащее + ... + глагол

## Примеры
- Ich lerne Deutsch, **weil** ich in Deutschland arbeiten **möchte**.
- Er ist müde, **weil** er viel gearbeitet **hat**.
- Sie bleibt zu Hause, **weil** sie krank **ist**.

## Важно!
При изменении порядка (придаточное впереди) — глагол главного сразу после запятой:
- **Weil** ich krank **bin**, bleibe ich zu Hause.
        `,
        comparisonWithRussian: 'В русском порядок слов свободный. В немецком придаточном глагол строго в конце!',
        commonMistakes: [
          { wrong: 'Ich bleibe zu Hause, weil ich bin krank.', correct: 'Ich bleibe zu Hause, weil ich krank bin.', explanation: 'Глагол в придаточном стоит в конце' },
        ],
        examples: [
          { german: 'Ich suche einen neuen Job, weil das Gehalt zu niedrig ist.', russian: 'Я ищу новую работу, потому что зарплата слишком низкая.' },
          { german: 'Er hat gekündigt, weil er umziehen musste.', russian: 'Он уволился, потому что должен был переехать.' },
        ],
        exercises: [],
      },
      {
        id: 'a2-g3-2',
        level: 'a2',
        title: 'Придаточные с dass',
        titleDe: 'Nebensätze mit dass',
        description: 'Придаточные дополнительные',
        explanation: `
# Придаточные предложения с dass (что)

## Использование
После глаголов мнения, чувства, знания:
- denken, glauben, meinen (думать, полагать)
- wissen (знать)
- hoffen (надеяться)
- sagen (говорить)
- finden (находить, считать)

## Структура
Глагол в придаточном стоит **в конце**!

## Примеры
- Ich denke, **dass** er ein guter Kollege **ist**.
- Sie hofft, **dass** sie die Stelle **bekommt**.
- Er weiß, **dass** das Vorstellungsgespräch morgen **ist**.
        `,
        examples: [
          { german: 'Ich glaube, dass diese Arbeit interessant ist.', russian: 'Я думаю, что эта работа интересная.' },
          { german: 'Er sagt, dass er einen neuen Job hat.', russian: 'Он говорит, что у него новая работа.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 3,
        level: 'a2',
        title: 'В офисе',
        titleDe: 'Im Büro',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Лексика для рабочей среды',
        },
        exercises: [
          {
            id: 'a2-3-1-ex1',
            type: 'matching',
            question: 'Соедините слова с переводом',
            options: ['der Chef', 'der Kollege', 'das Gehalt', 'der Urlaub'],
            correctAnswer: ['начальник', 'коллега', 'зарплата', 'отпуск'],
            points: 4,
          },
        ],
      },
      {
        id: 2,
        moduleId: 3,
        level: 'a2',
        title: 'Придаточные с weil и dass',
        titleDe: 'Nebensätze mit weil und dass',
        type: 'grammar',
        duration: 30,
        content: {
          introduction: 'Учимся строить сложные предложения',
        },
        exercises: [
          {
            id: 'a2-3-2-ex1',
            type: 'fill-blank',
            question: 'Ich bleibe zu Hause, weil ich krank ___.',
            correctAnswer: 'bin',
            points: 1,
          },
          {
            id: 'a2-3-2-ex2',
            type: 'fill-blank',
            question: 'Er sagt, dass er morgen kommen ___.',
            correctAnswer: 'wird',
            points: 1,
          },
        ],
      },
      {
        id: 3,
        moduleId: 3,
        level: 'a2',
        title: 'Собеседование',
        titleDe: 'Vorstellungsgespräch',
        type: 'vocabulary',
        duration: 25,
        content: {
          introduction: 'Полезные фразы для собеседования',
        },
        exercises: [
          {
            id: 'a2-3-3-ex1',
            type: 'translation',
            question: 'Переведите: У меня завтра собеседование.',
            correctAnswer: 'Ich habe morgen ein Vorstellungsgespräch.',
            points: 2,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    level: 'a2',
    title: 'Здоровье',
    titleDe: 'Gesundheit',
    description: 'У врача, симптомы, аптека, страховка',
    vocabulary: a2Vocabulary.filter(w => w.tags?.includes('module-4')),
    grammar: [
      {
        id: 'a2-g4-1',
        level: 'a2',
        title: 'Модальные глаголы в Präteritum',
        titleDe: 'Modalverben im Präteritum',
        description: 'Прошедшее время модальных глаголов',
        explanation: `
# Модальные глаголы в Präteritum

Для модальных глаголов в прошедшем используется Präteritum (не Perfekt!).

## Формы
| Infinitiv | ich/er/sie/es | du | wir/sie/Sie | ihr |
|-----------|---------------|-----|-------------|-----|
| können | konnte | konntest | konnten | konntet |
| müssen | musste | musstest | mussten | musstet |
| wollen | wollte | wolltest | wollten | wolltet |
| sollen | sollte | solltest | sollten | solltet |
| dürfen | durfte | durftest | durften | durftet |
| mögen | mochte | mochtest | mochten | mochtet |

## Примеры
- Ich **konnte** gestern nicht kommen.
- Er **musste** zum Arzt gehen.
- Sie **wollte** keine Tabletten nehmen.
        `,
        comparisonWithRussian: 'Похоже на русское прошедшее: мог, должен был, хотел.',
        examples: [
          { german: 'Ich musste zum Arzt gehen.', russian: 'Мне нужно было идти к врачу.' },
          { german: 'Er konnte nicht arbeiten, weil er krank war.', russian: 'Он не мог работать, потому что был болен.' },
          { german: 'Sie durfte keine Süßigkeiten essen.', russian: 'Ей нельзя было есть сладости.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 4,
        level: 'a2',
        title: 'У врача',
        titleDe: 'Beim Arzt',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Как описать симптомы и понять врача',
        },
        exercises: [
          {
            id: 'a2-4-1-ex1',
            type: 'multiple-choice',
            question: 'Как сказать "У меня температура"?',
            options: ['Ich habe Hunger', 'Ich habe Fieber', 'Ich habe Durst', 'Ich habe Zeit'],
            correctAnswer: 'Ich habe Fieber',
            points: 1,
          },
          {
            id: 'a2-4-1-ex2',
            type: 'fill-blank',
            question: 'Der Arzt schreibt ein ___. (рецепт)',
            correctAnswer: 'Rezept',
            points: 1,
          },
        ],
      },
      {
        id: 2,
        moduleId: 4,
        level: 'a2',
        title: 'Модальные глаголы в прошедшем',
        titleDe: 'Modalverben im Präteritum',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'Прошедшее время модальных глаголов',
        },
        exercises: [
          {
            id: 'a2-4-2-ex1',
            type: 'fill-blank',
            question: 'Ich ___ gestern nicht kommen. (können)',
            correctAnswer: 'konnte',
            points: 1,
          },
          {
            id: 'a2-4-2-ex2',
            type: 'fill-blank',
            question: 'Er ___ zum Arzt gehen. (müssen)',
            correctAnswer: 'musste',
            points: 1,
          },
        ],
      },
      {
        id: 3,
        moduleId: 4,
        level: 'a2',
        title: 'В аптеке',
        titleDe: 'In der Apotheke',
        type: 'vocabulary',
        duration: 15,
        content: {
          introduction: 'Покупка лекарств в аптеке',
        },
        exercises: [
          {
            id: 'a2-4-3-ex1',
            type: 'translation',
            question: 'Переведите: Мне нужно лекарство от простуды.',
            correctAnswer: 'Ich brauche ein Medikament gegen Erkältung.',
            points: 2,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    level: 'a2',
    title: 'Медиа и коммуникация',
    titleDe: 'Medien und Kommunikation',
    description: 'Интернет, телефон, СМИ, соцсети',
    vocabulary: a2Vocabulary.filter(w => w.tags?.includes('module-5')),
    grammar: [
      {
        id: 'a2-g5-1',
        level: 'a2',
        title: 'Придаточные с wenn',
        titleDe: 'Nebensätze mit wenn',
        description: 'Условные предложения',
        explanation: `
# Придаточные предложения с wenn (если/когда)

## Значения wenn
1. **Условие** (если): Wenn ich Zeit habe, rufe ich dich an.
2. **Время** (когда, повторяющееся): Wenn ich aufstehe, trinke ich Kaffee.

## Порядок слов
Глагол в придаточном — **в конце**!

## Структура
**Главное + wenn + придаточное:**
Ich rufe dich an, **wenn** ich Zeit **habe**.

**Wenn + придаточное, главное:**
**Wenn** ich Zeit **habe**, rufe ich dich an.

## Примеры
- Wenn du Fragen hast, schreib mir eine E-Mail.
- Ich schaue Nachrichten, wenn ich frühstücke.
        `,
        examples: [
          { german: 'Wenn ich eine Nachricht bekomme, antworte ich sofort.', russian: 'Когда я получаю сообщение, я сразу отвечаю.' },
          { german: 'Ruf mich an, wenn du Zeit hast.', russian: 'Позвони мне, если у тебя будет время.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 5,
        level: 'a2',
        title: 'Интернет и соцсети',
        titleDe: 'Internet und soziale Medien',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Современная лексика для интернета',
        },
        exercises: [
          {
            id: 'a2-5-1-ex1',
            type: 'fill-blank',
            question: 'Ich ___ eine App herunter. (скачивать)',
            correctAnswer: 'lade',
            points: 1,
          },
          {
            id: 'a2-5-1-ex2',
            type: 'translation',
            question: 'Переведите: Я забыл свой пароль.',
            correctAnswer: 'Ich habe mein Passwort vergessen.',
            points: 2,
          },
        ],
      },
      {
        id: 2,
        moduleId: 5,
        level: 'a2',
        title: 'Придаточные с wenn',
        titleDe: 'Nebensätze mit wenn',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'Условные и временные предложения',
        },
        exercises: [
          {
            id: 'a2-5-2-ex1',
            type: 'fill-blank',
            question: 'Wenn ich Zeit ___, rufe ich dich an.',
            correctAnswer: 'habe',
            points: 1,
          },
          {
            id: 'a2-5-2-ex2',
            type: 'translation',
            question: 'Переведите: Если у тебя есть вопросы, напиши мне.',
            correctAnswer: 'Wenn du Fragen hast, schreib mir.',
            points: 2,
          },
        ],
      },
      {
        id: 3,
        moduleId: 5,
        level: 'a2',
        title: 'Мини-тест: Медиа',
        titleDe: 'Mini-Test: Medien',
        type: 'test',
        duration: 15,
        content: {
          introduction: 'Проверим знания по теме медиа',
        },
        exercises: [
          {
            id: 'a2-5-3-ex1',
            type: 'multiple-choice',
            question: 'Какое слово означает "скачивать"?',
            options: ['speichern', 'teilen', 'herunterladen', 'anrufen'],
            correctAnswer: 'herunterladen',
            points: 1,
          },
          {
            id: 'a2-5-3-ex2',
            type: 'fill-blank',
            question: 'Vergiss nicht, die Datei zu ___. (сохранять)',
            correctAnswer: 'speichern',
            points: 1,
          },
        ],
      },
    ],
  },
];
