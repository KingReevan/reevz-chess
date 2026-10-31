import { defineModule } from '../../../types'
import { RUY } from '../../../lines'

const D3 = `${RUY} f5 d3 fxe4 dxe4 Nf6 O-O Bc5 Bxc6 bxc6 Nxe5 O-O`
const EXF5 = `${RUY} f5 exf5 e4 Qe2 Qe7 Bxc6 dxc6 Nd4 Nh6`

export default defineModule({
  id: '8.2',
  title: 'Schliemann: 4.d3, the calm answer',
  minutes: 10,
  level: 2,
  goals: [
    'Learn why 4.d3 is the safest way to meet 3...f5',
    "Understand the trade: White's extra pawn against Black's active pieces",
    'Punish 4.exf5 with 4...e4 as Black'
  ],
  intro:
    "Last module, 4.Nc3 led to wild tactics. Many strong players don't want that fight. Can White meet 3...f5 calmly, keep a healthy position, and still play for an edge? And what happens if White simply takes on f5?",
  sections: [
    {
      kind: 'walkthrough',
      title: '4.d3: defend and stay solid',
      intro: 'The modern main line. Notice how little White has to calculate.',
      moves: D3,
      start: 6,
      orientation: 'white',
      steps: {
        6: {
          title: 'Black hits e4',
          text: "3...f5. The Schliemann. Black's f-pawn attacks e4 and wants to open the f-file.",
          arrows: [['f5', 'e4', 'red']]
        },
        7: {
          title: 'A pawn guards a pawn',
          text: '4.d3. White simply defends e4 with a pawn. No gambit, no tactics: White keeps things calm.',
          arrows: [['d3', 'e4', 'green']]
        },
        8: {
          title: 'Black trades anyway',
          text: '4...fxe4. Black swaps the f-pawn for White\'s e-pawn.',
          marks: ['e4']
        },
        9: {
          title: 'The healthier structure',
          text: "5.dxe4. White still has a pawn on e4. White's f2-pawn shields the king, while Black's king has lost its f-pawn for good.",
          marks: ['f2', 'f7']
        },
        10: {
          title: 'Develop with a threat',
          text: '5...Nf6. The knight develops and attacks e4, which no white piece guards now.',
          arrows: [['f6', 'e4', 'red']]
        },
        11: {
          title: 'King first',
          text: "6.O-O. White castles before doing anything else. The plan isn't to defend e4 but to go after Black's e5-pawn.",
          arrows: [['b5', 'c6', 'yellow'], ['f3', 'e5', 'yellow']]
        },
        12: {
          title: 'The active bishop',
          text: '6...Bc5. The bishop takes the long diagonal toward g1 and aims at f2, next to White\'s king.',
          arrows: [['c5', 'f2', 'red']]
        },
        13: {
          title: 'Remove the guard',
          text: '7.Bxc6. The Spanish idea: take the knight that guards e5.',
          arrows: [['b5', 'c6', 'red']],
          marks: ['e5']
        },
        14: {
          title: 'Recapture',
          text: '7...bxc6. Black takes back with the b-pawn. Now nothing guards e5.',
          marks: ['e5']
        },
        15: {
          title: 'White grabs a pawn',
          text: '8.Nxe5. White is a pawn up. The knight also eyes c6, but the d7-pawn guards it.',
          arrows: [['e5', 'c6', 'blue']]
        },
        16: {
          title: 'Activity for the pawn',
          text: "8...O-O. Black castles. The rook joins the f-file, the bishop hits f2, and the e4-pawn has no defender. White has the pawn, Black has the active pieces.",
          arrows: [['c5', 'f2', 'red'], ['f6', 'e4', 'red'], ['f8', 'f6', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Why strong players like 4.d3',
      body:
        "4.d3 has overtaken 4.Nc3 in recent years. The reason is simple: White doesn't need to know pages of tactics.\n\nAfter **4...fxe4 5.dxe4**, White's pawns are healthy and White's king is safe. Black usually ends up a pawn down for active pieces. That is still a real fight, but it is the kind of fight White is happy to have."
    },
    {
      kind: 'walkthrough',
      title: '4.exf5?! e4!: the wrong way to take',
      intro: 'Grabbing the pawn looks natural. Watch how Black gains time instead.',
      moves: EXF5,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The Schliemann',
          text: '3...f5. White can defend e4, or take the pawn on f5.',
          arrows: [['e4', 'f5', 'blue']]
        },
        7: {
          title: 'White takes',
          text: '4.exf5. White grabs a pawn. It looks greedy but safe. It is a mistake in spirit: it hands Black the centre.',
          ann: '?!'
        },
        8: {
          title: 'Push with a threat',
          text: '4...e4. The pawn steps forward and attacks the f3-knight. Black gains time and space.',
          arrows: [['e4', 'f3', 'red']],
          ann: '!'
        },
        9: {
          title: 'A pin on the e-file',
          text: "5.Qe2. White doesn't move the knight. Black's e4-pawn can't take on f3, because that would open the e-file to Black's own king.",
          arrows: [['e2', 'e8', 'red']],
          marks: ['e4']
        },
        10: {
          title: 'Break the pin',
          text: '5...Qe7. The queen steps in front of the king and defends e4. Now ...exf3 is a real threat again.',
          arrows: [['e7', 'e4', 'green'], ['e4', 'f3', 'red']]
        },
        11: {
          title: 'Clear the way',
          text: '6.Bxc6. White trades off the c6-knight. Why? That knight guarded d4, the square White\'s knight wants to run to.',
          arrows: [['c6', 'd4', 'yellow']]
        },
        12: {
          title: 'Open lines for Black',
          text: '6...dxc6. Black recaptures with the d-pawn. That opens the d-file and frees the c8-bishop, and Black now has the two bishops.',
          arrows: [['c8', 'f5', 'blue']]
        },
        13: {
          title: 'The knight escapes',
          text: '7.Nd4. The knight finds a safe central square and defends f5.',
          arrows: [['d4', 'f5', 'green']]
        },
        14: {
          title: 'Win the pawn back',
          text: "7...Nh6. The knight heads for f5. With the bishop and knight both hitting f5, Black will win the pawn back, keep the cramping e4-pawn and the bishop pair. Black is better.",
          arrows: [['h6', 'f5', 'red'], ['c8', 'f5', 'red']],
          marks: ['f5']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Against 4.exf5, push',
      body:
        "If White takes on f5, don't rush to win the pawn back. Play 4...e4 first: it attacks the knight and grabs space. The f5-pawn isn't going anywhere: ...Nh6 followed by ...Nxf5 or ...Bxf5 collects it later."
    }
  ],
  takeaway:
    "4.d3 is White's calm answer: after 4...fxe4 5.dxe4 White keeps a healthy structure and can win e5 with Bxc6 and Nxe5, while Black plays for activity. Against 4.exf5, Black answers 4...e4! with the better game.",
  lookAhead:
    'Next: 3...Bc5, the Classical Defence. Black develops the bishop to its best diagonal before the knight.',
  drills: [
    {
      title: 'Play the calm line',
      prompt: "You're White. Meet the Schliemann with the solid 4.d3 and play the main line until you win the e5-pawn.",
      moves: D3.split(' ').slice(0, -1).join(' '),
      start: 6,
      side: 'white',
      hints: [
        'Defend e4 with a pawn, recapture with that pawn, then castle.',
        'Take the knight that guards e5, then grab the pawn with your f3-knight.'
      ],
      success: '4.d3, 5.dxe4, 6.O-O, 7.Bxc6 and 8.Nxe5. A pawn up with a healthy position. Expect Black to fight for activity.'
    },
    {
      title: 'Punish 4.exf5',
      prompt: "You're Black. White just took on f5. Gain time, break the pin, and set up to win the pawn back.",
      moves: EXF5,
      start: 7,
      side: 'black',
      hints: [
        'Push a centre pawn to attack the f3-knight.',
        'When the e-file pin appears, put your queen on e7. Later, recapture on c6 with the d-pawn to free your bishop, and bring the g8-knight to h6.'
      ],
      success: '4...e4!, 5...Qe7, 6...dxc6 and 7...Nh6. The f5-pawn will fall, and you keep the bishops and the e4-wedge.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black to move. White has just taken on f5. What is the best reply?',
      moves: `${RUY} f5 exf5`,
      orientation: 'black',
      choices: [
        { text: '4...e4', correct: true, why: 'Yes. The pawn attacks the f3-knight, gains time and grabs space. The f5-pawn can be won back later.' },
        { text: '4...d6', why: 'Solid, but slow. It does nothing to the knight. 4...e4 gains a tempo by attacking it.' },
        { text: '4...Nf6', why: 'It develops, but it leaves the f3-knight in peace. 4...e4 hits the knight first and gains time.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 4.exf5 e4 5.Qe2, why can\'t Black play 5...exf3?',
      moves: `${RUY} f5 exf5 e4 Qe2`,
      orientation: 'black',
      choices: [
        { text: "The e4-pawn is pinned: taking would expose Black's king to the queen", correct: true, why: 'Right. Moving the pawn off the e-file would leave the e8-king in check from e2. That move is illegal.' },
        { text: 'The f3-knight is defended twice', why: 'Defenders matter for trades, but here the capture is simply illegal. The pawn is pinned to the king.' },
        { text: 'It would lose the e4-pawn', why: 'The real reason is the pin on the e-file. After 5...Qe7 the capture becomes a threat again.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 4.d3 called the calm answer to the Schliemann?',
      moves: `${RUY} f5 d3`,
      orientation: 'white',
      choices: [
        { text: 'It defends e4 with a pawn and avoids the sharp tactics', correct: true, why: 'Yes. After 4...fxe4 5.dxe4 White has a healthy structure with little to calculate.' },
        { text: 'It wins the f5-pawn by force', why: 'It does not attack f5 at all. Black usually trades on e4.' },
        { text: 'It stops Black from ever castling', why: 'Black castles quite easily in the 4.d3 main line.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the 4.d3 main line after 8...O-O, White is a pawn up. What does Black have in return?',
      moves: D3,
      orientation: 'black',
      choices: [
        { text: 'Active pieces: the bishop hits f2, the rook uses the f-file, and e4 is loose', correct: true, why: "Correct. Black's whole idea is activity in exchange for the pawn." },
        { text: 'A safer king than White', why: "Both kings are castled. White's king still has its f-pawn; Black's doesn't." },
        { text: 'A better pawn structure', why: "Black's pawns are split and the f-pawn is gone. Black's pluses are the pieces." }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'In the 4.exf5 line, why does White play 6.Bxc6 before 7.Nd4?',
      moves: `${RUY} f5 exf5 e4 Qe2 Qe7`,
      orientation: 'white',
      choices: [
        { text: 'The c6-knight guards d4, so White removes it first', correct: true, why: 'Yes. With the knight gone, 7.Nd4 lands on a safe square.' },
        { text: 'To double Black\'s pawns', why: 'Black does get doubled c-pawns, but also open lines and the bishop pair. The real point is the d4-square.' },
        { text: 'To win a pawn', why: 'Bishop takes knight, pawn takes bishop: no pawn is won. It clears d4 for the knight.' }
      ]
    },
    {
      type: 'concept',
      prompt: "After 4.d3 fxe4 5.dxe4, what is White's main structural plus?",
      moves: `${RUY} f5 d3 fxe4 dxe4`,
      orientation: 'white',
      choices: [
        { text: "White's king keeps its f-pawn shield; Black's f-pawn is gone", correct: true, why: "Right. That makes White's king safer and Black's king a little more open." },
        { text: 'White has an extra pawn', why: 'Material is level here. White only wins a pawn later with Bxc6 and Nxe5.' },
        { text: 'White controls the open f-file', why: "The f-file is half-open for Black, not White. White's f-pawn still stands on f2." }
      ]
    }
  ],
  key: { name: 'Schliemann Defense: 4.d3', moves: `${RUY} f5 d3`, orientation: 'white' },
  terms: [
    { term: 'Pin', meaning: 'A piece cannot move off a line without exposing a more valuable piece behind it.' },
    { term: 'Tempo', meaning: 'One move of time. Gaining a tempo means making a useful move that also forces your opponent to react.' },
    { term: 'Pawn structure', meaning: 'Where the pawns stand. It decides which squares are weak and where the pieces belong.' }
  ]
})
