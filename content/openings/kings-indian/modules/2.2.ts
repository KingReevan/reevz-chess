import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** 7.Nxe5? straight away: a knight for two pawns (engine-checked illustration) */
const EARLY_GRAB = `${CLASSICAL} Nxe5 dxe5 dxe5 Nfd7`
/** classical-8nxe5: 7.dxe5 dxe5 8.Nxe5?! Qxd1+ 9.Bxd1 Nxe4 10.Nxe4 Bxe5 */
const GRAB = `${CLASSICAL} dxe5 dxe5 Nxe5 Qxd1+ Bxd1 Nxe4 Nxe4 Bxe5`

export default defineModule({
  id: '2.2',
  title: 'Is the e5-pawn hanging?',
  minutes: 10,
  level: 2,
  goals: [
    'Count attackers and defenders on e5 and e4',
    'See why 7.Nxe5? simply loses a piece',
    'Learn the ...Nxe4 and ...Bxe5 answer to 8.Nxe5'
  ],
  intro:
    "After 6...e5, White's d-pawn and f3-knight both attack e5, and only the d6-pawn defends it. Two against one: surely White wins a pawn? This module counts carefully and finds the defender hiding behind the f6-knight.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Taking at once costs a piece',
      intro: 'First, the most direct grab. Count the attackers, but also count what each one is worth.',
      moves: EARLY_GRAB,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'Two against one',
          text: '6...e5. The d4-pawn and the f3-knight attack e5. Only the d6-pawn defends it. Simple counting says White wins a pawn.',
          arrows: [['d4', 'e5', 'red'], ['f3', 'e5', 'red'], ['d6', 'e5', 'green']],
          marks: ['e5']
        },
        13: {
          title: 'The knight grabs first',
          text: '7.Nxe5. The knight takes the pawn. The problem is that a pawn can now take the knight.',
          arrows: [['d6', 'e5', 'green']],
          ann: '?'
        },
        14: {
          title: 'Pawn takes knight',
          text: '7...dxe5. Black gives up a pawn and wins a knight. That is a very good trade for Black.',
          marks: ['e5']
        },
        15: {
          title: 'Two pawns for a knight',
          text: "8.dxe5. White wins a second pawn and attacks the f6-knight. But a knight is worth about three pawns, so White is still behind.",
          arrows: [['e5', 'f6', 'red']]
        },
        16: {
          title: 'Step aside, stay ahead',
          text: "8...Nfd7. The knight steps back, and now the d7-knight and the g7-bishop both hit e5. Black has a knight for two pawns and is much better.",
          arrows: [['d7', 'e5', 'red'], ['g7', 'e5', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Count the right way',
      body:
        "Counting attackers and defenders only works if you also look at **who takes first**. If the first piece to capture is worth more than what it takes, the trade loses.\n\nSo White's sensible try is to take with the cheapest unit first: 7.dxe5 dxe5. Now the d6-pawn has gone, the f3-knight attacks e5, and nothing seems to defend it. Is it a free pawn at last?"
    },
    {
      kind: 'walkthrough',
      title: 'The hidden defender',
      intro: "Watch the g7-bishop. It looks blocked, but it is only waiting for the f6-knight to move.",
      moves: GRAB,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'Same position',
          text: '6...e5. This time White takes with the pawn first.',
          arrows: [['d4', 'e5', 'red']]
        },
        13: {
          title: 'The pawn takes',
          text: '7.dxe5. White captures with the cheapest unit. Black must take back.',
          marks: ['e5']
        },
        14: {
          title: 'An open d-file',
          text: "7...dxe5. The d-file is open and the queens face each other. The e5-pawn has no pawn defending it now, and the f3-knight attacks it.",
          arrows: [['f3', 'e5', 'red'], ['d1', 'd8', 'blue']],
          marks: ['e5']
        },
        15: {
          title: 'White grabs',
          text: '8.Nxe5. White takes the pawn. Now count e4: the f6-knight attacks it and only the c3-knight defends it. And look behind the f6-knight.',
          arrows: [['f6', 'e4', 'red'], ['c3', 'e4', 'green'], ['g7', 'e5', 'yellow']],
          ann: '?!'
        },
        16: {
          title: 'Queens off with check',
          text: '8...Qxd1+. Black trades queens with check first. This is the most accurate order: White must take back at once.',
          arrows: [['d1', 'e1', 'red']]
        },
        17: {
          title: 'A clumsy recapture',
          text: '9.Bxd1. The bishop takes back and lands on d1, an awkward square. Taking with the king or the knight would be even worse for White.',
          marks: ['d1']
        },
        18: {
          title: 'The knight takes e4',
          text: '9...Nxe4. Black wins the pawn back. Now f6 is empty, and the g7-bishop sees all the way to the knight on e5, which has no defender.',
          arrows: [['g7', 'e5', 'red'], ['e4', 'c3', 'red']],
          marks: ['e5'],
          ann: '!'
        },
        19: {
          title: 'White takes the knight',
          text: '10.Nxe4. White removes the knight. For one move Black is a knight down.',
          marks: ['e5']
        },
        20: {
          title: 'The bishop wakes up',
          text: "10...Bxe5. The bishop takes the knight back. Each side has won one pawn, so material is level. Black's pieces are active, and if anything Black is a little better.",
          arrows: [['e5', 'b2', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Look behind the piece',
      body:
        "A piece can guard a square through one of its own pieces. When the front piece moves, often with a capture, the piece behind it wakes up. In the King's Indian the g7-bishop is the classic case: whenever the f6-knight jumps, check what the bishop can now see."
    }
  ],
  takeaway:
    'The e5-pawn only looks hanging. 7.Nxe5? loses a piece to ...dxe5, and after 7.dxe5 dxe5 8.Nxe5 Black wins the pawn straight back with ...Nxe4 and ...Bxe5.',
  lookAhead:
    "Since grabbing e5 wins nothing, White's real idea after 7.dxe5 dxe5 is to trade queens first. Module 2.3 shows that quiet endgame.",
  drills: [
    {
      title: 'Win the pawn back',
      prompt: "You're Black. White grabbed the pawn with 8.Nxe5 and the queens are off. Win the pawn back.",
      moves: GRAB,
      start: 17,
      side: 'black',
      hints: ['Which White pawn has only one defender?', 'Take on e4 with the knight. Then see what the g7-bishop can reach.'],
      success: '9...Nxe4! and 10...Bxe5. The hidden defender on g7 wins the pawn back, and material is level.'
    },
    {
      title: 'Punish the early grab',
      prompt: "You're Black. White just played 7.Nxe5?, taking with the knight first. Make White pay.",
      moves: `${CLASSICAL} Nxe5 dxe5`,
      start: 13,
      side: 'black',
      hints: ['The knight on e5 is attacked by one of your pawns.'],
      success: '7...dxe5. You win a knight for a pawn. Even after 8.dxe5, White has only two pawns for the piece.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'White has just played 8.Nxe5. Which Black piece will attack the e5-knight as soon as the f6-knight moves?',
      moves: `${CLASSICAL} dxe5 dxe5 Nxe5`,
      orientation: 'black',
      choices: [
        { text: 'The g7-bishop', correct: true, why: 'Yes. The bishop is hidden behind the f6-knight on the long diagonal. Once the knight jumps to e4, it hits e5.' },
        { text: 'The d8-queen', why: "The queen's lines from d8 don't reach e5. The hidden attacker is the bishop on g7." },
        { text: 'The c8-bishop', why: 'That bishop moves on light squares, and e5 is a dark square. It can never attack e5.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. How does Black win the pawn back?',
      moves: `${CLASSICAL} dxe5 dxe5 Nxe5 Qxd1+ Bxd1`,
      orientation: 'black',
      choices: [
        { text: '9...Nxe4', correct: true, why: 'Right. The knight takes e4, and the g7-bishop then wins the e5-knight back after 10.Nxe4 Bxe5.' },
        { text: '9...Nc6', why: 'It attacks the knight, but 10.Nxc6 bxc6 keeps White a pawn up and spoils your pawns.' },
        { text: '9...Nbd7', why: 'After 10.Nxd7 Nxd7 the knights are traded and White is still a pawn up.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move. Why is 7.Nxe5? a mistake here?',
      moves: CLASSICAL,
      orientation: 'white',
      choices: [
        { text: 'After 7...dxe5 8.dxe5, White has only two pawns for a knight', correct: true, why: 'Exactly. The first piece to capture was worth more than the pawn it took.' },
        { text: "It isn't a mistake: White wins a clean pawn", why: "Count values, not just numbers. The d6-pawn takes the knight, so White loses a piece for two pawns." },
        { text: 'Black answers 7...Nxe4 and wins a piece', why: "There's no need for tricks. The knight on e5 can simply be taken by the d6-pawn." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 7.dxe5 dxe5 8.Nxe5 Qxd1+ 9.Bxd1 Nxe4 10.Nxe4 Bxe5, what is the material balance?',
      moves: GRAB,
      orientation: 'black',
      choices: [
        { text: 'Level: each side has won one pawn', correct: true, why: 'Yes. White took e5, Black took e4, and the knights were traded. Nothing is left over.' },
        { text: 'White is a pawn up', why: 'White did take the e5-pawn, but Black took the e4-pawn back.' },
        { text: 'Black is a knight up', why: 'Black took a knight on e5, but White had just taken a knight on e4. The knights were simply traded.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In the line 7.dxe5 dxe5 8.Nxe5, which White pawn does Black take to win the material back?',
      choices: [
        { text: 'The e4-pawn', correct: true, why: 'Yes. 8...Qxd1+ 9.Bxd1 Nxe4 takes it, and then ...Bxe5 regains the knight.' },
        { text: 'The c4-pawn', why: 'Nothing attacks c4 here. The f6-knight goes to e4, the pawn that only the c3-knight defends.' },
        { text: 'The b2-pawn', why: 'The g7-bishop does look toward b2 later, but the pawn Black wins back is e4.' }
      ]
    },
    {
      type: 'order',
      prompt: 'If White wants to win the e5-pawn, why must the d-pawn take before the knight?',
      choices: [
        { text: 'Taking with the pawn first swaps off the d6-defender, so the knight is not lost', correct: true, why: 'Right. 7.Nxe5? dxe5 loses a piece. After 7.dxe5 dxe5 the knight can take safely, even though ...Nxe4 wins the pawn back.' },
        { text: 'The f3-knight is pinned and cannot move yet', why: 'Nothing pins the f3-knight. The problem with 7.Nxe5? is simply 7...dxe5.' },
        { text: 'Taking with the pawn first wins a pawn by force', why: "It doesn't. After 7.dxe5 dxe5 8.Nxe5, Black wins the pawn back with ...Nxe4 and ...Bxe5." }
      ]
    }
  ],
  key: { name: 'Winning back e5: 9...Nxe4!', moves: `${CLASSICAL} dxe5 dxe5 Nxe5 Qxd1+ Bxd1 Nxe4`, orientation: 'black' },
  terms: [
    { term: 'Counting', meaning: 'Adding up how many pieces attack and defend a square, and checking which one would capture first.' },
    { term: 'Hidden defender', meaning: 'A piece that guards a square through one of its own pieces. It starts working as soon as the front piece moves.' },
    { term: 'Material', meaning: 'The pieces and pawns each side has. "Level material" means neither side is ahead.' }
  ]
})
