import { defineModule } from '../../../types'
import { FRENCH, ADVANCE, ADVANCE_QB6, WINAWER } from '../lines'

/** win-5a3: 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 (a capture with check, and a pawn capture) */
const WIN_5A3 = `${WINAWER} e5 c5 a3 Bxc3+ bxc3`
/** exch-4bd3, first 14 moves: 3.exd5 exd5 4.Bd3 Nc6 5.c3 Bd6 6.Nf3 Bg4 7.O-O Nge7 (castling and two knights for one square) */
const EXCH_NGE7 = `${FRENCH} exd5 exd5 Bd3 Nc6 c3 Bd6 Nf3 Bg4 O-O Nge7`

export default defineModule({
  id: '1.2',
  title: 'Reading notation through the French',
  minutes: 10,
  level: 1,
  goals: [
    'Name any square from its file letter and rank number',
    'Read piece letters, captures (x), checks (+) and castling (O-O)',
    'Tell White moves from Black moves, as in 5.Nf3 and 5...Qb6'
  ],
  intro:
    'Every chess book, app and coach writes moves the same way. Once you can read "5...Bxc3+" or "7...Nge7" at a glance, you can follow every line in this course. This module teaches the whole system with the moves of three French main lines.',
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Advance Variation, move by move',
      intro: 'Press Next and read each move out loud as you go.',
      moves: ADVANCE_QB6,
      start: 0,
      orientation: 'white',
      steps: {
        0: {
          title: 'Every square has a name',
          text: "Columns are files, lettered a to h from White's left. Rows are ranks, numbered 1 to 8 from White's side. So the circled squares are e4, d5 and e6.",
          marks: ['e4', 'd5', 'e6']
        },
        1: {
          title: 'A pawn move',
          text: '1.e4. The number is the move number. No capital letter means a pawn moved, so a pawn went to e4. We only write the square where it lands.',
          marks: ['e4']
        },
        2: {
          title: 'Three dots for Black',
          text: "1...e6. The three dots mean this is Black's move, still move 1. No capital letter, so it is a pawn: Black's e-pawn went to e6.",
          marks: ['e6']
        },
        3: {
          title: 'Move 2 for White',
          text: "2.d4. White's d-pawn went two squares, from d2 to d4.",
          marks: ['d4']
        },
        4: {
          title: 'Move 2 for Black',
          text: "2...d5. Black's d-pawn went two squares, to d5. It attacks the e4-pawn.",
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'A one-square push',
          text: '3.e5. The e-pawn moved one square, from e4 to e5. Again, only the landing square is written. This is the Advance Variation.',
          marks: ['e5']
        },
        6: {
          title: 'The c-pawn',
          text: "3...c5. Black's c-pawn went two squares, from c7 to c5. It attacks the d4-pawn.",
          arrows: [['c5', 'd4', 'red']]
        },
        7: {
          title: 'A defending pawn',
          text: "4.c3. White's c-pawn went one square. From c3 it defends d4.",
          arrows: [['c3', 'd4', 'green']]
        },
        8: {
          title: 'N is a knight',
          text: '4...Nc6. Each piece has a capital letter: K king, Q queen, R rook, B bishop and N knight (K was already taken by the king). So Black\'s knight went to c6, where it attacks d4.',
          arrows: [['b8', 'c6', 'blue'], ['c6', 'd4', 'red']]
        },
        9: {
          title: 'Another knight',
          text: "5.Nf3. White's knight went from g1 to f3. It defends d4 and e5.",
          arrows: [['g1', 'f3', 'blue'], ['f3', 'd4', 'green']]
        },
        10: {
          title: 'One Black move alone',
          text: "5...Qb6. When we talk about one Black move by itself, we write its number and three dots: 5...Qb6 is Black's fifth move, the queen to b6. It attacks the b2-pawn.",
          arrows: [['b6', 'b2', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Captures and checks: the Winawer',
      intro: 'A different third move for White. Look for the x and the +.',
      moves: WIN_5A3,
      start: 4,
      orientation: 'white',
      steps: {
        4: {
          title: 'The same start',
          text: '1.e4 e6 2.d4 d5. In full notation, each number is followed by White\'s move, then Black\'s.',
          marks: ['e4', 'd5']
        },
        5: {
          title: 'The knight defends',
          text: "3.Nc3. White's knight goes from b1 to c3 and defends the e4-pawn.",
          arrows: [['c3', 'e4', 'green']]
        },
        6: {
          title: 'B is a bishop',
          text: "3...Bb4. Black's bishop goes from f8 to b4. It pins the c3-knight: the knight can't move, because White's king on e1 stands behind it.",
          arrows: [['b4', 'e1', 'red']]
        },
        7: {
          title: 'A pawn push',
          text: "4.e5. White's e-pawn steps forward to e5.",
          marks: ['e5']
        },
        8: {
          title: 'Black hits d4',
          text: "4...c5. Black's c-pawn goes two squares and attacks d4.",
          arrows: [['c5', 'd4', 'red']]
        },
        9: {
          title: 'Asking the bishop',
          text: "5.a3. White's a-pawn goes one square and attacks the b4-bishop.",
          arrows: [['a3', 'b4', 'red']]
        },
        10: {
          title: 'x means takes, + means check',
          text: "5...Bxc3+. The x means a capture and the + means check. Black's bishop takes the knight on c3 and attacks White's king.",
          arrows: [['c3', 'e1', 'red']]
        },
        11: {
          title: 'A pawn capture',
          text: '6.bxc3. A pawn capture starts with the file the pawn came from. So bxc3 means "the b-pawn takes on c3". White now has two pawns on the c-file.',
          marks: ['c2', 'c3']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Castling and two knights for one square',
      intro: 'The Exchange Variation, a few moves in. Look for the Os and the extra letter.',
      moves: EXCH_NGE7,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'Both sides develop',
          text: 'The moves so far: 1.e4 e6 2.d4 d5 3.exd5 exd5 4.Bd3 Nc6 5.c3 Bd6. Read them one by one and find each piece on the board.',
          marks: ['d3', 'c6', 'c3', 'd6']
        },
        11: {
          title: 'The king\'s knight',
          text: "6.Nf3. White's knight goes from g1 to f3, clearing the way to castle.",
          arrows: [['g1', 'f3', 'blue']]
        },
        12: {
          title: 'A pin on the knight',
          text: "6...Bg4. Black's bishop goes to g4. It pins the f3-knight to White's queen on d1: if the knight moves, the queen can be taken.",
          arrows: [['g4', 'd1', 'red']]
        },
        13: {
          title: 'O-O is castling',
          text: "7.O-O. Castling on the kingside: White's king goes to g1 and the rook to f1. These are capital letter Os, not zeros. O-O-O, with three Os, is castling on the queenside.",
          marks: ['g1', 'f1']
        },
        14: {
          title: 'Which knight?',
          text: '7...Nge7. Both Black knights could go to e7: the one on c6 and the one on g8. The extra g says the knight from the g-file moved.',
          arrows: [['g8', 'e7', 'blue'], ['c6', 'e7', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'A few more symbols',
      body:
        '**Checkmate** is written #. **Promotion:** e8=Q means a pawn reached e8 and became a queen.\n\n**En passant.** A special pawn capture, sometimes marked "e.p." after the move. Module 1.8 shows one in a French trap.\n\n**Results.** 1-0 means White won, 0-1 means Black won, and ½-½ is a draw.\n\n**Comments.** ! is a good move, !! a brilliant one, ? a mistake, ?? a blunder, !? an interesting try and ?! a doubtful one. They are opinions about a move, not part of the move itself.'
    },
    {
      kind: 'tip',
      title: 'Say it out loud',
      body:
        'Reading moves aloud makes them stick. "5...Bxc3+" is "Black\'s fifth move, bishop takes on c3, check". "6.bxc3" is "White\'s sixth move, b-pawn takes on c3". After a few days you will read notation without thinking.'
    }
  ],
  takeaway:
    "A move is the piece letter (none for pawns), an x for a capture, the square it lands on, and + for check. One dot after the number means White's move; three dots mean Black's.",
  lookAhead:
    'Now you can read every line in the course. Module 1.3 looks at the position after 3.e5, where the pawns lock into two chains.',
  drills: [
    {
      title: 'Read and play: White',
      prompt: "You're White. Play 1.e4, 2.d4, 3.e5, 4.c3 and 5.Nf3. The app plays Black's replies.",
      moves: ADVANCE,
      start: 0,
      side: 'white',
      hints: ['No capital letter means a pawn. Nf3 means a knight goes to f3.', 'Pawn to e4, pawn to d4, pawn to e5, pawn to c3, knight from g1 to f3.'],
      success: 'Well read. That is the Advance Variation, played straight from notation.'
    },
    {
      title: 'Read and play: Black',
      prompt: "You're Black. Play 1...e6, 2...d5, 3...c5, 4...Nc6 and 5...Qb6.",
      moves: ADVANCE_QB6,
      start: 0,
      side: 'black',
      hints: ['Three dots mean your moves. Q is the queen and N is a knight.', 'Pawn to e6, pawn to d5, pawn to c5, knight from b8 to c6, queen from d8 to b6.'],
      success: 'That is the Advance main line: 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6. Chapter 2 starts from here.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 5...Bxc3+ mean?',
      choices: [
        { text: "On move 5, Black's bishop takes on c3 and gives check", correct: true, why: 'Right. Three dots mean Black, B is the bishop, x is a capture and + is check.' },
        { text: "On move 5, White's bishop takes on c3 and gives check", why: 'A White move has one dot, as in 5.Bxc3+. The three dots tell you it is Black.' },
        { text: "On move 5, Black's bishop takes on c3 and gives checkmate", why: 'Checkmate is written #. The + only means check.' }
      ]
    },
    {
      type: 'name',
      prompt: "White's b-pawn has just taken the bishop on c3. How is White's 6th move written?",
      moves: WIN_5A3,
      orientation: 'white',
      choices: [
        { text: '6.bxc3', correct: true, why: 'Yes. A pawn capture starts with the file the pawn came from (b), then x, then the square (c3).' },
        { text: '6.Bxc3', why: 'A capital B means a bishop. A pawn has no letter, so the capture starts with a small b for the b-file.' },
        { text: '6...bxc3', why: "Three dots mean a Black move. This was White's 6th move, so it gets one dot." },
        { text: '6.xc3', why: 'A pawn capture always names the file the pawn came from: bxc3.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 7...Nge7 mean?',
      moves: EXCH_NGE7,
      orientation: 'black',
      choices: [
        { text: "Black's knight from the g-file goes to e7", correct: true, why: 'Right. Both knights could reach e7, so the g tells you which one moved: the one from g8.' },
        { text: "Black's knight takes a piece on e7", why: 'A capture would have an x, as in Nxe7. Here the knight simply moves to an empty square.' },
        { text: 'A knight goes to g7 and then to e7', why: 'A move is always one piece going to one square. The g is only there to say which knight moved.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 7.O-O mean?',
      choices: [
        { text: 'White castles on the kingside', correct: true, why: 'Right. The king goes to g1 and the rook to f1.' },
        { text: 'White castles on the queenside', why: 'Castling on the queenside has three Os: O-O-O.' },
        { text: 'White moves the queen twice', why: 'The queen is Q. O-O is the symbol for castling.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'How many squares did the pawn move in 3...c5?',
      moves: `${FRENCH} e5 c5`,
      orientation: 'black',
      choices: [
        { text: 'Two: from c7 to c5', correct: true, why: 'Right. The c-pawn had not moved yet, so it started on c7 and could jump two squares.' },
        { text: 'One: from c6 to c5', why: "Black's c-pawn had not moved before, so it was still on its starting square, c7." },
        { text: 'It captured something on c5', why: 'A capture would have an x, as in dxc5. 3...c5 is a plain pawn move.' }
      ]
    },
    {
      type: 'name',
      prompt: "Black's queen goes from d8 to b6 on move 5. How is it written?",
      moves: ADVANCE_QB6,
      orientation: 'black',
      choices: [
        { text: '5...Qb6', correct: true, why: 'Yes. Three dots for Black, Q for the queen, then the square it lands on.' },
        { text: '5.Qb6', why: "One dot means a White move. Black's moves get three dots." },
        { text: '5...Kb6', why: 'K is the king. The queen is Q.' }
      ]
    }
  ],
  key: { name: 'Notation check: 7...Nge7', moves: EXCH_NGE7, orientation: 'black' },
  terms: [
    { term: 'File', meaning: 'A column of squares, named by a letter from a to h.' },
    { term: 'Rank', meaning: "A row of squares, numbered 1 to 8 from White's side." },
    { term: 'Algebraic notation', meaning: 'The standard way to write moves: piece letter, x for a capture, then the square.' },
    { term: 'Castling', meaning: 'A move of the king and a rook together, written O-O on the kingside and O-O-O on the queenside.' }
  ]
})
