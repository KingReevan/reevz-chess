import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** gligoric-7be3-c6: 7...c6 8.d5 Ng4 9.Bg5 f6 10.Bh4 c5 */
const C6 = `${CLASSICAL} Be3 c6 d5 Ng4 Bg5 f6 Bh4 c5`
/** gligoric-7be3-h6: 7...h6 8.O-O Ng4 9.Bc1 Nc6 10.d5 Ne7 */
const H6 = `${CLASSICAL} Be3 h6 O-O Ng4 Bc1 Nc6 d5 Ne7`

export default defineModule({
  id: '5.5',
  title: 'Gligorić: 7...c6 and 7...h6',
  minutes: 10,
  level: 3,
  goals: [
    'See how 7...c6 keeps options and then locks the queenside with ...c5',
    'Understand why 7...h6 makes ...Ng4 safe from Bg5',
    'Know the right bishop retreat for White: back to c1'
  ],
  intro:
    "Against 7.Be3, Black has two quieter set-ups. 7...c6 waits to see what White does in the center. 7...h6 prepares the ...Ng4 jump so that Bg5 is no longer possible. Neither is flashy, but each changes the details, and White must know the right answer.",
  sections: [
    {
      kind: 'walkthrough',
      title: '7...c6: wait, then lock the queenside',
      intro: 'Look at the queenside pawns at the end. Who can still push there?',
      moves: C6,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'The Gligorić',
          text: '7.Be3. White keeps the center tense.',
          arrows: [['e3', 'd4', 'green']]
        },
        14: {
          title: 'A flexible pawn move',
          text: '7...c6. The pawn covers d5. If White closes the center with d5, Black can choose: open the c-file with ...cxd5, or lock the queenside with ...c5.',
          arrows: [['c6', 'd5', 'green']]
        },
        15: {
          title: 'White closes',
          text: "8.d5. White's best. The center is locked, so play moves to the wings.",
          marks: ['d5', 'e5']
        },
        16: {
          title: 'The usual jump',
          text: '8...Ng4. As in Module 5.3, the knight hits the e3-bishop.',
          arrows: [['g4', 'e3', 'red']]
        },
        17: {
          title: 'Hit the queen',
          text: '9.Bg5. The bishop attacks the queen on d8.',
          arrows: [['g5', 'd8', 'red']]
        },
        18: {
          title: 'Block',
          text: '9...f6. The standard answer: block and kick.',
          arrows: [['f6', 'g5', 'red']]
        },
        19: {
          title: 'Bishop to h4',
          text: '10.Bh4. The bishop stays on the diagonal toward d8.',
          arrows: [['h4', 'd8', 'blue']]
        },
        20: {
          title: 'Lock the queenside',
          text: "10...c5. Now c4–c5 is impossible and the queenside is blocked. White's usual plan there is much slower, so Black can turn to the kingside: ...Nh6, ...Nf7 and ...f5. White is still a bit better, but the position is closed.",
          arrows: [['f6', 'f5', 'blue'], ['g4', 'h6', 'blue']],
          marks: ['c5', 'c4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '7...h6: ...Ng4 without Bg5',
      intro: "In Module 5.3, Bg5 was White's best answer to ...Ng4. Here Black takes that square away first.",
      moves: H6,
      start: 13,
      orientation: 'white',
      steps: {
        13: {
          title: 'The Gligorić',
          text: '7.Be3. The bishop guards d4.',
          arrows: [['e3', 'd4', 'green']]
        },
        14: {
          title: 'Covering g5',
          text: '7...h6. The pawn guards g5. Now, if the knight jumps to g4, the bishop cannot answer with Bg5.',
          arrows: [['h6', 'g5', 'green']],
          marks: ['g5']
        },
        15: {
          title: 'White castles',
          text: '8.O-O. A natural developing move.',
          arrows: [['e1', 'g1', 'blue']]
        },
        16: {
          title: 'Now the jump',
          text: '8...Ng4. The knight attacks the e3-bishop, and Bg5 would just lose the bishop to ...hxg5.',
          arrows: [['g4', 'e3', 'red']]
        },
        17: {
          title: 'All the way back',
          text: "9.Bc1. The right retreat. From c1 the bishop does not block the queen, so d4 stays guarded. 9.Bd2? would block it, and 9...exd4 wins a pawn.",
          arrows: [['d1', 'd4', 'green']],
          ann: '!'
        },
        18: {
          title: 'Pressure on d4',
          text: '9...Nc6. Black adds a second attacker on d4.',
          arrows: [['c6', 'd4', 'red'], ['e5', 'd4', 'red']]
        },
        19: {
          title: 'Close the center',
          text: '10.d5. White locks the center and kicks the knight. The g4-knight is now a little lost on the kingside.',
          arrows: [['d5', 'c6', 'red']]
        },
        20: {
          title: 'Knight to e7',
          text: "10...Ne7. The main-line knight square. Black's g4-knight will return to f6, and ...f5 comes later. White is better and starts the usual queenside play.",
          arrows: [['g4', 'f6', 'blue'], ['f7', 'f5', 'blue']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'Count the defenders before you retreat',
      body:
        "After 7...h6 8.O-O Ng4, the bishop must leave e3. **9.Bg5??** loses it to 9...hxg5. **9.Bd2?** looks safe, but it stands between the queen and d4, so after 9...exd4 Black wins a pawn. **9.Bc1** is the move: the bishop is safe and the queen still guards d4."
    }
  ],
  takeaway:
    "7...c6 keeps the center options open and, after 8.d5, can lock the queenside with ...c5. 7...h6 covers g5, so ...Ng4 comes without Bg5; White's best answer is to retreat the bishop all the way to c1.",
  lookAhead:
    "Next: the main line 7.O-O, and Black's 7...exd4, which opens the long diagonal and sets a trap.",
  drills: [
    {
      title: 'The right retreat',
      prompt: "You're White. Black has jumped 8...Ng4 at your bishop, and g5 is covered by the h6-pawn. Retreat the bishop the safe way, then close the center when the knight joins in.",
      moves: H6.split(' ').slice(0, 19).join(' '),
      start: 16,
      side: 'white',
      hints: [
        'Which retreat keeps the queen guarding d4?',
        '9.Bc1, then answer ...Nc6 with d5.'
      ],
      success: '9.Bc1 and 10.d5. The bishop is safe, d4 stayed guarded, and the center is locked on your terms.'
    },
    {
      title: 'Lock it up',
      prompt: "You're Black. White has closed the center with 8.d5. Jump at the bishop, block the attack on your queen, and then lock the queenside with your c-pawn.",
      moves: C6,
      start: 15,
      side: 'black',
      hints: [
        'First the knight jump that hits e3.',
        '...Ng4, ...f6, then ...c5.'
      ],
      success: '8...Ng4, 9...f6 and 10...c5. The queenside is blocked, and Black can turn to the kingside.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'White to move. The knight on g4 attacks the e3-bishop. Where should the bishop go?',
      moves: H6.split(' ').slice(0, 16).join(' '),
      orientation: 'white',
      choices: [
        { text: '9.Bc1', correct: true, why: "Right. The bishop is safe, and it does not block the queen's guard of d4." },
        { text: '9.Bg5', why: 'The h6-pawn guards g5. After 9...hxg5 White has simply lost the bishop.' },
        { text: '9.Bd2', why: 'The bishop now blocks the queen from d4. After 9...exd4 Black wins a pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the point of 7...h6 against the Gligorić?',
      choices: [
        { text: 'It covers g5, so ...Ng4 can no longer be met by Bg5', correct: true, why: 'Exactly. In Module 5.3, 8.Bg5 was strong because it hit the queen. Now that square is taken away.' },
        { text: 'It prepares ...g5 and a kingside pawn storm right away', why: '...g5 can come later in some lines, but the immediate job of ...h6 is to cover g5 for the ...Ng4 jump.' },
        { text: 'It makes a square for the king on h7', why: 'The king sometimes goes to h7, but that is not why Black plays ...h6 here.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 7...c6 8.d5 Ng4 9.Bg5 f6 10.Bh4 c5, where will Black play next?',
      moves: C6,
      orientation: 'black',
      choices: [
        { text: 'On the kingside: ...Nh6, ...Nf7 and ...f5', correct: true, why: "Right. The queenside is locked, so Black turns to the kingside, where the pawn chain points." },
        { text: 'On the queenside: ...b5', why: "Black's pawn chain d6–e5 points to the kingside, and ...b5 would be hard to prepare here." },
        { text: 'In the center: ...exd5', why: "The d5-pawn is White's, but Black's e5-pawn cannot take it. The center is locked." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 7...c6 called a flexible move?',
      choices: [
        { text: 'If White plays d5, Black can open the c-file with ...cxd5 or lock the queenside with ...c5', correct: true, why: 'Right. Black keeps both options until White has shown a plan.' },
        { text: 'It lets the queen go to c7 at once', why: 'The queen could go to c7 later, but the c-pawn move is about the center and the queenside structure.' },
        { text: 'It wins the d4-pawn', why: 'It does not attack d4 at all. It covers d5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'White to move. Black has just played 7...c6. What is the most testing reply?',
      moves: `${CLASSICAL} Be3 c6`,
      orientation: 'white',
      choices: [
        { text: '8.d5', correct: true, why: 'Right. White closes the center and keeps more space. White is a bit better.' },
        { text: '8.dxe5', why: 'After 8...dxe5 the queens usually come off and the game is roughly equal. White lets the advantage go.' },
        { text: '8.O-O', why: 'Playable, but it allows ...exd4 and a freer game for Black. 8.d5 keeps more of an edge.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White has just played 9.Bg5, hitting the queen. What should Black do?',
      moves: `${CLASSICAL} Be3 h6 O-O Ng4 Bg5`,
      orientation: 'black',
      choices: [
        { text: '9...hxg5', correct: true, why: 'Yes. The h6-pawn was guarding g5 all along. Black wins a whole bishop.' },
        { text: '9...f6', why: 'This blocks the attack, but you can just take the bishop for free.' },
        { text: '9...Qe8', why: 'The queen escapes, but why run? 9...hxg5 wins a piece.' }
      ]
    }
  ],
  key: { name: 'Gligorić: 7...h6 8.O-O Ng4 9.Bc1', moves: H6.split(' ').slice(0, 17).join(' '), orientation: 'white' },
  terms: [
    { term: 'Flexible move', meaning: 'A move that keeps several plans open, so you can choose once your opponent has shown theirs.' },
    { term: 'Locked queenside', meaning: 'The pawns on that side block each other, so neither side can easily open lines there.' },
    { term: 'Retreat', meaning: 'Moving a piece back toward your own side, often to a safer or more useful square.' }
  ]
})
