import { defineModule } from '../../../types'
import { MORPHY, CLOSED7 } from '../../../lines'

const IGNORED = `${MORPHY} Be7 Re1 O-O Bxc6 dxc6 Nxe5 Qd4 Nf3`
const AVERBAKH = `${MORPHY} Be7 Re1 d6 Bxc6+ bxc6 d4`

export default defineModule({
  id: '2.6',
  title: '5...Be7 and 6.Re1: the Closed setup',
  minutes: 11,
  level: 1,
  goals: [
    'Understand why 6.Re1 turns the pressure on e5 into a real threat',
    'See what happens if Black ignores it',
    'Know the two answers: 6...b5 (main line) and 6...d6'
  ],
  intro:
    "Since move 3, White's pressure on e5 has been just pressure. Black always had ...Qd4 or ...Nxe4 to win the pawn back. After 5...Be7 6.Re1 that changes, and Black has to react at once. This module shows why, and how.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The threat becomes real',
      intro: 'Black castles and ignores 6.Re1. Watch why the old tricks no longer work.',
      moves: IGNORED,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'The Closed Ruy Lopez',
          text: '5...Be7. Black develops and gets ready to castle. The e4-pawn is still unguarded, so Black keeps the option of taking it.',
          arrows: [['f6', 'e4', 'red'], ['e8', 'g8', 'blue']]
        },
        11: {
          title: 'The rook guards e4',
          text: "6.Re1. Now e4 is protected. That quietly creates a threat: Bxc6 followed by Nxe5, because ...Nxe4 or ...Qxe4 can no longer win the pawn back.",
          arrows: [['e1', 'e4', 'green'], ['a4', 'c6', 'red'], ['f3', 'e5', 'red']]
        },
        12: {
          title: 'Ignoring the threat',
          text: '6...O-O. A natural move, but it does nothing about e5.',
          marks: ['e5'],
          ann: '?'
        },
        13: {
          title: 'Remove the guard',
          text: '7.Bxc6. White takes the knight that defends e5.',
          marks: ['e5']
        },
        14: {
          title: 'Recapture',
          text: '7...dxc6. Black opens the d-file for the queen, hoping for the usual ...Qd4 trick.',
          arrows: [['d8', 'd4', 'blue']]
        },
        15: {
          title: 'The pawn falls',
          text: '8.Nxe5. White wins the pawn. In Modules 1.4 and 2.2 Black could hit back at e4. Not this time.',
          marks: ['e5', 'e4']
        },
        16: {
          title: 'The old trick',
          text: '8...Qd4. The queen attacks the knight and the e4-pawn, just like before.',
          arrows: [['d4', 'e5', 'yellow'], ['d4', 'e4', 'yellow']]
        },
        17: {
          title: "It doesn't work any more",
          text: '9.Nf3. The knight escapes with an attack on the queen, and e4 is guarded by the rook. If 9...Qxe4, 10.Rxe4 wins the queen. White stays a pawn up.',
          arrows: [['f3', 'd4', 'red'], ['e1', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'One threat, two answers',
      body:
        "After 6.Re1, Black must do something about e5 right away. There are two ways.\n\n**6...b5.** Kick the bishop off the a4–e8 diagonal, so it can no longer take on c6. This is the main line.\n\n**6...d6.** Guard e5 with a pawn. It holds, but it opens d7, so the knight on c6 is pinned and White can take on c6 with check. This is the rarer Averbakh Variation."
    },
    {
      kind: 'walkthrough',
      title: 'The main answer: 6...b5',
      intro: 'Same position after 6.Re1. This time Black deals with the bishop first.',
      moves: CLOSED7,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'White castles',
          text: '5.O-O. The king is safe, and the rook can go to e1 next.',
          arrows: [['f1', 'e1', 'blue']]
        },
        10: {
          title: 'The Closed setup',
          text: '5...Be7. Black develops quietly and prepares to castle.',
          arrows: [['e8', 'g8', 'blue']]
        },
        11: {
          title: 'The threat appears',
          text: '6.Re1. With e4 guarded, Bxc6 and Nxe5 is now a real threat.',
          arrows: [['a4', 'c6', 'red'], ['f3', 'e5', 'red'], ['e1', 'e4', 'green']]
        },
        12: {
          title: 'Kick the bishop',
          text: '6...b5. The pawn attacks the bishop, and the a6-pawn protects it. The bishop has to leave the diagonal, so it can no longer take on c6.',
          arrows: [['b5', 'a4', 'red'], ['a6', 'b5', 'green']],
          ann: '!'
        },
        13: {
          title: 'Threat over',
          text: '7.Bb3. The bishop steps back. The c6-knight is safe, and e5 keeps its guard. The next module looks at the bishop\'s new home.',
          arrows: [['c6', 'e5', 'green'], ['b3', 'f7', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The other answer: 6...d6',
      intro: 'Black can also simply guard e5 with a pawn. Watch what it costs.',
      moves: AVERBAKH,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'After 6.Re1',
          text: 'Black has to deal with the threat to e5.',
          arrows: [['a4', 'c6', 'red'], ['f3', 'e5', 'red']]
        },
        12: {
          title: 'Guard e5 directly',
          text: '6...d6. Now e5 has two guards. But d7 is empty, so the a4-bishop pins the c6-knight to the king.',
          arrows: [['d6', 'e5', 'green'], ['a4', 'e8', 'red']],
          marks: ['c6']
        },
        13: {
          title: 'Take with check',
          text: '7.Bxc6+. White uses the pin to trade with check.',
          arrows: [['c6', 'e8', 'red']]
        },
        14: {
          title: 'Doubled pawns',
          text: '7...bxc6. Black keeps e5 and has the two bishops, but now has two pawns on the c-file.',
          marks: ['c6', 'c7']
        },
        15: {
          title: 'White takes the center',
          text: '8.d4. White builds a big center. Black is solid but a little passive, and most players prefer 6...b5.',
          arrows: [['d4', 'e5', 'red']]
        }
      }
    }
  ],
  takeaway:
    '6.Re1 guards e4, so Bxc6 and Nxe5 becomes a real threat. Black answers with 6...b5, kicking the bishop off the diagonal, or more rarely with 6...d6.',
  lookAhead:
    'Next: the bishop retreats to b3. What does it aim at there, and what traps should White watch for?',
  drills: [
    {
      title: 'Punish the careless castle',
      prompt: "You're White. Black castled and ignored the threat. Win the e5-pawn, and keep it when Black's queen comes to d4.",
      moves: IGNORED,
      start: 12,
      side: 'white',
      hints: ['Take the guard of e5 first, then the pawn.', 'When the queen hits your knight, retreat it with an attack on the queen. Your rook protects e4.'],
      success: '7.Bxc6, 8.Nxe5 and 9.Nf3. You are a pawn up, and ...Qxe4 would lose the queen to Rxe4.'
    },
    {
      title: 'Answer the threat',
      prompt: "You're Black. Play the Closed setup, and when White plays 6.Re1, deal with the threat to e5.",
      moves: `${MORPHY} Be7 Re1 b5`,
      start: 9,
      side: 'black',
      hints: ['Develop the f8-bishop to e7.', 'After 6.Re1, attack the a4-bishop with a pawn.'],
      success: '5...Be7 and 6...b5. The bishop has to leave the diagonal, and e5 is safe.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 6.Re1 defend?',
      moves: `${MORPHY} Be7 Re1`,
      orientation: 'white',
      choices: [
        { text: 'The e4-pawn', correct: true, why: 'Right. The rook on e1 guards e4 along the e-file.' },
        { text: 'The knight on f3', why: "The rook doesn't guard f3. Its job is e4." },
        { text: 'The f2-pawn', why: "From e1 the rook doesn't reach f2. It guards the e-file, including e4." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is Bxc6 followed by Nxe5 a real threat after 6.Re1, but not earlier?',
      choices: [
        { text: 'e4 is now guarded, so ...Qd4 or ...Nxe4 cannot win the pawn back', correct: true, why: 'Exactly. Black loses the counterpunch on e4.' },
        { text: 'Because White has castled', why: 'Castling helped, but the key is that the rook now guards e4.' },
        { text: 'Because Black has played ...Be7', why: '...Be7 blocks nothing important. What changed is that e4 has a defender.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. How does Black usually deal with the threat to e5?',
      moves: `${MORPHY} Be7 Re1`,
      orientation: 'black',
      choices: [
        { text: '6...b5', correct: true, why: 'Yes. The bishop is kicked off the a4–e8 diagonal and can no longer take on c6.' },
        { text: '6...O-O', why: 'It ignores the threat: 7.Bxc6 dxc6 8.Nxe5 wins a pawn.' },
        { text: '6...Nxe4', why: 'The rook now guards e4, so 7.Rxe4 wins your knight for a pawn.' }
      ]
    },
    {
      type: 'trap',
      prompt: "White to move. Black's queen attacks your knight on e5 and the e4-pawn. What is the best answer?",
      moves: `${MORPHY} Be7 Re1 O-O Bxc6 dxc6 Nxe5 Qd4`,
      orientation: 'white',
      choices: [
        { text: '9.Nf3', correct: true, why: 'Right. The knight escapes and hits the queen, and e4 is guarded by the rook.' },
        { text: '9.d3', why: 'e4 was already safe. Now nothing guards the knight, and ...Qxe5 wins it.' },
        { text: '9.Nxf7', why: 'The f8-rook simply takes the knight. You lose a piece for a pawn.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why does Black play ...b5 right after 6.Re1 in the Closed Ruy Lopez?',
      choices: [
        { text: 'To drive the bishop off the a4–e8 diagonal before Bxc6 and Nxe5 can win a pawn', correct: true, why: 'Right. Once the bishop is on b3, it no longer attacks c6.' },
        { text: 'To attack the e4-pawn', why: '...b5 attacks the bishop on a4, not e4.' },
        { text: "To start an attack on White's king", why: "White's king is on the kingside. ...b5 is about the bishop." }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Black answered 6.Re1 with 6...d6. Which move uses the pin on c6 at once?',
      moves: `${MORPHY} Be7 Re1 d6`,
      orientation: 'white',
      choices: [
        { text: '7.Bxc6+', correct: true, why: 'Yes. The trade comes with check and leaves Black with doubled c-pawns.' },
        { text: '7.Nxe5', why: 'The d6-pawn guards e5, so 7...dxe5 wins the knight for a pawn.' },
        { text: '7.d3', why: 'Solid, but it lets the pin go. 7.Bxc6+ uses it right away.' }
      ]
    }
  ],
  key: { name: 'Closed Ruy Lopez: 6.Re1 makes the threat real', moves: `${MORPHY} Be7 Re1`, orientation: 'white' },
  terms: [
    { term: 'Closed Ruy Lopez', meaning: '5...Be7: Black keeps the center closed and develops quietly instead of taking on e4.' },
    { term: 'Doubled pawns', meaning: 'Two pawns of the same color on one file. They are often weaker because they cannot protect each other.' },
    { term: 'Averbakh Variation', meaning: '6...d6 in the Closed Ruy: Black guards e5 with a pawn instead of playing ...b5.' }
  ]
})
