import { defineModule } from '../../../types'
import { NAJDORF } from '../lines'

/** najdorf-6h3: 6.h3 e5 7.Nde2 h5 8.g3 Be6 9.Bg2 b5 */
const ADAMS = `${NAJDORF} h3 e5 Nde2 h5 g3 Be6 Bg2 b5`
/** najdorf-6f4: 6.f4 e5 7.Nf3 Nbd7 8.a4 Be7 */
const AMSTERDAM = `${NAJDORF} f4 e5 Nf3 Nbd7 a4 Be7`
/** model-fischer-najdorf-1962, moves 6–15 (Fischer won in 24 moves) */
const FISCHER = `${NAJDORF} h3 b5 Nd5 Bb7 Nxf6+ gxf6 c4 bxc4 Bxc4 Bxe4 O-O d5 Re1 e5 Qa4+ Nd7 Rxe4 dxe4 Nf5`

export default defineModule({
  id: '2.9',
  title: 'Other sixth moves and a Fischer classic',
  minutes: 12,
  level: 2,
  goals: [
    "Meet 6.h3, the Adams Attack, and Black's ...h5 answer",
    'Know the quieter tries 6.f4, 6.Nb3 and 6.g3',
    "Follow Fischer's win with 6.h3 against Najdorf himself"
  ],
  intro:
    "White has even more sixth moves against the Najdorf. Most are quieter than the English Attack or 6.Bg5, and Black can meet them with the usual ...e5 or ...e6 plans. This module shows the main ones, and then a famous game in which Fischer beat Miguel Najdorf in his own opening.",
  sections: [
    {
      kind: 'walkthrough',
      title: '6.h3: the Adams Attack',
      intro: "Watch the g4-square. White wants to push a pawn there, and Black wants to stop it.",
      moves: ADAMS,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The Najdorf',
          text: '5...a6. White tries a little pawn move.',
          arrows: [['h2', 'h3', 'blue']]
        },
        11: {
          title: 'Getting ready for g4',
          text: '6.h3. The Adams Attack, named after Weaver Adams. White prepares g2–g4 to kick the f6-knight away from the center.',
          arrows: [['g2', 'g4', 'blue']],
          marks: ['f6']
        },
        12: {
          title: 'Kick the knight first',
          text: '6...e5. Black chooses the ...e5 structure and makes the d4-knight move.',
          arrows: [['e5', 'd4', 'red']]
        },
        13: {
          title: 'Back to e2',
          text: '7.Nde2. The knight retreats to e2. White still wants to play g4.',
          arrows: [['g2', 'g4', 'blue']]
        },
        14: {
          title: 'Stopping g4',
          text: '7...h5. The h5-pawn now guards g4. If White pushes g4 anyway, Black can take, and the h-file opens toward White\'s kingside.',
          arrows: [['h5', 'g4', 'green']],
          marks: ['g4']
        },
        15: {
          title: 'A new plan',
          text: '8.g3. White gives up on g4 and prepares to put the bishop on g2.',
          arrows: [['f1', 'g2', 'blue']]
        },
        16: {
          title: 'Guarding d5',
          text: '8...Be6. The bishop guards d5, the hole in the ...e5 structure.',
          arrows: [['e6', 'd5', 'green']]
        },
        17: {
          title: 'The fianchetto',
          text: '9.Bg2. The bishop develops on the long diagonal, behind the e4-pawn.',
          arrows: [['g2', 'e4', 'green']]
        },
        18: {
          title: 'Queenside space',
          text: '9...b5. Black gains space and gets ready for ...b4. The position is roughly level.',
          arrows: [['b5', 'b4', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '6.f4: the Amsterdam',
      intro: "Here White's f-pawn grabs space at once. Count the attackers and defenders of e5.",
      moves: AMSTERDAM,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The Najdorf',
          text: '5...a6. This time White pushes the f-pawn.',
          arrows: [['f2', 'f4', 'blue']]
        },
        11: {
          title: 'Space on the kingside',
          text: '6.f4. The Amsterdam Variation. The f-pawn grabs space and controls e5.',
          arrows: [['f4', 'e5', 'blue']]
        },
        12: {
          title: '...e5 anyway',
          text: '6...e5. Black kicks the knight. Now the f4-pawn attacks e5, and only the d6-pawn defends it.',
          arrows: [['e5', 'd4', 'red'], ['f4', 'e5', 'red'], ['d6', 'e5', 'green']]
        },
        13: {
          title: 'A second attacker',
          text: '7.Nf3. The knight retreats to a square where it also attacks e5. Two attackers, one defender.',
          arrows: [['f3', 'e5', 'red'], ['f4', 'e5', 'red']],
          marks: ['e5']
        },
        14: {
          title: 'A second defender',
          text: '7...Nbd7. The knight guards e5. Now it is two against two, and e5 is safe.',
          arrows: [['d7', 'e5', 'green'], ['d6', 'e5', 'green']]
        },
        15: {
          title: 'Stopping ...b5',
          text: '8.a4. The a-pawn takes away b5, so Black can\'t expand on the queenside so easily.',
          arrows: [['a4', 'b5', 'red']]
        },
        16: {
          title: 'Normal development',
          text: '8...Be7. Black develops and gets ready to castle. The engine calls it level.',
          arrows: [['e7', 'f6', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Two more quiet tries',
      body:
        "**6.Nb3** steps the knight back before Black can kick it. After 6...e6 7.Be2 Be7 8.O-O you get a calm Scheveningen-style position.\n\n**6.g3** (the Zagreb or Fianchetto Variation) puts the bishop on g2. After 6...e5 7.Nde2 Be7 8.Bg2 O-O 9.O-O b5, Black has a comfortable game.\n\nAgainst all these sixth moves, Black simply plays the normal plans: ...e5 or ...e6, then ...b5. The engine calls each of them level."
    },
    {
      kind: 'walkthrough',
      title: 'Fischer–Najdorf, Varna 1962',
      intro: "Fischer had White against the man the variation is named after. Watch Black's king: it never gets out of the center.",
      moves: FISCHER,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'Najdorf plays the Najdorf',
          text: '5...a6. Varna Olympiad, 1962. Miguel Najdorf has Black in his own opening.',
          marks: ['a6']
        },
        11: {
          title: 'The Adams Attack',
          text: '6.h3. Fischer chooses the quiet-looking move that prepares g4.',
          arrows: [['g2', 'g4', 'blue']]
        },
        12: {
          title: 'Queenside space',
          text: '6...b5. Najdorf expands on the queenside at once, instead of ...e5.',
          arrows: [['b5', 'b4', 'blue']]
        },
        13: {
          title: 'Into d5',
          text: '7.Nd5. Fischer jumps into the center and attacks the f6-knight.',
          arrows: [['d5', 'f6', 'red']]
        },
        14: {
          title: 'The bishop hits back',
          text: '7...Bb7. The bishop attacks the d5-knight, and behind it the e4-pawn.',
          arrows: [['b7', 'd5', 'red']]
        },
        15: {
          title: 'Trade with check',
          text: '8.Nxf6+. White trades knights with check.',
          arrows: [['f6', 'e8', 'red']]
        },
        16: {
          title: 'Broken pawns',
          text: '8...gxf6. Najdorf takes back with the g-pawn. His kingside pawns are now split, and castling short looks less safe.',
          marks: ['f6', 'f7', 'h7']
        },
        17: {
          title: 'Hitting b5',
          text: '9.c4. Fischer attacks the b5-pawn to open lines on the queenside.',
          arrows: [['c4', 'b5', 'red']]
        },
        18: {
          title: 'Black takes',
          text: '9...bxc4. Black takes the pawn.',
          marks: ['c4']
        },
        19: {
          title: 'An active bishop',
          text: '10.Bxc4. The bishop takes back and aims at f7. But the e4-pawn is now loose.',
          arrows: [['c4', 'f7', 'red']],
          marks: ['e4']
        },
        20: {
          title: 'A pawn up',
          text: '10...Bxe4. Najdorf grabs the e4-pawn and is a pawn up. But his king is still on e8.',
          marks: ['e8']
        },
        21: {
          title: 'Castle and attack',
          text: '11.O-O. Fischer gets his king safe. The rook is ready for the e-file.',
          arrows: [['f1', 'e1', 'blue']]
        },
        22: {
          title: 'Hitting the bishop',
          text: '11...d5. The pawn attacks the c4-bishop and guards the e4-bishop.',
          arrows: [['d5', 'c4', 'red'], ['d5', 'e4', 'green']]
        },
        23: {
          title: 'Rook to e1',
          text: '12.Re1. The rook attacks the e4-bishop down the e-file.',
          arrows: [['e1', 'e4', 'red']]
        },
        24: {
          title: 'The losing mistake',
          text: "12...e5. Najdorf attacks the d4-knight. The engine says this was the losing mistake: White's next moves come with check and threats against the king on e8.",
          arrows: [['e5', 'd4', 'red']],
          ann: '?'
        },
        25: {
          title: 'Check!',
          text: '13.Qa4+. The queen checks along the open diagonal from a4 to e8.',
          arrows: [['a4', 'e8', 'red']]
        },
        26: {
          title: 'A block',
          text: '13...Nd7. Black blocks with the knight.',
          marks: ['d7']
        },
        27: {
          title: 'The exchange sacrifice',
          text: "14.Rxe4. Fischer gives a rook for the bishop. It is the engine's top move, and it wins.",
          marks: ['e4'],
          ann: '!'
        },
        28: {
          title: 'Lines open',
          text: '14...dxe4. Black takes the rook. Now d5 is empty, so the c4-bishop sees f7 again. The d4-knight is attacked by the e5-pawn.',
          arrows: [['c4', 'f7', 'red'], ['e5', 'd4', 'red']]
        },
        29: {
          title: 'The knight jumps in',
          text: '15.Nf5. The knight escapes with threats, eyeing d6 and g7, two squares where it would check Black\'s king. Fischer won in 24 moves.',
          arrows: [['f5', 'd6', 'red'], ['f5', 'g7', 'red']]
        }
      }
    },
    {
      kind: 'history',
      title: 'Fischer and 6.h3',
      body:
        'Fischer won this game in 24 moves and annotated it in his book My 60 Memorable Games. It is a model of how to punish a king left in the center.'
    }
  ],
  takeaway:
    "Against 6.h3, 6.f4, 6.Nb3 and 6.g3, Black plays the normal ...e5 or ...e6 plans, and ...h5 stops the Adams Attack's g4. Fischer–Najdorf shows what happens when Black's king stays in the center while lines open.",
  lookAhead:
    "That completes the Najdorf. Chapter 3 turns to Black's other big system after 2...d6: the Dragon, with its bishop on g7.",
  drills: [
    {
      title: 'Stop the Adams Attack',
      prompt: "You're Black. White has played 6.h3, planning g4. Kick the knight, stop g4 with a pawn, guard d5 and gain queenside space.",
      moves: ADAMS,
      start: 10,
      side: 'black',
      hints: [
        'Kick the d4-knight with your e-pawn first. Then use your h-pawn to guard g4.',
        'Put your light-squared bishop on the square that guards d5, then push the b-pawn two squares.'
      ],
      success: "6...e5, 7...h5, 8...Be6 and 9...b5. White's g4 plan is stopped, and the position is level."
    },
    {
      title: "Fischer's sacrifice",
      prompt: "You're Fischer, with White. Najdorf has just blocked the check with 13...Nd7. Find the sacrifice that rips open the center, then save your d4-knight with threats.",
      moves: FISCHER,
      start: 26,
      side: 'white',
      hints: ['Your e1-rook can take the e4-bishop, even though a pawn guards it.', 'After ...dxe4, your d4-knight is attacked. Jump to a square near Black\'s king.'],
      success: '14.Rxe4! dxe4 15.Nf5. Black\'s king is stuck in the center, and Fischer went on to win.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the main idea of 6.h3?',
      moves: `${NAJDORF} h3`,
      orientation: 'white',
      choices: [
        { text: 'To prepare g2–g4 and kick the f6-knight', correct: true, why: 'Right. With the h-pawn on h3, a pawn on g4 is supported.' },
        { text: 'To prepare castling long', why: 'h3 does nothing for long castling. It supports a g-pawn push.' },
        { text: 'To open the h-file for the rook', why: 'The h-file is still closed by the h3-pawn. The idea is g2–g4.' }
      ]
    },
    {
      type: 'move',
      prompt: "Black to move. White wants to play g4. What is Black's best way to stop it?",
      moves: `${NAJDORF} h3 e5 Nde2`,
      orientation: 'black',
      choices: [
        { text: '7...h5', correct: true, why: 'Yes. The h5-pawn guards g4, and White usually switches to g3 and Bg2.' },
        { text: '7...h6', why: 'This does not stop g4. White plays g4 anyway and keeps a small edge.' },
        { text: '7...Be6', why: 'A good square for the bishop, but White still gets g4 in. ...h5 first stops it.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6.f4 e5 7.Nf3, why does Black play 7...Nbd7?',
      moves: `${NAJDORF} f4 e5 Nf3`,
      orientation: 'black',
      choices: [
        { text: 'To add a second defender to the e5-pawn', correct: true, why: 'Right. The f4-pawn and the f3-knight attack e5. The d6-pawn and the d7-knight defend it.' },
        { text: 'To attack the f3-knight', why: 'A knight on d7 does not reach f3. It guards e5.' },
        { text: 'To get ready to castle long', why: 'Black usually castles short here. The knight is defending e5.' }
      ]
    },
    {
      type: 'concept',
      prompt: "In Fischer–Najdorf 1962, what was Fischer's famous 14th move?",
      moves: `${NAJDORF} h3 b5 Nd5 Bb7 Nxf6+ gxf6 c4 bxc4 Bxc4 Bxe4 O-O d5 Re1 e5 Qa4+ Nd7`,
      orientation: 'white',
      choices: [
        { text: '14.Rxe4, giving a rook for the bishop', correct: true, why: "Yes. After 14...dxe4 15.Nf5, Black's king is stuck in the center and White's pieces swarm in." },
        { text: '14.Qxd7+, a queen sacrifice', why: 'That would just lose the queen for a knight. Fischer gave up a rook, not the queen.' },
        { text: '14.Bxd5, winning a pawn', why: 'Fischer played a much stronger move: 14.Rxe4.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Which Black move does the engine name as the losing mistake in Fischer–Najdorf 1962?',
      choices: [
        { text: '12...e5', correct: true, why: 'Right. After 13.Qa4+ Nd7 14.Rxe4! dxe4 15.Nf5, White wins.' },
        { text: '6...b5', why: 'A normal Najdorf idea. The game was decided later, by 12...e5.' },
        { text: '13...Nd7', why: 'Black had to deal with the check, and the position was already lost. The mistake came one move earlier, with 12...e5.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Amsterdam Variation (6.f4 e5 7.Nf3 Nbd7), what does 8.a4 do?',
      moves: AMSTERDAM,
      orientation: 'white',
      choices: [
        { text: 'It stops Black from expanding with ...b5', correct: true, why: 'Yes. The a4-pawn attacks b5. You saw the same idea against the small center in Module 2.2.' },
        { text: 'It prepares a4–a5 to attack Black\'s king', why: "Black's king is going to the kingside. a4 is about the b5-square." },
        { text: 'It defends the c3-knight', why: 'A pawn on a4 does not guard c3. It controls b5.' }
      ]
    }
  ],
  key: { name: 'Adams Attack: 6.h3', moves: `${NAJDORF} h3`, orientation: 'white' },
  terms: [
    { term: 'Adams Attack', meaning: 'The Najdorf with 6.h3, preparing g2–g4. Named after Weaver Adams.' },
    { term: 'Exchange sacrifice', meaning: 'Giving up a rook for a bishop or knight to gain an attack or a better position.' },
    { term: 'Fianchetto', meaning: 'Developing a bishop on b2 or g2 (b7 or g7 for Black), on the long diagonal.' }
  ]
})
