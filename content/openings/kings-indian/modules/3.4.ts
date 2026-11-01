import { defineModule } from '../../../types'
import { MAIN, MDP_G5 } from '../lines'

/** mdp-13nd3 */
const TOUR = `${MDP_G5} Nd3 Nf6 c5 Ng6 Rc1 Rf7`
/** mdp-10nd3: the old c4–c5 race */
const RACE = `${MAIN} Ne1 Nd7 Nd3 f5 Bd2 Nf6 f3 f4 c5 g5 Rc1 Ng6 cxd6 cxd6 Nb5 Rf7 Qc2 Ne8 a4 h5 Nf2 Bf8 h3`
/** mdp-nb5-c7-trap */
const C7_TRAP = `${MAIN} Ne1 Nd7 Nd3 f5 Bd2 Nf6 f3 f4 c5 g5 Rc1 Ng6 cxd6 cxd6 Nb5 a6 Nc7`

export default defineModule({
  id: '3.4',
  title: "Black's piece tour: ...Ng6, ...Rf7, ...Bf8, ...h5",
  minutes: 12,
  level: 2,
  goals: [
    'Learn the job of each move: ...Nf6, ...Ng6, ...Rf7, ...Bf8 and ...h5',
    "See how ...Rf7 and ...Ne8 guard c7 against White's c-file attack",
    'Recognize when Black is ready for ...g4'
  ],
  intro:
    "After 12...g5 Black's pawns are ready, but the pieces are still at home. Before ...g4 can work, every piece needs a job: some join the attack, others hold off White's queenside break. This module follows the tour, one piece at a time.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The tour begins',
      intro: 'Follow the black pieces. Each move has a job.',
      moves: TOUR,
      start: 24,
      orientation: 'black',
      steps: {
        24: {
          title: 'Pawns ready, pieces not',
          text: "The position after 12...g5. Black's pawns have gained space, but the knights on d7 and e7 and the rook on f8 have no work yet.",
          marks: ['d7', 'e7', 'f8']
        },
        25: {
          title: "White's knight arrives",
          text: '13.Nd3. The knight reaches d3 to back up c4–c5.',
          arrows: [['d3', 'c5', 'green']]
        },
        26: {
          title: 'Back to f6',
          text: '13...Nf6. The d7-knight returns to f6, now that the f-pawn has moved on. From f6 it supports ...g4 and eyes e4 and h5.',
          arrows: [['f6', 'g4', 'green'], ['f6', 'e4', 'blue']]
        },
        27: {
          title: "White's lever",
          text: "14.c5. White's pawn hits d6, the base of Black's pawn chain. This is White's version of Black's ...g4.",
          arrows: [['c5', 'd6', 'red']]
        },
        28: {
          title: 'The knight swings over',
          text: "14...Ng6. The e7-knight joins the kingside. On g6 it guards the f4-pawn and can jump to h4, close to White's king.",
          arrows: [['g6', 'h4', 'blue'], ['g6', 'f4', 'green']]
        },
        29: {
          title: 'Rook to the c-file',
          text: "15.Rc1. White's rook gets ready for cxd6, which will open the c-file. Once the c3-knight moves, the rook will look straight down the file toward c7.",
          marks: ['c3', 'c7']
        },
        30: {
          title: 'The rook steps up',
          text: '15...Rf7. From f7 the rook guards c7 along the seventh rank. Later it can swing to g7 to back up ...g4.',
          arrows: [['f7', 'c7', 'green'], ['f7', 'g7', 'blue']],
          ann: '!'
        }
      }
    },
    {
      kind: 'text',
      title: 'Why ...Rf7 is not passive',
      body:
        "With the f-pawn on f4, the f-file is closed, so the rook has nothing to do on f8. On f7 it does two jobs. It guards **c7**, the square White's knight and rooks want to land on once the c-file opens. And it can slide to g7, behind the g-pawn, when Black is ready for ...g4.\n\nThe same idea explains ...Ne8 and ...Bf8. They look like retreats, but they guard c7 and d6, the targets of White's queenside attack. Black defends with as few pieces as possible, and attacks with the rest."
    },
    {
      kind: 'walkthrough',
      title: 'Guard c7, then prepare ...g4',
      intro: 'A different move order (10.Nd3, with the bishop on d2). Here White opens the c-file, and every black move answers a threat or gets ready for ...g4.',
      moves: RACE,
      start: 28,
      orientation: 'black',
      steps: {
        28: {
          title: 'A similar picture',
          text: "White's pawn is already on c5 and the rook on c1. Black has ...g5 and ...Ng6 in. White's bishop is on d2 in this line.",
          arrows: [['c5', 'd6', 'red']]
        },
        29: {
          title: 'The c-file opens',
          text: '15.cxd6. White takes on d6 to open the c-file.',
          marks: ['d6']
        },
        30: {
          title: 'A hole on c7',
          text: '15...cxd6. Black takes back. Now c7 is an empty square on the open c-file, and White wants to land a piece there.',
          marks: ['c7']
        },
        31: {
          title: 'The knight eyes c7',
          text: '16.Nb5. The knight is one jump from c7, where it would hit the a8-rook. Moving it also clears the c-file for the c1-rook.',
          arrows: [['b5', 'c7', 'red'], ['c1', 'c7', 'red']]
        },
        32: {
          title: 'Guard the entry square',
          text: '16...Rf7. The rook guards c7 along the seventh rank. The same move as before, and here it is urgent.',
          arrows: [['f7', 'c7', 'green']],
          ann: '!'
        },
        33: {
          title: 'A second attacker',
          text: '17.Qc2. The queen joins the c-file, with the rook behind it. Now the b5-knight, the queen and the rook all aim at c7.',
          arrows: [['c2', 'c7', 'red']]
        },
        34: {
          title: 'A second defender',
          text: '17...Ne8. The knight drops back to guard c7 and d6. Now c7 has as many defenders as attackers: a queen, a rook and a knight on each side.',
          arrows: [['e8', 'c7', 'green'], ['e8', 'd6', 'green']]
        },
        35: {
          title: 'Support for the knight',
          text: '18.a4. The a-pawn supports the b5-knight and gains queenside space.',
          arrows: [['a4', 'b5', 'green']]
        },
        36: {
          title: 'Back to the attack',
          text: '18...h5. The queenside is safe for now, so Black turns to the kingside. The h-pawn will support ...g4.',
          arrows: [['h5', 'g4', 'green'], ['g5', 'g4', 'green']]
        },
        37: {
          title: 'White guards g4',
          text: '19.Nf2. The knight comes back to guard g4 and h3, the squares Black is aiming at.',
          arrows: [['f2', 'g4', 'green']]
        },
        38: {
          title: 'A new job for the bishop',
          text: "19...Bf8. On g7 the bishop was blocked by Black's own e5-pawn. On f8 it guards d6, and it clears g7 for the rook.",
          arrows: [['f8', 'd6', 'green'], ['f7', 'g7', 'blue']]
        },
        39: {
          title: 'Both sides set',
          text: '20.h3. A third guard on g4. Both sides have finished setting up, and the engine calls the position equal. Next, Black looks for a way to force ...g4 anyway (Module 3.5).',
          arrows: [['h3', 'g4', 'green']],
          marks: ['g4']
        }
      }
    },
    {
      kind: 'warning',
      title: "Don't forget c7",
      body:
        "In the second walkthrough, 16...a6? looks natural: it attacks the b5-knight. But 17.Nc7! jumps in and hits the a8-rook. The knight can't be taken: 17...Qxc7 18.Rxc7 just loses the queen for a knight, because the c1-rook guards c7. White is much better. Module 4.3 shows this trap from White's side."
    }
  ],
  takeaway:
    "Each black piece has a job: ...Nf6 supports ...g4, ...Ng6 guards f4 and eyes h4, ...Rf7 guards c7 and can go to g7, ...Bf8 guards d6, and ...h5 backs up ...g4. Defend c7 first, then attack.",
  lookAhead: 'Next: the payoff. How Black forces the ...g4 break, in Taimanov–Najdorf, Zurich 1953.',
  drills: [
    {
      title: 'The tour from memory',
      prompt: "You're Black, after 12...g5. Bring your pieces into play: knight back to f6, the other knight to g6, then the rook up to guard c7.",
      moves: TOUR,
      start: 24,
      side: 'black',
      hints: [
        'The d7-knight can go back to f6, now that the f-pawn has moved.',
        'Next the e7-knight heads for the kingside, and then the f8-rook steps up one square.'
      ],
      success: '13...Nf6, 14...Ng6 and 15...Rf7. Every piece has a job, and c7 is guarded.'
    },
    {
      title: 'Guard c7, then attack',
      prompt: "You're Black. White's knight has reached b5 and eyes c7. Defend c7, add a second defender when the queen arrives, then get ready for ...g4.",
      moves: RACE.split(' ').slice(0, 36).join(' '),
      start: 31,
      side: 'black',
      hints: [
        'Which rook can slide along the seventh rank to guard c7?',
        'Against the queen, a knight can step back to guard c7 and d6. When the queenside is safe, push a kingside pawn.'
      ],
      success: '16...Rf7, 17...Ne8 and 18...h5. Two defenders on c7, and ...g4 is getting closer.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does Black play ...Rf7 in the Mar del Plata?',
      moves: TOUR,
      orientation: 'black',
      choices: [
        { text: 'To guard c7 along the seventh rank, and to swing to g7 later', correct: true, why: 'Right. Defense on the queenside and support for ...g4, from one square.' },
        { text: 'To double rooks on the f-file', why: 'The f4-pawn closes the f-file, so doubling there does little.' },
        { text: "To attack White's f3-pawn", why: "The rook can't reach f3 through Black's own f4-pawn. Its jobs are guarding c7 and going to g7." }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does ...Bf8 do in the Mar del Plata?',
      choices: [
        { text: 'It guards d6 and clears g7 for the rook', correct: true, why: "Yes. The bishop was blocked by Black's own e5-pawn on g7. On f8 it defends." },
        { text: "It attacks White's b2-pawn", why: 'The bishop leaves the long diagonal. On f8 its job is defense.' },
        { text: "It gets ready to take White's knight on c3", why: "From f8 the bishop does not even attack c3. ...Bf8 is about guarding d6." }
      ]
    },
    {
      type: 'move',
      prompt: "Black to move. White's knight eyes c7. What should Black play?",
      moves: RACE.split(' ').slice(0, 31).join(' '),
      orientation: 'black',
      choices: [
        { text: '16...Rf7', correct: true, why: 'Right. The rook guards c7 along the seventh rank. It is the engine\'s first choice.' },
        { text: '16...a6', why: '17.Nc7! hits the a8-rook, and the knight can\'t be taken because the c1-rook guards it. White is much better.' },
        { text: '16...g4', why: 'Too early. Only the queen guards c7, and the engine prefers White after it. Defend first, then attack.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does Black often play ...h5 before ...g4?',
      choices: [
        { text: 'So the h-pawn supports ...g4, even when White guards g4 several times', correct: true, why: 'Right. White guards g4 with f3, a knight on f2 and h3. Black needs extra support to force the push.' },
        { text: "To give Black's king an escape square on h7", why: "The king already has h8. ...h5 is about the attack, not the king's safety." },
        { text: 'To trade the h-pawn for a queenside pawn', why: 'The h-pawn works on the kingside. Its job is to back up ...g4.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: "On g6, what does Black's knight do?",
      moves: TOUR,
      orientation: 'black',
      choices: [
        { text: "It guards f4 and can jump to h4, close to White's king", correct: true, why: 'Right. It supports the pawn wedge and gets close to the king.' },
        { text: "It attacks White's e4-pawn", why: 'A knight on g6 reaches e5, e7, f4, f8, h4 and h8. Not e4.' },
        { text: 'It guards c7', why: "It's far from c7. The f7-rook and a knight on e8 do that job." }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black played 16...a6? and White jumped to c7. Why can\'t Black just take the knight with the queen?',
      moves: C7_TRAP,
      orientation: 'black',
      choices: [
        { text: '17...Qxc7 18.Rxc7 wins the queen for a knight', correct: true, why: 'Right. The c1-rook guards c7. Guard c7 with ...Rf7 before it comes to this.' },
        { text: 'Black can: 17...Qxc7 wins a piece', why: 'Look down the c-file. The c1-rook takes back, and Black has lost the queen for a knight.' },
        { text: "The queen is pinned to Black's king", why: "Nothing pins the queen. The problem is that the c1-rook guards c7." }
      ]
    }
  ],
  key: { name: 'Mar del Plata: the piece tour (13...Nf6, 14...Ng6, 15...Rf7)', moves: TOUR, orientation: 'black' },
  terms: [
    { term: 'Seventh rank', meaning: "The rank where Black's pawns start. A black rook there can slide sideways to guard squares like c7." },
    { term: 'Bad bishop', meaning: 'A bishop blocked by its own pawns standing on its color, like the g7-bishop behind e5 and d6.' },
    { term: 'Entry square', meaning: 'A square in your camp that enemy pieces want to land on. Here c7 is White\'s entry square.' }
  ]
})
