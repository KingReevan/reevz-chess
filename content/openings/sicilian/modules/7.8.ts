import { defineModule } from '../../../types'
import { MORRA } from '../lines'

/** morra-declined-nf6: 3...Nf6 4.e5 Nd5 5.Nf3 Nc6 6.cxd4 d6 */
const NF6 = `${MORRA} Nf6 e5 Nd5 Nf3 Nc6 cxd4 d6`
/** morra-declined-d5: 3...d5 4.exd5 Qxd5 5.cxd4 Nc6 6.Nf3 e6 7.Nc3 Qd8 8.Bc4 Nf6 9.O-O Be7 */
const D5_FULL = `${MORRA} d5 exd5 Qxd5 cxd4 Nc6 Nf3 e6 Nc3 Qd8 Bc4 Nf6 O-O Be7`
/** the same line, up to 7...Qd8 */
const D5 = D5_FULL.split(' ').slice(0, 14).join(' ')
/** morra-declined-d3: 3...d3 4.Bxd3 Nc6 5.c4 */
const D3 = `${MORRA} d3 Bxd3 Nc6 c4`

export default defineModule({
  id: '7.8',
  title: 'Declining the Morra',
  minutes: 11,
  level: 2,
  goals: [
    'Decline the gambit with 3...Nf6 and reach an Alapin',
    'Know where 3...d5 leads: an isolated-pawn position',
    'Understand 3...d3, which gives the pawn back at once'
  ],
  intro:
    "Black doesn't have to take the Morra pawn. After 2.d4 cxd4 3.c3, Black can turn it down and avoid all of White's gambit tricks. There are three main ways. Where does each one lead, and which is best?",
  sections: [
    {
      kind: 'walkthrough',
      title: '3...Nf6: straight into an Alapin',
      intro: 'Black ignores the c3-pawn and hits e4, just like 2...Nf6 against the Alapin.',
      moves: NF6,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The gambit is offered',
          text: '3.c3. White offers the pawn. Black can take it, or say no.',
          arrows: [['d4', 'c3', 'blue']]
        },
        6: {
          title: 'Hit e4 instead',
          text: "3...Nf6. The knight attacks e4. Nothing defends it, and White's knight cannot come to c3, because White's own pawn is there.",
          arrows: [['f6', 'e4', 'red']],
          marks: ['c3']
        },
        7: {
          title: 'The pawn advances',
          text: '4.e5. As in the Alapin, the pawn attacks the knight.',
          arrows: [['e5', 'f6', 'red']]
        },
        8: {
          title: 'A central knight',
          text: '4...Nd5. The knight goes to the center. Black is still a pawn up for now, thanks to the d4-pawn.',
          marks: ['d4']
        },
        9: {
          title: 'White develops',
          text: '5.Nf3. White develops first and will take on d4 later.',
          arrows: [['f3', 'd4', 'red']]
        },
        10: {
          title: 'Pressure on e5',
          text: '5...Nc6. The knight attacks e5 and guards the d4-pawn.',
          arrows: [['c6', 'e5', 'red'], ['c6', 'd4', 'green']]
        },
        11: {
          title: 'Material is level',
          text: '6.cxd4. White wins the pawn back. Nobody is a pawn up any more.',
          marks: ['d4']
        },
        12: {
          title: 'An Alapin position',
          text: '6...d6. Black hits e5. This is exactly a position from Module 7.4: 2.c3 Nf6 3.e5 Nd5 4.d4 cxd4 5.cxd4 d6 6.Nf3 Nc6. The position is roughly equal.',
          arrows: [['d6', 'e5', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '3...d5: an isolated-pawn position',
      intro: 'Black hits e4 with the d-pawn instead, as in the 2...d5 Alapin.',
      moves: D5,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The same offer',
          text: '3.c3. White offers the pawn again.',
          arrows: [['d4', 'c3', 'blue']]
        },
        6: {
          title: 'Strike at e4',
          text: '3...d5. The d-pawn attacks e4.',
          arrows: [['d5', 'e4', 'red']]
        },
        7: {
          title: 'White takes',
          text: '4.exd5. White swaps off the e-pawn.',
          marks: ['d5']
        },
        8: {
          title: 'A safe queen',
          text: "4...Qxd5. The queen takes back. As in Module 7.2, it is safe for now: White's pawn on c3 keeps the knight off c3.",
          marks: ['c3']
        },
        9: {
          title: 'Pawn back, c3 free',
          text: '5.cxd4. White wins the pawn back, so material is level. But now the c3-square is empty, and the knight can use it.',
          arrows: [['b1', 'c3', 'blue']]
        },
        10: {
          title: 'Two on d4',
          text: '5...Nc6. The knight and the queen both attack d4, and only White\'s queen defends it.',
          arrows: [['c6', 'd4', 'red'], ['d5', 'd4', 'red']]
        },
        11: {
          title: 'd4 is guarded',
          text: '6.Nf3. The knight adds a second defender.',
          arrows: [['f3', 'd4', 'green']]
        },
        12: {
          title: 'Solid support',
          text: '6...e6. The pawn guards d5 and opens the f8-bishop.',
          arrows: [['e6', 'd5', 'green']]
        },
        13: {
          title: 'The knight hits the queen',
          text: "7.Nc3. With gain of time. This is exactly the position from Module 7.3's Alapin line after 7.Nc3.",
          arrows: [['c3', 'd5', 'red']]
        },
        14: {
          title: 'An IQP for White',
          text: "7...Qd8. The queen goes home. White's d4-pawn is isolated. After 8.Bc4 Nf6 9.O-O Be7, White has active pieces and is a little better, as Module 7.3 showed.",
          marks: ['d4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '3...d3: give it back at once',
      intro: 'The simplest way to avoid gambit play. Black returns the pawn straight away.',
      moves: D3,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'One more time',
          text: '3.c3. White offers the pawn.',
          arrows: [['c3', 'd4', 'red']]
        },
        6: {
          title: 'Push past',
          text: "3...d3. The pawn steps forward instead of taking. White will win it back, but White's pawn stays on c3, so there is no open c-file and no quick Nc3 for White.",
          marks: ['c3', 'd3']
        },
        7: {
          title: 'The pawn falls',
          text: '4.Bxd3. The bishop takes, and develops at the same time. Material is level.',
          marks: ['d3']
        },
        8: {
          title: 'Black develops',
          text: '4...Nc6. A normal developing move.',
          arrows: [['b8', 'c6', 'green']]
        },
        9: {
          title: 'A space clamp',
          text: '5.c4. White grabs space. The c4- and e4-pawns both control d5, a grip like the Maróczy Bind of Module 3.9. White is slightly better.',
          arrows: [['c4', 'd5', 'yellow'], ['e4', 'd5', 'yellow']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Which way to decline?',
      body:
        "**3...Nf6** is the soundest decline. It leads to the 2...Nf6 Alapin of Module 7.4, and the engine calls it roughly equal.\n\n**3...d5** is also a good, safe choice. It usually leads to the isolated-pawn positions of Module 7.3, where White keeps a small edge.\n\n**3...d3** avoids most theory, but White gets a pleasant space advantage with c4.\n\nRemember that accepting with **3...dxc3** is also good: the engine actually likes it most, as long as Black knows the traps of Modules 7.6 and 7.7."
    },
    {
      kind: 'tip',
      title: 'For White: know your Alapin',
      body:
        "If you play the Morra as White, expect 3...Nf6 and 3...d5. Both turn the game into an Alapin, so learning Modules 7.1 to 7.4 covers you against the declines too."
    }
  ],
  takeaway:
    '3...Nf6 4.e5 Nd5 turns the Morra into a roughly equal Alapin. 3...d5 leads to an isolated-pawn position where White is a little better. 3...d3 gives the pawn back at once, and 5.c4 gives White a pleasant space edge.',
  lookAhead:
    'Chapter 8 turns to 2.Nc3: the Closed Sicilian and the Grand Prix Attack, plus the early bishop and queen moves that beginners love.',
  drills: [
    {
      title: 'Decline with the knight',
      prompt: "You're Black. White has offered the Morra with 3.c3. Decline it by hitting e4 with your knight, and steer into an Alapin.",
      moves: NF6,
      start: 5,
      side: 'black',
      hints: ['Attack e4 with the g8-knight.', 'After 4.e5, go to the center. Then develop the other knight and hit e5 with the d-pawn.'],
      success: '3...Nf6, 4...Nd5, 5...Nc6 and 6...d6. You have reached a roughly equal Alapin.'
    },
    {
      title: 'Against 3...d3',
      prompt: "You're White. Black has given the pawn back with 3...d3. Take it with a developing move, and then clamp the d5-square.",
      moves: D3,
      start: 6,
      side: 'white',
      hints: ['Which piece can take on d3 and develop at the same time?', 'After 4...Nc6, push your c-pawn two squares.'],
      success: '4.Bxd3 and 5.c4. Your c- and e-pawns control d5, and you have a pleasant space edge.'
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'After 3...Nf6 4.e5 Nd5 5.Nf3 Nc6 6.cxd4 d6, which opening position have we reached?',
      moves: NF6,
      orientation: 'black',
      choices: [
        { text: 'An Alapin with 2...Nf6', correct: true, why: 'Right. It is the same position as 2.c3 Nf6 3.e5 Nd5 4.d4 cxd4 5.cxd4 d6 6.Nf3 Nc6.' },
        { text: 'The Smith–Morra Gambit accepted', why: 'Black never took on c3. White won the d4-pawn back, and material is level.' },
        { text: 'An Open Sicilian', why: 'In the Open Sicilian a White piece takes back on d4. Here White has pawns on d4 and e5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 3...d5 decline, what changes when White plays 5.cxd4?',
      moves: D5.split(' ').slice(0, 9).join(' '),
      orientation: 'black',
      choices: [
        { text: 'The c3-square is free, so Nc3 can soon attack the queen on d5', correct: true, why: 'Exactly. Until then the c3-pawn kept the knight away. After 7.Nc3 the queen must move.' },
        { text: 'White is now a pawn up', why: 'Material is level: White has just won back the pawn it offered.' },
        { text: "Black's queen is trapped", why: 'The queen has plenty of squares. It just has to watch out for Nc3.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which way of meeting 3.c3 gives the pawn back at once?',
      moves: MORRA,
      orientation: 'black',
      choices: [
        { text: '3...d3', correct: true, why: 'Right. After 4.Bxd3 material is level at once, and there is no gambit play.' },
        { text: '3...Nf6', why: 'After 3...Nf6 Black keeps the d4-pawn for a few moves. White wins it back later with cxd4.' },
        { text: '3...dxc3', why: 'That accepts the gambit. Black keeps the extra pawn and has to survive White\'s fast development.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 3...d3 4.Bxd3 Nc6 5.c4, what has White gained?',
      moves: D3,
      orientation: 'white',
      choices: [
        { text: 'Space: the c4- and e4-pawns clamp the d5-square', correct: true, why: 'Yes. Black finds it hard to play ...d5, and White is slightly better.' },
        { text: 'A winning attack on the king', why: "No attack is in sight. White's edge is a quiet space advantage." },
        { text: 'An extra pawn', why: 'Material is level: White took back the d3-pawn with the bishop.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'After 3...d5 4.exd5 Qxd5 5.cxd4 Nc6 6.Nf3 e6 7.Nc3, the position is the same as which line?',
      moves: D5.split(' ').slice(0, 13).join(' '),
      orientation: 'black',
      choices: [
        { text: 'The 2.c3 d5 Alapin with 4...Nc6 and ...cxd4', correct: true, why: "Right. 2.c3 d5 3.exd5 Qxd5 4.d4 Nc6 5.Nf3 cxd4 6.cxd4 e6 7.Nc3 reaches it too: White's isolated d-pawn (Module 7.3)." },
        { text: 'The Scandinavian Defense', why: 'The Scandinavian starts 1.e4 d5. Here Black opened with 1...c5.' },
        { text: 'The Smith–Morra Gambit accepted', why: 'Black never took on c3, so this is not the accepted gambit.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which decline usually leads to an isolated d-pawn for White?',
      choices: [
        { text: '3...d5', correct: true, why: "Yes. After ...Qxd5 and cxd4, White's d4-pawn has no c- or e-pawn beside it." },
        { text: '3...d3', why: 'After 4.Bxd3 and 5.c4, White has pawns on c4 and e4, so no pawn is isolated.' },
        { text: '3...Nf6', why: 'After 4.e5 Nd5 and cxd4, the e5-pawn stands on the file next to the d4-pawn, so d4 is not isolated, at least for now.' }
      ]
    }
  ],
  key: { name: 'Morra Declined: 3...Nf6', moves: `${MORRA} Nf6`, orientation: 'black' },
  terms: [
    { term: 'Declining a gambit', meaning: 'Not taking the offered pawn, and playing a different move instead.' },
    { term: 'Transposition', meaning: 'Reaching the same position by a different move order, like the Morra declined turning into an Alapin.' },
    { term: 'Space advantage', meaning: 'Having pawns further up the board, so your pieces have more room and the opponent\'s have less.' }
  ]
})
