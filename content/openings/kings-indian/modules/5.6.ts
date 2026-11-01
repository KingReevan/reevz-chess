import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** classical-7oo-exd4: 7.O-O exd4 8.Nxd4 Re8 9.f3 c6 */
const EXD4 = `${CLASSICAL} O-O exd4 Nxd4 Re8 f3 c6`
/** classical-7oo-exd4-qc2-trap: 9.Qc2? Nxe4! 10.Nxe4 Bxd4 */
const TRAP = `${CLASSICAL} O-O exd4 Nxd4 Re8 Qc2 Nxe4 Nxe4 Bxd4`
/** Position after 8...Re8, White to move */
const RE8 = `${CLASSICAL} O-O exd4 Nxd4 Re8`

export default defineModule({
  id: '5.6',
  title: '7.O-O exd4: opening the long diagonal',
  minutes: 10,
  level: 3,
  goals: [
    'Know why Black gives up the center with 7...exd4',
    'See how ...Re8 attacks e4 and why White answers 9.f3',
    'Spot the 9.Qc2? Nxe4! trap, and why it fails against 7.Be3'
  ],
  intro:
    "Against 7.O-O, the main move is 7...Nc6 (Chapter 2). But Black can also take on d4 at once. That gives White more space, but it half-opens the e-file for Black's rook and the long diagonal for the g7-bishop. What does that buy Black, and what is the one natural-looking move White must avoid?",
  sections: [
    {
      kind: 'walkthrough',
      title: '7...exd4 and the fight for e4',
      intro: 'Count the attackers and defenders of e4 after every move.',
      moves: EXD4,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'The Classical position',
          text: '6...e5. White now castles, the main line.',
          arrows: [['e1', 'g1', 'blue']]
        },
        13: {
          title: 'White castles',
          text: '7.O-O. In Chapter 2 Black answered 7...Nc6. Here Black chooses a different road.',
          arrows: [['b8', 'c6', 'blue']]
        },
        14: {
          title: 'Give up the center',
          text: "7...exd4. Black trades the e-pawn. The e-file is now half-open for a rook, and the g7-bishop's long diagonal will open as soon as the f6-knight moves.",
          arrows: [['g7', 'd4', 'blue']]
        },
        15: {
          title: 'White takes back',
          text: '8.Nxd4. White has a big center with pawns on c4 and e4. That space is the price Black pays.',
          marks: ['c4', 'e4']
        },
        16: {
          title: 'The rook hits e4',
          text: '8...Re8. The e4-pawn is attacked twice, by the rook and the f6-knight, and defended only once, by the c3-knight. Black threatens ...Nxe4.',
          arrows: [['e8', 'e4', 'red'], ['f6', 'e4', 'red'], ['c3', 'e4', 'green']]
        },
        17: {
          title: 'The solid answer',
          text: "9.f3. The pawn guards e4 for good. It also keeps Black's knight out of g4. White's knight on d4 is guarded by the queen on d1.",
          arrows: [['f3', 'e4', 'green'], ['d1', 'd4', 'green']]
        },
        18: {
          title: 'Getting ready for ...d5',
          text: '9...c6. The pawn covers d5 and b5, and prepares ...d5 to free the position. White keeps a small edge thanks to the extra space.',
          arrows: [['d6', 'd5', 'blue'], ['c6', 'd5', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The trap: 9.Qc2? Nxe4!',
      intro: "The queen move defends e4 a second time. What did the queen stop guarding when it left d1?",
      moves: TRAP,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'e4 is attacked',
          text: 'Same position: the rook and the f6-knight hit e4.',
          arrows: [['e8', 'e4', 'red'], ['f6', 'e4', 'red']]
        },
        17: {
          title: 'A natural mistake',
          text: '9.Qc2. The queen defends e4, so it looks fine. But on d1 the queen was the only guard of the d4-knight. Now that knight is loose.',
          arrows: [['c2', 'e4', 'green']],
          marks: ['d4'],
          ann: '?'
        },
        18: {
          title: 'Take the pawn',
          text: '9...Nxe4. The knight grabs the pawn. Moving it also opens the g7-bishop\'s diagonal, so now the bishop attacks the loose knight on d4.',
          arrows: [['g7', 'd4', 'red'], ['e4', 'c3', 'blue']],
          ann: '!'
        },
        19: {
          title: 'White takes back',
          text: "10.Nxe4. White wins the knight back. Anything else is even worse for White.",
          marks: ['e4']
        },
        20: {
          title: 'The point',
          text: '10...Bxd4. The bishop takes the d4-knight. Knights have been traded, and Black has won the e4-pawn. Black is a clean pawn up with an active bishop, and clearly better.',
          arrows: [['d4', 'f2', 'blue'], ['d4', 'b2', 'blue']],
          marks: ['d4']
        }
      }
    },
    {
      kind: 'warning',
      title: 'The same trick fails against 7.Be3',
      body:
        "In Module 5.4 (7.Be3 exd4 8.Nxd4 Re8), **9.Qc2 is a good move**. There the e3-bishop guards the d4-knight. If Black tries 9...Nxe4? 10.Nxe4 Bxd4, White just takes back with 11.Bxd4 and is a piece up. Before you go for ...Nxe4 and ...Bxd4, check who guards d4."
    },
    {
      kind: 'text',
      title: 'Plans for both sides',
      body:
        "**Black:** pressure e4 with ...Re8, use the long diagonal, and prepare ...d5 with ...c6. The knight can come to a6 and c5 or c7.\n\n**White:** guard e4 with f3, keep the d4-knight protected, and use the extra space. White keeps a small edge if nothing goes wrong."
    }
  ],
  takeaway:
    "7...exd4 half-opens the e-file and opens the long diagonal. After 8.Nxd4 Re8, White guards e4 with 9.f3. 9.Qc2? leaves the d4-knight loose, and 9...Nxe4! 10.Nxe4 Bxd4 wins a pawn.",
  lookAhead:
    "Next: Black's other 7th moves against 7.O-O, 7...Na6, 7...Nbd7 and 7...c6, and where each knight is going.",
  drills: [
    {
      title: 'Punish 9.Qc2',
      prompt: "You're Black. White has just played 9.Qc2 to defend e4. Find the tactic.",
      moves: TRAP,
      start: 17,
      side: 'black',
      hints: [
        'What did the queen stop guarding when it left d1?',
        'Take on e4 with the knight. That opens the g7-bishop toward d4.'
      ],
      success: '9...Nxe4! 10.Nxe4 Bxd4. Knights are traded and Black has won the e4-pawn.'
    },
    {
      title: 'Hold e4 the safe way',
      prompt: "You're White. Black's rook and knight both attack e4. Defend it without leaving the d4-knight loose.",
      moves: `${RE8} f3`,
      start: 16,
      side: 'white',
      hints: [
        'A pawn makes the best defender.',
        'The f-pawn can guard e4, and the queen stays on d1 guarding d4.'
      ],
      success: '9.f3. e4 is safe for good, and the queen still guards the d4-knight.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'White to move. The e4-pawn is attacked twice. What is the best way to defend it?',
      moves: RE8,
      orientation: 'white',
      choices: [
        { text: '9.f3', correct: true, why: 'Right. The pawn guards e4, and the queen stays on d1, where it protects the d4-knight.' },
        { text: '9.Qc2', why: 'This defends e4, but it leaves the d4-knight unguarded. 9...Nxe4! 10.Nxe4 Bxd4 wins a pawn for Black.' },
        { text: '9.Re1', why: 'It looks like a defense, but 9...Nxe4 10.Nxe4 Rxe4 simply wins the pawn. The rook on e1 is behind the e2-bishop, so it does not guard e4.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move after 9.Qc2 Nxe4 10.Nxe4. Which capture is correct?',
      moves: TRAP.split(' ').slice(0, 19).join(' '),
      orientation: 'black',
      choices: [
        { text: '10...Bxd4', correct: true, why: 'Right. The d4-knight has no defender. Black wins it and stays a pawn up.' },
        { text: '10...Rxe4', why: 'The queen on c2 guards e4. After 11.Qxe4 Black has lost a whole rook.' },
        { text: '10...Qe7', why: 'Too slow. White saves the d4-knight, for example with 11.Nb5, and is better.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does ...Nxe4 and ...Bxd4 work against 9.Qc2 here, but not in the Gligorić (7.Be3 exd4 8.Nxd4 Re8 9.Qc2)?',
      choices: [
        { text: 'In the Gligorić, the e3-bishop guards the d4-knight', correct: true, why: 'Exactly. After ...Bxd4, Bxd4 takes back and White is a piece up. Here the bishop is still on c1, so d4 has no guard.' },
        { text: 'In the Gligorić, White has castled', why: "In that line White hasn't castled yet. The difference is the bishop on e3." },
        { text: 'In the Gligorić, the c3-knight is pinned', why: 'Nothing pins the c3-knight. The difference is who guards d4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does Black get in return for giving up the center with 7...exd4?',
      choices: [
        { text: 'A half-open e-file for the rook and an open long diagonal for the g7-bishop', correct: true, why: 'Right. Black trades space for active pieces and pressure on e4.' },
        { text: 'An extra pawn', why: 'No pawn is won. White takes back on d4 and material is level.' },
        { text: "A safer king", why: "Black's king was already safe. The point is open lines for the pieces." }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'After 9.Qc2 Nxe4 10.Nxe4 Bxd4, what has Black won?',
      moves: TRAP,
      orientation: 'black',
      choices: [
        { text: 'A pawn: knights were traded and the e4-pawn is gone', correct: true, why: 'Right. Black is a clean pawn up and clearly better.' },
        { text: 'A whole knight', why: 'Count again: Black lost the f6-knight on e4 and took the d4-knight. The gain is the e4-pawn.' },
        { text: 'The exchange (a rook for a minor piece)', why: 'No rook changed hands. Black won a pawn.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 7...exd4 8.Nxd4 Re8 9.f3 c6, what is Black preparing?',
      moves: EXD4,
      orientation: 'black',
      choices: [
        { text: '...d5, to free the position', correct: true, why: 'Right. With c6 covering d5, the d6-pawn can advance and swap itself off.' },
        { text: '...f5, to attack the king', why: 'With the center open, Black plays in the center. ...f5 is the plan when the center is closed.' },
        { text: '...b5, to win the c4-pawn', why: '...c6 does support ...b5 later, but the main idea is ...d5 to free the game.' }
      ]
    }
  ],
  key: { name: 'Classical trap: 7...exd4 8.Nxd4 Re8 9.Qc2? Nxe4!', moves: TRAP.split(' ').slice(0, 18).join(' '), orientation: 'black' },
  terms: [
    { term: 'Long diagonal', meaning: 'The a1–h8 (or h1–a8) diagonal, the longest on the board. The g7-bishop lives on a1–h8.' },
    { term: 'Discovered attack', meaning: 'Moving one piece opens a line for another piece behind it, which then attacks something.' },
    { term: 'Loose piece', meaning: 'A piece that nothing defends. Loose pieces are the first targets of tactics.' }
  ]
})
