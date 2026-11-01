import { defineModule } from '../../../types'
import { ALAPIN } from '../lines'

/** 2...Nc6 3.d4 cxd4 4.cxd4 d6? 5.d5! Nb8: a slow move lets White grab space (engine-checked illustration) */
const SLOW = `${ALAPIN} Nc6 d4 cxd4 cxd4 d6 d5 Nb8`
/** alapin-d5, first moves */
const D5 = `${ALAPIN} d5 exd5 Qxd5 d4 Nf6 Nf3`
/** alapin-nf6, first moves */
const NF6 = `${ALAPIN} Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6`

export default defineModule({
  id: '7.1',
  title: '2.c3: building the big center',
  minutes: 10,
  level: 2,
  goals: [
    'Understand why 2.c3 prepares d4',
    "See what White gets if Black doesn't react",
    "Meet Black's two main answers: 2...d5 and 2...Nf6"
  ],
  intro:
    "In the Open Sicilian, White plays d4 and lets Black swap the c-pawn for it. The Alapin, 2.c3, prepares d4 differently: if Black takes on d4, a pawn takes back. Why does that matter, and how should Black answer?",
  sections: [
    {
      kind: 'walkthrough',
      title: "White's dream: two pawns in the center",
      intro: 'Watch what happens when Black develops quietly and lets White build the center.',
      moves: SLOW,
      start: 2,
      orientation: 'white',
      steps: {
        2: {
          title: 'The Sicilian',
          text: "1...c5. In the Open Sicilian, White plays 2.Nf3 and 3.d4, and after ...cxd4 the knight takes back. Then White has one center pawn, on e4, against Black's two, on d7 and e7.",
          arrows: [['c5', 'd4', 'yellow']]
        },
        3: {
          title: 'Preparing d4',
          text: '2.c3. The pawn gets ready to support d2–d4. If Black ever takes on d4, the c3-pawn can take back and keep a pawn in the center.',
          arrows: [['c3', 'd4', 'green'], ['d2', 'd4', 'blue']]
        },
        4: {
          title: 'A quiet reply',
          text: '2...Nc6. A normal developing move, and a fine one. But it does nothing against e4, so White can push d4 at once.',
          arrows: [['c6', 'd4', 'blue']]
        },
        5: {
          title: 'The center is built',
          text: '3.d4. The c3-pawn and the queen both guard d4. White is ready to meet ...cxd4 with cxd4.',
          arrows: [['c3', 'd4', 'green'], ['d1', 'd4', 'green']]
        },
        6: {
          title: 'Black trades',
          text: '3...cxd4. Black swaps the c-pawn for the d-pawn, just as in the Open Sicilian.',
          marks: ['d4']
        },
        7: {
          title: 'A pawn takes back',
          text: '4.cxd4. This is the point of 2.c3. White has two pawns side by side on d4 and e4, a big center. In the Open Sicilian a knight would stand on d4 instead.',
          marks: ['d4', 'e4']
        },
        8: {
          title: 'Too slow',
          text: '4...d6. A quiet move. Black had to hit the center at once with 4...d5. Now White can use the big center to grab space.',
          arrows: [['d4', 'd5', 'red']],
          ann: '?'
        },
        9: {
          title: 'The knight is kicked',
          text: '5.d5. The pawn attacks the c6-knight. It has no good square: 5...Ne5 runs into 6.f4, and most other moves lose material.',
          arrows: [['d5', 'c6', 'red']],
          ann: '!'
        },
        10: {
          title: 'All the way home',
          text: '5...Nb8. The knight goes back to where it started. White has more space and an easy game, and is clearly better.',
          marks: ['b8', 'd5']
        }
      }
    },
    {
      kind: 'text',
      title: 'The price of 2.c3',
      body:
        "2.c3 is not free. It does not develop a piece, and it takes the c3-square away from White's own b1-knight. So for a move or two, nothing guards the e4-pawn, and White's knight cannot come to c3 to defend it or to chase a black piece in the center.\n\nThat tells Black what to do: **hit e4 at once**, before d4 is supported. The two main ways are **2...d5** and **2...Nf6**. The engine rates both as roughly equal."
    },
    {
      kind: 'walkthrough',
      title: 'Answer one: 2...d5',
      intro: "Black attacks e4 with a pawn and takes back with the queen. Look at which White piece can't chase it.",
      moves: D5,
      start: 3,
      orientation: 'black',
      steps: {
        3: {
          title: 'White wants d4',
          text: '2.c3. White is one move away from a big center.',
          arrows: [['d2', 'd4', 'blue']]
        },
        4: {
          title: 'Strike at e4',
          text: '2...d5. The pawn attacks e4 before White can play d4. Nothing guards e4, so White must decide now.',
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'White takes',
          text: '3.exd5. White swaps off the e-pawn. Now Black takes back with the queen.',
          marks: ['d5']
        },
        6: {
          title: 'The queen in the center',
          text: '3...Qxd5. An early queen move is usually risky, because a knight on c3 would attack it with gain of time. Here the c3-pawn blocks that square.',
          marks: ['c3'],
          arrows: [['b1', 'c3', 'blue']]
        },
        7: {
          title: 'd4 after all',
          text: '4.d4. White gets the pawn to d4, but the e-pawn is gone. One pawn in the center is much less than two.',
          marks: ['d4']
        },
        8: {
          title: 'Develop',
          text: '4...Nf6. Black develops and keeps the queen where it is. Nothing attacks it on d5.',
          arrows: [['g8', 'f6', 'green']]
        },
        9: {
          title: 'Roughly equal',
          text: '5.Nf3. Both sides develop normally, and the position is roughly equal. Module 7.2 shows how Black continues.',
          arrows: [['f3', 'd4', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Answer two: 2...Nf6',
      intro: 'This time Black attacks e4 with a knight and invites the pawn forward.',
      moves: NF6,
      start: 3,
      orientation: 'black',
      steps: {
        3: {
          title: 'e4 has no guard',
          text: '2.c3. Look at e4: no White piece defends it, and the b1-knight cannot reach c3 to help.',
          marks: ['e4']
        },
        4: {
          title: 'The knight hits e4',
          text: '2...Nf6. The knight attacks the e4-pawn. White has to move it or guard it.',
          arrows: [['f6', 'e4', 'red']]
        },
        5: {
          title: 'The pawn advances',
          text: '3.e5. The usual answer. The pawn attacks the knight, so White gains a little time.',
          arrows: [['e5', 'f6', 'red']]
        },
        6: {
          title: 'A central knight',
          text: '3...Nd5. The knight jumps to the center. Later Black will attack the e5-pawn with ...d6.',
          arrows: [['d7', 'd6', 'blue']]
        },
        7: {
          title: 'White builds the center',
          text: '4.d4. The d-pawn supports e5 and attacks c5.',
          arrows: [['d4', 'e5', 'green'], ['d4', 'c5', 'red']]
        },
        8: {
          title: 'Black takes',
          text: '4...cxd4. Black swaps the c-pawn for White\'s d-pawn, as usual in the Sicilian.',
          marks: ['d4']
        },
        9: {
          title: 'Develop first',
          text: '5.Nf3. White develops and leaves the d4-pawn for now. It can usually be won back later with the c-pawn.',
          arrows: [['c3', 'd4', 'blue']]
        },
        10: {
          title: 'Pressure on e5',
          text: '5...Nc6. The knight attacks e5 and guards the d4-pawn. The position is roughly equal. Module 7.4 looks at 2...Nf6 in detail.',
          arrows: [['c6', 'e5', 'red'], ['c6', 'd4', 'green']]
        }
      }
    },
    {
      kind: 'history',
      title: 'Who was Alapin?',
      body:
        "The line is named after Semyon Alapin (1856–1923), who played it long ago. Today it is one of White's most solid ways to avoid the Open Sicilian. Evgeny Sveshnikov, whose name is on the Sveshnikov Variation of Chapter 5, wrote a whole book about 2.c3."
    }
  ],
  takeaway:
    'After 2.c3, White wants d4 and, after ...cxd4, cxd4 with two pawns in the center. Black should hit e4 at once with 2...d5 or 2...Nf6, while the c3-pawn still keeps White\'s knight off c3.',
  lookAhead: 'Module 7.2 looks closely at 2...d5 and explains why the black queen is safe on d5.',
  drills: [
    {
      title: 'Build the center',
      prompt: "You're White. Play the Alapin plan: prepare d4, take back with a pawn, and punish Black's slow fourth move.",
      moves: SLOW.split(' ').slice(0, 9).join(' '),
      start: 2,
      side: 'white',
      hints: ['First prepare d4 with your c-pawn.', 'After 4...d6, push your d-pawn again and attack the c6-knight.'],
      success: '2.c3, 3.d4, 4.cxd4 and 5.d5! The knight has to go back, and White has a big space advantage.'
    },
    {
      title: 'Hit e4 with the knight',
      prompt: "You're Black. White has played 2.c3. Attack e4 at once, find a good square when the pawn advances, and then trade on d4.",
      moves: NF6.split(' ').slice(0, 8).join(' '),
      start: 2,
      side: 'black',
      hints: ['Which knight move attacks e4?', 'When the pawn hits your knight, jump to the center.'],
      success: '2...Nf6, 3...Nd5 and 4...cxd4. Black is developing and putting pressure on White\'s center.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the main idea of 2.c3?',
      moves: ALAPIN,
      orientation: 'white',
      choices: [
        { text: 'To play d4 and take back on d4 with a pawn', correct: true, why: 'Right. After ...cxd4 cxd4, White keeps pawns on d4 and e4: a big center.' },
        { text: 'To develop the knight to c3', why: 'The opposite. The c3-pawn takes that square away from the b1-knight.' },
        { text: 'To attack the c5-pawn', why: 'A pawn on c3 does not attack c5. It supports d4.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Black has just played the slow 4...d6. What is the strongest move?',
      moves: SLOW.split(' ').slice(0, 8).join(' '),
      orientation: 'white',
      choices: [
        { text: '5.d5', correct: true, why: 'Yes. The pawn kicks the c6-knight, which has no good square, and White gains a lot of space.' },
        { text: '5.e5', why: 'After 5...dxe5 6.d5 Nd4, White\'s center has gone and Black is better.' },
        { text: '5.Bb5', why: 'It is playable, but trading the bishop for the knight lets most of White\'s advantage slip away. 5.d5 is much stronger.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does Black want to attack e4 right after 2.c3?',
      choices: [
        { text: 'Nothing defends e4, and the b1-knight cannot come to c3 to help', correct: true, why: 'Exactly. That is the price of 2.c3, so Black should use it with 2...d5 or 2...Nf6.' },
        { text: 'Because the e4-pawn is pinned', why: 'Nothing pins the e4-pawn. It is simply undefended for the moment.' },
        { text: 'Because 2.c3 threatens checkmate', why: '2.c3 threatens nothing yet. It only prepares d4.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Which pair of moves are Black\'s two main answers to 2.c3?',
      choices: [
        { text: '2...d5 and 2...Nf6', correct: true, why: 'Right. Both attack e4 at once, and the engine rates both as roughly equal.' },
        { text: '2...d6 and 2...g6', why: 'Both are playable, but neither hits e4, so White gets d4 in comfortably.' },
        { text: '2...e5 and 2...a6', why: 'Neither challenges e4 directly. They let White play d4 or develop freely.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Which opening is this?',
      moves: `${ALAPIN} d5 exd5 Qxd5`,
      orientation: 'black',
      choices: [
        { text: 'The Alapin with 2...d5', correct: true, why: 'Yes. 2.c3 is the Alapin, and 2...d5 3.exd5 Qxd5 is one of Black\'s two main answers.' },
        { text: 'The Scandinavian Defense', why: 'The Scandinavian is 1...d5. Here Black played 1...c5 first, and White answered 2.c3.' },
        { text: 'The Smith–Morra Gambit', why: 'The Morra is 2.d4 cxd4 3.c3, a pawn sacrifice. Here White played 2.c3 at once.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 2.c3 Nc6 3.d4 cxd4 4.cxd4, how is the center different from an Open Sicilian?',
      choices: [
        { text: 'White has two center pawns, on d4 and e4, instead of one', correct: true, why: 'Right. In the Open Sicilian a knight takes on d4; here a pawn does, so White keeps a full pawn center.' },
        { text: 'Black has two center pawns and White has none', why: 'White has pawns on d4 and e4. Black still has the d- and e-pawns at home.' },
        { text: 'Nothing is different', why: 'The difference is the recapture: a pawn on d4 instead of a knight.' }
      ]
    }
  ],
  key: { name: 'Alapin Variation: 2.c3', moves: ALAPIN, orientation: 'black' },
  terms: [
    { term: 'Alapin Variation', meaning: 'The move 2.c3 against the Sicilian. White prepares d4 so that a pawn can take back on d4.' },
    { term: 'Pawn center', meaning: 'Pawns on the central squares, like d4 and e4. Two pawns side by side give space and control.' },
    { term: 'Gain of time', meaning: 'Making a useful move that also forces your opponent to react, for example by attacking a piece.' }
  ]
})
