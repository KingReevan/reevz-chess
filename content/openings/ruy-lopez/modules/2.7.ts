import { defineModule } from '../../../types'
import { CLOSED7, CLOSED } from '../../../lines'

const ESCAPE = `${CLOSED} Na5 Bc2`
const NOAH = `${CLOSED7} d6 d4 Nxd4 Nxd4 exd4 Qxd4 c5 Qd1 c4`

export default defineModule({
  id: '2.7',
  title: "6...b5 7.Bb3: the bishop's new home",
  minutes: 11,
  level: 1,
  goals: [
    'Know what the bishop does on b3: it aims at f7 and d5',
    'See why it needs an escape square, and how c3 provides one',
    "Recognise the Noah's Ark trap: ...c5 and ...c4 can catch the bishop"
  ],
  intro:
    "After 6...b5 7.Bb3, the Spanish bishop has moved for the third time. On b3 it is a strong piece, but it is also a target. Black's pawns are close by, and Black's knight can jump to a5. This module shows what the bishop does on its new square, and how it can get trapped.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'A strong square that needs an exit',
      intro: 'Follow the bishop from b3 to c2. Notice which White move makes the retreat possible.',
      moves: ESCAPE,
      start: 13,
      orientation: 'white',
      steps: {
        13: {
          title: 'The new home',
          text: "7.Bb3. The bishop now looks down the a2–g8 diagonal at d5 and f7, the weak square next to Black's king. It also makes Black's ...d5 push harder.",
          arrows: [['b3', 'f7', 'yellow']],
          marks: ['d5']
        },
        14: {
          title: 'Black holds e5',
          text: '7...d6. Black supports e5 with a pawn and opens the c8-bishop.',
          arrows: [['d6', 'e5', 'green']]
        },
        15: {
          title: 'An exit for the bishop',
          text: '8.c3. This pawn move has several jobs (Module 2.8). One of them: the c2-square is now free, so the bishop has somewhere to go if it is attacked.',
          arrows: [['b3', 'c2', 'blue']]
        },
        16: {
          title: 'Black castles',
          text: '8...O-O. Both kings are safe.',
          marks: ['g8']
        },
        17: {
          title: 'Stopping ...Bg4',
          text: '9.h3. A useful waiting move before d4 (Module 2.8).',
          marks: ['g4']
        },
        18: {
          title: 'The knight attacks',
          text: '9...Na5. The knight jumps to the edge to hit the bishop. Without an exit, White would have to let the knight take it.',
          arrows: [['a5', 'b3', 'red']]
        },
        19: {
          title: 'Safe on c2',
          text: '10.Bc2. The bishop drops back safely onto the long b1–h7 diagonal. For now the e4-pawn blocks it, but if the center opens it will aim at Black\'s king. This is the start of the Chigorin Defense (Module 4.3).',
          arrows: [['b3', 'c2', 'green']],
          marks: ['c2']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why the bishop needs an exit',
      body:
        "On b3 the bishop is surrounded. The b5-pawn covers a4 and c4, and White's own pawns sit on a2 and c2. So if a knight or pawn attacks it, it may have nowhere to go.\n\nThat's why White usually plays **c3** before anything sharp: it frees c2. In the slower d3 lines White sometimes plays **a3** instead, which frees a2."
    },
    {
      kind: 'walkthrough',
      title: "The Noah's Ark trap",
      intro: 'Here White pushes d4 too early, before c3. Watch how two pawn moves catch the bishop.',
      moves: NOAH,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'The bishop on b3',
          text: 'The same position. Count the bishop\'s exits: a4 and c4 are covered by the b5-pawn, and a2 and c2 are blocked.',
          marks: ['a4', 'c4', 'a2', 'c2']
        },
        14: {
          title: 'Black holds e5',
          text: '7...d6. Same as before.',
          arrows: [['d6', 'e5', 'green']]
        },
        15: {
          title: 'Too early',
          text: '8.d4. White strikes in the center before playing c3. The bishop still has no exit.',
          arrows: [['d4', 'e5', 'red']],
          ann: '?!'
        },
        16: {
          title: 'Black takes',
          text: '8...Nxd4. The knight grabs the d4-pawn.',
          marks: ['d4']
        },
        17: {
          title: 'Trade knights',
          text: '9.Nxd4. White takes the knight.',
          marks: ['d4']
        },
        18: {
          title: 'Recapture',
          text: '9...exd4. Black is a pawn up for the moment. The natural way to win it back is with the queen.',
          arrows: [['d1', 'd4', 'blue']]
        },
        19: {
          title: 'The natural mistake',
          text: '10.Qxd4. The queen takes back, and material is level. But now the queen stands where a pawn can hit it.',
          marks: ['d4'],
          ann: '??'
        },
        20: {
          title: 'Hit the queen',
          text: '10...c5. The pawn attacks the queen, so it must move. Note that 11.Qd5?? loses the queen to ...Nxd5.',
          arrows: [['c5', 'd4', 'red']],
          ann: '!'
        },
        21: {
          title: 'The queen retreats',
          text: '11.Qd1. Wherever the queen goes, Black has the same follow-up.',
          arrows: [['c5', 'c4', 'blue']]
        },
        22: {
          title: 'Trapped',
          text: '11...c4. The pawn attacks the bishop, and it has no safe square: a4 and c4 are covered by the b5-pawn. White will lose material.',
          arrows: [['c4', 'b3', 'red']],
          marks: ['a4', 'c4'],
          ann: '!'
        }
      }
    },
    {
      kind: 'tip',
      title: 'Give the bishop air first',
      body:
        "Before you open the center with d4, make sure the b3-bishop has an exit. In the main line that is why White plays c3 first. As Black, keep the ...c5 and ...c4 idea in mind whenever White's queen lands on d4."
    }
  ],
  takeaway:
    "On b3 the bishop aims at f7 and d5, but the b5-pawn covers a4 and c4. White plays c3 to give it c2. If White opens the center too early, ...c5 and ...c4 can trap it: the Noah's Ark trap.",
  lookAhead:
    'Next: White\'s master plan with c3, h3 and d4, and what each of those moves does.',
  drills: [
    {
      title: "Spring the Noah's Ark trap",
      prompt: "You're Black. White has pushed 8.d4 before c3. Win a pawn, and when the queen takes back on d4, trap the bishop.",
      moves: NOAH,
      start: 15,
      side: 'black',
      hints: ['Take on d4 with the knight, then recapture with the e-pawn.', 'When the queen lands on d4, hit it with the c-pawn. Then push that pawn again to attack the bishop.'],
      success: "8...Nxd4, 9...exd4, 10...c5 and 11...c4. The bishop is trapped: that's the Noah's Ark."
    },
    {
      title: 'Give the bishop an exit',
      prompt: "You're White. Prepare an exit for your b3-bishop, stop ...Bg4, and when the knight attacks the bishop, retreat it.",
      moves: ESCAPE,
      start: 13,
      side: 'white',
      hints: ['A pawn move frees the c2-square.', 'After Black castles, play h3. When ...Na5 hits the bishop, drop it back to c2.'],
      success: '8.c3, 9.h3 and 10.Bc2. The bishop is safe and now aims at the kingside.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does the bishop on b3 aim at?',
      moves: CLOSED7,
      orientation: 'white',
      choices: [
        { text: 'd5 and f7', correct: true, why: "Right. It looks down the a2–g8 diagonal at Black's weak f7-square." },
        { text: 'The knight on c6', why: 'Not any more. It lost that diagonal when ...b5 pushed it from a4.' },
        { text: 'The pawn on e5', why: 'From b3 the bishop cannot reach e5. Its diagonal runs through c4, d5, e6 and f7.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does the bishop on b3 need White to play c3 (or a3)?',
      choices: [
        { text: 'Its other squares are covered by the b5-pawn or blocked by White\'s own pawns', correct: true, why: 'Yes. c3 frees c2, and a3 frees a2, so the bishop has an exit.' },
        { text: 'The bishop is pinned to the king', why: 'Nothing pins it. The problem is that it has no safe square to retreat to.' },
        { text: 'So that it can go back to a4', why: 'a4 is covered by the b5-pawn. The exits are c2 or a2.' }
      ]
    },
    {
      type: 'trap',
      prompt: "Black to move. White's queen has just taken on d4. How does Black win material?",
      moves: NOAH.split(' ').slice(0, 19).join(' '),
      orientation: 'black',
      choices: [
        { text: '10...c5', correct: true, why: 'Right. The queen must move, and then ...c4 traps the b3-bishop.' },
        { text: '10...c6', why: 'It covers d5 but does not attack the queen. ...c5 is needed to start the trap.' },
        { text: '10...O-O', why: 'Too slow. White plays c3 next and the bishop gets c2 as an exit.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 11...c4, why can\'t the bishop escape?',
      moves: NOAH,
      orientation: 'black',
      choices: [
        { text: "a4 and c4 are covered by the b5-pawn, and a2 and c2 are blocked by White's pawns", correct: true, why: 'Exactly. Every exit is covered or blocked.' },
        { text: 'It is pinned to the white king', why: 'Nothing pins it. It simply has no safe square.' },
        { text: "White's queen is in the way", why: 'The queen is on d1, far from the bishop. The pawns are the problem.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Which pawn move frees the c2-square for the b3-bishop?',
      choices: [
        { text: 'c2–c3', correct: true, why: 'Yes. Moving the c-pawn empties c2.' },
        { text: 'a2–a3', why: 'That frees a2, a different exit. c2 is still blocked by the c-pawn.' },
        { text: 'd2–d3', why: 'The d-pawn does not stand on c2. The c-pawn has to move.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. The queen has just retreated to d1. How does Black trap the bishop?',
      moves: NOAH.split(' ').slice(0, 21).join(' '),
      orientation: 'black',
      choices: [
        { text: '11...c4', correct: true, why: 'Right. The pawn attacks the bishop, and a4 and c4 are covered by the b5-pawn.' },
        { text: '11...Be6', why: 'It offers a bishop trade instead of trapping the bishop. Push the c-pawn.' },
        { text: '11...O-O', why: 'It gives White time for c3 or a4, and the bishop gets an exit.' }
      ]
    }
  ],
  key: { name: "Closed Ruy Lopez: 7.Bb3, the bishop's new home", moves: CLOSED7, orientation: 'white' },
  terms: [
    { term: "Noah's Ark trap", meaning: 'A trap where Black catches the b3-bishop with pawns on b5 and c4.' },
    { term: 'Trapped piece', meaning: 'A piece that is attacked and has no safe square to move to.' },
    { term: 'Chigorin Defense', meaning: '9...Na5 in the Closed Ruy Lopez: the knight hits the bishop, which retreats to c2.' }
  ]
})
