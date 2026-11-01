import { defineModule } from '../../../types'
import { KAN } from '../lines'

/** kan-c4: 5.c4 Nf6 6.Nc3 Qc7 7.a3 b6 8.Be3 Bb7 9.f3 d6 (a Hedgehog) */
const HEDGE = `${KAN} c4 Nf6 Nc3 Qc7 a3 b6 Be3 Bb7 f3 d6`
/** 10.g4 Nfd7 11.g5 Nc6 12.Nxc6 Qxc6: White's space-grabbing plan (engine top move 10.g4; White better) */
const G4 = `${HEDGE} g4 Nfd7 g5 Nc6 Nxc6 Qxc6`

export default defineModule({
  id: '6.6',
  title: 'Kan against 5.c4: the Hedgehog',
  minutes: 11,
  level: 3,
  goals: [
    'Build the Hedgehog: pawns on a6, b6, d6 and e6',
    "Understand White's clamp and the g4–g5 plan against it",
    'Learn why ...b5 and ...d5 must wait for the right moment'
  ],
  intro:
    "Against the Kan, White can clamp the center at once with 5.c4. Black's answer is the Hedgehog: a low wall of pawns on a6, b6, d6 and e6 with the pieces tucked behind. It looks passive, and White does keep an edge. So what is Black waiting for, and what should White do about it?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Building the Hedgehog',
      intro: "From Black's side. Each Black move answers a White move, until the wall is complete.",
      moves: HEDGE,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The Kan',
          text: '4...a6. Black keeps White off b5 and waits with the knights.',
          arrows: [['a6', 'b5', 'green']]
        },
        9: {
          title: 'The clamp at once',
          text: '5.c4. White puts a second pawn next to e4. Together they control d5, so Black\'s ...d5 break is very hard.',
          arrows: [['c4', 'd5', 'yellow'], ['e4', 'd5', 'yellow']],
          marks: ['d5']
        },
        10: {
          title: 'Hitting e4',
          text: '5...Nf6. The knight attacks the e4-pawn, which has no defender yet.',
          arrows: [['f6', 'e4', 'red']]
        },
        11: {
          title: 'e4 is guarded',
          text: '6.Nc3. The knight defends e4 and adds another guard to d5.',
          arrows: [['c3', 'e4', 'green'], ['c3', 'd5', 'yellow']]
        },
        12: {
          title: 'Eyeing c4',
          text: '6...Qc7. The queen looks down the c-file at c4 and watches e5. The f1-bishop defends c4.',
          arrows: [['c7', 'c4', 'red'], ['f1', 'c4', 'green']]
        },
        13: {
          title: 'No pin on c3',
          text: "7.a3. This stops ...Bb4, which would pin the c3-knight and weaken White's grip on e4. It also prepares b4.",
          arrows: [['a3', 'b4', 'green']],
          marks: ['b4']
        },
        14: {
          title: 'The b-pawn steps up',
          text: '7...b6. The second Hedgehog pawn. It guards c5 and a5 and makes room for ...Bb7.',
          arrows: [['b6', 'c5', 'green']]
        },
        15: {
          title: 'Bishop to e3',
          text: '8.Be3. The bishop develops and guards the d4-knight.',
          arrows: [['e3', 'd4', 'green']]
        },
        16: {
          title: 'Pressure on e4',
          text: "8...Bb7. Now the bishop and the f6-knight both attack e4, and only the c3-knight defends it.",
          arrows: [['b7', 'e4', 'red'], ['f6', 'e4', 'red'], ['c3', 'e4', 'green']]
        },
        17: {
          title: 'The f-pawn holds',
          text: '9.f3. The pawn gives e4 a solid guard. It also prepares g4 later.',
          arrows: [['f3', 'e4', 'green']]
        },
        18: {
          title: 'The Hedgehog',
          text: '9...d6. The wall is complete: pawns on a6, b6, d6 and e6. They cover b5, c5, e5 and d5. White has more space and a clear edge, but the wall is hard to break.',
          marks: ['a6', 'b6', 'd6', 'e6']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "White's plan: g4–g5",
      intro: "From White's side. With f3 played, White can use the g-pawn to push Black's best defender away.",
      moves: G4,
      start: 18,
      orientation: 'white',
      steps: {
        18: {
          title: 'Same position',
          text: "9...d6. The f6-knight is Black's key defender: it watches d5, e4 and g4.",
          marks: ['f6']
        },
        19: {
          title: 'The g-pawn advances',
          text: '10.g4. White gains space and threatens g5, chasing the knight.',
          arrows: [['g4', 'g5', 'red']]
        },
        20: {
          title: 'Stepping back early',
          text: '10...Nfd7. Black moves the knight before it is kicked. From d7 it can later go to e5 or c5.',
          arrows: [['d7', 'e5', 'blue'], ['d7', 'c5', 'blue']]
        },
        21: {
          title: 'More space',
          text: '11.g5. The pawn takes f6 and h6 away from Black\'s pieces. White now has space on both sides of the board.',
          marks: ['f6', 'h6']
        },
        22: {
          title: 'The other knight',
          text: '11...Nc6. The b8-knight finally comes out and challenges the d4-knight.',
          arrows: [['c6', 'd4', 'red']]
        },
        23: {
          title: 'A trade',
          text: '12.Nxc6. White trades knights, so Black must take back.',
          marks: ['c6']
        },
        24: {
          title: 'Queen and bishop',
          text: "12...Qxc6. The queen and the b7-bishop line up against e4, which the f3-pawn and the c3-knight hold. White is better: more space, and Black's king is still in the center.",
          arrows: [['c6', 'e4', 'red'], ['f3', 'e4', 'green'], ['c3', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'warning',
      title: "Don't break too early",
      body:
        "The breaks ...b5 and ...d5 are the Hedgehog's whole point, but timing is everything. Right after 9...d6 10.Qd2, both 10...b5? 11.cxb5 and 10...d5? 11.cxd5 open lines while Black's king is still in the center and the queen stands on the c-file. White is much better in both cases.\n\nFirst finish development: ...Be7, ...O-O, ...Nbd7 and a rook to c8 or e8. Only then look for the break."
    },
    {
      kind: 'text',
      title: 'Patience on both sides',
      body:
        "In the Hedgehog, **Black** regroups behind the wall and waits. When White's pieces are a little loose, a well-timed ...b5 or ...d5 suddenly frees the game, and all the hidden energy comes out at once.\n\n**White** should not rush either. Keep the clamp, develop, and use the extra space: g4–g5, or b4 and Na4 on the queenside, to take squares away from Black's pieces. The same c4–e4 clamp appears against the Accelerated Dragon (Module 3.9) and after 5.Nb5 in the Taimanov (Module 6.3)."
    }
  ],
  takeaway:
    "Against 5.c4, Black builds the Hedgehog: pawns on a6, b6, d6 and e6 with pieces behind them. White keeps an edge with the extra space and plans like g4–g5. Black's breaks ...b5 and ...d5 only work once development is finished.",
  lookAhead:
    'Module 6.7 brings both knights out early: the Four Knights, where Black plays 4...Nf6 and 5...Nc6.',
  drills: [
    {
      title: 'Complete the wall',
      prompt: "You're Black. White has just played 7.a3 to stop ...Bb4. Continue building the Hedgehog.",
      moves: `${KAN} c4 Nf6 Nc3 Qc7 a3 b6 Be3 Bb7`,
      start: 13,
      side: 'black',
      hints: ['Put the second pawn of the wall next to the a6-pawn.', '7...b6, then the bishop goes to b7 to hit e4.'],
      success: '7...b6 and 8...Bb7. The b7-bishop and the f6-knight now both press on e4.'
    },
    {
      title: 'Clamp and push',
      prompt: "You're White. Black has played 6...Qc7. Keep the clamp, stop the pin, guard e4, and then gain space on the kingside.",
      moves: G4.split(' ').slice(0, 19).join(' '),
      start: 12,
      side: 'white',
      hints: [
        'First stop ...Bb4 with a pawn. Then develop the dark-squared bishop.',
        '7.a3, 8.Be3, 9.f3 to guard e4, and then 10.g4.'
      ],
      success: '7.a3, 8.Be3, 9.f3 and 10.g4. White holds e4 and starts pushing Black back.'
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'Black has pawns on a6, b6, d6 and e6 with pieces behind them. What is this set-up called?',
      moves: HEDGE,
      orientation: 'black',
      choices: [
        { text: 'The Hedgehog', correct: true, why: 'Right. A low wall of pawns with hidden energy behind it, like a hedgehog\'s spines.' },
        { text: 'The Dragon', why: 'The Dragon has ...g6 and a bishop on g7. Here the g-pawn is still at home.' },
        { text: 'The Maróczy Bind', why: "The Maróczy Bind is White's c4–e4 clamp. The Hedgehog is Black's answer to it." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does White play 7.a3 here?',
      moves: `${KAN} c4 Nf6 Nc3 Qc7 a3`,
      orientation: 'white',
      choices: [
        { text: 'To stop ...Bb4, which would pin the c3-knight', correct: true, why: 'Yes. With the c3-knight pinned, the e4-pawn would lose a defender. a3 takes b4 away from the bishop.' },
        { text: 'To prepare a4–a5 and attack b6', why: "Black hasn't played ...b6 yet, and the point is the b4 square. a3 stops the pin." },
        { text: 'To give the a1-rook a way out', why: 'The rook can come out along the first rank once the queen and bishop move. a3 is about ...Bb4.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 9...d6 10.Qd2, Black plays 10...b5?. What is wrong with it?',
      moves: `${HEDGE} Qd2 b5`,
      orientation: 'black',
      choices: [
        { text: "It opens lines while Black's king is in the center and the pieces are not ready", correct: true, why: 'Right. After 11.cxb5 the c-file opens toward Black\'s queen, and White is much better. The break needs ...Be7 and ...O-O first.' },
        { text: 'Nothing: ...b5 is always the right plan in the Hedgehog', why: 'It is the right plan, but not at any moment. Timing is everything.' },
        { text: 'It is fine, but ...d5 would win a pawn', why: '10...d5? is just as bad here: after 11.cxd5 White is much better. Both breaks are too early.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 8...Bb7, why does White play 9.f3?',
      moves: `${KAN} c4 Nf6 Nc3 Qc7 a3 b6 Be3 Bb7`,
      orientation: 'white',
      choices: [
        { text: 'e4 is attacked twice and defended only once', correct: true, why: 'Yes. The b7-bishop and f6-knight both hit e4, and only the c3-knight guarded it. f3 adds a pawn guard.' },
        { text: 'To prepare castling queenside', why: 'f3 has nothing to do with castling. It is about the e4-pawn.' },
        { text: 'To trap the b7-bishop', why: 'The bishop is not in danger. f3 simply gives e4 a pawn guard.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'In the Hedgehog, when should Black play the ...b5 or ...d5 break?',
      choices: [
        { text: 'After development is finished, when the break works tactically', correct: true, why: 'Right. With the king castled and the rooks ready, the break frees the game. Too early, it only opens lines for White.' },
        { text: 'As early as possible, before White is ready', why: 'In the Kan with 5.c4, an early ...b5 or ...d5 lets White open lines against Black\'s uncastled king.' },
        { text: 'Never: the Hedgehog only defends', why: 'The breaks are the Hedgehog\'s whole idea. Without them, Black would just be cramped.' }
      ]
    },
    {
      type: 'concept',
      prompt: "What is the main price Black pays for the Hedgehog set-up?",
      choices: [
        { text: 'Less space, so White keeps an edge', correct: true, why: 'Yes. The pieces behind the wall have little room. The Hedgehog is a patient defense, not a quick way to equalize.' },
        { text: 'A pawn', why: 'No material is given. The Hedgehog is solid; its problem is space.' },
        { text: 'Black cannot castle', why: 'Black can castle normally, usually short after ...Be7.' }
      ]
    }
  ],
  key: { name: 'Kan Hedgehog: 9...d6', moves: HEDGE, orientation: 'black' },
  terms: [
    { term: 'Hedgehog', meaning: 'A Black set-up with pawns on a6, b6, d6 and e6 and pieces behind them, waiting for a ...b5 or ...d5 break.' },
    { term: 'Pawn break', meaning: 'A pawn move that attacks the opponent\'s pawns to open lines, like ...b5 or ...d5 against the c4–e4 clamp.' },
    { term: 'Space', meaning: 'How much of the board your pawns and pieces control. More space gives your pieces more room; less space can make a position cramped.' }
  ]
})
