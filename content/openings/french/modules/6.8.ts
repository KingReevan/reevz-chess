import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** 4.Bg5 dxe4 5.Nxe4 Be7 6.Bxf6: the Burn, Black to choose the recapture */
const BURN = `${CLASSICAL} Bg5 dxe4 Nxe4 Be7 Bxf6`
/** cla-burn: 6...Bxf6 7.Nf3 O-O 8.Qd2 Nd7 9.O-O-O b6 */
const SOLID = `${BURN} Bxf6 Nf3 O-O Qd2 Nd7 O-O-O b6`
/** cla-burn-gxf6 up to 9.g3: 6...gxf6 7.Nf3 f5 8.Nc3 c6 9.g3 (the line continues 9...b5) */
const GXF6 = `${BURN} gxf6 Nf3 f5 Nc3 c6 g3`

export default defineModule({
  id: '6.8',
  title: 'The Burn 4...dxe4',
  minutes: 11,
  level: 3,
  goals: [
    'See why Black can take on e4 even though the f6-knight is pinned',
    'Play the solid recapture 6...Bxf6, with ...b6 and ...Bb7 to follow',
    'Know the unbalanced 6...gxf6: the bishop pair and the g-file for a looser structure'
  ],
  intro:
    "Against 4.Bg5, Black can simply take the e4-pawn with 4...dxe4. This is the Burn Variation, the most common answer at the top level. Black gives up the center, as in the Rubinstein, and asks White to show something. After 5.Nxe4 Be7 6.Bxf6, Black has an interesting choice: take back with the bishop or with the g-pawn.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The solid recapture: 6...Bxf6',
      intro: "Black keeps a healthy pawn structure and gets the two bishops. Watch how the c8-bishop finally comes out.",
      moves: SOLID,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The Classical',
          text: '3...Nf6. The knight attacks e4 a second time.',
          arrows: [['f6', 'e4', 'red'], ['d5', 'e4', 'red']]
        },
        7: {
          title: 'The pin',
          text: '4.Bg5. The f6-knight is pinned to the queen, so it can\'t safely take on e4.',
          arrows: [['g5', 'f6', 'red'], ['f6', 'd8', 'yellow']]
        },
        8: {
          title: 'The pawn takes instead',
          text: '4...dxe4. The Burn. The knight is pinned, but the d5-pawn is free to capture. Black gives up the center, just as in the Rubinstein.',
          arrows: [['d5', 'e4', 'red']]
        },
        9: {
          title: 'The knight recaptures',
          text: '5.Nxe4. The knight takes back and joins the attack on f6. Now f6 is attacked twice, by the knight and the bishop.',
          arrows: [['e4', 'f6', 'red'], ['g5', 'f6', 'red']]
        },
        10: {
          title: 'Break the pin',
          text: '5...Be7. The bishop blocks the pin and guards f6 in place of the queen. Now f6 is defended twice too, by the bishop and the g7-pawn.',
          arrows: [['e7', 'f6', 'green'], ['g7', 'f6', 'green']]
        },
        11: {
          title: 'The trade',
          text: '6.Bxf6. White gives up the bishop for the knight. Black now chooses how to take back.',
          arrows: [['e7', 'f6', 'blue'], ['g7', 'f6', 'blue']]
        },
        12: {
          title: 'Bishop takes',
          text: '6...Bxf6. The safe choice: Black\'s pawns stay healthy. Black now has two bishops against White\'s one, and the f6-bishop presses on d4.',
          arrows: [['f6', 'd4', 'red']]
        },
        13: {
          title: 'Develop and guard d4',
          text: '7.Nf3. The knight develops and defends d4.',
          arrows: [['f3', 'd4', 'green']]
        },
        14: {
          title: 'Black castles',
          text: '7...O-O. Black\'s king is safe.',
          arrows: [['e8', 'g8', 'green']]
        },
        15: {
          title: 'Ready to castle long',
          text: '8.Qd2. As in other Classical lines, White prepares O-O-O.',
          arrows: [['e1', 'c1', 'blue']]
        },
        16: {
          title: 'The last knight',
          text: '8...Nd7. The knight develops. From d7 it can support a later ...c5 or ...e5.',
          arrows: [['b8', 'd7', 'green']]
        },
        17: {
          title: 'Opposite sides',
          text: '9.O-O-O. The kings are on opposite wings. The rook lands on d1, behind the queen on the d-file.',
          marks: ['c1', 'g8']
        },
        18: {
          title: 'The problem bishop comes out',
          text: "9...b6. Next comes ...Bb7, and the c8-bishop gets the long diagonal toward e4. Later ...c5 can hit d4. The engine gives White a slight edge.",
          arrows: [['c8', 'b7', 'blue'], ['b7', 'e4', 'blue'], ['c7', 'c5', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The unbalanced recapture: 6...gxf6',
      intro: 'Black damages the pawn structure on purpose. In return Black keeps the dark-squared bishop and gets the g-file.',
      moves: GXF6,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The same choice',
          text: '6.Bxf6. This time Black takes back with the pawn.',
          arrows: [['g7', 'f6', 'blue']]
        },
        12: {
          title: 'Pawn takes',
          text: "6...gxf6. Black's f-pawns are doubled, but Black keeps both bishops, the g-file is half-open for a rook, and the f6-pawn guards e5. This is sometimes called the Morozevich Line.",
          arrows: [['h8', 'g8', 'blue'], ['f6', 'e5', 'green']]
        },
        13: {
          title: 'White develops',
          text: '7.Nf3. The knight guards d4 and eyes e5.',
          arrows: [['f3', 'd4', 'green'], ['f3', 'e5', 'blue']]
        },
        14: {
          title: 'Kick the knight',
          text: '7...f5. The pawn chases the e4-knight and gains space. It also opens the e7-bishop\'s diagonal toward h4.',
          arrows: [['f5', 'e4', 'red'], ['e7', 'h4', 'blue']]
        },
        15: {
          title: 'The knight steps back',
          text: '8.Nc3. The knight returns to c3.',
          arrows: [['e4', 'c3', 'blue']]
        },
        16: {
          title: 'Control d5',
          text: '8...c6. The pawn guards d5 and b5, so White\'s knights can\'t jump in there.',
          arrows: [['c6', 'd5', 'green'], ['c6', 'b5', 'green']]
        },
        17: {
          title: 'A fianchetto',
          text: '9.g3. White prepares Bg2 and guards f4, so Black\'s f-pawn can\'t advance safely. The engine gives White a slight edge in a sharp, unbalanced game.',
          arrows: [['f1', 'g2', 'blue'], ['g3', 'f4', 'green']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'Careful with ...b5 in the gxf6 line',
      body:
        "In the position after 9.g3, the queenside push **9...b5?!** looks active, but it leaves the c6-pawn without pawn support. **10.Ne5!** hits c6 and f7 at once, and after Bg2 the long diagonal points at c6 too. The engine then says White is clearly better. The engine prefers quieter moves such as 9...Nd7."
    },
    {
      kind: 'text',
      title: 'Which recapture is for you?',
      body:
        "**6...Bxf6** is solid. Black's pawns are healthy, Black has the bishop pair, and the plan is simple: castle, ...Nd7, ...b6 and ...Bb7, then ...c5. White keeps a slight edge with more space and active pieces.\n\n**6...gxf6** is for players who like imbalance. Black has the bishop pair and the g-file, but the pawns are looser and Black must play accurately. The engine also gives White a slight edge.\n\n**For White,** the recipe is the same against both: keep the d4-pawn well guarded, develop quickly (Nf3, Qd2, O-O-O is common) and use your extra space.\n\n**History.** The variation is named after Amos Burn. Evgeny Bareev played it regularly, and Alexander Morozevich and Gregory Kaidanov have played 6...gxf6."
    }
  ],
  takeaway:
    '4...dxe4 gives up the center for a solid game. After 5.Nxe4 Be7 6.Bxf6, 6...Bxf6 keeps healthy pawns and the bishop pair (then ...b6 and ...Bb7); 6...gxf6 is sharper, with the g-file. White keeps a slight edge either way.',
  lookAhead:
    "Module 6.9 covers White's third choice after 3...Nf6: the Delayed Exchange 4.exd5, and a pin trap on d5 that catches many players.",
  drills: [
    {
      title: 'Play the solid Burn',
      prompt: "You're Black. White has pinned your knight with 4.Bg5. Take on e4 with the pawn, break the pin, take back with the bishop, and develop: castle, knight to d7, and prepare ...Bb7.",
      moves: SOLID,
      start: 7,
      side: 'black',
      hints: ['The d5-pawn takes on e4. Then the f8-bishop breaks the pin.', 'After 6.Bxf6, take back with the bishop. Then castle, ...Nd7 and push the b-pawn one square.'],
      success: '4...dxe4, 5...Be7, 6...Bxf6, 7...O-O, 8...Nd7 and 9...b6. Next comes ...Bb7.'
    },
    {
      title: "White's set-up",
      prompt: "You're White. Black has taken back with 6...Bxf6. Develop your knight to guard d4, bring the queen up and castle queenside.",
      moves: `${BURN} Bxf6 Nf3 O-O Qd2 Nd7 O-O-O`,
      start: 12,
      side: 'white',
      hints: ['The g1-knight guards d4 from f3.', 'Then Qd2 and long castling.'],
      success: '7.Nf3, 8.Qd2 and 9.O-O-O. White keeps a slight edge.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 4.Bg5, the f6-knight is pinned. How can Black still win back the e4-square?',
      moves: `${CLASSICAL} Bg5`,
      orientation: 'black',
      choices: [
        { text: 'By taking with the d5-pawn: 4...dxe4', correct: true, why: 'Right. Only the knight is pinned. The d5-pawn is free to capture on e4.' },
        { text: 'By taking with the knight: 4...Nxe4', why: 'The knight is pinned to the queen: 5.Bxd8 would win it.' },
        { text: "Black can't: e4 is defended twice", why: 'Only the c3-knight defends e4. The d5-pawn can take it.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6.Bxf6 Bxf6, what does Black have?',
      moves: `${BURN} Bxf6`,
      orientation: 'black',
      choices: [
        { text: 'Healthy pawns and the bishop pair', correct: true, why: 'Right. Black has two bishops against one, and no pawn weaknesses. White has more space.' },
        { text: 'An extra pawn', why: 'Material is level. Black took on e4, and White took back.' },
        { text: 'Doubled f-pawns', why: "That is the other recapture, 6...gxf6. After 6...Bxf6 Black's pawns are untouched." }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 9...b6 in the solid line, what is the idea?',
      moves: SOLID,
      orientation: 'black',
      choices: [
        { text: '...Bb7, putting the c8-bishop on the long diagonal', correct: true, why: "Right. The problem bishop finally gets a good diagonal, toward e4 and White's kingside." },
        { text: "...b5–b4, attacking White's king at once", why: '...b6 is a quiet developing move. The pawn storm can come later, but first the bishop comes out.' },
        { text: 'To protect the a7-pawn', why: 'Nothing attacks a7. The point of ...b6 is to make room for ...Bb7.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Black has just played 9...b5 in the 6...gxf6 line. What is best?',
      moves: `${GXF6} b5`,
      orientation: 'white',
      choices: [
        { text: '10.Ne5', correct: true, why: 'Right. The knight hits c6 and f7, and Bg2 will add pressure on c6. White is clearly better.' },
        { text: '10.Bg2', why: 'A good developing move, but 10.Ne5 first is stronger: it hits c6 at once.' },
        { text: '10.Ne2', why: 'Too slow. It misses the chance to hit the weakened c6-pawn.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'What is 3.Nc3 Nf6 4.Bg5 dxe4 called?',
      moves: `${CLASSICAL} Bg5 dxe4`,
      orientation: 'black',
      choices: [
        { text: 'The Burn Variation', correct: true, why: 'Right. It is named after Amos Burn.' },
        { text: 'The Rubinstein', why: 'The Rubinstein is 3...dxe4, one move earlier, before ...Nf6.' },
        { text: 'The McCutcheon', why: 'The McCutcheon is 4...Bb4, the counter-pin.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does Black get in return for the doubled f-pawns after 6...gxf6?',
      moves: `${BURN} gxf6`,
      orientation: 'black',
      choices: [
        { text: 'The bishop pair and a half-open g-file', correct: true, why: "Right. Black keeps the dark-squared bishop, and a rook can use the g-file. The price is a looser structure." },
        { text: 'A lead in development', why: 'Black is not ahead in development. The compensation is the bishops and the g-file.' },
        { text: 'A safe castled king', why: 'With the g-pawn gone from g7, short castling is less safe. Black has the bishops and the g-file instead.' }
      ]
    }
  ],
  key: { name: 'Burn: 6.Bxf6, which way to take back?', moves: BURN, orientation: 'black' },
  terms: [
    { term: 'Burn Variation', meaning: '3.Nc3 Nf6 4.Bg5 dxe4: Black takes on e4 with the pawn, even though the knight is pinned.' },
    { term: 'Morozevich Line', meaning: 'The Burn with 6...gxf6: doubled f-pawns, but the bishop pair and the g-file.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has only one. In open positions it is often an advantage.' },
    { term: 'Fianchetto', meaning: 'Developing a bishop on the long diagonal from g2 (or b2, g7, b7), after moving the knight\'s pawn one square.' }
  ]
})
