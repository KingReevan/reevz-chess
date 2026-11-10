import { defineModule } from '../../../types'
import { FORT_KNOX } from '../lines'

/** fk-main: 6.Bd3 Nd7 7.O-O Ngf6 8.Ng3 Be7 9.Re1 O-O */
const MAIN = `${FORT_KNOX} Bd3 Nd7 O-O Ngf6 Ng3 Be7 Re1 O-O`
/** fk-bxf3: 8.Ng3 Bxf3 9.Qxf3 c6 10.c3 Be7 */
const BXF3 = `${FORT_KNOX} Bd3 Nd7 O-O Ngf6 Ng3 Bxf3 Qxf3 c6 c3 Be7`

export default defineModule({
  id: '5.5',
  title: 'Fort Knox: the bishop to c6',
  minutes: 11,
  level: 2,
  goals: [
    'Put the problem bishop on c6 with 4...Bd7 and 5...Bc6',
    'Trade it for a knight and build the ...c6 fortress',
    'Know what White gets: the two bishops and a small edge'
  ],
  intro:
    "In the Rubinstein, Black's c8-bishop is the last piece to come out, because the e6-pawn blocks it. Fort Knox solves that problem first. Before anything else, the bishop goes to c6 on the long diagonal. What does it do there, and what does White get in return?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The bishop goes to c6',
      intro: 'Follow the c8-bishop, then count the attackers on the e4-knight.',
      moves: MAIN,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'A second plan',
          text: "4.Nxe4. Instead of 4...Nd7, Black can deal with the problem bishop first.",
          marks: ['c8']
        },
        8: {
          title: 'The bishop steps out',
          text: '4...Bd7. The bishop uses the d7-square while it is still empty. It is heading for c6.',
          arrows: [['d7', 'c6', 'blue']]
        },
        9: {
          title: 'White develops',
          text: '5.Nf3. The knight develops and guards d4.',
          arrows: [['f3', 'd4', 'green']]
        },
        10: {
          title: 'On the long diagonal',
          text: "5...Bc6. This is Fort Knox. On c6 the bishop isn't blocked by the e6-pawn, and it attacks the e4-knight, which has no defender.",
          arrows: [['c6', 'e4', 'red']]
        },
        11: {
          title: 'Defending the knight',
          text: '6.Bd3. The bishop develops and defends the e4-knight.',
          arrows: [['d3', 'e4', 'green']]
        },
        12: {
          title: 'The usual knight move',
          text: '6...Nd7. As in the Rubinstein, the b8-knight goes to d7 so that a knight can take back if White ever trades on f6.',
          arrows: [['g8', 'f6', 'blue']]
        },
        13: {
          title: 'White castles',
          text: "7.O-O. White's king is safe.",
          arrows: [['e1', 'g1', 'green']]
        },
        14: {
          title: 'Two attackers',
          text: '7...Ngf6. Now the e4-knight is attacked twice, by the bishop and the knight, and defended only once, by the d3-bishop. White must do something about it.',
          arrows: [['c6', 'e4', 'red'], ['f6', 'e4', 'red'], ['d3', 'e4', 'green']]
        },
        15: {
          title: 'The knight steps aside',
          text: '8.Ng3. White keeps the knight rather than trade it. (8.Neg5 is a tricky alternative: Module 5.6 shows it.)',
          arrows: [['e4', 'g3', 'blue']]
        },
        16: {
          title: 'Ready to castle',
          text: '8...Be7. Black develops the last minor piece.',
          arrows: [['e8', 'g8', 'blue']]
        },
        17: {
          title: 'The rook to e1',
          text: "9.Re1. The rook takes the half-open e-file, where it looks at the e6-pawn.",
          arrows: [['e1', 'e6', 'red']]
        },
        18: {
          title: 'Solid',
          text: '9...O-O. Black is castled and solid. The c6-bishop presses on the f3-knight along the long diagonal. White keeps a small edge.',
          arrows: [['c6', 'f3', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Building the fortress: ...Bxf3 and ...c6',
      intro: 'Black can also trade the bishop for a knight at once. Watch the b7-pawn after the trade.',
      moves: BXF3,
      start: 15,
      orientation: 'black',
      steps: {
        15: {
          title: 'The same position',
          text: '8.Ng3. This time Black trades the bishop straight away.',
          arrows: [['c6', 'f3', 'red']]
        },
        16: {
          title: 'Bishop for knight',
          text: '8...Bxf3. The bishop takes the f3-knight. The problem bishop is gone for good, but White will get the two bishops.',
          marks: ['f3']
        },
        17: {
          title: 'The queen takes back',
          text: "9.Qxf3. Now the long diagonal is open, and the queen attacks the b7-pawn, which has no defender.",
          arrows: [['f3', 'b7', 'red']],
          marks: ['b7']
        },
        18: {
          title: 'The fortress',
          text: "9...c6. The pawn blocks the diagonal and saves b7. Together with e6 it guards d5, so no white piece can settle there. This compact wall of pawns is the fortress.",
          arrows: [['c6', 'd5', 'green'], ['e6', 'd5', 'green']],
          marks: ['d5']
        },
        19: {
          title: 'White makes d4 solid',
          text: '10.c3. White supports the d4-pawn and keeps the center solid.',
          arrows: [['c3', 'd4', 'green']]
        },
        20: {
          title: 'Rock-solid',
          text: '10...Be7. Black will castle next. The position is very hard to break into. In return, White has the two bishops and a small edge.',
          arrows: [['e8', 'g8', 'blue']],
          marks: ['d3', 'c1']
        }
      }
    },
    {
      kind: 'text',
      title: 'What each side wants',
      body:
        "**Black** solves the problem bishop at once. On c6 it is active, and it is usually traded for a knight, with ...Bxf3 or ...Bxe4, depending on where White's knights go. Then ...c6 builds a wall on c6 and e6 that guards d5. Black aims for a safe, solid game and frees it later with ...c5 or ...e5.\n\n**White** gets the **two bishops** after the trade, and more space with the d4-pawn. White's plans are to keep the center solid (c3), grab more space (c4), put a knight or rook on the e-file, and slowly use the bishops. White should also watch for tactical chances while Black is not yet castled. Module 5.6 shows the most famous one."
    },
    {
      kind: 'history',
      title: 'Why "Fort Knox"?',
      body:
        "Fort Knox is the US gold depository, a fortress that is very hard to break into. The name fits Black's compact pawns on c6 and e6. Wikipedia notes that the line was often played by Alexander Rustemov."
    }
  ],
  takeaway:
    "In Fort Knox, 4...Bd7 and 5...Bc6 put the problem bishop on the long diagonal, where it is often traded for a knight. After ...Bxf3 Qxf3, play ...c6 at once: it saves b7 and builds the fortress. White gets the two bishops and a small edge.",
  lookAhead:
    "Module 5.6 shows the one trap every Fort Knox player must know: White's 8.Neg5, and why ...h6 is a mistake there.",
  drills: [
    {
      title: 'Set up Fort Knox',
      prompt: "You're Black. White has just taken back on e4. Bring the problem bishop to c6, then get both knights out so the e4-knight is attacked twice.",
      moves: `${FORT_KNOX} Bd3 Nd7 O-O Ngf6`,
      start: 7,
      side: 'black',
      hints: ['The c8-bishop goes to c6 in two steps.', 'Then the b8-knight to d7, and the g8-knight to f6.'],
      success: '4...Bd7, 5...Bc6, 6...Nd7 and 7...Ngf6. The e4-knight is attacked twice.'
    },
    {
      title: 'Trade and build the wall',
      prompt: "You're Black. White's knight has retreated to g3. Trade your bishop for the f3-knight, then make sure the queen can't take on b7, and develop.",
      moves: BXF3,
      start: 15,
      side: 'black',
      hints: ['Take the knight on f3.', "After 9.Qxf3, the queen hits b7. Block the diagonal with a pawn."],
      success: '8...Bxf3 9.Qxf3 c6 10.c3 Be7. The fortress stands, and Black will castle next.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "What does Fort Knox do about Black's problem bishop?",
      moves: FORT_KNOX,
      orientation: 'black',
      choices: [
        { text: 'It puts it on c6, on the long diagonal, and often trades it for a knight', correct: true, why: 'Right. On c6 the e6-pawn no longer blocks it, and a trade on f3 or e4 gets rid of it for good.' },
        { text: 'It keeps it at home and frees it later with ...e5', why: 'That is not Fort Knox. Here the bishop comes out on moves 4 and 5, before anything else.' },
        { text: "It trades it for White's light-squared bishop with ...b6 and ...Ba6", why: "That is a different cure, used in the Winawer and the Advance. In Fort Knox the bishop goes to c6." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 7...Ngf6, how many times is the e4-knight attacked and defended?',
      moves: `${FORT_KNOX} Bd3 Nd7 O-O Ngf6`,
      orientation: 'black',
      choices: [
        { text: 'Attacked twice, defended once', correct: true, why: 'Right. The c6-bishop and the f6-knight attack it; only the d3-bishop defends it. White has to react.' },
        { text: 'Attacked twice, defended twice', why: "The f3-knight does not defend e4. Only the d3-bishop does, so White must move the knight or add a defender." },
        { text: 'Attacked once, defended once', why: 'Count again: the c6-bishop and the f6-knight both hit e4.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just taken back on f3 with the queen. What should Black play?',
      moves: `${FORT_KNOX} Bd3 Nd7 O-O Ngf6 Ng3 Bxf3 Qxf3`,
      orientation: 'black',
      choices: [
        { text: '9...c6', correct: true, why: 'Right. The pawn blocks the queen\'s diagonal, saves b7, and builds the fortress with e6.' },
        { text: '9...Be7', why: 'Natural, but 10.Qxb7 wins a pawn: the queen\'s diagonal to b7 is open now that the c6-bishop is gone.' },
        { text: '9...Rb8', why: "It guards b7, but the rook becomes passive and White's edge grows. ...c6 saves the pawn and builds the wall." }
      ]
    },
    {
      type: 'concept',
      prompt: "After 8...Bxf3 9.Qxf3 c6 10.c3 Be7, what does White have in return for Black's solid position?",
      moves: BXF3,
      orientation: 'white',
      choices: [
        { text: 'The two bishops', correct: true, why: "Right. Black traded the c-bishop for a knight, so White has two bishops and a knight against Black's bishop and two knights. White keeps a small edge." },
        { text: 'An extra pawn', why: 'Material is equal. Bishop was traded for knight.' },
        { text: 'A passed d-pawn', why: "The d4-pawn is not passed: Black's c6- and e6-pawns stand on the files next to it, in front of it." }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Which set-up has Black chosen?',
      moves: FORT_KNOX,
      orientation: 'black',
      choices: [
        { text: 'Fort Knox', correct: true, why: 'Right. 3...dxe4 4.Nxe4 Bd7 5.Nf3 Bc6: the bishop goes to the long diagonal at once.' },
        { text: 'The Rubinstein main line with 4...Nd7', why: "That line starts with 4...Nd7 and ...Ngf6. Here Black's first moves were with the bishop." },
        { text: 'The Burn', why: 'The Burn comes from 3...Nf6 4.Bg5 dxe4. Here Black took on e4 on move 3.' },
        { text: 'The Winawer', why: 'The Winawer is 3...Bb4. Here Black traded on e4 instead.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 8...Bxf3 9.Qxf3, why is the b7-pawn in danger?',
      moves: `${FORT_KNOX} Bd3 Nd7 O-O Ngf6 Ng3 Bxf3 Qxf3`,
      orientation: 'black',
      choices: [
        { text: 'The c6-bishop has left the long diagonal, so the queen on f3 attacks b7', correct: true, why: 'Right. Nothing guards b7, so Black plays ...c6 to block the diagonal.' },
        { text: 'The d3-bishop attacks b7', why: 'The d3-bishop is on the light squares too, but it does not reach b7 from d3. The danger comes from the queen on f3.' },
        { text: 'The rook on a1 can take it', why: "White's a1-rook has no open file toward b7. The queen's long diagonal is the problem." }
      ]
    }
  ],
  key: { name: 'Fort Knox: 5...Bc6', moves: FORT_KNOX, orientation: 'black' },
  terms: [
    { term: 'Fort Knox', meaning: "The Rubinstein line 4...Bd7 and 5...Bc6, where Black puts the problem bishop on the long diagonal and builds a wall with ...c6." },
    { term: 'Long diagonal', meaning: 'One of the two longest diagonals on the board, a8–h1 or a1–h8. Here the bishop uses a8–h1.' },
    { term: 'Two bishops', meaning: 'Having both bishops when the opponent has given one up. Also called the bishop pair. They are strong in open positions.' },
    { term: 'Fortress', meaning: 'A position so well protected that the opponent cannot break in, like Black\'s pawns on c6 and e6 here.' }
  ]
})
