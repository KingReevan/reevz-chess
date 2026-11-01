import { defineModule } from '../../../types'
import { NAJDORF, DRAGON, OPEN_NC6, ACCELERATED, TAIMANOV } from '../lines'

/** model-fischer-najdorf-1962, moves 6–15 (Fischer won in 24 moves) */
const FISCHER = `${NAJDORF} h3 b5 Nd5 Bb7 Nxf6+ gxf6 c4 bxc4 Bxc4 Bxe4 O-O d5 Re1 e5 Qa4+ Nd7 Rxe4 dxe4 Nf5`
/** model-tal-larsen-1965, moves 1–19 (Tal won in 37 moves) */
const TAL = `${OPEN_NC6} e6 Nc3 d6 Be3 Nf6 f4 Be7 Qf3 O-O O-O-O Qc7 Ndb5 Qb8 g4 a6 Nd4 Nxd4 Bxd4 b5 g5 Nd7 Bd3 b4 Nd5 exd5 exd5 f5 Rde1 Rf7 h4`
/** model-karpov-korchnoi-1974-g2, the whole game (Korchnoi resigned after 27.Qh8+) */
const KK = `${DRAGON} Be3 Bg7 f3 Nc6 Qd2 O-O Bc4 Bd7 h4 Rc8 Bb3 Ne5 O-O-O Nc4 Bxc4 Rxc4 h5 Nxh5 g4 Nf6 Nde2 Qa5 Bh6 Bxh6 Qxh6 Rfc8 Rd3 R4c5 g5 Rxg5 Rd5 Rxd5 Nxd5 Re8 Nef4 Bc6 e5 Bxd5 exf6 exf6 Qxh7+ Kf8 Qh8+`
/** model-karpov-kasparov-1985-g16, moves 5–19 (Kasparov won in 40 moves) */
const KASPAROV = `${TAIMANOV} Nb5 d6 c4 Nf6 N1c3 a6 Na3 d5 cxd5 exd5 exd5 Nb4 Be2 Bc5 O-O O-O Bf3 Bf5 Bg5 Re8 Qd2 b5 Rad1 Nd3 Nab1 h6 Bh4 b4 Na4 Bd6`
/** model-nezhmetdinov-chernikov-1962, moves 5–13 (Nezhmetdinov won in 33 moves) */
const NEZH = `${ACCELERATED} Nc3 Bg7 Be3 Nf6 Bc4 O-O Bb3 Ng4 Qxg4 Nxd4 Qh4 Qa5 O-O Bf6 Qxf6 Ne2+ Nxe2 exf6`

