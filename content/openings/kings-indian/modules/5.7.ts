import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** 7...Na6 (Glek) 8.d5 Nc5 9.Qc2 a5: engine-checked line; the research main line 8.Be3 transposes to Module 5.4 */
const GLEK = `${CLASSICAL} O-O Na6 d5 Nc5 Qc2 a5`
/** classical-7oo-nbd7: 7...Nbd7 8.Re1 c6 9.Bf1 a5 */
const NBD7 = `${CLASSICAL} O-O Nbd7 Re1 c6 Bf1 a5`

export default defineModule({
  id: '5.7',
  title: '7...Na6, 7...Nbd7 and 7...c6',
  minutes: 10,
  level: 3,
  goals: [
    "Know where Black's queen's knight goes after 7...Na6 and 7...Nbd7",
    'See why the c5-square matters, and how ...a5 secures it',
    'Understand 7...c6 as a flexible waiting move'
  ],
  intro:
    "After 7.O-O, Black's main move is 7...Nc6, but a knight on c6 can be kicked by d5 and blocks the c-pawn. Black has three other good 7th moves. Each one sends the b8-knight on a different road, or keeps it at home for now. Where is each knight going, and how should White react?",
  sections: [
    {
      kind: 'walkthrough',
      title: '7...Na6: the knight heads for c5',
      intro: 'lichess calls 7...Na6 the Glek Defense. (Wikipedia links Glek with 7...exd4 instead.) Watch the knight and the c5-square.',
      moves: GLEK,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'The Classical position',
          text: '6...e5. White is about to castle.',
          arrows: [['e1', 'g1', 'blue']]
        },
        13: {
          title: 'White castles',
          text: '7.O-O. Black now chooses where the b8-knight should go.',
          arrows: [['b8', 'a6', 'blue'], ['b8', 'd7', 'blue']]
        },
        14: {
          title: 'Knight to the rim',
          text: '7...Na6. On a6 the knight does not block the c-pawn or the c8-bishop, and d5 cannot hit it. It is waiting to jump to c5, or to c7 after ...c6.',
          arrows: [['a6', 'c5', 'green']]
        },
        15: {
          title: 'White closes',
          text: '8.d5. The center locks. Now the d4-pawn no longer covers c5.',
          marks: ['c5']
        },
        16: {
          title: 'The knight jumps',
          text: '8...Nc5. The knight attacks e4. Unlike Module 5.1, there is no bishop pinning the f6-knight, so 9.b4? would fail to 9...Ncxe4, winning a pawn.',
          arrows: [['c5', 'e4', 'red'], ['f6', 'e4', 'red']]
        },
        17: {
          title: 'White guards e4',
          text: '9.Qc2. The queen adds a defender to e4.',
          arrows: [['c2', 'e4', 'green']]
        },
        18: {
          title: 'Secure the square',
          text: '9...a5. Now b4 is never possible without ...axb4, so the knight on c5 is there to stay. The position is roughly equal.',
          arrows: [['a5', 'b4', 'green']],
          marks: ['c5']
        }
      }
    },
    {
      kind: 'text',
      title: 'If White keeps the tension',
      body:
        "White's main answer to 7...Na6 is **8.Be3**. Then 8...Ng4 9.Bg5 Qe8 follows, and after 10.dxe5 dxe5 11.h3 h6 12.Bd2 Nf6 you reach exactly the position from Module 5.4 (7.Be3 Na6 8.O-O). Learn it once and you know both move orders. Once the d4-pawn has gone, the a6-knight again heads for c5."
    },
    {
      kind: 'walkthrough',
      title: '7...Nbd7: a solid, slower set-up',
      intro: 'lichess calls this line the Positional Defense. The knight on d7 guards e5 and waits for ...exd4 to jump to c5.',
      moves: NBD7,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'White castles',
          text: '7.O-O. The main-line position.',
          arrows: [['b8', 'd7', 'blue']]
        },
        14: {
          title: 'Knight to d7',
          text: '7...Nbd7. The knight guards e5, so Black can keep the tension. It blocks the c8-bishop for now, which is why this set-up is slower.',
          arrows: [['d7', 'e5', 'green'], ['d7', 'c5', 'blue']]
        },
        15: {
          title: 'The rook comes to e1',
          text: '8.Re1. White gets ready to defend e4 with the rook. After a later ...exd4 and ...Re8, e4 would otherwise be a target.',
          arrows: [['e1', 'e4', 'blue']]
        },
        16: {
          title: 'A useful pawn move',
          text: '8...c6. The pawn covers d5 and b5, and keeps ...exd4 followed by ...d5 in reserve.',
          arrows: [['c6', 'd5', 'green']]
        },
        17: {
          title: 'Clearing the e-file',
          text: '9.Bf1. The bishop steps out of the way, so the e1-rook now guards e4 directly.',
          arrows: [['e1', 'e4', 'green']]
        },
        18: {
          title: 'Grab some space',
          text: '9...a5. As in the Glek line, ...a5 stops b2–b4. After ...exd4 the d7-knight will have a safe square on c5. White is a little better, as usual, but Black is very solid.',
          arrows: [['a5', 'b4', 'green'], ['d7', 'c5', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: '7...c6: wait and see',
      body:
        "lichess calls 7...c6 the **Donner Defense**. It is a flexible waiting move: it covers d5, keeps ...exd4 and a later ...d5 in reserve, and leaves the b8-knight at home until White has shown a plan. It is rare at the top, but perfectly playable. The ideas are the same ones you met with ...c6 in Modules 5.5 and 5.6."
    }
  ],
  takeaway:
    "Against 7.O-O, 7...Na6 sends the knight toward c5 without blocking the c-pawn, and 7...Nbd7 guards e5 and also eyes c5. ...a5 makes c5 a safe home. 7...c6 is a flexible waiting move.",
  lookAhead:
    "Next: White's other 6th moves, 6.h3, 6.Bg5 and 6.Be3, which try to stop ...Ng4 or pin the f6-knight early.",
  drills: [
    {
      title: 'The Glek knight',
      prompt: "You're Black. White has just castled. Develop the knight to the rim, jump to c5 when White closes the center, and make the square safe.",
      moves: GLEK,
      start: 13,
      side: 'black',
      hints: [
        'The knight goes to the edge first, not to c6 or d7.',
        '...Na6, ...Nc5, then a pawn move that covers b4.'
      ],
      success: '7...Na6, 8...Nc5 and 9...a5. The knight sits on c5, hits e4, and b4 can never kick it.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'Black to move. White has just played 9.b4, trying to kick the knight from c5. What is the strongest move?',
      moves: `${CLASSICAL} O-O Na6 d5 Nc5 b4`,
      orientation: 'black',
      choices: [
        { text: '9...Ncxe4', correct: true, why: 'Right. No bishop pins the f6-knight, so after 10.Nxe4 Nxe4 Black has simply won a pawn.' },
        { text: '9...Ncd7', why: 'Retreating lets White keep the extra space for free. The e4-pawn was there for the taking.' },
        { text: '9...Na6', why: 'The knight goes back where it came from, and White is clearly better. Take on e4 instead.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does the knight go to a6 in the Glek, rather than c6?',
      choices: [
        { text: 'On a6 it does not block the c-pawn, and d5 cannot kick it with tempo', correct: true, why: 'Right. From a6 it heads for c5, or for c7 after ...c6.' },
        { text: 'On a6 it defends the queenside pawns', why: 'It does guard b4 and c5, but the main reasons are the free c-pawn and the route to c5.' },
        { text: 'On c6 it would be pinned', why: 'Nothing would pin it on c6. The problem with c6 is that it blocks the c-pawn and can be hit by d5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the line 7...Nbd7 8.Re1 c6 9.Bf1, why does White play 9.Bf1?',
      moves: NBD7.split(' ').slice(0, 17).join(' '),
      orientation: 'white',
      choices: [
        { text: 'It clears the e-file, so the rook on e1 guards e4', correct: true, why: 'Right. With the bishop gone from e2, the rook defends e4 directly, ready for ...exd4 and ...Re8.' },
        { text: 'It prepares Bh3 to trade bishops', why: 'Bh3 is impossible while the g2-pawn blocks the way. The move is about the e-file.' },
        { text: 'It protects the king from ...Ng4', why: "The f1-square has nothing to do with ...Ng4. The bishop simply gets out of the rook's way." }
      ]
    },
    {
      type: 'name',
      prompt: 'What does lichess call 7.O-O Na6?',
      moves: `${CLASSICAL} O-O Na6`,
      orientation: 'black',
      choices: [
        { text: 'The Glek Defense', correct: true, why: 'Right, named after the grandmaster Igor Glek.' },
        { text: 'The Donner Defense', why: 'That is 7...c6.' },
        { text: 'The Positional Defense', why: 'That is 7...Nbd7 with ...c6 and ...a5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move. White has closed the center with 8.d5. Where should the a6-knight go?',
      moves: `${CLASSICAL} O-O Na6 d5`,
      orientation: 'black',
      choices: [
        { text: '8...Nc5', correct: true, why: 'Right. The knight hits e4 at once, and the game is roughly equal.' },
        { text: '8...Nb4', why: 'The knight is easily chased from b4 by a3, and White gains time on the queenside. White is clearly better.' },
        { text: '8...c6', why: 'Playable, but slower. The knight should use c5 while it is free.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the main idea of ...a5 in the 7...Na6 and 7...Nbd7 set-ups?',
      choices: [
        { text: 'It stops b2–b4, so a knight on c5 cannot be kicked', correct: true, why: 'Right. If White ever plays b4, ...axb4 takes the pawn.' },
        { text: 'It prepares ...Ra6 to attack the king', why: 'The rook does not swing over in these lines. The pawn is there to cover b4.' },
        { text: 'It wins the c4-pawn', why: 'It does not attack c4. It controls b4.' }
      ]
    }
  ],
  key: { name: 'Glek Defense: 7.O-O Na6', moves: `${CLASSICAL} O-O Na6`, orientation: 'black' },
  terms: [
    { term: 'Knight route', meaning: 'The path a knight takes over several moves to reach its best square, like b8–a6–c5.' },
    { term: 'Outpost', meaning: 'A square, often in front of an enemy pawn, where your piece cannot be chased away by a pawn.' },
    { term: 'Waiting move', meaning: 'A useful move that keeps your options open until the opponent commits to a plan.' }
  ]
})
