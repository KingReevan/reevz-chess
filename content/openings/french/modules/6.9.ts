import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** cla-4exd5: 4.exd5 exd5 5.Bg5 Be7 6.Bd3 Nc6 7.Nge2 O-O */
const SVEN = `${CLASSICAL} exd5 exd5 Bg5 Be7 Bd3 Nc6 Nge2 O-O`
/** 5.Bd3 Nc6 6.Nge2 Bd6 7.Bg5: the position where ...O-O? loses the d5-pawn */
const PIN = `${CLASSICAL} exd5 exd5 Bd3 Nc6 Nge2 Bd6 Bg5`
/** cla-4exd5-trap: 7...O-O? 8.Nxd5 Bb4+ 9.Nxb4 Nxb4 */
const TRAP = `${PIN} O-O Nxd5 Bb4+ Nxb4 Nxb4`

export default defineModule({
  id: '6.9',
  title: '4.exd5: the Delayed Exchange and the d5 pin',
  minutes: 10,
  level: 3,
  goals: [
    'Play the Delayed Exchange safely: 5.Bg5 Be7 breaks the pin',
    'Spot the trap: with the bishop on d6, ...O-O? lets White take on d5',
    'Know who defends d5, and why a bishop on d6 cuts off the queen'
  ],
  intro:
    "After 3...Nf6, White can trade with 4.exd5. The position is symmetrical and level, so it looks harmless. But one natural set-up for Black hides a trap. When Black's bishop goes to d6 and White pins the f6-knight, the d5-pawn can fall. Which piece really defends d5?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The safe way: 5.Bg5 Be7',
      intro: 'Count the defenders of d5 after every move.',
      moves: SVEN,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The Classical',
          text: '3...Nf6. The knight attacks e4 a second time.',
          arrows: [['f6', 'e4', 'red'], ['d5', 'e4', 'red']]
        },
        7: {
          title: 'White trades',
          text: '4.exd5. The Delayed Exchange: White trades on d5 one move later than in the Exchange Variation.',
          arrows: [['e4', 'd5', 'red']]
        },
        8: {
          title: 'Symmetry',
          text: '4...exd5. The pawns are symmetrical. The d5-pawn is guarded twice: by the f6-knight and by the queen down the d-file.',
          arrows: [['f6', 'd5', 'green'], ['d8', 'd5', 'green']],
          marks: ['d5']
        },
        9: {
          title: 'The pin',
          text: '5.Bg5. The f6-knight is pinned to the queen. The c3-knight attacks d5.',
          arrows: [['g5', 'f6', 'red'], ['f6', 'd8', 'yellow'], ['c3', 'd5', 'red']]
        },
        10: {
          title: 'Break the pin',
          text: '5...Be7. The bishop steps between the knight and the queen. The queen\'s path down the d-file stays clear, so it still guards d5. This is the Svenonius Variation.',
          arrows: [['f8', 'e7', 'green'], ['d8', 'd5', 'green']]
        },
        11: {
          title: 'White develops',
          text: '6.Bd3. The bishop develops and looks toward h7.',
          arrows: [['d3', 'h7', 'blue']]
        },
        12: {
          title: 'Black develops',
          text: '6...Nc6. The knight comes out and hits d4.',
          arrows: [['c6', 'd4', 'red']]
        },
        13: {
          title: 'Knight to e2',
          text: '7.Nge2. The knight develops. From e2 it supports the c3-knight and can go to g3 or f4.',
          arrows: [['e2', 'c3', 'green'], ['e2', 'g3', 'blue']]
        },
        14: {
          title: 'Castling is safe',
          text: '7...O-O. With the pin broken and the queen guarding d5, castling is fine. The position is level.',
          arrows: [['e8', 'g8', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The trap: ...Bd6 and ...O-O?',
      intro: "This time Black's bishop goes to d6. Watch the d-file.",
      moves: TRAP,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'The same structure',
          text: '4...exd5. Now White develops the bishop first.',
          arrows: [['f1', 'd3', 'blue']]
        },
        9: {
          title: 'Bishop first',
          text: '5.Bd3. White waits with Bg5.',
          arrows: [['d3', 'h7', 'blue']]
        },
        10: {
          title: 'Develop',
          text: '5...Nc6. A natural developing move.',
          arrows: [['c6', 'd4', 'red']]
        },
        11: {
          title: 'Knight to e2',
          text: '6.Nge2. The knight develops to e2 and keeps the f-pawn free to advance.',
          arrows: [['g1', 'e2', 'blue']]
        },
        12: {
          title: 'A copycat bishop',
          text: '6...Bd6. It looks natural: the bishop mirrors White\'s. But it stands on the d-file, between the queen and the d5-pawn. The queen no longer guards d5.',
          arrows: [['d8', 'd6', 'yellow']],
          marks: ['d6', 'd5']
        },
        13: {
          title: 'Pin the last defender',
          text: '7.Bg5. Now the f6-knight is pinned to the queen, and it is the only defender of d5. White threatens 8.Nxd5.',
          arrows: [['g5', 'f6', 'red'], ['f6', 'd8', 'yellow'], ['c3', 'd5', 'red']],
          marks: ['d5']
        },
        14: {
          title: 'Castling does nothing',
          text: "7...O-O. Black castles, but the knight is pinned to the queen, not to the king, so castling doesn't help at all.",
          ann: '?'
        },
        15: {
          title: 'The pawn falls',
          text: '8.Nxd5. White takes the pawn. If 8...Nxd5, then 9.Bxd8 wins Black\'s queen. The d5-knight now hits the pinned knight a second time.',
          arrows: [['d5', 'f6', 'red'], ['g5', 'f6', 'red']],
          ann: '!'
        },
        16: {
          title: 'A check to trade',
          text: '8...Bb4+. Black\'s best: the bishop leaves the d-file with check, so the queen now hits the d5-knight too. White\'s best answer is to take the bishop.',
          arrows: [['b4', 'e1', 'red']]
        },
        17: {
          title: 'Take the bishop',
          text: '9.Nxb4. The d5-knight takes the checking bishop.',
          marks: ['b4']
        },
        18: {
          title: 'A clean pawn',
          text: '9...Nxb4. Black takes back. White has won the d5-pawn, and the engine says White is clearly better.',
          marks: ['d5']
        }
      }
    },
    {
      kind: 'text',
      title: 'Who guards d5?',
      body:
        "In the symmetrical structure, Black's d5-pawn usually has two guards: the **f6-knight** and the **queen on d8**, looking down the d-file.\n\nA bishop on **d6** cuts the queen's line, so only the knight is left. When White pins that knight with Bg5, d5 has no real defender: the knight can't take back on d5 without losing the queen to Bxd8.\n\nThe cure is **7...Be7!** It breaks the pin and clears the d-file for the queen again, so d5 is guarded twice. Note that castling is no cure: the knight is pinned to the queen, not to the king."
    },
    {
      kind: 'tip',
      title: 'For White: watch for blocked defenders',
      body:
        "In symmetrical positions, look at which pieces really guard each pawn. A defender can be pinned, or its line can be blocked by its own piece. Here Bg5 pins the knight and the d6-bishop blocks the queen, so Nxd5 wins a clean pawn."
    }
  ],
  takeaway:
    'In the Delayed Exchange, break the Bg5 pin with ...Be7. If Black\'s bishop stands on d6, it blocks the queen from d5; after Bg5, ...O-O? allows Nxd5, because the pinned f6-knight cannot take back.',
  lookAhead:
    'Chapter 7 turns to the Winawer, 3...Bb4, where Black pins the c3-knight at once and the game becomes much sharper.',
  drills: [
    {
      title: 'Win the d5-pawn',
      prompt: "You're White. Black has just castled with 7...O-O, leaving the d5-pawn with only a pinned defender. Take it, and take the bishop when it checks.",
      moves: TRAP.split(' ').slice(0, 17).join(' '),
      start: 14,
      side: 'white',
      hints: ['Which pawn is guarded only by the pinned knight?', 'After 8...Bb4+, the d5-knight can take the bishop.'],
      success: '8.Nxd5 Bb4+ 9.Nxb4. White wins the d5-pawn and is clearly better.'
    },
    {
      title: 'The safe set-up',
      prompt: "You're Black. White has traded with 4.exd5. Take back, break the pin with the right bishop move, develop the queen's knight and castle.",
      moves: SVEN,
      start: 6,
      side: 'black',
      hints: ['Take back with the e-pawn.', 'After 5.Bg5, put the bishop on e7, not d6. Then ...Nc6 and castle.'],
      success: '4...exd5, 5...Be7, 6...Nc6 and 7...O-O. The position is level, and d5 is guarded twice.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'After 7.Bg5 in the ...Bd6 line, what does White threaten?',
      moves: PIN,
      orientation: 'black',
      choices: [
        { text: '8.Nxd5, winning the pawn', correct: true, why: 'Right. The f6-knight is pinned to the queen, and the d6-bishop blocks the queen from d5. Nothing can safely take back.' },
        { text: '8.Bxf6, winning a piece', why: '8.Bxf6 Qxf6 is an even trade, not a piece won. The direct threat is Nxd5.' },
        { text: '8.Bxh7+, a Greek Gift', why: "Black hasn't castled yet, so there is no king on g8 to attack. The threat is on d5." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just played 7.Bg5. What is the right move?',
      moves: PIN,
      orientation: 'black',
      choices: [
        { text: '7...Be7', correct: true, why: 'Right. The bishop breaks the pin and clears the d-file, so the queen guards d5 again. The position stays level.' },
        { text: '7...O-O', why: 'The trap: 8.Nxd5! wins a pawn, because the knight is pinned to the queen, not the king.' },
        { text: '7...h6', why: 'After 8.Bxf6 Qxf6 9.Nxd5, the pawn falls anyway: the f6-knight, its only defender, is gone.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 7...O-O 8.Nxd5, why can\'t Black take back with 8...Nxd5?',
      moves: `${PIN} O-O Nxd5`,
      orientation: 'black',
      choices: [
        { text: 'The f6-knight is pinned: 9.Bxd8 would win the queen', correct: true, why: 'Right. The knight shields the d8-queen from the g5-bishop.' },
        { text: 'It is illegal, because the king would be in check', why: 'The knight is pinned to the queen, not to the king. Moving it is legal, but it loses the queen.' },
        { text: 'The d5-knight is defended twice', why: 'In fact nothing defends the d5-knight. The problem is the pin: the f6-knight can\'t leave the g5–d8 diagonal without losing the queen.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the safe line, why is 5...Be7 a good answer to 5.Bg5?',
      moves: `${CLASSICAL} exd5 exd5 Bg5`,
      orientation: 'black',
      choices: [
        { text: 'It breaks the pin, and the queen still guards d5 down the d-file', correct: true, why: 'Right. Both guards of d5 stay active, and Black can castle safely.' },
        { text: 'It attacks the g5-bishop', why: 'The f6-knight stands between the two bishops, so ...Be7 does not attack g5. The point is breaking the pin.' },
        { text: 'It prepares ...Bd6 next', why: 'The bishop is best on e7 here. On d6 it would block the queen from d5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'In the trap line 7...O-O? 8.Nxd5 Bb4+ 9.Nxb4 Nxb4, what has White won?',
      moves: TRAP,
      orientation: 'white',
      choices: [
        { text: 'A pawn, with a clearly better position', correct: true, why: 'Right. White took the d5-pawn, and the bishop-for-knight trade was even.' },
        { text: 'The queen', why: 'Black avoided 8...Nxd5?? 9.Bxd8. With 8...Bb4+, Black loses only the pawn.' },
        { text: 'A whole piece', why: 'Bishop for knight is an even trade. White is a pawn up.' }
      ]
    },
    {
      type: 'name',
      prompt: 'What is 3.Nc3 Nf6 4.exd5 called?',
      moves: `${CLASSICAL} exd5`,
      orientation: 'black',
      choices: [
        { text: 'The Delayed Exchange', correct: true, why: 'Right. White trades on d5 one move later than in the Exchange Variation. After 4...exd5 5.Bg5 the line is also called the Svenonius Variation.' },
        { text: 'The Exchange Variation', why: 'The Exchange Variation is 3.exd5. Here White trades after 3.Nc3 Nf6, so it is the Delayed Exchange.' },
        { text: 'The Steinitz Variation', why: 'The Steinitz is 4.e5, pushing the pawn instead of trading it.' }
      ]
    }
  ],
  key: { name: 'Delayed Exchange: 7.Bg5, d5 hangs after ...O-O?', moves: PIN, orientation: 'black' },
  terms: [
    { term: 'Delayed Exchange', meaning: '3.Nc3 Nf6 4.exd5: White trades on d5 one move later than in the Exchange Variation.' },
    { term: 'Svenonius Variation', meaning: '4.exd5 exd5 5.Bg5: White pins the f6-knight in the Delayed Exchange.' },
    { term: 'Relative pin', meaning: 'A pin to a piece other than the king. The pinned piece may legally move, but it costs the piece behind it, here the queen.' }
  ]
})
