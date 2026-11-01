import { defineModule } from '../../../types'
import { KAN } from '../lines'

/** kan-bd3: 5.Bd3 Nf6 6.O-O Qc7 7.Qe2 d6 8.c4 g6 */
const BD3 = `${KAN} Bd3 Nf6 O-O Qc7 Qe2 d6 c4 g6`
/** kan-nc3, first moves: 5.Nc3 Qc7 6.Bd3 Nc6 7.Be3 Nf6 (the Taimanov position of Module 6.1) */
const NC3 = `${KAN} Nc3 Qc7 Bd3 Nc6 Be3 Nf6`
/** 5.Nc3 b5 6.Bd3 Bb7 7.O-O: the ...b5 plan (engine-checked, White slightly better) */
const B5 = `${KAN} Nc3 b5 Bd3 Bb7 O-O`

export default defineModule({
  id: '6.5',
  title: '4...a6: the Kan',
  minutes: 11,
  level: 2,
  goals: [
    'Understand what 4...a6 does and why the knights wait',
    "Know White's two main answers, 5.Bd3 and 5.Nc3",
    'See how the Kan can turn into a Taimanov'
  ],
  intro:
    "After 2...e6 3.d4 cxd4 4.Nxd4, the Kan plays 4...a6. Black moves neither knight and keeps the d-pawn at home. It is the most flexible of the ...e6 systems. What does the little a-pawn move do, and how does White meet it?",
  sections: [
    {
      kind: 'walkthrough',
      title: '5.Bd3 and the c4 plan',
      intro: "From White's side: White's most popular answer keeps the c-pawn free so it can go to c4.",
      moves: BD3,
      start: 7,
      orientation: 'white',
      steps: {
        7: {
          title: 'Black chooses',
          text: '4.Nxd4. After 2...e6, Black has three main systems here: 4...Nc6 (Taimanov), 4...Nf6 (which can lead to the Four Knights) and 4...a6 (Kan).',
          marks: ['d4']
        },
        8: {
          title: 'The Kan',
          text: "4...a6. The Kan, also called the Paulsen. The pawn keeps White's knight and bishop off b5 and prepares ...b5. Black's knights wait to see where they belong.",
          arrows: [['a6', 'b5', 'green']],
          marks: ['b5']
        },
        9: {
          title: 'Bishop first',
          text: "5.Bd3. White's most popular move. The bishop guards e4, and the c-pawn stays free to go to c4.",
          arrows: [['d3', 'e4', 'green'], ['c2', 'c4', 'blue']]
        },
        10: {
          title: 'Hitting e4',
          text: '5...Nf6. The knight attacks e4, and the d3-bishop defends it.',
          arrows: [['f6', 'e4', 'red'], ['d3', 'e4', 'green']]
        },
        11: {
          title: 'White castles',
          text: '6.O-O. The king is safe. White is ready for c4 or Qe2.',
          marks: ['g1']
        },
        12: {
          title: 'The Sicilian queen',
          text: '6...Qc7. The queen goes to its usual Sicilian square. It watches e5 and looks down the c-file.',
          arrows: [['c7', 'e5', 'green'], ['c7', 'c2', 'blue']]
        },
        13: {
          title: 'A second guard',
          text: '7.Qe2. The queen adds a second guard to e4, and the c-pawn is still free to advance.',
          arrows: [['e2', 'e4', 'green']]
        },
        14: {
          title: 'The small center',
          text: '7...d6. Black sets up pawns on d6 and e6, a Scheveningen-style center.',
          marks: ['d6', 'e6']
        },
        15: {
          title: 'The clamp',
          text: '8.c4. White has pawns on c4 and e4 controlling d5. Black\'s breaks ...b5 and ...d5 become harder.',
          arrows: [['c4', 'd5', 'yellow'], ['e4', 'd5', 'yellow']],
          marks: ['d5']
        },
        16: {
          title: 'A bishop for g7',
          text: '8...g6. Black prepares ...Bg7. White has more space and a clear edge, but Black\'s position is solid.',
          arrows: [['f8', 'g7', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '5.Nc3: the Kan meets the Taimanov',
      intro: "From Black's side. Watch the position after move 7: you have seen it before.",
      moves: NC3,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The Kan',
          text: '4...a6. This time White develops the knight first.',
          arrows: [['a6', 'b5', 'green']]
        },
        9: {
          title: 'Knight to c3',
          text: '5.Nc3. The knight guards e4. It also stands in front of the c-pawn, so White has given up the c4 clamp for now.',
          arrows: [['c3', 'e4', 'green']],
          marks: ['c2']
        },
        10: {
          title: 'Queen first',
          text: '5...Qc7. As in the Taimanov, the queen comes out early and watches e5.',
          arrows: [['c7', 'e5', 'green']]
        },
        11: {
          title: 'Guarding e4',
          text: '6.Bd3. The bishop adds a guard to e4 and prepares castling.',
          arrows: [['d3', 'e4', 'green']]
        },
        12: {
          title: 'Now a knight',
          text: '6...Nc6. The b8-knight comes out and hits d4. Black chose c6 for it only after seeing White\'s set-up.',
          arrows: [['c6', 'd4', 'red']]
        },
        13: {
          title: 'd4 is guarded',
          text: '7.Be3. The bishop protects the d4-knight.',
          arrows: [['e3', 'd4', 'green']]
        },
        14: {
          title: 'A Taimanov!',
          text: "7...Nf6. This exact position also comes from the Taimanov: 4...Nc6 5.Nc3 Qc7 6.Be3 a6 7.Bd3 Nf6. Module 6.1 showed the rest: 8.O-O Ne5 9.h3 Bc5, and the game is roughly level.",
          marks: ['a6', 'c6', 'c7']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The ...b5 plan',
      intro: "Black's most direct idea in the Kan: grab space and put the bishop on the long diagonal before moving a knight.",
      moves: B5,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'Ready for ...b5',
          text: '4...a6. The a-pawn guards b5, so the b-pawn can go there safely.',
          arrows: [['b7', 'b5', 'blue']]
        },
        9: {
          title: 'Knight to c3',
          text: '5.Nc3. The knight guards e4.',
          arrows: [['c3', 'e4', 'green']]
        },
        10: {
          title: 'Space on the queenside',
          text: '5...b5. Black gains space. Later, ...b4 can kick the c3-knight, which guards e4.',
          arrows: [['b5', 'b4', 'blue']]
        },
        11: {
          title: 'e4 is covered',
          text: '6.Bd3. The bishop adds a second guard to e4.',
          arrows: [['d3', 'e4', 'green']]
        },
        12: {
          title: 'The long diagonal',
          text: '6...Bb7. The bishop hits e4 from far away. The c3-knight and d3-bishop defend it, so the pawn is safe for now.',
          arrows: [['b7', 'e4', 'red'], ['c3', 'e4', 'green'], ['d3', 'e4', 'green']]
        },
        13: {
          title: 'A clear plan',
          text: '7.O-O. White keeps a small edge, as usual in the Sicilian. Black knows what to do: ...Nc6 or ...Nf6, and ...b4 when it is useful.',
          marks: ['b5', 'b7']
        }
      }
    },
    {
      kind: 'tip',
      title: "Christiansen's Dream",
      body:
        "In one sharp ...b5 line, 5.Nc3 b5 6.Bd3 Qb6 7.Be3 Bc5, White can play 8.Qg4, hitting g7. It is sometimes called Christiansen's Dream, and it is often said to win for White. It doesn't: 8...Bxd4! keeps the balance. But the natural 8...Nf6?? is a blunder: 9.Qxg7 Rg8 10.Qxf6 wins a knight."
    }
  ],
  takeaway:
    "4...a6 keeps White's pieces off b5 and lets Black wait with the knights. Against 5.Bd3, White plays c4 and Black sets up ...Nf6, ...Qc7 and ...d6. Against 5.Nc3, Black can play ...Qc7 and ...Nc6 (often reaching a Taimanov) or go for ...b5 and ...Bb7.",
  lookAhead:
    'Module 6.6 looks at the c4 clamp in more detail: 5.c4 against the Kan, and the Hedgehog set-up that Black builds against it.',
  drills: [
    {
      title: 'Play 5.Bd3 and c4',
      prompt: "You're White. Black has just played 4...a6, the Kan. Set up White's most popular plan.",
      moves: `${KAN} Bd3 Nf6 O-O Qc7 Qe2 d6 c4`,
      start: 8,
      side: 'white',
      hints: [
        'Guard e4 with the bishop, castle, then give e4 a second guard with the queen.',
        '5.Bd3, 6.O-O, 7.Qe2 and 8.c4.'
      ],
      success: '5.Bd3, 6.O-O, 7.Qe2 and 8.c4. White has pawns on c4 and e4 and more space.'
    },
    {
      title: 'From the Kan to the Taimanov',
      prompt: "You're Black. White has answered the Kan with 5.Nc3. Develop like a Taimanov player.",
      moves: NC3,
      start: 9,
      side: 'black',
      hints: ['The queen comes out first, to c7.', 'Then the b8-knight to c6, and the g8-knight to f6.'],
      success: '5...Qc7, 6...Nc6 and 7...Nf6. This is the Taimanov position from Module 6.1, reached by the Kan road.'
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'Which Sicilian is this?',
      moves: KAN,
      orientation: 'black',
      choices: [
        { text: 'The Kan', correct: true, why: 'Right. 2...e6 and 4...a6. It is also called the Paulsen.' },
        { text: 'The Najdorf', why: 'The Najdorf also has ...a6, but with 2...d6 and 5...a6 after ...Nf6 and Nc3. Here Black played 2...e6.' },
        { text: 'The Taimanov', why: 'The Taimanov is 4...Nc6. Here Black played 4...a6 and has not moved a knight.' },
        { text: "The O'Kelly", why: "The O'Kelly is 2...a6, on move 2. Here the a-pawn moved on move 4, after 2...e6." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 5.Bd3 a good way for White to prepare c4?',
      moves: KAN,
      orientation: 'white',
      choices: [
        { text: 'The bishop guards e4 without blocking the c-pawn', correct: true, why: 'Yes. With 5.Nc3, the knight would stand in front of the c-pawn. With 5.Bd3, c2–c4 stays possible.' },
        { text: 'The bishop attacks Black\'s h7-pawn', why: 'From d3 the bishop looks toward h7, but the e4-pawn is in the way. The point is guarding e4 while keeping c4 possible.' },
        { text: 'It stops Black from playing ...b5', why: 'It does not. Black can still play ...b5. The bishop is about e4 and the c-pawn.' }
      ]
    },
    {
      type: 'order',
      prompt: 'After 4...a6 5.Nc3 Qc7 6.Bd3 Nc6 7.Be3 Nf6, which system has Black reached?',
      moves: NC3,
      orientation: 'black',
      choices: [
        { text: 'A Taimanov position', correct: true, why: 'Right. The same position comes from 4...Nc6 5.Nc3 Qc7 6.Be3 a6 7.Bd3 Nf6. The Kan and the Taimanov often meet.' },
        { text: 'A Najdorf', why: "Black's d-pawn is still on d7 and the e-pawn on e6. A Najdorf has ...d6 from move 2." },
        { text: 'A Sveshnikov', why: 'A Sveshnikov has ...e5 and ...d6. Here the e-pawn is on e6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does the Kan player often wait before developing the knights?',
      choices: [
        { text: 'To choose their squares after seeing White\'s set-up', correct: true, why: 'Yes. The b8-knight might go to c6 or d7, and the g8-knight to f6 or e7. Waiting keeps all options open.' },
        { text: 'Because knights are weak in the Sicilian', why: 'Knights are just as useful here as anywhere. The Kan simply keeps its options open.' },
        { text: 'To set up a fianchetto on both sides', why: "Black may play ...b5 and ...Bb7, but waiting with the knights is about flexibility, not a double fianchetto." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'What are the two main jobs of 4...a6 in the Kan?',
      choices: [
        { text: "Keep White's pieces off b5 and prepare ...b5", correct: true, why: 'Right. No Nb5 or Bb5 tricks, and the b-pawn can advance with support.' },
        { text: 'Prepare ...Ra7 and defend the seventh rank', why: 'The rook move is not the point. ...a6 is about b5.' },
        { text: 'Stop White from castling queenside', why: 'A pawn on a6 has no effect on White castling. Its job is the b5 square.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Kan with 5.Bd3 Nf6 6.O-O Qc7 7.Qe2 d6 8.c4, what has White built?',
      choices: [
        { text: 'A clamp on d5 with pawns on c4 and e4', correct: true, why: 'Yes. White has more space, and Black\'s breaks ...b5 and ...d5 are harder to play.' },
        { text: 'An English Attack with O-O-O', why: 'White has castled short here, and there is no Be3, f3 and Qd2 set-up.' },
        { text: 'A Stonewall with pawns on d4, e3 and f4', why: "White's d-pawn was traded on move 3. The c4–e4 pawn pair is the point." }
      ]
    }
  ],
  key: { name: 'Kan Variation: 4...a6', moves: KAN, orientation: 'black' },
  terms: [
    { term: 'Kan', meaning: 'The Sicilian with 2...e6 and 4...a6, also called the Paulsen. Black keeps both knights and the d-pawn at home for now.' },
    { term: 'Fianchetto', meaning: 'Developing a bishop on b7 or g7 (b2 or g2 for White), so it looks down a long diagonal.' },
    { term: 'Move order', meaning: 'The order in which moves are played. Different move orders can reach the same position, or avoid an opponent\'s best set-up.' }
  ]
})
