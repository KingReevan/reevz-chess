import { defineModule } from '../../../types'
import { ALAPIN, MORRA } from '../lines'

/** alapin-d5-iqp: 2...d5 3.exd5 Qxd5 4.d4 Nc6 5.Nf3 cxd4 6.cxd4 e6 7.Nc3 Qd6 */
const IQP = `${ALAPIN} d5 exd5 Qxd5 d4 Nc6 Nf3 cxd4 cxd4 e6 Nc3 Qd6`
/** morra-declined-d5: 3...d5 4.exd5 Qxd5 5.cxd4 Nc6 6.Nf3 e6 7.Nc3 Qd8 8.Bc4 Nf6 9.O-O Be7 */
const DECLINED = `${MORRA} d5 exd5 Qxd5 cxd4 Nc6 Nf3 e6 Nc3 Qd8 Bc4 Nf6 O-O Be7`
/** White's d4-d5 break: 10.Re1 O-O 11.a3 a6 12.Ba2 b5 13.d5 exd5 14.Nxd5 (engine line) */
const BREAK = `${DECLINED} Re1 O-O a3 a6 Ba2 b5 d5 exd5 Nxd5`
/** Black's blockade: 10.Qe2 O-O 11.Rd1 Nd5 12.h3 Qd6 (engine line) */
const BLOCKADE = `${DECLINED} Qe2 O-O Rd1 Nd5 h3 Qd6`

