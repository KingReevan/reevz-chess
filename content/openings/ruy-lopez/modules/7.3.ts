import { defineModule } from '../../../types'
import { BERLIN } from '../../../lines'

/** berlin-endgame */
const ENDGAME = `${BERLIN} O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+ Kxd8`
/** berlin-lhermet-draw */
const LHERMET = `${BERLIN} O-O Nxe4 d4 Nd6 dxe5 Nxb5 a4 Nbd4 Nxd4 Nxd4 Qxd4 d5 exd6 Qxd6 Qe4+ Qe6 Qd4 Qd6`

export default defineModule({
  id: '7.3',
  title: '5.d4 Nd6: the road to the endgame',
  minutes: 12,
  level: 3,
  goals: [
    'Play every move from 5.d4 to 8...Kxd8 and know why each one is chosen',
    'Put the knight on f5 when the e5-pawn chases it',
    "Handle White's other try, 6.dxe5, and its repetition draw"
  ],
  intro:
    "After 5.d4 Nd6 the Berlin turns very forcing. Within three moves the queens are gone and Black's king stands on d8. Why does each side play exactly these moves? And what if White takes on e5 straight away instead of on c6?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Forced, move by move',
      intro: 'At each step, ask: what else could this side play, and why is this move better?',
      moves: ENDGAME,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'The forcing part begins',
          text: '5.d4. You know this position from Module 7.2. From here to move 8, almost every move has a clear reason.',
          arrows: [['d4', 'e5', 'red']]
        },
        10: {
          title: 'Hit the bishop',
          text: '5...Nd6. The knight retreats and attacks the b5-bishop. (5...Be7 is the Rio de Janeiro Variation, Module 7.6.)',
          arrows: [['d6', 'b5', 'red']]
        },
        11: {
          title: "White's main choice",
          text: "6.Bxc6. White removes e5's defender. (6.dxe5 is the l'Hermet Variation; the second walkthrough shows it.)",
          marks: ['e5']
        },
        12: {
          title: 'Open the d-file',
          text: '6...dxc6. Black recaptures with the d-pawn. That frees the c8-bishop and opens the d-file between the queens. It matters two moves from now.',
          arrows: [['d8', 'd1', 'blue']]
        },
        13: {
          title: 'The knight is chased',
          text: '7.dxe5. The pawn is back, and it attacks the d6-knight. The knight has to move.',
          arrows: [['e5', 'd6', 'red']]
        },
        14: {
          title: 'The best square',
          text: '7...Nf5. On f5 the knight is safe and active. Other retreats like ...Ne4 or ...Nc4 can be hit again by Qe2.',
          arrows: [['d6', 'f5', 'green']]
        },
        15: {
          title: 'Queens off with check',
          text: "8.Qxd8+. The queens faced each other on the open d-file. White trades them with check.",
          arrows: [['d1', 'd8', 'red']]
        },
        16: {
          title: 'The Berlin endgame',
          text: "8...Kxd8. The only legal move: the a8-rook is blocked by the c8-bishop. Black's king can no longer castle, but with queens off it is safe in the middle.",
          marks: ['d8']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why both sides go for it',
      body:
        "**White** wins back the pawn, trades queens, and gets a healthy kingside majority with a pawn already on e5. Black's king has also lost the right to castle.\n\n**Black** gets the two bishops and a position with very few weaknesses. With the queens gone, Black's king is in no danger at all.\n\nThe queen trade is not a draw offer. It is the start of a long endgame battle, and Module 7.4 looks at it in detail."
    },
    {
      kind: 'walkthrough',
      title: "The l'Hermet: 6.dxe5",
      intro: 'White takes on e5 first and lets Black grab the bishop. Watch the material go back and forth until it is level.',
      moves: LHERMET,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'A different sixth move',
          text: '5...Nd6. Same position. This time White does not take on c6.',
          arrows: [['d6', 'b5', 'red']]
        },
        11: {
          title: 'Hit the knight first',
          text: '6.dxe5. The pawn attacks the d6-knight, while the b5-bishop is still hanging.',
          arrows: [['e5', 'd6', 'red'], ['d6', 'b5', 'red']]
        },
        12: {
          title: 'Grab the bishop',
          text: '6...Nxb5. Black takes. For the moment Black is a whole piece up, but the knight on b5 is in danger.',
          marks: ['b5']
        },
        13: {
          title: 'Where can it go?',
          text: '7.a4. The pawn attacks the knight. d6 is covered by the e5-pawn, a3 and c3 by the b2-pawn. Only d4 is left.',
          arrows: [['a4', 'b5', 'red']],
          marks: ['d4']
        },
        14: {
          title: 'The only good square',
          text: '7...Nbd4. The knight jumps to d4, where the c6-knight protects it.',
          arrows: [['c6', 'd4', 'green']]
        },
        15: {
          title: 'Knights trade',
          text: '8.Nxd4. White takes on d4.',
          marks: ['d4']
        },
        16: {
          title: 'Black takes back',
          text: '8...Nxd4. Black recaptures with the other knight.',
          marks: ['d4']
        },
        17: {
          title: 'Material is level',
          text: '9.Qxd4. The queen takes the last knight. Everything Black grabbed has been given back.',
          marks: ['d4']
        },
        18: {
          title: 'Free the bishop',
          text: "9...d5. The pawn frees the c8-bishop. It moves two squares, right past White's e5-pawn.",
          arrows: [['c8', 'g4', 'blue']]
        },
        19: {
          title: 'En passant',
          text: '10.exd6. White captures en passant: the e5-pawn takes the d-pawn as if it had moved only one square.',
          marks: ['d6']
        },
        20: {
          title: 'Queens face off',
          text: '10...Qxd6. Black recaptures, and now the queens attack each other on the d-file.',
          arrows: [['d6', 'd4', 'yellow']]
        },
        21: {
          title: 'Check instead of a trade',
          text: "11.Qe4+. White avoids the trade and checks down the e-file.",
          arrows: [['e4', 'e8', 'red']]
        },
        22: {
          title: 'Block and offer',
          text: '11...Qe6. Black blocks the check and offers the queens again.',
          arrows: [['e6', 'e4', 'yellow']]
        },
        23: {
          title: 'Back to d4',
          text: '12.Qd4. White steps back, eyeing a7 and g7.',
          arrows: [['d4', 'a7', 'blue'], ['d4', 'g7', 'blue']]
        },
        24: {
          title: 'The repetition',
          text: '12...Qd6. Black offers the trade again. If both sides keep repeating, the same position appears three times and the game is a draw. Either side may change course.',
          arrows: [['d6', 'd4', 'yellow']]
        }
      }
    },
    {
      kind: 'history',
      title: 'The "Berlin draw"',
      body:
        "Because it can end in a quick repetition, the l'Hermet line is sometimes called the Berlin draw. In the 2022 Candidates tournament, Nepomniachtchi and Nakamura drew this way in round 12."
    }
  ],
  takeaway:
    "After 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5, put the knight on f5. White trades queens with 8.Qxd8+ and Black must recapture with the king: the Berlin endgame. Against 6.dxe5, take the bishop and the material soon evens out.",
  lookAhead:
    'Next: what the Berlin endgame is really about. Lost castling against the bishop pair, and the match that made it famous.',
  drills: [
    {
      title: 'The Berlin endgame from memory',
      prompt: "You're Black. White castles and plays 5.d4. Play the main line until the queens come off.",
      moves: ENDGAME,
      start: 6,
      side: 'black',
      hints: [
        'Take on e4, retreat the knight with an attack on the bishop, and recapture on c6 toward the center.',
        'When the e5-pawn hits your knight, go to f5. After the queen check, only one piece can take back.'
      ],
      success: '4...Nxe4, 5...Nd6, 6...dxc6, 7...Nf5 and 8...Kxd8. You have reached the Berlin endgame.'
    },
    {
      title: "Handle the l'Hermet",
      prompt: "You're Black. White plays 6.dxe5 instead of 6.Bxc6. Grab the bishop, rescue the knight, and finish with your queen on d6.",
      moves: LHERMET.split(' ').slice(0, 20).join(' '),
      start: 10,
      side: 'black',
      hints: [
        'The b5-bishop is hanging. After 7.a4, find the only safe square for that knight.',
        'Recapture on d4, then free your bishop with the d-pawn. If White takes en passant, take back with the queen.'
      ],
      success: '6...Nxb5, 7...Nbd4, 8...Nxd4, 9...d5 and 10...Qxd6. Material is level and the position is equal.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black to move. The e5-pawn attacks your knight. Where should it go?',
      moves: `${BERLIN} O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5`,
      orientation: 'black',
      choices: [
        { text: '7...Nf5', correct: true, why: 'Right. The knight is safe and active on f5, and the main line continues 8.Qxd8+ Kxd8.' },
        { text: '7...Ne4', why: 'After 8.Qe2 the knight is attacked again and you lose time.' },
        { text: '7...Be6', why: 'This ignores the attack. 8.exd6 simply wins the knight.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 8.Qxd8+, why does Black take back with the king?',
      moves: `${BERLIN} O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+`,
      orientation: 'black',
      choices: [
        { text: "It's the only legal move: the c8-bishop blocks the a8-rook", correct: true, why: "Right. 8...Kxd8 is forced, and Black's king loses the right to castle." },
        { text: 'To keep the right to castle', why: 'The opposite: once the king moves, castling is gone for good.' },
        { text: 'Because the king must protect c7', why: "The recapture is simply forced. Nothing else can reach d8." }
      ]
    },
    {
      type: 'order',
      prompt: "In the l'Hermet line, why is 7.a4 so useful for White?",
      moves: `${BERLIN} O-O Nxe4 d4 Nd6 dxe5 Nxb5 a4`,
      orientation: 'black',
      choices: [
        { text: 'It attacks the b5-knight, which has no good square except d4', correct: true, why: 'Yes. d6, c3 and a3 are all covered, so the knight must go to d4 and get traded.' },
        { text: 'It wins the knight by force', why: 'The knight escapes to d4, and after the trades material is level.' },
        { text: 'It prepares Ra3 and a rook attack', why: 'The point is the b5-knight. 7.a4 forces it to d4.' }
      ]
    },
    {
      type: 'concept',
      prompt: "What often happens in the l'Hermet line after 11.Qe4+ Qe6 12.Qd4 Qd6?",
      choices: [
        { text: 'The queens shuffle back and forth and the game is drawn by repetition', correct: true, why: "Right. That's why it's called the Berlin draw. Either side can still deviate." },
        { text: "Black wins White's queen", why: 'Both queens are protected or able to move away. Nobody wins anything.' },
        { text: 'White is forced to trade queens on d6', why: 'White can avoid the trade with Qe4+, which is exactly how the repetition happens.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'The queens are off and Black has recaptured with the king. What is this position called?',
      moves: ENDGAME,
      orientation: 'black',
      choices: [
        { text: 'The Berlin endgame (Berlin Wall)', correct: true, why: 'Right. 8...Kxd8 reaches the famous Berlin endgame.' },
        { text: 'The Exchange Variation', why: 'The Exchange is 3...a6 4.Bxc6. The structure looks similar, but this came from 3...Nf6.' },
        { text: "The l'Hermet Variation", why: "The l'Hermet is 6.dxe5, where White takes on e5 before c6." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White played 6.dxe5 instead of 6.Bxc6. What is best?',
      moves: `${BERLIN} O-O Nxe4 d4 Nd6 dxe5`,
      orientation: 'black',
      choices: [
        { text: '6...Nxb5', correct: true, why: 'Yes. Take the bishop. After 7.a4 Nbd4 the trades leave material level.' },
        { text: '6...Nf5', why: 'This leaves the b5-bishop alone, and White keeps a pleasant position. Take the bishop first.' },
        { text: '6...Ne4', why: 'The knight goes back to a square where Re1 or Qe2 can hit it, and the bishop on b5 survives.' }
      ]
    }
  ],
  key: { name: 'Berlin endgame: 8.Qxd8+ Kxd8', moves: ENDGAME, orientation: 'black' },
  terms: [
    { term: 'Castling rights', meaning: 'The right to castle later. It is lost for good once the king moves.' },
    { term: 'En passant', meaning: "A pawn that moves two squares past an enemy pawn on the 5th rank can be captured as if it had moved only one square. It must be done at once." },
    { term: 'Threefold repetition', meaning: 'If the same position appears three times with the same player to move, the game can be claimed as a draw.' }
  ]
})
