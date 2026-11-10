import { defineModule } from '../../../types'
import { RUBINSTEIN } from '../lines'

/** rub-4nd7: 4...Nd7 5.Nf3 Ngf6 6.Nxf6+ Nxf6 */
const MAIN = `${RUBINSTEIN} Nd7 Nf3 Ngf6 Nxf6+ Nxf6`
/** rub-7c3: 7.c3 c5 8.Ne5 a6 9.Be3 Qc7 */
const C3 = `${MAIN} c3 c5 Ne5 a6 Be3 Qc7`
/** rub-7ne5: 7.Ne5 Bd6 8.Bg5 h6 9.Bh4 O-O 10.Bd3 c5 */
const NE5 = `${MAIN} Ne5 Bd6 Bg5 h6 Bh4 O-O Bd3 c5`
/** rub-6bg5: 6.Bg5 h6 7.Nxf6+ Nxf6 8.Bh4 c5 9.Bb5+ Bd7 10.Bxd7+ Qxd7 */
const BG5 = `${RUBINSTEIN} Nd7 Nf3 Ngf6 Bg5 h6 Nxf6+ Nxf6 Bh4 c5 Bb5+ Bd7 Bxd7+ Qxd7`

export default defineModule({
  id: '5.4',
  title: "White's other tries: 7.c3, 7.Ne5 and 6.Bg5",
  minutes: 11,
  level: 2,
  goals: [
    'Know the ideas behind 7.c3, 7.Ne5 and 6.Bg5',
    'Answer every pin on f6 with ...h6, and never take on e4 while pinned',
    'Use the same freeing break, ...c5, against all three'
  ],
  intro:
    "Module 5.3 showed White's most direct plan, 7.Bd3. But White has other ways to play: a quiet c3, an early knight jump to e5, or a pin with 6.Bg5. Each has its own idea. The good news for Black: the answer is almost always the same.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The quiet 7.c3',
      intro: 'White first makes d4 rock-solid, then uses the e5-square.',
      moves: C3,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'The main position',
          text: '6...Nxf6. Instead of 7.Bd3, White can pick a calmer plan.',
          marks: ['d4']
        },
        13: {
          title: 'Support for d4',
          text: '7.c3. The pawn supports d4, so a later ...c5 will not shake White\'s center. lichess calls this line the Kasparov Attack.',
          arrows: [['c3', 'd4', 'green']]
        },
        14: {
          title: 'Black breaks anyway',
          text: '7...c5. Black hits d4 all the same. Black could also play ...a6 or ...Be7 first.',
          arrows: [['c5', 'd4', 'red']]
        },
        15: {
          title: 'The knight jumps in',
          text: "8.Ne5. The knight takes a central post on e5, where the d4-pawn supports it. This knight is the key piece in White's plan.",
          arrows: [['d4', 'e5', 'green']],
          marks: ['e5']
        },
        16: {
          title: 'No Bb5+',
          text: "8...a6. A useful little move: the pawn takes b5 away from White's bishop, so there is no Bb5+.",
          arrows: [['a6', 'b5', 'green']]
        },
        17: {
          title: 'Three defenders',
          text: '9.Be3. The bishop develops and guards d4 for a third time, together with the c3-pawn and the queen.',
          arrows: [['e3', 'd4', 'green'], ['c3', 'd4', 'green'], ['d1', 'd4', 'green']]
        },
        18: {
          title: 'A small edge',
          text: "9...Qc7. The queen develops and hits the e5-knight, which the d4-pawn defends. White keeps a small edge thanks to the knight and the extra space.",
          arrows: [['c7', 'e5', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The Capablanca Line: 7.Ne5',
      intro: 'This time the knight jumps to e5 straight away.',
      moves: NE5,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'The main position',
          text: '6...Nxf6. White has another idea: put the knight on e5 at once.',
          arrows: [['f3', 'e5', 'blue']]
        },
        13: {
          title: 'An early knight jump',
          text: '7.Ne5. This is known as the Capablanca Line. The knight grabs the e5-square before Black can cover it.',
          marks: ['e5']
        },
        14: {
          title: 'Challenge the knight',
          text: '7...Bd6. Black develops and attacks the knight at once.',
          arrows: [['d6', 'e5', 'red']]
        },
        15: {
          title: 'A pin',
          text: '8.Bg5. The bishop pins the f6-knight to the queen on d8.',
          arrows: [['g5', 'f6', 'red'], ['f6', 'd8', 'yellow']]
        },
        16: {
          title: 'Ask the bishop',
          text: '8...h6. As in Module 5.3, Black asks the bishop right away.',
          arrows: [['h6', 'g5', 'red']]
        },
        17: {
          title: 'The pin stays',
          text: '9.Bh4. The bishop steps back and keeps the pin.',
          arrows: [['h4', 'f6', 'red']]
        },
        18: {
          title: 'Black castles',
          text: "9...O-O. Black's king is safe. The f6-knight is still pinned, but the queen and the g7-pawn guard it.",
          arrows: [['e8', 'g8', 'green']]
        },
        19: {
          title: 'Aiming at the king',
          text: "10.Bd3. White's last minor piece comes out, pointing at Black's kingside.",
          arrows: [['d3', 'h7', 'blue']]
        },
        20: {
          title: 'The same break',
          text: '10...c5. Black hits d4, just as in every Rubinstein line. White keeps a small edge, but Black has active pieces and a solid king.',
          arrows: [['c5', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The pin 6.Bg5',
      intro: 'White can pin a move earlier, before trading on f6. Watch out for a trap.',
      moves: BG5,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'One move earlier',
          text: '5...Ngf6. The usual challenge to the e4-knight.',
          arrows: [['f6', 'e4', 'red']]
        },
        11: {
          title: 'The pin',
          text: '6.Bg5. The bishop pins the f6-knight to the queen. Careful: 6...Nxe4?? loses the queen to 7.Bxd8.',
          arrows: [['g5', 'f6', 'red'], ['f6', 'd8', 'yellow']]
        },
        12: {
          title: 'Ask the bishop',
          text: '6...h6. Black asks the bishop at once: take on f6, or step back?',
          arrows: [['h6', 'g5', 'red']]
        },
        13: {
          title: 'White trades first',
          text: '7.Nxf6+. White trades knights before deciding about the bishop.',
          arrows: [['f6', 'e8', 'red']]
        },
        14: {
          title: 'The usual recapture',
          text: '7...Nxf6. The d7-knight takes back, as always. Black\'s pawns stay healthy.',
          marks: ['f6']
        },
        15: {
          title: 'Keeping the pin',
          text: '8.Bh4. The bishop steps back and still pins the knight to the queen.',
          arrows: [['h4', 'f6', 'red'], ['f6', 'd8', 'yellow']]
        },
        16: {
          title: 'The break',
          text: '8...c5. Black hits d4 at once.',
          arrows: [['c5', 'd4', 'red']]
        },
        17: {
          title: 'A check',
          text: '9.Bb5+. White develops the last bishop with check.',
          arrows: [['b5', 'e8', 'red']]
        },
        18: {
          title: 'Block with the bishop',
          text: "9...Bd7. Black blocks with the c8-bishop. Black is glad to offer it: it is Black's problem piece.",
          arrows: [['d7', 'b5', 'blue']]
        },
        19: {
          title: 'The bishops come off',
          text: '10.Bxd7+. White takes, with check.',
          marks: ['d7']
        },
        20: {
          title: 'Level',
          text: '10...Qxd7. The queen takes back. Black\'s problem bishop has been traded, Black will castle soon, and the position is level.',
          arrows: [['e8', 'g8', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'One answer to three tries',
      body:
        "White's ideas differ. **7.c3** makes d4 solid and prepares Ne5. **7.Ne5** puts the knight on e5 at once. **6.Bg5** pins the f6-knight before any trade. All three keep at most a small edge for White.\n\nBlack's answer hardly changes: develop, meet every Bg5 pin with **...h6**, castle, and break with **...c5**. If a chance comes to trade the c8-bishop, as after 9.Bb5+ Bd7, Black is happy to take it."
    },
    {
      kind: 'warning',
      title: 'A pinned knight should not capture',
      body:
        "When a bishop on g5 pins your f6-knight to the queen, the knight can still move. But if it does, the bishop takes your queen. In the 6.Bg5 line, 6...Nxe4?? 7.Bxd8 loses the queen for a knight and a bishop. Break the pin first, or ask the bishop with ...h6."
    }
  ],
  takeaway:
    'Against 7.c3, 7.Ne5 and 6.Bg5, Black uses the same recipe: develop, answer Bg5 with ...h6, castle and break with ...c5. White keeps a small edge at most, and after 6.Bg5 the game is level.',
  lookAhead:
    'Module 5.5 shows the other way to play 3...dxe4: Fort Knox, where Black solves the problem bishop at once with ...Bd7 and ...Bc6.',
  drills: [
    {
      title: 'Meet the Capablanca Line',
      prompt: "You're Black. White has jumped in with 7.Ne5. Challenge the knight, answer the pin, castle and break.",
      moves: NE5,
      start: 13,
      side: 'black',
      hints: ['Develop the f8-bishop with an attack on the knight.', 'Answer Bg5 with your h-pawn, castle, then play the usual pawn break.'],
      success: '7...Bd6, 8...h6, 9...O-O and 10...c5. Active pieces and a safe king.'
    },
    {
      title: "White's quiet plan",
      prompt: "You're White. You have played 7.c3, and Black has answered 7...c5. Put a knight on its best square, then guard d4 a third time.",
      moves: `${MAIN} c3 c5 Ne5 a6 Be3`,
      start: 14,
      side: 'white',
      hints: ['Which central square does the d4-pawn support?', 'After 8...a6, develop the c1-bishop where it guards d4.'],
      success: '8.Ne5 a6 9.Be3. The knight is strong on e5, and d4 is well guarded.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the main point of 7.c3?',
      moves: `${MAIN} c3`,
      orientation: 'white',
      choices: [
        { text: "It supports d4, so ...c5 won't shake White's center", correct: true, why: 'Right. After ...c5, White can keep the pawn on d4 and then use the e5-square for a knight.' },
        { text: 'It prepares a queenside pawn storm with b4 and a4', why: "That is not the idea here. White's plan is central: hold d4 and put a knight on e5." },
        { text: 'It prepares to castle queenside', why: "c3 doesn't help long castling: White's queen and c1-bishop are still on the back rank. The idea is to support d4." }
      ]
    },
    {
      type: 'trap',
      prompt: "Black to move. Why is 6...Nxe4 a blunder here?",
      moves: `${RUBINSTEIN} Nd7 Nf3 Ngf6 Bg5`,
      orientation: 'black',
      choices: [
        { text: 'The f6-knight is pinned to the queen: 7.Bxd8 wins the queen', correct: true, why: 'Right. Once the knight leaves f6, the bishop on g5 takes the queen on d8.' },
        { text: 'The e4-knight is defended, so Black just loses a knight', why: "Nothing defends the e4-knight. The problem is the pin: after ...Nxe4, Bxd8 takes the queen." },
        { text: 'The move is illegal', why: "It is legal, because the pin is to the queen, not the king. It is just a terrible move." }
      ]
    },
    {
      type: 'plan',
      prompt: "After 7.Ne5, what does 7...Bd6 do?",
      moves: `${MAIN} Ne5 Bd6`,
      orientation: 'black',
      choices: [
        { text: 'It develops a piece and challenges the e5-knight', correct: true, why: 'Right. The bishop hits e5 at once, so the knight cannot sit there for free.' },
        { text: 'It prepares ...Bxe5, winning a pawn', why: 'After ...Bxe5 dxe5, bishop and knight are traded and no pawn is won. The point is development and pressure on e5.' },
        { text: 'It stops White from castling', why: "The bishop on d6 doesn't attack f1 or g1, so it does nothing to stop White from castling short. The point is development and pressure on e5." }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 6.Bg5 line, after 9.Bb5+ Bd7 10.Bxd7+ Qxd7, why is Black happy?',
      moves: BG5,
      orientation: 'black',
      choices: [
        { text: "Black's problem bishop has been traded off", correct: true, why: 'Right. The c8-bishop, hemmed in by the e6-pawn, is gone. The position is level.' },
        { text: 'Black has won a pawn', why: 'No. Bishops were traded one for one. Material is equal.' },
        { text: "White's king is stuck in the center", why: 'White can castle short at once. Black is happy because of the bishop trade, not because of the kings.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: "Against White's tries 7.c3, 7.Ne5 and 6.Bg5, what is Black's main freeing pawn move?",
      choices: [
        { text: '...c5', correct: true, why: 'Right. ...c5 hits d4 in every one of these lines, just as against 7.Bd3.' },
        { text: '...e5', why: "Black can't easily play ...e5: the d4-pawn and White's knight control that square. ...c5 is the break that works." },
        { text: '...f6', why: 'There is no white pawn on e5 to attack, and ...f6 would weaken e6 and Black\'s king.' }
      ]
    },
    {
      type: 'plan',
      prompt: "In the 7.c3 line, what is White's plan?",
      moves: C3,
      orientation: 'white',
      choices: [
        { text: 'Keep the pawn on d4 with c3, then use e5 for a knight', correct: true, why: 'Right. The knight on e5, backed by d4, is the heart of the line. White keeps a small edge.' },
        { text: 'Castle long and push the kingside pawns', why: 'That is closer to the 7.Bd3 plan with Qe2, Bg5 and O-O-O (Module 5.3). 7.c3 is a calmer, central plan.' },
        { text: 'Win the c5-pawn with b4', why: 'White is not trying to win a pawn. The plan is to keep the center solid and put a knight on e5.' }
      ]
    }
  ],
  key: { name: 'Rubinstein, Capablanca Line: 7.Ne5', moves: `${MAIN} Ne5`, orientation: 'black' },
  terms: [
    { term: 'Relative pin', meaning: 'A pin to a piece other than the king, like a knight pinned to the queen. The pinned piece may move, but it costs material.' },
    { term: 'Capablanca Line', meaning: 'The Rubinstein line 6.Nxf6+ Nxf6 7.Ne5, where White puts a knight on e5 at once.' },
    { term: 'Central post', meaning: 'A strong square in the center for a piece, like e5 for White\'s knight when the d4-pawn supports it.' }
  ]
})
