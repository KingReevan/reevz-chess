import { defineModule } from '../../../types'
import { MILNER_BARRY } from '../lines'

/** 7...Nxd4? 8.Nxd4 */
const GRAB = `${MILNER_BARRY} Nxd4 Nxd4`
/** adv-mb-trap: 8...Qxd4?? 9.Bb5+ Bd7 10.Bxd7+ Kxd7 11.Qxd4 */
const TRAP = `${GRAB} Qxd4 Bb5+ Bd7 Bxd7+ Kxd7 Qxd4`
/** adv-mb-nxd4-piece: 8...Bc5 9.Nb5 */
const PIECE = `${GRAB} Bc5 Nb5`

export default defineModule({
  id: '2.7',
  title: 'The Bb5+ queen trap',
  minutes: 9,
  level: 2,
  goals: [
    'See how the d3-bishop hides the queen\'s attack on d4, and how Bb5+ uncovers it',
    'Know that 7...Nxd4? already loses a piece, and 8...Qxd4?? the queen',
    'Remember the rule: take on d4 only after ...Bd7 has covered b5'
  ],
  intro:
    "In the Milner-Barry Gambit, d4 looks free: two attackers, one defender. Module 2.6 showed the safe way to take it, after ...Bd7. This module shows what happens if Black takes at once. It is one of the best-known traps in the French, and it works because of a hidden piece: White's queen behind the d3-bishop.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The trap: 7...Nxd4? 8.Nxd4 Qxd4?? 9.Bb5+',
      intro: "Watch White's queen on d1. For three moves it seems to do nothing.",
      moves: TRAP,
      start: 13,
      orientation: 'white',
      steps: {
        13: {
          title: 'The bait',
          text: '7.cxd4. d4 is attacked by the c6-knight and the queen, and defended only by the f3-knight. The d1-queen stands behind the d3-bishop.',
          arrows: [['c6', 'd4', 'red'], ['b6', 'd4', 'red'], ['d1', 'd3', 'yellow']],
          marks: ['d4']
        },
        14: {
          title: 'The first mistake',
          text: '7...Nxd4. Black grabs before playing ...Bd7. This already loses material, as the next moves show.',
          ann: '?'
        },
        15: {
          title: 'The knight takes back',
          text: '8.Nxd4. Now a white knight stands on d4. Only the black queen attacks it, and no white piece seems to defend it.',
          arrows: [['b6', 'd4', 'red']],
          marks: ['d4']
        },
        16: {
          title: 'The second grab',
          text: '8...Qxd4. Black takes the knight, expecting to be a pawn up. But the d1-queen is only hidden, not blocked for good.',
          arrows: [['d1', 'd3', 'yellow']],
          ann: '??'
        },
        17: {
          title: 'Check, and a hidden attack',
          text: "9.Bb5+. The bishop leaves d3 with check. That opens the d-file, and now the d1-queen attacks Black's queen. Black has to answer the check first.",
          arrows: [['b5', 'e8', 'red'], ['d1', 'd4', 'red']],
          ann: '!'
        },
        18: {
          title: 'Block the check',
          text: '9...Bd7. Black blocks. Moving the king instead, 9...Kd8 or 9...Ke7, changes nothing: 10.Qxd4.',
          marks: ['d4']
        },
        19: {
          title: 'Trade with check',
          text: "10.Bxd7+. White's best: trade the bishops with check first, so Black never gets to take the b5-bishop.",
          arrows: [['d7', 'e8', 'red']]
        },
        20: {
          title: 'Black takes back',
          text: '10...Kxd7. The queen on d4 is still attacked, and it is White\'s move.',
          arrows: [['d1', 'd4', 'red']]
        },
        21: {
          title: 'Queen won',
          text: '11.Qxd4. White has won the queen for a pawn and is winning.',
          marks: ['d4']
        }
      }
    },
    {
      kind: 'text',
      title: 'The real mistake comes first',
      body:
        "It is easy to think that only 8...Qxd4?? is the blunder. But **7...Nxd4? is already a serious mistake**. After 8.Nxd4, the knight on d4 cannot be taken by the queen, because of 9.Bb5+. So the knight is safe, and Black has simply given a knight for a pawn.\n\nThe trick behind it is a **discovered attack**: one piece moves away and uncovers an attack by the piece behind it. When the piece that moves also gives check, the opponent has no time to save anything."
    },
    {
      kind: 'walkthrough',
      title: 'If Black avoids the queen loss: 8...Bc5',
      intro: 'After 7...Nxd4? 8.Nxd4, Black sees the trap and tries to win the knight another way.',
      moves: PIECE,
      start: 14,
      orientation: 'white',
      steps: {
        14: {
          title: 'The first mistake',
          text: '7...Nxd4. The knight takes the pawn.',
          ann: '?'
        },
        15: {
          title: 'Untouchable',
          text: '8.Nxd4. The queen cannot take this knight, because of 9.Bb5+. Black has already given a knight for a pawn.',
          arrows: [['b6', 'd4', 'red']],
          marks: ['d4']
        },
        16: {
          title: 'A new attacker',
          text: '8...Bc5. The bishop attacks the knight, which has no defender.',
          arrows: [['c5', 'd4', 'red']]
        },
        17: {
          title: 'The knight escapes',
          text: '9.Nb5. The knight jumps to safety on b5, where the d3-bishop guards it. Taking it with the queen loses the queen to Bxb5+. White is a piece for a pawn up and winning.',
          arrows: [['d3', 'b5', 'green'], ['b5', 'd6', 'blue']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'The rule',
      body:
        "With White's bishop on d3, **never take on d4 before ...Bd7**. The bishop on d7 stands between b5 and your king, so Bb5 can't give check, and once the c6-knight has left, it guards b5 too. The same trick appears in the Lputian after 10.Bd3 (Module 2.4): 10...Nfxd4? and ...Qxd4?? lose to 13.Bb5+."
    }
  ],
  takeaway:
    'With the bishop on d3, the queen still guards d4 from behind it. Bb5+ uncovers that guard with check. So 7...Nxd4? loses a piece and 8...Qxd4?? loses the queen. Play ...Bd7 first, then take.',
  lookAhead: "Module 2.8 turns to Black's problem bishop on c8 and three ways to trade it: ...Bd7–b5, the Wade with an early ...Qb6, and ...b6 with ...Ba6.",
  drills: [
    {
      title: 'Spring the Bb5+ trap',
      prompt: "You're White. Black has just taken your knight on d4 with the queen. Win Black's queen.",
      moves: TRAP,
      start: 16,
      side: 'white',
      hints: ['Your d1-queen is hidden behind the d3-bishop. Move the bishop with check.', 'After 9...Bd7, trade bishops with check first, then take the queen.'],
      success: '9.Bb5+ Bd7 10.Bxd7+ Kxd7 11.Qxd4. The check plus the discovered attack wins the queen.'
    },
    {
      title: 'Punish the first mistake',
      prompt: "You're White. Black has just played 7...Nxd4?. Take back, and when Black attacks your knight, save it.",
      moves: PIECE,
      start: 14,
      side: 'white',
      hints: ['Take the d4-knight with your f3-knight. The queen cannot take it back.', 'When the c5-bishop attacks your knight, jump to b5, where your d3-bishop guards it.'],
      success: '8.Nxd4 Bc5 9.Nb5. White is a piece for a pawn up.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "After 8.Nxd4, White's knight on d4 seems to have no defender. Why can't Black's queen take it?",
      moves: GRAB,
      orientation: 'black',
      choices: [
        { text: "9.Bb5+ would uncover the d1-queen's attack on d4", correct: true, why: 'Right. The bishop moves with check, and then White takes the queen on d4.' },
        { text: 'The e5-pawn defends the knight', why: 'White pawns capture forward, so the e5-pawn guards d6 and f6, not d4.' },
        { text: 'The queen would be trapped on d4', why: "The queen isn't trapped. It is lost to a discovered attack that comes with check." }
      ]
    },
    {
      type: 'move',
      prompt: 'White to play. Black has just played 8...Qxd4. What wins?',
      moves: `${GRAB} Qxd4`,
      orientation: 'white',
      choices: [
        { text: '9.Bb5+', correct: true, why: "Yes. The bishop gives check and opens the d-file. After Black answers the check, the d1-queen takes Black's queen." },
        { text: '9.Be3', why: 'The bishop attacks the queen, but the queen simply steps away, for example 9...Qxb2. The chance is gone, and the engine says Black is clearly better.' },
        { text: '9.O-O', why: 'Castling lets the chance slip. Black stays a pawn up, and can even take on e5.' }
      ]
    },
    {
      type: 'concept',
      prompt: "What is Black's first mistake in this trap?",
      moves: TRAP,
      orientation: 'black',
      choices: [
        { text: '7...Nxd4', correct: true, why: 'Right. After 8.Nxd4 the knight cannot be taken back, so Black has already lost a piece for a pawn.' },
        { text: '8...Qxd4', why: 'That is the second and bigger mistake. But after 7...Nxd4 8.Nxd4, Black was already losing a piece.' },
        { text: '6...cxd4', why: 'Trading the c-pawns is normal and good. The mistake is taking on d4 before ...Bd7.' }
      ]
    },
    {
      type: 'concept',
      prompt: "What is the rule for taking on d4 when White's bishop is on d3?",
      choices: [
        { text: 'Take on d4 only after ...Bd7 has covered b5', correct: true, why: 'Yes. Then Bb5 is never check, and the pawn can be taken safely (Module 2.6).' },
        { text: 'Never take on d4 in the Advance', why: 'After ...Bd7, taking on d4 is fine and wins a pawn. The order of moves matters.' },
        { text: 'Always take with the queen first', why: 'Taking with the queen first just loses it: the f3-knight takes back.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'White to play after 9.Bb5+ Bd7. What is the best move?',
      moves: `${GRAB} Qxd4 Bb5+ Bd7`,
      orientation: 'white',
      choices: [
        { text: '10.Bxd7+', correct: true, why: 'Right. White trades with check first, then takes the queen on d4 next move.' },
        { text: '10.Qxd4', why: 'It also wins the queen, but after 10...Bxb5 Black wins the bishop on b5. Trading with check first is stronger.' },
        { text: '10.Qe2', why: 'It misses the point. After 10...Qb4+ Black keeps the queen, and the engine says Black is clearly better.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'In which other Advance line does the same Bb5+ trick appear?',
      choices: [
        { text: 'The Lputian, after 10.Bd3 Nfxd4?', correct: true, why: 'Yes. There too the d3-bishop hides the queen, and after ...Qxd4?? Bb5+ wins it (Module 2.4).' },
        { text: 'The ...c4 line, after 7.b4 cxb3', why: 'That trap is about en passant and the b3-square (Module 2.3), and it is White who loses the queen.' },
        { text: 'The 6.Be2 line, after 9.Na4', why: 'With the bishop on e2 the queen guards d4 openly. 9.Na4 simply chases the queen.' }
      ]
    }
  ],
  key: { name: 'Bb5+ queen trap: 8...Qxd4??', moves: `${GRAB} Qxd4`, orientation: 'white' },
  terms: [
    { term: 'Discovered attack', meaning: 'A piece moves out of the way and uncovers an attack by the piece behind it. In this trap the bishop also gives check, so Black has no time to save the queen.' },
    { term: 'Hidden defender', meaning: "A piece that guards a square from behind another piece. White's queen guards d4 from behind the d3-bishop." }
  ]
})
