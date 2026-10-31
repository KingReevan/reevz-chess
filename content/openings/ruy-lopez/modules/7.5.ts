import { defineModule } from '../../../types'
import { BERLIN } from '../../../lines'

/** berlin-endgame */
const ENDGAME = `${BERLIN} O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+ Kxd8`
/** berlin-endgame-h3-ke8 */
const KE8 = `${ENDGAME} h3 Ke8 Nc3 h5 Bf4 Be7`
/** 9.Nc3 Ke8 10.h3 h5: the same position by another move order */
const TRANS = `${ENDGAME} Nc3 Ke8 h3 h5`

export default defineModule({
  id: '7.5',
  title: 'Plans in the Berlin endgame',
  minutes: 11,
  level: 3,
  goals: [
    "Describe White's plan: develop, push g4 and f4-f5, find a square for a knight",
    "Set up Black's main defense: ...Ke8 and ...h5",
    'Recognise the same setup after a different move order'
  ],
  intro:
    "The queens are off. Now what? Both sides have a clear plan, and knowing it is worth more than memorising moves. This module follows the most popular modern line, 9.h3 Ke8 10.Nc3 h5, and explains every idea in plain words.",
  sections: [
    {
      kind: 'text',
      title: "White's plan in plain words",
      body:
        "**1. Develop.** Nc3, a bishop to f4 or g5, rooks to d1 and e1.\n\n**2. Use the majority.** Push g2-g4 to chase the f5-knight away from its best square, then f2-f4-f5, with the e5-pawn cramping Black. Sometimes White breaks with e5-e6.\n\n**3. Find a great square for a knight.** The e4-square, right in front of the majority, is a favourite."
    },
    {
      kind: 'walkthrough',
      title: 'The modern main line: 9.h3 Ke8 10.Nc3 h5',
      intro: "You're Black. Watch how each move answers one of White's plans.",
      moves: KE8,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'Plans begin',
          text: '8...Kxd8. The Berlin endgame. White wants to push the kingside pawns; Black wants a safe king and active bishops.',
          marks: ['d8']
        },
        17: {
          title: 'Preparing g4',
          text: '9.h3. A useful little move. It keeps the c8-bishop off g4 and prepares g2-g4 to chase the knight from f5.',
          arrows: [['g2', 'g4', 'blue']],
          marks: ['f5']
        },
        18: {
          title: 'The king steps aside',
          text: '9...Ke8. The king leaves the d-file, so a rook on d1 will not come with check. On e8 it also stays near the kingside, where White\'s majority is.',
          arrows: [['d8', 'e8', 'green']]
        },
        19: {
          title: 'The knight comes out',
          text: '10.Nc3. White develops. The knight eyes e4, a fine square in front of the majority.',
          arrows: [['c3', 'e4', 'blue']]
        },
        20: {
          title: 'Stopping g4',
          text: "10...h5. Now g2-g4 would cost White: after ...hxg4 hxg4 the h-file opens for Black's rook. The f5-knight keeps its post.",
          arrows: [['h5', 'g4', 'red'], ['h8', 'h1', 'blue']]
        },
        21: {
          title: 'Guarding the wedge',
          text: '11.Bf4. The bishop develops and protects the e5-pawn, the front of White\'s majority.',
          arrows: [['f4', 'e5', 'green']]
        },
        22: {
          title: 'Black develops',
          text: '11...Be7. Black brings out the dark-squared bishop and gets ready to connect the rooks. Typical next steps are ...Be6 and ...Rd8.',
          arrows: [['c8', 'e6', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: "Black's plan in plain words",
      body:
        "**1. A safe home for the king.** Either e8, with ...h5 against g2-g4, or c8, with ...Bd7, ...Kc8, ...b6 and ...c5 (Module 7.4).\n\n**2. Hold the light squares.** Keep the knight on f5 and use the bishops on light squares like e6 and f5, right in front of White's pawns. That blocks the majority.\n\n**3. Later, open lines for the bishops.** Breaks like ...c5-c4 or ...g5 give the bishops more room."
    },
    {
      kind: 'walkthrough',
      title: 'Same setup, other order',
      intro: 'White can start with 9.Nc3 instead. Black answers with the same ideas.',
      moves: TRANS,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'The endgame again',
          text: '8...Kxd8. Same position as before.',
          marks: ['d8']
        },
        17: {
          title: 'Knight first',
          text: '9.Nc3. This time White develops before playing h3.',
          arrows: [['c3', 'e4', 'blue']]
        },
        18: {
          title: 'The king to e8',
          text: '9...Ke8. Black follows the same plan: off the d-file and toward the kingside.',
          arrows: [['d8', 'e8', 'green']]
        },
        19: {
          title: 'Now h3',
          text: '10.h3. White prepares g4, just as before.',
          arrows: [['g2', 'g4', 'blue']]
        },
        20: {
          title: 'Now ...h5',
          text: '10...h5. And Black stops it. This is exactly the position from the first walkthrough after move 10. The order changed; the setup did not.',
          arrows: [['h5', 'g4', 'red']]
        }
      }
    },
    {
      kind: 'history',
      title: "Don't over-press",
      body:
        "The Berlin endgame is solid, but it is not a draw that plays itself. In game 11 of the 2014 World Championship in Sochi, Anand defended the Berlin against Carlsen. He tried an over-ambitious exchange sacrifice, 27...Rb4, which backfired. Carlsen won and kept his title."
    }
  ],
  takeaway:
    "White develops, pushes g4 and f4-f5 with the e5-pawn as a wedge, and looks for a knight on e4. Black tucks the king on e8 with ...h5 to stop g4 (or on c8), holds the light squares, and keeps the bishops active.",
  lookAhead:
    'Next: what if White avoids the endgame with 5.Re1, or Black keeps the queens on with the Rio de Janeiro 5...Be7?',
  drills: [
    {
      title: 'The modern setup',
      prompt: "You're Black, in the Berlin endgame. Answer 9.h3 by tucking your king away, stop g2-g4, and develop your bishop.",
      moves: KE8,
      start: 16,
      side: 'black',
      hints: [
        'Step the king off the d-file, toward the kingside.',
        'After 10.Nc3, push a rook pawn to stop g2-g4. After 11.Bf4, develop the f8-bishop.'
      ],
      success: '9...Ke8, 10...h5 and 11...Be7. The knight stays on f5 and your king is safe.'
    },
    {
      title: 'Spot the transposition',
      prompt: "You're Black. White starts with 9.Nc3 this time. Reach the same setup.",
      moves: TRANS,
      start: 16,
      side: 'black',
      hints: ['The king goes to the same square as before.', 'When White plays h3, stop g2-g4 with your h-pawn.'],
      success: "9...Ke8 and 10...h5. Same position, different order. Plans matter more than move orders."
    }
  ],
  quiz: [
    {
      type: 'plan',
      prompt: "What is White's main pawn plan in the Berlin endgame?",
      choices: [
        { text: 'Push g2-g4 to kick the f5-knight, then f2-f4-f5', correct: true, why: 'Right. The kingside majority advances, with the e5-pawn cramping Black.' },
        { text: 'Push the queenside pawns', why: "That's Black's majority side. White's healthy majority is on the kingside." },
        { text: 'Trade the e5-pawn as soon as possible', why: "The e5-pawn is White's wedge. White keeps it and builds around it." }
      ]
    },
    {
      type: 'move',
      prompt: "Black to move. Which move stops White's g2-g4 idea?",
      moves: `${ENDGAME} h3 Ke8 Nc3`,
      orientation: 'black',
      choices: [
        { text: '10...h5', correct: true, why: 'Yes. If g2-g4, then ...hxg4 hxg4 opens the h-file for your rook.' },
        { text: '10...Be7', why: 'A good developing move, but it does nothing about g4. After 11.g4 the knight has to leave f5.' },
        { text: '10...a5', why: 'A queenside move. It may be useful, but it does not stop g2-g4.' }
      ]
    },
    {
      type: 'concept',
      prompt: "Why does Black's king often go back to e8?",
      choices: [
        { text: 'It steps off the d-file and stays near the kingside', correct: true, why: "Right. A rook on d1 no longer gives check, and the king helps against White's majority." },
        { text: 'So that Black can castle later', why: 'Castling is gone for good once the king has moved.' },
        { text: 'To attack the e5-pawn', why: 'From e8 the king does not attack e5. Its job is defense.' }
      ]
    },
    {
      type: 'concept',
      prompt: "In White's plan, what is the e4-square good for?",
      moves: KE8,
      orientation: 'black',
      choices: [
        { text: 'A strong square for a white knight, in front of the majority', correct: true, why: 'Exactly. From e4 a knight eyes d6, f6 and g5.' },
        { text: 'A square for the white king to attack from', why: 'The king may come forward later, but e4 is the classic knight square.' },
        { text: 'A place for the e-pawn to retreat to', why: 'Pawns never move backward.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'What do 9.h3 Ke8 10.Nc3 h5 and 9.Nc3 Ke8 10.h3 h5 have in common?',
      choices: [
        { text: 'They reach exactly the same position', correct: true, why: "Right. That's a transposition: a different order of moves leading to the same position." },
        { text: 'One of them is illegal', why: 'Both are legal and both are played.' },
        { text: 'Only the first one stops g2-g4', why: 'Both end with ...h5, which stops g2-g4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does Carlsen–Anand, World Championship 2014 game 11, teach Black in the Berlin?',
      choices: [
        { text: 'Even in the solid Berlin, over-pressing can lose', correct: true, why: "Yes. Anand's over-ambitious exchange sacrifice backfired, and Carlsen won." },
        { text: 'The Berlin endgame is a forced draw', why: 'No. That game was a win for White. Black still has to play accurately.' },
        { text: 'Black should always avoid the Berlin', why: "The Berlin remains one of the most trusted defenses. The lesson is about Black's choices later in the game." }
      ]
    }
  ],
  key: { name: 'Berlin endgame: 9.h3 Ke8 10.Nc3 h5', moves: KE8.split(' ').slice(0, 20).join(' '), orientation: 'black' },
  terms: [
    { term: 'Transposition', meaning: 'Reaching the same position by a different order of moves.' },
    { term: 'Blockade', meaning: 'Placing pieces directly in front of enemy pawns so they cannot advance.' },
    { term: 'Pawn break', meaning: 'A pawn move that attacks enemy pawns to open lines.' }
  ]
})
