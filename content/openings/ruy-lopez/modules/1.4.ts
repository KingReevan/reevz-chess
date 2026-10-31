import { defineModule } from '../../../types'
import { RUY } from '../../../lines'

const EARLY_TRADE = `${RUY} Nf6 Bxc6 dxc6 Nxe5 Qd4 Nf3 Qxe4+`
const F2_TRAP = `${RUY} Nf6 d3 Bc5 Bxc6 dxc6 Nxe5 Qd4 Nf3 Qxf2#`

export default defineModule({
  id: '1.4',
  title: 'The Spanish bishop: attack the defender',
  minutes: 10,
  level: 1,
  goals: [
    'Count the attackers and defenders of e5',
    'Understand why 3.Bb5 is pressure, not yet a threat',
    'Spot the ...Qd4 double attack that wins the pawn back'
  ],
  intro:
    "After 3.Bb5, White's bishop attacks the only piece that guards e5. So is Black's pawn about to fall? This module shows the difference between pressure and a real threat, and why Black usually doesn't need to panic yet.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Count, then check the trade',
      intro: 'First count who attacks and who defends e5. Then see what happens if White removes the defender at once.',
      moves: EARLY_TRADE,
      start: 2,
      orientation: 'white',
      steps: {
        2: {
          title: 'The target',
          text: "1...e5. This pawn is the target of the whole Ruy Lopez. Let's count how many pieces attack it and how many defend it.",
          marks: ['e5']
        },
        3: {
          title: 'One attacker',
          text: '2.Nf3. Now e5 is attacked once and defended zero times. Black must do something about it.',
          arrows: [['f3', 'e5', 'red']]
        },
        4: {
          title: 'One defender',
          text: '2...Nc6. One attacker, one defender. The pawn is safe for now.',
          arrows: [['c6', 'e5', 'green']]
        },
        5: {
          title: 'Attack the defender',
          text: "3.Bb5. The bishop attacks the knight on c6. If that knight disappears, e5 has no defenders left. That's the idea behind the Spanish bishop.",
          arrows: [['b5', 'c6', 'yellow'], ['c6', 'e5', 'green'], ['f3', 'e5', 'red']]
        },
        6: {
          title: 'Black keeps developing',
          text: "3...Nf6. Black doesn't defend e5 again. The new knight attacks e4 instead. Is that careless?",
          arrows: [['f6', 'e4', 'red']]
        },
        7: {
          title: 'Remove the defender',
          text: '4.Bxc6. White takes the knight. Now nothing guards e5.',
          marks: ['e5']
        },
        8: {
          title: 'Opening the d-file',
          text: "4...dxc6. Black recaptures with the d-pawn. That opens a path for the queen down the d-file.",
          arrows: [['d8', 'd4', 'blue']]
        },
        9: {
          title: 'The grab',
          text: '5.Nxe5. White takes the pawn. But ask yourself: who guards the e4-pawn now?',
          marks: ['e4'],
          ann: '?'
        },
        10: {
          title: 'Double attack',
          text: '5...Qd4. The queen attacks the knight on e5 and the pawn on e4 at the same time. White cannot save both.',
          arrows: [['d4', 'e5', 'yellow'], ['d4', 'e4', 'yellow']],
          ann: '!'
        },
        11: {
          title: 'The knight runs',
          text: '6.Nf3. The knight escapes and attacks the queen. But e4 still has no defender.',
          arrows: [['f3', 'd4', 'red'], ['d4', 'e4', 'yellow']]
        },
        12: {
          title: 'Pawn back, with check',
          text: '6...Qxe4+. Black wins the pawn back with check. Material is level, so White gained nothing.',
          arrows: [['e4', 'e1', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Pressure is not a threat',
      body:
        "A **threat** means you can win something on your next move. **Pressure** means a target is under attack, but your opponent still has an answer.\n\nRight after 3.Bb5, White has pressure on e5, not a threat. White's own e4-pawn is loose and White's king is still in the center, so ...Qd4 tricks work. Later, once White has castled and guarded e4 (usually with Re1), taking on c6 and e5 can really win a pawn. That moment is what the main line is built around."
    },
    {
      kind: 'walkthrough',
      title: 'Even with e4 guarded, look at f2',
      intro: 'This time White protects e4 before trading. Black has a different target for the same queen move.',
      moves: F2_TRAP,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'Same position as before',
          text: 'After 3...Nf6 the knight on f6 hits e4. This time White deals with that first.',
          arrows: [['f6', 'e4', 'red']]
        },
        7: {
          title: 'e4 is protected',
          text: '4.d3. The pawn guards e4. Now ...Qxe4 tricks are off the table.',
          arrows: [['d3', 'e4', 'green']]
        },
        8: {
          title: 'A bishop aimed at f2',
          text: '4...Bc5. Black develops the bishop to an active diagonal. It points at f2, a square only White\'s king defends.',
          arrows: [['c5', 'f2', 'yellow']]
        },
        9: {
          title: 'Remove the defender',
          text: '5.Bxc6. White takes the knight that guards e5.',
          marks: ['e5']
        },
        10: {
          title: 'The d-file opens',
          text: '5...dxc6. The queen can now reach d4. Notice that d4 is on the same diagonal as the c5-bishop and f2.',
          arrows: [['d8', 'd4', 'blue']]
        },
        11: {
          title: 'The grab',
          text: '6.Nxe5. With e4 protected, White thinks the pawn is free.',
          marks: ['e5'],
          ann: '?'
        },
        12: {
          title: 'Two targets again',
          text: '6...Qd4. The queen hits the knight on e5 and the pawn on f2. With the bishop behind the queen, ...Qxf2 would be checkmate.',
          arrows: [['d4', 'e5', 'yellow'], ['d4', 'f2', 'red']],
          ann: '!'
        },
        13: {
          title: 'The wrong escape',
          text: '7.Nf3. The knight attacks the queen, but it does nothing for f2. White had to defend with a move like 7.O-O, and then ...Qxe5 wins the pawn back.',
          arrows: [['f3', 'd4', 'red']],
          marks: ['f2'],
          ann: '??'
        },
        14: {
          title: 'Checkmate',
          text: '7...Qxf2#. The queen is protected by the c5-bishop, and White\'s king has no square to run to. Greed on move 6 lost the game.',
          arrows: [['c5', 'f2', 'red']]
        }
      }
    },
    {
      kind: 'warning',
      title: "Don't panic with ...f6",
      body:
        "A common beginner reaction to 3.Bb5 is to prop up e5 with 3...f6. It weakens the diagonal toward Black's king and takes the f6-square away from the knight. Since e5 isn't in real danger yet, keep developing instead."
    }
  ],
  takeaway:
    "3.Bb5 attacks the knight that guards e5. It's pressure, not yet a threat: if White takes on c6 and e5 too early, ...Qd4 hits the knight and a second loose target.",
  lookAhead:
    "Why did White choose b5 for the bishop and not c4? The next module compares the two squares.",
  drills: [
    {
      title: 'Win the pawn back',
      prompt: "You're Black. White has taken on c6 and grabbed e5. Find the double attack, then collect the pawn.",
      moves: EARLY_TRADE,
      start: 9,
      side: 'black',
      hints: ['The d-file is open for your queen.', 'From d4 your queen attacks e5 and e4.'],
      success: '5...Qd4! and 6...Qxe4+. Material is level, and White gained nothing from the trade.'
    },
    {
      title: 'Punish the greedy knight',
      prompt: "You're Black. White protected e4 with d3 and then grabbed e5. Find the queen move with two targets, and finish the job.",
      moves: F2_TRAP,
      start: 11,
      side: 'black',
      hints: ['Your c5-bishop already looks at f2.', 'Put your queen on d4, in front of the bishop. If White ignores f2, take it.'],
      success: '6...Qd4! and 7...Qxf2#. The queen and bishop together are deadly on that diagonal.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does the bishop on b5 attack?',
      moves: RUY,
      orientation: 'white',
      choices: [
        { text: 'The knight on c6, which defends e5', correct: true, why: "Right. It goes after the defender instead of the pawn itself." },
        { text: 'The pawn on e5', why: "A bishop on b5 can't reach e5. It works indirectly, by attacking the c6-knight." },
        { text: "Black's king on e8", why: 'The knight on c6 and the pawn on d7 stand in the way. The target is the knight.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 3...Nf6 4.Bxc6 dxc6 5.Nxe5, why has White not really won a pawn?',
      choices: [
        { text: '5...Qd4 attacks the knight on e5 and the loose pawn on e4', correct: true, why: 'Yes. White cannot save both, and Black regains the pawn.' },
        { text: 'The knight on e5 is trapped', why: 'The knight has squares to go to, such as f3. The problem is the e4-pawn it leaves behind.' },
        { text: '5...Bd6 wins the knight', why: 'The knight simply retreats. The winning idea is the queen on d4, which hits e4 as well.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just taken on e5. Which move wins the pawn back with a double attack?',
      moves: `${RUY} Nf6 d3 Bc5 Bxc6 dxc6 Nxe5`,
      orientation: 'black',
      choices: [
        { text: '6...Qd4', correct: true, why: 'Right. It hits the knight and f2, where ...Qxf2 would be checkmate.' },
        { text: '6...Nxe4', why: 'The d3-pawn guards e4, so 7.dxe4 wins your knight.' },
        { text: '6...O-O', why: 'It attacks nothing, so White gets a free move to castle and cover f2. Strike while the knight is loose.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'When does taking on c6 and then on e5 usually become a real threat for White?',
      choices: [
        { text: 'After White has castled and guarded e4, often with Re1', correct: true, why: "Yes. Then ...Qd4 has no loose pawn to hit, and ...Qxe4 can be pinned on the e-file." },
        { text: 'Right away on move 4', why: "Not yet. The loose e4-pawn and White's uncastled king give Black ...Qd4 tricks." },
        { text: 'Only after Black plays ...a6', why: '...a6 doesn\'t change the question about e5. Module 2.2 shows ...Qd4 still works then.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: "You're Black and White has just played 3.Bb5. What is the best attitude?",
      moves: RUY,
      orientation: 'black',
      choices: [
        { text: 'Keep developing. e5 is under pressure but not lost yet', correct: true, why: 'Right. Bring out your pieces and watch for the moment White guards e4 and castles.' },
        { text: 'Defend e5 again at once with 3...f6', why: "It weakens your king's diagonal and steals f6 from your knight. e5 isn't in danger yet." },
        { text: 'Guard e5 with the queen: 3...Qe7', why: 'The queen blocks the f8-bishop and does a job a pawn or minor piece could do. Keep developing instead.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White has just played 7.Nf3, attacking your queen. What is the strongest move?',
      moves: `${RUY} Nf6 d3 Bc5 Bxc6 dxc6 Nxe5 Qd4 Nf3`,
      orientation: 'black',
      choices: [
        { text: '7...Qxf2#', correct: true, why: 'Checkmate. The c5-bishop protects the queen, and the king has nowhere to go.' },
        { text: '7...Qxe4+', why: 'The d3-pawn guards e4, so 8.dxe4 wins your queen.' },
        { text: '7...Qd6', why: 'The queen is safe there, but you missed mate in one on f2.' }
      ]
    }
  ],
  key: { name: 'Pressure, not a threat: 5...Qd4 regains the pawn', moves: `${RUY} Nf6 Bxc6 dxc6 Nxe5 Qd4`, orientation: 'black' },
  terms: [
    { term: 'Defender', meaning: 'A piece or pawn that protects another one. Attacking the defender is often easier than attacking the target.' },
    { term: 'Pressure', meaning: 'An attack on a target that your opponent can still meet. It may turn into a real threat later.' },
    { term: 'Threat', meaning: 'Something you could win or do on your very next move if your opponent ignores it.' },
    { term: 'Double attack', meaning: 'One move that attacks two targets at once. A fork is one kind of double attack.' }
  ]
})
