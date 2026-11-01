import { defineModule } from '../../../types'
import { ROSSOLIMO } from '../lines'

/** rossolimo-g6: 3...g6 4.O-O Bg7 5.Re1 e5 6.Bxc6 dxc6 7.d3 Qe7 */
const G6 = `${ROSSOLIMO} g6 O-O Bg7 Re1 e5 Bxc6 dxc6 d3 Qe7`
/** 5.c3 and d4 instead of 5.Re1 (engine-checked: White keeps a small edge) */
const C3 = `${ROSSOLIMO} g6 O-O Bg7 c3 Nf6 Re1 O-O d4 cxd4 cxd4 d5 e5 Ne4`

export default defineModule({
  id: '9.1',
  title: '3.Bb5: the Rossolimo idea',
  minutes: 10,
  level: 2,
  goals: [
    'Know what 3.Bb5 aims at: the c6-knight, which guards d4 and e5',
    "Learn Black's 3...g6 set-up with ...Bg7 and ...e5",
    "See White's two plans: Re1 and Bxc6, or c3 and d4"
  ],
  intro:
    "After 1.e4 c5 2.Nf3 Nc6, White doesn't have to open the center with 3.d4. The calm 3.Bb5 develops a piece, gets ready to castle and puts the question to the c6-knight. This is the Rossolimo, a favorite at the very top. What is the bishop really doing on b5, and how should Black set up against it?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Rossolimo with 3...g6',
      intro: "Watch the c6-knight and the d4 square. White's bishop goes after the knight that guards it.",
      moves: G6,
      start: 4,
      orientation: 'white',
      steps: {
        4: {
          title: 'A knight on c6',
          text: "2...Nc6. The knight guards d4 and e5. After 3.d4, Black could choose the Sveshnikov, the Accelerated Dragon or the Taimanov.",
          arrows: [['c6', 'd4', 'green'], ['c6', 'e5', 'green']]
        },
        5: {
          title: 'The Rossolimo',
          text: "3.Bb5. The Rossolimo, also called the Nyezhmetdinov–Rossolimo Attack. The bishop attacks the c6-knight, the piece that guards d4 and e5. It is not a pin yet: the d7-pawn stands between the knight and the king. White plans to castle first and decide about d4 later.",
          arrows: [['b5', 'c6', 'red']],
          marks: ['d7']
        },
        6: {
          title: 'A fianchetto',
          text: '3...g6. Black prepares ...Bg7. The bishop will aim down the long diagonal toward d4 and b2, just like in the Dragon.',
          arrows: [['f8', 'g7', 'blue']]
        },
        7: {
          title: 'Castle at once',
          text: '4.O-O. White tucks the king away. The f1-rook can now come to e1 to support the e4-pawn.',
          arrows: [['f1', 'e1', 'blue']]
        },
        8: {
          title: 'The long diagonal',
          text: '4...Bg7. From g7 the bishop sees all the way to the b2-pawn. It already watches d4.',
          arrows: [['g7', 'b2', 'blue']],
          marks: ['d4']
        },
        9: {
          title: 'The rook backs up e4',
          text: '5.Re1. The rook supports the e4-pawn, so White can think about c3 and d4, or e4–e5 later.',
          arrows: [['e1', 'e4', 'green']]
        },
        10: {
          title: 'Two pawns on d4',
          text: "5...e5. Black grabs space. The c5- and e5-pawns both guard d4, so White won't get d4 in easily. The price: the g7-bishop now looks straight at its own pawn on e5.",
          arrows: [['c5', 'd4', 'green'], ['e5', 'd4', 'green']],
          marks: ['d4']
        },
        11: {
          title: 'White takes the knight',
          text: "6.Bxc6. White's best move here. The bishop gives itself up for the knight, so that Black's pawns get doubled on the c-file. Module 9.2 looks at this trade closely.",
          marks: ['c6'],
          ann: '!'
        },
        12: {
          title: 'Take with the d-pawn',
          text: "6...dxc6. Black takes back with the d-pawn. The queen now looks down the d-file, and the c8-bishop has a free diagonal. Black has two bishops, but doubled c-pawns.",
          arrows: [['c8', 'g4', 'blue'], ['d8', 'd3', 'blue']],
          marks: ['c5', 'c6']
        },
        13: {
          title: 'A quiet center',
          text: '7.d3. White supports e4 and opens the c1-bishop. The plan is slow: Be3, Nbd2, and sometimes a3 and b4 to break up the c-pawns.',
          arrows: [['d3', 'e4', 'green'], ['c1', 'e3', 'blue']]
        },
        14: {
          title: 'The queen guards e5',
          text: '7...Qe7. The queen guards e5 and c5, so the g8-knight can come out without leaving e5 weak. The game is roughly level.',
          arrows: [['e7', 'e5', 'green'], ['e7', 'c5', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'What each side wants',
      body:
        "**White** develops fast, castles, and keeps the center flexible. There are two plans. One is to take on c6 and play against Black's doubled c-pawns. The other is to build a big center with c3 and d4, when it is safe.\n\n**Black** fianchettoes the bishop with ...g6 and ...Bg7 and often plays ...e5 to stop d4 for good. If White takes on c6, Black gets the two bishops in return for the doubled pawns.\n\nFor both sides, the first question is the same: will White take on c6, and when?"
    },
    {
      kind: 'walkthrough',
      title: "White's other plan: c3 and d4",
      intro: 'Same start, but now White keeps the bishop and goes for a big center.',
      moves: C3,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'Same position',
          text: '4...Bg7. This time White does not trade on c6. White prepares d4 instead.',
          arrows: [['d2', 'd4', 'blue']]
        },
        9: {
          title: 'Preparing d4',
          text: '5.c3. The pawn gets ready for d4, so that ...cxd4 can be met by cxd4, as in the Alapin (Chapter 7). It also blunts the g7-bishop.',
          arrows: [['c3', 'd4', 'green']]
        },
        10: {
          title: 'Hitting e4',
          text: '5...Nf6. Black develops and attacks the e4-pawn.',
          arrows: [['f6', 'e4', 'red']]
        },
        11: {
          title: 'The rook defends',
          text: '6.Re1. The rook guards e4, just like in the first plan.',
          arrows: [['e1', 'e4', 'green']]
        },
        12: {
          title: 'Black castles',
          text: '6...O-O. Black gets the king safe behind the g7-bishop.'
        },
        13: {
          title: 'The big center',
          text: '7.d4. White finally pushes the d-pawn. It attacks c5.',
          arrows: [['d4', 'c5', 'red']]
        },
        14: {
          title: 'Black trades',
          text: '7...cxd4. Black takes, as usual in the Sicilian.',
          marks: ['d4']
        },
        15: {
          title: 'Two center pawns',
          text: '8.cxd4. White takes back with a pawn and now has pawns on d4 and e4. If Black waits, White will push one of them and cramp Black.',
          marks: ['d4', 'e4']
        },
        16: {
          title: 'Strike at the center',
          text: '8...d5. Black hits e4 at once. This is the best answer to a big pawn center: challenge it before it rolls forward.',
          arrows: [['d5', 'e4', 'red']],
          ann: '!'
        },
        17: {
          title: 'White pushes past',
          text: '9.e5. The pawn gains space and kicks the f6-knight.',
          arrows: [['e5', 'f6', 'red']]
        },
        18: {
          title: 'A knight in the center',
          text: '9...Ne4. The knight jumps to a strong central square, guarded by the d5-pawn. White has more space and is slightly better, but Black has active pieces.',
          arrows: [['d5', 'e4', 'green']],
          marks: ['e4']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Pin or no pin?',
      body:
        "A bishop on b5 pins the c6-knight only when the d7-square is empty. With the d-pawn still on d7, the knight can move freely. Once Black plays ...d6, the knight is pinned to the king and cannot move. Always check the square between the knight and the king."
    }
  ],
  takeaway:
    "3.Bb5 pressures the c6-knight, which guards d4 and e5, and lets White castle without playing d4. Against 3...g6, White either takes on c6 to double Black's c-pawns, or builds a center with c3 and d4. Black answers with ...Bg7 and ...e5, or hits the center with ...d5.",
  lookAhead:
    'Module 9.2 looks closely at the trade on c6: Black gets doubled pawns but keeps the two bishops. Who is better off?',
  drills: [
    {
      title: 'The Rossolimo as White',
      prompt: "You're White. Black has just played 2...Nc6. Play the Rossolimo: develop with pressure on c6, castle, back up e4, and take on c6 once Black plays ...e5.",
      moves: `${ROSSOLIMO} g6 O-O Bg7 Re1 e5 Bxc6 dxc6 d3`,
      start: 4,
      side: 'white',
      hints: [
        'Develop the light-squared bishop to a square where it attacks the c6-knight.',
        'Castle, put a rook on e1, and after ...e5 trade the bishop for the knight. Then free the c1-bishop with a pawn move.'
      ],
      success: '3.Bb5, 4.O-O, 5.Re1, 6.Bxc6 and 7.d3. Black has doubled c-pawns, and White has a simple plan.'
    },
    {
      title: '3...g6 as Black',
      prompt: "You're Black. White has just played 3.Bb5. Fianchetto your bishop, stop d4 with a pawn, and take back on c6 the active way.",
      moves: `${ROSSOLIMO} g6 O-O Bg7 Re1 e5 Bxc6 dxc6`,
      start: 5,
      side: 'black',
      hints: [
        'Prepare a bishop on g7 first.',
        "After 5.Re1, push the e-pawn two squares. If White takes on c6, use the pawn that frees your queen and the c8-bishop."
      ],
      success: '3...g6, 4...Bg7, 5...e5 and 6...dxc6. Black has the two bishops and a firm grip on d4.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the main job of the bishop on b5 in the Rossolimo?',
      moves: ROSSOLIMO,
      orientation: 'white',
      choices: [
        { text: 'To pressure the c6-knight, which guards d4 and e5', correct: true, why: 'Right. If the bishop takes on c6, that knight is gone and Black gets doubled pawns.' },
        { text: 'To pin the c6-knight to the king', why: "Not yet. The d7-pawn stands between the knight and the king, so the knight is free to move." },
        { text: 'To attack the c5-pawn', why: 'The b5-bishop does not touch c5: its diagonals run through c6 and c4, not c5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does Black play 5...e5 here?',
      moves: `${ROSSOLIMO} g6 O-O Bg7 Re1 e5`,
      orientation: 'black',
      choices: [
        { text: 'To take space and guard d4 with a second pawn, so White cannot easily play d4', correct: true, why: 'Yes. The c5- and e5-pawns both hit d4. The cost is that the g7-bishop now looks at its own pawn on e5.' },
        { text: 'To open the long diagonal for the g7-bishop', why: 'The opposite: the e5-pawn sits on that diagonal and blocks the bishop.' },
        { text: 'To attack the knight on f3', why: 'A pawn on e5 attacks d4 and f4, not f3. The point is control of d4.' }
      ]
    },
    {
      type: 'plan',
      prompt: "Black to move. White has built pawns on d4 and e4. What is Black's best answer?",
      moves: C3.split(' ').slice(0, 15).join(' '),
      orientation: 'black',
      choices: [
        { text: '8...d5, hitting e4 at once', correct: true, why: 'Right. Black challenges the center before it can roll forward. After 9.e5 Ne4 the knight is strong, though White keeps a small edge.' },
        { text: '8...d6, a solid pawn move', why: 'Playable, but passive. White keeps the big center and can later push d5 to gain even more space.' },
        { text: '8...a6, kicking the bishop', why: "It doesn't deal with the center. White simply retreats the bishop and keeps the d4 and e4 pawns." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does White play 5.c3 in the second plan?',
      moves: C3.split(' ').slice(0, 9).join(' '),
      orientation: 'white',
      choices: [
        { text: 'To prepare d4, so that ...cxd4 can be met by cxd4', correct: true, why: 'Yes. White wants two pawns in the center, the same idea as the Alapin (Chapter 7).' },
        { text: 'To give the queen a way to b3', why: 'Qb3 is sometimes possible later, but the main point of c3 is the d4 push.' },
        { text: 'To stop ...Nd4', why: 'c3 does guard d4, but the real goal is to push the d-pawn there and build a center.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 1.e4 c5 2.Nf3 Nc6 3.Bb5, is the c6-knight pinned?',
      moves: ROSSOLIMO,
      orientation: 'black',
      choices: [
        { text: 'No: the d7-pawn stands between the knight and the king', correct: true, why: 'Right. It becomes a pin only after the d-pawn moves, for example after ...d6.' },
        { text: 'Yes: it cannot move without exposing the king', why: 'The d7-pawn blocks the line from b5 to e8, so the king is not exposed.' },
        { text: 'Yes: it is pinned to the queen on d8', why: "The queen is on d8, not on the bishop's diagonal. The line from b5 runs through c6 and d7 to e8." }
      ]
    },
    {
      type: 'concept',
      prompt: "After 3...g6 4.O-O Bg7 5.Re1 e5 6.Bxc6 dxc6, what does White's slow plan aim at?",
      moves: `${ROSSOLIMO} g6 O-O Bg7 Re1 e5 Bxc6 dxc6`,
      orientation: 'white',
      choices: [
        { text: "Black's doubled c-pawns, for example with a3 and b4", correct: true, why: 'Yes. White gave up the bishop to get this weakness, and plays against it with moves like Be3, a3 and b4.' },
        { text: 'A hole on d5', why: 'The c6-pawn guards d5, so it is not a hole here. The doubled c-pawns are the target.' },
        { text: "Black's king, with a quick g4–g5", why: "Black hasn't even castled yet, and White's own king is on g1. The plan is slow pressure on the c-pawns." }
      ]
    }
  ],
  key: { name: 'Rossolimo with 3...g6: 5.Re1 e5', moves: `${ROSSOLIMO} g6 O-O Bg7 Re1 e5`, orientation: 'white' },
  terms: [
    { term: 'Rossolimo', meaning: '1.e4 c5 2.Nf3 Nc6 3.Bb5, named after Nicolas Rossolimo. The longer name also honors Rashid Nezhmetdinov.' },
    { term: 'Pin', meaning: 'A piece cannot move off a line without exposing a more valuable piece behind it.' },
    { term: 'Fianchetto', meaning: 'Developing a bishop on the long diagonal from g7 or b7 (g2 or b2 for White), after moving the pawn in front of it.' },
    { term: 'Doubled pawns', meaning: 'Two pawns of the same color on one file. They cannot protect each other and are often a weakness.' }
  ]
})
