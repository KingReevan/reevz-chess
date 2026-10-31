import { defineModule } from '../../../types'
import { RUY } from '../../../lines'

const C3 = `${RUY} a6 Ba4 d6 c3`
const OO = `${C3} f5 exf5 Bxf5 O-O Bd3 Re1 Be7 Bc2 Bxc2 Qxc2 Nf6 d4`
const D4 = `${C3} f5 exf5 Bxf5 d4 e4`

export default defineModule({
  id: '8.8',
  title: 'Siesta: 5.c3 f5',
  minutes: 9,
  level: 2,
  goals: [
    'Understand why ...f5 is a good counterattack once White has played c3',
    'Learn the annoying ...Bd3 idea after 7.O-O',
    'Know the space-grabbing 7.d4 e4 line'
  ],
  intro:
    "In the Modern Steinitz, 5.c3 is White's most natural move: it prepares d4. But it is also a little slow. The Siesta uses that moment to strike at e4 with the f-pawn. Why is this the right moment, and how should White react?",
  sections: [
    {
      kind: 'walkthrough',
      title: '7.O-O Bd3: a bishop in the way',
      intro: 'The bishop on d3 is the star of this line. Count how many White pieces it holds back.',
      moves: OO,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'White prepares d4',
          text: '5.c3. A useful move, but notice the side effect: the b1-knight can no longer use c3 to defend e4.',
          marks: ['c3', 'e4']
        },
        10: {
          title: 'The Siesta',
          text: '5...f5. Black hits e4 at once. Without a knight on c3, White has no easy way to defend it.',
          arrows: [['f5', 'e4', 'red']],
          ann: '!?'
        },
        11: {
          title: 'White takes',
          text: '6.exf5. White trades the e-pawn for the f-pawn.'
        },
        12: {
          title: 'Bishop with a view',
          text: '6...Bxf5. The bishop recaptures and develops. From f5 it looks at d3 and all the way to the b1-knight.',
          arrows: [['f5', 'b1', 'blue']]
        },
        13: {
          title: 'White castles',
          text: '7.O-O. White gets the king safe and plans d4.'
        },
        14: {
          title: 'The bishop lands on d3',
          text: "7...Bd3. The bishop attacks the f1-rook. It also blocks the d2-pawn, so the c1-bishop and b1-knight can't easily come out.",
          arrows: [['d3', 'f1', 'red']],
          marks: ['d2', 'c1', 'b1'],
          ann: '!'
        },
        15: {
          title: 'Rook steps aside',
          text: '8.Re1. The rook moves out of attack and takes the half-open e-file.',
          arrows: [['e1', 'e5', 'blue']]
        },
        16: {
          title: 'Ready to castle',
          text: '8...Be7. Black develops and blocks the e-file.'
        },
        17: {
          title: 'Challenge the bishop',
          text: '9.Bc2. White offers a trade. The d3-bishop is too annoying to leave alone.',
          arrows: [['c2', 'd3', 'red']]
        },
        18: {
          title: 'The trade',
          text: '9...Bxc2. Black takes. The job is done: White spent several moves dealing with this bishop.'
        },
        19: {
          title: 'Queen recaptures',
          text: '10.Qxc2. The queen takes back and develops at the same time.'
        },
        20: {
          title: 'Develop',
          text: '10...Nf6. The knight develops and Black is ready to castle.',
          arrows: [['e8', 'g8', 'green']]
        },
        21: {
          title: 'Finally d4',
          text: '11.d4. The d-pawn moves at last, and White can develop the queenside. Now White puts pressure on e5 with the pawn, knight and rook.',
          arrows: [['d4', 'e5', 'red'], ['e1', 'e5', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '7.d4 e4: grabbing space',
      intro: 'If White pushes d4 at once, Black answers by pushing past it.',
      moves: D4,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'The bishop on f5',
          text: 'Black has recaptured on f5. White now plays d4 straight away instead of castling.',
          arrows: [['d2', 'd4', 'blue']]
        },
        13: {
          title: 'The centre push',
          text: '7.d4. White attacks e5. Note that d3 is now guarded by the queen, so ...Bd3 would simply drop the bishop.',
          arrows: [['d4', 'e5', 'red'], ['d1', 'd3', 'green']]
        },
        14: {
          title: 'Push past',
          text: '7...e4. Black keeps the centre closed and grabs space. The pawn attacks the f3-knight, and the f5-bishop guards it.',
          arrows: [['e4', 'f3', 'red'], ['f5', 'e4', 'green']],
          marks: ['e4']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why ...f5 works here',
      body:
        "Compare the Schliemann (3...f5). There, White's best answers include Nc3, which defends e4 and develops. In the Siesta, **5.c3 has already taken that square** from the knight.\n\nBlack's other plus is the light-squared bishop. After ...Bxf5, it has an open diagonal toward d3 and b1, and White has to spend time on it. The cost: the h5-e8 diagonal and the e-file near Black's king are a little open, so Black should castle soon."
    },
    {
      kind: 'history',
      title: "Capablanca's counterattack",
      body:
        'The Siesta is credited to Capablanca, the third world champion. It is rare at the top today, but it is a good surprise weapon because it turns a quiet Modern Steinitz into a fight.'
    }
  ],
  takeaway:
    "After 5.c3, the Siesta 5...f5 hits e4 when White can no longer defend it with Nc3. Against 7.O-O, ...Bd3 slows White's development until Bc2 trades it; against 7.d4, ...e4 grabs space.",
  lookAhead:
    "Next: what if White pushes 5.d4 instead of 5.c3? That's where the Noah's Ark trap is waiting.",
  drills: [
    {
      title: 'Play the Siesta',
      prompt: "You're Black. White just played 5.c3. Strike with the Siesta and annoy White with your light-squared bishop, up to 10...Nf6.",
      moves: OO.split(' ').slice(0, -1).join(' '),
      start: 9,
      side: 'black',
      hints: [
        'Push the f-pawn to hit e4, and recapture with the bishop.',
        'After White castles, put the bishop on d3. When White offers a trade on c2, take it and develop the g8-knight.'
      ],
      success: '5...f5, 6...Bxf5, 7...Bd3, 8...Be7, 9...Bxc2 and 10...Nf6. White spent three moves on your bishop.'
    },
    {
      title: 'Get rid of the d3-bishop',
      prompt: "You're White. Black's bishop just landed on d3, hitting your rook. Save the rook, trade the bishop off and free your d-pawn.",
      moves: OO,
      start: 14,
      side: 'white',
      hints: [
        'First move the rook to the open e-file.',
        'Then offer a bishop trade on c2, recapture with the queen and push d4.'
      ],
      success: '8.Re1, 9.Bc2, 10.Qxc2 and 11.d4. The bishop is gone and your queenside can finally develop.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why is ...f5 a good counterattack right after 5.c3?',
      moves: C3,
      orientation: 'black',
      choices: [
        { text: "The c3-pawn took the knight's best square, so Nc3 can't defend e4", correct: true, why: 'Right. In the Schliemann, Nc3 is a key defence of e4. Here it is not available.' },
        { text: '5.c3 left the d4-square undefended', why: 'c3 actually guards d4. The point is that the knight lost c3.' },
        { text: 'White has already castled', why: "White hasn't castled yet. The key is that the c3-square is taken." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White just castled. Where does the f5-bishop go?',
      moves: `${C3} f5 exf5 Bxf5 O-O`,
      orientation: 'black',
      choices: [
        { text: '7...Bd3', correct: true, why: "Yes. It attacks the f1-rook and blocks White's d2-pawn." },
        { text: '7...Bxb1', why: "It trades the active bishop for White's undeveloped knight. That helps White develop." },
        { text: '7...Bg6', why: 'Safe but passive. 7...Bd3 makes White spend moves.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is the bishop on d3 so annoying for White?',
      moves: `${C3} f5 exf5 Bxf5 O-O Bd3`,
      orientation: 'white',
      choices: [
        { text: "The d2-pawn can't move, so the c1-bishop and b1-knight are stuck", correct: true, why: 'Correct. And it attacks the f1-rook too.' },
        { text: 'It attacks the white king', why: 'It attacks the f1-rook, not the king on g1. Its real job is blocking the d2-pawn.' },
        { text: 'It cannot be challenged', why: 'It can: 9.Bc2 offers a trade.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'How does White deal with the bishop on d3 in the main line?',
      moves: `${C3} f5 exf5 Bxf5 O-O Bd3 Re1 Be7`,
      orientation: 'white',
      choices: [
        { text: 'Offer a trade with Bc2', correct: true, why: 'Yes. After 9.Bc2 Bxc2 10.Qxc2 White can play d4.' },
        { text: 'Push d2-d3 to kick it', why: 'The bishop is standing on d3, so the pawn cannot move there.' },
        { text: 'Trap it with c4', why: 'A pawn on c4 attacks b5 and d5, not d3.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Name this line.',
      moves: `${C3} f5`,
      orientation: 'black',
      choices: [
        { text: 'The Siesta', correct: true, why: 'Yes. 4...d6 5.c3 f5 is the Siesta.' },
        { text: 'The Schliemann', why: 'The Schliemann is 3...f5, before ...a6 and ...d6.' },
        { text: 'The Cordel Gambit', why: 'The Cordel Gambit is 3...Bc5 4.c3 f5.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White pushed 7.d4 instead of castling. What is the main reply?',
      moves: `${C3} f5 exf5 Bxf5 d4`,
      orientation: 'black',
      choices: [
        { text: '7...e4', correct: true, why: 'Right. Black grabs space and hits the f3-knight; the f5-bishop guards the pawn.' },
        { text: '7...Bd3', why: 'Now the d-file is open: 8.Qxd3 simply wins the bishop.' },
        { text: '7...exd4', why: 'It releases the tension and gives up central space after 8.cxd4. 7...e4 keeps the space.' }
      ]
    }
  ],
  key: { name: 'Siesta: 5.c3 f5', moves: `${C3} f5`, orientation: 'black' },
  terms: [
    { term: 'Counterattack', meaning: 'Answering pressure by attacking something of your own, instead of only defending.' },
    { term: 'Space', meaning: 'How much of the board your pawns control. More space gives your pieces more room.' },
    { term: 'Development', meaning: 'Bringing pieces off their starting squares into play.' }
  ]
})
