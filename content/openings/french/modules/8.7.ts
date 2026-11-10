import { defineModule } from '../../../types'
import { CLASSICAL, TARRASCH, WINAWER } from '../lines'

/** model-alekhine-nimzowitsch-1930, up to 26.Qc1 (Alekhine's gun) */
const ALEKHINE = `${WINAWER} e5 c5 Bd2 Ne7 Nb5 Bxd2+ Qxd2 O-O c3 b6 f4 Ba6 Nf3 Qd7 a4 Nbc6 b4 cxb4 cxb4 Bb7 Nd6 f5 a5 Nc8 Nxb7 Qxb7 a6 Qf7 Bb5 N8e7 O-O h6 Rfc1 Rfc8 Rc2 Qe8 Rac1 Rab8 Qe3 Rc7 Rc3 Qd7 R1c2 Kf8 Qc1`
/** model-bronstein-uhlmann-1977, up to 17...d4 (the key position) */
const UHLMANN = `${WINAWER} e5 Ne7 a3 Bxc3+ bxc3 c5 Qg4 Qc7 Qxg7 Rg8 Qxh7 cxd4 Ne2 Nbc6 f4 Bd7 Qd3 dxc3 h4 O-O-O h5 Nf5 h6 Rg6 h7 Rh8 Rh3 d4`
/** model-karpov-korchnoi-1978-g16, up to 11.axb3 */
const KARPOV = `${TARRASCH} c5 exd5 exd5 Bb5+ Bd7 Qe2+ Qe7 Bxd7+ Nxd7 dxc5 Nxc5 Nb3 Qxe2+ Nxe2 Nxb3 axb3`
/** model-nepomniachtchi-ding-2023-g7, up to 34.Qxc5 */
const NEPO = `${TARRASCH} c5 Ngf3 cxd4 Nxd4 Nf6 exd5 Nxd5 N2f3 Be7 Bc4 Nc6 Nxc6 bxc6 O-O O-O Qe2 Bb7 Bd3 Qc7 Qe4 Nf6 Qh4 c5 Bf4 Qb6 Ne5 Rad8 Rae1 g6 Bg5 Rd4 Qh3 Qc7 b3 Nh5 f4 Bd6 c3 Nxf4 Bxf4 Rxf4 Rxf4 Bxe5 Rh4 Rd8 Be4 Bxe4 Rhxe4 Rd5 Rh4 Qd6 Qe3 h5 g3 Bf6 Rc4 h4 gxh4 Rd2 Re2 Rd3 Qxc5`
/** model-gukesh-ding-2024-g1, up to 18...Nb2 */
const GUKESH = `${CLASSICAL} e5 Nfd7 f4 c5 Nce2 Nc6 c3 a5 Nf3 a4 Be3 Be7 g4 Qa5 Bg2 a3 b3 cxd4 b4 Qc7 Nexd4 Nb6 O-O Nc4 Bf2 Bd7 Qe2 Nxd4 Nxd4 Nb2`

