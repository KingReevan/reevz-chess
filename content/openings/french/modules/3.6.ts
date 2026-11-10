import { defineModule } from '../../../types'

/** side-2c4 (Steiner): 2.c4 d5 3.exd5 exd5 4.cxd5 Nf6 5.Nc3 Nxd5 6.Nf3 Nc6 */
const STEINER = 'e4 e6 c4 d5 exd5 exd5 cxd5 Nf6 Nc3 Nxd5 Nf3 Nc6'
/** side-2f4 (La Bourdonnais): 2.f4 d5 3.e5 c5 4.Nf3 Nc6 5.c3 Nh6 6.d4 Qb6 */
const F4 = 'e4 e6 f4 d5 e5 c5 Nf3 Nc6 c3 Nh6 d4 Qb6'
/** side-2b3 (Horwitz): 2.b3 d5 3.Bb2 dxe4 4.Nc3 Nf6 5.Qe2 Bb4 */
const B3 = 'e4 e6 b3 d5 Bb2 dxe4 Nc3 Nf6 Qe2 Bb4'
/** side-2nc3: 2.Nc3 d5 3.d4 */
const NC3 = 'e4 e6 Nc3 d5 d4'

export default defineModule({
  id: '3.6',
  title: '2.c4, 2.f4, 2.b3 and 2.Nc3',
  minutes: 11,
  level: 1,
  goals: [
    'Answer all four with the same idea: ...d5, then normal development',
    'Know what each White move aims for, and how 2.f4 and 2.Nc3 turn into French structures',
    'Avoid the 6.Nxe4? trap in the 2.b3 line'
  ],
  intro:
    "Not every White player meets 1...e6 with 2.d4. You will also see 2.c4, 2.f4, 2.b3 and 2.Nc3. You don't need deep theory against any of them. One simple rule works every time: play ...d5 anyway. This module shows what happens next in each case.",
  sections: [
    {
      kind: 'walkthrough',
      title: '2.c4: the Steiner Variation',
      intro: "White's c-pawn guards d5. Black plays ...d5 anyway.",
      moves: STEINER,
      start: 2,
      orientation: 'black',
      steps: {
        2: {
          title: 'The French move',
          text: '1...e6. Black prepares ...d5.',
          arrows: [['d7', 'd5', 'blue']]
        },
        3: {
          title: 'Guarding d5',
          text: '2.c4. The Steiner Variation. White\'s c-pawn covers d5, hoping to make ...d5 less attractive.',
          arrows: [['c4', 'd5', 'red']]
        },
        4: {
          title: '...d5 anyway',
          text: "2...d5. Black plays it anyway. It is the engine's first choice.",
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'White takes',
          text: '3.exd5. White trades the e-pawn.',
          arrows: [['e4', 'd5', 'red']]
        },
        6: {
          title: 'Take back',
          text: "3...exd5. No queen on e2 this time, so the e-pawn can recapture. Black's c8-bishop is free.",
          arrows: [['c8', 'g4', 'blue']]
        },
        7: {
          title: 'A pawn for a moment',
          text: '4.cxd5. White takes again and is a pawn up for now.',
          marks: ['d5']
        },
        8: {
          title: 'Develop first',
          text: '4...Nf6. The knight develops and attacks d5. 4...Qxd5 is playable, but 5.Nc3 would gain time on the queen.',
          arrows: [['f6', 'd5', 'red']]
        },
        9: {
          title: 'Guarding the pawn',
          text: '5.Nc3. The knight defends d5.',
          arrows: [['c3', 'd5', 'green']]
        },
        10: {
          title: 'Pawn back',
          text: '5...Nxd5. Black wins the pawn back. Material is equal.',
          arrows: [['f6', 'd5', 'red']]
        },
        11: {
          title: 'White develops',
          text: '6.Nf3. White brings out the other knight.',
          arrows: [['f3', 'd4', 'green']]
        },
        12: {
          title: 'Quick development',
          text: "6...Nc6. Black's pieces come out fast. White's d-pawn has no pawn neighbors on the c- or e-file, so it is isolated. The engine calls the position level.",
          marks: ['d2']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '2.f4: an Advance French with f4',
      intro: 'The La Bourdonnais Variation. After a few moves you will recognize the Advance from Chapter 2.',
      moves: F4,
      start: 2,
      orientation: 'black',
      steps: {
        2: {
          title: 'The French move',
          text: '1...e6. Black is ready for ...d5.',
          arrows: [['d7', 'd5', 'blue']]
        },
        3: {
          title: 'Kingside space',
          text: '2.f4. The La Bourdonnais Variation. White grabs space and prepares to support e4–e5 with the f-pawn.',
          arrows: [['f4', 'e5', 'green']]
        },
        4: {
          title: '...d5 again',
          text: '2...d5. The same rule: Black hits e4 with a pawn.',
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'The push',
          text: '3.e5. White pushes past, with the f4-pawn behind it. This looks like the Advance French.',
          arrows: [['f4', 'e5', 'green']]
        },
        6: {
          title: 'The French break',
          text: '3...c5. Black prepares to attack d4 as soon as White puts a pawn there, just as in the Advance.',
          arrows: [['c5', 'd4', 'red']]
        },
        7: {
          title: 'Knight out',
          text: '4.Nf3. White develops and covers d4.',
          arrows: [['f3', 'd4', 'green']]
        },
        8: {
          title: 'More pressure',
          text: '4...Nc6. The knight joins the fight for d4.',
          arrows: [['c6', 'd4', 'red']]
        },
        9: {
          title: 'Preparing d4',
          text: '5.c3. White gets ready to play d4 with pawn support.',
          arrows: [['c3', 'd4', 'green']]
        },
        10: {
          title: 'Heading for f5',
          text: "5...Nh6. The knight is going to f5, where it will hit d4. Even after d4, White's c1-bishop can't take it on h6: the f4-pawn blocks that diagonal.",
          arrows: [['h6', 'f5', 'blue'], ['f5', 'd4', 'red']]
        },
        11: {
          title: 'The Advance chain',
          text: '6.d4. White builds the d4–e5 chain, with an extra pawn on f4.',
          marks: ['d4', 'e5', 'f4']
        },
        12: {
          title: 'The usual queen move',
          text: "6...Qb6. As in Module 2.2, the queen hits b2 and lines up behind the c5-pawn against d4. White's pawns on d4, e5 and f4 all stand on dark squares, which hems in the c1-bishop. The engine slightly prefers Black.",
          arrows: [['b6', 'b2', 'red'], ['b6', 'd4', 'yellow']],
          marks: ['c1']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '2.b3: the Horwitz Attack',
      intro: "White's bishop goes to b2, aiming down the long diagonal. Black takes the e4-pawn.",
      moves: B3,
      start: 2,
      orientation: 'black',
      steps: {
        2: {
          title: 'The French move',
          text: '1...e6. Black is ready for ...d5.',
          arrows: [['d7', 'd5', 'blue']]
        },
        3: {
          title: 'A bishop to b2',
          text: '2.b3. The Horwitz Attack. White prepares Bb2.',
          arrows: [['c1', 'b2', 'blue']]
        },
        4: {
          title: '...d5 again',
          text: '2...d5. Black hits e4. Nothing defends it.',
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'The long diagonal',
          text: "3.Bb2. The bishop aims down the long diagonal toward g7. It does not defend e4, so White is offering a pawn.",
          arrows: [['b2', 'g7', 'blue']],
          marks: ['e4']
        },
        6: {
          title: 'Take the pawn',
          text: '3...dxe4. Black accepts. (Simply developing with ...Nc6 or ...Ne7 is just as good; the engine even slightly prefers it.)',
          arrows: [['d5', 'e4', 'red']]
        },
        7: {
          title: 'Hitting e4',
          text: '4.Nc3. The knight attacks the e4-pawn.',
          arrows: [['c3', 'e4', 'red']]
        },
        8: {
          title: 'Defend it',
          text: '4...Nf6. The knight develops and guards e4.',
          arrows: [['f6', 'e4', 'green']]
        },
        9: {
          title: 'A second attacker',
          text: '5.Qe2. Now e4 is attacked twice and defended once.',
          arrows: [['e2', 'e4', 'red'], ['c3', 'e4', 'red']]
        },
        10: {
          title: 'Hit the attacker',
          text: "5...Bb4. The bishop attacks the c3-knight, one of the attackers of e4. It is not a pin, because White's d2-pawn stands between the bishop and the king. But if the knight moves, the bishop will see d2. The engine calls the position about level.",
          arrows: [['b4', 'c3', 'red'], ['b4', 'd2', 'yellow']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'White: not 6.Nxe4?',
      body:
        "In the last position, grabbing the pawn with 6.Nxe4? is a mistake. After 6...Nxe4, the queen can't take back: 7.Qxe4?? Qxd2# is checkmate. The knight has left c3, so the b4-bishop now guards d2, and White's king has no escape. White has to play something like 7.c3, and Black stays a pawn up with a better game."
    },
    {
      kind: 'text',
      title: '2.Nc3: usually back to the main lines',
      body:
        "After **2.Nc3 d5**, White usually plays **3.d4**, and the game is the normal French with 3.Nc3 (the Rubinstein, the Classical and the Winawer in Chapters 5–7). If White plays **3.Nf3** instead, it is the Two Knights Variation from Module 3.5: 2.Nc3 d5 3.Nf3 and 2.Nf3 d5 3.Nc3 reach the same position.\n\nWhen two move orders reach the same position, it is called a **transposition**. Many sidelines transpose back into lines you already know, which is one more reason to stick to ...d5."
    }
  ],
  takeaway:
    "Against 2.c4, 2.f4, 2.b3 and 2.Nc3, play ...d5 and develop. 2.f4 leads to an Advance structure where ...Nh6–f5 is safe, and 2.Nc3 usually transposes to the main lines.",
  lookAhead:
    'Next: White plays 2.d4 but then defends e4 with the bishop. Module 3.7 covers 3.Bd3, the Schlechter Variation.',
  drills: [
    {
      title: 'Answer 2.c4',
      prompt: "You're Black. White has played 2.c4. Play ...d5 anyway, recapture, develop your king's knight, win the pawn back and bring out the other knight.",
      moves: STEINER,
      start: 3,
      side: 'black',
      hints: [
        "...d5 first. After 3.exd5, take back with the e-pawn.",
        "After 4.cxd5, don't take with the queen: develop the knight to f6 and win the pawn back with it."
      ],
      success: '2...d5, 3...exd5, 4...Nf6, 5...Nxd5 and 6...Nc6. Material is equal, Black is well developed, and the position is level.'
    },
    {
      title: 'Answer 2.f4',
      prompt: "You're Black. White has played 2.f4. Take the center, attack d4 the Advance way, and send your king's knight on its way to f5.",
      moves: F4,
      start: 3,
      side: 'black',
      hints: [
        '...d5, then ...c5 against the e5-pawn chain, then ...Nc6.',
        'The king\'s knight goes to h6 (the c1-bishop cannot take it). After 6.d4, the queen goes to b6.'
      ],
      success: '2...d5, 3...c5, 4...Nc6, 5...Nh6 and 6...Qb6. Next ...Nf5 hits d4, and the engine slightly prefers Black.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'White to move. Can White win the e4-pawn with 6.Nxe4?',
      moves: B3,
      orientation: 'white',
      choices: [
        { text: 'No: after 6...Nxe4 7.Qxe4?? Qxd2# is checkmate', correct: true, why: "Right. With the knight gone from c3, the b4-bishop guards d2, so the queen lands there with mate. 6.Nxe4 is a mistake." },
        { text: 'Yes: White simply wins the pawn back', why: 'After 6...Nxe4 the queen cannot take back, because of 7...Qxd2#. Black stays a pawn up.' },
        { text: 'Yes: after 6...Nxe4 7.Qxe4 Qxd2+ 8.Kxd2 White is fine', why: '8.Kxd2 is illegal: the b4-bishop defends the queen on d2. 7...Qxd2 is checkmate.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 5...Nh6 a good square for the knight here?',
      moves: 'e4 e6 f4 d5 e5 c5 Nf3 Nc6 c3 Nh6',
      orientation: 'black',
      choices: [
        { text: "It heads for f5 to hit d4, and White's c1-bishop can't take it because the f4-pawn blocks the diagonal", correct: true, why: 'Yes. In the normal Advance, Bxh6 is sometimes possible. Here the f4-pawn shuts that bishop in.' },
        { text: 'It prepares ...Ng4 to win the e5-pawn', why: 'Even with a knight on g4, the e5-pawn is defended by the f4-pawn and the f3-knight. The plan is ...Nf5 against d4.' },
        { text: 'It defends the g7-pawn', why: 'A knight on h6 does not guard g7. The knight is on its way to f5.' }
      ]
    },
    {
      type: 'name',
      prompt: 'Which White second move led to this position?',
      moves: 'e4 e6 c4 d5 exd5 exd5 cxd5 Nf6',
      orientation: 'black',
      choices: [
        { text: '2.c4, the Steiner Variation', correct: true, why: 'Right. White played c4, took twice on d5, and Black wins the pawn back with ...Nxd5.' },
        { text: '2.f4, the La Bourdonnais Variation', why: "In that line White's f-pawn moves and the e-pawn usually goes to e5. Here White's c-pawn has taken on d5." },
        { text: '2.b3, the Horwitz Attack', why: "In the Horwitz White's b-pawn moves and the bishop goes to b2. Here the b2-pawn hasn't moved." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 2.Nc3 d5 3.d4, what position is on the board?',
      moves: NC3,
      orientation: 'black',
      choices: [
        { text: 'The normal French with 3.Nc3, reached by a different move order', correct: true, why: 'Yes. This is a transposition: the same position as 1.e4 e6 2.d4 d5 3.Nc3.' },
        { text: 'The Two Knights Variation', why: 'The Two Knights needs Nf3 and Nc3 with no d4. Here White has played d4.' },
        { text: 'The Exchange Variation', why: 'No pawns have been traded. The Exchange starts with exd5 exd5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: "What is Black's simple rule against 2.c4, 2.f4, 2.b3 and 2.Nc3?",
      choices: [
        { text: 'Play ...d5 anyway, then develop normally', correct: true, why: 'Right. ...d5 is good against all four, and Black gets a good game in every case.' },
        { text: 'Copy White\'s second move', why: 'Copying gives White the lead in a mirror position. ...d5 fights for the center at once.' },
        { text: 'Avoid ...d5 and play ...c5 instead', why: '...c5 is fine against 2.Qe2, but against these four moves ...d5 is the simplest and the engine likes it.' }
      ]
    },
    {
      type: 'concept',
      prompt: "After 6...Nc6 in the Steiner line, which White pawn is isolated?",
      moves: STEINER,
      orientation: 'black',
      choices: [
        { text: 'The d2-pawn', correct: true, why: "Yes. White's c- and e-pawns are gone, so no pawn can ever defend the d-pawn." },
        { text: 'The b2-pawn', why: 'The a2-pawn stands next to it, so the b2-pawn is not isolated.' },
        { text: 'None of them', why: "Look at the d2-pawn: there are no White pawns on the c- or e-file anymore." }
      ]
    }
  ],
  key: { name: 'La Bourdonnais 2.f4: 5...Nh6 heads for f5', moves: 'e4 e6 f4 d5 e5 c5 Nf3 Nc6 c3 Nh6', orientation: 'black' },
  terms: [
    { term: 'Transposition', meaning: 'Reaching the same position by a different order of moves.' },
    { term: 'Gambit', meaning: 'An opening in which one side gives up material, usually a pawn, for time or open lines.' },
    { term: 'Dark squares', meaning: 'The squares of the same color as a1. A bishop that starts on c1 (for White) or f8 (for Black) only ever stands on dark squares.' }
  ]
})
