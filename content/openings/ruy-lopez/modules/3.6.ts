import { defineModule } from '../../../types'
import { EXCHANGE } from '../../../lines'

/** 5.d4 queen trade, reaching the endgame at once */
const DIRECT = `${EXCHANGE} d4 exd4 Qxd4 Qxd4 Nxd4`
/** exchange-5d4-lasker-capablanca */
const LASKER = `${DIRECT} Bd6 Nc3 Ne7 O-O O-O f4 Re8 Nb3 f6 f5 b6 Bf4 Bb7`
/** 7...Bd7 and ...O-O-O: the active setup the sources prefer */
const ACTIVE = `${DIRECT} Bd7 Be3 O-O-O Nc3`

export default defineModule({
  id: '3.6',
  title: 'The 4-against-3 endgame',
  minutes: 12,
  level: 3,
  goals: [
    'Explain in plain words why pawn endings favour White',
    "Follow Lasker's plan: f4, f5 and a hole on e6",
    'Know how Black should defend: active pieces, not waiting'
  ],
  intro:
    "Everything in this chapter points to one kind of position: queens off, White with four pawns against three on the kingside, Black with the two bishops. What does White actually do there? This module answers with the most famous game in the Exchange Variation, Lasker against Capablanca in 1914.",
  sections: [
    {
      kind: 'text',
      title: 'Why the pawn ending favours White',
      body:
        "Imagine every piece is gone and only kings and pawns are left. On the kingside, White's four pawns face three. If White pushes them forward and trades pawns, one white pawn will be left with nobody in front of it: a **passed pawn**.\n\nOn the queenside Black also has four pawns against three. But two of them are the doubled c-pawns, and they act like one. White's a-, b- and c-pawns can hold them, so Black never gets a passed pawn of its own.\n\nA passed pawn ties down the enemy king. While Black's king stops it, White's king walks in and eats pawns. That is why these pawn endings tend to be winning for White, and why White is happy to trade pieces."
    },
    {
      kind: 'walkthrough',
      title: 'Lasker–Capablanca, St Petersburg 1914',
      intro: 'Lasker trades queens on move 6, then uses his kingside pawns to squeeze Black. Watch the f-pawn.',
      moves: LASKER,
      start: 13,
      orientation: 'white',
      steps: {
        13: {
          title: 'An endgame on move 7',
          text: "7.Nxd4. The queens are already off. White has four pawns against three on the kingside; Black has the two bishops.",
          marks: ['e4', 'f2', 'g2', 'h2']
        },
        14: {
          title: 'A modest bishop',
          text: "7...Bd6. Capablanca develops the bishop to d6. Later writers criticised this setup as too passive. The second walkthrough shows Black's better plan.",
          ann: '?!'
        },
        15: {
          title: 'Develop and guard e4',
          text: '8.Nc3. The knight comes out and protects the e4-pawn, the front pawn of White\'s majority.',
          arrows: [['c3', 'e4', 'green']]
        },
        16: {
          title: 'The other knight',
          text: '8...Ne7. Black develops the last knight.',
          marks: ['e7']
        },
        17: {
          title: 'King safe, rook ready',
          text: '9.O-O. White castles. Notice the rook on f1, standing behind the f-pawn.',
          arrows: [['f1', 'f4', 'blue']]
        },
        18: {
          title: 'Black castles too',
          text: '9...O-O. Both kings are safe. Now the plans begin.',
          marks: ['g8']
        },
        19: {
          title: 'The majority moves',
          text: '10.f4. White starts pushing the kingside pawns. The f-pawn gains space and gets ready for f5 or e5.',
          arrows: [['f4', 'f5', 'green'], ['e4', 'e5', 'blue']]
        },
        20: {
          title: 'A rook behind the knight',
          text: '10...Re8. Black puts a rook on the e-file, behind the e7-knight, to aim at e4 later.',
          marks: ['e4']
        },
        21: {
          title: 'A quiet knight move',
          text: '11.Nb3. The knight steps back from d4, where a pawn on c5 could have kicked it.',
          marks: ['d4']
        },
        22: {
          title: 'Stopping e5',
          text: "11...f6. Black stops e4-e5 for good. But now no black pawn guards the e6-square.",
          arrows: [['f6', 'e5', 'green']],
          marks: ['e6']
        },
        23: {
          title: 'The clamp',
          text: "12.f5. The pawn takes e6 and g6 away from Black's pieces. Black's c8-bishop can no longer come to e6 or f5, and e6 is now a hole: no black pawn can ever guard it again.",
          arrows: [['f5', 'e6', 'yellow'], ['f5', 'g6', 'yellow']],
          marks: ['e6'],
          ann: '!'
        },
        24: {
          title: 'The bishop looks for a new road',
          text: '12...b6. Black makes room for the c8-bishop to go to b7.',
          arrows: [['c8', 'b7', 'blue']]
        },
        25: {
          title: 'Offer a bishop trade',
          text: '13.Bf4. White develops and offers to trade Black\'s d6-bishop. Every trade brings White closer to the endgame the majority wins.',
          arrows: [['f4', 'd6', 'yellow']]
        },
        26: {
          title: "Lasker's bind",
          text: "13...Bb7. The b7-bishop is blocked by Black's own c6-pawn. White's f5-pawn clamps the kingside, and e6 waits for a white knight. Lasker went on to win.",
          marks: ['c6', 'e6']
        }
      }
    },
    {
      kind: 'history',
      title: 'Why this game is famous',
      body:
        'Lasker–Capablanca was played in the final stage of the St Petersburg tournament of 1914. Capablanca was playing for a draw and stayed too passive. Lasker won, and the game became the classic example of the Exchange plan: the healthy majority plus an outpost.'
    },
    {
      kind: 'walkthrough',
      title: "Black's better defense: active pieces",
      intro: 'Back to move 7. Instead of 7...Bd6, Black puts the pieces to work at once.',
      moves: ACTIVE,
      start: 13,
      orientation: 'white',
      steps: {
        13: {
          title: 'The moment of choice',
          text: '7.Nxd4. Same position as in the Lasker game. Capablanca chose 7...Bd6 here.',
          marks: ['d4']
        },
        14: {
          title: 'Clear the back rank',
          text: '7...Bd7. The bishop leaves c8, so Black can castle queenside next move.',
          arrows: [['e8', 'c8', 'green']]
        },
        15: {
          title: 'White develops',
          text: '8.Be3. A natural developing move that also guards the d4-knight.',
          arrows: [['e3', 'd4', 'green']]
        },
        16: {
          title: 'Castle long',
          text: '8...O-O-O. The king steps to the queenside, and the rook comes to d8, ready to use the open d-file as soon as the bishop moves on.',
          marks: ['d8']
        },
        17: {
          title: 'Roughly equal',
          text: '9.Nc3. Black\'s pieces are active and the bishops have room. With play like this the endgame is roughly equal. The majority is a long-term edge, not a win by force.',
          marks: ['d7', 'f8']
        }
      }
    },
    {
      kind: 'tip',
      title: "White's endgame checklist",
      body:
        "**Trade pieces**, especially a pair of bishops, so Black loses the bishop pair.\n\n**Push the majority** (f4, then f5 or e5) to gain space and, later, a passed pawn.\n\n**Hunt for holes** like e6, where no enemy pawn can chase your knight away.\n\n**Bring your king to the center** once the queens are off. In the endgame the king is a fighting piece."
    }
  ],
  takeaway:
    "In the Exchange endgame White trades pieces and pushes the healthy kingside majority, as Lasker did with f4–f5 and the e6 hole. Black's answer is active pieces, not waiting.",
  lookAhead:
    "That completes the Exchange Variation. Chapter 4 turns to the main road after 4.Ba4: the Closed Ruy Lopez.",
  drills: [
    {
      title: "Lasker's opening from memory",
      prompt: "You're White. Trade queens on d4 the way Lasker did, develop, castle, and start the majority rolling.",
      moves: `${DIRECT} Bd6 Nc3 Ne7 O-O O-O f4`,
      start: 8,
      side: 'white',
      hints: [
        'Strike at e5 with the d-pawn, take back with the queen, then recapture on d4 with the knight.',
        'Develop the b1-knight, castle, and push the f-pawn two squares.'
      ],
      success: '5.d4, 6.Qxd4, 7.Nxd4, 8.Nc3, 9.O-O and 10.f4. The majority is on the move.'
    },
    {
      title: 'Build the clamp',
      prompt: "You're White. Black has just stopped e5 with 11...f6. Take the e6-square away for good, then offer a bishop trade.",
      moves: LASKER.split(' ').slice(0, 25).join(' '),
      start: 22,
      side: 'white',
      hints: [
        'Which pawn can control e6 and g6 at the same time?',
        'After 12.f5 b6, bring the c1-bishop out with an attack on the d6-bishop.'
      ],
      success: "12.f5 and 13.Bf4. That's Lasker's bind: e6 is a permanent hole, and every trade helps White."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why do pure pawn endings in the Exchange tend to favour White?',
      choices: [
        {
          text: "White's healthy majority can make a passed pawn, and Black's doubled pawns can't",
          correct: true,
          why: "Right. Black's queenside majority includes the doubled c-pawns, so White's three queenside pawns can hold it."
        },
        { text: 'White is a pawn up', why: 'Material is level: seven pawns each. The difference is the quality of the pawns.' },
        { text: "Black's king can never reach the center", why: "Black's king can walk to the center like White's. The problem is the pawn structure." }
      ]
    },
    {
      type: 'plan',
      prompt: "White to move. Black has just played 11...f6. What was Lasker's plan?",
      moves: `${DIRECT} Bd6 Nc3 Ne7 O-O O-O f4 Re8 Nb3 f6`,
      orientation: 'white',
      choices: [
        { text: 'Push 12.f5 and make e6 a permanent hole', correct: true, why: 'Exactly. With the f-pawn on f5, no black pawn can ever guard e6 again.' },
        { text: "Attack Black's king with g4 and g5", why: "With queens off there is no mating attack to play for. Lasker used the pawns to gain space and create a hole." },
        { text: 'Push the queenside pawns', why: "That's Black's majority side. White's trumps are on the kingside." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 12.f5, why is e6 such a good square for White?',
      moves: `${DIRECT} Bd6 Nc3 Ne7 O-O O-O f4 Re8 Nb3 f6 f5`,
      orientation: 'white',
      choices: [
        { text: 'No black pawn can ever attack it, so a white piece there is hard to remove', correct: true, why: "Right. Black's d-pawn went to c6 and the f-pawn is on f6. Neither can come back to guard e6." },
        { text: "White's queen can land there with check", why: 'The queens were traded on move 6. The square is for a knight or a rook.' },
        { text: 'It is a light square, and White has a light-squared bishop', why: "White gave up the light-squared bishop on move 4. A knight is the piece that loves e6." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Which Black setup is considered better than Capablanca\'s 7...Bd6?',
      moves: DIRECT,
      orientation: 'black',
      choices: [
        { text: '7...Bd7 and ...O-O-O, with active pieces', correct: true, why: 'Yes. The rook reaches the d-file at once, and the position is roughly equal.' },
        { text: 'Trade all the pieces as fast as possible', why: 'That walks into a pawn ending, which is exactly what White wants.' },
        { text: 'Castle short and wait', why: "Waiting is what went wrong for Capablanca. Black needs active pieces." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In Lasker–Capablanca, which pawn push made e6 a permanent hole?',
      choices: [
        { text: 'f4–f5', correct: true, why: 'Right. Together with Black\'s ...f6, the pawn on f5 left e6 with no black pawn guard.' },
        { text: 'e4–e5', why: "Black's ...f6 stopped e5. Lasker pushed the f-pawn instead." },
        { text: 'c2–c4', why: "The queenside pawns weren't involved. The clamp was on the kingside." }
      ]
    },
    {
      type: 'plan',
      prompt: 'You have the 4-against-3 kingside majority. Black offers to trade a pair of rooks. Should you usually accept?',
      choices: [
        { text: 'Yes. Each trade brings you closer to an ending where your majority decides', correct: true, why: 'Exactly. Fewer pieces means the pawn structure counts for more.' },
        { text: 'No. Keep every piece to attack the king', why: "With queens off, your edge is structural, not an attack. Trades help you." },
        { text: 'No. Rook endgames are always drawn', why: "Not always, and the point is the pawn structure. Trades usually favour the side with the healthier pawns." }
      ]
    }
  ],
  key: { name: 'Lasker–Capablanca 1914: the f5 clamp', moves: LASKER.split(' ').slice(0, 23).join(' '), orientation: 'white' },
  terms: [
    { term: 'Hole', meaning: 'A square the opponent can no longer guard with a pawn. Pieces placed there are hard to remove.' },
    { term: 'Outpost', meaning: 'A hole in the enemy camp where your piece, usually a knight, sits safely and does a lot of work.' },
    { term: 'Clamp', meaning: 'Pawns that take away key squares from the opponent and keep their pieces cramped.' },
    { term: 'Passed pawn', meaning: 'A pawn with no enemy pawns in front of it on its own file or the files next to it.' }
  ]
})
