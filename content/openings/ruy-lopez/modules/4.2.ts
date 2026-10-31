import { defineModule } from '../../../types'
import { CLOSED, CLOSED7 } from '../../../lines'

const TOUR = `${CLOSED7} d6 c3 O-O d3 Na5 Bc2 c5 Nbd2 Nc6 Nf1 Re8 Ng3`
const TOO_EARLY = `${CLOSED} Bb7 d4 Re8 Nbd2 Bf8 Nf1 exd4 cxd4 Na5 Bc2 Nxe4`

export default defineModule({
  id: '4.2',
  title: 'The Spanish knight tour: Nbd2–f1–g3',
  minutes: 10,
  level: 2,
  goals: [
    'Follow the knight from b1 to g3 and know why it takes the long road',
    'Know what the knight does on g3 or e3',
    'Check e4 before the knight leaves d2'
  ],
  intro:
    "In almost every Closed Ruy, White's b1-knight goes on a trip: b1, d2, f1, g3. That is three moves for one knight, which breaks the usual advice to develop quickly. So why do strong players do it, and when can the trip go wrong?",
  sections: [
    {
      kind: 'text',
      title: 'Why not the short road?',
      body:
        "A knight on b1 normally develops to c3. Here a pawn already stands on c3, so the knight goes to d2 instead.\n\nBut d2 is a poor square to stay on. The knight blocks the c1-bishop and gets in the queen's way. So it keeps going: to f1, a square that has been empty since the rook moved to e1, and from there to g3 or e3, close to the Black king."
    },
    {
      kind: 'walkthrough',
      title: 'The tour in a quiet set-up',
      intro:
        "This is a typical plan rather than a famous game. White plays the calm 9.d3 so the knight trip is easy to follow.",
      moves: TOUR,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'The road ahead',
          text: "Both sides have castled. The b1-knight can't use c3, so its road is b1-d2-f1-g3. Watch every step.",
          arrows: [['b1', 'd2', 'blue'], ['d2', 'f1', 'blue'], ['f1', 'g3', 'blue']]
        },
        17: {
          title: 'A calm pawn move',
          text: "9.d3. The pawn guards e4 for good. White isn't in a hurry to play d4. That can come later, once the pieces are ready.",
          arrows: [['d3', 'e4', 'green']]
        },
        18: {
          title: 'Black asks a question',
          text: '9...Na5. The knight attacks the bishop and frees the c-pawn, the plan from Module 4.1.',
          arrows: [['a5', 'b3', 'red']]
        },
        19: {
          title: 'The bishop steps back',
          text: "10.Bc2. White keeps its light-squared bishop. It stays on the b1-h7 diagonal, ready for the day the center opens."
        },
        20: {
          title: 'Space on the queenside',
          text: '10...c5. Black takes space on the queenside. The pawn also guards d4, so White will need to prepare d3-d4.',
          arrows: [['c5', 'd4', 'yellow']]
        },
        21: {
          title: 'Step one: d2',
          text: "11.Nbd2. The knight leaves home. On d2 it blocks the c1-bishop, so it won't stay long.",
          arrows: [['d2', 'f1', 'blue']],
          marks: ['c1']
        },
        22: {
          title: 'The Black knight returns',
          text: '11...Nc6. The c-pawn has moved, so the a5-knight comes back to the center, where it guards e5 and eyes d4.',
          arrows: [['c6', 'd4', 'blue'], ['c6', 'e5', 'green']]
        },
        23: {
          title: 'Step two: f1',
          text: '12.Nf1. The knight uses the square the rook left behind. Now d2 is empty, and the c1-bishop can see all the way to h6.',
          arrows: [['f1', 'g3', 'blue'], ['c1', 'h6', 'blue']]
        },
        24: {
          title: 'Black lines up the rook',
          text: '12...Re8. The rook takes the e-file and gets ready for ...Bf8, building the wall around e5.',
          arrows: [['e7', 'f8', 'blue']]
        },
        25: {
          title: 'Step three: g3',
          text: '13.Ng3. The trip is over. From g3 the knight guards e4 and eyes f5 and h5, two squares next to the Black king. Later White can push d3-d4 in one go.',
          arrows: [['g3', 'f5', 'yellow'], ['g3', 'h5', 'yellow'], ['g3', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'g3 or e3?',
      body:
        "**On g3** the knight guards e4 and eyes f5 and h5. It is part of a kingside attack, and it can jump into f5 when that square is safe.\n\n**On e3** the knight eyes d5 and f5, two key central squares. It is a good choice when the fight is about d5. The cost: on e3 it stands in front of the e1-rook."
    },
    {
      kind: 'walkthrough',
      title: 'When the knight leaves too early',
      intro:
        "The trip has a cost. The knight on d2 guards e4, and when it leaves, e4 has one guard fewer. Here Black is set up to punish that.",
      moves: TOO_EARLY,
      start: 22,
      orientation: 'white',
      steps: {
        22: {
          title: 'Black is aiming at e4',
          text: "Black's bishop on b7 and rook on e8 both point at e4. For now their own pieces block them. The d2-knight is one of e4's guards.",
          arrows: [['b7', 'e4', 'blue'], ['e8', 'e4', 'blue'], ['d2', 'e4', 'green']],
          marks: ['e4']
        },
        23: {
          title: 'The tour starts too soon',
          text: '12.Nf1. It looks like the normal plan, but now only the e1-rook guards e4. Black can open the lines.',
          arrows: [['e1', 'e4', 'green']],
          marks: ['e4'],
          ann: '?'
        },
        24: {
          title: 'The e-file opens',
          text: "12...exd4. Black trades off the e5-pawn. Now nothing stands between the e8-rook and e4.",
          arrows: [['e8', 'e4', 'red']]
        },
        25: {
          title: 'White takes back',
          text: '13.cxd4. White recaptures toward the center. But e4 is still short of guards.',
          marks: ['e4']
        },
        26: {
          title: 'Two jobs in one move',
          text: "13...Na5. The knight hits the b3-bishop and gets out of the bishop's way. Now the b7-bishop sees e4 too.",
          arrows: [['a5', 'b3', 'red'], ['b7', 'e4', 'red'], ['e8', 'e4', 'red']]
        },
        27: {
          title: 'Count the pieces',
          text: '14.Bc2. The bishop escapes and guards e4. Count: three attackers (f6, b7, e8) against two guards (c2, e1).',
          arrows: [['c2', 'e4', 'green'], ['e1', 'e4', 'green']],
          marks: ['e4']
        },
        28: {
          title: 'The pawn falls',
          text: '14...Nxe4. Black wins the e4-pawn. Taking back only loses more, because the b7-bishop and e8-rook still guard the knight.',
          arrows: [['b7', 'e4', 'green'], ['e8', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'Check e4 before the knight leaves',
      body:
        "Before you play Nf1, count the guards on e4 without the d2-knight. In the Breyer (Module 4.5) White plays Bc2 first, so the bishop is already guarding e4 when the knight sets off. In the Zaitsev (Module 4.6) White usually plays a move like 12.a4 instead of hurrying the knight."
    }
  ],
  takeaway:
    "The b1-knight goes d2, f1 and then g3 or e3, because c3 is taken and d2 blocks the c1-bishop. Before it leaves d2, make sure e4 still has enough guards.",
  lookAhead:
    "Next: Black's oldest answer to the tabiya, the Chigorin Defense 9...Na5.",
  drills: [
    {
      title: 'Take the knight on tour',
      prompt: "You're White. Black has just played 10...c5. Bring the b1-knight to g3 in three moves.",
      moves: TOUR,
      start: 20,
      side: 'white',
      hints: ['The c3-square is taken, so start with the square next to the queen.', 'The f1-square has been empty since the rook went to e1.'],
      success: 'Nbd2, Nf1 and Ng3. The knight now guards e4 and eyes f5 and h5.'
    },
    {
      title: 'Punish the early Nf1',
      prompt: "You're Black. White just played 12.Nf1?, taking a guard away from e4. Open the lines and win the pawn.",
      moves: TOO_EARLY,
      start: 23,
      side: 'black',
      hints: ['First clear the e-file for your rook.', 'Your c6-knight blocks the b7-bishop. Move it with a threat.'],
      success: '12...exd4, 13...Na5 and 14...Nxe4. Three attackers beat two guards.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "Why doesn't White's knight stay on d2?",
      choices: [
        { text: 'It blocks the c1-bishop and gets in the queen\'s way', correct: true, why: 'Right. Once the knight moves on to f1, the bishop can see all the way to h6.' },
        { text: 'Black can attack it there with ...b4', why: 'A pawn on b4 would not attack d2. The problem is the pieces the knight blocks.' },
        { text: 'It blocks the e1-rook', why: 'The rook is on the e-file and d2 is not on it. The knight blocks the c1-bishop instead.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is the f1-square free for the knight?',
      choices: [
        { text: 'The rook left it when it moved to e1', correct: true, why: 'Yes. 6.Re1 emptied f1, and the knight uses it as a stepping stone.' },
        { text: 'The bishop left it on move 3', why: "The bishop did leave f1 on move 3, but then White castled and the rook landed there. It was 6.Re1 that emptied f1 again." },
        { text: 'The king moved through it when castling', why: 'Castling put the rook on f1. The square only became free when the rook went to e1.' }
      ]
    },
    {
      type: 'plan',
      prompt: "The knight has reached g3. Which two squares near Black's king does it eye?",
      moves: TOUR,
      orientation: 'white',
      choices: [
        { text: 'f5 and h5', correct: true, why: 'Right. From g3 the knight can jump to f5 or h5, right next to the Black king.' },
        { text: 'g6 and h6', why: 'A knight on g3 does not reach g6 or h6. Picture the L-shape: it lands on f5, h5, e4, e2, f1 and h1.' },
        { text: 'd5 and f5', why: 'f5 is right, but d5 is a square for a knight on e3, not g3.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move. Why is 12.Nf1 a mistake in this position?',
      moves: `${CLOSED} Bb7 d4 Re8 Nbd2 Bf8`,
      orientation: 'white',
      choices: [
        { text: 'It takes a guard away from e4, and Black wins it with ...exd4, ...Na5 and ...Nxe4', correct: true, why: 'Exactly. Once the e-file and the long diagonal open, Black has three attackers on e4.' },
        { text: 'The knight is trapped on f1', why: 'The knight is not trapped. It can go to g3, e3 or back to d2. The problem is e4.' },
        { text: 'It allows ...Bg4, pinning the f3-knight', why: 'The h3-pawn still covers g4. The real problem is on e4.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'In the Breyer, White plays Nbd2, then Bc2, and only then Nf1. Why does Bc2 come first?',
      choices: [
        { text: 'So the bishop guards e4 before the d2-knight leaves', correct: true, why: 'Yes. The bishop replaces the knight as a guard of e4, so the knight can travel safely.' },
        { text: 'Because the knight cannot pass through f1 while the bishop is on b3', why: 'The bishop on b3 does not block the knight. The point is the guard on e4.' },
        { text: 'To stop ...Na5 trapping the bishop', why: "In the Breyer Black's knight goes to d7, not a5. Bc2 is about e4." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which square does a knight on e3 control that a knight on g3 does not?',
      choices: [
        { text: 'd5', correct: true, why: 'Right. A knight on e3 hits d5 and f5; a knight on g3 hits f5 and h5.' },
        { text: 'f5', why: 'Both knights control f5. Look at the other target.' },
        { text: 'h5', why: 'h5 is a square for the g3-knight, not the e3-knight.' }
      ]
    }
  ],
  key: { name: 'Spanish knight tour: Nbd2-f1-g3', moves: TOUR, orientation: 'white' },
  terms: [
    { term: 'Regrouping', meaning: 'Moving pieces, sometimes backward, to squares where they work better together.' },
    { term: 'Counting', meaning: 'Comparing how many pieces attack a square with how many guard it.' },
    { term: 'Kingside', meaning: 'The half of the board from the e-file to the h-file, where both kings castled.' }
  ]
})
