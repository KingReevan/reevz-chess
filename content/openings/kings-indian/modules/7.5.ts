import { defineModule } from '../../../types'
import { FOUR_PAWNS } from '../lines'

/** four-pawns-9bg4: 9...Bg4 10.O-O Nbd7 11.h3 Bxf3 12.Bxf3 Re8 */
const BG4 = `${FOUR_PAWNS} Bg4 O-O Nbd7 h3 Bxf3 Bxf3 Re8`
/** four-pawns-9b5-10bxb5: 9...b5 10.Bxb5 Nxe4 11.Nxe4 Qa5+ 12.Kf2 Qxb5 13.Nxd6 Qb6 */
const BXB5 = `${FOUR_PAWNS} b5 Bxb5 Nxe4 Nxe4 Qa5+ Kf2 Qxb5 Nxd6 Qb6`

export default defineModule({
  id: '7.5',
  title: '9...Bg4 and 9...b5',
  minutes: 11,
  level: 3,
  goals: [
    'Use 9...Bg4 and ...Bxf3 to take away a defender of e5',
    'Win the piece back after 9...b5 10.Bxb5 with ...Nxe4 and ...Qa5+',
    'Count the material honestly: 10.Bxb5 is not a blunder'
  ],
  intro:
    "9...Re8 is Black's main move in the Four Pawns, but there are two other ideas worth knowing. 9...Bg4 trades off a knight that helps White push e4–e5. 9...b5 offers a pawn, and hides a trick if White grabs it with the bishop. This module shows both, and corrects a piece of folklore about the trick.",
  sections: [
    {
      kind: 'walkthrough',
      title: '9...Bg4: remove a defender',
      intro: 'Watch the e5-square: who controls it before and after the trade on f3?',
      moves: BG4,
      start: 17,
      orientation: 'black',
      steps: {
        17: {
          title: 'Black to move',
          text: '9.cxd5. White wants e4–e5. Right now two White units guard e5: the f4-pawn and the f3-knight. Black covers it only with the d6-pawn.',
          arrows: [['f4', 'e5', 'green'], ['f3', 'e5', 'green'], ['d6', 'e5', 'red']]
        },
        18: {
          title: 'Aim at the knight',
          text: '9...Bg4. The bishop eyes the f3-knight, one of the pieces that supports e4–e5. Black plans to take it.',
          arrows: [['g4', 'f3', 'red']]
        },
        19: {
          title: 'White castles',
          text: "10.O-O. The engine's top choice. White gets the king safe first.",
          arrows: [['e1', 'g1', 'green']]
        },
        20: {
          title: 'A knight for e5',
          text: '10...Nbd7. The knight develops and also watches e5 and c5.',
          arrows: [['d7', 'e5', 'green']]
        },
        21: {
          title: 'Take or retreat?',
          text: '11.h3. White asks the bishop what it wants to do.',
          arrows: [['h3', 'g4', 'red']]
        },
        22: {
          title: 'Take the knight',
          text: "11...Bxf3. Black's only good move. After 11...Bh5? 12.g4, Black ends up giving a piece for two pawns. Black gives up the bishop for the knight that guarded e5.",
          arrows: [['g4', 'f3', 'red']]
        },
        23: {
          title: 'e5 is harder to reach',
          text: '12.Bxf3. Now only the f4-pawn guards e5, while the d6-pawn and the d7-knight both control it. Two against one: the push e4–e5 is much harder to arrange. The cost: White has the two bishops.',
          arrows: [['f4', 'e5', 'green'], ['d6', 'e5', 'red'], ['d7', 'e5', 'red']],
          marks: ['e5']
        },
        24: {
          title: 'A balanced count on e4',
          text: '12...Re8. The rook and the f6-knight attack e4. The c3-knight and the f3-bishop defend it. Two against two, so e4 is safe. White is a little better, but Black has an easy plan.',
          arrows: [['e8', 'e4', 'red'], ['f6', 'e4', 'red'], ['f3', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '9...b5 10.Bxb5: the knight with two jobs',
      intro: 'Look at the c3-knight. It is guarding two things at once.',
      moves: BXB5,
      start: 17,
      orientation: 'black',
      steps: {
        17: {
          title: 'Black to move',
          text: '9.cxd5. This time Black offers a pawn to open lines on the queenside.',
          arrows: [['b7', 'b5', 'blue']]
        },
        18: {
          title: 'The pawn offer',
          text: "9...b5. A gambit: a pawn offered for quick play. White's best answer is to ignore it with 10.e5, but taking is tempting.",
          marks: ['b5']
        },
        19: {
          title: 'The bishop takes',
          text: '10.Bxb5. The bishop on b5 is defended only by the c3-knight. That same knight is also the only defender of e4. One knight, two jobs.',
          arrows: [['c3', 'b5', 'green'], ['c3', 'e4', 'green']]
        },
        20: {
          title: 'Lure the knight away',
          text: "10...Nxe4. Black's only good move. If the c3-knight takes back, it stops guarding b5.",
          arrows: [['f6', 'e4', 'red']],
          ann: '!'
        },
        21: {
          title: 'White takes',
          text: "11.Nxe4. White's best move. For the moment White is a piece up, and the b5-bishop has no defender left.",
          marks: ['b5']
        },
        22: {
          title: 'The fork',
          text: '11...Qa5+. The queen checks the king and attacks the b5-bishop at the same time.',
          arrows: [['a5', 'e1', 'red'], ['a5', 'b5', 'red']]
        },
        23: {
          title: 'The king steps aside',
          text: "12.Kf2. White's best. Blocking the check would not save the bishop, and now White can no longer castle.",
          arrows: [['e1', 'f2', 'green']]
        },
        24: {
          title: 'The piece comes back',
          text: '12...Qxb5. Black wins the bishop back. But the d6-pawn is now attacked by the e4-knight.',
          arrows: [['e4', 'd6', 'red']]
        },
        25: {
          title: 'White grabs d6',
          text: '13.Nxd6. The knight takes the pawn and attacks the queen.',
          arrows: [['d6', 'b5', 'red']]
        },
        26: {
          title: 'Count it up',
          text: "13...Qb6. White has taken the b5-pawn, a knight and the d6-pawn. Black has taken the e4-pawn and a bishop. So White is a pawn up, but White's king is stuck on f2 and Black's pieces are active. The engine calls it roughly equal.",
          marks: ['f2']
        }
      }
    },
    {
      kind: 'warning',
      title: 'Folklore check: is 10.Bxb5 a blunder?',
      body:
        "You may read that 10.Bxb5? loses to 10...Nxe4!. It doesn't. The trick only wins the piece back: White even ends a pawn up, and the engine calls the position roughly equal.\n\nWhite's best answer to 9...b5 is still 10.e5 (the engine's top choice). After 10...dxe5 11.fxe5 Ng4 12.Bg5 Qb6 13.O-O c4+ 14.Kh1 the game is wild but balanced.\n\nThe real mistake is **10.Nxb5?**. The knight leaves c3, so e4 loses its only defender, and 10...Nxe4 leaves Black clearly better."
    },
    {
      kind: 'text',
      title: 'Two ideas, one theme',
      body:
        "Both moves fight White's plan of e4–e5 and both target White's defenders.\n\n**9...Bg4** removes a defender for good: Black trades the bishop for the f3-knight, so e5 is harder to reach. The price is the bishop pair.\n\n**9...b5** uses an **overloaded** defender: the c3-knight guards both e4 and b5. When it has to take on e4, b5 is left hanging, and ...Qa5+ forks king and bishop. Whenever one piece guards two things, ask whether you can make it choose."
    }
  ],
  takeaway:
    "9...Bg4 and ...Bxf3 trade off a defender of e5, at the cost of the bishop pair. After 9...b5 10.Bxb5, 10...Nxe4! 11.Nxe4 Qa5+ wins the piece back, because the c3-knight was guarding both e4 and b5. White ends a pawn up, and it is roughly equal.",
  lookAhead:
    'Module 7.6 looks at the other tries in the Four Pawns for both sides, including a Kasparov game where White took on e6 instead of playing 8.Be2.',
  drills: [
    {
      title: 'Punish the greedy bishop',
      prompt: "You're Black. White has just taken your gambit pawn with 10.Bxb5. Find the trick that wins the piece back.",
      moves: `${FOUR_PAWNS} b5 Bxb5 Nxe4 Nxe4 Qa5+ Kf2 Qxb5`,
      start: 19,
      side: 'black',
      hints: ['Which White piece guards both b5 and e4?', 'Take on e4 with the knight. After the recapture, check the king and hit b5 at the same time.'],
      success: '10...Nxe4!, 11...Qa5+ and 12...Qxb5. The piece is back, and the position is roughly equal.'
    },
    {
      title: 'Meet 9...Bg4',
      prompt: "You're White. Black has played 9...Bg4. Castle, ask the bishop a question with your h-pawn, and take back on f3 with the bishop.",
      moves: `${FOUR_PAWNS} Bg4 O-O Nbd7 h3 Bxf3 Bxf3`,
      start: 18,
      side: 'white',
      hints: ['King safety first.', 'Then h3, and recapture on f3 with the e2-bishop.'],
      success: '10.O-O, 11.h3 and 12.Bxf3. You have the two bishops, and the f3-bishop now guards e4.'
    }
  ],
  quiz: [
    {
      type: 'plan',
      prompt: 'What is the main idea of 9...Bg4?',
      moves: `${FOUR_PAWNS} Bg4`,
      orientation: 'black',
      choices: [
        { text: 'To trade the f3-knight, which supports e4–e5', correct: true, why: 'Right. With the knight gone, only the f4-pawn guards e5, and the push is much harder.' },
        { text: 'To pin the f3-knight against the queen', why: 'The e2-bishop stands between the knight and the queen, so there is no pin. The plan is ...Bxf3.' },
        { text: 'To attack the e4-pawn', why: 'A bishop on g4 does not touch e4. The rook from e8 is the piece that hits e4.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White has just played 10.Bxb5. What is the strongest move?',
      moves: `${FOUR_PAWNS} b5 Bxb5`,
      orientation: 'black',
      choices: [
        { text: '10...Nxe4', correct: true, why: 'Right. If 11.Nxe4, the knight stops guarding b5, and 11...Qa5+ forks king and bishop.' },
        { text: '10...Qa5', why: 'The bishop is still defended by the c3-knight. After 11.Qa4 White trades queens and keeps the extra pawn. White is clearly better.' },
        { text: '10...Ba6', why: 'After 11.Bxa6 Nxa6 Black is simply a pawn down. White is clearly better.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does 10...Nxe4 work against 10.Bxb5?',
      moves: `${FOUR_PAWNS} b5 Bxb5`,
      orientation: 'black',
      choices: [
        { text: 'The c3-knight guards both e4 and b5; when it takes on e4, b5 is left undefended', correct: true, why: 'Right. An overloaded defender: it cannot do both jobs. 11...Qa5+ then forks king and bishop.' },
        { text: 'The e4-pawn had no defender at all', why: 'The c3-knight did defend e4. The trick works because that knight had a second job too.' },
        { text: 'The b5-bishop is pinned to White\'s king', why: 'Nothing pins the bishop. It is simply left without a defender once the knight leaves c3.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 10.Bxb5 Nxe4 11.Nxe4 Qa5+ 12.Kf2 Qxb5 13.Nxd6 Qb6, what is the material balance?',
      moves: BXB5,
      orientation: 'black',
      choices: [
        { text: 'White is a pawn up, and the position is roughly equal', correct: true, why: 'Right. White took two pawns and a knight, Black took one pawn and a bishop. Black has active pieces and a stuck White king in return.' },
        { text: 'Material is level', why: 'Count again: White took b5, a knight and d6; Black took e4 and a bishop. White has one extra pawn.' },
        { text: 'Black is a piece up', why: 'The trick only wins the piece back. It does not win an extra one.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'White to move. Black has offered a pawn with 9...b5. What is the best answer?',
      moves: `${FOUR_PAWNS} b5`,
      orientation: 'white',
      choices: [
        { text: '10.e5', correct: true, why: "Right. The engine's top choice: White ignores the pawn and pushes in the center. After 10...dxe5 11.fxe5 Ng4 the game is sharp and balanced." },
        { text: '10.Nxb5', why: 'The knight leaves c3, so e4 loses its only defender: 10...Nxe4 and Black is clearly better.' },
        { text: '10.Qc2', why: '10...b4! kicks the c3-knight away from e4, and Black is clearly better.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just asked the bishop with 11.h3. What should Black play?',
      moves: `${FOUR_PAWNS} Bg4 O-O Nbd7 h3`,
      orientation: 'black',
      choices: [
        { text: '11...Bxf3', correct: true, why: "Right. The only good move. Black trades off the knight that supported e4–e5." },
        { text: '11...Bh5', why: 'After 12.g4 the bishop is in trouble, and Black ends up giving a piece for two pawns.' },
        { text: '11...Bxh3', why: 'After 12.gxh3 Black has given a bishop for a pawn. White is winning.' }
      ]
    }
  ],
  key: { name: 'Four Pawns: 9...b5 10.Bxb5 Nxe4! 11.Nxe4 Qa5+', moves: `${FOUR_PAWNS} b5 Bxb5 Nxe4 Nxe4 Qa5+`, orientation: 'black' },
  terms: [
    { term: 'Overloaded piece', meaning: 'A piece that has to guard two things at once. Force it to deal with one, and the other falls.' },
    { term: 'Gambit', meaning: 'Offering a pawn (or more) early on to gain time, open lines or get active pieces.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one. Strong in open positions.' },
    { term: 'Fork', meaning: 'One piece attacks two or more enemy pieces at the same time.' }
  ]
})
