import { defineModule } from '../../../types'
import { CLOSED } from '../../../lines'

const CHIG = `${CLOSED} Na5 Bc2 c5 d4 Qc7`
const YUGO = `${CHIG} Nbd2 Bd7 Nf1 Rfe8 Ne3 g6`

export default defineModule({
  id: '4.3',
  title: 'Chigorin: 9...Na5',
  minutes: 10,
  level: 2,
  goals: [
    'Know why Black puts the knight on the rim with 9...Na5',
    'Learn the main moves to 11...Qc7 and the job of each one',
    "See how White answers: the knight tour, this time to e3"
  ],
  intro:
    'Beginners learn that "a knight on the rim is dim". Yet in the oldest main line of the Closed Ruy, Black puts a knight on a5 on purpose. What does Black gain, and what does the knight do once it gets there?',
  sections: [
    {
      kind: 'text',
      title: 'Why the rim?',
      body:
        "9...Na5 does three things at once. It **attacks the b3-bishop**, so White must spend a move saving it. It **clears the c-pawn's path**, so Black can play ...c5 and grab space. And it is **only a visit**: once the c-pawn has moved, the knight can come back to c6, or jump to c4."
    },
    {
      kind: 'walkthrough',
      title: 'The Chigorin main line',
      intro: "You're Black. Every move here has a clear job. Try to name it before you press Next.",
      moves: CHIG,
      start: 17,
      orientation: 'black',
      steps: {
        17: {
          title: 'Black to choose',
          text: 'The Closed tabiya. The c6-knight is in front of the c-pawn, and the b3-bishop is White\'s best attacking piece. One move can deal with both.',
          arrows: [['c6', 'a5', 'blue'], ['b3', 'f7', 'yellow']]
        },
        18: {
          title: 'Knight to the rim',
          text: '9...Na5. The knight attacks the bishop, so White has no time for d4 this move. The c-pawn is free.',
          arrows: [['a5', 'b3', 'red'], ['c7', 'c5', 'green']]
        },
        19: {
          title: 'The bishop is saved',
          text: '10.Bc2. On c2 the bishop guards e4 and keeps the b1-h7 diagonal. When the center opens, it will point at h7, next to Black\'s king.',
          arrows: [['c2', 'e4', 'green']]
        },
        20: {
          title: 'Queenside space',
          text: '10...c5. The pawn takes space and guards d4. With pawns on b5 and c5, Black owns a big share of the queenside.',
          arrows: [['c5', 'd4', 'yellow'], ['c5', 'b4', 'blue']]
        },
        21: {
          title: 'White claims the center',
          text: '11.d4. The pawn is attacked twice (c5, e5) and guarded three times (c3, f3, d1), so it is safe. But now e5 has two attackers and only the d6-pawn guarding it.',
          arrows: [['d4', 'e5', 'red'], ['f3', 'e5', 'red']],
          marks: ['e5']
        },
        22: {
          title: 'The queen on c7',
          text: '11...Qc7. It guards the c5-pawn and stands ready for an open c-file. Its key job: if White ever plays dxe5 dxe5, the queen guards e5 along the diagonal.',
          arrows: [['c7', 'c5', 'green'], ['c7', 'e5', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Why the queen, and why c7?',
      body:
        "Try 12.dxe5 dxe5 13.Nxe5 in your head. With the queen on c7, 13...Qxe5 simply wins the knight. With the queen still on d8, the e5-pawn would have no guard after the exchange. That is one big reason 11...Qc7 is the main move."
    },
    {
      kind: 'walkthrough',
      title: "White's answer: the tour goes to e3",
      intro: "Now you're White. The plan is the same knight trip as Module 4.2, but this time the knight finishes on e3.",
      moves: YUGO,
      start: 22,
      orientation: 'white',
      steps: {
        22: {
          title: 'Same plan as always',
          text: "White's b1-knight is still at home. Its road: d2, f1, then e3 or g3.",
          arrows: [['b1', 'd2', 'blue'], ['d2', 'f1', 'blue'], ['f1', 'e3', 'blue']]
        },
        23: {
          title: 'Step one, with a bonus',
          text: '12.Nbd2. The knight guards e4, and it also covers c4, the square the a5-knight would love to jump to.',
          arrows: [['d2', 'c4', 'green'], ['d2', 'e4', 'green']]
        },
        24: {
          title: 'Black finishes developing',
          text: "12...Bd7. The last minor piece comes out. Now nothing stands between Black's rooks, so they protect each other.",
          arrows: [['a8', 'e8', 'blue']]
        },
        25: {
          title: 'Step two',
          text: '13.Nf1. The bishop on c2 already guards e4, so the knight can leave d2 safely. The c1-bishop is free again.',
          arrows: [['f1', 'e3', 'blue'], ['c2', 'e4', 'green']]
        },
        26: {
          title: 'Rook to the e-file',
          text: '13...Rfe8. The rook moves behind the e5-pawn. Once the e7-bishop moves, the rook will guard e5.',
          arrows: [['e8', 'e5', 'blue']]
        },
        27: {
          title: 'Knight on e3',
          text: '14.Ne3. From e3 the knight eyes d5 and f5, two squares just in front of Black\'s pawns. A White knight landing on f5 would be very strong.',
          arrows: [['e3', 'd5', 'yellow'], ['e3', 'f5', 'yellow']]
        },
        28: {
          title: 'Black covers f5',
          text: '14...g6. The pawn takes f5 and h5 away from White\'s knights. This line, with ...Bd7 and ...Rfe8, is called the Yugoslav set-up.',
          arrows: [['g6', 'f5', 'green'], ['g6', 'h5', 'green']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'The knight must come back',
      body:
        "A knight on a5 can't stay there forever. It doesn't guard e5 or help the king. Black usually brings it back with ...Nc6 or uses it on c4. If White closes the center with d4-d5, the knight can get stuck on the edge. Module 4.4 shows that danger."
    }
  ],
  takeaway:
    "9...Na5 hits the b3-bishop and frees the c-pawn for ...c5. After 10.Bc2 c5 11.d4, 11...Qc7 guards c5 and stands ready to guard e5, while White brings the knight round to g3 or e3.",
  lookAhead:
    "Next: the big decision in the Chigorin. Does White close the center with d5, or does Black open the c-file with ...cxd4?",
  drills: [
    {
      title: 'Chigorin from memory',
      prompt: "You're Black in the Closed tabiya. Play the Chigorin main line to 11...Qc7.",
      moves: CHIG,
      start: 17,
      side: 'black',
      hints: ['Attack the b3-bishop and free your c-pawn at the same time.', 'After ...c5 and d4, the queen goes to a square where it can guard c5 and, later, e5.'],
      success: '9...Na5, 10...c5 and 11...Qc7. Space on the queenside and a queen that watches e5.'
    },
    {
      title: 'Knight to e3',
      prompt: "You're White after 11...Qc7. Bring the b1-knight to e3.",
      moves: `${CHIG} Nbd2 Bd7 Nf1 Rfe8 Ne3`,
      start: 22,
      side: 'white',
      hints: ['Start with the square next to the queen.', 'The bishop on c2 guards e4, so the knight can go on to f1.'],
      success: 'Nbd2, Nf1 and Ne3. The knight now eyes d5 and f5.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does 9...Na5 gain time?',
      choices: [
        { text: 'It attacks the b3-bishop, so White must spend a move saving it', correct: true, why: 'Right. White has to play 10.Bc2 instead of a useful move like d4.' },
        { text: 'It attacks the e4-pawn', why: 'A knight on a5 does not reach e4. It attacks b3, c4, c6 and b7.' },
        { text: 'It threatens ...Nc4 with a fork', why: 'The point is the attack on b3. ...Nc4 can come later, but it is not an immediate fork.' }
      ]
    },
    {
      type: 'move',
      prompt: "Black to move after 10.Bc2 c5 11.d4. What is the main move?",
      moves: `${CLOSED} Na5 Bc2 c5 d4`,
      orientation: 'black',
      choices: [
        { text: '11...Qc7', correct: true, why: 'The queen guards c5 and is ready to guard e5 if White plays dxe5 dxe5.' },
        { text: '11...Nxe4', why: 'The e4-pawn is guarded by the c2-bishop and the e1-rook. 12.Bxe4 wins a knight for a pawn.' },
        { text: '11...Bg4', why: "The h3-pawn covers g4. After 12.hxg4 Nxg4 Black has given a bishop for a pawn." }
      ]
    },
    {
      type: 'trap',
      prompt: 'White exchanged with 12.dxe5 dxe5. Can White win a pawn with 13.Nxe5?',
      moves: `${CHIG} dxe5 dxe5`,
      orientation: 'white',
      choices: [
        { text: 'No: 13...Qxe5 wins the knight', correct: true, why: "Right. The queen on c7 guards e5 along the diagonal. That is exactly why Black put it there." },
        { text: 'Yes: e5 has no guard', why: 'Look at the queen on c7. With the d6-pawn gone, it guards e5.' },
        { text: 'Yes, because the e8-square is weak', why: 'There is no tactic on e8 here. 13.Nxe5 just loses the knight to 13...Qxe5.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Where does the a5-knight usually go later in the Chigorin?',
      choices: [
        { text: 'Back to c6, or forward to c4', correct: true, why: "Yes. Once the c-pawn has moved, the knight has done its job on a5 and returns to the game." },
        { text: 'It stays on a5 for the rest of the game', why: 'A knight on a5 does little. If it stays there, it can become a problem piece.' },
        { text: 'To b3, to take the bishop', why: 'The bishop has gone to c2. On b3 the knight would just be taken by the a2-pawn.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Black has played 9...Na5, 10...c5 and 11...Qc7. Which defense is this?',
      moves: CHIG,
      orientation: 'black',
      choices: [
        { text: 'The Chigorin Defense', correct: true, why: 'Right. 9...Na5 followed by ...c5 and ...Qc7 is the Chigorin main line.' },
        { text: 'The Breyer Defense', why: 'The Breyer is 9...Nb8, with the knight going to d7.' },
        { text: 'The Zaitsev Variation', why: 'The Zaitsev is 9...Bb7, keeping the knight on c6.' }
      ]
    },
    {
      type: 'concept',
      prompt: "In the Chigorin, why does White's 12.Nbd2 also bother the a5-knight?",
      moves: `${CHIG} Nbd2`,
      orientation: 'white',
      choices: [
        { text: 'It covers c4, the square the a5-knight wants', correct: true, why: 'Yes. A knight on d2 guards c4, so ...Nc4 is no longer so easy.' },
        { text: 'It attacks the a5-knight directly', why: 'A knight on d2 does not reach a5. It covers c4, b3, b1, e4, f3 and f1.' },
        { text: 'It traps the a5-knight', why: 'The knight still has c6, c4 and b7. It is not trapped, just short of good squares.' }
      ]
    }
  ],
  key: { name: 'Chigorin Defense: 9...Na5 10.Bc2 c5 11.d4 Qc7', moves: CHIG, orientation: 'black' },
  terms: [
    { term: 'Knight on the rim', meaning: 'A knight on the a- or h-file controls fewer squares. "A knight on the rim is dim."' },
    { term: 'Tempo', meaning: 'One move of time. Making a threat your opponent must answer "gains a tempo".' },
    { term: 'Space', meaning: 'Room behind your pawns for your pieces. Pawns further up the board give more space.' }
  ]
})
