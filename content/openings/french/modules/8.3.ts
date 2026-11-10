import { defineModule } from '../../../types'
import { ADVANCE_QB6, TARRASCH_CLOSED } from '../lines'

/** tar-closed-f6: 8...f6 9.exf6 Nxf6 10.Nf3 Bd6 11.O-O Qc7 12.Nc3 a6 */
const TAR_F6 = `${TARRASCH_CLOSED} f6 exf6 Nxf6 Nf3 Bd6 O-O Qc7 Nc3 a6`
/** adv-mb-decline-bd7: 6.Bd3 Bd7 7.dxc5 Bxc5 8.O-O f6 9.b4 Be7 10.Bf4 */
const HOLD = `${ADVANCE_QB6} Bd3 Bd7 dxc5 Bxc5 O-O f6 b4 Be7 Bf4`
/** theme-e5-blockade up to 12.Bxe5: the key position */
const BXE5 = `${HOLD} fxe5 Nxe5 Nxe5 Bxe5`
/** theme-e5-blockade: 12...Nf6 13.Nd2 O-O 14.Nf3 Bd6, plus the engine's 15.Bd4 (engine-checked) */
const BLOCKADE = `${BXE5} Nf6 Nd2 O-O Nf3 Bd6 Bd4`

export default defineModule({
  id: '8.3',
  title: 'The ...f6 break and the e5 strongpoint',
  minutes: 11,
  level: 3,
  goals: [
    'Count who controls e5 after the ...f6 break',
    "As White, replace the e5-pawn with pieces: Nimzowitsch's plan",
    'As Black, keep e5 covered and aim for the freeing ...e6–e5'
  ],
  intro:
    "Module 1.6 introduced ...f6, the break against the head of White's chain. Once the e5-pawn is gone, the whole game turns on one square: e5 itself. If Black's pieces control it, Black is free. If White can plant a piece there, Black's e6-pawn is stuck and weak. This module shows both outcomes.",
  sections: [
    {
      kind: 'walkthrough',
      title: "Black's good version: e5 stays covered",
      intro: 'The closed Tarrasch from Module 4.6, just after 8...f6 9.exf6. Count the pieces on e5 at every move.',
      moves: TAR_F6,
      start: 17,
      orientation: 'black',
      steps: {
        17: {
          title: 'The head is gone',
          text: "9.exf6. White trades the e5-pawn. Now the e5-square is empty, and both sides want it.",
          marks: ['e5']
        },
        18: {
          title: 'Freedom and a weakness',
          text: '9...Nxf6. The knight is back on its best square. But no Black pawn can ever defend e6 again: the d-pawn is ahead of it on d5, and the f-pawn is gone.',
          marks: ['e6', 'e5']
        },
        19: {
          title: 'White eyes e5',
          text: '10.Nf3. The knight guards d4 and points at e5. With the d4-pawn, White now has two units on e5.',
          arrows: [['f3', 'e5', 'red'], ['d4', 'e5', 'red']]
        },
        20: {
          title: 'Black covers e5',
          text: '10...Bd6. The bishop guards e5 too. With the c6-knight, Black also has two units there.',
          arrows: [['d6', 'e5', 'green'], ['c6', 'e5', 'green']]
        },
        21: {
          title: 'White castles',
          text: '11.O-O. White\'s king is safe.',
          arrows: [['e1', 'g1', 'green']]
        },
        22: {
          title: 'Queen behind bishop',
          text: '11...Qc7. The queen lines up behind the bishop on the diagonal that runs through e5 to h2. Castling first was also good.',
          arrows: [['c7', 'h2', 'blue']]
        },
        23: {
          title: 'The e2-knight moves on',
          text: '12.Nc3. The knight hits d5 and eyes b5.',
          arrows: [['c3', 'd5', 'red'], ['c3', 'b5', 'blue']]
        },
        24: {
          title: 'Neither side owns e5',
          text: '12...a6. Black takes b5 away. e5 is guarded twice by each side, so no White piece can settle there for free. Black dreams of ...e6–e5, which would get rid of the weak pawn. White is slightly better.',
          arrows: [['e6', 'e5', 'blue']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "White's good version: a piece on e5",
      intro: 'An Advance line from Module 1.6. White has given up the d4-pawn (7.dxc5) but guards e5 with the f4-bishop and the f3-knight. Watch what happens when Black takes on e5.',
      moves: BLOCKADE,
      start: 19,
      orientation: 'white',
      steps: {
        19: {
          title: 'Two pieces on e5',
          text: '10.Bf4. The bishop and the knight both guard e5. This is the set-up from Module 1.6.',
          arrows: [['f4', 'e5', 'green'], ['f3', 'e5', 'green']]
        },
        20: {
          title: 'Black takes',
          text: "10...fxe5. Black removes the head of the chain. Now White must decide how to take back.",
          marks: ['e5']
        },
        21: {
          title: 'A piece takes back',
          text: '11.Nxe5. The knight recaptures. White wants pieces on e5, not a pawn.',
          arrows: [['e5', 'c6', 'red'], ['e5', 'd7', 'red']]
        },
        22: {
          title: 'Trade the knight',
          text: '11...Nxe5. Black trades the strong knight. Other moves are much worse: after 11...Nf6? 12.Nxd7 Kxd7, Black\'s king is stuck in the center.',
          marks: ['e5']
        },
        23: {
          title: 'Another piece arrives',
          text: '12.Bxe5. Now the bishop stands on e5. No Black pawn can ever attack it: the d-pawn is past it and the f-pawn is gone. A square like this is called an outpost.',
          marks: ['e5', 'e6']
        },
        24: {
          title: 'The knight comes out',
          text: '12...Nf6. The g8-knight develops at last. Later it can jump to g4 to hit the bishop.',
          arrows: [['f6', 'g4', 'blue']]
        },
        25: {
          title: 'Bring the reserve',
          text: '13.Nd2. The b1-knight heads for f3, where it will guard e5.',
          arrows: [['d2', 'f3', 'blue']]
        },
        26: {
          title: 'Black castles',
          text: '13...O-O. Black\'s king is safe. The f8-rook stands on the half-open f-file, behind the f6-knight.',
          arrows: [['e8', 'g8', 'green']]
        },
        27: {
          title: 'The knight guards e5',
          text: '14.Nf3. Now the knight backs up the bishop on e5. 14.Re1 first was stronger.',
          arrows: [['f3', 'e5', 'green']]
        },
        28: {
          title: 'A challenge',
          text: '14...Bd6. Black offers to trade the e5-bishop. 14...a5, hitting the b4-pawn, was better.',
          arrows: [['d6', 'e5', 'red']]
        },
        29: {
          title: 'Keep the pieces',
          text: "15.Bd4. White doesn't trade. The bishop steps to d4, right in front of Black's d5-pawn, and the f3-knight is ready to jump to e5. Black's e6-pawn is backward and has to be defended by pieces. White is clearly better.",
          arrows: [['f3', 'e5', 'blue']],
          marks: ['d4', 'e5', 'e6']
        }
      }
    },
    {
      kind: 'text',
      title: 'One square decides',
      body:
        "After ...f6 and the trade on e5, ask one question: **who controls e5?**\n\n**For Black:** keep at least as many pieces on e5 as White has, usually the d6-bishop and the c6-knight. Then White can't plant a piece there, and Black can work toward ...e6–e5. That push gets rid of the backward e6-pawn and opens the diagonal of Black's light-squared bishop.\n\n**For White:** if the e5-pawn falls, replace it with a piece. A knight or bishop on e5 can't be chased by a pawn, it blocks the e6-pawn, and it eyes Black's kingside. This was Aron Nimzowitsch's plan: hold e5 with pieces and treat the e6-pawn as a target. When Black challenges the piece on e5, White often keeps it alive by stepping aside, as with 15.Bd4 above, rather than trading it."
    },
    {
      kind: 'tip',
      title: 'Take back with a piece',
      body:
        "When Black plays ...fxe5 and White can recapture with a pawn or a piece, think about e5. A pawn recapture (dxe5) keeps a pawn on e5 but gives up d4. A piece recapture keeps d4 and turns e5 into an outpost. In the Advance line above, White had no d-pawn left, so the pieces did the job."
    }
  ],
  takeaway:
    "After the ...f6 break, the fight is about e5. Black keeps it covered with pieces and aims for ...e6–e5; White replaces the e5-pawn with pieces, uses e5 as an outpost and plays against the backward e6-pawn.",
  lookAhead:
    "The same idea works one file over. Module 8.4 shows the blockade on d4: a piece in front of Black's d5-pawn.",
  drills: [
    {
      title: 'Pieces to e5',
      prompt: "You're White. Black has just taken on e5 with 10...fxe5. Take back with a piece, trade into an outpost, and bring your last knight toward f3.",
      moves: `${BXE5} Nf6 Nd2`,
      start: 20,
      side: 'white',
      hints: [
        'Recapture with the knight, and after 11...Nxe5 with the bishop.',
        'The b1-knight goes to d2 first, on its way to f3.'
      ],
      success: '11.Nxe5 Nxe5 12.Bxe5 Nf6 13.Nd2. The bishop sits on an outpost, and the knight is coming to support it.'
    },
    {
      title: 'Cover e5',
      prompt: "You're Black in the closed Tarrasch. White has just traded with 9.exf6. Take back, and build up your control of e5 with your bishop and queen. Then stop Nb5.",
      moves: TAR_F6,
      start: 17,
      side: 'black',
      hints: [
        'Take back with the knight, then put the f8-bishop on the square that watches e5.',
        'The queen goes behind the bishop on c7. After 12.Nc3, the a-pawn takes b5 away.'
      ],
      success: '9...Nxf6, 10...Bd6, 11...Qc7 and 12...a6. Black covers e5 twice, and White is only slightly better.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why is e5 such a good square for White\'s bishop here?',
      moves: BXE5,
      orientation: 'white',
      choices: [
        { text: 'No Black pawn can ever attack it', correct: true, why: "Right. Black's d-pawn has passed e5 and the f-pawn is gone. Only pieces can challenge the bishop." },
        { text: 'It attacks Black\'s king directly', why: 'The bishop on e5 eyes g7 and the kingside, but it gives no check. Its strength is that no pawn can chase it.' },
        { text: 'It defends the d4-pawn', why: 'White has no d-pawn here: it was traded on move 7. The point is the outpost on e5.' }
      ]
    },
    {
      type: 'move',
      prompt: "White to move. Black has just played 10...fxe5. How should White take back?",
      moves: `${HOLD} fxe5`,
      orientation: 'white',
      choices: [
        { text: '11.Nxe5', correct: true, why: 'Right. A piece goes to e5. After 11...Nxe5 12.Bxe5 White has a fine outpost.' },
        { text: '11.Bg3', why: 'The bishop retreats, but 11...e4! attacks the d3-bishop and the f3-knight at the same time, and Black wins a piece.' },
        { text: '11.b5', why: 'It attacks the c6-knight, but 11...exf4 takes the bishop first. After 12.bxc6 bxc6 Black is two pawns up.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the ...f6 structure, which pawn move is Black\'s dream?',
      moves: TAR_F6,
      orientation: 'black',
      choices: [
        { text: '...e6–e5', correct: true, why: "Right. It removes the backward e6-pawn and opens the diagonal for Black's light-squared bishop. Black needs enough control of e5 first." },
        { text: '...g7–g5', why: "It weakens Black's own king and does nothing for e5 or e6." },
        { text: '...b7–b5', why: 'A queenside move that does not touch the central problem. The weakness is on e6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 12...a6 in the closed Tarrasch, how many times does each side control e5?',
      moves: TAR_F6,
      orientation: 'black',
      choices: [
        { text: 'Twice each', correct: true, why: "Right. White has the d4-pawn and the f3-knight; Black has the d6-bishop and the c6-knight. Neither side owns e5." },
        { text: 'White three times, Black twice', why: "Count again: only the d4-pawn and the f3-knight cover e5 for White. The c3-knight and d3-bishop don't." },
        { text: 'Black three times, White once', why: "The f6-knight does not reach e5. Black has two units there (bishop and c6-knight), and so does White." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: "What was Nimzowitsch's plan when Black hits White's e5-pawn with ...f6?",
      choices: [
        { text: 'Hold e5 with pieces, and if the pawn falls, put a piece there', correct: true, why: 'Right. A piece on e5 blocks the e6-pawn and cannot be chased by a pawn.' },
        { text: 'Push e5–e6 at once', why: 'That would just lose the pawn. The plan is to keep e5 under control with pieces.' },
        { text: 'Trade every piece and head for an endgame', why: 'Trades are not the point. The point is a strong piece on e5 and pressure on e6.' }
      ]
    },
    {
      type: 'plan',
      prompt: "White to move. Black's bishop on d6 challenges the e5-bishop. What is White's strongest idea?",
      moves: `${BLOCKADE.split(' ').slice(0, -1).join(' ')}`,
      orientation: 'white',
      choices: [
        { text: '15.Bd4: keep the bishop and bring the knight to e5', correct: true, why: 'Right. The bishop blocks the d5-pawn from d4, the knight takes over e5, and White is clearly better.' },
        { text: '15.Bxd6, trading at once', why: 'Trading removes White\'s best piece and Black\'s best defender at the same time. Keeping the pieces is stronger.' },
        { text: '15.Bxf6, damaging Black\'s pawns', why: "After 15...Rxf6 Black's rook is active on the half-open f-file, and White has given up the strong bishop for nothing." }
      ]
    }
  ],
  key: { name: 'Advance: 12.Bxe5, a piece replaces the e5-pawn', moves: BXE5, orientation: 'white' },
  terms: [
    { term: 'Outpost', meaning: 'A square in or near the enemy camp that no enemy pawn can attack. A knight or bishop there is hard to remove.' },
    { term: 'Strongpoint', meaning: 'A key square held by pieces and pawns, like e5 for White in the French.' },
    { term: 'Backward pawn', meaning: 'A pawn that no friendly pawn can defend, with the square in front of it controlled by the enemy.' }
  ]
})
