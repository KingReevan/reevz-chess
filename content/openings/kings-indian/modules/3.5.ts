import { defineModule } from '../../../types'
import { MAIN } from '../lines'

/** model-taimanov-najdorf-1953, moves 1–20 */
const TN = `${MAIN} Ne1 Nd7 Be3 f5 f3 f4 Bf2 g5 Nd3 Nf6 c5 Ng6 Rc1 Rf7 Rc2 Bf8 cxd6 cxd6 Qd2 g4 Rfc1 g3 hxg3 fxg3`
const TN_18 = `${MAIN} Ne1 Nd7 Be3 f5 f3 f4 Bf2 g5 Nd3 Nf6 c5 Ng6 Rc1 Rf7 Rc2 Bf8 cxd6 cxd6 Qd2`
/** What if White takes on g4? (engine line) */
const TAKES = `${TN_18} g4 fxg4 Nxg4`
/** model-piket-kasparov-1989, moves 1–20 */
const PK_20 = 'd4 Nf6 Nf3 g6 c4 Bg7 Nc3 O-O e4 d6 Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 Be3 f5 f3 f4 Bf2 g5 b4 Nf6 c5 Ng6 cxd6 cxd6 Rc1 Rf7 a4 Bf8 a5 Bd7 Nb5 g4 Nc7 g3'

