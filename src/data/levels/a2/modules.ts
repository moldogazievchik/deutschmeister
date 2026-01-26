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
          {
            id: 'a2-1-1-ex3',
            type: 'matching',
            question: 'Соедините слова с переводом',
            options: ['die Buchung', 'der Reiseführer', 'das Visum', 'die Unterkunft'],
            correctAnswer: ['бронирование', 'путеводитель', 'виза', 'проживание'],
            points: 4,
          },
          {
            id: 'a2-1-1-ex4',
            type: 'translation',
            question: 'Переведите: Я хочу поехать в Испанию летом.',
            correctAnswer: 'Ich möchte im Sommer nach Spanien fahren.',
            points: 2,
          },
          {
            id: 'a2-1-1-ex5',
            type: 'fill-blank',
            question: 'Wir haben ein Doppelzimmer ___. (забронировать - Perfekt)',
            correctAnswer: 'gebucht',
            points: 1,
          },
          {
            id: 'a2-1-1-ex6',
            type: 'multiple-choice',
            question: 'Что такое "die Pauschalreise"?',
            options: ['Самостоятельная поездка', 'Турпакет "всё включено"', 'Рабочая командировка', 'Однодневная экскурсия'],
            correctAnswer: 'Турпакет "всё включено"',
            points: 1,
          },
          {
            id: 'a2-1-1-ex7',
            type: 'fill-blank',
            question: 'Die ___ beginnt am Montag. (путешествие)',
            correctAnswer: 'Reise',
            points: 1,
          },
          {
            id: 'a2-1-1-ex8',
            type: 'true-false',
            question: '"Buchen" означает "покупать билет".',
            correctAnswer: 'false',
            explanation: '"Buchen" означает "бронировать". "Покупать" - это "kaufen".',
            points: 1,
          },
          {
            id: 'a2-1-1-ex9',
            type: 'translation',
            question: 'Переведите: Где находится туристическое бюро?',
            correctAnswer: 'Wo ist das Reisebüro?',
            points: 2,
          },
          {
            id: 'a2-1-1-ex10',
            type: 'multiple-choice',
            question: 'Как спросить о наличии свободных номеров?',
            options: ['Haben Sie ein Zimmer?', 'Haben Sie ein Zimmer frei?', 'Ist hier ein Zimmer?', 'Wo ist mein Zimmer?'],
            correctAnswer: 'Haben Sie ein Zimmer frei?',
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
          {
            id: 'a2-1-2-ex4',
            type: 'multiple-choice',
            question: 'Выберите правильную форму: "Wir ___ die Tickets online gekauft."',
            options: ['hat', 'habe', 'haben', 'habt'],
            correctAnswer: 'haben',
            points: 1,
          },
          {
            id: 'a2-1-2-ex5',
            type: 'fill-blank',
            question: 'Sie ___ das Zimmer reserviert. (haben, она)',
            correctAnswer: 'hat',
            points: 1,
          },
          {
            id: 'a2-1-2-ex6',
            type: 'matching',
            question: 'Соедините глаголы с Partizip II',
            options: ['machen', 'kaufen', 'reservieren', 'packen'],
            correctAnswer: ['gemacht', 'gekauft', 'reserviert', 'gepackt'],
            points: 4,
          },
          {
            id: 'a2-1-2-ex7',
            type: 'translation',
            question: 'Переведите: Мы купили сувениры.',
            correctAnswer: 'Wir haben Souvenirs gekauft.',
            points: 2,
          },
          {
            id: 'a2-1-2-ex8',
            type: 'fill-blank',
            question: 'Ihr ___ alles organisiert. (haben)',
            correctAnswer: 'habt',
            points: 1,
          },
          {
            id: 'a2-1-2-ex9',
            type: 'true-false',
            question: 'Глагол "reservieren" образует Partizip II с приставкой "ge-".',
            correctAnswer: 'false',
            explanation: 'Глаголы на -ieren не имеют ge-: reserviert, telefoniert.',
            points: 1,
          },
          {
            id: 'a2-1-2-ex10',
            type: 'multiple-choice',
            question: 'Как сказать "Она упаковала чемодан"?',
            options: ['Sie packt den Koffer.', 'Sie hat den Koffer gepackt.', 'Sie ist den Koffer gepackt.', 'Sie haben den Koffer gepackt.'],
            correctAnswer: 'Sie hat den Koffer gepackt.',
            points: 1,
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
          {
            id: 'a2-1-3-ex3',
            type: 'fill-blank',
            question: 'Sie ___ gestern angekommen. (sein, она)',
            correctAnswer: 'ist',
            points: 1,
          },
          {
            id: 'a2-1-3-ex4',
            type: 'matching',
            question: 'Соедините глаголы с Partizip II',
            options: ['gehen', 'fahren', 'fliegen', 'kommen'],
            correctAnswer: ['gegangen', 'gefahren', 'geflogen', 'gekommen'],
            points: 4,
          },
          {
            id: 'a2-1-3-ex5',
            type: 'translation',
            question: 'Переведите: Мы поехали на море.',
            correctAnswer: 'Wir sind ans Meer gefahren.',
            points: 2,
          },
          {
            id: 'a2-1-3-ex6',
            type: 'multiple-choice',
            question: 'Какой глагол использует sein в Perfekt?',
            options: ['kaufen', 'bleiben', 'machen', 'buchen'],
            correctAnswer: 'bleiben',
            points: 1,
          },
          {
            id: 'a2-1-3-ex7',
            type: 'fill-blank',
            question: 'Ich ___ zu Hause geblieben. (sein)',
            correctAnswer: 'bin',
            points: 1,
          },
          {
            id: 'a2-1-3-ex8',
            type: 'true-false',
            question: 'Глагол "schwimmen" (плавать) использует haben в Perfekt.',
            correctAnswer: 'false',
            explanation: 'Глаголы движения используют sein: Ich bin geschwommen.',
            points: 1,
          },
          {
            id: 'a2-1-3-ex9',
            type: 'translation',
            question: 'Переведите: Когда ты приехал?',
            correctAnswer: 'Wann bist du angekommen?',
            points: 2,
          },
          {
            id: 'a2-1-3-ex10',
            type: 'multiple-choice',
            question: 'Как сказать "Они полетели в Париж"?',
            options: ['Sie haben nach Paris geflogen.', 'Sie sind nach Paris geflogen.', 'Sie fliegen nach Paris.', 'Sie waren nach Paris geflogen.'],
            correctAnswer: 'Sie sind nach Paris geflogen.',
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
          {
            id: 'a2-1-4-ex2',
            type: 'fill-blank',
            question: 'Der Zug fährt von ___ 5 ab. (платформа)',
            correctAnswer: 'Gleis',
            points: 1,
          },
          {
            id: 'a2-1-4-ex3',
            type: 'multiple-choice',
            question: 'Что такое "die Abflughalle"?',
            options: ['Зал прилёта', 'Зал вылета', 'Багажная лента', 'Паспортный контроль'],
            correctAnswer: 'Зал вылета',
            points: 1,
          },
          {
            id: 'a2-1-4-ex4',
            type: 'translation',
            question: 'Переведите: Где выход на посадку?',
            correctAnswer: 'Wo ist das Gate?',
            points: 2,
          },
          {
            id: 'a2-1-4-ex5',
            type: 'fill-blank',
            question: 'Ich muss durch die ___. (контроль безопасности)',
            correctAnswer: 'Sicherheitskontrolle',
            points: 1,
          },
          {
            id: 'a2-1-4-ex6',
            type: 'matching',
            question: 'Соедините слова',
            options: ['das Gepäck', 'der Koffer', 'die Verspätung', 'die Ankunft'],
            correctAnswer: ['багаж', 'чемодан', 'опоздание', 'прибытие'],
            points: 4,
          },
          {
            id: 'a2-1-4-ex7',
            type: 'multiple-choice',
            question: 'Как спросить о задержке рейса?',
            options: ['Ist der Flug pünktlich?', 'Hat der Flug Verspätung?', 'Wann fliegt das Flugzeug?', 'Wo ist der Flug?'],
            correctAnswer: 'Hat der Flug Verspätung?',
            points: 1,
          },
          {
            id: 'a2-1-4-ex8',
            type: 'fill-blank',
            question: 'Die ___ ist um 14 Uhr. (посадка)',
            correctAnswer: 'Boarding',
            points: 1,
          },
          {
            id: 'a2-1-4-ex9',
            type: 'translation',
            question: 'Переведите: Мой багаж потерялся.',
            correctAnswer: 'Mein Gepäck ist verloren gegangen.',
            points: 2,
          },
          {
            id: 'a2-1-4-ex10',
            type: 'true-false',
            question: '"Hin und zurück" означает "билет в одну сторону".',
            correctAnswer: 'false',
            explanation: '"Hin und zurück" — билет туда и обратно. "В одну сторону" — "einfache Fahrt".',
            points: 1,
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
          {
            id: 'a2-1-5-ex4',
            type: 'fill-blank',
            question: 'Ich ___ gestern den Flug gebucht. (haben)',
            correctAnswer: 'habe',
            points: 1,
          },
          {
            id: 'a2-1-5-ex5',
            type: 'matching',
            question: 'Соедините',
            options: ['ankommen', 'abfahren', 'umsteigen', 'einsteigen'],
            correctAnswer: ['прибывать', 'отправляться', 'пересаживаться', 'садиться'],
            points: 4,
          },
          {
            id: 'a2-1-5-ex6',
            type: 'translation',
            question: 'Переведите: Поезд опаздывает на 20 минут.',
            correctAnswer: 'Der Zug hat 20 Minuten Verspätung.',
            points: 2,
          },
          {
            id: 'a2-1-5-ex7',
            type: 'multiple-choice',
            question: '"Ich fahre nach Deutschland" — какой предлог используется?',
            options: ['in', 'zu', 'nach', 'an'],
            correctAnswer: 'nach',
            explanation: 'С названиями стран без артикля используется nach.',
            points: 1,
          },
          {
            id: 'a2-1-5-ex8',
            type: 'fill-blank',
            question: 'Sie ___ mit dem Auto nach Italien gefahren. (sein)',
            correctAnswer: 'sind',
            points: 1,
          },
          {
            id: 'a2-1-5-ex9',
            type: 'true-false',
            question: 'Partizip II глагола "telefonieren" — "getelefoniert".',
            correctAnswer: 'false',
            explanation: 'Глаголы на -ieren не имеют ge-: telefoniert.',
            points: 1,
          },
          {
            id: 'a2-1-5-ex10',
            type: 'translation',
            question: 'Переведите: Я забронировал номер на две ночи.',
            correctAnswer: 'Ich habe ein Zimmer für zwei Nächte gebucht.',
            points: 2,
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
          {
            id: 'a2-2-1-ex3',
            type: 'matching',
            question: 'Соедините слова с переводом',
            options: ['die Wohnung', 'die Kaution', 'der Mietvertrag', 'die Nebenkosten'],
            correctAnswer: ['квартира', 'залог', 'договор аренды', 'коммунальные'],
            points: 4,
          },
          {
            id: 'a2-2-1-ex4',
            type: 'translation',
            question: 'Переведите: Квартира стоит 800 евро в месяц.',
            correctAnswer: 'Die Wohnung kostet 800 Euro im Monat.',
            points: 2,
          },
          {
            id: 'a2-2-1-ex5',
            type: 'fill-blank',
            question: 'Die Wohnung hat drei ___. (комнаты)',
            correctAnswer: 'Zimmer',
            points: 1,
          },
          {
            id: 'a2-2-1-ex6',
            type: 'multiple-choice',
            question: 'Что такое "die Warmmiete"?',
            options: ['Холодная аренда', 'Аренда с коммунальными', 'Залог', 'Предоплата'],
            correctAnswer: 'Аренда с коммунальными',
            points: 1,
          },
          {
            id: 'a2-2-1-ex7',
            type: 'fill-blank',
            question: 'Ich suche eine ___ Wohnung. (двухкомнатная)',
            correctAnswer: '2-Zimmer',
            points: 1,
          },
          {
            id: 'a2-2-1-ex8',
            type: 'true-false',
            question: '"Kaltmiete" включает коммунальные платежи.',
            correctAnswer: 'false',
            explanation: '"Kaltmiete" — это аренда без коммунальных. С коммунальными — "Warmmiete".',
            points: 1,
          },
          {
            id: 'a2-2-1-ex9',
            type: 'translation',
            question: 'Переведите: Я ищу квартиру рядом с центром.',
            correctAnswer: 'Ich suche eine Wohnung in der Nähe vom Zentrum.',
            points: 2,
          },
          {
            id: 'a2-2-1-ex10',
            type: 'multiple-choice',
            question: 'Кто такой "der Mieter"?',
            options: ['Арендодатель', 'Арендатор', 'Сосед', 'Маклер'],
            correctAnswer: 'Арендатор',
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
          {
            id: 'a2-2-2-ex4',
            type: 'fill-blank',
            question: 'Die Katze springt auf ___ Sofa. (das)',
            correctAnswer: 'das',
            points: 1,
          },
          {
            id: 'a2-2-2-ex5',
            type: 'fill-blank',
            question: 'Die Katze liegt auf ___ Sofa. (das)',
            correctAnswer: 'dem',
            points: 1,
          },
          {
            id: 'a2-2-2-ex6',
            type: 'matching',
            question: 'Соедините предлоги с переводом',
            options: ['über', 'unter', 'neben', 'zwischen'],
            correctAnswer: ['над', 'под', 'рядом', 'между'],
            points: 4,
          },
          {
            id: 'a2-2-2-ex7',
            type: 'translation',
            question: 'Переведите: Лампа висит над столом.',
            correctAnswer: 'Die Lampe hängt über dem Tisch.',
            points: 2,
          },
          {
            id: 'a2-2-2-ex8',
            type: 'multiple-choice',
            question: 'Какой вопрос требует Akkusativ?',
            options: ['Wo?', 'Wohin?', 'Wann?', 'Wie?'],
            correctAnswer: 'Wohin?',
            points: 1,
          },
          {
            id: 'a2-2-2-ex9',
            type: 'fill-blank',
            question: 'Ich stelle die Vase auf ___ Regal. (das)',
            correctAnswer: 'das',
            points: 1,
          },
          {
            id: 'a2-2-2-ex10',
            type: 'translation',
            question: 'Переведите: Картина висит между окнами.',
            correctAnswer: 'Das Bild hängt zwischen den Fenstern.',
            points: 2,
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
          {
            id: 'a2-2-3-ex2',
            type: 'matching',
            question: 'Соедините слова',
            options: ['der Schrank', 'das Regal', 'der Teppich', 'die Gardine'],
            correctAnswer: ['шкаф', 'полка', 'ковёр', 'занавеска'],
            points: 4,
          },
          {
            id: 'a2-2-3-ex3',
            type: 'fill-blank',
            question: 'Die ___ steht im Wohnzimmer. (диван)',
            correctAnswer: 'Couch',
            points: 1,
          },
          {
            id: 'a2-2-3-ex4',
            type: 'multiple-choice',
            question: 'Что такое "der Kleiderschrank"?',
            options: ['Книжный шкаф', 'Платяной шкаф', 'Комод', 'Тумбочка'],
            correctAnswer: 'Платяной шкаф',
            points: 1,
          },
          {
            id: 'a2-2-3-ex5',
            type: 'fill-blank',
            question: 'Das Bett steht im ___. (спальня)',
            correctAnswer: 'Schlafzimmer',
            points: 1,
          },
          {
            id: 'a2-2-3-ex6',
            type: 'translation',
            question: 'Переведите: Стол стоит у окна.',
            correctAnswer: 'Der Tisch steht am Fenster.',
            points: 2,
          },
          {
            id: 'a2-2-3-ex7',
            type: 'matching',
            question: 'Соедините комнаты с переводом',
            options: ['die Küche', 'das Bad', 'der Flur', 'der Balkon'],
            correctAnswer: ['кухня', 'ванная', 'коридор', 'балкон'],
            points: 4,
          },
          {
            id: 'a2-2-3-ex8',
            type: 'fill-blank',
            question: 'Im Badezimmer gibt es eine ___ und ein Waschbecken. (душ)',
            correctAnswer: 'Dusche',
            points: 1,
          },
          {
            id: 'a2-2-3-ex9',
            type: 'true-false',
            question: '"Die Möbel" — это существительное единственного числа.',
            correctAnswer: 'false',
            explanation: '"Die Möbel" — множественное число. Глагол: Die Möbel sind...',
            points: 1,
          },
          {
            id: 'a2-2-3-ex10',
            type: 'multiple-choice',
            question: 'Где обычно стоит "der Kühlschrank"?',
            options: ['Im Schlafzimmer', 'In der Küche', 'Im Bad', 'Im Flur'],
            correctAnswer: 'In der Küche',
            points: 1,
          },
        ],
      },
      {
        id: 4,
        moduleId: 2,
        level: 'a2',
        title: 'Глаголы положения',
        titleDe: 'Positionsverben',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'stehen/stellen, liegen/legen, sitzen/setzen, hängen',
        },
        exercises: [
          {
            id: 'a2-2-4-ex1',
            type: 'multiple-choice',
            question: 'Какой глагол описывает положение (а не действие)?',
            options: ['stellen', 'stehen', 'legen', 'setzen'],
            correctAnswer: 'stehen',
            points: 1,
          },
          {
            id: 'a2-2-4-ex2',
            type: 'fill-blank',
            question: 'Das Buch ___ auf dem Tisch. (лежать)',
            correctAnswer: 'liegt',
            points: 1,
          },
          {
            id: 'a2-2-4-ex3',
            type: 'fill-blank',
            question: 'Ich ___ das Buch auf den Tisch. (класть)',
            correctAnswer: 'lege',
            points: 1,
          },
          {
            id: 'a2-2-4-ex4',
            type: 'matching',
            question: 'Соедините глаголы',
            options: ['stehen', 'stellen', 'liegen', 'legen'],
            correctAnswer: ['стоять', 'ставить', 'лежать', 'класть'],
            points: 4,
          },
          {
            id: 'a2-2-4-ex5',
            type: 'translation',
            question: 'Переведите: Ваза стоит на полке.',
            correctAnswer: 'Die Vase steht im Regal.',
            points: 2,
          },
          {
            id: 'a2-2-4-ex6',
            type: 'fill-blank',
            question: 'Die Kinder ___ am Tisch. (сидеть)',
            correctAnswer: 'sitzen',
            points: 1,
          },
          {
            id: 'a2-2-4-ex7',
            type: 'multiple-choice',
            question: 'Какой глагол требует Akkusativ?',
            options: ['stehen', 'liegen', 'stellen', 'sitzen'],
            correctAnswer: 'stellen',
            explanation: 'Глаголы действия (stellen, legen, setzen) требуют Akkusativ.',
            points: 1,
          },
          {
            id: 'a2-2-4-ex8',
            type: 'fill-blank',
            question: 'Das Bild ___ an der Wand. (висеть)',
            correctAnswer: 'hängt',
            points: 1,
          },
          {
            id: 'a2-2-4-ex9',
            type: 'translation',
            question: 'Переведите: Я сажаю ребёнка на стул.',
            correctAnswer: 'Ich setze das Kind auf den Stuhl.',
            points: 2,
          },
          {
            id: 'a2-2-4-ex10',
            type: 'true-false',
            question: 'Глагол "stehen" образует Perfekt с haben.',
            correctAnswer: 'false',
            explanation: 'Глаголы положения образуют Perfekt с sein: Er ist gestanden.',
            points: 1,
          },
        ],
      },
      {
        id: 5,
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
            id: 'a2-2-5-ex1',
            type: 'fill-blank',
            question: 'Der Tisch steht ___ dem Fenster. (перед)',
            correctAnswer: 'vor',
            points: 1,
          },
          {
            id: 'a2-2-5-ex2',
            type: 'translation',
            question: 'Переведите: Мы переезжаем на следующей неделе.',
            correctAnswer: 'Wir ziehen nächste Woche um.',
            points: 2,
          },
          {
            id: 'a2-2-5-ex3',
            type: 'multiple-choice',
            question: 'Как сказать "снимать квартиру"?',
            options: ['eine Wohnung kaufen', 'eine Wohnung mieten', 'eine Wohnung vermieten', 'eine Wohnung finden'],
            correctAnswer: 'eine Wohnung mieten',
            points: 1,
          },
          {
            id: 'a2-2-5-ex4',
            type: 'fill-blank',
            question: 'Ich ___ die Lampe auf den Tisch. (ставить)',
            correctAnswer: 'stelle',
            points: 1,
          },
          {
            id: 'a2-2-5-ex5',
            type: 'matching',
            question: 'Соедините',
            options: ['einziehen', 'ausziehen', 'umziehen', 'renovieren'],
            correctAnswer: ['въезжать', 'выезжать', 'переезжать', 'делать ремонт'],
            points: 4,
          },
          {
            id: 'a2-2-5-ex6',
            type: 'fill-blank',
            question: 'Die Wohnung liegt im dritten ___. (этаж)',
            correctAnswer: 'Stock',
            points: 1,
          },
          {
            id: 'a2-2-5-ex7',
            type: 'translation',
            question: 'Переведите: Я кладу ключи на стол.',
            correctAnswer: 'Ich lege die Schlüssel auf den Tisch.',
            points: 2,
          },
          {
            id: 'a2-2-5-ex8',
            type: 'multiple-choice',
            question: '"Ich hänge das Bild an die Wand" — какой падеж у "die Wand"?',
            options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
            correctAnswer: 'Akkusativ',
            points: 1,
          },
          {
            id: 'a2-2-5-ex9',
            type: 'fill-blank',
            question: 'Die Couch steht ___ der Wand. (у, около)',
            correctAnswer: 'an',
            points: 1,
          },
          {
            id: 'a2-2-5-ex10',
            type: 'translation',
            question: 'Переведите: Квартира светлая и просторная.',
            correctAnswer: 'Die Wohnung ist hell und geräumig.',
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
          {
            id: 'a2-3-1-ex2',
            type: 'fill-blank',
            question: 'Ich arbeite in einer großen ___. (фирма)',
            correctAnswer: 'Firma',
            points: 1,
          },
          {
            id: 'a2-3-1-ex3',
            type: 'multiple-choice',
            question: 'Что такое "die Besprechung"?',
            options: ['Перерыв', 'Совещание', 'Зарплата', 'Договор'],
            correctAnswer: 'Совещание',
            points: 1,
          },
          {
            id: 'a2-3-1-ex4',
            type: 'translation',
            question: 'Переведите: Мой начальник очень строгий.',
            correctAnswer: 'Mein Chef ist sehr streng.',
            points: 2,
          },
          {
            id: 'a2-3-1-ex5',
            type: 'fill-blank',
            question: 'Ich mache um 12 Uhr eine ___. (перерыв)',
            correctAnswer: 'Pause',
            points: 1,
          },
          {
            id: 'a2-3-1-ex6',
            type: 'matching',
            question: 'Соедините',
            options: ['der Arbeitsplatz', 'die Abteilung', 'der Termin', 'die Überstunden'],
            correctAnswer: ['рабочее место', 'отдел', 'встреча', 'сверхурочные'],
            points: 4,
          },
          {
            id: 'a2-3-1-ex7',
            type: 'multiple-choice',
            question: 'Как сказать "Я работаю полный день"?',
            options: ['Ich arbeite Teilzeit.', 'Ich arbeite Vollzeit.', 'Ich arbeite frei.', 'Ich arbeite wenig.'],
            correctAnswer: 'Ich arbeite Vollzeit.',
            points: 1,
          },
          {
            id: 'a2-3-1-ex8',
            type: 'fill-blank',
            question: 'Die ___ beginnt um 9 Uhr. (работа)',
            correctAnswer: 'Arbeit',
            points: 1,
          },
          {
            id: 'a2-3-1-ex9',
            type: 'true-false',
            question: '"Teilzeit" означает полный рабочий день.',
            correctAnswer: 'false',
            explanation: '"Teilzeit" — неполный рабочий день. "Vollzeit" — полный.',
            points: 1,
          },
          {
            id: 'a2-3-1-ex10',
            type: 'translation',
            question: 'Переведите: У меня сегодня много встреч.',
            correctAnswer: 'Ich habe heute viele Termine.',
            points: 2,
          },
        ],
      },
      {
        id: 2,
        moduleId: 3,
        level: 'a2',
        title: 'Придаточные с weil',
        titleDe: 'Nebensätze mit weil',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'Учимся объяснять причины',
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
            type: 'multiple-choice',
            question: 'Где стоит глагол в придаточном с weil?',
            options: ['На первом месте', 'На втором месте', 'В конце', 'После подлежащего'],
            correctAnswer: 'В конце',
            points: 1,
          },
          {
            id: 'a2-3-2-ex3',
            type: 'fill-blank',
            question: 'Er kommt nicht, weil er arbeiten ___.',
            correctAnswer: 'muss',
            points: 1,
          },
          {
            id: 'a2-3-2-ex4',
            type: 'translation',
            question: 'Переведите: Я устал, потому что много работал.',
            correctAnswer: 'Ich bin müde, weil ich viel gearbeitet habe.',
            points: 2,
          },
          {
            id: 'a2-3-2-ex5',
            type: 'fill-blank',
            question: 'Sie sucht einen neuen Job, weil das Gehalt zu niedrig ___.',
            correctAnswer: 'ist',
            points: 1,
          },
          {
            id: 'a2-3-2-ex6',
            type: 'multiple-choice',
            question: 'Выберите правильный порядок слов',
            options: ['weil ich bin krank', 'weil krank ich bin', 'weil ich krank bin', 'weil bin ich krank'],
            correctAnswer: 'weil ich krank bin',
            points: 1,
          },
          {
            id: 'a2-3-2-ex7',
            type: 'translation',
            question: 'Переведите: Он опоздал, потому что поезд задержался.',
            correctAnswer: 'Er ist zu spät gekommen, weil der Zug Verspätung hatte.',
            points: 2,
          },
          {
            id: 'a2-3-2-ex8',
            type: 'fill-blank',
            question: 'Ich lerne Deutsch, weil ich in Deutschland arbeiten ___.',
            correctAnswer: 'möchte',
            points: 1,
          },
          {
            id: 'a2-3-2-ex9',
            type: 'true-false',
            question: 'В придаточном с weil глагол стоит на втором месте.',
            correctAnswer: 'false',
            explanation: 'В придаточном с weil глагол стоит в конце.',
            points: 1,
          },
          {
            id: 'a2-3-2-ex10',
            type: 'translation',
            question: 'Переведите: Она не пришла, потому что была больна.',
            correctAnswer: 'Sie ist nicht gekommen, weil sie krank war.',
            points: 2,
          },
        ],
      },
      {
        id: 3,
        moduleId: 3,
        level: 'a2',
        title: 'Придаточные с dass',
        titleDe: 'Nebensätze mit dass',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'Выражаем мнения и передаём информацию',
        },
        exercises: [
          {
            id: 'a2-3-3-ex1',
            type: 'fill-blank',
            question: 'Er sagt, dass er morgen kommen ___.',
            correctAnswer: 'wird',
            points: 1,
          },
          {
            id: 'a2-3-3-ex2',
            type: 'multiple-choice',
            question: 'После каких глаголов используется dass?',
            options: ['gehen, fahren', 'denken, glauben, sagen', 'essen, trinken', 'lesen, schreiben'],
            correctAnswer: 'denken, glauben, sagen',
            points: 1,
          },
          {
            id: 'a2-3-3-ex3',
            type: 'fill-blank',
            question: 'Ich glaube, dass er ein guter Mitarbeiter ___.',
            correctAnswer: 'ist',
            points: 1,
          },
          {
            id: 'a2-3-3-ex4',
            type: 'translation',
            question: 'Переведите: Я думаю, что эта работа интересная.',
            correctAnswer: 'Ich denke, dass diese Arbeit interessant ist.',
            points: 2,
          },
          {
            id: 'a2-3-3-ex5',
            type: 'fill-blank',
            question: 'Sie hofft, dass sie die Stelle ___.',
            correctAnswer: 'bekommt',
            points: 1,
          },
          {
            id: 'a2-3-3-ex6',
            type: 'multiple-choice',
            question: 'Выберите правильный вариант',
            options: ['Ich weiß, dass er ist krank.', 'Ich weiß, dass krank er ist.', 'Ich weiß, dass er krank ist.', 'Ich weiß, er dass krank ist.'],
            correctAnswer: 'Ich weiß, dass er krank ist.',
            points: 1,
          },
          {
            id: 'a2-3-3-ex7',
            type: 'translation',
            question: 'Переведите: Он говорит, что у него новая работа.',
            correctAnswer: 'Er sagt, dass er einen neuen Job hat.',
            points: 2,
          },
          {
            id: 'a2-3-3-ex8',
            type: 'fill-blank',
            question: 'Ich finde, dass das Gehalt zu niedrig ___.',
            correctAnswer: 'ist',
            points: 1,
          },
          {
            id: 'a2-3-3-ex9',
            type: 'true-false',
            question: 'Придаточные с dass имеют такой же порядок слов, как и с weil.',
            correctAnswer: 'true',
            explanation: 'В обоих случаях глагол стоит в конце придаточного.',
            points: 1,
          },
          {
            id: 'a2-3-3-ex10',
            type: 'translation',
            question: 'Переведите: Мы надеемся, что проект будет успешным.',
            correctAnswer: 'Wir hoffen, dass das Projekt erfolgreich wird.',
            points: 2,
          },
        ],
      },
      {
        id: 4,
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
            id: 'a2-3-4-ex1',
            type: 'translation',
            question: 'Переведите: У меня завтра собеседование.',
            correctAnswer: 'Ich habe morgen ein Vorstellungsgespräch.',
            points: 2,
          },
          {
            id: 'a2-3-4-ex2',
            type: 'matching',
            question: 'Соедините',
            options: ['der Lebenslauf', 'die Bewerbung', 'die Erfahrung', 'die Ausbildung'],
            correctAnswer: ['резюме', 'заявка', 'опыт', 'образование'],
            points: 4,
          },
          {
            id: 'a2-3-4-ex3',
            type: 'fill-blank',
            question: 'Ich habe mich auf die ___ beworben. (должность)',
            correctAnswer: 'Stelle',
            points: 1,
          },
          {
            id: 'a2-3-4-ex4',
            type: 'multiple-choice',
            question: 'Что обычно спрашивают на собеседовании?',
            options: ['Wie alt sind Sie?', 'Was sind Ihre Stärken?', 'Sind Sie verheiratet?', 'Wie viel wiegen Sie?'],
            correctAnswer: 'Was sind Ihre Stärken?',
            points: 1,
          },
          {
            id: 'a2-3-4-ex5',
            type: 'translation',
            question: 'Переведите: Я имею 5 лет опыта работы.',
            correctAnswer: 'Ich habe 5 Jahre Berufserfahrung.',
            points: 2,
          },
          {
            id: 'a2-3-4-ex6',
            type: 'fill-blank',
            question: 'Meine ___ sind Teamarbeit und Kommunikation. (сильные стороны)',
            correctAnswer: 'Stärken',
            points: 1,
          },
          {
            id: 'a2-3-4-ex7',
            type: 'matching',
            question: 'Соедините фразы',
            options: ['sich bewerben', 'einstellen', 'kündigen', 'verdienen'],
            correctAnswer: ['подавать заявку', 'нанимать', 'увольняться', 'зарабатывать'],
            points: 4,
          },
          {
            id: 'a2-3-4-ex8',
            type: 'fill-blank',
            question: 'Wann kann ich bei Ihnen ___? (начать)',
            correctAnswer: 'anfangen',
            points: 1,
          },
          {
            id: 'a2-3-4-ex9',
            type: 'multiple-choice',
            question: 'Как спросить о зарплате вежливо?',
            options: ['Wie viel zahlen Sie?', 'Was ist das Gehalt?', 'Wie hoch ist das Gehalt?', 'Geben Sie mir Geld?'],
            correctAnswer: 'Wie hoch ist das Gehalt?',
            points: 1,
          },
          {
            id: 'a2-3-4-ex10',
            type: 'translation',
            question: 'Переведите: Когда я получу ответ?',
            correctAnswer: 'Wann bekomme ich eine Antwort?',
            points: 2,
          },
        ],
      },
      {
        id: 5,
        moduleId: 3,
        level: 'a2',
        title: 'Мини-тест: Работа',
        titleDe: 'Mini-Test: Arbeit',
        type: 'test',
        duration: 15,
        content: {
          introduction: 'Проверим знания по теме работы',
        },
        exercises: [
          {
            id: 'a2-3-5-ex1',
            type: 'fill-blank',
            question: 'Ich komme zu spät, weil der Bus Verspätung ___.',
            correctAnswer: 'hatte',
            points: 1,
          },
          {
            id: 'a2-3-5-ex2',
            type: 'translation',
            question: 'Переведите: Я работаю в IT-компании.',
            correctAnswer: 'Ich arbeite in einer IT-Firma.',
            points: 2,
          },
          {
            id: 'a2-3-5-ex3',
            type: 'multiple-choice',
            question: 'Что такое "der Arbeitsvertrag"?',
            options: ['Резюме', 'Трудовой договор', 'Отпуск', 'Зарплата'],
            correctAnswer: 'Трудовой договор',
            points: 1,
          },
          {
            id: 'a2-3-5-ex4',
            type: 'fill-blank',
            question: 'Er glaubt, dass er die Prüfung ___.',
            correctAnswer: 'besteht',
            points: 1,
          },
          {
            id: 'a2-3-5-ex5',
            type: 'matching',
            question: 'Соедините',
            options: ['befördern', 'entlassen', 'der Praktikant', 'die Kantine'],
            correctAnswer: ['повышать', 'увольнять', 'стажёр', 'столовая'],
            points: 4,
          },
          {
            id: 'a2-3-5-ex6',
            type: 'translation',
            question: 'Переведите: Мой коллега думает, что проект сложный.',
            correctAnswer: 'Mein Kollege denkt, dass das Projekt schwierig ist.',
            points: 2,
          },
          {
            id: 'a2-3-5-ex7',
            type: 'fill-blank',
            question: 'Ich habe einen ___ für ein Gespräch mit dem Chef. (встреча)',
            correctAnswer: 'Termin',
            points: 1,
          },
          {
            id: 'a2-3-5-ex8',
            type: 'multiple-choice',
            question: 'Выберите правильный порядок слов',
            options: ['Sie sagt, dass sie ist zufrieden.', 'Sie sagt, dass zufrieden sie ist.', 'Sie sagt, dass sie zufrieden ist.', 'Sie sagt, sie dass zufrieden ist.'],
            correctAnswer: 'Sie sagt, dass sie zufrieden ist.',
            points: 1,
          },
          {
            id: 'a2-3-5-ex9',
            type: 'fill-blank',
            question: 'Die Firma ___ neue Mitarbeiter. (искать)',
            correctAnswer: 'sucht',
            points: 1,
          },
          {
            id: 'a2-3-5-ex10',
            type: 'translation',
            question: 'Переведите: Я не могу прийти, потому что у меня совещание.',
            correctAnswer: 'Ich kann nicht kommen, weil ich eine Besprechung habe.',
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
          {
            id: 'a2-4-1-ex3',
            type: 'matching',
            question: 'Соедините симптомы',
            options: ['der Husten', 'der Schnupfen', 'die Kopfschmerzen', 'die Halsschmerzen'],
            correctAnswer: ['кашель', 'насморк', 'головная боль', 'боль в горле'],
            points: 4,
          },
          {
            id: 'a2-4-1-ex4',
            type: 'translation',
            question: 'Переведите: У меня болит живот.',
            correctAnswer: 'Ich habe Bauchschmerzen.',
            points: 2,
          },
          {
            id: 'a2-4-1-ex5',
            type: 'fill-blank',
            question: 'Ich bin ___. (больной)',
            correctAnswer: 'krank',
            points: 1,
          },
          {
            id: 'a2-4-1-ex6',
            type: 'multiple-choice',
            question: 'Что такое "die Sprechstunde"?',
            options: ['Операция', 'Приём врача', 'Рецепт', 'Больничный'],
            correctAnswer: 'Приём врача',
            points: 1,
          },
          {
            id: 'a2-4-1-ex7',
            type: 'fill-blank',
            question: 'Der Arzt untersucht den ___. (пациент)',
            correctAnswer: 'Patienten',
            points: 1,
          },
          {
            id: 'a2-4-1-ex8',
            type: 'translation',
            question: 'Переведите: Мне нужен больничный.',
            correctAnswer: 'Ich brauche eine Krankmeldung.',
            points: 2,
          },
          {
            id: 'a2-4-1-ex9',
            type: 'true-false',
            question: '"Ich habe mich erkältet" означает "У меня аллергия".',
            correctAnswer: 'false',
            explanation: '"Ich habe mich erkältet" — Я простудился.',
            points: 1,
          },
          {
            id: 'a2-4-1-ex10',
            type: 'multiple-choice',
            question: 'Как записаться на приём к врачу?',
            options: ['Ich kaufe einen Termin.', 'Ich möchte einen Termin machen.', 'Ich gebe einen Termin.', 'Ich nehme einen Termin.'],
            correctAnswer: 'Ich möchte einen Termin machen.',
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
          {
            id: 'a2-4-2-ex3',
            type: 'matching',
            question: 'Соедините глаголы в Präteritum',
            options: ['können', 'müssen', 'wollen', 'dürfen'],
            correctAnswer: ['konnte', 'musste', 'wollte', 'durfte'],
            points: 4,
          },
          {
            id: 'a2-4-2-ex4',
            type: 'translation',
            question: 'Переведите: Она не могла работать.',
            correctAnswer: 'Sie konnte nicht arbeiten.',
            points: 2,
          },
          {
            id: 'a2-4-2-ex5',
            type: 'fill-blank',
            question: 'Wir ___ nicht so viel essen. (sollen)',
            correctAnswer: 'sollten',
            points: 1,
          },
          {
            id: 'a2-4-2-ex6',
            type: 'multiple-choice',
            question: 'Выберите правильную форму: "Als Kind ___ ich kein Gemüse."',
            options: ['möchte', 'mochte', 'mögen', 'mag'],
            correctAnswer: 'mochte',
            points: 1,
          },
          {
            id: 'a2-4-2-ex7',
            type: 'fill-blank',
            question: 'Sie ___ keine Süßigkeiten essen. (dürfen - она)',
            correctAnswer: 'durfte',
            points: 1,
          },
          {
            id: 'a2-4-2-ex8',
            type: 'translation',
            question: 'Переведите: Мы хотели пойти в кино.',
            correctAnswer: 'Wir wollten ins Kino gehen.',
            points: 2,
          },
          {
            id: 'a2-4-2-ex9',
            type: 'true-false',
            question: 'Модальные глаголы в Präteritum имеют умлаут (ö, ü).',
            correctAnswer: 'false',
            explanation: 'В Präteritum модальные глаголы теряют умлаут: können → konnte.',
            points: 1,
          },
          {
            id: 'a2-4-2-ex10',
            type: 'multiple-choice',
            question: 'Как сказать "Я должен был..."?',
            options: ['Ich muss', 'Ich musste', 'Ich gemusst', 'Ich müsste'],
            correctAnswer: 'Ich musste',
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
        duration: 20,
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
          {
            id: 'a2-4-3-ex2',
            type: 'matching',
            question: 'Соедините лекарства',
            options: ['die Tablette', 'der Sirup', 'die Salbe', 'das Pflaster'],
            correctAnswer: ['таблетка', 'сироп', 'мазь', 'пластырь'],
            points: 4,
          },
          {
            id: 'a2-4-3-ex3',
            type: 'fill-blank',
            question: 'Nehmen Sie diese Tabletten dreimal ___. (в день)',
            correctAnswer: 'täglich',
            points: 1,
          },
          {
            id: 'a2-4-3-ex4',
            type: 'multiple-choice',
            question: 'Что означает "rezeptpflichtig"?',
            options: ['Без рецепта', 'По рецепту', 'Бесплатно', 'Дорого'],
            correctAnswer: 'По рецепту',
            points: 1,
          },
          {
            id: 'a2-4-3-ex5',
            type: 'fill-blank',
            question: 'Haben Sie etwas gegen ___? (головная боль)',
            correctAnswer: 'Kopfschmerzen',
            points: 1,
          },
          {
            id: 'a2-4-3-ex6',
            type: 'translation',
            question: 'Переведите: Принимайте по одной таблетке утром и вечером.',
            correctAnswer: 'Nehmen Sie morgens und abends je eine Tablette.',
            points: 2,
          },
          {
            id: 'a2-4-3-ex7',
            type: 'matching',
            question: 'Соедините',
            options: ['die Nebenwirkung', 'die Dosierung', 'der Beipackzettel', 'die Allergie'],
            correctAnswer: ['побочный эффект', 'дозировка', 'инструкция', 'аллергия'],
            points: 4,
          },
          {
            id: 'a2-4-3-ex8',
            type: 'fill-blank',
            question: 'Die Apotheke ist bis 18 Uhr ___. (открыта)',
            correctAnswer: 'geöffnet',
            points: 1,
          },
          {
            id: 'a2-4-3-ex9',
            type: 'true-false',
            question: '"Rezeptfrei" означает, что лекарство продаётся по рецепту.',
            correctAnswer: 'false',
            explanation: '"Rezeptfrei" — без рецепта. "Rezeptpflichtig" — по рецепту.',
            points: 1,
          },
          {
            id: 'a2-4-3-ex10',
            type: 'multiple-choice',
            question: 'Как спросить о побочных эффектах?',
            options: ['Hat das Nebenwirkungen?', 'Ist das teuer?', 'Wie schmeckt das?', 'Wann schließen Sie?'],
            correctAnswer: 'Hat das Nebenwirkungen?',
            points: 1,
          },
        ],
      },
      {
        id: 4,
        moduleId: 4,
        level: 'a2',
        title: 'Здоровый образ жизни',
        titleDe: 'Gesunder Lebensstil',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Лексика для здорового образа жизни',
        },
        exercises: [
          {
            id: 'a2-4-4-ex1',
            type: 'matching',
            question: 'Соедините',
            options: ['abnehmen', 'zunehmen', 'sich fit halten', 'sich ausruhen'],
            correctAnswer: ['худеть', 'толстеть', 'держать форму', 'отдыхать'],
            points: 4,
          },
          {
            id: 'a2-4-4-ex2',
            type: 'fill-blank',
            question: 'Sport treiben ist ___. (полезно)',
            correctAnswer: 'gesund',
            points: 1,
          },
          {
            id: 'a2-4-4-ex3',
            type: 'translation',
            question: 'Переведите: Я хочу похудеть.',
            correctAnswer: 'Ich möchte abnehmen.',
            points: 2,
          },
          {
            id: 'a2-4-4-ex4',
            type: 'multiple-choice',
            question: 'Что вредно для здоровья?',
            options: ['Obst essen', 'Rauchen', 'Sport treiben', 'Wasser trinken'],
            correctAnswer: 'Rauchen',
            points: 1,
          },
          {
            id: 'a2-4-4-ex5',
            type: 'fill-blank',
            question: 'Man soll viel ___ trinken. (вода)',
            correctAnswer: 'Wasser',
            points: 1,
          },
          {
            id: 'a2-4-4-ex6',
            type: 'translation',
            question: 'Переведите: Я занимаюсь спортом три раза в неделю.',
            correctAnswer: 'Ich treibe dreimal pro Woche Sport.',
            points: 2,
          },
          {
            id: 'a2-4-4-ex7',
            type: 'matching',
            question: 'Соедините',
            options: ['die Ernährung', 'die Bewegung', 'der Stress', 'der Schlaf'],
            correctAnswer: ['питание', 'движение', 'стресс', 'сон'],
            points: 4,
          },
          {
            id: 'a2-4-4-ex8',
            type: 'fill-blank',
            question: 'Ich versuche, ___ zu essen. (здоровый)',
            correctAnswer: 'gesund',
            points: 1,
          },
          {
            id: 'a2-4-4-ex9',
            type: 'true-false',
            question: '"Vegetarier" едят мясо.',
            correctAnswer: 'false',
            explanation: 'Vegetarier не едят мясо.',
            points: 1,
          },
          {
            id: 'a2-4-4-ex10',
            type: 'multiple-choice',
            question: 'Как сказать "вести здоровый образ жизни"?',
            options: ['gesund leben', 'krank leben', 'schnell leben', 'allein leben'],
            correctAnswer: 'gesund leben',
            points: 1,
          },
        ],
      },
      {
        id: 5,
        moduleId: 4,
        level: 'a2',
        title: 'Мини-тест: Здоровье',
        titleDe: 'Mini-Test: Gesundheit',
        type: 'test',
        duration: 15,
        content: {
          introduction: 'Проверим знания по теме здоровья',
        },
        exercises: [
          {
            id: 'a2-4-5-ex1',
            type: 'fill-blank',
            question: 'Er ___ letzte Woche zum Arzt gehen. (müssen)',
            correctAnswer: 'musste',
            points: 1,
          },
          {
            id: 'a2-4-5-ex2',
            type: 'translation',
            question: 'Переведите: У меня болит голова и температура.',
            correctAnswer: 'Ich habe Kopfschmerzen und Fieber.',
            points: 2,
          },
          {
            id: 'a2-4-5-ex3',
            type: 'multiple-choice',
            question: 'Что такое "die Krankenversicherung"?',
            options: ['Больница', 'Медицинская страховка', 'Рецепт', 'Лекарство'],
            correctAnswer: 'Медицинская страховка',
            points: 1,
          },
          {
            id: 'a2-4-5-ex4',
            type: 'fill-blank',
            question: 'Ich ___ als Kind nicht schwimmen. (können)',
            correctAnswer: 'konnte',
            points: 1,
          },
          {
            id: 'a2-4-5-ex5',
            type: 'matching',
            question: 'Соедините',
            options: ['der Notfall', 'die Untersuchung', 'die Impfung', 'die Operation'],
            correctAnswer: ['экстренный случай', 'обследование', 'прививка', 'операция'],
            points: 4,
          },
          {
            id: 'a2-4-5-ex6',
            type: 'translation',
            question: 'Переведите: Она не хотела принимать лекарства.',
            correctAnswer: 'Sie wollte keine Medikamente nehmen.',
            points: 2,
          },
          {
            id: 'a2-4-5-ex7',
            type: 'fill-blank',
            question: 'Gute ___! (выздоровление)',
            correctAnswer: 'Besserung',
            points: 1,
          },
          {
            id: 'a2-4-5-ex8',
            type: 'multiple-choice',
            question: 'Как сказать "Я простудился"?',
            options: ['Ich bin müde.', 'Ich habe mich erkältet.', 'Ich habe Hunger.', 'Ich bin verletzt.'],
            correctAnswer: 'Ich habe mich erkältet.',
            points: 1,
          },
          {
            id: 'a2-4-5-ex9',
            type: 'fill-blank',
            question: 'Sie ___ nicht rauchen. (dürfen - она, Präteritum)',
            correctAnswer: 'durfte',
            points: 1,
          },
          {
            id: 'a2-4-5-ex10',
            type: 'translation',
            question: 'Переведите: Врач сказал, что я должен отдыхать.',
            correctAnswer: 'Der Arzt sagte, dass ich mich ausruhen soll.',
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
          {
            id: 'a2-5-1-ex3',
            type: 'matching',
            question: 'Соедините слова',
            options: ['das Passwort', 'die E-Mail', 'der Link', 'die Webseite'],
            correctAnswer: ['пароль', 'электронная почта', 'ссылка', 'веб-страница'],
            points: 4,
          },
          {
            id: 'a2-5-1-ex4',
            type: 'multiple-choice',
            question: 'Что такое "der Anhang"?',
            options: ['Пароль', 'Вложение', 'Подпись', 'Тема письма'],
            correctAnswer: 'Вложение',
            points: 1,
          },
          {
            id: 'a2-5-1-ex5',
            type: 'fill-blank',
            question: 'Ich habe dir eine ___ geschickt. (электронная почта)',
            correctAnswer: 'E-Mail',
            points: 1,
          },
          {
            id: 'a2-5-1-ex6',
            type: 'translation',
            question: 'Переведите: Можешь прислать мне ссылку?',
            correctAnswer: 'Kannst du mir den Link schicken?',
            points: 2,
          },
          {
            id: 'a2-5-1-ex7',
            type: 'matching',
            question: 'Соедините',
            options: ['teilen', 'liken', 'posten', 'folgen'],
            correctAnswer: ['делиться', 'лайкать', 'публиковать', 'подписываться'],
            points: 4,
          },
          {
            id: 'a2-5-1-ex8',
            type: 'fill-blank',
            question: 'Ich muss mein ___ ändern. (пароль)',
            correctAnswer: 'Passwort',
            points: 1,
          },
          {
            id: 'a2-5-1-ex9',
            type: 'true-false',
            question: '"Hochladen" означает скачивать.',
            correctAnswer: 'false',
            explanation: '"Hochladen" — загружать (в сеть). "Herunterladen" — скачивать.',
            points: 1,
          },
          {
            id: 'a2-5-1-ex10',
            type: 'multiple-choice',
            question: 'Как сказать "Я онлайн"?',
            options: ['Ich bin online.', 'Ich bin offline.', 'Ich bin im Internet.', 'Ich bin am Computer.'],
            correctAnswer: 'Ich bin online.',
            points: 1,
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
          {
            id: 'a2-5-2-ex3',
            type: 'multiple-choice',
            question: 'Где стоит глагол в придаточном с wenn?',
            options: ['На первом месте', 'На втором месте', 'В конце', 'После wenn'],
            correctAnswer: 'В конце',
            points: 1,
          },
          {
            id: 'a2-5-2-ex4',
            type: 'fill-blank',
            question: 'Ich schaue Nachrichten, wenn ich Zeit ___.',
            correctAnswer: 'habe',
            points: 1,
          },
          {
            id: 'a2-5-2-ex5',
            type: 'translation',
            question: 'Переведите: Когда я получаю сообщение, я сразу отвечаю.',
            correctAnswer: 'Wenn ich eine Nachricht bekomme, antworte ich sofort.',
            points: 2,
          },
          {
            id: 'a2-5-2-ex6',
            type: 'multiple-choice',
            question: '"Wenn" может означать:',
            options: ['Только "если"', 'Только "когда"', '"Если" и "когда"', 'Только "потому что"'],
            correctAnswer: '"Если" и "когда"',
            points: 1,
          },
          {
            id: 'a2-5-2-ex7',
            type: 'fill-blank',
            question: 'Wenn das Internet nicht ___, kann ich nicht arbeiten.',
            correctAnswer: 'funktioniert',
            points: 1,
          },
          {
            id: 'a2-5-2-ex8',
            type: 'translation',
            question: 'Переведите: Если погода хорошая, мы пойдём гулять.',
            correctAnswer: 'Wenn das Wetter gut ist, gehen wir spazieren.',
            points: 2,
          },
          {
            id: 'a2-5-2-ex9',
            type: 'true-false',
            question: 'В предложении "Wenn ich müde bin, gehe ich schlafen" глагол главного предложения стоит на 3-м месте.',
            correctAnswer: 'false',
            explanation: 'Глагол главного предложения стоит сразу после запятой (на 1-м месте главного).',
            points: 1,
          },
          {
            id: 'a2-5-2-ex10',
            type: 'multiple-choice',
            question: 'Выберите правильный порядок слов',
            options: ['Wenn ich bin müde, schlafe ich.', 'Wenn müde ich bin, schlafe ich.', 'Wenn ich müde bin, schlafe ich.', 'Wenn ich müde bin, ich schlafe.'],
            correctAnswer: 'Wenn ich müde bin, schlafe ich.',
            points: 1,
          },
        ],
      },
      {
        id: 3,
        moduleId: 5,
        level: 'a2',
        title: 'Телефон и сообщения',
        titleDe: 'Telefon und Nachrichten',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Общение по телефону и в мессенджерах',
        },
        exercises: [
          {
            id: 'a2-5-3-ex1',
            type: 'matching',
            question: 'Соедините',
            options: ['anrufen', 'auflegen', 'eine SMS schicken', 'zurückrufen'],
            correctAnswer: ['звонить', 'класть трубку', 'отправить СМС', 'перезвонить'],
            points: 4,
          },
          {
            id: 'a2-5-3-ex2',
            type: 'fill-blank',
            question: 'Kann ich Sie morgen ___? (перезвонить)',
            correctAnswer: 'zurückrufen',
            points: 1,
          },
          {
            id: 'a2-5-3-ex3',
            type: 'translation',
            question: 'Переведите: Я не могу сейчас говорить.',
            correctAnswer: 'Ich kann jetzt nicht sprechen.',
            points: 2,
          },
          {
            id: 'a2-5-3-ex4',
            type: 'multiple-choice',
            question: 'Как начать телефонный разговор официально?',
            options: ['Hallo, ich bin...', 'Guten Tag, hier spricht...', 'Hey, was geht?', 'Ja, bitte?'],
            correctAnswer: 'Guten Tag, hier spricht...',
            points: 1,
          },
          {
            id: 'a2-5-3-ex5',
            type: 'fill-blank',
            question: 'Die ___ ist besetzt. (линия)',
            correctAnswer: 'Leitung',
            points: 1,
          },
          {
            id: 'a2-5-3-ex6',
            type: 'translation',
            question: 'Переведите: Могу я оставить сообщение?',
            correctAnswer: 'Kann ich eine Nachricht hinterlassen?',
            points: 2,
          },
          {
            id: 'a2-5-3-ex7',
            type: 'matching',
            question: 'Соедините',
            options: ['die Mailbox', 'das Telefonat', 'die Vorwahl', 'der Anruf'],
            correctAnswer: ['голосовая почта', 'телефонный разговор', 'код города', 'звонок'],
            points: 4,
          },
          {
            id: 'a2-5-3-ex8',
            type: 'fill-blank',
            question: 'Ich habe eine ___ bekommen. (сообщение)',
            correctAnswer: 'Nachricht',
            points: 1,
          },
          {
            id: 'a2-5-3-ex9',
            type: 'true-false',
            question: '"Auflegen" означает начать разговор.',
            correctAnswer: 'false',
            explanation: '"Auflegen" — положить трубку, завершить разговор.',
            points: 1,
          },
          {
            id: 'a2-5-3-ex10',
            type: 'multiple-choice',
            question: 'Как попросить кого-то подождать на линии?',
            options: ['Warten Sie bitte!', 'Einen Moment, bitte.', 'Legen Sie auf!', 'Rufen Sie zurück!'],
            correctAnswer: 'Einen Moment, bitte.',
            points: 1,
          },
        ],
      },
      {
        id: 4,
        moduleId: 5,
        level: 'a2',
        title: 'СМИ и новости',
        titleDe: 'Medien und Nachrichten',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Лексика для обсуждения новостей и медиа',
        },
        exercises: [
          {
            id: 'a2-5-4-ex1',
            type: 'matching',
            question: 'Соедините',
            options: ['die Zeitung', 'die Zeitschrift', 'die Nachrichten', 'der Artikel'],
            correctAnswer: ['газета', 'журнал', 'новости', 'статья'],
            points: 4,
          },
          {
            id: 'a2-5-4-ex2',
            type: 'fill-blank',
            question: 'Ich lese jeden Morgen die ___. (газета)',
            correctAnswer: 'Zeitung',
            points: 1,
          },
          {
            id: 'a2-5-4-ex3',
            type: 'translation',
            question: 'Переведите: Ты смотрел вчера новости?',
            correctAnswer: 'Hast du gestern die Nachrichten gesehen?',
            points: 2,
          },
          {
            id: 'a2-5-4-ex4',
            type: 'multiple-choice',
            question: 'Что такое "die Schlagzeile"?',
            options: ['Статья', 'Заголовок', 'Реклама', 'Журналист'],
            correctAnswer: 'Заголовок',
            points: 1,
          },
          {
            id: 'a2-5-4-ex5',
            type: 'fill-blank',
            question: 'Dieser ___ ist sehr interessant. (статья)',
            correctAnswer: 'Artikel',
            points: 1,
          },
          {
            id: 'a2-5-4-ex6',
            type: 'translation',
            question: 'Переведите: Я предпочитаю читать новости онлайн.',
            correctAnswer: 'Ich lese lieber Nachrichten online.',
            points: 2,
          },
          {
            id: 'a2-5-4-ex7',
            type: 'matching',
            question: 'Соедините',
            options: ['der Journalist', 'der Bericht', 'die Werbung', 'die Sendung'],
            correctAnswer: ['журналист', 'репортаж', 'реклама', 'передача'],
            points: 4,
          },
          {
            id: 'a2-5-4-ex8',
            type: 'fill-blank',
            question: 'Die ___ beginnt um 20 Uhr. (передача)',
            correctAnswer: 'Sendung',
            points: 1,
          },
          {
            id: 'a2-5-4-ex9',
            type: 'true-false',
            question: '"Der Podcast" используется только в немецком языке.',
            correctAnswer: 'false',
            explanation: '"Podcast" — международное слово, используется во многих языках.',
            points: 1,
          },
          {
            id: 'a2-5-4-ex10',
            type: 'multiple-choice',
            question: 'Как сказать "Я подписан на этот канал"?',
            options: ['Ich folge diesem Kanal.', 'Ich sehe diesen Kanal.', 'Ich habe diesen Kanal abonniert.', 'Ich mag diesen Kanal.'],
            correctAnswer: 'Ich habe diesen Kanal abonniert.',
            points: 1,
          },
        ],
      },
      {
        id: 5,
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
            id: 'a2-5-5-ex1',
            type: 'multiple-choice',
            question: 'Какое слово означает "скачивать"?',
            options: ['speichern', 'teilen', 'herunterladen', 'anrufen'],
            correctAnswer: 'herunterladen',
            points: 1,
          },
          {
            id: 'a2-5-5-ex2',
            type: 'fill-blank',
            question: 'Vergiss nicht, die Datei zu ___. (сохранять)',
            correctAnswer: 'speichern',
            points: 1,
          },
          {
            id: 'a2-5-5-ex3',
            type: 'translation',
            question: 'Переведите: Если у меня есть время, я смотрю видео.',
            correctAnswer: 'Wenn ich Zeit habe, schaue ich Videos.',
            points: 2,
          },
          {
            id: 'a2-5-5-ex4',
            type: 'fill-blank',
            question: 'Wenn das WLAN nicht ___, kann ich nicht arbeiten.',
            correctAnswer: 'funktioniert',
            points: 1,
          },
          {
            id: 'a2-5-5-ex5',
            type: 'matching',
            question: 'Соедините',
            options: ['der Bildschirm', 'die Tastatur', 'die Maus', 'der Drucker'],
            correctAnswer: ['экран', 'клавиатура', 'мышь', 'принтер'],
            points: 4,
          },
          {
            id: 'a2-5-5-ex6',
            type: 'translation',
            question: 'Переведите: Я перезвоню тебе позже.',
            correctAnswer: 'Ich rufe dich später zurück.',
            points: 2,
          },
          {
            id: 'a2-5-5-ex7',
            type: 'fill-blank',
            question: 'Ich habe mein Handy zu Hause ___. (забыть - Perfekt)',
            correctAnswer: 'vergessen',
            points: 1,
          },
          {
            id: 'a2-5-5-ex8',
            type: 'multiple-choice',
            question: 'Выберите правильный порядок слов',
            options: ['Wenn ich habe Zeit, lese ich.', 'Wenn Zeit ich habe, lese ich.', 'Wenn ich Zeit habe, lese ich.', 'Wenn ich Zeit habe, ich lese.'],
            correctAnswer: 'Wenn ich Zeit habe, lese ich.',
            points: 1,
          },
          {
            id: 'a2-5-5-ex9',
            type: 'fill-blank',
            question: 'Kann ich eine ___ hinterlassen? (сообщение)',
            correctAnswer: 'Nachricht',
            points: 1,
          },
          {
            id: 'a2-5-5-ex10',
            type: 'translation',
            question: 'Переведите: Интернет сегодня очень медленный.',
            correctAnswer: 'Das Internet ist heute sehr langsam.',
            points: 2,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    level: 'a2',
    title: 'Погода и климат',
    titleDe: 'Wetter und Klima',
    description: 'Погодные явления, времена года, прогноз погоды',
    vocabulary: a2Vocabulary.filter(w => w.tags?.includes('module-6')),
    grammar: [
      {
        id: 'a2-g6-1',
        level: 'a2',
        title: 'Сравнительная степень',
        titleDe: 'Komparativ',
        description: 'Сравнение прилагательных',
        explanation: `
# Сравнительная степень (Komparativ)

## Образование
Прилагательное + **-er** + als

## Примеры
- warm → wärmer: Heute ist es wärmer als gestern.
- kalt → kälter: Im Winter ist es kälter als im Herbst.
- groß → größer: Berlin ist größer als München.

## Особенности
- Односложные с a, o, u часто получают умлаут: warm → wärmer, kalt → kälter
- Исключения: gut → besser, viel → mehr, gern → lieber
        `,
        examples: [
          { german: 'Im Sommer ist es wärmer als im Frühling.', russian: 'Летом теплее, чем весной.' },
          { german: 'Das Wetter wird morgen besser.', russian: 'Погода завтра будет лучше.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 6,
        level: 'a2',
        title: 'Погодные явления',
        titleDe: 'Wettererscheinungen',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Описываем погоду на немецком',
        },
        exercises: [
          {
            id: 'a2-6-1-ex1',
            type: 'matching',
            question: 'Соедините слова',
            options: ['der Regen', 'der Schnee', 'der Wind', 'die Sonne'],
            correctAnswer: ['дождь', 'снег', 'ветер', 'солнце'],
            points: 4,
          },
          {
            id: 'a2-6-1-ex2',
            type: 'fill-blank',
            question: 'Es ___ heute. (идёт дождь)',
            correctAnswer: 'regnet',
            points: 1,
          },
          {
            id: 'a2-6-1-ex3',
            type: 'translation',
            question: 'Переведите: Сегодня солнечно и тепло.',
            correctAnswer: 'Heute ist es sonnig und warm.',
            points: 2,
          },
          {
            id: 'a2-6-1-ex4',
            type: 'multiple-choice',
            question: 'Как сказать "облачно"?',
            options: ['sonnig', 'bewölkt', 'regnerisch', 'windig'],
            correctAnswer: 'bewölkt',
            points: 1,
          },
          {
            id: 'a2-6-1-ex5',
            type: 'fill-blank',
            question: 'Im Winter ___ es oft. (идёт снег)',
            correctAnswer: 'schneit',
            points: 1,
          },
          {
            id: 'a2-6-1-ex6',
            type: 'matching',
            question: 'Соедините',
            options: ['das Gewitter', 'der Nebel', 'der Hagel', 'der Blitz'],
            correctAnswer: ['гроза', 'туман', 'град', 'молния'],
            points: 4,
          },
          {
            id: 'a2-6-1-ex7',
            type: 'translation',
            question: 'Переведите: Какая сегодня погода?',
            correctAnswer: 'Wie ist das Wetter heute?',
            points: 2,
          },
          {
            id: 'a2-6-1-ex8',
            type: 'fill-blank',
            question: 'Die ___ beträgt 25 Grad. (температура)',
            correctAnswer: 'Temperatur',
            points: 1,
          },
          {
            id: 'a2-6-1-ex9',
            type: 'true-false',
            question: '"Es ist schwül" означает, что холодно.',
            correctAnswer: 'false',
            explanation: '"Schwül" — душно, влажно и жарко.',
            points: 1,
          },
          {
            id: 'a2-6-1-ex10',
            type: 'multiple-choice',
            question: 'Что означает "Es donnert"?',
            options: ['Идёт дождь', 'Гремит гром', 'Дует ветер', 'Светит солнце'],
            correctAnswer: 'Гремит гром',
            points: 1,
          },
        ],
      },
      {
        id: 2,
        moduleId: 6,
        level: 'a2',
        title: 'Сравнительная степень',
        titleDe: 'Komparativ',
        type: 'grammar',
        duration: 25,
        content: {
          introduction: 'Учимся сравнивать',
        },
        exercises: [
          {
            id: 'a2-6-2-ex1',
            type: 'fill-blank',
            question: 'Heute ist es ___ als gestern. (warm)',
            correctAnswer: 'wärmer',
            points: 1,
          },
          {
            id: 'a2-6-2-ex2',
            type: 'multiple-choice',
            question: 'Выберите правильную форму: "Das Wetter ist heute ___."',
            options: ['gut', 'besser', 'mehr gut', 'guterr'],
            correctAnswer: 'besser',
            points: 1,
          },
          {
            id: 'a2-6-2-ex3',
            type: 'fill-blank',
            question: 'Im Winter ist es ___ als im Sommer. (kalt)',
            correctAnswer: 'kälter',
            points: 1,
          },
          {
            id: 'a2-6-2-ex4',
            type: 'translation',
            question: 'Переведите: Завтра будет холоднее.',
            correctAnswer: 'Morgen wird es kälter.',
            points: 2,
          },
          {
            id: 'a2-6-2-ex5',
            type: 'matching',
            question: 'Соедините формы',
            options: ['groß', 'viel', 'gut', 'gern'],
            correctAnswer: ['größer', 'mehr', 'besser', 'lieber'],
            points: 4,
          },
          {
            id: 'a2-6-2-ex6',
            type: 'fill-blank',
            question: 'Sie ist ___ als ich. (alt)',
            correctAnswer: 'älter',
            points: 1,
          },
          {
            id: 'a2-6-2-ex7',
            type: 'translation',
            question: 'Переведите: Лето лучше, чем зима.',
            correctAnswer: 'Der Sommer ist besser als der Winter.',
            points: 2,
          },
          {
            id: 'a2-6-2-ex8',
            type: 'multiple-choice',
            question: 'Какое слово не получает умлаут в Komparativ?',
            options: ['warm', 'kalt', 'schnell', 'lang'],
            correctAnswer: 'schnell',
            points: 1,
          },
          {
            id: 'a2-6-2-ex9',
            type: 'fill-blank',
            question: 'Ich trinke ___ Tee als Kaffee. (lieber)',
            correctAnswer: 'lieber',
            points: 1,
          },
          {
            id: 'a2-6-2-ex10',
            type: 'translation',
            question: 'Переведите: Этот город больше, чем тот.',
            correctAnswer: 'Diese Stadt ist größer als jene.',
            points: 2,
          },
        ],
      },
      {
        id: 3,
        moduleId: 6,
        level: 'a2',
        title: 'Времена года',
        titleDe: 'Jahreszeiten',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Времена года и их особенности',
        },
        exercises: [
          {
            id: 'a2-6-3-ex1',
            type: 'matching',
            question: 'Соедините времена года',
            options: ['der Frühling', 'der Sommer', 'der Herbst', 'der Winter'],
            correctAnswer: ['весна', 'лето', 'осень', 'зима'],
            points: 4,
          },
          {
            id: 'a2-6-3-ex2',
            type: 'fill-blank',
            question: 'Im ___ blühen die Blumen. (весна)',
            correctAnswer: 'Frühling',
            points: 1,
          },
          {
            id: 'a2-6-3-ex3',
            type: 'translation',
            question: 'Переведите: Моё любимое время года — лето.',
            correctAnswer: 'Meine Lieblingsjahreszeit ist der Sommer.',
            points: 2,
          },
          {
            id: 'a2-6-3-ex4',
            type: 'multiple-choice',
            question: 'Когда падают листья?',
            options: ['Im Frühling', 'Im Sommer', 'Im Herbst', 'Im Winter'],
            correctAnswer: 'Im Herbst',
            points: 1,
          },
          {
            id: 'a2-6-3-ex5',
            type: 'fill-blank',
            question: 'Im ___ ist es sehr heiß. (лето)',
            correctAnswer: 'Sommer',
            points: 1,
          },
          {
            id: 'a2-6-3-ex6',
            type: 'translation',
            question: 'Переведите: Зимой часто идёт снег.',
            correctAnswer: 'Im Winter schneit es oft.',
            points: 2,
          },
          {
            id: 'a2-6-3-ex7',
            type: 'matching',
            question: 'Соедините месяцы с временами года',
            options: ['März', 'Juli', 'Oktober', 'Januar'],
            correctAnswer: ['Frühling', 'Sommer', 'Herbst', 'Winter'],
            points: 4,
          },
          {
            id: 'a2-6-3-ex8',
            type: 'fill-blank',
            question: 'Die Tage werden im ___ kürzer. (осень)',
            correctAnswer: 'Herbst',
            points: 1,
          },
          {
            id: 'a2-6-3-ex9',
            type: 'true-false',
            question: 'В Германии самое тёплое время года — Herbst.',
            correctAnswer: 'false',
            explanation: 'Самое тёплое время года — Sommer.',
            points: 1,
          },
          {
            id: 'a2-6-3-ex10',
            type: 'multiple-choice',
            question: 'Какое время года начинается в декабре?',
            options: ['der Frühling', 'der Sommer', 'der Herbst', 'der Winter'],
            correctAnswer: 'der Winter',
            points: 1,
          },
        ],
      },
      {
        id: 4,
        moduleId: 6,
        level: 'a2',
        title: 'Прогноз погоды',
        titleDe: 'Wettervorhersage',
        type: 'vocabulary',
        duration: 20,
        content: {
          introduction: 'Понимаем прогноз погоды',
        },
        exercises: [
          {
            id: 'a2-6-4-ex1',
            type: 'fill-blank',
            question: 'Morgen wird es ___. (дождливо)',
            correctAnswer: 'regnerisch',
            points: 1,
          },
          {
            id: 'a2-6-4-ex2',
            type: 'matching',
            question: 'Соедините',
            options: ['die Höchsttemperatur', 'die Tiefsttemperatur', 'der Niederschlag', 'die Luftfeuchtigkeit'],
            correctAnswer: ['максимальная температура', 'минимальная температура', 'осадки', 'влажность воздуха'],
            points: 4,
          },
          {
            id: 'a2-6-4-ex3',
            type: 'translation',
            question: 'Переведите: Завтра ожидается дождь.',
            correctAnswer: 'Morgen wird Regen erwartet.',
            points: 2,
          },
          {
            id: 'a2-6-4-ex4',
            type: 'multiple-choice',
            question: 'Что означает "heiter bis wolkig"?',
            options: ['Ясно', 'Облачно', 'Переменная облачность', 'Пасмурно'],
            correctAnswer: 'Переменная облачность',
            points: 1,
          },
          {
            id: 'a2-6-4-ex5',
            type: 'fill-blank',
            question: 'Die ___ steigt auf 30 Grad. (температура)',
            correctAnswer: 'Temperatur',
            points: 1,
          },
          {
            id: 'a2-6-4-ex6',
            type: 'translation',
            question: 'Переведите: Прогноз погоды на неделю.',
            correctAnswer: 'Die Wettervorhersage für die Woche.',
            points: 2,
          },
          {
            id: 'a2-6-4-ex7',
            type: 'matching',
            question: 'Соедините',
            options: ['stark bewölkt', 'leicht bewölkt', 'Schauer', 'Auflockerungen'],
            correctAnswer: ['сильная облачность', 'лёгкая облачность', 'ливень', 'прояснения'],
            points: 4,
          },
          {
            id: 'a2-6-4-ex8',
            type: 'fill-blank',
            question: 'Es gibt eine ___ für morgen. (предупреждение о шторме)',
            correctAnswer: 'Sturmwarnung',
            points: 1,
          },
          {
            id: 'a2-6-4-ex9',
            type: 'true-false',
            question: '"Mild" означает очень холодно.',
            correctAnswer: 'false',
            explanation: '"Mild" — мягкий, умеренный (о погоде).',
            points: 1,
          },
          {
            id: 'a2-6-4-ex10',
            type: 'multiple-choice',
            question: 'Как спросить о погоде на завтра?',
            options: ['Wie war das Wetter?', 'Wie wird das Wetter morgen?', 'Wie ist das Wetter heute?', 'Wann regnet es?'],
            correctAnswer: 'Wie wird das Wetter morgen?',
            points: 1,
          },
        ],
      },
      {
        id: 5,
        moduleId: 6,
        level: 'a2',
        title: 'Мини-тест: Погода',
        titleDe: 'Mini-Test: Wetter',
        type: 'test',
        duration: 15,
        content: {
          introduction: 'Проверим знания по теме погоды',
        },
        exercises: [
          {
            id: 'a2-6-5-ex1',
            type: 'fill-blank',
            question: 'Heute ist es ___ als gestern. (тепло - сравнительная)',
            correctAnswer: 'wärmer',
            points: 1,
          },
          {
            id: 'a2-6-5-ex2',
            type: 'translation',
            question: 'Переведите: Идёт сильный дождь.',
            correctAnswer: 'Es regnet stark.',
            points: 2,
          },
          {
            id: 'a2-6-5-ex3',
            type: 'multiple-choice',
            question: 'Какая форма Komparativ от "gut"?',
            options: ['guter', 'besser', 'mehr gut', 'güter'],
            correctAnswer: 'besser',
            points: 1,
          },
          {
            id: 'a2-6-5-ex4',
            type: 'fill-blank',
            question: 'Im ___ fallen die Blätter. (осень)',
            correctAnswer: 'Herbst',
            points: 1,
          },
          {
            id: 'a2-6-5-ex5',
            type: 'matching',
            question: 'Соедините',
            options: ['sonnig', 'wolkig', 'windig', 'neblig'],
            correctAnswer: ['солнечно', 'облачно', 'ветрено', 'туманно'],
            points: 4,
          },
          {
            id: 'a2-6-5-ex6',
            type: 'translation',
            question: 'Переведите: Зима холоднее, чем осень.',
            correctAnswer: 'Der Winter ist kälter als der Herbst.',
            points: 2,
          },
          {
            id: 'a2-6-5-ex7',
            type: 'fill-blank',
            question: 'Die Temperatur beträgt 20 ___. (градусов)',
            correctAnswer: 'Grad',
            points: 1,
          },
          {
            id: 'a2-6-5-ex8',
            type: 'multiple-choice',
            question: 'Что означает "es schneit"?',
            options: ['Идёт дождь', 'Идёт снег', 'Дует ветер', 'Светит солнце'],
            correctAnswer: 'Идёт снег',
            points: 1,
          },
          {
            id: 'a2-6-5-ex9',
            type: 'fill-blank',
            question: 'Mein Bruder ist ___ als ich. (старший)',
            correctAnswer: 'älter',
            points: 1,
          },
          {
            id: 'a2-6-5-ex10',
            type: 'translation',
            question: 'Переведите: Прогноз погоды говорит, что завтра будет солнечно.',
            correctAnswer: 'Die Wettervorhersage sagt, dass es morgen sonnig wird.',
            points: 2,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    level: 'a2',
    title: 'Праздники и традиции',
    titleDe: 'Feste und Traditionen',
    description: 'Немецкие праздники, традиции, поздравления',
    vocabulary: a2Vocabulary.filter(w => w.tags?.includes('module-7')),
    grammar: [
      {
        id: 'a2-g7-1',
        level: 'a2',
        title: 'Превосходная степень',
        titleDe: 'Superlativ',
        description: 'Превосходная степень прилагательных',
        explanation: `
# Превосходная степень (Superlativ)

## Образование
**am + прилагательное + -sten** (предикативно)
**der/die/das + прилагательное + -ste** (атрибутивно)

## Примеры
- schnell → am schnellsten / der schnellste
- groß → am größten / der größte
- gut → am besten / der beste

## Особенности
- Умлаут как в Komparativ: alt → am ältesten
- После d, t, s, ß добавляется -e-: am kältesten
        `,
        examples: [
          { german: 'Weihnachten ist das wichtigste Fest.', russian: 'Рождество — самый важный праздник.' },
          { german: 'Der Dezember ist am kältesten.', russian: 'Декабрь — самый холодный.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 7,
        level: 'a2',
        title: 'Немецкие праздники',
        titleDe: 'Deutsche Feste',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Главные праздники в Германии' },
        exercises: [
          { id: 'a2-7-1-ex1', type: 'matching', question: 'Соедините праздники', options: ['Weihnachten', 'Ostern', 'Silvester', 'Karneval'], correctAnswer: ['Рождество', 'Пасха', 'Новый год', 'Карнавал'], points: 4 },
          { id: 'a2-7-1-ex2', type: 'fill-blank', question: '___ ist am 25. Dezember. (Рождество)', correctAnswer: 'Weihnachten', points: 1 },
          { id: 'a2-7-1-ex3', type: 'translation', question: 'Переведите: С Рождеством!', correctAnswer: 'Frohe Weihnachten!', points: 2 },
          { id: 'a2-7-1-ex4', type: 'multiple-choice', question: 'Когда празднуют Silvester?', options: ['24. Dezember', '25. Dezember', '31. Dezember', '1. Januar'], correctAnswer: '31. Dezember', points: 1 },
          { id: 'a2-7-1-ex5', type: 'fill-blank', question: 'Zu ___ suchen die Kinder Eier. (Пасха)', correctAnswer: 'Ostern', points: 1 },
          { id: 'a2-7-1-ex6', type: 'matching', question: 'Соедините', options: ['der Geburtstag', 'die Hochzeit', 'der Feiertag', 'das Geschenk'], correctAnswer: ['день рождения', 'свадьба', 'праздничный день', 'подарок'], points: 4 },
          { id: 'a2-7-1-ex7', type: 'translation', question: 'Переведите: С днём рождения!', correctAnswer: 'Alles Gute zum Geburtstag!', points: 2 },
          { id: 'a2-7-1-ex8', type: 'fill-blank', question: 'Der ___ ist mein Lieblingsfest. (карнавал)', correctAnswer: 'Karneval', points: 1 },
          { id: 'a2-7-1-ex9', type: 'true-false', question: 'Weihnachten празднуют весной.', correctAnswer: 'false', explanation: 'Weihnachten празднуют зимой, 25-26 декабря.', points: 1 },
          { id: 'a2-7-1-ex10', type: 'multiple-choice', question: 'Что такое "der Adventskranz"?', options: ['Ёлка', 'Рождественский венок', 'Подарок', 'Открытка'], correctAnswer: 'Рождественский венок', points: 1 },
        ],
      },
      {
        id: 2,
        moduleId: 7,
        level: 'a2',
        title: 'Превосходная степень',
        titleDe: 'Superlativ',
        type: 'grammar',
        duration: 25,
        content: { introduction: 'Говорим о самом лучшем, самом большом...' },
        exercises: [
          { id: 'a2-7-2-ex1', type: 'fill-blank', question: 'Das ist das ___ Fest. (wichtig)', correctAnswer: 'wichtigste', points: 1 },
          { id: 'a2-7-2-ex2', type: 'multiple-choice', question: 'Superlativ от "gut":', options: ['am gutsten', 'am bessten', 'am besten', 'am gütesten'], correctAnswer: 'am besten', points: 1 },
          { id: 'a2-7-2-ex3', type: 'fill-blank', question: 'Der Dezember ist am ___. (kalt)', correctAnswer: 'kältesten', points: 1 },
          { id: 'a2-7-2-ex4', type: 'translation', question: 'Переведите: Это самый красивый подарок.', correctAnswer: 'Das ist das schönste Geschenk.', points: 2 },
          { id: 'a2-7-2-ex5', type: 'matching', question: 'Соедините Superlativ', options: ['groß', 'viel', 'gern', 'hoch'], correctAnswer: ['am größten', 'am meisten', 'am liebsten', 'am höchsten'], points: 4 },
          { id: 'a2-7-2-ex6', type: 'fill-blank', question: 'Sie ist die ___ in der Familie. (alt)', correctAnswer: 'älteste', points: 1 },
          { id: 'a2-7-2-ex7', type: 'translation', question: 'Переведите: Рождество мне нравится больше всего.', correctAnswer: 'Weihnachten gefällt mir am besten.', points: 2 },
          { id: 'a2-7-2-ex8', type: 'multiple-choice', question: 'Выберите правильную форму', options: ['der schöneste', 'der schönste', 'der schönerste', 'der schönst'], correctAnswer: 'der schönste', points: 1 },
          { id: 'a2-7-2-ex9', type: 'fill-blank', question: 'Das ist am ___. (interessant)', correctAnswer: 'interessantesten', points: 1 },
          { id: 'a2-7-2-ex10', type: 'translation', question: 'Переведите: Он самый быстрый.', correctAnswer: 'Er ist am schnellsten.', points: 2 },
        ],
      },
      {
        id: 3,
        moduleId: 7,
        level: 'a2',
        title: 'Поздравления и пожелания',
        titleDe: 'Glückwünsche',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Как поздравлять на немецком' },
        exercises: [
          { id: 'a2-7-3-ex1', type: 'matching', question: 'Соедините поздравления', options: ['Alles Gute!', 'Herzlichen Glückwunsch!', 'Gute Besserung!', 'Viel Erfolg!'], correctAnswer: ['Всего хорошего!', 'Поздравляю!', 'Выздоравливай!', 'Удачи!'], points: 4 },
          { id: 'a2-7-3-ex2', type: 'fill-blank', question: 'Herzlichen ___ zum Geburtstag!', correctAnswer: 'Glückwunsch', points: 1 },
          { id: 'a2-7-3-ex3', type: 'translation', question: 'Переведите: Счастливого Нового года!', correctAnswer: 'Frohes neues Jahr!', points: 2 },
          { id: 'a2-7-3-ex4', type: 'multiple-choice', question: 'Что говорят на свадьбе?', options: ['Gute Reise!', 'Alles Gute zur Hochzeit!', 'Guten Appetit!', 'Gute Nacht!'], correctAnswer: 'Alles Gute zur Hochzeit!', points: 1 },
          { id: 'a2-7-3-ex5', type: 'fill-blank', question: 'Ich wünsche dir viel ___! (счастье)', correctAnswer: 'Glück', points: 1 },
          { id: 'a2-7-3-ex6', type: 'translation', question: 'Переведите: Приятного аппетита!', correctAnswer: 'Guten Appetit!', points: 2 },
          { id: 'a2-7-3-ex7', type: 'matching', question: 'Соедините', options: ['Prost!', 'Gesundheit!', 'Schöne Ferien!', 'Viel Spaß!'], correctAnswer: ['Ура! (тост)', 'Будь здоров!', 'Хороших каникул!', 'Веселись!'], points: 4 },
          { id: 'a2-7-3-ex8', type: 'fill-blank', question: '___ Ostern! (весёлый)', correctAnswer: 'Frohe', points: 1 },
          { id: 'a2-7-3-ex9', type: 'true-false', question: '"Prost!" говорят перед едой.', correctAnswer: 'false', explanation: '"Prost!" — тост перед питьём. Перед едой — "Guten Appetit!"', points: 1 },
          { id: 'a2-7-3-ex10', type: 'translation', question: 'Переведите: Желаю тебе всего наилучшего!', correctAnswer: 'Ich wünsche dir alles Gute!', points: 2 },
        ],
      },
      {
        id: 4,
        moduleId: 7,
        level: 'a2',
        title: 'Традиции и обычаи',
        titleDe: 'Bräuche und Traditionen',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Немецкие традиции и обычаи' },
        exercises: [
          { id: 'a2-7-4-ex1', type: 'matching', question: 'Соедините', options: ['der Weihnachtsbaum', 'der Osterhase', 'das Feuerwerk', 'der Adventskranz'], correctAnswer: ['ёлка', 'пасхальный заяц', 'фейерверк', 'адвентский венок'], points: 4 },
          { id: 'a2-7-4-ex2', type: 'fill-blank', question: 'Zu Weihnachten schmückt man den ___. (ёлка)', correctAnswer: 'Weihnachtsbaum', points: 1 },
          { id: 'a2-7-4-ex3', type: 'translation', question: 'Переведите: На Пасху дети ищут яйца.', correctAnswer: 'Zu Ostern suchen Kinder Eier.', points: 2 },
          { id: 'a2-7-4-ex4', type: 'multiple-choice', question: 'Что делают в Silvester?', options: ['Ostereier suchen', 'Feuerwerk anschauen', 'Weihnachtsbaum schmücken', 'Karnevalskostüme tragen'], correctAnswer: 'Feuerwerk anschauen', points: 1 },
          { id: 'a2-7-4-ex5', type: 'fill-blank', question: 'Zu Karneval tragen die Leute ___. (костюмы)', correctAnswer: 'Kostüme', points: 1 },
          { id: 'a2-7-4-ex6', type: 'translation', question: 'Переведите: На Рождество мы дарим подарки.', correctAnswer: 'Zu Weihnachten schenken wir Geschenke.', points: 2 },
          { id: 'a2-7-4-ex7', type: 'matching', question: 'Соедините', options: ['schenken', 'feiern', 'schmücken', 'einladen'], correctAnswer: ['дарить', 'праздновать', 'украшать', 'приглашать'], points: 4 },
          { id: 'a2-7-4-ex8', type: 'fill-blank', question: 'Wir ___ Weihnachten mit der Familie. (праздновать)', correctAnswer: 'feiern', points: 1 },
          { id: 'a2-7-4-ex9', type: 'true-false', question: 'Der Osterhase bringt Weihnachtsgeschenke.', correctAnswer: 'false', explanation: 'Der Osterhase приносит пасхальные яйца. На Рождество — Weihnachtsmann.', points: 1 },
          { id: 'a2-7-4-ex10', type: 'multiple-choice', question: 'Что едят на Рождество в Германии?', options: ['Ostereier', 'Gans oder Würstchen', 'Osterlamm', 'Berliner'], correctAnswer: 'Gans oder Würstchen', points: 1 },
        ],
      },
      {
        id: 5,
        moduleId: 7,
        level: 'a2',
        title: 'Мини-тест: Праздники',
        titleDe: 'Mini-Test: Feste',
        type: 'test',
        duration: 15,
        content: { introduction: 'Проверим знания по теме праздников' },
        exercises: [
          { id: 'a2-7-5-ex1', type: 'fill-blank', question: 'Das ist das ___ Geschenk. (schön)', correctAnswer: 'schönste', points: 1 },
          { id: 'a2-7-5-ex2', type: 'translation', question: 'Переведите: С Рождеством и Новым годом!', correctAnswer: 'Frohe Weihnachten und ein gutes neues Jahr!', points: 2 },
          { id: 'a2-7-5-ex3', type: 'multiple-choice', question: 'Когда в Германии Ostern?', options: ['Im Winter', 'Im Frühling', 'Im Sommer', 'Im Herbst'], correctAnswer: 'Im Frühling', points: 1 },
          { id: 'a2-7-5-ex4', type: 'fill-blank', question: 'Weihnachten gefällt mir am ___. (gut)', correctAnswer: 'besten', points: 1 },
          { id: 'a2-7-5-ex5', type: 'matching', question: 'Соедините', options: ['das Osterei', 'der Weihnachtsmann', 'die Kerze', 'der Tannenbaum'], correctAnswer: ['пасхальное яйцо', 'Дед Мороз', 'свеча', 'ёлка'], points: 4 },
          { id: 'a2-7-5-ex6', type: 'translation', question: 'Переведите: Это самый важный праздник.', correctAnswer: 'Das ist das wichtigste Fest.', points: 2 },
          { id: 'a2-7-5-ex7', type: 'fill-blank', question: '___ Glückwunsch zur Hochzeit!', correctAnswer: 'Herzlichen', points: 1 },
          { id: 'a2-7-5-ex8', type: 'multiple-choice', question: 'Superlativ от "viel":', options: ['am vielsten', 'am mehrsten', 'am meisten', 'am vielesten'], correctAnswer: 'am meisten', points: 1 },
          { id: 'a2-7-5-ex9', type: 'fill-blank', question: 'Zu Silvester gibt es ___. (фейерверк)', correctAnswer: 'Feuerwerk', points: 1 },
          { id: 'a2-7-5-ex10', type: 'translation', question: 'Переведите: Я желаю тебе счастья и здоровья.', correctAnswer: 'Ich wünsche dir Glück und Gesundheit.', points: 2 },
        ],
      },
    ],
  },
  {
    id: 8,
    level: 'a2',
    title: 'Образование',
    titleDe: 'Bildung',
    description: 'Школа, университет, курсы, экзамены',
    vocabulary: a2Vocabulary.filter(w => w.tags?.includes('module-8')),
    grammar: [
      {
        id: 'a2-g8-1',
        level: 'a2',
        title: 'Относительные местоимения',
        titleDe: 'Relativpronomen',
        description: 'der, die, das в придаточных определительных',
        explanation: `
# Относительные местоимения (Relativpronomen)

## Формы
| Падеж | Maskulin | Feminin | Neutrum | Plural |
|-------|----------|---------|---------|--------|
| Nom. | der | die | das | die |
| Akk. | den | die | das | die |
| Dat. | dem | der | dem | denen |

## Использование
- Der Mann, **der** dort steht, ist mein Lehrer.
- Die Frau, **die** ich kenne, ist Ärztin.
- Das Buch, **das** ich lese, ist interessant.
        `,
        examples: [
          { german: 'Der Lehrer, der Deutsch unterrichtet, ist nett.', russian: 'Учитель, который преподаёт немецкий, добрый.' },
          { german: 'Die Prüfung, die ich bestanden habe, war schwer.', russian: 'Экзамен, который я сдал, был сложным.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 8,
        level: 'a2',
        title: 'В школе и университете',
        titleDe: 'In Schule und Universität',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Лексика для образования' },
        exercises: [
          { id: 'a2-8-1-ex1', type: 'matching', question: 'Соедините', options: ['die Schule', 'die Universität', 'der Unterricht', 'die Prüfung'], correctAnswer: ['школа', 'университет', 'урок', 'экзамен'], points: 4 },
          { id: 'a2-8-1-ex2', type: 'fill-blank', question: 'Ich studiere an der ___. (университет)', correctAnswer: 'Universität', points: 1 },
          { id: 'a2-8-1-ex3', type: 'translation', question: 'Переведите: Я учусь в школе.', correctAnswer: 'Ich gehe in die Schule.', points: 2 },
          { id: 'a2-8-1-ex4', type: 'multiple-choice', question: 'Что такое "das Semester"?', options: ['Год', 'Месяц', 'Семестр', 'Неделя'], correctAnswer: 'Семестр', points: 1 },
          { id: 'a2-8-1-ex5', type: 'fill-blank', question: 'Die ___ beginnt um 8 Uhr. (урок)', correctAnswer: 'Stunde', points: 1 },
          { id: 'a2-8-1-ex6', type: 'matching', question: 'Соедините', options: ['der Schüler', 'der Student', 'der Lehrer', 'der Professor'], correctAnswer: ['ученик', 'студент', 'учитель', 'профессор'], points: 4 },
          { id: 'a2-8-1-ex7', type: 'translation', question: 'Переведите: Я изучаю информатику.', correctAnswer: 'Ich studiere Informatik.', points: 2 },
          { id: 'a2-8-1-ex8', type: 'fill-blank', question: 'Das ___ ist schwer. (предмет)', correctAnswer: 'Fach', points: 1 },
          { id: 'a2-8-1-ex9', type: 'true-false', question: '"Studieren" и "lernen" означают одно и то же.', correctAnswer: 'false', explanation: '"Studieren" — учиться в вузе, "lernen" — учить, изучать.', points: 1 },
          { id: 'a2-8-1-ex10', type: 'multiple-choice', question: 'Где учатся после школы?', options: ['Im Kindergarten', 'In der Grundschule', 'An der Universität', 'In der Kita'], correctAnswer: 'An der Universität', points: 1 },
        ],
      },
      {
        id: 2,
        moduleId: 8,
        level: 'a2',
        title: 'Относительные местоимения',
        titleDe: 'Relativpronomen',
        type: 'grammar',
        duration: 25,
        content: { introduction: 'Связываем предложения' },
        exercises: [
          { id: 'a2-8-2-ex1', type: 'fill-blank', question: 'Der Lehrer, ___ Deutsch unterrichtet, ist nett. (который)', correctAnswer: 'der', points: 1 },
          { id: 'a2-8-2-ex2', type: 'multiple-choice', question: '"Die Frau, ___ ich kenne" — выберите местоимение', options: ['der', 'die', 'das', 'den'], correctAnswer: 'die', points: 1 },
          { id: 'a2-8-2-ex3', type: 'fill-blank', question: 'Das Buch, ___ ich lese, ist interessant.', correctAnswer: 'das', points: 1 },
          { id: 'a2-8-2-ex4', type: 'translation', question: 'Переведите: Студент, который хорошо учится.', correctAnswer: 'Der Student, der gut lernt.', points: 2 },
          { id: 'a2-8-2-ex5', type: 'fill-blank', question: 'Der Mann, ___ ich helfe, ist mein Nachbar. (которому)', correctAnswer: 'dem', points: 1 },
          { id: 'a2-8-2-ex6', type: 'matching', question: 'Соедините падежи', options: ['Nominativ', 'Akkusativ', 'Dativ'], correctAnswer: ['der/die/das', 'den/die/das', 'dem/der/dem'], points: 3 },
          { id: 'a2-8-2-ex7', type: 'translation', question: 'Переведите: Курс, который я посещаю, интересный.', correctAnswer: 'Der Kurs, den ich besuche, ist interessant.', points: 2 },
          { id: 'a2-8-2-ex8', type: 'fill-blank', question: 'Die Schüler, ___ fleißig sind, bekommen gute Noten.', correctAnswer: 'die', points: 1 },
          { id: 'a2-8-2-ex9', type: 'true-false', question: 'Относительное местоимение всегда стоит в начале придаточного.', correctAnswer: 'true', points: 1 },
          { id: 'a2-8-2-ex10', type: 'multiple-choice', question: '"Das Kind, ___ ich kenne" — какой падеж?', options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], correctAnswer: 'Akkusativ', points: 1 },
        ],
      },
      {
        id: 3,
        moduleId: 8,
        level: 'a2',
        title: 'Экзамены и оценки',
        titleDe: 'Prüfungen und Noten',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Система оценок и экзамены' },
        exercises: [
          { id: 'a2-8-3-ex1', type: 'matching', question: 'Соедините оценки', options: ['sehr gut', 'gut', 'befriedigend', 'ausreichend'], correctAnswer: ['1 (отлично)', '2 (хорошо)', '3 (удовлетворительно)', '4 (достаточно)'], points: 4 },
          { id: 'a2-8-3-ex2', type: 'fill-blank', question: 'Ich habe die Prüfung ___. (сдать)', correctAnswer: 'bestanden', points: 1 },
          { id: 'a2-8-3-ex3', type: 'translation', question: 'Переведите: Я получил хорошую оценку.', correctAnswer: 'Ich habe eine gute Note bekommen.', points: 2 },
          { id: 'a2-8-3-ex4', type: 'multiple-choice', question: 'Какая оценка лучшая в Германии?', options: ['1', '5', '6', '10'], correctAnswer: '1', points: 1 },
          { id: 'a2-8-3-ex5', type: 'fill-blank', question: 'Die ___ war sehr schwer. (экзамен)', correctAnswer: 'Prüfung', points: 1 },
          { id: 'a2-8-3-ex6', type: 'matching', question: 'Соедините', options: ['bestehen', 'durchfallen', 'sich vorbereiten', 'wiederholen'], correctAnswer: ['сдать', 'провалить', 'готовиться', 'повторять'], points: 4 },
          { id: 'a2-8-3-ex7', type: 'translation', question: 'Переведите: Я готовлюсь к экзамену.', correctAnswer: 'Ich bereite mich auf die Prüfung vor.', points: 2 },
          { id: 'a2-8-3-ex8', type: 'fill-blank', question: 'Er ist durch die Prüfung ___. (провалиться)', correctAnswer: 'gefallen', points: 1 },
          { id: 'a2-8-3-ex9', type: 'true-false', question: 'В Германии оценка 6 — это отлично.', correctAnswer: 'false', explanation: '6 — худшая оценка. 1 — лучшая.', points: 1 },
          { id: 'a2-8-3-ex10', type: 'multiple-choice', question: 'Что такое "das Zeugnis"?', options: ['Экзамен', 'Оценка', 'Аттестат', 'Курс'], correctAnswer: 'Аттестат', points: 1 },
        ],
      },
      {
        id: 4,
        moduleId: 8,
        level: 'a2',
        title: 'Курсы и обучение',
        titleDe: 'Kurse und Weiterbildung',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Дополнительное образование' },
        exercises: [
          { id: 'a2-8-4-ex1', type: 'matching', question: 'Соедините', options: ['der Sprachkurs', 'die Volkshochschule', 'das Zertifikat', 'die Weiterbildung'], correctAnswer: ['языковой курс', 'народная школа', 'сертификат', 'повышение квалификации'], points: 4 },
          { id: 'a2-8-4-ex2', type: 'fill-blank', question: 'Ich besuche einen ___ für Deutsch. (курс)', correctAnswer: 'Kurs', points: 1 },
          { id: 'a2-8-4-ex3', type: 'translation', question: 'Переведите: Курс длится три месяца.', correctAnswer: 'Der Kurs dauert drei Monate.', points: 2 },
          { id: 'a2-8-4-ex4', type: 'multiple-choice', question: 'Где можно пройти языковые курсы?', options: ['Im Krankenhaus', 'In der Volkshochschule', 'Im Supermarkt', 'Am Flughafen'], correctAnswer: 'In der Volkshochschule', points: 1 },
          { id: 'a2-8-4-ex5', type: 'fill-blank', question: 'Nach dem Kurs bekomme ich ein ___. (сертификат)', correctAnswer: 'Zertifikat', points: 1 },
          { id: 'a2-8-4-ex6', type: 'translation', question: 'Переведите: Я хочу записаться на курс.', correctAnswer: 'Ich möchte mich für einen Kurs anmelden.', points: 2 },
          { id: 'a2-8-4-ex7', type: 'matching', question: 'Соедините', options: ['sich anmelden', 'teilnehmen', 'absolvieren', 'abbrechen'], correctAnswer: ['записаться', 'участвовать', 'окончить', 'бросить'], points: 4 },
          { id: 'a2-8-4-ex8', type: 'fill-blank', question: 'Die ___ findet abends statt. (занятие)', correctAnswer: 'Unterricht', points: 1 },
          { id: 'a2-8-4-ex9', type: 'true-false', question: 'Volkshochschule — это частная школа для богатых.', correctAnswer: 'false', explanation: 'Volkshochschule — народная школа с доступными курсами для всех.', points: 1 },
          { id: 'a2-8-4-ex10', type: 'multiple-choice', question: 'Что означает "der Stundenplan"?', options: ['Оценка', 'Расписание', 'Экзамен', 'Домашнее задание'], correctAnswer: 'Расписание', points: 1 },
        ],
      },
      {
        id: 5,
        moduleId: 8,
        level: 'a2',
        title: 'Мини-тест: Образование',
        titleDe: 'Mini-Test: Bildung',
        type: 'test',
        duration: 15,
        content: { introduction: 'Проверим знания по теме образования' },
        exercises: [
          { id: 'a2-8-5-ex1', type: 'fill-blank', question: 'Der Lehrer, ___ nett ist, unterrichtet Deutsch.', correctAnswer: 'der', points: 1 },
          { id: 'a2-8-5-ex2', type: 'translation', question: 'Переведите: Я изучаю немецкий в университете.', correctAnswer: 'Ich studiere Deutsch an der Universität.', points: 2 },
          { id: 'a2-8-5-ex3', type: 'multiple-choice', question: '"Die Studentin, ___ ich kenne" — какое местоимение?', options: ['der', 'die', 'das', 'den'], correctAnswer: 'die', points: 1 },
          { id: 'a2-8-5-ex4', type: 'fill-blank', question: 'Ich habe die Prüfung mit Note 2 ___. (сдать)', correctAnswer: 'bestanden', points: 1 },
          { id: 'a2-8-5-ex5', type: 'matching', question: 'Соедините', options: ['die Hausaufgabe', 'der Test', 'das Diplom', 'der Abschluss'], correctAnswer: ['домашнее задание', 'тест', 'диплом', 'окончание'], points: 4 },
          { id: 'a2-8-5-ex6', type: 'translation', question: 'Переведите: Книга, которую я читаю, интересная.', correctAnswer: 'Das Buch, das ich lese, ist interessant.', points: 2 },
          { id: 'a2-8-5-ex7', type: 'fill-blank', question: 'Das Semester ___ im Oktober. (начинаться)', correctAnswer: 'beginnt', points: 1 },
          { id: 'a2-8-5-ex8', type: 'multiple-choice', question: 'Что такое "die Bibliothek"?', options: ['Столовая', 'Библиотека', 'Спортзал', 'Аудитория'], correctAnswer: 'Библиотека', points: 1 },
          { id: 'a2-8-5-ex9', type: 'fill-blank', question: 'Die Frau, ___ ich helfe, ist meine Lehrerin. (которой)', correctAnswer: 'der', points: 1 },
          { id: 'a2-8-5-ex10', type: 'translation', question: 'Переведите: Я хочу получить сертификат B1.', correctAnswer: 'Ich möchte das B1-Zertifikat bekommen.', points: 2 },
        ],
      },
    ],
  },
  {
    id: 9,
    level: 'a2',
    title: 'Банки и финансы',
    titleDe: 'Banken und Finanzen',
    description: 'Счёт, переводы, оплата, бюджет',
    vocabulary: a2Vocabulary.filter(w => w.tags?.includes('module-9')),
    grammar: [
      {
        id: 'a2-g9-1',
        level: 'a2',
        title: 'Konjunktiv II (würde + Infinitiv)',
        titleDe: 'Konjunktiv II',
        description: 'Вежливые просьбы и нереальные условия',
        explanation: `
# Konjunktiv II (würde + Infinitiv)

## Использование
- Вежливые просьбы: Würden Sie mir helfen?
- Желания: Ich würde gern nach Deutschland fahren.
- Нереальные условия: Wenn ich reich wäre, würde ich reisen.

## Формы würde
| Лицо | Форма |
|------|-------|
| ich | würde |
| du | würdest |
| er/sie/es | würde |
| wir | würden |
| ihr | würdet |
| sie/Sie | würden |
        `,
        examples: [
          { german: 'Würden Sie mir bitte helfen?', russian: 'Не могли бы вы мне помочь?' },
          { german: 'Ich würde gern ein Konto eröffnen.', russian: 'Я хотел бы открыть счёт.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 9,
        level: 'a2',
        title: 'В банке',
        titleDe: 'In der Bank',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Лексика для банковских операций' },
        exercises: [
          { id: 'a2-9-1-ex1', type: 'matching', question: 'Соедините', options: ['das Konto', 'die Überweisung', 'der Geldautomat', 'die Kreditkarte'], correctAnswer: ['счёт', 'перевод', 'банкомат', 'кредитная карта'], points: 4 },
          { id: 'a2-9-1-ex2', type: 'fill-blank', question: 'Ich möchte ein ___ eröffnen. (счёт)', correctAnswer: 'Konto', points: 1 },
          { id: 'a2-9-1-ex3', type: 'translation', question: 'Переведите: Где здесь банкомат?', correctAnswer: 'Wo ist hier ein Geldautomat?', points: 2 },
          { id: 'a2-9-1-ex4', type: 'multiple-choice', question: 'Что такое "die PIN"?', options: ['Номер счёта', 'ПИН-код', 'Процент', 'Сумма'], correctAnswer: 'ПИН-код', points: 1 },
          { id: 'a2-9-1-ex5', type: 'fill-blank', question: 'Ich muss Geld ___. (снять)', correctAnswer: 'abheben', points: 1 },
          { id: 'a2-9-1-ex6', type: 'matching', question: 'Соедините', options: ['einzahlen', 'abheben', 'überweisen', 'sparen'], correctAnswer: ['вносить', 'снимать', 'переводить', 'экономить'], points: 4 },
          { id: 'a2-9-1-ex7', type: 'translation', question: 'Переведите: Я хотел бы сделать перевод.', correctAnswer: 'Ich möchte eine Überweisung machen.', points: 2 },
          { id: 'a2-9-1-ex8', type: 'fill-blank', question: 'Der ___ beträgt 100 Euro. (сумма)', correctAnswer: 'Betrag', points: 1 },
          { id: 'a2-9-1-ex9', type: 'true-false', question: '"Bargeld" означает безналичный расчёт.', correctAnswer: 'false', explanation: '"Bargeld" — наличные. Безналичный — "bargeldlos".', points: 1 },
          { id: 'a2-9-1-ex10', type: 'multiple-choice', question: 'Как спросить о балансе счёта?', options: ['Wie viel Geld habe ich?', 'Was ist mein Kontostand?', 'Wo ist mein Geld?', 'Wann bekomme ich Geld?'], correctAnswer: 'Was ist mein Kontostand?', points: 1 },
        ],
      },
      {
        id: 2,
        moduleId: 9,
        level: 'a2',
        title: 'Konjunktiv II - вежливые просьбы',
        titleDe: 'Konjunktiv II - höfliche Bitten',
        type: 'grammar',
        duration: 25,
        content: { introduction: 'Учимся просить вежливо' },
        exercises: [
          { id: 'a2-9-2-ex1', type: 'fill-blank', question: '___ Sie mir bitte helfen? (würden)', correctAnswer: 'Würden', points: 1 },
          { id: 'a2-9-2-ex2', type: 'multiple-choice', question: 'Выберите вежливую форму', options: ['Ich will ein Konto.', 'Ich möchte ein Konto.', 'Ich würde gern ein Konto eröffnen.', 'Geben Sie mir ein Konto!'], correctAnswer: 'Ich würde gern ein Konto eröffnen.', points: 1 },
          { id: 'a2-9-2-ex3', type: 'fill-blank', question: 'Ich ___ gern Geld abheben. (würde)', correctAnswer: 'würde', points: 1 },
          { id: 'a2-9-2-ex4', type: 'translation', question: 'Переведите: Не могли бы вы мне это объяснить?', correctAnswer: 'Würden Sie mir das erklären?', points: 2 },
          { id: 'a2-9-2-ex5', type: 'matching', question: 'Соедините формы würde', options: ['ich', 'du', 'wir', 'Sie'], correctAnswer: ['würde', 'würdest', 'würden', 'würden'], points: 4 },
          { id: 'a2-9-2-ex6', type: 'fill-blank', question: '___ du mir bitte die Rechnung geben? (würden)', correctAnswer: 'Würdest', points: 1 },
          { id: 'a2-9-2-ex7', type: 'translation', question: 'Переведите: Я хотел бы заплатить картой.', correctAnswer: 'Ich würde gern mit Karte zahlen.', points: 2 },
          { id: 'a2-9-2-ex8', type: 'multiple-choice', question: 'Какая форма вежливее?', options: ['Machen Sie das!', 'Könnten Sie das machen?', 'Sie machen das!', 'Das machen!'], correctAnswer: 'Könnten Sie das machen?', points: 1 },
          { id: 'a2-9-2-ex9', type: 'fill-blank', question: 'Wir ___ gern mehr erfahren. (würden)', correctAnswer: 'würden', points: 1 },
          { id: 'a2-9-2-ex10', type: 'translation', question: 'Переведите: Не могли бы вы подождать минуту?', correctAnswer: 'Würden Sie bitte einen Moment warten?', points: 2 },
        ],
      },
      {
        id: 3,
        moduleId: 9,
        level: 'a2',
        title: 'Оплата и покупки',
        titleDe: 'Bezahlen und Einkaufen',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Способы оплаты' },
        exercises: [
          { id: 'a2-9-3-ex1', type: 'matching', question: 'Соедините', options: ['bar zahlen', 'mit Karte zahlen', 'die Rechnung', 'das Wechselgeld'], correctAnswer: ['платить наличными', 'платить картой', 'счёт', 'сдача'], points: 4 },
          { id: 'a2-9-3-ex2', type: 'fill-blank', question: 'Die ___ bitte! (счёт)', correctAnswer: 'Rechnung', points: 1 },
          { id: 'a2-9-3-ex3', type: 'translation', question: 'Переведите: Могу ли я заплатить картой?', correctAnswer: 'Kann ich mit Karte bezahlen?', points: 2 },
          { id: 'a2-9-3-ex4', type: 'multiple-choice', question: 'Что такое "der Kassenbon"?', options: ['Касса', 'Чек', 'Скидка', 'Цена'], correctAnswer: 'Чек', points: 1 },
          { id: 'a2-9-3-ex5', type: 'fill-blank', question: 'Das macht zusammen 50 ___. (евро)', correctAnswer: 'Euro', points: 1 },
          { id: 'a2-9-3-ex6', type: 'translation', question: 'Переведите: Вот сдача.', correctAnswer: 'Hier ist das Wechselgeld.', points: 2 },
          { id: 'a2-9-3-ex7', type: 'matching', question: 'Соедините', options: ['der Rabatt', 'das Angebot', 'die Quittung', 'die Mehrwertsteuer'], correctAnswer: ['скидка', 'предложение', 'квитанция', 'НДС'], points: 4 },
          { id: 'a2-9-3-ex8', type: 'fill-blank', question: 'Haben Sie es ___? (меньше - о деньгах)', correctAnswer: 'passend', points: 1 },
          { id: 'a2-9-3-ex9', type: 'true-false', question: '"Raten zahlen" означает платить сразу полную сумму.', correctAnswer: 'false', explanation: '"Raten zahlen" — платить в рассрочку.', points: 1 },
          { id: 'a2-9-3-ex10', type: 'multiple-choice', question: 'Как попросить счёт в ресторане?', options: ['Geld bitte!', 'Die Rechnung bitte!', 'Zahlen bitte!', 'Karte bitte!'], correctAnswer: 'Die Rechnung bitte!', points: 1 },
        ],
      },
      {
        id: 4,
        moduleId: 9,
        level: 'a2',
        title: 'Бюджет и сбережения',
        titleDe: 'Budget und Sparen',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Управление финансами' },
        exercises: [
          { id: 'a2-9-4-ex1', type: 'matching', question: 'Соедините', options: ['das Budget', 'die Ausgaben', 'die Einnahmen', 'die Schulden'], correctAnswer: ['бюджет', 'расходы', 'доходы', 'долги'], points: 4 },
          { id: 'a2-9-4-ex2', type: 'fill-blank', question: 'Ich muss Geld ___. (экономить)', correctAnswer: 'sparen', points: 1 },
          { id: 'a2-9-4-ex3', type: 'translation', question: 'Переведите: У меня нет денег.', correctAnswer: 'Ich habe kein Geld.', points: 2 },
          { id: 'a2-9-4-ex4', type: 'multiple-choice', question: 'Что такое "das Sparkonto"?', options: ['Текущий счёт', 'Сберегательный счёт', 'Кредитный счёт', 'Бизнес-счёт'], correctAnswer: 'Сберегательный счёт', points: 1 },
          { id: 'a2-9-4-ex5', type: 'fill-blank', question: 'Meine ___ sind höher als meine Einnahmen. (расходы)', correctAnswer: 'Ausgaben', points: 1 },
          { id: 'a2-9-4-ex6', type: 'translation', question: 'Переведите: Я хочу откладывать каждый месяц.', correctAnswer: 'Ich möchte jeden Monat sparen.', points: 2 },
          { id: 'a2-9-4-ex7', type: 'matching', question: 'Соедините', options: ['der Kredit', 'die Zinsen', 'die Rate', 'die Miete'], correctAnswer: ['кредит', 'проценты', 'взнос', 'арендная плата'], points: 4 },
          { id: 'a2-9-4-ex8', type: 'fill-blank', question: 'Wie hoch sind die ___? (проценты)', correctAnswer: 'Zinsen', points: 1 },
          { id: 'a2-9-4-ex9', type: 'true-false', question: '"Schulden haben" означает быть богатым.', correctAnswer: 'false', explanation: '"Schulden haben" — иметь долги.', points: 1 },
          { id: 'a2-9-4-ex10', type: 'multiple-choice', question: 'Как сказать "Я трачу слишком много"?', options: ['Ich spare zu viel.', 'Ich gebe zu viel aus.', 'Ich bekomme zu viel.', 'Ich verdiene zu viel.'], correctAnswer: 'Ich gebe zu viel aus.', points: 1 },
        ],
      },
      {
        id: 5,
        moduleId: 9,
        level: 'a2',
        title: 'Мини-тест: Финансы',
        titleDe: 'Mini-Test: Finanzen',
        type: 'test',
        duration: 15,
        content: { introduction: 'Проверим знания по теме финансов' },
        exercises: [
          { id: 'a2-9-5-ex1', type: 'fill-blank', question: '___ Sie mir bitte ein Formular geben? (würden)', correctAnswer: 'Würden', points: 1 },
          { id: 'a2-9-5-ex2', type: 'translation', question: 'Переведите: Я хотел бы снять 100 евро.', correctAnswer: 'Ich würde gern 100 Euro abheben.', points: 2 },
          { id: 'a2-9-5-ex3', type: 'multiple-choice', question: 'Что такое "die IBAN"?', options: ['ПИН-код', 'Номер счёта', 'Пароль', 'Сумма'], correctAnswer: 'Номер счёта', points: 1 },
          { id: 'a2-9-5-ex4', type: 'fill-blank', question: 'Ich ___ gern ein Sparkonto eröffnen. (würde)', correctAnswer: 'würde', points: 1 },
          { id: 'a2-9-5-ex5', type: 'matching', question: 'Соедините', options: ['das Girokonto', 'der Dauerauftrag', 'die EC-Karte', 'der Kontoauszug'], correctAnswer: ['текущий счёт', 'постоянное поручение', 'дебетовая карта', 'выписка'], points: 4 },
          { id: 'a2-9-5-ex6', type: 'translation', question: 'Переведите: Не могли бы вы мне помочь?', correctAnswer: 'Könnten Sie mir helfen?', points: 2 },
          { id: 'a2-9-5-ex7', type: 'fill-blank', question: 'Die Rechnung ___ 50 Euro. (составлять)', correctAnswer: 'beträgt', points: 1 },
          { id: 'a2-9-5-ex8', type: 'multiple-choice', question: 'Как спросить "Могу ли я заплатить наличными?"', options: ['Kann ich bar zahlen?', 'Muss ich bar zahlen?', 'Will ich bar zahlen?', 'Soll ich bar zahlen?'], correctAnswer: 'Kann ich bar zahlen?', points: 1 },
          { id: 'a2-9-5-ex9', type: 'fill-blank', question: 'Ich muss meine ___ bezahlen. (долги)', correctAnswer: 'Schulden', points: 1 },
          { id: 'a2-9-5-ex10', type: 'translation', question: 'Переведите: Каков мой баланс?', correctAnswer: 'Wie ist mein Kontostand?', points: 2 },
        ],
      },
    ],
  },
  {
    id: 10,
    level: 'a2',
    title: 'Культура и досуг',
    titleDe: 'Kultur und Freizeit',
    description: 'Музеи, концерты, кино, театр, хобби',
    vocabulary: a2Vocabulary.filter(w => w.tags?.includes('module-10')),
    grammar: [
      {
        id: 'a2-g10-1',
        level: 'a2',
        title: 'Infinitiv с zu',
        titleDe: 'Infinitiv mit zu',
        description: 'Инфинитивные конструкции',
        explanation: `
# Инфинитив с zu

## Использование
После многих глаголов и выражений инфинитив стоит с zu:
- versuchen, vergessen, anfangen, aufhören, vorhaben
- Es ist wichtig/schwer/leicht...

## Примеры
- Ich versuche, Deutsch **zu lernen**.
- Es ist wichtig, Kultur **zu verstehen**.
- Vergiss nicht, die Tickets **zu kaufen**.

## Отделяемые приставки
zu стоит между приставкой и глаголом:
- anzufangen, aufzuhören, einzukaufen
        `,
        examples: [
          { german: 'Ich habe vor, ins Museum zu gehen.', russian: 'Я планирую пойти в музей.' },
          { german: 'Es macht Spaß, Filme zu schauen.', russian: 'Смотреть фильмы — это весело.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 10,
        level: 'a2',
        title: 'Культурные мероприятия',
        titleDe: 'Kulturelle Veranstaltungen',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Кино, театр, концерты' },
        exercises: [
          { id: 'a2-10-1-ex1', type: 'matching', question: 'Соедините', options: ['das Kino', 'das Theater', 'das Konzert', 'das Museum'], correctAnswer: ['кино', 'театр', 'концерт', 'музей'], points: 4 },
          { id: 'a2-10-1-ex2', type: 'fill-blank', question: 'Wir gehen heute Abend ins ___. (кино)', correctAnswer: 'Kino', points: 1 },
          { id: 'a2-10-1-ex3', type: 'translation', question: 'Переведите: Ты хочешь пойти на концерт?', correctAnswer: 'Möchtest du ins Konzert gehen?', points: 2 },
          { id: 'a2-10-1-ex4', type: 'multiple-choice', question: 'Что такое "die Ausstellung"?', options: ['Спектакль', 'Выставка', 'Концерт', 'Премьера'], correctAnswer: 'Выставка', points: 1 },
          { id: 'a2-10-1-ex5', type: 'fill-blank', question: 'Die ___ beginnt um 20 Uhr. (представление)', correctAnswer: 'Vorstellung', points: 1 },
          { id: 'a2-10-1-ex6', type: 'matching', question: 'Соедините', options: ['der Film', 'das Theaterstück', 'die Oper', 'das Ballett'], correctAnswer: ['фильм', 'пьеса', 'опера', 'балет'], points: 4 },
          { id: 'a2-10-1-ex7', type: 'translation', question: 'Переведите: Этот фильм очень интересный.', correctAnswer: 'Dieser Film ist sehr interessant.', points: 2 },
          { id: 'a2-10-1-ex8', type: 'fill-blank', question: 'Ich möchte zwei ___ kaufen. (билеты)', correctAnswer: 'Karten', points: 1 },
          { id: 'a2-10-1-ex9', type: 'true-false', question: '"Die Premiere" — это последний показ.', correctAnswer: 'false', explanation: '"Die Premiere" — первый показ, премьера.', points: 1 },
          { id: 'a2-10-1-ex10', type: 'multiple-choice', question: 'Где покупают билеты?', options: ['In der Bibliothek', 'An der Kasse', 'Im Restaurant', 'Am Bahnhof'], correctAnswer: 'An der Kasse', points: 1 },
        ],
      },
      {
        id: 2,
        moduleId: 10,
        level: 'a2',
        title: 'Infinitiv mit zu',
        titleDe: 'Infinitiv mit zu',
        type: 'grammar',
        duration: 25,
        content: { introduction: 'Инфинитивные конструкции' },
        exercises: [
          { id: 'a2-10-2-ex1', type: 'fill-blank', question: 'Ich versuche, Deutsch ___ lernen. (zu)', correctAnswer: 'zu', points: 1 },
          { id: 'a2-10-2-ex2', type: 'multiple-choice', question: 'Где стоит zu в "anfangen"?', options: ['anzufangen', 'zu anfangen', 'anfangen zu', 'fangen anzu'], correctAnswer: 'anzufangen', points: 1 },
          { id: 'a2-10-2-ex3', type: 'fill-blank', question: 'Es ist wichtig, pünktlich ___ sein.', correctAnswer: 'zu', points: 1 },
          { id: 'a2-10-2-ex4', type: 'translation', question: 'Переведите: Я планирую пойти в музей.', correctAnswer: 'Ich habe vor, ins Museum zu gehen.', points: 2 },
          { id: 'a2-10-2-ex5', type: 'fill-blank', question: 'Vergiss nicht, die Tickets ___ kaufen.', correctAnswer: 'zu', points: 1 },
          { id: 'a2-10-2-ex6', type: 'matching', question: 'Соедините', options: ['anfangen', 'aufhören', 'einladen', 'mitnehmen'], correctAnswer: ['anzufangen', 'aufzuhören', 'einzuladen', 'mitzunehmen'], points: 4 },
          { id: 'a2-10-2-ex7', type: 'translation', question: 'Переведите: Трудно найти билеты.', correctAnswer: 'Es ist schwer, Karten zu finden.', points: 2 },
          { id: 'a2-10-2-ex8', type: 'fill-blank', question: 'Es macht Spaß, Filme ___ schauen.', correctAnswer: 'zu', points: 1 },
          { id: 'a2-10-2-ex9', type: 'true-false', question: 'После модальных глаголов используется zu.', correctAnswer: 'false', explanation: 'После модальных глаголов инфинитив без zu: Ich kann schwimmen.', points: 1 },
          { id: 'a2-10-2-ex10', type: 'translation', question: 'Переведите: Я начинаю понимать.', correctAnswer: 'Ich fange an zu verstehen.', points: 2 },
        ],
      },
      {
        id: 3,
        moduleId: 10,
        level: 'a2',
        title: 'Хобби и увлечения',
        titleDe: 'Hobbys und Interessen',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Говорим о хобби' },
        exercises: [
          { id: 'a2-10-3-ex1', type: 'matching', question: 'Соедините', options: ['fotografieren', 'malen', 'kochen', 'wandern'], correctAnswer: ['фотографировать', 'рисовать', 'готовить', 'ходить в походы'], points: 4 },
          { id: 'a2-10-3-ex2', type: 'fill-blank', question: 'Mein Hobby ist ___. (фотография)', correctAnswer: 'Fotografieren', points: 1 },
          { id: 'a2-10-3-ex3', type: 'translation', question: 'Переведите: Что ты делаешь в свободное время?', correctAnswer: 'Was machst du in deiner Freizeit?', points: 2 },
          { id: 'a2-10-3-ex4', type: 'multiple-choice', question: 'Что означает "basteln"?', options: ['Читать', 'Мастерить', 'Танцевать', 'Петь'], correctAnswer: 'Мастерить', points: 1 },
          { id: 'a2-10-3-ex5', type: 'fill-blank', question: 'Ich ___ gern Gitarre. (играть)', correctAnswer: 'spiele', points: 1 },
          { id: 'a2-10-3-ex6', type: 'translation', question: 'Переведите: Мне нравится готовить.', correctAnswer: 'Ich koche gern.', points: 2 },
          { id: 'a2-10-3-ex7', type: 'matching', question: 'Соедините', options: ['das Schach', 'das Stricken', 'das Sammeln', 'das Gärtnern'], correctAnswer: ['шахматы', 'вязание', 'коллекционирование', 'садоводство'], points: 4 },
          { id: 'a2-10-3-ex8', type: 'fill-blank', question: 'Am Wochenende ___ ich gern. (читать)', correctAnswer: 'lese', points: 1 },
          { id: 'a2-10-3-ex9', type: 'true-false', question: '"Ich interessiere mich für..." используется для выражения интереса.', correctAnswer: 'true', points: 1 },
          { id: 'a2-10-3-ex10', type: 'multiple-choice', question: 'Как сказать "У меня нет хобби"?', options: ['Ich habe kein Hobby.', 'Ich mag kein Hobby.', 'Ich brauche kein Hobby.', 'Ich will kein Hobby.'], correctAnswer: 'Ich habe kein Hobby.', points: 1 },
        ],
      },
      {
        id: 4,
        moduleId: 10,
        level: 'a2',
        title: 'Музеи и галереи',
        titleDe: 'Museen und Galerien',
        type: 'vocabulary',
        duration: 20,
        content: { introduction: 'Посещение культурных учреждений' },
        exercises: [
          { id: 'a2-10-4-ex1', type: 'matching', question: 'Соедините', options: ['die Galerie', 'das Gemälde', 'die Skulptur', 'der Künstler'], correctAnswer: ['галерея', 'картина', 'скульптура', 'художник'], points: 4 },
          { id: 'a2-10-4-ex2', type: 'fill-blank', question: 'Das Museum hat montags ___. (закрыто)', correctAnswer: 'geschlossen', points: 1 },
          { id: 'a2-10-4-ex3', type: 'translation', question: 'Переведите: Сколько стоит вход?', correctAnswer: 'Was kostet der Eintritt?', points: 2 },
          { id: 'a2-10-4-ex4', type: 'multiple-choice', question: 'Что такое "die Führung"?', options: ['Выход', 'Экскурсия', 'Вход', 'Перерыв'], correctAnswer: 'Экскурсия', points: 1 },
          { id: 'a2-10-4-ex5', type: 'fill-blank', question: 'Die ___ ist sehr berühmt. (картина)', correctAnswer: 'Gemälde', points: 1 },
          { id: 'a2-10-4-ex6', type: 'translation', question: 'Переведите: Есть ли экскурсия на русском?', correctAnswer: 'Gibt es eine Führung auf Russisch?', points: 2 },
          { id: 'a2-10-4-ex7', type: 'matching', question: 'Соедините', options: ['die Öffnungszeiten', 'der Audioguide', 'die Garderobe', 'der Katalog'], correctAnswer: ['часы работы', 'аудиогид', 'гардероб', 'каталог'], points: 4 },
          { id: 'a2-10-4-ex8', type: 'fill-blank', question: 'Fotografieren ist hier ___. (запрещено)', correctAnswer: 'verboten', points: 1 },
          { id: 'a2-10-4-ex9', type: 'true-false', question: '"Der Eintritt ist frei" означает платный вход.', correctAnswer: 'false', explanation: '"Der Eintritt ist frei" — вход бесплатный.', points: 1 },
          { id: 'a2-10-4-ex10', type: 'multiple-choice', question: 'Где оставляют вещи?', options: ['An der Kasse', 'In der Garderobe', 'Im Café', 'Am Eingang'], correctAnswer: 'In der Garderobe', points: 1 },
        ],
      },
      {
        id: 5,
        moduleId: 10,
        level: 'a2',
        title: 'Мини-тест: Культура',
        titleDe: 'Mini-Test: Kultur',
        type: 'test',
        duration: 15,
        content: { introduction: 'Проверим знания по теме культуры' },
        exercises: [
          { id: 'a2-10-5-ex1', type: 'fill-blank', question: 'Es ist wichtig, die Kultur ___ verstehen.', correctAnswer: 'zu', points: 1 },
          { id: 'a2-10-5-ex2', type: 'translation', question: 'Переведите: Я планирую пойти в театр.', correctAnswer: 'Ich habe vor, ins Theater zu gehen.', points: 2 },
          { id: 'a2-10-5-ex3', type: 'multiple-choice', question: 'Infinitiv с zu от "anfangen":', options: ['zu anfangen', 'anfangen zu', 'anzufangen', 'fangen anzu'], correctAnswer: 'anzufangen', points: 1 },
          { id: 'a2-10-5-ex4', type: 'fill-blank', question: 'Ich versuche, mehr ___ lesen. (zu)', correctAnswer: 'zu', points: 1 },
          { id: 'a2-10-5-ex5', type: 'matching', question: 'Соедините', options: ['der Eintritt', 'die Pause', 'die Bühne', 'der Applaus'], correctAnswer: ['вход', 'перерыв', 'сцена', 'аплодисменты'], points: 4 },
          { id: 'a2-10-5-ex6', type: 'translation', question: 'Переведите: Не забудь купить билеты!', correctAnswer: 'Vergiss nicht, die Karten zu kaufen!', points: 2 },
          { id: 'a2-10-5-ex7', type: 'fill-blank', question: 'Mein ___ ist Fotografieren. (хобби)', correctAnswer: 'Hobby', points: 1 },
          { id: 'a2-10-5-ex8', type: 'multiple-choice', question: 'Когда zu не нужен?', options: ['Nach "versuchen"', 'Nach "anfangen"', 'Nach "können"', 'Nach "vergessen"'], correctAnswer: 'Nach "können"', points: 1 },
          { id: 'a2-10-5-ex9', type: 'fill-blank', question: 'Es macht Spaß, ins Kino ___ gehen.', correctAnswer: 'zu', points: 1 },
          { id: 'a2-10-5-ex10', type: 'translation', question: 'Переведите: Этот музей очень интересный.', correctAnswer: 'Dieses Museum ist sehr interessant.', points: 2 },
        ],
      },
    ],
  },
];
