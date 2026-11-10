import { defineModule } from '../../../types'
import { EXCHANGE } from '../lines'

/** 4.Nf3 Bd6 5.Bd3 Ne7 6.O-O O-O 7.Re1: the shared start */
const RE1 = `${EXCHANGE} Nf3 Bd6 Bd3 Ne7 O-O O-O Re1`
/** exch-greek: 7...Bg4? 8.Bxh7+! Kxh7 9.Ng5+ Kg8 10.Qxg4 */
const GREEK = `${RE1} Bg4 Bxh7+ Kxh7 Ng5+ Kg8 Qxg4`
/** exch-4nf3 up to 9.Qxd3: 7...Bf5 8.Bg5 Bxd3 9.Qxd3 */
const SAFE = `${RE1} Bf5 Bg5 Bxd3 Qxd3`
/** exch-qe2-check: 4.Bd3 Bd6 5.Qe2+ Ne7 6.Nf3 Nc6 7.c3 O-O */
const QE2 = `${EXCHANGE} Bd3 Bd6 Qe2+ Ne7 Nf3 Nc6 c3 O-O`

export default defineModule({
  id: '3.3',
  title: 'The open e-file and the Bxh7+ trick',
  minutes: 10,
  level: 2,
  goals: [
    'Spot why 7...Bg4? loses a pawn to 8.Bxh7+! Kxh7 9.Ng5+',
    'See how a knight check uncovers an attack by the queen behind it',
    'Know the safe moves: 7...Bf5 for Black, and why an early Qe2+ achieves nothing'
  ],
  intro:
    "In Module 3.1, Black's ...Bg4 pinned White's knight and everything was fine. In one very common position, the same move loses a pawn. The reason is a short, forcing trick that every French player meets sooner or later. This module shows the trick, the safe way to avoid it, and one e-file check that looks scary but isn't.",
  sections: [
    {
      kind: 'walkthrough',
      title: '7...Bg4? 8.Bxh7+! and 9.Ng5+',
      intro: "Watch three things: White's d3-bishop, the f3-knight, and the line from White's queen to g4.",
      moves: GREEK,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'Both sides castled',
          text: "6...O-O. White's d3-bishop aims at h7. The f3-knight is one jump from g5. Remember both.",
          arrows: [['d3', 'h7', 'yellow'], ['f3', 'g5', 'blue']]
        },
        13: {
          title: 'Rook to the e-file',
          text: '7.Re1. White takes the open file and attacks the e7-knight, which the queen and the d6-bishop defend.',
          arrows: [['e1', 'e7', 'red']]
        },
        14: {
          title: 'A natural pin',
          text: "7...Bg4. It pins the f3-knight to the queen, just like in Module 3.1. But here the bishop is loose: no Black piece defends g4. Only the knight stands between it and White's queen.",
          arrows: [['g4', 'd1', 'red']],
          marks: ['g4'],
          ann: '?'
        },
        15: {
          title: 'The sacrifice',
          text: '8.Bxh7+. The bishop takes the h7-pawn with check. White is not hoping for mate. The point is to pull Black\'s king to h7.',
          arrows: [['d3', 'h7', 'red']],
          ann: '!'
        },
        16: {
          title: 'The king takes',
          text: '8...Kxh7. Black takes the bishop. Declining with 8...Kh8 is even worse: White keeps the extra pawn and Black\'s king is weaker.',
          marks: ['h7']
        },
        17: {
          title: 'Check, and a hidden attack',
          text: "9.Ng5+. The pinned knight jumps away with check. Its move uncovers the line from d1 to g4, so White's queen now attacks the bishop. Black is in check, so there is no time to take the queen.",
          arrows: [['g5', 'h7', 'red'], ['d1', 'g4', 'red']]
        },
        18: {
          title: 'The best king move',
          text: '9...Kg8. The only reasonable square. 9...Kg6, 9...Kh6 or 9...Kh8 walk into a much worse attack.',
          arrows: [['h7', 'g8', 'green']]
        },
        19: {
          title: 'The bishop falls',
          text: '10.Qxg4. White wins the bishop back. White gave a bishop and took a bishop and a pawn: White is a clean pawn up, and the engine says White is clearly better.',
          arrows: [['d1', 'g4', 'red']],
          marks: ['g4']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why the trick worked',
      body:
        "Three things had to be true:\n\n**1. The bishop sees h7.** The d3–h7 diagonal was empty, so Bxh7+ came with check.\n\n**2. The knight can check from g5.** With the king on h7, Ng5 gives check. A check means Black has no time for anything else.\n\n**3. Something is loose behind the knight.** The g4-bishop had no defender, and it stood on the line from White's queen. When the knight jumped, the queen's line opened. That is a **discovered attack**.\n\nIf any one of the three is missing, the trick fails. Chapter 8 (Module 8.1) gives the full checklist for this kind of sacrifice, which is called the Greek Gift."
    },
    {
      kind: 'walkthrough',
      title: '7...Bf5: the safe way',
      intro: 'Same position. This time Black puts the bishop on f5.',
      moves: SAFE,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'The same moment',
          text: '7.Re1. Black wants to develop the c8-bishop. Look at the d3–h7 diagonal before you choose.',
          arrows: [['d3', 'h7', 'yellow']]
        },
        14: {
          title: 'Block the diagonal',
          text: '7...Bf5. The bishop stands on the d3–h7 diagonal, so Bxh7+ is now impossible. The e7-knight defends it, and it offers to trade itself for White\'s attacking bishop.',
          arrows: [['e7', 'f5', 'green'], ['f5', 'd3', 'yellow']],
          ann: '!'
        },
        15: {
          title: 'A pin and a threat',
          text: "8.Bg5. White pins the e7-knight to Black's queen. That knight is the f5-bishop's only defender, so White now threatens 9.Bxf5. Black trades first.",
          arrows: [['g5', 'e7', 'red'], ['d3', 'f5', 'red']],
          marks: ['d8']
        },
        16: {
          title: 'Trade the attacker',
          text: "8...Bxd3. Black removes White's best attacking piece, the bishop that aimed at h7.",
          arrows: [['f5', 'd3', 'red']]
        },
        17: {
          title: 'No more Bxh7+',
          text: "9.Qxd3. The queen now looks at h7, but h7 is defended by the king, and White has no bishop left to sacrifice there. Black follows with 9...c6, and the engine calls it level.",
          arrows: [['d3', 'h7', 'blue'], ['g8', 'h7', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'An early Qe2+ achieves nothing',
      intro: 'The open e-file tempts White to check early. Here is why Black need not worry.',
      moves: QE2,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The Exchange structure',
          text: '3...exd5. Both kings stand on the open e-file for now.',
          arrows: [['e1', 'e8', 'blue']]
        },
        7: {
          title: 'Bishop out',
          text: '4.Bd3. The usual developing move.',
          arrows: [['d3', 'h7', 'blue']]
        },
        8: {
          title: 'Mirror move',
          text: "4...Bd6. Black copies. The e-file in front of Black's king is still empty.",
          marks: ['e7']
        },
        9: {
          title: 'A check on the file',
          text: '5.Qe2+. White checks down the open file. It looks active, but Black can block it with a piece that wants to develop anyway.',
          arrows: [['e2', 'e8', 'red']]
        },
        10: {
          title: 'Block with a knight',
          text: '5...Ne7. The best answer: the knight wanted to go to e7 anyway. For a moment it is pinned to the king and can\'t move.',
          arrows: [['e7', 'e2', 'green']],
          marks: ['e7']
        },
        11: {
          title: 'White develops',
          text: '6.Nf3. White brings out the knight.',
          arrows: [['f3', 'd4', 'green']]
        },
        12: {
          title: 'The other knight',
          text: '6...Nc6. The e7-knight is pinned, so the b8-knight is the one that goes to c6.',
          arrows: [['c6', 'd4', 'red']]
        },
        13: {
          title: 'Support d4',
          text: '7.c3. White guards d4 a second time.',
          arrows: [['c3', 'd4', 'green']]
        },
        14: {
          title: 'The pin is gone',
          text: "7...O-O. Castling takes the king off the e-file and ends the pin. White's check gained nothing, and the engine calls it roughly equal.",
          arrows: [['e8', 'g8', 'green']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Before you pin with ...Bg4',
      body:
        "Ask two questions. Is my bishop on g4 defended? Can White's pinned knight move with check? If the bishop is loose and a knight check is coming, the pin can backfire. With colors reversed the pattern is ...Bxh2+ and ...Ng4+ against a loose bishop on g5, so White must ask the same questions before pinning with Bg5."
    }
  ],
  takeaway:
    "With a bishop aiming at h7 and a knight ready for g5, a loose bishop on g4 is a target: 8.Bxh7+ Kxh7 9.Ng5+ uncovers the queen and wins a pawn. Play 7...Bf5 instead, and don't fear an early Qe2+.",
  lookAhead:
    "That finishes the Exchange. Next, White's early sidelines, starting with Module 3.4: 2.d3 and the King's Indian Attack.",
  drills: [
    {
      title: 'Find the trick',
      prompt: "You're White. Black has just pinned your knight with 7...Bg4?. The bishop on g4 has no defender. Win a pawn.",
      moves: GREEK,
      start: 14,
      side: 'white',
      hints: [
        "Pull Black's king to h7 first, with check.",
        '8.Bxh7+ Kxh7, then the pinned knight jumps to g5 with check, and the queen takes on g4.'
      ],
      success: '8.Bxh7+ Kxh7 9.Ng5+ Kg8 10.Qxg4. The knight check uncovered the queen, and White is a pawn up.'
    },
    {
      title: 'Meet the early check',
      prompt: "You're Black. White checks with 5.Qe2+. Block with a developing piece, bring out the other knight and castle.",
      moves: QE2,
      start: 8,
      side: 'black',
      hints: [
        'Block with the king\'s knight, which wanted to go to e7 anyway.',
        'Next, the b8-knight goes to c6. Then castle short to end the pin.'
      ],
      success: '5...Ne7, 6...Nc6 and 7...O-O. The check achieved nothing, and the game is roughly equal.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'White to move. Black has just played 7...Bg4. What is White\'s best move?',
      moves: `${RE1} Bg4`,
      orientation: 'white',
      choices: [
        { text: '8.Bxh7+', correct: true, why: 'Right. After 8...Kxh7 9.Ng5+ the knight check uncovers the queen, and 10.Qxg4 leaves White a pawn up.' },
        { text: '8.Ng5', why: 'Without a check first, Black simply plays 8...Bxd1 and wins the queen. The bishop sacrifice is what makes the knight move come with check.' },
        { text: '8.h3', why: 'This asks the bishop to move, but Black just retreats it with ...Bf5, and the game is level. 8.Bxh7+ wins a pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9.Ng5+, why can\'t Black save the bishop on g4?',
      moves: `${RE1} Bg4 Bxh7+ Kxh7 Ng5+`,
      orientation: 'white',
      choices: [
        { text: 'Black is in check and must move the king, then White plays Qxg4', correct: true, why: 'Yes. A check must be answered first. By the time Black is out of check, the queen takes the bishop.' },
        { text: 'The bishop is pinned to Black\'s king', why: 'Nothing pins the g4-bishop. It is lost because Black has to answer the check first.' },
        { text: 'The bishop has no squares to move to', why: 'It has several squares, but Black is in check, and a bishop move cannot block a knight check.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White has checked with 5.Qe2+. What is Black\'s best reply?',
      moves: `${EXCHANGE} Bd3 Bd6 Qe2+`,
      orientation: 'black',
      choices: [
        { text: '5...Ne7', correct: true, why: 'Right. The knight blocks the check from a square it wanted anyway. Black castles soon and the pin disappears.' },
        { text: '5...Be7', why: 'Playable, but the bishop gives up its good square on d6 and moves twice. 5...Ne7 blocks with a piece that is not yet developed.' },
        { text: '5...Kf8', why: 'Moving the king takes away Black\'s right to castle. There is no need: a piece can block the check.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In the trick 8.Bxh7+ Kxh7 9.Ng5+, which line does the knight move open?',
      choices: [
        { text: "The diagonal from White's queen on d1 to Black's bishop on g4", correct: true, why: "Right. The knight on f3 was standing on that line. When it jumped to g5, the queen's attack on g4 was uncovered: a discovered attack." },
        { text: 'The e-file, from the rook on e1 to the e7-knight', why: 'The rook already attacked e7. The new attack is the queen against the g4-bishop.' },
        { text: 'The h-file, toward Black\'s king', why: 'The h-file is not the point. The knight checks the king directly from g5, and its move uncovers the queen on the d1–g4 line.' }
      ]
    },
    {
      type: 'plan',
      prompt: "Black to move. Why is 7...Bf5 safe from the Bxh7+ trick?",
      moves: RE1,
      orientation: 'black',
      choices: [
        { text: 'The bishop on f5 blocks the d3–h7 diagonal, so Bxh7+ is impossible', correct: true, why: "Yes. It also offers to trade White's attacking bishop, and the e7-knight defends it." },
        { text: "Black's queen on d8 defends h7", why: 'The queen on d8 does not reach h7. The bishop on f5 simply stands in the way of White\'s bishop.' },
        { text: 'Black can always answer Bxh7+ with ...Kh8', why: "In the 7...Bg4 line, 8...Kh8 was even worse. With the bishop on f5, the sacrifice can't even be played." }
      ]
    }
  ],
  key: { name: 'Exchange: 7...Bg4? allows 8.Bxh7+', moves: `${RE1} Bg4`, orientation: 'white' },
  terms: [
    { term: 'Discovered attack', meaning: 'A piece moves out of the way and uncovers an attack by the piece behind it. It is strongest when the moving piece gives check.' },
    { term: 'Loose piece', meaning: 'A piece that no friendly piece defends. Loose pieces are easy targets for tactics.' },
    { term: 'Greek Gift', meaning: 'The bishop sacrifice Bxh7+ (or ...Bxh2+) against a castled king, usually followed by a knight check on g5 (or g4).' }
  ]
})
