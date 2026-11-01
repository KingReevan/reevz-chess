import { defineModule } from '../../../types'
import { OPEN, SCHEVENINGEN } from '../lines'

/** scheveningen-6be2: 6.Be2 a6 7.O-O Be7 8.f4 O-O 9.Kh1 Qc7 10.a4 Nc6 11.Be3 Re8 12.Bf3 */
const CLASSIC = `${SCHEVENINGEN} Be2 a6 O-O Be7 f4 O-O Kh1 Qc7 a4 Nc6 Be3 Re8 Bf3`
/** model-anand-kasparov-1995-g9, moves 1–12: the same position by the Najdorf road */
const ANAND = `${OPEN} a6 Be2 e6 O-O Be7 a4 Nc6 Be3 O-O f4 Qc7 Kh1 Re8 Bf3`
/** model-tal-larsen-1965, moves 1–21 (the game went on to 37.Qf7, 1-0) */
const TAL =
  'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e6 Nc3 d6 Be3 Nf6 f4 Be7 Qf3 O-O O-O-O Qc7 Ndb5 Qb8 g4 a6 Nd4 Nxd4 Bxd4 b5 g5 Nd7 Bd3 b4 Nd5 exd5 exd5 f5 Rde1 Rf7 h4 Bb7 Bxf5 Rxf5 Rxe7'

