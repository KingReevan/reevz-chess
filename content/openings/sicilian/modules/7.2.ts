import { defineModule } from '../../../types'
import { ALAPIN } from '../lines'

/** The Scandinavian Defense, for comparison: 1.e4 d5 2.exd5 Qxd5 3.Nc3 Qa5 */
const SCANDI = 'e4 d5 exd5 Qxd5 Nc3 Qa5'
/** alapin-d5: 2...d5 3.exd5 Qxd5 4.d4 Nf6 5.Nf3 Bg4 6.Be2 e6 7.O-O Nc6 8.Be3 cxd4 9.cxd4 Be7 */
const MAIN = `${ALAPIN} d5 exd5 Qxd5 d4 Nf6 Nf3 Bg4 Be2 e6 O-O Nc6 Be3 cxd4 cxd4 Be7`
/** ...and the engine's main move 10.Nc3 Qd6, once c3 is free (engine-checked) */
const NC3 = `${MAIN} Nc3 Qd6`
/** after 6.Be2, before Black's sixth move */
const BE2 = MAIN.split(' ').slice(0, 11).join(' ')
/** up to 6...e6 */
const E6 = MAIN.split(' ').slice(0, 12).join(' ')

export default defineModule({
  id: '7.2',
  title: '2...d5: the queen comes out safely',
  minutes: 11,
  level: 2,
  goals: [
    'See why ...Qxd5 is fine against 2.c3 but risky in other openings',
    "Learn Black's set-up: ...Nf6, ...Bg4, ...e6, ...Nc6 and ...Be7",
    'Know when White\'s knight can finally hit the queen'
  ],
  intro:
    "Beginners learn not to bring the queen out early, because enemy pieces can chase it and gain time. Yet after 2.c3 d5 3.exd5, Black happily takes back with the queen. What makes it safe here, and how long does it stay safe?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Why an early queen is usually risky',
      intro: 'First, a different opening: the Scandinavian Defense, 1.e4 d5. Watch the b1-knight.',
      moves: SCANDI,
      start: 2,
      orientation: 'black',
      steps: {
        2: {
          title: 'Not a Sicilian',
          text: '1...d5. This is the Scandinavian Defense. Black attacks e4 with the d-pawn on move one.',
          arrows: [['d5', 'e4', 'red']]
        },
        3: {
          title: 'White takes',
          text: '2.exd5. White takes the pawn. Black will take back with the queen.',
          marks: ['d5']
        },
        4: {
          title: 'The queen in the center',
          text: '2...Qxd5. Material is level, and the queen stands in the middle of the board. Now look at c3.',
          marks: ['c3']
        },
        5: {
          title: 'Develop with an attack',
          text: '3.Nc3. The knight comes out and attacks the queen at the same time. That is gain of time: a useful move that forces Black to react.',
          arrows: [['c3', 'd5', 'red']],
          ann: '!'
        },
        6: {
          title: 'The queen moves again',
          text: '3...Qa5. The queen has to move a second time. White has a piece out for free and is a bit better.',
          arrows: [['d5', 'a5', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Against 2.c3, nothing can chase it',
      intro: 'Now the Alapin. The same queen recapture, but one White pawn changes everything.',
      moves: E6,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The same recapture',
          text: "3...Qxd5. The queen takes back on d5, just as in the Scandinavian. But White's c-pawn stands on c3, so the b1-knight cannot go there.",
          marks: ['c3']
        },
        7: {
          title: 'White plays d4',
          text: '4.d4. White gets the pawn to d4. The c5-pawn and the queen both attack it, and the c3-pawn and the queen on d1 defend it.',
          arrows: [['c5', 'd4', 'red'], ['d5', 'd4', 'red'], ['c3', 'd4', 'green']]
        },
        8: {
          title: 'Nothing hits the queen',
          text: '4...Nf6. Black develops. Check the queen: no White piece attacks d5, and White has no good developing move that attacks it.',
          marks: ['d5']
        },
        9: {
          title: 'A third guard for d4',
          text: '5.Nf3. The knight develops and defends d4. Now three White units guard it: the c3-pawn, the knight and the queen.',
          arrows: [['f3', 'd4', 'green']]
        },
        10: {
          title: 'The pin',
          text: "5...Bg4. The bishop pins the f3-knight to White's queen. If the knight moved, the queen on d1 would be exposed. The knight is one of d4's guards.",
          arrows: [['g4', 'f3', 'red'], ['f3', 'd1', 'yellow']]
        },
        11: {
          title: 'Breaking the pin',
          text: '6.Be2. The bishop steps between the knight and the queen. Now the knight is free to move.',
          arrows: [['f1', 'e2', 'green']]
        },
        12: {
          title: 'Solid support',
          text: '6...e6. The pawn guards d5 and opens a path for the f8-bishop. Black will finish with ...Nc6, ...Be7 and castling.',
          arrows: [['e6', 'd5', 'green'], ['f8', 'e7', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'How safe is the queen?',
      body:
        "The c3-pawn has two jobs. It supports d4, and it sits on the one square where White's knight could attack d5 with a developing move.\n\nWhite has no quick way to chase the queen with a developing move. The usual ways to hit it come later. The pawn can go **c3–c4**, but then it no longer guards d4. Or White can recapture **cxd4** after ...cxd4, which empties c3 so that **Nc3** comes with gain of time. By then Black has usually developed, so losing one move is not a problem."
    },
    {
      kind: 'walkthrough',
      title: 'When c3 is free again',
      intro: 'Black completes development. Watch the c3-square after the pawns are traded on d4.',
      moves: NC3,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: "Black's set-up",
          text: 'After 6...e6, Black has a clear plan: ...Nc6, ...Be7 and castling.',
          arrows: [['b8', 'c6', 'blue'], ['f8', 'e7', 'blue']]
        },
        13: {
          title: 'White castles',
          text: '7.O-O. White gets the king safe.',
          arrows: [['e1', 'g1', 'green']]
        },
        14: {
          title: 'Three on d4',
          text: '7...Nc6. Now the c5-pawn, the c6-knight and the queen all attack d4.',
          arrows: [['c6', 'd4', 'red'], ['c5', 'd4', 'red'], ['d5', 'd4', 'red']]
        },
        15: {
          title: 'Four guards',
          text: '8.Be3. The bishop adds a fourth defender: the c3-pawn, the e3-bishop, the f3-knight and the queen. d4 is safe.',
          arrows: [['e3', 'd4', 'green'], ['c3', 'd4', 'green'], ['f3', 'd4', 'green']]
        },
        16: {
          title: 'Black trades',
          text: '8...cxd4. Black swaps pawns on d4. White will take back with the c-pawn.',
          marks: ['d4']
        },
        17: {
          title: 'The c3-square is empty',
          text: '9.cxd4. The c-pawn has left c3. Now the b1-knight can go there and attack the queen.',
          arrows: [['b1', 'c3', 'blue']],
          marks: ['c3']
        },
        18: {
          title: 'Ready for it',
          text: '9...Be7. Black finishes developing the kingside and is ready to castle. Black knows Nc3 is coming.',
          arrows: [['e8', 'g8', 'blue']]
        },
        19: {
          title: 'Finally, gain of time',
          text: '10.Nc3. The knight develops and attacks the queen, the trick that 2.c3 had ruled out until now.',
          arrows: [['c3', 'd5', 'red']]
        },
        20: {
          title: 'A small price',
          text: "10...Qd6. The queen steps back. Black has lost one move, but all the minor pieces are out, and the position is roughly equal. White's d-pawn is now isolated: Module 7.3 explains what that means.",
          marks: ['d4']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Before your queen comes out',
      body:
        "Don't follow \"never move the queen early\" blindly. Ask a better question: which enemy piece can attack my queen with a developing move? If the answer is none, an early queen move can be perfectly fine."
    }
  ],
  takeaway:
    "After 2.c3 d5 3.exd5 Qxd5, the queen is safe because the c3-pawn keeps White's knight off c3. Black develops with ...Nf6, ...Bg4, ...e6, ...Nc6 and ...Be7, and only after cxd4 can Nc3 hit the queen.",
  lookAhead: "Module 7.3 looks at the position that often arises from this line: White's isolated d-pawn.",
  drills: [
    {
      title: 'The 2...d5 set-up',
      prompt: "You're Black. Answer 2.c3 with ...d5, take back with the queen, and develop all the way to ...Be7.",
      moves: MAIN,
      start: 3,
      side: 'black',
      hints: [
        'Strike at e4 with the d-pawn, then take back with the queen.',
        'The order is ...Nf6, ...Bg4, ...e6, ...Nc6, ...cxd4 and ...Be7.'
      ],
      success: 'Well done. The queen stayed safe on d5 while you developed every minor piece.'
    },
    {
      title: 'Develop with gain of time',
      prompt: "You're White. The pawns have been traded on d4, and the c3-square is empty again. Develop a piece and attack the queen.",
      moves: `${MAIN} Nc3`,
      start: 18,
      side: 'white',
      hints: ['Which piece could not reach its best square while your pawn was on c3?'],
      success: '10.Nc3! The knight develops and hits the queen, which has to move again.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why can Black safely play 3...Qxd5 after 2.c3 d5 3.exd5?',
      moves: `${ALAPIN} d5 exd5 Qxd5`,
      orientation: 'black',
      choices: [
        { text: "The c3-pawn takes away the b1-knight's best square, so Nc3 can't attack the queen", correct: true, why: 'Right. In the Scandinavian, 3.Nc3 hits the queen with gain of time. Here that square is blocked.' },
        { text: 'The queen is defended on d5', why: 'Nothing defends d5 at this moment. The point is that nothing can attack it quickly.' },
        { text: "White's queen is pinned", why: "Nothing pins White's queen. The key is the pawn on c3." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Black has just played 5...Bg4. What does the bishop do?',
      moves: MAIN.split(' ').slice(0, 10).join(' '),
      orientation: 'black',
      choices: [
        { text: "It pins the f3-knight, one of d4's guards, to White's queen", correct: true, why: 'Yes. If the knight moved, the queen on d1 would be exposed. White usually answers 6.Be2.' },
        { text: 'It attacks the d4-pawn', why: 'The bishop moves on light squares, and d4 is a dark square. It can never attack d4.' },
        { text: 'It threatens ...Bxf3 to win a piece', why: 'After ...Bxf3, White simply takes back. That is a trade, not a win.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Which move develops a piece and attacks the queen?',
      moves: MAIN,
      orientation: 'white',
      choices: [
        { text: '10.Nc3', correct: true, why: 'Right. The c3-square is empty now, so the knight comes out with gain of time.' },
        { text: '10.Bc4', why: 'It attacks the queen, but nothing guards c4. 10...Qxc4 wins a bishop.' },
        { text: '10.Nbd2', why: "It develops, but it doesn't attack the queen, and it blocks the d1-queen's guard of d4. Black castles comfortably." }
      ]
    },
    {
      type: 'order',
      prompt: "In the 2...d5 Alapin, when can White's b1-knight first come to c3 with an attack on the queen?",
      choices: [
        { text: 'After White recaptures on d4 with the c-pawn', correct: true, why: 'Exactly. Once the c-pawn leaves c3, Nc3 hits the queen. By then Black is usually well developed.' },
        { text: 'Right away, on move 4', why: "White's own pawn is standing on c3, so the knight can't go there." },
        { text: 'Never, in this line', why: 'It happens after ...cxd4 cxd4: in the main line, 10.Nc3 attacks the queen.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In the Scandinavian, 1.e4 d5 2.exd5 Qxd5 3.Nc3 gains time. Why does White lack this trick after 1.e4 c5 2.c3 d5 3.exd5 Qxd5?',
      choices: [
        { text: "White's own pawn is on c3, so the knight can't go there", correct: true, why: 'Right. 2.c3 supports d4 but takes the c3-square from the knight.' },
        { text: 'The knight is pinned', why: 'Nothing pins the b1-knight. Its path to c3 is simply blocked by a pawn.' },
        { text: 'The queen on d5 is defended by the c5-pawn', why: 'A pawn on c5 does not defend d5. Pawns guard the squares diagonally in front of them: b4 and d4.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just played 6.Be2. What is the most solid continuation?',
      moves: BE2,
      orientation: 'black',
      choices: [
        { text: '6...e6', correct: true, why: 'Yes. The pawn guards d5 and opens the f8-bishop. Black is ready for ...Nc6, ...Be7 and castling.' },
        { text: '6...Bxf3', why: 'After 7.Bxf3 the bishop attacks the queen with gain of time, and it also aims at b7 behind it. White is clearly better.' },
        { text: '6...Nc6', why: 'Playable, but 7.h3 Bh5 8.c4! hits the queen and gains space. White is a bit better.' }
      ]
    }
  ],
  key: { name: 'Alapin: 2...d5 3.exd5 Qxd5', moves: `${ALAPIN} d5 exd5 Qxd5`, orientation: 'black' },
  terms: [
    { term: 'Gain of time', meaning: 'Making a useful move, such as developing a piece, that also forces your opponent to react, for example by attacking their queen.' },
    { term: 'Pin', meaning: 'A piece cannot move without exposing a more valuable piece behind it on the same line.' },
    { term: 'Scandinavian Defense', meaning: 'The opening 1.e4 d5. After 2.exd5 Qxd5 3.Nc3, the knight attacks the queen with gain of time.' }
  ]
})
