import { defineModule } from '../../../types'
import { RAUZER } from '../lines'

/** rauzer: 6.Bg5 e6 7.Qd2 */
const MAIN = `${RAUZER} e6 Qd2`
/** rauzer-a6: 7...a6 8.O-O-O Bd7 9.f4 Be7 10.Nf3 b5 11.Bxf6 gxf6 */
const A6 = `${MAIN} a6 O-O-O Bd7 f4 Be7 Nf3 b5 Bxf6 gxf6`
/** rauzer-6g6: 6...g6?! 7.Bxf6 exf6 */
const G6 = `${RAUZER} g6 Bxf6 exf6`
/** rauzer-6e5: 6...e5? 7.Bxf6 gxf6 8.Nf5 Bxf5 9.exf5 */
const E5 = `${RAUZER} e5 Bxf6 gxf6 Nf5 Bxf5 exf5`

export default defineModule({
  id: '4.2',
  title: 'The Richter–Rauzer: Bg5 and doubled pawns',
  minutes: 11,
  level: 2,
  goals: [
    'Understand what 6.Bg5 threatens, and why it is not a pin',
    'Weigh the trade Bxf6 gxf6: broken pawns against the bishop pair',
    'Avoid two typical mistakes: 6...g6?! and 6...e5?'
  ],
  intro:
    "In Module 4.1, a bishop on e3 got chased by ...Ng4. So White puts it on g5 instead, where a knight jump like ...Ng4 cannot hit it. From g5 the bishop eyes the f6-knight. What exactly does it threaten, and what does Black get if White carries out the threat?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'What 6.Bg5 is for',
      intro: 'Look at the diagonal from g5 to d8 at every step. What stands on it?',
      moves: MAIN,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'The Classical position',
          text: 'Black has just played 5...Nc6. White wants a developing move for the c1-bishop that ...Ng4 cannot hit.',
          arrows: [['c1', 'g5', 'blue']]
        },
        11: {
          title: '6.Bg5: the Richter–Rauzer',
          text: "6.Bg5. The bishop attacks the f6-knight and threatens Bxf6, which would double Black's f-pawns. It is not a pin: the e7-pawn stands behind the knight, so moving the knight would only expose a well-guarded pawn.",
          arrows: [['g5', 'f6', 'red']],
          marks: ['e7']
        },
        12: {
          title: 'The queen guards f6',
          text: "6...e6. Now e7 is empty, so the d8-queen guards f6: Bxf6 could be met by ...Qxf6, with no doubled pawns. The flip side is that the knight is now pinned to the queen, so Black usually plays ...Be7 soon.",
          arrows: [['d8', 'f6', 'green'], ['g5', 'd8', 'yellow']]
        },
        13: {
          title: 'Ready to castle long',
          text: '7.Qd2. The queen leaves d1 so White can castle queenside. Next come O-O-O and often f4. This is the main line of the Richter–Rauzer.',
          arrows: [['e1', 'c1', 'blue'], ['f2', 'f4', 'blue']]
        }
      }
    },
    {
      kind: 'history',
      title: 'Two names, one attack',
      body:
        'Kurt Richter introduced 6.Bg5 against the Classical. Vsevolod Rauzer added the plan with Qd2 and O-O-O. That is why the line carries both names: the Richter–Rauzer. This course sometimes shortens it to "the Rauzer".'
    },
    {
      kind: 'text',
      title: 'Bxf6 gxf6: a trade-off',
      body:
        "Sooner or later White often plays **Bxf6**, and Black takes back with the g-pawn. White gives up a bishop for a knight. In return, Black's kingside pawns are broken: two f-pawns on f7 and f6, and an h-pawn with no neighbor. A black king on the kingside would never be fully safe.\n\nBlack gets something too: the **bishop pair**, a half-open g-file for a rook, and an f6-pawn that guards e5. So the doubled pawns are a trade-off, not simply a weakness."
    },
    {
      kind: 'walkthrough',
      title: 'The trade on f6',
      intro: 'One of the main lines. Watch why White picks this moment to take on f6.',
      moves: A6,
      start: 17,
      orientation: 'white',
      steps: {
        17: {
          title: 'White adds f4',
          text: "After 7...a6 8.O-O-O Bd7, White plays 9.f4. White's king is castled, and the f-pawn supports a later e4–e5. It also gives the g5-bishop a pawn defender.",
          arrows: [['f4', 'e5', 'blue'], ['f4', 'g5', 'green']]
        },
        18: {
          title: 'The pin is broken',
          text: '9...Be7. The bishop develops and steps between the knight and the queen. Now ...Qxf6 is no longer possible, so Bxf6 would force Black to take with the bishop or the g-pawn.',
          arrows: [['f8', 'e7', 'green']]
        },
        19: {
          title: 'The d-file opens',
          text: '10.Nf3. The knight steps back to support e4–e5. It also clears the d-file, so the queen now looks straight at the d6-pawn, which the e7-bishop defends.',
          arrows: [['f3', 'e5', 'blue'], ['d2', 'd6', 'red'], ['e7', 'd6', 'green']]
        },
        20: {
          title: 'Black hits back',
          text: "10...b5. Black gains space on the queenside, where White's king lives. The next idea is ...b4, kicking the c3-knight away from the e4-pawn.",
          arrows: [['b5', 'b4', 'blue']],
          marks: ['c3', 'e4']
        },
        21: {
          title: 'White takes first',
          text: '11.Bxf6. White removes the f6-knight before ...b4 comes. Without that knight, chasing the c3-knight would no longer win the e4-pawn.',
          arrows: [['g5', 'f6', 'red']]
        },
        22: {
          title: 'Broken pawns, two bishops',
          text: "11...gxf6. Black must take with the g-pawn, because 11...Bxf6? drops the d6-pawn to 12.Qxd6. Black has the bishop pair and the half-open g-file, White has the healthier pawns, and White is slightly better.",
          arrows: [['g8', 'g2', 'blue']],
          marks: ['f6', 'f7', 'h7']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '6...g6?!: a Dragon with broken pawns',
      intro: 'Bg5 also stops Black from setting up a Dragon. Here is why.',
      moves: G6,
      start: 11,
      orientation: 'white',
      steps: {
        11: {
          title: 'The bishop is on g5',
          text: '6.Bg5. The bishop eyes the f6-knight. Watch what happens if Black now plays the Dragon move ...g6.',
          arrows: [['g5', 'f6', 'yellow']]
        },
        12: {
          title: 'The g-pawn leaves',
          text: '6...g6. The g-pawn has left g7. If White takes on f6, the only pawn that can take back is the e-pawn.',
          marks: ['g7'],
          ann: '?!'
        },
        13: {
          title: 'White takes at once',
          text: '7.Bxf6. White trades bishop for knight right away.',
          marks: ['f6']
        },
        14: {
          title: 'A broken Dragon',
          text: "7...exf6. The f-pawns are doubled, and the d6-pawn is now isolated: no black pawn is left on the c- or e-file. A bishop on g7 would also run into its own pawn on f6. White is better.",
          arrows: [['g7', 'f6', 'yellow']],
          marks: ['d6', 'f6']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '6...e5?: a hole on d5',
      intro: 'Kicking the d4-knight looks active. Count who can still guard d5 afterward.',
      moves: E5,
      start: 11,
      orientation: 'white',
      steps: {
        11: {
          title: 'The bishop is on g5',
          text: '6.Bg5. This time Black reacts in the center.',
          arrows: [['g5', 'f6', 'yellow']]
        },
        12: {
          title: 'The knight is kicked',
          text: "6...e5. The pawn attacks the d4-knight. But Black's c-pawn is gone and the e-pawn has moved past e6, so no black pawn guards d5 any more.",
          arrows: [['e5', 'd4', 'red']],
          marks: ['d5'],
          ann: '?'
        },
        13: {
          title: 'Remove the guard',
          text: "7.Bxf6. First White removes the f6-knight, which guards d5. Taking back with the queen, 7...Qxf6?, is worse: 8.Ndb5 threatens a knight fork on c7.",
          arrows: [['g5', 'f6', 'red']],
          ann: '!'
        },
        14: {
          title: 'Broken pawns',
          text: '7...gxf6. Black keeps the queen at home, but the kingside pawns are broken.',
          marks: ['f6', 'f7']
        },
        15: {
          title: 'The knight jumps forward',
          text: '8.Nf5. Instead of retreating, the knight jumps to f5, where the e4-pawn guards it. From there it hits the d6-pawn.',
          arrows: [['f5', 'd6', 'red'], ['e4', 'f5', 'green']]
        },
        16: {
          title: 'Black takes the knight',
          text: '8...Bxf5. Black gets rid of the annoying knight, but has to give up the light-squared bishop to do it.',
          marks: ['f5']
        },
        17: {
          title: 'The d5 hole',
          text: "9.exf5. The c3-knight is ready to land on d5, and no black pawn can chase it away. Black's pawns on d6, e5 and f6 also stand on dark squares and block Black's own dark-squared bishop. White is clearly better.",
          arrows: [['c3', 'd5', 'green']],
          marks: ['d5']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Check what stands behind the piece',
      body:
        "Before you call something a pin, look at the squares behind the attacked piece. After 6.Bg5 the e7-pawn shields the queen, so there is no pin, only the threat of Bxf6. After 6...e6 the queen is exposed, so now the knight really is pinned. One pawn move changed everything."
    }
  ],
  takeaway:
    "6.Bg5 threatens Bxf6, which breaks Black's kingside pawns but hands Black the bishop pair. Black answers 6...e6 so the queen guards f6. 6...g6?! and 6...e5? both let Bxf6 do lasting damage.",
  lookAhead: 'Next: White castles queenside and Black often keeps the king in the middle or castles short. Module 4.3 shows the race that follows.',
  drills: [
    {
      title: 'Punish 6...e5?',
      prompt: "You're White. Black just kicked your knight with 6...e5?. Don't retreat: take control of d5.",
      moves: E5,
      start: 12,
      side: 'white',
      hints: [
        'Remove the black piece that guards d5.',
        'After ...gxf6, put your knight on a square where the e4-pawn guards it and it hits d6.'
      ],
      success: '7.Bxf6 gxf6 8.Nf5 Bxf5 9.exf5. The d5-square is yours for good, and White is clearly better.'
    },
    {
      title: 'Play the Richter–Rauzer',
      prompt: "You're White in the Classical. Put your bishop where the f6-knight can't chase it, then get ready to castle queenside.",
      moves: MAIN,
      start: 10,
      side: 'white',
      hints: ['The bishop goes to a square on the same diagonal as the d8-queen.', 'After 6...e6, clear the d1-square with the queen.'],
      success: '6.Bg5 e6 7.Qd2. The main line of the Richter–Rauzer. O-O-O comes next.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'White has just played 6.Bg5. Is the f6-knight pinned?',
      moves: RAUZER,
      orientation: 'black',
      choices: [
        { text: 'No. The e7-pawn stands behind it, so moving the knight only exposes a guarded pawn', correct: true, why: 'Right. The diagonal runs g5, f6, e7, d8, and the e7-pawn blocks it. The threat is Bxf6, not a pin.' },
        { text: 'Yes, to the queen on d8', why: 'The e7-pawn blocks the line from g5 to d8. Only after ...e6 does the queen stand right behind the knight.' },
        { text: 'Yes, to the king on e8', why: 'The king is not on that diagonal. From g5 the line runs f6, e7, d8.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6.Bg5 e6, why does White usually not take on f6 at once?',
      moves: `${RAUZER} e6`,
      orientation: 'white',
      choices: [
        { text: 'The queen now guards f6, so Black could take back with ...Qxf6 and avoid doubled pawns', correct: true, why: 'Yes. With e7 empty, the d8-queen sees f6. White keeps Bxf6 for later, once ...Be7 has blocked the queen.' },
        { text: 'Bxf6 would lose a piece', why: 'Bxf6 is a fair trade of bishop for knight. The point is that ...Qxf6 keeps Black\'s pawns healthy.' },
        { text: 'The g5-bishop is pinned', why: "Nothing pins the g5-bishop. It is free to take on f6, but ...Qxf6 would leave Black's pawns intact." }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Black has just played 6...e5?. What is strongest?',
      moves: `${RAUZER} e5`,
      orientation: 'white',
      choices: [
        { text: '7.Bxf6', correct: true, why: 'Right. Removing the f6-knight, the only piece guarding d5, comes first. After 7...gxf6 8.Nf5 White is clearly better.' },
        { text: '7.Nf3', why: 'The knight retreats, Black plays ...Be7 and gets a normal game. White misses the chance to take control of d5.' },
        { text: '7.Ndb5', why: 'After 7...a6 the knight has to go back to a3, on the edge. Taking on f6 first is much stronger.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Black has just taken back with 11...gxf6. What did Black get in return for the broken pawns?',
      moves: A6,
      orientation: 'black',
      choices: [
        { text: 'The bishop pair and a half-open g-file', correct: true, why: 'Exactly. White traded a bishop for a knight, and the g-file is now half-open for a black rook.' },
        { text: 'An extra pawn', why: 'Material is level: a bishop was traded for a knight, and no pawns were won.' },
        { text: 'A safe king on the kingside', why: 'The opposite. With pawns on f7, f6 and h7 and no g-pawn, the kingside is no safe place for Black\'s king.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Which variation is this?',
      moves: RAUZER,
      orientation: 'white',
      choices: [
        { text: 'The Richter–Rauzer', correct: true, why: 'Yes. 6.Bg5 against the Classical, usually followed by Qd2 and O-O-O.' },
        { text: 'The Sozin', why: 'The Sozin is 6.Bc4, with the bishop aiming at e6 and f7.' },
        { text: 'The Boleslavsky', why: 'The Boleslavsky is 6.Be2 e5, a quieter line.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6...e5? 7.Bxf6 gxf6 8.Nf5 Bxf5 9.exf5, which square is White\'s big prize?',
      moves: E5,
      orientation: 'white',
      choices: [
        { text: 'd5', correct: true, why: 'Right. No black pawn guards d5, and none can easily get there, so a White knight on d5 cannot be kicked by a pawn.' },
        { text: 'e6', why: "White's f5-pawn does hit e6, but Black's f7-pawn guards it. d5 is the square no black pawn can cover." },
        { text: 'b5', why: 'Black can cover b5 with ...a6. The real hole is d5.' }
      ]
    }
  ],
  key: { name: 'Richter–Rauzer: 6.Bg5', moves: RAUZER, orientation: 'white' },
  terms: [
    { term: 'Doubled pawns', meaning: 'Two pawns of the same color on one file. They cannot protect each other and are often weak.' },
    { term: 'Isolated pawn', meaning: 'A pawn with no friendly pawns on the files next to it, so no pawn can ever defend it.' },
    { term: 'Hole', meaning: 'A square the enemy pawns can no longer attack. A piece placed there cannot be chased away by a pawn.' },
    { term: 'Half-open file', meaning: 'A file with pawns of only one color on it. The other side can use it for a rook.' }
  ]
})
