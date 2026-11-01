import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** gligoric-7be3-ng4: 7.Be3 Ng4 8.Bg5 f6 9.Bh4 Nc6 10.d5 Ne7 11.Nd2 */
const NG4 = `${CLASSICAL} Be3 Ng4 Bg5 f6 Bh4 Nc6 d5 Ne7 Nd2`
/** gligoric-7be3-ng4-g5: 9.Bh4 g5 10.Bg3 Nh6 */
const G5 = `${CLASSICAL} Be3 Ng4 Bg5 f6 Bh4 g5 Bg3 Nh6`
/** gligoric-7be3-ng4-9bc1: 9.Bc1 */
const BC1 = `${CLASSICAL} Be3 Ng4 Bg5 f6 Bc1`

export default defineModule({
  id: '5.3',
  title: '7.Be3: the Gligorić System and 7...Ng4',
  minutes: 11,
  level: 3,
  goals: [
    'Know what 7.Be3 is for, and why Black answers 7...Ng4',
    'See why 8.Bg5 is White\'s best reply and 8...f6 Black\'s',
    'Compare 9.Bh4 with 9.Bc1, and the ...g5, ...Nh6 regrouping'
  ],
  intro:
    "Instead of castling, White can develop the bishop first with 7.Be3. White keeps every option open: trade on e5, close with d5, or castle later. Black has a cheeky answer, 7...Ng4, hitting the bishop at once. Who gains from all this bishop-and-knight dancing?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main line: 7...Ng4 8.Bg5 f6',
      intro: 'Watch the two pieces that started the fight: the bishop and the g4-knight.',
      moves: NG4,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'The Classical position',
          text: '6...e5. Black hits d4. In this module White neither castles nor closes the center yet.',
          arrows: [['e5', 'd4', 'red']]
        },
        13: {
          title: 'Bishop first',
          text: "7.Be3. The bishop guards d4 and keeps every option open: dxe5, d5 or castling. White's king also stays in the center for now, so Black's usual kingside storm has no fixed target.",
          arrows: [['e3', 'd4', 'green']]
        },
        14: {
          title: 'The knight jumps',
          text: '7...Ng4. Black attacks the bishop right away. The g4-square is free because White has not played h3.',
          arrows: [['g4', 'e3', 'red']]
        },
        15: {
          title: 'With tempo',
          text: "8.Bg5. White's best. The f6-knight has left and e7 is empty, so the bishop attacks the queen on d8. Black must deal with that first.",
          arrows: [['g5', 'd8', 'red']],
          ann: '!'
        },
        16: {
          title: 'Block and kick',
          text: '8...f6. The pawn blocks the attack on the queen and hits the bishop at the same time. It also gives e5 an extra guard.',
          arrows: [['f6', 'g5', 'red'], ['f6', 'e5', 'green']]
        },
        17: {
          title: 'Bishop to h4',
          text: '9.Bh4. The bishop stays active on the h4–d8 diagonal and keeps an eye on f6. (9.Bc1 is the other retreat, shown below.)',
          arrows: [['h4', 'f6', 'blue']]
        },
        18: {
          title: 'Pressure on d4',
          text: '9...Nc6. The knight joins the attack on d4.',
          arrows: [['c6', 'd4', 'red'], ['e5', 'd4', 'red']]
        },
        19: {
          title: 'The center locks',
          text: '10.d5. White closes the center and kicks the knight. Now the game looks like the main line, with attacks on opposite wings.',
          arrows: [['d5', 'c6', 'red']]
        },
        20: {
          title: 'Knight to e7',
          text: '10...Ne7. The knight drops back to e7. From there it can go to g6, and it keeps out of the way of the f-pawn.',
          arrows: [['e7', 'g6', 'blue']]
        },
        21: {
          title: 'Asking the g4-knight',
          text: '11.Nd2. The knight leaves f3, so the e2-bishop now looks at g4, and f2–f3 can come later to push the knight back. White keeps a small edge.',
          arrows: [['e2', 'g4', 'red'], ['f2', 'f3', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Kick the bishop and bring the knight home',
      intro: 'Black can also use the g-pawn, as in Module 5.2. The knight on g4 then comes back via h6.',
      moves: G5,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'After 8...f6',
          text: 'The queen is safe. The bishop has to choose a square.',
          arrows: [['f6', 'g5', 'red']]
        },
        17: {
          title: 'Bishop to h4',
          text: '9.Bh4. The bishop keeps an eye on f6.',
          arrows: [['h4', 'f6', 'blue']]
        },
        18: {
          title: 'Kick it again',
          text: '9...g5. Black pushes the bishop off the diagonal for good. Like every ...g5, it loosens the kingside a little.',
          arrows: [['g5', 'h4', 'red']],
          marks: ['f5']
        },
        19: {
          title: 'Bishop to g3',
          text: '10.Bg3. The bishop now presses on e5 instead. White is still a little better.',
          arrows: [['g3', 'e5', 'red']]
        },
        20: {
          title: 'The knight comes home',
          text: "10...Nh6. The g4-knight had nothing more to do there. From h6 it goes to f7, where it guards e5 and g5.",
          arrows: [['h6', 'f7', 'green'], ['f7', 'e5', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The quiet retreat: 9.Bc1',
      intro: 'White can also take the bishop all the way home.',
      moves: BC1,
      start: 13,
      orientation: 'white',
      steps: {
        13: {
          title: 'The Gligorić',
          text: '7.Be3. Same start as before.',
          arrows: [['e3', 'd4', 'green']]
        },
        14: {
          title: 'The jump',
          text: '7...Ng4. The bishop is attacked.',
          arrows: [['g4', 'e3', 'red']]
        },
        15: {
          title: 'Hit the queen',
          text: '8.Bg5. Again the best move. After 8.dxe5 Nxe3 9.fxe3 dxe5, White would have doubled e-pawns and Black the bishop pair.',
          arrows: [['g5', 'd8', 'red']]
        },
        16: {
          title: 'Block',
          text: '8...f6. The usual answer.',
          arrows: [['f6', 'g5', 'red']]
        },
        17: {
          title: 'All the way back',
          text: "9.Bc1. White keeps the bishop safe from ...g5 and saves it for later, for example for the c1–h6 diagonal. Black's f-pawn now stands on f6, which blocks the g7-bishop for a while. The position is roughly equal.",
          arrows: [['c1', 'h6', 'blue']],
          marks: ['f6']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Two names, one system',
      body:
        "Wikipedia calls 7.Be3 the **Gligorić System**; lichess and some databases call it the **Gligorić–Taimanov System**. Karpov chose 7.Be3 against Kasparov in their 1990 World Championship match."
    }
  ],
  takeaway:
    "7.Be3 keeps White's options open. Black hits the bishop with 7...Ng4, White answers 8.Bg5 (attacking the queen), and 8...f6 blocks. Then the bishop goes to h4 or back to c1, and Black's knight later returns via h6 to f7.",
  lookAhead:
    "Next: Black's other answers to 7.Be3, 7...exd4 and 7...Na6, which aim for ...d5 or unpin with ...Qe8.",
  drills: [
    {
      title: 'White against 7...Ng4',
      prompt: "You're White. Black has just jumped 7...Ng4 at your bishop. Play the main line: hit the queen, keep the bishop active, close the center, and prepare to question the g4-knight.",
      moves: NG4,
      start: 14,
      side: 'white',
      hints: [
        'Which bishop move attacks the queen on d8?',
        '8.Bg5, 9.Bh4, 10.d5 and 11.Nd2.'
      ],
      success: '8.Bg5, 9.Bh4, 10.d5 and 11.Nd2. The e2-bishop now eyes the g4-knight, and White keeps a small edge.'
    },
    {
      title: 'Black regroups',
      prompt: "You're Black. White's bishop is attacking your queen. Block it, chase the bishop off the diagonal, and bring the knight back toward f7.",
      moves: G5,
      start: 15,
      side: 'black',
      hints: [
        'One pawn move blocks the attack and hits the bishop.',
        '...f6, then ...g5, then the g4-knight heads for h6.'
      ],
      success: '8...f6, 9...g5 and 10...Nh6. The knight will settle on f7, guarding e5 and g5.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black to move. The bishop on g5 attacks the queen. What is the best answer?',
      moves: `${CLASSICAL} Be3 Ng4 Bg5`,
      orientation: 'black',
      choices: [
        { text: '8...f6', correct: true, why: 'Right. The pawn blocks the attack, hits the bishop and guards e5.' },
        { text: '8...Qe8', why: 'The queen is safe there, but 9.Nd5! hits c7, where a knight would fork the queen and the a8-rook. White is clearly better.' },
        { text: '8...Bf6', why: 'This blocks the attack, but after 9.Bxf6 Nxf6 10.dxe5 dxe5 11.Qxd8 Rxd8 12.Nxe5 White simply wins the e5-pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does 8.Bg5 come with tempo after 7...Ng4?',
      choices: [
        { text: 'The f6-knight and the e7-pawn are gone, so the bishop attacks the queen on d8', correct: true, why: "Exactly. Black's knight left f6 and the e-pawn is on e5, so the diagonal to d8 is open." },
        { text: 'It attacks the g4-knight', why: 'A bishop on g5 does not attack g4. Bishops move diagonally. The target is the queen on d8.' },
        { text: 'It pins the f6-knight', why: 'There is no knight on f6 any more: it went to g4. The bishop hits the queen directly.' }
      ]
    },
    {
      type: 'order',
      prompt: 'After 7.Be3 Ng4, why does White play 8.Bg5 rather than 8.dxe5?',
      moves: `${CLASSICAL} Be3 Ng4`,
      orientation: 'white',
      choices: [
        { text: 'After 8.dxe5 Nxe3 9.fxe3 dxe5, Black has the bishop pair and White has doubled e-pawns', correct: true, why: 'Right. That version is slightly better for Black. 8.Bg5 saves the bishop with tempo.' },
        { text: '8.dxe5 loses a piece at once', why: 'No piece is lost, but White gives up the bishop and gets a worse pawn structure. 8.Bg5 is simply better.' },
        { text: '8.dxe5 is illegal because d4 is pinned', why: 'Nothing pins the d4-pawn. 8.dxe5 is legal, just not good.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 9...g5 10.Bg3 Nh6, where is the black knight heading, and why?',
      moves: G5,
      orientation: 'black',
      choices: [
        { text: 'To f7, to guard e5 and g5', correct: true, why: 'Yes. On g4 the knight had no more targets. On f7 it is a solid defender.' },
        { text: 'To g4 again, to attack the bishop', why: 'The bishop is no longer on e3. The knight goes to f7 to defend.' },
        { text: 'To f5, to win the g3-bishop', why: 'The knight can reach f5, but the e4-pawn would just take it. f7 is the safe, useful square.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'What is 7.Be3 called after 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5?',
      moves: `${CLASSICAL} Be3`,
      orientation: 'white',
      choices: [
        { text: 'The Gligorić (or Gligorić–Taimanov) System', correct: true, why: 'Right. White develops the bishop before castling and keeps every option open.' },
        { text: 'The Petrosian System', why: 'The Petrosian is 7.d5, closing the center at once.' },
        { text: 'The Sämisch', why: 'The Sämisch is 5.f3, much earlier. Chapter 6 covers it.' }
      ]
    },
    {
      type: 'concept',
      prompt: "In the Gligorić, why does White's uncastled king make Black's usual kingside attack less effective?",
      choices: [
        { text: "With the king still in the center, Black's pawn storm has no fixed target", correct: true, why: "Right. Black's ...f5–f4 and ...g5–g4 work best against a king already castled on g1." },
        { text: "White's king is in check", why: 'Nothing is giving check. The point is that the king has not chosen a side yet.' },
        { text: "Black's g7-bishop is blocked by e3", why: 'The e3-bishop sits on a dark square, but the issue is the king: a storm needs a target.' }
      ]
    }
  ],
  key: { name: 'Gligorić System: 7.Be3 Ng4 8.Bg5 f6', moves: `${CLASSICAL} Be3 Ng4 Bg5 f6`, orientation: 'white' },
  terms: [
    { term: 'Tempo', meaning: 'A unit of time: one move. A move that makes a threat "gains a tempo", because the opponent must answer it.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one. Strong in open positions.' },
    { term: 'Doubled pawns', meaning: 'Two pawns of the same color on one file. They cannot guard each other and are often weak.' }
  ]
})
