import { defineModule } from '../../../types'
import { RUBINSTEIN } from '../lines'

/** rub-4nd7: 4...Nd7 5.Nf3 Ngf6 6.Nxf6+ Nxf6 */
const MAIN = `${RUBINSTEIN} Nd7 Nf3 Ngf6 Nxf6+ Nxf6`
/** rub-6gxf6: 6...gxf6 7.Bd3 c5 8.d5 */
const GXF6 = `${RUBINSTEIN} Nd7 Nf3 Ngf6 Nxf6+ gxf6 Bd3 c5 d5`

export default defineModule({
  id: '5.2',
  title: '4...Nd7 and ...Ngf6',
  minutes: 10,
  level: 2,
  goals: [
    'Learn why Black plays 4...Nd7 before ...Ngf6',
    'Take back on f6 the right way: with the knight',
    'See what 6...gxf6?! weakens, and how White uses it'
  ],
  intro:
    "After 3...dxe4 4.Nxe4, White's knight sits proudly in the center. Black wants to challenge it with ...Nf6. But if White trades on f6, which piece takes back? Black's main line answers that question before it arises.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Knight first, then ...Ngf6',
      intro: 'Count the black pieces that can take back on f6 after each move.',
      moves: MAIN,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'The knight in the center',
          text: '4.Nxe4. Black wants to put a knight on f6 to challenge the e4-knight. But a trade there must not wreck Black\'s pawns.',
          marks: ['e4', 'f6']
        },
        8: {
          title: 'Preparing the challenge',
          text: '4...Nd7. The b8-knight goes to d7 first. From there it covers f6, so it can take back if White trades a knight there. It also watches e5.',
          arrows: [['d7', 'f6', 'green'], ['d7', 'e5', 'blue']],
          ann: '!'
        },
        9: {
          title: 'White develops',
          text: '5.Nf3. The knight develops and guards d4 and e5.',
          arrows: [['f3', 'd4', 'green'], ['f3', 'e5', 'green']]
        },
        10: {
          title: 'Now the challenge',
          text: '5...Ngf6. The king\'s knight attacks the e4-knight, which has no defender. If White takes on f6, the d7-knight can take back.',
          arrows: [['f6', 'e4', 'red'], ['d7', 'f6', 'green']]
        },
        11: {
          title: 'White trades',
          text: "6.Nxf6+. White's main move: trade the strong knight rather than retreat it. White's other tries, 6.Bd3 and 6.Bg5, come in Modules 5.3 and 5.4.",
          arrows: [['f6', 'e8', 'red']]
        },
        12: {
          title: 'A healthy recapture',
          text: "6...Nxf6. The d7-knight takes back. Black's pawns are untouched, the new f6-knight guards h7 and d5, and the d7-square is free again for the c8-bishop. White keeps a small edge, but Black is solid.",
          arrows: [['f6', 'h7', 'green'], ['f6', 'd5', 'green'], ['c8', 'd7', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Why the order matters',
      body:
        "Module 5.1 showed what happens after 4...Nf6 at once: 5.Nxf6+ and no black knight can take back, so Black must break up the pawns with ...gxf6 or bring the queen out early.\n\nWith **4...Nd7 first**, Black always has a knight ready for f6. The price is small: the d7-knight blocks the c8-bishop for a while. After the trade on f6 it has moved on, and the bishop can use d7 again."
    },
    {
      kind: 'walkthrough',
      title: 'The mistake 6...gxf6?!',
      intro: 'Same position, but Black takes back with the g-pawn. Watch what happens to Black\'s king.',
      moves: GXF6,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'The normal position',
          text: '5...Ngf6. Black has set everything up correctly. The d7-knight is ready to take back on f6.',
          arrows: [['d7', 'f6', 'green']]
        },
        11: {
          title: 'The trade',
          text: '6.Nxf6+. White trades knights with check. Black has three ways to take back.',
          arrows: [['f6', 'e8', 'red']]
        },
        12: {
          title: 'The wrong pawn',
          text: '6...gxf6. Black takes with the g-pawn. Now the f-pawns are doubled and the h-pawn has no neighbor. Worse, the king has no safe home: castling short would put it behind a cover with no g-pawn.',
          marks: ['f6', 'f7', 'h7', 'g7'],
          ann: '?!'
        },
        13: {
          title: 'The bishop aims at h7',
          text: "7.Bd3. White develops and aims at Black's kingside: the bishop's diagonal runs all the way to h7. Black's king will probably stay in the center or go to the queenside.",
          arrows: [['d3', 'h7', 'red']]
        },
        14: {
          title: 'Hitting d4',
          text: '7...c5. Black attacks d4 and tries to free the game.',
          arrows: [['c5', 'd4', 'red']]
        },
        15: {
          title: 'Opening the center',
          text: "8.d5. White pushes past and hits the e6-pawn. If 8...exd5, the e-file opens while Black's king is still on e8, and White's rook can soon check there. The engine calls White clearly better.",
          arrows: [['d5', 'e6', 'red']],
          marks: ['e8']
        }
      }
    },
    {
      kind: 'warning',
      title: 'Take back with the knight',
      body:
        "After 6.Nxf6+, play **6...Nxf6**. The other two captures are worse. 6...gxf6?! breaks up the kingside, and White is clearly better. 6...Qxf6? is even worse: 7.Bg5 hits the queen, and White gains time while developing."
    },
    {
      kind: 'text',
      title: "White's view",
      body:
        "White can't hope to win a pawn here. Black's position has no weak spots. White plays for **space and activity** instead: the d4-pawn takes away c5 and e5, and White's bishops have open diagonals. Typical plans are Bd3, Qe2, Bg5 and long castling with a kingside attack (Module 5.3), or c3 and a knight jump to e5 (Module 5.4). If Black ever takes back on f6 with a pawn, White aims at the broken kingside and opens the center."
    }
  ],
  takeaway:
    'Play 4...Nd7 before 5...Ngf6, so a knight can take back on f6. After 6.Nxf6+ Nxf6, Black is solid with healthy pawns; 6...gxf6?! breaks up the kingside and leaves White clearly better.',
  lookAhead: "Module 5.3 shows how Black frees the game with the ...c5 break, and how White answers with Qe2, Bg5 and long castling.",
  drills: [
    {
      title: 'The Rubinstein main line',
      prompt: "You're Black. White has just taken back on e4. Prepare ...Nf6 the right way, challenge the knight, and take back correctly when White trades.",
      moves: MAIN,
      start: 7,
      side: 'black',
      hints: ['Your first move puts the b8-knight where it covers f6.', 'When White takes on f6 with check, recapture with a piece, not a pawn.'],
      success: '4...Nd7, 5...Ngf6 and 6...Nxf6. Healthy pawns and a solid position.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does Black play 4...Nd7 before ...Ngf6?',
      moves: `${RUBINSTEIN} Nd7`,
      orientation: 'black',
      choices: [
        { text: 'So that a knight can take back if White trades on f6', correct: true, why: 'Right. After Nxf6+, the d7-knight recaptures and Black\'s pawns stay healthy.' },
        { text: 'To attack the e4-knight at once', why: 'A knight on d7 does not attack e4. The attack comes next, with ...Ngf6.' },
        { text: 'To free the c8-bishop', why: 'The opposite: the knight on d7 blocks the bishop for a while. It is a small price for a healthy recapture on f6.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just traded on f6 with check. How should Black take back?',
      moves: `${RUBINSTEIN} Nd7 Nf3 Ngf6 Nxf6+`,
      orientation: 'black',
      choices: [
        { text: '6...Nxf6', correct: true, why: 'Right. The d7-knight takes back, the pawns stay healthy, and the d7-square opens for the c8-bishop.' },
        { text: '6...gxf6', why: 'This breaks up the kingside: doubled f-pawns and no g-pawn to shelter the king. After 7.Bd3 White is clearly better.' },
        { text: '6...Qxf6', why: 'The queen comes out too early. 7.Bg5 hits it, and White gains time while developing.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Black has played 6...gxf6?!. What is the main problem in Black\'s position?',
      moves: `${RUBINSTEIN} Nd7 Nf3 Ngf6 Nxf6+ gxf6`,
      orientation: 'white',
      choices: [
        { text: 'The kingside pawns are broken, so the king has no safe home', correct: true, why: 'Right. With no g-pawn, castling short is risky, and the king is stuck in the center for now. White aims to open lines there.' },
        { text: 'Black is a pawn down', why: 'No. Knights were traded one for one. The problem is the pawn structure, not material.' },
        { text: 'White can win the f6-pawn at once', why: 'The f6-pawn is guarded by the d7-knight and the queen. The weakness is the king\'s cover, not a loose pawn.' }
      ]
    },
    {
      type: 'plan',
      prompt: "After 6...gxf6?! 7.Bd3 c5, what is White's 8.d5 aiming for?",
      moves: GXF6,
      orientation: 'white',
      choices: [
        { text: "To open lines in the center while Black's king is still on e8", correct: true, why: 'Right. The pawn hits e6. If 8...exd5, the e-file opens, and after castling White\'s rook can check on e1.' },
        { text: 'To win the c5-pawn', why: 'The d5-pawn does not attack c5. It attacks the e6-pawn and aims to open the center.' },
        { text: 'To close the center and attack on the queenside', why: "White wants the center open, because that is where Black's king is." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: "After 6.Nxf6+ Nxf6, how would you describe Black's pawn structure?",
      moves: MAIN,
      orientation: 'black',
      choices: [
        { text: 'Healthy: no doubled or isolated pawns', correct: true, why: 'Right. That is the reward for taking back with the knight. Black has no weak pawns to defend.' },
        { text: 'Doubled f-pawns', why: 'Black would have doubled f-pawns only after ...gxf6. The knight recapture keeps the pawns healthy.' },
        { text: 'An isolated d-pawn', why: 'Black has no d-pawn at all: it was traded on e4. The isolated d-pawn belongs to the Tarrasch with 4...exd5 (Module 4.3).' }
      ]
    },
    {
      type: 'order',
      prompt: 'Black wants to play ...Nf6 in the Rubinstein. Which move order lets a knight take back if White trades on f6?',
      choices: [
        { text: '4...Nd7, then 5...Ngf6', correct: true, why: 'Right. The d7-knight is ready to recapture, so the pawns stay healthy.' },
        { text: '4...Nf6 at once', why: 'After 5.Nxf6+, no black knight can reach f6. Black must take with the g-pawn or the queen.' },
        { text: '4...Nc6, then 5...Nf6', why: 'A knight on c6 cannot reach f6 in one move, so after Nxf6+ it can\'t take back.' }
      ]
    }
  ],
  key: { name: 'Rubinstein main line: 6.Nxf6+ Nxf6', moves: MAIN, orientation: 'black' },
  terms: [
    { term: 'Recapture', meaning: 'Taking back after the opponent captures one of your pieces or pawns.' },
    { term: 'Doubled pawns', meaning: 'Two pawns of the same color on one file, like f7 and f6 after ...gxf6. They cannot protect each other.' },
    { term: 'Isolated pawn', meaning: 'A pawn with no friendly pawns on the files next to it, like the h7-pawn once the g-pawn is gone.' },
    { term: 'Pawn cover', meaning: "The pawns in front of a castled king. Without them, the king is open to attack." }
  ]
})
