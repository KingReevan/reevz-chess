import { defineModule } from '../../../types'
import { MORPHY } from '../../../lines'

/** open: 6.d4 b5 7.Bb3 d5 8.dxe5 */
const HOLD = `${MORPHY} Nxe4 d4 b5 Bb3 d5 dxe5`
/** The wrong order: 6...d5? before ...b5 */
const EARLY = `${MORPHY} Nxe4 d4 d5 Nxe5 Bd7 Nxd7 Qxd7`

export default defineModule({
  id: '6.2',
  title: '6.d4 b5 7.Bb3 d5: holding on',
  minutes: 10,
  level: 2,
  goals: [
    'Learn the moves 6...b5 and 7...d5, and the job of each one',
    'See why ...b5 must come before ...d5',
    'Understand why giving the pawn back with 8.dxe5 is fine for Black'
  ],
  intro:
    "After 5...Nxe4 6.d4, Black's knight sits on e4 with no pawn to lean on, and White is opening the center. Black needs to anchor the knight without walking into a pin. Two pawn moves do it, but only in the right order.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Anchoring the knight',
      intro: "You're Black. Each pawn move has a clear job. Try to name it before you press Next.",
      moves: HOLD,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The knight needs support',
          text: "6.d4. White attacks e5 and opens the center. Black's knight on e4 has no pawn behind it, and Black's king is still on e8.",
          arrows: [['d4', 'e5', 'red']],
          marks: ['e4']
        },
        12: {
          title: 'Kick the bishop first',
          text: '6...b5. The pawn attacks the a4-bishop. That bishop lines up with c6 and e8. Black wants it off that diagonal before moving the d-pawn.',
          arrows: [['b5', 'a4', 'red'], ['a4', 'e8', 'yellow']]
        },
        13: {
          title: 'The bishop retreats',
          text: "7.Bb3. The bishop finds a new diagonal, aiming at d5 and f7. The c6-knight is no longer under any pressure.",
          arrows: [['b3', 'f7', 'blue']]
        },
        14: {
          title: 'The anchor',
          text: '7...d5. Now the pawn guards the e4-knight. It also blocks the b3-bishop\'s diagonal and frees Black\'s light-squared bishop.',
          arrows: [['d5', 'e4', 'green'], ['c8', 'g4', 'blue']],
          ann: '!'
        },
        15: {
          title: 'The pawn comes back',
          text: '8.dxe5. White takes on e5, and material is level again. Black can\'t take back: the f3-knight guards e5. Black doesn\'t mind. The knight on e4 is rock-solid, and every Black piece can develop.',
          arrows: [['f3', 'e5', 'green']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why giving the pawn back is fine',
      body:
        "Count the material after 8.dxe5: it is level. Now count the active pieces. Black's knight stands on e4, supported by the d5-pawn. The c8-bishop has an open diagonal. The f8-bishop can go to c5 or e7, and Black can castle in two moves.\n\nWhite has something too: the **e5-pawn**. It takes the f6 and d6 squares away from Black's pieces. That is the trade in the Open Defense: Black gets free, active pieces, and White gets a cramping pawn on e5. Module 6.3 looks at this position closely."
    },
    {
      kind: 'walkthrough',
      title: 'The wrong order: 6...d5?',
      intro: 'What if Black plays ...d5 at once, without ...b5? Watch the c6-knight.',
      moves: EARLY,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'Same position',
          text: 'White has just played 6.d4. Right now the d7-pawn stands between the a4-bishop and Black\'s king.',
          arrows: [['a4', 'd7', 'yellow']],
          marks: ['d7']
        },
        12: {
          title: 'Opening the diagonal',
          text: '6...d5. It guards the knight, but the d7-pawn has left. Now the a4-bishop pins the c6-knight to the king.',
          arrows: [['a4', 'e8', 'red']],
          marks: ['c6'],
          ann: '?'
        },
        13: {
          title: 'White grabs e5',
          text: "7.Nxe5. The pinned knight can't take back. Worse, White threatens 8.Nxc6 bxc6 9.Bxc6+, hitting the king and the a8-rook at once.",
          arrows: [['e5', 'c6', 'red'], ['a4', 'c6', 'red']],
          marks: ['c6', 'a8']
        },
        14: {
          title: 'Black blocks the pin',
          text: '7...Bd7. The bishop steps between c6 and e8, so the knight is no longer pinned to the king. But Black has spent a move on defense.',
          arrows: [['d7', 'c6', 'green']]
        },
        15: {
          title: 'White trades it off',
          text: '8.Nxd7. White takes the bishop that was holding the pin.',
          arrows: [['e5', 'd7', 'blue']]
        },
        16: {
          title: 'Pawn back, pin still on',
          text: "8...Qxd7. Material is level, but White has the two bishops and the c6-knight is still pinned, now to the queen. Compare that with the main line, where ...b5 sent the bishop away first.",
          arrows: [['a4', 'd7', 'red']],
          marks: ['c6']
        }
      }
    },
    {
      kind: 'warning',
      title: "Don't chase the e5-pawn",
      body:
        "After 8.dxe5 it is tempting to win the pawn straight back with 8...Nxe5. Don't. The f3-knight guards e5, so 9.Nxe5 leaves Black a knight down for a pawn. Let the pawn go and develop instead."
    }
  ],
  takeaway:
    "6...b5 sends the bishop away from the a4-e8 diagonal, then 7...d5 anchors the knight on e4. After 8.dxe5 material is level, and Black's pieces are free and active.",
  lookAhead:
    "Next: 8...Be6 and the Open tabiya. What does the e5-pawn do for White, and which squares does Black fight for?",
  drills: [
    {
      title: 'Hold the knight',
      prompt: "You're Black after 6.d4. Support your e4-knight, in the right order.",
      moves: `${MORPHY} Nxe4 d4 b5 Bb3 d5`,
      start: 11,
      side: 'black',
      hints: ['First deal with the bishop on a4. It is lined up with your king.', 'Once the bishop has gone, which pawn can guard e4?'],
      success: '6...b5 and 7...d5. The bishop is off the a4-e8 diagonal, and the knight on e4 is anchored.'
    },
    {
      title: 'Punish the wrong order',
      prompt: "You're White. Black played 6...d5? without ...b5 first. Grab a pawn while the c6-knight is pinned.",
      moves: `${MORPHY} Nxe4 d4 d5 Nxe5`,
      start: 12,
      side: 'white',
      hints: ['The c6-knight is the only guard of e5, and it is pinned.', 'Your f3-knight can take on e5.'],
      success: "7.Nxe5. The pinned knight can't take back, and you threaten Nxc6 followed by Bxc6+."
    }
  ],
  quiz: [
    {
      type: 'order',
      prompt: 'Why does Black play 6...b5 before 7...d5?',
      choices: [
        { text: 'Once the d7-pawn moves, the a4-bishop would pin the c6-knight to the king', correct: true, why: 'Right. ...b5 sends the bishop away first, so ...d5 comes without a pin.' },
        { text: 'To win the a4-bishop', why: 'The bishop simply retreats to b3. The point is to get it off the a4-e8 diagonal.' },
        { text: '...b5 guards the e4-knight', why: "A pawn on b5 doesn't reach e4. The d5-pawn is what guards the knight." }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 7...d5 do? Pick the best answer.',
      moves: `${MORPHY} Nxe4 d4 b5 Bb3 d5`,
      orientation: 'black',
      choices: [
        { text: "Guards the e4-knight and blocks the b3-bishop's diagonal", correct: true, why: 'Yes. One pawn move anchors the knight and blunts the bishop. It also frees the c8-bishop.' },
        { text: 'Attacks the b3-bishop', why: 'A pawn on d5 attacks c4 and e4. It blocks the bishop but does not attack it.' },
        { text: 'Defends the e5-pawn', why: 'A pawn on d5 does not guard e5. White wins that pawn back with 8.dxe5.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move after 8.dxe5. Can Black win the pawn back with 8...Nxe5?',
      moves: HOLD,
      orientation: 'black',
      choices: [
        { text: 'No: 9.Nxe5 wins a knight for a pawn', correct: true, why: 'Right. The f3-knight guards e5. Black should develop with 8...Be6 instead.' },
        { text: 'Yes: e5 is only attacked once', why: 'It is attacked once, but also guarded once, by the f3-knight. Black would lose the knight.' },
        { text: 'Yes, and it wins a pawn', why: 'After 9.Nxe5 Black has lost a knight for one pawn.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move after 6...b5 7.Bb3. How does Black support the e4-knight?',
      moves: `${MORPHY} Nxe4 d4 b5 Bb3`,
      orientation: 'black',
      choices: [
        { text: '7...d5', correct: true, why: 'The pawn guards e4, blocks the b3-bishop and frees the c8-bishop.' },
        { text: '7...f5', why: "It guards e4 too, but it leaves the b3-bishop's diagonal open, so 8.Bd5 hits the c6-knight. ...d5 guards e4 and blocks the bishop." },
        { text: '7...Nc5', why: 'The d4-pawn attacks c5, so 8.dxc5 wins a knight for a pawn. Keep it on e4 and support it with 7...d5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6.d4 b5 7.Bb3 d5 8.dxe5, what does each side have?',
      choices: [
        { text: 'Material is level. Black has active pieces, White has the cramping e5-pawn', correct: true, why: 'Yes. That is the basic trade in the Open Defense.' },
        { text: 'Black is still a pawn up', why: 'No. 8.dxe5 won the pawn back. Material is level.' },
        { text: 'White is a piece up', why: 'Nothing has been lost. Each side has given one center pawn.' }
      ]
    }
  ],
  key: { name: 'Open Defense: 6.d4 b5 7.Bb3 d5', moves: `${MORPHY} Nxe4 d4 b5 Bb3 d5`, orientation: 'black' },
  terms: [
    { term: 'Pin', meaning: 'A piece cannot move off a line without exposing a more valuable piece behind it.' },
    { term: 'Anchor', meaning: 'A pawn that supports a piece on an advanced square, so it cannot easily be chased away.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one. Strong in open positions.' }
  ]
})
