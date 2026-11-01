import { defineModule } from '../../../types'
import { OPEN, OPEN_NC6, YUGOSLAV } from '../lines'

/** open-2d6-4nxd4: 3.d4 cxd4 4.Nxd4 */
const TRADE = 'e4 c5 Nf3 d6 d4 cxd4 Nxd4'
/** dragon-yug-9bc4, first moves: 9.Bc4 Bd7 10.O-O-O Rc8 (both half-open files in use) */
const FILES = `${YUGOSLAV} Bc4 Bd7 O-O-O Rc8`

export default defineModule({
  id: '1.3',
  title: 'The big trade: 3.d4 cxd4 4.Nxd4',
  minutes: 10,
  level: 1,
  goals: [
    'Count the center pawns after the trade: two for Black, one for White',
    'Name the half-open files: the c-file for Black, the d-file for White',
    'See what White gets in return: development and space'
  ],
  intro:
    "In the Open Sicilian, White's d-pawn and Black's c-pawn trade themselves off on d4. It looks like an even swap, one pawn for one pawn. But the two pawns were not worth the same to their owners. This module shows what each side has after the trade, and why both are happy with it.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'A side pawn for a center pawn',
      intro: 'Watch which pawns leave the board, and which stay.',
      moves: OPEN,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'Before the trade',
          text: 'After 1.e4 c5 2.Nf3 d6, each side has all eight pawns. Black\'s c-pawn on c5 is a side pawn. The center pawns are the d- and e-pawns.',
          marks: ['c5', 'd6', 'e7', 'e4']
        },
        5: {
          title: 'White offers the d-pawn',
          text: '3.d4. White pushes a center pawn to d4, where the c5-pawn can take it.',
          arrows: [['c5', 'd4', 'red']]
        },
        6: {
          title: 'Black takes',
          text: "3...cxd4. Black's side pawn takes White's center pawn. Black gives a c-pawn and gets rid of a d-pawn.",
          marks: ['d4']
        },
        7: {
          title: 'Two center pawns against one',
          text: "4.Nxd4. White takes back, and the pawns are even. But look at the center: Black still has the d6- and e7-pawns, while White has only the e4-pawn.",
          marks: ['d6', 'e7', 'e4']
        },
        8: {
          title: 'Black develops',
          text: '4...Nf6. Black brings out a knight and attacks e4. Module 1.4 explains this move.',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'White is ahead in development',
          text: "5.Nc3. White has two knights out, and the c1-bishop's diagonal is already open. Black has one knight out. That head start is White's reward for the trade.",
          arrows: [['c1', 'h6', 'blue']],
          marks: ['d4', 'c3']
        }
      }
    },
    {
      kind: 'text',
      title: 'Half-open files',
      body:
        "A **file** is a column of squares, like the c-file or the d-file. When neither side has a pawn on a file, it is **open**. When only one side has a pawn on it, it is **half-open** for the side that has no pawn there.\n\nAfter 3...cxd4 4.Nxd4, Black has no c-pawn but White still has the pawn on c2. So the c-file is **half-open for Black**: a black rook or queen on it can press against c2, or against a White piece that lands on c3. White has no d-pawn but Black still has the pawn on d6. So the d-file is **half-open for White**, pointing at d6. The e-file is still closed: both sides have an e-pawn.\n\nNotice that neither file is open. Be careful with the words: an open file has no pawns at all."
    },
    {
      kind: 'walkthrough',
      title: 'Both files at work: a look ahead',
      intro: 'This position comes from the Dragon (Chapter 3). Don\'t learn the moves yet. Just watch where the rooks go.',
      moves: FILES,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'A typical Sicilian position',
          text: "Both sides have developed. Black's c-pawn and White's d-pawn are still missing, so the c-file is half-open for Black and the d-file is half-open for White.",
          marks: ['c2', 'd6']
        },
        17: {
          title: 'White develops the bishop',
          text: "9.Bc4. White's last minor piece comes out. White is getting ready to castle on the queenside.",
          arrows: [['f1', 'c4', 'blue']]
        },
        18: {
          title: 'Black clears the back rank',
          text: '9...Bd7. The bishop leaves c8, so a rook can come to that square.',
          arrows: [['c8', 'd7', 'blue']]
        },
        19: {
          title: "White's rook finds the d-file",
          text: '10.O-O-O. White castles queenside, and the rook lands on d1, on the half-open d-file. The queen and the d4-knight stand in front of it for now, but the file leads to the d6-pawn.',
          arrows: [['d1', 'd6', 'blue']],
          marks: ['d6']
        },
        20: {
          title: "Black's rook finds the c-file",
          text: "10...Rc8. Black's rook goes to the half-open c-file. The c6-knight is in front of it for now. Once the knight moves, the rook will press down the file, toward White's queenside and the king on c1.",
          arrows: [['c8', 'c2', 'blue']],
          marks: ['c2']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Who gets what',
      body:
        "**Black** gets an extra center pawn and the half-open c-file. The extra center pawn is a long-term asset: it often matters more and more as pieces are traded, especially in the endgame.\n\n**White** gets a lead in development, more space (the e4-pawn stands further forward than Black's d6-pawn) and the half-open d-file. White wants to use that head start quickly, often with an attack on the kingside or in the center. Black usually counterattacks on the queenside, along the c-file."
    }
  ],
  takeaway:
    "After 3.d4 cxd4 4.Nxd4, Black has two center pawns against one and the half-open c-file. White has a lead in development, more space and the half-open d-file.",
  lookAhead:
    "Module 1.4 looks at the next two moves, 4...Nf6 and 5.Nc3, and why White defends e4 with the knight.",
  drills: [
    {
      title: 'Make the trade as White',
      prompt: "You're White. After 1.e4 c5 2.Nf3 d6, open the center and take back with the right piece.",
      moves: TRADE,
      start: 4,
      side: 'white',
      hints: ['Push your d-pawn two squares.', 'After 3...cxd4, take back with the knight.'],
      success: '3.d4 cxd4 4.Nxd4. The pawns are even, your knight sits in the center, and you are ahead in development.'
    },
    {
      title: 'Use the half-open file',
      prompt: "You're Black. White has just castled queenside. Put a rook on your half-open file.",
      moves: FILES,
      start: 19,
      side: 'black',
      hints: ['Which file has a White pawn on it but no Black pawn?', 'The c8-square is free now that the bishop went to d7.'],
      success: '10...Rc8. The rook stands on the half-open c-file, the road toward White\'s castled king.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 4.Nxd4, which file is half-open for Black?',
      moves: TRADE,
      orientation: 'black',
      choices: [
        { text: 'The c-file', correct: true, why: 'Right. Black has no c-pawn, but White still has one on c2.' },
        { text: 'The d-file', why: 'Black still has a pawn on d6. The d-file is half-open for White, not for Black.' },
        { text: 'The e-file', why: 'Both sides still have an e-pawn, so the e-file is closed.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 4.Nxd4, how many center pawns (d- and e-pawns) does each side have?',
      moves: TRADE,
      orientation: 'black',
      choices: [
        { text: 'Black has two, White has one', correct: true, why: 'Yes. Black kept the d- and e-pawns. White has only the e4-pawn, because the d-pawn was traded for Black\'s c-pawn.' },
        { text: 'One each', why: 'That is what happens after 1...e5 openings like the Scotch. In the Sicilian, Black traded a c-pawn, not a center pawn.' },
        { text: 'White has two, Black has one', why: "White's d-pawn has gone. Count again: e4 for White, d6 and e7 for Black." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 2...Nc6 3.d4 cxd4 4.Nxd4, is the c-file open?',
      moves: OPEN_NC6,
      orientation: 'black',
      choices: [
        { text: 'No. It is half-open for Black, because White still has a pawn on c2', correct: true, why: 'Exactly. An open file has no pawns at all. Here only Black is missing a pawn on it.' },
        { text: 'Yes. Neither side has a c-pawn', why: 'Look at c2: White\'s c-pawn is still at home. Only Black\'s c-pawn is gone.' },
        { text: 'No. It is half-open for White', why: 'The c-file is half-open for the side with no pawn on it, and that is Black.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'What does White get in return for giving Black two center pawns against one?',
      choices: [
        { text: 'A lead in development and more space', correct: true, why: "Right. White's knight is already on d4, the c1-bishop's diagonal is open, and the e4-pawn gives White room." },
        { text: 'An extra pawn', why: 'Material is level: one pawn each was traded on d4.' },
        { text: 'The half-open c-file', why: 'The c-file belongs to Black, because Black is the one with no c-pawn. White gets the d-file.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 4.Nxd4, which Black pawn stands on the half-open d-file, where White\'s rooks and queen can aim at it?',
      moves: TRADE,
      orientation: 'white',
      choices: [
        { text: 'The d6-pawn', correct: true, why: 'Yes. With no White d-pawn, the d-file leads straight to d6. It is a target White watches all game.' },
        { text: 'The e7-pawn', why: 'The e7-pawn is on the e-file, which is still closed.' },
        { text: 'The b7-pawn', why: 'The b-file is closed: both sides still have their b-pawns.' }
      ]
    },
    {
      type: 'concept',
      prompt: "Why is Black's extra center pawn called a long-term asset?",
      choices: [
        { text: 'It often matters more and more as pieces are traded, especially in the endgame', correct: true, why: 'Right. It does not win anything at once, but in many endgames the extra center pawn is what Black plays for.' },
        { text: 'It wins material straight away', why: 'Nothing is won at once. Material is level after 4.Nxd4.' },
        { text: 'It stops White from ever castling', why: 'White can castle on either side. The pawn matters for the long run, not for castling.' }
      ]
    }
  ],
  key: { name: 'The big trade: 3.d4 cxd4 4.Nxd4', moves: TRADE, orientation: 'black' },
  terms: [
    { term: 'Half-open file', meaning: 'A file where only one side has a pawn. It is half-open for the side with no pawn on it.' },
    { term: 'Open file', meaning: 'A file with no pawns at all. Rooks and queens love open files.' },
    { term: 'Lead in development', meaning: 'Having more pieces off their starting squares than the opponent.' },
    { term: 'Space', meaning: 'Room for your pieces behind your pawns. Pawns further up the board give you more space.' }
  ]
})
