import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** exchange-7dxe5: 7.dxe5 dxe5 8.Qxd8 Rxd8 */
const EXCHANGE = `${CLASSICAL} dxe5 dxe5 Qxd8 Rxd8`
/** exchange-9nxe5: 9.Nxe5 Nxe4 10.Nxe4 Bxe5 (equal) */
const GRAB = `${EXCHANGE} Nxe5 Nxe4 Nxe4 Bxe5`
/** exchange-9nxe5-10f4-trap: 10.f4? Nxc3! 11.bxc3 Nd7 12.Be3 Nxe5 13.fxe5 Bxe5 */
const TRAP = `${EXCHANGE} Nxe5 Nxe4 f4 Nxc3 bxc3 Nd7 Be3 Nxe5 fxe5 Bxe5`

export default defineModule({
  id: '2.4',
  title: 'The "trap" that isn\'t: 9.Nxe5 Nxe4!',
  minutes: 10,
  level: 2,
  goals: [
    'Know the truth about 9.Nxe5: it is not a blunder, and it wins nothing',
    'Answer 9...Nxe4 with the simple 10.Nxe4 as White',
    'Punish 10.f4? or 10.Bf4? with 10...Nxc3! as Black'
  ],
  intro:
    "In the Exchange endgame the e5-pawn has no defender, so White can take it with 9.Nxe5. Many books call this a blunder because of 9...Nxe4. A strong engine disagrees. This module shows what is really true, and where the real trap is.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The grab that wins nothing',
      intro: 'The same trick as Module 2.2, now without queens. Count the material at the end.',
      moves: GRAB,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'A loose pawn',
          text: '8...Rxd8. The queens are off. Nothing defends the e5-pawn, and the f3-knight attacks it.',
          arrows: [['f3', 'e5', 'red']],
          marks: ['e5']
        },
        17: {
          title: 'White grabs',
          text: '9.Nxe5. White takes the pawn. This is the move many books call a mistake. Let us test that.',
          marks: ['e5']
        },
        18: {
          title: 'The knight takes e4',
          text: "9...Nxe4. Black wins the pawn back at once. With the f6-knight gone, the g7-bishop now attacks the e5-knight, and Black's knight hits c3.",
          arrows: [['g7', 'e5', 'red'], ['e4', 'c3', 'red']],
          ann: '!'
        },
        19: {
          title: 'The simple answer',
          text: '10.Nxe4. White takes the knight. This is the right move, and it keeps everything level.',
          marks: ['e4']
        },
        20: {
          title: 'Equal',
          text: "10...Bxe5. The bishop takes back. Each side has won a pawn and the knights are traded. The position is equal: White lost nothing, but the grab gained nothing either.",
          arrows: [['e5', 'b2', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Folklore and the truth',
      body:
        "Many books and websites say 9.Nxe5? loses for White and call 9...Nxe4 a trap. Checked with a strong engine, that is **not true**. After 10.Nxe4 Bxe5 the position is equal.\n\n9.Nxe5 only gets White into trouble if White goes wrong again on move 10. The tempting mistake is to keep the e5-knight defended with **10.f4?** or **10.Bf4?**. Here is why that fails."
    },
    {
      kind: 'walkthrough',
      title: 'The real trap: 10.f4?',
      intro: "Two knights are attacked at once. Watch which side solves its problem better.",
      moves: TRAP,
      start: 18,
      orientation: 'black',
      steps: {
        18: {
          title: 'Two knights attacked',
          text: "9...Nxe4. White's knight on e5 is attacked by the g7-bishop. Black's knight on e4 is attacked by the c3-knight.",
          arrows: [['g7', 'e5', 'red'], ['c3', 'e4', 'red']]
        },
        19: {
          title: 'Guarding the wrong knight',
          text: "10.f4. The pawn defends the e5-knight. It looks natural, but White hasn't taken Black's knight, and that knight is about to do damage.",
          arrows: [['f4', 'e5', 'green']],
          ann: '?'
        },
        20: {
          title: 'Take the attacker',
          text: '10...Nxc3. Black takes the knight that was attacking it. White must take back with the b-pawn.',
          arrows: [['b2', 'c3', 'blue']],
          ann: '!'
        },
        21: {
          title: 'Broken pawns',
          text: "11.bxc3. Now White has two pawns on the c-file, c3 and c4, and no pawns on the b- or d-file to help them. Doubled, isolated pawns are easy targets.",
          marks: ['c3', 'c4']
        },
        22: {
          title: 'The knight is stuck',
          text: "11...Nd7. The e5-knight is attacked twice and defended once. And it can't run: if it leaves e5, ...Bxc3+ hits the king and the a1-rook.",
          arrows: [['d7', 'e5', 'red'], ['g7', 'e5', 'red'], ['c3', 'a1', 'yellow']],
          ann: '!'
        },
        23: {
          title: 'No help in time',
          text: '12.Be3. White develops, but the e5-knight still has only one defender.',
          marks: ['e5']
        },
        24: {
          title: 'Black takes',
          text: '12...Nxe5. Black takes the knight.',
          marks: ['e5']
        },
        25: {
          title: 'Pawn takes back',
          text: '13.fxe5. White recaptures. The new pawn on e5 has no defender.',
          arrows: [['g7', 'e5', 'red']]
        },
        26: {
          title: 'A pawn up, and more',
          text: "13...Bxe5. Black wins the pawn. Black is a pawn up, White's queenside pawns are a wreck, and ...Bxc3+ is threatened. Black is much better.",
          arrows: [['e5', 'c3', 'red']],
          marks: ['c3', 'c4']
        }
      }
    },
    {
      kind: 'warning',
      title: '10.Bf4? fails the same way',
      body:
        'Defending the knight with the bishop, 10.Bf4?, is just as bad. Again 10...Nxc3! 11.bxc3 breaks the pawns, and the weak c3-pawn soon falls with check. The lesson for White: after 9...Nxe4, take the knight with 10.Nxe4.'
    }
  ],
  takeaway:
    '9.Nxe5 Nxe4 is not a trap: after 10.Nxe4 Bxe5 the game is equal. The real trap is 10.f4? or 10.Bf4?, when 10...Nxc3! wrecks White\'s pawns and wins a pawn.',
  lookAhead:
    "Module 2.5 turns the tables: a natural Black move in the same endgame, 9...Nc6?, runs into a pin on the d-file.",
  drills: [
    {
      title: 'Counterpunch',
      prompt: "You're Black. White kept the knight defended with 10.f4?. Your knight on e4 is attacked. Find the move that wrecks White's pawns, then win a pawn.",
      moves: TRAP,
      start: 19,
      side: 'black',
      hints: [
        'Your knight on e4 is attacked by the c3-knight. Take it first.',
        "After bxc3, attack the e5-knight a second time. If it ever moves, ...Bxc3+ hits the king and the rook."
      ],
      success: "10...Nxc3!, 11...Nd7, 12...Nxe5 and 13...Bxe5. You're a pawn up and White's c-pawns are doubled and isolated."
    },
    {
      title: 'Keep the balance',
      prompt: "You're White. You took on e5 and Black answered 9...Nxe4. Find the move that keeps the game level.",
      moves: `${EXCHANGE} Nxe5 Nxe4 Nxe4`,
      start: 18,
      side: 'white',
      hints: ['Both knights are attacked. Which one can you take right now?'],
      success: '10.Nxe4! After 10...Bxe5 material is level and the position is equal. 10.f4? or 10.Bf4? would run into 10...Nxc3!.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Is 9.Nxe5 a blunder in the Exchange Variation?',
      moves: `${EXCHANGE} Nxe5`,
      orientation: 'white',
      choices: [
        { text: 'No. After 9...Nxe4 10.Nxe4 Bxe5 the game is equal', correct: true, why: 'Right. The pawn comes straight back, but White loses nothing either.' },
        { text: 'Yes. 9...Nxe4 wins a piece', why: 'Count again: the knights are traded on e4, then ...Bxe5 takes the e5-knight. Material ends level.' },
        { text: 'No. It wins a pawn for White', why: 'Black takes the e4-pawn at once with 9...Nxe4, so the grab gains nothing.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just played 10.f4?. What is the strongest reply?',
      moves: `${EXCHANGE} Nxe5 Nxe4 f4`,
      orientation: 'black',
      choices: [
        { text: '10...Nxc3', correct: true, why: 'Yes. After 11.bxc3 White has doubled, isolated c-pawns, and the e5-knight soon falls.' },
        { text: '10...Bxe5', why: 'After 11.fxe5 Nxc3 12.bxc3 Black has given up the g7-bishop. Black is still slightly better, but 10...Nxc3! wins much more.' },
        { text: '10...Nd6', why: "The knight retreats safely, but White's pawns stay healthy. 10...Nxc3! does much more." }
      ]
    },
    {
      type: 'concept',
      prompt: "After 10.f4 Nxc3 11.bxc3 Nd7, why can't White's e5-knight simply retreat?",
      moves: `${EXCHANGE} Nxe5 Nxe4 f4 Nxc3 bxc3 Nd7`,
      orientation: 'black',
      choices: [
        { text: 'Then ...Bxc3+ hits the king and the a1-rook', correct: true, why: 'Exactly. The knight is blocking the long diagonal. Once it moves, the g7-bishop wins the c3-pawn with check and then the rook.' },
        { text: 'It has no safe square to go to', why: 'It does have squares, such as f3 and d3. The problem is what the g7-bishop does once the knight moves.' },
        { text: 'It is pinned to the White king', why: "The knight isn't pinned to the king: the king is on e1, not on the long diagonal. It is the c3-pawn and the a1-rook that are exposed." }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move. Which move keeps the balance?',
      moves: `${EXCHANGE} Nxe5 Nxe4`,
      orientation: 'white',
      choices: [
        { text: '10.Nxe4', correct: true, why: 'Yes. Take the knight that is attacking c3 and f2. After 10...Bxe5 the game is equal.' },
        { text: '10.f4', why: "10...Nxc3! 11.bxc3 wrecks White's pawns, and Black soon wins a pawn." },
        { text: '10.Bf4', why: '10...Nxc3! again. After 11.bxc3 the weak c3-pawn soon falls with check.' }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'After 9.Nxe5 Nxe4 in the Exchange Variation, which White 10th move is a real mistake?',
      choices: [
        { text: '10.f4', correct: true, why: "Right. It guards the e5-knight but leaves Black's knight alive: 10...Nxc3! wins a pawn and breaks White's pawns." },
        { text: '10.Nxe4', why: 'This is the correct move. After 10...Bxe5 the position is equal.' },
        { text: 'None: 9.Nxe5 has already lost', why: "That's the folklore. The engine shows 9.Nxe5 is fine as long as White plays 10.Nxe4." }
      ]
    },
    {
      type: 'concept',
      prompt: "After 10.f4? Nxc3 11.bxc3, what is wrong with White's pawns?",
      moves: `${EXCHANGE} Nxe5 Nxe4 f4 Nxc3 bxc3`,
      orientation: 'black',
      choices: [
        { text: 'The c-pawns are doubled and isolated', correct: true, why: 'Yes. Two pawns on c3 and c4, with no b- or d-pawn to protect them. They are easy targets.' },
        { text: 'The kingside pawns are broken', why: 'The g2- and h2-pawns are fine. The damage is on the queenside, on c3 and c4.' },
        { text: 'Nothing: the pawns are healthy', why: 'Look at c3 and c4: two pawns on one file, and no pawn on a neighboring file to help them.' }
      ]
    }
  ],
  key: { name: 'Exchange Variation trap: 10.f4? Nxc3!', moves: `${EXCHANGE} Nxe5 Nxe4 f4 Nxc3`, orientation: 'black' },
  terms: [
    { term: 'Doubled pawns', meaning: 'Two pawns of the same color on the same file. They cannot protect each other.' },
    { term: 'Isolated pawn', meaning: 'A pawn with no friendly pawns on the files next to it, so only pieces can defend it.' },
    { term: 'Long diagonal', meaning: "The a1–h8 diagonal, where Black's g7-bishop stands in the King's Indian." }
  ]
})
