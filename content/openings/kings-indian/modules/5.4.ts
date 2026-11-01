import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** gligoric-7be3-exd4: 7...exd4 8.Nxd4 Re8 9.f3 c6 10.Qd2 d5 11.exd5 cxd5 12.O-O Nc6 */
const EXD4 = `${CLASSICAL} Be3 exd4 Nxd4 Re8 f3 c6 Qd2 d5 exd5 cxd5 O-O Nc6`
/** gligoric-7be3-na6: 7...Na6 8.O-O Ng4 9.Bg5 Qe8 10.dxe5 dxe5 11.h3 h6 12.Bd2 Nf6 */
const NA6 = `${CLASSICAL} Be3 Na6 O-O Ng4 Bg5 Qe8 dxe5 dxe5 h3 h6 Bd2 Nf6`

export default defineModule({
  id: '5.4',
  title: 'Gligorić: 7...exd4 and 7...Na6',
  minutes: 11,
  level: 3,
  goals: [
    'Play 7...exd4 with ...Re8 and the freeing ...d5 break',
    'Know why White needs f3 to hold e4',
    'Use ...Na6 and ...Qe8 to meet Bg5 without ...f6'
  ],
  intro:
    "Module 5.3 met 7.Be3 with 7...Ng4. Black has two more good answers. One gives up the center pawn to open lines and then frees the game with ...d5. The other develops the knight to a6 first and handles Bg5 with the queen. What does each one aim for, and how should White react?",
  sections: [
    {
      kind: 'walkthrough',
      title: '7...exd4: half-open the e-file, then ...d5',
      intro: "Black's d6-pawn is usually stuck behind White's center. Watch how Black gets rid of it.",
      moves: EXD4,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'The Gligorić',
          text: '7.Be3. The bishop guards d4 and White has not castled yet.',
          arrows: [['e3', 'd4', 'green']]
        },
        14: {
          title: 'Give up the center pawn',
          text: '7...exd4. Black trades the e-pawn. The e-file is now half-open for Black\'s rook, and the g7-bishop gets a clear diagonal as soon as the f6-knight moves.',
          arrows: [['g7', 'd4', 'blue']]
        },
        15: {
          title: 'White takes back',
          text: '8.Nxd4. White keeps a big center with pawns on c4 and e4. That space is White\'s plus point.',
          marks: ['c4', 'e4']
        },
        16: {
          title: 'The rook hits e4',
          text: '8...Re8. The e4-pawn is attacked by the rook and the f6-knight, and defended only by the c3-knight. Black threatens ...Nxe4.',
          arrows: [['e8', 'e4', 'red'], ['f6', 'e4', 'red']],
          marks: ['e4']
        },
        17: {
          title: 'The solid defense',
          text: '9.f3. The f-pawn guards e4 for good. Castling first would be a mistake: 9.O-O? Nxe4 10.Nxe4 Rxe4 wins a pawn for Black.',
          arrows: [['f3', 'e4', 'green']]
        },
        18: {
          title: 'Preparing the break',
          text: '9...c6. The pawn covers d5, so ...d5 can come next with the c6-pawn behind it.',
          arrows: [['c6', 'd5', 'green'], ['d6', 'd5', 'blue']]
        },
        19: {
          title: 'White develops',
          text: '10.Qd2. The queen develops and lines up with the e3-bishop toward h6, where Bh6 could trade off the g7-bishop.',
          arrows: [['e3', 'h6', 'blue']]
        },
        20: {
          title: 'The freeing break',
          text: '10...d5. Black strikes at c4 and e4 at once. The d6-pawn, which had no future, becomes an active center pawn.',
          arrows: [['d5', 'e4', 'red'], ['d5', 'c4', 'red']],
          ann: '!'
        },
        21: {
          title: 'White trades',
          text: '11.exd5. White trades on d5.',
          marks: ['d5']
        },
        22: {
          title: 'Take back with the pawn',
          text: '11...cxd5. Black keeps a pawn on d5. It stands alone, but it controls e4 and c4.',
          arrows: [['d5', 'e4', 'blue'], ['d5', 'c4', 'blue']]
        },
        23: {
          title: 'White castles',
          text: '12.O-O. White tucks the king away.',
          arrows: [['e1', 'g1', 'blue']]
        },
        24: {
          title: 'Active pieces',
          text: '12...Nc6. The knight hits the d4-knight. Every black piece has a job, and the position is equal.',
          arrows: [['c6', 'd4', 'red'], ['e8', 'e3', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '7...Na6: unpin with the queen',
      intro: 'Here Black keeps the e5-pawn and develops the knight to a6. When Bg5 hits the queen, the answer is ...Qe8 instead of ...f6.',
      moves: NA6,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'The Gligorić',
          text: '7.Be3. Same position as before.',
          arrows: [['e3', 'd4', 'green']]
        },
        14: {
          title: 'Knight to the edge',
          text: '7...Na6. On a6 the knight does not block the c-pawn or the c8-bishop. Later it can jump to c5.',
          arrows: [['a6', 'c5', 'blue']]
        },
        15: {
          title: 'White castles',
          text: '8.O-O. This is the same position as 7.O-O Na6 8.Be3, which Module 5.7 meets again.',
          arrows: [['e1', 'g1', 'blue']]
        },
        16: {
          title: 'The jump again',
          text: '8...Ng4. As in Module 5.3, the knight attacks the e3-bishop.',
          arrows: [['g4', 'e3', 'red']]
        },
        17: {
          title: 'Bishop hits the queen',
          text: '9.Bg5. With f6 and e7 empty, the bishop attacks the queen on d8.',
          arrows: [['g5', 'd8', 'red']]
        },
        18: {
          title: 'Queen to e8',
          text: "9...Qe8. The queen steps out of the attack and still guards e5 along the e-file. Unlike ...f6, this keeps Black's f-pawn free and the g7-bishop's diagonal open.",
          arrows: [['e8', 'e5', 'green']]
        },
        19: {
          title: 'White releases the tension',
          text: '10.dxe5. White trades in the center.',
          marks: ['e5']
        },
        20: {
          title: 'Recapture',
          text: '10...dxe5. Now the d-file is open, and the d4-pawn no longer covers c5, so the a6-knight can use it.',
          arrows: [['a6', 'c5', 'blue']]
        },
        21: {
          title: 'Kicking the knight',
          text: '11.h3. The g4-knight must leave.',
          arrows: [['h3', 'g4', 'red']]
        },
        22: {
          title: 'Kick back first',
          text: '11...h6. Before retreating, Black asks the bishop too.',
          arrows: [['h6', 'g5', 'red']]
        },
        23: {
          title: 'Bishop retreats',
          text: '12.Bd2. The bishop steps back.',
          arrows: [['g5', 'd2', 'blue']]
        },
        24: {
          title: 'Home again',
          text: '12...Nf6. The knight returns to its best square. White is slightly better, as in most King\'s Indian main lines, but Black is solid.',
          arrows: [['g4', 'f6', 'green']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'For White: keep e4 safe',
      body:
        "After ...exd4 and ...Re8, the e4-pawn is the target. Defend it before you castle: **f3** is the most solid way, and Qc2 or Qd3 also work. (Qc2 is fine here because the e3-bishop guards the d4-knight. Module 5.6 shows what happens without it.) Then use your extra space and watch for ...d5."
    }
  ],
  takeaway:
    "Against 7.Be3, 7...exd4 8.Nxd4 Re8 hits e4, so White plays 9.f3; then ...c6 and ...d5 free Black's game. 7...Na6 is the other way: after ...Ng4 and Bg5, the queen steps to e8 and keeps guarding e5.",
  lookAhead:
    "Next: two more solid answers to 7.Be3, 7...c6 and 7...h6.",
  drills: [
    {
      title: 'Free your game',
      prompt: "You're Black. White has just played 7.Be3. Give up the e-pawn, hit e4 with the rook, prepare the break, and play it.",
      moves: EXD4.split(' ').slice(0, 20).join(' '),
      start: 13,
      side: 'black',
      hints: [
        'Start by taking on d4.',
        '...exd4, ...Re8, ...c6 and then ...d5.'
      ],
      success: '7...exd4, 8...Re8, 9...c6 and 10...d5. Black has swapped the passive d6-pawn for an active one, and the game is equal.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 7...exd4 8.Nxd4 Re8, what is Black threatening?',
      moves: EXD4.split(' ').slice(0, 16).join(' '),
      orientation: 'black',
      choices: [
        { text: '...Nxe4, winning the e4-pawn', correct: true, why: 'Right. The rook and the f6-knight attack e4, and only the c3-knight defends it. That is why White plays 9.f3.' },
        { text: '...Rxe3, winning the bishop', why: 'The e4-pawn stands in the way on the e-file, so the rook cannot reach e3. That pawn is the target.' },
        { text: '...Bxd4, winning the knight', why: 'The f6-knight blocks the g7-bishop, and the d4-knight is defended by the e3-bishop and the queen. The real threat is on e4.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just played 10.Qd2. What is the strongest move?',
      moves: EXD4.split(' ').slice(0, 19).join(' '),
      orientation: 'black',
      choices: [
        { text: '10...d5', correct: true, why: 'Yes. The freeing break: Black swaps the passive d6-pawn for an active one, and the game is equal.' },
        { text: '10...Qe7', why: 'Natural, but slow. White keeps the space edge and is better. Black prepared ...d5 with ...c6, so play it.' },
        { text: '10...Nbd7', why: 'This develops, but leaves the d6-pawn passive. 10...d5 is the point of ...c6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 7...Na6 line, why does Black answer 9.Bg5 with 9...Qe8?',
      moves: NA6.split(' ').slice(0, 17).join(' '),
      orientation: 'black',
      choices: [
        { text: 'It escapes the attack and keeps guarding e5, without blocking the g7-bishop with ...f6', correct: true, why: 'Right. 9...f6 is also playable, but ...Qe8 keeps the f-pawn and the long diagonal free.' },
        { text: 'It attacks the e4-pawn', why: 'The e5-pawn is in the way on the e-file. The queen guards e5 rather than attacking e4.' },
        { text: 'It prepares ...Qa4', why: 'The queen is not heading for the queenside. Its job on e8 is to defend e5.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Which move order reaches the same position as 7.Be3 Na6 8.O-O?',
      choices: [
        { text: '7.O-O Na6 8.Be3', correct: true, why: 'Right. Same moves, different order. Module 5.7 starts from 7.O-O Na6 and reaches this exact position.' },
        { text: '7.d5 Na6 8.Be3', why: 'After 7.d5 the center is closed, so the pawns are on different squares. That is the Petrosian.' },
        { text: '7.dxe5 dxe5 8.Be3 Na6', why: 'Here the pawns have been traded on e5 already. It is a different position.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move. White has just castled with 9.O-O instead of guarding e4. What should Black play?',
      moves: `${CLASSICAL} Be3 exd4 Nxd4 Re8 O-O`,
      orientation: 'black',
      choices: [
        { text: '9...Nxe4', correct: true, why: 'Right. After 10.Nxe4 Rxe4 Black is a pawn up. White gets some activity, but Black is a little better.' },
        { text: '9...c6', why: 'Playable, but it lets White off the hook. With e4 unguarded, take it.' },
        { text: '9...Nc6', why: 'This trades knights after Nxc6 or lets White play f3. The e4-pawn was free: 9...Nxe4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 7...exd4 line, what does the ...d5 break achieve for Black?',
      choices: [
        { text: 'It swaps the passive d6-pawn and frees the black pieces', correct: true, why: 'Right. The d6-pawn had no future behind White\'s center. After ...d5 the game opens and Black\'s pieces get active.' },
        { text: 'It wins the c4-pawn by force', why: 'No pawn is won. After 11.exd5 cxd5 material stays level.' },
        { text: "It closes the center for a kingside attack", why: 'It does the opposite: ...d5 opens the center.' }
      ]
    }
  ],
  key: { name: 'Gligorić: 7...exd4 8.Nxd4 Re8 9.f3 c6 10.Qd2 d5', moves: EXD4.split(' ').slice(0, 20).join(' '), orientation: 'black' },
  terms: [
    { term: 'Freeing break', meaning: 'A pawn move that opens a cramped position and gives your pieces room, like ...d5 here.' },
    { term: 'Half-open file', meaning: 'A file with no pawn of your own on it, but an enemy pawn. Your rook can attack that pawn.' },
    { term: 'Space', meaning: 'How much of the board your pawns and pieces control. More space means more room to move your pieces.' }
  ]
})
