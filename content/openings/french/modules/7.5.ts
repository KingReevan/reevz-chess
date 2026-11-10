import { defineModule } from '../../../types'
import { WINAWER_MAIN } from '../lines'

/** win-7nf3-b6: 7.Nf3 b6 8.a4 Ba6 9.Bxa6 Nxa6 10.Qe2 Nb8 11.O-O Nbc6 */
const BA6 = `${WINAWER_MAIN} Nf3 b6 a4 Ba6 Bxa6 Nxa6 Qe2 Nb8 O-O Nbc6`
/** win-7h4: 7.h4 Qc7 8.h5 h6 */
const H4 = `${WINAWER_MAIN} h4 Qc7 h5 h6`

export default defineModule({
  id: '7.5',
  title: 'Positional lines and the ...Ba6 trade',
  minutes: 10,
  level: 3,
  goals: [
    "Know White's quiet seventh moves: 7.Nf3, 7.a4 and 7.h4",
    "Trade Black's problem bishop with ...b6 and ...Ba6",
    'See why White likes a dark-squared bishop on a3'
  ],
  intro:
    "Not every Winawer is a race of sacrifices. Many White players skip 7.Qg4 and build up slowly, trusting the two bishops and the extra space. Against these quiet lines Black has time for a useful job: getting rid of the problem bishop on c8. This module shows how.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Trading the problem bishop: 7.Nf3 b6',
      intro: "Black's c8-bishop is stuck behind the e6-pawn. Watch it leave by the other road, through b7 and a6.",
      moves: BA6,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'A quiet choice',
          text: "6...Ne7. White can attack g7 with 7.Qg4, or develop calmly. This time White develops.",
          marks: ['c8']
        },
        13: {
          title: 'Knight to f3',
          text: '7.Nf3. The knight guards d4 and e5. White keeps the queen at home.',
          arrows: [['f3', 'd4', 'green'], ['f3', 'e5', 'green']]
        },
        14: {
          title: 'Open a door for the bishop',
          text: '7...b6. The b-pawn steps aside, so the c8-bishop can use the diagonal through b7 to a6.',
          arrows: [['c8', 'a6', 'blue']]
        },
        15: {
          title: 'a2–a4',
          text: '8.a4. A typical White move: it frees a3 for the c1-bishop, and the pawn may later go to a5 to attack b6.',
          arrows: [['c1', 'a3', 'blue'], ['a4', 'a5', 'blue']]
        },
        16: {
          title: 'Bishop meets bishop',
          text: "8...Ba6. Black's bishop faces White's f1-bishop along the a6–f1 diagonal. White's good attacking bishop is offered a swap for Black's problem bishop.",
          arrows: [['a6', 'f1', 'yellow']]
        },
        17: {
          title: 'White trades',
          text: '9.Bxa6. White takes. If White left the bishop on f1, Black could take it with ...Bxf1.',
          arrows: [['f1', 'a6', 'red']]
        },
        18: {
          title: 'The knight takes back',
          text: '9...Nxa6. The knight lands on the edge of the board for now. It will come back.',
          marks: ['a6']
        },
        19: {
          title: 'The knight is attacked',
          text: '10.Qe2. The queen develops and hits the a6-knight, which has no defender.',
          arrows: [['e2', 'a6', 'red']]
        },
        20: {
          title: 'Back to b8',
          text: '10...Nb8. A step back, but the knight is heading for c6, its best square.',
          arrows: [['b8', 'c6', 'blue']]
        },
        21: {
          title: 'White castles',
          text: "11.O-O. White's king is safe.",
          arrows: [['e1', 'g1', 'green']]
        },
        22: {
          title: 'Job done',
          text: "11...Nbc6. The knight joins the pressure on d4. Black's problem bishop is gone, and so is White's light-squared bishop. The position is level.",
          arrows: [['c6', 'd4', 'red'], ['c5', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Why the ...Ba6 trade is so useful',
      body:
        "**For Black,** the c8-bishop is the problem piece of the French: the pawns on e6 and d5 stand on light squares and block it. On a6 it finds an open diagonal, and swapping it gives Black a good trade.\n\n**For White,** the f1-bishop is a key attacker. In the 7.Qg4 lines it goes to d3 and aims at h7 (Module 7.3). Without it, a kingside attack is much harder.\n\nAfter the trade, White still has the dark-squared bishop, and Black has no piece of the same color to oppose it. So White's best hope is to use that bishop, often from a3."
    },
    {
      kind: 'walkthrough',
      title: 'Space on the kingside: 7.h4',
      intro: 'A different quiet move. White pushes the h-pawn to gain room near Black\'s king.',
      moves: H4,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: "White's choice",
          text: '6...Ne7. Black\'s kingside has lost its dark-squared bishop. White can try to use that with pawns as well as pieces.',
          marks: ['g7', 'h6']
        },
        13: {
          title: 'The h-pawn advances',
          text: '7.h4. The pawn grabs space. If it reaches h6, Black\'s kingside pawns are loosened. The h1-rook can also come out later via h3.',
          arrows: [['h4', 'h6', 'blue']]
        },
        14: {
          title: 'The queen develops',
          text: '7...Qc7. The queen develops and eyes e5.',
          arrows: [['c7', 'e5', 'red']]
        },
        15: {
          title: 'On to h5',
          text: '8.h5. One more step. Now h5–h6 is a real threat.',
          arrows: [['h5', 'h6', 'red']]
        },
        16: {
          title: 'Stop the pawn',
          text: '8...h6. Black puts a pawn on h6, so White\'s pawn can go no further. The h5-pawn still gives White kingside space, and White keeps a small edge.',
          arrows: [['h6', 'h5', 'green']],
          marks: ['h5']
        }
      }
    },
    {
      kind: 'tip',
      title: 'For White: the bishop on a3',
      body:
        "In all these quiet lines, White's dark-squared bishop is a trump: Black has no bishop that can challenge it. After a3–a4, the bishop can go to a3 and work on the a3–f8 diagonal, aimed at c5 and, behind it, at d6 and e7. Remember Module 7.2: put it there only when c3 is safe, or ...Qa5 and ...Qxc3+ may punish you."
    },
    {
      kind: 'history',
      title: 'Smyslov, Fischer and 7.a4',
      body:
        "Wikipedia notes that World Champions Vasily Smyslov and Bobby Fischer both used 7.a4 with success. It also says 7.Nf3 is not considered the most challenging line for Black. That fits what the engine shows: after 7.Nf3 b6 and ...Ba6, Black is fine."
    }
  ],
  takeaway:
    "Against quiet lines like 7.Nf3, Black can trade the problem bishop with ...b6 and ...Ba6, which also removes White's best attacking bishop. White's quiet plans are a4 and Ba3 with the dark-squared bishop, or h4–h5 for kingside space.",
  lookAhead: 'Module 7.6 looks at Black\'s alternatives: keeping the bishop with 5...Ba5, and the fourth-move tries 4...Ne7, 4...Qd7 and 4...b6.',
  drills: [
    {
      title: 'Trade the problem bishop',
      prompt: "You're Black. White has played the quiet 7.Nf3. Open a road for your c8-bishop, offer the trade, take back, and bring the knight round to c6.",
      moves: BA6,
      start: 13,
      side: 'black',
      hints: ['Move the b-pawn one square. Then the bishop goes to a6.', 'After Bxa6, take back with the knight. When the queen hits it, go back to b8, then to c6.'],
      success: '7...b6, 8...Ba6, 9...Nxa6, 10...Nb8 and 11...Nbc6. The problem bishop is gone and the position is level.'
    },
    {
      title: 'Grab kingside space',
      prompt: "You're White. Instead of 7.Qg4, push your h-pawn to gain space near Black's king.",
      moves: H4.split(' ').slice(0, 15).join(' '),
      start: 12,
      side: 'white',
      hints: ['Push the h-pawn two squares.', 'After ...Qc7, push it one more square.'],
      success: '7.h4 and 8.h5. Black usually answers 8...h6 to stop the pawn.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does Black play 7...b6 and 8...Ba6 here?',
      moves: BA6.split(' ').slice(0, 16).join(' '),
      orientation: 'black',
      choices: [
        { text: "To trade the problem c8-bishop for White's good light-squared bishop", correct: true, why: 'Right. Black swaps a piece blocked by its own pawns for one of White\'s best attackers.' },
        { text: 'To attack the a4-pawn', why: 'The a6-bishop does not attack a4: a4 is on the same file, and bishops move diagonally. It looks along the a6–f1 diagonal.' },
        { text: 'To prepare castling queenside', why: 'Black still has the b8-knight and the queen on the back rank. The point is the bishop trade.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9.Bxa6 Nxa6 10.Qe2, why does the knight go back to b8?',
      moves: BA6.split(' ').slice(0, 19).join(' '),
      orientation: 'black',
      choices: [
        { text: 'The queen attacks it, and from b8 it can reach c6', correct: true, why: 'Right. The knight on a6 had no defender. From c6 it will press on d4.' },
        { text: 'To guard the d7-square', why: 'Nothing threatens d7. The knight was attacked by the queen on e2.' },
        { text: 'To make room for the a-pawn', why: "Black's a-pawn is on a7 and has no plans. The knight moved because the queen attacked it." }
      ]
    },
    {
      type: 'plan',
      prompt: 'What is White hoping for with 7.h4 and 8.h5?',
      moves: H4.split(' ').slice(0, 15).join(' '),
      orientation: 'white',
      choices: [
        { text: "Kingside space, and h5–h6 to loosen Black's kingside pawns", correct: true, why: 'Right. That is why Black usually answers with ...h6, stopping the pawn on h5.' },
        { text: 'To open the h-file for a quick mate', why: 'There is no quick mate. The pawn gains space and may loosen the pawns near g7, but the game stays slow.' },
        { text: 'To prepare castling queenside', why: 'Pushing the h-pawn has nothing to do with castling. It is about kingside space.' }
      ]
    },
    {
      type: 'concept',
      prompt: "After the light-squared bishops are traded, which of White's pieces has no opponent of its own kind?",
      moves: BA6,
      orientation: 'white',
      choices: [
        { text: 'The dark-squared bishop on c1', correct: true, why: 'Right. Black gave up the dark-squared bishop on move 5, so no Black bishop can ever challenge it. White wants to use it, often from a3.' },
        { text: 'The f3-knight', why: 'Black has two knights. The piece with no rival is the c1-bishop.' },
        { text: 'The e2-queen', why: 'Black still has a queen. The piece without a rival is the dark-squared bishop.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move. White has played the quiet 7.Nf3. Which move starts the plan to trade the problem bishop?',
      moves: `${WINAWER_MAIN} Nf3`,
      orientation: 'black',
      choices: [
        { text: '7...b6', correct: true, why: 'Right. The pawn clears b7, and the c8-bishop can go to a6 next.' },
        { text: '7...Bd7', why: 'A fine developing move, but on d7 the bishop is still behind the e6-pawn. ...b6 and ...Ba6 trade it instead.' },
        { text: '7...f6', why: 'This hits e5, but it does nothing for the c8-bishop. ...b6 prepares ...Ba6.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 7.h4 Qc7 8.h5, why does Black play 8...h6?',
      moves: H4.split(' ').slice(0, 15).join(' '),
      orientation: 'black',
      choices: [
        { text: 'It stops h5–h6, so the pawn goes no further', correct: true, why: 'Right. The pawn on h6 blocks White\'s h-pawn, and Black\'s kingside stays in one piece.' },
        { text: 'It attacks the h5-pawn', why: 'A pawn on h6 attacks g5, not h5. It stops the h-pawn by standing in front of it.' },
        { text: 'It prepares ...g5', why: 'The point is simpler: ...h6 blocks the h-pawn so that h5–h6 never happens.' }
      ]
    }
  ],
  key: { name: 'Winawer 7.Nf3 b6: ...Ba6 trades the bad bishop', moves: BA6.split(' ').slice(0, 16).join(' '), orientation: 'black' },
  terms: [
    { term: 'Bad bishop', meaning: 'A bishop blocked by its own pawns standing on squares of its color, like the French c8-bishop behind e6 and d5.' },
    { term: 'Good bishop', meaning: 'A bishop whose own pawns stand on the other color, so its diagonals are open.' },
    { term: 'Space', meaning: 'Room to move pieces behind your pawns. Pawns pushed far up the board, like h5 or e5, gain space.' }
  ]
})
