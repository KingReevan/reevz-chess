import { defineModule } from '../../../types'
import { CLOSED_OO } from '../../../lines'

const GAMBIT = `${CLOSED_OO} c3 d5 exd5 Nxd5 Nxe5 Nxe5 Rxe5`
const DECLINE = `${CLOSED_OO} c3 d6 h3`

export default defineModule({
  id: '5.1',
  title: '8...d5: the pawn sacrifice',
  minutes: 10,
  level: 3,
  goals: [
    'Recognise the moment the Marshall Attack becomes possible',
    'Understand what Black gets for the e5-pawn',
    'Know how to decline the gambit with 8...d6'
  ],
  intro:
    "After 7...O-O 8.c3, Black can play the quiet 8...d6, or throw a pawn into the center with 8...d5. Why would Black give away a pawn on move 8? This module answers that question: the pawn buys time, and time turns into an attack on White's king.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The gambit offered and accepted',
      intro: "You're Black. Watch how many white pieces are still at home when the dust settles.",
      moves: GAMBIT,
      start: 14,
      orientation: 'black',
      steps: {
        14: {
          title: 'Castling keeps options open',
          text: '7...O-O. Black castles before playing ...d6. The d-pawn is still on d7, so it can jump two squares to d5 in one move.',
          arrows: [['d7', 'd5', 'blue']]
        },
        15: {
          title: "White's usual plan",
          text: "8.c3. White prepares d2–d4 and gives the bishop a retreat on c2. It's a useful pawn move, but it doesn't develop a piece: the b1-knight and c1-bishop are still at home.",
          arrows: [['d2', 'd4', 'blue']],
          marks: ['b1', 'c1']
        },
        16: {
          title: 'The Marshall Attack',
          text: '8...d5. Black hits e4 twice, with the pawn and the f6-knight, while only the rook defends it. White can take, but then the center opens while Black is better developed.',
          arrows: [['d5', 'e4', 'red'], ['f6', 'e4', 'red']],
          ann: '!'
        },
        17: {
          title: 'White accepts',
          text: '9.exd5. White takes the pawn. Black must recapture first, before anything else.',
          arrows: [['f6', 'd5', 'green']]
        },
        18: {
          title: 'A knight in the center',
          text: '9...Nxd5. Material is level again, and the knight sits on a fine central square. But look at e5: the f3-knight and the e1-rook attack it, and only the c6-knight defends it.',
          arrows: [['f3', 'e5', 'red'], ['e1', 'e5', 'red'], ['c6', 'e5', 'green']]
        },
        19: {
          title: 'The pawn falls',
          text: '10.Nxe5. White wins the pawn. This is the pawn Black chose to give up with 8...d5.',
          marks: ['e5']
        },
        20: {
          title: 'Trading knights',
          text: "10...Nxe5. Black removes White's best attacking piece. The rook on e1 recaptures next.",
          arrows: [['e1', 'e5', 'red']]
        },
        21: {
          title: 'A pawn for time',
          text: '11.Rxe5. Black is a pawn down. Now count: the b1-knight and c1-bishop have never moved, and the d2-pawn still blocks the bishop. Black will use those lost moves to attack the king.',
          marks: ['b1', 'c1', 'd2']
        }
      }
    },
    {
      kind: 'text',
      title: 'What Black gets for the pawn',
      body:
        "**Time.** White's queenside pieces are asleep. Apart from castling, White has moved only the b3-bishop and the rook now on e5. Black will soon kick that rook with ...Bd6, gaining even more time.\n\n**Targets.** All of White's defenders are far from the king on g1. In the next modules you'll see Black's queen go to h4 and then h3, the bishops aim at h2 and f3, and the rooks join along the e-file.\n\n**Risk.** If the attack fizzles out, Black is simply a pawn down. The Marshall is a deal: a pawn now for an attack that must keep moving."
    },
    {
      kind: 'walkthrough',
      title: 'Saying no: 8...d6',
      intro: "Black doesn't have to gamble. The same castled position can go back to the main road.",
      moves: DECLINE,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'The moment of choice',
          text: '7.Bb3. The bishop has retreated. Black now decides the order of the next few moves.',
          arrows: [['b3', 'f7', 'blue']]
        },
        14: {
          title: 'Castle first',
          text: '7...O-O. Castling first keeps both doors open: ...d5 for the Marshall, or ...d6 for a quiet game.',
          arrows: [['d7', 'd5', 'blue'], ['d7', 'd6', 'green']]
        },
        15: {
          title: 'White plays c3',
          text: '8.c3. This is the moment the Marshall becomes possible. Black chooses the calm road this time.'
        },
        16: {
          title: 'Holding e5',
          text: '8...d6. The pawn guards e5 for good. No pawn is offered, and the game becomes a normal Closed Ruy Lopez.',
          arrows: [['d6', 'e5', 'green']]
        },
        17: {
          title: 'The Closed tabiya',
          text: "9.h3. This stops ...Bg4. It's exactly the position from Chapter 4 (7...d6 8.c3 O-O 9.h3), reached by a different move order.",
          arrows: [['h3', 'g4', 'green']]
        }
      }
    },
    {
      kind: 'history',
      title: 'Marshall against Capablanca, 1918',
      body:
        "Frank Marshall first played the gambit against José Raúl Capablanca in New York in 1918. He used 11...Nf6, not the modern 11...c6. Capablanca took the pawn, defended calmly and won the game, 1-0. Black's play has improved a lot since then, and the Marshall is still played at the very top today."
    },
    {
      kind: 'tip',
      title: 'Castling first means knowing two worlds',
      body:
        "Many White players don't allow the Marshall at all. Instead of 8.c3 they play 8.a4, 8.h3 or 8.d3. If you choose 7...O-O, you need an answer to those moves too. Modules 5.6 and 5.7 cover them."
    }
  ],
  takeaway:
    "After 7...O-O 8.c3, the Marshall's 8...d5 gives up the e5-pawn for time: White's queenside is still asleep while Black's pieces head for the king. 8...d6 declines and leads to the Closed Ruy Lopez.",
  lookAhead:
    "Next: the moves from 9.exd5 to 11...c6, and why Black isn't in a hurry to win the pawn back.",
  drills: [
    {
      title: 'Offer the pawn',
      prompt: "You're Black. White has just played 8.c3. Start the Marshall Attack and recapture correctly until White's rook takes on e5.",
      moves: `${CLOSED_OO} c3 d5 exd5 Nxd5 Nxe5 Nxe5`,
      start: 15,
      side: 'black',
      hints: ['Hit e4 with a pawn, two squares at once.', 'Push the d-pawn to d5, then take back with the knights each time.'],
      success: '8...d5!, 9...Nxd5 and 10...Nxe5. After 11.Rxe5 you are a pawn down, but White still has three queenside pieces at home.'
    },
    {
      title: 'Decline it calmly',
      prompt: "You're Black after 7.Bb3. Castle, then decline the gambit and reach the Closed Ruy Lopez.",
      moves: `${CLOSED_OO} c3 d6`,
      start: 13,
      side: 'black',
      hints: ['First get your king safe.', 'After 8.c3, guard e5 with a pawn instead of offering one.'],
      success: '7...O-O and 8...d6. After 9.h3 you have the Closed tabiya from Chapter 4.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black to move. Which move starts the Marshall Attack?',
      moves: `${CLOSED_OO} c3`,
      orientation: 'black',
      choices: [
        { text: '8...d5', correct: true, why: 'Right. The pawn hits e4 and opens the center, at the cost of the e5-pawn.' },
        { text: '8...d6', why: 'That guards e5 and declines the gambit. After 9.h3 you are in the Closed Ruy Lopez.' },
        { text: '8...Na5', why: 'It chases the bishop, but no pawn is offered and the center stays closed. The Marshall is ...d5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9.exd5 Nxd5 10.Nxe5 Nxe5 11.Rxe5, what has Black received for the pawn?',
      choices: [
        { text: "A lead in development and chances against White's king", correct: true, why: "Yes. White's knight, bishop and rook on the queenside haven't moved, and Black's pieces can head for the kingside." },
        { text: 'The two bishops', why: 'Both sides still have both bishops. The payment is time, not the bishop pair.' },
        { text: 'A better pawn structure', why: "Black's structure isn't better. Black is simply a pawn down and must use the extra time." }
      ]
    },
    {
      type: 'name',
      prompt: 'Black played 8...d6 here, and White answered 9.h3. What position is this?',
      moves: DECLINE,
      orientation: 'black',
      choices: [
        { text: 'The Closed Ruy Lopez tabiya', correct: true, why: 'Right. It is the same position as 7...d6 8.c3 O-O 9.h3, just reached in a different order.' },
        { text: 'The Marshall Attack', why: "No pawn was offered. The Marshall needs 8...d5, and here Black played 8...d6." },
        { text: 'The Open Defense', why: 'The Open Defense is 5...Nxe4. Here Black played 5...Be7 and kept the center closed.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Black wants to keep the Marshall Attack available. Which move order does that?',
      choices: [
        { text: '7...O-O, and after 8.c3 play 8...d5', correct: true, why: 'Yes. Castling first leaves the d-pawn on d7, ready to jump to d5 in one move.' },
        { text: '7...d6, then 8...O-O', why: 'Once the pawn is on d6, the gambit is gone. That order leads to the Closed main line.' },
        { text: '8...d6 first, then ...d5 later', why: 'Going d7–d6–d5 costs two moves. White gets time to play d4, and the point of the gambit, gaining time, is lost.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why is 8.c3 the move that allows the Marshall Attack?',
      choices: [
        { text: 'It spends a move on a pawn, so White is undeveloped when ...d5 opens the game', correct: true, why: "Right. After the trades, White's b1-knight and c1-bishop are still at home." },
        { text: 'It leaves e4 without any defender', why: 'The rook on e1 still guards e4. The problem is time, not the e4-pawn.' },
        { text: "It blocks the b3-bishop's retreat", why: 'It does the opposite: c3 gives the bishop the c2-square.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Count the material in this position. Who is ahead?',
      moves: GAMBIT,
      orientation: 'black',
      choices: [
        { text: 'White, by one pawn', correct: true, why: "Yes. Black gave up the e5-pawn. That's the price of the Marshall." },
        { text: 'Black, by one pawn', why: "Count again: the pawns on d5 were traded, then White took e5. Black is the one who is down." },
        { text: 'Material is equal', why: 'Not quite. The knights were traded, but the e5-pawn is gone. White is a pawn up.' }
      ]
    }
  ],
  key: { name: 'Marshall Attack: 8...d5', moves: `${CLOSED_OO} c3 d5`, orientation: 'black' },
  terms: [
    { term: 'Gambit', meaning: 'An opening where one side gives up material, usually a pawn, to gain time or attack.' },
    { term: 'Development', meaning: 'Bringing pieces off their starting squares so they can take part in the game.' },
    { term: 'Initiative', meaning: 'Being the side that makes threats, so the opponent has to keep reacting.' },
    { term: 'Tabiya', meaning: 'A well-known position that many games pass through, where the real fight starts.' }
  ]
})
