import { defineModule } from '../../../types'
import { MORRA_ACCEPTED } from '../lines'

/** 5...d6 6.Bc4 Nf6 7.e5: the critical position */
const E5 = `${MORRA_ACCEPTED} d6 Bc4 Nf6 e5`
/** morra-nf6-e5-trap: 7...Nxe5?? 8.Nxe5 dxe5 9.Bxf7+ Kxf7 10.Qxd8 */
const TRAP = `${E5} Nxe5 Nxe5 dxe5 Bxf7+ Kxf7 Qxd8`
/** morra-nf6-e5-dxe5: 7...dxe5 8.Qxd8+ Nxd8? 9.Nb5! Rb8 10.Nxe5 */
const NB5 = `${E5} dxe5 Qxd8+ Nxd8 Nb5 Rb8 Nxe5`
/** morra-nf6-ng4: 7...Ng4! 8.exd6 exd6 9.O-O Be7 */
const NG4 = `${E5} Ng4 exd6 exd6 O-O Be7`

export default defineModule({
  id: '7.6',
  title: 'Morra traps for White: e5 and Bxf7+',
  minutes: 11,
  level: 2,
  goals: [
    'Spring the 7...Nxe5?? trap with Bxf7+ and Qxd8',
    'See the 9.Nb5! trick after 8...Nxd8?',
    'Defend correctly with 7...Ng4!'
  ],
  intro:
    "After 5...d6 6.Bc4 Nf6, White can hit the knight with 7.e5. Black's natural captures on e5 open the d-file, and the Morra bishop on c4 is waiting to punish that. Which captures lose, and what should Black play instead?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The trap: 7...Nxe5??',
      intro: "Before you press Next at 8...dxe5, look at the d-file and at f7. What guards Black's queen?",
      moves: TRAP,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'A good developing move',
          text: "6...Nf6. A natural move, and a perfectly good one. Notice that Black's e-pawn is still on e7, so f7 is guarded only by the king.",
          arrows: [['c4', 'f7', 'yellow']]
        },
        13: {
          title: 'The pawn attacks',
          text: '7.e5. The pawn hits the f6-knight. It is attacked by the d6-pawn and the c6-knight, and only the f3-knight defends it.',
          arrows: [['e5', 'f6', 'red'], ['d6', 'e5', 'red'], ['c6', 'e5', 'red']]
        },
        14: {
          title: 'The knight grabs',
          text: '7...Nxe5. The c6-knight takes the pawn. It looks safe, but watch what the next trade does to the d-file.',
          marks: ['e5'],
          ann: '??'
        },
        15: {
          title: 'Trade knights',
          text: '8.Nxe5. White takes the knight. Taking back opens the d-file, and not taking back simply loses a knight for a pawn.',
          marks: ['e5']
        },
        16: {
          title: 'The d-file opens',
          text: "8...dxe5. Black is two pawns up, but the d-file is now open. White's queen faces Black's queen, and only the king on e8 guards it.",
          arrows: [['d1', 'd8', 'red'], ['e8', 'd8', 'green']]
        },
        17: {
          title: 'Check on f7',
          text: "9.Bxf7+. The bishop takes with check. The king can't go to d7, which White's queen covers, or to e7, where Black's own pawn stands. It must take the bishop.",
          arrows: [['f7', 'e8', 'red']],
          ann: '!'
        },
        18: {
          title: 'The guard is gone',
          text: '9...Kxf7. The king has left e8, and with it the only piece that guarded the queen.',
          arrows: [['d1', 'd8', 'red']],
          marks: ['d8']
        },
        19: {
          title: 'The queen falls',
          text: '10.Qxd8. White wins the queen. Nothing can take back, because the c8-bishop blocks the a8-rook. White is winning.',
          marks: ['d8']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The other capture: 7...dxe5 and 9.Nb5!',
      intro: 'Taking with the pawn is less bad, but Black must recapture on d8 correctly.',
      moves: NB5,
      start: 13,
      orientation: 'white',
      steps: {
        13: {
          title: 'Same position',
          text: '7.e5. This time Black takes with the d-pawn.',
          arrows: [['e5', 'f6', 'red']]
        },
        14: {
          title: 'Queens face off',
          text: '7...dxe5. Black is two pawns up, but the d-file is open and the queens face each other.',
          arrows: [['d1', 'd8', 'red']],
          ann: '?!'
        },
        15: {
          title: 'Queens off with check',
          text: '8.Qxd8+. White trades queens with check. Black can take back with the king or with the knight.',
          arrows: [['d8', 'e8', 'red']]
        },
        16: {
          title: 'The wrong recapture',
          text: '8...Nxd8. The knight takes back. Now nothing guards the c7-square: the king on e8 is too far away.',
          marks: ['c7'],
          ann: '?'
        },
        17: {
          title: 'The fork threat',
          text: '9.Nb5. The knight threatens Nc7+, which would fork the king on e8 and the rook on a8.',
          arrows: [['b5', 'c7', 'red'], ['c7', 'e8', 'red'], ['c7', 'a8', 'red']],
          ann: '!'
        },
        18: {
          title: 'The rook runs',
          text: '9...Rb8. The rook steps away from the fork.',
          arrows: [['a8', 'b8', 'blue']]
        },
        19: {
          title: 'Pawn back, better game',
          text: "10.Nxe5. White wins one pawn back. Black is still a pawn up, but Black's pieces are tangled on the back rank while White's are very active, so White is better.",
          marks: ['e5']
        }
      }
    },
    {
      kind: 'text',
      title: 'Take back with the king',
      body:
        "After 7...dxe5 8.Qxd8+, the right recapture is **8...Kxd8**. The king guards c7, so 9.Nb5 has no fork. White is still a bit better, because Black's king has lost the right to castle. Watch f7, though: 9.Ng5 threatens Nxf7+, forking the king and the h8-rook.\n\nEven so, Black has a cleaner answer to 7.e5: don't take on e5 at all."
    },
    {
      kind: 'walkthrough',
      title: 'The right answer: 7...Ng4!',
      intro: 'The knight jumps forward and attacks e5, and the d-file stays closed.',
      moves: NG4,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'The critical moment',
          text: "7.e5. The f6-knight is attacked. Black must not open the d-file while White's bishop aims at f7.",
          arrows: [['e5', 'f6', 'red'], ['c4', 'f7', 'red']]
        },
        14: {
          title: 'A counterattack',
          text: '7...Ng4. The knight attacks e5 too. Now the d6-pawn, the c6-knight and the g4-knight all hit e5, and only the f3-knight defends it. The d6-pawn still blocks the d-file.',
          arrows: [['g4', 'e5', 'red'], ['d6', 'e5', 'red'], ['c6', 'e5', 'red']],
          ann: '!'
        },
        15: {
          title: 'White swaps the pawn',
          text: '8.exd6. The e5-pawn could not be held, so White trades it for the d6-pawn.',
          marks: ['d6']
        },
        16: {
          title: 'Keep the file closed',
          text: '8...exd6. Black takes back with the e-pawn. The new d6-pawn keeps the queens apart, and the f8-bishop can come out.',
          arrows: [['f8', 'e7', 'blue']]
        },
        17: {
          title: 'White castles',
          text: '9.O-O. White gets the king safe. Black is still a pawn up.',
          arrows: [['e1', 'g1', 'green']]
        },
        18: {
          title: 'Roughly equal',
          text: '9...Be7. Black develops and gets ready to castle. The engine calls the position roughly equal.',
          arrows: [['e8', 'g8', 'blue']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'Folklore: "6...Nf6? loses to 7.e5!"',
      body:
        "You may read that 6...Nf6 is a mistake because of 7.e5. It isn't: **7...Ng4!** equalizes. Only the captures get Black into trouble: **7...Nxe5??** loses a knight for a pawn, or the queen after 8.Nxe5 dxe5, and **7...dxe5 8.Qxd8+ Nxd8?** runs into 9.Nb5!. The same Bxf7+ and Qxd8 pattern appears in the Magnus Smith Trap (Module 4.5)."
    }
  ],
  takeaway:
    "After 6...Nf6 7.e5, play 7...Ng4! and keep the d-file closed: the position is roughly equal. Never 7...Nxe5??: it loses material, and after 8.Nxe5 dxe5, 9.Bxf7+ and 10.Qxd8 win the queen. After 7...dxe5 8.Qxd8+, take back with the king.",
  lookAhead: "Module 7.7 shows a calmer set-up that avoids these tricks, and the Siberian Trap, where Black springs a trap of its own.",
  drills: [
    {
      title: 'Spring the trap',
      prompt: "You're White. Black has just played 7...Nxe5??. Trade knights, then win the queen.",
      moves: TRAP,
      start: 14,
      side: 'white',
      hints: ['First take the e5-knight. After ...dxe5 the d-file is open.', "Black's queen is guarded only by the king. Drag the king away with check."],
      success: '8.Nxe5 dxe5 9.Bxf7+! Kxf7 10.Qxd8. You win the queen.'
    },
    {
      title: 'Dodge the trap',
      prompt: "You're Black. White has just played 7.e5, attacking your knight. Don't capture on e5: counterattack, and keep the d-file closed.",
      moves: NG4.split(' ').slice(0, 16).join(' '),
      start: 13,
      side: 'black',
      hints: ['Move the f6-knight to a square where it attacks e5.', 'After 8.exd6, take back with the pawn that keeps the d-file closed.'],
      success: '7...Ng4! and 8...exd6. The queens stay apart, and the position is roughly equal.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black to move. White has just played 7.e5. What is the best answer?',
      moves: E5,
      orientation: 'black',
      choices: [
        { text: '7...Ng4', correct: true, why: 'Right. The knight attacks e5, the d-file stays closed, and the position is roughly equal.' },
        { text: '7...Nxe5', why: 'After 8.Nxe5 dxe5 9.Bxf7+! Kxf7 10.Qxd8, White wins the queen.' },
        { text: '7...dxe5', why: 'Not a blunder if Black answers 8.Qxd8+ with 8...Kxd8, but White is a bit better. 7...Ng4 is cleaner.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move. Black took on e5 with the knight and then with the pawn. Find the winning move.',
      moves: TRAP.split(' ').slice(0, 16).join(' '),
      orientation: 'white',
      choices: [
        { text: '9.Bxf7+', correct: true, why: 'Yes. 9...Kxf7 is forced, and 10.Qxd8 wins the queen.' },
        { text: '9.Qxd8+', why: 'After 9...Kxd8 the queens are traded and Black stays two pawns up. Black is better.' },
        { text: '9.Qb3', why: 'It lines up with the bishop against f7 and hits b7, but Black defends and stays at least a pawn up. Black is better. 9.Bxf7+ wins the queen.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 7...dxe5 8.Qxd8+, why is 8...Kxd8 better than 8...Nxd8?',
      moves: `${E5} dxe5 Qxd8+`,
      orientation: 'black',
      choices: [
        { text: 'The king on d8 guards c7, so 9.Nb5 has no fork', correct: true, why: 'Right. After 8...Nxd8?, nothing guards c7, and 9.Nb5! threatens Nc7+ against the king and the a8-rook.' },
        { text: 'The king is safer on d8 than on e8', why: 'Not really: the king has lost the right to castle. The point is the c7-square.' },
        { text: '8...Nxd8 is illegal', why: 'It is legal. It just leaves c7 unguarded for 9.Nb5!.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Is 6...Nf6 a mistake because of 7.e5?',
      moves: `${MORRA_ACCEPTED} d6 Bc4 Nf6`,
      orientation: 'black',
      choices: [
        { text: 'No: after 7...Ng4!, the position is roughly equal', correct: true, why: 'Right. The folklore is wrong. Only the captures on e5 get Black into trouble.' },
        { text: 'Yes: 7.e5 wins material by force', why: "It doesn't. 7...Ng4! hits e5 again, and White has to trade the pawn off." },
        { text: 'Yes: Black must never develop the g8-knight in the Morra', why: 'The knight belongs on f6 or e7 in most lines. Here 6...Nf6 is fine if Black meets 7.e5 with 7...Ng4.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In the line 7...Nxe5?? 8.Nxe5 dxe5, why does 9.Bxf7+ win the queen?',
      choices: [
        { text: 'It drags the king away from e8, so the queen on the open d-file loses its only guard', correct: true, why: "Exactly. That's deflection: after 9...Kxf7, 10.Qxd8 wins the queen." },
        { text: 'It is checkmate', why: 'Black can take the bishop with the king. The point is what happens next: 10.Qxd8.' },
        { text: 'It wins the h8-rook', why: 'The bishop on f7 does not reach h8 after ...Kxf7. The prize is the queen on d8.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Black has just taken back with 8...Nxd8. What is the strongest move?',
      moves: NB5.split(' ').slice(0, 16).join(' '),
      orientation: 'white',
      choices: [
        { text: '9.Nb5', correct: true, why: 'Yes. It threatens Nc7+, forking the king and the a8-rook. After 9...Rb8 10.Nxe5 White is better.' },
        { text: '9.Nxe5', why: 'Too early. Black is fine and keeps an extra pawn. First 9.Nb5! forces the rook to move.' },
        { text: '9.Be3', why: 'A normal developing move, but Black is fine and stays two pawns up. 9.Nb5! uses the weak c7-square.' }
      ]
    }
  ],
  key: { name: 'Morra: 7.e5 Ng4!', moves: `${E5} Ng4`, orientation: 'black' },
  terms: [
    { term: 'Deflection', meaning: 'Forcing a defending piece away from the square or piece it was guarding, often with a check.' },
    { term: 'Fork', meaning: 'One piece attacks two or more enemy pieces at the same time.' },
    { term: 'Open file', meaning: 'A file with no pawns of either color on it. Rooks and queens can use it all the way.' }
  ]
})
