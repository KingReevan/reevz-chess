import { defineModule } from '../../../types'
import { RUY } from '../../../lines'

const NA5 = `${RUY} a6 Ba4 b5 Bb3 Na5`
const MAIN = `${NA5} O-O d6 d4 Nxb3 axb3`
const NIGHTINGALE = `${NA5} Bxf7+ Kxf7 Nxe5+ Ke7`

export default defineModule({
  id: '8.10',
  title: 'Norwegian: 4...b5 5.Bb3 Na5',
  minutes: 9,
  level: 2,
  goals: [
    "Understand Black's plan: chase the Spanish bishop and trade it for a knight",
    'Know the cost: lost time, and the lead White gets with O-O and d4',
    'Recognise the Nightingale Gambit 6.Bxf7+ and why it is only a blitz weapon'
  ],
  intro:
    "The bishop on b3 is White's best piece in many Ruy Lopez lines. The Norwegian Variation simply hunts it down: ...b5 kicks it, ...Na5 attacks it, and ...Nxb3 removes it. Black gets the bishop pair. What does Black pay for it?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The bishop hunt',
      intro: 'Count the moves Black spends on the knight. That is the price of the bishop pair.',
      moves: MAIN,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'The bishop on a4',
          text: 'White kept the Spanish bishop with 4.Ba4. Black now decides to chase it right away.',
          arrows: [['a4', 'c6', 'yellow']]
        },
        8: {
          title: 'Kick it',
          text: '4...b5. The pawn attacks the bishop. Black gains queenside space, but the b5-pawn can become a target later.',
          arrows: [['b5', 'a4', 'red']]
        },
        9: {
          title: 'The bishop on b3',
          text: '5.Bb3. The bishop moves to its best diagonal and aims at f7.',
          arrows: [['b3', 'f7', 'yellow']]
        },
        10: {
          title: 'The hunt',
          text: '5...Na5. The knight attacks the bishop. The cost: the knight has left c6, so nothing guards e5 any more.',
          arrows: [['a5', 'b3', 'red']],
          marks: ['e5']
        },
        11: {
          title: 'Develop and let it go',
          text: "6.O-O. White doesn't try to save the bishop. Castling and development matter more.",
          arrows: [['e1', 'g1', 'green']]
        },
        12: {
          title: 'Guard e5',
          text: '6...d6. Black protects the e5-pawn and opens a diagonal for the c8-bishop.',
          arrows: [['d6', 'e5', 'green']]
        },
        13: {
          title: 'Strike in the centre',
          text: '7.d4. White builds a big centre and attacks e5 again. White is far ahead in development.',
          arrows: [['d4', 'e5', 'red'], ['f3', 'e5', 'red']]
        },
        14: {
          title: 'The bishop pair',
          text: "7...Nxb3. Black finally takes the bishop. That was the knight's third move, and now it leaves the board."
        },
        15: {
          title: 'The open a-file',
          text: "8.axb3. White recaptures toward the centre and opens the a-file for the rook, which already hits a6. Black has the two bishops, but White has the lead and the open file.",
          arrows: [['a1', 'a6', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Bishop pair versus time',
      body:
        "After 8.axb3, count the developed pieces. White has castled, has a knight out and pawns on d4 and e4. Black has **no** pieces developed, and e5 is under pressure.\n\nThe bishop pair is a long-term plus, but it only matters if Black survives the opening. That is why the Norwegian is considered too time-consuming at a high level."
    },
    {
      kind: 'walkthrough',
      title: 'The Nightingale Gambit: 6.Bxf7+',
      intro: 'A wild try, mostly seen in fast games. Know it so it does not surprise you.',
      moves: NIGHTINGALE,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The bishop is attacked',
          text: 'Black just played 5...Na5. Instead of letting the bishop be taken, White can throw it in.',
          arrows: [['a5', 'b3', 'red'], ['b3', 'f7', 'blue']]
        },
        11: {
          title: 'The sacrifice',
          text: '6.Bxf7+. The bishop takes f7 with check. If Black must lose the bishop anyway, why not take a pawn with it?',
          arrows: [['f7', 'e8', 'red']],
          ann: '!?'
        },
        12: {
          title: 'Take it',
          text: '6...Kxf7. Black accepts. The king has moved, so Black can no longer castle.'
        },
        13: {
          title: 'Another pawn, with check',
          text: '7.Nxe5+. The knight grabs the undefended e5-pawn and checks the king.',
          arrows: [['e5', 'f7', 'red']]
        },
        14: {
          title: 'The king steps out',
          text: '7...Ke7. White has two pawns for the bishop and Black\'s king is in the open. Objectively Black should be better, but in a blitz game it is easy to go wrong.',
          marks: ['e7']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Playing against the Norwegian',
      body:
        "As White, don't panic about losing the bishop. Castle, push d4 and recapture on b3 toward the centre with the a-pawn. Your lead in development and the open a-file are worth more than the bishop."
    }
  ],
  takeaway:
    'The Norwegian wins the bishop pair with ...b5, ...Na5 and ...Nxb3, but it costs many tempi. White answers 6.O-O, 7.d4 and 8.axb3 with a big lead in development; the Nightingale 6.Bxf7+ is a speculative blitz weapon.',
  lookAhead:
    'Last module of the chapter: 5...b5 with ...Bb7 or ...Bc5 (the Arkhangelsk), and the Russian 5...d6.',
  drills: [
    {
      title: 'Hunt the bishop',
      prompt: "You're Black. Play the Norwegian: chase the Spanish bishop and capture it on b3.",
      moves: MAIN.split(' ').slice(0, -1).join(' '),
      start: 5,
      side: 'black',
      hints: [
        'Kick the bishop with the a-pawn, then the b-pawn, then attack it with the knight.',
        'After White castles, guard e5 with a pawn. Then take the bishop.'
      ],
      success: '3...a6, 4...b5, 5...Na5, 6...d6 and 7...Nxb3. You have the bishop pair, but count how many moves it took.'
    },
    {
      title: 'Ignore the hunt',
      prompt: "You're White. Black is hunting your bishop with 5...Na5. Develop fast instead of saving it.",
      moves: MAIN,
      start: 10,
      side: 'white',
      hints: [
        'Get your king safe first.',
        'Then strike in the centre, and recapture on b3 with the a-pawn.'
      ],
      success: '6.O-O, 7.d4 and 8.axb3. A big lead in development and an open a-file for your rook.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "What does Black gain with ...Na5 and ...Nxb3?",
      moves: MAIN,
      orientation: 'black',
      choices: [
        { text: 'The bishop pair', correct: true, why: 'Right. Black trades a knight for the Spanish bishop.' },
        { text: 'A pawn', why: 'No material is won. Knight for bishop is an even trade.' },
        { text: 'A lead in development', why: 'The opposite: Black spent several moves with one knight.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 5...Na5, what new weakness does Black have?',
      moves: NA5,
      orientation: 'black',
      choices: [
        { text: 'The e5-pawn has lost its only guard', correct: true, why: 'Yes. The knight left c6, so e5 is undefended until ...d6.' },
        { text: 'The a5-knight can be trapped at once', why: "It isn't trapped; it is attacking the bishop. The problem is e5 and lost time." },
        { text: 'Black can no longer castle', why: 'Black can still castle later. The issue is time and e5.' }
      ]
    },
    {
      type: 'plan',
      prompt: "After 8.axb3, what does White have in return for the bishop pair?",
      moves: MAIN,
      orientation: 'white',
      choices: [
        { text: 'A lead in development and the open a-file', correct: true, why: 'Correct. The a1-rook already pressures a6.' },
        { text: 'An extra pawn', why: 'Material is level. The pluses are time and the open file.' },
        { text: 'A trapped black queen', why: "Nothing is trapping Black's queen. White's plus is development." }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 6.Bxf7+ Kxf7 7.Nxe5+, how much material has White given up?',
      moves: `${NA5} Bxf7+ Kxf7 Nxe5+`,
      orientation: 'white',
      choices: [
        { text: 'A bishop for two pawns', correct: true, why: 'Yes. White hopes the exposed king makes up for the missing piece. Objectively it does not.' },
        { text: 'Nothing; White is a pawn up', why: 'White gave a bishop and took two pawns: f7 and e5.' },
        { text: 'A whole rook', why: 'Only the bishop was sacrificed.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Name this line.',
      moves: NA5,
      orientation: 'black',
      choices: [
        { text: 'The Norwegian Variation', correct: true, why: 'Yes. 4...b5 5.Bb3 Na5 is the Norwegian, also called the Taimanov Variation.' },
        { text: "The Noah's Ark trap", why: "Noah's Ark traps the b3-bishop with pawns on a6, b5 and c4." },
        { text: 'The Arkhangelsk', why: 'The Arkhangelsk comes after 4...Nf6 5.O-O b5 6.Bb3 Bb7.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. What is the standard reply to 5...Na5?',
      moves: NA5,
      orientation: 'white',
      choices: [
        { text: '6.O-O', correct: true, why: 'Right. White develops and lets Black spend another move taking the bishop.' },
        { text: '6.Bxf7+', why: 'The Nightingale Gambit. Fun in blitz, but objectively it gives up too much.' },
        { text: '6.Ba4', why: 'The b5-pawn covers a4, so the bishop would simply be taken.' }
      ]
    }
  ],
  key: { name: 'Norwegian Variation: 5...Na5', moves: NA5, orientation: 'black' },
  terms: [
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one. Strong in open positions.' },
    { term: 'Lead in development', meaning: 'Having more pieces in play than your opponent, usually from spending fewer moves on one piece.' },
    { term: 'Open file', meaning: 'A file with no pawns on it. Rooks are strongest there.' }
  ]
})
