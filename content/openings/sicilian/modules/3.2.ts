import { defineModule } from '../../../types'
import { DRAGON } from '../lines'

/** dragon-6be3-ng4-trap: 6.Be3 Ng4? 7.Bb5+! */
const TRAP = `${DRAGON} Be3 Ng4 Bb5+ Nc6 Nxc6 bxc6 Bxc6+ Bd7 Bxa8 Nxe3 fxe3 Qxa8`
/** dragon-7qd2-ng4: 7.Qd2 Ng4 8.Bg5 h6 9.Bh4 (White keeps a small edge) */
const QD2 = `${DRAGON} Be3 Bg7 Qd2 Ng4 Bg5 h6 Bh4 Nc6 Nb3 Be6 f3 Nge5`
/** 7.f3: the cleanest way to stop ...Ng4 */
const F3 = `${DRAGON} Be3 Bg7 f3`

export default defineModule({
  id: '3.2',
  title: 'Why 7.f3? The ...Ng4 question',
  minutes: 10,
  level: 2,
  goals: [
    'Punish 6...Ng4? with the check 7.Bb5+!',
    'See what ...Ng4 does after 6...Bg7 7.Qd2, and how White keeps an edge',
    'Know the three jobs of 7.f3'
  ],
  intro:
    "In the Yugoslav Attack, White plays the slow-looking 7.f3 before Qd2. Why spend a move on a pawn? The answer is a knight jump to g4, which hits the e3-bishop. This module shows when ...Ng4 is a mistake, when it is a good idea, and how 7.f3 takes it away.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Too early: 6...Ng4? 7.Bb5+!',
      intro: 'Black jumps to g4 before playing ...Bg7. Count the defenders of the g4-knight.',
      moves: TRAP,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'The Dragon',
          text: '5...g6. Black heads for the Dragon. White answers with the usual bishop move.',
          marks: ['e3']
        },
        11: {
          title: 'The bishop on e3',
          text: '6.Be3. The bishop guards d4. But on e3 it can be hit by a knight jumping to g4.',
          arrows: [['f6', 'g4', 'blue']]
        },
        12: {
          title: 'The knight jumps',
          text: "6...Ng4. The knight attacks the e3-bishop. White's queen already hits g4, but the c8-bishop guards the knight. And with no pawn on a6, the b5-square is open.",
          arrows: [['g4', 'e3', 'red'], ['d1', 'g4', 'red'], ['c8', 'g4', 'green']],
          marks: ['b5'],
          ann: '?'
        },
        13: {
          title: 'Check!',
          text: "7.Bb5+. Black's king can't step aside, so Black must block on c6 or d7. A knight on d7 cuts the c8-bishop off from g4. A bishop on d7 is pinned to the king and can't take back on g4. Either way, Qxg4 wins the knight.",
          arrows: [['b5', 'e8', 'red'], ['c8', 'g4', 'yellow']],
          marks: ['g4'],
          ann: '!'
        },
        14: {
          title: 'The best block',
          text: "7...Nc6. This keeps the c8-bishop's line to g4 open. But now the c6-knight is attacked twice and only the b7-pawn guards it.",
          arrows: [['d4', 'c6', 'red'], ['b5', 'c6', 'red']]
        },
        15: {
          title: 'Knight takes knight',
          text: '8.Nxc6. White removes the blocker. Black has only one way to take back.',
          marks: ['c6']
        },
        16: {
          title: 'Pawn takes back',
          text: '8...bxc6. The pawn recaptures. The bishop can now take on c6, and from there it would check the king and hit the a8-rook at the same time.',
          arrows: [['b5', 'c6', 'red']]
        },
        17: {
          title: 'A fork',
          text: '9.Bxc6+. The bishop takes a pawn with check and also attacks the a8-rook. Black must answer the check first.',
          arrows: [['c6', 'e8', 'red'], ['c6', 'a8', 'red']]
        },
        18: {
          title: 'Block again',
          text: '9...Bd7. Black blocks the check. The rook in the corner is lost.',
          marks: ['a8']
        },
        19: {
          title: 'The rook falls',
          text: '10.Bxa8. White wins a rook.',
          ann: '!'
        },
        20: {
          title: 'Something back',
          text: '10...Nxe3. Black takes the e3-bishop. Black gets one piece back, but not enough.',
          marks: ['e3']
        },
        21: {
          title: 'Pawn takes',
          text: '11.fxe3. White takes the knight. The e-pawns are doubled, but that is a small price.',
          marks: ['e3', 'e4']
        },
        22: {
          title: 'The final count',
          text: '11...Qxa8. Black wins the bishop on a8. Count it up: White has a rook for a bishop (the exchange) and an extra pawn. White is much better.'
        }
      }
    },
    {
      kind: 'tip',
      title: 'Why the Najdorf can play ...Ng4',
      body:
        "In the Najdorf, 5...a6 6.Be3 Ng4 is a good move (Module 2.5), because the a6-pawn covers b5 and there is no check. In the Dragon, Black skipped ...a6, so b5 is open. Before you jump to g4, ask: can White check me on b5?"
    },
    {
      kind: 'walkthrough',
      title: 'After 6...Bg7: 7.Qd2 Ng4',
      intro: 'Now Black plays the normal 6...Bg7 first, and White skips f3. This time ...Ng4 is a good idea, but it does not refute White either.',
      moves: QD2,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'The bishop first',
          text: '6...Bg7. Black develops first. Now ...Ng4 is a real idea, because the f6-knight is free to jump.',
          arrows: [['f6', 'g4', 'blue']]
        },
        13: {
          title: 'Qd2 before f3',
          text: '7.Qd2. A natural move, but g4 is still open for Black\'s knight. The queen has left d1, so Bb5+ tricks no longer hit g4.',
          arrows: [['f6', 'g4', 'blue']]
        },
        14: {
          title: 'The knight jumps',
          text: "7...Ng4. The knight attacks the e3-bishop, and nothing White has attacks g4. With f6 empty, the g7-bishop now sees all the way to d4.",
          arrows: [['g4', 'e3', 'red'], ['g7', 'd4', 'red']],
          ann: '!'
        },
        15: {
          title: 'The bishop runs',
          text: '8.Bg5. The bishop keeps its diagonal toward h6 and stays out of the knight\'s reach.',
          arrows: [['e3', 'g5', 'blue']]
        },
        16: {
          title: 'Chase it again',
          text: '8...h6. Black kicks the bishop once more. It has only one good square.',
          arrows: [['h6', 'g5', 'red']]
        },
        17: {
          title: 'Off to h4',
          text: '9.Bh4. The bishop goes to h4. On e3 it could be swapped off by ...Nxe3, giving Black the two bishops, and on f4 it would be hit by ...e5.',
          arrows: [['g5', 'h4', 'green']]
        },
        18: {
          title: 'Pressure on d4',
          text: '9...Nc6. Now count d4: the c6-knight and the g7-bishop attack it, and only the queen guards it. White must do something.',
          arrows: [['c6', 'd4', 'red'], ['g7', 'd4', 'red'], ['d2', 'd4', 'green']],
          marks: ['d4']
        },
        19: {
          title: 'The knight retreats',
          text: '10.Nb3. The knight steps back out of the line of fire.',
          arrows: [['d4', 'b3', 'green']]
        },
        20: {
          title: 'Develop',
          text: '10...Be6. Black develops the last minor piece.',
          arrows: [['c8', 'e6', 'green']]
        },
        21: {
          title: 'At last, f3',
          text: '11.f3. Now White kicks the knight from g4. White has spent extra moves on the dark-squared bishop.',
          arrows: [['f3', 'g4', 'red']]
        },
        22: {
          title: 'A central knight',
          text: '11...Nge5. The knight finds a fine square in the center. Black has used ...Ng4 well, but White is still slightly better. 7.Qd2 is not a mistake, just less clean than 7.f3.',
          marks: ['e5']
        }
      }
    },
    {
      kind: 'text',
      title: 'The three jobs of 7.f3',
      body:
        "After 6...Bg7, the cleanest move is **7.f3**. It does three things:\n\n1. It takes g4 away from the f6-knight, so the e3-bishop can stay where it is.\n2. It guards the e4-pawn, so White doesn't need the c3-knight for that job.\n3. It prepares g2–g4, a pawn storm against Black's king later on.\n\nOnly then does White play Qd2 and castle long. Some players also use the order 6.f3 first, which does the same job."
    },
    {
      kind: 'warning',
      title: 'Not a refutation',
      body:
        'You may read that ...Ng4 tricks refute White\'s Qd2. They don\'t. After 7.Qd2 Ng4 8.Bg5, White keeps a small edge. The famous trap goes the other way: 6.Be3 Ng4? 7.Bb5+! wins material for White.'
    }
  ],
  takeaway:
    'Before ...Bg7, 6...Ng4? loses material to 7.Bb5+!. After 6...Bg7, ...Ng4 is a real idea against 7.Qd2, though White stays slightly better. 7.f3 takes g4 away, guards e4 and prepares g4.',
  lookAhead:
    'With f3 and Qd2 in place, White usually plays 9.Bc4 and castles long. Module 3.3 shows the race that follows.',
  drills: [
    {
      title: 'Punish the early jump',
      prompt: "You're White. Black just played 6...Ng4?, attacking your bishop. Win material.",
      moves: `${DRAGON} Be3 Ng4 Bb5+ Nc6 Nxc6 bxc6 Bxc6+ Bd7 Bxa8`,
      start: 12,
      side: 'white',
      hints: [
        'Black has not played ...a6. Which square can your light-squared bishop use with check?',
        'Give check on b5. If Black blocks on c6, take that knight, then take on c6 again with check.'
      ],
      success: '7.Bb5+!, 8.Nxc6, 9.Bxc6+ and 10.Bxa8. White wins the exchange and a pawn.'
    },
    {
      title: 'Find the safe square',
      prompt: "You're White. Black's knight chased your bishop to g5, and then 8...h6 hit it again. Save the bishop, then deal with the pressure on d4.",
      moves: `${DRAGON} Be3 Bg7 Qd2 Ng4 Bg5 h6 Bh4 Nc6 Nb3`,
      start: 16,
      side: 'white',
      hints: [
        'On e3 the bishop can be taken by the knight. On f4 it runs into ...e5.',
        'After ...Nc6, d4 is attacked twice and defended once. Move the knight back.'
      ],
      success: '9.Bh4 and 10.Nb3. The bishop stays on its diagonal and the knight leaves the line of fire.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'White to move. Black has just played 6...Ng4. What is the strongest move?',
      moves: `${DRAGON} Be3 Ng4`,
      orientation: 'white',
      choices: [
        { text: '7.Bb5+', correct: true, why: 'Right. Every block costs Black material: ...Bd7 or ...Nd7 lets 8.Qxg4 win the knight, and ...Nc6 loses the a8-rook after Nxc6 and Bxc6+.' },
        { text: '7.Qxg4', why: 'The c8-bishop guards g4. After 7...Bxg4 White has lost the queen for a knight.' },
        { text: '7.Bg5', why: 'It saves the bishop and keeps a small edge, but it misses the check on b5 that wins material.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6.Be3 Ng4 7.Bb5+, why is 7...Bd7 a bad way to block the check?',
      moves: `${DRAGON} Be3 Ng4 Bb5+`,
      orientation: 'black',
      choices: [
        { text: 'The bishop on d7 is pinned to the king, so 8.Qxg4 wins the knight', correct: true, why: 'Yes. From d7 the bishop still looks at g4, but it cannot leave the line between b5 and e8. So it cannot take back, and White is a piece up.' },
        { text: 'White plays 8.Bxd7+ and wins the queen', why: 'After 8.Bxd7+ Black just takes back and nothing is lost there. The real point is that the pinned bishop cannot guard g4.' },
        { text: '7...Bd7 is illegal', why: '7...Bd7 is legal: it blocks the check. But on d7 the bishop is pinned, so it can no longer defend the g4-knight.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Where should the bishop go?',
      moves: `${DRAGON} Be3 Bg7 Qd2 Ng4 Bg5 h6`,
      orientation: 'white',
      choices: [
        { text: '9.Bh4', correct: true, why: 'Right. The bishop keeps an eye on the kingside and stays safe. White is still slightly better.' },
        { text: '9.Be3', why: 'Back to e3, where 9...Nxe3 10.Qxe3 gives Black the two bishops. Black would be the one with the better game.' },
        { text: '9.Bf4', why: '9...e5! attacks the bishop and the d4-knight at the same time, and White loses material.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which of these is NOT one of the jobs of 7.f3 in the Yugoslav Attack?',
      moves: `${DRAGON} Be3 Bg7 f3`,
      orientation: 'white',
      choices: [
        { text: 'Opening the f-file for the f1-rook', correct: true, why: 'Right, that is not its job. The pawn on f3 keeps the f-file closed. Its jobs are to take g4 away, guard e4 and prepare g4.' },
        { text: 'Taking the g4-square away from the f6-knight', why: 'This is a real job. With a pawn on f3, ...Ng4 is no longer possible.' },
        { text: 'Guarding the e4-pawn', why: 'This is a real job. The f3-pawn defends e4, so the c3-knight is free to move.' },
        { text: 'Preparing the pawn storm g2–g4', why: 'This is a real job. With f3 played, g4 is well supported later.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In the Najdorf, 5...a6 6.Be3 Ng4 is a good move. In the Dragon, 5...g6 6.Be3 Ng4 is a mistake. Why the difference?',
      choices: [
        { text: 'In the Najdorf, the a6-pawn covers b5, so there is no Bb5+', correct: true, why: 'Exactly. Without ...a6, the check on b5 wins material in the Dragon.' },
        { text: 'In the Dragon, the knight on g4 can be trapped by h3', why: 'h3 is not the problem. The problem is 7.Bb5+, which wins material at once.' },
        { text: 'In the Najdorf, White has not played Nc3 yet', why: 'White has played Nc3 in both. The difference is the a6-pawn.' }
      ]
    },
    {
      type: 'order',
      prompt: 'After 6...Bg7, is 7.Qd2 a mistake because of 7...Ng4?',
      moves: `${DRAGON} Be3 Bg7 Qd2`,
      orientation: 'white',
      choices: [
        { text: 'No. After 7...Ng4 8.Bg5, White keeps a small edge, but 7.f3 is cleaner', correct: true, why: 'Right. The knight chases the bishop and gains time, but White stays slightly better. 7.f3 simply avoids the fuss.' },
        { text: 'Yes. Black wins the bishop pair by force', why: 'Only if White plays carelessly with Be3. After 8.Bg5 h6 9.Bh4 the bishop survives, and White stays slightly better.' },
        { text: 'Yes. White has to answer with 8.Bb5+, and that fails', why: 'White does not need Bb5+ here. The simple 8.Bg5 keeps a small edge.' }
      ]
    }
  ],
  key: { name: 'Yugoslav move order: 7.f3 (no ...Ng4)', moves: F3, orientation: 'white' },
  terms: [
    { term: 'The exchange', meaning: 'A rook is worth more than a bishop or knight. Winning a rook for a bishop or knight is called winning the exchange.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one. It is an advantage in open positions.' },
    { term: 'Tempo', meaning: 'One move\'s worth of time. Chasing a piece so it must move again gains a tempo.' }
  ]
})
