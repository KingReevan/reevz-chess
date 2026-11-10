import { defineModule } from '../../../types'
import { FRENCH, TARRASCH_IQP } from '../lines'

/** tar-iqp-blockade up to 10.Nbd4: 7.dxc5 Bxc5 8.O-O Ne7 9.Nb3 Bd6 10.Nbd4 (the key position) */
const NBD4 = `${TARRASCH_IQP} dxc5 Bxc5 O-O Ne7 Nb3 Bd6 Nbd4`
/** 10...O-O, then the engine's line 11.Re1 Bg4 12.Be2 Re8 13.h3 Nxd4 14.Nxd4 Bxe2 15.Rxe2 (engine-checked) */
const TRADES = `${NBD4} O-O Re1 Bg4 Be2 Re8 h3 Nxd4 Nxd4 Bxe2 Rxe2`
/** the same line up to 13.h3: Black to move */
const H3 = `${NBD4} O-O Re1 Bg4 Be2 Re8 h3`
/** adv-4nf3: 3.e5 c5 4.Nf3 cxd4 5.Bd3 Nc6 6.O-O Nge7 7.Bf4 Ng6 */
const NF3 = `${FRENCH} e5 c5 Nf3 cxd4 Bd3 Nc6 O-O Nge7 Bf4 Ng6`

