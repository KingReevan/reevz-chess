import { defineModule } from '../../../types'
import { FRENCH } from '../lines'

/** side-3bd3: 3.Bd3 dxe4 4.Bxe4 Nf6 5.Bf3 c5 6.Ne2 Nc6 */
const DXE4 = `${FRENCH} Bd3 dxe4 Bxe4 Nf6 Bf3 c5 Ne2 Nc6`
/** side-3bd3-c5: 3...c5 4.exd5 Qxd5 5.Nf3 cxd4 6.O-O Nc6 */
const QXD5 = `${FRENCH} Bd3 c5 exd5 Qxd5 Nf3 cxd4 O-O Nc6`
/** 4...exd5 instead (engine's choice, checked): 5.Nf3 c4 6.Be2 Nf6 */
const EXD5 = `${FRENCH} Bd3 c5 exd5 exd5 Nf3 c4 Be2 Nf6`

export default defineModule({
  id: '3.7',
  title: '3.Bd3: defending e4 with the bishop',
  minutes: 10,
  level: 1,
  goals: [
    'Answer 3.Bd3 with 3...dxe4 4.Bxe4 Nf6, gaining time on the bishop',
    'Know that after 3...c5 4.exd5, the safe recapture is 4...exd5',
    'As White, meet 4...Qxd5 with 5.Nc3!, developing with tempo'
  ],
  intro:
    "After 2...d5, White can defend e4 with the bishop: 3.Bd3, the Schlechter Variation. It looks natural, but the bishop on d3 can become a target. How does Black make White pay for it, and what should White do when Black grabs a pawn?",
  sections: [
    {
      kind: 'walkthrough',
      title: '3...dxe4: chase the bishop',
      intro: 'Count how many times White moves the same bishop.',
      moves: DXE4,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The French position',
          text: '2...d5. Black attacks e4. White can defend it, push it or trade it.',
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'The bishop defends',
          text: '3.Bd3. The Schlechter Variation, named after Carl Schlechter. The bishop guards e4 and develops at the same time.',
          arrows: [['d3', 'e4', 'green']]
        },
        6: {
          title: 'Trade on e4',
          text: '3...dxe4. Black takes the pawn. White has to take back with the bishop.',
          arrows: [['d5', 'e4', 'red']]
        },
        7: {
          title: 'The bishop recaptures',
          text: '4.Bxe4. Material is equal. But the bishop now stands where Black can attack it.',
          marks: ['e4']
        },
        8: {
          title: 'Develop with tempo',
          text: '4...Nf6. The knight develops and attacks the bishop. The best answer is to move it again.',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'Third bishop move',
          text: '5.Bf3. The bishop retreats. It has now moved three times (d3, e4, f3), while Black developed a knight.',
          arrows: [['e4', 'f3', 'blue']]
        },
        10: {
          title: 'Hit the center',
          text: '5...c5. Black uses the time to attack d4 straight away.',
          arrows: [['c5', 'd4', 'red']]
        },
        11: {
          title: 'Knight to e2',
          text: '6.Ne2. The bishop is on f3, so the knight goes to e2. From there it guards d4.',
          arrows: [['e2', 'd4', 'green']]
        },
        12: {
          title: 'Easy development',
          text: '6...Nc6. Now d4 is attacked three times (the c5-pawn, the c6-knight and the d8-queen) and defended only twice (the e2-knight and the d1-queen), so White should add a defender with Be3 or c3. Black is comfortable, and the engine calls it level.',
          arrows: [['c6', 'd4', 'red'], ['c5', 'd4', 'red'], ['d8', 'd4', 'red']],
          marks: ['d4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '3...c5 4.exd5 Qxd5: a pawn for development',
      intro: "Black can also hit d4 at once. Watch Black's queen in the center.",
      moves: QXD5,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The bishop defends',
          text: '3.Bd3. White guards e4.',
          arrows: [['d3', 'e4', 'green']]
        },
        6: {
          title: 'Hit the base',
          text: '3...c5. Black attacks d4 instead of e4.',
          arrows: [['c5', 'd4', 'red']]
        },
        7: {
          title: 'White trades',
          text: '4.exd5. White takes on d5. Black now chooses how to take back.',
          arrows: [['e4', 'd5', 'red']]
        },
        8: {
          title: 'The queen recaptures',
          text: '4...Qxd5. The queen takes and keeps the e6-pawn at home. But a queen in the center can be attacked with gain of time. The engine prefers 4...exd5.',
          arrows: [['d8', 'd5', 'blue']],
          ann: '?!'
        },
        9: {
          title: 'A quiet reply',
          text: '5.Nf3. A good developing move. Even stronger is 5.Nc3!, which attacks the queen at once; then White is better.',
          arrows: [['b1', 'c3', 'blue']]
        },
        10: {
          title: 'Grab the pawn',
          text: '5...cxd4. Black takes the d4-pawn and is now a pawn up.',
          marks: ['d4']
        },
        11: {
          title: 'White castles',
          text: '6.O-O. White doesn\'t rush to win the pawn back. Development comes first.',
          arrows: [['e1', 'g1', 'green']]
        },
        12: {
          title: 'A pawn against time',
          text: "6...Nc6. The knight guards d4. Black is a pawn up, but the kingside pieces are still at home and White can hit d4 with c3, then chase the queen with Nc3 once the d4-pawn is gone. White's lead in development is worth the pawn: the engine even slightly prefers White.",
          arrows: [['c6', 'd4', 'green'], ['c2', 'c3', 'blue']],
          marks: ['f8', 'g8']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The safe recapture: 4...exd5',
      intro: 'Taking back with the e-pawn gives an Exchange-style position, and the queen stays safe.',
      moves: EXD5,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'The same moment',
          text: '4.exd5. White has taken on d5.',
          arrows: [['e4', 'd5', 'red']]
        },
        8: {
          title: 'Pawn takes',
          text: "4...exd5. Black's c8-bishop is free, as in the Exchange Variation, and no piece stands in the center to be chased.",
          arrows: [['c8', 'g4', 'blue']]
        },
        9: {
          title: 'White develops',
          text: '5.Nf3. The knight guards d4.',
          arrows: [['f3', 'd4', 'green']]
        },
        10: {
          title: 'Gain time',
          text: '5...c4. The pawn hits the d3-bishop, and the d5-pawn defends it. This is the same idea as in Module 3.2.',
          arrows: [['c4', 'd3', 'red'], ['d5', 'c4', 'green']]
        },
        11: {
          title: 'The bishop steps back',
          text: '6.Be2. The bishop retreats.',
          arrows: [['d3', 'e2', 'blue']]
        },
        12: {
          title: 'Level',
          text: "6...Nf6. Black has queenside space and easy development. White's usual plan is b3 to break up the c4-pawn. The engine calls it level.",
          arrows: [['b2', 'b3', 'blue']],
          marks: ['c4']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Both sides, in one line each',
      body:
        "**Black:** against 3.Bd3, play 3...dxe4 and 4...Nf6 to gain time on the bishop, or 3...c5 with 4...exd5. If you take back with the queen, expect it to be chased.\n\n**White:** if Black plays 4...Qxd5, develop with tempo: 5.Nc3! attacks the queen. And don't put the bishop on e4 to attack the queen when nothing defends it there: after 5.Be4? Qxe4+ the bishop is simply lost."
    }
  ],
  takeaway:
    "3.Bd3 defends e4, but the bishop can be chased: 3...dxe4 4.Bxe4 Nf6 gains time and is level. After 3...c5 4.exd5, recapture with the pawn; if Black takes with the queen, White answers 5.Nc3!.",
  lookAhead:
    'Next: two gambits where White gives up a pawn for open lines. Module 3.8 covers 3.Be3 and 3.c4.',
  drills: [
    {
      title: 'Chase the bishop',
      prompt: "You're Black. White has played 3.Bd3. Trade on e4, develop with a gain of time, then hit d4 and bring out your queen's knight.",
      moves: DXE4,
      start: 5,
      side: 'black',
      hints: [
        'Take on e4, then develop the knight that attacks the bishop on e4.',
        'After 5.Bf3, the c-pawn goes two squares, and the b8-knight comes out.'
      ],
      success: '3...dxe4, 4...Nf6, 5...c5 and 6...Nc6. White\'s bishop moved three times, and the position is level.'
    },
    {
      title: 'Develop with tempo',
      prompt: "You're White. Black has played 3...c5. Trade on d5, and if Black takes back with the queen, develop a piece that attacks it.",
      moves: `${FRENCH} Bd3 c5 exd5 Qxd5 Nc3`,
      start: 6,
      side: 'white',
      hints: ['Take on d5 with the e-pawn.', 'After 4...Qxd5, which knight move attacks the queen?'],
      success: '4.exd5 Qxd5 5.Nc3. The queen must move again, and White is better.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'White to move. Black has just taken back with the queen. What is best?',
      moves: `${FRENCH} Bd3 c5 exd5 Qxd5`,
      orientation: 'white',
      choices: [
        { text: '5.Nc3', correct: true, why: 'Right. The knight develops and attacks the queen, so Black loses another move. White is better.' },
        { text: '5.Be4', why: 'The bishop does attack the queen, but it is undefended: 5...Qxe4+ wins it with check.' },
        { text: '5.Qe2', why: "The queen comes out early and doesn't attack anything. 5.Nc3 attacks the queen and is much stronger." }
      ]
    },
    {
      type: 'concept',
      prompt: "After 3...dxe4 4.Bxe4 Nf6 5.Bf3, how many times has White's light-squared bishop moved?",
      moves: `${FRENCH} Bd3 dxe4 Bxe4 Nf6 Bf3`,
      orientation: 'black',
      choices: [
        { text: 'Three times', correct: true, why: 'Yes: Bd3, Bxe4 and Bf3. Meanwhile Black developed a knight with a gain of time.' },
        { text: 'Twice', why: 'Count again: d3, then e4 (taking the pawn), then f3.' },
        { text: 'Once', why: 'The bishop went f1–d3, then took on e4, then retreated to f3: three moves.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Black is a pawn up. What does White have in return?',
      moves: QXD5,
      orientation: 'white',
      choices: [
        { text: "A lead in development, and chances to chase Black's queen", correct: true, why: "Right. Black's kingside pieces are still at home and the queen sits in the center. The engine even slightly prefers White." },
        { text: 'A strong passed pawn', why: 'White has no passed pawn here. The compensation is time and activity.' },
        { text: 'Nothing: White is simply a pawn down', why: 'The engine disagrees: White has full compensation thanks to the faster development.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does 4...Nf6 work so well here?',
      moves: `${FRENCH} Bd3 dxe4 Bxe4 Nf6`,
      orientation: 'black',
      choices: [
        { text: 'It develops a piece and attacks the e4-bishop, so White should move it again', correct: true, why: 'Yes. Black gains a tempo: one useful move for Black, one "lost" move for White.' },
        { text: 'It wins the bishop, which is trapped', why: 'The bishop is not trapped. It retreats to f3 or d3.' },
        { text: 'It pins the bishop to the king', why: 'A knight cannot pin anything. It attacks the bishop.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move. White has taken on d5. Which recapture does the engine prefer?',
      moves: `${FRENCH} Bd3 c5 exd5`,
      orientation: 'black',
      choices: [
        { text: '4...exd5', correct: true, why: "Right. Black gets an Exchange-style position with a free c8-bishop, and no piece in the center to be chased. It is level." },
        { text: '4...Qxd5', why: 'The queen can be chased with 5.Nc3, and White gets a lead in development. White is better.' },
        { text: '4...cxd4', why: "This doesn't take back at all, so White's d5-pawn stays alive. After 5.Bb5+ White is better." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does White play 6.Ne2 here, not 6.Nf3?',
      moves: `${FRENCH} Bd3 dxe4 Bxe4 Nf6 Bf3 c5 Ne2`,
      orientation: 'white',
      choices: [
        { text: 'The bishop already stands on f3', correct: true, why: 'Right. The knight takes the next-best square, e2, where it still guards d4.' },
        { text: 'From e2 the knight attacks c5', why: 'A knight on e2 does not reach c5. It guards d4 and can go to c3 or g3 later.' },
        { text: 'To prepare f2–f4', why: 'f4 is not part of the plan here. The f3-square is simply taken by the bishop.' }
      ]
    }
  ],
  key: { name: 'Schlechter 3.Bd3: 4...Nf6 hits the bishop', moves: `${FRENCH} Bd3 dxe4 Bxe4 Nf6`, orientation: 'black' },
  terms: [
    { term: 'Schlechter Variation', meaning: 'The French line 1.e4 e6 2.d4 d5 3.Bd3, named after Carl Schlechter.' },
    { term: 'Lead in development', meaning: 'Having more pieces out than the opponent. It is often worth a pawn, especially if it lets you attack.' },
    { term: 'Compensation', meaning: 'What a side gets in return for giving up material, such as time, open lines or attacking chances.' }
  ]
})
