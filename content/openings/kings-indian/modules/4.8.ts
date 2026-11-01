import { defineModule } from '../../../types'
import { MAIN } from '../lines'

/** classical-9nd2 */
const ND2 = `${MAIN} Nd2 a5 a3 Nd7 Rb1 f5 b4 Kh8 f3 Ng8`
/** classical-9bd2 */
const BD2 = `${MAIN} Bd2 Nh5 g3 f5`
/** classical-9a4 */
const A4 = `${MAIN} a4 a5 Ne1 Nd7 Be3 f5 f3 f4 Bf2 g5`

export default defineModule({
  id: '4.8',
  title: '9.Nd2, 9.Bd2 and 9.a4',
  minutes: 12,
  level: 3,
  goals: [
    'Learn the 9.Nd2 plan: a3, Rb1 and b2–b4, with the knight heading for c4',
    'See how 9.Bd2 and 10.g3 keep the knight out of f4',
    'Know what changes when the a-pawns meet after 9.a4 a5'
  ],
  intro:
    "9.Ne1 and 9.b4 are White's two main moves after 8...Ne7, but they are not the only ones. This module shows three more ways to prepare the queenside attack. The goal is always the same: c4–c5, the c-file and the c7-square. Only the route changes.",
  sections: [
    {
      kind: 'walkthrough',
      title: '9.Nd2: the knight heads for c4',
      intro: 'Watch the b-pawn: White prepares b2–b4 carefully before pushing it.',
      moves: ND2,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'Another knight route',
          text: '8...Ne7. This time the f3-knight goes to d2 instead of e1.',
          arrows: [['f3', 'd2', 'blue']]
        },
        17: {
          title: 'Toward c4',
          text: '9.Nd2. lichess calls this the Modern System. The knight is heading for b3, where it supports c4–c5, or for c4 once the c-pawn has moved on. Like Ne1, it also frees the f-pawn.',
          arrows: [['d2', 'b3', 'blue'], ['c4', 'c5', 'green']]
        },
        18: {
          title: 'Slowing b2–b4',
          text: '9...a5. Black makes b2–b4 harder: the a5-pawn guards b4.',
          arrows: [['a5', 'b4', 'red']]
        },
        19: {
          title: 'Preparing b4',
          text: '10.a3. Now b2–b4 will be backed up. If Black ever takes on b4, the a-pawn takes back.',
          arrows: [['a3', 'b4', 'green']]
        },
        20: {
          title: 'The usual knight move',
          text: '10...Nd7. Black frees the f-pawn and watches c5.',
          arrows: [['f7', 'f5', 'blue'], ['d7', 'c5', 'green']]
        },
        21: {
          title: 'Rook behind the pawn',
          text: '11.Rb1. The rook supports the b-pawn from behind, so b2–b4 can come next.',
          arrows: [['b2', 'b4', 'green']]
        },
        22: {
          title: "Black's lever",
          text: '11...f5. The usual answer, hitting e4.',
          arrows: [['f5', 'e4', 'red']]
        },
        23: {
          title: 'The b-pawn advances',
          text: '12.b4. Now the push is well supported, and the b-pawn backs up c4–c5.',
          arrows: [['b4', 'c5', 'green']]
        },
        24: {
          title: 'King to the corner',
          text: '12...Kh8. The king steps into the corner and makes room for a knight on g8.',
          marks: ['g8']
        },
        25: {
          title: 'Holding e4',
          text: '13.f3. The pawn guards e4, just as in the Mar del Plata.',
          arrows: [['f3', 'e4', 'green']]
        },
        26: {
          title: 'A flexible knight',
          text: '13...Ng8. The e7-knight drops back. From g8 it defends the king and can return to the game via f6. The engine calls White slightly better.',
          arrows: [['g8', 'f6', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Where 9.Nd2 can lead',
      body:
        "The knight on d2 usually goes on to b3, to back up c4–c5, or to c4 once the c-pawn has moved. Black does not have to wait: in Gelfand–Nakamura (2010), Black answered 9.Nd2 with 9...Ne8 and won a famous race on the kingside. Module 3.6 shows that game from Black's side. The lesson for White is the same as in the Mar del Plata: the queenside play has to be fast."
    },
    {
      kind: 'walkthrough',
      title: '9.Bd2: keeping the knight out of f4',
      intro: 'A quieter set-up. White develops the bishop first and stops the ...Nf4 jump from Module 4.6.',
      moves: BD2,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'Bishop first',
          text: '8...Ne7. This time White develops the dark-squared bishop before deciding on a knight route.',
          arrows: [['c1', 'd2', 'blue']]
        },
        17: {
          title: 'The Korchnoi Attack',
          text: '9.Bd2. lichess calls this the Korchnoi Attack. The bishop develops where Black\'s pawns cannot hit it, and the c1-square is free for a rook.',
          arrows: [['a1', 'c1', 'blue']]
        },
        18: {
          title: 'The knight to h5',
          text: '9...Nh5. As against the Bayonet, the knight frees the f-pawn and eyes f4.',
          arrows: [['h5', 'f4', 'red']]
        },
        19: {
          title: 'Closing f4',
          text: '10.g3. The pawn takes f4 away from the knight. The price is a small weakening around White\'s king.',
          arrows: [['g3', 'f4', 'green']]
        },
        20: {
          title: 'The lever anyway',
          text: '10...f5. Black plays the usual lever. The engine calls the position roughly equal.',
          arrows: [['f5', 'e4', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '9.a4: fixing the queenside first',
      intro: 'White pushes the a-pawn before anything else. Black answers in kind, and then the Mar del Plata moves follow.',
      moves: A4,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'The a-pawn first',
          text: '8...Ne7 once more. This time White starts with the a-pawn.',
          arrows: [['a2', 'a4', 'green']]
        },
        17: {
          title: 'Space on the queenside',
          text: '9.a4. White gains space and stops Black from ever playing ...b5 comfortably.',
          arrows: [['a4', 'b5', 'red']]
        },
        18: {
          title: 'The a-pawns meet',
          text: '9...a5. Black stops a4–a5. The a-pawns now block each other, and b2–b4 is harder for White, because the a5-pawn guards b4.',
          arrows: [['a5', 'b4', 'red']],
          marks: ['a4', 'a5']
        },
        19: {
          title: 'Back to the Mar del Plata',
          text: '10.Ne1. White heads for the Mar del Plata set-up, with the a-pawns already fixed.',
          arrows: [['e1', 'd3', 'blue']]
        },
        20: {
          title: 'The usual knight move',
          text: '10...Nd7. Black frees the f-pawn.',
          arrows: [['f7', 'f5', 'blue']]
        },
        21: {
          title: 'Bishop to e3',
          text: '11.Be3. The bishop develops toward c5, as in Module 4.1.',
          arrows: [['e3', 'c5', 'blue']]
        },
        22: {
          title: 'The lever',
          text: '11...f5. Black hits e4.',
          arrows: [['f5', 'e4', 'red']]
        },
        23: {
          title: 'Holding e4',
          text: '12.f3. The pawn guards e4.',
          arrows: [['f3', 'e4', 'green']]
        },
        24: {
          title: 'Black gains space',
          text: '12...f4. The pawn kicks the bishop and grabs kingside space.',
          arrows: [['f4', 'e3', 'red']]
        },
        25: {
          title: 'Still on the diagonal',
          text: '13.Bf2. The bishop keeps its view of c5.',
          arrows: [['f2', 'c5', 'blue']]
        },
        26: {
          title: 'The same race',
          text: "13...g5. The familiar race, with the a-pawns fixed. White's next steps are Nd3 and b2–b4, which is also the engine's choice. The engine calls White slightly better.",
          arrows: [['g5', 'g4', 'red'], ['e1', 'd3', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Same targets, different routes',
      body:
        "Whatever White's 9th move, the targets stay the same: **c4–c5, the c-file and the c7-square**. 9.Ne1 sends the knight to d3, 9.Nd2 sends it toward c4 or b3, and 9.b4 uses a pawn instead. Know the targets, and the moves make sense."
    }
  ],
  takeaway:
    "9.Nd2 prepares b2–b4 with a3 and Rb1 while the knight heads for c4 or b3. 9.Bd2 with g3 keeps the knight out of f4. 9.a4 a5 fixes the a-pawns before the usual race. The targets never change: c5, the c-file and c7.",
  lookAhead:
    "Chapter 5 turns to White's other 7th moves, 7.d5 (the Petrosian) and 7.Be3 (the Gligorić), and to Black's alternatives to 7...Nc6.",
  drills: [
    {
      title: 'Prepare b2–b4',
      prompt: "You're White in the 9.Nd2 line. Black has just played 9...a5 to stop b2–b4. Prepare the push, play it, and hold e4.",
      moves: `${MAIN} Nd2 a5 a3 Nd7 Rb1 f5 b4 Kh8 f3`,
      start: 18,
      side: 'white',
      hints: ['First make sure b4 can be recaptured by a pawn, then put a rook behind the b-pawn.', 'a3, Rb1, b4, and then the f-pawn guards e4.'],
      success: '10.a3, 11.Rb1, 12.b4 and 13.f3. The b-pawn is supported, and e4 is safe.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 9.Nd2, where is White\'s knight heading?',
      moves: `${MAIN} Nd2`,
      orientation: 'white',
      choices: [
        { text: 'To b3 or c4, to help the c4–c5 plan', correct: true, why: 'Right. From b3 it supports c4–c5, and c4 becomes a good square once the pawn has moved. Like the d3-knight in the Mar del Plata, it joins the queenside attack.' },
        { text: 'To e4, to attack d6', why: 'e4 is occupied by White\'s own pawn. The knight goes to c4 or b3.' },
        { text: 'To f1 and g3, to attack Black\'s king', why: "White's attack is on the queenside, where the pawn chain points. The knight heads for c4 or b3." }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 9.Bd2 line, why does White play 10.g3 after 9...Nh5?',
      moves: `${MAIN} Bd2 Nh5 g3`,
      orientation: 'white',
      choices: [
        { text: 'To keep the knight out of f4', correct: true, why: 'Right. The g3-pawn controls f4, so the ...Nf4 jump from Module 4.6 is off.' },
        { text: 'To attack the h5-knight', why: 'A pawn on g3 does not attack h5. It controls f4 and h4.' },
        { text: 'To start a kingside pawn storm with g4', why: "White's play is on the queenside. g3 is a defensive move against ...Nf4." }
      ]
    },
    {
      type: 'name',
      prompt: 'What does lichess call 9.Bd2 in this position?',
      moves: `${MAIN} Bd2`,
      orientation: 'white',
      choices: [
        { text: 'The Korchnoi Attack', correct: true, why: 'Right. That is the lichess name for 9.Bd2.' },
        { text: 'The Bayonet Attack', why: 'That is 9.b4 (Modules 4.5 to 4.7).' },
        { text: 'The Mar del Plata', why: 'That is 9.Ne1 Nd7 (Chapter 3).' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 9.a4 a5, what changes for White\'s queenside play?',
      moves: `${MAIN} a4 a5`,
      orientation: 'white',
      choices: [
        { text: 'b2–b4 is harder, because the a5-pawn guards b4', correct: true, why: 'Right. White can prepare it with Nd3, so that the knight takes back on b4.' },
        { text: 'The a-file is now open for White\'s rook', why: 'Both a-pawns are still on the board, blocking each other. The a-file is closed.' },
        { text: 'White can no longer play c4–c5', why: 'c4–c5 is still White\'s main lever. It just needs preparing, as usual.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'In the 9.Nd2 line, why does White play 10.a3 and 11.Rb1 before 12.b4?',
      moves: `${MAIN} Nd2 a5 a3 Nd7 Rb1 f5`,
      orientation: 'white',
      choices: [
        { text: 'So that b2–b4 is supported and ...axb4 does not win a pawn', correct: true, why: 'Right. After ...axb4, axb4 takes back, and the rook backs up the b-pawn.' },
        { text: "To attack Black's a5-pawn", why: 'The a3-pawn and the rook support b4. The a5-pawn is not the target.' },
        { text: 'To get ready to castle queenside', why: 'White has already castled kingside. These moves prepare b2–b4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 9.Nd2 line, Black played 12...Kh8 and 13...Ng8. What is the knight doing on g8?',
      moves: ND2,
      orientation: 'white',
      choices: [
        { text: 'Guarding the king, ready to come back via f6', correct: true, why: 'Right. It is a regrouping move, not a retreat in panic.' },
        { text: 'It was attacked and had to run', why: 'Nothing attacked the knight on e7. Black moved it to a better square on purpose.' },
        { text: 'It is heading for h6 to attack White\'s queen', why: 'White\'s queen is on d1, nowhere near. The knight is defending and will return via f6.' }
      ]
    }
  ],
  key: { name: 'Classical 9.Nd2: a3, Rb1 and b2–b4', moves: `${MAIN} Nd2 a5 a3 Nd7 Rb1 f5 b4`, orientation: 'white' },
  terms: [
    { term: 'Fixed pawns', meaning: 'Pawns that block each other on the same file, so neither can advance. After 9.a4 a5 the a-pawns are fixed.' },
    { term: 'Regrouping', meaning: 'Moving pieces to better squares, sometimes backward first, to prepare the next plan.' }
  ]
})
