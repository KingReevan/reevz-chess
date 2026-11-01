import { defineModule } from '../../../types'

/** model-letelier-fischer-1960: the complete game (0-1 after 23...Qxf4+) */
const GAME =
  'd4 Nf6 c4 g6 Nc3 Bg7 e4 O-O e5 Ne8 f4 d6 Be3 c5 dxc5 Nc6 cxd6 exd6 Ne4 Bf5 Ng3 Be6 Nf3 Qc7 Qb1 dxe5 f5 e4 fxe6 exf3 gxf3 f5 f4 Nf6 Be2 Rfe8 Kf2 Rxe6 Re1 Rae8 Bf3 Rxe3 Rxe3 Rxe3 Kxe3 Qxf4+'
/** The opening phase, through 10...Bf5 */
const OPENING = 'd4 Nf6 c4 g6 Nc3 Bg7 e4 O-O e5 Ne8 f4 d6 Be3 c5 dxc5 Nc6 cxd6 exd6 Ne4 Bf5'
/** kid-4-oo-5e5 starts the same way: 4...O-O 5.e5 Ne8 6.f4 */
const PUSH = 'd4 Nf6 c4 g6 Nc3 Bg7 e4 O-O e5 Ne8 f4'

export default defineModule({
  id: '7.7',
  title: 'Punishing the early pawn storm: Letelier–Fischer',
  minutes: 11,
  level: 3,
  goals: [
    'See how 4...O-O allows 5.e5, and how Black strikes back with ...d6 and ...c5',
    'Count attackers on an overextended pawn',
    "Follow Fischer's finish: a rook for a bishop, then a queen for mate"
  ],
  intro:
    "Module 1.4 warned that castling before ...d6 lets White kick the knight with 5.e5. At the 1960 Leipzig Olympiad, Bobby Fischer castled early against Letelier, White kicked the knight, and then added 6.f4 to build a big pawn center. Fischer struck back at once, and when White kept pushing pawns instead of developing, he finished with a queen sacrifice. This module plays through the game.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Striking at the pawn storm',
      intro: 'Letelier–Fischer, Leipzig Olympiad 1960. Count the attackers on e5 as the game goes on.',
      moves: OPENING,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'Castled before ...d6',
          text: '4...O-O. Black castles first. Nothing stops e4–e5 now, because Black has no pawn on d6 to take on e5.',
          arrows: [['e4', 'e5', 'yellow']]
        },
        9: {
          title: 'The knight is kicked',
          text: "5.e5. The pawn attacks the f6-knight. The engine prefers 5.Be3, but 5.e5 is roughly equal.",
          arrows: [['e5', 'f6', 'red']]
        },
        10: {
          title: 'Back to e8',
          text: '5...Ne8. The knight retreats. It will come back into play later.',
          arrows: [['f6', 'e8', 'green']]
        },
        11: {
          title: 'A second pawn behind',
          text: '6.f4. White supports e5 with the f-pawn. Four White pawns stand in the center: c4, d4, e5 and f4.',
          arrows: [['f4', 'e5', 'green']],
          marks: ['c4', 'd4', 'e5', 'f4']
        },
        12: {
          title: 'Hit the front pawn',
          text: '6...d6. Black attacks e5 at once.',
          arrows: [['d6', 'e5', 'red']]
        },
        13: {
          title: 'White develops',
          text: '7.Be3. The bishop guards d4.',
          arrows: [['e3', 'd4', 'green']]
        },
        14: {
          title: 'Hit the other pawn',
          text: '7...c5. Now both front pawns are attacked: ...d6 hits e5 and ...c5 hits d4.',
          arrows: [['c5', 'd4', 'red'], ['d6', 'e5', 'red']]
        },
        15: {
          title: 'White takes',
          text: '8.dxc5. White grabs a pawn.',
          marks: ['c5']
        },
        16: {
          title: 'Develop with a threat',
          text: '8...Nc6. Black lets White keep the pawn for a moment and brings a knight out. It attacks e5.',
          arrows: [['c6', 'e5', 'red']]
        },
        17: {
          title: 'Another capture',
          text: '9.cxd6. White takes again.',
          marks: ['d6']
        },
        18: {
          title: 'Three against one',
          text: "9...exd6. Black takes back. White is a pawn up for now, but the e5-pawn is attacked three times (the d6-pawn, the c6-knight and the g7-bishop) and defended once (the f4-pawn). The game is level.",
          arrows: [['d6', 'e5', 'red'], ['c6', 'e5', 'red'], ['g7', 'e5', 'red']]
        },
        19: {
          title: 'A wasted move',
          text: "10.Ne4. The knight hits d6, but it moves a piece that is already out and does nothing for e5. 10.Nf3, guarding e5 with a new piece, kept the balance. Now Black is better.",
          arrows: [['e4', 'd6', 'red'], ['g1', 'f3', 'blue']],
          ann: '?'
        },
        20: {
          title: 'Develop with tempo',
          text: '10...Bf5. The bishop attacks the e4-knight, which has no defender. White must move it yet again.',
          arrows: [['f5', 'e4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'How White lost the thread',
      body:
        "The game went 11.Ng3 Be6 12.Nf3 Qc7 13.Qb1 dxe5 14.f5 e4 15.fxe6 exf3 16.gxf3 f5 17.f4.\n\nLook at what White did with those moves. The knight hopped again (Ng3), and 13.Qb1? put the queen on a strange square while the king and the f1-bishop were still at home (13.f5 was better). The f-pawn pushed on to f5, and after 15.fxe6? (15.Qxe4 was better) Black's pawn took the f3-knight. 16.gxf3 left White's kingside pawns broken.\n\nBy move 17, White is even a pawn up, thanks to the pawn on e6. But White's king is still on e1, the pieces are scattered, and the engine says Black is winning."
    },
    {
      kind: 'walkthrough',
      title: 'Fischer finishes: a queen for the king',
      intro: 'White is a pawn up, but the king is still in the center. Watch the e-file.',
      moves: GAME,
      start: 33,
      orientation: 'black',
      steps: {
        33: {
          title: 'White is a pawn up',
          text: "17.f4. The extra pawn is on e6, and it is weak. White's king has not castled.",
          marks: ['e6', 'e1']
        },
        34: {
          title: 'The knight returns',
          text: '17...Nf6. The knight that went to e8 on move 5 is back in the game.',
          arrows: [['e8', 'f6', 'green']]
        },
        35: {
          title: 'Development, too late',
          text: '18.Be2. White develops the f1-bishop at last, still without castling.',
          arrows: [['e1', 'g1', 'blue']]
        },
        36: {
          title: 'Rook to the e-file',
          text: '18...Rfe8. The rook lines up against the e6-pawn and the e3-bishop behind it.',
          arrows: [['e8', 'e6', 'red']]
        },
        37: {
          title: 'The king walks',
          text: "19.Kf2. The king steps off the e-file. Castling with 19.O-O was better, though White was already lost.",
          arrows: [['e1', 'f2', 'blue']],
          ann: '?'
        },
        38: {
          title: 'The pawn falls',
          text: '19...Rxe6. Black wins the pawn back. Material is level, and the rook now aims at e3.',
          arrows: [['e6', 'e3', 'red']]
        },
        39: {
          title: 'More defenders',
          text: '20.Re1. The rook comes to the e-file to protect the bishops.',
          arrows: [['e1', 'e2', 'green']]
        },
        40: {
          title: 'Doubled rooks',
          text: '20...Rae8. Black doubles rooks on the e-file. Both rooks now aim at the e3-bishop.',
          arrows: [['e6', 'e3', 'red'], ['e8', 'e6', 'red']]
        },
        41: {
          title: 'The bishop steps aside',
          text: '21.Bf3. The e2-bishop moves, so the e1-rook now guards e3 directly.',
          arrows: [['e1', 'e3', 'green']]
        },
        42: {
          title: 'The exchange sacrifice',
          text: '21...Rxe3. Black gives a rook for the bishop, to tear open the defense around White\'s king.',
          marks: ['e3'],
          ann: '!'
        },
        43: {
          title: 'White takes',
          text: '22.Rxe3. The rook takes back.',
          marks: ['e3']
        },
        44: {
          title: 'Black takes again',
          text: '22...Rxe3. The second rook takes the rook.',
          marks: ['e3']
        },
        45: {
          title: 'The king on e3',
          text: "23.Kxe3. Count: Black has given a rook for a bishop, so White is the exchange up. But White's king now stands on e3, in the middle of the board.",
          marks: ['e3']
        },
        46: {
          title: 'A queen for the king',
          text: "23...Qxf4+. The queen takes the f4-pawn with check. If 24.Kxf4, then 24...Bh6 is checkmate. Every other king move loses even more material. White resigned.",
          arrows: [['f4', 'e3', 'red'], ['g7', 'h6', 'green']],
          ann: '!!'
        }
      }
    },
    {
      kind: 'history',
      title: '"A Queen for the King"',
      body:
        "Fischer included this game in his book My 60 Memorable Games under the title \"A Queen for the King\". The game is not a 4...d6 King's Indian: Fischer castled first, which is exactly why 5.e5 was possible. The lesson still applies to every Four Pawns position: a pawn center that runs ahead of its pieces becomes a target."
    }
  ],
  takeaway:
    "Against an early e5 and f4, hit the front pawns at once with ...d6 and ...c5, and count the attackers on e5. If White keeps pushing pawns and moving pieces twice instead of castling, the king in the center gets punished, as Fischer's 23...Qxf4+ showed.",
  lookAhead:
    'Module 7.8 turns to a quieter system, the Averbakh 6.Bg5, where an early ...e5 runs into a pin instead.',
  drills: [
    {
      title: "Fischer's counterpunch",
      prompt: "You're Black. White has kicked your knight with 5.e5. Retreat, then hit both of White's front pawns, develop with a threat, and take back toward the center.",
      moves: OPENING.split(' ').slice(0, 18).join(' '),
      start: 9,
      side: 'black',
      hints: [
        'The knight goes back to e8. Then ...d6 hits e5 and ...c5 hits d4.',
        'After 8.dxc5, bring the b8-knight out so it attacks e5. Take back on d6 with the e-pawn.'
      ],
      success: '5...Ne8, 6...d6, 7...c5, 8...Nc6 and 9...exd6. The e5-pawn is attacked three times and defended once.'
    },
    {
      title: 'A queen for the king',
      prompt: "You're Black, playing Fischer's moves. White's king has just taken your rook on e3. Find the finish.",
      moves: GAME,
      start: 45,
      side: 'black',
      hints: ["White's king is on e3, with few squares around it.", 'Take the f4-pawn with check. If the king takes the queen, which bishop move is mate?'],
      success: '23...Qxf4+! If 24.Kxf4, then 24...Bh6 is checkmate. Here White resigned.'
    }
  ],
  quiz: [
    {
      type: 'order',
      prompt: 'Why could White play 5.e5 in this game?',
      moves: 'd4 Nf6 c4 g6 Nc3 Bg7 e4 O-O',
      orientation: 'white',
      choices: [
        { text: 'Black castled before ...d6, so no Black pawn could take on e5', correct: true, why: 'Right. With a pawn on d6, Black could answer e4–e5 with ...dxe5, and the push achieves little (Module 1.5). That is why the usual order is 4...d6 first.' },
        { text: "Black's knight was pinned", why: 'Nothing pins the f6-knight. It is simply attacked by the pawn and has to move.' },
        { text: 'White had already played f4', why: 'f4 came on move 6, after 5.e5. On move 5 the e-pawn advanced on its own.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Black to move. How should Black meet this big pawn center?',
      moves: PUSH,
      orientation: 'black',
      choices: [
        { text: 'Hit the front pawns at once with ...d6 and ...c5', correct: true, why: "Right. That is Fischer's plan. The pawns on e5 and d4 come under fire before White can develop." },
        { text: 'Wait with ...c6 and ...a6', why: 'Too slow. White gets time to develop behind the pawns, and the space advantage starts to tell.' },
        { text: 'Attack on the queenside with ...b5', why: "The fight is in the center. White's pawns on e5 and d4 are the targets, and ...d6 and ...c5 hit them directly." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9...exd6, how many times is the e5-pawn attacked and defended?',
      moves: OPENING.split(' ').slice(0, 18).join(' '),
      orientation: 'black',
      choices: [
        { text: 'Attacked three times, defended once', correct: true, why: 'Right. The d6-pawn, the c6-knight and the g7-bishop attack it. Only the f4-pawn defends it.' },
        { text: 'Attacked twice, defended once', why: "Don't forget the g7-bishop. With the knight gone from f6, the long diagonal reaches e5." },
        { text: 'Attacked twice, defended twice', why: "White's knight is still on g1 and does not guard e5 yet. That is why 10.Nf3 was the right move." }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White has just taken on e3 with the king. What is the strongest move?',
      moves: GAME.split(' ').slice(0, 45).join(' '),
      orientation: 'black',
      choices: [
        { text: '23...Qxf4+', correct: true, why: 'Right. If 24.Kxf4, 24...Bh6 is mate, and other king moves lose more material. White resigned.' },
        { text: '23...Qb6+', why: 'A check, and Black keeps an advantage, but the king escapes to d3. Qxf4+ wins at once.' },
        { text: '23...h5', why: "Too slow. Black is down the exchange, so this is the moment to strike at the king." }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black has just played 23...Qxf4+ and White took the queen with 24.Kxf4. Which move is checkmate?',
      moves: `${GAME} Kxf4`,
      orientation: 'black',
      choices: [
        { text: '24...Bh6', correct: true, why: 'Right. The bishop checks along h6–f4, and every square around the king is covered.' },
        { text: '24...Nh5+', why: 'It is check, but the king can escape to g5 or e3, or White can take the knight.' },
        { text: '24...g5+', why: 'It is check, but the king can take on g5 or f5, or step back to e3.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the main lesson of Letelier–Fischer?',
      choices: [
        { text: 'A pawn center that runs ahead of its pieces becomes a target, and a king left in the center gets punished', correct: true, why: 'Right. White pushed pawns and moved pieces twice instead of developing and castling.' },
        { text: 'Black should always castle before ...d6', why: 'The opposite: castling first is what allowed 5.e5. The normal order is 4...d6 first.' },
        { text: 'A queen sacrifice is always the best way to attack', why: 'The sacrifice worked because of the position: White\'s king was stuck on e3. It is not a rule.' }
      ]
    }
  ],
  key: { name: 'Letelier–Fischer 1960: 23...Qxf4+', moves: GAME, orientation: 'black' },
  terms: [
    { term: 'Exchange sacrifice', meaning: 'Giving a rook for a bishop or knight on purpose, to get an attack or another advantage.' },
    { term: 'Queen sacrifice', meaning: 'Giving up the queen on purpose, usually to force checkmate or win back even more.' },
    { term: 'Doubled rooks', meaning: 'Two rooks on the same file, one behind the other. Together they hit hard along that file.' }
  ]
})
