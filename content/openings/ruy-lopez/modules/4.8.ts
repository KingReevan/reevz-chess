import { defineModule } from '../../../types'
import { CLOSED } from '../../../lines'

const KHOLMOV = `${CLOSED} Be6 d4 Bxb3 axb3 exd4 cxd4 d5 e5 Ne4`
const A5 = `${CLOSED} a5 d4 a4 Bc2`

export default defineModule({
  id: '4.8',
  title: 'Kholmov 9...Be6 and 9...a5',
  minutes: 10,
  level: 3,
  goals: [
    "See how 9...Be6 trades off White's Spanish bishop",
    'Know what White gets back: the open a-file and a big center',
    'Know the idea of 9...a5: chase the bishop and stop the a4 lever'
  ],
  intro:
    "The b3-bishop is White's best attacking piece in the Closed Ruy. It points at f7 and supports a later d4-d5. So why not just trade it off? That is the idea of 9...Be6. And 9...a5 goes after the same bishop with a pawn. What does each plan gain, and what does it give away?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Kholmov: 9...Be6',
      intro: "You're Black. The plan is simple: swap your c8-bishop for White's Spanish bishop, then hit the center.",
      moves: KHOLMOV,
      start: 17,
      orientation: 'black',
      steps: {
        17: {
          title: 'The target',
          text: "White's b3-bishop aims at f7 and supports d4-d5 ideas. Black's c8-bishop has no great diagonal. A trade would suit Black.",
          arrows: [['b3', 'f7', 'yellow'], ['c8', 'e6', 'blue']]
        },
        18: {
          title: 'The trade offer',
          text: '9...Be6. The bishops face each other on the same diagonal. The e6-bishop is guarded by the f7-pawn, so White cannot win it.',
          arrows: [['e6', 'b3', 'red'], ['f7', 'e6', 'green']]
        },
        19: {
          title: 'White carries on',
          text: '10.d4. White builds the center and lets Black take on b3. Moving the bishop away would cost time.',
          arrows: [['d4', 'e5', 'red']]
        },
        20: {
          title: 'The Spanish bishop is gone',
          text: "10...Bxb3. Black removes White's best attacking piece. f7 is now much safer.",
          marks: ['f7']
        },
        21: {
          title: 'An open file for the rook',
          text: '11.axb3. White takes back toward the center. The a-file has no White pawn now, so the a1-rook looks straight at a6.',
          arrows: [['a1', 'a6', 'blue']],
          marks: ['a6']
        },
        22: {
          title: 'Releasing e5',
          text: '11...exd4. Black gives up the e5-pawn to prepare a strike in the center.',
          arrows: [['d6', 'd5', 'blue']]
        },
        23: {
          title: "White's big center",
          text: '12.cxd4. White has pawns on d4 and e4 side by side. Black must challenge them before White pushes on.',
          marks: ['d4', 'e4']
        },
        24: {
          title: 'The central break',
          text: '12...d5. Black hits e4. The d5-pawn is guarded by the f6-knight and the queen.',
          arrows: [['d5', 'e4', 'red'], ['f6', 'd5', 'green'], ['d8', 'd5', 'green']]
        },
        25: {
          title: 'White gains space',
          text: '13.e5. White pushes past and attacks the f6-knight.',
          arrows: [['e5', 'f6', 'red']]
        },
        26: {
          title: 'A central knight',
          text: '13...Ne4. The knight jumps to a strong central square, guarded by the d5-pawn.',
          arrows: [['d5', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'What happens next',
      body:
        "The main line goes on 14.Nc3 f5 15.exf6 Bxf6 16.Nxe4 dxe4 17.Rxe4 Qd5 18.Rg4. (15.exf6 is an en passant capture.) Many pieces come off and the position opens.\n\nPositions like this are usually a little better for White. 9...Be6 was popular in the 1980s and is played less today. The lesson still stands: **trading the Spanish bishop takes the sting out of White's attack**, but it hands White an open a-file and a free hand in the center."
    },
    {
      kind: 'walkthrough',
      title: 'Chasing the bishop: 9...a5',
      intro: "Black can also go after the bishop with a pawn.",
      moves: A5,
      start: 17,
      orientation: 'black',
      steps: {
        17: {
          title: 'Another way to bother b3',
          text: "Instead of trading the bishop, Black can push the a-pawn to chase it.",
          arrows: [['a6', 'a4', 'blue']]
        },
        18: {
          title: 'The a-pawn moves',
          text: '9...a5. Black threatens ...a4, attacking the bishop.',
          arrows: [['a5', 'a4', 'blue']],
          marks: ['b3']
        },
        19: {
          title: 'White ignores it',
          text: '10.d4. White builds the center and waits for the a-pawn to arrive.',
          arrows: [['d4', 'e5', 'red']]
        },
        20: {
          title: 'The bishop is hit',
          text: '10...a4. The pawn attacks the bishop and takes space. The b5-pawn and a8-rook both guard it, so Bxa4 would lose the bishop.',
          arrows: [['a4', 'b3', 'red'], ['b5', 'a4', 'green']]
        },
        21: {
          title: 'The bishop steps back',
          text: "11.Bc2. The bishop goes to c2 anyway. But look at the pawn on a4: as long as it stands there, White can't use the a2-a4 lever against b5.",
          arrows: [['c2', 'e4', 'green']],
          marks: ['a4']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Watch the name "Keres"',
      body:
        'Some game databases call 9...a5 the Keres Variation. Most sources, and this course, use Keres for 11...Nd7 in the Chigorin (Module 4.4). If you look 9...a5 up, try both names.'
    }
  ],
  takeaway:
    "9...Be6 trades off White's Spanish bishop, but White gets the open a-file and a free center, which is usually a little better for White. 9...a5 and ...a4 chase the bishop to c2 and take away White's a4 lever.",
  lookAhead:
    "Next: what happens when White skips 9.h3. 9.d4 allows ...Bg4, and 9.d3 takes a slower road.",
  drills: [
    {
      title: 'Trade the Spanish bishop',
      prompt: "You're Black in the Closed tabiya. Trade off White's b3-bishop, give up e5, then strike in the center.",
      moves: `${CLOSED} Be6 d4 Bxb3 axb3 exd4 cxd4 d5`,
      start: 17,
      side: 'black',
      hints: ['Put your c8-bishop on the same diagonal as the b3-bishop.', 'After the trade, ...exd4 and then a pawn break that hits e4.'],
      success: '9...Be6, 10...Bxb3, 11...exd4 and 12...d5. The Spanish bishop is gone and e4 is under fire.'
    },
    {
      title: 'Chase it with the pawn',
      prompt: "You're Black in the Closed tabiya. Use your a-pawn to chase the b3-bishop.",
      moves: `${CLOSED} a5 d4 a4`,
      start: 17,
      side: 'black',
      hints: ['The a-pawn can reach a4 in two moves.', 'First a5, then a4.'],
      success: '9...a5 and 10...a4. The bishop has to move, and White can no longer play a2-a4.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the main idea of 9...Be6?',
      moves: `${CLOSED} Be6`,
      orientation: 'black',
      choices: [
        { text: "Trade off White's Spanish bishop", correct: true, why: 'Right. The b3-bishop is White\'s best attacking piece, and ...Be6 offers to swap it.' },
        { text: 'Defend the e5-pawn', why: 'A bishop on e6 does not guard e5. Its job is to challenge the b3-bishop.' },
        { text: 'Prepare ...Bg4', why: 'The h3-pawn still covers g4. The bishop on e6 is aiming at b3.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 10...Bxb3 11.axb3, what has White gained?',
      moves: `${CLOSED} Be6 d4 Bxb3 axb3`,
      orientation: 'white',
      choices: [
        { text: 'An open a-file for the a1-rook', correct: true, why: 'Yes. With the a-pawn gone, the rook looks straight down the file at a6.' },
        { text: 'The two bishops', why: 'Bishops were traded one for one. Neither side has the bishop pair from this trade.' },
        { text: 'A passed pawn on b3', why: "Black's b5-pawn stands in front of it, so the b3-pawn is not passed." }
      ]
    },
    {
      type: 'move',
      prompt: "Black to move after 12.cxd4. What is Black's central break?",
      moves: `${CLOSED} Be6 d4 Bxb3 axb3 exd4 cxd4`,
      orientation: 'black',
      choices: [
        { text: '12...d5', correct: true, why: 'Right. The pawn hits e4 and is guarded by the f6-knight and the queen.' },
        { text: '12...Nxd4', why: 'd4 is guarded by the f3-knight and the queen. After 13.Nxd4 Black has lost a knight for a pawn.' },
        { text: '12...h6', why: "It is too slow. Black should strike at White's center before it gets stronger." }
      ]
    },
    {
      type: 'plan',
      prompt: 'What does 9...a5 followed by ...a4 achieve?',
      choices: [
        { text: 'It chases the bishop and takes away the a2-a4 lever', correct: true, why: 'Yes. While Black has a pawn on a4, White cannot use a4 to attack b5.' },
        { text: 'It traps the b3-bishop', why: 'The bishop is not trapped. It simply retreats to c2.' },
        { text: 'It wins a pawn on a2', why: 'Nothing attacks a2 here. The point is the bishop and the a4-square.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 13.e5 Ne4, why is the knight well placed?',
      moves: KHOLMOV,
      orientation: 'black',
      choices: [
        { text: 'It sits in the center, guarded by the d5-pawn', correct: true, why: 'Right. No White pawn can easily attack it, so only pieces can challenge it.' },
        { text: 'It attacks White\'s king', why: 'The knight on e4 attacks f2 and other squares, but it is not giving check or threatening mate.' },
        { text: 'It is about to be trapped', why: 'The knight has plenty of squares and is guarded. It is a strong piece here.' }
      ]
    },
    {
      type: 'name',
      prompt: "Black plays 9...Be6, offering to trade the bishops. What is this line called?",
      moves: `${CLOSED} Be6`,
      orientation: 'black',
      choices: [
        { text: 'The Kholmov Variation', correct: true, why: 'Yes. 9...Be6 is the Kholmov.' },
        { text: 'The Karpov Variation', why: 'The Karpov Variation is 9...Nd7.' },
        { text: 'The Zaitsev Variation', why: 'The Zaitsev is 9...Bb7.' }
      ]
    }
  ],
  key: { name: 'Kholmov Variation: 9...Be6', moves: `${CLOSED} Be6`, orientation: 'black' },
  terms: [
    { term: 'Half-open file', meaning: 'A file with no pawn of your own on it, but an enemy pawn. Your rook can press that pawn.' },
    { term: 'Pawn break', meaning: "A pawn move that attacks the opponent's pawns to open lines, like 12...d5 here." },
    { term: 'Doubled pawns', meaning: 'Two pawns of the same color on one file, like White\'s b2 and b3 after 11.axb3.' },
    { term: 'En passant', meaning: 'A pawn on its fifth rank can capture an enemy pawn that has just moved two squares past it, as if it had moved one. Only on the very next move.' }
  ]
})
