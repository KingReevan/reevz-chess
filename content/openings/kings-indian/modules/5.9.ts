import { defineModule } from '../../../types'
import { KID } from '../lines'

/** 5.Nf3 O-O 6.Be2 */
const BE2 = `${KID} Nf3 O-O Be2`
/** classical-6c5-7oo: 6...c5 7.O-O cxd4 8.Nxd4 Nc6 9.Be3 Bd7 (Maróczy structure) */
const MAROCZY = `${BE2} c5 O-O cxd4 Nxd4 Nc6 Be3 Bd7`
/** classical-6c5-7d5: 6...c5 7.d5 e6 8.O-O exd5 9.cxd5 Re8 (Benoni structure) */
const BENONI = `${BE2} c5 d5 e6 O-O exd5 cxd5 Re8`

export default defineModule({
  id: '5.9',
  title: '6...c5: Maróczy and Benoni structures',
  minutes: 11,
  level: 3,
  goals: [
    'Play the ...c5 break against 6.Be2 instead of ...e5',
    'Recognize the Maróczy structure after 7.O-O cxd4',
    'Recognize the Benoni structure after 7.d5 e6, and the plans for both sides'
  ],
  intro:
    "Chapter 1 showed that Black has two pawn breaks against White's center: ...e5 and ...c5. Almost all of this course so far has been about ...e5. What happens if Black hits d4 with the c-pawn instead? White can let the pawns trade, or push past with d5. Each choice leads to a pawn structure with its own name and its own plans.",
  sections: [
    {
      kind: 'walkthrough',
      title: '7.O-O cxd4: the Maróczy structure',
      intro: 'At the end, look at the c4- and e4-pawns, and the d5-square between them.',
      moves: MAROCZY,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The Classical set-up',
          text: '6.Be2. Usually Black plays 6...e5 here. This time Black uses the other break.',
          arrows: [['c7', 'c5', 'blue'], ['e7', 'e5', 'blue']]
        },
        12: {
          title: 'Hit d4 from the side',
          text: '6...c5. The c-pawn attacks d4. White can take, push with d5, or let Black take.',
          arrows: [['c5', 'd4', 'red']]
        },
        13: {
          title: 'White castles',
          text: '7.O-O. White leaves the tension and lets Black decide.',
          arrows: [['e1', 'g1', 'blue']]
        },
        14: {
          title: 'Black trades',
          text: "7...cxd4. Black swaps the c-pawn for White's d-pawn. The c-file is now half-open for Black.",
          arrows: [['c8', 'c4', 'blue']]
        },
        15: {
          title: 'The clamp',
          text: '8.Nxd4. Look at the pawns on c4 and e4. Together they guard d5, so Black cannot easily free the game with ...d5. This pawn set-up is called the Maróczy structure, or Maróczy Bind.',
          arrows: [['c4', 'd5', 'yellow'], ['e4', 'd5', 'yellow']],
          marks: ['d5']
        },
        16: {
          title: 'Pressure on d4',
          text: '8...Nc6. The knight develops and hits the d4-knight.',
          arrows: [['c6', 'd4', 'red']]
        },
        17: {
          title: 'White guards d4',
          text: '9.Be3. The bishop protects the knight.',
          arrows: [['e3', 'd4', 'green']]
        },
        18: {
          title: 'Ready for the c-file',
          text: '9...Bd7. Black develops and prepares ...Rc8 on the half-open c-file. White keeps a small edge thanks to the extra space, but Black is solid.',
          arrows: [['a8', 'c8', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '7.d5 e6: the Benoni structure',
      intro: "This time White pushes past. lichess files the final position under the Modern Benoni, another opening, because the pawns end up exactly as they do there.",
      moves: BENONI,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The Classical set-up',
          text: '6.Be2. Black will hit d4 with the c-pawn.',
          arrows: [['c7', 'c5', 'blue']]
        },
        12: {
          title: 'Hit d4',
          text: '6...c5. The same break as before.',
          arrows: [['c5', 'd4', 'red']]
        },
        13: {
          title: 'White pushes past',
          text: '7.d5. White avoids the trade and grabs space. The d5-pawn cramps Black a little.',
          marks: ['d5']
        },
        14: {
          title: 'Hit the d5-pawn',
          text: '7...e6. Black attacks d5 at once, to half-open the e-file before White is fully set up.',
          arrows: [['e6', 'd5', 'red']]
        },
        15: {
          title: 'White castles',
          text: '8.O-O. White lets Black take.',
          arrows: [['e1', 'g1', 'blue']]
        },
        16: {
          title: 'Black takes',
          text: '8...exd5. The e-pawn trades itself off. After the recapture, the e-file will be half-open.',
          marks: ['d5']
        },
        17: {
          title: 'The Benoni structure',
          text: '9.cxd5. White takes back with the c-pawn. White now has pawns on d5 and e4, Black has pawns on c5 and d6. This pawn set-up is the Benoni structure.',
          arrows: [['e4', 'e5', 'blue']],
          marks: ['d5', 'e4', 'c5', 'd6']
        },
        18: {
          title: 'Rook to the open file',
          text: "9...Re8. The rook uses the half-open e-file to press on e4. White has more space and is a bit better, but Black's pieces are active.",
          arrows: [['e8', 'e4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The two structures in plain words',
      body:
        "**Maróczy structure.** White's pawns on c4 and e4 grip the d5-square like a clamp. Black's center pawns stay back on d6 and e7, so Black's play comes from the half-open c-file, the long diagonal of the g7-bishop, and later pawn breaks such as ...b5 or ...f5. White wants to keep the clamp and use the extra space. The same structure appears in a Sicilian line called the Accelerated Dragon.\n\n**Benoni structure.** White has a pawn on d5 that cramps Black, and an extra pawn in the center (e4 against nothing on the e-file). Black has an extra pawn on the queenside: three pawns (a, b and c) against two. A group of pawns that outnumbers the enemy pawns on one wing is a **pawn majority**. So the plans are clear: White pushes in the center with e4–e5, often after f4. Black pushes the queenside majority with ...a6 and ...b5, and uses the e-file and the g7-bishop."
    },
    {
      kind: 'tip',
      title: 'Choosing your break',
      body:
        "With ...e5, the center usually locks and both sides attack on the wings (Chapters 2 to 4). With ...c5, the center opens up a little and the game is about pawn structure and piece activity. Both are good. Pick the kind of game you enjoy."
    }
  ],
  takeaway:
    "Against 6.Be2, 6...c5 hits d4 from the side. After 7.O-O cxd4 8.Nxd4, White's c4/e4 pawns clamp d5 (the Maróczy structure). After 7.d5 e6 and ...exd5, cxd5, you get the Benoni structure: White pushes e4–e5, Black pushes ...b5 and uses the e-file.",
  lookAhead:
    "Chapter 6 turns to the Sämisch 5.f3, where White guards e4 with a pawn and often castles queenside. The ...c5 break comes back there as the Sämisch Gambit.",
  drills: [
    {
      title: 'Into the Benoni',
      prompt: "You're Black. White has pushed past your c-pawn with 7.d5. Challenge the pawn, half-open the e-file, and put your rook on it.",
      moves: BENONI,
      start: 13,
      side: 'black',
      hints: [
        'Attack d5 with the e-pawn.',
        '...e6, ...exd5, then the rook to e8.'
      ],
      success: '7...e6, 8...exd5 and 9...Re8. The Benoni structure, with Black\'s rook pressing on e4.'
    },
    {
      title: 'Against the Maróczy',
      prompt: "You're Black. White has castled with 7.O-O. Trade on d4, develop the knight with an attack, and prepare the c-file.",
      moves: MAROCZY,
      start: 13,
      side: 'black',
      hints: [
        'Take on d4 with the c-pawn.',
        '...cxd4, ...Nc6, then the light-squared bishop to d7.'
      ],
      success: '7...cxd4, 8...Nc6 and 9...Bd7. The rook goes to c8 next.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "In the Maróczy structure, what do White's pawns on c4 and e4 do?",
      moves: MAROCZY,
      orientation: 'black',
      choices: [
        { text: 'They guard d5, so Black cannot easily play ...d5', correct: true, why: 'Right. That grip on d5 is why it is called a bind, or clamp.' },
        { text: 'They prepare a quick e4–e5 push', why: 'Pushing e4–e5 would give up the grip on d5. The pawns are most useful where they are, controlling d5.' },
        { text: 'They are weak and will soon be lost', why: 'They are well protected and give White space. Black must play actively against them, not wait for them to fall.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Benoni structure, where does each side have a pawn majority?',
      moves: BENONI,
      orientation: 'black',
      choices: [
        { text: 'Black on the queenside (a, b, c against a, b); White in the center', correct: true, why: 'Right. So Black pushes ...b5, and White pushes e4–e5.' },
        { text: 'White on the queenside; Black in the center', why: "It's the other way round. Count: Black has a-, b- and c-pawns against White's a- and b-pawns." },
        { text: 'Nobody has a majority anywhere', why: 'Count the pawns on each wing: they are not balanced. That imbalance gives each side its plan.' }
      ]
    },
    {
      type: 'plan',
      prompt: "After 6...c5 7.d5 e6 8.O-O exd5 9.cxd5 Re8, what is Black's main plan?",
      moves: BENONI,
      orientation: 'black',
      choices: [
        { text: '...a6 and ...b5, using the queenside majority, with the rook pressing e4', correct: true, why: 'Right. Black uses the extra queenside pawn and the half-open e-file.' },
        { text: '...f5 and ...g5, a kingside pawn storm', why: 'That is the plan when ...e5 has locked the center. In the Benoni, Black plays on the queenside and the e-file.' },
        { text: '...e5, to lock the center', why: "Black's e-pawn has already been traded on d5. There is no e-pawn left to push." }
      ]
    },
    {
      type: 'order',
      prompt: 'After 6...c5 7.d5 e6 8.O-O exd5, which recapture creates the Benoni structure?',
      moves: `${BE2} c5 d5 e6 O-O exd5`,
      orientation: 'white',
      choices: [
        { text: '9.cxd5', correct: true, why: 'Right. The c-pawn recaptures, leaving White with d5 and e4 against Black\'s c5 and d6.' },
        { text: '9.exd5', why: 'This is also playable, but then the e-file opens fully and the structure is different. The Benoni structure comes from cxd5.' },
        { text: '9.Nxd5', why: 'After 9.Nxd5 Nxe4 Black wins a pawn. The knight recapture drops e4.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'After 6.Be2 c5 7.O-O cxd4 8.Nxd4, what is the pawn structure called?',
      moves: `${BE2} c5 O-O cxd4 Nxd4`,
      orientation: 'black',
      choices: [
        { text: 'The Maróczy structure', correct: true, why: 'Right. The c4- and e4-pawns clamp d5.' },
        { text: 'The Benoni structure', why: 'The Benoni comes from 7.d5 e6 and a trade on d5. Here the d-pawns were traded instead.' },
        { text: 'The Mar del Plata', why: 'The Mar del Plata is a ...e5 line with the center locked. Chapter 3 covers it.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has pushed past with 7.d5. What is the most natural way to fight back?',
      moves: `${BE2} c5 d5`,
      orientation: 'black',
      choices: [
        { text: '7...e6', correct: true, why: "Right. Black hits d5 at once and half-opens the e-file, reaching the Benoni structure." },
        { text: '7...b5', why: 'This gambit idea is not well prepared here. After 8.cxb5 Black is just a pawn down for not enough. Hit d5 with ...e6 first.' },
        { text: '7...e5', why: "This locks the center with Black's c-pawn already on c5. Black is left passive and White is clearly better. ...e6 is far more active." }
      ]
    }
  ],
  key: { name: 'Benoni structure: 6...c5 7.d5 e6 8.O-O exd5 9.cxd5 Re8', moves: BENONI, orientation: 'black' },
  terms: [
    { term: 'Maróczy structure', meaning: 'White pawns on c4 and e4 with no white d-pawn. They clamp the d5-square. Also called the Maróczy Bind.' },
    { term: 'Benoni structure', meaning: 'White pawns on d5 and e4 against Black pawns on c5 and d6. White has a center majority, Black a queenside majority.' },
    { term: 'Pawn majority', meaning: 'More pawns than the opponent on one side of the board. A majority can advance and create a passed pawn.' },
    { term: 'Half-open file', meaning: 'A file with no pawn of your own on it, but an enemy pawn. Your rook can attack that pawn.' }
  ]
})
