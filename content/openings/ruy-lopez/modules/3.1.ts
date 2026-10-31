import { defineModule } from '../../../types'
import { EXCHANGE, RUY } from '../../../lines'

/** exchange-gligoric-7qxd4, up to 8.Nxd4 */
const MAIN = `${EXCHANGE} O-O f6 d4 exd4 Qxd4 Qxd4 Nxd4`
/** exchange-5d4-lasker-capablanca, up to 7.Nxd4 */
const DIRECT = `${EXCHANGE} d4 exd4 Qxd4 Qxd4 Nxd4`

export default defineModule({
  id: '3.1',
  title: 'Giving up the bishop on purpose',
  minutes: 10,
  level: 2,
  goals: [
    'See what 4.Bxc6 does to Black\'s pawns',
    'Count the pawns on each wing after White plays d4',
    'Know each side\'s plan: White simplifies, Black keeps the bishops busy'
  ],
  intro:
    "Module 2.2 showed that 4.Bxc6 doesn't win a pawn. So why do strong players, Fischer among them, play it on purpose? The answer is in the pawns. This module shows what the trade does to Black's structure, and why White is often happy to head for an endgame.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'From the trade to the structure',
      intro: 'Watch the pawns, not the pieces. By the end, count how many each side has on each wing.',
      moves: MAIN,
      start: 6,
      orientation: 'white',
      steps: {
        6: {
          title: 'The bishop must decide',
          text: '3...a6. The pawn attacks the bishop. In Chapter 2 White kept it with 4.Ba4. In this chapter White takes the knight instead.',
          arrows: [['a6', 'b5', 'red']]
        },
        7: {
          title: 'Bishop for knight',
          text: '4.Bxc6. White gives up the bishop for the knight. Bishops are often a bit stronger than knights in open positions, so White needs a good reason. Black can take back with either pawn.',
          arrows: [['d7', 'c6', 'blue'], ['b7', 'c6', 'blue']],
          marks: ['c6']
        },
        8: {
          title: 'Doubled pawns',
          text: '4...dxc6. Black takes back toward the center, which frees the queen and the c8-bishop. The price is two black pawns on the same file. Those doubled c-pawns will matter later.',
          arrows: [['c8', 'g4', 'blue']],
          marks: ['c6', 'c7']
        },
        9: {
          title: 'Castle first',
          text: "5.O-O. White's main move. The king gets safe, and the next module shows why castling also puts e5 under real pressure.",
          arrows: [['f3', 'e5', 'red']],
          marks: ['e5']
        },
        10: {
          title: 'Black guards e5',
          text: "5...f6. The f-pawn defends e5. This is Black's most common answer, the Gligorić Variation, and Module 3.3 covers it in detail.",
          arrows: [['f6', 'e5', 'green']]
        },
        11: {
          title: 'Strike at the center',
          text: "6.d4. White attacks e5 again. White wants to swap the d-pawn for Black's e-pawn, because that swap creates the structure White is playing for.",
          arrows: [['d4', 'e5', 'red']]
        },
        12: {
          title: 'Black takes',
          text: "6...exd4. Black's e-pawn leaves the e-file. White will take it back, and then only White has a pawn in the center.",
          arrows: [['d1', 'd4', 'green'], ['f3', 'd4', 'green']],
          marks: ['d4']
        },
        13: {
          title: 'An offer to trade queens',
          text: '7.Qxd4. White takes back with the queen. The queens now face each other on the open d-file. (7.Nxd4 is the other good recapture; Module 3.3 shows it.)',
          arrows: [['d4', 'd8', 'yellow']]
        },
        14: {
          title: 'Queens off',
          text: '7...Qxd4. Black accepts. With the queens gone, the pawn structure counts for even more.',
          marks: ['d4']
        },
        15: {
          title: 'Count the pawns',
          text: 'On the kingside (e- to h-file) White has four pawns against three. On the queenside Black has four against three, but two of them are the doubled c-pawns.',
          marks: ['e4', 'c6', 'c7']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why the count matters',
      body:
        "A **pawn majority** is a group of pawns that outnumbers the enemy pawns on one side of the board. A healthy majority can march forward and, sooner or later, create a **passed pawn**: a pawn that no enemy pawn can stop.\n\nWhite's four kingside pawns are healthy. Black's four queenside pawns are not, because the doubled c-pawns behave like a single pawn. White's a-, b- and c-pawns can usually hold all four of them.\n\nSo if every piece came off the board, White would make a passed pawn and Black would not. That is why pure pawn endings in this structure tend to be winning for White."
    },
    {
      kind: 'walkthrough',
      title: 'The direct road: 5.d4',
      intro: 'White can also aim for the same structure at once, before castling.',
      moves: DIRECT,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'Same position, faster plan',
          text: 'The position after 4...dxc6 again. This time White heads straight for the pawn swap.',
          marks: ['c6', 'c7']
        },
        9: {
          title: 'The center strike',
          text: '5.d4. The pawn and the f3-knight both attack e5. Holding the pawn is awkward, so Black usually takes.',
          arrows: [['d4', 'e5', 'red'], ['f3', 'e5', 'red']]
        },
        10: {
          title: 'The swap begins',
          text: "5...exd4. Black's e-pawn takes White's d-pawn. White recaptures next move, and the structure appears.",
          marks: ['d4']
        },
        11: {
          title: 'Queens face off',
          text: '6.Qxd4. White takes back with the queen and offers a trade on the open d-file.',
          arrows: [['d4', 'd8', 'yellow']]
        },
        12: {
          title: 'The trade',
          text: '6...Qxd4. The queens come off on move six.',
          marks: ['d4']
        },
        13: {
          title: 'The Exchange structure',
          text: "7.Nxd4. Four against three on the kingside for White, a crippled four against three on the queenside for Black. In return Black has the two bishops. Lasker reached this position against Capablanca in 1914 and won a famous game (Module 3.6).",
          marks: ['e4', 'c6', 'c7']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Each side has a clear job',
      body:
        "**White:** trade pieces, keep things simple, and steer toward an endgame where the kingside majority decides.\n\n**Black:** keep pieces on the board and play actively. The two bishops are Black's trump, and they are strongest in open positions with plenty of pieces still around."
    }
  ],
  takeaway:
    "4.Bxc6 gives Black the bishop pair but doubled c-pawns. After White trades the d-pawn for Black's e-pawn, White has a healthy 4-against-3 kingside majority, so White welcomes trades and endgames.",
  lookAhead:
    "Next: why 5.O-O is White's main move, and how it turns Nxe5 into a real threat.",
  drills: [
    {
      title: 'Reach the Exchange structure',
      prompt: "You're White. Take on c6, castle, open the center with d4, and trade queens to reach the 4-against-3 structure.",
      moves: MAIN,
      start: 5,
      side: 'white',
      hints: [
        'Start by taking the knight that guards e5. After that, get your king safe.',
        'Once Black plays ...f6, push your d-pawn two squares. When Black takes, recapture with the queen to offer a trade.'
      ],
      success: "That's the Exchange structure: four pawns against three on the kingside, and Black's doubled c-pawns on the other wing."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does White get in return for giving up the bishop pair with 4.Bxc6 dxc6?',
      choices: [
        {
          text: 'A better pawn structure, with a kingside majority that can make a passed pawn',
          correct: true,
          why: "Right. After d4 and ...exd4, White has four pawns against three on the kingside, while Black's extra queenside pawn is a doubled one."
        },
        { text: 'An extra pawn', why: 'Not yet. Module 2.2 showed that 5.Nxe5 is met by 5...Qd4!, which wins the pawn back.' },
        {
          text: 'A big lead in development',
          why: "White spent a move taking the knight, and 4...dxc6 opens lines for Black's queen and c8-bishop. White's gain is in the pawns, not in time."
        },
        { text: 'Black can no longer castle', why: 'Black can still castle on either side. 4.Bxc6 changes Black\'s pawns, not the king.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Count the pawns from the e-file to the h-file. How many does each side have?',
      moves: MAIN,
      orientation: 'white',
      choices: [
        { text: 'White 4, Black 3', correct: true, why: "Yes: e4, f2, g2 and h2 against f6, g7 and h7. That's White's kingside majority." },
        { text: 'White 3, Black 3', why: "Don't forget the e4-pawn. Black has no pawn left on the e-file, so that one is White's extra pawn." },
        { text: 'White 4, Black 4', why: "Black's e-pawn was traded for White's d-pawn on d4. Black has only f6, g7 and h7 on that side." }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Exchange Variation, what kind of game is White usually happy to reach?',
      choices: [
        { text: 'A simple endgame with few pieces left', correct: true, why: 'Right. The fewer pieces on the board, the more the healthy kingside majority counts.' },
        { text: 'A wild position with both kings under attack', why: "Sharp, open play suits Black, whose two bishops love open lines and lots of pieces." },
        { text: 'A position where White keeps the queens on at all costs', why: 'White is happy to trade queens. In both walkthroughs White offered the trade on d4.' }
      ]
    },
    {
      type: 'concept',
      prompt: "Why can't Black's four queenside pawns easily make a passed pawn?",
      choices: [
        { text: 'Two of them are doubled on the c-file, so they act like one pawn', correct: true, why: "Exactly. White's three queenside pawns can usually hold Black's four." },
        { text: "White's king is on the queenside", why: "In the main line White castles kingside. The problem is Black's own pawn structure." },
        { text: "Pawns can't advance until both bishops have moved", why: 'Pawns can move at any time. The issue is that two of the four stand on the same file.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Black took back with 4...bxc6 instead of 4...dxc6. What is the main difference?',
      moves: `${RUY} a6 Bxc6 bxc6`,
      orientation: 'white',
      choices: [
        {
          text: 'Black gets the half-open b-file, but the d7-pawn still blocks the queen and the c8-bishop',
          correct: true,
          why: 'Right. This rarer recapture is called the Lutikov line. It opens the b-file for a rook but leaves Black\'s center a bit awkward.'
        },
        { text: "Black's pawns are no longer doubled", why: 'They still are. After 4...bxc6 Black has pawns on c6 and c7.' },
        { text: 'Black now threatens to win the e4-pawn', why: 'Nothing attacks e4 here. 4...bxc6 is about structure, not a threat.' }
      ]
    },
    {
      type: 'plan',
      prompt: "You're Black in the Exchange Variation. Which plan suits your position?",
      choices: [
        { text: 'Keep pieces on and use the two bishops actively', correct: true, why: "Yes. The bishop pair is Black's compensation, and it works best with pieces on the board." },
        { text: 'Trade every piece as fast as possible', why: 'That walks into a pawn ending where White can make a passed pawn and Black usually cannot.' },
        { text: 'Push the doubled c-pawns to make a passed pawn quickly', why: "White's three queenside pawns can usually hold Black's four. The doubled pawns are a weakness, not a weapon." }
      ]
    }
  ],
  key: { name: 'Exchange Variation: 4.Bxc6 dxc6', moves: EXCHANGE, orientation: 'white' },
  terms: [
    { term: 'Doubled pawns', meaning: 'Two pawns of the same colour on the same file. They cannot protect each other and are often a weakness.' },
    { term: 'Pawn majority', meaning: 'More pawns than the opponent on one side of the board, for example four against three on the kingside.' },
    { term: 'Passed pawn', meaning: 'A pawn with no enemy pawns in front of it on its own file or the files next to it.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has given one up. Strongest in open positions.' }
  ]
})