export default defineModule({
  id: '3.5',
  title: 'The ...g4 break',
  minutes: 11,
  level: 2,
  goals: [
    "See how ...g4 attacks f3 and opens lines at White's king",
    "Know Black's follow-ups: take back on g4, ...gxf3, or the ...g3 wedge",
    'Follow Taimanov–Najdorf, Zurich 1953, the model game for the break'
  ],
  intro:
    "Black's pieces are in place. Now comes the move the whole plan builds up to: ...g4, opening lines toward White's king. We watch Najdorf play it against Taimanov at Zurich 1953, in a game that won the tournament's brilliancy prize.",
  sections: [
    {
      kind: 'history',
      title: 'Taimanov–Najdorf, Zurich 1953',
      body:
        'The 1953 Candidates tournament in Zurich decided who would challenge the world champion. In round 4, Miguel Najdorf (Black) beat Mark Taimanov in 43 moves, and the game won the tournament\'s brilliancy prize. It is not where the name "Mar del Plata" comes from: that is another 1953 game, shown in Module 3.7.'
    },
    {
      kind: 'walkthrough',
      title: 'Taimanov–Najdorf: the break',
      intro: 'The game reached the position from Module 3.4 by the 10.Be3 move order. Watch the g-pawn.',
      moves: TN,
      start: 30,
      orientation: 'black',
      steps: {
        30: {
          title: 'The tour is done',
          text: "Black's knights are on f6 and g6, and the rook guards c7 from f7. The pieces are ready. Black needs a way to open lines at White's king.",
          arrows: [['g5', 'g4', 'green']],
          marks: ['g1']
        },
        31: {
          title: 'Doubling on the c-file',
          text: '16.Rc2. White plans to put both rooks on the c-file.',
          marks: ['c2']
        },
        32: {
          title: 'The bishop defends',
          text: '16...Bf8. As in Module 3.4, the bishop guards d6.',
          arrows: [['f8', 'd6', 'green']]
        },
        33: {
          title: 'The c-file opens',
          text: '17.cxd6. White opens the c-file.',
          marks: ['d6']
        },
        34: {
          title: 'c7 is covered',
          text: '17...cxd6. Black takes back. The f7-rook still guards c7.',
          arrows: [['f7', 'c7', 'green']]
        },
        35: {
          title: 'A slow move',
          text: '18.Qd2. The queen steps off d1 so the other rook can come to c1. The engine thinks this is too slow: Black now has a small edge.',
          arrows: [['f1', 'c1', 'blue']]
        },
        36: {
          title: 'The break',
          text: "18...g4. The g-pawn hits f3, the base of White's kingside wall. The engine slightly prefers to prepare it with ...Bd7 or ...h5, but after 18...g4 Black is still doing well.",
          arrows: [['g4', 'f3', 'red']]
        },
        37: {
          title: 'White ignores it',
          text: '19.Rfc1. White doubles rooks instead of taking. 19.fxg4 would let a black knight jump to g4 (see the next walkthrough).',
          marks: ['c1', 'c2']
        },
        38: {
          title: 'A wedge',
          text: "19...g3. A pawn sacrifice. The pawn drives into White's kingside and hits f2 and h2. If White takes, Black takes back with the f-pawn, and the f7-rook gets a half-open file.",
          arrows: [['g3', 'f2', 'red'], ['g3', 'h2', 'red']],
          ann: '!?'
        },
        39: {
          title: 'The only good reply',
          text: "20.hxg3. The engine's choice by far. Other moves, such as 20.Be1, leave White clearly worse.",
          marks: ['g3']
        },
        40: {
          title: 'Lines are open',
          text: "20...fxg3. The f-file is now half-open for the f7-rook, once the f6-knight steps aside, and the g3-pawn hits the f2-bishop next to White's king. The engine says only 21.Bxg3 holds the balance for White. Najdorf went on to win.",
          arrows: [['f7', 'f3', 'blue'], ['g3', 'f2', 'red']],
          marks: ['g1']
        }
      }
    },
    {
      kind: 'text',
      title: 'Sound, or just hard to meet?',
      body:
        "The engine is calm about 19...g3. With perfect defense White holds: after 20.hxg3 fxg3 the only good move is 21.Bxg3, and then the game is about level.\n\nBut look at what White had to find. Every other 21st move loses, and Black's pieces are all pointed at the king. Over the board that is very hard to defend. A sacrifice like this is called **practical**: it may not win by force, but it gives the opponent many chances to go wrong."
    },
    {
      kind: 'walkthrough',
      title: 'If White takes on g4',
      intro: 'Back to move 18. What happens if White grabs the pawn?',
      moves: TAKES,
      start: 34,
      orientation: 'black',
      steps: {
        34: {
          title: 'Before the break',
          text: 'The position after 17...cxd6. White guards g4 with the f3-pawn only.',
          marks: ['g4']
        },
        35: {
          title: "White's slow move",
          text: '18.Qd2. As in the game.',
          arrows: [['f1', 'c1', 'blue']]
        },
        36: {
          title: 'The break',
          text: '18...g4. The pawn attacks f3.',
          arrows: [['g4', 'f3', 'red']]
        },
        37: {
          title: 'White takes',
          text: '19.fxg4. White grabs the pawn. But the f3-pawn was the one holding up e4.',
          marks: ['e4']
        },
        38: {
          title: 'A knight on g4',
          text: "19...Nxg4. The knight lands close to White's king and hits f2 and e3. The e4-pawn has lost its pawn support. The engine prefers Black.",
          arrows: [['g4', 'f2', 'red'], ['g4', 'e3', 'red']],
          marks: ['e4']
        }
      }
    },
    {
      kind: 'tip',
      title: "Three answers to ...g4, and Black's reply",
      body:
        "**White takes (fxg4):** Black takes back, often with a knight, and e4 loses its support.\n\n**White ignores it:** Black can take on f3 to open the g-file, or push ...g3 like Najdorf.\n\n**White guards g4 with h3:** then ...h5 adds a second attacker. If White takes on g4, ...hxg4 opens the h-file as well."
    }
  ],
  takeaway:
    '...g4 hits f3, the base of White\'s wall. If White takes, a black piece lands on g4 and e4 loses its support. If White ignores it, Black opens files with ...gxf3 or drives in a wedge with ...g3. These pushes are hard to meet, even when the engine says White can hold.',
  lookAhead: "Next: when pawns are not enough. Piece sacrifices on g2, g3 and h3 in two famous games.",
  drills: [
    {
      title: 'Break and push',
      prompt: "You're Black in Piket–Kasparov, Tilburg 1989 (Module 3.7). White's knight heads for c7. Ignore it: break with the g-pawn, and when the knight jumps in, push the pawn again.",
      moves: PK_20,
      start: 37,
      side: 'black',
      hints: ['Your g-pawn can hit the f3-pawn.', 'After 20.Nc7, push the same pawn one more square, into White\'s camp.'],
      success: '19...g4 and 20...g3. Both are the engine\'s first choice here. Kasparov let the knight take the rook and went for the king.'
    },
    {
      title: 'Punish the capture',
      prompt: "You're Black. You played 18...g4, and White grabbed the pawn. Take back so that a piece lands close to White's king.",
      moves: TAKES,
      start: 36,
      side: 'black',
      hints: ['Which of your pieces can take on g4?', 'The f6-knight lands on g4 and hits f2 and e3.'],
      success: "19...Nxg4. The knight is close to White's king, and e4 has lost its support."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 18...g4 attack?',
      moves: `${TN_18} g4`,
      orientation: 'black',
      choices: [
        { text: 'The f3-pawn, which supports e4', correct: true, why: "Right. f3 is the base of White's kingside chain. Remove it and e4 is weak." },
        { text: 'The h2-pawn', why: 'A pawn on g4 attacks f3 and h3. The h2-pawn is not attacked yet.' },
        { text: 'The e4-pawn', why: "A pawn on g4 can't reach e4. It attacks f3, the pawn that holds e4." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 19.fxg4 Nxg4, what has Black gained?',
      moves: TAKES,
      orientation: 'black',
      choices: [
        { text: "A knight close to White's king, and the e4-pawn has lost its support", correct: true, why: 'Right. Material is level, but Black\'s pieces are now close to the king.' },
        { text: 'An extra pawn', why: 'Black gave the g-pawn and took back the f-pawn. Material is level.' },
        { text: 'Control of the c-file', why: 'The c-file belongs to White here. Black gained play on the kingside.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 19...g3 20.hxg3 fxg3, which statement is true?',
      moves: TN,
      orientation: 'black',
      choices: [
        { text: 'White has one good move, 21.Bxg3; every other move loses', correct: true, why: 'Right. The engine says White can hold, but only with exact defense. That is what makes the sacrifice so dangerous.' },
        { text: 'Black is simply winning', why: 'Not by force. After 21.Bxg3 the engine sees a roughly level game.' },
        { text: 'Black has lost a pawn for nothing', why: "Black got a half-open f-file and a pawn hitting f2 next to White's king. Najdorf won the game." }
      ]
    },
    {
      type: 'name',
      prompt: 'Which game is the classic model of the ...g4–g3 break, and won a brilliancy prize?',
      choices: [
        { text: 'Taimanov–Najdorf, Zurich 1953', correct: true, why: 'Right. Najdorf played 18...g4 and 19...g3 and won with Black.' },
        { text: 'Najdorf–Gligorić, Mar del Plata 1953', why: 'That game gave the variation its name, and Gligorić won it with Black. The brilliancy prize ...g4–g3 game was Taimanov–Najdorf.' },
        { text: 'Kramnik–Kasparov, Novgorod 1997', why: "That was a Bayonet game that White won (Module 4.6)." }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move. White just took on g4. How should Black take back?',
      moves: `${TN_18} g4 fxg4`,
      orientation: 'black',
      choices: [
        { text: '19...Nxg4', correct: true, why: "Right. The knight lands close to White's king and hits f2 and e3." },
        { text: "Don't take back: 19...Bd7", why: 'Too slow. White keeps the extra pawn and plays h3 to guard g4.' },
        { text: "Don't take back: 19...Rg7", why: 'White just keeps the pawn. Take back first, then bring more pieces.' }
      ]
    },
    {
      type: 'concept',
      prompt: "Why does Black's attack aim at the g-file?",
      choices: [
        { text: "White's king is on g1, so an open g-file brings Black's rooks and queen at it", correct: true, why: 'Right. Opening files near the king is how a pawn storm turns into a mating attack.' },
        { text: 'To win the g2-pawn', why: 'Winning pawns is a side effect. The goal is to open lines at the king.' },
        { text: 'The g-file is already open', why: "It isn't: both sides have pawns on it. ...g4 is how Black tries to open it." }
      ]
    }
  ],
  key: { name: 'The ...g4 break (Taimanov–Najdorf, 18...g4)', moves: `${TN_18} g4`, orientation: 'black' },
  terms: [
    { term: 'Break', meaning: 'A pawn move that forces open lines in the enemy position. Another word for a lever.' },
    { term: 'Wedge', meaning: "A pawn pushed deep into the enemy camp, like Black's pawn on g3. It cramps the defender's pieces." },
    { term: 'Practical sacrifice', meaning: 'A sacrifice that may not win by force, but gives the opponent many ways to go wrong.' }
  ]
})
