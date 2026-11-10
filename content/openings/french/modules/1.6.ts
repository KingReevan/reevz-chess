import { defineModule } from '../../../types'
import { FRENCH, ADVANCE_QB6, TARRASCH_CLOSED } from '../lines'

/** tar-closed-f6: 8...f6 9.exf6 Nxf6 10.Nf3 Bd6 11.O-O Qc7 12.Nc3 a6 */
const TAR_F6 = `${TARRASCH_CLOSED} f6 exf6 Nxf6 Nf3 Bd6 O-O Qc7 Nc3 a6`
/** adv-4dxc5: 3.e5 c5 4.dxc5 Nc6 5.Nf3 Bxc5 6.Bd3 f6 7.Qe2 fxe5 8.Nxe5 Nf6 */
const DXC5 = `${FRENCH} e5 c5 dxc5 Nc6 Nf3 Bxc5 Bd3 f6 Qe2 fxe5 Nxe5 Nf6`
/** adv-mb-decline-bd7: 6.Bd3 Bd7 7.dxc5 Bxc5 8.O-O f6 9.b4 Be7 10.Bf4 */
const HOLD_E5 = `${ADVANCE_QB6} Bd3 Bd7 dxc5 Bxc5 O-O f6 b4 Be7 Bf4`

export default defineModule({
  id: '1.6',
  title: 'The second break: ...f6 against the head',
  minutes: 11,
  level: 1,
  goals: [
    "See how ...f6 attacks e5, the head of White's chain",
    "Know what Black gains after exf6 Nxf6, and what it costs",
    'Learn how White answers: hold e5 with pieces'
  ],
  intro:
    "...c5 attacks the base of White's chain. Black has a second break: ...f6, which hits the head, e5. When it works, Black's pieces come alive. When it doesn't, Black is left with a weak pawn on e6. This module shows both sides of the coin.",
  sections: [
    {
      kind: 'walkthrough',
      title: '...f6 in the closed Tarrasch',
      intro: 'After 3.Nd2 Nf6 4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6 7.Ne2 cxd4 8.cxd4, Black has already traded on d4. Now it is time for the second break.',
      moves: TAR_F6,
      start: 15,
      orientation: 'black',
      steps: {
        15: {
          title: 'The chain after ...cxd4',
          text: "8.cxd4. White's chain d4–e5 still stands. Black's knights on c6 and d7 both eye e5.",
          arrows: [['c6', 'e5', 'red'], ['d7', 'e5', 'red']],
          marks: ['d4', 'e5']
        },
        16: {
          title: 'Hit the head',
          text: '8...f6. The f-pawn attacks e5. Count: three attackers (the f6-pawn and both knights) against one defender, the d4-pawn. White cannot hold e5.',
          arrows: [['f6', 'e5', 'red'], ['c6', 'e5', 'red'], ['d7', 'e5', 'red']],
          ann: '!'
        },
        17: {
          title: 'White trades',
          text: '9.exf6. White takes on f6 rather than lose the e5-pawn. The head of the chain is gone.',
          marks: ['f6']
        },
        18: {
          title: 'The knight comes back',
          text: "9...Nxf6. The knight returns to its best square. Black's f-pawn has gone, so the f-file is half-open for Black's rook: only White's f2-pawn stands on it.",
          marks: ['f2']
        },
        19: {
          title: 'Watching e5',
          text: '10.Nf3. The d2-knight goes to f3, where it guards d4 and the e5-square.',
          arrows: [['f3', 'e5', 'green'], ['f3', 'd4', 'green']]
        },
        20: {
          title: 'The bishop develops',
          text: '10...Bd6. The bishop also watches e5, and it looks down the diagonal toward h2, next to the square where White\'s king will castle.',
          arrows: [['d6', 'h2', 'blue']]
        },
        21: {
          title: 'White castles',
          text: "11.O-O. White's king is safe. White's plan is to control e5 and press on the e6-pawn.",
          marks: ['e5', 'e6']
        },
        22: {
          title: 'The queen steps up',
          text: '11...Qc7. The queen lines up behind the bishop on the diagonal toward h2. Black is ready to castle.',
          arrows: [['c7', 'h2', 'blue']]
        },
        23: {
          title: 'The last knight develops',
          text: '12.Nc3. The e2-knight goes to c3. From there it could jump to b5 and hit the queen and the bishop.',
          arrows: [['c3', 'b5', 'blue']]
        },
        24: {
          title: 'Free pieces, one weak pawn',
          text: "12...a6. Black takes b5 away. Black's pieces are free and active, but the e6-pawn has no pawn left to protect it, and e5 is a fine square for White. The engine prefers White slightly.",
          marks: ['e6', 'e5']
        }
      }
    },
    {
      kind: 'text',
      title: 'What ...f6 gives, and what it costs',
      body:
        "**What Black gains.** The head of White's chain disappears, the f6-square is free again for Black's knight, and the f-file becomes half-open for a rook. Later, Black can often push ...e5 to free the c8-bishop.\n\n**What it costs.** Once the f-pawn has gone, no Black pawn can ever protect e6. A pawn like that is called **backward**. The square in front of it, e5, cannot be attacked by a Black pawn either, so White's pieces love to sit there.\n\nThat is the whole fight after ...f6: Black wants active pieces and ...e5; White wants to control e5 and attack e6."
    },
    {
      kind: 'walkthrough',
      title: 'When White gives up the base',
      intro: "In the Advance, White sometimes trades the base away with 4.dxc5. Then e5 stands alone, and ...f6 is even stronger.",
      moves: DXC5,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'No more base',
          text: '4.dxc5. White takes on c5. The d4-pawn is gone, so no pawn defends e5 anymore.',
          marks: ['e5']
        },
        8: {
          title: 'Attack the lonely pawn',
          text: '4...Nc6. The knight develops and attacks e5.',
          arrows: [['c6', 'e5', 'red']]
        },
        9: {
          title: 'A knight defends',
          text: '5.Nf3. The knight guards e5.',
          arrows: [['f3', 'e5', 'green']]
        },
        10: {
          title: 'The pawn comes back',
          text: '5...Bxc5. Black wins back the pawn and develops the bishop to an active square.',
          marks: ['c5']
        },
        11: {
          title: 'White develops',
          text: '6.Bd3. The bishop comes out and prepares castling.',
          arrows: [['f1', 'd3', 'blue']]
        },
        12: {
          title: 'Hit the head',
          text: '6...f6. Now e5 is attacked twice, by the f6-pawn and the c6-knight, and defended once.',
          arrows: [['f6', 'e5', 'red'], ['c6', 'e5', 'red'], ['f3', 'e5', 'green']]
        },
        13: {
          title: 'A second defender',
          text: '7.Qe2. The queen defends e5 along the e-file. Two against two.',
          arrows: [['e2', 'e5', 'green']]
        },
        14: {
          title: 'A pawn takes a pawn',
          text: '7...fxe5. Black takes even though the count is two against two. That is fine here: a pawn takes a pawn, so if White takes back, it is just one pawn for one pawn.',
          marks: ['e5']
        },
        15: {
          title: 'White takes back',
          text: "8.Nxe5. Pawns are even again, but White's e5-pawn, the head of the chain, has gone.",
          marks: ['e5']
        },
        16: {
          title: 'The knight gets f6',
          text: "8...Nf6. Black's king's knight finally reaches f6. Black has a free, comfortable game, and the position is roughly equal.",
          arrows: [['g8', 'f6', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "White's answer: hold e5 with pieces",
      intro: 'In this Advance line White has also given up d4 (6.Bd3 Bd7 7.dxc5 Bxc5 8.O-O). Watch how White keeps e5 anyway.',
      moves: HOLD_E5,
      start: 15,
      orientation: 'white',
      steps: {
        15: {
          title: 'No d-pawn, but e5 stands',
          text: '8.O-O. White has no d-pawn, but the e5-pawn still cramps Black. Only the f3-knight guards it for now.',
          arrows: [['f3', 'e5', 'green']]
        },
        16: {
          title: 'Black hits the head',
          text: '8...f6. Two attackers on e5: the f6-pawn and the c6-knight.',
          arrows: [['f6', 'e5', 'red'], ['c6', 'e5', 'red']]
        },
        17: {
          title: 'Gain a tempo first',
          text: '9.b4. The pawn attacks the c5-bishop and gains a tempo: Black has to deal with the bishop before anything else.',
          arrows: [['b4', 'c5', 'red']]
        },
        18: {
          title: 'The bishop retreats',
          text: '9...Be7. The bishop steps back.',
          arrows: [['c5', 'e7', 'blue']]
        },
        19: {
          title: 'A piece guards e5',
          text: '10.Bf4. Now the bishop and the knight both guard e5. This is Nimzowitsch\'s plan: if the e5-pawn ever falls, a White piece takes its place on e5. White is slightly better.',
          arrows: [['f4', 'e5', 'green'], ['f3', 'e5', 'green']],
          marks: ['e5']
        }
      }
    }
  ],
  takeaway:
    "...f6 attacks e5, the head of White's chain. After exf6 Nxf6, Black's pieces are free and the f-file is half-open, but e6 becomes a backward pawn and e5 a home for White's pieces. White's answer is to hold e5 with pieces.",
  lookAhead:
    "Module 1.7 looks at the French's best-known problem: the c8-bishop, shut in behind the e6-pawn, and five ways to solve it.",
  drills: [
    {
      title: 'Break with ...f6',
      prompt: "You're Black in the closed Tarrasch. The c-pawns have been traded. Hit the head of White's chain, and when White takes, bring your knight back to its best square.",
      moves: `${TARRASCH_CLOSED} f6 exf6 Nxf6`,
      start: 15,
      side: 'black',
      hints: ['Which pawn can attack e5?', '8...f6, and after 9.exf6, the d7-knight takes back on f6.'],
      success: '8...f6 9.exf6 Nxf6. The head is gone and Black\'s pieces are free.'
    },
    {
      title: 'Hold e5 with pieces',
      prompt: "You're White. Black has just hit e5 with 8...f6. First gain time by attacking the c5-bishop, then bring a bishop to guard e5.",
      moves: HOLD_E5,
      start: 16,
      side: 'white',
      hints: ['A queenside pawn can attack the bishop on c5.', '9.b4, and after 9...Be7, the c1-bishop goes to f4.'],
      success: '9.b4 Be7 10.Bf4. The knight and the bishop guard e5. White is slightly better.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Which pawn does ...f6 attack?',
      choices: [
        { text: "e5, the head of White's chain", correct: true, why: 'Right. A pawn on f6 attacks e5 and g5. ...c5 hits the base; ...f6 hits the head.' },
        { text: "d4, the base of White's chain", why: 'The base is the target of ...c5. A pawn on f6 attacks e5 and g5.' },
        { text: 'The f2-pawn', why: 'A pawn only attacks the two squares diagonally in front of it. From f6 that is e5 and g5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9.exf6 Nxf6, which file is half-open for Black?',
      moves: `${TARRASCH_CLOSED} f6 exf6 Nxf6`,
      orientation: 'black',
      choices: [
        { text: 'The f-file', correct: true, why: "Right. Black's f-pawn has gone, but White's f2-pawn is still there. A file with pawns of only one color is half-open." },
        { text: 'The e-file', why: "The e-file has Black's e6-pawn and no White pawn, so it is half-open for White, not for Black." },
        { text: 'The f-file, and it is fully open', why: "White's pawn still stands on f2, so the f-file is half-open, not open." }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the main downside of ...f6 for Black?',
      choices: [
        { text: 'The e6-pawn becomes backward, and e5 becomes a good square for White', correct: true, why: 'Right. Without the f-pawn, no Black pawn can protect e6 or attack a piece on e5.' },
        { text: 'Black can no longer castle on the kingside', why: 'Black can still castle. In the Tarrasch line Black often castles kingside after ...Bd6 and ...Qc7.' },
        { text: 'Black loses a pawn by force', why: 'Nothing is lost: after exf6 Nxf6, the pawns are even.' }
      ]
    },
    {
      type: 'plan',
      prompt: "How does White usually fight against Black's ...f6?",
      moves: HOLD_E5,
      orientation: 'white',
      choices: [
        { text: 'Guard e5 with pieces such as Nf3, Bf4 and Qe2', correct: true, why: 'Right. If the e5-pawn ever goes, a White piece takes its place on e5.' },
        { text: 'Push the e5-pawn to e6', why: 'Black has a pawn on e6, so the e5-pawn cannot move forward.' },
        { text: 'Take on f6 at once every time', why: 'Taking on f6 frees Black\'s knight. White prefers to keep e5 if it can, and to control the square if it cannot.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'How can ...f6 help the c8-bishop later?',
      choices: [
        { text: 'Once the e5-pawn is gone, Black can later push ...e5 and open the c8–h3 diagonal', correct: true, why: "Right. With Black's pawn gone from e6, the bishop's diagonal toward f5, g4 and h3 opens up." },
        { text: 'It opens the a6–c8 diagonal', why: 'That diagonal is opened by ...b6. The f-pawn has nothing to do with it.' },
        { text: 'It does not: the bishop stays blocked for good', why: 'The bishop is blocked by the e6-pawn, and ...f6 is the first step toward pushing that pawn to e5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Here e5 had two attackers and two defenders, yet 7...fxe5 is fine. Why?',
      moves: `${FRENCH} e5 c5 dxc5 Nc6 Nf3 Bxc5 Bd3 f6 Qe2 fxe5`,
      orientation: 'black',
      choices: [
        { text: 'A pawn took a pawn, so after a recapture it is just one pawn for one pawn', correct: true, why: 'Right. Counting matters most when you capture with a piece. Taking a pawn with a pawn risks nothing.' },
        { text: 'e5 really had three attackers', why: 'Only the f6-pawn and the c6-knight attacked e5, and the f3-knight and the queen defended it.' },
        { text: "White's queen was pinned and could not take back", why: "Nothing pinned White's queen. Black simply traded a pawn for a pawn." }
      ]
    }
  ],
  key: { name: 'Closed Tarrasch: 9.exf6 Nxf6 frees Black', moves: `${TARRASCH_CLOSED} f6 exf6 Nxf6`, orientation: 'black' },
  terms: [
    { term: 'Half-open file', meaning: 'A file with pawns of only one color on it. After ...f6 and exf6, the f-file has only White\'s f2-pawn: half-open for Black.' },
    { term: 'Backward pawn', meaning: 'A pawn left behind by its neighbors, so no friendly pawn can protect it. After ...f6 and exf6, e6 is backward: the d-pawn has moved past it to d5 and the f-pawn is gone.' },
    { term: 'Outpost', meaning: 'A square in front of an enemy pawn that no enemy pawn can attack, so a piece placed there is hard to chase away. For White, e5 often becomes one.' }
  ]
})
