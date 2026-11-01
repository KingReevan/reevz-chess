import { defineModule } from '../../../types'
import { OPEN_NC6, SVESHNIKOV } from '../lines'

/** svesh-5e5 */
const E5 = `${OPEN_NC6} Nf6 Nc3 e5`
/** svesh-6a6: 6...a6? 7.Nd6+ Bxd6 8.Qxd6 Qe7 */
const A6 = `${E5} Ndb5 a6 Nd6+ Bxd6 Qxd6 Qe7`

export default defineModule({
  id: '5.1',
  title: '5...e5: kicking the knight at once',
  minutes: 10,
  level: 3,
  goals: [
    'See what 5...e5 gives Black: time and space',
    'Understand its price: a hole on d5 and a backward pawn on d6',
    'Know why 6.Ndb5 must be met by 6...d6, and how 6...a6? is punished'
  ],
  intro:
    "In most Sicilians Black waits a long time before touching the e-pawn. In the Sveshnikov, Black plays ...e5 on move five and kicks White's proud d4-knight straight away. That looks like a free gain of time, so why doesn't everyone play it? This module shows what Black wins with ...e5, what Black gives up, and the one reply White's knight threatens.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Kicking the knight',
      intro: 'Watch the squares d5 and d6. By the end of these moves, the whole Sveshnikov is about them.',
      moves: SVESHNIKOV,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'The Open Sicilian',
          text: "4.Nxd4. White's knight stands proudly in the center. Black has played 2...Nc6, so the c6-knight already looks at d4.",
          arrows: [['c6', 'd4', 'yellow']]
        },
        8: {
          title: 'Hitting e4',
          text: '4...Nf6. The knight develops and attacks the e4-pawn. White has to defend it.',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'White defends',
          text: '5.Nc3. The knight guards e4. Black now picks a system: 5...d6 and 5...e6 are calm, but the Sveshnikov player strikes at once.',
          arrows: [['c3', 'e4', 'green']]
        },
        10: {
          title: 'The knight is kicked',
          text: "5...e5. The pawn attacks the d4-knight, so White must move it again. The e5-pawn also takes the d4 and f4 squares away from White's pieces.",
          arrows: [['e5', 'd4', 'red'], ['e5', 'f4', 'blue']],
          ann: '!'
        },
        11: {
          title: 'The best square',
          text: "6.Ndb5. White's best retreat is really an attack. From b5 the knight threatens Nd6+, which would force Black to give up the dark-squared bishop for it.",
          arrows: [['b5', 'd6', 'red']]
        },
        12: {
          title: 'The Sveshnikov',
          text: '6...d6. A pawn covers d6, and this is the Sveshnikov. Now the price of ...e5 is clear: d5 is a hole, and the d6-pawn is backward.',
          arrows: [['c3', 'd5', 'yellow'], ['e4', 'd5', 'yellow']],
          marks: ['d5', 'd6']
        }
      }
    },
    {
      kind: 'text',
      title: 'The price and the reward',
      body:
        "**The price.** After ...e5, Black's c- and e-pawns can never guard d5 again: the c-pawn was traded on d4, and the e-pawn has already gone past it. A square like that is a **hole**, and White would love to put a knight on it. The d6-pawn has a problem too. No Black pawn can defend it, because the c-pawn is gone and the e-pawn stands in front of it. And it sits on the d-file, where White has no pawn, so White's queen and rooks can attack it.\n\n**The reward.** White's knight has to move again, and in the main line it will soon be pushed once more, all the way to the edge of the board. The e5-pawn gives Black a firm share of the center, and Black's pieces get active squares. Black accepts two long-term weaknesses in return for time and activity. Strong players such as Kramnik and Carlsen have trusted it at the very top."
    },
    {
      kind: 'walkthrough',
      title: '6...a6? and the check on d6',
      intro: "Here Black tries to chase the knight at once, before covering d6. See what White's knight was threatening.",
      moves: A6,
      start: 11,
      orientation: 'white',
      steps: {
        11: {
          title: 'The threat',
          text: '6.Ndb5. The knight eyes d6. Right now the d7-pawn blocks the d-file, so the d8-queen does not guard d6. Only the f8-bishop does.',
          arrows: [['b5', 'd6', 'red'], ['f8', 'd6', 'green']],
          marks: ['d6']
        },
        12: {
          title: 'Chasing too early',
          text: '6...a6. The pawn attacks the knight. It looks natural, but it ignores the threat, and White has a check.',
          arrows: [['a6', 'b5', 'red'], ['b5', 'd6', 'green']],
          ann: '?'
        },
        13: {
          title: 'Check on d6',
          text: "7.Nd6+. The knight jumps in with check. Black has to take it with the bishop: the only other move, 7...Ke7, leaves the king in the center and is much worse.",
          arrows: [['d6', 'e8', 'red']],
          ann: '!'
        },
        14: {
          title: 'Bishop for knight',
          text: "7...Bxd6. On paper it's a fair trade, a bishop for a knight. But Black has just lost the bishop that guards the dark squares.",
          marks: ['d6']
        },
        15: {
          title: 'A queen in the camp',
          text: '8.Qxd6. The queen lands on d6. Now the d7-pawn cannot move, so the c8-bishop is stuck behind it. White also has the bishop pair.',
          arrows: [['d6', 'd7', 'yellow']],
          marks: ['c8']
        },
        16: {
          title: 'White is clearly better',
          text: '8...Qe7. Black offers to trade queens to get rid of the intruder. Even after the trade, White keeps the two bishops and the weak dark squares to aim at, and is clearly better.',
          arrows: [['d6', 'e7', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'A knight on b5 eyes d6 and c7',
      body:
        "In every Sicilian, a White knight on b5 is looking at two squares: d6 and c7. Before you play a move like ...a6 to chase it, check whether it can jump to d6 or c7 with check or with a fork first."
    },
    {
      kind: 'history',
      title: 'Two names for one opening',
      body:
        "This system is called the Sveshnikov (an older name is Lasker–Pelikan). Evgeny Sveshnikov and Gennadi Timoshchenko pioneered it in the 1970s, and showed that Black's weaknesses are a fair price for the activity Black gets."
    }
  ],
  takeaway:
    "5...e5 gains time on the d4-knight and space in the center. The price is a hole on d5 and a backward pawn on d6. After 6.Ndb5, Black must cover d6 with 6...d6, because 6...a6? 7.Nd6+ costs Black the dark-squared bishop.",
  lookAhead:
    'Next, Black chases the b5-knight with ...a6 after all, at the right moment. Module 5.2 shows how ...b5 then leaves that knight stuck on the edge.',
  drills: [
    {
      title: 'Play the Sveshnikov',
      prompt: "You're Black. White is about to play 5.Nc3. Kick the d4-knight, then deal with the threat it makes from b5.",
      moves: SVESHNIKOV,
      start: 8,
      side: 'black',
      hints: ['Push your e-pawn two squares and attack the knight.', 'After 6.Ndb5, the knight wants to check you on d6. Cover that square with a pawn.'],
      success: '5...e5 and 6...d6: this is the Sveshnikov. You gained time, and you covered d6 before chasing the knight.'
    },
    {
      title: 'Punish 6...a6?',
      prompt: "You're White. Black is about to chase your b5-knight with 6...a6?. Show why that move is a mistake.",
      moves: `${E5} Ndb5 a6 Nd6+ Bxd6 Qxd6`,
      start: 11,
      side: 'white',
      hints: ['Your knight has a check.', 'Play 7.Nd6+, and after 7...Bxd6 take back with the queen.'],
      success: '7.Nd6+ Bxd6 8.Qxd6. White has the bishop pair, the queen sits deep in Black\'s camp, and the c8-bishop is stuck behind the d7-pawn.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Black has just played 5...e5. Which square has become a hole in Black\'s position?',
      moves: E5,
      orientation: 'white',
      choices: [
        { text: 'd5', correct: true, why: 'Right. The c-pawn was traded on d4 and the e-pawn has gone past d5, so neither pawn can ever guard d5 again. White wants a knight there.' },
        { text: 'f5', why: "Black's g-pawn can still go to g6 and cover f5, so f5 is not a hole." },
        { text: 'b5', why: 'Black can still cover b5 with ...a6, and in the main line Black even puts a pawn on b5.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black has just played 6...a6?, attacking the knight. What should White play?',
      moves: `${E5} Ndb5 a6`,
      orientation: 'white',
      choices: [
        { text: '7.Nd6+', correct: true, why: 'Yes. The check forces 7...Bxd6 8.Qxd6, and White gets the bishop pair and a powerful queen on d6. White is clearly better.' },
        { text: '7.Na3', why: "This retreats and wastes the chance. Black follows up with ...b5 and has gained time for free. Black is even a little better." },
        { text: '7.Bg5', why: 'This develops, but it leaves the knight hanging: 7...axb5 wins a piece for a pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 5...e5 6.Ndb5, what is the knight on b5 threatening?',
      moves: `${E5} Ndb5`,
      orientation: 'black',
      choices: [
        { text: 'Nd6+, forcing Black to give up the dark-squared bishop', correct: true, why: "Right. After Nd6+ Bxd6 Qxd6 White has the bishop pair and Black's dark squares are weak. That is why Black answers with 6...d6." },
        { text: 'Nc7+, forking the king and the rook', why: 'Not here: the d8-queen guards c7, so Nc7+ would just lose the knight. The threat is on d6.' },
        { text: 'Nxa7, winning a pawn', why: 'The a8-rook and the c6-knight both guard a7, so Nxa7 would lose the knight for a pawn. The real threat is Nd6+.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does Black get in return for the hole on d5 and the backward d6-pawn?',
      choices: [
        { text: 'Time and space: the knight must move again, and the e5-pawn claims the center', correct: true, why: "Yes. Black trades long-term weaknesses for activity. That's the deal at the heart of the Sveshnikov." },
        { text: 'An extra pawn', why: "No pawn is won. Material stays level; Black's reward is time and space." },
        { text: 'A safer king', why: "...e5 doesn't change the king's safety. It is about the center: time on the knight and space for Black's pieces." }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Black has played 4...Nf6, 5...e5 and 6...d6. What is this opening called?',
      moves: SVESHNIKOV,
      orientation: 'black',
      choices: [
        { text: 'The Sveshnikov', correct: true, why: 'Right. It is named after Evgeny Sveshnikov, who pioneered it in the 1970s.' },
        { text: 'The Kalashnikov', why: 'The Kalashnikov is close, but there Black plays ...e5 on move four, before ...Nf6 and Nc3. Module 5.7 covers it.' },
        { text: 'The Najdorf', why: 'The Najdorf comes from 2...d6 and 5...a6. Here Black played 2...Nc6 and 5...e5.' },
        { text: 'The Taimanov', why: 'The Taimanov is 2...e6 and 4...Nc6, with the e-pawn on e6, not e5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Sveshnikov, why is the d6-pawn called "backward"?',
      choices: [
        { text: 'No Black pawn can defend it: the c-pawn is gone and the e-pawn is already in front of it', correct: true, why: 'Exactly. It must be guarded by pieces, and it sits on the d-file where White has no pawn, so White can attack it.' },
        { text: 'It has not moved yet', why: 'It has moved: it went from d7 to d6. "Backward" means its neighbors can no longer protect it.' },
        { text: 'It can be captured en passant', why: "En passant has nothing to do with it. A backward pawn is one that its neighbor pawns can't defend." }
      ]
    }
  ],
  key: { name: 'Sveshnikov: 6.Ndb5 d6', moves: SVESHNIKOV, orientation: 'black' },
  terms: [
    { term: 'Hole', meaning: 'A square that the opponent can no longer attack with a pawn. It makes a safe home for a piece, especially a knight.' },
    { term: 'Backward pawn', meaning: 'A pawn whose neighbor pawns are gone or have moved ahead, so no pawn can defend it.' },
    { term: 'Bishop pair', meaning: 'Having both bishops when the opponent has given one up. Two bishops work well together on an open board.' }
  ]
})
