import { defineModule } from '../../../types'
import { STEINITZ } from '../lines'

/** cla-steinitz-bc5: 7...cxd4 8.Nxd4 Bc5 9.Qd2 O-O 10.O-O-O a6 11.h4 Nxd4 12.Bxd4 b5 */
const BC5 = `${STEINITZ} cxd4 Nxd4 Bc5 Qd2 O-O O-O-O a6 h4 Nxd4 Bxd4 b5`
/** cla-steinitz-a6: 7...a6 8.Qd2 b5 9.dxc5 Bxc5 10.Bxc5 Nxc5 11.Qf2 Qb6 */
const A6 = `${STEINITZ} a6 Qd2 b5 dxc5 Bxc5 Bxc5 Nxc5 Qf2 Qb6`

export default defineModule({
  id: '6.2',
  title: 'The Steinitz: 5.f4 c5 6.Nf3 Nc6 7.Be3',
  minutes: 11,
  level: 2,
  goals: [
    "Build White's Steinitz set-up: f4, Nf3 and Be3 around the d4-pawn",
    'Play 7...cxd4 8.Nxd4 Bc5 and understand the race after opposite-side castling',
    'Know the other plan: 7...a6 and ...b5 before anything else'
  ],
  intro:
    "After 4.e5 Nfd7, White props up the chain with 5.f4, and Black hits its base with 5...c5. Both sides then bring more pieces to d4. What happens next? Black has two main plans: open the c-file and develop the bishop to c5, or grab space on the queenside first. White usually castles long and goes for the kingside.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The set-up: three defenders for d4',
      intro: 'Count the attackers and defenders of the d4-pawn after every move.',
      moves: STEINITZ,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'The chain is locked',
          text: '4...Nfd7. White has pawns on d4 and e5, Black on d5 and e6. d4 is the base of White\'s chain.',
          marks: ['d4']
        },
        9: {
          title: 'A second pawn for e5',
          text: '5.f4. The f-pawn supports e5 and gains space on the kingside.',
          arrows: [['f4', 'e5', 'green']]
        },
        10: {
          title: 'Hit the base',
          text: '5...c5. Black attacks d4. If White ever takes on c5, Black recaptures and gets active pieces.',
          arrows: [['c5', 'd4', 'red']]
        },
        11: {
          title: 'A knight for d4',
          text: '6.Nf3. The knight defends d4 and also e5. With the queen, d4 is now defended twice.',
          arrows: [['f3', 'd4', 'green'], ['d1', 'd4', 'green']]
        },
        12: {
          title: 'A second attacker',
          text: '6...Nc6. Now d4 is attacked twice, by the c5-pawn and the c6-knight.',
          arrows: [['c6', 'd4', 'red'], ['c5', 'd4', 'red']]
        },
        13: {
          title: 'A third defender',
          text: '7.Be3. The c-pawn can\'t reach c3, because the knight stands there, so the bishop guards d4 instead. Now d4 has three defenders (knight, bishop and queen) against two attackers.',
          arrows: [['e3', 'd4', 'green'], ['f3', 'd4', 'green'], ['d1', 'd4', 'green']],
          marks: ['d4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '7...cxd4 and ...Bc5: castling on opposite sides',
      intro: 'Black opens the c-file and develops the bishop with pressure on d4. Then both kings go to opposite wings.',
      moves: BC5,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: "Black's choice",
          text: '7.Be3. Black can open the c-file with 7...cxd4, or play 7...a6 first (the next walkthrough).',
          arrows: [['c5', 'd4', 'blue'], ['a7', 'a6', 'blue']]
        },
        14: {
          title: 'Release the tension',
          text: '7...cxd4. Black trades the c-pawn. The c-file is now half-open for Black, and White must recapture.',
          arrows: [['c8', 'c1', 'blue']]
        },
        15: {
          title: 'The knight takes back',
          text: '8.Nxd4. The best recapture: the knight goes to a strong central square. Never 8.Qxd4??, because 8...Nxd4 wins the queen.',
          arrows: [['c6', 'd4', 'red']]
        },
        16: {
          title: 'The bishop comes out',
          text: '8...Bc5. The bishop develops on the a7–g1 diagonal and attacks d4 a second time. The knight is defended twice, by the e3-bishop and the queen, so it is safe.',
          arrows: [['c5', 'd4', 'red'], ['e3', 'd4', 'green']]
        },
        17: {
          title: 'Ready to castle long',
          text: "9.Qd2. The queen keeps guarding d4 and clears d1, so White can castle queenside. Black could now trade everything on d4 with 9...Bxd4. That queen trade line is called the Vacuum Cleaner (Module 8.6).",
          arrows: [['e1', 'c1', 'blue']]
        },
        18: {
          title: 'Black castles short',
          text: '9...O-O. Black\'s king goes to the kingside, where White has more space. Black hopes to be faster on the other wing.',
          arrows: [['e8', 'g8', 'green']]
        },
        19: {
          title: 'Opposite sides',
          text: '10.O-O-O. The kings are on opposite wings. Now each side can throw its pawns at the enemy king without weakening its own.',
          marks: ['c1', 'g8']
        },
        20: {
          title: 'Prepare ...b5',
          text: '10...a6. The a-pawn supports a later ...b5 and keeps White\'s knights off b5.',
          arrows: [['b7', 'b5', 'blue']]
        },
        21: {
          title: "White's pawn storm",
          text: '11.h4. The h-pawn heads for h5 and h6 to break open the squares around Black\'s king.',
          arrows: [['h4', 'h6', 'green']]
        },
        22: {
          title: 'Trade the strong knight',
          text: '11...Nxd4. Black removes the centralized knight.',
          marks: ['d4']
        },
        23: {
          title: 'Bishop against bishop',
          text: '12.Bxd4. The bishops on d4 and c5 now face each other.',
          arrows: [['d4', 'c5', 'yellow']]
        },
        24: {
          title: "Black's pawn storm",
          text: '12...b5. Black\'s pawns roll toward White\'s king. Next ...b4 would kick the c3-knight. It is a real race, and the engine gives White a slight edge.',
          arrows: [['b5', 'b4', 'green'], ['b4', 'c3', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '7...a6: the queenside first',
      intro: 'This time Black keeps the c5-pawn and grabs space on the queenside at once.',
      moves: A6,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'The same position',
          text: '7.Be3. d4 is well defended, so Black does not rush.',
          marks: ['d4']
        },
        14: {
          title: 'Prepare ...b5',
          text: '7...a6. Black prepares ...b5 and takes the b5-square away from White\'s knight.',
          arrows: [['b7', 'b5', 'blue']]
        },
        15: {
          title: 'The same queen move',
          text: '8.Qd2. White clears d1 and gets ready to castle long.',
          arrows: [['e1', 'c1', 'blue']]
        },
        16: {
          title: 'Space on the queenside',
          text: '8...b5. If White castles long now, Black\'s pawns are already on their way. The b5-pawn is attacked by the c3-knight and the f1-bishop, but taking it would cost White a piece for two pawns.',
          arrows: [['b5', 'b4', 'blue']]
        },
        17: {
          title: 'White changes the structure',
          text: '9.dxc5. White releases the tension before Black can play ...cxd4 or ...b4. The d4-square becomes a home for White\'s pieces.',
          marks: ['d4']
        },
        18: {
          title: 'Take back with the bishop',
          text: '9...Bxc5. The bishop recaptures and develops at the same time. Now it faces the e3-bishop.',
          arrows: [['c5', 'e3', 'red']]
        },
        19: {
          title: 'Trade the bishops',
          text: '10.Bxc5. White trades off Black\'s active dark-squared bishop.',
          marks: ['c5']
        },
        20: {
          title: 'A knight on c5',
          text: '10...Nxc5. The knight lands on a fine square, where it eyes e4 and d3. But for now nothing defends it.',
          arrows: [['c5', 'e4', 'blue'], ['c5', 'd3', 'blue']]
        },
        21: {
          title: 'Hit the loose knight',
          text: '11.Qf2. The queen attacks the c5-knight along the diagonal.',
          arrows: [['f2', 'c5', 'red']]
        },
        22: {
          title: 'Defend the knight',
          text: '11...Qb6. The queen defends the knight. Black has queenside space, White has kingside space, and the position is level.',
          arrows: [['b6', 'c5', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Plans for both sides',
      body:
        "**White** keeps the e5-pawn firmly supported by f4, guards d4 with Nf3, Be3 and the queen, and usually castles queenside after Qd2. Then the kingside pawns go: h4–h5, sometimes g4, and later f4–f5 to attack the e6-pawn (Module 8.5).\n\n**Black** hits d4 with ...c5, ...Nc6, ...cxd4 and ...Bc5 (and sometimes ...Qb6), and expands on the queenside with ...a6, ...b5 and ...b4. If White castles queenside, those pawns become an attack on White's king.\n\nThe engine gives White a slight edge in the ...Bc5 line and calls the ...a6 line level. Both are fully playable for Black."
    },
    {
      kind: 'tip',
      title: 'Opposite-side castling is a race',
      body:
        "When the kings castle on opposite sides, pawn storms become safe: pushing your h-pawn does not weaken your own king. The side whose attack arrives first usually wins. So in these lines every move counts: don't spend time on slow moves when your opponent's pawns are already rolling."
    }
  ],
  takeaway:
    'In the Steinitz, White guards d4 with Nf3, Be3 and the queen and often castles long. Black hits d4 with ...cxd4 and ...Bc5, or expands first with ...a6 and ...b5.',
  lookAhead:
    "Module 6.3 shows Black's riskiest try, the pawn grab 8...Qb6 and ...Qxb2, White's 5.Nce2, and Ding Liren's French win against Gukesh in 2024.",
  drills: [
    {
      title: "Build White's set-up",
      prompt: "You're White. Black has played 3...Nf6. Push the e-pawn, support it with another pawn, and then put two pieces on guard of d4.",
      moves: STEINITZ,
      start: 6,
      side: 'white',
      hints: ['Push to e5 first, then support it with the f-pawn.', 'The g1-knight and the c1-bishop both reach squares from where they guard d4.'],
      success: '4.e5, 5.f4, 6.Nf3 and 7.Be3. d4 has three defenders against two attackers.'
    },
    {
      title: 'The ...Bc5 plan',
      prompt: "You're Black, after 7.Be3. Open the c-file, develop the dark-squared bishop with pressure on d4, castle, and prepare ...b5.",
      moves: `${STEINITZ} cxd4 Nxd4 Bc5 Qd2 O-O O-O-O a6`,
      start: 13,
      side: 'black',
      hints: ['Take on d4 with the c-pawn first.', 'The f8-bishop goes to c5. After castling, the a-pawn moves one square.'],
      success: '7...cxd4, 8...Bc5, 9...O-O and 10...a6. Next comes ...b5, and the race is on.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 7.Be3, how many White pieces defend the d4-pawn?',
      moves: STEINITZ,
      orientation: 'white',
      choices: [
        { text: 'Three: the f3-knight, the e3-bishop and the d1-queen', correct: true, why: 'Right. Black attacks it only twice (the c5-pawn and the c6-knight), so d4 is safe.' },
        { text: 'Two: the f3-knight and the e3-bishop', why: 'Look down the d-file: d2 and d3 are empty, so the queen on d1 defends d4 too.' },
        { text: 'Four: the c3-knight helps too', why: 'A knight on c3 does not reach d4. It covers d5, e4, b5 and other squares.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Black has just played 7...cxd4. How should White take back?',
      moves: `${STEINITZ} cxd4`,
      orientation: 'white',
      choices: [
        { text: '8.Nxd4', correct: true, why: 'Right. The knight recaptures onto a strong central square, and the engine keeps a small edge for White.' },
        { text: '8.Qxd4', why: 'A blunder: 8...Nxd4 and the queen is gone for a knight and a pawn.' },
        { text: '8.Nxd5', why: 'This forgets the d4-pawn: 8...dxe3 wins the bishop, and Black ends up well ahead.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Both sides have castled on opposite wings. What are the two plans?',
      moves: `${STEINITZ} cxd4 Nxd4 Bc5 Qd2 O-O O-O-O`,
      orientation: 'black',
      choices: [
        { text: "White pushes the kingside pawns (h4–h5), Black the queenside pawns (...a6, ...b5–b4)", correct: true, why: "Right. Each side storms the enemy king. Pushing those pawns doesn't weaken your own king, which is on the other wing." },
        { text: 'Both sides should keep their pawns still and wait', why: 'With opposite-side castling, waiting usually loses. The faster attack wins.' },
        { text: 'Black should attack on the kingside too', why: "Black's king is on the kingside. Pushing pawns there would weaken Black's own shelter." }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 7...a6 line, why does Black play ...a6 before ...b5?',
      moves: `${STEINITZ} a6`,
      orientation: 'black',
      choices: [
        { text: 'So the b5-pawn is supported, and White\'s knight can\'t use b5', correct: true, why: "Right. After ...b5, Nxb5 axb5 Bxb5 would give White only two pawns for a knight." },
        { text: 'To make room for the rook on a7', why: 'The rook is not going to a7 here. The point is the b5-square.' },
        { text: "To attack White's king", why: "White's king is still on e1. ...a6 prepares queenside space with ...b5." }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'Where does White\'s king usually go in the Steinitz main lines?',
      moves: `${STEINITZ} cxd4 Nxd4 Bc5 Qd2`,
      orientation: 'white',
      choices: [
        { text: 'To the queenside, with O-O-O after Qd2', correct: true, why: 'Right. Then White attacks on the kingside with the h-pawn and, later, f4–f5.' },
        { text: 'To the kingside, with O-O', why: 'Short castling is possible later, but White wants to push the kingside pawns, so the king usually goes the other way.' },
        { text: 'It stays on e1 for the whole game', why: 'Leaving the king in the center while lines open is risky. White castles long.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'In the 7...a6 line, what does 11.Qf2 attack?',
      moves: `${STEINITZ} a6 Qd2 b5 dxc5 Bxc5 Bxc5 Nxc5 Qf2`,
      orientation: 'black',
      choices: [
        { text: 'The c5-knight, which nothing defends yet', correct: true, why: 'Right. 11...Qb6 defends it, and the position is level.' },
        { text: 'The f7-pawn', why: "White's own f3-knight and f4-pawn block the f-file, so the queen does not reach f7." },
        { text: 'The d5-pawn', why: 'The f2-queen does not look at d5. Its diagonal runs through e3 and d4 to c5.' }
      ]
    }
  ],
  key: { name: 'Steinitz: 7.Be3, d4 guarded three times', moves: STEINITZ, orientation: 'white' },
  terms: [
    { term: 'Opposite-side castling', meaning: 'One king castles kingside and the other queenside. Both sides can then storm the enemy king with pawns.' },
    { term: 'Pawn storm', meaning: 'Pushing several pawns toward the enemy king to open lines for your pieces.' },
    { term: 'Half-open file', meaning: 'A file with pawns of only one color. After 7...cxd4, the c-file has a White pawn on c2 but no Black pawn.' },
    { term: 'Vacuum Cleaner', meaning: 'A nickname for the Steinitz line 9...Bxd4, where Black trades many pieces and the queens. Module 8.6 covers it.' }
  ]
})
