import { defineModule } from '../../../types'
import { SCHEVENINGEN } from '../lines'

/** keres-6g4: 6.g4 h6 7.h4 Nc6 8.Rg1 d5 9.exd5 Nxd5 10.Nxd5 exd5 11.Be3 */
const KERES = `${SCHEVENINGEN} g4 h6 h4 Nc6 Rg1 d5 exd5 Nxd5 Nxd5 exd5 Be3`
/** keres-nxg4-trap: 6.g4 Nxg4?? 7.Qxg4 */
const TRAP = `${SCHEVENINGEN} g4 Nxg4 Qxg4`
/** 6...a6?! ignores the g-pawn: 7.g5 Nfd7 (engine-checked: White is clearly better) */
const IGNORE = `${SCHEVENINGEN} g4 a6 g5 Nfd7`

export default defineModule({
  id: '4.7',
  title: 'The Scheveningen small center and the Keres Attack',
  minutes: 11,
  level: 3,
  goals: [
    'Understand the Scheveningen "small center" with pawns on d6 and e6',
    "Meet the Keres Attack 6.g4 with ...h6, ...Nc6 and the central strike ...d5",
    'Never grab the g4-pawn: 6...Nxg4?? 7.Qxg4'
  ],
  intro:
    "After 5.Nc3, Black can also play 5...e6, the Scheveningen. The pawns on d6 and e6 make a compact little center. White's sharpest answer is to throw the g-pawn forward at once. What does 6.g4 threaten, why can't Black just take it, and how should Black hit back?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Keres Attack and the answer ...d5',
      intro: 'Watch the f6-knight: White wants to chase it away, and Black finds a way to save it with a counterattack.',
      moves: KERES,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'The crossroads',
          text: '5.Nc3. White defends e4. Black now chooses the Scheveningen set-up.',
          arrows: [['c3', 'e4', 'green']]
        },
        10: {
          title: 'The small center',
          text: '5...e6. Pawns on d6 and e6 control c5, d5, e5 and f5, so White\'s pieces can\'t easily settle there. The set-up is compact and flexible, but Black has less space.',
          marks: ['c5', 'd5', 'e5', 'f5']
        },
        11: {
          title: 'The Keres Attack',
          text: '6.g4. White threatens g5, chasing the f6-knight away from the center. The pawn looks loose, but the d1-queen guards it along the empty diagonal through e2 and f3.',
          arrows: [['g4', 'g5', 'blue'], ['d1', 'g4', 'green']],
          ann: '!'
        },
        12: {
          title: 'Slowing the pawn down',
          text: '6...h6. Now g5 can be met by ...hxg5. White needs more support before pushing.',
          arrows: [['h6', 'g5', 'green']]
        },
        13: {
          title: 'A second pawn',
          text: '7.h4. White adds the h-pawn, so the g5 push will work after all.',
          arrows: [['h4', 'g5', 'blue']]
        },
        14: {
          title: 'Developing with pressure',
          text: '7...Nc6. Black develops and adds pressure on the d4-knight.',
          arrows: [['c6', 'd4', 'red']]
        },
        15: {
          title: 'The rook joins',
          text: '8.Rg1. The rook guards the g4-pawn and backs up the push. g5 is coming next.',
          arrows: [['g1', 'g4', 'green'], ['g4', 'g5', 'blue']]
        },
        16: {
          title: 'Strike in the center',
          text: '8...d5. Black hits back in the middle instead of waiting. White has spent three moves (g4, h4 and Rg1) on the kingside, so opening the center now is the right answer.',
          arrows: [['d5', 'e4', 'red']],
          ann: '!'
        },
        17: {
          title: 'White takes',
          text: '9.exd5. White trades the e-pawn for the d-pawn.',
          marks: ['d5']
        },
        18: {
          title: 'The knight escapes',
          text: '9...Nxd5. The knight takes back and leaves f6, so g5 would no longer hit a knight.',
          marks: ['f6']
        },
        19: {
          title: 'Knights traded',
          text: '10.Nxd5. White swaps knights.',
          marks: ['d5']
        },
        20: {
          title: 'Open lines for Black',
          text: '10...exd5. The e-file is open, and the c8-bishop now sees all the way to g4.',
          arrows: [['c8', 'g4', 'blue']]
        },
        21: {
          title: 'A small edge',
          text: "11.Be3. White develops and guards d4. White is slightly better, but Black's pieces are free and the kingside pawn storm has lost its punch.",
          arrows: [['e3', 'd4', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Answer a wing attack in the center',
      body:
        "This is one of the oldest rules in chess: when your opponent attacks on a wing, strike in the center. White's g- and h-pawns have moved, and White's king is still in the middle. Opening the center with ...d5 makes those pawn moves look loose.\n\nThe Keres Attack is also why many players avoid 5...e6 and reach the Scheveningen set-up by a different road, via the Najdorf or the Taimanov. Module 4.8 shows those move orders."
    },
    {
      kind: 'walkthrough',
      title: 'The pawn grab that loses a piece',
      intro: 'The g4-pawn looks free. Count its defenders before you take it.',
      moves: TRAP,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The Scheveningen',
          text: '5...e6. Notice that the e6-pawn now stands on the c8-bishop\'s diagonal.',
          arrows: [['c8', 'e6', 'yellow']]
        },
        11: {
          title: 'A loose pawn?',
          text: '6.g4. The f6-knight attacks the pawn. Is anything guarding it?',
          arrows: [['f6', 'g4', 'red'], ['d1', 'g4', 'green']]
        },
        12: {
          title: 'The grab',
          text: '6...Nxg4. Black takes the pawn. But the d1-queen guards g4 through e2 and f3, which are both empty.',
          arrows: [['d1', 'g4', 'red']],
          ann: '??'
        },
        13: {
          title: 'A knight for a pawn',
          text: "7.Qxg4. The queen takes the knight. Black can't take back, because Black's own pawn on e6 blocks the c8-bishop. White has won a knight for a pawn.",
          marks: ['e6', 'g4'],
          ann: '!'
        }
      }
    },
    {
      kind: 'tip',
      title: 'Compare Module 4.1',
      body:
        "In Module 4.1, after 6.Be3 Ng4, the knight on g4 was safe, because the c8-bishop guarded it and 7.Qxg4? Bxg4 lost the queen. Here the pawn on e6 cuts that diagonal, so nothing guards g4. One pawn changes the whole tactic."
    },
    {
      kind: 'walkthrough',
      title: 'Ignoring the g-pawn',
      intro: 'What if Black just carries on with a normal move? See what g5 does to the knight.',
      moves: IGNORE,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'The Scheveningen',
          text: '5...e6. White starts the Keres Attack.',
          arrows: [['g2', 'g4', 'blue']]
        },
        11: {
          title: 'g5 is the threat',
          text: '6.g4. The pawn is one step from kicking the f6-knight.',
          arrows: [['g4', 'g5', 'blue']]
        },
        12: {
          title: 'A slow move',
          text: '6...a6. A useful move in many Sicilians, but it does nothing against g5.',
          ann: '?!'
        },
        13: {
          title: 'The knight is kicked',
          text: '7.g5. The pawn attacks the f6-knight, which has to move.',
          arrows: [['g5', 'f6', 'red']]
        },
        14: {
          title: 'Pushed back',
          text: '7...Nfd7. The knight goes back to d7, where it no longer guards d5 or e4. White has gained a lot of space and is clearly better.',
          marks: ['d5', 'e4']
        }
      }
    }
  ],
  takeaway:
    'The Scheveningen pawns on d6 and e6 are compact but give Black less space. Against the Keres Attack 6.g4, slow the pawn with ...h6, develop with ...Nc6, and strike with ...d5. Never take on g4: the queen guards it.',
  lookAhead: 'Next: the calmer Classical Scheveningen with 6.Be2, and the many move orders that lead to it.',
  drills: [
    {
      title: 'Meet the Keres Attack',
      prompt: "You're Black. White just played 6.g4. Slow the pawn down, develop, and when White's rook joins the attack, strike in the center.",
      moves: `${SCHEVENINGEN} g4 h6 h4 Nc6 Rg1 d5`,
      start: 11,
      side: 'black',
      hints: [
        'First stop g5 from coming with tempo: guard g5 with a pawn.',
        'Develop the queen\'s knight. After 8.Rg1, push a center pawn two squares.'
      ],
      success: '6...h6, 7...Nc6 and 8...d5! A wing attack is answered in the center.'
    },
    {
      title: 'Punish the pawn grab',
      prompt: "You're White in the Scheveningen. Start the Keres Attack, and if Black grabs your pawn, make it pay.",
      moves: TRAP,
      start: 10,
      side: 'white',
      hints: ['Push the g-pawn two squares.', 'After ...Nxg4, which of your pieces already guards g4?'],
      success: '6.g4 Nxg4?? 7.Qxg4. The queen was guarding g4 all along, and White is a knight for a pawn up.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Which squares do the d6- and e6-pawns control?',
      moves: SCHEVENINGEN,
      orientation: 'black',
      choices: [
        { text: 'c5, d5, e5 and f5', correct: true, why: 'Right. The d6-pawn covers c5 and e5, the e6-pawn covers d5 and f5.' },
        { text: 'd5 and e5 only', why: 'Each pawn covers two squares. Together they cover c5, d5, e5 and f5.' },
        { text: 'c5, e5, d4 and f4', why: 'Pawns attack one square diagonally forward. The e6-pawn covers d5 and f5, not d4 and f4.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. Why is 6...Nxg4 a blunder?',
      moves: `${SCHEVENINGEN} g4`,
      orientation: 'black',
      choices: [
        { text: 'The d1-queen guards g4, and the c8-bishop cannot help because the e6-pawn blocks it', correct: true, why: 'Exactly. 7.Qxg4 wins a knight for a pawn.' },
        { text: 'The knight on g4 gets pinned', why: "There's no pin. The knight is simply taken by the queen, and nothing can take back." },
        { text: "It isn't a blunder: Black wins a pawn", why: 'Count the defenders. The queen guards g4 along the d1–h5 diagonal.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just played 8.Rg1, and g5 is coming. What is best?',
      moves: `${SCHEVENINGEN} g4 h6 h4 Nc6 Rg1`,
      orientation: 'black',
      choices: [
        { text: '8...d5', correct: true, why: 'Right. A strike in the center. After 9.exd5 Nxd5 the knight has left f6, and White is only slightly better.' },
        { text: '8...h5', why: 'It tries to stop g5, but after 9.gxh5 Black has weakened the kingside and White is better.' },
        { text: '8...Nxd4', why: 'After 9.Qxd4 White keeps the attack going with g5, and White is better. Black needs a central strike.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'What is the main idea of the Keres Attack, 6.g4?',
      moves: `${SCHEVENINGEN} g4`,
      orientation: 'white',
      choices: [
        { text: 'To push g5 and drive the f6-knight away from the center', correct: true, why: 'Yes. Without that knight, Black has less control of d5 and e4, and White gains space.' },
        { text: 'To castle kingside quickly', why: 'Pushing the g-pawn would make a kingside castle less safe. White often castles queenside in these lines.' },
        { text: 'To win the h7-pawn', why: 'The pawn is aimed at the f6-knight, not at h7.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 6.Be3 Ng4 in the Classical, 7.Qxg4? loses the queen. Why does 7.Qxg4 win a piece after 6.g4 Nxg4 in the Scheveningen?',
      choices: [
        { text: 'In the Scheveningen, the e6-pawn blocks the c8-bishop, so nothing guards g4', correct: true, why: 'Right. In the Classical the c8-bishop guards g4; with a pawn on e6 it cannot.' },
        { text: 'In the Scheveningen, the queen is protected by the f-pawn', why: 'The f-pawn has nothing to do with it. The difference is the e6-pawn blocking the c8-bishop.' },
        { text: 'In the Scheveningen, Black has already castled', why: 'Black has not castled. The difference is that the e6-pawn blocks the c8-bishop.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does a central strike like 8...d5 work well against the Keres Attack?',
      choices: [
        { text: "White has spent moves on g4, h4 and Rg1, so White's center and king are not ready for a fight", correct: true, why: 'Yes. When your opponent attacks on a wing, opening the center punishes the time spent there.' },
        { text: '...d5 wins a pawn by force', why: 'It does not win material. After 9.exd5 Nxd5 10.Nxd5 exd5 the pawns are level.' },
        { text: "It traps White's rook on g1", why: 'The rook is not trapped. The point is that the center opens while White is busy on the kingside.' }
      ]
    }
  ],
  key: { name: 'Scheveningen: 5...e6, the small center', moves: SCHEVENINGEN, orientation: 'black' },
  terms: [
    { term: 'Scheveningen', meaning: 'The Open Sicilian with ...d6 and ...e6, named after a 1923 tournament in Scheveningen, near The Hague.' },
    { term: 'Small center', meaning: 'Pawns on d6 and e6. They control the squares in front of them without taking much space.' },
    { term: 'Wing attack', meaning: 'An attack with pawns and pieces on one side of the board, here the kingside.' }
  ]
})
