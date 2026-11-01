import { defineModule } from '../../../types'
import { ROSSOLIMO } from '../lines'

/** rossolimo-e6: 3...e6 4.O-O Nge7 5.Re1 a6 6.Bf1 d5 7.exd5 Nxd5 */
const E6 = `${ROSSOLIMO} e6 O-O Nge7 Re1 a6 Bf1 d5 exd5 Nxd5`
/** The wrong recapture 7...exd5? 8.d4! (engine-checked: White is clearly better) */
const PIN = `${ROSSOLIMO} e6 O-O Nge7 Re1 a6 Bf1 d5 exd5 exd5 d4`
/** rossolimo-e6-bxc6: 3...e6 4.Bxc6 bxc6 5.d3 Ne7 6.b3 d6 7.Bb2 e5 */
const BXC6 = `${ROSSOLIMO} e6 Bxc6 bxc6 d3 Ne7 b3 d6 Bb2 e5`

export default defineModule({
  id: '9.3',
  title: 'Rossolimo 3...e6: ...Nge7 and ...d5',
  minutes: 10,
  level: 2,
  goals: [
    'Learn why 3...e6 and ...Nge7 take the sting out of Bxc6',
    "Follow Black's ...a6 and ...d5 plan against Re1 and Bf1",
    'Know the right recaptures: ...Nxd5 on d5, and ...bxc6 after 4.Bxc6'
  ],
  intro:
    "Against 3.Bb5, Black's other main answer is 3...e6. It looks modest, but it has a clear point: the g8-knight can go to e7, so that if White takes on c6, a knight takes back and Black's pawns stay healthy. Then Black plays ...a6 and ...d5. What does White do about it?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main plan: ...Nge7, ...a6 and ...d5',
      intro: "Watch the e7-knight. It guards c6, and later it takes back on d5.",
      moves: E6,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The Rossolimo',
          text: '3.Bb5. The bishop eyes the c6-knight. Black wants to avoid doubled pawns.',
          arrows: [['b5', 'c6', 'red']]
        },
        6: {
          title: 'A flexible answer',
          text: '3...e6. The f8-bishop can now come out, and the e7-square is free for the g8-knight. The pawn also gets ready to support ...d5.',
          arrows: [['g8', 'e7', 'blue'], ['e6', 'd5', 'green']]
        },
        7: {
          title: 'White castles',
          text: '4.O-O. White gets the king safe first and keeps the choice of taking on c6 later.'
        },
        8: {
          title: 'A second guard for c6',
          text: '4...Nge7. Now if White takes on c6, Black recaptures with the knight and has no doubled pawns. The knight blocks the f8-bishop for a moment, but it has an important job.',
          arrows: [['e7', 'c6', 'green']],
          ann: '!'
        },
        9: {
          title: 'The rook comes to e1',
          text: '5.Re1. The rook supports e4. It will also be useful on the e-file if the center opens.',
          arrows: [['e1', 'e4', 'green']]
        },
        10: {
          title: 'Asking the bishop',
          text: '5...a6. Black asks the bishop what it wants. Taking on c6 now gives nothing, because the e7-knight takes back.',
          arrows: [['a6', 'b5', 'red']]
        },
        11: {
          title: 'The bishop steps back',
          text: '6.Bf1. White keeps the bishop for later. On f1 it is safe from ...b5, and unlike on e2, it does not block the e1-rook on the e-file.',
          arrows: [['b5', 'f1', 'blue']]
        },
        12: {
          title: 'The central strike',
          text: '6...d5. This is what ...e6 prepared. Black hits e4 and claims a share of the center.',
          arrows: [['d5', 'e4', 'red']]
        },
        13: {
          title: 'White trades',
          text: '7.exd5. White takes. Look at the e-file: only the e6-pawn stands between the e1-rook and the e7-knight.',
          arrows: [['e1', 'e7', 'blue']],
          marks: ['e6']
        },
        14: {
          title: 'The knight takes back',
          text: '7...Nxd5. The knight recaptures, and the e6-pawn stays put to keep the e-file closed. Black has a free, comfortable game, and it is roughly level.',
          marks: ['d5', 'e6']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The wrong recapture: 7...exd5?',
      intro: 'Same position after 6...d5, but now Black takes back with the pawn. See what the e1-rook does.',
      moves: PIN,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'Same position',
          text: '6...d5. Black strikes in the center, just as before.',
          arrows: [['d5', 'e4', 'red']]
        },
        13: {
          title: 'White takes',
          text: '7.exd5. Black now has two ways to take back: with the knight or with the e-pawn.'
        },
        14: {
          title: 'The e-file opens',
          text: "7...exd5. Black takes with the pawn, and the e-file is suddenly empty from e1 to e7. The e7-knight is pinned to the king: it cannot move.",
          arrows: [['e1', 'e7', 'red'], ['e7', 'e8', 'red']],
          ann: '?'
        },
        15: {
          title: 'Open the center',
          text: "8.d4. White opens more lines while Black is tied up. The f8-bishop is stuck behind the pinned knight, so Black can't castle soon. White is clearly better.",
          arrows: [['d4', 'c5', 'red']],
          marks: ['e7', 'f8'],
          ann: '!'
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'White takes at once: 4.Bxc6 bxc6',
      intro: 'If White wants to double the pawns, it has to happen before ...Nge7. Here Black takes back toward the center.',
      moves: BXC6,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'Before ...Nge7',
          text: '3...e6. The knight is not on e7 yet, so White can still double Black\'s pawns.',
          arrows: [['b5', 'c6', 'red']]
        },
        7: {
          title: 'White takes',
          text: '4.Bxc6. White gives up the bishop at once.',
          marks: ['c6']
        },
        8: {
          title: 'Toward the center',
          text: '4...bxc6. Black follows the rule and takes toward the center. The new c6-pawn covers d5. 4...dxc6 is much weaker here: with the e6-pawn in front of it, the c8-bishop gains nothing, and the engine gives White a clear edge.',
          arrows: [['c6', 'd5', 'green']],
          marks: ['c5', 'c6']
        },
        9: {
          title: 'A quiet center',
          text: '5.d3. White supports e4 and opens the c1-bishop.',
          arrows: [['d3', 'e4', 'green']]
        },
        10: {
          title: 'The knight heads for g6',
          text: '5...Ne7. From e7 the knight can go to g6, where it watches e5 and f4.',
          arrows: [['e7', 'g6', 'blue']]
        },
        11: {
          title: 'Preparing a fianchetto',
          text: '6.b3. White gets ready for Bb2 on the long diagonal. Ba3, hitting c5, is another idea.',
          arrows: [['c1', 'b2', 'blue'], ['c1', 'a3', 'blue']]
        },
        12: {
          title: 'Guarding e5 in advance',
          text: '6...d6. Black prepares ...e5 and makes sure that pawn will be guarded.',
          arrows: [['d6', 'e5', 'green']]
        },
        13: {
          title: 'The long diagonal',
          text: '7.Bb2. The bishop aims down the long diagonal at e5 and g7.',
          arrows: [['b2', 'g7', 'blue']]
        },
        14: {
          title: 'Blocking the bishop',
          text: '7...e5. The pawn blocks the b2-bishop and is guarded by d6. The c8-bishop now has a free diagonal too. The game is level.',
          arrows: [['d6', 'e5', 'green'], ['c8', 'h3', 'blue']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Which pawn takes back on c6?',
      body:
        "It depends on Black's set-up. With **...e6**, take with the b-pawn, toward the center: the c8-bishop is blocked by the e6-pawn anyway, so taking with the d-pawn frees much less. With **...g6** (Module 9.2), Black often takes with the d-pawn, because that opens the queen's d-file and the c8-bishop's diagonal at once."
    }
  ],
  takeaway:
    "With 3...e6 and ...Nge7, Black can answer Bxc6 with ...Nxc6 and keep a healthy structure. Then ...a6 and ...d5 free the game; take back on d5 with the knight, because ...exd5 lets the e1-rook pin the e7-knight. If White takes on c6 at once, recapture toward the center with ...bxc6.",
  lookAhead:
    'Module 9.4 moves to the other bishop check: 2...d6 3.Bb5+, the Moscow Variation.',
  drills: [
    {
      title: '3...e6 as Black',
      prompt: "You're Black. White has just played 3.Bb5. Set up so that a knight can take back on c6, ask the bishop, then strike in the center and recapture the right way.",
      moves: E6,
      start: 5,
      side: 'black',
      hints: [
        'First a pawn move that frees e7 for your king-side knight. Then put that knight on e7.',
        'After 5.Re1, push the a-pawn. After 6.Bf1, hit e4 with the d-pawn, and take back on d5 with a piece, not a pawn.'
      ],
      success: '3...e6, 4...Nge7, 5...a6, 6...d5 and 7...Nxd5. A free game with healthy pawns.'
    },
    {
      title: 'Punish the pin',
      prompt: "You're White. Black has just taken back on d5 with the e-pawn, and the e7-knight is pinned. Find the move that opens more lines.",
      moves: PIN,
      start: 14,
      side: 'white',
      hints: [
        'The pinned knight blocks the f8-bishop, so Black cannot castle soon. Open the center.',
        'A central pawn can advance two squares and hit c5.'
      ],
      success: "8.d4! Black's king is stuck in the center behind a pinned knight, and White is clearly better."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the main point of 4...Nge7?',
      moves: `${ROSSOLIMO} e6 O-O Nge7`,
      orientation: 'black',
      choices: [
        { text: 'If White takes on c6, the knight takes back and Black avoids doubled pawns', correct: true, why: 'Right. After Bxc6 Nxc6, Black has a healthy pawn structure. The knight will also help with ...d5.' },
        { text: 'To castle kingside as fast as possible', why: 'The e7-knight actually blocks the f8-bishop for a while, so it slows castling a little. Its job is guarding c6.' },
        { text: 'To attack the e4-pawn', why: 'A knight on e7 does not attack e4. It guards c6, d5 and g6.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just taken on d5. How should Black take back?',
      moves: E6.split(' ').slice(0, 13).join(' '),
      orientation: 'black',
      choices: [
        { text: '7...Nxd5', correct: true, why: 'Right. The e6-pawn stays to keep the e-file closed, and Black has a comfortable, roughly level game.' },
        { text: '7...exd5', why: 'This empties the e-file, and the e1-rook pins the e7-knight to the king. After 8.d4! White is clearly better.' },
        { text: '7...Qxd5', why: 'Playable, but the queen comes out early. White gains time against it, for example with Na3–c4, and keeps an edge.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 3...e6 4.Bxc6, how should Black take back?',
      moves: `${ROSSOLIMO} e6 Bxc6`,
      orientation: 'black',
      choices: [
        { text: '4...bxc6, toward the center', correct: true, why: 'Yes. The new c6-pawn covers d5, and Black can build with ...d6 and ...e5. The game is level.' },
        { text: '4...dxc6, to open the d-file', why: 'With a pawn on e6, the c8-bishop is still blocked, so the d-pawn frees almost nothing. The engine gives White a clear edge.' },
        { text: '4...Nxc6, keeping the pawns healthy', why: 'There is no knight that can reach c6 yet: the g8-knight is still at home. That is why White took at once, before ...Nge7.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the 4.Bxc6 bxc6 line, what is the idea of 6.b3 and 7.Bb2?',
      moves: BXC6.split(' ').slice(0, 13).join(' '),
      orientation: 'white',
      choices: [
        { text: 'To put the bishop on the long diagonal, aiming at e5 and g7', correct: true, why: 'Right. Black answers with 7...e5, which blocks the diagonal. The pawn is guarded by d6.' },
        { text: "To attack Black's king on the queenside", why: "Black's king is still on e8, and the bishop on b2 aims at the center and the kingside." },
        { text: 'To win the c5-pawn with b4', why: 'b4 is not the idea here. The pawn on b3 makes room for the bishop.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why is 7...exd5 a mistake in this position?',
      moves: `${E6.split(' ').slice(0, 13).join(' ')} exd5`,
      orientation: 'black',
      choices: [
        { text: 'The e1-rook pins the e7-knight to the king, so the f8-bishop and the king are stuck', correct: true, why: 'Right. After 8.d4! White opens more lines while Black cannot castle. White is clearly better.' },
        { text: 'It loses the d5-pawn at once', why: 'The d5-pawn is not lost. The problem is the pin on the e-file.' },
        { text: 'It blocks the c8-bishop', why: 'The opposite: with the e6-pawn gone, the c8-bishop has more room. The problem is the e-file.' }
      ]
    },
    {
      type: 'plan',
      prompt: "After 3...e6 4.O-O Nge7 5.Re1 a6, why does White retreat with 6.Bf1 instead of taking on c6?",
      moves: `${ROSSOLIMO} e6 O-O Nge7 Re1 a6`,
      orientation: 'white',
      choices: [
        { text: 'Because 6.Bxc6 Nxc6 would give up the bishop without doubling any pawns', correct: true, why: 'Yes. Once the e7-knight guards c6, the trade gives Black nothing to worry about. White keeps the bishop instead.' },
        { text: 'Because the bishop on b5 was about to be trapped', why: 'The bishop was not trapped: it could also go to a4, c4, d3 or e2. White picks f1 to keep it safe and to leave the e-file clear for the rook.' },
        { text: 'Because 6.Bxc6 would lose a piece', why: 'No: after 6.Bxc6 Nxc6 material is level. The trade is just harmless for Black, so White keeps the bishop.' }
      ]
    }
  ],
  key: { name: 'Rossolimo 3...e6: 4.O-O Nge7', moves: `${ROSSOLIMO} e6 O-O Nge7`, orientation: 'black' },
  terms: [
    { term: 'Pin on a file', meaning: 'A rook or queen attacks a piece that cannot move because a more valuable piece, often the king, stands behind it on the same file.' },
    { term: 'Recapture', meaning: 'Taking back after the opponent has captured. Which piece or pawn takes back often decides the pawn structure.' },
    { term: 'Long diagonal', meaning: 'The a1–h8 or h1–a8 diagonal, the longest on the board. A fianchettoed bishop sits on it.' }
  ]
})
