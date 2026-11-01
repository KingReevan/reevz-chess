import { defineModule } from '../../../types'
import { KID, CLASSICAL } from '../lines'

/** classical-8nxe5: the pawn comes straight back */
const GRAB = `${CLASSICAL} dxe5 dxe5 Nxe5 Qxd1+ Bxd1 Nxe4 Nxe4 Bxe5`
/** classical-8nxe5 up to 10.Nxe4, for the White drill */
const GRAB_W = `${CLASSICAL} dxe5 dxe5 Nxe5 Qxd1+ Bxd1 Nxe4 Nxe4`
/** samisch-6e5 and samisch-7dxe5 */
const SAMISCH_E5 = `${KID} f3 O-O Be3 e5 dxe5 dxe5 Qxd8 Rxd8 Nd5 Nxd5 cxd5 c6`

export default defineModule({
  id: '1.6',
  title: 'Break one: ...e5',
  minutes: 11,
  level: 1,
  goals: [
    'See how ...e5 hits d4 from the side',
    'Count attackers and defenders, then look one move deeper',
    'Learn the ...Nxe4 and ...Bxe5 answer to Nxe5'
  ],
  intro:
    "...e5 is Black's main way to hit White's center. But when you count, the e5-pawn looks like it simply hangs: two white pieces attack it and only one black pawn defends it. So why do strong players play ...e5 all the time? This module shows the hidden resource.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Is e5 really hanging?',
      intro: 'The Classical Variation. Count the attackers and defenders of e5, then watch how Black wins the pawn back.',
      moves: GRAB,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'Time to strike',
          text: "6.Be2. White has developed calmly. Black's king is safe on g8, so the fight can start.",
          marks: ['g8']
        },
        12: {
          title: 'The break',
          text: '6...e5. The pawn hits d4 from the side. Count: e5 is attacked twice (the d4-pawn and the f3-knight) and defended once (the d6-pawn).',
          arrows: [['d4', 'e5', 'red'], ['f3', 'e5', 'red'], ['d6', 'e5', 'green']]
        },
        13: {
          title: 'White takes',
          text: '7.dxe5. White starts the exchange on e5.',
          marks: ['e5']
        },
        14: {
          title: 'Black takes back',
          text: "7...dxe5. Now the d6-pawn is gone, so nothing guards e5, and the f3-knight is looking at it. But the d-file is open, and e4 is guarded only by the c3-knight.",
          arrows: [['f3', 'e5', 'red'], ['f6', 'e4', 'yellow']]
        },
        15: {
          title: 'The grab',
          text: '8.Nxe5. White wins a pawn, for now. Can you see how Black gets it back?',
          marks: ['e5'],
          ann: '?!'
        },
        16: {
          title: 'Queens off first',
          text: "8...Qxd1+. Black trades queens with check, so White has no time to protect anything.",
          arrows: [['d1', 'e1', 'red']],
          ann: '!'
        },
        17: {
          title: 'The bishop takes back',
          text: '9.Bxd1. The bishop takes back. Now look at e4 and at the long diagonal.',
          marks: ['e4']
        },
        18: {
          title: 'Two hits in one move',
          text: '9...Nxe4. The knight takes the e4-pawn. And because the f6-knight has moved, the g7-bishop now attacks the e5-knight.',
          arrows: [['g7', 'e5', 'red']],
          ann: '!'
        },
        19: {
          title: 'White takes the knight',
          text: '10.Nxe4. White removes the e4-knight. The e5-knight is still hanging.',
          arrows: [['g7', 'e5', 'red']]
        },
        20: {
          title: 'Material is level',
          text: '10...Bxe5. The bishop takes the knight. Both sides have given up a queen, a knight and two pawns, so material is equal. Black\'s pieces are active, and if anything Black is a little more comfortable. 8.Nxe5 won nothing.',
          marks: ['e5']
        }
      }
    },
    {
      kind: 'text',
      title: 'Count, then look one move deeper',
      body:
        "Counting attackers and defenders is a great habit, but it isn't the whole story. When pawns are exchanged, lines open, and new targets appear.\n\nHere, after dxe5 dxe5 the e4-pawn became loose. When White's knight took on e5, Black's knight took on e4, and moving the f6-knight opened the long diagonal for the g7-bishop. That is the bishop from Module 1.3 doing its job.\n\nThe same trick works when White trades queens first: after 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nxe5, Black plays 9...Nxe4 and the pawn comes back. Chapter 2 looks at that Exchange Variation in detail."
    },
    {
      kind: 'tip',
      title: "White's three answers to ...e5",
      body:
        "**Take:** 7.dxe5. The queens usually come off and the game is level and quiet (Module 2.3).\n\n**Push past:** 7.d5. The center locks, and each side attacks on its own wing (Module 2.7 and Chapter 5).\n\n**Keep the tension:** 7.O-O. White leaves the pawns where they are and finishes developing. This is the main line (Module 2.6)."
    },
    {
      kind: 'walkthrough',
      title: 'Same break against the Sämisch',
      intro: 'The Sämisch (5.f3 O-O 6.Be3) is a different White system, but Black can strike with ...e5 here too. Look at what changed.',
      moves: SAMISCH_E5,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'A different count',
          text: '6...e5. Here White has a pawn on f3, not a knight. So e5 is attacked only once, and the f3-pawn guards e4: the ...Nxe4 trick is gone, but it isn\'t needed.',
          arrows: [['d4', 'e5', 'red'], ['d6', 'e5', 'green']],
          marks: ['f3']
        },
        13: {
          title: 'White takes',
          text: "7.dxe5. This is harmless for Black. White's usual moves here are 7.d5 and 7.Nge2 (Chapter 6).",
          marks: ['e5']
        },
        14: {
          title: 'Nothing attacks e5',
          text: '7...dxe5. Black takes back, and no white piece attacks the e5-pawn at all.',
          marks: ['e5']
        },
        15: {
          title: 'Queens off',
          text: '8.Qxd8. White trades queens.',
          marks: ['d8']
        },
        16: {
          title: 'The rook takes back',
          text: '8...Rxd8. Black castled first, so a rook recaptures and the king stays safe.',
          arrows: [['f8', 'd8', 'green']]
        },
        17: {
          title: 'A knight jump',
          text: '9.Nd5. The knight attacks the f6-knight and the c7-pawn.',
          arrows: [['d5', 'f6', 'red'], ['d5', 'c7', 'red']]
        },
        18: {
          title: 'Remove the knight',
          text: '9...Nxd5. Black simply takes it.',
          marks: ['d5']
        },
        19: {
          title: 'A new pawn on d5',
          text: '10.cxd5. White takes back with the c-pawn.',
          marks: ['d5']
        },
        20: {
          title: 'Level',
          text: '10...c6. Black hits the d5-pawn at once. The position is level: the exchange on e5 gave White nothing.',
          arrows: [['c6', 'd5', 'red']]
        }
      }
    }
  ],
  takeaway:
    "...e5 hits d4 from the side. It looks like it drops a pawn, but after dxe5 dxe5 Nxe5, Black answers with ...Nxe4, and the g7-bishop wins the pawn back on e5.",
  lookAhead:
    "Next, Module 1.7 shows Black's other break: ...c5, hitting d4 from the queenside.",
  drills: [
    {
      title: 'Win the pawn back',
      prompt: "You're Black. White has just grabbed your e5-pawn with 8.Nxe5. Get it back.",
      moves: GRAB,
      start: 15,
      side: 'black',
      hints: ['First trade queens with check.', 'Then take the e4-pawn with the knight: that opens the long diagonal for your bishop.'],
      success: '8...Qxd1+, 9...Nxe4 and 10...Bxe5. Material is level again, and Black is comfortable.'
    },
    {
      title: 'Keep it level',
      prompt: "You're White. You took on e5, and Black answered 9...Nxe4. Find the move that keeps material level.",
      moves: GRAB_W,
      start: 18,
      side: 'white',
      hints: ['A black knight has just taken your e4-pawn.', 'Take that knight with your c3-knight.'],
      success: '10.Nxe4 Bxe5 is level. Other moves, like 10.f4?, let Black win material with ...Nxc3.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 6...e5, how many times is the e5-pawn attacked and defended?',
      moves: CLASSICAL,
      orientation: 'black',
      choices: [
        { text: 'Attacked twice, defended once', correct: true, why: 'Yes: the d4-pawn and the f3-knight attack it, and only the d6-pawn defends it.' },
        { text: 'Attacked twice, defended twice', why: "The g7-bishop doesn't defend e5 yet: the f6-knight blocks it." },
        { text: 'Attacked once, defended once', why: 'Count again: the f3-knight attacks e5 as well as the d4-pawn.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White grabbed e5 and the queens are off. How does Black win the pawn back?',
      moves: `${CLASSICAL} dxe5 dxe5 Nxe5 Qxd1+ Bxd1`,
      orientation: 'black',
      choices: [
        { text: '9...Nxe4', correct: true, why: 'Right. The knight takes e4, and the g7-bishop now attacks the e5-knight.' },
        { text: '9...Be6', why: "A useful developing move, but it doesn't win anything back. 9...Nxe4 regains the pawn at once." },
        { text: '9...Nc6', why: "It attacks the e5-knight, but the knight can simply take on c6. 9...Nxe4 is the move that wins the pawn back." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does 9...Nxe4 also put the e5-knight in danger?',
      choices: [
        { text: 'The f6-knight has left the long diagonal, so the g7-bishop now attacks e5', correct: true, why: 'Exactly. One knight move does two jobs.' },
        { text: 'The knight on e4 attacks e5', why: "Knights never attack the square next to them. It's the bishop that hits e5." },
        { text: 'It pins the e5-knight to the king', why: 'There is no pin here. The bishop simply attacks the knight.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Sämisch (5.f3), why is ...e5 attacked only once?',
      moves: `${KID} f3 O-O Be3 e5`,
      orientation: 'black',
      choices: [
        { text: 'White played f3, so there is no knight on f3 to attack e5', correct: true, why: 'Right. Only the d4-pawn attacks e5 here.' },
        { text: 'The e3-bishop defends e5', why: "The e3-bishop is White's piece, and it doesn't touch e5 anyway." },
        { text: 'Black has castled', why: "Castling doesn't change who attacks e5. The missing f3-knight does." }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move. White has just played 8.Nxe5. What is the most accurate reply?',
      moves: `${CLASSICAL} dxe5 dxe5 Nxe5`,
      orientation: 'black',
      choices: [
        { text: '8...Qxd1+', correct: true, why: 'Yes. Trade queens with check first, then ...Nxe4 and ...Bxe5 win the pawn back.' },
        { text: '8...Nbd7', why: 'It attacks the knight, but White stays clearly better. Trading queens with check and then ...Nxe4 is what wins the pawn back.' },
        { text: '8...Re8', why: 'After 9.Qxd8 Rxd8 10.Nd3 White has traded queens on its own terms and keeps the extra pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Classical, what does White usually get from 7.dxe5 dxe5 8.Qxd8 Rxd8?',
      choices: [
        { text: 'A quiet, level endgame with the queens off', correct: true, why: 'Right. The Exchange Variation is a calm way to avoid theory, but it gives White no real advantage.' },
        { text: "A winning attack on Black's king", why: 'With the queens gone and Black castled, there is no attack. The game is quiet.' },
        { text: 'The e5-pawn for free', why: 'If White grabs e5, ...Nxe4 wins it back. Material stays level.' }
      ]
    }
  ],
  key: { name: 'The ...e5 break: 10...Bxe5 wins the pawn back', moves: GRAB, orientation: 'black' },
  terms: [
    { term: 'Pawn break', meaning: "A pawn move that attacks the opponent's pawns to open lines, like ...e5 or ...c5." },
    { term: 'Tension', meaning: 'Two pawns that attack each other but have not traded yet. Keeping the tension keeps options open.' },
    { term: 'Open file', meaning: 'A file with no pawns on it. Rooks and queens are strong there.' }
  ]
})