export default defineModule({
  id: '8.4',
  title: 'The blockade on d4',
  minutes: 11,
  level: 3,
  goals: [
    'Know what a blockade is, and why a knight is the best blockader',
    'Keep a piece on d4 even when Black trades the first one',
    "See Nimzowitsch's idea: give up the d4-pawn, use the d4-square"
  ],
  intro:
    "Aron Nimzowitsch taught that an enemy pawn should be stopped by a piece standing right in front of it: a blockade. In the French, the square in front of Black's d5-pawn is d4. Whenever White's d-pawn disappears, d4 becomes a home for a White piece. This module shows why that piece is so strong, and how Black fights it.",
  sections: [
    {
      kind: 'text',
      title: 'What a blockade does',
      body:
        "A **blockade** is a piece placed directly in front of an enemy pawn. It does three things:\n\n**1. The pawn can't move.** A pawn only moves straight ahead, so a piece in front of it stops it dead.\n\n**2. The blockader is safe from that pawn.** A pawn captures diagonally, never straight ahead. Only the pawns on the files next to it could ever attack the blockader.\n\n**3. A knight blockades best.** From d4 a knight still attacks eight squares, including c6, e6 and f5 in Black's half. A bishop or a queen on d4 is easier to chase away and does less from there.\n\nFor Black's d5-pawn, the blockade square is d4. Black's c- and e-pawns are the only pawns that could chase a piece from d4, from c5 or e5. When Black has neither, the blockade is permanent."
    },
    {
      kind: 'walkthrough',
      title: 'The blockade survives the trades',
      intro: 'The isolated d-pawn from Module 4.3. This time follow the engine past move 10: Black trades the first blockader, and another knight takes its place.',
      moves: TRADES,
      start: 18,
      orientation: 'white',
      steps: {
        18: {
          title: 'The isolated pawn',
          text: "9...Bd6. Black's d5-pawn has no pawn on the c- or e-file next to it. The square in front of it is d4.",
          marks: ['d4', 'd5']
        },
        19: {
          title: 'The blockade',
          text: '10.Nbd4. The knight lands in front of the pawn. No Black pawn can ever attack it, and from d4 it hits c6, e6 and f5.',
          arrows: [['d4', 'c6', 'red'], ['d4', 'f5', 'blue']],
          marks: ['d4']
        },
        20: {
          title: 'Black castles',
          text: "10...O-O. Black's king is safe. Black's pieces are active: that is the isolated pawn's reward.",
          arrows: [['e8', 'g8', 'green']]
        },
        21: {
          title: 'The open e-file',
          text: '11.Re1. The rook takes the open e-file and eyes the e7-knight.',
          arrows: [['e1', 'e7', 'red']]
        },
        22: {
          title: 'A pin',
          text: '11...Bg4. The bishop pins the f3-knight to the queen on d1. That knight is one of the two guards of d4.',
          arrows: [['g4', 'd1', 'red']],
          marks: ['f3']
        },
        23: {
          title: 'Break the pin',
          text: '12.Be2. The bishop steps back from b5 and stands between the f3-knight and the queen, so the pin is gone.',
          marks: ['e2']
        },
        24: {
          title: 'Rooks face each other',
          text: '12...Re8. Black puts a rook on the e-file too, behind the e7-knight.',
          arrows: [['f8', 'e8', 'green']]
        },
        25: {
          title: 'Ask the bishop',
          text: '13.h3. White asks the g4-bishop to decide.',
          arrows: [['h3', 'g4', 'red']]
        },
        26: {
          title: 'Remove the blockader',
          text: '13...Nxd4. Black trades off the knight on d4. Keeping the bishop with 13...Bh5 was about as good.',
          marks: ['d4']
        },
        27: {
          title: 'Another knight',
          text: "14.Nxd4. The f3-knight takes back and becomes the new blockader. 14.Qxd4 would put the queen there instead, where Black's minor pieces could chase it away.",
          marks: ['d4', 'd5']
        },
        28: {
          title: 'More trades',
          text: '14...Bxe2. Black trades bishops.',
          marks: ['e2']
        },
        29: {
          title: 'Still blockaded',
          text: '15.Rxe2. Two pairs of minor pieces are gone. Every trade leaves fewer Black pieces to defend d5, and the knight still sits on d4. The position is about level, with a small plus for White.',
          arrows: [['d4', 'd5', 'yellow']],
          marks: ['d4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "Nimzowitsch's idea: give up the pawn, keep the square",
      intro: "Module 2.9 showed 4.Nf3 in the Advance. Look at it again as a blockade plan: White doesn't mind losing the d4-pawn, because the d4-square is what counts.",
      moves: NF3,
      start: 6,
      orientation: 'white',
      steps: {
        6: {
          title: 'The base is attacked',
          text: '3...c5. Black hits d4, the base of White\'s chain.',
          arrows: [['c5', 'd4', 'red']]
        },
        7: {
          title: 'No c3',
          text: '4.Nf3. White does not support d4 with a pawn. The knight guards e5 and looks at d4.',
          arrows: [['f3', 'e5', 'green'], ['f3', 'd4', 'blue']]
        },
        8: {
          title: 'The pawn goes',
          text: "4...cxd4. White's d-pawn is gone. A Black pawn now stands on d4, right in front of Black's own d5-pawn.",
          marks: ['d4']
        },
        9: {
          title: 'Develop instead',
          text: '5.Bd3. White develops rather than recapturing at once. The plan is to win the d4-pawn back with a piece, which would then stand on d4 as a blockader.',
          arrows: [['d3', 'h7', 'blue']],
          marks: ['d4']
        },
        10: {
          title: 'Guard the pawn',
          text: '5...Nc6. The knight guards d4 and attacks e5.',
          arrows: [['c6', 'd4', 'green'], ['c6', 'e5', 'red']]
        },
        11: {
          title: 'White castles',
          text: '6.O-O. White is ahead in development and a pawn down.',
          arrows: [['e1', 'g1', 'green']]
        },
        12: {
          title: 'Toward g6',
          text: '6...Nge7. The knight heads for g6 to hit e5 again.',
          arrows: [['e7', 'g6', 'blue']]
        },
        13: {
          title: 'Pieces hold e5',
          text: '7.Bf4. The bishop and the knight guard e5. Pieces do the job the d4-pawn used to do.',
          arrows: [['f4', 'e5', 'green'], ['f3', 'e5', 'green']]
        },
        14: {
          title: 'Easier said than done',
          text: "7...Ng6. Black keeps the extra pawn for now, and the engine slightly prefers Black. Nimzowitsch's idea is sound as a plan, but White still has to win d4 back.",
          arrows: [['g6', 'e5', 'red'], ['g6', 'f4', 'red']],
          marks: ['d4']
        }
      }
    },
    {
      kind: 'text',
      title: 'How Black fights a blockade',
      body:
        "**Trade the blockader.** ...Nxd4 removes the piece in front of the pawn. White wants to take back with another piece, so a knight stays on d4.\n\n**Stay active.** The isolated pawn gives Black open lines. Use them for the pieces, and don't trade without a reason: every trade makes the d5-pawn weaker.\n\n**Push only when it is safe.** ...d5–d4 is impossible while a piece stands on d4. If the blockader leaves or is traded off, check whether the pawn can advance without being lost. A pawn that gets moving stops being a weakness.\n\nIn Module 8.3 you saw the same idea in the Advance: after 15.Bd4, White's bishop stood in front of the d5-pawn and a knight was ready for e5."
    },
    {
      kind: 'history',
      title: 'Nimzowitsch and the blockade',
      body:
        "Aron Nimzowitsch, one of the great French players, made the blockade a central idea of chess strategy. He also believed the Advance, 3.e5, was White's best answer to the French. A famous Advance game in this spirit is his win against Salwe at Karlsbad in 1911. Its moves are not given in this course, because we could not confirm them from a reliable source."
    }
  ],
  takeaway:
    "A piece directly in front of an enemy pawn stops it and can't be attacked by it. Against Black's d5-pawn, d4 is the blockade square, and a knight is the best blockader. If Black trades it, put another piece there. Black answers by trading the blockader, keeping the pieces active, and pushing ...d4 only when it is safe.",
  lookAhead:
    "Next, White's most aggressive pawn lever. Module 8.5 shows f4–f5 against the base of Black's chain, and when it comes too early.",
  drills: [
    {
      title: 'Keep the blockade',
      prompt: "You're White. Black is about to trade your blockading knight on d4. Take back so that a knight stays on d4, and when Black trades bishops on e2, recapture with a rook.",
      moves: TRADES,
      start: 25,
      side: 'white',
      hints: [
        'Which knight can take back on d4?',
        '14.Nxd4, and after 14...Bxe2, the e1-rook takes back.'
      ],
      success: '14.Nxd4 Bxe2 15.Rxe2. Pieces are coming off and a knight still blockades the d5-pawn.'
    },
    {
      title: 'Trade the blockader',
      prompt: "You're Black with the isolated d-pawn. White has just played 13.h3. Remove the knight on d4, and when White takes back with the other knight, trade your light-squared bishop.",
      moves: `${H3} Nxd4 Nxd4 Bxe2`,
      start: 25,
      side: 'black',
      hints: [
        'Your c6-knight can take on d4.',
        '13...Nxd4 14.Nxd4, then the g4-bishop takes on e2.'
      ],
      success: '13...Nxd4 14.Nxd4 Bxe2. The position is about level. White still has a knight on d4, but Black has no weaknesses besides d5.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why is a knight the best piece to blockade a pawn?',
      choices: [
        { text: 'From the blockade square it still attacks many squares, and no pawn in front can drive it away', correct: true, why: 'Right. The blocked pawn can never attack it, and a knight on d4 hits c6, e6, f5 and more.' },
        { text: "Knights can't be captured", why: 'Any piece can be captured. A blockading knight is strong because pawns can rarely attack it and it stays active.' },
        { text: 'A knight protects the pawns behind it', why: "That isn't the point. The knight stops the enemy pawn and still attacks squares in the enemy camp." }
      ]
    },
    {
      type: 'concept',
      prompt: 'In this position, which Black pawn could ever attack the knight on d4?',
      moves: NBD4,
      orientation: 'white',
      choices: [
        { text: 'None: Black has no c-pawn or e-pawn', correct: true, why: 'Right. Only a pawn on c5 or e5 could attack d4, and Black has no pawns on those files. The blockade is permanent.' },
        { text: 'The d5-pawn', why: 'A pawn captures diagonally, never straight ahead. The d5-pawn can never touch d4.' },
        { text: 'The f7-pawn, after ...f5', why: 'A pawn on f5 attacks e4 and g4, not d4. Only c- and e-pawns could reach d4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 13...Nxd4, why does White take back with the knight rather than the queen?',
      moves: `${H3} Nxd4`,
      orientation: 'white',
      choices: [
        { text: "A queen on d4 can be chased away by Black's minor pieces; a knight is a stable blockader", correct: true, why: "Right. After 14.Qxd4, moves like ...Nc6 or ...Nf5 would hit the queen. The knight can stay on d4." },
        { text: 'The queen is pinned to the king', why: "Nothing pins White's queen. The question is which piece makes the better blockader." },
        { text: 'Qxd4 would lose the queen', why: 'Qxd4 loses nothing, but the queen is a poor blockader: minor pieces can chase it.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In 4.Nf3 cxd4 5.Bd3, what does White hope to do about the d4-square?',
      moves: `${FRENCH} e5 c5 Nf3 cxd4 Bd3`,
      orientation: 'white',
      choices: [
        { text: 'Win the d4-pawn back with a piece, which then blockades the d5-pawn', correct: true, why: 'Right. The square matters more than the pawn. Until White wins it back, though, Black is a pawn up.' },
        { text: 'Push the d-pawn to d4 again', why: "White's d-pawn is gone: it was taken on move 4. Only a piece can come to d4 now." },
        { text: "Leave Black's pawn on d4 for good", why: "A Black pawn on d4 cramps White and is an extra pawn for Black. White wants to win it back." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'What is a blockade?',
      choices: [
        { text: 'A piece placed directly in front of an enemy pawn, so the pawn cannot move', correct: true, why: 'Right. The blockader is also safe from that pawn, because pawns capture diagonally.' },
        { text: 'A wall of your own pawns in front of your king', why: 'That is a pawn shield. A blockade stops an enemy pawn with a piece.' },
        { text: 'Any pin against the enemy queen', why: 'A pin is a different idea. A blockade is about stopping a pawn.' }
      ]
    },
    {
      type: 'plan',
      prompt: "You're Black with an isolated d5-pawn, and a White knight sits on d4. Which plan is best?",
      moves: NBD4,
      orientation: 'black',
      choices: [
        { text: 'Keep the pieces active, trade the blockader when you can, and push ...d4 only when it is safe', correct: true, why: "Right. That's how Black keeps the isolated pawn a strength rather than a weakness." },
        { text: 'Push ...d5–d4 at once', why: 'Impossible: the knight stands on d4. A blockaded pawn cannot move.' },
        { text: 'Trade queens as soon as possible', why: 'Endgames favor the side playing against the isolated pawn. Black wants pieces on the board.' }
      ]
    }
  ],
  key: { name: 'Tarrasch IQP: 10.Nbd4, the blockade', moves: NBD4, orientation: 'white' },
  terms: [
    { term: 'Blockade', meaning: 'A piece placed directly in front of an enemy pawn. The pawn cannot move, and it can never attack the blockader.' },
    { term: 'Blockader', meaning: 'The piece that stands in front of the enemy pawn. A knight is usually the best one.' },
    { term: 'Isolated pawn', meaning: 'A pawn with no pawns of its own color on the files next to it. Only pieces can defend it.' }
  ]
})
