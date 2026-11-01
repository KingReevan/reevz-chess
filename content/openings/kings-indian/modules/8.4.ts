import { defineModule } from '../../../types'
import { FIANCHETTO } from '../lines'

/** fianchetto-yugoslav: 6...c5 7.Nc3 Nc6 8.d5 Na5 ... 12.Bb2 */
const YUGO = `${FIANCHETTO} c5 Nc3 Nc6 d5 Na5 Nd2 a6 Qc2 Rb8 b3 b5 Bb2`
/** fianchetto-yugoslav-8dxc5: the Exchange Line */
const EXCH = `${FIANCHETTO} c5 Nc3 Nc6 dxc5 dxc5`
/** fianchetto-c6-bf5: Larsen */
const LARSEN = `${FIANCHETTO} c6 Nc3 Bf5`
/** fianchetto-c6-qa5: Kavalek */
const KAVALEK = `${FIANCHETTO} c6 Nc3 Qa5`

export default defineModule({
  id: '8.4',
  title: 'Yugoslav 6...c5 and the ...c6 systems',
  minutes: 11,
  level: 2,
  goals: [
    'Play the Yugoslav 6...c5 and know its Benoni-like structure',
    'See how the Yugoslav and the Panno reach the same position',
    "Know the quiet ...c6 plans: Kavalek's ...Qa5 and Larsen's ...Bf5"
  ],
  intro:
    "Modules 8.2 and 8.3 showed ...Nc6 and ...Nbd7 with ...e5. Black has two more ways to meet the Fianchetto: hit d4 at once with 6...c5 (the Yugoslav), or play the modest 6...c6 and develop the pieces first. What does each plan aim for, and how should White react?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Yugoslav: 6...c5 7.Nc3 Nc6 8.d5',
      intro: 'Watch the final position closely. You have seen it before.',
      moves: YUGO,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'Hit the center from the side',
          text: '6.O-O. This time Black attacks d4 straight away with the c-pawn.',
          arrows: [['c7', 'c5', 'blue']]
        },
        12: {
          title: 'The Yugoslav',
          text: '6...c5. The pawn attacks d4. If White pushes d4–d5, we get a Benoni-like structure: White has more space in the center, and Black plays on the queenside.',
          arrows: [['c5', 'd4', 'red']]
        },
        13: {
          title: 'White develops',
          text: '7.Nc3. The knight comes out and keeps both options open: d4–d5, or taking on c5.',
          arrows: [['d4', 'd5', 'blue']]
        },
        14: {
          title: 'More pressure on d4',
          text: '7...Nc6. Now the pawn and the knight both hit d4. White chooses: push with 8.d5, or trade with 8.dxc5.',
          arrows: [['c5', 'd4', 'red'], ['c6', 'd4', 'red']]
        },
        15: {
          title: 'The main line: 8.d5',
          text: '8.d5. White gains space and kicks the knight.',
          arrows: [['d5', 'c6', 'red']]
        },
        16: {
          title: 'The Panno knight jump',
          text: '8...Na5. Just like in the Panno, the knight goes to the edge and hits c4.',
          arrows: [['a5', 'c4', 'red']],
          marks: ['c4']
        },
        17: {
          title: 'Guarding c4',
          text: '9.Nd2. The knight protects c4. Black\'s c5-pawn already controls b4, so chasing the knight with b2–b4 would just lose material.',
          arrows: [['d2', 'c4', 'green']],
          marks: ['b4']
        },
        18: {
          title: 'Preparing ...b5',
          text: '9...a6. Black gets ready for ...Rb8 and ...b5.',
          arrows: [['b7', 'b5', 'blue']]
        },
        19: {
          title: 'The queen guards c3',
          text: '10.Qc2. As in the Panno, White protects the c3-knight before playing b3.',
          arrows: [['c2', 'c3', 'green']]
        },
        20: {
          title: 'Rook to b8',
          text: '10...Rb8. The rook steps onto the b-file before it opens.',
          arrows: [['b7', 'b5', 'blue']]
        },
        21: {
          title: 'Another guard for c4',
          text: '11.b3. The pawn protects c4 and makes room for the bishop on b2.',
          arrows: [['b3', 'c4', 'green']]
        },
        22: {
          title: 'The ...b5 break',
          text: '11...b5. Black hits c4 again and gets ready to open the b-file.',
          arrows: [['b5', 'c4', 'red']]
        },
        23: {
          title: 'Same position as the Panno',
          text: "12.Bb2. This is exactly the position from the Panno main line in Module 8.2. Black played ...c5 first and ...a6 later, but every piece has reached the same square. White has a little more space, and Black has queenside play.",
          marks: ['a5', 'c5', 'b5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The quiet exchange: 8.dxc5',
      intro: "White doesn't have to push d5. Taking on c5 leads to a calm, level game.",
      moves: EXCH,
      start: 13,
      orientation: 'white',
      steps: {
        13: {
          title: 'A choice for White',
          text: '7.Nc3. White develops. After Black\'s next move, d4 is attacked twice.',
          arrows: [['c5', 'd4', 'red']]
        },
        14: {
          title: 'The knight joins in',
          text: '7...Nc6. Instead of pushing past, White can simply trade the d-pawn.',
          arrows: [['d4', 'c5', 'blue']]
        },
        15: {
          title: 'White takes',
          text: '8.dxc5. White trades pawns. Black must take back at once, or stay a pawn down. After that the d-file is open.',
          marks: ['c5']
        },
        16: {
          title: 'A level, quiet game',
          text: "8...dxc5. The pawns are almost symmetrical, and the d-file is open. With d4 gone, the g7-bishop will have an open diagonal once the f6-knight moves. The position is level and rather drawish.",
          arrows: [['d1', 'd8', 'blue'], ['g7', 'c3', 'yellow']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The ...c6 systems',
      body:
        "6...c6 is a modest move with two jobs. The pawn controls d5 and b5, and it opens a path for the queen toward a5 and b6. Black waits to see where White's pieces go before choosing ...e5 or ...d5.\n\nAfter 7.Nc3 there are two named ideas. **Larsen's 7...Bf5** brings the bishop out before the pawns can shut it in (see the next board). **Kavalek's 7...Qa5** puts the queen on the a5–e1 diagonal, where it presses on the c3-knight, and Black follows with ...e5. Both are rare. Against ...Qa5, White calmly plays 8.e4 or 8.h3 and is a bit better."
    },
    {
      kind: 'walkthrough',
      title: "Larsen's 7...Bf5",
      intro: 'A quiet set-up where the light-squared bishop comes out early.',
      moves: LARSEN,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'A third plan',
          text: '6.O-O. Instead of ...Nc6, ...Nbd7 or ...c5, Black can start with a quiet pawn move.',
          arrows: [['c7', 'c6', 'blue']]
        },
        12: {
          title: 'The modest ...c6',
          text: '6...c6. The pawn covers d5 and b5. Black keeps ...d5 and ...e5 in reserve.',
          arrows: [['c6', 'd5', 'green'], ['c6', 'b5', 'green']]
        },
        13: {
          title: 'White prepares e4',
          text: '7.Nc3. White develops and would like to play e2–e4 next.',
          arrows: [['e2', 'e4', 'blue']]
        },
        14: {
          title: 'Bishop to f5',
          text: "7...Bf5. The bishop comes out before Black's pawns can block it in, and it joins the f6-knight in controlling e4. Now 8.e4? just loses a pawn to 8...Nxe4. Black can follow with ...Ne4 to press on c3. White keeps a small edge.",
          arrows: [['f5', 'e4', 'yellow'], ['f6', 'e4', 'yellow']],
          marks: ['e4']
        }
      }
    }
  ],
  takeaway:
    'The Yugoslav 6...c5 hits d4 at once. After 8.d5 Na5 it reaches the Panno main line, and 8.dxc5 dxc5 is level and quiet. With 6...c6, Black develops first: ...Bf5 controls e4, and ...Qa5 presses on c3.',
  lookAhead:
    "Module 8.5 shows two famous games where Black's dark-squared bishop and a kingside attack won even against the g2-bishop.",
  drills: [
    {
      title: 'Meet the Yugoslav as White',
      prompt: "You're White. Black has played 6...c5. Play the main line: develop, push d5, guard c4, protect c3, then finish developing.",
      moves: YUGO,
      start: 12,
      side: 'white',
      hints: ['Knight to c3 first, then d5. When the knight goes to a5, guard c4 with a knight.', 'Then Qc2, b3 and Bb2.'],
      success: '7.Nc3, 8.d5, 9.Nd2, 10.Qc2, 11.b3 and 12.Bb2. The same set-up White uses against the Panno.'
    },
    {
      title: "Larsen's set-up as Black",
      prompt: "You're Black. White has castled in the Fianchetto. Play a quiet pawn move, then bring your light-squared bishop to a square where it controls e4.",
      moves: LARSEN,
      start: 11,
      side: 'black',
      hints: ['Start with a pawn move that covers d5 and b5.', 'The c8-bishop can reach f5, where it watches e4.'],
      success: '6...c6 and 7...Bf5. The bishop is active, and White cannot play e2–e4 without dropping a pawn.'
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'This position came from 6...c5 (the Yugoslav). Which other line reaches exactly the same position?',
      moves: YUGO,
      orientation: 'black',
      choices: [
        { text: 'The Panno main line: 6...Nc6, 7...a6, 8.d5 Na5 9.Nd2 c5', correct: true, why: 'Right. Different order, same squares. Knowing this saves you learning two lines.' },
        { text: 'The Long Variation with ...Nbd7 and ...e5', why: 'In the Long Variation Black plays ...e5 and ...exd4. Here there is no ...e5 at all.' },
        { text: 'The Sämisch with 5.f3', why: 'The Sämisch has White pawns on e4 and f3. Here White has fianchettoed on g2.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the main idea of 6...c5 against the Fianchetto?',
      choices: [
        { text: 'To hit d4 from the side; after d4–d5 Black plays on the queenside', correct: true, why: 'Yes. It leads to a Benoni-like structure where Black uses ...a6, ...Rb8 and ...b5.' },
        { text: "To prepare ...c4 and trap White's bishop", why: "No bishop is in danger. The c-pawn's job is to challenge d4." },
        { text: 'To defend the d6-pawn', why: 'A pawn on c5 guards b4 and d4, not d6. It is an attacking move.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6...c6 7.Nc3 Bf5, why can\'t White play 8.e4 right away?',
      moves: LARSEN,
      orientation: 'white',
      choices: [
        { text: 'The f5-bishop and the f6-knight both hit e4, and only the c3-knight guards it', correct: true, why: 'Exactly. 8.e4? Nxe4 wins a pawn. White needs more preparation first.' },
        { text: 'The bishop on f5 pins the f3-knight', why: 'The f5-bishop does not even attack f3. Its job is to watch e4.' },
        { text: "The e-pawn would be pinned to White's king", why: "White's king is on g1, not on the e-file, so there is no pin." }
      ]
    },
    {
      type: 'plan',
      prompt: 'How would you describe the position after 7...Nc6 8.dxc5 dxc5?',
      moves: EXCH,
      orientation: 'white',
      choices: [
        { text: 'Level and quiet, with few chances for either side', correct: true, why: 'Right. The pawns are nearly symmetrical and nothing is weak. It is a safe choice, but rather drawish.' },
        { text: "White is winning because Black's c-pawn is weak", why: 'White can attack the c5-pawn with Be3, but Black defends it easily. The game is level.' },
        { text: "Black has a strong attack on White's king", why: "Both kings are safe. There is no attack for either side." }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move in the Yugoslav. White has just played 8.d5. Where should the knight go?',
      moves: `${FIANCHETTO} c5 Nc3 Nc6 d5`,
      orientation: 'black',
      choices: [
        { text: '8...Na5', correct: true, why: 'Right. The knight attacks c4, and the c5-pawn keeps b2–b4 from chasing it.' },
        { text: '8...Ne5', why: '9.Nxe5 dxe5 trades off Black\'s active knight, and White has an easy game.' },
        { text: '8...Nb4', why: 'The knight gets chased again, for example by a2–a3, and Black loses time.' }
      ]
    },
    {
      type: 'concept',
      prompt: "In the Kavalek line 6...c6 7.Nc3 Qa5, what does the queen put pressure on?",
      moves: KAVALEK,
      orientation: 'black',
      choices: [
        { text: 'The c3-knight, along the a5–e1 diagonal', correct: true, why: 'Yes. The queen eyes c3, and Black plans ...e5 next. White answers calmly and stays a bit better.' },
        { text: 'The d4-pawn', why: 'The queen on a5 does not attack d4. Its diagonal runs a5, b4, c3, d2, e1.' },
        { text: "White's king on g1", why: "The queen's lines from a5 don't reach g1. The target is the c3-knight." }
      ]
    }
  ],
  key: { name: 'Fianchetto Yugoslav: 6...c5', moves: `${FIANCHETTO} c5`, orientation: 'black' },
  terms: [
    { term: 'Benoni-like structure', meaning: 'White has a pawn on d5, Black has pawns on c5 and d6. White has more space in the center; Black usually plays on the queenside.' },
    { term: 'Transposition', meaning: 'Reaching the same position by a different order of moves.' },
    { term: 'Symmetrical', meaning: 'Both sides have the same pawn set-up, like a mirror. Such positions are often calm and level.' }
  ]
})
