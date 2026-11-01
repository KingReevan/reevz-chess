import { defineModule } from '../../../types'
import { CLASSICAL, KID } from '../lines'

/** petrosian-7d5-nbd7: 7.d5 Nbd7 8.Bg5 h6 9.Bh4 g5 10.Bg3 Nh5 11.h4 g4 */
const KERES = `${CLASSICAL} d5 Nbd7 Bg5 h6 Bh4 g5 Bg3 Nh5 h4 g4`
/** kid-6bg5-h6: 6.Bg5 h6 7.Bh4 g5 8.Bg3 Nh5, then 9.Be2 Nxg3 10.hxg3 (engine-checked) */
const HUNT = `${KID} Nf3 O-O Bg5 h6 Bh4 g5 Bg3 Nh5 Be2 Nxg3 hxg3`
/** The same hunt, stopping at 8...Nh5 */
const HUNT_NH5 = `${KID} Nf3 O-O Bg5 h6 Bh4 g5 Bg3 Nh5`

export default defineModule({
  id: '5.2',
  title: 'Breaking a pin: ...h6, ...g5, ...Nh5',
  minutes: 10,
  level: 3,
  goals: [
    'Break a Bg5 pin by kicking the bishop with ...h6 and ...g5',
    'Use ...Nh5 to hunt the bishop and win the bishop pair',
    'Know the price: a looser kingside, and how White hits back with h4'
  ],
  intro:
    "Module 5.1 showed the quiet way to escape a Bg5 pin: ...h6, ...Qe8 and ...Nh7. There is a sharper way. Black can chase the bishop with pawns until the pin is gone, then jump at it with a knight. When does this work, and what does it cost?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Chasing the bishop in the Petrosian',
      intro: 'This is 7.d5 Nbd7 with ...h6 and ...g5, which lichess calls the Keres Defense. Count the squares the bishop has left.',
      moves: KERES,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'The Petrosian again',
          text: '7.d5. White closes the center and gets ready for Bg5.',
          marks: ['c6']
        },
        14: {
          title: 'Knight to d7',
          text: '7...Nbd7. The knight heads for c5 by another road. On d7 it also guards e5 and the f6-knight.',
          arrows: [['d7', 'c5', 'green']]
        },
        15: {
          title: 'The pin',
          text: '8.Bg5. The f6-knight is pinned to the queen on d8.',
          arrows: [['g5', 'd8', 'red']],
          marks: ['f6']
        },
        16: {
          title: 'First kick',
          text: '8...h6. The pawn attacks the bishop. White keeps the pin by stepping back to h4.',
          arrows: [['h6', 'g5', 'red']]
        },
        17: {
          title: 'Still pinned',
          text: '9.Bh4. The bishop is still on the h4–d8 diagonal, so the knight is still stuck.',
          arrows: [['h4', 'd8', 'red']]
        },
        18: {
          title: 'Second kick',
          text: "9...g5. Now the bishop must leave the diagonal, and the pin is broken. The price: Black's kingside pawns have moved forward, and the f5-square can no longer be guarded by a pawn.",
          arrows: [['g5', 'h4', 'red']],
          marks: ['f5'],
          ann: '!'
        },
        19: {
          title: 'The bishop retreats',
          text: '10.Bg3. The bishop is safe for now, but look how few squares it has. h4 and f4 are covered by the g5-pawn, and the e5-pawn is guarded by d6 and the d7-knight.',
          marks: ['h4', 'f4']
        },
        20: {
          title: 'The knight jumps',
          text: '10...Nh5. The f6-knight is free, so it jumps at the bishop. Black threatens ...Nxg3, which wins the bishop pair. ...Nf4 is another idea.',
          arrows: [['h5', 'g3', 'red'], ['h5', 'f4', 'blue']],
          ann: '!'
        },
        21: {
          title: 'White hits back',
          text: "11.h4. White attacks the g5-pawn. If the h-file opens, White's rook on h1 is ready to use it.",
          arrows: [['h4', 'g5', 'red'], ['h1', 'h6', 'blue']]
        },
        22: {
          title: 'Keep it closed',
          text: '11...g4. The pawn kicks the f3-knight and keeps the h-file shut. The position is roughly equal, and the g3-bishop is still short of squares.',
          arrows: [['g4', 'f3', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Hunting the bishop before it pins',
      intro: "Against 6.Bg5 (the Zinnowitz Variation, Module 5.8) nothing is pinned yet: the e7-pawn stands between f6 and d8. But as soon as Black's e-pawn moves, the pin appears. So Black hunts the bishop first.",
      moves: HUNT,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'Black has castled',
          text: '5...O-O. Black is ready for ...e5 or ...c5. White chooses a different 6th move.',
          arrows: [['e7', 'e5', 'blue'], ['c7', 'c5', 'blue']]
        },
        11: {
          title: 'The bishop comes early',
          text: '6.Bg5. The bishop eyes f6. If Black plays ...e5 or ...e6 now, the f6-knight becomes pinned to the queen.',
          arrows: [['g5', 'f6', 'red']],
          marks: ['e7']
        },
        12: {
          title: 'Ask at once',
          text: '6...h6. Black kicks the bishop before the pin even exists.',
          arrows: [['h6', 'g5', 'red']]
        },
        13: {
          title: 'Bishop to h4',
          text: '7.Bh4. White keeps the bishop on the diagonal toward d8.',
          arrows: [['h4', 'd8', 'blue']]
        },
        14: {
          title: 'Kick again',
          text: '7...g5. The bishop has to move again.',
          arrows: [['g5', 'h4', 'red']]
        },
        15: {
          title: 'Into a corner',
          text: '8.Bg3. The bishop retreats. Black now has a target.',
          marks: ['g3']
        },
        16: {
          title: 'No way out',
          text: "8...Nh5. The knight attacks g3, and the bishop has no safe square: h4 and f4 are covered by the g5-pawn, e5 by the d6-pawn and the g7-bishop, and h2 holds White's own pawn.",
          arrows: [['h5', 'g3', 'red']],
          marks: ['h4', 'f4', 'e5'],
          ann: '!'
        },
        17: {
          title: 'White develops',
          text: '9.Be2. Every bishop move loses it, so White gets on with development. Since the bishop cannot run away, Black need not hurry, but taking now is fine.',
          arrows: [['f1', 'e2', 'green']]
        },
        18: {
          title: 'Bishop pair won',
          text: '9...Nxg3. Knight for bishop. Black now has two bishops against bishop and knight.',
          marks: ['g3']
        },
        19: {
          title: "White's compensation",
          text: '10.hxg3. White recaptures toward the center, and the rook on h1 gets the half-open h-file, aimed at h6. The game is roughly equal: the bishop pair against a loosened black kingside.',
          arrows: [['h1', 'h6', 'blue']],
          marks: ['h6']
        }
      }
    },
    {
      kind: 'warning',
      title: 'Watch for a sacrifice on g5',
      body:
        "After ...h6 and ...g5, the g5-pawn is defended only by the h6-pawn. So always ask whether White can sacrifice a piece on g5 and win two pawns plus an attack. After 6.Bg5 h6 7.Bh4 g5 it does not work: 8.Nxg5? hxg5 9.Bxg5 gives a knight for two pawns, and Black is clearly better. But this is a calculation you must make each time."
    },
    {
      kind: 'text',
      title: 'Three ways out of a pin',
      body:
        "**1. Move the piece behind.** ...Qe8 in Module 5.1: once the queen leaves d8, nothing is pinned.\n\n**2. Kick the pinning piece.** ...h6 and ...g5 push the bishop off the diagonal.\n\n**3. Trade it off.** ...Nh5 hunts the bishop and wins the **bishop pair**.\n\nThe pawn method is fast, but it loosens Black's king. White's answers are h2–h4 to open the h-file, or a knight landing on the weak f5-square."
    }
  ],
  takeaway:
    "Against a Bg5 pin, ...h6 and ...g5 push the bishop off the diagonal, and ...Nh5 then hunts it down for the bishop pair. The price is a looser kingside, so check every time whether White can hit back with h4 or a sacrifice on g5.",
  lookAhead:
    'Next: the Gligorić System 7.Be3, where Black attacks the bishop with ...Ng4 instead.',
  drills: [
    {
      title: 'Break the pin in the Petrosian',
      prompt: "You're Black. White has pinned your f6-knight with 8.Bg5. Kick the bishop twice, jump at it with the knight, and keep the h-file closed when White plays h4.",
      moves: KERES,
      start: 15,
      side: 'black',
      hints: [
        'Two pawn moves push the bishop off the h4–d8 diagonal.',
        '...h6, ...g5, then ...Nh5. Against h4, push the g-pawn on.'
      ],
      success: '8...h6, 9...g5, 10...Nh5 and 11...g4. The pin is gone and the bishop on g3 is short of squares.'
    },
    {
      title: 'Hunt the bishop',
      prompt: "You're Black. White has played 6.Bg5. Chase the bishop and attack it with a knight so it has nowhere to go.",
      moves: HUNT_NH5,
      start: 11,
      side: 'black',
      hints: [
        'Start with the h-pawn.',
        'After ...h6 and ...g5, which knight move hits g3?'
      ],
      success: "6...h6, 7...g5 and 8...Nh5. The bishop has no safe square, and ...Nxg3 will win the bishop pair."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 7.d5 Nbd7 8.Bg5 h6 9.Bh4 g5, why can the f6-knight move again?',
      moves: KERES.split(' ').slice(0, 18).join(' '),
      orientation: 'black',
      choices: [
        { text: 'The bishop must leave the h4–d8 diagonal, so the pin is broken', correct: true, why: 'Right. Once the bishop goes to g3, nothing is aiming at d8 through f6.' },
        { text: 'The queen has moved off d8', why: 'The queen is still on d8. That was the quiet method from Module 5.1. Here the pawns chase the bishop away.' },
        { text: 'The g5-pawn now guards the knight', why: 'The g5-pawn does not guard f6. The point is that the bishop must leave the diagonal.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 6.Bg5 h6 7.Bh4 g5, White tries 8.Nxg5 hxg5 9.Bxg5. Who is better?',
      moves: `${KID} Nf3 O-O Bg5 h6 Bh4 g5 Nxg5 hxg5 Bxg5`,
      orientation: 'black',
      choices: [
        { text: 'Black: a whole knight for two pawns is not enough here', correct: true, why: "Right. White has two pawns and some pressure, but Black's extra piece counts for more. The sacrifice fails in this position." },
        { text: "White: Black's king is wide open", why: "Black's king is a little airy, but White has no quick way to break through. A piece is a lot to give." },
        { text: 'It is equal: two pawns make up for a knight', why: 'Usually a knight is worth about three pawns. Here White does not get enough attack to make up the difference.' }
      ]
    },
    {
      type: 'concept',
      prompt: "After 6.Bg5 h6 7.Bh4 g5 8.Bg3 Nh5, why can't the g3-bishop escape?",
      moves: HUNT_NH5,
      orientation: 'black',
      choices: [
        { text: 'h4 and f4 are covered by the g5-pawn, e5 by d6 and the g7-bishop, and h2 holds a white pawn', correct: true, why: 'Exactly. Every square the bishop could go to is either covered or blocked.' },
        { text: "It is pinned to White's king", why: "Nothing pins it. It is simply out of safe squares." },
        { text: 'It can escape: Bh2 is safe', why: "Not here. White's h-pawn is still on h2, so that square is blocked." }
      ]
    },
    {
      type: 'move',
      prompt: "Black to move. White has just played 11.h4, attacking g5. What is Black's best answer?",
      moves: KERES.split(' ').slice(0, 21).join(' '),
      orientation: 'black',
      choices: [
        { text: '11...g4', correct: true, why: 'Right. It keeps the h-file closed and kicks the f3-knight. The position stays roughly equal.' },
        { text: '11...gxh4', why: 'This opens everything. After 12.Bxh4 the bishop is back on the diagonal and hits the queen on d8, and White is much better.' },
        { text: '11...Nxg3', why: 'It wins the bishop pair, but after 12.fxg3 White gets open lines on the kingside and is a bit better. 11...g4 is stronger.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move. The bishop has just retreated to g3. What is the strongest move?',
      moves: KERES.split(' ').slice(0, 19).join(' '),
      orientation: 'black',
      choices: [
        { text: '10...Nh5', correct: true, why: 'Yes. The freed knight attacks the bishop, which is short of squares. ...Nxg3 or ...Nf4 comes next.' },
        { text: '10...Nc5', why: 'A useful square, but it gives the bishop time. After 11.Nd2 White is better.' },
        { text: '10...Kh7', why: 'Too slow. Black has loosened the kingside with ...g5 and must use the time to hit the bishop. White is clearly better after this.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6.Bg5 h6 7.Bh4 g5 8.Bg3 Nh5 9.Be2 Nxg3 10.hxg3, what has each side got?',
      moves: HUNT,
      orientation: 'black',
      choices: [
        { text: "Black has the bishop pair; White has the half-open h-file against Black's loosened kingside", correct: true, why: 'Right. That balance is why the position is roughly equal.' },
        { text: 'Black has won a pawn', why: 'No pawns were won. Black traded a knight for a bishop.' },
        { text: 'White has the bishop pair', why: "It's the other way round. Black's knight took White's dark-squared bishop." }
      ]
    }
  ],
  key: { name: 'Bishop hunt: 6.Bg5 h6 7.Bh4 g5 8.Bg3 Nh5', moves: HUNT_NH5, orientation: 'black' },
  terms: [
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one. Strong in open positions.' },
    { term: 'Half-open file', meaning: 'A file with no pawn of your own on it, but an enemy pawn. Your rook can attack that pawn.' },
    { term: 'Hole', meaning: 'A square that no pawn of yours can ever guard, like f5 after ...g5. Enemy pieces love to sit there.' }
  ]
})
