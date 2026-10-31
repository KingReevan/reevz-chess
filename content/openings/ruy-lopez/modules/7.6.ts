import { defineModule } from '../../../types'
import { BERLIN } from '../../../lines'

/** berlin-5re1 */
const RE1 = `${BERLIN} O-O Nxe4 Re1 Nd6 Nxe5 Be7 Bf1 Nxe5 Rxe5 O-O d4 Bf6 Re1 Re8`
/** berlin-rio-de-janeiro */
const RIO = `${BERLIN} O-O Nxe4 d4 Be7 Qe2 Nd6 Bxc6 bxc6 dxe5 Nb7`

export default defineModule({
  id: '7.6',
  title: '5.Re1 and Rio de Janeiro 5...Be7',
  minutes: 11,
  level: 3,
  goals: [
    'Meet 5.Re1 safely with ...Nd6 and ...Be7',
    'Know the Rio de Janeiro, 5...Be7, and its knight trip to b7',
    'Weigh the Rio honestly: queens stay on, but the knight is passive'
  ],
  intro:
    "Not every Berlin ends in the queenless endgame. White can play 5.Re1 instead of 5.d4, and Black can keep the queens on against 5.d4 with the Rio de Janeiro Variation. How should Black handle each, and what does keeping the queens cost?",
  sections: [
    {
      kind: 'walkthrough',
      title: '5.Re1: the pawn comes back at once',
      intro: "You're Black. The key moment is move 6: block the e-file.",
      moves: RE1,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'Rook on the e-file',
          text: '5.Re1. The rook attacks the e4-knight straight away.',
          arrows: [['e1', 'e4', 'red']]
        },
        10: {
          title: 'The usual retreat',
          text: '5...Nd6. The knight steps back and hits the b5-bishop.',
          arrows: [['d6', 'b5', 'red']]
        },
        11: {
          title: 'Pawn back',
          text: "6.Nxe5. Material is level. The knight now stands between the e1-rook and Black's king, so any knight move would be a discovered check.",
          arrows: [['e1', 'e8', 'red']],
          marks: ['e5']
        },
        12: {
          title: 'Block the e-file',
          text: '6...Be7. The bishop develops and blocks the e-file. Remember why: 6...Nxb5?? 7.Nxc6+ is a discovered check that wins the queen.',
          arrows: [['f8', 'e7', 'green']]
        },
        13: {
          title: 'The bishop steps back',
          text: '7.Bf1. The bishop escapes the d6-knight and settles on f1, close to its king.',
          arrows: [['b5', 'f1', 'blue']]
        },
        14: {
          title: 'Trade knights',
          text: '7...Nxe5. Black removes the strong knight on e5.',
          marks: ['e5']
        },
        15: {
          title: 'The rook recaptures',
          text: '8.Rxe5. The rook takes back.',
          marks: ['e5']
        },
        16: {
          title: 'Black castles',
          text: '8...O-O. Unlike the endgame line, here Black keeps the right to castle and uses it.',
          marks: ['g8']
        },
        17: {
          title: 'White takes the center',
          text: '9.d4. The pawn grabs space and supports the rook on e5.',
          arrows: [['d4', 'e5', 'green']]
        },
        18: {
          title: 'Hit the rook',
          text: '9...Bf6. The bishop attacks the rook on e5 and gains time.',
          arrows: [['f6', 'e5', 'red']]
        },
        19: {
          title: 'The rook retreats',
          text: '10.Re1. The rook goes back to e1.',
          arrows: [['e5', 'e1', 'blue']]
        },
        20: {
          title: 'Level and calm',
          text: '10...Re8. Black challenges the e-file. The position is nearly symmetrical and level, which is why this line has a drawish reputation.',
          arrows: [['e8', 'e1', 'yellow']]
        }
      }
    },
    {
      kind: 'history',
      title: 'An old idea, still played',
      body:
        '5.Re1 appeared as early as game 4 of the 1886 Steinitz–Zukertort match. In modern times Shirov has championed it and Carlsen has played it.'
    },
    {
      kind: 'walkthrough',
      title: 'The Rio de Janeiro: 5...Be7',
      intro: 'Against 5.d4, Black can avoid the endgame. Watch where the d6-knight ends up.',
      moves: RIO,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'The main 5th move',
          text: '5.d4. Black usually answers 5...Nd6 and heads for the endgame (Module 7.3). Here is the other way.',
          arrows: [['d4', 'e5', 'red']]
        },
        10: {
          title: 'Keep the queens on',
          text: '5...Be7. The Rio de Janeiro Variation. Black develops and gets ready to castle, leaving the knight on e4 for now.',
          arrows: [['f8', 'e7', 'green']]
        },
        11: {
          title: 'Queen to the e-file',
          text: "6.Qe2. The queen attacks the e4-knight and lines up on the e-file toward Black's king.",
          arrows: [['e2', 'e4', 'red']]
        },
        12: {
          title: 'The knight retreats',
          text: '6...Nd6. Back to d6, hitting the b5-bishop as usual.',
          arrows: [['d6', 'b5', 'red']]
        },
        13: {
          title: 'Remove the defender',
          text: '7.Bxc6. White takes the knight that guards e5.',
          marks: ['e5']
        },
        14: {
          title: 'Take with the b-pawn',
          text: "7...bxc6. With the queens still on and Black's king in the center, Black keeps the d-pawn at home so the d-file stays closed. After 7...dxc6, a white rook on d1 would be very strong.",
          marks: ['d7']
        },
        15: {
          title: 'Pawn back with gain of space',
          text: '8.dxe5. Material is level, and the e5-pawn attacks the d6-knight.',
          arrows: [['e5', 'd6', 'red']]
        },
        16: {
          title: 'A long way round',
          text: "8...Nb7. The knight is safe, but on b7 it does little. It can come back via c5 later. Meanwhile White's e5-pawn gives White more space.",
          arrows: [['b7', 'c5', 'blue']],
          marks: ['b7', 'e5']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why the Rio is rare',
      body:
        "The Rio keeps the queens on, which appeals to players who want more than an endgame. But it has a cost. The knight spends several moves on the trip d6–b7–c5, and White's pawn on e5 gains space.\n\nLasker used it three times in the 1908 World Championship. It later fell out of favour, because Black's compensation turned out to be insufficient. Today it is a rare sideline. For your main repertoire, 5...Nd6 and the endgame (Modules 7.3 to 7.5) are the reliable choice."
    }
  ],
  takeaway:
    'Against 5.Re1, play ...Nd6 and block the e-file with ...Be7; the position soon becomes level and calm. The Rio, 5...Be7 against 5.d4, keeps the queens on, but the knight ends up passive on b7 and White gains space.',
  lookAhead:
    "Next: Black's fourth-move alternatives to 4...Nxe4: the active 4...Bc5 and the solid 4...d6.",
  drills: [
    {
      title: 'Handle 5.Re1',
      prompt: "You're Black. White plays 5.Re1. Retreat with a threat, block the e-file, trade knights, castle, and finish with a rook on e8.",
      moves: RE1,
      start: 8,
      side: 'black',
      hints: [
        'Knight to d6 first. After 6.Nxe5, put the f8-bishop between the rook and your king.',
        'After 7.Bf1, trade on e5 and castle. When White plays d4, hit the rook with your bishop, then contest the e-file.'
      ],
      success: '5...Nd6, 6...Be7, 7...Nxe5, 8...O-O, 9...Bf6 and 10...Re8. A safe, level position.'
    },
    {
      title: 'Play the Rio',
      prompt: "You're Black. Against 5.d4, keep the queens on with the Rio de Janeiro and follow the main line.",
      moves: RIO,
      start: 8,
      side: 'black',
      hints: [
        'Develop the f8-bishop instead of moving the knight. When the queen attacks it, retreat to d6.',
        'Recapture on c6 with the b-pawn, and when the e5-pawn hits your knight, go to b7.'
      ],
      success: '5...Be7, 6...Nd6, 7...bxc6 and 8...Nb7. Queens on, but remember the knight needs time to come back via c5.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black to move. Which move develops and makes the position safe?',
      moves: `${BERLIN} O-O Nxe4 Re1 Nd6 Nxe5`,
      orientation: 'black',
      choices: [
        { text: '6...Be7', correct: true, why: 'Right. The bishop blocks the e-file, so a knight move is no longer a discovered check.' },
        { text: '6...Nxb5', why: '7.Nxc6+ is a discovered check from the rook, and then the knight takes your queen.' },
        { text: '6...Qe7', why: "7.Nxc6! uncovers the rook on your queen while the knight also attacks it. The queen is pinned and you lose it for a rook." }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the idea of the Rio de Janeiro, 5...Be7?',
      moves: `${BERLIN} O-O Nxe4 d4 Be7`,
      orientation: 'black',
      choices: [
        { text: 'Keep the queens on, develop, and castle', correct: true, why: 'Yes. Black avoids the queenless endgame of 5...Nd6 6.Bxc6 dxc6 7.dxe5.' },
        { text: 'Force the Berlin endgame', why: 'The endgame comes from 5...Nd6. The Rio is the way to avoid it.' },
        { text: 'Keep the extra pawn for good', why: 'White still wins the pawn back, with dxe5 a few moves later.' }
      ]
    },
    {
      type: 'concept',
      prompt: "What's the main drawback of the Rio?",
      moves: RIO,
      orientation: 'black',
      choices: [
        { text: 'The knight is passive on b7, and the e5-pawn gives White space', correct: true, why: 'Right. That is why the Rio fell out of favour.' },
        { text: "Black's king can't castle", why: 'In the Rio the queens stay on and Black can still castle.' },
        { text: 'Black ends up a pawn down', why: 'Material is level after 8.dxe5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'How would you describe the position after 10...Re8 in the 5.Re1 line?',
      moves: RE1,
      orientation: 'black',
      choices: [
        { text: 'Level and nearly symmetrical', correct: true, why: 'Yes. That is why 5.Re1 has a drawish reputation.' },
        { text: 'Winning for White', why: 'Material is level and Black has no weaknesses. White has no real advantage.' },
        { text: 'Winning for Black', why: 'Black has equalised comfortably, but nothing more.' }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'Why is 6...Qe7 a mistake here?',
      moves: `${BERLIN} O-O Nxe4 Re1 Nd6 Nxe5`,
      orientation: 'black',
      choices: [
        { text: '7.Nxc6 attacks the queen with the knight and uncovers the rook on it', correct: true, why: 'Right. The queen is pinned to the king on the e-file and attacked twice. Black loses it for a rook.' },
        { text: '7.Re3 traps the queen', why: 'The real problem is the double attack after 7.Nxc6.' },
        { text: "It isn't a mistake; it's the main line", why: 'The main line is 6...Be7. The queen on e7 walks into a pin.' }
      ]
    },
    {
      type: 'order',
      prompt: 'In the Rio, after 7.Bxc6, why does Black take back with the b-pawn?',
      moves: `${BERLIN} O-O Nxe4 d4 Be7 Qe2 Nd6 Bxc6`,
      orientation: 'black',
      choices: [
        { text: "To keep the d-file closed while the queens are on and Black's king is in the center", correct: true, why: 'Exactly. After ...dxc6 and dxe5, a white rook on d1 would be dangerous.' },
        { text: 'Because ...dxc6 is illegal', why: 'It is legal, just worse here. The d-file would open toward your queen and king.' },
        { text: 'To trap the white queen', why: "Nothing traps the queen. It's about keeping the d-file closed." }
      ]
    }
  ],
  key: { name: 'Berlin, Rio de Janeiro: 5.d4 Be7', moves: `${BERLIN} O-O Nxe4 d4 Be7`, orientation: 'black' },
  terms: [
    { term: 'Symmetrical position', meaning: "A position where both sides' pawns and pieces mirror each other. These are often level and drawish." },
    { term: 'Passive piece', meaning: 'A piece that has few useful squares and does little for the game.' },
    { term: 'Space', meaning: 'The part of the board your pawns control. More space gives your pieces more room to move.' }
  ]
})
