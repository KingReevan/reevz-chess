import { defineModule } from '../../../types'
import { MORPHY, OPEN } from '../../../lines'

const RE1 = `${MORPHY} Nxe4 Re1 Nc5 Bxc6 dxc6 Nxe5 Be7`

export default defineModule({
  id: '2.5',
  title: '5.O-O: castling into the fight',
  minutes: 10,
  level: 1,
  goals: [
    'See why castling helps White fight for e4',
    'Follow how e4 comes back after 5...Nxe4 6.d4',
    'Learn the second way: 6.Re1 and the e-file'
  ],
  intro:
    "White castles on move 5 and leaves e4 hanging. If Black takes it, Black is a pawn up and the knight sits in the center. So how does White get the pawn back? This module shows the two main ways, and why castling first makes both of them work.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main reply: 6.d4',
      intro: 'This is the start of the Open Defense, which has its own chapter. Here we only follow the pawn count.',
      moves: OPEN,
      start: 9,
      orientation: 'white',
      steps: {
        9: {
          title: 'King safe, rook ready',
          text: '5.O-O. The king leaves the e-file, and the rook on f1 is one move from e1. Nothing guards e4 now.',
          arrows: [['f1', 'e1', 'blue']],
          marks: ['e4']
        },
        10: {
          title: 'Black takes',
          text: "5...Nxe4. The Open Defense. Black is a pawn up for now, but Black's king is still on e8.",
          marks: ['e4', 'e8']
        },
        11: {
          title: 'Strike in the center',
          text: '6.d4. White attacks e5. If 6...exd4, then 7.Re1 pins the e4-knight to the black king, because the e-file is open all the way.',
          arrows: [['d4', 'e5', 'red'], ['f1', 'e1', 'blue']],
          marks: ['e8']
        },
        12: {
          title: 'Kick the bishop first',
          text: '6...b5. Black wants ...d5 to support the knight. But ...d5 right now would empty d7, and the a4-bishop would pin the c6-knight. So the bishop goes first.',
          arrows: [['b5', 'a4', 'red'], ['a4', 'e8', 'blue']]
        },
        13: {
          title: 'The bishop moves on',
          text: '7.Bb3. The pin danger is gone, but the bishop now aims at d5 and f7.',
          arrows: [['b3', 'd5', 'yellow']]
        },
        14: {
          title: 'Support the knight',
          text: '7...d5. The pawn protects the e4-knight and blocks the bishop at d5.',
          arrows: [['d5', 'e4', 'green']]
        },
        15: {
          title: 'The pawn comes back',
          text: '8.dxe5. White takes on e5. Black took a pawn, White took a pawn: material is level. The new pawn on e5 also takes space from Black.',
          marks: ['e5']
        },
        16: {
          title: 'The Open tabiya',
          text: '8...Be6. Black guards d5 and develops. Black has active pieces, White has the e5-pawn. Chapter 6 picks up from here.',
          arrows: [['e6', 'd5', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Why castling first matters',
      body:
        "Castling did two jobs at once. It took White's king off the e-file, so opening that file can only hurt Black. And it put a rook on f1, one move away from e1.\n\nThat is why White can leave e4 unguarded. As long as Black's king is still on e8, opening the center favors the side whose king is safe."
    },
    {
      kind: 'walkthrough',
      title: 'The second way: 6.Re1',
      intro: 'Now the rook comes straight to the e-file. Watch the knight on e5 at the end.',
      moves: RE1,
      start: 9,
      orientation: 'white',
      steps: {
        9: {
          title: 'Castled again',
          text: '5.O-O. Same position. This time White uses the rook at once.',
          arrows: [['f1', 'e1', 'blue']]
        },
        10: {
          title: 'Black takes',
          text: '5...Nxe4. Black grabs the pawn again.',
          marks: ['e4']
        },
        11: {
          title: 'The rook attacks',
          text: '6.Re1. The rook hits the knight on e4. Behind it on the e-file stand the e5-pawn and the black king.',
          arrows: [['e1', 'e4', 'red']],
          marks: ['e8']
        },
        12: {
          title: 'The knight steps back',
          text: '6...Nc5. The knight retreats and attacks the bishop on a4.',
          arrows: [['c5', 'a4', 'red']]
        },
        13: {
          title: 'Remove the guard',
          text: '7.Bxc6. The bishop trades itself for the knight that guards e5.',
          marks: ['e5']
        },
        14: {
          title: 'Recapture',
          text: '7...dxc6. Black takes back toward the center.',
          arrows: [['d8', 'd4', 'blue']]
        },
        15: {
          title: 'Pawn back, with a threat',
          text: "8.Nxe5. Material is level again. And now the knight stands between the e1-rook and Black's king: if it moves, it gives a discovered check. 9.Nxf7+ would also hit the queen and the h8-rook.",
          arrows: [['e1', 'e8', 'red'], ['e5', 'f7', 'red']]
        },
        16: {
          title: 'Close the e-file',
          text: '8...Be7. Black blocks the file and gets ready to castle. Material is level, and White got the pawn back without trouble.',
          arrows: [['e8', 'g8', 'blue']],
          marks: ['e7']
        }
      }
    },
    {
      kind: 'warning',
      title: 'Beware the discovered check',
      body:
        "When an enemy knight sits on your king's file in front of a rook, every knight move is a check. In the 6.Re1 line, 8...Qd4? looks active, but 9.Nf3+ is a discovered check that also attacks the queen. Close the file first."
    }
  ],
  takeaway:
    "5.O-O leaves e4 unguarded on purpose. If 5...Nxe4, White wins the pawn back with 6.d4 or 6.Re1, because the e-file opens while Black's king is still in the center.",
  lookAhead:
    "Next: the quieter choice 5...Be7, and how 6.Re1 turns White's pressure on e5 into a real threat.",
  drills: [
    {
      title: 'Win back the pawn with d4',
      prompt: "You're White. Black has taken on e4. Strike in the center, keep your bishop, and take back a pawn.",
      moves: `${MORPHY} Nxe4 d4 b5 Bb3 d5 dxe5`,
      start: 10,
      side: 'white',
      hints: ['Push the d-pawn two squares. Retreat the bishop to b3 when it is attacked.', 'Then capture on e5 with the d-pawn.'],
      success: '6.d4, 7.Bb3 and 8.dxe5. Material is level and you have the e5-pawn.'
    },
    {
      title: 'Win back the pawn with Re1',
      prompt: "You're White. Black has taken on e4. Use your rook, then remove the guard of e5 and take it.",
      moves: `${MORPHY} Nxe4 Re1 Nc5 Bxc6 dxc6 Nxe5`,
      start: 10,
      side: 'white',
      hints: ['The rook can reach the e-file in one move.', 'Take the c6-knight with the bishop, then take e5 with the knight.'],
      success: '6.Re1, 7.Bxc6 and 8.Nxe5. The pawn is back, and your knight eyes f7 with a discovered check.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "How does 5.O-O help White fight for the e4-pawn?",
      choices: [
        { text: 'It takes the king off the e-file and puts a rook one move from e1', correct: true, why: 'Right. Opening the e-file now only hurts Black, whose king is still on e8.' },
        { text: 'It defends e4 with the king', why: "The king on g1 doesn't guard e4. Castling is about the e-file and the rook." },
        { text: 'It attacks the knight on f6', why: "Castling doesn't attack anything. It prepares Re1 and d4." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Black to move. Why does Black play 6...b5 before ...d5?',
      moves: `${MORPHY} Nxe4 d4`,
      orientation: 'black',
      choices: [
        { text: '...d5 would empty d7, and the a4-bishop would pin the c6-knight', correct: true, why: 'Yes. Kicking the bishop first means ...d5 can follow safely.' },
        { text: 'To win the bishop', why: 'The bishop just retreats to b3. The point is to get it off the a4–e8 diagonal.' },
        { text: 'To protect the e4-knight', why: '...b5 does not touch e4. ...d5 protects the knight, and ...b5 makes ...d5 safe.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move. Black has taken a second pawn with 6...exd4. What is the strongest idea?',
      moves: `${MORPHY} Nxe4 d4 exd4`,
      orientation: 'white',
      choices: [
        { text: '7.Re1, pinning the knight to the king', correct: true, why: 'Right. The e-file is open from e1 to e8, so the knight on e4 cannot move.' },
        { text: '7.Nxd4, taking a pawn back', why: 'It wins a pawn, but it lets Black off the hook. The pin with Re1 is much stronger.' },
        { text: '7.Nc3, attacking the knight', why: 'It develops with an attack, but Black can trade with ...Nxc3. Re1 pins the knight instead.' }
      ]
    },
    {
      type: 'move',
      prompt: "Black to move. White's knight on e5 stands in front of the e1-rook. What should Black play?",
      moves: `${MORPHY} Nxe4 Re1 Nc5 Bxc6 dxc6 Nxe5`,
      orientation: 'black',
      choices: [
        { text: '8...Be7', correct: true, why: 'Yes. The bishop closes the e-file, so the knight can no longer give discovered check.' },
        { text: '8...Qd4', why: 'It attacks the knight, but 9.Nf3+ is a discovered check that also hits the queen. You lose it.' },
        { text: '8...Bf5', why: 'It develops, but 9.Nxf7+ is a discovered check that also forks the queen and the h8-rook.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 5...Nxe4 6.d4 b5 7.Bb3 d5 8.dxe5, how does the material stand?',
      moves: `${MORPHY} Nxe4 d4 b5 Bb3 d5 dxe5`,
      orientation: 'white',
      choices: [
        { text: 'Level: Black took on e4, White took on e5', correct: true, why: 'Right. The pawn came back, and White has a strong pawn on e5.' },
        { text: 'Black is a pawn up', why: 'Count again. 8.dxe5 won back the pawn Black took on move 5.' },
        { text: 'White is a pawn up', why: 'Each side has taken one pawn, so material is level.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Open Defense, why does Black play ...d5?',
      choices: [
        { text: 'To support the knight on e4 and block the b3-bishop at d5', correct: true, why: 'Yes. The pawn holds the knight in the center and cuts the bishop off from f7.' },
        { text: "To attack White's king", why: "...d5 is a central move. It supports the knight; it doesn't attack the king." },
        { text: 'To win the e5-pawn', why: 'The d5-pawn does not attack e5. It guards e4 and blocks the bishop.' }
      ]
    }
  ],
  key: { name: 'Main line: 5.O-O, castling into the fight', moves: MORPHY, orientation: 'white' },
  terms: [
    { term: 'Open Defense', meaning: '5...Nxe4: Black takes the e4-pawn and gives it back later for active pieces.' },
    { term: 'Discovered check', meaning: 'A piece moves out of the way and uncovers a check from a piece behind it.' },
    { term: 'Tabiya', meaning: 'A well-known starting position of an opening variation, where the real fight begins.' }
  ]
})
