import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** exchange-7dxe5: 7.dxe5 dxe5 8.Qxd8 Rxd8 */
const EXCHANGE = `${CLASSICAL} dxe5 dxe5 Qxd8 Rxd8`
/** exchange-9bg5: 9.Bg5 Re8 10.Nd5 Nxd5 11.cxd5 c6 12.Bc4 cxd5 13.Bxd5 Nd7 */
const BG5 = `${EXCHANGE} Bg5 Re8 Nd5 Nxd5 cxd5 c6 Bc4 cxd5 Bxd5 Nd7`

export default defineModule({
  id: '2.3',
  title: 'The Exchange Variation 7.dxe5',
  minutes: 10,
  level: 2,
  goals: [
    'Know why White trades on e5 and then trades queens',
    'Meet the 9.Bg5 pin with 9...Re8!',
    'Understand the level, quiet endgame that follows'
  ],
  intro:
    "Not every White player wants a sharp fight. With 7.dxe5 White trades pawns and then queens, and the King's Indian turns into a quiet endgame. Is White better there? And what should Black do about the pin that 9.Bg5 creates?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Into the endgame',
      intro: 'Four moves, and the queens are gone. Watch how the pawns end up.',
      moves: EXCHANGE,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'White clears the center',
          text: "6...e5. Instead of castling, White decides to settle the center at once.",
          arrows: [['d4', 'e5', 'red']]
        },
        13: {
          title: 'The Exchange Variation',
          text: '7.dxe5. White takes on e5. The plan is to trade queens next and play a calm game where Black has no kingside attack.',
          marks: ['e5']
        },
        14: {
          title: 'Black must take back',
          text: '7...dxe5. Black recaptures with the pawn. Anything else would simply leave Black a pawn down. Now the d-file is open from queen to queen.',
          arrows: [['d1', 'd8', 'yellow']]
        },
        15: {
          title: 'Queens off',
          text: "8.Qxd8. White trades queens. Without queens, a mating attack is very unlikely. That takes away the plan King's Indian players like best.",
          marks: ['d8']
        },
        16: {
          title: 'A level endgame',
          text: "8...Rxd8. The rook takes back and stands on the open d-file. Black's knight would love d4, where no White pawn can chase it. White's knight eyes d5, but Black can cover that square with ...c6.",
          arrows: [['b8', 'c6', 'blue'], ['c6', 'd4', 'blue']],
          marks: ['d4', 'd5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '9.Bg5 and the unpin',
      intro: "White's most direct try is to pin the f6-knight. Black's answer is simple, but it must be played right away.",
      moves: BG5,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'Black to deal with',
          text: "8...Rxd8. Material is level. White's pieces are ready to make small threats, so Black must be careful for a few moves.",
          marks: ['d8']
        },
        17: {
          title: 'The pin',
          text: "9.Bg5. The bishop pins the f6-knight to the d8-rook: if the knight moves, the rook is lost. White also has Nd5 in mind, hitting f6 and c7.",
          arrows: [['g5', 'd8', 'red'], ['c3', 'd5', 'blue']],
          marks: ['f6']
        },
        18: {
          title: 'Unpin at once',
          text: '9...Re8. The rook steps off d8, so the knight is no longer pinned. On e8 the rook also guards the e5-pawn.',
          arrows: [['e8', 'e5', 'green']],
          ann: '!'
        },
        19: {
          title: 'The knight jumps in',
          text: '10.Nd5. The knight attacks f6 and c7. If c7 falls, a knight on c7 would fork the rooks on a8 and e8.',
          arrows: [['d5', 'f6', 'red'], ['d5', 'c7', 'red']],
          marks: ['c7']
        },
        20: {
          title: 'Trade it off',
          text: '10...Nxd5. Black removes the dangerous knight. This is the only good move: after 10...Nbd7? 11.Nxc7 the knight forks both rooks.',
          marks: ['d5']
        },
        21: {
          title: 'Taking back with the c-pawn',
          text: '11.cxd5. White recaptures with the c-pawn, which keeps the e4-pawn in place. The new pawn on d5 gains some space.',
          marks: ['d5']
        },
        22: {
          title: 'Challenge the pawn',
          text: '11...c6. Black attacks d5 straight away, so the pawn can never settle there.',
          arrows: [['c6', 'd5', 'red']]
        },
        23: {
          title: 'The bishop defends',
          text: '12.Bc4. The bishop leaves e2 for a more active square and guards d5.',
          arrows: [['c4', 'd5', 'green']]
        },
        24: {
          title: 'Black takes',
          text: '12...cxd5. Black trades pawns. (12...b5, kicking the bishop first, is just as good.)',
          marks: ['d5']
        },
        25: {
          title: 'A centralized bishop',
          text: "13.Bxd5. White's bishop stands well in the center, but material is level and Black has no weak pawns.",
          arrows: [['d5', 'b7', 'blue']]
        },
        26: {
          title: 'Equal',
          text: '13...Nd7. The last knight develops, heading for c5 or f6. Both sides have good squares for every piece, and the position is equal.',
          arrows: [['d7', 'c5', 'blue'], ['d7', 'f6', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Why choose the Exchange?',
      body:
        "**For White**, the Exchange is a safe choice. There is little theory to learn, the queens come off, and Black's famous kingside attacks never happen. The price is that White gives up any real chance of an advantage: with correct play the endgame is level.\n\n**For Black**, there is nothing to fear. Develop, unpin when needed, and look for good squares such as d4 for a knight. Just stay alert for the next few moves, because White's pieces can still set small traps."
    },
    {
      kind: 'warning',
      title: 'Two 9th moves to know',
      body:
        "After 8...Rxd8, White can also grab the pawn with 9.Nxe5. Module 2.4 shows why that is not the blunder many books claim. And after 9.Bg5, the natural 9...Nc6? leaves the pin in place: 10.Nd5! wins material, as Module 2.5 shows. Unpin first."
    }
  ],
  takeaway:
    '7.dxe5 dxe5 8.Qxd8 Rxd8 leads to a level, quiet endgame. Against 9.Bg5, Black unpins with 9...Re8!, and after 10.Nd5 Nxd5 11.cxd5 c6 the game stays equal.',
  lookAhead:
    "Module 2.4 looks at White's greedy 9th move, 9.Nxe5, and the folklore that surrounds it.",
  drills: [
    {
      title: 'Unpin and trade',
      prompt: "You're Black. White pins your knight with 9.Bg5. Unpin it, then deal with the knight that jumps to d5.",
      moves: `${EXCHANGE} Bg5 Re8 Nd5 Nxd5 cxd5 c6`,
      start: 17,
      side: 'black',
      hints: ['Move the piece that the knight is pinned to.', 'Trade off the d5-knight, then hit the new d5-pawn with your c-pawn.'],
      success: '9...Re8!, 10...Nxd5 and 11...c6. The pin is gone, the dangerous knight is traded, and the position is equal.'
    },
    {
      title: "White's active plan",
      prompt: "You're White. The queens are off. Pin the f6-knight, then use the d5-square.",
      moves: `${EXCHANGE} Bg5 Re8 Nd5 Nxd5 cxd5`,
      start: 16,
      side: 'white',
      hints: ['Which bishop move pins the f6-knight to the d8-rook?', 'After 9...Re8, jump into d5. When Black takes, recapture with the c-pawn.'],
      success: '9.Bg5, 10.Nd5 and 11.cxd5. White has made Black solve some problems, even though the position stays level.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why is 9...Re8 a good answer to 9.Bg5?',
      moves: `${EXCHANGE} Bg5 Re8`,
      orientation: 'black',
      choices: [
        { text: 'It unpins the f6-knight and guards e5', correct: true, why: 'Yes. Two jobs in one move. The knight is free again, and the e5-pawn has a defender.' },
        { text: "It attacks White's e4-pawn", why: "Black's own pawn on e5 blocks the e-file, so the rook doesn't reach e4." },
        { text: 'It protects the c7-pawn', why: "A rook on e8 doesn't guard c7. That's why Black has to trade off the knight when it lands on d5." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just played 10.Nd5. What should Black do?',
      moves: `${EXCHANGE} Bg5 Re8 Nd5`,
      orientation: 'black',
      choices: [
        { text: '10...Nxd5', correct: true, why: 'Right. The knight on d5 threatens Nxc7, so Black trades it off at once.' },
        { text: '10...Nbd7', why: '11.Nxc7 forks the rooks on a8 and e8, and White wins material.' },
        { text: '10...Nxe4', why: '11.Nxc7 again hits both rooks, and White wins material.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What kind of game does 7.dxe5 dxe5 8.Qxd8 Rxd8 usually lead to?',
      choices: [
        { text: 'A level, quiet endgame', correct: true, why: 'Yes. Material is equal, the queens are gone and the pawns are nearly symmetrical.' },
        { text: 'A sharp race with attacks on both wings', why: 'That is the main line after 8.d5 (Module 2.8). With the queens off, big attacks are rare.' },
        { text: 'An endgame where White is a pawn up', why: 'Material is level. Module 2.2 showed that grabbing e5 wins nothing.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Exchange Variation, which square is the best home for a Black knight, because no White pawn can chase it away?',
      moves: EXCHANGE,
      orientation: 'black',
      choices: [
        { text: 'd4', correct: true, why: "Right. White's c- and e-pawns have already passed it, so a knight on d4 can stay as long as it likes." },
        { text: 'd5', why: "A knight on d5 would be taken by White's c4- or e4-pawn." },
        { text: 'f4', why: 'White can kick a knight on f4 with g2–g3.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'What is this variation called?',
      moves: EXCHANGE,
      orientation: 'white',
      choices: [
        { text: 'The Exchange Variation', correct: true, why: 'Yes. White trades on e5 and then trades queens.' },
        { text: 'The Petrosian System', why: 'In the Petrosian White plays 7.d5 and closes the center. Here White took on e5.' },
        { text: 'The Gligorić System', why: 'In the Gligorić White plays 7.Be3 and keeps the queens on.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. What is the best way to deal with the pin?',
      moves: `${EXCHANGE} Bg5`,
      orientation: 'black',
      choices: [
        { text: '9...Re8', correct: true, why: 'Yes. The rook leaves d8, so the pin is gone, and it guards e5 from e8.' },
        { text: '9...Nc6', why: 'Natural, but the pin is still there. 10.Nd5! wins material, as Module 2.5 shows.' },
        { text: '9...h6', why: '10.Bxf6 Bxf6 11.Nd5 hits the bishop and c7, and White wins the c7-pawn.' }
      ]
    }
  ],
  key: { name: 'Exchange Variation: 9.Bg5 Re8!', moves: `${EXCHANGE} Bg5 Re8`, orientation: 'black' },
  terms: [
    { term: 'Exchange Variation', meaning: 'The Classical line 7.dxe5 dxe5 8.Qxd8 Rxd8, where White trades pawns and queens early.' },
    { term: 'Endgame', meaning: 'The stage of the game after most pieces, usually including the queens, have been traded.' },
    { term: 'Unpin', meaning: 'Moving the piece behind a pinned piece, or blocking the line, so that the pin stops working.' },
    { term: 'Outpost', meaning: 'A square where a piece cannot be chased away by enemy pawns.' }
  ]
})
