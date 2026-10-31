import { defineModule } from '../../../types'
import { RUY } from '../../../lines'

const IDEA = `${RUY} f5 Nc3 fxe4 Nxe4`
const NF6 = `${IDEA} Nf6 Nxf6+ Qxf6 Qe2 Be7 Bxc6 bxc6 Nxe5`
const D5 = `${IDEA} d5 Nxe5 dxe4 Nxc6 Qg5 Qe2 Nf6 f4 Qxf4 Ne5+ c6`

export default defineModule({
  id: '8.1',
  title: 'Schliemann: 3...f5 and 4.Nc3',
  minutes: 11,
  level: 3,
  goals: [
    'Understand why 3...f5 hits e4 and opens the f-file',
    'Know the calm 5...Nf6 line: a pawn for two bishops and open lines',
    "Spot White's discovered checks in the sharp 5...d5 line"
  ],
  intro:
    "Most Black defences answer 3.Bb5 slowly. The Schliemann does the opposite: on move three Black pushes the f-pawn and attacks White's centre at once. What does Black gain from such an early punch, and how should White meet it with 4.Nc3?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The idea behind 3...f5',
      intro: 'Five moves that show what the Schliemann is about.',
      moves: IDEA,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The Spanish position',
          text: "White's bishop attacks the knight that guards e5. Most defences protect e5 or chase the bishop. The Schliemann attacks instead.",
          arrows: [['b5', 'c6', 'red'], ['c6', 'e5', 'green']]
        },
        6: {
          title: 'Hit the centre',
          text: "3...f5. Black's f-pawn attacks the e4-pawn. If the f-pawn ever trades itself off, the f-file opens for Black's rook.",
          arrows: [['f5', 'e4', 'red'], ['h8', 'f8', 'blue']],
          marks: ['e4']
        },
        7: {
          title: 'Defend and develop',
          text: '4.Nc3. The knight guards e4 and gets developed in one move. This is the sharpest answer to the Schliemann.',
          arrows: [['c3', 'e4', 'green']]
        },
        8: {
          title: 'Take with a threat',
          text: '4...fxe4. Black wins a centre pawn, and the new pawn on e4 attacks the knight on f3.',
          arrows: [['e4', 'f3', 'red']],
          marks: ['f3']
        },
        9: {
          title: 'White takes back',
          text: "5.Nxe4. Material is level again, but now White's knight sits proudly in the centre. Black has two main ways to deal with it: 5...Nf6 or 5...d5.",
          arrows: [['g8', 'f6', 'blue'], ['d7', 'd5', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '5...Nf6: a pawn for activity',
      intro: 'The calmer main line. Watch what Black gives up, and what Black gets back.',
      moves: NF6,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'Challenge the knight',
          text: "Black's plan is simple: offer to trade the strong e4-knight.",
          arrows: [['g8', 'f6', 'green']]
        },
        10: {
          title: 'Knight against knight',
          text: '5...Nf6. Black develops and attacks the e4-knight.',
          arrows: [['f6', 'e4', 'red']]
        },
        11: {
          title: 'The trade, with check',
          text: "6.Nxf6+. White swaps knights. Remember: after ...f5, the e8-king is more open than usual.",
          arrows: [['f6', 'e8', 'red']]
        },
        12: {
          title: 'The queen recaptures',
          text: "6...Qxf6. Black's queen comes out early, but here it does real work: it guards e5 and presses on the f3-knight down the f-file.",
          arrows: [['f6', 'e5', 'green'], ['f6', 'f3', 'blue']]
        },
        13: {
          title: 'The e-file',
          text: "7.Qe2. White's queen and knight both attack e5 now, and the queen lines up on the e-file with Black's king.",
          arrows: [['e2', 'e5', 'red'], ['f3', 'e5', 'red']],
          marks: ['e8']
        },
        14: {
          title: 'Block and get ready to castle',
          text: '7...Be7. The bishop develops and puts a piece between the queen and the king. With f8 and g8 empty, Black is ready to castle.',
          arrows: [['e1', 'e8', 'blue'], ['e8', 'g8', 'green']]
        },
        15: {
          title: 'Remove the guard',
          text: '8.Bxc6. The Spanish idea: take the knight that guards e5.',
          arrows: [['b5', 'c6', 'red']],
          marks: ['e5']
        },
        16: {
          title: 'Open the b-file',
          text: "8...bxc6. Black takes back with the b-pawn. Now e5 is attacked twice and guarded only once, by the queen.",
          arrows: [['a8', 'b8', 'blue']],
          marks: ['e5']
        },
        17: {
          title: 'The Schliemann bargain',
          text: '9.Nxe5. White is a pawn up. In return Black has the two bishops, the open f- and b-files, and castles next move. Material for activity: that is the Schliemann.',
          arrows: [['c8', 'a6', 'blue'], ['f8', 'f2', 'blue']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'warning',
      title: 'Watch the h5-e8 diagonal',
      body:
        'Moving the f-pawn empties f7. Now the diagonal from h5 to e8 has nothing on it, so a white queen landing on h5 gives check. Every Schliemann player has to keep one eye on that diagonal.'
    },
    {
      kind: 'walkthrough',
      title: '5...d5: the sharp line',
      intro: 'This is where 4.Nc3 gets wild. Look for the bishop on b5 hiding behind the knight.',
      moves: D5,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'Kick the knight',
          text: "Black's other plan: hit the e4-knight with a pawn and grab the centre.",
          arrows: [['d7', 'd5', 'green']]
        },
        10: {
          title: 'A pawn attacks',
          text: '5...d5. The pawn attacks the knight. Most players would retreat it. White has something sharper.',
          arrows: [['d5', 'e4', 'red']]
        },
        11: {
          title: 'Counterattack',
          text: '6.Nxe5. White ignores the threat and grabs e5. Now the c6-knight is attacked twice, by the bishop and the knight, and guarded only once.',
          arrows: [['b5', 'c6', 'red'], ['e5', 'c6', 'red']],
          ann: '!'
        },
        12: {
          title: 'Black wins a knight',
          text: '6...dxe4. Black takes the knight on e4. For a moment Black is a piece up.',
          marks: ['e4']
        },
        13: {
          title: 'A knight with a secret',
          text: "7.Nxc6. White wins the piece back and attacks the queen. Look behind the knight: the bishop on b5 aims at e8, and d7 is empty. If the knight moves, it's check.",
          arrows: [['c6', 'd8', 'red'], ['b5', 'e8', 'yellow']]
        },
        14: {
          title: 'Queen out, with a threat',
          text: "7...Qg5. The queen escapes and attacks the g2-pawn, which nothing guards. If it falls, the rook on h1 is next.",
          arrows: [['g5', 'g2', 'red']],
          ann: '!'
        },
        15: {
          title: 'Aim at e4',
          text: "8.Qe2. White's queen attacks the e4-pawn and joins the e-file, where Black's king still stands.",
          arrows: [['e2', 'e4', 'red']]
        },
        16: {
          title: 'Guard and develop',
          text: '8...Nf6. The knight defends e4 and gets Black closer to castling.',
          arrows: [['f6', 'e4', 'green']]
        },
        17: {
          title: 'Chase the queen',
          text: '9.f4. White offers back the extra pawn to drive the queen away from g2.',
          arrows: [['f4', 'g5', 'red']]
        },
        18: {
          title: 'Black accepts',
          text: '9...Qxf4. Material is level again. The queen now guards e4 and eyes h2.',
          arrows: [['f4', 'e4', 'green'], ['f4', 'h2', 'red']]
        },
        19: {
          title: 'Discovered check',
          text: '10.Ne5+. The knight steps off the diagonal and the bishop on b5 gives check. This is the trick you saw coming on move 7.',
          arrows: [['b5', 'e8', 'red']],
          marks: ['e8']
        },
        20: {
          title: 'Block with a pawn',
          text: '10...c6. Black blocks the check and attacks the bishop at the same time. Both kings are still in the centre, and every move from here is sharp.',
          arrows: [['c6', 'b5', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Where the sharp line goes next',
      body:
        "The main line continues **11.d4 Qh4+ 12.g3 Qh3**. The move 11.d4 guards the e5-knight and opens the c1-bishop's diagonal, so the bishop now attacks the queen on f4. After 12...Qh3 the queen covers f1, so White can't castle kingside for now.\n\nYou don't need to memorise this yet. Remember the two themes: the knight in front of the b5-bishop gives **discovered checks**, and Black answers with fast, active queen moves."
    },
    {
      kind: 'history',
      title: 'Two names, one gambit',
      body:
        'The Schliemann is also called the Jaenisch Gambit. It is a good practical weapon but positionally risky, so it is rare at the very top. Teimour Radjabov is the best-known elite player who uses it regularly.'
    }
  ],
  takeaway:
    '3...f5 attacks e4 and opens the f-file, often at the cost of a pawn. Against 4.Nc3, 5...Nf6 trades a pawn for two bishops and open lines, while 5...d5 leads to tactics where White uses discovered checks from the b5-bishop.',
  lookAhead:
    'Next module: 4.d3, the calm answer most strong players choose today. It avoids these tactics and aims for a healthier structure.',
  drills: [
    {
      title: 'Play the 5...Nf6 line',
      prompt: "You're Black. Answer 3.Bb5 with the Schliemann and play the 5...Nf6 main line up to 8...bxc6.",
      moves: `${RUY} f5 Nc3 fxe4 Nxe4 Nf6 Nxf6+ Qxf6 Qe2 Be7 Bxc6 bxc6`,
      start: 5,
      side: 'black',
      hints: [
        'Start by attacking e4 with a pawn, then challenge the e4-knight with a knight.',
        'Take back on f6 with the queen, block the e-file with the bishop, and recapture on c6 with the b-pawn.'
      ],
      success: '3...f5, 4...fxe4, 5...Nf6, 6...Qxf6, 7...Be7 and 8...bxc6. White can take e5, but you get two bishops and open lines.'
    },
    {
      title: 'Meet 5...d5',
      prompt: "You're White. Black just hit your e4-knight with 5...d5. Don't retreat: counterattack, then win your piece back.",
      moves: `${IDEA} d5 Nxe5 dxe4 Nxc6`,
      start: 10,
      side: 'white',
      hints: [
        'The c6-knight is guarded only by the b7-pawn. Can you attack it a second time?',
        'Take on e5. After ...dxe4, take on c6 with the knight.'
      ],
      success: '6.Nxe5! and 7.Nxc6. Your knight attacks the queen, and any knight move will uncover a check from the b5-bishop.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 3...f5 attack straight away?',
      moves: `${RUY} f5`,
      orientation: 'black',
      choices: [
        { text: 'The pawn on e4', correct: true, why: 'Right. The f-pawn hits e4 at once, and if pawns trade, the f-file opens for Black.' },
        { text: 'The bishop on b5', why: 'The f5-pawn attacks e4 and g4. The bishop on b5 is untouched.' },
        { text: 'The knight on f3', why: 'Not yet. The f3-knight is only attacked after ...fxe4 puts a pawn on e4.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Black has just played 5...d5, attacking the knight. What is the main-line reply?',
      moves: `${IDEA} d5`,
      orientation: 'white',
      choices: [
        { text: '6.Nxe5', correct: true, why: 'Yes. White counterattacks: c6 is now hit twice and guarded once. After 6...dxe4 7.Nxc6 the piece comes back.' },
        { text: '6.Nc3', why: 'It saves the knight, but Black gains time with ...e4, hitting the f3-knight, and takes over the centre. The main line hits back instead.' },
        { text: '6.Ng3', why: 'A quiet retreat. Black follows up with ...e4 or ...Nf6 and keeps a big centre. 6.Nxe5 fights for the initiative instead.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 7.Nxc6 in the 5...d5 line, why is the knight on c6 so dangerous?',
      moves: `${IDEA} d5 Nxe5 dxe4 Nxc6`,
      orientation: 'black',
      choices: [
        { text: 'Any knight move uncovers a check from the b5-bishop', correct: true, why: 'Exactly. With d7 empty, only the knight stands between the b5-bishop and the e8-king.' },
        { text: 'It gives check to the king right now', why: "A knight on c6 doesn't attack e8. The danger is the bishop behind it." },
        { text: "It can't be captured", why: 'The b7-pawn can capture it. The real danger is the discovered check it can give.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 9.Nxe5 in the 5...Nf6 line, White is a pawn up. What does Black have in return?',
      moves: NF6,
      orientation: 'black',
      choices: [
        { text: 'The two bishops and open f- and b-files', correct: true, why: "Right. That's the Schliemann bargain: a pawn for active pieces." },
        { text: 'A big pawn centre', why: "Black's e- and f-pawns are gone, so there is no big centre. Black's pluses are the bishops and the open files." },
        { text: 'A safer king than White', why: "Both kings are still uncastled. Black's real compensation is piece activity." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why is 4.Nc3 a natural answer to 3...f5?',
      moves: `${RUY} f5`,
      orientation: 'white',
      choices: [
        { text: 'It develops a piece and defends e4', correct: true, why: 'Yes. The knight guards e4, and after 4...fxe4 5.Nxe4 it lands in the centre.' },
        { text: 'It stops Black from playing ...fxe4', why: 'Black can still take on e4. The knight simply takes back.' },
        { text: 'It attacks the f5-pawn', why: 'A knight on c3 attacks e4, d5, b5 and others, but not f5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 5...d5 line, why is 10.Ne5 a check?',
      moves: `${IDEA} d5 Nxe5 dxe4 Nxc6 Qg5 Qe2 Nf6 f4 Qxf4 Ne5+`,
      orientation: 'black',
      choices: [
        { text: 'The knight moved off the b5-e8 diagonal, so the bishop gives check', correct: true, why: "Correct. It's a discovered check: the piece that moved isn't the one giving check." },
        { text: 'The knight on e5 attacks e8', why: 'A knight on e5 attacks d7 and f7, not e8.' },
        { text: 'The queen on e2 checks along the e-file', why: 'The black pawn on e4 blocks the e-file.' }
      ]
    }
  ],
  key: { name: 'Schliemann Defense: 3...f5', moves: `${RUY} f5`, orientation: 'black' },
  terms: [
    { term: 'Gambit', meaning: 'Giving up material, usually a pawn, to gain time or active play.' },
    { term: 'Half-open file', meaning: 'A file with no pawn of your own on it, so your rook can use it.' },
    { term: 'Discovered check', meaning: 'A piece moves out of the way and uncovers a check from another piece behind it.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one. Strong in open positions.' }
  ]
})
