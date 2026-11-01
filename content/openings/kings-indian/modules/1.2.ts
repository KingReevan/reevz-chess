import { defineModule } from '../../../types'
import { KID, CLASSICAL } from '../lines'

/** exchange-7dxe5: captures on e5 and d8 */
const CAPTURES = `${CLASSICAL} dxe5 dxe5 Qxd8 Rxd8`
/** samisch-7d5-nh5: a check and queenside castling */
const SAMISCH_CHECK = `${KID} f3 O-O Be3 e5 d5 Nh5 Qd2 Qh4+ Bf2 Qe7 O-O-O f5`
/** kid-5e5 up to 7.Nxd1: both black knights can reach d7 */
const TWO_KNIGHTS = `${KID} e5 dxe5 dxe5 Qxd1+ Nxd1`

export default defineModule({
  id: '1.2',
  title: 'Reading chess notation',
  minutes: 10,
  level: 1,
  goals: [
    'Name any square from its file letter and rank number',
    'Read piece letters, captures, checks and castling',
    'Tell White moves from Black moves, as in 6.Be2 and 6...e5'
  ],
  intro:
    'Every chess book, app and coach writes moves the same way. Once you can read "4...d6" or "8...Qh4+" at a glance, you can follow every line in this course. This module teaches the whole system with the King\'s Indian\'s own moves.',
  sections: [
    {
      kind: 'walkthrough',
      title: 'Squares, letters and move numbers',
      intro: 'Press Next and read each move out loud as you go.',
      moves: CLASSICAL,
      start: 0,
      orientation: 'white',
      steps: {
        0: {
          title: 'Every square has a name',
          text: "Columns are files, lettered a to h from White's left. Rows are ranks, numbered 1 to 8 from White's side. So the circled squares are a1, e4 and g7.",
          marks: ['a1', 'e4', 'g7']
        },
        1: {
          title: 'A pawn move',
          text: '1.d4. The number is the move number. No capital letter means a pawn moved, so a pawn went to d4. We only write the square where it lands.',
          marks: ['d4']
        },
        2: {
          title: 'Three dots for Black',
          text: "1...Nf6. The three dots mean this is Black's move, still move 1. N stands for knight, so Black's knight went to f6.",
          arrows: [['g8', 'f6', 'blue']]
        },
        3: {
          title: 'Another pawn move',
          text: '2.c4. No capital letter again, so a pawn moved: the c-pawn went to c4.',
          marks: ['c4']
        },
        4: {
          title: 'Black moves a pawn',
          text: "2...g6. Black's g-pawn went one square forward, to g6.",
          marks: ['g6']
        },
        5: {
          title: 'The piece letters',
          text: '3.Nc3. Each piece has a capital letter: K king, Q queen, R rook, B bishop and N knight (K was already taken by the king). Pawns have no letter.',
          arrows: [['b1', 'c3', 'blue']]
        },
        6: {
          title: 'B is a bishop',
          text: '3...Bg7. Black\'s bishop went to g7. You know it is Black\'s move because of the three dots.',
          arrows: [['f8', 'g7', 'blue']]
        },
        7: {
          title: 'The center pawn',
          text: '4.e4. White\'s e-pawn went to e4. White now has pawns on c4, d4 and e4.',
          marks: ['e4']
        },
        8: {
          title: 'The opening in one line',
          text: "4...d6. Written in full, the King's Indian is 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6. Each number is followed by White's move, then Black's.",
          marks: ['d6']
        },
        9: {
          title: 'Move five',
          text: '5.Nf3. White\'s other knight goes to f3.',
          arrows: [['g1', 'f3', 'blue']]
        },
        10: {
          title: 'O-O means castling',
          text: '5...O-O. Black castles on the kingside: the king goes to g8 and the rook to f8. These are capital letter Os, not zeros.',
          marks: ['g8', 'f8']
        },
        11: {
          title: 'White gets ready to castle',
          text: '6.Be2. White\'s bishop goes to e2. Now nothing stands between White\'s king and rook.',
          arrows: [['f1', 'e2', 'blue']]
        },
        12: {
          title: 'One Black move alone',
          text: "6...e5. When we talk about one Black move by itself, we write its number and three dots, like 6...e5. You'll see this style everywhere in the course.",
          marks: ['e5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'x means a capture',
      intro: 'Same position. This time White takes on e5 at once. Watch the x.',
      moves: CAPTURES,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'Two pawns face off',
          text: "White's d4-pawn and Black's e5-pawn attack each other. Either can take the other.",
          arrows: [['d4', 'e5', 'red'], ['e5', 'd4', 'red']]
        },
        13: {
          title: 'A pawn capture',
          text: '7.dxe5. The x means "takes". A pawn capture starts with the file the pawn came from, so dxe5 means the d-pawn took on e5.',
          marks: ['e5']
        },
        14: {
          title: 'Black takes back',
          text: "7...dxe5. Same rule for Black: Black's d-pawn took back on e5. Now the queens face each other on the open d-file.",
          arrows: [['d1', 'd8', 'yellow']]
        },
        15: {
          title: 'A queen capture',
          text: "8.Qxd8. White's queen takes Black's queen on d8. There is no + because Black's king is not attacked: the rook on f8 stands in the way.",
          marks: ['d8']
        },
        16: {
          title: 'A rook takes back',
          text: '8...Rxd8. The rook takes the queen. The queens are off the board. This line is the Exchange Variation, and Module 2.3 teaches it.',
          marks: ['d8']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'A check and long castling',
      intro: 'This position comes from a sharper White system, the Sämisch (Chapter 6): 5.f3 O-O 6.Be3 e5 7.d5 Nh5. Look for two new symbols.',
      moves: SAMISCH_CHECK,
      start: 14,
      orientation: 'white',
      steps: {
        14: {
          title: 'A new position',
          text: "White played f3 instead of Nf3, and Black's knight jumped to h5. Notice the open diagonal from h4 to e1.",
          arrows: [['h4', 'e1', 'blue']]
        },
        15: {
          title: 'The queen develops',
          text: "8.Qd2. White's queen goes to d2.",
          arrows: [['d1', 'd2', 'blue']]
        },
        16: {
          title: '+ means check',
          text: "8...Qh4+. Black's queen goes to h4 and attacks White's king on e1. A + at the end of a move always means check.",
          arrows: [['h4', 'e1', 'red']]
        },
        17: {
          title: 'Blocking the check',
          text: '9.Bf2. The bishop steps between the queen and the king. A block has no special symbol: it is just a bishop move.',
          arrows: [['e3', 'f2', 'green']]
        },
        18: {
          title: 'The queen steps back',
          text: "9...Qe7. Black's queen retreats to e7.",
          arrows: [['h4', 'e7', 'blue']]
        },
        19: {
          title: 'O-O-O is long castling',
          text: '10.O-O-O. Three Os mean castling on the queenside: the king goes to c1 and the rook to d1. Two Os, O-O, mean the kingside.',
          marks: ['c1', 'd1']
        },
        20: {
          title: 'Kings on opposite sides',
          text: '10...f5. A pawn move again. The kings now live on opposite wings, which makes for a sharp fight. Chapter 6 explains it.',
          marks: ['g8', 'c1']
        }
      }
    },
    {
      kind: 'text',
      title: 'A few more symbols',
      body:
        '**Two pieces, one square.** If two knights can go to the same square, we add the file the moving knight came from. **Nfd7** means the knight from the f-file goes to d7; **Nbd7** means the one from b8. You\'ll see both in this course.\n\n**Checkmate** is written #. **Promotion:** e8=Q means a pawn reached e8 and became a queen.\n\n**Results.** 1-0 means White won, 0-1 means Black won, and ½-½ is a draw.\n\n**Comments.** ! is a good move, !! a brilliant one, ? a mistake, ?? a blunder, !? an interesting try and ?! a doubtful one. They are opinions about a move, not part of the move itself.'
    },
    {
      kind: 'tip',
      title: 'Say it out loud',
      body:
        'Reading moves aloud makes them stick. "6...e5" is "Black\'s sixth move, pawn to e5". "8...Qh4+" is "Black\'s eighth move, queen to h4, check". After a few days you\'ll read notation without thinking.'
    }
  ],
  takeaway:
    "A move is the piece letter (none for pawns), an x for a capture, the square it lands on, and + for check. Three dots mean it is Black's move.",
  lookAhead:
    "Now you can read every line in the course. Next, Module 1.3 looks at the most important piece in Black's set-up: the bishop on g7.",
  drills: [
    {
      title: 'Read and play: Black',
      prompt: "You're Black. Play 5...O-O and 6...e5. Then, after White's 7.dxe5, play 7...dxe5, and after 8.Qxd8, play 8...Rxd8.",
      moves: CAPTURES,
      start: 8,
      side: 'black',
      hints: ['O-O is castling on the kingside. dxe5 means your d-pawn takes on e5.', '5...O-O, 6...e5, 7...dxe5 and 8...Rxd8.'],
      success: 'Well read. That is the Exchange Variation, played straight from notation.'
    },
    {
      title: 'Read and play: White',
      prompt: "You're White. Play 5.Nf3, 6.Be2 and 7.O-O. The app plays Black's replies.",
      moves: `${CLASSICAL} O-O`,
      start: 8,
      side: 'white',
      hints: ['N is a knight and B is a bishop. O-O is castling on the kingside.', 'Knight from g1 to f3, bishop from f1 to e2, then castle.'],
      success: "That's the Classical main line: 5.Nf3 O-O 6.Be2 e5 7.O-O. Chapter 2 starts here."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 3...Bg7 mean?',
      choices: [
        { text: "On move 3, Black's bishop goes to g7", correct: true, why: 'Right. Three dots mean Black, B means bishop, and g7 is where it lands.' },
        { text: "On move 3, White's bishop goes to g7", why: 'A White move has one dot: 3.Bg7. The three dots tell you it is Black.' },
        { text: 'On move 3, Black\'s bishop takes something on g7', why: 'A capture needs an x, as in 3...Bxg7. Here the bishop just moved.' }
      ]
    },
    {
      type: 'name',
      prompt: "White's d-pawn has just taken the pawn on e5. How is White's last move written?",
      moves: `${CLASSICAL} dxe5`,
      orientation: 'white',
      choices: [
        { text: '7.dxe5', correct: true, why: 'Yes. A pawn capture starts with the file the pawn came from.' },
        { text: '7.Pxe5', why: 'Pawns have no letter. We write the file they came from instead: dxe5.' },
        { text: '7...dxe5', why: "Three dots mean a Black move. This was White's 7th move, so it gets one dot." }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 5...O-O mean?',
      choices: [
        { text: 'Black castles on the kingside', correct: true, why: 'Right. The king goes to g8 and the rook to f8.' },
        { text: 'Black castles on the queenside', why: 'Castling on the queenside has three Os: O-O-O.' },
        { text: 'Black moves the queen twice', why: 'The queen is Q. O-O is the symbol for castling.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In 8...Qh4+, what does the + tell you?',
      choices: [
        { text: 'The move gives check', correct: true, why: 'Yes. + always means the king is attacked. Checkmate is #.' },
        { text: 'The move is a good one', why: 'A good move is marked with !, not +.' },
        { text: 'The queen captured something', why: 'A capture is shown with an x, as in Qxh4.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'How is checkmate written?',
      choices: [
        { text: '#', correct: true, why: 'Right. # at the end of a move means checkmate.' },
        { text: '+', why: '+ means check. The king is attacked but may still escape.' },
        { text: '!!', why: '!! means a brilliant move. It says nothing about checkmate.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Both black knights can go to d7. Black wants to move the knight from f6. How is the move written?',
      moves: TWO_KNIGHTS,
      orientation: 'black',
      choices: [
        { text: '7...Nfd7', correct: true, why: 'Yes. The extra f says which knight moves: the one from the f-file.' },
        { text: '7...Nd7', why: "Both knights can reach d7, so Nd7 doesn't say which one moved." },
        { text: '7...Nbd7', why: 'That would be the knight from b8 going to d7.' }
      ]
    }
  ],
  key: { name: 'Notation check: 1.d4 Nf6 2.c4 g6', moves: 'd4 Nf6 c4 g6', orientation: 'white' },
  terms: [
    { term: 'File', meaning: 'A column of squares, named by a letter from a to h.' },
    { term: 'Rank', meaning: "A row of squares, numbered 1 to 8 from White's side." },
    { term: 'Algebraic notation', meaning: 'The standard way to write moves: piece letter, x for a capture, then the square.' },
    { term: 'Check', meaning: 'An attack on the king, written +. Checkmate, where the king cannot escape, is written #.' }
  ]
})
