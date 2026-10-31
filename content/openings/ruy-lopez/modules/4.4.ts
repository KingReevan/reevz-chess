import { defineModule } from '../../../types'
import { CLOSED } from '../../../lines'

const CHIG = `${CLOSED} Na5 Bc2 c5 d4 Qc7`
const CLOSE_IT = `${CHIG} Nbd2 Nc6 d5`
const OPEN_IT = `${CHIG} Nbd2 cxd4 cxd4 Nc6 Nb3`

export default defineModule({
  id: '4.4',
  title: 'Chigorin structures: d5 or cxd4?',
  minutes: 11,
  level: 3,
  goals: [
    'See why the center tension in the Chigorin has to break',
    'Know the closed center after 13.d5 and the danger for the a5/c6-knight',
    'Know the open c-file after 12...cxd4 and the knight on b3'
  ],
  intro:
    "After 11...Qc7 12.Nbd2, White's d4-pawn faces Black's c5- and e5-pawns. Sooner or later someone captures or pushes, and the whole game takes its shape from that moment. Which choice suits which side?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Closing the center: 12...Nc6 13.d5',
      intro: "You're White. Black's knight comes back to the center, and White answers by locking the center.",
      moves: CLOSE_IT,
      start: 21,
      orientation: 'white',
      steps: {
        21: {
          title: 'The tension begins',
          text: "11.d4. White's d4-pawn now faces Black's c5- and e5-pawns. Nobody has to capture yet. This standoff is called tension.",
          arrows: [['c5', 'd4', 'red'], ['e5', 'd4', 'red']],
          marks: ['d4']
        },
        22: {
          title: 'The queen steps up',
          text: '11...Qc7. Black guards c5 and gets ready to guard e5. Both sides keep the tension for now.',
          arrows: [['c7', 'c5', 'green']]
        },
        23: {
          title: 'The tour begins',
          text: "12.Nbd2. The knight starts its trip. But for a moment it blocks the queen's guard of d4.",
          arrows: [['d1', 'd4', 'blue']],
          marks: ['d2']
        },
        24: {
          title: 'The knight comes home',
          text: '12...Nc6. The knight returns from a5 and hits d4. Count: three attackers (c5, e5, c6) and only two guards (c3, f3), because the d2-knight blocks the queen. White has to keep a close eye on d4.',
          arrows: [['c6', 'd4', 'red'], ['c5', 'd4', 'red'], ['e5', 'd4', 'red']],
          marks: ['d4']
        },
        25: {
          title: 'The center is locked',
          text: "13.d5. White pushes past and attacks the knight. Its safe squares are a5, a7, b8 and d8, all far from the center. White has more space, and c6 is no longer a home for the knight.",
          arrows: [['d5', 'c6', 'red']],
          marks: ['a5', 'b8', 'd8'],
          ann: '!'
        }
      }
    },
    {
      kind: 'history',
      title: 'Karpov–Unzicker, Nice Olympiad 1974',
      body:
        "This is the classic example of 13.d5. Karpov locked the center, then slowly squeezed Black's queenside until Black's pieces had no good squares. Unzicker is said to have complained afterwards about his trapped knight. ChessBase calls the game \"Karpov at his best\"."
    },
    {
      kind: 'walkthrough',
      title: 'Opening the c-file: 12...cxd4',
      intro: "Now you're Black. Instead of letting White lock the center, Black opens a file for the queen and rooks.",
      moves: OPEN_IT,
      start: 22,
      orientation: 'black',
      steps: {
        22: {
          title: 'Choose your structure',
          text: "The tension is still on. If Black waits, White may push d5 and lock the center. Black can open the position first.",
          marks: ['d4', 'c5']
        },
        23: {
          title: 'White starts the tour',
          text: '12.Nbd2. The knight now stands between the queen and d4, so d4 has one guard fewer for a moment.',
          arrows: [['d1', 'd4', 'blue']],
          marks: ['d2']
        },
        24: {
          title: 'Black releases the tension',
          text: '12...cxd4. Black trades the c-pawn. After White takes back, there will be no pawns left on the c-file.',
          arrows: [['c7', 'c2', 'blue']]
        },
        25: {
          title: 'An open c-file',
          text: "13.cxd4. White has two strong center pawns on d4 and e4. But the c-file is open, and Black's queen now looks straight at the c2-bishop.",
          arrows: [['c7', 'c2', 'red']]
        },
        26: {
          title: 'The knight hits d4',
          text: '13...Nc6. The knight comes back with a threat. Now d4 is attacked twice (c6, e5) and guarded only once, by the f3-knight.',
          arrows: [['c6', 'd4', 'red'], ['e5', 'd4', 'red'], ['f3', 'd4', 'green']],
          marks: ['d4']
        },
        27: {
          title: 'The knight guards d4',
          text: "14.Nb3. The knight guards d4 and gets out of the queen's way, so d4 now has three guards. Black's next idea is ...a5 and ...a4, chasing this knight away.",
          arrows: [['b3', 'd4', 'green'], ['a6', 'a4', 'blue']],
          marks: ['b3']
        }
      }
    },
    {
      kind: 'text',
      title: 'Which structure suits whom?',
      body:
        "**Closed center (13.d5).** White gains space and keeps Black's knight away from the center. White then plays on the kingside (Nh2 and f4) or clamps the queenside with a4 or b4. Black has to find play on the queenside, for example with ...c4, before White's attack arrives.\n\n**Open c-file (12...cxd4).** Black's queen and rooks get an open file, and Black's knight has a good square on c6. White keeps a big center, but has to keep guarding d4.\n\n**One more option.** Instead of 11...Qc7, the Keres Variation 11...Nd7 guards e5 with the knight. Keres used it in the 1960s."
    }
  ],
  takeaway:
    "The Chigorin tension breaks in one of two ways. 13.d5 locks the center and can strand Black's knight. 12...cxd4 opens the c-file for Black's queen and rooks, and White's knight goes to b3 to guard d4.",
  lookAhead:
    "Next: a completely different way to free the c-pawn. In the Breyer, the knight goes all the way back to b8.",
  drills: [
    {
      title: 'Lock the center',
      prompt: "You're White after 11...Qc7. Start the knight tour, and when Black's knight comes back to c6, push past it.",
      moves: CLOSE_IT,
      start: 22,
      side: 'white',
      hints: ['First, the knight move that starts the tour.', 'd4 is attacked three times. Push the pawn and attack the c6-knight.'],
      success: '12.Nbd2 and 13.d5. The center is locked and Black\'s knight has to go back to the edge.'
    },
    {
      title: 'Open the c-file',
      prompt: "You're Black. White just played 12.Nbd2. Open the c-file, then bring the knight back with a threat.",
      moves: `${CHIG} Nbd2 cxd4 cxd4 Nc6`,
      start: 23,
      side: 'black',
      hints: ['Capture toward the center with the c-pawn.', 'Your a5-knight has a square where it attacks d4.'],
      success: '12...cxd4 and 13...Nc6. The c-file is open and d4 is under fire.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "After 12...Nc6, what is the problem with White's d4-pawn?",
      moves: `${CHIG} Nbd2 Nc6`,
      orientation: 'white',
      choices: [
        { text: 'd4 is attacked three times and guarded only twice', correct: true, why: "Right. c5, e5 and c6 hit d4, while only c3 and f3 guard it, because the d2-knight blocks the queen." },
        { text: 'It is blocking the d2-knight', why: 'The d2-knight moves sideways and forward, not along the d-file. The problem is the count on d4.' },
        { text: 'It can be captured en passant', why: 'En passant only applies to a pawn that has just moved two squares past an enemy pawn. The problem is the count on d4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 12...cxd4 13.cxd4, which Black piece looks at the c2-bishop along the open c-file?',
      moves: `${CHIG} Nbd2 cxd4 cxd4`,
      orientation: 'black',
      choices: [
        { text: 'The queen on c7', correct: true, why: 'Yes. With the c-pawns gone, the queen sees all the way to c2. The d1-queen guards the bishop for now.' },
        { text: 'The rook on a8', why: 'The a8-rook is on the a-file. It could come to c8 later, but it does not see c2 now.' },
        { text: 'The knight on a5', why: 'A knight on a5 reaches b3, c4, c6 and b7, not c2.' }
      ]
    },
    {
      type: 'plan',
      prompt: "White's knight has reached b3 to guard d4. What is Black's typical idea against it?",
      moves: OPEN_IT,
      orientation: 'black',
      choices: [
        { text: '...a5 and ...a4, kicking the knight away', correct: true, why: "Right. Once the knight is chased off b3, d4 loses a guard again." },
        { text: '...Nb4, trapping the knight', why: '...Nb4 does not trap the b3-knight. The a-pawn is the natural way to kick it.' },
        { text: '...Qb6, attacking it twice', why: 'The queen on b6 would not attack b3 through its own b5-pawn. Use the a-pawn instead.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'After 13.d5 locks the center, where does White usually play next?',
      moves: CLOSE_IT,
      orientation: 'white',
      choices: [
        { text: 'On the kingside with Nh2 and f4, or clamping the queenside with a4 or b4', correct: true, why: 'Yes. The locked center frees White to choose a wing. Black looks for queenside play, such as ...c4.' },
        { text: 'It trades queens and heads for an endgame', why: 'Nothing forces a queen trade. A locked center means a long middlegame of plans on the wings.' },
        { text: 'Nowhere: a closed center means a draw', why: 'Closed centers are full of play. The fight just moves to the wings.' }
      ]
    },
    {
      type: 'name',
      prompt: 'Black plays 11...Nd7 instead of 11...Qc7, guarding e5 with the knight. What is this line called?',
      moves: `${CLOSED} Na5 Bc2 c5 d4 Nd7`,
      orientation: 'black',
      choices: [
        { text: 'The Keres Variation', correct: true, why: 'Right. Keres used 11...Nd7 in the 1960s.' },
        { text: 'The Breyer Defense', why: 'The Breyer is 9...Nb8. Here Black played 9...Na5, so this is still a Chigorin.' },
        { text: 'The Karpov Variation', why: 'Karpov\'s line is 9...Nd7, two moves earlier. This is 11...Nd7 inside the Chigorin.' }
      ]
    }
  ],
  key: { name: 'Chigorin: 12...Nc6 13.d5, the locked center', moves: CLOSE_IT, orientation: 'white' },
  terms: [
    { term: 'Tension', meaning: 'Pawns or pieces facing each other where either side could capture, but nobody has yet.' },
    { term: 'Closed center', meaning: 'Center pawns locked against each other, so the pieces fight on the wings.' },
    { term: 'Open file', meaning: 'A file with no pawns on it. Rooks and queens love open files.' },
    { term: 'Offside', meaning: 'A piece far from where the action is, like a knight stuck on the edge.' }
  ]
})
