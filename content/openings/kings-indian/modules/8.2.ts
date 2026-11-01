import { defineModule } from '../../../types'
import { FIANCHETTO } from '../lines'

/** fianchetto-panno: 8.d5 Na5 9.Nd2 c5 ... 13...Bh6 */
const PANNO = `${FIANCHETTO} Nc6 Nc3 a6 d5 Na5 Nd2 c5 Qc2 Rb8 b3 b5 Bb2 bxc4 bxc4 Bh6`
/** fianchetto-panno-9b4-trap */
const TRAP = `${FIANCHETTO} Nc6 Nc3 a6 d5 Na5 b4 Nxc4 Qd3 Nb6`
/** fianchetto-panno-8h3 */
const H3 = `${FIANCHETTO} Nc6 Nc3 a6 h3 Rb8 Be3 b5 Nd2`
/** Position after 8.d5 Na5: the c4-pawn needs a guard */
const NA5 = `${FIANCHETTO} Nc6 Nc3 a6 d5 Na5`

export default defineModule({
  id: '8.2',
  title: 'Panno: ...Nc6, ...a6, ...Rb8 and a trap',
  minutes: 11,
  level: 2,
  goals: [
    'Know the Panno set-up: ...Nc6, ...a6, ...Rb8 and ...b5',
    'Understand the knight on a5 and the fight for the c4-pawn',
    'Spot the 9.b4? Nxc4 trap, as Black and as White'
  ],
  intro:
    "One of Black's most active plans against the Fianchetto starts with 6...Nc6. The knight presses on d4, and ...a6, ...Rb8 and ...b5 aim to open the b-file. White can kick the knight at once with 8.d5, or prepare first with 8.h3. This module shows both, and a trap on c4 that catches many players.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main line: 8.d5 Na5',
      intro: 'Keep an eye on the c4-pawn. Both sides spend several moves fighting over it.',
      moves: PANNO,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'Black picks a plan',
          text: '6.O-O. Both kings are safe. In the Panno, Black brings the queen\'s knight to c6 first.',
          arrows: [['b8', 'c6', 'green']]
        },
        12: {
          title: 'Pressure on d4',
          text: '6...Nc6. The knight attacks the d4-pawn. Nf3 and the queen defend it, so there is no threat yet, but White must keep an eye on d4.',
          arrows: [['c6', 'd4', 'red']]
        },
        13: {
          title: 'White develops',
          text: '7.Nc3. The knight comes out and controls d5 and e4.',
          arrows: [['c3', 'd5', 'green'], ['c3', 'e4', 'green']]
        },
        14: {
          title: 'The Panno move',
          text: '7...a6. Black prepares ...Rb8 and ...b5. The a6-pawn supports b5: if White ever takes on b5 with the c-pawn, Black takes back with the a-pawn and keeps a pawn there.',
          arrows: [['b7', 'b5', 'blue']],
          marks: ['a6']
        },
        15: {
          title: 'White kicks the knight',
          text: '8.d5. White gains space and attacks the knight. It cannot stay on c6.',
          arrows: [['d5', 'c6', 'red']]
        },
        16: {
          title: 'A knight on the edge',
          text: '8...Na5. The best square. A knight on the edge usually looks odd, but this one attacks the c4-pawn, and right now nothing defends it.',
          arrows: [['a5', 'c4', 'red']],
          marks: ['c4']
        },
        17: {
          title: 'Guard the pawn',
          text: '9.Nd2. The knight steps back to protect c4. Playing 9.b3 is also good. Both look after the pawn.',
          arrows: [['d2', 'c4', 'green']]
        },
        18: {
          title: 'Taking away b4',
          text: '9...c5. The pawn controls b4, so White can no longer kick the knight with b2–b4.',
          arrows: [['c5', 'b4', 'yellow']],
          marks: ['b4']
        },
        19: {
          title: 'The queen guards c3',
          text: '10.Qc2. White wants to play b3. After that, the b2-pawn would no longer guard the c3-knight, which stands on the long diagonal of the g7-bishop. The queen protects c3 in advance.',
          arrows: [['c2', 'c3', 'green']],
          marks: ['c3']
        },
        20: {
          title: 'Rook to the b-file',
          text: '10...Rb8. The rook moves to the file that Black wants to open. Now ...b5 is ready.',
          arrows: [['b7', 'b5', 'blue']]
        },
        21: {
          title: 'A second guard for c4',
          text: '11.b3. The pawn protects c4, and White\'s dark-squared bishop can now come to b2.',
          arrows: [['b3', 'c4', 'green']]
        },
        22: {
          title: 'The break',
          text: '11...b5. Black attacks c4 a second time and gets ready to open the b-file.',
          arrows: [['b5', 'c4', 'red'], ['a5', 'c4', 'red']]
        },
        23: {
          title: 'Bishop to the long diagonal',
          text: "12.Bb2. White finishes developing. The bishop stands on the long diagonal, facing Black's bishop on g7 from the other end.",
          arrows: [['b2', 'g7', 'yellow']]
        },
        24: {
          title: 'Opening the file',
          text: '12...bxc4. Black takes, and once White recaptures the b-file is open. The engine slightly prefers 12...e5, but this capture shows the plan most clearly.',
          marks: ['c4']
        },
        25: {
          title: 'The rook stares at b2',
          text: '13.bxc4. White recaptures. The b-file is open, and Black\'s rook on b8 now looks straight at the bishop on b2.',
          arrows: [['b8', 'b2', 'red']]
        },
        26: {
          title: 'A new diagonal',
          text: "13...Bh6. A typical King's Indian idea. The bishop attacks the d2-knight, the piece that guards c4, so ...Bxd2 and ...Nxc4 is now a threat. Black's pieces are very active, but White is still somewhat better.",
          arrows: [['h6', 'd2', 'red'], ['a5', 'c4', 'yellow']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The trap: 9.b4? Nxc4',
      intro: 'Same position after 8.d5 Na5. This time White kicks the knight again instead of guarding c4.',
      moves: TRAP,
      start: 15,
      orientation: 'black',
      steps: {
        15: {
          title: 'The knight must move',
          text: '8.d5. Just as before, the d-pawn chases the knight away from c6.',
          arrows: [['d5', 'c6', 'red']]
        },
        16: {
          title: 'The c4-pawn is loose',
          text: '8...Na5. The knight attacks c4. Count the defenders of that pawn: there are none.',
          arrows: [['a5', 'c4', 'red']],
          marks: ['c4']
        },
        17: {
          title: 'Chasing the knight',
          text: '9.b4. It looks strong: the knight on the edge is attacked again. But White has forgotten about c4.',
          arrows: [['b4', 'a5', 'red']],
          marks: ['c4'],
          ann: '?'
        },
        18: {
          title: 'The knight eats the pawn',
          text: '9...Nxc4. The knight escapes by taking the pawn. Black is a pawn up, and the knight is safe on c4 for now.',
          arrows: [['a5', 'c4', 'green']],
          ann: '!'
        },
        19: {
          title: 'White hits the knight',
          text: '10.Qd3. The queen attacks the knight, but it has a good square to go to.',
          arrows: [['d3', 'c4', 'red']]
        },
        20: {
          title: 'A clean extra pawn',
          text: '10...Nb6. The knight retreats and attacks the d5-pawn. Black is simply a pawn up. Whatever White tries here, Black stays clearly better.',
          arrows: [['b6', 'd5', 'yellow']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'Before you chase a piece, look behind you',
      body:
        "9.b4? is a natural move: it attacks the knight, and the knight on a5 looks stuck. But a5 isn't a dead end, because the knight can take on c4. Before you chase a piece, ask what it can capture on its way out. As White, guard c4 first with 9.Nd2 or 9.b3."
    },
    {
      kind: 'walkthrough',
      title: 'The other road: 8.h3',
      intro: "White doesn't have to push d5 at once. 8.h3 keeps the center flexible.",
      moves: H3,
      start: 14,
      orientation: 'white',
      steps: {
        14: {
          title: 'Black is ready for ...b5',
          text: '7...a6. Black wants ...Rb8 and ...b5. White has a choice: 8.d5 at once, or a useful waiting move first.',
          arrows: [['b7', 'b5', 'blue']]
        },
        15: {
          title: 'Taking away g4',
          text: '8.h3. A quiet move with a point. Black\'s bishop and knight can no longer use g4. That matters because White wants to put the bishop on e3, where ...Ng4 would hit it.',
          arrows: [['h3', 'g4', 'green']],
          marks: ['g4']
        },
        16: {
          title: 'Black carries on',
          text: '8...Rb8. The rook supports the ...b5 push.',
          arrows: [['b7', 'b5', 'blue']]
        },
        17: {
          title: 'Bishop to e3',
          text: '9.Be3. The bishop develops and adds a guard to d4, which the c6-knight is attacking.',
          arrows: [['e3', 'd4', 'green'], ['c6', 'd4', 'red']]
        },
        18: {
          title: 'The b-pawn advances',
          text: '9...b5. Black attacks c4 and starts the queenside play.',
          arrows: [['b5', 'c4', 'red']]
        },
        19: {
          title: 'Holding c4',
          text: '10.Nd2. The knight protects c4 and clears the long diagonal for the g2-bishop. The position is roughly level, with play for both sides on the queenside.',
          arrows: [['d2', 'c4', 'green'], ['g2', 'c6', 'blue']]
        }
      }
    }
  ],
  takeaway:
    'In the Panno, Black plays ...Nc6, ...a6, ...Rb8 and ...b5 to open the b-file. After 8.d5 Na5, the c4-pawn needs a guard: 9.Nd2 or 9.b3 is right, and 9.b4? Nxc4 just drops a pawn.',
  lookAhead:
    'Module 8.3 shows a different plan for Black: ...Nbd7 and ...e5, the Classical Fianchetto.',
  drills: [
    {
      title: 'Spring the trap',
      prompt: "You're Black. White just kicked your knight with 9.b4?. Punish it, then handle White's next move.",
      moves: TRAP,
      start: 17,
      side: 'black',
      hints: ['Which White pawn has no defender?', 'The knight can escape by capturing on c4.'],
      success: '9...Nxc4 wins a pawn, and after 10.Qd3 Nb6 the knight is safe and hits d5. Black is a clean pawn up.'
    },
    {
      title: 'Play the Panno as Black',
      prompt: "You're Black. White has castled in the Fianchetto. Play the Panno plan from this module up to the ...b5 break.",
      moves: `${FIANCHETTO} Nc6 Nc3 a6 d5 Na5 Nd2 c5 Qc2 Rb8 b3 b5`,
      start: 11,
      side: 'black',
      hints: ['Knight to c6, then a6. When the knight is kicked, go to the edge and hit c4.', 'Then ...c5, the rook to b8, and ...b5.'],
      success: '...Nc6, ...a6, ...Na5, ...c5, ...Rb8 and ...b5. The b-file is about to open.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'Black to move. White has just played 9.b4, attacking the knight on a5. What is best?',
      moves: `${NA5} b4`,
      orientation: 'black',
      choices: [
        { text: '9...Nxc4', correct: true, why: 'Yes. The c4-pawn has no defender. The knight escapes and wins a pawn at the same time.' },
        { text: '9...Nc6', why: 'The d5-pawn controls c6. After 10.dxc6 Black has lost the knight.' },
        { text: '9...Nb3', why: 'The a2-pawn covers b3. After 10.axb3 or 10.Qxb3 Black has lost the knight.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. The knight on a5 attacks c4. What is a good move for White?',
      moves: NA5,
      orientation: 'white',
      choices: [
        { text: '9.Nd2', correct: true, why: 'Right. The knight guards c4, and Black has no quick way to win the pawn.' },
        { text: '9.b4', why: 'This is the trap from this module. 9...Nxc4 wins a pawn.' },
        { text: '9.Bg5', why: "It develops, but it does nothing for c4. 9...Nxc4 just takes the pawn." }
      ]
    },
    {
      type: 'plan',
      prompt: 'What is the main idea of ...a6 and ...Rb8 in the Panno?',
      choices: [
        { text: 'To prepare ...b5 and open the b-file', correct: true, why: 'Exactly. The rook on b8 is ready for the moment the b-file opens.' },
        { text: "To prepare a kingside attack with ...f5", why: 'Those moves are on the queenside. They have nothing to do with ...f5.' },
        { text: "To trap White's bishop on g2", why: 'The g2-bishop is not in any danger. The target is the b-file and c4.' }
      ]
    },
    {
      type: 'concept',
      prompt: "In the main line, why does 9...c5 make sense after 9.Nd2?",
      choices: [
        { text: 'It controls b4, so White cannot kick the a5-knight with b2–b4', correct: true, why: 'Yes. With c5 in place, b2–b4 would just lose material, so the knight is safe on a5.' },
        { text: 'It attacks the d5-pawn and wins it', why: 'A pawn on c5 attacks b4 and d4, not d5.' },
        { text: 'It opens the long diagonal for the g7-bishop', why: "The g7-bishop's diagonal is blocked by Black's own knight on f6, not by the c-pawn." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why does White often play h3 in the Panno, as in 8.h3 Rb8 9.Be3?',
      choices: [
        { text: 'It takes g4 away, so ...Ng4 cannot hit the bishop on e3', correct: true, why: 'Right. With h3 played, the e3-bishop is safe from ...Ng4, and ...Bg4 is ruled out too.' },
        { text: "It prepares g4 and an attack on Black's king", why: 'White is not attacking in this system. h3 is a quiet, useful move.' },
        { text: 'It opens the h-file for White\'s rook', why: 'No file opens. The point is the g4 square.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 8.d5 Na5, which White move falls into a trap?',
      choices: [
        { text: '9.b4', correct: true, why: 'Yes. It kicks the knight but leaves c4 without a guard, and 9...Nxc4 wins a pawn.' },
        { text: '9.Nd2', why: 'This is the main move. The knight guards c4.' },
        { text: '9.b3', why: 'This is also good. The pawn guards c4.' }
      ]
    }
  ],
  key: { name: 'Fianchetto Panno: 8.d5 Na5', moves: NA5, orientation: 'black' },
  terms: [
    { term: 'Open file', meaning: 'A file with no pawns on it. Rooks are strongest on open files.' },
    { term: 'Lever', meaning: 'A pawn move that attacks an enemy pawn to open lines, such as ...b5 against c4.' },
    { term: 'Loose piece', meaning: 'A piece or pawn with no defender. Loose pieces are the first thing to look for when hunting tactics.' }
  ]
})
