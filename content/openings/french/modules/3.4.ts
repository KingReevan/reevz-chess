import { defineModule } from '../../../types'

/** side-2d3 up to 7...O-O: both set-ups */
const SETUP = 'e4 e6 d3 d5 Nd2 Nf6 Ngf3 c5 g3 Nc6 Bg2 Be7 O-O O-O'
/** side-2d3: 8.Re1 b5 9.e5 Nd7 10.Nf1 a5 */
const KIA = `${SETUP} Re1 b5 e5 Nd7 Nf1 a5`
/** side-2d3-attack: 11.h4 b4 12.Bf4 a4 */
const RACE = `${KIA} h4 b4 Bf4 a4`

export default defineModule({
  id: '3.4',
  title: "2.d3: the King's Indian Attack",
  minutes: 10,
  level: 1,
  goals: [
    "Know White's King's Indian Attack set-up: d3, Nd2, Ngf3, g3, Bg2, O-O, Re1, e5",
    "Build Black's answer: ...d5, ...Nf6, ...c5, ...Nc6, ...Be7, ...O-O",
    'Understand the race: White on the kingside, Black on the queenside'
  ],
  intro:
    "Many club players avoid French theory with 2.d3. White doesn't fight for the center at once. Instead, White builds a fixed set-up and attacks the kingside later. What is White aiming for, and how should Black set up against it? This module shows both plans, which turn into a race on opposite wings.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Both set-ups, move by move',
      intro: "Watch the e4-pawn. White keeps it guarded by pawns and pieces, so Black's ...d5 never wins it.",
      moves: SETUP,
      start: 2,
      orientation: 'white',
      steps: {
        2: {
          title: 'The French move',
          text: "1...e6. Black prepares ...d5. Now White chooses whether to play 2.d4 or something quieter.",
          arrows: [['d7', 'd5', 'blue']]
        },
        3: {
          title: 'A quiet start',
          text: '2.d3. White guards e4 with a pawn. If Black plays ...d5 and ...dxe4, White can take back with the d-pawn.',
          arrows: [['d3', 'e4', 'green']]
        },
        4: {
          title: 'Black takes the center',
          text: '2...d5. Black still grabs the center with a pawn. It attacks e4.',
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'Knight to d2',
          text: '3.Nd2. The knight guards e4 a second time. On d2 it does not block the c-pawn, and later it can go to f1 and on toward the kingside.',
          arrows: [['d2', 'e4', 'green']]
        },
        6: {
          title: 'More pressure on e4',
          text: '3...Nf6. Now e4 is attacked twice (the d5-pawn and the knight) and defended twice (the d3-pawn and the d2-knight).',
          arrows: [['f6', 'e4', 'red'], ['d5', 'e4', 'red']],
          marks: ['e4']
        },
        7: {
          title: 'The other knight',
          text: '4.Ngf3. The king\'s knight develops. Writing "Ngf3" shows that the g1-knight moves, because the d2-knight could also reach f3.',
          arrows: [['f3', 'e5', 'blue']]
        },
        8: {
          title: 'Space on the queenside',
          text: '4...c5. Black claims space on the queenside, where Black will attack later.',
          arrows: [['c5', 'd4', 'green']]
        },
        9: {
          title: 'Preparing the fianchetto',
          text: '5.g3. White makes room for the bishop on g2.',
          arrows: [['f1', 'g2', 'blue']]
        },
        10: {
          title: 'Another piece out',
          text: '5...Nc6. The knight develops and controls d4 and e5.',
          arrows: [['c6', 'd4', 'green'], ['c6', 'e5', 'green']]
        },
        11: {
          title: 'The long diagonal',
          text: "6.Bg2. The bishop sits on the long diagonal from h1 to a8, behind the f3-knight for now, and guards White's king. Once the knight moves, the bishop sees e4 and d5.",
          marks: ['g2']
        },
        12: {
          title: 'Ready to castle',
          text: '6...Be7. A modest square, but it keeps the bishop safe and gets Black ready to castle.',
          arrows: [['e8', 'g8', 'blue']]
        },
        13: {
          title: 'White castles',
          text: "7.O-O. White's king hides behind the fianchetto.",
          arrows: [['e1', 'g1', 'green']]
        },
        14: {
          title: 'Black castles',
          text: "7...O-O. Both kings are safe. This is a King's Indian Defense set-up with colors reversed: White plays Black's King's Indian moves with an extra move.",
          arrows: [['e8', 'g8', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The race: kingside against queenside',
      intro: "From here both sides attack on opposite wings. Each tempo counts.",
      moves: RACE,
      start: 14,
      orientation: 'black',
      steps: {
        14: {
          title: 'The starting line',
          text: '7...O-O. Both sides are developed. Now the plans begin.',
          marks: ['e4', 'd5']
        },
        15: {
          title: 'Support the push',
          text: '8.Re1. The rook stands behind the e4-pawn and prepares e4–e5.',
          arrows: [['e1', 'e4', 'green'], ['e4', 'e5', 'blue']]
        },
        16: {
          title: 'The storm starts',
          text: '8...b5. Black starts the queenside pawn storm at once. The pawns want to reach b4 and a4.',
          arrows: [['b5', 'b4', 'blue'], ['a7', 'a5', 'blue']]
        },
        17: {
          title: 'Space on the kingside',
          text: "9.e5. White grabs kingside space and kicks the f6-knight, the best defender of Black's king.",
          arrows: [['e5', 'f6', 'red']]
        },
        18: {
          title: 'The knight steps back',
          text: '9...Nd7. The best retreat. From d7 the knight hits e5 and stays close to the center.',
          arrows: [['d7', 'e5', 'red']]
        },
        19: {
          title: 'A long knight trip',
          text: '10.Nf1. The d2-knight heads for h2 and g4, or e3, to join the attack on Black\'s king.',
          arrows: [['f1', 'h2', 'blue'], ['h2', 'g4', 'blue']]
        },
        20: {
          title: 'More pawns',
          text: '10...a5. The a-pawn joins the b-pawn. Both are aimed at White\'s queenside.',
          arrows: [['a5', 'a4', 'blue']]
        },
        21: {
          title: 'The h-pawn',
          text: '11.h4. The pawn supports a piece on g5 and can run on to h5 to loosen Black\'s king.',
          arrows: [['h4', 'h5', 'blue'], ['h4', 'g5', 'green']]
        },
        22: {
          title: 'Gaining space',
          text: '11...b4. Black grabs more space and keeps White\'s c-pawn from moving to c3 easily.',
          arrows: [['b4', 'c3', 'red']]
        },
        23: {
          title: 'Guarding e5',
          text: '12.Bf4. The bishop adds a third defender to e5. It is attacked twice (the d7- and c6-knights) and defended three times (the bishop, the f3-knight and the e1-rook).',
          arrows: [['f4', 'e5', 'green'], ['f3', 'e5', 'green'], ['e1', 'e5', 'green']],
          marks: ['e5']
        },
        24: {
          title: 'The race is on',
          text: "12...a4. Next Black can push ...a3 to hit b2 and open lines. White's attack comes with Nf1–h2–g4 and h5, and White must also slow Black down on the queenside. The engine calls it level: whoever plays faster and more accurately wins the race.",
          arrows: [['a4', 'a3', 'blue'], ['a3', 'b2', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The plans in one place',
      body:
        "**White:** d3, Nd2, Ngf3, g3, Bg2, O-O and Re1, then e4–e5 to gain kingside space. After that, Nf1–h2–g4 (or e3), h4–h5 and Bf4 against Black's king.\n\n**Black:** ...d5, ...Nf6, ...c5, ...Nc6, ...Be7 and ...O-O, then a fast queenside storm: ...b5–b4 and ...a5–a4–a3. The goal is to open lines against White's queenside before White's attack arrives.\n\nNeither side is better. It is a race, so don't waste moves."
    },
    {
      kind: 'history',
      title: 'Famous users',
      body:
        "2.d3 against the French has been played by Pal Benko, Bobby Fischer, Leonid Stein and Lev Psakhis. It is also very common in club and online games, because White can play the same set-up almost every game."
    }
  ],
  takeaway:
    "Against 2.d3, Black takes the center with ...d5 and builds ...Nf6, ...c5, ...Nc6, ...Be7 and ...O-O. After e4–e5, it is a race: White attacks the kingside, Black storms the queenside with ...b5–b4 and ...a5–a4.",
  lookAhead:
    'Next: two more early piece moves, 2.Qe2 and 2.Nf3. Module 3.5 shows a pin that makes one natural recapture illegal.',
  drills: [
    {
      title: "Build Black's set-up",
      prompt: "You're Black. White has played 2.d3. Take the center, develop, castle, and start your queenside storm.",
      moves: `${SETUP} Re1 b5`,
      start: 3,
      side: 'black',
      hints: [
        'Pawn to d5 first, then the king\'s knight. Claim queenside space with the c-pawn.',
        'Nc6, Be7, castle, and after 8.Re1 push the b-pawn two squares.'
      ],
      success: '2...d5, 3...Nf6, 4...c5, 5...Nc6, 6...Be7, 7...O-O and 8...b5. The queenside storm has begun.'
    },
    {
      title: "Build White's King's Indian Attack",
      prompt: "You're White. After 2.d3 d5, set up the King's Indian Attack: knights, fianchetto, castle, rook to e1, then push e5 and start the knight's trip to the kingside.",
      moves: `${SETUP} Re1 b5 e5 Nd7 Nf1`,
      start: 4,
      side: 'white',
      hints: [
        "The queen's knight goes to d2, the king's knight to f3. Then g3, Bg2 and castle.",
        'Re1, then e5 to kick the f6-knight, then the d2-knight goes to f1.'
      ],
      success: '3.Nd2, 4.Ngf3, 5.g3, 6.Bg2, 7.O-O, 8.Re1, 9.e5 and 10.Nf1. Next, the knight heads for h2 and g4.'
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: "White plays d3, Nd2, Ngf3, g3, Bg2 and O-O. What is this set-up called?",
      moves: SETUP,
      orientation: 'white',
      choices: [
        { text: "The King's Indian Attack", correct: true, why: "Right. White plays the King's Indian Defense set-up with colors reversed and an extra move." },
        { text: 'The Advance Variation', why: 'The Advance is 2.d4 d5 3.e5. Here White has not played d4 at all.' },
        { text: 'The Exchange Variation', why: 'The Exchange is 2.d4 d5 3.exd5. Here White keeps the e4-pawn and builds a fianchetto.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White has just played 9.e5, hitting the f6-knight. Where should it go?',
      moves: `${SETUP} Re1 b5 e5`,
      orientation: 'black',
      choices: [
        { text: '9...Nd7', correct: true, why: 'Yes. On d7 the knight attacks e5 and stays close to the center. The engine rates it well above the other retreats.' },
        { text: '9...Ng4', why: 'The knight looks active, but h3 will chase it again. The engine clearly prefers 9...Nd7.' },
        { text: '9...Nh5', why: 'On the edge the knight is out of play, and g4 can chase it again. 9...Nd7 is much better.' }
      ]
    },
    {
      type: 'plan',
      prompt: "After 9.e5, where does Black's counterplay come from?",
      moves: KIA,
      orientation: 'black',
      choices: [
        { text: 'A queenside pawn storm: ...b5–b4 and ...a5–a4', correct: true, why: "Right. Black attacks where White is weaker, on the queenside, before White's kingside attack arrives." },
        { text: "A kingside attack with ...g5 and ...h5", why: "Black's own king is on the kingside, where White is attacking. Pushing those pawns would weaken it." },
        { text: 'Trading queens as soon as possible', why: 'There is no easy way to trade queens here. Black plays for the queenside race.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does White play 3.Nd2 rather than 3.Nc3 in this set-up?',
      moves: 'e4 e6 d3 d5 Nd2',
      orientation: 'white',
      choices: [
        { text: 'It guards e4 without blocking the c-pawn, and later it can go to f1 and the kingside', correct: true, why: 'Yes. The knight is heading for the kingside via f1, and the c-pawn stays free to move.' },
        { text: 'Because 3.Nc3 would be illegal', why: '3.Nc3 is legal. It is just less useful for this set-up.' },
        { text: 'To attack the d5-pawn', why: 'A knight on d2 does not attack d5. Its job is to defend e4.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'What is the point of 10.Nf1?',
      moves: `${SETUP} Re1 b5 e5 Nd7 Nf1`,
      orientation: 'white',
      choices: [
        { text: 'The knight heads for h2 and g4 (or e3) to join the kingside attack', correct: true, why: 'Right. From g4 the knight can hit f6 and h6 near Black\'s king.' },
        { text: 'It defends the king against a back-rank mate', why: 'There is no back-rank danger here. The knight is going on a trip toward Black\'s king.' },
        { text: 'It makes room for the queen on d2', why: 'That is a side effect at most. The main idea is the route f1–h2–g4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 12.Bf4, how many times is the e5-pawn attacked and defended?',
      moves: RACE,
      orientation: 'white',
      choices: [
        { text: 'Attacked twice, defended three times', correct: true, why: 'Yes. The d7- and c6-knights attack it. The f4-bishop, the f3-knight and the e1-rook defend it.' },
        { text: 'Attacked twice, defended twice', why: 'Count again: the e1-rook also defends e5, through the empty e2-, e3- and e4-squares.' },
        { text: 'Attacked three times, defended once', why: "Only the two knights attack e5. Black's pawns on d5 and f7 don't touch it." }
      ]
    }
  ],
  key: { name: "King's Indian Attack: 9.e5 against ...b5 and ...a5", moves: KIA, orientation: 'white' },
  terms: [
    { term: "King's Indian Attack", meaning: "White's set-up d3, Nd2, Nf3, g3, Bg2 and O-O: the King's Indian Defense with colors reversed and an extra move." },
    { term: 'Fianchetto', meaning: 'Developing a bishop on b2, g2, b7 or g7 after moving the pawn in front of it one square.' },
    { term: 'Long diagonal', meaning: 'One of the two longest diagonals, a1–h8 and h1–a8. A fianchettoed bishop sits on one of them.' },
    { term: 'Pawn storm', meaning: 'Pushing several pawns toward the enemy king or flank to open lines.' }
  ]
})
