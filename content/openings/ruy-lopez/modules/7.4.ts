import { defineModule } from '../../../types'
import { BERLIN } from '../../../lines'

/** berlin-endgame */
const ENDGAME = `${BERLIN} O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+ Kxd8`
/** berlin-endgame-nc3-bd7 */
const WALL = `${ENDGAME} Nc3 Bd7`

export default defineModule({
  id: '7.4',
  title: 'The Berlin Wall: queens come off',
  minutes: 10,
  level: 3,
  goals: [
    "Weigh what each side gets in the Berlin endgame",
    "Understand why Black's king is safe without castling",
    'Know the Berlin Wall setup with ...Bd7 and ...Kc8'
  ],
  intro:
    "Black's king is stuck on d8 and can never castle. Black's pawns are doubled. It sounds bad, yet this is one of the most trusted defenses in chess. What does Black get in return, and why did a world champion choose it again and again?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Keeping score',
      intro: 'Same moves as Module 7.3, but this time keep a score: what does each move give White, and what does it give Black?',
      moves: ENDGAME,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'Nothing settled yet',
          text: '5...Nd6. The knight hits the bishop. So far nobody has gained anything lasting.',
          arrows: [['d6', 'b5', 'red']]
        },
        11: {
          title: 'One for Black',
          text: '6.Bxc6. White gives up a bishop for a knight. Black will have the bishop pair: a plus for Black.',
          marks: ['c8', 'f8']
        },
        12: {
          title: 'One for White',
          text: '6...dxc6. Black has doubled c-pawns: a plus for White. But the recapture also opens lines for both black bishops.',
          marks: ['c6', 'c7']
        },
        13: {
          title: 'The advanced majority',
          text: '7.dxe5. White has four pawns against three on the kingside, and the front one is already on e5. It takes d6 and f6 away from Black\'s pieces.',
          arrows: [['e5', 'd6', 'yellow'], ['e5', 'f6', 'yellow']]
        },
        14: {
          title: 'An active knight',
          text: '7...Nf5. The knight is well placed. Later White may try g2-g4 to chase it away, which is why Black often plays ...h5 (Module 7.5).',
          arrows: [['g2', 'g4', 'blue']],
          marks: ['f5']
        },
        15: {
          title: 'The queens go',
          text: '8.Qxd8+. With the queens gone, there is no piece left that can build a real mating attack.',
          arrows: [['d1', 'd8', 'red']]
        },
        16: {
          title: 'The final score',
          text: "8...Kxd8. White: a healthy majority, and Black's king can't castle. Black: the bishop pair and a king that is perfectly safe. Roughly balanced, with White a little more comfortable.",
          marks: ['d8']
        }
      }
    },
    {
      kind: 'text',
      title: "Why Black's king is fine on d8",
      body:
        "Castling is about protecting the king from the queen and the other attackers. With the queens off, that danger is mostly gone. White can give checks like Rd1+ or Bg5+, but they are a nuisance, not a threat.\n\nIn an endgame the king is even useful in the middle of the board, where it can help defend pawns. Black usually tucks it on **e8** (Module 7.5) or on **c8**, which the next walkthrough shows.\n\nNotice the structure too: it is almost the same one White aims for in the Exchange Variation (Chapter 3). There you learned it from White's side. Here you defend it, with the bishop pair as your trump."
    },
    {
      kind: 'walkthrough',
      title: 'The Berlin Wall setup',
      intro: 'One of the classic ways for Black to organise the position.',
      moves: WALL,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'The endgame',
          text: '8...Kxd8. Black must now decide where the king will live.',
          marks: ['d8']
        },
        17: {
          title: 'White develops',
          text: '9.Nc3. White brings out the knight. It can later jump to e4, a fine square in front of the majority.',
          arrows: [['c3', 'e4', 'blue']]
        },
        18: {
          title: 'Clearing c8',
          text: "9...Bd7. The bishop clears c8 for the king. Black's usual follow-up is ...Kc8, then ...b6 and ...c5 to tidy up the queenside pawns.",
          arrows: [['d8', 'c8', 'green'], ['c6', 'c5', 'blue']]
        }
      }
    },
    {
      kind: 'history',
      title: "Kramnik's wall",
      body:
        'In the 2000 World Championship in London, Kramnik played the Berlin as Black against Kasparov in games 1, 3, 9 and 13. All four games were drawn. Kasparov could not break it, and ever since, the Berlin endgame has been a favourite defense at the very top.'
    },
    {
      kind: 'tip',
      title: 'Your job as Black',
      body:
        "Don't think of this endgame as a draw that plays itself. Your job is to put the king somewhere safe, keep the knight active, and give your bishops open lines. Accurate play holds the balance."
    }
  ],
  takeaway:
    "In the Berlin endgame Black gives up castling and accepts doubled pawns, and gets the bishop pair plus a safe king in a queenless position. White's healthy majority gives a small edge, but accurate Black play holds.",
  lookAhead:
    "Next: the actual plans. How White tries to use the majority, and how Black stops g2-g4 with ...h5.",
  drills: [
    {
      title: 'Build the Berlin Wall',
      prompt: "You're Black. The e5-pawn attacks your knight. Finish the main line and then clear c8 for your king against 9.Nc3.",
      moves: WALL,
      start: 13,
      side: 'black',
      hints: [
        'The knight goes to its best square, f5. After the queen check, recapture with the only piece that can.',
        'Against 9.Nc3, move the c8-bishop so that the king can go to c8 later.'
      ],
      success: '7...Nf5, 8...Kxd8 and 9...Bd7. Next comes ...Kc8, with the king safely tucked away.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'In the Berlin endgame, what does Black get for the lost castling rights and the doubled pawns?',
      moves: ENDGAME,
      orientation: 'black',
      choices: [
        { text: 'The bishop pair', correct: true, why: "Right. White gave up the light-squared bishop on c6, so Black has two bishops against bishop and knight." },
        { text: 'An extra pawn', why: 'Material is level. Black took e4 and White took e5.' },
        { text: 'A kingside pawn majority', why: "It's the other way round: White has four pawns against three on the kingside." }
      ]
    },
    {
      type: 'concept',
      prompt: "Why is Black's king safe on d8 even though it can't castle?",
      choices: [
        { text: 'The queens are off, so there is no real mating attack', correct: true, why: "Exactly. Checks like Rd1+ are annoying, but there's no queen to follow them up." },
        { text: 'White is not allowed to give check in an endgame', why: 'White can check, for example with Rd1+ or Bg5+. The checks just aren\'t dangerous without queens.' },
        { text: 'The c6-pawn protects it from every attack', why: 'One pawn cannot cover everything. The real reason is that the queens are gone.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does the white pawn on e5 do in the Berlin endgame?',
      moves: ENDGAME,
      orientation: 'black',
      choices: [
        { text: "It leads White's kingside majority and takes d6 and f6 away from Black's pieces", correct: true, why: 'Right. It is both the front of the majority and a wedge in Black\'s position.' },
        { text: "It is weak and Black will win it soon", why: "The f3-knight protects it, and Black has no easy way to attack it. It's a strength for White." },
        { text: "It attacks Black's king", why: "It controls d6 and f6. It doesn't attack the king on d8." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Black has played 9...Bd7. Where is the king heading?',
      moves: WALL,
      orientation: 'black',
      choices: [
        { text: 'To c8', correct: true, why: 'Yes. ...Kc8 tucks the king away, followed by ...b6 and ...c5.' },
        { text: 'To g8, by castling', why: "Castling is impossible: the king has already moved." },
        { text: 'To e6, to attack the e5-pawn', why: 'Marching the king forward with rooks and minor pieces around is too risky. Black tucks it on c8 or e8.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Kasparov–Kramnik, London 2000: what happened in the four games where Kramnik played the Berlin?',
      choices: [
        { text: 'All four were drawn', correct: true, why: 'Right. Kasparov never broke through, and the Berlin became an elite drawing weapon.' },
        { text: 'Kasparov won all four', why: "The opposite. Kasparov couldn't win a single one of them." },
        { text: 'Kramnik won all four', why: 'Kramnik held all four games, but each one ended in a draw.' }
      ]
    },
    {
      type: 'concept',
      prompt: "Which other line in this course leads to almost the same pawn structure?",
      choices: [
        { text: 'The Exchange Variation, 3...a6 4.Bxc6', correct: true, why: 'Yes. White has the 4-against-3 kingside majority and Black has doubled c-pawns plus the bishop pair.' },
        { text: 'The Marshall Attack', why: 'The Marshall is a sharp gambit with queens on. Its structure is very different.' },
        { text: 'The Closed Ruy Lopez', why: 'In the Closed, the center pawns stay on the board and nobody has doubled c-pawns.' }
      ]
    }
  ],
  key: { name: 'Berlin Wall: 9.Nc3 Bd7', moves: WALL, orientation: 'black' },
  terms: [
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has given one up. Strongest in open positions.' },
    { term: 'Fortress', meaning: 'A defensive setup the opponent cannot break through, even with a small advantage.' },
    { term: 'Wedge', meaning: 'An advanced pawn that cuts into the enemy position and takes squares away from enemy pieces.' }
  ]
})
