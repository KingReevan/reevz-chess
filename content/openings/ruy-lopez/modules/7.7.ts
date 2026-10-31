import { defineModule } from '../../../types'
import { BERLIN } from '../../../lines'

/** berlin-beverwijk */
const BEVERWIJK = `${BERLIN} O-O Bc5 c3 O-O d4 Bb6`
/** berlin-beverwijk-5nxe5 */
const FORK = `${BERLIN} O-O Bc5 Nxe5 Nxe4 Qe2 Nxe5 Qxe4 Qe7`
/** berlin-improved-steinitz */
const STEINITZ = `${BERLIN} O-O d6 d4 Bd7 Nc3 Be7`

export default defineModule({
  id: '7.7',
  title: '4...Bc5 and 4...d6',
  minutes: 12,
  level: 2,
  goals: [
    'Play the Beverwijk, 4...Bc5, and meet the 5.Nxe5 fork trick',
    'Know the solid but passive Improved Steinitz, 4...d6',
    'Avoid the Tarrasch trap hiding in the 4...d6 line'
  ],
  intro:
    "Taking on e4 is not Black's only fourth move. Black can develop actively with 4...Bc5 or solidly with 4...d6. Each has its own tactical point to know. This module shows both, so you can choose the one that suits you.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Beverwijk: 4...Bc5',
      intro: "You're Black. The bishop goes to its most active square.",
      moves: BEVERWIJK,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'White castles',
          text: '4.O-O. This time Black does not take on e4 straight away.',
          arrows: [['f6', 'e4', 'blue']]
        },
        8: {
          title: 'The active bishop',
          text: '4...Bc5. Black develops the bishop to its most active square, aiming at f2 and White\'s king.',
          arrows: [['c5', 'f2', 'blue']]
        },
        9: {
          title: 'Preparing d4',
          text: '5.c3. White prepares d4, which will hit the bishop and claim the center. (5.Nxe5 is the fork trick; see the next walkthrough.)',
          arrows: [['c3', 'd4', 'blue']]
        },
        10: {
          title: 'Safety first',
          text: '5...O-O. Black castles. The e4-pawn is still loose, but Black prefers to get the king safe.',
          marks: ['g8']
        },
        11: {
          title: 'The center strike',
          text: '6.d4. The pawn attacks the bishop on c5 and the e5-pawn at the same time.',
          arrows: [['d4', 'c5', 'red'], ['d4', 'e5', 'red']]
        },
        12: {
          title: 'Retreat, keep aiming',
          text: '6...Bb6. The bishop steps back but keeps pressing on d4. Black keeps up the pressure on White\'s center.',
          arrows: [['b6', 'd4', 'yellow']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The fork trick: 5.Nxe5',
      intro: 'White gives a knight for a pawn, planning to win it back. Black answers with a counter-grab.',
      moves: FORK,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The Beverwijk',
          text: '4...Bc5. The bishop is active, but it can become a target for a pawn on d4.',
          marks: ['c5']
        },
        9: {
          title: 'A knight for a pawn?',
          text: '5.Nxe5. The fork trick. If 5...Nxe5, then 6.d4 forks the bishop and the knight, and White wins the piece back.',
          arrows: [['d2', 'd4', 'blue']],
          marks: ['c5', 'e5']
        },
        10: {
          title: 'The counter-grab',
          text: '5...Nxe4. Black takes the e4-pawn too, instead of the knight. Now both sides have a knight in the center.',
          marks: ['e4']
        },
        11: {
          title: 'The queen hits e4',
          text: '6.Qe2. The queen attacks the knight on e4.',
          arrows: [['e2', 'e4', 'red']]
        },
        12: {
          title: 'Black takes the knight',
          text: '6...Nxe5. Black captures on e5. For a moment Black is a piece up.',
          marks: ['e5']
        },
        13: {
          title: 'The piece comes back',
          text: '7.Qxe4. The queen takes the e4-knight. Now it attacks the knight on e5, which is pinned to Black\'s king.',
          arrows: [['e4', 'e8', 'red']],
          marks: ['e5']
        },
        14: {
          title: 'Defend and unpin',
          text: '7...Qe7. The queen guards the knight and steps between it and the king. Material is level and Black is fine.',
          arrows: [['e7', 'e5', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The Improved Steinitz: 4...d6',
      intro: 'A quieter choice. Black holds e5 with a pawn.',
      moves: STEINITZ,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'White castles',
          text: '4.O-O. Black chooses the quiet path this time.',
          marks: ['e5']
        },
        8: {
          title: 'Support e5',
          text: '4...d6. The pawn supports e5 directly. It is solid, but now the f8-bishop can only go to e7.',
          arrows: [['d6', 'e5', 'green']]
        },
        9: {
          title: 'A pin on c6',
          text: "5.d4. White hits e5. Note the pin: with d7 empty, the b5-bishop pins the c6-knight to Black's king.",
          arrows: [['d4', 'e5', 'red'], ['b5', 'e8', 'red']],
          marks: ['c6']
        },
        10: {
          title: 'Break the pin',
          text: '5...Bd7. The bishop steps between the knight and the king, so the knight is free again.',
          arrows: [['d7', 'c6', 'green']]
        },
        11: {
          title: 'White develops',
          text: '6.Nc3. The knight comes out and adds a guard to e4.',
          arrows: [['c3', 'e4', 'green']]
        },
        12: {
          title: 'Solid but cramped',
          text: '6...Be7. Black is ready to castle, but White has more space. Careful: this is the same position as the Old Steinitz, where a trap is waiting.',
          marks: ['e5']
        }
      }
    },
    {
      kind: 'warning',
      title: 'The Tarrasch trap is waiting',
      body:
        "After 4...d6 5.d4 Bd7 6.Nc3 Be7 7.Re1, castling with 7...O-O?? walks into the Tarrasch trap: 8.Bxc6 Bxc6 9.dxe5 dxe5 10.Qxd8 Raxd8 11.Nxe5, and after more forcing moves Black loses material. Module 8.5 shows the whole line. The right move is 7...exd4, giving up the center but staying safe."
    },
    {
      kind: 'text',
      title: 'Which one is for you?',
      body:
        "**4...Bc5 (Beverwijk)** is active. The bishop eyes f2, and Black castles quickly. You must know the answer to the fork trick: 5.Nxe5 Nxe4. Some sources call this line the Benelux Variation, and the same position can also arise from 3...Bc5 (Module 8.3).\n\n**4...d6 (Improved Steinitz)** is solid but passive. Black holds e5 with a pawn, but usually has to give up the center with ...exd4 later, and White keeps more space. It is a rare choice at the top."
    }
  ],
  takeaway:
    '4...Bc5 develops actively: meet 5.c3 with ...O-O and ...Bb6, and the fork trick 5.Nxe5 with 5...Nxe4!. 4...d6 is solid but cramped; after 7.Re1 play 7...exd4, not 7...O-O??.',
  lookAhead:
    "Next: White's most popular way to avoid all of this, the quiet Anti-Berlin 4.d3.",
  drills: [
    {
      title: 'Beverwijk main line',
      prompt: "You're Black. Develop the bishop actively, castle, and keep the bishop aiming at White's center when d4 comes.",
      moves: BEVERWIJK,
      start: 6,
      side: 'black',
      hints: [
        'Your f8-bishop has an active square on the a7-g1 diagonal.',
        'Castle next. When d4 attacks the bishop, retreat it one square along the same diagonal.'
      ],
      success: '4...Bc5, 5...O-O and 6...Bb6. Your bishop still presses on d4.'
    },
    {
      title: 'Answer the fork trick',
      prompt: "You're Black. White plays the fork trick 5.Nxe5. Counter-grab, take the knight, and then defend and unpin.",
      moves: FORK,
      start: 8,
      side: 'black',
      hints: [
        'Instead of taking the e5-knight at once, take a pawn of your own.',
        "When the queen takes on e4, your e5-knight is pinned. Put your queen on the e-file to guard it."
      ],
      success: '5...Nxe4, 6...Nxe5 and 7...Qe7. Material is level and your pieces are active.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'White played the fork trick 5.Nxe5. What does Black play in the main line?',
      moves: `${BERLIN} O-O Bc5 Nxe5`,
      orientation: 'black',
      choices: [
        { text: '5...Nxe4', correct: true, why: 'Right. The counter-grab. After 6.Qe2 Nxe5 7.Qxe4 Qe7, material is level and Black is fine.' },
        { text: '5...Nxe5', why: 'Then 6.d4 forks the bishop and the knight, and White wins the piece back on good terms.' },
        { text: '5...Nd4', why: 'After 6.Bc4, White keeps the extra pawn and eyes f7.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Black to move. Why is 7...Qe7 needed here?',
      moves: `${BERLIN} O-O Bc5 Nxe5 Nxe4 Qe2 Nxe5 Qxe4`,
      orientation: 'black',
      choices: [
        { text: 'The e5-knight is attacked and pinned to the king; the queen defends it and breaks the pin', correct: true, why: 'Exactly. Without it, White would win the knight.' },
        { text: "To attack White's king", why: "The queen on e7 is defending. White's king is safe on g1." },
        { text: "To trap White's queen", why: "White's queen has plenty of squares. The point is the pinned knight." }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the main idea of 4...d6, the Improved Steinitz?',
      moves: `${BERLIN} O-O d6`,
      orientation: 'black',
      choices: [
        { text: 'Hold e5 solidly with a pawn, at the cost of a cramped position', correct: true, why: 'Right. It is solid but passive, and White keeps more space.' },
        { text: 'Start a fast kingside attack', why: 'It is a quiet move. Its job is to support e5.' },
        { text: 'Win the e4-pawn', why: '4...d6 does nothing against e4. It supports e5 instead.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White has just played 7.Re1. What should Black play?',
      moves: `${STEINITZ} Re1`,
      orientation: 'black',
      choices: [
        { text: '7...exd4', correct: true, why: 'Right. Giving up the center is the safe way. Castling first runs into the Tarrasch trap.' },
        { text: '7...O-O', why: 'This is the Tarrasch trap: 8.Bxc6 Bxc6 9.dxe5 dxe5 10.Qxd8 Raxd8 11.Nxe5, and Black loses material.' },
        { text: '7...Nxe4', why: 'e4 is protected twice. After 8.Nxe4 you have lost a knight for a pawn.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Black has just played 4...Bc5. What is this line called?',
      moves: `${BERLIN} O-O Bc5`,
      orientation: 'black',
      choices: [
        { text: 'The Beverwijk Variation', correct: true, why: 'Right. 4...Bc5 develops the bishop actively.' },
        { text: 'The Improved Steinitz', why: 'The Improved Steinitz is 4...d6.' },
        { text: 'The Rio de Janeiro Variation', why: 'The Rio is 4...Nxe4 5.d4 Be7.' }
      ]
    },
    {
      type: 'concept',
      prompt: "After 4.O-O d6 5.d4, why can't the c6-knight move?",
      moves: `${BERLIN} O-O d6 d4`,
      orientation: 'black',
      choices: [
        { text: "It is pinned to Black's king by the b5-bishop", correct: true, why: 'Yes. With d7 empty, moving the knight would expose the king. 5...Bd7 breaks the pin.' },
        { text: 'It is attacked by the d4-pawn', why: 'A pawn on d4 attacks c5 and e5, not c6. The problem is the pin.' },
        { text: 'Knights cannot move after the opponent castles', why: "There's no such rule. The knight is pinned to the king." }
      ]
    }
  ],
  key: { name: 'Berlin, Beverwijk: 4.O-O Bc5', moves: `${BERLIN} O-O Bc5`, orientation: 'black' },
  terms: [
    { term: 'Fork trick', meaning: 'Giving a piece for a pawn, then winning the piece back with a fork, often a pawn fork.' },
    { term: 'Counter-grab', meaning: 'Answering a capture by capturing something of your own instead of recapturing at once.' },
    { term: 'Breaking a pin', meaning: 'Putting a piece between the pinned piece and the king, or moving the king, so the pin no longer works.' }
  ]
})
