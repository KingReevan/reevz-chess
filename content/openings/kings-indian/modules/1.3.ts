import { defineModule } from '../../../types'
import { KID, FIANCHETTO } from '../lines'

/** kid-5nf3-oo */
const SETUP = `${KID} Nf3 O-O`
/** samisch-bh6: White trades the g7-bishop */
const BH6 = `${KID} f3 O-O Be3 a6 Qd2 c6 Bh6 e5 Bxg7 Kxg7`
/** model-zita-bronstein-1946, up to 18...Nxf2 */
const ZITA_BRONSTEIN =
  'c4 e5 Nc3 Nf6 Nf3 d6 d4 Nbd7 g3 g6 Bg2 Bg7 O-O O-O b3 Re8 Bb2 c6 e4 exd4 Nxd4 Qb6 Qd2 Nc5 Rfe1 a5 Rab1 a4 Ba1 axb3 axb3 Ng4 h3 Rxa1 Rxa1 Nxf2'
/** the same game after 17.h3 */
const ZB_17H3 = ZITA_BRONSTEIN.split(' ').slice(0, 33).join(' ')

export default defineModule({
  id: '1.3',
  title: 'The fianchetto bishop and the long diagonal',
  minutes: 11,
  level: 1,
  goals: [
    'See the two jobs of the g7-bishop: guard the king and aim at the center',
    'Understand why Black rarely gives this bishop away',
    "Recognize White's plan to trade it with Be3, Qd2 and Bh6"
  ],
  intro:
    "In the King's Indian, one black piece matters more than any other: the bishop on g7. It shields the king and stares down the longest diagonal on the board. This module shows what the bishop does, why Black guards it so carefully, and how White tries to get rid of it.",
  sections: [
    {
      kind: 'walkthrough',
      title: "The bishop's two jobs",
      intro: 'Follow the bishop from f8 to g7, and watch where its diagonal points.',
      moves: SETUP,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'Room for the bishop',
          text: '2...g6. The g-pawn steps forward and leaves a home for the bishop on g7. Moving the knight\'s pawn and putting the bishop behind it is a fianchetto.',
          arrows: [['f8', 'g7', 'green']]
        },
        5: {
          title: 'A knight on the diagonal',
          text: '3.Nc3. White\'s knight lands on c3. Keep an eye on it: c3 is on the same long diagonal the bishop is about to use.',
          marks: ['c3']
        },
        6: {
          title: 'The long diagonal',
          text: '3...Bg7. The diagonal runs g7, f6, e5, d4, c3, b2, a1. For now Black\'s own knight on f6 blocks the view.',
          arrows: [['g7', 'a1', 'blue']],
          marks: ['f6']
        },
        7: {
          title: 'A pawn in the sights',
          text: '4.e4. White builds the big center. The d4-pawn stands right on the bishop\'s diagonal.',
          marks: ['d4']
        },
        8: {
          title: 'Job one: the center',
          text: '4...d6. When the f6-knight moves away, the bishop will hit d4, and behind d4 the same line runs on to c3 and b2. That pressure supports Black\'s later strike with ...c5. After ...e5, Black\'s own pawn blocks the bishop until the center opens.',
          arrows: [['g7', 'd4', 'yellow']],
          marks: ['d4', 'c3', 'b2']
        },
        9: {
          title: 'White guards d4',
          text: '5.Nf3. The knight defends d4. White is always aware of the bishop on g7.',
          arrows: [['f3', 'd4', 'green']]
        },
        10: {
          title: 'Job two: the king',
          text: '5...O-O. Now the king sits right next to the bishop. The bishop guards the dark squares f6 and h6 near the king, and it fills the g7-square in front of it.',
          marks: ['f6', 'h6', 'g8']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why Black keeps it',
      body:
        "The g7-bishop moves only on dark squares. If it disappears, the dark squares around Black's king (f6, g7 and h6) lose their best defender, and White's queen and knights may be able to land there.\n\nSo Black rarely trades this bishop for a knight with ...Bxc3. Even when Black's own pawn on e5 blocks it for a while, the bishop keeps guarding the king, and it springs to life the moment the center opens.\n\nFor White it's the other way round. In several systems White tries to trade it off, usually with Be3, Qd2 and Bh6. That plan is the heart of the Sämisch (Chapter 6)."
    },
    {
      kind: 'walkthrough',
      title: "White's plan: trade the bishop",
      intro: 'This is the Sämisch: 5.f3 O-O 6.Be3 a6. Watch how White lines up to swap off the g7-bishop.',
      moves: BH6,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'A bishop with a mission',
          text: "White's dark-squared bishop on e3 has a route to h6. From there it can offer a trade for the g7-bishop.",
          arrows: [['e3', 'h6', 'blue']]
        },
        13: {
          title: 'The queen backs it up',
          text: '7.Qd2. The queen lines up behind the bishop. After Bh6, if Black takes on h6, the queen takes back.',
          arrows: [['d2', 'h6', 'green']]
        },
        14: {
          title: 'Black prepares play',
          text: '7...c6. Black gets ready for ...b5 on the queenside and doesn\'t worry about the bishop yet.',
          arrows: [['b7', 'b5', 'blue']]
        },
        15: {
          title: 'The trade offer',
          text: '8.Bh6. The bishop attacks the g7-bishop. White wants to remove the best defender of Black\'s king.',
          arrows: [['h6', 'g7', 'red']]
        },
        16: {
          title: 'Black hits the center',
          text: '8...e5. Black lets the bishop go and strikes at d4 instead. A strong center helps make up for the missing bishop.',
          arrows: [['e5', 'd4', 'red']]
        },
        17: {
          title: 'The bishops come off',
          text: '9.Bxg7. White removes the g7-bishop.',
          marks: ['g7']
        },
        18: {
          title: 'A holey king',
          text: '9...Kxg7. Black has a solid center, so the position is roughly level. But the dark squares f6 and h6 have lost their best guard, the bishop. In Chapter 6 you\'ll see how White attacks them by adding h4–h5.',
          marks: ['f6', 'h6']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The legend of the dark-squared bishop',
      intro: "Zita–Bronstein, Prague–Moscow match 1946. The game began 1.c4 e5 and White fianchettoed too, but Black's set-up is the King's Indian one. Bronstein's g7-bishop faces White's bishop on a1 along the same diagonal.",
      moves: ZITA_BRONSTEIN,
      start: 31,
      orientation: 'black',
      steps: {
        31: {
          title: 'Two bishops, one diagonal',
          text: "White's bishop on a1 and Black's bishop on g7 stand on the same long diagonal. Between them are White's knights on c3 and d4, and Black's knight on f6.",
          arrows: [['g7', 'a1', 'blue']],
          marks: ['a1', 'g7']
        },
        32: {
          title: 'The diagonal opens',
          text: '16...Ng4. The f6-knight jumps away. Now the g7-bishop looks straight down the long diagonal at the d4-knight.',
          arrows: [['g7', 'd4', 'yellow']]
        },
        33: {
          title: 'A natural mistake',
          text: '17.h3. White kicks the knight. It looks natural, but it does nothing to protect d4 or f2, and Black has a powerful idea.',
          arrows: [['h3', 'g4', 'red']],
          ann: '?'
        },
        34: {
          title: 'A rook for the rival bishop',
          text: "17...Rxa1. Black gives up a rook for White's dark-squared bishop. Now White has no bishop left that can fight the g7-bishop on the dark squares.",
          marks: ['a1'],
          ann: '!'
        },
        35: {
          title: 'White is ahead in material',
          text: '18.Rxa1. White takes back and is ahead in material: a rook against a bishop. But material is not everything. Look at the pawn on f2.',
          marks: ['f2']
        },
        36: {
          title: 'Into the dark squares',
          text: "18...Nxf2. Instead of retreating from the h3-pawn, the knight grabs the pawn next to White's king. The engine confirms that Black's attack is now winning, and Bronstein went on to win the game.",
          arrows: [['g4', 'f2', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'history',
      title: 'Where the legend comes from',
      body:
        'A chess.com writer says Zita–Bronstein "inspired many and helped form the legend of the DSB", short for the dark-squared bishop. In the game Black gave up a rook for White\'s dark-squared bishop so that the g7-bishop had no rival on the dark squares, and Black won.'
    }
  ],
  takeaway:
    "The g7-bishop guards the dark squares around Black's king and aims down the long diagonal at d4, c3 and b2. Black keeps it; White often tries to trade it with Be3, Qd2 and Bh6.",
  lookAhead:
    'Next, Module 1.4 shows the second half of the set-up: castling behind the bishop before the fight begins.',
  drills: [
    {
      title: "Bronstein's idea",
      prompt: "You're Black in Zita–Bronstein. White just played 17.h3, attacking your knight. Find the move that removes White's dark-squared bishop, then keep attacking.",
      moves: ZITA_BRONSTEIN,
      start: 33,
      side: 'black',
      hints: ['Which white piece fights your g7-bishop for the long diagonal?', 'The a-file is open: your rook on a8 can reach a1. After White takes back, look at f2.'],
      success: '17...Rxa1! and 18...Nxf2! Black gave a rook to rule the dark squares, and the attack won the game.'
    },
    {
      title: 'Fianchetto for White',
      prompt: "You're White. White can fianchetto too. Play 3.Nf3, 4.g3, 5.Bg2 and 6.O-O: this is the Fianchetto Variation (Chapter 8).",
      moves: FIANCHETTO,
      start: 4,
      side: 'white',
      hints: ['Develop the g1-knight first, then move the g-pawn one square.', 'Nf3, g3, Bg2, then castle with O-O.'],
      success: "Now both sides have a fianchetto. White's g2-bishop guards White's king the same way the g7-bishop guards Black's."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Which squares does the g7-bishop aim at along the long diagonal?',
      choices: [
        { text: 'f6, e5, d4, c3, b2 and a1', correct: true, why: 'Yes. That is the a1–h8 diagonal, the longest on the board.' },
        { text: 'h6 and f8', why: 'The bishop can reach those squares too, but they are short diagonals. The long one runs to a1.' },
        { text: 'g5, g4 and g3', why: 'Those are on the g-file. Bishops move diagonally, never straight ahead.' }
      ]
    },
    {
      type: 'concept',
      prompt: "How does the g7-bishop help Black's king after castling?",
      choices: [
        { text: 'It guards the dark squares near the king, like f6 and h6', correct: true, why: 'Right. Without the bishop those squares lose their best defender.' },
        { text: 'It guards the light squares f7 and h7', why: 'The g7-bishop moves only on dark squares. f7 and h7 are light.' },
        { text: "It attacks White's king directly", why: "It aims at White's center and queenside. Its main defensive job is guarding the dark squares near Black's own king." }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Sämisch, why does White play Qd2 and Bh6?',
      moves: `${KID} f3 O-O Be3 a6 Qd2 c6 Bh6`,
      orientation: 'white',
      choices: [
        { text: "To trade off the g7-bishop, the best defender of Black's king", correct: true, why: 'Yes. Without it, the dark squares around the king become weak.' },
        { text: 'To win the h7-pawn', why: 'The bishop on h6 is not attacking h7. Its target is the g7-bishop.' },
        { text: 'To prepare castling on the kingside', why: 'Castling needs the f1-bishop and g1-knight to move, not Bh6. The aim is the trade on g7.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'When does the g7-bishop look straight at d4?',
      moves: SETUP,
      orientation: 'black',
      choices: [
        { text: 'When the f6-knight moves out of the way', correct: true, why: 'Yes. The knight on f6 blocks the diagonal. Once it moves, the bishop hits d4.' },
        { text: 'Only after Black castles', why: 'Castling moves the king and rook. It does not change what the bishop sees.' },
        { text: 'Never: the bishop only defends', why: 'The bishop has two jobs. Defending the king is one; pressing on the center is the other.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why does Black rarely play ...Bxc3, giving up the g7-bishop for a knight?',
      choices: [
        { text: "The dark squares around Black's king would lose their best defender", correct: true, why: "Right. Without the bishop, squares like f6 and h6 become holes White can use." },
        { text: 'A knight is always worth more than a bishop', why: "Bishops and knights are worth about the same. The problem is the dark squares around Black's king." },
        { text: 'It would lose material', why: 'Bishop for knight is an even trade. The cost is the weak dark squares, not material.' }
      ]
    },
    {
      type: 'move',
      prompt: "Black to move. White's 17.h3 attacks the g4-knight. What did Bronstein play?",
      moves: ZB_17H3,
      orientation: 'black',
      choices: [
        { text: '17...Rxa1', correct: true, why: "Yes. Black gives a rook for White's dark-squared bishop, and the g7-bishop rules the long diagonal." },
        { text: '17...Nf6', why: 'Saving the knight is natural, but it misses the chance to remove White\'s dark-squared bishop.' },
        { text: '17...Bxd4', why: 'That trades away the very bishop the whole idea is built around.' }
      ]
    }
  ],
  key: { name: 'The fianchetto bishop: 3...Bg7', moves: 'd4 Nf6 c4 g6 Nc3 Bg7', orientation: 'black' },
  terms: [
    { term: 'Dark-squared bishop', meaning: 'The bishop that moves only on dark squares. Black\'s is the one on g7.' },
    { term: 'Dark squares', meaning: 'Half the board, starting with a1. Weak dark squares near a king are holes the enemy can use.' },
    { term: 'The exchange', meaning: 'The difference between a rook and a bishop or knight. Giving up the exchange means trading a rook for one of them.' }
  ]
})
