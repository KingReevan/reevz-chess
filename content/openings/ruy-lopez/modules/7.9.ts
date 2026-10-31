import { defineModule } from '../../../types'
import { BERLIN } from '../../../lines'

/** berlin-fishing-pole-7ne1 */
const POLE = `${BERLIN} O-O Ng4 h3 h5 hxg4 hxg4 Ne1 Qh4 f3 g3 Rf2 Qh1#`
/** mortimer-trap */
const MORTIMER = `${BERLIN} d3 Ne7 Nxe5 c6 Ba4 Qa5+`
/** anti-berlin-5bxc6-nxe5-trap */
const QD4 = `${BERLIN} d3 Bc5 Bxc6 dxc6 Nxe5 Qd4 Nf3 Qxf2#`

export default defineModule({
  id: '7.9',
  title: 'Berlin traps: Fishing Pole and Mortimer',
  minutes: 12,
  level: 2,
  goals: [
    'See how the Fishing Pole uses the open h-file',
    'Spring the Mortimer fork, ...Qa5+',
    'Punish 6.Nxe5? in the Anti-Berlin with ...Qd4! and ...Qxf2#'
  ],
  intro:
    "Every opening has its traps, and the Berlin has three famous ones. Two of them, the Fishing Pole and the Mortimer, start with a dubious Black move and only work if White grabs. The third is a sound trick you can hope for every time White plays 5.Bxc6. Learn all three, and learn which ones to trust.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Fishing Pole',
      intro: 'The knight on g4 is the bait, and the h-pawn is the hook.',
      moves: POLE,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'White castles',
          text: '4.O-O. White castles. Black tries something tricky.',
          marks: ['g1']
        },
        8: {
          title: 'The bait',
          text: '4...Ng4. The knight jumps toward White\'s king. It does nothing for e5 and can be chased, so objectively it is a poor move.',
          arrows: [['g4', 'f2', 'blue']],
          ann: '?!'
        },
        9: {
          title: 'The knight is attacked',
          text: '5.h3. The pawn attacks the knight. If it retreats with 5...Nf6, then 6.Bxc6 dxc6 7.Nxe5 simply wins a pawn for White.',
          arrows: [['h3', 'g4', 'red']]
        },
        10: {
          title: 'The hook',
          text: '5...h5. Black leaves the knight where it is. If White takes it, the h-file opens.',
          arrows: [['h8', 'h1', 'blue']],
          marks: ['g4'],
          ann: '!?'
        },
        11: {
          title: 'White bites',
          text: '6.hxg4. This is the big mistake. White wins a knight but opens the h-file in front of the king.',
          marks: ['g4'],
          ann: '??'
        },
        12: {
          title: 'The h-file opens',
          text: '6...hxg4. The h8-rook looks straight at h1, and the g4-pawn attacks the f3-knight.',
          arrows: [['h8', 'h1', 'red'], ['g4', 'f3', 'red']]
        },
        13: {
          title: 'The knight runs',
          text: '7.Ne1. The knight escapes, but Black\'s queen is one move from the h-file.',
          arrows: [['d8', 'h4', 'blue']]
        },
        14: {
          title: 'The queen arrives',
          text: '7...Qh4. Now ...Qh2# and ...Qh1# are both threatened.',
          arrows: [['h4', 'h2', 'red'], ['h8', 'h4', 'red']]
        },
        15: {
          title: 'Making room',
          text: '8.f3. White opens f2 for the king, so ...Qh2+ would no longer be mate.',
          marks: ['f2']
        },
        16: {
          title: 'Shutting the door',
          text: '8...g3. The pawn takes f2 and h2 away from the king. Both mates are threatened again, and White has no defense.',
          arrows: [['g3', 'f2', 'red'], ['g3', 'h2', 'red']]
        },
        17: {
          title: 'Nothing helps',
          text: '9.Rf2. The rook frees f1 for the king. It stops ...Qh2#, but not the other mate.',
          marks: ['f1']
        },
        18: {
          title: 'Checkmate',
          text: "9...Qh1#. The h8-rook protects the queen. The king can't escape: f1 is covered through g1, h2 by the queen and the g3-pawn, and White's own rook and pawn block f2 and g2.",
          arrows: [['h8', 'h1', 'red'], ['h1', 'f1', 'red']],
          marks: ['g1']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The Mortimer trap',
      intro: 'Black leaves e5 hanging on purpose against the Anti-Berlin.',
      moves: MORTIMER,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'The Anti-Berlin',
          text: '4.d3. White protects e4. Mortimer\'s idea comes now.',
          arrows: [['d3', 'e4', 'green']]
        },
        8: {
          title: 'e5 left alone',
          text: '4...Ne7. The knight retreats and leaves e5 unprotected. It looks like a blunder, and that is the bait. Objectively it is an inferior move.',
          marks: ['e5'],
          ann: '?!'
        },
        9: {
          title: 'White grabs',
          text: '5.Nxe5. White takes the free pawn.',
          marks: ['e5'],
          ann: '?'
        },
        10: {
          title: 'Two things at once',
          text: '5...c6. The pawn attacks the b5-bishop, and it also opens the d8-a5 diagonal for Black\'s queen.',
          arrows: [['c6', 'b5', 'red'], ['d8', 'a5', 'blue']],
          ann: '!'
        },
        11: {
          title: 'The natural retreat',
          text: '6.Ba4. The bishop steps back, but it walks into a fork. (6.Bc4 runs into the same idea.)',
          marks: ['a4'],
          ann: '?'
        },
        12: {
          title: 'The fork',
          text: '6...Qa5+. The queen checks the king and attacks the e5-knight along the fifth rank. After White deals with the check, Black takes the knight.',
          arrows: [['a5', 'e1', 'red'], ['a5', 'e5', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The ...Qd4 mate in the Anti-Berlin',
      intro: 'A sound trap. You met the ...Qd4 fork in Module 2.2; here it ends in mate.',
      moves: QD4,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The active bishop',
          text: '4...Bc5. The bishop aims at f2, next to White\'s king.',
          arrows: [['c5', 'f2', 'blue']]
        },
        9: {
          title: 'Bishop for knight',
          text: '5.Bxc6. White doubles Black\'s c-pawns, as in Module 7.8.',
          marks: ['c6']
        },
        10: {
          title: 'The d-file opens',
          text: '5...dxc6. Black\'s queen now looks down the open d-file toward d4. The e5-pawn looks loose.',
          arrows: [['d8', 'd4', 'blue']],
          marks: ['e5']
        },
        11: {
          title: 'The grab',
          text: '6.Nxe5. White takes the pawn. Do you remember what the queen does now?',
          marks: ['e5'],
          ann: '?'
        },
        12: {
          title: 'Fork and mate threat',
          text: '6...Qd4. The queen hits the e5-knight and, together with the c5-bishop, threatens ...Qxf2#. White can stop the mate, but then loses the knight.',
          arrows: [['d4', 'e5', 'yellow'], ['d4', 'f2', 'red'], ['c5', 'f2', 'red']],
          ann: '!'
        },
        13: {
          title: 'The wrong retreat',
          text: '7.Nf3. The knight attacks the queen, but it does not stop the mate.',
          arrows: [['f3', 'd4', 'red']],
          ann: '??'
        },
        14: {
          title: 'Checkmate',
          text: '7...Qxf2#. The c5-bishop protects the queen. The king cannot take it, and every escape square is covered.',
          arrows: [['c5', 'f2', 'red']],
          marks: ['e1']
        }
      }
    },
    {
      kind: 'warning',
      title: 'Traps are a bonus, not a plan',
      body:
        "4...Ng4 and 4...Ne7 are objectively poor moves. They only work if White grabs. Against careful play Black is simply worse: after 4...Ng4 5.h3 Nf6 6.Bxc6 dxc6 7.Nxe5 White is a pawn up, and after 5...h5 White can just leave the knight alone.\n\nFor your real games, play the main lines from Modules 7.2 to 7.8. The ...Qd4 trap is different. It comes from a sound line, so you can hope for it every time White plays 5.Bxc6."
    },
    {
      kind: 'history',
      title: "Mortimer's bad luck",
      body:
        'The Mortimer trap is named after the player who tried 4...Ne7 at London 1883. He lost all three games in which he played it.'
    }
  ],
  takeaway:
    'The Fishing Pole and the Mortimer only work if White grabs: hxg4 opens the h-file, and Nxe5 runs into ...c6 and ...Qa5+. The sound trap is in the Anti-Berlin: after 5.Bxc6 dxc6 6.Nxe5?, play 6...Qd4!.',
  lookAhead:
    'That completes the Berlin. Chapter 8 covers the rest of Black\'s third-move defenses, starting with the Schliemann, 3...f5.',
  drills: [
    {
      title: 'Punish the grab',
      prompt: "You're Black. White has just taken on e5 with 6.Nxe5?. Find the queen move that hits two things, then finish the game.",
      moves: QD4,
      start: 11,
      side: 'black',
      hints: [
        'Your queen can reach d4 down the open d-file. What would it attack there?',
        'After 7.Nf3, look at f2. Which of your pieces already aims at it?'
      ],
      success: '6...Qd4! and 7...Qxf2#. The c5-bishop and the queen work together against f2.'
    },
    {
      title: 'Spring the Mortimer',
      prompt: "You're Black. Against 4.d3, set the Mortimer trap. If White grabs e5 and retreats the bishop, fork the king and the knight.",
      moves: MORTIMER,
      start: 7,
      side: 'black',
      hints: [
        'Retreat the f6-knight to e7, leaving e5 unprotected.',
        'After 5.Nxe5, attack the bishop with a pawn that also opens a diagonal for your queen. After 6.Ba4, check from a5.'
      ],
      success: '4...Ne7, 5...c6 and 6...Qa5+. The queen checks the king and hits the e5-knight at the same time.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'White to move. Black has left the knight on g4. Which move is the big mistake?',
      moves: `${BERLIN} O-O Ng4 h3 h5`,
      orientation: 'black',
      choices: [
        { text: '6.hxg4', correct: true, why: "Right. After 6...hxg4 the h-file is open for Black's rook and queen, and White's king is in serious danger." },
        { text: '6.c3', why: 'A good move. White keeps the h-file closed and prepares d4. Leaving the bait alone is the right idea.' },
        { text: '6.d4', why: 'Also good. White strikes in the center and leaves the knight on g4 alone.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. Finish the game.',
      moves: POLE.split(' ').slice(0, 17).join(' '),
      orientation: 'black',
      choices: [
        { text: '9...Qh1#', correct: true, why: 'Yes. The h8-rook guards the queen, and the king has no escape square.' },
        { text: '9...gxf2+', why: 'It wins a rook, but after 10.Kf1 the game goes on. There was mate in one.' },
        { text: '9...Qh2+', why: 'Now that the rook has left f1, the king escapes with 10.Kf1.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White has just retreated with 6.Ba4. What wins?',
      moves: MORTIMER.split(' ').slice(0, 11).join(' '),
      orientation: 'black',
      choices: [
        { text: '6...Qa5+', correct: true, why: 'Right. The queen checks along a5-e1 and attacks e5 along the fifth rank. Black wins the knight.' },
        { text: '6...d6', why: 'It chases the knight, but after 7.Nf3 White keeps the extra pawn.' },
        { text: '6...b5', why: 'After 7.Bb3 the bishop escapes and White is still a pawn up.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White has just played 7.Nf3. What is the strongest move?',
      moves: QD4.split(' ').slice(0, 13).join(' '),
      orientation: 'black',
      choices: [
        { text: '7...Qxf2#', correct: true, why: "Checkmate. The c5-bishop protects the queen on f2." },
        { text: '7...Qxe4+', why: 'It wins a pawn with check, but there was mate in one.' },
        { text: '7...Qxb2', why: 'A pawn grab that misses mate on f2.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why is 4...Ng4 objectively a poor move?',
      moves: `${BERLIN} O-O Ng4`,
      orientation: 'black',
      choices: [
        { text: 'After 5.h3 Nf6 6.Bxc6 dxc6 7.Nxe5, White simply wins a pawn', correct: true, why: 'Right. The knight trip wastes time and leaves e5 without enough defense.' },
        { text: 'It is illegal to move the same piece twice in the opening', why: "There's no such rule. It's just a waste of time here." },
        { text: 'It loses the queen at once', why: "Nothing that drastic. It just costs time and, against good play, a pawn." }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Mortimer trap, what makes 6...Qa5+ work?',
      moves: MORTIMER,
      orientation: 'black',
      choices: [
        { text: 'The queen gives check and attacks the e5-knight at the same time', correct: true, why: 'Yes. It is a fork: White must answer the check, and then the knight falls.' },
        { text: 'The queen pins the knight to the king', why: 'The knight on e5 and the king on e1 are not on one line with a5. It is a fork, not a pin.' },
        { text: 'The queen traps the a4-bishop', why: 'The bishop is not the target. The check and the attack on e5 are.' }
      ]
    }
  ],
  key: { name: 'Anti-Berlin trap: 6.Nxe5? Qd4!', moves: QD4.split(' ').slice(0, 12).join(' '), orientation: 'black' },
  terms: [
    { term: 'Trap', meaning: 'A move or idea that tempts the opponent into a natural-looking mistake.' },
    { term: 'Bait', meaning: 'Material offered on purpose to lure the opponent into a trap.' },
    { term: 'Mate threat', meaning: 'A move that threatens checkmate next move. The opponent must stop it before anything else.' }
  ]
})
