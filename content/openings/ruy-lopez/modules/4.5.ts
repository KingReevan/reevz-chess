import { defineModule } from '../../../types'
import { CLOSED } from '../../../lines'

const REGROUP = `${CLOSED} Nb8 d4 Nbd7 Nbd2 Bb7 Bc2 Re8 Nf1 Bf8 Ng3 g6`
const AFTER_C4 = `${REGROUP} a4 c5 d5 c4`
const MAIN = `${AFTER_C4} Bg5`

export default defineModule({
  id: '4.5',
  title: 'Breyer: 9...Nb8',
  minutes: 11,
  level: 3,
  goals: [
    'Understand why Black retreats the knight to b8 on purpose',
    "Learn Black's regrouping: ...Nbd7, ...Bb7, ...Re8, ...Bf8, ...g6",
    "Know White's main plan against it: a4, d5 and Bg5"
  ],
  intro:
    "9...Nb8 sends a developed knight straight back home. It looks like a beginner's mistake, yet it is one of the most trusted defenses in the Closed Ruy. What does Black gain by moving backward?",
  sections: [
    {
      kind: 'text',
      title: 'Backward to go forward',
      body:
        "The c6-knight blocks the c-pawn and the long diagonal for the b7-bishop. The Chigorin moves it to a5, on the edge. The Breyer takes it the other way: c6, b8, then d7.\n\nOn d7 the knight **guards e5**, it **doesn't block the c-pawn**, and it **doesn't block the b7-bishop**. Black spends two moves on the trip. In a closed position, good squares matter more than speed."
    },
    {
      kind: 'walkthrough',
      title: "Black's regrouping",
      intro: "You're Black. Watch each Black piece find its best square, while White's knight makes its own trip.",
      moves: REGROUP,
      start: 17,
      orientation: 'black',
      steps: {
        17: {
          title: 'The plan',
          text: "The c6-knight is in the way. Black will bring it round to d7, where it does a better job.",
          arrows: [['c6', 'b8', 'blue'], ['b8', 'd7', 'blue']]
        },
        18: {
          title: 'The knight goes home',
          text: '9...Nb8. A retreat on purpose. The c-pawn and the long diagonal for a b7-bishop are both free now.',
          arrows: [['b8', 'd7', 'blue'], ['c7', 'c5', 'green']]
        },
        19: {
          title: 'White takes the center',
          text: '10.d4. White gets the big center at once. Now e5 is attacked twice (d4, f3) and guarded only by the d6-pawn.',
          arrows: [['d4', 'e5', 'red'], ['f3', 'e5', 'red']],
          marks: ['e5']
        },
        20: {
          title: 'The knight arrives',
          text: '10...Nbd7. The knight lands on d7 and guards e5 at once. It also covers c5, the square the c-pawn wants.',
          arrows: [['d7', 'e5', 'green'], ['d7', 'c5', 'green']]
        },
        21: {
          title: 'White starts the tour',
          text: '11.Nbd2. The b1-knight begins its own trip, toward f1 and g3. On d2 it guards e4.',
          arrows: [['d2', 'f1', 'blue'], ['d2', 'e4', 'green']]
        },
        22: {
          title: 'The long diagonal',
          text: "11...Bb7. Now nothing stands in the bishop's way. Together with the f6-knight it attacks e4 twice.",
          arrows: [['b7', 'e4', 'red'], ['f6', 'e4', 'red']],
          marks: ['e4']
        },
        23: {
          title: 'e4 gets a new guard',
          text: '12.Bc2. The bishop guards e4 before the d2-knight leaves. This is the Module 4.2 lesson in action.',
          arrows: [['c2', 'e4', 'green']]
        },
        24: {
          title: 'Rook to the e-file',
          text: '12...Re8. The rook gets behind the e5-pawn and frees f8 for the bishop.',
          arrows: [['e7', 'f8', 'blue']]
        },
        25: {
          title: 'The tour continues',
          text: '13.Nf1. With the c2-bishop and e1-rook guarding e4, the knight can leave d2 safely.',
          arrows: [['f1', 'g3', 'blue']]
        },
        26: {
          title: 'Bishop back to f8',
          text: '13...Bf8. The rook now sees e5 through the e-file. The e5-pawn has three guards: d6, d7 and e8.',
          arrows: [['e8', 'e5', 'green'], ['d7', 'e5', 'green'], ['d6', 'e5', 'green']],
          marks: ['e5']
        },
        27: {
          title: 'Knight on g3',
          text: "14.Ng3. White's knight has arrived. It eyes f5 and h5, two squares near Black's king.",
          arrows: [['g3', 'f5', 'red'], ['g3', 'h5', 'red']]
        },
        28: {
          title: 'The set-up is complete',
          text: '14...g6. The pawn takes f5 and h5 away from the knight, and the f8-bishop can go to g7 later. Every Black piece now has a job.',
          arrows: [['g6', 'f5', 'green'], ['g6', 'h5', 'green'], ['f8', 'g7', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "White's main plan: a4, d5, Bg5",
      intro: "Now you're White. Black is solid, so White opens a second front on the queenside.",
      moves: MAIN,
      start: 28,
      orientation: 'white',
      steps: {
        28: {
          title: 'Where to attack?',
          text: "Black's position is very solid in the center. White's target is the b5-pawn, which only the a6-pawn guards.",
          marks: ['b5']
        },
        29: {
          title: 'The a-pawn lever',
          text: '15.a4. The pawn attacks b5 and wakes up the a1-rook. This is the main move; 15.b3 is the other choice.',
          arrows: [['a4', 'b5', 'red'], ['a1', 'a6', 'blue']]
        },
        30: {
          title: 'The c-pawn goes',
          text: "15...c5. This is the move the whole Breyer was built for. The free c-pawn hits d4.",
          arrows: [['c5', 'd4', 'red']]
        },
        31: {
          title: 'White closes the center',
          text: '16.d5. White pushes past and gains space. The pawn on d5 also blocks the b7-bishop, so the long diagonal is shut.',
          arrows: [['b7', 'd5', 'yellow']]
        },
        32: {
          title: 'Space for Black too',
          text: '16...c4. Black grabs queenside space and frees c5 for the d7-knight. From c5 it would eye d3 and e4.',
          arrows: [['d7', 'c5', 'blue'], ['c4', 'd3', 'yellow']]
        },
        33: {
          title: 'The main line',
          text: '17.Bg5. The bishop pins the f6-knight to the queen, because the e7-square is empty. This position is the main line of the Breyer.',
          arrows: [['g5', 'd8', 'red']],
          marks: ['f6']
        }
      }
    },
    {
      kind: 'history',
      title: 'Fischer–Spassky, Reykjavik 1972, game 10',
      body:
        "The Breyer was one of Spassky's favourite defenses. In game 10 of their World Championship match, Fischer (White) won a pawn, gave Black no counterplay, and converted the endgame. White won. It is a model of patient technique against a solid defense."
    }
  ],
  takeaway:
    "In the Breyer, 9...Nb8 and ...Nbd7 put the knight where it guards e5 without blocking the c-pawn or the b7-bishop. Black follows with ...Bb7, ...Re8, ...Bf8 and ...g6, while White answers with the knight tour, a4 and d5.",
  lookAhead:
    "Next: the Zaitsev, where Black keeps the knight on c6 and puts pressure on e4 from move 9.",
  drills: [
    {
      title: 'The Breyer regrouping',
      prompt: "You're Black in the Closed tabiya. Play the Breyer set-up: the knight via b8 to d7, then bishop, rook, bishop and g-pawn.",
      moves: REGROUP,
      start: 17,
      side: 'black',
      hints: ['First, send the c6-knight back home.', 'Knight to d7, bishop to b7, rook to e8, bishop to f8, then ...g6.'],
      success: '9...Nb8, 10...Nbd7, 11...Bb7, 12...Re8, 13...Bf8 and 14...g6. A solid, flexible set-up.'
    },
    {
      title: "White's main line",
      prompt: "You're White after 14...g6. Hit b5 with a pawn, lock the center when Black plays ...c5, then develop the last minor piece with a pin.",
      moves: MAIN,
      start: 28,
      side: 'white',
      hints: ['The b5-pawn has only one guard. Use your a-pawn.', 'After ...c5 push the d-pawn; after ...c4 bring the c1-bishop out with a pin.'],
      success: '15.a4, 16.d5 and 17.Bg5. That is the main line of the Breyer.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does the Breyer knight go to d7 instead of staying on c6?',
      choices: [
        { text: 'On d7 it guards e5 without blocking the c-pawn or the b7-bishop', correct: true, why: 'Right. The knight does the same defensive job, and two other Black pieces get free.' },
        { text: 'On d7 it attacks the e4-pawn', why: 'A knight on d7 does not reach e4. It reaches e5, c5, b6, f6, b8 and f8.' },
        { text: 'On c6 it was about to be trapped', why: 'The c6-knight was not in danger. It was simply in the way.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 11...Bb7, which White pawn does the bishop attack?',
      moves: `${CLOSED} Nb8 d4 Nbd7 Nbd2 Bb7`,
      orientation: 'black',
      choices: [
        { text: 'e4', correct: true, why: 'Yes. With the knight gone from c6, the long diagonal is open to e4. White answers with 12.Bc2.' },
        { text: 'd4', why: 'The b7-bishop is on the light squares and d4 is a dark square. It hits e4.' },
        { text: 'f3', why: 'The bishop does not reach f3 because the e4-pawn is in the way.' }
      ]
    },
    {
      type: 'move',
      prompt: "White to move after 14...g6. What is the main move?",
      moves: REGROUP,
      orientation: 'white',
      choices: [
        { text: '15.a4', correct: true, why: 'The pawn attacks b5 and opens the a-file for the rook. 15.b3 is the other main choice.' },
        { text: '15.Nf5', why: 'The g6-pawn takes the knight, and White gets back only one pawn.' },
        { text: '15.Nxe5', why: 'e5 is guarded by d6, d7 and e8. After 15...dxe5 White has lost a knight for a pawn.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 16.d5 c4, which square has Black won for the d7-knight?',
      moves: AFTER_C4,
      orientation: 'black',
      choices: [
        { text: 'c5', correct: true, why: 'Right. No White pawn can attack c5 now, and from there the knight eyes d3 and e4.' },
        { text: 'e5', why: 'A Black pawn already stands on e5.' },
        { text: 'b6', why: 'The knight can go to b6, but c5 is the square ...c4 was played for.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Black retreats 9...Nb8 and plays ...Nbd7. What is this defense called?',
      moves: `${CLOSED} Nb8 d4 Nbd7`,
      orientation: 'black',
      choices: [
        { text: 'The Breyer Defense', correct: true, why: 'Yes. The knight goes c6-b8-d7.' },
        { text: 'The Chigorin Defense', why: 'The Chigorin moves the knight to a5, not back to b8.' },
        { text: 'The Smyslov Variation', why: 'The Smyslov is 9...h6, which stops Ng5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which World Championship game is a model of how White plays against the Breyer?',
      choices: [
        { text: 'Fischer–Spassky, Reykjavik 1972, game 10', correct: true, why: 'Right. Fischer won a pawn, killed the counterplay and converted the endgame.' },
        { text: 'Kasparov–Karpov, Lyon 1990, game 20', why: 'That famous game was a Zaitsev, with a kingside attack. Module 4.6 covers it.' },
        { text: 'Deep Blue–Kasparov, 1997, game 2', why: 'That game was a Smyslov, 9...h6. Module 4.7 covers it.' }
      ]
    }
  ],
  key: { name: 'Breyer Defense: 9...Nb8', moves: `${CLOSED} Nb8`, orientation: 'black' },
  terms: [
    { term: 'Regrouping', meaning: 'Moving pieces, sometimes backward, to squares where they work better together.' },
    { term: 'Overprotection', meaning: 'Guarding an important square more times than strictly needed, like e5 in the Breyer.' },
    { term: 'Lever', meaning: 'A pawn move that attacks an enemy pawn to open lines, like a2-a4 against b5.' }
  ]
})
