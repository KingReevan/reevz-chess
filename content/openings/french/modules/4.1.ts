import { defineModule } from '../../../types'
import { FRENCH, TARRASCH } from '../lines'

/** win-5a3: 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 (the pin that 3.Nd2 avoids) */
const WINAWER_PIN = `${FRENCH} Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3`
/** tar-3nf6: 3...Nf6 4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6 7.Ne2 */
const CLOSED_SETUP = `${TARRASCH} Nf6 e5 Nfd7 Bd3 c5 c3 Nc6 Ne2`
/** 3...Bb4?! 4.c3 Be7 5.e5 (engine-checked: White is better) */
const EARLY_PIN = `${TARRASCH} Bb4 c3 Be7 e5`

export default defineModule({
  id: '4.1',
  title: '3.Nd2: why the knight goes to d2',
  minutes: 9,
  level: 2,
  goals: [
    'Know what 3.Nd2 gains: no ...Bb4 pin, and a free c-pawn for c3',
    'Know what it costs: the c1-bishop is stuck behind the knight for a while',
    "Recognize Black's four main answers and where the course teaches them"
  ],
  intro:
    "After 2...d5, White has to look after the e4-pawn. 3.Nc3 is the most natural defender, but it lets Black pin the knight with 3...Bb4. Siegbert Tarrasch's 3.Nd2 defends e4 from a different square. What does White gain, and what does it cost?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The pin that 3.Nd2 avoids',
      intro: 'First, the problem. Watch the diagonal from b4 to e1 after 3.Nc3.',
      moves: WINAWER_PIN,
      start: 4,
      orientation: 'white',
      steps: {
        4: {
          title: 'The French position',
          text: "2...d5. Black's pawn hits e4. White usually defends it, pushes it or trades it. The two main ways to defend it with a knight are 3.Nc3 and 3.Nd2.",
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'The natural defender',
          text: '3.Nc3. The knight defends e4 and also hits d5. But it stands on the diagonal from b4 to White\'s king on e1.',
          arrows: [['c3', 'e4', 'green'], ['c3', 'd5', 'red']],
          marks: ['b4']
        },
        6: {
          title: 'The Winawer pin',
          text: "3...Bb4. The bishop pins the knight to the king. A pinned knight can't move, so it can't take back on e4 if Black plays ...dxe4.",
          arrows: [['b4', 'e1', 'red']],
          marks: ['c3', 'e4']
        },
        7: {
          title: 'White closes the center',
          text: '4.e5. White pushes the pawn forward, so there is nothing left to take on e4. The center is locked.',
          arrows: [['e4', 'e5', 'green']]
        },
        8: {
          title: 'Black hits the base',
          text: '4...c5. Black attacks d4, the base of the pawn chain.',
          arrows: [['c5', 'd4', 'red']]
        },
        9: {
          title: 'Asking the bishop',
          text: '5.a3. White asks the bishop: take the knight or retreat.',
          arrows: [['a3', 'b4', 'red']]
        },
        10: {
          title: 'Bishop for knight',
          text: '5...Bxc3+. Black gives up the dark-squared bishop for the knight, with check.',
          arrows: [['c3', 'e1', 'red']]
        },
        11: {
          title: 'Doubled pawns',
          text: "6.bxc3. White has the two bishops, but doubled c-pawns, and the game turns sharp (Chapter 7). Players who want to avoid all this choose 3.Nd2.",
          marks: ['c2', 'c3']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '3.Nd2 and the c3-pawn',
      intro: 'Now the Tarrasch. Keep an eye on the c-pawn and on the bishop on c1.',
      moves: CLOSED_SETUP,
      start: 4,
      orientation: 'white',
      steps: {
        4: {
          title: 'Defend e4 another way',
          text: '2...d5. Black attacks e4 again. This time White defends it with the queen\'s knight from d2.',
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'The Tarrasch',
          text: '3.Nd2. The knight defends e4. Two things to notice: the c-pawn can still go to c3, and the c1-bishop is now stuck behind the knight.',
          arrows: [['d2', 'e4', 'green'], ['c2', 'c3', 'blue']],
          marks: ['c1']
        },
        6: {
          title: 'A second attacker',
          text: '3...Nf6. Now e4 is attacked twice (by the d5-pawn and the f6-knight) and defended only once, by the d2-knight.',
          arrows: [['f6', 'e4', 'red'], ['d5', 'e4', 'red']]
        },
        7: {
          title: 'White pushes past',
          text: '4.e5. White gains space and kicks the knight. This is the closed Tarrasch.',
          arrows: [['e5', 'f6', 'red']]
        },
        8: {
          title: 'The knight steps back',
          text: '4...Nfd7. From d7 the knight will support ...c5 and ...f6, the two French breaks.',
          arrows: [['d7', 'c5', 'blue'], ['d7', 'e5', 'blue']]
        },
        9: {
          title: 'The bishop comes out',
          text: '5.Bd3. The f1-bishop goes to its best diagonal, aiming at h7. White is not afraid of ...c5.',
          arrows: [['d3', 'h7', 'blue']]
        },
        10: {
          title: 'Hit the base',
          text: '5...c5. Black attacks d4, just as in every French with a locked center.',
          arrows: [['c5', 'd4', 'red']]
        },
        11: {
          title: 'The point of Nd2',
          text: '6.c3. This is why the knight went to d2: the c-pawn is free to support d4. With a knight on c3, this move would be impossible.',
          arrows: [['c3', 'd4', 'green']],
          ann: '!'
        },
        12: {
          title: 'More pressure on d4',
          text: '6...Nc6. Black adds a second attacker on d4: the c5-pawn and the c6-knight.',
          arrows: [['c6', 'd4', 'red'], ['c5', 'd4', 'red']]
        },
        13: {
          title: 'Two against two',
          text: '7.Ne2. The g1-knight defends d4 a second time, and it leaves the f-pawn free. The d2-knight will go to f3 later, and only then can the c1-bishop come out. Module 4.6 shows what Black does next.',
          arrows: [['e2', 'd4', 'green'], ['d2', 'f3', 'blue']],
          marks: ['c1']
        }
      }
    },
    {
      kind: 'text',
      title: 'Pros and cons of 3.Nd2',
      body:
        "**Pros.** The knight defends e4 but can't be pinned for long. If Black tries 3...Bb4, the answer 4.c3 attacks the bishop and puts a pawn between it and the d2-knight in one move. And the c-pawn stays free to go to c3, where it supports d4.\n\n**Cons.** The knight on d2 blocks the c1-bishop, and it blocks the queen's view down the d-file to d4. It also puts less pressure on Black's center: a knight on c3 attacks d5, a knight on d2 does not. That is why Black can hit back at once with 3...c5."
    },
    {
      kind: 'walkthrough',
      title: 'A pin that does not last',
      intro: 'What if Black plays 3...Bb4 anyway? The pin exists, but only for one move.',
      moves: EARLY_PIN,
      start: 5,
      orientation: 'white',
      steps: {
        5: {
          title: 'The Tarrasch',
          text: '3.Nd2. The diagonal from b4 to e1 is open: only the d2-knight stands on it, with c3 still empty.',
          marks: ['b4', 'c3']
        },
        6: {
          title: 'A Winawer-style pin',
          text: '3...Bb4. The bishop does pin the d2-knight to the king. But here White has a pawn that can kick it.',
          arrows: [['b4', 'e1', 'red']],
          ann: '?!'
        },
        7: {
          title: 'Kick and block',
          text: '4.c3. The pawn attacks the bishop and stands between it and the d2-knight. The pin is gone, and the pawn also supports d4.',
          arrows: [['c3', 'b4', 'red'], ['c3', 'd4', 'green']],
          ann: '!'
        },
        8: {
          title: 'Back again',
          text: '4...Be7. The bishop retreats. Black has spent two moves to put it on e7, a square it could reach in one.',
          arrows: [['b4', 'e7', 'blue']]
        },
        9: {
          title: 'White grabs space',
          text: '5.e5. White pushes past d5 and gains space. White is clearly better: the c3-pawn came for free, and Black has lost time.',
          arrows: [['e4', 'e5', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: "Black's four main answers",
      body:
        "**3...c5** strikes at d4 at once, the engine's first choice. After 4.exd5 Black can take back with the queen (Module 4.2) or with the pawn (Modules 4.3 and 4.4). White can also play 4.Ngf3 (Module 4.5).\n\n**3...Nf6** hits e4 again. After 4.e5 Nfd7 we get the closed Tarrasch from the second walkthrough (Module 4.6).\n\n**3...Be7** is Morozevich's waiting move (Module 4.7).\n\n**3...dxe4** trades on e4 and leads to a Rubinstein. Module 4.8 shows it, with the rarer 3...Nc6 and 3...a6, and Chapter 5 teaches it in full."
    },
    {
      kind: 'history',
      title: 'Named after Tarrasch',
      body:
        "3.Nd2 is named after the German master Siegbert Tarrasch. It is one of White's main answers to the French. Anatoly Karpov used it to great effect in the 1970s and early 1980s. He also chose it in his 1978 World Championship match against Viktor Korchnoi (Module 4.4)."
    }
  ],
  takeaway:
    "3.Nd2 defends e4 without allowing a lasting ...Bb4 pin and keeps the c-pawn free for c3. The price is that the c1-bishop stays shut in until the d2-knight moves on, often to f3.",
  lookAhead:
    "Next: Black's most direct answer, 3...c5. Module 4.2 shows what happens when Black takes back on d5 with the queen.",
  drills: [
    {
      title: 'Build the closed Tarrasch',
      prompt: "You're White. Defend e4 with the knight that keeps your c-pawn free. Against ...Nf6, push past, develop your f1-bishop, support d4 with a pawn and bring your g1-knight to a square where it also guards d4.",
      moves: CLOSED_SETUP,
      start: 4,
      side: 'white',
      hints: [
        'Your first move is 3.Nd2. Then answer 3...Nf6 by pushing the e-pawn.',
        'After 5...c5, support d4 with the c-pawn. After 6...Nc6, the g1-knight goes to e2, not f3.'
      ],
      success: '3.Nd2, 4.e5, 5.Bd3, 6.c3 and 7.Ne2. d4 is attacked twice and defended twice, and the f-pawn is still free.'
    },
    {
      title: 'Break the early pin',
      prompt: "You're White. Black tried 3...Bb4, pinning your d2-knight. Kick the bishop with a pawn that also blocks the diagonal. After it retreats, push your e-pawn to gain space.",
      moves: EARLY_PIN,
      start: 6,
      side: 'white',
      hints: ['Which pawn can attack b4 and stand between b4 and d2?', 'After 4...Be7, push the e-pawn one square.'],
      success: '4.c3 and 5.e5. The pin lasted one move, and White is clearly better.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "Black has just played 3...Bb4. Why is this pin much weaker than the Winawer pin after 3.Nc3?",
      moves: `${TARRASCH} Bb4`,
      orientation: 'white',
      choices: [
        { text: '4.c3 attacks the bishop and blocks the diagonal in one move', correct: true, why: 'Right. After 3.Nc3 the knight itself sits on c3, so no pawn can go there. After 3.Nd2, the c-pawn can.' },
        { text: 'The bishop on b4 is not pinning anything', why: 'It is: the d2-knight stands between b4 and the king on e1. The point is that 4.c3 ends the pin at once.' },
        { text: 'White can castle out of the pin', why: "White's f1-bishop and g1-knight are still at home, so castling is several moves away. 4.c3 solves the problem right now." }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the main drawback of 3.Nd2?',
      choices: [
        { text: 'It blocks the c1-bishop until the knight moves on', correct: true, why: 'Yes. The bishop on c1 is boxed in by the b2-pawn and the d2-knight. In the closed Tarrasch it comes out only after the knight goes to f3.' },
        { text: 'It leaves the e4-pawn undefended', why: 'The knight on d2 defends e4. That is the main job of 3.Nd2.' },
        { text: 'It lets Black pin the knight for a long time', why: 'A ...Bb4 pin is broken at once by c3. Avoiding the lasting pin is a plus of 3.Nd2.' }
      ]
    },
    {
      type: 'move',
      prompt: "You're White. Black has hit the base of your chain with 5...c5. What is the best move?",
      moves: `${TARRASCH} Nf6 e5 Nfd7 Bd3 c5`,
      orientation: 'white',
      choices: [
        { text: '6.c3', correct: true, why: 'Right. The c-pawn supports d4, which is the whole point of putting the knight on d2.' },
        { text: '6.dxc5', why: 'This gives up the base of the chain. After 6...Nxe5 the e5-pawn falls too, and Black is better.' },
        { text: '6.Ngf3', why: 'After 6...cxd4 White has no pawn to take back with, so the chain loses its base. 6.c3 keeps the chain together.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why can Black hit back with 3...c5 straight away against 3.Nd2?',
      moves: `${TARRASCH} c5`,
      orientation: 'black',
      choices: [
        { text: "The d2-knight doesn't attack d5, so White puts less pressure on Black's center", correct: true, why: 'Right. A knight on c3 would hit d5. From d2 it only defends e4, so Black can open the center at once.' },
        { text: 'The e4-pawn is now hanging', why: 'The d2-knight still defends e4. 3...c5 is about d4 and the center, not about winning e4.' },
        { text: 'White cannot answer with 4.exd5', why: 'White can, and often does. Modules 4.2 to 4.4 show what happens after 4.exd5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'White has just played 3.Nd2. What is this variation called?',
      moves: TARRASCH,
      orientation: 'white',
      choices: [
        { text: 'The Tarrasch Variation', correct: true, why: 'Yes. 3.Nd2 is named after Siegbert Tarrasch.' },
        { text: 'The Winawer Variation', why: 'The Winawer is 3.Nc3 Bb4, where Black pins the c3-knight.' },
        { text: 'The Advance Variation', why: 'The Advance is 3.e5, pushing the pawn instead of defending it.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which pawn move does 3.Nd2 keep available that 3.Nc3 takes away?',
      choices: [
        { text: 'c2–c3, supporting d4', correct: true, why: 'Right. With the knight on d2, the c-pawn can go to c3 to back up d4 when Black plays ...c5.' },
        { text: 'e4–e5, gaining space', why: 'White can push e5 after 3.Nc3 too, as in the Winawer and the Classical.' },
        { text: 'f2–f4, supporting e5', why: 'Neither knight move stops f4. The c-pawn is the one that 3.Nc3 blocks.' }
      ]
    }
  ],
  key: { name: 'Tarrasch Variation: 3.Nd2', moves: TARRASCH, orientation: 'white' },
  terms: [
    { term: 'Tarrasch Variation', meaning: 'The French with 3.Nd2, named after Siegbert Tarrasch. The knight defends e4 from d2.' },
    { term: 'Pin', meaning: 'A piece that cannot move, or should not, because a more valuable piece stands behind it on the same line.' },
    { term: 'Winawer Variation', meaning: 'The French with 3.Nc3 Bb4, where Black pins the c3-knight to White\'s king.' },
    { term: 'Base of the pawn chain', meaning: 'The rearmost pawn of a diagonal chain, here White\'s d4-pawn. Black attacks it with ...c5.' }
  ]
})
