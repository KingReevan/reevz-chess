import { defineModule } from '../../../types'
import { OPEN } from '../../../lines'

/** open-9c3-bc5: the Dilworth starting position after 11.Bc2 */
const BC5 = `${OPEN} c3 Bc5 Nbd2 O-O Bc2`
/** open-dilworth */
const DILWORTH = `${BC5} Nxf2 Rxf2 f6 exf6 Bxf2+ Kxf2 Qxf6`
/** The 13.Nf1 branch given in the research doc (Wikipedia) */
const NF1 = `${BC5} Nxf2 Rxf2 f6 Nf1 Bxf2+ Kxf2 fxe5 Kg1`

export default defineModule({
  id: '6.6',
  title: 'The Dilworth: 11...Nxf2!?',
  minutes: 11,
  level: 4,
  goals: [
    'Find the Dilworth sacrifice 11...Nxf2 and the follow-up 12...f6',
    'Understand the pin on the f2-rook that makes it work',
    'Count the result: a rook and pawns for two minor pieces'
  ],
  intro:
    "In Module 6.5 Black answered 11.Bc2 by defending e4. There is a wilder answer: let the knight go, and take something on the way. In the Dilworth, Black gives up two minor pieces and gets a rook, pawns and an open f-file against White's king.",
  sections: [
    {
      kind: 'text',
      title: 'Look at f2 and g1',
      body:
        "With the bishop on c5, Black has a line straight through **d4, e3 and f2** to White's king on g1. The f2-pawn is the only thing in the way, and only the king and the f1-rook guard it.\n\nThat is the idea of the Dilworth. If a white rook ends up on f2, it is **pinned** to its king by the c5-bishop. A pinned piece can't run, and Black can attack it again."
    },
    {
      kind: 'walkthrough',
      title: 'The Dilworth main line',
      intro: "You're Black. Before each move, ask what the c5-bishop is doing.",
      moves: DILWORTH,
      start: 21,
      orientation: 'black',
      steps: {
        21: {
          title: 'The knight is attacked twice',
          text: '11.Bc2. White threatens Nxe4 and Bxe4, winning a pawn. Instead of defending, Black looks at f2.',
          arrows: [['c5', 'g1', 'yellow']],
          marks: ['f2']
        },
        22: {
          title: 'The sacrifice',
          text: "11...Nxf2. The knight takes the pawn and attacks White's queen on d1. The c5-bishop guards it.",
          arrows: [['f2', 'd1', 'red'], ['c5', 'f2', 'green']],
          ann: '!?'
        },
        23: {
          title: 'The rook takes',
          text: '12.Rxf2. White wins a knight for a pawn. But now the rook stands on f2, pinned to its king by the c5-bishop.',
          arrows: [['c5', 'g1', 'red']],
          marks: ['f2']
        },
        24: {
          title: 'Open the f-file',
          text: '12...f6. The pawn hits e5 and opens a path for the f8-rook. The pinned rook on f2 can\'t move.',
          arrows: [['f8', 'f2', 'blue'], ['f6', 'e5', 'red']],
          ann: '!'
        },
        25: {
          title: 'White takes on f6',
          text: '13.exf6. White grabs a pawn, and the f-file is now open from f8 to f2.',
          arrows: [['f8', 'f2', 'blue']]
        },
        26: {
          title: 'Rook won, with check',
          text: '13...Bxf2+. The bishop takes the pinned rook and gives check.',
          arrows: [['f2', 'g1', 'red']]
        },
        27: {
          title: 'The king recaptures',
          text: "14.Kxf2. White's king is now on the open f-file, with no f-pawn in front of it.",
          marks: ['f2']
        },
        28: {
          title: 'A new pin',
          text: '14...Qxf6. The queen takes back and pins the f3-knight to the king. Black has a rook and a pawn for a knight and a bishop, plus pressure on the f-file.',
          arrows: [['f6', 'f2', 'red']],
          marks: ['f3']
        }
      }
    },
    {
      kind: 'text',
      title: 'Counting the material',
      body:
        "Use the usual values: a knight or bishop is worth about 3, a rook 5, a pawn 1.\n\nBlack gave up a knight and a bishop (6). Black got a rook and a pawn (6). On paper it is level, but the position is **unbalanced**: White's minor pieces against Black's rooks and the open f-file. Players who like clear plans and fighting chances choose it. The grandmaster Artur Yusupov played it many times."
    },
    {
      kind: 'walkthrough',
      title: 'White declines: 13.Nf1',
      intro: "White doesn't have to take on f6. Here White tucks the knight away and keeps the king safer.",
      moves: NF1,
      start: 23,
      orientation: 'black',
      steps: {
        23: {
          title: 'Same pin',
          text: '12.Rxf2. As before, the rook on f2 is pinned by the c5-bishop.',
          arrows: [['c5', 'g1', 'red']],
          marks: ['f2']
        },
        24: {
          title: 'The f-file opens',
          text: '12...f6. The same key move. Black attacks e5 and lines up the f8-rook.',
          arrows: [['f6', 'e5', 'red'], ['f8', 'f2', 'blue']]
        },
        25: {
          title: 'A different reply',
          text: '13.Nf1. White ignores f6. The knight frees the c1-bishop and covers e3, g3 and h2 near the king.',
          arrows: [['f1', 'e3', 'green'], ['f1', 'g3', 'green']]
        },
        26: {
          title: 'Rook won, with check',
          text: '13...Bxf2+. Black cashes in the pin anyway.',
          arrows: [['f2', 'g1', 'red']]
        },
        27: {
          title: 'The king takes',
          text: '14.Kxf2. The king recaptures, but it stands on the f-file.',
          marks: ['f2']
        },
        28: {
          title: 'A big pawn center',
          text: '14...fxe5. Black takes the e5-pawn. Now Black has a rook and two pawns for the two minor pieces, and strong center pawns on d5 and e5.',
          marks: ['d5', 'e5']
        },
        29: {
          title: 'The king runs',
          text: '15.Kg1. The king steps off the open f-file. The fight is roughly balanced but full of play for both sides.',
          arrows: [['f8', 'f1', 'blue']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'It only works with the bishop on c5',
      body:
        "The Dilworth needs the c5-bishop to guard f2 and pin the rook. With the bishop on e7 (Module 6.4), ...Nxf2 just loses a knight for a pawn. Check the a7-g1 diagonal before you sacrifice."
    }
  ],
  takeaway:
    "In the Dilworth, 11...Nxf2! 12.Rxf2 f6! uses the c5-bishop's pin on f2 to win the rook back. Black ends up with a rook and pawns for two minor pieces, and the open f-file against White's king.",
  lookAhead:
    "Next: White's other ninth moves, Karpov's 9.Nbd2 with the 11.Ng5 gambit, and the Howell Attack 9.Qe2.",
  drills: [
    {
      title: 'Find the Dilworth',
      prompt: "You're Black after 11.Bc2. Instead of defending e4, sacrifice on f2 and win the rook back.",
      moves: DILWORTH,
      start: 21,
      side: 'black',
      hints: ['Your c5-bishop already eyes f2. What can your knight take there?', 'After 12.Rxf2 the rook is pinned. Open the f-file with a pawn, then take the rook.'],
      success: "11...Nxf2, 12...f6, 13...Bxf2+ and 14...Qxf6. That's the Dilworth: a rook and a pawn for two minor pieces, and a pinned f3-knight."
    },
    {
      title: 'Defend as White',
      prompt: "You're White. Black has sacrificed with 11...Nxf2. Take the knight, then choose the calm 13.Nf1 line and get your king to safety.",
      moves: NF1,
      start: 21,
      side: 'white',
      hints: ['The knight on f2 attacks your queen. Take it with the rook.', 'After 12...f6, bring the d2-knight to f1. Later, step the king off the f-file.'],
      success: '12.Rxf2, 13.Nf1, 14.Kxf2 and 15.Kg1. Your king is safe, and you have two minor pieces for a rook and two pawns.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "After 11...Nxf2 12.Rxf2, why can't the rook on f2 move?",
      moves: `${BC5} Nxf2 Rxf2`,
      orientation: 'black',
      choices: [
        { text: 'It is pinned to the king on g1 by the c5-bishop', correct: true, why: 'Right. Moving it would put White in check, which is illegal.' },
        { text: 'It is blocked by its own pawns', why: 'The rook has empty squares around it. It is the pin that stops it.' },
        { text: 'It is pinned by the f8-rook', why: "The f7-pawn still blocks Black's rook. The pin comes from the c5-bishop, along the diagonal to g1." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move after 12.Rxf2. What is the main move?',
      moves: `${BC5} Nxf2 Rxf2`,
      orientation: 'black',
      choices: [
        { text: '12...f6', correct: true, why: 'Yes. It opens the f-file and hits e5 while the f2-rook is stuck in the pin.' },
        { text: '12...Qh4', why: 'The f3-knight guards h4. 13.Nxh4 simply wins the queen.' },
        { text: '12...Bg4', why: 'It pins the f3-knight, but it does nothing on the f-file. After 13.Qf1 White breaks the pin and Black is a piece down for a pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After the Dilworth main line to 14...Qxf6, what has Black got for the knight and bishop?',
      moves: DILWORTH,
      orientation: 'black',
      choices: [
        { text: 'A rook and a pawn, plus pressure on the f-file', correct: true, why: 'Right. About equal on paper, with an open f-file against the king.' },
        { text: 'Only one pawn', why: 'Black also won the f2-rook with ...Bxf2+. Count again: rook and pawn.' },
        { text: 'Two rooks', why: 'Black won one rook, the one on f2. White still has the a1-rook.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Why would 11...Nxf2 fail with the bishop on e7 instead of c5?',
      choices: [
        { text: 'Nothing would guard f2 or pin the rook, so Black just loses a knight', correct: true, why: 'Exactly. The whole idea depends on the c5-bishop.' },
        { text: 'It would be illegal', why: 'The capture is legal. It just loses material.' },
        { text: 'It would still work the same way', why: 'Without the c5-bishop, 12.Rxf2 leaves the rook free and Black a piece down.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Black has just played 11...Nxf2. What is this line called?',
      moves: `${BC5} Nxf2`,
      orientation: 'black',
      choices: [
        { text: 'The Dilworth Variation', correct: true, why: 'Right. 11...Nxf2 in the 9...Bc5 Open is the Dilworth.' },
        { text: 'The Marshall Attack', why: 'The Marshall is a pawn sacrifice with 8...d5 in the Closed Ruy Lopez.' },
        { text: 'The Riga Variation', why: 'The Riga is 6...exd4, much earlier in the Open Defense.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move after 12.Rxf2 f6 13.exf6. How does Black win the rook back?',
      moves: `${BC5} Nxf2 Rxf2 f6 exf6`,
      orientation: 'black',
      choices: [
        { text: '13...Bxf2+', correct: true, why: 'The bishop takes the pinned rook with check. Then 14.Kxf2 Qxf6.' },
        { text: '13...Rxf6', why: 'It gives White time for 14.Qf1, guarding the rook. Then ...Bxf2+ is met by Qxf2, not Kxf2. Take the rook first.' },
        { text: '13...Qxf6', why: "It also allows 14.Qf1, so the queen can take back on f2 and White's king stays safe. Take the rook at once." }
      ]
    }
  ],
  key: { name: 'Dilworth Variation: 11...Nxf2', moves: `${BC5} Nxf2`, orientation: 'black' },
  terms: [
    { term: 'Sacrifice', meaning: 'Giving up material on purpose to get something better, like an attack or a stronger position.' },
    { term: 'Absolute pin', meaning: 'A pin against the king. The pinned piece is not allowed to move off the line.' },
    { term: 'Unbalanced position', meaning: 'A position where each side has different strengths, such as rooks against minor pieces.' }
  ]
})
