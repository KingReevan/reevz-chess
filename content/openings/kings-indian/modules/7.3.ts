import { defineModule } from '../../../types'
import { FOUR_PAWNS } from '../lines'

/** 9...Re8: the rook hits e4 */
const RE8 = `${FOUR_PAWNS} Re8`
/** four-pawns-9re8-10nd2: 10.Nd2 Na6 11.O-O Nc7 12.a4 b6 */
const ND2 = `${RE8} Nd2 Na6 O-O Nc7 a4 b6`
/** four-pawns-10oo-trap: 10.O-O? Nxe4! 11.Nxe4 Rxe4 12.Bd3 Re8 */
const TRAP = `${RE8} O-O Nxe4 Nxe4 Rxe4 Bd3 Re8`

export default defineModule({
  id: '7.3',
  title: '9...Re8 and the e4-pawn',
  minutes: 10,
  level: 3,
  goals: [
    'Count attackers and defenders on e4 after 9...Re8',
    'Defend e4 calmly with 10.Nd2, and know the plans that follow',
    'Win a pawn with 10...Nxe4! if White castles too early'
  ],
  intro:
    "After 9.cxd5 Re8, Black's rook and knight both aim at e4, and only the c3-knight defends it. Module 7.2 showed White's sharp answer, 10.e5. This module shows the calm answer, 10.Nd2, and what happens if White ignores the threat and simply castles.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The calm defense: 10.Nd2',
      intro: 'Count the attackers and defenders of e4 after every move.',
      moves: ND2,
      start: 18,
      orientation: 'white',
      steps: {
        18: {
          title: 'Two against one',
          text: '9...Re8. The e4-pawn is attacked twice (the e8-rook and the f6-knight) and defended once (the c3-knight). Black threatens ...Nxe4.',
          arrows: [['e8', 'e4', 'red'], ['f6', 'e4', 'red'], ['c3', 'e4', 'green']]
        },
        19: {
          title: 'A second defender',
          text: '10.Nd2. The knight steps back to guard e4. Now two pieces attack e4 and two defend it, so ...Nxe4 no longer wins a pawn. From d2 the knight can also jump to c4 and hit the d6-pawn.',
          arrows: [['d2', 'e4', 'green'], ['d2', 'c4', 'blue']]
        },
        20: {
          title: 'A knight on the rim, for now',
          text: '10...Na6. The knight heads for c7. From there it will support ...b5, the push of Black\'s queenside majority.',
          arrows: [['a6', 'c7', 'blue']]
        },
        21: {
          title: 'Now White castles',
          text: '11.O-O. With e4 guarded twice, castling is safe. The rook on f1 also stands behind the f4-pawn.',
          arrows: [['e1', 'g1', 'green']]
        },
        22: {
          title: 'The knight arrives',
          text: '11...Nc7. The knight supports b5 and also attacks d5.',
          arrows: [['c7', 'b5', 'blue'], ['c7', 'd5', 'red']]
        },
        23: {
          title: 'Stop ...b5',
          text: "12.a4. The engine's top choice. The a4-pawn guards b5, so Black cannot push ...b5 for free.",
          arrows: [['a4', 'b5', 'green']],
          marks: ['b5']
        },
        24: {
          title: 'Patience',
          text: '12...b6. The b6-pawn guards c5, and Black keeps ...a6 and ...b5 for later. The position is roughly equal: White pushes for e4–e5, Black for ...b5.',
          arrows: [['b6', 'c5', 'green'], ['a7', 'a6', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The trap: 10.O-O?',
      intro: 'Castling is usually a good move. Here it forgets about e4.',
      moves: TRAP,
      start: 18,
      orientation: 'black',
      steps: {
        18: {
          title: 'The same threat',
          text: '9...Re8. Again e4 is attacked twice and defended once.',
          arrows: [['e8', 'e4', 'red'], ['f6', 'e4', 'red'], ['c3', 'e4', 'green']]
        },
        19: {
          title: 'A natural mistake',
          text: '10.O-O. White castles and does nothing about e4. The count is still two attackers against one defender.',
          arrows: [['e1', 'g1', 'blue']],
          marks: ['e4'],
          ann: '?'
        },
        20: {
          title: 'Take the pawn',
          text: "10...Nxe4. Black's only good move, and a strong one. If White takes the knight, the rook takes back.",
          arrows: [['e8', 'e4', 'green']],
          ann: '!'
        },
        21: {
          title: 'White takes',
          text: '11.Nxe4. White\'s best try. Other moves let Black take on c3 as well and damage White\'s pawns.',
          marks: ['e4']
        },
        22: {
          title: 'The rook takes back',
          text: '11...Rxe4. Count: Black has taken a pawn and a knight, White has taken a knight. Black is a clean pawn up.',
          marks: ['e4']
        },
        23: {
          title: 'The rook is attacked',
          text: '12.Bd3. The bishop attacks the rook on e4.',
          arrows: [['d3', 'e4', 'red']]
        },
        24: {
          title: 'A pawn up',
          text: '12...Re8. The rook goes home. Black is a pawn up, and the engine says Black is clearly better.',
          arrows: [['e4', 'e8', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'How to count',
      body:
        "To see whether a capture wins material, count the pieces that **attack** a square and the pieces that **defend** it.\n\nAfter 9...Re8, e4 is attacked twice (the e8-rook and the f6-knight). It is defended once (the c3-knight). Look carefully at the pieces that do **not** count: the e2-bishop moves diagonally, so it cannot reach e4 straight up the file, and the f3-knight guards d4 and e5, not e4. Two against one means the pawn can be taken.\n\nAfter 10.Nd2 the count is two against two. Now 10...Nxe4? 11.Ncxe4 Rxe4?? 12.Nxe4 just loses a knight and a rook for a pawn and a knight. When the count is equal, the capture does not work."
    },
    {
      kind: 'warning',
      title: 'Castle after you count',
      body:
        "Castling is almost always useful, which is exactly why 10.O-O? is so easy to play. Before any quiet move, ask: what does my opponent threaten right now? After 9...Re8 the answer is ...Nxe4, so White must deal with it first (10.Nd2 or 10.e5)."
    }
  ],
  takeaway:
    "After 9...Re8, e4 is attacked twice and defended once. White must react: 10.Nd2 adds a second defender and leads to a roughly equal game, while 10.O-O? Nxe4! 11.Nxe4 Rxe4 leaves Black a clean pawn up.",
  lookAhead:
    'Module 7.4 shows the other side of this trick: what happens if Black grabs on e4 one move too early, with 9...Nxe4?.',
  drills: [
    {
      title: 'Hold e4',
      prompt: "You're White. Black has just played 9...Re8, attacking e4 twice. Defend it with a knight, castle, and then stop Black's ...b5.",
      moves: `${RE8} Nd2 Na6 O-O Nc7 a4`,
      start: 18,
      side: 'white',
      hints: ['Which knight can step back to guard e4?', 'Nd2, then O-O, then a pawn to guard b5.'],
      success: "10.Nd2, 11.O-O and 12.a4. The e4-pawn is safe and Black's ...b5 is slowed down."
    },
    {
      title: 'Punish 10.O-O?',
      prompt: "You're Black. White has just castled with 10.O-O?, forgetting about e4. Win the pawn, and keep your rook safe.",
      moves: TRAP,
      start: 19,
      side: 'black',
      hints: ['Count the attackers and defenders of e4.', 'Take with the knight. If White takes back, the rook takes back. When the bishop attacks it, retreat.'],
      success: '10...Nxe4!, 11...Rxe4 and 12...Re8. A clean pawn up, and Black is clearly better.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 9...Re8, how many times is the e4-pawn attacked, and how many times is it defended?',
      moves: RE8,
      orientation: 'white',
      choices: [
        { text: 'Attacked twice, defended once', correct: true, why: 'Right. The rook and the f6-knight attack it; only the c3-knight defends it.' },
        { text: 'Attacked once, defended once', why: 'The rook on e8 attacks e4 too: the e-file is clear between them.' },
        { text: 'Attacked twice, defended twice', why: "Neither the e2-bishop nor the f3-knight guards e4. Only the c3-knight does." }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Which move adds a second defender to the e4-pawn?',
      moves: RE8,
      orientation: 'white',
      choices: [
        { text: '10.Nd2', correct: true, why: 'Right. The knight guards e4 from d2 and can go on to c4.' },
        { text: '10.O-O', why: "Castling doesn't guard e4. After 10...Nxe4! Black wins a pawn." },
        { text: '10.Be3', why: 'The bishop develops and eyes c5, but it does not guard e4.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White has just castled. What is the strongest move?',
      moves: `${RE8} O-O`,
      orientation: 'black',
      choices: [
        { text: '10...Nxe4', correct: true, why: 'Right. Two attackers against one defender: after 11.Nxe4 Rxe4 Black is a clean pawn up.' },
        { text: '10...Bg4', why: 'A normal developing move, but it misses the free pawn. White is a little better after it.' },
        { text: '10...Nbd7', why: 'Solid, but it lets White off the hook. Next move White can guard e4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 10.O-O Nxe4 11.Nxe4 Rxe4, what is the material balance?',
      moves: `${RE8} O-O Nxe4 Nxe4 Rxe4`,
      orientation: 'black',
      choices: [
        { text: 'Black is a pawn up', correct: true, why: 'Right. Each side has lost a knight, and White has also lost the e4-pawn.' },
        { text: 'Material is level', why: 'Count again: the knights were traded, but the e4-pawn is gone too.' },
        { text: 'Black is a piece up', why: 'White took the knight on e4, so the knights were traded. Black is only a pawn up.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'Why does White play 10.Nd2 here?',
      moves: `${RE8} Nd2`,
      orientation: 'white',
      choices: [
        { text: 'To guard e4 a second time, and to head for c4 where the knight hits d6', correct: true, why: 'Right. The knight defends and gets a better square at the same time.' },
        { text: 'To prepare f4–f5 against the king', why: 'The knight on d2 does nothing for f5. Its jobs are e4 and c4.' },
        { text: 'To free the f3-square for the queen', why: "That isn't the idea. The knight was not defending e4 from f3, so it moves to a square where it does." }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 10.Nd2 Na6 11.O-O Nc7, why does White play 12.a4?',
      moves: `${RE8} Nd2 Na6 O-O Nc7 a4`,
      orientation: 'white',
      choices: [
        { text: "To guard b5, so Black's ...b5 does not come for free", correct: true, why: 'Right. The c7-knight was there to support ...b5; a4 makes that push harder.' },
        { text: 'To start an attack on Black\'s king', why: "Black's king is on g8, far from the a-pawn. a4 is about the queenside pawns." },
        { text: 'To trap the c7-knight', why: 'The knight is not trapped: it can still go back to a6 or forward to e6. a4 is about the ...b5 push.' }
      ]
    }
  ],
  key: { name: 'Four Pawns: 9...Re8 10.O-O? Nxe4!', moves: `${RE8} O-O Nxe4`, orientation: 'black' },
  terms: [
    { term: 'Attackers and defenders', meaning: 'The pieces that can capture on a square, for each side. If attackers outnumber defenders, the piece or pawn there can usually be won.' },
    { term: 'Clean pawn up', meaning: 'One pawn ahead, with no compensation for the other side.' },
    { term: 'Quiet move', meaning: 'A move that does not capture, check or threaten. It can be a mistake if it ignores the opponent\'s threat.' }
  ]
})
