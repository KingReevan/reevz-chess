import { defineModule } from '../../../types'
import { BERLIN } from '../../../lines'

/** anti-berlin-anand-carlsen-2013 */
const CARLSEN = `${BERLIN} d3 Bc5 c3 O-O O-O Re8 Re1 a6 Ba4 b5 Bb3 d6 Bg5 Be6`
/** anti-berlin-4d3-d5 */
const D5 = `${BERLIN} d3 Bc5 c3 O-O O-O d5 Nbd2`
/** anti-berlin-5bxc6 */
const BXC6 = `${BERLIN} d3 Bc5 Bxc6 dxc6 Nbd2`

export default defineModule({
  id: '7.8',
  title: 'Anti-Berlin: 4.d3',
  minutes: 12,
  level: 3,
  goals: [
    'Understand why 4.d3 leads to slow, maneuvering play',
    'Use the ...Re8, ...a6, ...b5 plan against the Spanish bishop',
    'Know the central option 6...d5 and the 5.Bxc6 idea'
  ],
  intro:
    "Many White players don't want to face the Berlin endgame. Their answer is 4.d3: protect e4 and play a slow game. Today it is the most common way to avoid the Berlin. How should Black set up, and what is White hoping for?",
  sections: [
    {
      kind: 'text',
      title: 'Why 4.d3 changes everything',
      body:
        "With e4 protected, ...Nxe4 is no longer possible, so there is no forcing line and no early queen trade. The game becomes slow and quiet, a bit like the Italian Game.\n\n**White's ideas:** c3, O-O, Re1, h3, and the knight trip Nbd2–f1–g3. White often keeps the bishop with a4 or Ba4–c2. Another idea is Bxc6 followed by Nbd2–c4, aiming at Black's doubled pawns.\n\n**Black's ideas:** ...Bc5 and ...O-O, then ...d6 and ...Re8, or the central strike ...d5. Black also questions the bishop with ...a6 and ...b5."
    },
    {
      kind: 'walkthrough',
      title: 'A world championship plan',
      intro: "You're Black. This is the opening of Anand–Carlsen, World Championship 2013, game 6.",
      moves: CARLSEN,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'Both sides castled',
          text: '6.O-O. Both sides have developed calmly. Now Black picks a plan.',
          marks: ['g1', 'g8']
        },
        12: {
          title: 'Rook to e8',
          text: '6...Re8. The rook backs up the e5-pawn, so Black can later play ...d6 or ...d5 with e5 well protected.',
          arrows: [['e8', 'e5', 'green']]
        },
        13: {
          title: 'White mirrors',
          text: '7.Re1. White does the same: the rook supports e4.',
          arrows: [['e1', 'e4', 'green']]
        },
        14: {
          title: 'Question the bishop',
          text: '7...a6. Black asks the bishop: take on c6, or retreat?',
          arrows: [['a6', 'b5', 'red']]
        },
        15: {
          title: 'White keeps it',
          text: '8.Ba4. The bishop retreats and keeps its pressure on c6.',
          arrows: [['a4', 'c6', 'yellow']]
        },
        16: {
          title: 'Chase it again',
          text: '8...b5. Black chases the bishop once more and gains space on the queenside.',
          arrows: [['b5', 'a4', 'red']]
        },
        17: {
          title: 'The bishop finds a home',
          text: '9.Bb3. On b3 the bishop aims at f7, near Black\'s king.',
          arrows: [['b3', 'f7', 'yellow']]
        },
        18: {
          title: 'Support and open',
          text: '9...d6. The pawn supports e5 and opens a diagonal for the c8-bishop.',
          arrows: [['d6', 'e5', 'green'], ['c8', 'e6', 'blue']]
        },
        19: {
          title: 'A pin',
          text: '10.Bg5. The bishop pins the f6-knight to Black\'s queen.',
          arrows: [['g5', 'd8', 'red']],
          marks: ['f6']
        },
        20: {
          title: "Challenge White's best bishop",
          text: "10...Be6. Black offers to trade the light-squared bishops, taking the sting out of the b3-bishop. Carlsen went on to win a long rook endgame from here.",
          arrows: [['e6', 'b3', 'yellow']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The central strike: 6...d5',
      intro: 'Instead of ...Re8 and ...d6, Black can hit the center at once.',
      moves: D5,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'White prepares d4',
          text: '5.c3. White plans d4 one day, to hit the c5-bishop and claim the center.',
          arrows: [['c3', 'd4', 'blue']]
        },
        10: {
          title: 'King safe',
          text: '5...O-O. Black castles first.',
          marks: ['g8']
        },
        11: {
          title: 'White castles',
          text: '6.O-O. Both kings are safe.',
          marks: ['g1']
        },
        12: {
          title: 'Strike in the center',
          text: '6...d5. Black hits e4 at once and claims central space. Now Black has an active, easy game.',
          arrows: [['d5', 'e4', 'red']]
        },
        13: {
          title: 'Support e4',
          text: '7.Nbd2. White adds a defender to e4 and keeps the tension. Later the knight may travel to f1 and g3.',
          arrows: [['d2', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'White gives up the bishop: 5.Bxc6',
      intro: 'White trades on c6 and aims a knight at Black\'s doubled pawns.',
      moves: BXC6,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The usual start',
          text: '4...Bc5. Black develops the bishop actively, as before.',
          arrows: [['c5', 'f2', 'blue']]
        },
        9: {
          title: 'Bishop for knight',
          text: '5.Bxc6. White gives up the bishop at once to double Black\'s c-pawns.',
          marks: ['c6']
        },
        10: {
          title: 'Take toward the center',
          text: "5...dxc6. Now e5 has lost its knight defender, but 6.Nxe5? runs into 6...Qd4!, hitting e5 and f2 (Module 7.9).",
          arrows: [['d8', 'd4', 'blue']],
          marks: ['e5', 'f2']
        },
        11: {
          title: 'The calm way',
          text: '6.Nbd2. White develops and plans Nc4, where the knight eyes e5 and Black\'s queenside. Black has the bishop pair and a comfortable game.',
          arrows: [['d2', 'c4', 'blue']]
        }
      }
    },
    {
      kind: 'history',
      title: 'A weapon for patient players',
      body:
        'In the 2013 World Championship in Chennai, game 6, Carlsen was on the black side of 4.d3 and beat Anand in a long rook endgame. Three years later, in game 10 of the 2016 World Championship in New York, Carlsen used 4.d3 as White against Karjakin and won a long game to level the match.'
    }
  ],
  takeaway:
    '4.d3 protects e4 and leads to slow maneuvering. Black develops with ...Bc5 and ...O-O, then chooses ...Re8, ...a6, ...b5 and ...d6, or the central strike ...d5. Against 5.Bxc6, remember the ...Qd4 trick if White grabs e5.',
  lookAhead:
    'Last stop in the Berlin: the traps. The Fishing Pole, the Mortimer, and the ...Qd4 mate.',
  drills: [
    {
      title: "Carlsen's setup from memory",
      prompt: "You're Black. White plays the Anti-Berlin with 4.d3. Develop, castle, and follow Carlsen's plan up to 10...Be6.",
      moves: CARLSEN,
      start: 6,
      side: 'black',
      hints: [
        'Bishop to c5, castle, then put a rook behind the e5-pawn.',
        'Chase the bishop with the a- and b-pawns, support e5 with the d-pawn, and answer Bg5 by challenging the b3-bishop.'
      ],
      success: '4...Bc5, 5...O-O, 6...Re8, 7...a6, 8...b5, 9...d6 and 10...Be6. A world championship setup.'
    },
    {
      title: 'The central strike',
      prompt: "You're Black. Develop the bishop, castle, and then hit the center with your d-pawn.",
      moves: `${BERLIN} d3 Bc5 c3 O-O O-O d5`,
      start: 6,
      side: 'black',
      hints: ['Bishop first, then castle.', 'Push the d-pawn two squares to attack e4.'],
      success: '4...Bc5, 5...O-O and 6...d5. Black claims the center and gets an easy game.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 4.d3 do?',
      moves: `${BERLIN} d3`,
      orientation: 'black',
      choices: [
        { text: 'It protects e4, so there is no ...Nxe4 and no early queen trade', correct: true, why: 'Right. White avoids the Berlin endgame and plays a slow game.' },
        { text: "It attacks Black's f6-knight", why: 'A pawn on d3 attacks c4 and e4 squares, not f6. Its job is defense.' },
        { text: 'It prepares an immediate attack on the king', why: '4.d3 is quiet. White builds slowly with c3, Re1 and Nbd2.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Anti-Berlin, how does Black usually question the b5-bishop?',
      choices: [
        { text: 'With ...a6 and ...b5', correct: true, why: 'Yes. The pawns chase the bishop and gain space on the queenside.' },
        { text: 'With ...Qd6', why: 'A queen on d6 does not attack b5 at all, and an early queen move just loses time.' },
        { text: 'With ...Bd7', why: 'That defends c6 but does not chase the bishop. The pawn moves ...a6 and ...b5 do that.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Black to move. What is the idea of 10...Be6 here?',
      moves: CARLSEN.split(' ').slice(0, 19).join(' '),
      orientation: 'black',
      choices: [
        { text: 'Challenge the b3-bishop, which aims at f7', correct: true, why: 'Right. Trading it takes the sting out of White\'s best piece.' },
        { text: 'Attack the g5-bishop', why: 'A bishop on e6 does not touch g5. Its target is the b3-bishop.' },
        { text: 'Protect the e5-pawn', why: 'e5 is already guarded by the d6-pawn, the rook and the c6-knight.' }
      ]
    },
    {
      type: 'name',
      prompt: 'White has answered the Berlin with 4.d3. What is this called?',
      moves: `${BERLIN} d3`,
      orientation: 'black',
      choices: [
        { text: 'The Anti-Berlin', correct: true, why: 'Right. 4.d3 is the most common way to avoid the Berlin endgame.' },
        { text: 'The Berlin endgame', why: 'The endgame comes from 4.O-O Nxe4 5.d4. With 4.d3 there is no ...Nxe4.' },
        { text: 'The Rio de Janeiro', why: 'The Rio is 4.O-O Nxe4 5.d4 Be7.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why is the play after 4.d3 slower than after 4.O-O?',
      choices: [
        { text: 'e4 is protected, so there is no forcing ...Nxe4 line and both sides maneuver', correct: true, why: 'Exactly. Without ...Nxe4 there are no early forcing trades.' },
        { text: 'White cannot castle after 4.d3', why: 'White castles a couple of moves later, as in every line here.' },
        { text: 'Black must play ...d6 at once', why: 'Black has several setups, including ...Bc5, ...O-O and ...d5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Anand–Carlsen, World Championship 2013, game 6, began with the Anti-Berlin. What happened?',
      choices: [
        { text: 'Carlsen, with Black, won a long rook endgame', correct: true, why: 'Right. A slow 4.d3 opening turned into a long technical win for Black.' },
        { text: 'A quick draw by repetition', why: "That describes the l'Hermet line (Nepomniachtchi–Nakamura, 2022), not this game." },
        { text: 'Anand won with a kingside attack', why: 'Carlsen won this game, in a long rook endgame.' }
      ]
    }
  ],
  key: { name: 'Anti-Berlin: Anand–Carlsen 2013, 10...Be6', moves: CARLSEN, orientation: 'black' },
  terms: [
    { term: 'Maneuvering', meaning: 'Moving pieces slowly to better squares when there is no immediate fight.' },
    { term: 'Tension', meaning: 'Pawns or pieces attacking each other without anyone capturing yet. Keeping tension keeps options open.' },
    { term: 'Light-squared bishop', meaning: 'The bishop that moves on light squares. For White it starts on f1, for Black on c8.' }
  ]
})
