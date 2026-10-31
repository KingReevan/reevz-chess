import { defineModule } from '../../../types'
import { CLOSED7 } from '../../../lines'

const BEFORE9 = `${CLOSED7} d6 c3 O-O`
const BOGO = `${BEFORE9} d4 Bg4 Be3 exd4 cxd4 Na5 Bc2 c5 h3 Bh5`
const PILNIK = `${BEFORE9} d3 Na5 Bc2 c5 Nbd2`

export default defineModule({
  id: '4.9',
  title: 'Skipping h3: 9.d4 Bg4 and 9.d3',
  minutes: 10,
  level: 3,
  goals: [
    'See why ...Bg4 is annoying when White plays d4 without h3',
    'Learn how White holds d4 with 10.Be3',
    'Know the quiet 9.d3, where the pin matters much less'
  ],
  intro:
    "The main line plays 9.h3 to stop ...Bg4. But does White really need to spend a move on it? This module tries the two ways of skipping h3: the direct 9.d4, and the quiet 9.d3. Watch what Black's bishop does in each.",
  sections: [
    {
      kind: 'walkthrough',
      title: '9.d4 Bg4: the Bogoljubow Variation',
      intro: "You're Black. Without h3, your c8-bishop can reach g4 and pin the knight that guards d4.",
      moves: BOGO,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'White skips h3',
          text: "White to play. The usual move is 9.h3. Here White goes for the center at once, and that leaves g4 open for Black's bishop.",
          arrows: [['c8', 'g4', 'blue']],
          marks: ['g4']
        },
        17: {
          title: 'The center at once',
          text: '9.d4. This is the Yates Variation. The d4-pawn is guarded by the c3-pawn, the f3-knight and the queen.',
          arrows: [['f3', 'd4', 'green'], ['c3', 'd4', 'green']]
        },
        18: {
          title: 'The pin',
          text: "9...Bg4. The bishop pins the f3-knight to the queen. If the knight ever takes on d4, ...Bxd1 wins the queen. And Black can take on f3 later to remove a guard of d4.",
          arrows: [['g4', 'd1', 'red'], ['e5', 'd4', 'red'], ['c6', 'd4', 'red']],
          marks: ['f3']
        },
        19: {
          title: 'A new guard',
          text: '10.Be3. White adds a guard to d4 that no pin can touch.',
          arrows: [['e3', 'd4', 'green']]
        },
        20: {
          title: 'Black takes',
          text: '10...exd4. Black trades off the e5-pawn, so White has to take back.'
        },
        21: {
          title: 'White takes back',
          text: '11.cxd4. White keeps pawns on d4 and e4 side by side. Both still need guarding.',
          marks: ['d4', 'e4']
        },
        22: {
          title: 'The familiar knight jump',
          text: '11...Na5. As in the Chigorin, the knight hits the b3-bishop and frees the c-pawn.',
          arrows: [['a5', 'b3', 'red'], ['c7', 'c5', 'green']]
        },
        23: {
          title: 'The bishop steps back',
          text: '12.Bc2. White keeps its Spanish bishop.',
          arrows: [['c2', 'e4', 'green']]
        },
        24: {
          title: 'd4 under fire again',
          text: '12...c5. The pawn hits d4, and the f3-knight that guards it is still pinned.',
          arrows: [['c5', 'd4', 'red'], ['g4', 'd1', 'red']]
        },
        25: {
          title: 'Now White asks',
          text: "13.h3. White finally asks the bishop what it wants. Taking on f3 would give up the bishop for a knight.",
          arrows: [['h3', 'g4', 'red']]
        },
        26: {
          title: 'The pin stays',
          text: "13...Bh5. The bishop steps back but keeps the pin along the h5-d1 diagonal. Black has kept up the pressure on d4.",
          arrows: [['h5', 'd1', 'red']],
          marks: ['f3']
        }
      }
    },
    {
      kind: 'text',
      title: 'The other answer: 10.d5',
      body:
        "Instead of 10.Be3, White can close the center with **10.d5**. Now there is no d4-pawn for the pin to hurt. Black usually plays 10...Na5 11.Bc2 c6, and later White plays h3 and the bishop goes back to c8.\n\nEither way, ...Bg4 makes White spend time on a problem that 9.h3 would have stopped. That is why 9.h3 is the main move."
    },
    {
      kind: 'history',
      title: 'Capablanca–Bogoljubow, London 1922',
      body:
        'The 9.d4 Bg4 line takes its name from the game Capablanca–Bogoljubow, played in London in 1922. It is the source game of the variation.'
    },
    {
      kind: 'walkthrough',
      title: 'The quiet road: 9.d3',
      intro: "Now you're White. Instead of fighting for d4 at once, White guards e4 with a pawn and starts the knight trip.",
      moves: PILNIK,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'Another way to skip h3',
          text: "White can also skip both h3 and d4 for now. The plan: keep e4 solid and bring the knight round first.",
          arrows: [['d2', 'd3', 'green'], ['b1', 'd2', 'blue']]
        },
        17: {
          title: 'The Pilnik',
          text: '9.d3. The pawn guards e4 for good. With no pawn on d4, a pin with ...Bg4 would not hurt much, so White doesn\'t need h3.',
          arrows: [['d3', 'e4', 'green']]
        },
        18: {
          title: 'Black chooses the Chigorin plan',
          text: '9...Na5. Black hits the bishop and frees the c-pawn, as usual.',
          arrows: [['a5', 'b3', 'red']]
        },
        19: {
          title: 'Bishop to c2',
          text: "10.Bc2. White keeps the Spanish bishop, out of the knight's reach."
        },
        20: {
          title: 'Space on the queenside',
          text: '10...c5. Black takes space. It also guards d4, so a later d3-d4 needs preparing.',
          arrows: [['c5', 'd4', 'yellow']]
        },
        21: {
          title: 'The tour begins',
          text: '11.Nbd2. Next comes Nf1 and Ng3, as in Module 4.2. White can push d3-d4 later, all in one go.',
          arrows: [['d2', 'f1', 'blue'], ['f1', 'g3', 'blue']]
        }
      }
    }
  ],
  takeaway:
    "Without h3, 9.d4 allows 9...Bg4, pinning the f3-knight that guards d4. White can hold with 10.Be3 or close with 10.d5. The quiet 9.d3 (the Pilnik) keeps e4 solid and saves d4 for later, so the pin hardly matters.",
  lookAhead:
    "Next: the modern way to play the Closed Ruy, with d3 on move 6.",
  drills: [
    {
      title: 'Pin and press',
      prompt: "You're Black. White just played 9.d4 without h3. Pin the knight, open the e-file, chase the bishop with your knight, hit d4 with the c-pawn, and keep the pin when White plays h3.",
      moves: BOGO,
      start: 17,
      side: 'black',
      hints: ['Your c8-bishop can reach g4 now.', 'Then ...exd4, ...Na5, ...c5, and when the h-pawn hits your bishop, keep it on the same diagonal.'],
      success: '9...Bg4, 10...exd4, 11...Na5, 12...c5 and 13...Bh5. The pin stays and d4 stays under pressure.'
    },
    {
      title: 'The Pilnik set-up',
      prompt: "You're White. Skip h3 and d4: guard e4 with a pawn, save your bishop, and start the knight trip.",
      moves: PILNIK,
      start: 16,
      side: 'white',
      hints: ['Guard e4 with the d-pawn, one square only.', 'After ...Na5, the bishop goes to c2; after ...c5, the knight starts its tour.'],
      success: '9.d3, 10.Bc2 and 11.Nbd2. Calm and solid, with d4 saved for later.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 9.d4 Bg4, why is the pin a problem for White?',
      moves: `${BEFORE9} d4 Bg4`,
      orientation: 'white',
      choices: [
        { text: 'The pinned f3-knight is one of the guards of d4', correct: true, why: "Right. If it takes on d4, ...Bxd1 wins the queen, and ...Bxf3 can remove it altogether." },
        { text: 'The bishop threatens mate on h2', why: 'The bishop on g4 does not reach h2. The trouble is the knight that guards d4.' },
        { text: 'The bishop attacks the e4-pawn', why: 'A bishop on g4 does not attack e4. It pins the f3-knight.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Which move adds a guard to d4 that the pin cannot touch?',
      moves: `${BEFORE9} d4 Bg4`,
      orientation: 'white',
      choices: [
        { text: '10.Be3', correct: true, why: 'Yes. The bishop guards d4 directly, and nothing pins it.' },
        { text: '10.Nbd2', why: 'A knight on d2 guards f3, not d4. It does not add a guard to the d4-pawn.' },
        { text: '10.a4', why: 'It hits b5, but d4 still has the same shaky guards.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why can White play 9.d3 without worrying about ...Bg4?',
      choices: [
        { text: 'There is no d4-pawn for the pinned knight to guard', correct: true, why: 'Right. The pin only hurts when the f3-knight has an important job, like guarding d4.' },
        { text: 'The d3-pawn attacks g4', why: 'A pawn on d3 attacks c4 and e4, not g4.' },
        { text: 'The queen can take the bishop on g4', why: 'The queen on d1 does not reach g4: the f3-knight is in the way.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 13.h3 Bh5, what has Black kept?',
      moves: BOGO,
      orientation: 'black',
      choices: [
        { text: 'The pin on the f3-knight', correct: true, why: 'Yes. The h5-bishop still lines up with f3 and d1.' },
        { text: 'The bishop pair', why: 'Both sides still have both bishops, so this is not the point of ...Bh5.' },
        { text: 'An extra pawn', why: 'Material is level. The point of ...Bh5 is the pin.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'White plays 9.d4 without h3, and Black answers 9...Bg4. What is this line called?',
      moves: `${BEFORE9} d4 Bg4`,
      orientation: 'black',
      choices: [
        { text: 'The Bogoljubow Variation', correct: true, why: 'Right. It is named after Capablanca–Bogoljubow, London 1922.' },
        { text: 'The Pilnik Variation', why: 'The Pilnik is 9.d3, the quiet move.' },
        { text: 'The Kholmov Variation', why: 'The Kholmov is 9.h3 Be6. Here White has skipped h3.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Pilnik, 9.d3, what is White\'s usual plan?',
      choices: [
        { text: 'Bring the knight round via d2 and f1 to g3, and play d3-d4 later if at all', correct: true, why: 'Yes. White keeps e4 solid and saves the center push for the right moment.' },
        { text: 'Push d3-d4-d5 at once', why: 'That would waste time. White plays d4 later, all in one go.' },
        { text: 'Attack at once with Ng5 and Bxf7+', why: 'Black is solid and f7 is guarded. White plays slowly in the Pilnik.' }
      ]
    }
  ],
  key: { name: 'Bogoljubow Variation: 9.d4 Bg4', moves: `${BEFORE9} d4 Bg4`, orientation: 'white' },
  terms: [
    { term: 'Relative pin', meaning: 'The pinned piece is allowed to move, but doing so exposes a more valuable piece, like the queen.' },
    { term: 'Move order', meaning: 'The order you play your moves in. Skipping or delaying a move like h3 can change what the opponent may do.' },
    { term: 'Yates Variation', meaning: 'The name for 9.d4 in the Closed Ruy, played before h3.' }
  ]
})
