import { defineModule } from '../../../types'
import { OPEN, NAJDORF } from '../lines'

/** mistake-venice-5e5: 5...e5?! 6.Bb5+ Bd7 7.Bxd7+ Qxd7 8.Nde2 Qc6 9.Ng3 Nbd7 */
const VENICE = `${OPEN} e5 Bb5+ Bd7 Bxd7+ Qxd7 Nde2 Qc6 Ng3 Nbd7`
/** mistake-2e5: 2...e5? 3.Nxe5 Nc6 4.Nxc6 dxc6 */
const LOOSE = 'e4 c5 Nf3 e5 Nxe5 Nc6 Nxc6 dxc6'
/** najdorf-6be2: 6.Be2 e5 7.Nb3 Be7 8.O-O O-O 9.Be3 Be6 */
const OPOCENSKY = `${NAJDORF} Be2 e5 Nb3 Be7 O-O O-O Be3 Be6`

export default defineModule({
  id: '1.6',
  title: 'The d5 square and an early ...e5',
  minutes: 12,
  level: 1,
  goals: [
    'Explain the hole on d5 and the backward d6-pawn after ...e5',
    'See why 5...e5 without ...a6 runs into 6.Bb5+',
    'Know that 2...e5? simply drops a pawn'
  ],
  intro:
    "Kicking the d4-knight with ...e5 looks natural: it gains time and grabs space. But a pawn move can never be taken back, and ...e5 changes the squares around it for the rest of the game. This module shows the price of ...e5, when Black can afford to pay it, and when Black can't.",
  sections: [
    {
      kind: 'text',
      title: 'A hole and a backward pawn',
      body:
        "Pawns only move forward. Once Black's c-pawn is gone and the e-pawn has jumped to e5, no Black pawn can ever attack the **d5-square** again. A square like that, which your pawns can no longer guard, is called a **hole**. White would love to put a knight on d5, where no pawn can chase it away.\n\nThe pawn on **d6** has a problem too. Its neighbors are gone or ahead of it, so no Black pawn can defend it. And it stands on the half-open d-file, where White's rooks and queen can attack it. A pawn like this is called **backward**.\n\nSo ...e5 is a big decision. Black can still play it, but only when the pieces can make up for the hole."
    },
    {
      kind: 'walkthrough',
      title: 'Without ...a6: the Venice Attack',
      intro: 'Black plays ...e5 straight after 5.Nc3. Watch the b5-square, and then the bishops.',
      moves: VENICE,
      start: 9,
      orientation: 'white',
      steps: {
        9: {
          title: 'The crossroads',
          text: '5.Nc3. Black has many good moves here. Kicking the knight with ...e5 at once is the tempting one.',
          marks: ['d4']
        },
        10: {
          title: 'Black kicks the knight',
          text: "5...e5. The knight is attacked, and Black has space. But d5 is now a hole and d6 is a backward pawn. Also, nothing guards b5.",
          arrows: [['e5', 'd4', 'red']],
          marks: ['d5', 'd6', 'b5'],
          ann: '?!'
        },
        11: {
          title: 'Check on b5',
          text: '6.Bb5+. Before moving the knight, White checks on the free b5-square. This is the Venice Attack. (The same name is used for the Prins line in Module 1.4.)',
          arrows: [['b5', 'e8', 'red']],
          ann: '!'
        },
        12: {
          title: 'Block with the bishop',
          text: '6...Bd7. Black blocks the check. Blocking with 6...Nbd7 is also possible, but White stays better either way.',
          arrows: [['c8', 'd7', 'green']]
        },
        13: {
          title: 'Trade the guard of d5',
          text: "7.Bxd7+. White trades off Black's light-squared bishop. d5 is a light square, and that bishop was Black's best piece for guarding it.",
          arrows: [['b5', 'd7', 'red']],
          marks: ['d5']
        },
        14: {
          title: 'The queen takes back',
          text: '7...Qxd7. The light-squared bishops are gone. Black\'s other bishop, on f8, moves only on dark squares, so it can never guard d5.',
          marks: ['d5']
        },
        15: {
          title: 'The knight steps back',
          text: '8.Nde2. Now the knight retreats. From e2 it heads for g3, where it will eye the f5-square.',
          arrows: [['e2', 'g3', 'blue']]
        },
        16: {
          title: 'Black hits e4',
          text: '8...Qc6. The queen joins the f6-knight in attacking the e4-pawn. Only the c3-knight defends it, so White must add a defender.',
          arrows: [['c6', 'e4', 'red'], ['f6', 'e4', 'red'], ['c3', 'e4', 'green']]
        },
        17: {
          title: 'Another defender',
          text: '9.Ng3. The knight guards e4 a second time and eyes the f5-square.',
          arrows: [['g3', 'e4', 'green'], ['g3', 'f5', 'blue']]
        },
        18: {
          title: 'A clear edge for White',
          text: "9...Nbd7. Black has a hole on d5, a backward pawn on d6 that White's queen already looks at, and no light-squared bishop. White has a clear edge. It is not a winning attack, though: Black can still fight.",
          arrows: [['d1', 'd6', 'red']],
          marks: ['d5', 'd6']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'With ...a6: the Najdorf way',
      intro: 'The same ...e5 idea, one move later. This time Black plays 5...a6 first.',
      moves: OPOCENSKY,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'b5 is covered',
          text: '5...a6. The Najdorf. The a6-pawn guards b5, so there will be no Bb5+ and no knight jump to b5.',
          arrows: [['a6', 'b5', 'green']],
          marks: ['b5']
        },
        11: {
          title: 'A quiet bishop move',
          text: '6.Be2. White develops calmly and gets ready to castle.',
          arrows: [['f1', 'e2', 'blue']]
        },
        12: {
          title: 'Now ...e5',
          text: '6...e5. Black kicks the knight. d5 is still a hole and d6 is still backward, but this time White has no check to trade off Black\'s light-squared bishop.',
          arrows: [['e5', 'd4', 'red']],
          marks: ['d5', 'd6']
        },
        13: {
          title: 'The knight retreats',
          text: '7.Nb3. The knight steps back.',
          arrows: [['d4', 'b3', 'blue']]
        },
        14: {
          title: 'Develop',
          text: '7...Be7. The bishop develops so Black can castle.',
          arrows: [['f8', 'e7', 'blue']]
        },
        15: {
          title: 'White castles',
          text: '8.O-O. White\'s king is safe.',
          marks: ['g1']
        },
        16: {
          title: 'Black castles',
          text: '8...O-O. Black\'s king is safe too.',
          marks: ['g8']
        },
        17: {
          title: 'White develops',
          text: '9.Be3. The last White minor piece comes out.',
          arrows: [['c1', 'e3', 'blue']]
        },
        18: {
          title: 'Pieces guard the hole',
          text: '9...Be6. The light-squared bishop and the f6-knight both cover d5. White has only a small edge, and Black has space and easy development.',
          arrows: [['e6', 'd5', 'green'], ['f6', 'd5', 'green']],
          marks: ['d5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Too early: 2...e5?',
      intro: 'One more ...e5, this time on move 2. Count the defenders of e5.',
      moves: LOOSE,
      start: 2,
      orientation: 'white',
      steps: {
        2: {
          title: 'The Sicilian',
          text: '1...c5. The usual start.',
          marks: ['c5']
        },
        3: {
          title: 'The knight eyes e5',
          text: '2.Nf3. White develops. The knight looks at e5.',
          arrows: [['f3', 'e5', 'blue']]
        },
        4: {
          title: 'A loose pawn',
          text: '2...e5. The pawn on e5 has no defender at all: no pawn, no piece. The f3-knight attacks it.',
          arrows: [['f3', 'e5', 'red']],
          marks: ['e5'],
          ann: '?'
        },
        5: {
          title: 'White takes',
          text: '3.Nxe5. White simply wins a pawn.',
          marks: ['e5'],
          ann: '!'
        },
        6: {
          title: 'Black attacks the knight',
          text: '3...Nc6. Black develops with an attack on the knight.',
          arrows: [['c6', 'e5', 'red']]
        },
        7: {
          title: 'White trades',
          text: '4.Nxc6. White trades knights instead of retreating.',
          marks: ['c6']
        },
        8: {
          title: 'A clean pawn up',
          text: '4...dxc6. Black\'s queen and bishop have open lines, but that is not enough. White is a clean pawn up and much better.',
          marks: ['e4']
        }
      }
    },
    {
      kind: 'warning',
      title: "Don't overrate the Venice Attack",
      body:
        'You may read that 6.Bb5+ "refutes" 5...e5. That goes too far. White gets a clear, lasting edge, but nothing is won by force, and Black still has a game. The lesson is about move order: ...e5 works much better after ...a6.'
    }
  ],
  takeaway:
    "...e5 gains time and space, but leaves a hole on d5 and a backward pawn on d6. Without ...a6, 6.Bb5+ trades off the bishop that guards d5 and White gets a clear edge. With ...a6, as in the Najdorf, Black's pieces can guard d5.",
  lookAhead:
    "Module 1.7 steps back to move 2: Black's three main second moves, and the systems each one leads to.",
  drills: [
    {
      title: 'Punish 5...e5',
      prompt: "You're White. Black has just kicked your knight with 5...e5, without playing ...a6 first. Use the b5-square, then trade off the defender of d5.",
      moves: `${OPEN} e5 Bb5+ Bd7 Bxd7+`,
      start: 10,
      side: 'white',
      hints: ['Before moving the knight, give a check on a square ...a6 would have covered.', 'After 6...Bd7, take the bishop that guards the light squares.'],
      success: '6.Bb5+ Bd7 7.Bxd7+. The light-squared bishops are gone and d5 is a lasting hole. Next, 8.Nde2 and Ng3.'
    },
    {
      title: 'Take the loose pawn',
      prompt: "You're White. Black has just played 2...e5. Is that pawn safe?",
      moves: 'e4 c5 Nf3 e5 Nxe5',
      start: 3,
      side: 'white',
      hints: ['Count the defenders of e5.', 'Nothing defends it. Your knight can take it.'],
      success: '3.Nxe5. A free pawn. Always count attackers and defenders before you push a pawn.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 5...e5, why is d5 called a hole?',
      moves: `${OPEN} e5`,
      orientation: 'white',
      choices: [
        { text: 'No Black pawn can ever attack d5 again', correct: true, why: 'Right. The c-pawn is gone and the e-pawn has passed e6. A White knight on d5 can never be chased by a pawn.' },
        { text: 'Because d5 is an empty square', why: 'Lots of squares are empty. A hole is a square your own pawns can no longer guard.' },
        { text: 'Because White has no pawn that can reach d5', why: "It's about Black's pawns, not White's. A hole is a weakness in the camp of the side whose pawns can't guard it." }
      ]
    },
    {
      type: 'concept',
      prompt: 'What makes the d6-pawn backward after 5...e5?',
      moves: `${OPEN} e5`,
      orientation: 'white',
      choices: [
        { text: 'No Black pawn can defend it, and it sits on the half-open d-file', correct: true, why: "Yes. Its neighbors on the c- and e-files are gone or ahead of it, and White's rooks and queen can aim at it." },
        { text: 'It has moved backward', why: 'Pawns never move backward. "Backward" means it has been left behind with no pawn to protect it.' },
        { text: 'It blocks the f8-bishop', why: 'The d6-pawn does stand in the bishop\'s way, but that is not what "backward" means. A backward pawn is one no pawn can defend.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Which move uses the fact that Black has not played ...a6?',
      moves: `${OPEN} e5`,
      orientation: 'white',
      choices: [
        { text: '6.Bb5+', correct: true, why: 'Right. The check uses the b5-square, and after 6...Bd7 7.Bxd7+ the defender of d5 is gone. White gets a clear edge.' },
        { text: '6.Nb3', why: 'A normal retreat, but it does not use the b5-square. 6.Bb5+ first is stronger.' },
        { text: '6.Nf5', why: 'Active, but Black can take it with 6...Bxf5 and later play ...d5. 6.Bb5+ is stronger.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move after 2...e5. What should White play?',
      moves: 'e4 c5 Nf3 e5',
      orientation: 'white',
      choices: [
        { text: '3.Nxe5', correct: true, why: 'Yes. Nothing defends e5, so White wins a clean pawn.' },
        { text: '3.Bc4', why: 'A normal developing move, but it leaves a free pawn on the board. Take it with 3.Nxe5.' },
        { text: '3.c3', why: 'A fine move in many Sicilians, but here the e5-pawn is simply loose. Take it.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'Why does ...e5 work well in the Najdorf (5...a6 6.Be2 e5) but not straight after 5.Nc3?',
      choices: [
        { text: 'The a6-pawn covers b5, so White has no Bb5+ to trade off the bishop that guards d5', correct: true, why: 'Exactly. Black keeps the light-squared bishop, and with ...Be6 and ...Nf6 the pieces cover d5.' },
        { text: 'In the Najdorf, d5 is not a hole', why: 'It is still a hole: no Black pawn can guard it. The difference is that Black\'s pieces can cover it.' },
        { text: 'The a6-pawn defends the e5-pawn', why: 'A pawn on a6 guards only b5. Its job here is to keep White\'s bishop off b5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Is the Venice Attack (5...e5 6.Bb5+) winning for White?',
      choices: [
        { text: 'No. White gets a clear edge, but nothing is decided', correct: true, why: 'Right. Black has a lasting weakness on d5, but no material is lost and the game goes on.' },
        { text: 'Yes. Black loses material by force', why: 'Black loses no material. The problem is the hole on d5 and the missing light-squared bishop.' },
        { text: 'No. Black is better, because of the extra space', why: "Black's space doesn't make up for the weak d5-square here. White is clearly better." }
      ]
    }
  ],
  key: { name: 'Venice Attack: 5...e5 6.Bb5+', moves: `${OPEN} e5 Bb5+`, orientation: 'white' },
  terms: [
    { term: 'Hole', meaning: 'A square your own pawns can never guard again. An enemy piece placed there cannot be chased away by a pawn.' },
    { term: 'Backward pawn', meaning: 'A pawn that has been left behind its neighbors, so no pawn can defend it.' },
    { term: 'Outpost', meaning: 'A strong square for a piece, usually a knight, where enemy pawns cannot attack it. A hole is an outpost for the opponent.' },
    { term: 'Light-squared bishop', meaning: 'The bishop that moves on light squares. Each side has one light-squared and one dark-squared bishop.' }
  ]
})
