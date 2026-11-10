import { defineModule } from '../../../types'
import { FRENCH } from '../lines'

/** side-3be3 (Alapin Gambit): 3.Be3 dxe4 4.Nd2 Nf6 5.f3 exf3 6.Ngxf3 Be7 7.Bd3 O-O */
const ALAPIN = `${FRENCH} Be3 dxe4 Nd2 Nf6 f3 exf3 Ngxf3 Be7 Bd3 O-O`
/** side-3c4 (Diemer–Duhm Gambit): 3.c4 dxe4 4.Nc3 Nf6 5.f3 exf3 6.Nxf3 Be7 7.Bd3 c5 */
const DIEMER_DUHM = `${FRENCH} c4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 Be7 Bd3 c5`
/** 5...Bb4 instead of 5...exf3: the engine's first choice (checked) */
const DD_BB4 = `${FRENCH} c4 dxe4 Nc3 Nf6 f3 Bb4`

export default defineModule({
  id: '3.8',
  title: 'Early gambits: 3.Be3 and 3.c4',
  minutes: 10,
  level: 1,
  goals: [
    'Recognize the Alapin Gambit (3.Be3) and the Diemer–Duhm Gambit (3.c4)',
    'Follow the recipe: take the pawn, develop with ...Nf6, ...Be7, ...O-O, strike with ...c5',
    "Know the engine's verdict: Black is better in both"
  ],
  intro:
    "Some White players don't defend e4 at all. They let Black take it and hope that open lines and fast development will be worth more than a pawn. Against the right defense they aren't. This module gives Black a simple recipe, and tells White honestly what these gambits are worth.",
  sections: [
    {
      kind: 'walkthrough',
      title: '3.Be3: the Alapin Gambit',
      intro: 'White develops the bishop and leaves e4 to its fate.',
      moves: ALAPIN,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The French position',
          text: '2...d5. Black attacks e4. White has to defend it, push it or trade it, or give it up.',
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'The Alapin Gambit',
          text: "3.Be3. The bishop guards d4, but nothing guards e4. White is offering a pawn. (This Alapin has nothing to do with the Sicilian's 2.c3 Alapin.)",
          arrows: [['e3', 'd4', 'green']],
          marks: ['e4']
        },
        6: {
          title: 'Take it',
          text: '3...dxe4. Black accepts the gambit and is a pawn up.',
          arrows: [['d5', 'e4', 'red']]
        },
        7: {
          title: 'White hits e4',
          text: '4.Nd2. The knight attacks the e4-pawn.',
          arrows: [['d2', 'e4', 'red']]
        },
        8: {
          title: 'Defend and develop',
          text: '4...Nf6. The knight guards e4 and develops at the same time.',
          arrows: [['f6', 'e4', 'green']]
        },
        9: {
          title: 'The real gambit',
          text: '5.f3. White attacks e4 again with a pawn. White wants to open the f-file and get the pieces out fast.',
          arrows: [['f3', 'e4', 'red']]
        },
        10: {
          title: 'Take again',
          text: '5...exf3. Black takes. After White recaptures, Black will still be one pawn up.',
          arrows: [['e4', 'f3', 'red']]
        },
        11: {
          title: "White's compensation",
          text: "6.Ngxf3. White has two knights and a bishop out, and the f-file is half-open: White's f-pawn is gone, Black's is still on f7. After castling, a White rook can use that file.",
          marks: ['f7']
        },
        12: {
          title: 'Develop',
          text: '6...Be7. The bishop develops and gets Black ready to castle.',
          arrows: [['e8', 'g8', 'blue']]
        },
        13: {
          title: 'The bishop aims at h7',
          text: "7.Bd3. White's last minor piece comes out, aimed at Black's kingside.",
          arrows: [['d3', 'h7', 'blue']]
        },
        14: {
          title: 'Safe and a pawn up',
          text: "7...O-O. Black's king is safe and Black keeps the extra pawn. Next comes ...c5 to hit d4. The engine prefers Black.",
          arrows: [['c7', 'c5', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '3.c4: the Diemer–Duhm Gambit',
      intro: 'The same story with the c-pawn: White attacks d5 and lets e4 go.',
      moves: DIEMER_DUHM,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The French position',
          text: '2...d5. Black attacks e4.',
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'The Diemer–Duhm Gambit',
          text: '3.c4. White attacks d5 a second time but leaves e4 without a defender.',
          arrows: [['c4', 'd5', 'red']],
          marks: ['e4']
        },
        6: {
          title: 'Take it',
          text: '3...dxe4. Black takes the free pawn.',
          arrows: [['d5', 'e4', 'red']]
        },
        7: {
          title: 'White hits e4',
          text: '4.Nc3. The knight develops and attacks e4.',
          arrows: [['c3', 'e4', 'red']]
        },
        8: {
          title: 'Defend and develop',
          text: '4...Nf6. The knight guards e4.',
          arrows: [['f6', 'e4', 'green']]
        },
        9: {
          title: 'The gambit move',
          text: '5.f3. White attacks e4 a second time, ready to open the f-file.',
          arrows: [['f3', 'e4', 'red'], ['c3', 'e4', 'red']]
        },
        10: {
          title: 'The simple way',
          text: '5...exf3. Black takes and stays a pawn up. (5...Bb4!, shown below, is even stronger.)',
          arrows: [['e4', 'f3', 'red']]
        },
        11: {
          title: 'Knight recaptures',
          text: "6.Nxf3. White's pieces come out quickly, and the f-file is half-open.",
          marks: ['f7']
        },
        12: {
          title: 'Ready to castle',
          text: '6...Be7. Black develops and prepares ...O-O.',
          arrows: [['e8', 'g8', 'blue']]
        },
        13: {
          title: 'Bishop out',
          text: '7.Bd3. White aims at h7.',
          arrows: [['d3', 'h7', 'blue']]
        },
        14: {
          title: 'Strike at the center',
          text: "7...c5. Black hits d4, the pawn that holds White's center together. Black is a pawn up with a good game, and the engine prefers Black.",
          arrows: [['c5', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: "Black's recipe, and the honest verdict",
      body:
        "**For Black:** take the pawn (3...dxe4), defend it with the knight (...Nf6), develop the bishop (...Be7), castle, and then strike with ...c5. Don't spend extra moves hanging on to the pawn: development comes first.\n\n**For White:** the engine says Black is better in both gambits with correct play. They are dubious, not losing: White gets open lines and quick development, and a Black player who doesn't know the recipe can get into trouble fast. That surprise value is why you meet them in club games."
    },
    {
      kind: 'tip',
      title: 'An even stronger answer to 3.c4: 5...Bb4!',
      body:
        "In the Diemer–Duhm, after 5.f3 the engine's favorite is 5...Bb4, not 5...exf3. The bishop pins the c3-knight to White's king (d2 is empty, so the pin is absolute). The pinned knight can't take on e4, so White has a hard time winning the pawn back. Black then follows with ...c5 and castling."
    }
  ],
  takeaway:
    "Against 3.Be3 and 3.c4, take on e4, defend the pawn with ...Nf6, develop with ...Be7 and ...O-O, and hit d4 with ...c5. Black stays a pawn up and the engine prefers Black.",
  lookAhead:
    "That completes the sidelines. Chapter 4 turns to a main line: the Tarrasch, 3.Nd2. Module 4.1 explains why the knight goes to d2.",
  drills: [
    {
      title: 'Accept the Alapin Gambit',
      prompt: "You're Black. White has played 3.Be3, leaving e4 undefended. Take the pawn, defend it, take again when White offers the f-pawn, and develop toward castling.",
      moves: `${FRENCH} Be3 dxe4 Nd2 Nf6 f3 exf3 Ngxf3 Be7`,
      start: 5,
      side: 'black',
      hints: [
        'Take on e4 with the d-pawn, then guard it with the king\'s knight.',
        'After 5.f3, take on f3. After 6.Ngxf3, develop the f8-bishop so you can castle.'
      ],
      success: '3...dxe4, 4...Nf6, 5...exf3 and 6...Be7. Black is a pawn up and ready to castle.'
    },
    {
      title: 'Pin the defender',
      prompt: "You're Black. White has played 3.c4. Take on e4, defend it with your knight, and after 5.f3 find the engine's favorite move: pin the knight that attacks e4.",
      moves: DD_BB4,
      start: 5,
      side: 'black',
      hints: [
        '3...dxe4 and 4...Nf6 first.',
        'After 5.f3, which bishop move pins the c3-knight to White\'s king?'
      ],
      success: '3...dxe4, 4...Nf6 and 5...Bb4. The c3-knight is pinned and cannot take on e4. The engine says Black is clearly better.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 3.Be3, why can Black simply take on e4?',
      moves: `${FRENCH} Be3`,
      orientation: 'black',
      choices: [
        { text: 'Nothing defends the e4-pawn', correct: true, why: 'Right. The e3-bishop guards d4, not e4. White is offering the pawn as a gambit.' },
        { text: 'The e3-bishop is pinned', why: 'Nothing pins the bishop. It simply does not defend e4.' },
        { text: "Black can't take: 3...dxe4 loses a piece", why: 'No piece is lost. Black wins a clean pawn, and White hopes for compensation.' }
      ]
    },
    {
      type: 'plan',
      prompt: "What is Black's simple recipe against these gambits?",
      choices: [
        { text: 'Take the pawn, develop with ...Nf6, ...Be7 and ...O-O, then strike with ...c5', correct: true, why: 'Yes. Develop first, castle, and then hit d4. The engine prefers Black in both gambits.' },
        { text: 'Decline the pawn and play ...e5', why: 'Taking is the strongest answer here. 3...dxe4 is the engine\'s first choice against both 3.Be3 and 3.c4.' },
        { text: 'Take every pawn and keep the queen active', why: 'Grabbing with the queen while your pieces are at home is how gambits succeed. Develop and castle first.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 5...Bb4 so strong here?',
      moves: DD_BB4,
      orientation: 'black',
      choices: [
        { text: "It pins the c3-knight to White's king, so the knight can't help win back e4", correct: true, why: 'Right. d2 is empty, so the pin is absolute. The e4-pawn has one attacker fewer.' },
        { text: 'It attacks the d4-pawn', why: 'A bishop on b4 does not touch d4. Its job is to pin the c3-knight.' },
        { text: 'It wins the c3-knight at once', why: 'The knight is defended by the b2-pawn. The bishop pins it; it does not win it.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Black is a pawn up. What does White have for it?',
      moves: `${FRENCH} Be3 dxe4 Nd2 Nf6 f3 exf3 Ngxf3`,
      orientation: 'white',
      choices: [
        { text: 'Faster development and a half-open f-file', correct: true, why: "Yes. That is the gambit's idea. With correct play it is not quite enough: the engine prefers Black." },
        { text: 'A winning attack', why: "The engine says Black is better. White's attack only works if Black plays carelessly." },
        { text: 'Nothing at all', why: 'White does get something: quick development and open lines. It just falls short of a full pawn.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: "What is White's third move 3.c4 called here?",
      moves: `${FRENCH} c4`,
      orientation: 'black',
      choices: [
        { text: 'The Diemer–Duhm Gambit', correct: true, why: 'Right. 3.Be3 is the Alapin Gambit. Both offer the e4-pawn.' },
        { text: 'The Alapin Gambit', why: 'The Alapin Gambit is 3.Be3. 3.c4 is the Diemer–Duhm.' },
        { text: 'The Milner-Barry Gambit', why: 'The Milner-Barry is an Advance line, 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.Bd3 (Module 2.6).' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does the engine say about 3.Be3 and 3.c4?',
      choices: [
        { text: 'Black is better with correct play, so both gambits are dubious', correct: true, why: 'Yes. White gets some activity, but not enough for the pawn. They are dangerous only if Black does not know the recipe.' },
        { text: 'White gets a winning attack', why: 'No. If Black takes, develops and castles, White has no winning attack.' },
        { text: 'They are exactly equal', why: 'The engine prefers Black in both.' }
      ]
    }
  ],
  key: { name: 'Alapin Gambit 3.Be3: take, develop, castle', moves: ALAPIN, orientation: 'black' },
  terms: [
    { term: 'Gambit', meaning: 'An opening in which one side gives up material, usually a pawn, for quick development or open lines.' },
    { term: 'Accept a gambit', meaning: 'To take the pawn that is offered. Declining means leaving it.' },
    { term: 'Half-open file', meaning: 'A file with pawns of only one color on it. A rook on a half-open file presses against the enemy pawn on it.' }
  ]
})
