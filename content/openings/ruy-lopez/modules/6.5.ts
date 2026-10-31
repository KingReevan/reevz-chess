import { defineModule } from '../../../types'
import { OPEN } from '../../../lines'

/** open-9c3-bc5: 9.c3 Bc5 10.Nbd2 O-O 11.Bc2 */
const BC5 = `${OPEN} c3 Bc5 Nbd2 O-O Bc2`
/** open-11bf5 */
const BF5 = `${BC5} Bf5 Nb3 Bg6 Nfd4 Bxd4 cxd4 a5 Be3 a4`
/** open-11f5 */
const F5 = `${BC5} f5 Nb3 Bb6 Nfd4 Nxd4 Nxd4 Bxd4 cxd4`

export default defineModule({
  id: '6.5',
  title: '9.c3 Bc5: the active bishop',
  minutes: 11,
  level: 3,
  goals: [
    'See what the c5-bishop does, and how Nb3 and Nd4 challenge it',
    'Hold the e4-knight after 11.Bc2 with 11...Bf5 or 11...f5',
    'Know why Black often trades the c5-bishop for the d4-knight'
  ],
  intro:
    "In Module 6.3 you saw White aim two pieces at the e4-knight with 10.Nbd2 and 11.Bc2. With the bishop on c5, Black has two classical ways to hold on: guard e4 with a bishop, or with a pawn. Both lead to the same fight over d4.",
  sections: [
    {
      kind: 'text',
      title: 'Why c5, and what White does about it',
      body:
        "On c5 the bishop aims at **f2**, next to White's king, and at **d4**, the square White wants for a knight. That makes it Black's most active piece.\n\nWhite's answer is a knight route: **Nbd2-b3** attacks the bishop, then a knight lands on **d4**. Meanwhile 11.Bc2 puts a second attacker on e4. Black must deal with both."
    },
    {
      kind: 'walkthrough',
      title: '11...Bf5: a bishop guards e4',
      intro: "You're Black. This is the more common of the two classical answers.",
      moves: BF5,
      start: 21,
      orientation: 'black',
      steps: {
        21: {
          title: 'Two attackers on e4',
          text: '11.Bc2. The bishop and the d2-knight both hit e4, and only the d5-pawn guards it. Black needs a second defender now.',
          arrows: [['c2', 'e4', 'red'], ['d2', 'e4', 'red']],
          marks: ['e4']
        },
        22: {
          title: 'A bishop to the rescue',
          text: '11...Bf5. The bishop guards e4, so the knight now has two defenders. Black\'s pawns stay where they are.',
          arrows: [['f5', 'e4', 'green'], ['d5', 'e4', 'green']],
          ann: '!'
        },
        23: {
          title: 'The c5-bishop is hit',
          text: '12.Nb3. The knight attacks the c5-bishop and gets ready to use d4. The bishop is guarded by the e4-knight, so Black has time.',
          arrows: [['b3', 'c5', 'red'], ['e4', 'c5', 'green']]
        },
        24: {
          title: 'Step out of reach',
          text: '12...Bg6. Why move a bishop nobody attacks? Because Nfd4 would hit it on f5. On g6 it is safe and still guards e4.',
          arrows: [['g6', 'e4', 'green'], ['f3', 'd4', 'blue']]
        },
        25: {
          title: 'The knight lands on d4',
          text: '13.Nfd4. The knight attacks the c6-knight, which has no guard.',
          arrows: [['d4', 'c6', 'red']],
          marks: ['c6']
        },
        26: {
          title: 'Remove the knight',
          text: '13...Bxd4. Black gives up the active bishop to remove White\'s best piece. The c6-knight is safe again.',
          arrows: [['c5', 'd4', 'green']]
        },
        27: {
          title: 'Pawn takes back',
          text: '14.cxd4. White now has pawns on d4 and e5, and the two bishops. The b3-knight has lost its d4-square.',
          marks: ['d4', 'e5']
        },
        28: {
          title: 'Queenside space',
          text: '14...a5. Black\'s pawns start to march. Next, ...a4 will hit the b3-knight.',
          arrows: [['a5', 'a4', 'blue']]
        },
        29: {
          title: 'White develops',
          text: '15.Be3. The last minor piece comes out and adds a guard to d4.',
          arrows: [['e3', 'd4', 'green']]
        },
        30: {
          title: 'The knight is kicked',
          text: '15...a4. The b3-knight must step back. Black has gained space on the queenside, and the position is roughly balanced.',
          arrows: [['a4', 'b3', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '11...f5: a pawn guards e4',
      intro: "The older answer. Same problem, different solution. Watch the e6-bishop.",
      moves: F5,
      start: 21,
      orientation: 'black',
      steps: {
        21: {
          title: 'Same question',
          text: '11.Bc2. Again, e4 is attacked twice and guarded once.',
          arrows: [['c2', 'e4', 'red'], ['d2', 'e4', 'red']],
          marks: ['e4']
        },
        22: {
          title: 'A pawn to the rescue',
          text: '11...f5. Now two pawns guard the knight. The cost: this pawn can never go back, and the e6-bishop has lost the f7-pawn that guarded it. White could take en passant with 12.exf6, but that gives up the e5-wedge.',
          arrows: [['f5', 'e4', 'green'], ['d5', 'e4', 'green']],
          marks: ['e6']
        },
        23: {
          title: 'The c5-bishop is hit',
          text: '12.Nb3. The same knight move as before: attack c5, prepare d4.',
          arrows: [['b3', 'c5', 'red']]
        },
        24: {
          title: 'Keep the diagonal',
          text: '12...Bb6. The bishop steps back but still aims at f2 and d4.',
          arrows: [['b6', 'f2', 'yellow']]
        },
        25: {
          title: 'A double attack',
          text: '13.Nfd4. The knight hits c6 and e6, and neither has a defender. Black must act at once.',
          arrows: [['d4', 'c6', 'red'], ['d4', 'e6', 'red']],
          marks: ['c6', 'e6']
        },
        26: {
          title: 'Trade it off',
          text: '13...Nxd4. Black removes the attacker.',
          arrows: [['c6', 'd4', 'green']]
        },
        27: {
          title: 'The other knight arrives',
          text: '14.Nxd4. The b3-knight takes back and lands on d4 itself, again hitting e6.',
          arrows: [['d4', 'e6', 'red']]
        },
        28: {
          title: 'Bishop for knight',
          text: '14...Bxd4. As in the 11...Bf5 line, Black trades the dark-squared bishop for White\'s d4-knight.',
          arrows: [['b6', 'd4', 'green']]
        },
        29: {
          title: 'A knight on a great square',
          text: '15.cxd4. The e4-knight is superb: only an f2-f3 push can ever chase it. White has the two bishops and will try exactly that.',
          arrows: [['f2', 'f3', 'blue']],
          marks: ['e4']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Count, then choose',
      body:
        "Both moves give e4 a second guard. 11...Bf5 does it with a piece and keeps the pawns flexible. 11...f5 does it with a pawn, which is very solid on e4 but leaves the e6-bishop and the king a bit looser. There is also a third, wild answer, 11...Nxf2!?, the Dilworth. That is the next module."
    },
    {
      kind: 'history',
      title: 'A classic from 1945',
      body:
        'The 11...f5 line was seen in Smyslov–Reshevsky, from the famous USSR–USA radio match of 1945. Some books call the recapture 15.cxd4 the La Grande Variation; 15.Qxd4 is another way to take back.'
    }
  ],
  takeaway:
    "With the bishop on c5, Black answers 11.Bc2 by adding a second guard to e4: 11...Bf5 (then ...Bg6) or 11...f5. White's knights head for d4 via b3, and Black usually trades the c5-bishop for the d4-knight.",
  lookAhead:
    "Next: the Dilworth, 11...Nxf2!?, where Black gives up two pieces for a rook, a pawn and an attack.",
  drills: [
    {
      title: 'Hold e4 with the bishop',
      prompt: "You're Black after 11.Bc2. Guard the knight with a bishop, then handle White's knights.",
      moves: `${BC5} Bf5 Nb3 Bg6 Nfd4 Bxd4`,
      start: 21,
      side: 'black',
      hints: ['Which bishop can guard e4 from the side?', 'After 12.Nb3, put your bishop where a knight on d4 cannot reach it but where it still guards e4.'],
      success: '11...Bf5, 12...Bg6 and 13...Bxd4. The knight on e4 stays strong and White\'s d4-knight is gone.'
    },
    {
      title: "White's knight route",
      prompt: "You're White. Black has played 11...f5. Bring your knights toward d4.",
      moves: `${BC5} f5 Nb3 Bb6 Nfd4`,
      start: 22,
      side: 'white',
      hints: ['First attack the c5-bishop.', 'Then jump into d4, where a knight hits c6 and e6.'],
      success: '12.Nb3 and 13.Nfd4. The knight hits two undefended pieces at once.'
    }
  ],
  quiz: [
    {
      type: 'plan',
      prompt: 'Black to move after 11.Bc2. How does 11...Bf5 help?',
      moves: BC5,
      orientation: 'black',
      choices: [
        { text: 'It adds a second guard to the e4-knight', correct: true, why: 'Right. Two attackers (c2, d2) against two defenders (d5, f5).' },
        { text: 'It attacks the c2-bishop', why: 'The e4-knight stands between them. The point is to guard e4.' },
        { text: 'It prepares ...Bxh3', why: "There's no pawn on h3 here. The bishop is there to guard e4." }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 11...Bf5 line, why does Black answer 12.Nb3 with 12...Bg6?',
      moves: `${BC5} Bf5 Nb3`,
      orientation: 'black',
      choices: [
        { text: 'On f5 the bishop would be hit by Nfd4. On g6 it is safe and still guards e4', correct: true, why: 'Exactly. Black moves first, before White gains time.' },
        { text: 'To save it from the b3-knight', why: 'The b3-knight attacks c5, not f5. The move is about the coming Nfd4.' },
        { text: 'To attack the c2-bishop', why: 'The e4-knight still blocks that diagonal. The bishop keeps guarding e4 from g6.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move after 11...f5 12.Nb3 Bb6. What is the main move?',
      moves: `${BC5} f5 Nb3 Bb6`,
      orientation: 'white',
      choices: [
        { text: '13.Nfd4', correct: true, why: 'The knight lands on d4 and attacks c6 and e6, both undefended.' },
        { text: '13.Nh4', why: 'The knight eyes f5, but that pawn is guarded by the e6-bishop. On the edge, the knight does little.' },
        { text: '13.Ne1', why: 'A passive retreat. White wants a knight on d4, not on the back rank.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does Black often play ...Bxd4 in these lines?',
      choices: [
        { text: "To remove White's strong d4-knight, even at the cost of the active bishop", correct: true, why: 'Yes. The knight on d4 hits c6 and e6. Trading it off lets Black keep the e4-knight strong.' },
        { text: 'To win a pawn', why: 'After cxd4 or Nxd4, no material is won. It is a trade of bishop for knight.' },
        { text: "To open the a7-g1 diagonal toward White's king", why: 'The bishop disappears in the trade, so it no longer uses that diagonal.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'How has Black chosen to hold the e4-knight here?',
      moves: `${BC5} f5`,
      orientation: 'black',
      choices: [
        { text: 'With a pawn: 11...f5', correct: true, why: 'Right. The f-pawn joins the d-pawn in guarding e4.' },
        { text: 'With a bishop: 11...Bf5', why: 'In that line the light-squared bishop goes to f5. Here it is the pawn.' },
        { text: 'The Dilworth: 11...Nxf2', why: 'The Dilworth gives up the knight on f2. Here the knight stays on e4.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the 11...Bf5 line, what does 15...a4 achieve?',
      moves: BF5,
      orientation: 'black',
      choices: [
        { text: 'It kicks the b3-knight and gains queenside space', correct: true, why: 'Yes. The knight must step back, and Black\'s pawns control more of the queenside.' },
        { text: 'It wins the b3-knight', why: 'The knight can retreat, for example to d2 or c1. It is chased, not trapped.' },
        { text: 'It opens the a-file for Black\'s queen', why: 'The a-file is still closed by Black\'s own pawn. The point is to chase the knight.' }
      ]
    }
  ],
  key: { name: 'Open Defense: 9.c3 Bc5 10.Nbd2 O-O 11.Bc2', moves: BC5, orientation: 'black' },
  terms: [
    { term: 'En passant', meaning: 'A pawn that moves two squares can be captured by an enemy pawn beside it, as if it had moved one square.' },
    { term: 'Dark-squared bishop', meaning: 'The bishop that moves on dark squares. In these lines, Black\'s bishop on c5.' },
    { term: 'Space', meaning: 'Room behind your pawns for your pieces. Pawns further up the board give more space.' }
  ]
})
