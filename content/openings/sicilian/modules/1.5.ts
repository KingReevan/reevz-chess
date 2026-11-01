import { defineModule } from '../../../types'

/** sic-2d4-3qxd4: 2.d4 cxd4 3.Qxd4 Nc6 4.Qd1 Nf6 5.Nc3 e6 6.Nf3 Bb4 */
const CHASED = 'e4 c5 d4 cxd4 Qxd4 Nc6 Qd1 Nf6 Nc3 e6 Nf3 Bb4'
/** trap-4qxd4-nxd4: 2...Nc6 3.d4 cxd4 4.Qxd4?? Nxd4 5.Nxd4 */
const BLUNDER = 'e4 c5 Nf3 Nc6 d4 cxd4 Qxd4 Nxd4 Nxd4'
/** chekhover-4qxd4, first moves: 4.Qxd4 Nc6 5.Bb5 Bd7 6.Bxc6 Bxc6 7.Nc3 Nf6 */
const CHEKHOVER = 'e4 c5 Nf3 d6 d4 cxd4 Qxd4 Nc6 Bb5 Bd7 Bxc6 Bxc6 Nc3 Nf6'

export default defineModule({
  id: '1.5',
  title: 'Take back with the knight, not the queen',
  minutes: 10,
  level: 1,
  goals: [
    'See why a queen on d4 gets chased by ...Nc6',
    'Spot the 4.Qxd4?? blunder after 2...Nc6',
    'Know the Chekhover, where 4.Qxd4 works thanks to 5.Bb5'
  ],
  intro:
    "After ...cxd4, White usually takes back with the knight. But the queen can take on d4 too, and it seems to stand beautifully in the center there. So why do most players prefer the knight? This module shows the problem with an early queen, one big blunder, and the one system where the queen recapture really works.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The queen gets chased',
      intro: 'Here White plays 2.d4 at once, before Nf3. Only the queen can take back on d4.',
      moves: CHASED,
      start: 2,
      orientation: 'black',
      steps: {
        2: {
          title: 'The Sicilian',
          text: 'After 1.e4 c5, White has no knight on f3 yet.',
          marks: ['d4']
        },
        3: {
          title: 'White pushes at once',
          text: '2.d4. The pawn goes to d4 straight away. The only White piece that defends it is the queen.',
          arrows: [['c5', 'd4', 'red'], ['d1', 'd4', 'green']]
        },
        4: {
          title: 'Black takes',
          text: '2...cxd4. Black wins the pawn for now. Only the queen can take back at once. (3.c3 instead would be the Smith–Morra Gambit, Chapter 7.)',
          marks: ['d4']
        },
        5: {
          title: 'The queen in the center',
          text: '3.Qxd4. Material is level. The queen looks strong on d4, but it is out in the open, where Black can attack it while developing.',
          marks: ['d4']
        },
        6: {
          title: 'Develop with an attack',
          text: "3...Nc6. Black develops a knight and attacks the queen at the same time. The queen has to move again. Black has gained a tempo: one move's worth of time.",
          arrows: [['c6', 'd4', 'red']],
          ann: '!'
        },
        7: {
          title: 'Back home',
          text: '4.Qd1. The queen goes back to where it started. White has spent two moves on the queen, and Black has a knight out.',
          arrows: [['d4', 'd1', 'blue']]
        },
        8: {
          title: 'Another developing move',
          text: '4...Nf6. The second knight comes out and attacks e4.',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'White defends',
          text: '5.Nc3. The knight defends e4 and develops.',
          arrows: [['c3', 'e4', 'green']]
        },
        10: {
          title: 'Opening the bishop',
          text: '5...e6. Black opens a diagonal for the f8-bishop.',
          arrows: [['f8', 'b4', 'blue']]
        },
        11: {
          title: 'White develops',
          text: '6.Nf3. White brings out the other knight.',
          arrows: [['g1', 'f3', 'blue']]
        },
        12: {
          title: 'A comfortable game',
          text: '6...Bb4. The bishop pins the c3-knight: it cannot move without exposing White\'s king. Black has developed quickly. The position is roughly equal, so White\'s early queen gained nothing.',
          arrows: [['b4', 'e1', 'red']],
          marks: ['c3']
        }
      }
    },
    {
      kind: 'warning',
      title: "A lost tempo is not a lost game",
      body:
        'In the line above, White lost time but nothing more. The position stays roughly equal. An early queen move is usually a small mistake, not a big one. The big one comes next: taking with the queen when a knight is already waiting.'
    },
    {
      kind: 'walkthrough',
      title: 'The blunder: 4.Qxd4??',
      intro: 'Now Black has played 2...Nc6. Look where that knight stands before White recaptures.',
      moves: BLUNDER,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The knight watches d4',
          text: '2...Nc6. Black develops the knight to c6. From there it already attacks the d4-square.',
          arrows: [['c6', 'd4', 'yellow']],
          marks: ['d4']
        },
        5: {
          title: 'White opens the center',
          text: '3.d4. The usual move. The pawn is defended by the f3-knight and the queen.',
          arrows: [['f3', 'd4', 'green'], ['d1', 'd4', 'green']]
        },
        6: {
          title: 'Black takes',
          text: '3...cxd4. Now White should take back with the knight.',
          marks: ['d4']
        },
        7: {
          title: 'The wrong piece',
          text: '4.Qxd4. The queen takes on a square the c6-knight attacks. The knight is worth about three pawns; the queen about nine.',
          arrows: [['c6', 'd4', 'red']],
          ann: '??'
        },
        8: {
          title: 'The knight takes the queen',
          text: '4...Nxd4. Black simply takes the queen.',
          marks: ['d4'],
          ann: '!'
        },
        9: {
          title: 'A queen for a knight',
          text: '5.Nxd4. White gets the knight back, but White has lost a queen for a knight. Black is winning.',
          marks: ['d4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The Chekhover: when 4.Qxd4 works',
      intro: 'Back to 2...d6. This time the knight is still on b8 when White takes with the queen.',
      moves: CHEKHOVER,
      start: 6,
      orientation: 'white',
      steps: {
        6: {
          title: 'Two ways to take back',
          text: '3...cxd4. The knight and the queen can both take. 4.Nxd4 is the main line. Here White picks the queen.',
          arrows: [['f3', 'd4', 'blue'], ['d1', 'd4', 'blue']]
        },
        7: {
          title: 'The Chekhover Variation',
          text: '4.Qxd4. The queen is safe for now: no Black knight is on c6 yet. This system is named the Chekhover Variation.',
          marks: ['d4']
        },
        8: {
          title: 'Black attacks the queen',
          text: '4...Nc6. The usual answer. The knight develops and hits the queen. Does White have to move it again?',
          arrows: [['c6', 'd4', 'red']]
        },
        9: {
          title: 'The pin',
          text: "5.Bb5. The bishop pins the c6-knight to Black's king. A knight pinned to the king can't move at all, so it can't take the queen. The queen stays in the center.",
          arrows: [['b5', 'e8', 'red']],
          marks: ['c6'],
          ann: '!'
        },
        10: {
          title: 'Black breaks the pin',
          text: '5...Bd7. The bishop steps between, so the knight is free again and threatens ...Nxd4.',
          arrows: [['c6', 'd4', 'red']]
        },
        11: {
          title: 'White takes the knight',
          text: '6.Bxc6. White removes the attacker. White gives up a bishop for a knight.',
          marks: ['c6']
        },
        12: {
          title: 'The bishop pair',
          text: '6...Bxc6. Black now has both bishops, while White has only one. White has a lead in development and a strong queen in the middle of the board.',
          arrows: [['c6', 'e4', 'red']]
        },
        13: {
          title: 'More development',
          text: '7.Nc3. The knight develops and adds a defender to e4, which the c6-bishop attacks.',
          arrows: [['c3', 'e4', 'green']]
        },
        14: {
          title: 'A balanced fight',
          text: "7...Nf6. After 8.Bg5 e6 9.O-O-O Be7, White's pieces are active and Black has the two bishops. The position is roughly equal: a real system, not a mistake.",
          arrows: [['f6', 'e4', 'red']]
        }
      }
    }
  ],
  takeaway:
    "After ...cxd4, take back with the knight. A queen on d4 gets chased by ...Nc6, and with a knight already on c6, 4.Qxd4?? just loses the queen. The Chekhover 4.Qxd4 works only because 5.Bb5 pins the knight.",
  lookAhead:
    'Module 1.6 turns to Black: what happens when Black kicks the d4-knight with an early ...e5?',
  drills: [
    {
      title: 'Punish the blunder',
      prompt: "You're Black. White has just taken back on d4 with the queen. Make White pay.",
      moves: 'e4 c5 Nf3 Nc6 d4 cxd4 Qxd4 Nxd4',
      start: 7,
      side: 'black',
      hints: ['Which of your pieces attacks d4?', 'Your c6-knight can take the queen.'],
      success: '4...Nxd4! You win the queen for a knight. Always check what your pieces attack after your opponent moves.'
    },
    {
      title: 'Keep the queen in the center',
      prompt: "You're White, playing the Chekhover. Black has just attacked your queen with 4...Nc6. Don't move the queen: find another way.",
      moves: 'e4 c5 Nf3 d6 d4 cxd4 Qxd4 Nc6 Bb5',
      start: 8,
      side: 'white',
      hints: ['If the knight could not move, it could not take your queen.', "Pin the knight to Black's king with your f1-bishop."],
      success: "5.Bb5! The knight is pinned to the king, so it can't take the queen."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why do most players take back on d4 with the knight rather than the queen?',
      choices: [
        { text: 'A queen on d4 can be attacked by ...Nc6, and Black gains time', correct: true, why: 'Right. Black develops a piece with an attack, and the queen has to move again.' },
        { text: 'The queen would be trapped on d4', why: 'The queen has plenty of escape squares. The problem is that it must spend moves running away.' },
        { text: 'The queen may not move before move 10', why: 'There is no such rule. In the Chekhover the queen comes out on move 4. The question is whether it can be chased.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move. Which recapture is a blunder?',
      moves: 'e4 c5 Nf3 Nc6 d4 cxd4',
      orientation: 'white',
      choices: [
        { text: '4.Qxd4', correct: true, why: 'Yes. The c6-knight attacks d4, so 4...Nxd4 wins the queen for a knight.' },
        { text: '4.Nxd4', why: 'This is the normal move and the start of the Open Sicilian. The knight is defended by the queen.' },
        { text: 'Neither: both are fine', why: 'Look at the c6-knight. 4.Qxd4?? puts the queen on a square it attacks.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Chekhover, after 4.Qxd4 Nc6 5.Bb5, why can\'t Black take the queen?',
      moves: 'e4 c5 Nf3 d6 d4 cxd4 Qxd4 Nc6 Bb5',
      orientation: 'black',
      choices: [
        { text: 'The knight is pinned to the king', correct: true, why: 'Right. If the knight moved, the b5-bishop would attack the king, and that is illegal.' },
        { text: 'The f3-knight defends the queen', why: 'It does, but that would not save the queen: losing a queen for a knight is still a disaster. The real reason is the pin.' },
        { text: 'The knight on c6 does not attack d4', why: 'It does attack d4. It just can\'t move, because it is pinned.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 2.d4 cxd4 3.Qxd4 Nc6 4.Qd1, how do you judge the position?',
      moves: 'e4 c5 d4 cxd4 Qxd4 Nc6 Qd1',
      orientation: 'white',
      choices: [
        { text: 'Black has gained time, but it is roughly equal', correct: true, why: 'Yes. White wasted moves with the queen, but nothing is lost. The early queen is a small mistake.' },
        { text: 'Black is winning', why: 'Black has a little more development, but no material or decisive advantage. It is roughly equal.' },
        { text: 'White is clearly better because the queen is safe again', why: 'White spent two moves to bring the queen back home. If anyone has gained, it is Black.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move. Which move develops a piece and attacks the queen?',
      moves: 'e4 c5 d4 cxd4 Qxd4',
      orientation: 'black',
      choices: [
        { text: '3...Nc6', correct: true, why: 'Right. The knight comes out and hits d4, so White must spend another move on the queen.' },
        { text: '3...Nf6', why: 'A good developing move, but it attacks e4, not the queen.' },
        { text: '3...d6', why: 'A useful pawn move, but it develops no piece and does not attack the queen.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Chekhover, after 5.Bb5 Bd7 6.Bxc6 Bxc6, what does Black have in return for White\'s lead in development?',
      choices: [
        { text: 'The two bishops', correct: true, why: 'Yes. White gave up the b5-bishop for the c6-knight, so Black has the bishop pair.' },
        { text: 'An extra pawn', why: 'Material is level. Black\'s plus is the two bishops.' },
        { text: 'A safer king, because White cannot castle', why: 'White can castle, and in the main line castles queenside with 9.O-O-O.' }
      ]
    }
  ],
  key: { name: 'Chekhover: 4.Qxd4 Nc6', moves: 'e4 c5 Nf3 d6 d4 cxd4 Qxd4 Nc6', orientation: 'white' },
  terms: [
    { term: 'Tempo', meaning: "One move's worth of time. Developing with an attack on an enemy piece gains a tempo, because the opponent must answer it." },
    { term: 'Pin', meaning: 'A piece cannot move off a line without exposing a more valuable piece behind it. Pinned to the king, it cannot move at all.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one. Strong in open positions.' }
  ]
})
