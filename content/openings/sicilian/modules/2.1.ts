import { defineModule } from '../../../types'
import { NAJDORF, OPEN } from '../lines'

/** najdorf-6be2, first moves: 6.Be2 e5 7.Nb3 */
const KICK = `${NAJDORF} Be2 e5 Nb3`
/** mistake-venice-5e5: 5...e5?! 6.Bb5+ Bd7 7.Bxd7+ Qxd7 8.Nde2 Qc6 9.Ng3 Nbd7 */
const VENICE = `${OPEN} e5 Bb5+ Bd7 Bxd7+ Qxd7 Nde2 Qc6 Ng3 Nbd7`
/** najdorf-be3-e6, first moves: 6.Be3 e6 7.f3 b5 */
const B5 = `${NAJDORF} Be3 e6 f3 b5`

export default defineModule({
  id: '2.1',
  title: '5...a6: a small move with three jobs',
  minutes: 10,
  level: 2,
  goals: [
    'See which White pieces 5...a6 keeps off the b5-square',
    'Understand why ...a6 makes ...e5 safe',
    'Learn how ...a6 prepares ...b5 and a queenside attack'
  ],
  intro:
    "The Najdorf starts with a tiny pawn move on the edge of the board: 5...a6. It doesn't develop a piece or fight for the center directly, so why is it the most famous move in the Sicilian? This module shows the three jobs it does at once, and what White can do when Black skips it.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'One pawn guards b5',
      intro: 'Watch the b5-square. Three White pieces would love to use it.',
      moves: KICK,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The Open Sicilian',
          text: "4...Nf6. Black's knight attacks the e4-pawn, so White has to deal with that first.",
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'White defends e4',
          text: "5.Nc3. The knight guards e4 and develops. Now Black chooses a system: this is where the Najdorf, the Dragon, the Classical and the Scheveningen split.",
          arrows: [['c3', 'e4', 'green']]
        },
        10: {
          title: 'The Najdorf move',
          text: "5...a6. Before this move, White's d4-knight, c3-knight and f1-bishop could all jump to b5. Now anything that lands there can be taken by the a6-pawn.",
          arrows: [['a6', 'b5', 'green'], ['d4', 'b5', 'blue'], ['f1', 'b5', 'blue']],
          marks: ['b5']
        },
        11: {
          title: 'A quiet bishop move',
          text: '6.Be2. White simply develops and gets ready to castle. Notice that b5 is no longer a safe square for the bishop.',
          arrows: [['f1', 'e2', 'green']]
        },
        12: {
          title: 'Job two: ...e5',
          text: "6...e5. Black kicks the d4-knight and grabs space in the center. The knight must move, but b5 is covered by the a6-pawn, so it can't jump there to hit d6.",
          arrows: [['e5', 'd4', 'red'], ['a6', 'b5', 'green']],
          marks: ['b5']
        },
        13: {
          title: 'The knight steps back',
          text: '7.Nb3. The knight retreats. Black has gained time and space, and no White piece can annoy Black from b5.',
          arrows: [['d4', 'b3', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'What does ...e5 cost?',
      body:
        "...e5 is a big decision. Black's c-pawn was traded on d4, and now the e-pawn has moved past e6. Pawns can't move backward, so Black can no longer push a pawn to a square that guards d5. A square like that is called a **hole**, and White would love to put a knight there.\n\nIn the Najdorf, Black accepts the hole because ...e5 gains space and time. But it only works because ...a6 has been played first. The next walkthrough shows what happens without it."
    },
    {
      kind: 'walkthrough',
      title: 'Without ...a6: the Venice Attack',
      intro: 'Same position after 5.Nc3, but Black plays ...e5 at once. Watch White use the b5-square.',
      moves: VENICE,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'The crossroads again',
          text: '5.Nc3. This time Black skips ...a6. The diagonal from f1 to b5 is open.',
          arrows: [['f1', 'b5', 'blue']]
        },
        10: {
          title: '...e5 too early',
          text: '5...e5. Black kicks the knight, just like in the Najdorf. But b5 is not covered.',
          arrows: [['e5', 'd4', 'red']],
          marks: ['b5'],
          ann: '?!'
        },
        11: {
          title: 'Check from b5',
          text: '6.Bb5+. The Venice Attack. The bishop checks the king, and Black should block it.',
          arrows: [['b5', 'e8', 'red']],
          ann: '!'
        },
        12: {
          title: 'Blocking with the bishop',
          text: "6...Bd7. Black blocks with the light-squared bishop. Later this bishop could guard d5 from e6, so White is happy to trade it off.",
          arrows: [['d7', 'b5', 'blue']]
        },
        13: {
          title: 'White trades bishops',
          text: "7.Bxd7+. White trades bishops. Black's last bishop moves on dark squares, so it can never cover the light squares d5 and f5.",
          arrows: [['d7', 'e8', 'red']],
          marks: ['d5', 'f5']
        },
        14: {
          title: 'The queen takes back',
          text: '7...Qxd7. Material is level. Notice that the d4-knight is still under attack from e5.',
          arrows: [['e5', 'd4', 'red']]
        },
        15: {
          title: 'The knight reroutes',
          text: "8.Nde2. The knight steps back, but it isn't passive. It is heading for g3, and from there to f5.",
          arrows: [['e2', 'g3', 'blue']]
        },
        16: {
          title: 'Black hits e4',
          text: '8...Qc6. The queen and the f6-knight both attack e4. Only the c3-knight defends it, so White must add a guard.',
          arrows: [['c6', 'e4', 'red'], ['f6', 'e4', 'red']],
          marks: ['e4']
        },
        17: {
          title: 'Defended again',
          text: '9.Ng3. The knight guards e4 and eyes f5. With the light-squared bishops gone, Black has no bishop to fight for that square.',
          arrows: [['g3', 'e4', 'green'], ['g3', 'f5', 'yellow']],
          marks: ['f5']
        },
        18: {
          title: 'A clear edge for White',
          text: '9...Nbd7. Black develops, but d5 is a hole for good, and Black has no light-squared bishop to help guard it. White has a clear edge, all because the bishop could check on b5.',
          marks: ['d5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Job three: getting ready for ...b5',
      intro: 'Without ...a6, a pawn on b5 would just be taken. With it, ...b5 starts an attack.',
      moves: B5,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The Najdorf again',
          text: "5...a6. The b5-square is guarded. Right now the c3-knight, the d4-knight and the f1-bishop all aim at b5.",
          arrows: [['c3', 'b5', 'blue'], ['d4', 'b5', 'blue'], ['f1', 'b5', 'blue']]
        },
        11: {
          title: 'The English Attack',
          text: "6.Be3. The English Attack, White's most popular answer. Modules 2.3 and 2.4 cover it.",
          arrows: [['c1', 'e3', 'green']]
        },
        12: {
          title: 'The small center',
          text: '6...e6. This time Black keeps the pawn on e6, where it guards d5. Module 2.2 compares this with ...e5.',
          arrows: [['e6', 'd5', 'green']]
        },
        13: {
          title: 'White supports e4',
          text: '7.f3. The f3-pawn guards e4, so White no longer needs the c3-knight for that job.',
          arrows: [['f3', 'e4', 'green']]
        },
        14: {
          title: 'Space on the queenside',
          text: "7...b5. Three White pieces aim at b5, but the a6-pawn defends it. Next comes ...Bb7 to hit e4, and ...b4 to kick the c3-knight away.",
          arrows: [['a6', 'b5', 'green'], ['b5', 'b4', 'blue'], ['c8', 'b7', 'blue']]
        }
      }
    },
    {
      kind: 'history',
      title: 'A name and a reputation',
      body:
        "The variation is named after Miguel Najdorf, a grandmaster who played it a lot. Later it became the main weapon of two world champions, Bobby Fischer and Garry Kasparov, and it is still Black's most popular Sicilian today."
    }
  ],
  takeaway:
    '5...a6 does three jobs: it keeps White\'s knights and bishop off b5, it makes ...e5 possible without a Bb5+ check, and it prepares ...b5 to gain space on the queenside.',
  lookAhead:
    'After 5...a6, Black has to choose where the e-pawn goes. Module 2.2 compares the two structures: ...e5 and ...e6.',
  drills: [
    {
      title: 'Play the Najdorf',
      prompt: "You're Black. Play the first five moves of the Najdorf from memory.",
      moves: NAJDORF,
      start: 0,
      side: 'black',
      hints: [
        'Start with the c-pawn, then support the center with the d-pawn.',
        'Take on d4, hit e4 with the knight, then play the quiet pawn move on the a-file.'
      ],
      success: '1...c5, 2...d6, 3...cxd4, 4...Nf6 and 5...a6. That is the Najdorf.'
    },
    {
      title: 'Punish the early ...e5',
      prompt: "You're White. Black played 5...e5 without ...a6 first. Use the b5-square, trade off Black's best bishop, then save your knight.",
      moves: `${OPEN} e5 Bb5+ Bd7 Bxd7+ Qxd7 Nde2`,
      start: 10,
      side: 'white',
      hints: [
        'Which piece can give check on b5?',
        'After the trade on d7, your d4-knight is still attacked. Bring it toward g3.'
      ],
      success: '6.Bb5+ Bd7 7.Bxd7+ Qxd7 8.Nde2. The light-squared bishops are gone, d5 is a lasting hole, and your knight is on its way to g3 and f5.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Which square does 5...a6 take away from White\'s pieces?',
      moves: NAJDORF,
      orientation: 'black',
      choices: [
        { text: 'b5', correct: true, why: "Right. The a6-pawn guards b5, so White's knights and the f1-bishop can't use it." },
        { text: 'd5', why: 'The a6-pawn has nothing to do with d5. Its only capture square is b5.' },
        { text: 'c4', why: "A Black pawn on a6 attacks b5 only. White's bishop can still go to c4." }
      ]
    },
    {
      type: 'move',
      prompt: "Black has just played 5...e5 without ...a6. What is White's strongest reply?",
      moves: `${OPEN} e5`,
      orientation: 'white',
      choices: [
        { text: '6.Bb5+', correct: true, why: 'Yes. The check lets White trade off Black\'s light-squared bishop, and d5 becomes a lasting hole. White gets a clear edge.' },
        { text: '6.Nb3', why: 'A normal retreat, and not a bad move. But it lets Black off the hook. The check on b5 is stronger.' },
        { text: '6.Nf5', why: 'Playable, but Black can take it with ...Bxf5 and get a solid game. The check on b5 does more.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does ...b5 work after ...a6, but not before it?',
      choices: [
        { text: 'The a6-pawn defends a pawn on b5', correct: true, why: "Right. White's c3-knight, d4-knight and f1-bishop all hit b5. Without ...a6, a pawn there would simply be taken." },
        { text: 'Nothing attacks b5 in the Open Sicilian', why: 'Three White pieces can reach b5: both knights and the f1-bishop.' },
        { text: '...a6 opens a diagonal for Black\'s queen', why: 'The queen on d8 already sees a5 through c7 and b6. The point of ...a6 is to guard b5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6.Be2 e5, the d4-knight must move. Which square is it not able to use safely because of ...a6?',
      moves: `${NAJDORF} Be2 e5`,
      orientation: 'black',
      choices: [
        { text: 'b5', correct: true, why: 'Right. A knight on b5 would hit d6, but the a6-pawn would just take it.' },
        { text: 'b3', why: 'b3 is safe, and 7.Nb3 is the main move.' },
        { text: 'f3', why: '7.Nf3 is legal and safe. It is a normal alternative to 7.Nb3.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Which of these is one of the three jobs of 5...a6?',
      choices: [
        { text: 'It makes ...e5 possible without allowing Bb5+', correct: true, why: 'Yes. Without ...a6, 6.Bb5+ trades off Black\'s light-squared bishop and leaves d5 weak.' },
        { text: 'It prepares ...Ra7 to defend the second rank', why: '...Ra7 does happen once in a while, but it is not why Black plays ...a6. The jobs are b5, ...e5 and ...b5.' },
        { text: 'It attacks the d4-knight', why: 'The a6-pawn only attacks b5. It is ...e5 that kicks the d4-knight.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Venice Attack (5...e5 6.Bb5+ Bd7 7.Bxd7+ Qxd7 8.Nde2), where is White\'s knight heading?',
      moves: `${OPEN} e5 Bb5+ Bd7 Bxd7+ Qxd7 Nde2`,
      orientation: 'white',
      choices: [
        { text: 'To g3, and then on to f5', correct: true, why: 'Right. With the light-squared bishops gone, Black has no bishop to fight for f5, and from g3 the knight also guards e4.' },
        { text: 'Back to d4', why: 'The e5-pawn guards d4, so the knight cannot go back there safely.' },
        { text: 'To c1, to guard b2', why: 'The b2-pawn is not under attack. The knight goes toward f5 by way of g3.' }
      ]
    }
  ],
  key: { name: 'Najdorf Variation: 5...a6', moves: NAJDORF, orientation: 'black' },
  terms: [
    { term: 'Najdorf Variation', meaning: 'The Open Sicilian with 5...a6 after 2...d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3.' },
    { term: 'Hole', meaning: 'A square in your half of the board that your pawns can no longer guard. Enemy pieces love to sit there.' },
    { term: 'Venice Attack', meaning: 'The check 6.Bb5+ against an early ...e5 when Black has not played ...a6.' }
  ]
})
