import { defineModule } from '../../../types'
import { RUY } from '../../../lines'

const MS = `${RUY} a6 Ba4 d6`
const RUBINSTEIN = `${MS} c3 Bd7 d4 Nge7`
const BXC6 = `${MS} Bxc6+ bxc6 d4 f6`
const KECSKEMET = `${MS} O-O Bd7 c3 Nf6 d4 Be7 Nbd2 O-O Re1 Be8`

export default defineModule({
  id: '8.7',
  title: 'Modern Steinitz: 4...d6',
  minutes: 10,
  level: 2,
  goals: [
    'See why 4...d6 is sounder than the Old Steinitz 3...d6',
    'Learn the main plan 5.c3 Bd7 6.d4 Nge7 and the ...Ng6 idea',
    "Know White's other tries: 5.Bxc6+, 5.c4 and 5.O-O"
  ],
  intro:
    "In module 8.5, 3...d6 left Black stuck in a pin and exposed to the Tarrasch trap. What changes if Black plays 3...a6 4.Ba4 first and only then 4...d6? One small pawn move on the queenside makes the whole defence more flexible.",
  sections: [
    {
      kind: 'walkthrough',
      title: '5.c3 Bd7 6.d4 Nge7: holding e5',
      intro: 'The main positional line. Black keeps a pawn on e5 and adds guards to it.',
      moves: RUBINSTEIN,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'The bishop on a4',
          text: 'White kept the bishop with 4.Ba4. It still points at the c6-knight, the guard of e5.',
          arrows: [['a4', 'c6', 'yellow']]
        },
        8: {
          title: 'A pawn guards e5',
          text: '4...d6. Black supports e5 with a pawn. The pin on c6 is back, but there is a big difference from 3...d6: Black can always play ...b5 to push the bishop away.',
          arrows: [['d6', 'e5', 'green'], ['b7', 'b5', 'blue']]
        },
        9: {
          title: 'Prepare d4',
          text: '5.c3. White prepares d4 and gives the bishop a retreat square on c2.',
          arrows: [['c3', 'd4', 'green'], ['a4', 'c2', 'blue']]
        },
        10: {
          title: 'Unpin in advance',
          text: '5...Bd7. The bishop steps between the knight and the king. When d4 comes, the knight will be free to defend.',
          arrows: [['c8', 'd7', 'green']]
        },
        11: {
          title: 'The centre push',
          text: '6.d4. White attacks e5 twice. Black guards it twice, with the knight and the d6-pawn.',
          arrows: [['d4', 'e5', 'red'], ['f3', 'e5', 'red']]
        },
        12: {
          title: 'Rubinstein\'s knight',
          text: '6...Nge7. The knight is heading for g6, where it adds a third guard to e5. Black keeps the centre pawn and stays solid.',
          arrows: [['e7', 'g6', 'blue'], ['g6', 'e5', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '5.Bxc6+: giving up the bishop',
      intro: 'White can trade at once, with check.',
      moves: BXC6,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The Modern Steinitz',
          text: 'Black has played 4...d6. White decides not to wait for ...b5.'
        },
        9: {
          title: 'Trade with check',
          text: '5.Bxc6+. The bishop takes the knight with check, before Black can break the pin.',
          arrows: [['c6', 'e8', 'red']]
        },
        10: {
          title: 'Take toward the centre',
          text: '5...bxc6. Black recaptures with the b-pawn. Black gets the bishop pair and an open b-file.',
          arrows: [['a8', 'b8', 'blue']]
        },
        11: {
          title: 'Hit e5',
          text: '6.d4. With the c6-knight gone, only the d6-pawn guards e5.',
          arrows: [['d4', 'e5', 'red'], ['f3', 'e5', 'red']]
        },
        12: {
          title: 'A second pawn guard',
          text: '6...f6. Black adds a pawn guard and keeps e5. The position is solid, and the two bishops are Black\'s long-term trump.',
          arrows: [['f6', 'e5', 'green'], ['d6', 'e5', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '5.O-O: the slow Closed-style line',
      intro: 'White castles first and builds slowly, much like the Closed Ruy Lopez.',
      moves: KECSKEMET,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The Modern Steinitz',
          text: 'Black has played 4...d6. This time White just castles.'
        },
        9: {
          title: 'King first',
          text: '5.O-O. White keeps the tension and gets the king safe.'
        },
        10: {
          title: 'Unpin again',
          text: '5...Bd7. The same idea as before: get the bishop between knight and king before d4.',
          arrows: [['c8', 'd7', 'green']]
        },
        11: {
          title: 'Prepare d4',
          text: '6.c3. The familiar pawn move: support for d4 and a c2-square for the bishop.',
          arrows: [['c3', 'd4', 'green']]
        },
        12: {
          title: 'Develop',
          text: '6...Nf6. The knight develops and eyes e4.',
          arrows: [['f6', 'e4', 'red']]
        },
        13: {
          title: 'The centre',
          text: '7.d4. White takes the centre. e5 is attacked twice and guarded twice.',
          arrows: [['d4', 'e5', 'red']]
        },
        14: {
          title: 'Ready to castle',
          text: '7...Be7. Black develops the last kingside piece.'
        },
        15: {
          title: 'Guard e4',
          text: "8.Nbd2. The knight guards e4. Later it can travel to f1 and g3, just as in the Closed Ruy Lopez.",
          arrows: [['d2', 'e4', 'green'], ['d2', 'f1', 'blue']]
        },
        16: {
          title: 'Black castles',
          text: '8...O-O. Both kings are safe.'
        },
        17: {
          title: 'More support for e4',
          text: '9.Re1. Now e4 is guarded twice, by the knight and the rook.',
          arrows: [['e1', 'e4', 'green']]
        },
        18: {
          title: 'The Kecskemet retreat',
          text: '9...Be8. The bishop drops back. From e8 it still guards the c6-knight, and d7 is free again. Black is cramped but very solid.',
          arrows: [['e8', 'c6', 'green']],
          marks: ['d7']
        }
      }
    },
    {
      kind: 'text',
      title: 'Two more White tries',
      body:
        "**5.c4 (Duras).** White puts pawns on c4 and e4. Together they clamp the d5-square, so Black can't easily play ...d5.\n\n**5.d4?!** This looks natural but gives Black chances: after 5...b5 6.Bb3 Nxd4 7.Nxd4 exd4, the greedy 8.Qxd4? walks into the Noah's Ark trap. You'll see it in module 8.9. Safer moves are 5.c3, 5.Bxc6+ and 5.O-O."
    },
    {
      kind: 'tip',
      title: 'Bd7 before d4',
      body:
        "In every Modern Steinitz line, watch the a4-e8 diagonal. If White plays d4 while the c6-knight is pinned, e5 is in trouble. Playing ...Bd7 early, or keeping ...b5 ready, solves the problem."
    }
  ],
  takeaway:
    "4...d6 holds e5 with a pawn, and unlike 3...d6 Black can always break the pin with ...b5. Against 5.c3, play 5...Bd7 and 6...Nge7 heading for g6; against 5.Bxc6+ bxc6 6.d4, hold e5 with ...f6.",
  lookAhead:
    'Next: the Siesta, 5.c3 f5, where Black uses the same position to counterattack instead of defend.',
  drills: [
    {
      title: 'Play the main line',
      prompt: "You're Black. Play the Modern Steinitz and the main 5.c3 line up to 6...Nge7.",
      moves: RUBINSTEIN,
      start: 5,
      side: 'black',
      hints: [
        'Ask the bishop a question first, then guard e5 with a pawn.',
        'Unpin the c6-knight with your light-squared bishop, then send the g8-knight toward g6.'
      ],
      success: '3...a6, 4...d6, 5...Bd7 and 6...Nge7. e5 is held, and ...Ng6 adds another guard.'
    },
    {
      title: 'The slow build-up',
      prompt: "You're White. Meet the Modern Steinitz with the quiet 5.O-O plan, up to 9.Re1.",
      moves: KECSKEMET.split(' ').slice(0, -1).join(' '),
      start: 8,
      side: 'white',
      hints: [
        'Castle first, then prepare d4 with a pawn move.',
        'After d4, guard e4 with the b1-knight and then the rook.'
      ],
      success: '5.O-O, 6.c3, 7.d4, 8.Nbd2 and 9.Re1. A Closed-style centre with e4 well guarded.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the big advantage of 3...a6 4.Ba4 d6 over the Old Steinitz 3...d6?',
      moves: MS,
      orientation: 'black',
      choices: [
        { text: 'Black can break the pin on c6 with ...b5 at any time', correct: true, why: 'Right. With the bishop on a4, ...b5 chases it off the diagonal. In the Old Steinitz that resource does not exist.' },
        { text: 'The bishop on a4 no longer pins the c6-knight', why: 'It still does: a4, c6 and e8 are on one diagonal. The point is that ...b5 can break that pin.' },
        { text: 'White can no longer play d4', why: 'White can play d4. Black just has more ways to meet it.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Where is the knight on e7 heading, and why?',
      moves: RUBINSTEIN,
      orientation: 'black',
      choices: [
        { text: 'To g6, to add a guard to e5', correct: true, why: 'Yes. With ...Ng6 the e5-pawn has three defenders.' },
        { text: 'To d5, to attack c3', why: 'The e4-pawn controls d5, so the knight cannot settle there.' },
        { text: 'To f5, to attack d4', why: 'The e4-pawn controls f5 too. The knight goes to g6.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White traded on c6 and pushed d4. How should Black keep e5?',
      moves: `${MS} Bxc6+ bxc6 d4`,
      orientation: 'black',
      choices: [
        { text: '6...f6', correct: true, why: 'Correct. A second pawn guard keeps the e5-pawn, and Black keeps the bishop pair.' },
        { text: '6...Nf6', why: 'It develops, but it leaves e5 with only one guard. The main line keeps the pawn with ...f6.' },
        { text: '6...Bd7', why: "There's no pin to break now; the knight is gone. e5 needs another guard." }
      ]
    },
    {
      type: 'plan',
      prompt: 'What is White aiming for with the Duras move 5.c4?',
      moves: `${MS} c4`,
      orientation: 'white',
      choices: [
        { text: 'A clamp on the d5-square with pawns on c4 and e4', correct: true, why: "Yes. Black's ...d5 break becomes very hard." },
        { text: 'A quick attack on the black king', why: '5.c4 is a quiet, positional move aimed at the centre.' },
        { text: 'To trap the black queen', why: "Nothing is threatening the queen. It's all about d5." }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'After 4...d6 5.c3, why does Black play 5...Bd7 before White plays d4?',
      moves: `${MS} c3`,
      orientation: 'black',
      choices: [
        { text: 'So the c6-knight is not pinned when d4 attacks e5', correct: true, why: 'Right. With the bishop on d7, the knight can defend e5 or take on d4.' },
        { text: 'To attack the a4-bishop', why: 'A bishop on d7 does not attack a4. It blocks the pin line.' },
        { text: 'To prepare queenside castling', why: 'Black usually castles kingside here. The point is the pin.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 5.Bxc6+ bxc6, what does Black get for the doubled c-pawns?',
      moves: `${MS} Bxc6+ bxc6`,
      orientation: 'black',
      choices: [
        { text: 'The bishop pair and an open b-file', correct: true, why: 'Correct. Two bishops can become strong once the position opens.' },
        { text: 'An extra pawn', why: 'Material is level: bishop for knight.' },
        { text: 'A lead in development', why: 'Not really. Black has no pieces developed yet. The plus is the bishops.' }
      ]
    }
  ],
  key: { name: 'Modern Steinitz: 4...d6', moves: MS, orientation: 'black' },
  terms: [
    { term: 'Strongpoint', meaning: 'A well-guarded square or pawn in the centre that a player refuses to give up, like e5 here.' },
    { term: 'Clamp', meaning: "Pawns that control key squares so the opponent can't use them or advance." },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one. Strong in open positions.' },
    { term: 'Pin', meaning: 'A piece cannot move off a line without exposing a more valuable piece behind it.' }
  ]
})
