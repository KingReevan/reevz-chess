import { defineModule } from '../../../types'
import { CLASSICAL_MAIN } from '../lines'

/** cla-main: 7...O-O 8.Nf3 c5 9.Qd2 Nc6 10.O-O-O c4 (the Stahlberg) */
const STAHLBERG = `${CLASSICAL_MAIN} O-O Nf3 c5 Qd2 Nc6 O-O-O c4`
/** cla-f5-early: 11.f5?! b5! 12.Nxb5 Rb8 13.Nd6 f6 */
const EARLY = `${STAHLBERG} f5 b5 Nxb5 Rb8 Nd6 f6`
/** cla-f5-prepared up to 15.f5: 11.g4 b5 12.Nxb5 Rb8 13.Nd6 Nb6 14.Qe3 Bd7 15.f5 (the key position) */
const LEVER = `${STAHLBERG} g4 b5 Nxb5 Rb8 Nd6 Nb6 Qe3 Bd7 f5`
/** cla-f5-prepared: 15...f6 */
const PREPARED = `${LEVER} f6`

export default defineModule({
  id: '8.5',
  title: "White's f4–f5 lever",
  minutes: 11,
  level: 3,
  goals: [
    "See how f4–f5 attacks e6, the base of Black's chain",
    'Prepare the lever with g4, and see why 11.f5?! too early fails to ...b5!',
    'As Black, meet f5 with the counter-break ...f6'
  ],
  intro:
    "Black attacks the base of White's chain with ...c5. White has a matching weapon: when White's pawns stand on e5 and f4, the push f4–f5 attacks e6, the base of Black's chain. It can open the f-file toward Black's king. But a lever played too early only gives Black time. This module shows the wrong moment and the right one.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Too early: 11.f5?! b5!',
      intro: "The Classical main line with the Stahlberg, 10...c4 (Module 6.4). White has castled long, Black has closed the queenside. Watch the race.",
      moves: EARLY,
      start: 20,
      orientation: 'black',
      steps: {
        20: {
          title: 'The Stahlberg',
          text: "10...c4. Black closes the queenside and plans ...b5–b4 against White's king on c1. White plays on the kingside, where the e5- and f4-pawns give it space.",
          arrows: [['b7', 'b5', 'blue']],
          marks: ['c1']
        },
        21: {
          title: 'The lever, at once',
          text: '11.f5. The pawn attacks e6. If Black does nothing, fxe6 opens the f-file, or f5–f6 hits the queen and g7. But White spends a move on it before anything else is ready.',
          arrows: [['f5', 'e6', 'red']],
          ann: '?!'
        },
        22: {
          title: 'Counterattack first',
          text: "11...b5. Black ignores the lever and offers a pawn to open lines toward White's king. Taking on f5 instead would be a mistake: after 11...exf5? 12.Nxd5 White wins material.",
          arrows: [['b5', 'b4', 'blue']],
          ann: '!'
        },
        23: {
          title: 'White takes',
          text: '12.Nxb5. White is a pawn up. But the b-file is now half-open for Black, right next to White\'s king.',
          marks: ['b2']
        },
        24: {
          title: 'A rook on the b-file',
          text: '12...Rb8. The rook attacks the b5-knight, which has no defender, and lines up against b2.',
          arrows: [['b8', 'b5', 'red']]
        },
        25: {
          title: 'The knight finds d6',
          text: '13.Nd6. The knight jumps to a strong square, guarded by the e5-pawn.',
          arrows: [['e5', 'd6', 'green']],
          marks: ['d6']
        },
        26: {
          title: 'Hit the support',
          text: "13...f6. Black answers the lever with its own break. The f6-pawn hits e5, the pawn that holds the d6-knight. e5 is now attacked three times and defended twice. The engine calls it level: White's early f5 has thrown away the edge.",
          arrows: [['f6', 'e5', 'red'], ['c6', 'e5', 'red'], ['d7', 'e5', 'red']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'text',
      title: 'What the lever does',
      body:
        "With pawns on e5 and f4, White's f-pawn is one step from Black's chain. **f4–f5** hits e6, the base. If Black lets White take on e6, the f-file opens for White's rooks and Black's center loosens. If the pawn gets to f6, it hits g7 and anything on e7.\n\nBut a pawn lever costs a move, and here the kings are on opposite sides. Black's ...b5–b4 attack is also coming, so every move counts. The fix is **preparation**: play g4 first. Then, if Black ever takes ...exf5, White recaptures gxf5 and the pawn stays on f5. The same e5–f4 pawns appear in the Steinitz, 4.e5 Nfd7 5.f4 (Module 6.2), so the lever is part of that system too."
    },
    {
      kind: 'walkthrough',
      title: 'Prepared: 11.g4 and 15.f5',
      intro: 'Same position after 10...c4. This time White prepares the lever before pushing.',
      moves: PREPARED,
      start: 20,
      orientation: 'white',
      steps: {
        20: {
          title: 'The same moment',
          text: '10...c4. Black is ready for ...b5. White picks a move that helps the f5 push.',
          marks: ['f5']
        },
        21: {
          title: 'Support first',
          text: '11.g4. The g-pawn now guards f5. When f4–f5 comes, ...exf5 can be met by gxf5, and the pawn stays on f5.',
          arrows: [['g4', 'f5', 'green']]
        },
        22: {
          title: "Black's attack",
          text: '11...b5. Black starts the same queenside attack as before.',
          arrows: [['b5', 'b4', 'blue']]
        },
        23: {
          title: 'Take the pawn',
          text: '12.Nxb5. White takes the pawn, as before.',
          marks: ['b5']
        },
        24: {
          title: 'The b-file',
          text: '12...Rb8. The rook attacks the b5-knight.',
          arrows: [['b8', 'b5', 'red']]
        },
        25: {
          title: 'The knight on d6',
          text: '13.Nd6. The knight goes to its strong square, guarded by the e5-pawn.',
          arrows: [['e5', 'd6', 'green']]
        },
        26: {
          title: 'Toward a4',
          text: "13...Nb6. The knight heads for a4, close to White's king, and clears d7 for the c8-bishop.",
          arrows: [['b6', 'a4', 'blue']]
        },
        27: {
          title: 'The queen steps up',
          text: '14.Qe3. The queen leaves the d-file, keeps guarding d4, and stays near both wings.',
          arrows: [['e3', 'd4', 'green']]
        },
        28: {
          title: 'The bishop develops',
          text: '14...Bd7. The c8-bishop comes out at last. From d7 it also guards e6.',
          arrows: [['d7', 'e6', 'green']]
        },
        29: {
          title: 'Now the lever',
          text: '15.f5. With g4 behind it, the push is a real threat: f5–f6 would hit the queen and g7, and fxe6 would open the f-file. If Black ignores it, White is clearly better.',
          arrows: [['f5', 'e6', 'red'], ['g4', 'f5', 'green']],
          ann: '!'
        },
        30: {
          title: 'The counter-break',
          text: "15...f6. Black's best answer again: hit e5 and keep the f-file closed. White keeps the small edge it had before the lever, instead of throwing it away as in the first walkthrough.",
          arrows: [['f6', 'e5', 'red']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'tip',
      title: "Black's rules against f4–f5",
      body:
        "**1.** Don't take on f5 if it costs you the d5-pawn: after ...exf5, the d5-pawn loses its e6 guard, and a knight on c3 can take it.\n\n**2.** Answer the lever with ...f6. It hits e5, which holds White's whole kingside and often a knight on d6.\n\n**3.** With kings on opposite sides, keep your own attack going. If White pushes f5 too early, ...b5 comes first."
    }
  ],
  takeaway:
    "f4–f5 attacks e6, the base of Black's chain, and can open the f-file. Played too early, as 11.f5?! b5!, it lets Black's counterattack arrive first and throws away White's edge. Prepared with g4, it is a real threat. Black's answer is the counter-break ...f6.",
  lookAhead:
    "Next: what happens to Black's light-squared bishop when the queens come off. Module 8.6 looks at the bad French bishop in endgames.",
  drills: [
    {
      title: 'Prepare, then push',
      prompt: "You're White in the Stahlberg after 10...c4. Support f5 with a pawn first, grab the b5-pawn, put the knight on its strong square, step the queen to e3, then push the lever.",
      moves: LEVER,
      start: 20,
      side: 'white',
      hints: [
        'The g-pawn goes two squares. After ...b5, take the pawn with the knight, and after ...Rb8, the knight jumps to d6.',
        'Then 14.Qe3, and after 14...Bd7, 15.f5.'
      ],
      success: '11.g4, 12.Nxb5, 13.Nd6, 14.Qe3 and 15.f5. Now the lever is a real threat.'
    },
    {
      title: 'Punish the early lever',
      prompt: "You're Black. White has just pushed 11.f5 too early. Counterattack on the queenside, chase the knight with your rook, and hit the head of White's chain.",
      moves: EARLY,
      start: 21,
      side: 'black',
      hints: [
        'Push the b-pawn two squares. Don\'t take on f5.',
        '11...b5, 12...Rb8, and after 13.Nd6, the f-pawn goes to f6.'
      ],
      success: '11...b5 12.Nxb5 Rb8 13.Nd6 f6. Black has counterplay, and the position is level.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Which Black pawn does the push f4–f5 attack?',
      choices: [
        { text: "The e6-pawn, the base of Black's chain", correct: true, why: 'Right. A pawn on f5 attacks e6 and g6. Hitting the base is the same idea as Black\'s ...c5 against d4.' },
        { text: 'The d5-pawn', why: 'A pawn on f5 attacks e6 and g6, not d5. But if the e6-pawn disappears, d5 loses its guard.' },
        { text: 'The g7-pawn', why: 'From f5 the pawn attacks e6 and g6. It would only hit g7 after a second push to f6.' }
      ]
    },
    {
      type: 'move',
      prompt: "Black to move. White has just played 11.f5. What is Black's best reply?",
      moves: `${STAHLBERG} f5`,
      orientation: 'black',
      choices: [
        { text: '11...b5', correct: true, why: 'Right. The counterattack comes first. After 12.Nxb5 Rb8 13.Nd6 f6 the position is level.' },
        { text: '11...exf5', why: 'The d5-pawn loses its e6 guard: 12.Nxd5! hits the queen, and White wins material.' },
        { text: '11...a6', why: 'Too slow. White gets time for the attack and is clearly better.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Why does White play 11.g4 before pushing f4–f5?',
      moves: `${STAHLBERG} g4`,
      orientation: 'white',
      choices: [
        { text: 'So that ...exf5 can be met by gxf5, keeping a pawn on f5', correct: true, why: 'Right. With g4 behind it, the lever cannot simply be traded off.' },
        { text: 'To give White\'s king a safe square on g3', why: "White's king is on c1, on the queenside. g4 is about supporting f5." },
        { text: 'To attack the knight on f6', why: 'There is no knight on f6: Black\'s knights are on d7 and c6. g4 supports the f5 push.' }
      ]
    },
    {
      type: 'move',
      prompt: "Black to move. White has just played the prepared 15.f5. What is Black's best answer?",
      moves: LEVER,
      orientation: 'black',
      choices: [
        { text: '15...f6', correct: true, why: 'Right. Black hits e5 and keeps the f-file closed. White keeps only a small edge.' },
        { text: '15...exf5', why: 'After 16.gxf5 the pawn stays on f5 and White\'s attack gets stronger. This is why White played g4.' },
        { text: '15...a5', why: 'Ignoring the lever lets White push on with f5–f6 or a queen move to f4, and White is clearly better.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'What did 11.f5?! cost White in the Stahlberg?',
      moves: `${STAHLBERG} f5`,
      orientation: 'white',
      choices: [
        { text: "Its edge: Black's ...b5 counterattack came first, and the position became level", correct: true, why: 'Right. With 11.g4 or 11.h4 instead, White keeps a small edge.' },
        { text: 'A piece, to a tactic', why: 'Nothing is lost by force. The problem is timing, not material.' },
        { text: 'Nothing: it is the main move', why: 'The engine prefers 11.h4 or 11.g4. After 11.f5 b5! White has thrown away the edge.' }
      ]
    },
    {
      type: 'plan',
      prompt: "What is Black's standard answer to White's f4–f5 lever in these structures?",
      choices: [
        { text: '...f6, hitting e5 and keeping the f-file closed', correct: true, why: 'Right. It attacks the head of White\'s chain, which also supports a knight on d6.' },
        { text: '...exf5 at once', why: 'Often the d5-pawn loses its guard, or White just takes back with the g-pawn. ...f6 is the standard answer.' },
        { text: '...g6, to block the f-pawn', why: 'A pawn on g6 can be attacked by f5 itself and weakens the dark squares. ...f6 is the answer.' }
      ]
    }
  ],
  key: { name: 'Classical: 15.f5, the prepared lever', moves: LEVER, orientation: 'white' },
  terms: [
    { term: 'Lever', meaning: 'A pawn move that attacks an enemy pawn, offering to trade and open lines. f4–f5 against e6 is one.' },
    { term: 'Counter-break', meaning: 'A pawn break made in answer to the opponent\'s, like ...f6 against f4–f5.' },
    { term: 'Opposite-side castling', meaning: 'The kings castle on different wings. Both sides attack with pawns, and the faster attack usually wins.' }
  ]
})
