import { defineModule } from '../../../types'
import { OPEN_E6 } from '../lines'

/** four-knights: 4...Nf6 5.Nc3 Nc6 */
const FK = `${OPEN_E6} Nf6 Nc3 Nc6`
/** four-knights-ndb5: 6.Ndb5 Bb4 7.a3 Bxc3+ 8.Nxc3 d5 9.exd5 exd5 10.Bd3 O-O 11.O-O */
const NDB5 = `${FK} Ndb5 Bb4 a3 Bxc3+ Nxc3 d5 exd5 exd5 Bd3 O-O O-O`
/** four-knights-nxc6: 6.Nxc6 bxc6 7.e5 Nd5 8.Ne4 Qc7 9.f4 */
const NXC6 = `${FK} Nxc6 bxc6 e5 Nd5 Ne4 Qc7 f4`
/** four-knights-svesh: 6.Ndb5 d6 7.Bf4 e5 8.Bg5 a6 9.Na3 b5 (the Sveshnikov of Module 5.2) */
const SVESH = `${FK} Ndb5 d6 Bf4 e5 Bg5 a6 Na3 b5`

export default defineModule({
  id: '6.7',
  title: 'The Four Knights: 4...Nf6 5.Nc3 Nc6',
  minutes: 12,
  level: 3,
  goals: [
    'Meet 6.Ndb5 with the ...Bb4 pin and ...d5, or with ...d6 and ...e5',
    'Understand 6.Nxc6 bxc6 7.e5, where White grabs space',
    'See how the Four Knights can turn into a Sveshnikov'
  ],
  intro:
    "In the Four Knights, Black brings both knights out at once: 4...Nf6 5.Nc3 Nc6. The d-pawn stays home, ready to jump to d5. White's two sharpest answers are 6.Ndb5, aiming at d6 again, and 6.Nxc6 followed by e4–e5. How should each side play?",
  sections: [
    {
      kind: 'walkthrough',
      title: '6.Ndb5 Bb4: the pin and ...d5',
      intro: "From Black's side. Black answers the knight jump with a pin, then frees the game with ...d5.",
      moves: NDB5,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'Four knights out',
          text: '5...Nc6. All four knights are developed. Black is ready for ...Bb4, pinning the c3-knight, or ...d5.',
          arrows: [['f8', 'b4', 'blue'], ['d7', 'd5', 'blue']]
        },
        11: {
          title: 'Aiming at d6',
          text: '6.Ndb5. As in the Taimanov, the knight eyes the d6 square, which no black pawn guards.',
          arrows: [['b5', 'd6', 'red']],
          marks: ['d6']
        },
        12: {
          title: 'The pin',
          text: "6...Bb4. The bishop pins the c3-knight to White's king, so it can't really defend e4. Black threatens ...Nxe4.",
          arrows: [['b4', 'e1', 'red'], ['f6', 'e4', 'red']]
        },
        13: {
          title: 'Kicking the bishop',
          text: "7.a3. The pawn attacks the bishop. If it retreats, the knight jumps to d6 with check: after 7...Be7 8.Nd6+, Black must either move the king or let White's queen land on d6.",
          arrows: [['a3', 'b4', 'red']],
          marks: ['d6']
        },
        14: {
          title: 'Take while you can',
          text: '7...Bxc3+. So Black takes the knight with check. Black gives White the two bishops but gains time.',
          arrows: [['c3', 'e1', 'red']],
          ann: '!'
        },
        15: {
          title: 'The other knight returns',
          text: '8.Nxc3. The b5-knight comes back to c3 to guard e4.',
          arrows: [['c3', 'e4', 'green']]
        },
        16: {
          title: 'The freeing break',
          text: '8...d5. The d-pawn reaches d5 in one move and attacks e4.',
          arrows: [['d5', 'e4', 'red']]
        },
        17: {
          title: 'White takes',
          text: '9.exd5. White captures, and the e-file starts to open.',
          marks: ['d5']
        },
        18: {
          title: 'An isolated pawn',
          text: "9...exd5. Black takes back with the e-pawn. The d5-pawn has no pawns on the c- or e-files next to it: it is isolated.",
          marks: ['d5']
        },
        19: {
          title: 'Developing',
          text: '10.Bd3. The bishop develops and looks toward h7.',
          arrows: [['d3', 'h7', 'blue']]
        },
        20: {
          title: 'Black castles',
          text: '10...O-O. Black\'s king is safe and the pieces are active.',
          marks: ['g8']
        },
        21: {
          title: 'Two bishops against an active d-pawn',
          text: "11.O-O. White has the bishop pair, and the isolated d5-pawn is a long-term target. Black has free piece play and the open e-file. White is slightly better.",
          marks: ['d5', 'd3', 'c1']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '6.Nxc6 bxc6 7.e5: White grabs space',
      intro: "From White's side. Trade knights, then kick the f6-knight with the e-pawn.",
      moves: NXC6,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'Same position',
          text: '5...Nc6. This time White trades on c6 first.',
          marks: ['c6']
        },
        11: {
          title: 'The trade',
          text: '6.Nxc6. White removes the c6-knight before Black can use it.',
          marks: ['c6']
        },
        12: {
          title: 'Toward the center',
          text: '6...bxc6. Black takes back with the b-pawn. The new c6-pawn guards d5. (6...dxc6, with an early queen trade, is also playable.)',
          arrows: [['c6', 'd5', 'green']]
        },
        13: {
          title: 'Kick the knight',
          text: '7.e5. The pawn attacks the f6-knight and gains space. The knight must move: 7...d5? would lose it to 8.exf6.',
          arrows: [['e5', 'f6', 'red']]
        },
        14: {
          title: 'Into the center',
          text: '7...Nd5. The knight jumps to d5, where the c6-pawn supports it.',
          arrows: [['c6', 'd5', 'green']]
        },
        15: {
          title: 'Heading for d6',
          text: '8.Ne4. The knight avoids a trade on c3 and eyes d6, the hole in front of Black\'s d-pawn.',
          arrows: [['e4', 'd6', 'red']],
          marks: ['d6']
        },
        16: {
          title: 'Hitting e5',
          text: '8...Qc7. The queen attacks the e5-pawn, which has no defender.',
          arrows: [['c7', 'e5', 'red']],
          marks: ['e5']
        },
        17: {
          title: 'The f-pawn holds',
          text: '9.f4. The pawn guards e5. White has more space and ideas like Nd6+ or c4. Black has the half-open b-file and looks for counterplay with ...Qb6 or ...Qa5+. White is slightly better.',
          arrows: [['f4', 'e5', 'green'], ['e4', 'd6', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '6.Ndb5 d6: into the Sveshnikov',
      intro: "From Black's side. Black's other answer to 6.Ndb5 leads to a familiar position from Chapter 5.",
      moves: SVESH,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The knight on b5',
          text: '6.Ndb5. White aims at d6 again.',
          arrows: [['b5', 'd6', 'red']]
        },
        12: {
          title: 'Fill the hole',
          text: '6...d6. The pawn takes the d6 square away from the knight.',
          marks: ['d6']
        },
        13: {
          title: 'd6 under fire',
          text: '7.Bf4. Now the knight, the bishop and the d1-queen all aim at d6. Only the queen and the f8-bishop defend it.',
          arrows: [['b5', 'd6', 'red'], ['f4', 'd6', 'red'], ['d1', 'd6', 'red']],
          marks: ['d6']
        },
        14: {
          title: 'The only move',
          text: '7...e5. The pawn attacks the bishop and blocks its line to d6. Other moves lose the d6-pawn.',
          arrows: [['e5', 'f4', 'red']],
          ann: '!'
        },
        15: {
          title: 'The pin',
          text: '8.Bg5. The bishop moves again and pins the f6-knight to the queen.',
          arrows: [['g5', 'd8', 'red']]
        },
        16: {
          title: 'Kicking the knight',
          text: '8...a6. Black finally chases the b5-knight away.',
          arrows: [['a6', 'b5', 'red']]
        },
        17: {
          title: 'To the edge',
          text: '9.Na3. The knight retreats to the rim.',
          marks: ['a3']
        },
        18: {
          title: 'A Sveshnikov!',
          text: "9...b5. This is the Sveshnikov main line from Module 5.2, with the same position as 2...Nc6 ... 5...e5 6.Ndb5 d6 7.Bg5 a6 8.Na3 b5. Black's e-pawn took two moves to reach e5, but so did White's bishop to reach g5.",
          arrows: [['b5', 'b4', 'blue']],
          marks: ['a3']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Two roads to the Four Knights',
      body:
        "The Four Knights can also come from the 2...Nc6 move order: 2...Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e6 reaches the same position. So a player who likes the Sveshnikov can use the Four Knights as a way in, and a player who meets 6.Ndb5 with ...Bb4 gets a quieter game with an isolated d-pawn."
    }
  ],
  takeaway:
    "Against 6.Ndb5, Black can pin with ...Bb4, take on c3 after a3, and free the game with ...d5 (an isolated d-pawn, White slightly better), or play ...d6 and ...e5 into a Sveshnikov. Against 6.Nxc6 bxc6 7.e5 Nd5 8.Ne4, White grabs space and Black looks for counterplay.",
  lookAhead:
    "Module 6.8 looks at Black's other fifth move here, the Pin Variation 5...Bb4, and some early tries that don't work as well.",
  drills: [
    {
      title: 'From the Four Knights to the Sveshnikov',
      prompt: "You're Black. White has just played 6.Ndb5. Cover d6, deal with the bishop, and kick the knight.",
      moves: SVESH,
      start: 11,
      side: 'black',
      hints: [
        'Fill d6 with the pawn. When the bishop attacks it, block the bishop with the e-pawn.',
        '6...d6, 7...e5, 8...a6 and 9...b5.'
      ],
      success: '6...d6, 7...e5, 8...a6 and 9...b5. You have reached the Sveshnikov main line.'
    },
    {
      title: 'Grab space with e5',
      prompt: "You're White. Trade on c6, then use your e-pawn to gain space and keep it safe.",
      moves: NXC6,
      start: 10,
      side: 'white',
      hints: [
        'Trade knights first, then push the e-pawn to kick the f6-knight.',
        '6.Nxc6, 7.e5, 8.Ne4 (avoiding a trade), and 9.f4 to guard e5.'
      ],
      success: '6.Nxc6, 7.e5, 8.Ne4 and 9.f4. White has a strong pawn on e5 and more space.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'White has just played 7.a3, attacking the bishop. What should Black play?',
      moves: `${FK} Ndb5 Bb4 a3`,
      orientation: 'black',
      choices: [
        { text: '7...Bxc3+', correct: true, why: 'Right. Taking the knight with check is the only good move. White gets the two bishops, but Black gains time for ...d5.' },
        { text: '7...Be7', why: "Then 8.Nd6+ comes anyway. Black must move the king, or take with 8...Bxd6 and let White's queen land on d6. White is clearly better." },
        { text: '7...Bc5', why: 'Then 8.b4 chases the bishop again and Nd6+ follows. White is clearly better.' }
      ]
    },
    {
      type: 'move',
      prompt: "White's bishop and knight both attack d6. What is Black's only good move?",
      moves: `${FK} Ndb5 d6 Bf4`,
      orientation: 'black',
      choices: [
        { text: '7...e5', correct: true, why: 'Yes. The pawn attacks the bishop and blocks its line to d6. The game becomes a Sveshnikov.' },
        { text: '7...Be7', why: 'This defends nothing new: 8.Nxd6+ wins the d6-pawn with check.' },
        { text: '7...Ne5', why: 'The knight blocks the bishop, but White simply wins d6 anyway. Black is clearly worse.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9.exd5 exd5 in the 6.Ndb5 Bb4 line, what is special about the d5-pawn?',
      moves: NDB5.split(' ').slice(0, 18).join(' '),
      orientation: 'black',
      choices: [
        { text: 'It is isolated: no black pawns on the c- or e-files', correct: true, why: 'Right. An isolated pawn can be a target, but it also gives Black space and open lines for the pieces.' },
        { text: 'It is passed: no white pawn can stop it', why: "White's c2-pawn stands on a file next to it, ahead of it, so d5 is not a passed pawn." },
        { text: 'It is doubled with another pawn', why: 'Only one black pawn stands on the d-file. It is isolated, not doubled.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Black has just attacked e5 with 8...Qc7. Why does White play 9.f4?',
      moves: `${FK} Nxc6 bxc6 e5 Nd5 Ne4 Qc7`,
      orientation: 'white',
      choices: [
        { text: 'To guard the e5-pawn, which had no defender', correct: true, why: 'Yes. The queen attacked e5, and f4 gives it a pawn guard. White keeps the space.' },
        { text: 'To start a pawn storm against Black\'s castled king', why: "Black hasn't castled yet. f4 is about guarding e5." },
        { text: 'To trap the d5-knight', why: 'The d5-knight has plenty of squares. f4 is about the e5-pawn.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'What is this position called: 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6?',
      choices: [
        { text: 'The Four Knights', correct: true, why: 'Right. Both sides have both knights out, and Black has played ...e6.' },
        { text: 'The Taimanov', why: 'The Taimanov is 4...Nc6 with the g8-knight still at home.' },
        { text: 'The Pin Variation', why: 'The Pin Variation is 5...Bb4 instead of 5...Nc6.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Which other move order also reaches the Four Knights position?',
      choices: [
        { text: '2...Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e6', correct: true, why: 'Yes. Same pieces, same squares. A Sveshnikov player could use this road too.' },
        { text: '2...d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e6', why: 'That is the Scheveningen: Black has played ...d6, and the b8-knight is still at home.' },
        { text: '2...e6 3.d4 cxd4 4.Nxd4 a6 5.Nc3 Nc6', why: 'That is a Kan or Taimanov position with ...a6 and the g8-knight at home.' }
      ]
    }
  ],
  key: { name: 'Four Knights: 5...Nc6', moves: FK, orientation: 'black' },
  terms: [
    { term: 'Isolated pawn', meaning: 'A pawn with no friendly pawns on the files next to it. It can be a target, but it often gives active piece play.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has given one up. In open positions the two bishops work very well together.' },
    { term: 'Absolute pin', meaning: 'A pin against the king. The pinned piece may not leave the line to its king, so a pinned knight cannot move at all.' }
  ]
})
