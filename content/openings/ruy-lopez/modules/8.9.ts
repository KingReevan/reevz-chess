import { defineModule } from '../../../types'
import { RUY } from '../../../lines'

const MS = `${RUY} a6 Ba4 d6`
const SET = `${MS} d4 b5 Bb3 Nxd4 Nxd4 exd4 Qxd4`
const TRAP = `${SET} c5 Qd5 Be6 Qc6+ Bd7 Qd5 c4`
const SAFE = `${MS} d4 b5 Bb3 Nxd4 Nxd4 exd4 Bd5`

export default defineModule({
  id: '8.9',
  title: "Noah's Ark trap",
  minutes: 10,
  level: 1,
  goals: [
    'See how ...b5 breaks the pin and turns 5.d4 into a liability',
    'Trap the b3-bishop with ...c5 and ...c4',
    'Know how White avoids the trap with 8.Bd5 or a calmer 5th move'
  ],
  intro:
    "The Spanish bishop usually ends up on b3, behind the black pawns on a6 and b5. Most of the time it is safe there. But if Black's c-pawn can reach c4, the bishop has nowhere to go. This module shows one of the best-known traps in the Ruy Lopez, and how both sides should handle it.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Setting the trap',
      intro: 'White plays the natural 5.d4. Watch how Black wins a pawn and invites the queen in.',
      moves: SET,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The Modern Steinitz',
          text: '4...d6. Black guards e5 with a pawn. The c6-knight is pinned by the a4-bishop, because d7 is empty.',
          arrows: [['a4', 'e8', 'yellow']]
        },
        9: {
          title: 'Hit e5 at once',
          text: '5.d4. White attacks e5 while the knight is pinned. It looks strong, but it is a little careless.',
          arrows: [['d4', 'e5', 'red']],
          ann: '?!'
        },
        10: {
          title: 'Break the pin',
          text: '5...b5. The pawn attacks the bishop. Once it moves away, the c6-knight is free.',
          arrows: [['b5', 'a4', 'red']],
          ann: '!'
        },
        11: {
          title: 'The bishop goes to b3',
          text: '6.Bb3. Now d4 is attacked by the knight and the e5-pawn.',
          arrows: [['c6', 'd4', 'red'], ['e5', 'd4', 'red']]
        },
        12: {
          title: 'Grab the pawn',
          text: '6...Nxd4. Black takes the d4-pawn with the knight.'
        },
        13: {
          title: 'White takes back',
          text: '7.Nxd4. The knights come off.'
        },
        14: {
          title: 'A pawn up, for now',
          text: "7...exd4. Black is a pawn ahead. White's queen can take it back on d4. Should it?",
          arrows: [['d1', 'd4', 'blue']],
          marks: ['d4']
        },
        15: {
          title: 'The losing grab',
          text: '8.Qxd4. White wins the pawn back. It looks completely natural, and it loses a piece.',
          marks: ['b3'],
          ann: '??'
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The ark closes',
      intro: "Black needs ...c4. First the queen has to be chased, and the a8-rook has to be safe.",
      moves: TRAP,
      start: 15,
      orientation: 'black',
      steps: {
        15: {
          title: 'Look at the bishop',
          text: "The bishop on b3 has few squares. White's own pawns sit on a2 and c2, and the b5-pawn covers a4 and c4. Its only way out is the diagonal through c4, and a black pawn on c4 would close it.",
          marks: ['b3', 'a4', 'c4']
        },
        16: {
          title: 'Hit the queen',
          text: '8...c5. The pawn attacks the queen. Next, Black wants ...c4.',
          arrows: [['c5', 'd4', 'red'], ['c5', 'c4', 'yellow']],
          ann: '!'
        },
        17: {
          title: 'The queen counterattacks',
          text: "9.Qd5. The queen attacks the a8-rook, which nothing guards because the c8-bishop is in the way. If 9...c4? now, 10.Qxa8 wins the rook.",
          arrows: [['d5', 'a8', 'red']]
        },
        18: {
          title: 'Gain time',
          text: '9...Be6. The bishop attacks the queen. If the queen stays, ...Bxd5 wins it for a bishop, so it must move again.',
          arrows: [['e6', 'd5', 'red']]
        },
        19: {
          title: 'Check',
          text: '10.Qc6+. The queen checks the king along the c6-e8 diagonal.',
          arrows: [['c6', 'e8', 'red']]
        },
        20: {
          title: 'Block, and clear c8',
          text: '10...Bd7. Black blocks and attacks the queen again. Now c8 is empty, so the d8-queen guards a8.',
          arrows: [['d7', 'c6', 'red'], ['d8', 'a8', 'green']]
        },
        21: {
          title: 'Back to d5',
          text: '11.Qd5. The queen returns and hits a8 again. This time the rook is guarded.',
          arrows: [['d5', 'a8', 'red']]
        },
        22: {
          title: 'The trap closes',
          text: "11...c4. The bishop is trapped. The b5-pawn guards a4 and c4, and White's own pawns sit on a2 and c2. The best White can get is two pawns for it.",
          arrows: [['c4', 'b3', 'red']],
          marks: ['a4', 'c4', 'b3'],
          ann: '!'
        }
      }
    },
    {
      kind: 'tip',
      title: 'How White stays out of the ark',
      body:
        "The simplest way is not to play 5.d4 at all: 5.c3, 5.Bxc6+ and 5.O-O are all good. If you do reach 7...exd4, don't take with the queen. Play **8.Bd5**, which gets the bishop out of the box and attacks the a8-rook, or **8.c3**."
    },
    {
      kind: 'walkthrough',
      title: 'The safe answer: 8.Bd5',
      intro: 'Same position, but White moves the bishop first.',
      moves: SAFE,
      start: 14,
      orientation: 'white',
      steps: {
        14: {
          title: 'Danger on b3',
          text: 'Black has just taken on d4. Before grabbing anything, White looks at the bishop on b3.',
          marks: ['b3']
        },
        15: {
          title: 'Out of the box, with a threat',
          text: '8.Bd5. The bishop leaves b3 and attacks the a8-rook. It is safe on d5, guarded by the e4-pawn.',
          arrows: [['d5', 'a8', 'red'], ['e4', 'd5', 'green']],
          ann: '!'
        }
      }
    },
    {
      kind: 'history',
      title: 'Steiner-Capablanca, Budapest 1929',
      body:
        "The trap is old, but it still catches strong players. In Steiner-Capablanca, Budapest 1929, White followed the trap all the way to 11...c4, and Capablanca went on to win with Black. The same idea also appears in the Closed Ruy Lopez after 7...d6 8.d4?! (module 4.12)."
    }
  ],
  takeaway:
    "With the bishop on b3, the pawns on a6, b5 and c4 can build a cage. After 5.d4? b5 6.Bb3 Nxd4 7.Nxd4 exd4, 8.Qxd4?? loses the bishop to ...c5 and ...c4; White should play 8.Bd5 or 8.c3.",
  lookAhead:
    'Next: the Norwegian, 4...b5 5.Bb3 Na5, where Black hunts the same bishop in a different way.',
  drills: [
    {
      title: 'Spring the trap',
      prompt: "You're Black. White just grabbed the pawn with 8.Qxd4??. Trap the bishop on b3.",
      moves: TRAP,
      start: 15,
      side: 'black',
      hints: [
        'Hit the queen with a pawn that can later go to c4.',
        "Chase the queen with your bishop. Push ...c4 only once the a8-rook is guarded."
      ],
      success: '8...c5!, 9...Be6, 10...Bd7 and 11...c4! The bishop on b3 has no way out.'
    },
    {
      title: 'Stay out of the ark',
      prompt: "You're White. Black just took on d4 with the pawn. Don't take it back with the queen. Find the safe move.",
      moves: SAFE,
      start: 14,
      side: 'white',
      hints: [
        'Your bishop on b3 could get trapped by ...c5 and ...c4.',
        'Move it to a central square where it attacks a black rook.'
      ],
      success: '8.Bd5! The bishop escapes the cage and hits a8.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'Black to move. White just played 8.Qxd4. How does Black start the trap?',
      moves: SET,
      orientation: 'black',
      choices: [
        { text: '8...c5', correct: true, why: 'Yes. The pawn hits the queen and gets ready for ...c4.' },
        { text: '8...Nf6', why: 'It develops, but it lets White off the hook. Hit the queen and go for the bishop.' },
        { text: '8...Be6', why: 'It offers a bishop trade. 8...c5 wins a whole piece instead.' }
      ]
    },
    {
      type: 'order',
      prompt: 'After 8...c5 9.Qd5, why can\'t Black play 9...c4 straight away?',
      moves: `${SET} c5 Qd5`,
      orientation: 'black',
      choices: [
        { text: '10.Qxa8 would win the rook', correct: true, why: 'Right. The c8-bishop blocks the queen from guarding a8. ...Be6 and ...Bd7 fix that first.' },
        { text: '...c4 is illegal here', why: 'It is legal. It just drops the a8-rook.' },
        { text: 'The bishop could escape to a4', why: 'The b5-pawn covers a4. The real problem is the loose rook on a8.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is the bishop on b3 trapped after 11...c4?',
      moves: TRAP,
      orientation: 'white',
      choices: [
        { text: "The b5-pawn covers a4 and c4, and White's own pawns block a2 and c2", correct: true, why: 'Exactly. Every square around the bishop is covered or blocked.' },
        { text: 'It is pinned to the white king', why: 'Nothing pins it. It simply has no safe square.' },
        { text: 'The black queen attacks it', why: 'The c4-pawn attacks it. Pawns make the best cages.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Black just played 7...exd4. What should White play?',
      moves: `${MS} d4 b5 Bb3 Nxd4 Nxd4 exd4`,
      orientation: 'white',
      choices: [
        { text: '8.Bd5', correct: true, why: 'Correct. The bishop escapes the cage with an attack on the a8-rook.' },
        { text: '8.Qxd4', why: "The Noah's Ark trap: 8...c5 and ...c4 win the bishop." },
        { text: '8.Ba4', why: 'The b5-pawn simply takes it.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Black has just played 11...c4. What is this trap called?',
      moves: TRAP,
      orientation: 'black',
      choices: [
        { text: "The Noah's Ark trap", correct: true, why: 'Yes. The pawns on a6, b5 and c4 build an ark around the b3-bishop.' },
        { text: 'The Tarrasch trap', why: 'The Tarrasch trap wins e5 in the Old Steinitz with Bxc6, dxe5 and Nxe5.' },
        { text: 'The Mortimer trap', why: 'The Mortimer trap is a Berlin line where ...c6 and ...Qa5+ win a white knight on e5.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Against 3...a6 4.Ba4 d6, which 5th moves keep White out of the Noah\'s Ark ideas?',
      moves: MS,
      orientation: 'white',
      choices: [
        { text: '5.c3, 5.Bxc6+ or 5.O-O', correct: true, why: 'Right. All three are good, safe moves.' },
        { text: '5.d4, hitting e5 at once', why: 'That is the move that allows ...b5 and ...Nxd4.' },
        { text: 'Only 5.Bxc6+', why: '5.c3 and 5.O-O are fine too.' }
      ]
    }
  ],
  key: { name: "Noah's Ark trap: 11...c4", moves: TRAP, orientation: 'black' },
  terms: [
    { term: 'Trapped piece', meaning: 'A piece that is attacked and has no safe square to move to.' },
    { term: 'Breaking a pin', meaning: 'Removing the pinning piece or stepping out of the line, so the pinned piece can move again.' },
    { term: 'Tempo', meaning: 'One move of time. Gaining a tempo means making a useful move that also forces your opponent to react.' }
  ]
})
