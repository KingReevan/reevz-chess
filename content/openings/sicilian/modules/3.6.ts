import { defineModule } from '../../../types'
import { YUGOSLAV } from '../lines'

/** dragon-yug-9ooo: 9.O-O-O d5! 10.exd5 Nxd5 11.Nxc6 bxc6 12.Bd4 Bxd4 13.Qxd4 Qb6 */
const OOO = `${YUGOSLAV} O-O-O d5 exd5 Nxd5 Nxc6 bxc6 Bd4 Bxd4 Qxd4 Qb6`
/** dragon-yug-9g4: 9.g4 Be6 10.O-O-O Nxd4 11.Bxd4 Qa5 12.a3 Rab8 13.h4 b5 */
const G4 = `${YUGOSLAV} g4 Be6 O-O-O Nxd4 Bxd4 Qa5 a3 Rab8 h4 b5`

export default defineModule({
  id: '3.6',
  title: '9.O-O-O d5! and 9.g4',
  minutes: 10,
  level: 2,
  goals: [
    'Answer 9.O-O-O with the freeing move 9...d5!',
    'Know why ...d5 works here but not after 9.Bc4',
    'Meet 9.g4 with ...Be6, ...Nxd4, ...Qa5 and ...b5'
  ],
  intro:
    "9.Bc4 is not White's only ninth move. White can castle at once, or push the g-pawn first. Each choice changes what Black should do. Against one of them, Black gets to play the move every Dragon player dreams of: ...d5.",
  sections: [
    {
      kind: 'walkthrough',
      title: '9.O-O-O d5!',
      intro: 'White castles before developing the f1-bishop. Look at the d5-square: who controls it?',
      moves: OOO,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'The Yugoslav',
          text: '8...Nc6. The usual position. This time White castles at once.',
          marks: ['d5']
        },
        17: {
          title: 'Castling first',
          text: '9.O-O-O. White\'s king goes to the queenside. But the bishop is still on f1, so it does not cover d5 the way it would from c4.',
          marks: ['f1', 'd5']
        },
        18: {
          title: 'Strike in the center',
          text: "9...d5. Black pushes the d-pawn from d6 to d5 and hits e4. In the Dragon this pawn break frees Black's whole game.",
          arrows: [['d5', 'e4', 'red']],
          ann: '!'
        },
        19: {
          title: 'White takes',
          text: '10.exd5. White takes the pawn. Black takes back with the knight.',
          marks: ['d5']
        },
        20: {
          title: 'The bishop wakes up',
          text: '10...Nxd5. The f6-knight has moved, so the g7-bishop sees all the way to d4. The c6-knight and the bishop both hit the d4-knight, and the d5-knight hits c3 and e3.',
          arrows: [['g7', 'd4', 'red'], ['c6', 'd4', 'red'], ['d5', 'c3', 'red']]
        },
        21: {
          title: 'Ease the pressure',
          text: '11.Nxc6. White swaps off the c6-knight. Trading on d5 instead, with 11.Nxd5 Qxd5, lets Black equalize easily.',
          marks: ['c6']
        },
        22: {
          title: 'Toward the center',
          text: '11...bxc6. The pawn takes back toward the center. It guards the d5-knight, and the b-file opens toward White\'s king.',
          arrows: [['c6', 'd5', 'green'], ['a8', 'b8', 'blue']]
        },
        23: {
          title: 'Bishop meets bishop',
          text: "12.Bd4. White blocks the long diagonal and offers to trade the Dragon bishop. It is White's best move here.",
          arrows: [['d4', 'g7', 'yellow']]
        },
        24: {
          title: 'Black trades',
          text: "12...Bxd4. Black accepts. The center is open and Black's queen gets a good square next. 12...e5 is the other main move.",
          marks: ['d4']
        },
        25: {
          title: 'The queen recaptures',
          text: '13.Qxd4. The queen takes back and stands in the center, eyeing the d5-knight and the a7-pawn.',
          arrows: [['d4', 'd5', 'red'], ['d4', 'a7', 'red']]
        },
        26: {
          title: 'An active game',
          text: "13...Qb6. Black guards a7, offers a queen trade and eyes b2 down the half-open b-file. White keeps a small edge, but Black's pieces are free and active.",
          arrows: [['b6', 'b2', 'red'], ['b6', 'd4', 'yellow']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Why ...d5 works here',
      body:
        "In the Dragon, Black's pawn sits on d6. Getting it to d5 in one move opens the center, frees the c8-bishop and wakes up the g7-bishop. White's whole set-up is built to stop it.\n\nAfter **9.Bc4**, the bishop covers d5, and ...d5 just loses a pawn. After **9.O-O-O**, nothing extra guards d5 yet, so Black strikes at once. That's why White often plays 9.Bc4 first, and why **9...d5** is the main answer to 9.O-O-O."
    },
    {
      kind: 'walkthrough',
      title: '9.g4: pawns first',
      intro: 'White pushes the g-pawn before castling. Now Black reacts differently.',
      moves: G4,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'The Yugoslav again',
          text: '8...Nc6. This time White starts with a pawn move.',
          marks: ['g2']
        },
        17: {
          title: 'The g-pawn moves',
          text: '9.g4. White starts the kingside storm. The pawn wants to go to g5 and kick the f6-knight. It also makes 9...d5? bad, because 10.g5 hits the knight before it can take on d5.',
          arrows: [['g4', 'g5', 'red'], ['g5', 'f6', 'red']]
        },
        18: {
          title: 'Bishop to e6',
          text: '9...Be6. Black develops and covers d5 and c4. The bishop also looks down the diagonal toward a2.',
          arrows: [['e6', 'a2', 'blue']]
        },
        19: {
          title: 'White castles',
          text: '10.O-O-O. The kings are on opposite sides, and the race begins.',
          marks: ['c1', 'g8']
        },
        20: {
          title: 'Trade on d4',
          text: '10...Nxd4. Black swaps off White\'s best-placed knight.',
          marks: ['d4']
        },
        21: {
          title: 'Bishop takes back',
          text: '11.Bxd4. White\'s bishop now faces the Dragon bishop, with the f6-knight between them.',
          arrows: [['d4', 'g7', 'yellow']]
        },
        22: {
          title: 'The queen to a5',
          text: '11...Qa5. The queen and the e6-bishop both hit a2, and the queen presses on the c3-knight.',
          arrows: [['a5', 'a2', 'red'], ['a5', 'c3', 'red']]
        },
        23: {
          title: 'A quiet guard',
          text: '12.a3. The pawn steps off a2, where two black pieces hit it, and takes b4 away from Black\'s queen and b-pawn. On a3 the b2-pawn guards it.',
          marks: ['b4']
        },
        24: {
          title: 'Rook behind the pawn',
          text: '12...Rab8. The rook goes behind the b-pawn to support ...b5–b4.',
          arrows: [['b8', 'b4', 'blue']]
        },
        25: {
          title: "White's h-pawn",
          text: '13.h4. White\'s h-pawn joins the attack and heads for h5.',
          arrows: [['h4', 'h5', 'green']]
        },
        26: {
          title: 'Two pawn storms',
          text: '13...b5. Black\'s b-pawn runs at White\'s king, just as White\'s pawns run at Black\'s. The engine calls it about level.',
          arrows: [['b5', 'b4', 'green']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Watch the f1-bishop',
      body:
        "A quick test in the Yugoslav: where is White's light-squared bishop? If it is on c4 or b3, ...d5 is usually impossible. If it is still on f1 and White has castled, look hard at ...d5."
    }
  ],
  takeaway:
    "Against 9.O-O-O, Black frees the game with 9...d5!, because no bishop on c4 guards d5. Against 9.g4, Black plays ...Be6, trades on d4, and races with ...Qa5 and ...b5.",
  lookAhead:
    "Module 3.7 leaves the Yugoslav for White's quieter tries against the Dragon: 6.Be2, 6.Bc4 and 6.f4.",
  drills: [
    {
      title: 'Free your game',
      prompt: "You're Black. White has just castled with 9.O-O-O, and the f1-bishop is still at home. Strike in the center, and take back the right way.",
      moves: `${YUGOSLAV} O-O-O d5 exd5 Nxd5 Nxc6 bxc6`,
      start: 17,
      side: 'black',
      hints: [
        'Your d-pawn can step forward to d5. Nothing extra guards d5.',
        'After exd5, take back with the knight. After Nxc6, take back toward the center.'
      ],
      success: '9...d5!, 10...Nxd5 and 11...bxc6. Black has a free, active game and the half-open b-file.'
    },
    {
      title: 'Meet the g-pawn',
      prompt: "You're Black. White has played 9.g4. Develop your bishop, trade on d4, and bring your queen to the queenside.",
      moves: `${YUGOSLAV} g4 Be6 O-O-O Nxd4 Bxd4 Qa5`,
      start: 17,
      side: 'black',
      hints: [
        'Your c8-bishop has a good square that covers d5 and c4.',
        'After 10.O-O-O, take the d4-knight. Then the queen goes to a5.'
      ],
      success: '9...Be6, 10...Nxd4 and 11...Qa5. The queen and bishop hit a2, and Black is ready for ...b5.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black to move. White has just played 9.O-O-O. What is the best answer?',
      moves: `${YUGOSLAV} O-O-O`,
      orientation: 'black',
      choices: [
        { text: '9...d5', correct: true, why: 'Right. Nothing extra guards d5 yet, so Black frees the game at once.' },
        { text: '9...Bd7', why: 'Too slow. White plays g4 and h4, and Black has missed the chance for ...d5. White is clearly better.' },
        { text: '9...h5', why: 'Playable but passive. The engine prefers striking in the center with 9...d5.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Why is ...d5 good after 9.O-O-O but bad after 9.Bc4?',
      choices: [
        { text: 'After 9.Bc4 the bishop covers d5', correct: true, why: 'Yes. With the bishop on c4, ...d5 usually just loses a pawn. Castling first leaves d5 without that extra guard.' },
        { text: 'After 9.O-O-O the white king can no longer defend e4', why: 'The king never defended e4. The difference is the bishop on c4.' },
        { text: 'After 9.Bc4 the d-pawn is pinned', why: 'Nothing pins the d-pawn. The bishop simply covers d5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9.O-O-O d5 10.exd5 Nxd5, which black pieces attack the d4-knight?',
      moves: `${YUGOSLAV} O-O-O d5 exd5 Nxd5`,
      orientation: 'black',
      choices: [
        { text: 'The c6-knight and the g7-bishop', correct: true, why: 'Right. With the f6-knight gone, the long diagonal is open, and the bishop joins the attack on d4.' },
        { text: 'The d5-knight and the queen', why: 'The d5-knight hits c3 and e3, not d4. The queen\'s line is blocked by the d5-knight.' },
        { text: 'Only the c6-knight', why: 'Look behind the f6-square, which is now empty. The g7-bishop also attacks d4.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 9.g4, why is 9...d5 a mistake?',
      moves: `${YUGOSLAV} g4`,
      orientation: 'black',
      choices: [
        { text: '10.g5 kicks the f6-knight before it can take on d5', correct: true, why: 'Exactly. The knight must retreat, and Black cannot hold the d5-pawn. White is clearly better.' },
        { text: 'It leaves the e7-pawn hanging', why: 'Nothing attacks e7. The real problem is 10.g5, which chases away the knight that should take back on d5.' },
        { text: "It isn't a mistake", why: 'It is. With the g-pawn on g4, White can hit the f6-knight with g5 at once.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: "In the 9.g4 Yugoslav, what is Black's usual plan?",
      choices: [
        { text: '...Be6, ...Nxd4, ...Qa5 and ...b5', correct: true, why: 'Right. Black trades on d4 and races on the queenside. The engine calls it about level.' },
        { text: 'An immediate ...d5', why: 'After 9.g4, 9...d5 runs into 10.g5. Black plays ...Be6 first.' },
        { text: '...h5 and ...Kh7, waiting', why: 'Black needs counterplay in a race. Waiting lets White attack.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9.O-O-O d5 10.exd5 Nxd5 11.Nxc6 bxc6, what has the pawn recapture given Black?',
      moves: `${YUGOSLAV} O-O-O d5 exd5 Nxd5 Nxc6 bxc6`,
      orientation: 'black',
      choices: [
        { text: 'A pawn that guards the d5-knight, and a half-open b-file toward White\'s king', correct: true, why: 'Yes. Taking toward the center keeps the knight strong and gives Black a file to use against the king.' },
        { text: 'A passed pawn on c6', why: "White's c2-pawn still stands in front of it on the same file, so the c6-pawn is not passed." },
        { text: 'An extra pawn', why: 'It only took back the knight. Material is level.' }
      ]
    }
  ],
  key: { name: 'Yugoslav: 9.O-O-O d5!', moves: `${YUGOSLAV} O-O-O d5`, orientation: 'black' },
  terms: [
    { term: 'Pawn break', meaning: 'A pawn move that attacks the enemy pawns to open lines, like ...d6–d5 in the Dragon.' },
    { term: 'Freeing move', meaning: 'A move that gives a cramped side more room for its pieces. In the Dragon, ...d5 is the classic one.' },
    { term: 'Recapture toward the center', meaning: 'Taking back with a pawn so that it moves closer to the middle of the board, where it controls more squares.' }
  ]
})
