export const THEORY_QUESTIONS = [
  {
    id: 1,
    question: 'Které vozidlo projede touto neřízenou křižovatkou bez dopravních značek jako první?',
    mediaLabel: 'Křižovatka rovnocenných silnic – červené auto přijíždí zprava',
    hint: 'Na křižovatce nerozlišené dopravními značkami platí přednost zprava.',
    answers: [
      { id: 'a', text: 'Vozidlo přijíždějící zprava' },
      { id: 'b', text: 'Vozidlo jedoucí rovně bez ohledu na směr' },
      { id: 'c', text: 'Vozidlo přijíždějící zleva' },
    ],
    correctAnswerId: 'a',
  },
  {
    id: 2,
    question: 'Jaká je nejvyšší dovolená rychlost osobního automobilu v obci, není-li značkou stanoveno jinak?',
    mediaLabel: 'Dopravní značka IS 12a – Obec',
    hint: 'Základní rychlostní limit v obci je stejný pro osobní auta i motocykly.',
    answers: [
      { id: 'a', text: '40 km/h' },
      { id: 'b', text: '50 km/h' },
      { id: 'c', text: '60 km/h' },
    ],
    correctAnswerId: 'b',
  },
  {
    id: 3,
    question: 'Co znamená svislá dopravní značka „Dej přednost v jízdě!“?',
    mediaLabel: 'Značka P 4 – Bílý trojúhelník s červeným okrajem postavený na vrchol',
    hint: 'Na rozdíl od značky STOP nemusíš vždy zastavit, pokud nikoho neomezíš ani neohrozíš.',
    answers: [
      { id: 'a', text: 'Povinnost vždy zastavit vozidlo na hranici křižovatky' },
      { id: 'b', text: 'Zákaz vjezdu všech motorových vozidel' },
      { id: 'c', text: 'Povinnost dát přednost v jízdě vozidlům jedoucím po hlavní pozemní komunikaci' },
    ],
    correctAnswerId: 'c',
  },
];

export const PRACTICAL_SCENARIOS = [
  {
    id: 1,
    title: 'Situace #1 – Křižovatka tvaru T',
    situation: 'Jedeš po hlavní silnici rovně, z vedlejší ulice zprava vyjíždí osobní auto. Kam můžeš plynule pokračovat?',
    hint: 'Jedeš po hlavní pozemní komunikaci, vozidlo z vedlejší ti dává přednost.',
    correctAction: 'rovne',
    explanation: 'Správně! Jedeš po hlavní silnici rovně, takže máš přednost před vozidlem přijíždějícím z vedlejší ulice.',
  },
  {
    id: 2,
    title: 'Situace #2 – Odbočování vlevo',
    situation: 'Chceš na křižovatce odbočit vlevo, ale v protisměru jede tramvaj i osobní automobil. Jak se zachováš?',
    hint: 'Při odbočování vlevo dáváš přednost protijedoucím vozidlům i tramvajím.',
    correctAction: 'cekat',
    explanation: 'Správně! Při odbočování vlevo musíš počkat a dát přednost protijedoucím vozidlům.',
  },
  {
    id: 3,
    title: 'Situace #3 – Přikázaný směr jízdy',
    situation: 'Před křižovatkou je značka „Přikázaný směr jízdy vpravo“. Kterým směrem pokračuješ?',
    hint: 'Modrá kruhová značka se šipkou vpravo přikazuje jediný povolený směr.',
    correctAction: 'vpravo',
    explanation: 'Správně! Značka přikazuje pokračovat výhradně vpravo.',
  },
];

export const LEARNING_CATEGORIES = [
  {
    id: 1,
    title: 'Dopravní značky',
    lessons: [
      { heading: 'Výstražné značky', detail: 'Upozorňují na místa, kde řidiči hrozí nebezpečí a musí dbát zvýšené opatrnosti.' },
      { heading: 'Značky upravující přednost', detail: 'Určují pořadí průjezdu křižovatkou (Hlavní pozemní komunikace, Dej přednost v jízdě, Stůj).' },
    ],
  },
  {
    id: 2,
    title: 'Křižovatky',
    lessons: [
      { heading: 'Přednost zprava', detail: 'Pokud není přednost upravena značkami ani semafory, dává řidič přednost vozidlům přijíždějícím zprava.' },
      { heading: 'Odbočování vlevo', detail: 'Řidič odbočující vlevo musí dát přednost protijedoucím vozidlům i tramvajím v obou směrech.' },
    ],
  },
  {
    id: 3,
    title: 'Rychlost jízdy',
    lessons: [
      { heading: 'Limity v obci a mimo obec', detail: 'V obci max. 50 km/h, mimo obec max. 90 km/h, na silnici pro motorová vozidla 110 km/h a na dálnici 130 km/h.' },
    ],
  },
  {
    id: 4,
    title: 'Zásady bezpečné jízdy',
    lessons: [
      { heading: 'Bezpečný rozestup', detail: 'Dodržuj pravidlo dvou sekund za vpředu jedoucím vozidlem, za mokra alespoň tři sekundy.' },
    ],
  },
  {
    id: 5,
    title: 'Technika vozidla',
    lessons: [
      { heading: 'Povinná výbava a pneumatiky', detail: 'Minimální hloubka dezénu letních pneumatik je 1,6 mm, u zimních 4 mm.' },
    ],
  },
  {
    id: 6,
    title: 'Zdravotnická příprava',
    lessons: [
      { heading: 'Postup u dopravní nehody', detail: 'Zajistit místo nehody (vesta, trojúhelník), zkontrolovat vědomí a dýchání, volat 155 / 112.' },
    ],
  },
];