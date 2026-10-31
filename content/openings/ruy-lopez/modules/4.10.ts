import { defineModule } from '../../../types'
import { MORPHY } from '../../../lines'

const A4 = `${MORPHY} Be7 d3 b5 Bb3 d6 a4 b4 a5 O-O Nbd2 Be6 Nc4`
const BUILD = `${MORPHY} Be7 d3 d6 c3 O-O Re1 b5 Bc2 Bb7 Nbd2 Re8 h3 Bf8 d4`

export default defineModule({
  id: '4.10',
  title: 'The modern 6.d3 Ruy',
  minutes: 11,
  level: 2,
  goals: [
    'Know why top players often guard e4 with 6.d3 instead of 6.Re1',
    'Learn the a4-a5 plan and the knight jump to c4',
    'See how the slow c3, Bc2, Nbd2, h3, d4 build-up can reach a Closed main line'
  ],
  intro:
    "Since about 2010, many of the world's best players have answered 5...Be7 with the quiet 6.d3. It looks modest: the pawn moves one square, and d4 is put off for later. Why would anyone choose that over the classical main line?",
  sections: [
    {
      kind: 'text',
      title: 'Why 6.d3?',
      body:
        "**e4 is rock-solid.** A pawn guards it, so White doesn't need Re1 at once, and Black's tricks against e4 (like ...Nxe4) lose their point.\n\n**No Marshall.** The Marshall Attack (Chapter 5) arises after 6.Re1 b5 7.Bb3 O-O 8.c3 d5, with White's d-pawn still at home. After 6.d3 that position can never appear.\n\n**d4 can wait.** White builds up first and pushes d3-d4 later, when it suits. The game becomes a battle of plans and maneuvers rather than memorised theory."
    },
    {
      kind: 'walkthrough',
      title: 'The a4-a5 plan and Nc4',
      intro: "You're White. Instead of c3, White hits Black's queenside at once.",
      moves: A4,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'A quieter choice',
          text: "White has castled, and Black has played 5...Be7. Here the classical move is 6.Re1. White picks a pawn move instead.",
          arrows: [['d2', 'd3', 'green']]
        },
        11: {
          title: 'The pawn guards e4',
          text: '6.d3. The e4-pawn now has a pawn guarding it. That will stay true for the rest of the opening.',
          arrows: [['d3', 'e4', 'green']]
        },
        12: {
          title: 'The usual chase',
          text: '6...b5. Black chases the bishop off the a4-e8 diagonal, as in the main line.',
          arrows: [['b5', 'a4', 'red']]
        },
        13: {
          title: 'Bishop to b3',
          text: '7.Bb3. The bishop takes up its post on the a2-g8 diagonal, aiming at f7.',
          arrows: [['b3', 'f7', 'yellow']]
        },
        14: {
          title: 'Black guards e5',
          text: '7...d6. Black supports e5 and opens the c8-bishop.',
          arrows: [['d6', 'e5', 'green']]
        },
        15: {
          title: 'The a-pawn lever',
          text: '8.a4. White hits b5 straight away. Black must decide how to deal with it.',
          arrows: [['a4', 'b5', 'red']]
        },
        16: {
          title: 'Black pushes past',
          text: '8...b4. Black avoids a trade on b5. But now no Black pawn guards c4, and that square will matter.',
          marks: ['c4']
        },
        17: {
          title: 'Fixing the queenside',
          text: "9.a5. The pawn takes b6 away from Black's pieces and keeps the a6-pawn where it is.",
          arrows: [['a5', 'b6', 'yellow']]
        },
        18: {
          title: 'Black castles',
          text: '9...O-O. Black gets the king safe.',
          arrows: [['e8', 'g8', 'blue']]
        },
        19: {
          title: 'A different knight route',
          text: '10.Nbd2. This time the knight is not going to f1. It is heading for c4.',
          arrows: [['d2', 'c4', 'blue']]
        },
        20: {
          title: 'A bishop challenge',
          text: '10...Be6. Black offers to trade off the b3-bishop, which is White\'s best attacking piece.',
          arrows: [['e6', 'b3', 'red']]
        },
        21: {
          title: 'The knight lands on c4',
          text: "11.Nc4. The knight blocks the bishop trade and hits d6, e5 and b6. It is guarded by the b3-bishop and the d3-pawn.",
          arrows: [['c4', 'd6', 'red'], ['c4', 'e5', 'red'], ['c4', 'b6', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The slow build-up to d4',
      intro: "A second way to play 6.d3: c3, Re1, Bc2, Nbd2 and h3, then d3-d4. Watch where it ends up.",
      moves: BUILD,
      start: 14,
      orientation: 'white',
      steps: {
        14: {
          title: 'c3 before ...b5',
          text: "White has played 6.d3 and 7.c3, and Black has castled. Note that 7.c3 emptied c2, so the a4-bishop now has a direct road there.",
          arrows: [['a4', 'c2', 'blue']]
        },
        15: {
          title: 'The rook comes anyway',
          text: '8.Re1. White adds the rook to the e-file and frees f1 for the knight.',
          arrows: [['f1', 'e1', 'blue']]
        },
        16: {
          title: 'The chase',
          text: '8...b5. Black kicks the bishop.',
          arrows: [['b5', 'a4', 'red']]
        },
        17: {
          title: 'Straight to c2',
          text: '9.Bc2. The bishop goes from a4 to c2 in one move. In the main line it needs two: b3, then c2.',
          arrows: [['c2', 'e4', 'green']]
        },
        18: {
          title: 'A Zaitsev-style set-up',
          text: '9...Bb7. Black uses the plan from Module 4.6: bishop on the long diagonal, then ...Re8 and ...Bf8.',
          arrows: [['b7', 'e4', 'blue']]
        },
        19: {
          title: 'The tour starts',
          text: '10.Nbd2. The knight sets off toward f1.',
          arrows: [['d2', 'f1', 'blue']]
        },
        20: {
          title: 'Rook to e8',
          text: '10...Re8. The rook joins the fight for e4 and e5.',
          arrows: [['e7', 'f8', 'blue']]
        },
        21: {
          title: 'Stopping ...Bg4 and ...Ng4',
          text: '11.h3. A familiar move. It keeps Black\'s pieces off g4 before d4 arrives.',
          arrows: [['h3', 'g4', 'green']]
        },
        22: {
          title: 'The wall around e5',
          text: '11...Bf8. The e5-pawn now has three guards: d6, c6 and e8.',
          arrows: [['e8', 'e5', 'green'], ['c6', 'e5', 'green'], ['d6', 'e5', 'green']]
        },
        23: {
          title: 'd4 at last',
          text: '12.d4. White pushes the pawn a second time. This is exactly the Zaitsev position after 12.Bc2. The two pawn moves cost nothing, because the bishop saved a move by going straight to c2.',
          arrows: [['d4', 'e5', 'red']],
          marks: ['d4']
        }
      }
    },
    {
      kind: 'tip',
      title: 'A third plan: 8.a3 and 9.Nc3',
      body:
        "After 6.d3 b5 7.Bb3 d6, White can also play 8.a3 O-O 9.Nc3. The a3-pawn gives the bishop a retreat on a2 if Black plays ...Na5. And because the c-pawn hasn't moved, the knight can develop to c3 in one move. Against slow White play, Black should look for the ...d5 break."
    }
  ],
  takeaway:
    "6.d3 keeps e4 rock-solid, avoids the Marshall and saves d4 for later. White can hit the queenside with a4-a5 and Nc4, or build up slowly with c3, Bc2, Nbd2 and h3 before playing d4.",
  lookAhead:
    "Next: three more 6th moves for White: 6.Qe2, 6.d4 and 6.Bxc6.",
  drills: [
    {
      title: 'The a4-a5 plan',
      prompt: "You're White after 7...d6 in the 6.d3 line. Hit b5 with the a-pawn, fix the queenside, and bring a knight to c4.",
      moves: A4,
      start: 14,
      side: 'white',
      hints: ['First a pawn move against b5, then push that pawn again after ...b4.', 'The b1-knight reaches c4 through d2.'],
      success: '8.a4, 9.a5, 10.Nbd2 and 11.Nc4. The knight hits d6, e5 and b6.'
    },
    {
      title: 'Build up, then d4',
      prompt: "You're White after 6.d3 d6. Build the classical set-up the slow way and finish with d4.",
      moves: BUILD,
      start: 12,
      side: 'white',
      hints: ['c3 first, so the bishop can retreat to c2 in one move. Then the rook to e1.', 'After ...b5, Bc2. Then Nbd2, h3 and finally d4.'],
      success: '7.c3, 8.Re1, 9.Bc2, 10.Nbd2, 11.h3 and 12.d4. You have reached a Zaitsev main line position.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the main point of 6.d3?',
      moves: `${MORPHY} Be7 d3`,
      orientation: 'white',
      choices: [
        { text: 'A pawn guards e4, so White can build up slowly and save d4 for later', correct: true, why: 'Right. With e4 solid, White avoids sharp lines like the Marshall and chooses when to open the center.' },
        { text: 'It prepares Bxf7+', why: 'The bishop is on a4, not aiming at f7 yet. 6.d3 is about the center.' },
        { text: 'It traps the a4-bishop', why: "6.d3 doesn't trap anything. It guards e4." }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 8.a4 b4 9.a5 O-O 10.Nbd2 Be6, where does the d2-knight go?',
      moves: `${MORPHY} Be7 d3 b5 Bb3 d6 a4 b4 a5 O-O Nbd2 Be6`,
      orientation: 'white',
      choices: [
        { text: 'c4', correct: true, why: 'Yes. 11.Nc4 blocks the bishop trade and hits d6, e5 and b6.' },
        { text: 'f1, then g3', why: 'That is the classical tour, but here c4 is free and the knight is stronger there.' },
        { text: 'b3', why: "The b3-square is taken by White's own bishop." }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the slow build-up, the bishop goes a4-c2 in one move. Why is that possible?',
      choices: [
        { text: 'The c-pawn has moved to c3, so the a4-c2 diagonal is clear', correct: true, why: 'Right. With c2 empty, the bishop slides a4-b3-c2 in one go. In the main line it stops on b3 first.' },
        { text: 'Bishops can jump over pawns', why: 'Only knights jump. The path a4-b3-c2 is simply clear.' },
        { text: 'Black played ...Na5', why: 'Black did not play ...Na5 here. The bishop chose c2 because the road was open.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 8.a3 line, what does the a3-pawn do for the b3-bishop?',
      choices: [
        { text: 'It gives the bishop a retreat on a2 if Black plays ...Na5', correct: true, why: 'Yes. The bishop can step back to a2 and keep its diagonal.' },
        { text: 'It guards the bishop on b3', why: 'A pawn on a3 guards b4, not b3. It frees a2 for the bishop.' },
        { text: 'It stops ...b4 for good', why: 'It covers b4 for now, but the main point is the a2 retreat square.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'In the slow 6.d3 build-up, White spends two moves on the d-pawn (d3, then d4). Why does White not lose time compared with the main line?',
      choices: [
        { text: 'The bishop saves a move by going a4-c2 directly instead of via b3', correct: true, why: 'Right. One extra pawn move, one saved bishop move. You reach the Zaitsev position after 12.Bc2.' },
        { text: 'Black wastes a move on ...h6', why: 'Black did not play ...h6 in this line. The saving comes from the bishop.' },
        { text: 'White never castles', why: 'White castled on move 5, as in every Closed Ruy.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Against a slow 6.d3 set-up, which pawn break should Black look for?',
      choices: [
        { text: '...d5', correct: true, why: 'Yes. When White delays d4, Black can sometimes strike first in the center with ...d5.' },
        { text: '...g5', why: "...g5 weakens Black's own king. The central break ...d5 is the natural try." },
        { text: '...a5-a4 to trap the bishop', why: 'The bishop has retreat squares, and this does not fight for the center. ...d5 is the break.' }
      ]
    }
  ],
  key: { name: 'Modern d3 Ruy: 6.d3', moves: `${MORPHY} Be7 d3`, orientation: 'white' },
  terms: [
    { term: 'Transposition', meaning: 'Reaching the same position by a different move order.' },
    { term: 'Fix', meaning: 'To stop an enemy pawn from moving, so it becomes a fixed target.' },
    { term: 'Break', meaning: 'A pawn move that challenges the enemy pawns and opens lines, like ...d5.' }
  ]
})
