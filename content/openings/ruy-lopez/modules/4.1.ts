import { defineModule } from '../../../types'
import { CLOSED } from '../../../lines'

const PLAN_A = `${CLOSED} Na5 Bc2 c5 d4`
const PLAN_B = `${CLOSED} Bb7 d4 Re8 Nbd2 Bf8`

export default defineModule({
  id: '4.1',
  title: 'The Closed tabiya after 9.h3',
  minutes: 10,
  level: 2,
  goals: [
    'Take stock of the tabiya: which pieces are happy and which are not',
    "Know White's plan: d4, Bc2 and the long knight trip",
    "Know Black's two plans: free the c-pawn, or guard e5 with pieces"
  ],
  intro:
    "After 9.h3 both kings are safe and nothing is hanging. There is no forcing line to follow, so how do you choose a move? You make a plan. And every plan starts with the same question: which of my pieces are unhappy, and where do they want to go?",
  sections: [
    {
      kind: 'text',
      title: 'Taking stock',
      body:
        "**White's happy pieces.** The king is castled. The rook on e1 guards e4. The bishop on b3 aims at f7. The pawns on c3 and h3 have done their jobs: c3 prepares d4, and h3 keeps Black's bishop off g4.\n\n**White's unhappy pieces.** The b1-knight can't go to c3, because a pawn stands there. The c1-bishop is shut in by the d2-pawn. Those two pieces, plus the a1-rook, are still at home.\n\n**Black's unhappy pieces.** The c6-knight stands in front of the c7-pawn, so the pawn can't move up the board. The c8-bishop has no good diagonal, because g4 is covered by the h3-pawn. And the e5-pawn is the target White will keep pressing."
    },
    {
      kind: 'walkthrough',
      title: 'Plan A: move the knight, free the c-pawn',
      intro: "You're Black here. Watch how one knight move fixes Black's biggest problem.",
      moves: PLAN_A,
      start: 17,
      orientation: 'black',
      steps: {
        17: {
          title: 'The tabiya',
          text: "This is the starting point of the Closed Ruy. Black's c6-knight blocks the c7-pawn. If the knight steps away, the pawn can march to c5 and grab space.",
          arrows: [['c6', 'a5', 'blue'], ['c7', 'c5', 'green']]
        },
        18: {
          title: 'The knight steps aside',
          text: '9...Na5. The knight attacks the bishop on b3, so White must react. At the same time the road for the c-pawn is now open.',
          arrows: [['a5', 'b3', 'red'], ['c7', 'c5', 'green']]
        },
        19: {
          title: 'White keeps the bishop',
          text: "10.Bc2. White's light-squared bishop is a valuable piece, so White does not let ...Nxb3 trade it off. On c2 it stands behind e4 and guards it.",
          arrows: [['c2', 'e4', 'green']]
        },
        20: {
          title: 'The c-pawn moves up',
          text: '10...c5. Black takes space on the queenside and puts a guard on d4, the square White wants for a pawn.',
          arrows: [['c5', 'd4', 'yellow']]
        },
        21: {
          title: 'White builds the center',
          text: "11.d4. White plays the big center move anyway. Now look at e5: two White pieces attack it and only the d6-pawn guards it. Black's next move usually takes care of e5, and Module 4.3 shows how.",
          arrows: [['d4', 'e5', 'red'], ['f3', 'e5', 'red'], ['d6', 'e5', 'green']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Plan B: keep the knight, guard e5 with pieces',
      intro: "Now you're White. Black leaves the knight on c6 and builds a wall around e5 instead. Watch White's own plan unfold at the same time.",
      moves: PLAN_B,
      start: 17,
      orientation: 'white',
      steps: {
        17: {
          title: "White's to-do list",
          text: "White wants three things: the pawn on d4, the bishop on c2, and the b1-knight on the kingside. The knight's road is long: d2, then f1, then g3.",
          arrows: [['d2', 'd4', 'green'], ['b1', 'd2', 'blue'], ['d2', 'f1', 'blue']]
        },
        18: {
          title: 'A bishop for the long diagonal',
          text: '9...Bb7. The bishop finds a diagonal at last. Its own knight on c6 is in the way for now, but behind it the diagonal runs straight to e4.',
          arrows: [['b7', 'e4', 'blue']]
        },
        19: {
          title: 'The pawn reaches d4',
          text: '10.d4. White grabs the center. The e5-pawn is now attacked twice (d4 and f3) and guarded twice (c6 and d6).',
          arrows: [['d4', 'e5', 'red'], ['f3', 'e5', 'red']],
          marks: ['e5']
        },
        20: {
          title: 'The rook joins in',
          text: "10...Re8. The rook moves to the e-file and frees f8 for the bishop. It doesn't guard e5 yet, because the e7-bishop is in the way.",
          arrows: [['e7', 'f8', 'blue']]
        },
        21: {
          title: 'The knight sets off',
          text: '11.Nbd2. The first step of the long trip. On d2 the knight guards e4. Next it can go to f1 and then g3, where it eyes f5 and h5.',
          arrows: [['d2', 'f1', 'blue'], ['f1', 'g3', 'blue'], ['d2', 'e4', 'green']]
        },
        22: {
          title: 'The wall around e5',
          text: '11...Bf8. Now the rook sees e5 through the empty e7 and e6 squares. The e5-pawn has three guards: d6, c6 and e8. Black has held the center with pieces, not with pawn moves.',
          arrows: [['e8', 'e5', 'green'], ['c6', 'e5', 'green'], ['d6', 'e5', 'green']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'text',
      title: 'The two plans, side by side',
      body:
        "**White's plan is almost always the same.** Pawn to d4, bishop to c2, knight on the long trip to g3 or e3. Later White chooses: push d4-d5 to lock the center, or keep the tension. Then the play usually moves to the kingside, where White's pieces are pointing.\n\n**Black has to choose a plan on move 9.** Plan A moves the c6-knight so the c-pawn can advance: 9...Na5 (the Chigorin) or 9...Nb8 (the Breyer). Plan B keeps the knight and guards e5 with pieces: 9...Bb7 (the Zaitsev), often with ...Re8 and ...Bf8. The rest of this chapter takes these systems one at a time."
    },
    {
      kind: 'tip',
      title: 'Ask the piece question',
      body:
        'When a position has no tactics, find your worst piece and ask where it would be happiest. In the Closed Ruy that one question gives you most of the plans: the b1-knight wants g3, the c6-knight wants to get out of the way, the c8-bishop wants b7.'
    }
  ],
  takeaway:
    "In the Closed tabiya White plays d4, Bc2 and Nbd2-f1-g3. Black either moves the c6-knight to free the c-pawn (Na5, Nb8) or keeps it and guards e5 with pieces (Bb7, Re8, Bf8).",
  lookAhead:
    "Next: the most famous maneuver in the Ruy Lopez, the b1-knight's long trip from b1 to g3.",
  drills: [
    {
      title: "White's answer to 9...Na5",
      prompt: "You're White. Black just played 9...Na5, attacking your bishop. Save the bishop, then build the center when the c-pawn moves.",
      moves: PLAN_A,
      start: 18,
      side: 'white',
      hints: ['Keep the bishop on a diagonal where it still guards e4.', 'After ...c5, the pawn move you prepared with c3 is ready.'],
      success: '10.Bc2 keeps the bishop, and 11.d4 builds the big center. This is the most common answer to the Chigorin.'
    },
    {
      title: 'Plan B from memory',
      prompt: "You're Black in the tabiya. Play Plan B: bishop to the long diagonal, rook to the e-file, then the bishop back to f8.",
      moves: PLAN_B,
      start: 17,
      side: 'black',
      hints: ['First, give the c8-bishop a diagonal on the queenside.', 'The rook goes to e8, and the e7-bishop steps back to make room.'],
      success: '9...Bb7, 10...Re8 and 11...Bf8. The e5-pawn now has three guards.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "In the tabiya, why can't White's b1-knight just develop to c3?",
      moves: CLOSED,
      orientation: 'white',
      choices: [
        { text: 'A White pawn already stands on c3', correct: true, why: 'Right. 8.c3 took that square, so the knight has to find another road: d2, then f1, then g3.' },
        { text: '...b4 would chase it away', why: "That could happen later, but it isn't the reason. The knight simply can't move onto its own pawn." },
        { text: 'It would block the c1-bishop', why: 'A knight on c3 would not block the c1-bishop. The pawn on c3 is the real problem.' }
      ]
    },
    {
      type: 'concept',
      prompt: "Which Black piece stops the c7-pawn from advancing in the tabiya?",
      moves: CLOSED,
      orientation: 'black',
      choices: [
        { text: 'The knight on c6', correct: true, why: 'Yes. That is why 9...Na5 and 9...Nb8 both move this knight: the c-pawn is then free to go to c5.' },
        { text: 'The bishop on c8', why: 'The c8-bishop sits behind the pawn, not in front of it. It does not block the pawn.' },
        { text: 'The pawn on d6', why: 'The d6-pawn is next to the c-pawn, not in front of it. It does not block it.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black has just played 9...Na5. What is the standard reply?',
      moves: `${CLOSED} Na5`,
      orientation: 'white',
      choices: [
        { text: '10.Bc2', correct: true, why: 'The bishop escapes the knight and keeps guarding e4 from c2. White keeps its best bishop.' },
        { text: '10.d4', why: 'Then 10...Nxb3 trades off the Spanish bishop. White prefers to keep it.' },
        { text: '10.Ng5', why: "It doesn't solve the problem: 10...Nxb3 still trades off the bishop." }
      ]
    },
    {
      type: 'plan',
      prompt: "Which plan matches Black's 9th move 9...Bb7?",
      choices: [
        { text: 'Keep the c6-knight and guard e5 with pieces', correct: true, why: 'Right. 9...Bb7 is Plan B: the bishop eyes e4, then ...Re8 and ...Bf8 build a wall around e5.' },
        { text: 'Move the c6-knight to free the c-pawn', why: 'That is Plan A, with 9...Na5 or 9...Nb8. After 9...Bb7 the knight stays on c6.' },
        { text: 'Trade off the Spanish bishop at once', why: 'That idea belongs to 9...Be6, the Kholmov. 9...Bb7 does not attack the b3-bishop.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: "In the Closed Ruy, where does White's b1-knight usually go?",
      choices: [
        { text: 'd2, then f1, then g3 or e3', correct: true, why: 'Yes. The c3-pawn blocks the short road, so the knight takes the long way to the kingside.' },
        { text: 'c3, then d5', why: 'The c3-square is taken by a pawn in this line. The knight cannot go there.' },
        { text: 'It stays on b1 to guard the queenside', why: 'A knight on b1 also blocks the a1-rook. White wants it in the game.' }
      ]
    },
    {
      type: 'concept',
      prompt: "After 9...Bb7 10.d4 Re8 11.Nbd2 Bf8, how many Black pieces and pawns guard e5?",
      moves: PLAN_B,
      orientation: 'black',
      choices: [
        { text: 'Three: the d6-pawn, the c6-knight and the e8-rook', correct: true, why: 'Right. With the bishop gone from e7, the rook sees e5 through the e-file.' },
        { text: 'Two: the d6-pawn and the c6-knight', why: 'Look again at the e-file. The rook on e8 now guards e5 too.' },
        { text: 'One: only the d6-pawn', why: 'The knight on c6 and the rook on e8 also guard e5.' }
      ]
    }
  ],
  key: { name: 'Closed Ruy Lopez tabiya: 9.h3', moves: CLOSED, orientation: 'white' },
  terms: [
    { term: 'Tabiya', meaning: 'A well-known position that many games reach, where the real fight begins.' },
    { term: 'Plan', meaning: 'A goal for the next several moves, like getting a piece to a better square or pushing a pawn.' },
    { term: 'Maneuver', meaning: 'A series of quiet moves that brings one piece to a better square.' },
    { term: 'Spanish bishop', meaning: "White's light-squared bishop in the Ruy Lopez, which goes b5, a4, b3 and often c2." }
  ]
})
