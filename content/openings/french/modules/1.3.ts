import { defineModule } from '../../../types'
import { FRENCH, CLASSICAL } from '../lines'

/** adv-3c5: 3.e5 c5 */
const ADV_3C5 = `${FRENCH} e5 c5`
/** cla-4e5: 3.Nc3 Nf6 4.e5 Nfd7 */
const CLA_4E5 = `${CLASSICAL} e5 Nfd7`

export default defineModule({
  id: '1.3',
  title: 'The pawn chain: d4–e5 against d5–e6',
  minutes: 9,
  level: 1,
  goals: [
    'Recognize the two pawn chains that appear after White pushes e4–e5',
    'Name the base and the head of each chain',
    'Know which side has space where, and which pawn Black attacks first'
  ],
  intro:
    "In many French lines White pushes the e-pawn to e5. Then the center locks: White's pawns on d4 and e5 face Black's pawns on d5 and e6. This structure is called a pawn chain, and it decides the plans for both sides. This module teaches you to read it.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The chains appear',
      intro: 'The Advance Variation. Watch the four center pawns.',
      moves: ADV_3C5,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'e4 is attacked',
          text: '2...d5. The e4-pawn is attacked. This time White will neither defend it nor trade it.',
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'Two pawn chains',
          text: "3.e5. White pushes the e-pawn one square, next to d5. Now White's pawns on d4 and e5, and Black's pawns on d5 and e6, stand on two diagonal lines that block each other. Each line is a pawn chain.",
          marks: ['d4', 'e5', 'd5', 'e6']
        },
        6: {
          title: 'Hit the base',
          text: "3...c5. Black attacks d4, the back pawn of White's chain. The d4-pawn holds up the e5-pawn, so if d4 falls, e5 loses its support. Module 1.4 is all about this move.",
          arrows: [['c5', 'd4', 'red'], ['d4', 'e5', 'green']],
          marks: ['d4']
        }
      }
    },
    {
      kind: 'text',
      title: 'Base and head',
      body:
        "Every pawn chain has a back pawn and a front pawn. **The base** is the back pawn: d4 for White, e6 for Black. It holds the whole chain up. **The head** is the front pawn: e5 for White, d5 for Black.\n\nA chain points at one side of the board. **White's chain points at Black's kingside.** The e5-pawn takes the f6-square away from Black's knight, and White has more room there to attack Black's king. **Black's chain points at White's queenside**, so Black plays there and in the center.\n\nAron Nimzowitsch, one of the great French players, gave the rule that guides the whole opening: **attack a chain at its base.** Black's main break is ...c5 against d4. The second is ...f6 against the head, e5 (Module 1.6). White's own break is f4–f5 against e6, the base of Black's chain."
    },
    {
      kind: 'walkthrough',
      title: 'The same chains in the Classical',
      intro: 'The chains are not only an Advance Variation thing. Here White defends e4 first and pushes a move later.',
      moves: CLA_4E5,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The same start',
          text: '2...d5. This time White defends e4 with a knight.',
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'The knight defends',
          text: '3.Nc3. The knight guards the e4-pawn.',
          arrows: [['c3', 'e4', 'green']]
        },
        6: {
          title: 'A second attacker',
          text: '3...Nf6. The knight attacks e4 too. Now e4 is attacked twice and defended once. This is the Classical Variation (Chapter 6).',
          arrows: [['f6', 'e4', 'red'], ['d5', 'e4', 'red']]
        },
        7: {
          title: 'Push with a gain of time',
          text: '4.e5. White pushes, and the pawn attacks the f6-knight. The knight must move.',
          arrows: [['e5', 'f6', 'red']]
        },
        8: {
          title: 'The same chains',
          text: "4...Nfd7. The knight steps back to d7, from where it eyes c5 and e5. The pawns now stand exactly as in the Advance: d4 and e5 against d5 and e6. Black's plan is the same too: ...c5 against the base.",
          marks: ['d4', 'e5', 'd5', 'e6'],
          arrows: [['c7', 'c5', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Learn the chain once, use it everywhere',
      body:
        'The same chain appears in the Advance (3.e5), the Classical (3.Nc3 Nf6 4.e5), the closed Tarrasch (3.Nd2 Nf6 4.e5) and the Winawer (3.Nc3 Bb4 4.e5). The details change, but the plans stay the same: Black hits d4 with ...c5 and e5 with ...f6, and White guards d4 and e5 and looks for play on the kingside.'
    }
  ],
  takeaway:
    "After e4–e5, the pawns form two chains: White's d4–e5 and Black's e6–d5. The base is the back pawn (d4, e6) and the head is the front pawn (e5, d5). White has space on the kingside, Black plays on the queenside, and Black attacks the base with ...c5.",
  lookAhead:
    "Module 1.4 looks closely at Black's main break, ...c5, and how both sides add pieces to the fight for d4.",
  drills: [
    {
      title: 'Build the chain and guard its base',
      prompt: "You're White. Push your e-pawn one square to build the chain. When Black attacks the base, support it with a pawn.",
      moves: `${ADV_3C5} c3`,
      start: 4,
      side: 'white',
      hints: ['First push the e-pawn one square.', 'After 3...c5, a pawn on c3 defends d4.'],
      success: '3.e5 and 4.c3. The chain stands, and if Black ever takes on d4, White can take back with a pawn.'
    },
    {
      title: 'Same chain, same plan',
      prompt: "You're Black, in the Classical. White's e-pawn attacks your knight. Put the knight where it supports your plan, then hit the base of White's chain.",
      moves: `${CLA_4E5} f4 c5`,
      start: 6,
      side: 'black',
      hints: ['The knight goes back toward the queenside, to a square from which it eyes c5.', 'Knight to d7, and after 5.f4, push your c-pawn two squares.'],
      success: '4...Nfd7 and 5...c5. The same chain as in the Advance, and the same attack on d4.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "After 3.e5, which pawn is the base of White's chain?",
      moves: `${FRENCH} e5`,
      orientation: 'white',
      choices: [
        { text: 'd4', correct: true, why: 'Right. The base is the back pawn of the chain. It holds up the e5-pawn.' },
        { text: 'e5', why: 'e5 is the front pawn, the head of the chain. The base is the pawn behind it, on d4.' },
        { text: 'd5', why: "d5 is a Black pawn: the head of Black's chain. White's chain is d4–e5." }
      ]
    },
    {
      type: 'concept',
      prompt: "After 3.e5, which pawn is the head of Black's chain?",
      moves: `${FRENCH} e5`,
      orientation: 'black',
      choices: [
        { text: 'd5', correct: true, why: "Right. d5 is the front pawn of Black's chain, and e6 is its base." },
        { text: 'e6', why: "e6 is the back pawn: the base of Black's chain. White's lever f4–f5 aims at it later." },
        { text: 'e5', why: "e5 is a White pawn: the head of White's chain." }
      ]
    },
    {
      type: 'concept',
      prompt: "After 3.e5, why can't Black's g8-knight go to f6?",
      moves: `${FRENCH} e5`,
      orientation: 'black',
      choices: [
        { text: 'The e5-pawn attacks f6', correct: true, why: "Yes. A pawn on e5 attacks d6 and f6. That is one reason White has more space on the kingside. Black's knight often goes to e7 or h6 instead." },
        { text: 'The d4-pawn attacks f6', why: 'The d4-pawn attacks c5 and e5. It is the e5-pawn that covers f6.' },
        { text: "White's f1-bishop attacks f6", why: 'The f1-bishop moves along the diagonals toward a6 and h3. Neither reaches f6. The e5-pawn is the problem.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Once the chains are locked, where does each side usually play?',
      moves: ADV_3C5,
      orientation: 'black',
      choices: [
        { text: 'White on the kingside, Black on the queenside and in the center', correct: true, why: "Right. Each chain points at one side of the board. White's e5-pawn gives space on the kingside; Black's pressure with ...c5 is on the queenside." },
        { text: 'White on the queenside, Black on the kingside', why: "It is the other way round. White's chain d4–e5 points at Black's kingside." },
        { text: 'Both sides only on the queenside', why: 'Black plays on the queenside, but White has space on the kingside and often attacks there.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: "What is Nimzowitsch's rule for attacking a pawn chain?",
      choices: [
        { text: 'Attack the chain at its base', correct: true, why: "Right. The base holds up the chain. In the French, ...c5 attacks White's base on d4." },
        { text: 'Attack the chain at its head', why: 'Hitting the head with ...f6 is a useful second break, but the rule says to start with the base.' },
        { text: 'Never attack a chain; play around it', why: "The French is all about attacking White's chain, first with ...c5 against d4." }
      ]
    },
    {
      type: 'concept',
      prompt: 'In which of these lines do the same chains (d4–e5 against d5–e6) appear?',
      choices: [
        { text: 'The Classical: 3.Nc3 Nf6 4.e5 Nfd7', correct: true, why: 'Right. After 4.e5 the center pawns stand exactly as in the Advance.' },
        { text: 'The Exchange: 3.exd5 exd5', why: "White's e-pawn has been traded, so there is no e5-pawn and no chain." },
        { text: 'The Rubinstein: 3.Nc3 dxe4 4.Nxe4', why: "Black's d-pawn has been traded on e4, so there is no d5-pawn and no chain." }
      ]
    }
  ],
  key: { name: 'Pawn chain: 3.e5 c5 hits the base', moves: ADV_3C5, orientation: 'black' },
  terms: [
    { term: 'Pawn chain', meaning: 'Pawns of one color standing on a diagonal line, each one protecting the next, like d4–e5 or e6–d5.' },
    { term: 'Base', meaning: 'The back pawn of a pawn chain, which protects the others: d4 for White and e6 for Black.' },
    { term: 'Head', meaning: 'The front pawn of a pawn chain: e5 for White and d5 for Black.' },
    { term: 'Break', meaning: 'A pawn move that attacks the enemy pawns to open the position, such as ...c5 or ...f6 in the French.' }
  ]
})
