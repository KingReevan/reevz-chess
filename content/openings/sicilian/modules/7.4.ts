import { defineModule } from '../../../types'
import { ALAPIN } from '../lines'

/** alapin-nf6: 3.e5 Nd5 4.d4 cxd4 5.Nf3 Nc6 6.Bc4 Nb6 7.Bb3 d5 8.exd6 Qxd6 9.O-O Be6 */
const NF3 = `${ALAPIN} Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6 Bc4 Nb6 Bb3 d5 exd6 Qxd6 O-O Be6`
/** alapin-nf6-cxd4: 5.cxd4 d6 6.Nf3 Nc6 7.Bc4 Nb6 8.Bb5 dxe5 9.Nxe5 Bd7 */
const CXD4 = `${ALAPIN} Nf6 e5 Nd5 d4 cxd4 cxd4 d6 Nf3 Nc6 Bc4 Nb6 Bb5 dxe5 Nxe5 Bd7`
/** alapin-ivanchuk: 4.Nf3 Nc6 5.Bc4 Nb6 6.Bb3 c4 7.Bc2 Qc7 8.Qe2 g5 */
const IVANCHUK = `${ALAPIN} Nf6 e5 Nd5 Nf3 Nc6 Bc4 Nb6 Bb3 c4 Bc2 Qc7 Qe2 g5`
/** 3...Ne4? 4.d3! traps the knight: 4...Nxf2 5.Kxf2 (engine-checked) */
const NE4 = `${ALAPIN} Nf6 e5 Ne4 d3 Nxf2 Kxf2`

