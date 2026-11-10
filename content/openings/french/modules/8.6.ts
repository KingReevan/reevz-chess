import { defineModule } from '../../../types'
import { STEINITZ, TARRASCH, WINAWER_MAIN } from '../lines'

/** theme-bad-bishop up to 9.Qd2: 7...cxd4 8.Nxd4 Bc5 9.Qd2 */
const QD2 = `${STEINITZ} cxd4 Nxd4 Bc5 Qd2`
/** theme-bad-bishop, the Vacuum Cleaner: 9...Bxd4 10.Bxd4 Nxd4 11.Qxd4 Qb6 12.Qxb6 Nxb6 13.O-O-O Bd7 14.b3 h5 15.Bd3 */
const VACUUM = `${QD2} Bxd4 Bxd4 Nxd4 Qxd4 Qb6 Qxb6 Nxb6 O-O-O Bd7 b3 h5 Bd3`
/** win-7nf3-b6: 7.Nf3 b6 8.a4 Ba6 9.Bxa6 Nxa6 10.Qe2 Nb8 11.O-O Nbc6 */
const BA6 = `${WINAWER_MAIN} Nf3 b6 a4 Ba6 Bxa6 Nxa6 Qe2 Nb8 O-O Nbc6`

export default defineModule({
  id: '8.6',
  title: 'The bad bishop in endgames',
  minutes: 11,
  level: 3,
  goals: [
    'Tell a good bishop from a bad one by looking at the central pawns',
    "See how a queen trade can leave Black with the bad bishop against White's good one",
    'As Black, trade the problem bishop early with ...b6 and ...Ba6'
  ],
  intro:
    "Module 1.7 called the c8-bishop the French's price. In the middlegame Black often gets by, because there is so much else going on. In an endgame the problem shows. With fewer pieces left, a bishop that is blocked by its own pawns can be the worst piece on the board. This module shows how that happens, and how Black avoids it.",
  sections: [
    {
      kind: 'text',
      title: 'Good bishop, bad bishop',
      body:
        "Look at the **central pawns**. A bishop is **bad** when its own central pawns stand on its color: they block its diagonals. A bishop is **good** when its central pawns stand on the other color, so its diagonals are open.\n\nIn the French, Black's d5- and e6-pawns stand on light squares. That makes Black's light-squared bishop the bad one, and Black's dark-squared bishop the good one. White's e5-pawn (and often f4) stands on dark squares, so White's light-squared bishop is good.\n\nThis gives a simple rule for endgames: **Black should not trade the good dark-squared bishop and keep the bad one.** White should keep the good light-squared bishop."
    },
    {
      kind: 'walkthrough',
      title: 'The Vacuum Cleaner: everything comes off',
      intro: 'A Steinitz line (Module 6.2) where Black trades on d4 and then offers the queens. Watch which bishops stay on the board.',
      moves: VACUUM,
      start: 17,
      orientation: 'white',
      steps: {
        17: {
          title: 'A choice for Black',
          text: '9.Qd2. Black can keep the tension, or trade pieces on d4. Wikipedia calls the trading line the Vacuum Cleaner Variation.',
          arrows: [['c5', 'd4', 'red'], ['c6', 'd4', 'red']]
        },
        18: {
          title: 'The good bishop goes',
          text: "9...Bxd4. Black gives up the dark-squared bishop, the one that was not hemmed in by the d5- and e6-pawns. That is the bishop Black would most like to keep.",
          marks: ['d5', 'e6']
        },
        19: {
          title: 'Take back',
          text: '10.Bxd4. White takes back with the dark-squared bishop. Other moves lose material.',
          marks: ['d4']
        },
        20: {
          title: 'Another trade',
          text: '10...Nxd4. The knight takes the bishop.',
          marks: ['d4']
        },
        21: {
          title: 'The queen recaptures',
          text: '11.Qxd4. Now each side has one bishop left, and both are light-squared.',
          marks: ['f1', 'c8']
        },
        22: {
          title: 'Offer the queens',
          text: '11...Qb6. Black offers a queen trade.',
          arrows: [['b6', 'd4', 'red']]
        },
        23: {
          title: 'White accepts',
          text: '12.Qxb6. White is happy to head for an endgame.',
          marks: ['b6']
        },
        24: {
          title: 'The queens are off',
          text: '12...Nxb6. Each side has a knight, a light-squared bishop and two rooks. Material is level. The difference is in the bishops.',
          marks: ['f1', 'c8']
        },
        25: {
          title: 'The king goes long',
          text: '13.O-O-O. White castles and puts a rook on the d-file, facing the d5-pawn.',
          arrows: [['d1', 'd5', 'red']]
        },
        26: {
          title: 'The only diagonal',
          text: '13...Bd7. The bishop develops, but the e6-pawn blocks its way to the kingside. It can only go to c8, c6, b5 or a4.',
          marks: ['e6', 'd5']
        },
        27: {
          title: 'Take squares from the knight',
          text: '14.b3. The pawn takes a4 and c4 away from the b6-knight.',
          arrows: [['b3', 'c4', 'green'], ['b3', 'a4', 'green']]
        },
        28: {
          title: 'One more light pawn',
          text: "14...h5. Black stops White from gaining space with g2–g4. But notice: one more Black pawn now stands on a light square.",
          marks: ['h5']
        },
        29: {
          title: 'Good bishop, bad bishop',
          text: "15.Bd3. White's bishop now reaches nine squares, Black's only four. Black's b7-, d5-, e6-, f7- and h5-pawns all stand on light squares, the bishop's color. White has a small edge, and the better bishop is a big part of it.",
          arrows: [['d3', 'h7', 'blue'], ['d3', 'a6', 'blue']],
          marks: ['d5', 'e6', 'f7', 'h5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The cure: trade it early with ...b6 and ...Ba6',
      intro: "In the Winawer, Black has already given up the dark-squared bishop on c3. So Black's last bishop is the bad one. The fix: trade it for White's good bishop before any endgame.",
      moves: BA6,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'A quiet set-up',
          text: '7.Nf3. White develops calmly. Black has a free move to deal with the c8-bishop.',
          marks: ['c8']
        },
        14: {
          title: 'Open a door',
          text: '7...b6. The pawn steps aside, so the bishop can come out on the a6–f1 diagonal.',
          arrows: [['c8', 'a6', 'blue']]
        },
        15: {
          title: 'Space on the queenside',
          text: '8.a4. White gains queenside space and prepares Ba3, putting the dark-squared bishop on the long a3–f8 diagonal.',
          arrows: [['c1', 'a3', 'blue']]
        },
        16: {
          title: 'Bishop against bishop',
          text: "8...Ba6. Black's bishop faces White's f1-bishop. If White does nothing, Black takes it.",
          arrows: [['a6', 'f1', 'red']]
        },
        17: {
          title: 'The trade',
          text: "9.Bxa6. White trades. (9.Bb5+ also trades the bishops.) Either way, Black's problem piece leaves the board.",
          marks: ['a6']
        },
        18: {
          title: 'Knight takes',
          text: '9...Nxa6. The knight is on the edge for a moment, but Black no longer has a bad bishop.',
          marks: ['a6']
        },
        19: {
          title: 'Hit the knight',
          text: '10.Qe2. The queen attacks the a6-knight along the diagonal.',
          arrows: [['e2', 'a6', 'red']]
        },
        20: {
          title: 'Back to the center',
          text: '10...Nb8. The knight steps back, heading for c6.',
          arrows: [['b8', 'c6', 'blue']]
        },
        21: {
          title: 'White castles',
          text: "11.O-O. White's king is safe.",
          arrows: [['e1', 'g1', 'green']]
        },
        22: {
          title: 'No bad bishop',
          text: '11...Nbc6. Black has two well-placed knights and no bad bishop. White has the dark-squared bishop. The position is about level.',
          arrows: [['c6', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'history',
      title: 'Karpov–Korchnoi, 1978: no bad bishop',
      body:
        "In game 16 of the 1978 World Championship (Module 4.4), the queens also came off early: 5.Bb5+ Bd7 6.Qe2+ Qe7 7.Bxd7+, and then 9...Qxe2+. But there the bad-bishop problem never came up. Black had taken back on d5 with the e-pawn (4...exd5), so no pawn stood on e6, and the light-squared bishops were traded on move 7 anyway. That endgame was about Black's isolated d5-pawn instead, and the game was drawn."
    },
    {
      kind: 'tip',
      title: 'Before you trade queens',
      body:
        "**As Black:** before an early queen trade, look at your light-squared bishop. If it is still shut in behind d5 and e6, trade it first (...b6 and ...Ba6, or ...Bd7–b5), free it with ...f6 and ...e5, or keep the queens on.\n\n**As White:** keep your light-squared bishop. Trade the pieces that help Black (often the dark-squared bishops and the queens), and the bad bishop that stays behind becomes a long-term edge."
    }
  ],
  takeaway:
    "A bishop is bad when its own central pawns stand on its color. In the French that is Black's light-squared bishop, behind d5 and e6. When the queens come off, it can be Black's worst piece, as in the Vacuum Cleaner. Black avoids this by trading it early with ...b6 and ...Ba6 or ...Bd7–b5, and by keeping the good dark-squared bishop.",
  lookAhead:
    "Next, a look back at the great French games. Module 8.7 picks one key moment from each of the five classics in this course.",
  drills: [
    {
      title: 'Trade the bad bishop',
      prompt: "You're Black in the Winawer. White has just played 7.Nf3. Prepare to trade your c8-bishop for White's good bishop, and take back with the knight.",
      moves: `${WINAWER_MAIN} Nf3 b6 a4 Ba6 Bxa6 Nxa6`,
      start: 13,
      side: 'black',
      hints: [
        'Move the b-pawn one square to open a diagonal for the c8-bishop.',
        '7...b6, then 8...Ba6. After 9.Bxa6, the b8-knight takes back.'
      ],
      success: "7...b6, 8...Ba6 and 9...Nxa6. Black's problem bishop is gone."
    },
    {
      title: 'Play the good bishop endgame',
      prompt: "You're White. The queens are off, and you have the good light-squared bishop. Castle long to put a rook on the d-file, take squares from Black's knight with a pawn, and develop your bishop to its best diagonal.",
      moves: VACUUM,
      start: 24,
      side: 'white',
      hints: [
        'Castle queenside first. After 13...Bd7, push the b-pawn one square.',
        '14.b3, and after 14...h5, the bishop goes to d3.'
      ],
      success: "13.O-O-O, 14.b3 and 15.Bd3. Your bishop reaches nine squares, Black's only four."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "Why is Black's light-squared bishop the bad one in the French?",
      choices: [
        { text: "Black's central pawns on d5 and e6 stand on light squares and block it", correct: true, why: 'Right. A bishop is bad when its own central pawns are on its color.' },
        { text: 'It is worth less than a knight', why: 'Bishops and knights are worth about the same. The problem is the pawns on its color.' },
        { text: 'It cannot leave c8 until the endgame', why: 'It can come out, for example to d7. But from there its kingside diagonal is still blocked by e6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Black has just played 9...Bxd4. Which bishop did Black give up, and why does it matter?',
      moves: `${QD2} Bxd4`,
      orientation: 'black',
      choices: [
        { text: 'The dark-squared bishop, the good one; Black is left with the bad light-squared bishop', correct: true, why: 'Right. After the queens come off too, White has the good bishop and Black the bad one.' },
        { text: 'The light-squared bishop, the bad one, so Black solved the problem', why: 'Look again: the bishop on c5 moves on dark squares. The bad light-squared bishop is still on c8.' },
        { text: "It doesn't matter: all bishops are equal in an endgame", why: 'In an endgame the pawns decide which bishop is better. Here Black kept the worse one.' }
      ]
    },
    {
      type: 'plan',
      prompt: "Black to move in the Winawer. What is the plan with 7...b6?",
      moves: `${WINAWER_MAIN} Nf3`,
      orientation: 'black',
      choices: [
        { text: "...Ba6, trading the bad bishop for White's good one", correct: true, why: 'Right. After 8...Ba6 9.Bxa6 Nxa6 the position is about level, and Black has no bad bishop.' },
        { text: '...Bb7, putting the bishop on the long diagonal', why: "From b7 the bishop runs into Black's own d5-pawn. The point of ...b6 is the a6–f1 diagonal." },
        { text: '...b5, attacking on the queenside', why: 'The b-pawn is not heading for b5 here. It moves to open the a6-square for the bishop.' }
      ]
    },
    {
      type: 'concept',
      prompt: "In Karpov–Korchnoi 1978, game 16, why didn't Black suffer from a bad bishop after the queen trade?",
      moves: `${TARRASCH} c5 exd5 exd5 Bb5+ Bd7 Qe2+ Qe7 Bxd7+`,
      orientation: 'black',
      choices: [
        { text: 'Black had taken back on d5 with the e-pawn, and the light-squared bishops were traded on move 7', correct: true, why: 'Right. No pawn on e6 blocked the bishop, and then it left the board. The endgame was about the isolated d5-pawn.' },
        { text: 'Korchnoi kept the queens on', why: 'The queens came off on move 9. The bishop problem was solved by the pawn structure and the trade on d7.' },
        { text: 'Black had played ...b6 and ...Ba6', why: "That is the Winawer cure. In this game Black's bishop blocked a check on d7 and was traded there." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Which of these makes a bishop "good"?',
      choices: [
        { text: 'Its own central pawns stand on the other color, so its diagonals are open', correct: true, why: "Right. White's light-squared bishop in the French is good because e5 and f4 stand on dark squares." },
        { text: 'It stands in the center of the board', why: 'A bishop can be bad even in the center if its own pawns block it. The pawns decide.' },
        { text: 'It has already captured something', why: 'Captures do not matter. What counts is whether its own pawns block its diagonals.' }
      ]
    },
    {
      type: 'plan',
      prompt: "As White, your opponent's light-squared bishop is shut in behind d5 and e6. What should you aim for?",
      choices: [
        { text: 'Keep your good light-squared bishop and head for an endgame', correct: true, why: "Right. With fewer pieces, Black's bad bishop matters more and more." },
        { text: 'Trade your light-squared bishop for it as soon as possible', why: "That helps Black: it removes Black's worst piece and your best one." },
        { text: 'Push your central pawns onto light squares', why: 'Your pawns on light squares would block your own good bishop. Keep them on dark squares like e5 and f4.' }
      ]
    }
  ],
  key: { name: 'Vacuum Cleaner: 15.Bd3, good bishop against bad', moves: VACUUM, orientation: 'white' },
  terms: [
    { term: 'Bad bishop', meaning: 'A bishop whose own central pawns stand on its color, so they block its diagonals.' },
    { term: 'Good bishop', meaning: 'A bishop whose own central pawns stand on the other color, so its diagonals are open.' },
    { term: 'Vacuum Cleaner', meaning: "Wikipedia's nickname for the Steinitz line 9...Bxd4, where Black trades many pieces and the queens." }
  ]
})
