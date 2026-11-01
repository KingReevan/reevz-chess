import { defineModule } from '../../../types'
import { SAMISCH } from '../lines'

/** 7.d5 Nh5 8.Qd2 Qh4+ (from samisch-7d5-nh5) */
const CHECK = `${SAMISCH} e5 d5 Nh5 Qd2 Qh4+`
/** samisch-bronstein-sac: 9.g3 Nxg3 10.Qf2 Nxf1 11.Qxh4 Nxe3 12.Ke2 Nxc4 */
const BRONSTEIN = `${CHECK} g3 Nxg3 Qf2 Nxf1 Qxh4 Nxe3 Ke2 Nxc4`
/** The wrong recapture 10.hxg3?, then the engine's best line */
const WRONG = `${CHECK} g3 Nxg3 hxg3 Qxh1 O-O-O Na6 Bg2 Qh2`

export default defineModule({
  id: '6.4',
  title: 'The Bronstein queen sacrifice',
  minutes: 10,
  level: 3,
  goals: [
    'Know the line 8...Qh4+ 9.g3 Nxg3 and White\'s only good answer, 10.Qf2',
    'Count what Black gets for the queen',
    'Judge a sacrifice honestly: spectacular is not the same as sound'
  ],
  intro:
    "In Module 6.3, Karpov blocked the check with 9.g3 and Kasparov quietly retreated. But Black has a wild alternative: 9...Nxg3, giving up the queen. It looks crushing, and you may read that it refutes 9.g3. Does it? This module plays it through, counts the material, and gives the engine's honest verdict.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The sacrifice, move by move',
      intro: 'Keep a running count: pawn 1, knight or bishop 3, rook 5, queen 9.',
      moves: BRONSTEIN,
      start: 15,
      orientation: 'black',
      steps: {
        15: {
          title: 'Ready to check',
          text: '8.Qd2. The position from Module 6.3. The f-pawn has left f2, so the diagonal from h4 to e1 is open.',
          arrows: [['d8', 'h4', 'blue']]
        },
        16: {
          title: 'The check',
          text: '8...Qh4+. Black checks along the open diagonal. White usually blocks it.',
          arrows: [['h4', 'e1', 'red']]
        },
        17: {
          title: 'The pawn blocks',
          text: "9.g3. The engine's top choice. The pawn blocks the check and attacks the queen at the same time.",
          arrows: [['g3', 'h4', 'red']]
        },
        18: {
          title: 'The knight takes',
          text: "9...Nxg3. Bronstein's idea. The knight takes the pawn and hits the rook on h1 and the bishop on f1. If 10.hxg3, the queen takes the rook on h1.",
          arrows: [['g3', 'h1', 'red'], ['g3', 'f1', 'red']],
          ann: '!?'
        },
        19: {
          title: 'The only good move',
          text: "10.Qf2. The queen attacks the knight, and the knight is pinned: if it moves, White's queen takes Black's queen on h4. Every other move is bad for White.",
          arrows: [['f2', 'g3', 'red'], ['g3', 'h4', 'yellow']],
          ann: '!'
        },
        20: {
          title: 'The queen is given up',
          text: '10...Nxf1. Black lets the queen go and grabs the bishop on f1. Count: so far Black has taken a pawn and a bishop.',
          marks: ['f1']
        },
        21: {
          title: 'White takes the queen',
          text: '11.Qxh4. White takes the queen. This is the only good move: anything else is bad for White.',
          marks: ['h4']
        },
        22: {
          title: 'The second bishop',
          text: '11...Nxe3. The knight takes the other bishop. Black has two bishops and a pawn for the queen.',
          marks: ['e3']
        },
        23: {
          title: 'The king attacks',
          text: '12.Ke2. The king attacks the knight on e3. White can castle no more. The engine prefers 12.Qf2, but both keep White better.',
          arrows: [['e2', 'e3', 'red']]
        },
        24: {
          title: 'One more pawn',
          text: '12...Nxc4. The knight escapes and takes a second pawn. Final count: Black has two bishops and two pawns for the queen. The engine says White is somewhat better.',
          marks: ['c4']
        }
      }
    },
    {
      kind: 'text',
      title: 'Counting the material',
      body:
        "Use the usual points: pawn 1, knight or bishop 3, rook 5, queen 9.\n\nBlack gave the queen (9) and got two bishops and two pawns (3 + 3 + 1 + 1 = 8). On points, Black is one short.\n\nThen ask what else each side has. Black's pieces are active and White's king is stuck on e2. But White's queen is free to roam, White's rooks will come into play, and Black has no attack that wins anything at once. The engine weighs it all and says White stays somewhat better.\n\n**The lesson:** count first, then ask what you get for the missing points. A sacrifice is sound only if the activity you get is worth at least the material you gave."
    },
    {
      kind: 'walkthrough',
      title: 'The wrong recapture: 10.hxg3?',
      intro: 'If White takes the knight with the h-pawn, Bronstein\'s idea works. Watch the h-file.',
      moves: WRONG,
      start: 17,
      orientation: 'white',
      steps: {
        17: {
          title: 'After 9.g3',
          text: '9.g3. The pawn blocks the check and attacks the queen.',
          arrows: [['g3', 'h4', 'red']]
        },
        18: {
          title: 'The knight takes',
          text: '9...Nxg3. The knight takes the pawn and attacks the rook on h1.',
          arrows: [['g3', 'h1', 'red']]
        },
        19: {
          title: 'The natural mistake',
          text: '10.hxg3. White takes the knight. But the h-pawn has left h2, and now the h-file is open from h4 to h1.',
          arrows: [['h4', 'h1', 'red']],
          ann: '?'
        },
        20: {
          title: 'The rook falls',
          text: '10...Qxh1. The only good move: the queen takes the rook. Black has a rook and a pawn for the knight, and the engine says Black is clearly better.',
          marks: ['h1']
        },
        21: {
          title: 'White castles',
          text: '11.O-O-O. White gets the king to safety and hopes to trap the queen in the corner.'
        },
        22: {
          title: 'Black develops',
          text: '11...Na6. Black brings out another piece and lets White try.'
        },
        23: {
          title: 'Attacking the queen',
          text: '12.Bg2. The bishop attacks the queen on h1.',
          arrows: [['g2', 'h1', 'red']]
        },
        24: {
          title: 'The queen escapes',
          text: '12...Qh2. The best escape. The queen is out, and Black keeps the extra material.',
          arrows: [['h1', 'h2', 'green']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'Folklore check',
      body:
        "You may read that Bronstein's sacrifice punishes 9.g3. It doesn't. After 10.Qf2! White stays better, and 9.g3 is White's best answer to the check. The engine rates the sacrifice only a little worse than the quiet 9...Qe7, so it is not a blunder either. It is a fun line to know, not a trap that White must fear. Only 10.hxg3? or 10.Bf2? would let it work."
    }
  ],
  takeaway:
    "Against 9.g3, the queen sacrifice 9...Nxg3 is spectacular but doesn't refute anything: after 10.Qf2! and 11.Qxh4, Black has two bishops and two pawns for the queen and White stays somewhat better. Always count the material before you trust a sacrifice.",
  lookAhead:
    'Module 6.5 looks at 7.Nge2, where White keeps the central tension instead of closing it with 7.d5.',
  drills: [
    {
      title: 'Meet the sacrifice',
      prompt: "You're White. Black has just played 9...Nxg3!?. Find the only good move, then take what Black offers.",
      moves: `${CHECK} g3 Nxg3 Qf2 Nxf1 Qxh4`,
      start: 18,
      side: 'white',
      hints: [
        "Don't take the knight with the h-pawn: look along the h-file.",
        'Which queen move attacks the knight and puts it in a pin against the queen on h4?'
      ],
      success: '10.Qf2! pins the knight. After 10...Nxf1 11.Qxh4, White has the queen for two bishops and a pawn so far.'
    },
    {
      title: "Play Bronstein's line",
      prompt: "You're Black. White has blocked the check with 9.g3. Play the queen sacrifice and collect as much as you can.",
      moves: `${CHECK} g3 Nxg3 Qf2 Nxf1 Qxh4 Nxe3`,
      start: 17,
      side: 'black',
      hints: [
        'The g3-pawn can be taken by your knight.',
        'Once the queen is gone, the knight takes both white bishops.'
      ],
      success: '9...Nxg3, 10...Nxf1 and 11...Nxe3. Two bishops and a pawn for the queen so far. Remember the verdict: White is still better.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'White to move. Black has just played 9...Nxg3. What is White\'s best move?',
      moves: `${CHECK} g3 Nxg3`,
      orientation: 'white',
      choices: [
        { text: '10.Qf2', correct: true, why: 'Right. The queen attacks the knight, which is pinned against the black queen on h4. White stays better.' },
        { text: '10.hxg3', why: 'This clears the h-file from h4 to h1: 10...Qxh1 takes the rook, and Black is clearly better.' },
        { text: '10.Bf2', why: 'The bishop attacks the knight, but 10...Nxf1 grabs the other bishop first. After 11.Kxf1 Black is a pawn up with a clearly better game.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does 10.Qf2 work?',
      choices: [
        { text: "The knight on g3 is pinned: if it moves, White's queen takes the queen on h4", correct: true, why: 'Exactly. Black can still play 10...Nxf1, but only by giving up the queen.' },
        { text: 'It defends the rook on h1', why: 'A queen on f2 does not guard h1. The point is the attack on the g3-knight.' },
        { text: 'It threatens mate on f7', why: "The f3-pawn blocks the f-file, so there's no threat on f7." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 12.Ke2 Nxc4, what does Black have for the queen?',
      moves: BRONSTEIN,
      orientation: 'black',
      choices: [
        { text: 'Two bishops and two pawns', correct: true, why: 'Right: 3 + 3 + 1 + 1 = 8 points for the queen\'s 9. Black is a little short.' },
        { text: 'A rook and a bishop', why: 'No rook was taken. The knight took the g3-pawn, both bishops and the c4-pawn.' },
        { text: 'Two bishops only', why: 'Count again: the knight also took the g3-pawn and the c4-pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: "What is the engine's verdict on the Bronstein sacrifice?",
      choices: [
        { text: 'White stays somewhat better: it does not refute 9.g3', correct: true, why: 'Right. It is spectacular and playable, but 9.g3 is still a good move.' },
        { text: 'Black wins by force', why: 'That is the folklore. After 10.Qf2! and 11.Qxh4, White is better.' },
        { text: 'It is a blunder that loses at once', why: 'Not that either. The engine rates it only a little worse than 9...Qe7. White is better in both lines.' }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'White has just played 10.hxg3?. Black to move. What should Black play?',
      moves: `${CHECK} g3 Nxg3 hxg3`,
      orientation: 'black',
      choices: [
        { text: '10...Qxh1', correct: true, why: 'Right. The h-file is open, so the queen takes the rook. Black has a rook and a pawn for the knight.' },
        { text: '10...Qxg3+', why: "It gives check and takes a pawn, but the rook on h1 survives. Black has given a knight for two pawns, and White is winning." },
        { text: '10...Qe7', why: 'Retreating leaves Black a knight down for a pawn. The point of ...Nxg3 was to win the rook.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'With pawn 1, bishop 3 and queen 9, how does the material count look at the end of the Bronstein line?',
      choices: [
        { text: 'Black has 8 points for 9: a little short', correct: true, why: 'Right. Two bishops and two pawns for the queen. The rest of the position must make up the difference, and here it does not quite.' },
        { text: 'Black has 10 points for 9: a little ahead', why: 'Count again: 3 + 3 + 1 + 1 = 8.' },
        { text: 'Black has 6 points for 9: far behind', why: "Don't forget the two pawns: g3 and c4." }
      ]
    }
  ],
  key: { name: 'Bronstein queen sacrifice: 9.g3 Nxg3', moves: `${CHECK} g3 Nxg3`, orientation: 'black' },
  terms: [
    { term: 'Sacrifice', meaning: 'Giving up material on purpose to get something else, such as an attack, time or a better position.' },
    { term: 'Material count', meaning: 'Adding up the pieces: pawn 1, knight 3, bishop 3, rook 5, queen 9. A quick first check of who is ahead.' },
    { term: 'Compensation', meaning: 'What you get in return for sacrificed material, such as active pieces or an exposed enemy king.' }
  ]
})
