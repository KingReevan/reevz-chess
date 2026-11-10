import { defineModule } from '../../../types'
import { TARRASCH } from '../lines'

/** tar-4ngf3: 3...c5 4.Ngf3 cxd4 5.Nxd4 Nf6 6.exd5 Nxd5 7.N2f3 Be7 8.Bc4 Nc6 */
const NGF3 = `${TARRASCH} c5 Ngf3 cxd4 Nxd4 Nf6 exd5 Nxd5 N2f3 Be7 Bc4 Nc6`
/** tar-4ngf3 up to 8.Bc4 (White drill) */
const NGF3_WHITE = `${TARRASCH} c5 Ngf3 cxd4 Nxd4 Nf6 exd5 Nxd5 N2f3 Be7 Bc4`
/** model-nepomniachtchi-ding-2023-g7, moves 9 to 17 */
const NEPO_DING = `${NGF3} Nxc6 bxc6 O-O O-O Qe2 Bb7 Bd3 Qc7 Qe4 Nf6 Qh4 c5 Bf4 Qb6 Ne5 Rad8 Rae1 g6`

export default defineModule({
  id: '4.5',
  title: '4.Ngf3 and a World Championship win',
  minutes: 11,
  level: 2,
  goals: [
    'Play 4.Ngf3 cxd4 5.Nxd4: open lines and quick development',
    'See that the pawns end up the same as after 4...Qxd5',
    "Follow White's kingside pressure in Nepomniachtchi–Ding, 2023, game 7"
  ],
  intro:
    "Against 3...c5, White doesn't have to trade on d5. 4.Ngf3 develops first and lets Black take on d4. The center opens, both sides develop fast, and the kings soon matter more than the pawns. This is the line from game 7 of the 2023 World Championship.",
  sections: [
    {
      kind: 'walkthrough',
      title: '4.Ngf3 cxd4 5.Nxd4',
      intro: 'Watch the center open up. By move 6 there are no d-pawns on the board.',
      moves: NGF3,
      start: 6,
      orientation: 'white',
      steps: {
        6: {
          title: 'Strike at d4',
          text: '3...c5. Black hits d4 at once. White can trade on d5 (Modules 4.2 to 4.4) or simply develop.',
          arrows: [['c5', 'd4', 'red']]
        },
        7: {
          title: 'Develop first',
          text: '4.Ngf3. The knight develops and defends d4. Keres and Euwe both played this.',
          arrows: [['f3', 'd4', 'green']]
        },
        8: {
          title: 'Black takes',
          text: '4...cxd4. Black trades the c-pawn for White\'s d-pawn.',
          marks: ['d4']
        },
        9: {
          title: 'The knight recaptures',
          text: '5.Nxd4. The knight takes back and stands well in the center. White has no d-pawn now, and Black has no c-pawn.',
          arrows: [['f3', 'd4', 'green']]
        },
        10: {
          title: 'Two against one',
          text: '5...Nf6. Now e4 is attacked twice (the d5-pawn and the f6-knight) and defended once, by the d2-knight.',
          arrows: [['f6', 'e4', 'red'], ['d5', 'e4', 'red'], ['d2', 'e4', 'green']]
        },
        11: {
          title: 'Trade on d5',
          text: '6.exd5. White trades the e-pawn before it can be won.',
          marks: ['d5']
        },
        12: {
          title: 'No isolated pawn',
          text: '6...Nxd5. The knight takes back, so Black has no isolated pawn. The pawns are the same as in Module 4.2: White has three against two on the queenside, Black the extra e6-pawn in the center.',
          marks: ['e6']
        },
        13: {
          title: 'The d2-knight moves on',
          text: '7.N2f3. The knight goes to f3 and guards the d4-knight. With d2 empty, the c1-bishop is free.',
          arrows: [['f3', 'd4', 'green']],
          marks: ['c1']
        },
        14: {
          title: 'Quiet development',
          text: '7...Be7. Black develops modestly and gets ready to castle.',
          arrows: [['e8', 'g8', 'blue']]
        },
        15: {
          title: 'The bishop hits d5',
          text: '8.Bc4. The bishop attacks the d5-knight, with the e6-pawn behind it. The knight is safe: the e6-pawn and the queen guard it.',
          arrows: [['c4', 'd5', 'red']]
        },
        16: {
          title: 'Challenge the knight',
          text: '8...Nc6. Black develops the last knight and challenges the d4-knight. Lines are open and both sides develop fast. The position is level.',
          arrows: [['c6', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'What 4.Ngf3 is about',
      body:
        "4.Ngf3 does not try to give Black an isolated pawn. Instead White develops quickly and opens the center. After 6...Nxd5 the pawns look just like the 4...Qxd5 line: White has an extra pawn on the queenside, Black an extra center pawn.\n\n**White's plan:** use the open lines and the quick development. Get the bishops to active squares, bring the queen to the kingside, and use a strong square like e5 for a knight.\n\n**Black's plan:** finish development, castle, and get the c8-bishop out, often to b7, where it aims down the long diagonal. Black's position is solid, and the engine calls it level."
    },
    {
      kind: 'walkthrough',
      title: 'Nepomniachtchi–Ding, Astana 2023, game 7',
      intro: "The game followed the line above. Watch White's pieces gather around Black's king, one by one.",
      moves: NEPO_DING,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'The game position',
          text: '8...Nc6. Ian Nepomniachtchi had White against Ding Liren in game 7 of their World Championship match.',
          arrows: [['c6', 'd4', 'red']]
        },
        17: {
          title: 'Trade the knights',
          text: '9.Nxc6. White trades knights before Black can take on d4.',
          marks: ['c6']
        },
        18: {
          title: 'Toward the center',
          text: '9...bxc6. Black takes back toward the center. The c6-pawn guards the d5-knight, and the b-file is half-open for Black\'s rook.',
          arrows: [['c6', 'd5', 'green'], ['b8', 'b2', 'blue']]
        },
        19: {
          title: 'White castles',
          text: '10.O-O. White\'s king is safe.',
          arrows: [['e1', 'g1', 'green']]
        },
        20: {
          title: 'Black castles',
          text: '10...O-O. So is Black\'s. Now White starts to bring pieces toward Black\'s king.',
          marks: ['g8']
        },
        21: {
          title: 'The queen comes out',
          text: '11.Qe2. The queen develops onto the e-file and gets ready to swing to e4.',
          arrows: [['e2', 'e4', 'blue']]
        },
        22: {
          title: 'A blocked bishop, for now',
          text: '11...Bb7. The bishop develops, but its own c6-pawn still blocks the long diagonal.',
          marks: ['c6']
        },
        23: {
          title: 'Aim at h7',
          text: '12.Bd3. The bishop steps back from c4 and points at h7.',
          arrows: [['d3', 'h7', 'blue']]
        },
        24: {
          title: 'Black eyes h2',
          text: '12...Qc7. The queen develops and looks down the diagonal at h2, near White\'s king.',
          arrows: [['c7', 'h2', 'blue']]
        },
        25: {
          title: 'A battery on h7',
          text: '13.Qe4. The queen and the d3-bishop line up on the diagonal to h7. White threatens 14.Qxh7, which would be checkmate.',
          arrows: [['e4', 'h7', 'red']],
          marks: ['h7']
        },
        26: {
          title: 'Hit the queen, guard h7',
          text: '13...Nf6. The knight attacks the queen and defends h7.',
          arrows: [['f6', 'e4', 'red'], ['f6', 'h7', 'green']]
        },
        27: {
          title: 'Stay on the kingside',
          text: '14.Qh4. The queen moves to h4. It still aims at h7, and it eyes the f6-knight too.',
          arrows: [['h4', 'h7', 'red'], ['h4', 'f6', 'red']]
        },
        28: {
          title: 'Open the long diagonal',
          text: '14...c5. The pawn moves out of the bishop\'s way. Now the b7-bishop looks down the long diagonal at the f3-knight.',
          arrows: [['b7', 'f3', 'red']]
        },
        29: {
          title: 'The last minor piece',
          text: '15.Bf4. White\'s c1-bishop comes out with an attack on the queen.',
          arrows: [['f4', 'c7', 'red']]
        },
        30: {
          title: 'The queen steps aside',
          text: '15...Qb6. The queen moves away and looks at b2.',
          arrows: [['b6', 'b2', 'blue']]
        },
        31: {
          title: 'A knight on e5',
          text: '16.Ne5. The knight jumps to a strong central square, close to Black\'s king. It eyes f7 and g4.',
          arrows: [['e5', 'f7', 'red'], ['e5', 'g4', 'blue']]
        },
        32: {
          title: 'A rook to the open file',
          text: '16...Rad8. The d-file has no pawns on it, so it is open. The rook takes it and lines up against the d3-bishop.',
          arrows: [['d8', 'd3', 'red']]
        },
        33: {
          title: 'Every piece in play',
          text: '17.Rae1. The a1-rook joins the game on the e-file, behind the e5-knight.',
          arrows: [['e1', 'e5', 'green']]
        },
        34: {
          title: 'Closing the diagonal',
          text: "17...g6. The pawn blocks the d3-bishop's diagonal to h7. White's pieces are aggressive, but Black's king is well covered, and the position is still level.",
          arrows: [['d3', 'g6', 'blue']],
          marks: ['h7']
        }
      }
    },
    {
      kind: 'history',
      title: 'How the game was decided',
      body:
        "The 2023 World Championship was played in Astana between Ian Nepomniachtchi and Ding Liren. Ding chose the French after \"half-jokingly\" suggesting it to his second, Richárd Rapport. The game stayed level for a long time. The real mistake came at move 33: 33...Rd3? (33...Rd5 held). After 34.Qxc5 White was winning, and Nepomniachtchi won in 37 moves."
    },
    {
      kind: 'tip',
      title: 'Same pawns, different pieces',
      body:
        "Compare this line with Module 4.2. The pawns are the same: White's a-, b- and c-pawns against Black's a- and b-pawns, and Black's extra e6-pawn in the center. In Module 4.2 Black's queen came out early and White gained time on it. Here Black keeps the queen at home and develops the minor pieces first. In both lines White plays for piece activity, and Black for a solid position."
    }
  ],
  takeaway:
    "4.Ngf3 cxd4 5.Nxd4 opens the center for quick development and gives the same pawns as 4...Qxd5. White plays for active pieces near Black's king, as in Nepomniachtchi–Ding 2023; Black develops, castles and stays solid.",
  lookAhead:
    "Next: the other main answer to 3.Nd2. Module 4.6 shows the closed Tarrasch, 3...Nf6 4.e5, and Black's two breaks, ...f6 and ...Qb6.",
  drills: [
    {
      title: 'White: develop and open the center',
      prompt: "You're White. Black has played 3...c5. Develop your g1-knight, take back on d4 with it, trade on d5 when e4 is attacked twice, bring the d2-knight to a square that guards d4, and develop your bishop to hit the d5-knight.",
      moves: NGF3_WHITE,
      start: 6,
      side: 'white',
      hints: [
        'Start with 4.Ngf3 and 5.Nxd4. After 5...Nf6, trade with 6.exd5.',
        'The d2-knight goes to f3. Then the f1-bishop goes to c4.'
      ],
      success: '4.Ngf3, 5.Nxd4, 6.exd5, 7.N2f3 and 8.Bc4. Quick development and open lines.'
    },
    {
      title: 'Black: a solid set-up',
      prompt: "You're Black. White has played 4.Ngf3. Take on d4, develop your king's knight, take back on d5 with it, develop the f8-bishop modestly and bring out the b8-knight.",
      moves: NGF3,
      start: 7,
      side: 'black',
      hints: [
        'Take on d4 with the c-pawn, then develop the g8-knight to f6.',
        'Take back on d5 with the knight. The bishop goes to e7, and the last knight to c6.'
      ],
      success: '4...cxd4, 5...Nf6, 6...Nxd5, 7...Be7 and 8...Nc6. No isolated pawn, and a level game.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 6...Nxd5, how do the pawns compare with the 4...Qxd5 line of Module 4.2?',
      moves: `${TARRASCH} c5 Ngf3 cxd4 Nxd4 Nf6 exd5 Nxd5`,
      orientation: 'white',
      choices: [
        { text: 'They are the same: White has three against two on the queenside, Black an extra e6-pawn', correct: true, why: 'Right. In both lines White has a-, b-, c-, f-, g- and h-pawns, and Black has a-, b-, e-, f-, g- and h-pawns.' },
        { text: 'Black has an isolated d-pawn here', why: 'Black has no d-pawn at all. The knight took back on d5, not a pawn.' },
        { text: 'White has an isolated d-pawn here', why: "White's d-pawn was traded on move 4. Nobody has an isolated pawn." }
      ]
    },
    {
      type: 'trap',
      prompt: "White has just played 13.Qe4. What is White threatening?",
      moves: `${NGF3} Nxc6 bxc6 O-O O-O Qe2 Bb7 Bd3 Qc7 Qe4`,
      orientation: 'black',
      choices: [
        { text: '14.Qxh7, checkmate', correct: true, why: 'Yes. The queen and the d3-bishop form a battery on h7. Black stopped it with 13...Nf6, which also hit the queen.' },
        { text: '14.Qxe6, winning a pawn', why: 'The f7-pawn guards e6, so Qxe6 would lose the queen. The real threat is on h7.' },
        { text: '14.Qxd5, winning a knight', why: 'The d5-knight is guarded by the c6- and e6-pawns. The threat is mate on h7.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why did Ding play 14...c5?',
      moves: `${NGF3} Nxc6 bxc6 O-O O-O Qe2 Bb7 Bd3 Qc7 Qe4 Nf6 Qh4 c5`,
      orientation: 'black',
      choices: [
        { text: 'To open the long diagonal for the b7-bishop', correct: true, why: 'Right. With the pawn gone from c6, the bishop sees all the way to the f3-knight.' },
        { text: 'To attack the d4-knight', why: 'There is no knight on d4 any more. White traded it on move 9.' },
        { text: 'To win a pawn on b2', why: 'The c-pawn does not attack b2. The point is to free the bishop.' }
      ]
    },
    {
      type: 'plan',
      prompt: "What was White's plan in Nepomniachtchi–Ding?",
      moves: NEPO_DING,
      orientation: 'white',
      choices: [
        { text: "Bring the pieces toward Black's king: Qe4–h4, Bd3, Bf4 and Ne5", correct: true, why: "Yes. One piece after another pointed at Black's kingside." },
        { text: 'Trade queens and play against an isolated pawn', why: 'That is the 5.Bb5+ plan of Module 4.4. Here there is no isolated pawn, and the queens stayed on.' },
        { text: 'Push the queenside pawns forward', why: "White's pieces went the other way, toward Black's king." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why is 7.N2f3 a useful move?',
      moves: `${TARRASCH} c5 Ngf3 cxd4 Nxd4 Nf6 exd5 Nxd5 N2f3`,
      orientation: 'white',
      choices: [
        { text: 'It guards the d4-knight and frees the c1-bishop', correct: true, why: 'Right. The knight on d2 was blocking the bishop. From f3 it backs up the d4-knight.' },
        { text: 'It attacks the d5-knight', why: 'A knight on f3 does not reach d5. The bishop on c4 does that a move later.' },
        { text: 'It prepares queenside castling', why: "White usually castles kingside here. The f3-knight even makes that easier." }
      ]
    },
    {
      type: 'name',
      prompt: 'Which World Championship game is the model game for 4.Ngf3 in this course?',
      choices: [
        { text: 'Nepomniachtchi–Ding, Astana 2023, game 7', correct: true, why: 'Yes. White won with kingside pressure after 4.Ngf3 cxd4 5.Nxd4.' },
        { text: 'Karpov–Korchnoi, Baguio 1978, game 16', why: 'That game was 4.exd5 exd5 5.Bb5+, with an early queen trade (Module 4.4).' },
        { text: 'Gukesh–Ding, Singapore 2024, game 1', why: 'That game was a Classical French with 3.Nc3 Nf6, not a Tarrasch.' }
      ]
    }
  ],
  key: { name: 'Tarrasch: 4.Ngf3 cxd4 5.Nxd4', moves: `${TARRASCH} c5 Ngf3 cxd4 Nxd4`, orientation: 'white' },
  terms: [
    { term: 'Open file', meaning: 'A file with no pawns on it, like the d-file here. Rooks are strongest on open files.' },
    { term: 'Long diagonal', meaning: 'One of the two corner-to-corner diagonals, a1–h8 or a8–h1. A bishop on b7 uses the a8–h1 diagonal.' },
    { term: 'Pawn island', meaning: 'A group of pawns of one color on neighboring files. Here each side has two islands.' }
  ]
})
