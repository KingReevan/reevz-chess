import { defineModule } from '../../../types'
import { RUY, EXCHANGE } from '../../../lines'

const B5_BREAK = `${RUY} a6 Ba4 d6 d4 b5 Bb3`

export default defineModule({
  id: '2.1',
  title: '3...a6: asking the bishop a question',
  minutes: 10,
  level: 1,
  goals: [
    'Know the two answers to 3...a6: take on c6 or retreat',
    'See what Black gets if White takes',
    'Learn the hidden bonus of ...a6: a later ...b5 breaks the pin'
  ],
  intro:
    "3...a6 is Black's most popular answer to the Ruy Lopez. It spends a move on a small pawn push. Why is that worth it? This module shows the question it asks, the two ways White can answer, and the useful option it gives Black later.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Answer one: take the knight',
      intro: 'A pawn attacks the bishop, so White has to do something about it right now.',
      moves: EXCHANGE,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The Spanish position',
          text: 'The bishop attacks the knight on c6, the only guard of e5. Black wants to know what White really plans to do with that bishop.',
          arrows: [['b5', 'c6', 'yellow'], ['c6', 'e5', 'green']]
        },
        6: {
          title: 'The Morphy Defense',
          text: "3...a6. The pawn attacks the bishop. Defending it doesn't help, because ...axb5 would still win a bishop for a pawn. So White must take on c6 or step back.",
          arrows: [['a6', 'b5', 'red'], ['b5', 'c6', 'blue'], ['b5', 'a4', 'blue']]
        },
        7: {
          title: 'White takes',
          text: '4.Bxc6. White gives up the bishop for the knight. This is the Exchange Variation (Chapter 3).',
          marks: ['c6']
        },
        8: {
          title: 'What Black gets',
          text: "4...dxc6. Black now has two bishops against White's bishop and knight. The d-file and the c8–g4 diagonal are open for Black's queen and bishop. Is e5 hanging? The next module answers that.",
          arrows: [['d8', 'd4', 'blue'], ['c8', 'g4', 'blue']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why ask the question now?',
      body:
        "If White takes on c6, Black gets the **bishop pair** and open lines straight away. If White retreats, the bishop is still there, but Black now has the pawn on a6 to support **...b5**. That push can chase the bishop or break a pin whenever Black needs it.\n\nThere is a price. The bishop will usually come back to b3 and aim at f7, and the pawns on a6 and b5 can become targets for White's a2–a4 later."
    },
    {
      kind: 'walkthrough',
      title: 'Answer two: retreat, and the ...b5 bonus',
      intro: 'Remember the Old Steinitz pin from Module 1.6? Watch how ...a6 changes it.',
      moves: B5_BREAK,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'White has to choose',
          text: 'The bishop is attacked. Most players keep it with a retreat.',
          arrows: [['b5', 'a4', 'green']]
        },
        7: {
          title: 'The bishop keeps its aim',
          text: "4.Ba4. From a4 the bishop still looks at c6. But Black's a6-pawn now stands ready to support ...b5 at any moment.",
          arrows: [['a4', 'c6', 'yellow'], ['b7', 'b5', 'blue']]
        },
        8: {
          title: 'A pin again',
          text: '4...d6. Black guards e5 with a pawn. The d7-square is empty, so the c6-knight is pinned to the king, just like in the Old Steinitz.',
          arrows: [['a4', 'e8', 'red']],
          marks: ['c6']
        },
        9: {
          title: 'White hits e5',
          text: '5.d4. White attacks e5 twice and hopes the pin will cost Black the center. Against 3...d6 this plan works well. Here it is dubious.',
          arrows: [['d4', 'e5', 'red'], ['f3', 'e5', 'red']],
          ann: '?!'
        },
        10: {
          title: 'Break the pin with a pawn',
          text: "5...b5. The pawn attacks the bishop and is protected by the a6-pawn. This is only possible because Black played ...a6 earlier.",
          arrows: [['b5', 'a4', 'red'], ['a6', 'b5', 'green']],
          ann: '!'
        },
        11: {
          title: 'The knight is free',
          text: '6.Bb3. The bishop leaves the diagonal, so the c6-knight can move again. It can even take on d4. White must be careful now: this is the start of the Noah\'s Ark trap (Module 8.9).',
          arrows: [['c6', 'd4', 'blue']],
          marks: ['c6']
        }
      }
    },
    {
      kind: 'history',
      title: "Morphy's defense",
      body:
        '3...a6 is named after Paul Morphy, the American star of the 1850s. Today it is the most common reply to 3.Bb5, and the main lines of the Ruy Lopez all start with it.'
    }
  ],
  takeaway:
    "3...a6 makes White decide at once: give up the bishop with 4.Bxc6, or retreat with 4.Ba4. After a retreat, Black can use ...b5 later to chase the bishop or break a pin.",
  lookAhead:
    "Next: if White takes on c6, the e5-pawn seems to hang. Does 4.Bxc6 really win a pawn?",
  drills: [
    {
      title: 'Ask, then recapture',
      prompt: "You're Black. Answer 3.Bb5 with the Morphy Defense. If White takes on c6, recapture toward the center.",
      moves: EXCHANGE,
      start: 4,
      side: 'black',
      hints: ['First attack the bishop with your a-pawn.', 'Take back with the d-pawn. It opens lines for your queen and c8-bishop.'],
      success: '3...a6 and 4...dxc6. You have the bishop pair and open lines.'
    },
    {
      title: 'Break the pin',
      prompt: "You're Black. White has played 5.d4, and your c6-knight is pinned. Break the pin with a pawn move.",
      moves: B5_BREAK.split(' ').slice(0, 10).join(' '),
      start: 9,
      side: 'black',
      hints: ['Which pawn can attack the a4-bishop?', 'Your a6-pawn protects the b5-square.'],
      success: '5...b5! The bishop has to leave, and your knight is free again.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black to move. Which move asks the bishop to decide right away?',
      moves: RUY,
      orientation: 'black',
      choices: [
        { text: '3...a6', correct: true, why: 'Right. The pawn attacks the bishop, so White must take on c6 or retreat.' },
        { text: '3...Nf6', why: "That's the Berlin. It attacks e4, but it doesn't put any question to the bishop." },
        { text: '3...d6', why: "It guards e5, but it pins Black's own knight and leaves the bishop in peace." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 3...a6, why can\'t White simply defend the bishop, for example with 4.Nc3?',
      choices: [
        { text: '...axb5 would still win a bishop for a pawn', correct: true, why: 'Yes. The knight could take back on b5, but White would have traded a bishop for a pawn.' },
        { text: '4.Nc3 is an illegal move', why: "It is legal. It just doesn't save the bishop: ...axb5 Nxb5 loses a bishop for a pawn." },
        { text: 'Black would get a passed pawn', why: "The real problem is material. White's bishop is worth far more than the a-pawn." }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does Black get after 3...a6 4.Bxc6 dxc6?',
      choices: [
        { text: 'The two bishops and open lines for the queen and the c8-bishop', correct: true, why: 'Right. That is the reward for the structure Black accepts.' },
        { text: 'An extra pawn', why: 'Material is level: a bishop for a knight. Black does not win a pawn.' },
        { text: 'A safer king', why: "The trade doesn't change king safety much. Black's gains are the bishops and open lines." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. Your c6-knight is pinned. Which pawn move breaks the pin?',
      moves: `${RUY} a6 Ba4 d6 d4`,
      orientation: 'black',
      choices: [
        { text: '5...b5', correct: true, why: 'Yes. The pawn, protected by a6, kicks the bishop off the a4–e8 diagonal.' },
        { text: '5...f6', why: 'It guards e5 again, but the knight stays pinned and Black weakens the king.' },
        { text: '5...h6', why: 'It does nothing about the pin. The bishop still holds the knight in place.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'This defense is named after a famous player. Who?',
      moves: `${RUY} a6`,
      orientation: 'black',
      choices: [
        { text: 'Paul Morphy', correct: true, why: 'Right. 3...a6 is the Morphy Defense.' },
        { text: 'Ruy López', why: 'López gave his name to the whole opening, 3.Bb5. The reply 3...a6 is named after Morphy.' },
        { text: 'Wilhelm Steinitz', why: 'Steinitz gave his name to the ...d6 defenses, not to 3...a6.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Black wants to guard e5 with ...d6. Why do most players insert 3...a6 4.Ba4 before playing ...d6?',
      choices: [
        { text: 'So that ...b5 can break the pin on c6 when needed', correct: true, why: 'Exactly. With the pawn on a6, ...b5 is always available, which the Old Steinitz lacks.' },
        { text: 'Because 3...d6 is an illegal move', why: '3...d6 is legal (the Old Steinitz). It just leaves the knight stuck in a pin.' },
        { text: 'To castle queenside faster', why: 'The a-pawn move has nothing to do with castling. It is about the bishop and the pin.' }
      ]
    }
  ],
  key: { name: 'Morphy Defense: 3...a6', moves: `${RUY} a6`, orientation: 'black' },
  terms: [
    { term: 'Morphy Defense', meaning: '3...a6 in the Ruy Lopez, the most common reply to 3.Bb5.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one. Strong in open positions.' },
    { term: 'Exchange Variation', meaning: '3...a6 4.Bxc6: White trades the bishop for the c6-knight.' },
    { term: 'Pin', meaning: 'A piece cannot move off a line without exposing a more valuable piece behind it.' }
  ]
})
