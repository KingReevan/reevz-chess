import { defineModule } from '../../../types'
import { ROSSOLIMO } from '../lines'

/** rossolimo-bxc6: 3...g6 4.Bxc6 dxc6 5.d3 Bg7 6.h3 Nf6 7.Nc3 O-O 8.Be3 b6 9.Qd2 e5 */
const BXC6 = `${ROSSOLIMO} g6 Bxc6 dxc6 d3 Bg7 h3 Nf6 Nc3 O-O Be3 b6 Qd2 e5`
/** model-caruana-carlsen-2018-g1, opening only (the game was drawn in 115 moves) */
const CC = `${ROSSOLIMO} g6 Bxc6 dxc6 d3 Bg7 h3 Nf6 Nc3 Nd7 Be3 e5 O-O b6 Nh2 Nf8 f4 exf4 Rxf4 Be6`

export default defineModule({
  id: '9.2',
  title: 'Bxc6: doubled pawns for the bishop pair',
  minutes: 11,
  level: 2,
  goals: [
    "Learn White's set-up after 4.Bxc6: d3, h3, Nc3, Be3 and Qd2",
    'Know why Black takes back with the d-pawn, and what the bishop pair is worth',
    'Follow Caruana–Carlsen, World Championship 2018, game 1'
  ],
  intro:
    "In the Rossolimo, White often gives up the b5-bishop for the c6-knight. Black's pawns get doubled on the c-file, but Black keeps both bishops. Which matters more? This module shows the plans for both sides, and a World Championship game that started this way.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The trade at once: 4.Bxc6',
      intro: "Watch White's quiet moves. Each one has a small job, and together they make a plan.",
      moves: BXC6,
      start: 6,
      orientation: 'white',
      steps: {
        6: {
          title: 'Black fianchettoes',
          text: '3...g6. Black prepares ...Bg7. This time White does not castle first.',
          arrows: [['f8', 'g7', 'blue']]
        },
        7: {
          title: 'Bishop for knight',
          text: '4.Bxc6. White trades at once. Black will get doubled c-pawns, and White will play against them.',
          marks: ['c6']
        },
        8: {
          title: 'Away from the center',
          text: "4...dxc6. The usual rule is to capture toward the center, with the b-pawn. Black breaks the rule on purpose: the d-pawn frees the queen's d-file and the c8-bishop's diagonal. 4...bxc6 is also fine.",
          arrows: [['d8', 'd2', 'blue'], ['c8', 'h3', 'blue']],
          marks: ['c5', 'c6']
        },
        9: {
          title: 'A modest center',
          text: '5.d3. White supports e4 and opens the c1-bishop. White does not need d4: the plan is slow and simple.',
          arrows: [['d3', 'e4', 'green']]
        },
        10: {
          title: 'The bishop pair',
          text: "5...Bg7. Black's two bishops are the reward for the doubled pawns. In an open game they can become very strong.",
          arrows: [['g7', 'b2', 'blue']]
        },
        11: {
          title: 'No ...Bg4, no ...Ng4',
          text: '6.h3. A small but useful move. It stops ...Bg4, which would pin the f3-knight to the queen, and it keeps a black knight off g4, where it could hit a bishop on e3.',
          arrows: [['h3', 'g4', 'green']],
          marks: ['g4']
        },
        12: {
          title: 'Black develops',
          text: '6...Nf6. The knight comes out and attacks e4.',
          arrows: [['f6', 'e4', 'red']]
        },
        13: {
          title: 'e4 is covered',
          text: '7.Nc3. The knight develops and guards e4.',
          arrows: [['c3', 'e4', 'green']]
        },
        14: {
          title: 'Black castles',
          text: "7...O-O. Black's king is safe behind the g7-bishop."
        },
        15: {
          title: 'The bishop hits c5',
          text: '8.Be3. The bishop attacks the c5-pawn, which nothing defends. It also eyes h6, to trade off the g7-bishop later.',
          arrows: [['e3', 'c5', 'red'], ['e3', 'h6', 'blue']],
          marks: ['c5']
        },
        16: {
          title: 'Propping up c5',
          text: '8...b6. The b-pawn now guards c5. Black is happy to keep the doubled pawns on c5 and c6, where they cover b4, b5, d4 and d5.',
          arrows: [['b6', 'c5', 'green']]
        },
        17: {
          title: 'Getting ready for Bh6',
          text: "9.Qd2. The queen backs up the e3-bishop. Next White can play Bh6 to trade off Black's best piece, the g7-bishop.",
          arrows: [['e3', 'h6', 'yellow'], ['h6', 'g7', 'yellow']]
        },
        18: {
          title: 'Space in the center',
          text: "9...e5. Black grabs space and takes d4 away from White's pieces. The e5-pawn looks loose, but if 10.Nxe5, then 10...Nxe4! wins it back: once the f6-knight jumps, the g7-bishop guards e5 again. The game is roughly level.",
          arrows: [['c5', 'd4', 'green'], ['e5', 'd4', 'green']],
          marks: ['d4']
        }
      }
    },
    {
      kind: 'text',
      title: 'Doubled pawns against the bishop pair',
      body:
        "**White's plan:** h3, Nc3, Be3 and Qd2, then Bh6 to trade the g7-bishop. Later White plays f4 (often after Nh2, which clears the f-pawn's path) or brings a knight to g4. White also aims at the doubled c-pawns, which can never protect each other.\n\n**Black's plan:** ...e5 to take space and cover d4, ...b6 to support c5, and a knight trip like ...Nd7–f8–e6 toward d4. Black wants the position to open up, because open lines help the two bishops.\n\nThe engine calls this roughly level, or a little better for White. It is a slow, strategic fight, which is exactly why top players choose it."
    },
    {
      kind: 'walkthrough',
      title: 'Caruana–Carlsen, World Championship 2018, game 1',
      intro: 'Fabiano Caruana had White against Magnus Carlsen. We join the game after 6...Nf6, the same position as above.',
      moves: CC,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'A familiar position',
          text: '6...Nf6. Exactly the position from the first walkthrough. Carlsen now picks a different plan.',
          arrows: [['f6', 'e4', 'red']]
        },
        13: {
          title: 'e4 is guarded',
          text: '7.Nc3. The knight defends e4, as before.',
          arrows: [['c3', 'e4', 'green']]
        },
        14: {
          title: 'The knight steps back',
          text: '7...Nd7. The knight heads for f8 and then e6, where it will watch d4 and f4. It also clears the long diagonal for the g7-bishop.',
          arrows: [['d7', 'f8', 'blue'], ['f8', 'e6', 'blue']]
        },
        15: {
          title: 'Pressure on c5',
          text: '8.Be3. The bishop attacks c5 again. This time the d7-knight guards it.',
          arrows: [['e3', 'c5', 'red'], ['d7', 'c5', 'green']]
        },
        16: {
          title: 'Black takes space',
          text: '8...e5. The e5-pawn is guarded by the d7-knight and the g7-bishop, and d4 is now covered by two pawns.',
          arrows: [['c5', 'd4', 'green'], ['e5', 'd4', 'green']]
        },
        17: {
          title: 'White castles',
          text: "9.O-O. Caruana castles short. The f1-rook will matter once the f-pawn moves. Black's king is still in the middle.",
          marks: ['f2']
        },
        18: {
          title: 'Freeing the knight',
          text: '9...b6. A pawn takes over the job of guarding c5, so the d7-knight is free to go on its trip.',
          arrows: [['b6', 'c5', 'green']]
        },
        19: {
          title: 'Clearing the f-pawn',
          text: '10.Nh2. The knight steps back so that the f-pawn can advance. White wants f4 to attack e5. From h2 the knight can also jump to g4.',
          arrows: [['f2', 'f4', 'green'], ['h2', 'g4', 'blue']]
        },
        20: {
          title: 'On the way to e6',
          text: '10...Nf8. The knight continues its journey toward e6.',
          arrows: [['f8', 'e6', 'blue']]
        },
        21: {
          title: 'The f4 break',
          text: "11.f4. White strikes at e5 and opens the f-file for the rook. This break is White's main idea in these positions.",
          arrows: [['f4', 'e5', 'red']],
          ann: '!'
        },
        22: {
          title: 'Black takes',
          text: "11...exf4. Black captures. White's f-pawn is gone, so the f-file is now half-open for White.",
          marks: ['f4']
        },
        23: {
          title: 'A rook on the f-file',
          text: "12.Rxf4. The rook takes back and stands on the half-open f-file, aimed at f7. White's pieces are active.",
          arrows: [['f4', 'f7', 'red']]
        },
        24: {
          title: 'Development done',
          text: '12...Be6. Black develops the last minor piece. White is slightly better. The game was drawn after 115 moves.',
          marks: ['e6']
        }
      }
    },
    {
      kind: 'history',
      title: 'The Rossolimo at the top',
      body:
        'In the 2018 World Championship match in London, Caruana chose the Rossolimo three times, in games 1, 3 and 5. Game 1 lasted 115 moves and ended in a draw. Games 8, 10 and 12 of the same match were Sveshnikovs instead (Module 5.5).'
    }
  ],
  takeaway:
    "After Bxc6, Black has doubled c-pawns and the two bishops. White plays d3, h3, Nc3, Be3 and Qd2, aims for Bh6 and the f4 break, and presses the c-pawns. Black takes back with the d-pawn, props up c5 with ...b6, grabs space with ...e5, and wants open lines for the bishops.",
  lookAhead:
    "Module 9.3 turns to Black's other main answer to 3.Bb5: 3...e6, with ...Nge7 so that a knight can take back on c6.",
  drills: [
    {
      title: "White's slow set-up",
      prompt: "You're White. Black has just played 3...g6. Trade on c6, then set up quietly: support e4, stop ...Bg4, and guard e4 with a knight.",
      moves: `${ROSSOLIMO} g6 Bxc6 dxc6 d3 Bg7 h3 Nf6 Nc3`,
      start: 6,
      side: 'white',
      hints: [
        'Start by taking the knight that guards d4 and e5.',
        'Then a d-pawn move, a rook-pawn move that controls g4, and a knight move that defends e4.'
      ],
      success: '4.Bxc6, 5.d3, 6.h3 and 7.Nc3. Next come Be3 and Qd2.'
    },
    {
      title: 'The hidden defender',
      prompt: "You're Black. White has just grabbed your e5-pawn with 10.Nxe5. Win it back.",
      moves: `${BXC6} Nxe5 Nxe4 Nxe4 Bxe5`,
      start: 19,
      side: 'black',
      hints: [
        'Which of your pieces is standing in front of the g7-bishop?',
        'Move that piece with a capture, and the bishop will see e5 again.'
      ],
      success: "10...Nxe4! 11.Nxe4 Bxe5. Both sides have taken a pawn, the knights are traded, and the game is level."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 3...g6 4.Bxc6 dxc6, what does Black get in return for the doubled c-pawns?',
      moves: `${ROSSOLIMO} g6 Bxc6 dxc6`,
      orientation: 'black',
      choices: [
        { text: 'The two bishops, plus open lines for the queen and the c8-bishop', correct: true, why: 'Right. The d-file and the c8–h3 diagonal open at once, and in an open game the bishop pair can be strong.' },
        { text: 'An extra pawn', why: 'Material is level: a bishop for a knight. The compensation is the bishop pair and open lines.' },
        { text: 'A safer king', why: "Black's king is no safer than before. The trade is about the bishops against the pawn structure." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does White play 6.h3 in this line?',
      moves: `${ROSSOLIMO} g6 Bxc6 dxc6 d3 Bg7 h3`,
      orientation: 'white',
      choices: [
        { text: 'To stop ...Bg4 and keep a black knight off g4', correct: true, why: 'Yes. ...Bg4 would pin the f3-knight to the queen, and a knight on g4 could hit a bishop on e3.' },
        { text: 'To start a pawn storm with g4 and g5', why: "White's plan is slow and positional. h3 is a quiet, useful move, not the start of an attack." },
        { text: 'To give the king an escape square after castling', why: 'White has not castled yet. The point is the g4 square.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move. Can White win the e5-pawn with 10.Nxe5?',
      moves: BXC6,
      orientation: 'white',
      choices: [
        { text: 'No: 10...Nxe4! wins it back, because the g7-bishop then guards e5', correct: true, why: 'Right. After 11.Nxe4 Bxe5 material is level. The f6-knight was hiding the bishop.' },
        { text: 'Yes: nothing defends e5, so White is a clean pawn up', why: 'Nothing defends e5 right now, but 10...Nxe4! uncovers the g7-bishop and Black wins a pawn back at once.' },
        { text: 'No: 10...Qd4 forks e5 and e4', why: 'The e3-bishop covers d4, so the queen would simply be taken. The real answer is 10...Nxe4.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In Caruana–Carlsen 2018, why did White play 10.Nh2?',
      moves: CC.split(' ').slice(0, 19).join(' '),
      orientation: 'white',
      choices: [
        { text: 'To clear the way for f4, attacking e5', correct: true, why: 'Yes. With the knight gone from f3, the f-pawn can advance, and White played 11.f4 next.' },
        { text: 'To escape an attack on the knight', why: 'Nothing was attacking the f3-knight. The retreat had a purpose: the f4 break.' },
        { text: 'To guard the g4-square against ...Bg4', why: 'The h3-pawn already covers g4. The knight moved to free the f-pawn.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 3...g6 4.Bxc6, which statement about the recapture is true?',
      moves: `${ROSSOLIMO} g6 Bxc6`,
      orientation: 'black',
      choices: [
        { text: 'Both 4...dxc6 and 4...bxc6 are fine; 4...dxc6 opens the d-file and the c8-bishop', correct: true, why: 'Right. 4...dxc6 breaks the "capture toward the center" rule on purpose, to free the queen and the light-squared bishop.' },
        { text: '4...dxc6 is a mistake, because pawns should always capture toward the center', why: 'It is a good rule, but not a law. Here 4...dxc6 is a main line, because it frees two pieces.' },
        { text: '4...bxc6 loses a pawn', why: '4...bxc6 is perfectly playable. Neither recapture loses material.' }
      ]
    },
    {
      type: 'plan',
      prompt: "In the 4.Bxc6 structure, why does White often play Qd2 and Bh6?",
      moves: BXC6.split(' ').slice(0, 17).join(' '),
      orientation: 'white',
      choices: [
        { text: "To trade off the g7-bishop, Black's best piece", correct: true, why: 'Yes. Without the g7-bishop, Black loses half of the bishop pair and the dark squares around the king get weaker.' },
        { text: 'To win the h7-pawn', why: 'Bh6 does not attack h7. The target is the g7-bishop.' },
        { text: 'To prepare castling queenside and a pawn storm', why: 'White can castle either side here. The point of Qd2 and Bh6 is the bishop trade.' }
      ]
    }
  ],
  key: { name: 'Rossolimo: 4.Bxc6 dxc6', moves: `${ROSSOLIMO} g6 Bxc6 dxc6`, orientation: 'white' },
  terms: [
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one off. Strong in open positions.' },
    { term: 'Capture toward the center', meaning: 'A rule of thumb: when a pawn takes, it should usually move toward the middle of the board. Good players break it when they have a reason.' },
    { term: 'Half-open file', meaning: 'A file with pawns of only one color on it. The side without a pawn there can use it for rooks.' }
  ]
})
