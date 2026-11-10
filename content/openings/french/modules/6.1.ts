import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** cla-4e5 plus the start of cla-steinitz: 4.e5 Nfd7 5.f4 c5 */
const PUSH = `${CLASSICAL} e5 Nfd7 f4 c5`
/** cla-4bg5-be7: 4.Bg5 Be7 5.e5 Nfd7 */
const PIN = `${CLASSICAL} Bg5 Be7 e5 Nfd7`
/** start of cla-4exd5: 4.exd5 exd5 5.Bg5 Be7 */
const TRADE = `${CLASSICAL} exd5 exd5 Bg5 Be7`

export default defineModule({
  id: '6.1',
  title: "3...Nf6: the Classical and White's choices",
  minutes: 10,
  level: 2,
  goals: [
    'See why 3...Nf6 puts a second attacker on e4',
    "Know White's three answers: push (4.e5), pin (4.Bg5) or trade (4.exd5)",
    "See what each answer does to Black's f6-knight"
  ],
  intro:
    "After 3.Nc3, Black can develop the king's knight with 3...Nf6. This is the Classical Variation. Now e4 is attacked twice and defended once, so White has to act. White has three good ways to do it. This module shows all three, and what each one does to Black's knight.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Push: 4.e5, the Steinitz',
      intro: 'The most direct answer. Watch where the f6-knight ends up, and which pawn Black hits next.',
      moves: PUSH,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The knight defends e4',
          text: '3.Nc3. The knight develops and defends the e4-pawn. Black can now choose 3...Bb4, 3...dxe4 or 3...Nf6.',
          arrows: [['c3', 'e4', 'green']]
        },
        6: {
          title: 'A second attacker',
          text: '3...Nf6. The Classical. The knight develops and attacks e4. Now e4 is attacked twice, by the d5-pawn and the knight, and defended only once.',
          arrows: [['f6', 'e4', 'red'], ['d5', 'e4', 'red']],
          marks: ['e4']
        },
        7: {
          title: 'Push and kick',
          text: '4.e5. White solves the e4 problem by pushing the pawn, and it attacks the knight at the same time. This is the Steinitz Variation, named after the first World Champion, Wilhelm Steinitz.',
          arrows: [['e5', 'f6', 'red']]
        },
        8: {
          title: 'The knight goes to d7',
          text: '4...Nfd7. The usual retreat. From d7 the knight helps the two French breaks: it guards c5 for ...c5, and it already hits the e5-pawn.',
          arrows: [['d7', 'c5', 'green'], ['d7', 'e5', 'red']]
        },
        9: {
          title: 'Support for e5',
          text: '5.f4. White props up the e5-pawn with another pawn. Now a later ...f6 is less effective, because White can take back on e5 with the f-pawn.',
          arrows: [['f4', 'e5', 'green']]
        },
        10: {
          title: 'Hit the base',
          text: "5...c5. Black attacks d4, the base of White's pawn chain, just as in the Advance Variation. Modules 6.2 and 6.3 show how the game goes on.",
          arrows: [['c5', 'd4', 'red']],
          marks: ['d4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Pin: 4.Bg5',
      intro: "The other main line. White doesn't solve the e4 problem at once. Instead it pins one of the attackers.",
      moves: PIN,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'e4 is attacked twice',
          text: '3...Nf6. The same position as before. This time White answers with a bishop move.',
          arrows: [['f6', 'e4', 'red'], ['d5', 'e4', 'red']]
        },
        7: {
          title: 'The pin',
          text: '4.Bg5. The bishop pins the f6-knight to the queen on d8. If the knight took on e4, Bxd8 would win Black\'s queen.',
          arrows: [['g5', 'f6', 'red'], ['f6', 'd8', 'yellow']]
        },
        8: {
          title: 'Breaking the pin',
          text: '4...Be7. The bishop steps between the knight and the queen, so the pin is gone. Instead of 4...Be7, Black has two other good choices: 4...Bb4, the McCutcheon (Module 6.7), and 4...dxe4, the Burn (Module 6.8).',
          arrows: [['f8', 'e7', 'green'], ['f8', 'b4', 'blue'], ['d5', 'e4', 'blue']]
        },
        9: {
          title: 'Now the push',
          text: '5.e5. The pawn kicks the knight. Once it leaves f6, the g5-bishop and the e7-bishop face each other.',
          arrows: [['e5', 'f6', 'red'], ['g5', 'e7', 'yellow']]
        },
        10: {
          title: 'The chain again',
          text: '5...Nfd7. The same pawn chain as in the Steinitz, but the bishops are still on g5 and e7. White usually trades them with 6.Bxe7 (Module 6.4) or offers a pawn with 6.h4 (Module 6.5).',
          arrows: [['g5', 'e7', 'blue'], ['h2', 'h4', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Trade: 4.exd5',
      intro: 'The quiet choice. White takes the tension out of the center at once.',
      moves: TRADE,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The same question',
          text: '3...Nf6. e4 is attacked twice. White can also just trade the pawn.',
          arrows: [['e4', 'd5', 'blue']]
        },
        7: {
          title: 'White trades',
          text: '4.exd5. The e4-pawn takes on d5, so it is no longer a target. This is the Delayed Exchange: an Exchange Variation that comes one move later.',
          arrows: [['e4', 'd5', 'red']]
        },
        8: {
          title: 'Take with the pawn',
          text: '4...exd5. Now the pawns are symmetrical and the e-file is open. Black\'s c8-bishop is free: the e6-pawn no longer blocks it. The knight stays on f6, where it guards d5.',
          arrows: [['c8', 'g4', 'blue'], ['f6', 'd5', 'green']]
        },
        9: {
          title: 'A pin again',
          text: '5.Bg5. White pins the f6-knight to the queen again. A pinned piece is a poor defender, so Black breaks the pin at once.',
          arrows: [['g5', 'f6', 'red'], ['f6', 'd8', 'yellow']],
          marks: ['d5']
        },
        10: {
          title: 'Break the pin',
          text: '5...Be7. The bishop steps in, and the knight guards d5 properly again. The position is level. Module 6.9 shows what goes wrong if Black puts the bishop on d6 instead.',
          arrows: [['f8', 'e7', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Three moves, three jobs for the knight',
      body:
        "**4.e5 (push).** The knight is kicked to d7. From there it supports ...c5 and ...f6, the two French breaks. But f6 is now empty, so Black's kingside has one defender fewer. This is a theme in the whole chapter.\n\n**4.Bg5 (pin).** The knight stays on f6 for now, but it is pinned and can't safely take on e4. Black breaks the pin with ...Be7, or counter-pins with ...Bb4, or takes on e4 first.\n\n**4.exd5 (trade).** The knight keeps its good square on f6. The game becomes open and symmetrical, and the position is level.\n\nThe engine gives White a small edge after 4.e5 and 4.Bg5. After 4.exd5 the position is level."
    },
    {
      kind: 'tip',
      title: 'For White: which one to pick?',
      body:
        "4.e5 is now about as popular as 4.Bg5, and it leads to clear plans: f4, Nf3, Be3 and often long castling. 4.Bg5 leads to more theory, because Black has three good answers (...Be7, ...Bb4, ...dxe4). 4.exd5 is fine if you want a calm game, but it gives Black an easy life."
    }
  ],
  takeaway:
    '3...Nf6 attacks e4 a second time. White pushes with 4.e5 (the knight goes to d7), pins with 4.Bg5 (Black breaks the pin with ...Be7) or trades with 4.exd5 (a level, symmetrical game).',
  lookAhead:
    'Module 6.2 starts with the push: the Steinitz with 5.f4 c5 6.Nf3 Nc6 7.Be3, where Black hits d4 and White prepares long castling.',
  drills: [
    {
      title: 'Answer the push',
      prompt: "You're Black. White plays 3.Nc3. Develop your king's knight with a second attack on e4. When White pushes, retreat the knight and hit the base of the chain.",
      moves: PUSH,
      start: 4,
      side: 'black',
      hints: ['The knight goes to the square where it attacks e4.', "After 4.e5, the knight goes back to d7. After 5.f4, attack d4 with a pawn."],
      success: '3...Nf6, 4...Nfd7 and 5...c5. Black attacks the base of the chain, the d4-pawn.'
    },
    {
      title: 'The pin, then the push',
      prompt: "You're White. Black has played 3...Nf6. Pin the knight to the queen. When Black breaks the pin, kick the knight.",
      moves: `${CLASSICAL} Bg5 Be7 e5`,
      start: 6,
      side: 'white',
      hints: ['Which bishop can pin the f6-knight to the d8-queen?', 'After 4...Be7, push the e-pawn.'],
      success: '4.Bg5 Be7 5.e5. The knight must leave f6, and the bishops on g5 and e7 face each other.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 3...Nf6, how many times is the e4-pawn attacked and defended?',
      moves: CLASSICAL,
      orientation: 'white',
      choices: [
        { text: 'Attacked twice, defended once', correct: true, why: 'Right. The d5-pawn and the f6-knight attack it, and only the c3-knight defends it. White must push, pin or trade.' },
        { text: 'Attacked once, defended once', why: 'Count again: the d5-pawn and the f6-knight both attack e4.' },
        { text: 'Attacked twice, defended twice', why: "Only the c3-knight defends e4. White's queen on d1 does not reach it." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 4.Bg5, why can\'t Black simply take 4...Nxe4?',
      moves: `${CLASSICAL} Bg5`,
      orientation: 'black',
      choices: [
        { text: 'The knight is pinned: Bxd8 would win the queen', correct: true, why: 'Right. The knight shields the d8-queen from the g5-bishop. If it moves, the queen is lost.' },
        { text: 'The e4-pawn is defended twice', why: 'Only the c3-knight defends e4. The problem is the pin on the knight.' },
        { text: 'Moving the knight is illegal', why: 'It is legal, because the knight is pinned to the queen, not to the king. It just loses the queen.' }
      ]
    },
    {
      type: 'name',
      prompt: 'What is 3.Nc3 Nf6 4.e5 called?',
      moves: `${CLASSICAL} e5`,
      orientation: 'black',
      choices: [
        { text: 'The Steinitz Variation', correct: true, why: 'Yes. It is named after Wilhelm Steinitz, the first World Champion.' },
        { text: 'The Advance Variation', why: 'The Advance is 3.e5. Here the push comes one move later, after 3.Nc3 Nf6.' },
        { text: 'The Burn Variation', why: 'The Burn is 4.Bg5 dxe4. Here White pushes with 4.e5.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has kicked the knight with 5.e5. Where should it go?',
      moves: `${CLASSICAL} Bg5 Be7 e5`,
      orientation: 'black',
      choices: [
        { text: '5...Nfd7', correct: true, why: 'Right. From d7 the knight supports ...c5 and ...f6 and hits e5.' },
        { text: '5...Nh5', why: 'A blunder: 6.Bxe7 Qxe7 7.Qxh5 wins the knight. The queen reaches h5 along the d1–h5 diagonal.' },
        { text: '5...O-O', why: 'Castling leaves the knight where it is: 6.exf6 takes it, and Black gets only a pawn back. The knight must move first.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Which of White\'s fourth moves gives a symmetrical, level position?',
      moves: CLASSICAL,
      orientation: 'white',
      choices: [
        { text: '4.exd5', correct: true, why: 'Right. After 4...exd5 the pawns are symmetrical, the e-file is open, and the engine calls it level.' },
        { text: '4.e5', why: '4.e5 locks the center and gives White a small edge. The position is far from symmetrical.' },
        { text: '4.Bg5', why: '4.Bg5 pins the knight and keeps the tension. It gives White a small edge.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Steinitz, why does White play 5.f4?',
      moves: `${CLASSICAL} e5 Nfd7 f4`,
      orientation: 'white',
      choices: [
        { text: 'To support the e5-pawn, so a later ...f6 is less effective', correct: true, why: 'Right. If Black hits e5, White can take back with the f-pawn and keep a pawn there.' },
        { text: 'To attack the d7-knight', why: 'The f4-pawn attacks e5 and g5, not d7. It is there to support e5.' },
        { text: "To open the f-file against Black's king at once", why: 'The f-file stays closed for now. f4 supports e5. A later f4–f5 can open lines, but that comes much later.' }
      ]
    }
  ],
  key: { name: 'Classical: 3...Nf6, White to choose', moves: CLASSICAL, orientation: 'black' },
  terms: [
    { term: 'Classical Variation', meaning: '1.e4 e6 2.d4 d5 3.Nc3 Nf6: Black develops the knight and attacks e4 a second time.' },
    { term: 'Steinitz Variation', meaning: '3.Nc3 Nf6 4.e5: White pushes the pawn and kicks the knight to d7.' },
    { term: 'Pin', meaning: 'A piece that cannot move without exposing a more valuable piece behind it. Here the f6-knight shields the queen on d8.' },
    { term: 'Delayed Exchange', meaning: '3.Nc3 Nf6 4.exd5: White trades on d5 one move later than in the Exchange Variation.' }
  ]
})
