import { defineModule } from '../../../types'
import { KID } from '../lines'

/** makogonov-5h3: 5.h3 O-O 6.Be3 e5 7.d5 a5 8.g4 Na6 */
const MAK = `${KID} h3 O-O Be3 e5 d5 a5 g4 Na6`
/** makogonov-6bg5: 6.Bg5 c5 7.d5 e6 8.Bd3 exd5 9.cxd5 */
const MAK_BG5 = `${KID} h3 O-O Bg5 c5 d5 e6 Bd3 exd5 cxd5`
/** Averbakh-style trap after 6.Bg5 e5? (engine-checked) */
const BG5_E5 = `${KID} h3 O-O Bg5 e5 dxe5 dxe5 Qxd8 Rxd8 Nd5`

export default defineModule({
  id: '8.6',
  title: 'The Makogonov 5.h3',
  minutes: 10,
  level: 2,
  goals: [
    'Know what the quiet 5.h3 takes away from Black',
    'Meet 6.Be3 with ...e5, ...a5 and ...Na6',
    'Meet 6.Bg5 with ...c5, and know why ...e5 must wait'
  ],
  intro:
    "5.h3 looks like a wasted move: no piece develops and no center pawn moves. Yet strong players use it a lot. Why? It takes the g4 square away from Black's knight and bishop, and it prepares g2–g4 to grab space. This module shows both of White's main follow-ups, 6.Be3 and 6.Bg5, and how Black answers each.",
  sections: [
    {
      kind: 'walkthrough',
      title: '6.Be3 e5 7.d5: space on both wings',
      intro: 'Watch the g4 square. White uses it twice: first to stop Black, then for a pawn.',
      moves: MAK,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: "The King's Indian",
          text: "4...d6. Black has the usual set-up. White now picks a fifth move.",
          marks: ['d6', 'g7']
        },
        9: {
          title: 'The Makogonov',
          text: '5.h3. The Makogonov Variation (also spelled Makagonov). The pawn controls g4, so Black can\'t play ...Ng4 or ...Bg4. Later it can support g2–g4.',
          arrows: [['h3', 'g4', 'green']],
          marks: ['g4']
        },
        10: {
          title: 'Black castles',
          text: '5...O-O. Black gets the king safe, as usual.',
          marks: ['g8']
        },
        11: {
          title: 'A safe bishop on e3',
          text: '6.Be3. Without h3, ...Ng4 would hit this bishop. Now it sits there safely and guards d4. lichess calls this set-up the Karpov System.',
          arrows: [['e3', 'd4', 'green']]
        },
        12: {
          title: 'The ...e5 break',
          text: '6...e5. Black strikes at d4, just as in the Classical.',
          arrows: [['e5', 'd4', 'red']]
        },
        13: {
          title: 'White closes the center',
          text: '7.d5. White gains space. The center is locked, so each side looks for play on a wing.',
          marks: ['d5', 'e5']
        },
        14: {
          title: 'Fixing the queenside',
          text: '7...a5. The pawn stops b2–b4, so White\'s queenside play is slowed down. It also prepares ...Na6 and ...Nc5.',
          arrows: [['a5', 'b4', 'yellow']],
          marks: ['b4']
        },
        15: {
          title: 'The point of h3',
          text: '8.g4. White grabs space on the kingside. The g4-pawn covers f5 and h5, so Black\'s usual ...Nh5 and ...f5 are harder to play.',
          arrows: [['g4', 'f5', 'red'], ['g4', 'h5', 'red']]
        },
        16: {
          title: 'The knight heads for c5',
          text: '8...Na6. The knight goes to c5 next, where it hits e4 and can\'t be chased by b2–b4. White keeps a small edge in space, and Black has a solid position.',
          arrows: [['a6', 'c5', 'blue'], ['c5', 'e4', 'yellow']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '6.Bg5 c5: into a Benoni',
      intro: 'Against the bishop on g5, Black switches to the other central break.',
      moves: MAK_BG5,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'Another bishop move',
          text: '5...O-O. This time White puts the bishop on g5 instead of e3.',
          arrows: [['c1', 'g5', 'blue']]
        },
        11: {
          title: 'The bishop on g5',
          text: '6.Bg5. The bishop eyes the f6-knight. As in the Averbakh (Module 7.8), it makes ...e5 risky for now.',
          arrows: [['g5', 'f6', 'red']]
        },
        12: {
          title: 'The other break',
          text: '6...c5. Black hits d4 from the side instead. This is the safe and active answer.',
          arrows: [['c5', 'd4', 'red']]
        },
        13: {
          title: 'White pushes past',
          text: '7.d5. White gains space and keeps the center closed.',
          marks: ['d5']
        },
        14: {
          title: 'Challenge d5',
          text: '7...e6. Black attacks the d5-pawn at once.',
          arrows: [['e6', 'd5', 'red']]
        },
        15: {
          title: 'Guarding e4',
          text: '8.Bd3. The bishop develops and protects e4.',
          arrows: [['d3', 'e4', 'green']]
        },
        16: {
          title: 'Trading in the center',
          text: '8...exd5. Black trades pawns in the center.',
          marks: ['d5']
        },
        17: {
          title: 'A Benoni structure',
          text: '9.cxd5. White takes back with the c-pawn. This is a Benoni structure: White has a pawn on d5 and space in the center. Black has three pawns against two on the queenside and a half-open e-file. The game is roughly level.',
          arrows: [['e8', 'e4', 'blue']],
          marks: ['d5', 'c5']
        }
      }
    },
    {
      kind: 'warning',
      title: 'Why ...e5 waits against 6.Bg5',
      body:
        "After 5.h3 O-O 6.Bg5, the natural 6...e5? runs into the same trick as in the Averbakh: 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5!. The knight hits the f6-knight, which is pinned to the d8-rook, and also the c7-pawn. White wins material. Play 6...c5 instead."
    },
    {
      kind: 'walkthrough',
      title: 'The trap: 6...e5? 9.Nd5!',
      intro: 'See the pin for yourself. The f6-knight cannot move without losing the d8-rook.',
      moves: BG5_E5,
      start: 11,
      orientation: 'white',
      steps: {
        11: {
          title: 'Bishop on g5',
          text: '6.Bg5. The bishop looks at f6, but nothing is pinned yet. The queen on d8 is shielded by the e7-pawn.',
          arrows: [['g5', 'f6', 'blue']]
        },
        12: {
          title: 'The wrong break',
          text: '6...e5. The e-pawn leaves e7. Now only the f6-knight stands between the g5-bishop and d8.',
          arrows: [['g5', 'd8', 'yellow']],
          ann: '?'
        },
        13: {
          title: 'White takes',
          text: '7.dxe5. White takes on e5. Once Black takes back, the d-file is open.',
          marks: ['e5']
        },
        14: {
          title: 'Black takes back',
          text: '7...dxe5. The queens now face each other on the open d-file.',
          arrows: [['d1', 'd8', 'red']]
        },
        15: {
          title: 'Queens off',
          text: '8.Qxd8. White trades queens.',
          marks: ['d8']
        },
        16: {
          title: 'The rook lands on d8',
          text: '8...Rxd8. Black takes back with the rook. Now the f6-knight is pinned to that rook by the g5-bishop.',
          arrows: [['g5', 'd8', 'red']],
          marks: ['f6']
        },
        17: {
          title: 'The knight jumps in',
          text: '9.Nd5. The knight attacks the pinned f6-knight and the c7-pawn. If 9...Nxd5, then 10.Bxd8 wins the exchange. White is clearly better.',
          arrows: [['d5', 'f6', 'red'], ['d5', 'c7', 'red']],
          ann: '!'
        }
      }
    }
  ],
  takeaway:
    'The Makogonov 5.h3 takes g4 away from Black and prepares g2–g4. Against 6.Be3, play ...e5, ...a5 and ...Na6; against 6.Bg5, play ...c5, because ...e5 runs into Nd5 and the pin on f6.',
  lookAhead:
    'Module 8.7 shows three more flexible set-ups with e4: 5.Bd3, 5.Nge2 and 5.g3.',
  drills: [
    {
      title: 'The Karpov System as White',
      prompt: "You're White. Play the Makogonov with 6.Be3: stop ...Ng4, develop the bishop, close the center, then grab kingside space.",
      moves: `${KID} h3 O-O Be3 e5 d5 a5 g4`,
      start: 8,
      side: 'white',
      hints: ['First a quiet pawn move that controls g4.', 'Then Be3. When Black plays ...e5, push d5, and after ...a5 push the g-pawn.'],
      success: '5.h3, 6.Be3, 7.d5 and 8.g4. White has space on both sides of the board.'
    },
    {
      title: 'Answer 6.Bg5 as Black',
      prompt: "You're Black. White has pinned nothing yet, but the bishop on g5 makes ...e5 risky. Use the other break and open the center.",
      moves: `${KID} h3 O-O Bg5 c5 d5 e6 Bd3 exd5`,
      start: 11,
      side: 'black',
      hints: ['Hit d4 with the c-pawn.', 'When White pushes d5, challenge it with the e-pawn, then take on d5.'],
      success: '6...c5, 7...e6 and 8...exd5. A Benoni structure with active play for Black.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 5.h3 take away from Black?',
      choices: [
        { text: 'The g4 square, so ...Ng4 and ...Bg4 would just lose a piece', correct: true, why: 'Right. That is why White can put a bishop on e3 without fear of ...Ng4.' },
        { text: 'The e5 square, so ...e5 is impossible', why: 'Black can still play ...e5. h3 has nothing to do with the e5 square.' },
        { text: 'The right to castle', why: 'Black castles normally with 5...O-O.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 6.Be3 e5 7.d5 a5, why does White play 8.g4?',
      moves: `${KID} h3 O-O Be3 e5 d5 a5 g4`,
      orientation: 'white',
      choices: [
        { text: "To gain space and make Black's ...Nh5 and ...f5 harder", correct: true, why: 'Yes. The g4-pawn covers h5 and f5, the squares Black usually needs for kingside play.' },
        { text: 'To checkmate Black quickly with the queen on h5', why: 'There is no quick mate. The idea is space and prophylaxis.' },
        { text: 'To win the e5-pawn', why: 'The g4-pawn does not attack e5. It covers f5 and h5.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has played 6.Bg5. What is the best answer?',
      moves: `${KID} h3 O-O Bg5`,
      orientation: 'black',
      choices: [
        { text: '6...c5', correct: true, why: 'Right. Black hits d4 from the side and avoids the pin trick that follows ...e5.' },
        { text: '6...e5', why: 'This runs into 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5!, and White wins material because of the pin on f6.' },
        { text: '6...Ng4', why: 'The h3-pawn controls g4. After 7.hxg4 Black has simply lost a knight.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 6.Be3 line, what is the job of 7...a5?',
      choices: [
        { text: 'It stops b2–b4 and prepares ...Na6 and ...Nc5', correct: true, why: 'Exactly. The knight on c5 hits e4, and with a5 played, b4 cannot chase it.' },
        { text: "It starts an attack on White's king", why: "White's king is still on e1, and a5 is on the queenside. Its job is to fix that wing." },
        { text: 'It wins the c4-pawn', why: 'The a5-pawn does not attack c4. It controls b4.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'White has played 5.h3. What is this system called?',
      moves: `${KID} h3`,
      orientation: 'black',
      choices: [
        { text: 'The Makogonov Variation', correct: true, why: 'Right. 5.h3 is the Makogonov. With 6.Be3 it is also called the Karpov System.' },
        { text: 'The Sämisch', why: 'The Sämisch is 5.f3, which guards e4 with the f-pawn.' },
        { text: 'The Averbakh', why: 'The Averbakh is 5.Be2 and 6.Bg5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6.Bg5 c5 7.d5 e6 8.Bd3 exd5 9.cxd5, what structure do we have?',
      moves: MAK_BG5,
      orientation: 'black',
      choices: [
        { text: 'A Benoni: White has a pawn on d5, Black has more queenside pawns and the e-file', correct: true, why: 'Yes. Black plays on the queenside and down the e-file; White uses the extra central space.' },
        { text: 'A symmetrical structure with equal pawns everywhere', why: "It isn't symmetrical. White's pawn is on d5, and Black has an extra pawn on the queenside." },
        { text: 'A closed center with pawns on d5 and e5', why: "There is no black pawn on e5. Black's e-pawn was traded on d5." }
      ]
    }
  ],
  key: { name: 'Makogonov: 5.h3', moves: `${KID} h3`, orientation: 'black' },
  terms: [
    { term: 'Prophylaxis', meaning: 'A move that stops the opponent\'s idea before it happens, like h3 stopping ...Ng4.' },
    { term: 'Benoni structure', meaning: 'White has a pawn on d5 and Black has a pawn on c5 and d6, with the e-pawns traded. White has central space; Black has queenside play.' },
    { term: 'Pawn majority', meaning: 'Having more pawns than your opponent on one part of the board, such as three against two on the queenside.' }
  ]
})
