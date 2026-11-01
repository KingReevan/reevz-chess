import { defineModule } from '../../../types'
import { AVERBAKH, KID } from '../lines'

/** kid-5bg5: 5.Bg5 h6 6.Bh4 c5 7.d5 Qa5 8.Bd3 */
const ACCEL = `${KID} Bg5 h6 Bh4 c5 d5 Qa5 Bd3`
/** Position after 7...Qa5: the c3-knight is pinned */
const QA5 = `${KID} Bg5 h6 Bh4 c5 d5 Qa5`
/** A natural developing move that drops e4 (engine-checked) */
const MISTAKE = `${QA5} Nf3 Nxe4`

export default defineModule({
  id: '8.8',
  title: '5.Bg5: the Accelerated Averbakh',
  minutes: 10,
  level: 2,
  goals: [
    'Recognize 5.Bg5 and how it differs from the Averbakh',
    'Answer the early bishop with ...h6 and ...c5',
    'See how ...Qa5 pins the c3-knight and puts e4 in danger'
  ],
  intro:
    "Some White players bring the dark-squared bishop to g5 straight away, on move 5, before Black has even castled. It is a faster version of the Averbakh from Module 7.8. Black's answer uses the fact that this bishop has left c1: the queen can jump to a5 and pin the c3-knight.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main line: ...h6, ...c5 and ...Qa5',
      intro: 'Watch the diagonal from a5 to e1. It is the key to the whole line.',
      moves: ACCEL,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'Before castling',
          text: "4...d6. Black has not castled yet. White uses this moment to bring the bishop out.",
          marks: ['e8']
        },
        9: {
          title: 'The Accelerated Averbakh',
          text: '5.Bg5. The same bishop move as in the Averbakh, but a move earlier, before Be2 and before Black castles. The bishop eyes the f6-knight.',
          arrows: [['g5', 'f6', 'red']]
        },
        10: {
          title: 'Ask the bishop',
          text: '5...h6. Black asks the bishop a question at once: stay on the h4–d8 diagonal, or step back?',
          arrows: [['h6', 'g5', 'red']]
        },
        11: {
          title: 'The bishop stays active',
          text: '6.Bh4. The bishop keeps watching f6. But it has left the queenside, so it can no longer drop back to d2 to block a pin on the a5–e1 diagonal.',
          marks: ['d2']
        },
        12: {
          title: 'Hit d4 from the side',
          text: "6...c5. Black strikes at d4 with the c-pawn. It also opens the path d8–a5 for Black's queen.",
          arrows: [['c5', 'd4', 'red'], ['d8', 'a5', 'blue']]
        },
        13: {
          title: 'White gains space',
          text: '7.d5. White pushes past and keeps the center closed.',
          marks: ['d5']
        },
        14: {
          title: 'The pin',
          text: "7...Qa5. The queen pins the c3-knight to White's king on e1. That knight was the only guard of e4, so now ...Nxe4 is a threat.",
          arrows: [['a5', 'e1', 'red'], ['f6', 'e4', 'red']],
          marks: ['c3', 'e4']
        },
        15: {
          title: 'A second guard',
          text: '8.Bd3. The bishop develops and guards e4 a second time. But the ...Nxe4 tricks are not over: the engine\'s top reply is still 8...Nxe4, and Black is slightly better. 8.f3 and 8.Qd2 are a little more accurate.',
          arrows: [['d3', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The typical mistake: 8.Nf3?',
      intro: 'Same position after 7...Qa5. What if White simply develops the knight?',
      moves: MISTAKE,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'White pushes d5',
          text: '7.d5. Black is about to pin the c3-knight.',
          marks: ['c3']
        },
        14: {
          title: 'The pin again',
          text: "7...Qa5. The c3-knight can't move, because it would expose White's king. And it is the only guard of e4.",
          arrows: [['a5', 'e1', 'red']],
          marks: ['e4']
        },
        15: {
          title: 'A natural mistake',
          text: '8.Nf3. A normal developing move, but it does nothing for e4.',
          marks: ['e4'],
          ann: '?'
        },
        16: {
          title: 'The pawn falls',
          text: "8...Nxe4. Black grabs the pawn. The c3-knight can't take back, because it is pinned. Black also threatens ...Nxc3, and White is in serious trouble.",
          arrows: [['e4', 'c3', 'red'], ['a5', 'c3', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Compare: the Averbakh move order',
      intro: 'In the Averbakh, White plays Be2 first and Black has time to castle.',
      moves: AVERBAKH,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'Same starting point',
          text: '4...d6. The normal King\'s Indian position again.',
          marks: ['d6']
        },
        9: {
          title: 'Bishop to e2 first',
          text: '5.Be2. In the Averbakh, White develops the king\'s bishop first.',
          arrows: [['f1', 'e2', 'blue']]
        },
        10: {
          title: 'Black castles',
          text: '5...O-O. Black has time to castle.',
          marks: ['g8']
        },
        11: {
          title: 'Now Bg5',
          text: '6.Bg5. This is the Averbakh of Module 7.8. Against both move orders, Black uses the same tools: ...h6 to question the bishop and ...c5 to hit d4.',
          arrows: [['g5', 'f6', 'red']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'When the bishop leaves c1, look at a5',
      body:
        "From c1, White's dark-squared bishop can drop to d2 and block the a5–e1 diagonal. Once it goes to g5 or h4, that defense is gone, and a black queen on a5 can pin a knight on c3 to the king. Check whether that knight is guarding something important, such as e4."
    }
  ],
  takeaway:
    "Against 5.Bg5, Black plays ...h6 and ...c5, and after 7.d5 the queen comes to a5 to pin the c3-knight, the only guard of e4. White has to look after e4: 8.f3 guards it, 8.Qd2 breaks the pin to the king, and 8.Bd3 adds a second guard.",
  lookAhead:
    'Module 8.9 shows the quietest set-ups of all: 5.e3 and the London System.',
  drills: [
    {
      title: 'Meet 5.Bg5 as Black',
      prompt: "You're Black. White has played the early 5.Bg5. Question the bishop, hit d4 from the side, then pin the c3-knight.",
      moves: QA5,
      start: 8,
      side: 'black',
      hints: ['First a pawn move that attacks the bishop.', 'Then the c-pawn, and after d5 the queen goes to the edge of the board.'],
      success: '5...h6, 6...c5 and 7...Qa5. The c3-knight is pinned, and e4 is under attack.'
    },
    {
      title: 'Guard e4 with a pawn',
      prompt: "You're White. Black is about to pin your c3-knight, which guards e4. After the pin, guard e4 with a pawn.",
      moves: `${QA5} f3`,
      start: 13,
      side: 'white',
      hints: ['Which pawn can protect e4?', 'The f-pawn can step to f3.'],
      success: '8.f3. Now e4 is safe, and the pin on c3 matters much less. This is the engine\'s top choice. 8.Qd2 is almost as good, and 8.Bd3 still allows ...Nxe4 tricks.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 7...Qa5, why is the c3-knight pinned?',
      moves: QA5,
      orientation: 'white',
      choices: [
        { text: "The queen on a5 and White's king on e1 are on one diagonal, with the knight between them", correct: true, why: "Right. If the knight moved, the queen would attack the king, so the knight can't move at all." },
        { text: 'The g7-bishop attacks it', why: "The g7-bishop's diagonal is blocked by Black's own knight on f6." },
        { text: 'The c5-pawn attacks it', why: 'A pawn on c5 attacks b4 and d4, not c3.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move after 7...Qa5. Which move simply loses material?',
      moves: QA5,
      orientation: 'white',
      choices: [
        { text: '8.Nf3', correct: true, why: 'Yes. It ignores e4, and 8...Nxe4 wins the pawn because the c3-knight is pinned.' },
        { text: '8.f3', why: 'This guards e4 with a pawn. It is a perfectly good move.' },
        { text: '8.Qd2', why: 'The queen steps between the knight and the king, so the knight is no longer pinned to the king. A sound move.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'How is 5.Bg5 different from the Averbakh (5.Be2 O-O 6.Bg5)?',
      choices: [
        { text: 'White plays Bg5 a move earlier, before Be2 and before Black castles', correct: true, why: "Right. That's why it is called the Accelerated Averbakh." },
        { text: 'The bishop goes to g5 and then straight back to c1', why: 'No. In the main line the bishop goes to h4 after ...h6.' },
        { text: 'White castles queenside first', why: 'White has not castled at all in this line.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does ...Qa5 work so well once White\'s bishop has gone to g5 or h4?',
      choices: [
        { text: 'The bishop can no longer go to d2 to block the a5–e1 diagonal', correct: true, why: 'Exactly. With the bishop on h4, White cannot block the pin with Bd2 and must look after e4 some other way.' },
        { text: 'Because Black has already castled', why: "Black hasn't castled in this line. The point is the open diagonal to e1." },
        { text: 'Because the queen attacks the a2-pawn', why: 'The a2-pawn is guarded by the rook. The real target is the pinned c3-knight and e4.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'White has played 5.Bg5 before Black has castled. What is this line called?',
      moves: `${KID} Bg5`,
      orientation: 'black',
      choices: [
        { text: 'The Accelerated Averbakh', correct: true, why: 'Yes. It is the Averbakh bishop move, played a move earlier.' },
        { text: 'The Makogonov', why: 'The Makogonov is 5.h3.' },
        { text: 'The Sämisch', why: 'The Sämisch is 5.f3.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the main line, what does 8.Bd3 do for White?',
      moves: ACCEL,
      orientation: 'white',
      choices: [
        { text: 'It develops a piece and guards e4 a second time', correct: true, why: 'Right. The pinned c3-knight is no longer the only guard of e4.' },
        { text: 'It breaks the pin on the c3-knight', why: 'The bishop on d3 is not on the a5–e1 diagonal, so the knight is still pinned.' },
        { text: "It attacks Black's queen", why: 'A bishop on d3 does not attack a5. Its job is to guard e4.' }
      ]
    }
  ],
  key: { name: 'Accelerated Averbakh: 7...Qa5 pins c3', moves: QA5, orientation: 'black' },
  terms: [
    { term: 'Pin', meaning: 'A piece cannot move without exposing a more valuable piece behind it. If that piece is the king, the pinned piece cannot move at all.' },
    { term: 'Accelerated', meaning: 'A faster version of a known line: the same idea, played a move or two earlier.' }
  ]
})
