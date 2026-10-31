import { defineModule } from '../../../types'
import { EXCHANGE } from '../../../lines'

/** exchange-gligoric */
const MAIN = `${EXCHANGE} O-O f6 d4 exd4 Nxd4 c5 Nb3 Qxd1 Rxd1 Bg4 f3 Be6`
/** exchange-gligoric-6bg4 */
const BG4 = `${EXCHANGE} O-O f6 d4 Bg4 dxe5 Qxd1 Rxd1 fxe5`

export default defineModule({
  id: '3.3',
  title: '5...f6: the Gligorić main line',
  minutes: 11,
  level: 2,
  goals: [
    "Play White's main line against 5...f6 up to move 10",
    'Understand why ...c5 and the queen trade come so early',
    "Handle Black's other try, 6...Bg4, and its move-order trick"
  ],
  intro:
    "Most Black players answer 5.O-O with the calm 5...f6, guarding e5 with a pawn. How does White reach the endgame from Module 3.1 against it? This module walks through the main line move by move, then shows Black's other choice on move 6.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main line to move 10',
      intro: 'Each move has a job. Read the reason before you press Next.',
      moves: MAIN,
      start: 9,
      orientation: 'white',
      steps: {
        9: {
          title: 'The threat is on',
          text: '5.O-O. As you saw in Module 3.2, Nxe5 is now a real threat. Black has to deal with e5.',
          arrows: [['f3', 'e5', 'red']],
          marks: ['e5']
        },
        10: {
          title: 'A pawn guards e5',
          text: "5...f6. The simplest answer: the f-pawn defends e5. The small cost is that the g8-knight can't use f6 any more, so it usually develops via e7.",
          arrows: [['f6', 'e5', 'green']]
        },
        11: {
          title: 'Strike at the center',
          text: "6.d4. White goes straight for the swap from Module 3.1: White's d-pawn for Black's e-pawn.",
          arrows: [['d4', 'e5', 'red']]
        },
        12: {
          title: 'Black takes',
          text: '6...exd4. Black accepts the swap. (6...Bg4 is the other choice; the second walkthrough shows it.)',
          marks: ['d4']
        },
        13: {
          title: 'The knight recaptures',
          text: "7.Nxd4. The knight takes back and stands in the center. This is White's best recapture. 7.Qxd4, from Module 3.1, is also playable.",
          marks: ['d4']
        },
        14: {
          title: 'The c-pawns get a job',
          text: '7...c5. Black uses one of the doubled pawns to kick the knight. From c5 the pawn also controls d4 and b4.',
          arrows: [['c5', 'd4', 'red']]
        },
        15: {
          title: 'The knight steps back',
          text: '8.Nb3. The knight retreats and eyes the c5-pawn. Now the d-file is open from d1 to d8, and the queens face each other.',
          arrows: [['d1', 'd8', 'yellow'], ['b3', 'c5', 'blue']]
        },
        16: {
          title: 'Queens off',
          text: '8...Qxd1. Black trades first. If Black waited, White could take on d8 with check, and Black\'s king would lose the right to castle.',
          marks: ['d1']
        },
        17: {
          title: 'The typical endgame',
          text: '9.Rxd1. The rook takes back and owns the open d-file. White has the healthy kingside majority; Black has the bishop pair.',
          arrows: [['d1', 'd8', 'blue']],
          marks: ['e4']
        },
        18: {
          title: 'Development with a threat',
          text: '9...Bg4. The bishop comes out and attacks the rook on d1, through f3 and e2.',
          arrows: [['g4', 'd1', 'red']]
        },
        19: {
          title: 'Block and kick',
          text: '10.f3. The pawn blocks the attack and hits the bishop. It also supports e4, so White\'s center pawn is now well protected.',
          arrows: [['f3', 'g4', 'red'], ['f3', 'e4', 'green']]
        },
        20: {
          title: 'The bishop drops back',
          text: '10...Be6. From e6 the bishop eyes the b3-knight and the c4-square. Both sides now finish developing, and the endgame battle begins.',
          arrows: [['e6', 'b3', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'What White is aiming for',
      body:
        "After 9.Rxd1 the queens are gone, and you have exactly the structure from Module 3.1: four pawns against three on the kingside, and Black's doubled c-pawns on the other wing.\n\nYour plan as White is simple to say. **Develop the rest of your pieces, keep e4 solid, and trade pieces when you can.** Every trade makes your healthy majority count for more. Black will try to keep pieces on the board and use the two bishops actively."
    },
    {
      kind: 'walkthrough',
      title: "Black's other choice: 6...Bg4",
      intro: 'Instead of taking on d4, Black pins the f3-knight. Watch the move order on moves 7 and 8.',
      moves: BG4,
      start: 11,
      orientation: 'white',
      steps: {
        11: {
          title: 'Same strike',
          text: '6.d4. White hits e5 again. This time Black has a different idea.',
          arrows: [['d4', 'e5', 'red']]
        },
        12: {
          title: 'Pin first',
          text: '6...Bg4. The bishop pins the f3-knight to White\'s queen on d1. Black keeps the tension instead of taking.',
          arrows: [['g4', 'd1', 'red']],
          marks: ['f3']
        },
        13: {
          title: 'White takes on e5',
          text: '7.dxe5. White captures. Now the queens face each other on the open d-file.',
          arrows: [['d1', 'd8', 'yellow']]
        },
        14: {
          title: 'Trade queens first',
          text: '7...Qxd1. The move order matters. After 7...fxe5? 8.Qxd8+ Rxd8 9.Nxe5, White wins a pawn, because with the queen gone the knight is no longer pinned.',
          marks: ['d1']
        },
        15: {
          title: 'The pin returns',
          text: '8.Rxd1. The only recapture. Look at the g4-bishop: it now pins the f3-knight to the rook on d1.',
          arrows: [['g4', 'd1', 'red']],
          marks: ['f3']
        },
        16: {
          title: 'Black takes back',
          text: '8...fxe5. Now 9.Nxe5?? would lose the rook to ...Bxd1. Black keeps a pawn on e5, but it has no pawn neighbours, so White can aim pieces at it later.',
          marks: ['e5']
        }
      }
    },
    {
      kind: 'history',
      title: 'A world champion\'s choice',
      body:
        "Fischer's 1966 win against Gligorić, the model game from Module 3.2, was played in this very variation. In his 1992 match with Spassky, Fischer twice chose 7.Nxd4 in this line."
    }
  ],
  takeaway:
    'Against 5...f6, play 6.d4 and after 6...exd4 recapture 7.Nxd4. Black kicks the knight with ...c5, the queens come off, and you have the healthy kingside majority against the bishop pair.',
  lookAhead:
    'Next: the sharper 5...Bg4, where Black offers the bishop with ...h5 and taking it can get you mated.',
  drills: [
    {
      title: 'The Gligorić from memory',
      prompt: "You're White. Castle, then play the main line against 5...f6 up to move 10.",
      moves: `${EXCHANGE} O-O f6 d4 exd4 Nxd4 c5 Nb3 Qxd1 Rxd1 Bg4 f3`,
      start: 8,
      side: 'white',
      hints: [
        'After castling, strike at e5 with the d-pawn, and recapture with the knight.',
        'When ...c5 kicks the knight, go to b3. Take back on d1 with the rook, and meet ...Bg4 with the f-pawn.'
      ],
      success: '5.O-O, 6.d4, 7.Nxd4, 8.Nb3, 9.Rxd1 and 10.f3. You have the healthy majority, and every piece trade now helps you.'
    },
    {
      title: 'Answer 6...Bg4',
      prompt: "You're White. Black pinned your knight with 6...Bg4. Take on e5, then recapture after the queen trade.",
      moves: `${EXCHANGE} O-O f6 d4 Bg4 dxe5 Qxd1 Rxd1`,
      start: 12,
      side: 'white',
      hints: ['Capture toward the center with your d-pawn.', 'After ...Qxd1, only one piece can take back.'],
      success: "7.dxe5 Qxd1 8.Rxd1. Remember: after 8...fxe5, don't take on e5 with the knight, because it's pinned to your rook."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the main job of 5...f6?',
      choices: [
        { text: 'It guards the e5-pawn', correct: true, why: 'Right. After 5.O-O, Nxe5 was a threat, and the f-pawn stops it.' },
        { text: 'It prepares ...Nf6', why: "The pawn now stands on f6, so the knight can't go there. It usually develops via e7." },
        { text: "It starts an attack on White's king", why: 'It is a quiet, defensive move. Its job is to hold e5.' }
      ]
    },
    {
      type: 'move',
      prompt: "White to move. Black's ...c5 attacks your knight. What's best?",
      moves: `${EXCHANGE} O-O f6 d4 exd4 Nxd4 c5`,
      orientation: 'white',
      choices: [
        { text: '8.Nb3', correct: true, why: 'Yes. The knight is safe, eyes c5, and after the queen trade you have the typical endgame.' },
        { text: '8.c3', why: 'This leaves the knight where it is. 8...cxd4 wins it, and 9.cxd4 only gets a pawn back.' },
        {
          text: '8.Nf5',
          why: "After 8...Qxd1 9.Rxd1 Bxf5 10.exf5, you have traded your knight for a bishop and doubled your own f-pawns. Your healthy majority isn't healthy any more."
        }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black recaptured too early with 7...fxe5?. How does White win a pawn?',
      moves: `${EXCHANGE} O-O f6 d4 Bg4 dxe5 fxe5`,
      orientation: 'white',
      choices: [
        { text: '8.Qxd8+', correct: true, why: 'Right. After Black takes back, 9.Nxe5 wins the pawn, because without your queen on d1 the knight is no longer pinned.' },
        { text: '8.Nxe5', why: "The knight is pinned to your queen. 8...Bxd1 wins the queen." },
        { text: '8.Qd3', why: 'With the queens still on, the knight stays pinned to your queen and still cannot take on e5. Trade queens first, then take.' }
      ]
    },
    {
      type: 'plan',
      prompt: "The queens are off. What is White's long-term plan?",
      moves: `${EXCHANGE} O-O f6 d4 exd4 Nxd4 c5 Nb3 Qxd1 Rxd1`,
      orientation: 'white',
      choices: [
        { text: 'Finish developing and trade pieces, so the kingside majority counts', correct: true, why: 'Exactly. The simpler the position, the stronger your healthy majority.' },
        { text: "Storm Black's king with the g- and h-pawns", why: "With queens off there is no mating attack to play for. White's trumps are structural." },
        { text: 'Win the c5-pawn at once with the knight', why: 'The c5-pawn is defended by the f8-bishop. There is no quick win; the advantage is long-term.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Black has just played 5...f6. What is this line called?',
      moves: `${EXCHANGE} O-O f6`,
      orientation: 'white',
      choices: [
        { text: 'The Gligorić Variation', correct: true, why: 'Right. 5...f6 is the Gligorić, the most common answer to 5.O-O.' },
        { text: 'The Bronstein Variation', why: 'The Bronstein is 5...Qd6, where the queen guards e5.' },
        { text: 'The Berlin Defense', why: 'The Berlin is 3...Nf6, a different defense on move 3.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the main line, why does 9...Bg4 develop with gain of time?',
      moves: `${EXCHANGE} O-O f6 d4 exd4 Nxd4 c5 Nb3 Qxd1 Rxd1 Bg4`,
      orientation: 'white',
      choices: [
        { text: 'It attacks the rook on d1', correct: true, why: 'Yes. White has to answer, and 10.f3 blocks the attack while kicking the bishop.' },
        { text: 'It pins a knight on f3', why: 'There is no knight on f3 any more. It went to d4 and then b3.' },
        { text: 'It threatens mate on the back rank', why: "There is no mate. The bishop's target is the rook on d1." }
      ]
    }
  ],
  key: { name: 'Exchange Variation, Gligorić: 5.O-O f6', moves: `${EXCHANGE} O-O f6`, orientation: 'white' },
  terms: [
    { term: 'Open file', meaning: 'A file with no pawns on it. Rooks are strongest on open files.' },
    { term: 'Move order', meaning: 'The order in which you play your moves. The same moves in a different order can lead to a different result.' },
    { term: 'Isolated pawn', meaning: 'A pawn with no friendly pawns on the files next to it. No pawn can defend it, so it can become a target.' }
  ]
})
