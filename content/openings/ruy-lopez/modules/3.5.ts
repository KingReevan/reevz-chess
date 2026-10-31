import { defineModule } from '../../../types'
import { EXCHANGE } from '../../../lines'

/** exchange-bronstein */
const BRONSTEIN = `${EXCHANGE} O-O Qd6 d4 exd4 Nxd4 Bd7`
/** exchange-bd6 */
const BD6 = `${EXCHANGE} O-O Bd6 d4 Bg4 dxe5 Bxf3 Qxf3 Bxe5`
/** exchange-bd6-mistake */
const SLIP = `${EXCHANGE} O-O Bd6 d4 exd4 Qxd4 f6 Nc3 Bg4 e5`

export default defineModule({
  id: '3.5',
  title: '5...Qd6 and 5...Bd6: other defenses',
  minutes: 11,
  level: 3,
  goals: [
    'Meet the Bronstein, 5...Qd6, and its queenside castling plan',
    'Handle 5...Bd6 and its main line with ...Bg4',
    'Punish the slip 8...Bg4? with the pawn push 9.e5!'
  ],
  intro:
    'Not every Black player guards e5 with a pawn. Two respected options guard it with a piece on d6: the queen or the bishop. How should White react, and what can go wrong for Black? This module covers both, plus a pawn push that wins a piece.',
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Bronstein: 5...Qd6',
      intro: 'The queen guards e5 and clears the way for queenside castling.',
      moves: BRONSTEIN,
      start: 9,
      orientation: 'white',
      steps: {
        9: {
          title: 'The usual threat',
          text: '5.O-O. Nxe5 is threatened again. This time Black uses the queen to guard e5.',
          arrows: [['f3', 'e5', 'red']],
          marks: ['e5']
        },
        10: {
          title: 'The queen guards e5',
          text: '5...Qd6. The queen defends e5 and leaves d8, so Black can castle queenside soon. The drawback: a queen in the middle of the board can be chased.',
          arrows: [['d6', 'e5', 'green']]
        },
        11: {
          title: 'The central strike',
          text: '6.d4. The same idea as against 5...f6. (6.d3 and 6.Na3 are popular too. The knight goes to c4 and hits the queen.)',
          arrows: [['d4', 'e5', 'red'], ['b1', 'a3', 'blue']]
        },
        12: {
          title: 'Black takes',
          text: '6...exd4. Black gives up the e-pawn for the d-pawn, as usual.',
          marks: ['d4']
        },
        13: {
          title: 'Knight to the center',
          text: "7.Nxd4. White has the familiar structure: four pawns against three on the kingside. This time the queens are still on.",
          marks: ['e4']
        },
        14: {
          title: 'Ready to castle long',
          text: "7...Bd7. The c8-square is free now. Next comes ...O-O-O, putting Black's king on the queenside and a rook on d8. White keeps developing and aims to trade pieces.",
          arrows: [['e8', 'c8', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '5...Bd6: the main line',
      intro: 'Now the bishop guards e5. Black meets d4 with a pin.',
      moves: BD6,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'The bishop guards e5',
          text: '5...Bd6. The bishop defends e5. Unlike the queen, it is not easily chased, but it does stand where a pawn on e5 could hit it.',
          arrows: [['d6', 'e5', 'green']]
        },
        11: {
          title: 'Strike again',
          text: '6.d4. White attacks e5 a second time.',
          arrows: [['d4', 'e5', 'red'], ['f3', 'e5', 'red']]
        },
        12: {
          title: 'Pin the attacker',
          text: '6...Bg4. Black pins the f3-knight, one of the pieces attacking e5.',
          arrows: [['g4', 'd1', 'red']],
          marks: ['f3']
        },
        13: {
          title: 'White takes on e5',
          text: '7.dxe5. White grabs the pawn, and now the d6-bishop is attacked as well.',
          arrows: [['e5', 'd6', 'red']]
        },
        14: {
          title: 'Remove the defender',
          text: '7...Bxf3. The knight on f3 was guarding e5. Black takes it so the pawn can be won back.',
          marks: ['e5']
        },
        15: {
          title: 'Queen recaptures',
          text: "8.Qxf3. White takes back with the queen. 8.gxf3 would double White's own f-pawns.",
          arrows: [['g2', 'f3', 'blue']]
        },
        16: {
          title: 'Pawn back',
          text: '8...Bxe5. Material is level. But Black has traded a bishop for a knight, so the bishop pair is gone, and White keeps the healthier pawns. White is slightly better.',
          marks: ['e5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'A slip in the 5...Bd6 line',
      intro: 'Black takes on d4 instead of pinning. That is playable, but watch what happens after one careless bishop move.',
      moves: SLIP,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'Black takes first',
          text: '6...exd4. Also playable. Now White recaptures and the queen comes to the center.',
          marks: ['d4']
        },
        13: {
          title: 'A central queen',
          text: "7.Qxd4. The queen stands in the center. Along the fourth rank, only White's own e4-pawn blocks her view. Remember that.",
          marks: ['e4']
        },
        14: {
          title: 'Guarding e5',
          text: "7...f6. The pawn controls e5, so White's e-pawn can't advance easily.",
          arrows: [['f6', 'e5', 'green']]
        },
        15: {
          title: 'Quiet development',
          text: '8.Nc3. White brings out another piece and keeps e4 protected.',
          arrows: [['c3', 'e4', 'green']]
        },
        16: {
          title: 'A loose bishop',
          text: "8...Bg4. It attacks the f3-knight, but nothing defends the bishop, and it sits on the same rank as White's queen. Only the e4-pawn stands between them.",
          arrows: [['d4', 'g4', 'yellow']],
          marks: ['e4', 'g4'],
          ann: '?'
        },
        17: {
          title: 'Two bishops attacked',
          text: '9.e5. The pawn hits the d6-bishop, and by stepping forward it opens the fourth rank: now the queen attacks the g4-bishop too. Black loses a piece.',
          arrows: [['e5', 'd6', 'red'], ['d4', 'g4', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'text',
      title: 'What the two lines share',
      body:
        "Both 5...Qd6 and 5...Bd6 guard e5 with a **piece** instead of a pawn. That keeps Black's f-pawn at home, but it puts a piece on d6, where White can hit it. The queen can be chased by a knight on c4. The bishop can be hit by a pawn arriving on e5.\n\nAgainst both, White's plan is the familiar one: play d4, swap the center pawns, and head for a position where the healthy kingside majority matters."
    },
    {
      kind: 'history',
      title: 'Two names',
      body:
        "5...Qd6 is called the Bronstein Variation. Romanishin was one of the players who used it often. 5...Bd6 is sometimes called the King's Bishop Variation."
    }
  ],
  takeaway:
    "5...Qd6 and 5...Bd6 guard e5 with a piece on d6. White still plays d4 and aims for the healthy majority, and watches for tactics against the d6-piece, like Na3–c4 or e4–e5.",
  lookAhead:
    'Next: the payoff for all of this. The 4-against-3 endgame, and the famous game where Lasker beat Capablanca with it.',
  drills: [
    {
      title: 'Punish the loose bishop',
      prompt: "You're White. Recapture on d4 with the queen and develop. When Black puts a bishop on an unprotected square, punish it.",
      moves: SLIP,
      start: 12,
      side: 'white',
      hints: [
        'After 8...Bg4, look at the fourth rank. Which of your pawns is blocking your queen?',
        'Push the e-pawn. It attacks d6, and it opens the line from d4 to g4.'
      ],
      success: '9.e5! hits the d6-bishop and uncovers the queen on the g4-bishop. Black cannot save both.'
    },
    {
      title: 'Answer 5...Bd6 6.d4 Bg4',
      prompt: "You're White. Strike with d4, take on e5 when Black pins, and recapture the right way on f3.",
      moves: `${EXCHANGE} O-O Bd6 d4 Bg4 dxe5 Bxf3 Qxf3`,
      start: 9,
      side: 'white',
      hints: ['Hit e5 with your d-pawn, then take on e5.', "When the bishop takes on f3, recapture with a piece so your pawns stay healthy."],
      success: '6.d4, 7.dxe5 and 8.Qxf3. After 8...Bxe5 Black has no bishop pair any more, and you keep the better pawns.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What do 5...Qd6 and 5...Bd6 have in common?',
      choices: [
        { text: 'Both guard e5 with a piece', correct: true, why: 'Right. The piece on d6 defends e5, but it can also become a target.' },
        { text: 'Both pin the f3-knight', why: 'The pin is ...Bg4. A piece on d6 guards e5 instead.' },
        { text: 'Both prepare ...f6', why: 'The point of these moves is to guard e5 without ...f6, keeping the f-pawn at home.' }
      ]
    },
    {
      type: 'plan',
      prompt: "Black has played the Bronstein, 5...Qd6. Which White idea attacks the queen?",
      moves: `${EXCHANGE} O-O Qd6`,
      orientation: 'white',
      choices: [
        { text: 'Na3 and Nc4', correct: true, why: 'Yes. A knight on c4 hits d6, and the queen has to move again.' },
        { text: 'Bf4', why: 'The e5-pawn blocks the line from f4 to d6, and it can capture the bishop on f4.' },
        { text: 'Re1', why: 'A useful move, but the rook does not attack d6. Think about which piece can reach c4.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move. Black has just played 8...Bg4?. What wins material?',
      moves: `${EXCHANGE} O-O Bd6 d4 exd4 Qxd4 f6 Nc3 Bg4`,
      orientation: 'white',
      choices: [
        { text: '9.e5', correct: true, why: 'Right. The pawn hits the d6-bishop and opens the fourth rank, so the queen also attacks the g4-bishop.' },
        { text: '9.h3', why: 'It asks the bishop to move, and Black simply takes on f3 or retreats. Look for a move that attacks two pieces.' },
        { text: '9.Qxd6', why: 'The bishop is defended by the c7-pawn and the queen. You would lose your queen for a bishop.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Bronstein, why can Black castle queenside so quickly?',
      moves: BRONSTEIN,
      orientation: 'white',
      choices: [
        { text: 'The queen has left d8 and the b8-knight is already gone, so only the bishop had to move', correct: true, why: 'Exactly. After 7...Bd7 the squares between king and rook are empty.' },
        { text: "White's pieces can't attack the queenside", why: "White can attack there. Castling is quick simply because d8, c8 and b8 are already clear." },
        { text: 'Black has already castled', why: "Not yet. Black's king is still on e8; ...O-O-O comes next." }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Black guarded e5 with 5...Qd6. What is this line called?',
      moves: `${EXCHANGE} O-O Qd6`,
      orientation: 'white',
      choices: [
        { text: 'The Bronstein Variation', correct: true, why: 'Right. The queen guards e5 and Black often castles queenside.' },
        { text: 'The Gligorić Variation', why: 'The Gligorić is 5...f6, guarding e5 with a pawn.' },
        { text: 'The Berlin Defense', why: 'The Berlin is 3...Nf6, a different defense on move 3.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Black has won the pawn back with 8...Bxe5. What did Black give up to do it?',
      moves: BD6,
      orientation: 'white',
      choices: [
        { text: 'The bishop pair', correct: true, why: 'Yes. Black traded the light-squared bishop for the f3-knight, so only one bishop is left.' },
        { text: 'A pawn', why: 'Material is level: White took on e5, and Black took it back.' },
        { text: 'The right to castle', why: "Black's king and rooks haven't moved, so Black can still castle." }
      ]
    }
  ],
  key: { name: 'Exchange Variation, Bronstein: 5.O-O Qd6', moves: `${EXCHANGE} O-O Qd6`, orientation: 'white' },
  terms: [
    { term: 'Discovered attack', meaning: 'Moving one piece out of the way so that another piece behind it attacks something.' },
    { term: 'Loose piece', meaning: 'A piece with no defender. Loose pieces are easy targets for double attacks.' },
    { term: 'Castling queenside', meaning: 'O-O-O. The king goes two squares toward the a-rook, and the rook jumps over to the d-file.' }
  ]
})
