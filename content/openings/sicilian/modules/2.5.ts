import { defineModule } from '../../../types'
import { DRAGON, ENGLISH } from '../lines'

/** najdorf-be3-ng4: 6...Ng4 7.Bg5 h6 8.Bh4 g5 9.Bg3 Bg7 10.Be2 h5 11.Bxg4 Bxg4 12.f3 Be6 */
const CHASE = `${ENGLISH} Ng4 Bg5 h6 Bh4 g5 Bg3 Bg7 Be2 h5 Bxg4 Bxg4 f3 Be6`
/** najdorf-be3-ng4-bc1: 7.Bc1 Nf6 8.Be3 Ng4 */
const REPEAT = `${ENGLISH} Ng4 Bc1 Nf6 Be3 Ng4`
/** dragon-6be3-ng4-trap: 6.Be3 Ng4? 7.Bb5+! Nc6 8.Nxc6 bxc6 9.Bxc6+ Bd7 10.Bxa8 Nxe3 11.fxe3 Qxa8 */
const DRAGON_TRAP = `${DRAGON} Be3 Ng4 Bb5+ Nc6 Nxc6 bxc6 Bxc6+ Bd7 Bxa8 Nxe3 fxe3 Qxa8`

export default defineModule({
  id: '2.5',
  title: '6...Ng4: chasing the e3-bishop',
  minutes: 11,
  level: 2,
  goals: [
    'See why 6...Ng4 works before White has played f3',
    'Learn how Black gains space and the bishop pair with ...h6 and ...g5',
    'Understand why the same idea fails in the Dragon, where ...a6 is missing'
  ],
  intro:
    "In Module 2.3 you saw that f3 keeps Black's knight off g4. So what if White plays 6.Be3 before f3? Black can jump in at once with 6...Ng4 and chase the bishop. This module shows that idea, the quiet repetition White can choose instead, and why ...a6 is what makes it all possible.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Chasing the bishop',
      intro: "Follow White's dark-squared bishop. It moves four times in a row.",
      moves: CHASE,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'No f3 yet',
          text: "6.Be3. White plans f3 next, but right now the g4-square is free for Black's knight.",
          marks: ['g4']
        },
        12: {
          title: 'The knight jumps',
          text: '6...Ng4. The knight attacks the e3-bishop. If White leaves it there, ...Nxe3 wins the bishop pair.',
          arrows: [['g4', 'e3', 'red']]
        },
        13: {
          title: 'The bishop stays active',
          text: '7.Bg5. White keeps the bishop on an active square instead of going back home. It eyes the e7-pawn.',
          arrows: [['g5', 'e7', 'blue']]
        },
        14: {
          title: 'Kick it again',
          text: '7...h6. The h-pawn attacks the bishop. Black is happy to gain time.',
          arrows: [['h6', 'g5', 'red']]
        },
        15: {
          title: 'Back to h4',
          text: '8.Bh4. The bishop keeps an eye on the d8–h4 diagonal.',
          arrows: [['h4', 'e7', 'blue']]
        },
        16: {
          title: 'And again',
          text: '8...g5. A third kick. Black also grabs space on the kingside.',
          arrows: [['g5', 'h4', 'red']]
        },
        17: {
          title: 'The bishop lands on g3',
          text: '9.Bg3. The bishop has moved three times since 6.Be3. Meanwhile Black has pushed two pawns forward with tempo.'
        },
        18: {
          title: 'The long diagonal',
          text: '9...Bg7. The bishop develops and hits the d4-knight along the long diagonal.',
          arrows: [['g7', 'd4', 'red']]
        },
        19: {
          title: 'White hits the knight',
          text: '10.Be2. White develops and challenges the g4-knight. Right now only the c8-bishop guards it.',
          arrows: [['e2', 'g4', 'red']],
          marks: ['g4']
        },
        20: {
          title: 'The h-pawn guards',
          text: '10...h5. The h-pawn protects the knight. Black keeps it on g4.',
          arrows: [['h5', 'g4', 'green']]
        },
        21: {
          title: 'White trades',
          text: '11.Bxg4. White gives up the light-squared bishop for the knight.',
          marks: ['g4']
        },
        22: {
          title: 'The bishop pair',
          text: '11...Bxg4. Black takes back with the bishop, which now hits the d1-queen. Black has both bishops, and White has a bishop and two knights.',
          arrows: [['g4', 'd1', 'red']]
        },
        23: {
          title: 'f3 at last',
          text: '12.f3. White kicks the bishop and supports e4.',
          arrows: [['f3', 'g4', 'red'], ['f3', 'e4', 'green']]
        },
        24: {
          title: 'A balanced fight',
          text: "12...Be6. Black has the bishop pair and more kingside space. White's pieces are well placed, and Black's advanced g- and h-pawns need care. The engine calls it level."
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The quiet way: 7.Bc1',
      intro: 'White can also just send the bishop home. Watch what happens to the position.',
      moves: REPEAT,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'The Najdorf',
          text: '5...a6. White goes for the English Attack set-up.',
          arrows: [['c1', 'e3', 'blue']]
        },
        11: {
          title: 'Bishop to e3',
          text: '6.Be3. The bishop develops, but g4 is open.',
          marks: ['g4']
        },
        12: {
          title: 'The knight jumps',
          text: '6...Ng4. The bishop is attacked.',
          arrows: [['g4', 'e3', 'red']]
        },
        13: {
          title: 'Back home',
          text: '7.Bc1. The bishop goes back to c1. White is not afraid of losing time, because the knight on g4 is not doing much either.',
          arrows: [['e3', 'c1', 'blue']]
        },
        14: {
          title: 'The knight goes back too',
          text: '7...Nf6. The knight returns to f6. This is the position after 5...a6 again.',
          arrows: [['g4', 'f6', 'blue']]
        },
        15: {
          title: 'Try again',
          text: '8.Be3. White plays the bishop to e3 once more.',
          arrows: [['c1', 'e3', 'blue']]
        },
        16: {
          title: 'A repetition',
          text: '8...Ng4. Same position for the second time. If both sides keep going, it appears a third time and the game is a draw by repetition. To play for a win, White must choose 7.Bg5 or play f3 before Be3.',
          arrows: [['g4', 'e3', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'How White avoids ...Ng4',
      body:
        "If White wants the English Attack and no ...Ng4 at all, the simplest way is to play **f3 first**: 6.f3 e5 7.Nb3 Be6 8.Be3 reaches the normal English Attack position (Module 2.3). With a pawn on f3, ...Ng4 just drops the knight.\n\nWhy is ...Ng4 even possible in the Najdorf? Because White's usual trick against it does not work here. The next walkthrough shows that trick in the Dragon, where Black has not played ...a6."
    },
    {
      kind: 'walkthrough',
      title: 'Why ...a6 matters: the Dragon trap',
      intro: 'This is the Dragon (5...g6), not the Najdorf. Black has no pawn on a6. Look at the b5-square.',
      moves: DRAGON_TRAP,
      start: 11,
      orientation: 'white',
      steps: {
        11: {
          title: 'A different opening',
          text: '6.Be3 in the Dragon. Black played 5...g6, not 5...a6, so nothing guards b5.',
          marks: ['b5']
        },
        12: {
          title: 'The same jump',
          text: '6...Ng4. Black copies the Najdorf idea. The knight is guarded only by the c8-bishop, and White\'s queen already attacks it.',
          arrows: [['g4', 'e3', 'red'], ['d1', 'g4', 'red'], ['c8', 'g4', 'green']],
          ann: '?'
        },
        13: {
          title: 'Check from b5',
          text: "7.Bb5+. Black must block the check. If 7...Bd7, the bishop is pinned to the king and can't take back on g4, so 8.Qxg4 wins the knight. 7...Nd7 is no better: it cuts the c8-bishop off from g4.",
          arrows: [['b5', 'e8', 'red']],
          ann: '!'
        },
        14: {
          title: 'Blocking with the knight',
          text: '7...Nc6. The best try. Now the c8-bishop still guards g4. But the c6-knight is pinned to the king.',
          arrows: [['b5', 'c6', 'red']]
        },
        15: {
          title: 'Take the blocker',
          text: '8.Nxc6. White takes the pinned knight.',
          marks: ['c6']
        },
        16: {
          title: 'Forced recapture',
          text: '8...bxc6. Black takes back. Now the b7-square is empty, and the line from c6 to a8 is open.',
          arrows: [['c6', 'a8', 'blue']]
        },
        17: {
          title: 'Check and attack',
          text: '9.Bxc6+. The bishop takes a pawn with check and also attacks the a8-rook.',
          arrows: [['c6', 'e8', 'red'], ['c6', 'a8', 'red']]
        },
        18: {
          title: 'Block again',
          text: '9...Bd7. Black has to deal with the check first.',
          arrows: [['d7', 'c6', 'blue']]
        },
        19: {
          title: 'The rook falls',
          text: '10.Bxa8. White wins the rook.',
          marks: ['a8']
        },
        20: {
          title: 'Black grabs a bishop',
          text: '10...Nxe3. Black takes the e3-bishop to get something back.',
          marks: ['e3']
        },
        21: {
          title: 'Take back',
          text: '11.fxe3. White recaptures.',
          marks: ['e3']
        },
        22: {
          title: 'The final count',
          text: '11...Qxa8. Black takes the bishop on a8. White has won a rook and a pawn for a bishop: the exchange and a pawn. White is much better.',
          marks: ['a8']
        }
      }
    },
    {
      kind: 'tip',
      title: 'One pawn, two openings',
      body:
        'In the Najdorf, 7.Bb5+ fails because the a6-pawn would just take the bishop. That is job one of 5...a6 (Module 2.1) paying off. In the Dragon, the same jump is a mistake. Chapter 3 shows how White meets the Dragon instead.'
    }
  ],
  takeaway:
    "Before f3, 6...Ng4 chases the e3-bishop. After 7.Bg5 h6 8.Bh4 g5 Black gains space and later the bishop pair; 7.Bc1 Nf6 8.Be3 invites a draw by repetition. It only works because ...a6 stops 7.Bb5+.",
  lookAhead:
    "Next: White's most classical attack against the Najdorf, 6.Bg5 e6 7.f4. Module 2.6 explains the pin on f6 and Black's set-up.",
  drills: [
    {
      title: 'Chase the bishop',
      prompt: "You're Black. White played 6.Be3 without f3. Jump at the bishop, then keep kicking it with your pawns, and finish by developing your dark-squared bishop.",
      moves: `${ENGLISH} Ng4 Bg5 h6 Bh4 g5 Bg3 Bg7`,
      start: 11,
      side: 'black',
      hints: ['Which knight move attacks the e3-bishop?', 'Use the h-pawn and then the g-pawn to kick the bishop. Then put your bishop on the long diagonal.'],
      success: '6...Ng4, 7...h6, 8...g5 and 9...Bg7. Black has gained time and space, and the g7-bishop hits d4.'
    },
    {
      title: 'Spring the Dragon trap',
      prompt: "You're White, in the Dragon. Black just played 6...Ng4?. Win material.",
      moves: `${DRAGON} Be3 Ng4 Bb5+ Nc6 Nxc6 bxc6 Bxc6+ Bd7 Bxa8`,
      start: 12,
      side: 'white',
      hints: ['Black has no pawn on a6. Which check does that allow?', 'After ...Nc6, take the pinned knight, then check again on c6 and look at the a8-rook.'],
      success: '7.Bb5+ Nc6 8.Nxc6 bxc6 9.Bxc6+ Bd7 10.Bxa8. White wins the exchange and a pawn.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 6.Be3, which White piece does 6...Ng4 attack?',
      moves: `${ENGLISH} Ng4`,
      orientation: 'black',
      choices: [
        { text: 'The e3-bishop', correct: true, why: 'Right. If White ignores it, ...Nxe3 wins the bishop pair.' },
        { text: 'The d4-knight', why: 'A knight on g4 reaches e3, e5, f2, f6, h2 and h6. It does not touch d4.' },
        { text: 'The e4-pawn', why: 'A knight on g4 does not attack e4. Its target is the bishop on e3.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why can\'t White answer 6...Ng4 with 7.Bb5+ in the Najdorf?',
      moves: `${ENGLISH} Ng4`,
      orientation: 'white',
      choices: [
        { text: 'The a6-pawn guards b5', correct: true, why: 'Yes. The bishop would simply be taken. This is exactly what 5...a6 was for.' },
        { text: 'The f1-bishop cannot reach b5', why: 'The diagonal f1–b5 is open. The problem is the a6-pawn waiting to take the bishop.' },
        { text: 'A check on b5 is never useful', why: 'In the Dragon the same check wins material. Here it fails only because of ...a6.' }
      ]
    },
    {
      type: 'order',
      prompt: 'White wants the English Attack but does not want to allow ...Ng4. Which move order does that?',
      choices: [
        { text: 'Play 6.f3 first, then Be3', correct: true, why: 'Right. After 6.f3 e5 7.Nb3 Be6 8.Be3, the pawn on f3 already covers g4.' },
        { text: 'Play 6.Be3 and then 7.Qd2', why: 'After 6.Be3, Black can play 6...Ng4 at once. Qd2 comes too late.' },
        { text: 'Castle long first', why: 'White cannot castle long until the bishop and queen have moved. f3 is what stops ...Ng4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 10.Be2 h5 11.Bxg4 Bxg4, what has Black gained?',
      moves: `${ENGLISH} Ng4 Bg5 h6 Bh4 g5 Bg3 Bg7 Be2 h5 Bxg4 Bxg4`,
      orientation: 'black',
      choices: [
        { text: 'The bishop pair and space on the kingside', correct: true, why: 'Yes. White traded a bishop for the g4-knight, and the g- and h-pawns have gained ground. The position is level.' },
        { text: 'A whole extra piece', why: 'Material is level: White took a knight, and Black took a bishop back.' },
        { text: 'A safe king on g8', why: "Black hasn't castled, and the g- and h-pawns have moved, so castling short is less attractive. The gains are the bishops and space." }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'This is the Dragon, not the Najdorf. Black just played 6...Ng4?. What is White\'s best move?',
      moves: `${DRAGON} Be3 Ng4`,
      orientation: 'white',
      choices: [
        { text: '7.Bb5+', correct: true, why: 'Right. With no pawn on a6, the check works. After 7...Nc6 8.Nxc6 bxc6 9.Bxc6+ Bd7 10.Bxa8 White wins the exchange and a pawn.' },
        { text: '7.Qxg4', why: 'The c8-bishop guards g4, so 7...Bxg4 would win the queen. The check on b5 comes first.' },
        { text: '7.Bg5', why: 'A normal move, but it lets Black off the hook. 7.Bb5+ wins material.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6.Be3 Ng4 7.Bc1 Nf6 8.Be3 Ng4, what happens if both sides keep repeating these moves?',
      moves: REPEAT,
      orientation: 'white',
      choices: [
        { text: 'The game is drawn by repetition', correct: true, why: 'Yes. When the same position appears three times, the game is a draw. White avoids it with 7.Bg5 or by playing f3 first.' },
        { text: 'White wins, because Black ran out of moves', why: 'Black always has moves. Repeating the same position three times makes the game a draw.' },
        { text: 'Nothing: the game just goes on', why: 'Chess has a rule for this. The third repetition of a position is a draw.' }
      ]
    }
  ],
  key: { name: 'English Attack: 6...Ng4', moves: `${ENGLISH} Ng4`, orientation: 'black' },
  terms: [
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one off. They work well together in open positions.' },
    { term: 'Draw by repetition', meaning: 'If the same position appears three times with the same player to move, the game can be claimed as a draw.' },
    { term: 'Pin', meaning: 'A piece cannot move (or should not) because a more valuable piece, often the king, stands behind it.' }
  ]
})
