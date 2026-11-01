import { defineModule } from '../../../types'
import { MAIN, MDP_G5 } from '../lines'

/** mdp-13nd3 */
const ND3 = `${MDP_G5} Nd3 Nf6 c5 Ng6 Rc1 Rf7`
/** mdp-10nd3, up to 15...cxd6 */
const OLD = `${MAIN} Ne1 Nd7 Nd3 f5 Bd2 Nf6 f3 f4 c5 g5 Rc1 Ng6 cxd6 cxd6`

export default defineModule({
  id: '4.2',
  title: 'Ne1–d3, c4–c5 and cxd6',
  minutes: 11,
  level: 3,
  goals: [
    'See how the knight on d3 makes c4–c5 work',
    'Learn the order: support c5, rook to c1, then take on d6',
    'Know why the c-file and the d6-pawn matter after cxd6'
  ],
  intro:
    "Module 4.1 named White's targets. But c4–c5 isn't free: Black's d6-pawn and d7-knight both guard c5. This module shows how the knight on d3 wins the fight for c5, and how cxd6 then opens the c-file.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main line: 13.Nd3',
      intro: 'Count the pieces that guard c5 before and after each move.',
      moves: ND3,
      start: 24,
      orientation: 'white',
      steps: {
        24: {
          title: 'Who controls c5?',
          text: "The position after 12...g5. Black's d6-pawn and d7-knight both guard c5. White has only the f2-bishop there, so White wants one more supporter first.",
          arrows: [['d6', 'c5', 'red'], ['d7', 'c5', 'red'], ['f2', 'c5', 'green']],
          marks: ['c5']
        },
        25: {
          title: 'The knight arrives',
          text: '13.Nd3. The knight finishes its trip from f3 via e1. Now it guards c5 as well, and it also eyes the f4-pawn.',
          arrows: [['d3', 'c5', 'green'], ['d3', 'f4', 'blue']]
        },
        26: {
          title: 'Black looks the other way',
          text: '13...Nf6. The d7-knight returns to f6 to help the ...g4 push. But now only the d6-pawn watches c5.',
          arrows: [['f6', 'g4', 'blue']],
          marks: ['c5']
        },
        27: {
          title: 'The lever',
          text: '14.c5. Now the push is well supported by the knight and the bishop. White is ready to take on d6 and open the c-file.',
          arrows: [['c5', 'd6', 'red'], ['d3', 'c5', 'green'], ['f2', 'c5', 'green']]
        },
        28: {
          title: 'Black keeps attacking',
          text: '14...Ng6. Black ignores the queenside and brings another piece toward White\'s king. Each side goes its own way.',
          arrows: [['g6', 'h4', 'blue']]
        },
        29: {
          title: 'Rook first',
          text: '15.Rc1. The rook goes to the c-file before it opens. If White takes on d6 later, the rook can use the open file at once.',
          arrows: [['c1', 'c7', 'blue']]
        },
        30: {
          title: 'Black guards c7',
          text: '15...Rf7. The rook defends c7 along the seventh rank. That is the square White\'s pieces are aiming for. The engine calls this position roughly equal: the race is on.',
          arrows: [['f7', 'c7', 'green']],
          marks: ['c7']
        }
      }
    },
    {
      kind: 'history',
      title: 'Taimanov–Najdorf, Zurich 1953',
      body:
        "This exact position came up in Taimanov–Najdorf at the 1953 Candidates tournament in Zurich, by the move order 10.Be3 f5 11.f3. White doubled rooks on the c-file with Rc2 and Rfc1 and took on d6, but Najdorf's ...g4 break came first, and Black won. Module 3.5 shows that attack. Opening the c-file is only half the job: White still has to use it in time."
    },
    {
      kind: 'text',
      title: 'What cxd6 changes',
      body:
        "When White takes on d6, Black recaptures with the c-pawn. Two things change at once.\n\n**The c-file opens.** Neither side has a c-pawn now, so a rook on c1 looks all the way to c7.\n\n**The d6-pawn loses its pawn support.** The c7-pawn has gone to d6 and the e-pawn is already on e5, ahead of it. No black pawn can ever guard d6 again, so only pieces can. That is why Black often brings a knight to e8 or the bishop to f8 later."
    },
    {
      kind: 'walkthrough',
      title: 'The older order: 10.Nd3',
      intro: 'In older games White sent the knight to d3 straight away, a move earlier. The same ideas appear, and this time White takes on d6.',
      moves: OLD,
      start: 18,
      orientation: 'white',
      steps: {
        18: {
          title: 'The same set-up',
          text: '9...Nd7. The knight is on e1 and Black is ready for ...f5. This time White sends the knight on to d3 at once.',
          arrows: [['e1', 'd3', 'blue']]
        },
        19: {
          title: 'Straight to d3',
          text: '10.Nd3. The knight already supports c5. White will decide later where the dark-squared bishop belongs.',
          arrows: [['d3', 'c5', 'green']]
        },
        20: {
          title: "Black's lever",
          text: '10...f5. The usual answer: the f-pawn hits e4.',
          arrows: [['f5', 'e4', 'red']]
        },
        21: {
          title: 'A safer square',
          text: '11.Bd2. The bishop develops on d2 rather than e3, where ...f4 would kick it and gain time.',
          marks: ['e3']
        },
        22: {
          title: 'More pressure on e4',
          text: '11...Nf6. The knight returns to f6 and adds a second attacker on e4.',
          arrows: [['f6', 'e4', 'red'], ['f5', 'e4', 'red']]
        },
        23: {
          title: 'e4 holds',
          text: '12.f3. The pawn guards e4, and White\'s kingside becomes a solid wall.',
          arrows: [['f3', 'e4', 'green']]
        },
        24: {
          title: 'Black gains space',
          text: '12...f4. Black grabs space on the kingside. Next come ...g5 and ...g4.',
          arrows: [['g6', 'g4', 'blue']]
        },
        25: {
          title: 'The lever, a move early',
          text: '13.c5. The d3-knight backs up the pawn. White threatens cxd6 to open the c-file.',
          arrows: [['c5', 'd6', 'red'], ['d3', 'c5', 'green']]
        },
        26: {
          title: 'Black races on',
          text: '13...g5. Black doesn\'t defend. The g-pawn heads for g4, where it will hit White\'s king position.',
          arrows: [['g5', 'g4', 'red']]
        },
        27: {
          title: 'Rook first again',
          text: '14.Rc1. The same order as before: the rook takes its place before the file opens.',
          arrows: [['c1', 'c7', 'blue']]
        },
        28: {
          title: 'Another attacker',
          text: '14...Ng6. The knight joins the kingside attack.',
          arrows: [['g6', 'h4', 'blue']]
        },
        29: {
          title: 'Opening the file',
          text: '15.cxd6. White takes. Black has to recapture with the c-pawn: taking with the queen would let a white knight jump to b5 with tempo.',
          marks: ['d6']
        },
        30: {
          title: 'The c-file is open',
          text: "15...cxd6. The c-file is open from c1 to c7, and no black pawn can ever guard d6 again. White's next idea is a knight on b5, aiming at c7. That is Module 4.3.",
          arrows: [['c1', 'c7', 'blue'], ['c3', 'b5', 'blue']],
          marks: ['c7', 'd6']
        }
      }
    }
  ],
  takeaway:
    'The knight on d3 supports c4–c5. White puts a rook on c1, then takes on d6: the c-file opens and the d6-pawn can only be guarded by pieces.',
  lookAhead: 'Next: the c7-square, where a white knight does the most damage, and the trap 16...a6? 17.Nc7!',
  drills: [
    {
      title: 'Win the fight for c5',
      prompt: "You're White, after 12...g5. Bring the knight to d3, push c4–c5, and put a rook on the c-file.",
      moves: `${MDP_G5} Nd3 Nf6 c5 Ng6 Rc1`,
      start: 24,
      side: 'white',
      hints: [
        'The knight on e1 has one more step to make before c5 is safe.',
        'Nd3 first, then c5, then the rook goes to the file that will open.'
      ],
      success: '13.Nd3, 14.c5 and 15.Rc1. The pawn is supported and the rook is ready for the c-file.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does White bring the knight to d3 before pushing c4–c5?',
      moves: MDP_G5,
      orientation: 'white',
      choices: [
        { text: 'It adds a supporter for c5, so the pawn can stay there', correct: true, why: 'Right. Black guards c5 with the d6-pawn and the d7-knight, so White needs more than the f2-bishop.' },
        { text: 'It defends the e4-pawn', why: 'A knight on d3 does not touch e4 at all. The f3-pawn guards e4. The knight is there for c5.' },
        { text: 'It attacks Black\'s king', why: "The knight is aimed at the queenside. From d3 it supports c5 and eyes f4, not Black's king." }
      ]
    },
    {
      type: 'move',
      prompt: "White to move. The pawn is on c5 and Black has just played 14...Ng6. What is White's most useful move?",
      moves: `${MDP_G5} Nd3 Nf6 c5 Ng6`,
      orientation: 'white',
      choices: [
        { text: '15.Rc1', correct: true, why: 'The rook takes the c-file before it opens. Then cxd6 can come at the best moment.' },
        { text: '15.cxd6', why: 'Playable, but too early. The engine prefers putting the rook on c1 first and keeping cxd6 in reserve.' },
        { text: '15.g4', why: 'This weakens White\'s king. Black takes en passant with 15...fxg3 and opens lines on the kingside, and Black is a bit better.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After cxd6 cxd6, why is the d6-pawn weaker than before?',
      moves: OLD,
      orientation: 'white',
      choices: [
        { text: 'No black pawn can guard it any more', correct: true, why: 'Right. The c-pawn is gone and the e-pawn is ahead on e5. Only pieces can defend d6 now.' },
        { text: 'It is pinned to Black\'s king', why: 'Nothing pins it. The problem is that no pawn can support it.' },
        { text: 'It now stands on a light square', why: 'd6 is a dark square, and the color is not the problem anyway. The problem is that no pawn can support it.' }
      ]
    },
    {
      type: 'order',
      prompt: "Which order matches White's plan in this module?",
      choices: [
        { text: 'Nd3, c5, Rc1, cxd6', correct: true, why: 'Support c5, push, place the rook, then open the file.' },
        { text: 'c5, cxd6, Nd3, Rc1', why: 'Pushing c5 without the knight lets Black take it, and the rook arrives after the file is already open.' },
        { text: 'Rc1, cxd6, c5, Nd3', why: 'cxd6 is only possible once the pawn is on c5. The pawn has to get there first.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: "White has just played 15.cxd6. What is Black's best reply?",
      moves: OLD.split(' ').slice(0, -1).join(' '),
      orientation: 'white',
      choices: [
        { text: '15...cxd6', correct: true, why: 'Right. The c-file opens, but Black keeps a pawn on d6 and nothing is lost.' },
        { text: '15...Qxd6', why: '16.Nb5 hits the queen with tempo, and the knight is one jump from c7. The engine says White is much better.' },
        { text: '15...h5, ignoring the pawn', why: 'Then 16.dxc7 takes a second pawn and attacks the queen at the same time.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the 10.Nd3 line, why does White play 11.Bd2 instead of 11.Be3?',
      moves: `${MAIN} Ne1 Nd7 Nd3 f5`,
      orientation: 'white',
      choices: [
        { text: 'On e3 the bishop would be kicked by ...f4, gaining Black time', correct: true, why: 'Right. On d2 it is out of reach of Black\'s pawns.' },
        { text: 'On d2 the bishop supports c4–c5', why: 'From d2 the bishop does not reach c5 at all. The point is avoiding ...f4 with tempo.' },
        { text: 'It prepares Bh6 to trade the g7-bishop', why: 'That is a Sämisch idea (Chapter 6). Here the point is to keep the bishop away from ...f4.' }
      ]
    }
  ],
  key: { name: 'Mar del Plata 10.Nd3: the c-file opens (15.cxd6 cxd6)', moves: OLD, orientation: 'white' },
  terms: [
    { term: 'Open file', meaning: 'A file with no pawns on it. Rooks are strongest on open files.' },
    { term: 'Backward pawn', meaning: 'A pawn whose neighbors have moved ahead or disappeared, so no pawn can protect it. After cxd6 cxd6, Black\'s d6-pawn is one.' },
    { term: 'Tempo', meaning: 'One move of time. Gaining a tempo means making a useful move that also forces the opponent to react.' }
  ]
})
