import { defineModule } from '../../../types'
import { RUY, MORPHY } from '../../../lines'

const FIRST = `${RUY} a6`
const SYMBOLS = `${RUY} Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+ Kxd8`

export default defineModule({
  id: '1.2',
  title: 'Reading chess notation',
  minutes: 10,
  level: 1,
  goals: [
    'Name any square from its file letter and rank number',
    'Read piece letters, captures, checks and castling',
    'Tell White moves from Black moves, as in 3.Bb5 and 3...a6'
  ],
  intro:
    'Every chess book, app and coach writes moves the same way. Once you can read "3...a6" or "8.Qxd8+" at a glance, you can follow any line in this course. This module teaches the whole system in two short games.',
  sections: [
    {
      kind: 'walkthrough',
      title: 'Squares, pieces and move numbers',
      intro: 'Press Next and read each move out loud as you go.',
      moves: FIRST,
      start: 0,
      orientation: 'white',
      steps: {
        0: {
          title: 'Every square has a name',
          text: 'Columns are files, lettered a to h from White\'s left. Rows are ranks, numbered 1 to 8 from White\'s side. So the circled squares are a1, e4 and h8.',
          marks: ['a1', 'e4', 'h8']
        },
        1: {
          title: 'A pawn move',
          text: '1.e4. The number is the move number. No capital letter means a pawn moved, so a pawn went to e4. We only write the square it lands on.',
          marks: ['e4']
        },
        2: {
          title: 'Three dots for Black',
          text: '1...e5. The three dots mean this is Black\'s move, still move 1. Black\'s pawn went to e5.',
          marks: ['e5']
        },
        3: {
          title: 'Capital letters are pieces',
          text: '2.Nf3. K is king, Q queen, R rook, B bishop and N knight (K was taken by the king). So 2.Nf3 means a knight went to f3.',
          arrows: [['g1', 'f3', 'blue']]
        },
        4: {
          title: 'Same letters for Black',
          text: '2...Nc6. Black uses the same letters. You know it\'s Black\'s knight because of the three dots.',
          arrows: [['b8', 'c6', 'blue']]
        },
        5: {
          title: 'The Ruy Lopez',
          text: '3.Bb5. A bishop goes to b5. Written in full, this opening is 1.e4 e5 2.Nf3 Nc6 3.Bb5. You\'ll see that string a lot.',
          arrows: [['f1', 'b5', 'blue']]
        },
        6: {
          title: 'One Black move alone',
          text: '3...a6. Black\'s third move: a pawn to a6. When we mention one Black move by itself, we write its number and three dots, just like this.',
          marks: ['a6']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Captures, checks and castling',
      intro: 'Same start, but Black plays 3...Nf6. This short line uses almost every symbol you need.',
      moves: SYMBOLS,
      start: 5,
      orientation: 'white',
      steps: {
        5: {
          title: 'Back to 3.Bb5',
          text: 'We start from the Ruy Lopez position again. Watch for three new symbols: x, + and O-O.'
        },
        6: {
          title: 'A plain knight move',
          text: '3...Nf6. Black\'s knight goes to f6. It attacks the e4-pawn.',
          arrows: [['f6', 'e4', 'red']]
        },
        7: {
          title: 'O-O means castling',
          text: '4.O-O. White castles on the kingside: the king goes to g1 and the rook to f1. Castling on the queenside is written O-O-O. These are capital letter O, not zeros.',
          marks: ['g1', 'f1']
        },
        8: {
          title: 'x means a capture',
          text: '4...Nxe4. The x means "takes". The knight took whatever stood on e4, here a pawn.',
          marks: ['e4']
        },
        9: {
          title: 'Another pawn move',
          text: '5.d4. A pawn goes to d4. It attacks the e5-pawn.',
          arrows: [['d4', 'e5', 'red']]
        },
        10: {
          title: 'A quiet retreat',
          text: '5...Nd6. The knight goes back to d6. No x and no +, so nothing was captured and there\'s no check.',
          arrows: [['e4', 'd6', 'blue']]
        },
        11: {
          title: 'A bishop captures',
          text: '6.Bxc6. Read it as "bishop takes on c6". The bishop removed the knight on c6.',
          marks: ['c6']
        },
        12: {
          title: 'When a pawn captures',
          text: '6...dxc6. A pawn capture starts with the file the pawn came from. So dxc6 means the d-pawn took on c6.',
          arrows: [['d7', 'c6', 'blue']]
        },
        13: {
          title: 'Same rule for White',
          text: '7.dxe5. White\'s d-pawn takes on e5. The new pawn on e5 attacks the knight on d6.',
          arrows: [['e5', 'd6', 'red']]
        },
        14: {
          title: 'The d-file opens',
          text: '7...Nf5. The knight moves away, and now nothing stands between the two queens on the d-file.',
          arrows: [['d1', 'd8', 'red']]
        },
        15: {
          title: '+ means check',
          text: '8.Qxd8+. The queen takes on d8 and gives check. A + at the end always means check. Checkmate is written #.',
          arrows: [['d8', 'e8', 'red']]
        },
        16: {
          title: 'K is the king',
          text: '8...Kxd8. The king takes the queen. Queens are off the board. This is the famous Berlin endgame, which you\'ll study in Chapter 7.',
          marks: ['d8']
        }
      }
    },
    {
      kind: 'text',
      title: 'A few more symbols',
      body:
        '**Two pieces, one square.** If two knights could both go to d2, we add the file the moving knight came from. **Nbd2** means the knight from the b-file goes to d2. You\'ll see Nbd2 often in the Ruy Lopez.\n\n**Promotion.** e8=Q means a pawn reached e8 and became a queen.\n\n**Comments.** ! is a good move, !! a brilliant one, ? a mistake, ?? a blunder, !? an interesting try and ?! a doubtful one. They are opinions about a move, not part of the move itself.'
    },
    {
      kind: 'tip',
      title: 'Say it out loud',
      body:
        'Reading moves aloud makes them stick. "3...a6" is "Black\'s third move, pawn to a6". "8.Qxd8+" is "move eight, queen takes d8, check". After a few days you\'ll read notation without thinking.'
    }
  ],
  takeaway:
    'A move is the piece letter (none for pawns), an x for a capture, the square it lands on, and + for check. Three dots mean it is Black\'s move.',
  lookAhead:
    'Now you can read the opening\'s name as moves: 1.e4 e5 2.Nf3 Nc6 3.Bb5. Next, you\'ll meet the Ruy Lopez itself.',
  drills: [
    {
      title: 'Read and play: White',
      prompt: "You're White. Play the moves 1.e4, 2.Nf3 and 3.Bb5. The app will play Black's replies.",
      moves: RUY,
      start: 0,
      side: 'white',
      hints: ['No capital letter means a pawn move. Then N is a knight and B is a bishop.', 'Pawn to e4, knight to f3, bishop to b5.'],
      success: "You just played the Ruy Lopez from notation alone: 1.e4 e5 2.Nf3 Nc6 3.Bb5."
    },
    {
      title: 'Read and play: Black',
      prompt: "You're Black. Play 3...a6, 4...Nf6 and 5...Be7.",
      moves: `${MORPHY} Be7`,
      start: 5,
      side: 'black',
      hints: ['The three dots tell you these are your moves as Black.', 'Pawn to a6, then knight to f6, then bishop to e7.'],
      success: 'Well read. That is the start of the Closed Ruy Lopez, the main road of this course.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 2.Nf3 mean?',
      choices: [
        { text: "On move 2, White's knight goes to f3", correct: true, why: 'Right. N stands for knight, and f3 is where it lands.' },
        { text: "On move 2, White's king goes to f3", why: 'The king is K. N is used for the knight because K was already taken.' },
        { text: 'On move 2, Black\'s knight goes to f3', why: 'A Black move would have three dots: 2...Nf3.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In 3...a6, what do the three dots tell you?',
      choices: [
        { text: 'It is a Black move', correct: true, why: 'Yes. Three dots after the number always mean Black\'s move.' },
        { text: 'The move is a mistake', why: 'A mistake is marked with ?, not with dots.' },
        { text: 'Some moves were skipped', why: 'Nothing is skipped. The dots just show it\'s Black\'s turn in move 3.' }
      ]
    },
    {
      type: 'name',
      prompt: "Black's knight has just taken the pawn on e4. How is Black's last move written?",
      moves: `${RUY} Nf6 O-O Nxe4`,
      orientation: 'white',
      choices: [
        { text: '4...Nxe4', correct: true, why: 'Right: Black\'s 4th move, knight takes on e4.' },
        { text: '4...Ne4', why: 'A capture needs an x. Ne4 would mean the knight moved to an empty square.' },
        { text: '4.Nxe4', why: 'One dot means a White move. Black\'s moves get three dots.' }
      ]
    },
    {
      type: 'concept',
      prompt: "White's pawn on d4 takes a piece on e5. How is that written?",
      choices: [
        { text: 'dxe5', correct: true, why: 'Yes. A pawn capture starts with the file the pawn came from.' },
        { text: 'Pxe5', why: 'Pawns have no letter. We write the file they came from instead.' },
        { text: 'e5', why: 'That would be a pawn moving to an empty e5. A capture needs the x.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'How do you write castling on the kingside?',
      choices: [
        { text: 'O-O', correct: true, why: 'Right. Two Os for the short side, the kingside.' },
        { text: 'O-O-O', why: 'Three Os is castling on the queenside, the long side.' },
        { text: 'Kg1', why: 'Castling moves two pieces, so it has its own symbol: O-O.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White wants to move the knight on b1 to d2. The knight on f3 could also go to d2. How is the move written?',
      moves: 'e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 d3 Be7',
      orientation: 'white',
      choices: [
        { text: 'Nbd2', correct: true, why: 'Yes. The extra b says which knight moves: the one from the b-file.' },
        { text: 'Nd2', why: "Both knights can reach d2, so Nd2 doesn't say which one moved." },
        { text: 'Nfd2', why: 'That would be the knight from f3 going to d2.' }
      ]
    }
  ],
  key: { name: 'Notation check: 1.e4 e5 2.Nf3 Nc6', moves: 'e4 e5 Nf3 Nc6', orientation: 'white' },
  terms: [
    { term: 'File', meaning: 'A column of squares, named by a letter from a to h.' },
    { term: 'Rank', meaning: 'A row of squares, numbered 1 to 8 from White\'s side.' },
    { term: 'Algebraic notation', meaning: 'The standard way to write moves: piece letter, x for a capture, then the square.' },
    { term: 'Check', meaning: 'An attack on the king, written +. Checkmate, where the king cannot escape, is written #.' }
  ]
})
