import { defineModule } from '../../../types'
import { NAJDORF } from '../lines'

/** najdorf-be2-nf5: 6.Be2 e5 7.Nf5?! d5! 8.Bg5 d4 9.Bxf6 Qxf6 10.Nd5 Qd8 */
const NF5 = `${NAJDORF} Be2 e5 Nf5 d5 Bg5 d4 Bxf6 Qxf6 Nd5 Qd8`
/** najdorf-6bc4: 6.Bc4 e6 7.Bb3 b5 8.O-O Be7 9.Qf3 Qc7 10.Qg3 O-O 11.Bh6 Ne8 */
const SOZIN = `${NAJDORF} Bc4 e6 Bb3 b5 O-O Be7 Qf3 Qc7 Qg3 O-O Bh6 Ne8`
/** najdorf-sozin-nxe4: 8...b4 9.Na4 Nxe4?! 10.Re1 d5 11.Bf4 */
const GRAB = `${NAJDORF} Bc4 e6 Bb3 b5 O-O b4 Na4 Nxe4 Re1 d5 Bf4`

export default defineModule({
  id: '2.8',
  title: 'Quiet sixth moves: 6.Be2 and 6.Bc4',
  minutes: 12,
  level: 2,
  goals: [
    'Know the plans behind 6.Be2 and 6.Bc4 for both sides',
    'Answer 7.Nf5?! with 7...d5!, not with 7...Bxf5',
    'Understand the Fischer–Sozin bishop and avoid the ...Nxe4?! pawn grab'
  ],
  intro:
    "Not every White player wants a pawn race. 6.Be2 and 6.Bc4 simply develop a bishop and get ready to castle short. They look calm, but each one has a sting. This module shows the plan behind each move and one typical mistake to avoid.",
  sections: [
    {
      kind: 'text',
      title: '6.Be2: the Opočenský',
      body:
        "After 6.Be2 e5, the main line is 7.Nb3 Be7 8.O-O O-O 9.Be3 Be6, the ...e5 structure you met in Module 2.2. White plays slowly: a4 to stop ...b5, and Nd5 to use the hole. Black develops naturally and guards d5 with pieces. The engine gives White a small edge.\n\nBut the d4-knight has a more tempting square than b3: f5. From there it eyes d6 and g7. Is 7.Nf5 strong?"
    },
    {
      kind: 'walkthrough',
      title: '7.Nf5?! d5!',
      intro: 'The knight jump looks active. Watch how Black uses the time to strike in the center.',
      moves: NF5,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The quiet bishop',
          text: '6.Be2. White develops and prepares to castle short.',
          arrows: [['f1', 'e2', 'green']]
        },
        12: {
          title: 'Kick the knight',
          text: '6...e5. The ...e5 structure again. The d4-knight must move.',
          arrows: [['e5', 'd4', 'red']]
        },
        13: {
          title: 'An active jump',
          text: '7.Nf5. The knight hits d6 and g7. It looks active, but it is a lone piece far from home, and it has spent another move.',
          arrows: [['f5', 'd6', 'red'], ['f5', 'g7', 'red']],
          ann: '?!'
        },
        14: {
          title: 'Strike in the center',
          text: '7...d5. Black pushes the "backward" pawn at once. It hits e4, and the f5-knight is still attacked by the c8-bishop.',
          arrows: [['d5', 'e4', 'red'], ['c8', 'f5', 'red']],
          ann: '!'
        },
        15: {
          title: 'White pins the knight',
          text: '8.Bg5. The bishop pins the f6-knight to the queen. Now ...Nxe4 would cost Black the queen.',
          arrows: [['g5', 'd8', 'red']]
        },
        16: {
          title: 'The pawn rolls on',
          text: '8...d4. The pawn advances and attacks the c3-knight. Black gains more space and more time.',
          arrows: [['d4', 'c3', 'red']]
        },
        17: {
          title: 'White trades',
          text: '9.Bxf6. White removes the knight before the c3-knight moves.',
          marks: ['f6']
        },
        18: {
          title: 'Queen takes back',
          text: '9...Qxf6. The queen recaptures and attacks the f5-knight.',
          arrows: [['f6', 'f5', 'red']]
        },
        19: {
          title: 'A knight with tempo',
          text: '10.Nd5. The other knight jumps to d5 and attacks the queen.',
          arrows: [['d5', 'f6', 'red']]
        },
        20: {
          title: 'Black is fine',
          text: "10...Qd8. The queen steps back. Black has a big pawn center on d4 and e5 and the two bishops. The engine slightly prefers Black.",
          marks: ['d4', 'e5']
        }
      }
    },
    {
      kind: 'warning',
      title: "Don't rush to take on f5",
      body:
        "Many players see a knight on f5 and take it at once. But after 7...Bxf5 8.exf5 d5, White keeps the two bishops and is slightly better. Playing 7...d5! first is clearly stronger: the knight is still attacked, and Black's center comes with tempo."
    },
    {
      kind: 'walkthrough',
      title: '6.Bc4: the Fischer–Sozin',
      intro: "The bishop goes to c4 and then b3. Watch the diagonal from b3 to f7.",
      moves: SOZIN,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'The Najdorf',
          text: '5...a6. White chooses an aggressive bishop move.',
          arrows: [['f1', 'c4', 'blue']]
        },
        11: {
          title: 'Aiming at f7',
          text: '6.Bc4. The bishop looks down the diagonal toward e6 and f7, the soft spots near Black\'s king.',
          arrows: [['c4', 'f7', 'red']]
        },
        12: {
          title: 'Blunting the bishop',
          text: '6...e6. Black puts a pawn on e6, guarded by the f7-pawn and the c8-bishop. The bishop now hits a wall.',
          arrows: [['c4', 'e6', 'blue']],
          marks: ['e6']
        },
        13: {
          title: 'Out of the way',
          text: '7.Bb3. The bishop steps back before ...b5 can hit it. From b3 it still aims at e6.',
          arrows: [['b3', 'e6', 'blue']]
        },
        14: {
          title: 'Queenside space',
          text: '7...b5. Black gains space and gets ready for ...Bb7 and ...b4.',
          arrows: [['b5', 'b4', 'blue']]
        },
        15: {
          title: 'White castles',
          text: '8.O-O. The king is safe. Next White brings the queen over to the kingside.'
        },
        16: {
          title: 'Ready to castle',
          text: '8...Be7. Black develops and prepares to castle.',
          arrows: [['e7', 'f6', 'green']]
        },
        17: {
          title: 'The queen swings over',
          text: '9.Qf3. The queen guards e4 and is on its way to g3.',
          arrows: [['f3', 'g3', 'blue']]
        },
        18: {
          title: 'Queen to c7',
          text: '9...Qc7. The queen develops and guards the d6-pawn.',
          arrows: [['c7', 'd6', 'green']]
        },
        19: {
          title: 'Pressure on g7',
          text: '10.Qg3. The queen attacks g7, which nothing defends right now, and also the d6-pawn.',
          arrows: [['g3', 'g7', 'red'], ['g3', 'd6', 'red']],
          marks: ['g7']
        },
        20: {
          title: 'Castling defends',
          text: '10...O-O. Black castles, and the king now guards g7.',
          arrows: [['g8', 'g7', 'green']]
        },
        21: {
          title: 'Bishop to h6',
          text: "11.Bh6. Now g7 is attacked twice. The g7-pawn can't take the bishop: it is pinned to the king by the queen on g3.",
          arrows: [['h6', 'g7', 'red'], ['g3', 'g8', 'red']],
          marks: ['g7']
        },
        22: {
          title: 'The knight defends',
          text: '11...Ne8. The knight steps back to guard g7. The engine calls the position about level.',
          arrows: [['e8', 'g7', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'A risky pawn grab',
      intro: "Black pushes ...b4 and then grabs the e4-pawn. Look where Black's king is.",
      moves: GRAB,
      start: 14,
      orientation: 'white',
      steps: {
        14: {
          title: 'Same start',
          text: '7...b5. The usual queenside move.',
          arrows: [['b5', 'b4', 'blue']]
        },
        15: {
          title: 'White castles',
          text: '8.O-O. White\'s rook is now one move from e1.',
          arrows: [['f1', 'e1', 'blue']]
        },
        16: {
          title: 'Kick the knight',
          text: '8...b4. The pawn attacks the c3-knight, which guards e4.',
          arrows: [['b4', 'c3', 'red']]
        },
        17: {
          title: 'Off to the edge',
          text: '9.Na4. The knight leaves, and the e4-pawn has no defender now.',
          marks: ['e4']
        },
        18: {
          title: 'The pawn grab',
          text: "9...Nxe4. Black wins a pawn. But Black's king is still on e8, and with White's e-pawn gone, the e-file is half-open toward it.",
          marks: ['e8'],
          ann: '?!'
        },
        19: {
          title: 'Rook to the e-file',
          text: '10.Re1. The rook attacks the e4-knight, and behind it lies the e-file toward Black\'s king.',
          arrows: [['e1', 'e4', 'red']]
        },
        20: {
          title: 'Holding on',
          text: '10...d5. The pawn defends the knight. But Black is still not developed, and the king is stuck in the center.',
          arrows: [['d5', 'e4', 'green']]
        },
        21: {
          title: 'More pieces join',
          text: "11.Bf4. Another White piece comes into play. White is much better: Black's extra pawn does not make up for the open lines around the king. 9...Bd7 or 9...Be7 was correct.",
          arrows: [['f4', 'b8', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'What to call 6.Bc4',
      body:
        '6.Bc4 is called the Sozin Attack. Against the Najdorf, it is usually called the Fischer–Sozin. The same bishop move against 5...Nc6 is covered in Module 4.4.'
    }
  ],
  takeaway:
    'Against 6.Be2 e5 7.Nf5?!, strike at once with 7...d5!. Against 6.Bc4, blunt the bishop with ...e6 and expand with ...b5, but finish developing before grabbing the e4-pawn.',
  lookAhead:
    "White has even more sixth moves. Module 2.9 covers 6.h3, 6.f4 and others, and a famous Fischer win against Najdorf himself.",
  drills: [
    {
      title: 'Punish 7.Nf5',
      prompt: "You're Black. White has jumped into f5 with 7.Nf5. Strike in the center, keep gaining time, and finish with your queen safe.",
      moves: NF5,
      start: 13,
      side: 'black',
      hints: [
        'Push the d-pawn one square to hit e4. Your c8-bishop still attacks the f5-knight.',
        'After 8.Bg5, push the pawn again. Take back on f6 with the queen, then step back when the d5-knight attacks it.'
      ],
      success: "7...d5!, 8...d4, 9...Qxf6 and 10...Qd8. Black has a big center and the two bishops."
    },
    {
      title: 'Punish the pawn grab',
      prompt: "You're White. Black has just grabbed a pawn with 9...Nxe4?!. Use the open e-file, then bring another piece into play.",
      moves: GRAB,
      start: 17,
      side: 'white',
      hints: ['Your f1-rook can reach the e-file in one move.', 'After 10...d5, develop your dark-squared bishop to an active square.'],
      success: "10.Re1 d5 11.Bf4. Black's king is stuck in the center, and White is much better."
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black to move. White has played 7.Nf5. What is the best answer?',
      moves: `${NAJDORF} Be2 e5 Nf5`,
      orientation: 'black',
      choices: [
        { text: '7...d5', correct: true, why: 'Right. The pawn hits e4, and the c8-bishop still attacks the f5-knight. Black is at least equal.' },
        { text: '7...Bxf5', why: 'The natural move, but after 8.exf5 d5 White keeps the two bishops and is slightly better.' },
        { text: '7...h6', why: 'A slow move. White gets time to reroute the knight, and Black misses the chance to strike with ...d5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Fischer–Sozin, which squares does the bishop on c4 (and later b3) aim at?',
      moves: `${NAJDORF} Bc4`,
      orientation: 'white',
      choices: [
        { text: 'e6 and f7', correct: true, why: 'Yes. Those are the soft spots near Black\'s king. Sacrifices on e6 or d5 often follow.' },
        { text: 'd6 and e7', why: 'd6 and e7 are dark squares. This bishop moves on light squares.' },
        { text: 'b7 and a8', why: 'The bishop points the other way, toward the kingside. Its diagonal runs from b3 to g8.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. Why is 9...Nxe4 a mistake here?',
      moves: `${NAJDORF} Bc4 e6 Bb3 b5 O-O b4 Na4`,
      orientation: 'black',
      choices: [
        { text: "After 10.Re1, White's rook uses the e-file against Black's king in the center", correct: true, why: 'Right. Black wins a pawn but falls behind in development, and White is much better. 9...Bd7 or 9...Be7 is correct.' },
        { text: 'It loses the knight at once', why: 'Black can hold the knight with 10...d5. The problem is the open e-file and the king on e8.' },
        { text: "It isn't a mistake: a free pawn is always good", why: 'Not when it opens lines toward your own king. White is much better after 10.Re1 d5 11.Bf4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does White play 7.Bb3 in the Fischer–Sozin?',
      moves: `${NAJDORF} Bc4 e6 Bb3`,
      orientation: 'white',
      choices: [
        { text: 'So that ...b5 does not hit the bishop, which keeps aiming at e6', correct: true, why: 'Yes. On c4 the bishop would be kicked by ...b5. On b3 it is safe and stays on the same diagonal.' },
        { text: 'To attack the a6-pawn', why: 'A bishop on b3 does not attack a6. The move is a safety step before ...b5.' },
        { text: 'To guard the c3-knight', why: 'A bishop on b3 does not guard c3. It is getting out of the way of ...b5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Against 6.Be2 e5 7.Nf5, why is 7...d5 better than 7...Bxf5?',
      choices: [
        { text: '...d5 strikes the center with tempo and keeps the two bishops', correct: true, why: 'Right. After 7...Bxf5 8.exf5 d5 White has the bishop pair and is slightly better. After 7...d5 the engine slightly prefers Black.' },
        { text: '7...Bxf5 loses a piece', why: 'It does not lose material. It is just less good, because White gets the two bishops.' },
        { text: '7...d5 wins the f5-knight by force', why: 'The knight is attacked by the c8-bishop, but the e4-pawn defends it, and it survives. Black simply gets a good center.' }
      ]
    },
    {
      type: 'concept',
      prompt: "After 11.Bh6 in the Fischer–Sozin, why can't Black play ...gxh6?",
      moves: `${NAJDORF} Bc4 e6 Bb3 b5 O-O Be7 Qf3 Qc7 Qg3 O-O Bh6`,
      orientation: 'black',
      choices: [
        { text: 'The g7-pawn is pinned to the king by the queen on g3', correct: true, why: 'Yes. If the pawn left the g-file, the queen would attack the king. That move is illegal.' },
        { text: 'The bishop on h6 is defended by the queen', why: 'Even a defended bishop could be taken. The real reason is the pin on the g-file.' },
        { text: 'Pawns cannot capture backward', why: 'True, but g7xh6 would be a forward capture. It is the pin on the g-file that stops it.' }
      ]
    }
  ],
  key: { name: 'Opočenský: 7.Nf5 d5!', moves: `${NAJDORF} Be2 e5 Nf5 d5`, orientation: 'black' },
  terms: [
    { term: 'Opočenský Variation', meaning: 'The Najdorf with 6.Be2. White develops quietly and castles short.' },
    { term: 'Fischer–Sozin Attack', meaning: 'The Najdorf with 6.Bc4. The bishop aims at e6 and f7.' },
    { term: 'Open file', meaning: 'A file with no pawns on it. Rooks and queens can use it to reach the enemy king.' }
  ]
})
