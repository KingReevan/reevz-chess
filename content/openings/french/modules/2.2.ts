import { defineModule } from '../../../types'
import { ADVANCE_QB6 } from '../lines'

/** adv-6be2 up to 7...Nh6: 6.Be2 cxd4 7.cxd4 Nh6 */
const BE2 = `${ADVANCE_QB6} Be2 cxd4 cxd4`
const BE2_NH6 = `${BE2} Nh6`
/** fr-count-d4: 7...Nxd4? 8.Nxd4 Qxd4?? 9.Qxd4 */
const COUNT = `${BE2} Nxd4 Nxd4 Qxd4 Qxd4`
/** 6.Be3? Qxb2 (engine: Black is clearly better) */
const BE3 = `${ADVANCE_QB6} Be3 Qxb2`

export default defineModule({
  id: '2.2',
  title: '5...Qb6: pressure on d4 and b2',
  minutes: 10,
  level: 2,
  goals: [
    'Know the two jobs of 5...Qb6: pressure on d4 and an eye on b2',
    "See why White can't simply play Be3, or Bd3 and castle",
    'Count two against two on d4 after 6.Be2 cxd4 7.cxd4, and leave it alone'
  ],
  intro:
    "5...Qb6 is Black's main move in the Advance. It looks like an odd square for the queen so early, but it does two jobs at once. This module shows both jobs, what they stop White from doing, and what happens when Black gets greedy on d4.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The queen on b6, and 6.Be2',
      intro: 'Watch two things: the diagonal from b6 to d4, and the b2-pawn.',
      moves: BE2_NH6,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: "White's set-up",
          text: '5.Nf3. d4 is attacked twice (the c5-pawn and the c6-knight) and defended three times (the c3-pawn, the f3-knight and the queen).',
          arrows: [['c5', 'd4', 'red'], ['c6', 'd4', 'red']],
          marks: ['d4']
        },
        10: {
          title: 'Two jobs for the queen',
          text: "5...Qb6. Job one: the queen lines up behind the c5-pawn, ready to hit d4 once the c-pawns are traded. Job two: it attacks b2, which only the c1-bishop guards. So if that bishop leaves c1, b2 can be taken.",
          arrows: [['b6', 'd4', 'yellow'], ['b6', 'b2', 'red'], ['c1', 'b2', 'green']]
        },
        11: {
          title: 'A quiet bishop move',
          text: "6.Be2. White gets ready to castle. On e2 the bishop doesn't block the queen's line from d1 to d4, so the queen keeps defending d4.",
          arrows: [['d1', 'd4', 'green']]
        },
        12: {
          title: 'Open the diagonal',
          text: '6...cxd4. Black trades the c-pawns. This takes the c5-pawn out of the queen\'s way.',
          arrows: [['c5', 'd4', 'red']]
        },
        13: {
          title: 'Two against two',
          text: '7.cxd4. Count again. Attackers: the c6-knight and the b6-queen. Defenders: the f3-knight and the d1-queen. Two against two means Black should not take.',
          arrows: [['c6', 'd4', 'red'], ['b6', 'd4', 'red'], ['f3', 'd4', 'green']],
          marks: ['d4']
        },
        14: {
          title: 'Bring a third attacker',
          text: "7...Nh6. One of the engine's two top moves (7...Nge7, heading for f5 the other way, is about as good). The knight heads for f5, where it will attack d4 a third time, so White has to do something about d4. Module 2.5 shows what happens next.",
          arrows: [['h6', 'f5', 'blue'], ['f5', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Greedy on d4: 7...Nxd4? and 8...Qxd4??',
      intro: 'Same position after 7.cxd4. This time Black ignores the count.',
      moves: COUNT,
      start: 13,
      orientation: 'white',
      steps: {
        13: {
          title: 'Two against two',
          text: '7.cxd4. d4 is attacked by the knight and the queen, and defended by the knight and the queen.',
          arrows: [['c6', 'd4', 'red'], ['b6', 'd4', 'red'], ['f3', 'd4', 'green']],
          marks: ['d4']
        },
        14: {
          title: 'The knight grabs',
          text: '7...Nxd4. The knight takes the pawn. But two White pieces still guard d4, and only the queen backs up the knight.',
          arrows: [['f3', 'd4', 'red'], ['d1', 'd4', 'red'], ['b6', 'd4', 'green']],
          ann: '?'
        },
        15: {
          title: 'A piece for a pawn',
          text: '8.Nxd4. White takes the knight. Black has given a knight for a pawn. 8.Qxd4 also wins a piece. But after the knight capture, Black is tempted to take again.',
          arrows: [['d1', 'd4', 'green']]
        },
        16: {
          title: 'The second grab',
          text: '8...Qxd4. Black takes back, hoping to come out only a pawn short. But the d1-queen still guards d4.',
          arrows: [['d1', 'd4', 'red']],
          ann: '??'
        },
        17: {
          title: 'The queen is gone',
          text: '9.Qxd4. White wins the queen. Black has a queen fewer and one pawn more: White is winning. With two attackers against two defenders, taking usually loses material.',
          marks: ['d4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Why not 6.Be3?',
      intro: 'A natural idea: defend d4 with the bishop. Watch what it leaves behind.',
      moves: BE3,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The b2-pawn',
          text: '5...Qb6. The b2-pawn is attacked by the queen and guarded only by the c1-bishop.',
          arrows: [['b6', 'b2', 'red'], ['c1', 'b2', 'green']],
          marks: ['b2']
        },
        11: {
          title: 'The guard walks away',
          text: '6.Be3. The bishop defends d4, but it no longer guards b2.',
          arrows: [['e3', 'd4', 'green']],
          marks: ['b2'],
          ann: '?'
        },
        12: {
          title: 'Pawn and rook',
          text: "6...Qxb2. Black wins a pawn, and the queen now attacks the a1-rook, which has no defender: the b1-knight blocks the d1-queen's line to it. The engine says Black is clearly better.",
          arrows: [['b2', 'a1', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: "Why White doesn't just play Bd3 and castle",
      body:
        "The most natural plan for White is Bd3 and O-O. But look at the d-file. With the bishop on **d3**, the queen's line from d1 to d4 is **blocked**. After 6.Bd3 cxd4 7.cxd4, d4 is attacked twice (the knight and the queen) and defended **only once** (the f3-knight).\n\nSo 6.Bd3 means White is ready to give up the d4-pawn. That is a gambit, the **Milner-Barry Gambit**, and Modules 2.6 and 2.7 cover it, including a famous trap.\n\nThat is why White's main moves are **6.a3** (preparing b4 and Bb2, Module 2.3), **6.Be2** (keeping the d-file open) and, for gambit players, **6.Bd3**."
    },
    {
      kind: 'warning',
      title: "Don't forget b2",
      body:
        "While Black's queen is on b6, every move of the c1-bishop asks: is b2 still safe? White usually waits until b2 is guarded in another way (for example by Qd2 or Qc2), until the pawn has moved to b4, or until the queen has left b6, before developing that bishop."
    }
  ],
  takeaway:
    "5...Qb6 presses d4 from behind the c5-pawn and ties the c1-bishop to b2. After 6.Be2 cxd4 7.cxd4, d4 is two against two: don't take it, bring a third attacker with ...Nh6–f5.",
  lookAhead: "Next, White's most popular answer: 6.a3, preparing b4. Module 2.3 shows Black's ...c4 reply and an en passant trap.",
  drills: [
    {
      title: 'The main line, from memory',
      prompt: "You're Black. Put the queen on its best square, trade the c-pawns after 6.Be2, then start bringing a third attacker toward d4 through h6.",
      moves: BE2_NH6,
      start: 9,
      side: 'black',
      hints: ['The queen goes where it hits b2 and lines up with d4.', 'After 7.cxd4, the g8-knight heads for f5 by way of h6.'],
      success: '5...Qb6, 6...cxd4 and 7...Nh6. The knight is on its way to f5, where it will hit d4 a third time.'
    },
    {
      title: 'Punish the grab',
      prompt: "You're White. Black has just played 7...Nxd4?. Take back with your f3-knight, then answer Black's next capture.",
      moves: COUNT,
      start: 14,
      side: 'white',
      hints: ['Take the d4-knight with your knight first.', 'If the queen takes on d4, which white piece still guards that square?'],
      success: '8.Nxd4 Qxd4 9.Qxd4. White wins the queen. Two attackers against two defenders lose material.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Count the d4-pawn after 7.cxd4. How many attackers and defenders are there?',
      moves: BE2,
      orientation: 'white',
      choices: [
        { text: 'Two attackers, two defenders', correct: true, why: 'Right. The c6-knight and the b6-queen attack; the f3-knight and the d1-queen defend.' },
        { text: 'Three attackers, two defenders', why: 'The d5-pawn does not attack d4. Pawns attack diagonally forward, so it attacks c4 and e4.' },
        { text: 'Two attackers, three defenders', why: 'The e2-bishop does not guard d4. Only the f3-knight and the d1-queen do.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black has played 7...Nxd4? 8.Nxd4. What happens if Black takes back with 8...Qxd4?',
      moves: `${BE2} Nxd4 Nxd4`,
      orientation: 'black',
      choices: [
        { text: '9.Qxd4: the d1-queen guards d4, so Black loses the queen', correct: true, why: 'Yes. Two attackers against two defenders: the last piece to take is lost. Here that is the queen.' },
        { text: 'Black wins the piece back and is only a pawn down', why: 'Black does take the knight, but 9.Qxd4 then takes the queen.' },
        { text: 'White has to find 9.Bb5+ to win the queen', why: '9.Qxd4 wins the queen at once. Bb5+ is the trick when the bishop is on d3 and blocks the queen (Module 2.7).' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 6.Be3 a mistake here?',
      moves: `${ADVANCE_QB6} Be3`,
      orientation: 'black',
      choices: [
        { text: 'The bishop no longer guards b2: 6...Qxb2 wins a pawn and attacks the a1-rook', correct: true, why: 'Right. The engine says Black is clearly better after 6...Qxb2.' },
        { text: 'Black can win the bishop with ...Qxe3', why: "The c5-pawn blocks the queen's diagonal to e3, and the f2-pawn guards e3 anyway." },
        { text: "It isn't a mistake: it is White's best way to defend d4", why: 'Defending d4 is good, but not at the cost of b2. The engine says Black is clearly better after 6...Qxb2.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'With 6.Be2, White keeps d4 defended three times. Why does 6.Bd3 not do the same?',
      moves: `${ADVANCE_QB6} Bd3`,
      orientation: 'white',
      choices: [
        { text: "On d3 the bishop blocks the queen's line from d1 to d4", correct: true, why: 'Yes. After ...cxd4 cxd4, d4 is then defended only by the f3-knight. 6.Bd3 is really a gambit (Module 2.6).' },
        { text: "On e2 the bishop guards d4, on d3 it doesn't", why: 'The bishop guards d4 from neither square. The difference is that on d3 it stands in the queen\'s way.' },
        { text: "With the bishop on d3, Black's queen can take on b2", why: 'The c1-bishop still guards b2. The problem with 6.Bd3 is on the d-file.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to play. What is the best plan?',
      moves: BE2,
      orientation: 'black',
      choices: [
        { text: '7...Nh6, heading for f5 to attack d4 a third time', correct: true, why: "Right. It is one of the engine's top moves. Two against two is not enough, so Black adds an attacker." },
        { text: '7...Nxd4, winning a pawn', why: '8.Nxd4 and Black has lost a knight for a pawn. If 8...Qxd4?? 9.Qxd4, Black loses the queen too.' },
        { text: '7...Bb4+, developing with check', why: 'After 8.Nc3, White blocks the check with a developing move, and the engine says White is better.' }
      ]
    },
    {
      type: 'concept',
      prompt: "Right after 5...Qb6, why doesn't the queen attack d4 yet?",
      moves: ADVANCE_QB6,
      orientation: 'black',
      choices: [
        { text: "Black's own c5-pawn stands on the diagonal between b6 and d4", correct: true, why: 'Yes. After ...cxd4 cxd4 the diagonal opens and the queen becomes a real attacker.' },
        { text: 'The d5-pawn is in the way', why: 'd5 is not on the b6–d4 diagonal. The square between b6 and d4 is c5.' },
        { text: "White's c3-pawn is in the way", why: 'c3 is not on the b6–d4 diagonal either. The blocker is Black\'s own c5-pawn.' }
      ]
    }
  ],
  key: { name: 'Advance 6.Be2 cxd4 7.cxd4: two against two', moves: BE2, orientation: 'black' },
  terms: [
    { term: 'Tension', meaning: 'Two pawns attack each other and neither side has taken yet, like c5 and d4. Whoever releases it, by taking, changes the position.' },
    { term: 'Gambit', meaning: 'An opening where one side gives up material, usually a pawn, for faster development or an attack.' },
    { term: 'Counting', meaning: 'Comparing how many pieces attack a square with how many defend it, before anyone takes there.' }
  ]
})
