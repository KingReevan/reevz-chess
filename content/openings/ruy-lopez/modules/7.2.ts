import { defineModule } from '../../../types'
import { BERLIN } from '../../../lines'

/** berlin-endgame prefix, up to 7.dxe5 */
const D4 = `${BERLIN} O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5`
/** berlin-5re1 prefix, up to 6.Nxe5 */
const RE1 = `${BERLIN} O-O Nxe4 Re1 Nd6 Nxe5`

export default defineModule({
  id: '7.2',
  title: '4.O-O Nxe4: taking the pawn',
  minutes: 10,
  level: 2,
  goals: [
    'Take on e4 and know why the pawn will come back',
    'Retreat the knight to d6, hitting the b5-bishop',
    'Follow how White regains the pawn after 5.d4 and 5.Re1'
  ],
  intro:
    "White castled and left e4 hanging, so Black takes it. But the pawn doesn't stay won for long. How does White get it back, and where should Black's knight go when it's chased? This module walks through White's two main answers, 5.d4 and 5.Re1.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main road: 5.d4',
      intro: "You're Black. Count the material after every capture.",
      moves: D4,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'The pawn is offered',
          text: '4.O-O. White castles and leaves e4 unprotected. Black accepts.',
          arrows: [['f6', 'e4', 'red']]
        },
        8: {
          title: 'Black takes',
          text: "4...Nxe4. Black is a pawn up, and the knight stands in the center. White's job now is to win the pawn back.",
          marks: ['e4']
        },
        9: {
          title: 'White opens the center',
          text: '5.d4. The d-pawn hits e5, and the rook is ready to come to e1 against the knight.',
          arrows: [['d4', 'e5', 'red'], ['f1', 'e1', 'blue']]
        },
        10: {
          title: 'Retreat with a threat',
          text: '5...Nd6. The knight steps back and attacks the b5-bishop. On d6 it is also safe from a rook on e1.',
          arrows: [['d6', 'b5', 'red']]
        },
        11: {
          title: 'Remove the defender',
          text: "6.Bxc6. Rather than retreat, the bishop takes the knight that guards e5.",
          arrows: [['d4', 'e5', 'red']],
          marks: ['e5']
        },
        12: {
          title: 'Toward the center',
          text: '6...dxc6. Black takes back with the d-pawn. That opens the d-file for the queen and a diagonal for the c8-bishop.',
          arrows: [['d8', 'd1', 'blue'], ['c8', 'h3', 'blue']]
        },
        13: {
          title: 'Material is level',
          text: '7.dxe5. The pawn is back. The e5-pawn also attacks the knight on d6, so Black has to move it. Module 7.3 continues from here.',
          arrows: [['e5', 'd6', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Why take a pawn you will give back?',
      body:
        "Taking on e4 isn't greed. It's practical. White has to spend several moves winning the pawn back, and those forcing moves lead to simple positions where Black is very solid. In the 5.d4 line the queens come off by move 8.\n\nThe retreat 5...Nd6 is the key move in both lines. It hits the b5-bishop, so White has to deal with that first. Some databases call 4...Nxe4 the \"Rio Gambit Accepted\"."
    },
    {
      kind: 'walkthrough',
      title: 'The direct try: 5.Re1',
      intro: 'White attacks the knight at once and wins the pawn back with the knight.',
      moves: RE1,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'Same start',
          text: '4.O-O. White castles, leaving e4 hanging again.',
          arrows: [['f6', 'e4', 'red']]
        },
        8: {
          title: 'Black takes',
          text: '4...Nxe4. Black is a pawn up for now.',
          marks: ['e4']
        },
        9: {
          title: 'Rook on the e-file',
          text: '5.Re1. The rook attacks the knight right away.',
          arrows: [['e1', 'e4', 'red']]
        },
        10: {
          title: 'The same retreat',
          text: '5...Nd6. Again the knight goes to d6 and attacks the b5-bishop.',
          arrows: [['d6', 'b5', 'red']]
        },
        11: {
          title: 'Pawn back, and a warning',
          text: "6.Nxe5. Material is level. Look at the e-file: White's knight stands between the e1-rook and Black's king. If it moves, it gives a discovered check.",
          arrows: [['e1', 'e8', 'red']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'warning',
      title: "Don't grab the bishop after 6.Nxe5",
      body:
        "In the 5.Re1 line, 6...Nxb5?? loses the queen. 7.Nxc6+ is a discovered check from the rook. Black has to block with ...Be7 or ...Qe7, and then the c6-knight takes on d8 or e7. Black's safe move is 6...Be7, which blocks the e-file. Module 7.6 covers this line."
    }
  ],
  takeaway:
    '4...Nxe4 wins a pawn only for a moment. Retreat the knight to d6, hitting the bishop. After 5.d4 White regains the pawn with Bxc6 and dxe5; after 5.Re1, with Nxe5.',
  lookAhead:
    'Next: the 5.d4 line all the way to the famous Berlin endgame, where the queens come off on move 8.',
  drills: [
    {
      title: 'The 5.d4 line',
      prompt: "You're Black. Take the e4-pawn, retreat the knight with a threat, and recapture toward the center.",
      moves: `${BERLIN} O-O Nxe4 d4 Nd6 Bxc6 dxc6`,
      start: 7,
      side: 'black',
      hints: [
        'The e4-pawn is unprotected. After 5.d4, find a knight retreat that attacks the bishop.',
        'When White takes on c6, recapture with the pawn that opens lines for your queen and bishop.'
      ],
      success: '4...Nxe4, 5...Nd6 and 6...dxc6. After 7.dxe5 the material is level, and the road to the Berlin endgame is open.'
    },
    {
      title: 'Block the e-file',
      prompt: "You're Black. Take on e4, meet 5.Re1 with the usual retreat, and after 6.Nxe5 make sure there is no discovered check.",
      moves: `${RE1} Be7`,
      start: 7,
      side: 'black',
      hints: [
        'After 5.Re1, the knight goes to the same square as against 5.d4.',
        'After 6.Nxe5, put a piece between the rook and your king. Develop it at the same time.'
      ],
      success: '4...Nxe4, 5...Nd6 and 6...Be7. The bishop blocks the e-file, so a knight move by White is no longer check.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black to move. White has played 5.d4. Where should the knight go?',
      moves: `${BERLIN} O-O Nxe4 d4`,
      orientation: 'black',
      choices: [
        { text: '5...Nd6', correct: true, why: 'Right. The knight attacks the b5-bishop and is safe from Re1.' },
        { text: '5...exd4', why: "This opens the e-file with your king still on e8. After 6.Re1 the knight on e4 is pinned." },
        { text: '5...Nf6', why: 'After 6.dxe5 the pawn is back and the knight is attacked again. You lose time.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is d6 such a good square for the retreating knight?',
      choices: [
        { text: 'It attacks the b5-bishop and is safe from a rook on e1', correct: true, why: 'Exactly. White has to deal with the attacked bishop before doing anything else.' },
        { text: 'It defends the e5-pawn', why: 'A knight on d6 does not reach e5. It covers b5, c4, e4, f5, f7, e8, c8 and b7.' },
        { text: 'It prepares ...Nxf2', why: "A knight on d6 can't reach f2. Its job is to hit the bishop." }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. Which move loses the queen?',
      moves: RE1,
      orientation: 'black',
      choices: [
        { text: '6...Nxb5', correct: true, why: "Right, that's the blunder. 7.Nxc6+ is a discovered check from the rook, and then the knight takes your queen." },
        { text: '6...Be7', why: 'This is the safe move. The bishop blocks the e-file, so there is no discovered check.' },
        { text: '6...Nxe5', why: 'This is fine. After 7.Rxe5+ you block with ...Be7 and the position is level.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 7.dxe5, what is the material balance?',
      moves: D4,
      orientation: 'black',
      choices: [
        { text: 'Level', correct: true, why: "Yes. Black won e4, White won e5, and the bishop and knight were traded on c6." },
        { text: 'Black is a pawn up', why: 'White just took on e5. The extra pawn is gone.' },
        { text: 'White is a pawn up', why: 'Count again: each side has won one pawn, and a bishop was traded for a knight.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move. White has played 5.Re1. Where should the knight go?',
      moves: `${BERLIN} O-O Nxe4 Re1`,
      orientation: 'black',
      choices: [
        { text: '5...Nd6', correct: true, why: 'Right. Just as against 5.d4, the knight attacks the b5-bishop from d6.' },
        { text: '5...Ng5', why: "After 6.Nxg5 Qxg5 7.d4, the d-pawn hits e5 and uncovers the c1-bishop's attack on your queen." },
        { text: '5...Nf6', why: 'Playable, but it does not attack the bishop. 5...Nd6 is more active.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 5.d4 line, why does White play 6.Bxc6?',
      moves: `${BERLIN} O-O Nxe4 d4 Nd6`,
      orientation: 'black',
      choices: [
        { text: 'It removes the defender of e5, so dxe5 wins the pawn back', correct: true, why: 'Exactly. The c6-knight was guarding e5. Without it, 7.dxe5 regains the pawn.' },
        { text: 'It wins a piece', why: "Black takes back on c6, so it's just a bishop for a knight." },
        { text: 'It stops Black from castling', why: "Black's castling rights are untouched by Bxc6. The point is the e5-pawn." }
      ]
    }
  ],
  key: { name: 'Berlin: 4.O-O Nxe4 5.d4 Nd6', moves: `${BERLIN} O-O Nxe4 d4 Nd6`, orientation: 'black' },
  terms: [
    { term: 'Discovered check', meaning: 'Moving one piece out of the way so that another piece behind it gives check.' },
    { term: 'Remove the defender', meaning: 'Capturing or driving away the piece that protects something, so you can win it.' },
    { term: 'Material', meaning: 'The pieces and pawns each side has. "Material is level" means neither side is ahead.' }
  ]
})
