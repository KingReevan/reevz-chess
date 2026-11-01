import { defineModule } from '../../../types'
import { YUGOSLAV } from '../lines'

/** dragon-yug-soltis: 12.h4 h5 13.Bg5 Rc5 */
const SOLTIS = `${YUGOSLAV} Bc4 Bd7 O-O-O Rc8 Bb3 Ne5 h4 h5 Bg5 Rc5`
/** dragon-soltis-rxc3: 14.Bh6 Qa5 15.Kb1 Rfc8 16.g4 Rxc3! 17.Bxg7 Kxg7 18.bxc3 hxg4 */
const RXC3 = `${SOLTIS} Bh6 Qa5 Kb1 Rfc8 g4 Rxc3 Bxg7 Kxg7 bxc3 hxg4`
/** model-anand-kasparov-1995-g11, up to 13...Nc4 */
const AK_NC4 = `${YUGOSLAV} Bc4 Bd7 O-O-O Ne5 Bb3 Rc8 h4 h5 Kb1 Nc4`
/** the same game, moves 14 to 19 */
const AK = `${AK_NC4} Bxc4 Rxc4 Nde2 b5 Bh6 Qa5 Bxg7 Kxg7 Nf4 Rfc8 Ncd5 Qxd2`

export default defineModule({
  id: '3.5',
  title: "Black's counterplay: the c-file and ...Rxc3",
  minutes: 11,
  level: 2,
  goals: [
    "See how Black's rooks, queen and pawns gang up on the c3-knight",
    'Understand the exchange sacrifice ...Rxc3 and what Black gets for it',
    'Follow Kasparov holding the h-file shut and winning on the c-file'
  ],
  intro:
    "Module 3.4 showed White's attack. Now it is Black's turn. Black's pieces all point at one target: the c3-knight in front of White's king. Sometimes Black even gives up a whole rook for it. Why would anyone do that?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The exchange sacrifice ...Rxc3',
      intro: 'The Soltis position from Module 3.4. Count the attackers on c3 before each Black move.',
      moves: RXC3,
      start: 26,
      orientation: 'black',
      steps: {
        26: {
          title: 'The rook on c5',
          text: '13...Rc5. The rook sits on the half-open c-file, aiming at the c3-knight. The engine gives White a small edge.',
          arrows: [['c5', 'c3', 'red']],
          marks: ['c3']
        },
        27: {
          title: 'Trade the Dragon bishop',
          text: "14.Bh6. White goes for the bishop trade from Module 3.4. 14.Kb1 is a little more precise.",
          arrows: [['h6', 'g7', 'red']]
        },
        28: {
          title: 'The queen joins',
          text: '14...Qa5. Now the queen and the rook both attack c3. Only the b2-pawn and the queen defend it.',
          arrows: [['a5', 'c3', 'red'], ['c5', 'c3', 'red']],
          marks: ['c3']
        },
        29: {
          title: 'King to b1',
          text: '15.Kb1. The king steps into the corner and guards a2.',
          arrows: [['c1', 'b1', 'green']]
        },
        30: {
          title: 'Doubled rooks',
          text: '15...Rfc8. The second rook lines up behind the first. Black now has three pieces aimed at c3.',
          arrows: [['c8', 'c3', 'red'], ['a5', 'c3', 'red']]
        },
        31: {
          title: 'White pushes g4',
          text: '16.g4. White wants to break open the h-file with g4xh5. It is a natural try, but it gives Black time for the big idea.',
          arrows: [['g4', 'h5', 'red']]
        },
        32: {
          title: 'Rook takes knight',
          text: "16...Rxc3. Black gives a rook for a knight. This is the exchange sacrifice. It wrecks White's pawns and removes a guard of e4.",
          arrows: [['c5', 'c3', 'red']],
          marks: ['e4'],
          ann: '!'
        },
        33: {
          title: 'Bishops off first',
          text: '17.Bxg7. White trades the bishops before taking the rook.',
          marks: ['g7']
        },
        34: {
          title: 'King takes',
          text: '17...Kxg7. The king recaptures. The rook on c3 now hits the b3-bishop, so White takes the rook at once.',
          arrows: [['c3', 'b3', 'red'], ['b2', 'c3', 'green']]
        },
        35: {
          title: 'Pawn takes rook',
          text: "18.bxc3. White wins the exchange. But look at White's king: the b-pawn has gone, and the c-pawns are doubled.",
          marks: ['c2', 'c3', 'b1']
        },
        36: {
          title: 'A pawn back',
          text: "18...hxg4. Black takes a pawn and now attacks f3, the last guard of e4. Black is an exchange down for a pawn, but the engine slightly prefers Black.",
          arrows: [['g4', 'f3', 'red'], ['e5', 'f3', 'red'], ['f6', 'e4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'What Black gets for the exchange',
      body:
        "A rook is worth about five pawns and a knight about three, so ...Rxc3 costs Black about two pawns. Here is what Black gets back:\n\n1. **Broken pawns around White's king.** After bxc3 the b-pawn is gone and the c-pawns are doubled, so the king has less cover.\n2. **A weak e4-pawn.** The c3-knight was one of its guards. Now Black's knight and pawns can attack it.\n3. **Often a pawn at once**, like 18...hxg4 here.\n\nThe sacrifice is not automatic. It works when White's own attack is slow and Black's pieces can follow up. Always count before you give up a rook."
    },
    {
      kind: 'walkthrough',
      title: 'Anand–Kasparov 1995, game 11',
      intro: 'Kasparov played 12...h5 against 12.h4, then 13.Kb1 Nc4 14.Bxc4. Watch how the closed h-file changes the Bh6 trade.',
      moves: AK,
      start: 27,
      orientation: 'black',
      steps: {
        27: {
          title: 'The bishop is taken',
          text: "14.Bxc4. White removes the knight, just as Karpov did. But this time Black's pawn on h5 blocks White's h-pawn.",
          marks: ['h5', 'h4']
        },
        28: {
          title: 'The rook on c4',
          text: '14...Rxc4. The rook lands on c4, the same square as in Karpov–Korchnoi.',
          arrows: [['c4', 'c3', 'red']]
        },
        29: {
          title: 'Guarding c3',
          text: '15.Nde2. The knight adds a guard to c3 and keeps an eye on f4 and g3.',
          arrows: [['e2', 'c3', 'green']]
        },
        30: {
          title: 'The b-pawn joins',
          text: '15...b5. Black brings another attacker. The pawn wants to go to b4 and kick the c3-knight. The d7-bishop guards it.',
          arrows: [['b5', 'b4', 'green'], ['d7', 'b5', 'green']]
        },
        31: {
          title: 'The bishop trade',
          text: "16.Bh6. White offers the trade, as in Module 3.4.",
          arrows: [['h6', 'g7', 'red']]
        },
        32: {
          title: 'Ignore it',
          text: '16...Qa5. Black adds the queen to the pressure on c3 and lets White take on g7.',
          arrows: [['a5', 'c3', 'red']]
        },
        33: {
          title: 'Bishops off',
          text: '17.Bxg7. The Dragon bishop is gone.',
          marks: ['g7']
        },
        34: {
          title: 'Safe enough',
          text: "17...Kxg7. Without an open h-file, White has no quick way to the king. The pawn on h5 is doing its job.",
          marks: ['h5']
        },
        35: {
          title: 'Pressure on h5',
          text: '18.Nf4. The knight hits h5. The g6-pawn and the f6-knight guard it.',
          arrows: [['f4', 'h5', 'red'], ['g6', 'h5', 'green']]
        },
        36: {
          title: 'Both rooks on the c-file',
          text: '18...Rfc8. Black doubles rooks on the c-file.',
          arrows: [['c8', 'c4', 'blue']]
        },
        37: {
          title: 'The queens face off',
          text: '19.Ncd5. The knight leaves c3, and now the queens look at each other along the d2–a5 diagonal.',
          arrows: [['d2', 'a5', 'yellow']]
        },
        38: {
          title: 'Queens off',
          text: "19...Qxd2. The queens come off. The position is about level, but Black's rooks own the c-file and Black's queenside pawns can advance. Kasparov later won the endgame.",
          arrows: [['c4', 'c2', 'blue']]
        }
      }
    },
    {
      kind: 'history',
      title: 'How it ended',
      body:
        "After 20.Rxd2 Nxd5 21.Nxd5, Kasparov slowly pushed his queenside pawns and used the c-file. The game ended 31...Rxc2, with Black's rook on White's second rank, and Anand lost. It was the first Dragon of the match, and Kasparov won again with it in game 13."
    }
  ],
  takeaway:
    "Black's counterplay goes at the c3-knight: rooks on the c-file, the queen on a5 and ...b5–b4. The exchange sacrifice ...Rxc3 breaks up White's king cover. With ...h5 holding the h-file shut, Black can even welcome the trade of the Dragon bishop.",
  lookAhead:
    "Module 3.6 shows two other ninth moves for White: 9.O-O-O, met by the freeing ...d5, and the sharp 9.g4.",
  drills: [
    {
      title: 'Give up the exchange',
      prompt: "You're Black. White has just played 16.g4 to open the h-file. Hit White's king first.",
      moves: RXC3,
      start: 31,
      side: 'black',
      hints: [
        'Three of your pieces aim at c3. Take it.',
        'Rook takes c3. After 17.Bxg7, take back with the king, and after 18.bxc3 grab a pawn on g4.'
      ],
      success: "16...Rxc3!, 17...Kxg7 and 18...hxg4. White's king has lost its cover, and Black is slightly better despite the missing exchange."
    },
    {
      title: "Kasparov's knight trip",
      prompt: "You're Black (Kasparov). White has just played 13.Kb1. Trade off the b3-bishop and bring more pressure on c3.",
      moves: `${AK_NC4} Bxc4 Rxc4 Nde2 b5`,
      start: 25,
      side: 'black',
      hints: [
        'Your e5-knight can jump to a square that hits the queen and the e3-bishop.',
        'After Bxc4, take back with the rook. Then a pawn move adds an attacker to c3.'
      ],
      success: '13...Nc4, 14...Rxc4 and 15...b5. The rook sits on c4 and the b-pawn is ready for ...b4.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black to move. White has just played 16.g4. What is Black\'s strongest reply?',
      moves: RXC3.split(' ').slice(0, 31).join(' '),
      orientation: 'black',
      choices: [
        { text: '16...Rxc3', correct: true, why: "Right. The exchange sacrifice breaks up White's king cover before White's attack arrives. The engine slightly prefers Black afterward." },
        { text: '16...hxg4', why: 'It is playable, but it helps White open the h-file with h4–h5. Striking first on c3 is stronger.' },
        { text: '16...Bxh6', why: "After 17.Qxh6, White's queen sits close to Black's king and White is better. Keep the focus on c3." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 16...Rxc3 17.Bxg7 Kxg7 18.bxc3, what has Black gained for the exchange?',
      moves: RXC3.split(' ').slice(0, 35).join(' '),
      orientation: 'black',
      choices: [
        { text: "Broken pawns in front of White's king and a weaker e4-pawn", correct: true, why: 'Yes. The b-pawn is gone, the c-pawns are doubled, and e4 has lost the c3-knight as a guard.' },
        { text: 'An extra piece', why: 'No. Black gave a rook for a knight, so Black is behind in material. The gain is in the position.' },
        { text: 'A queen trade', why: 'The queens are still on the board. The point of ...Rxc3 is the damage to White\'s pawns.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In Anand–Kasparov 1995, White traded the Dragon bishop with Bh6 and Bxg7. Why was Black\'s king still safe?',
      moves: AK.split(' ').slice(0, 34).join(' '),
      orientation: 'black',
      choices: [
        { text: 'The pawn on h5 kept the h-file closed', correct: true, why: "Right. White's recipe needs an open h-file. Without it, the bishop trade alone does not create a mating attack." },
        { text: "White's queen was traded off first", why: 'The queens came off later, on move 19. When the bishops were traded, the queens were still on.' },
        { text: 'Black had an extra piece to defend', why: 'Material was level. The pawn on h5 made the difference.' }
      ]
    },
    {
      type: 'plan',
      prompt: "Which White piece is the main target of Black's counterplay in the Yugoslav?",
      choices: [
        { text: 'The c3-knight', correct: true, why: 'Yes. Rooks on the c-file, the queen on a5 and ...b5–b4 all go after it. It guards e4 and shields White\'s king.' },
        { text: 'The e3-bishop', why: 'The knight trip ...Nc4 hits it, but the main target of the c-file pressure is the c3-knight.' },
        { text: 'The h1-rook', why: "That rook is far away on the kingside. Black's play is on the queenside, against c3." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 16...Rxc3 17.Bxg7 Kxg7 18.bxc3 hxg4, what is the material balance?',
      moves: RXC3,
      orientation: 'black',
      choices: [
        { text: 'Black is an exchange down for a pawn', correct: true, why: 'Right. Black gave a rook for a knight and then won a pawn. The bishops were traded.' },
        { text: 'Material is level', why: 'Not quite. Black gave a rook for a knight, so White is still up the exchange for a pawn.' },
        { text: 'Black is a whole rook down', why: 'Black got the c3-knight for the rook, and a pawn on g4 as well.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why did 19.Ncd5 in Anand–Kasparov allow a queen trade?',
      moves: AK.split(' ').slice(0, 37).join(' '),
      orientation: 'black',
      choices: [
        { text: 'With the knight gone from c3, the queens faced each other on the a5–d2 diagonal', correct: true, why: 'Yes. Black took the chance with 19...Qxd2 and headed for an endgame where the c-file mattered.' },
        { text: 'The knight attacked Black\'s queen', why: 'A knight on d5 does not attack a5. It simply cleared the diagonal between the two queens.' },
        { text: 'White\'s queen was pinned', why: "Nothing pins White's queen. The c3-square was simply empty now." }
      ]
    }
  ],
  key: { name: 'Soltis exchange sacrifice: 16...Rxc3!', moves: RXC3.split(' ').slice(0, 32).join(' '), orientation: 'black' },
  terms: [
    { term: 'Doubled pawns', meaning: 'Two pawns of the same color on one file. They can\'t protect each other and give the king less cover.' },
    { term: 'Compensation', meaning: 'What you get back for material you gave up, like open lines, a weak enemy king or active pieces.' },
    { term: 'Endgame', meaning: 'The last stage of the game, usually after the queens are traded, when few pieces are left.' }
  ]
})
