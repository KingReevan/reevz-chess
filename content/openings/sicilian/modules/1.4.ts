import { defineModule } from '../../../types'
import { OPEN } from '../lines'

/** open-2d6-4nxd4 + 4...Nf6: the knight hits e4 */
const HIT_E4 = 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6'
/** accel-maroczy, first moves: 4...g6 5.c4 Bg7 6.Be3 Nf6 7.Nc3 (no early hit on e4, so White gets c4 in) */
const CLAMP = 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Bg7 Be3 Nf6 Nc3'
/** prins-5f3: 5.f3 e5 6.Bb5+ Nbd7 */
const PRINS = `${HIT_E4} f3 e5 Bb5+ Nbd7`

export default defineModule({
  id: '1.4',
  title: 'Why 4...Nf6 and 5.Nc3?',
  minutes: 10,
  level: 1,
  goals: [
    'See that 4...Nf6 attacks the undefended e4-pawn',
    'Understand the price of 5.Nc3: no c2–c4 clamp for White',
    'Meet the Prins Variation, 5.f3, which defends e4 with a pawn'
  ],
  intro:
    "After 4.Nxd4, Black almost always plays 4...Nf6, and White almost always answers 5.Nc3. These look like ordinary developing moves. But each one has a job, and 5.Nc3 also has a hidden cost. This module explains both moves, and White's other way to defend e4.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The knight hits e4',
      intro: 'Keep your eye on the pawn on e4. Count its defenders after each move.',
      moves: OPEN,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The trade on d4',
          text: '3...cxd4. Black has taken a center pawn. White will take back with the knight.',
          marks: ['d4']
        },
        7: {
          title: 'A loose pawn on e4',
          text: '4.Nxd4. Material is level. Now look at e4: no White pawn or piece defends it. A pawn with no defender is called loose.',
          marks: ['e4']
        },
        8: {
          title: 'Develop with a threat',
          text: '4...Nf6. Black develops a knight and attacks e4 at the same time. White has to deal with the threat now, before doing anything else.',
          arrows: [['f6', 'e4', 'red']],
          ann: '!'
        },
        9: {
          title: 'The natural defense',
          text: "5.Nc3. The knight defends e4 and develops. But it now stands on c3, right in front of the c2-pawn. White's c-pawn is stuck, so White can't play c2–c4.",
          arrows: [['c3', 'e4', 'green']],
          marks: ['c2']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why would White want c4?',
      body:
        "A pawn on c4 next to the pawn on e4 grips the d5-square. Black often wants to free the game with ...d5, and two White pawns aimed at d5 make that very hard. A set-up like this is called a **clamp**.\n\nSo 4...Nf6 is clever. By hitting e4 at once, Black forces White to make a decision before c4 is played. Most White players choose 5.Nc3, and the clamp is gone. That is why, in the 2...d6 lines, Black usually plays ...Nf6 before ...Nc6 or ...g6."
    },
    {
      kind: 'walkthrough',
      title: 'Compare: when Black waits, White gets c4',
      intro: 'A different move order: 2...Nc6, then 4...g6. Black does not hit e4 at once. Watch what White does with the free move.',
      moves: CLAMP,
      start: 7,
      orientation: 'white',
      steps: {
        7: {
          title: 'No threat to e4',
          text: 'After 2...Nc6 3.d4 cxd4 4.Nxd4, the e4-pawn is loose again. But no Black piece attacks it yet.',
          marks: ['e4']
        },
        8: {
          title: 'Black prepares the bishop',
          text: '4...g6. Black makes room for the bishop on g7. Putting a bishop on g7 like this is called a fianchetto. Still nothing attacks e4.',
          arrows: [['f8', 'g7', 'blue']]
        },
        9: {
          title: 'The clamp',
          text: '5.c4. White uses the free move to put a pawn on c4. Now the c4- and e4-pawns both grip d5. This set-up is the Maróczy Bind, taught in Module 3.9.',
          arrows: [['c4', 'd5', 'yellow'], ['e4', 'd5', 'yellow']],
          marks: ['d5']
        },
        10: {
          title: 'The bishop arrives',
          text: '5...Bg7. The bishop sits on the long diagonal. Now the d4-knight is attacked twice, by the bishop and the c6-knight.',
          arrows: [['g7', 'd4', 'red'], ['c6', 'd4', 'red']]
        },
        11: {
          title: 'The knight is protected',
          text: '6.Be3. The bishop develops and adds a second defender to the d4-knight, next to the queen on d1.',
          arrows: [['e3', 'd4', 'green']]
        },
        12: {
          title: 'Now e4 is attacked',
          text: '6...Nf6. The knight finally hits e4.',
          arrows: [['f6', 'e4', 'red']]
        },
        13: {
          title: 'Both at once',
          text: '7.Nc3. The knight defends e4 from behind the c4-pawn. White has the knight on c3 and the clamp. In the 2...d6 lines, 4...Nf6 stops White getting both.',
          arrows: [['c3', 'e4', 'green']],
          marks: ['c4', 'e4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The Prins Variation: 5.f3',
      intro: 'White can also defend e4 with a pawn instead of the knight. This is rare, but you may meet it.',
      moves: PRINS,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'e4 is attacked',
          text: '4...Nf6. The same position. White needs to defend e4.',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'A pawn defends',
          text: '5.f3. The Prins Variation. The f3-pawn defends e4, and the c2-pawn stays free to go to c4 later. The cost: f3 is a pawn move, not a developing move.',
          arrows: [['f3', 'e4', 'green'], ['c2', 'c4', 'blue']]
        },
        10: {
          title: 'Black kicks the knight',
          text: '5...e5. Black uses the time to attack the d4-knight at once. The knight will have to move.',
          arrows: [['e5', 'd4', 'red']]
        },
        11: {
          title: 'A developing check',
          text: '6.Bb5+. Before moving the knight, White develops the bishop with check. This line is also called the Venice Attack.',
          arrows: [['b5', 'e8', 'red']]
        },
        12: {
          title: 'Block with the knight',
          text: '6...Nbd7. Black blocks with the b8-knight. The d4-knight is still attacked, and the position is roughly equal.',
          arrows: [['e5', 'd4', 'red']],
          marks: ['d7']
        }
      }
    },
    {
      kind: 'tip',
      title: 'A move with a threat gains time',
      body:
        "4...Nf6 is a model developing move: it brings a piece out **and** makes a threat, so White must answer it instead of making the move White wanted. When you can, develop your pieces toward targets."
    }
  ],
  takeaway:
    "4...Nf6 attacks the loose e4-pawn. White defends it with 5.Nc3, which blocks the c-pawn and rules out the c4 clamp. 5.f3, the Prins, defends with a pawn instead.",
  lookAhead:
    'Module 1.5 looks back one move: why White takes on d4 with the knight and not the queen.',
  drills: [
    {
      title: 'Defend e4',
      prompt: "You're White. Black's knight has just attacked your e4-pawn. Defend it the normal way, developing a piece.",
      moves: OPEN,
      start: 8,
      side: 'white',
      hints: ['Which knight can come out and guard e4 in one move?', 'The b1-knight can reach c3.'],
      success: '5.Nc3. The pawn is safe and a piece is developed. This is the main crossroads of the Open Sicilian.'
    },
    {
      title: 'Develop with a threat',
      prompt: "You're Black. White has just taken back on d4. Bring out a piece and attack something that has no defender.",
      moves: HIT_E4,
      start: 7,
      side: 'black',
      hints: ['One White pawn has no defender at all.', 'Your g8-knight can attack e4.'],
      success: '4...Nf6. You develop and hit e4, and White has no time for c4.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does the knight on f6 attack?',
      moves: HIT_E4,
      orientation: 'white',
      choices: [
        { text: 'The pawn on e4, which nothing defends', correct: true, why: 'Right. The knight hits e4, and no White piece or pawn guards it yet.' },
        { text: 'The knight on d4', why: 'Toward White\'s side, a knight on f6 jumps to d5, e4, g4 or h5. d4 is not one of those squares.' },
        { text: "White's king", why: 'The king on e1 is far away. The target is the e4-pawn.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. What is the normal answer to the attack on e4?',
      moves: HIT_E4,
      orientation: 'white',
      choices: [
        { text: '5.Nc3', correct: true, why: 'Yes. The knight defends e4 and develops a piece. It is the main move.' },
        { text: '5.c4', why: 'It does not defend e4. Black simply plays 5...Nxe4 and wins a pawn.' },
        { text: '5.e5', why: 'The pawn runs away into a capture: 5...dxe5 and Black is a pawn up.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the hidden cost of 5.Nc3?',
      choices: [
        { text: 'The knight blocks the c-pawn, so White cannot build a c4 clamp', correct: true, why: 'Exactly. With a knight on c3, the c2-pawn cannot move, and the grip on d5 with c4 and e4 is off.' },
        { text: 'The knight can be taken for free on c3', why: 'Nothing attacks c3 here, and the b2-pawn defends it anyway.' },
        { text: 'It leaves the d4-knight undefended', why: 'The queen on d1 still defends the d4-knight. The cost is about the c-pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Prins Variation, what does 5.f3 do that 5.Nc3 does not?',
      moves: `${HIT_E4} f3`,
      orientation: 'white',
      choices: [
        { text: 'It defends e4 with a pawn and keeps c2–c4 possible', correct: true, why: 'Right. The c-pawn is still free. The price is a pawn move instead of a developing move.' },
        { text: 'It develops a piece', why: 'f3 is a pawn move. It does not bring out a piece, which is why it is the less common choice.' },
        { text: 'It stops Black from playing ...e5', why: 'It does not. 5...e5 is actually Black\'s best answer, kicking the d4-knight.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'In the 2...d6 lines, why does Black usually play ...Nf6 before ...Nc6 or ...g6?',
      choices: [
        { text: 'Hitting e4 forces White to decide at once, and after Nc3 there is no c4 clamp', correct: true, why: 'Yes. Given a free move, White could play c4 first and Nc3 second, and get both.' },
        { text: 'Because ...Nc6 and ...g6 are bad moves in the Sicilian', why: 'Both are fine moves, and whole systems are built on them. The point is the order.' },
        { text: 'Because ...Nf6 wins the e4-pawn by force', why: 'It does not win anything. White can defend e4 with 5.Nc3 or 5.f3.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move after 5.f3. What is the most active answer?',
      moves: `${HIT_E4} f3`,
      orientation: 'black',
      choices: [
        { text: '5...e5', correct: true, why: 'Right. Black kicks the d4-knight at once and uses the time White spent on f3.' },
        { text: '5...Nxe4', why: 'The f3-pawn defends e4. After 6.fxe4 Black has lost a knight for a pawn.' },
        { text: '5...e6', why: 'A solid move, but it does not make White pay for f3. 5...e5 kicks the knight at once and is clearly stronger.' }
      ]
    }
  ],
  key: { name: 'Open Sicilian: 4...Nf6 hits e4', moves: HIT_E4, orientation: 'white' },
  terms: [
    { term: 'Loose pawn', meaning: 'A pawn that no piece or pawn defends. It can be attacked and won.' },
    { term: 'Clamp', meaning: "Pawns that grip key squares so the opponent can't free their game. Here: pawns on c4 and e4 aimed at d5." },
    { term: 'Maróczy Bind', meaning: 'The clamp with White pawns on c4 and e4 against the Sicilian. Module 3.9 teaches it.' },
    { term: 'Fianchetto', meaning: 'Developing a bishop on the long diagonal from b2, g2, b7 or g7, after moving the pawn in front of it one square.' }
  ]
})
