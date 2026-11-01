import { defineModule } from '../../../types'
import { CLOSED } from '../lines'

/** closed-6be3: 6.Be3 e6 7.Qd2 Rb8 8.Nge2 Nd4 */
const BE3 = `${CLOSED} Be3 e6 Qd2 Rb8 Nge2 Nd4`
/** closed-6f4: 6.f4 e6 7.Nf3 Nge7 8.O-O O-O */
const F4 = `${CLOSED} f4 e6 Nf3 Nge7 O-O O-O`
/** Engine-checked illustration: 9.f5? exf5 10.exf5 Bxf5 and Black is a pawn up */
const EARLY_F5 = `${F4} f5 exf5 exf5 Bxf5`

export default defineModule({
  id: '8.2',
  title: "The Closed Sicilian: White's kingside plan",
  minutes: 11,
  level: 2,
  goals: [
    'Learn the Be3 and Qd2 set-up and the Bh6 idea',
    'Learn the f4 set-up and why White wants f5',
    'Count the guards on f5 before pushing'
  ],
  intro:
    "In the Closed Sicilian the center stays shut, so White looks for play on the kingside, where Black's king will live. There are two main set-ups: Be3 with Qd2, or the f-pawn first. Both aim at the same targets: Black's g7-bishop and the f5 square.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Be3 and Qd2: aiming at h6',
      intro: 'Follow the dark-squared bishop. It is lining up with the queen.',
      moves: BE3,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'Choosing a plan',
          text: '5...d6. Both sides have fianchettoed. Now White picks a kingside set-up.',
          arrows: [['c1', 'e3', 'blue']]
        },
        11: {
          title: 'The bishop comes out',
          text: '6.Be3. The bishop develops and looks along the diagonal toward h6, next to Black\'s g7-bishop.',
          arrows: [['e3', 'h6', 'yellow']]
        },
        12: {
          title: 'Taking d5 away',
          text: '6...e6. The pawn covers d5, so White\'s knight can\'t jump there. Black also plans ...Nge7, which keeps the g7-bishop\'s diagonal open.',
          arrows: [['e6', 'd5', 'green']]
        },
        13: {
          title: 'A battery',
          text: '7.Qd2. Queen and bishop now stand on the same diagonal. White wants Bh6 to trade off Black\'s g7-bishop, the best defender of Black\'s king. If Black takes on h6, the queen recaptures.',
          arrows: [['d2', 'h6', 'yellow']],
          marks: ['g7']
        },
        14: {
          title: 'Black looks west',
          text: '7...Rb8. The rook steps behind the b-pawn to support ...b5. Black\'s play is on the queenside (Module 8.3).',
          arrows: [['b7', 'b5', 'blue']]
        },
        15: {
          title: 'The knight to e2',
          text: '8.Nge2. The knight goes to e2, not f3, so it doesn\'t block the f-pawn. f4 can come later. From e2 it also guards d4.',
          arrows: [['f2', 'f4', 'blue'], ['e2', 'd4', 'green']]
        },
        16: {
          title: 'Black takes the outpost',
          text: '8...Nd4. The knight lands on d4, guarded by the c5-pawn and the g7-bishop. The position is roughly equal. White usually castles next and keeps Bh6 and f4 in mind.',
          arrows: [['c5', 'd4', 'green'], ['g7', 'd4', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The f-pawn goes first',
      intro: 'Now the other set-up. White pushes f4 at once and develops the knight to f3.',
      moves: F4,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'Same position',
          text: '5...d6. This time White starts with the f-pawn.',
          arrows: [['f2', 'f4', 'blue']]
        },
        11: {
          title: 'Space on the kingside',
          text: '6.f4. The pawn controls e5 and g5. White\'s long-term idea is f4–f5, to open lines toward Black\'s king.',
          arrows: [['f4', 'f5', 'yellow']]
        },
        12: {
          title: 'Guarding f5',
          text: '6...e6. Black\'s pawn now covers f5 and d5. White\'s f-pawn can\'t simply walk forward.',
          arrows: [['e6', 'f5', 'green'], ['e6', 'd5', 'green']]
        },
        13: {
          title: 'The knight to f3',
          text: '7.Nf3. With the f-pawn already on f4, the knight no longer blocks it. It adds a second guard to e5.',
          arrows: [['f3', 'e5', 'green']]
        },
        14: {
          title: 'Another guard on f5',
          text: '7...Nge7. The knight leaves the g7-bishop\'s diagonal open and adds a guard to f5.',
          arrows: [['e7', 'f5', 'green']]
        },
        15: {
          title: 'White castles',
          text: '8.O-O. White\'s king is safe on g1, and the rook stands on the f-file, where the fight will be once f5 comes.',
          marks: ['f5']
        },
        16: {
          title: 'Count before you push',
          text: '8...O-O. The position is roughly equal. White would love f5, but the e6-pawn, the g6-pawn and the e7-knight guard it, and only the e4-pawn supports it.',
          arrows: [['e6', 'f5', 'green'], ['g6', 'f5', 'green'], ['e7', 'f5', 'green']],
          marks: ['f5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Too early: 9.f5?',
      intro: 'What happens if White ignores the count and pushes anyway?',
      moves: EARLY_F5,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'Three against one',
          text: 'Black guards f5 three times. White supports it once, with the e4-pawn.',
          marks: ['f5']
        },
        17: {
          title: 'The push',
          text: '9.f5. White pushes and attacks e6 and g6. It looks aggressive, but it simply gives away a pawn.',
          arrows: [['f5', 'e6', 'red'], ['f5', 'g6', 'red']],
          ann: '?'
        },
        18: {
          title: 'Black takes',
          text: '9...exf5. Black takes the pawn. With the e6-pawn gone, the c8-bishop now also sees f5.',
          arrows: [['c8', 'f5', 'blue']]
        },
        19: {
          title: 'The recapture',
          text: '10.exf5. White takes back, but the f5-pawn is attacked by the g6-pawn, the e7-knight and the c8-bishop, and nothing defends it.',
          arrows: [['g6', 'f5', 'red'], ['e7', 'f5', 'red'], ['c8', 'f5', 'red']],
          marks: ['f5']
        },
        20: {
          title: 'A clean pawn',
          text: '10...Bxf5. Black is a pawn up with an active bishop and is clearly better. White had to prepare f5 first.',
          marks: ['f5']
        }
      }
    },
    {
      kind: 'text',
      title: 'How White prepares f5',
      body:
        "White's kingside plan works only when the pieces are ready. Before pushing f5, White adds more attackers to that square: a knight on h4 and a pawn on g4 both hit f5. Be3 and Qd2 bring the bishop and queen closer, and Bh6 can trade off Black's g7-bishop.\n\n**For Black:** keep at least as many guards on f5 as White has attackers, and don't sit still. While White builds on the kingside, Black starts the queenside play of Module 8.3."
    }
  ],
  takeaway:
    "In the Closed Sicilian, White attacks on the kingside with Be3, Qd2 (and sometimes Bh6), and the f4–f5 push. f5 must be prepared: pushed too early, it just loses a pawn.",
  lookAhead:
    'Module 8.3 shows what Black does meanwhile: ...Rb8 and ...b5, the knight on d4, and the Botvinnik set-up with ...e5.',
  drills: [
    {
      title: 'Build the battery',
      prompt: "You're White in the Closed Sicilian. Set up your bishop and queen on the same diagonal, aiming at h6.",
      moves: `${CLOSED} Be3 e6 Qd2`,
      start: 10,
      side: 'white',
      hints: ['Develop the dark-squared bishop first.', 'Be3, then put the queen right behind it on d2.'],
      success: '6.Be3 and 7.Qd2. Now Bh6 is ready to trade off Black\'s g7-bishop.'
    },
    {
      title: 'Punish the early push',
      prompt: "You're Black. White has just pushed 9.f5? before preparing it. Win a pawn.",
      moves: `${F4} f5 exf5`,
      start: 17,
      side: 'black',
      hints: ['Count the guards on f5.', 'Take with the e-pawn.'],
      success: '9...exf5! If 10.exf5, the pawn falls to ...Bxf5, because nothing defends it.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does White put the queen on d2, right behind the e3-bishop?',
      moves: `${CLOSED} Be3 e6 Qd2`,
      orientation: 'white',
      choices: [
        { text: "To prepare Bh6 and trade off Black's g7-bishop", correct: true, why: 'Yes. If Black takes on h6, the queen recaptures and lands near Black\'s king.' },
        { text: 'To defend the e4-pawn', why: 'The queen on d2 does not touch e4. The c3-knight, the d3-pawn and the g2-bishop guard it.' },
        { text: 'To attack the c5-pawn', why: 'The queen does not reach c5 from d2. The battery points the other way, toward h6.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move. Why is 9.f5 a mistake here?',
      moves: F4,
      orientation: 'white',
      choices: [
        { text: 'Black guards f5 three times and White supports it once, so Black wins a pawn', correct: true, why: 'Right. After 9...exf5 10.exf5 Bxf5 Black is a clean pawn up.' },
        { text: "It isn't a mistake: it opens the f-file and wins", why: 'Count first. After 9...exf5 White cannot keep material level.' },
        { text: 'It allows ...Bxc3, ruining White\'s pawns', why: '...Bxc3 is legal, but it is not the problem. The problem is simply the lost pawn after ...exf5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does White often play Nge2 rather than Nf3 in the Be3 and Qd2 set-up?',
      choices: [
        { text: 'A knight on f3 would block the f-pawn, and White wants f4 later', correct: true, why: 'Exactly. From e2 the knight also guards d4.' },
        { text: 'Nf3 is impossible because Black controls f3', why: 'Nothing stops Nf3. It simply gets in the way of the f-pawn.' },
        { text: 'The knight wants to reach d5 from e2', why: 'After ...e6 the d5 square is guarded by Black. The knight on e2 mainly guards d4 and keeps f4 possible.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Closed Sicilian, where does each side usually play?',
      choices: [
        { text: 'White on the kingside, Black on the queenside', correct: true, why: 'Yes. White aims f4–f5 and Bh6 at Black\'s king, while Black pushes ...b5 and uses d4.' },
        { text: 'Both sides fight for an open center', why: 'The center stays closed because White keeps the d-pawn on d3.' },
        { text: 'White on the queenside, Black on the kingside', why: 'It is the other way round. White\'s pieces and the f-pawn point at the kingside.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 6.f4 e6 7.Nf3 Nge7 8.O-O O-O, which Black units guard f5?',
      moves: F4,
      orientation: 'black',
      choices: [
        { text: 'The e6-pawn, the g6-pawn and the e7-knight', correct: true, why: 'Right. Three guards against one White supporter, the e4-pawn.' },
        { text: 'The e6-pawn, the g6-pawn and the c8-bishop', why: 'The c8-bishop is blocked by its own e6-pawn. It only sees f5 after the e-pawn leaves.' },
        { text: 'Only the e6-pawn', why: 'Look again: the g6-pawn and the e7-knight also cover f5.' }
      ]
    },
    {
      type: 'plan',
      prompt: "Which of these is part of White's usual plan in the Closed Sicilian?",
      choices: [
        { text: 'Be3, Qd2, and Bh6 to trade the g7-bishop', correct: true, why: 'Yes. Along with f4–f5, this is the typical kingside plan.' },
        { text: 'An early d4 to open the center', why: 'That would be an Open Sicilian. In the Closed, the d-pawn stops on d3.' },
        { text: 'Castling queenside and pushing the a- and b-pawns', why: "White's king usually goes to g1, and the play is on the kingside." }
      ]
    }
  ],
  key: { name: 'Closed Sicilian: 6.f4, aiming for f5', moves: `${CLOSED} f4`, orientation: 'white' },
  terms: [
    { term: 'Battery', meaning: 'Two pieces lined up on the same line, like a queen behind a bishop, so they work together.' },
    { term: 'Pawn push', meaning: 'Advancing a pawn to attack something or to open lines. Count the guards on the square first.' },
    { term: 'Clean pawn', meaning: 'An extra pawn won without giving anything back.' }
  ]
})
