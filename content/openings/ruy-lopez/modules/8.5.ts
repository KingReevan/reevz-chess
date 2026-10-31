import { defineModule } from '../../../types'
import { RUY } from '../../../lines'

const SETUP = `${RUY} d6 d4 Bd7 Nc3 Nf6 O-O Be7 Re1`
const MAIN = `${SETUP} exd4 Nxd4 O-O`
const TRAP = `${SETUP} O-O Bxc6 Bxc6 dxe5 dxe5 Qxd8 Raxd8 Nxe5`
const GAME = `${TRAP} Bxe4 Nxe4 Nxe4 Nd3 f5 f3 Bc5+ Nxc5 Nxc5 Bg5 Rd5 Be7`

export default defineModule({
  id: '8.5',
  title: 'Old Steinitz 3...d6 and the Tarrasch trap',
  minutes: 12,
  level: 2,
  goals: [
    'See why 3...d6 leaves the c6-knight pinned once d4 arrives',
    'Know the safe move 7...exd4 and the cramped position it leads to',
    'Spring the Tarrasch trap after 7...O-O? as White'
  ],
  intro:
    "3...d6 is the most natural way to defend e5: just put a pawn behind it. It looks rock solid. So why is it rare today? Because after d4 Black can't hold e5, and one natural move walks into a famous trap.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The safe way: give up the centre',
      intro: 'Watch the c6-knight. It is pinned more often than it looks.',
      moves: MAIN,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'A pawn guards e5',
          text: '3...d6. Black defends e5 with a pawn. But the d-pawn has left d7, so the b5-bishop, the c6-knight and Black\'s king now stand on one diagonal.',
          arrows: [['d6', 'e5', 'green'], ['b5', 'e8', 'yellow']]
        },
        7: {
          title: 'The pin bites',
          text: "4.d4. White attacks e5 twice. The c6-knight can't help: it's pinned to the king, so it can't take on d4 or recapture on e5.",
          arrows: [['d4', 'e5', 'red'], ['f3', 'e5', 'red'], ['b5', 'e8', 'red']]
        },
        8: {
          title: 'Unpin',
          text: '4...Bd7. The bishop steps between, so the knight is free again.',
          arrows: [['c8', 'd7', 'green']]
        },
        9: {
          title: 'Develop',
          text: '5.Nc3. The knight develops and guards e4.',
          arrows: [['c3', 'e4', 'green']]
        },
        10: {
          title: 'Hit e4',
          text: '5...Nf6. Black develops and attacks e4.',
          arrows: [['f6', 'e4', 'red']]
        },
        11: {
          title: 'Castle',
          text: '6.O-O. White gets the king safe and gets the rook ready for e1.'
        },
        12: {
          title: 'Ready to castle',
          text: '6...Be7. Black clears the way to castle. It looks like castling is next, but wait.'
        },
        13: {
          title: 'The trap is set',
          text: '7.Re1. Now e4 is guarded twice. This quiet move sets up the Tarrasch trap. Black must release the tension now.',
          arrows: [['e1', 'e4', 'green'], ['c3', 'e4', 'green']]
        },
        14: {
          title: 'Give up the centre',
          text: '7...exd4. Black takes on d4. There is no pawn on e5 any more, so there is nothing for White to win there.',
          ann: '!'
        },
        15: {
          title: 'White recaptures',
          text: '8.Nxd4. White has a strong knight on d4 and a pawn on e4.',
          arrows: [['d4', 'c6', 'blue']]
        },
        16: {
          title: 'Cramped but solid',
          text: '8...O-O. Now castling is safe. White has more space, and Black must defend patiently. That is the Old Steinitz in a nutshell.',
          marks: ['e4', 'd4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The Tarrasch trap: 7...O-O?',
      intro: 'Same position, but Black castles. White wins a pawn by force.',
      moves: TRAP,
      start: 13,
      orientation: 'white',
      steps: {
        13: {
          title: 'The critical moment',
          text: "White's rook guards e4. Black still has a pawn on e5 that is attacked twice.",
          marks: ['e5']
        },
        14: {
          title: 'The natural mistake',
          text: '7...O-O. Castling looks perfect, but it ignores e5.',
          ann: '?'
        },
        15: {
          title: 'Remove the defender',
          text: '8.Bxc6. The Spanish idea in its purest form: take the knight that guards e5.',
          arrows: [['b5', 'c6', 'red']],
          ann: '!'
        },
        16: {
          title: 'Bishop takes back',
          text: '8...Bxc6. The bishop recaptures and now looks at e4.',
          arrows: [['c6', 'e4', 'blue']]
        },
        17: {
          title: 'Open the d-file',
          text: '9.dxe5. White takes on e5 and opens the d-file between the queens.',
          arrows: [['d1', 'd8', 'blue']]
        },
        18: {
          title: 'Black recaptures',
          text: '9...dxe5. Material is level for now. Notice that nothing guards the new pawn on e5.',
          arrows: [['d8', 'd1', 'blue']]
        },
        19: {
          title: 'Trade queens',
          text: '10.Qxd8. Trade queens first. If 10.Nxe5 at once, 10...Qxd1 forces the e1-rook or the c3-knight to recapture, and e4 loses a guard.'
        },
        20: {
          title: 'Look at e5',
          text: '10...Raxd8. The queens are gone and both guards of e4 are still in place. Now e5 can be taken.',
          arrows: [['f3', 'e5', 'red']],
          marks: ['e5']
        },
        21: {
          title: 'A clean pawn',
          text: "11.Nxe5. White wins a pawn. Black can't win it back on e4: that pawn is attacked twice and guarded twice, by the c3-knight and the e1-rook.",
          arrows: [['c3', 'e4', 'green'], ['e1', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Tarrasch-Marco, Dresden 1892',
      intro: 'Marco tried to win the pawn back anyway. Tarrasch showed why that fails.',
      moves: GAME,
      start: 21,
      orientation: 'white',
      steps: {
        21: {
          title: 'A pawn down',
          text: "Black is a pawn down. Marco looked at e4 and decided to grab it.",
          marks: ['e4']
        },
        22: {
          title: 'The grab',
          text: '11...Bxe4. Black takes, planning to recapture with the knight.',
          ann: '?'
        },
        23: {
          title: 'White takes back',
          text: '12.Nxe4. The c3-knight takes the bishop.'
        },
        24: {
          title: 'Material is level',
          text: "12...Nxe4. Black has the pawn back. But the e4-knight is attacked by the e1-rook, and nothing guards it.",
          arrows: [['e1', 'e4', 'red']],
          marks: ['e4']
        },
        25: {
          title: 'The quiet killer',
          text: "13.Nd3. Not 13.Rxe4?, because 13...Rd1+ 14.Re1 Rxe1 is mate on the back rank. Nd3 blocks the d-file, and now the e4-knight can't move without leaving the e7-bishop to the rook.",
          arrows: [['e1', 'e4', 'red'], ['e4', 'e7', 'yellow']],
          marks: ['d3'],
          ann: '!'
        },
        26: {
          title: 'Guard the knight',
          text: '13...f5. Black protects the knight with a pawn.',
          arrows: [['f5', 'e4', 'green']]
        },
        27: {
          title: 'Attack it again',
          text: "14.f3. A pawn attacks the knight. It still can't run without losing the bishop on e7.",
          arrows: [['f3', 'e4', 'red']]
        },
        28: {
          title: 'Escape with check',
          text: '14...Bc5+. The bishop leaves e7 with check, so the knight is free again.',
          arrows: [['c5', 'g1', 'red']]
        },
        29: {
          title: 'Take the bishop',
          text: '15.Nxc5. White swaps knight for bishop.'
        },
        30: {
          title: 'The knight escapes',
          text: "15...Nxc5. Material is level again. But Tarrasch has one more shot.",
          marks: ['c5', 'f8']
        },
        31: {
          title: 'Hit the rook',
          text: '16.Bg5. The bishop attacks the d8-rook and eyes e7, where it would hit both the f8-rook and the c5-knight.',
          arrows: [['g5', 'd8', 'red'], ['g5', 'e7', 'blue']]
        },
        32: {
          title: 'Rook to safety',
          text: '16...Rd5. The rook escapes and guards the c5-knight.',
          arrows: [['d5', 'c5', 'green']]
        },
        33: {
          title: 'The fork',
          text: '17.Be7. The bishop forks the f8-rook and the c5-knight. Black will lose the exchange.',
          arrows: [['e7', 'f8', 'red'], ['e7', 'c5', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'history',
      title: 'How the game ended',
      body:
        "Tarrasch beat Marco at Dresden 1892. After 17...Re8 18.c4 the d5-rook is attacked and the c5-knight can't be held, so Black loses at least the exchange. Marco resigned."
    },
    {
      kind: 'tip',
      title: 'Why the Modern Steinitz is more popular',
      body:
        "In the Old Steinitz, the bishop on b5 never gets asked to leave, so the pin on c6 keeps causing trouble. With 3...a6 4.Ba4 d6 (the Modern Steinitz, module 8.7), Black can always break the pin with ...b5."
    }
  ],
  takeaway:
    "After 3...d6 4.d4, Black can't hold e5. Once White plays Re1, Black must play ...exd4. Castling first (7...O-O?) allows Bxc6, dxe5, Qxd8 and Nxe5, winning a pawn: the Tarrasch trap.",
  lookAhead:
    'Next: 3...g6 and 3...Nge7, two ways to support e5 without blocking the f8-bishop.',
  drills: [
    {
      title: 'Avoid the trap',
      prompt: "You're Black. Play the Old Steinitz safely, up to castling on move 8.",
      moves: MAIN,
      start: 5,
      side: 'black',
      hints: [
        'Guard e5 with a pawn, unpin the knight with your light-squared bishop, then develop the kingside.',
        'When the rook reaches e1, take on d4 before you castle.'
      ],
      success: '3...d6, 4...Bd7, 5...Nf6, 6...Be7, 7...exd4! and 8...O-O. Cramped, but no trap.'
    },
    {
      title: 'Spring the Tarrasch trap',
      prompt: "You're White. Black just castled with 7...O-O?. Win the e5-pawn, then punish Black's attempt to win it back.",
      moves: `${TRAP} Bxe4 Nxe4 Nxe4 Nd3`,
      start: 14,
      side: 'white',
      hints: [
        'Remove the defender of e5, open the d-file, trade queens, then take the pawn.',
        "After ...Nxe4, don't take with the rook: watch your back rank. Retreat the e5-knight to block the d-file."
      ],
      success: '8.Bxc6, 9.dxe5, 10.Qxd8, 11.Nxe5, 12.Nxe4 and 13.Nd3! The e4-knight is stuck on the e-file in front of the e7-bishop.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 3...d6 4.d4, why can\'t the c6-knight help defend e5?',
      moves: `${RUY} d6 d4`,
      orientation: 'black',
      choices: [
        { text: "It's pinned to the king by the b5-bishop", correct: true, why: "Right. With d7 empty, moving the knight would expose e8 to the bishop. That's why 4...Bd7 comes next." },
        { text: 'The d4-pawn attacks it', why: 'A pawn on d4 attacks c5 and e5, not c6. The problem is the bishop on b5.' },
        { text: 'It is needed to guard the d6-pawn', why: 'The knight is stuck because of the pin, not because of d6.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just played 7.Re1. What should Black play?',
      moves: SETUP,
      orientation: 'black',
      choices: [
        { text: '7...exd4', correct: true, why: 'Yes. Black gives up the centre, so there is no e5-pawn left to win.' },
        { text: '7...O-O', why: 'The Tarrasch trap: 8.Bxc6 Bxc6 9.dxe5 dxe5 10.Qxd8 Raxd8 11.Nxe5 wins a pawn.' },
        { text: '7...Nxe4', why: 'e4 is guarded twice. After 8.Nxe4 White wins a piece for a pawn.' }
      ]
    },
    {
      type: 'trap',
      prompt: "White to move. Black's knight on e4 is attacked by the rook. Why not 13.Rxe4?",
      moves: `${TRAP} Bxe4 Nxe4 Nxe4`,
      orientation: 'white',
      choices: [
        { text: '13...Rd1+ 14.Re1 Rxe1 is checkmate', correct: true, why: "Correct. With the rook gone from e1, White's back rank is defenceless. 13.Nd3 blocks the d-file first." },
        { text: 'The rook would be pinned', why: "Nothing pins the rook. The danger is Black's rook landing on d1." },
        { text: 'Black recaptures with the bishop', why: "The e7-bishop can't reach e4. The danger is the back-rank mate." }
      ]
    },
    {
      type: 'concept',
      prompt: 'White to move. Black just castled into the Tarrasch trap. What is the first move of the combination?',
      moves: `${SETUP} O-O`,
      orientation: 'white',
      choices: [
        { text: '8.Bxc6', correct: true, why: 'Yes. Taking the knight that guards e5 starts the whole sequence: 9.dxe5, 10.Qxd8 and 11.Nxe5.' },
        { text: '8.dxe5', why: 'Too early: 8...dxe5 and the c6-knight still guards e5.' },
        { text: '8.Nxe5', why: 'The knight and d6-pawn guard e5, so Black just takes back. Remove the knight first.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'White has just won a pawn with 11.Nxe5. What is this trap called?',
      moves: TRAP,
      orientation: 'white',
      choices: [
        { text: 'The Tarrasch trap', correct: true, why: 'Yes. Tarrasch used it against Marco at Dresden 1892.' },
        { text: "The Noah's Ark trap", why: "Noah's Ark traps a bishop on b3 with ...c5 and ...c4." },
        { text: 'The Fishing Pole', why: 'The Fishing Pole is a Berlin trap with ...Ng4 and ...h5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is the Old Steinitz (3...d6) more uncomfortable than the Modern Steinitz (3...a6 4.Ba4 d6)?',
      choices: [
        { text: "Without ...a6, Black can't break the pin on c6 with ...b5", correct: true, why: 'Right. In the Modern Steinitz, ...b5 is always available to chase the bishop away.' },
        { text: '3...d6 does not defend e5', why: 'It does defend e5. The problem is the pin on c6 after d4.' },
        { text: 'White cannot play d4 against the Modern Steinitz', why: 'White can, but there Black has the ...b5 resource.' }
      ]
    }
  ],
  key: { name: 'Old Steinitz: 7...exd4!', moves: MAIN.split(' ').slice(0, -2).join(' '), orientation: 'black' },
  terms: [
    { term: 'Back rank', meaning: "A player's first rank. A king stuck behind its own pawns there can be mated by a rook or queen." },
    { term: 'The exchange', meaning: 'Winning the exchange means winning a rook for a bishop or knight.' },
    { term: 'Pin', meaning: 'A piece cannot move off a line without exposing a more valuable piece behind it.' },
    { term: 'Fork', meaning: 'One piece attacks two or more enemy pieces at the same time.' }
  ]
})
