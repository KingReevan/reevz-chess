import { defineModule } from '../../../types'
import { BAYONET } from '../lines'

/** bayonet-9b4-a5 */
const A5 = `${BAYONET} a5 Ba3 axb4 Bxb4 Nd7 a4`
/** bayonet-10nxe5-trap */
const TRAP = `${BAYONET} Nh5 Nxe5 Bxe5`

export default defineModule({
  id: '4.7',
  title: 'Bayonet: 9...a5 and the 10.Nxe5?? trap',
  minutes: 10,
  level: 3,
  goals: [
    'Meet 9...a5, which hits the b4-pawn at once',
    'Know where the b4-bishop aims after 10.Ba3 axb4 11.Bxb4',
    'Never fall for 9...Nh5 10.Nxe5?? Bxe5!'
  ],
  intro:
    "The Bayonet pawn on b4 is White's spearhead, so Black often attacks it straight away with 9...a5. This module shows how White keeps the queenside play going against that. It also shows a tempting pawn grab after 9...Nh5 that simply loses a knight.",
  sections: [
    {
      kind: 'walkthrough',
      title: '9...a5: hitting the bayonet',
      intro: 'Watch the a-file and the b4-square.',
      moves: A5,
      start: 17,
      orientation: 'white',
      steps: {
        17: {
          title: 'The Bayonet again',
          text: '9.b4. White wants to support c4–c5 with the b-pawn.',
          arrows: [['b4', 'c5', 'green']]
        },
        18: {
          title: 'Hitting the pawn',
          text: "9...a5. Black attacks b4 at once, before White can use it. The engine rates this as Black's best move here.",
          arrows: [['a5', 'b4', 'red']]
        },
        19: {
          title: 'Holding b4',
          text: '10.Ba3. The bishop protects b4. 10.bxa5 is a good alternative, and the engine slightly prefers it.',
          arrows: [['a3', 'b4', 'green']]
        },
        20: {
          title: 'The rook hits a3',
          text: '10...axb4. Black takes, and now the a8-rook attacks the a3-bishop down the a-file.',
          arrows: [['a8', 'a3', 'red']]
        },
        21: {
          title: 'The bishop recaptures',
          text: '11.Bxb4. The bishop takes back and leaves the a-file. From b4 it aims at d6, a target once c4–c5 comes.',
          arrows: [['b4', 'd6', 'yellow']],
          marks: ['d6']
        },
        22: {
          title: "Black's usual plan",
          text: '11...Nd7. The knight frees the f-pawn for ...f5 and watches c5, so c4–c5 is harder to play.',
          arrows: [['d7', 'c5', 'green'], ['f7', 'f5', 'blue']]
        },
        23: {
          title: 'More space',
          text: '12.a4. The a-pawn heads for a5 to gain more queenside space, while Black gets ready for ...f5. The engine says White is a bit better.',
          arrows: [['a4', 'a5', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'What changed after 9...a5',
      body:
        "Black swapped the a-pawn for White's b-pawn. White has lost the pawn that was meant to support c5, but gets a bishop on b4 aimed at d6 and an a-pawn that can still advance.\n\nBlack frees the f-pawn with ...Nd7 instead of ...Nh5, so the ...Nf4 jump from Module 4.6 is not on the menu here."
    },
    {
      kind: 'walkthrough',
      title: 'The trap: 9...Nh5 10.Nxe5??',
      intro: 'A pawn grab that looks clever. Try to spot the flaw before you press Next.',
      moves: `${TRAP} Bxh5 gxh5 Qxh5`,
      start: 17,
      orientation: 'white',
      steps: {
        17: {
          title: 'The Bayonet',
          text: '9.b4. This time Black answers with the knight move from Module 4.5.',
          arrows: [['b4', 'c5', 'green']]
        },
        18: {
          title: 'A loose-looking knight',
          text: '9...Nh5. The knight on h5 is guarded only by the g6-pawn. If the f3-knight moves away, the e2-bishop will attack it.',
          arrows: [['e2', 'h5', 'yellow'], ['g6', 'h5', 'green']]
        },
        19: {
          title: 'The pawn grab',
          text: '10.Nxe5??. White grabs the e5-pawn, and the e2-bishop now attacks the h5-knight. White hopes to win a pawn and then pick up the knight as well.',
          arrows: [['e2', 'h5', 'red']],
          marks: ['e5'],
          ann: '??'
        },
        20: {
          title: 'Just take it',
          text: '10...Bxe5! Black simply takes the knight. The h5-knight is still guarded by the g6-pawn, so White has given a knight for one pawn.',
          arrows: [['g6', 'h5', 'green']],
          ann: '!'
        },
        21: {
          title: 'Trying to get it back',
          text: '11.Bxh5. White takes the knight, hoping to recover something.',
          marks: ['h5']
        },
        22: {
          title: 'Only a trade',
          text: '11...gxh5. Black takes back: Bxh5 was just bishop for knight. (11...Bxc3, hitting the a1-rook first, is even stronger.)',
          marks: ['h5']
        },
        23: {
          title: 'Two pawns for a piece',
          text: "12.Qxh5. White has two pawns for the piece, and Black's king looks a little open. But that is all White gets: the engine says Black is winning.",
          arrows: [['h5', 'h7', 'red']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'Why 10.Nxe5?? fails',
      body:
        "White's idea is a **discovered attack**: moving the f3-knight opens the e2-bishop's diagonal to h5. But the h5-knight is protected by the g6-pawn, so Bxh5 is only a trade, and White never gets the lost knight back.\n\n10...dxe5 also leaves Black a piece up for a pawn. 10...Bxe5! is even stronger: the bishop becomes very active on e5, aiming at c3."
    }
  ],
  takeaway:
    'Against 9...a5, 10.Ba3 axb4 11.Bxb4 keeps the bishop aimed at d6, and a2–a4 gains space. Against 9...Nh5, play 10.Re1: 10.Nxe5?? Bxe5! just loses a knight, because g6 guards h5.',
  lookAhead: "Next: White's other 9th moves, 9.Nd2, 9.Bd2 and 9.a4, which prepare the queenside play in different ways.",
  drills: [
    {
      title: 'Avoid the trap',
      prompt: "You're White. Black has just played 9...Nh5. The e5-pawn looks tempting. Play the main-line move instead.",
      moves: `${BAYONET} Nh5 Re1`,
      start: 18,
      side: 'white',
      hints: ['Taking on e5 loses a knight: the g6-pawn guards h5.', 'Free the f1-square for your bishop with a rook move.'],
      success: '10.Re1. The rook frees f1, so the bishop can retreat there if the knight jumps to f4.'
    },
    {
      title: 'Meet 9...a5',
      prompt: "You're White. Black has just taken on b4. Recapture, then gain space on the queenside.",
      moves: A5,
      start: 20,
      side: 'white',
      hints: ['The bishop on a3 is attacked by the a8-rook, and b4 is free to take back.', 'After ...Nd7, push the a-pawn two squares.'],
      success: '11.Bxb4 and 12.a4. The bishop eyes d6, and the a-pawn is ready to march.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'Black has just played 9...Nh5. Which of these moves loses a piece?',
      moves: `${BAYONET} Nh5`,
      orientation: 'white',
      choices: [
        { text: '10.Nxe5', correct: true, why: 'Right. After 10...Bxe5 the h5-knight is still guarded by g6, so White has given a knight for a pawn.' },
        { text: '10.Re1', why: 'This is the main line (Module 4.5). It frees f1 for the bishop and loses nothing.' },
        { text: '10.g3', why: 'A sound move that keeps the knight out of f4. It loses nothing.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 10.Nxe5?? Bxe5, why can\'t White win the piece back with 11.Bxh5?',
      moves: TRAP,
      orientation: 'white',
      choices: [
        { text: 'The g6-pawn guards h5, so 11...gxh5 makes it just a bishop-for-knight trade', correct: true, why: 'Right. White stays a piece down for a pawn (or two after Qxh5).' },
        { text: 'Bxh5 is illegal here', why: 'It is legal: the f3-knight has moved, so the bishop sees h5. It simply does not win anything.' },
        { text: 'The knight escapes first', why: "It is White's move, so the knight can't escape. The problem is the g6-pawn guarding h5." }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 9...a5 10.Ba3 axb4 11.Bxb4, what does the bishop on b4 aim at?',
      moves: `${BAYONET} a5 Ba3 axb4 Bxb4`,
      orientation: 'white',
      choices: [
        { text: 'The d6-pawn', correct: true, why: 'Right. Along the b4–f8 diagonal, d6 is the target, especially after c4–c5.' },
        { text: 'The e7-knight', why: 'The d6-pawn stands in the way, so the bishop does not reach e7.' },
        { text: "Black's king", why: 'The king is on g8, far from the bishop. The target is d6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does Black play 9...a5 against the Bayonet?',
      moves: `${BAYONET} a5`,
      orientation: 'white',
      choices: [
        { text: 'To attack the b4-pawn before it can support c4–c5', correct: true, why: 'Right. Black weakens White\'s queenside play before it gets going.' },
        { text: 'To win the b4-pawn by force', why: 'White can defend b4 or trade it off. Black does not win a pawn; the point is to blunt White\'s plan.' },
        { text: "To open the c-file for Black's rook", why: '...a5 leads to play on the a-file, not the c-file.' }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'Why is 10.Nxe5?? a blunder after 9.b4 Nh5?',
      moves: `${BAYONET} Nh5 Nxe5`,
      orientation: 'white',
      choices: [
        { text: 'After 10...Bxe5, White has given a knight for a pawn', correct: true, why: 'Right. The discovered attack on h5 does not work, because g6 guards the knight.' },
        { text: 'It walks into a pin on the e-file', why: 'There is no pin. White simply loses the knight on e5.' },
        { text: 'It allows a quick mate', why: "There is no mate. White is just a piece down, which is more than enough to lose." }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the 9...a5 line, what is 11...Nd7 for?',
      moves: `${BAYONET} a5 Ba3 axb4 Bxb4 Nd7`,
      orientation: 'white',
      choices: [
        { text: 'It frees the f-pawn for ...f5 and watches c5', correct: true, why: "Right. It is Black's usual knight move: kingside play with ...f5, and a guard on c5." },
        { text: "It blocks the d-file against White's rook", why: 'There is no white rook on the d-file. The knight frees the f-pawn and watches c5.' },
        { text: 'It prepares ...Nf4 as in Module 4.6', why: 'The ...Nf4 jump comes from h5, not d7. Here the knight is on its way to support ...f5 and c5.' }
      ]
    }
  ],
  key: { name: 'Bayonet trap: 9...Nh5 10.Nxe5?? Bxe5!', moves: TRAP, orientation: 'white' },
  terms: [
    { term: 'Discovered attack', meaning: 'Moving one piece opens a line for another piece behind it, creating a new attack.' },
    { term: 'Blunder', meaning: 'A move that loses material or the game outright. It is marked ??.' },
    { term: 'Trade', meaning: 'Giving up a piece for one of about the same value, for example a bishop for a knight.' }
  ]
})
