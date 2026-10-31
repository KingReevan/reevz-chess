import { defineModule } from '../../../types'
import { RUY, CLOSED } from '../../../lines'

export default defineModule({
  id: '1.3',
  title: 'Meet the Ruy Lopez',
  minutes: 10,
  level: 1,
  goals: [
    'Play the five moves of the Ruy Lopez and know what each one does',
    'Know where the name comes from',
    'Get a first look at the main line this course builds toward'
  ],
  intro:
    'The Ruy Lopez is more than 450 years old, and world champions still play it today. Why has such an old opening lasted so long? This module walks through its five moves, tells you where the name comes from, and gives you a first tour of the road ahead.',
  sections: [
    {
      kind: 'walkthrough',
      title: 'The five moves',
      intro: 'Each move answers the one before it. Look for the chain: attack, defend, attack the defender.',
      moves: RUY,
      start: 0,
      orientation: 'white',
      steps: {
        0: {
          title: 'The starting position',
          text: 'The Ruy Lopez begins with the most common first moves in chess. Both sides fight for the center from move one.'
        },
        1: {
          title: 'White takes the center',
          text: '1.e4. The pawn claims a central square and opens lines for the queen and the f1-bishop.',
          arrows: [['e4', 'd5', 'yellow'], ['e4', 'f5', 'yellow']]
        },
        2: {
          title: 'Black matches it',
          text: '1...e5. Black claims a central square too. Keep an eye on this pawn: the whole Ruy Lopez is about pressure on e5.',
          marks: ['e5']
        },
        3: {
          title: 'Attack the pawn',
          text: '2.Nf3. White develops a knight and attacks e5 right away.',
          arrows: [['f3', 'e5', 'red']]
        },
        4: {
          title: 'Defend the pawn',
          text: '2...Nc6. Black develops a knight that guards e5. Now e5 is safe.',
          arrows: [['c6', 'e5', 'green']]
        },
        5: {
          title: 'Attack the defender',
          text: '3.Bb5. The bishop attacks the knight that guards e5. That is the Ruy Lopez: instead of hitting e5 again, White goes after its defender.',
          arrows: [['b5', 'c6', 'yellow'], ['c6', 'e5', 'green'], ['f3', 'e5', 'red']]
        }
      }
    },
    {
      kind: 'history',
      title: 'A priest, a book and a name',
      body:
        'The opening is named after Ruy López de Segura, a Spanish priest who analysed it in his chess book of 1561. That is why it is also called the **Spanish Game**, or simply "the Spanish". It has been played ever since, from the great masters of the 1800s to today\'s world championship matches.'
    },
    {
      kind: 'walkthrough',
      title: 'A first tour of the main line',
      intro: "Don't try to memorise this yet. Each move gets its own module in Chapter 2. Just notice the shape of White's plan.",
      moves: CLOSED,
      start: 5,
      orientation: 'white',
      steps: {
        5: {
          title: 'The Ruy Lopez position',
          text: 'Black now chooses a defense. The most popular one starts with a pawn move.',
          arrows: [['b5', 'c6', 'yellow']]
        },
        6: {
          title: 'The Morphy Defense',
          text: '3...a6. Black asks the bishop to decide right away: take the knight or step back. This move is named after the American star Paul Morphy.',
          arrows: [['a6', 'b5', 'red']]
        },
        7: {
          title: 'The bishop stays on the diagonal',
          text: '4.Ba4. White keeps the bishop and keeps it aimed at c6.',
          arrows: [['a4', 'c6', 'yellow']]
        },
        8: {
          title: 'Black develops with a threat',
          text: '4...Nf6. A second knight comes out and attacks e4.',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'King first',
          text: "5.O-O. White castles instead of defending e4. You'll learn why that's fine in Chapter 2.",
          marks: ['e4']
        },
        10: {
          title: 'The Closed Ruy Lopez',
          text: "5...Be7. Black develops and gets ready to castle. This is the start of the Closed Ruy Lopez, the opening's main road.",
          arrows: [['e8', 'g8', 'blue']]
        },
        11: {
          title: 'The rook guards e4',
          text: '6.Re1. Now the e4-pawn is defended by the rook.',
          arrows: [['e1', 'e4', 'green']]
        },
        12: {
          title: 'Chasing the bishop',
          text: '6...b5. Black pushes the bishop off the a4–e8 diagonal and gains space on the queenside.',
          arrows: [['b5', 'a4', 'red']]
        },
        13: {
          title: 'A new diagonal',
          text: "7.Bb3. The bishop retreats but now aims at f7, next to Black's king.",
          arrows: [['b3', 'f7', 'yellow']]
        },
        14: {
          title: 'Holding e5',
          text: '7...d6. Black supports e5 with a pawn and opens a path for the c8-bishop.',
          arrows: [['d6', 'e5', 'green']]
        },
        15: {
          title: 'Preparing d4',
          text: '8.c3. White gets ready to play d4 and build a big center. It also gives the bishop a retreat square on c2.',
          arrows: [['d2', 'd4', 'blue'], ['b3', 'c2', 'blue']]
        },
        16: {
          title: 'Black castles',
          text: '8...O-O. Both kings are safe. Now the real middlegame plans begin.',
          marks: ['g8']
        },
        17: {
          title: 'A small but useful move',
          text: '9.h3. It stops ...Bg4, which would pin the f3-knight to the queen. With that settled, White can play d4. This is the starting point of Chapter 4.',
          marks: ['g4']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why it is still played',
      body:
        "**Natural moves.** Every White move develops a piece, guards the center or gets the king safe. There are no tricks to learn before it makes sense.\n\n**Pressure that lasts.** The bishop on b5, then a4 or b3, keeps bothering Black for many moves. Black always has to think about e5 and f7.\n\n**Room for both sides.** White can play slowly or sharply, and Black has many good defenses. At the top it has been used on both sides of the board: Fischer won game 10 of his 1972 world championship match against Spassky with it as White, and in 2000 Kramnik drew game after game with its Berlin Defense against Kasparov."
    }
  ],
  takeaway:
    'The Ruy Lopez is 1.e4 e5 2.Nf3 Nc6 3.Bb5: White attacks the knight that defends e5. It is named after Ruy López de Segura, and it is also called the Spanish Game.',
  lookAhead:
    "Next: what exactly is the bishop on b5 doing? Is Black's e5-pawn really in danger?",
  drills: [
    {
      title: 'The main road as White',
      prompt: "You're White. Play the first five moves of the main line: 1.e4, 2.Nf3, 3.Bb5, 4.Ba4 and 5.O-O.",
      moves: 'e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O',
      start: 0,
      side: 'white',
      hints: ['Center pawn, knight that attacks e5, then the bishop that attacks the c6-knight.', 'When the bishop is attacked, keep it on the same diagonal. Then castle.'],
      success: "That's the main road of the Ruy Lopez, and you played it without help."
    },
    {
      title: 'Finish the tour',
      prompt: "You're White. Black has just played 5...Be7. Play the next four White moves from the tour: guard e4, save the bishop, prepare d4, stop ...Bg4.",
      moves: CLOSED,
      start: 10,
      side: 'white',
      hints: ['The rook goes to e1. When ...b5 hits the bishop, it goes to b3.', 'Then c3, and after Black castles, h3.'],
      success: '6.Re1, 7.Bb3, 8.c3 and 9.h3. You reached the main position of the Closed Ruy Lopez.'
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'What is this opening called?',
      moves: RUY,
      orientation: 'white',
      choices: [
        { text: 'The Ruy Lopez', correct: true, why: 'Right. 3.Bb5 after 1.e4 e5 2.Nf3 Nc6 is the Ruy Lopez, or Spanish Game.' },
        { text: 'The Italian Game', why: 'The Italian Game puts the bishop on c4, not b5.' },
        { text: 'The Four Knights Game', why: 'In the Four Knights, both sides bring out both knights first (2...Nc6 3.Nc3 Nf6).' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Who is the Ruy Lopez named after?',
      choices: [
        { text: 'Ruy López de Segura, a Spanish priest who wrote about it in 1561', correct: true, why: 'Yes. His book made the opening famous, which is why it is also called the Spanish Game.' },
        { text: 'Paul Morphy, the American star of the 1850s', why: 'Morphy gave his name to 3...a6, the Morphy Defense, not to the whole opening.' },
        { text: 'A Spanish king who loved chess', why: 'It was a priest, Ruy López de Segura, who analysed it in his 1561 book.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is the Ruy Lopez still popular at the top level?',
      choices: [
        { text: "White develops naturally and keeps pressure on Black's center for a long time", correct: true, why: 'Right. The pressure is slow and lasting, which makes it hard for Black to get a free game.' },
        { text: 'It wins the e5-pawn by force', why: "It doesn't. You'll see in Chapter 2 that 4.Bxc6 and 5.Nxe5 usually fails to ...Qd4." },
        { text: 'It leads to a quick mate on f7', why: "That's the idea of early queen attacks, not the Ruy Lopez. The Ruy is a slow, positional opening." }
      ]
    },
    {
      type: 'order',
      prompt: 'Which move order reaches the Ruy Lopez?',
      choices: [
        { text: '1.e4 e5 2.Nf3 Nc6 3.Bb5', correct: true, why: 'Yes. Knight attacks e5, knight defends, bishop attacks the defender.' },
        { text: '1.e4 e5 2.Nf3 Nc6 3.Bc4', why: 'That is the Italian Game. The bishop aims at f7, not at the c6-knight.' },
        { text: '1.e4 e5 2.Nc3 Nc6 3.Bb5', why: "Without Nf3 nothing attacks e5, so the bishop on b5 doesn't pressure anything. The Ruy needs 2.Nf3." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'What is another common name for the Ruy Lopez?',
      choices: [
        { text: 'The Spanish Game', correct: true, why: 'Right. It comes from Ruy López, the Spanish priest who wrote about it.' },
        { text: 'The Italian Game', why: 'The Italian Game is a different opening: 3.Bc4 instead of 3.Bb5.' },
        { text: 'The French Defense', why: 'The French Defense is 1.e4 e6, a different opening altogether.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'White to move. Why does White play 9.h3 here?',
      moves: `${CLOSED.split(' ').slice(0, -1).join(' ')}`,
      orientation: 'white',
      choices: [
        { text: 'To stop ...Bg4, which would pin the f3-knight', correct: true, why: 'Yes. The f3-knight will help hold d4, so White keeps the bishop off g4 first.' },
        { text: 'To start a pawn storm with g4 and g5', why: "h3 is a small safety move, not the start of an attack. White's plan is d4 in the center." },
        { text: 'To prepare castling', why: 'White castled on move 5. h3 is about keeping the c8-bishop out of g4.' }
      ]
    }
  ],
  key: { name: 'Ruy Lopez (Spanish Game): 3.Bb5', moves: RUY, orientation: 'white' },
  terms: [
    { term: 'Spanish Game', meaning: 'Another name for the Ruy Lopez, after the Spanish priest Ruy López de Segura.' },
    { term: 'Variation', meaning: 'A named branch of an opening, starting from one particular move choice.' },
    { term: 'Main line', meaning: 'The most common and most studied path through an opening.' }
  ]
})
