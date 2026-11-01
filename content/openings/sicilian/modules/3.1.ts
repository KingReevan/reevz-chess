import { defineModule } from '../../../types'
import { DRAGON, OPEN, YUGOSLAV } from '../lines'

/** model-fischer-larsen-1958, moves 9 to 12 */
const FL_START = `${YUGOSLAV} Bc4 Nxd4 Bxd4 Be6 Bb3 Qa5 O-O-O b5`

export default defineModule({
  id: '3.1',
  title: 'The Dragon bishop and the long diagonal',
  minutes: 10,
  level: 2,
  goals: [
    'Build the Dragon set-up and see where the g7-bishop points',
    'Spot what blocks the bishop, and when it wakes up',
    "Understand why White wants to trade this bishop and Black doesn't"
  ],
  intro:
    "In the Dragon, Black plays 5...g6 and puts a bishop on g7. Players call it the Dragon bishop, and many say it is Black's best piece. But when you first look at the board, a knight is standing right in front of it. So what does this bishop really do, and why do both sides care so much about it?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Building the Dragon',
      intro: 'Follow both sides. White builds the Yugoslav Attack, the sharpest answer to the Dragon. Watch the long diagonal from a1 to h8.',
      moves: YUGOSLAV,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'The Open Sicilian',
          text: '5.Nc3. The usual Open Sicilian position. Black now picks a system. The Dragon starts with a small pawn move.',
          marks: ['g7']
        },
        10: {
          title: 'Room for the bishop',
          text: '5...g6. The g-pawn steps forward to make room for the bishop on g7. A bishop developed this way, behind a pawn on g6, is called a fianchetto.',
          arrows: [['f8', 'g7', 'green']]
        },
        11: {
          title: "White's bishop comes out",
          text: '6.Be3. The bishop guards the d4-knight. It also looks along the diagonal toward h6, the square next to where the Dragon bishop is going.',
          arrows: [['e3', 'h6', 'blue']]
        },
        12: {
          title: 'The Dragon bishop',
          text: "6...Bg7. The bishop sits on the long diagonal from h8 to a1. For now the f6-knight stands in front of it. Behind the knight, the line runs through e5 and d4 toward c3, b2 and a1, on White's queenside.",
          arrows: [['g7', 'a1', 'yellow']],
          marks: ['f6']
        },
        13: {
          title: 'A pawn on f3',
          text: '7.f3. This pawn supports e4 and takes the g4-square away from the f6-knight. Module 3.2 explains why that matters so much.',
          arrows: [['f3', 'g4', 'green'], ['f3', 'e4', 'green']]
        },
        14: {
          title: 'Black castles',
          text: '7...O-O. Black castles kingside. Now the bishop has a second job: it guards the dark squares around the king, like h6 and f6.',
          arrows: [['g7', 'h6', 'green'], ['g7', 'f6', 'green']]
        },
        15: {
          title: 'A battery toward h6',
          text: '8.Qd2. The queen lines up behind the e3-bishop. Later White plays Bh6, and the queen backs it up. The aim is to trade off the Dragon bishop.',
          arrows: [['d2', 'h6', 'red']],
          marks: ['h6']
        },
        16: {
          title: 'The tabiya',
          text: '8...Nc6. The knight develops and hits d4. This is the Yugoslav Attack, and Modules 3.3 to 3.6 are all about it. White is slightly better in theory, but both sides have real chances.',
          arrows: [['c6', 'd4', 'red']],
          marks: ['d4']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why Black keeps the bishop',
      body:
        "The g7-bishop does two jobs at once. **In attack**, it points down the long diagonal toward White's queenside. In the Yugoslav, White's king castles there, so once the diagonal opens, the bishop bears down on b2 and the squares in front of the king. **In defense**, it guards the dark squares around Black's own king.\n\nIf the bishop is traded, Black loses both jobs: the counterattack gets weaker, and holes appear around the king. That's why White's main plan is to trade it with Bh6, and why Black almost never gives it up willingly."
    },
    {
      kind: 'walkthrough',
      title: 'Bishop against bishop',
      intro: 'White can also meet the Dragon bishop head-on. These are the first moves of Fischer–Larsen, Portorož Interzonal 1958, a game Fischer won.',
      moves: FL_START,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'The Yugoslav position',
          text: '8...Nc6. The g7-bishop is hidden behind the f6-knight, and the c6-knight hits d4. White decides what to do with the light-squared bishop.',
          marks: ['f6']
        },
        17: {
          title: 'The bishop aims at f7',
          text: '9.Bc4. The bishop points at f7, next to Black\'s king. It also watches d5, which makes the freeing move ...d5 hard to play.',
          arrows: [['c4', 'f7', 'red'], ['c4', 'd5', 'blue']]
        },
        18: {
          title: 'Black trades knights',
          text: '9...Nxd4. Black swaps off the d4-knight. Something has to take back on d4, right on the Dragon bishop\'s diagonal.',
          marks: ['d4']
        },
        19: {
          title: 'Bishop meets bishop',
          text: "10.Bxd4. White's dark-squared bishop now faces the Dragon bishop, with only the f6-knight between them. If that knight ever moves, White can offer a trade with Bxg7.",
          arrows: [['d4', 'g7', 'yellow']],
          marks: ['f6']
        },
        20: {
          title: 'A challenge to the c4-bishop',
          text: '10...Be6. Black develops and offers to trade off White\'s c4-bishop, the piece aiming at f7.',
          arrows: [['e6', 'c4', 'red']]
        },
        21: {
          title: 'The bishop steps back',
          text: '11.Bb3. White keeps the bishop. From b3 it stays on the diagonal toward f7 (the e6-bishop stands in the way for now), and it is safer from attack.',
          arrows: [['b3', 'f7', 'blue']]
        },
        22: {
          title: 'The queen joins in',
          text: '11...Qa5. The queen heads for White\'s queenside. It eyes the a2-pawn and presses on the c3-knight.',
          arrows: [['a5', 'c3', 'red'], ['a5', 'a2', 'red']]
        },
        23: {
          title: 'Opposite sides',
          text: '12.O-O-O. White castles long, so the kings are on opposite sides. Now each side attacks the other king.',
          marks: ['c1', 'g8']
        },
        24: {
          title: 'The pawn storm starts',
          text: '12...b5. Black\'s b-pawn heads for b4, where it will chase the c3-knight, one of the guards of e4. The position is roughly level. Module 3.4 shows how Fischer attacked on the other wing.',
          arrows: [['b5', 'b4', 'green'], ['b4', 'c3', 'red']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Look behind the knight',
      body:
        "A bishop that stands behind its own knight is not dead. It is waiting. Whenever the f6-knight moves in the Dragon, often with a capture or a jump to d5 or h5, check what the g7-bishop can suddenly see. Many Dragon tactics start this way."
    },
    {
      kind: 'history',
      title: 'Why "Dragon"?',
      body:
        'Fyodor Dus-Chotimirsky said he named the variation in 1901, because Black\'s pawns on d6, e7, f7, g6 and h7 reminded him of the constellation Draco, the Dragon. The chess historian Edward Winter could not find the name in print before 1914, so the story is told but not proven.'
    }
  ],
  takeaway:
    "The Dragon bishop on g7 points down the long diagonal toward White's queenside and guards Black's king. It often waits behind the f6-knight. White's main plan is to trade it, and Black's is to keep it.",
  lookAhead:
    "Why does White play 7.f3 before Qd2? Module 3.2 shows what Black's knight can do from g4 if White forgets.",
  drills: [
    {
      title: 'Build the Dragon',
      prompt: "You're Black. White has just played 5.Nc3. Set up the Dragon: fianchetto your bishop, castle, and develop your queen's knight.",
      moves: YUGOSLAV,
      start: 9,
      side: 'black',
      hints: [
        'First make room for the bishop with a pawn move on the kingside.',
        'Bishop to g7, castle, and then the knight to c6.'
      ],
      success: '5...g6, 6...Bg7, 7...O-O and 8...Nc6. The Dragon is built, and the bishop is ready for the moment the f6-knight moves.'
    },
    {
      title: 'Set up the Yugoslav',
      prompt: "You're White this time. Black has chosen the Dragon with 5...g6. Build the Yugoslav Attack set-up.",
      moves: `${DRAGON} Be3 Bg7 f3 O-O Qd2`,
      start: 10,
      side: 'white',
      hints: [
        'Develop the dark-squared bishop to guard d4.',
        'Then a pawn move that takes g4 away from the f6-knight, and the queen behind the bishop.'
      ],
      success: '6.Be3, 7.f3 and 8.Qd2. The queen and bishop now aim at h6, ready for Bh6 to trade the Dragon bishop.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'White to move. Which piece is blocking the g7-bishop right now?',
      moves: YUGOSLAV,
      orientation: 'black',
      choices: [
        { text: 'The f6-knight', correct: true, why: 'Right. The knight stands on the long diagonal just in front of the bishop. When it moves, the bishop sees e5 and hits the d4-knight.' },
        { text: 'The d6-pawn', why: 'The d6-pawn is not on the long diagonal. The squares in front of the bishop are f6, e5, d4, c3, b2 and a1.' },
        { text: "White's e4-pawn", why: 'The bishop moves on dark squares, and e4 is a light square. It can never touch e4. The blocker is the f6-knight.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Yugoslav Attack, why does White put the queen on d2 behind the e3-bishop?',
      moves: `${DRAGON} Be3 Bg7 f3 O-O Qd2`,
      orientation: 'white',
      choices: [
        { text: 'To play Bh6 and trade off the Dragon bishop', correct: true, why: "Yes. The queen backs up Bh6. Trading Black's best piece weakens the squares around Black's king." },
        { text: 'To defend the e4-pawn', why: 'The queen on d2 does not guard e4. The c3-knight and the f3-pawn do that.' },
        { text: "To stop Black's knight from jumping to g4", why: 'That is the job of the f3-pawn. The queen on d2 is about the diagonal toward h6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does Black rarely trade off the Dragon bishop?',
      choices: [
        { text: 'It leads the attack on the long diagonal and also guards Black\'s king', correct: true, why: 'Exactly. Without it, Black\'s counterattack loses its sharpest piece and holes appear around the king.' },
        { text: 'It is the only piece that defends the d6-pawn', why: 'The g7-bishop does not guard d6 at all. It works on the long diagonal and next to the king.' },
        { text: 'White has no dark-squared bishop to trade it with', why: 'White does: the bishop on e3. That is exactly the piece White wants to trade it with, via Bh6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Black to move, after 10.Bxd4. If the f6-knight moves away, what can White do at once?',
      moves: `${YUGOSLAV} Bc4 Nxd4 Bxd4`,
      orientation: 'black',
      choices: [
        { text: 'Play Bxg7 and trade off the Dragon bishop', correct: true, why: "Right. White's d4-bishop and the g7-bishop face each other. Only the f6-knight stands between them." },
        { text: 'Win the d6-pawn with Bxd6', why: 'The d4-bishop cannot reach d6: it is on the same file, and bishops move diagonally. The change is on the long diagonal.' },
        { text: 'Nothing changes on the diagonal', why: 'A lot changes. With f6 empty, the two dark-squared bishops look straight at each other.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'White plays Be3, f3, Qd2 and castles queenside against the Dragon. What is this set-up called?',
      moves: YUGOSLAV,
      orientation: 'white',
      choices: [
        { text: 'The Yugoslav Attack', correct: true, why: 'Yes. It is the sharpest answer to the Dragon, and White usually castles long and attacks with h4–h5.' },
        { text: 'The English Attack', why: 'Close, but the English Attack is the same kind of set-up against the Najdorf (5...a6). Against the Dragon it is called the Yugoslav.' },
        { text: 'The Levenfish Attack', why: 'The Levenfish is 6.f4 against the Dragon. Module 3.7 covers it.' },
        { text: 'The Maróczy Bind', why: 'The Maróczy Bind is White\'s pawns on c4 and e4, mostly against the Accelerated Dragon (Module 3.9).' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 5...g6 6.Be3 Bg7, which squares does the g7-bishop point toward along the long diagonal?',
      moves: `${OPEN} g6 Be3 Bg7`,
      orientation: 'black',
      choices: [
        { text: 'f6, e5, d4, c3, b2 and a1', correct: true, why: "Right. That is the long dark diagonal. Right now the f6-knight stands first in line, so the bishop only sees further once the knight moves." },
        { text: 'Only f8, h8 and h6', why: 'Those are just the squares next to the bishop. The long diagonal runs the other way, through f6 all the way down to a1.' },
        { text: 'h6, g5, f4 and e3', why: 'The bishop can reach h6, but g5, f4 and e3 are on a different diagonal, the one White\'s e3-bishop uses.' }
      ]
    }
  ],
  key: { name: 'Yugoslav Attack: 8...Nc6', moves: YUGOSLAV, orientation: 'black' },
  terms: [
    { term: 'Fianchetto', meaning: 'Developing a bishop to g7 or b7 (g2 or b2 for White) after moving the knight\'s pawn one square. The bishop then sits on a long diagonal.' },
    { term: 'Long diagonal', meaning: 'One of the two longest diagonals on the board, a1–h8 or h1–a8. The Dragon bishop uses a1–h8.' },
    { term: 'Battery', meaning: 'Two pieces lined up on the same line, like a queen behind a bishop, so they work together.' },
    { term: 'Opposite-side castling', meaning: 'One king castles kingside and the other queenside. Both sides can then storm the enemy king with pawns.' }
  ]
})
