import { defineModule } from '../../../types'
import { MAIN } from '../lines'

/** mdp-10nd3, up to 15...cxd6 */
const OPEN = `${MAIN} Ne1 Nd7 Nd3 f5 Bd2 Nf6 f3 f4 c5 g5 Rc1 Ng6 cxd6 cxd6`
/** mdp-10nd3 (full line) */
const GUARD = `${OPEN} Nb5 Rf7 Qc2 Ne8 a4 h5 Nf2 Bf8 h3`
/** mdp-nb5-c7-trap */
const TRAP = `${OPEN} Nb5 a6 Nc7`

export default defineModule({
  id: '4.3',
  title: 'The c7 square: Nb5–c7',
  minutes: 10,
  level: 3,
  goals: [
    'See why c7 is the key square once the c-file opens',
    "Learn Black's defense: ...Rf7 and ...Ne8 both guard c7",
    'Spot and punish 16...a6? with 17.Nc7!'
  ],
  intro:
    "The c-file is open and White's rook sits on c1. What next? White wants a piece on c7, right inside Black's camp. This module shows how White's knight heads there via b5, how Black should defend, and what happens when Black forgets.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Nb5 and the fight for c7',
      intro: 'Count attackers and defenders of c7 after every move.',
      moves: GUARD,
      start: 30,
      orientation: 'white',
      steps: {
        30: {
          title: 'The c-file is open',
          text: "The position after 15...cxd6 (Module 4.2). White's rook looks down the c-file at c7. The next step is to bring a second attacker: the knight.",
          arrows: [['c1', 'c7', 'blue'], ['c3', 'b5', 'blue']],
          marks: ['c7']
        },
        31: {
          title: 'The knight jumps to b5',
          text: '16.Nb5. The knight attacks c7, a7 and d6. With the rook behind it, it is ready to land on c7, inside Black\'s camp.',
          arrows: [['b5', 'c7', 'red'], ['b5', 'a7', 'red'], ['b5', 'd6', 'red']]
        },
        32: {
          title: 'Black guards c7',
          text: '16...Rf7! The rook covers c7 along the seventh rank. Now the queen and the rook both guard c7, so the knight cannot land there safely.',
          arrows: [['f7', 'c7', 'green'], ['d8', 'c7', 'green']],
          ann: '!'
        },
        33: {
          title: 'Doubling on the c-file',
          text: '17.Qc2. The queen joins the rook on the c-file. Now three white pieces aim at c7: the knight, the queen and the rook behind it.',
          arrows: [['c2', 'c7', 'red'], ['b5', 'c7', 'red']]
        },
        34: {
          title: 'A third guard',
          text: '17...Ne8. The knight drops back to guard c7 and d6. Three attackers, three defenders: c7 holds.',
          arrows: [['e8', 'c7', 'green'], ['e8', 'd6', 'green']]
        },
        35: {
          title: 'More space',
          text: '18.a4. White gains space on the queenside and puts a pawn behind the b5-knight. The a-pawn can go on to a5 later.',
          arrows: [['a4', 'b5', 'green']]
        },
        36: {
          title: 'Getting ready for ...g4',
          text: '18...h5. Black prepares the ...g4 break (Chapter 3). The race goes on on both wings.',
          arrows: [['g5', 'g4', 'red']]
        },
        37: {
          title: 'A defender comes back',
          text: "19.Nf2. The d3-knight drops back to f2, where it guards g4 and h3 against Black's coming break.",
          arrows: [['f2', 'g4', 'green'], ['f2', 'h3', 'green']]
        },
        38: {
          title: 'Guarding d6',
          text: '19...Bf8. The bishop drops back to defend d6, the pawn that no black pawn can protect any more.',
          arrows: [['f8', 'd6', 'green']]
        },
        39: {
          title: 'Both sides did their jobs',
          text: '20.h3. Another guard for g4. The engine calls this roughly equal: White owns the c-file, but Black has covered c7 and d6 in time.',
          arrows: [['h3', 'g4', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The trap: 16...a6? 17.Nc7!',
      intro: 'Back to 16.Nb5. This time Black tries to chase the knight away instead of guarding c7.',
      moves: `${TRAP} Rb8 Qb3`,
      start: 31,
      orientation: 'white',
      steps: {
        31: {
          title: 'The same moment',
          text: '16.Nb5. Black has to take care of c7. Kicking the knight looks natural, but it is a mistake.',
          arrows: [['b5', 'c7', 'red']]
        },
        32: {
          title: 'Kicking the knight',
          text: '16...a6? Black attacks the knight and expects it to go back. But nothing forces it to go back.',
          arrows: [['a6', 'b5', 'red']],
          ann: '?'
        },
        33: {
          title: 'Into c7',
          text: '17.Nc7! The knight attacks the a8-rook. It cannot be taken: 17...Qxc7 18.Rxc7 gives up the queen for a knight, because the c1-rook guards c7.',
          arrows: [['c7', 'a8', 'red'], ['c1', 'c7', 'green']],
          ann: '!'
        },
        34: {
          title: 'The rook runs',
          text: "17...Rb8. Black's best. The rook escapes, but the knight stays deep in Black's camp.",
          arrows: [['a8', 'b8', 'blue']]
        },
        35: {
          title: 'The queen joins in',
          text: '18.Qb3. Now the b7-pawn is pinned to the b8-rook, so Nxa6 is threatened: if ...bxa6, Qxb8 wins the rook. The engine judges White much better.',
          arrows: [['b3', 'b8', 'red'], ['c7', 'a6', 'red']],
          marks: ['b7']
        }
      }
    },
    {
      kind: 'warning',
      title: 'Two more ways to go wrong after 17.Nc7',
      body:
        "**17...Qxc7?** 18.Rxc7. Black has given the queen for a knight.\n\n**17...Bd7?** Black develops but leaves the rook where it was: 18.Nxa8 wins the exchange (a rook for a knight).\n\nEven after the best reply, 17...Rb8, White is much better: the knight on c7 ties Black up, and the a6-pawn becomes a target."
    },
    {
      kind: 'tip',
      title: 'Guard the square, don\'t chase the piece',
      body:
        "When a knight eyes a key square, the safe answer is usually to **guard the square** (...Rf7, ...Ne8), not to kick the knight. A kicked knight can jump forward as well as back."
    }
  ],
  takeaway:
    'Once the c-file opens, c7 is the key square. Black must guard it with ...Rf7 and ...Ne8; if Black plays 16...a6? instead, 17.Nc7! hits the a8-rook and cannot be taken.',
  lookAhead: 'Next: two faster ways to start the queenside play in the main line, 13.Rc1 with 14.c5, and 13.a4.',
  drills: [
    {
      title: 'Punish 16...a6?',
      prompt: "You're White. Black has just kicked your knight with 16...a6?. Find the strongest move.",
      moves: TRAP,
      start: 32,
      side: 'white',
      hints: ['The knight does not have to go back.', 'Which square on the c-file is guarded by your rook?'],
      success: '17.Nc7! The knight hits the a8-rook, and 17...Qxc7 18.Rxc7 would cost Black the queen.'
    },
    {
      title: 'Aim at c7',
      prompt: "You're White. The c-file has just opened. Bring a second piece to bear on c7, then a third.",
      moves: `${OPEN} Nb5 Rf7 Qc2`,
      start: 30,
      side: 'white',
      hints: ['Which knight jump attacks c7?', 'After ...Rf7, line up the queen with the rook on the c-file.'],
      success: '16.Nb5 and 17.Qc2. Three white pieces now aim at c7.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'Black has just played 16...a6, attacking the knight. What should White play?',
      moves: TRAP.split(' ').slice(0, -1).join(' '),
      orientation: 'white',
      choices: [
        { text: '17.Nc7', correct: true, why: "Right. The knight hits the a8-rook and can't be taken, because the c1-rook guards c7." },
        { text: '17.Na3', why: "A retreat. Black's ...a6 has done its job, and the position is fine for Black." },
        { text: '17.Nc3', why: 'Back where it came from. The chance is gone, and the position is fine for Black.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 16...a6? 17.Nc7, why can\'t Black simply take the knight with the queen?',
      moves: TRAP,
      orientation: 'white',
      choices: [
        { text: '18.Rxc7 would win the queen for a knight', correct: true, why: 'Yes. The rook on c1 guards c7 down the open file.' },
        { text: 'The d3-knight protects c7', why: 'A knight on d3 does not reach c7. The defender is the rook on c1.' },
        { text: "Black's queen is pinned", why: 'The queen is not pinned. The problem is the rook behind the knight.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the main point of 16...Rf7 here?',
      moves: `${OPEN} Nb5 Rf7`,
      orientation: 'white',
      choices: [
        { text: 'It guards c7 along the seventh rank', correct: true, why: 'Right. With c7 guarded twice, the knight cannot jump in.' },
        { text: 'It defends the f4-pawn', why: "The knight on f6 is in the way, so the rook doesn't reach f4. The point is c7." },
        { text: 'It doubles rooks on the f-file', why: "Black's other rook is still on a8. The move is about c7." }
      ]
    },
    {
      type: 'concept',
      prompt: 'From b5, which three squares on Black\'s side does the knight attack?',
      moves: `${OPEN} Nb5`,
      orientation: 'white',
      choices: [
        { text: 'c7, a7 and d6', correct: true, why: 'Right: the c7 entry square, the a7-pawn and the d6-pawn.' },
        { text: 'c7, e7 and d6', why: 'A knight on b5 cannot reach e7. Check: it jumps to a7, c7, d6, d4, c3 and a3.' },
        { text: 'b7, c7 and d6', why: 'b7 is on the same file as the knight, which a knight never attacks. Try a7 instead.' }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'After 16...a6? 17.Nc7, Black plays 17...Bd7?. What does White win?',
      moves: `${TRAP} Bd7`,
      orientation: 'white',
      choices: [
        { text: 'The exchange, with 18.Nxa8', correct: true, why: 'Right. The rook was left on a8, so the knight takes it. Rook for knight.' },
        { text: 'The queen, with 18.Ne6', why: 'Ne6 attacks the queen and the f8-rook, but the d7-bishop just takes the knight. Nxa8 is the real win.' },
        { text: 'Nothing: Black is fine', why: 'The a8-rook is still under attack, so 18.Nxa8 wins it.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 10.Nd3 line, which two moves does Black use to guard c7?',
      choices: [
        { text: '...Rf7 and ...Ne8', correct: true, why: 'Right. The rook guards c7 along the seventh rank and the knight guards it from e8.' },
        { text: '...a6 and ...b5', why: '...a6 is exactly the mistake that lets the knight into c7.' },
        { text: '...Kh8 and ...Ng8', why: 'Those are kingside moves. They do nothing for c7.' }
      ]
    }
  ],
  key: { name: 'Mar del Plata trap: 16...a6? 17.Nc7!', moves: TRAP, orientation: 'white' },
  terms: [
    { term: 'Seventh rank', meaning: "Rank 7, where Black's pawns start. A white piece that lands there attacks Black's pieces at home." },
    { term: 'Winning the exchange', meaning: 'Winning a rook for a bishop or a knight.' },
    { term: 'Pin', meaning: 'A piece or pawn cannot move off a line without exposing a more valuable piece behind it.' }
  ]
})
