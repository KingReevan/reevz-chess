import { defineModule } from '../../../types'
import { CLOSED_OO } from '../../../lines'

const MARSHALL = `${CLOSED_OO} c3 d5 exd5 Nxd5 Nxe5 Nxe5 Rxe5 c6`
const MAIN = `${MARSHALL} d4 Bd6 Re1 Qh4 g3 Qh3`
const H3 = `${MARSHALL} d4 Bd6 Re1 Qh4 h3 Bxh3 gxh3 Qxh3`

export default defineModule({
  id: '5.3',
  title: '12.d4 Bd6 13.Re1 Qh4: the attack begins',
  minutes: 10,
  level: 3,
  goals: [
    'See how ...Bd6 and ...Qh4 gang up on h2',
    'Understand why 14.g3 is forced',
    'Spot the light-square holes that ...Qh3 uses'
  ],
  intro:
    "Black has given a pawn and guarded the d5-knight. Now the attack starts. In three moves Black's queen travels from d8 to h3, right next to White's king. Why can't White stop it, and what does White's defence cost?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The queen arrives',
      intro: 'Watch the h2-square. Black aims two pieces at it.',
      moves: MAIN,
      start: 24,
      orientation: 'black',
      steps: {
        24: {
          title: 'The rook must move',
          text: "12...Bd6. The bishop attacks the rook on e5. White's rook has to move for the third time.",
          arrows: [['d6', 'e5', 'red']]
        },
        25: {
          title: 'The diagonal opens',
          text: "13.Re1. The rook goes back home. Now nothing stands between the d6-bishop and h2, a pawn guarded only by White's king.",
          arrows: [['d6', 'h2', 'red']],
          marks: ['h2']
        },
        26: {
          title: 'Two against one on h2',
          text: '13...Qh4. The queen joins the bishop. Both hit h2, and only the king defends it, so Black threatens 14...Qxh2+.',
          arrows: [['h4', 'h2', 'red'], ['d6', 'h2', 'red']],
          ann: '!'
        },
        27: {
          title: 'The forced reply',
          text: '14.g3. The pawn blocks the bishop and hits the queen. It saves h2, but before this move the g2-pawn guarded f3 and h3. Now those light squares have no pawn to guard them.',
          arrows: [['g3', 'h4', 'red']],
          marks: ['f3', 'h3']
        },
        28: {
          title: 'Into the hole',
          text: "14...Qh3. The queen settles on h3, where no pawn can chase it. It watches g2 and f1. A black bishop on f3 would support ...Qg2 mate, unless White can cover g2.",
          arrows: [['h3', 'g2', 'red'], ['h3', 'f1', 'red']],
          marks: ['f3']
        }
      }
    },
    {
      kind: 'text',
      title: 'Light squares around the king',
      body:
        "Before 14.g3, the pawns on f2, g2 and h2 stood guard. After g3, **f3 and h3** have no pawn to cover them, and **g2** is an empty square right in front of the king. All three are light squares.\n\nThat matters because Black still has a light-squared bishop on c8, ready to come to g4 and then f3. White's own light-squared bishop is far away on b3, so it can't help cover them. Weak squares of one colour are easiest to attack with the bishop of that colour."
    },
    {
      kind: 'walkthrough',
      title: 'Why not 14.h3?',
      intro: "14.h3 also stops ...Qxh2+, and it doesn't weaken the light squares. So what's wrong with it?",
      moves: H3,
      start: 26,
      orientation: 'black',
      steps: {
        26: {
          title: 'The threat on h2',
          text: '13...Qh4. Black threatens ...Qxh2+. White must deal with it.',
          arrows: [['h4', 'h2', 'red'], ['d6', 'h2', 'red']]
        },
        27: {
          title: 'A pawn step that fails',
          text: '14.h3. The pawn leaves h2, so ...Qxh2+ is gone. But now the h3-pawn is a target, guarded only by the g2-pawn.',
          marks: ['h3'],
          ann: '?'
        },
        28: {
          title: 'The bishop sacrifice',
          text: "14...Bxh3. The c8-bishop crashes in. If White doesn't take it, Black has won the pawn back and the bishop still eats into the king's cover.",
          arrows: [['c8', 'h3', 'red']],
          ann: '!'
        },
        29: {
          title: 'White takes',
          text: "15.gxh3. White wins a bishop, but the king's pawn shield is gone.",
          marks: ['g1']
        },
        30: {
          title: 'Mate is in the air',
          text: '15...Qxh3. Black threatens ...Bh2+, chasing the king into a mating net. White has to give back material just to survive, and Black stays clearly on top.',
          arrows: [['d6', 'h2', 'red'], ['h3', 'h2', 'red']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'Ignoring the threat loses at once',
      body:
        "If White plays a normal developing move such as 14.Be3, then 14...Qxh2+ 15.Kf1 and the king is driven into the open with Black's queen already inside. Against 13...Qh4, 14.g3 is the only move that holds."
    }
  ],
  takeaway:
    '...Bd6 and ...Qh4 attack h2 twice, so White must play 14.g3. That leaves holes on f3, g2 and h3, and Black\'s queen moves into h3.',
  lookAhead:
    "Next: how Black's other pieces join in, with ...Bg4, ...Rae8 and ...Re6.",
  drills: [
    {
      title: 'Bring the queen in',
      prompt: "You're Black. White has just played 12.d4. Bring your bishop and queen to the kingside, ending with the queen on h3.",
      moves: MAIN,
      start: 23,
      side: 'black',
      hints: ['First, attack the rook on e5 with a developing move.', 'Aim the bishop and the queen at h2, then move the queen into the hole on h3.'],
      success: '12...Bd6, 13...Qh4 and 14...Qh3. The queen is next to the king and White\'s light squares are weak.'
    },
    {
      title: 'Punish 14.h3?',
      prompt: "You're Black. White has just stopped ...Qxh2+ with 14.h3?. Find the way through.",
      moves: H3,
      start: 27,
      side: 'black',
      hints: ['The h3-pawn is guarded only once.', 'Your c8-bishop can reach h3. Sacrifice it, then take back with the queen.'],
      success: '14...Bxh3! 15.gxh3 Qxh3. White\'s king has no cover and Black threatens ...Bh2+.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 13...Qh4, what is Black threatening?',
      moves: `${MARSHALL} d4 Bd6 Re1 Qh4`,
      orientation: 'black',
      choices: [
        { text: '14...Qxh2+, because the queen and the d6-bishop both hit h2', correct: true, why: 'Right. Two attackers and only the king defending.' },
        { text: '14...Qxe1+', why: 'The f2-pawn blocks that diagonal. The target is h2.' },
        { text: '14...Qxd4', why: 'The d4-pawn is guarded by the c3-pawn and the queen. Taking it would lose Black\'s queen.' }
      ]
    },
    {
      type: 'move',
      prompt: "White to move. What is White's best defence?",
      moves: `${MARSHALL} d4 Bd6 Re1 Qh4`,
      orientation: 'white',
      choices: [
        { text: '14.g3', correct: true, why: 'Yes. It blocks the bishop and chases the queen. It is the only move that holds.' },
        { text: '14.h3', why: '14...Bxh3! 15.gxh3 Qxh3 and Black threatens ...Bh2+ with a winning attack.' },
        { text: '14.Be3', why: '14...Qxh2+ 15.Kf1 and the king is chased into the open.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What did 14.g3 cost White?',
      choices: [
        { text: 'The light squares f3 and h3 lost their pawn guard', correct: true, why: "Right. The g2-pawn used to cover them. Black's queen moves to h3 at once." },
        { text: 'The e1-rook is now pinned', why: 'Nothing pins the rook. The damage is on the kingside light squares.' },
        { text: 'The d4-pawn lost its defender', why: 'The c3-pawn and the queen still guard d4. The weakness is around the king.' }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'Black to move. White has just played 14.h3. What is the strongest move?',
      moves: `${MARSHALL} d4 Bd6 Re1 Qh4 h3`,
      orientation: 'black',
      choices: [
        { text: '14...Bxh3', correct: true, why: "Yes. After 15.gxh3 Qxh3 the king's cover is gone and ...Bh2+ is coming." },
        { text: '14...Qxh3', why: 'The g2-pawn simply takes the queen.' },
        { text: '14...Bf4', why: "It doesn't use the new target. The bishop sacrifice on h3 is much stronger." }
      ]
    },
    {
      type: 'plan',
      prompt: "After 14.g3 in the main line, where does Black's queen go, and why?",
      choices: [
        { text: 'To h3, on the light squares next to the king that no pawn can guard', correct: true, why: 'Right. From h3 it eyes g2 and f1, waiting for a bishop on f3 or g4.' },
        { text: 'To f6, to defend the d5-knight', why: 'The knight is already guarded by c6 and the queen is needed for the attack.' },
        { text: 'To g4, to offer a queen trade', why: 'A queen trade would end the attack. Black, the pawn down, wants queens on the board.' }
      ]
    }
  ],
  key: { name: 'Marshall Attack: 14...Qh3', moves: MAIN, orientation: 'black' },
  terms: [
    { term: 'Light squares', meaning: 'The squares of the light colour. A bishop stays on one colour all game, so each bishop controls only one set.' },
    { term: 'Hole', meaning: 'A square that no pawn can guard any more, so an enemy piece can sit there safely.' },
    { term: 'Pawn shield', meaning: "The pawns in front of a castled king. Moving them makes the king easier to attack." }
  ]
})
