import { defineModule } from '../../../types'
import { CLASSICAL, FORT_KNOX, RUBINSTEIN } from '../lines'

/** rub-4nd7 plus 7.Bd3 c5 (the start of rub-7bd3) */
const RUB_ROAD = `${RUBINSTEIN} Nd7 Nf3 Ngf6 Nxf6+ Nxf6 Bd3 c5`
/** fk-main up to 7...Ngf6 */
const FK_ROAD = `${FORT_KNOX} Bd3 Nd7 O-O Ngf6`
/** cla-burn up to 6...Bxf6: 4.Bg5 dxe4 5.Nxe4 Be7 6.Bxf6 Bxf6 */
const BURN = `${CLASSICAL} Bg5 dxe4 Nxe4 Be7 Bxf6 Bxf6`

export default defineModule({
  id: '5.7',
  title: 'Rubinstein or Fort Knox?',
  minutes: 10,
  level: 2,
  goals: [
    'Compare the two set-ups after 3...dxe4 4.Nxe4: knights first or bishop first',
    'Know what each side aims for in the middlegame',
    'Recognize the Burn, a cousin that comes from 3...Nf6'
  ],
  intro:
    "After 3...dxe4 4.Nxe4, Black has two solid set-ups: 4...Nd7 (the Rubinstein main line) and 4...Bd7 (Fort Knox). Both give White only a small edge. So how do they differ, and which one suits you? This module puts them side by side, and adds a close cousin from the Classical.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Knights first: the Rubinstein',
      intro: "Follow Black's c8-bishop. In this set-up it is the last piece to move.",
      moves: RUB_ROAD,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'The crossroads',
          text: '4.Nxe4. Black chooses here: knights first with 4...Nd7, or the bishop first with 4...Bd7. The engine gives White a small edge either way.',
          arrows: [['b8', 'd7', 'blue'], ['c8', 'd7', 'blue']]
        },
        8: {
          title: 'Knights first',
          text: '4...Nd7. Black prepares ...Ngf6 so a knight can take back on f6 (Module 5.2).',
          arrows: [['d7', 'f6', 'green']]
        },
        9: {
          title: 'White develops',
          text: '5.Nf3. The knight guards d4.',
          arrows: [['f3', 'd4', 'green']]
        },
        10: {
          title: 'The challenge',
          text: '5...Ngf6. The e4-knight is attacked.',
          arrows: [['f6', 'e4', 'red']]
        },
        11: {
          title: 'One pair of knights goes',
          text: '6.Nxf6+. White trades, which takes some of the tension out of the position.',
          arrows: [['f6', 'e8', 'red']]
        },
        12: {
          title: 'The bishop waits',
          text: "6...Nxf6. Black's pawns are healthy. But look at c8: the bishop hasn't moved, and the e6-pawn still blocks its path to the kingside.",
          marks: ['c8', 'e6']
        },
        13: {
          title: "White's plan",
          text: '7.Bd3. White aims at the kingside. Qe2, a bishop move and long castling often follow (Module 5.3).',
          arrows: [['d3', 'h7', 'blue']]
        },
        14: {
          title: 'Free first, bishop later',
          text: '7...c5. Black frees the game with the pawn break first. The c8-bishop comes out later, with ...Bd7 or with ...b6 and ...Bb7.',
          arrows: [['c5', 'd4', 'red'], ['c8', 'd7', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Bishop first: Fort Knox',
      intro: 'Same crossroads. This time the c8-bishop is the first piece out.',
      moves: FK_ROAD,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'The crossroads again',
          text: '4.Nxe4. This time Black starts with the problem piece.',
          marks: ['c8']
        },
        8: {
          title: 'Bishop first',
          text: '4...Bd7. The bishop uses d7 while the square is still empty.',
          arrows: [['d7', 'c6', 'blue']]
        },
        9: {
          title: 'White develops',
          text: '5.Nf3. The same move as before.',
          arrows: [['f3', 'd4', 'green']]
        },
        10: {
          title: 'The bishop is active',
          text: "5...Bc6. Both black knights are still at home, but the problem bishop is already active on the long diagonal, hitting e4.",
          arrows: [['c6', 'e4', 'red']]
        },
        11: {
          title: 'Defending e4',
          text: '6.Bd3. White defends the knight.',
          arrows: [['d3', 'e4', 'green']]
        },
        12: {
          title: 'Knights next',
          text: '6...Nd7. Now the knights come out, in the same order as in the Rubinstein.',
          arrows: [['g8', 'f6', 'blue']]
        },
        13: {
          title: 'White castles',
          text: '7.O-O. White is ready for action.',
          arrows: [['e1', 'g1', 'green']]
        },
        14: {
          title: 'Two attackers on e4',
          text: '7...Ngf6. Black plans ...Bxf3 or ...Bxe4 and then ...c6 (Module 5.5). From here Black must also know the 8.Neg5 trap (Module 5.6).',
          arrows: [['c6', 'e4', 'red'], ['f6', 'e4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Side by side',
      body:
        "**Rubinstein (4...Nd7).** Black trades a pair of knights and frees the game with ...c5. The c8-bishop comes out last, and Black keeps both bishops. White often plays Qe2, Bg5 and long castling, or c3 and Ne5.\n\n**Fort Knox (4...Bd7).** Black solves the bishop problem at once and usually trades it for a knight. White gets the two bishops, Black gets a wall of pawns on c6 and e6. Black must know the Neg5 tricks.\n\n**For White** the recipe is similar against both: keep the d4-pawn, develop quickly, use e5 for a knight, and look for tactics while Black's king is still in the center. Against Fort Knox, keep pieces on (8.Ng3) and watch for Neg5 chances."
    },
    {
      kind: 'walkthrough',
      title: 'A cousin: the Burn',
      intro: 'Black can also take on e4 one move later, after 3...Nf6. Module 6.8 teaches this line in full.',
      moves: BURN,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The Classical',
          text: '3...Nf6. Black develops and attacks e4 a second time (Chapter 6).',
          arrows: [['f6', 'e4', 'red'], ['d5', 'e4', 'red']]
        },
        7: {
          title: 'The pin',
          text: '4.Bg5. White pins the f6-knight to the queen on d8.',
          arrows: [['g5', 'f6', 'red'], ['f6', 'd8', 'yellow']]
        },
        8: {
          title: 'Now Black takes',
          text: '4...dxe4. This is the Burn. Black takes on e4, as in the Rubinstein, but with a knight already on f6 and White\'s bishop on g5.',
          marks: ['e4']
        },
        9: {
          title: 'The knight takes back',
          text: '5.Nxe4. The same pawn structure as in the Rubinstein: White has the d4-pawn, Black the e6-pawn.',
          marks: ['d4', 'e6']
        },
        10: {
          title: 'Breaking the pin',
          text: '5...Be7. The bishop steps between the knight and the queen.',
          arrows: [['e7', 'f6', 'green']]
        },
        11: {
          title: 'Bishop for knight',
          text: '6.Bxf6. White gives up the dark-squared bishop for the f6-knight.',
          marks: ['f6']
        },
        12: {
          title: 'Black has the two bishops',
          text: '6...Bxf6. Now it is Black who has the two bishops, the opposite of Fort Knox. White keeps a small edge. Module 6.8 also shows the more unbalanced 6...gxf6.',
          marks: ['c8', 'f6']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Which one should you play?',
      body:
        "Both are sound, and the engine rates them about the same. If you like simple, solid positions and don't mind a late c8-bishop, play the **Rubinstein**. If you want the problem bishop solved at once and are happy to give White the two bishops for a rock-solid wall, play **Fort Knox**. If you already play 3...Nf6 against 3.Nc3, the **Burn** gives you a similar game after 4.Bg5."
    }
  ],
  takeaway:
    'After 3...dxe4 4.Nxe4, the Rubinstein (4...Nd7) brings the knights out first and frees the game with ...c5; Fort Knox (4...Bd7) solves the problem bishop first and builds a wall with ...c6. White keeps a small edge in both. The Burn reaches a similar structure from 3...Nf6 4.Bg5.',
  lookAhead:
    'Chapter 6 turns to the Classical, 3...Nf6, where Black keeps the d5-pawn and White usually chooses between 4.e5 and 4.Bg5.',
  drills: [
    {
      title: 'The Rubinstein road',
      prompt: "You're Black. Play the Rubinstein main line: knights first, take back correctly on f6, then break against 7.Bd3.",
      moves: RUB_ROAD,
      start: 7,
      side: 'black',
      hints: ['The b8-knight goes first, then the g8-knight.', 'After 7.Bd3, hit d4 with your c-pawn.'],
      success: '4...Nd7, 5...Ngf6, 6...Nxf6 and 7...c5. The Rubinstein main line.'
    },
    {
      title: 'The Fort Knox road',
      prompt: "You're Black. Now play Fort Knox: bishop to the long diagonal first, then both knights.",
      moves: FK_ROAD,
      start: 7,
      side: 'black',
      hints: ['The c8-bishop goes to c6 in two moves.', 'Then ...Nd7 and ...Ngf6, attacking e4 twice.'],
      success: '4...Bd7, 5...Bc6, 6...Nd7 and 7...Ngf6. Fort Knox is set up.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the main difference between 4...Nd7 and 4...Bd7?',
      moves: RUBINSTEIN,
      orientation: 'black',
      choices: [
        { text: '4...Nd7 brings the knights out first; 4...Bd7 brings the problem bishop out first', correct: true, why: 'Right. In the Rubinstein the c8-bishop comes out last; in Fort Knox it is the first piece to move.' },
        { text: '4...Nd7 is sharp; 4...Bd7 is solid', why: 'Both are solid systems. The difference is the order: knights first or bishop first.' },
        { text: '4...Bd7 wins a pawn', why: 'No material changes hands. 4...Bd7 is about the c8-bishop, not about winning anything.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Which tactic must a Fort Knox player know above all?',
      choices: [
        { text: 'The 8.Neg5 sacrifices on e6 and f7', correct: true, why: 'Right. After 8.Neg5, both 8...h6? and 8...Be7? run into a knight sacrifice. 8...Bd6! is safe (Module 5.6).' },
        { text: 'The Bb5+ queen trap', why: 'That trap belongs to the Advance with Bd3 (Module 2.7). Fort Knox has its own danger: 8.Neg5.' },
        { text: 'The Greek Gift, Bxh7+', why: 'The Greek Gift is a theme for Chapter 8. In Fort Knox the knight jump Neg5 is the trick to know.' }
      ]
    },
    {
      type: 'name',
      prompt: 'Black took on e4 here too. Which line is this?',
      moves: `${CLASSICAL} Bg5 dxe4 Nxe4`,
      orientation: 'black',
      choices: [
        { text: 'The Burn', correct: true, why: 'Right. 3...Nf6 4.Bg5 dxe4: Black takes on e4 after White pins the knight. Module 6.8 covers it.' },
        { text: 'The Rubinstein', why: 'Close, but in the Rubinstein Black takes on move 3. Here Black played 3...Nf6 first, and White pinned with 4.Bg5.' },
        { text: 'Fort Knox', why: "Fort Knox needs ...Bd7 and ...Bc6. Black's c8-bishop hasn't moved here." }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Burn after 6.Bxf6 Bxf6, what does Black have that a Fort Knox player usually gives away?',
      moves: BURN,
      orientation: 'black',
      choices: [
        { text: 'The two bishops', correct: true, why: 'Right. White gave up the g5-bishop for the knight, so Black has both bishops. In Fort Knox it is usually Black who trades a bishop for a knight.' },
        { text: 'An extra pawn', why: 'Material is equal. A bishop was traded for a knight.' },
        { text: 'A pawn on d5', why: "Black's d-pawn was traded on e4, just as in the Rubinstein." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'How does the engine rate the Rubinstein (4...Nd7) and Fort Knox (4...Bd7)?',
      choices: [
        { text: 'About the same: White keeps a small edge in both', correct: true, why: 'Right. Both are solid, sound choices. Pick the one whose plans you like.' },
        { text: 'Fort Knox is clearly better for Black', why: 'The engine sees no big difference between them. White keeps a small edge in both.' },
        { text: 'Both lose by force for Black', why: 'Not at all. Both are solid systems that strong players use. White has only a small edge.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Rubinstein after 6.Nxf6+ Nxf6, which black piece usually comes out last?',
      moves: `${RUBINSTEIN} Nd7 Nf3 Ngf6 Nxf6+ Nxf6`,
      orientation: 'black',
      choices: [
        { text: 'The c8-bishop', correct: true, why: 'Right. Black first breaks with ...c5, develops the f8-bishop and castles. The c8-bishop follows with ...Bd7, or with ...b6 and ...Bb7.' },
        { text: 'The f8-bishop', why: 'The f8-bishop comes out early, to e7, d6 or c5, so Black can castle.' },
        { text: 'The f6-knight', why: 'That knight is already developed on f6.' }
      ]
    }
  ],
  key: { name: 'Rubinstein or Fort Knox: 4.Nxe4', moves: RUBINSTEIN, orientation: 'black' },
  terms: [
    { term: 'Set-up', meaning: 'A plan for where to put your pieces and pawns, which you can use against many different moves.' },
    { term: 'Burn Variation', meaning: '3.Nc3 Nf6 4.Bg5 dxe4, named after Amos Burn. Black takes on e4 after White pins the f6-knight.' },
    { term: 'Two bishops', meaning: 'Having both bishops when the opponent has given one up. Also called the bishop pair.' }
  ]
})
