import { defineModule } from '../../../types'
import { EXCHANGE } from '../../../lines'

const GRAB = `${EXCHANGE} Nxe5 Qd4 Nf3 Qxe4+`
const CASTLED = `${EXCHANGE} O-O Bc5 Nxe5 Qd4 Nf3 Qxe4 Re1`

export default defineModule({
  id: '2.2',
  title: 'Does 4.Bxc6 win the e5-pawn?',
  minutes: 10,
  level: 1,
  goals: [
    'See why 3.Bb5 is not yet a threat to e5',
    'Learn the ...Qd4! fork that wins the pawn back',
    'Know why castling makes the threat real'
  ],
  intro:
    "After 3...a6, the knight on c6 is the only piece guarding e5. So what happens if White simply takes the knight and then grabs the pawn? This module answers that one question, and the answer is a pattern you'll use again and again.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The pawn grab that fails',
      intro: 'Step through the moves. Try to spot the problem with 5.Nxe5 before the board shows you.',
      moves: GRAB,
      start: 5,
      orientation: 'white',
      steps: {
        5: {
          title: 'The Spanish position',
          text: "White's bishop attacks the knight on c6. That knight is the only piece guarding the pawn on e5.",
          arrows: [['b5', 'c6', 'yellow'], ['c6', 'e5', 'green']]
        },
        6: {
          title: 'Black asks a question',
          text: '3...a6. The pawn attacks the bishop. White has to choose: take the knight, or step back.',
          arrows: [['a6', 'b5', 'red']]
        },
        7: {
          title: 'White removes the guard',
          text: '4.Bxc6. The defender of e5 is gone, and the f3-knight is aiming straight at the pawn.',
          arrows: [['f3', 'e5', 'red']],
          marks: ['e5']
        },
        8: {
          title: 'Taking back toward open lines',
          text: '4...dxc6. Black recaptures with the d-pawn. That clears the d-file for the queen and opens a diagonal for the c8-bishop.',
          arrows: [['d8', 'd4', 'blue'], ['c8', 'g4', 'blue']]
        },
        9: {
          title: 'The pawn grab',
          text: "5.Nxe5. White takes the pawn and is a pawn up. The '?' tells you it's a mistake. Can you see why before you press Next?",
          marks: ['e5'],
          ann: '?'
        },
        10: {
          title: 'The fork',
          text: "5...Qd4. The queen attacks two things at once: the knight on e5 and the pawn on e4. That's a fork, and White can't save both.",
          arrows: [['d4', 'e5', 'yellow'], ['d4', 'e4', 'yellow']],
          ann: '!'
        },
        11: {
          title: 'The knight escapes',
          text: '6.Nf3. The knight runs away and attacks the queen. But the e4-pawn is still unprotected.',
          arrows: [['f3', 'd4', 'red'], ['d4', 'e4', 'yellow']]
        },
        12: {
          title: 'Pawn back, with check',
          text: '6...Qxe4+. Black wins the pawn back with check. Material is equal again, and Black has the two bishops. 4.Bxc6 won nothing.',
          arrows: [['e4', 'e1', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Why castling changes everything',
      body:
        "In that example, ...Qxe4 came **with check**. White had to deal with the check, so there was no time to punish Black's queen.\n\nNow imagine White castles first. The king leaves the e-file, and the rook on f1 is one move away from e1. If Black's queen ever lands on e4 with the black king still on e8, the rook can pin it."
    },
    {
      kind: 'walkthrough',
      title: 'After castling, the grab works',
      intro: 'Same opening, but this time White castles before taking anything.',
      moves: CASTLED,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'Same position, new plan',
          text: "White doesn't grab yet. Castling first gets the king safe and brings the f1-rook closer to the center.",
          arrows: [['e1', 'g1', 'blue']]
        },
        9: {
          title: 'The rook is ready',
          text: '5.O-O. The king is on g1, and the rook can reach e1 in one move.',
          arrows: [['f1', 'e1', 'blue']]
        },
        10: {
          title: 'A careless developing move',
          text: '5...Bc5. It looks natural, but it does nothing for e5. Now taking that pawn really works.',
          arrows: [['f3', 'e5', 'red']],
          marks: ['e5'],
          ann: '?'
        },
        11: {
          title: 'White takes',
          text: '6.Nxe5. White grabs the pawn. Black reaches for the same trick as before.',
          marks: ['e5']
        },
        12: {
          title: 'The fork again',
          text: '6...Qd4. The queen hits the knight and the e4-pawn, just like last time.',
          arrows: [['d4', 'e5', 'yellow'], ['d4', 'e4', 'yellow']]
        },
        13: {
          title: 'The knight steps back',
          text: '7.Nf3. The knight retreats and attacks the queen. The e4-pawn looks free.',
          arrows: [['f3', 'd4', 'red']]
        },
        14: {
          title: 'No check this time',
          text: "7...Qxe4. Black takes the pawn, but it isn't check: White's king is safe on g1. Look at the e-file.",
          marks: ['e4', 'e8'],
          ann: '??'
        },
        15: {
          title: 'The pin',
          text: "8.Re1. The rook attacks the queen, and the queen can't leave the e-file because the black king stands behind it. Black loses the queen for a rook.",
          arrows: [['e1', 'e4', 'red'], ['e4', 'e8', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'tip',
      title: 'Before you grab, look for the fork',
      body:
        "When your opponent's piece leaves its post to take a pawn, ask: can I attack two things at once now? And before you grab a pawn yourself, ask what your opponent can attack next."
    }
  ],
  takeaway:
    'Before White castles, 4.Bxc6 and 5.Nxe5 wins nothing, because ...Qd4 forks e5 and e4. After castling, Re1 can pin the queen, so Black must guard e5.',
  lookAhead:
    'Chapter 3 turns this into a whole system for White: the Exchange Variation, where White plays 4.Bxc6 and 5.O-O on purpose.',
  drills: [
    {
      title: 'Find the fork',
      prompt: "You're Black. White just grabbed the pawn with 5.Nxe5?. Win it back.",
      moves: GRAB,
      start: 9,
      side: 'black',
      hints: ['Look for a queen move that attacks two things at once.', 'The d-file is open all the way to d4.'],
      success: "That's it. 5...Qd4! hits e5 and e4, and 6...Qxe4+ wins the pawn back with check."
    },
    {
      title: 'Punish the greedy queen',
      prompt: "You're White. Black played 5...Bc5?, leaving e5 unguarded. Take the pawn, then punish the queen when it grabs e4.",
      moves: CASTLED,
      start: 10,
      side: 'white',
      hints: ['Nothing guards e5 any more.', 'When the queen lands on e4, which piece can attack it along the e-file?'],
      success: 'Nxe5, Nf3 and Re1! The queen is pinned to the king and will be lost for a rook.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 4.Bxc6 dxc6 5.Nxe5?, what does 5...Qd4 attack?',
      choices: [
        { text: 'Only the knight on e5', why: 'The knight is one target. Look at e4 as well.' },
        { text: 'The knight on e5 and the pawn on e4', correct: true, why: "Right. Two targets at once: that's a fork." },
        { text: "White's king", why: 'Not yet. The check comes one move later, with 6...Qxe4+.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does Black usually recapture with 4...dxc6 rather than 4...bxc6?',
      choices: [
        { text: 'It opens lines for the queen and the c8-bishop', correct: true, why: 'Exactly. One move frees both pieces.' },
        { text: 'It protects the e5-pawn', why: "4...dxc6 doesn't guard e5. The ...Qd4 trick is what saves the pawn." },
        { text: '4...bxc6 is illegal', why: '4...bxc6 is legal and sometimes played. 4...dxc6 is simply more active.' }
      ]
    },
    {
      type: 'trap',
      prompt: "White to move. Black's queen has just taken on e4. What's the strongest move?",
      moves: `${EXCHANGE} O-O Bc5 Nxe5 Qd4 Nf3 Qxe4`,
      orientation: 'white',
      choices: [
        { text: '8.Re1', correct: true, why: 'The rook pins the queen to the king. Black loses the queen for a rook.' },
        { text: '8.d3', why: 'It attacks the queen, but the queen just retreats. Re1 wins it instead.' },
        { text: '8.Nc3', why: 'It develops with an attack on the queen, but the queen escapes. Look along the e-file.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move. How does Black win the pawn back?',
      moves: `${EXCHANGE} Nxe5`,
      orientation: 'black',
      choices: [
        { text: '5...Qd4', correct: true, why: 'The queen forks the knight on e5 and the pawn on e4.' },
        { text: '5...Bd6', why: 'It hits the knight, but after 6.Nf3 or 6.d4 White keeps the extra pawn.' },
        { text: '5...f6', why: 'The knight just retreats, Black stays a pawn down, and ...f6 weakens the king.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Exchange Variation, why does 5.O-O turn Nxe5 into a real threat?',
      choices: [
        { text: 'After ...Qd4 and ...Qxe4, Re1 can pin the queen to the king', correct: true, why: 'Yes. With the king on g1, ...Qxe4 is no longer check, and the rook arrives on e1.' },
        { text: 'Castling defends the e4-pawn directly', why: "The king on g1 doesn't guard e4. The rook coming to e1 is what matters." },
        { text: "It lets White's queen reach d4 first", why: "White's queen isn't involved. It's about the rook on the e-file." }
      ]
    }
  ],
  key: { name: 'The ...Qd4! fork (Exchange Variation trick)', moves: `${EXCHANGE} Nxe5 Qd4`, orientation: 'black' },
  terms: [
    { term: 'Fork', meaning: 'One piece attacks two or more enemy pieces or pawns at the same time.' },
    { term: 'Pin', meaning: 'A piece cannot move off a line without exposing a more valuable piece behind it.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one. Strong in open positions.' },
    { term: '! and ?', meaning: '! marks a good move, ? a mistake, ?? a blunder, !? an interesting try.' }
  ]
})
