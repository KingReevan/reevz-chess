import { defineModule } from '../../../types'
import { OPEN } from '../../../lines'

/** open + 9.c3 Bc5 */
const TABIYA = `${OPEN} c3 Bc5`
/** open-9c3-bc5 to 11.Bc2, then a careless 11...h6? */
const HIT = `${OPEN} c3 Bc5 Nbd2 O-O Bc2 h6 Nxe4 dxe4 Bxe4`

export default defineModule({
  id: '6.3',
  title: '8.dxe5 Be6: the Open tabiya',
  minutes: 10,
  level: 2,
  goals: [
    'Know why 8...Be6 is needed to guard d5',
    "Understand the trade: Black's active pieces against White's e5-pawn",
    'Learn the key squares: d4 for White, c5 for Black'
  ],
  intro:
    "After 8.dxe5 Be6 we reach the Open tabiya, the starting position of almost every Open Defense game. Before learning the main lines, it pays to understand this position: what each side has, and which squares they fight over.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Into the tabiya',
      intro: "You're Black. Look at the d5-pawn and the squares around the e5-pawn.",
      moves: TABIYA,
      start: 14,
      orientation: 'black',
      steps: {
        14: {
          title: 'The knight is anchored',
          text: 'After 7...d5 the pawn guards the e4-knight, and the b3-bishop\'s diagonal is blocked.',
          arrows: [['d5', 'e4', 'green']]
        },
        15: {
          title: 'The wedge on e5',
          text: '8.dxe5. White wins the pawn back. The new pawn on e5 takes the d6 and f6 squares away from Black\'s pieces. It also opens the d-file, so the d5-pawn is now attacked twice: by the b3-bishop and the queen.',
          arrows: [['b3', 'd5', 'red'], ['d1', 'd5', 'red']],
          marks: ['d6', 'f6']
        },
        16: {
          title: 'Guard the anchor',
          text: '8...Be6. The bishop guards d5, so the pawn is defended twice. If d5 fell, the e4-knight would lose its support. This is the Open tabiya.',
          arrows: [['e6', 'd5', 'green'], ['d8', 'd5', 'green']],
          ann: '!'
        },
        17: {
          title: "White's main move",
          text: '9.c3. The pawn covers d4 and b4, and it clears c2 for the bishop. From c2 the bishop will aim at the e4-knight.',
          arrows: [['c3', 'd4', 'green'], ['b3', 'c2', 'blue']],
          marks: ['d4']
        },
        18: {
          title: 'The bishop finds c5',
          text: '9...Bc5. The most active square for this bishop. It aims at f2, next to White\'s king, and at d4, the square White wants for a knight. 9...Be7 is the quieter choice (Module 6.4).',
          arrows: [['c5', 'f2', 'yellow'], ['c5', 'd4', 'yellow']],
          marks: ['c5']
        }
      }
    },
    {
      kind: 'text',
      title: 'The two key squares',
      body:
        "**d4 for White.** A white knight on d4 hits c6 and e6, and Black has no e-pawn left to chase it away. White often brings a knight there, from f3 or by the route d2-b3-d4.\n\n**c5 for Black.** A bishop on c5 aims at d4 and f2. A knight on c5 attacks the b3-bishop. That is why White's knight on b3 is so useful: it attacks c5 and covers d4 at the same time.\n\nBehind both squares is the bigger trade. Black has free, active pieces. White has the e5-pawn, which cramps Black's kingside and stops ...f6 or ...d6 ideas from coming easily."
    },
    {
      kind: 'walkthrough',
      title: "White's plan: hit the knight",
      intro: "Now you're White. Your pieces line up against the e4-knight. Watch what happens if Black doesn't react.",
      moves: HIT,
      start: 18,
      orientation: 'white',
      steps: {
        18: {
          title: 'The knight is the target',
          text: "Black's knight on e4 is the star of the Open Defense. White's plan is simple: attack it until it must leave or be traded.",
          marks: ['e4']
        },
        19: {
          title: 'First attacker',
          text: '10.Nbd2. The knight attacks e4 and offers a trade. Right now e4 is attacked once and guarded once, by d5.',
          arrows: [['d2', 'e4', 'red'], ['d5', 'e4', 'green']]
        },
        20: {
          title: 'Black castles',
          text: '10...O-O. Black gets the king to safety. Nothing is lost yet.',
          arrows: [['e8', 'g8', 'blue']]
        },
        21: {
          title: 'Second attacker',
          text: '11.Bc2. Now the bishop hits e4 too. Two attackers, one defender. White threatens Nxe4, dxe4 and Bxe4, winning a pawn.',
          arrows: [['c2', 'e4', 'red'], ['d2', 'e4', 'red']],
          marks: ['e4']
        },
        22: {
          title: 'Black ignores it',
          text: "11...h6. A harmless-looking move, but it does nothing about e4. Black's good answers are the subject of Modules 6.5 and 6.6.",
          ann: '?'
        },
        23: {
          title: 'White takes',
          text: '12.Nxe4. The knight takes the knight.',
          arrows: [['d5', 'e4', 'blue']]
        },
        24: {
          title: 'Forced recapture',
          text: '12...dxe4. Black takes back, but the e4-pawn now has no defender.',
          marks: ['e4']
        },
        25: {
          title: 'A pawn up',
          text: '13.Bxe4. White has won a pawn. The bishop also hits the c6-knight, which has no defender, and looks at h7.',
          arrows: [['e4', 'c6', 'red'], ['e4', 'h7', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Count attackers on e4',
      body:
        "In the Open Defense, always count on e4. When White adds an attacker (Nbd2, Bc2, Re1), Black must add a defender (...Bf5, ...f5), move the knight (...Nc5), or strike first with a tactic. If you lose count, you lose the knight's pawn."
    }
  ],
  takeaway:
    "In the Open tabiya, 8...Be6 guards d5, the pawn that anchors the e4-knight. White fights for d4 and piles up on e4 with c3, Nbd2 and Bc2. Black fights for c5 and must keep counting on e4.",
  lookAhead:
    "Next: 9.c3 Be7, the quieter set-up, and the old Tarrasch trap that every Open player must know.",
  drills: [
    {
      title: 'The Open from memory',
      prompt: "You're Black after 5.O-O. Play the Open Defense main line to the tabiya.",
      moves: OPEN,
      start: 9,
      side: 'black',
      hints: ['Take the pawn, kick the bishop, anchor the knight.', 'After 8.dxe5, the d5-pawn is attacked twice. Guard it with a bishop.'],
      success: '5...Nxe4, 6...b5, 7...d5 and 8...Be6. This is the Open tabiya.'
    },
    {
      title: 'Win the e4-pawn',
      prompt: "You're White. Black just played 11...h6?, ignoring your threat. Cash in.",
      moves: HIT,
      start: 22,
      side: 'white',
      hints: ['Count attackers and defenders on e4.', 'Trade knights first, then take the pawn with the bishop.'],
      success: '12.Nxe4 dxe4 13.Bxe4. You are a pawn up, and the bishop hits c6.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does Black play 8...Be6?',
      moves: `${OPEN.split(' ').slice(0, -1).join(' ')}`,
      orientation: 'black',
      choices: [
        { text: 'To guard d5, which the b3-bishop and the queen attack', correct: true, why: 'Right. d5 anchors the e4-knight, so it must not fall.' },
        { text: 'To attack the b3-bishop', why: 'The bishop on e6 faces b3, but the d5-pawn is in between. The job is defense.' },
        { text: 'To prepare ...Bxa2', why: "That's not the idea. The bishop guards d5 and keeps the center together." }
      ]
    },
    {
      type: 'concept',
      prompt: "What does White's pawn on e5 do in the Open tabiya?",
      moves: OPEN,
      orientation: 'white',
      choices: [
        { text: "It takes d6 and f6 away from Black's pieces and cramps the kingside", correct: true, why: 'Yes. That pawn is what White gets in return for Black\'s active pieces.' },
        { text: 'It attacks the e4-knight', why: 'A pawn on e5 attacks d6 and f6. It cannot attack e4, which is behind it.' },
        { text: 'It is weak and Black will soon win it', why: 'The f3-knight guards it, and Black has no easy way to attack it. It is a strength, not a weakness.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Which square does White most want for a knight in the Open Defense?',
      moves: `${OPEN} c3`,
      orientation: 'white',
      choices: [
        { text: 'd4', correct: true, why: 'Right. From d4 a knight hits c6 and e6, and Black has no e-pawn to chase it.' },
        { text: 'c5', why: 'That is the square Black wants, for a bishop or a knight. White fights it with Nb3.' },
        { text: 'h4', why: 'A knight on h4 is on the edge and does little here. d4 is the central square.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White has played Nbd2 and Bc2. What is the threat?',
      moves: `${OPEN} c3 Bc5 Nbd2 O-O Bc2`,
      orientation: 'black',
      choices: [
        { text: 'Nxe4, then Bxe4, winning a pawn', correct: true, why: 'Yes. Two attackers against one defender on e4. Black must react now.' },
        { text: 'Bxh7+, winning a pawn with check', why: 'The e4-knight blocks the bishop\'s diagonal to h7. The target is e4.' },
        { text: 'There is no threat', why: 'Count on e4: the d2-knight and the c2-bishop attack it, and only d5 guards it.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Black has just played 8...Be6. What is this position?',
      moves: OPEN,
      orientation: 'black',
      choices: [
        { text: 'The Open Defense tabiya', correct: true, why: 'Right. 5...Nxe4 6.d4 b5 7.Bb3 d5 8.dxe5 Be6 is the main starting point of the Open.' },
        { text: 'The Closed tabiya', why: 'The Closed tabiya comes after 5...Be7 and 9.h3, with pawns still on e4 and e5.' },
        { text: 'The Marshall Attack', why: 'The Marshall comes from the Closed, with 8...d5 as a pawn sacrifice.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 9.c3 a useful move for White?',
      choices: [
        { text: 'It covers d4 and gives the bishop the c2-square', correct: true, why: 'Yes. A knight can use d4, and the bishop can retreat to c2 and aim at e4.' },
        { text: 'It attacks the e4-knight', why: 'A pawn on c3 attacks b4 and d4. The knight is attacked later by Nbd2 and Bc2.' },
        { text: 'It stops ...Be6', why: 'Black has already played ...Be6. The pawn on c3 has nothing to do with that bishop.' }
      ]
    }
  ],
  key: { name: 'Open Defense tabiya: 8.dxe5 Be6', moves: OPEN, orientation: 'black' },
  terms: [
    { term: 'Tabiya', meaning: 'A well-known starting position of an opening, where the real game begins.' },
    { term: 'Wedge', meaning: 'An advanced pawn stuck deep in the enemy position that takes squares away from enemy pieces.' },
    { term: 'Outpost', meaning: 'A square where a piece cannot be chased away by enemy pawns.' }
  ]
})
