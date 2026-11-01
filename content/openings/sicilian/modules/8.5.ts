import { defineModule } from '../../../types'

/** gpa-2f4-d5: 2.f4 d5 3.exd5 Nf6 (Tal Gambit) 4.Bb5+ Bd7 5.Bxd7+ Qxd7 6.c4 e6 */
const TAL = 'e4 c5 f4 d5 exd5 Nf6 Bb5+ Bd7 Bxd7+ Qxd7 c4 e6'
/** gpa-2f4-nc6: 2...Nc6 3.Nf3 g6 4.Bb5 Bg7 5.Bxc6 bxc6 6.d3 d6 7.O-O Nf6 */
const BXC6 = 'e4 c5 f4 Nc6 Nf3 g6 Bb5 Bg7 Bxc6 bxc6 d3 d6 O-O Nf6'

export default defineModule({
  id: '8.5',
  title: '2.f4 at once',
  minutes: 10,
  level: 2,
  goals: [
    'Hit e4 at once with 2...d5, the Tal Gambit',
    'Know the main line up to 6.c4 e6',
    "Understand White's Bb5xc6 idea against 2...Nc6"
  ],
  intro:
    "Some White players push the f-pawn on move two, without 2.Nc3 first. It looks like the Grand Prix, but there is one big difference: nothing defends e4 yet, and there is no knight on c3 to watch d5. Black can use that at once. This module shows Black's most direct answer, and what White hopes for if Black plays quietly.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Tal Gambit: 2...d5',
      intro: 'Black strikes at e4 straight away and is happy to give a pawn for a moment.',
      moves: TAL,
      start: 2,
      orientation: 'black',
      steps: {
        2: {
          title: 'The Sicilian',
          text: '1...c5. White skips 2.Nf3 and 2.Nc3.',
          arrows: [['f2', 'f4', 'blue']]
        },
        3: {
          title: 'The f-pawn first',
          text: '2.f4. White plans Nf3 and a kingside attack. But the e4-pawn has no defender, and there is no knight on c3 to watch d5.',
          marks: ['e4']
        },
        4: {
          title: 'Hit the center',
          text: '2...d5. The pawn attacks e4 at once, and the queen on d8 backs it up.',
          arrows: [['d5', 'e4', 'red'], ['d8', 'd5', 'green']]
        },
        5: {
          title: 'White takes',
          text: '3.exd5. White takes the pawn. Black could take back with the queen, but 4.Nc3 would then hit it and gain time.',
          arrows: [['b1', 'c3', 'blue']]
        },
        6: {
          title: 'The Tal Gambit',
          text: '3...Nf6. Black develops instead and attacks d5 with the knight. For now Black is a pawn down, but it is hard for White to keep it.',
          arrows: [['f6', 'd5', 'red']]
        },
        7: {
          title: 'A check',
          text: '4.Bb5+. White develops with check, hoping to hold on to d5.',
          arrows: [['b5', 'e8', 'red']]
        },
        8: {
          title: 'Block with the bishop',
          text: '4...Bd7. Black blocks the check and offers a trade of bishops.',
          arrows: [['d7', 'b5', 'blue']]
        },
        9: {
          title: 'The trade',
          text: '5.Bxd7+. White takes, with check.',
          marks: ['d7']
        },
        10: {
          title: 'Queen takes back',
          text: '5...Qxd7. Taking with the queen is best. Now the queen and the knight both attack d5, and nothing defends it.',
          arrows: [['d7', 'd5', 'red'], ['f6', 'd5', 'red']],
          marks: ['d5']
        },
        11: {
          title: 'Holding the pawn',
          text: '6.c4. White guards d5 with a pawn. Otherwise it would fall.',
          arrows: [['c4', 'd5', 'green']]
        },
        12: {
          title: 'A third attacker',
          text: '6...e6. Now the e-pawn hits d5 too. If 7.dxe6, then 7...Qxe6+ wins the pawn back with check. The position is roughly equal, and Black has easy development.',
          arrows: [['e6', 'd5', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'text',
      title: 'Names for 2.f4',
      body:
        "In this course, the Grand Prix Attack means 2.Nc3 with f4 (Module 8.4). Many sources also call 2.f4 the Grand Prix. Lichess calls 2.f4 the **McDonnell Attack**, and 2.f4 d5 3.exd5 Nf6 the **Tal Gambit**.\n\nA **gambit** is giving up material, usually a pawn, for time or activity. Here the gambit is short: Black usually wins the pawn back within a few moves."
    },
    {
      kind: 'walkthrough',
      title: '2...Nc6 and the Bxc6 idea',
      intro: 'If Black develops quietly with ...Nc6 and ...g6, White has a different plan: double Black\'s c-pawns.',
      moves: BXC6,
      start: 3,
      orientation: 'white',
      steps: {
        3: {
          title: 'The f-pawn first',
          text: '2.f4. Same start, but this time Black does not hit the center.',
          arrows: [['f4', 'f5', 'blue']]
        },
        4: {
          title: 'Quiet development',
          text: '2...Nc6. A natural move. The knight watches d4 and e5.',
          arrows: [['c6', 'd4', 'green']]
        },
        5: {
          title: 'The knight behind the pawn',
          text: '3.Nf3. The knight develops and covers e5 and d4.',
          arrows: [['f3', 'e5', 'green']]
        },
        6: {
          title: 'A fianchetto',
          text: '3...g6. Black prepares ...Bg7.',
          arrows: [['f8', 'g7', 'blue']]
        },
        7: {
          title: 'The bishop to b5',
          text: '4.Bb5. White threatens to take on c6 and double Black\'s c-pawns.',
          arrows: [['b5', 'c6', 'red']]
        },
        8: {
          title: 'Black allows it',
          text: '4...Bg7. Black finishes the fianchetto and lets White take.',
          arrows: [['g7', 'b2', 'blue']]
        },
        9: {
          title: 'Bishop for knight',
          text: '5.Bxc6. White gives up the bishop for the knight to damage Black\'s pawns.',
          marks: ['c6']
        },
        10: {
          title: 'Doubled pawns',
          text: '5...bxc6. Black now has two pawns on the c-file. In return, Black has the bishop pair and a half-open b-file.',
          arrows: [['b8', 'b2', 'blue']],
          marks: ['c5', 'c6']
        },
        11: {
          title: 'Holding e4',
          text: '6.d3. White supports e4 and opens the c1-bishop.',
          arrows: [['d3', 'e4', 'green']]
        },
        12: {
          title: 'Black develops',
          text: '6...d6. Black opens the c8-bishop and controls e5.',
          arrows: [['d6', 'e5', 'green']]
        },
        13: {
          title: 'White castles',
          text: '7.O-O. White\'s king is safe, and the rook stands on the f-file.',
          marks: ['f1']
        },
        14: {
          title: 'White is slightly better',
          text: "7...Nf6. White is slightly better: the doubled c-pawns are a lasting weakness. White often goes on with Qe1, bringing the queen toward the kingside, as in the Grand Prix.",
          arrows: [['d1', 'e1', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Against 2.f4, look at e4',
      body:
        "After 2.f4, ask: what defends e4? Nothing does. That's why 2...d5 works so well here. Against 2.Nc3 and 3.f4, the c3-knight guards e4 and d5, so Black prepares ...d5 with ...e6 first (Module 8.4)."
    }
  ],
  takeaway:
    "Against 2.f4, the direct 2...d5 hits the undefended e4-pawn. After 3.exd5 Nf6 (the Tal Gambit) Black wins the pawn back or gets quick development, and the position is roughly equal.",
  lookAhead:
    'Module 8.6 turns to another early bishop move that beginners love: 2.Bc4, the Bowdler Attack.',
  drills: [
    {
      title: 'Play the Tal Gambit',
      prompt: "You're Black. After 2.f4 d5, White has taken with 3.exd5. Play the main line: develop, block the check, take back the right way, and hit d5 again.",
      moves: TAL,
      start: 5,
      side: 'black',
      hints: ['Develop a piece that attacks d5.', '...Nf6, then ...Bd7 against the check, then take back with the queen, then ...e6.'],
      success: '3...Nf6, 4...Bd7, 5...Qxd7 and 6...e6. Black is about to win the pawn back with an easy game.'
    },
    {
      title: 'Double the pawns',
      prompt: "You're White. Black has played 2...Nc6 and 3...g6. Put your bishop where it threatens the knight, then take it.",
      moves: 'e4 c5 f4 Nc6 Nf3 g6 Bb5 Bg7 Bxc6',
      start: 6,
      side: 'white',
      hints: ['Which square lets your bishop attack the c6-knight?', 'Bb5, then Bxc6.'],
      success: '4.Bb5 and 5.Bxc6. Black is left with doubled c-pawns, and White is slightly better.'
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'What is the line 2.f4 d5 3.exd5 Nf6 called?',
      moves: 'e4 c5 f4 d5 exd5 Nf6',
      orientation: 'black',
      choices: [
        { text: 'The Tal Gambit', correct: true, why: 'Yes. Black gives a pawn for a moment to develop quickly.' },
        { text: 'The Smith–Morra Gambit', why: 'The Morra is White\'s gambit: 2.d4 cxd4 3.c3.' },
        { text: 'The Wing Gambit', why: 'The Wing Gambit is White\'s 2.b4.' },
        { text: 'The Grand Prix Attack', why: 'The Grand Prix is White\'s 2.Nc3 with f4. Here it is Black who offers the pawn.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move after 2.f4 d5 3.exd5. What is the best way to continue?',
      moves: 'e4 c5 f4 d5 exd5',
      orientation: 'black',
      choices: [
        { text: '3...Nf6', correct: true, why: 'Right. The knight develops and attacks d5, and White will find it hard to keep the pawn.' },
        { text: '3...Qxd5', why: 'It is playable, but 4.Nc3 attacks the queen and White gains time.' },
        { text: '3...e6', why: 'After 4.Bb5+ White keeps the extra pawn and is better.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6.c4 e6, what happens if White takes 7.dxe6?',
      moves: TAL,
      orientation: 'black',
      choices: [
        { text: '7...Qxe6+ wins the pawn back with check', correct: true, why: 'Yes. The queen recaptures on e6 and checks the king on e1.' },
        { text: 'White stays a pawn up', why: 'After 7...Qxe6+ material is level again.' },
        { text: 'Black must take back with the f-pawn', why: 'The queen on d7 can take on e6, and it comes with check.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does White play 4.Bb5 and 5.Bxc6 in the 2...Nc6 line?',
      moves: BXC6,
      orientation: 'white',
      choices: [
        { text: "To give Black doubled c-pawns, a long-term weakness", correct: true, why: 'Right. White gives up the bishop pair to damage Black\'s pawns, and is slightly better.' },
        { text: 'To win a pawn', why: 'No pawn is won. Bishop and knight are traded.' },
        { text: 'To get the bishop pair', why: 'The opposite: White gives up a bishop, so Black gets the bishop pair.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why does 2...d5 work well against 2.f4?',
      moves: 'e4 c5 f4',
      orientation: 'black',
      choices: [
        { text: "Nothing defends White's e4-pawn yet", correct: true, why: 'Right. There is no knight on c3 and no pawn on d3, so ...d5 hits an undefended pawn.' },
        { text: 'It wins a pawn by force', why: 'It does not. After 3.exd5 Nf6 Black is a pawn down for a while and usually wins it back.' },
        { text: 'It stops White from castling', why: 'White can still castle. The point is the undefended e4-pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 2.f4 Nc6 3.Nf3 g6 4.Bb5 Bg7 5.Bxc6 bxc6, what does Black get for the doubled pawns?',
      moves: 'e4 c5 f4 Nc6 Nf3 g6 Bb5 Bg7 Bxc6 bxc6',
      orientation: 'black',
      choices: [
        { text: 'The bishop pair and a half-open b-file', correct: true, why: 'Yes. Even so, the engine slightly prefers White.' },
        { text: 'An extra pawn', why: 'Material is level: bishop for knight.' },
        { text: 'A lead in development', why: 'Development is about even: each side has one piece out. Black\'s gains are the bishops and the b-file.' }
      ]
    }
  ],
  key: { name: 'Tal Gambit: 2.f4 d5 3.exd5 Nf6', moves: 'e4 c5 f4 d5 exd5 Nf6', orientation: 'black' },
  terms: [
    { term: 'Gambit', meaning: 'Giving up material, usually a pawn, to gain time, development or attack.' },
    { term: 'McDonnell Attack', meaning: 'The name lichess uses for 2.f4 against the Sicilian. Many sources call it a Grand Prix as well.' },
    { term: 'Half-open file', meaning: 'A file with no pawn of your own on it, but still an enemy pawn. Your rook can press against that pawn.' }
  ]
})
