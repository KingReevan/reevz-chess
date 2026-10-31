import { defineModule } from '../../../types'
import { MORPHY } from '../../../lines'

/** open (first moves): 5...Nxe4 6.d4 */
const GRAB = `${MORPHY} Nxe4 d4`
/** The same grab one move too late, after 5...Be7 6.Re1 */
const LATE = `${MORPHY} Be7 Re1 Nxe4 Rxe4`

export default defineModule({
  id: '6.1',
  title: '5...Nxe4: taking the center pawn',
  minutes: 10,
  level: 2,
  goals: [
    'See why the e4-pawn is free to take after 5.O-O',
    'Understand why Black must take now or never',
    "Learn White's fastest answer, 6.d4, and what it hits"
  ],
  intro:
    "After 4...Nf6 5.O-O, White has left the e4-pawn without a single defender. In the Open Defense, Black simply takes it. Is it really a free pawn? And what does White do about it?",
  sections: [
    {
      kind: 'text',
      title: 'A pawn with no guard',
      body:
        "Look at e4 after 5.O-O. The f3-knight doesn't reach it, the a4-bishop doesn't reach it, and the queen on d1 doesn't either. Nothing guards it.\n\nSo why would White allow 5...Nxe4? Because White's king is already safe on g1, while Black's king is still on e8. If the center opens now, the e-file points straight at Black's king. White plans to win the pawn back and gain time doing it.\n\nThat is the deal in the **Open Defense**: Black takes the pawn, gives it back later, and keeps active pieces in return."
    },
    {
      kind: 'walkthrough',
      title: 'The Open Defense begins',
      intro: "You're Black. Watch the e4-pawn at every step: who attacks it, and who guards it?",
      moves: GRAB,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'The bishop steps back',
          text: '4.Ba4. The bishop keeps its eye on the c6-knight, the only guard of e5. Black has a free move to develop.',
          arrows: [['a4', 'c6', 'yellow'], ['c6', 'e5', 'green']]
        },
        8: {
          title: 'A knight hits e4',
          text: '4...Nf6. The knight develops and attacks the e4-pawn at the same time. Developing with a threat gains time.',
          arrows: [['f6', 'e4', 'red']],
          marks: ['e4']
        },
        9: {
          title: 'White ignores it',
          text: "5.O-O. White castles and leaves e4 hanging on purpose. The king is safe, and the rook can reach e1 in one move.",
          arrows: [['f1', 'e1', 'blue']],
          marks: ['e4']
        },
        10: {
          title: 'Black takes the pawn',
          text: "5...Nxe4. This is the Open Defense. Black is a pawn up, and the knight stands in the middle of the board. But Black's king is still on e8.",
          arrows: [['e1', 'e8', 'blue']],
          marks: ['e8']
        },
        11: {
          title: 'White hits back at once',
          text: '6.d4. The pawn attacks e5. Now e5 is attacked twice (d4 and f3) and guarded only once, by the c6-knight. White wants the center open before Black can castle.',
          arrows: [['d4', 'e5', 'red'], ['f3', 'e5', 'red'], ['c6', 'e5', 'green']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Now or never',
      intro: "Why grab on move 5? Here Black waits one move. Watch what happens to the chance.",
      moves: LATE,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'The moment of choice',
          text: 'White has just castled. Right now e4 is unguarded. Black can take it, or develop quietly.',
          arrows: [['f6', 'e4', 'blue']],
          marks: ['e4']
        },
        10: {
          title: 'The quiet road',
          text: '5...Be7. Black develops and prepares to castle. This is the Closed Ruy Lopez (Chapter 4), a perfectly good choice. But it gives White a free move.',
          arrows: [['f8', 'e7', 'green']]
        },
        11: {
          title: 'The door shuts',
          text: '6.Re1. The rook now guards e4 along the e-file. The free pawn is gone.',
          arrows: [['e1', 'e4', 'green']],
          marks: ['e4']
        },
        12: {
          title: 'Grabbing too late',
          text: '6...Nxe4. The knight takes the pawn anyway, but this time the pawn was guarded.',
          arrows: [['e1', 'e4', 'red']],
          ann: '??'
        },
        13: {
          title: 'A knight for a pawn',
          text: '7.Rxe4. The rook takes the knight. Black has given a knight for one pawn. In the Open Defense, the grab only works on move 5.',
          marks: ['e4']
        }
      }
    },
    {
      kind: 'tip',
      title: 'The pawn is a loan',
      body:
        "Don't think of 5...Nxe4 as winning a pawn for keeps. In the main line White gets it back a few moves later. What Black really wins is time and space: a knight on a strong central square and quick, free development. Modules 6.2 and 6.3 show how."
    },
    {
      kind: 'text',
      title: 'Why 6.d4 is the main move',
      body:
        "White has other ways to chase the knight, but **6.d4** does the most. It attacks e5 at once. It opens the c1-bishop's diagonal. And it starts opening the center while Black's king is still in the middle.\n\nBlack has two answers. The main one is **6...b5**, getting ready to support the knight (next module). The sharp one is **6...exd4**, the Riga Variation (Module 6.8)."
    }
  ],
  takeaway:
    'After 5.O-O nothing guards e4, so Black takes it at once with 5...Nxe4. One move later 6.Re1 would guard it. White answers with 6.d4, hitting e5 and opening the center before Black can castle.',
  lookAhead:
    "Next: how Black holds the knight on e4 with 6...b5 and 7...d5, and why giving the pawn back is fine.",
  drills: [
    {
      title: 'Grab the pawn',
      prompt: "You're Black after 4.Ba4. Develop with a threat, then take the pawn when White leaves it unguarded.",
      moves: `${MORPHY} Nxe4`,
      start: 7,
      side: 'black',
      hints: ['Bring out a knight that attacks a white pawn.', 'After White castles, does anything guard e4?'],
      success: '4...Nf6 and 5...Nxe4. That is the Open Defense.'
    },
    {
      title: 'Punish the late grab',
      prompt: "You're White after 5...Be7. Guard your e4-pawn, then punish Black if the knight takes it anyway.",
      moves: LATE,
      start: 10,
      side: 'white',
      hints: ['Your rook can reach the e-file in one move.', 'The pawn on e4 was guarded. Take back.'],
      success: '6.Re1 and 7.Rxe4. Black gave a knight for a pawn. This is why the Open Defense grabs on move 5.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 5.O-O, which White piece guards the e4-pawn?',
      moves: MORPHY,
      orientation: 'black',
      choices: [
        { text: 'None. The pawn is unguarded', correct: true, why: 'Right. That is why 5...Nxe4 is possible right now.' },
        { text: 'The f3-knight', why: 'A knight on f3 covers d2, d4, e1, e5, g1, g5, h2 and h4. Not e4.' },
        { text: 'The a4-bishop', why: 'The a4-bishop looks at c6 and e8, and back toward d1. It never reaches e4.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Black plays 5...Be7 6.Re1 and only then 6...Nxe4. What goes wrong?',
      choices: [
        { text: 'The rook on e1 now guards e4, so 7.Rxe4 wins a knight for a pawn', correct: true, why: 'Yes. One quiet move gave White time for Re1. The grab only works on move 5.' },
        { text: 'Nothing. It is the same as the Open Defense', why: 'The difference is the rook on e1. In the Open Defense the pawn has no guard when Black takes it.' },
        { text: 'The knight gets pinned to the queen', why: "There's no pin. The knight is simply captured by the rook." }
      ]
    },
    {
      type: 'move',
      prompt: "White to move after 5...Nxe4. What is White's main reply?",
      moves: `${MORPHY} Nxe4`,
      orientation: 'white',
      choices: [
        { text: '6.d4', correct: true, why: 'It attacks e5 and opens the center while Black\'s king is still on e8.' },
        { text: '6.d3', why: "It attacks the knight, but the knight just steps back and White hasn't won anything yet. 6.d4 is faster." },
        { text: '6.c3', why: 'It prepares d4 but threatens nothing. Black gets a free move to develop.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Open Defense, what is Black really playing for?',
      choices: [
        { text: 'Active pieces and quick development. The pawn usually goes back', correct: true, why: 'Exactly. The extra pawn is a loan. Black keeps the time and the active knight.' },
        { text: 'Keeping the extra pawn whatever it costs', why: "Holding on to the pawn would leave Black's king in the center too long. Black gives it back." },
        { text: 'An early queen attack on h2', why: "That isn't the plan. Black develops normally and castles." }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Black has just taken on e4. What is this defense called?',
      moves: `${MORPHY} Nxe4`,
      orientation: 'black',
      choices: [
        { text: 'The Open Defense', correct: true, why: 'Right. 5...Nxe4 is the Open Defense, also called the Open Ruy Lopez.' },
        { text: 'The Closed Ruy Lopez', why: 'The Closed starts with 5...Be7, leaving the e4-pawn alone.' },
        { text: 'The Berlin Defense', why: 'The Berlin is 3...Nf6, without 3...a6 first.' },
        { text: 'The Marshall Attack', why: 'The Marshall is a pawn sacrifice with 8...d5 in the Closed.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 5...Nxe4 6.d4, which White pieces and pawns attack e5?',
      moves: GRAB,
      orientation: 'black',
      choices: [
        { text: 'The d4-pawn and the f3-knight', correct: true, why: 'Yes. Two attackers, and only the c6-knight defends.' },
        { text: 'Only the d4-pawn', why: 'Look at the f3-knight too. It has been aiming at e5 since move 2.' },
        { text: 'The d4-pawn and the a4-bishop', why: 'The bishop attacks the c6-knight, the guard of e5, but not e5 itself.' }
      ]
    }
  ],
  key: { name: 'Open Defense: 5...Nxe4', moves: `${MORPHY} Nxe4`, orientation: 'black' },
  terms: [
    { term: 'Open Defense', meaning: 'The Ruy Lopez line 5.O-O Nxe4. Also called the Open Ruy Lopez.' },
    { term: 'Development', meaning: 'Bringing pieces off the back rank to useful squares.' },
    { term: 'Hanging', meaning: 'A piece or pawn that is attacked and not defended. It can be taken for free.' }
  ]
})
