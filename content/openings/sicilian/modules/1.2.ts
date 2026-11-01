import { defineModule } from '../../../types'
import { OPEN, NAJDORF } from '../lines'

/** moscow-bd7-oo, first moves: 3.Bb5+ Bd7 4.Bxd7+ Qxd7 5.O-O (checks, a capture and castling) */
const CHECKS = 'e4 c5 Nf3 d6 Bb5+ Bd7 Bxd7+ Qxd7 O-O'
/** prins-5f3 up to 6.Bb5+: both black knights can reach d7 */
const TWO_KNIGHTS = 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 f3 e5 Bb5+'

export default defineModule({
  id: '1.2',
  title: 'Reading notation through the Open Sicilian',
  minutes: 10,
  level: 1,
  goals: [
    'Name any square from its file letter and rank number',
    'Read piece letters, captures (x), checks (+) and castling (O-O)',
    'Tell White moves from Black moves, as in 5.Nc3 and 5...a6'
  ],
  intro:
    'Every chess book, app and coach writes moves the same way. Once you can read "3...cxd4" or "3.Bb5+" at a glance, you can follow every line in this course. This module teaches the whole system with the moves of the Open Sicilian, the main line you will meet again and again.',
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Open Sicilian, move by move',
      intro: 'Press Next and read each move out loud as you go.',
      moves: NAJDORF,
      start: 0,
      orientation: 'white',
      steps: {
        0: {
          title: 'Every square has a name',
          text: "Columns are files, lettered a to h from White's left. Rows are ranks, numbered 1 to 8 from White's side. So the circled squares are c5, d4 and e4.",
          marks: ['c5', 'd4', 'e4']
        },
        1: {
          title: 'A pawn move',
          text: '1.e4. The number is the move number. No capital letter means a pawn moved, so a pawn went to e4. We only write the square where it lands.',
          marks: ['e4']
        },
        2: {
          title: 'Three dots for Black',
          text: "1...c5. The three dots mean this is Black's move, still move 1. No capital letter, so it is a pawn: Black's c-pawn went to c5.",
          marks: ['c5']
        },
        3: {
          title: 'N is a knight',
          text: '2.Nf3. Each piece has a capital letter: K king, Q queen, R rook, B bishop and N knight (K was already taken by the king). So White\'s knight went to f3.',
          arrows: [['g1', 'f3', 'blue']]
        },
        4: {
          title: 'Another pawn move',
          text: "2...d6. Black's d-pawn went one square forward, to d6.",
          marks: ['d6']
        },
        5: {
          title: 'White pushes the d-pawn',
          text: "3.d4. White's d-pawn went two squares, to d4. Now the c5-pawn can take it.",
          arrows: [['c5', 'd4', 'red']]
        },
        6: {
          title: 'x means takes',
          text: '3...cxd4. The x means a capture. A pawn capture starts with the file the pawn came from, so cxd4 means "the c-pawn takes on d4".',
          marks: ['d4']
        },
        7: {
          title: 'A knight capture',
          text: '4.Nxd4. For a piece, the letter comes first: the knight takes on d4. White has won the pawn back.',
          arrows: [['f3', 'd4', 'blue']]
        },
        8: {
          title: 'Black develops',
          text: "4...Nf6. Black's knight goes from g8 to f6, where it attacks the pawn on e4.",
          arrows: [['g8', 'f6', 'blue'], ['f6', 'e4', 'red']]
        },
        9: {
          title: 'The Open Sicilian',
          text: '5.Nc3. The other White knight goes to c3 and defends e4. In full: 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3. Each number is followed by White\'s move, then Black\'s.',
          arrows: [['b1', 'c3', 'blue'], ['c3', 'e4', 'green']]
        },
        10: {
          title: 'One Black move alone',
          text: "5...a6. When we talk about one Black move by itself, we write its number and three dots. 5...a6 is the Najdorf, Black's most famous Sicilian (Chapter 2).",
          marks: ['a6']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Checks, a capture and castling',
      intro: 'A different third move for White, the Moscow Variation (Chapter 9). Look for the + and the Os.',
      moves: CHECKS,
      start: 4,
      orientation: 'white',
      steps: {
        4: {
          title: 'The same start',
          text: "After 1.e4 c5 2.Nf3 d6, the pawn on d6 has left d7. The diagonal from b5 to Black's king on e8 is empty.",
          arrows: [['b5', 'e8', 'blue']]
        },
        5: {
          title: '+ means check',
          text: "3.Bb5+. White's bishop goes to b5 and attacks Black's king. A + at the end of a move always means check.",
          arrows: [['b5', 'e8', 'red']]
        },
        6: {
          title: 'Blocking the check',
          text: "3...Bd7. Black's bishop steps in between. A block has no special symbol: it is just a bishop move to d7.",
          arrows: [['c8', 'd7', 'green']]
        },
        7: {
          title: 'A capture with check',
          text: "4.Bxd7+. White's bishop takes the bishop on d7, and the king is in check again. The x and the + can appear in the same move.",
          arrows: [['d7', 'e8', 'red']]
        },
        8: {
          title: 'The queen takes back',
          text: "4...Qxd7. Black's queen takes the bishop. Bishops have been traded, and the check is over.",
          marks: ['d7']
        },
        9: {
          title: 'O-O is castling',
          text: '5.O-O. Castling on the kingside: White\'s king goes to g1 and the rook to f1. These are capital letter Os, not zeros. O-O-O, with three Os, is castling on the queenside.',
          marks: ['g1', 'f1']
        }
      }
    },
    {
      kind: 'text',
      title: 'A few more symbols',
      body:
        '**Two pieces, one square.** If two knights can go to the same square, we add the file the moving knight came from. **Nbd7** means the knight from the b-file goes to d7; **Nfd7** means the one from f6. Sicilian players write ...Nbd7 all the time.\n\n**Checkmate** is written #. **Promotion:** e8=Q means a pawn reached e8 and became a queen.\n\n**Results.** 1-0 means White won, 0-1 means Black won, and ½-½ is a draw.\n\n**Comments.** ! is a good move, !! a brilliant one, ? a mistake, ?? a blunder, !? an interesting try and ?! a doubtful one. They are opinions about a move, not part of the move itself.'
    },
    {
      kind: 'tip',
      title: 'Say it out loud',
      body:
        'Reading moves aloud makes them stick. "3...cxd4" is "Black\'s third move, c-pawn takes on d4". "3.Bb5+" is "White\'s third move, bishop to b5, check". After a few days you will read notation without thinking.'
    }
  ],
  takeaway:
    "A move is the piece letter (none for pawns), an x for a capture, the square it lands on, and + for check. One dot after the number means White's move; three dots mean Black's.",
  lookAhead:
    'Now you can read every line in the course. Module 1.3 looks closely at the trade you just read, 3.d4 cxd4 4.Nxd4, and what it gives each side.',
  drills: [
    {
      title: 'Read and play: White',
      prompt: "You're White. Play 1.e4, 2.Nf3, 3.d4, 4.Nxd4 and 5.Nc3. The app plays Black's replies.",
      moves: OPEN,
      start: 0,
      side: 'white',
      hints: ['N is a knight. Nxd4 means your knight takes on d4.', 'Pawn to e4, knight g1 to f3, pawn to d4, knight takes on d4, knight b1 to c3.'],
      success: 'Well read. That is the Open Sicilian, played straight from notation.'
    },
    {
      title: 'Read and play: Black',
      prompt: "You're Black. Play 1...c5, 2...d6, 3...cxd4, 4...Nf6 and 5...a6.",
      moves: NAJDORF,
      start: 0,
      side: 'black',
      hints: ['cxd4 means your c-pawn takes on d4.', 'Pawn to c5, pawn to d6, c-pawn takes on d4, knight g8 to f6, pawn to a6.'],
      success: 'That is the Najdorf, 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6. Chapter 2 starts here.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 3...cxd4 mean?',
      choices: [
        { text: "On move 3, Black's c-pawn takes on d4", correct: true, why: 'Right. Three dots mean Black, no letter means a pawn, c is the file it came from, and x means it captured.' },
        { text: "On move 3, White's c-pawn takes on d4", why: 'A White move has one dot: 3.cxd4. The three dots tell you it is Black.' },
        { text: "On move 3, Black's knight takes on d4", why: 'A knight move starts with N, as in 3...Nxd4. No capital letter means a pawn.' }
      ]
    },
    {
      type: 'name',
      prompt: "White's knight has just taken the pawn on d4. How is White's 4th move written?",
      moves: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4',
      orientation: 'white',
      choices: [
        { text: '4.Nxd4', correct: true, why: 'Yes. N for knight, x for takes, d4 for the square, and one dot because it is White.' },
        { text: '4.Kxd4', why: 'K is the king. The knight is N, because K was already taken.' },
        { text: '4...Nxd4', why: "Three dots mean a Black move. This was White's 4th move, so it gets one dot." },
        { text: '4.Nd4', why: 'The knight captured a pawn, so the move needs an x: Nxd4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In 3.Bb5+, what does the + tell you?',
      choices: [
        { text: 'The move gives check', correct: true, why: 'Yes. + always means the king is attacked. Checkmate is #.' },
        { text: 'The move is a good one', why: 'A good move is marked with !, not +.' },
        { text: 'The bishop captured something', why: 'A capture is shown with an x, as in Bxd7+.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 5.O-O mean?',
      choices: [
        { text: 'White castles on the kingside', correct: true, why: 'Right. The king goes to g1 and the rook to f1.' },
        { text: 'White castles on the queenside', why: 'Castling on the queenside has three Os: O-O-O.' },
        { text: 'White moves the queen twice', why: 'The queen is Q. O-O is the symbol for castling.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Both black knights can go to d7. Black wants to block the check with the knight from b8. How is the move written?',
      moves: TWO_KNIGHTS,
      orientation: 'black',
      choices: [
        { text: '6...Nbd7', correct: true, why: 'Yes. The extra b says which knight moves: the one from the b-file.' },
        { text: '6...Nd7', why: "Both knights can reach d7, so Nd7 doesn't say which one moved." },
        { text: '6...Nfd7', why: 'That would be the knight from f6 going to d7.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does O-O-O mean?',
      choices: [
        { text: 'Castling on the queenside', correct: true, why: 'Right. For White, the king goes to c1 and the rook to d1. For Black, the king goes to c8 and the rook to d8.' },
        { text: 'Castling on the kingside', why: 'Kingside castling has two Os: O-O.' },
        { text: 'Three moves in a row by the queen', why: 'The queen is Q. Os are only used for castling.' }
      ]
    }
  ],
  key: { name: 'Notation check: 3...cxd4', moves: 'e4 c5 Nf3 d6 d4 cxd4', orientation: 'white' },
  terms: [
    { term: 'File', meaning: 'A column of squares, named by a letter from a to h.' },
    { term: 'Rank', meaning: "A row of squares, numbered 1 to 8 from White's side." },
    { term: 'Algebraic notation', meaning: 'The standard way to write moves: piece letter, x for a capture, then the square.' },
    { term: 'Check', meaning: 'An attack on the king, written +. Checkmate, where the king cannot escape, is written #.' }
  ]
})
