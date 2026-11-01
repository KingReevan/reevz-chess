import { defineModule } from '../../../types'
import { MAIN, MDP, MDP_G5 } from '../lines'

/** mdp-13rc1, up to 14.c5 */
const LEVER = `${MDP_G5} Rc1 Ng6 c5`

export default defineModule({
  id: '4.1',
  title: 'Why White attacks on the queenside',
  minutes: 10,
  level: 3,
  goals: [
    'See where each pawn chain points, and what that means for White',
    "Name White's targets: the d6-pawn, the c-file and the c7-square",
    "Play the first moves of the main line from White's side"
  ],
  intro:
    "After 8.d5 Ne7 the center is locked, so neither side can make progress there. Module 2.8 gave the rule: attack where your pawns point. This chapter is White's half of that race. This first module answers a simple question: what exactly is White attacking on the queenside, and why does every move count?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Two chains, two wings',
      intro: 'Watch the pawns as well as the pieces. Each side starts its own plan straight away.',
      moves: MDP,
      start: 15,
      orientation: 'white',
      steps: {
        15: {
          title: 'The center locks',
          text: '8.d5. White pushes the d-pawn and attacks the c6-knight instead of trading pawns. Now nothing can be swapped in the center, so the fight moves to the wings.',
          arrows: [['d5', 'c6', 'red']]
        },
        16: {
          title: 'Two pawn chains',
          text: "8...Ne7. White's pawns on e4 and d5 form a chain that points to the queenside. Black's chain on d6 and e5 points to the kingside. Each side attacks on the wing its chain points to.",
          arrows: [['e4', 'c6', 'yellow'], ['d6', 'g3', 'yellow']]
        },
        17: {
          title: 'The knight heads for d3',
          text: '9.Ne1. The knight is on its way to d3, where it will support the c4–c5 push. Moving it also lets the f-pawn go to f3.',
          arrows: [['e1', 'd3', 'blue'], ['c4', 'c5', 'green']]
        },
        18: {
          title: 'Black frees the f-pawn',
          text: '9...Nd7. The knight steps aside so the f-pawn can advance to f5. From d7 it also watches c5, the square White wants for its pawn. Chapter 3 shows Black\'s whole attack.',
          arrows: [['f7', 'f5', 'blue'], ['d7', 'c5', 'green']]
        },
        19: {
          title: 'Guarding e4 in advance',
          text: '10.f3. The pawn guards e4 before Black attacks it, and it makes White\'s kingside more solid.',
          arrows: [['f3', 'e4', 'green']]
        },
        20: {
          title: 'Both plans are moving',
          text: "10...f5. Black hits e4, the pawn that holds up d5. White's answer is not on the kingside. It is c4–c5, aimed at d6, the base of Black's chain.",
          arrows: [['f5', 'e4', 'red'], ['c4', 'c5', 'green']],
          marks: ['e4', 'd6']
        }
      }
    },
    {
      kind: 'text',
      title: "White's three targets",
      body:
        "**The d6-pawn.** It is the base of Black's chain: it holds up e5. White attacks it with c4–c5, often backed up by b2–b4 and a knight on d3.\n\n**The c-file.** Sooner or later White plays cxd6. If Black takes back with ...cxd6, there are no pawns left on the c-file, and a white rook on c1 looks all the way to c7.\n\n**The c7-square.** It sits on the seventh rank, Black's second row, close to Black's queen and rooks. A white knight or rook that lands there attacks Black's pieces at home. Module 4.3 shows how much damage a knight on c7 can do.\n\nSpeed matters. Black's attack is aimed at White's king, so White's queenside play has to arrive in time to keep Black busy."
    },
    {
      kind: 'walkthrough',
      title: 'The queenside plan begins',
      intro: "Same race, a few moves later. Follow White's moves: each one prepares c4–c5 or the c-file.",
      moves: LEVER,
      start: 20,
      orientation: 'white',
      steps: {
        20: {
          title: 'Where we left off',
          text: "The position after 10...f5. White's next job is to bring the dark-squared bishop to a diagonal that reaches c5.",
          arrows: [['c1', 'e3', 'blue']]
        },
        21: {
          title: 'Bishop to e3',
          text: '11.Be3. The bishop looks along the diagonal toward c5 and a7. It will help the c4–c5 push.',
          arrows: [['e3', 'a7', 'blue']],
          marks: ['c5']
        },
        22: {
          title: 'Black gains space',
          text: '11...f4. Black kicks the bishop and gains space. Black now has more room on the kingside than White.',
          arrows: [['f4', 'e3', 'red']]
        },
        23: {
          title: 'Still on the diagonal',
          text: '12.Bf2. The bishop steps back but keeps its view of c5 and a7. On f2 it also helps guard White\'s king.',
          arrows: [['f2', 'a7', 'blue']],
          marks: ['c5']
        },
        24: {
          title: "Black's storm is coming",
          text: "12...g5. Black prepares ...g4 to open lines against White's king. White has no time to waste.",
          arrows: [['g5', 'g4', 'red']]
        },
        25: {
          title: 'Rook to the c-file',
          text: '13.Rc1. The rook goes to the file White is about to open. When the c-file opens, the rook will already be there.',
          arrows: [['c1', 'c7', 'blue']],
          marks: ['c7']
        },
        26: {
          title: 'Black keeps building',
          text: '13...Ng6. The knight heads for the kingside, where it can jump to h4 and hit f3, the pawn that ...g4 will attack. Black does not stop to defend the queenside.',
          arrows: [['g6', 'h4', 'blue']]
        },
        27: {
          title: 'The lever',
          text: '14.c5. The pawn hits d6, the base of Black\'s chain. White is willing to give this pawn to open the c-file quickly. Module 4.4 shows what happens next.',
          arrows: [['c5', 'd6', 'red']],
          marks: ['d6']
        }
      }
    },
    {
      kind: 'tip',
      title: 'A question for every move',
      body:
        "In this race, ask yourself: **does my move help c4–c5, open the c-file, or bring a piece closer to c7?** If not, it is probably too slow. Black is asking the same question about ...f4, ...g5 and ...g4."
    }
  ],
  takeaway:
    'With the center locked, White attacks on the queenside, where the chain points. The targets are the d6-pawn (hit by c4–c5), the c-file (opened by cxd6) and the c7-square.',
  lookAhead: 'Next: how the knight on d3 helps White push c4–c5 and open the c-file.',
  drills: [
    {
      title: 'Play the main line as White',
      prompt: "You're White. The center is locked after 8...Ne7. Play the main line up to White's c4–c5 push.",
      moves: LEVER,
      start: 16,
      side: 'white',
      hints: [
        'First the f3-knight starts its trip to d3, via e1. Then guard e4 with a pawn.',
        'Bishop to e3 (and f2 when it is kicked), rook to c1, then the lever on c5.'
      ],
      success: "That's the plan: 9.Ne1, 10.f3, 11.Be3, 12.Bf2, 13.Rc1 and 14.c5, hitting the base of Black's chain."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "After 8.d5 Ne7, which Black pawn is the base of Black's chain, and White's main target?",
      moves: MAIN,
      orientation: 'white',
      choices: [
        { text: 'The d6-pawn', correct: true, why: 'Right. d6 holds up e5. White attacks it with c4–c5.' },
        { text: 'The e5-pawn', why: 'e5 is the front of the chain, and d6 protects it. Attack the base, not the front.' },
        { text: 'The c7-pawn', why: 'c7 matters later, once the c-file opens. But the base of the chain is d6.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does White attack on the queenside rather than the kingside?',
      moves: MAIN,
      orientation: 'white',
      choices: [
        { text: "White's pawn chain points that way, so White has more space there", correct: true, why: 'Exactly. e4–d5 points to the queenside, so that is where White is stronger.' },
        { text: 'The kingside is completely closed, so no attack is possible there', why: "The kingside can open, and Black will open it with ...f5 and ...g4. It is simply Black's side of the board, not White's." },
        { text: "White's queen is already on the queenside", why: 'The queen is still on d1. The reason is the pawn chain, not where the queen stands.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black has just played 11...f4. Where should the bishop go?',
      moves: `${MDP} Be3 f4`,
      orientation: 'white',
      choices: [
        { text: '12.Bf2', correct: true, why: 'It stays on the diagonal toward c5 and a7, and it helps guard the king.' },
        { text: '12.Bd2', why: 'Playable, but from d2 the bishop no longer supports c4–c5. White\'s plan gets slower.' },
        { text: '12.Bc1', why: 'Going all the way home wastes time and leaves c5 without support. In a race, that hurts.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'White plays cxd6 and Black takes back with ...cxd6. What happens to the c-file?',
      choices: [
        { text: 'It opens, and a rook on c1 looks all the way to c7', correct: true, why: 'Right. Both c-pawns are gone, so nothing blocks the rook.' },
        { text: 'It stays closed, because Black now has a pawn on d6', why: 'The d6-pawn is on the d-file. With both c-pawns gone, the c-file is fully open.' },
        { text: 'It belongs to Black, because Black took last', why: 'An open file belongs to whoever puts a rook on it first. That is why White plays Rc1 early.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In the main line, why must White hurry with the queenside attack?',
      choices: [
        { text: "Black's attack is aimed at White's king, so it is more dangerous if it arrives first", correct: true, why: 'Yes. Winning a pawn on the queenside is no use if Black mates on the kingside.' },
        { text: "White's d5-pawn will soon be lost", why: 'd5 is well protected by c4 and e4. The danger is Black\'s kingside storm.' },
        { text: 'Black will trade queens and reach a better endgame', why: 'Queens rarely come off early in this structure. The danger is the attack on White\'s king.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'White plays 13.Rc1 before anything has opened on the queenside. Why?',
      moves: `${MDP_G5} Rc1`,
      orientation: 'white',
      choices: [
        { text: 'So the rook is already on the c-file when cxd6 opens it', correct: true, why: 'Right. In a race you prepare the file first, then open it.' },
        { text: 'To defend the c3-knight', why: 'The knight is not under attack. The rook is getting ready for the open c-file.' },
        { text: 'To swing the rook to the kingside via c3', why: "White's play is on the queenside. The rook belongs on the c-file." }
      ]
    }
  ],
  key: { name: 'Main line: 14.c5 hits the base of the chain', moves: LEVER, orientation: 'white' },
  terms: [
    { term: 'Pawn chain', meaning: 'Pawns on one diagonal, each guarding the one in front. Here e4–d5 for White and d6–e5 for Black.' },
    { term: 'Base of the chain', meaning: 'The back pawn of a chain, which holds the others up. Attacking it is the classic way to break a chain.' },
    { term: 'Lever', meaning: 'A pawn move that attacks an enemy pawn and offers a trade to open lines. c4–c5 is White\'s lever; ...f5 is Black\'s.' }
  ]
})
