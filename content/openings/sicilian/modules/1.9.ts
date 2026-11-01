import { defineModule } from '../../../types'
import { OPEN, DRAGON, CLOSED, ALAPIN, MOSCOW, MORRA, TAIMANOV, ROSSOLIMO } from '../lines'

/** svesh-5e5: 2...Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 */
const SVESH_5E5 = 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5'

export default defineModule({
  id: '1.9',
  title: 'Map of the Sicilian',
  minutes: 10,
  level: 1,
  goals: [
    'Name the main Open Sicilian systems for Black',
    "Name White's main anti-Sicilians",
    'Know which chapter of this course teaches each one'
  ],
  intro:
    "The Sicilian is huge, but it has a clear shape. White chooses between the Open Sicilian and a few side roads. In the Open Sicilian, Black chooses a system with the second and fifth moves. This module walks the main road, points out every exit, and tells you where the course teaches each one.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main road and its exits',
      intro: 'At each step, the arrows show the main move and the side roads. Every name here has its own chapter.',
      moves: OPEN,
      start: 1,
      orientation: 'black',
      steps: {
        1: {
          title: 'The start',
          text: '1.e4. Black answers 1...c5, the Sicilian Defense.',
          arrows: [['c7', 'c5', 'green']]
        },
        2: {
          title: "White's first choice",
          text: '1...c5. White\'s main move is 2.Nf3. The side roads are 2.c3 (the Alapin) and 2.d4 cxd4 3.c3 (the Smith–Morra Gambit), both in Chapter 7, and 2.Nc3 (the Closed Sicilian and Grand Prix Attack, Chapter 8).',
          arrows: [['g1', 'f3', 'green'], ['c2', 'c3', 'blue'], ['b1', 'c3', 'blue']]
        },
        3: {
          title: "Black's second move",
          text: '2.Nf3. Black picks a family: 2...d6, 2...Nc6 or 2...e6 (Module 1.7). The rarer 2...g6 and 2...a6 are in Module 1.8.',
          arrows: [['d7', 'd6', 'green'], ['b8', 'c6', 'blue'], ['e7', 'e6', 'blue']]
        },
        4: {
          title: 'One more White exit',
          text: '2...d6. White can open the center with 3.d4, or check with 3.Bb5+, the Moscow. After 2...Nc6, the similar 3.Bb5 is the Rossolimo. Both are in Chapter 9.',
          arrows: [['d2', 'd4', 'green'], ['f1', 'b5', 'blue']]
        },
        5: {
          title: 'The Open Sicilian',
          text: '3.d4. White opens the center. This is the Open Sicilian, the main road of the course.',
          arrows: [['c5', 'd4', 'red']]
        },
        6: {
          title: 'The trade',
          text: '3...cxd4. Black takes, as always.',
          marks: ['d4']
        },
        7: {
          title: 'Knight takes back',
          text: '4.Nxd4. The main move. Taking with the queen is the Chekhover (Module 1.5).',
          marks: ['d4']
        },
        8: {
          title: 'Hit e4',
          text: '4...Nf6. White defends with 5.Nc3. Defending with 5.f3 is the Prins (Module 1.4).',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: "Black's four systems",
          text: '5.Nc3. The crossroads: 5...a6 is the Najdorf (Chapter 2), 5...g6 the Dragon (Chapter 3), 5...Nc6 the Classical and 5...e6 the Scheveningen (both in Chapter 4).',
          marks: ['a6', 'g6', 'c6', 'e6']
        }
      }
    },
    {
      kind: 'text',
      title: 'The whole map',
      body:
        "**Open Sicilian with 2...d6:** the Najdorf, 5...a6 (Chapter 2); the Dragon, 5...g6 (Chapter 3); the Classical, 5...Nc6, with White's Richter–Rauzer and Sozin attacks, and the Scheveningen, 5...e6 (Chapter 4).\n\n**Open Sicilian with 2...Nc6:** the Accelerated Dragon, 4...g6, and the Maróczy Bind (Chapter 3); the Sveshnikov, 4...Nf6 5.Nc3 e5, and the Kalashnikov, 4...e5 (Chapter 5).\n\n**Open Sicilian with 2...e6:** the Taimanov, 4...Nc6; the Kan, 4...a6; and the Four Knights (Chapter 6).\n\n**White's anti-Sicilians:** the Alapin, 2.c3, and the Smith–Morra Gambit, 2.d4 cxd4 3.c3 (Chapter 7); the Closed Sicilian and the Grand Prix Attack after 2.Nc3, plus 2.f4, 2.Bc4, 2.Qh5 and 2.b4 (Chapter 8); the Rossolimo, 3.Bb5, the Moscow, 3.Bb5+, and the King's Indian Attack (Chapter 9)."
    },
    {
      kind: 'walkthrough',
      title: 'A side road: the Closed Sicilian',
      intro: "Not every Sicilian opens up. In the Closed Sicilian, White keeps the d-pawn back and builds slowly.",
      moves: CLOSED,
      start: 2,
      orientation: 'white',
      steps: {
        2: {
          title: 'Another choice',
          text: '1...c5. Instead of 2.Nf3, White can develop the other knight first.',
          arrows: [['b1', 'c3', 'blue']]
        },
        3: {
          title: 'A flexible knight move',
          text: '2.Nc3. The knight guards d5 and e4. White can still play Nf3 and d4 later and reach an Open Sicilian, or keep the center closed.',
          arrows: [['c3', 'd5', 'green']]
        },
        4: {
          title: 'Black develops',
          text: '2...Nc6. Black brings out a knight that watches d4.',
          arrows: [['c6', 'd4', 'green']]
        },
        5: {
          title: 'A fianchetto',
          text: '3.g3. White prepares to put the bishop on g2. No d4 is coming soon: this is the Closed Sicilian.',
          arrows: [['f1', 'g2', 'blue']]
        },
        6: {
          title: 'Black copies',
          text: '3...g6. Black prepares a fianchetto too.',
          arrows: [['f8', 'g7', 'blue']]
        },
        7: {
          title: 'The bishop on g2',
          text: '4.Bg2. The bishop guards the e4-pawn from g2 and keeps watch over White\'s future castled king.',
          arrows: [['g2', 'e4', 'green']]
        },
        8: {
          title: 'The bishop on g7',
          text: '4...Bg7. Black\'s bishop looks down the long diagonal at the c3-knight and White\'s queenside.',
          arrows: [['g7', 'c3', 'blue']]
        },
        9: {
          title: 'A closed center',
          text: '5.d3. The d-pawn takes one step and supports e4. The center stays closed.',
          arrows: [['d3', 'e4', 'green']]
        },
        10: {
          title: 'Two plans',
          text: "5...d6. White's usual plan is a kingside attack with f4 and f5. Black usually expands on the queenside. Chapter 8 teaches both sides.",
          arrows: [['f2', 'f4', 'blue'], ['b7', 'b5', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: "Don't learn everything at once",
      body:
        'Nobody plays all of these. As Black, most players pick one family (2...d6, 2...Nc6 or 2...e6) and one system inside it. As White, most players pick the Open Sicilian or one anti-Sicilian. Module 9.8 helps you choose. Use this map to know where you are when an opponent surprises you.'
    }
  ],
  takeaway:
    "After 2.Nf3 and 3.d4, Black's main systems are the Najdorf, Dragon, Classical and Scheveningen (2...d6), the Sveshnikov and Accelerated Dragon (2...Nc6), and the Taimanov and Kan (2...e6). White's side roads are the Alapin, Smith–Morra, Closed, Rossolimo and Moscow.",
  lookAhead:
    "Chapter 2 starts with Black's most famous system: the Najdorf, 5...a6, and the three jobs that small pawn move does.",
  drills: [
    {
      title: 'Drive to the Sveshnikov',
      prompt: "You're Black. Play 2...Nc6, take on d4, hit e4 with your knight, and kick the d4-knight with your e-pawn.",
      moves: SVESH_5E5,
      start: 2,
      side: 'black',
      hints: ['2...Nc6, then 3...cxd4 and 4...Nf6.', 'After 5.Nc3, push the e-pawn two squares.'],
      success: '2...Nc6, 3...cxd4, 4...Nf6 and 5...e5. The Sveshnikov, taught in Chapter 5.'
    },
    {
      title: 'Take the Rossolimo exit',
      prompt: "You're White. Play 1.e4 and 2.Nf3, and after 2...Nc6, avoid the Open Sicilian with a bishop move.",
      moves: ROSSOLIMO,
      start: 0,
      side: 'white',
      hints: ['Your light-squared bishop can put pressure on the c6-knight.', '1.e4, 2.Nf3 and 3.Bb5.'],
      success: '1.e4 c5 2.Nf3 Nc6 3.Bb5. The Rossolimo, a favorite at the very top. Chapter 9 teaches it.'
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'Black has just played 5...g6. Which system is this?',
      moves: DRAGON,
      orientation: 'black',
      choices: [
        { text: 'The Dragon', correct: true, why: 'Right. The bishop will go to g7. Chapter 3 teaches it.' },
        { text: 'The Najdorf', why: 'The Najdorf is 5...a6. Here Black played ...g6.' },
        { text: 'The Scheveningen', why: 'The Scheveningen is 5...e6, with pawns on d6 and e6.' }
      ]
    },
    {
      type: 'name',
      prompt: 'White has just played 2.c3. What is this anti-Sicilian called?',
      moves: ALAPIN,
      orientation: 'white',
      choices: [
        { text: 'The Alapin', correct: true, why: 'Yes. 2.c3 prepares d4, so White can take back with a pawn. Chapter 7.' },
        { text: 'The Smith–Morra Gambit', why: 'The Morra is 2.d4 cxd4 3.c3: White gives up a pawn first. Here c3 comes at once.' },
        { text: 'The Closed Sicilian', why: 'The Closed starts with 2.Nc3 and a g3/Bg2 set-up.' }
      ]
    },
    {
      type: 'name',
      prompt: 'White has just played 3.Bb5+. What is it called?',
      moves: MOSCOW,
      orientation: 'white',
      choices: [
        { text: 'The Moscow', correct: true, why: 'Right. After 2...d6, the bishop checks on b5. Chapter 9.' },
        { text: 'The Rossolimo', why: 'The Rossolimo is 2...Nc6 3.Bb5, with no check. Here the bishop gives check because the d-pawn has moved.' },
        { text: 'The Venice Attack', why: 'The Venice Attack is 6.Bb5+ after 5...e5 in the Open Sicilian (Module 1.6).' }
      ]
    },
    {
      type: 'name',
      prompt: 'Black has just played 5...e5. Which system is this?',
      moves: SVESH_5E5,
      orientation: 'black',
      choices: [
        { text: 'The Sveshnikov', correct: true, why: 'Yes. With the knight on c6, ...e5 kicks the d4-knight at once. Chapter 5 teaches it.' },
        { text: 'The Kalashnikov', why: 'The Kalashnikov is 4...e5, one move earlier, before ...Nf6 and Nc3.' },
        { text: 'The Najdorf', why: 'The Najdorf comes after 2...d6 and 5...a6. Here Black played 2...Nc6.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Black has just played 4...Nc6. Which system is this?',
      moves: TAIMANOV,
      orientation: 'black',
      choices: [
        { text: 'The Taimanov', correct: true, why: 'Right. 2...e6 and 4...Nc6. Chapter 6 teaches it.' },
        { text: 'The Kan', why: 'The Kan is the other ...e6 system: 4...a6.' },
        { text: 'The Classical', why: 'The Classical comes after 2...d6 with 5...Nc6. Here Black played 2...e6.' }
      ]
    },
    {
      type: 'name',
      prompt: 'White has just played 3.c3. What is it called?',
      moves: MORRA,
      orientation: 'white',
      choices: [
        { text: 'The Smith–Morra Gambit', correct: true, why: 'Yes. White offers a pawn for quick development. Chapter 7 shows both sides.' },
        { text: 'The Alapin', why: 'The Alapin is 2.c3 at once. Here White played 2.d4 first and let Black take.' },
        { text: 'The Closed Sicilian', why: 'The Closed starts with 2.Nc3 and keeps the center closed.' }
      ]
    }
  ],
  key: { name: 'Open Sicilian crossroads: 5.Nc3', moves: OPEN, orientation: 'black' },
  terms: [
    { term: 'Open Sicilian', meaning: 'The main line, 2.Nf3 and 3.d4: White trades the d-pawn and the center opens up.' },
    { term: 'Closed Sicilian', meaning: 'A White set-up with Nc3, g3 and Bg2, where the d-pawn stays back and the center stays closed.' },
    { term: 'Gambit', meaning: 'An opening where one side gives up material, usually a pawn, for time or attack.' }
  ]
})