export default defineModule({
  id: '7.4',
  title: '2...Nf6: hitting e4',
  minutes: 12,
  level: 2,
  goals: [
    'See why 3...Nd5 is the right square after 3.e5',
    'Learn the two ways to challenge e5: ...d5 and ...d6',
    "Meet Ivanchuk's ...g5 idea, and avoid the 3...Ne4? trap"
  ],
  intro:
    "2...Nf6 attacks e4 at once, and White's usual answer is to push the pawn: 3.e5. The knight goes to d5, and the e5-pawn now cramps Black. How does Black break up that pawn, and what should White do about it?",
  sections: [
    {
      kind: 'walkthrough',
      title: '5.Nf3: the ...d5 strike',
      intro: 'White develops before taking back on d4. Watch how Black gets rid of the e5-pawn.',
      moves: NF3,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'A pawn up, for now',
          text: '5...Nc6. Black has taken on d4, and White has not taken back yet, so Black is a pawn up for the moment. The knight guards that pawn and attacks e5.',
          arrows: [['c6', 'e5', 'red'], ['c6', 'd4', 'green']]
        },
        11: {
          title: 'The bishop hits d5',
          text: '6.Bc4. The bishop attacks the d5-knight, which has no defender.',
          arrows: [['c4', 'd5', 'red']]
        },
        12: {
          title: 'Knight back, bishop attacked',
          text: '6...Nb6. The knight steps back and attacks the bishop in turn.',
          arrows: [['b6', 'c4', 'red']]
        },
        13: {
          title: 'Eyes on f7',
          text: '7.Bb3. The bishop keeps its diagonal toward f7.',
          arrows: [['b3', 'f7', 'blue']]
        },
        14: {
          title: 'Strike at the center',
          text: "7...d5. If White ignores this pawn, it blocks the b3-bishop's diagonal and Black is comfortable. So White takes it in a special way.",
          arrows: [['e5', 'd6', 'blue']],
          marks: ['d5']
        },
        15: {
          title: 'En passant',
          text: "8.exd6. The e5-pawn takes the d-pawn as if it had moved only one square. This capture is called en passant. White's cramping pawn on e5 is gone.",
          marks: ['d6']
        },
        16: {
          title: 'The queen takes back',
          text: '8...Qxd6. The queen recaptures and develops. Black is still a pawn up, thanks to the d4-pawn.',
          marks: ['d4']
        },
        17: {
          title: 'White castles',
          text: '9.O-O. White gets the king safe and will soon win back the d4-pawn with Nxd4 or cxd4.',
          arrows: [['f3', 'd4', 'red'], ['c3', 'd4', 'red']]
        },
        18: {
          title: "Trade White's best bishop",
          text: "9...Be6. Black offers to trade the b3-bishop, White's most dangerous attacker. Once White wins back d4, material is level and the position is roughly equal.",
          arrows: [['e6', 'b3', 'yellow']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '5.cxd4: the ...d6 strike',
      intro: 'White takes back at once with the c-pawn. Black attacks e5 with the other pawn move, ...d6.',
      moves: CXD4,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'Black trades',
          text: '4...cxd4. Black swaps the c-pawn for the d-pawn.',
          marks: ['d4']
        },
        9: {
          title: 'Pawn takes back',
          text: '5.cxd4. White keeps two pawns in the center, on d4 and e5.',
          marks: ['d4', 'e5']
        },
        10: {
          title: 'Hit e5 at once',
          text: '5...d6. The pawn attacks e5. Black wants to break up the pawn that cramps the f6-square.',
          arrows: [['d6', 'e5', 'red']]
        },
        11: {
          title: 'A second guard',
          text: '6.Nf3. The knight defends e5, together with the d4-pawn.',
          arrows: [['f3', 'e5', 'green'], ['d4', 'e5', 'green']]
        },
        12: {
          title: 'A second attacker',
          text: '6...Nc6. Now two black units attack e5, and the knight also hits d4.',
          arrows: [['c6', 'e5', 'red'], ['d6', 'e5', 'red']]
        },
        13: {
          title: 'The bishop hits d5',
          text: '7.Bc4. Same idea as before: the bishop attacks the d5-knight.',
          arrows: [['c4', 'd5', 'red']]
        },
        14: {
          title: 'Knight back again',
          text: '7...Nb6. The knight steps back and attacks the bishop.',
          arrows: [['b6', 'c4', 'red']]
        },
        15: {
          title: 'A pin',
          text: "8.Bb5. The bishop pins the c6-knight to the black king. A pinned knight can't move, so it no longer really helps against e5 or d4.",
          arrows: [['b5', 'e8', 'red']],
          marks: ['c6']
        },
        16: {
          title: 'Black takes anyway',
          text: '8...dxe5. Black removes the e5-pawn.',
          marks: ['e5']
        },
        17: {
          title: 'Pressure on the pinned knight',
          text: '9.Nxe5. The knight takes back, and now the b5-bishop and the e5-knight both attack the pinned c6-knight.',
          arrows: [['e5', 'c6', 'red'], ['b5', 'c6', 'red']]
        },
        18: {
          title: 'Break the pin',
          text: "9...Bd7. The bishop steps between, so the knight is no longer pinned to the king. The position is roughly equal. Note White's d4-pawn: it is isolated, just like in Module 7.3.",
          arrows: [['d7', 'c6', 'green']],
          marks: ['d4']
        }
      }
    },
    {
      kind: 'text',
      title: 'Two ways to challenge e5',
      body:
        "After 3.e5 Nd5 the e5-pawn takes the f6-square from Black's knights and gives White space. Black should not let it stay there comfortably.\n\n**...d6** attacks the pawn directly. **...d5** works differently: if White takes en passant, the e5-pawn disappears; if not, the d5-pawn blocks the diagonal of White's bishop on b3 or c4.\n\nFor White, the plan is simple: develop quickly (Nf3, Bc4, O-O), win back the d4-pawn if Black has taken it, and use the bishop's pressure on f7."
    },
    {
      kind: 'walkthrough',
      title: "Ivanchuk's idea: ...g5!?",
      intro: 'White delays d4. Black goes after the e5-pawn with a surprising pawn move. This line is known as the Ivanchuk Line.',
      moves: IVANCHUK,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The usual start',
          text: '3...Nd5. Black has played 2...Nf6 and 3...Nd5 as usual.',
          marks: ['d5']
        },
        7: {
          title: 'Develop first',
          text: '4.Nf3. White develops and keeps d2–d4 for later.',
          arrows: [['f3', 'e5', 'green']]
        },
        8: {
          title: 'Hit e5',
          text: '4...Nc6. The knight attacks the e5-pawn.',
          arrows: [['c6', 'e5', 'red']]
        },
        9: {
          title: 'The bishop hits d5',
          text: '5.Bc4. The bishop attacks the d5-knight, as in the other lines.',
          arrows: [['c4', 'd5', 'red']]
        },
        10: {
          title: 'Knight back',
          text: '5...Nb6. The knight steps back and attacks the bishop.',
          arrows: [['b6', 'c4', 'red']]
        },
        11: {
          title: 'Bishop back',
          text: '6.Bb3. The bishop keeps aiming at f7.',
          arrows: [['b3', 'f7', 'blue']]
        },
        12: {
          title: 'Chase it again',
          text: '6...c4. The pawn attacks the bishop a second time and grabs space on the queenside.',
          arrows: [['c4', 'b3', 'red']]
        },
        13: {
          title: 'A new diagonal',
          text: '7.Bc2. The bishop retreats. From c2 it points toward h7 instead.',
          arrows: [['c2', 'h7', 'blue']]
        },
        14: {
          title: 'Two attackers',
          text: '7...Qc7. The queen joins the c6-knight in attacking e5. Only the f3-knight defends it.',
          arrows: [['c7', 'e5', 'red'], ['c6', 'e5', 'red']]
        },
        15: {
          title: 'White holds',
          text: '8.Qe2. The queen adds a second guard to e5.',
          arrows: [['e2', 'e5', 'green']]
        },
        16: {
          title: 'The g-pawn joins in',
          text: '8...g5. The idea is ...g4, kicking the f3-knight, one of e5\'s two guards. If 9.Nxg5, the knight has left e5 and 9...Qxe5 wins the pawn back. Sharp and rare: the engine gives White a slight edge.',
          arrows: [['g5', 'g4', 'blue'], ['g4', 'f3', 'red']],
          ann: '!?'
        }
      }
    },
    {
      kind: 'warning',
      title: 'Not 3...Ne4?',
      body:
        "After 3.e5, the knight must go to d5. **3...Ne4?** looks active, but **4.d3!** attacks it, and every square it could go to is covered: d6 and f6 by the e5-pawn, g5 by the c1-bishop, and g3, d2 and c3 by other White pawns and pieces. Black's best is to give the knight for a pawn with 4...Nxf2 5.Kxf2, and White is winning. (3...Ng4?? is even worse: 4.Qxg4.)"
    }
  ],
  takeaway:
    'After 2...Nf6 3.e5, play 3...Nd5 and challenge the e5-pawn with ...d6 or ...d5. Against 5.Nf3, ...Nb6 and ...d5 work well; against 5.cxd4, ...d6 and ...Nc6. Never 3...Ne4?, which 4.d3! traps.',
  lookAhead: "Module 7.5 moves to White's other way to avoid the Open Sicilian: the Smith–Morra Gambit, 2.d4 cxd4 3.c3.",
  drills: [
    {
      title: 'Trap the knight',
      prompt: "You're White. Black has just played 3...Ne4?. Attack the knight so that it has no safe square, then take the knight when it grabs a pawn.",
      moves: NE4,
      start: 6,
      side: 'white',
      hints: ['Which pawn move attacks e4?', 'Check every square the knight could go to after 4.d3.'],
      success: '4.d3! traps the knight, and after 4...Nxf2 5.Kxf2 you have a knight for a pawn.'
    },
    {
      title: 'The ...d5 strike',
      prompt: "You're Black. White has played 5.Nf3 without taking back on d4. Develop, chase the bishop, and break up the e5-pawn.",
      moves: NF3,
      start: 9,
      side: 'black',
      hints: ['First guard your d4-pawn with a knight.', 'When the bishop attacks d5, retreat with a threat. Then strike with the d-pawn.'],
      success: '...Nc6, ...Nb6, ...d5 and ...Qxd6, then ...Be6 to trade the b3-bishop. Black is comfortable.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 2...Nf6 3.e5, why is 3...Nd5 better than 3...Ne4?',
      moves: `${ALAPIN} Nf6 e5`,
      orientation: 'black',
      choices: [
        { text: 'On e4 the knight is trapped by 4.d3; on d5 it is central and safe for now', correct: true, why: 'Right. After 3...Ne4? 4.d3! every escape square is covered, and Black loses a knight for a pawn.' },
        { text: '3...Ne4 is better, because it attacks f2', why: 'The f2-pawn is guarded by the king. After 4.d3!, the knight has nowhere to go.' },
        { text: 'They are equally good', why: 'Not at all. 3...Nd5 is the main move, and 3...Ne4? loses a piece to 4.d3!.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. Which pawn move attacks the e5-pawn at once?',
      moves: CXD4.split(' ').slice(0, 9).join(' '),
      orientation: 'black',
      choices: [
        { text: '5...d6', correct: true, why: 'Yes. The pawn hits e5 straight away, and Black follows with ...Nc6.' },
        { text: '5...e6', why: 'A solid move, but it does not attack e5. Black wants to challenge that pawn.' },
        { text: '5...g6', why: 'It prepares ...Bg7 but does nothing against e5 for now.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. The c6-knight is pinned, and two White pieces attack it. What should Black play?',
      moves: CXD4.split(' ').slice(0, 17).join(' '),
      orientation: 'black',
      choices: [
        { text: '9...Bd7', correct: true, why: 'Right. The bishop breaks the pin, and the position is roughly equal.' },
        { text: '9...e6', why: 'After 10.Nxc6 bxc6 11.Bxc6+ Bd7 12.Bxa8, White wins the exchange (a rook for a bishop).' },
        { text: '9...a6', why: 'After 10.Bxc6+ bxc6, Black\'s pawns are broken and White is clearly better.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'What is the idea of 8...g5!? in the Ivanchuk line?',
      moves: IVANCHUK,
      orientation: 'black',
      choices: [
        { text: 'To play ...g4 and kick the f3-knight, one of the guards of e5', correct: true, why: 'Exactly. Without the knight, the e5-pawn has only the queen to defend it.' },
        { text: "To trap White's queen", why: "The queen on e2 is not in danger. The target is the f3-knight that guards e5." },
        { text: 'To prepare castling queenside', why: "...g5 has nothing to do with castling. It's an attack on e5's defender." }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'White to move. Black has just played 3...Ne4. What is the strongest move?',
      moves: `${ALAPIN} Nf6 e5 Ne4`,
      orientation: 'white',
      choices: [
        { text: '4.d3', correct: true, why: 'Yes. The pawn attacks the knight, and every square it could go to is covered. Black loses a knight for a pawn.' },
        { text: '4.d4', why: 'White is clearly better, but the d4-pawn does not attack e4. The knight stays where it is for now.' },
        { text: '4.Qe2', why: 'It attacks the knight, but 4...Ng5 escapes, heading for e6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 5.Nf3 line, why does White usually answer 7...d5 with 8.exd6 en passant?',
      moves: NF3.split(' ').slice(0, 14).join(' '),
      orientation: 'white',
      choices: [
        { text: "Otherwise the d5-pawn blocks the b3-bishop's diagonal, and Black is comfortable", correct: true, why: "Right. After 8.exd6 Qxd6, the bishop's diagonal stays open and White develops quickly." },
        { text: 'Because 8.exd6 wins a pawn', why: 'It does not. Black takes back with 8...Qxd6, and Black is still the one with an extra pawn on d4 for now.' },
        { text: 'Because the d5-pawn attacks the b3-bishop', why: 'A pawn on d5 attacks c4 and e4, not b3. The problem is that it would block the bishop.' }
      ]
    }
  ],
  key: { name: 'Alapin: 2...Nf6 3.e5 Nd5', moves: `${ALAPIN} Nf6 e5 Nd5`, orientation: 'black' },
  terms: [
    { term: 'En passant', meaning: 'A pawn that moves two squares can be taken by an enemy pawn beside it as if it had moved one square. It must be done at once.' },
    { term: 'Trapped piece', meaning: 'A piece that is attacked and has no safe square to go to.' },
    { term: 'Cramping pawn', meaning: 'An advanced pawn that takes squares away from the enemy pieces, like White\'s pawn on e5 here.' }
  ]
})
