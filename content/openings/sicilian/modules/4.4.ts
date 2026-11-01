import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** 6.Bc4: the Sozin Attack */
const SOZIN = `${CLASSICAL} Bc4`
/** sozin: 6...e6 7.Bb3 Be7 8.Be3 O-O 9.f4 (Fischer Variation) */
const FISCHER = `${SOZIN} e6 Bb3 Be7 Be3 O-O f4`
/** sozin-qb6: 6...Qb6 7.Nb3 e6 8.O-O Be7 9.Be3 Qc7 */
const QB6 = `${SOZIN} Qb6 Nb3 e6 O-O Be7 Be3 Qc7`
/** velimirovic-nf5: 7.Be3 Be7 8.Qe2 a6 9.O-O-O Qc7 10.Bb3 Na5 11.g4 b5 12.g5 Nxb3+ 13.axb3 Nd7 14.Nf5 exf5 15.Nd5 Qd8 16.exf5 */
const VELI = `${SOZIN} e6 Be3 Be7 Qe2 a6 O-O-O Qc7 Bb3 Na5 g4 b5 g5 Nxb3+ axb3 Nd7 Nf5 exf5 Nd5 Qd8 exf5`

export default defineModule({
  id: '4.4',
  title: 'The Sozin 6.Bc4 and the Velimirović',
  minutes: 12,
  level: 2,
  goals: [
    'See what the Sozin bishop aims at, and how Black blunts it',
    'Meet 6...Qb6, the double attack on d4 and b2',
    'Follow the Velimirović Attack and judge its famous 14.Nf5 sacrifice'
  ],
  intro:
    "With 6.Bc4 White points the bishop straight at Black's kingside. Black can block it with ...e6 or hit back at once with ...Qb6. And if White adds Qe2, castles long and throws the g-pawn forward, things get very sharp. Is White's famous knight sacrifice in that line winning?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Sozin and the Fischer Variation',
      intro: 'Follow the c4-bishop. It moves once more, but it never leaves the diagonal toward e6.',
      moves: FISCHER,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'The Classical position',
          text: "Black has played 5...Nc6. This time White develops the bishop toward Black's kingside.",
          arrows: [['f1', 'c4', 'blue']]
        },
        11: {
          title: '6.Bc4: the Sozin',
          text: "6.Bc4. The bishop aims down the diagonal at f7, the weak spot next to Black's king.",
          arrows: [['c4', 'f7', 'red']]
        },
        12: {
          title: 'Black blocks the diagonal',
          text: '6...e6. Now the bishop hits a pawn on e6 instead of f7. Later White will try f4–f5 to attack that pawn.',
          arrows: [['c4', 'e6', 'yellow']]
        },
        13: {
          title: 'Out of reach',
          text: '7.Bb3. The bishop steps back before Black can hit it with ...Na5, ...Ne5 or ...d5. It stays on the same diagonal, still aiming at e6.',
          arrows: [['b3', 'e6', 'yellow']]
        },
        14: {
          title: 'Ready to castle',
          text: '7...Be7. Black develops and prepares to castle short.',
          arrows: [['e8', 'g8', 'blue']]
        },
        15: {
          title: 'Guarding d4',
          text: '8.Be3. The bishop develops and guards the d4-knight.',
          arrows: [['e3', 'd4', 'green']]
        },
        16: {
          title: 'Black castles',
          text: "8...O-O. Black's king is tucked away. Now the question is whether White can break open the kingside.",
          marks: ['g8']
        },
        17: {
          title: 'The Fischer Variation',
          text: '9.f4. White prepares f4–f5, which would hit the e6-pawn and open lines toward Black\'s king. This is the Fischer Variation, and the position is roughly level.',
          arrows: [['f4', 'f5', 'blue'], ['b3', 'e6', 'yellow']]
        }
      }
    },
    {
      kind: 'history',
      title: 'Three names',
      body:
        'The Sozin is named after Veniamin Sozin. Bobby Fischer played 6.Bc4 with Bb3 and f4 so often that this line carries his name. The sharp plan with Qe2 and O-O-O is the Velimirović Attack, after Dragoljub Velimirović.'
    },
    {
      kind: 'walkthrough',
      title: '6...Qb6: a double attack',
      intro: 'Black can also hit back before blocking the bishop. Count the attackers on d4.',
      moves: QB6,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The Sozin bishop',
          text: '6.Bc4. This time Black hits back at once instead of blocking the diagonal.',
          arrows: [['c4', 'f7', 'red']]
        },
        12: {
          title: 'Two targets',
          text: '6...Qb6. The d4-knight is now attacked twice, by the queen and the c6-knight, and defended only once. The queen also eyes b2, which only the c1-bishop guards.',
          arrows: [['b6', 'd4', 'red'], ['c6', 'd4', 'red'], ['b6', 'b2', 'red']]
        },
        13: {
          title: 'The knight retreats',
          text: '7.Nb3. The knight steps back. Guarding it with 7.Be3? would take the c1-bishop away from b2, and 7...Qxb2 would leave Black better.',
          arrows: [['d4', 'b3', 'green']]
        },
        14: {
          title: 'Now the diagonal is blocked',
          text: '7...e6. With the knight pushed back, Black blocks the Sozin bishop.',
          arrows: [['c4', 'e6', 'yellow']]
        },
        15: {
          title: 'White castles short',
          text: '8.O-O. White gets the king to safety.',
          marks: ['g1']
        },
        16: {
          title: 'Development',
          text: '8...Be7. Black prepares to castle too.',
          arrows: [['f8', 'e7', 'green']]
        },
        17: {
          title: 'The bishop hits the queen',
          text: '9.Be3. The bishop develops and attacks the queen on b6 along the diagonal.',
          arrows: [['e3', 'b6', 'red']]
        },
        18: {
          title: 'Mission done',
          text: "9...Qc7. The queen steps back to the c-file. Black has pushed White's knight out of the center to b3, and the position is roughly level.",
          arrows: [['c7', 'c2', 'blue']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'Count before you defend',
      body:
        'After 6...Qb6, castling with 7.O-O?? simply loses the d4-knight: 7...Qxd4 8.Qxd4 Nxd4. And 7.Be3? guards d4 but gives up b2. When a piece is attacked twice, check what each defender is already guarding.'
    },
    {
      kind: 'walkthrough',
      title: 'The Velimirović Attack',
      intro: 'White plays Be3 and Qe2, castles long and storms with the g-pawn. Watch for the knight sacrifice at the end.',
      moves: VELI,
      start: 14,
      orientation: 'white',
      steps: {
        14: {
          title: 'A sharper plan',
          text: '6...e6 7.Be3 Be7. White keeps the bishop on c4 for now and chooses the sharpest set-up of all: the Velimirović Attack.',
          arrows: [['c4', 'e6', 'yellow']]
        },
        15: {
          title: 'The queen clears d1',
          text: '8.Qe2. The queen leaves d1 so White can castle long. From e2 it backs up the c4-bishop and covers g4 for the coming pawn push.',
          arrows: [['e2', 'c4', 'green'], ['e2', 'g4', 'blue']]
        },
        16: {
          title: 'Taking b5 away',
          text: "8...a6. Black takes b5 away from White's pieces and prepares ...b5.",
          arrows: [['a6', 'b5', 'green']]
        },
        17: {
          title: 'White castles long',
          text: "9.O-O-O. White's king goes to the queenside. The g- and h-pawns are free to attack.",
          marks: ['c1']
        },
        18: {
          title: 'The queen on the c-file',
          text: "9...Qc7. The queen joins the half-open c-file, the file White's king is standing on.",
          arrows: [['c7', 'c2', 'blue']]
        },
        19: {
          title: 'The bishop steps back',
          text: '10.Bb3. The bishop leaves c4, where ...b5 or ...Na5 would hit it, and stays on the diagonal toward e6.',
          arrows: [['b3', 'e6', 'yellow']]
        },
        20: {
          title: 'Hunting the bishop',
          text: "10...Na5. Black goes after the Sozin bishop. Trading it off takes the sting out of White's pressure on e6.",
          arrows: [['a5', 'b3', 'red']]
        },
        21: {
          title: 'The storm begins',
          text: '11.g4. Next comes g5, chasing the f6-knight away from the center.',
          arrows: [['g4', 'g5', 'blue']]
        },
        22: {
          title: 'Counterattack',
          text: '11...b5. Black answers on the other wing: ...b4 would hit the c3-knight.',
          arrows: [['b5', 'b4', 'blue']]
        },
        23: {
          title: 'The knight is kicked',
          text: '12.g5. The pawn attacks the f6-knight, which has to move.',
          arrows: [['g5', 'f6', 'red']]
        },
        24: {
          title: 'Bishop taken, with check',
          text: '12...Nxb3+. Before the f6-knight retreats, Black takes the bishop with check.',
          arrows: [['b3', 'c1', 'red']]
        },
        25: {
          title: 'Doubled b-pawns',
          text: "13.axb3. White takes back. The doubled pawns on b2 and b3 still shield White's king.",
          marks: ['b2', 'b3']
        },
        26: {
          title: 'The knight steps back',
          text: "13...Nd7. The f6-knight retreats. Black's king is still on e8. Now comes White's famous idea.",
          marks: ['e8']
        },
        27: {
          title: 'The knight sacrifice',
          text: '14.Nf5. White offers a knight. If Black takes, the e-file and the d5-square open up near Black\'s king.',
          arrows: [['d4', 'f5', 'yellow']],
          ann: '!?'
        },
        28: {
          title: 'Black accepts',
          text: '14...exf5. Taking is best. If Black declines, the knight on f5 keeps hitting e7 and g7, and White is better.',
          marks: ['f5']
        },
        29: {
          title: 'The second knight jumps in',
          text: '15.Nd5. The other knight lands on d5 with gain of time: it attacks the queen on c7 and the bishop on e7.',
          arrows: [['d5', 'c7', 'red'], ['d5', 'e7', 'red']]
        },
        30: {
          title: 'The queen steps back',
          text: '15...Qd8. The queen retreats and guards the e7-bishop.',
          arrows: [['d8', 'e7', 'green']]
        },
        31: {
          title: 'A knight for a pawn',
          text: "16.exf5. White is a knight for a pawn down. In return there are no pawns left on the e-file, Black's king is stuck in the middle, and the d5-knight is very strong. With exact defense Black holds, and the position is level.",
          marks: ['e8', 'd5']
        }
      }
    },
    {
      kind: 'text',
      title: 'Sound, but not winning',
      body:
        "The 14.Nf5 sacrifice is famous, and you will often read that it wins. It doesn't. Modern engines say that after 14...exf5 15.Nd5 Qd8 16.exf5 the position is **level**: White has real attacking chances, but Black can hold with exact moves.\n\nThat is still a big practical weapon. Black must find the right defensive moves, and one slip can lose quickly. For White, it is a sacrifice to play when you know the ideas well. For Black, it is a line to study before your opponent does."
    }
  ],
  takeaway:
    'The Sozin bishop aims at f7, and at e6 after ...e6. Black can blunt it with ...e6, chase the knight first with 6...Qb6, or trade the bishop with ...Na5. In the Velimirović, 14.Nf5 is a sound sacrifice, but the position is level, not winning.',
  lookAhead: "Next: a famous trap in the Sozin. If Black plays 6...g6 and later takes on e5, the bishop's aim at f7 wins the queen.",
  drills: [
    {
      title: 'The Sozin set-up',
      prompt: "You're White in the Classical. Aim your bishop at Black's kingside, keep it safe on the same diagonal after ...e6, and guard the d4-knight.",
      moves: `${SOZIN} e6 Bb3 Be7 Be3`,
      start: 10,
      side: 'white',
      hints: [
        'Put the light-squared bishop on the diagonal that leads to f7.',
        'After 6...e6, step the bishop back one square on the same diagonal. Then develop the other bishop to guard d4.'
      ],
      success: '6.Bc4, 7.Bb3 and 8.Be3. The bishop is safe from ...Na5 and ...d5, and the d4-knight is guarded.'
    },
    {
      title: 'Meet the double attack',
      prompt: "You're White. Black just played 6...Qb6, attacking d4 twice and eyeing b2. Save the knight by retreating it toward the queenside, without giving up b2.",
      moves: `${SOZIN} Qb6 Nb3`,
      start: 11,
      side: 'white',
      hints: ['Defending d4 with the c1-bishop would leave b2 unguarded.', 'Move the knight back to a square on the queenside.'],
      success: '7.Nb3. The knight is safe, and the c1-bishop still guards b2.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Where does the Sozin bishop on c4 aim?',
      moves: SOZIN,
      orientation: 'white',
      choices: [
        { text: 'At f7, and at e6 once Black plays ...e6', correct: true, why: "Right. The diagonal runs c4, d5, e6, f7, next to Black's king." },
        { text: 'At the c6-knight', why: 'c4 and c6 are on the same file, and a bishop only moves diagonally. It aims at f7 and e6.' },
        { text: 'At the d6-pawn', why: 'd6 is not on either of the bishop\'s diagonals. The target is f7, and e6 after ...e6.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Black has just played 6...Qb6. What should White play?',
      moves: `${SOZIN} Qb6`,
      orientation: 'white',
      choices: [
        { text: '7.Nb3', correct: true, why: 'Right. The knight steps back, the c1-bishop still guards b2, and the position is roughly level.' },
        { text: '7.Be3', why: 'It guards d4 but takes the bishop away from b2. 7...Qxb2 leaves Black better.' },
        { text: '7.O-O', why: "That loses a piece: 7...Qxd4 8.Qxd4 Nxd4. The d4-knight was attacked twice and defended once." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does Black play 10...Na5 in the Velimirović?',
      moves: `${SOZIN} e6 Be3 Be7 Qe2 a6 O-O-O Qc7 Bb3`,
      orientation: 'black',
      choices: [
        { text: 'To trade off the b3-bishop that aims at e6', correct: true, why: "Yes. That bishop is White's key attacker. After ...Nxb3+ axb3, the pressure on e6 is gone." },
        { text: 'To attack the e4-pawn', why: 'A knight on a5 does not reach e4. Its target is the bishop on b3.' },
        { text: 'To start a kingside attack', why: 'The a5-square is on the queenside. The knight is there to trade off the Sozin bishop.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 14.Nf5 exf5 15.Nd5 Qd8 16.exf5, what is the honest verdict?',
      moves: VELI,
      orientation: 'white',
      choices: [
        { text: 'Roughly level: a sound sacrifice, but not a winning one', correct: true, why: 'Right. White has a dangerous attack for the knight, but with exact defense Black holds.' },
        { text: 'White wins by force', why: "That's the old legend. Modern engines find a defense for Black, and the position is level." },
        { text: 'White has simply lost a knight for a pawn', why: "Material isn't everything here. Black's king is stuck in the middle, and White has full compensation." }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Which variation is this?',
      moves: SOZIN,
      orientation: 'white',
      choices: [
        { text: 'The Sozin Attack', correct: true, why: 'Yes. 6.Bc4 against the Classical. With Qe2 and O-O-O it becomes the Velimirović Attack.' },
        { text: 'The Richter–Rauzer', why: 'The Richter–Rauzer is 6.Bg5, with the bishop eyeing the f6-knight.' },
        { text: 'The Boleslavsky', why: 'The Boleslavsky is 6.Be2 e5, a quieter line.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Velimirović Attack, what is the main point of White\'s g4–g5?',
      choices: [
        { text: 'To drive the f6-knight away from the center', correct: true, why: "Right. Without the f6-knight, Black's center and king lose their best defender, and White's pieces can jump in." },
        { text: 'To win the h7-pawn', why: 'The g-pawn is not aimed at h7. It kicks the f6-knight.' },
        { text: 'To make room for castling kingside', why: 'White has already castled queenside. The g-pawn push is an attack, not a castling move.' }
      ]
    }
  ],
  key: { name: 'Sozin Attack: 6.Bc4', moves: SOZIN, orientation: 'white' },
  terms: [
    { term: 'Double attack', meaning: 'One move that creates two threats at once, so the opponent cannot meet both.' },
    { term: 'Sacrifice', meaning: 'Giving up material on purpose to get something else, such as an attack or better pieces.' },
    { term: 'Sound', meaning: 'A sacrifice is sound if the opponent cannot refute it: with best play the sacrificing side is at least not worse.' },
    { term: 'Gain of time', meaning: 'Making a useful move that also forces the opponent to react, for example by attacking a piece.' }
  ]
})
