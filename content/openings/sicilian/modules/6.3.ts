import { defineModule } from '../../../types'
import { TAIMANOV } from '../lines'

/** taimanov-nb5: 5.Nb5 d6 6.c4 Nf6 7.N1c3 a6 8.Na3 Be7 9.Be2 O-O 10.O-O b6 */
const NB5 = `${TAIMANOV} Nb5 d6 c4 Nf6 N1c3 a6 Na3 Be7 Be2 O-O O-O b6`
/** taimanov-nxc6: 5.Nc3 a6 6.Nxc6 bxc6 7.Bd3 d5 */
const NXC6 = `${TAIMANOV} Nc3 a6 Nxc6 bxc6 Bd3 d5`
/** 6.c4: the clamp position */
const CLAMP = `${TAIMANOV} Nb5 d6 c4`

export default defineModule({
  id: '6.3',
  title: '5.Nb5 d6 6.c4: White\'s clamp',
  minutes: 10,
  level: 2,
  goals: [
    'See why 5.Nb5 forces ...d6',
    'Understand the c4 clamp on d5 and Black\'s patient answer',
    'Recapture the right way after 5.Nc3 a6 6.Nxc6'
  ],
  intro:
    "The Taimanov keeps the d-pawn on d7, so the d6 square has no pawn guarding it. White can aim straight at that hole with 5.Nb5, forcing ...d6, and then grab space with c4. How does Black live with less space? And what happens when White simply trades knights on c6?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The knight on b5 and the c4 clamp',
      intro: "From White's side. Watch the d5 square: White wants to keep Black's d-pawn from ever reaching it.",
      moves: NB5,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'A hole on d6',
          text: '4...Nc6. The Taimanov. With the d-pawn on d7, no black pawn guards d6.',
          marks: ['d6']
        },
        9: {
          title: 'Aiming at d6',
          text: '5.Nb5. The knight threatens Nd6+. After ...Bxd6 Qxd6, White\'s queen would sit deep in Black\'s camp, and Black would have given up the dark-squared bishop.',
          arrows: [['b5', 'd6', 'red']],
          marks: ['d6']
        },
        10: {
          title: 'Closing the hole',
          text: '5...d6. The simplest answer: the pawn fills d6, so the knight cannot land there. Black now has pawns on d6 and e6.',
          marks: ['d6']
        },
        11: {
          title: 'The clamp',
          text: "6.c4. With pawns on c4 and e4, White controls d5, so Black's freeing ...d5 is very hard to play. It is the same idea as the Maróczy Bind (Module 3.9).",
          arrows: [['c4', 'd5', 'yellow'], ['e4', 'd5', 'yellow']],
          marks: ['d5']
        },
        12: {
          title: 'Hitting e4',
          text: '6...Nf6. The knight develops and attacks e4, which nothing defends right now.',
          arrows: [['f6', 'e4', 'red']]
        },
        13: {
          title: 'e4 is guarded',
          text: '7.N1c3. The other knight comes out and defends e4. It also adds another guard to d5.',
          arrows: [['c3', 'e4', 'green'], ['c3', 'd5', 'yellow']]
        },
        14: {
          title: 'Kicking the knight',
          text: "7...a6. The b5-knight can't stay, because the pawn would take it. Every square forward is covered, so it must go back.",
          arrows: [['a6', 'b5', 'red']]
        },
        15: {
          title: 'To the edge',
          text: '8.Na3. It looks odd, but the knight avoids trades on d4 and can come back later via c2. This is also where Kasparov\'s gambit 8...d5!? starts (Module 6.4).',
          arrows: [['a3', 'c2', 'blue']]
        },
        16: {
          title: 'Quiet development',
          text: '8...Be7. Black develops behind the pawns and gets ready to castle.',
          marks: ['e7']
        },
        17: {
          title: 'White develops',
          text: '9.Be2. The bishop comes out, and White is one move from castling.',
          marks: ['e2']
        },
        18: {
          title: 'Black castles',
          text: '9...O-O. The black king is safe.',
          marks: ['g8']
        },
        19: {
          title: 'White castles',
          text: '10.O-O. Both kings are safe. White has more space; Black has a solid position.',
          marks: ['g1']
        },
        20: {
          title: 'A Hedgehog-style wall',
          text: '10...b6. Pawns on a6, b6, d6 and e6, with pieces behind them. Next comes ...Bb7. Black waits for a chance to break with ...b5 or ...d5. The game is roughly level.',
          arrows: [['c8', 'b7', 'blue']],
          marks: ['a6', 'b6', 'd6', 'e6']
        }
      }
    },
    {
      kind: 'warning',
      title: 'Ignore 5.Nb5 at your peril',
      body:
        "If Black plays 5...a6? instead of 5...d6, then 6.Nd6+ Bxd6 7.Qxd6 leaves White's queen dominating the dark squares, and White is clearly better.\n\nWorse is 5...Nge7??, which blocks the f8-bishop: 6.Nd6# is checkmate. The king is boxed in by its own pieces, and nothing can take the knight."
    },
    {
      kind: 'walkthrough',
      title: '5.Nc3 a6 6.Nxc6: take toward the center',
      intro: "A simpler White plan: trade knights on c6. Black's choice of recapture decides the structure.",
      moves: NXC6,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The Taimanov again',
          text: '4...Nc6. This time White will not go to b5.',
          marks: ['c6']
        },
        9: {
          title: 'Normal development',
          text: '5.Nc3. The knight develops and guards e4.',
          arrows: [['c3', 'e4', 'green']]
        },
        10: {
          title: 'b5 first',
          text: '5...a6. Black takes b5 away before anything else. It is a common Taimanov move order.',
          arrows: [['a6', 'b5', 'green']]
        },
        11: {
          title: 'The trade',
          text: '6.Nxc6. White trades knights. Black must take back, and the choice matters.',
          marks: ['c6']
        },
        12: {
          title: 'Toward the center',
          text: '6...bxc6. The b-pawn takes, so the new c6-pawn supports ...d5. Taking with the d-pawn would allow 7.Qxd8+ Kxd8, and Black\'s king could no longer castle.',
          arrows: [['c6', 'd5', 'green']],
          ann: '!'
        },
        13: {
          title: 'Guarding e4',
          text: '7.Bd3. The bishop develops and adds a guard to e4 before Black hits it.',
          arrows: [['d3', 'e4', 'green']]
        },
        14: {
          title: 'A solid center',
          text: "7...d5. Black has pawns on c6, d5 and e6. White is a little better thanks to faster development, and Black's a6-pawn has no neighbors. But Black's center is strong.",
          arrows: [['d5', 'e4', 'red']],
          marks: ['a6']
        }
      }
    }
  ],
  takeaway:
    'Against 5.Nb5, play 5...d6 to close the hole on d6. After 6.c4, White clamps d5 and Black builds a patient wall with ...a6, ...Be7, ...O-O and ...b6. Against 6.Nxc6, take back with the b-pawn so ...d5 comes with support.',
  lookAhead:
    "Module 6.4 shows Kasparov's answer to the clamp: the pawn sacrifice 8...d5!?, which blows the center open at once.",
  drills: [
    {
      title: 'Meet the knight and the clamp',
      prompt: "You're Black. White has just played 5.Nb5, aiming at d6. Build a solid set-up.",
      moves: NB5,
      start: 9,
      side: 'black',
      hints: [
        'First close the d6 hole with a pawn. Then develop, kick the b5-knight, castle.',
        '5...d6, 6...Nf6, 7...a6, 8...Be7, 9...O-O and 10...b6.'
      ],
      success: 'Pawns on a6, b6, d6 and e6 with pieces behind them. Black has less space but a solid, roughly level game.'
    },
    {
      title: 'Set up the clamp',
      prompt: "You're White. Black has answered 5.Nb5 with 5...d6. Clamp the d5 square and keep your knight out of trouble.",
      moves: `${TAIMANOV} Nb5 d6 c4 Nf6 N1c3 a6 Na3`,
      start: 10,
      side: 'white',
      hints: [
        'Put a second pawn next to e4 so that both pawns guard d5.',
        '6.c4, then 7.N1c3 to guard e4, and when ...a6 kicks the knight, go to a3.'
      ],
      success: '6.c4, 7.N1c3 and 8.Na3. White has a firm grip on d5 and more space.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'White has just played 6.c4. What is the main point of this move?',
      moves: CLAMP,
      orientation: 'white',
      choices: [
        { text: 'With e4, it controls d5 and makes ...d5 hard for Black', correct: true, why: "Right. This is the clamp: two pawns guard d5, so Black's natural freeing move is very hard to play." },
        { text: 'It attacks the d6-pawn', why: 'A pawn on c4 attacks b5 and d5, not d6. The target is the d5 square.' },
        { text: 'It frees the c1-bishop', why: "The c1-bishop's diagonal was already open after the d-pawn was traded on d4. c4 is about d5." }
      ]
    },
    {
      type: 'move',
      prompt: 'White has just played 5.Nb5. What is Black\'s best answer?',
      moves: `${TAIMANOV} Nb5`,
      orientation: 'black',
      choices: [
        { text: '5...d6', correct: true, why: 'Yes. The pawn takes d6 away from the knight. Black gets a solid d6–e6 pair.' },
        { text: '5...a6', why: 'This kicks the knight, but it can jump forward: 6.Nd6+ Bxd6 7.Qxd6 and White is clearly better.' },
        { text: '5...Nge7', why: 'A terrible blunder. It blocks the f8-bishop, and 6.Nd6# is checkmate.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White has just taken on c6. How should Black recapture?',
      moves: `${TAIMANOV} Nc3 a6 Nxc6`,
      orientation: 'black',
      choices: [
        { text: '6...bxc6', correct: true, why: 'Right. Taking toward the center gives a pawn on c6 that supports ...d5.' },
        { text: '6...dxc6', why: "This opens the d-file: 7.Qxd8+ Kxd8 and Black's king has lost the right to castle." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Black has set up pawns on a6, b6, d6 and e6. What is Black waiting for?',
      moves: NB5,
      orientation: 'black',
      choices: [
        { text: 'A good moment to break with ...b5 or ...d5', correct: true, why: 'Yes. Behind the wall, Black regroups and waits. The breaks ...b5 and ...d5 free the position when the time is right.' },
        { text: 'A kingside pawn storm with ...g5 and ...h5', why: "Black's king is castled on that side. A pawn storm there would only weaken it." },
        { text: 'A chance to trade queens and draw', why: 'Black is not playing for a draw. The wall is solid, and the breaks give real counterplay.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'In the Taimanov line 5.Nb5 d6 6.c4, White\'s pawns on c4 and e4 copy a famous set-up. Which one?',
      choices: [
        { text: 'The Maróczy Bind', correct: true, why: 'Right. Pawns on c4 and e4 clamping d5 are the Maróczy Bind, also seen against the Accelerated Dragon.' },
        { text: 'The English Attack', why: 'The English Attack is Be3, f3, Qd2 and O-O-O. It is about attacking, not clamping d5 with pawns.' },
        { text: 'The Scheveningen', why: "The Scheveningen is Black's d6–e6 pawn pair, not White's c4–e4 clamp." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does 5.Nb5 work well against the Taimanov in particular?',
      choices: [
        { text: 'Black\'s d-pawn is still on d7, so no pawn guards d6', correct: true, why: 'Yes. That is the price of keeping the d-pawn flexible. Black must spend a move on ...d6.' },
        { text: 'Black has already played ...a6', why: "If Black had played ...a6, the knight couldn't go to b5 at all. 5.Nb5 comes before ...a6." },
        { text: "Black's queen is already on c7", why: 'In this line the queen is still on d8. The knight is aiming at the empty d6 square.' }
      ]
    }
  ],
  key: { name: 'Taimanov clamp: 5.Nb5 d6 6.c4', moves: CLAMP, orientation: 'white' },
  terms: [
    { term: 'Clamp', meaning: 'Pawns that control a key square so the opponent cannot use it or push a pawn to it. Here c4 and e4 clamp d5.' },
    { term: 'Hedgehog', meaning: 'A Black set-up with pawns on a6, b6, d6 and e6 and pieces behind them. Passive at first, but full of hidden energy, like a hedgehog\'s spines.' },
    { term: 'Hole', meaning: 'A square that your pawns can no longer guard, so enemy pieces can settle there. In the Taimanov, d6 is one until the d-pawn fills it.' }
  ]
})
