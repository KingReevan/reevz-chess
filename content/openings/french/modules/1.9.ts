import { defineModule } from '../../../types'
import { FRENCH, CLASSICAL, TARRASCH, WINAWER } from '../lines'

/** tar-3dxe4: 3.Nd2 dxe4 4.Nxe4 Nd7 5.Nf3 Ngf6 (the Rubinstein, reached from the Tarrasch) */
const TAR_DXE4 = `${TARRASCH} dxe4 Nxe4 Nd7 Nf3 Ngf6`

export default defineModule({
  id: '1.9',
  title: "Map of White's third moves",
  minutes: 9,
  level: 1,
  goals: [
    "Name White's main third moves after 2...d5",
    "Know Black's three answers to 3.Nc3",
    'Know which chapter of this course teaches each line'
  ],
  intro:
    "After 1.e4 e6 2.d4 d5, White has a handful of real choices, and after 3.Nc3 Black has three. That is the whole shape of the French. This module walks the main roads, points out every exit, and tells you which chapter teaches each one.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main road and its exits',
      intro: 'At each step, the arrows show the main move and the side roads.',
      moves: CLASSICAL,
      start: 1,
      orientation: 'black',
      steps: {
        1: {
          title: 'The start',
          text: '1.e4. Black answers 1...e6, the French Defense.',
          arrows: [['e7', 'e6', 'green']]
        },
        2: {
          title: "White's second move",
          text: '1...e6. White almost always plays 2.d4. Early side roads such as 2.d3 (the King\'s Indian Attack), 2.Qe2, 2.Nf3, 2.c4, 2.f4, 2.b3 and 2.Nc3 are all in Chapter 3.',
          arrows: [['d2', 'd4', 'green'], ['d2', 'd3', 'blue'], ['g1', 'f3', 'blue']]
        },
        3: {
          title: 'Black hits e4',
          text: '2.d4. Black answers 2...d5, attacking e4. Now White usually defends it, pushes it or trades it.',
          arrows: [['d7', 'd5', 'green']]
        },
        4: {
          title: "White's third move",
          text: '2...d5. The crossroads. 3.Nc3 defends e4 (Chapters 5, 6 and 7). 3.Nd2, the Tarrasch, defends it from d2 (Chapter 4). 3.e5, the Advance, pushes (Chapter 2). 3.exd5, the Exchange, trades (Chapter 3). The rare 3.Bd3 and the gambits 3.Be3 and 3.c4 are in Chapter 3 too.',
          arrows: [['b1', 'c3', 'green'], ['b1', 'd2', 'blue'], ['e4', 'e5', 'blue']]
        },
        5: {
          title: "Black's three answers",
          text: '3.Nc3. The most common move. Black chooses: 3...Bb4, the Winawer (Chapter 7); 3...Nf6, the Classical (Chapter 6); or 3...dxe4, the Rubinstein (Chapter 5).',
          arrows: [['f8', 'b4', 'blue'], ['g8', 'f6', 'green'], ['d5', 'e4', 'blue']]
        },
        6: {
          title: 'The Classical',
          text: "3...Nf6. The knight hits e4 a second time. White can push with 4.e5 (the Steinitz), pin with 4.Bg5 or trade with 4.exd5. Chapter 6 teaches all three.",
          arrows: [['e4', 'e5', 'blue'], ['c1', 'g5', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The Tarrasch, and a road that joins another',
      intro: 'The other knight move. Watch how one line can arrive in a position from another chapter.',
      moves: TAR_DXE4,
      start: 4,
      orientation: 'white',
      steps: {
        4: {
          title: 'The crossroads again',
          text: '2...d5. This time White defends e4 with the other knight.',
          arrows: [['b1', 'd2', 'green']]
        },
        5: {
          title: 'The Tarrasch',
          text: "3.Nd2. The knight defends e4 and leaves the c-pawn free to go to c3. If Black pins it with ...Bb4, c2–c3 simply kicks the bishop away. The price: the knight blocks the c1-bishop for now. Black's main answers are 3...c5, 3...Nf6 and 3...Be7 (Chapter 4).",
          arrows: [['d2', 'e4', 'green'], ['c2', 'c3', 'blue']]
        },
        6: {
          title: 'Black gives up the center',
          text: '3...dxe4. Black trades the d-pawn for the e-pawn.',
          marks: ['e4']
        },
        7: {
          title: 'The same position',
          text: '4.Nxe4. This is exactly the position after 3.Nc3 dxe4 4.Nxe4: the Rubinstein (Chapter 5). Reaching the same position by a different move order is called a transposition.',
          marks: ['e4']
        },
        8: {
          title: 'Rubinstein set-up',
          text: '4...Nd7. Black prepares ...Ngf6, so that a knight can take back if White trades on f6.',
          arrows: [['g8', 'f6', 'blue']]
        },
        9: {
          title: 'White develops',
          text: '5.Nf3. The knight develops and guards d4.',
          arrows: [['f3', 'd4', 'green']]
        },
        10: {
          title: 'Chapter 5 starts here',
          text: '5...Ngf6. The Rubinstein main line. Whether White started with 3.Nc3 or 3.Nd2, Chapter 5 is the place to study it.',
          arrows: [['f6', 'e4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The whole map',
      body:
        "**3.e5, the Advance Variation:** Chapter 2. Black hits the chain with ...c5, ...Nc6 and ...Qb6.\n\n**3.exd5 exd5, the Exchange Variation:** Chapter 3, together with White's early side roads: 2.d3, 2.Qe2, 2.Nf3, 2.c4, 2.f4, 2.b3 and 2.Nc3, and the rare third moves 3.Bd3 (the Schlechter), 3.Be3 (the Alapin Gambit) and 3.c4 (the Diemer–Duhm Gambit).\n\n**3.Nd2, the Tarrasch Variation:** Chapter 4.\n\n**3.Nc3 and Black's answers:** 3...dxe4, the Rubinstein, and its cousin Fort Knox (Chapter 5); 3...Nf6, the Classical (Chapter 6); 3...Bb4, the Winawer (Chapter 7).\n\n**Chapter 8** ties it all together: the plans and sacrifices that appear in many of these lines, and the classic French games."
    },
    {
      kind: 'tip',
      title: "Don't learn everything at once",
      body:
        'Nobody plays all of these. As Black, most players pick one answer to 3.Nc3 (the Winawer, the Classical or the Rubinstein) and one to 3.Nd2. As White, most players pick one third move. Module 8.8 helps you choose. Use this map to know where you are when an opponent surprises you.'
    }
  ],
  takeaway:
    "After 2...d5, White chooses 3.Nc3, 3.Nd2 (Tarrasch, Chapter 4), 3.e5 (Advance, Chapter 2) or 3.exd5 (Exchange, Chapter 3). Against 3.Nc3, Black chooses 3...Bb4 (Winawer, Chapter 7), 3...Nf6 (Classical, Chapter 6) or 3...dxe4 (Rubinstein, Chapter 5).",
  lookAhead:
    "Chapter 2 starts with the Advance Variation, 3.e5: White's space, Black's attack on the chain, and the fight for d4 you met in this chapter.",
  drills: [
    {
      title: 'The main road as White',
      prompt: "You're White. Play the first three moves of the main road: the king's pawn, the queen's pawn, then defend e4 with the queen's knight.",
      moves: `${FRENCH} Nc3`,
      start: 0,
      side: 'white',
      hints: ['1.e4 and 2.d4 build the center.', 'After 2...d5, the b1-knight goes to c3 and defends e4.'],
      success: '1.e4, 2.d4 and 3.Nc3. Now Black chooses between the Winawer, the Classical and the Rubinstein.'
    },
    {
      title: 'Choose the Classical',
      prompt: "You're Black. Play the French, and when White plays 3.Nc3, develop your king's knight and attack e4 again.",
      moves: CLASSICAL,
      start: 0,
      side: 'black',
      hints: ['1...e6 and 2...d5 first.', 'Against 3.Nc3, the g8-knight goes to f6.'],
      success: '1...e6, 2...d5 and 3...Nf6. The Classical Variation, the subject of Chapter 6.'
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'Black has just played 3...Bb4. What is this line called, and where is it taught?',
      moves: WINAWER,
      orientation: 'black',
      choices: [
        { text: 'The Winawer, Chapter 7', correct: true, why: 'Right. The bishop pins the c3-knight, the defender of e4.' },
        { text: 'The Classical, Chapter 6', why: 'The Classical is 3...Nf6. 3...Bb4 is the Winawer.' },
        { text: 'The Tarrasch, Chapter 4', why: 'The Tarrasch is a White choice, 3.Nd2. Here White played 3.Nc3 and Black answered 3...Bb4.' }
      ]
    },
    {
      type: 'name',
      prompt: 'White has just played 3.e5. Which variation is this?',
      moves: `${FRENCH} e5`,
      orientation: 'white',
      choices: [
        { text: 'The Advance Variation', correct: true, why: 'Right. White pushes the e-pawn and the chains lock. Chapter 2 teaches it.' },
        { text: 'The Exchange Variation', why: 'The Exchange is 3.exd5, where White trades the e-pawn.' },
        { text: 'The Tarrasch Variation', why: 'The Tarrasch is 3.Nd2, defending e4 with a knight.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does White put the knight on d2 in the Tarrasch?',
      moves: TARRASCH,
      orientation: 'white',
      choices: [
        { text: 'The c-pawn stays free to go to c3, which also kicks a bishop on b4', correct: true, why: 'Right. On c3 the knight can be pinned by ...Bb4, the Winawer. From d2 it defends e4, and c3 stays free for a pawn.' },
        { text: "From d2 the knight attacks Black's d5-pawn", why: 'A knight on d2 reaches b1, b3, c4, e4, f1 and f3. It defends e4 but does not attack d5.' },
        { text: 'It opens the way for the c1-bishop', why: 'The opposite: the knight on d2 blocks the c1-bishop for a while. That is the price of 3.Nd2.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Which move orders reach the Rubinstein position after 4.Nxe4?',
      choices: [
        { text: 'Both 3.Nc3 dxe4 4.Nxe4 and 3.Nd2 dxe4 4.Nxe4', correct: true, why: 'Right. The pieces end up on the same squares, so it is the same position: a transposition.' },
        { text: 'Only 3.Nc3 dxe4 4.Nxe4', why: 'After 3.Nd2 dxe4 4.Nxe4 the knight from b1 is on e4 just the same, so the positions are identical.' },
        { text: 'Only 3.Nd2 dxe4 4.Nxe4', why: 'The usual way is 3.Nc3 dxe4 4.Nxe4. Both orders give the same position.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: "Which chapter of this course teaches White's early side roads, such as 2.d3 and 2.Qe2?",
      choices: [
        { text: 'Chapter 3', correct: true, why: 'Right. Chapter 3 covers the Exchange Variation and the early sidelines and gambits.' },
        { text: 'Chapter 1', why: "Chapter 1 teaches the foundations: the pawn chain, the breaks and the c8-bishop. The sidelines are in Chapter 3." },
        { text: 'Chapter 8', why: 'Chapter 8 is about plans, sacrifices and classic games. The sidelines are in Chapter 3.' }
      ]
    },
    {
      type: 'name',
      prompt: 'Black has just played 3...Nf6. Which line is this, and what are White\'s three main replies?',
      moves: CLASSICAL,
      orientation: 'black',
      choices: [
        { text: 'The Classical: 4.e5, 4.Bg5 or 4.exd5', correct: true, why: 'Right. Push, pin or trade. Chapter 6 teaches all three.' },
        { text: 'The Winawer: 4.e5, 4.a3 or 4.Qg4', why: 'Those are replies to 3...Bb4, the Winawer. 3...Nf6 is the Classical.' },
        { text: 'The Rubinstein: 4.Nxe4 only', why: 'The Rubinstein starts with 3...dxe4. Here Black developed the knight instead.' }
      ]
    }
  ],
  key: { name: 'Map: 3.Nd2 dxe4 heads for the Rubinstein', moves: `${TARRASCH} dxe4`, orientation: 'white' },
  terms: [
    { term: 'Variation', meaning: 'A named branch of an opening, such as the Advance Variation (3.e5) or the Winawer (3...Bb4).' },
    { term: 'Transposition', meaning: 'Reaching the same position by a different move order, like 3.Nd2 dxe4 4.Nxe4 and 3.Nc3 dxe4 4.Nxe4.' },
    { term: 'Side road', meaning: 'A less common move that leaves the main lines, such as 2.d3 or 3.Bd3. Also called a sideline.' }
  ]
})
