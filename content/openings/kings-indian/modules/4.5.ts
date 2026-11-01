import { defineModule } from '../../../types'
import { BAYONET } from '../lines'

/** bayonet-9b4-nh5 */
const SOKOLOV = `${BAYONET} Nh5 Re1 f5 Ng5 Nf6 Bf3 c6`
/** model-shirov-radjabov-2007, moves 1–20 (5.Be2 and 6.Nf3 move order) */
const SHIROV =
  'd4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Nf3 e5 O-O Nc6 d5 Ne7 b4 Nh5 Re1 f5 Ng5 Nf6 f3 Kh8 Ne6 Bxe6 dxe6 Nh5 g3 Bf6 c5 f4 Kg2 Nc6 cxd6 cxd6 Nd5 Nd4 Bb2 Nxe6'

export default defineModule({
  id: '4.5',
  title: 'The Bayonet 9.b4',
  minutes: 12,
  level: 3,
  goals: [
    'See why 9.b4 starts the queenside attack before ...f5 arrives',
    "Learn the main line: 9...Nh5 10.Re1 f5 11.Ng5, aiming at the e6 hole",
    'Follow Shirov–Radjabov 2007 and its pawn on e6'
  ],
  intro:
    "In Modules 4.1 to 4.4 White began with 9.Ne1, a knight retreat on the way to d3, and c4–c5 came several moves later. What if White skips the knight trip and pushes the b-pawn at once? That is the Bayonet Attack, 9.b4, one of White's most popular answers to the King's Indian main line.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main line: 9...Nh5 10.Re1',
      intro: 'Compare each move with the Mar del Plata. Both sides still race on opposite wings.',
      moves: SOKOLOV,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'A different 9th move',
          text: '8...Ne7. In the Mar del Plata White played 9.Ne1. This time White starts the queenside attack straight away.',
          arrows: [['b2', 'b4', 'green']]
        },
        17: {
          title: 'The Bayonet',
          text: '9.b4. The b-pawn supports c4–c5 and grabs space, and White spends no time on Ne1. This is the Bayonet Attack.',
          arrows: [['b4', 'c5', 'green'], ['c4', 'c5', 'green']]
        },
        18: {
          title: 'Black frees the f-pawn',
          text: "9...Nh5. Black's main answer. Like ...Nd7 in the Mar del Plata, the knight gets out of the f-pawn's way. From h5 it also eyes f4.",
          arrows: [['f7', 'f5', 'blue'], ['h5', 'f4', 'blue']]
        },
        19: {
          title: 'Room for the bishop',
          text: '10.Re1. lichess calls this Sokolov\'s Line. The rook frees f1, so the e2-bishop has a retreat if the knight jumps to f4 (Module 4.6).',
          arrows: [['e2', 'f1', 'blue']]
        },
        20: {
          title: 'The usual lever',
          text: '10...f5. Black hits e4, just as in the Mar del Plata.',
          arrows: [['f5', 'e4', 'red']]
        },
        21: {
          title: 'Aiming at e6',
          text: "11.Ng5. Black's d- and f-pawns have both moved past e6, so no black pawn can ever guard that square again. It is a hole, and the knight eyes it.",
          arrows: [['g5', 'e6', 'yellow']],
          marks: ['e6']
        },
        22: {
          title: 'The knight comes back',
          text: '11...Nf6. The knight returns to the center and adds pressure on e4.',
          arrows: [['f6', 'e4', 'red'], ['f5', 'e4', 'red']]
        },
        23: {
          title: 'Guarding e4',
          text: '12.Bf3. The bishop protects e4. 12.f3 is also good, and the next example shows it.',
          arrows: [['f3', 'e4', 'green']]
        },
        24: {
          title: 'Black hits d5',
          text: '12...c6. Black strikes at the d5-pawn from the side, so White cannot keep the center locked on White\'s terms. The engine calls the position roughly equal.',
          arrows: [['c6', 'd5', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Why start with b4?',
      body:
        "In the Mar del Plata, White starts with a knight retreat, 9.Ne1, and c4–c5 only arrives around move 13 or 14. In the Bayonet, **b2–b4 supports c5 straight away**, so the queenside attack starts sooner.\n\nBlack answers in the same spirit: the knight leaves f6 (here to h5) and ...f5 comes at once. Both sides still race on opposite wings. What changes are the details: the e6 hole after ...f5, and Black's chance to jump into f4."
    },
    {
      kind: 'walkthrough',
      title: 'Shirov–Radjabov, Wijk aan Zee 2007',
      intro: 'The game began 5.Be2 O-O 6.Nf3, which reaches the same position. After 11...Nf6, Shirov chose 12.f3.',
      moves: SHIROV,
      start: 23,
      orientation: 'white',
      steps: {
        23: {
          title: 'A pawn wall',
          text: '12.f3. The pawn holds e4 firmly, and the g5-knight still eyes e6.',
          arrows: [['f3', 'e4', 'green'], ['g5', 'e6', 'yellow']]
        },
        24: {
          title: 'King to the corner',
          text: '12...Kh8. A common safety move in the King\'s Indian: the king steps off the g8–a2 diagonal before lines open.',
          marks: ['h8']
        },
        25: {
          title: 'The knight lands',
          text: '13.Ne6. The knight jumps into the hole and attacks the queen, the f8-rook and the g7-bishop at once.',
          arrows: [['e6', 'd8', 'red'], ['e6', 'f8', 'red'], ['e6', 'g7', 'red']]
        },
        26: {
          title: 'Bishop for knight',
          text: '13...Bxe6. Black removes the knight at once, giving up the light-squared bishop.',
          marks: ['e6']
        },
        27: {
          title: 'A pawn on e6',
          text: '14.dxe6. White has the two bishops and a pawn deep in Black\'s camp. The pawn cramps Black, but it is far from home and needs protecting. The engine calls it roughly equal.',
          marks: ['e6']
        },
        28: {
          title: 'Back to h5',
          text: '14...Nh5. The knight heads back to h5, aiming at f4 and g3.',
          arrows: [['h5', 'f4', 'blue']]
        },
        29: {
          title: 'Keeping it out',
          text: '15.g3. The pawn takes f4 away from the knight.',
          arrows: [['g3', 'f4', 'green']]
        },
        30: {
          title: 'The bishop steps out',
          text: '15...Bf6. Black regroups the dark-squared bishop, which keeps an eye on the dark squares near White\'s king.',
          arrows: [['f6', 'h4', 'blue']]
        },
        31: {
          title: 'The queenside lever',
          text: "16.c5. White's usual lever, hitting d6. The engine calls the position roughly equal.",
          arrows: [['c5', 'd6', 'red']]
        },
        32: {
          title: 'Black gains space',
          text: '16...f4. The pawn hits g3 and gains space near White\'s king.',
          arrows: [['f4', 'g3', 'red']]
        },
        33: {
          title: 'The king helps',
          text: '17.Kg2. The king steps up to guard g3 and f3.',
          arrows: [['g2', 'g3', 'green'], ['g2', 'f3', 'green']]
        },
        34: {
          title: 'A knight heads for d4',
          text: '17...Nc6. The other knight is on its way to d4, where it will attack the e6-pawn.',
          arrows: [['c6', 'd4', 'blue']]
        },
        35: {
          title: 'The c-file opens',
          text: '18.cxd6. White opens the c-file, just like in the Mar del Plata.',
          marks: ['d6']
        },
        36: {
          title: 'Black recaptures',
          text: '18...cxd6. Black takes back with the c-pawn. Now no pawns are left on the c-file.',
          marks: ['c6']
        },
        37: {
          title: 'A fine square',
          text: '19.Nd5. The knight takes a strong central post. It eyes f6, c7 and the f4-pawn.',
          arrows: [['d5', 'f6', 'red'], ['d5', 'c7', 'red'], ['d5', 'f4', 'red']]
        },
        38: {
          title: 'Going after e6',
          text: '19...Nd4. The knight attacks the e6-pawn, and nothing white defends it.',
          arrows: [['d4', 'e6', 'red']],
          marks: ['e6']
        },
        39: {
          title: 'White develops',
          text: '20.Bb2. The c1-bishop finally comes out and aims down the long diagonal at the d4-knight.',
          arrows: [['b2', 'd4', 'red']]
        },
        40: {
          title: 'The pawn falls',
          text: '20...Nxe6. Black wins the e6-pawn and is a pawn up. White has the two bishops and a strong knight on d5, so the engine calls it roughly equal. Radjabov went on to win the game.',
          marks: ['e6']
        }
      }
    },
    {
      kind: 'history',
      title: 'The Bayonet at the top',
      body:
        "The Bayonet became popular in the 1990s, when Vladimir Kramnik made it his main weapon against the King's Indian. (It is sometimes said that Korchnoi introduced 9.b4 in the 1970s, but that is not well documented.) Shirov–Radjabov, Wijk aan Zee 2007, was one of the Radjabov wins that helped bring the King's Indian back at the top level."
    }
  ],
  takeaway:
    'The Bayonet 9.b4 supports c4–c5 at once, without Ne1. After 9...Nh5 10.Re1 f5 11.Ng5, White eyes the e6 hole; a knight or pawn on e6 is strong, but it needs support.',
  lookAhead: "Next: Black's other try after 10.Re1, the knight jump 10...Nf4, and how White handles it.",
  drills: [
    {
      title: 'Start the Bayonet',
      prompt: "You're White. After 8...Ne7, start the queenside attack at once. When Black's knight goes to h5, make room for your bishop.",
      moves: `${BAYONET} Nh5 Re1`,
      start: 16,
      side: 'white',
      hints: ['Push the b-pawn two squares.', 'After ...Nh5, a rook move frees f1 for the e2-bishop.'],
      success: '9.b4 and 10.Re1. The queenside attack is under way, and the e2-bishop can drop back to f1 if the knight jumps to f4.'
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'White has just played 9.b4. What is this system called?',
      moves: BAYONET,
      orientation: 'white',
      choices: [
        { text: 'The Bayonet Attack', correct: true, why: 'Right. The b-pawn charges forward like a bayonet.' },
        { text: 'The Kozul Gambit', why: 'That is 13.Rc1 Ng6 14.c5 in the Mar del Plata (Module 4.4).' },
        { text: 'The Mar del Plata', why: 'That is 9.Ne1 Nd7, the line from Chapter 3.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Compared with 9.Ne1, what does 9.b4 gain for White?',
      moves: BAYONET,
      orientation: 'white',
      choices: [
        { text: 'The queenside attack starts sooner: b4 supports c5 without the Ne1–d3 trip', correct: true, why: 'Right. White saves time on the wing where White is attacking.' },
        { text: 'It stops Black from playing ...f5', why: 'Black plays ...f5 anyway, right after ...Nh5. The point of b4 is speed on the queenside.' },
        { text: 'It prepares a kingside attack with the f3-knight', why: 'White attacks on the queenside, where the pawn chain points. b4 is a queenside move.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black has just played 10...f5. Which move fits the main line?',
      moves: `${BAYONET} Nh5 Re1 f5`,
      orientation: 'white',
      choices: [
        { text: '11.Ng5', correct: true, why: 'Right. The knight eyes the e6 hole that ...f5 has just created.' },
        { text: '11.exf5', why: 'This opens the center at the wrong moment: 11...e4! hits the f3-knight and frees the g7-bishop, and the engine prefers Black.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After ...f5, why is e6 such a good square for a white knight?',
      moves: `${BAYONET} Nh5 Re1 f5`,
      orientation: 'white',
      choices: [
        { text: 'No black pawn can ever guard it again, so it is a hole', correct: true, why: "Right. Black's d- and f-pawns have moved past it. To remove a knight there, Black often has to give up a bishop." },
        { text: 'The knight would be safe from every black piece there', why: 'Black can still take it with a piece, as Radjabov did with 13...Bxe6. The point is that no pawn can chase it away.' },
        { text: 'From e6 the knight gives check', why: 'A knight on e6 does not check the king on g8. It attacks d8, f8, g7 and c7.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'In the Bayonet, why does White play 10.Re1 after 9...Nh5?',
      moves: `${BAYONET} Nh5 Re1`,
      orientation: 'white',
      choices: [
        { text: 'It frees f1, so the e2-bishop can retreat there if ...Nf4 comes', correct: true, why: 'Right. Module 4.6 shows why that retreat matters.' },
        { text: 'It prepares the e4–e5 push', why: "Black's e5-pawn blocks the e-pawn, so e4–e5 is impossible." },
        { text: 'It prepares a rook lift to the kingside', why: 'The rook is not heading for the kingside. The point is the f1-square for the bishop.' }
      ]
    },
    {
      type: 'concept',
      prompt: "In Shirov–Radjabov, White got a pawn on e6 after 13.Ne6 Bxe6 14.dxe6. What was the drawback of that pawn?",
      moves: SHIROV.split(' ').slice(0, 27).join(' '),
      orientation: 'white',
      choices: [
        { text: 'It was far from home and hard to protect', correct: true, why: 'Right. Black aimed a knight at it with ...Nc6–d4 and won it with 20...Nxe6.' },
        { text: "It blocked White's own bishops", why: 'It did not block them. The problem was keeping the pawn protected.' },
        { text: 'It could be taken en passant', why: 'En passant only applies right after a pawn moves two squares. That never happened here.' }
      ]
    }
  ],
  key: { name: 'Bayonet Attack: 9.b4', moves: BAYONET, orientation: 'white' },
  terms: [
    { term: 'Hole', meaning: 'A square that no enemy pawn can guard any more. A knight on a hole is hard to drive away.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one away. Often an advantage in open positions.' },
    { term: 'Bayonet Attack', meaning: "9.b4 in the King's Indian main line: White attacks on the queenside before playing Ne1." }
  ]
})
