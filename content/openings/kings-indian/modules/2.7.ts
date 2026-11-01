import { defineModule } from '../../../types'
import { CLASSICAL, MAIN } from '../lines'

/** classical-8d5-nd4: 8.d5 Nd4?! 9.Nxd4 exd4 10.Qxd4 Nd7 */
const ND4 = `${CLASSICAL} O-O Nc6 d5 Nd4 Nxd4 exd4 Qxd4 Nd7`

export default defineModule({
  id: '2.7',
  title: '8.d5 Ne7: the center locks',
  minutes: 10,
  level: 2,
  goals: [
    'Read the two pawn chains after 8.d5',
    'Know why the knight retreats to e7',
    'Avoid 8...Nd4?!, which gives White a pawn'
  ],
  intro:
    "With 8.d5, White pushes past Black's pressure, gains space and attacks the c6-knight. The center locks, and the whole character of the game changes. Where should the knight go, and what do the new pawn chains tell each side?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The lock',
      intro: 'Watch the center pawns. By the end, none of them can move forward.',
      moves: MAIN,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'Before the lock',
          text: '6...e5. The d4- and e5-pawns attack each other. Either side could still take.',
          arrows: [['e5', 'd4', 'red'], ['d4', 'e5', 'red']]
        },
        13: {
          title: 'White castles',
          text: '7.O-O. White gets the king safe and waits for Black to commit.',
          marks: ['g1']
        },
        14: {
          title: 'More pressure on d4',
          text: '7...Nc6. A second attacker on d4, as in Module 2.6.',
          arrows: [['c6', 'd4', 'red']]
        },
        15: {
          title: 'White pushes past',
          text: '8.d5. Instead of defending d4, White pushes the pawn forward. It gains space and attacks the c6-knight, which has to move.',
          arrows: [['d5', 'c6', 'red']]
        },
        16: {
          title: 'The center is locked',
          text: "8...Ne7. The knight retreats. Now e4 blocks e5 and d6 blocks d5, so the center pawns can't advance. From e7 the knight can later go to g6, and once the f6-knight moves, ...f5 becomes possible.",
          arrows: [['e7', 'g6', 'blue'], ['f7', 'f5', 'blue']],
          marks: ['d5', 'e4', 'd6', 'e5']
        }
      }
    },
    {
      kind: 'text',
      title: 'Two pawn chains',
      body:
        "A **pawn chain** is a diagonal line of pawns that protect each other. After 8.d5 the center has two. White's runs c4–d5–e4, with d5 at the front. Black's runs d6–e5. The back pawn of a chain is its **base**: Black's base is d6, and White's e4-pawn is the base that Black can hit with ...f5.\n\nWith the center locked, no one can open a central file soon. So the fight moves to the wings. Module 2.8 shows which wing each side should choose."
    },
    {
      kind: 'tip',
      title: 'Why e7 and not somewhere else?',
      body:
        "The knight on c6 was attacked, so it had to move. On e7 it keeps watching d5, it guards the f5-square for a later ...f5, and it can hop to g6, close to White's king. 8...Nb8 is playable but slower. 8...Nd4 looks active, but the next walkthrough shows why it drops a pawn."
    },
    {
      kind: 'walkthrough',
      title: 'The tempting jump: 8...Nd4?!',
      intro: 'The knight jumps forward instead of back. Count the defenders of d4 after the knights are traded.',
      moves: ND4,
      start: 15,
      orientation: 'white',
      steps: {
        15: {
          title: 'The knight is attacked',
          text: '8.d5. The c6-knight must move. Black is tempted by the central d4-square.',
          arrows: [['d5', 'c6', 'red'], ['c6', 'd4', 'blue']]
        },
        16: {
          title: 'An active-looking jump',
          text: '8...Nd4. The knight attacks e2 and f3. But d4 is attacked by the f3-knight and the queen, and only the e5-pawn defends it.',
          arrows: [['f3', 'd4', 'red'], ['d1', 'd4', 'red'], ['e5', 'd4', 'green']],
          ann: '?!'
        },
        17: {
          title: 'Take it',
          text: '9.Nxd4. White trades knights at once.',
          marks: ['d4']
        },
        18: {
          title: 'A pawn with no defender',
          text: '9...exd4. Black takes back with the pawn. The new d4-pawn is attacked by the queen, and nothing defends it: the f6-knight still blocks the g7-bishop.',
          arrows: [['d1', 'd4', 'red'], ['g7', 'f6', 'yellow']],
          marks: ['d4']
        },
        19: {
          title: 'White wins a pawn',
          text: '10.Qxd4. White collects the pawn. The queen stands in the center, so Black will try to gain time by attacking it.',
          marks: ['d4']
        },
        20: {
          title: 'Not enough',
          text: "10...Nd7. Now the g7-bishop attacks the queen, which simply steps back. Black can win the pawn back only by trading the g7-bishop for the c3-knight later, which weakens Black's king. White keeps the better game.",
          arrows: [['g7', 'd4', 'red']]
        }
      }
    }
  ],
  takeaway:
    '8.d5 locks the center: White has c4–d5–e4, Black has d6–e5. Black retreats with 8...Ne7, keeping the f-pawn and g6 in mind, and avoids 8...Nd4?!, which loses a pawn.',
  lookAhead:
    'With the center locked, each side picks a wing. Module 2.8 shows how the pawn chains tell you which one.',
  drills: [
    {
      title: 'Into the main line',
      prompt: "You're Black. White castles. Put pressure on d4, and when White closes the center, retreat the knight to its best square.",
      moves: MAIN,
      start: 12,
      side: 'black',
      hints: ['Which knight move adds a second attacker on d4?', 'After 8.d5, choose the square that helps a later ...f5 and can reach g6.'],
      success: '7...Nc6 and 8...Ne7. This is the main line of the King\'s Indian, with the center locked.'
    },
    {
      title: 'Collect the pawn',
      prompt: "You're White. Black jumped to d4 with 8...Nd4?!. Trade knights, then win the pawn.",
      moves: `${CLASSICAL} O-O Nc6 d5 Nd4 Nxd4 exd4 Qxd4`,
      start: 16,
      side: 'white',
      hints: ['Take the knight on d4 straight away.', 'After ...exd4, which piece can take the undefended pawn?'],
      success: '9.Nxd4 exd4 10.Qxd4. White is a pawn up, and Black can only win it back by giving up the g7-bishop.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 8.d5 Ne7, what does "the center is locked" mean?',
      moves: MAIN,
      orientation: 'black',
      choices: [
        { text: 'The central pawns block each other, so the fight moves to the wings', correct: true, why: 'Right. e4 blocks e5 and d6 blocks d5. Both sides now look for play on one side of the board.' },
        { text: 'Pieces are no longer allowed in the center', why: 'Pieces can still use central squares. It is the pawns that are stuck.' },
        { text: 'The game is heading for a quiet draw', why: 'The opposite. Locked centers often lead to the sharpest races in chess.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. The c6-knight is attacked. Where should it go?',
      moves: `${CLASSICAL} O-O Nc6 d5`,
      orientation: 'black',
      choices: [
        { text: '8...Ne7', correct: true, why: 'Yes. From e7 the knight supports a later ...f5 and can go to g6.' },
        { text: '8...Nd4', why: '9.Nxd4 exd4 10.Qxd4 wins a pawn. Nothing defends d4 after the knights are traded.' },
        { text: '8...Nb8', why: 'Playable, but slow. The knight has to come out again, and it does nothing for the kingside.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move. Black has just played 8...Nd4. What is best?',
      moves: `${CLASSICAL} O-O Nc6 d5 Nd4`,
      orientation: 'white',
      choices: [
        { text: '9.Nxd4', correct: true, why: 'Right. After 9...exd4 10.Qxd4 White wins a pawn.' },
        { text: '9.a4', why: 'Too calm. Black trades on e2 with 9...Nxe2+ and has no problems. Take the knight first.' },
        { text: '9.h3', why: 'Too slow. After 9...Nxe2+ 10.Qxe2 Black is fine. The chance to win a pawn is gone.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does the knight go to e7 rather than b8?',
      choices: [
        { text: 'From e7 it supports ...f5 and can reach g6', correct: true, why: "Yes. It helps Black's kingside plan. On b8 it does nothing for it." },
        { text: 'From e7 it attacks the e4-pawn', why: 'A knight on e7 attacks c6, d5, f5, g6, c8 and g8. It does not touch e4.' },
        { text: 'On b8 it would be trapped', why: "It wouldn't be trapped, just passive. 8...Nb8 is playable, only slower." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 8.d5 Nd4 9.Nxd4 exd4, why can White take the d4-pawn?',
      moves: `${CLASSICAL} O-O Nc6 d5 Nd4 Nxd4 exd4`,
      orientation: 'white',
      choices: [
        { text: 'Nothing defends it: the f6-knight blocks the g7-bishop', correct: true, why: 'Yes. The bishop would guard d4, but its own knight is in the way.' },
        { text: 'The d4-pawn is pinned to the queen', why: 'Nothing pins it. It is simply undefended.' },
        { text: 'Black is forced to move the queen first', why: "Black's queen is not attacked. The point is that d4 has no defender." }
      ]
    },
    {
      type: 'plan',
      prompt: "After 8.d5 Ne7, what is Black's typical next idea?",
      moves: MAIN,
      orientation: 'black',
      choices: [
        { text: 'Move the f6-knight, then push ...f5', correct: true, why: "Right. ...f5 hits White's e4-pawn. Chapter 3 shows the whole plan." },
        { text: 'Push ...b5 to attack on the queenside', why: "That's where White is strongest. Module 2.8 explains why Black's play is on the other wing." },
        { text: 'Push ...d5 to free the center', why: "Impossible: White's pawn already stands on d5." }
      ]
    }
  ],
  key: { name: 'Main line: 8.d5 Ne7', moves: MAIN, orientation: 'black' },
  terms: [
    { term: 'Pawn chain', meaning: 'A diagonal line of pawns where each one protects the next.' },
    { term: 'Base of a chain', meaning: 'The back pawn of a pawn chain. Attacking the base undermines the whole chain.' },
    { term: 'Locked center', meaning: 'A center where the pawns block each other, so no central file can open soon.' },
    { term: 'Pawn break', meaning: 'A pawn move that attacks the enemy pawns to open lines, such as ...f5 in the King\'s Indian.' }
  ]
})
