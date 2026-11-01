import { defineModule } from '../../../types'
import { SAMISCH } from '../lines'

/** samisch-gambit-7nge2: 7.Nge2 Nc6 8.d5 Ne5 9.Ng3 e6 */
const NGE2 = `${SAMISCH} c5 Nge2 Nc6 d5 Ne5 Ng3 e6`
/** samisch-gambit-7d5: 7.d5 e6 8.Qd2 exd5 9.cxd5 a6 (Benoni structure) */
const BENONI = `${SAMISCH} c5 d5 e6 Qd2 exd5 cxd5 a6`

export default defineModule({
  id: '6.7',
  title: 'Gambit declined: 7.Nge2 and 7.d5',
  minutes: 10,
  level: 3,
  goals: [
    'Decline the gambit with 7.Nge2 and handle the knight on e5',
    'Recognize the Benoni structure after 7.d5 e6',
    "Know each side's plan in that structure"
  ],
  intro:
    "Module 6.6 showed that taking the c5-pawn gives Black easy play. So White often declines it. There are two ways: 7.Nge2, which adds a defender to d4, and 7.d5, which pushes past and locks the center. Each leads to a different kind of game.",
  sections: [
    {
      kind: 'walkthrough',
      title: '7.Nge2: defend first',
      intro: 'Watch the c4-pawn after Black\'s knight lands on e5.',
      moves: NGE2,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'The gambit offer',
          text: '6...c5. Black offers the pawn. White decides to keep the pawn chain instead.',
          arrows: [['c5', 'd4', 'red']]
        },
        13: {
          title: 'A second defender',
          text: '7.Nge2. The knight guards d4. If Black takes with ...cxd4, White recaptures with the knight and keeps a strong center.',
          arrows: [['e2', 'd4', 'green']]
        },
        14: {
          title: 'More pressure',
          text: '7...Nc6. Black attacks d4 a second time.',
          arrows: [['c6', 'd4', 'red']]
        },
        15: {
          title: 'Push past',
          text: '8.d5. White gains space and attacks the knight.',
          arrows: [['d5', 'c6', 'red']]
        },
        16: {
          title: 'A central knight',
          text: '8...Ne5. The knight jumps to the center and attacks c4. Nothing defends that pawn: the knight on e2 blocks the f1-bishop.',
          arrows: [['e5', 'c4', 'red']],
          marks: ['c4']
        },
        17: {
          title: 'Unblocking the bishop',
          text: '9.Ng3. The knight moves away, and now the f1-bishop guards c4. From g3 the knight also eyes f5 and h5.',
          arrows: [['f1', 'c4', 'green'], ['g3', 'f5', 'blue']]
        },
        18: {
          title: 'Hitting d5',
          text: '9...e6. Black attacks the d5-pawn from the other side, aiming to half-open the e-file. The engine gives White a small edge.',
          arrows: [['e6', 'd5', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '7.d5: into a Benoni structure',
      intro: 'Count the pawns on each side of the board at the end.',
      moves: BENONI,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'The gambit offer',
          text: '6...c5. The same offer.'
        },
        13: {
          title: 'Close the center',
          text: '7.d5. White pushes past. The pawn on d5 cramps Black, and the c5-pawn has nothing left to capture on d4.',
          marks: ['d5']
        },
        14: {
          title: 'Strike at once',
          text: '7...e6. Black attacks d5 right away, so the center doesn\'t stay locked.',
          arrows: [['e6', 'd5', 'red']]
        },
        15: {
          title: 'White develops',
          text: '8.Qd2. The usual Sämisch move.'
        },
        16: {
          title: 'The e-file half-opens',
          text: '8...exd5. Black takes. White has only one good way to recapture.'
        },
        17: {
          title: 'The Benoni structure',
          text: '9.cxd5. White takes with the c-pawn. White has more pawns in the center (d5 and e4 against d6). Black has more on the queenside (a, b and c against a and b) and a half-open e-file.',
          marks: ['d5', 'e4', 'd6', 'c5']
        },
        18: {
          title: 'The queenside majority moves',
          text: '9...a6. Black prepares ...b5 to use the extra queenside pawn. White can answer a4 to slow it down. The engine calls the position roughly equal.',
          arrows: [['b7', 'b5', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Plans in the Benoni structure',
      body:
        "This structure is named after the Benoni Defense, a different opening that reaches the same pawns. Here it comes from the Sämisch, so White has f3 and Be3 instead of the usual set-up.\n\n**White wants** to push e4–e5 one day, using the extra central pawn, and to keep Black's queenside pawns still with a4.\n\n**Black wants** to play ...b5 with the queenside majority, put a rook on e8 to press e4, and use the g7-bishop on the long diagonal."
    },
    {
      kind: 'warning',
      title: 'Recapture with the c-pawn',
      body:
        "After 8...exd5, only 9.cxd5 is good. 9.exd5? opens the e-file, where ...Re8 pins the e3-bishop to White's king. 9.Nxd5? Nxd5 10.cxd5 lets Black hit the center with ...f5. In both cases the engine prefers Black."
    }
  ],
  takeaway:
    "Against the Sämisch Gambit, White can decline with 7.Nge2, then answer ...Ne5 with Ng3 to guard c4, or with 7.d5, which leads to a Benoni structure: White's central majority against Black's queenside majority.",
  lookAhead:
    "Module 6.8 shows the Panno, where Black plays ...Nc6, ...a6, ...Rb8 and ...b5 to attack on the side where White's king usually goes.",
  drills: [
    {
      title: 'Decline with 7.Nge2',
      prompt: "You're White. Black has offered the gambit with 6...c5. Defend d4, push past when the knight attacks, and don't lose the c4-pawn.",
      moves: NGE2.split(' ').slice(0, 17).join(' '),
      start: 12,
      side: 'white',
      hints: [
        'Add a second defender to d4 with a minor piece.',
        'When the knight lands on e5, c4 is attacked. Which piece can unblock the f1-bishop?'
      ],
      success: '7.Nge2, 8.d5 and 9.Ng3. The f1-bishop now guards c4, and White keeps a small edge.'
    },
    {
      title: 'Into the Benoni',
      prompt: "You're Black. White has closed the center with 7.d5. Challenge it, half-open the e-file, and get the queenside going.",
      moves: BENONI,
      start: 13,
      side: 'black',
      hints: [
        'Attack the d5-pawn with your e-pawn.',
        'After 9.cxd5, prepare ...b5 with a quiet pawn move.'
      ],
      success: '7...e6, 8...exd5 and 9...a6. A Benoni structure with play on the e-file and the queenside.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why is 7.Nge2 a good way to decline the gambit?',
      choices: [
        { text: 'The knight defends d4, so White can meet ...cxd4 with Nxd4 and keep the center', correct: true, why: 'Right. White keeps the pawn chain and develops at the same time.' },
        { text: 'It attacks the c5-pawn', why: 'A knight on e2 does not touch c5. Its job is to guard d4.' },
        { text: 'It prepares queenside castling', why: 'Castling queenside needs the queen and the d1–b1 squares cleared. Nge2 is a kingside move.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 7.Nge2 Nc6 8.d5 Ne5, why does White play 9.Ng3?',
      moves: `${SAMISCH} c5 Nge2 Nc6 d5 Ne5`,
      orientation: 'white',
      choices: [
        { text: 'To unblock the f1-bishop so it guards the c4-pawn', correct: true, why: 'Right. Black was threatening ...Nxc4, and nothing defended c4 while the knight sat on e2.' },
        { text: 'To attack the knight on e5', why: "A knight on g3 doesn't attack e5. The point is the c4-pawn." },
        { text: 'To prepare kingside castling at once', why: 'Castling needs the f1-bishop to move too. The urgent job is defending c4.' }
      ]
    },
    {
      type: 'name',
      prompt: 'What is this pawn structure called?',
      moves: BENONI,
      orientation: 'black',
      choices: [
        { text: 'A Benoni structure', correct: true, why: "Right. White's d5 and e4 against Black's c5 and d6, with a half-open e-file for Black." },
        { text: 'A Maróczy bind', why: 'A Maróczy bind has White pawns on c4 and e4 with no d-pawn. Here White has pawns on d5 and e4.' },
        { text: 'The Mar del Plata', why: 'The Mar del Plata has Black pawns on d6 and e5, facing White\'s d5. Here Black has c5 and d6.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move after 8...exd5. How should White recapture?',
      moves: `${SAMISCH} c5 d5 e6 Qd2 exd5`,
      orientation: 'white',
      choices: [
        { text: '9.cxd5', correct: true, why: 'Right. The only good recapture. It keeps the e-file closed and gives White the extra central pawn.' },
        { text: '9.exd5', why: "This opens the e-file. After ...Re8, the e3-bishop is pinned to White's king, and Black is better." },
        { text: '9.Nxd5', why: 'After 9...Nxd5 10.cxd5 f5!, Black hits the center at once and is better.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move after 7.Nge2 Nc6 8.d5. Which knight move is best?',
      moves: `${SAMISCH} c5 Nge2 Nc6 d5`,
      orientation: 'black',
      choices: [
        { text: '8...Ne5', correct: true, why: 'Right. The knight takes a central square and attacks c4.' },
        { text: '8...Nd4', why: 'After 9.Nxd4 cxd4 10.Bxd4, White simply wins a pawn.' },
        { text: '8...Nb4', why: 'The knight goes to the edge, where it does little and can be chased. White is clearly better.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Benoni structure after 7.d5 e6 8.Qd2 exd5 9.cxd5, what is Black\'s main plan?',
      choices: [
        { text: 'Use the queenside majority with ...a6 and ...b5, and press e4 from the e-file', correct: true, why: "Right. That is where Black's extra pawn and half-open file are." },
        { text: 'Push ...f5 and ...g5 at once', why: 'Black has no locked center to attack behind. The play is on the queenside and the e-file.' },
        { text: 'Trade queens and sit tight', why: 'Black needs activity in this structure. Passive play lets White push e4–e5.' }
      ]
    }
  ],
  key: { name: 'Sämisch Gambit declined: 7.d5 e6 (Benoni structure)', moves: BENONI, orientation: 'black' },
  terms: [
    { term: 'Benoni structure', meaning: 'White pawns on d5 and e4 against Black pawns on c5 and d6, usually with a half-open e-file for Black.' },
    { term: 'Pawn majority', meaning: 'Having more pawns than the opponent on one side of the board. A majority can create a passed pawn.' },
    { term: 'Decline a gambit', meaning: "Refuse the offered pawn and develop instead, keeping your own position solid." }
  ]
})
