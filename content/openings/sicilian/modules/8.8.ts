import { defineModule } from '../../../types'

/** wing-2b4: 2.b4 cxb4 3.a3 d5 4.exd5 Qxd5 5.Nf3 e5 6.axb4 Bxb4 7.c3 Be7 */
const WING = 'e4 c5 b4 cxb4 a3 d5 exd5 Qxd5 Nf3 e5 axb4 Bxb4 c3 Be7'
/** Engine-checked alternative: 3...bxa3 4.Nxa3 d6 5.d4 (Black a pawn up, White has the center) */
const GREEDY = 'e4 c5 b4 cxb4 a3 bxa3 Nxa3 d6 d4'

export default defineModule({
  id: '8.8',
  title: 'The Wing Gambit 2.b4',
  minutes: 10,
  level: 1,
  goals: [
    'Understand why White gives the b-pawn',
    'Take the pawn and strike back with ...d5 and ...e5',
    'See why the queen is safe on d5 here'
  ],
  intro:
    "2.b4 looks strange: White simply offers a pawn on the queenside. The idea is to pull Black's c-pawn away from the center so that White can build a big center with d4 later. Black's best answer is to take the pawn and hit back in the center at once.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Take, then hit the center',
      intro: 'Black accepts the pawn and then uses the time to grab the center.',
      moves: WING,
      start: 2,
      orientation: 'black',
      steps: {
        2: {
          title: 'The Sicilian',
          text: '1...c5. Black\'s c-pawn watches d4.',
          arrows: [['c5', 'd4', 'green']]
        },
        3: {
          title: 'The Wing Gambit',
          text: '2.b4. White offers the b-pawn. If Black takes, the c-pawn leaves c5 and no longer guards d4.',
          arrows: [['c5', 'b4', 'blue']],
          marks: ['d4']
        },
        4: {
          title: 'Black accepts',
          text: '2...cxb4. Taking is Black\'s best answer. Black is a pawn up.',
          marks: ['b4']
        },
        5: {
          title: 'Another offer',
          text: '3.a3. White attacks the b4-pawn. If Black takes again, White gets open lines; if not, White can win the pawn back with axb4.',
          arrows: [['a3', 'b4', 'red']]
        },
        6: {
          title: 'Strike in the center',
          text: '3...d5. Black ignores the queenside and hits e4 at once.',
          arrows: [['d5', 'e4', 'red']],
          ann: '!'
        },
        7: {
          title: 'White takes',
          text: '4.exd5. White removes the e-pawn from danger by taking.',
          marks: ['d5']
        },
        8: {
          title: 'A safe queen',
          text: '4...Qxd5. Usually an early queen in the center gets chased by Nc3. Here the b4-pawn guards c3, so Nc3 would just lose the knight.',
          arrows: [['b4', 'c3', 'green']]
        },
        9: {
          title: 'White develops',
          text: '5.Nf3. The knight comes out and covers d4 and e5.',
          arrows: [['f3', 'e5', 'red']]
        },
        10: {
          title: 'A second center pawn',
          text: '5...e5. Black puts a pawn in the center. The queen on d5 guards it.',
          arrows: [['d5', 'e5', 'green']]
        },
        11: {
          title: 'One pawn back',
          text: '6.axb4. White wins back the gambit pawn. For a moment material is level.',
          marks: ['b4']
        },
        12: {
          title: 'Black takes it back',
          text: '6...Bxb4. The bishop takes on b4 and develops. Black is a pawn up again.',
          arrows: [['f8', 'b4', 'blue']]
        },
        13: {
          title: 'Kicking the bishop',
          text: '7.c3. The pawn attacks the bishop and prepares d4.',
          arrows: [['c3', 'b4', 'red'], ['c3', 'd4', 'blue']]
        },
        14: {
          title: 'Black is fine',
          text: '7...Be7. Black keeps the extra pawn and has a pawn on e5. In return, White has the half-open a-file and can play d4 to open lines. The position is roughly equal; if anything, Black is slightly better.',
          arrows: [['a1', 'a7', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "What White wants: 3...bxa3",
      intro: 'If Black grabs a second pawn, you can see the point of the gambit from White\'s side.',
      moves: GREEDY,
      start: 5,
      orientation: 'white',
      steps: {
        5: {
          title: 'The second offer',
          text: '3.a3. White offers the a-pawn as well.',
          arrows: [['b4', 'a3', 'blue']]
        },
        6: {
          title: 'Black grabs',
          text: '3...bxa3. Black takes a second pawn.',
          marks: ['a3']
        },
        7: {
          title: 'Develop while taking',
          text: '4.Nxa3. White takes one pawn back and develops a knight at the same time. Black is still a pawn up.',
          arrows: [['a3', 'c4', 'blue'], ['a3', 'b5', 'blue']]
        },
        8: {
          title: 'Black controls e5',
          text: '4...d6. Black covers e5 and frees the c8-bishop.',
          arrows: [['d6', 'e5', 'green']]
        },
        9: {
          title: 'The big center',
          text: '5.d4. This is the point of the gambit. With Black\'s c-pawn gone, White builds a center with pawns on e4 and d4. White has the center and fast development; Black has an extra pawn. It is roughly equal.',
          arrows: [['d4', 'e5', 'green'], ['e4', 'd5', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'A cousin of the Smith–Morra',
      body:
        "The Wing Gambit has the same idea as the Smith–Morra Gambit, 2.d4 cxd4 3.c3 (Module 7.5). In both, White gives up a pawn to drag Black's c-pawn away and gain time. The difference is where the pawn comes from. The Morra pawn comes from the center; the Wing Gambit pawn comes from the edge, so White needs extra pawn moves like a3 and c3 before the center opens.\n\nBoth gambits are sound enough to play, but neither gives White an advantage against good defense."
    },
    {
      kind: 'tip',
      title: 'How to meet 2.b4',
      body:
        "Take the pawn with 2...cxb4. Then strike in the center with ...d5 and, after exd5 Qxd5, add ...e5. Your queen is safe on d5 because the b4-pawn stops Nc3. Develop quickly, and don't worry about keeping every extra pawn."
    }
  ],
  takeaway:
    "The Wing Gambit 2.b4 offers a pawn to deflect Black's c-pawn. Take it, then hit back with ...d5 and ...e5. The queen is safe on d5 because the b4-pawn covers c3, and Black is comfortable.",
  lookAhead:
    "Chapter 9 turns to White's bishop moves to b5, the Rossolimo and the Moscow, and the quiet King's Indian Attack.",
  drills: [
    {
      title: 'Strike back',
      prompt: "You're Black. After 2.b4 cxb4 3.a3, ignore the queenside: hit the center, take back with the queen, add a second center pawn, and keep your extra pawn.",
      moves: WING,
      start: 5,
      side: 'black',
      hints: ['Push your d-pawn two squares.', '...d5, ...Qxd5, ...e5, ...Bxb4 and, when the bishop is attacked, ...Be7.'],
      success: '3...d5, 4...Qxd5, 5...e5, 6...Bxb4 and 7...Be7. Black has a good center and an extra pawn.'
    },
    {
      title: "White's plan",
      prompt: "You're White. Black took your b-pawn. Offer the a-pawn too, take back with a developing move, then build your center.",
      moves: GREEDY,
      start: 4,
      side: 'white',
      hints: ['Attack the b4-pawn with your a-pawn.', 'a3, then Nxa3, then push the d-pawn two squares.'],
      success: '3.a3, 4.Nxa3 and 5.d4. White has the center and fast development for the pawn.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the main idea of 2.b4?',
      moves: 'e4 c5 b4',
      orientation: 'white',
      choices: [
        { text: "To pull Black's c-pawn away from d4, so White can build a center", correct: true, why: 'Yes. After ...cxb4, White can play d4 without Black\'s c-pawn taking it.' },
        { text: 'To win the c5-pawn', why: 'White gives a pawn, not wins one. The b4-pawn can be taken.' },
        { text: 'To start a quick attack on Black\'s king', why: 'Black\'s king is in the center for now, and the b-pawn is far from it. The idea is the center.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Black has just played 4...Qxd5. Why can\'t White chase the queen with 5.Nc3?',
      moves: 'e4 c5 b4 cxb4 a3 d5 exd5 Qxd5',
      orientation: 'black',
      choices: [
        { text: 'The b4-pawn would take the knight', correct: true, why: 'Right. A pawn on b4 guards c3, so 5.Nc3 bxc3 wins a knight.' },
        { text: 'The queen pins the knight to the king', why: 'There is no pin here. The problem is simply ...bxc3.' },
        { text: 'It is fine: Nc3 wins time', why: 'Not here. With a Black pawn on b4, Nc3 just loses the knight.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 7...Be7, what is the material balance?',
      moves: WING,
      orientation: 'black',
      choices: [
        { text: 'Black is a pawn up', correct: true, why: 'Yes. White has five pawns and Black six. White has some play for it, like the half-open a-file, so it is roughly equal.' },
        { text: 'Material is level', why: 'Count the pawns: White lost the a-, b- and e-pawns, Black only the c- and d-pawns.' },
        { text: 'White is a pawn up', why: 'It is the other way round. Black kept one of the gambit pawns.' }
      ]
    },
    {
      type: 'name',
      prompt: 'Which gambit shares the Wing Gambit\'s idea, but in the center: 2.d4 cxd4 3.c3?',
      choices: [
        { text: 'The Smith–Morra Gambit', correct: true, why: 'Right. White gives the d-pawn to deflect Black\'s c-pawn and develop fast.' },
        { text: 'The Tal Gambit', why: 'The Tal Gambit is Black\'s pawn offer against 2.f4: 2...d5 3.exd5 Nf6.' },
        { text: 'The Grand Prix Attack', why: 'The Grand Prix (2.Nc3 and f4) is not a gambit. White keeps all the pawns.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'What is the simplest good plan for Black against the Wing Gambit?',
      choices: [
        { text: 'Take the pawn, then strike back with ...d5 and ...e5', correct: true, why: 'Yes. Black uses the time to grab the center and stays comfortable.' },
        { text: 'Decline and copy White with ...b5', why: 'There is no need for that. Taking and hitting the center is simple and good.' },
        { text: 'Take, then guard the b4-pawn with every piece', why: 'Clinging to the pawn costs time. A central strike is the clean answer.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'If Black takes a second pawn with 3...bxa3, what does White get after 4.Nxa3 d6 5.d4?',
      moves: GREEDY,
      orientation: 'white',
      choices: [
        { text: 'A big center and quick development for one pawn', correct: true, why: 'Right. Pawns on e4 and d4 and a developed knight. The engine calls it roughly equal.' },
        { text: 'Both pawns back by force', why: 'White took one pawn back with Nxa3. Black is still a pawn up.' },
        { text: 'A winning attack', why: 'No. White has fair compensation, not a winning attack: it is roughly equal.' }
      ]
    }
  ],
  key: { name: 'Wing Gambit: 2.b4', moves: 'e4 c5 b4', orientation: 'black' },
  terms: [
    { term: 'Wing Gambit', meaning: 'The move 2.b4 against the Sicilian. White offers the b-pawn to pull Black\'s c-pawn away from the center.' },
    { term: 'Deflection', meaning: 'Luring an enemy piece or pawn away from an important square.' },
    { term: 'Pawn center', meaning: 'Pawns on the central squares, like e4 and d4. They control space and good squares for pieces.' }
  ]
})
