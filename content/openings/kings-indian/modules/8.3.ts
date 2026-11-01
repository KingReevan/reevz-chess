import { defineModule } from '../../../types'
import { FIANCHETTO } from '../lines'

/** fianchetto-nbd7-e5: 6...Nbd7 7.Nc3 e5 8.e4 c6 9.h3 */
const MAIN = `${FIANCHETTO} Nbd7 Nc3 e5 e4 c6 h3`
/** fianchetto-long: reached by 3.Nc3, 4.Nf3 and 5.g3 */
const LONG = 'd4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 Nbd7 O-O e5 e4 Re8 h3 exd4 Nxd4 Nc5 Re1 a5'
/** Long Variation up to 10...Nc5: e4 is attacked three times */
const NC5 = 'd4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 Nbd7 O-O e5 e4 Re8 h3 exd4 Nxd4 Nc5'
/** A natural move that drops the e4-pawn (engine-checked) */
const DROP = `${NC5} Be3 Nfxe4 Nxe4 Nxe4`

export default defineModule({
  id: '8.3',
  title: 'Classical Fianchetto: ...Nbd7 and ...e5',
  minutes: 11,
  level: 2,
  goals: [
    'Play the ...Nbd7 and ...e5 plan against the Fianchetto',
    'Know why 9.h3 is such a useful move for White',
    'Count attackers and defenders on e4 after ...exd4 and ...Nc5'
  ],
  intro:
    "Against the Fianchetto, Black can also go for the classic King's Indian break: ...e5. The knight goes to d7 to support it, and White usually answers by building the big center with e2–e4 after all. Who comes out of the center fight better? This module shows two main lines and the square both sides must watch: e4.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main line: 8.e4 c6 9.h3',
      intro: 'Watch how both sides build up in the center without releasing the tension too early.',
      moves: MAIN,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'Time for ...e5',
          text: "6.O-O. Both kings are safe. This time Black aims for the classic King's Indian break, ...e5.",
          arrows: [['e7', 'e5', 'blue']]
        },
        12: {
          title: 'The knight supports e5',
          text: '6...Nbd7. The knight backs up the ...e5 push. It also keeps the c-pawn free to move to c6 later.',
          arrows: [['d7', 'e5', 'green']]
        },
        13: {
          title: 'White develops',
          text: '7.Nc3. The knight comes out and prepares e2–e4.',
          arrows: [['e2', 'e4', 'blue']]
        },
        14: {
          title: 'Strike at d4',
          text: "7...e5. Black hits d4. The position starts to look like a Classical King's Indian, except that White's bishop is on g2.",
          arrows: [['e5', 'd4', 'red']]
        },
        15: {
          title: 'The big center after all',
          text: '8.e4. White puts a third pawn in the center: c4, d4 and e4. Now pawns face each other on d4 and e5. Neither side has to take yet.',
          marks: ['d4', 'e5']
        },
        16: {
          title: 'A flexible pawn move',
          text: '8...c6. The pawn covers d5 and b5, so White\'s pieces can\'t use those squares. It also opens a path for the queen to b6 or a5.',
          arrows: [['c6', 'd5', 'green'], ['d8', 'a5', 'blue']]
        },
        17: {
          title: 'The useful h3',
          text: "9.h3. White stops ...Ng4 and ...Bg4, and prepares Be3 without fear of ...Ng4 hitting the bishop. White keeps a small edge in space, and Black's position is solid.",
          arrows: [['h3', 'g4', 'green']],
          marks: ['g4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The Long Variation: ...exd4 and ...Nc5',
      intro: 'White reached the same set-up with 3.Nc3, 4.Nf3 and 5.g3. This time Black opens the center and goes after e4.',
      moves: LONG,
      start: 14,
      orientation: 'black',
      steps: {
        14: {
          title: 'The same break',
          text: '7...e5. A different move order, the same idea: Black hits d4.',
          arrows: [['e5', 'd4', 'red']]
        },
        15: {
          title: 'White builds the center',
          text: '8.e4. White has pawns on c4, d4 and e4 again.',
          marks: ['c4', 'd4', 'e4']
        },
        16: {
          title: 'Rook to the e-file',
          text: '8...Re8. The rook goes to the e-file. If Black later takes on d4, the e5-pawn leaves the file and the rook will hit e4.',
          arrows: [['e8', 'e5', 'blue']]
        },
        17: {
          title: 'h3 again',
          text: '9.h3. The same useful move as in the main line: no ...Ng4 or ...Bg4, and Be3 becomes possible.',
          marks: ['g4']
        },
        18: {
          title: 'Opening the center',
          text: '9...exd4. Black trades the strong e5-pawn on purpose. The rook now sees down the e-file, and the e4-pawn becomes a target.',
          arrows: [['e8', 'e4', 'red']],
          marks: ['e4']
        },
        19: {
          title: 'Knight takes back',
          text: '10.Nxd4. White recaptures. Now the f3-knight has moved, so the g2-bishop can see e4 and guards it.',
          arrows: [['g2', 'e4', 'green'], ['c3', 'e4', 'green']]
        },
        20: {
          title: 'Three against two',
          text: '10...Nc5. The knight joins the attack on e4. Count them: the c5-knight, the f6-knight and the e8-rook attack e4. Only the c3-knight and the g2-bishop defend it.',
          arrows: [['c5', 'e4', 'red'], ['f6', 'e4', 'red'], ['e8', 'e4', 'red']],
          marks: ['e4']
        },
        21: {
          title: 'A third defender',
          text: '11.Re1. The rook guards e4, so now there are three defenders against three attackers. This is clearly White\'s best move here.',
          arrows: [['e1', 'e4', 'green']],
          ann: '!'
        },
        22: {
          title: 'Securing c5',
          text: '11...a5. The pawn stops b2–b4, which would chase the knight from c5. Black has active pieces and pressure on e4. White has more space and a small edge.',
          arrows: [['a5', 'b4', 'yellow'], ['c5', 'e4', 'red']],
          marks: ['b4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Forget e4, lose a pawn',
      intro: 'Back to the position after 10...Nc5. What if White plays a natural developing move instead of 11.Re1?',
      moves: DROP,
      start: 20,
      orientation: 'black',
      steps: {
        20: {
          title: 'Three attackers',
          text: '10...Nc5. Three black pieces hit e4, and two white pieces guard it. White should add a defender now.',
          arrows: [['c5', 'e4', 'red'], ['f6', 'e4', 'red'], ['e8', 'e4', 'red']],
          marks: ['e4']
        },
        21: {
          title: 'A natural mistake',
          text: '11.Be3. It develops a piece and guards d4, but it does nothing for e4.',
          marks: ['e4'],
          ann: '?'
        },
        22: {
          title: 'Black takes',
          text: '11...Nfxe4. The f6-knight grabs the pawn. Black has more attackers than White has defenders, so the trades leave Black a pawn up.',
          arrows: [['f6', 'e4', 'green']],
          ann: '!'
        },
        23: {
          title: 'White takes back',
          text: '12.Nxe4. White removes one attacker.',
          arrows: [['c3', 'e4', 'red']]
        },
        24: {
          title: 'A clean extra pawn',
          text: '12...Nxe4. The second knight takes back. Black is a pawn up. 13.Bxe4? Rxe4 would only make things worse for White: the rook and the g7-bishop would both hit the d4-knight.',
          arrows: [['e8', 'e4', 'green'], ['g7', 'd4', 'yellow']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Count before you move',
      body:
        "When pieces gang up on one pawn, count attackers and defenders. If the attackers outnumber the defenders, the pawn will fall unless you add a guard or move it. In the Long Variation, Black's whole plan is to pile up on e4, and White's job is to keep enough guards on it, which is why 11.Re1 is so important."
    }
  ],
  takeaway:
    "With ...Nbd7 and ...e5, Black fights for the center against the Fianchetto. White builds with e4 and h3. After ...exd4 and ...Nc5, Black piles up on e4, and White must add a guard with Re1.",
  lookAhead:
    "Module 8.4 shows Black's other plans: the Benoni-like ...c5 (the Yugoslav) and the quiet ...c6 systems.",
  drills: [
    {
      title: 'Hold the e4-pawn',
      prompt: "You're White in the Long Variation. Black is about to take on d4. Take back, then keep your e4-pawn safe.",
      moves: `${NC5} Re1`,
      start: 17,
      side: 'white',
      hints: ['Recapture on d4 with the knight.', 'After ...Nc5, count the attackers on e4. Which rook can guard it?'],
      success: '10.Nxd4 and 11.Re1. Now e4 has three defenders against three attackers.'
    },
    {
      title: 'Play the Long Variation as Black',
      prompt: "You're Black. Your knight is on d7 and White has just castled. Strike in the center and go after e4.",
      moves: LONG,
      start: 13,
      side: 'black',
      hints: ['First the classic King\'s Indian break, then a rook to the e-file.', 'Take on d4, bring the d7-knight to c5, and stop b2–b4 with your a-pawn.'],
      success: '...e5, ...Re8, ...exd4, ...Nc5 and ...a5. Black\'s pieces all point at e4.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Black has just played 10...Nc5. How many black pieces attack e4, and how many white pieces defend it?',
      moves: NC5,
      orientation: 'black',
      choices: [
        { text: 'Three attack, two defend', correct: true, why: 'Right. The c5-knight, the f6-knight and the e8-rook attack. The c3-knight and the g2-bishop defend.' },
        { text: 'Two attack, two defend', why: "Don't forget the rook on e8. With the e5-pawn gone, the e-file is clear all the way to e4." },
        { text: 'Three attack, three defend', why: 'Not yet. The third defender only arrives after 11.Re1.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is h3 such a useful move for White in these lines?',
      choices: [
        { text: 'It stops ...Ng4 and ...Bg4, so White can play Be3 safely', correct: true, why: 'Yes. Without h3, ...Ng4 would hit a bishop on e3.' },
        { text: 'It prepares g4 and a kingside attack', why: "White isn't attacking here. h3 is a quiet move that controls g4." },
        { text: 'It gives the king an escape square on h2', why: 'That is a small bonus, but not the main reason. The point is the g4 square.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Long Variation, why does Black play 11...a5?',
      choices: [
        { text: 'To stop b2–b4, which would chase the knight from c5', correct: true, why: 'Exactly. The knight on c5 is Black\'s best piece, so Black keeps it there.' },
        { text: "To start a pawn storm against White's king", why: "White's king is on the kingside. The a-pawn is about the c5 square." },
        { text: 'To open the a-file for the queen', why: 'The queen is not heading for the a-file. The point is the b4 square.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White played 11.Be3 instead of 11.Re1. What should Black play?',
      moves: `${NC5} Be3`,
      orientation: 'black',
      choices: [
        { text: '11...Nfxe4', correct: true, why: 'Yes. Three attackers against two defenders: the trades leave Black a pawn up.' },
        { text: '11...a5', why: "It's a useful move in general, but it misses the chance. The e4-pawn is there for the taking." },
        { text: '11...Bd7', why: 'A normal developing move, but White gets time to guard e4 with Qc2 or f3, and the chance is gone.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'White to move. Black is piling up on e4. What is White\'s best move?',
      moves: NC5,
      orientation: 'white',
      choices: [
        { text: '11.Re1', correct: true, why: 'Right. The rook adds a third defender, and e4 holds.' },
        { text: '11.Be3', why: 'It develops but ignores e4. 11...Nfxe4 wins a pawn.' },
        { text: '11.b3', why: 'It ignores e4. 11...Ncxe4 wins a pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the main line 7...e5 8.e4 c6 9.h3, what is one job of 8...c6?',
      moves: MAIN,
      orientation: 'black',
      choices: [
        { text: 'It covers d5 and opens a path for the queen to b6 or a5', correct: true, why: 'Yes. White\'s pieces can\'t use d5, and the queen gets new squares.' },
        { text: 'It defends the e5-pawn', why: 'A pawn on c6 defends b5 and d5, not e5.' },
        { text: 'It prepares ...c5 next move', why: 'Black would not spend two moves to reach c5. ...c6 is useful where it stands.' }
      ]
    }
  ],
  key: { name: 'Fianchetto, Long Variation: 10...Nc5', moves: NC5, orientation: 'black' },
  terms: [
    { term: 'Tension', meaning: 'When pawns or pieces could capture each other but neither side has taken yet. Keeping the tension keeps options open.' },
    { term: 'Attackers and defenders', meaning: 'Count how many pieces hit a square and how many guard it. More attackers than defenders usually means the piece or pawn there will fall.' },
    { term: 'Space', meaning: 'The part of the board your pawns control. More space gives your pieces more room to move.' }
  ]
})
