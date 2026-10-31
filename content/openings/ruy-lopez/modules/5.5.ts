import { defineModule } from '../../../types'
import { CLOSED_OO } from '../../../lines'

const MARSHALL = `${CLOSED_OO} c3 d5 exd5 Nxd5 Nxe5 Nxe5 Rxe5 c6`
const QH3 = `${MARSHALL} d4 Bd6 Re1 Qh4 g3 Qh3`
const RE4 = `${QH3} Re4 g5 Qf1 Qh5 Nd2 Bf5 f3`
const D3 = `${MARSHALL} d3 Bd6 Re1 Bf5 Qf3 Qh4 g3 Qh3`

export default defineModule({
  id: '5.5',
  title: "White's tries: 15.Re4 and 12.d3",
  minutes: 11,
  level: 4,
  goals: [
    'Meet the rook lift 15.Re4 with ...g5 and ...Qh5',
    'Know the 12.d3 line with ...Bf5 and Qf3',
    "Understand White's defensive ideas: queen trades and guarding the light squares"
  ],
  intro:
    "The main line 15.Be3 isn't White's only defence. White can use the rook to fight the queen with 15.Re4, or play the quieter 12.d3 and bring the queen to f3. Both try the same thing in different ways: cover the light squares and trade queens if possible.",
  sections: [
    {
      kind: 'walkthrough',
      title: '15.Re4: the rook defends',
      intro: 'Instead of developing the bishop, White lifts the rook to the 4th rank.',
      moves: RE4,
      start: 28,
      orientation: 'black',
      steps: {
        28: {
          title: 'The usual position',
          text: '14...Qh3. The queen sits in the hole next to the king. White now has a choice of defences.',
          arrows: [['h3', 'g2', 'red']]
        },
        29: {
          title: 'A rook on the 4th rank',
          text: '15.Re4. The rook covers g4 and f4, so ...Bg4 and ...Nf4 are off. It also threatens Rh4, chasing the queen away from h3.',
          arrows: [['e4', 'h4', 'red'], ['e4', 'g4', 'blue']]
        },
        30: {
          title: 'Taking h4 away',
          text: '15...g5. The pawn guards h4 and f4. Now Rh4 is impossible, and the queen can stay.',
          arrows: [['g5', 'h4', 'green'], ['g5', 'f4', 'green']],
          ann: '!'
        },
        31: {
          title: 'Offering a queen trade',
          text: "16.Qf1. White's queen attacks h3 along the f1–h3 diagonal. Without queens, Black has no attack and is just a pawn down.",
          arrows: [['f1', 'h3', 'red']]
        },
        32: {
          title: 'Keep the queens on',
          text: '16...Qh5. Black steps aside. From h5 the queen still watches f3 and e2 along the diagonal.',
          arrows: [['h5', 'f3', 'yellow']]
        },
        33: {
          title: 'White develops',
          text: '17.Nd2. The knight comes out, guards the e4-rook and covers f3.',
          arrows: [['d2', 'e4', 'green'], ['d2', 'f3', 'green']]
        },
        34: {
          title: 'Hitting the rook',
          text: '17...Bf5. The bishop attacks the rook and gains a tempo. With the pawn on g5, Rh4 is no longer a worry.',
          arrows: [['f5', 'e4', 'red']]
        },
        35: {
          title: 'A solid wall',
          text: '18.f3. The pawn guards the rook again and blocks the queen\'s diagonal toward d1. The cost: the g3-pawn is now guarded only by the h-pawn.',
          arrows: [['f3', 'e4', 'green']],
          marks: ['g3']
        }
      }
    },
    {
      kind: 'text',
      title: "What White's defences have in common",
      body:
        "Look for these ideas whenever you defend, or attack, in the Marshall:\n\n**Trade queens.** Qf1 or Qf3 offers a trade. Black, a pawn down, should usually avoid it.\n\n**Guard f3 and g2.** A knight on d2, a queen on f1 or f3, or a pawn on f3.\n\n**Kick the queen.** Moves like Re4–h4 try to push Black's queen out of h3. That's why ...g5 is useful.\n\nBlack's answer is always the same: keep adding pieces and keep making threats."
    },
    {
      kind: 'walkthrough',
      title: '12.d3: the quiet road',
      intro: "This time White plays a more modest 12th move and brings the queen to f3.",
      moves: D3,
      start: 22,
      orientation: 'black',
      steps: {
        22: {
          title: 'The main-line position',
          text: "11...c6. The knight is guarded. Instead of 12.d4, White can push the d-pawn only one square.",
          marks: ['d2']
        },
        23: {
          title: 'One square only',
          text: '12.d3. The pawn opens a path for the c1-bishop and covers e4 and c4, so Black\'s pieces can\'t settle there.',
          arrows: [['d3', 'e4', 'green'], ['c1', 'g5', 'blue']]
        },
        24: {
          title: 'Same idea',
          text: '12...Bd6. As in the main line, the bishop hits the rook and points toward h2.',
          arrows: [['d6', 'e5', 'red']]
        },
        25: {
          title: 'The rook retreats',
          text: '13.Re1. The rook goes home and the d6-bishop now sees h2.',
          arrows: [['d6', 'h2', 'red']]
        },
        26: {
          title: 'Bishop to f5',
          text: '13...Bf5. The bishop aims at the d3-pawn, which only White\'s queen defends.',
          arrows: [['f5', 'd3', 'red']]
        },
        27: {
          title: 'The queen to f3',
          text: '14.Qf3. The queen attacks the f5-bishop and the d5-knight. It also guards g2 and covers g4, so ...Bg4 is no longer possible.',
          arrows: [['f3', 'f5', 'red'], ['f3', 'd5', 'red'], ['f3', 'g2', 'green']]
        },
        28: {
          title: 'Counterattack',
          text: '14...Qh4. Black ignores the bishop and threatens ...Qxh2+ again. If White takes on f5, the queen crashes into h2 and the attack is worth the piece.',
          arrows: [['h4', 'h2', 'red'], ['d6', 'h2', 'red']],
          ann: '!'
        },
        29: {
          title: 'The same weakening',
          text: '15.g3. White blocks the bishop and hits the queen, just as in the main line.',
          arrows: [['g3', 'h4', 'red']]
        },
        30: {
          title: 'Back to h3',
          text: "15...Qh3. The queen is in the hole again. This position is considered a critical test of the Marshall.",
          arrows: [['h3', 'g2', 'red']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'Same move, different moment',
      body:
        "After 15.Re4, the natural 15...Bf5? is a mistake: 16.Rh4! attacks the queen, and Black must give it up for the rook. Two moves later, after ...g5 has covered h4, ...Bf5 is a good move. Always check which squares your opponent's pieces can reach before you copy a pattern."
    }
  ],
  takeaway:
    "Against 15.Re4, play ...g5 to stop Rh4 and ...Qh5 to dodge the queen trade. Against 12.d3, the bishop goes to f5 and ...Qh4–h3 still forces g3. White's defences all aim to guard the light squares and trade queens.",
  lookAhead:
    "Next: many White players avoid the Marshall altogether. Module 5.6 starts with the Anti-Marshall 8.a4.",
  drills: [
    {
      title: 'Answer the rook lift',
      prompt: "You're Black. White has just played 15.Re4. Stop Rh4, avoid the queen trade and hit the rook.",
      moves: RE4.split(' ').slice(0, -1).join(' '),
      start: 29,
      side: 'black',
      hints: ['First, take the h4-square away from the rook with a pawn.', 'After that, step the queen to h5 to dodge the trade, then hit the rook with your light-squared bishop.'],
      success: '15...g5, 16...Qh5 and 17...Bf5. The queens stay on and every move comes with a point.'
    },
    {
      title: 'The 12.d3 line',
      prompt: "You're Black. White has played the quiet 12.d3. Bring your pieces as in the main line, but with the bishop going to f5.",
      moves: D3,
      start: 23,
      side: 'black',
      hints: ['Start by hitting the rook on e5 with your dark-squared bishop.', 'Bishop to f5, then the queen to h4 and h3.'],
      success: '12...Bd6, 13...Bf5, 14...Qh4 and 15...Qh3. The queen is in the hole again.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'White has just played 15.Re4. What is Black\'s best reply?',
      moves: `${QH3} Re4`,
      orientation: 'black',
      choices: [
        { text: '15...g5', correct: true, why: 'Right. The pawn covers h4, so the rook can never chase the queen with Rh4.' },
        { text: '15...Bg4', why: 'The rook covers g4. After 16.Rxg4 Black has lost a bishop.' },
        { text: '15...Bf5', why: '16.Rh4! attacks the queen, which has no good square. Black has to give it up for the rook.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does White play 16.Qf1 in the 15.Re4 line?',
      choices: [
        { text: 'To offer a queen trade, which would end Black\'s attack', correct: true, why: 'Yes. Without queens Black is just a pawn down. That\'s why Black answers 16...Qh5.' },
        { text: 'To defend the e4-rook', why: "From f1 the queen doesn't guard e4. It attacks the queen on h3." },
        { text: 'To prepare Qxf7+', why: 'The queen on f1 has no path to f7. It is offering a trade on h3.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 12.d3 line, what does 14.Qf3 do?',
      moves: `${MARSHALL} d3 Bd6 Re1 Bf5 Qf3`,
      orientation: 'black',
      choices: [
        { text: 'It attacks f5 and d5, and guards g2 and g4', correct: true, why: 'Right. It attacks and defends at the same time, and ...Bg4 is no longer possible.' },
        { text: 'It threatens Qxf7 mate', why: 'The f5-bishop blocks the f-file, and f7 is guarded by the rook and king.' },
        { text: 'It pins the d6-bishop', why: "The queen doesn't line up with d6. Its targets are f5 and d5." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Black has just played 14...Qh4 in the 12.d3 line. What does it threaten?',
      moves: `${MARSHALL} d3 Bd6 Re1 Bf5 Qf3 Qh4`,
      orientation: 'black',
      choices: [
        { text: '...Qxh2+', correct: true, why: 'Yes. The queen and the d6-bishop both hit h2, guarded only by the king.' },
        { text: '...Qxf2+', why: "f2 is guarded by White's queen on f3 and by the king. The queen would be lost." },
        { text: '...Bxd3', why: "The d3-pawn is guarded by White's queen along the 3rd rank. The real threat is on h2." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In the 15.Re4 line, what is the point of 15...g5?',
      choices: [
        { text: 'It controls h4, so the rook can\'t chase the queen with Rh4', correct: true, why: 'Right. The queen can stay near the king.' },
        { text: 'It attacks the e4-rook', why: 'A pawn on g5 attacks f4 and h4, not e4.' },
        { text: "It prepares ...g4 to trap White's queen", why: "White's queen is on d1, far away. The pawn's job is to cover h4." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Which defensive idea do White\'s 15.Re4 and 12.d3 lines share?',
      choices: [
        { text: 'Bring the queen to f1 or f3 to guard the light squares and offer a trade', correct: true, why: 'Yes. Both lines use the queen to cover g2 and try to trade off Black\'s most dangerous attacker.' },
        { text: 'Attack Black\'s king with h4 and h5', why: "White is the one defending here. The h-pawn stays home to guard g3 and h2." },
        { text: 'Win the d5-knight with c3–c4', why: "That isn't the plan in these lines. White's first job is guarding g2 and f3." }
      ]
    }
  ],
  key: { name: 'Marshall Attack: 15.Re4 g5', moves: `${QH3} Re4 g5`, orientation: 'black' },
  terms: [
    { term: 'Queen trade', meaning: 'Both queens come off the board. The defending side often wants this, because it ends most attacks.' },
    { term: 'Rank', meaning: 'A row of the board, numbered 1 to 8. A rook on the 4th rank moves along row 4.' },
    { term: 'Critical test', meaning: 'A line that puts the most pressure on an opening, so the opening stands or falls by it.' }
  ]
})
