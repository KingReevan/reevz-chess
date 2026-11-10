import { defineModule } from '../../../types'
import { ADVANCE, FRENCH } from '../lines'

/** adv-4qb6-wade: 4...Qb6 5.Nf3 Bd7 6.Be2 Bb5 7.c4 Bxc4 8.Bxc4 dxc4 */
const WADE_START = `${FRENCH} e5 c5 c3 Qb6 Nf3 Bd7 Be2 Bb5`
const WADE = `${WADE_START} c4 Bxc4 Bxc4 dxc4`
/** fr-bb5-trap: 5...Bd7 6.Bb5? Nxe5! 7.Nxe5 Bxb5 8.Na3 Bc6 */
const EUWE_BB5 = `${ADVANCE} Bd7 Bb5`
const TRAP = `${EUWE_BB5} Nxe5 Nxe5 Bxb5 Na3 Bc6`
/** adv-3b6: 3...b6 4.c3 Qd7 5.Nf3 Ba6 6.Bxa6 Nxa6 7.O-O */
const B6 = `${FRENCH} e5 b6 c3 Qd7 Nf3 Ba6 Bxa6 Nxa6 O-O`

export default defineModule({
  id: '2.8',
  title: 'Trading the bad bishop: ...Bd7–b5 and ...Ba6',
  minutes: 11,
  level: 2,
  goals: [
    'Know why the c8-bishop is the problem piece in the Advance',
    'Trade it with ...Bd7–b5 (the Wade) or ...b6 and ...Ba6',
    'See why 6.Bb5? is a mistake against 5...Bd7: there is no pin'
  ],
  intro:
    "Black's pawns on e6 and d5 stand on light squares, so they block Black's own light-squared bishop. In the Advance it often has nothing to do. One cure is to trade it for White's good light-squared bishop. This module shows two ways to do that, and a trap that White falls into when Black's bishop is already on d7.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Wade: ...Qb6, ...Bd7 and ...Bb5',
      intro: "Watch the path d7–c6–b5. Black keeps the knight on b8 so that the path stays open.",
      moves: WADE,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'The usual support',
          text: "4.c3. White supports d4. Black's c8-bishop is shut in by the e6-pawn.",
          marks: ['c8', 'e6']
        },
        8: {
          title: 'Queen first',
          text: '4...Qb6. This starts the Wade Variation. The queen lines up against d4 and hits b2 as usual, but the b8-knight stays at home for now, so it does not block c6.',
          arrows: [['b6', 'b2', 'red']],
          marks: ['c6']
        },
        9: {
          title: 'White develops',
          text: '5.Nf3. The knight guards d4.',
          arrows: [['f3', 'd4', 'green']]
        },
        10: {
          title: 'The bishop starts out',
          text: '5...Bd7. The bishop heads for b5. With c6 still empty, the road is open.',
          arrows: [['d7', 'b5', 'blue']]
        },
        11: {
          title: 'The good bishop',
          text: "6.Be2. White's light-squared bishop is a good piece: White's center pawns stand on dark squares (d4, e5), so they don't get in its way.",
          marks: ['e2']
        },
        12: {
          title: 'Offer the trade',
          text: "6...Bb5. Black offers to swap the problem bishop for White's good one. White's simplest answer is 7.Bxb5+, keeping a small edge.",
          arrows: [['b5', 'e2', 'yellow']]
        },
        13: {
          title: 'A pawn offer',
          text: '7.c4. The pawn attacks the bishop and the d5-pawn at the same time. It is really a pawn offer, and the engine prefers 7.Bxb5+.',
          arrows: [['c4', 'b5', 'red'], ['c4', 'd5', 'red']]
        },
        14: {
          title: 'Take the pawn',
          text: "7...Bxc4. Black's best: the bishop takes the pawn that attacked it.",
          arrows: [['b5', 'c4', 'green']]
        },
        15: {
          title: 'The bishops come off',
          text: '8.Bxc4. White takes the bishop, so the light-squared bishops are traded after all.',
          marks: ['c4']
        },
        16: {
          title: 'Problem solved',
          text: '8...dxc4. Black takes back with the d-pawn and is a pawn up for now. The c-pawns are doubled, and White can try to win the c4-pawn back, but the problem bishop is gone. The engine calls the position level.',
          marks: ['c4', 'c5']
        }
      }
    },
    {
      kind: 'text',
      title: 'Good bishop, bad bishop',
      body:
        "A bishop is **bad** when its own pawns stand on its color and block it. Black's c8-bishop moves on light squares, and Black's e6- and d5-pawns are on light squares too. White's f1-bishop is **good**: White's pawns on d4 and e5 are on dark squares.\n\nSo trading these two bishops usually helps Black. That is why **White should not hurry to trade them**, and why White often avoids ...Bb5 or answers it only when it gains something, like Bxb5+ with a small edge.\n\nThe **Euwe Variation**, 5...Bd7 (after 4...Nc6 5.Nf3), keeps Black's options open: ...Qb6, ...Nge7–f5 or ...Rc8. Against 6.a3, Black can strike at once with 6...f6; the engine gives White only a small edge. In the Wade, 6.a3 Bb5 7.b4 cxd4 8.Bxb5+ Qxb5 9.cxd4 also trades the bishops, with a slight edge for White."
    },
    {
      kind: 'walkthrough',
      title: 'The trap: 6.Bb5? Nxe5!',
      intro: "Black has played the Euwe, 5...Bd7. White's bishop goes to b5 as if to pin the c6-knight. Look closely: is it really a pin?",
      moves: TRAP,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'The Advance set-up',
          text: '5.Nf3. The f3-knight and the d4-pawn guard e5; the c6-knight attacks it.',
          arrows: [['c6', 'e5', 'red'], ['f3', 'e5', 'green'], ['d4', 'e5', 'green']]
        },
        10: {
          title: 'The Euwe',
          text: '5...Bd7. Black develops the bishop first.',
          arrows: [['c8', 'd7', 'green']]
        },
        11: {
          title: 'A fake pin',
          text: "6.Bb5. White hopes the c6-knight can't move. But the d7-bishop stands between the knight and the king, so the knight is not pinned. And the d7-bishop is right behind the knight, aiming at b5.",
          arrows: [['b5', 'c6', 'red'], ['d7', 'b5', 'yellow']],
          ann: '?'
        },
        12: {
          title: 'Take the pawn',
          text: '6...Nxe5. The knight grabs the e5-pawn. Now the d7-bishop attacks the b5-bishop, and the knight on e5 is attacked by the f3-knight and the d4-pawn.',
          arrows: [['d7', 'b5', 'red']],
          ann: '!'
        },
        13: {
          title: 'Knight takes knight',
          text: "7.Nxe5. White's best. Taking on d7 first, or with the d-pawn, is even worse for White.",
          marks: ['e5']
        },
        14: {
          title: 'Bishop takes bishop',
          text: '7...Bxb5. Black removes the bishop. Black has won the e5-pawn, and White\'s good bishop is gone.',
          marks: ['b5']
        },
        15: {
          title: 'Hit the bishop',
          text: '8.Na3. The knight attacks the b5-bishop. 8.a4 is a little better, but Black stays clearly better either way.',
          arrows: [['a3', 'b5', 'red']]
        },
        16: {
          title: 'A clean pawn',
          text: "8...Bc6. The bishop steps back. It now stands in front of its pawn chain instead of behind it. Black is a clean pawn up, and the engine says Black is clearly better.",
          marks: ['c6']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '3...b6 and ...Ba6',
      intro: 'A rare way to trade the bishop at once: put it on a6.',
      moves: B6,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The Advance',
          text: '3.e5. The center is locked.',
          marks: ['c8']
        },
        6: {
          title: 'A new diagonal',
          text: '3...b6. Black opens the a6–c8 diagonal for the bishop, planning ...Ba6 to trade it. The price: ...c5, the main break, waits.',
          arrows: [['c8', 'a6', 'blue']]
        },
        7: {
          title: 'White supports d4',
          text: '4.c3. A useful move anyway. It also opens the d1–a4 diagonal for White\'s queen.',
          arrows: [['d1', 'a4', 'blue']]
        },
        8: {
          title: 'A careful move',
          text: '4...Qd7. Why not ...Ba6 at once? Because 4...Ba6? 5.Bxa6 Nxa6 6.Qa4+ forks the king and the a6-knight. With the queen on d7, a4 is covered.',
          arrows: [['d7', 'a4', 'green']]
        },
        9: {
          title: 'Develop',
          text: '5.Nf3. White develops normally.',
          arrows: [['g1', 'f3', 'green']]
        },
        10: {
          title: 'The offer',
          text: '5...Ba6. Now the bishop offers the trade.',
          arrows: [['a6', 'f1', 'yellow']]
        },
        11: {
          title: 'White accepts',
          text: '6.Bxa6. White trades.',
          marks: ['a6']
        },
        12: {
          title: 'A knight on the rim',
          text: '6...Nxa6. The problem bishop is gone, but the knight on a6 is far from the center. It has to come back through b8, or through c7 once the c-pawn has moved.',
          arrows: [['a6', 'b8', 'blue']]
        },
        13: {
          title: 'Too slow',
          text: '7.O-O. White is castled and has more space. Black has spent moves on ...b6, ...Qd7 and ...Ba6 and still has not played ...c5. The engine gives White a clear edge.',
          arrows: [['e1', 'g1', 'green']]
        }
      }
    }
  ],
  takeaway:
    "Black's c8-bishop is blocked by the e6- and d5-pawns, so trading it for White's good bishop helps Black. ...Bd7–b5 (the Wade) does it at a small cost; 3...b6 and ...Ba6 costs too much time. Against 5...Bd7, 6.Bb5? fails to 6...Nxe5!.",
  lookAhead: "Module 2.9 looks at White's other fourth moves, from Nimzowitsch's 4.Nf3 to 4.Qg4 and 4.dxc5.",
  drills: [
    {
      title: 'No pin',
      prompt: "You're Black. White has just played 6.Bb5, as if your c6-knight were pinned. It isn't. Win a pawn.",
      moves: `${EUWE_BB5} Nxe5 Nxe5 Bxb5`,
      start: 11,
      side: 'black',
      hints: ['The d7-bishop stands between your knight and your king. Which pawn can the knight take?', 'After the knight leaves c6, your d7-bishop attacks b5.'],
      success: '6...Nxe5 7.Nxe5 Bxb5. Black is a pawn up and has traded off White\'s good bishop.'
    },
    {
      title: 'The Wade, from memory',
      prompt: "You're Black. After 4.c3, bring the queen out first, then send the c8-bishop to b5 to offer a trade. If White hits it with c4, take the pawn.",
      moves: `${WADE_START} c4 Bxc4`,
      start: 7,
      side: 'black',
      hints: ['The queen goes to b6. Keep the b8-knight at home so c6 stays empty.', 'The bishop goes d7, then b5. Against 7.c4, capture on c4.'],
      success: '4...Qb6, 5...Bd7, 6...Bb5 and 7...Bxc4. After 8.Bxc4 dxc4 the problem bishop is gone, Black has an extra (doubled) pawn for now, and the position is level.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'White has just played 6.Bb5. Is the c6-knight pinned?',
      moves: EUWE_BB5,
      orientation: 'black',
      choices: [
        { text: 'No: the d7-bishop stands between the knight and the king', correct: true, why: 'Right. The knight can move freely, and when it does, the d7-bishop attacks b5.' },
        { text: 'Yes, to the king', why: "The diagonal b5–e8 is blocked by Black's own bishop on d7, so the king is not behind the knight." },
        { text: 'Yes, to the queen', why: 'The queen is on d8, not on the b5–e8 diagonal. Behind the knight stands only Black\'s own d7-bishop, and it is defended.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to play after 6.Bb5. What is the best move?',
      moves: EUWE_BB5,
      orientation: 'black',
      choices: [
        { text: '6...Nxe5', correct: true, why: 'Right. The knight is not pinned. After 7.Nxe5 Bxb5 Black is a clean pawn up.' },
        { text: '6...cxd4', why: 'Playable, but it misses the free pawn. The engine says 6...Nxe5 is much stronger.' },
        { text: '6...Nge7', why: 'Solid, but again it misses 6...Nxe5, which simply wins a pawn.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Wade, why does Black play ...Qb6 and ...Bd7 before ...Nc6?',
      moves: `${FRENCH} e5 c5 c3 Qb6 Nf3 Bd7`,
      orientation: 'black',
      choices: [
        { text: 'So that c6 stays empty and the bishop can go d7–b5', correct: true, why: 'Yes. With the knight on c6, the bishop could not reach b5.' },
        { text: 'To castle queenside quickly', why: 'Black also needs the b8-knight out to castle long. The point is the path to b5.' },
        { text: 'To stop White from castling', why: "Black's queen does not stop White castling here. The idea is the bishop trade on b5." }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 3...b6 line, why does Black play 4...Qd7 before ...Ba6?',
      moves: `${FRENCH} e5 b6 c3 Qd7`,
      orientation: 'black',
      choices: [
        { text: 'After 4...Ba6 5.Bxa6 Nxa6, 6.Qa4+ would fork the king and the a6-knight', correct: true, why: 'Right. The queen on d7 covers a4, so the fork is off.' },
        { text: 'To prepare ...Qb5', why: 'The queen is not heading for b5. It covers a4 against a queen fork.' },
        { text: 'To castle queenside', why: 'Castling long is far away here. The move is about the Qa4+ fork.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: "Why is Black's c8-bishop called the problem bishop in the French?",
      choices: [
        { text: "Black's own pawns on e6 and d5 stand on light squares and block it", correct: true, why: 'Right. A bishop blocked by its own pawns has few good squares. That is why Black often trades it.' },
        { text: 'It can easily be trapped on c8', why: 'It is not in danger of being trapped. It is simply blocked by its own pawns.' },
        { text: 'White always wins it in the opening', why: 'Nothing wins it. The problem is that it has no good diagonal.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6...Bb5 in the Wade, what is Black offering?',
      moves: WADE_START,
      orientation: 'black',
      choices: [
        { text: "A trade of Black's problem bishop for White's good light-squared bishop", correct: true, why: "Yes. White's simplest answer is 7.Bxb5+, accepting it with a small edge; 7.c4 leads to a level game." },
        { text: 'The b7-pawn', why: 'The b7-pawn is not hanging. The bishop on b5 faces the bishop on e2.' },
        { text: 'A trade of queens', why: 'The queens are not facing each other. It is the light-squared bishops that meet.' }
      ]
    }
  ],
  key: { name: 'Wade Variation: 6...Bb5', moves: WADE_START, orientation: 'black' },
  terms: [
    { term: 'Bad bishop', meaning: 'A bishop blocked by its own pawns standing on its color, like Black\'s c8-bishop behind e6 and d5.' },
    { term: 'Good bishop', meaning: "A bishop whose own pawns are on the other color, so its diagonals are free. White's f1-bishop in the Advance." },
    { term: 'Fork', meaning: 'One piece attacks two enemy pieces at once, like Qa4+ hitting the king and a knight on a6.' }
  ]
})
