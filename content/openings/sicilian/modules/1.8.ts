import { defineModule } from '../../../types'

/** hyper-2g6-3c3: 2...g6 3.c3 Bg7 4.d4 cxd4 5.cxd4 d5 6.e5 Nc6 */
const HYPER_C3 = 'e4 c5 Nf3 g6 c3 Bg7 d4 cxd4 cxd4 d5 e5 Nc6'
/** okelly-5nc3-e5: 2...a6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Nf3 Bb4 */
const OKELLY_E5 = 'e4 c5 Nf3 a6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Nf3 Bb4'
/** okelly-5e5-trap: 5.e5? Qa5+ 6.Nc3 Qxe5+ */
const OKELLY_TRAP = 'e4 c5 Nf3 a6 d4 cxd4 Nxd4 Nf6 e5 Qa5+ Nc3 Qxe5+'

export default defineModule({
  id: '1.8',
  title: 'Rare second moves: 2...g6 and 2...a6',
  minutes: 12,
  level: 1,
  goals: [
    'Meet the Hyperaccelerated Dragon (2...g6) and White\'s 3.c3 answer',
    "Meet the O'Kelly (2...a6) and why 5...e5 works there",
    "Win a pawn with 5...Qa5+ when White pushes 5.e5?"
  ],
  intro:
    "Besides the three main second moves, Black has a couple of rarer tries that set White new problems. 2...g6 heads for a Dragon-style bishop at once. 2...a6 is a waiting move that makes the Open Sicilian awkward for White. This module shows how each one works, how White should answer, and a neat trick for Black.",
  sections: [
    {
      kind: 'walkthrough',
      title: "2...g6: White's best answer is 3.c3",
      intro: 'Black prepares ...Bg7 straight away. Watch how White uses the c-pawn to build a big center.',
      moves: HYPER_C3,
      start: 3,
      orientation: 'white',
      steps: {
        3: {
          title: 'The usual start',
          text: '2.Nf3. White prepares d4, as always.',
          arrows: [['f3', 'd4', 'green']]
        },
        4: {
          title: 'The Hyperaccelerated Dragon',
          text: "2...g6. Black gets ready to put the bishop on g7, the Dragon's long diagonal. If White now plays 3.d4 cxd4 4.Nxd4 Nc6, the game becomes an Accelerated Dragon (Module 3.8).",
          arrows: [['f8', 'g7', 'blue']]
        },
        5: {
          title: 'Prepare d4 with a pawn',
          text: '3.c3. White plans d4 so that, after ...cxd4, a pawn can take back. Then White keeps two pawns in the center instead of one.',
          arrows: [['c3', 'd4', 'green'], ['d2', 'd4', 'blue']],
          ann: '!'
        },
        6: {
          title: 'The bishop comes out',
          text: '3...Bg7. The bishop arrives on the long diagonal.',
          arrows: [['g7', 'c3', 'blue']]
        },
        7: {
          title: 'Now d4',
          text: '4.d4. White pushes, and the c3-pawn guards d4.',
          arrows: [['c3', 'd4', 'green']]
        },
        8: {
          title: 'Black trades',
          text: '4...cxd4. Black takes on d4.',
          marks: ['d4']
        },
        9: {
          title: 'A big center',
          text: '5.cxd4. White takes back with the pawn. Now White has pawns on d4 and e4 side by side, and the c-file is open.',
          marks: ['d4', 'e4']
        },
        10: {
          title: 'Black hits back',
          text: '5...d5. Black strikes at the e4-pawn before White can finish developing.',
          arrows: [['d5', 'e4', 'red']]
        },
        11: {
          title: 'White gains space',
          text: '6.e5. The pawn steps forward and is guarded by d4. It blocks the g7-bishop\'s diagonal at e5.',
          arrows: [['d4', 'e5', 'green']],
          marks: ['e5']
        },
        12: {
          title: 'More space for White',
          text: '6...Nc6. Black puts pressure on d4. But White has more space and is better.',
          arrows: [['c6', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "2...a6: the O'Kelly and 5...e5!",
      intro: 'Black spends a move on ...a6 before anything else. Watch what that small pawn does later.',
      moves: OKELLY_E5,
      start: 3,
      orientation: 'black',
      steps: {
        3: {
          title: 'The usual start',
          text: '2.Nf3. White prepares d4.',
          arrows: [['f3', 'd4', 'green']]
        },
        4: {
          title: "The O'Kelly Variation",
          text: "2...a6. A waiting move: it doesn't develop, but it takes the b5-square away from White's knights and bishop for as long as it stays on a6.",
          arrows: [['a6', 'b5', 'green']],
          marks: ['b5']
        },
        5: {
          title: 'The Open Sicilian',
          text: '3.d4. White opens the center as usual.',
          arrows: [['c5', 'd4', 'red']]
        },
        6: {
          title: 'The trade',
          text: '3...cxd4. The usual trade.',
          marks: ['d4']
        },
        7: {
          title: 'Knight takes back',
          text: '4.Nxd4. White recaptures with the knight.',
          marks: ['d4']
        },
        8: {
          title: 'Hit e4',
          text: '4...Nf6. The knight attacks e4.',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'e4 is defended',
          text: '5.Nc3. White defends e4. (After 5...d6, this would be a Najdorf.)',
          arrows: [['c3', 'e4', 'green']]
        },
        10: {
          title: 'Kick the knight',
          text: '5...e5. This time ...e5 is good. Because of ...a6, the d4-knight can\'t jump to b5 and there is no Bb5+. The knight simply has to retreat.',
          arrows: [['e5', 'd4', 'red']],
          marks: ['b5'],
          ann: '!'
        },
        11: {
          title: 'The knight steps back',
          text: '6.Nf3. The knight retreats and attacks e5.',
          arrows: [['f3', 'e5', 'red']]
        },
        12: {
          title: 'Counterattack',
          text: '6...Bb4. Black develops and pins the c3-knight, the only defender of e4. Now both e4 and e5 are under attack, and the position is level.',
          arrows: [['b4', 'e1', 'red'], ['f6', 'e4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: "White's simple answer to 2...a6",
      body:
        "Because ...a6 makes the Open Sicilian awkward, White's simplest answer is to avoid it with **3.c3** (or 3.c4). After 3.c3 d5 4.exd5 Qxd5 5.d4 Nf6, White is slightly better: the move ...a6 does very little in that kind of position, so it is close to a wasted move."
    },
    {
      kind: 'walkthrough',
      title: "The O'Kelly trap: 5.e5? Qa5+!",
      intro: 'Back to the position after 4...Nf6. Black has not played ...d6, so White may be tempted to push e4–e5.',
      moves: OKELLY_TRAP,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'e5 looks possible',
          text: '4...Nf6. In the 2...d6 lines, the d6-pawn guards e5. Here nothing does, so White can push the e-pawn to kick the knight.',
          marks: ['e5']
        },
        9: {
          title: 'The pawn push',
          text: '5.e5. The pawn attacks the f6-knight. But look at the empty fifth rank and the empty diagonal from a5 to e1.',
          arrows: [['e5', 'f6', 'red']],
          ann: '?'
        },
        10: {
          title: 'Check and a double attack',
          text: '5...Qa5+. The queen checks the king along the a5–e1 diagonal and attacks e5 along the fifth rank. Two targets at once.',
          arrows: [['a5', 'e1', 'red'], ['a5', 'e5', 'red']],
          ann: '!'
        },
        11: {
          title: 'White blocks',
          text: '6.Nc3. White blocks the check. The other ways of meeting the check lose the e5-pawn too.',
          arrows: [['b1', 'c3', 'green']]
        },
        12: {
          title: 'A pawn up',
          text: "6...Qxe5+. Black wins the e5-pawn with check. The queen also hits the d4-knight, but White's queen defends it. Black is a clean pawn up and clearly better.",
          arrows: [['e5', 'e1', 'red']],
          marks: ['e5']
        }
      }
    }
  ],
  takeaway:
    "Against 2...g6, 3.c3 and d4 build a big center. Against 2...a6, the Open Sicilian lets Black play 5...e5 safely, so White usually prefers 3.c3. And in the O'Kelly, 5.e5? loses a pawn to 5...Qa5+.",
  lookAhead:
    'Module 1.9 puts everything together: a map of the whole Sicilian and where this course teaches each part.',
  drills: [
    {
      title: "Spring the O'Kelly trap",
      prompt: "You're Black. White has just pushed 5.e5, kicking your knight. Don't move the knight: find something stronger.",
      moves: OKELLY_TRAP,
      start: 9,
      side: 'black',
      hints: ['A queen move can give check and attack the e5-pawn at the same time.', 'Look at the a5-square: the fifth rank and the a5–e1 diagonal are both empty.'],
      success: '5...Qa5+! and 6...Qxe5+. A pawn up, with check.'
    },
    {
      title: 'Build the big center',
      prompt: "You're White. Black has played 2...g6. Prepare d4 with a pawn, push it, and take back with a pawn.",
      moves: 'e4 c5 Nf3 g6 c3 Bg7 d4 cxd4 cxd4',
      start: 3,
      side: 'white',
      hints: ['Your c-pawn can support d4.', '3.c3, 4.d4 and 5.cxd4.'],
      success: '3.c3, 4.d4 and 5.cxd4. Two pawns in the center, and White has the easier game.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why is 3.c3 a good answer to 2...g6?',
      moves: 'e4 c5 Nf3 g6 c3',
      orientation: 'white',
      choices: [
        { text: 'It prepares d4, so White can take back with a pawn and keep a big center', correct: true, why: 'Right. After 4.d4 cxd4 5.cxd4, White has pawns on d4 and e4.' },
        { text: 'It stops Black from playing ...Bg7', why: 'Nothing stops ...Bg7. 3.c3 is about the center, not the bishop.' },
        { text: 'It attacks the c5-pawn', why: 'A pawn on c3 attacks b4 and d4, not c5. Its job is to support d4.' }
      ]
    },
    {
      type: 'concept',
      prompt: "In the O'Kelly, why is 5...e5 good, when after 2...d6 the same idea ran into 6.Bb5+?",
      moves: OKELLY_E5.split(' ').slice(0, 10).join(' '),
      orientation: 'black',
      choices: [
        { text: 'The a6-pawn covers b5, so White has no Bb5+ and no Ndb5', correct: true, why: 'Exactly. The d4-knight has to retreat, and Black keeps the light-squared bishop.' },
        { text: 'The e5-pawn is defended by the d6-pawn', why: 'Black has not played ...d6 here. The point is the b5-square.' },
        { text: 'White cannot move the d4-knight', why: 'The knight can move, for example back to f3, b3 or e2. What it cannot do is jump to b5, because the a6-pawn guards that square.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White has just played 5.e5. What is the strongest move?',
      moves: OKELLY_TRAP.split(' ').slice(0, 9).join(' '),
      orientation: 'black',
      choices: [
        { text: '5...Qa5+', correct: true, why: 'Yes. Check plus an attack on e5. After 6.Nc3 Qxe5+ Black is a pawn up.' },
        { text: '5...Nd5', why: 'The knight is safe there, but White keeps the e5-pawn and is better. 5...Qa5+ wins a pawn.' },
        { text: '5...Ne4', why: 'The knight is active, but White keeps the e5-pawn and the better game. 5...Qa5+ wins it.' }
      ]
    },
    {
      type: 'concept',
      prompt: "After 5.e5? Qa5+ 6.Nc3 Qxe5+, what has Black won?",
      moves: OKELLY_TRAP,
      orientation: 'black',
      choices: [
        { text: 'One pawn, with check', correct: true, why: 'Right. Black took the e5-pawn and is a clean pawn up.' },
        { text: 'The d4-knight too', why: "The queen attacks d4, but White's queen on d1 defends it. Black wins one pawn." },
        { text: 'Two pawns: e5 and then b2', why: 'The d4-knight blocks the diagonal from e5 to b2. Black wins one pawn.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: '1.e4 c5 2.Nf3 g6 3.d4 cxd4 4.Nxd4 Nc6. Which system has Black reached?',
      moves: 'e4 c5 Nf3 g6 d4 cxd4 Nxd4 Nc6',
      orientation: 'black',
      choices: [
        { text: 'The Accelerated Dragon', correct: true, why: 'Right. 2...g6 has transposed: the same position comes from 2...Nc6 and 4...g6. Module 3.8 teaches it.' },
        { text: 'The Najdorf', why: 'The Najdorf is 2...d6 and 5...a6. Here Black has a pawn on g6 and a knight on c6.' },
        { text: 'The Dragon', why: 'The Dragon proper has ...d6 and ...Nf6 with 5...g6. This is its cousin, the Accelerated Dragon, where ...d6 has not been played.' }
      ]
    },
    {
      type: 'plan',
      prompt: "Against 2...a6 (the O'Kelly), what is White's simplest plan?",
      choices: [
        { text: '3.c3 and d4, so that ...a6 becomes close to a wasted move', correct: true, why: 'Yes. White builds a center, and the a6-pawn does little in that position.' },
        { text: '3.d4 and 5.Nc3, the normal Open Sicilian', why: 'Possible, but then 5...e5! is fine for Black, because ...a6 has taken b5 away from White.' },
        { text: '3.Bb5, attacking at once', why: 'The a6-pawn simply takes the bishop: 3...axb5.' }
      ]
    }
  ],
  key: { name: "O'Kelly trap: 5.e5? Qa5+", moves: OKELLY_TRAP.split(' ').slice(0, 10).join(' '), orientation: 'black' },
  terms: [
    { term: 'Waiting move', meaning: 'A useful move that does not commit to a plan yet, so the opponent has to show their hand first.' },
    { term: 'Double attack', meaning: 'One move that attacks two things at once, for example a check plus an attack on a pawn.' },
    { term: 'Pawn center', meaning: 'Pawns on the central squares. Two pawns side by side on d4 and e4 make a big center.' }
  ]
})
