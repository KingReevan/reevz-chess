import { defineModule } from '../../../types'
import { EXCHANGE } from '../lines'

/** exch-c5: 4.Nf3 Nf6 5.Bd3 c5 6.O-O c4 7.Re1+ Be7 8.Bf1 O-O */
const C5 = `${EXCHANGE} Nf3 Nf6 Bd3 c5 O-O c4 Re1+ Be7 Bf1 O-O`
/** exch-4c4 (Monte Carlo): 4.c4 Nf6 5.Nc3 Bb4 6.Nf3 O-O 7.Bd3 dxc4 8.Bxc4 Nc6 9.O-O Bg4 */
const MONTE_CARLO = `${EXCHANGE} c4 Nf6 Nc3 Bb4 Nf3 O-O Bd3 dxc4 Bxc4 Nc6 O-O Bg4`
/** exch-4bd3 up to 9.Nbd2, then exch-ooo: 9...O-O-O?! 10.b4 Ng6 11.b5 Na5 */
const BD3_NBD2 = `${EXCHANGE} Bd3 Nc6 c3 Bd6 Nf3 Bg4 O-O Nge7 Re1 Qd7 Nbd2`
const LONG_CASTLE = `${BD3_NBD2} O-O-O b4 Ng6 b5 Na5`

export default defineModule({
  id: '3.2',
  title: 'Playing for a win from a symmetric position',
  minutes: 11,
  level: 2,
  goals: [
    'Know why the Exchange is level but not a dead draw',
    "Unbalance the pawns: Black's ...c5 and White's 4.c4 (an isolated d-pawn)",
    'Count the race before castling on opposite sides'
  ],
  intro:
    "Symmetrical pawns give neither side a target, and many players call the Exchange a dead draw. It isn't. Level is not the same as drawn: as soon as one side changes the pawn structure, both sides have something to play for. This module shows how Black and White each break the symmetry, and one way not to.",
  sections: [
    {
      kind: 'walkthrough',
      title: "Black's ...c5 and ...c4",
      intro: 'Black breaks the mirror with the c-pawn. Watch what happens to the queenside.',
      moves: C5,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'A symmetrical start',
          text: '3...exd5. The pawns are a mirror image. To play for a win, someone has to change that.',
          marks: ['d4', 'd5']
        },
        7: {
          title: 'Knight out',
          text: '4.Nf3. White develops and guards d4.',
          arrows: [['f3', 'd4', 'green']]
        },
        8: {
          title: 'Black copies, for now',
          text: '4...Nf6. Black develops the knight too.',
          arrows: [['f6', 'd5', 'green']]
        },
        9: {
          title: 'Bishop to d3',
          text: '5.Bd3. White aims at h7 and gets ready to castle.',
          arrows: [['d3', 'h7', 'blue']]
        },
        10: {
          title: 'Breaking the mirror',
          text: '5...c5. Black attacks d4 with a pawn. If White ever takes on c5, Black recaptures with the bishop and plays with an isolated d-pawn but active pieces.',
          arrows: [['c5', 'd4', 'red']]
        },
        11: {
          title: 'White castles',
          text: "6.O-O. White's king is safe. Black's king is still on e8, on the open e-file.",
          marks: ['e8']
        },
        12: {
          title: 'Space on the queenside',
          text: '6...c4. The pawn gains space and hits the d3-bishop. The d5-pawn guards it, so 7.Bxc4? dxc4 would just lose the bishop for a pawn.',
          arrows: [['c4', 'd3', 'red'], ['d5', 'c4', 'green']]
        },
        13: {
          title: 'Check on the e-file',
          text: "7.Re1+. Before retreating, White uses the open file to give check. Black's king hasn't castled yet.",
          arrows: [['e1', 'e8', 'red']]
        },
        14: {
          title: 'Block and develop',
          text: '7...Be7. Black blocks with a piece that wanted to develop anyway.',
          arrows: [['e7', 'e1', 'green']]
        },
        15: {
          title: 'The bishop steps back',
          text: '8.Bf1. The bishop retreats, but from f1 it still eyes the c4-pawn.',
          arrows: [['f1', 'c4', 'blue']]
        },
        16: {
          title: 'A new kind of game',
          text: "8...O-O. The pawns are no longer symmetrical, and the engine calls it level. Black has queenside space and develops with ...Nc6 and ...Bf5 or ...Bg4. White's usual answer is b3, to break up the c4-pawn.",
          arrows: [['b2', 'b3', 'blue']],
          marks: ['c4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "White's 4.c4: an isolated d-pawn",
      intro: 'The Monte Carlo Variation. White attacks d5 at once and accepts an isolated pawn in return for active pieces.',
      moves: MONTE_CARLO,
      start: 6,
      orientation: 'white',
      steps: {
        6: {
          title: 'The Exchange structure',
          text: '3...exd5. Symmetrical pawns. White now changes them first.',
          marks: ['d4', 'd5']
        },
        7: {
          title: 'Hitting d5',
          text: '4.c4. White attacks the d5-pawn. Once pawns are traded on c4 or d5, White\'s d4-pawn will have no neighbors on the c- or e-file: it will be isolated.',
          arrows: [['c4', 'd5', 'red']],
          marks: ['d4']
        },
        8: {
          title: 'Guard d5',
          text: '4...Nf6. The knight develops and defends d5.',
          arrows: [['f6', 'd5', 'green']]
        },
        9: {
          title: 'More pressure',
          text: '5.Nc3. A second attacker on d5.',
          arrows: [['c3', 'd5', 'red'], ['c4', 'd5', 'red']]
        },
        10: {
          title: 'Pin the attacker',
          text: "5...Bb4. The bishop pins the c3-knight to White's king, so the knight can't take on d5.",
          arrows: [['b4', 'e1', 'red']],
          marks: ['c3']
        },
        11: {
          title: 'Develop',
          text: '6.Nf3. White develops and gets ready to castle, which ends the pin.',
          arrows: [['f3', 'd4', 'green']]
        },
        12: {
          title: 'Black castles',
          text: "6...O-O. Black's king is safe first.",
          arrows: [['e8', 'g8', 'green']]
        },
        13: {
          title: 'Bishop to d3',
          text: '7.Bd3. White develops the last kingside piece.',
          arrows: [['d3', 'h7', 'blue']]
        },
        14: {
          title: 'Take at the right moment',
          text: '7...dxc4. Black takes now, so White\'s bishop has to move a second time to take back.',
          arrows: [['d3', 'c4', 'blue']]
        },
        15: {
          title: 'The isolated pawn',
          text: '8.Bxc4. The d4-pawn has no pawn neighbors. It can become a target in an endgame, but now it controls c5 and e5, and White\'s pieces are active.',
          arrows: [['d4', 'e5', 'green'], ['d4', 'c5', 'green']],
          marks: ['d4']
        },
        16: {
          title: 'Hit the pawn',
          text: '8...Nc6. Black starts to pile up on d4.',
          arrows: [['c6', 'd4', 'red']]
        },
        17: {
          title: 'White castles',
          text: '9.O-O. Now the c3-knight is free to move.',
          arrows: [['e1', 'g1', 'green']]
        },
        18: {
          title: 'Pin the defender',
          text: '9...Bg4. The bishop pins the f3-knight, one of the d4-pawn\'s defenders, to the queen. The d4-pawn is attacked twice (the c6-knight and the d8-queen) and defended twice. The engine calls it level, with play for both sides.',
          arrows: [['g4', 'f3', 'red'], ['c6', 'd4', 'red'], ['d8', 'd4', 'red']],
          marks: ['d4']
        }
      }
    },
    {
      kind: 'text',
      title: 'Is the Exchange a dead draw?',
      body:
        "No. The engine calls the main lines level, but that only means neither side has an advantage yet. With symmetrical pawns there are fewer targets, so the game stays quiet **if both sides want it to**. White can't force a draw against a Black player who wants to fight, and Black can't force one either.\n\nTo play for a win, change the pawns. **Black** plays ...c5 (and often ...c4). **White** plays c4, accepting an isolated d-pawn for active pieces. Castling on opposite sides also unbalances the game, but that one needs care."
    },
    {
      kind: 'walkthrough',
      title: 'Opposite-side castling: who is faster?',
      intro: "Castling on opposite sides turns the game into a race: each side throws pawns at the other king. Here Black starts the race when White's pawns are already closer.",
      moves: LONG_CASTLE,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'A choice of sides',
          text: '8...Qd7. Black can castle on either side now.',
          arrows: [['e8', 'g8', 'blue'], ['e8', 'c8', 'blue']]
        },
        17: {
          title: 'White develops',
          text: '9.Nbd2. The knight heads for f1 and later g3 or e3. Short castling (9...O-O) or 9...Bf5 keeps the game level.',
          arrows: [['d2', 'f1', 'blue']]
        },
        18: {
          title: 'Into the race',
          text: "9...O-O-O. Black's king goes to the queenside, right where White's pawns can advance. Black's own attack needs several pawn moves on the kingside first.",
          arrows: [['b2', 'b4', 'blue']],
          marks: ['c8'],
          ann: '?!'
        },
        19: {
          title: 'The storm begins',
          text: '10.b4. White starts at once. Next, b5 will hit the c6-knight, a key defender of Black\'s king.',
          arrows: [['b4', 'b5', 'blue']],
          marks: ['c6']
        },
        20: {
          title: 'Too slow',
          text: '10...Ng6. Black moves the other knight toward the kingside, but nothing there hits White\'s king yet.',
          marks: ['g6']
        },
        21: {
          title: 'The knight is kicked',
          text: '11.b5. The pawn attacks the c6-knight, which has to leave.',
          arrows: [['b5', 'c6', 'red']]
        },
        22: {
          title: 'Off to the edge',
          text: '11...Na5. The knight lands on the rim, far from its king. White\'s queen can come to a4 next. The engine says White is better: White won the race before Black\'s attack even started.',
          arrows: [['d1', 'a4', 'blue']],
          marks: ['a5']
        }
      }
    },
    {
      kind: 'warning',
      title: 'Count before you castle long',
      body:
        "Opposite-side castling is a real way to play for a win, but it is a race. Before you castle away from your opponent, count: how many moves until your pawns hit the enemy king, and how many until theirs hit yours? In the line above, White's b-pawn needed only two moves to reach b5. Black's kingside attack hadn't started."
    }
  ],
  takeaway:
    "The Exchange is level, not a dead draw. Unbalance the pawns to play for a win: ...c5 for Black, c4 for White. If you castle on opposite sides, count the race first.",
  lookAhead:
    "Next: the open e-file and a trick that punishes a natural-looking bishop move. Module 3.3 shows 7...Bg4? 8.Bxh7+!",
  drills: [
    {
      title: 'Break the symmetry as Black',
      prompt: "You're Black. White has played 4.Nf3. Develop your king's knight, then strike at d4 with the c-pawn, gain queenside space, block the check and castle.",
      moves: C5,
      start: 6,
      side: 'black',
      hints: [
        'Knight to f6 first. After 5.Bd3, the c-pawn goes two squares.',
        'After 6.O-O, push the c-pawn again to hit the bishop. Block the check with the dark-squared bishop, then castle.'
      ],
      success: '4...Nf6, 5...c5, 6...c4, 7...Be7 and 8...O-O. The pawns are no longer symmetrical, and the position is level with play for both sides.'
    },
    {
      title: 'Win the race',
      prompt: "You're White. Black has just castled long. Your queenside pawns are close to Black's king. Start the storm.",
      moves: `${BD3_NBD2} O-O-O b4 Ng6 b5`,
      start: 18,
      side: 'white',
      hints: [
        'Which pawn can reach the c6-knight in two moves?',
        'b4, then b5 to kick the knight away from the king.'
      ],
      success: '10.b4 and 11.b5. The c6-knight has to leave its king, and White is better.'
    }
  ],
  quiz: [
    {
      type: 'plan',
      prompt: 'Black to move. Which move breaks the symmetry by attacking White\'s center with a pawn?',
      moves: `${EXCHANGE} Nf3 Nf6 Bd3`,
      orientation: 'black',
      choices: [
        { text: '5...c5', correct: true, why: 'Right. The c-pawn attacks d4 and changes the pawn structure. That gives both sides something to play for.' },
        { text: '5...Bd6', why: 'A good developing move, but it copies White. The pawns stay symmetrical.' },
        { text: '5...Nc6', why: 'The knight does hit d4, but it is a piece, not a pawn. The pawn structure stays the same.' }
      ]
    },
    {
      type: 'concept',
      prompt: "After 8.Bxc4 in the 4.c4 line, what kind of pawn is White's d4-pawn?",
      moves: `${EXCHANGE} c4 Nf6 Nc3 Bb4 Nf3 O-O Bd3 dxc4 Bxc4`,
      orientation: 'white',
      choices: [
        { text: 'Isolated: White has no pawns on the c- or e-file', correct: true, why: "Yes. No pawn can ever defend it, so pieces must. In return it controls c5 and e5, and White's pieces are active." },
        { text: 'Passed: no Black pawn can stop it', why: "Black's c7-pawn stands on a neighboring file in front of it, so it is not passed." },
        { text: 'Doubled', why: 'Doubled pawns are two pawns of one color on the same file. White has only one d-pawn.' }
      ]
    },
    {
      type: 'trap',
      prompt: "Black has just played 6...c4, attacking the d3-bishop. Why can't White simply take the pawn with 7.Bxc4?",
      moves: `${EXCHANGE} Nf3 Nf6 Bd3 c5 O-O c4`,
      orientation: 'white',
      choices: [
        { text: 'The d5-pawn guards c4, so 7...dxc4 wins the bishop for a pawn', correct: true, why: 'Right. That is why White first checks with 7.Re1+ and then retreats the bishop to f1.' },
        { text: 'The bishop is pinned to White\'s king', why: "White's king is on g1, and nothing pins the d3-bishop. The problem is simply that c4 is defended." },
        { text: 'It would leave White\'s king in check', why: 'No Black piece gives check after Bxc4. The pawn is guarded by d5, that is all.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why is 9...O-O-O risky in this position?',
      moves: `${BD3_NBD2} O-O-O`,
      orientation: 'black',
      choices: [
        { text: "White's b-pawn can reach b5 in two moves and kick the c6-knight away from Black's king", correct: true, why: 'Yes. In a race of attacks on opposite wings, White gets there first. 9...O-O or 9...Bf5 keeps the game level.' },
        { text: 'It leaves the d5-pawn without a defender', why: 'The e7-knight still guards d5. The problem is the race on the queenside.' },
        { text: "Black's king is in check on the c-file", why: "There is no check: nothing of White's attacks c8. The danger is White's pawn storm." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Is the French Exchange Variation a dead draw?',
      choices: [
        { text: 'No. The main lines are level, but either side can unbalance the pawns and play for a win', correct: true, why: "Right. Level means nobody is better yet. ...c5 for Black and c4 for White change the structure and create chances for both sides." },
        { text: 'Yes. With symmetrical pawns, nobody can win', why: 'Symmetry makes the game quieter, not drawn. Both sides can change the pawns.' },
        { text: 'Yes, because White can always force a draw by copying Black', why: "White moves first, so copying doesn't force anything. And Black can break the symmetry with ...c5 at any time." }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Monte Carlo Variation (4.c4), what does White get in return for the isolated d-pawn?',
      moves: MONTE_CARLO,
      orientation: 'white',
      choices: [
        { text: 'Active pieces and control of the c5- and e5-squares', correct: true, why: 'Yes. The isolated pawn can become weak in an endgame, but in the middlegame it supports active play.' },
        { text: 'An extra pawn', why: 'Material is equal. White traded the c-pawn for Black\'s d-pawn.' },
        { text: 'A safer king', why: 'Both kings are castled and safe. The trade-off is about the pawn and piece activity.' }
      ]
    }
  ],
  key: { name: 'Exchange: 6...c4 breaks the symmetry', moves: `${EXCHANGE} Nf3 Nf6 Bd3 c5 O-O c4`, orientation: 'black' },
  terms: [
    { term: 'Isolated pawn', meaning: 'A pawn with no pawns of its own color on the files next to it, so no pawn can ever defend it.' },
    { term: 'Opposite-side castling', meaning: 'One king castles short and the other long. Each side then usually attacks the other king with pawns.' },
    { term: 'Pawn storm', meaning: 'Pushing several pawns toward the enemy king to open lines for an attack.' },
    { term: 'Monte Carlo Variation', meaning: 'The Exchange line 4.c4, where White accepts an isolated d-pawn for active pieces.' }
  ]
})
