import { defineModule } from '../../../types'
import { OPEN_NC6 } from '../lines'

/** 4...e5 5.Nb5 d6: the Kalashnikov */
const KALASH = `${OPEN_NC6} e5 Nb5 d6`
/** kalashnikov: 6.c4 Be7 7.N1c3 a6 8.Na3 f5 */
const C4 = `${KALASH} c4 Be7 N1c3 a6 Na3 f5`
/** kalashnikov-6n1c3: 6.N1c3 a6 7.Na3 b5 8.Nd5 Nge7 */
const N1C3 = `${KALASH} N1c3 a6 Na3 b5 Nd5 Nge7`
/** lowenthal: 5...a6 6.Nd6+ Bxd6 7.Qxd6 Qf6 8.Qd1 Qg6 9.Nc3 Nge7 */
const LOWENTHAL = `${OPEN_NC6} e5 Nb5 a6 Nd6+ Bxd6 Qxd6 Qf6 Qd1 Qg6 Nc3 Nge7`

export default defineModule({
  id: '5.7',
  title: 'Kalashnikov and Löwenthal: 4...e5',
  minutes: 11,
  level: 3,
  goals: [
    'Play the Kalashnikov, 4...e5 5.Nb5 d6, and see how it differs from the Sveshnikov',
    "Know White's two main answers: the 6.c4 clamp and 6.N1c3",
    'See why the Löwenthal, 5...a6 6.Nd6+, gives White the bishop pair'
  ],
  intro:
    "What if Black kicks the d4-knight even earlier, on move four, before playing ...Nf6? The pawns end up just as in the Sveshnikov, with a hole on d5 and a backward pawn on d6. But the g8-knight stays at home, which changes the plans for both sides. This module covers the Kalashnikov (5...d6) and the older Löwenthal (5...a6).",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Kalashnikov and the 6.c4 clamp',
      intro: "Compare with the Sveshnikov: same pawns, but White hasn't played Nc3, and Black hasn't played ...Nf6.",
      moves: C4,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'The Open Sicilian',
          text: '4.Nxd4. In the Sveshnikov, Black plays 4...Nf6 first. Here Black strikes at once.',
          arrows: [['c6', 'd4', 'yellow']]
        },
        8: {
          title: '...e5 one move early',
          text: "4...e5. The pawn kicks the knight. Black's g8-knight is still at home, so the f-pawn is free to advance later.",
          arrows: [['e5', 'd4', 'red'], ['f7', 'f5', 'blue']]
        },
        9: {
          title: 'The same square again',
          text: '5.Nb5. As in the Sveshnikov, this is the best square: the knight threatens Nd6+.',
          arrows: [['b5', 'd6', 'red']]
        },
        10: {
          title: 'The Kalashnikov',
          text: '5...d6. Black covers d6. This is the Kalashnikov. The pawns look just like the Sveshnikov: a hole on d5 and a backward pawn on d6.',
          marks: ['d5', 'd6']
        },
        11: {
          title: 'The clamp',
          text: "6.c4. White's b1-knight hasn't gone to c3 yet, so the c-pawn can go to c4. With pawns on c4 and e4, White clamps the d5 square, like the Maróczy Bind of Module 3.9.",
          arrows: [['c4', 'd5', 'green'], ['e4', 'd5', 'green']],
          ann: '!'
        },
        12: {
          title: 'Bishop first',
          text: '6...Be7. The bishop develops. Black keeps the g8-knight at home for now, so the f-pawn stays free to advance.'
        },
        13: {
          title: 'The other knight',
          text: '7.N1c3. The b1-knight develops and adds another guard to d5.',
          arrows: [['c3', 'd5', 'green']]
        },
        14: {
          title: 'Chasing the knight',
          text: '7...a6. Black kicks the b5-knight.',
          arrows: [['a6', 'b5', 'red']]
        },
        15: {
          title: 'Back to a3',
          text: '8.Na3. The knight goes to the rim again. But with a pawn on c4, ...b5 is hard to arrange, and the c2 square is free, so the knight can come back via c2.',
          arrows: [['a3', 'c2', 'blue']]
        },
        16: {
          title: 'The point: ...f5',
          text: "8...f5. This is why Black kept the knight on g8: the f-pawn goes straight to f5 and hits e4. White keeps a small edge.",
          arrows: [['f5', 'e4', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '6.N1c3: Sveshnikov-style play',
      intro: "From White's side: developing the knight to c3 invites play much like the Sveshnikov.",
      moves: N1C3,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'The Kalashnikov position',
          text: '5...d6. White can also simply develop.',
          marks: ['d5']
        },
        11: {
          title: 'Normal development',
          text: '6.N1c3. If Black now played 6...Nf6, the game would reach the Sveshnikov position after 6...d6 (Module 5.1).',
          arrows: [['c3', 'd5', 'green']]
        },
        12: {
          title: 'Chasing first',
          text: '6...a6. Black chases the b5-knight before deciding where the g8-knight goes.',
          arrows: [['a6', 'b5', 'red']]
        },
        13: {
          title: 'To the rim',
          text: '7.Na3. The knight retreats to a3.'
        },
        14: {
          title: 'Shutting the knight out',
          text: '7...b5. As in the Sveshnikov, the pawn takes c4 away from the a3-knight and gets ready for ...b4.',
          arrows: [['b5', 'c4', 'red']]
        },
        15: {
          title: 'Into the hole',
          text: '8.Nd5. The c3-knight jumps to d5, out of reach of ...b4.',
          marks: ['d5']
        },
        16: {
          title: 'Challenging d5',
          text: "8...Nge7. The knight comes to e7 to challenge the d5-knight. White's pieces stand well, and White is clearly better here. 8...Nf6 is Black's better try, with only a small edge for White.",
          arrows: [['e7', 'd5', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The Löwenthal: 5...a6',
      intro: 'The older way to play 4...e5. Black chases the knight at once and lets it check on d6.',
      moves: LOWENTHAL,
      start: 9,
      orientation: 'white',
      steps: {
        9: {
          title: 'The threat',
          text: '5.Nb5. The knight threatens Nd6+.',
          arrows: [['b5', 'd6', 'red']]
        },
        10: {
          title: 'The Löwenthal',
          text: '5...a6. Black attacks the knight and lets it jump to d6. Black accepts giving up the dark-squared bishop for it.',
          arrows: [['a6', 'b5', 'red'], ['b5', 'd6', 'green']]
        },
        11: {
          title: 'Check on d6',
          text: '6.Nd6+. The knight checks the king.',
          arrows: [['d6', 'e8', 'red']]
        },
        12: {
          title: 'Bishop takes',
          text: '6...Bxd6. Black takes the knight with the dark-squared bishop.'
        },
        13: {
          title: 'The queen on d6',
          text: "7.Qxd6. White has the bishop pair. The queen on d6 stops the d7-pawn from moving, so the c8-bishop is stuck for now.",
          marks: ['d7', 'c8']
        },
        14: {
          title: 'Offering a trade',
          text: '7...Qf6. Black offers to trade queens, to get rid of the intruder. 7...Qe7 is a better try, but White keeps an edge there too.',
          arrows: [['f6', 'd6', 'red']]
        },
        15: {
          title: 'Keeping the queens',
          text: '8.Qd1. White steps back. With the bishop pair, White wants to keep pieces on the board.'
        },
        16: {
          title: 'Two targets',
          text: '8...Qg6. The queen hits g2 and e4. The f1-bishop guards g2, but nothing guards e4.',
          arrows: [['g6', 'g2', 'red'], ['g6', 'e4', 'red']],
          marks: ['e4']
        },
        17: {
          title: 'Guarding e4',
          text: '9.Nc3. The knight develops and defends e4.',
          arrows: [['c3', 'e4', 'green']]
        },
        18: {
          title: 'White is clearly better',
          text: "9...Nge7. Black develops, but White has the two bishops and Black's dark squares are weak. White is clearly better.",
          marks: ['d6']
        }
      }
    },
    {
      kind: 'text',
      title: 'Kalashnikov or Sveshnikov?',
      body:
        "Both openings give Black the same pawns: a hole on d5 and a backward pawn on d6. The difference is the move order.\n\n**In the Kalashnikov**, the g8-knight waits, so Black can play ...f5 quickly. But White hasn't committed the b1-knight either, and can grab a clamp with 6.c4. With either 6.c4 or 6.N1c3, White keeps an edge.\n\n**In the Sveshnikov**, White has already played Nc3, so the c4 clamp is not on offer, and White's main tries are 7.Bg5 and 7.Nd5.\n\nThe **Löwenthal** is mainly of historical interest: after 6.Nd6+ White gets the bishop pair and keeps the advantage."
    },
    {
      kind: 'history',
      title: 'Where the names come from',
      body:
        "The Löwenthal is named after Johann Löwenthal, a 19th-century master. It became rare once players found that White keeps the advantage. The origin of the name Kalashnikov is less clear. In 1990 the magazine New in Chess called it \"the semi-automatic, fast-firing version of the Sveshnikov\" (as quoted by the chess historian Edward Winter), but no reliable source confirms who or what it is named after."
    }
  ],
  takeaway:
    "4...e5 5.Nb5 d6 is the Kalashnikov: Sveshnikov pawns, but the g8-knight waits so ...f5 comes fast. White answers with the 6.c4 clamp or 6.N1c3 and keeps an edge. 5...a6 (the Löwenthal) allows 6.Nd6+, and White gets the bishop pair.",
  lookAhead:
    "White doesn't have to allow any of this. Module 5.8 shows how White can sidestep the Sveshnikov on move three.",
  drills: [
    {
      title: 'Play the Kalashnikov',
      prompt: "You're Black. White has just played 4.Nxd4. Kick the knight at once, before playing ...Nf6, and then stop its threat.",
      moves: KALASH,
      start: 7,
      side: 'black',
      hints: ['Push your e-pawn two squares.', 'After 5.Nb5, cover the d6 square with a pawn.'],
      success: '4...e5 5.Nb5 d6: the Kalashnikov. Your g8-knight is still home, so your f-pawn is free for ...f5.'
    },
    {
      title: 'Punish the Löwenthal',
      prompt: "You're White. Black is about to play 5...a6, chasing your knight. Win the bishop pair.",
      moves: `${OPEN_NC6} e5 Nb5 a6 Nd6+ Bxd6 Qxd6`,
      start: 9,
      side: 'white',
      hints: ['Your knight has a check.', 'After 6...Bxd6, take back with the queen.'],
      success: "6.Nd6+ Bxd6 7.Qxd6. White has the bishop pair, and Black's c8-bishop is stuck behind the d7-pawn."
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'Black played 4...e5 and 5...d6. What is this opening called?',
      moves: KALASH,
      orientation: 'black',
      choices: [
        { text: 'The Kalashnikov', correct: true, why: 'Right. Black kicked the knight on move four, before ...Nf6, and covered d6 with 5...d6.' },
        { text: 'The Sveshnikov', why: 'Close, but in the Sveshnikov Black plays 4...Nf6 and White 5.Nc3 before ...e5.' },
        { text: 'The Löwenthal', why: 'The Löwenthal is 5...a6, which allows 6.Nd6+. Here Black covered d6 with 5...d6.' },
        { text: 'The Taimanov', why: 'The Taimanov comes from 2...e6 and 4...Nc6, with the e-pawn on e6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why can White play 6.c4 against the Kalashnikov, but not at the same moment in the Sveshnikov?',
      moves: KALASH,
      orientation: 'white',
      choices: [
        { text: "In the Kalashnikov the b1-knight hasn't gone to c3 yet, so the c-pawn is free to move", correct: true, why: 'Exactly. In the Sveshnikov, White played 5.Nc3 to defend e4, and that knight blocks the c-pawn.' },
        { text: 'In the Kalashnikov Black has already played ...a6', why: "Black hasn't played ...a6 yet. The point is that White's c-pawn is not blocked by a knight on c3." },
        { text: "In the Sveshnikov, c4 would hang a pawn to ...Nxc4", why: 'There is no such trick. In the Sveshnikov the c3-knight simply stands in front of the c-pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does Black leave the g8-knight at home in the Kalashnikov?',
      choices: [
        { text: 'So the f-pawn is free to go to f5 quickly', correct: true, why: 'Right. In the main line 6.c4 Be7 7.N1c3 a6 8.Na3, Black plays 8...f5 at once.' },
        { text: 'Because ...Nf6 would lose a pawn', why: '...Nf6 loses nothing. In fact 6.N1c3 Nf6 simply reaches the Sveshnikov. Black waits to keep ...f5 possible.' },
        { text: 'To castle queenside', why: 'The g8-knight has nothing to do with queenside castling. Keeping it home frees the f-pawn.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black has just played 5...a6. What should White play?',
      moves: `${OPEN_NC6} e5 Nb5 a6`,
      orientation: 'white',
      choices: [
        { text: '6.Nd6+', correct: true, why: 'Yes. After 6...Bxd6 7.Qxd6 White has the bishop pair and Black\'s dark squares are weak.' },
        { text: '6.N5c3', why: 'This retreats without taking the chance. The game is level, while 6.Nd6+ gives White a real edge.' },
        { text: '6.N5a3', why: 'This puts the knight on the rim for nothing, and Black is a little better.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'After 4...e5 5.Nb5 d6 6.N1c3, what happens if Black plays 6...Nf6?',
      choices: [
        { text: 'The game reaches the Sveshnikov position after 6...d6', correct: true, why: 'Right. The pieces and pawns are the same as after 4...Nf6 5.Nc3 e5 6.Ndb5 d6. Only the move order was different.' },
        { text: 'White wins a pawn with Nd6+', why: 'A Black pawn already stands on d6, guarded by the queen and the f8-bishop, so Nxd6+ would just lose the knight. The position is simply a Sveshnikov.' },
        { text: 'It becomes the Löwenthal', why: 'The Löwenthal is 5...a6. With ...d6 and ...Nf6 played, this is the Sveshnikov.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Löwenthal, what does White get after 5...a6 6.Nd6+ Bxd6 7.Qxd6?',
      choices: [
        { text: "The bishop pair and weak Black dark squares", correct: true, why: 'Yes. Black gave up the dark-squared bishop, and the queen on d6 even blocks the d7-pawn. White is better.' },
        { text: 'An extra pawn', why: 'Material is level: a knight for a bishop. White\'s gain is the bishop pair and the dark squares.' },
        { text: 'A quick mating attack', why: 'There is no mating attack. White\'s advantage is long-term: the bishop pair and the dark squares.' }
      ]
    }
  ],
  key: { name: 'Kalashnikov: 4...e5 5.Nb5 d6', moves: KALASH, orientation: 'black' },
  terms: [
    { term: 'Clamp', meaning: "Pawns that control a key square so firmly that the opponent can't use it or fight for it with pawns, like White's c4 and e4 around d5." },
    { term: 'Transposition', meaning: 'Reaching the same position by a different move order.' },
    { term: 'Dark squares', meaning: 'Half the squares on the board. A side that loses its dark-squared bishop often finds those squares hard to defend.' }
  ]
})
