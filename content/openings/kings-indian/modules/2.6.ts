import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** classical-7oo-nc6: 7.O-O Nc6 */
const NC6 = `${CLASSICAL} O-O Nc6`
/** classical-8dxe5: 8.dxe5 dxe5 9.Qxd8 Rxd8 10.Bg5, then 10...Rd7 (engine's choice) */
const DXE5 = `${NC6} dxe5 dxe5 Qxd8 Rxd8 Bg5 Rd7`
/** classical-8be3: 8.Be3 Ng4 9.Bg5 f6 10.Bh4 g5 11.Bg3 Nh6 */
const BE3 = `${NC6} Be3 Ng4 Bg5 f6 Bh4 g5 Bg3 Nh6`

export default defineModule({
  id: '2.6',
  title: '7.O-O Nc6: asking d4 a question',
  minutes: 10,
  level: 2,
  goals: [
    'See what 7...Nc6 asks White about the d4-pawn',
    "Know White's three answers: 8.d5, 8.Be3 and 8.dxe5",
    'Meet 8.Be3 with ...Ng4, and 8.dxe5 with a quick unpin'
  ],
  intro:
    "After 7.O-O both kings are safe, and the tension between d4 and e5 is still there. With 7...Nc6, Black adds a second attacker on d4. White now has to decide: close the center, keep the tension, or trade. This module shows the three choices and how Black meets them.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Pressure on d4, and 8.dxe5',
      intro: 'First the main line up to 7...Nc6, then the quietest answer: trading everything on d8.',
      moves: DXE5,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'The tension',
          text: '6...e5. The e5-pawn attacks d4, and the d4-pawn attacks e5. Neither side has taken yet.',
          arrows: [['e5', 'd4', 'red'], ['d4', 'e5', 'red']]
        },
        13: {
          title: 'White castles',
          text: "7.O-O. The main line. White's king is safe, and White still keeps every option in the center open.",
          marks: ['g1']
        },
        14: {
          title: 'A second attacker',
          text: "7...Nc6. Now the e5-pawn and the c6-knight both attack d4. The f3-knight and the queen defend it, so it holds for now. White usually makes a decision about the center here.",
          arrows: [['c6', 'd4', 'red'], ['e5', 'd4', 'red'], ['f3', 'd4', 'green']],
          marks: ['d4']
        },
        15: {
          title: 'White trades',
          text: '8.dxe5. White releases the tension and heads for a queen trade, like the Exchange Variation one move later. It is considered harmless for Black.',
          marks: ['e5']
        },
        16: {
          title: 'Take back',
          text: '8...dxe5. Black recaptures with the pawn. The d-file is open between the queens.',
          arrows: [['d1', 'd8', 'yellow']]
        },
        17: {
          title: 'Queens off',
          text: '9.Qxd8. White trades queens.',
          marks: ['d8']
        },
        18: {
          title: 'Rook to d8',
          text: '9...Rxd8. The rook takes back. Notice the rook on d8 and the knight on f6: the same diagonal as in Module 2.5.',
          arrows: [['d8', 'h4', 'blue']]
        },
        19: {
          title: 'The familiar pin',
          text: "10.Bg5. The f6-knight is pinned to the rook, and Nd5 is coming. It is the Module 2.5 set-up with the knight already on c6, but here it is Black's move. The simplest answer is to unpin at once.",
          arrows: [['g5', 'd8', 'red'], ['c3', 'd5', 'blue']],
          marks: ['f6']
        },
        20: {
          title: 'Unpinned and equal',
          text: '10...Rd7. The rook steps off the diagonal, so the pin is gone. The position is equal. (10...Re8 and 10...Rf8 also work, but slow moves such as 10...h6 let White win the c7-pawn after Bxf6 and Nd5.)',
          arrows: [['d7', 'c7', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '8.Be3: keeping the tension',
      intro: "White guards d4 again and waits. Black's knight jumps out to bother the bishop.",
      moves: BE3,
      start: 14,
      orientation: 'black',
      steps: {
        14: {
          title: 'Same position',
          text: '7...Nc6. This time White adds a third defender to d4 instead of deciding.',
          marks: ['d4']
        },
        15: {
          title: 'The bishop guards d4',
          text: '8.Be3. White keeps the tension. Both d4–d5 and dxe5 are still possible later.',
          arrows: [['e3', 'd4', 'green']]
        },
        16: {
          title: 'Hit the bishop',
          text: "8...Ng4. The knight attacks the e3-bishop. If White allows ...Nxe3, Black gets the bishop pair.",
          arrows: [['g4', 'e3', 'red']],
          ann: '!'
        },
        17: {
          title: 'The bishop dodges',
          text: '9.Bg5. The bishop steps away and attacks the queen on d8.',
          arrows: [['g5', 'd8', 'red']]
        },
        18: {
          title: 'Block and attack',
          text: '9...f6. The pawn blocks the attack on the queen and hits the bishop again.',
          arrows: [['f6', 'g5', 'red']]
        },
        19: {
          title: 'Stay on the diagonal',
          text: '10.Bh4. The bishop keeps an eye on the h4–d8 diagonal.',
          arrows: [['h4', 'd8', 'blue']]
        },
        20: {
          title: 'Kick it again',
          text: '10...g5. Black chases the bishop once more and grabs space on the kingside. (10...Nh6 at once is also good.)',
          arrows: [['g5', 'h4', 'red']]
        },
        21: {
          title: 'Back to g3',
          text: '11.Bg3. The bishop retreats to a safe square.',
          marks: ['g3']
        },
        22: {
          title: 'The knight reroutes',
          text: '11...Nh6. The knight heads for f7, where it guards e5 and g5. Black has more kingside space, and the position is roughly level.',
          arrows: [['h6', 'f7', 'blue'], ['f7', 'e5', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: "White's three answers",
      body:
        "After 7...Nc6, White has three main moves:\n\n**8.d5** closes the center by pushing past the attack. It is the main line, and Module 2.7 starts there.\n\n**8.Be3** keeps the tension. Black answers 8...Ng4, with the ...f6 and ...g5 ideas you just saw.\n\n**8.dxe5** trades queens. It is harmless as long as Black unpins in time after Bg5.\n\nThe lichess database calls 7...Nc6 the Aronin–Taimanov Defense. Black also has other 7th moves, such as 7...Na6 and 7...exd4; Chapter 5 covers them."
    },
    {
      kind: 'warning',
      title: 'Remember the pin',
      body:
        'After 8.dxe5 dxe5 9.Qxd8 Rxd8 10.Bg5, natural moves like 10...Bg4 or 10...Be6 run into 11.Nd5! and the same pin trick as Module 2.5. Move the rook off d8 first.'
    }
  ],
  takeaway:
    '7...Nc6 puts a second attacker on d4 and makes White decide. 8.d5 is the main line; against 8.Be3 Black plays ...Ng4, and against 8.dxe5 Black unpins at once after Bg5.',
  lookAhead:
    "Module 2.7 follows the main line: 8.d5, the knight's retreat to e7, and the locked center.",
  drills: [
    {
      title: 'Reach the main line',
      prompt: "You're Black. White develops with 5.Nf3, 6.Be2 and 7.O-O. Castle, strike at d4, then add a second attacker.",
      moves: NC6,
      start: 8,
      side: 'black',
      hints: ['Castle first, then the e-pawn break from Module 2.1.', 'After 7.O-O, which knight move adds pressure on d4?'],
      success: '5...O-O, 6...e5 and 7...Nc6. Now d4 is attacked twice and White must decide what to do.'
    },
    {
      title: 'Bother the bishop',
      prompt: "You're Black. White kept the tension with 8.Be3. Attack the bishop, and keep going when it moves.",
      moves: `${NC6} Be3 Ng4 Bg5 f6`,
      start: 15,
      side: 'black',
      hints: ['Which knight can jump to a square that attacks e3?', 'After 9.Bg5 your queen is attacked. Block with a pawn that also hits the bishop.'],
      success: '8...Ng4! and 9...f6. The bishop has to keep moving, and Black gains time and space.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 7...Nc6, how many times is d4 attacked and how many times is it defended?',
      moves: NC6,
      orientation: 'white',
      choices: [
        { text: 'Attacked twice, defended twice', correct: true, why: 'Right. The e5-pawn and c6-knight attack it; the f3-knight and the d1-queen defend it.' },
        { text: 'Attacked three times, defended twice', why: "The g7-bishop doesn't count: the f6-knight and Black's own e5-pawn stand in its way." },
        { text: 'Attacked once, defended twice', why: 'Count the e5-pawn as well. It attacks d4 diagonally, so there are two attackers.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Which of White\'s 8th moves closes the center?',
      choices: [
        { text: '8.d5', correct: true, why: 'Yes. The pawn pushes past the attack and attacks the c6-knight. The center is locked.' },
        { text: '8.Be3', why: 'This keeps the tension. White can still choose d5 or dxe5 later.' },
        { text: '8.dxe5', why: 'This opens the center and trades queens. The opposite of closing it.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just played 8.Be3. What is the typical reply?',
      moves: `${NC6} Be3`,
      orientation: 'black',
      choices: [
        { text: '8...Ng4', correct: true, why: 'Yes. The knight attacks the bishop, and after 9.Bg5 f6 Black gains time and space.' },
        { text: '8...Nxe4', why: 'After 9.Nxe4 Black has only a pawn for the knight. The e4-pawn is defended.' },
        { text: '8...exd4', why: 'Playable, but it gives up the tension and White recaptures comfortably. 8...Ng4 is the more active main move.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 8.Be3 Ng4 9.Bg5, why does Black play 9...f6?',
      moves: `${NC6} Be3 Ng4 Bg5`,
      orientation: 'black',
      choices: [
        { text: 'It blocks the attack on the queen and hits the bishop', correct: true, why: 'Right. One pawn move solves the problem and gains time.' },
        { text: 'It opens the f-file for the rook', why: 'The f-pawn only moves one square and nothing is traded, so no file opens.' },
        { text: 'It prepares to castle queenside', why: 'Black has already castled kingside. The point is the queen on d8 and the bishop on g5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'The lichess opening database gives 7.O-O Nc6 a special name. Which one?',
      moves: NC6,
      orientation: 'black',
      choices: [
        { text: 'The Aronin–Taimanov Defense', correct: true, why: 'Yes. It leads to the main line after 8.d5 Ne7.' },
        { text: 'The Glek Defense', why: 'lichess uses that name for 7...Na6, a different 7th move.' },
        { text: 'The Petrosian System', why: "That is White's 7.d5, played before castling." }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White has just pinned the f6-knight. Which move is best?',
      moves: `${NC6} dxe5 dxe5 Qxd8 Rxd8 Bg5`,
      orientation: 'black',
      choices: [
        { text: '10...Rd7', correct: true, why: 'Yes. The rook steps off the diagonal and the pin is gone. The position is equal.' },
        { text: '10...Bg4', why: '11.Nd5! uses the pin, just like Module 2.5, and White gets the better game.' },
        { text: '10...h6', why: '11.Bxf6 Bxf6 12.Nd5 hits the bishop and c7, and White wins the c7-pawn.' }
      ]
    }
  ],
  key: { name: 'Main line: 7.O-O Nc6', moves: NC6, orientation: 'black' },
  terms: [
    { term: 'Main line', meaning: 'The most respected and most played route through an opening.' },
    { term: 'Keeping the tension', meaning: 'Leaving pawns that attack each other in place instead of trading or pushing, to keep options open.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one. Strong in open positions.' }
  ]
})
