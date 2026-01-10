import type { Module } from '../../../types';
import { b2Vocabulary } from './vocabulary';

export const b2Modules: Module[] = [
  {
    id: 1,
    level: 'b2',
    title: 'Экономика',
    titleDe: 'Wirtschaft',
    description: 'Бизнес, рынок, инвестиции, Partizip als Adjektiv',
    vocabulary: b2Vocabulary.filter(w => w.tags?.includes('module-1')),
    grammar: [
      {
        id: 'b2-g1-1',
        level: 'b2',
        title: 'Partizip I и II как прилагательные',
        titleDe: 'Partizip I und II als Adjektive',
        description: 'Причастия в роли определений',
        explanation: `
# Partizip I und II als Adjektive

Причастия могут использоваться как прилагательные и склоняться!

## Partizip I (настоящее причастие)
Образование: Infinitiv + **d**
- lesen → lesend (читающий)
- wachsen → wachsend (растущий)
- steigen → steigend (растущий)

**Значение:** активное действие, происходящее сейчас

**Примеры:**
- die **wachsende** Wirtschaft (растущая экономика)
- der **steigende** Umsatz (растущий оборот)
- ein **laufendes** Projekt (текущий проект)

## Partizip II (прошедшее причастие)
Образование: обычный Partizip II
- investieren → investiert (инвестированный)
- entwickeln → entwickelt (разработанный)
- planen → geplant (запланированный)

**Значение:** пассивное или завершённое действие

**Примеры:**
- das **investierte** Geld (инвестированные деньги)
- die **geplante** Expansion (запланированное расширение)
- ein **entwickeltes** Produkt (разработанный продукт)

## Склонение
Причастия склоняются как обычные прилагательные!
- das wachsend**e** Unternehmen (Nom.)
- des wachsend**en** Unternehmens (Gen.)
- dem wachsend**en** Unternehmen (Dat.)
- das wachsend**e** Unternehmen (Akk.)
        `,
        comparisonWithRussian: 'Похоже на русские причастия: читающий, прочитанный.',
        examples: [
          { german: 'Die steigenden Preise sind ein Problem.', russian: 'Растущие цены — проблема.' },
          { german: 'Das investierte Kapital wird zurückgezahlt.', russian: 'Инвестированный капитал будет возвращён.' },
          { german: 'Die expandierende Firma sucht Mitarbeiter.', russian: 'Расширяющаяся фирма ищет сотрудников.' },
        ],
        exercises: [],
      },
      {
        id: 'b2-g1-2',
        level: 'b2',
        title: 'Расширенные причастные конструкции',
        titleDe: 'Erweiterte Partizipialattribute',
        description: 'Сложные причастные определения',
        explanation: `
# Erweiterte Partizipialattribute

В немецком причастные определения могут быть очень длинными!

## Структура
**Артикль + расширение + Partizip + существительное**

## Примеры

### Простое:
- die **wachsende** Wirtschaft

### Расширенное:
- die **seit Jahren konstant wachsende** Wirtschaft
  (экономика, постоянно растущая в течение многих лет)

- das **von der Regierung beschlossene** Gesetz
  (закон, принятый правительством)

- die **im letzten Quartal erzielten** Gewinne
  (прибыль, полученная в последнем квартале)

## Преобразование в придаточное
Расширенное определение можно преобразовать в придаточное:

- die **seit Jahren wachsende** Wirtschaft
- → die Wirtschaft, **die seit Jahren wächst**

- das **von der Firma entwickelte** Produkt
- → das Produkt, **das von der Firma entwickelt wurde**
        `,
        examples: [
          { german: 'Der im letzten Jahr gegründete Konzern expandiert.', russian: 'Концерн, основанный в прошлом году, расширяется.' },
          { german: 'Die auf dem Markt führenden Unternehmen investieren in Forschung.', russian: 'Ведущие на рынке компании инвестируют в исследования.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 1,
        level: 'b2',
        title: 'Бизнес и экономика',
        titleDe: 'Business und Wirtschaft',
        type: 'vocabulary',
        duration: 30,
        content: {
          introduction: 'Профессиональная лексика для экономической сферы',
        },
        exercises: [
          {
            id: 'b2-1-1-ex1',
            type: 'matching',
            question: 'Соедините слова с переводом',
            options: ['der Umsatz', 'der Gewinn', 'die Investition', 'die Konkurrenz'],
            correctAnswer: ['оборот', 'прибыль', 'инвестиция', 'конкуренция'],
            points: 4,
          },
        ],
      },
      {
        id: 2,
        moduleId: 1,
        level: 'b2',
        title: 'Partizip I и II',
        titleDe: 'Partizip I und II',
        type: 'grammar',
        duration: 35,
        content: {
          introduction: 'Причастия в роли прилагательных',
        },
        exercises: [
          {
            id: 'b2-1-2-ex1',
            type: 'fill-blank',
            question: 'Die ___ Wirtschaft schafft neue Arbeitsplätze. (wachsen, Partizip I)',
            correctAnswer: 'wachsende',
            points: 1,
          },
          {
            id: 'b2-1-2-ex2',
            type: 'fill-blank',
            question: 'Das ___ Geld wird zurückgezahlt. (investieren, Partizip II)',
            correctAnswer: 'investierte',
            points: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    level: 'b2',
    title: 'Наука и исследования',
    titleDe: 'Wissenschaft und Forschung',
    description: 'Исследования, открытия, технологии, Konjunktiv I',
    vocabulary: b2Vocabulary.filter(w => w.tags?.includes('module-2')),
    grammar: [
      {
        id: 'b2-g2-1',
        level: 'b2',
        title: 'Konjunktiv I (косвенная речь)',
        titleDe: 'Konjunktiv I (Indirekte Rede)',
        description: 'Передача чужих слов в формальном стиле',
        explanation: `
# Konjunktiv I (Косвенная речь)

Используется для передачи чужих слов в формальном стиле (новости, научные тексты).

## Образование
Основа инфинитива + окончания:

| Лицо | Окончание | sein | haben | können |
|------|-----------|------|-------|--------|
| ich | -e | sei | habe | könne |
| du | -est | seist | habest | könnest |
| er/sie/es | -e | sei | habe | könne |
| wir | -en | seien | haben | können |
| ihr | -et | seiet | habet | könnet |
| sie/Sie | -en | seien | haben | können |

## Важно!
Если форма Konjunktiv I совпадает с Indikativ, используется **Konjunktiv II**:
- ich habe (Indikativ) = ich habe (Konj. I) → ich **hätte** (Konj. II)

## Примеры

### Прямая речь:
„Ich bin krank." → Er sagte, er **sei** krank.
„Ich habe keine Zeit." → Sie sagte, sie **habe** keine Zeit.

### В научных текстах:
Der Forscher behauptet, die Theorie **sei** korrekt.
Laut Studie **führe** dies zu besseren Ergebnissen.

### В новостях:
Der Minister erklärte, die Regierung **werde** handeln.
        `,
        comparisonWithRussian: 'В русском нет специальной формы для косвенной речи. Немецкий Konjunktiv I показывает, что это чужие слова.',
        examples: [
          { german: 'Der Wissenschaftler behauptet, das Experiment sei erfolgreich gewesen.', russian: 'Учёный утверждает, что эксперимент был успешным.' },
          { german: 'Laut der Studie führe diese Methode zu besseren Ergebnissen.', russian: 'Согласно исследованию, этот метод ведёт к лучшим результатам.' },
          { german: 'Die Forscherin sagte, sie habe eine wichtige Entdeckung gemacht.', russian: 'Исследовательница сказала, что она сделала важное открытие.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 2,
        level: 'b2',
        title: 'Научная лексика',
        titleDe: 'Wissenschaftliche Begriffe',
        type: 'vocabulary',
        duration: 30,
        content: {
          introduction: 'Терминология для научных текстов',
        },
        exercises: [
          {
            id: 'b2-2-1-ex1',
            type: 'fill-blank',
            question: 'Die ___ hat neue Erkenntnisse gebracht. (исследование)',
            correctAnswer: 'Forschung',
            points: 1,
          },
          {
            id: 'b2-2-1-ex2',
            type: 'multiple-choice',
            question: 'Что означает "beweisen"?',
            options: ['показывать', 'доказывать', 'знать', 'думать'],
            correctAnswer: 'доказывать',
            points: 1,
          },
        ],
      },
      {
        id: 2,
        moduleId: 2,
        level: 'b2',
        title: 'Konjunktiv I',
        titleDe: 'Konjunktiv I',
        type: 'grammar',
        duration: 35,
        content: {
          introduction: 'Косвенная речь в формальном стиле',
        },
        exercises: [
          {
            id: 'b2-2-2-ex1',
            type: 'fill-blank',
            question: 'Der Forscher sagte, er ___ eine Entdeckung gemacht. (haben)',
            correctAnswer: 'habe',
            points: 1,
          },
          {
            id: 'b2-2-2-ex2',
            type: 'fill-blank',
            question: 'Sie behauptet, die Theorie ___ korrekt. (sein)',
            correctAnswer: 'sei',
            points: 1,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    level: 'b2',
    title: 'Искусство и литература',
    titleDe: 'Kunst und Literatur',
    description: 'Культура, эпохи, критика, Nominalisierung',
    vocabulary: b2Vocabulary.filter(w => w.tags?.includes('module-3')),
    grammar: [
      {
        id: 'b2-g3-1',
        level: 'b2',
        title: 'Номинализация',
        titleDe: 'Nominalisierung',
        description: 'Превращение глаголов и прилагательных в существительные',
        explanation: `
# Nominalisierung (Номинализация)

Превращение глаголов и прилагательных в существительные — типичная черта немецкого формального стиля.

## Глагол → Существительное

### С помощью суффиксов:
| Суффикс | Пример |
|---------|--------|
| -ung | entwickeln → die Entwicklung |
| -tion | interpretieren → die Interpretation |
| -heit/-keit | schön → die Schönheit |
| -nis | erkennen → die Erkenntnis |

### Субстантивированный инфинитив:
- lesen → **das Lesen** (чтение)
- malen → **das Malen** (рисование)
- kritisieren → **das Kritisieren** (критика)

## Прилагательное → Существительное

### Субстантивированные прилагательные:
- schön → **das Schöne** (прекрасное)
- neu → **das Neue** (новое)
- interessant → **das Interessante** (интересное)

## Преобразование предложений

### Простое предложение:
Der Künstler **interpretiert** das Werk.

### Номинализация:
Die **Interpretation** des Werks durch den Künstler...

### Ещё примеры:
- Er **entwickelt** neue Methoden. → Die **Entwicklung** neuer Methoden...
- Das Bild **beeinflusst** den Betrachter. → Der **Einfluss** des Bildes auf den Betrachter...
        `,
        examples: [
          { german: 'Die Interpretation dieses Kunstwerks ist umstritten.', russian: 'Интерпретация этого произведения спорна.' },
          { german: 'Das Lesen klassischer Literatur bildet den Charakter.', russian: 'Чтение классической литературы формирует характер.' },
          { german: 'Der Einfluss der Romantik auf die moderne Kunst ist deutlich.', russian: 'Влияние романтизма на современное искусство очевидно.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 3,
        level: 'b2',
        title: 'Искусство и культура',
        titleDe: 'Kunst und Kultur',
        type: 'vocabulary',
        duration: 30,
        content: {
          introduction: 'Лексика для обсуждения искусства',
        },
        exercises: [
          {
            id: 'b2-3-1-ex1',
            type: 'fill-blank',
            question: 'Dieses ___ ist weltberühmt. (произведение искусства)',
            correctAnswer: 'Kunstwerk',
            points: 1,
          },
        ],
      },
      {
        id: 2,
        moduleId: 3,
        level: 'b2',
        title: 'Номинализация',
        titleDe: 'Nominalisierung',
        type: 'grammar',
        duration: 30,
        content: {
          introduction: 'Превращение глаголов в существительные',
        },
        exercises: [
          {
            id: 'b2-3-2-ex1',
            type: 'fill-blank',
            question: 'Die ___ dieses Bildes ist schwierig. (interpretieren)',
            correctAnswer: 'Interpretation',
            points: 1,
          },
          {
            id: 'b2-3-2-ex2',
            type: 'fill-blank',
            question: 'Die ___ neuer Techniken ist wichtig. (entwickeln)',
            correctAnswer: 'Entwicklung',
            points: 1,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    level: 'b2',
    title: 'Глобализация',
    titleDe: 'Globalisierung',
    description: 'Мировые процессы, миграция, интеграция, Passiv-Alternativen',
    vocabulary: b2Vocabulary.filter(w => w.tags?.includes('module-4')),
    grammar: [
      {
        id: 'b2-g4-1',
        level: 'b2',
        title: 'Альтернативы пассиву',
        titleDe: 'Passiv-Alternativen',
        description: 'man, sich lassen, sein + zu + Infinitiv',
        explanation: `
# Passiv-Alternativen (Альтернативы пассиву)

## 1. man + Aktiv
- **Passiv:** Das Problem wird diskutiert.
- **Альтернатива:** **Man** diskutiert das Problem.

## 2. sich lassen + Infinitiv
Значение: можно сделать

- **Passiv:** Das Problem kann gelöst werden.
- **Альтернатива:** Das Problem **lässt sich** lösen.

Примеры:
- Das **lässt sich** nicht ändern. (Это нельзя изменить.)
- Die Herausforderung **lässt sich** bewältigen.

## 3. sein + zu + Infinitiv
Значение: нужно/можно сделать

- **Passiv mit müssen:** Das muss beachtet werden.
- **Альтернатива:** Das **ist** zu beachten.

- **Passiv mit können:** Das kann nicht akzeptiert werden.
- **Альтернатива:** Das **ist** nicht zu akzeptieren.

## 4. Adjektiv auf -bar/-lich
- **Passiv:** Das kann verstanden werden.
- **Альтернатива:** Das ist **verständlich**.

- **Passiv:** Das kann nicht akzeptiert werden.
- **Альтернатива:** Das ist **inakzeptabel**.

Суффиксы:
- -bar: machbar, lösbar, erkennbar
- -lich: verständlich, erklärlich
        `,
        examples: [
          { german: 'Das Problem lässt sich lösen.', russian: 'Проблему можно решить.' },
          { german: 'Die Auswirkungen sind nicht zu unterschätzen.', russian: 'Последствия нельзя недооценивать.' },
          { german: 'Die Herausforderung ist bewältigbar.', russian: 'С вызовом можно справиться.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 4,
        level: 'b2',
        title: 'Глобальные процессы',
        titleDe: 'Globale Prozesse',
        type: 'vocabulary',
        duration: 30,
        content: {
          introduction: 'Лексика о глобализации и её последствиях',
        },
        exercises: [
          {
            id: 'b2-4-1-ex1',
            type: 'matching',
            question: 'Соедините слова с переводом',
            options: ['die Migration', 'die Integration', 'die Herausforderung', 'bewältigen'],
            correctAnswer: ['миграция', 'интеграция', 'вызов', 'справляться'],
            points: 4,
          },
        ],
      },
      {
        id: 2,
        moduleId: 4,
        level: 'b2',
        title: 'Альтернативы пассиву',
        titleDe: 'Passiv-Alternativen',
        type: 'grammar',
        duration: 35,
        content: {
          introduction: 'Разные способы выражения пассивного значения',
        },
        exercises: [
          {
            id: 'b2-4-2-ex1',
            type: 'fill-blank',
            question: 'Das Problem ___ sich lösen. (lassen)',
            correctAnswer: 'lässt',
            points: 1,
          },
          {
            id: 'b2-4-2-ex2',
            type: 'fill-blank',
            question: 'Die Auswirkungen sind nicht ___ unterschätzen.',
            correctAnswer: 'zu',
            points: 1,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    level: 'b2',
    title: 'Медиа и общество',
    titleDe: 'Medien und Gesellschaft',
    description: 'СМИ, критическое мышление, аргументация',
    vocabulary: b2Vocabulary.filter(w => w.tags?.includes('module-5')),
    grammar: [
      {
        id: 'b2-g5-1',
        level: 'b2',
        title: 'Сложные союзы и коннекторы',
        titleDe: 'Komplexe Konnektoren',
        description: 'je...desto, sowohl...als auch, weder...noch',
        explanation: `
# Komplexe Konnektoren (Сложные союзы)

## je ... desto/umso (чем ... тем)
Структура: **Je** + сравн. степень + глагол в конце, **desto/umso** + сравн. степень + глагол

- **Je** mehr man liest, **desto** mehr weiß man.
  (Чем больше читаешь, тем больше знаешь.)
- **Je** länger die Krise dauert, **umso** größer werden die Probleme.

## sowohl ... als auch (как ... так и)
- **Sowohl** die Medien **als auch** die Politik tragen Verantwortung.
  (Как СМИ, так и политика несут ответственность.)

## weder ... noch (ни ... ни)
- **Weder** die Regierung **noch** die Opposition hat eine Lösung.
  (Ни правительство, ни оппозиция не имеют решения.)

## nicht nur ... sondern auch (не только ... но и)
- **Nicht nur** Journalisten, **sondern auch** Bürger müssen kritisch denken.
  (Не только журналисты, но и граждане должны мыслить критически.)

## entweder ... oder (либо ... либо)
- **Entweder** wir handeln jetzt, **oder** es wird zu spät.
  (Либо мы действуем сейчас, либо будет слишком поздно.)

## zwar ... aber (хотя ... но)
- Das ist **zwar** richtig, **aber** nicht vollständig.
  (Это хотя и верно, но не полностью.)
        `,
        examples: [
          { german: 'Je mehr Informationen wir haben, desto besser können wir urteilen.', russian: 'Чем больше информации у нас есть, тем лучше мы можем судить.' },
          { german: 'Sowohl Zeitungen als auch soziale Medien verbreiten Nachrichten.', russian: 'Как газеты, так и социальные сети распространяют новости.' },
          { german: 'Das ist zwar interessant, aber nicht ganz korrekt.', russian: 'Это хотя и интересно, но не совсем верно.' },
        ],
        exercises: [],
      },
    ],
    lessons: [
      {
        id: 1,
        moduleId: 5,
        level: 'b2',
        title: 'СМИ и информация',
        titleDe: 'Medien und Information',
        type: 'vocabulary',
        duration: 30,
        content: {
          introduction: 'Лексика о СМИ и критическом мышлении',
        },
        exercises: [
          {
            id: 'b2-5-1-ex1',
            type: 'fill-blank',
            question: 'Die ___ dieser Information ist zuverlässig. (источник)',
            correctAnswer: 'Quelle',
            points: 1,
          },
          {
            id: 'b2-5-1-ex2',
            type: 'multiple-choice',
            question: 'Что означает "hinterfragen"?',
            options: ['спрашивать', 'ставить под сомнение', 'отвечать', 'понимать'],
            correctAnswer: 'ставить под сомнение',
            points: 1,
          },
        ],
      },
      {
        id: 2,
        moduleId: 5,
        level: 'b2',
        title: 'Сложные союзы',
        titleDe: 'Komplexe Konnektoren',
        type: 'grammar',
        duration: 35,
        content: {
          introduction: 'Союзы для сложных высказываний',
        },
        exercises: [
          {
            id: 'b2-5-2-ex1',
            type: 'fill-blank',
            question: '___ mehr man liest, desto mehr weiß man.',
            correctAnswer: 'Je',
            points: 1,
          },
          {
            id: 'b2-5-2-ex2',
            type: 'fill-blank',
            question: 'Sowohl die Medien ___ auch die Bürger tragen Verantwortung.',
            correctAnswer: 'als',
            points: 1,
          },
        ],
      },
      {
        id: 3,
        moduleId: 5,
        level: 'b2',
        title: 'Итоговый тест B2',
        titleDe: 'Abschlusstest B2',
        type: 'test',
        duration: 40,
        content: {
          introduction: 'Проверьте свои знания уровня B2',
        },
        exercises: [
          {
            id: 'b2-5-3-ex1',
            type: 'fill-blank',
            question: 'Die ___ Wirtschaft schafft Arbeitsplätze. (wachsen, Partizip I)',
            correctAnswer: 'wachsende',
            points: 1,
          },
          {
            id: 'b2-5-3-ex2',
            type: 'fill-blank',
            question: 'Der Forscher sagte, er ___ eine Entdeckung gemacht.',
            correctAnswer: 'habe',
            points: 1,
          },
          {
            id: 'b2-5-3-ex3',
            type: 'fill-blank',
            question: 'Das Problem ___ sich nicht lösen.',
            correctAnswer: 'lässt',
            points: 1,
          },
          {
            id: 'b2-5-3-ex4',
            type: 'translation',
            question: 'Переведите: Чем больше я читаю, тем больше я знаю.',
            correctAnswer: 'Je mehr ich lese, desto mehr weiß ich.',
            points: 2,
          },
        ],
      },
    ],
  },
];
