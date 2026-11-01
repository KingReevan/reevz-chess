import { defineModule } from '../../../types'
import { MAIN } from '../lines'

/** model-gelfand-nakamura-2010, moves 1–28 */
const GN = `${MAIN} Nd2 Ne8 b4 f5 c5 Nf6 f3 f4 Nc4 g5 a4 Ng6 Ba3 Rf7 b5 dxc5 Bxc5 h5 a5 g4 b6 g3 Kh1 Bf8 d6 axb6 Bg1 Nh4 Re1 Nxg2 dxc7 Nxe1 Qxe1 g2+ Kxg2 Rg7+ Kh1 Bh3 Bf1 Qd3`
/** model-piket-kasparov-1989, up to 23...Ng3+ */
const PK_23 = 'd4 Nf6 Nf3 g6 c4 Bg7 Nc3 O-O e4 d6 Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 Be3 f5 f3 f4 Bf2 g5 b4 Nf6 c5 Ng6 cxd6 cxd6 Rc1 Rf7 a4 Bf8 a5 Bd7 Nb5 g4 Nc7 g3 Nxa8 Nh5 Kh1 gxf2 Rxf2 Ng3+'
/** What if 24.hxg3? (engine's longest defense, forced mate) */
const PK_HXG3 = `${PK_23} hxg3 fxg3 Kg1 Qh4 Bb5 Nf4 Bxd7 Qh2+ Kf1 Qh1#`
/** 24.hxg3? fxg3 25.Rf1 is a quicker mate (engine-checked) */
const PK_RF1 = `${PK_23} hxg3 fxg3 Rf1 Qh4+ Kg1 Qh2#`

