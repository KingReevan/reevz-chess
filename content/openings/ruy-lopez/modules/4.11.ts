import { defineModule } from '../../../types'
import { MORPHY } from '../../../lines'

const WORRALL = `${MORPHY} Be7 Qe2 b5 Bb3 O-O c3 d5 d3`
const CENTRE = `${MORPHY} Be7 d4 exd4 e5 Ne4 Nxd4`
const DERLD = `${MORPHY} Be7 Bxc6 dxc6 d3 Nd7 Nbd2 O-O Nc4 f6 Nh4 Nc5`

export default defineModule({
  id: '4.11',
  title: 'Other 6th moves: 6.Qe2, 6.d4 and 6.Bxc6',
  minutes: 12,
  level: 2,
  goals: [
    'Worrall 6.Qe2: the queen guards e4 and frees d1 for a rook',
    'Centre Attack 6.d4: open the center before Black is ready',
    'Delayed Exchange 6.Bxc6: an Exchange Ruy against ...Be7 and ...Nf6'
  ],
  intro:
    "6.Re1 is the classical way to guard e4, and 6.d3 is the modern one. White has three more ideas on move 6, each with its own point. You don't need deep theory for them, just the one idea behind each, so you are never surprised.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Worrall Attack: 6.Qe2',
      intro: "You're White. The queen, not the rook, takes care of e4.",
      moves: WORRALL,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'Who guards e4?',
          text: "Black's f6-knight attacks e4. White usually guards it with 6.Re1. Here the queen does the job.",
          arrows: [['f6', 'e4', 'red']]
        },
        11: {
          title: 'The queen steps up',
          text: '6.Qe2. The queen guards e4, and d1 is now free for a rook. A rook on d1 would back up a later d4.',
          arrows: [['e2', 'e4', 'green'], ['f1', 'd1', 'blue']]
        },
        12: {
          title: 'The usual chase',
          text: '6...b5. Black kicks the bishop, as in every Closed Ruy.',
          arrows: [['b5', 'a4', 'red']]
        },
        13: {
          title: 'Bishop to b3',
          text: '7.Bb3. The bishop aims at f7.',
          arrows: [['b3', 'f7', 'yellow']]
        },
        14: {
          title: 'Black castles',
          text: '7...O-O. Black gets the king safe and keeps ...d5 in mind.',
          arrows: [['d7', 'd5', 'blue']]
        },
        15: {
          title: 'Preparing d4',
          text: '8.c3. The usual plan: c3 now, d4 later.',
          arrows: [['d2', 'd4', 'blue']]
        },
        16: {
          title: 'A Marshall-style strike',
          text: '8...d5. Black hits e4 at once, as in the Marshall Attack.',
          arrows: [['d5', 'e4', 'red']]
        },
        17: {
          title: 'Keep it closed',
          text: '9.d3. White guards e4 with a pawn and does not open the center. The sharp Marshall-type play never starts.',
          arrows: [['d3', 'e4', 'green'], ['e2', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'history',
      title: 'Short–Karpov, Candidates match 1992',
      body:
        "The Worrall is a rare line, yet Nigel Short used it as a surprise weapon against Anatoly Karpov in their 1992 Candidates match and won both of his games with it. Black can also answer quietly with 8...d6 instead of 8...d5."
    },
    {
      kind: 'walkthrough',
      title: 'Centre Attack: 6.d4',
      intro: "White opens the center at once, before Black has played ...b5 or ...d6.",
      moves: CENTRE,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'Strike now',
          text: "White hasn't guarded e4 yet. Instead of defending, White attacks the center.",
          arrows: [['d2', 'd4', 'green']]
        },
        11: {
          title: 'The center push',
          text: '6.d4. The pawn hits e5. Black has to deal with it.',
          arrows: [['d4', 'e5', 'red']]
        },
        12: {
          title: 'Black takes',
          text: '6...exd4. Black takes the pawn.',
          marks: ['d4']
        },
        13: {
          title: 'Kick the knight',
          text: '7.e5. The pawn attacks the f6-knight and gains space.',
          arrows: [['e5', 'f6', 'red']]
        },
        14: {
          title: 'A central knight',
          text: '7...Ne4. The knight jumps to the center instead of retreating. No White piece attacks it there.',
          marks: ['e4']
        },
        15: {
          title: 'The pawn comes back',
          text: '8.Nxd4. Material is level again. Black often castles next, and the e4-knight may go to c5 to hit the a4-bishop.',
          arrows: [['e4', 'c5', 'blue'], ['c5', 'a4', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'The Basque Gambit',
      body:
        'Instead of 8.Nxd4, White can play 8.c3, offering a pawn to open lines faster. This is called the Basque Gambit. It is rare, but worth knowing by name.'
    },
    {
      kind: 'walkthrough',
      title: 'Delayed Exchange: 6.Bxc6',
      intro: "Now you're Black. White plays the Exchange idea from Chapter 3, two moves later than usual.",
      moves: DERLD,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The late exchange',
          text: "6.Bxc6. White gives up the bishop for the knight. Black has already played ...Nf6 and ...Be7, and White hopes those pieces are less useful in this structure.",
          arrows: [['a4', 'c6', 'red']]
        },
        12: {
          title: 'Take back toward the center',
          text: '6...dxc6. As in the Exchange Variation, Black opens lines for the queen and the c8-bishop. Right now the e4-pawn has no guard.',
          arrows: [['f6', 'e4', 'red'], ['c8', 'g4', 'blue']]
        },
        13: {
          title: 'e4 guarded, e5 threatened',
          text: '7.d3. White guards e4. Now Nxe5 is a real threat, because ...Qd4 can no longer win the e4-pawn back.',
          arrows: [['f3', 'e5', 'red'], ['d3', 'e4', 'green']],
          marks: ['e5']
        },
        14: {
          title: 'The knight retreats with a purpose',
          text: '7...Nd7. The knight guards e5 and heads for c5.',
          arrows: [['d7', 'e5', 'green'], ['d7', 'c5', 'blue']]
        },
        15: {
          title: "White's knight sets off",
          text: '8.Nbd2. White\'s plan: the knight goes to c4 to press e5.',
          arrows: [['d2', 'c4', 'blue']]
        },
        16: {
          title: 'Castle',
          text: '8...O-O. Black gets the king safe.',
          arrows: [['e8', 'g8', 'blue']]
        },
        17: {
          title: 'Two attackers on e5',
          text: '9.Nc4. Now e5 is attacked by both White knights and guarded only by the d7-knight.',
          arrows: [['c4', 'e5', 'red'], ['f3', 'e5', 'red'], ['d7', 'e5', 'green']],
          marks: ['e5']
        },
        18: {
          title: 'A pawn guard for e5',
          text: '9...f6. The pawn guards e5, so Black no longer needs the knight for that job.',
          arrows: [['f6', 'e5', 'green']]
        },
        19: {
          title: 'Heading for f5',
          text: '10.Nh4. The knight is on its way to f5, a strong square in front of Black\'s king.',
          arrows: [['h4', 'f5', 'blue']],
          marks: ['f5']
        },
        20: {
          title: 'Knight on c5',
          text: '10...Nc5. The knight reaches c5, guarded by the e7-bishop. From there it presses d3 and e4.',
          arrows: [['c5', 'e4', 'yellow'], ['c5', 'd3', 'yellow']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'A pin that does not help',
      body:
        "After 6.Bxc6 dxc6 7.d3, the natural 7...Bg4?! pins the f3-knight, but nothing guards e5. After 8.h3 Bh5 9.g4 Bg6, the pin is gone and 10.Nxe5 wins a pawn. Guard e5 first with 7...Nd7."
    }
  ],
  takeaway:
    "6.Qe2 (Worrall) guards e4 with the queen and answers 8...d5 with 9.d3. 6.d4 (Centre Attack) opens the center at once. 6.Bxc6 (Delayed Exchange) leads to Nbd2-c4 and Nh4-f5 for White against ...Nd7-c5 and ...f6 for Black.",
  lookAhead:
    "Last in this chapter: the move-order traps of the Closed Ruy, including the Noah's Ark trap.",
  drills: [
    {
      title: 'The Worrall set-up',
      prompt: "You're White after 5...Be7. Guard e4 with the queen, then answer Black's ...d5 strike calmly.",
      moves: WORRALL,
      start: 10,
      side: 'white',
      hints: ['The queen can guard e4 from e2.', 'After ...b5 the bishop goes to b3, then c3, and against ...d5 a pawn guards e4.'],
      success: '6.Qe2, 7.Bb3, 8.c3 and 9.d3. The center stays closed and the Marshall-type play never starts.'
    },
    {
      title: 'Answer the Delayed Exchange',
      prompt: "You're Black. White just played 6.Bxc6. Take back, guard e5 with the knight, castle, add a pawn guard, then bring the knight to c5.",
      moves: DERLD,
      start: 11,
      side: 'black',
      hints: ['Take back toward the center with the d-pawn.', 'Then ...Nd7, ...O-O, ...f6 and ...Nc5.'],
      success: '6...dxc6, 7...Nd7, 8...O-O, 9...f6 and 10...Nc5. A solid set-up with an active knight.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What two jobs does 6.Qe2 do?',
      moves: `${MORPHY} Be7 Qe2`,
      orientation: 'white',
      choices: [
        { text: 'It guards e4 and frees d1 for a rook', correct: true, why: 'Right. The rook can come to d1 later to support d4.' },
        { text: 'It attacks a6 and prepares Qxa6', why: 'The queen on e2 does reach a6, but the a6-pawn is guarded by the b7-pawn. The point is e4 and d1.' },
        { text: 'It prepares Qe2-c4 to attack f7', why: 'That is not the idea. The queen stays on e2 to guard e4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Worrall, why does White answer 8...d5 with 9.d3?',
      moves: `${MORPHY} Be7 Qe2 b5 Bb3 O-O c3 d5`,
      orientation: 'white',
      choices: [
        { text: 'It guards e4 and keeps the center closed, avoiding Marshall-type play', correct: true, why: 'Yes. White refuses to open the position and keeps a calm game.' },
        { text: 'It wins the d5-pawn', why: '9.d3 does not attack d5. It guards e4.' },
        { text: 'It traps the f6-knight', why: 'The f6-knight has plenty of squares. 9.d3 is about e4.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Centre Attack: after 6.d4 exd4 7.e5, where does the f6-knight go?',
      moves: `${MORPHY} Be7 d4 exd4 e5`,
      orientation: 'black',
      choices: [
        { text: '7...Ne4', correct: true, why: 'Right. The knight jumps to the center, where no White piece attacks it.' },
        { text: '7...Ng8', why: 'Going home wastes time. The central e4-square is free.' },
        { text: '7...Nh5', why: 'On the edge the knight does little. The central e4-square is free, so use it.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Delayed Exchange: after 6.Bxc6 dxc6 7.d3, why does Black play 7...Nd7?',
      moves: `${MORPHY} Be7 Bxc6 dxc6 d3`,
      orientation: 'black',
      choices: [
        { text: 'It guards e5 against Nxe5 and heads for c5', correct: true, why: 'Yes. Once e4 is guarded by d3, Nxe5 is a real threat, and the knight on d7 stops it.' },
        { text: 'It frees the f-pawn to attack at once with ...f5', why: '...f6 does come later, to guard e5. The knight move is mainly about e5 and c5.' },
        { text: 'It prepares ...Bg4', why: 'The c8-bishop could already go to g4. The knight move guards e5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'White plays 6.Bxc6 after 5...Be7. What is this line called?',
      moves: `${MORPHY} Be7 Bxc6`,
      orientation: 'white',
      choices: [
        { text: 'The Delayed Exchange Variation', correct: true, why: 'Right. It is also called the Steenwijk Variation.' },
        { text: 'The Worrall Attack', why: 'The Worrall is 6.Qe2.' },
        { text: 'The Centre Attack', why: 'The Centre Attack is 6.d4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Who used the Worrall Attack to win two games against Karpov in their 1992 Candidates match?',
      choices: [
        { text: 'Nigel Short', correct: true, why: 'Yes. Short won both of his Worrall games against Karpov in that match.' },
        { text: 'Garry Kasparov', why: "Kasparov played Karpov in World Championship matches. The 1992 Candidates match was Short's." },
        { text: 'Bobby Fischer', why: "Fischer's famous Ruy Lopez win against a world champion was against Spassky in 1972, with the Breyer." }
      ]
    }
  ],
  key: { name: 'Worrall Attack: 6.Qe2', moves: `${MORPHY} Be7 Qe2`, orientation: 'white' },
  terms: [
    { term: 'Gambit', meaning: 'Offering material, usually a pawn, to gain time or open lines for an attack.' },
    { term: 'Surprise weapon', meaning: 'A rare line chosen to take a well-prepared opponent out of their preparation.' },
    { term: 'Doubled pawns', meaning: "Two pawns of the same color on one file, like Black's c6 and c7 after 6...dxc6." }
  ]
})
