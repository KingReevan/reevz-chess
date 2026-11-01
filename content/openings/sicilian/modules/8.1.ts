import { defineModule } from '../../../types'
import { CLOSED } from '../lines'

/** closed-to-open: 2.Nc3 d6 3.Nf3 Nf6 4.d4 cxd4 5.Nxd4 a6 (a Najdorf by another move order) */
const TO_OPEN = 'e4 c5 Nc3 d6 Nf3 Nf6 d4 cxd4 Nxd4 a6'

export default defineModule({
  id: '8.1',
  title: '2.Nc3: closed or open?',
  minutes: 10,
  level: 2,
  goals: [
    'See how 2.Nc3 can still turn into an Open Sicilian',
    'Recognize the Closed set-up: g3, Bg2 and d3',
    'Spot the d4 square and the two long diagonals'
  ],
  intro:
    "Not every White player answers 1...c5 with 2.Nf3. Some play 2.Nc3 first. That knight move doesn't say much yet: White can still go for Nf3 and d4, or build slowly with g3, Bg2 and d3. This module shows both roads and how to tell which one you are on.",
  sections: [
    {
      kind: 'walkthrough',
      title: '2.Nc3 that turns into a Najdorf',
      intro: 'First the road back to the Open Sicilian. Watch the position after move 5: you have seen it before.',
      moves: TO_OPEN,
      start: 2,
      orientation: 'white',
      steps: {
        2: {
          title: 'A different second move',
          text: '1...c5. Instead of the usual 2.Nf3, White can develop the queen\'s knight first.',
          arrows: [['b1', 'c3', 'blue']]
        },
        3: {
          title: 'A flexible knight',
          text: '2.Nc3. The knight guards e4 and watches d5. It doesn\'t decide anything yet: White keeps both plans open.',
          arrows: [['c3', 'e4', 'green'], ['c3', 'd5', 'green']]
        },
        4: {
          title: 'Black plays normally',
          text: '2...d6. Black makes the same move as against 2.Nf3. It frees the c8-bishop and prepares ...Nf6.',
          arrows: [['c8', 'g4', 'blue']]
        },
        5: {
          title: 'The other knight',
          text: '3.Nf3. Now White\'s knight aims at d4. This hints that White wants to open the center after all.',
          arrows: [['f3', 'd4', 'green']]
        },
        6: {
          title: 'Hitting e4',
          text: '3...Nf6. The knight attacks e4, and the c3-knight defends it.',
          arrows: [['f6', 'e4', 'red'], ['c3', 'e4', 'green']]
        },
        7: {
          title: 'The center opens',
          text: '4.d4. This is the Open Sicilian push. The pawn attacks c5, and Black takes it.',
          arrows: [['d4', 'c5', 'red']]
        },
        8: {
          title: 'The usual trade',
          text: '4...cxd4. Black swaps the c-pawn for White\'s d-pawn, just like in Chapter 1.',
          marks: ['d4']
        },
        9: {
          title: 'A familiar position',
          text: '5.Nxd4. Look closely: this is exactly the Open Sicilian position after 5.Nc3. White just played the knight moves in a different order.',
          arrows: [['d4', 'e6', 'blue'], ['d4', 'b5', 'blue']]
        },
        10: {
          title: 'A Najdorf after all',
          text: '5...a6. This is the Najdorf from Chapter 2. When two move orders reach the same position, we say they transpose.',
          arrows: [['a6', 'b5', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The Closed set-up',
      intro: 'Now the other road. White keeps the d-pawn back and builds a quiet set-up on the kingside.',
      moves: CLOSED,
      start: 2,
      orientation: 'white',
      steps: {
        2: {
          title: 'Same start',
          text: '1...c5. This time White has a slower plan in mind.',
          arrows: [['b1', 'c3', 'blue']]
        },
        3: {
          title: 'The knight again',
          text: '2.Nc3. The same flexible move as before.',
          arrows: [['c3', 'd5', 'green']]
        },
        4: {
          title: 'Black eyes d4',
          text: '2...Nc6. The knight joins the c5-pawn in watching the d4 square.',
          arrows: [['c6', 'd4', 'green'], ['c5', 'd4', 'green']]
        },
        5: {
          title: 'A fianchetto',
          text: '3.g3. White prepares Bg2. Putting a bishop on the long diagonal next to the castled king is called a fianchetto. No early d4 is coming.',
          arrows: [['f1', 'g2', 'blue']]
        },
        6: {
          title: 'Black does the same',
          text: '3...g6. Black prepares ...Bg7, a fianchetto of its own.',
          arrows: [['f8', 'g7', 'blue']]
        },
        7: {
          title: 'The g2-bishop',
          text: '4.Bg2. The bishop sits on the long light-squared diagonal. For now its own e4-pawn is in the way, so its main job is to guard e4.',
          arrows: [['g2', 'e4', 'green']]
        },
        8: {
          title: 'The g7-bishop',
          text: '4...Bg7. Black\'s bishop looks down the other long diagonal, through d4 to the knight on c3.',
          arrows: [['g7', 'c3', 'blue']],
          marks: ['d4']
        },
        9: {
          title: 'The center stays closed',
          text: '5.d3. The pawn takes one step and supports e4. It also opens the way for the c1-bishop. Because White doesn\'t play d4, no center pawns are traded.',
          arrows: [['d3', 'e4', 'green'], ['c1', 'e3', 'blue']]
        },
        10: {
          title: 'The Closed Sicilian',
          text: '5...d6. This is the starting position of the Closed Sicilian, and it is roughly equal. White usually aims for f4 and f5 on the kingside. Black plays on the queenside and eyes d4.',
          arrows: [['f2', 'f4', 'blue'], ['b7', 'b5', 'blue']],
          marks: ['d4']
        }
      }
    },
    {
      kind: 'text',
      title: 'Which road is White on?',
      body:
        "After 2.Nc3, look at White's next few moves.\n\n**Nf3 and d4:** the center opens and you are back in an Open Sicilian.\n\n**g3, Bg2 and d3:** the Closed Sicilian. The center stays shut, and both sides play on the wings. Modules 8.2 and 8.3 cover the plans.\n\n**An early f4:** the Grand Prix Attack, a faster kingside attack. Module 8.4 covers it."
    },
    {
      kind: 'tip',
      title: 'For Black: keep your usual move',
      body:
        "2...Nc6, 2...d6 and 2...e6 are all good answers to 2.Nc3. Pick the one you already play against 2.Nf3. If White then goes Nf3 and d4, the game often comes back to an Open Sicilian you know. If White goes g3 and Bg2, you play a Closed set-up instead."
    }
  ],
  takeaway:
    '2.Nc3 keeps White\'s options open. With Nf3 and d4 it becomes an Open Sicilian; with g3, Bg2 and d3 it is the Closed Sicilian, where Black watches the d4 square.',
  lookAhead:
    'Module 8.2 shows what White does in the Closed Sicilian: Be3, Qd2 and the push f4–f5.',
  drills: [
    {
      title: 'Open it up',
      prompt: "You're White. Black has played 2...d6 and 3...Nf6. Turn the game into an Open Sicilian.",
      moves: 'e4 c5 Nc3 d6 Nf3 Nf6 d4 cxd4 Nxd4',
      start: 6,
      side: 'white',
      hints: ['Which pawn push opens the center?', 'Push the d-pawn two squares, then take back with the knight.'],
      success: '4.d4 cxd4 5.Nxd4. You have reached the normal Open Sicilian, just by a different move order.'
    },
    {
      title: 'Answer the fianchetto',
      prompt: "You're Black. White has chosen the Closed set-up with 3.g3. Put your own king's bishop on the long diagonal.",
      moves: 'e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7',
      start: 5,
      side: 'black',
      hints: ['First make room for the bishop with a pawn move.', '...g6, then ...Bg7.'],
      success: '3...g6 and 4...Bg7. Your bishop now looks through d4 toward the c3-knight.'
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'White has played 2.Nc3, g3, Bg2 and d3. What is this set-up called?',
      moves: CLOSED,
      orientation: 'white',
      choices: [
        { text: 'The Closed Sicilian', correct: true, why: 'Yes. The d-pawn stops on d3 and the center stays closed.' },
        { text: 'The Open Sicilian', why: 'In the Open Sicilian White plays d4 and the pawns trade on d4. Here White played d3.' },
        { text: 'The Grand Prix Attack', why: 'The Grand Prix also starts with 2.Nc3, but White pushes f4 early. Here White has fianchettoed instead.' },
        { text: 'The Alapin', why: 'The Alapin is 2.c3, preparing d4 with a pawn.' }
      ]
    },
    {
      type: 'name',
      prompt: 'The game went 2.Nc3 d6 3.Nf3 Nf6 4.d4 cxd4 5.Nxd4 a6. Which variation is on the board?',
      moves: TO_OPEN,
      orientation: 'black',
      choices: [
        { text: 'The Najdorf', correct: true, why: 'Right. It is the same position as 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6.' },
        { text: 'The Closed Sicilian', why: 'White played d4 and the pawns were traded, so the center is open.' },
        { text: 'The Dragon', why: 'The Dragon is 5...g6. Here Black played 5...a6.' },
        { text: 'The Sveshnikov', why: 'The Sveshnikov needs ...Nc6 and ...e5. Black played ...d6 and ...a6.' }
      ]
    },
    {
      type: 'concept',
      prompt: "Which square do Black's c5-pawn, c6-knight and g7-bishop all control?",
      moves: CLOSED,
      orientation: 'black',
      choices: [
        { text: 'd4', correct: true, why: 'Yes. All three hit d4, and White has no pawn that can easily kick a knight from there.' },
        { text: 'e5', why: 'The knight and the bishop see e5, but the c5-pawn does not.' },
        { text: 'b4', why: 'The c5-pawn and the knight cover b4, but the g7-bishop does not reach it.' },
        { text: 'd5', why: 'd5 belongs to White: the e4-pawn and the c3-knight control it.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Which move turns this into an Open Sicilian?',
      moves: 'e4 c5 Nc3 d6 Nf3 Nf6',
      orientation: 'white',
      choices: [
        { text: '4.d4', correct: true, why: 'Right. After 4...cxd4 5.Nxd4 you have the normal Open Sicilian.' },
        { text: '4.g3', why: 'That prepares a fianchetto and keeps the center closed.' },
        { text: '4.d3', why: 'It supports e4, but the pawn stops on d3, so the center stays closed.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In the Closed Sicilian, why is d4 a good square for a Black knight?',
      moves: CLOSED,
      orientation: 'black',
      choices: [
        { text: "No White pawn can easily attack it: the e-pawn is already past it and the c3-knight blocks the c-pawn", correct: true, why: 'Exactly. A square that enemy pawns cannot attack is called an outpost. White has to move the c3-knight before c3 can kick a knight on d4.' },
        { text: "White's d3-pawn can chase it away at any time", why: 'A pawn on d3 attacks c4 and e4, not d4.' },
        { text: "A knight on d4 blocks White's g2-bishop", why: 'The g2-bishop moves on light squares and d4 is a dark square. The knight does not touch its diagonal.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Why can 2.Nc3 lead to either an Open or a Closed Sicilian?',
      choices: [
        { text: 'White has not committed the d-pawn or the g1-knight yet', correct: true, why: 'Right. Nf3 and d4 open the center; g3, Bg2 and d3 keep it closed.' },
        { text: 'After 2.Nc3, White can no longer play d4', why: 'White can still play d4. The first walkthrough reached a Najdorf that way.' },
        { text: '2.Nc3 forces Black to answer 2...Nc6', why: 'Black can choose freely: 2...Nc6, 2...d6 and 2...e6 are all good.' }
      ]
    }
  ],
  key: { name: 'Closed or open? 2.Nc3', moves: 'e4 c5 Nc3', orientation: 'black' },
  terms: [
    { term: 'Closed Sicilian', meaning: 'A White set-up with Nc3, g3, Bg2 and d3. The d-pawn stays back, so the center stays closed.' },
    { term: 'Fianchetto', meaning: 'Putting a bishop on g2, b2, g7 or b7, on a long diagonal, after moving the pawn in front of it.' },
    { term: 'Transposition', meaning: 'Reaching the same position by a different order of moves.' },
    { term: 'Outpost', meaning: 'A square in or near enemy territory that no enemy pawn can attack, often a great home for a knight.' }
  ]
})
