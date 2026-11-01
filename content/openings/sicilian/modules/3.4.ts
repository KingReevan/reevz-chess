import { defineModule } from '../../../types'
import { DRAGON, YUGOSLAV } from '../lines'

/** model-karpov-korchnoi-1974-g2, up to 13...Rxc4 */
const KK = `${DRAGON} Be3 Bg7 f3 Nc6 Qd2 O-O Bc4 Bd7 h4 Rc8 Bb3 Ne5 O-O-O Nc4 Bxc4 Rxc4`
/** the same game, moves 14 to 18 */
const KK_ATTACK = `${KK} h5 Nxh5 g4 Nf6 Nde2 Qa5 Bh6 Bxh6 Qxh6`
/** model-fischer-larsen-1958, up to 16...Rc7 */
const FL = `${YUGOSLAV} Bc4 Nxd4 Bxd4 Be6 Bb3 Qa5 O-O-O b5 Kb1 b4 Nd5 Bxd5 Bxd5 Rac8 Bb3 Rc7`
/** the same game, moves 17 to 23 */
const FL_ATTACK = `${FL} h4 Qb5 h5 Rfc8 hxg6 hxg6 g4 a5 g5 Nh5 Rxh5 gxh5 g6`
/** dragon-yug-soltis: 12.h4 h5 13.Bg5 Rc5 */
const SOLTIS = `${YUGOSLAV} Bc4 Bd7 O-O-O Rc8 Bb3 Ne5 h4 h5 Bg5 Rc5`

