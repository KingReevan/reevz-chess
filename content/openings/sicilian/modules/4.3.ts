import { defineModule } from '../../../types'
import { RAUZER } from '../lines'

/** rauzer: 6.Bg5 e6 7.Qd2 */
const MAIN = `${RAUZER} e6 Qd2`
/** rauzer-be7: 7...Be7 8.O-O-O O-O 9.f4 Nxd4 10.Qxd4 Qa5 */
const BE7 = `${MAIN} Be7 O-O-O O-O f4 Nxd4 Qxd4 Qa5`
/** rauzer-a6, up to 10...b5 (Module 4.2 shows 11.Bxf6 gxf6) */
const A6 = `${MAIN} a6 O-O-O Bd7 f4 Be7 Nf3 b5`

export default defineModule({
  id: '4.3',
  title: 'Rauzer: castling on opposite sides',
  minutes: 10,
  level: 2,
  goals: [
    'See why White castles queenside and pushes the f-pawn',
    'Learn the ...Nxd4 and ...Qa5 plan, and why the move order matters',
    'Know the ...a6 and ...b5 plan against White\'s king'
  ],
  intro:
    "After 6.Bg5 e6 7.Qd2, White's queen and dark-squared bishop have left the back rank, so the king can castle queenside. Then the kings often end up on opposite wings. What does each side do next, and why is the order of Black's moves so important?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Trade on d4, then ...Qa5',
      intro: 'Black castles short and plays in the center and on the queenside. Watch where the black queen ends up.',
      moves: BE7,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: "White's set-up",
          text: '7.Qd2. White is ready to castle queenside. Black first has to break the pin on the f6-knight and decide where the king goes.',
          arrows: [['e1', 'c1', 'blue']]
        },
        14: {
          title: 'Breaking the pin',
          text: "7...Be7. The bishop develops and stands between the knight and the queen. Now Bxf6 can be met by ...Bxf6, so Black's pawns stay healthy.",
          arrows: [['f8', 'e7', 'green']]
        },
        15: {
          title: 'White castles long',
          text: '8.O-O-O. The king goes to c1 and the rook to d1 in one move. With the king on the queenside, White can push the kingside pawns without weakening it.',
          arrows: [['a1', 'd1', 'blue']]
        },
        16: {
          title: 'Opposite wings',
          text: '8...O-O. The kings are now on opposite sides. Each side can throw pawns at the other king without opening up its own.',
          marks: ['c1', 'g8']
        },
        17: {
          title: 'White grabs space',
          text: '9.f4. The f-pawn guards the g5-bishop and prepares e4–e5, which would hit the f6-knight and the d6-pawn.',
          arrows: [['f4', 'g5', 'green'], ['e4', 'e5', 'blue']]
        },
        18: {
          title: 'Trade the strong knight',
          text: '9...Nxd4. Black swaps off the d4-knight. That also removes the knight that could jump to b3 and chase a black queen on a5.',
          marks: ['d4']
        },
        19: {
          title: 'Queen in the center',
          text: '10.Qxd4. The queen takes back and stands in the middle of the board.',
          marks: ['d4']
        },
        20: {
          title: 'The queen goes to a5',
          text: "10...Qa5. The queen hits the g5-bishop along the fifth rank (the f4-pawn guards it) and eyes White's queenside, where the king lives. White is slightly better, but Black's pieces are active.",
          arrows: [['a5', 'g5', 'red'], ['a5', 'c3', 'blue']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'Why the trade comes first',
      body:
        'If Black plays 9...Qa5 at once, White answers 10.Nb3!, and the knight hits the queen. Black has to move the queen again, and White is better. Trading 9...Nxd4 first removes the knight that could make that jump.'
    },
    {
      kind: 'walkthrough',
      title: 'The queenside plan: ...a6 and ...b5',
      intro: "This time Black leaves the king in the middle for now and starts pushing pawns toward White's king.",
      moves: A6,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'Same position',
          text: '7.Qd2 again. This time Black starts on the queenside at once.',
          arrows: [['a7', 'a6', 'blue']]
        },
        14: {
          title: 'No b5 for White',
          text: "7...a6. The pawn takes b5 away from White's knight and bishop, and it prepares ...b5.",
          arrows: [['a6', 'b5', 'green']]
        },
        15: {
          title: 'White castles long',
          text: "8.O-O-O. White's king goes to c1. Black's queenside pawns will now be marching straight toward it.",
          marks: ['c1']
        },
        16: {
          title: 'A quiet developing move',
          text: "8...Bd7. The bishop develops and guards the c6-knight. Black still hasn't decided where the king goes.",
          arrows: [['d7', 'c6', 'green']]
        },
        17: {
          title: 'The f-pawn again',
          text: '9.f4. The same push as before: more space, support for e4–e5, and a pawn guard for the g5-bishop.',
          arrows: [['f4', 'g5', 'green'], ['e4', 'e5', 'blue']]
        },
        18: {
          title: 'The pin is broken',
          text: '9...Be7. The bishop steps between the knight and the queen.',
          arrows: [['f8', 'e7', 'green']]
        },
        19: {
          title: 'No trade on d4',
          text: '10.Nf3. The knight steps back to support e4–e5. Now Black cannot trade it with ...Nxd4.',
          arrows: [['f3', 'e5', 'blue']]
        },
        20: {
          title: 'The race begins',
          text: "10...b5. Black's pawns head for White's king. Next comes ...b4, chasing the c3-knight. Module 4.2 showed White's answer: 11.Bxf6 gxf6.",
          arrows: [['b5', 'b4', 'blue'], ['b4', 'c3', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Opposite-side castling',
      body:
        "When the kings castle on opposite wings, pushing pawns toward the enemy king costs you nothing at home: your own king is not behind those pawns. So both sides attack.\n\nIn the Rauzer, White pushes **f4**, then e4–e5 or f4–f5, and sometimes g4–g5. Black pushes **...a6, ...b5 and ...b4**, and uses the half-open c-file and the queen on a5. Every move counts: the side that opens lines against the enemy king first usually gets there first."
    },
    {
      kind: 'tip',
      title: 'From White\'s side',
      body:
        "Against ...Qa5 and ...b5, White often plays Kb1: the king steps off the half-open c-file and guards the a2-pawn. Against the ...a6 plan, White often takes on f6 before ...b4 arrives, as Module 4.2 showed."
    }
  ],
  takeaway:
    'In the Rauzer, White castles long and pushes f4. Black either trades on d4 and plays ...Qa5 (in that order, or Nb3 hits the queen), or plays ...a6 and ...b5 against White\'s king.',
  lookAhead: 'Next: the other big sixth move, 6.Bc4, the Sozin, where the bishop aims at e6 and f7.',
  drills: [
    {
      title: 'Trade, then ...Qa5',
      prompt: "You're Black after 7.Qd2. Break the pin, castle, trade on d4 at the right moment and bring your queen to a5.",
      moves: BE7,
      start: 13,
      side: 'black',
      hints: [
        'First develop the bishop that blocks the pin, then castle short.',
        'After 9.f4, trade knights on d4 before the queen comes out.'
      ],
      success: '7...Be7, 8...O-O, 9...Nxd4 and 10...Qa5. The queen hits g5 along the fifth rank, and no knight can chase it from b3.'
    },
    {
      title: "White's set-up against ...a6",
      prompt: "You're White. Castle long, gain space with the f-pawn, keep your knight from being traded, and take on f6 when ...b5 comes.",
      moves: `${A6} Bxf6`,
      start: 13,
      side: 'white',
      hints: [
        'Castle queenside first, then push the f-pawn two squares.',
        'After 9...Be7, step the knight back to a square where it supports e4–e5. After ...b5, remove the f6-knight.'
      ],
      success: '8.O-O-O, 9.f4, 10.Nf3 and 11.Bxf6. White takes the knight before ...b4 can chase the c3-knight.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does White castle queenside in the Richter–Rauzer?',
      moves: MAIN,
      orientation: 'white',
      choices: [
        { text: 'The rook reaches d1 at once, and White can push the kingside pawns without exposing the king', correct: true, why: 'Right. Qd2 and Bg5 cleared the way, and castling long frees the f-, g- and h-pawns for an attack.' },
        { text: 'It keeps the king away from the c-file', why: "The king on c1 actually stands on the c-file, which is half-open for Black. White accepts that risk for a faster attack." },
        { text: 'It protects the a2-pawn from ...Qa5', why: 'A king on c1 does not guard a2. White castles long for the rook and the pawn storm.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. What is the best way to continue?',
      moves: `${MAIN} Be7 O-O-O O-O f4`,
      orientation: 'black',
      choices: [
        { text: '9...Nxd4', correct: true, why: 'Right. Trade the strong knight first, then play ...Qa5 without fear of Nb3.' },
        { text: '9...Qa5', why: '10.Nb3! hits the queen. Black loses time, and White is better.' },
        { text: '9...e5', why: "10.Nf5! puts the knight on a great square, and d5 becomes a hole. It's the same problem as 6...e5? in Module 4.2." }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the 7...a6 line, what is Black\'s plan on the queenside?',
      moves: A6,
      orientation: 'black',
      choices: [
        { text: '...b5 and ...b4, chasing the c3-knight', correct: true, why: "Yes. The pawns march toward White's king, and ...b4 kicks the knight that guards e4." },
        { text: '...Qa5 and a quick mate on a2', why: 'The c3-knight guards a2, and there is no mate. The plan is a pawn storm with ...b5 and ...b4.' },
        { text: '...f5, opening the f-file', why: "That is a kingside idea, and it would weaken Black's own position. On the queenside, the pawns go ...b5 and ...b4." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which White piece does the queen on a5 attack along the fifth rank?',
      moves: BE7,
      orientation: 'black',
      choices: [
        { text: 'The g5-bishop', correct: true, why: 'Right. The squares b5 to f5 are empty, so the queen hits g5. The f4-pawn guards the bishop.' },
        { text: 'The d4-queen', why: 'The d4-queen is on the fourth rank, and the queen on a5 does not hit it. Along the fifth rank the first piece it meets is the g5-bishop.' },
        { text: 'The c3-knight', why: 'The queen does look at c3, but along the diagonal through b4, not along the fifth rank.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'When the kings castle on opposite sides, what usually matters most?',
      choices: [
        { text: 'Speed: opening lines against the enemy king before your opponent does', correct: true, why: 'Yes. Pawn storms cost nothing at home, so both sides attack and every move counts.' },
        { text: 'Keeping all your pawns at home', why: 'Then your opponent attacks freely. With opposite-side castling, you need your own attack.' },
        { text: 'Trading queens as early as possible', why: 'Trades can help the defender, but the main question is who breaks through first.' }
      ]
    },
    {
      type: 'order',
      prompt: 'After 7...Be7 8.O-O-O O-O 9.f4, why does Black play 9...Nxd4 before ...Qa5?',
      choices: [
        { text: 'After 9...Qa5 at once, 10.Nb3 hits the queen and gains time', correct: true, why: 'Right. Trading on d4 first removes the knight that could chase the queen from b3.' },
        { text: '9...Nxd4 wins a pawn', why: '9...Nxd4 10.Qxd4 is an even trade of knights. It is about the move order, not material.' },
        { text: 'The queen cannot reach a5 until d4 is cleared', why: 'The queen can go from d8 to a5 through c7 and b6 at any time. The problem with 9...Qa5 is 10.Nb3.' }
      ]
    }
  ],
  key: { name: 'Rauzer: 9...Nxd4 10.Qxd4 Qa5', moves: BE7, orientation: 'black' },
  terms: [
    { term: 'Opposite-side castling', meaning: 'One king castles kingside and the other queenside. Both sides can then storm with pawns.' },
    { term: 'Pawn storm', meaning: 'Pushing several pawns toward the enemy king to open lines for an attack.' },
    { term: 'Tempo', meaning: 'One move of time. Losing a tempo means wasting a move, for example by moving the same piece twice.' }
  ]
})
