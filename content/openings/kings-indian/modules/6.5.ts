import { defineModule } from '../../../types'
import { SAMISCH } from '../lines'

/** samisch-7nge2-c6: 7...c6 8.Qd2 Nbd7 9.O-O-O a6 10.Kb1 b5 */
const RACE = `${SAMISCH} e5 Nge2 c6 Qd2 Nbd7 O-O-O a6 Kb1 b5`
/** samisch-7nge2-exd4: 7...exd4 8.Nxd4 Nc6 9.Qd2 Nxd4 10.Bxd4 Be6 */
const SIMPLIFY = `${SAMISCH} e5 Nge2 exd4 Nxd4 Nc6 Qd2 Nxd4 Bxd4 Be6`
/** samisch-7dxe5: 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5 Nxd5 10.cxd5 c6 */
const EXCHANGE = `${SAMISCH} e5 dxe5 dxe5 Qxd8 Rxd8 Nd5 Nxd5 cxd5 c6`

export default defineModule({
  id: '6.5',
  title: '7.Nge2: keeping the tension',
  minutes: 10,
  level: 3,
  goals: [
    'See why White may keep the tension with 7.Nge2 instead of closing with 7.d5',
    'Know two Black answers: 7...c6 with a race, and 7...exd4 to simplify',
    'Know why 7.dxe5 gives White nothing'
  ],
  intro:
    "After 6...e5, White doesn't have to close the center at once. 7.Nge2 develops a piece and keeps both options, d5 and dxe5, for later. How should Black use the extra time? This module shows a sharp answer, a calm answer, and why trading on e5 is harmless.",
  sections: [
    {
      kind: 'walkthrough',
      title: '7...c6: both kings under fire',
      intro: 'The kings end up on opposite sides again. Watch which pawns each side pushes.',
      moves: RACE,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'The tension',
          text: '6...e5. The pawns on d4 and e5 face each other. Either side could capture, or White could push past with d5.',
          arrows: [['e5', 'd4', 'red'], ['d4', 'e5', 'red']]
        },
        13: {
          title: 'Keeping options open',
          text: '7.Nge2. The knight develops and adds a defender to d4. White keeps both d5 and dxe5 in reserve.',
          arrows: [['e2', 'd4', 'green']]
        },
        14: {
          title: 'A flexible reply',
          text: '7...c6. Black gets ready for ...b5. If White ever plays d5, Black can answer ...cxd5 and open the c-file.',
          arrows: [['b7', 'b5', 'blue']]
        },
        15: {
          title: 'The battery again',
          text: '8.Qd2. The queen lines up with the bishop and makes room for queenside castling.'
        },
        16: {
          title: 'Support for e5',
          text: '8...Nbd7. The knight develops and guards the e5-pawn.',
          arrows: [['d7', 'e5', 'green']]
        },
        17: {
          title: 'White castles long',
          text: '9.O-O-O. The king goes to the queenside. Opposite-side castling once more.',
          marks: ['c1']
        },
        18: {
          title: 'Preparing the storm',
          text: '9...a6. Black supports ...b5, aimed at White\'s king.',
          arrows: [['a6', 'b5', 'green']]
        },
        19: {
          title: 'A safety move',
          text: '10.Kb1. The king leaves the c-file and guards a2. It is a common idea, but in a race every move counts: the engine prefers 10.g4, starting White\'s own storm at once.',
          arrows: [['g2', 'g4', 'blue']]
        },
        20: {
          title: 'The storm begins',
          text: "10...b5. Black's pawns march toward White's king. The engine calls this race roughly equal.",
          arrows: [['b5', 'c4', 'red']],
          marks: ['b1']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '7...exd4: a calm answer',
      intro: 'Black releases the tension and trades pieces. The game becomes quieter.',
      moves: SIMPLIFY,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'The same position',
          text: '6...e5. This time Black will settle the center at once.'
        },
        13: {
          title: '7.Nge2',
          text: '7.Nge2. White keeps the tension.'
        },
        14: {
          title: 'Black takes',
          text: '7...exd4. Black gives up the e5-pawn\'s place in the center. In return the e-file is half-open, and the long diagonal will open once the f6-knight moves.',
          arrows: [['g7', 'a1', 'blue']]
        },
        15: {
          title: 'The knight recaptures',
          text: '8.Nxd4. The knight now stands in the center.'
        },
        16: {
          title: 'Challenging the knight',
          text: '8...Nc6. Black attacks the d4-knight with a piece.',
          arrows: [['c6', 'd4', 'red']]
        },
        17: {
          title: 'The queen develops',
          text: '9.Qd2. White defends d4 again and prepares to castle.',
          arrows: [['d2', 'd4', 'green']]
        },
        18: {
          title: 'A trade',
          text: '9...Nxd4. Black trades knights. Fewer pieces means less danger for Black\'s king.'
        },
        19: {
          title: 'The bishop recaptures',
          text: '10.Bxd4. The bishop takes back and stands on a strong central square.'
        },
        20: {
          title: 'Solid and simple',
          text: '10...Be6. The bishop develops and attacks the c4-pawn. White is better thanks to the extra space, but Black\'s position is solid.',
          arrows: [['e6', 'c4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: '7.dxe5: harmless',
      body:
        "White can also trade on e5: **7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5 Nxd5 10.cxd5 c6**. Queens are off and the center is open.\n\nIt looks as if White is threatening something with 9.Nd5, which eyes c7. But Black simply trades the knight and challenges the d5-pawn with ...c6. The engine calls the position equal.\n\nWhy does this matter? With queens off, White's whole Sämisch plan is gone: no Qd2, no Bh6, no kingside attack. White gives up the edge for nothing. If you have Black, you can welcome this trade."
    },
    {
      kind: 'tip',
      title: 'Kings on opposite sides? Count the moves',
      body:
        'In the 7...c6 line, each move that does not push the attack forward helps the opponent. Before a quiet move like Kb1 or ...a6, ask: how many moves until my pawns reach the enemy king, and how many does my opponent need?'
    }
  ],
  takeaway:
    "7.Nge2 keeps the tension. Black can race with 7...c6 and ...b5, where every move counts, or simplify with 7...exd4 and accept a worse but solid position. 7.dxe5 trades queens and gives White nothing.",
  lookAhead:
    'Module 6.6 turns to a bolder idea for Black: the Sämisch Gambit 6...c5, where Black gives a pawn to open the dark squares.',
  drills: [
    {
      title: 'The calm line as White',
      prompt: "You're White. Black has just played 6...e5. Keep the tension, then meet ...exd4 and ...Nc6 calmly.",
      moves: SIMPLIFY.split(' ').slice(0, 19).join(' '),
      start: 12,
      side: 'white',
      hints: [
        'Develop the g1-knight. The f3 square is taken by your own pawn.',
        'Take back on d4 with the knight, defend it with the queen, then recapture with the bishop.'
      ],
      success: '7.Nge2, 8.Nxd4, 9.Qd2 and 10.Bxd4. White has more space and is better in a quiet position.'
    },
    {
      title: 'Answer the trade',
      prompt: "You're Black. White has traded with 7.dxe5. Take back and keep the position equal.",
      moves: EXCHANGE,
      start: 13,
      side: 'black',
      hints: [
        'Recapture toward the center, then take back the queen.',
        'When the knight jumps to d5, trade it, then hit the d5-pawn with your c-pawn.'
      ],
      success: '7...dxe5, 8...Rxd8, 9...Nxd5 and 10...c6. Queens are off and the position is equal.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why might White play 7.Nge2 instead of 7.d5?',
      choices: [
        { text: 'To develop and keep both d5 and dxe5 available for later', correct: true, why: 'Right. White waits to see Black\'s set-up before choosing.' },
        { text: 'To stop ...Qh4+', why: 'The knight on e2 does not block the h4–e1 diagonal. The idea is flexibility.' },
        { text: 'To prepare Nf3', why: 'The f3 square is taken by a pawn. The knight goes to e2 in the Sämisch for that reason.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White has just played 7.dxe5. Black to move. What is best?',
      moves: `${SAMISCH} e5 dxe5`,
      orientation: 'black',
      choices: [
        { text: '7...dxe5', correct: true, why: 'Right. Black takes back and the position is equal after the queen trade.' },
        { text: '7...Nfd7', why: 'After 8.exd6, Black is simply a pawn down.' },
        { text: '7...Ne8', why: 'Same problem: 8.exd6 and White keeps an extra pawn.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the line 7...c6 8.Qd2 Nbd7 9.O-O-O a6 10.Kb1 b5, what is Black\'s plan?',
      moves: RACE,
      orientation: 'black',
      choices: [
        { text: "Push the queenside pawns to open lines at White's king", correct: true, why: "Right. With White's king on b1, ...b5 and ...b4 or ...bxc4 open lines right where it lives." },
        { text: 'Attack on the kingside with ...f5', why: 'Black can play ...f5 in other lines, but here the target is White\'s king on the queenside.' },
        { text: 'Trade queens and head for an endgame', why: 'This is a race between two attacks, not an endgame plan.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 7.dxe5 dxe5 8.Qxd8 Rxd8 good news for Black?',
      choices: [
        { text: "With queens off, White's attacking plan with Qd2 and Bh6 is gone, and the position is equal", correct: true, why: 'Exactly. The Sämisch is built for an attack. Without queens, White has no attack.' },
        { text: 'Black wins a pawn by force', why: 'Material stays level. Black is simply comfortable.' },
        { text: "White's king is in danger in the center", why: "With queens off there is little danger to either king. The point is that White's attacking plan has disappeared." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'What does Black get in return for 7...exd4?',
      choices: [
        { text: 'A half-open e-file and an open long diagonal, and easy development with trades', correct: true, why: 'Right. Black gives up the strong e5-pawn for open lines and a calm game.' },
        { text: 'An extra pawn', why: 'After 8.Nxd4 material is level. Black is trading, not winning anything.' },
        { text: 'A kingside attack', why: '7...exd4 is a calm, simplifying choice. The sharp option is 7...c6.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move after 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5. What is best?',
      moves: `${SAMISCH} e5 dxe5 dxe5 Qxd8 Rxd8 Nd5`,
      orientation: 'black',
      choices: [
        { text: '9...Nxd5', correct: true, why: 'Right. Trade the active knight, then play ...c6 to challenge d5. The position is equal.' },
        { text: '9...c6', why: 'Too early. 10.Nc7 attacks the rook on a8, and White wins the exchange (a rook for a knight). Trade the knight first, then play ...c6.' },
        { text: '9...Nc6', why: 'It develops, but it leaves c7 unguarded: 10.Nxc7 wins a pawn and hits the rook on a8.' }
      ]
    }
  ],
  key: { name: 'Sämisch 7.Nge2 c6: the race', moves: RACE, orientation: 'black' },
  terms: [
    { term: 'Tension', meaning: 'Two pawns or pieces that can capture each other. Keeping the tension means leaving them, so the opponent has to keep watching.' },
    { term: 'Simplify', meaning: 'Trade pieces to make the position calmer and easier to play.' },
    { term: 'Pawn storm', meaning: 'Pushing several pawns toward the enemy king to open lines for your pieces.' }
  ]
})
