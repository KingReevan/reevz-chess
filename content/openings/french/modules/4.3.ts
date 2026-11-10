import { defineModule } from '../../../types'
import { TARRASCH } from '../lines'

/** tar-exd5: 3...c5 4.exd5 exd5 5.Ngf3 Nc6 6.Bb5 Bd6 7.dxc5 Bxc5 8.O-O Ne7 9.Nb3 Bd6 */
const IQP = `${TARRASCH} c5 exd5 exd5 Ngf3 Nc6 Bb5 Bd6 dxc5 Bxc5 O-O Ne7 Nb3 Bd6`
/** tar-iqp-blockade: 10.Nbd4 O-O 11.c3 Bg4 12.Qa4 Qc7 */
const BLOCKADE = `${IQP} Nbd4 O-O c3 Bg4 Qa4 Qc7`
/** tar-iqp-blockade up to 11.c3 (White drill) */
const TO_C3 = `${IQP} Nbd4 O-O c3`
/** tar-iqp-blockade up to 11...Bg4 (Black drill) */
const TO_BG4 = `${TO_C3} Bg4`

export default defineModule({
  id: '4.3',
  title: '4.exd5 exd5: the isolated d-pawn',
  minutes: 12,
  level: 2,
  goals: [
    'Define an isolated pawn, and see why Black gets one on d5',
    'As White: blockade d4 with a knight and trade pieces',
    'As Black: use active pieces, open files and the e4- and c4-squares'
  ],
  intro:
    "Take back on d5 with the e-pawn, and Black's c8-bishop is free at once. But after a trade on c5, Black's d-pawn has no pawn neighbors left. Is that lone pawn a weakness or a strength? It is both, and each side has a clear plan.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'How the isolated pawn appears',
      intro: "Watch Black's pawns on the c- and e-files. By move 7, both are gone.",
      moves: IQP,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'White trades on d5',
          text: '4.exd5. In Module 4.2 Black took back with the queen. This time Black takes with the e-pawn.',
          arrows: [['e6', 'd5', 'blue']]
        },
        8: {
          title: 'The pawn takes back',
          text: '4...exd5. The e-file is now open: there is no pawn on it at all. And with the e6-pawn gone, the c8-bishop is free.',
          arrows: [['c8', 'h3', 'blue']]
        },
        9: {
          title: 'Develop and defend',
          text: '5.Ngf3. The knight develops and defends d4.',
          arrows: [['f3', 'd4', 'green']]
        },
        10: {
          title: 'Pressure on d4',
          text: '5...Nc6. Black attacks d4 a second time, with the c5-pawn and the c6-knight.',
          arrows: [['c6', 'd4', 'red'], ['c5', 'd4', 'red']]
        },
        11: {
          title: 'A pin on c6',
          text: '6.Bb5. The bishop pins the c6-knight to Black\'s king. That knight fights for d4, the square White wants for its own knight later.',
          arrows: [['b5', 'e8', 'red']],
          marks: ['d4']
        },
        12: {
          title: 'An active bishop',
          text: '6...Bd6. The bishop develops and aims at h2, in front of White\'s future castled king.',
          arrows: [['d6', 'h2', 'blue']]
        },
        13: {
          title: 'The pawn becomes isolated',
          text: '7.dxc5. White takes on c5. Black now has no c-pawn and no e-pawn, so no Black pawn can ever protect d5. It is an isolated pawn.',
          marks: ['d5']
        },
        14: {
          title: 'Black takes back',
          text: '7...Bxc5. Material is level. The bishop has moved twice, but it is active on c5, aiming at f2.',
          arrows: [['c5', 'f2', 'blue']]
        },
        15: {
          title: 'White castles',
          text: '8.O-O. White\'s king is safe. The c6-knight is still pinned.',
          arrows: [['b5', 'e8', 'red']]
        },
        16: {
          title: 'Guarding d5',
          text: '8...Ne7. The knight goes to e7, not f6. From there it guards the d5-pawn and backs up the c6-knight, so Bxc6 can be met by ...Nxc6.',
          arrows: [['e7', 'd5', 'green'], ['e7', 'c6', 'green']]
        },
        17: {
          title: 'Heading for d4',
          text: '9.Nb3. The d2-knight attacks the c5-bishop and gets ready to jump to d4. The c1-bishop is free too.',
          arrows: [['b3', 'c5', 'red'], ['b3', 'd4', 'blue']]
        },
        18: {
          title: 'Who controls d4?',
          text: '9...Bd6. The bishop steps back to d6, aiming at h2 again. Now the fight is about d4, the square right in front of Black\'s isolated pawn.',
          marks: ['d4', 'd5']
        }
      }
    },
    {
      kind: 'text',
      title: 'The isolated d-pawn',
      body:
        "A pawn is **isolated** when no pawn of the same color stands on either file next to it. Here it is Black's pawn: d5 has no Black pawn on the c-file or the e-file. A lone d-pawn like this is called an **isolated queen's pawn**, or IQP. White has no isolated pawn: c2 has b2 next to it, and f2 has g2.\n\n**What Black gets:** open lines. The e-file is open, the c-file is half-open for Black, and the d5-pawn controls e4 and c4, two good squares for Black's pieces. Black's pieces are active, and the c8-bishop is free.\n\n**What it costs:** only pieces can defend d5, and the square in front of it, d4, can never be attacked by a Black pawn. That makes d4 a perfect home for a White knight. The d-file is half-open for White, so White's rooks can line up against d5."
    },
    {
      kind: 'walkthrough',
      title: 'The blockade on d4',
      intro: 'White puts a knight in front of the isolated pawn. Black answers with active pieces.',
      moves: BLOCKADE,
      start: 18,
      orientation: 'white',
      steps: {
        18: {
          title: 'The square in front',
          text: "9...Bd6. White to move. The square in front of Black's isolated pawn is d4.",
          marks: ['d4']
        },
        19: {
          title: 'The blockade',
          text: "10.Nbd4. The knight lands in front of the pawn. It stops the d-pawn from advancing, and no Black pawn can chase it away. It also hits the c6-knight.",
          arrows: [['d4', 'c6', 'red']],
          marks: ['d4', 'd5']
        },
        20: {
          title: 'Black castles',
          text: '10...O-O. Black\'s king is safe, and the pin on c6 is gone. Black\'s pieces stand actively: the bishop on d6 and the knights on c6 and e7.',
          arrows: [['d6', 'h2', 'blue']]
        },
        21: {
          title: 'Support the knight',
          text: '11.c3. The pawn supports the d4-knight. If Black ever trades on d4, White can take back with the pawn, and the d4-square stays in White\'s hands.',
          arrows: [['c3', 'd4', 'green']]
        },
        22: {
          title: 'The bishop gets active',
          text: '11...Bg4. Black\'s light-squared bishop comes out with a pin: the f3-knight can\'t move without exposing the queen on d1.',
          arrows: [['g4', 'd1', 'red']]
        },
        23: {
          title: 'Ending the pin',
          text: '12.Qa4. The queen steps off the pin. On a4 it guards the b5-bishop, and along the fourth rank it also guards the d4-knight.',
          arrows: [['a4', 'b5', 'green'], ['a4', 'd4', 'green']]
        },
        24: {
          title: 'Activity against the blockade',
          text: "12...Qc7. The queen lines up behind the d6-bishop, aiming at h2. White keeps a small edge thanks to the blockade, and Black has active pieces in return.",
          arrows: [['d6', 'h2', 'red']],
          marks: ['d4']
        }
      }
    },
    {
      kind: 'text',
      title: 'Plans for both sides',
      body:
        "**White:** (1) Blockade d4 with a knight, backed by c3. (2) Trade pieces. Every trade leaves fewer pieces to defend d5 and fewer to attack with, and endgames are good for the side playing against the IQP. (3) Attack d5 with rooks on the d-file and with the minor pieces.\n\n**Black:** (1) Keep the pieces active: the bishops on d6 and g4, the queen on c7, rooks to e8 and c8 on the open e-file and half-open c-file. (2) Use e4 and c4, the squares the d5-pawn controls. (3) Avoid needless trades and look for chances on the kingside. (4) Push ...d4 when it can be done safely: then the weak pawn turns into an active one."
    },
    {
      kind: 'tip',
      title: 'Which side has the isolated pawn?',
      body:
        "Always check the files next to the pawn. In this module it is Black's d5-pawn: Black's c-pawn was traded on move 7 and the e-pawn went to d5 on move 4. The blockade square is the one directly in front of the pawn from its own side, so for a Black pawn on d5 it is d4. In other openings White gets the isolated pawn on d4, and then Black blockades on d5."
    }
  ],
  takeaway:
    "After 4...exd5 and dxc5, Black's d5-pawn is isolated. White blockades on d4 with a knight and trades pieces; Black keeps the pieces active, uses the open files and the e4- and c4-squares, and avoids trades.",
  lookAhead:
    "Next: White can also go straight for an endgame against the isolated pawn. Module 4.4 shows 5.Bb5+ and Karpov's queen trade against Korchnoi.",
  drills: [
    {
      title: 'White: isolate and blockade',
      prompt: "You're White. Take on c5 to give Black an isolated d-pawn, castle, bring the d2-knight to the blockade square in two moves, then support it with a pawn.",
      moves: TO_C3,
      start: 12,
      side: 'white',
      hints: [
        'Start with 7.dxc5 and 8.O-O. The d2-knight goes to b3, hitting the c5-bishop.',
        'After 9...Bd6, jump into d4 with the b3-knight, then support it with the c-pawn.'
      ],
      success: '7.dxc5, 8.O-O, 9.Nb3, 10.Nbd4 and 11.c3. The knight sits on the square in front of the isolated pawn, backed by a pawn.'
    },
    {
      title: 'Black: active pieces',
      prompt: "You're Black. White has just played 7.dxc5. Take back, put your king's knight where it guards d5, step back from the b3-knight to an active diagonal, castle, and develop your light-squared bishop with a pin.",
      moves: TO_BG4,
      start: 13,
      side: 'black',
      hints: [
        'Take back with the bishop. The g8-knight goes to e7, not f6.',
        'After 9.Nb3, the bishop goes back to d6. After 11.c3, the c8-bishop pins the f3-knight.'
      ],
      success: '7...Bxc5, 8...Ne7, 9...Bd6, 10...O-O and 11...Bg4. Every Black piece is active, which is how you play with an isolated pawn.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 7.dxc5 Bxc5, which pawn is isolated?',
      moves: `${TARRASCH} c5 exd5 exd5 Ngf3 Nc6 Bb5 Bd6 dxc5 Bxc5`,
      orientation: 'black',
      choices: [
        { text: "Black's d5-pawn", correct: true, why: 'Right. Black has no c-pawn and no e-pawn, so no pawn can protect d5.' },
        { text: "White's c2-pawn", why: 'The c2-pawn has the b2-pawn next to it, so it is not isolated.' },
        { text: "Black's a7-pawn", why: 'The a7-pawn has the b7-pawn next to it. The isolated pawn is d5.' }
      ]
    },
    {
      type: 'concept',
      prompt: "Which square should White occupy to blockade Black's isolated d5-pawn?",
      moves: IQP,
      orientation: 'white',
      choices: [
        { text: 'd4', correct: true, why: 'Yes. d4 is the square right in front of the pawn, and no Black pawn can ever attack it.' },
        { text: 'd6', why: 'd6 is behind the pawn, on Black\'s side. A blockader stands in front of the pawn.' },
        { text: 'e5', why: 'e5 is a good square too, but it does not stop the d-pawn. The blockade square is d4.' }
      ]
    },
    {
      type: 'plan',
      prompt: "You're White against Black's isolated d-pawn. Which plan fits best?",
      moves: BLOCKADE,
      orientation: 'white',
      choices: [
        { text: 'Keep the knight on d4 and trade pieces when you can', correct: true, why: 'Right. Each trade leaves d5 with fewer defenders and Black with fewer active pieces.' },
        { text: 'Avoid trades and attack Black\'s king at once', why: 'That is the plan for the side with the isolated pawn. White wants a quiet game and an endgame.' },
        { text: 'Move the d4-knight to f5 and put a pawn on d4', why: 'White has no d-pawn left to put on d4. The knight is the ideal blockader.' }
      ]
    },
    {
      type: 'plan',
      prompt: "You're Black with the isolated d-pawn. Which plan fits best?",
      moves: BLOCKADE,
      orientation: 'black',
      choices: [
        { text: 'Keep the pieces active, use the open files and the e4- and c4-squares', correct: true, why: 'Yes. The isolated pawn gives Black open lines. Use them before an endgame arrives.' },
        { text: 'Trade queens as soon as possible', why: 'Trades help White. In an endgame the d5-pawn is just a weakness.' },
        { text: 'Defend d5 with every piece and wait', why: 'Passive defense lets White pile up on d5 at leisure. With an isolated pawn, activity is everything.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why is d4 such a good square for a White knight in this structure?',
      moves: IQP,
      orientation: 'white',
      choices: [
        { text: "No Black pawn can attack it, because Black's c- and e-pawns are gone", correct: true, why: 'Right. A knight there can only be challenged by pieces, and it blocks the d5-pawn.' },
        { text: "It attacks Black's king directly", why: "A knight on d4 does not attack the king. Its jobs are to block d5 and watch c6, e6 and f5." },
        { text: "It defends White's d-pawn", why: 'White has no d-pawn here. It was traded on c5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 4.exd5 exd5 and 7.dxc5 Bxc5, which file is half-open for White?',
      choices: [
        { text: 'The d-file', correct: true, why: "Yes. White has no d-pawn, and Black's pawn stands on d5, so White's rooks can attack it." },
        { text: 'The e-file', why: 'The e-file has no pawns at all, so it is open for both sides, not half-open.' },
        { text: 'The c-file', why: 'White still has a pawn on c2. The c-file is half-open for Black.' }
      ]
    }
  ],
  key: { name: 'Tarrasch: the isolated d-pawn after 9...Bd6', moves: IQP, orientation: 'white' },
  terms: [
    { term: 'Isolated pawn', meaning: 'A pawn with no pawn of the same color on either file next to it. Only pieces can defend it.' },
    { term: 'Isolated queen\'s pawn (IQP)', meaning: 'An isolated pawn on the d-file. It gives its owner open lines and active pieces, but it can become a weak target.' },
    { term: 'Blockade', meaning: 'Putting a piece on the square right in front of an enemy pawn, so the pawn cannot advance.' },
    { term: 'Half-open file', meaning: 'A file with pawns of only one color on it. An open file has no pawns at all.' }
  ]
})
