import { defineModule } from '../../../types'
import { BERLIN, MORPHY, RUY } from '../../../lines'

/** anti-berlin-4d3 */
const ANTI = `${BERLIN} d3 Bc5 c3 O-O O-O d6`

export default defineModule({
  id: '7.1',
  title: '3...Nf6: hit e4 at once',
  minutes: 9,
  level: 2,
  goals: [
    'See how 3...Nf6 develops with an attack on e4',
    'Understand why White usually castles instead of defending e4',
    'Know a simple setup against the calm 4.d3'
  ],
  intro:
    "Most players answer 3.Bb5 with 3...a6. The Berlin Defense skips that question and counterattacks at once with 3...Nf6, hitting the e4-pawn. So why does White usually just castle and let the pawn go? This module explains, and shows what Black does when White defends e4 instead.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Develop with a threat',
      intro: "You're Black. Watch how each side handles the threats against e5 and e4.",
      moves: `${BERLIN} O-O`,
      start: 3,
      orientation: 'black',
      steps: {
        3: {
          title: 'e5 is attacked',
          text: '2.Nf3. White develops and attacks the e5-pawn.',
          arrows: [['f3', 'e5', 'red']]
        },
        4: {
          title: 'Black defends',
          text: '2...Nc6. The knight develops and guards e5.',
          arrows: [['c6', 'e5', 'green']]
        },
        5: {
          title: 'The Spanish bishop',
          text: '3.Bb5. The bishop attacks the knight that guards e5. It is pressure, not yet a threat.',
          arrows: [['b5', 'c6', 'yellow'], ['c6', 'e5', 'green']]
        },
        6: {
          title: 'The Berlin counterattack',
          text: "3...Nf6. Instead of asking the bishop with ...a6, Black develops a piece and attacks White's e4-pawn. Nothing defends it.",
          arrows: [['f6', 'e4', 'red']],
          marks: ['e4']
        },
        7: {
          title: 'White castles anyway',
          text: "4.O-O. White's most common reply leaves e4 hanging. If Black takes it, White can win it back, starting with Re1 or d4.",
          arrows: [['f1', 'e1', 'blue']],
          marks: ['e4']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why White can leave e4 hanging',
      body:
        "After 4.O-O Nxe4, two things work for White. The rook can jump to e1 at once and attack the knight down the e-file, with Black's king still sitting on e8. And the b5-bishop still eyes c6, the only defender of e5.\n\nBetween Re1, d4 and that bishop, White always wins the pawn back. Module 7.2 shows exactly how.\n\nThe Berlin is a cousin of the main line. After 3...a6 4.Ba4 Nf6 5.O-O, Black's knight also attacks e4 and White also castles. In the Berlin, Black simply saves the time spent on ...a6, and the bishop stays on b5."
    },
    {
      kind: 'walkthrough',
      title: 'White defends instead: 4.d3',
      intro: 'White can avoid every forcing line by protecting e4. Black then develops calmly.',
      moves: ANTI,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The Berlin position',
          text: '3...Nf6. Black attacks e4. This time White decides to protect it.',
          arrows: [['f6', 'e4', 'red']]
        },
        7: {
          title: 'e4 is protected',
          text: '4.d3. The pawn guards e4. It is calm and solid, and very popular today: the Anti-Berlin (Module 7.8).',
          arrows: [['d3', 'e4', 'green']]
        },
        8: {
          title: 'The active bishop',
          text: "4...Bc5. Black's bishop goes to its most active square, aiming at White's kingside.",
          arrows: [['c5', 'f2', 'blue']]
        },
        9: {
          title: 'White prepares d4',
          text: '5.c3. White gets ready to play d4 one day, which would hit the bishop and grab the center.',
          arrows: [['c3', 'd4', 'blue']]
        },
        10: {
          title: 'King safety first',
          text: '5...O-O. Black castles. The king is safe before the center opens.',
          marks: ['g8']
        },
        11: {
          title: 'White castles too',
          text: '6.O-O. Both kings are safe.',
          marks: ['g1']
        },
        12: {
          title: 'A solid setup',
          text: '6...d6. The pawn supports e5 and opens a diagonal for the c8-bishop. Every black piece now has a job.',
          arrows: [['d6', 'e5', 'green'], ['c8', 'g4', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: "White's rarer fourth moves",
      body:
        "**4.Nc3** turns the game into the Four Knights Game.\n\n**4.Qe2** defends e4 and also guards the b5-bishop.\n\n**4.d4** exd4 5.O-O is the Nyholm Attack.\n\nNone of these is as common as 4.O-O or 4.d3, so this chapter focuses on those two."
    },
    {
      kind: 'tip',
      title: 'The Berlin mindset',
      body:
        "As Black, your aim is not to win a pawn. It is to develop quickly and make White prove something. The Berlin is famous for being very hard to crack, even at world championship level."
    }
  ],
  takeaway:
    '3...Nf6 develops with an attack on e4. White usually castles anyway, because the pawn can be won back; if White defends with 4.d3, Black develops calmly with ...Bc5, ...O-O and ...d6.',
  lookAhead:
    'Next: what happens when Black does take the pawn with 4...Nxe4, and how White wins it back.',
  drills: [
    {
      title: 'Develop against 4.d3',
      prompt: "You're Black. White has protected e4 with 4.d3. Develop your bishop actively, castle, and support e5.",
      moves: ANTI,
      start: 6,
      side: 'black',
      hints: [
        "Your f8-bishop has an active square on the a7-g1 diagonal.",
        'Castle next, then support e5 with the d-pawn.'
      ],
      success: '4...Bc5, 5...O-O and 6...d6. A simple, healthy setup against the Anti-Berlin.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 3...Nf6 attack?',
      moves: BERLIN,
      orientation: 'black',
      choices: [
        { text: 'The pawn on e4', correct: true, why: 'Right. The knight attacks e4, and nothing defends it yet.' },
        { text: 'The bishop on b5', why: 'A knight on f6 cannot reach b5. ...a6 is the move that attacks the bishop.' },
        { text: 'The pawn on f2', why: 'The knight on f6 does not reach f2. Its target is e4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does White usually castle with 4.O-O instead of defending e4?',
      choices: [
        { text: 'If Black takes on e4, White wins the pawn back with Re1 or d4', correct: true, why: "Yes. The rook comes to e1 quickly and the b5-bishop still pressures c6. You'll see it in Module 7.2." },
        { text: 'Castling defends the e4-pawn', why: "The king on g1 doesn't protect e4. White simply plans to win it back." },
        { text: 'Black is not allowed to take on e4 after White castles', why: '4...Nxe4 is perfectly legal and is the main line. White just gets the pawn back.' }
      ]
    },
    {
      type: 'name',
      prompt: 'Black has just played 3...Nf6. What is this defense called?',
      moves: BERLIN,
      orientation: 'black',
      choices: [
        { text: 'The Berlin Defense', correct: true, why: 'Right. 3...Nf6 is the Berlin, the second most common reply to 3.Bb5.' },
        { text: 'The Morphy Defense', why: 'The Morphy Defense is 3...a6, asking the bishop a question first.' },
        { text: 'The Schliemann Defense', why: 'The Schliemann is 3...f5, a gambit-style counterattack.' }
      ]
    },
    {
      type: 'plan',
      prompt: "White has protected e4 with 4.d3. What's a good plan for Black?",
      moves: `${BERLIN} d3`,
      orientation: 'black',
      choices: [
        { text: 'Develop with ...Bc5, ...O-O and ...d6', correct: true, why: 'Exactly. Simple development, with the bishop on its most active square.' },
        { text: 'Take on e4 anyway with ...Nxe4', why: 'e4 is protected now. After dxe4 you have given a knight for a pawn.' },
        { text: 'Push ...a6 and ...b5 straight away to chase the bishop', why: 'There is no hurry. Developing and castling come first; ...a6 can come later.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'How does the Berlin differ from the main line 3...a6 4.Ba4 Nf6 5.O-O?',
      moves: MORPHY,
      orientation: 'black',
      choices: [
        { text: 'Black skips ...a6, so the knight hits e4 a move earlier and the bishop stays on b5', correct: true, why: 'Right. Same counterattack on e4, but without spending a move on ...a6.' },
        { text: 'In the Berlin, Black plays ...Nf6 before ...Nc6', why: 'Both lines start 2...Nc6. The difference is ...a6.' },
        { text: 'In the Berlin, White cannot castle', why: 'White castles in both lines. 4.O-O is the Berlin main line.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 4.O-O, can Black win the e4-pawn for good with 4...Nxe4?',
      moves: `${RUY} Nf6 O-O`,
      orientation: 'black',
      choices: [
        { text: 'No. White wins it back, for example with 5.Re1 or 5.d4', correct: true, why: 'Yes. The pawn comes back, but the lines that follow are perfectly good for Black.' },
        { text: 'Yes. Black simply stays a pawn up', why: 'White has Re1 and d4, and the pawn returns within a few moves.' },
        { text: '4...Nxe4 is an illegal move', why: "It's legal and it's the main line. White just gets the pawn back." }
      ]
    }
  ],
  key: { name: 'Berlin Defense: 3...Nf6', moves: BERLIN, orientation: 'black' },
  terms: [
    { term: 'Counterattack', meaning: "Answering your opponent's pressure by attacking something of theirs instead of defending." },
    { term: 'Anti-Berlin', meaning: "White's 4.d3, which protects e4 and avoids the sharpest Berlin lines." },
    { term: 'Four Knights Game', meaning: 'An opening where both sides develop both knights early: 1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6, or by transposition.' }
  ]
})
