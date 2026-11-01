import { defineModule } from '../../../types'
import { MOSCOW } from '../lines'

/** moscow-nc6: 3...Nc6 4.O-O Bd7 5.Re1 Nf6 6.c3 a6 7.Bf1 Bg4 8.d3 e6 */
const NC6 = `${MOSCOW} Nc6 O-O Bd7 Re1 Nf6 c3 a6 Bf1 Bg4 d3 e6`
/** moscow-nd7: 3...Nd7 4.d4 Nf6 5.Nc3 cxd4 6.Qxd4 e5 7.Qd3 h6 8.Nd2 */
const ND7 = `${MOSCOW} Nd7 d4 Nf6 Nc3 cxd4 Qxd4 e5 Qd3 h6 Nd2`

export default defineModule({
  id: '9.5',
  title: 'Moscow: 3...Nc6 and 3...Nd7',
  minutes: 11,
  level: 2,
  goals: [
    'Block the check with a knight and keep more pieces on the board',
    'Handle the pin: ...Bd7 against 3...Nc6, ...a6 and ...Bg4',
    'Know the sharp 3...Nd7 4.d4, and why the queen is safe on d4 here'
  ],
  intro:
    "Against 3.Bb5+, Black doesn't have to offer the bishop trade. A knight can block the check instead, on c6 or on d7. Then Black keeps both bishops, but the blocking knight is pinned to the king. How does each side handle that?",
  sections: [
    {
      kind: 'walkthrough',
      title: '3...Nc6: unpin, then ask the bishop',
      intro: 'Watch the c6-knight. First it is pinned, then Black frees it, then Black asks the bishop to decide.',
      moves: NC6,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The Moscow check',
          text: '3.Bb5+. This time Black does not want to trade the light-squared bishops.',
          arrows: [['b5', 'e8', 'red']]
        },
        6: {
          title: 'A knight blocks',
          text: '3...Nc6. The knight blocks the check, but now it is pinned: with d7 empty, it cannot move while the bishop stays on b5. In return Black keeps the c8-bishop.',
          arrows: [['b5', 'c6', 'red'], ['c6', 'e8', 'red']],
          marks: ['c6']
        },
        7: {
          title: 'White castles',
          text: '4.O-O. No hurry for White. The pin will not run away.'
        },
        8: {
          title: 'Breaking the pin',
          text: '4...Bd7. Now the bishop stands between the knight and the king, so the knight is free to move again.',
          arrows: [['d7', 'c6', 'green']]
        },
        9: {
          title: 'The rook supports e4',
          text: '5.Re1. The rook backs up e4. White is preparing c3 and d4.',
          arrows: [['e1', 'e4', 'green']]
        },
        10: {
          title: 'Hitting e4',
          text: '5...Nf6. The knight develops and attacks the e4-pawn.',
          arrows: [['f6', 'e4', 'red']]
        },
        11: {
          title: 'Getting ready for d4',
          text: '6.c3. White prepares d4, the same idea as in Module 9.4.',
          arrows: [['c3', 'd4', 'green']]
        },
        12: {
          title: 'Asking the question',
          text: '6...a6. Black asks the bishop to take on c6 or to go back.',
          arrows: [['a6', 'b5', 'red']]
        },
        13: {
          title: 'The bishop goes home',
          text: '7.Bf1. White keeps the bishop, just as in the Rossolimo with 3...e6 (Module 9.3). On f1 it does not block the e1-rook.',
          arrows: [['b5', 'f1', 'blue']]
        },
        14: {
          title: 'A pin of Black\'s own',
          text: "7...Bg4. White's bishop has left b5, so the d7-bishop is no longer needed as a shield. It goes to g4 and pins the f3-knight to the queen. That knight guards d4 and e5, so this puts pressure on White's center.",
          arrows: [['g4', 'f3', 'red'], ['f3', 'd1', 'red']]
        },
        15: {
          title: 'The quiet choice',
          text: '8.d3. White supports e4 and opens the c1-bishop. The sharper 8.d4 is also good, and the engine likes it a little more.',
          arrows: [['d3', 'e4', 'green']]
        },
        16: {
          title: 'All pieces still on',
          text: '8...e6. Black opens the f8-bishop. White is slightly better, but nothing has been traded, so there is plenty of play left for both sides.',
          arrows: [['f8', 'e7', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '3...Nd7: the sharpest block',
      intro: "Now the other knight blocks. White answers by opening the center at once.",
      moves: ND7,
      start: 5,
      orientation: 'white',
      steps: {
        5: {
          title: 'Check again',
          text: '3.Bb5+. White gives the Moscow check.',
          arrows: [['b5', 'e8', 'red']]
        },
        6: {
          title: 'The other knight',
          text: '3...Nd7. The b8-knight blocks. It is pinned too, but Black keeps both bishops on the board.',
          arrows: [['b5', 'd7', 'red']],
          marks: ['d7']
        },
        7: {
          title: 'Open the center',
          text: '4.d4. White strikes in the center while the d7-knight is pinned and cannot help.',
          arrows: [['d4', 'c5', 'red']]
        },
        8: {
          title: 'The other knight comes out',
          text: '4...Nf6. Black develops the g8-knight and hits e4.',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'e4 is covered',
          text: '5.Nc3. The knight guards e4.',
          arrows: [['c3', 'e4', 'green']]
        },
        10: {
          title: 'Black trades',
          text: '5...cxd4. The usual Sicilian trade.'
        },
        11: {
          title: 'The queen takes back',
          text: "6.Qxd4. In Module 1.5 you saw that an early queen on d4 gets hit by ...Nc6. Here Black's queen's knight is already on d7, so that trick is not available.",
          marks: ['c6']
        },
        12: {
          title: 'A pawn chases the queen',
          text: '6...e5. Black gains time on the queen with a pawn. The price is the familiar hole on d5 and the backward d6-pawn (Module 1.6).',
          arrows: [['e5', 'd4', 'red']],
          marks: ['d5']
        },
        13: {
          title: 'The queen steps back',
          text: '7.Qd3. From d3 the queen watches d5 and the d6-pawn.',
          arrows: [['d3', 'd6', 'blue']],
          marks: ['d5']
        },
        14: {
          title: 'No Bg5',
          text: '7...h6. Black stops Bg5. From g5 the bishop could take on f6 and remove a guard of d5.',
          arrows: [['h6', 'g5', 'green']],
          marks: ['d5']
        },
        15: {
          title: 'A knight for c4',
          text: '8.Nd2. The knight heads for c4, where it hits d6, and later for e3, where it eyes d5. The game is roughly level.',
          arrows: [['d2', 'c4', 'blue'], ['c4', 'd6', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Three ways to block the check',
      body:
        "**3...Bd7** (Module 9.4) trades the light-squared bishops. It is the simplest choice, and it gives Black a little more room.\n\n**3...Nc6** keeps all the pieces. The knight is pinned at first, so Black frees it with ...Bd7, then asks the bishop with ...a6. White usually keeps a small edge.\n\n**3...Nd7** is the sharpest. Black keeps both bishops, and White answers with an early d4. Black must know the ...e5 idea and the d5 square.\n\nFor White, the plans stay the same in all three: castle or play d4, guard e4, and aim at d5 whenever Black plays ...e5."
    },
    {
      kind: 'tip',
      title: 'Free a pinned knight',
      body:
        "A pinned knight can be freed by putting a piece between it and the king, like ...Bd7 here, or by asking the pinning piece to leave, like ...a6. Until then, don't count that knight as a defender: it cannot move."
    }
  ],
  takeaway:
    "3...Nc6 and 3...Nd7 keep more pieces, but the blocking knight is pinned. Against 3...Nc6, Black unpins with ...Bd7, then plays ...a6 and ...Bg4. Against 3...Nd7, White opens the center with 4.d4; after ...cxd4, Qxd4 and ...e5, the fight is about the d5 square.",
  lookAhead:
    "Module 9.6 shows a completely different way for White to avoid the Open Sicilian: the slow King's Indian Attack set-up with d3, g3 and Bg2.",
  drills: [
    {
      title: 'Unpin and ask',
      prompt: "You're Black. You blocked the check with 3...Nc6, and White has castled. Free the knight, develop, ask the bishop, then pin White's knight and open your last bishop.",
      moves: NC6,
      start: 7,
      side: 'black',
      hints: [
        'First put a piece between the c6-knight and your king.',
        'Then ...Nf6, ...a6, and after 7.Bf1 bring the d7-bishop to g4. Finish with a pawn move that frees the f8-bishop.'
      ],
      success: '4...Bd7, 5...Nf6, 6...a6, 7...Bg4 and 8...e6. All your pieces are coming out, and nothing has been traded.'
    },
    {
      title: 'Against 3...Nd7',
      prompt: "You're White. Black has blocked the check with 3...Nd7. Open the center, take back on d4 with the queen, and keep your eye on d5.",
      moves: ND7,
      start: 6,
      side: 'white',
      hints: [
        'Strike in the center while the d7-knight is pinned.',
        'Guard e4 with a knight, take back on d4 with the queen, retreat it to d3 after ...e5, then send the f3-knight toward c4.'
      ],
      success: '4.d4, 5.Nc3, 6.Qxd4, 7.Qd3 and 8.Nd2. The knight is heading for c4 and e3, toward d5.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 3...Nc6, why can the c6-knight not move?',
      moves: `${MOSCOW} Nc6`,
      orientation: 'black',
      choices: [
        { text: 'It is pinned: the b5-bishop would then attack the king', correct: true, why: 'Right. The d7-square is empty, so the line from b5 to e8 runs straight through the knight.' },
        { text: 'It is trapped by White\'s pawns', why: 'The knight has squares to go to. The problem is the pin against the king.' },
        { text: 'It has to guard the d4-square', why: 'It does guard d4, but that is a choice. The pin is a rule: moving it would be illegal.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does Black play 4...Bd7 here?',
      moves: `${MOSCOW} Nc6 O-O Bd7`,
      orientation: 'black',
      choices: [
        { text: 'To break the pin, so the c6-knight can move again', correct: true, why: 'Yes. With the bishop on d7, a knight move no longer exposes the king.' },
        { text: 'To offer a trade of bishops on d7', why: 'White\'s bishop is on b5 and cannot reach d7 while the knight stands on c6. The point is to unpin.' },
        { text: 'To prepare ...Bxb5', why: 'The c6-knight is in the way, so ...Bxb5 is not possible. ...Bd7 simply breaks the pin.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 3...Nd7 line, why is 6.Qxd4 fine for White, unlike the early queen moves in Module 1.5?',
      moves: ND7.split(' ').slice(0, 11).join(' '),
      orientation: 'white',
      choices: [
        { text: "Black's queen's knight is on d7, so ...Nc6 can't chase the queen", correct: true, why: 'Right. Black can still hit the queen with ...e5, but that costs a hole on d5.' },
        { text: 'Black has no way to attack the queen at all', why: 'Black can: 6...e5 attacks it. But that pawn move leaves a hole on d5.' },
        { text: 'A queen is always safe in the center', why: "No: in the center a queen is easy to attack. Here it's fine only because ...Nc6 is not possible." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does Black play 7...h6?',
      moves: ND7.split(' ').slice(0, 14).join(' '),
      orientation: 'black',
      choices: [
        { text: 'To stop Bg5 and Bxf6, which would remove a guard of d5', correct: true, why: 'Yes. The f6-knight is Black\'s main defender of d5, so Black keeps White\'s bishop off g5.' },
        { text: 'To prepare ...g5 and a kingside attack', why: "Black's king is still in the center. ...h6 is a defensive move about the d5 square." },
        { text: 'To make an escape square for the king', why: 'Black has not castled. The point is the g5-square.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Which answer to 3.Bb5+ leads at once to a trade of light-squared bishops?',
      moves: MOSCOW,
      orientation: 'black',
      choices: [
        { text: '3...Bd7', correct: true, why: 'Right. After 4.Bxd7+ Qxd7 both light-squared bishops are gone (Module 9.4).' },
        { text: '3...Nc6', why: 'The knight blocks, so the bishops stay on. Black later breaks the pin with ...Bd7.' },
        { text: '3...Nd7', why: 'The knight blocks, and Black keeps both bishops. White answers with 4.d4.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the 3...Nd7 line, where is the knight going after 8.Nd2?',
      moves: ND7,
      orientation: 'white',
      choices: [
        { text: 'To c4, hitting d6, and later to e3, eyeing d5', correct: true, why: 'Yes. Both targets come from ...e5: the backward d6-pawn and the d5 hole.' },
        { text: 'To f1 and g3, for a kingside attack', why: 'That is a typical Ruy Lopez maneuver, but here the targets are d6 and d5 on the queenside and in the center.' },
        { text: 'To b3, to guard the c5-square', why: 'The knight is heading for c4, where it attacks the d6-pawn.' }
      ]
    }
  ],
  key: { name: 'Moscow: 3...Nd7, the sharpest block', moves: `${MOSCOW} Nd7`, orientation: 'white' },
  terms: [
    { term: 'Absolute pin', meaning: 'A pin against the king. The pinned piece is not allowed to move at all.' },
    { term: 'Backward pawn', meaning: 'A pawn that has fallen behind its neighbors and cannot safely advance, like d6 after ...e5.' },
    { term: 'Hole', meaning: 'A square that no enemy pawn can ever attack again, a perfect home for a piece. After ...e5 and ...d6, d5 is a hole.' }
  ]
})