export default defineModule({
  id: '3.4',
  title: "White's attack: h4–h5, Bh6 and the h-file",
  minutes: 12,
  level: 2,
  goals: [
    "Learn White's three-step recipe: open the h-file, trade the Dragon bishop, attack h7",
    'See it work in Karpov–Korchnoi 1974 and Fischer–Larsen 1958',
    "Know Black's brake: ...h5, the Soltis Variation"
  ],
  intro:
    "Players sum up White's plan against the Dragon in three steps: open the h-file, trade off the Dragon bishop, and attack the black king. How does each step work, and how can Black slow it down? Two famous games show the attack, and one quiet pawn move shows the defense.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Karpov–Korchnoi 1974: the recipe',
      intro: 'We pick up the game from Module 3.3. Black has just taken on c4 with the rook. Watch the h-file and the g7-bishop.',
      moves: KK_ATTACK,
      start: 26,
      orientation: 'white',
      steps: {
        26: {
          title: 'The rook on c4',
          text: "13...Rxc4. Black's rook hits the c3- and d4-knights. White ignores it and turns to the other wing.",
          arrows: [['h4', 'h5', 'green']]
        },
        27: {
          title: 'A pawn for an open file',
          text: '14.h5. The pawn attacks g6 and offers itself. If Black takes, the h-file opens for the rook on h1.',
          arrows: [['h5', 'g6', 'red'], ['h1', 'h5', 'blue']],
          ann: '!'
        },
        28: {
          title: 'Black takes',
          text: '14...Nxh5. Black grabs the pawn. But the knight on h5 is out on the edge, and it has left its post on f6.',
          marks: ['h5']
        },
        29: {
          title: 'Chase the knight',
          text: '15.g4. The g-pawn attacks the knight, and it has to go back.',
          arrows: [['g4', 'h5', 'red']]
        },
        30: {
          title: 'The h-file is open',
          text: "15...Nf6. The knight returns. White is a pawn down, but the rook on h1 now looks straight up the h-file at h7.",
          arrows: [['h1', 'h7', 'blue']],
          marks: ['h7']
        },
        31: {
          title: 'Guarding c3',
          text: '16.Nde2. The knight leaves d4, where the rook was hitting it, and adds a guard to the c3-knight. That makes the exchange sacrifice ...Rxc3 less dangerous.',
          arrows: [['e2', 'c3', 'green']]
        },
        32: {
          title: 'The queen joins in',
          text: "16...Qa5. The queen adds pressure on c3. But it is far from Black's king. 16...Re8 was clearly better.",
          arrows: [['a5', 'c3', 'red']],
          ann: '?'
        },
        33: {
          title: 'Trade the Dragon bishop',
          text: "17.Bh6. Step two of the recipe. The bishop offers to swap itself for Black's best defender. Slower moves give Black time to defend.",
          arrows: [['h6', 'g7', 'red']],
          ann: '!'
        },
        34: {
          title: 'Black trades',
          text: '17...Bxh6. If Black does not take, White will take on g7 and the king loses its guard anyway.',
          marks: ['h6']
        },
        35: {
          title: 'The queen on h6',
          text: "18.Qxh6. The queen sits close to Black's king with the rook behind it. Only the king and the f6-knight guard h7. Drive that knight away, and Qxh7 comes with crushing force. White is clearly better.",
          arrows: [['h6', 'h7', 'red'], ['h1', 'h6', 'blue']],
          marks: ['f6', 'h7']
        }
      }
    },
    {
      kind: 'text',
      title: 'How Karpov finished',
      body:
        "From here Karpov went after the f6-knight, the last guard of h7. He hit it with 20.g5, traded off the rook that took on g5, and finally removed it with 24.e5 and 25.exf6. Then came 26.Qxh7+ Kf8 27.Qh8+, and Korchnoi resigned. The whole game took just 27 moves.\n\nThat is the recipe in one game: **open the h-file, trade the Dragon bishop, remove the f6-knight, and land on h7.**"
    },
    {
      kind: 'walkthrough',
      title: 'Fischer–Larsen 1958: the rook sacrifice',
      intro: 'Module 3.1 showed the first moves of this game. Black is about to double rooks on the c-file. Fischer goes for the h-file anyway.',
      moves: FL_ATTACK,
      start: 32,
      orientation: 'white',
      steps: {
        32: {
          title: 'Rooks on the c-file',
          text: "16...Rc7. Black is about to double rooks against c2. Here White is clearly better.",
          marks: ['c2']
        },
        33: {
          title: 'The h-pawn marches',
          text: '17.h4. Step one: the h-pawn heads for h5.',
          arrows: [['h4', 'h5', 'green']]
        },
        34: {
          title: 'The queen swings over',
          text: "17...Qb5. The queen moves toward the light squares around White's king. Later it can support ...a5–a4 against the b3-bishop.",
          arrows: [['b5', 'a4', 'blue']]
        },
        35: {
          title: 'Attacking g6',
          text: '18.h5. The pawn hits g6. White wants to open the h-file.',
          arrows: [['h5', 'g6', 'red']]
        },
        36: {
          title: 'Doubled rooks',
          text: '18...Rfc8. Both black rooks now aim down the c-file at c2.',
          arrows: [['c7', 'c2', 'red']]
        },
        37: {
          title: 'Pawn takes pawn',
          text: '19.hxg6. White swaps pawns to open the h-file.',
          marks: ['g6']
        },
        38: {
          title: 'The file is open',
          text: '19...hxg6. Now the h-file has no pawns at all. White\'s rook on h1 controls it.',
          arrows: [['h1', 'h8', 'blue']]
        },
        39: {
          title: 'The next pawn',
          text: '20.g4. The g-pawn comes next. It wants to reach g5 and kick the f6-knight, the main guard of h7 and h5.',
          arrows: [['g4', 'g5', 'green']],
          marks: ['f6']
        },
        40: {
          title: "Black's own attack",
          text: '20...a5. Black pushes for ...a4 to chase the b3-bishop. Both sides are racing.',
          arrows: [['a5', 'a4', 'green']]
        },
        41: {
          title: 'Kick the knight',
          text: '21.g5. The pawn attacks the knight. It must move.',
          arrows: [['g5', 'f6', 'red']]
        },
        42: {
          title: 'A wall on h5',
          text: '21...Nh5. The knight blocks the h-file. Now White\'s rook is stopped.',
          marks: ['h5']
        },
        43: {
          title: 'Smash the wall',
          text: '22.Rxh5. Fischer gives a rook for the knight. This is an exchange sacrifice: material for open lines toward the king.',
          arrows: [['h1', 'h5', 'red']],
          ann: '!'
        },
        44: {
          title: 'The wrong recapture',
          text: '22...gxh5. Black takes the rook, but now nothing stops the g5-pawn from moving up to g6. Fischer wrote that Black had to try 22...Bxd4 instead, and the engine agrees.',
          ann: '?'
        },
        45: {
          title: 'The g-pawn strikes',
          text: '23.g6. The pawn hits f7 and opens more lines to Black\'s king. White is now winning, and Fischer won in 31 moves.',
          arrows: [['g6', 'f7', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "Black's brake: 12...h5",
      intro: 'In the 9.Bc4 main line, White can push 12.h4 at once. Black has a simple answer.',
      moves: SOLTIS,
      start: 22,
      orientation: 'black',
      steps: {
        22: {
          title: 'The main line',
          text: '11...Ne5. The position from Module 3.3. This time White skips Kb1 and starts the h-pawn.',
          marks: ['h4']
        },
        23: {
          title: 'The h-pawn moves',
          text: '12.h4. White wants h4–h5 to open the h-file, just like Karpov.',
          arrows: [['h4', 'h5', 'green']]
        },
        24: {
          title: 'A pawn on h5',
          text: '12...h5. Black puts a pawn on h5 first, so White\'s h-pawn is stuck. This is the Soltis Variation. To open the h-file now, White must play g2–g4, often as a pawn sacrifice.',
          arrows: [['g2', 'g4', 'blue']],
          marks: ['h5'],
          ann: '!'
        },
        25: {
          title: 'Hitting the guard',
          text: '13.Bg5. The bishop attacks the f6-knight, the piece that guards h5. White is preparing g2–g4.',
          arrows: [['g5', 'f6', 'red'], ['f6', 'h5', 'green']]
        },
        26: {
          title: 'The rook steps up',
          text: '13...Rc5. The rook guards the e5-knight and stands ready for action on the c-file. The engine gives White a small edge. Module 3.5 shows the rook\'s most famous trick.',
          arrows: [['c5', 'e5', 'green'], ['c5', 'c3', 'yellow']]
        }
      }
    },
    {
      kind: 'history',
      title: "Kasparov's choice",
      body:
        "In his 1995 World Championship match against Anand, Kasparov surprised everyone by playing the Dragon. In game 11 he used the ...h5 brake against 12.h4, kept the h-file closed, and won. Module 3.5 shows how."
    }
  ],
  takeaway:
    "White's recipe is h4–h5 to open the h-file, Bh6 to trade the Dragon bishop, and then remove the f6-knight to land on h7. Black's best brake is ...h5, which keeps the h-file shut.",
  lookAhead:
    "Module 3.5 shows Black's side of the race: the c-file and the famous exchange sacrifice ...Rxc3.",
  drills: [
    {
      title: 'Open the h-file',
      prompt: "You're White (Karpov). Black's rook has just taken on c4. Start the kingside attack, and answer ...Nxh5 by chasing the knight.",
      moves: `${KK} h5 Nxh5 g4`,
      start: 26,
      side: 'white',
      hints: [
        'Push the h-pawn and offer it.',
        'After ...Nxh5, a pawn move attacks the knight.'
      ],
      success: '14.h5! Nxh5 15.g4. The knight must go back, and the h-file is open for your rook.'
    },
    {
      title: 'Break the wall',
      prompt: "You're White (Fischer). Black's knight on h5 blocks your rook on the h-file. Break through.",
      moves: FL_ATTACK,
      start: 42,
      side: 'white',
      hints: [
        'The knight is only guarded by the g6-pawn. Is it worth a rook to remove it?',
        'Take on h5 with the rook. After ...gxh5, push the g-pawn.'
      ],
      success: '22.Rxh5! gxh5 23.g6. Lines open in front of Black\'s king, and White is winning.'
    }
  ],
  quiz: [
    {
      type: 'plan',
      prompt: "What is White's usual attacking recipe in the Yugoslav Attack?",
      choices: [
        { text: 'Open the h-file with h4–h5, trade the Dragon bishop with Bh6, then attack h7', correct: true, why: 'Right. Each step takes away one of the defenses of Black\'s king.' },
        { text: "Push the a- and b-pawns against Black's king", why: "Black's king is on the kingside. White's pawn storm uses the g- and h-pawns." },
        { text: 'Play f4–f5 to open the f-file', why: "White's f-pawn sits on f3 to guard e4 and keep ...Ng4 away. The attack goes down the h-file." }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move (Karpov–Korchnoi). Find the move that keeps White\'s attack going.',
      moves: `${KK} h5 Nxh5 g4 Nf6 Nde2 Qa5`,
      orientation: 'white',
      choices: [
        { text: '17.Bh6', correct: true, why: 'Yes. White trades off the Dragon bishop, and the queen follows to h6. White is clearly better.' },
        { text: '17.Kb1', why: 'A safe move, but too slow. Black gets time to defend, and the position is about level.' },
        { text: '17.g5', why: 'After 17...Nh5 the knight blocks the h-file and Black is better. Trade the bishop first.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 18.Qxh6 in Karpov–Korchnoi, which black pieces guard h7?',
      moves: KK_ATTACK,
      orientation: 'black',
      choices: [
        { text: 'The king and the f6-knight', correct: true, why: "Right. That's why White's next goal is to drive the knight away from f6." },
        { text: 'The g7-bishop', why: 'The Dragon bishop has just been traded off. That is the point of Bh6.' },
        { text: 'The d7-bishop', why: "From d7 the bishop's diagonals do not pass through h7. The guards are the king and the f6-knight." }
      ]
    },
    {
      type: 'trap',
      prompt: 'In Fischer–Larsen, why did Fischer give up a rook with 22.Rxh5?',
      moves: FL_ATTACK.split(' ').slice(0, 42).join(' '),
      orientation: 'white',
      choices: [
        { text: 'To remove the knight that blocked the h-file and open lines to the king', correct: true, why: 'Yes. It is an exchange sacrifice: White gives a rook for a knight to tear open Black\'s king.' },
        { text: 'To win the knight for free', why: 'The g6-pawn guards h5, so Black can take back. White gives up the exchange on purpose.' },
        { text: 'To trade rooks and head for an endgame', why: 'There is no rook trade here. White wants an attack, not an endgame.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why does Black play 12...h5 in the Soltis Variation?',
      moves: SOLTIS.split(' ').slice(0, 24).join(' '),
      orientation: 'black',
      choices: [
        { text: "To stop h4–h5, so the h-file can't be opened easily", correct: true, why: 'Right. Now White needs g2–g4, often costing a pawn, to open lines.' },
        { text: 'To start a pawn storm against White\'s king', why: "White's king is on the queenside. ...h5 is a defensive move on Black's own wing." },
        { text: 'To make room for the king on h7', why: 'The king may use h7 later, but the main point is to block the h-pawn.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Yugoslav Attack, which black piece does White most want to trade with Bh6?',
      choices: [
        { text: 'The g7-bishop', correct: true, why: "Yes. It is Black's best attacker and the main guard of the dark squares around the king." },
        { text: 'The f6-knight', why: 'White does want to drive the knight away, but Bh6 is aimed at the g7-bishop.' },
        { text: 'The rook on c4', why: 'The rook is annoying, but Bh6 is about the Dragon bishop.' }
      ]
    }
  ],
  key: { name: 'Yugoslav: the h-pawn offer 14.h5! (Karpov–Korchnoi)', moves: `${KK} h5`, orientation: 'white' },
  terms: [
    { term: 'Open file', meaning: 'A file with no pawns of either color. A rook on an open file can go all the way up it.' },
    { term: 'Exchange sacrifice', meaning: 'Giving up a rook for a bishop or knight on purpose, to open lines or wreck the enemy king\'s cover.' },
    { term: 'Pawn storm', meaning: "Pushing several pawns toward the enemy king to open lines for your pieces." }
  ]
})
