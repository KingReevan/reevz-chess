import { defineModule } from '../../../types'
import { MOSCOW } from '../lines'

/** 3...Bd7 4.Bxd7+ Qxd7 */
const TRADE = `${MOSCOW} Bd7 Bxd7+ Qxd7`
/** moscow-bd7-c4: 5.c4 Nc6 6.Nc3 g6 7.d4 cxd4 8.Nxd4 Bg7 9.Be3 Nf6 10.f3 O-O */
const BIND = `${TRADE} c4 Nc6 Nc3 g6 d4 cxd4 Nxd4 Bg7 Be3 Nf6 f3 O-O`
/** moscow-bd7-oo: 5.O-O Nf6 6.Re1 Nc6 7.c3 e6 8.d4 cxd4 9.cxd4 d5 10.e5 Ne4 */
const CASTLE = `${TRADE} O-O Nf6 Re1 Nc6 c3 e6 d4 cxd4 cxd4 d5 e5 Ne4`

export default defineModule({
  id: '9.4',
  title: '3.Bb5+: the Moscow',
  minutes: 11,
  level: 2,
  goals: [
    'Know why 3.Bb5+ is a check after 2...d6, and what White wants from it',
    'Learn the trade 3...Bd7 4.Bxd7+ Qxd7',
    "See White's two plans: the 5.c4 clamp, or 5.O-O with c3 and d4"
  ],
  intro:
    "After 1.e4 c5 2.Nf3 d6, White's most common move is 3.d4, the road to the Najdorf and the Dragon. Players who don't want to meet those choose 3.Bb5+, the Moscow Variation. White gives check, trades off the light-squared bishops, and gets a calm game with a clear plan. What do both sides aim for?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The check, the trade and the 5.c4 clamp',
      intro: 'Watch the d5 square. After the bishop trade, White puts two pawns on it.',
      moves: BIND,
      start: 5,
      orientation: 'white',
      steps: {
        5: {
          title: 'The Moscow',
          text: "3.Bb5+. The d-pawn has left d7, so the bishop gives check. This is the Moscow Variation, also called the Canal–Sokolsky Attack. White avoids the Najdorf and the Dragon and aims to trade the light-squared bishops.",
          arrows: [['b5', 'e8', 'red']]
        },
        6: {
          title: 'Block and offer a trade',
          text: "3...Bd7. Black's main answer. The bishop blocks the check and offers itself in exchange.",
          arrows: [['d7', 'b5', 'yellow']]
        },
        7: {
          title: 'White trades',
          text: '4.Bxd7+. White takes with check. Both light-squared bishops will now leave the board.',
          arrows: [['d7', 'e8', 'red']]
        },
        8: {
          title: 'The queen takes back',
          text: "4...Qxd7. Black takes back with the queen, so the b8-knight can still go to c6. 4...Nxd7 is also played. 4...Kxd7? would give up castling, and White would be clearly better.",
          arrows: [['b8', 'c6', 'blue']]
        },
        9: {
          title: 'The clamp',
          text: '5.c4. White puts pawns on c4 and e4. Together they hit d5, so Black will find it very hard to play ...d5. This set-up is the Maróczy Bind (Module 3.9).',
          arrows: [['c4', 'd5', 'yellow'], ['e4', 'd5', 'yellow']],
          marks: ['d5']
        },
        10: {
          title: 'Toward d4',
          text: '5...Nc6. The knight develops and watches d4.',
          arrows: [['c6', 'd4', 'green']]
        },
        11: {
          title: 'Another guard for d5',
          text: '6.Nc3. The knight adds a third guard to d5 and gets ready for d4.',
          arrows: [['c3', 'd5', 'green']]
        },
        12: {
          title: 'A fianchetto',
          text: '6...g6. Black prepares ...Bg7, as in the Dragon.',
          arrows: [['f8', 'g7', 'blue']]
        },
        13: {
          title: 'Now d4',
          text: '7.d4. With the clamp in place, White opens the center.',
          arrows: [['d4', 'c5', 'red']]
        },
        14: {
          title: 'Black trades',
          text: '7...cxd4. The usual Sicilian trade.'
        },
        15: {
          title: 'An Open Sicilian, with c4',
          text: "8.Nxd4. The pawn structure looks like an Open Sicilian, but White's c-pawn is on c4 and the light-squared bishops are gone.",
          marks: ['c4', 'd4']
        },
        16: {
          title: 'The bishop on the long diagonal',
          text: '8...Bg7. The bishop aims at the d4-knight.',
          arrows: [['g7', 'd4', 'red']]
        },
        17: {
          title: 'Guarding d4',
          text: '9.Be3. The bishop defends the d4-knight.',
          arrows: [['e3', 'd4', 'green']]
        },
        18: {
          title: 'Hitting e4',
          text: '9...Nf6. The knight attacks the e4-pawn.',
          arrows: [['f6', 'e4', 'red']]
        },
        19: {
          title: 'A pawn guard',
          text: '10.f3. A pawn now guards e4, and it also keeps a black knight off g4, where it could hit the e3-bishop.',
          arrows: [['f3', 'e4', 'green'], ['f3', 'g4', 'green']]
        },
        20: {
          title: 'Space against no weaknesses',
          text: '10...O-O. The game is roughly level. White has more space. Black has no weak pawns, and the bishop trade has made Black\'s position less cramped. Black waits for a break such as ...b5.',
          arrows: [['b7', 'b5', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Why the bishop trade matters',
      body:
        "**For White,** 3.Bb5+ is a way to skip the long theory of the Najdorf and the Dragon. White develops a piece with check and decides later between a clamp with c4 and a big center with c3 and d4.\n\n**For Black,** the trade of light-squared bishops is welcome. Black's c8-bishop is often hard to develop in the Sicilian, and when you have less space, every trade gives your other pieces more room.\n\nThe price for White is that the b5-bishop, a good attacking piece, leaves the board. That is why the Moscow leads to calm, positional games."
    },
    {
      kind: 'walkthrough',
      title: 'The other plan: 5.O-O, c3 and d4',
      intro: 'Same trade, but now White castles and builds a big pawn center.',
      moves: CASTLE,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'Same position',
          text: '4...Qxd7. The light-squared bishops are gone. This time White does not play c4.'
        },
        9: {
          title: 'White castles',
          text: '5.O-O. The king is safe. White plans Re1, c3 and d4.',
          arrows: [['c2', 'c3', 'blue'], ['d2', 'd4', 'blue']]
        },
        10: {
          title: 'Hitting e4',
          text: '5...Nf6. Black develops and attacks the e4-pawn.',
          arrows: [['f6', 'e4', 'red']]
        },
        11: {
          title: 'The rook defends',
          text: '6.Re1. The rook guards e4.',
          arrows: [['e1', 'e4', 'green']]
        },
        12: {
          title: 'Another piece out',
          text: '6...Nc6. The knight develops toward d4 and e5.',
          arrows: [['c6', 'd4', 'green']]
        },
        13: {
          title: 'Preparing d4',
          text: '7.c3. As in the Alapin (Chapter 7), c3 prepares d4, so that ...cxd4 can be met by cxd4.',
          arrows: [['c3', 'd4', 'green']]
        },
        14: {
          title: 'Getting ready for ...d5',
          text: '7...e6. Black prepares ...d5. The f8-bishop can now come out to e7.',
          arrows: [['e6', 'd5', 'green']]
        },
        15: {
          title: 'White pushes',
          text: '8.d4. White builds the big center.',
          arrows: [['d4', 'c5', 'red']]
        },
        16: {
          title: 'Black takes',
          text: '8...cxd4. Black trades the c-pawn first.'
        },
        17: {
          title: 'Two center pawns',
          text: '9.cxd4. White has pawns on d4 and e4. If Black waits, White may push d5 or e5 and cramp Black.',
          marks: ['d4', 'e4']
        },
        18: {
          title: 'Strike at once',
          text: '9...d5. The best answer: Black hits e4 straight away. This is the same idea as in the Rossolimo with c3 and d4 (Module 9.1).',
          arrows: [['d5', 'e4', 'red']],
          ann: '!'
        },
        19: {
          title: 'White pushes past',
          text: '10.e5. White gains space and kicks the f6-knight. The pawns now form two chains: d4–e5 for White, d5–e6 for Black, as in the French Defense.',
          arrows: [['e5', 'f6', 'red']],
          marks: ['d4', 'e5', 'd5', 'e6']
        },
        20: {
          title: 'A knight on e4',
          text: '10...Ne4. The knight jumps to a strong square, guarded by the d5-pawn. White has a little more space, but the game is roughly level. Both c-pawns are gone, and Black plays on the queenside, along the open c-file.',
          arrows: [['d5', 'e4', 'green']],
          marks: ['e4']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Bb5 or Bb5+?',
      body:
        'After 2...Nc6, the bishop move 3.Bb5 is the Rossolimo: it hits a knight. After 2...d6, 3.Bb5+ is the Moscow: it gives check, because the d-pawn no longer blocks the diagonal to e8. Same square, different openings.'
    }
  ],
  takeaway:
    "3.Bb5+ checks because ...d6 has opened the diagonal to e8. After 3...Bd7 4.Bxd7+ Qxd7, White chooses between a clamp on d5 with c4 (the Maróczy Bind) and a big center with O-O, c3 and d4, which Black meets with ...e6 and ...d5. The bishop trade gives Black a less cramped game.",
  lookAhead:
    'Module 9.5 shows the two other ways to block the check, 3...Nc6 and the sharp 3...Nd7, which keep more pieces on the board.',
  drills: [
    {
      title: 'The Moscow clamp as White',
      prompt: "You're White. The bishops have just been traded. Build the clamp on d5, then open the center and set up as in the Maróczy Bind.",
      moves: BIND.split(' ').slice(0, 19).join(' '),
      start: 8,
      side: 'white',
      hints: [
        'Put a second pawn on the d5 square first: the c-pawn goes two squares.',
        'Then Nc3, d4 and Nxd4. Guard the knight with the dark-squared bishop, and guard e4 with a pawn.'
      ],
      success: '5.c4, 6.Nc3, 7.d4, 8.Nxd4, 9.Be3 and 10.f3. White has a firm grip on d5 and lots of space.'
    },
    {
      title: 'Black against the big center',
      prompt: "You're Black. White has just played 7.c3, preparing d4. Prepare ...d5, trade on d4, then hit the center and put a knight on a strong square.",
      moves: CASTLE,
      start: 13,
      side: 'black',
      hints: [
        'First a pawn move that supports ...d5.',
        'After 8.d4, take on d4. After 9.cxd4, push the d-pawn two squares. After 10.e5, the f6-knight jumps forward.'
      ],
      success: '7...e6, 8...cxd4, 9...d5 and 10...Ne4. The knight is guarded by the d5-pawn, and the game is roughly level.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why is 3.Bb5 a check here, when it is not a check in the Rossolimo?',
      moves: MOSCOW,
      orientation: 'black',
      choices: [
        { text: 'Because 2...d6 moved the d-pawn off the b5–e8 diagonal', correct: true, why: 'Right. In the Rossolimo, Black played 2...Nc6, and the d7-pawn still blocks the diagonal.' },
        { text: 'Because the bishop goes to a different square', why: 'It is the same square, b5. The difference is what stands on d7.' },
        { text: 'Because White played d4 first', why: 'White has not played d4. The check comes from the empty d7-square.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 3...Bd7 4.Bxd7+, why does Black usually take back with the queen?',
      moves: `${MOSCOW} Bd7 Bxd7+`,
      orientation: 'black',
      choices: [
        { text: 'So the b8-knight can still develop to c6', correct: true, why: 'Yes. 4...Nxd7 is also playable, but the knight on d7 is less active than on c6.' },
        { text: 'Because 4...Nxd7 loses a piece', why: 'It does not. 4...Nxd7 is a normal move. The queen recapture just keeps c6 for the knight.' },
        { text: 'Because 4...Kxd7 is illegal', why: '4...Kxd7 is legal, but it gives up castling, and White would be clearly better.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'What is the point of 5.c4 in this position?',
      moves: `${TRADE} c4`,
      orientation: 'white',
      choices: [
        { text: 'The c4- and e4-pawns clamp d5, so ...d5 is hard for Black', correct: true, why: 'Right. This is the Maróczy Bind. White gets space, and Black has to wait for another break, such as ...b5.' },
        { text: 'To attack the c5-pawn', why: 'A pawn on c4 does not attack c5. Pawns capture diagonally: c4 hits b5 and d5.' },
        { text: 'To prepare a queenside attack with b4 and a4', why: 'The point is the d5 square. With c4 and e4, White controls the center.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has pawns on d4 and e4. What is the best move?',
      moves: CASTLE.split(' ').slice(0, 17).join(' '),
      orientation: 'black',
      choices: [
        { text: '9...d5', correct: true, why: 'Right. Black hits e4 at once. After 10.e5 Ne4 the knight is strong and the game is roughly level.' },
        { text: '9...Be7', why: 'A useful developing move, but it lets White keep the big center for now. Hitting e4 at once with ...d5 is more accurate.' },
        { text: '9...Rc8', why: 'The c-file matters later. Right now the center needs an answer, and ...d5 is the move.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In the Moscow with 3...Bd7, which pieces are usually traded off early?',
      moves: TRADE,
      orientation: 'white',
      choices: [
        { text: 'The light-squared bishops', correct: true, why: 'Yes. 4.Bxd7+ Qxd7 removes both. That suits Black, who has less space.' },
        { text: 'The dark-squared bishops', why: 'The dark-squared bishops stay. It is White\'s b5-bishop and Black\'s c8-bishop that leave.' },
        { text: 'The queens', why: 'The queens stay on. Black\'s queen takes back on d7.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 5.O-O Nf6 6.Re1 Nc6 7.c3 e6 8.d4 cxd4 9.cxd4 d5 10.e5 Ne4, what kind of structure do we have?',
      moves: CASTLE,
      orientation: 'black',
      choices: [
        { text: 'Pawn chains d4–e5 against d5–e6, as in the French Defense', correct: true, why: 'Right. White has space in the center and on the kingside; Black plays on the queenside and the c-file.' },
        { text: 'A Maróczy Bind with pawns on c4 and e4', why: 'That is the 5.c4 plan. Here White played c3 and d4 instead.' },
        { text: 'An isolated d-pawn for White', why: 'White has pawns on d4 and e5, on neighboring files, so the d-pawn is not isolated.' }
      ]
    }
  ],
  key: { name: 'Moscow: 5.c4, a Maróczy clamp', moves: `${TRADE} c4`, orientation: 'black' },
  terms: [
    { term: 'Moscow Variation', meaning: '1.e4 c5 2.Nf3 d6 3.Bb5+. Also called the Canal–Sokolsky Attack.' },
    { term: 'Maróczy Bind', meaning: 'White pawns on c4 and e4 that clamp the d5 square, so Black finds it hard to play ...d5.' },
    { term: 'Pawn chain', meaning: 'Pawns of one color on a diagonal, each guarding the one in front, like d4 and e5.' }
  ]
})
