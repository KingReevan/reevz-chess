import { defineModule } from '../../../types'
import { RUY } from '../../../lines'

const MAIN = `${RUY} a6 Ba4 Nf6 O-O Be7`
const BAYREUTH = `${RUY} a6 Ba4 Nf6 Bxc6 dxc6 Nxe5 Nxe4`

export default defineModule({
  id: '2.4',
  title: '4...Nf6: counterattack on e4',
  minutes: 10,
  level: 1,
  goals: [
    'See how 4...Nf6 develops with a threat on e4',
    "Understand why White doesn't need to defend e4 right away",
    'Learn the rule: if White takes e5, Black takes e4'
  ],
  intro:
    "White's whole opening puts pressure on e5. With 4...Nf6, Black answers in kind and puts pressure on e4. White usually doesn't even defend the pawn. This module explains why, and shows what Black's counterattack is worth.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Develop with a threat',
      intro: 'Watch how a single developing move makes White think about e4.',
      moves: MAIN,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The bishop is asked',
          text: 'After 3...a6 White keeps the bishop with a retreat.',
          arrows: [['b5', 'a4', 'blue']]
        },
        7: {
          title: 'Black to move',
          text: "4.Ba4. The bishop still eyes c6, the guard of e5. Black's next move answers with pressure of its own.",
          arrows: [['a4', 'c6', 'yellow']]
        },
        8: {
          title: 'Pressure on e4',
          text: '4...Nf6. The knight develops toward the center and attacks e4, which nothing defends. A developing move that also makes a threat gains time.',
          arrows: [['f6', 'e4', 'red']],
          marks: ['e4']
        },
        9: {
          title: 'White ignores it',
          text: "5.O-O. White castles instead of guarding e4. If Black takes, White can open the center with d4 and Re1 while Black's king is still on e8. Module 2.5 shows how the pawn comes back.",
          arrows: [['f1', 'e1', 'blue'], ['d2', 'd4', 'blue']],
          marks: ['e8']
        },
        10: {
          title: 'The threat stays',
          text: "5...Be7. Black usually doesn't take yet. The knight still hits e4, so White will soon have to spend a move on it. In the main line that move is 6.Re1.",
          arrows: [['f6', 'e4', 'red'], ['e8', 'g8', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'A threat you can ignore',
      body:
        "A threat only matters if the captured pawn can be kept. After 5.O-O, taking on e4 opens the e-file toward Black's king, and White can strike back with d4 or Re1. So Black wins the pawn for a moment, but not for good.\n\nThe attack on e4 is still useful. It means White can never simply forget about e4, and it gives Black a counterpunch whenever White grabs on e5."
    },
    {
      kind: 'walkthrough',
      title: 'If White takes e5, Black takes e4',
      intro: 'Here White removes the guard of e5 straight away. Watch which White pawn has lost its guard.',
      moves: BAYREUTH,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'Same position',
          text: 'Black has just played 4...Nf6. This time White goes after e5 at once.',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'Remove the guard',
          text: '5.Bxc6. White takes the knight that defends e5. This is the Bayreuth Variation.',
          marks: ['e5']
        },
        10: {
          title: 'Recapture toward the center',
          text: '5...dxc6. The d-pawn takes back and opens lines for the queen and the c8-bishop.',
          arrows: [['d8', 'd4', 'blue'], ['c8', 'g4', 'blue']]
        },
        11: {
          title: 'The grab',
          text: '6.Nxe5. White wins the e5-pawn. But look at e4: no White piece defends it any more.',
          marks: ['e4'],
          ann: '?!'
        },
        12: {
          title: 'Pawn for pawn',
          text: "6...Nxe4. Black takes back at once, and material is level. That is the value of 4...Nf6. In this line White usually plays 6.d3 first to protect e4 (Module 2.9).",
          arrows: [['e4', 'e5', 'yellow']],
          ann: '!'
        }
      }
    },
    {
      kind: 'tip',
      title: 'Pressure against pressure',
      body:
        "When your opponent is attacking one of your center pawns, look for a way to attack one of theirs. If they take yours, you take theirs, and their attack has gained nothing."
    }
  ],
  takeaway:
    '4...Nf6 develops with a threat on e4. White can ignore it with 5.O-O because the pawn comes back, but the counterattack means that if White grabs e5, Black takes e4.',
  lookAhead:
    'Next: what really happens if Black takes on e4 after 5.O-O?',
  drills: [
    {
      title: 'Take back the pawn',
      prompt: "You're Black. White removed your knight and grabbed e5. Win the pawn back at once.",
      moves: BAYREUTH,
      start: 11,
      side: 'black',
      hints: ['Which White center pawn has no defender?', 'Your f6-knight can take it.'],
      success: '6...Nxe4. Pawn for pawn: White gained nothing from the trade.'
    },
    {
      title: 'The Morphy main road',
      prompt: "You're Black. Play the main line: question the bishop, develop with a threat on e4, then get ready to castle.",
      moves: MAIN,
      start: 4,
      side: 'black',
      hints: ['Start with the a-pawn.', 'Then the g8-knight to f6, and the f8-bishop to e7.'],
      success: '3...a6, 4...Nf6 and 5...Be7. You have reached the Closed Ruy Lopez.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 4...Nf6 do?',
      moves: `${RUY} a6 Ba4 Nf6`,
      orientation: 'black',
      choices: [
        { text: 'It develops a piece and attacks e4', correct: true, why: 'Right. A developing move with a threat.' },
        { text: 'It defends e5', why: "A knight on f6 doesn't guard e5. The c6-knight does that." },
        { text: "It pins White's knight", why: "Nothing is pinned. The knight's target is the e4-pawn." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why can White play 5.O-O without defending e4?',
      choices: [
        { text: "If Black takes, White opens the center with d4 or Re1 while Black's king is still on e8", correct: true, why: 'Yes. The pawn comes back, and White gets active play.' },
        { text: 'The bishop on a4 defends e4', why: "The a4-bishop looks at c6, not e4. Nothing guards e4 after 5.O-O." },
        { text: 'Black is not allowed to take on e4', why: "5...Nxe4 is legal. It's called the Open Defense, and White just wins the pawn back." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just grabbed e5. What is the best reply?',
      moves: BAYREUTH.split(' ').slice(0, -1).join(' '),
      orientation: 'black',
      choices: [
        { text: '6...Nxe4', correct: true, why: 'Right. The e4-pawn had no guard, so material is level again.' },
        { text: '6...Be6', why: 'It develops, but White gets time for 7.d3 to guard e4 and stays a pawn up.' },
        { text: '6...h6', why: 'Too slow. 7.d3 protects e4, and White keeps the extra pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: "In the main line Black doesn't take on e4 at move 5. What happens to the attack on e4?",
      choices: [
        { text: 'White soon has to spend a move guarding it, usually 6.Re1', correct: true, why: "Yes. The threat stays on the board and costs White a tempo later." },
        { text: 'It disappears once White castles', why: "Castling doesn't guard e4. The knight on f6 still attacks it." },
        { text: 'Black always takes it on move 6', why: 'In the main line White guards it with 6.Re1 first, so there is nothing to take.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: "White removes the guard of e5 and takes the pawn. What is Black's best idea?",
      choices: [
        { text: "Take White's e4-pawn if it has no guard", correct: true, why: 'Right. Pawn for pawn, and the attack on e5 has gained nothing.' },
        { text: 'Defend e5 again with ...d6', why: 'The pawn is already gone. Look for a counterattack on e4 instead.' },
        { text: 'Castle and forget about it', why: 'Then Black is simply a pawn down. Hit back at e4 first.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. Which move develops a piece and attacks a White pawn?',
      moves: `${RUY} a6 Ba4`,
      orientation: 'black',
      choices: [
        { text: '4...Nf6', correct: true, why: 'Yes. The knight comes out and attacks e4.' },
        { text: '4...Be7', why: 'It develops, but it attacks nothing. 4...Nf6 does both.' },
        { text: '4...d6', why: "It supports e5, but it's a pawn move and attacks nothing." }
      ]
    }
  ],
  key: { name: 'Morphy Defense: 4...Nf6 hits e4', moves: `${RUY} a6 Ba4 Nf6`, orientation: 'black' },
  terms: [
    { term: 'Counterattack', meaning: "Answering an attack by attacking something of your opponent's instead of only defending." },
    { term: 'Tempo', meaning: 'One move of time. A developing move that makes a threat gains a tempo.' },
    { term: 'Bayreuth Variation', meaning: '4...Nf6 5.Bxc6: the Exchange Variation with ...Nf6 already played.' }
  ]
})
