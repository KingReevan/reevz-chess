import { defineModule } from '../../../types'
import { FRENCH, FORT_KNOX, WINAWER_MAIN } from '../lines'

/** adv-4qb6-wade: 3.e5 c5 4.c3 Qb6 5.Nf3 Bd7 6.Be2 Bb5 7.c4 Bxc4 8.Bxc4 dxc4 */
const WADE = `${FRENCH} e5 c5 c3 Qb6 Nf3 Bd7 Be2 Bb5 c4 Bxc4 Bxc4 dxc4`
/** win-7nf3-b6, first moves: 7.Nf3 b6 8.a4 Ba6 9.Bxa6 Nxa6 */
const BA6 = `${WINAWER_MAIN} Nf3 b6 a4 Ba6 Bxa6 Nxa6`

export default defineModule({
  id: '1.7',
  title: 'The problem bishop on c8',
  minutes: 11,
  level: 1,
  goals: [
    "See why the e6-pawn shuts in Black's c8-bishop",
    'Learn five standard ways to solve the problem',
    "Know why White usually keeps the good light-squared bishop"
  ],
  intro:
    "Every opening has a price. In the French, it is the c8-bishop. Black's pawns on e6 and d5 stand on light squares, the same color as the bishop, and the e6-pawn blocks its way to the kingside. Players call it the \"French bishop\" or the \"bad bishop\". This module shows how Black frees it or trades it off.",
  sections: [
    {
      kind: 'text',
      title: 'Why the bishop is shut in',
      body:
        "Look at the c8-bishop after 1.e4 e6 2.d4 d5. Its diagonal toward the kingside runs c8–d7–e6–f5–g4–h3, and Black's own e6-pawn blocks it after d7. Its other diagonal, c8–b7–a6, is blocked by the b7-pawn. So the bishop can only reach d7.\n\nA bishop whose own pawns stand on its color is called a **bad bishop**: the pawns take away its squares. White's light-squared bishop has no such problem, so it is White's **good bishop**.\n\nThere are five standard cures:\n\n**1. ...b6 and ...Ba6**, to trade it for White's good bishop.\n\n**2. ...Bd7 and ...Bb5**, also a trade.\n\n**3. ...Bd7 and ...Bc6**, after ...dxe4: the bishop takes the long diagonal (Fort Knox).\n\n**4. Trading pawns**: after 3.exd5 exd5 the diagonal is open at once.\n\n**5. ...f6 and later ...e5**, moving the blocking pawn away (Module 1.6)."
    },
    {
      kind: 'walkthrough',
      title: 'Trade it on b5: the Wade',
      intro: 'In this Advance line Black plays ...Qb6 before ...Nc6, so the c6-square stays free for the bishop to pass.',
      moves: WADE,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The bishop is stuck',
          text: "4...Qb6. Black's c8-bishop can only go to d7. Beyond d7, the e6-pawn blocks its path to f5, g4 and h3.",
          arrows: [['c8', 'd7', 'blue']],
          marks: ['e6']
        },
        9: {
          title: 'White develops',
          text: '5.Nf3. The knight defends d4. White will put the light-squared bishop on e2 or d3 and castle.',
          arrows: [['f3', 'd4', 'green']]
        },
        10: {
          title: 'The bishop steps out',
          text: '5...Bd7. The bishop goes to the only square it has. From d7 it looks toward b5, because c6 is still empty.',
          arrows: [['d7', 'b5', 'blue']]
        },
        11: {
          title: 'White prepares to castle',
          text: '6.Be2. The bishop develops so White can castle.',
          arrows: [['f1', 'e2', 'blue']]
        },
        12: {
          title: 'Offer the trade',
          text: "6...Bb5. Black's bishop attacks White's e2-bishop. If the bishops are traded, Black's problem piece is gone. This is the Wade Variation.",
          arrows: [['b5', 'e2', 'red']]
        },
        13: {
          title: 'White hits the bishop',
          text: '7.c4. The pawn attacks the b5-bishop and offers a pawn to open the center. (Stronger is to trade at once with 7.Bxb5+ Qxb5, which also takes the bad bishop off.)',
          arrows: [['c4', 'b5', 'red']]
        },
        14: {
          title: 'The bishop takes',
          text: '7...Bxc4. The bishop takes the pawn, still offering the trade.',
          arrows: [['c4', 'e2', 'red']]
        },
        15: {
          title: 'Bishops come off',
          text: "8.Bxc4. White takes the bishop. Black's problem bishop is gone.",
          marks: ['c4']
        },
        16: {
          title: 'Mission done',
          text: '8...dxc4. Black takes back with the d-pawn. Black is a pawn up for the moment, but White can win it back on c4. The engine calls the position level, and Black has no bad bishop anymore.',
          marks: ['c4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The long diagonal: Fort Knox',
      intro: 'Here Black first takes on e4. With the d-pawn gone, the bishop can use the long diagonal.',
      moves: FORT_KNOX,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The French position',
          text: "2...d5. The c8-bishop's only free square is d7.",
          arrows: [['c8', 'd7', 'blue']]
        },
        5: {
          title: 'White defends e4',
          text: '3.Nc3. The knight guards the e4-pawn.',
          arrows: [['c3', 'e4', 'green']]
        },
        6: {
          title: 'Black takes',
          text: '3...dxe4. Black gives up the center pawn. This is the start of the Rubinstein and Fort Knox lines (Chapter 5).',
          marks: ['e4']
        },
        7: {
          title: 'The knight takes back',
          text: '4.Nxe4. White has a knight in the center and a little more space.',
          marks: ['e4']
        },
        8: {
          title: 'The bishop starts its trip',
          text: '4...Bd7. The bishop heads for c6, where it will sit on the long diagonal from a8 to h1.',
          arrows: [['d7', 'c6', 'blue']]
        },
        9: {
          title: 'White develops',
          text: '5.Nf3. The knight develops and guards d4.',
          arrows: [['f3', 'd4', 'green']]
        },
        10: {
          title: 'A useful bishop',
          text: "5...Bc6. The bishop attacks the e4-knight, which has no defender yet, so White must deal with it. Black often trades this bishop for a knight later and builds a solid wall with ...c6. White keeps an edge, but not a large one.",
          arrows: [['c6', 'e4', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Trade it on a6',
      intro: 'The Winawer main line (Chapter 7) after 6...Ne7 7.Nf3. Black opens the other diagonal with ...b6.',
      moves: BA6,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'Same problem',
          text: "7.Nf3. Black's dark-squared bishop has already been traded on c3. The light-squared one on c8 is still shut in by the e6-pawn.",
          marks: ['c8', 'e6']
        },
        14: {
          title: 'Open the other diagonal',
          text: '7...b6. The b-pawn steps forward, and the diagonal c8–b7–a6 opens.',
          arrows: [['c8', 'a6', 'blue']]
        },
        15: {
          title: 'White makes room',
          text: '8.a4. The a-pawn moves up, so a White bishop can later use the a3-square.',
          marks: ['a3']
        },
        16: {
          title: 'Offer the trade',
          text: "8...Ba6. Black's bishop faces White's good bishop on f1. If they are traded, Black's problem is solved.",
          arrows: [['a6', 'f1', 'red']]
        },
        17: {
          title: 'White takes',
          text: '9.Bxa6. White trades the bishops.',
          marks: ['a6']
        },
        18: {
          title: 'The knight takes back',
          text: '9...Nxa6. The knight is on the edge for now, but it will come back via b8 to c6. The bad bishop is gone, and the position is roughly equal.',
          arrows: [['a6', 'b8', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: "White's view: keep the good bishop",
      body:
        "For White, the light-squared bishop is a treasure: it has free diagonals, while Black's is hemmed in. So White usually avoids trading it, unless the trade wins time or something else. In the endgame the difference can be big: Black's bad bishop ends up defending its own pawns while White's pieces use the light squares (Module 8.6). In the Exchange Variation, 3.exd5 exd5, White gives the problem away for free: the e6-pawn is gone and the c8-bishop is free at once."
    }
  ],
  takeaway:
    "Black's c8-bishop is shut in by the e6-pawn. Black solves it by trading it (...Bd7–b5 or ...b6 and ...Ba6), by putting it on the long diagonal after ...dxe4 (...Bd7–c6), or by moving the blocking pawn with ...f6 and ...e5. White should usually keep the good light-squared bishop.",
  lookAhead:
    'Module 1.8 collects the early mistakes both sides make most often in the French, and shows how to punish them.',
  drills: [
    {
      title: 'Trade the problem bishop',
      prompt: "You're Black in the Wade Variation. White has just played 6.Be2. Offer to trade your problem bishop for White's good one.",
      moves: `${FRENCH} e5 c5 c3 Qb6 Nf3 Bd7 Be2 Bb5`,
      start: 11,
      side: 'black',
      hints: ['Your d7-bishop can reach a square where it faces the e2-bishop.', '6...Bb5.'],
      success: '6...Bb5. If the bishops come off, Black no longer has a bad bishop.'
    },
    {
      title: 'Bishop to the long diagonal',
      prompt: "You're Black. White has played 3.Nc3. Take on e4, then bring the c8-bishop to the long diagonal in two moves.",
      moves: FORT_KNOX,
      start: 5,
      side: 'black',
      hints: ['First take the e4-pawn with your d-pawn.', 'Then the bishop goes to d7 and on to c6.'],
      success: '3...dxe4, 4...Bd7 and 5...Bc6. The French bishop now looks down the long diagonal: the Fort Knox.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Black to move. Which squares can the c8-bishop reach right now?',
      moves: `${FRENCH} e5`,
      orientation: 'black',
      choices: [
        { text: 'Only d7', correct: true, why: 'Right. The e6-pawn blocks the diagonal beyond d7, and the b7-pawn blocks the other one.' },
        { text: 'd7, e6, f5, g4 and h3', why: "Black's own pawn stands on e6, so the bishop cannot pass it." },
        { text: 'b7 and a6', why: 'The b7-pawn blocks that diagonal. Black needs ...b6 first.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is the c8-bishop called a "bad bishop" in the French?',
      choices: [
        { text: 'Its own pawns on d5 and e6 stand on its color and block its diagonals', correct: true, why: 'Right. A bishop moves on one color, and here Black\'s center pawns sit on that color.' },
        { text: 'It cannot move at all for the whole game', why: 'It can move, to d7 at least. The problem is that its best diagonal is blocked.' },
        { text: 'It is worth less than a knight in every position', why: 'Its value depends on the position. It is "bad" here because its own pawns are in the way.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Black has just played 7...b6. What is the idea?',
      moves: `${WINAWER_MAIN} Nf3 b6`,
      orientation: 'black',
      choices: [
        { text: "To play ...Ba6 and trade the bishop for White's good f1-bishop", correct: true, why: 'Right. The b-pawn move opens the c8–a6 diagonal.' },
        { text: 'To attack the c3-pawn', why: 'A pawn on b6 attacks a5 and c5, not c3. The idea is ...Ba6.' },
        { text: 'To castle on the queenside', why: 'The move is about the bishop: ...b6 opens a new diagonal so it can reach a6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In which line is the c8-bishop free at once, with no special plan?',
      choices: [
        { text: 'The Exchange Variation: 3.exd5 exd5', correct: true, why: 'Right. The e6-pawn has gone to d5, so the diagonal c8–h3 is open.' },
        { text: 'The Advance Variation: 3.e5', why: 'In the Advance the e6-pawn stays put, so Black needs a plan for the bishop.' },
        { text: 'The Winawer: 3.Nc3 Bb4', why: "In the Winawer it is the dark-squared bishop that comes out. The c8-bishop is still behind the e6-pawn." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: "In the Wade line, why can Black's bishop go from d7 to b5?",
      moves: `${FRENCH} e5 c5 c3 Qb6 Nf3 Bd7 Be2`,
      orientation: 'black',
      choices: [
        { text: 'The c6-square is empty, because Black played ...Qb6 before ...Nc6', correct: true, why: 'Right. With a knight on c6, the bishop on d7 could not see b5.' },
        { text: 'The bishop can jump over the c6-knight', why: 'Only knights jump. Here there is no knight on c6: the square is empty.' },
        { text: 'The e6-pawn has moved', why: 'The e6-pawn is still there. The bishop uses the other diagonal, d7–c6–b5.' }
      ]
    },
    {
      type: 'plan',
      prompt: "As White, what should you usually do with your light-squared bishop in the French?",
      choices: [
        { text: "Keep it, because Black's light-squared bishop is the worse piece", correct: true, why: "Right. Trading it for Black's bad bishop helps Black. Trade only when it wins time or something else." },
        { text: 'Trade it for Black\'s c8-bishop as soon as possible', why: "That solves Black's biggest problem for free. White prefers to keep the good bishop." },
        { text: 'Trade it for a knight at once', why: 'There is no reason to give up a good bishop early. It is one of White\'s best pieces.' }
      ]
    }
  ],
  key: { name: 'Wade: 8...dxc4, the bad bishop is gone', moves: WADE, orientation: 'black' },
  terms: [
    { term: 'Bad bishop', meaning: "A bishop hemmed in by its own pawns standing on its color, like Black's c8-bishop behind the pawns on e6 and d5." },
    { term: 'Good bishop', meaning: "A bishop whose own pawns stand on the other color, so its diagonals are free, like White's light-squared bishop in the French." },
    { term: 'Long diagonal', meaning: 'One of the two longest diagonals on the board, a1–h8 or a8–h1. A bishop there can reach the far corner.' }
  ]
})