export default defineModule({
  id: '8.7',
  title: 'French classics: a look back',
  minutes: 12,
  level: 3,
  goals: [
    'Revisit one key moment from each of the five classic games in this course',
    'Link each moment to one idea: gun, blockade, queen trade, slip, outpost',
    'Remember who won each game, and why'
  ],
  intro:
    "This course has followed five famous French games: two from the Winawer, two from the Tarrasch and one from the Classical. Each one is remembered for a single idea. Here is one key moment from each, with the lesson it teaches. The full stories are in the modules named in each walkthrough.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Alekhine–Nimzowitsch, San Remo 1930: the gun',
      intro: "Winawer with 5.Bd2 (Module 7.7). White is already winning. Watch White's heavy pieces line up on the c-file against the c6-knight.",
      moves: ALEKHINE,
      start: 46,
      orientation: 'white',
      steps: {
        46: {
          title: 'Pressure on c6',
          text: "23...Rc7. The c6-knight is attacked by the b5-bishop and the c2-rook. Black guards it three times: with the queen, the c7-rook and the e7-knight. Black's pieces are tied down.",
          arrows: [['b5', 'c6', 'red'], ['c2', 'c6', 'red']],
          marks: ['c6']
        },
        47: {
          title: 'The rook steps up',
          text: '24.Rc3. The front rook moves up to make room behind it.',
          arrows: [['c3', 'c6', 'red']]
        },
        48: {
          title: 'Black waits',
          text: '24...Qd7. Black has no plan except defending c6.',
          arrows: [['d7', 'c6', 'green']]
        },
        49: {
          title: 'The second rook',
          text: '25.R1c2. The other rook comes in behind the first. Now c1 is free for the queen.',
          arrows: [['c2', 'c3', 'green']]
        },
        50: {
          title: 'Still waiting',
          text: '25...Kf8. Black can only shuffle.',
          marks: ['f8']
        },
        51: {
          title: "Alekhine's gun",
          text: "26.Qc1. Rook in front, rook behind it, queen at the back: a queen behind two rooks on one file. The formation is named after this game. White is winning, and Alekhine won in 32 moves.",
          arrows: [['c1', 'c6', 'red']],
          marks: ['c1', 'c2', 'c3']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Bronstein–Uhlmann, Tallinn 1977: stop the pawn, use the center',
      intro: 'The Winawer Poisoned Pawn (Module 7.4). White has a passed h-pawn racing up the board. Watch how Black stops it, then strikes in the center.',
      moves: UHLMANN,
      start: 30,
      orientation: 'black',
      steps: {
        30: {
          title: 'A dangerous h-pawn',
          text: "15...Rg6. White's h-pawn has reached h6. Black's rook and f5-knight attack it, and White's h1-rook guards it.",
          arrows: [['g6', 'h6', 'red'], ['h1', 'h6', 'green']],
          marks: ['h6']
        },
        31: {
          title: 'One step from queening',
          text: '16.h7. The pawn pushes on. Next it would promote on h8.',
          arrows: [['h7', 'h8', 'red']],
          marks: ['h8']
        },
        32: {
          title: 'The blockade',
          text: '16...Rh8. The only good move. The d8-rook stands in front of the pawn and stops it, a blockade like the ones in Module 8.4. Anything else loses.',
          arrows: [['d8', 'h8', 'green']],
          ann: '!'
        },
        33: {
          title: 'The rook guards from behind',
          text: '17.Rh3. The rook protects the h7-pawn from behind. The engine prefers taking back a pawn with 17.Qxc3.',
          arrows: [['h3', 'h7', 'green']]
        },
        34: {
          title: 'Into the center',
          text: "17...d4. Black uses the center. The pawn now protects c3, and the d5-square is free, opening the long diagonal toward f3 and h1. The engine already prefers Black.",
          arrows: [['d4', 'c3', 'green']],
          ann: '!'
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Karpov–Korchnoi, Baguio 1978: trade into an endgame',
      intro: 'The Tarrasch with 5.Bb5+ (Module 4.4). Black has an isolated d5-pawn. Watch White take the queens off.',
      moves: KARPOV,
      start: 17,
      orientation: 'white',
      steps: {
        17: {
          title: 'Queens face to face',
          text: "9.Nb3. The knight hits the c5-knight. White's queen on e2 and Black's on e7 face each other on the e-file.",
          arrows: [['b3', 'c5', 'red'], ['e2', 'e7', 'yellow']]
        },
        18: {
          title: 'Queens off',
          text: '9...Qxe2+. Black trades queens, with check.',
          arrows: [['e2', 'e1', 'red']]
        },
        19: {
          title: 'Develop and recapture',
          text: '10.Nxe2. The g1-knight takes back and develops.',
          arrows: [['g1', 'e2', 'green']]
        },
        20: {
          title: 'Knights off',
          text: '10...Nxb3. Another pair of pieces comes off.',
          arrows: [['c5', 'b3', 'red']]
        },
        21: {
          title: 'An endgame against the pawn',
          text: "11.axb3. With the queens gone, Black's isolated d5-pawn is a target and Black has no attack in return. White has a small edge. Korchnoi defended well: the game was level after the opening and ended in a draw.",
          marks: ['d5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Nepomniachtchi–Ding, Astana 2023: one slip',
      intro: 'The Tarrasch with 4.Ngf3 (Module 4.5). Many moves later, the game is level. Watch one natural-looking rook move decide it.',
      moves: NEPO,
      start: 64,
      orientation: 'white',
      steps: {
        64: {
          title: 'A level fight',
          text: "32...Rd2. White has two rooks against Black's rook and bishop: an extra exchange. But Black's pieces are active, and the engine calls the position level.",
          arrows: [['d2', 'h2', 'red']]
        },
        65: {
          title: 'Challenge the rook',
          text: '33.Re2. White offers a rook trade on the second rank.',
          arrows: [['e2', 'd2', 'red']]
        },
        66: {
          title: 'The slip',
          text: "33...Rd3. The rook attacks the queen. It looks active, but it is the losing mistake. 33...Rd5 kept the balance.",
          arrows: [['d3', 'e3', 'red']],
          ann: '?'
        },
        67: {
          title: 'A counterattack',
          text: "34.Qxc5. The queen takes the c5-pawn, protected by the c4-rook, and attacks Black's queen. Black's best is to trade queens, but then White's extra exchange decides. White is winning, and Nepomniachtchi won in 37 moves.",
          arrows: [['c5', 'd6', 'red'], ['c4', 'c5', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "Gukesh–Ding, Singapore 2024: a knight on b2",
      intro: "The Classical Steinitz with 6.Nce2 (Module 6.3). Black's a-pawn has run to a3. Watch where Black's knight lands.",
      moves: GUKESH,
      start: 32,
      orientation: 'black',
      steps: {
        32: {
          title: 'The a3-pawn',
          text: '16...Bd7. Black\'s knight sits on c4, and the a3-pawn controls b2, deep in White\'s camp.',
          arrows: [['a3', 'b2', 'blue']],
          marks: ['c4', 'b2']
        },
        33: {
          title: 'The queen hits c4',
          text: '17.Qe2. White attacks the c4-knight.',
          arrows: [['e2', 'c4', 'red']]
        },
        34: {
          title: 'Trade first',
          text: '17...Nxd4. The c6-knight trades itself for White\'s d4-knight.',
          marks: ['d4']
        },
        35: {
          title: 'White takes back',
          text: '18.Nxd4. White recaptures with the other knight.',
          marks: ['d4']
        },
        36: {
          title: 'The outpost',
          text: "18...Nb2. The c4-knight jumps to b2, where the a3-pawn protects it. From b2 it eyes d1, d3 and c4. The engine calls the position about level here; Black's chances came later.",
          arrows: [['a3', 'b2', 'green'], ['b2', 'd3', 'blue']],
          marks: ['b2']
        }
      }
    },
    {
      kind: 'text',
      title: 'Five games, five lessons',
      body:
        "**Alekhine–Nimzowitsch (1930), 1-0:** when the opponent is tied to one weak point, pile up on it. A queen behind two rooks on a file is called Alekhine's gun.\n\n**Bronstein–Uhlmann (1977), 0-1:** stop a passed pawn with a piece in front of it, then play in the center. 17.Rh3 already gave Black the edge, and White's biggest mistake came later, 21.Qh1 (21.Qg3 was better). Uhlmann won in 30 moves.\n\n**Karpov–Korchnoi (1978), draw:** against an isolated pawn, trades help. Karpov took the queens off early. Korchnoi held, and the game was drawn in 42 moves.\n\n**Nepomniachtchi–Ding (2023), 1-0:** a level position can be lost with one move. Ding's 33...Rd3? lost, where 33...Rd5 held.\n\n**Gukesh–Ding (2024), 0-1:** Black's ...a5–a4–a3 march created a protected outpost on b2. By move 22 Black was slightly better, and Gukesh's 22.Qe1? (22.g5 was better) and 30.Qc2? (30.Bc5 was better) let Ding win in 42 moves."
    },
    {
      kind: 'tip',
      title: 'How to study a classic game',
      body:
        "Play through the game once quickly. Then go back to the key moment and cover the next move: what would you play, and why? Compare with the game. Finally, write down the one idea you want to keep, like \"blockade the passed pawn\" or \"pile up on the pinned piece\"."
    }
  ],
  takeaway:
    "Five games, five ideas: Alekhine's gun on an open file (1930), blockading a passed pawn and striking in the center (Uhlmann, 1977), trading queens against an isolated pawn (Karpov, 1978), one slip in a level position (2023), and a protected outpost on b2 (Ding, 2024).",
  lookAhead:
    "Last module: Module 8.8 helps you choose which French to play as Black, and how to answer it as White.",
  drills: [
    {
      title: "Uhlmann's defense",
      prompt: "You're Black in Bronstein–Uhlmann. White has just pushed 16.h7, one step from queening. Stop the pawn, then use your center.",
      moves: UHLMANN,
      start: 31,
      side: 'black',
      hints: [
        'A rook must stand in front of the pawn. Which rook can reach h8?',
        '16...Rh8, and after 17.Rh3, push the d-pawn.'
      ],
      success: '16...Rh8 17.Rh3 d4. The pawn is blockaded, and Black takes over the center.'
    },
    {
      title: "Build Alekhine's gun",
      prompt: "You're White in Alekhine–Nimzowitsch. Black's pieces are tied to the c6-knight. Double your rooks on the c-file and put the queen behind them.",
      moves: ALEKHINE,
      start: 46,
      side: 'white',
      hints: [
        'Move the front rook up one square first.',
        '24.Rc3, then 25.R1c2, then the queen goes to c1.'
      ],
      success: "24.Rc3, 25.R1c2 and 26.Qc1. Alekhine's gun, and White is winning."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Black to move. White has just pushed 16.h7. Why is 16...Rh8 the only good move?',
      moves: UHLMANN.split(' ').slice(0, 31).join(' '),
      orientation: 'black',
      choices: [
        { text: 'It puts a rook in front of the pawn and stops it from promoting', correct: true, why: 'Right. A piece in front of a passed pawn is a blockade. Anything else lets White promote or win material.' },
        { text: "It attacks White's king", why: "The rook on h8 doesn't attack the king. Its job is to stop the h-pawn." },
        { text: 'It wins the h7-pawn at once', why: 'Not at once: 17.Rh3 guards the pawn from behind. The rook simply stops it.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why was 34.Qxc5 so strong in Nepomniachtchi–Ding?',
      moves: NEPO,
      orientation: 'white',
      choices: [
        { text: "It won a pawn and attacked Black's queen, and White was winning from then on", correct: true, why: "Right. The c4-rook protected the queen, and Black's queen was attacked. Trading queens would leave White's extra exchange to decide the game." },
        { text: 'It was checkmate', why: "It was not mate. It won a pawn and left White winning." },
        { text: "It trapped Black's rook on d3", why: 'The rook was not trapped. The point was the pawn on c5 and the attack on Black\'s queen.' }
      ]
    },
    {
      type: 'plan',
      prompt: "In Gukesh–Ding, what made b2 a good square for Black's knight?",
      moves: GUKESH,
      orientation: 'black',
      choices: [
        { text: 'The a3-pawn protected it, deep in White\'s camp', correct: true, why: 'Right. The ...a5–a4–a3 march prepared this outpost.' },
        { text: 'It gave check from b2', why: "White's king is on g1, far away. The knight was strong because the a3-pawn guarded it." },
        { text: 'It attacked White\'s queen', why: 'From b2 the knight eyes d1, d3 and c4. Its strength was that it was protected.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In Karpov–Korchnoi, why did Karpov trade queens so early?',
      moves: KARPOV,
      orientation: 'white',
      choices: [
        { text: "To reach an endgame where Black's isolated d5-pawn is a weakness", correct: true, why: 'Right. Without queens, Black has little attack, and the isolated pawn is just a target.' },
        { text: 'To attack Black\'s king', why: 'With the queens gone, there is no attack on the king. The target is the d5-pawn.' },
        { text: 'Because he was losing', why: 'White had a small edge. The trade was a plan, not a rescue.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: "In which game did White put the queen behind two rooks on the c-file, creating Alekhine's gun?",
      choices: [
        { text: 'Alekhine–Nimzowitsch, San Remo 1930', correct: true, why: 'Right. 25.R1c2 and 26.Qc1 completed the formation, and Alekhine won.' },
        { text: 'Bronstein–Uhlmann, Tallinn 1977', why: 'That was the Poisoned Pawn, where Black blockaded the h-pawn and won.' },
        { text: 'Karpov–Korchnoi, Baguio 1978', why: 'That was the Tarrasch with an early queen trade. It was drawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which player had Black in both World Championship French games in this course, in 2023 and 2024?',
      choices: [
        { text: 'Ding Liren', correct: true, why: 'Right. He lost to Nepomniachtchi in 2023 and beat Gukesh in 2024.' },
        { text: 'Viktor Korchnoi', why: "Korchnoi played the French against Karpov in 1978. The 2023 and 2024 games were Ding Liren's." },
        { text: 'Wolfgang Uhlmann', why: 'Uhlmann beat Bronstein with the Winawer in 1977. The recent games were Ding Liren\'s.' }
      ]
    }
  ],
  key: { name: 'Bronstein–Uhlmann 1977: 17...d4!', moves: UHLMANN, orientation: 'black' },
  terms: [
    { term: 'Model game', meaning: 'A well-known game that shows a plan or idea clearly, so players study it to learn that idea.' },
    { term: 'The exchange', meaning: 'Having a rook against a bishop or knight. The side with the rook is "up the exchange".' },
    { term: 'Passed pawn', meaning: 'A pawn with no enemy pawns in front of it on its own file or the files next to it.' }
  ]
})
