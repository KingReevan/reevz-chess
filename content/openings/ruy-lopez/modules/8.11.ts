import { defineModule } from '../../../types'
import { MORPHY } from '../../../lines'

const ARK = `${MORPHY} b5 Bb3 Bb7 Re1 Bc5 c3 d6 d4 Bb6`
const MODERN = `${MORPHY} b5 Bb3 Bc5 a4 Rb8 c3 d6 d4 Bb6 axb5 axb5 Na3 O-O Nxb5 Bg4`
const RUSSIAN = `${MORPHY} d6 Bxc6+ bxc6 d4 Nxe4 Re1 f5 dxe5 d5 Nc3`

export default defineModule({
  id: '8.11',
  title: 'Arkhangelsk and Møller',
  minutes: 12,
  level: 3,
  goals: [
    'Learn the active set-ups: ...b5 with ...Bb7 or ...Bc5 instead of ...Be7',
    "Know White's levers: a4 against b5 and d4 against e5 and the c5-bishop",
    'Meet the sharp Russian Defence 5...d6'
  ],
  intro:
    "After 5.O-O most players choose 5...Be7 and the Closed Ruy Lopez. But Black can be more active: put the bishops on b7 and c5, aiming at White's centre and king. How does White meet that activity, and what does it cost Black?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Arkhangelsk: 6...Bb7',
      intro: 'Both black bishops come out early. Watch what each one is aiming at.',
      moves: ARK,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'The main-line position',
          text: '5.O-O. Here 5...Be7 leads to the Closed Ruy Lopez. Black has a more active plan.',
          arrows: [['f6', 'e4', 'red']]
        },
        10: {
          title: 'Kick the bishop first',
          text: '5...b5. Black pushes the bishop off the a4-e8 diagonal.',
          arrows: [['b5', 'a4', 'red']]
        },
        11: {
          title: 'The bishop on b3',
          text: '6.Bb3. The bishop now aims at f7.',
          arrows: [['b3', 'f7', 'yellow']]
        },
        12: {
          title: 'Aim at e4',
          text: '6...Bb7. The Arkhangelsk. The bishop looks down the long diagonal toward e4. The c6-knight is in the way for now, but once it moves, e4 feels the pressure.',
          arrows: [['b7', 'e4', 'yellow'], ['f6', 'e4', 'red']]
        },
        13: {
          title: 'Guard e4',
          text: '7.Re1. The rook protects e4, which had no guard.',
          arrows: [['e1', 'e4', 'green']]
        },
        14: {
          title: 'The second bishop',
          text: '7...Bc5. Now the other bishop aims at f2. With the rook gone from f1, only the king guards f2.',
          arrows: [['c5', 'f2', 'red']]
        },
        15: {
          title: 'Prepare d4',
          text: '8.c3. The usual plan: support d4.',
          arrows: [['c3', 'd4', 'green']]
        },
        16: {
          title: 'Support the centre',
          text: '8...d6. Black guards e5 a second time.',
          arrows: [['d6', 'e5', 'green']]
        },
        17: {
          title: 'The d4 lever',
          text: '9.d4. The pawn attacks the c5-bishop and e5 together.',
          arrows: [['d4', 'c5', 'red'], ['d4', 'e5', 'red']]
        },
        18: {
          title: 'Stay on the diagonal',
          text: '9...Bb6. The bishop steps back and keeps pressing on d4. White usually continues 10.Be3; 10.Bg5, 10.a4 and 10.h3 are also played.',
          arrows: [['b6', 'd4', 'yellow']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The Modern Arkhangelsk: 6...Bc5',
      intro: 'The dark-squared bishop comes out before ...d6 can block it. White goes after the b5-pawn.',
      moves: MODERN,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'Same position',
          text: 'Black has played ...b5 and White has retreated to b3. This time the dark-squared bishop comes out first.'
        },
        12: {
          title: 'Bishop in front of the chain',
          text: '6...Bc5. The bishop takes its active diagonal before ...d6 is played, and aims at f2.',
          arrows: [['c5', 'f2', 'red']]
        },
        13: {
          title: 'The a4 lever',
          text: "7.a4. White's standard answer to ...b5: the a-pawn attacks it.",
          arrows: [['a4', 'b5', 'red']]
        },
        14: {
          title: 'Guard b5',
          text: '7...Rb8. The rook defends b5 along the b-file.',
          arrows: [['b8', 'b5', 'green']]
        },
        15: {
          title: 'Prepare d4',
          text: '8.c3. White gets ready for d4.'
        },
        16: {
          title: 'Support e5',
          text: '8...d6. Black guards e5 with a pawn.'
        },
        17: {
          title: 'Hit the bishop',
          text: '9.d4. The pawn attacks the c5-bishop.',
          arrows: [['d4', 'c5', 'red']]
        },
        18: {
          title: 'To b6',
          text: '9...Bb6. The bishop keeps its diagonal. But look at the b-file: the bishop now stands between the rook and b5.',
          marks: ['b6']
        },
        19: {
          title: 'Open the a-file',
          text: '10.axb5. White trades on b5.'
        },
        20: {
          title: 'Recapture',
          text: '10...axb5. The a-file is open, and the b5-pawn is weaker than it looks.',
          marks: ['b5']
        },
        21: {
          title: 'Attack the pawn',
          text: "11.Na3. The knight attacks b5. The b6-bishop blocks the rook's defence, so nothing guards the pawn.",
          arrows: [['a3', 'b5', 'red']],
          marks: ['b6']
        },
        22: {
          title: 'Let it go',
          text: '11...O-O. Black castles and gives up the pawn on purpose.'
        },
        23: {
          title: 'White grabs',
          text: '12.Nxb5. White is a pawn up.'
        },
        24: {
          title: 'Activity for the pawn',
          text: '12...Bg4. The bishop pins the f3-knight against the queen. That knight guards d4, and e4 has no guard at all, so Black gets real pressure for the pawn.',
          arrows: [['g4', 'd1', 'red'], ['b6', 'd4', 'yellow'], ['f6', 'e4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The Møller: 5...Bc5 first',
      body:
        "Black can also play the bishop out before ...b5: **5...Bc5 6.c3 b5 7.Bb3 d6** is the Møller. It reaches exactly the same position as the Modern Arkhangelsk after 6...Bc5 7.c3 d6, so the ideas are the same.\n\nNames differ: Wikipedia says Modern Arkhangelsk, while lichess calls 6...Bc5 the Neo-Arkhangelsk."
    },
    {
      kind: 'walkthrough',
      title: 'The Russian Defence: 5...d6',
      intro: 'A sharp alternative. Black lets White take on c6, then grabs e4.',
      moves: RUSSIAN,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'One more option',
          text: 'Instead of ...b5 or ...Be7, Black can guard e5 with a pawn at once.'
        },
        10: {
          title: 'A pawn guard',
          text: '5...d6. The Russian Defence, also called the Steinitz Deferred. With d7 empty, the c6-knight is pinned again.',
          arrows: [['d6', 'e5', 'green'], ['a4', 'e8', 'yellow']]
        },
        11: {
          title: 'Take with check',
          text: '6.Bxc6+. White trades at once.',
          arrows: [['c6', 'e8', 'red']]
        },
        12: {
          title: 'Recapture',
          text: '6...bxc6. Black has doubled c-pawns but the bishop pair.'
        },
        13: {
          title: 'Hit e5',
          text: '7.d4. White attacks e5. But now nothing guards e4.',
          arrows: [['d4', 'e5', 'red']],
          marks: ['e4']
        },
        14: {
          title: 'Counterattack',
          text: '7...Nxe4. Black grabs the e4-pawn.',
          marks: ['e4']
        },
        15: {
          title: 'Attack the knight',
          text: '8.Re1. The rook attacks the knight, which has no guard.',
          arrows: [['e1', 'e4', 'red']]
        },
        16: {
          title: 'A pawn guard',
          text: '8...f5. The f-pawn protects the knight.',
          arrows: [['f5', 'e4', 'green']]
        },
        17: {
          title: 'Take e5',
          text: '9.dxe5. White takes. The new e5-pawn attacks d6.',
          arrows: [['e5', 'd6', 'red']]
        },
        18: {
          title: 'Step forward',
          text: '9...d5. The d-pawn escapes and guards the knight a second time. Black has a big centre: d5, f5 and a knight on e4.',
          arrows: [['d5', 'e4', 'green'], ['f5', 'e4', 'green']]
        },
        19: {
          title: 'Challenge the knight',
          text: '10.Nc3. White attacks the e4-knight again. This is the sharp Boleslavsky line, and both sides need to know it well.',
          arrows: [['c3', 'e4', 'red'], ['e1', 'e4', 'red']]
        }
      }
    }
  ],
  takeaway:
    "The Arkhangelsk (6...Bb7) and Modern Arkhangelsk (6...Bc5) put Black's bishops on active diagonals instead of ...Be7. White answers with the levers a4 and d4; in the Modern line White wins b5, and Black gets pressure on d4 and e4 for it.",
  lookAhead:
    "That completes the chapter on Black's other defences. You have now met each of Black's main answers to 3.Bb5 and the idea behind it.",
  drills: [
    {
      title: 'Play the Arkhangelsk',
      prompt: "You're Black. White just castled. Play the Arkhangelsk set-up up to 9...Bb6.",
      moves: ARK,
      start: 9,
      side: 'black',
      hints: [
        'Kick the bishop with the b-pawn, then put your light-squared bishop on the long diagonal.',
        'Develop the other bishop to c5, guard e5 with ...d6, and retreat the bishop to b6 when d4 hits it.'
      ],
      success: '5...b5, 6...Bb7, 7...Bc5, 8...d6 and 9...Bb6. Both bishops point at White\'s centre and king.'
    },
    {
      title: 'Win the b5-pawn',
      prompt: "You're White. Black played the Modern Arkhangelsk 6...Bc5. Use the a4 lever and win the b5-pawn.",
      moves: MODERN.split(' ').slice(0, -1).join(' '),
      start: 12,
      side: 'white',
      hints: [
        'Attack b5 with the a-pawn, then build the centre with c3 and d4.',
        "Trade on b5, bring the b1-knight to a3, and take the pawn. Notice the b6-bishop blocks Black's rook."
      ],
      success: '7.a4, 8.c3, 9.d4, 10.axb5, 11.Na3 and 12.Nxb5. A pawn up, but expect ...Bg4 pressure on d4 and e4.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'In the Arkhangelsk, what is the b7-bishop aiming at?',
      moves: `${MORPHY} b5 Bb3 Bb7`,
      orientation: 'black',
      choices: [
        { text: 'The e4-pawn, through the c6-knight', correct: true, why: 'Right. The pressure becomes real once the c6-knight moves out of the way.' },
        { text: 'The f2-pawn', why: 'That is the job of a bishop on c5. The b7-bishop uses the long light diagonal.' },
        { text: 'The b3-bishop', why: 'Bishops move diagonally, and b7 and b3 are on the same file. The b7-bishop looks along the long diagonal toward d5 and e4.' }
      ]
    },
    {
      type: 'plan',
      prompt: "What is White's standard lever against Black's ...b5?",
      moves: `${MORPHY} b5 Bb3 Bc5`,
      orientation: 'white',
      choices: [
        { text: 'a2-a4', correct: true, why: 'Yes. The a-pawn attacks b5 and can open the a-file for the rook.' },
        { text: 'h2-h3', why: 'h3 is useful against ...Bg4, but it does nothing to b5.' },
        { text: 'Re1', why: 'Re1 guards e4. It does not touch the queenside.' }
      ]
    },
    {
      type: 'concept',
      prompt: "After 11.Na3 in the Modern Arkhangelsk, why can't Black hold the b5-pawn?",
      moves: MODERN.split(' ').slice(0, 21).join(' '),
      orientation: 'black',
      choices: [
        { text: "The b6-bishop blocks the b8-rook's defence", correct: true, why: 'Correct. The rook on b8 no longer sees b5, so the pawn has no guard.' },
        { text: 'The a3-knight is pinning it', why: 'Knights never pin. The problem is the bishop standing between rook and pawn.' },
        { text: 'The pawn is attacked three times', why: 'Only the a3-knight attacks it. The issue is that nothing defends it.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Russian Defence, what does 9...d5 do?',
      moves: RUSSIAN.split(' ').slice(0, 18).join(' '),
      orientation: 'black',
      choices: [
        { text: 'It escapes the attack on d6 and guards the e4-knight again', correct: true, why: 'Yes. The knight on e4 is now protected by the pawns on d5 and f5.' },
        { text: 'It attacks the white queen', why: 'A pawn on d5 attacks c4 and e4, not the queen on d1.' },
        { text: 'It opens the d-file for Black', why: "The d-pawn stays on the d-file, so the file stays closed. It's about guarding e4." }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Name this line.',
      moves: `${MORPHY} b5 Bb3 Bb7`,
      orientation: 'black',
      choices: [
        { text: 'The Arkhangelsk', correct: true, why: 'Yes. 5...b5 6.Bb3 Bb7 is the Arkhangelsk.' },
        { text: 'The Norwegian', why: 'The Norwegian is 4...b5 5.Bb3 Na5, hunting the bishop.' },
        { text: 'The Marshall Attack', why: 'The Marshall is 8...d5 in the Closed Ruy Lopez.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Black has given up the b5-pawn in the Modern Arkhangelsk. What does Black get for it?',
      moves: MODERN,
      orientation: 'black',
      choices: [
        { text: 'Pressure on d4 and e4, with the f3-knight pinned', correct: true, why: 'Right. The pinned knight guards d4, and e4 has no guard.' },
        { text: 'Nothing; it was a blunder', why: 'It is a deliberate pawn sacrifice for activity.' },
        { text: 'A winning attack on the h-file', why: "Black's play is in the centre, against d4 and e4." }
      ]
    }
  ],
  key: { name: 'Arkhangelsk: 6...Bb7', moves: `${MORPHY} b5 Bb3 Bb7`, orientation: 'black' },
  terms: [
    { term: 'Lever', meaning: 'A pawn move that attacks an enemy pawn to open lines, like a4 against b5.' },
    { term: 'X-ray', meaning: 'A piece aiming through another piece at a target behind it.' },
    { term: 'Transposition', meaning: 'Reaching the same position by a different move order.' }
  ]
})
