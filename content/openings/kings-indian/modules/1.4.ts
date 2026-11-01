import { defineModule } from '../../../types'
import { KID, CLASSICAL } from '../lines'

/** kid-5nf3-oo */
const CASTLED = `${KID} Nf3 O-O`
/** exchange-7dxe5: after castling, a rook takes back on d8 */
const ROOK_TAKES = `${CLASSICAL} dxe5 dxe5 Qxd8 Rxd8`
/** Illustration (engine-checked): ...e5 before castling, and the king has to take on d8 */
const TOO_EARLY = `${KID} Nf3 e5 dxe5 dxe5 Qxd8+ Kxd8 Nxe5`
/** kid-4-oo-5e5: castling before ...d6 lets White kick the knight */
const KICKED = 'd4 Nf6 c4 g6 Nc3 Bg7 e4 O-O e5 Ne8 f4 d6 Nf3'

export default defineModule({
  id: '1.4',
  title: 'Castle first, fight later',
  minutes: 10,
  level: 1,
  goals: [
    'Learn the order of the set-up: ...d6, then ...O-O, then ...e5',
    'See what goes wrong when ...e5 comes before castling',
    'Know why 4...d6 usually comes before 4...O-O'
  ],
  intro:
    "Black's set-up is only a few moves, but the order matters. Castle too late and a queen trade can trap your king in the middle. Castle too early and White's e-pawn can chase your knight. This module explains the safe order and what happens if you get it wrong.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The safe order',
      intro: 'Black castles first and only then strikes with ...e5. Watch what happens when White trades queens.',
      moves: ROOK_TAKES,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The set-up so far',
          text: 'After 4...d6 the bishop is on g7 and e5 is guarded. One thing is still missing: the king is on e8.',
          marks: ['e8']
        },
        9: {
          title: 'White develops',
          text: '5.Nf3. A natural move. White gets ready to castle too.',
          arrows: [['g1', 'f3', 'blue']]
        },
        10: {
          title: 'Castle first',
          text: '5...O-O. The king goes to g8, behind the g7-bishop. The rook comes to f8, where it is connected with the queen.',
          marks: ['g8', 'f8']
        },
        11: {
          title: 'White keeps developing',
          text: '6.Be2. White prepares to castle on the next move.',
          arrows: [['e1', 'g1', 'blue']]
        },
        12: {
          title: 'Now the fight starts',
          text: "6...e5. With the king safe, Black strikes at d4. This is the Classical Variation, the main road of the course.",
          arrows: [['e5', 'd4', 'red']]
        },
        13: {
          title: 'White takes on e5',
          text: '7.dxe5. White takes on e5 and hopes to trade queens.',
          marks: ['e5']
        },
        14: {
          title: 'Black takes back',
          text: '7...dxe5. The queens now face each other on the open d-file.',
          arrows: [['d1', 'd8', 'yellow']]
        },
        15: {
          title: 'The queen trade',
          text: '8.Qxd8. White takes the queen. No check: Black\'s king is safely on g8.',
          marks: ['d8']
        },
        16: {
          title: 'A rook takes back',
          text: "8...Rxd8. The rook recaptures, and the king stays tucked away. Black is fine. (Module 1.6 shows why 8.Nxe5 doesn't win a pawn here either.)",
          arrows: [['f8', 'd8', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Strike too early, and the king gets stuck',
      intro: 'Now Black plays ...e5 before castling. Compare it with the line you just saw.',
      moves: TOO_EARLY,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'The same position',
          text: '5.Nf3. Black would normally castle here. Instead, Black strikes at once.',
          marks: ['e8']
        },
        10: {
          title: 'Too early',
          text: '5...e5. The pawn hits d4, but the king is still on e8, right next to the queen on d8.',
          arrows: [['e5', 'd4', 'red']],
          ann: '?'
        },
        11: {
          title: 'White takes',
          text: '6.dxe5. White takes. Once Black takes back, the d-file will be open.',
          marks: ['e5']
        },
        12: {
          title: 'The queens face off',
          text: '6...dxe5. Black takes back, and now the queens look at each other down the d-file.',
          arrows: [['d1', 'd8', 'yellow']]
        },
        13: {
          title: 'Trade with check',
          text: '7.Qxd8+. This time the queen trade comes with check, because the king is on e8.',
          arrows: [['d8', 'e8', 'red']],
          ann: '!'
        },
        14: {
          title: 'The king must take',
          text: '7...Kxd8. Only the king can take back. It is stuck in the middle and can never castle now.',
          marks: ['d8']
        },
        15: {
          title: 'A pawn falls',
          text: '8.Nxe5. With the queens gone, nothing defends e5 in time. White wins a pawn, and Black\'s king is still in the center.',
          arrows: [['f3', 'e5', 'red']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why ...d6 comes before ...O-O',
      body:
        "So castling should come before ...e5. But why not castle even earlier, on move 4? Because White's e-pawn is one step away from e5, where it would attack the f6-knight.\n\nWith a pawn on d6, Black can answer e4–e5 by taking the pawn. Without it, the knight has to run. That's why the usual order is **...Nf6, ...g6, ...Bg7, ...d6, ...O-O**, and only then **...e5** or **...c5**.\n\nFor White, the lesson is the mirror image: if Black ever plays ...e5 with the king still on e8, think about dxe5 and a queen trade with check."
    },
    {
      kind: 'walkthrough',
      title: 'Castling before ...d6: the knight is kicked',
      intro: 'Here Black castles on move 4. It is legal and playable, but watch the f6-knight.',
      moves: KICKED,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'The usual position',
          text: '4.e4. Normally Black plays 4...d6 now.',
          marks: ['e4']
        },
        8: {
          title: 'Castling at once',
          text: '4...O-O. The king is safe, but nothing guards e5 yet.',
          marks: ['e5']
        },
        9: {
          title: 'The pawn push',
          text: '5.e5. The pawn attacks the f6-knight, and no black pawn can take it.',
          arrows: [['e5', 'f6', 'red']]
        },
        10: {
          title: 'The only square',
          text: '5...Ne8. This is the only safe square. On h5 the knight would be trapped by g4, and on g4 the queen would take it. On e8 it is back home and does very little.',
          arrows: [['f6', 'e8', 'green']]
        },
        11: {
          title: 'Even more space',
          text: '6.f4. White supports e5 with a second pawn. White now has four pawns in and around the center.',
          marks: ['c4', 'd4', 'e5', 'f4']
        },
        12: {
          title: 'Black hits back',
          text: '6...d6. Black finally attacks e5. The engine says Black is fine, but Black has spent a move retreating to get here.',
          arrows: [['d6', 'e5', 'red']]
        },
        13: {
          title: 'A huge center',
          text: '7.Nf3. Module 7.7 shows a famous Fischer win that began 4...O-O 5.e5 Ne8 6.f4. For now, the simple advice is to play 4...d6 first.',
          arrows: [['f3', 'e5', 'green']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'The safe order in one line',
      body:
        'Knight, g-pawn, bishop, d-pawn, castle. Then strike. If you keep this order, your king is safe before the center opens, and e4–e5 never catches your knight.'
    }
  ],
  takeaway:
    "Play ...d6 before castling, so e4–e5 can't kick your knight, and castle before ...e5, so a queen trade on d8 doesn't trap your king in the center.",
  lookAhead:
    "Next, Module 1.5 looks at White's big center from both sides: what it gives White, and how it can become a target.",
  drills: [
    {
      title: 'Castle, then strike',
      prompt: "You're Black. White has just played 5.Nf3. Finish your set-up in the safe order, then hit the center.",
      moves: CLASSICAL,
      start: 9,
      side: 'black',
      hints: ['Is your king safe yet?', 'Castle with 5...O-O, then strike at d4 with 6...e5.'],
      success: '5...O-O and 6...e5: the king is safe before the center opens. That is the Classical Variation.'
    },
    {
      title: 'Punish the early ...e5',
      prompt: "You're White. Black played 5...e5 before castling. Open the d-file, trade queens with check, and win a pawn.",
      moves: TOO_EARLY,
      start: 10,
      side: 'white',
      hints: ['First take on e5 with your d-pawn.', 'After 6...dxe5, the queen trade on d8 is check. Then the knight on f3 can take e5.'],
      success: '6.dxe5, 7.Qxd8+ and 8.Nxe5. A pawn up, and Black\'s king can never castle.'
    }
  ],
  quiz: [
    {
      type: 'order',
      prompt: "After White's 4.e4, which order is the safe way to finish Black's set-up?",
      moves: 'd4 Nf6 c4 g6 Nc3 Bg7 e4',
      orientation: 'black',
      choices: [
        { text: '...d6, then ...O-O, then ...e5', correct: true, why: 'Yes. d6 guards e5, castling makes the king safe, and only then does Black strike.' },
        { text: '...d6, then ...e5, then ...O-O', why: '...e5 before castling allows dxe5 dxe5 and a queen trade with check. The king has to take on d8 and can never castle.' },
        { text: '...O-O, then ...d6, then ...e5', why: 'Castling first is playable, but it allows 5.e5, and the knight must retreat to e8.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. What is the best way to continue?',
      moves: `${KID} Nf3`,
      orientation: 'black',
      choices: [
        { text: '5...O-O', correct: true, why: 'Right. Get the king safe first. ...e5 comes next move.' },
        { text: '5...e5', why: 'Too early. 6.dxe5 dxe5 7.Qxd8+ Kxd8 8.Nxe5 wins a pawn, and Black can no longer castle.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 4...O-O 5.e5, where must the f6-knight go?',
      moves: 'd4 Nf6 c4 g6 Nc3 Bg7 e4 O-O e5',
      orientation: 'black',
      choices: [
        { text: 'e8', correct: true, why: 'Yes. It is the only safe square, though the knight is passive there.' },
        { text: 'h5', why: 'After 6.g4 the knight on h5 is trapped and lost.' },
        { text: 'g4', why: "The queen on d1 can take it: the diagonal d1–g4 is open because White's e-pawn has moved." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does Black castle before playing ...e5?',
      choices: [
        { text: 'So that if the queens are traded on d8, a rook takes back and the king stays safe', correct: true, why: 'Exactly. With the king on e8, the trade comes with check and the king has to take.' },
        { text: 'Because ...e5 is illegal before castling', why: '...e5 is legal at any time. It is just risky before the king is safe.' },
        { text: 'So the g7-bishop can see e5', why: 'Castling moves the king and rook, not the bishop. The reason is the queen trade on d8.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'White to move. Black played ...e5 before castling and had to take back on d8 with the king. What should White play?',
      moves: `${KID} Nf3 e5 dxe5 dxe5 Qxd8+ Kxd8`,
      orientation: 'white',
      choices: [
        { text: '8.Nxe5', correct: true, why: 'Yes. The e5-pawn has no defender left, so White simply wins it.' },
        { text: '8.Be3', why: 'A fine developing move, but it lets Black keep the pawn. 8.Nxe5 wins it now.' },
        { text: '8.Bg5', why: 'It pins the f6-knight, but 8.Nxe5 is stronger: it wins a pawn at once.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does Black usually play 4...d6 before castling?',
      choices: [
        { text: 'If White pushes e4–e5, the d6-pawn can take it, so the knight is not kicked', correct: true, why: 'Right. Without ...d6, 5.e5 sends the knight back to e8.' },
        { text: 'Black is not allowed to castle before ...d6', why: 'Castling has nothing to do with ...d6. The squares between Black\'s king and rook are empty, so 4...O-O is legal.' },
        { text: "The d6-pawn guards Black's king", why: "The d6-pawn guards e5. The king's guards are the g7-bishop and the pawns in front of it." }
      ]
    }
  ],
  key: { name: "Castled King's Indian: 5.Nf3 O-O", moves: CASTLED, orientation: 'black' },
  terms: [
    { term: 'Castling', meaning: 'A special move of king and rook together. It gets the king to safety and brings the rook toward the center.' },
    { term: 'Kick', meaning: 'Attack a piece with a pawn so that it has to move.' },
    { term: 'Passive piece', meaning: 'A piece with few useful squares, like a knight sent back to e8.' }
  ]
})
