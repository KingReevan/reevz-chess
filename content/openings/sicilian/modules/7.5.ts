import { defineModule } from '../../../types'
import { MORRA, MORRA_ACCEPTED } from '../lines'

/** morra-accepted, first part: 5...d6 6.Bc4 e6 7.O-O Nf6 */
const DEVELOP = `${MORRA_ACCEPTED} d6 Bc4 e6 O-O Nf6`
/** morra-accepted: 8.Qe2 Be7 9.Rd1 e5 10.h3 O-O 11.Be3 */
const SETUP = `${DEVELOP} Qe2 Be7 Rd1 e5 h3 O-O Be3`
/** after 9.Rd1, before Black's ninth move */
const RD1 = `${DEVELOP} Qe2 Be7 Rd1`
/** 9...O-O? 10.e5! dxe5?? 11.Rxd8 Rxd8 (engine-checked) */
const E5_TRICK = `${RD1} O-O e5 dxe5 Rxd8 Rxd8`

export default defineModule({
  id: '7.5',
  title: 'The Smith–Morra Gambit: a pawn for time',
  minutes: 11,
  level: 2,
  goals: [
    'See what White gets for the pawn: development and open lines',
    "Learn White's set-up: Nc3, Nf3, Bc4, O-O, Qe2 and Rd1",
    "Learn Black's safe answer to the e4–e5 threat: ...e5"
  ],
  intro:
    "In the Smith–Morra Gambit, White gives up a pawn on move three. In return White's pieces come out fast, the c-file opens and the d-file becomes half-open. Is the pawn worth it? And what must Black watch out for while collecting it?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'A pawn for a lead in development',
      intro: 'Count the pieces each side has developed by the end.',
      moves: DEVELOP,
      start: 3,
      orientation: 'white',
      steps: {
        3: {
          title: 'd4 at once',
          text: '2.d4. White offers to trade the d-pawn for Black\'s c-pawn straight away.',
          arrows: [['d4', 'c5', 'red']]
        },
        4: {
          title: 'Black takes',
          text: '2...cxd4. Black takes, as usual in the Sicilian. In the Open Sicilian White would now take back with a knight or the queen.',
          marks: ['d4']
        },
        5: {
          title: 'The gambit',
          text: '3.c3. Instead, White offers another pawn. If Black takes on c3, White recaptures with the knight and is a pawn down.',
          arrows: [['c3', 'd4', 'red']]
        },
        6: {
          title: 'Gambit accepted',
          text: '3...dxc3. Black takes the pawn. Turning it down is also possible, as Module 7.8 shows.',
          marks: ['c3']
        },
        7: {
          title: 'Open lines',
          text: '4.Nxc3. White is a pawn down. In return the knight is developed, the c-file is open (neither side has a c-pawn), and the d-file is half-open for White.',
          arrows: [['d1', 'd7', 'blue']]
        },
        8: {
          title: 'Black develops',
          text: '4...Nc6. A natural developing move.',
          arrows: [['b8', 'c6', 'green']]
        },
        9: {
          title: 'Another piece out',
          text: '5.Nf3. White develops the second knight.',
          arrows: [['g1', 'f3', 'green']]
        },
        10: {
          title: 'A small center',
          text: '5...d6. The pawn controls e5, so White cannot easily push e4–e5. It also opens a path for the c8-bishop.',
          arrows: [['d6', 'e5', 'green']]
        },
        11: {
          title: 'The bishop aims at f7',
          text: '6.Bc4. The bishop points at f7, a weak spot near Black\'s king.',
          arrows: [['c4', 'f7', 'red']]
        },
        12: {
          title: 'Closing the diagonal',
          text: '6...e6. The pawn blocks the bishop\'s path to f7 and makes room for the f8-bishop.',
          arrows: [['c4', 'e6', 'yellow']]
        },
        13: {
          title: 'White castles',
          text: '7.O-O. White\'s king is safe already.',
          arrows: [['e1', 'g1', 'green']]
        },
        14: {
          title: 'The count',
          text: '7...Nf6. Count: White has three minor pieces out and has castled. Black has two pieces out and the king is still in the center. Black has an extra pawn for it.',
          marks: ['c3', 'f3', 'c4']
        }
      }
    },
    {
      kind: 'text',
      title: 'What White gets for the pawn',
      body:
        "**Time.** White's pieces come out fast, and Black spends moves collecting the pawn.\n\n**Open lines.** The c-file is open and the d-file is half-open for White. White's typical set-up is Qe2 and Rd1, with a rook facing Black's d-pawn and queen. A rook can also go to c1.\n\n**Tactics.** The c4-bishop aims at f7 and e6, and White looks for e4–e5 and for knight jumps to d5 or b5.\n\nIs it enough? The engine says the gambit is **sound enough to play** but **not better for White**: with careful play Black is fine and keeps the extra pawn. It is rare at the top but very common in club and online games, so both sides should know it."
    },
    {
      kind: 'walkthrough',
      title: "White's set-up, and Black's safe answer",
      intro: 'White brings the queen and rook to the center files. Watch the e4–e5 push, and how Black stops it.',
      moves: SETUP,
      start: 14,
      orientation: 'black',
      steps: {
        14: {
          title: 'The same position',
          text: '7...Nf6. Black is a pawn up, White is ahead in development.',
          marks: ['e4']
        },
        15: {
          title: 'Queen to e2',
          text: '8.Qe2. The queen leaves d1 so a rook can go there, and it backs up the e4-pawn.',
          arrows: [['e2', 'e4', 'green'], ['f1', 'd1', 'blue']]
        },
        16: {
          title: 'Getting ready to castle',
          text: '8...Be7. Black develops and prepares to castle.',
          arrows: [['e8', 'g8', 'blue']]
        },
        17: {
          title: 'Rook on the d-file',
          text: '9.Rd1. The rook faces the d6-pawn, with Black\'s queen behind it. Now White threatens e4–e5, which would attack the f6-knight and open the d-file.',
          arrows: [['d1', 'd6', 'red'], ['e4', 'e5', 'red']]
        },
        18: {
          title: 'Stop the push',
          text: '9...e5. The pawn blocks e4–e5 for good and opens the c8-bishop\'s path toward g4. The price is the d5-square: no black pawn can guard it now.',
          arrows: [['c8', 'g4', 'blue']],
          marks: ['d5'],
          ann: '!'
        },
        19: {
          title: 'No pin on f3',
          text: '10.h3. White stops ...Bg4, which would pin the f3-knight to the queen on e2.',
          arrows: [['h3', 'g4', 'green']]
        },
        20: {
          title: 'Now castling is safe',
          text: '10...O-O. With the e-pawns blocked, White has no e4–e5 trick, so Black can castle.',
          arrows: [['e8', 'g8', 'green']]
        },
        21: {
          title: 'Roughly equal',
          text: '11.Be3. White finishes developing. White has active pieces and the d5-square, Black has the extra pawn. The engine calls it roughly equal.',
          marks: ['d5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Castling too early: 9...O-O? 10.e5!',
      intro: 'Same position after 9.Rd1, but Black castles at once. Look down the d-file before you press Next.',
      moves: E5_TRICK,
      start: 17,
      orientation: 'white',
      steps: {
        17: {
          title: 'Rook and queen face off',
          text: '9.Rd1. Only the d6-pawn stands between White\'s rook and Black\'s queen.',
          arrows: [['d1', 'd8', 'yellow']]
        },
        18: {
          title: 'A natural mistake',
          text: '9...O-O. It looks normal, but it ignores the threat of e4–e5.',
          ann: '?'
        },
        19: {
          title: 'The push',
          text: '10.e5. The pawn attacks the f6-knight and the d6-pawn. Black must save the knight and the d-pawn at the same time.',
          arrows: [['e5', 'f6', 'red'], ['e5', 'd6', 'red']],
          ann: '!'
        },
        20: {
          title: 'Opening the file',
          text: '10...dxe5. The most natural capture, and a blunder. The d-file is now open from d1 to d8.',
          arrows: [['d1', 'd8', 'red']],
          ann: '??'
        },
        21: {
          title: 'The queen falls',
          text: '11.Rxd8. The rook takes the queen.',
          marks: ['d8']
        },
        22: {
          title: 'Rook for a queen',
          text: '11...Rxd8. Black gets only a rook back, and White is winning. Even the best defense, 10...Ne8, still leaves White better.',
          marks: ['d8']
        }
      }
    },
    {
      kind: 'tip',
      title: 'In the Morra, ask about e4–e5',
      body:
        "As Black, before every move ask: what happens if White pushes e4–e5? If it opens the d-file onto your queen, or wins a piece, deal with it first. Often ...e5 yourself is the simplest answer."
    }
  ],
  takeaway:
    "In the Smith–Morra White gives a pawn for fast development, an open c-file and a half-open d-file, with Qe2 and Rd1. It is sound enough but not better for White. Black must stop e4–e5 tricks, often with ...e5, before castling.",
  lookAhead: "Module 7.6 shows the most famous Morra traps, where e4–e5 and Bxf7+ win Black's queen, and the correct defense.",
  drills: [
    {
      title: "White's Morra set-up",
      prompt: "You're White. Offer the gambit, and develop your pieces all the way to the rook on d1.",
      moves: RD1,
      start: 2,
      side: 'white',
      hints: ['After 2...cxd4, offer the c-pawn too. Take back on c3 with the knight.', 'Then Nf3, Bc4 and castle. Finish with the queen on e2 and a rook on d1.'],
      success: '2.d4, 3.c3, 4.Nxc3, 5.Nf3, 6.Bc4, 7.O-O, 8.Qe2 and 9.Rd1. A pawn down, but every piece is working.'
    },
    {
      title: 'Punish the early castle',
      prompt: "You're White. Black has just castled with 9...O-O?, ignoring your threat. Push, and then take what the open file gives you.",
      moves: E5_TRICK.split(' ').slice(0, 21).join(' '),
      start: 18,
      side: 'white',
      hints: ['Which pawn move attacks two things at once?', 'After ...dxe5, look straight up the d-file.'],
      success: '10.e5! dxe5?? 11.Rxd8. You win the queen for a rook.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does White get for the pawn in the Smith–Morra Gambit?',
      moves: MORRA_ACCEPTED,
      orientation: 'white',
      choices: [
        { text: 'Faster development and open lines on the c- and d-files', correct: true, why: 'Right. White plays Nc3, Nf3, Bc4, O-O, Qe2 and Rd1 quickly, while Black spends time on the pawn.' },
        { text: 'A forced win of material', why: 'Nothing is forced. With careful play Black is fine and keeps the pawn.' },
        { text: 'Nothing: the gambit is simply a mistake', why: 'The engine says it is sound enough to play. It just is not better for White.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 3...dxc3 4.Nxc3, what is true about the c- and d-files?',
      moves: `${MORRA} dxc3 Nxc3`,
      orientation: 'white',
      choices: [
        { text: 'The c-file is open, and the d-file is half-open for White', correct: true, why: "Yes. Neither side has a c-pawn. On the d-file only Black has a pawn, so it is half-open for White's rook." },
        { text: 'Both files are fully open', why: 'Black still has the d-pawn, so the d-file is only half-open.' },
        { text: 'Both files are closed', why: 'Both c-pawns are gone, so the c-file is open. White has no d-pawn either.' }
      ]
    },
    {
      type: 'move',
      prompt: "Black to move. White threatens e4–e5. What is Black's safest move?",
      moves: RD1,
      orientation: 'black',
      choices: [
        { text: '9...e5', correct: true, why: 'Right. The pawn blocks e4–e5 for good, and the position is roughly equal.' },
        { text: '9...O-O', why: '10.e5! hits f6 and d6, and White is better. 10...dxe5?? even loses the queen to 11.Rxd8.' },
        { text: '9...a6', why: 'Too slow. After 10.e5! the knight is attacked and the d-file opens, and White is clearly better.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does White play 10.h3 after 9...e5?',
      moves: SETUP.split(' ').slice(0, 19).join(' '),
      orientation: 'white',
      choices: [
        { text: "To stop ...Bg4, which would pin the f3-knight to the queen on e2", correct: true, why: "Yes. 9...e5 opened the c8-bishop's diagonal, so g4 needed covering." },
        { text: 'To prepare g2–g4 and a pawn storm', why: "White isn't storming here. The point is to keep the c8-bishop off g4." },
        { text: 'To attack the e5-pawn', why: 'A pawn on h3 attacks g4, not e5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Which opening is this?',
      moves: MORRA,
      orientation: 'white',
      choices: [
        { text: 'The Smith–Morra Gambit', correct: true, why: 'Yes. 2.d4 cxd4 3.c3: White offers a pawn for quick development.' },
        { text: 'The Alapin Variation', why: 'The Alapin is 2.c3 at once, with no pawn offered. Here White played 2.d4 first.' },
        { text: 'The Danish Gambit', why: 'The Danish is the same idea after 1.e4 e5: 2.d4 exd4 3.c3. Here Black played 1...c5.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black castled too early, and White has just played 10.e5. Why is 10...dxe5 a blunder?',
      moves: E5_TRICK.split(' ').slice(0, 19).join(' '),
      orientation: 'black',
      choices: [
        { text: 'It opens the d-file, and 11.Rxd8 wins the queen for a rook', correct: true, why: "Right. The d6-pawn was the only thing between White's rook and Black's queen." },
        { text: 'It allows 11.Bxf7+, winning the queen', why: 'Not here. The problem is the open d-file: 11.Rxd8.' },
        { text: 'It is not a blunder: Black wins a pawn', why: 'Black wins a pawn but loses the queen to 11.Rxd8.' }
      ]
    }
  ],
  key: { name: 'Smith–Morra Gambit: 3.c3', moves: MORRA, orientation: 'white' },
  terms: [
    { term: 'Gambit', meaning: 'An opening where one side gives up material, usually a pawn, for faster development or attack.' },
    { term: 'Lead in development', meaning: 'Having more pieces out and ready to play than your opponent.' },
    { term: 'Half-open file', meaning: 'A file with a pawn of only one color on it. It is half-open for the side that has no pawn there.' }
  ]
})
