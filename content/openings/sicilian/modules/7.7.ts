import { defineModule } from '../../../types'
import { MORRA_ACCEPTED } from '../lines'

/** morra-e6-setup: 5...e6 6.Bc4 a6 7.O-O Nge7 8.Bg5 f6 9.Be3 Ng6 */
const SETUP = `${MORRA_ACCEPTED} e6 Bc4 a6 O-O Nge7 Bg5 f6 Be3 Ng6`
/** 5...e6 6.Bc4 Qc7 7.Qe2 Nf6 8.O-O Ng4: the trap is set */
const NG4 = `${MORRA_ACCEPTED} e6 Bc4 Qc7 Qe2 Nf6 O-O Ng4`
/** morra-siberian-trap: 9.h3?? Nd4! 10.Nxd4 Qh2# */
const SIBERIAN = `${NG4} h3 Nd4 Nxd4 Qh2#`
/** If the queen runs: 10.Qd1 Nxf3+ 11.gxf3 Qh2# (checked with chess.js) */
const QUEEN_RUNS = `${NG4} h3 Nd4 Qd1 Nxf3+ gxf3 Qh2#`

export default defineModule({
  id: '7.7',
  title: 'Avoiding the Morra tricks, and the Siberian Trap',
  minutes: 12,
  level: 2,
  goals: [
    'Learn a safe set-up for Black: ...e6, ...a6 and ...Nge7–g6',
    'Spring the Siberian Trap: ...Ng4, ...Nd4 and ...Qh2#',
    'As White, know the right answer to 8...Ng4: 9.Rd1!'
  ],
  intro:
    "Module 7.6 showed how White's e4–e5 and Bxf7+ tricks punish careless captures. Can Black simply set up so those tricks never work? Yes, at a small price. And in one popular line, it is Black who sets the trap: the Siberian.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'A safe set-up: ...e6, ...a6 and ...Nge7–g6',
      intro: "Black keeps the f6-square empty, so e4–e5 never hits a knight. Watch where the king's knight goes.",
      moves: SETUP,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'The Morra accepted',
          text: "5.Nf3. White has two knights out for the pawn. Black now chooses a set-up that avoids the usual tricks.",
          arrows: [['f1', 'c4', 'blue']]
        },
        10: {
          title: 'Close the diagonal early',
          text: "5...e6. The pawn will block the bishop's path to f7 as soon as it comes to c4.",
          marks: ['e6', 'f7']
        },
        11: {
          title: 'The bishop comes out',
          text: '6.Bc4. The bishop aims at e6 and f7, but the e6-pawn is in the way.',
          arrows: [['c4', 'e6', 'yellow']]
        },
        12: {
          title: 'No Nb5, no Bb5',
          text: "6...a6. The pawn takes b5 away from White's knight and bishop. Knight jumps to b5, aiming at c7 and d6, are a common Morra idea.",
          arrows: [['a6', 'b5', 'green']],
          marks: ['c7', 'd6']
        },
        13: {
          title: 'White castles',
          text: '7.O-O. White completes the kingside.',
          arrows: [['e1', 'g1', 'green']]
        },
        14: {
          title: 'Not to f6',
          text: '7...Nge7. The knight is heading for g6. There, a push e4–e5 cannot attack it, and it still watches e5.',
          arrows: [['e7', 'g6', 'blue']]
        },
        15: {
          title: 'A pin on e7',
          text: '8.Bg5. The bishop attacks the e7-knight and pins it to the queen on d8.',
          arrows: [['g5', 'e7', 'red'], ['e7', 'd8', 'yellow']]
        },
        16: {
          title: 'Kick the bishop',
          text: '8...f6. The pawn chases the bishop away. It costs a move, and the e6-pawn loses the f7-pawn as a defender.',
          arrows: [['f6', 'g5', 'red']],
          marks: ['e6']
        },
        17: {
          title: 'The bishop steps back',
          text: '9.Be3. The bishop returns to a good central square.',
          arrows: [['g5', 'e3', 'blue']]
        },
        18: {
          title: 'Safe, but passive',
          text: "9...Ng6. The knight has arrived. No tricks work for White, and Black is still a pawn up. But both black bishops and the queen are still at home and Black hasn't castled, so the engine prefers White a little.",
          marks: ['c8', 'f8']
        }
      }
    },
    {
      kind: 'text',
      title: 'The honest verdict',
      body:
        "This set-up is **safe**: there is no e4–e5 shot against a knight on f6, no Nb5, and no Bxf7+. It is a good choice if you want to avoid traps.\n\nBut it is **passive**. Black spends moves on ...a6, ...Nge7–g6 and ...f6 while White develops, and the engine gives White a small edge. White's gambit has paid off in this line, even though Black keeps the extra pawn."
    },
    {
      kind: 'walkthrough',
      title: 'The Siberian Trap',
      intro: 'A different set-up: the queen goes to c7. Look at the diagonal from c7 to h2.',
      moves: SIBERIAN,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The bishop is out',
          text: '6.Bc4. The same position as before, with Black\'s e-pawn on e6.',
          arrows: [['c4', 'e6', 'yellow']]
        },
        12: {
          title: 'Queen to c7',
          text: '6...Qc7. The queen develops and looks down the diagonal at h2, next to White\'s future castled king.',
          arrows: [['c7', 'h2', 'blue']]
        },
        13: {
          title: "White's set-up",
          text: '7.Qe2. The usual Morra queen move, making room for a rook on d1.',
          marks: ['d1']
        },
        14: {
          title: 'Develop',
          text: '7...Nf6. The knight develops. It can jump to g4 next.',
          arrows: [['f6', 'g4', 'blue']]
        },
        15: {
          title: 'White castles',
          text: '8.O-O. Now the king is on g1, and h2 is guarded only by the king and the f3-knight.',
          arrows: [['f3', 'h2', 'green']],
          marks: ['h2']
        },
        16: {
          title: 'Two pieces on h2',
          text: '8...Ng4. The queen and the knight both aim at h2. The threat is ...Nd4: it attacks the e2-queen, and if the f3-knight takes it, h2 loses a guard.',
          arrows: [['c7', 'h2', 'red'], ['g4', 'h2', 'red'], ['c6', 'd4', 'blue']],
          ann: '!?'
        },
        17: {
          title: 'The natural blunder',
          text: '9.h3. White kicks the knight, the most natural move on the board. It loses at once.',
          arrows: [['h3', 'g4', 'red']],
          ann: '??'
        },
        18: {
          title: 'The knight jumps in',
          text: '9...Nd4. The knight attacks the queen on e2. Every White reply loses the queen or gets mated.',
          arrows: [['d4', 'e2', 'red'], ['d4', 'f3', 'red']],
          ann: '!'
        },
        19: {
          title: 'Taking the knight',
          text: '10.Nxd4. White removes the attacker. But the f3-knight was the piece guarding h2.',
          marks: ['h2']
        },
        20: {
          title: 'Checkmate',
          text: "10...Qh2#. The queen lands on h2 with the g4-knight's support. The king cannot take it, and f1, f2 and g2 are all blocked by White's own pieces. That is the Siberian Trap.",
          arrows: [['g4', 'h2', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'If the queen runs instead',
      intro: 'After 9...Nd4, saving the queen does not help either.',
      moves: QUEEN_RUNS,
      start: 18,
      orientation: 'black',
      steps: {
        18: {
          title: 'The queen is attacked',
          text: '9...Nd4. Black threatens ...Nxe2+.',
          arrows: [['d4', 'e2', 'red']]
        },
        19: {
          title: 'The queen steps away',
          text: '10.Qd1. The queen escapes and still guards f3.',
          arrows: [['d1', 'f3', 'green']]
        },
        20: {
          title: 'Remove the guard',
          text: '10...Nxf3+. The knight takes the f3-knight with check. White can take back or play Kh1, but either way h2 has lost its guard.',
          arrows: [['f3', 'g1', 'red']]
        },
        21: {
          title: 'No guard on h2',
          text: '11.gxf3. White takes. Taking with the queen does not help either: the f3-knight is gone, so h2 has no defender except the king.',
          marks: ['h2']
        },
        22: {
          title: 'Mate again',
          text: '11...Qh2#. The same checkmate. And if White had played 10.hxg4 instead, 10...Nxe2+ wins the queen.',
          arrows: [['g4', 'h2', 'green']]
        }
      }
    },
    {
      kind: 'tip',
      title: "White's answer: 9.Rd1!",
      body:
        "After 8...Ng4, White must deal with the threat of ...Nd4 at once. The best move is **9.Rd1!**: the rook guards d4, so 9...Nd4? 10.Rxd4 just loses a knight, and it also frees f1, so the king can step there after any ...Qh2+. With 9.Rd1, White is fine and the position is roughly equal. Never play 9.h3??."
    }
  ],
  takeaway:
    'The ...e6, ...a6, ...Nge7–g6 set-up avoids the Morra tricks but is passive: the engine prefers White a little. In the Siberian Trap, after 8...Ng4 the natural 9.h3?? loses to 9...Nd4!; White must play 9.Rd1!.',
  lookAhead: 'Module 7.8 shows the other way to avoid the Morra tricks: decline the gambit with 3...Nf6, 3...d5 or 3...d3.',
  drills: [
    {
      title: 'Spring the Siberian Trap',
      prompt: "You're Black. White has just played 9.h3??, kicking your knight. Punish it.",
      moves: SIBERIAN,
      start: 17,
      side: 'black',
      hints: ['Leave the g4-knight where it is. Which knight move attacks the queen?', 'If the f3-knight takes on d4, what happens to h2?'],
      success: '9...Nd4! 10.Nxd4 Qh2#. The Siberian Trap.'
    },
    {
      title: 'The safe set-up',
      prompt: "You're Black. White has offered the Morra. Set up so that e4–e5 and Nb5 never work: pawns to e6 and a6, the knight via e7, and kick the bishop when it pins.",
      moves: SETUP.split(' ').slice(0, 16).join(' '),
      start: 9,
      side: 'black',
      hints: ['Start with ...e6, then take b5 away with your a-pawn.', 'Bring the g8-knight to e7. When Bg5 pins it, push the f-pawn.'],
      success: '...e6, ...a6, ...Nge7 and ...f6. Next comes ...Ng6. Safe, though a little passive.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'In the safe set-up, why does the g8-knight go to g6 via e7 instead of to f6?',
      moves: SETUP,
      orientation: 'black',
      choices: [
        { text: "On f6 it could be hit by e4–e5; on g6 it can't, and it still watches e5", correct: true, why: 'Right. Avoiding e4–e5 tricks is the whole point of this set-up.' },
        { text: 'On g6 it attacks White\'s king', why: 'The knight on g6 guards e5 and f4. It is a defender, not an attacker.' },
        { text: 'The f6-square is taken by the f-pawn from the start', why: 'The f-pawn only went to f6 later, to kick the bishop. The knight chose e7 and g6 before that.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 9.h3?? Nd4, what happens if White takes the knight with 10.Nxd4?',
      moves: SIBERIAN.split(' ').slice(0, 18).join(' '),
      orientation: 'black',
      choices: [
        { text: '10...Qh2#', correct: true, why: 'Yes. The f3-knight was the guard of h2. Without it, the queen mates with the g4-knight\'s support.' },
        { text: 'Black loses a knight for nothing', why: 'Not at all: after 10.Nxd4, 10...Qh2 is checkmate.' },
        { text: '10...Nxf2, winning a rook', why: 'From f2 the knight attacks no rook, and White just takes it. 10...Qh2# ends the game at once.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Black has just played 8...Ng4. What is the best move?',
      moves: NG4,
      orientation: 'white',
      choices: [
        { text: '9.Rd1', correct: true, why: 'Right. The rook guards d4 and frees f1 for the king. The position is roughly equal.' },
        { text: '9.h3', why: 'The Siberian Trap: 9...Nd4! wins the queen or mates, for example 10.Nxd4 Qh2#.' },
        { text: '9.Bf4', why: 'It blocks the diagonal, but nothing guards f4: 9...Qxf4 wins a bishop.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the honest verdict on the ...e6, ...a6, ...Nge7–g6 set-up?',
      choices: [
        { text: 'Safe from tricks but passive: the engine prefers White a little', correct: true, why: 'Right. Black keeps the pawn, but falls behind in development.' },
        { text: 'It refutes the Morra and wins for Black', why: "The engine doesn't agree. White keeps a small edge in this line." },
        { text: 'It loses by force to e4–e5', why: 'The opposite: avoiding e4–e5 tricks is what the set-up is for.' }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'After 8...Ng4 in the Siberian Trap line, what is Black threatening?',
      moves: NG4,
      orientation: 'black',
      choices: [
        { text: '...Nd4, attacking the e2-queen, with ...Qh2# if the f3-knight takes it', correct: true, why: 'Exactly. The f3-knight guards h2, so Black wants to lure it away or trade it off.' },
        { text: '...Qxh2# at once', why: 'Not yet: the f3-knight and the king both guard h2. That is why Black needs ...Nd4 first.' },
        { text: '...Nxf2, winning a rook', why: 'After ...Nxf2 White simply takes with the rook or the queen. The real threat is ...Nd4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does 9.Rd1 stop the Siberian Trap?',
      choices: [
        { text: 'The rook guards d4 and frees the f1-square for the king', correct: true, why: 'Right. 9...Nd4? 10.Rxd4 loses a knight, and after any ...Qh2+, the king can go to f1.' },
        { text: "It attacks Black's queen", why: 'The rook on d1 does not attack c7. It guards d4 and makes room on f1.' },
        { text: 'It threatens Rd8 mate', why: "Black's d7-pawn blocks the d-file. The point is d4 and the f1 escape square." }
      ]
    }
  ],
  key: { name: 'Siberian Trap: 9.h3?? Nd4!', moves: `${NG4} h3 Nd4`, orientation: 'black' },
  terms: [
    { term: 'Set-up', meaning: 'A plan for where to put your pieces and pawns, which you can use against many different moves.' },
    { term: 'Escape square', meaning: "An empty square next to the king where it can step out of check. 9.Rd1 gives White's king the f1-square." },
    { term: 'Luring', meaning: 'Forcing or tempting an enemy piece to a square where it no longer does its job, like the f3-knight taking on d4.' }
  ]
})
