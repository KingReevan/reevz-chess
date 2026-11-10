import { defineModule } from '../../../types'
import { ADVANCE, ADVANCE_QB6, FRENCH } from '../lines'

/** adv-5bd7: 5...Bd7 6.Be2 Nge7 7.Na3 cxd4 8.cxd4 Nf5 9.Nc2 Qb6 10.O-O (the Euwe, used here for the knight route and the count) */
const EUWE = `${ADVANCE} Bd7 Be2 Nge7 Na3 cxd4 cxd4 Nf5 Nc2 Qb6 O-O`

export default defineModule({
  id: '2.1',
  title: "3.e5: White's space and Black's plan",
  minutes: 10,
  level: 2,
  goals: [
    'See what the push 3.e5 gains for White, and what it costs',
    'Learn Black\'s plan: ...c5, ...Nc6 and ...Qb6, all aimed at d4',
    'Count attackers and defenders on d4 after every move'
  ],
  intro:
    "After 1.e4 e6 2.d4 d5, White can push 3.e5. The pawns lock, White grabs space, and the game turns into a fight over one pawn: d4, the base of White's pawn chain. This module shows how both sides line up their pieces for that fight, and how to keep count.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Black hits the base, White holds it',
      intro: 'After every move, count how many black pieces attack d4 and how many white pieces defend it.',
      moves: ADVANCE_QB6,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The French position',
          text: "2...d5. Black's pawn attacks e4. White usually defends it, trades it or pushes it.",
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'The Advance',
          text: "3.e5. White pushes past the attack. Now the pawns are locked: White's chain d4–e5 faces Black's chain e6–d5. The e5-pawn takes away f6 from Black's g8-knight and d6 from the f8-bishop.",
          arrows: [['e5', 'f6', 'red'], ['e5', 'd6', 'red']],
          marks: ['d4']
        },
        6: {
          title: 'Attack the base',
          text: '3...c5. Black attacks d4, the rearmost pawn of the chain (its base). If d4 falls, the e5-pawn loses its support. Count: one attacker (the c5-pawn), one defender (the d1-queen).',
          arrows: [['c5', 'd4', 'red'], ['d1', 'd4', 'green']],
          marks: ['d4']
        },
        7: {
          title: 'A pawn behind the base',
          text: '4.c3. Now d4 has two defenders: the c3-pawn and the queen. And if Black trades with ...cxd4, White takes back with the c-pawn and keeps a pawn on d4.',
          arrows: [['c3', 'd4', 'green'], ['d1', 'd4', 'green']]
        },
        8: {
          title: 'The second attacker',
          text: "4...Nc6. Two attackers now: the c5-pawn and the c6-knight. The knight also hits the e5-pawn, which so far only the d4-pawn guards.",
          arrows: [['c6', 'd4', 'red'], ['c6', 'e5', 'red']]
        },
        9: {
          title: 'The third defender',
          text: '5.Nf3. The knight guards d4 and e5 at the same time. Count: d4 is attacked twice and defended three times (the c3-pawn, the f3-knight and the queen). Note that Black\'s d8-queen does not count: Black\'s own d5-pawn blocks the d-file.',
          arrows: [['f3', 'd4', 'green'], ['f3', 'e5', 'green']],
          marks: ['d4']
        },
        10: {
          title: 'The queen joins in',
          text: "5...Qb6. The queen lines up behind the c5-pawn. It can't hit d4 yet, but once the c-pawns are traded the diagonal opens and it becomes a real attacker. It also attacks b2, which only the c1-bishop guards.",
          arrows: [['b6', 'd4', 'yellow'], ['b6', 'b2', 'red']],
          marks: ['d4', 'b2']
        }
      }
    },
    {
      kind: 'text',
      title: 'What each side wants',
      body:
        "**White** has more space, especially on the kingside, where the e5-pawn points. Black's pieces have fewer good squares there: the g8-knight can't use f6, and the f8-bishop can't use d6. White's job is to **keep d4 standing**, so that the e5-pawn stays supported, then develop and castle.\n\n**Black** has a clear target. The French rule is: attack a pawn chain at its base. So Black piles up on d4 with ...c5, ...Nc6 and ...Qb6, and often brings a knight to f5 as well. Later Black can also hit the head of the chain, e5, with ...f6.\n\nThe whole chapter is about one simple habit: **before you take on d4, or before you let it be taken, count.**"
    },
    {
      kind: 'walkthrough',
      title: 'Three against three: a knight route for each side',
      intro: 'A different fifth move for Black, the Euwe Variation 5...Bd7 (Module 2.8 has more on it). Watch how each side brings one extra piece to d4.',
      moves: EUWE,
      start: 9,
      orientation: 'white',
      steps: {
        9: {
          title: 'White is set up',
          text: '5.Nf3. As before, d4 is attacked twice and defended three times.',
          arrows: [['c3', 'd4', 'green'], ['f3', 'd4', 'green'], ['d1', 'd4', 'green']]
        },
        10: {
          title: 'The bishop first',
          text: '5...Bd7. Black develops the c8-bishop first and keeps ...Qb6 for later, to see what White does.',
          arrows: [['c8', 'd7', 'green']]
        },
        11: {
          title: 'Ready to castle',
          text: "6.Be2. The bishop on e2 does not block the queen's line from d1 to d4, so the queen keeps guarding d4.",
          arrows: [['d1', 'd4', 'green']]
        },
        12: {
          title: 'The knight goes around',
          text: "6...Nge7. The knight can't go to f6, because the e5-pawn guards it. So it heads for f5 through e7. From f5 it will hit d4.",
          arrows: [['e7', 'f5', 'blue'], ['e5', 'f6', 'red']]
        },
        13: {
          title: "White's knight goes around too",
          text: '7.Na3. The knight is heading for c2. From there it will guard d4, which a knight on c3 could never do.',
          arrows: [['a3', 'c2', 'blue']]
        },
        14: {
          title: 'Trading the c-pawns',
          text: '7...cxd4. Black opens the c-file. After the trade, no white pawn can guard d4 any more: only pieces can.',
          arrows: [['c5', 'd4', 'red']]
        },
        15: {
          title: 'Taking back',
          text: '8.cxd4. Count: d4 is attacked once (the c6-knight) and defended twice (the f3-knight and the queen).',
          arrows: [['c6', 'd4', 'red'], ['f3', 'd4', 'green'], ['d1', 'd4', 'green']]
        },
        16: {
          title: 'The knight arrives',
          text: '8...Nf5. Two attackers now: the c6-knight and the f5-knight. Two against two.',
          arrows: [['c6', 'd4', 'red'], ['f5', 'd4', 'red']],
          marks: ['d4']
        },
        17: {
          title: 'A third defender',
          text: '9.Nc2. The knight arrives on c2 and guards d4. Now d4 has three defenders: the f3-knight, the c2-knight and the queen.',
          arrows: [['c2', 'd4', 'green'], ['f3', 'd4', 'green'], ['d1', 'd4', 'green']]
        },
        18: {
          title: 'A third attacker',
          text: "9...Qb6. With the c5-pawn gone, the queen's diagonal to d4 is open. Three attackers: the two knights and the queen.",
          arrows: [['b6', 'd4', 'red'], ['c6', 'd4', 'red'], ['f5', 'd4', 'red']]
        },
        19: {
          title: 'Three against three',
          text: '10.O-O. d4 holds: taking on it now, for example 10...Nfxd4?, just loses material. Black usually turns to the c-file with ...Rc8 instead. The engine gives White a small edge.',
          marks: ['d4']
        }
      }
    },
    {
      kind: 'tip',
      title: 'How to count',
      body:
        "List every piece that attacks the square, then every piece that defends it. A piece only counts if its path is clear: Black's d8-queen does not attack d4 through its own d5-pawn, and the b6-queen does not hit d4 until the c5-pawn has gone. If the attackers do not outnumber the defenders, taking usually loses material. Modules 2.2 and 2.7 show exactly what happens when Black takes anyway."
    }
  ],
  takeaway:
    "3.e5 gives White space but makes d4 the target. Black attacks it with ...c5, ...Nc6, ...Qb6 and often a knight on f5; White defends it with c3, Nf3, the queen and sometimes a knight on c2. Count before anyone takes.",
  lookAhead: 'Module 2.2 looks closely at 5...Qb6: why the queen goes there, and what it does to b2 and to White\'s plans.',
  drills: [
    {
      title: "Black's set-up",
      prompt: "You're Black. White has pushed 3.e5. Attack the base of the chain with a pawn, then add a knight and the queen.",
      moves: ADVANCE_QB6,
      start: 5,
      side: 'black',
      hints: ['The base of the chain is d4. Which pawn can attack it?', 'After ...c5, bring the b8-knight to c6, then put the queen on b6.'],
      success: '3...c5, 4...Nc6 and 5...Qb6. Three units now aim at d4, with the queen lined up behind the c5-pawn.'
    },
    {
      title: "White's set-up",
      prompt: "You're White. Black has hit d4 with 3...c5. Support d4 with a pawn, then with a knight.",
      moves: `${FRENCH} e5 c5 c3 Nc6 Nf3`,
      start: 6,
      side: 'white',
      hints: ['Which pawn can protect d4, so that after ...cxd4 you can take back with a pawn?', 'After 4...Nc6, develop the g1-knight to a square where it guards both d4 and e5.'],
      success: '4.c3 and 5.Nf3. d4 is attacked twice and defended three times, and the f3-knight also guards e5.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "After 3.e5, which square does the e5-pawn take away from Black's g8-knight?",
      moves: `${FRENCH} e5`,
      orientation: 'black',
      choices: [
        { text: 'f6', correct: true, why: "Right. A pawn attacks the squares diagonally in front of it: from e5 that is d6 and f6. A knight on f6 would just be taken." },
        { text: 'e7', why: 'e7 is free. It is the knight\'s usual first stop on the way to f5.' },
        { text: 'h6', why: 'h6 is free too. The knight can go there and then to f5, as in the Lputian (Module 2.4).' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Count the d4-pawn. How many times is it attacked and how many times is it defended?',
      moves: ADVANCE,
      orientation: 'black',
      choices: [
        { text: 'Attacked twice, defended three times', correct: true, why: 'Yes. The c5-pawn and the c6-knight attack; the c3-pawn, the f3-knight and the d1-queen defend.' },
        { text: 'Attacked three times, defended three times', why: "The d8-queen does not count: Black's own d5-pawn blocks the d-file." },
        { text: 'Attacked twice, defended twice', why: 'You missed a defender. The c3-pawn, the f3-knight and the d1-queen all guard d4.' }
      ]
    },
    {
      type: 'move',
      prompt: "Black to play. Which move fits Black's plan best?",
      moves: ADVANCE,
      orientation: 'black',
      choices: [
        { text: '5...Qb6', correct: true, why: 'Right. The queen lines up against d4 and also attacks b2. It is the main move here.' },
        { text: '5...Bd6', why: 'The e5-pawn attacks d6: 6.exd6 wins a piece for a pawn.' },
        { text: '5...Nf6', why: 'The e5-pawn attacks f6: 6.exf6 wins a piece for a pawn. That is why the knight goes to e7 or h6 instead.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does White play 4.c3?',
      moves: `${FRENCH} e5 c5 c3`,
      orientation: 'white',
      choices: [
        { text: 'So that after ...cxd4, White takes back with a pawn and keeps a pawn on d4', correct: true, why: "Yes. Without c3, White would have to take back on d4 with a piece, and the e5-pawn would lose its pawn support." },
        { text: 'To attack the c5-pawn', why: 'Pawns attack diagonally. The c3-pawn attacks b4 and d4, not c5.' },
        { text: 'To make room for the b1-knight on c3', why: 'The pawn now stands on c3, so the knight usually goes to d2 or a3 instead.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Black to move. d4 is attacked three times. Can Black win the pawn?',
      moves: EUWE,
      orientation: 'black',
      choices: [
        { text: 'No. It is defended three times too, so taking loses material', correct: true, why: 'Right. The f3-knight, the c2-knight and the queen guard d4. After 10...Nfxd4? Black loses a piece for a pawn.' },
        { text: 'Yes. Three attackers are always enough', why: 'Three attackers against three defenders is not enough. The attackers have to outnumber the defenders.' },
        { text: 'Yes, if the queen takes first', why: 'The queen is the most valuable attacker. 10...Qxd4 11.Nfxd4 just loses the queen for a pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In this position, which White pieces defend d4?',
      moves: EUWE,
      orientation: 'white',
      choices: [
        { text: 'The f3-knight, the c2-knight and the d1-queen', correct: true, why: 'Yes. The two knights and the queen on the open d-file all guard d4.' },
        { text: 'The f3-knight, the e2-bishop and the d1-queen', why: 'The e2-bishop moves on the f1–a6 and d1–h5 diagonals. It does not guard d4.' },
        { text: 'The c2-knight, the c1-bishop and the d1-queen', why: 'The c1-bishop covers d2, e3 and f4, not d4. You missed the f3-knight.' }
      ]
    }
  ],
  key: { name: 'Advance: 4.c3 Nc6 5.Nf3', moves: ADVANCE, orientation: 'black' },
  terms: [
    { term: 'Advance Variation', meaning: 'The French with 3.e5: White pushes the e-pawn past the d5-pawn and locks the center.' },
    { term: 'Base of the chain', meaning: "The rearmost pawn of a diagonal pawn chain. White's base is d4. Attacking it undermines the whole chain." },
    { term: 'Space', meaning: 'Room for your pieces behind your pawns. The e5-pawn gives White more space on the kingside.' }
  ]
})