export default defineModule({
  id: '9.7',
  title: 'Sicilian classics: a look back',
  minutes: 12,
  level: 3,
  goals: [
    'Revisit five famous Sicilian games, one key moment each',
    'Know the honest engine verdict on each famous move',
    'Take one lesson from each game into your own play'
  ],
  intro:
    "The Sicilian has produced some of the most famous games in chess history. Earlier chapters showed several of them. This module goes back to five, one key moment each, with the honest verdict of a modern engine. Some famous moves turn out to be less than perfect, and some games were decided by a quiet mistake rather than the brilliant move everyone remembers.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Fischer–Najdorf, Varna 1962: the king in the center',
      intro: "From Module 2.9. Fischer had White against Miguel Najdorf in his own opening. Black's king is still on e8.",
      moves: FISCHER,
      start: 23,
      orientation: 'white',
      steps: {
        23: {
          title: 'Rook to e1',
          text: '12.Re1. The rook attacks the e4-bishop down the e-file. Black has an extra pawn, but the king has not castled.',
          arrows: [['e1', 'e4', 'red']],
          marks: ['e8']
        },
        24: {
          title: 'The losing mistake',
          text: "12...e5. Najdorf attacks the d4-knight. The engine says this was the losing mistake: 12...Bxg2 was better. White's next moves come with check and threats against the king on e8.",
          arrows: [['e5', 'd4', 'red']],
          ann: '?'
        },
        25: {
          title: 'Check',
          text: '13.Qa4+. The queen checks along the diagonal from a4 to e8.',
          arrows: [['a4', 'e8', 'red']]
        },
        26: {
          title: 'A block',
          text: '13...Nd7. Black blocks with the knight.',
          marks: ['d7']
        },
        27: {
          title: 'The exchange sacrifice',
          text: "14.Rxe4. Fischer gives a rook for the bishop. It is the engine's top move, and it wins.",
          marks: ['e4'],
          ann: '!'
        },
        28: {
          title: 'Lines open',
          text: '14...dxe4. Black takes the rook. Now d5 is empty, so the c4-bishop sees f7 again.',
          arrows: [['c4', 'f7', 'red']]
        },
        29: {
          title: 'The knight jumps in',
          text: "15.Nf5. The knight escapes with threats near Black's king, eyeing d6 and g7. Fischer won in 24 moves.",
          arrows: [['f5', 'd6', 'red'], ['f5', 'g7', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Tal–Larsen, Bled 1965: the practical gamble',
      intro: 'From Module 4.8. Candidates semifinal, game 10. Mikhail Tal had White, Bent Larsen had Black, and the kings were on opposite wings.',
      moves: TAL,
      start: 30,
      orientation: 'white',
      steps: {
        30: {
          title: 'The knight is attacked',
          text: '15...b4. The pawn attacks the c3-knight. Where should it go?',
          arrows: [['b4', 'c3', 'red']]
        },
        31: {
          title: 'The knight sacrifice',
          text: '16.Nd5. Instead of retreating, Tal puts the knight where the e6-pawn can take it. A bold practical sacrifice that computers doubt: 16.Ne2 was safer.',
          arrows: [['e6', 'd5', 'red']],
          ann: '!?'
        },
        32: {
          title: 'Larsen accepts',
          text: '16...exd5. Black takes the knight and is a piece up.',
          marks: ['d5']
        },
        33: {
          title: 'Lines open',
          text: '17.exd5. The e-file opens toward the e7-bishop. The d3-bishop aims at h7, and the d4-bishop at g7.',
          arrows: [['d3', 'h7', 'red'], ['d4', 'g7', 'red']]
        },
        34: {
          title: 'Blocking a diagonal',
          text: "17...f5. Black puts a pawn in the way of the d3-bishop's diagonal toward h7.",
          arrows: [['f7', 'f5', 'green']]
        },
        35: {
          title: 'The rook hits e7',
          text: '18.Rde1. The rook attacks the e7-bishop, which nothing defends.',
          arrows: [['e1', 'e7', 'red']]
        },
        36: {
          title: 'The decisive mistake',
          text: '18...Rf7. The rook guards the bishop, but this was the decisive mistake. 18...Bd8, stepping out of the attack, would have held the balance.',
          arrows: [['f7', 'e7', 'green']],
          ann: '?'
        },
        37: {
          title: 'A quiet killer',
          text: "19.h4. The h-pawn heads for h5 and g6 to break open Black's king. White is now winning, and Tal won in 37 moves.",
          arrows: [['h4', 'h5', 'blue']],
          ann: '!'
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "Karpov–Korchnoi, 1974: the h-file pays off",
      intro: "From Modules 3.3 and 3.4. Candidates final, game 2. Karpov has opened the h-file, traded the Dragon bishop with Bh6, and put his queen on h6. Now he finishes the job.",
      moves: KK,
      start: 46,
      orientation: 'white',
      steps: {
        46: {
          title: 'One guard left',
          text: "23...Bc6. White's queen on h6 has the rook behind it on the h-file. Only the king and the f6-knight guard h7. Black's bishop attacks the d5-knight.",
          arrows: [['h6', 'h7', 'red'], ['c6', 'd5', 'red']],
          marks: ['f6', 'h7']
        },
        47: {
          title: 'Remove the last guard',
          text: '24.e5. The pawn attacks the f6-knight, the last piece guarding h7. It is the only winning move.',
          arrows: [['e5', 'f6', 'red']],
          ann: '!'
        },
        48: {
          title: 'Black grabs a knight',
          text: '24...Bxd5. Black takes the d5-knight, but the real fight is on the h-file.',
          marks: ['d5']
        },
        49: {
          title: 'The knight falls',
          text: '25.exf6. White takes the knight. Now only the king guards h7.',
          marks: ['h7']
        },
        50: {
          title: 'Pawn takes pawn',
          text: '25...exf6. Black removes the f6-pawn, but it is too late.'
        },
        51: {
          title: 'Into h7',
          text: '26.Qxh7+. The queen lands on h7 with check. The h1-rook behind it means the king cannot take.',
          arrows: [['h1', 'h7', 'blue'], ['h7', 'g8', 'red']]
        },
        52: {
          title: 'The king runs',
          text: '26...Kf8. The only square.'
        },
        53: {
          title: 'Korchnoi resigns',
          text: "27.Qh8+. Korchnoi resigned here: White's attack wins material by force. The recipe from Module 3.4 in one game: open the h-file, trade the Dragon bishop, remove the f6-knight, land on h7.",
          arrows: [['h8', 'f8', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Karpov–Kasparov, 1985: the knight on d3',
      intro: "From Module 6.4. World Championship, Moscow 1985, game 16. Karpov had White. Kasparov's gambit has left White a pawn up, with a passed pawn on d5.",
      moves: KASPAROV,
      start: 31,
      orientation: 'black',
      steps: {
        31: {
          title: 'A passed pawn',
          text: "16.Rad1. The rook backs up White's extra pawn on d5. Black needs active pieces to make up for it.",
          marks: ['d5']
        },
        32: {
          title: 'The famous knight',
          text: '16...Nd3. The knight lands on d3, hits b2 and f2, and no pawn can kick it. Still, Black is only slightly better here.',
          arrows: [['d3', 'b2', 'red'], ['d3', 'f2', 'red']],
          marks: ['d3'],
          ann: '!'
        },
        33: {
          title: 'The real mistake',
          text: "17.Nab1. The knight goes back to regroup, but it is too slow. This was the decisive mistake: 17.d6 or 17.b4 would have held the balance.",
          arrows: [['a3', 'b1', 'blue']],
          ann: '?'
        },
        34: {
          title: 'A question for the bishop',
          text: '17...h6. Black asks the g5-bishop to decide.',
          arrows: [['h6', 'g5', 'red']]
        },
        35: {
          title: 'Keeping the pin',
          text: '18.Bh4. The bishop keeps the pin on the f6-knight.',
          arrows: [['h4', 'f6', 'red']]
        },
        36: {
          title: 'Kicking the c3-knight',
          text: '18...b4. Now the c3-knight is attacked and has to leave the center.',
          arrows: [['b4', 'c3', 'red']]
        },
        37: {
          title: 'To the rim',
          text: "19.Na4. White's knights now stand on a4 and b1, far from the action.",
          marks: ['a4', 'b1']
        },
        38: {
          title: 'Black dominates',
          text: '19...Bd6. The bishop aims at White\'s king. Black is clearly better, and Kasparov won in 40 moves.',
          arrows: [['d6', 'h2', 'red']],
          marks: ['d3']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "Nezhmetdinov–Chernikov, 1962: the queen sacrifice",
      intro: "Rostov-on-Don 1962. An Accelerated Dragon (Module 3.8): after 8.Bb3, Black played 8...Ng4 9.Qxg4 Nxd4, giving a knight and taking one back. Rashid Nezhmetdinov, a famous attacking player, had White.",
      moves: NEZH,
      start: 18,
      orientation: 'white',
      steps: {
        18: {
          title: 'Material is level',
          text: "9...Nxd4. Black has won the piece back. The d4-knight hits the b3-bishop and is guarded by the g7-bishop.",
          arrows: [['d4', 'b3', 'red'], ['g7', 'd4', 'green']]
        },
        19: {
          title: 'The queen stays near the king',
          text: "10.Qh4. White keeps the queen on the kingside, close to Black's king.",
          arrows: [['g4', 'h4', 'blue']]
        },
        20: {
          title: 'A pin on c3',
          text: '10...Qa5. The queen pins the c3-knight to White\'s king on e1.',
          arrows: [['a5', 'c3', 'red'], ['c3', 'e1', 'red']]
        },
        21: {
          title: 'Unpinning',
          text: '11.O-O. White castles, and the c3-knight is free again.'
        },
        22: {
          title: 'Hitting the queen',
          text: '11...Bf6. The bishop attacks the queen on h4.',
          arrows: [['f6', 'h4', 'red']]
        },
        23: {
          title: 'The queen sacrifice',
          text: "12.Qxf6. Nezhmetdinov gives his queen for the bishop. The engine calls it sound but not stronger than the quiet 12.Qh6 or 12.Qg4.",
          marks: ['f6'],
          ann: '!?'
        },
        24: {
          title: 'An in-between check',
          text: '12...Ne2+. An in-between check. The d4-knight, attacked by the e3-bishop, was lost anyway, so first it pulls White\'s c3-knight to e2. After 12...exf6 13.Bxd4 instead, White\'s bishop would be strong on d4, and White would be much better.',
          arrows: [['e2', 'g1', 'red']]
        },
        25: {
          title: 'The knight is taken',
          text: '13.Nxe2. White takes the knight.',
          marks: ['e2']
        },
        26: {
          title: 'Two pieces for a queen',
          text: "13...exf6. Black takes the queen. White has two minor pieces for it, and Black's king has lost its dark-squared bishop. The engine calls it about level. The game was decided later, and Nezhmetdinov won in 33 moves.",
          marks: ['f6', 'g7']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Five lessons',
      body:
        "**Fischer–Najdorf:** a king left in the center is a target. Open lines quickly, even at the cost of material.\n\n**Tal–Larsen:** a sacrifice can be objectively doubtful and still win, because it sets hard problems. When you defend, look for the one move that holds.\n\n**Karpov–Korchnoi:** in the Yugoslav, follow the recipe: open the h-file, trade the Dragon bishop, remove the f6-knight.\n\n**Karpov–Kasparov:** a great piece is not a win by itself. The game turned on a later mistake.\n\n**Nezhmetdinov–Chernikov:** two active minor pieces can match a queen when the enemy king is weak."
    }
  ],
  takeaway:
    "Fischer's 14.Rxe4 won; Najdorf's 12...e5 was the mistake. Tal's 16.Nd5 was a bold practical gamble, decided by 18...Rf7?. Karpov's 24.e5 removed the last guard of h7. Kasparov's 16...Nd3 gave only a small edge until 17.Nab1?. Nezhmetdinov's 12.Qxf6 was sound but not stronger than quiet moves.",
  lookAhead:
    'Module 9.8 closes the course: how to choose a Sicilian as Black, and an answer to it as White, that suits your style.',
  drills: [
    {
      title: "Karpov's finish",
      prompt: "You're White (Karpov). Korchnoi's bishop has just attacked your d5-knight. Only the f6-knight and the king guard h7. Remove that knight and finish the attack.",
      moves: KK,
      start: 46,
      side: 'white',
      hints: [
        'A pawn can attack the f6-knight right now.',
        'After the knight is gone, the queen goes into h7 with check, backed by the rook, and then to h8.'
      ],
      success: '24.e5! Bxd5 25.exf6 exf6 26.Qxh7+ Kf8 27.Qh8+, and Korchnoi resigned.'
    },
    {
      title: "Larsen's missed defense",
      prompt: "You're Black (Larsen). White's rook has just attacked your undefended e7-bishop. In the game, 18...Rf7? lost. Find the move that holds the balance.",
      moves: `${TAL.split(' ').slice(0, 35).join(' ')} Bd8`,
      start: 35,
      side: 'black',
      hints: [
        "Don't defend the bishop. Move it out of the attack instead.",
        'The bishop has three moves. Two of them lose it to a White pawn. Use the third.'
      ],
      success: "18...Bd8! The bishop steps out of the attack, and Black holds the balance. Every other move leaves White much better."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'In Fischer–Najdorf 1962, why was 14.Rxe4 so strong?',
      moves: FISCHER.split(' ').slice(0, 27).join(' '),
      orientation: 'white',
      choices: [
        { text: "Black's king was stuck in the center, and the sacrifice opened lines against it", correct: true, why: "Right. After 14...dxe4 15.Nf5, White's pieces swarm around the king on e8. It was the engine's top move, and it wins." },
        { text: 'It won a rook', why: 'The opposite: Fischer gave a rook for a bishop. He won with the attack, not with material.' },
        { text: 'It forced mate in two', why: 'There was no quick mate. Fischer needed ten more moves, but Black was lost.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Karpov–Kasparov 1985, game 16: after 16...Nd3, how good was Black\'s position?',
      moves: KASPAROV.split(' ').slice(0, 32).join(' '),
      orientation: 'black',
      choices: [
        { text: "Only slightly better; Karpov's 17.Nab1? was the decisive mistake", correct: true, why: 'Right. 17.d6 or 17.b4 would have held the balance.' },
        { text: 'Winning: the knight decided the game by itself', why: "That's the legend. The engine says Black was only slightly better until 17.Nab1?." },
        { text: 'Worse: the knight was about to be trapped', why: 'The knight was safe on d3, and no pawn could kick it. Black was slightly better.' }
      ]
    },
    {
      type: 'concept',
      prompt: "What is the engine's verdict on Nezhmetdinov's 12.Qxf6!? against Chernikov?",
      moves: NEZH.split(' ').slice(0, 23).join(' '),
      orientation: 'white',
      choices: [
        { text: 'Sound, about level after 12...Ne2+ 13.Nxe2 exf6, but not stronger than quiet moves', correct: true, why: 'Right. 12.Qh6 or 12.Qg4 was just as good. The game was decided later.' },
        { text: 'A winning combination', why: "That's the folklore. The engine calls the position about level after 13...exf6." },
        { text: 'A blunder that should lose', why: 'Two active minor pieces and a weak black king give White full value for the queen.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Karpov–Korchnoi 1974. White to move. Which move wins?',
      moves: KK.split(' ').slice(0, 46).join(' '),
      orientation: 'white',
      choices: [
        { text: '24.e5', correct: true, why: 'Right. The pawn attacks the f6-knight, the last guard of h7. After 24...Bxd5 25.exf6, Qxh7+ follows.' },
        { text: '24.Nxf6+', why: 'It removes the knight, but after 24...exf6 Black is fine. The engine calls it level.' },
        { text: '24.a3', why: 'Too slow. Black takes on d5, and White has lost the attack. Black would be better.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Which famous Sicilian game featured a queen sacrifice for two minor pieces?',
      choices: [
        { text: 'Nezhmetdinov–Chernikov, 1962', correct: true, why: 'Right. 12.Qxf6!? Ne2+ 13.Nxe2 exf6 gave White a bishop and a knight for the queen.' },
        { text: 'Fischer–Najdorf, 1962', why: 'Fischer gave a rook for a bishop with 14.Rxe4, an exchange sacrifice, not a queen sacrifice.' },
        { text: 'Tal–Larsen, 1965', why: 'Tal sacrificed a knight with 16.Nd5, not his queen.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which description of the famous 1985 World Championship game with the knight on d3 is correct?',
      choices: [
        { text: 'Karpov–Kasparov, game 16: Karpov had White, and Kasparov won with Black', correct: true, why: 'Right. The usual order of names puts White first, so it is Karpov–Kasparov, 0-1.' },
        { text: 'Kasparov–Karpov, game 16: Kasparov won with White', why: 'A common slip. Karpov had White; Kasparov won with the Black pieces.' },
        { text: 'Karpov–Kasparov, game 16: Karpov won with White', why: 'Karpov had White, but Kasparov won the game.' }
      ]
    }
  ],
  key: {
    name: "Nezhmetdinov's queen sacrifice: 12.Qxf6!?",
    moves: NEZH.split(' ').slice(0, 23).join(' '),
    orientation: 'white'
  },
  terms: [
    { term: 'Exchange sacrifice', meaning: 'Giving a rook for a bishop or knight, usually to open lines or ruin the enemy structure.' },
    { term: 'Practical sacrifice', meaning: 'A sacrifice that may not be sound with perfect play, but sets the opponent hard problems over the board.' },
    { term: 'In-between move', meaning: 'A move played before the expected recapture, often a check, that changes the position in your favor.' }
  ]
})