export default defineModule({
  id: '3.6',
  title: 'Sacrifices on g2, g3 and h3',
  minutes: 12,
  level: 2,
  goals: [
    "See how Black's pieces break through on g2, g3 and h3",
    'Learn why checks come first, even with your queen hanging',
    'Know which sacrifices the engine calls sound, and where the defender went wrong'
  ],
  intro:
    "Pawns open the lines, but pieces deliver the blow. When the g-file is about to open, Black often throws a knight or bishop at the squares next to White's king. This module looks at two famous finishes and asks a fair question each time: was the sacrifice sound, or did the defender go wrong?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Gelfand–Nakamura: g2 and h3',
      intro:
        'World Team Championship, Bursa 2010. This game began 9.Nd2 Ne8 (Module 4.8) instead of 9.Ne1, but the race is the same. Black won.',
      moves: GN,
      start: 41,
      orientation: 'black',
      steps: {
        41: {
          title: 'A pure race',
          text: "21.d6. White's pawns on b6 and d6 both hit c7. Black's g-pawn is already on g3, close to White's king on h1.",
          arrows: [['d6', 'c7', 'red'], ['b6', 'c7', 'red']],
          marks: ['g3']
        },
        42: {
          title: 'One pawn removed',
          text: '21...axb6. Black takes one of the pawns. The new b6-pawn attacks the c5-bishop.',
          arrows: [['b6', 'c5', 'red']]
        },
        43: {
          title: 'The bishop runs home',
          text: '22.Bg1. The bishop drops back to g1, where it guards h2 against the g3-pawn.',
          arrows: [['g1', 'h2', 'green']]
        },
        44: {
          title: 'Next to the king',
          text: "22...Nh4. The knight jumps close to White's king. It hits g2 and f3.",
          arrows: [['h4', 'g2', 'red'], ['h4', 'f3', 'red']]
        },
        45: {
          title: 'Making room',
          text: "23.Re1. The engine's choice. One idea: the rook leaves f1, so the e2-bishop can later drop back there to guard g2.",
          arrows: [['e2', 'f1', 'blue']]
        },
        46: {
          title: 'The knight sacrifice',
          text: "23...Nxg2. Black gives the knight for a pawn to break open White's king. The engine agrees it is Black's best move: with best play the game stays roughly balanced. The knight also hits the e1-rook.",
          arrows: [['g2', 'e1', 'red']],
          ann: '!'
        },
        47: {
          title: 'The decisive mistake',
          text: '24.dxc7. White ignores the knight and attacks the d8-queen. The engine says 24.Kxg2 was needed. After this move, Black is winning.',
          arrows: [['c7', 'd8', 'red']],
          ann: '?'
        },
        48: {
          title: 'Ignore the queen',
          text: "24...Nxe1. Black takes the rook and leaves the queen hanging. If 25.cxd8=Q, then 25...g2 is mate: the e1-knight guards g2, so the king can't take the pawn.",
          arrows: [['g3', 'g2', 'yellow'], ['e1', 'g2', 'green']]
        },
        49: {
          title: 'White removes the knight',
          text: '25.Qxe1. White takes the knight, so the king can take on g2 later. Black now has a rook for a knight and an extra pawn, but the queen is still attacked.',
          arrows: [['c7', 'd8', 'red']]
        },
        50: {
          title: 'Checks come first',
          text: '25...g2+. The pawn gives check and opens the g-file. White has no time to take the queen.',
          arrows: [['g2', 'h1', 'red']]
        },
        51: {
          title: 'The only move',
          text: "26.Kxg2. The only legal move. White's king now stands on the open g-file.",
          marks: ['g2']
        },
        52: {
          title: 'Rook to g7',
          text: '26...Rg7+. The rook swings to g7 with check, the move Module 3.4 promised.',
          arrows: [['g7', 'g2', 'red']]
        },
        53: {
          title: 'Into the corner',
          text: '27.Kh1. The king hides. 27.Kf2 would walk into a mate in three.',
          marks: ['h1']
        },
        54: {
          title: 'The bishop joins',
          text: "27...Bh3. The bishop eyes g2, right next to White's king, and f1 behind it. The queen is still hanging, and still White can't take it: 28.cxd8=Q runs into 28...Bg2 mate.",
          arrows: [['h3', 'g2', 'red']]
        },
        55: {
          title: 'White blocks',
          text: '28.Bf1. The bishop guards g2 and attacks the h3-bishop.',
          arrows: [['f1', 'g2', 'green'], ['f1', 'h3', 'red']]
        },
        56: {
          title: 'Take me if you can',
          text: '28...Qd3. The queen steps right into the f1-bishop\'s path. 29.Bxd3 Bg2 is mate, and 29.Bxh3 Qxf3+ 30.Bg2 Qxg2 is mate too. Black is winning, and Nakamura won a few moves later.',
          arrows: [['f1', 'd3', 'blue'], ['h3', 'g2', 'yellow']],
          ann: '!'
        }
      }
    },
    {
      kind: 'text',
      title: 'Checks come first',
      body:
        "From move 24 until 28...Qd3, Nakamura's queen stood on d8, attacked by the c7-pawn. White never had time to take it. Every Black move was a capture, a check, or a threat of mate. On moves 26 and 27 White was in check, and on moves 25 and 28, cxd8=Q would have allowed mate on g2.\n\nThis is the rule that makes such attacks work: **a threat of mate beats a threat to win material.** Before you grab, always ask what your opponent threatens against your king."
    },
    {
      kind: 'walkthrough',
      title: 'Piket–Kasparov: the knight on g3',
      intro:
        'Tilburg 1989. White has just taken the a8-rook (the full game is in Module 3.7). Black gives a knight check on g3. Here we look at what happens if White takes it.',
      moves: PK_HXG3,
      start: 45,
      orientation: 'black',
      steps: {
        45: {
          title: 'The exchange is gone',
          text: "White's knight has taken the a8-rook, and Black's g-pawn has taken the f2-bishop. Now Black's pieces gather around White's king, and the h5-knight is one jump from g3.",
          arrows: [['h5', 'g3', 'blue']]
        },
        46: {
          title: 'Knight check',
          text: "23...Ng3+. The knight gives check from g3. In the game White played 24.Kg1, the only move. Let's see why.",
          arrows: [['g3', 'h1', 'red']]
        },
        47: {
          title: 'Taking is fatal',
          text: '24.hxg3. White takes the knight. It looks like White has won a piece.',
          ann: '?'
        },
        48: {
          title: 'The h2-pawn is gone',
          text: '24...fxg3. The f-pawn takes back. The g3-pawn attacks the f2-rook and guards h2, and with White\'s h-pawn gone, Black\'s queen can come down the h-file.',
          arrows: [['g3', 'h2', 'yellow'], ['g3', 'f2', 'red'], ['d8', 'h4', 'blue']]
        },
        49: {
          title: 'The king steps out',
          text: '25.Kg1. The engine\'s top choice, but nothing helps: against any 25th move, Black mates in at most four moves.',
          marks: ['g1']
        },
        50: {
          title: 'Queen to the h-file',
          text: '25...Qh4. The queen heads for h2, where the g3-pawn protects it. The threat is ...Qh2+ and ...Qh1 mate.',
          arrows: [['h4', 'h2', 'red']]
        },
        51: {
          title: 'A desperate try',
          text: '26.Bb5. White attacks the d7-bishop. There is no real defense left.',
          arrows: [['b5', 'd7', 'red']]
        },
        52: {
          title: 'Close the box',
          text: '26...Nf4. The last knight joins in. It covers e2 and g2, two escape squares for White\'s king.',
          arrows: [['f4', 'e2', 'red'], ['f4', 'g2', 'red']]
        },
        53: {
          title: 'It does not matter',
          text: '27.Bxd7. White takes a bishop, but the mate comes first.',
          marks: ['d7']
        },
        54: {
          title: 'Check on h2',
          text: '27...Qh2+. The g3-pawn guards the queen. The king has to go to f1.',
          arrows: [['h2', 'g1', 'red']]
        },
        55: {
          title: 'The last square',
          text: '28.Kf1. The king has nowhere else to go.',
          marks: ['f1']
        },
        56: {
          title: 'Checkmate',
          text: "28...Qh1#. The knight covers e2 and g2, and White's own pieces block e1 and f2. So 24.hxg3 loses by force, and Piket had to play 24.Kg1.",
          arrows: [['h1', 'f1', 'red'], ['f4', 'e2', 'red'], ['f4', 'g2', 'red']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Was it sound?',
      body:
        "**Nakamura's 23...Nxg2:** sound. It was the engine's top move, and the game stayed balanced until White's 24.dxc7 went wrong.\n\n**Kasparov's attack:** sound as well. The engine says White's real mistake came earlier, when the knight took the a8-rook (Module 3.7).\n\nCompare Najdorf's 19...g3 in Module 3.5: that one was a practical sacrifice, which White could have survived with exact defense."
    }
  ],
  takeaway:
    "When the g-file opens, Black throws pieces at g2, g3 and h3. Checks and mate threats come first, so Black can even leave the queen hanging. In Gelfand–Nakamura the knight sacrifice was sound; in Piket–Kasparov, taking the knight on g3 would have lost to a forced mate.",
  lookAhead:
    'Next: two complete stories. The game that named the Mar del Plata, and the Kasparov masterpiece where Black lets White win the exchange.',
  drills: [
    {
      title: 'Checks first',
      prompt: "You're Black in Gelfand–Nakamura. White has just taken your knight on e1, and your queen is attacked by the c7-pawn. Don't save it: keep giving checks and threats until your queen can step into the f1-bishop's path.",
      moves: GN,
      start: 49,
      side: 'black',
      hints: [
        'Your g-pawn can give check. After the king takes, a rook can check on the g-file.',
        'With the king on h1, bring the bishop close to it. When White blocks with Bf1, put your queen where taking it allows ...Bg2 mate.'
      ],
      success: '25...g2+, 26...Rg7+, 27...Bh3 and 28...Qd3! Every move was the engine\'s first choice. 29.Bxd3 Bg2 is mate.'
    },
    {
      title: 'Punish 24.hxg3',
      prompt: "You're Black. White took your knight with 24.hxg3?, and after your recapture saved the rook with 25.Rf1. Find the fastest mate.",
      moves: PK_RF1,
      start: 46,
      side: 'black',
      hints: [
        'First take back with the f-pawn. The new pawn on g3 guards h2.',
        'Then the queen comes to the h-file with check, and lands on h2.'
      ],
      success: '24...fxg3 25.Rf1 Qh4+ 26.Kg1 Qh2#. The g3-pawn guards the queen and covers f2.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'Black has just played 28...Qd3. Why can\'t White take the queen with 29.Bxd3?',
      moves: GN,
      orientation: 'black',
      choices: [
        { text: '29...Bg2 is checkmate', correct: true, why: 'Right. With the f1-bishop gone, the h3-bishop checks from g2, protected by the g7-rook.' },
        { text: 'The queen is protected by the h3-bishop', why: 'Nothing protects d3. White can take, but it costs the game: 29...Bg2 is mate.' },
        { text: 'White can take, and wins', why: 'Look at g2. After 29.Bxd3 Bg2 the king has no escape.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move. Black has just checked with 23...Ng3+. Why is 24.hxg3 a mistake?',
      moves: PK_23,
      orientation: 'white',
      choices: [
        { text: '24...fxg3 leads to a forced mate down the h-file', correct: true, why: 'Right. The g3-pawn guards h2, and the queen comes to h4 and h2. White had to play 24.Kg1.' },
        { text: 'It only loses the f2-rook', why: "The rook is attacked, but the real problem is worse: Black's queen comes down the h-file and mates." },
        { text: "It isn't a mistake: White wins a knight", why: 'After 24...fxg3 Black mates by force. Taking the knight costs the game.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Was 23...Nxg2 in Gelfand–Nakamura a sound sacrifice?',
      choices: [
        { text: "Yes: it was the engine's top move, and White's 24.dxc7 was the real mistake", correct: true, why: 'Right. After 24.Kxg2 the game would have stayed roughly balanced.' },
        { text: 'No: it only worked because White blundered at once', why: 'White did go wrong with 24.dxc7, but the sacrifice was also the engine\'s first choice. It was sound.' },
        { text: 'Yes: it won by force', why: 'Not by force. With 24.Kxg2 White could have kept the balance.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why did Black play 25...g2+ instead of saving the attacked queen?',
      choices: [
        { text: 'A check must be answered, so White never had time to take the queen', correct: true, why: 'Right. Checks and mate threats come first. And if White had taken with 25.cxd8=Q, then 25...g2 would have been mate.' },
        { text: "The queen wasn't attacked", why: 'It was: the c7-pawn attacked d8 from move 24 until 28...Qd3.' },
        { text: 'To promote the g-pawn', why: 'The pawn was captured at once. Its job was to open the g-file with check.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: "Black to move. White's king has just taken on g2. What is the strongest move?",
      moves: GN.split(' ').slice(0, 51).join(' '),
      orientation: 'black',
      choices: [
        { text: '26...Rg7+', correct: true, why: 'Right. The rook checks on the open g-file and brings another attacker. Black is winning.' },
        { text: '26...Qxc7', why: 'It saves the queen and Black stays better, but it lets White breathe. Keep checking.' },
        { text: '26...Rxc7', why: 'It removes the pawn, but it gives White time. The check on the g-file is much stronger.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In both games, what did the black pawn on g3 do for the mating attack?',
      choices: [
        { text: "It covered squares near White's king, like h2 and f2, and backed up Black's pieces", correct: true, why: 'Right. The wedge on g3 supported the queen on h2 in Piket–Kasparov and threatened ...g2 in Gelfand–Nakamura.' },
        { text: 'It was about to promote', why: 'It was far from promoting. Its job was to support the attack.' },
        { text: "It blocked Black's own rook", why: 'It did the opposite: it opened lines and covered squares for Black.' }
      ]
    }
  ],
  key: { name: 'Gelfand–Nakamura: 28...Qd3!', moves: GN, orientation: 'black' },
  terms: [
    { term: 'En prise', meaning: 'A piece left where it can be captured. Sometimes it is a trap, as with 28...Qd3.' },
    { term: 'Forced mate', meaning: 'A checkmate that the defender cannot avoid, whatever they play.' },
    { term: 'Sound sacrifice', meaning: 'A sacrifice that holds up against the best defense, not just in practice.' }
  ]
})
