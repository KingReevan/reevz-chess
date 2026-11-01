import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** exchange-7dxe5: 7.dxe5 dxe5 8.Qxd8 Rxd8 */
const EXCHANGE = `${CLASSICAL} dxe5 dxe5 Qxd8 Rxd8`
/** exchange-9nc6-trap: 9.Bg5 Nc6? 10.Nd5! Rd6 11.Bxf6 Bxf6 12.c5 Rxd5 13.exd5 */
const TRAP = `${EXCHANGE} Bg5 Nc6 Nd5 Rd6 Bxf6 Bxf6 c5 Rxd5 exd5`
/** 10...Nxd5 11.cxd5! f6 12.dxc6 fxg5 13.Nxg5 (engine line) */
const TAKE = `${EXCHANGE} Bg5 Nc6 Nd5 Nxd5 cxd5 f6 dxc6 fxg5 Nxg5`

export default defineModule({
  id: '2.5',
  title: 'The pin on f6: 9.Bg5 Nc6? 10.Nd5!',
  minutes: 10,
  level: 2,
  goals: [
    'See how 9.Bg5 pins the f6-knight to the d8-rook',
    'Find 10.Nd5! against 9...Nc6? and win material as White',
    'Know the safe way for Black: unpin first'
  ],
  intro:
    "Module 2.3 said: after 9.Bg5, unpin at once with 9...Re8. What happens if Black just develops with 9...Nc6 instead? A pin, a loose pawn on c7 and one knight jump are enough for White to win material.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'How White wins the exchange',
      intro: 'Watch two Black weaknesses: the pinned knight on f6 and the pawn on c7.',
      moves: TRAP,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'The Exchange endgame',
          text: "8...Rxd8. The rook on d8 and the knight on f6 stand on the same diagonal, d8–h4. White's dark-squared bishop can use that.",
          arrows: [['d8', 'h4', 'blue']]
        },
        17: {
          title: 'The pin',
          text: '9.Bg5. The bishop pins the f6-knight to the d8-rook. If the knight moves, the rook is lost.',
          arrows: [['g5', 'd8', 'red']],
          marks: ['f6']
        },
        18: {
          title: 'Natural, but wrong',
          text: '9...Nc6. Black develops, but ignores the pin. And nothing defends the c7-pawn.',
          marks: ['f6', 'c7'],
          ann: '?'
        },
        19: {
          title: 'One jump, two targets',
          text: "10.Nd5. Now f6 is attacked twice, by the bishop and the knight, and defended only once, by the g7-bishop. Nxc7 is threatened too, hitting the a8-rook.",
          arrows: [['d5', 'f6', 'red'], ['g5', 'f6', 'red'], ['d5', 'c7', 'red']],
          ann: '!'
        },
        20: {
          title: "Black's best try",
          text: '10...Rd6. The rook leaves d8, so the knight is no longer pinned, and from d6 it guards f6 a second time.',
          arrows: [['d6', 'f6', 'green']]
        },
        21: {
          title: 'Remove the knight',
          text: '11.Bxf6. White gives the bishop for the knight. After Black takes back, a Black bishop will stand on f6 instead of the knight. (11.Nxc7, simply grabbing the pawn, is also strong.)',
          arrows: [['d5', 'c7', 'blue']]
        },
        22: {
          title: 'One defender left',
          text: '11...Bxf6. The bishop takes back. It is attacked by the d5-knight and defended only by the d6-rook.',
          arrows: [['d5', 'f6', 'red'], ['d6', 'f6', 'green']]
        },
        23: {
          title: 'Kick the defender',
          text: "12.c5. The pawn attacks the rook. If the rook goes back along the d-file, Nxf6+ wins the bishop. If it goes to e6, Nxc7 forks both rooks.",
          arrows: [['c5', 'd6', 'red'], ['d5', 'f6', 'yellow']],
          ann: '!'
        },
        24: {
          title: 'The least bad choice',
          text: '12...Rxd5. Black gives the rook for the knight rather than lose more.',
          marks: ['d5']
        },
        25: {
          title: 'The exchange is won',
          text: "13.exd5. White has won the exchange: Black gave a rook for White's knight. Black can grab a pawn back with ...Nb4 and ...Nxa2, but White is clearly better.",
          arrows: [['d5', 'c6', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Taking the knight does not help',
      intro: "Black's other idea is to remove the d5-knight at once. White has to recapture the right way.",
      moves: TAKE,
      start: 19,
      orientation: 'white',
      steps: {
        19: {
          title: 'Same position',
          text: '10.Nd5. White threatens to win the f6-knight. What if Black simply takes the attacker?',
          arrows: [['d5', 'f6', 'red']]
        },
        20: {
          title: 'Black takes',
          text: '10...Nxd5. The f6-knight is gone, so the bishop on g5 now hits the d8-rook directly.',
          arrows: [['g5', 'd8', 'red']]
        },
        21: {
          title: 'The right recapture',
          text: "11.cxd5. The pawn attacks the c6-knight, and the bishop still attacks the rook. Two pieces are hit at once. Grabbing the rook with 11.Bxd8? lets the d5-knight jump to f4, and White's advantage is gone.",
          arrows: [['d5', 'c6', 'red'], ['g5', 'd8', 'red']],
          ann: '!'
        },
        22: {
          title: 'Saving the rook',
          text: '11...f6. The pawn blocks the bishop and attacks it. The rook is safe, but the knight on c6 is still attacked.',
          arrows: [['f6', 'g5', 'red']]
        },
        23: {
          title: 'White takes the knight',
          text: '12.dxc6. White wins the knight.',
          marks: ['c6']
        },
        24: {
          title: 'Black takes the bishop',
          text: '12...fxg5. Black takes the bishop back. Knight for bishop: level for a moment.',
          marks: ['g5']
        },
        25: {
          title: 'A pawn ahead',
          text: "13.Nxg5. White takes the g5-pawn too and is a pawn up. The c6-pawn also eyes b7. White is clearly better.",
          arrows: [['c6', 'b7', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Why 9...Nc6 fails',
      body:
        "Black had **two weaknesses at once**: the pinned knight on f6 and the loose pawn on c7. 10.Nd5 hit both. When one move attacks two weak points, the defender often can't cover them all.\n\nWhite's lesson: when your opponent's piece is pinned, look for a way to attack it again. Black's lesson: unpin before you develop."
    },
    {
      kind: 'tip',
      title: 'Unpin first',
      body:
        'Against Bg5 in these queenless positions, get the rook off d8 before anything else, as with 9...Re8 in Module 2.3. The same pin shows up after 8.dxe5 in the main line (Module 2.6), and in the Averbakh, where 6...e5? runs into the same 9.Nd5! idea (Module 7.8).'
    }
  ],
  takeaway:
    "After 9.Bg5, the f6-knight is pinned and c7 is loose. If Black plays 9...Nc6?, 10.Nd5! wins material for White. Black should unpin first with 9...Re8.",
  lookAhead:
    "That finishes the Exchange Variation. Module 2.6 returns to the main line, 7.O-O, where Black's knight goes to c6 at the right moment.",
  drills: [
    {
      title: 'Use the pin',
      prompt: "You're White. Black has just played 9...Nc6?, leaving the f6-knight pinned. Find the move that hits two weaknesses.",
      moves: `${EXCHANGE} Bg5 Nc6 Nd5`,
      start: 18,
      side: 'white',
      hints: ['The f6-knight is pinned. Can you attack it again?', 'A knight jump attacks f6 and c7 at the same time.'],
      success: '10.Nd5! The f6-knight and the c7-pawn are both under fire, and Black cannot avoid losing material.'
    },
    {
      title: 'Recapture the right way',
      prompt: "You're White. Black took your knight with 10...Nxd5. Take back so that two Black pieces are attacked, then collect one.",
      moves: `${EXCHANGE} Bg5 Nc6 Nd5 Nxd5 cxd5 f6 dxc6`,
      start: 20,
      side: 'white',
      hints: ['Grabbing the rook is tempting, but it lets the d5-knight escape. Which pawn can take on d5?', 'After 11...f6, the knight on c6 is still attacked.'],
      success: '11.cxd5! and 12.dxc6. After 12...fxg5 13.Nxg5 White is a pawn up and clearly better.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why is 9...Nc6 a mistake after 9.Bg5?',
      moves: `${EXCHANGE} Bg5 Nc6`,
      orientation: 'black',
      choices: [
        { text: 'It leaves the f6-knight pinned and c7 loose, and 10.Nd5 hits both', correct: true, why: 'Right. Two weaknesses, one attacking move.' },
        { text: 'It allows 10.Bxf6, winning a piece', why: '10.Bxf6 Bxf6 is just a trade of bishop for knight. The strong move is 10.Nd5!.' },
        { text: 'It loses the e5-pawn', why: 'The c6-knight actually guards e5. The trouble is the pin and the c7-pawn.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. What is the strongest move?',
      moves: `${EXCHANGE} Bg5 Nc6`,
      orientation: 'white',
      choices: [
        { text: '10.Nd5', correct: true, why: 'Yes. The knight attacks the pinned f6-knight a second time and threatens Nxc7.' },
        { text: '10.Bxf6', why: 'After 10...Bxf6 the pin is gone. White keeps only a small edge. 10.Nd5! first wins much more.' },
        { text: '10.O-O', why: 'A calm move that gives Black time to unpin with a rook move. The chance is gone.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. The rook on d6 is attacked. What is the least bad choice?',
      moves: `${EXCHANGE} Bg5 Nc6 Nd5 Rd6 Bxf6 Bxf6 c5`,
      orientation: 'black',
      choices: [
        { text: '12...Rxd5', correct: true, why: 'Right. Black gives the rook for the knight and loses only the exchange.' },
        { text: '12...Rd8', why: '13.Nxf6+ takes the bishop with check, and Black loses a whole piece.' },
        { text: '12...Re6', why: '13.Nxc7 forks the rooks on a8 and e6, and Black loses even more.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Black has just taken on d5. What is best?',
      moves: `${EXCHANGE} Bg5 Nc6 Nd5 Nxd5`,
      orientation: 'white',
      choices: [
        { text: '11.cxd5', correct: true, why: 'Yes. The pawn attacks the c6-knight while the bishop attacks the d8-rook. Black cannot save both.' },
        { text: '11.Bxd8', why: "Grabbing the rook lets the d5-knight jump to f4 with strong play, and White's advantage is gone." },
        { text: '11.exd5', why: "It also hits the c6-knight, but after 11...f6 Black gets out of trouble. Taking with the c-pawn is much stronger." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 9.Bg5 Nc6? 10.Nd5 Rd6 11.Bxf6 Bxf6 12.c5 Rxd5 13.exd5, what has White won?',
      moves: TRAP,
      orientation: 'white',
      choices: [
        { text: 'The exchange: a rook for a minor piece', correct: true, why: 'Yes. The bishop-for-knight trade was even, and then Black gave a rook for the d5-knight.' },
        { text: 'A whole piece', why: 'White gave up the g5-bishop and the d5-knight, and got the f6-knight and a rook. The bishop-for-knight part was an even trade, so White has won the exchange, not a whole piece.' },
        { text: 'Two pawns', why: 'No pawns have been won yet. White is up the exchange.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. How does White win material?',
      moves: `${EXCHANGE} Bg5 Nc6 Nd5 Rd6 Bxf6 Bxf6`,
      orientation: 'white',
      choices: [
        { text: '12.c5', correct: true, why: 'Right. The pawn kicks the rook that guards f6. Every rook move loses something.' },
        { text: '12.Nxf6+', why: "After 12...Rxf6 it's just a trade of knight for bishop, and White's edge is gone." },
        { text: '12.O-O', why: "Too slow. Black gets time to untangle, and the position is about level." }
      ]
    }
  ],
  key: { name: 'Exchange Variation trap: 9...Nc6? 10.Nd5!', moves: `${EXCHANGE} Bg5 Nc6 Nd5`, orientation: 'white' },
  terms: [
    { term: 'The exchange', meaning: 'Winning "the exchange" means winning a rook for a bishop or a knight.' },
    { term: 'Double attack', meaning: 'One move that attacks two targets at once, so the opponent cannot defend both.' },
    { term: 'Pin', meaning: 'A piece cannot move off a line without exposing a more valuable piece behind it.' }
  ]
})
