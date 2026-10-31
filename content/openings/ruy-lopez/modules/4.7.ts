import { defineModule } from '../../../types'
import { CLOSED } from '../../../lines'

const SMYSLOV = `${CLOSED} h6 d4 Re8 Nbd2 Bf8`
const KARPOV = `${CLOSED} Nd7 d4 Bf6 a4 Bb7 Na3 exd4 cxd4 Re8 axb5 axb5 Bf4`

export default defineModule({
  id: '4.7',
  title: 'Smyslov 9...h6 and Karpov 9...Nd7',
  minutes: 11,
  level: 3,
  goals: [
    'Know why 9...h6 makes ...Re8 safe, and what it costs',
    'See how 9...Nd7 makes room for ...Bf6 against d4',
    'Recognise both set-ups by their first moves'
  ],
  intro:
    "Module 4.6 showed that the Zaitsev has one weak spot: White's knight can jump to g5. Two other 9th moves deal with Black's problems in their own way. 9...h6 takes g5 away before anything happens. 9...Nd7 steps the knight back so the bishop can come to f6. What does each one gain?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Smyslov: 9...h6',
      intro: "You're Black. One quiet pawn move, and the Zaitsev's weak spot disappears.",
      moves: SMYSLOV,
      start: 17,
      orientation: 'black',
      steps: {
        17: {
          title: 'Think ahead',
          text: "Black would like ...Re8 and ...Bf8. But when the rook leaves f8, a White knight on g5 could hit f7 together with the b3-bishop.",
          arrows: [['f3', 'g5', 'blue'], ['b3', 'f7', 'red']],
          marks: ['g5']
        },
        18: {
          title: 'Take g5 away first',
          text: '9...h6. Now a knight on g5 would just be taken by the pawn. As a bonus, the king gets an escape square on h7.',
          arrows: [['h6', 'g5', 'green']]
        },
        19: {
          title: 'White carries on',
          text: '10.d4. White builds the center as usual.',
          arrows: [['d4', 'e5', 'red']]
        },
        20: {
          title: 'The rook is safe',
          text: '10...Re8. In the Zaitsev this allowed 11.Ng5. Here g5 is covered, so the rook can stay on e8.',
          arrows: [['e8', 'e4', 'blue']]
        },
        21: {
          title: 'The knight sets off',
          text: '11.Nbd2. White starts the knight trip toward f1 and g3.',
          arrows: [['d2', 'f1', 'blue']]
        },
        22: {
          title: 'A safe wall',
          text: '11...Bf8. Now the rook guards e5, and the e5-pawn has three guards: d6, c6 and e8. Black has the Zaitsev wall without the Ng5 worry.',
          arrows: [['e8', 'e5', 'green'], ['c6', 'e5', 'green'], ['d6', 'e5', 'green']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'text',
      title: 'The price of 9...h6',
      body:
        "9...h6 doesn't develop a piece or fight for the center. It is a **prophylactic** move: it stops White's idea before it happens. The cost is one tempo, so White gets a little extra time for the center and the knight trip.\n\nIn game 2 of the 1997 match, Garry Kasparov played the Smyslov against the computer Deep Blue and lost. Deep Blue slowly squeezed Black's position, a famous example of quiet pressure in the Closed Ruy."
    },
    {
      kind: 'walkthrough',
      title: 'The Karpov: 9...Nd7',
      intro: "Now you're White. Black steps the f6-knight back to make room for the bishop.",
      moves: KARPOV,
      start: 18,
      orientation: 'white',
      steps: {
        18: {
          title: 'The knight steps back',
          text: '9...Nd7. The knight guards e5 from d7 and leaves f6 free for the e7-bishop.',
          arrows: [['d7', 'e5', 'green'], ['e7', 'f6', 'blue']]
        },
        19: {
          title: 'The center',
          text: '10.d4. White builds the center. Black now has many guards on e5.',
          arrows: [['d4', 'e5', 'red']]
        },
        20: {
          title: 'Bishop to f6',
          text: '10...Bf6. The bishop guards e5 and points down the long diagonal toward d4. Right now its own e5-pawn is in the way.',
          arrows: [['f6', 'e5', 'green'], ['f6', 'd4', 'blue']]
        },
        21: {
          title: 'A lever on the queenside',
          text: '11.a4. White attacks b5 with a pawn, the same idea you saw in the Breyer and the Zaitsev.',
          arrows: [['a4', 'b5', 'red']]
        },
        22: {
          title: 'The other bishop',
          text: '11...Bb7. Black develops the last minor piece. Its diagonal is blocked by the c6-knight for now.',
          arrows: [['b7', 'e4', 'blue']]
        },
        23: {
          title: 'Knight to a3',
          text: '12.Na3. This time the b1-knight goes to a3, where it adds a second attack on b5.',
          arrows: [['a3', 'b5', 'red'], ['a4', 'b5', 'red']],
          marks: ['b5']
        },
        24: {
          title: 'The diagonal opens',
          text: '12...exd4. Black trades off the e5-pawn. Now the f6-bishop sees all the way to d4 and beyond.',
          arrows: [['f6', 'd4', 'red']]
        },
        25: {
          title: 'd4 under fire',
          text: '13.cxd4. Now d4 is attacked by the f6-bishop and the c6-knight. The f3-knight and the queen guard it.',
          arrows: [['f6', 'd4', 'red'], ['c6', 'd4', 'red'], ['f3', 'd4', 'green']],
          marks: ['d4']
        },
        26: {
          title: 'Rook to the e-file',
          text: '13...Re8. With the e5-pawn gone, the rook hits e4 straight away. The e1-rook guards it.',
          arrows: [['e8', 'e4', 'red'], ['e1', 'e4', 'green']]
        },
        27: {
          title: 'White opens the a-file',
          text: '14.axb5. White trades on b5 to open the a-file.'
        },
        28: {
          title: 'Black takes back',
          text: '14...axb5. The a-file is now open, though the a3-knight stands on it for the moment.',
          marks: ['b5']
        },
        29: {
          title: 'The last piece develops',
          text: '15.Bf4. The bishop comes out and eyes d6. With c1 empty, the queen also guards the a1-rook again.',
          arrows: [['f4', 'd6', 'yellow'], ['d1', 'a1', 'green']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Same move, different names',
      body:
        "Karpov played 9...Nd7 several times in his 1990 World Championship match against Kasparov. Some sources confusingly call 9...Nd7 the Chigorin. In this course, Chigorin always means 9...Na5."
    }
  ],
  takeaway:
    "9...h6 (Smyslov) stops Ng5 before it happens, so ...Re8 and ...Bf8 are safe, at the cost of a tempo. 9...Nd7 (Karpov) makes room for ...Bf6, which presses d4 once the e5-pawn is exchanged.",
  lookAhead:
    "Next: two more 9th moves. 9...Be6 trades off White's Spanish bishop, and 9...a5 chases it.",
  drills: [
    {
      title: 'The Smyslov set-up',
      prompt: "You're Black in the Closed tabiya. Take g5 away first, then build the e5 wall with your rook and bishop.",
      moves: SMYSLOV,
      start: 17,
      side: 'black',
      hints: ['A pawn move stops Ng5 for good.', 'Then the rook to e8 and the bishop back to f8.'],
      success: '9...h6, 10...Re8 and 11...Bf8. The Zaitsev wall, with no Ng5 trick.'
    },
    {
      title: 'The Karpov set-up',
      prompt: "You're Black in the Closed tabiya. Step the f6-knight back, put the bishop on f6, then develop the other bishop.",
      moves: `${CLOSED} Nd7 d4 Bf6 a4 Bb7`,
      start: 17,
      side: 'black',
      hints: ['The knight goes to a square where it still guards e5.', 'After 10.d4 the e7-bishop moves to the square the knight left.'],
      success: '9...Nd7, 10...Bf6 and 11...Bb7. The bishop on f6 is ready to hit d4.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does 9...h6 make ...Re8 safe?',
      choices: [
        { text: 'It covers g5, so White\'s knight cannot jump there to hit f7', correct: true, why: 'Right. A knight on g5 would just be taken by the h6-pawn.' },
        { text: 'It attacks the b3-bishop', why: 'The h6-pawn is far from b3. It controls g5.' },
        { text: 'It lets the rook go to h8', why: 'The rook is going to e8, not h8. The point is the g5-square.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the cost of 9...h6?',
      choices: [
        { text: 'A tempo: it develops nothing and gives White extra time', correct: true, why: 'Yes. White uses the time for d4 and the knight trip.' },
        { text: 'It loses the h-pawn', why: 'The pawn on h6 is safe. Nothing attacks it.' },
        { text: "It blocks Black's bishop on f8", why: 'A pawn on h6 does not block any bishop. It just takes g5 away.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Black plays 9...Nd7. Which bishop move is Black preparing?',
      moves: `${CLOSED} Nd7`,
      orientation: 'black',
      choices: [
        { text: '...Bf6', correct: true, why: 'Right. The knight left f6 so the bishop could go there and aim at d4.' },
        { text: '...Bb7', why: 'Black does play ...Bb7 later, but that was possible before. ...Nd7 makes room for ...Bf6.' },
        { text: '...Bg5', why: 'The bishop could go to g5, but the point of ...Nd7 is the f6-square and the long diagonal.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 12...exd4 13.cxd4, which two Black pieces attack d4?',
      moves: `${CLOSED} Nd7 d4 Bf6 a4 Bb7 Na3 exd4 cxd4`,
      orientation: 'black',
      choices: [
        { text: 'The f6-bishop and the c6-knight', correct: true, why: 'Yes. With the e5-pawn gone, the bishop sees d4, and the knight hits it too.' },
        { text: 'The b7-bishop and the d7-knight', why: 'The b7-bishop is on the light squares and d4 is dark. A knight on d7 does not reach d4.' },
        { text: 'The queen and the e8-rook', why: "The queen's path down the d-file is blocked by Black's own d7-knight and d6-pawn, and there is no rook on e8 yet." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In game 2 of the 1997 match against Deep Blue, which defense did Kasparov play, and what happened?',
      choices: [
        { text: 'The Smyslov, 9...h6, and Kasparov lost', correct: true, why: 'Right. Deep Blue squeezed Black slowly and won.' },
        { text: 'The Breyer, 9...Nb8, and Kasparov won', why: 'Not this game. In game 2 Kasparov played 9...h6, the Smyslov, and lost.' },
        { text: 'The Marshall Attack, and it was a draw', why: 'Not this game. It was a Closed Ruy with 9...h6, and Deep Blue won.' }
      ]
    },
    {
      type: 'name',
      prompt: 'Black plays 9...Nd7, planning ...Bf6. What is this line called in this course?',
      moves: `${CLOSED} Nd7`,
      orientation: 'black',
      choices: [
        { text: 'The Karpov Variation', correct: true, why: 'Yes. Some older sources call it the Chigorin, but here Chigorin means 9...Na5.' },
        { text: 'The Smyslov Variation', why: 'The Smyslov is 9...h6.' },
        { text: 'The Breyer Defense', why: 'The Breyer is 9...Nb8, with the b8-knight going to d7.' }
      ]
    }
  ],
  key: { name: 'Smyslov Variation: 9...h6', moves: `${CLOSED} h6`, orientation: 'black' },
  terms: [
    { term: 'Prophylaxis', meaning: "A move that stops the opponent's idea before it can happen, like 9...h6 stopping Ng5." },
    { term: 'Luft', meaning: 'German for "air": a pawn move that gives the castled king an escape square.' },
    { term: 'Tempo', meaning: 'One move of time. A slow move "costs a tempo".' }
  ]
})
