import { defineModule } from '../../../types'
import { CLOSED } from '../lines'

/** closed-6be3: 6.Be3 e6 7.Qd2 Rb8 8.Nge2 Nd4, then 9.O-O b5 (engine's top moves) */
const QUEENSIDE = `${CLOSED} Be3 e6 Qd2 Rb8 Nge2 Nd4 O-O b5`
/** Engine-checked trap: 9.Nxd4? cxd4 forks the c3-knight and the e3-bishop */
const FORK = `${CLOSED} Be3 e6 Qd2 Rb8 Nge2 Nd4 Nxd4 cxd4`
/** closed-botvinnik: 6.f4 e5 7.Nh3 Nge7 */
const BOTVINNIK = `${CLOSED} f4 e5 Nh3 Nge7`

export default defineModule({
  id: '8.3',
  title: "Black's answers: ...Rb8–b5, ...Nd4 and the Botvinnik",
  minutes: 11,
  level: 2,
  goals: [
    'Play on the queenside with ...Rb8 and ...b5',
    'Use the d4 outpost, and punish 9.Nxd4?',
    'Know the Botvinnik set-up with ...e5 and ...Nge7'
  ],
  intro:
    "While White builds a kingside attack in the Closed Sicilian, Black can't just wait. Black has three tools: a queenside pawn advance, a knight on d4, and a pawn wall with ...e5. This module shows each one and a tactic every Closed Sicilian player should know.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Queenside play: ...Rb8 and ...b5',
      intro: "Watch the order: rook first, pawn second. There's a reason.",
      moves: QUEENSIDE,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: "White's battery",
          text: '7.Qd2. White is lining up Bh6 on the kingside (Module 8.2). Black answers on the other wing.',
          arrows: [['d2', 'h6', 'red']]
        },
        14: {
          title: 'Rook behind the pawn',
          text: '7...Rb8. The rook will guard the b-pawn once it moves. Without it, ...b5 would simply lose the pawn to Nxb5.',
          arrows: [['b7', 'b5', 'blue'], ['c3', 'b5', 'red']]
        },
        15: {
          title: 'White keeps f4 ready',
          text: '8.Nge2. The knight leaves the f-pawn free and guards d4.',
          arrows: [['e2', 'd4', 'red']]
        },
        16: {
          title: 'Into the outpost',
          text: '8...Nd4. The knight jumps in anyway. The c5-pawn and the g7-bishop guard it, and from d4 it eyes c2, e2 and f3.',
          arrows: [['c5', 'd4', 'green'], ['g7', 'd4', 'green'], ['d4', 'e2', 'red']]
        },
        17: {
          title: 'White castles',
          text: "9.O-O. White's king goes to g1, the side where White plans to attack.",
          arrows: [['f2', 'f4', 'blue']]
        },
        18: {
          title: 'The pawn advances',
          text: '9...b5. Now the pawn is guarded by the rook and the d4-knight. Black wants ...b4 next, to push the c3-knight away from e4 and d5. The position is roughly equal.',
          arrows: [['b8', 'b5', 'green'], ['b5', 'b4', 'blue']],
          marks: ['c3']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The pawn fork on d4',
      intro: 'The knight on d4 is annoying, so White may want to swap it off. But which piece should take?',
      moves: FORK,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'The knight on d4',
          text: '8...Nd4. White\'s e2-knight and e3-bishop both attack d4. Black\'s c5-pawn and g7-bishop guard it.',
          arrows: [['e2', 'd4', 'red'], ['e3', 'd4', 'red'], ['c5', 'd4', 'green']]
        },
        17: {
          title: 'Knight takes knight',
          text: '9.Nxd4. A natural trade, but a big mistake. Think about how Black takes back.',
          ann: '??'
        },
        18: {
          title: 'Pawn fork',
          text: '9...cxd4. The pawn takes and attacks the c3-knight and the e3-bishop at once. White can save only one. Even 10.Bxd4 Bxd4 leaves White a piece down for a pawn.',
          arrows: [['d4', 'c3', 'red'], ['d4', 'e3', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'text',
      title: 'If White wants the knight gone',
      body:
        "The safe way to remove the knight is with the bishop: 9.Bxd4 cxd4. The pawn on d4 still hits the c3-knight, so White must move it, and Black keeps both bishops. Black is a little better.\n\nSo in practice White often leaves the knight alone. Later White may move the c3-knight and play c3 to kick it."
    },
    {
      kind: 'walkthrough',
      title: 'The Botvinnik set-up',
      intro: 'Against an early f4, Black can build a pawn wall instead of playing ...e6.',
      moves: BOTVINNIK,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The Closed position',
          text: "5...d6. White is about to push the f-pawn.",
          arrows: [['f2', 'f4', 'red']]
        },
        11: {
          title: 'White goes f4',
          text: '6.f4. White grabs space on the kingside, aiming for f5 later.',
          arrows: [['f4', 'f5', 'red']]
        },
        12: {
          title: 'The pawn wall',
          text: '6...e5. This is the Botvinnik set-up. The c5- and e5-pawns both guard d4, and the e5-pawn meets the f4-pawn head-on.',
          arrows: [['c5', 'd4', 'green'], ['e5', 'd4', 'green'], ['e5', 'f4', 'red']],
          marks: ['d4']
        },
        13: {
          title: 'A guard for f4',
          text: '7.Nh3. The knight guards f4, so if Black ever takes with ...exf4, the knight can take back.',
          arrows: [['h3', 'f4', 'green']]
        },
        14: {
          title: 'The knight to e7',
          text: '7...Nge7. From e7 the knight guards f5 and does not block the f-pawn. Black will castle and use d4. The position is roughly equal. The price: the g7-bishop now looks straight at its own e5-pawn.',
          arrows: [['e7', 'f5', 'green']],
          marks: ['d4', 'e5']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Two answers to f4',
      body:
        "Against White's f4, Black can choose. **...e6 with ...Nge7** keeps the g7-bishop's diagonal open and guards f5 (Module 8.2). **...e5 (the Botvinnik)** builds a wall around d4, but blocks the g7-bishop. Both are roughly equal; pick the one whose plans you like."
    }
  ],
  takeaway:
    "In the Closed Sicilian, Black plays on the queenside (...Rb8, ...b5) and puts a knight on d4. If White takes it with 9.Nxd4?, ...cxd4 forks knight and bishop. Against f4, the Botvinnik ...e5 is a solid alternative to ...e6.",
  lookAhead:
    'Module 8.4 shows a faster version of White\'s kingside plan: the Grand Prix Attack, with f4 on move 3.',
  drills: [
    {
      title: 'Punish the trade',
      prompt: "You're Black. White has just taken your knight with 9.Nxd4. Take back the best way.",
      moves: FORK,
      start: 17,
      side: 'black',
      hints: ['Two of your units can take on d4.', 'A pawn on d4 would attack two White pieces.'],
      success: '9...cxd4! The pawn forks the c3-knight and the e3-bishop, and Black wins a piece.'
    },
    {
      title: "Black's queenside plan",
      prompt: "You're Black. White has played Be3 and Qd2, aiming at h6. Start your own play: prepare ...b5, use the d4 outpost, then push the b-pawn.",
      moves: QUEENSIDE,
      start: 13,
      side: 'black',
      hints: ['First put a rook behind the b-pawn.', '...Rb8, then ...Nd4, then ...b5.'],
      success: '7...Rb8, 8...Nd4 and 9...b5. The rook and the d4-knight both guard the b5-pawn, and ...b4 is next.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black to move. White has just played 9.Nxd4. How should Black take back?',
      moves: `${CLOSED} Be3 e6 Qd2 Rb8 Nge2 Nd4 Nxd4`,
      orientation: 'black',
      choices: [
        { text: '9...cxd4', correct: true, why: 'Yes. The pawn forks the c3-knight and the e3-bishop, and Black wins a piece.' },
        { text: '9...Bxd4', why: 'That only wins the knight back. After 10.Bxd4 cxd4 11.Nb5, White attacks the d4-pawn and is better.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Why does Black play ...Rb8 before ...b5?',
      moves: `${CLOSED} Be3 e6 Qd2`,
      orientation: 'black',
      choices: [
        { text: 'So the b5-pawn is guarded; otherwise Nxb5 wins it', correct: true, why: 'Right. The c3-knight attacks b5, so the pawn needs a defender first.' },
        { text: 'To prepare castling queenside', why: 'Black castles kingside in the Closed. The rook move supports the b-pawn.' },
        { text: 'To attack the b2-pawn at once', why: "The rook can't reach b2 yet: Black's own b7-pawn is in the way." }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Botvinnik set-up, which Black pawns guard the d4 square?',
      moves: BOTVINNIK,
      orientation: 'black',
      choices: [
        { text: 'The c5- and e5-pawns', correct: true, why: 'Yes. Pawns capture diagonally, so c5 and e5 both cover d4.' },
        { text: 'The d6- and e5-pawns', why: 'The d6-pawn guards c5 and e5, not d4.' },
        { text: 'The c5- and d6-pawns', why: 'The d6-pawn covers c5 and e5. Only c5 and e5 guard d4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the main drawback of the Botvinnik set-up for Black?',
      moves: BOTVINNIK,
      orientation: 'black',
      choices: [
        { text: 'The g7-bishop is blocked by the e5-pawn', correct: true, why: 'Right. The bishop looks at its own pawn, so it is less active than after ...e6.' },
        { text: 'The d4 square becomes weak', why: 'The opposite: with pawns on c5 and e5, d4 is very strong for Black.' },
        { text: 'Black can no longer castle', why: 'Black can castle kingside as usual after ...Nge7.' }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'After 6.Be3 e6 7.Qd2 Rb8 8.Nge2 Nd4, why is 9.Nxd4 a mistake?',
      moves: `${CLOSED} Be3 e6 Qd2 Rb8 Nge2 Nd4`,
      orientation: 'white',
      choices: [
        { text: '9...cxd4 forks the c3-knight and the e3-bishop', correct: true, why: 'Yes. White loses a piece. If White wants to trade, 9.Bxd4 cxd4 is the safe way.' },
        { text: 'Black takes back with the bishop and wins the bishop pair', why: 'Taking with the bishop would not be best for Black. The pawn recapture wins a whole piece.' },
        { text: 'It drops the e4-pawn', why: 'The e4-pawn is not the problem. The pawn fork on d4 is.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Closed Sicilian, what is the point of ...b5 and ...b4 for Black?',
      choices: [
        { text: 'To push the c3-knight away from e4 and d5', correct: true, why: 'Right. The c3-knight is an important defender, and Black\'s queenside pawns can chase it.' },
        { text: "To attack White's king", why: "White's king is on g1, on the other side of the board." },
        { text: 'To win the a2-pawn', why: 'The pawns are aimed at the c3-knight, not at a2.' }
      ]
    }
  ],
  key: { name: 'Closed Sicilian: the Botvinnik set-up 6...e5', moves: `${CLOSED} f4 e5`, orientation: 'black' },
  terms: [
    { term: 'Pawn fork', meaning: 'A pawn attacks two enemy pieces at the same time. Usually one of them is lost.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has given one up.' },
    { term: 'Botvinnik set-up', meaning: 'Black pawns on c5, d6 and e5 with a knight on e7. The pawns make a wall around d4.' }
  ]
})
