import { defineModule } from '../../../types'
import { ACCELERATED } from '../lines'

/** accel-maroczy: 5.c4 Bg7 6.Be3 Nf6 7.Nc3 O-O 8.Be2 d6 9.O-O Bd7 */
const MAROCZY = `${ACCELERATED} c4 Bg7 Be3 Nf6 Nc3 O-O Be2 d6 O-O Bd7`
/** accel-breyer-ng4: 7...Ng4 8.Qxg4 Nxd4 9.Qd1 Ne6 */
const BREYER = `${ACCELERATED} c4 Bg7 Be3 Nf6 Nc3 Ng4 Qxg4 Nxd4 Qd1 Ne6`
/** accel-5nxc6: 5.Nxc6 bxc6 6.Qd4 Nf6 7.e5 Nd5 */
const NXC6 = `${ACCELERATED} Nxc6 bxc6 Qd4 Nf6 e5 Nd5`

export default defineModule({
  id: '3.9',
  title: 'The Maróczy Bind 5.c4 (and 5.Nxc6)',
  minutes: 11,
  level: 2,
  goals: [
    'See how pawns on c4 and e4 clamp the d5-square',
    "Learn Black's freeing ideas: trades on d4 and the ...Ng4 trick",
    'Know the quiet answer to 5.Nxc6: take back toward the center'
  ],
  intro:
    "Module 3.8 showed the reward of the Accelerated Dragon: ...d5 in one move. This module shows the price. Because Black has not attacked e4 yet, White can play 5.c4 and put a grip on d5 that is very hard to break. How should Black live with it?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The bind',
      intro: 'Count the white guards on d5 as the moves go by.',
      moves: MAROCZY,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'Nothing hits e4',
          text: '4...g6. Black has not played ...Nf6, so the e4-pawn is not under attack. White does not need Nc3 yet.',
          marks: ['e4']
        },
        9: {
          title: 'The Maróczy Bind',
          text: '5.c4. White puts pawns on c4 and e4. Together they grip the d5-square, so Black\'s freeing move ...d5 becomes very hard.',
          arrows: [['c4', 'd5', 'yellow'], ['e4', 'd5', 'yellow']],
          marks: ['d5']
        },
        10: {
          title: 'The bishop hits d4',
          text: '5...Bg7. With f6 still empty, the bishop and the c6-knight both attack the d4-knight. Only the queen guards it.',
          arrows: [['g7', 'd4', 'red'], ['c6', 'd4', 'red']]
        },
        11: {
          title: 'A second guard',
          text: '6.Be3. The bishop guards d4.',
          arrows: [['e3', 'd4', 'green']]
        },
        12: {
          title: 'Now e4 is hit',
          text: '6...Nf6. The knight attacks e4, which has no guard yet.',
          arrows: [['f6', 'e4', 'red']]
        },
        13: {
          title: 'Knight to c3',
          text: '7.Nc3. The knight guards e4 and becomes a third guard of d5.',
          arrows: [['c3', 'e4', 'green'], ['c3', 'd5', 'yellow']]
        },
        14: {
          title: 'Black castles',
          text: '7...O-O. Black gets the king safe.',
          marks: ['g8']
        },
        15: {
          title: 'Quiet development',
          text: '8.Be2. White develops and gets ready to castle.',
          arrows: [['f1', 'e2', 'green']]
        },
        16: {
          title: 'The d-pawn waits',
          text: '8...d6. With the c4-pawn, the e4-pawn and the c3-knight all covering d5, ...d5 is out of reach for now. Black plays ...d6 instead.',
          marks: ['d5']
        },
        17: {
          title: 'White castles',
          text: '9.O-O. White has more space and an easy position.',
          marks: ['g1']
        },
        18: {
          title: "Black's patient plan",
          text: '9...Bd7. Black often follows with ...Nxd4 and ...Bc6, then ...a5, and waits for the right moment for ...b5 or ...f5. White has a pleasant edge, but Black is solid.',
          arrows: [['d7', 'c6', 'blue'], ['b7', 'b5', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'How Black breathes',
      body:
        "When you have less space, **trade pieces**. Fewer pieces need fewer squares. That is why Black often plays ...Nxd4 in the Maróczy Bind.\n\nOne direct version is the Gurgenidze: 5.c4 Nf6 6.Nc3 Nxd4 7.Qxd4 d6. Black swaps knights at once, and White keeps only a small edge.\n\nAnother is the ...Ng4 trick, sometimes called the Breyer. It trades a pair of minor pieces with a small tactic. The next board shows it."
    },
    {
      kind: 'walkthrough',
      title: 'The ...Ng4 trick',
      intro: 'Black gives up a knight for one move, then takes one back. Watch the d4-knight once the queen leaves d1.',
      moves: BREYER,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'The position',
          text: '6...Nf6. Black develops the knight and hits e4.',
          arrows: [['f6', 'e4', 'red']]
        },
        13: {
          title: 'White guards e4',
          text: '7.Nc3. Now the queen on d1 is the only piece guarding d4 besides the e3-bishop.',
          arrows: [['d1', 'd4', 'green'], ['e3', 'd4', 'green']]
        },
        14: {
          title: 'The knight jumps',
          text: "7...Ng4. The knight attacks the e3-bishop. White's queen can take it, but then the queen no longer guards d4.",
          arrows: [['g4', 'e3', 'red'], ['d1', 'g4', 'blue']]
        },
        15: {
          title: 'Queen takes',
          text: '8.Qxg4. White wins a knight for the moment. But now the d4-knight is attacked twice and guarded only by the e3-bishop.',
          arrows: [['g7', 'd4', 'red'], ['c6', 'd4', 'red'], ['e3', 'd4', 'green']],
          marks: ['d4']
        },
        16: {
          title: 'Knight takes back',
          text: '8...Nxd4. Material is level again. And the knight threatens ...Nc2+, forking the king and the a1-rook.',
          arrows: [['d4', 'c2', 'red']],
          marks: ['e1', 'a1']
        },
        17: {
          title: 'The queen returns',
          text: '9.Qd1. The queen comes home to guard c2.',
          arrows: [['d1', 'c2', 'green']]
        },
        18: {
          title: 'A pair of pieces gone',
          text: '9...Ne6. The knight steps back. A pair of minor pieces has been traded, so Black has more room. The g7-bishop now sees all the way to c3. White keeps a small edge.',
          arrows: [['g7', 'c3', 'yellow']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '5.Nxc6: trading at once',
      intro: 'Instead of the bind, White can swap knights on move 5. Black takes back toward the center.',
      moves: NXC6,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The Accelerated Dragon',
          text: '4...g6. This time White trades knights straight away.',
          marks: ['c6']
        },
        9: {
          title: 'Knight takes knight',
          text: '5.Nxc6. White removes the c6-knight before Black can castle.',
          marks: ['c6']
        },
        10: {
          title: 'Toward the center',
          text: '5...bxc6. Black takes back with the b-pawn. Now the pawns on c6, d7 and e7 can later build a strong center, and the b-file is half-open.',
          arrows: [['c6', 'd5', 'blue'], ['a8', 'b8', 'blue']]
        },
        11: {
          title: 'The queen in the center',
          text: "6.Qd4. The queen hits the h8-rook along the long diagonal, and the a7-pawn too. Black's bishop is not on g7 yet.",
          arrows: [['d4', 'h8', 'red'], ['d4', 'a7', 'red']]
        },
        12: {
          title: 'Block the diagonal',
          text: '6...Nf6. The knight develops and blocks the diagonal to h8.',
          arrows: [['f6', 'e4', 'red']]
        },
        13: {
          title: 'Kick the knight',
          text: '7.e5. The pawn chases the knight.',
          arrows: [['e5', 'f6', 'red']]
        },
        14: {
          title: 'A central knight',
          text: '7...Nd5. The knight jumps to a strong central square. The engine calls the position level.',
          marks: ['d5']
        }
      }
    },
    {
      kind: 'history',
      title: "Nezhmetdinov's queen sacrifice",
      body:
        "The same ...Ng4 trick appears after 5.Nc3 Bg7 6.Be3 Nf6 7.Bc4 O-O 8.Bb3 Ng4 9.Qxg4 Nxd4. In Nezhmetdinov–Chernikov, Rostov-on-Don 1962, the game went on 10.Qh4 Qa5 11.O-O Bf6, and Nezhmetdinov gave up his queen with 12.Qxf6!? Ne2+ 13.Nxe2 exf6, getting a bishop and a knight for it and a long-lasting attack. He won in 33 moves. The engine says the sacrifice was sound, but no stronger than the quiet 12.Qh6 or 12.Qg4. The game was decided later. Module 9.7 looks at it again."
    }
  ],
  takeaway:
    "In the Maróczy Bind, White's pawns on c4 and e4 clamp d5. Black answers patiently: trade pieces with ...Nxd4 or the ...Ng4 trick, then look for ...b5 or ...f5. Against 5.Nxc6, take back with 5...bxc6 and block the queen with ...Nf6.",
  lookAhead:
    "Chapter 4 leaves the fianchetto behind: Black develops with 5...Nc6, the Classical Sicilian, and meets White's Richter–Rauzer.",
  drills: [
    {
      title: 'Build the bind',
      prompt: "You're White. Black has just played 4...g6, and nothing attacks e4 yet. Set up the Maróczy Bind and castle.",
      moves: `${ACCELERATED} c4 Bg7 Be3 Nf6 Nc3 O-O Be2 d6 O-O`,
      start: 8,
      side: 'white',
      hints: [
        'Put a second pawn next to e4, so that two pawns cover d5.',
        'c4, then guard d4 with the bishop, guard e4 with the knight, develop the other bishop and castle.'
      ],
      success: '5.c4, 6.Be3, 7.Nc3, 8.Be2 and 9.O-O. Three White units cover d5, and Black has to be patient.'
    },
    {
      title: 'The ...Ng4 trick',
      prompt: "You're Black in the Maróczy Bind. White has just played 7.Nc3. Use the ...Ng4 trick to trade a pair of minor pieces.",
      moves: BREYER,
      start: 13,
      side: 'black',
      hints: [
        'Attack the e3-bishop with your f6-knight.',
        'After Qxg4, the d4-knight has only one guard. Take it, and after Qd1 bring the knight back to e6.'
      ],
      success: '7...Ng4, 8...Nxd4 and 9...Ne6. Material is level, a pair of minor pieces is gone, and Black has more room.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'White has just played 5.c4. Which square does the Maróczy Bind clamp?',
      moves: `${ACCELERATED} c4`,
      orientation: 'white',
      choices: [
        { text: 'd5', correct: true, why: "Right. The c4- and e4-pawns both cover d5, so Black's freeing ...d5 is very hard." },
        { text: 'e5', why: 'The c4- and e4-pawns do not cover e5. Their target is d5.' },
        { text: 'c5', why: 'A pawn on c4 attacks b5 and d5, not c5. The key square is d5.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Why can White play 5.c4 in the Accelerated Dragon, when it is not possible at the same moment in the normal Dragon?',
      choices: [
        { text: 'Black has not played ...Nf6 yet, so e4 needs no guard and Nc3 can wait', correct: true, why: 'Yes. In the normal Dragon, ...Nf6 hits e4 early, and White must answer with Nc3, which blocks the c-pawn.' },
        { text: 'The c4-square is attacked in the normal Dragon', why: 'The problem is not c4 itself. It is that White must spend the move on Nc3 to guard e4.' },
        { text: 'In the normal Dragon, Black has already played ...d5', why: 'In the normal Dragon, the d-pawn is on d6, not d5. The difference is the early ...Nf6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Black to move after 7...Ng4 8.Qxg4. How does Black get the piece back?',
      moves: BREYER.split(' ').slice(0, 15).join(' '),
      orientation: 'black',
      choices: [
        { text: '8...Nxd4', correct: true, why: 'Right. With the queen gone from d1, the d4-knight has only one guard, and the knight takes it. Material is level.' },
        { text: '8...O-O', why: 'Too slow. After 9.Qd1 the d4-knight is guarded again, and White stays a piece up.' },
        { text: '8...d5', why: 'This does nothing about the missing knight. Black should take on d4 at once.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 5.Nxc6 bxc6 6.Qd4, what is White\'s queen attacking?',
      moves: NXC6.split(' ').slice(0, 11).join(' '),
      orientation: 'black',
      choices: [
        { text: 'The h8-rook along the long diagonal, and the a7-pawn', correct: true, why: "Yes. That's why Black blocks the diagonal with 6...Nf6." },
        { text: 'The c6-pawn', why: 'The queen on d4 does not hit c6. Look along the diagonals.' },
        { text: 'Nothing: it is just a developing move', why: 'It is a real threat. With no bishop on g7, the long diagonal to h8 is open.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: "In the Maróczy Bind, what is Black's usual plan?",
      moves: MAROCZY,
      orientation: 'black',
      choices: [
        { text: 'Trade pieces with ...Nxd4, play ...Bc6 and ...a5, then aim for ...b5 or ...f5', correct: true, why: 'Right. Black is cramped, so trades help, and the pawn breaks come later.' },
        { text: 'Push ...d5 at once', why: 'With c4, e4 and the c3-knight all covering d5, ...d5 just loses material here.' },
        { text: 'Storm the kingside with ...h5–h4', why: 'Both kings are on the kingside, and that would only weaken Black. The play is about trades and pawn breaks.' }
      ]
    },
    {
      type: 'concept',
      prompt: "In Nezhmetdinov–Chernikov 1962, White sacrificed the queen with 12.Qxf6. What does the engine say?",
      choices: [
        { text: 'It is sound, but no stronger than quiet moves like 12.Qh6', correct: true, why: 'Right. After 12...Ne2+ 13.Nxe2 exf6 the engine calls it level. The game was decided later.' },
        { text: 'It wins by force', why: 'No. It is a fine practical sacrifice, but the engine finds no forced win.' },
        { text: 'It is a blunder that should lose', why: 'No. The engine calls the position level after the sacrifice.' }
      ]
    }
  ],
  key: { name: 'Maróczy Bind: 5.c4', moves: `${ACCELERATED} c4`, orientation: 'white' },
  terms: [
    { term: 'Bind', meaning: 'A grip on key squares, usually with pawns, that stops the opponent\'s freeing moves.' },
    { term: 'Cramped position', meaning: 'A position with little space for your pieces. Trading pieces usually helps.' },
    { term: 'Queen sacrifice', meaning: 'Giving up the queen on purpose for other pieces, an attack, or both.' }
  ]
})
