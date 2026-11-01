import { defineModule } from '../../../types'
import { ACCELERATED } from '../lines'

/** accel-d5: 5.Nc3 Bg7 6.Be3 Nf6 7.Be2 O-O 8.O-O d5 */
const D5 = `${ACCELERATED} Nc3 Bg7 Be3 Nf6 Be2 O-O O-O d5`
/** accel-dragon-main: 7.Bc4 O-O 8.Bb3 d6 9.f3 Bd7 10.Qd2 (a Yugoslav) Nxd4 11.Bxd4 b5 */
const MAIN = `${ACCELERATED} Nc3 Bg7 Be3 Nf6 Bc4 O-O Bb3 d6 f3 Bd7 Qd2 Nxd4 Bxd4 b5`
/** accel-reshevsky-trap: 8...Na5? 9.e5! Ne8? 10.Bxf7+ Kxf7 11.Ne6 dxe6 12.Qxd8 */
const TRAP = `${ACCELERATED} Nc3 Bg7 Be3 Nf6 Bc4 O-O Bb3 Na5 e5 Ne8 Bxf7+ Kxf7 Ne6 dxe6 Qxd8`

export default defineModule({
  id: '3.8',
  title: 'The Accelerated Dragon: ...g6 before ...d6',
  minutes: 12,
  level: 2,
  goals: [
    'See how skipping ...d6 lets Black play ...d5 in one move',
    'Know how White stops ...d5 with Bc4, and how the game can turn into a Yugoslav',
    'Learn the Fischer–Reshevsky trap: 8...Na5? 9.e5! Ne8? 10.Bxf7+'
  ],
  intro:
    "In the normal Dragon, Black plays ...d6 early, so the dream move ...d5 costs a second tempo. The Accelerated Dragon starts with 2...Nc6 and 4...g6 and leaves the d-pawn at home. Does that save time, and what does it cost?",
  sections: [
    {
      kind: 'walkthrough',
      title: '...d5 in one move',
      intro: 'White develops calmly with Be2 and castles kingside. Watch the d-pawn.',
      moves: D5,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'The Open Sicilian',
          text: '4.Nxd4. This is the Open Sicilian after 2...Nc6. Black\'s d-pawn has not moved yet.',
          marks: ['d7']
        },
        8: {
          title: 'The Accelerated Dragon',
          text: '4...g6. Black prepares ...Bg7 at once. The d-pawn stays on d7, so later it can jump to d5 in a single move.',
          arrows: [['f8', 'g7', 'green'], ['d7', 'd5', 'blue']]
        },
        9: {
          title: 'Knight to c3',
          text: '5.Nc3. White develops. Module 3.9 shows the other big choice, 5.c4.',
          marks: ['c3']
        },
        10: {
          title: 'An open diagonal',
          text: '5...Bg7. With no knight on f6 yet, the bishop already hits d4. The d4-knight is attacked twice and guarded only by the queen.',
          arrows: [['g7', 'd4', 'red'], ['c6', 'd4', 'red'], ['d1', 'd4', 'green']],
          marks: ['d4']
        },
        11: {
          title: 'Guarding d4',
          text: '6.Be3. White adds a second guard to the knight.',
          arrows: [['e3', 'd4', 'green']]
        },
        12: {
          title: 'Knight to f6',
          text: '6...Nf6. The knight develops and hits e4.',
          arrows: [['f6', 'e4', 'red']]
        },
        13: {
          title: 'A quiet bishop',
          text: '7.Be2. White develops calmly. Unlike a bishop on c4, a bishop on e2 does not cover d5.',
          marks: ['d5']
        },
        14: {
          title: 'Castle',
          text: '7...O-O. Black castles and gets ready.',
          marks: ['g8']
        },
        15: {
          title: 'White castles',
          text: '8.O-O. Both kings are safe. Now Black strikes.',
          marks: ['d5']
        },
        16: {
          title: 'One move to d5',
          text: '8...d5. The d-pawn goes straight to d5 and hits e4. In the normal Dragon this would take two moves. The engine calls the position level.',
          arrows: [['d5', 'e4', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'White stops ...d5: back to the Yugoslav',
      intro: 'White can aim the bishop at d5 with 7.Bc4. Then Black often goes back to a normal Dragon set-up.',
      moves: MAIN,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'The same start',
          text: '6...Nf6. The same position as before. This time White chooses a sharper bishop move.',
          marks: ['f1']
        },
        13: {
          title: 'The bishop covers d5',
          text: '7.Bc4. The bishop aims at f7 and covers d5, so the one-move ...d5 is off.',
          arrows: [['c4', 'd5', 'green'], ['c4', 'f7', 'red']]
        },
        14: {
          title: 'Black castles',
          text: '7...O-O. Now 8.O-O would allow the fork trick from Module 3.7: ...Nxe4 and ...d5.',
          marks: ['e4']
        },
        15: {
          title: 'Bishop to b3',
          text: '8.Bb3. The bishop steps back out of the fork trick\'s reach. It still aims at f7 and covers d5.',
          arrows: [['b3', 'f7', 'blue']]
        },
        16: {
          title: 'Back to a normal Dragon',
          text: '8...d6. With d5 covered, Black plays ...d6 after all.',
          marks: ['d6']
        },
        17: {
          title: 'The Yugoslav pawn',
          text: '9.f3. The pawn guards e4 and takes g4 away from the f6-knight, just like 7.f3 in Module 3.2.',
          arrows: [['f3', 'e4', 'green'], ['f3', 'g4', 'green']]
        },
        18: {
          title: 'Bishop to d7',
          text: '9...Bd7. Black develops the last minor piece.',
          arrows: [['c8', 'd7', 'green']]
        },
        19: {
          title: 'A Yugoslav after all',
          text: '10.Qd2. This is exactly the Yugoslav Attack position you get from the normal Dragon after 9.Bc4 Bd7 10.Bb3. The same plans apply (Modules 3.3 to 3.5).',
          arrows: [['d2', 'h6', 'red']]
        },
        20: {
          title: 'Trade on d4',
          text: '10...Nxd4. Black swaps knights.',
          marks: ['d4']
        },
        21: {
          title: 'Bishop meets bishop',
          text: '11.Bxd4. White\'s bishop faces the Dragon bishop, with the f6-knight between them.',
          arrows: [['d4', 'g7', 'yellow']]
        },
        22: {
          title: 'The b-pawn goes',
          text: '11...b5. Black starts queenside play at once, without first spending a move on ...Rc8. White is slightly better.',
          arrows: [['b5', 'b4', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The Fischer–Reshevsky trap',
      intro: 'Back to 8.Bb3. Black attacks the bishop with the knight. It looks natural, but count what the c6-knight was guarding.',
      moves: TRAP,
      start: 14,
      orientation: 'white',
      steps: {
        14: {
          title: 'The position',
          text: '7...O-O. White plays the usual 8.Bb3.',
          marks: ['c4']
        },
        15: {
          title: 'Bishop to b3',
          text: '8.Bb3. The bishop is safe from the fork trick.',
          arrows: [['b3', 'f7', 'blue']]
        },
        16: {
          title: 'The first mistake',
          text: '8...Na5. The knight attacks the b3-bishop. But it has left c6, where it was guarding e5.',
          arrows: [['a5', 'b3', 'red']],
          marks: ['e5'],
          ann: '?'
        },
        17: {
          title: 'The pawn kicks',
          text: '9.e5. The pawn hits the f6-knight. White is already clearly better. Black\'s best is 9...Nxb3, giving up the knight for the bishop.',
          arrows: [['e5', 'f6', 'red']],
          ann: '!'
        },
        18: {
          title: 'The second mistake',
          text: "9...Ne8. The knight steps back, but now look at Black's queen. Its own pieces sit on a5, d7 and e8.",
          marks: ['a5', 'd7', 'e8'],
          ann: '?'
        },
        19: {
          title: 'The sacrifice',
          text: '10.Bxf7+. The bishop gives itself up to pull Black\'s king to f7.',
          arrows: [['b3', 'f7', 'red']],
          ann: '!'
        },
        20: {
          title: 'King takes',
          text: '10...Kxf7. Taking with the rook instead, 10...Rxf7, loses just as badly after 11.Ne6.',
          marks: ['f7']
        },
        21: {
          title: 'The queen is trapped',
          text: '11.Ne6. The knight hits the queen. It can only go to c7, which the knight covers, or b6, which the e3-bishop covers.',
          arrows: [['e6', 'd8', 'red'], ['e6', 'c7', 'red'], ['e3', 'b6', 'red']],
          ann: '!'
        },
        22: {
          title: 'Take the knight',
          text: '11...dxe6. Taking the knight is Black\'s best try. But it opens the d-file.',
          arrows: [['d1', 'd8', 'red']]
        },
        23: {
          title: 'The queen falls',
          text: '12.Qxd8. White wins the queen for a bishop and a knight, and Black is lost. Fischer–Reshevsky, US Championship 1958/59, reached this exact position, and Fischer won.',
          marks: ['d8']
        }
      }
    },
    {
      kind: 'warning',
      title: 'Not just "10.Bxf7+"',
      body:
        'People often call this "the Bxf7+ trap", but Black made two mistakes first. 8...Na5? left e5 unguarded and let White play 9.e5! with a clear advantage. Then 9...Ne8? boxed in Black\'s own queen. 10.Bxf7+ only works because of both.'
    }
  ],
  takeaway:
    "The Accelerated Dragon keeps the d-pawn home so that ...d5 takes one move. White stops it with Bc4, and the game often turns into a Yugoslav. After 8.Bb3, avoid 8...Na5?: 9.e5! and, after 9...Ne8?, 10.Bxf7+ wins the queen.",
  lookAhead:
    "The price of the Accelerated Dragon is 5.c4, the Maróczy Bind. Module 3.9 shows how Black fights it.",
  drills: [
    {
      title: 'Play the Accelerated Dragon',
      prompt: "You're Black. White has just taken on d4. Play the Accelerated Dragon, and when White castles, strike in the center in one move.",
      moves: D5,
      start: 7,
      side: 'black',
      hints: [
        'Make room for the bishop on g7 first. Leave the d-pawn alone.',
        'Bishop to g7, knight to f6, castle, and then the d-pawn goes two squares.'
      ],
      success: '4...g6, 5...Bg7, 6...Nf6, 7...O-O and 8...d5. One move to d5, and the game is level.'
    },
    {
      title: 'Spring the trap',
      prompt: "You're White. Black has just played 8...Na5?, attacking your bishop. Punish it.",
      moves: TRAP,
      start: 16,
      side: 'white',
      hints: [
        'The c6-knight no longer guards e5. Push a pawn there and hit the f6-knight.',
        'After ...Ne8, look at f7 and then at e6. Black\'s queen has very few squares.'
      ],
      success: '9.e5!, 10.Bxf7+, 11.Ne6 and 12.Qxd8. The queen was trapped by its own pieces.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does Black play ...g6 before ...d6 in the Accelerated Dragon?',
      choices: [
        { text: 'So the d-pawn can reach d5 in one move later', correct: true, why: 'Right. Saving the move ...d6 means ...d5 costs only one tempo.' },
        { text: "To stop White's c2–c4", why: "It doesn't stop it. In fact, without ...Nf6 hitting e4, White can play 5.c4 at once (Module 3.9)." },
        { text: 'To prepare ...e5', why: 'The point is ...d5, not ...e5. The g7-bishop and the d-pawn work together.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'White to move. Why must White take care of the d4-knight right now?',
      moves: `${ACCELERATED} Nc3 Bg7`,
      orientation: 'white',
      choices: [
        { text: 'The g7-bishop and the c6-knight both attack it, and only the queen guards it', correct: true, why: 'Yes. With f6 still empty, the long diagonal is open. 6.Be3 adds a guard.' },
        { text: 'The c6-knight is about to fork the king and queen', why: 'There is no fork. The problem is that d4 is attacked twice and guarded once.' },
        { text: 'Black threatens ...e5, trapping the knight', why: 'The knight would have retreats. The real issue is the count on d4 right now.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move. Black has just played 8...Na5. What is the strongest move?',
      moves: TRAP.split(' ').slice(0, 16).join(' '),
      orientation: 'white',
      choices: [
        { text: '9.e5', correct: true, why: 'Right. With the c6-knight gone, e5 is free. The f6-knight is hit, and White is clearly better.' },
        { text: '9.f3', why: 'A sound move, but it misses the chance. 9.e5! gives a much bigger advantage.' },
        { text: '9.Qe2', why: 'It does nothing about the attacked bishop, and the game is level. The pawn push is far stronger.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 10.Bxf7+ Kxf7 11.Ne6, why is Black\'s queen lost?',
      moves: TRAP.split(' ').slice(0, 21).join(' '),
      orientation: 'black',
      choices: [
        { text: "It has no safe square: Black's own pieces block a5, d7 and e8", correct: true, why: 'Exactly. The knight covers c7 and the e3-bishop covers b6. The queen is trapped.' },
        { text: 'It is pinned to the king', why: 'Nothing pins the queen. It is simply out of squares.' },
        { text: "White's d1-queen attacks it down the d-file", why: "Black's d7-pawn still blocks the d-file. The queen is lost because it has no safe square." }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'After 7.Bc4 O-O 8.Bb3 d6 9.f3 Bd7 10.Qd2 in the Accelerated Dragon, what kind of position has arisen?',
      moves: MAIN.split(' ').slice(0, 19).join(' '),
      orientation: 'white',
      choices: [
        { text: 'A Yugoslav Attack, the same as from the normal Dragon', correct: true, why: 'Right. The move orders meet in the same position, so the Yugoslav plans apply.' },
        { text: 'A Maróczy Bind', why: 'The Maróczy Bind needs White pawns on c4 and e4. Here White has played Nc3 and Bc4.' },
        { text: 'A Classical Dragon', why: 'The Classical Dragon has White castling kingside with Be2. Here White has f3 and Qd2.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which White set-up is the main price Black pays for the Accelerated Dragon?',
      choices: [
        { text: 'The Maróczy Bind with 5.c4', correct: true, why: 'Yes. With no ...Nf6 hitting e4 yet, White can put pawns on c4 and e4 to stop ...d5.' },
        { text: 'The Levenfish Attack with f4', why: 'That is a sideline of the normal Dragon (Module 3.7).' },
        { text: 'The Smith–Morra Gambit', why: 'That comes much earlier, with 2.d4 cxd4 3.c3. It is not linked to ...g6.' }
      ]
    }
  ],
  key: { name: 'Accelerated Dragon: ...d5 in one move (8...d5)', moves: D5, orientation: 'black' },
  terms: [
    { term: 'Move order', meaning: 'The order in which you play your moves. A different order can avoid some lines or allow others.' },
    { term: 'Transposition', meaning: 'Reaching the same position by a different move order, like the Accelerated Dragon turning into a Yugoslav Attack.' },
    { term: 'Trapped piece', meaning: 'A piece that is attacked and has no safe square to go to.' }
  ]
})
