import { defineModule } from '../../../types'

/** side-2qe2-pin: 2.Qe2 d5 3.exd5 Qxd5 4.Nc3 Qd8 5.Nf3 Nf6 */
const PIN = 'e4 e6 Qe2 d5 exd5 Qxd5 Nc3 Qd8 Nf3 Nf6'
/** side-2qe2: 2.Qe2 c5 3.Nf3 Nc6 4.g3 Nge7 5.Bg2 g6 */
const QE2_C5 = 'e4 e6 Qe2 c5 Nf3 Nc6 g3 Nge7 Bg2 g6'
/** side-2nf3: 2.Nf3 d5 3.Nc3 Nf6 4.e5 Nfd7 5.d4 c5 6.dxc5 Nc6 7.Bf4 Bxc5 8.Bd3 f6 */
const TWO_KNIGHTS = 'e4 e6 Nf3 d5 Nc3 Nf6 e5 Nfd7 d4 c5 dxc5 Nc6 Bf4 Bxc5 Bd3 f6'

export default defineModule({
  id: '3.5',
  title: '2.Qe2 and 2.Nf3: early piece moves',
  minutes: 11,
  level: 1,
  goals: [
    'See why ...exd5 is illegal after 2.Qe2 d5 3.exd5: the e6-pawn is pinned',
    'Answer 2.Qe2 simply with 2...c5',
    'Handle 2.Nf3 d5 3.Nc3 with 3...Nf6 (a French structure) or 3...d4'
  ],
  intro:
    "Some players avoid 2.d4 and bring out a piece first. 2.Qe2 looks odd, but it sets a little trap for a Black player who plays ...d5 on autopilot. 2.Nf3 is a natural developing move that often leads back to normal French positions. What should Black do against each?",
  sections: [
    {
      kind: 'walkthrough',
      title: '2.Qe2 d5 3.exd5: a pawn that cannot take back',
      intro: "Look at the e-file: White's queen, the e6-pawn and Black's king.",
      moves: PIN,
      start: 2,
      orientation: 'black',
      steps: {
        2: {
          title: 'The French move',
          text: '1...e6. The e7-square is now empty. Keep that in mind.',
          marks: ['e7']
        },
        3: {
          title: 'The Chigorin Variation',
          text: "2.Qe2. The queen lines up on the e-file with the e6-pawn and Black's king. It also guards e4.",
          arrows: [['e2', 'e8', 'blue']]
        },
        4: {
          title: 'The automatic move',
          text: '2...d5. The usual French move, but here it gives White something to work with.',
          arrows: [['d5', 'e4', 'red']],
          ann: '?!'
        },
        5: {
          title: 'The pin',
          text: "3.exd5. Black would like to take back with the e-pawn, but it can't. If the e6-pawn left the e-file, White's queen would attack Black's king. A pin to the king is absolute: 3...exd5 is an illegal move.",
          arrows: [['e2', 'e8', 'red']],
          marks: ['e6']
        },
        6: {
          title: 'The queen takes',
          text: '3...Qxd5. The e6-pawn is stuck, so if Black wants the pawn back at once, the queen has to take.',
          arrows: [['d8', 'd5', 'blue']]
        },
        7: {
          title: 'Development with tempo',
          text: '4.Nc3. White develops a piece and attacks the queen at the same time. Black must spend another move on the queen.',
          arrows: [['c3', 'd5', 'red']]
        },
        8: {
          title: 'The queen goes home',
          text: '4...Qd8. The queen retreats. White has gained time.',
          arrows: [['d5', 'd8', 'blue']]
        },
        9: {
          title: 'Another piece out',
          text: '5.Nf3. White has two knights out. Black has only moved pawns and the queen.',
          arrows: [['f3', 'e5', 'blue']]
        },
        10: {
          title: 'Solid, but behind',
          text: "5...Nf6. Black is solid, with no weak pawns, but behind in development. The engine says White is a bit better. That is the cost of 2...d5 here.",
          arrows: [['f6', 'e4', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '2...c5: the simplest answer',
      intro: "Black doesn't play ...d5 at all. Instead Black takes space on the queenside and sets up calmly.",
      moves: QE2_C5,
      start: 2,
      orientation: 'black',
      steps: {
        2: {
          title: 'Same start',
          text: '1...e6. White is about to play 2.Qe2 again.',
          marks: ['e7']
        },
        3: {
          title: 'Queen to e2',
          text: '2.Qe2. White prevents an easy ...d5, and plans g3, Bg2 and a set-up like the King\'s Indian Attack from Module 3.4.',
          arrows: [['e2', 'e8', 'blue']]
        },
        4: {
          title: 'Space instead',
          text: '2...c5. Black takes control of d4, so White cannot easily build a big center with d4.',
          arrows: [['c5', 'd4', 'green']]
        },
        5: {
          title: 'White develops',
          text: '3.Nf3. The knight comes out and prepares to castle.',
          arrows: [['f3', 'd4', 'green']]
        },
        6: {
          title: 'More control of d4',
          text: '3...Nc6. The knight also watches d4 and e5.',
          arrows: [['c6', 'd4', 'green'], ['c6', 'e5', 'green']]
        },
        7: {
          title: 'The fianchetto',
          text: '4.g3. White prepares Bg2.',
          arrows: [['f1', 'g2', 'blue']]
        },
        8: {
          title: 'A flexible knight',
          text: "4...Nge7. Black's bishop is coming to g7. On f6 the knight would block that bishop's diagonal, so it goes to e7 instead.",
          arrows: [['g8', 'e7', 'blue']]
        },
        9: {
          title: 'Bishop to g2',
          text: '5.Bg2. White\'s bishop takes the long diagonal.',
          marks: ['g2']
        },
        10: {
          title: 'Black fianchettoes too',
          text: "5...g6. Black's bishop will go to g7, where it hits d4 and the long diagonal. The engine calls the position level.",
          arrows: [['f8', 'g7', 'blue'], ['g7', 'd4', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '2.Nf3 d5 3.Nc3 Nf6: back to the French',
      intro: 'The Two Knights Variation. After a few moves, the pawns look just like a normal French.',
      moves: TWO_KNIGHTS,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The French reply',
          text: '2...d5. Against 2.Nf3, Black plays the normal French move. The e6-pawn is not pinned here.',
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'The second knight',
          text: '3.Nc3. White defends e4 with a knight instead of a pawn.',
          arrows: [['c3', 'e4', 'green']]
        },
        6: {
          title: 'Hit e4 again',
          text: '3...Nf6. A second attacker on e4. (3...d4, pushing the knight away, is the other main move.)',
          arrows: [['f6', 'e4', 'red'], ['d5', 'e4', 'red']]
        },
        7: {
          title: 'The push',
          text: '4.e5. White gains space and kicks the knight.',
          arrows: [['e5', 'f6', 'red']]
        },
        8: {
          title: 'Knight to d7',
          text: '4...Nfd7. The usual French retreat. The knight can now help ...c5 and ...f6.',
          arrows: [['d7', 'e5', 'red']]
        },
        9: {
          title: 'A French position',
          text: '5.d4. This is exactly the position from the Classical French after 3.Nc3 Nf6 4.e5 Nfd7 5.Nf3. Different move order, same board.',
          marks: ['d4', 'e5']
        },
        10: {
          title: 'Attack the base',
          text: '5...c5. The standard French break: Black hits d4, the base of White\'s chain.',
          arrows: [['c5', 'd4', 'red']]
        },
        11: {
          title: 'White gives up d4',
          text: '6.dxc5. White trades the d-pawn to keep a firm hold on e5 with pieces.',
          marks: ['e5']
        },
        12: {
          title: 'Pressure on e5',
          text: '6...Nc6. Black develops and hits e5, now attacked by both knights.',
          arrows: [['c6', 'e5', 'red'], ['d7', 'e5', 'red']]
        },
        13: {
          title: 'Guard the pawn',
          text: '7.Bf4. The bishop defends e5, together with the f3-knight.',
          arrows: [['f4', 'e5', 'green'], ['f3', 'e5', 'green']]
        },
        14: {
          title: 'Pawn back',
          text: '7...Bxc5. Black wins back the pawn and develops the bishop.',
          arrows: [['c5', 'f2', 'blue']]
        },
        15: {
          title: 'White develops',
          text: '8.Bd3. The bishop aims at h7, and White is ready to castle.',
          arrows: [['d3', 'h7', 'blue']]
        },
        16: {
          title: 'Hit the head',
          text: "8...f6. Black's second French break attacks e5, the head of the chain. The engine calls the position level.",
          arrows: [['f6', 'e5', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The other answer to 2.Nf3: 3...d4',
      body:
        "After 2.Nf3 d5 3.Nc3, Black can also push **3...d4**. The pawn attacks the c3-knight and grabs space. After 4.Ne2 the knight is in the way of White's f1-bishop for a while, and Black supports the d4-pawn with ...c5. White will try to undermine it with c3. The engine rates 3...d4 and 3...Nf6 about the same, but the advanced d4-pawn needs care, because White's pieces can gang up on it.\n\n**Order matters for White too.** 2.Nf3 d5 3.Nc3 and 2.Nc3 d5 3.Nf3 reach the same position. Many of these lines go back to the normal French as soon as White plays d4."
    },
    {
      kind: 'tip',
      title: 'A pinned piece can still move along the pin',
      body:
        "After 2.Qe2 d5 3.exd5, the e6-pawn cannot take on d5, because that would leave the e-file. But 3...e5 is legal: the pawn stays on the e-file, so it still shields the king. A pinned piece may still move along the line of the pin, if it can move in that direction."
    }
  ],
  takeaway:
    "Against 2.Qe2, don't play ...d5 on autopilot: after 3.exd5 the e6-pawn is pinned and only the queen can take back. 2...c5 is simplest. Against 2.Nf3 d5 3.Nc3, play 3...Nf6 (often reaching a normal French) or 3...d4.",
  lookAhead:
    "Next: four more second moves for White, 2.c4, 2.f4, 2.b3 and 2.Nc3, in Module 3.6. Two of them often turn into French structures you already know.",
  drills: [
    {
      title: 'Punish autopilot ...d5',
      prompt: "You're White, with your queen on e2. Black has just played 2...d5. Take the pawn, then develop with a gain of time.",
      moves: 'e4 e6 Qe2 d5 exd5 Qxd5 Nc3',
      start: 4,
      side: 'white',
      hints: [
        'Take on d5: the e6-pawn is pinned and cannot recapture.',
        "After 3...Qxd5, bring out a knight that attacks Black's queen."
      ],
      success: '3.exd5 Qxd5 4.Nc3. Black must move the queen again, and White is a bit better.'
    },
    {
      title: 'The calm answer to 2.Qe2',
      prompt: "You're Black. White has played 2.Qe2. Don't play ...d5. Take space with your c-pawn, develop the queen's knight, put the king's knight on e7 and prepare to fianchetto your bishop.",
      moves: QE2_C5,
      start: 3,
      side: 'black',
      hints: [
        'Your c-pawn goes two squares. Then the b8-knight comes out.',
        'The g8-knight goes to e7, and the g-pawn moves one square.'
      ],
      success: '2...c5, 3...Nc6, 4...Nge7 and 5...g6. The bishop goes to g7 next, and the position is level.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Black would like to take back on d5 with the e-pawn. Why is 3...exd5 impossible here?',
      moves: 'e4 e6 Qe2 d5 exd5',
      orientation: 'black',
      choices: [
        { text: "The e6-pawn is pinned to Black's king by the queen on e2", correct: true, why: 'Right. e7 is empty, so the queen, the pawn and the king stand on one line. Moving the pawn off the e-file would expose the king, which is illegal.' },
        { text: "White's queen defends d5", why: 'The queen on e2 does not reach d5. The problem is the pin on the e-file.' },
        { text: 'It is legal, but it loses a pawn', why: "It isn't legal at all. A pinned piece can't leave the line of a pin to its own king." }
      ]
    },
    {
      type: 'move',
      prompt: 'White has played 2.Qe2. What is Black\'s simplest reply?',
      moves: 'e4 e6 Qe2',
      orientation: 'black',
      choices: [
        { text: '2...c5', correct: true, why: 'Yes. Black takes control of d4 and sets up calmly with ...Nc6, ...Nge7 and ...g6. The engine calls it level.' },
        { text: '2...d5', why: 'After 3.exd5 the e6-pawn is pinned, the queen has to take back, and 4.Nc3 gains time. White is a bit better.' },
        { text: '2...Nf6', why: 'This allows 3.e5, kicking the knight. White is a little better. 2...c5 is simpler.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 2.Nf3 d5 3.Nc3 Nf6 4.e5 Nfd7 5.d4, which French position is on the board?',
      moves: 'e4 e6 Nf3 d5 Nc3 Nf6 e5 Nfd7 d4',
      orientation: 'black',
      choices: [
        { text: 'The Classical: 3.Nc3 Nf6 4.e5 Nfd7 5.Nf3', correct: true, why: 'Right. The moves came in a different order, but the board is the same. Black plays ...c5 just as in a normal French.' },
        { text: 'The Advance: 3.e5 c5 4.c3', why: "In the Advance White's queen knight stays home and White plays c3. Here the knight is already on c3." },
        { text: 'The Exchange: 3.exd5 exd5', why: 'No pawns have been traded. The e5-pawn and the d5-pawn are both on the board.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'White has just played 2.Qe2. What is the queen doing on e2?',
      moves: 'e4 e6 Qe2',
      orientation: 'white',
      choices: [
        { text: "It guards e4 and lines up with Black's e6-pawn and king, so ...d5 is met by exd5", correct: true, why: 'Yes. After 2...d5 3.exd5 the e6-pawn is pinned. Black then has to recapture with the queen and loses time.' },
        { text: 'It prepares Qh5 and a quick mate on f7', why: 'f7 is covered by the king, and nothing supports a queen attack there. 2.Qe2 is about the e-file.' },
        { text: 'It attacks the b7-pawn', why: 'A queen on e2 does not reach b7. Its job is on the e-file.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 2.Qe2 d5 3.exd5, which move with the e6-pawn is still legal?',
      moves: 'e4 e6 Qe2 d5 exd5',
      orientation: 'black',
      choices: [
        { text: '3...e5', correct: true, why: 'Right. The pawn stays on the e-file, so it still shields the king. A pinned piece may move along the line of the pin.' },
        { text: '3...exd5', why: 'Taking on d5 moves the pawn off the e-file and exposes the king to the queen. That is illegal.' },
        { text: 'No pawn move is legal', why: '3...e5 is legal, because the pawn stays between the queen and the king.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 3...Qxd5, why is 4.Nc3 a good move for White?',
      moves: 'e4 e6 Qe2 d5 exd5 Qxd5 Nc3',
      orientation: 'white',
      choices: [
        { text: 'It develops a piece and attacks the queen, so Black loses another move', correct: true, why: 'Yes. Gaining time like this is called gaining a tempo. White ends up ahead in development.' },
        { text: 'It wins the queen', why: 'The queen can simply move away, for example to d8, d7 or a5.' },
        { text: 'It pins the queen to the king', why: 'A knight cannot pin anything. It attacks the queen, which then moves.' }
      ]
    }
  ],
  key: { name: 'Chigorin 2.Qe2 d5 3.exd5: ...exd5 is illegal', moves: 'e4 e6 Qe2 d5 exd5', orientation: 'black' },
  terms: [
    { term: 'Absolute pin', meaning: 'A pin against the king. The pinned piece may not leave the line, because that would expose the king to check.' },
    { term: 'Tempo', meaning: 'One move of time. Developing a piece while attacking something "gains a tempo", because the opponent has to respond.' },
    { term: 'Chigorin Variation', meaning: 'The French line 1.e4 e6 2.Qe2, named after Mikhail Chigorin.' },
    { term: 'Two Knights Variation', meaning: 'The French line 1.e4 e6 2.Nf3 d5 3.Nc3, with both White knights out before d4.' }
  ]
})