export default defineModule({
  id: '4.8',
  title: 'Classical Scheveningen and its move orders',
  minutes: 12,
  level: 3,
  goals: [
    'Learn the Classical Scheveningen plans: f4, Kh1, a4 against ...Qc7, ...Nc6, ...Re8',
    'See how the Najdorf, Taimanov and Scheveningen roads reach the same position',
    "Follow two classic games: Anand–Kasparov 1995 and Tal's bold 16.Nd5 against Larsen"
  ],
  intro:
    "Against the quiet 6.Be2, both sides build up slowly: White on the kingside and in the center, Black on the queenside. The same position can be reached by at least three different move orders, and many strong players prefer the side roads. Which plans matter, and why does the road matter?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Classical Scheveningen',
      intro: 'Watch what each side puts where. Most of these moves are about squares, not threats.',
      moves: CLASSIC,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The small center',
          text: '5...e6. This time White avoids the sharp Keres Attack and chooses a calm set-up.',
          marks: ['d6', 'e6']
        },
        11: {
          title: 'The quiet bishop',
          text: '6.Be2. White will castle short and push the f-pawn.',
          arrows: [['f2', 'f4', 'blue']]
        },
        12: {
          title: 'Taking b5 away',
          text: '6...a6. The pawn takes b5 from White\'s knights, so a black queen on c7 can\'t be hit by Nb5. It also prepares ...b5 later.',
          arrows: [['a6', 'b5', 'green']]
        },
        13: {
          title: 'White castles',
          text: '7.O-O. White\'s king is safe.',
          marks: ['g1']
        },
        14: {
          title: 'Quiet development',
          text: '7...Be7. Black develops and prepares to castle.',
          arrows: [['f8', 'e7', 'green']]
        },
        15: {
          title: 'Space on the kingside',
          text: '8.f4. White grabs space. Later the f-pawn can go to f5, or e4–e5 can hit the d6-pawn and the f6-knight.',
          arrows: [['f4', 'f5', 'blue'], ['e4', 'e5', 'blue']]
        },
        16: {
          title: 'Both kings castled short',
          text: '8...O-O. Both kings are on the kingside, so this is a slower fight than the Keres Attack.',
          marks: ['g8']
        },
        17: {
          title: 'A step in advance',
          text: "9.Kh1. With the f-pawn gone from f2, the a7–g1 diagonal runs up to White's king, with only the d4-knight in the way. The king steps off it before Black can use it, for example after ...Nxd4.",
          arrows: [['a7', 'g1', 'blue']]
        },
        18: {
          title: "Black's favorite queen square",
          text: '9...Qc7. The queen goes to the half-open c-file, where it presses on the c3-knight, and d8 is freed for a rook.',
          arrows: [['c7', 'c3', 'blue']]
        },
        19: {
          title: 'No ...b5',
          text: "10.a4. The pawn stops ...b5, so Black's queenside expansion is slowed down.",
          arrows: [['a4', 'b5', 'red']]
        },
        20: {
          title: 'The knight develops',
          text: '10...Nc6. The knight develops and puts pressure on d4.',
          arrows: [['c6', 'd4', 'red']]
        },
        21: {
          title: 'Guarding d4',
          text: '11.Be3. The bishop develops and guards the d4-knight.',
          arrows: [['e3', 'd4', 'green']]
        },
        22: {
          title: 'Flexible rook',
          text: '11...Re8. The rook frees f8 for the bishop, which can drop back to defend the king. It also supports a later ...e5.',
          arrows: [['e7', 'f8', 'blue']]
        },
        23: {
          title: 'The main position',
          text: '12.Bf3. The bishop backs up e4 from the long diagonal. This is the main position of the Classical Scheveningen, and it is roughly level, perhaps slightly better for White.',
          arrows: [['f3', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The plans',
      body:
        "**White** plays on the kingside and in the center: Qe1 and Qg3, then f4–f5 or e4–e5, with a4 keeping Black's queenside quiet.\n\n**Black** finishes development with ...Bd7 and ...Rb8, then aims for ...b5 anyway, or for a central break with ...e5 or ...d5. A typical idea is ...Nxd4 followed by ...e5, which gains time on the queen or bishop that takes back."
    },
    {
      kind: 'walkthrough',
      title: 'Another road: Anand–Kasparov, 1995',
      intro: 'World Championship 1995, game 9. Kasparov played the Najdorf and only then chose ...e6. Compare the final position with the one above.',
      moves: ANAND,
      start: 9,
      orientation: 'white',
      steps: {
        9: {
          title: 'The crossroads',
          text: '5.Nc3. In this game, Viswanathan Anand had White and Garry Kasparov had Black.',
          arrows: [['c3', 'e4', 'green']]
        },
        10: {
          title: 'The Najdorf first',
          text: '5...a6. Kasparov starts with the Najdorf move and keeps the choice between ...e5 and ...e6.',
          arrows: [['a6', 'b5', 'green']]
        },
        11: {
          title: 'The quiet bishop',
          text: '6.Be2. White chooses the calm set-up.',
          arrows: [['f1', 'e2', 'blue']]
        },
        12: {
          title: 'Now ...e6',
          text: "6...e6. Black picks the small center only now, after White has already chosen 6.Be2. The Keres Attack is out of the picture.",
          marks: ['d6', 'e6']
        },
        13: {
          title: 'White castles',
          text: '7.O-O. White castles.',
          marks: ['g1']
        },
        14: {
          title: 'Development',
          text: '7...Be7. Black prepares to castle.',
          arrows: [['f8', 'e7', 'green']]
        },
        15: {
          title: 'a4 comes first',
          text: '8.a4. A different order: White stops ...b5 before pushing the f-pawn.',
          arrows: [['a4', 'b5', 'red']]
        },
        16: {
          title: 'The knight develops',
          text: '8...Nc6. The knight hits d4.',
          arrows: [['c6', 'd4', 'red']]
        },
        17: {
          title: 'Guarding d4',
          text: '9.Be3. The bishop guards d4.',
          arrows: [['e3', 'd4', 'green']]
        },
        18: {
          title: 'Black castles',
          text: '9...O-O. Both kings are now on the kingside.',
          marks: ['g8']
        },
        19: {
          title: 'Now f4',
          text: '10.f4. White grabs space on the kingside.',
          arrows: [['f4', 'f5', 'blue']]
        },
        20: {
          title: 'The queen to c7',
          text: '10...Qc7. The usual queen square.',
          arrows: [['c7', 'c3', 'blue']]
        },
        21: {
          title: 'Off the diagonal',
          text: '11.Kh1. The king steps off the a7–g1 diagonal.',
          arrows: [['a7', 'g1', 'blue']]
        },
        22: {
          title: 'The rook to e8',
          text: '11...Re8. Exactly as before.',
          arrows: [['e7', 'f8', 'blue']]
        },
        23: {
          title: 'Same position',
          text: '12.Bf3. Every piece now stands exactly where it stood after the first walkthrough. Different road, same position.',
          arrows: [['f3', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'history',
      title: 'How Anand won',
      body:
        "Anand went on to win this game (1-0). He played on the queenside with b4–b5 and c4–c5, and broke through with 27.Rd5, an exchange sacrifice: a rook for a knight. In that match, every Sicilian had Anand as White."
    },
    {
      kind: 'text',
      title: 'Three roads, one position',
      body:
        "The Classical Scheveningen comes from at least three move orders:\n\n**The Scheveningen:** 5...e6 and 6.Be2, as in the first walkthrough. It allows the Keres Attack, 6.g4.\n\n**The Najdorf:** 5...a6, and ...e6 only after 6.Be2. That rules out the Keres Attack, but White gets other choices on move 6 (Chapter 2).\n\n**The Taimanov:** 2...e6, 4...Nc6 and 5...Qc7, with ...d6 played later (Module 6.2).\n\nThe English Attack against ...e6 (Be3, f3, Qd2, g4) also arises from both the Scheveningen and the Najdorf. It is covered with the Najdorf in Module 2.4."
    },
    {
      kind: 'walkthrough',
      title: "Tal's bold sacrifice: Tal–Larsen, 1965",
      intro: 'Candidates semifinal, Bled 1965, game 10. Mikhail Tal had White, Bent Larsen had Black. The game reached a Scheveningen by the Taimanov road (2...Nc6, 4...e6, 5...d6), but here White castled queenside. We join it on move 16.',
      moves: TAL,
      start: 30,
      orientation: 'white',
      steps: {
        30: {
          title: 'Opposite wings',
          text: "White's king is on c1, Black's on g8. Black's last move, 15...b4, attacks the c3-knight. Where should it go?",
          arrows: [['b4', 'c3', 'red']]
        },
        31: {
          title: 'The knight sacrifice',
          text: '16.Nd5. Instead of retreating, Tal puts the knight where the e6-pawn can take it. A bold practical sacrifice that computers doubt: 16.Ne2 was safer, and with best play Black should be better after the sacrifice.',
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
          text: '17.exd5. White wins a pawn back and opens the e-file toward the e7-bishop. The d3-bishop now aims at h7, and the d4-bishop at g7.',
          arrows: [['d3', 'h7', 'red'], ['d4', 'g7', 'red']]
        },
        34: {
          title: 'Blocking one diagonal',
          text: "17...f5. Black puts a pawn in the way of the d3-bishop's diagonal toward h7.",
          arrows: [['f7', 'f5', 'green']]
        },
        35: {
          title: 'The rook hits e7',
          text: '18.Rde1. The rook lands on the open e-file and attacks the e7-bishop, which nothing defends.',
          arrows: [['e1', 'e7', 'red']]
        },
        36: {
          title: 'The decisive mistake',
          text: '18...Rf7. The rook guards the bishop along the seventh rank, but this was the decisive mistake. 18...Bd8, stepping the bishop out of the attack, was the right defense.',
          arrows: [['f7', 'e7', 'green']],
          ann: '?'
        },
        37: {
          title: 'A quiet killer',
          text: "19.h4. The h-pawn joins the attack, heading for h5 and g6 to break open Black's king. This precise move makes White's attack decisive: White is now winning.",
          arrows: [['h4', 'h5', 'blue']],
          ann: '!'
        },
        38: {
          title: 'Too late',
          text: '19...Bb7. Black develops and hits the d5-pawn, but it comes too late.',
          arrows: [['b7', 'd5', 'red']]
        },
        39: {
          title: 'Giving back the bishop',
          text: '20.Bxf5. Tal gives back the bishop to rip open lines. A quieter move, 20.h5, was even stronger, but White stays clearly better.',
          marks: ['f5']
        },
        40: {
          title: 'The guard leaves',
          text: '20...Rxf5. Black takes, but the rook has left the seventh rank, so the e7-bishop is unguarded again.',
          marks: ['e7']
        },
        41: {
          title: 'Two pawns and an attack',
          text: '21.Rxe7. Black still has an extra knight, but White has two pawns for it, a rook on the seventh rank and a strong attack. White is clearly better, and Tal went on to win.',
          marks: ['e7']
        }
      }
    },
    {
      kind: 'history',
      title: 'A game that decided a match',
      body:
        "Tal won this game (1-0), and with it the match, 5½–4½. Kasparov later analyzed it in his series My Great Predecessors. You will often read that 16.Nd5 was a winning sacrifice. Modern engines disagree: Black should have been better. It was a practical gamble, and it worked because Larsen went wrong with 18...Rf7?."
    }
  ],
  takeaway:
    'In the Classical Scheveningen, White plays f4, Kh1 and a4 and aims at the kingside; Black answers with ...a6, ...Qc7, ...Nc6 and ...Re8 and waits for ...b5, ...e5 or ...d5. The same position comes from the Najdorf and the Taimanov.',
  lookAhead: 'Chapter 5: the Sveshnikov, where Black kicks the d4-knight with ...e5 at once and accepts a hole on d5.',
  drills: [
    {
      title: "Black's Classical set-up",
      prompt: "You're Black. White played the quiet 6.Be2. Build the Classical Scheveningen: take b5 away, develop, castle, queen to c7, knight to c6 and a rook to e8.",
      moves: CLASSIC.split(' ').slice(0, 22).join(' '),
      start: 11,
      side: 'black',
      hints: [
        'Start with the rook pawn, then develop the f8-bishop and castle.',
        'The queen goes to the c-file, the knight to c6, and the f8-rook to e8.'
      ],
      success: '6...a6, 7...Be7, 8...O-O, 9...Qc7, 10...Nc6 and 11...Re8. The Classical Scheveningen.'
    },
    {
      title: "White's Classical set-up",
      prompt: "You're White against the Scheveningen. Develop quietly, castle, gain kingside space, get your king off the a7–g1 diagonal and stop ...b5.",
      moves: CLASSIC.split(' ').slice(0, 19).join(' '),
      start: 10,
      side: 'white',
      hints: [
        'Develop the f1-bishop to a quiet square and castle short.',
        'Then push the f-pawn two squares, step the king into the corner, and push the a-pawn two squares.'
      ],
      success: '6.Be2, 7.O-O, 8.f4, 9.Kh1 and 10.a4. The standard White set-up.'
    }
  ],
  quiz: [
    {
      type: 'plan',
      prompt: 'Why does White play 10.a4 in the Classical Scheveningen?',
      moves: CLASSIC.split(' ').slice(0, 19).join(' '),
      orientation: 'white',
      choices: [
        { text: 'To stop ...b5', correct: true, why: "Right. The a4-pawn controls b5, so Black's queenside expansion is slowed down." },
        { text: 'To open the a-file for an attack on Black\'s king', why: "Black's king is on the kingside. a4 is a restraining move against ...b5." },
        { text: 'To win the a6-pawn', why: 'The a4-pawn does not attack a6, and the b7-pawn guards it anyway. The point is to stop ...b5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does White play 9.Kh1?',
      moves: CLASSIC.split(' ').slice(0, 17).join(' '),
      orientation: 'white',
      choices: [
        { text: 'After f4, the a7–g1 diagonal leads to the king, so it steps off it in advance', correct: true, why: 'Yes. It is a typical prophylactic move: it prevents checks and pins along that diagonal later.' },
        { text: 'To make room for the rook on g1', why: 'White is not planning Rg1 here. The king steps off the a7–g1 diagonal.' },
        { text: 'To defend the h2-pawn', why: 'h2 is not under attack. The point is the a7–g1 diagonal.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Why do many players reach the Scheveningen with 5...a6 and 6...e6, instead of 5...e6 at once?',
      choices: [
        { text: 'To avoid the Keres Attack, 6.g4', correct: true, why: 'Right. After 5...a6, White usually commits on move 6 first, and Black plays ...e6 only against a quiet move like 6.Be2.' },
        { text: 'Because 5...e6 is illegal', why: '5...e6 is perfectly legal. It is the pure Scheveningen, but it allows 6.g4.' },
        { text: 'To win a tempo', why: 'Both roads use the same number of moves. The point is to avoid 6.g4.' }
      ]
    },
    {
      type: 'concept',
      prompt: "What is the honest verdict on Tal's 16.Nd5 against Larsen?",
      moves: TAL.split(' ').slice(0, 31).join(' '),
      orientation: 'white',
      choices: [
        { text: "A bold practical sacrifice that computers doubt; Larsen's 18...Rf7? decided the game", correct: true, why: 'Right. With best play Black should have been better, but the sacrifice set hard problems, and Larsen went wrong two moves later.' },
        { text: 'A winning combination: Black was lost after 16.Nd5', why: "That's the legend. Modern engines say Black should be better after 16...exd5 17.exd5. The game was decided by 18...Rf7?." },
        { text: 'A blunder that should have lost quickly', why: 'Black should be better after it, but nothing was lost by force. It was a practical gamble that worked.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Which opening structure is this?',
      moves: CLASSIC,
      orientation: 'black',
      choices: [
        { text: 'The Classical Scheveningen', correct: true, why: 'Yes. Black has pawns on d6 and e6, with ...a6, ...Qc7 and ...Nc6 against f4, Kh1, a4 and the bishop on f3.' },
        { text: 'The Boleslavsky', why: 'The Boleslavsky has ...e5, not ...e6. Here Black has the small center on d6 and e6.' },
        { text: 'The Richter–Rauzer', why: "The Richter–Rauzer has White's bishop on g5 and usually O-O-O. Here White has castled short." }
      ]
    },
    {
      type: 'order',
      prompt: 'Anand–Kasparov 1995 began 5...a6 6.Be2 e6 7.O-O Be7 8.a4 Nc6 9.Be3 O-O 10.f4 Qc7 11.Kh1 Re8 12.Bf3. What is special about the position it reached?',
      choices: [
        { text: 'It is exactly the same position as 5...e6 6.Be2 a6 7.O-O Be7 8.f4 O-O 9.Kh1 Qc7 10.a4 Nc6 11.Be3 Re8 12.Bf3', correct: true, why: 'Right. Different move order, same position: a transposition.' },
        { text: 'It is a Dragon, because Black played ...a6', why: 'There is no ...g6. With pawns on d6 and e6 it is a Scheveningen.' },
        { text: 'Black has an extra pawn', why: 'No material has been won. It is the main position of the Classical Scheveningen.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'In Tal–Larsen, Bled 1965, which move decided the game?',
      choices: [
        { text: "Larsen's 18...Rf7", correct: true, why: 'Right. 18...Bd8 was the right defense. After 18...Rf7? 19.h4! White was winning.' },
        { text: "Larsen's 16...exd5", why: 'Taking the knight was correct. After 16...exd5 17.exd5 Black should be better.' },
        { text: "Tal's 16.Nd5", why: 'The sacrifice was objectively doubtful, but it did not lose. The game was decided by 18...Rf7?.' }
      ]
    }
  ],
  key: { name: 'Classical Scheveningen: 12.Bf3', moves: CLASSIC, orientation: 'black' },
  terms: [
    { term: 'Prophylaxis', meaning: 'A move that stops the opponent\'s idea before it happens, like Kh1 or a4 here.' },
    { term: 'Move order', meaning: 'The sequence in which moves are played. Different orders can reach the same position but allow different side lines.' },
    { term: 'Exchange sacrifice', meaning: 'Giving up a rook for a bishop or knight to gain something else.' }
  ]
})
