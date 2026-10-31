import { defineModule } from '../../../types'
import { CLOSED7, CLOSED } from '../../../lines'

const PLAN = `${CLOSED} Nb8 d4`
const NO_H3 = `${CLOSED7} d6 c3 O-O d4 Bg4 d5 Na5 Bc2`

export default defineModule({
  id: '2.8',
  title: "White's master plan: c3, h3 and d4",
  minutes: 10,
  level: 1,
  goals: [
    'Know the job of each move: 8.c3, 9.h3 and 10.d4',
    'See what goes wrong for White if h3 is skipped',
    'Recognise the main position of the Closed Ruy Lopez'
  ],
  intro:
    "Once the bishop is safe on b3, White starts a slow plan: build a big pawn center with d4. But White doesn't push d4 at once. First come two quiet moves, c3 and h3. This module explains what each of those moves is for.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The plan, one move at a time',
      intro: 'Each White move prepares the next one. Look for the job of each move.',
      moves: PLAN,
      start: 13,
      orientation: 'white',
      steps: {
        13: {
          title: 'Time to build',
          text: '7.Bb3. The threat to e5 is gone, and the bishop is safe. White can now think about the center.',
          arrows: [['b3', 'f7', 'yellow']]
        },
        14: {
          title: 'Black holds e5',
          text: '7...d6. Black supports e5. Note the c8-bishop can now reach g4.',
          arrows: [['d6', 'e5', 'green'], ['c8', 'g4', 'blue']]
        },
        15: {
          title: 'Job one: support d4',
          text: '8.c3. If White plays d4 and Black takes, White can recapture with the c-pawn and keep two pawns in the center. It also frees c2 for the bishop.',
          arrows: [['c3', 'd4', 'green'], ['b3', 'c2', 'blue']]
        },
        16: {
          title: 'Black castles',
          text: '8...O-O. Black is ready too. Now Black is waiting to see what White does with the center.',
          marks: ['g8']
        },
        17: {
          title: 'Job two: stop ...Bg4',
          text: "9.h3. The pawn covers g4. Without it, ...Bg4 would pin the f3-knight to the queen, and that knight is one of d4's main defenders.",
          arrows: [['h3', 'g4', 'green']],
          marks: ['g4']
        },
        18: {
          title: 'Black picks a plan',
          text: '9...Nb8. Black has several good 9th moves. This one, the Breyer, reroutes the knight to d7 (Module 4.5).',
          arrows: [['b8', 'd7', 'blue']]
        },
        19: {
          title: 'Job three: the big center',
          text: '10.d4. Now the push comes, supported by c3, the f3-knight and the queen. White has two pawns in the center and lots of space.',
          arrows: [['c3', 'd4', 'green'], ['f3', 'd4', 'green'], ['d4', 'e5', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Three moves, three jobs',
      body:
        "**8.c3** supports d4 and gives the bishop an exit on c2.\n\n**9.h3** stops ...Bg4, which would pin the f3-knight and weaken White's grip on d4. It also keeps Black's knight off g4.\n\n**10.d4** builds the big center. After that, White often brings the b1-knight to the kingside with Nbd2–f1–g3 (Module 4.2)."
    },
    {
      kind: 'walkthrough',
      title: 'What if White skips h3?',
      intro: 'White pushes d4 one move early. Watch the c8-bishop.',
      moves: NO_H3,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'Same position',
          text: 'White is ready to play d4. This time White plays it at once.',
          arrows: [['d2', 'd4', 'blue']]
        },
        17: {
          title: 'd4 straight away',
          text: '9.d4. The big center arrives early. But g4 is not covered.',
          marks: ['g4']
        },
        18: {
          title: 'The pin',
          text: '9...Bg4. The bishop pins the f3-knight to the queen. Now d4 is hit by the e5-pawn and the c6-knight, and the f3-knight can\'t really help defend it.',
          arrows: [['g4', 'd1', 'red'], ['c6', 'd4', 'red'], ['e5', 'd4', 'red']]
        },
        19: {
          title: 'Close the center',
          text: '10.d5. White pushes past to end the pressure on d4. It works, but White had to commit early, and the center is now locked.',
          arrows: [['d5', 'c6', 'red']]
        },
        20: {
          title: 'The knight hits the bishop',
          text: '10...Na5. The knight steps aside and attacks the b3-bishop.',
          arrows: [['a5', 'b3', 'red']]
        },
        21: {
          title: 'Thanks to c3',
          text: '11.Bc2. The bishop escapes to c2. This is the Bogoljubow Variation (Module 4.9). With 9.h3 first, White keeps every option open.',
          arrows: [['b3', 'c2', 'green']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Prepare before you push',
      body:
        'In closed positions, the side that prepares its pawn breaks carefully usually does better than the side that pushes first. Ask what your opponent will do the moment you push, and deal with that first.'
    }
  ],
  takeaway:
    '8.c3 supports d4 and frees c2 for the bishop. 9.h3 stops ...Bg4 so the f3-knight can keep guarding d4. Then 10.d4 builds the big center.',
  lookAhead:
    'Before the Closed main lines, one more look at move 5: the other ways White can play instead of 5.O-O.',
  drills: [
    {
      title: "Play White's master plan",
      prompt: "You're White. Your bishop is safe on b3. Prepare d4 with two quiet moves, then push it.",
      moves: PLAN,
      start: 13,
      side: 'white',
      hints: ['First the c-pawn, to support d4 and free c2.', 'Then h3 to stop ...Bg4. Then d4.'],
      success: '8.c3, 9.h3 and 10.d4. That is the main plan of the Closed Ruy Lopez.'
    },
    {
      title: 'Punish the missing h3',
      prompt: "You're Black. White has pushed 9.d4 without h3 first. Put pressure on d4.",
      moves: `${CLOSED7} d6 c3 O-O d4 Bg4`,
      start: 17,
      side: 'black',
      hints: ['Which of your pieces can reach g4?', 'Pin the f3-knight to the queen.'],
      success: '9...Bg4! The knight is pinned, and d4 is under real pressure.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What are the jobs of 8.c3?',
      moves: `${CLOSED7} d6 c3`,
      orientation: 'white',
      choices: [
        { text: 'It supports a later d4 and frees c2 for the bishop', correct: true, why: 'Right. Two jobs in one quiet move.' },
        { text: "It attacks Black's b5-pawn", why: 'A pawn on c3 attacks b4 and d4, not b5.' },
        { text: 'It prepares queenside castling', why: 'White has already castled kingside. c3 is about d4 and the bishop.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does White play 9.h3 before d4?',
      choices: [
        { text: '...Bg4 would pin the f3-knight, one of the main defenders of d4', correct: true, why: 'Yes. h3 keeps the bishop off g4, so d4 stays well supported.' },
        { text: 'To start a kingside attack with g4 and g5', why: 'h3 is a quiet, useful move. White\'s plan is in the center, not a pawn storm.' },
        { text: 'To protect the e4-pawn', why: "A pawn on h3 doesn't guard e4. The rook on e1 does that." }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Which move does the main line play before d4?',
      moves: `${CLOSED7} d6 c3 O-O`,
      orientation: 'white',
      choices: [
        { text: '9.h3', correct: true, why: 'Right. It stops ...Bg4 before the center opens.' },
        { text: '9.d4', why: "It allows 9...Bg4, pinning the knight that helps hold d4. That's the Bogoljubow Variation." },
        { text: '9.a4', why: "It hits b5, but it doesn't help the d4 plan. The main line is 9.h3." }
      ]
    },
    {
      type: 'concept',
      prompt: "After d4 and ...exd4, why is White glad to have a pawn on c3?",
      choices: [
        { text: 'White can recapture with the c-pawn and keep two pawns in the center', correct: true, why: 'Exactly. cxd4 keeps the e4 and d4 pawns side by side.' },
        { text: 'So that the queen can recapture on d4', why: 'The queen could recapture anyway. The point is to take back with a pawn.' },
        { text: 'So that the b1-knight can go to c3', why: 'The pawn on c3 actually blocks that square. The knight goes via d2 instead.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: "What is the usual order of White's plan in the Closed Ruy Lopez?",
      choices: [
        { text: 'c3, then h3, then d4', correct: true, why: 'Right. Support first, then stop ...Bg4, then push.' },
        { text: 'd4, then c3, then h3', why: 'An early d4 lets Black use tricks like the Noah\'s Ark or ...Bg4. Prepare it first.' },
        { text: 'h3, then d4, then c3', why: 'Without c3, d4 has less support and the bishop has no exit on c2.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'White to move. White skipped h3, and Black has pinned the knight. Which move closes the center to end the pressure on d4?',
      moves: `${CLOSED7} d6 c3 O-O d4 Bg4`,
      orientation: 'white',
      choices: [
        { text: '10.d5', correct: true, why: 'Yes. The pawn advances to d5 and hits the c6-knight, so there is no pawn on d4 left to attack.' },
        { text: '10.Be3', why: 'A good move too: it adds a defender to d4. But it keeps the center open. The closing move is 10.d5.' },
        { text: '10.dxe5', why: 'That trades pawns and opens the d-file. It does not close anything.' }
      ]
    }
  ],
  key: { name: "White's plan begins: 8.c3 prepares d4", moves: `${CLOSED7} d6 c3`, orientation: 'white' },
  terms: [
    { term: 'Pawn center', meaning: 'Pawns on the central squares, like White pawns on e4 and d4. They control space and restrict enemy pieces.' },
    { term: 'Pin', meaning: 'A piece cannot move without exposing a more valuable piece behind it, like the f3-knight in front of the queen.' },
    { term: 'Closed center', meaning: 'A center where the pawns are locked against each other, such as White d5 against Black d6 and e5.' }
  ]
})
