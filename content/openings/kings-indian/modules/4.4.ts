import { defineModule } from '../../../types'
import { MDP_G5 } from '../lines'

/** mdp-13rc1 */
const KOZUL = `${MDP_G5} Rc1 Ng6 c5 Nxc5 b4 Na6 Nd3`
/** mdp-13a4 */
const SPACE = `${MDP_G5} a4 Ng6 a5 Rf7`

export default defineModule({
  id: '4.4',
  title: '13.Rc1 Ng6 14.c5 and 13.a4',
  minutes: 10,
  level: 3,
  goals: [
    'Understand the pawn offer 14.c5 and what White gets for it',
    'Know the key follow-up: 15.b4 drives the knight to a6',
    'Compare it with the slower plan 13.a4 and 14.a5'
  ],
  intro:
    'After 12...g5, White has several good moves, and the engine rates many of them about the same. This module covers two of the main ones. 13.Rc1 and 14.c5 gives up a pawn to open the queenside at once. 13.a4 grabs space first and keeps the pawn.',
  sections: [
    {
      kind: 'walkthrough',
      title: 'The pawn offer: 13.Rc1 Ng6 14.c5',
      intro: "Watch Black's knight: where it goes is what White gets for the pawn.",
      moves: KOZUL,
      start: 24,
      orientation: 'white',
      steps: {
        24: {
          title: 'Choosing a plan',
          text: "The position after 12...g5. Black's kingside storm is getting closer. 13.Rc1 is the most direct answer: it prepares c4–c5 at once, without waiting for a knight on d3.",
          arrows: [['g5', 'g4', 'red']]
        },
        25: {
          title: 'Rook to c1',
          text: '13.Rc1. The rook takes the c-file. White plans c4–c5 next move.',
          arrows: [['c1', 'c7', 'blue']]
        },
        26: {
          title: 'Black builds',
          text: '13...Ng6. Black brings the knight toward the kingside attack.',
          arrows: [['g6', 'h4', 'blue']]
        },
        27: {
          title: 'A pawn on offer',
          text: "14.c5. Black's d6-pawn and d7-knight both attack c5, and only the f2-bishop guards it. White knows that. This is a gambit: a pawn given up on purpose to open lines.",
          arrows: [['d7', 'c5', 'red'], ['d6', 'c5', 'red'], ['f2', 'c5', 'green']],
          marks: ['c5']
        },
        28: {
          title: 'Black accepts',
          text: "14...Nxc5. Taking is Black's best. Black is a pawn up, and the c-file is half-open: White has no c-pawn left, and Black's c7-pawn is the target at the end of it.",
          arrows: [['c1', 'c7', 'blue']],
          marks: ['c7']
        },
        29: {
          title: 'Kicking the knight',
          text: '15.b4! The pawn attacks the knight, and it has only one good square. After 15...b6? 16.bxc5 Black gets only a pawn for the knight, and 15...Nd7? lets 16.Nb5 head for c7 with a big advantage for White.',
          arrows: [['b4', 'c5', 'red']],
          ann: '!'
        },
        30: {
          title: 'Off to the edge',
          text: '15...Na6. The knight is safe, but on the edge of the board, far from the kingside where Black wants it. From a6 it guards c7 and hits the b4-pawn.',
          arrows: [['a6', 'c7', 'green'], ['a6', 'b4', 'red']]
        },
        31: {
          title: 'Pressure for the pawn',
          text: '16.Nd3. The knight guards b4 and eyes c5 again, and Nb5 is coming. White is a pawn down, but the engine calls the position roughly equal.',
          arrows: [['d3', 'b4', 'green'], ['c3', 'b5', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'What White gets for the pawn',
      body:
        "**Time.** Black's knight spent two moves (...Nxc5 and ...Na6) going to the edge of the board instead of joining the kingside attack.\n\n**Lines.** The c-file is half-open, and once the c3-knight moves, White's rook aims straight at the c7-pawn. A knight on b5 will add pressure on c7 and a7.\n\nlichess calls this pawn offer the **Kozul Gambit**. It is one of White's most popular tries in this position."
    },
    {
      kind: 'walkthrough',
      title: 'Space first: 13.a4',
      intro: 'Back to 12...g5. This time White keeps the c-pawn and grabs queenside space first.',
      moves: SPACE,
      start: 24,
      orientation: 'white',
      steps: {
        24: {
          title: 'Same position',
          text: 'The position after 12...g5 again. Instead of giving a pawn, White starts with the a-pawn.',
          arrows: [['a2', 'a4', 'green']]
        },
        25: {
          title: 'The a-pawn advances',
          text: '13.a4. The pawn heads for a5 to gain space. White can still choose between c4–c5 and b2–b4 later.',
          arrows: [['a4', 'a5', 'green']]
        },
        26: {
          title: 'Black lets it come',
          text: '13...Ng6. Black carries on with the kingside plan. The engine prefers 13...a5, which stops the a-pawn in its tracks.',
          arrows: [['a7', 'a5', 'blue']]
        },
        27: {
          title: 'The pawn reaches a5',
          text: '14.a5. The pawn now controls b6. If Black ever plays ...b6 to hold c5, White can take on b6 and open the a-file for the a1-rook.',
          arrows: [['a5', 'b6', 'red'], ['a1', 'a7', 'blue']]
        },
        28: {
          title: 'The usual defense',
          text: '14...Rf7. The rook guards c7, as in Modules 4.2 and 4.3, and can later swing to g7 for the attack. The engine judges White better here: the queenside play has a head start.',
          arrows: [['f7', 'c7', 'green']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Which plan should you choose?',
      body:
        "**13.Rc1 and 14.c5** is the sharpest: you pay a pawn to open lines at once. **13.a4** keeps the material and builds up first. Either way, every white move should help the queenside, because Black's kingside attack will not wait."
    }
  ],
  takeaway:
    "In 13.Rc1 Ng6 14.c5, White gives a pawn: after 14...Nxc5 15.b4! the knight must go to a6, and the half-open c-file gives White play. 13.a4–a5 is the calmer way, gaining space first.",
  lookAhead: "Next: the Bayonet 9.b4, where White starts the queenside attack before Black's ...f5 has even arrived.",
  drills: [
    {
      title: 'Play the gambit',
      prompt: "You're White, after 12...g5. Prepare c4–c5, give the pawn, chase the knight and bring your other knight into play.",
      moves: KOZUL,
      start: 24,
      side: 'white',
      hints: ['Rook to the file you are about to open, then push the c-pawn.', 'After ...Nxc5, a pawn move kicks the knight. Then the e1-knight comes to d3.'],
      success: '13.Rc1, 14.c5, 15.b4 and 16.Nd3. Black is a pawn up, but the knight is stuck on a6 and the c-file is yours.'
    },
    {
      title: 'Space first',
      prompt: "You're White, after 12...g5. Gain space on the queenside with the a-pawn.",
      moves: `${MDP_G5} a4 Ng6 a5`,
      start: 24,
      side: 'white',
      hints: ['Which pawn can march two squares toward b6?', 'Push it twice: a4, then a5.'],
      success: '13.a4 and 14.a5. The pawn controls b6 and gives White more room on the queenside.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black has just taken the pawn with 14...Nxc5. What is White\'s best move?',
      moves: `${MDP_G5} Rc1 Ng6 c5 Nxc5`,
      orientation: 'white',
      choices: [
        { text: '15.b4', correct: true, why: "Right. The pawn kicks the knight, and its only good square is a6, on the edge of the board." },
        { text: '15.Bxc5', why: 'This gives up the good bishop. After 15...dxc5 Black is still a pawn up and the engine slightly prefers Black.' },
        { text: '15.Nb5', why: 'Natural, but it leaves the knight on c5. The engine prefers 15.b4, which drives it to the edge.' }
      ]
    },
    {
      type: 'concept',
      prompt: "After 15.b4, why does Black's knight go to a6?",
      moves: `${MDP_G5} Rc1 Ng6 c5 Nxc5 b4`,
      orientation: 'white',
      choices: [
        { text: 'It is the only good square: the others lose material or let White in', correct: true, why: 'Right. ...b6 loses the knight to bxc5, and ...Nd7 lets Nb5 head for c7.' },
        { text: "From a6 it attacks White's king", why: "White's king is on g1, far away. On a6 the knight is offside, which is part of White's compensation." },
        { text: 'It plans to come back to c5 next move', why: 'The b4-pawn still controls c5, so the knight cannot return there.' }
      ]
    },
    {
      type: 'name',
      prompt: 'What does lichess call White\'s pawn offer in this line?',
      moves: `${MDP_G5} Rc1 Ng6 c5`,
      orientation: 'white',
      choices: [
        { text: 'The Kozul Gambit', correct: true, why: 'Right. 13.Rc1 Ng6 14.c5 is filed under that name.' },
        { text: 'The Bayonet Attack', why: 'That is 9.b4, much earlier in the game. It starts in Module 4.5.' },
        { text: 'The Benko Attack', why: 'That is 11.g4 in the Mar del Plata, a kingside idea (Module 3.8).' }
      ]
    },
    {
      type: 'plan',
      prompt: 'What is the main idea of 13.a4 and 14.a5?',
      moves: SPACE,
      orientation: 'white',
      choices: [
        { text: 'Gain queenside space and control b6 before breaking with c5 or b4', correct: true, why: 'Right. The pawn on a5 also makes ...b6 awkward, because axb6 would open the a-file.' },
        { text: 'Win the a7-pawn by force', why: 'The a8-rook guards a7, so White cannot win it by force. The point is space and control of b6.' },
        { text: 'Prepare a rook lift to the kingside', why: "White's play is on the queenside. The a-pawn gains space there." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In 13.Rc1 Ng6 14.c5 Nxc5 15.b4 Na6 16.Nd3, what does White have for the pawn?',
      moves: KOZUL,
      orientation: 'white',
      choices: [
        { text: 'Time and lines: the knight is offside on a6 and the c-file is half-open', correct: true, why: 'Right. The engine calls the position roughly equal, so the pawn is well spent.' },
        { text: 'A direct mating attack on the kingside', why: "White's play is on the queenside. The kingside belongs to Black here." },
        { text: 'Nothing: 14.c5 was simply a mistake', why: 'The engine calls the position roughly equal. It is a real gambit, not a blunder.' }
      ]
    },
    {
      type: 'move',
      prompt: "White has played 13.a4. According to the engine, what is Black's most accurate reply?",
      moves: `${MDP_G5} a4`,
      orientation: 'white',
      choices: [
        { text: '13...a5', correct: true, why: 'Right. It stops the a-pawn on a4, so White cannot gain more space with a4–a5.' },
        { text: '13...Ng6', why: 'Natural, and it was played in the example. But after 14.a5 the engine prefers White more clearly.' },
        { text: '13...h5', why: 'It helps the kingside, but 14.a5 comes anyway, and the engine prefers White.' }
      ]
    }
  ],
  key: { name: 'Kozul Gambit: 14.c5 Nxc5 15.b4 Na6 16.Nd3', moves: KOZUL, orientation: 'white' },
  terms: [
    { term: 'Gambit', meaning: 'A pawn (or more) given up on purpose to gain time, open lines or start an attack.' },
    { term: 'Half-open file', meaning: 'A file where only the opponent has a pawn. A rook on it presses against that pawn.' },
    { term: 'Offside', meaning: 'Said of a piece stuck on the edge of the board, far from the main fight.' }
  ]
})
