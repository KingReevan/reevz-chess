import { defineModule } from '../../../types'
import { NAJDORF, NAJDORF_BG5 } from '../lines'

/** najdorf-bg5-nbd7: 7...Nbd7 8.Qf3 Qc7 9.O-O-O b5 */
const MODERN = `${NAJDORF_BG5} Nbd7 Qf3 Qc7 O-O-O b5`
/** najdorf-bg5-be7: 7...Be7 8.Qf3 Qc7 9.O-O-O Nbd7 10.g4 b5 11.Bxf6 Nxf6 12.g5 Nd7 13.f5 */
const OLD = `${NAJDORF_BG5} Be7 Qf3 Qc7 O-O-O Nbd7 g4 b5 Bxf6 Nxf6 g5 Nd7 f5`

export default defineModule({
  id: '2.6',
  title: '6.Bg5 e6 7.f4: the classical attack',
  minutes: 11,
  level: 2,
  goals: [
    'Understand the pin on f6 and what 7.f4 prepares',
    "Learn Black's set-up: ...Be7 or ...Nbd7, ...Qc7 and ...b5",
    "Follow White's pawn storm with g4–g5 and f4–f5"
  ],
  intro:
    "Before the English Attack took over, 6.Bg5 was White's main weapon against the Najdorf, and it is still one of the sharpest. White pins the f6-knight, pushes the f-pawn and castles long. This module shows what White is aiming for, and how Black untangles and hits back.",
  sections: [
    {
      kind: 'walkthrough',
      title: "The pin and Black's modern set-up",
      intro: 'Watch the line from g5 to d8. When is the f6-knight pinned, and when is it free again?',
      moves: MODERN,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The Najdorf',
          text: '5...a6. This time White chooses the classical attack.',
          arrows: [['c1', 'g5', 'blue']]
        },
        11: {
          title: 'Bishop to g5',
          text: "6.Bg5. The bishop attacks the f6-knight. The e7-pawn still stands between the knight and Black's queen, so there is no pin yet.",
          arrows: [['g5', 'f6', 'red']],
          marks: ['e7']
        },
        12: {
          title: 'Now it is a pin',
          text: '6...e6. Black opens a path for the f8-bishop. But e7 is now empty, so the f6-knight is pinned: if it moves, Bxd8 wins the queen.',
          arrows: [['g5', 'd8', 'red']],
          marks: ['f6']
        },
        13: {
          title: 'The point: f4',
          text: '7.f4. White prepares e4–e5, hitting the pinned knight, or f4–f5, hitting e6. The pawn also guards the g5-bishop.',
          arrows: [['e4', 'e5', 'blue'], ['f4', 'f5', 'blue'], ['f4', 'g5', 'green']]
        },
        14: {
          title: 'A knight to help',
          text: '7...Nbd7. The knight backs up f6, so after Bxf6 Black can take back with a knight. It also watches e5, which makes e4–e5 harder.',
          arrows: [['d7', 'f6', 'green'], ['d7', 'e5', 'green']]
        },
        15: {
          title: 'Queen to f3',
          text: '8.Qf3. The queen guards e4 and clears d1, so White can castle long.',
          arrows: [['f3', 'e4', 'green']]
        },
        16: {
          title: 'The pin is gone',
          text: "8...Qc7. The queen leaves d8, so the f6-knight is no longer pinned. On c7 the queen stands on the half-open c-file, which points at White's king after long castling.",
          arrows: [['c7', 'c3', 'blue']],
          marks: ['d8']
        },
        17: {
          title: 'White castles long',
          text: '9.O-O-O. The king leaves the center, and the rook on d1 now backs up the d4-knight.',
          arrows: [['d1', 'd4', 'green']]
        },
        18: {
          title: 'Counterattack',
          text: '9...b5. Black starts the queenside play: ...b4 to kick the c3-knight, and ...Bb7 to hit e4. The position is roughly balanced, and sharp for both sides.',
          arrows: [['b5', 'b4', 'blue'], ['c8', 'b7', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'What each side wants',
      body:
        "**White:** Bg5 to pin, f4 to support a pawn push, Qf3 and O-O-O, then e4–e5 or a storm with g4–g5 and f4–f5.\n\n**Black:** first get out of the pin (with ...Be7, or by moving the queen with ...Qc7), guard e5 with ...Nbd7, then counterattack with ...b5–b4 and ...Bb7. Black's king often waits in the center until it is clear where it is safest."
    },
    {
      kind: 'walkthrough',
      title: "White's storm: the old main line",
      intro: 'Here Black breaks the pin with 7...Be7. Watch White push the g- and f-pawns.',
      moves: OLD,
      start: 13,
      orientation: 'white',
      steps: {
        13: {
          title: 'The same set-up',
          text: '7.f4. Bishop on g5, pawns on e4 and f4. The f6-knight is pinned to the queen.',
          arrows: [['g5', 'd8', 'red']]
        },
        14: {
          title: 'Breaking the pin',
          text: '7...Be7. The bishop steps between the knight and the queen. The knight is free to move again.',
          arrows: [['e7', 'f6', 'green']]
        },
        15: {
          title: 'Queen to f3',
          text: '8.Qf3. Guarding e4 and preparing long castling, as before.',
          arrows: [['f3', 'e4', 'green']]
        },
        16: {
          title: 'Queen to c7',
          text: "8...Qc7. Black's queen moves to the c-file.",
          arrows: [['c7', 'c3', 'blue']]
        },
        17: {
          title: 'Long castling',
          text: '9.O-O-O. The kings will be on opposite sides, so a pawn race is coming.',
          marks: ['c1']
        },
        18: {
          title: 'Backing up f6',
          text: '9...Nbd7. The knight guards f6 and e5.',
          arrows: [['d7', 'f6', 'green'], ['d7', 'e5', 'green']]
        },
        19: {
          title: 'The g-pawn marches',
          text: '10.g4. White threatens g4–g5, kicking the f6-knight away from the center.',
          arrows: [['g4', 'g5', 'blue']]
        },
        20: {
          title: 'Black answers on the queenside',
          text: '10...b5. Black does not wait. The b-pawn is heading for b4.',
          arrows: [['b5', 'b4', 'blue']]
        },
        21: {
          title: 'Trade to gain time',
          text: '11.Bxf6. White gives up the bishop for the knight. The point: the next pawn push will hit the knight that takes back.',
          marks: ['f6']
        },
        22: {
          title: 'The knight takes back',
          text: "11...Nxf6. This is why Black put a knight on d7: the recapture keeps Black's pawns healthy.",
          marks: ['f6']
        },
        23: {
          title: 'Kick the knight',
          text: '12.g5. The pawn attacks the f6-knight, and White gains a tempo.',
          arrows: [['g5', 'f6', 'red']]
        },
        24: {
          title: 'Back to d7',
          text: '12...Nd7. The knight steps back. From d7 it can later jump to c5.',
          arrows: [['d7', 'c5', 'blue']]
        },
        25: {
          title: 'The f-pawn joins',
          text: "13.f5. The pawn hits e6, trying to open lines against Black's king. The engine prefers White a little, but Black has counterplay with ...b4 and ...Nc5.",
          arrows: [['f5', 'e6', 'red']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Count the pins',
      body:
        "A pin like Bg5 against a knight with the queen behind it is not absolute: the knight can legally move, but then Bxd8 wins the queen. Black has two ways out: put a piece in between (...Be7) or move the queen away (...Qc7, or ...Qb6, which Module 2.7 covers)."
    }
  ],
  takeaway:
    "6.Bg5 pins the f6-knight once Black plays ...e6, and 7.f4 prepares e4–e5 or f4–f5. Black unpins with ...Be7 or ...Qc7, guards e5 with ...Nbd7, and counterattacks with ...b5.",
  lookAhead:
    "Black has a much sharper answer to 7.f4: 7...Qb6, the Poisoned Pawn. Module 2.7 explains the idea, and the famous Göteborg sacrifice.",
  drills: [
    {
      title: "Black's modern set-up",
      prompt: "You're Black. White has played 6.Bg5. Open your bishop, back up the f6-knight, unpin it with your queen, then start your queenside play.",
      moves: MODERN,
      start: 11,
      side: 'black',
      hints: [
        'Start with the e-pawn. Then bring the b8-knight to the square where it guards f6 and e5.',
        'Move the queen off d8 to c7, and finish with the b-pawn.'
      ],
      success: '6...e6, 7...Nbd7, 8...Qc7 and 9...b5. The knight is unpinned, e5 is covered, and Black has queenside play.'
    },
    {
      title: "White's storm",
      prompt: "You're White in the old main line. Black has broken the pin with 7...Be7. Bring the queen out, castle long, and storm with the g- and f-pawns.",
      moves: OLD,
      start: 14,
      side: 'white',
      hints: [
        'The queen goes to a square where it guards e4. Then castle long and push the g-pawn two squares.',
        'Trade on f6 so that g5 hits the knight that takes back. Finish by pushing the f-pawn at e6.'
      ],
      success: '8.Qf3, 9.O-O-O, 10.g4, 11.Bxf6, 12.g5 and 13.f5. White has gained time with every pawn move.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 6.Bg5 e6, why is the f6-knight pinned?',
      moves: `${NAJDORF} Bg5 e6`,
      orientation: 'black',
      choices: [
        { text: 'The g5-bishop attacks it, and the queen on d8 stands behind it', correct: true, why: 'Right. If the knight moves, Bxd8 takes the queen. ...e6 emptied e7, which completed the line.' },
        { text: 'The e4-pawn attacks it', why: 'The e4-pawn attacks d5 and f5, not f6. The pin comes from the bishop on g5.' },
        { text: 'It has no legal moves', why: 'It can legally move, but then the queen falls. That is what makes it a pin.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 7.f4 prepare?',
      moves: NAJDORF_BG5,
      orientation: 'white',
      choices: [
        { text: 'e4–e5 against the pinned knight, or f4–f5 against e6', correct: true, why: 'Yes. Both pawn pushes need the f-pawn first. f4 also guards the g5-bishop.' },
        { text: 'Castling short', why: 'White usually castles long in this line, with Qf3 and O-O-O.' },
        { text: 'Trapping the g5-bishop', why: "Nothing traps White's bishop. f4 supports it and prepares e5 or f5." }
      ]
    },
    {
      type: 'concept',
      prompt: 'How does 8...Qc7 help Black in the modern line?',
      moves: `${NAJDORF_BG5} Nbd7 Qf3 Qc7`,
      orientation: 'black',
      choices: [
        { text: 'The queen leaves d8, so the f6-knight is no longer pinned', correct: true, why: 'Right. Nothing valuable stands behind the knight now, and the queen eyes the c-file.' },
        { text: 'It attacks the d4-knight', why: 'From c7 the queen does not reach d4. Its job is to get off d8 and onto the c-file.' },
        { text: 'It wins the b2-pawn', why: 'That is the Poisoned Pawn idea with ...Qb6 (Module 2.7). From c7 the queen does not attack b2.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the old main line, why does White play 11.Bxf6?',
      moves: `${NAJDORF_BG5} Be7 Qf3 Qc7 O-O-O Nbd7 g4 b5 Bxf6`,
      orientation: 'white',
      choices: [
        { text: 'So that g4–g5 will hit the knight that takes back', correct: true, why: 'Yes. After 11...Nxf6 12.g5, the knight has to move again, and White gains a tempo for the attack.' },
        { text: 'To win a pawn', why: 'It is a trade, bishop for knight. No pawn is won.' },
        { text: 'Because the bishop was trapped', why: 'The bishop was safe. White trades it to speed up the pawn storm.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Which Black seventh move breaks the pin by putting a piece between the f6-knight and the queen?',
      moves: NAJDORF_BG5,
      orientation: 'black',
      choices: [
        { text: '7...Be7', correct: true, why: 'Right. The bishop stands between f6 and d8, so the knight is free.' },
        { text: '7...Nbd7', why: 'A good move, but it does not break the pin. It backs up f6 so Black can recapture with a knight.' },
        { text: '7...b5', why: 'A queenside move. The knight on f6 stays pinned.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does Black put the queen\'s knight on d7 in these lines, and not on c6?',
      choices: [
        { text: 'From d7 it guards f6 and e5', correct: true, why: 'Yes. After Bxf6 it can take back, keeping the pawns healthy, and it makes e4–e5 harder.' },
        { text: 'From d7 it attacks the d4-knight', why: 'A knight on d7 does not attack d4. A knight on c6 would, but it would not guard f6.' },
        { text: 'On c6 it would block the c-pawn', why: "Black's c-pawn was traded on move 3. The reason is the two squares d7 guards: f6 and e5." }
      ]
    }
  ],
  key: { name: 'Najdorf: 6.Bg5 e6 7.f4', moves: NAJDORF_BG5, orientation: 'white' },
  terms: [
    { term: 'Pin', meaning: 'A piece that should not move, because a more valuable piece behind it would then be captured.' },
    { term: 'Unpin', meaning: 'Getting out of a pin, by putting a piece in between or by moving the piece behind.' },
    { term: 'Counterplay', meaning: "Active chances for the defending side, usually an attack of its own on the other wing." }
  ]
})
