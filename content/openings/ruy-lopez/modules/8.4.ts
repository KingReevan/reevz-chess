import { defineModule } from '../../../types'
import { RUY } from '../../../lines'

const MAIN = `${RUY} Nd4 Nxd4 exd4 O-O Bc5 d3 c6 Bc4 Nf6 Re1 d6`
const GRAB = `${RUY} Nd4 Nxe5 Nxb5 Qh5 Qe7`

export default defineModule({
  id: '8.4',
  title: "Bird's Defense: 3...Nd4",
  minutes: 9,
  level: 2,
  goals: [
    "Understand Black's idea: trade knights and plant a pawn on d4",
    "Know White's calm answer and the plan against the d4-wedge",
    'Punish 4.Nxe5? by taking the loose bishop'
  ],
  intro:
    "3...Nd4 breaks a basic opening rule: it moves the same piece twice. But it has a point. Black offers to swap knights, and after the trade a black pawn lands on d4. Is that pawn a strength or a weakness?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main line: a wedge on d4',
      intro: "Follow the pawn that ends up on d4. Everything in this line is about it.",
      moves: MAIN,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The Spanish position',
          text: 'The b5-bishop attacks the c6-knight, the guard of e5. Bird\'s Defence answers by moving that knight forward.',
          arrows: [['b5', 'c6', 'red']]
        },
        6: {
          title: 'The knight jumps',
          text: '3...Nd4. The knight attacks the b5-bishop and offers a trade on f3. The e5-pawn guards it.',
          arrows: [['d4', 'b5', 'red'], ['d4', 'f3', 'red'], ['e5', 'd4', 'green']]
        },
        7: {
          title: 'White trades',
          text: '4.Nxd4. The usual answer. It removes the attacker of b5 and gets rid of the strong knight.',
          marks: ['d4']
        },
        8: {
          title: 'The wedge',
          text: "4...exd4. Black takes back with the e-pawn. Black now has doubled d-pawns, but the pawn on d4 takes c3 and e3 away from White's pieces and pawns.",
          arrows: [['d4', 'c3', 'yellow'], ['d4', 'e3', 'yellow']],
          marks: ['d4']
        },
        9: {
          title: 'King first',
          text: '5.O-O. White castles. There is no hurry: Black has spent two moves on a knight that is now gone.'
        },
        10: {
          title: 'Guard the wedge',
          text: "5...Bc5. The bishop protects the d4-pawn. It doesn't reach f2, because its own pawn on d4 is in the way.",
          arrows: [['c5', 'd4', 'green']]
        },
        11: {
          title: 'A solid centre',
          text: "6.d3. White supports e4 and opens the c1-bishop's diagonal. Calm, simple development.",
          arrows: [['d3', 'e4', 'green'], ['c1', 'g5', 'blue']]
        },
        12: {
          title: 'Kick the bishop',
          text: '6...c6. The pawn attacks the b5-bishop and also covers d5, ready for ...d5 later.',
          arrows: [['c6', 'b5', 'red'], ['c6', 'd5', 'blue']]
        },
        13: {
          title: 'A better diagonal',
          text: '7.Bc4. The bishop moves to the diagonal that points at f7, the weakest point near Black\'s king.',
          arrows: [['c4', 'f7', 'yellow']]
        },
        14: {
          title: 'Develop and hit e4',
          text: '7...Nf6. The knight develops and attacks e4.',
          arrows: [['f6', 'e4', 'red']]
        },
        15: {
          title: 'The rook guards e4',
          text: '8.Re1. Now e4 is defended twice, by the d3-pawn and the rook.',
          arrows: [['e1', 'e4', 'green'], ['d3', 'e4', 'green']]
        },
        16: {
          title: 'Ready to castle',
          text: '8...d6. Black frees the c8-bishop and gets ready to castle. White is slightly better: Black is solid, but the doubled pawns and lost time count.',
          arrows: [['c8', 'g4', 'blue'], ['e8', 'g8', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Strength or weakness?',
      body:
        "The pawn on d4 is both. It **cramps** White: c3 and e3 are covered, so White's usual c3 and d4 centre is harder to build, and a knight on c3 would just be taken.\n\nThe cost is real too. Black has moved one knight twice and then traded it, and the d-pawns are doubled. White's plan is simple: castle, play d3, put the bishop on c4 or b3, and later challenge the wedge with c3 or expand with f4."
    },
    {
      kind: 'walkthrough',
      title: 'The pawn grab that loses a piece',
      intro: "3...Nd4 comes with a threat. Here is what happens if White doesn't notice it.",
      moves: GRAB,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'A threat on b5',
          text: '3...Nd4. The knight attacks the b5-bishop, and nothing guards that bishop.',
          arrows: [['d4', 'b5', 'red']],
          marks: ['b5']
        },
        7: {
          title: 'The greedy grab',
          text: '4.Nxe5. White takes a pawn but leaves the bishop hanging.',
          marks: ['b5'],
          ann: '?'
        },
        8: {
          title: 'Take the bishop',
          text: '4...Nxb5. Black wins the bishop. Black is now a piece for a pawn ahead.',
          ann: '!'
        },
        9: {
          title: "White's last trick",
          text: "5.Qh5. The queen and the e5-knight both attack f7. If Black ignores it, Qxf7 is checkmate.",
          arrows: [['h5', 'f7', 'red'], ['e5', 'f7', 'red']],
          marks: ['f7']
        },
        10: {
          title: 'Guard f7, hit back',
          text: '5...Qe7. The queen defends f7 and attacks the e5-knight. The mate threat is gone, and Black stays a piece for a pawn up.',
          arrows: [['e7', 'f7', 'green'], ['e7', 'e5', 'red']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Count what is hanging',
      body:
        "After every move, ask: what does this piece attack now? 3...Nd4 attacks b5, so White must answer the threat, usually with 4.Nxd4. When you are Black and White ignores it, take the free piece, but then check for mate threats on f7."
    }
  ],
  takeaway:
    "Bird's Defence trades knights to plant a pawn on d4 that cramps White. White answers 4.Nxd4 exd4 and develops calmly with O-O, d3 and Bc4, keeping a slight edge. Never meet 3...Nd4 with 4.Nxe5?, because the b5-bishop hangs.",
  lookAhead:
    'Next: 3...d6, the Old Steinitz, and a famous trap that cost a master the exchange in 1892.',
  drills: [
    {
      title: 'Play the Bird',
      prompt: "You're Black. Play Bird's Defence and the main line up to 8...d6.",
      moves: MAIN,
      start: 5,
      side: 'black',
      hints: [
        'Jump the c6-knight forward, take back with the e-pawn, then guard d4 with your dark-squared bishop.',
        'Kick the b5-bishop with the c-pawn, develop the g8-knight, then free your c8-bishop with a d-pawn move.'
      ],
      success: '3...Nd4, 4...exd4, 5...Bc5, 6...c6, 7...Nf6 and 8...d6. A solid wedge on d4 and an easy position to play.'
    },
    {
      title: 'Find the tactic',
      prompt: "You're Black. White just grabbed e5 with 4.Nxe5?. Punish it, then deal with White's threat.",
      moves: GRAB,
      start: 7,
      side: 'black',
      hints: [
        "Your last move created a threat. Is it still there?",
        'Take the b5-bishop. When the queen comes to h5, defend f7 with your queen and hit the knight.'
      ],
      success: '4...Nxb5! wins a piece, and 5...Qe7 stops Qxf7 mate while attacking e5.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "What is Black's main idea behind 3...Nd4?",
      moves: `${RUY} Nd4`,
      orientation: 'black',
      choices: [
        { text: 'Trade knights and get a pawn on d4 that cramps White', correct: true, why: 'Right. After 4.Nxd4 exd4, the d4-pawn takes c3 and e3 from White.' },
        { text: 'Win the b5-bishop by force', why: 'The bishop is attacked, but White simply takes on d4 and the threat is gone.' },
        { text: 'Defend the e5-pawn', why: 'After 4.Nxd4 exd4 the e-pawn leaves e5 altogether. The idea is the wedge on d4.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White just took on e5. What is the simplest way to punish it?',
      moves: `${RUY} Nd4 Nxe5`,
      orientation: 'black',
      choices: [
        { text: '4...Nxb5', correct: true, why: 'Yes. The bishop was hanging. Black wins a piece for a pawn.' },
        { text: '4...Qe7', why: 'It hits the knight, but something bigger is free: the b5-bishop.' },
        { text: '4...d6', why: 'It kicks the knight, but takes nothing. The b5-bishop is there for the taking.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 4.Nxd4 exd4, which squares does the d4-pawn take from White?',
      moves: `${RUY} Nd4 Nxd4 exd4`,
      orientation: 'black',
      choices: [
        { text: 'c3 and e3', correct: true, why: 'Correct. Black pawns capture toward rank 1, so a pawn on d4 covers c3 and e3.' },
        { text: 'c5 and e5', why: 'Those would be covered by a white pawn on d4. A black pawn on d4 covers c3 and e3.' },
        { text: 'd3 and d5', why: 'Pawns attack diagonally, never straight ahead.' }
      ]
    },
    {
      type: 'plan',
      prompt: "White to move. What is White's typical plan against the d4-wedge?",
      moves: MAIN,
      orientation: 'white',
      choices: [
        { text: 'Challenge it with c3 later, or expand with f4', correct: true, why: 'Yes. White develops calmly and then works against the wedge or grabs kingside space.' },
        { text: 'Put a knight on c3 at once', why: 'The d4-pawn covers c3, so a knight there would simply be taken.' },
        { text: 'Ignore it; the wedge does not matter', why: "It does matter: it takes c3 and e3 from White's pieces and blocks the usual centre." }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Name this defence.',
      moves: `${RUY} Nd4`,
      orientation: 'black',
      choices: [
        { text: "Bird's Defence", correct: true, why: "Yes. 3...Nd4 is Bird's Defence." },
        { text: 'Classical Defence', why: 'The Classical is 3...Bc5.' },
        { text: 'Schliemann Defence', why: 'The Schliemann is 3...f5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the main line, what is the job of the bishop on c5?',
      moves: `${RUY} Nd4 Nxd4 exd4 O-O Bc5`,
      orientation: 'black',
      choices: [
        { text: 'It guards the d4-pawn', correct: true, why: 'Right. The wedge needs support, and the bishop gives it.' },
        { text: 'It attacks f2', why: "Black's own pawn on d4 blocks the diagonal to f2." },
        { text: 'It attacks the e4-pawn', why: 'The c5-bishop moves on dark squares; e4 is a light square.' }
      ]
    }
  ],
  key: { name: "Bird's Defense: 3...Nd4", moves: `${RUY} Nd4`, orientation: 'black' },
  terms: [
    { term: 'Wedge', meaning: 'An advanced pawn that splits the enemy position and takes squares away from it.' },
    { term: 'Doubled pawns', meaning: 'Two pawns of the same colour on one file. They can be hard to defend and to use.' },
    { term: 'Hanging piece', meaning: 'A piece that is attacked and not defended, so it can be taken for free.' }
  ]
})
