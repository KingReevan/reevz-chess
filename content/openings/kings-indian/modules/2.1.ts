import { defineModule } from '../../../types'
import { CLASSICAL, KID } from '../lines'

/** kid-5be2-order: 5.Be2 O-O 6.Nf3 e5 reaches the same position */
const BE2_FIRST = `${KID} Be2 O-O Nf3 e5`

export default defineModule({
  id: '2.1',
  title: '5.Nf3 and 6.Be2: White develops calmly',
  minutes: 10,
  level: 2,
  goals: [
    'Know what 5.Nf3, 6.Be2 and 6...e5 each do',
    'See why e2 is a modest but useful square for the bishop',
    'Recognize the Classical position and its two move orders'
  ],
  intro:
    "After 4...d6, White can choose from many systems. The most common one is also the simplest: develop the pieces, castle, and keep the big center. This module shows what each of White's moves does, and why Black answers with 6...e5.",
  sections: [
    {
      kind: 'walkthrough',
      title: "White's calm development",
      intro: "Watch what each White move does. None of them attack anything yet. They get ready.",
      moves: CLASSICAL,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'The King\'s Indian set-up',
          text: "4...d6. Black has put the bishop on g7 and let White take the center with c4, d4 and e4. White's job now is to develop and keep that center safe.",
          marks: ['c4', 'd4', 'e4']
        },
        9: {
          title: 'The knight develops',
          text: '5.Nf3. The knight comes out toward the center. It adds a defender to d4, keeps an eye on e5 and g5, and clears g1, the first step toward castling.',
          arrows: [['f3', 'd4', 'green'], ['f3', 'e5', 'yellow']]
        },
        10: {
          title: 'Black castles first',
          text: '5...O-O. Black gets the king safe before starting any fight in the center, just as Module 1.4 explained.',
          marks: ['g8']
        },
        11: {
          title: 'A modest bishop',
          text: "6.Be2. The bishop clears f1, so White can castle next. On e2 it doesn't block the queen's guard of d4, as it would on d3. It also stands between the f3-knight and the queen, so a later ...Bg4 can't pin the knight to the queen.",
          arrows: [['e1', 'g1', 'blue'], ['d1', 'd4', 'green']]
        },
        12: {
          title: 'Black strikes at d4',
          text: '6...e5. Break one from Module 1.6. This is the Classical Variation (also called the Orthodox). The e5-pawn is attacked twice, by d4 and the f3-knight, and defended once, by d6. Module 2.2 asks whether it is hanging.',
          arrows: [['e5', 'd4', 'red'], ['f3', 'e5', 'red'], ['d6', 'e5', 'green']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Same position, other road',
      intro: 'Many White players develop the bishop before the knight. Black should see where the game is going.',
      moves: BE2_FIRST,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The same starting point',
          text: "4...d6. Black's set-up is complete apart from castling. This time White picks a different order.",
          marks: ['d4']
        },
        9: {
          title: 'Bishop first',
          text: '5.Be2. White keeps a choice. The knight can still come to f3, or the bishop on c1 can jump to g5 or e3 first.',
          arrows: [['g1', 'f3', 'blue'], ['c1', 'g5', 'blue']]
        },
        10: {
          title: 'Castle anyway',
          text: '5...O-O. Whatever White does, a safe king is always useful. Black castles and waits to see where the knight goes.',
          marks: ['g8']
        },
        11: {
          title: 'The knight comes out',
          text: '6.Nf3. Now the board looks exactly like the Classical position after 6.Be2. Two different move orders, one position.',
          arrows: [['f3', 'd4', 'green']]
        },
        12: {
          title: 'Now ...e5 is right',
          text: "6...e5. With White's knight on f3, Black strikes at d4 as usual. But if White had played 6.Bg5 instead of 6.Nf3, ...e5 would lose material. That is the Averbakh, and Module 7.8 shows why ...e5 must wait there.",
          arrows: [['e5', 'd4', 'red']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'text',
      title: "White's four answers to 6...e5",
      body:
        "After 6...e5 White must decide what to do about the pawn on e5. There are four main moves, and this course covers each one:\n\n**7.O-O** is the main line among strong players. White castles and keeps the tension (Module 2.6).\n\n**7.dxe5** is the Exchange Variation. The queens come off and the game gets quiet (Module 2.3).\n\n**7.d5** is the Petrosian System. White closes the center at once (Module 5.1).\n\n**7.Be3** is the Gligorić System. White develops the bishop first and keeps every option open (Module 5.3).\n\nClub players and online beginners meet 7.d5 and 7.dxe5 a lot, so both sides should know them well."
    },
    {
      kind: 'history',
      title: 'Classical or Orthodox?',
      body:
        'Most books call 5.Nf3 O-O 6.Be2 e5 the Classical Variation. The lichess opening database calls the same moves the Orthodox Variation. Same position, two names. This course says Classical.'
    }
  ],
  takeaway:
    "In the Classical, White simply develops with Nf3, Be2 and O-O and keeps the big center. Black castles and strikes at d4 with ...e5, which sets up the whole fight.",
  lookAhead:
    'The pawn on e5 is attacked twice and defended once. Module 2.2 shows why White still cannot just take it.',
  drills: [
    {
      title: 'Develop like a Classical player',
      prompt: "You're White. Black has just played 4...d6. Develop the knight, then the bishop, then castle after Black's ...e5.",
      moves: `${CLASSICAL} O-O`,
      start: 8,
      side: 'white',
      hints: ['Knight first. It guards d4 and helps you castle.', 'The bishop goes to a quiet square that clears f1. Then castle.'],
      success: '5.Nf3, 6.Be2 and 7.O-O. Your king is safe and your center is still standing. This is the main line.'
    },
    {
      title: 'Castle, then strike',
      prompt: "You're Black. White develops calmly with 5.Nf3. Get your king safe, then hit White's center.",
      moves: CLASSICAL,
      start: 8,
      side: 'black',
      hints: ['King safety first.', 'Which pawn move attacks d4 from the side?'],
      success: '5...O-O and 6...e5. Your king is safe, and the fight for d4 has begun.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 5.Nf3 do for White?',
      choices: [
        { text: 'It develops a piece, guards d4 and helps White castle', correct: true, why: 'Right. One move does three useful jobs, which is why it is the most natural move.' },
        { text: 'It stops ...e5 for good', why: "The knight watches e5, but it can't stop ...e5. Black plays it anyway, and Module 2.2 shows why it's safe." },
        { text: 'It prepares f2–f4 to grab more space', why: 'The knight on f3 actually blocks the f-pawn. The f2–f4 plan belongs to the Four Pawns Attack (Module 7.1), where White plays 5.f4 instead.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Black has just played 6...e5. How many White units attack e5, and how many Black units defend it?',
      moves: CLASSICAL,
      orientation: 'white',
      choices: [
        { text: 'Two attack (d4 and the f3-knight), one defends (d6)', correct: true, why: 'Correct. On paper e5 looks short of defenders. Module 2.2 shows why White still cannot win it.' },
        { text: 'Two attack, two defend (d6 and the g7-bishop)', why: "The f6-knight stands in the way, so the g7-bishop doesn't guard e5 yet. Remember that: if the knight moves, the bishop wakes up." },
        { text: 'One attacks (the knight), one defends (d6)', why: 'Look at the d4-pawn too. It attacks e5 diagonally, so there are two attackers.' }
      ]
    },
    {
      type: 'name',
      prompt: 'What is this position called?',
      moves: CLASSICAL,
      orientation: 'black',
      choices: [
        { text: 'The Classical Variation', correct: true, why: 'Yes. Nf3, Be2 and ...e5. Some sources call it the Orthodox Variation.' },
        { text: 'The Sämisch Variation', why: 'In the Sämisch White plays 5.f3 to guard e4, and the knight does not go to f3.' },
        { text: 'The Four Pawns Attack', why: 'In the Four Pawns White pushes 5.f4, so there are four White pawns side by side in the center.' },
        { text: 'The Fianchetto Variation', why: 'In the Fianchetto White plays g3 and Bg2, so the king\'s bishop sits on g2, not e2.' }
      ]
    },
    {
      type: 'order',
      prompt: 'White plays 5.Be2 O-O 6.Nf3 e5 instead of 5.Nf3 O-O 6.Be2 e5. What do you get?',
      choices: [
        { text: 'Exactly the same Classical position', correct: true, why: 'Right. The same moves in a different order lead to the same position.' },
        { text: 'The Averbakh Variation', why: 'The Averbakh needs 6.Bg5 after 5.Be2. Once White plays 6.Nf3, it is the Classical.' },
        { text: 'A position where ...e5 loses a pawn', why: "With the knight on f3, ...e5 is Black's normal move. It's only against 6.Bg5 that ...e5 must wait." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 5.Nf3 O-O 6.Be2, why can a later ...Bg4 not pin the f3-knight to the White queen?',
      choices: [
        { text: 'The e2-bishop stands between the knight and the queen', correct: true, why: 'Yes. On the g4–d1 diagonal the bishop on e2 blocks the line, so the queen is not behind the knight.' },
        { text: 'The g2-pawn protects the knight', why: 'It does protect the knight, but protection does not stop a pin. What matters is what stands behind the knight.' },
        { text: 'The bishop on g4 would be trapped', why: 'Nothing traps a bishop on g4 here. The real reason is the e2-bishop blocking the line.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 6...e5, which move is the main line for White among strong players?',
      moves: CLASSICAL,
      orientation: 'white',
      choices: [
        { text: '7.O-O', correct: true, why: 'Yes. White castles and keeps the tension. Module 2.6 continues from here.' },
        { text: '7.dxe5', why: 'That is the Exchange Variation. It is sound but quieter, because the queens come off (Module 2.3).' },
        { text: '7.d5', why: 'That is the Petrosian System. It is popular, especially with club players, but it is not the main line (Module 5.1).' }
      ]
    }
  ],
  key: { name: 'Classical Variation: 6...e5', moves: CLASSICAL, orientation: 'white' },
  terms: [
    { term: 'Classical Variation', meaning: 'The King\'s Indian line 5.Nf3 O-O 6.Be2 e5. Also called the Orthodox Variation.' },
    { term: 'Development', meaning: 'Moving pieces off their starting squares to places where they do useful work.' },
    { term: 'Pin', meaning: 'A piece cannot move off a line without exposing a more valuable piece behind it.' },
    { term: 'Tension', meaning: 'Pawns or pieces that attack each other without either side taking yet.' }
  ]
})
