import { defineModule } from '../../../types'
import { FOUR_PAWNS } from '../lines'

/** four-pawns-9nxe4-trap: 9...Nxe4? 10.Nxe4 Re8 11.Ng3, then 11...f5 12.O-O (engine-checked) */
const TRAP = `${FOUR_PAWNS} Nxe4 Nxe4 Re8 Ng3 f5 O-O`
/** The "pin" after 10...Re8 */
const FAKE = `${FOUR_PAWNS} Nxe4 Nxe4 Re8`
/** 11.Bd3? leaves the e-file and makes the pin real: 11...f5! 12.Ng5 fxe4 (engine-checked) */
const REAL = `${FAKE} Bd3 f5 Ng5 fxe4`

export default defineModule({
  id: '7.4',
  title: "When a pin isn't a pin: 9...Nxe4?",
  minutes: 10,
  level: 3,
  goals: [
    'See why 9...Nxe4? loses a piece for a pawn',
    'Tell a real pin from a fake one: look at what stands behind the piece',
    'Spot the moment a fake pin becomes real'
  ],
  intro:
    "Module 7.3 showed Black winning the e4-pawn with ...Nxe4 after ...Re8. So why not grab it at once, with 9...Nxe4? Black hopes that after 10.Nxe4 Re8 the knight is pinned on the e-file. This module checks that hope, and shows what a pin really needs.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The grab that fails',
      intro: 'Look at what stands behind the e4-knight on the e-file.',
      moves: TRAP,
      start: 17,
      orientation: 'white',
      steps: {
        17: {
          title: 'A tempting pawn',
          text: '9.cxd5. The Benoni structure from Module 7.2. The e4-pawn is defended only by the c3-knight. The rook has not reached e8 yet.',
          arrows: [['c3', 'e4', 'green'], ['f6', 'e4', 'red']]
        },
        18: {
          title: 'The grab',
          text: "9...Nxe4. Black takes the pawn. The idea: after 10.Nxe4, the rook comes to e8 and seems to pin the knight against the e2-bishop and the king.",
          arrows: [['f8', 'e8', 'blue']],
          ann: '?'
        },
        19: {
          title: 'White takes',
          text: "10.Nxe4. White's only good move: it takes the knight. Black has a pawn for a knight, for now.",
          marks: ['e4']
        },
        20: {
          title: 'It looks like a pin',
          text: '10...Re8. The rook attacks the knight. Behind it on the e-file stand the e2-bishop and the king. Is the knight stuck?',
          arrows: [['e8', 'e4', 'red']],
          marks: ['e2', 'e1']
        },
        21: {
          title: 'The knight walks away',
          text: "11.Ng3. The knight simply steps away. If 11...Rxe2+, White takes the rook: the e2-bishop is defended three times (by the queen, the king and the g3-knight). So the knight was never pinned.",
          arrows: [['e4', 'g3', 'green'], ['g3', 'e2', 'green']],
          ann: '!'
        },
        22: {
          title: 'No tactic left',
          text: '11...f5. Black gains some space, but there is no trick left. White has won a knight for a pawn.',
          marks: ['f5']
        },
        23: {
          title: 'The king leaves the file',
          text: '12.O-O. White castles, and the king is off the e-file for good. White is a piece up for a pawn, and the engine says White is winning.',
          arrows: [['e1', 'g1', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'What makes a pin real?',
      body:
        "A **pin** is when a piece can't move without exposing something more valuable behind it. To test a pin, look at what stands behind the pinned piece.\n\n**Behind it is the king.** Then the piece may not move at all, because a move that leaves your own king in check is against the rules. This is an **absolute pin**, and it is always real.\n\n**Behind it is another piece.** Then the piece can move, but the piece behind may be lost. This only hurts if the piece behind is worth more than the attacker, or is undefended.\n\nAfter 10...Re8, behind the e4-knight stands the e2-bishop. It is defended, and it is worth less than the rook. If the knight moves and Black plays ...Rxe2+, Black gives a rook (5 points) for a bishop (3). So the knight can walk away, and Black is just a piece down for a pawn."
    },
    {
      kind: 'walkthrough',
      title: 'How a fake pin becomes real: 11.Bd3?',
      intro: 'Now White defends the knight instead of moving it. Watch the e-file.',
      moves: REAL,
      start: 20,
      orientation: 'black',
      steps: {
        20: {
          title: 'The same position',
          text: '10...Re8. White is a piece for a pawn up. The only question is how to deal with the attack on e4.',
          arrows: [['e8', 'e4', 'red']]
        },
        21: {
          title: 'The bishop leaves the file',
          text: "11.Bd3. The bishop guards the knight, but it has left the e-file. Now only the knight stands between the rook and White's king. The knight is in an absolute pin: it may not move at all.",
          arrows: [['e8', 'e1', 'red'], ['d3', 'e4', 'green']],
          marks: ['e4'],
          ann: '?'
        },
        22: {
          title: 'Attack the pinned piece',
          text: '11...f5. The pawn attacks the knight, and the knight cannot run. Hit a pinned piece with something cheaper: here, a pawn.',
          arrows: [['f5', 'e4', 'red']],
          ann: '!'
        },
        23: {
          title: 'A second defender',
          text: "12.Ng5. The engine's choice. The knight adds a defender to e4. But defenders don't help when a pawn can take a knight.",
          arrows: [['g5', 'e4', 'green']]
        },
        24: {
          title: 'The piece comes back',
          text: '12...fxe4. Black wins the knight back, and the new e4-pawn also attacks the d3-bishop. Black is a pawn up, and the engine says Black is much better.',
          arrows: [['e4', 'd3', 'red']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Count first, grab second',
      body:
        "The difference between this module and Module 7.3 is one move. With the rook already on e8, ...Nxe4 wins a pawn because the rook takes back on e4 at once. Without it, Black needs a move to bring the rook over, and White uses that move to rescue the knight. Before you grab, count attackers and defenders, and check whether a pin is real."
    }
  ],
  takeaway:
    "9...Nxe4? 10.Nxe4 Re8 11.Ng3! loses a piece for a pawn: the e2-bishop behind the knight is defended, so the pin is fake. A pin to the king is always real. That is why 11.Bd3?, leaving the e-file, would let 11...f5! win the knight back.",
  lookAhead:
    "Module 7.5 looks at Black's other 9th moves, 9...Bg4 and 9...b5, and a check that really does win a piece back.",
  drills: [
    {
      title: 'Refute the grab',
      prompt: "You're White. Black has just played 9...Nxe4?. Take the knight, and when the rook arrives on e8, show that your knight is not pinned.",
      moves: `${FAKE} Ng3`,
      start: 18,
      side: 'white',
      hints: [
        'First take the knight on e4.',
        'Then move the knight away to a square where it also guards the e2-bishop and stays near your king.'
      ],
      success: '10.Nxe4 and 11.Ng3!. The e2-bishop is defended, so the knight was free to go. White is a piece up for a pawn.'
    },
    {
      title: 'The right order',
      prompt: "You're Black, in the Four Pawns main line. Don't grab e4 yet. Put the rook on the half-open file first, and take on e4 only if White castles without guarding it.",
      moves: `${FOUR_PAWNS} Re8 O-O Nxe4 Nxe4 Rxe4`,
      start: 17,
      side: 'black',
      hints: ['Which rook move adds a second attacker on e4?', 'After 10.O-O?, two attack and one defends: take with the knight, then with the rook.'],
      success: '9...Re8, 10...Nxe4! and 11...Rxe4. With the rook already on e8, the capture wins a clean pawn.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'Black has just played 9...Nxe4. What is wrong with it?',
      moves: `${FOUR_PAWNS} Nxe4`,
      orientation: 'black',
      choices: [
        { text: 'After 10.Nxe4 Re8 11.Ng3, the knight escapes and Black is a piece down for a pawn', correct: true, why: 'Right. The rook arrives one move too late, and the knight is not really pinned.' },
        { text: 'Nothing: after 10.Nxe4 Re8 the pin wins the knight back', why: 'The e2-bishop behind the knight is defended, so 11.Ng3 simply walks away. White is winning.' },
        { text: 'White must defend with 11.Bd3, and then White is fine', why: "11.Bd3? is the real mistake: it leaves the e-file, the pin becomes real, and 11...f5! wins the knight back." }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. The rook attacks the knight on e4. What is the best move?',
      moves: FAKE,
      orientation: 'white',
      choices: [
        { text: '11.Ng3', correct: true, why: 'Right. The knight steps away and guards e2. White keeps the extra piece.' },
        { text: '11.Bd3', why: "This makes the pin real: the bishop leaves the e-file, and 11...f5! wins the knight back. Black is much better." },
        { text: '11.O-O', why: 'Nothing defends the e4-knight, so 11...Rxe4 wins it back. Black is a pawn up and clearly better.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 10...Re8, why is the e4-knight not really pinned?',
      moves: FAKE,
      orientation: 'white',
      choices: [
        { text: "The e2-bishop behind it is defended, so ...Rxe2+ would cost Black a rook for a bishop", correct: true, why: 'Right. A pin only works if the piece behind is worth more than the attacker or is undefended.' },
        { text: 'Knights cannot be pinned', why: 'Any piece except the king can be pinned. This particular pin is fake because of what stands behind the knight.' },
        { text: "The rook can't reach the e-file", why: 'The rook is already on e8 and the file is clear down to e4. The question is what stands behind the knight.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 11.Bd3, what kind of pin is on the e4-knight?',
      moves: `${FAKE} Bd3`,
      orientation: 'black',
      choices: [
        { text: "An absolute pin: the king is behind it, so the knight may not move at all", correct: true, why: 'Right. With the bishop gone from e2, only the knight shields the king. 11...f5! attacks it.' },
        { text: 'A pin against the d3-bishop', why: 'The bishop is next to the knight, not behind it on the e-file. The king on e1 is behind it.' },
        { text: 'There is no pin: the knight can move freely', why: 'If the knight moved, the rook on e8 would give check to the king on e1. That is not allowed.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 9...Nxe4 10.Nxe4 Re8 11.Ng3, what is the material balance?',
      moves: `${FAKE} Ng3`,
      orientation: 'white',
      choices: [
        { text: 'White has a knight for a pawn', correct: true, why: 'Right. Black gave the knight for the e4-pawn and got nothing back.' },
        { text: 'Material is level', why: 'Count again: Black took one pawn, White took one knight.' },
        { text: 'Black is a pawn up', why: 'Black took the e4-pawn, but lost the knight that took it.' }
      ]
    },
    {
      type: 'order',
      prompt: 'In the Four Pawns main line, which order makes ...Nxe4 work for Black?',
      moves: FOUR_PAWNS,
      orientation: 'black',
      choices: [
        { text: '9...Re8 first, then ...Nxe4 if White leaves e4 with only one defender', correct: true, why: 'Right. With the rook already on e8, the rook can take back on e4 at once.' },
        { text: '9...Nxe4 first, then ...Re8', why: 'The rook arrives one move too late. 10.Nxe4 Re8 11.Ng3 and Black is a piece down.' },
        { text: 'Neither: ...Nxe4 never works in this structure', why: 'It works against 10.O-O?, as Module 7.3 showed: 10...Nxe4! wins a clean pawn.' }
      ]
    }
  ],
  key: { name: 'Four Pawns trap: 9...Nxe4? 10.Nxe4 Re8 11.Ng3', moves: `${FAKE} Ng3`, orientation: 'white' },
  terms: [
    { term: 'Pin', meaning: 'A piece cannot move without exposing a more valuable piece behind it.' },
    { term: 'Absolute pin', meaning: 'A pin against the king. The pinned piece may not move at all, because that would leave the king in check.' },
    { term: 'A piece up', meaning: 'Having an extra knight or bishop. "A piece for a pawn" means you gave a pawn and won a knight or bishop.' }
  ]
})
