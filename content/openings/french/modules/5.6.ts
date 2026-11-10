import { defineModule } from '../../../types'
import { FORT_KNOX } from '../lines'

/** 6.Bd3 Nd7 7.O-O Ngf6 8.Neg5: the danger position */
const NEG5 = `${FORT_KNOX} Bd3 Nd7 O-O Ngf6 Neg5`
/** fk-neg5-h6: 8...h6? 9.Nxe6! fxe6 10.Bg6+ Ke7 */
const H6 = `${NEG5} h6 Nxe6 fxe6 Bg6+ Ke7`
/** fk-neg5-be7: 8...Be7? 9.Nxf7! Kxf7 10.Ng5+ Kg8 11.Nxe6 Qc8 */
const BE7 = `${NEG5} Be7 Nxf7 Kxf7 Ng5+ Kg8 Nxe6 Qc8`
/** fk-neg5-bd6: 8...Bd6! 9.Qe2 h6 10.Ne4 Bxe4 11.Bxe4 Nxe4 12.Qxe4 c6 */
const BD6 = `${NEG5} Bd6 Qe2 h6 Ne4 Bxe4 Bxe4 Nxe4 Qxe4 c6`

export default defineModule({
  id: '5.6',
  title: 'Fort Knox danger: Neg5 and Nxe6',
  minutes: 12,
  level: 2,
  goals: [
    'See why 8...h6? is punished by 9.Nxe6! and 10.Bg6+',
    'Know that 8...Be7? fails to 9.Nxf7! for a similar reason',
    'Play the safe 8...Bd6!, which gives the king room, then ...h6'
  ],
  intro:
    "In Fort Knox, White's knight on e4 is attacked twice after 7...Ngf6. Instead of retreating it, White can jump to g5, next to Black's king. The natural replies look harmless, but two of them run into a knight sacrifice. Which move keeps Black safe, and why?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The trap: 8...h6? 9.Nxe6!',
      intro: 'Watch the g6-square. It decides everything.',
      moves: H6,
      start: 14,
      orientation: 'white',
      steps: {
        14: {
          title: 'The Fort Knox position',
          text: '7...Ngf6. The e4-knight is attacked twice and defended once. White has to do something with it.',
          arrows: [['c6', 'e4', 'red'], ['f6', 'e4', 'red']]
        },
        15: {
          title: 'The knight jumps to g5',
          text: "8.Neg5. Instead of retreating, the knight goes toward Black's king. From g5 it eyes e6, f7 and h7, and Black's king is still on e8.",
          arrows: [['g5', 'e6', 'red'], ['g5', 'f7', 'red'], ['g5', 'h7', 'red']]
        },
        16: {
          title: 'Kicking the knight',
          text: "8...h6. It looks natural to chase the knight away. But the h-pawn has left h7, so only the f7-pawn still guards the g6-square.",
          arrows: [['h6', 'g5', 'red']],
          marks: ['g6'],
          ann: '?'
        },
        17: {
          title: 'The sacrifice',
          text: '9.Nxe6. White gives up the knight for a pawn. From e6 it attacks the queen on d8 and the bishop on f8.',
          arrows: [['e6', 'd8', 'red'], ['e6', 'f8', 'red']],
          ann: '!'
        },
        18: {
          title: 'Black takes',
          text: "9...fxe6. Black's best try. But the f7-pawn has left, so nothing guards g6 any more, and the diagonal from g6 to e8 is open.",
          arrows: [['d3', 'g6', 'blue']],
          marks: ['g6']
        },
        19: {
          title: 'Check from g6',
          text: '10.Bg6+. The bishop checks the king. Because of ...h6, no pawn can take it.',
          arrows: [['g6', 'e8', 'red']],
          ann: '!'
        },
        20: {
          title: 'The king is stuck',
          text: "10...Ke7. The only legal move. Black is a knight for a pawn up, but the king is stuck in the center and can never castle. White's rook is coming to e1. The engine says White is much better, though there is no forced win.",
          arrows: [['f1', 'e1', 'blue']],
          marks: ['e7', 'e6']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'No better: 8...Be7? 9.Nxf7!',
      intro: 'A developing move looks safer. It isn\'t. Watch the e7-square this time.',
      moves: BE7,
      start: 15,
      orientation: 'white',
      steps: {
        15: {
          title: 'The same position',
          text: '8.Neg5. Black looks for a quiet developing move.',
          arrows: [['g5', 'f7', 'red']]
        },
        16: {
          title: 'The wrong square',
          text: "8...Be7. The bishop develops, but it takes away e7, a square Black's king may need. After 8.Ng3, ...Be7 is fine (Module 5.5). Here it is a mistake.",
          marks: ['e7'],
          ann: '?'
        },
        17: {
          title: 'The second sacrifice',
          text: '9.Nxf7. The knight takes the f7-pawn, which only the king guards. It now forks the queen on d8 and the rook on h8.',
          arrows: [['f7', 'd8', 'red'], ['f7', 'h8', 'red']],
          ann: '!'
        },
        18: {
          title: 'The king takes',
          text: '9...Kxf7. Black takes the knight. The king has left e8 and stands in the open.',
          marks: ['f7']
        },
        19: {
          title: 'Check',
          text: '10.Ng5+. The other knight jumps in with check.',
          arrows: [['g5', 'f7', 'red']]
        },
        20: {
          title: 'Hiding on g8',
          text: '10...Kg8. The king runs to g8. Now it shuts in its own rook on h8.',
          marks: ['h8']
        },
        21: {
          title: 'Another pawn, and the queen',
          text: '11.Nxe6. The knight takes a second pawn and hits the queen on d8 and the g7-pawn.',
          arrows: [['e6', 'd8', 'red'], ['e6', 'g7', 'red']]
        },
        22: {
          title: 'Clearly better for White',
          text: "11...Qc8. The queen escapes. Black has a knight for two pawns, but the king can't castle, the h8-rook is shut in, and White's pieces are very active. White is clearly better.",
          marks: ['g8', 'h8']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The safe way: 8...Bd6!',
      intro: 'Develop the bishop so that it gives the king room. Then ...h6 is fine.',
      moves: BD6,
      start: 15,
      orientation: 'black',
      steps: {
        15: {
          title: 'Find the safe move',
          text: '8.Neg5. Black needs a developing move that also leaves the king squares to run to.',
          arrows: [['g5', 'e6', 'red'], ['g5', 'f7', 'red']]
        },
        16: {
          title: 'Room for the king',
          text: '8...Bd6. The bishop develops and empties f8, while e7 stays empty too. Now 9.Nxf7? Kxf7 10.Ng5+ Ke7 fails: the king has e7 to run to, and White is just a knight down for a pawn.',
          marks: ['f8', 'e7'],
          ann: '!'
        },
        17: {
          title: 'The queen joins in',
          text: '9.Qe2. The queen lines up on the e-file against the e6-pawn.',
          arrows: [['e2', 'e6', 'red']]
        },
        18: {
          title: 'Now ...h6 is safe',
          text: '9...h6. If White tries 10.Nxe6 fxe6 11.Bg6+, the king simply steps to f8, and the sacrifice fails.',
          arrows: [['h6', 'g5', 'red'], ['e8', 'f8', 'green']]
        },
        19: {
          title: 'The knight goes back',
          text: '10.Ne4. The knight returns to e4, where the bishop and the knight attack it again.',
          arrows: [['c6', 'e4', 'red'], ['f6', 'e4', 'red']]
        },
        20: {
          title: 'Bishop for knight',
          text: '10...Bxe4. Black trades the bishop for the knight, as Fort Knox players love to do.',
          marks: ['e4']
        },
        21: {
          title: 'The bishop takes back',
          text: '11.Bxe4. The bishop recaptures, and the f6-knight attacks it.',
          arrows: [['f6', 'e4', 'red']]
        },
        22: {
          title: 'One more trade',
          text: '11...Nxe4. Black trades again.',
          marks: ['e4']
        },
        23: {
          title: 'The queen recaptures',
          text: '12.Qxe4. The queen takes back. Its diagonal now runs to b7, which has no defender.',
          arrows: [['e4', 'b7', 'red']]
        },
        24: {
          title: 'Level',
          text: '12...c6. As always in Fort Knox, ...c6 blocks the long diagonal to b7 and guards d5. Black is ready to castle, and the position is level.',
          arrows: [['e8', 'g8', 'green']],
          marks: ['c6']
        }
      }
    },
    {
      kind: 'warning',
      title: 'Not ...h6 before ...Bd6',
      body:
        "A common belief is that ...h6 is a useful waiting move in Fort Knox. It isn't, as long as the knight on g5 and the bishop on d3 are aiming at your king and the f8-bishop is still at home. After 8...h6? 9.Nxe6! and 10.Bg6+, White is much better. **Develop with ...Bd6 first, then play ...h6.**"
    },
    {
      kind: 'text',
      title: "White's view",
      body:
        "As White, look for **Neg5** when Black's king is still on e8 and the f8-bishop hasn't moved. The knight eyes e6 and f7, and the d3-bishop is ready to jump to g6. If Black answers with ...h6 or ...Be7, the sacrifices on e6 or f7 work.\n\nAgainst the correct 8...Bd6, don't force it: the sacrifices fail because Black's king can run to f8 or e7. White brings the knight back (10.Ne4) or plays quietly, and the game is level."
    }
  ],
  takeaway:
    "After 8.Neg5 in Fort Knox, 8...h6? is met by 9.Nxe6! fxe6 10.Bg6+, and 8...Be7? by 9.Nxf7!. Play 8...Bd6!, which gives the king e7 and f8, and only then ...h6.",
  lookAhead:
    "Module 5.7 compares the two systems of this chapter, the Rubinstein and Fort Knox, and their cousin the Burn.",
  drills: [
    {
      title: 'Spring the trap',
      prompt: "You're White. Black has just played 8...h6?, kicking your knight. Punish it.",
      moves: `${NEG5} h6 Nxe6 fxe6 Bg6+`,
      start: 16,
      side: 'white',
      hints: ["Don't retreat the knight. Give it up for the e6-pawn.", 'After ...fxe6, which square can your d3-bishop reach with check, now that h7 is empty?'],
      success: '9.Nxe6! fxe6 10.Bg6+ Ke7. Black is a piece up, but the king is stuck in the center. White is much better.'
    },
    {
      title: 'Stay safe',
      prompt: "You're Black. White's knight has jumped to g5. Develop safely, then kick the knight when it is safe to do so.",
      moves: `${NEG5} Bd6 Qe2 h6`,
      start: 15,
      side: 'black',
      hints: ['Develop the f8-bishop to a square that leaves both e7 and f8 empty.', 'With the bishop on d6, the king can run to f8 after Bg6+. Now kick the knight.'],
      success: '8...Bd6! 9.Qe2 h6. The sacrifices no longer work, and the game is level.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'White to move. Black has just played 8...h6. What is the strongest move?',
      moves: `${NEG5} h6`,
      orientation: 'white',
      choices: [
        { text: '9.Nxe6', correct: true, why: 'Right. 9...fxe6 10.Bg6+ Ke7 leaves Black\'s king stuck in the center, and White is much better.' },
        { text: '9.Nh3', why: "A safe retreat, but it gives up the chance. After 9.Nh3 the game is about level." },
        { text: '9.d5', why: 'It opens the long diagonal for Black: 9...Bxd5 wins a pawn, and Black is better.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does 9.Nxe6 work after 8...h6, but not if Black had kept the pawn on h7?',
      choices: [
        { text: 'With the pawn on h6, nothing can take a bishop on g6, so Bg6+ is possible', correct: true, why: 'Right. A pawn on h7 would guard g6. After ...h6, the bishop checks from g6 and Black\'s king must go to e7.' },
        { text: 'The h6-pawn blocks Black\'s f8-bishop', why: 'The f8-bishop is not blocked by the h6-pawn. The problem is the g6-square.' },
        { text: '...h6 left the f7-pawn without a defender', why: "The h-pawn never guarded f7. The problem is that it no longer guards g6." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just played 8.Neg5. What is the safe move?',
      moves: NEG5,
      orientation: 'black',
      choices: [
        { text: '8...Bd6', correct: true, why: 'Right. The bishop develops and leaves e7 and f8 free for the king. After 9.Qe2 h6 the game is level.' },
        { text: '8...h6', why: '9.Nxe6! fxe6 10.Bg6+ Ke7: Black is a piece up, but White is much better.' },
        { text: '8...Be7', why: '9.Nxf7! Kxf7 10.Ng5+ Kg8 11.Nxe6: White has two pawns for the knight and a strong attack. White is clearly better.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 8...Bd6 9.Qe2, why is 9...h6 safe now?',
      moves: `${NEG5} Bd6 Qe2`,
      orientation: 'black',
      choices: [
        { text: 'The f8-square is empty, so after Nxe6 fxe6 Bg6+ the king can go to f8', correct: true, why: 'Right. Without a check that drives the king into the center, the knight sacrifice fails, and Black keeps the extra piece.' },
        { text: 'The bishop on d6 guards g6', why: 'The d6-bishop does not reach g6. The point is the empty f8-square.' },
        { text: "White's g5-knight is pinned", why: 'Nothing pins the g5-knight. ...h6 is safe because the king now has f8 to run to.' }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'After 8...Be7? 9.Nxf7, what does the knight on f7 attack?',
      moves: `${NEG5} Be7 Nxf7`,
      orientation: 'white',
      choices: [
        { text: 'The queen on d8 and the rook on h8', correct: true, why: 'Right. A fork. After 9...Kxf7 10.Ng5+ Kg8 11.Nxe6 White has two pawns and a strong attack for the knight.' },
        { text: 'The king and the queen', why: 'A knight on f7 does not attack e8. It forks the queen on d8 and the rook on h8.' },
        { text: 'The bishop on e7 and the knight on d7', why: 'From f7 a knight hits d8, h8, d6, h6, e5 and g5, not e7 or d7.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 8.Neg5 h6? 9.Nxe6 fxe6 10.Bg6+ Ke7, which statement is true?',
      moves: H6,
      orientation: 'black',
      choices: [
        { text: 'Black is a piece up, but the king is stuck in the center and White is much better', correct: true, why: 'Right. There is no forced win, but Black will struggle to keep the king safe.' },
        { text: 'White has a forced checkmate', why: 'The engine finds no forced win. White is much better, which is bad enough for Black.' },
        { text: 'Black is better because of the extra piece', why: "The extra piece doesn't help much while the king is stuck on e7 and can never castle. White is much better." }
      ]
    }
  ],
  key: { name: 'Fort Knox danger: 8.Neg5', moves: NEG5, orientation: 'black' },
  terms: [
    { term: 'Sacrifice', meaning: 'Giving up material on purpose to get something more valuable, such as an attack on the king.' },
    { term: 'Fork', meaning: 'One piece attacking two enemy pieces at once, like the knight on f7 hitting d8 and h8.' },
    { term: 'Escape square', meaning: 'An empty square the king can step to when it is checked. 8...Bd6 gives Black\'s king e7 and f8.' }
  ]
})
