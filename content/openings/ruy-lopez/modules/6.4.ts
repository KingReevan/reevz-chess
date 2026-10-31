import { defineModule } from '../../../types'
import { OPEN } from '../../../lines'

/** open-9c3-be7: 9.c3 Be7 10.Re1 O-O 11.Nd4 Nxe5 (Breslau) */
const BRESLAU = `${OPEN} c3 Be7 Re1 O-O Nd4 Nxe5`
/** Position after 11...Qd7?? */
const BAIT = `${OPEN} c3 Be7 Re1 O-O Nd4 Qd7`
/**
 * open-tarrasch-trap. The research line ends 13...dxe4 14.Bxe6+, but 14...Qxe6 refutes that.
 * The move that wins the queen is 14.Qxd7 (checked with chess.js and an engine).
 */
const TRAP = `${BAIT} Nxe6 fxe6 Rxe4 dxe4 Qxd7`

export default defineModule({
  id: '6.4',
  title: '9.c3 Be7 and the Tarrasch trap',
  minutes: 11,
  level: 3,
  goals: [
    'Learn the solid set-up 9...Be7 and the threat behind 11.Nd4',
    'Spot why 11...Qd7?? loses a piece to 12.Nxe6 and 13.Rxe4!',
    'Know the right answer: 11...Nxe5, the Breslau'
  ],
  intro:
    "9...Be7 is the calm way to play the Open: develop, castle, keep things solid. But after 10.Re1 O-O 11.Nd4, Black must find the right move, and the most natural one is a famous blunder. This module shows the trap from both sides.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The solid set-up and 11.Nd4',
      intro: "You're Black. Watch the c6-knight and the e5-pawn when White's knight jumps to d4.",
      moves: BRESLAU,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'The Open tabiya',
          text: 'Black has two homes for the f8-bishop: c5, the active square, or e7, the solid one.',
          arrows: [['f8', 'c5', 'blue'], ['f8', 'e7', 'blue']]
        },
        17: {
          title: "White's main move",
          text: '9.c3. The pawn covers d4 and gives the b3-bishop a retreat on c2.',
          arrows: [['c3', 'd4', 'green']]
        },
        18: {
          title: 'The solid choice',
          text: '9...Be7. The bishop is less active than on c5, but it is safe, and Black is one move from castling.',
          arrows: [['e8', 'g8', 'blue']]
        },
        19: {
          title: 'The rook joins in',
          text: '10.Re1. The rook attacks the e4-knight. The d5-pawn guards it, so there is no danger yet. But the rook now stares down the e-file.',
          arrows: [['e1', 'e4', 'red'], ['d5', 'e4', 'green']]
        },
        20: {
          title: 'Black castles',
          text: '10...O-O. The king is safe. Now White makes the key move.',
          arrows: [['f3', 'd4', 'blue']]
        },
        21: {
          title: 'The knight lands on d4',
          text: '11.Nd4. The knight hits c6 and e6. The c6-knight has no defender, so 12.Nxc6 is a threat. But the f3-knight has left, so nothing guards e5 any more.',
          arrows: [['d4', 'c6', 'red'], ['d4', 'e6', 'red']],
          marks: ['c6', 'e5']
        },
        22: {
          title: 'The Breslau',
          text: '11...Nxe5. The knight escapes from the attack and grabs the pawn White left behind. The play that follows gets very sharp, but Black has met the threat and won a pawn.',
          arrows: [['c6', 'e5', 'green']],
          ann: '!'
        }
      }
    },
    {
      kind: 'text',
      title: 'Why 11...Qd7 looks so good',
      body:
        "After 11.Nd4 there is a much more natural-looking move: **11...Qd7**. It guards the c6-knight. It guards the e6-bishop. It even adds a guard to d5. One move, three jobs.\n\nBut look at what guards the queen on d7: only the e6-bishop. And look at the d-file: the only thing between White's queen on d1 and Black's queen on d7 is White's own knight on d4, plus Black's d5-pawn. Those details are the whole trap."
    },
    {
      kind: 'walkthrough',
      title: 'The Tarrasch trap',
      intro: "Now you're White. Black has fallen for it. Find each move before you press Next.",
      moves: TRAP,
      start: 21,
      orientation: 'white',
      steps: {
        21: {
          title: 'Black must defend c6',
          text: 'After 11.Nd4 White threatens 12.Nxc6. Black needs an answer.',
          arrows: [['d4', 'c6', 'red']],
          marks: ['c6']
        },
        22: {
          title: 'The natural blunder',
          text: '11...Qd7. It guards c6 and e6 at once. But the queen itself is guarded only by the e6-bishop.',
          arrows: [['e6', 'd7', 'yellow']],
          marks: ['d7'],
          ann: '??'
        },
        23: {
          title: 'Remove the guard',
          text: '12.Nxe6. White takes the bishop that guards the queen. The knight also leaves d4, so the d-file opens up to d5.',
          arrows: [['d1', 'd5', 'blue']],
          ann: '!'
        },
        24: {
          title: 'Black takes back',
          text: '12...fxe6. A pawn on e6 does not guard d7. The queen is now loose, and the e4-knight has one guard: the d5-pawn.',
          marks: ['d7', 'e4']
        },
        25: {
          title: 'The rook takes the knight',
          text: "13.Rxe4. If 13...dxe4, the d-file opens and White's queen takes Black's queen. So the knight is simply lost. White is a piece up.",
          arrows: [['d1', 'd7', 'red'], ['d5', 'e4', 'blue']],
          ann: '!'
        },
        26: {
          title: 'Black takes anyway',
          text: '13...dxe4. The pawn takes the rook, and the d-file is open.',
          arrows: [['d1', 'd7', 'red']],
          ann: '??'
        },
        27: {
          title: 'The queen falls',
          text: '14.Qxd7. Nothing can take back on d7. White has given a rook and won a knight and the queen.',
          marks: ['d7']
        }
      }
    },
    {
      kind: 'warning',
      title: 'Take the queen, not the pawn',
      body:
        "After 13...dxe4, the move 14.Bxe6+ looks crushing: it gives check and attacks the queen. But 14...Qxe6 simply takes the bishop, and White has thrown everything away. Some sources give 14.Bxe6+, so watch out. The clean win is 14.Qxd7."
    },
    {
      kind: 'history',
      title: 'Two traps, one name',
      body:
        "Siegbert Tarrasch's name is on two traps in this course. This one is in the Open Defense. The other is in the Old Steinitz Defense, where Tarrasch beat Marco at Dresden in 1892 (Module 8.5)."
    }
  ],
  takeaway:
    "After 9.c3 Be7 10.Re1 O-O 11.Nd4, the natural 11...Qd7?? loses a piece to 12.Nxe6 fxe6 13.Rxe4!, because 13...dxe4 14.Qxd7 wins the queen. Black's right move is 11...Nxe5.",
  lookAhead:
    "Next: the active 9...Bc5, and how Black holds the e4-knight after 10.Nbd2 O-O 11.Bc2.",
  drills: [
    {
      title: 'Spring the Tarrasch trap',
      prompt: "You're White. Black has just played 11...Qd7??. Win material.",
      moves: TRAP,
      start: 22,
      side: 'white',
      hints: ["The queen on d7 has only one guard. Remove it.", "Then take the e4-knight. If the d5-pawn takes back, look down the d-file."],
      success: '12.Nxe6, 13.Rxe4 and 14.Qxd7. The Tarrasch trap, played correctly.'
    },
    {
      title: 'Dodge the trap',
      prompt: "You're Black in the Open tabiya. Play the solid set-up, castle, and find the right answer to 11.Nd4.",
      moves: BRESLAU,
      start: 16,
      side: 'black',
      hints: ['Put the bishop on its safe square, then castle.', 'After 11.Nd4 the c6-knight is attacked, and the e5-pawn has lost its guard.'],
      success: '9...Be7, 10...O-O and 11...Nxe5. The knight escapes with a pawn: the Breslau.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'White to move after 11...Qd7. What is the strongest move?',
      moves: BAIT,
      orientation: 'white',
      choices: [
        { text: '12.Nxe6', correct: true, why: 'Yes. It removes the only guard of the d7-queen and opens the d-file. 13.Rxe4 follows.' },
        { text: '12.Rxe4', why: 'Too early. After 12...dxe4 your d4-knight still blocks the d-file and the e6-bishop guards d7. You just lose the exchange.' },
        { text: '12.Nxc6', why: '12...Qxc6 and nothing has been won. The queen guards c6 now, so this is just a trade.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does 11.Nd4 demand an answer from Black?',
      moves: `${OPEN} c3 Be7 Re1 O-O Nd4`,
      orientation: 'black',
      choices: [
        { text: 'The c6-knight is attacked and has no defender', correct: true, why: 'Right. Without a reply, 12.Nxc6 wins a knight.' },
        { text: 'The knight threatens mate on f7', why: 'A knight on d4 does not reach f7. The target is c6.' },
        { text: 'It attacks the e4-knight', why: 'A knight on d4 attacks c6, e6, b5, f5 and others, but not e4.' }
      ]
    },
    {
      type: 'trap',
      prompt: "After 12.Nxe6 fxe6 13.Rxe4, why can't Black take the rook with 13...dxe4?",
      moves: `${BAIT} Nxe6 fxe6 Rxe4`,
      orientation: 'black',
      choices: [
        { text: "It opens the d-file, and 14.Qxd7 wins Black's queen", correct: true, why: 'Exactly. Nothing guards d7 once the e6-bishop is gone.' },
        { text: 'The pawn on d5 is pinned to the king', why: "It isn't pinned. Taking is legal, it just loses the queen." },
        { text: 'It allows 14.Bxe6+, winning the queen', why: '14.Bxe6+ is a mistake: 14...Qxe6 takes the bishop. The winning move is 14.Qxd7.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move after 11.Nd4. What is the best answer?',
      moves: `${OPEN} c3 Be7 Re1 O-O Nd4`,
      orientation: 'black',
      choices: [
        { text: '11...Nxe5', correct: true, why: 'The Breslau. The knight escapes and wins the e5-pawn, which lost its guard when the f3-knight moved.' },
        { text: '11...Qd7', why: 'The Tarrasch trap: 12.Nxe6 fxe6 13.Rxe4! and Black loses a piece.' },
        { text: '11...h6', why: 'It ignores the threat. 12.Nxc6 wins a knight, and the knight on c6 then hits the queen as well.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Black has just played 11...Qd7. Which famous trap can White spring?',
      moves: BAIT,
      orientation: 'white',
      choices: [
        { text: 'The Tarrasch trap', correct: true, why: 'Right. 12.Nxe6 fxe6 13.Rxe4! wins a piece.' },
        { text: "Noah's Ark trap", why: "Noah's Ark is when Black traps White's bishop on b3 with pawns. Here White wins a knight." },
        { text: 'The Fishing Pole', why: 'The Fishing Pole is a Berlin trick with ...Ng4 and ...h5. This is the Open Defense.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Tarrasch trap, why must White play 12.Nxe6 before 13.Rxe4?',
      choices: [
        { text: 'It removes the bishop that guards d7 and clears the d-file', correct: true, why: 'Yes. Two jobs in one move. Only then does ...dxe4 lose the queen.' },
        { text: 'It wins a pawn', why: "It's a knight-for-bishop trade. The point is the queen on d7." },
        { text: "It stops Black from castling", why: 'Black has already castled. The point is the d-file and the queen on d7.' }
      ]
    }
  ],
  key: { name: 'Open Defense, Tarrasch trap: 11...Qd7??', moves: BAIT, orientation: 'white' },
  terms: [
    { term: 'Removing the defender', meaning: 'Capturing or chasing away the piece that guards something, so it can be won.' },
    { term: 'Loose piece', meaning: 'A piece with no defender. Loose pieces are easy targets for tactics.' },
    { term: 'Breslau Variation', meaning: 'The Open Defense line 9.c3 Be7 10.Re1 O-O 11.Nd4 Nxe5.' }
  ]
})
