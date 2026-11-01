import { defineModule } from '../../../types'
import { ENGLISH } from '../lines'

/** najdorf-be3-e5: both sides castled */
const SETUP = `${ENGLISH} e5 Nb3 Be6 f3 Be7 Qd2 O-O O-O-O Nbd7`
/** najdorf-be3-e5-race: 11.g4 b5 12.g5 b4 13.Ne2 Ne8 */
const RACE = `${SETUP} g4 b5 g5 b4 Ne2 Ne8`
/** najdorf-be3-e6: 6...e6 7.f3 b5 8.Qd2 Nbd7 9.g4 h6 10.O-O-O Bb7 11.h4 b4 12.Na4 Qa5 13.b3 */
const E6 = `${ENGLISH} e6 f3 b5 Qd2 Nbd7 g4 h6 O-O-O Bb7 h4 b4 Na4 Qa5 b3`

export default defineModule({
  id: '2.4',
  title: 'The race: g4–g5 against ...b5–b4',
  minutes: 11,
  level: 2,
  goals: [
    'Understand why opposite-side castling turns the game into a race',
    'See how each pawn push gains time by hitting a piece',
    'Follow the race in both the ...e5 and the ...e6 versions'
  ],
  intro:
    "In the English Attack the kings castle on opposite sides. Now each player pushes pawns at the other king, and nobody has time to waste. This module shows how the race works, move by move, in both Najdorf structures.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The race with ...e5',
      intro: 'Count the tempi. Each pawn move hits a knight, and the knight has to move.',
      moves: RACE,
      start: 20,
      orientation: 'white',
      steps: {
        20: {
          title: 'The start line',
          text: "10...Nbd7. White's king is on c1, Black's on g8. White's pawns will run at the kingside, Black's at the queenside.",
          arrows: [['g2', 'g5', 'blue'], ['b7', 'b4', 'blue']]
        },
        21: {
          title: 'White goes first',
          text: '11.g4. The g-pawn heads for g5, where it will kick the f6-knight. That knight guards d5 and helps defend Black\'s king.',
          arrows: [['g4', 'g5', 'blue']],
          marks: ['f6']
        },
        22: {
          title: 'Black answers at once',
          text: "11...b5. Black doesn't stop to defend. The b-pawn heads for b4, where it will kick the c3-knight.",
          arrows: [['b5', 'b4', 'blue']],
          marks: ['c3']
        },
        23: {
          title: 'The knight is hit',
          text: '12.g5. The pawn attacks the f6-knight. White gains a tempo: Black would normally have to move the knight.',
          arrows: [['g5', 'f6', 'red']]
        },
        24: {
          title: 'Hit back',
          text: "12...b4. Black ignores the threat and attacks White's c3-knight. Now both knights are attacked. If White takes on f6, Black takes on c3.",
          arrows: [['b4', 'c3', 'red'], ['g5', 'f6', 'red']]
        },
        25: {
          title: 'White saves the knight',
          text: '13.Ne2. The knight steps back. It no longer guards d5 or e4, but the f3-pawn still holds e4.',
          arrows: [['f3', 'e4', 'green']]
        },
        26: {
          title: 'Black saves the knight',
          text: "13...Ne8. Black's knight steps back too. From e8 it guards d6 and stays out of the pawns' way. The engine gives White a small edge, but both kings are now in danger.",
          arrows: [['e8', 'd6', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Tempo is everything',
      body:
        "A **tempo** is one move of time. In a race, a pawn push that attacks a piece is worth a lot: your opponent must spend a move saving the piece, and your pawn has moved forward for free.\n\nThat is why both sides push pawns at the enemy knights: g5 hits the f6-knight, ...b4 hits the c3-knight. It is also why slow defensive moves are dangerous. If you stop to tidy up, the other side's pawns arrive first. Look for the move that keeps your own attack going, unless your opponent has a real threat."
    },
    {
      kind: 'walkthrough',
      title: 'The race with ...e6',
      intro: 'Against ...e6 the plans are the same, but Black often keeps the king in the center for a while.',
      moves: E6,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'The small center',
          text: '6...e6. Black chooses the ...e6 structure (Module 2.2).',
          arrows: [['e6', 'd5', 'green']]
        },
        13: {
          title: 'The usual f3',
          text: '7.f3. White supports e4 and prepares g4.',
          arrows: [['f3', 'e4', 'green']]
        },
        14: {
          title: 'Black starts early',
          text: "7...b5. Black doesn't wait for White to castle. The a6-pawn backs up b5, and the pawn will go on to b4.",
          arrows: [['a6', 'b5', 'green'], ['b5', 'b4', 'blue']]
        },
        15: {
          title: 'Queen to d2',
          text: '8.Qd2. White prepares long castling and guards the e3-bishop.',
          arrows: [['d2', 'e3', 'green']]
        },
        16: {
          title: 'The knight develops',
          text: '8...Nbd7. The knight develops toward the queenside, where it can later jump to c5 or b6. It also guards the f6-knight.',
          arrows: [['d7', 'c5', 'blue']]
        },
        17: {
          title: 'The g-pawn moves',
          text: '9.g4. White threatens g4–g5, kicking the f6-knight away from the center.',
          arrows: [['g4', 'g5', 'blue']],
          marks: ['f6']
        },
        18: {
          title: 'A speed bump',
          text: '9...h6. Now g4–g5 can be met by ...hxg5. White needs one more move to back the pawn up before pushing it.',
          arrows: [['h6', 'g5', 'red']]
        },
        19: {
          title: 'White castles long',
          text: '10.O-O-O. White\'s king goes to the queenside. Black\'s king is still on e8 for now.',
          marks: ['c1', 'e8']
        },
        20: {
          title: 'Bishop on the long diagonal',
          text: '10...Bb7. The bishop aims at e4. Together with the f6-knight it puts pressure on White\'s center.',
          arrows: [['b7', 'e4', 'red'], ['f6', 'e4', 'red']]
        },
        21: {
          title: 'Backing up the g-pawn',
          text: '11.h4. Now g5 is supported by the h-pawn. If Black takes ...hxg5 after g5, White takes back hxg5 and the h-file opens for the h1-rook.',
          arrows: [['h4', 'g5', 'green']]
        },
        22: {
          title: 'The c3-knight is hit',
          text: '11...b4. Black gains a tempo: the knight must move.',
          arrows: [['b4', 'c3', 'red']]
        },
        23: {
          title: 'Off to the edge',
          text: '12.Na4. The knight goes to the edge. From a4 it no longer guards e4.',
          marks: ['a4', 'e4']
        },
        24: {
          title: 'The queen joins in',
          text: '12...Qa5. The queen attacks the a4-knight, which has no defender. Along the fifth rank, the queen also watches g5.',
          arrows: [['a5', 'a4', 'red'], ['a5', 'g5', 'blue']]
        },
        25: {
          title: 'A defender',
          text: "13.b3. The pawn defends the knight. But it also loosens the pawns in front of White's king. The engine prefers White here. Both kings are exposed, so one slow move by either side can turn the game.",
          arrows: [['b3', 'a4', 'green']]
        }
      }
    },
    {
      kind: 'warning',
      title: "Don't memorize the race",
      body:
        'These lines are razor-sharp, and strong players know them many moves deep. As a beginner, learn the plans: White pushes g4–g5 (with h4 to help), Black pushes ...b5–b4 (with ...Bb7 and ...Qa5 or ...Qc7 to help). Each pawn should hit a piece if it can.'
    }
  ],
  takeaway:
    'With the kings on opposite sides, both players storm with pawns. g4–g5 hits the f6-knight and ...b5–b4 hits the c3-knight. Every tempo counts, so keep your own attack moving.',
  lookAhead:
    "Black has a sneaky way to avoid the English Attack set-up: hit the e3-bishop before White plays f3. Module 2.5 shows 6...Ng4.",
  drills: [
    {
      title: 'Join the race',
      prompt: "You're Black. White has just played 11.g4. Start your own pawn storm, hit White's knight, then save yours.",
      moves: RACE,
      start: 21,
      side: 'black',
      hints: [
        "Push your b-pawn toward White's king. Don't stop to defend.",
        'After 12.g5, push again and hit the c3-knight. After 13.Ne2, step your f6-knight back to e8.'
      ],
      success: '11...b5, 12...b4 and 13...Ne8. Both sides are racing, and every move counts.'
    },
    {
      title: 'Prepare g5 the right way',
      prompt: "You're White in the ...e6 line. Push the g-pawn, castle long, and when Black plays ...h6, back the pawn up.",
      moves: `${ENGLISH} e6 f3 b5 Qd2 Nbd7 g4 h6 O-O-O Bb7 h4`,
      start: 16,
      side: 'white',
      hints: ['Start with the g-pawn. Then get your king to the queenside.', 'Against ...h6, the h-pawn makes g5 possible.'],
      success: '9.g4, 10.O-O-O and 11.h4. Now g5 is supported, and if the h-file opens your h1-rook is ready.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why do both sides attack with pawns in the English Attack?',
      choices: [
        { text: 'The kings are on opposite sides, so pushing pawns does not expose your own king', correct: true, why: "Right. White's g- and h-pawns are far from White's king on c1, and Black's b-pawn is far from Black's king on g8." },
        { text: 'Pawns are worth less, so it is fine to lose them', why: 'Nobody wants to lose pawns for nothing. The pawns attack because they can hit pieces and open lines.' },
        { text: 'The pieces cannot move until the pawns do', why: 'The pieces are already developed. The pawns go forward to open lines near the enemy king.' }
      ]
    },
    {
      type: 'concept',
      prompt: "What does White's g5-pawn attack here?",
      moves: `${SETUP} g4 b5 g5`,
      orientation: 'white',
      choices: [
        { text: 'The f6-knight', correct: true, why: 'Yes. A pawn on g5 attacks f6 and h6. The knight on f6 has to move or be traded.' },
        { text: 'The h7-pawn', why: 'A pawn on g5 attacks the squares diagonally in front of it: f6 and h6, not h7.' },
        { text: 'The e7-bishop', why: 'The e7-bishop is not on a square the g5-pawn attacks. The target is the knight on f6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the ...e6 line, why does Black play 9...h6?',
      moves: `${ENGLISH} e6 f3 b5 Qd2 Nbd7 g4 h6`,
      orientation: 'black',
      choices: [
        { text: 'So that g4–g5 can be met by ...hxg5', correct: true, why: 'Right. White now needs h4 first to back up g5. That costs White a tempo.' },
        { text: 'To give Black\'s castled king an escape square', why: "Black's king is still on e8. ...h6 is about slowing down g4–g5." },
        { text: 'To prepare ...g5 and attack White\'s king', why: "White's king is going to the queenside. ...h6 is a defensive speed bump on the kingside." }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the ...e5 race, what does 12...b4 attack?',
      moves: `${SETUP} g4 b5 g5 b4`,
      orientation: 'black',
      choices: [
        { text: 'The c3-knight', correct: true, why: 'Yes. A pawn on b4 attacks a3 and c3. The knight has to move, which costs White a tempo.' },
        { text: 'The b2-pawn', why: 'Pawns attack diagonally. A pawn on b4 hits c3 and a3, not b2 straight ahead.' },
        { text: "White's king", why: "Not yet. The king is on c1. The pawn's job is to chase away the knight in front of it." }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move. White has just played 11.g4. What fits the race best?',
      moves: `${SETUP} g4`,
      orientation: 'black',
      choices: [
        { text: '11...b5', correct: true, why: 'Right. Black starts the queenside storm at once. ...b4 will hit the c3-knight.' },
        { text: '11...Kh8', why: "A slow king move. It does nothing for Black's attack, and White's pawns keep coming." },
        { text: '11...Re8', why: "The rook move doesn't help the race. In a pawn race, Black should push the b-pawn." }
      ]
    },
    {
      type: 'plan',
      prompt: "In the ...e6 line, why does White play 11.h4?",
      moves: `${ENGLISH} e6 f3 b5 Qd2 Nbd7 g4 h6 O-O-O Bb7 h4`,
      orientation: 'white',
      choices: [
        { text: 'To back up g4–g5 against ...h6', correct: true, why: 'Yes. After g5 hxg5 hxg5, the h-file opens for the h1-rook.' },
        { text: 'To attack the b4-square', why: 'The h-pawn is on the other side of the board. It supports g5.' },
        { text: 'To give White\'s king an escape square', why: "White's king is on c1, far from the h-pawn. h4 is part of the kingside attack." }
      ]
    }
  ],
  key: { name: 'English Attack race: 12.g5 b4', moves: `${SETUP} g4 b5 g5 b4`, orientation: 'white' },
  terms: [
    { term: 'Tempo', meaning: 'One move of time. Gaining a tempo means making a useful move that also forces your opponent to react.' },
    { term: 'Pawn storm', meaning: "Pushing several pawns at the enemy king to open lines for your pieces." },
    { term: 'Race', meaning: 'A position where both sides attack the other king, and the faster attack usually wins.' }
  ]
})
