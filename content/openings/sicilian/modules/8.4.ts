import { defineModule } from '../../../types'

/** 2.Nc3 Nc6 3.f4: the Grand Prix Attack */
const GPA = 'e4 c5 Nc3 Nc6 f4'
/** gpa-bc4: 3...g6 4.Nf3 Bg7 5.Bc4 e6 6.O-O Nge7 7.d3 d5 8.Bb3 O-O */
const BC4 = `${GPA} g6 Nf3 Bg7 Bc4 e6 O-O Nge7 d3 d5 Bb3 O-O`
/** gpa-bb5: 3...g6 4.Nf3 Bg7 5.Bb5 Nd4 6.O-O Nxb5 7.Nxb5 d6 */
const BB5 = `${GPA} g6 Nf3 Bg7 Bb5 Nd4 O-O Nxb5 Nxb5 d6`
/** gpa-e6-d5: 3...e6 4.Nf3 d5 */
const E6_D5 = `${GPA} e6 Nf3 d5`

export default defineModule({
  id: '8.4',
  title: 'The Grand Prix Attack: 2.Nc3 and f4',
  minutes: 12,
  level: 2,
  goals: [
    "Know White's Grand Prix set-up: f4, Nf3, Bc4 or Bb5, O-O",
    'Blunt the c4-bishop with ...e6 and hit back with ...d5',
    'Answer 5.Bb5 with ...Nd4 and win the bishop pair'
  ],
  intro:
    "The Grand Prix Attack is the fast version of White's kingside plan. Instead of g3 and Bg2, White pushes f4 on move 3, develops quickly and aims straight at Black's king. How should Black meet it? By developing calmly and hitting back in the center before the attack gets going.",
  sections: [
    {
      kind: 'walkthrough',
      title: '5.Bc4: blunt it, then hit it',
      intro: "White's bishop aims at f7. Black blocks the diagonal and then attacks the bishop with a pawn.",
      moves: BC4,
      start: 5,
      orientation: 'white',
      steps: {
        5: {
          title: 'The Grand Prix Attack',
          text: '3.f4. After 2.Nc3 Nc6, White pushes the f-pawn at once. It controls e5 and prepares a kingside attack with f5 later.',
          arrows: [['f4', 'e5', 'green'], ['f4', 'f5', 'yellow']]
        },
        6: {
          title: 'A fianchetto',
          text: '3...g6. Black prepares ...Bg7, as in the Closed Sicilian.',
          arrows: [['f8', 'g7', 'blue']]
        },
        7: {
          title: 'The knight behind the pawn',
          text: '4.Nf3. With the f-pawn already on f4, the knight can come to f3. It covers d4 and e5.',
          arrows: [['f3', 'd4', 'green'], ['f3', 'e5', 'green']]
        },
        8: {
          title: 'The long diagonal',
          text: '4...Bg7. The bishop looks through d4 toward the c3-knight.',
          arrows: [['g7', 'c3', 'blue']]
        },
        9: {
          title: 'Aiming at f7',
          text: '5.Bc4. The bishop points at f7, next to Black\'s king. This is the most aggressive square for it.',
          arrows: [['c4', 'f7', 'red']]
        },
        10: {
          title: 'Blocking the diagonal',
          text: '5...e6. The pawn blocks the bishop\'s path to f7. It also prepares ...d5, which will attack the bishop.',
          arrows: [['d7', 'd5', 'blue']],
          marks: ['e6']
        },
        11: {
          title: 'White castles',
          text: '6.O-O. White\'s king is safe, and the rook now stands on the f-file.',
          marks: ['f5']
        },
        12: {
          title: 'Support for ...d5',
          text: '6...Nge7. From e7 the knight supports ...d5 and leaves the g7-bishop\'s diagonal open.',
          arrows: [['e7', 'd5', 'green']]
        },
        13: {
          title: 'Holding e4',
          text: '7.d3. White supports e4 and opens a path for the c1-bishop.',
          arrows: [['d3', 'e4', 'green']]
        },
        14: {
          title: 'Black hits back',
          text: '7...d5. The pawn attacks the c4-bishop and the e4-pawn. Taking with 8.exd5 exd5 would only help Black: the new d5-pawn hits the bishop again.',
          arrows: [['d5', 'c4', 'red'], ['d5', 'e4', 'red']],
          ann: '!'
        },
        15: {
          title: 'The bishop steps back',
          text: '8.Bb3. The bishop retreats. It still stands on the diagonal, but now Black\'s d5-pawn blocks it.',
          arrows: [['b3', 'd5', 'blue']]
        },
        16: {
          title: 'Black is fine',
          text: '8...O-O. Black has castled and has a good share of the center. The position is roughly equal; if anything, Black is slightly better.',
          arrows: [['d5', 'e4', 'yellow']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '5.Bb5: jump to d4',
      intro: 'If the bishop goes to b5 instead, it threatens to take on c6 and double Black\'s pawns.',
      moves: BB5,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'Same start',
          text: '4...Bg7. This time White puts the bishop on b5.',
          arrows: [['f1', 'b5', 'blue']]
        },
        9: {
          title: 'The bishop on b5',
          text: '5.Bb5. White threatens Bxc6, which would leave Black with doubled c-pawns.',
          arrows: [['b5', 'c6', 'red']]
        },
        10: {
          title: 'The knight jumps',
          text: '5...Nd4. The knight steps out of the way and attacks the b5-bishop and the f3-knight. Now Black threatens ...Nxb5.',
          arrows: [['d4', 'b5', 'red'], ['d4', 'f3', 'red']],
          ann: '!'
        },
        11: {
          title: 'White castles',
          text: '6.O-O. White gets the king safe and lets Black take the bishop.',
          arrows: [['d4', 'b5', 'red']]
        },
        12: {
          title: 'Knight takes bishop',
          text: '6...Nxb5. Black trades the knight for White\'s bishop. Now Black has both bishops and White has only one.',
          marks: ['b5']
        },
        13: {
          title: 'White takes back',
          text: '7.Nxb5. White must recapture. The knight on b5 eyes d6 and c7.',
          arrows: [['b5', 'd6', 'red'], ['b5', 'c7', 'red']]
        },
        14: {
          title: 'Closing the door',
          text: '7...d6. The pawn takes d6 away from the knight and opens the c8-bishop. Black has the bishop pair and White is a little ahead in development. The position is roughly equal.',
          arrows: [['c8', 'g4', 'blue']],
          marks: ['d6']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The fast answer: 3...e6 and 4...d5',
      intro: 'Black can also skip the fianchetto and strike in the center at once.',
      moves: E6_D5,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The Grand Prix',
          text: '3.f4. Same Grand Prix set-up.',
          arrows: [['f4', 'f5', 'red']]
        },
        6: {
          title: 'Preparing ...d5',
          text: '3...e6. Black gets ready to play ...d5 straight away.',
          arrows: [['d7', 'd5', 'blue']]
        },
        7: {
          title: 'White develops',
          text: '4.Nf3. The usual Grand Prix knight move.',
          arrows: [['f3', 'e5', 'green']]
        },
        8: {
          title: 'Strike first',
          text: '4...d5. Black hits e4 before White\'s attack is ready. The position is roughly equal, and if White pushes 5.e5, Black is comfortable.',
          arrows: [['d5', 'e4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Both plans in a nutshell',
      body:
        "**White:** f4, Nf3, Bc4 or Bb5, O-O and d3. Then the queen can swing over with Qe1 and Qh4, and f4–f5 opens lines toward Black's king.\n\n**Black:** develop calmly, keep f7 covered, and hit back in the center with ...e6 and ...d5. If the bishop goes to b5, jump to d4 and take it. In every line of this module, Black is fine."
    },
    {
      kind: 'history',
      title: 'Why "Grand Prix"?',
      body:
        'The name dates from the 1980s, when this attack was widely played in English weekend "Grand Prix" tournaments. In this course, the Grand Prix means 2.Nc3 followed by f4. Many sources also use the name for 2.f4 on move two, which Module 8.5 covers.'
    }
  ],
  takeaway:
    "In the Grand Prix, White plays 2.Nc3 and an early f4 to attack the kingside. Black blunts a c4-bishop with ...e6 and hits it with ...d5, and answers Bb5 with ...Nd4 to win the bishop pair.",
  lookAhead:
    'Module 8.5 looks at 2.f4 on move two, and Black\'s most direct reply, 2...d5, which leads to the Tal Gambit.',
  drills: [
    {
      title: 'Meet the b5-bishop',
      prompt: "You're Black. White has just played 5.Bb5, threatening to double your pawns with Bxc6. Find the best reply.",
      moves: `${GPA} g6 Nf3 Bg7 Bb5 Nd4`,
      start: 9,
      side: 'black',
      hints: ['Move the attacked knight to a square where it attacks something.', 'The knight can jump to the center and hit b5 and f3.'],
      success: '5...Nd4! Now ...Nxb5 is coming, and Black will get the bishop pair.'
    },
    {
      title: 'Blunt it, then hit it',
      prompt: "You're Black. White's bishop on c4 aims at f7. Block it, develop, then attack it with a pawn.",
      moves: `${GPA} g6 Nf3 Bg7 Bc4 e6 O-O Nge7 d3 d5`,
      start: 9,
      side: 'black',
      hints: ['First, put a pawn on the c4–f7 diagonal.', '...e6, then ...Nge7, then ...d5.'],
      success: '5...e6, 6...Nge7 and 7...d5. The bishop is blocked and then chased, and Black has a good center.'
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'White has played 2.Nc3 and 3.f4. What is this attack called?',
      moves: GPA,
      orientation: 'white',
      choices: [
        { text: 'The Grand Prix Attack', correct: true, why: 'Yes. 2.Nc3 with an early f4 is the Grand Prix.' },
        { text: 'The Closed Sicilian', why: 'The Closed also starts with 2.Nc3, but White plays g3 and Bg2 first. An early f4 marks the Grand Prix.' },
        { text: 'The Smith–Morra Gambit', why: 'The Morra is 2.d4 cxd4 3.c3, a pawn sacrifice in the center.' },
        { text: 'The Alapin', why: 'The Alapin is 2.c3, preparing d4.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has played 5.Bb5. What is the best reply?',
      moves: `${GPA} g6 Nf3 Bg7 Bb5`,
      orientation: 'black',
      choices: [
        { text: '5...Nd4', correct: true, why: 'Right. The knight dodges Bxc6 and attacks the bishop, so Black will win the bishop pair.' },
        { text: '5...a6', why: 'This invites 6.Bxc6, and Black is left with doubled c-pawns. White is better.' },
        { text: '5...d6', why: 'After 6.Bxc6+ bxc6, Black has doubled c-pawns and White is slightly better. ...Nd4 avoids this.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does Black answer 5.Bc4 with 5...e6?',
      moves: `${GPA} g6 Nf3 Bg7 Bc4`,
      orientation: 'black',
      choices: [
        { text: "It blocks the bishop's path to f7 and prepares ...d5", correct: true, why: 'Yes. First the pawn shields f7, then ...d5 attacks the bishop.' },
        { text: 'It defends the c5-pawn', why: 'Nothing attacks c5 here. The point is the c4–f7 diagonal.' },
        { text: 'It opens a diagonal for the f8-bishop', why: 'The bishop is already on g7. The e-pawn move is about f7 and ...d5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 7...d5, which two White units does the d5-pawn attack?',
      moves: `${GPA} g6 Nf3 Bg7 Bc4 e6 O-O Nge7 d3 d5`,
      orientation: 'black',
      choices: [
        { text: 'The c4-bishop and the e4-pawn', correct: true, why: 'Right. A pawn on d5 attacks c4 and e4, so White must deal with the bishop.' },
        { text: 'The c3-knight and the e4-pawn', why: 'A pawn attacks diagonally forward. From d5 that is c4 and e4, not c3.' },
        { text: 'The d3-pawn and the e4-pawn', why: 'Pawns do not attack straight ahead. The targets are c4 and e4.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: "Which is White's typical plan in the Grand Prix Attack?",
      choices: [
        { text: 'f4, Nf3, Bc4 or Bb5, O-O, then Qe1–h4 and f5', correct: true, why: 'Yes. Everything points at Black\'s kingside.' },
        { text: 'An early d4 to open the center', why: 'That would be an Open Sicilian. In the Grand Prix White keeps the d-pawn back and attacks on the kingside.' },
        { text: 'g3, Bg2 and a slow build-up', why: 'That is the Closed Sicilian. The Grand Prix pushes f4 early.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 5.Bb5 Nd4 6.O-O Nxb5 7.Nxb5 d6, what has Black gained?',
      moves: BB5,
      orientation: 'black',
      choices: [
        { text: 'The bishop pair', correct: true, why: 'Right. Black traded a knight for a bishop, so Black has two bishops against one.' },
        { text: 'An extra pawn', why: 'Material is level: a knight was traded for a bishop.' },
        { text: 'A lead in development', why: 'White has castled and has more pieces out. Black\'s gain is the bishop pair.' }
      ]
    }
  ],
  key: { name: 'Grand Prix Attack: 3.f4', moves: GPA, orientation: 'white' },
  terms: [
    { term: 'Grand Prix Attack', meaning: 'A White system with 2.Nc3 and an early f4, aiming for a kingside attack.' },
    { term: 'Doubled pawns', meaning: 'Two pawns of the same color on one file. They are usually weaker because they cannot guard each other.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has only one. Often an advantage in open positions.' }
  ]
})
