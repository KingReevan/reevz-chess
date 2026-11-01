import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** 6.Bc4 g6 7.Nxc6 bxc6 8.e5: the trap position */
const E5 = `${CLASSICAL} Bc4 g6 Nxc6 bxc6 e5`
/** magnus-smith-trap: 8...dxe5?? 9.Bxf7+ Kxf7 10.Qxd8 */
const TRAP = `${E5} dxe5 Bxf7+ Kxf7 Qxd8`
/** 8...Ng4! and the engine's main line: 9.Bf4 d5 10.Nxd5 Bg7 11.Nc3 Qxd1+ 12.Rxd1 Bxe5 13.Bxe5 Nxe5 (engine-checked) */
const NG4 = `${E5} Ng4 Bf4 d5 Nxd5 Bg7 Nc3 Qxd1+ Rxd1 Bxe5 Bxe5 Nxe5`

export default defineModule({
  id: '4.5',
  title: 'The Magnus Smith Trap: e5 and Bxf7+',
  minutes: 9,
  level: 2,
  goals: [
    'Spot the Magnus Smith Trap: 8...dxe5?? 9.Bxf7+ and 10.Qxd8',
    'Know which move is the real mistake, and which is only slightly inaccurate',
    'Defend correctly with 8...Ng4!'
  ],
  intro:
    "The Sozin bishop on c4 aims at f7. If Black plays a Dragon set-up with 6...g6, White has a forcing idea: trade on c6 and push e5. The natural capture on e5 then loses the queen. Why, and what should Black play instead?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The trap',
      intro: 'Before you press Next at 8.e5, look at the d-file and at f7. What guards the black queen?',
      moves: TRAP,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'The Classical position',
          text: 'Black has played 5...Nc6. White chooses the Sozin bishop move.',
          arrows: [['f1', 'c4', 'blue']]
        },
        11: {
          title: 'The bishop eyes f7',
          text: '6.Bc4. The bishop aims at f7, which only the black king guards.',
          arrows: [['c4', 'f7', 'red']]
        },
        12: {
          title: 'A Dragon set-up',
          text: '6...g6. Black wants to put the bishop on g7. This is only slightly inaccurate, not a blunder, but it gives White a forcing idea.',
          arrows: [['f8', 'g7', 'blue']],
          ann: '?!'
        },
        13: {
          title: 'Trade the defender',
          text: '7.Nxc6. White trades knights first. The c6-knight was guarding e5, the square White wants for the e-pawn.',
          arrows: [['c6', 'e5', 'yellow']]
        },
        14: {
          title: 'The only recapture',
          text: '7...bxc6. The b-pawn takes back. It is the only way for Black to recapture.',
          marks: ['c6']
        },
        15: {
          title: 'The pawn attacks',
          text: '8.e5. The pawn hits the f6-knight. Taking it looks natural, but check the d-file and f7 first.',
          arrows: [['e5', 'f6', 'red'], ['c4', 'f7', 'yellow']]
        },
        16: {
          title: 'The losing move',
          text: "8...dxe5. Black wins a pawn, but the d-file is now open. White's queen faces Black's queen, and only the king on e8 guards it.",
          arrows: [['d1', 'd8', 'red'], ['e8', 'd8', 'green']],
          ann: '??'
        },
        17: {
          title: 'Check on f7',
          text: '9.Bxf7+. The bishop takes f7 with check. The d-file is open, so the king cannot go to d7. Taking the bishop is the only legal move.',
          arrows: [['f7', 'e8', 'red']],
          ann: '!'
        },
        18: {
          title: 'The guard is gone',
          text: '9...Kxf7. The king has left e8, and with it the only piece that guarded the queen.',
          arrows: [['d1', 'd8', 'red']],
          marks: ['d8']
        },
        19: {
          title: 'The queen falls',
          text: '10.Qxd8. White wins the queen for a bishop. Nothing can take back, because the c8-bishop blocks the a8-rook. White is winning.',
          marks: ['d8']
        }
      }
    },
    {
      kind: 'text',
      title: 'What really went wrong',
      body:
        "You may read that **6...g6?** is the mistake. It isn't: after 6...g6 White is only slightly better. The move that loses is **8...dxe5??**, because it opens the d-file while the queen's only guard is the king, and the Sozin bishop can pull that king away with check.\n\nThe idea behind the trap is called **deflection**: White's check lures a defender away from the piece it was guarding."
    },
    {
      kind: 'walkthrough',
      title: 'The right answer: 8...Ng4!',
      intro: 'Same position after 8.e5. This time Black hits back at e5 instead of taking it.',
      moves: NG4,
      start: 15,
      orientation: 'black',
      steps: {
        15: {
          title: 'The critical moment',
          text: '8.e5. The f6-knight is attacked. Black must not open the d-file with ...dxe5.',
          arrows: [['e5', 'f6', 'red']]
        },
        16: {
          title: 'A counterattack',
          text: '8...Ng4. The knight jumps forward and attacks e5, together with the d6-pawn. The d-file stays closed, so the queen is safe.',
          arrows: [['g4', 'e5', 'red'], ['d6', 'e5', 'red']],
          ann: '!'
        },
        17: {
          title: 'White guards e5',
          text: '9.Bf4. The bishop defends the e5-pawn.',
          arrows: [['f4', 'e5', 'green']]
        },
        18: {
          title: 'Closing the diagonal',
          text: '9...d5. The pawn hits the c4-bishop and blocks its diagonal toward f7. Black offers this pawn.',
          arrows: [['d5', 'c4', 'red']]
        },
        19: {
          title: 'White grabs a pawn',
          text: '10.Nxd5. The knight takes the pawn, and the c4-bishop is safe again.',
          marks: ['d5']
        },
        20: {
          title: 'Hitting e5 again',
          text: '10...Bg7. Black does not take the knight: 10...cxd5? 11.Qxd5 leaves White clearly better. Instead the bishop adds a second attacker on e5.',
          arrows: [['g7', 'e5', 'red'], ['g4', 'e5', 'red']]
        },
        21: {
          title: 'The knight goes back',
          text: '11.Nc3. The knight returns. Now the d-file is open between the queens.',
          arrows: [['d1', 'd8', 'blue']]
        },
        22: {
          title: 'Queens off',
          text: '11...Qxd1+. Black trades queens with check.',
          arrows: [['d1', 'e1', 'red']]
        },
        23: {
          title: 'Rook takes back',
          text: '12.Rxd1. White recaptures. White is still a pawn up for the moment.',
          marks: ['e5']
        },
        24: {
          title: 'Pawn back',
          text: '12...Bxe5. Black wins the e5-pawn back. Material is level again.',
          marks: ['e5']
        },
        25: {
          title: 'Bishops traded',
          text: '13.Bxe5. White trades bishops.',
          marks: ['e5']
        },
        26: {
          title: 'Black holds',
          text: "13...Nxe5. Material is level. Black's queenside pawns on a7 and c6 are split, so White is slightly better, but Black is fine. 8...Ng4 holds.",
          marks: ['a7', 'c6']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Before you open a file, check the queens',
      body:
        "Whenever the queens face each other on a file, ask what guards your queen. If the answer is only your king, watch out for a check that drags the king away. This same Bxf7+ and Qxd8 pattern appears in other openings too, including the Smith–Morra Gambit (Module 7.6)."
    }
  ],
  takeaway:
    'After 6.Bc4 g6 7.Nxc6 bxc6 8.e5, never play 8...dxe5??: 9.Bxf7+ Kxf7 10.Qxd8 wins the queen. 8...Ng4! hits e5 and holds. 6...g6 itself is only slightly inaccurate.',
  lookAhead: 'Next: the quiet 6.Be2, where Black can safely play ...e5. The Boleslavsky.',
  drills: [
    {
      title: 'Spring the trap',
      prompt: "You're White. Black has just played 8...dxe5??, opening the d-file. Win the queen.",
      moves: TRAP,
      start: 16,
      side: 'white',
      hints: [
        "Black's queen on d8 is guarded only by the king. Can you drag the king away with check?",
        'Take on f7 with the bishop. After ...Kxf7, the queen on d8 is unguarded.'
      ],
      success: '9.Bxf7+! Kxf7 10.Qxd8. You win the queen for a bishop. That is the Magnus Smith Trap.'
    },
    {
      title: 'Dodge the trap',
      prompt: "You're Black. White just played 8.e5, attacking your knight. Don't take on e5: counterattack instead, and keep hitting the e5-pawn.",
      moves: `${E5} Ng4 Bf4 d5 Nxd5 Bg7`,
      start: 15,
      side: 'black',
      hints: [
        'Move the knight forward to a square where it attacks e5.',
        'After 9.Bf4, push the d-pawn to hit the c4-bishop. After 10.Nxd5, bring the dark-squared bishop to the long diagonal.'
      ],
      success: '8...Ng4!, 9...d5 and 10...Bg7. Black wins the e5-pawn back soon, and White is only slightly better.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black to move. White has just played 8.e5. What should Black play?',
      moves: E5,
      orientation: 'black',
      choices: [
        { text: '8...Ng4', correct: true, why: 'Right. The knight attacks e5, the d-file stays closed, and White is only slightly better.' },
        { text: '8...dxe5', why: 'That opens the d-file. 9.Bxf7+ Kxf7 10.Qxd8 wins the queen.' },
        { text: '8...Nd5', why: 'It loses material. After 9.Nxd5, taking back with 9...cxd5 runs into 10.Qxd5, hitting the a8-rook and f7.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 8...dxe5??, why does 9.Bxf7+ win?',
      moves: `${E5} dxe5`,
      orientation: 'white',
      choices: [
        { text: 'The king has to take, and then it no longer guards the queen on d8', correct: true, why: "Exactly. That's deflection: the check drags the king away from the queen, and 10.Qxd8 follows." },
        { text: 'It wins the a8-rook', why: 'The bishop on f7 does not reach a8. The prize is the queen on d8.' },
        { text: 'It is checkmate', why: 'Black can take the bishop with the king. The point is what happens after that: 10.Qxd8.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Which move is the real mistake in the Magnus Smith Trap?',
      choices: [
        { text: '8...dxe5', correct: true, why: 'Right. It opens the d-file while only the king guards the queen. Everything before it was playable.' },
        { text: '6...g6', why: 'A common belief, but 6...g6 is only slightly inaccurate. Black is fine after 8...Ng4.' },
        { text: '7...bxc6', why: 'It is the only way to take back on c6, so it cannot be the mistake.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does White play 7.Nxc6 before pushing 8.e5?',
      moves: `${CLASSICAL} Bc4 g6`,
      orientation: 'white',
      choices: [
        { text: 'To remove the c6-knight, which guards e5', correct: true, why: 'Yes. With that knight gone, e5 comes with full force and attacks the f6-knight.' },
        { text: 'To win the c6-pawn', why: 'No pawn is won. It is a trade of knights that clears the way for e5.' },
        { text: 'To open the b-file for a White rook', why: 'The b-file opens for Black, not White. The point is e5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'White to move. Find the winning move.',
      moves: `${E5} dxe5`,
      orientation: 'white',
      choices: [
        { text: '9.Bxf7+', correct: true, why: 'Right. 9...Kxf7 is forced, and 10.Qxd8 wins the queen for a bishop.' },
        { text: '9.Qxd8+', why: 'After 9...Kxd8 the queens are just traded, and the position is level. Check first with the bishop.' },
        { text: '9.Qe2', why: 'It misses the chance. Black gets time to finish developing, and the position is roughly level. 9.Bxf7+ wins the queen.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 8...Ng4 do that 8...dxe5 does not?',
      choices: [
        { text: 'It attacks e5 while keeping the d-file closed, so the queen stays safe', correct: true, why: 'Exactly. The d6-pawn still blocks the file, and Black wins the e5-pawn back a few moves later.' },
        { text: 'It wins a pawn at once', why: '8...Ng4 does not win anything at once. It hits e5, and Black regains the pawn later.' },
        { text: 'It threatens checkmate on f2', why: 'There is no mate. The knight is there to attack e5 without opening the d-file.' }
      ]
    }
  ],
  key: { name: 'Magnus Smith Trap: 8...dxe5??', moves: `${E5} dxe5`, orientation: 'white' },
  terms: [
    { term: 'Trap', meaning: 'A position where a natural-looking move loses material or the game.' },
    { term: 'Deflection', meaning: 'Forcing a defending piece away from the square or piece it was guarding.' },
    { term: 'Counterattack', meaning: 'Answering a threat by making a threat of your own instead of simply defending.' }
  ]
})
