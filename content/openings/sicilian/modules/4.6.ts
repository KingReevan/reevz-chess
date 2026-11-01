import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** 6.Be2 e5: the Boleslavsky */
const BOLES = `${CLASSICAL} Be2 e5`
/** boleslavsky: 7.Nb3 Be7 8.O-O O-O 9.Be3 Be6 */
const NB3 = `${BOLES} Nb3 Be7 O-O O-O Be3 Be6`
/** boleslavsky-7nf3: 7.Nf3 h6 8.O-O Be7 9.Re1 O-O 10.h3 Be6 */
const NF3 = `${BOLES} Nf3 h6 O-O Be7 Re1 O-O h3 Be6`
/** after 9...Be6: 10.Re1 Rc8 11.f3 d5 12.exd5 Nxd5 13.Nxd5 Bxd5 (engine-checked: level) */
const BREAK = `${NB3} Re1 Rc8 f3 d5 exd5 Nxd5 Nxd5 Bxd5`

export default defineModule({
  id: '4.6',
  title: 'The Boleslavsky: ...e5 against 6.Be2',
  minutes: 11,
  level: 3,
  goals: [
    'See why ...e5 is safe against the quiet 6.Be2',
    'Learn both White set-ups: 7.Nb3 and 7.Nf3',
    'Understand the fight for d5, and Black\'s freeing break ...d5'
  ],
  intro:
    "Against 6.Bg5, the push ...e5 was a mistake (Module 4.2). Against the quiet 6.Be2 it is Black's best move. It leaves a hole on d5 and a backward pawn on d6, just like the Najdorf with ...e5. So why is it fine here, and how does each side fight for d5?",
  sections: [
    {
      kind: 'walkthrough',
      title: '6...e5 and 7.Nb3',
      intro: 'Count the pieces that fight for d5 at the end.',
      moves: NB3,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The Classical position',
          text: 'Black has played 5...Nc6. This time White chooses a quiet developing move.',
          arrows: [['f1', 'e2', 'blue']]
        },
        11: {
          title: 'A quiet bishop',
          text: '6.Be2. The bishop puts no pressure on f6 or f7. White plans to castle and keep things solid.',
          arrows: [['e1', 'g1', 'blue']]
        },
        12: {
          title: 'The Boleslavsky push',
          text: '6...e5. The pawn kicks the d4-knight and grabs space in the center. The price: d5 has no black pawn guarding it, and the d6-pawn is backward.',
          arrows: [['e5', 'd4', 'red']],
          marks: ['d5', 'd6']
        },
        13: {
          title: 'The knight steps back',
          text: '7.Nb3. The knight retreats but stays on the board. From b3 it eyes c5 and a5.',
          arrows: [['b3', 'c5', 'blue']]
        },
        14: {
          title: 'Development',
          text: '7...Be7. Black develops and prepares to castle.',
          arrows: [['f8', 'e7', 'green']]
        },
        15: {
          title: 'White castles',
          text: "8.O-O. White's king is safe. The kings will be on the same side, so this is a slower, positional game.",
          marks: ['g1']
        },
        16: {
          title: 'Black castles',
          text: '8...O-O. Both kings are tucked away on the kingside.',
          marks: ['g8']
        },
        17: {
          title: 'The bishop develops',
          text: '9.Be3. The bishop develops and watches c5, a square Black would like for a knight or the queen.',
          arrows: [['e3', 'c5', 'blue']]
        },
        18: {
          title: 'Guarding d5',
          text: "9...Be6. The bishop joins the fight for d5. Count: White's e4-pawn, c3-knight and d1-queen attack d5, and Black's e6-bishop and f6-knight guard it. The position is roughly level.",
          arrows: [['e6', 'd5', 'green'], ['f6', 'd5', 'green'], ['c3', 'd5', 'red']],
          marks: ['d5']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why ...e5 works here',
      body:
        "In Module 4.2, 6...e5? failed because White's bishop was already on g5: Bxf6 removed the knight that guards d5, and Nf5 followed. Here the bishop sits quietly on e2. It doesn't touch f6 or f7, so Black has time to guard d5 with ...Be7, ...O-O and ...Be6.\n\nThis is the same pawn structure as the Najdorf after 6.Be2 e5 (Chapter 2). In fact, 6.Be2 e5 7.Nb3 Be7 8.O-O O-O 9.Be3 Be6 is the exact move order of that Najdorf line too. The only difference is that Black has a knight on c6 here instead of a pawn on a6."
    },
    {
      kind: 'walkthrough',
      title: 'The other set-up: 7.Nf3',
      intro: "White can put the knight on f3 instead. Then the g5- and g4-squares matter. Watch both sides' h-pawns.",
      moves: NF3,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'The knight is kicked',
          text: '6...e5. The d4-knight must move. This time it goes to f3.',
          arrows: [['e5', 'd4', 'red']]
        },
        13: {
          title: 'Knight to f3',
          text: '7.Nf3. From f3 the knight hits e5 and can jump to g5. White would love Bg5 and Bxf6 later, removing a guard of d5.',
          arrows: [['f3', 'e5', 'red'], ['c1', 'g5', 'blue']]
        },
        14: {
          title: 'No g5 for White',
          text: "7...h6. The pawn takes g5 away from White's bishop and knight. Now Bg5 and Bxf6 is off the table, and so is Ng5.",
          arrows: [['h6', 'g5', 'green']],
          marks: ['g5']
        },
        15: {
          title: 'White castles',
          text: '8.O-O. White gets the king to safety.',
          marks: ['g1']
        },
        16: {
          title: 'Development',
          text: '8...Be7. Black prepares to castle.',
          arrows: [['f8', 'e7', 'green']]
        },
        17: {
          title: 'The rook to e1',
          text: '9.Re1. The rook will back up the e4-pawn once the bishop moves off e2, often to f1.',
          arrows: [['e1', 'e4', 'blue']]
        },
        18: {
          title: 'Black castles',
          text: '9...O-O. Black is safe and ready to fight for d5.',
          marks: ['g8']
        },
        19: {
          title: 'No g4 for Black',
          text: "10.h3. Now White's h-pawn does the same job: it covers g4, so ...Bg4 and ...Ng4 are ruled out.",
          arrows: [['h3', 'g4', 'green']]
        },
        20: {
          title: 'Bishop to e6',
          text: '10...Be6. The bishop guards d5 again. Both sides have taken the g-squares away from each other, and the position is roughly level.',
          arrows: [['e6', 'd5', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "Black's dream: the ...d5 break",
      intro: "If Black ever gets ...d5 in safely, the backward pawn and the hole both disappear. Here is one way it happens.",
      moves: BREAK,
      start: 18,
      orientation: 'black',
      steps: {
        18: {
          title: 'The 9...Be6 position',
          text: 'Black has three pieces aiming at d5 or ready to: the e6-bishop, the f6-knight and, once the d-pawn moves, the d8-queen.',
          arrows: [['e6', 'd5', 'green'], ['f6', 'd5', 'green']]
        },
        19: {
          title: 'The rook to e1',
          text: '10.Re1. White brings the rook to the center.',
          arrows: [['f1', 'e1', 'blue']]
        },
        20: {
          title: 'The c-file',
          text: '10...Rc8. The rook takes the half-open c-file and adds pressure on c3, the knight that fights for d5.',
          arrows: [['c8', 'c3', 'blue']]
        },
        21: {
          title: 'Propping up e4',
          text: '11.f3. The pawn supports e4 and covers g4, so ...Ng4 cannot hit the e3-bishop.',
          arrows: [['f3', 'e4', 'green'], ['f3', 'g4', 'green']]
        },
        22: {
          title: 'The break',
          text: '11...d5. Now the d8-queen also guards d5, so three black pieces defend the pawn against three White attackers. The backward pawn moves forward.',
          arrows: [['d8', 'd5', 'green'], ['d5', 'e4', 'red']],
          ann: '!'
        },
        23: {
          title: 'White takes',
          text: '12.exd5. White trades the e4-pawn for the d-pawn.',
          marks: ['d5']
        },
        24: {
          title: 'The knight takes back',
          text: '12...Nxd5. The knight recaptures and stands in the center.',
          marks: ['d5']
        },
        25: {
          title: 'Knights traded',
          text: '13.Nxd5. White swaps knights.',
          marks: ['d5']
        },
        26: {
          title: 'The hole is gone',
          text: '13...Bxd5. Black has a bishop on d5 instead of a hole there, and no backward d-pawn any more. The position is level.',
          marks: ['d5']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Both sides, one square',
      body:
        "In every ...e5 Sicilian, ask who controls d5. White wants a knight on d5, and often trades off the f6-knight (with Bg5xf6) to get it. Black guards d5 with ...Be6 and ...Nf6, takes g5 away with ...h6 when needed, and waits for the moment to play ...d5. Whoever wins d5 usually gets the better game."
    }
  ],
  takeaway:
    "Against 6.Be2, 6...e5 is safe because nothing is pressuring f6 or f7 yet. Black guards d5 with ...Be7, ...O-O and ...Be6 and hopes for ...d5. White wants Nd5, and with 7.Nf3 the fight includes ...h6 and h3.",
  lookAhead: 'Next: the other main Black system after 5.Nc3, the Scheveningen with 5...e6, and White\'s sharpest answer, the Keres Attack.',
  drills: [
    {
      title: 'The Boleslavsky set-up',
      prompt: "You're Black. White played the quiet 6.Be2. Kick the knight, develop, castle and guard d5.",
      moves: NB3,
      start: 11,
      side: 'black',
      hints: [
        'Push the e-pawn two squares to kick the d4-knight.',
        'Develop the f8-bishop, castle, then put the other bishop on a square where it guards d5.'
      ],
      success: '6...e5, 7...Be7, 8...O-O and 9...Be6. d5 is well guarded, and the position is level.'
    },
    {
      title: 'The 7.Nf3 set-up',
      prompt: "You're White. Black played 6...e5. Put the knight on f3, castle, bring a rook to the e-file, and keep Black's pieces off g4.",
      moves: `${BOLES} Nf3 h6 O-O Be7 Re1 O-O h3`,
      start: 12,
      side: 'white',
      hints: [
        'Retreat the knight to the kingside, where it hits e5.',
        'Castle, then the f1-rook goes to e1. Finally, a pawn move covers g4.'
      ],
      success: '7.Nf3, 8.O-O, 9.Re1 and 10.h3. White is solid, and ...Bg4 or ...Ng4 is ruled out.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why is ...e5 fine against 6.Be2 but a mistake against 6.Bg5?',
      choices: [
        { text: 'Against Bg5, Bxf6 removes the knight that guards d5 and Nf5 follows. A bishop on e2 puts no pressure on f6', correct: true, why: 'Right. With the bishop on e2, Black has time to guard d5 with ...Be7, ...O-O and ...Be6.' },
        { text: 'The bishop on e2 blocks the e-file', why: 'The e-file is not the issue. It is about whether White can remove the f6-knight and take over d5.' },
        { text: '...e5 attacks the e2-bishop', why: 'A pawn on e5 attacks d4 and f4, not e2. The point is that 6.Be2 does not pressure f6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which weaknesses does ...e5 create in Black\'s position?',
      moves: BOLES,
      orientation: 'black',
      choices: [
        { text: 'The d5-square and the backward d6-pawn', correct: true, why: 'Yes. No black pawn guards d5, and the d6-pawn cannot be supported by a pawn.' },
        { text: 'The f7-pawn', why: 'f7 is safe here, because White\'s bishop is on e2, not c4. The weak points are d5 and d6.' },
        { text: 'The h-file', why: "Black's h-pawn is still at home. The weaknesses are d5 and d6." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does Black play 9...Be6 here?',
      moves: `${BOLES} Nb3 Be7 O-O O-O Be3`,
      orientation: 'black',
      choices: [
        { text: 'To guard d5 and prepare the ...d5 break', correct: true, why: 'Right. The bishop adds a guard on d5, and later ...d5 can get rid of the backward pawn.' },
        { text: 'To prepare ...f5', why: 'The bishop does not help ...f5. Its job is the d5-square.' },
        { text: 'To stop White from castling', why: 'White has already castled. The bishop is there for d5.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'White has just played 7.Nf3. Why does Black answer 7...h6?',
      moves: `${BOLES} Nf3`,
      orientation: 'black',
      choices: [
        { text: "To keep White's bishop and knight off g5", correct: true, why: 'Yes. Without Bg5, White cannot easily trade off the f6-knight, which guards d5. It also stops Ng5.' },
        { text: 'To prepare ...g5 and a kingside attack', why: "With the kings castling on the same side, Black doesn't want to push the kingside pawns. ...h6 is about g5." },
        { text: 'To make an escape square for the king', why: 'Black has not even castled yet. The pawn on h6 controls g5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Which variation is this?',
      moves: BOLES,
      orientation: 'black',
      choices: [
        { text: 'The Boleslavsky', correct: true, why: 'Yes. 6.Be2 e5 in the Classical, named after Isaac Boleslavsky.' },
        { text: 'The Sveshnikov', why: 'The Sveshnikov comes from 2...Nc6 and 5...e5, kicking the knight before Black has played ...d6.' },
        { text: 'The Richter–Rauzer', why: 'The Richter–Rauzer is 6.Bg5. Against it, ...e5 is a mistake.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'The Boleslavsky and the Najdorf with 6.Be2 e5 have the same pawns. What is the difference?',
      choices: [
        { text: 'Black has a knight on c6 instead of a pawn on a6', correct: true, why: 'Right. The ideas are the same: guard d5, then aim for ...d5.' },
        { text: "White's bishop is on c4 instead of e2", why: 'In both lines the bishop goes to e2. The difference is on Black\'s side: ...Nc6 instead of ...a6.' },
        { text: 'Black has no pawn on d6 in the Boleslavsky', why: 'Black does have a pawn on d6 in both. The difference is ...Nc6 instead of ...a6.' }
      ]
    }
  ],
  key: { name: 'Boleslavsky: 6.Be2 e5', moves: BOLES, orientation: 'black' },
  terms: [
    { term: 'Backward pawn', meaning: 'A pawn that has fallen behind its neighbors and cannot be defended by another pawn. The square in front of it is often weak.' },
    { term: 'Pawn break', meaning: 'A pawn move that challenges the opponent\'s pawns and opens lines, like ...d5 here.' },
    { term: 'Outpost', meaning: 'A square, often a hole, where a piece cannot be chased away by enemy pawns. d5 is the classic one in the Sicilian.' }
  ]
})