export default defineModule({
  id: '7.3',
  title: 'The isolated d-pawn',
  minutes: 12,
  level: 2,
  goals: [
    'Recognize an isolated d-pawn and say which side has it',
    'Learn the plan with the pawn: active pieces and the d4–d5 break',
    'Learn the plan against it: blockade on d5 and trade pieces'
  ],
  intro:
    "In the 2...d5 Alapin, and when Black declines the Smith–Morra with 3...d5, White often ends up with a lone pawn on d4 that no other pawn can protect. Is that pawn a strength or a weakness? Both, and each side has a clear plan.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'How the isolated pawn appears',
      intro: 'A 2...d5 Alapin with an early ...Nc6. Watch which pawns leave the board.',
      moves: IQP,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'Pressure on d4',
          text: '4...Nc6. Now the c5-pawn, the c6-knight and the queen all attack d4. Only the c3-pawn and White\'s queen defend it.',
          arrows: [['c6', 'd4', 'red'], ['c5', 'd4', 'red'], ['d5', 'd4', 'red']]
        },
        9: {
          title: 'A third defender',
          text: '5.Nf3. The knight develops and guards d4, so three attackers meet three defenders.',
          arrows: [['f3', 'd4', 'green']]
        },
        10: {
          title: 'Black trades',
          text: '5...cxd4. Black swaps the c-pawn for White\'s d-pawn.',
          marks: ['d4']
        },
        11: {
          title: 'An isolated pawn',
          text: '6.cxd4. Look at the files next to d4. White has no c-pawn and no e-pawn left, so no pawn can ever defend the d4-pawn. It is isolated.',
          marks: ['d4', 'c2', 'e2']
        },
        12: {
          title: 'Black is healthy',
          text: "6...e6. Black's pawns stand together on a7, b7, e6, f7, g7 and h7, with no weak ones. The e6-pawn also guards d5, the square in front of White's pawn.",
          arrows: [['e6', 'd5', 'green']]
        },
        13: {
          title: 'The knight hits the queen',
          text: '7.Nc3. The c3-square is free again, so the knight develops and attacks the queen.',
          arrows: [['c3', 'd5', 'red']]
        },
        14: {
          title: 'A typical position',
          text: '7...Qd6. The queen steps back but still watches d5 and d4. White has a bit more space and freer pieces, and the engine gives White a small edge.',
          arrows: [['d6', 'd4', 'red']],
          marks: ['d5']
        }
      }
    },
    {
      kind: 'text',
      title: 'Strength or weakness?',
      body:
        "An **isolated pawn** has no pawns of its own color on the files next to it. When it stands on the d-file, it is called an **isolated queen's pawn**, or **IQP**. In the positions of this module, it is always **White** who has it.\n\n**White's plan (the side with the IQP).** The pawn gives space and controls e5 and c5, so a White knight on e5 is well supported. White keeps pieces on the board, aims them at Black's king, and waits for the right moment to push **d4–d5**. That break trades the weak pawn off and opens lines for White's pieces.\n\n**Black's plan (against the IQP).** First stop the pawn with a **blockade**: put a piece, ideally a knight, on d5, right in front of it. Then **trade pieces**. With fewer pieces White has less attack, and in an endgame the d4-pawn is just a weakness that Black can attack with rooks and knights."
    },
    {
      kind: 'walkthrough',
      title: "White's plan: the d4–d5 break",
      intro: 'The same pawn structure, reached through the Smith–Morra Gambit declined with 3...d5 (Module 7.8). White prepares the push and then strikes.',
      moves: BREAK,
      start: 18,
      orientation: 'white',
      steps: {
        18: {
          title: 'The IQP again',
          text: "9...Be7. White's d4-pawn is isolated again. It controls e5, a fine square for a White knight, and White's pieces are active.",
          arrows: [['d4', 'e5', 'yellow']],
          marks: ['d4']
        },
        19: {
          title: 'Rook to the e-file',
          text: '10.Re1. White has no e-pawn, but Black has one on e6, so the e-file is half-open for White. The rook takes it.',
          arrows: [['e1', 'e6', 'blue']]
        },
        20: {
          title: 'Black castles',
          text: '10...O-O. Black gets the king safe.',
          arrows: [['e8', 'g8', 'green']]
        },
        21: {
          title: 'A useful pawn move',
          text: "11.a3. The pawn keeps Black's knight out of b4. From b4 it could reach d5, the blockade square.",
          marks: ['b4'],
          arrows: [['c6', 'b4', 'blue']]
        },
        22: {
          title: 'Black prepares ...b5',
          text: '11...a6. Black wants to gain space on the queenside with ...b5 and put the bishop on b7.',
          arrows: [['b7', 'b5', 'blue']]
        },
        23: {
          title: 'The bishop steps back',
          text: '12.Ba2. The bishop gets out of the way of ...b5 and keeps aiming down the diagonal at d5, e6 and f7.',
          arrows: [['a2', 'f7', 'blue']]
        },
        24: {
          title: 'Space on the queenside',
          text: "12...b5. Black's best. The pawn gains space and makes room for ...Bb7. But now no pawn guards the c6-knight.",
          marks: ['c6']
        },
        25: {
          title: 'The break',
          text: '13.d5. The isolated pawn pushes forward and attacks the c6-knight and the e6-pawn. Nothing defends the knight, so Black must react.',
          arrows: [['d5', 'c6', 'red'], ['d5', 'e6', 'red']],
          ann: '!'
        },
        26: {
          title: 'Black takes',
          text: '13...exd5. Black takes the pawn. Now the e-file is fully open.',
          arrows: [['e1', 'e7', 'blue']]
        },
        27: {
          title: 'Active pieces',
          text: "14.Nxd5. The weak pawn is gone and White's pieces come alive: the knight hits e7 and f6, the a2-bishop backs it up, and the rook eyes e7. White is a bit better. (14...Nxd5? 15.Qxd5 is clearly better for White.)",
          arrows: [['d5', 'e7', 'red'], ['d5', 'f6', 'red'], ['a2', 'd5', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "Black's plan: the blockade on d5",
      intro: 'Same position, but this time White prepares the push slowly. Black puts a knight right in front of the pawn.',
      moves: BLOCKADE,
      start: 18,
      orientation: 'black',
      steps: {
        18: {
          title: 'The key square',
          text: "9...Be7. Look at d5, the square in front of White's isolated pawn. Whoever controls it decides whether the pawn can ever move.",
          marks: ['d5']
        },
        19: {
          title: 'Making room',
          text: '10.Qe2. The queen leaves the d-file so that a rook can go to d1, behind the pawn, and support d4–d5.',
          arrows: [['f1', 'd1', 'blue']]
        },
        20: {
          title: 'Black castles',
          text: '10...O-O. Black castles first.',
          arrows: [['e8', 'g8', 'green']]
        },
        21: {
          title: 'Rook behind the pawn',
          text: '11.Rd1. The rook backs up the pawn. White is getting ready for d4–d5.',
          arrows: [['d1', 'd4', 'green'], ['d4', 'd5', 'blue']]
        },
        22: {
          title: 'The blockade',
          text: '11...Nd5. The knight sits right in front of the pawn, so d4–d5 is impossible. White has no c-pawn or e-pawn, so no pawn can ever chase it away.',
          marks: ['d5', 'd4'],
          ann: '!'
        },
        23: {
          title: 'A quiet move',
          text: "12.h3. A useful waiting move. It keeps Black's pieces off g4 and gives White's king a little air.",
          arrows: [['h3', 'g4', 'green']]
        },
        24: {
          title: 'Holding the blockade',
          text: '12...Qd6. The queen guards the d5-knight. White still has a small edge thanks to more space, but Black has a clear plan: keep the blockade, trade pieces, and attack d4 later.',
          arrows: [['d6', 'd5', 'green']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Check the neighboring files',
      body:
        "To find an isolated pawn, look at the files on both sides of it. If neither file has a pawn of the same color, the pawn is isolated. Always check whose pawn it is: in these lines White has the IQP, and Black plays against it."
    }
  ],
  takeaway:
    "An isolated d-pawn gives its owner space and active pieces but can never be defended by a pawn. White should keep pieces on and aim for d4–d5; Black should blockade on d5 and trade pieces.",
  lookAhead: "Module 7.4 turns to Black's other main answer to 2.c3: 2...Nf6, hitting e4 with a knight.",
  drills: [
    {
      title: 'Strike with the pawn',
      prompt: "You're White. Black has just played 12...b5. Use your isolated pawn: push it, and then take back on d5 with a piece.",
      moves: BREAK,
      start: 24,
      side: 'white',
      hints: ['The d4-pawn can attack two black units at once.', 'Push d4–d5, and after ...exd5 take with the knight.'],
      success: '13.d5! exd5 14.Nxd5. The weak pawn has traded itself off, and your pieces are very active.'
    },
    {
      title: 'Set up the blockade',
      prompt: "You're Black. White's rook has just come to d1, behind the isolated pawn. Stop the pawn for good.",
      moves: BLOCKADE.split(' ').slice(0, 22).join(' '),
      start: 20,
      side: 'black',
      hints: ['Which square is right in front of the d4-pawn?', 'Put your f6-knight on d5.'],
      success: "11...Nd5! The knight blocks the pawn, and no White pawn can ever chase it away."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Which pawn in this position is isolated?',
      moves: IQP.split(' ').slice(0, 11).join(' '),
      orientation: 'white',
      choices: [
        { text: "White's d4-pawn", correct: true, why: 'Right. White has no pawns on the c-file or the e-file, so nothing can ever defend d4 with a pawn.' },
        { text: "Black's a7-pawn", why: 'The b7-pawn stands right next to it, so it is not isolated.' },
        { text: 'No pawn is isolated', why: "Look at White's d4-pawn: there are no White pawns on the c- or e-files." }
      ]
    },
    {
      type: 'plan',
      prompt: "Where should Black put a piece to stop White's isolated d4-pawn?",
      choices: [
        { text: 'On d5, right in front of the pawn', correct: true, why: 'Yes. A knight on d5 blocks the pawn, and no White pawn can attack that square.' },
        { text: 'On e5, beside the pawn', why: 'The d4-pawn attacks e5, and White often uses that square for a knight. It is White\'s square, not Black\'s.' },
        { text: 'On d6, two squares in front', why: 'A piece on d6 does not stop d4–d5. The blockade square is d5.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Which plan suits White, the side with the isolated d-pawn?',
      choices: [
        { text: 'Keep pieces on, aim them at the king, and prepare d4–d5', correct: true, why: 'Right. Active pieces are the reward for the weak pawn, and d4–d5 is the freeing break.' },
        { text: 'Trade pieces and head for an endgame', why: "That's Black's plan. In an endgame the isolated pawn is just a weakness." },
        { text: 'Leave the pawn alone and play only on the queenside', why: 'The center is where the action is. White should use the space the pawn gives and prepare d4–d5.' }
      ]
    },
    {
      type: 'move',
      prompt: "White to move. Black's last move, 12...b5, left the c6-knight without a pawn to guard it. What is White's strongest move?",
      moves: BREAK.split(' ').slice(0, 24).join(' '),
      orientation: 'white',
      choices: [
        { text: '13.d5', correct: true, why: 'Yes. The break hits c6 and e6, the weak pawn trades itself off, and White\'s pieces become very active.' },
        { text: '13.Ne5', why: 'The knight looks great on e5, but after 13...Bb7 Black is fine. The position is roughly equal.' },
        { text: '13.Qd3', why: 'A normal move, but it gives Black time for ...Bb7 and ...Rc8. The position is roughly equal. 13.d5 keeps an edge.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why is d5 such a good square for a Black knight when White has an isolated d4-pawn?',
      choices: [
        { text: 'No White pawn can ever attack it, and it stops the pawn', correct: true, why: 'Exactly. White has no c- or e-pawn, so the knight can only be challenged by pieces.' },
        { text: "It attacks White's king directly", why: 'A knight on d5 is a central blocker, not an attacker of the king.' },
        { text: 'It protects the e6-pawn', why: 'A knight on d5 does not guard e6. Its value is that it blocks the pawn and can never be kicked by a pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why do piece trades usually help the side playing against an isolated pawn?',
      choices: [
        { text: 'With fewer pieces, the pawn gives less activity and becomes an easy target', correct: true, why: "Right. The IQP's strength is the activity of the pieces around it. Without them, only the weakness is left." },
        { text: 'Trades turn the isolated pawn into a passed pawn', why: "In these lines Black's e6-pawn stands on a file next to the d-pawn, so it is not a passed pawn. Trades don't change that." },
        { text: 'Trades open the d-file for White', why: 'Trades do not open the d-file. The point is that White loses the active pieces that make up for the weak pawn.' }
      ]
    }
  ],
  key: { name: 'Isolated d-pawn: Alapin 7...Qd6', moves: IQP, orientation: 'white' },
  terms: [
    { term: 'Isolated pawn', meaning: 'A pawn with no pawns of its own color on the files next to it. No other pawn can ever defend it.' },
    { term: 'IQP', meaning: "Isolated queen's pawn: an isolated pawn on the d-file, the queen's file." },
    { term: 'Blockade', meaning: 'Putting a piece directly in front of an enemy pawn to stop it from advancing.' },
    { term: 'Pawn break', meaning: 'A pawn move that challenges the enemy pawns and opens lines, like d4–d5 here.' }
  ]
})
