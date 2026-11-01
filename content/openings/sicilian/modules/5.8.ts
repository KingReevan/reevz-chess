import { defineModule } from '../../../types'
import { ROSSOLIMO } from '../lines'

/** anti-svesh-3nc3: 3.Nc3 e5 4.Bc4 Be7 5.d3 d6 6.Nd2 Bg5 */
const ANTI = 'e4 c5 Nf3 Nc6 Nc3 e5 Bc4 Be7 d3 d6 Nd2 Bg5'

export default defineModule({
  id: '5.8',
  title: 'How White avoids it: 3.Nc3 and 3.Bb5',
  minutes: 9,
  level: 3,
  goals: [
    'Understand why White may want to avoid the Sveshnikov on move three',
    "Learn the Anti-Sveshnikov plan: 3.Nc3 e5 4.Bc4, d3 and Nd2–f1–e3",
    'Know that 3.Bb5, the Rossolimo, is the other way (Chapter 9)'
  ],
  intro:
    "After 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5, Black is in the Sveshnikov, a sharp opening that Black players often know very deeply. Many White players would rather avoid it. The trick is simple: don't play 3.d4. This module shows the two main ways, 3.Nc3 and 3.Bb5, and what Black does against the first one.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Anti-Sveshnikov: 3.Nc3',
      intro: "Watch the d4 and d5 squares. Black takes d4, so White plays slowly against d5.",
      moves: ANTI,
      start: 4,
      orientation: 'white',
      steps: {
        4: {
          title: 'A Sveshnikov player?',
          text: "2...Nc6. If White now plays 3.d4, Black can head for the Sveshnikov with 3...cxd4 4.Nxd4 Nf6 5.Nc3 e5.",
          arrows: [['d2', 'd4', 'blue']]
        },
        5: {
          title: 'White waits',
          text: '3.Nc3. White develops and keeps the d-pawn at home for now. If Black picks a different set-up, White can still play d4 later.',
          arrows: [['c3', 'd5', 'green']]
        },
        6: {
          title: 'Black grabs d4',
          text: "3...e5. Black claims the center at once. The c5- and e5-pawns and the c6-knight all guard d4, so White won't play d4. But neither of these pawns can guard d5 any more.",
          arrows: [['c5', 'd4', 'red'], ['e5', 'd4', 'red'], ['c6', 'd4', 'red']],
          marks: ['d5']
        },
        7: {
          title: 'Aiming at d5',
          text: '4.Bc4. The bishop aims at d5 and, further along the same diagonal, at f7.',
          arrows: [['c4', 'f7', 'blue']],
          marks: ['d5']
        },
        8: {
          title: 'Modest development',
          text: '4...Be7. The bishop develops quietly. It will soon have a job on g5.'
        },
        9: {
          title: 'A quiet center',
          text: '5.d3. White supports e4 and the c4-bishop and opens the way for the c1-bishop. There is no hurry: the center stays closed.',
          arrows: [['d3', 'e4', 'green'], ['d3', 'c4', 'green']]
        },
        10: {
          title: 'Guarding e5',
          text: '5...d6. Black guards e5 and opens the c8-bishop.',
          arrows: [['d6', 'e5', 'green']]
        },
        11: {
          title: 'The knight reroutes',
          text: '6.Nd2. The knight steps back. Its route is f1 and then e3, where it will eye d5 and f5. It also frees the f-pawn.',
          arrows: [['d2', 'f1', 'blue'], ['f1', 'e3', 'blue']]
        },
        12: {
          title: 'Trading the bad bishop',
          text: "6...Bg5. Black's pawns on d6 and e5 block this bishop, so Black offers to trade it. Once the d2-knight moves, ...Bxc1 removes White's good bishop. The game is roughly level.",
          arrows: [['g5', 'c1', 'yellow']],
          marks: ['d6', 'e5']
        }
      }
    },
    {
      kind: 'text',
      title: 'What each side wants',
      body:
        "**White** plays against the d5 hole without opening the center: Bc4, Nd5 at the right moment, and a knight coming via f1 to e3. White's moves are simple and there is little forced theory to learn.\n\n**Black** has a firm grip on d4 and trades the bad dark-squared bishop with ...Be7–g5. Black's pawns on c5 and e5 take space, and the game is roughly level.\n\nFor Black, the lesson is that ...e5 with ...d6 always leaves a hole on d5. In the Sveshnikov that is the price for time gained on a knight. Here no knight is kicked, so Black gets the hole without the gain of time. With the center closed, the game still stays roughly level."
    },
    {
      kind: 'walkthrough',
      title: 'The other way: 3.Bb5',
      intro: 'A quick look only. Chapter 9 teaches this opening properly.',
      moves: ROSSOLIMO,
      start: 2,
      orientation: 'white',
      steps: {
        2: {
          title: 'The Sicilian',
          text: '1...c5. Black answers 1.e4 with the Sicilian.'
        },
        3: {
          title: 'The usual knight move',
          text: '2.Nf3. White develops and keeps 3.d4 as an option.'
        },
        4: {
          title: 'The Sveshnikov move order',
          text: '2...Nc6. This is the move that allows the Sveshnikov after 3.d4.'
        },
        5: {
          title: 'The Rossolimo',
          text: "3.Bb5. White develops the bishop and puts pressure on the c6-knight. White plans to castle quickly and doesn't open the center with d4 yet, so Black does not get to kick a knight on d4 with ...e5. Chapter 9 shows what comes next.",
          arrows: [['b5', 'c6', 'red'], ['e1', 'g1', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Choosing your move-three answer',
      body:
        "If you play 1.e4 and don't want to learn the Sveshnikov, pick one of these two and learn its plans: 3.Nc3 leads to quiet play against d5, and 3.Bb5 leads to the Rossolimo. Both are popular with strong players. If you play the Sveshnikov as Black, expect to meet them often, and know your plan: ...e5 against 3.Nc3, and the Chapter 9 ideas against 3.Bb5."
    }
  ],
  takeaway:
    "White avoids the Sveshnikov by not playing 3.d4. After 3.Nc3 e5 4.Bc4, White plays slowly against d5 with d3 and Nd2–f1–e3, while Black trades the bad bishop with ...Be7–g5. The other way is 3.Bb5, the Rossolimo (Chapter 9).",
  lookAhead:
    "Chapter 6 turns to the ...e6 Sicilians: the Taimanov, the Kan, the Four Knights and the Pin Variation, where Black keeps the d-pawn flexible.",
  drills: [
    {
      title: 'The Anti-Sveshnikov as White',
      prompt: "You're White. Black has just played 2...Nc6. Avoid the Sveshnikov, and after 3...e5 set up the quiet plan against d5.",
      moves: 'e4 c5 Nf3 Nc6 Nc3 e5 Bc4 Be7 d3 d6 Nd2',
      start: 4,
      side: 'white',
      hints: ["Don't play d4. Develop the queen's knight first.", 'After 3...e5, aim a bishop at d5. Then support e4 with the d-pawn and send the f3-knight on its way toward e3.'],
      success: '3.Nc3 e5 4.Bc4 Be7 5.d3 d6 6.Nd2. The knight is heading for f1 and e3, and White plays against d5.'
    },
    {
      title: 'Black against 3.Nc3',
      prompt: "You're Black. White is about to play 3.Nc3. Grab d4 with a pawn, develop, and get your bad bishop out to trade it.",
      moves: ANTI,
      start: 4,
      side: 'black',
      hints: ['Push the e-pawn two squares to control d4.', 'Develop with ...Be7 and ...d6, and after 6.Nd2 put the bishop on g5.'],
      success: '3...e5, ...Be7, ...d6 and ...Bg5. Black has a firm grip on d4 and is ready to trade the bad bishop.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 3.Nc3 e5, which square does White play against?',
      moves: 'e4 c5 Nf3 Nc6 Nc3 e5',
      orientation: 'white',
      choices: [
        { text: 'd5, which the c5- and e5-pawns can no longer guard', correct: true, why: 'Right. White aims at it with Bc4, a knight on d5, and another knight coming via f1 to e3.' },
        { text: 'd4, to push the d-pawn there', why: 'Black guards d4 three times (c5, e5 and the c6-knight). White plays around it, against d5.' },
        { text: 'c5, to win the c-pawn', why: "The c5-pawn isn't a target here. White's plan is about the d5 hole." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does Black play ...Be7 and then ...Bg5 in the Anti-Sveshnikov?',
      moves: ANTI,
      orientation: 'black',
      choices: [
        { text: 'To trade the dark-squared bishop, which is blocked by Black\'s own pawns on d6 and e5', correct: true, why: 'Yes. On g5 it offers a trade with White\'s c1-bishop, which has more scope.' },
        { text: "To attack White's king", why: 'The g5-bishop does not reach the king on e1. The point is trading a bad bishop.' },
        { text: 'To win the d2-knight', why: 'The d2-knight is well guarded. ...Bg5 is about the bishop trade, not about winning material.' }
      ]
    },
    {
      type: 'name',
      prompt: 'White has played 3.Bb5. What is this opening called?',
      moves: ROSSOLIMO,
      orientation: 'white',
      choices: [
        { text: 'The Rossolimo', correct: true, why: 'Right. Some databases call it the Nyezhmetdinov–Rossolimo Attack. Chapter 9 covers it.' },
        { text: 'The Moscow', why: 'The Moscow is 2...d6 3.Bb5+, with check. Here Black played 2...Nc6.' },
        { text: 'The Alapin', why: 'The Alapin is 2.c3. Here White played 2.Nf3 and 3.Bb5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why do 3.Nc3 and 3.Bb5 both avoid the Sveshnikov?',
      choices: [
        { text: "White doesn't play d4, so there is no knight on d4 for ...e5 to kick", correct: true, why: 'Exactly. The Sveshnikov needs 3.d4 cxd4 4.Nxd4. Without that, ...e5 gains no time.' },
        { text: 'They stop Black from ever playing ...e5', why: 'Black can still play ...e5; in fact 3.Nc3 e5 is the main line. It just gains no time on a knight.' },
        { text: 'They win a pawn by force', why: 'Neither move wins anything. They simply avoid the positions the Sveshnikov player wants.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'After 1.e4 c5 2.Nf3 Nc6, which White third move lets Black choose the Sveshnikov?',
      choices: [
        { text: '3.d4', correct: true, why: 'Right. After 3...cxd4 4.Nxd4 Nf6 5.Nc3 e5 Black is in the Sveshnikov.' },
        { text: '3.Nc3', why: 'After 3.Nc3, White decides later whether to play d4. If Black plays 3...e5, White simply never does.' },
        { text: '3.Bb5', why: '3.Bb5 is the Rossolimo. White avoids an early d4, so there is no Sveshnikov.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Anti-Sveshnikov after 6.Nd2, where is the knight heading?',
      choices: [
        { text: 'To f1 and then e3, to eye d5 and f5', correct: true, why: 'Yes. From e3 the knight supports the fight for d5.' },
        { text: 'To b3, to attack c5', why: 'Nb3 is possible, but the usual plan is f1 and e3, toward the d5 square.' },
        { text: 'Back to f3', why: 'The knight left f3 on purpose: to reroute toward e3 and to free the f-pawn.' }
      ]
    }
  ],
  key: { name: 'Anti-Sveshnikov: 3.Nc3 e5 ... 6...Bg5', moves: ANTI, orientation: 'white' },
  terms: [
    { term: 'Anti-Sveshnikov', meaning: 'A White move order, 3.Nc3 instead of 3.d4, chosen to avoid the Sveshnikov.' },
    { term: 'Move order', meaning: 'The sequence in which moves are played. A different order can reach, or avoid, a certain opening.' },
    { term: 'Good and bad bishop', meaning: 'A bad bishop is blocked by its own pawns on its color. A good bishop has its pawns on the other color and moves freely.' }
  ]
})
