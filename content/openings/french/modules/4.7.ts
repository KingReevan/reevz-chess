import { defineModule } from '../../../types'
import { TARRASCH } from '../lines'

/** tar-3be7: 3...Be7 4.Ngf3 Nf6 5.e5 Nfd7 6.Bd3 c5 7.c3 b6 8.O-O Ba6 */
const BE7 = `${TARRASCH} Be7 Ngf3 Nf6 e5 Nfd7 Bd3 c5 c3 b6 O-O Ba6`
/** tar-3be7-bd3: 4.Bd3 c5 5.dxc5 Nf6 6.Qe2 O-O 7.Ngf3 a5 */
const BD3 = `${TARRASCH} Be7 Bd3 c5 dxc5 Nf6 Qe2 O-O Ngf3 a5`
/** tar-3be7-bd3 up to 7.Ngf3 (White drill) */
const BD3_WHITE = `${TARRASCH} Be7 Bd3 c5 dxc5 Nf6 Qe2 O-O Ngf3`

export default defineModule({
  id: '4.7',
  title: "Morozevich's 3...Be7",
  minutes: 10,
  level: 2,
  goals: [
    'Understand 3...Be7 as a waiting move that keeps Black flexible',
    "Play Black's plan ...c5, ...b6 and ...Ba6 to trade the problem bishop",
    "Know White's try 4.Bd3 c5 5.dxc5, and how Black wins the pawn back"
  ],
  intro:
    "Most French moves commit to a plan: ...c5, ...Nf6 or ...dxe4. 3...Be7 commits to almost nothing. It develops a piece and waits to see what White does. The line is linked with the Russian grandmaster Alexander Morozevich, and Wikipedia calls it a fashionable line among top grandmasters in recent years. What is the point, and how can White react?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main line: ...b6 and ...Ba6',
      intro: "Watch Black's c8-bishop. By move 8 it is out, and offering a trade.",
      moves: BE7,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The Tarrasch',
          text: '3.Nd2. Black can strike with 3...c5 or 3...Nf6. Instead, Black waits.',
          arrows: [['d2', 'e4', 'green']]
        },
        6: {
          title: 'A waiting move',
          text: "3...Be7. The bishop develops to a modest square. Black keeps ...c5, ...Nf6 and ...dxe4 in reserve and lets White commit first.",
          arrows: [['c7', 'c5', 'blue'], ['g8', 'f6', 'blue']]
        },
        7: {
          title: 'The natural answer',
          text: '4.Ngf3. White develops. The g1-knight is now on f3, so White can no longer use the Ne2 set-up of Module 4.6 without losing time.',
          marks: ['e2']
        },
        8: {
          title: 'Now the knight',
          text: '4...Nf6. Black attacks e4 a second time. With the bishop already on e7, Black is close to castling.',
          arrows: [['f6', 'e4', 'red'], ['d5', 'e4', 'red']]
        },
        9: {
          title: 'White pushes past',
          text: '5.e5. White gains space and kicks the knight, as in the closed Tarrasch.',
          arrows: [['e5', 'f6', 'red']]
        },
        10: {
          title: 'The knight retreats',
          text: '5...Nfd7. From d7 the knight supports ...c5.',
          arrows: [['d7', 'c5', 'blue']]
        },
        11: {
          title: 'The attacking bishop',
          text: "6.Bd3. White's best minor piece goes to its best diagonal, aiming at h7.",
          arrows: [['d3', 'h7', 'blue']]
        },
        12: {
          title: 'Hit the base',
          text: '6...c5. Black attacks d4, the base of the chain.',
          arrows: [['c5', 'd4', 'red']]
        },
        13: {
          title: 'Support d4',
          text: '7.c3. The c-pawn backs up d4, just as in Module 4.1.',
          arrows: [['c3', 'd4', 'green']]
        },
        14: {
          title: "Morozevich's idea",
          text: '7...b6. The pawn steps aside, so the c8-bishop can come out to a6.',
          arrows: [['c8', 'a6', 'blue']]
        },
        15: {
          title: 'White castles',
          text: '8.O-O. White\'s king is safe.',
          arrows: [['e1', 'g1', 'green']]
        },
        16: {
          title: 'Offer the trade',
          text: '8...Ba6. The bishop attacks the d3-bishop, which nothing defends. Black offers to trade its problem bishop for White\'s best attacking piece. White keeps a small but clear edge.',
          arrows: [['a6', 'd3', 'red']],
          marks: ['d3']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why 3...Be7?',
      body:
        "**A useful move that commits to nothing.** The bishop usually goes to e7 anyway. By playing it first, Black waits for White to show a plan, then chooses ...c5, ...Nf6 or ...dxe4. After 4.Ngf3, White's knight is on f3 instead of e2, which changes White's usual closed set-up.\n\n**The problem bishop.** In a locked French center, Black's c8-bishop is shut in by the pawn on e6. The plan ...b6 and ...Ba6 trades it for White's d3-bishop, the piece that aims at Black's king. Module 1.7 showed this cure; here it is part of the main line.\n\n**For White**, the simple 4.Ngf3 and a normal closed set-up keep a small edge. The sharper try is 4.Bd3, which aims to show that ...Be7 came too early."
    },
    {
      kind: 'walkthrough',
      title: "White's try: 4.Bd3 c5 5.dxc5",
      intro: 'White takes on c5 at once and hopes the e7-bishop will look out of place.',
      moves: BD3,
      start: 5,
      orientation: 'white',
      steps: {
        5: {
          title: 'The Tarrasch',
          text: '3.Nd2. The same start.',
          arrows: [['d2', 'e4', 'green']]
        },
        6: {
          title: 'The waiting move',
          text: '3...Be7. This time White tries to punish it.',
          marks: ['e7']
        },
        7: {
          title: 'Bishop first',
          text: '4.Bd3. White develops the bishop first and guards e4 a second time. The g1-knight waits.',
          arrows: [['d3', 'e4', 'green']]
        },
        8: {
          title: 'Strike anyway',
          text: '4...c5. Black hits d4 as usual.',
          arrows: [['c5', 'd4', 'red']]
        },
        9: {
          title: 'Take on c5',
          text: '5.dxc5. White takes. If the bishop takes back now, it has spent two moves (f8–e7–c5) to reach a square it could reach in one.',
          arrows: [['e7', 'c5', 'blue']],
          marks: ['c5']
        },
        10: {
          title: 'Develop first',
          text: '5...Nf6. Black does not hurry to take back. The knight develops and attacks e4, which is now attacked twice and defended twice.',
          arrows: [['f6', 'e4', 'red'], ['d5', 'e4', 'red']]
        },
        11: {
          title: 'A third defender',
          text: '6.Qe2. The queen guards e4 a third time.',
          arrows: [['e2', 'e4', 'green']]
        },
        12: {
          title: 'Castle',
          text: '6...O-O. Black\'s king is safe, and Black is still a pawn down for the moment.',
          marks: ['c5']
        },
        13: {
          title: 'The knight comes out',
          text: '7.Ngf3. White develops the last kingside piece.',
          arrows: [['g1', 'f3', 'green']]
        },
        14: {
          title: 'No b4',
          text: '7...a5. The pawn stops b2–b4, which would support the c5-pawn. Black plans ...Na6 and ...Nxc5 to win it back. White has at most a small edge.',
          arrows: [['a5', 'b4', 'green'], ['b8', 'a6', 'blue'], ['a6', 'c5', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Waiting moves need a follow-up',
      body:
        "A waiting move is only good if it is useful in every line. ...Be7 is useful almost everywhere, because the bishop rarely has a better square. That is the test for any waiting move: would you play it anyway in most of the lines that can follow?"
    }
  ],
  takeaway:
    "3...Be7 develops and waits. Against 4.Ngf3, Black plays ...Nf6, ...c5, ...b6 and ...Ba6 to trade the problem bishop, and White keeps a small edge. Against 4.Bd3 c5 5.dxc5, Black develops first, stops b4 with ...a5 and wins the pawn back later.",
  lookAhead:
    "Next: Black's rarer third moves. Module 4.8 shows the Guimard 3...Nc6, the waiting move 3...a6, and 3...dxe4, which leads to a Rubinstein.",
  drills: [
    {
      title: "Black: Morozevich's plan",
      prompt: "You're Black against 3.Nd2. Make the waiting move with your f8-bishop, develop the king's knight, retreat it when kicked, hit d4, then prepare and play the bishop trade on a6.",
      moves: BE7,
      start: 5,
      side: 'black',
      hints: [
        '3...Be7, then 4...Nf6. After 5.e5, the knight goes to d7. Then 6...c5.',
        'After 7.c3, push the b-pawn one square. After 8.O-O, put the bishop on a6.'
      ],
      success: '3...Be7, 4...Nf6, 5...Nfd7, 6...c5, 7...b6 and 8...Ba6. The problem bishop is out, offering a trade.'
    },
    {
      title: "White: try to punish ...Be7",
      prompt: "You're White. Black has played 3...Be7. Develop your f1-bishop first, take on c5 when Black hits d4, add a third defender to e4 with your queen, then develop the g1-knight.",
      moves: BD3_WHITE,
      start: 6,
      side: 'white',
      hints: ['Start with 4.Bd3. After 4...c5, take with the d-pawn.', 'After 5...Nf6, the queen goes to e2. Then 7.Ngf3.'],
      success: '4.Bd3, 5.dxc5, 6.Qe2 and 7.Ngf3. Black will need a few moves to win the c5-pawn back.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the main idea of 3...Be7?',
      moves: `${TARRASCH} Be7`,
      orientation: 'black',
      choices: [
        { text: 'A useful waiting move: Black keeps ...c5, ...Nf6 and ...dxe4 in reserve', correct: true, why: 'Right. The bishop usually goes to e7 anyway, so Black loses nothing by playing it first.' },
        { text: 'To pin one of White\'s knights', why: 'A bishop on e7 pins nothing. It simply develops and waits.' },
        { text: 'To attack the e4-pawn', why: 'The e7-bishop does not attack e4. Black hits e4 later with ...Nf6.' }
      ]
    },
    {
      type: 'plan',
      prompt: "Black has just played 7...b6. What is the plan?",
      moves: `${TARRASCH} Be7 Ngf3 Nf6 e5 Nfd7 Bd3 c5 c3 b6`,
      orientation: 'black',
      choices: [
        { text: "...Ba6, trading the problem bishop for White's d3-bishop", correct: true, why: 'Yes. On a6 the bishop attacks the d3-bishop, which nothing defends.' },
        { text: '...Bb7, to attack the e4-pawn', why: 'White has no pawn on e4: it went to e5. And on b7 the bishop would hit Black\'s own d5-pawn.' },
        { text: '...a5 and ...a4, to attack White\'s king', why: "White's king is still on e1 and will castle kingside, far from those pawns. ...b6 is about the c8-bishop." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does Black play 7...a5 in this position?',
      moves: BD3,
      orientation: 'black',
      choices: [
        { text: 'To stop b2–b4, so White cannot hold on to the extra c5-pawn', correct: true, why: 'Right. Then Black can win c5 back with ...Na6 and ...Nxc5.' },
        { text: 'To attack the a2-pawn', why: 'The a5-pawn does not attack a2. It controls b4.' },
        { text: "To open the a-file for Black's rook at once", why: 'The a-file is still closed by White\'s a2-pawn. The point is to control b4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 4.Bd3 c5 5.dxc5, why is taking back with the bishop at once a small loss of time?',
      moves: `${TARRASCH} Be7 Bd3 c5 dxc5`,
      orientation: 'black',
      choices: [
        { text: 'The bishop would use two moves (f8–e7–c5) to reach a square it could reach in one', correct: true, why: 'Yes. That is why Black develops with 5...Nf6 first and wins the pawn back later.' },
        { text: 'The bishop would be trapped on c5', why: 'It would not be trapped. The issue is only the lost time.' },
        { text: 'It is illegal because the bishop is pinned', why: 'The e7-bishop is not pinned. It can take, but it costs a tempo.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: '3.Nd2 Be7 is linked with which player?',
      moves: `${TARRASCH} Be7`,
      orientation: 'black',
      choices: [
        { text: 'Alexander Morozevich', correct: true, why: 'Yes. The line is linked with the Russian grandmaster Alexander Morozevich.' },
        { text: 'Siegbert Tarrasch', why: 'Tarrasch gave his name to 3.Nd2, White\'s move.' },
        { text: 'Akiba Rubinstein', why: 'The Rubinstein is 3...dxe4 (Chapter 5).' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is the bishop trade on a6 good for Black?',
      moves: BE7,
      orientation: 'black',
      choices: [
        { text: "Black's c8-bishop is shut in by the e6-pawn, while White's d3-bishop aims at Black's king", correct: true, why: "Right. Black trades its worst minor piece for one of White's best." },
        { text: 'It wins a pawn', why: 'No material is won. The trade is about the quality of the pieces.' },
        { text: 'It opens the e-file for Black', why: 'The e-file stays closed by the e5- and e6-pawns. The trade is about the bishops.' }
      ]
    }
  ],
  key: { name: 'Morozevich: 3...Be7', moves: `${TARRASCH} Be7`, orientation: 'black' },
  terms: [
    { term: 'Waiting move', meaning: 'A useful move that does not commit to a plan, so the opponent has to show theirs first.' },
    { term: 'Bad bishop', meaning: "A bishop hemmed in by its own pawns on squares of its color, like Black's c8-bishop behind the e6- and d5-pawns." },
    { term: 'Problem bishop', meaning: "The French name for Black's c8-bishop, which the e6-pawn shuts in. Black often trades it with ...b6 and ...Ba6." }
  ]
})
