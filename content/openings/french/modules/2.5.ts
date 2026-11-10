import { defineModule } from '../../../types'
import { ADVANCE_QB6 } from '../lines'

/** 6.Be2 cxd4 7.cxd4 */
const BE2 = `${ADVANCE_QB6} Be2 cxd4 cxd4`
/** adv-6be2: 7...Nh6 8.Nc3 Nf5 9.Na4 Qa5+ 10.Bd2 Bb4 11.Bc3 b5 */
const MAIN = `${BE2} Nh6 Nc3 Nf5 Na4 Qa5+ Bd2 Bb4 Bc3 b5`
/** 8.Bxh6 Qxb2! 9.Nbd2 gxh6 (engine line, checked at depth 20) */
const GRAB = `${BE2} Nh6 Bxh6 Qxb2 Nbd2 gxh6`
/** adv-6be2-bxh6: 8.Bxh6 gxh6 9.Qd2 Bg7 10.Nc3 O-O 11.Bb5 f6 */
const RECAP = `${BE2} Nh6 Bxh6 gxh6 Qd2 Bg7 Nc3 O-O Bb5 f6`

export default defineModule({
  id: '2.5',
  title: '6.Be2 and the ...Nh6–f5 maneuver',
  minutes: 11,
  level: 2,
  goals: [
    'Bring the g8-knight to f5 through h6, adding a third attacker on d4',
    'See how White defends by attacking: Nc3–a4 chases the queen',
    'Know what to do after 8.Bxh6: take on b2 first, then on h6'
  ],
  intro:
    "After 6.Be2 cxd4 7.cxd4, d4 is two against two (Module 2.2). Black's plan is to add a third attacker, and the knight on g8 has a clever way to get there: h6, then f5. White can meet it in two ways: chase Black's queen, or take the knight on h6 at once. This module shows both.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The knight route, and defending by attacking',
      intro: 'Count d4 after each move. White does not always add a defender: sometimes it removes an attacker.',
      moves: MAIN,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'Two against two',
          text: '7.cxd4. The c6-knight and the queen attack d4; the f3-knight and the queen defend it.',
          arrows: [['c6', 'd4', 'red'], ['b6', 'd4', 'red'], ['f3', 'd4', 'green']],
          marks: ['d4']
        },
        14: {
          title: 'Via h6',
          text: "7...Nh6. The knight can't use f6, so it goes to h6, heading for f5.",
          arrows: [['h6', 'f5', 'blue']]
        },
        15: {
          title: 'White develops',
          text: "8.Nc3. The knight does not guard d4, but it is ready to jump to a4 and hit Black's queen.",
          arrows: [['c3', 'a4', 'blue']]
        },
        16: {
          title: 'Three against two',
          text: '8...Nf5. Now d4 is attacked by both knights and the queen, and defended only by the f3-knight and the queen. Black threatens to win it.',
          arrows: [['f5', 'd4', 'red'], ['c6', 'd4', 'red'], ['b6', 'd4', 'red']],
          marks: ['d4']
        },
        17: {
          title: 'Chase the queen',
          text: '9.Na4. The knight attacks the queen. Wherever it goes, it must leave the b6–d4 diagonal or be lost. That removes an attacker.',
          arrows: [['a4', 'b6', 'red']]
        },
        18: {
          title: 'Check',
          text: '9...Qa5+. The queen steps away with check. d4 is two against two again. White could repeat moves with 10.Nc3 Qb6 11.Na4 Qa5+, and if neither side changes course, the game is drawn by repetition.',
          arrows: [['a5', 'e1', 'red']]
        },
        19: {
          title: 'Block and attack',
          text: "10.Bd2. To play on, White blocks the check, and the bishop attacks the queen. But the bishop also blocks the queen's line to d4: now only the f3-knight guards d4.",
          arrows: [['d2', 'a5', 'red'], ['f3', 'd4', 'green']],
          marks: ['d4']
        },
        20: {
          title: 'A pin',
          text: '10...Bb4. The bishop blocks the attack on the queen, and pins the d2-bishop to the king. The pinned bishop can only move along the line to b4. And d4 is still two against one.',
          arrows: [['b4', 'e1', 'red'], ['f5', 'd4', 'red'], ['c6', 'd4', 'red']]
        },
        21: {
          title: 'Unblock the d-file',
          text: '11.Bc3. The bishop moves along the pin line. It hits the b4-bishop, guards d4 itself and frees the queen\'s line. Now d4 has three defenders.',
          arrows: [['c3', 'b4', 'red'], ['c3', 'd4', 'green'], ['d1', 'd4', 'green']]
        },
        22: {
          title: 'Hit the knight',
          text: "11...b5. The a4-knight is attacked by the pawn and the queen, and guarded only by White's queen. White's only good answer is 12.a3, hitting the b4-bishop. After the trades on c3, the engine calls the position level.",
          arrows: [['b5', 'a4', 'red'], ['a5', 'a4', 'red']],
          marks: ['a4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '8.Bxh6: take b2 first',
      intro: "White can stop the knight trip at once by taking it. Remember Module 2.2: the c1-bishop was b2's only guard.",
      moves: GRAB,
      start: 14,
      orientation: 'black',
      steps: {
        14: {
          title: 'The knight on h6',
          text: "7...Nh6. The knight is on its way to f5. White can take it right now with the c1-bishop, and that is the engine's first choice for White.",
          arrows: [['c1', 'h6', 'red']]
        },
        15: {
          title: 'Bishop takes knight',
          text: '8.Bxh6. White removes the knight before it reaches f5. But now nothing guards b2.',
          marks: ['b2']
        },
        16: {
          title: 'The pawn first',
          text: '8...Qxb2. Black grabs the pawn first. The queen now attacks the a1-rook, which has no defender, and the h6-bishop is still attacked by the g7-pawn.',
          arrows: [['b2', 'a1', 'red'], ['g7', 'h6', 'red']],
          ann: '!'
        },
        17: {
          title: 'Guard the rook',
          text: '9.Nbd2. The knight leaves b1, so the d1-queen now guards a1 along the first rank. 9.O-O is about as good.',
          arrows: [['d1', 'a1', 'green']]
        },
        18: {
          title: 'Now take back',
          text: "9...gxh6. Black wins the bishop back. Black is a pawn up, with doubled h-pawns and both bishops; White has quick development and the half-open b-file for a rook. The engine calls it roughly level.",
          marks: ['h6', 'h7']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The simple recapture: 8...gxh6 9.Qd2',
      intro: 'If Black takes back on h6 at once, White has time to guard b2. Here is what both sides play for.',
      moves: RECAP,
      start: 15,
      orientation: 'white',
      steps: {
        15: {
          title: 'Bishop takes knight',
          text: '8.Bxh6. The same capture.',
          marks: ['h6']
        },
        16: {
          title: 'Doubled pawns',
          text: '8...gxh6. The natural recapture, but not the best: it gives White time to guard b2. Black gets doubled h-pawns, but also both bishops and a half-open g-file.',
          marks: ['h6', 'h7']
        },
        17: {
          title: 'The queen guards b2',
          text: '9.Qd2. The queen guards b2 and d4, and it also attacks the h6-pawn.',
          arrows: [['d2', 'b2', 'green'], ['d2', 'd4', 'green'], ['d2', 'h6', 'red']]
        },
        18: {
          title: 'A long diagonal',
          text: '9...Bg7. The bishop guards h6 and presses on e5.',
          arrows: [['g7', 'h6', 'green'], ['g7', 'e5', 'red']]
        },
        19: {
          title: 'Develop',
          text: '10.Nc3. The knight develops and watches d5 and b5.',
          arrows: [['c3', 'b5', 'blue']]
        },
        20: {
          title: 'Black castles',
          text: '10...O-O. Black gets the king out of the center.',
          arrows: [['e8', 'g8', 'green']]
        },
        21: {
          title: 'Aiming at c6',
          text: '11.Bb5. The bishop attacks the c6-knight, which attacks both d4 and e5. White is ready to trade it off with Bxc6.',
          arrows: [['b5', 'c6', 'red'], ['c6', 'd4', 'yellow'], ['c6', 'e5', 'yellow']]
        },
        22: {
          title: 'The ...f6 break',
          text: '11...f6. Black hits e5, the head of the chain. If the pawns trade, the f-file becomes half-open for Black\'s rook. Even so, the engine still gives White an edge in this line.',
          arrows: [['f6', 'e5', 'red'], ['f8', 'f6', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Defend by attacking',
      body:
        "There are two ways to save a pawn that is attacked too often. You can **add a defender** (like Bb2 in the Lputian, Module 2.4), or you can **remove an attacker**. 9.Na4 does the second: it hits Black's queen, and the queen has to leave the diagonal to d4. Keep both ideas in mind whenever you count."
    }
  ],
  takeaway:
    "Against 6.Be2, Black plays ...Nh6–f5 to hit d4 three times. White answers with Nc3–a4, chasing the queen away, and the main line is level. If White takes on h6, grab b2 first with ...Qxb2, then recapture.",
  lookAhead: 'Module 2.6 shows the third main sixth move, 6.Bd3: the Milner-Barry Gambit, where White gives up d4 on purpose.',
  drills: [
    {
      title: 'The knight trip',
      prompt: "You're Black. After 7.cxd4, bring your g8-knight to f5 by way of h6, then deal with White's knight jump.",
      moves: `${BE2} Nh6 Nc3 Nf5 Na4 Qa5+`,
      start: 13,
      side: 'black',
      hints: ['The knight goes to f5 through h6.', 'When 9.Na4 attacks your queen, move it with check.'],
      success: '7...Nh6, 8...Nf5 and 9...Qa5+. Black keeps the pressure on d4, and the engine says the position is level.'
    },
    {
      title: 'After 8.Bxh6',
      prompt: "You're Black. White has just taken your knight on h6. Before you take back, look at the square the bishop has stopped guarding.",
      moves: GRAB,
      start: 15,
      side: 'black',
      hints: ['The c1-bishop used to guard b2.', 'Take on b2 first. After White saves the rook, take the bishop.'],
      success: '8...Qxb2! 9.Nbd2 gxh6. Black is a pawn up, and the engine calls it roughly level.'
    }
  ],
  quiz: [
    {
      type: 'plan',
      prompt: 'What is the point of 9.Na4?',
      moves: `${BE2} Nh6 Nc3 Nf5 Na4`,
      orientation: 'white',
      choices: [
        { text: 'It attacks the queen, which must leave the diagonal to d4', correct: true, why: 'Right. White removes an attacker instead of adding a defender, and d4 is safe again.' },
        { text: 'It attacks the d5-pawn', why: 'A knight on a4 attacks b2, b6, c3 and c5. It was the c3-knight that eyed d5.' },
        { text: 'It prepares Nc5 to win the b7-pawn', why: 'The knight hits the queen right now. That is what matters here.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 10...Bb4 do?',
      moves: `${BE2} Nh6 Nc3 Nf5 Na4 Qa5+ Bd2 Bb4`,
      orientation: 'black',
      choices: [
        { text: 'It blocks the attack on the queen and pins the d2-bishop to the king', correct: true, why: 'Yes. The d2-bishop can now only move along the line to b4, for example 11.Bc3.' },
        { text: 'It attacks the a4-knight', why: 'A bishop on b4 moves diagonally. It does not attack a4, which is next to it on the rank.' },
        { text: 'It wins the d2-bishop', why: 'The d2-bishop is guarded by the queen, the king and the f3-knight. The point is the pin.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to play after 8.Bxh6. What is the best move?',
      moves: `${BE2} Nh6 Bxh6`,
      orientation: 'black',
      choices: [
        { text: '8...Qxb2', correct: true, why: "Right. The bishop has left b2 without a guard. The queen also hits a1, and the h6-bishop can be taken next move. It is the engine's choice." },
        { text: '8...gxh6', why: 'Playable, but it gives White time for 9.Qd2, guarding b2. The engine prefers White after that.' },
        { text: '8...Nxd4', why: 'd4 is still two against two. After 9.Qxd4 Qxd4 10.Nxd4 gxh6, Black is at least a piece for a pawn down.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 8.Bxh6 gxh6, what does Black get in return for the doubled h-pawns?',
      moves: `${BE2} Nh6 Bxh6 gxh6`,
      orientation: 'black',
      choices: [
        { text: 'Both bishops and a half-open g-file', correct: true, why: 'Right. Two bishops work well together, and Black has no g-pawn left, so a rook can use the g-file.' },
        { text: 'An extra pawn', why: 'Material is equal in this line: bishop for knight. Black only wins a pawn with 8...Qxb2 first.' },
        { text: 'A passed pawn on the h-file', why: "White's h2-pawn still faces Black's h-pawns. Neither of them is passed." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'White has just played 10.Bd2. Which White pieces defend d4 now?',
      moves: `${BE2} Nh6 Nc3 Nf5 Na4 Qa5+ Bd2`,
      orientation: 'white',
      choices: [
        { text: 'Only the f3-knight: the d2-bishop blocks the queen', correct: true, why: 'Right. That is why 11.Bc3 matters: it moves the bishop off the d-file and guards d4 too.' },
        { text: 'The f3-knight and the queen', why: "The bishop on d2 stands in the queen's way. The queen can't see d4 through it." },
        { text: 'The f3-knight, the d2-bishop and the queen', why: 'A bishop on d2 does not guard d4 at all, and it blocks the queen.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to play. The a4-knight is attacked twice. What is the best move?',
      moves: MAIN,
      orientation: 'white',
      choices: [
        { text: '12.a3', correct: true, why: 'Right. The pawn hits the b4-bishop, and after the trades on c3 the position is level. Other moves are clearly worse.' },
        { text: '12.Bxb4', why: '12...Qxb4+ comes with check, and the a4-knight is still attacked. The engine says Black is clearly better.' },
        { text: '12.g4', why: 'It chases the f5-knight, but Black takes on d4 and the a4-knight is lost. The engine says Black is better.' }
      ]
    }
  ],
  key: { name: 'Advance 6.Be2: the knight reaches f5', moves: `${BE2} Nh6 Nc3 Nf5`, orientation: 'black' },
  terms: [
    { term: 'Doubled pawns', meaning: 'Two pawns of the same color on one file, like h7 and h6. They cannot protect each other.' },
    { term: 'Bishop pair', meaning: 'Having both bishops when the opponent has traded one of theirs. Together they cover squares of both colors.' },
    { term: 'Pin', meaning: 'A piece cannot move off a line because that would expose a more valuable piece behind it. Pinned to the king, it may only move along the line.' }
  ]
})
