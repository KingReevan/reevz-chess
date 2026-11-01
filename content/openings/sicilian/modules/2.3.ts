import { defineModule } from '../../../types'
import { ENGLISH, NAJDORF } from '../lines'

/** najdorf-be3-e5: 6.Be3 e5 7.Nb3 Be6 8.f3 Be7 9.Qd2 O-O 10.O-O-O Nbd7 */
const SETUP = `${ENGLISH} e5 Nb3 Be6 f3 Be7 Qd2 O-O O-O-O Nbd7`
/** najdorf-6f3: 6.f3 e5 7.Nb3 Be6 8.Be3 */
const F3 = `${NAJDORF} f3 e5 Nb3 Be6 Be3`

export default defineModule({
  id: '2.3',
  title: 'The English Attack plan: Be3, f3, Qd2, O-O-O',
  minutes: 10,
  level: 2,
  goals: [
    'Learn what each move of the English Attack set-up does',
    'Understand why f3 matters: it keeps the black knight off g4 and supports g4',
    'See how 6.f3 reaches the same position by another road'
  ],
  intro:
    "Against the Najdorf, White's most popular plan is the English Attack. White plays the same handful of moves almost every game: Be3, f3, Qd2 and long castling, then pushes the kingside pawns. This module explains each move, and shows what Black does in the meantime.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Building the English Attack',
      intro: 'Follow both sides. Each White move has a job, and so does each Black reply.',
      moves: SETUP,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'The Najdorf',
          text: "5...a6. Black has kept b5 under control. White now picks a plan. The English Attack is the most popular one.",
          arrows: [['a6', 'b5', 'blue']]
        },
        11: {
          title: 'Bishop to e3',
          text: '6.Be3. The bishop develops and guards the d4-knight. It also clears c1, one of the squares White must empty to castle long.',
          arrows: [['e3', 'd4', 'green']]
        },
        12: {
          title: 'Black kicks the knight',
          text: '6...e5. Black chooses the ...e5 structure (Module 2.2) and attacks the d4-knight.',
          arrows: [['e5', 'd4', 'red']]
        },
        13: {
          title: 'Why b3 and not f3?',
          text: '7.Nb3. The knight retreats to b3 because White wants the f3-square for a pawn. A knight on f3 would block the f-pawn.',
          arrows: [['d4', 'b3', 'green']],
          marks: ['f3']
        },
        14: {
          title: 'The bishop guards d5',
          text: "7...Be6. Black's bishop fights for d5, the hole. It also looks at g4: together with the f6-knight it eyes that square.",
          arrows: [['e6', 'd5', 'green'], ['e6', 'g4', 'blue'], ['f6', 'g4', 'blue']]
        },
        15: {
          title: 'The key pawn move',
          text: "8.f3. Three jobs: it supports e4, it takes g4 away from Black's knight, and it prepares g2–g4 with the pawn backed up. Without f3, ...Ng4 could chase the e3-bishop (Module 2.5).",
          arrows: [['f3', 'e4', 'green'], ['f3', 'g4', 'green'], ['g2', 'g4', 'blue']]
        },
        16: {
          title: 'Black develops',
          text: '8...Be7. The bishop guards d6 and lets Black castle short.',
          arrows: [['e7', 'd6', 'green']]
        },
        17: {
          title: 'Queen to d2',
          text: '9.Qd2. The queen guards the e3-bishop and clears d1. Now b1, c1 and d1 are empty, so White can castle long.',
          arrows: [['d2', 'e3', 'green']],
          marks: ['b1', 'c1', 'd1']
        },
        18: {
          title: 'Black castles short',
          text: "9...O-O. Black's king goes to the kingside, the side where White's pawns are about to advance."
        },
        19: {
          title: 'White castles long',
          text: "10.O-O-O. The king goes to c1, and the rook lands on d1 behind the queen. Queen and rook now line up on the d-file against the d6-pawn.",
          arrows: [['d2', 'd6', 'red']],
          marks: ['d6']
        },
        20: {
          title: 'Opposite sides',
          text: "10...Nbd7. Black develops the last minor piece, ready for ...b5. The kings are on opposite sides, so each player can storm the other king with pawns. White's next move is usually g4.",
          arrows: [['g2', 'g4', 'blue'], ['b7', 'b5', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Why castle long?',
      body:
        "White wants to push the g- and h-pawns at Black's king. If White's own king were on g1, those pushes would strip away its own shelter. So White castles on the **other side**. The rook from a1 also lands on d1 in one move, aiming at d6.\n\nBlack answers in kind: the king stays on the kingside, and Black's pawns (...b5–b4, sometimes ...a5–a4) storm White's king on the queenside. Module 2.4 shows the race."
    },
    {
      kind: 'walkthrough',
      title: 'Another road: 6.f3',
      intro: 'White can also play f3 first. Watch the position after 8.Be3.',
      moves: F3,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'Same starting point',
          text: '5...a6. This time White starts with the pawn move.',
          arrows: [['f2', 'f3', 'blue']]
        },
        11: {
          title: 'f3 first',
          text: '6.f3. White guards e4 and takes g4 away at once, before the bishop comes to e3. Now ...Ng4 would simply drop the knight for a pawn.',
          arrows: [['f3', 'g4', 'green'], ['f3', 'e4', 'green']]
        },
        12: {
          title: 'Black kicks the knight',
          text: '6...e5. The same ...e5 structure as before.',
          arrows: [['e5', 'd4', 'red']]
        },
        13: {
          title: 'Back to b3',
          text: '7.Nb3. The knight retreats. f3 is already taken by the pawn, so b3 is the natural square.',
          arrows: [['d4', 'b3', 'green']]
        },
        14: {
          title: 'Bishop to e6',
          text: '7...Be6. Black guards d5, as in the main line.',
          arrows: [['e6', 'd5', 'green']]
        },
        15: {
          title: 'The same position',
          text: "8.Be3. This is exactly the position after 6.Be3 e5 7.Nb3 Be6 8.f3. Different move order, same result. That is called a transposition.",
          arrows: [['e3', 'b6', 'green']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Learn the set-up, not just the moves',
      body:
        "Be3, f3, Qd2, O-O-O, then g4. White uses this set-up against ...e5 and against ...e6, and a very similar one against the Dragon (Chapter 3). If you play White, learn what each move is for, and you will know where your pieces go even when Black plays something new."
    },
    {
      kind: 'history',
      title: 'Why "English"?',
      body:
        'The English Attack is named after the English grandmasters, among them John Nunn, Nigel Short and Murray Chandler, who made it popular in the 1980s.'
    }
  ],
  takeaway:
    'The English Attack is Be3, f3, Qd2 and O-O-O, then g4. f3 keeps the black knight off g4 and backs up the g-pawn, and long castling lets White push the kingside pawns at Black\'s king.',
  lookAhead:
    'With the kings on opposite sides, both players attack with pawns. Module 2.4 shows the race: g4–g5 for White against ...b5–b4 for Black.',
  drills: [
    {
      title: 'Build the English Attack',
      prompt: "You're White. Black plays the ...e5 Najdorf. Set up the English Attack: bishop, knight retreat, pawn, queen, long castling.",
      moves: `${ENGLISH} e5 Nb3 Be6 f3 Be7 Qd2 O-O O-O-O`,
      start: 10,
      side: 'white',
      hints: [
        'Bishop to e3 first. When the knight is kicked, keep the f3-square free for a pawn.',
        'Then f3, Qd2 and castle long.'
      ],
      success: '6.Be3, 7.Nb3, 8.f3, 9.Qd2 and 10.O-O-O. The English Attack set-up is complete, and g4 is next.'
    },
    {
      title: 'The f3 move order',
      prompt: "You're White. Reach the same English Attack position, but start with the f-pawn.",
      moves: F3,
      start: 10,
      side: 'white',
      hints: ['Your first move takes the g4-square away from Black.', 'Knight back to b3, then bring the bishop to e3.'],
      success: '6.f3, 7.Nb3 and 8.Be3. Same position, and Black never had the chance to play ...Ng4.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Which of these is NOT a job of the move f3 in the English Attack?',
      choices: [
        { text: 'It opens the f-file for White\'s rook', correct: true, why: "Right, that is not its job. f3 doesn't open anything. It supports e4, takes g4 from Black's knight and backs up g4." },
        { text: 'It supports the e4-pawn', why: 'This is one of its jobs. The f3-pawn guards e4, so the c3-knight is free to move.' },
        { text: "It keeps Black's knight off g4", why: 'This is one of its jobs. Without f3, ...Ng4 could hit the e3-bishop.' },
        { text: 'It backs up the g-pawn when it goes to g4', why: 'This is one of its jobs. A pawn on g4 is protected by the f3-pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6.Be3 e5, why does White retreat the knight to b3 and not to f3?',
      moves: `${ENGLISH} e5`,
      orientation: 'white',
      choices: [
        { text: 'White wants to put a pawn on f3', correct: true, why: 'Yes. A knight on f3 would block the f-pawn, and f3 is a key move of the English Attack.' },
        { text: 'A knight on f3 would be pinned', why: "Nothing pins it right away. The real problem is that it would stand in the f-pawn's way." },
        { text: 'From b3 the knight attacks e5', why: 'A knight on b3 does not attack e5. The point is to keep f3 free for the pawn.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Which move order reaches the same position as 6.f3 e5 7.Nb3 Be6 8.Be3?',
      choices: [
        { text: '6.Be3 e5 7.Nb3 Be6 8.f3', correct: true, why: 'Right. Both orders reach the same position. This is a transposition.' },
        { text: '6.Be3 e5 7.Nf3 Be6 8.f3', why: 'That is not even possible: after 7.Nf3 the f-pawn cannot move to f3.' },
        { text: '6.Be2 e5 7.Nb3 Be6 8.f3', why: 'Here the bishop went to e2, not e3, so the position is different.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the English Attack, why does White castle long?',
      moves: `${ENGLISH} e5 Nb3 Be6 f3 Be7 Qd2 O-O`,
      orientation: 'white',
      choices: [
        { text: "So the g- and h-pawns can storm Black's king without exposing White's own", correct: true, why: 'Yes. With the king on c1, White can push g4–g5 freely. The rook also lands on d1, facing d6.' },
        { text: 'Because the king is always safer on the queenside', why: 'Not in general. Here White picks the queenside because the kingside pawns are about to advance.' },
        { text: 'To protect the e4-pawn', why: 'The king on c1 does nothing for e4. The f3-pawn and the c3-knight guard it.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: "After 10.O-O-O, which Black pawn do White's queen and rook line up against on the d-file?",
      moves: SETUP,
      orientation: 'white',
      choices: [
        { text: 'd6', correct: true, why: 'Right. The d6-pawn is backward, and the queen on d2 and the rook on d1 both point at it.' },
        { text: 'e5', why: 'The e5-pawn is on the e-file. The queen and rook are on the d-file.' },
        { text: 'b7', why: 'The b7-pawn is on the b-file, far from the queen and rook on the d-file.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which move clears the d1-square so that White can castle long?',
      moves: `${ENGLISH} e5 Nb3 Be6 f3 Be7`,
      orientation: 'white',
      choices: [
        { text: 'Qd2', correct: true, why: 'Yes. Be3 cleared c1 and the knight left b1 long ago. Qd2 clears d1 and also guards the e3-bishop.' },
        { text: 'g4', why: 'g4 is part of the attack, but it does nothing for castling. The queen must leave d1.' },
        { text: 'Nd5', why: 'The knight is not in the way. The d1-queen is.' }
      ]
    }
  ],
  key: { name: 'English Attack: 10.O-O-O Nbd7', moves: SETUP, orientation: 'white' },
  terms: [
    { term: 'English Attack', meaning: 'White\'s set-up Be3, f3, Qd2, O-O-O and g4 against the Najdorf (and the Scheveningen).' },
    { term: 'Opposite-side castling', meaning: 'One king castles short and the other long. Both sides can then attack the enemy king with pawns.' },
    { term: 'Transposition', meaning: 'Reaching the same position by a different order of moves.' }
  ]
})
