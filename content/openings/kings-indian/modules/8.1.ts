import { defineModule } from '../../../types'
import { FIANCHETTO } from '../lines'

/** kid-3g3-order: 3.g3 first, then Nc3 and Nf3 */
const G3_ORDER = 'd4 Nf6 c4 g6 g3 Bg7 Bg2 O-O Nc3 d6 Nf3'

export default defineModule({
  id: '8.1',
  title: 'The Fianchetto Variation: a calmer game',
  minutes: 10,
  level: 2,
  goals: [
    'Recognize the Fianchetto Variation and the moves that lead to it',
    'See why the g2-bishop makes a kingside attack much harder',
    'Know where Black plays instead: in the center and on the queenside'
  ],
  intro:
    "Not every White player pushes the e-pawn to e4. Many put the king's bishop on g2, a fianchetto just like Black's, and castle quickly. This is the Fianchetto Variation, one of White's most popular systems against the King's Indian. How does it change the game, and what should each side aim for?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Building the Fianchetto',
      intro: "Watch White's king's bishop. It goes to g2 instead of e2.",
      moves: FIANCHETTO,
      start: 4,
      orientation: 'white',
      steps: {
        4: {
          title: 'The usual start',
          text: "1.d4 Nf6 2.c4 g6. Black's g-pawn has moved so the bishop can come to g7. Now White chooses a system.",
          arrows: [['f8', 'g7', 'blue']]
        },
        5: {
          title: 'The knight first',
          text: '3.Nf3. White develops the king\'s knight. With 3.Nc3 and 4.e4 we would get the main King\'s Indian. Here White has a quieter plan.',
          arrows: [['f3', 'e5', 'green'], ['f3', 'd4', 'green']]
        },
        6: {
          title: "Black's bishop arrives",
          text: '3...Bg7. The bishop sits on the long dark diagonal, a1–h8. Once the f6-knight moves, it looks straight down at d4 and b2.',
          arrows: [['g7', 'b2', 'yellow']]
        },
        7: {
          title: 'White copies the idea',
          text: '4.g3. White prepares a fianchetto of its own. The bishop will go to g2, on the long light diagonal, h1–a8.',
          arrows: [['f1', 'g2', 'blue']]
        },
        8: {
          title: 'Black castles',
          text: "4...O-O. Black's king is safe behind the g7-bishop, just as in the other systems.",
          marks: ['g8']
        },
        9: {
          title: 'Bishop on g2',
          text: "5.Bg2. Now both sides have a king's bishop on a long diagonal, each in its own corner. White's bishop aims along h1–a8 toward Black's queenside. Once the f3-knight moves, it looks at b7 and a8.",
          arrows: [['g2', 'a8', 'yellow']]
        },
        10: {
          title: 'The King\'s Indian move',
          text: "5...d6. The usual move. It keeps White's pawns out of e5 and prepares a central break with ...e5 or ...c5 later.",
          arrows: [['e7', 'e5', 'blue'], ['c7', 'c5', 'blue']]
        },
        11: {
          title: 'Both kings are safe',
          text: "6.O-O. White's king is tucked away next to the g2-bishop. Both sides have a safe king and a sound position. The fight will be about the center.",
          marks: ['g1', 'g2']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why a kingside attack is harder here',
      body:
        "In the main lines of Chapters 2 and 3, the center locks after d4–d5, and Black attacks with ...f5, ...f4, ...g5 and ...g4. That plan works because White has a pawn on e4 for ...f5 to hit, and only pawns stand in front of White's king.\n\nAgainst the Fianchetto, both of those change. **White's bishop on g2 sits right next to the king** and guards the light squares near it: f3, h3 and h1. And White often keeps the e-pawn at home for a long time, so a ...f5 push has no e4-pawn to hit.\n\nSo Black plays somewhere else: in the center with ...e5 or ...c5, or on the queenside with ...a6 and ...b5."
    },
    {
      kind: 'walkthrough',
      title: 'Another road to the same place',
      intro: 'White can also start with 3.g3. Black answers with exactly the same moves.',
      moves: G3_ORDER,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'Same first moves',
          text: "1.d4 Nf6 2.c4 g6. Black's set-up doesn't depend on what White does next.",
          arrows: [['f8', 'g7', 'blue']]
        },
        5: {
          title: 'The fianchetto at once',
          text: "3.g3. White shows the plan straight away: the bishop goes to g2 before White decides what to do with the e-pawn.",
          arrows: [['f1', 'g2', 'blue']]
        },
        6: {
          title: 'Bishop to g7',
          text: '3...Bg7. Black carries on. The bishop guards the king and aims at the center.',
          arrows: [['g7', 'd4', 'yellow']]
        },
        7: {
          title: 'Bishop to g2',
          text: '4.Bg2. The two fianchetto bishops now look at each other\'s queenside.',
          arrows: [['g2', 'b7', 'yellow']]
        },
        8: {
          title: 'Castle first',
          text: '4...O-O. As always in the King\'s Indian, Black castles before the fight starts.',
          marks: ['g8']
        },
        9: {
          title: 'The queen\'s knight',
          text: '5.Nc3. White develops and adds control of d5 and e4.',
          arrows: [['c3', 'd5', 'green'], ['c3', 'e4', 'green']]
        },
        10: {
          title: 'Black is ready',
          text: '5...d6. Black has the full King\'s Indian set-up: knight on f6, bishop on g7, king castled, pawn on d6.',
          marks: ['d6', 'g7']
        },
        11: {
          title: 'Black chooses a plan',
          text: "6.Nf3. White will castle next, and we have the Fianchetto Variation again. Black now picks a plan: ...Nc6 (Module 8.2), ...Nbd7 with ...e5 (Module 8.3), or ...c5 (Module 8.4).",
          arrows: [['b8', 'c6', 'blue'], ['b8', 'd7', 'blue'], ['c7', 'c5', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: "What White is playing for",
      body:
        "The Fianchetto is a solid system, not an attacking one. White wants a safe king, smooth development and a small edge in the center that lasts. As White, don't hurry: finish developing, keep the d4-pawn well guarded, and choose the moment for e2–e4 or d4–d5."
    }
  ],
  takeaway:
    "In the Fianchetto Variation White's bishop on g2 guards the king, so Black's usual kingside storm is much harder. Black builds the same set-up, then plays in the center or on the queenside.",
  lookAhead:
    'Module 8.2 shows the Panno: ...Nc6, ...a6 and ...Rb8, with a trap on c4 that White must avoid.',
  drills: [
    {
      title: 'Build the Fianchetto as White',
      prompt: "You're White. Play the Fianchetto set-up from this module: d4 and c4, then the king's knight to f3, the fianchetto, and castle.",
      moves: FIANCHETTO,
      start: 0,
      side: 'white',
      hints: ['After 1.d4 Nf6 2.c4 g6, develop the king\'s knight to f3.', 'Then g3, Bg2 and O-O.'],
      success: 'That is the Fianchetto Variation: 3.Nf3, 4.g3, 5.Bg2 and 6.O-O. A safe king and a solid center.'
    },
    {
      title: 'Same set-up as Black',
      prompt: "You're Black. White plays 3.g3 and fianchettoes early. Build your King's Indian set-up anyway.",
      moves: 'd4 Nf6 c4 g6 g3 Bg7 Bg2 O-O Nc3 d6',
      start: 0,
      side: 'black',
      hints: ['Knight to f6, pawn to g6, bishop to g7.', 'Castle, then put a pawn on d6.'],
      success: '...Nf6, ...g6, ...Bg7, ...O-O and ...d6. The same five moves work against almost anything White plays.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why is the usual ...f5, ...f4, ...g5 kingside attack much harder against the Fianchetto Variation?',
      choices: [
        {
          text: "The g2-bishop guards the squares around White's king, and there is often no e4-pawn for ...f5 to hit",
          correct: true,
          why: 'Right. The bishop is a strong defender next to the king, and without a pawn on e4 the ...f5 lever has no target.'
        },
        { text: "Black's g7-bishop is always traded early", why: 'Nothing forces that trade. Both sides usually keep their fianchetto bishops.' },
        { text: "White's king stays in the center", why: 'White castles early in this system, usually on move 6.' }
      ]
    },
    {
      type: 'name',
      prompt: 'White has put the king\'s bishop on g2 instead of playing e2–e4. What is this system called?',
      moves: G3_ORDER,
      orientation: 'black',
      choices: [
        { text: 'The Fianchetto Variation', correct: true, why: 'Yes. White fianchettoes the king\'s bishop on g2, like Black does on g7.' },
        { text: 'The Classical Variation', why: 'The Classical has pawns on c4, d4 and e4, with the bishop on e2.' },
        { text: 'The Sämisch', why: 'The Sämisch is 5.f3, with pawns on c4, d4 and e4.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Fianchetto Variation, where does Black usually look for play?',
      choices: [
        {
          text: 'In the center with ...e5 or ...c5, or on the queenside with ...a6 and ...b5',
          correct: true,
          why: 'Exactly. Those are the plans in the next three modules.'
        },
        {
          text: 'A fast ...f5, ...f4 and ...g5 storm, as in the Mar del Plata',
          why: "That storm needs a locked center and a pawn on e4 to hit. Here the g2-bishop defends and the plan is much weaker."
        },
        { text: 'Nowhere: Black should wait and trade pieces', why: 'Black has a full game here. Waiting gives White time to build a lasting edge.' }
      ]
    },
    {
      type: 'concept',
      prompt: "Once the f3-knight moves away, what does White's g2-bishop aim at?",
      choices: [
        { text: "Black's queenside, toward b7 and a8", correct: true, why: 'Yes. The long diagonal h1–a8 runs right through the center to Black\'s queenside.' },
        { text: "Black's king on g8", why: 'The bishop is on light squares running toward a8. It does not point at g8.' },
        { text: 'The e5 square only', why: 'The g2-bishop can never reach e5, a dark square. Its diagonal h1–a8 runs through e4, d5 and c6 to b7 and a8.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'Which move order leads to the Fianchetto Variation?',
      choices: [
        { text: '1.d4 Nf6 2.c4 g6 3.Nf3 Bg7 4.g3', correct: true, why: 'Right. g3 and Bg2 instead of e4 is the Fianchetto Variation.' },
        { text: '1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3', why: 'That is the road to the Classical, with e4 and usually Be2.' },
        { text: '1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3', why: 'That is the Sämisch, where f3 guards the e4-pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is White mainly playing for in the Fianchetto Variation?',
      choices: [
        { text: 'A safe king and a small edge in the center that lasts', correct: true, why: 'Yes. It is a solid system. White aims for a slightly better position, not a quick attack.' },
        { text: "A fast pawn storm against Black's king", why: "That is the Sämisch idea. In the Fianchetto, White's king sits behind the g2-bishop and White rarely storms." },
        { text: 'To win material early with a trap', why: 'There is no forced win of material. White is aiming for a calm, healthy position.' }
      ]
    }
  ],
  key: { name: 'Fianchetto Variation: 6.O-O', moves: FIANCHETTO, orientation: 'black' },
  terms: [
    { term: 'Fianchetto', meaning: 'Moving the knight\'s pawn one square (g3 or g6, b3 or b6) and putting the bishop behind it on the long diagonal.' },
    { term: 'Long diagonal', meaning: 'One of the two longest diagonals on the board, a1–h8 and h1–a8.' },
    { term: 'Pawn storm', meaning: 'Pushing several pawns forward together toward the enemy king.' }
  ]
})
