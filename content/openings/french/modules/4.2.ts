import { defineModule } from '../../../types'
import { TARRASCH } from '../lines'

/** tar-qxd5: 3...c5 4.exd5 Qxd5 5.Ngf3 cxd4 6.Bc4 Qd6 7.O-O Nf6 8.Nb3 Nc6 9.Nbxd4 Nxd4 10.Nxd4 a6 */
const QXD5 = `${TARRASCH} c5 exd5 Qxd5 Ngf3 cxd4 Bc4 Qd6 O-O Nf6 Nb3 Nc6 Nbxd4 Nxd4 Nxd4 a6`
/** tar-qxd5-plan: 11.Re1 Qc7 12.Bb3 Bd6 13.Nf3 O-O */
const PLAN = `${QXD5} Re1 Qc7 Bb3 Bd6 Nf3 O-O`
/** White's moves of tar-qxd5, ending with 10.Nxd4 */
const QXD5_WHITE = `${TARRASCH} c5 exd5 Qxd5 Ngf3 cxd4 Bc4 Qd6 O-O Nf6 Nb3 Nc6 Nbxd4 Nxd4 Nxd4`

export default defineModule({
  id: '4.2',
  title: '3...c5 4.exd5 Qxd5: the queen recapture',
  minutes: 11,
  level: 2,
  goals: [
    'Play the main line 4...Qxd5 5.Ngf3 cxd4 6.Bc4 Qd6 for both sides',
    "Count the attackers on d4 to see how White wins the pawn back",
    "Weigh White's lead in development against Black's extra center pawn"
  ],
  intro:
    "After 3...c5 4.exd5, Black has two ways to take back on d5. Taking with the e-pawn often leaves Black with a lone d-pawn, as Module 4.3 shows. Taking with the queen avoids that, but puts the queen in the center early. What does each side get?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main line to 10...a6',
      intro: 'Watch the d4-square: Black wins a pawn there, and White wins it back.',
      moves: QXD5,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'Strike at once',
          text: "3...c5. Black hits d4 straight away. The d2-knight doesn't attack d5, so White has less pressure on Black's center than after 3.Nc3.",
          arrows: [['c5', 'd4', 'red']]
        },
        7: {
          title: 'White trades on d5',
          text: '4.exd5. Now Black chooses how to take back: with the e-pawn (Module 4.3) or with the queen.',
          arrows: [['e6', 'd5', 'blue'], ['d8', 'd5', 'blue']]
        },
        8: {
          title: 'The queen takes back',
          text: "4...Qxd5. Black keeps a healthy pawn structure. The price: the queen stands in the center, where White's pieces can attack it.",
          marks: ['d5']
        },
        9: {
          title: 'Develop and defend',
          text: '5.Ngf3. The knight develops and defends d4. But d4 is attacked twice (the c5-pawn and the queen) and defended only once.',
          arrows: [['f3', 'd4', 'green'], ['c5', 'd4', 'red'], ['d5', 'd4', 'red']]
        },
        10: {
          title: 'A pawn up, for now',
          text: '5...cxd4. Black takes on d4 and is a pawn up for the moment. White is happy to win it back later.',
          marks: ['d4']
        },
        11: {
          title: 'Gaining time',
          text: '6.Bc4. The bishop develops and attacks the queen. Developing with a threat like this gains a tempo: Black has to spend a move on the queen.',
          arrows: [['c4', 'd5', 'red']]
        },
        12: {
          title: 'The queen steps back',
          text: '6...Qd6. From d6 the queen still guards the d4-pawn.',
          arrows: [['d6', 'd4', 'green']]
        },
        13: {
          title: 'No hurry',
          text: '7.O-O. White castles first. Black cannot hold on to the d4-pawn for long.',
          arrows: [['e1', 'g1', 'green']]
        },
        14: {
          title: 'Black develops',
          text: '7...Nf6. The knight comes out and covers the kingside.',
          arrows: [['g8', 'f6', 'green']]
        },
        15: {
          title: 'The d2-knight moves on',
          text: '8.Nb3. The knight hits d4. It also leaves d2, so the c1-bishop is free at last and the d1-queen can see down the d-file to d4.',
          arrows: [['b3', 'd4', 'red'], ['d1', 'd4', 'red']],
          marks: ['c1']
        },
        16: {
          title: 'Count on d4',
          text: '8...Nc6. Black defends d4 a second time, with the knight and the queen. But White attacks it three times: both knights and the queen.',
          arrows: [['b3', 'd4', 'red'], ['f3', 'd4', 'red'], ['d1', 'd4', 'red']],
          marks: ['d4']
        },
        17: {
          title: 'The pawn comes back',
          text: '9.Nbxd4. White wins the pawn back.',
          marks: ['d4']
        },
        18: {
          title: 'Trade knights',
          text: '9...Nxd4. Black trades a pair of knights.',
          arrows: [['f3', 'd4', 'blue']]
        },
        19: {
          title: 'Material is level',
          text: '10.Nxd4. Material is even. Black must not take again: 10...Qxd4?? 11.Qxd4 loses the queen, because the d1-queen guards d4.',
          arrows: [['d1', 'd4', 'green']]
        },
        20: {
          title: 'A useful little move',
          text: '10...a6. The pawn takes b5 away from White\'s knight and bishop, and prepares ...b5 to chase the c4-bishop and make room for ...Bb7.',
          arrows: [['a6', 'b5', 'green'], ['b7', 'b5', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'What each side has',
      body:
        "Count the pawns after 10...a6. White has pawns on a2, b2, c2, f2, g2 and h2. Black has a6, b7, e6, f7, g7 and h7. Material is level, but the pawns are spread differently: White has three against two on the queenside, and Black has an **extra center pawn** on e6, with no White pawn on the d- or e-file.\n\n**White's trump is development.** White has castled and has a bishop and a knight in play. Black's king is still on e8 and both Black bishops are at home. White wants to use that time: a rook on the e-file, pressure on e6, and the c1-bishop to g5.\n\n**Black's trump is the structure.** Black has no weak pawns. If Black finishes development safely, the extra center pawn is a long-term plus. The engine calls the position level."
    },
    {
      kind: 'walkthrough',
      title: 'Plans after the opening',
      intro: 'White uses the lead in development, and Black finishes developing with a threat of its own.',
      moves: PLAN,
      start: 20,
      orientation: 'white',
      steps: {
        20: {
          title: 'The starting point',
          text: "10...a6. White leads in development. Black has the extra center pawn on e6. Black's king is still in the middle.",
          marks: ['e6', 'e8']
        },
        21: {
          title: 'Rook to the e-file',
          text: "11.Re1. White has no e-pawn, so the e-file is half-open for White. The rook looks at e6, with Black's king behind it on e8.",
          arrows: [['e1', 'e6', 'red']]
        },
        22: {
          title: 'Making room',
          text: '11...Qc7. The queen steps aside so that the dark-squared bishop can come to d6.',
          arrows: [['f8', 'd6', 'blue']]
        },
        23: {
          title: 'Ready for ...b5',
          text: '12.Bb3. The bishop steps back before ...b5 can hit it, and it keeps aiming at e6. Now three White pieces look at e6: the d4-knight, the bishop and the rook.',
          arrows: [['b3', 'e6', 'yellow'], ['d4', 'e6', 'yellow'], ['e1', 'e6', 'yellow']]
        },
        24: {
          title: 'A threat on h2',
          text: '12...Bd6. The bishop develops, with the queen lined up behind it on c7. Together they aim at h2, which only the king defends: Black threatens ...Bxh2+, winning a pawn.',
          arrows: [['d6', 'h2', 'red']],
          marks: ['h2']
        },
        25: {
          title: 'Guard h2',
          text: '13.Nf3. The knight steps back to guard h2. A knight on f3 is the classic defender of the castled king.',
          arrows: [['f3', 'h2', 'green']]
        },
        26: {
          title: 'Both kings are safe',
          text: '13...O-O. Black castles, and the position is level. Black often goes on with ...b5 and ...Bb7. White develops the c1-bishop, often to g5, and brings the queen forward.',
          arrows: [['b7', 'b5', 'blue'], ['c1', 'g5', 'blue']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'White: do not take on d4 too early',
      body:
        "After 5...cxd4, the natural-looking 6.Nxd4?? loses a knight: 6...Qxd4, and nothing guards d4 because the d2-knight blocks the queen's path down the d-file. That is why White first gains time with 6.Bc4 and only takes on d4 after 8.Nb3 has opened the d-file."
    }
  ],
  takeaway:
    "4...Qxd5 avoids an isolated pawn. White gains time on the queen with 6.Bc4 and wins the d4-pawn back after 8.Nb3. White gets a lead in development, Black a sound structure with an extra center pawn, and the game is level.",
  lookAhead:
    "Next: the other recapture, 4...exd5. Module 4.3 shows the isolated d-pawn and the fight for the square in front of it.",
  drills: [
    {
      title: 'Black: the queen recapture',
      prompt: "You're Black. White has just played 4.exd5. Take back with the queen, win a pawn on d4, step back to a square that still guards it, develop, defend, trade knights and finish with a useful pawn move.",
      moves: QXD5,
      start: 7,
      side: 'black',
      hints: [
        'Take back with the queen, then take on d4 with the c-pawn. When the bishop hits your queen, go to d6.',
        'After 8.Nb3, defend d4 with the b8-knight. After the trades on d4, play ...a6 to take b5 away.'
      ],
      success: '4...Qxd5, 5...cxd4, 6...Qd6, 7...Nf6, 8...Nc6, 9...Nxd4 and 10...a6. Level material, a healthy structure and an extra center pawn.'
    },
    {
      title: 'White: gain time, then win the pawn back',
      prompt: "You're White. Black has played 3...c5. Trade on d5, develop the g1-knight, attack the queen with your bishop, castle, bring the d2-knight to a square where it hits d4, and win the pawn back.",
      moves: QXD5_WHITE,
      start: 6,
      side: 'white',
      hints: [
        'Start with 4.exd5 and 5.Ngf3. When Black takes on d4, attack the queen with 6.Bc4.',
        'After castling, 8.Nb3 hits d4. Take with the b3-knight first, then with the f3-knight.'
      ],
      success: '4.exd5, 5.Ngf3, 6.Bc4, 7.O-O, 8.Nb3, 9.Nbxd4 and 10.Nxd4. The pawn is back and White leads in development.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does Black take back with the queen (4...Qxd5) instead of the e-pawn?',
      moves: `${TARRASCH} c5 exd5 Qxd5`,
      orientation: 'black',
      choices: [
        { text: 'To keep a healthy pawn structure, with no isolated d-pawn', correct: true, why: 'Right. After 4...exd5 and a trade on c5 or d4, Black would have a lone pawn on d5. The queen recapture avoids that.' },
        { text: 'To attack the g2-pawn', why: 'The queen does see g2, but the f1-bishop guards it. The real reason is the pawn structure.' },
        { text: 'To stop White from castling', why: 'The queen on d5 does not stop castling. White castles a few moves later.' }
      ]
    },
    {
      type: 'move',
      prompt: "You're White. Black has just taken on d4 with 5...cxd4. What is your best move?",
      moves: `${TARRASCH} c5 exd5 Qxd5 Ngf3 cxd4`,
      orientation: 'white',
      choices: [
        { text: '6.Bc4', correct: true, why: 'Right. The bishop develops with an attack on the queen, gaining a tempo. White wins d4 back later.' },
        { text: '6.Nxd4', why: 'This loses a knight to 6...Qxd4. The d2-knight blocks the d-file, so the queen on d1 does not guard d4.' },
        { text: '6.Nb3', why: 'Not yet. Black answers 6...e5, which supports the d4-pawn and builds a big center, and Black is slightly better. First gain time with 6.Bc4.' }
      ]
    },
    {
      type: 'move',
      prompt: "You're Black. White has just played 10.Nxd4. Which move is good here?",
      moves: QXD5_WHITE,
      orientation: 'black',
      choices: [
        { text: '10...a6', correct: true, why: 'Yes. It takes b5 away from the knight and bishop and prepares ...b5 and ...Bb7.' },
        { text: '10...Qxd4', why: 'The d1-queen guards d4, so 11.Qxd4 wins Black\'s queen for a knight.' },
        { text: '10...e5', why: 'It kicks the knight, but 11.Nb5 hits the queen and eyes c7 and d6. Black\'s king is still in the center, and White is much better.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 10...a6, how would you describe the balance?',
      moves: QXD5,
      orientation: 'white',
      choices: [
        { text: 'White leads in development; Black has an extra center pawn and no weak pawns', correct: true, why: 'Right. White has castled with pieces out, Black has the better structure. The engine calls it level.' },
        { text: 'White is a pawn up', why: 'Material is level: White won the d4-pawn back on move 9.' },
        { text: 'Black has an isolated d-pawn to defend', why: 'Black has no d-pawn at all. Avoiding the isolated pawn was the point of 4...Qxd5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'The lichess opening database gives 3.Nd2 c5 4.exd5 Qxd5 a special name. Which one?',
      moves: `${TARRASCH} c5 exd5 Qxd5`,
      orientation: 'black',
      choices: [
        { text: 'The Chistyakov Defense', correct: true, why: 'Yes. Most books simply call it "4...Qxd5".' },
        { text: 'The Guimard Defense', why: 'The Guimard is 3...Nc6 (Module 4.8).' },
        { text: 'The Leningrad Variation', why: "That is lichess's name for 8...Nb6 in the closed Tarrasch (Module 4.6)." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 10...a6, which side has more pawns on the queenside?',
      moves: QXD5,
      orientation: 'white',
      choices: [
        { text: 'White: three (a, b, c) against two', correct: true, why: "Right. Black's c-pawn was traded for White's d-pawn, so White has an extra c-pawn on the queenside and Black an extra e-pawn in the center." },
        { text: 'Black: three against two', why: 'Black has only the a- and b-pawns on the queenside. Black\'s extra pawn is the e6-pawn in the center.' },
        { text: 'Neither: they are equal', why: 'White has a2, b2 and c2; Black has a6 and b7. The pawns are not spread the same way.' }
      ]
    }
  ],
  key: { name: 'Tarrasch: 4.exd5 Qxd5', moves: `${TARRASCH} c5 exd5 Qxd5`, orientation: 'black' },
  terms: [
    { term: 'Tempo', meaning: 'One move\'s worth of time. Developing a piece with an attack on the enemy queen "gains a tempo", because the opponent must spend a move saving it.' },
    { term: 'Lead in development', meaning: 'Having more pieces out (and the king castled) than the opponent. It is a short-term advantage: use it before the other side catches up.' },
    { term: 'Pawn majority', meaning: 'More pawns than the opponent on one part of the board, such as White\'s three against two on the queenside here.' },
    { term: 'Battery', meaning: 'Two pieces lined up on the same line, such as a queen behind a bishop, so they attack together.' }
  ]
})
