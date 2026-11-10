import { defineModule } from '../../../types'
import { TARRASCH, ALEKHINE_CHATARD } from '../lines'

/** 3...Nf6 4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6 7.Ngf3 Be7 8.O-O O-O: the key position */
const TAR_OO = `${TARRASCH} Nf6 e5 Nfd7 Bd3 c5 c3 Nc6 Ngf3 Be7 O-O O-O`
/** tar-greek-fail: 9.Bxh7+? Kxh7 10.Ng5+ Bxg5 */
const TAR_FAIL = `${TAR_OO} Bxh7+ Kxh7 Ng5+ Bxg5`
/** 6...O-O 7.Bd3 c5: White to choose the attack */
const AC_C5 = `${ALEKHINE_CHATARD} O-O Bd3 c5`
/** cla-ac-greek-fail: 8.Bxh7+? Kxh7 9.Qh5+ Kg8 10.Bxe7 Qxe7 */
const AC_FAIL = `${AC_C5} Bxh7+ Kxh7 Qh5+ Kg8 Bxe7 Qxe7`
/** cla-ac-oo: 8.Qh5! g6 9.Qh6 */
const AC_QH5 = `${AC_C5} Qh5 g6 Qh6`

export default defineModule({
  id: '8.2',
  title: 'When the Greek Gift fails',
  minutes: 11,
  level: 3,
  goals: [
    'See why 9.Bxh7+? loses in the closed Tarrasch when Black has a bishop on e7',
    'See why 8.Bxh7+? fails in the Alekhine–Chatard, and why 8.Qh5! is right',
    "As Black, punish a sacrifice that doesn't fit the checklist"
  ],
  intro:
    "Module 8.1 gave the checklist for Bxh7+. Here are two famous positions where the sacrifice looks just as natural, and loses. In each one a single point of the checklist is missing. Spot which one, and you'll never fall for it as White, or fear it as Black.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Tarrasch: the e7-bishop takes on g5',
      intro: 'A closed Tarrasch, but with 7.Ngf3 instead of 7.Ne2 (Module 4.6). Watch the bishop on e7.',
      moves: TAR_FAIL,
      start: 13,
      orientation: 'white',
      steps: {
        13: {
          title: 'The knight goes to f3',
          text: '7.Ngf3. This time the g1-knight comes to f3, one jump from g5. The d2-knight stays where it is for now.',
          arrows: [['f3', 'g5', 'blue'], ['d3', 'h7', 'blue']]
        },
        14: {
          title: 'A bishop on e7',
          text: '7...Be7. The bishop develops and gets ready for castling. From e7 it also watches g5.',
          arrows: [['e7', 'g5', 'green']]
        },
        15: {
          title: 'White castles',
          text: '8.O-O. White\'s king is safe.',
          arrows: [['e1', 'g1', 'green']]
        },
        16: {
          title: 'Run the checklist',
          text: '8...O-O. The bishop sees h7, the knight can reach g5, and the f6-square is covered by the e5-pawn. But point 5 fails: the e7-bishop guards g5.',
          arrows: [['d3', 'h7', 'yellow'], ['e7', 'g5', 'green']],
          marks: ['g5']
        },
        17: {
          title: 'The sacrifice anyway',
          text: '9.Bxh7+. White gives the bishop for a pawn and hopes for an attack.',
          arrows: [['h7', 'g8', 'red']],
          ann: '?'
        },
        18: {
          title: 'Take it',
          text: '9...Kxh7. Black accepts. 9...Kh8? would be a mistake: White keeps the extra pawn and a strong attack.',
          marks: ['h7']
        },
        19: {
          title: 'The knight check',
          text: '10.Ng5+. The knight checks, and the queen\'s path to h5 opens. But the knight stands on a square that Black guards.',
          arrows: [['g5', 'h7', 'red'], ['e7', 'g5', 'red']]
        },
        20: {
          title: 'The bishop takes',
          text: '10...Bxg5. No White pawn stands on f4 or h4 to take back, and the c1-bishop is blocked by the d2-knight. Black is two pieces for a pawn up and winning. Other tenth moves don\'t save White either.',
          marks: ['g5', 'd2'],
          ann: '!'
        }
      }
    },
    {
      kind: 'text',
      title: 'What White should play instead',
      body:
        "In the Tarrasch position after 8...O-O, the e5-pawn is attacked twice (by the c6- and d7-knights) and defended twice (by the d4-pawn and the f3-knight). The best move is the quiet **9.Re1**: the rook adds a third defender to e5, and White keeps a small edge. Black usually trades on d4 and breaks with ...f6, as in Module 4.6.\n\nNotice the difference from Module 8.1. In the Classical main line, Black's dark-squared bishop had been traded on move 6, and a pawn on f4 defended g5. Here Black still has the bishop, and nothing defends g5. One missing point is enough."
    },
    {
      kind: 'walkthrough',
      title: 'The Alekhine–Chatard: no knight for g5',
      intro: 'Module 6.5 showed the Alekhine–Chatard Attack, 6.h4. Here Black castles into it, and White reaches for the sacrifice too early.',
      moves: AC_FAIL,
      start: 11,
      orientation: 'white',
      steps: {
        11: {
          title: 'The Alekhine–Chatard',
          text: '6.h4. White offers the g5-bishop. If Black takes it, the h-pawn takes back and the h-file becomes half-open for White\'s rook.',
          arrows: [['h4', 'g5', 'green']]
        },
        12: {
          title: 'Castling into it',
          text: '6...O-O. Black castles on the side where White is attacking. The engine says White is clearly better now.',
          arrows: [['e8', 'g8', 'blue']],
          ann: '?!'
        },
        13: {
          title: 'The bishop aims at h7',
          text: '7.Bd3. The bishop joins the attack on h7.',
          arrows: [['d3', 'h7', 'red']]
        },
        14: {
          title: 'Black hits d4',
          text: '7...c5. Black starts the usual counterplay against d4.',
          arrows: [['c5', 'd4', 'red']]
        },
        15: {
          title: 'The tempting sacrifice',
          text: "8.Bxh7+. It looks like the Classical line from Module 8.1, but run the checklist: the g1-knight needs two moves to reach g5, and White's own bishop stands there anyway.",
          arrows: [['h7', 'g8', 'red']],
          marks: ['g1', 'g5'],
          ann: '?'
        },
        16: {
          title: 'Black must take',
          text: '8...Kxh7. The right reply. 8...Kh8?? loses: after 9.Qh5 White mates.',
          marks: ['h7']
        },
        17: {
          title: 'A lonely queen check',
          text: '9.Qh5+. The queen checks, but no other White piece can join quickly.',
          arrows: [['h5', 'h7', 'red']]
        },
        18: {
          title: 'Back to g8',
          text: '9...Kg8. The only legal move. White has no knight to bring in.',
          arrows: [['h7', 'g8', 'green']]
        },
        19: {
          title: 'Trading bishops',
          text: '10.Bxe7. White has no attacking move, so it trades bishops.',
          marks: ['e7']
        },
        20: {
          title: 'A piece up',
          text: '10...Qxe7. Black is a piece for a pawn up, and the engine says Black is clearly better. The attack has run out.',
          marks: ['h5']
        }
      }
    },
    {
      kind: 'warning',
      title: '8...Kh8?? is the real blunder',
      body:
        "After 8.Bxh7+? Black must take the bishop. If Black declines with 8...Kh8??, then 9.Qh5 puts the queen and the bishop on the h-file together, with Black's king in the corner behind them. The bishop can step off the file at any moment with a discovered check from the queen, and the engine finds mate in every line. Declining the Greek Gift is not a safe default."
    },
    {
      kind: 'walkthrough',
      title: 'The right attack: 8.Qh5!',
      intro: 'Same position after 7...c5. Instead of the sacrifice, White brings the queen first.',
      moves: AC_QH5,
      start: 14,
      orientation: 'white',
      steps: {
        14: {
          title: 'The same moment',
          text: '7...c5. White looks for a way to attack h7 without giving anything away.',
          marks: ['h7']
        },
        15: {
          title: 'The queen first',
          text: '8.Qh5. The queen and the d3-bishop both hit h7, so White threatens Qxh7 mate.',
          arrows: [['h5', 'h7', 'red'], ['d3', 'h7', 'red']],
          ann: '!'
        },
        16: {
          title: 'The only good defense',
          text: '8...g6. The pawn blocks the bishop\'s diagonal to h7 and attacks the queen. Other moves, like 8...h6 or 8...f5, lose quickly.',
          arrows: [['g6', 'h5', 'red']],
          marks: ['f6', 'h6']
        },
        17: {
          title: 'Close to the king',
          text: '9.Qh6. The queen settles on h6, close to Black\'s king. Next comes h4–h5 to open the h-file. White is clearly better.',
          arrows: [['h4', 'h5', 'blue']]
        }
      }
    }
  ],
  takeaway:
    'One missing point on the checklist is enough to sink the Greek Gift. In the Tarrasch with ...Be7, 9.Bxh7+? Kxh7 10.Ng5+ Bxg5 just loses two pieces for a pawn. In the Alekhine–Chatard, 8.Bxh7+? fails because no knight can reach g5, but 8...Kh8?? 9.Qh5 still mates; 8.Qh5! is the right attack.',
  lookAhead:
    "Next: Black's other weapon against White's chain. Module 8.3 looks at the ...f6 break, and how White answers by holding e5 with pieces.",
  drills: [
    {
      title: 'Punish the sacrifice',
      prompt: "You're Black in the closed Tarrasch. White has just played 9.Bxh7+?. Take what you're offered, and when the knight checks, remember what your bishop on e7 guards.",
      moves: TAR_FAIL,
      start: 16,
      side: 'black',
      hints: [
        'Take the bishop with the king.',
        'After 10.Ng5+, the e7-bishop can take the knight, and nothing takes back.'
      ],
      success: '9...Kxh7 10.Ng5+ Bxg5. Black is two pieces for a pawn up.'
    },
    {
      title: 'The right attack',
      prompt: "You're White in the Alekhine–Chatard. Black has castled and played 7...c5. Don't sacrifice yet: bring the queen close to Black's king.",
      moves: AC_QH5,
      start: 14,
      side: 'white',
      hints: [
        'Line up the queen with the d3-bishop against h7.',
        '8.Qh5 threatens mate on h7. After 8...g6, the queen steps to h6.'
      ],
      success: '8.Qh5 g6 9.Qh6. h4–h5 comes next, and White is clearly better.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'In this Tarrasch position, why does 9.Bxh7+ fail?',
      moves: TAR_OO,
      orientation: 'white',
      choices: [
        { text: 'After 9...Kxh7 10.Ng5+, the e7-bishop takes the knight and nothing can take back', correct: true, why: 'Right. No White pawn stands on f4 or h4, and the d2-knight blocks the c1-bishop. Black ends up two pieces for a pawn up.' },
        { text: "Black's king escapes to h8", why: '9...Kh8 is a mistake: White keeps the pawn and a strong attack. Black wins by taking the bishop.' },
        { text: 'The d3-bishop is pinned to the queen', why: 'Nothing pins the bishop. The sacrifice fails because Black guards g5.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White has just played 8.Qh5 in the Alekhine–Chatard. What does White threaten?',
      moves: `${AC_C5} Qh5`,
      orientation: 'black',
      choices: [
        { text: 'Qxh7 mate', correct: true, why: "Right. The queen and the d3-bishop both hit h7, and the f8-rook blocks the king's escape. 8...g6 is the only good defense." },
        { text: 'Bxe7, winning a piece', why: 'After Bxe7 Qxe7 the bishops are simply traded. The threat is on h7.' },
        { text: 'Qxf7+', why: 'The f7-pawn is guarded by the f8-rook and the king, so Qxf7+ would just lose the queen. The threat is Qxh7 mate.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White has just played 8.Bxh7+ in the Alekhine–Chatard. What must Black play?',
      moves: `${AC_C5} Bxh7+`,
      orientation: 'black',
      choices: [
        { text: '8...Kxh7', correct: true, why: 'Right. After 9.Qh5+ Kg8 10.Bxe7 Qxe7 Black is a piece for a pawn up.' },
        { text: '8...Kh8', why: 'A blunder: 9.Qh5 lines up the queen and bishop on the h-file, and White mates.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Alekhine–Chatard line, which point of the checklist is missing for 8.Bxh7+?',
      moves: AC_C5,
      orientation: 'white',
      choices: [
        { text: 'No White knight can jump to g5 with check', correct: true, why: "Right. The g1-knight is two moves away, and White's own bishop stands on g5." },
        { text: 'The bishop cannot reach h7', why: 'The d3–h7 diagonal is open, so Bxh7+ is possible. It just has no follow-up.' },
        { text: 'The queen cannot reach h5', why: 'The queen does reach h5 with 9.Qh5+. What is missing is a knight on g5 to join it.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'White to move in this Tarrasch position. Which move is best?',
      moves: TAR_OO,
      orientation: 'white',
      choices: [
        { text: '9.Re1, adding a third defender to e5', correct: true, why: 'Right. The rook guards e5, and White keeps a small edge.' },
        { text: '9.Bxh7+', why: 'It fails: 9...Kxh7 10.Ng5+ Bxg5 and Black is two pieces for a pawn up.' },
        { text: '9.Ng5', why: 'The e7-bishop simply takes it: 9...Bxg5, and nothing takes back.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9.Bxh7+ Kxh7 10.Ng5+ Bxg5 in the Tarrasch, why can\'t White take back on g5?',
      moves: TAR_FAIL,
      orientation: 'white',
      choices: [
        { text: 'No pawn stands on f4 or h4, and the d2-knight blocks the c1-bishop', correct: true, why: 'Right. Compare the Classical line in Module 8.1, where the f4-pawn defended g5.' },
        { text: 'The queen on d1 is pinned', why: "Nothing pins White's queen. It simply doesn't reach g5 from d1." },
        { text: 'White is in check', why: 'White is not in check. No White piece or pawn can reach g5.' }
      ]
    }
  ],
  key: { name: 'Tarrasch with ...Be7: 9.Bxh7+? fails', moves: TAR_OO, orientation: 'white' },
  terms: [
    { term: 'Discovered check', meaning: 'A piece moves out of the way and uncovers a check by the piece behind it. The moving piece can go almost anywhere.' },
    { term: 'Alekhine–Chatard Attack', meaning: '6.h4 in the Classical French (4.Bg5 Be7 5.e5 Nfd7), offering the g5-bishop to open the h-file.' },
    { term: 'Premature', meaning: 'Played too early, before the conditions for it are in place.' }
  ]
})
