import { defineModule } from '../../../types'
import { RUY } from '../../../lines'

const MAIN = `${RUY} Bc5 c3 Nf6 O-O O-O d4 Bb6 Bg5`
const ND4 = `${RUY} Bc5 O-O Nd4 Nxd4 Bxd4 c3 Bb6 d4 c6`
const CORDEL = `${RUY} Bc5 c3 f5 d4 fxe4`

export default defineModule({
  id: '8.3',
  title: 'Classical: 3...Bc5',
  minutes: 10,
  level: 2,
  goals: [
    'See what 3...Bc5 aims at, and what it leaves undefended',
    "Learn White's c3 and d4 plan that gains time against the bishop",
    'Know the 4.O-O Nd4 idea and the risky Cordel Gambit'
  ],
  intro:
    "3...Bc5 puts the bishop on its most active diagonal, aimed at f2, just like in the Italian Game. But the bishop does nothing for e5, which is still guarded only by the c6-knight. How does White make Black pay for that?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main line: c3 and d4',
      intro: "White's answer is a pawn plan, not a piece attack. Watch the d-pawn.",
      moves: MAIN,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The Spanish position',
          text: "The bishop on b5 attacks the c6-knight, the only guard of e5. Black can defend e5, or develop and counterattack.",
          arrows: [['b5', 'c6', 'red'], ['c6', 'e5', 'green']]
        },
        6: {
          title: 'The active bishop',
          text: "3...Bc5. The bishop takes its best diagonal and aims at f2, next to White's king. Notice what it doesn't do: it doesn't guard e5.",
          arrows: [['c5', 'f2', 'red']],
          marks: ['e5']
        },
        7: {
          title: 'Preparing d4',
          text: '4.c3. A quiet move with a clear point. Next comes d4, and a pawn on d4 would attack both the bishop and e5.',
          arrows: [['d2', 'd4', 'blue'], ['c3', 'd4', 'green']]
        },
        8: {
          title: 'Hit e4',
          text: '4...Nf6. Black develops and puts pressure on e4.',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'King to safety',
          text: '5.O-O. White gets the king safe before opening the centre with d4.',
          arrows: [['d2', 'd4', 'blue']]
        },
        10: {
          title: 'Black castles too',
          text: '5...O-O. Both kings are safe. Now the centre fight starts.'
        },
        11: {
          title: 'The pawn fork idea',
          text: '6.d4. The pawn attacks the bishop on c5 and the pawn on e5 at once. Black must deal with the bishop first, so White gains time.',
          arrows: [['d4', 'c5', 'red'], ['d4', 'e5', 'red']]
        },
        12: {
          title: 'Same diagonal, new square',
          text: '6...Bb6. The bishop steps back but stays on its diagonal. From b6 it presses on d4 and keeps an eye on f2 for later.',
          arrows: [['b6', 'd4', 'yellow']]
        },
        13: {
          title: 'The pin',
          text: '7.Bg5. The bishop pins the f6-knight against the queen on d8. This is the Modern Main Line, and you can also reach it from the Berlin with 3...Nf6 4.O-O Bc5.',
          arrows: [['g5', 'f6', 'red'], ['f6', 'd8', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Why c3 and d4 work so well',
      body:
        "The c3-pawn has two jobs. It prepares d4, and once d4 is played it guards that pawn. Black's bishop on c5 is a target for the d-pawn, so every time White pushes it, White develops the centre and Black has to spend a move on the bishop.\n\nThat is the price of 3...Bc5: an active bishop, but one White can push around."
    },
    {
      kind: 'walkthrough',
      title: '4.O-O Nd4: trading the attacker',
      intro: "If White castles first, Black has a different idea: remove the f3-knight, the piece that attacks e5.",
      moves: ND4,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'White castles first',
          text: '4.O-O. White skips c3 for now. That gives the c6-knight a jump to d4.',
          arrows: [['c6', 'd4', 'blue']]
        },
        8: {
          title: 'The knight jumps',
          text: '4...Nd4. The knight attacks both the f3-knight and the b5-bishop, and it is guarded twice.',
          arrows: [['d4', 'f3', 'red'], ['d4', 'b5', 'red']]
        },
        9: {
          title: 'White trades',
          text: '5.Nxd4. White takes, so the b5-bishop is no longer attacked. Once Black recaptures, the knight that was pressing on e5 is gone.',
          marks: ['d4']
        },
        10: {
          title: 'A centralised bishop',
          text: '5...Bxd4. The bishop recaptures and sits in the centre. It now hits b2 and f2.',
          arrows: [['d4', 'b2', 'red'], ['d4', 'f2', 'red']]
        },
        11: {
          title: 'Kick it',
          text: '6.c3. A pawn attacks the bishop. Pawns chasing pieces gain time.',
          arrows: [['c3', 'd4', 'red']]
        },
        12: {
          title: 'Back to b6',
          text: '6...Bb6. The bishop keeps its favourite diagonal.',
          arrows: [['b6', 'f2', 'yellow']]
        },
        13: {
          title: 'The big centre',
          text: '7.d4. White builds a strong centre and attacks e5, which nothing defends now.',
          arrows: [['d4', 'e5', 'red']],
          marks: ['e5']
        },
        14: {
          title: 'Counterattack first',
          text: '7...c6. Black hits the bishop. If 8.dxe5, then 8...cxb5 wins a piece, so White must move the bishop first. White keeps a slight edge thanks to the centre.',
          arrows: [['c6', 'b5', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The Cordel Gambit: 4.c3 f5',
      intro: 'A Schliemann-style lunge. Short, sharp and risky.',
      moves: CORDEL,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'Before d4 arrives',
          text: '4.c3. White prepares d4. Instead of developing, Black can strike at e4 right now.',
          arrows: [['f7', 'f5', 'blue']]
        },
        8: {
          title: 'The lunge',
          text: '4...f5. The Cordel Gambit. Like the Schliemann, the f-pawn hits e4, and the h5-e8 diagonal opens up near Black\'s king.',
          arrows: [['f5', 'e4', 'red']],
          ann: '?!'
        },
        9: {
          title: 'White ignores it',
          text: '5.d4. White strikes back in the centre, attacking the c5-bishop and e5.',
          arrows: [['d4', 'c5', 'red'], ['d4', 'e5', 'red']]
        },
        10: {
          title: 'Both sides attacked',
          text: "5...fxe4. Now Black's bishop and White's f3-knight are both attacked. It's very sharp and considered risky for Black. Good to know, but 4...Nf6 is the reliable choice.",
          arrows: [['e4', 'f3', 'red'], ['d4', 'c5', 'red']]
        }
      }
    },
    {
      kind: 'history',
      title: 'Classical or Cordel?',
      body:
        'Names differ here. Wikipedia calls 3...Bc5 the Cordel Defence, while lichess calls it the Classical Variation and keeps the name Cordel for the 4.c3 f5 gambit only. This course follows lichess.'
    }
  ],
  takeaway:
    "3...Bc5 aims at f2 but leaves e5 with one guard. White answers with c3 and d4, gaining time on the bishop; after 4.O-O, Black can trade knights with 4...Nd4.",
  lookAhead:
    "Next: 3...Nd4, Bird's Defence, where Black offers the knight trade straight away.",
  drills: [
    {
      title: 'Push the bishop around',
      prompt: "You're White. Black played the Classical 3...Bc5. Play the main line up to the pin on f6.",
      moves: MAIN,
      start: 6,
      side: 'white',
      hints: [
        'First prepare d4 with a quiet pawn move, then castle.',
        'Push d4 to hit the bishop and e5, then pin the f6-knight with your dark-squared bishop.'
      ],
      success: '4.c3, 5.O-O, 6.d4 and 7.Bg5. Every pawn move gained time, and now the f6-knight is pinned.'
    },
    {
      title: 'The knight trade',
      prompt: "You're Black. White castled on move 4 without c3. Trade off the f3-knight and keep your bishop active.",
      moves: ND4,
      start: 7,
      side: 'black',
      hints: [
        'Jump the c6-knight to the square it attacks in the centre.',
        'Recapture with the bishop, retreat it to b6 when kicked, then hit the b5-bishop with a pawn.'
      ],
      success: '4...Nd4, 5...Bxd4, 6...Bb6 and 7...c6. The bishop stays on its diagonal and White has no time for dxe5.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does the bishop on c5 do, and what does it not do?',
      moves: `${RUY} Bc5`,
      orientation: 'black',
      choices: [
        { text: 'It aims at f2, but it does not guard e5', correct: true, why: 'Right. The c6-knight is still the only guard of e5, so the Spanish pressure remains.' },
        { text: 'It guards e5 and attacks e4', why: 'A bishop on c5 touches neither e5 nor e4. It looks along the diagonal toward f2.' },
        { text: 'It pins the f3-knight', why: "The c5-bishop looks at f2, not f3. A pin on f3 would need a bishop on g4." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does White play 4.c3 against 3...Bc5?',
      moves: `${RUY} Bc5 c3`,
      orientation: 'white',
      choices: [
        { text: 'To prepare d4, hitting the bishop and e5 at once', correct: true, why: 'Yes. And once d4 is played, the c3-pawn supports it.' },
        { text: 'To defend the e4-pawn', why: 'A pawn on c3 guards b4 and d4, not e4.' },
        { text: 'To trap the c5-bishop', why: "The bishop isn't trapped; it can go back to b6. The point is gaining time with d4." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White just played 6.d4, attacking your bishop. Which retreat keeps it most active?',
      moves: `${RUY} Bc5 c3 Nf6 O-O O-O d4`,
      orientation: 'black',
      choices: [
        { text: '6...Bb6', correct: true, why: 'Correct. The bishop stays on the a7-g1 diagonal, pressing on d4.' },
        { text: '6...Be7', why: 'Safe but passive: the bishop leaves its best diagonal.' },
        { text: '6...Bd6', why: 'It blocks the d7-pawn and makes Black\'s development awkward.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move. Can White win the e5-pawn with 8.dxe5?',
      moves: ND4,
      orientation: 'white',
      choices: [
        { text: 'No: 8...cxb5 would win the bishop', correct: true, why: 'Right. The c6-pawn attacks b5, and nothing guards the bishop. Move it first.' },
        { text: 'Yes, e5 is free', why: 'e5 is undefended, but the bishop on b5 is hanging too. 8.dxe5 cxb5 loses a piece for a pawn.' },
        { text: 'No, because Black recaptures on e5', why: 'Nothing can recapture on e5. The real problem is the hanging bishop on b5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'What is this line called?',
      moves: `${RUY} Bc5 c3 f5`,
      orientation: 'black',
      choices: [
        { text: 'The Cordel Gambit', correct: true, why: "Yes. 3...Bc5 followed by 4...f5 is the Cordel Gambit, a Schliemann-style lunge." },
        { text: 'The Schliemann Defence', why: 'Close in spirit, but the Schliemann is 3...f5 straight away. Here the bishop came to c5 first.' },
        { text: "Bird's Defence", why: "Bird's Defence is 3...Nd4." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 4.O-O Nd4, what does the black knight attack?',
      moves: `${RUY} Bc5 O-O Nd4`,
      orientation: 'black',
      choices: [
        { text: 'The f3-knight and the b5-bishop', correct: true, why: 'Correct. White usually answers 5.Nxd4, solving both problems at once.' },
        { text: 'The e4-pawn', why: 'A knight on d4 reaches b3, b5, c2, c6, e2, e6, f3 and f5. Not e4.' },
        { text: 'The f2-pawn', why: "f2 is the c5-bishop's target. The knight hits f3 and b5." }
      ]
    }
  ],
  key: { name: 'Classical Defense: 3...Bc5', moves: `${RUY} Bc5`, orientation: 'black' },
  terms: [
    { term: 'Diagonal', meaning: 'A slanting line of squares of one colour. Bishops and queens move along them.' },
    { term: 'Tempo', meaning: 'One move of time. Gaining a tempo means making a useful move that also forces your opponent to react.' },
    { term: 'Pin', meaning: 'A piece cannot move off a line without exposing a more valuable piece behind it.' },
    { term: 'Gambit', meaning: 'Giving up material, usually a pawn, to gain time or active play.' }
  ]
})
