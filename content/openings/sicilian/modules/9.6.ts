import { defineModule } from '../../../types'

/** kia-e6: 2...e6 3.d3 Nc6 4.g3 d5 5.Nbd2 Nf6 6.Bg2 Be7 7.O-O O-O 8.Re1 b5 9.e5 Nd7 */
const KIA = 'e4 c5 Nf3 e6 d3 Nc6 g3 d5 Nbd2 Nf6 Bg2 Be7 O-O O-O Re1 b5 e5 Nd7'
/** kia-2d3: 2.d3 Nc6 3.g3 g6 4.Bg2 Bg7 5.f4 d6 6.Nf3 e6 7.O-O Nge7 */
const D3 = 'e4 c5 d3 Nc6 g3 g6 Bg2 Bg7 f4 d6 Nf3 e6 O-O Nge7'

export default defineModule({
  id: '9.6',
  title: "The King's Indian Attack set-up",
  minutes: 10,
  level: 2,
  goals: [
    "Learn White's King's Indian Attack set-up: d3, g3, Bg2, Nbd2, O-O, Re1 and e5",
    "Know Black's answers: a share of the center with ...d5, then ...b5 on the queenside",
    'See 2.d3 with g3 and f4, a Closed Sicilian set-up without Nc3'
  ],
  intro:
    "Some White players don't want to learn any Sicilian theory at all. They play the same set-up against almost everything: d3, g3, Bg2, Nbd2 and castling, then e4–e5 and an attack on the kingside. This is the King's Indian Attack. It is quiet at first, but the plans are sharp. What should each side do?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The set-up against 2...e6',
      intro: "Watch the e4-pawn. White builds around it, then pushes it to e5 to gain space near Black's king.",
      moves: KIA,
      start: 4,
      orientation: 'white',
      steps: {
        4: {
          title: 'A Taimanov or Kan player?',
          text: '2...e6. After 3.d4, Black could choose the Taimanov or the Kan (Chapter 6). White chooses a different road.',
          arrows: [['d2', 'd4', 'blue']]
        },
        5: {
          title: 'The King\'s Indian Attack',
          text: "3.d3. A quiet move that supports e4. White will build the King's Indian set-up with the colors reversed: Nf3, g3, Bg2, O-O and Nbd2. It is less ambitious than 3.d4, and the engine calls the game level.",
          arrows: [['d3', 'e4', 'green']]
        },
        6: {
          title: 'Black develops',
          text: '3...Nc6. The knight comes out and watches d4 and e5.',
          arrows: [['c6', 'd4', 'green'], ['c6', 'e5', 'green']]
        },
        7: {
          title: 'Preparing the fianchetto',
          text: '4.g3. The pawn makes room for the bishop on g2.',
          arrows: [['f1', 'g2', 'blue']]
        },
        8: {
          title: 'A share of the center',
          text: '4...d5. Black takes space with pawns on c5, d5 and e6, and attacks e4. Against a slow set-up, Black should claim the center.',
          arrows: [['d5', 'e4', 'red']]
        },
        9: {
          title: 'The knight to d2',
          text: '5.Nbd2. The knight guards e4. On d2 it leaves the c-pawn free, and later it can travel via f1 to h2 or e3.',
          arrows: [['d2', 'e4', 'green']]
        },
        10: {
          title: 'Hitting e4 again',
          text: '5...Nf6. Now the f6-knight and the d5-pawn both attack e4. The d3-pawn and the d2-knight defend it.',
          arrows: [['f6', 'e4', 'red'], ['d5', 'e4', 'red']]
        },
        11: {
          title: 'The bishop behind the knight',
          text: '6.Bg2. The bishop goes to the long diagonal, behind the f3-knight. When that knight moves, the bishop will look straight at e4 and d5.',
          arrows: [['g2', 'f3', 'blue']]
        },
        12: {
          title: 'Ready to castle',
          text: '6...Be7. A modest square, but the bishop is safe there and Black can castle next move.'
        },
        13: {
          title: 'White castles',
          text: '7.O-O. White\'s king is tucked away behind the g2-bishop.'
        },
        14: {
          title: 'Black castles',
          text: '7...O-O. Both kings are on the kingside. Now each side picks a wing.'
        },
        15: {
          title: 'Backing up e4 and e5',
          text: '8.Re1. The rook supports e4, and later the push e4–e5.',
          arrows: [['e1', 'e4', 'green']]
        },
        16: {
          title: 'Black picks the queenside',
          text: "8...b5. Black starts to gain space on the queenside. The plan is ...b4, ...a5 and ...a4, far from White's pieces.",
          arrows: [['b5', 'b4', 'blue'], ['a7', 'a5', 'blue']]
        },
        17: {
          title: 'The wedge on e5',
          text: "9.e5. White pushes past d5 and kicks the f6-knight, the best defender of Black's king. The pawn on e5 gives White space on the kingside.",
          arrows: [['e5', 'f6', 'red']],
          ann: '!'
        },
        18: {
          title: 'Two wings, two plans',
          text: '9...Nd7. The knight steps back. Now the race begins: White plays Nf1–h2–g4 and h4–h5 against the king; Black plays ...b4 and ...a5–a4. The game is level.',
          arrows: [['d2', 'f1', 'blue'], ['h2', 'h4', 'blue'], ['a7', 'a5', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'A system, not a line',
      body:
        "**For White,** the King's Indian Attack is a set-up you can play against almost anything: d3, g3, Bg2, Nbd2, O-O and Re1. Then e4–e5 grabs space, and the pieces swing to the kingside: Nf1–h2–g4, h4–h5, and sometimes Bf4. It is objectively less testing than 3.d4, but there is little theory to learn.\n\n**For Black,** don't sit still. Take a share of the center with ...d5, castle, and attack on the queenside with ...b5–b4 and ...a5–a4. A queenside pawn storm is Black's answer to White's kingside play. Whoever gets there first usually wins the race."
    },
    {
      kind: 'walkthrough',
      title: '2.d3 with g3 and f4',
      intro: 'White can start the set-up even earlier, before Nf3. With f4 added, it looks like a Closed Sicilian without Nc3 (Chapter 8).',
      moves: D3,
      start: 2,
      orientation: 'white',
      steps: {
        2: {
          title: 'The Sicilian',
          text: '1...c5. Black plays the Sicilian.'
        },
        3: {
          title: 'A slow start',
          text: '2.d3. White supports e4 and keeps every option open. There will be no Open Sicilian.',
          arrows: [['d3', 'e4', 'green']]
        },
        4: {
          title: 'Black develops',
          text: '2...Nc6. The knight watches d4 and e5.',
          arrows: [['c6', 'd4', 'green']]
        },
        5: {
          title: 'Room for the bishop',
          text: '3.g3. White prepares Bg2.',
          arrows: [['f1', 'g2', 'blue']]
        },
        6: {
          title: 'A fianchetto for Black too',
          text: '3...g6. Black copies the idea. Both sides will put a bishop on a long diagonal.',
          arrows: [['f8', 'g7', 'blue']]
        },
        7: {
          title: 'The bishop on g2',
          text: '4.Bg2. The bishop sits on the long diagonal and backs up the e4-pawn from behind.',
          arrows: [['g2', 'e4', 'green']]
        },
        8: {
          title: 'The bishop on g7',
          text: "4...Bg7. Black's bishop aims at d4 and White's queenside.",
          arrows: [['g7', 'b2', 'blue']]
        },
        9: {
          title: 'Kingside space',
          text: '5.f4. The f-pawn takes space on the kingside, as in the Grand Prix Attack (Module 8.4). Later White may play f5 or e5.',
          arrows: [['f4', 'f5', 'blue'], ['e4', 'e5', 'blue']]
        },
        10: {
          title: 'Holding e5',
          text: '5...d6. Black guards e5 and opens the c8-bishop.',
          arrows: [['d6', 'e5', 'green']]
        },
        11: {
          title: 'The knight comes out',
          text: '6.Nf3. The knight develops behind the f4-pawn and supports e5.',
          arrows: [['f3', 'e5', 'green']]
        },
        12: {
          title: 'Preparing ...Nge7',
          text: '6...e6. Black prepares to put the g8-knight on e7 instead of f6.',
          arrows: [['g8', 'e7', 'blue']]
        },
        13: {
          title: 'White castles',
          text: '7.O-O. The king is safe. White can now choose between c3 and d4 in the center, or f5 on the kingside.'
        },
        14: {
          title: 'A knight on e7',
          text: '7...Nge7. On e7 the knight does not block the g7-bishop, and an e4–e5 push would not hit it. Black castles next and plays ...b5 or ...Rb8. The game is level.',
          arrows: [['g7', 'b2', 'blue']],
          marks: ['e7']
        }
      }
    },
    {
      kind: 'tip',
      title: "Against the King's Indian Attack",
      body:
        "As Black, the safest recipe is simple: claim the center (...d5 if you can), castle, and expand on the queenside with ...b5. Watch for e4–e5. When White pushes it, move the f6-knight out of the way and keep your queenside play going."
    }
  ],
  takeaway:
    "In the King's Indian Attack, White plays d3, g3, Bg2, Nbd2, O-O and Re1, then e4–e5 and a kingside attack with Nf1–h2–g4 and h4–h5. Black takes a share of the center with ...d5 and races on the queenside with ...b5–b4 and ...a5–a4. 2.d3 with g3 and f4 is a Closed Sicilian set-up without Nc3.",
  lookAhead:
    "Module 9.7 looks back at five famous Sicilian games from the earlier chapters, one key moment each.",
  drills: [
    {
      title: 'Build the King\'s Indian Attack',
      prompt: "You're White. You've played 3.d3, and Black has developed with 3...Nc6. Build the set-up, castle, back up e4, and push it to e5 when Black goes for the queenside.",
      moves: KIA.split(' ').slice(0, 17).join(' '),
      start: 6,
      side: 'white',
      hints: [
        'First the pawn move that makes room for your bishop on the long diagonal. Guard e4 with the queen\'s knight on d2.',
        'Then Bg2, castle, Re1, and after ...b5 push the e-pawn.'
      ],
      success: "4.g3, 5.Nbd2, 6.Bg2, 7.O-O, 8.Re1 and 9.e5. Now the knight heads for f1, h2 and g4."
    },
    {
      title: 'Black against the KIA',
      prompt: "You're Black. White has just played 3.d3. Develop, claim the center, castle, start your queenside play, and step aside when e5 comes.",
      moves: KIA,
      start: 5,
      side: 'black',
      hints: [
        'Knight to c6 first, then the d-pawn two squares.',
        'Then ...Nf6, ...Be7 and castle. After 8.Re1, push the b-pawn two squares. After 9.e5, the f6-knight goes back to d7.'
      ],
      success: '3...Nc6, 4...d5, 5...Nf6, 6...Be7, 7...O-O, 8...b5 and 9...Nd7. Now play ...b4 and ...a5–a4.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "Why is this set-up called the King's Indian Attack?",
      moves: KIA.split(' ').slice(0, 13).join(' '),
      orientation: 'white',
      choices: [
        { text: "White uses the King's Indian Defense set-up (Nf3, g3, Bg2, O-O, d3) with the colors reversed", correct: true, why: "Right. It's the same piece placement Black uses in the King's Indian Defense, with an extra move." },
        { text: 'Because White attacks the enemy king from the very first moves', why: "White's attack comes much later, after e5. The name comes from the King's Indian Defense set-up, with the colors reversed." },
        { text: "It is the King's Indian Defense itself, reached by a different move order", why: "Not quite: here White, not Black, has the set-up, and Black has played ...c5 instead of meeting 1.d4." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does White develop the knight to d2 instead of c3?',
      moves: KIA.split(' ').slice(0, 9).join(' '),
      orientation: 'white',
      choices: [
        { text: 'It guards e4, leaves the c-pawn free, and can later go via f1 to h2 or e3', correct: true, why: 'Yes. In the King\'s Indian Attack, this knight often travels to the kingside to join the attack.' },
        { text: 'Because Nc3 would lose a pawn', why: 'Nc3 would not lose anything. White chooses d2 for the later route via f1.' },
        { text: 'To attack the d5-pawn', why: 'A knight on d2 does not attack d5. It guards e4 and c4.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 9.e5 Nd7, what is White\'s typical plan?',
      moves: KIA,
      orientation: 'white',
      choices: [
        { text: 'Nf1–h2–g4 and h4–h5, attacking on the kingside', correct: true, why: 'Right. The e5-pawn gives White space near Black\'s king, and the pieces swing over to that side.' },
        { text: 'a4 and b4, attacking on the queenside', why: 'The queenside is where Black plays. White uses the e5-wedge to attack the king.' },
        { text: 'Trade queens and head for an endgame', why: 'There is no queen trade in sight. Both sides race on opposite wings.' }
      ]
    },
    {
      type: 'concept',
      prompt: "In the King's Indian Attack, where does Black usually look for play?",
      choices: [
        { text: 'On the queenside, with ...b5–b4 and ...a5–a4', correct: true, why: 'Yes. Black gains space where White has few pieces, while White attacks on the kingside.' },
        { text: 'On the kingside, with ...f5 and ...g5', why: "Black's king is on the kingside, and White is strong there after e5. Black plays on the other wing." },
        { text: 'In the center, by giving up the d5-pawn', why: 'Black wants to keep the d5-pawn. The active plan is on the queenside.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'White has played 2.d3, g3, Bg2 and f4. What does this set-up look like?',
      moves: D3.split(' ').slice(0, 9).join(' '),
      orientation: 'white',
      choices: [
        { text: 'A Closed Sicilian set-up without Nc3', correct: true, why: 'Right. g3, Bg2 and f4 are Closed Sicilian ideas (Chapter 8), and White keeps the c-pawn free.' },
        { text: 'The Alapin', why: 'The Alapin is 2.c3, preparing d4. Here White plays slowly with d3, g3 and f4.' },
        { text: 'An Open Sicilian', why: 'In the Open Sicilian White plays d4 and takes on d4. Here the d-pawn stops on d3.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 2.d3 line, why does Black put the g8-knight on e7 instead of f6?',
      moves: D3,
      orientation: 'black',
      choices: [
        { text: 'On e7 it does not block the g7-bishop, and an e4–e5 push cannot hit it', correct: true, why: 'Yes. With White\'s pawn already on f4, e4–e5 would kick a knight on f6.' },
        { text: 'Because f6 is attacked by White\'s queen', why: "White's queen is still on d1 and does not reach f6. The reasons are the g7-bishop and the e5 push." },
        { text: 'To prepare ...Nc8', why: 'The knight is not heading back. From e7 it guards d5 and can jump to f5 later.' }
      ]
    }
  ],
  key: { name: "King's Indian Attack: 9.e5", moves: KIA.split(' ').slice(0, 17).join(' '), orientation: 'white' },
  terms: [
    { term: "King's Indian Attack", meaning: "A White set-up with Nf3, g3, Bg2, O-O, d3 and Nbd2: the King's Indian Defense with the colors reversed." },
    { term: 'Pawn wedge', meaning: 'An advanced pawn, like White\'s on e5, that cramps the enemy position and gains space for an attack.' },
    { term: 'Opposite-wing play', meaning: 'Both sides attack on different sides of the board. Speed matters more than material.' }
  ]
})
