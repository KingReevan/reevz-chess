import { defineModule } from '../../../types'
import { RUY } from '../../../lines'

const NF6 = `${RUY} a6 Ba4 Nf6`
const WORMALD = `${NF6} Qe2 b5 Bb3 Be7 d4 d6 c3 Bg4`
const DURAS = `${NF6} d3 d6 c4`

export default defineModule({
  id: '2.9',
  title: "White's other 5th moves",
  minutes: 10,
  level: 2,
  goals: [
    'Recognise the five main alternatives to 5.O-O',
    'Know the one idea behind each of them',
    'Understand why 5.O-O is still the main move'
  ],
  intro:
    "After 4...Nf6, almost every strong player castles. But you will meet other fifth moves in your own games, and each one has a clear idea. Three of them guard e4 directly, one strikes in the center, and one trades on c6. This module gives you one idea for each.",
  sections: [
    {
      kind: 'walkthrough',
      title: '5.Qe2: the queen guards e4',
      intro: 'The Wormald Variation. Watch how the queen on e2 changes the usual plans.',
      moves: WORMALD,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'Guard e4 or castle?',
          text: 'The knight attacks e4. Instead of castling, White can guard the pawn with a pawn (5.d3), the queen (5.Qe2) or a knight (5.Nc3).',
          arrows: [['d2', 'd3', 'blue'], ['d1', 'e2', 'blue'], ['b1', 'c3', 'blue']]
        },
        9: {
          title: 'The Wormald',
          text: '5.Qe2. The queen guards e4, and the d1-square is free, so a rook can later come to d1 to support the center.',
          arrows: [['e2', 'e4', 'green']]
        },
        10: {
          title: 'Kick the bishop',
          text: '5...b5. Black pushes the bishop away at once, as in many lines.',
          arrows: [['b5', 'a4', 'red']]
        },
        11: {
          title: 'Bishop to b3',
          text: '6.Bb3. The bishop takes up its usual post, aiming at f7.',
          arrows: [['b3', 'f7', 'yellow']]
        },
        12: {
          title: 'Black develops',
          text: '6...Be7. Black prepares to castle.',
          arrows: [['e8', 'g8', 'blue']]
        },
        13: {
          title: 'A quick d4',
          text: '7.d4. With the queen already guarding e4, White can strike in the center early.',
          arrows: [['d4', 'e5', 'red']]
        },
        14: {
          title: 'Hold e5',
          text: '7...d6. Black supports e5 and opens the c8-bishop.',
          arrows: [['d6', 'e5', 'green']]
        },
        15: {
          title: 'Support d4',
          text: '8.c3. White backs up d4 with a pawn, just like in the main line.',
          arrows: [['c3', 'd4', 'green']]
        },
        16: {
          title: 'A familiar pin',
          text: '8...Bg4. Without h3, the bishop pins the f3-knight, this time to the queen on e2. You saw this idea in Module 2.8.',
          arrows: [['g4', 'e2', 'red']],
          marks: ['f3']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '5.d3: a pawn guards e4',
      intro: 'The Anderssen Variation is solid and calm. Here White adds an extra clamp.',
      moves: DURAS,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'Same position',
          text: 'This time White guards e4 with the d-pawn.',
          arrows: [['d2', 'd3', 'blue']]
        },
        9: {
          title: 'The Anderssen',
          text: '5.d3. Solid: e4 is safe for good. After castling it often turns into the quiet d3 lines that top players use today.',
          arrows: [['d3', 'e4', 'green']]
        },
        10: {
          title: 'Black stays solid too',
          text: '5...d6. Black supports e5 and keeps the c8-bishop free.',
          arrows: [['d6', 'e5', 'green']]
        },
        11: {
          title: 'The Duras clamp',
          text: "6.c4. Now pawns on c4 and e4 both control d5. Black's freeing ...d5 push becomes very hard.",
          arrows: [['c4', 'd5', 'yellow'], ['e4', 'd5', 'yellow']],
          marks: ['d5']
        }
      }
    },
    {
      kind: 'text',
      title: 'The other three',
      body:
        "**5.Nc3 (Tarrasch).** A knight guards e4, and the game looks like a Four Knights. Simple development, rarely seen at the top.\n\n**5.d4 (Mackenzie).** White opens the center at once: 5...exd4 6.O-O. Don't mix it up with the Centre Attack, which is 5.O-O Be7 6.d4.\n\n**5.Bxc6 (Bayreuth).** The Exchange idea with ...Nf6 already played. After 5...dxc6, the grab 6.Nxe5?! allows ...Nxe4 or ...Qd4, so White plays 6.d3 (Module 2.4)."
    },
    {
      kind: 'tip',
      title: 'Why 5.O-O is still the main move',
      body:
        "Each alternative commits something early: a pawn to d3, the queen to e2, the knight to c3, or the bishop for a knight. 5.O-O commits nothing except the king's safety, and e4 can be won back if Black takes it. That flexibility is why most strong players castle."
    }
  ],
  takeaway:
    "Instead of 5.O-O, White can guard e4 with 5.d3, 5.Qe2 or 5.Nc3, strike with 5.d4, or trade with 5.Bxc6. Each is playable, but 5.O-O keeps the most options.",
  lookAhead:
    'Chapter 3 takes up the trade on c6 for real: the Exchange Variation, 4.Bxc6.',
  drills: [
    {
      title: 'Play the Wormald',
      prompt: "You're White. Guard e4 with your queen, keep the bishop, then strike in the center.",
      moves: `${NF6} Qe2 b5 Bb3 Be7 d4`,
      start: 8,
      side: 'white',
      hints: ['The queen goes to e2 to protect e4.', 'When ...b5 hits the bishop, go to b3. Then push the d-pawn two squares.'],
      success: '5.Qe2, 6.Bb3 and 7.d4. The queen on e2 lets White play d4 early.'
    },
    {
      title: 'The Duras clamp',
      prompt: "You're White. Guard e4 with a pawn, then use another pawn to control d5.",
      moves: DURAS,
      start: 8,
      side: 'white',
      hints: ['First the d-pawn, one square.', 'Then the c-pawn two squares, so c4 and e4 both hit d5.'],
      success: "5.d3 and 6.c4. Black's ...d5 break is now very hard to play."
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'Which variation has White chosen?',
      moves: `${NF6} Qe2`,
      orientation: 'white',
      choices: [
        { text: 'The Wormald (5.Qe2)', correct: true, why: 'Right. The queen guards e4 and frees d1 for a rook.' },
        { text: 'The Anderssen (5.d3)', why: 'The Anderssen guards e4 with the d-pawn, not the queen.' },
        { text: 'The Tarrasch (5.Nc3)', why: 'The Tarrasch guards e4 with a knight on c3.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What do 5.d3, 5.Qe2 and 5.Nc3 have in common?',
      choices: [
        { text: 'They all guard the e4-pawn directly', correct: true, why: 'Yes. Each answers the knight on f6 by defending e4 instead of castling.' },
        { text: 'They all prepare queenside castling', why: 'None of them is about castling queenside. They are about the e4-pawn.' },
        { text: 'They all attack the e5-pawn', why: "None of them hits e5. They defend White's own pawn on e4." }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Bayreuth (5.Bxc6 dxc6), why does White usually play 6.d3 rather than 6.Nxe5?',
      choices: [
        { text: '6.Nxe5 allows ...Nxe4 or ...Qd4, and Black wins the pawn back', correct: true, why: 'Right. Guarding e4 first makes the threat on e5 real later.' },
        { text: '6.Nxe5 is an illegal move', why: 'It is legal. It just does not win a pawn, because e4 is loose.' },
        { text: '6.d3 attacks the c6-pawn', why: 'A pawn on d3 attacks c4 and e4. Its job is to guard e4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the idea of 6.c4 in the Duras Variation?',
      moves: DURAS,
      orientation: 'white',
      choices: [
        { text: 'Pawns on c4 and e4 control d5, so Black cannot easily play ...d5', correct: true, why: 'Exactly. It is a clamp on the d5-square.' },
        { text: 'It opens the c-file for a rook', why: 'The c-pawn is still on the c-file, so the file is not open.' },
        { text: 'It attacks the a6-pawn', why: 'A pawn on c4 attacks b5 and d5, not a6.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Which variation has White chosen?',
      moves: `${NF6} d4`,
      orientation: 'white',
      choices: [
        { text: 'The Mackenzie (5.d4)', correct: true, why: 'Right. White opens the center on move 5, before castling.' },
        { text: 'The Centre Attack', why: 'The Centre Attack is 5.O-O Be7 6.d4. Here d4 comes on move 5.' },
        { text: 'The Anderssen', why: 'The Anderssen is 5.d3, a quiet pawn move that guards e4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 5.O-O the most popular fifth move?',
      choices: [
        { text: 'It gets the king safe and keeps every option, since e4 can be won back if Black takes', correct: true, why: 'Yes. It commits nothing except king safety.' },
        { text: 'It is the only move that defends e4', why: "5.O-O doesn't defend e4 at all. 5.d3, 5.Qe2 and 5.Nc3 do." },
        { text: 'It threatens to win the e5-pawn at once', why: "Not yet. The threat on e5 only becomes real after Re1 (Module 2.6)." }
      ]
    }
  ],
  key: { name: 'Wormald Variation: 5.Qe2 guards e4', moves: `${NF6} Qe2`, orientation: 'white' },
  terms: [
    { term: 'Wormald Variation', meaning: '5.Qe2: the queen guards e4, and a rook can later use d1.' },
    { term: 'Anderssen Variation', meaning: '5.d3: a pawn guards e4. Solid and flexible.' },
    { term: 'Clamp', meaning: 'Pawns that control a key square so the opponent cannot use it or push a pawn there.' }
  ]
})
