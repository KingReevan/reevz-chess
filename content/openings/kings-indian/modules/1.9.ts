import { defineModule } from '../../../types'
import { KID, CLASSICAL, SAMISCH, AVERBAKH } from '../lines'

/** four-pawns-5f4 and four-pawns-6c5 */
const FOUR_PAWNS_C5 = `${KID} f4 O-O Nf3 c5`

export default defineModule({
  id: '1.9',
  title: "Map of White's systems",
  minutes: 10,
  level: 1,
  goals: [
    "Recognize White's main systems by White's 5th and 6th moves",
    "Know each system's main idea in one sentence",
    'Know which chapter of the course teaches each system'
  ],
  intro:
    "After 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6, White has many good moves. Each one starts a system: a set-up with its own plan, which needs a slightly different answer from Black. This module is your map. It shows what each system looks like, what White wants, and where the course teaches it.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The calm road: the Classical',
      intro: 'All three walkthroughs start from the same position. Watch which pieces White moves.',
      moves: CLASSICAL,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'The crossroads',
          text: "After 4...d6, White's next one or two moves decide which system the game becomes.",
          marks: ['c4', 'd4', 'e4']
        },
        9: {
          title: 'Natural development',
          text: '5.Nf3. The most natural move: the knight develops and guards d4.',
          arrows: [['f3', 'd4', 'green']]
        },
        10: {
          title: 'Black castles',
          text: "5...O-O. Black's set-up is the same against every system.",
          marks: ['g8']
        },
        11: {
          title: 'The Classical',
          text: '6.Be2. This is the Classical Variation (also called the Orthodox). It is the main battleground at every level, and Chapter 2 starts here.',
          arrows: [['e1', 'g1', 'blue']]
        },
        12: {
          title: "White's next choice",
          text: '6...e5. Now White chooses again: 7.O-O is the main line (Chapters 2 to 4), 7.dxe5 is the Exchange (Module 2.3), and 7.d5 and 7.Be3 are the Petrosian and Gligorić systems (Chapter 5).',
          arrows: [['e5', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The attacking road: the Sämisch',
      intro: 'Same position. This time White uses the f-pawn.',
      moves: SAMISCH,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'The crossroads again',
          text: 'The same position after 4...d6. Watch the f-pawn.',
          marks: ['f2']
        },
        9: {
          title: 'The Sämisch',
          text: "5.f3. The f-pawn guards e4 for good, so Black's ...Nxe4 tricks disappear. The price: the knight can't go to f3, and the dark squares near White's king get weaker.",
          arrows: [['f3', 'e4', 'green']]
        },
        10: {
          title: 'Same set-up',
          text: '5...O-O. Black castles as usual.',
          marks: ['g8']
        },
        11: {
          title: "White's attacking plan",
          text: '6.Be3. White plans Qd2, often castling queenside, Bh6 to trade the g7-bishop, and a pawn storm with g4 and h4. Chapter 6 teaches the Sämisch.',
          arrows: [['e3', 'h6', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The bishop road: the Averbakh',
      intro: 'Same position once more. This time the bishop comes out before the g1-knight.',
      moves: AVERBAKH,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'One more road',
          text: 'The same position after 4...d6. Watch the f1-bishop and the c1-bishop.',
          marks: ['f1', 'c1']
        },
        9: {
          title: 'A flexible move',
          text: '5.Be2. If White follows with Nf3, it is the Classical again (Module 1.8).',
          arrows: [['g1', 'f3', 'blue']]
        },
        10: {
          title: 'Black castles',
          text: '5...O-O. Still the same set-up.',
          marks: ['g8']
        },
        11: {
          title: 'The Averbakh',
          text: '6.Bg5. The bishop makes an early ...e5 risky, so Black usually answers with ...c5 or ...h6. Modules 7.8 and 7.9 teach the Averbakh.',
          arrows: [['g5', 'f6', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The rest of the map',
      body:
        "**5.f4: the Four Pawns Attack.** White builds the biggest possible center, with pawns on c4, d4, e4 and f4. Black strikes at once with ...c5 (Chapter 7, from Module 7.1).\n\n**g3: the Fianchetto Variation.** White puts a bishop on g2 too, usually with Nf3 and without an early e4. The game is calmer, and Black plays in the center or on the queenside (Chapter 8, from Module 8.1).\n\n**5.h3: the Makogonov.** h3 stops ...Ng4 and ...Bg4 and prepares Be3 and g4. It is popular among strong players (Module 8.6).\n\n**Other 5th moves.** 5.Bd3, 5.Nge2 and 5.g3 (Module 8.7), and 5.Bg5 (Module 8.8).\n\n**Quiet set-ups.** e3 instead of e4, or the London System with Bf4 and no c4 (Modules 1.8 and 8.9)."
    },
    {
      kind: 'tip',
      title: 'How to tell them apart',
      body:
        "Look at White's f-pawn and bishops. **f3** means the Sämisch. **f4** means the Four Pawns. **g3 and Bg2** mean the Fianchetto. **Nf3 and Be2** mean the Classical. **Be2 and Bg5** mean the Averbakh. **h3** means the Makogonov.\n\nThe Classical is the main battleground at every level, and the Fianchetto is common too. The Sämisch and the Four Pawns are rare among masters, but you'll meet them more often in club games."
    }
  ],
  takeaway:
    "White's 5th and 6th moves choose the system: 5.Nf3 and 6.Be2 the Classical, 5.f3 the Sämisch, 5.f4 the Four Pawns, Be2 with Bg5 the Averbakh, g3 the Fianchetto, 5.h3 the Makogonov. Black's set-up stays the same; the plan adapts.",
  lookAhead:
    'Chapter 2 starts with the most common system of all: 5.Nf3 and 6.Be2, the Classical.',
  drills: [
    {
      title: 'Play the Averbakh',
      prompt: "You're White. Choose the Averbakh: develop the f1-bishop to e2, and after 5...O-O put the other bishop on g5.",
      moves: AVERBAKH,
      start: 8,
      side: 'white',
      hints: ['The bishop from f1 goes one square diagonally.', '5.Be2, then 6.Bg5.'],
      success: '5.Be2 O-O 6.Bg5: the Averbakh. Black now has to be careful with ...e5 (Module 7.8).'
    },
    {
      title: 'Answer the Four Pawns',
      prompt: "You're Black. White plays 5.f4, the Four Pawns Attack. Castle, and after 6.Nf3 strike at the huge center at once.",
      moves: FOUR_PAWNS_C5,
      start: 8,
      side: 'black',
      hints: ['King first. Then hit d4 from the queenside.', '5...O-O, then 6...c5.'],
      success: '5...O-O and 6...c5: Black hits the big center before White finishes developing. Chapter 7 continues from here.'
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'White has just played 5.f3. Which system is this?',
      moves: `${KID} f3`,
      orientation: 'white',
      choices: [
        { text: 'The Sämisch', correct: true, why: 'Right. The f3-pawn guards e4, and White usually plans Be3, Qd2 and an attack.' },
        { text: 'The Four Pawns Attack', why: 'The Four Pawns has the f-pawn on f4, two squares forward. Here it went to f3.' },
        { text: 'The Fianchetto Variation', why: 'In the Fianchetto White plays g3 and Bg2. Here White moved the f-pawn.' }
      ]
    },
    {
      type: 'name',
      prompt: 'Which system is this?',
      moves: AVERBAKH,
      orientation: 'white',
      choices: [
        { text: 'The Averbakh', correct: true, why: 'Yes. Be2 and Bg5, with the g1-knight still at home.' },
        { text: 'The Classical', why: 'The Classical has a knight on f3 and a bishop on e2. Here the knight is still on g1 and the other bishop is on g5.' },
        { text: 'The Sämisch', why: 'The Sämisch is 5.f3. Here White has not moved the f-pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'You want to learn how to meet 5.f4. Which chapter should you study?',
      choices: [
        { text: 'Chapter 7: Four Pawns Attack and Averbakh', correct: true, why: 'Right. Chapter 7 starts with 5.f4 and Black\'s ...c5 answer.' },
        { text: 'Chapter 6: the Sämisch', why: 'Chapter 6 is about 5.f3, with the f-pawn one square forward.' },
        { text: 'Chapter 8: the Fianchetto and other systems', why: 'Chapter 8 covers g3, 5.h3 and other quieter set-ups, not 5.f4.' }
      ]
    },
    {
      type: 'plan',
      prompt: "What is White's typical plan in the Sämisch?",
      moves: SAMISCH,
      orientation: 'white',
      choices: [
        { text: 'Qd2, often castling queenside, Bh6 and a kingside pawn storm', correct: true, why: "Yes. White wants to trade the g7-bishop and open lines toward Black's king." },
        { text: 'Nf3, Be2, O-O and play on the queenside', why: 'That is the Classical plan. In the Sämisch the knight cannot go to f3.' },
        { text: 'g3, Bg2 and a slow game', why: 'That is the Fianchetto Variation. The Sämisch is a sharp attacking system.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'White has just played 5.h3. Which system is this?',
      moves: `${KID} h3`,
      orientation: 'white',
      choices: [
        { text: 'The Makogonov', correct: true, why: 'Right. h3 stops ...Ng4 and ...Bg4 and prepares Be3 and g4 (Module 8.6).' },
        { text: 'The Sämisch', why: 'The Sämisch is 5.f3. Here White moved the h-pawn.' },
        { text: 'The Fianchetto Variation', why: 'The Fianchetto has g3 and Bg2. h3 is a different idea.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 5.Nf3 O-O 6.Be2 e5, which White 7th move is the main line?',
      moves: CLASSICAL,
      orientation: 'white',
      choices: [
        { text: '7.O-O', correct: true, why: 'Yes. White castles and keeps the tension. Chapters 2 to 4 follow this road.' },
        { text: '7.dxe5', why: 'That is the Exchange Variation: queens come off and the game is quiet and level (Module 2.3).' },
        { text: '7.d5', why: 'That is the Petrosian System, which closes the center at once (Module 5.1).' }
      ]
    }
  ],
  key: { name: 'Averbakh Variation: 6.Bg5', moves: AVERBAKH, orientation: 'white' },
  terms: [
    { term: 'System', meaning: 'A set-up with its own plan, such as the Sämisch or the Averbakh.' },
    { term: 'Variation', meaning: 'A named branch of an opening, reached by particular moves.' },
    { term: 'Main line', meaning: 'The most common and most studied branch of an opening.' }
  ]
})
