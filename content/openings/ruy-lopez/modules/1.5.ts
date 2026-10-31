import { defineModule } from '../../../types'
import { RUY } from '../../../lines'

const ITALIAN = 'e4 e5 Nf3 Nc6 Bc4'
const ITALIAN_NG5 = `${ITALIAN} Nf6 Ng5 d5`
const CHASE = `${RUY} a6 Ba4 b5 Bb3`

export default defineModule({
  id: '1.5',
  title: 'Why b5 and not c4?',
  minutes: 10,
  level: 1,
  goals: [
    'Compare the Italian bishop on c4 with the Spanish bishop on b5',
    'See why a bishop on c4 is easy to hit with ...d5',
    'Understand the price Black pays for chasing the Spanish bishop'
  ],
  intro:
    "After 1.e4 e5 2.Nf3 Nc6, White's bishop has two natural squares: c4 and b5. 3.Bc4 is the Italian Game, and 3.Bb5 is the Ruy Lopez. Both are good, but they aim at different things. This module compares them side by side.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Italian bishop aims at f7',
      intro: 'First the other square. Watch what the bishop on c4 targets, and how Black hits back.',
      moves: ITALIAN_NG5,
      start: 4,
      orientation: 'white',
      steps: {
        4: {
          title: 'Two squares to choose from',
          text: 'After 2...Nc6 the f1-bishop can go to c4 or b5. Both develop a piece and clear the way to castle.',
          arrows: [['f1', 'c4', 'blue'], ['f1', 'b5', 'blue']]
        },
        5: {
          title: 'Straight at the king',
          text: "3.Bc4. This is the Italian Game. The bishop aims at f7, the weakest square near Black's king, because only the king defends it.",
          arrows: [['c4', 'f7', 'yellow']],
          marks: ['f7']
        },
        6: {
          title: 'Black develops',
          text: '3...Nf6. A sensible developing move that attacks e4. But it lets White aim a second piece at f7.',
          arrows: [['f6', 'e4', 'red']]
        },
        7: {
          title: 'Two attackers on f7',
          text: '4.Ng5. Now the knight and bishop both hit f7. White threatens Nxf7, which would attack the queen and the h8-rook at once.',
          arrows: [['g5', 'f7', 'red'], ['c4', 'f7', 'red']]
        },
        8: {
          title: 'Block and hit back',
          text: "4...d5. The pawn cuts the bishop's line to f7 and attacks the bishop. A bishop on c4 is easy to hit with ...d5, and the game turns sharp at once.",
          arrows: [['d5', 'c4', 'red'], ['d5', 'e4', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'text',
      title: 'Two bishops, two jobs',
      body:
        "**On c4**, the bishop is a direct attacker. It aims at f7 and helps quick threats against the king. Black can defend, and the freeing move ...d5 comes with an attack on the bishop.\n\n**On b5**, the bishop works against Black's center. It attacks the c6-knight, the defender of e5. A pawn on d5 attacks c4 and e4 but not b5, so Black's natural central break does not hit it. Only the edge pawns can chase it, with ...a6 and ...b5. The pressure is slower, but it lasts."
    },
    {
      kind: 'walkthrough',
      title: 'Chasing the Spanish bishop',
      intro: 'Black can push the bishop away with pawns. Watch where it ends up, and what Black gives up to get it there.',
      moves: CHASE,
      start: 5,
      orientation: 'white',
      steps: {
        5: {
          title: 'The Spanish bishop',
          text: "3.Bb5. The bishop attacks the knight that guards e5. Black's central pawns can't reach it. Only the a- and b-pawns can.",
          arrows: [['b5', 'c6', 'yellow'], ['c6', 'e5', 'green']]
        },
        6: {
          title: 'First push',
          text: '3...a6. Black spends a pawn move to question the bishop.',
          arrows: [['a6', 'b5', 'red']]
        },
        7: {
          title: 'Step back, same diagonal',
          text: '4.Ba4. The bishop keeps its eye on c6. Black has to push again to get rid of it.',
          arrows: [['a4', 'c6', 'yellow']]
        },
        8: {
          title: 'Second push',
          text: '4...b5. Now the bishop is attacked again, and this time it has to leave the a4–e8 diagonal.',
          arrows: [['b5', 'a4', 'red']]
        },
        9: {
          title: 'The Italian diagonal after all',
          text: "5.Bb3. Look where the bishop landed: aiming at f7, just like the Italian bishop. Black's a- and b-pawns have moved forward, and later White can attack them with a2–a4.",
          arrows: [['b3', 'f7', 'yellow'], ['a2', 'a4', 'blue']],
          marks: ['b5']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Which is better?',
      body:
        'Neither. The Italian Game and the Ruy Lopez are both top-level openings. The Ruy asks Black more long-term questions, which is why this course studies it. Many club players learn both.'
    }
  ],
  takeaway:
    "On c4 the bishop aims at f7 and can be hit by ...d5. On b5 it attacks e5's defender, and if Black chases it with ...a6 and ...b5, it still reaches the f7 diagonal from b3.",
  lookAhead:
    "Black has many ways to answer 3.Bb5. The last module of this chapter maps them all and tells you where each is taught.",
  drills: [
    {
      title: 'The bishop that keeps its aim',
      prompt: "You're White. Play 3.Bb5, and each time Black's pawns attack the bishop, keep it on a useful diagonal.",
      moves: CHASE,
      start: 4,
      side: 'white',
      hints: ['First attack the knight on c6.', 'Retreat to a4, then to b3.'],
      success: '3.Bb5, 4.Ba4 and 5.Bb3. The bishop survived the chase and now aims at f7.'
    },
    {
      title: 'Defend f7 in the Italian',
      prompt: "You're Black. White's knight and bishop both attack f7. Find the pawn move that blocks the attack and hits back.",
      moves: ITALIAN_NG5,
      start: 7,
      side: 'black',
      hints: ['Put a pawn on the c4–f7 diagonal.', 'The d-pawn can go two squares and attack the bishop.'],
      success: "4...d5! blocks the bishop's line to f7 and attacks it. That is exactly what Black can't do against a bishop on b5."
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'Which opening is this?',
      moves: ITALIAN,
      orientation: 'white',
      choices: [
        { text: 'The Italian Game', correct: true, why: 'Right. The bishop on c4 marks the Italian Game.' },
        { text: 'The Ruy Lopez', why: 'In the Ruy Lopez the bishop goes to b5, attacking the knight on c6.' },
        { text: 'The Scotch Game', why: 'The Scotch is 3.d4, a pawn move in the center, not a bishop move.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does the bishop on c4 aim at?',
      moves: ITALIAN,
      orientation: 'white',
      choices: [
        { text: 'The f7-square next to Black\'s king', correct: true, why: 'Yes. f7 is guarded only by the king, which makes it a natural target.' },
        { text: 'The knight on c6', why: "That's the job of the bishop on b5. From c4 the bishop looks along the a2–g8 diagonal." },
        { text: 'The pawn on e5', why: "A bishop on c4 doesn't touch e5. Its diagonal runs through d5 and e6 to f7." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is ...d5 a good answer to a bishop on c4 but not to a bishop on b5?',
      choices: [
        { text: 'A pawn on d5 attacks c4 and e4, but not b5', correct: true, why: 'Right. Against c4 the pawn move comes with an attack on the bishop. Against b5 it doesn\'t.' },
        { text: '...d5 is not allowed in the Ruy Lopez', why: 'It is legal and sometimes played. It just doesn\'t attack the b5-bishop.' },
        { text: 'The bishop on b5 is defended by the knight on f3', why: 'The f3-knight doesn\'t defend b5. The point is which squares a d5-pawn attacks.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White threatens Nxf7. Which move blocks the attack and hits the bishop?',
      moves: `${ITALIAN} Nf6 Ng5`,
      orientation: 'black',
      choices: [
        { text: '4...d5', correct: true, why: 'Yes. The pawn blocks the c4–f7 line and attacks the bishop.' },
        { text: '4...h6', why: 'Too slow. 5.Nxf7 attacks the queen and the h8-rook, and the bishop stops the king from taking.' },
        { text: '4...Nxe4', why: 'It grabs a pawn but does nothing for f7. White can take there, for example 5.Nxf7, hitting the queen and rook.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 3...a6 4.Ba4 b5 5.Bb3, what does the Spanish bishop aim at?',
      moves: CHASE,
      orientation: 'white',
      choices: [
        { text: 'f7, along the a2–g8 diagonal', correct: true, why: 'Right. It ends up on the same diagonal as an Italian bishop.' },
        { text: 'The knight on c6', why: 'Not any more. From b3 the bishop looks at d5, e6 and f7.' },
        { text: 'The a6-pawn', why: 'The bishop moves diagonally, so from b3 it does not attack a6.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'What does Black give up by chasing the bishop with ...a6 and ...b5?',
      choices: [
        { text: 'The pawns move forward and can become targets, for example of a2–a4', correct: true, why: 'Yes. ...a6 and ...b5 gain space, but they give White something to attack later.' },
        { text: 'Nothing: pawn moves are always free', why: 'Every move costs time, and pawns cannot move back. Advanced pawns can become targets.' },
        { text: 'The right to castle', why: 'Pawn moves on the queenside do not affect castling rights.' }
      ]
    }
  ],
  key: { name: 'Italian Game: 3.Bc4 (compare 3.Bb5)', moves: ITALIAN, orientation: 'white' },
  terms: [
    { term: 'Italian Game', meaning: '1.e4 e5 2.Nf3 Nc6 3.Bc4. The bishop aims at f7.' },
    { term: 'Diagonal', meaning: 'A slanted line of squares of one color. Bishops move along diagonals.' },
    { term: 'With tempo', meaning: 'Making a useful move that also attacks something, so your opponent has to respond.' },
    { term: 'Lever', meaning: 'A pawn move that attacks an enemy pawn to open lines, like a2–a4 against a pawn on b5.' }
  ]
})
