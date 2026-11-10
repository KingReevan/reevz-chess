import { defineModule } from '../../../types'
import { ADVANCE_QB6 } from '../lines'

/** 6.Be2 cxd4 7.cxd4: two attackers against two defenders on d4 */
const BE2 = `${ADVANCE_QB6} Be2 cxd4 cxd4`
/** fr-count-d4: 7...Nxd4? 8.Nxd4 Qxd4?? 9.Qxd4 */
const COUNT = `${BE2} Nxd4 Nxd4 Qxd4 Qxd4`
/** adv-6be2, first moves: 7...Nh6 8.Nc3 Nf5 9.Na4 (a third attacker, and White hits the queen) */
const NH6 = `${BE2} Nh6 Nc3 Nf5 Na4`

export default defineModule({
  id: '1.5',
  title: 'Counting attackers and defenders',
  minutes: 10,
  level: 1,
  goals: [
    'Count the attackers and defenders of d4 before taking',
    'See why 7...Nxd4? loses a piece when the count is two against two',
    'Bring a third attacker with ...Nh6–f5'
  ],
  intro:
    'Black piles up on d4 and White defends it. Sooner or later Black is tempted to take. When does that win a pawn, and when does it lose a piece? The answer is simple counting. This module teaches you to count, using one of the most common positions in the Advance.',
  sections: [
    {
      kind: 'walkthrough',
      title: 'Two against two: don\'t take',
      intro: 'After each move, count the attackers and defenders of d4.',
      moves: COUNT,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The Advance main line',
          text: "5...Qb6. Black's c5-pawn and c6-knight attack d4. White's c3-pawn, f3-knight and queen defend it. The b6-queen waits behind the c5-pawn.",
          arrows: [['c5', 'd4', 'red'], ['c6', 'd4', 'red'], ['b6', 'd4', 'yellow']]
        },
        11: {
          title: 'The bishop develops',
          text: "6.Be2. The bishop gets ready for castling. On e2 it stays off the d-file, so the queen on d1 still sees d4.",
          arrows: [['d1', 'd4', 'green']]
        },
        12: {
          title: 'Black trades pawns',
          text: '6...cxd4. Black takes on d4 with the c-pawn. This opens the diagonal from b6 to d4 for the queen.',
          marks: ['d4']
        },
        13: {
          title: 'Count: two against two',
          text: "7.cxd4. White takes back with a pawn. Now d4 is attacked by the c6-knight and the queen, and defended by the f3-knight and the queen. Two against two.",
          arrows: [['c6', 'd4', 'red'], ['b6', 'd4', 'red'], ['f3', 'd4', 'green'], ['d1', 'd4', 'green']],
          marks: ['d4']
        },
        14: {
          title: 'Taking anyway',
          text: '7...Nxd4. Black grabs the pawn. But White still has two defenders, and Black has only the queen left to attack d4.',
          ann: '?',
          marks: ['d4']
        },
        15: {
          title: 'A knight for a pawn',
          text: '8.Nxd4. White takes the knight. Black has given a knight for a pawn, and the d4-knight is guarded by the queen on d1.',
          arrows: [['d1', 'd4', 'green']]
        },
        16: {
          title: 'Making it worse',
          text: '8...Qxd4. Black takes the knight with the queen, hoping to win the material back.',
          ann: '??',
          arrows: [['d1', 'd4', 'red']]
        },
        17: {
          title: 'The queen is gone',
          text: '9.Qxd4. The last defender takes the last attacker. Black has given a knight and a queen for a pawn and a knight: a queen down for a pawn, and lost.',
          marks: ['d4']
        }
      }
    },
    {
      kind: 'text',
      title: 'How to count',
      body:
        "Before you take on a square, count:\n\n**1. Attackers:** your pieces and pawns that can capture there.\n\n**2. Defenders:** the enemy pieces and pawns that can take back.\n\nCaptures go in turns. If both numbers are equal, the side that takes first runs out of pieces first, and the other side makes the last capture. So with two against two, taking first only pays if the thing you capture is worth more than the piece you will lose for it. Here Black gave a knight (3 points) for a pawn (1 point): a bad trade.\n\nOne more check: make sure every piece you counted really **sees** the square. A piece standing in between blocks the line."
    },
    {
      kind: 'walkthrough',
      title: 'Add a third attacker',
      intro: "Instead of taking, Black brings one more piece. Watch the king's knight.",
      moves: NH6,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'Two against two again',
          text: '7.cxd4. The same count as before: two attackers, two defenders. Black should not take yet.',
          arrows: [['c6', 'd4', 'red'], ['b6', 'd4', 'red'], ['f3', 'd4', 'green'], ['d1', 'd4', 'green']]
        },
        14: {
          title: 'The knight heads for f5',
          text: '7...Nh6. The knight goes to the edge for a moment. From h6 it can jump to f5, where it attacks d4. The e5-pawn stops it from using f6.',
          arrows: [['h6', 'f5', 'blue']]
        },
        15: {
          title: 'White develops',
          text: '8.Nc3. A natural developing move, but it does not defend d4. White could also take the knight with 8.Bxh6 (Module 2.5).',
          arrows: [['b1', 'c3', 'blue']]
        },
        16: {
          title: 'Three against two',
          text: '8...Nf5. Now three Black units attack d4: both knights and the queen. Only two White units defend it. Black threatens to win the pawn with ...Nfxd4.',
          arrows: [['f5', 'd4', 'red'], ['c6', 'd4', 'red'], ['b6', 'd4', 'red']],
          marks: ['d4']
        },
        17: {
          title: 'Hit an attacker',
          text: '9.Na4. White does not add a defender. Instead the knight attacks the queen, one of the three attackers. If the queen leaves the line to d4, the count drops back to two against two. The position is roughly equal.',
          arrows: [['a4', 'b6', 'red']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'When a defender is blocked',
      body:
        "Put White's bishop on d3 instead of e2 (6.Bd3 cxd4 7.cxd4) and the count changes: the bishop blocks the queen's path to d4, so d4 has only one defender, the f3-knight. It looks free. But 7...Nxd4? 8.Nxd4 still loses a piece for a pawn, because Black cannot take back: after 8...Qxd4?? the bishop jumps to b5 with check and uncovers White's queen against Black's queen. Count first, then look for tricks. Module 2.7 shows this trap in full."
    }
  ],
  takeaway:
    'Before you take, count the attackers and the defenders, and check that each one really sees the square. With two against two, 7...Nxd4? loses a piece; bring a third attacker with ...Nh6–f5 first.',
  lookAhead:
    'Module 1.6 turns to the second French break: ...f6, which attacks the head of the chain instead of its base.',
  drills: [
    {
      title: 'Count, then add an attacker',
      prompt: "You're Black. White has played 6.Be2. Trade pawns on d4, then, instead of taking a second time, bring your king's knight toward f5 by the route this module shows.",
      moves: `${BE2} Nh6`,
      start: 11,
      side: 'black',
      hints: ['First take on d4 with your c-pawn. After 7.cxd4, count: two against two.', 'Do not take again. The g8-knight goes to h6, heading for f5.'],
      success: '6...cxd4 7.cxd4 Nh6. Next comes ...Nf5, and d4 will have three attackers.'
    },
    {
      title: 'Punish the early capture',
      prompt: "You're White. Black has just taken on d4 with the knight, although d4 had two defenders. Take back, and keep taking.",
      moves: COUNT,
      start: 14,
      side: 'white',
      hints: ['Your f3-knight can take on d4.', 'After 8...Qxd4, your queen takes back on d4.'],
      success: '8.Nxd4 Qxd4 9.Qxd4. Black has lost a knight and the queen for a pawn and a knight.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 7.cxd4, how many units attack d4, and how many defend it?',
      moves: BE2,
      orientation: 'black',
      choices: [
        { text: 'Two attackers (the c6-knight and the queen) and two defenders (the f3-knight and the queen)', correct: true, why: 'Right. Two against two, so taking first loses material.' },
        { text: 'Three attackers and two defenders', why: 'The c5-pawn is gone: it took on d4 and was taken back. Black has only the knight and the queen.' },
        { text: 'Two attackers and three defenders', why: 'The c3-pawn is gone too: it took back on d4. White has only the knight and the queen.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black has just played 7...Nxd4 and White took back, 8.Nxd4. What is the situation?',
      moves: `${BE2} Nxd4 Nxd4`,
      orientation: 'black',
      choices: [
        { text: 'Black has lost a knight for a pawn, and 8...Qxd4?? 9.Qxd4 would lose the queen too', correct: true, why: 'Right. The d4-knight is guarded by the queen on d1, so Black cannot win it back.' },
        { text: 'Black wins the material back with 8...Qxd4', why: 'After 8...Qxd4?? 9.Qxd4, Black has lost the queen. The queen on d1 guards d4.' },
        { text: 'It is an even trade: a knight for a knight', why: 'Black took a pawn and lost a knight. Only one knight has been captured so far: Black\'s.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. Which move brings a third attacker toward d4?',
      moves: BE2,
      orientation: 'black',
      choices: [
        { text: '7...Nh6', correct: true, why: 'Right. The knight heads for f5, where it attacks d4. Then Black has three attackers against two defenders.' },
        { text: '7...Nxd4', why: 'Taking now loses a piece: 8.Nxd4, and 8...Qxd4?? 9.Qxd4 loses the queen as well.' },
        { text: '7...Bb4+', why: 'A check, but the bishop does not attack d4. After 8.Nc3 White blocks with a developing move and is better.' }
      ]
    },
    {
      type: 'concept',
      prompt: "In this position White's bishop is on d3. Why does the queen on d1 no longer defend d4?",
      moves: `${ADVANCE_QB6} Bd3 cxd4 cxd4`,
      orientation: 'white',
      choices: [
        { text: 'The bishop on d3 stands between the queen and d4', correct: true, why: 'Right. A piece in between blocks the line. That is why counting means checking each line, not just each piece.' },
        { text: 'The queen is pinned to the king', why: "Nothing pins White's queen. It is simply blocked by its own bishop." },
        { text: 'The knight on f3 blocks the queen', why: 'The f3-knight is not on the d-file. The bishop on d3 is.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'A pawn has two attackers and two defenders, and you would take it with a knight. What usually happens?',
      choices: [
        { text: 'You lose material: the other side makes the last capture', correct: true, why: 'Right. With equal numbers, the side that starts the captures runs out of pieces first.' },
        { text: 'You win the pawn', why: 'With equal numbers you only win if you capture more than you give. A knight for a pawn is a loss.' },
        { text: 'Nothing changes: the trades are always even', why: 'Captures go in turns, so the order matters. Here Black would give a knight for a pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 7...Nh6 8.Nc3 Nf5, how many Black units attack d4?',
      moves: `${BE2} Nh6 Nc3 Nf5`,
      orientation: 'black',
      choices: [
        { text: 'Three: both knights and the queen', correct: true, why: 'Right. The f5-knight is the new attacker. White has only the f3-knight and the queen to defend.' },
        { text: 'Two: only the knights', why: 'The queen on b6 attacks d4 too, now that the c5-pawn has gone.' },
        { text: 'Four, counting the e6-pawn', why: 'A pawn on e6 attacks d5 and f5, not d4.' }
      ]
    }
  ],
  key: { name: 'Count first: 7...Nxd4? drops a piece', moves: `${BE2} Nxd4`, orientation: 'black' },
  terms: [
    { term: 'Counting', meaning: 'Comparing how many units attack a square with how many defend it, before deciding to capture there.' },
    { term: 'Exchange', meaning: 'A series of captures on one square, where each side takes in turn. Also called a trade.' },
    { term: 'Discovered attack', meaning: 'An attack that appears when one piece moves out of the way of another, like the queen on d1 when the d3-bishop leaves.' }
  ]
})
