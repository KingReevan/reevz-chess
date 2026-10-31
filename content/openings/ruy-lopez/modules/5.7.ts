import { defineModule } from '../../../types'
import { CLOSED_OO } from '../../../lines'

const H3 = `${CLOSED_OO} h3 Bb7 d3`
const D4 = `${CLOSED_OO} d4 Nxd4 Nxd4 exd4 e5 Ne8`
const D3 = `${CLOSED_OO} d3 d6 c3`
const ARK = `${CLOSED_OO} d4 Nxd4 Nxd4 exd4 Qxd4 c5 Qd1 c4`

export default defineModule({
  id: '5.7',
  title: 'Anti-Marshall: 8.h3, 8.d4 and 8.d3',
  minutes: 11,
  level: 3,
  goals: [
    'Know the idea of each of the other Anti-Marshall moves',
    'Find the only safe square for the knight after 8.d4 and 10.e5',
    "Spot the Noah's Ark trap if White recaptures 10.Qxd4"
  ],
  intro:
    "8.a4 isn't White's only way to dodge the Marshall. White can also play 8.h3, 8.d4 or 8.d3. Each one avoids 8.c3, so ...d5 never comes with the usual gambit. What does each move aim for, and how should Black reply?",
  sections: [
    {
      kind: 'walkthrough',
      title: '8.h3: no pin on f3',
      intro: 'A modern favourite. White waits with c3 and first takes a square away from Black.',
      moves: H3,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'The branch point',
          text: '7.Bb3. Black castles next, hoping for 8.c3 d5.',
          arrows: [['e8', 'g8', 'blue']]
        },
        14: {
          title: 'Ready for the Marshall',
          text: '7...O-O. The d-pawn can still jump to d5.',
          arrows: [['d7', 'd5', 'blue']]
        },
        15: {
          title: 'Taking g4 away',
          text: "8.h3. The pawn covers g4, so Black's bishop can never go there to pin the f3-knight to the queen. White keeps c3 and d4 for later.",
          arrows: [['h3', 'g4', 'green']],
          marks: ['g4']
        },
        16: {
          title: 'The long diagonal',
          text: '8...Bb7. The bishop develops and connects the queen to the a8-rook, which is useful if White later plays a4.',
          arrows: [['d8', 'a8', 'green']]
        },
        17: {
          title: 'A slow game',
          text: '9.d3. White guards e4 with a pawn. The center stays closed and both sides manoeuvre.',
          arrows: [['d3', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '8.d4: strike first',
      intro: 'White opens the center at once. Black grabs a pawn, but White has a plan to get it back.',
      moves: D4,
      start: 14,
      orientation: 'black',
      steps: {
        14: {
          title: 'Castled',
          text: '7...O-O. Black is ready for the Marshall.',
          arrows: [['d7', 'd5', 'blue']]
        },
        15: {
          title: 'The center opens',
          text: '8.d4. White hits e5 straight away instead of preparing with c3.',
          arrows: [['d4', 'e5', 'red']]
        },
        16: {
          title: 'Taking the pawn',
          text: '8...Nxd4. The knight takes the d4-pawn. White recaptures and the knights come off.',
          arrows: [['c6', 'd4', 'green']]
        },
        17: {
          title: 'Knights traded',
          text: '9.Nxd4. White takes back.',
          arrows: [['e5', 'd4', 'green']]
        },
        18: {
          title: 'A pawn up, for now',
          text: "9...exd4. Black is a pawn up. Tempting for White is 10.Qxd4?, but that runs into the Noah's Ark trap: ...c5 and ...c4 catch the b3-bishop.",
          arrows: [['d1', 'd4', 'blue']],
          marks: ['b3']
        },
        19: {
          title: 'Kicking the knight',
          text: '10.e5. The pawn attacks the f6-knight. It has five squares, but only one is safe.',
          arrows: [['e5', 'f6', 'red']]
        },
        20: {
          title: 'The only safe square',
          text: '10...Ne8. On d5 the b3-bishop takes it, on g4 or h5 the queen does, and on e4 the rook does. White usually wins the d4-pawn back next, with c3 or Qxd4.',
          arrows: [['b3', 'd5', 'red'], ['d1', 'g4', 'red'], ['e1', 'e4', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '8.d3: the quiet one',
      intro: 'The calmest Anti-Marshall. It leads to a position you already know.',
      moves: D3,
      start: 14,
      orientation: 'black',
      steps: {
        14: {
          title: 'Castled again',
          text: '7...O-O. The usual Marshall setup.',
          arrows: [['d7', 'd5', 'blue']]
        },
        15: {
          title: 'Guarding e4 now',
          text: "8.d3. The pawn guards e4 right away. White doesn't need c3 and d4 to hold the center.",
          arrows: [['d3', 'e4', 'green']]
        },
        16: {
          title: 'Guarding e5 too',
          text: '8...d6. Black answers in kind and holds e5.',
          arrows: [['d6', 'e5', 'green']]
        },
        17: {
          title: 'A familiar position',
          text: '9.c3. The bishop gets c2 as a retreat. This is exactly the Pilnik position from Module 4.9 (7...d6 8.c3 O-O 9.d3), reached in a different order.',
          arrows: [['b3', 'c2', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Comparing the dodges',
      body:
        "**8.a4** hits b5 at once (Module 5.6).\n\n**8.h3** takes g4 from Black's bishop and keeps White's options open. Main reply: 8...Bb7.\n\n**8.d4** opens the center. 8...Nxd4 9.Nxd4 exd4 10.e5 Ne8, and White wins the pawn back later. Watch for the trap if White recaptures 10.Qxd4?.\n\n**8.d3** guards e4 and heads for a slow Closed position. 8...d6 9.c3 transposes to the Pilnik line.\n\nAll four have one thing in common: White does not play 8.c3, so Black never gets the Marshall's gambit position."
    },
    {
      kind: 'tip',
      title: 'The Noah\'s Ark pattern',
      body:
        "Whenever White's bishop sits on b3, Black's pawns are on a6 and b5, and the c-pawn can reach c4, check the trap: ...c5 and ...c4 leave the bishop with no safe square. The a4-square is covered by the b5-pawn, and a2 and c2 are blocked by White's own pawns."
    }
  ],
  takeaway:
    "8.h3, 8.d4 and 8.d3 all avoid 8.c3, so there's no Marshall. Meet 8.h3 with ...Bb7, 8.d4 with ...Nxd4, ...exd4 and ...Ne8, and 8.d3 with ...d6. If White grabs back with 10.Qxd4?, ...c5 and ...c4 trap the bishop.",
  lookAhead:
    "That completes the Marshall chapter. Chapter 6 turns to a different way to fight for the center: the Open Defense, 5...Nxe4.",
  drills: [
    {
      title: "Spring the Noah's Ark",
      prompt: "You're Black. White has just recaptured 10.Qxd4?. Trap the bishop on b3.",
      moves: ARK,
      start: 19,
      side: 'black',
      hints: ['First, kick the queen with a pawn that also heads for c4.', 'After the queen moves, push the same pawn again to attack the bishop.'],
      success: '10...c5! and 11...c4. The bishop can only take on c4 or go to a4, and either way Black wins it, for a pawn at most.'
    },
    {
      title: 'Meet 8.d4',
      prompt: "You're Black. White has opened the center with 8.d4. Take the pawn and save your knight.",
      moves: D4,
      start: 15,
      side: 'black',
      hints: ['The d4-pawn can be taken by a knight.', 'After 10.e5, check every knight move: which square is not attacked?'],
      success: '8...Nxd4, 9...exd4 and 10...Ne8. Every other knight square was covered by a white piece.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 8.h3 stop?',
      moves: `${CLOSED_OO} h3`,
      orientation: 'black',
      choices: [
        { text: '...Bg4, pinning the f3-knight to the queen', correct: true, why: 'Right. The h3-pawn covers g4, so the bishop goes to b7 instead.' },
        { text: '...d5, the Marshall push', why: "The h3-pawn doesn't touch d5. Its job is to cover g4." },
        { text: '...Na5, chasing the bishop', why: 'The h-pawn has nothing to do with a5. It covers g4.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White has just played 10.e5. Where should the f6-knight go?',
      moves: `${CLOSED_OO} d4 Nxd4 Nxd4 exd4 e5`,
      orientation: 'black',
      choices: [
        { text: '10...Ne8', correct: true, why: 'Yes. It is the only square no white piece attacks.' },
        { text: '10...Nd5', why: 'The b3-bishop takes it, and nothing defends d5.' },
        { text: '10...Ng4', why: "White's queen on d1 takes it along the diagonal." },
        { text: '10...Ne4', why: "The e1-rook takes it. White's e-pawn has moved on to e5, so the rook sees all the way to e4." }
      ]
    },
    {
      type: 'name',
      prompt: 'Which Anti-Marshall led to this quiet position?',
      moves: D3,
      orientation: 'black',
      choices: [
        { text: '8.d3', correct: true, why: 'Right. 8.d3 d6 9.c3 reaches the Pilnik position from Chapter 4.' },
        { text: '8.h3', why: "White's h-pawn is still on h2. Look at the d-pawn instead." },
        { text: '8.a4', why: "White's a-pawn hasn't moved. This came from 8.d3 d6 9.c3." }
      ]
    },
    {
      type: 'order',
      prompt: 'Black has played 7...O-O. After which White 8th move can Black play the Marshall Attack?',
      choices: [
        { text: '8.c3', correct: true, why: 'Yes. 8.c3 d5 is the Marshall. Every other 8th move here is an Anti-Marshall.' },
        { text: '8.h3', why: "That's an Anti-Marshall. White keeps c3 in reserve, and the main reply is 8...Bb7." },
        { text: '8.d3', why: "That's an Anti-Marshall. e4 is already guarded and the game turns slow." }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'White has just played 10.Qxd4. What is Black\'s strongest move?',
      moves: `${CLOSED_OO} d4 Nxd4 Nxd4 exd4 Qxd4`,
      orientation: 'black',
      choices: [
        { text: '10...c5', correct: true, why: "Yes. The queen must move, then ...c4 traps the b3-bishop: Noah's Ark." },
        { text: '10...d6', why: 'Solid, but it misses the trap. ...c5 and ...c4 win the bishop.' },
        { text: '10...Bb7', why: 'It develops, but it misses ...c5 with a gain of time and ...c4 to trap the bishop.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'How does 8.d3 avoid the Marshall?',
      choices: [
        { text: 'White skips 8.c3 and guards e4 with a pawn, aiming for a slow game', correct: true, why: 'Right. It leads to the Pilnik position after 8...d6 9.c3.' },
        { text: 'It threatens d4–d5, trapping the c6-knight', why: "The pawn on d3 doesn't threaten that. Its point is to guard e4 quietly." },
        { text: 'It wins the e5-pawn', why: 'The e5-pawn is safe. 8.d3 is a calm, defensive move.' }
      ]
    }
  ],
  key: { name: 'Anti-Marshall: 8.h3', moves: `${CLOSED_OO} h3`, orientation: 'black' },
  terms: [
    { term: 'Pin', meaning: 'A piece cannot move off a line without exposing a more valuable piece behind it.' },
    { term: 'Trapped piece', meaning: 'A piece that is attacked and has no safe square to go to.' },
    { term: 'Transposition', meaning: 'Reaching the same position by a different order of moves.' }
  ]
})
