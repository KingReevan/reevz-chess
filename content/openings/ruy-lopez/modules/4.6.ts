import { defineModule } from '../../../types'
import { CLOSED } from '../../../lines'

const REPEAT = `${CLOSED} Bb7 d4 Re8 Ng5 Rf8 Nf3 Re8`
const SETUP = `${CLOSED} Bb7 d4 Re8 Nbd2 Bf8`
const RA3 = `${SETUP} a4 h6 Bc2 exd4 cxd4 Nb4 Bb1 c5 d5 Nd7 Ra3`
const MAIN = `${RA3} c4`

export default defineModule({
  id: '4.6',
  title: 'Zaitsev: 9...Bb7',
  minutes: 12,
  level: 3,
  goals: [
    'See how ...Bb7, ...Re8 and ...Nf6 aim at e4',
    'Know the 11.Ng5 Rf8 12.Nf3 Re8 repetition and why it exists',
    'Follow the main line to the 17.Ra3 rook lift'
  ],
  intro:
    "In the Zaitsev, Black keeps the knight on c6 and points three pieces at e4 instead. It is one of the richest lines in the Closed Ruy. But it has one small weakness, the f7-square, and White can use it to force a draw. So how does White play for a win?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The weak spot: 11.Ng5',
      intro: "You're White. Watch what happens to f7 when Black's rook leaves it.",
      moves: REPEAT,
      start: 17,
      orientation: 'white',
      steps: {
        17: {
          title: 'The tabiya',
          text: 'Black is about to choose Plan B from Module 4.1: keep the knight on c6 and build pressure on e4.',
          arrows: [['c8', 'b7', 'blue']]
        },
        18: {
          title: 'The bishop finds its diagonal',
          text: '9...Bb7. The bishop lines up with e4. Its own knight blocks it for now, but that can change in one move.',
          arrows: [['b7', 'e4', 'blue']]
        },
        19: {
          title: 'The center',
          text: '10.d4. White builds the big center, as always.',
          arrows: [['d4', 'e5', 'red']]
        },
        20: {
          title: 'The rook leaves f7',
          text: "10...Re8. The rook joins the fight for e4 and frees f8 for the bishop. But now only the king guards f7, and White's bishop on b3 is aiming right at it.",
          arrows: [['b3', 'f7', 'red']],
          marks: ['f7']
        },
        21: {
          title: 'Knight to g5',
          text: '11.Ng5. Now f7 is attacked twice (b3 and g5) and guarded once. White threatens to capture there.',
          arrows: [['g5', 'f7', 'red'], ['b3', 'f7', 'red']],
          marks: ['f7']
        },
        22: {
          title: 'The rook goes back',
          text: '11...Rf8. The simplest answer. The rook returns to guard f7, and the threat is gone.',
          arrows: [['f8', 'f7', 'green']]
        },
        23: {
          title: 'The knight goes back',
          text: "12.Nf3. The knight has nothing more to do on g5, so it returns. The position is the same as two moves ago.",
          arrows: [['g5', 'f3', 'blue']]
        },
        24: {
          title: 'And again',
          text: "12...Re8. Black tries again. If both sides keep repeating, the same position comes up three times and the game is a draw.",
          arrows: [['f8', 'e8', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Playing for a win',
      body:
        "A White player who is happy with a draw can repeat with 11.Ng5. A White player who wants to win plays **11.Nbd2** instead, and Black answers 11...Bf8.\n\nThen White has to be careful. As Module 4.2 showed, 12.Nf1? lets Black win e4 with ...exd4, ...Na5 and ...Nxe4. So White's main moves are 12.a4, 12.a3, 12.d5 and 12.Bc2."
    },
    {
      kind: 'walkthrough',
      title: 'The main line to 17.Ra3',
      intro: "Black has played 9...Bb7, 10...Re8 and 11...Bf8, and White chose 11.Nbd2. Now the fight starts.",
      moves: MAIN,
      start: 23,
      orientation: 'white',
      steps: {
        23: {
          title: 'Pressure on b5',
          text: "12.a4. White attacks b5 and gives the a1-rook something to do. Only the a6-pawn guards b5.",
          arrows: [['a4', 'b5', 'red']],
          marks: ['b5']
        },
        24: {
          title: 'No more Ng5',
          text: '12...h6. Now g5 is covered for good. The rook can stay on e8 without any worry about f7.',
          arrows: [['h6', 'g5', 'green']]
        },
        25: {
          title: 'The bishop moves over',
          text: '13.Bc2. The bishop moves to the b1-h7 diagonal and adds a guard to e4.',
          arrows: [['c2', 'e4', 'green']]
        },
        26: {
          title: 'The e-file opens',
          text: '13...exd4. Black gives up the e5-pawn. Now nothing blocks the e8-rook, and it hits e4.',
          arrows: [['e8', 'e4', 'red']]
        },
        27: {
          title: 'White takes back',
          text: '14.cxd4. White has two big center pawns. But the c3-pawn is gone, so b4 is no longer covered.',
          marks: ['b4']
        },
        28: {
          title: 'The knight jumps in',
          text: "14...Nb4. The knight attacks the c2-bishop and gets out of the b7-bishop's way. Now e4 is attacked three times: by the e8-rook, the b7-bishop and the f6-knight.",
          arrows: [['b4', 'c2', 'red'], ['b7', 'e4', 'red'], ['e8', 'e4', 'red']]
        },
        29: {
          title: 'The bishop steps back',
          text: '15.Bb1. The bishop keeps guarding e4 from b1. But now it boxes in the a1-rook. Remember that.',
          arrows: [['b1', 'e4', 'green']],
          marks: ['a1']
        },
        30: {
          title: 'Black hits d4',
          text: '15...c5. The c-pawn attacks White\'s center from the side.',
          arrows: [['c5', 'd4', 'red']]
        },
        31: {
          title: 'The center closes',
          text: '16.d5. White pushes past. The d5-pawn shuts the b7-bishop out, so e4 is suddenly much safer.',
          arrows: [['b7', 'd5', 'yellow']]
        },
        32: {
          title: 'The knight reroutes',
          text: '16...Nd7. The f6-knight steps back. This clears the way for the f-pawn, so ...f5 becomes possible.',
          arrows: [['f7', 'f5', 'blue']]
        },
        33: {
          title: 'The rook lift',
          text: '17.Ra3. The rook was boxed in by the b1-bishop, so it goes up the a-file instead. From a3 it can swing along the third rank toward the kingside.',
          arrows: [['a1', 'a3', 'blue'], ['a3', 'e3', 'blue']],
          ann: '!'
        },
        34: {
          title: 'The main reply',
          text: "17...c4. Black takes the d3- and b3-squares away from White's pieces and frees c5 for the d7-knight. The sharper 17...f5 hits e4 at once, but it is riskier.",
          arrows: [['c4', 'd3', 'yellow'], ['d7', 'c5', 'blue'], ['f7', 'f5', 'blue']]
        }
      }
    },
    {
      kind: 'history',
      title: 'Kasparov–Karpov, Lyon 1990, game 20',
      body:
        "In game 20 of the 1990 World Championship match in Lyon, Karpov defended with the Zaitsev and Kasparov (White) won with a kingside attack. The game shows how the a3-rook lift and the attack on Black's king work."
    },
    {
      kind: 'tip',
      title: 'Two names, one system',
      body:
        'Some sources call 9...Bb7 the Flohr System and save the name Zaitsev for 9...Re8. The two usually lead to the same position after 9...Bb7 10.d4 Re8.'
    }
  ],
  takeaway:
    "The Zaitsev aims ...Bb7, ...Re8 and ...Nf6 at e4. 11.Ng5 Rf8 12.Nf3 Re8 is a draw by repetition, so White plays 11.Nbd2 to keep the game going, and in the main line the rook lift 17.Ra3 brings the a1-rook toward the kingside.",
  lookAhead:
    "Next: two quieter 9th moves. 9...h6 takes g5 away first, and 9...Nd7 aims the bishop at d4.",
  drills: [
    {
      title: 'Defend f7',
      prompt: "You're Black. White just played 11.Ng5, hitting f7 twice. Defend, then offer the repetition.",
      moves: REPEAT,
      start: 21,
      side: 'black',
      hints: ['Which piece used to guard f7?', 'When the knight goes back, your rook can go back to e8 too.'],
      success: '11...Rf8 and 12...Re8. If White repeats again, the game is a draw.'
    },
    {
      title: 'The main line as White',
      prompt: "You're White after 11...Bf8. Play the main line up to the rook lift.",
      moves: RA3,
      start: 22,
      side: 'white',
      hints: ['Start by hitting b5 with a pawn, then improve the b3-bishop.', 'Take back on d4, keep the bishop on the b1-h7 diagonal, push d5, then lift the rook.'],
      success: '12.a4, 13.Bc2, 14.cxd4, 15.Bb1, 16.d5 and 17.Ra3. The rook is on its way to the kingside.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 10...Re8, why can White jump in with 11.Ng5?',
      moves: `${CLOSED} Bb7 d4 Re8`,
      orientation: 'white',
      choices: [
        { text: 'The rook left f8, so only the king guards f7', correct: true, why: 'Right. With the b3-bishop and a knight on g5, White hits f7 twice.' },
        { text: 'The knight attacks the queen from g5', why: 'A knight on g5 does not reach d8. It attacks f7, e6, h7 and other squares.' },
        { text: 'The g5-square is guarded by the h3-pawn', why: 'A White pawn on h3 guards g4, not g5. The point is f7.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 12...h6 do in the main line?',
      choices: [
        { text: 'It covers g5 for good, so the rook can stay on e8', correct: true, why: 'Yes. Without Ng5, the f7-square stops being a worry.' },
        { text: 'It prepares ...g5 and a pawn storm', why: "Black's king is on g8. The move is defensive: it takes away g5." },
        { text: 'It attacks the bishop on c1', why: 'The h6-pawn does not attack anything on c1. It controls g5.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'White to move. Why does 17.Ra3 make sense here?',
      moves: `${SETUP} a4 h6 Bc2 exd4 cxd4 Nb4 Bb1 c5 d5 Nd7`,
      orientation: 'white',
      choices: [
        { text: 'The b1-bishop boxes the rook in, so it uses a3 to swing to the kingside', correct: true, why: 'Right. The a-pawn has moved, so a3 is free, and the third rank leads to e3 and beyond.' },
        { text: 'The rook attacks the b4-knight from a3', why: 'A rook on a3 does not attack b4. It is heading along the third rank.' },
        { text: 'It defends the a4-pawn', why: 'The a4-pawn is not under attack here. The rook lift is about the kingside.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What happens if both sides keep playing 11.Ng5 Rf8 12.Nf3 Re8?',
      choices: [
        { text: 'The game is drawn by repetition', correct: true, why: 'Yes. When the same position appears three times, either player can claim a draw.' },
        { text: 'White wins the f7-pawn', why: 'Black guards f7 with ...Rf8 each time. Nothing is won.' },
        { text: 'Black is forced to play ...h6', why: "Black doesn't have to change anything. The repetition is fine for Black." }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'In the Zaitsev main line, which two Black moves open lines toward e4?',
      choices: [
        { text: '...exd4 and ...Nb4', correct: true, why: 'Right. ...exd4 opens the e-file for the rook, and ...Nb4 clears the long diagonal for the b7-bishop.' },
        { text: '...h6 and ...Bf8', why: 'Those are useful moves, but they protect Black\'s position. They do not open lines to e4.' },
        { text: '...c5 and ...c4', why: 'These moves gain space on the queenside. The lines to e4 open with ...exd4 and ...Nb4.' }
      ]
    },
    {
      type: 'move',
      prompt: "White wants to keep the game going, not repeat. What is White's 11th move?",
      moves: `${CLOSED} Bb7 d4 Re8`,
      orientation: 'white',
      choices: [
        { text: '11.Nbd2', correct: true, why: 'Yes. The knight starts its trip and guards e4, and the game goes on.' },
        { text: '11.Ng5', why: 'That allows 11...Rf8 12.Nf3 Re8, a draw by repetition.' },
        { text: '11.Nf1', why: 'The b1-knight cannot reach f1 in one move. It has to go through d2 first.' }
      ]
    }
  ],
  key: { name: 'Zaitsev: 17.Ra3, the rook lift', moves: RA3, orientation: 'white' },
  terms: [
    { term: 'Rook lift', meaning: 'Moving a rook up the board, then sideways along a rank, so it can join an attack.' },
    { term: 'Draw by repetition', meaning: 'When the same position appears three times, the game can be claimed as a draw.' },
    { term: 'Long diagonal', meaning: 'One of the two longest diagonals, a1-h8 or h1-a8. A bishop on b7 sits on the h1-a8 one.' }
  ]
})
