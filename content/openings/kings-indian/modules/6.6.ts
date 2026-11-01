import { defineModule } from '../../../types'
import { SAMISCH } from '../lines'

/** samisch-gambit-accepted: 6...c5 7.dxc5 dxc5 8.Qxd8 Rxd8 9.Bxc5 Nc6 */
const ACCEPTED = `${SAMISCH} c5 dxc5 dxc5 Qxd8 Rxd8 Bxc5 Nc6`
/** 10.Nd5 Nd7 (research note), then the engine's best line */
const ND5 = `${ACCEPTED} Nd5 Nd7 Nxe7+ Nxe7 Bxe7 Bxb2 Rb1 Bc3+ Kd1 Re8`

export default defineModule({
  id: '6.6',
  title: 'The Sämisch Gambit 6...c5',
  minutes: 10,
  level: 3,
  goals: [
    'Understand why Black offers a pawn with 6...c5',
    'See how the long diagonal and open files pay for the pawn',
    'Know the accepted line and the 10.Nd5 Nd7 answer'
  ],
  intro:
    "6...c5 hits d4 at once, and if White takes, Black is simply a pawn down after a queen trade. Why would anyone play that? Because White's kingside is still asleep and the dark squares are weak. This module shows what Black gets for the pawn.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The gambit accepted',
      intro: 'Count the material, then count the developed pieces.',
      moves: ACCEPTED,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'White is not ready',
          text: "6.Be3. White has used moves on f3 and Be3. The knight on g1 and the bishop on f1 haven't moved yet.",
          marks: ['g1', 'f1']
        },
        12: {
          title: 'The gambit',
          text: '6...c5. Black hits d4 from the side. If White takes, the d-file opens, and once the f6-knight moves, so does the long diagonal toward c3 and b2.',
          arrows: [['c5', 'd4', 'red']]
        },
        13: {
          title: 'White accepts',
          text: '7.dxc5. White takes the pawn.'
        },
        14: {
          title: 'Taking back',
          text: '7...dxc5. Black recaptures. The d-file is open and the queens face each other.',
          arrows: [['d8', 'd1', 'blue']]
        },
        15: {
          title: 'Queens off',
          text: '8.Qxd8. White trades queens, hoping the extra pawn will count in a quiet game.'
        },
        16: {
          title: 'The rook takes the file',
          text: '8...Rxd8. The rook takes back and now owns the open d-file.',
          arrows: [['d8', 'd1', 'blue']]
        },
        17: {
          title: 'A pawn up',
          text: '9.Bxc5. White wins the pawn. Material: White is a pawn up.',
          marks: ['c5']
        },
        18: {
          title: 'What Black has for it',
          text: '9...Nc6. Black develops. Next comes ...Nd7, which hits the c5-bishop and opens the long diagonal for the g7-bishop toward c3 and b2. The engine calls this equal.',
          arrows: [['f6', 'd7', 'blue'], ['g7', 'b2', 'yellow']]
        }
      }
    },
    {
      kind: 'text',
      title: 'What Black gets for the pawn',
      body:
        "**The long diagonal.** Once the f6-knight moves, the g7-bishop looks straight down the diagonal at c3 and b2, and White's d-pawn is no longer there to block it on d4.\n\n**No White attack.** With queens off, White's Qd2, Bh6 and h4–h5 plan is gone, just like after 7.dxe5 in Module 6.5.\n\n**Faster development.** White's g1-knight and f1-bishop are still at home, while Black's rooks use the open d-file and the half-open c-file.\n\nThe engine rates the accepted line as equal. That is why White often declines the gambit instead, with 7.Nge2 or 7.d5 (Module 6.7)."
    },
    {
      kind: 'walkthrough',
      title: '10.Nd5: White grabs another pawn',
      intro: 'A strong try for White. Watch how the g7-bishop wins material back.',
      moves: ND5,
      start: 18,
      orientation: 'black',
      steps: {
        18: {
          title: 'The accepted position',
          text: '9...Nc6. White is a pawn up, Black is ahead in development.'
        },
        19: {
          title: 'The knight jumps',
          text: '10.Nd5. The knight attacks e7 and c7. The e7-pawn is now attacked twice, by the knight and the c5-bishop, and defended only once.',
          arrows: [['d5', 'e7', 'red'], ['c5', 'e7', 'red']]
        },
        20: {
          title: 'The key reply',
          text: '10...Nd7. The knight attacks the c5-bishop, and the long diagonal opens: the g7-bishop now looks at b2.',
          arrows: [['d7', 'c5', 'red'], ['g7', 'b2', 'red']],
          ann: '!'
        },
        21: {
          title: 'White takes on e7',
          text: '11.Nxe7+. The knight takes with check.'
        },
        22: {
          title: 'Trading the knight',
          text: '11...Nxe7. Black takes the knight.'
        },
        23: {
          title: 'Two pawns up',
          text: '12.Bxe7. The only good move: the bishop takes back. White is now two pawns up, but the bishop on e7 is far from home.',
          marks: ['e7']
        },
        24: {
          title: 'The diagonal pays off',
          text: '12...Bxb2. The g7-bishop takes the b2-pawn and hits the rook on a1. Black is only one pawn down again.',
          arrows: [['b2', 'a1', 'red']]
        },
        25: {
          title: 'The rook steps aside',
          text: '13.Rb1. The rook escapes and attacks the bishop.',
          arrows: [['b1', 'b2', 'red']]
        },
        26: {
          title: 'A check',
          text: '13...Bc3+. The bishop gets out with check.',
          arrows: [['c3', 'e1', 'red']]
        },
        27: {
          title: 'The king moves',
          text: '14.Kd1. White can no longer castle.'
        },
        28: {
          title: 'Equal',
          text: "14...Re8. The rook attacks the bishop on e7. White is still a pawn up, but White's king is stuck in the center and Black's pieces are active. The engine calls it equal.",
          arrows: [['e8', 'e7', 'red']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'A gambit is about time',
      body:
        "When you gambit a pawn, don't try to win it back at once. Use the time: develop, take open files, and aim at the weak squares. The pawn often comes back by itself, like b2 here."
    }
  ],
  takeaway:
    "6...c5 gives a pawn to open the long diagonal and the dark squares while White's kingside is undeveloped. After 7.dxc5 dxc5 8.Qxd8 Rxd8 9.Bxc5 Nc6, Black's activity makes up for the pawn, and the engine calls it equal.",
  lookAhead:
    'Module 6.7 shows what happens when White declines the gambit with 7.Nge2 or 7.d5.',
  drills: [
    {
      title: 'Play the gambit',
      prompt: "You're Black. White has just played 6.Be3. Offer the gambit, take back on every capture, develop, and answer 10.Nd5 correctly.",
      moves: `${ACCEPTED} Nd5 Nd7`,
      start: 11,
      side: 'black',
      hints: [
        'Strike at d4 with the c-pawn.',
        "After 10.Nd5, attack the c5-bishop and open your g7-bishop's diagonal with one knight move."
      ],
      success: '6...c5, 7...dxc5, 8...Rxd8, 9...Nc6 and 10...Nd7! The long diagonal is open and the c5-bishop is under attack.'
    },
    {
      title: "White's try",
      prompt: "You're White, a pawn up after 9...Nc6. Use the knight to grab more, then take back on e7.",
      moves: ND5.split(' ').slice(0, 23).join(' '),
      start: 18,
      side: 'white',
      hints: ['The knight can jump to a central square that hits e7 and c7.', 'After ...Nd7, take on e7 with check, then recapture with the bishop.'],
      success: '10.Nd5, 11.Nxe7+ and 12.Bxe7. White is two pawns up for now, but ...Bxb2 is coming.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does Black offer a pawn with 6...c5?',
      choices: [
        { text: "To open the long diagonal and the dark squares while White's kingside is undeveloped", correct: true, why: "Right. White's g1-knight and f1-bishop are still at home, so Black gets active play for the pawn." },
        { text: 'Because the pawn cannot be taken', why: 'It can: 7.dxc5 dxc5 8.Qxd8 Rxd8 9.Bxc5 wins it. Black gives it on purpose.' },
        { text: 'To trade queens and make a quick draw', why: 'The queen trade happens, but Black is playing for activity, not a draw.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White has just won the pawn with 9.Bxc5. Black to move. What is best?',
      moves: `${SAMISCH} c5 dxc5 dxc5 Qxd8 Rxd8 Bxc5`,
      orientation: 'black',
      choices: [
        { text: '9...Nc6', correct: true, why: 'Right. Develop first, then ...Nd7 opens the long diagonal with an attack on the bishop.' },
        { text: '9...Be6', why: 'It develops, but leaves e7 unguarded: 10.Bxe7 and White is two pawns up.' },
        { text: '9...e5', why: "It blocks the long diagonal of Black's own bishop, the whole point of the gambit. Black is then just a pawn down." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 10.Nd5, what does 10...Nd7 do?',
      moves: `${ACCEPTED} Nd5 Nd7`,
      orientation: 'black',
      choices: [
        { text: 'It attacks the c5-bishop and opens the g7-bishop\'s diagonal toward b2', correct: true, why: 'Exactly. Two jobs in one move. After 11.Nxe7+ Nxe7 12.Bxe7 Bxb2, Black wins a pawn back.' },
        { text: 'It defends the e7-pawn', why: "A knight on d7 doesn't guard e7. Black lets e7 go and wins b2 instead." },
        { text: 'It prepares ...Nxe4', why: "The knight left f6, so it can't take on e4 any more. The point is the c5-bishop and the diagonal." }
      ]
    },
    {
      type: 'concept',
      prompt: "In the Sämisch Gambit, which of White's squares are weakest?",
      choices: [
        { text: 'The dark squares on the long diagonal, such as d4, c3 and b2', correct: true, why: 'Right. The g7-bishop aims straight down that diagonal. After dxc5 no White pawn can guard d4, and the knight on c3 and the pawn on b2 become targets.' },
        { text: 'The light squares f3 and g2', why: 'Those squares hold well-protected White pawns. Black aims at the dark squares.' },
        { text: 'The e4-pawn', why: 'The f3-pawn protects e4 well. Black\'s targets are on the long diagonal.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In the gambit accepted, why is the queen trade fine for Black even a pawn down?',
      choices: [
        { text: "White's attack disappears, Black develops faster, and the long diagonal hits b2 and c3", correct: true, why: 'Right. The engine calls the position equal.' },
        { text: 'Endgames are always good for the side with fewer pawns', why: 'Usually the opposite: an extra pawn matters more in an endgame. Here Black has activity to make up for it.' },
        { text: 'Black wins the pawn back by force at once', why: 'Not at once. Black gets activity first, and the pawn often comes back later.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White has just taken with 7.dxc5. Black to move. What is best?',
      moves: `${SAMISCH} c5 dxc5`,
      orientation: 'black',
      choices: [
        { text: '7...dxc5', correct: true, why: 'Right. Take back, and after the queen trade Black has enough play for the pawn.' },
        { text: '7...Nc6', why: 'After 8.cxd6, Black can win the d6-pawn back, but stays a pawn down without the gambit\'s activity. The engine says White is clearly better.' },
        { text: '7...Be6', why: 'Same problem: 8.cxd6, and Black is a pawn down with nothing to show for it.' }
      ]
    }
  ],
  key: { name: 'Sämisch Gambit accepted: 9.Bxc5 Nc6', moves: ACCEPTED, orientation: 'black' },
  terms: [
    { term: 'Gambit', meaning: 'An opening where one side gives up material, usually a pawn, for faster development or an attack.' },
    { term: 'Long diagonal', meaning: 'The a1–h8 or h1–a8 diagonal. A fianchettoed bishop on g7 controls a1–h8.' },
    { term: 'Development lead', meaning: 'Having more pieces in play than your opponent. It matters most when lines are open.' }
  ]
})
