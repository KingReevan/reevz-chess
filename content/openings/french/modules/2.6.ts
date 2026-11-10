import { defineModule } from '../../../types'
import { MILNER_BARRY } from '../lines'

/** 7...Bd7 8.O-O Nxd4 9.Nxd4 Qxd4 10.Nc3: the gambit accepted */
const ACCEPTED = `${MILNER_BARRY} Bd7 O-O Nxd4 Nxd4 Qxd4 Nc3`
/** adv-mb-main: 10...a6 11.Qe2 Ne7 12.Kh1 */
const MAIN = `${ACCEPTED} a6 Qe2 Ne7 Kh1`
/** adv-mb-qxe5: 10...Qxe5 11.Re1 Qb8 12.Nxd5 Bd6 */
const QXE5 = `${ACCEPTED} Qxe5 Re1 Qb8 Nxd5 Bd6`

export default defineModule({
  id: '2.6',
  title: 'The Milner-Barry Gambit: 6.Bd3',
  minutes: 11,
  level: 2,
  goals: [
    'See why 6.Bd3 really offers the d4-pawn, and how Black accepts it safely',
    "Know White's ideas for the pawn: development, Qe2, Kh1 and f4, and the e-file",
    'Judge it honestly: dangerous in practice, but the engine prefers Black'
  ],
  intro:
    "6.Bd3 is the most natural developing move in the Advance, but it changes everything: the bishop blocks the queen's defense of d4. White is offering a pawn. This is the Milner-Barry Gambit, named after Stuart Milner-Barry. This module teaches the ideas for both sides, not long theory.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The gambit accepted: 7...Bd7, then take',
      intro: 'Black takes the pawn, but only after one careful move. Then watch how White tries to use the extra time.',
      moves: MAIN,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: "White's third choice",
          text: '5...Qb6. Besides 6.a3 and 6.Be2, White has 6.Bd3.',
          arrows: [['f1', 'd3', 'blue']]
        },
        11: {
          title: 'The bishop blocks the queen',
          text: "6.Bd3. The bishop develops and gets ready to castle. But now the queen's line from d1 to d4 is blocked.",
          arrows: [['d1', 'd3', 'yellow']],
          marks: ['d4']
        },
        12: {
          title: 'Trade the c-pawns',
          text: "6...cxd4. Black trades first, so the queen's diagonal to d4 opens.",
          arrows: [['c5', 'd4', 'red']]
        },
        13: {
          title: 'One defender',
          text: '7.cxd4. d4 is attacked twice (the c6-knight and the queen) and defended only once (the f3-knight). It looks like a free pawn.',
          arrows: [['c6', 'd4', 'red'], ['b6', 'd4', 'red'], ['f3', 'd4', 'green']],
          marks: ['d4']
        },
        14: {
          title: 'First the bishop',
          text: "7...Bd7. Not 7...Nxd4? yet (Module 2.7 shows why). With the bishop on d7, a white bishop on b5 can never give check, and once the c6-knight leaves, the d7-bishop guards b5.",
          marks: ['b5', 'd7'],
          ann: '!'
        },
        15: {
          title: 'The gambit',
          text: '8.O-O. White castles and leaves d4 to its fate. This is the gambit: a pawn for time.',
          arrows: [['e1', 'g1', 'green']]
        },
        16: {
          title: 'Black accepts',
          text: '8...Nxd4. Now it is safe to take.',
          arrows: [['c6', 'd4', 'green']]
        },
        17: {
          title: 'Trade knights',
          text: '9.Nxd4. White takes the knight.',
          arrows: [['f3', 'd4', 'red']]
        },
        18: {
          title: 'A pawn up',
          text: '9...Qxd4. Black is a pawn up. But the queen stands in the middle of the board, where White can attack it with gain of time.',
          marks: ['d4']
        },
        19: {
          title: 'Develop with ideas',
          text: "10.Nc3. White develops. The knight eyes b5, where it would hit the queen and c7. The e5-pawn has lost its knight defender, so Black's queen also attacks it.",
          arrows: [['c3', 'b5', 'blue'], ['d4', 'e5', 'red']]
        },
        20: {
          title: 'No b5 for White',
          text: "10...a6. The engine's choice. The pawn takes b5 away from White's knight and bishop.",
          arrows: [['a6', 'b5', 'green']],
          ann: '!'
        },
        21: {
          title: 'Guard e5',
          text: '11.Qe2. The queen guards e5 along the e-file and frees d1 for a rook.',
          arrows: [['e2', 'e5', 'green']]
        },
        22: {
          title: 'Develop',
          text: '11...Ne7. The knight develops. It can go on to c6, where it guards the center.',
          arrows: [['e7', 'c6', 'blue']]
        },
        23: {
          title: 'Unpin the f-pawn',
          text: "12.Kh1. With the king on g1, the f2-pawn was pinned by the queen on d4, so f2–f4 was illegal. Now White can play f4 to support e5. The engine says Black is better, but White's quick development makes this hard to play.",
          arrows: [['d4', 'g1', 'yellow'], ['f2', 'f4', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: "White's ideas for the pawn",
      body:
        "White gives up a central pawn to get three things:\n\n**Development.** White castles quickly and brings out the knight and queen, while several of Black's pieces are still at home.\n\n**Space.** The e5-pawn still cramps Black's kingside, and the g8-knight still can't use f6.\n\n**Targets.** The black queen on d4 can be chased (Nb5, Be3, or Rd1 once the bishop moves), the black king is still in the center, and White can use the **e-file** with Re1 or support e5 with **Qe2, Kh1 and f4**.\n\nIn practice this is dangerous, especially in fast games. But it is not a sound gambit: after 10.Nc3 a6 the engine prefers Black. Treat it as a practical weapon for White, and as a pawn Black can safely take, with care."
    },
    {
      kind: 'walkthrough',
      title: 'The greedy 10...Qxe5',
      intro: "Black can grab a second pawn. It isn't a blunder, but watch how the e-file turns into a weapon for White.",
      moves: QXE5,
      start: 19,
      orientation: 'white',
      steps: {
        19: {
          title: 'e5 is loose',
          text: '10.Nc3. The e5-pawn is attacked by the queen and guarded by nothing.',
          arrows: [['d4', 'e5', 'red']],
          marks: ['e5']
        },
        20: {
          title: 'A second pawn',
          text: '10...Qxe5. Black is two pawns up. This is not a blunder, but it is riskier than 10...a6.',
          ann: '?!'
        },
        21: {
          title: 'Rook to the e-file',
          text: "11.Re1. The rook attacks the queen. Black's king is on the same file, behind the e6-pawn. This is White's only good move.",
          arrows: [['e1', 'e5', 'red']]
        },
        22: {
          title: 'The queen steps back',
          text: '11...Qb8. The queen leaves the e-file. 11...Qd6 is about as good.',
          arrows: [['e5', 'b8', 'blue']]
        },
        23: {
          title: 'Knight takes d5',
          text: '12.Nxd5. Black cannot take back: 12...exd5 would leave the e-file open to Black\'s king, so the e6-pawn is pinned. It is White\'s best move here.',
          arrows: [['e1', 'e8', 'yellow']],
          marks: ['e6'],
          ann: '!'
        },
        24: {
          title: 'Level again',
          text: "12...Bd6. Black develops. Black is a pawn up, but the king is stuck in the center and White's pieces are very active. The engine calls it level, so the second pawn has thrown away Black's edge.",
          arrows: [['d6', 'h2', 'blue']]
        }
      }
    },
    {
      kind: 'history',
      title: 'Who was Milner-Barry?',
      body:
        'The gambit is named after Stuart Milner-Barry. Wikipedia lists it among four openings named after him. His name is spelled with a hyphen.'
    }
  ],
  takeaway:
    "In the Milner-Barry Gambit (6.Bd3), Black plays ...cxd4 and ...Bd7 before taking on d4. After 10.Nc3 a6 Black is better, though White has real practical chances; 10...Qxe5 grabs a second pawn but lets White's rook and knight become very active.",
  lookAhead: 'Module 2.7 shows what happens when Black takes on d4 before ...Bd7: the Bb5+ queen trap.',
  drills: [
    {
      title: 'Accept the gambit safely',
      prompt: "You're Black. White has played 6.Bd3. Trade the c-pawns, make b5 safe, then win the d4-pawn and stop White's knight from using b5.",
      moves: `${ACCEPTED} a6`,
      start: 11,
      side: 'black',
      hints: ['Start with ...cxd4. Before taking on d4, develop the c8-bishop to d7.', 'Take on d4 with the knight, then the queen. After 10.Nc3, push your a-pawn one square.'],
      success: "6...cxd4, 7...Bd7, 8...Nxd4, 9...Qxd4 and 10...a6. A pawn up, and the engine prefers Black."
    },
    {
      title: 'Punish the second pawn',
      prompt: "You're White. Black has just grabbed a second pawn with 10...Qxe5. Use the e-file.",
      moves: `${ACCEPTED} Qxe5 Re1 Qb8 Nxd5`,
      start: 20,
      side: 'white',
      hints: ['Attack the queen with a rook, on the file where Black\'s king stands.', "After the queen leaves, Black's e6-pawn is pinned. Which pawn can your knight take?"],
      success: '11.Re1 Qb8 12.Nxd5! The e6-pawn is pinned, so Black cannot take back. The position is level again.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Black\'s queen on d4 attacks e5. Which white pieces defend e5 right now?',
      moves: ACCEPTED,
      orientation: 'black',
      choices: [
        { text: 'None: its knight defender on f3 has been traded', correct: true, why: 'Right. That is why 10...Qxe5 is possible, and why White often plays Qe2 to guard e5.' },
        { text: 'The d3-bishop', why: 'The bishop on d3 moves on the b1–h7 and f1–a6 diagonals. It does not guard e5.' },
        { text: 'The c3-knight', why: 'A knight on c3 covers e4 and d5, not e5.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'What does White get for the pawn in the Milner-Barry Gambit?',
      moves: MAIN,
      orientation: 'white',
      choices: [
        { text: "Quick development, the e5-pawn's space and chances against Black's king", correct: true, why: "Yes. White castles and develops fast, while Black's queen and king are targets. Objectively it is not quite enough." },
        { text: 'A forced win of material', why: 'There is no forced win. The engine actually prefers Black after 10...a6.' },
        { text: "Nothing: it's simply a blunder", why: 'It is a real gambit with dangerous ideas. Black has to play carefully, even if the engine prefers Black.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 10...a6 a useful move?',
      moves: `${ACCEPTED} a6`,
      orientation: 'black',
      choices: [
        { text: "It takes b5 away from White's knight and bishop", correct: true, why: "Right. Nb5 would hit Black's queen and c7. After ...a6, the knight can't land there." },
        { text: 'It prepares ...b5 to attack the c3-knight', why: '...b5 is possible later, but the point now is the b5-square itself.' },
        { text: "It opens the a-file for Black's rook", why: 'The a-file stays closed: both a-pawns are still on it.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 10...Qxe5 11.Re1 Qb8 12.Nxd5, why can\'t Black take the knight with the e6-pawn?',
      moves: `${ACCEPTED} Qxe5 Re1 Qb8 Nxd5`,
      orientation: 'black',
      choices: [
        { text: 'The e6-pawn is pinned: ...exd5 would expose Black\'s king to the e1-rook', correct: true, why: 'Yes. A move that puts your own king in check is illegal, so 12...exd5 is not allowed.' },
        { text: 'The knight on d5 is guarded by White\'s queen', why: "White's queen on d1 is blocked by the d3-bishop. The real reason is the pin on the e-file." },
        { text: 'Black could take, but it loses a rook', why: 'Black cannot take at all. With the queen gone from e5, the e6-pawn is the only thing between the e1-rook and the king.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'What is the honest verdict on the Milner-Barry Gambit?',
      choices: [
        { text: 'A dangerous practical weapon, but the engine prefers Black after 10.Nc3 a6', correct: true, why: 'Right. It is not a sound gambit, but Black must find several precise moves.' },
        { text: 'A sound gambit that gives White a winning attack', why: 'The engine does not agree. With 7...Bd7 and 10...a6, Black keeps the extra pawn and the better game.' },
        { text: 'A blunder that loses by force', why: 'Nothing is lost by force. White gets real play for the pawn.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does White play 12.Kh1 here?',
      moves: MAIN,
      orientation: 'white',
      choices: [
        { text: 'To unpin the f2-pawn, so that f2–f4 can support e5', correct: true, why: 'Yes. With the king on g1, the queen on d4 pinned the f2-pawn. On h1 the king is off that diagonal.' },
        { text: 'To prepare Rg1 and a g-pawn attack', why: 'The idea is f2–f4, which was illegal while the king stood on g1.' },
        { text: 'To escape a back-rank mate', why: 'There is no back-rank threat here. The king leaves the g1–a7 diagonal of Black\'s queen.' }
      ]
    }
  ],
  key: { name: 'Milner-Barry Gambit: 10.Nc3', moves: ACCEPTED, orientation: 'black' },
  terms: [
    { term: 'Milner-Barry Gambit', meaning: 'The Advance with 5...Qb6 6.Bd3: White gives up the d4-pawn for quick development.' },
    { term: 'Compensation', meaning: 'What you get back for material you gave up, such as faster development or an attack.' },
    { term: 'Half-open file', meaning: 'A file with pawns of only one color on it. After White\'s e-pawn goes, Re1 uses the e-file against Black\'s king.' }
  ]
})
