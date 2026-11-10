import { defineModule } from '../../../types'
import { ADVANCE_QB6 } from '../lines'

/** 6.a3 c4 */
const C4 = `${ADVANCE_QB6} a3 c4`
/** adv-6a3-c4: 7.Nbd2 Na5 8.Rb1 Bd7 9.h4 Ne7 10.h5 h6 */
const MAIN = `${C4} Nbd2 Na5 Rb1 Bd7 h4 Ne7 h5 h6`
/** adv-6a3-c4-f6: 7.Nbd2 f6 8.Be2 fxe5 9.Nxe5 Nxe5 10.dxe5 Bc5 */
const F6 = `${C4} Nbd2 f6 Be2 fxe5 Nxe5 Nxe5 dxe5 Bc5`
/** adv-6a3-c4-b4: 7.b4?! cxb3 (en passant) 8.Qxb3?? Qxb3 */
const EP = `${C4} b4 cxb3 Qxb3 Qxb3`

export default defineModule({
  id: '2.3',
  title: '6.a3 and the ...c4 answer',
  minutes: 11,
  level: 2,
  goals: [
    'Understand 6.a3: White prepares b4 and Bb2',
    'Learn what 6...c4 gains (space, the b3-square) and what it gives up',
    'Know en passant, and why 7.b4?! cxb3 8.Qxb3?? loses the queen'
  ],
  intro:
    "6.a3 is White's most popular answer to 5...Qb6. It prepares b2–b4, which grabs space and lets the c1-bishop come to b2. Black has several good replies. This module looks at the one that changes the whole position: 6...c4, which shuts the queenside. It also hides a trap with a rule many beginners don't know: en passant.",
  sections: [
    {
      kind: 'walkthrough',
      title: '6...c4: shutting the queenside',
      intro: 'After ...c4 the pawns lock on both wings. Watch where each side has room to play.',
      moves: MAIN,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The main position',
          text: '5...Qb6. The queen hits b2 and lines up against d4. White now picks a set-up.',
          arrows: [['b6', 'b2', 'red'], ['b6', 'd4', 'yellow']]
        },
        11: {
          title: 'Preparing b4',
          text: '6.a3. White wants b2–b4. Then the b2-pawn is no longer a target, and the c1-bishop can come to b2 to guard d4. The a3-pawn also takes b4 away from Black\'s pieces.',
          arrows: [['b2', 'b4', 'blue'], ['c1', 'b2', 'blue']]
        },
        12: {
          title: 'Shut the door',
          text: "6...c4. The pawn grabs space and covers b3 and d3. Now b4 can be met by ...cxb3 en passant, and White's f1-bishop can't use d3. The price: the c-pawn no longer attacks d4, so the c3-pawn will guard d4 for good.",
          arrows: [['c4', 'b3', 'red'], ['c4', 'd3', 'red']],
          marks: ['b3']
        },
        13: {
          title: 'The knight eyes c4',
          text: '7.Nbd2. The knight develops, guards b3 and attacks the c4-pawn. The d5-pawn defends c4.',
          arrows: [['d2', 'c4', 'red'], ['d5', 'c4', 'green']]
        },
        14: {
          title: 'Heading for b3',
          text: '7...Na5. The knight guards c4 and aims at b3. No White pawn can ever attack b3, because the a- and c-pawns have left a2 and c2. That makes b3 a dream square for a black knight.',
          arrows: [['a5', 'b3', 'blue'], ['a5', 'c4', 'green']],
          marks: ['b3']
        },
        15: {
          title: 'The rook guards b2',
          text: '8.Rb1. The rook protects b2, so the c1-bishop is free to move. It also supports a later b2–b4.',
          arrows: [['b1', 'b2', 'green']]
        },
        16: {
          title: 'Develop',
          text: '8...Bd7. With the knight off c6, the bishop sees b5 and a4 and can join the fight on the light squares. Black often castles long later.',
          arrows: [['d7', 'a4', 'blue']]
        },
        17: {
          title: 'Space on the kingside',
          text: '9.h4. With the queenside shut, White plays where the e5-pawn points: the kingside. The h-pawn grabs space.',
          arrows: [['h4', 'h5', 'blue']]
        },
        18: {
          title: 'The last knight',
          text: '9...Ne7. The g8-knight comes out. It can go on to c6 or f5.',
          arrows: [['e7', 'f5', 'blue'], ['e7', 'c6', 'blue']]
        },
        19: {
          title: 'More space',
          text: '10.h5. The pawn takes g6 away from Black\'s pieces and could go on to h6 to loosen Black\'s kingside.',
          arrows: [['h5', 'g6', 'red'], ['h5', 'h6', 'blue']]
        },
        20: {
          title: 'Both wings locked',
          text: "10...h6. Black stops h5–h6 and keeps White's bishop off g5. Now Black has space on the queenside and White on the kingside. The engine gives White a slight edge, but the position is rich for both sides.",
          arrows: [['h6', 'g5', 'green']],
          marks: ['b3', 'g6']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '7...f6: hit the head of the chain',
      intro: 'Same position after 7.Nbd2. Black can also strike at once at e5, the front pawn of the chain.',
      moves: F6,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'The same position',
          text: '7.Nbd2. With the queenside closed, Black has a second break: ...f6 against e5.',
          marks: ['e5']
        },
        14: {
          title: 'Attack the head',
          text: '7...f6. The pawn attacks e5. Now e5 is attacked twice (the f6-pawn and the c6-knight) and defended twice (the d4-pawn and the f3-knight).',
          arrows: [['f6', 'e5', 'red'], ['c6', 'e5', 'red']]
        },
        15: {
          title: 'White develops',
          text: '8.Be2. White gets ready to castle and keeps the e5-pawn defended twice.',
          arrows: [['d4', 'e5', 'green'], ['f3', 'e5', 'green']]
        },
        16: {
          title: 'Opening the f-file',
          text: "8...fxe5. Black takes. Black has no f-pawn any more, so the f-file is half-open for Black's rook after castling."
        },
        17: {
          title: 'The knight takes back',
          text: '9.Nxe5. The knight lands on a strong central square and attacks the c6-knight.',
          arrows: [['e5', 'c6', 'red']]
        },
        18: {
          title: 'Trade knights',
          text: "9...Nxe5. Black removes White's best piece.",
          marks: ['e5']
        },
        19: {
          title: 'The chain is gone',
          text: '10.dxe5. White keeps a pawn on e5, but there is no d4-pawn behind it any more. Nothing defends e5 now.',
          marks: ['e5', 'd4']
        },
        20: {
          title: 'A free bishop',
          text: "10...Bc5. With the d4-pawn gone, the f8-bishop gets a long diagonal and aims at f2. The e6-pawn has lost its f-pawn neighbor, so it can become a target. The engine gives White a slight edge, about the same as after 7...Na5.",
          arrows: [['c5', 'f2', 'red']],
          marks: ['e6']
        }
      }
    },
    {
      kind: 'text',
      title: 'Two good answers',
      body:
        "After 6...c4 7.Nbd2, both **7...Na5** (heading for b3) and **7...f6** (hitting the head of the chain) are good. The engine rates them about the same.\n\nThe ...c4 structure has a clear price. The c-pawn no longer attacks d4, so **White's center is safe** and White can turn to the kingside with h4–h5. Black's reward is **queenside space** and the b3-square. If you play ...c4 as Black, you need a follow-up: a knight to b3, or the ...f6 break. Otherwise White simply attacks on the kingside."
    },
    {
      kind: 'walkthrough',
      title: 'The en passant trap: 7.b4?! cxb3 8.Qxb3??',
      intro: 'White plays the move 6.a3 was meant to prepare. But after ...c4, it runs into a special rule.',
      moves: EP,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'The c4-pawn',
          text: '6...c4. The pawn covers b3. Remember that square.',
          arrows: [['c4', 'b3', 'red']],
          marks: ['b3']
        },
        13: {
          title: 'Two squares past b3',
          text: '7.b4. The pawn moves two squares, from b2 to b4. It skips b3, the square the c4-pawn attacks. That allows en passant.',
          arrows: [['b2', 'b4', 'blue']],
          marks: ['b3'],
          ann: '?!'
        },
        14: {
          title: 'En passant',
          text: '7...cxb3. When a pawn moves two squares and lands right next to an enemy pawn, that pawn may take it as if it had moved only one square. It must be done at once. The c4-pawn takes the b4-pawn and lands on b3. White is already slightly worse.',
          arrows: [['c4', 'b3', 'green']],
          marks: ['b4']
        },
        15: {
          title: 'The queen grabs',
          text: '8.Qxb3. White takes the pawn back with the queen. But the b6-queen guards b3.',
          arrows: [['b6', 'b3', 'red']],
          ann: '??'
        },
        16: {
          title: 'Queen lost',
          text: "8...Qxb3. Black takes the queen, and White can't take back: the a-pawn has left a2 and the c-pawn stands on c3. White's best after 7...cxb3 was 8.Bb2, leaving the b3-pawn for later.",
          marks: ['a2', 'c2']
        }
      }
    }
  ],
  takeaway:
    '6...c4 shuts the queenside: Black gets space and the b3-square, White gets a safe center and plays h4–h5 on the kingside. After ...c4, 7.b4?! is met by ...cxb3 en passant, and 8.Qxb3?? loses the queen.',
  lookAhead: 'Module 2.4 shows a different answer to 6.a3: the Lputian 6...Nh6, which keeps the pressure on d4 instead of closing the queenside.',
  drills: [
    {
      title: 'Spring the en passant trap',
      prompt: "You're Black. White has just played 7.b4, moving the pawn two squares past your c4-pawn. Punish it.",
      moves: EP,
      start: 13,
      side: 'black',
      hints: ['Your c4-pawn may take the b4-pawn as if it had stopped on b3.', 'If White takes on b3 with the queen, which of your pieces guards b3?'],
      success: '7...cxb3 en passant, and after 8.Qxb3?? Qxb3 White cannot take back. The queen is lost.'
    },
    {
      title: 'The ...c4 set-up',
      prompt: "You're Black. Against 6.a3, close the queenside with your c-pawn, send a knight toward b3, then develop the c8-bishop.",
      moves: `${C4} Nbd2 Na5 Rb1 Bd7`,
      start: 11,
      side: 'black',
      hints: ['Push the c-pawn one square, so it covers b3.', 'The c6-knight goes to a5, where it guards c4 and eyes b3.'],
      success: '6...c4, 7...Na5 and 8...Bd7. The knight is ready for b3, and the bishop can join on the light squares.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'White has just played 7.b4. What does en passant allow Black to do here?',
      moves: `${C4} b4`,
      orientation: 'black',
      choices: [
        { text: 'Take the b4-pawn with the c4-pawn, as if it had moved only to b3', correct: true, why: 'Right. The capturing pawn lands on b3. It must be done right away, on the very next move.' },
        { text: 'Take the b4-pawn with the c4-pawn next move or any time later', why: 'En passant is only allowed on the move right after the two-square push. Later it is gone.' },
        { text: 'Take the b4-pawn with the queen', why: 'The a3- and c3-pawns guard b4, so 7...Qxb4?? 8.axb4 loses the queen. En passant is a pawn capture.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to play. Is 8.Qxb3 a good way to win the pawn back?',
      moves: `${C4} b4 cxb3`,
      orientation: 'white',
      choices: [
        { text: 'No: 8...Qxb3 wins the queen, because nothing can take back on b3', correct: true, why: 'Yes. The a-pawn has left a2 and the c-pawn is on c3. White should play 8.Bb2 and win the pawn back later.' },
        { text: 'Yes: the queen wins a pawn for free', why: 'The b6-queen guards b3. After 8.Qxb3?? Qxb3 White has lost the queen.' },
        { text: 'No, because 8...Nxe5 wins a second pawn', why: '8...Nxe5 is not the problem. 8...Qxb3 simply takes the queen.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'What does 6...c4 give up, and what does it gain?',
      moves: C4,
      orientation: 'black',
      choices: [
        { text: 'It stops pressing d4 with the c-pawn, but gains queenside space and the b3-square', correct: true, why: "Right. White's center becomes safe, so Black needs a follow-up such as ...Na5–b3 or ...f6." },
        { text: 'It gives up a pawn but wins the d4-pawn later', why: 'No pawn is given up, and d4 is not won. The c3-pawn now guards d4 for good.' },
        { text: "It opens the c-file for Black's rook", why: 'The opposite: the pawn on c4 keeps the c-file closed.' }
      ]
    },
    {
      type: 'concept',
      prompt: "Black to play. Which move attacks the head of White's pawn chain?",
      moves: `${C4} Nbd2`,
      orientation: 'black',
      choices: [
        { text: '7...f6', correct: true, why: 'Right. The head of the chain is e5, and the f-pawn attacks it. It is a good move here.' },
        { text: '7...Na5', why: 'A good move too, but it heads for b3. It does not touch e5.' },
        { text: '7...Nge7', why: 'The knight develops, but from e7 it does not attack e5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why is b3 such a good square for a black knight in the ...c4 structure?',
      moves: MAIN,
      orientation: 'black',
      choices: [
        { text: 'No White pawn can ever attack it, because the a- and c-pawns have left a2 and c2', correct: true, why: 'Yes. A square that enemy pawns can never attack is called an outpost. A knight there is hard to remove.' },
        { text: 'It is defended by the d5-pawn', why: 'The d5-pawn guards c4 and e4. It is the c4-pawn that guards b3.' },
        { text: "From b3 the knight attacks White's king", why: "White's king is on e1. From b3 the knight hits squares such as a1, c1 and d2." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Both wings are locked. Where does each side have its space?',
      moves: MAIN,
      orientation: 'white',
      choices: [
        { text: 'White on the kingside, Black on the queenside', correct: true, why: 'Right. The e5-pawn and h4–h5 give White the kingside; ...c4 and the knight on a5 give Black the queenside.' },
        { text: 'White on the queenside, Black on the kingside', why: "It's the other way round. Black's c4-pawn and a5-knight own the queenside." },
        { text: 'Black in the center, White nowhere', why: "White's e5-pawn and h5-pawn give White plenty of kingside space." }
      ]
    }
  ],
  key: { name: 'Advance: 6.a3 c4', moves: C4, orientation: 'black' },
  terms: [
    { term: 'En passant', meaning: 'When a pawn moves two squares and lands next to an enemy pawn, that pawn may take it as if it had moved one square. Only on the very next move.' },
    { term: 'Outpost', meaning: 'A square that enemy pawns can never attack. A knight on an outpost is very hard to chase away.' },
    { term: 'Head of the chain', meaning: "The front pawn of a pawn chain. White's head is e5; Black attacks it with ...f6." }
  ]
})
