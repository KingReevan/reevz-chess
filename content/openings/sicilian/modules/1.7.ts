import { defineModule } from '../../../types'
import { OPEN, OPEN_E6, OPEN_NC6 } from '../lines'

/** open-2nc6-5nc3: 2...Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 */
const NC6_5NC3 = `${OPEN_NC6} Nf6 Nc3`
/** classical-2nc6-order: 2...Nc6 ... 5.Nc3 d6 reaches the Classical */
const NC6_TO_CLASSICAL = `${NC6_5NC3} d6`

export default defineModule({
  id: '1.7',
  title: "Black's three main second moves",
  minutes: 10,
  level: 1,
  goals: [
    'Know what 2...d6, 2...Nc6 and 2...e6 each do',
    'Name the systems each second move leads to',
    'See how different move orders can reach the same position'
  ],
  intro:
    "After 1.e4 c5 2.Nf3, Black has to choose. Three moves are played far more than any others: 2...d6, 2...Nc6 and 2...e6. Each one prepares a different family of systems, and each one gives White slightly different options. This module is a tour of all three.",
  sections: [
    {
      kind: 'walkthrough',
      title: '2...d6: the road to the Najdorf and the Dragon',
      intro: 'The most common second move, and the one this course has used so far.',
      moves: OPEN,
      start: 3,
      orientation: 'black',
      steps: {
        3: {
          title: 'Black chooses',
          text: '2.Nf3. White develops and prepares d4. Now Black picks a family of systems.',
          arrows: [['f3', 'd4', 'green']]
        },
        4: {
          title: 'Control e5',
          text: '2...d6. The pawn controls e5, so White can\'t easily push e4–e5 to kick a knight on f6. It also opens the c8-bishop\'s diagonal.',
          arrows: [['d6', 'e5', 'green'], ['c8', 'g4', 'blue']]
        },
        5: {
          title: 'The center opens',
          text: '3.d4. White opens the center, as you saw in Module 1.1.',
          arrows: [['c5', 'd4', 'red']]
        },
        6: {
          title: 'The trade',
          text: '3...cxd4. Black trades the c-pawn for White\'s d-pawn.',
          marks: ['d4']
        },
        7: {
          title: 'Knight takes back',
          text: '4.Nxd4. Two center pawns for Black, a lead in development for White (Module 1.3).',
          marks: ['d6', 'e7', 'e4']
        },
        8: {
          title: 'Hit e4',
          text: '4...Nf6. The knight attacks e4 and forces White to decide how to defend it (Module 1.4).',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'Four big systems',
          text: '5.Nc3. Now Black chooses: 5...a6 is the Najdorf (Chapter 2), 5...g6 the Dragon (Chapter 3), 5...Nc6 the Classical and 5...e6 the Scheveningen (both Chapter 4).',
          marks: ['a6', 'g6', 'c6', 'e6']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '2...Nc6: the road to the Sveshnikov',
      intro: 'Black develops a piece first and keeps the d-pawn at home.',
      moves: NC6_5NC3,
      start: 3,
      orientation: 'black',
      steps: {
        3: {
          title: 'The same question',
          text: '2.Nf3. This time Black answers with a piece.',
          arrows: [['f3', 'd4', 'green']]
        },
        4: {
          title: 'A knight on c6',
          text: '2...Nc6. The knight develops and watches d4 and e5. The d-pawn stays on d7, so later it can go to d6 or even d5 in one move.',
          arrows: [['c6', 'd4', 'green'], ['c6', 'e5', 'green']]
        },
        5: {
          title: 'White opens the center',
          text: '3.d4. The same plan as before.',
          arrows: [['c5', 'd4', 'red']]
        },
        6: {
          title: 'The trade',
          text: '3...cxd4. Black takes, as usual.',
          marks: ['d4']
        },
        7: {
          title: 'Many choices already',
          text: '4.Nxd4. Here Black can play 4...g6 (the Accelerated Dragon, Module 3.8), 4...e5 (the Kalashnikov or the Löwenthal, Module 5.7) or 4...e6 (the Taimanov, Chapter 6).',
          arrows: [['g7', 'g6', 'blue'], ['e7', 'e5', 'blue']]
        },
        8: {
          title: 'The main move',
          text: '4...Nf6. The knight hits e4, just like in the 2...d6 lines.',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'Three ways on',
          text: '5.Nc3. Now 5...e5 is the Sveshnikov (Chapter 5), 5...d6 is the Classical by another road (Chapter 4), and 5...e6 is the Four Knights (Chapter 6).',
          arrows: [['e7', 'e5', 'blue'], ['d7', 'd6', 'blue'], ['e7', 'e6', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '2...e6: the flexible road',
      intro: 'Black opens a diagonal for the f8-bishop and keeps the d-pawn flexible.',
      moves: OPEN_E6,
      start: 3,
      orientation: 'black',
      steps: {
        3: {
          title: 'One more choice',
          text: '2.Nf3. The third main answer is a quiet pawn move.',
          arrows: [['f3', 'd4', 'green']]
        },
        4: {
          title: 'A small pawn move',
          text: '2...e6. The pawn controls d5 and opens a diagonal for the f8-bishop. The d-pawn can stay home, go to d6, or jump to d5 in one move.',
          arrows: [['e6', 'd5', 'green'], ['f8', 'd6', 'blue']]
        },
        5: {
          title: 'White opens the center',
          text: '3.d4. White plays the Open Sicilian again.',
          arrows: [['c5', 'd4', 'red']]
        },
        6: {
          title: 'The trade',
          text: '3...cxd4. The same trade.',
          marks: ['d4']
        },
        7: {
          title: 'The ...e6 systems',
          text: '4.Nxd4. Now 4...Nc6 is the Taimanov, 4...a6 the Kan, and 4...Nf6 5.Nc3 Nc6 the Four Knights. Chapter 6 teaches all three.',
          arrows: [['b8', 'c6', 'blue'], ['a7', 'a6', 'blue'], ['g8', 'f6', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'One position, two roads',
      body:
        "Different move orders can lead to the same position. This is called a **transposition**. For example, 2...Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 d6 reaches exactly the same position as 2...d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6: the Classical. In the same way, 2...e6 with ...Nf6 and ...d6 can reach the Scheveningen.\n\nSo why choose one road over another? Because White gets different chances on the way. Each second move allows its own White sidestep on move 3: after 2...d6, **3.Bb5+** (the Moscow); after 2...Nc6, **3.Bb5** (the Rossolimo); after 2...e6, the quiet **3.d3** set-up (the King's Indian Attack). Chapter 9 teaches all three."
    },
    {
      kind: 'tip',
      title: 'Which one should you play?',
      body:
        "There's no wrong choice among the three. 2...d6 leads to the sharpest and most famous systems. 2...Nc6 keeps the option of ...e5 in one go, as in the Sveshnikov. 2...e6 is the most flexible. Module 9.8 helps you pick one that suits your style. For now, learn to recognize all three."
    }
  ],
  takeaway:
    '2...d6 leads to the Najdorf, Dragon, Classical and Scheveningen; 2...Nc6 to the Sveshnikov, Accelerated Dragon and Classical; 2...e6 to the Taimanov, Kan and Four Knights. Different roads can meet in the same position.',
  lookAhead:
    'Module 1.8 looks at two rarer second moves, 2...g6 and 2...a6, and the tricks that come with them.',
  drills: [
    {
      title: 'The Classical by another road',
      prompt: "You're Black. Start with 2...Nc6, then take on d4, hit e4 with your knight, and finish with ...d6 to reach the Classical.",
      moves: NC6_TO_CLASSICAL,
      start: 2,
      side: 'black',
      hints: ['2...Nc6 first, and take on d4 when White pushes the pawn there.', 'After 4.Nxd4 play ...Nf6, and after 5.Nc3 play ...d6.'],
      success: '2...Nc6, 3...cxd4, 4...Nf6 and 5...d6. The same position as 2...d6 with 5...Nc6.'
    },
    {
      title: 'Open it up against 2...e6',
      prompt: "You're White. Play 2.Nf3, and after Black's 2...e6, open the center and take back with the knight.",
      moves: OPEN_E6,
      start: 2,
      side: 'white',
      hints: ['The same plan as against 2...d6.', '2.Nf3, 3.d4 and 4.Nxd4.'],
      success: '2.Nf3 e6 3.d4 cxd4 4.Nxd4. Black now chooses between the Taimanov, the Kan and the Four Knights.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Which second move opens the f8-bishop and keeps ...d5 possible in one move?',
      choices: [
        { text: '2...e6', correct: true, why: 'Right. The e6-pawn opens the bishop and guards d5, and the d-pawn is still on d7.' },
        { text: '2...d6', why: 'After 2...d6 the d-pawn has already moved, so ...d5 would take a second move. It opens the c8-bishop, not the f8-bishop.' },
        { text: '2...Nc6', why: 'It keeps the d-pawn home, but it does nothing for the f8-bishop.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. Which move is the Sveshnikov?',
      moves: NC6_5NC3,
      orientation: 'black',
      choices: [
        { text: '5...e5', correct: true, why: 'Yes. Black kicks the knight at once. Chapter 5 teaches it.' },
        { text: '5...d6', why: 'That reaches the Classical, the same position as 2...d6 with 5...Nc6.' },
        { text: '5...e6', why: 'That is the Four Knights, one of the ...e6 systems in Chapter 6.' }
      ]
    },
    {
      type: 'name',
      prompt: 'After 2...Nc6, White can avoid the Open Sicilian with 3.Bb5. What is it called?',
      moves: 'e4 c5 Nf3 Nc6 Bb5',
      orientation: 'white',
      choices: [
        { text: 'The Rossolimo', correct: true, why: 'Right. The bishop puts pressure on the c6-knight, which guards d4 and e5. Chapter 9 teaches it.' },
        { text: 'The Moscow', why: 'The Moscow is 2...d6 3.Bb5+, a check. Here the bishop attacks a knight, not the king.' },
        { text: 'The Najdorf', why: 'The Najdorf is 5...a6 in the Open Sicilian, a Black system.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Compare 2...Nc6 ... 5.Nc3 d6 with 2...d6 ... 5.Nc3 Nc6. What is true?',
      choices: [
        { text: 'They reach exactly the same position', correct: true, why: 'Yes. This is a transposition: two move orders, one position, the Classical.' },
        { text: 'They are different openings with different pawns', why: 'Set up both on a board: every piece and pawn is on the same square.' },
        { text: 'The second one gives White an extra move', why: 'Both reach the same position with White to move, so neither side gains a move.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'After 2...e6 3.d4 cxd4 4.Nxd4, which move is the Kan?',
      moves: OPEN_E6,
      orientation: 'black',
      choices: [
        { text: '4...a6', correct: true, why: 'Right. The Kan (also called the Paulsen) starts with 4...a6. Chapter 6 teaches it.' },
        { text: '4...Nc6', why: 'That is the Taimanov, the other main ...e6 system.' },
        { text: '4...Nf6', why: 'After 5.Nc3 this leads to the Four Knights (5...Nc6) or other lines. The Kan is 4...a6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 2...d6 do?',
      choices: [
        { text: 'It controls e5 and opens the c8-bishop\'s diagonal', correct: true, why: 'Yes. White can\'t easily play e4–e5, and the light-squared bishop can come out.' },
        { text: 'It develops a piece', why: 'It is a pawn move. 2...Nc6 is the second move that develops a piece.' },
        { text: 'It keeps ...d5 possible in one move', why: 'The d-pawn has already moved, so ...d5 would take two moves. That is the point of 2...e6 and 2...Nc6.' }
      ]
    }
  ],
  key: { name: "Black's second move: 2.Nf3", moves: 'e4 c5 Nf3', orientation: 'black' },
  terms: [
    { term: 'Transposition', meaning: 'Reaching the same position by a different move order.' },
    { term: 'Move order', meaning: 'The order in which moves are played. A different order can allow, or avoid, different replies.' },
    { term: 'System', meaning: 'A family of lines that share the same set-up and plans, such as the Najdorf or the Dragon.' }
  ]
})
