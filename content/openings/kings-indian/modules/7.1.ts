import { defineModule } from '../../../types'
import { KID } from '../lines'

/** four-pawns-5f4, then 5...O-O 6.Nf3 */
const FP6 = `${KID} f4 O-O Nf3`
/** four-pawns-6c5, then 7.d5 e6 (the start of four-pawns-9cxd5) */
const STRIKE = `${FP6} c5 d5 e6`
/** A slow 6th move (engine-checked): 6...Nbd7?! 7.e5! Ne8 and White is clearly better */
const SLOW = `${FP6} Nbd7 e5 Ne8`

export default defineModule({
  id: '7.1',
  title: '5.f4: the biggest center',
  minutes: 10,
  level: 3,
  goals: [
    'Recognize the Four Pawns Attack and what the f4-pawn is for',
    'Weigh space against development',
    'Strike at once with ...c5, and meet 7.d5 with ...e6'
  ],
  intro:
    "In the Four Pawns Attack, White puts pawns on c4, d4, e4 and f4: the biggest center White can build. It looks frightening. If Black sits still, e4–e5 will kick the f6-knight and squeeze the whole position. But every pawn move is a move that does not develop a piece. This module shows how Black uses that time.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Four pawns, and the answer ...c5',
      intro: 'Count the moves as you go: how many pawn moves for White, how many piece moves?',
      moves: STRIKE,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The King\'s Indian set-up',
          text: '4...d6. White has three pawns in the center: c4, d4 and e4. Black has a knight, a bishop and a safe spot ready for the king.',
          marks: ['c4', 'd4', 'e4']
        },
        9: {
          title: 'The fourth pawn',
          text: '5.f4. The Four Pawns Attack. The f-pawn backs up the push e4–e5, which would hit the f6-knight. If Black ever takes on e5, the f-pawn takes back and a White pawn stays on e5.',
          arrows: [['e4', 'e5', 'yellow'], ['f4', 'e5', 'green']],
          marks: ['c4', 'd4', 'e4', 'f4']
        },
        10: {
          title: 'King first',
          text: '5...O-O. Black castles. The king is safe before the center opens, and the rook is ready to join the game.',
          arrows: [['e8', 'g8', 'green']]
        },
        11: {
          title: 'White develops',
          text: '6.Nf3. The knight guards d4 and supports e4–e5. Now the d4-pawn, the f4-pawn and the knight all guard e5.',
          arrows: [['f3', 'e5', 'green'], ['f3', 'd4', 'green']]
        },
        12: {
          title: 'Strike at once',
          text: "6...c5. Black hits d4 right away. White has made four pawn moves and two knight moves. White's bishops are still at home and the king is still on e1.",
          arrows: [['c5', 'd4', 'red']],
          ann: '!'
        },
        13: {
          title: 'White pushes past',
          text: '7.d5. The main line, and about as good as 7.Be2, the engine\'s first choice. White avoids the trade and grabs more space. Now the c5-pawn has nothing to hit, so Black needs a new target.',
          marks: ['d5']
        },
        14: {
          title: 'Hit the new front pawn',
          text: '7...e6. Black attacks d5 at once, before White can finish developing. The position is roughly equal. Module 7.2 shows what happens after 8.Be2 exd5 9.cxd5.',
          arrows: [['e6', 'd5', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Space or development?',
      body:
        "**Space** is how much of the board your pawns control. White's four pawns control a lot of it, so Black's pieces have fewer good squares.\n\n**Development** is getting your pieces off the back rank. After 6...c5, Black has developed a knight and a bishop and castled. White has developed two knights, but the bishops are still at home and the king is still in the center.\n\nA big pawn center is strong when the pieces behind it are ready. It is a target when they are not. Pawns that have advanced further than the pieces can support are called **overextended**. So Black's plan is simple: hit the center now, while White is still busy developing. White's plan is just as clear: finish developing (Be2 and O-O), then push e4–e5."
    },
    {
      kind: 'walkthrough',
      title: 'What a slow move allows',
      intro: 'Here Black develops quietly instead of striking. Watch what the f4-pawn makes possible.',
      moves: SLOW,
      start: 11,
      orientation: 'white',
      steps: {
        11: {
          title: 'Black to move',
          text: '6.Nf3. The same position as before. This time Black does not touch the center.',
          arrows: [['e4', 'e5', 'yellow']]
        },
        12: {
          title: 'A quiet move',
          text: '6...Nbd7. It develops a piece, but it puts no pressure on d4 or e4. White is free to push.',
          ann: '?!'
        },
        13: {
          title: 'The push',
          text: '7.e5. The pawn attacks the f6-knight. If 7...dxe5, then 8.fxe5 and a White pawn is still on e5, now hitting the knight again.',
          arrows: [['e5', 'f6', 'red'], ['f4', 'e5', 'green']],
          ann: '!'
        },
        14: {
          title: 'Back to the first rank',
          text: "7...Ne8. Black's best try, but the knight is back home. White's pawns on c4, d4, e5 and f4 cramp Black, and the engine says White is clearly better.",
          marks: ['e8', 'e5']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Strike first, develop second',
      body:
        "Against the Four Pawns, Black's moves must do something to the center. ...c5 hits d4, and after d5, ...e6 hits d5. Some players even play 5...c5 before castling. That is the same idea and often reaches the same position. 5.f4 is rare among masters, but you will meet it more often at club level, so it pays to know the answer."
    }
  ],
  takeaway:
    "5.f4 builds the biggest center, and the f4-pawn backs up e4–e5. Black answers by striking at once: 5...O-O, 6...c5, and after 7.d5, 7...e6. A slow move like 6...Nbd7?! lets 7.e5! cramp Black.",
  lookAhead:
    'Module 7.2 follows the main line 8.Be2 exd5 9.cxd5, where the Four Pawns turns into a Benoni structure.',
  drills: [
    {
      title: 'Answer the Four Pawns',
      prompt: "You're Black. White has just played 5.f4. Castle, then hit the center as soon as White develops the knight, and hit the d5-pawn when it arrives.",
      moves: STRIKE,
      start: 9,
      side: 'black',
      hints: ['Make your king safe first.', 'Then hit d4 with the c-pawn, and d5 with the e-pawn.'],
      success: '5...O-O, 6...c5 and 7...e6. Black strikes at the center before White has finished developing.'
    },
    {
      title: 'Punish the slow move',
      prompt: "You're White. Black has just played 6...Nbd7?!, ignoring your center. Use your extra pawn on f4.",
      moves: `${FP6} Nbd7 e5`,
      start: 12,
      side: 'white',
      hints: ['Which pawn can attack the f6-knight?', 'If Black takes on e5, the f4-pawn takes back.'],
      success: '7.e5! kicks the knight. After 7...Ne8 your pawns cramp Black, and White is clearly better.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the main job of the f4-pawn in the Four Pawns Attack?',
      moves: `${KID} f4`,
      orientation: 'white',
      choices: [
        { text: 'It supports e4–e5: if Black takes on e5, the f-pawn takes back', correct: true, why: 'Right. With the f-pawn behind it, the e-pawn can advance and stay on e5.' },
        { text: 'It guards the d4-pawn', why: 'A pawn on f4 guards e5 and g5, not d4. Here the queen guards d4, and later the knight on f3 will too.' },
        { text: 'It prepares queenside castling', why: 'f4 has nothing to do with castling queenside. White usually castles short in the Four Pawns.' }
      ]
    },
    {
      type: 'move',
      prompt: "Black to move. What is Black's best move?",
      moves: FP6,
      orientation: 'black',
      choices: [
        { text: '6...c5', correct: true, why: 'Right. Black hits d4 at once, while White still has two bishops at home and the king in the center.' },
        { text: '6...Nbd7', why: 'Too slow. 7.e5! kicks the f6-knight to e8, and White is clearly better.' },
        { text: '6...b6', why: 'Also too slow. 7.e5 drives the knight back to d7, and White is clearly better.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 5.f4 O-O 6.Nf3 c5, which statement is true?',
      moves: `${FP6} c5`,
      orientation: 'black',
      choices: [
        { text: 'White has made four pawn moves, and both White bishops are still at home', correct: true, why: "Right. White has lots of space, but Black is ahead in development and the White king hasn't castled." },
        { text: 'White is ahead in development', why: 'Count again: White has two knights out, Black has a knight and a bishop out and has castled.' },
        { text: 'Both sides have castled', why: "Only Black has castled. White's king is still on e1." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Once White has played Be2 and castled, what is White hoping to play?',
      choices: [
        { text: 'e4–e5, kicking the f6-knight', correct: true, why: 'Right. That is the point of the f4-pawn: e5 is supported, and the push gains even more space.' },
        { text: 'h4–h5, attacking with the h-pawn', why: 'That is more typical of the Sämisch, where White often castles queenside. In the Four Pawns, the main break is e4–e5.' },
        { text: 'b2–b4, attacking on the queenside', why: 'White has no reason to start on the queenside here. The big center is meant to push forward with e5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Which system has White chosen?',
      moves: `${KID} f4`,
      orientation: 'white',
      choices: [
        { text: 'The Four Pawns Attack', correct: true, why: 'Right. Pawns on c4, d4, e4 and f4, with the f-pawn pushed two squares.' },
        { text: 'The Sämisch Variation', why: 'The Sämisch is 5.f3: the f-pawn moves one square and guards e4.' },
        { text: 'The Averbakh Variation', why: 'The Averbakh is 5.Be2 and 6.Bg5. Here White has pushed the f-pawn instead.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has pushed past with 7.d5. What is the best answer?',
      moves: `${FP6} c5 d5`,
      orientation: 'black',
      choices: [
        { text: '7...e6', correct: true, why: 'Right. Black attacks the d5-pawn at once and gets ready to open the e-file.' },
        { text: '7...e5', why: '8.fxe5 attacks the d6-pawn and the f6-knight at the same time, and White is clearly better.' },
        { text: '7...b5', why: 'After 8.cxb5 Black is simply a pawn down without enough play. White is clearly better.' }
      ]
    }
  ],
  key: { name: 'Four Pawns Attack: 6...c5', moves: `${FP6} c5`, orientation: 'black' },
  terms: [
    { term: 'Four Pawns Attack', meaning: 'The system 5.f4, with White pawns on c4, d4, e4 and f4.' },
    { term: 'Space', meaning: 'How much of the board your pawns control. More space gives your pieces more room and the enemy less.' },
    { term: 'Development', meaning: 'Moving pieces off the back rank so they can join the game.' },
    { term: 'Overextended', meaning: 'Pawns that have advanced further than the pieces behind them can support. They can become targets.' }
  ]
})
