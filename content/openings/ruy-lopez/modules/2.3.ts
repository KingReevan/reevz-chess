import { defineModule } from '../../../types'
import { RUY } from '../../../lines'

const KEEP = `${RUY} a6 Ba4 Nf6 O-O Be7 Re1`
const NORWEGIAN = `${RUY} a6 Ba4 b5 Bb3 Na5 O-O d6 d4 Nxb3 axb3`

export default defineModule({
  id: '2.3',
  title: '4.Ba4: keeping the pressure on c6',
  minutes: 10,
  level: 1,
  goals: [
    'Know why 4.Ba4 keeps the bishop on its best diagonal',
    'See what ...b5 gains: space and an end to the pressure on c6',
    'See what ...b5 costs: time, and a bishop on b3 aiming at f7'
  ],
  intro:
    "After 3...a6, White usually keeps the bishop with 4.Ba4. It looks like a simple step back, but the bishop still has a job to do. Black can end that job any time with ...b5. So why doesn't Black do it at once? This module looks at what the push gains and what it costs.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The bishop keeps its job',
      intro: 'Follow the bishop on a4. Nothing happens to it for a while, and that is the point.',
      moves: KEEP,
      start: 6,
      orientation: 'white',
      steps: {
        6: {
          title: 'Take or retreat?',
          text: 'The a6-pawn attacks the bishop. Most players keep it rather than trade it.',
          arrows: [['a6', 'b5', 'red']]
        },
        7: {
          title: 'Same diagonal',
          text: '4.Ba4. The bishop stays on the a4–e8 diagonal and still looks at the c6-knight, the guard of e5. Other retreats would give up that pressure.',
          arrows: [['a4', 'c6', 'yellow'], ['c6', 'e5', 'green']]
        },
        8: {
          title: 'Black develops first',
          text: '4...Nf6. Black could push ...b5 now, but every pawn move costs time. For now the bishop does no harm, so Black develops and attacks e4.',
          arrows: [['f6', 'e4', 'red'], ['b7', 'b5', 'blue']]
        },
        9: {
          title: 'King to safety',
          text: '5.O-O. White castles. The bishop is still waiting on a4.',
          marks: ['a4']
        },
        10: {
          title: 'Black gets ready to castle',
          text: '5...Be7. Black develops the bishop. Still no ...b5.',
          arrows: [['e8', 'g8', 'blue']]
        },
        11: {
          title: 'Pressure becomes a threat',
          text: '6.Re1. Now e4 is guarded, so Bxc6 followed by Nxe5 would really win a pawn. The bishop on a4 made that possible. Black usually answers with ...b5 right now (Module 2.6).',
          arrows: [['a4', 'c6', 'red'], ['f3', 'e5', 'red'], ['e1', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'What ...b5 gains and costs',
      body:
        "**Gains.** Space on the queenside. The bishop has to leave the a4–e8 diagonal, so the pressure on c6 is gone for good. The b7-square opens for Black's light-squared bishop.\n\n**Costs.** A pawn move instead of a developing move. The bishop goes to b3, where it aims at f7 next to Black's king. And the pawns on a6 and b5 can later be attacked by a2–a4.\n\nThat is why, in the main line, Black waits and plays ...b5 only when it is needed."
    },
    {
      kind: 'walkthrough',
      title: 'Chasing too early: the Norwegian',
      intro: "Here Black pushes ...b5 at once and then hunts the bishop with the knight. Count the moves Black spends.",
      moves: NORWEGIAN,
      start: 7,
      orientation: 'white',
      steps: {
        7: {
          title: 'The bishop on a4',
          text: 'Black decides to deal with the bishop straight away.',
          arrows: [['a4', 'c6', 'yellow']]
        },
        8: {
          title: 'Kick it now',
          text: '4...b5. Black gains space and drives the bishop off the diagonal.',
          arrows: [['b5', 'a4', 'red']]
        },
        9: {
          title: 'A new target',
          text: '5.Bb3. The bishop lands on b3 and aims at f7.',
          arrows: [['b3', 'f7', 'yellow']]
        },
        10: {
          title: 'The hunt',
          text: '5...Na5. The knight attacks the bishop to win the bishop pair. But it goes to the edge, and nothing guards e5 any more.',
          arrows: [['a5', 'b3', 'red']],
          marks: ['e5'],
          ann: '?!'
        },
        11: {
          title: 'White ignores it',
          text: "6.O-O. White doesn't save the bishop. Castling is worth more than the bishop pair here.",
          marks: ['g1']
        },
        12: {
          title: 'Back to defense',
          text: '6...d6. Black has to spend another move guarding e5.',
          arrows: [['d6', 'e5', 'green']]
        },
        13: {
          title: 'Take the center',
          text: '7.d4. White builds a big center while Black is busy on the queenside.',
          arrows: [['d4', 'e5', 'red']]
        },
        14: {
          title: 'The bishop falls',
          text: '7...Nxb3. Black finally gets the bishop.',
          marks: ['b3']
        },
        15: {
          title: 'Count the cost',
          text: "8.axb3. The a1-rook gets the open a-file. Black has made seven moves and has no pieces developed. White has castled and owns the center. That's why this line has a poor reputation.",
          arrows: [['a1', 'a6', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Timing is everything',
      body:
        "...b5 is a good move at the right moment, usually when the bishop starts to threaten something real. In the main line that moment is 6.Re1, and Black answers with 6...b5."
    }
  ],
  takeaway:
    '4.Ba4 keeps the bishop aimed at c6. Black can end that pressure with ...b5, but the push costs time and sends the bishop to b3, so Black plays it when it is needed.',
  lookAhead:
    'Next: Black ignores the bishop for now and develops with 4...Nf6, hitting e4.',
  drills: [
    {
      title: 'Punish the bishop hunt',
      prompt: "You're White. Black's knight is chasing your bishop. Don't save it: castle, take the center, and recapture well.",
      moves: NORWEGIAN,
      start: 10,
      side: 'white',
      hints: ['King safety first, then the d-pawn to the center.', 'When the knight takes on b3, recapture with the a-pawn to open the a-file.'],
      success: '6.O-O, 7.d4 and 8.axb3. You are well ahead in development, and your rook has an open file.'
    },
    {
      title: 'Keep the bishop working',
      prompt: "You're White. Keep the bishop on its diagonal, castle, and then guard e4 with the rook.",
      moves: KEEP,
      start: 6,
      side: 'white',
      hints: ['The bishop retreats to a4.', 'Castle, then put the rook on e1.'],
      success: '4.Ba4, 5.O-O and 6.Re1. Now Bxc6 and Nxe5 is a real threat.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does White usually retreat with 4.Ba4?',
      moves: `${RUY} a6`,
      orientation: 'white',
      choices: [
        { text: 'It keeps the bishop on the diagonal aimed at c6', correct: true, why: 'Right. The pressure on the guard of e5 stays alive.' },
        { text: 'It protects the e4-pawn', why: "A bishop on a4 doesn't guard e4. Its job is the c6-knight." },
        { text: 'It attacks the a6-pawn', why: 'Bishops move diagonally, so from a4 the bishop does not attack a6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does Black gain with ...b5?',
      choices: [
        { text: 'Space, and the bishop leaves the a4–e8 diagonal', correct: true, why: 'Yes. After ...b5 and Bb3, the pressure on c6 is over.' },
        { text: 'It wins the bishop', why: 'The bishop just retreats to b3. It is not trapped.' },
        { text: 'A free pawn', why: 'Nothing is captured. ...b5 is a pawn move that gains space.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 4...b5 5.Bb3, what does the bishop aim at?',
      moves: `${RUY} a6 Ba4 b5 Bb3`,
      orientation: 'white',
      choices: [
        { text: "The f7-square next to Black's king", correct: true, why: 'Right. From b3 the bishop looks down the a2–g8 diagonal to f7.' },
        { text: 'The knight on c6', why: 'Not any more. That was its job from a4.' },
        { text: 'The pawn on b5', why: 'From b3 the bishop does not touch b5. White can attack b5 later with a2–a4.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. The knight has just taken your bishop on b3. How should you recapture?',
      moves: NORWEGIAN.split(' ').slice(0, -1).join(' '),
      orientation: 'white',
      choices: [
        { text: '8.axb3', correct: true, why: 'Yes. The pawn moves toward the center and the a1-rook gets an open file.' },
        { text: '8.cxb3', why: 'It is possible, but it moves a center pawn away, and the a1-rook stays shut in.' },
        { text: '8.Nxe5', why: 'The d6-pawn guards e5, and the b3-knight would escape or grab your rook. Recapture first.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: "White to move. Black's knight attacks your bishop. What is the best attitude?",
      moves: NORWEGIAN.split(' ').slice(0, 10).join(' '),
      orientation: 'white',
      choices: [
        { text: 'Castle and take the center. The bishop pair costs Black a lot of time', correct: true, why: 'Right. 6.O-O and 7.d4 give White a big lead in development.' },
        { text: 'Save the bishop at all costs', why: "Moving it again costs another tempo. Your lead in development is worth more than the bishop pair here." },
        { text: 'Grab the a6-pawn with the bishop', why: 'The bishop on b3 cannot reach a6. Focus on castling and the center.' }
      ]
    },
    {
      type: 'concept',
      prompt: "Which White pawn move can later attack Black's pawn on b5?",
      choices: [
        { text: 'a2–a4', correct: true, why: 'Yes. That lever is one of the costs of ...b5.' },
        { text: 'h2–h3', why: 'h3 is about stopping ...Bg4. It has nothing to do with b5.' },
        { text: 'd2–d4', why: 'd4 attacks e5 in the center, not the b5-pawn.' }
      ]
    }
  ],
  key: { name: 'Morphy Defense: 4.Ba4', moves: `${RUY} a6 Ba4`, orientation: 'white' },
  terms: [
    { term: 'Lever', meaning: 'A pawn move that attacks an enemy pawn to open lines, like a2–a4 against a pawn on b5.' },
    { term: 'Development lead', meaning: 'Having more pieces in play than your opponent. It matters most when the position opens up.' },
    { term: 'Norwegian Variation', meaning: '4...b5 5.Bb3 Na5: Black hunts the bishop early. Rare, because it costs a lot of time.' }
  ]
})
