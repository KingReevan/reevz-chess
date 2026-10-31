import { defineModule } from '../../../types'
import { EXCHANGE } from '../../../lines'

/** exchange-bg4-h5-trap */
const TRAP = `${EXCHANGE} O-O Bg4 h3 h5 hxg4 hxg4 Nxe5 Qh4 f4 g3 Qh5 Rxh5 Rf3 Qh1#`
/** exchange-bg4-h5 */
const MAIN = `${EXCHANGE} O-O Bg4 h3 h5 d3 Qf6 Nbd2 Ne7 Re1 Ng6`

export default defineModule({
  id: '3.4',
  title: '5...Bg4 and the ...h5 trick',
  minutes: 10,
  level: 2,
  goals: [
    'See why the bishop on g4 is poisoned after 6...h5',
    'Recognise the h-file mating pattern',
    "Play White's calm answer: d3, Nbd2 and Re1"
  ],
  intro:
    "Against 5...Bg4, White asks the bishop to decide with 6.h3. Black answers 6...h5!, leaving the bishop where it is. A free piece? This module shows why taking it is a mistake, how fast it can end in mate, and what White plays instead.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The poisoned bishop',
      intro: 'White takes the bait, then makes it worse. Watch the h-file.',
      moves: TRAP,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'Black pins the knight',
          text: "5...Bg4. The bishop pins the f3-knight to White's queen. That also defends e5: if 6.Nxe5??, then 6...Bxd1.",
          arrows: [['g4', 'd1', 'red']],
          marks: ['f3']
        },
        11: {
          title: 'Asking the bishop',
          text: '6.h3. The pawn attacks the bishop. Normally Black would take on f3 or retreat.',
          arrows: [['h3', 'g4', 'red']]
        },
        12: {
          title: 'Leaving it there',
          text: "6...h5. Black ignores the attack. If White takes on g4, Black takes back with the h-pawn, and the h-file opens toward White's king.",
          arrows: [['h8', 'h1', 'blue']],
          marks: ['g4'],
          ann: '!'
        },
        13: {
          title: 'White grabs the bishop',
          text: '7.hxg4. White takes the piece. It looks like a free bishop, but White has just removed the pawn that shielded the h-file.',
          marks: ['g4'],
          ann: '?'
        },
        14: {
          title: 'The h-file opens',
          text: "7...hxg4. Now the h8-rook looks straight down at h1, and the g4-pawn attacks the f3-knight. White will lose the knight back.",
          arrows: [['h8', 'h1', 'red'], ['g4', 'f3', 'red']]
        },
        15: {
          title: 'A greedy knight',
          text: '8.Nxe5. The knight escapes and grabs a pawn. But it has left the king with even fewer defenders.',
          marks: ['e5'],
          ann: '??'
        },
        16: {
          title: 'The queen joins in',
          text: '8...Qh4. The queen lands on the open h-file. It threatens ...Qh2# and ...Qh1#, backed up by the rook.',
          arrows: [['h4', 'h2', 'red'], ['h8', 'h4', 'red']],
          ann: '!'
        },
        17: {
          title: 'Making room',
          text: '9.f4. White gives the king the f2-square, so ...Qh2+ would no longer be mate.',
          marks: ['f2']
        },
        18: {
          title: 'Closing the door',
          text: '9...g3. The pawn takes f2 and h2 away from the king. Both mates are threatened again.',
          arrows: [['g3', 'f2', 'red'], ['g3', 'h2', 'red']]
        },
        19: {
          title: 'A desperate block',
          text: '10.Qh5. White throws the queen onto the h-file to block it.',
          arrows: [['h8', 'h5', 'red']]
        },
        20: {
          title: 'Queen gone',
          text: '10...Rxh5. Black takes the queen. The threats on h2 and h1 are back.',
          arrows: [['h4', 'h1', 'red']]
        },
        21: {
          title: 'Too late',
          text: '11.Rf3. The rook frees f1 for the king and attacks g3, but Black has a mate in one.',
          marks: ['f1']
        },
        22: {
          title: 'Checkmate',
          text: "11...Qh1#. The h5-rook protects the queen. The king has nowhere to go: the queen covers f1 and h2, the g3-pawn covers f2, and White's own pawn blocks g2.",
          arrows: [['h5', 'h1', 'red'], ['h1', 'f1', 'red']],
          marks: ['g1']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why the h-file is so dangerous',
      body:
        "After 7.hxg4 hxg4, three things happen at once. The h-file opens for Black's rook on h8. The g4-pawn attacks the f3-knight. And Black's queen can reach h4 in one move.\n\nThat leaves White with no good choice. If the knight runs away (8.Nxe5, 8.Ne1 or 8.Nd4), ...Qh4 starts a mating attack, and 8.Nh2 Qh4 is also very bad for White. If the knight stays, Black takes it, material is level, and Black keeps the open h-file. So 7.hxg4 doesn't really win a piece. It hands Black the better game."
    },
    {
      kind: 'walkthrough',
      title: 'The right way: leave the bishop alone',
      intro: 'White ignores the bait and simply develops.',
      moves: MAIN,
      start: 11,
      orientation: 'white',
      steps: {
        11: {
          title: 'The question is asked',
          text: '6.h3. White asks the bishop to decide. This is fine; the mistake only comes if White takes on g4 after ...h5.',
          arrows: [['h3', 'g4', 'red']]
        },
        12: {
          title: 'The bait',
          text: "6...h5. The bishop stays on g4. Now White's best plan is to leave it there.",
          marks: ['g4']
        },
        13: {
          title: 'Calm development',
          text: "7.d3. White protects e4 and opens the c1-bishop's diagonal. The h-file stays closed.",
          arrows: [['c1', 'g5', 'blue']],
          marks: ['e4']
        },
        14: {
          title: 'Pressure on f3',
          text: "7...Qf6. The queen guards e5 and adds a second attacker to f3. Black threatens ...Bxf3, and after Qxf3 Qxf3 gxf3 White's kingside pawns would be doubled.",
          arrows: [['f6', 'f3', 'red'], ['g4', 'f3', 'red']]
        },
        15: {
          title: 'Another defender',
          text: '8.Nbd2. Now if Black takes on f3, White recaptures with the knight and keeps a healthy pawn structure.',
          arrows: [['d2', 'f3', 'green']]
        },
        16: {
          title: 'The knight heads for g6',
          text: '8...Ne7. Black brings the last minor piece out, aiming for g6.',
          arrows: [['e7', 'g6', 'blue']]
        },
        17: {
          title: 'The rook to the center',
          text: '9.Re1. The rook joins the e-file and adds protection to e4.',
          arrows: [['e1', 'e4', 'green']]
        },
        18: {
          title: 'Still not taking',
          text: '9...Ng6. The knight eyes the f4-square, close to White\'s king. Even now, 10.hxg4 is considered dubious: after ...hxg4 the h-file opens again.',
          arrows: [['g6', 'f4', 'blue']],
          marks: ['g4']
        }
      }
    },
    {
      kind: 'warning',
      title: "Before you take a 'free' piece",
      body:
        "When a strong opponent leaves a piece hanging on purpose, stop and ask: what opens up if I take it? Here, taking on g4 opens the h-file in front of your own king. A piece is worth nothing if you get mated."
    }
  ],
  takeaway:
    'After 5...Bg4 6.h3 h5!, the bishop is poisoned: hxg4 hxg4 opens the h-file for Black\'s rook and queen. White should develop calmly with d3, Nbd2 and Re1 instead.',
  lookAhead:
    "Next: two more ways Black guards e5, the queen move 5...Qd6 and the bishop move 5...Bd6, and how White punishes a slip with e4-e5.",
  drills: [
    {
      title: 'Ignore the bait',
      prompt: "You're White. Black will pin your knight and then offer the bishop with ...h5. Play the calm main line.",
      moves: `${EXCHANGE} O-O Bg4 h3 h5 d3 Qf6 Nbd2 Ne7 Re1`,
      start: 9,
      side: 'white',
      hints: [
        'Ask the bishop with your h-pawn, then do not take it. Protect e4 with a pawn instead.',
        'When the queen hits f3 a second time, bring the b1-knight to a square that also defends f3. Then put a rook in the center.'
      ],
      success: '6.h3, 7.d3, 8.Nbd2 and 9.Re1. The h-file stays shut and your pieces are developed.'
    },
    {
      title: 'See the mate from the other side',
      prompt: "You're Black. White has taken the bishop and then grabbed e5 with 8.Nxe5??. Use the open h-file to deliver mate.",
      moves: TRAP,
      start: 15,
      side: 'black',
      hints: [
        'Your queen can join the rook on the h-file in one move.',
        'When White makes room with f4, push your g-pawn to take f2 and h2 away from the king.'
      ],
      success: '8...Qh4, 9...g3, 10...Rxh5 and 11...Qh1#. That is what White must avoid by never opening the h-file.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'White to move. Black has left the bishop on g4. What should White play?',
      moves: `${EXCHANGE} O-O Bg4 h3 h5`,
      orientation: 'white',
      choices: [
        { text: '7.d3', correct: true, why: 'Right. Protect e4, develop, and leave the bishop alone. The h-file stays closed.' },
        { text: '7.hxg4', why: 'After 7...hxg4 the h-file opens, the knight on f3 is attacked, and Black gets a strong attack.' },
        { text: '7.Nxe5', why: "The knight is pinned to your queen. 7...Bxd1 wins the queen." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 7.hxg4 hxg4, what has changed?',
      moves: `${EXCHANGE} O-O Bg4 h3 h5 hxg4 hxg4`,
      orientation: 'white',
      choices: [
        { text: 'The h-file is open for Black, and the f3-knight is attacked', correct: true, why: "Exactly. White's 'extra' piece is about to be lost, and the h8-rook aims at White's king." },
        { text: 'White is a clean piece up', why: 'The g4-pawn attacks the knight on f3, so White will lose a piece straight back.' },
        { text: "Black's king is now exposed", why: "Black's king is safe on e8. It is White's king that now faces an open file." }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White has just played 8.Nxe5??. What wins?',
      moves: `${EXCHANGE} O-O Bg4 h3 h5 hxg4 hxg4 Nxe5`,
      orientation: 'black',
      choices: [
        { text: '8...Qh4', correct: true, why: 'Yes. The queen joins the rook on the h-file and threatens mate on h2 and h1. White cannot hold.' },
        { text: '8...Bd6', why: 'It attacks the knight, but misses a forced mate. Look down the h-file.' },
        { text: '8...Qd4', why: 'The old fork idea hits e5 and e4, but there is something much stronger on the h-file.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the main line 7.d3 Qf6, why does White play 8.Nbd2?',
      moves: `${EXCHANGE} O-O Bg4 h3 h5 d3 Qf6`,
      orientation: 'white',
      choices: [
        { text: 'So that ...Bxf3 can be met by Nxf3, keeping the pawns healthy', correct: true, why: "Right. Without it, ...Bxf3 Qxf3 Qxf3 gxf3 would double White's f-pawns and spoil the kingside majority." },
        { text: 'To attack the bishop on g4', why: "A knight on d2 doesn't attack g4. Its job is to defend f3." },
        { text: 'To prepare Nxe5', why: 'The f3-knight is pinned to the queen, and e5 is guarded by the queen on f6. Nxe5 is not on the menu.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'White to move. Should White finally take the bishop with 10.hxg4?',
      moves: MAIN,
      orientation: 'white',
      choices: [
        { text: 'No. After ...hxg4 the h-file opens again, and the move is considered dubious', correct: true, why: 'Right. The bait is still poisoned. Keep the h-file closed.' },
        { text: 'Yes. It wins a piece for free', why: 'After 10...hxg4 the knight on f3 is attacked, so the piece comes straight back, and the h-file is open.' },
        { text: "Yes. Black's queen is too far away to attack", why: 'The queen on f6 is one move from the h-file, and the knight on g6 is close too.' }
      ]
    },
    {
      type: 'move',
      prompt: "White to move. Black's queen and bishop both hit f3. What's the most useful move?",
      moves: `${EXCHANGE} O-O Bg4 h3 h5 d3 Qf6`,
      orientation: 'white',
      choices: [
        { text: '8.Nbd2', correct: true, why: 'Yes. It develops and adds a defender to f3, so ...Bxf3 can be met by Nxf3.' },
        { text: '8.hxg4', why: 'This opens the h-file. After 8...hxg4 the f3-knight is attacked and Black has a dangerous attack.' },
        { text: '8.Nxe5', why: 'The knight is pinned to your queen, and the queen on f6 guards e5 too. 8...Bxd1 wins the queen.' }
      ]
    }
  ],
  key: { name: 'Exchange Variation: 5...Bg4 6.h3 h5!', moves: `${EXCHANGE} O-O Bg4 h3 h5`, orientation: 'white' },
  terms: [
    { term: 'Poisoned piece', meaning: 'A piece left hanging on purpose. Taking it costs more than it gains.' },
    { term: 'Relative pin', meaning: 'A pin against a piece other than the king, such as a knight pinned to its queen. The knight may move, but the queen behind it is then lost.' },
    { term: 'Mating net', meaning: "A position where the king's escape squares are all covered, so a check will be mate." }
  ]
})
