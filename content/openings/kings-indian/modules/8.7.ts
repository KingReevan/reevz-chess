import { defineModule } from '../../../types'
import { KID } from '../lines'

/** kid-5bd3: 5.Bd3 O-O 6.Nge2 e5 7.d5 c6 */
const BD3 = `${KID} Bd3 O-O Nge2 e5 d5 c6`
/** kid-5nge2: the Kramer Variation */
const KRAMER = `${KID} Nge2 O-O Ng3 e5 d5 c6 Be2 cxd5 cxd5 a6`
/** kid-5g3: the Pomar System */
const POMAR = `${KID} g3 O-O Bg2 e5 Nge2`

export default defineModule({
  id: '8.7',
  title: '5.Bd3, 5.Nge2 and 5.g3',
  minutes: 10,
  level: 2,
  goals: [
    'Recognize three flexible set-ups with e4: 5.Bd3, 5.Nge2 and 5.g3',
    'See why White sometimes keeps the knight off f3',
    'Answer with the usual plan: castle, ...e5, and ...c6 against d5'
  ],
  intro:
    "Not every White player follows the main roads. Some keep the king's knight off f3 so the f-pawn can move later, and some fianchetto the bishop while keeping the pawn on e4. These set-ups are rare at master level, but you will meet them. The good news: Black's plan hardly changes.",
  sections: [
    {
      kind: 'walkthrough',
      title: '5.Bd3 and 6.Nge2',
      intro: 'Notice where the king\'s knight goes. It is not f3.',
      moves: BD3,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The usual set-up',
          text: "4...d6. Black has the King's Indian set-up. White now develops the king's bishop first.",
          marks: ['d6', 'g7']
        },
        9: {
          title: 'Bishop to d3',
          text: '5.Bd3. The bishop guards e4 and c4. This move has no special name.',
          arrows: [['d3', 'e4', 'green'], ['d3', 'c4', 'green']]
        },
        10: {
          title: 'Castle first',
          text: '5...O-O. As always, Black gets the king safe.',
          marks: ['g8']
        },
        11: {
          title: 'The knight goes to e2',
          text: '6.Nge2. The knight goes to e2 instead of f3, so the f-pawn can still advance to f4 later.',
          arrows: [['g1', 'e2', 'blue'], ['f2', 'f4', 'blue']]
        },
        12: {
          title: 'The classic break',
          text: '6...e5. Black strikes at d4, as in the Classical. 6...Nc6 is also a good move here.',
          arrows: [['e5', 'd4', 'red']]
        },
        13: {
          title: 'The center closes',
          text: '7.d5. White gains space and locks the center.',
          marks: ['d5', 'e5']
        },
        14: {
          title: 'Hit d5 from the side',
          text: '7...c6. Black challenges d5 and prepares ...cxd5 to open the c-file. White keeps a small edge in space, as usual.',
          arrows: [['c6', 'd5', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The Kramer: 5.Nge2 and 6.Ng3',
      intro: 'The same idea, but the knight goes further: to g3.',
      moves: KRAMER,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'Knight first',
          text: "4...d6. This time White starts with the king's knight.",
          marks: ['g1']
        },
        9: {
          title: 'The Kramer Variation',
          text: '5.Nge2. This is the Kramer Variation. (Wikipedia calls the set-up with 6.Ng3 the Hungarian Attack.) The knight is heading for g3.',
          arrows: [['e2', 'g3', 'blue']]
        },
        10: {
          title: 'Black castles',
          text: '5...O-O. Black stays calm and castles.',
          marks: ['g8']
        },
        11: {
          title: 'Knight on g3',
          text: '6.Ng3. From g3 the knight supports e4. It also leaves the f-pawn free, so f2–f4 is possible later.',
          arrows: [['g3', 'e4', 'green'], ['f2', 'f4', 'blue']]
        },
        12: {
          title: '...e5 again',
          text: '6...e5. Black strikes at d4.',
          arrows: [['e5', 'd4', 'red']]
        },
        13: {
          title: 'Space for White',
          text: '7.d5. White closes the center.',
          marks: ['d5']
        },
        14: {
          title: 'The ...c6 lever',
          text: '7...c6. The same idea as against 5.Bd3: Black hits d5 from the side.',
          arrows: [['c6', 'd5', 'red']]
        },
        15: {
          title: 'White develops',
          text: '8.Be2. The bishop comes out, and White is ready to castle.',
          arrows: [['e1', 'g1', 'blue']]
        },
        16: {
          title: 'Opening the c-file',
          text: '8...cxd5. Black takes on d5. If White takes back with the c-pawn, the c-file opens.',
          marks: ['d5']
        },
        17: {
          title: 'Taking back with the c-pawn',
          text: '9.cxd5. White recaptures toward the center. The pawns on d5 and e4 give White plenty of space.',
          marks: ['d5', 'e4']
        },
        18: {
          title: 'Queenside plans',
          text: '9...a6. Black prepares ...b5 to gain space on the queenside. White is clearly better thanks to the extra space, so Black needs active play with ...b5 and down the c-file.',
          arrows: [['b7', 'b5', 'blue'], ['c8', 'c1', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The Pomar System: 5.g3',
      intro: 'A fianchetto, but with the pawn already on e4.',
      moves: POMAR,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'Another fianchetto',
          text: "4...d6. White can also fianchetto the king's bishop while keeping the pawn on e4.",
          marks: ['e4']
        },
        9: {
          title: 'The Pomar System',
          text: '5.g3. This is the Pomar System, a mix of the Fianchetto and the e4 systems.',
          arrows: [['f1', 'g2', 'blue']]
        },
        10: {
          title: 'Black castles',
          text: '5...O-O. Black castles, as against everything else.',
          marks: ['g8']
        },
        11: {
          title: 'Bishop on g2',
          text: '6.Bg2. From g2 the bishop backs up the e4-pawn.',
          arrows: [['g2', 'e4', 'green']]
        },
        12: {
          title: 'Strike in the center',
          text: '6...e5. Black hits d4. 6...c5 is another good answer.',
          arrows: [['e5', 'd4', 'red']]
        },
        13: {
          title: 'Knight to e2',
          text: '7.Nge2. Again the knight goes to e2 and keeps the f-pawn free. Black can take on d4 or keep the tension, and the game is roughly level.',
          arrows: [['g1', 'e2', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'One recipe for many set-ups',
      body:
        "When you meet an unusual set-up with e4, don't panic. Castle, strike in the center with ...e5 (or ...c5), and if White closes the center with d4–d5, challenge the d5-pawn from the side with ...c6. A knight on e2 or g3 tells you White may push f2–f4 later, so keep your pieces ready to meet it."
    }
  ],
  takeaway:
    "5.Bd3, 5.Nge2 (the Kramer) and 5.g3 (the Pomar) keep White's options open. Black's answer stays the same: castle, play ...e5, and meet d4–d5 with ...c6.",
  lookAhead:
    'Module 8.8 shows 5.Bg5, where White brings the bishop out before Black has even castled.',
  drills: [
    {
      title: 'The Kramer as White',
      prompt: "You're White in the Kramer. Black has just played 6...e5. Close the center, develop, and take back toward the center.",
      moves: `${KID} Nge2 O-O Ng3 e5 d5 c6 Be2 cxd5 cxd5`,
      start: 12,
      side: 'white',
      hints: ['Push the d-pawn past e5.', 'Develop the king\'s bishop, then recapture on d5 with a pawn that keeps your center.'],
      success: '7.d5, 8.Be2 and 9.cxd5. White has pawns on d5 and e4 and plenty of space.'
    },
    {
      title: 'Meet d5 with ...c6',
      prompt: "You're Black against 5.Bd3. White has just closed the center with 7.d5. Play the standard lever.",
      moves: BD3,
      start: 13,
      side: 'black',
      hints: ['Hit the d5-pawn from the side.', 'Your c-pawn can do it.'],
      success: '7...c6. Black challenges d5 and prepares to open the c-file.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'In these set-ups, why does White play Nge2 instead of Nf3?',
      choices: [
        { text: 'To keep the f-pawn free to advance to f4', correct: true, why: 'Right. A knight on f3 would block the f-pawn.' },
        { text: 'To guard the d4-pawn', why: 'A knight on f3 would guard d4 just as well. The point is the f-pawn.' },
        { text: 'To free the f3 square for the queen', why: "White's queen isn't heading for f3. The knight stays off f3 so the f-pawn can move." }
      ]
    },
    {
      type: 'name',
      prompt: 'White has played 5.Nge2 and 6.Ng3. What is this system called?',
      moves: `${KID} Nge2 O-O Ng3`,
      orientation: 'black',
      choices: [
        { text: 'The Kramer Variation', correct: true, why: 'Yes. Wikipedia also calls the set-up with 6.Ng3 the Hungarian Attack.' },
        { text: 'The Makogonov Variation', why: 'The Makogonov is 5.h3.' },
        { text: 'The Pomar System', why: 'The Pomar System is 5.g3 with the bishop on g2.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Black to move. White has closed the center with 7.d5. Which plan fits the position?',
      moves: `${KID} Bd3 O-O Nge2 e5 d5`,
      orientation: 'black',
      choices: [
        { text: 'Challenge d5 with ...c6', correct: true, why: 'Right. The c-pawn hits d5 from the side and can open the c-file.' },
        { text: 'Take the e4-pawn with ...Nxe4', why: 'e4 is guarded by the d3-bishop and the c3-knight. Black would lose a knight for a pawn.' },
        { text: 'Trade queens on d5', why: "Black's queen can't reach d5: the d6-pawn is in the way, and d5 is well defended." }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Pomar System (5.g3), what does the bishop on g2 do?',
      choices: [
        { text: 'It backs up the e4-pawn', correct: true, why: 'Yes. With no knight on f3, the bishop sees e4 directly.' },
        { text: "It attacks Black's king", why: 'It sits behind the e4-pawn on the long light diagonal, far from g8.' },
        { text: 'It stops Black from playing ...e5', why: 'Black plays 6...e5 without trouble. The bishop does not control e5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'Against 5.Bd3, 5.Nge2 or 5.g3, what is a sound plan for Black?',
      choices: [
        { text: 'Castle, play ...e5, and meet d4–d5 with ...c6', correct: true, why: "Right. The usual King's Indian ideas work against all three." },
        { text: 'Push ...h5 and ...h4 before castling', why: "Black's king would stay in the center. Castle first, then fight." },
        { text: 'Avoid central pawn moves and wait', why: 'Waiting lets White build up freely. Black needs a central break.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move in the Kramer. Black has just played 8...cxd5. How should White take back?',
      moves: `${KID} Nge2 O-O Ng3 e5 d5 c6 Be2 cxd5`,
      orientation: 'white',
      choices: [
        { text: '9.cxd5', correct: true, why: 'Right. White keeps pawns on d5 and e4 and a clear space advantage.' },
        { text: '9.exd5', why: "White's center shrinks, and Black gets a comfortable game." },
        { text: '9.Nxd5', why: 'Black can trade knights on d5, and White\'s edge is gone.' }
      ]
    }
  ],
  key: { name: 'Kramer Variation: 5.Nge2 and 6.Ng3', moves: `${KID} Nge2 O-O Ng3`, orientation: 'black' },
  terms: [
    { term: 'Closed center', meaning: 'A center where the pawns are locked against each other, such as d5 against d6 and e4 against e5. Pieces cannot pass through.' },
    { term: 'Pawn chain', meaning: 'Pawns on a diagonal that protect each other, such as White\'s e4 and d5, or Black\'s d6 and e5.' }
  ]
})
