import { defineModule } from '../../../types'
import { CLOSED, CLOSED7 } from '../../../lines'

const NOAH_LINE = `${CLOSED7} d6 d4 Nxd4 Nxd4 exd4 Qxd4 c5`
const NOAH = `${NOAH_LINE} Qd1 c4`
const ANTI = `${CLOSED7} d6 a4`

export default defineModule({
  id: '4.12',
  title: 'Move-order traps in the Closed',
  minutes: 10,
  level: 2,
  goals: [
    "Spring the Noah's Ark trap when White plays d4 too early",
    'Understand why c3 before d4 keeps White safe',
    'Recognise the Anti-Classical 8.a4'
  ],
  intro:
    "In the Closed Ruy, White plays c3 before d4 almost every time. Why not push d4 straight away and save a move? This module shows what goes wrong, and it is one of the oldest traps in the Ruy Lopez.",
  sections: [
    {
      kind: 'walkthrough',
      title: "The Noah's Ark trap",
      intro: "You're Black. White pushes d4 without c3, then takes back with the queen. Watch the b3-bishop.",
      moves: NOAH,
      start: 14,
      orientation: 'black',
      steps: {
        14: {
          title: 'Black has played ...d6',
          text: 'White usually plays 8.c3 here, to prepare d4. Look at the bishop on b3: its only retreat squares are blocked by its own pawns on a2 and c2.',
          marks: ['a2', 'c2']
        },
        15: {
          title: 'd4 without c3',
          text: '8.d4. The pawn has no pawn behind it, only the f3-knight and the queen. Black can start trading on d4.',
          arrows: [['c6', 'd4', 'red'], ['e5', 'd4', 'red']],
          ann: '?!'
        },
        16: {
          title: 'Trade the guard',
          text: '8...Nxd4. Black takes the pawn with the knight.',
          marks: ['d4']
        },
        17: {
          title: 'White takes back',
          text: '9.Nxd4. White recaptures with the knight.',
          marks: ['d4']
        },
        18: {
          title: 'And again',
          text: '9...exd4. Black takes the knight. Now White would like to take back with the queen.',
          arrows: [['d1', 'd4', 'blue']]
        },
        19: {
          title: 'The queen walks in',
          text: '10.Qxd4. Material is level, but the queen now stands where a Black pawn can hit it.',
          arrows: [['c7', 'c5', 'blue']],
          ann: '??'
        },
        20: {
          title: 'The queen is hit',
          text: '10...c5. The pawn attacks the queen, so the queen must move. Careful: 11.Qd5?? just loses the queen to ...Nxd5.',
          arrows: [['c5', 'd4', 'red']],
          ann: '!'
        },
        21: {
          title: 'The queen retreats',
          text: '11.Qd1. The queen is safe. But the c-pawn has one more step to take.',
          arrows: [['c5', 'c4', 'blue']]
        },
        22: {
          title: 'The bishop is trapped',
          text: "11...c4. The bishop is attacked and has no safe square: a4 and c4 are covered by the b5-pawn, and a2 and c2 hold White's own pawns. White will have to give it up for a pawn or two.",
          arrows: [['c4', 'b3', 'red'], ['b5', 'a4', 'green'], ['b5', 'c4', 'green']],
          marks: ['a2', 'c2']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why c3 comes first',
      body:
        "With **c3 played first**, two things change. If Black ever takes on d4, White takes back with the c-pawn, so the queen never has to stand on d4. And the c2-square is empty, so the b3-bishop has a safe retreat on c2.\n\nThat is the whole reason for the order 8.c3, 9.h3 and only then 10.d4. The same trap, with ...b5, ...Nxd4 and ...c5-c4, appears in other Ruy Lopez lines too, so it is worth knowing well."
    },
    {
      kind: 'history',
      title: 'Steiner–Capablanca, Budapest 1929',
      body:
        "Even masters have fallen for the Noah's Ark. In this game it came up in the Modern Steinitz, and Capablanca (Black) won. Chapter 8 shows that version."
    },
    {
      kind: 'walkthrough',
      title: 'The Anti-Classical: 8.a4',
      intro: "Now you're White. Against 7...d6, White has a third choice besides 8.c3 and 8.d4.",
      moves: ANTI,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'The Closed starts',
          text: '5...Be7. Black chooses the Closed Defense. White will guard e4 with the rook.',
          arrows: [['f1', 'e1', 'blue']]
        },
        11: {
          title: 'The rook guards e4',
          text: '6.Re1. Now Bxc6 followed by Nxe5 is a real threat, because e4 is guarded.',
          arrows: [['e1', 'e4', 'green'], ['f3', 'e5', 'red']]
        },
        12: {
          title: 'Black answers the threat',
          text: '6...b5. Black kicks the bishop away from c6.',
          arrows: [['b5', 'a4', 'red']]
        },
        13: {
          title: 'Bishop to b3',
          text: '7.Bb3. The bishop takes its usual post.',
          arrows: [['b3', 'f7', 'yellow']]
        },
        14: {
          title: 'A move-order choice',
          text: "7...d6. Black guards e5 before castling. White now chooses: 8.c3 (the main line), 8.d4?! (the trap you just saw), or 8.a4.",
          arrows: [['c2', 'c3', 'green'], ['a2', 'a4', 'blue']]
        },
        15: {
          title: 'Hit b5 at once',
          text: '8.a4. The pawn attacks b5 before White commits to c3. With c3 still free, the b1-knight could later come to c3 and hit b5 again.',
          arrows: [['a4', 'b5', 'red'], ['b1', 'c3', 'blue'], ['c3', 'b5', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Same move, different name',
      body:
        "8.a4 after 7...d6 is the Anti-Classical. The same 8.a4 after 7...O-O is called the Anti-Marshall, because there it is a way to avoid Black's ...d5 gambit. Chapter 5 covers that version."
    }
  ],
  takeaway:
    "Play c3 before d4. If White pushes 8.d4 and takes back 10.Qxd4??, then ...c5 and ...c4 trap the b3-bishop: the Noah's Ark trap. Against 7...d6, White can also hit b5 at once with the Anti-Classical 8.a4.",
  lookAhead:
    "Chapter 5: the Marshall Attack, where Black gives up a pawn on move 8 to attack White's king.",
  drills: [
    {
      title: "Spring the Noah's Ark",
      prompt: "You're Black. White just played 8.d4 without c3. Trade on d4, hit the queen when it arrives, then trap the bishop.",
      moves: NOAH,
      start: 15,
      side: 'black',
      hints: ['Start by taking on d4 with the knight, then with the pawn.', "When the queen lands on d4, a pawn move attacks it. After it retreats, push that pawn again."],
      success: "8...Nxd4, 9...exd4, 10...c5 and 11...c4. The b3-bishop is trapped."
    },
    {
      title: 'The safe move order',
      prompt: "You're White after 7...d6. Don't fall into the Noah's Ark. Prepare d4 the safe way.",
      moves: CLOSED,
      start: 14,
      side: 'white',
      hints: ['First give d4 a pawn behind it, and the bishop a retreat square.', 'Then stop ...Bg4 before you push d4.'],
      success: '8.c3 and 9.h3. Now d4 can come with a pawn behind it, and the bishop has c2.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'Black to move. White just took back with 10.Qxd4. How does Black win material?',
      moves: `${CLOSED7} d6 d4 Nxd4 Nxd4 exd4 Qxd4`,
      orientation: 'black',
      choices: [
        { text: '10...c5', correct: true, why: 'Right. The queen must move, and then ...c4 traps the b3-bishop.' },
        { text: '10...Nxe4', why: 'e4 is guarded by the queen and the e1-rook. Black just loses the knight for a pawn.' },
        { text: '10...Be6', why: "It develops, but it lets White off the hook. ...c5 wins material at once." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 11.Qd1 c4, why can\'t the b3-bishop escape?',
      moves: NOAH,
      orientation: 'black',
      choices: [
        { text: "The b5-pawn covers a4 and c4, and White's own pawns block a2 and c2", correct: true, why: 'Exactly. Every square the bishop could use is covered or blocked.' },
        { text: 'The bishop is pinned to the king', why: 'Nothing pins the bishop. It simply has no safe square.' },
        { text: 'It can escape to d5', why: 'The c4-pawn blocks the road to d5.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 10...c5, what is wrong with 11.Qd5?',
      moves: NOAH_LINE,
      orientation: 'white',
      choices: [
        { text: 'The f6-knight takes the queen', correct: true, why: 'Right. 11...Nxd5 wins the queen for a knight.' },
        { text: 'Nothing, it is the best square', why: 'd5 is guarded by the f6-knight. The queen would be lost.' },
        { text: 'It allows ...Bb7', why: 'The real problem is much bigger: 11...Nxd5 wins the queen.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Why does playing c3 before d4 keep White safe from this trap?',
      choices: [
        { text: 'White can take back on d4 with the c-pawn, and the bishop gets c2 as a retreat', correct: true, why: 'Yes. The queen never has to stand on d4, and the bishop is never short of squares.' },
        { text: 'c3 attacks the b5-pawn', why: 'A pawn on c3 attacks b4 and d4, not b5.' },
        { text: 'c3 stops ...Nxd4 for good', why: 'Black can still take on d4. The point is that White then recaptures with a pawn.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'White plays 8.a4 after 7...d6. What is this line called?',
      moves: ANTI,
      orientation: 'white',
      choices: [
        { text: 'The Anti-Classical', correct: true, why: 'Right. It hits b5 at once, before White commits to c3.' },
        { text: 'The Anti-Marshall', why: 'That is 8.a4 after 7...O-O. Here Black played 7...d6.' },
        { text: 'The Worrall Attack', why: 'The Worrall is 6.Qe2, two moves earlier.' }
      ]
    },
    {
      type: 'trap',
      prompt: "What is this trap called?",
      moves: NOAH_LINE,
      orientation: 'black',
      choices: [
        { text: "The Noah's Ark trap", correct: true, why: 'Yes. ...c5 and ...c4 trap the bishop on b3.' },
        { text: 'The Fishing Pole', why: 'The Fishing Pole is a Berlin trap with ...Ng4 and ...h5. This one traps a bishop.' },
        { text: 'The Tarrasch trap', why: 'The Tarrasch traps come from other defenses, the Old Steinitz and the Open. This one traps the b3-bishop.' }
      ]
    }
  ],
  key: { name: "Noah's Ark trap: 10...c5", moves: NOAH_LINE, orientation: 'black' },
  terms: [
    { term: 'Trapped piece', meaning: 'A piece that is attacked and has no safe square to go to.' },
    { term: 'Move order', meaning: 'The order you play your moves in. The same moves in a different order can allow a trap.' },
    { term: '?! and ??', meaning: '?! marks a dubious move, ?? a blunder that loses material or the game.' }
  ]
})
