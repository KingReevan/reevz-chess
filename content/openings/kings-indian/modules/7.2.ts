import { defineModule } from '../../../types'
import { FOUR_PAWNS } from '../lines'

/** four-pawns-9re8-10e5: 9...Re8 10.e5 dxe5 11.fxe5 Ng4 12.e6 */
const BREAK = `${FOUR_PAWNS} Re8 e5 dxe5 fxe5 Ng4 e6`

export default defineModule({
  id: '7.2',
  title: 'Into the Benoni: 9.cxd5',
  minutes: 11,
  level: 3,
  goals: [
    'Reach the Four Pawns main line, 9.cxd5',
    'Read the Benoni structure: majorities, half-open files and plans',
    "See White's central break 10.e5 and the pawn offer 12.e6"
  ],
  intro:
    "After 7.d5 e6 8.Be2 exd5 9.cxd5, the pawns lock into a pattern called the Benoni structure. Once you can read it, you know each side's plan without memorizing moves. White wants to push in the center with e4–e5. Black wants to use the e-file and the extra pawn on the queenside. This module shows the structure, and then White's sharpest try.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Building the Benoni structure',
      intro: 'At the end, look at which pawns face each other on every file.',
      moves: FOUR_PAWNS,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'White pushes past',
          text: '7.d5. The position from Module 7.1. Black hits the new front pawn.',
          arrows: [['e7', 'e6', 'blue']],
          marks: ['d5']
        },
        14: {
          title: 'Attack d5',
          text: '7...e6. The e-pawn attacks d5. If White leaves it, Black will trade on d5, and a rook can then use the e-file.',
          arrows: [['e6', 'd5', 'red']]
        },
        15: {
          title: 'White develops',
          text: '8.Be2. The main move. White develops and gets ready to castle. Taking on e6 is the other choice, and Module 7.6 covers it.',
          arrows: [['e1', 'g1', 'blue']]
        },
        16: {
          title: 'Black trades',
          text: '8...exd5. Black takes. Now White must choose how to take back.',
          marks: ['d5']
        },
        17: {
          title: 'The Benoni structure',
          text: '9.cxd5. White takes with the c-pawn and keeps the e- and f-pawns side by side, ready for e4–e5. White now has pawns on d5 and e4, Black has pawns on c5 and d6. That is the Benoni structure.',
          arrows: [['e4', 'e5', 'yellow'], ['b7', 'b5', 'blue']],
          marks: ['d5', 'e4', 'c5', 'd6']
        }
      }
    },
    {
      kind: 'text',
      title: 'Reading the Benoni structure',
      body:
        "The name comes from another opening, the Modern Benoni (1.d4 Nf6 2.c4 c5 3.d5 e6). Its own Four Pawns line reaches exactly this position by a different road, so the pawn set-up borrowed its name. You don't need to know that opening. Just learn to read the pawns.\n\n**Majorities.** A **pawn majority** is a group of pawns that outnumbers the enemy pawns on one part of the board. On the queenside, Black has three pawns (a7, b7, c5) against White's two (a2, b2). On the d-, e- and f-files, White has three pawns (d5, e4, f4) against Black's two (d6, f7).\n\n**Files.** The e-file has a White pawn on e4 but no Black pawn, so it is **half-open** for Black: a rook on e8 can attack e4. The c-file has a Black pawn on c5 but no White pawn, so it is half-open for White.\n\n**Plans.** White pushes the center majority with e4–e5. Black puts a rook on e8 to hit e4, pushes the queenside majority with ...b5, and uses the g7-bishop on the long diagonal."
    },
    {
      kind: 'walkthrough',
      title: "White's break: 10.e5",
      intro: 'Black puts the rook on the half-open file. White answers by pushing at once.',
      moves: BREAK,
      start: 17,
      orientation: 'white',
      steps: {
        17: {
          title: 'Black to move',
          text: '9.cxd5. The Benoni structure. The e4-pawn is defended only by the c3-knight.',
          arrows: [['c3', 'e4', 'green']]
        },
        18: {
          title: 'Rook on the half-open file',
          text: '9...Re8. Black\'s best move. Now e4 is attacked twice (the e8-rook and the f6-knight) and defended once (the c3-knight). White must do something about it.',
          arrows: [['e8', 'e4', 'red'], ['f6', 'e4', 'red'], ['c3', 'e4', 'green']]
        },
        19: {
          title: 'Push the attacked pawn',
          text: "10.e5. The engine's top choice, and the sharpest. The attacked pawn steps forward and hits the f6-knight. Module 7.3 shows the calmer 10.Nd2.",
          arrows: [['e5', 'f6', 'red'], ['f4', 'e5', 'green']]
        },
        20: {
          title: 'Black takes',
          text: '10...dxe5. Black takes the pawn. The f4-pawn is ready to take back.',
          marks: ['e5']
        },
        21: {
          title: 'The f-pawn recaptures',
          text: '11.fxe5. Just as planned in Module 7.1: a White pawn stays on e5 and hits the knight again.',
          arrows: [['e5', 'f6', 'red']]
        },
        22: {
          title: 'Three against one',
          text: '11...Ng4. The knight jumps out and attacks e5. Now e5 is attacked three times (the g4-knight, the g7-bishop and the e8-rook) and defended only once (the f3-knight).',
          arrows: [['g4', 'e5', 'red'], ['g7', 'e5', 'red'], ['e8', 'e5', 'red']]
        },
        23: {
          title: 'The pawn goes forward',
          text: "12.e6. White's best move. Instead of defending e5, White pushes it on and gives it up. Black's only good reply is 12...fxe6, and then 13.d6 gives White a passed pawn and an open f-file. White is a pawn down, but the engine says it is roughly equal.",
          arrows: [['e6', 'f7', 'red'], ['d5', 'd6', 'blue']],
          ann: '!'
        }
      }
    },
    {
      kind: 'tip',
      title: 'Count before you push',
      body:
        "Every time a pawn steps into the center, count who attacks it and who defends it. After 11...Ng4 the count is three against one, so White does not try to hold e5. White uses the pawn to open lines instead. Counting like this is the key skill in all of Chapter 7."
    }
  ],
  takeaway:
    'After 9.cxd5 you get the Benoni structure: White has a center majority and wants e4–e5, Black has a queenside majority, a half-open e-file and the long diagonal. 9...Re8 hits e4 at once, and 10.e5 dxe5 11.fxe5 Ng4 12.e6! is White\'s sharpest answer.',
  lookAhead:
    "Module 7.3 shows White's calmer answer to 9...Re8, 10.Nd2, and the trap that waits if White forgets about e4.",
  drills: [
    {
      title: 'Into the Benoni',
      prompt: "You're Black. White has pushed past with 7.d5. Attack the d5-pawn, trade on d5 when White develops, and then put a rook on the half-open file.",
      moves: `${FOUR_PAWNS} Re8`,
      start: 13,
      side: 'black',
      hints: ['Hit d5 with the e-pawn.', '...e6, ...exd5, then the rook to e8.'],
      success: '7...e6, 8...exd5 and 9...Re8. The rook already hits e4, and White has to react.'
    },
    {
      title: "White's sharpest answer",
      prompt: "You're White. Black has just played 9...Re8, hitting e4. Push the e-pawn, take back with the f-pawn, and when the e5-pawn is outnumbered, push it once more.",
      moves: BREAK,
      start: 18,
      side: 'white',
      hints: ['Move the attacked pawn forward.', 'After 11...Ng4, the e5-pawn is outnumbered three to one. Push it to e6.'],
      success: '10.e5, 11.fxe5 and 12.e6! White gives a pawn to open the f-file and free the d-pawn. The engine says it is roughly equal.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 9.cxd5, which file is half-open for Black?',
      moves: FOUR_PAWNS,
      orientation: 'black',
      choices: [
        { text: 'The e-file', correct: true, why: 'Right. Only White\'s e4-pawn stands on it, so a rook on e8 can attack e4.' },
        { text: 'The c-file', why: "Black's own pawn is on c5. The c-file is half-open for White, whose c-pawn took on d5." },
        { text: 'The f-file', why: 'Both sides still have an f-pawn (f4 and f7), so the f-file is closed.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In this structure, where does Black have more pawns than White?',
      moves: FOUR_PAWNS,
      orientation: 'black',
      choices: [
        { text: 'On the queenside: a, b and c against a and b', correct: true, why: 'Right. That majority is why Black often plays ...b5.' },
        { text: 'In the center', why: 'That is where White has more: on the d-, e- and f-files, d5, e4 and f4 against d6 and f7.' },
        { text: 'On the kingside', why: 'On the f-, g- and h-files each side has three pawns.' }
      ]
    },
    {
      type: 'plan',
      prompt: "What is White's main plan in the Benoni structure?",
      moves: FOUR_PAWNS,
      orientation: 'white',
      choices: [
        { text: 'Push the center pawns with e4–e5', correct: true, why: 'Right. White uses the center majority, and the f4-pawn backs up the push.' },
        { text: 'Push c4–c5 on the queenside', why: "White's c-pawn is gone: it took on d5. There is no c-pawn left to push." },
        { text: 'Trade queens and head for an endgame', why: 'Nothing here calls for a queen trade. White wants to use the center pawns while Black is still getting organized.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 10.e5 dxe5 11.fxe5 Ng4, how many Black pieces attack the e5-pawn?',
      moves: `${FOUR_PAWNS} Re8 e5 dxe5 fxe5 Ng4`,
      orientation: 'white',
      choices: [
        { text: 'Three: the g4-knight, the g7-bishop and the e8-rook', correct: true, why: 'Right. Only the f3-knight defends it, so White pushes it on with 12.e6.' },
        { text: 'Two: the knight and the bishop', why: "Don't forget the rook on e8. The e-file is clear between e8 and e5." },
        { text: 'One: the knight', why: 'The g7-bishop sees e5 now that the knight has left f6, and the e8-rook sees it down the e-file.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'What is this pawn structure called?',
      moves: FOUR_PAWNS,
      orientation: 'black',
      choices: [
        { text: 'The Benoni structure', correct: true, why: 'Right. White pawns on d5 and e4, Black pawns on c5 and d6.' },
        { text: 'The Maróczy structure', why: 'The Maróczy has White pawns on c4 and e4 with no White d-pawn. Here White has a pawn on d5 instead.' },
        { text: 'The Mar del Plata', why: 'The Mar del Plata comes from ...e5 and d5, with the center locked. Here Black traded the e-pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9...Re8 10.e5 dxe5 11.fxe5 Ng4, why does White play 12.e6?',
      moves: `${FOUR_PAWNS} Re8 e5 dxe5 fxe5 Ng4`,
      orientation: 'white',
      choices: [
        { text: 'The e5-pawn is outnumbered, so White gives it up in a way that opens the f-file and frees the d-pawn', correct: true, why: 'Right. After 12...fxe6 13.d6, White is a pawn down but has a passed pawn and open lines. It is roughly equal.' },
        { text: 'It wins material by force', why: 'It does the opposite: White gives a pawn. After 12...fxe6 Black is a pawn up.' },
        { text: 'It stops the knight from coming to e5', why: 'The e5-square is empty after 12.e6, so the knight could go there. The point is to open lines.' }
      ]
    }
  ],
  key: { name: 'Four Pawns main line: 9.cxd5 (Benoni structure)', moves: FOUR_PAWNS, orientation: 'black' },
  terms: [
    { term: 'Benoni structure', meaning: 'White pawns on d5 and e4 against Black pawns on c5 and d6. White has a center majority, Black a queenside majority.' },
    { term: 'Pawn majority', meaning: 'More pawns than the opponent on one part of the board. A majority can advance and create a passed pawn.' },
    { term: 'Half-open file', meaning: 'A file with no pawn of your own on it, but an enemy pawn. Your rook can attack that pawn.' },
    { term: 'Passed pawn', meaning: 'A pawn with no enemy pawns in front of it on its own file or the files next to it.' }
  ]
})
