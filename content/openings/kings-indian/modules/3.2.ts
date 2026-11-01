import { defineModule } from '../../../types'
import { MAIN, MDP } from '../lines'

/** mdp-10f3-f5, then 11.Be3 f4 (mdp-12-g5) */
const LEVER = `${MDP} Be3 f4`
/** 11...fxe4?! releases the tension (engine line) */
const TAKE = `${MDP} Be3 fxe4 fxe4 Rxf1+ Kxf1`
/** Without f3, ...fxe4 is fine (engine-checked illustration) */
const NO_F3 = `${MAIN} Ne1 Nd7 Be3 f5 Nd3 fxe4 Nxe4 Nf5`

export default defineModule({
  id: '3.2',
  title: '10.f3 f5: the first lever',
  minutes: 10,
  level: 2,
  goals: [
    'See what the lever 10...f5 attacks',
    'Understand why White answers with f2–f3',
    'Know when ...fxe4 helps White, and when it helps Black'
  ],
  intro:
    "Black's knight has left f6, and the f-pawn is ready. 10...f5 attacks the front of White's pawn chain. So why doesn't Black just take on e4 and open the f-file? This module answers that question, and shows the one case where taking is right.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The lever and the wall',
      intro: 'Keep your eye on e4 and f5.',
      moves: LEVER,
      start: 18,
      orientation: 'black',
      steps: {
        18: {
          title: 'Black is ready',
          text: 'After 9...Nd7 the f-pawn is free to go to f5. White has one move to get ready.',
          arrows: [['f7', 'f5', 'blue']]
        },
        19: {
          title: 'White prepares',
          text: '10.f3. White supports e4 in advance. If Black ever takes on e4, the f3-pawn takes back, and White still has a pawn in the center.',
          arrows: [['f3', 'e4', 'green']]
        },
        20: {
          title: 'The lever',
          text: "10...f5. The f-pawn attacks e4, the front of White's pawn chain. Each pawn can now take the other. This standoff is called tension.",
          arrows: [['f5', 'e4', 'red'], ['e4', 'f5', 'blue']],
          marks: ['e4', 'f5']
        },
        21: {
          title: 'Black must choose',
          text: "11.Be3. White develops and keeps the tension. Black's two main choices: take on e4, or push past with ...f4.",
          arrows: [['f5', 'f4', 'green'], ['f5', 'e4', 'blue']]
        },
        22: {
          title: 'Push, don\'t take',
          text: '11...f4. Black\'s usual choice, and the engine\'s too. The pawn gains space and hits the bishop. Module 3.3 explains this push.',
          arrows: [['f4', 'e3', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Taking on e4 helps White',
      intro: 'Same position. This time Black releases the tension.',
      moves: TAKE,
      start: 21,
      orientation: 'black',
      steps: {
        21: {
          title: 'The tempting capture',
          text: 'Taking on e4 looks active: it opens the f-file for the rook on f8. But who can use that file?',
          arrows: [['f5', 'e4', 'blue']]
        },
        22: {
          title: 'Black takes',
          text: '11...fxe4. Black releases the tension.',
          ann: '?!'
        },
        23: {
          title: 'The wall pays off',
          text: "12.fxe4. The f3-pawn takes back, so White still has a pawn on e4. The f-file is open now, and the two rooks stare at each other.",
          arrows: [['f1', 'f8', 'blue']],
          marks: ['e4']
        },
        24: {
          title: 'Rooks come off',
          text: '12...Rxf1+. Black trades a pair of rooks on the open file.',
          arrows: [['f8', 'f1', 'red']]
        },
        25: {
          title: 'No storm left',
          text: "13.Kxf1. Black's f-pawn is gone, so there is no ...f4 and no kingside pawn storm. White's center still stands, and the queenside plan is untouched. White's edge is bigger than after 11...f4.",
          marks: ['e4']
        }
      }
    },
    {
      kind: 'text',
      title: 'Tension: who should release it?',
      body:
        "When two pawns can take each other, that's **tension**. Taking is called releasing the tension, and it usually helps the side that gets to take back.\n\nHere, White's f3-pawn is ready to take back on e4. So Black keeps the tension, and later pushes ...f4 to gain space instead. The capture ...fxe4 only makes sense when White has no pawn that can take back."
    },
    {
      kind: 'walkthrough',
      title: 'Without f3, taking is fine',
      intro: 'White plays a different order and forgets the wall. Now ...fxe4 is good.',
      moves: NO_F3,
      start: 19,
      orientation: 'black',
      steps: {
        19: {
          title: 'Bishop first',
          text: '10.Be3. White develops before playing f3. This is a normal move order.',
          arrows: [['f7', 'f5', 'blue']]
        },
        20: {
          title: 'The same lever',
          text: '10...f5. The f-pawn hits e4 again. Here White\'s best answer is 11.f3, which reaches the usual Mar del Plata (Module 3.3).',
          arrows: [['f5', 'e4', 'red']]
        },
        21: {
          title: 'No wall',
          text: '11.Nd3. White skips f3. Now no white pawn can take back on e4.',
          marks: ['e4', 'f2']
        },
        22: {
          title: 'Now take',
          text: '11...fxe4. This time taking is good. White has to take back with a piece, so no white pawn will stand on e4.',
          marks: ['e4']
        },
        23: {
          title: 'A piece takes back',
          text: "12.Nxe4. The knight recaptures. Black's f8-rook now looks down the half-open f-file at f2.",
          arrows: [['f8', 'f2', 'blue']]
        },
        24: {
          title: 'A great square',
          text: '12...Nf5. The e7-knight jumps to f5, in the middle of the board, and hits the e3-bishop. The position is roughly equal. This is why White plays f3 before Black can take.',
          arrows: [['f5', 'e3', 'red']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Another answer to the lever',
      body:
        'White can also meet 10...f5 with 11.g4, hitting the f5-pawn and trying to keep the kingside closed. That is the Benko Attack, and Module 3.8 shows how Black reacts.'
    }
  ],
  takeaway:
    "10...f5 is Black's first lever: it hits e4. White answers f3, so a pawn can always take back on e4. With f3 in, Black keeps the tension and later pushes ...f4. Taking on e4 only helps White.",
  lookAhead: 'Next: 11.Be3 f4 12.Bf2 g5. How Black turns the lever into kingside space.',
  drills: [
    {
      title: 'Lever, then push',
      prompt: "You're Black. Hit White's center with the f-pawn. When White develops, don't take on e4: push past instead.",
      moves: LEVER,
      start: 18,
      side: 'black',
      hints: ['The knight has left f6. Your f-pawn can go two squares.', 'Taking on e4 lets the f3-pawn take back. Push the f-pawn one more square instead.'],
      success: '10...f5 and 11...f4. Black keeps the tension until the push gains space, and hits the bishop on the way.'
    },
    {
      title: 'No wall? Take!',
      prompt: "You're Black. White has skipped f3 and played 11.Nd3. Take on e4, and after White takes back, bring a knight to a great central square.",
      moves: NO_F3,
      start: 20,
      side: 'black',
      hints: ['No white pawn can take back on e4 now.', 'After 12.Nxe4, which knight can jump to f5?'],
      success: "11...fxe4 12.Nxe4 Nf5. White's e4-pawn is gone, the f-file is half-open, and Black's knight is active."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 10...f5 attack?',
      moves: MDP,
      orientation: 'black',
      choices: [
        { text: 'The e4-pawn', correct: true, why: "Right. e4 is the front of White's pawn chain, and ...f5 is the lever against it." },
        { text: 'The d5-pawn', why: 'The f5-pawn attacks e4 and g4, not d5.' },
        { text: "White's king", why: 'Not yet. ...f5 starts the kingside play by hitting e4. The king comes later.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does White play 10.f3 before Black can play ...f5?',
      choices: [
        { text: 'So that a pawn can take back on e4 and keep the center', correct: true, why: 'Yes. After ...fxe4 fxe4, White still has a pawn on e4.' },
        { text: 'To open the f-file for the rook', why: "f3 keeps the f-file closed for White's rook. It is a wall, not an attack." },
        { text: 'To attack the f5-pawn', why: "A pawn on f3 attacks e4 and g4. It's the e4-pawn that faces f5." }
      ]
    },
    {
      type: 'move',
      prompt: "Black to move. What is Black's best move?",
      moves: `${MDP} Be3`,
      orientation: 'black',
      choices: [
        { text: '11...f4', correct: true, why: 'Right. The pawn gains space and hits the e3-bishop. It keeps the kingside pawn storm alive.' },
        { text: '11...fxe4', why: 'It releases the tension. 12.fxe4 keeps a white pawn on e4, and Black has no kingside pawn lever left.' },
        { text: '11...g5', why: 'The g5-pawn is unprotected, and 12.Bxg5 simply wins it. Push the f-pawn first.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'When is ...fxe4 a good idea for Black?',
      choices: [
        { text: 'When White has not played f3, so a piece must take back', correct: true, why: "Right. Then White's center pawn is gone, and Black's knight can use f5." },
        { text: "Always: it opens the f-file for Black's rook", why: "With f3 in, fxe4 opens the file for both sides and White's center stays. Black's attack loses its pawn lever." },
        { text: 'Never: the f-pawn must always go to f4', why: 'Usually, yes. But if White skips f3, taking on e4 is good.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: "What does 'tension' between two pawns mean?",
      choices: [
        { text: 'Two pawns attack each other, and neither side has taken yet', correct: true, why: 'Yes. Like e4 and f5 after 10...f5. Whoever takes releases the tension.' },
        { text: 'A pawn is pinned to the king', why: "That's a pin. Tension is about two pawns that can capture each other." },
        { text: 'Two pawns block each other on the same file', why: "Those are blocked pawns, like d5 and d6. They can't take each other at all." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 11...fxe4 12.fxe4, why is Black worse off than after 11...f4?',
      moves: `${MDP} Be3 fxe4 fxe4`,
      orientation: 'black',
      choices: [
        {
          text: "Black's f-pawn is gone, so there is no pawn storm, while White's center and queenside plan stay intact",
          correct: true,
          why: "Right. Black gave up the lever that drives the attack, and White's e4-pawn still stands."
        },
        { text: 'Black has lost a pawn', why: 'Material is level: a pawn for a pawn. The problem is the structure, not the count.' },
        { text: "Black's king is now exposed on the f-file", why: 'Both kings sit next to the open file, and the rooks usually come off. That is not the main issue.' }
      ]
    }
  ],
  key: { name: 'Mar del Plata: 10.f3 f5', moves: MDP, orientation: 'black' },
  terms: [
    { term: 'Tension', meaning: 'Two pawns (or pieces) that can take each other, with neither side having taken yet.' },
    { term: 'Releasing the tension', meaning: 'Making the capture. It usually helps the side that gets to take back.' },
    { term: 'Half-open file', meaning: 'A file with no pawn of your own on it, but still an enemy pawn. Good for your rooks.' }
  ]
})
