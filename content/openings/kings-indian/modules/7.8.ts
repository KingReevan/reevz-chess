import { defineModule } from '../../../types'
import { AVERBAKH } from '../lines'

/** The queen trade after 6...e5? 7.dxe5 dxe5 8.Qxd8 Rxd8 */
const QUEENS_OFF = `${AVERBAKH} e5 dxe5 dxe5 Qxd8 Rxd8`
/** averbakh-6e5-trap: 9.Nd5! Nxd5 10.Bxd8 */
const TRAP = `${QUEENS_OFF} Nd5 Nxd5 Bxd8`
/** Another try (engine-checked): 9...Nbd7 10.Nxc7 Rb8 */
const NBD7 = `${QUEENS_OFF} Nd5 Nbd7 Nxc7 Rb8`

export default defineModule({
  id: '7.8',
  title: 'The Averbakh 6.Bg5: why ...e5 must wait',
  minutes: 10,
  level: 3,
  goals: [
    'Recognize the Averbakh: 5.Be2 and 6.Bg5',
    'See how 6...e5? 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5! wins material',
    'Know that the pin on f6 is the reason, and what to play instead'
  ],
  intro:
    "Against most White systems, ...e5 is Black's natural break. The Averbakh is different. With a bishop on g5, the natural 6...e5? runs into a queen trade and a pin that costs Black material. This module shows the trap move by move, so you never fall into it with Black, and always spot it with White.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The trap: 6...e5? 9.Nd5!',
      intro: 'Watch the diagonal from g5 to d8 once the queens come off.',
      moves: TRAP,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'The King\'s Indian set-up',
          text: '4...d6. White now chooses the system with the next two moves.',
          marks: ['c4', 'd4', 'e4']
        },
        9: {
          title: 'A flexible bishop',
          text: '5.Be2. The bishop covers g4, so Black\'s knight and bishop cannot use that square for free. The g1-knight waits: it can go to f3 later, or White can play f3 and Ne2.',
          arrows: [['e2', 'g4', 'green']]
        },
        10: {
          title: 'Black castles',
          text: '5...O-O. The usual move.',
          arrows: [['e8', 'g8', 'green']]
        },
        11: {
          title: 'The Averbakh',
          text: '6.Bg5. Named after Yuri Averbakh. The bishop eyes the f6-knight and makes the natural ...e5 a mistake for now.',
          arrows: [['g5', 'f6', 'red']]
        },
        12: {
          title: 'The natural break',
          text: '6...e5. It looks like every other King\'s Indian. Here it loses material.',
          ann: '?'
        },
        13: {
          title: 'White takes',
          text: '7.dxe5. White trades in the center.',
          marks: ['e5']
        },
        14: {
          title: 'Black takes back',
          text: '7...dxe5. Now the d-file is open from d1 to d8.',
          arrows: [['d1', 'd8', 'blue']]
        },
        15: {
          title: 'Queens off',
          text: '8.Qxd8. White trades queens. Black must take back with the rook.',
          marks: ['d8']
        },
        16: {
          title: 'The pin appears',
          text: '8...Rxd8. The rook now stands on d8, on the same diagonal as the g5-bishop and the f6-knight. If the knight moves, Bxd8 wins the rook.',
          arrows: [['g5', 'd8', 'yellow']],
          marks: ['f6', 'd8']
        },
        17: {
          title: 'The knight jump',
          text: '9.Nd5. The knight attacks the pinned f6-knight a second time, and also the c7-pawn, which nothing defends.',
          arrows: [['d5', 'f6', 'red'], ['d5', 'c7', 'red'], ['g5', 'f6', 'red']],
          ann: '!'
        },
        18: {
          title: "Black's best try",
          text: '9...Nxd5. Black takes the knight, but this lets the bishop take the rook.',
          marks: ['d5']
        },
        19: {
          title: 'The exchange is won',
          text: '10.Bxd8. White has won the exchange: a rook for a knight. The engine says White is clearly better.',
          marks: ['d8']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why the pin decides everything',
      body:
        "After 8...Rxd8, the f6-knight stands between the g5-bishop and the d8-rook. That is a **relative pin**: the knight may move, but then the rook is lost. Notice why the diagonal is open at all: 6...e5 moved the e-pawn off e7, and e7 lies on the line from g5 to d8.\n\n9.Nd5 adds a second attacker on f6, which is defended only by the g7-bishop. It also hits c7. Black has no good answer:\n\n- 9...Nxd5 10.Bxd8: White wins the exchange. This is Black's best try.\n- 9...Rxd5 10.exd5: the exchange again.\n- 9...Nbd7 10.Nxc7: White wins the c7-pawn and the knight hits the a8-rook (see the next board).\n\nThe engine says White is clearly better in all of them."
    },
    {
      kind: 'walkthrough',
      title: 'Defending f6 does not help: 9...Nbd7',
      intro: 'Black guards the f6-knight a second time. Now look at c7.',
      moves: NBD7,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'The pin',
          text: '8...Rxd8. The f6-knight is pinned to the d8-rook.',
          arrows: [['g5', 'd8', 'yellow']]
        },
        17: {
          title: 'Two threats',
          text: '9.Nd5. The knight hits f6 and c7.',
          arrows: [['d5', 'f6', 'red'], ['d5', 'c7', 'red']]
        },
        18: {
          title: 'Guarding f6',
          text: '9...Nbd7. The knight defends f6 a second time. But nothing has been done about c7.',
          arrows: [['d7', 'f6', 'green']],
          marks: ['c7']
        },
        19: {
          title: 'The pawn falls',
          text: "10.Nxc7. The engine's top choice. White wins a pawn, and the knight now attacks the a8-rook.",
          arrows: [['c7', 'a8', 'red']]
        },
        20: {
          title: 'The rook runs',
          text: '10...Rb8. The rook escapes. White is a clean pawn up, and the engine says White is clearly better.',
          arrows: [['a8', 'b8', 'green']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'The same trick, three times',
      body:
        "You have seen this pattern before. In the Exchange Variation, 9.Bg5 Nc6? 10.Nd5! uses the same pin and the same c7 target (Module 2.5). After 5.Nf3 O-O 6.Bg5, 6...e5? fails to the same 9.Nd5! (Module 5.8). Whenever a White bishop is on g5 and the queens might come off on d8, think twice before ...e5. Module 7.9 shows the safe ways to play: ...c5 first, or ...h6 to kick the bishop."
    }
  ],
  takeaway:
    'In the Averbakh, 6...e5? loses material: after 7.dxe5 dxe5 8.Qxd8 Rxd8 the f6-knight is pinned to the rook, and 9.Nd5! wins at least the exchange. Black must prepare ...e5 with ...h6, or play ...c5 first.',
  lookAhead:
    "Module 7.9 shows Black's sound answers to the Averbakh: 6...c5, 6...h6 and the knight moves, plus the Semi-Averbakh 6.Be3.",
  drills: [
    {
      title: 'Spring the trap',
      prompt: "You're White. Black has just played 6...e5?. Trade in the center, trade queens, then use the pin.",
      moves: TRAP,
      start: 12,
      side: 'white',
      hints: ['Take on e5, then take the queen on d8.', 'After 8...Rxd8, the f6-knight is pinned. Which knight jump hits it a second time and also hits c7?'],
      success: '7.dxe5, 8.Qxd8 and 9.Nd5!. After 9...Nxd5 10.Bxd8 White has won the exchange.'
    },
    {
      title: 'Take the c7-pawn',
      prompt: "You're White. The queens are off and the f6-knight is pinned. Jump into d5, and when Black guards f6 again, take what is left undefended.",
      moves: NBD7.split(' ').slice(0, 19).join(' '),
      start: 16,
      side: 'white',
      hints: ['9.Nd5 hits f6 and c7.', 'After 9...Nbd7, the c7-pawn has no defender.'],
      success: '9.Nd5 and 10.Nxc7. White wins a pawn and the knight hits the a8-rook.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 8.Qxd8 Rxd8, why is the f6-knight pinned?',
      moves: QUEENS_OFF,
      orientation: 'white',
      choices: [
        { text: 'If it moves, the g5-bishop takes the rook on d8', correct: true, why: 'Right. The knight stands on the diagonal between the bishop and the rook. It is a relative pin.' },
        { text: 'If it moves, Black is checkmated', why: 'There is no mate. The danger is losing the d8-rook.' },
        { text: 'It is pinned to the king on g8', why: 'The king is on g8, not on the g5–d8 diagonal. The rook on d8 is what the knight shields.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. The queens are off. What is the strongest move?',
      moves: QUEENS_OFF,
      orientation: 'white',
      choices: [
        { text: '9.Nd5', correct: true, why: 'Right. The knight hits the pinned f6-knight and the c7-pawn. White wins at least the exchange.' },
        { text: '9.Bxf6', why: 'It gives up the pin too early. After 9...Bxf6 White is only a little better.' },
        { text: '9.Nf3', why: 'A normal developing move, but it lets Black off the hook. The position is roughly equal.' }
      ]
    },
    {
      type: 'trap',
      prompt: "Black to move after 9.Nd5. What is Black's best try?",
      moves: `${QUEENS_OFF} Nd5`,
      orientation: 'black',
      choices: [
        { text: '9...Nxd5', correct: true, why: 'Right. After 10.Bxd8 Black has lost the exchange, but every other move is worse.' },
        { text: '9...Nbd7', why: 'It guards f6, but 10.Nxc7 wins a pawn and hits the a8-rook. That is worse for Black than 9...Nxd5.' },
        { text: '9...Nc6', why: 'This does nothing about the pin. White wins a whole piece.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Against the Averbakh, what should Black do instead of an early ...e5?',
      moves: AVERBAKH,
      orientation: 'black',
      choices: [
        { text: 'Play ...c5 first, or kick the bishop with ...h6 before ...e5', correct: true, why: 'Right. Module 7.9 shows both. Without the pin, ...e5 is safe again.' },
        { text: 'Play ...e5 anyway: it is the main King\'s Indian break', why: 'Not here. 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5! wins material.' },
        { text: 'Trade queens as early as possible', why: 'The queen trade on d8 is exactly what makes the pin work. Black should avoid it.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Which system has White chosen?',
      moves: AVERBAKH,
      orientation: 'white',
      choices: [
        { text: 'The Averbakh Variation', correct: true, why: 'Right. 5.Be2 and 6.Bg5, with the g1-knight still at home.' },
        { text: 'The Classical Variation', why: 'The Classical is 5.Nf3 and 6.Be2. Here the knight is still on g1 and the bishop went to g5.' },
        { text: 'The Sämisch Variation', why: 'The Sämisch is 5.f3. Here the f-pawn has not moved.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6...e5 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5 Nxd5 10.Bxd8, what has White won?',
      moves: TRAP,
      orientation: 'white',
      choices: [
        { text: 'The exchange: a rook for a knight', correct: true, why: 'Right. Black took the d5-knight, White took the d8-rook. White is clearly better.' },
        { text: 'A whole rook for nothing', why: 'Black did take something: the knight on d5. So it is a rook for a knight.' },
        { text: 'Just a pawn', why: 'More than that. A rook is worth 5 points, a knight 3.' }
      ]
    }
  ],
  key: { name: 'Averbakh trap: 6...e5? 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5!', moves: `${QUEENS_OFF} Nd5`, orientation: 'white' },
  terms: [
    { term: 'Averbakh Variation', meaning: 'The system 5.Be2 O-O 6.Bg5, named after Yuri Averbakh.' },
    { term: 'Relative pin', meaning: 'A pin against a piece other than the king. The pinned piece may move, but the piece behind it is then lost.' },
    { term: 'Winning the exchange', meaning: 'Winning a rook for a bishop or knight.' }
  ]
})
