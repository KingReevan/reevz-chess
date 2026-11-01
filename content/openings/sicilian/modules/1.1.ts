import { defineModule } from '../../../types'
import { SICILIAN } from '../lines'

/** open-2d6-3d4: 1.e4 c5 2.Nf3 d6 3.d4 */
const OPEN_3D4 = 'e4 c5 Nf3 d6 d4'
/** For comparison: 1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.Nxd4 (the Scotch Game), where Black copies White */
const MIRROR = 'e4 e5 Nf3 Nc6 d4 exd4 Nxd4'

export default defineModule({
  id: '1.1',
  title: 'Meet the Sicilian: why 1...c5?',
  minutes: 10,
  level: 1,
  goals: [
    'See which center square 1...c5 fights for',
    'Understand why the Sicilian is an unbalanced opening',
    "Know White's main plan: 2.Nf3 and 3.d4"
  ],
  intro:
    'Most beginners answer 1.e4 with 1...e5 and copy White. In the Sicilian Defense, Black plays 1...c5 instead: a pawn on the side of the board. Why would a pawn on the c-file be a good answer to a pawn in the center? This module shows what 1...c5 does, and how White usually replies.',
  sections: [
    {
      kind: 'walkthrough',
      title: 'A side pawn that fights for the center',
      intro: 'Press Next and watch the square d4. Both sides want it.',
      moves: OPEN_3D4,
      start: 0,
      orientation: 'black',
      steps: {
        0: {
          title: 'The four center squares',
          text: 'The squares d4, e4, d5 and e5 are the center. Pieces and pawns there have the most room to move and the most influence on the game.',
          marks: ['d4', 'e4', 'd5', 'e5']
        },
        1: {
          title: 'White takes the center',
          text: "1.e4. White puts a pawn in the center. It controls d5 and f5, and it opens lines for White's queen and the f1-bishop.",
          arrows: [['e4', 'd5', 'yellow'], ['e4', 'f5', 'yellow']]
        },
        2: {
          title: 'The Sicilian Defense',
          text: "1...c5. Black doesn't copy White. The c-pawn attacks d4 from the side, so White can't simply put a pawn there for free. This move is the Sicilian Defense.",
          arrows: [['c5', 'd4', 'red']],
          marks: ['d4']
        },
        3: {
          title: 'White eyes d4 too',
          text: "2.Nf3. White's main move. The knight develops toward the center and also watches d4. White is getting ready to push the d-pawn.",
          arrows: [['f3', 'd4', 'green'], ['d2', 'd4', 'blue']]
        },
        4: {
          title: 'A quiet, useful pawn move',
          text: '2...d6. This is the most common second move. The pawn controls e5, and it opens a diagonal for the c8-bishop.',
          arrows: [['d6', 'e5', 'green'], ['c8', 'g4', 'blue']]
        },
        5: {
          title: 'White opens the center',
          text: "3.d4. White's main plan. The c5-pawn attacks d4, but the knight and queen defend it. Black almost always takes, 3...cxd4, and Module 1.3 shows why that trade suits both sides.",
          arrows: [['c5', 'd4', 'red'], ['f3', 'd4', 'green'], ['d1', 'd4', 'green']],
          marks: ['d4']
        }
      }
    },
    {
      kind: 'text',
      title: 'What "unbalanced" means',
      body:
        "When both sides play the same kind of moves, the position stays **symmetrical**: the pawns mirror each other, and both players have similar plans.\n\nThe Sicilian breaks the mirror on move one. White's pawn stands in the center, Black's stands on the side. Later, White usually trades the d-pawn for Black's c-pawn. Then the two sides have **different pawns**, and so **different plans**. That is what players mean when they call the Sicilian unbalanced. It makes the game harder to play, but it gives both sides chances to win."
    },
    {
      kind: 'walkthrough',
      title: 'Compare: when Black copies White',
      intro: "Here Black answers 1.e4 with 1...e5. The same kind of trade on d4 happens, but with the e-pawn. Count the center pawns at the end.",
      moves: MIRROR,
      start: 0,
      orientation: 'white',
      steps: {
        0: {
          title: 'The same start',
          text: 'The starting position again. This time Black will copy White.',
          marks: ['d4', 'e4', 'd5', 'e5']
        },
        1: {
          title: 'White takes the center',
          text: '1.e4. The same first move as before.',
          marks: ['e4']
        },
        2: {
          title: 'Black copies',
          text: "1...e5. Black puts a pawn in the center too. The pawns now mirror each other.",
          marks: ['e4', 'e5']
        },
        3: {
          title: 'A knight attacks e5',
          text: "2.Nf3. White develops and attacks the e5-pawn.",
          arrows: [['f3', 'e5', 'red']]
        },
        4: {
          title: 'The knight defends',
          text: '2...Nc6. Black develops a knight and defends e5.',
          arrows: [['c6', 'e5', 'green']]
        },
        5: {
          title: 'White opens the center',
          text: "3.d4. White pushes the d-pawn, just like in the Sicilian. This opening is called the Scotch Game.",
          arrows: [['d4', 'e5', 'red'], ['e5', 'd4', 'red']]
        },
        6: {
          title: 'A center pawn takes',
          text: "3...exd4. Black trades with the e-pawn. That is a center pawn going away.",
          marks: ['d4']
        },
        7: {
          title: 'One center pawn each',
          text: "4.Nxd4. Each side has one center pawn left: White's e-pawn and Black's d-pawn. In the Sicilian, Black makes the same trade with the c-pawn, so Black keeps both center pawns.",
          marks: ['e4', 'd7']
        }
      }
    },
    {
      kind: 'history',
      title: 'Four hundred years of 1...c5',
      body:
        'Giulio Polerio analyzed 1...c5 in 1594, though he did not call it the Sicilian. Jacob Henry Sarratt settled the English name in 1813, after an old Italian manuscript that called it "il gioco siciliano", the Sicilian game. In the 1800s many strong players distrusted it: Paul Morphy criticized it, and Wilhelm Steinitz preferred 1...e5. In the 20th century, players such as Najdorf, Fischer and Kasparov turned it into the most played answer to 1.e4.'
    },
    {
      kind: 'tip',
      title: 'White has other second moves',
      body:
        "2.Nf3 followed by 3.d4 is the main line, called the **Open Sicilian** because the center opens up. Many White players prefer to avoid it with moves like 2.c3, 2.Nc3 or 3.Bb5. These are called **anti-Sicilians**, and this course teaches them too. Module 1.9 gives you the full map."
    }
  ],
  takeaway:
    '1...c5 fights for the d4-square from the side instead of copying White. White usually answers 2.Nf3 and 3.d4, and the game is unbalanced from the very first moves.',
  lookAhead:
    "Before we go further, Module 1.2 makes sure you can read every move in this course, using the Open Sicilian's own moves.",
  drills: [
    {
      title: 'Play the first moves as Black',
      prompt: "You're Black. Answer 1.e4 with the Sicilian, then play the main moves until White's d4-pawn is gone.",
      moves: `${OPEN_3D4} cxd4`,
      start: 0,
      side: 'black',
      hints: ['Start with the c-pawn. After 2.Nf3, push your d-pawn one square.', '1...c5, 2...d6, and when White plays 3.d4, take it with the c-pawn.'],
      success: '1...c5, 2...d6 and 3...cxd4. Your c-pawn has traded itself for a White center pawn.'
    },
    {
      title: 'Play the first moves as White',
      prompt: "You're White. Start with the king's pawn, develop the knight that watches d4, then open the center.",
      moves: OPEN_3D4,
      start: 0,
      side: 'white',
      hints: ['Your second move is a knight move toward the center.', '1.e4, 2.Nf3 and 3.d4.'],
      success: '1.e4, 2.Nf3 and 3.d4. That is the start of the Open Sicilian, the main line of this course.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Which center square does the pawn on c5 attack?',
      moves: SICILIAN,
      orientation: 'black',
      choices: [
        { text: 'd4', correct: true, why: 'Right. A pawn captures one square diagonally forward, so from c5 it attacks b4 and d4.' },
        { text: 'd5', why: 'A pawn attacks diagonally, not straight ahead. From c5 the pawn hits b4 and d4, not d5.' },
        { text: 'e5', why: 'e5 is too far away. The c5-pawn only attacks b4 and d4. Moves like ...d6 or ...Nc6 control e5.' }
      ]
    },
    {
      type: 'move',
      prompt: "White to move. Which move carries out White's main plan of opening the center?",
      moves: 'e4 c5 Nf3 d6',
      orientation: 'white',
      choices: [
        { text: '3.d4', correct: true, why: 'Yes. White offers the d-pawn so that the center opens while White is ahead in development. This is the Open Sicilian.' },
        { text: '3.Bc4', why: 'A reasonable developing move, but it does not open the center. White\'s main plan is to open it with 3.d4.' },
        { text: '3.Nc3', why: 'A sound developing move, but it does not open the center. The main line is 3.d4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why do players call the Sicilian an "unbalanced" opening?',
      choices: [
        { text: 'The two sides get different pawns and different plans', correct: true, why: 'Exactly. Black answers a center pawn with a side pawn, so the position does not mirror itself.' },
        { text: 'Black gives up a pawn on the first move', why: '1...c5 gives up nothing. When White pushes d4, the pawns are traded one for one.' },
        { text: 'White cannot castle in the Sicilian', why: 'White can castle on either side. Unbalanced means the pawns and plans differ.' }
      ]
    },
    {
      type: 'concept',
      prompt: "After 3.d4, which White pieces defend the d4-pawn?",
      moves: OPEN_3D4,
      orientation: 'white',
      choices: [
        { text: 'The knight on f3 and the queen on d1', correct: true, why: 'Yes. The knight jumps to d4, and the queen sees d4 now that the d-pawn has left d2.' },
        { text: 'Only the knight on f3', why: 'Look down the d-file. With the d-pawn gone from d2, the queen on d1 also guards d4.' },
        { text: 'The knight on f3 and the bishop on c1', why: 'The c1-bishop moves on dark squares toward e3 and h6. Its diagonal does not reach d4.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Who first analyzed 1...c5, in 1594?',
      choices: [
        { text: 'Giulio Polerio', correct: true, why: 'Right. Polerio analyzed it in a 1594 manuscript, long before it had its name.' },
        { text: 'Jacob Henry Sarratt', why: 'Sarratt came later. He settled the English name "Sicilian" in 1813.' },
        { text: 'Bobby Fischer', why: 'Fischer made the Sicilian famous in the 20th century, more than 300 years after Polerio.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 1.e4 c5 2.Nf3 d6 3.d4, the c5-pawn attacks d4. Why doesn\'t White lose a pawn?',
      moves: OPEN_3D4,
      orientation: 'white',
      choices: [
        { text: 'After 3...cxd4, White takes back with the knight: 4.Nxd4', correct: true, why: 'Right. The pawns are traded one for one: White\'s d-pawn for Black\'s c-pawn.' },
        { text: 'The c5-pawn is pinned and cannot take', why: 'Nothing pins the c5-pawn. Black can take, and usually does.' },
        { text: 'White gives up the pawn on purpose for quick development', why: 'That is the idea of the Smith–Morra Gambit (Chapter 7). Here nothing is given away: White simply takes back with the knight.' }
      ]
    }
  ],
  key: { name: 'Sicilian Defense: 1...c5', moves: SICILIAN, orientation: 'black' },
  terms: [
    { term: 'Center', meaning: 'The four middle squares: d4, e4, d5 and e5. Pieces there control the most squares.' },
    { term: 'Development', meaning: 'Moving pieces off their starting squares so they can join the game.' },
    { term: 'Unbalanced position', meaning: 'A position where the two sides have different pawns, pieces or plans, instead of mirror images.' },
    { term: 'Anti-Sicilian', meaning: 'Any White second or third move that avoids the Open Sicilian (2.Nf3 and 3.d4), such as 2.c3 or 3.Bb5.' }
  ]
})
