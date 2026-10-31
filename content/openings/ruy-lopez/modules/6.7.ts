import { defineModule } from '../../../types'
import { OPEN } from '../../../lines'

/** open-bernstein-11ng5 (Kasparov–Anand 1995, game 10, to 15.Nb3) */
const NG5 = `${OPEN} Nbd2 Nc5 c3 d4 Ng5 dxc3 Nxe6 fxe6 bxc3 Qd3 Bc2 Qxc3 Nb3`
/** open-howell */
const HOWELL = `${OPEN} Qe2 Be7 Rd1 O-O c4 bxc4 Bxc4 Qd7`

export default defineModule({
  id: '6.7',
  title: '9.Nbd2 and 9.Qe2',
  minutes: 12,
  level: 4,
  goals: [
    "Know Karpov's 9.Nbd2 and the knight offer 11.Ng5!?",
    'See how the Howell Attack 9.Qe2 and Rd1 aim at d5',
    'Spot the d-file trick that stops ...dxc4 in the Howell'
  ],
  intro:
    "9.c3 is White's main move in the Open tabiya, but not the only one. Two strong alternatives attack Black's center from different sides: 9.Nbd2 goes after e4 and c3 with sharp tactics, and 9.Qe2 lines up on the d-file against d5.",
  sections: [
    {
      kind: 'walkthrough',
      title: "Karpov's 9.Nbd2 and the 11.Ng5 gambit",
      intro: "You're Black, but watch White's ideas. This is one of the most famous pieces of home preparation in chess.",
      moves: NG5,
      start: 18,
      orientation: 'black',
      steps: {
        18: {
          title: 'The knight steps to c5',
          text: '9.Nbd2 Nc5. White challenged the e4-knight at once, so it stepped back to c5, where it attacks the b3-bishop.',
          arrows: [['c5', 'b3', 'red'], ['d2', 'e4', 'blue']]
        },
        19: {
          title: 'A home for the bishop',
          text: '10.c3. The pawn gives the b3-bishop a retreat on c2.',
          arrows: [['b3', 'c2', 'blue']]
        },
        20: {
          title: 'Black strikes in the center',
          text: '10...d4. The pawn attacks c3. It also opens the line between the e6-bishop and the b3-bishop.',
          arrows: [['d4', 'c3', 'red'], ['e6', 'b3', 'blue']]
        },
        21: {
          title: 'The knight offer',
          text: "11.Ng5. The knight attacks the e6-bishop and offers itself. If 11...Qxg5, then 12.Qf3 hits the undefended c6-knight, with the a8-rook behind it, and White wins the piece back. This idea was first played in the 1978 Karpov–Korchnoi World Championship match.",
          arrows: [['g5', 'e6', 'red'], ['d1', 'f3', 'blue']],
          ann: '!?'
        },
        22: {
          title: 'Black grabs a pawn',
          text: '11...dxc3. Black ignores the knight and takes on c3.',
          arrows: [['d4', 'c3', 'green']]
        },
        23: {
          title: 'Bishop for knight',
          text: '12.Nxe6. White takes the bishop.',
          marks: ['e6']
        },
        24: {
          title: 'Doubled pawns',
          text: "12...fxe6. Black's e-pawns are doubled, the f-file is open, and Black's king is still on e8.",
          marks: ['e8']
        },
        25: {
          title: 'Material is level',
          text: '13.bxc3. White takes back on c3. Material is level again.',
          marks: ['c3']
        },
        26: {
          title: 'The queen jumps in',
          text: '13...Qd3. The queen attacks the c3-pawn, which has no guard.',
          arrows: [['d3', 'c3', 'red']]
        },
        27: {
          title: "Kasparov's prepared move",
          text: '14.Bc2. The bishop attacks the queen and lets the c3-pawn go. White gives a pawn to gain time.',
          arrows: [['c2', 'd3', 'red']],
          ann: '!'
        },
        28: {
          title: 'The pawn is taken',
          text: '14...Qxc3. Black is a pawn up, and the queen now attacks the a1-rook.',
          arrows: [['c3', 'a1', 'red']]
        },
        29: {
          title: 'Develop with a threat',
          text: "15.Nb3. The knight guards a1 and attacks the c5-knight. White is a pawn down, but Black's king is still in the center and White's pieces are ready to attack.",
          arrows: [['b3', 'c5', 'red'], ['b3', 'a1', 'green']]
        }
      }
    },
    {
      kind: 'history',
      title: 'Kasparov–Anand, 1995',
      body:
        "This line decided game 10 of the 1995 PCA World Championship match in New York. Kasparov had prepared 14.Bc2 at home. After a pawn sacrifice and then a rook sacrifice, he won. He used about six minutes for his first 21 moves. It is the classic example of home preparation in a forcing line."
    },
    {
      kind: 'walkthrough',
      title: 'The Howell Attack: 9.Qe2',
      intro: "Now you're White. The target is the d5-pawn, the anchor of Black's knight.",
      moves: HOWELL,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'Another way to start',
          text: "The Open tabiya. Instead of 9.c3, White can aim straight at d5, the pawn that holds Black's position together.",
          marks: ['d5']
        },
        17: {
          title: 'The queen steps up',
          text: '9.Qe2. The queen hits the e4-knight and clears d1 for a rook.',
          arrows: [['e2', 'e4', 'red'], ['f1', 'd1', 'blue']]
        },
        18: {
          title: 'Black develops',
          text: '9...Be7. Black gets ready to castle.',
          arrows: [['e8', 'g8', 'blue']]
        },
        19: {
          title: 'Rook opposite d5',
          text: "10.Rd1. Now d5 is attacked by the rook and the b3-bishop. Behind d5, on the same file, stands Black's queen.",
          arrows: [['d1', 'd5', 'red'], ['b3', 'd5', 'red']],
          marks: ['d8']
        },
        20: {
          title: 'Black castles',
          text: '10...O-O. The king is safe. The queen is still on d8, in line with White\'s rook.',
          arrows: [['d1', 'd8', 'blue']]
        },
        21: {
          title: 'The pawn lever',
          text: "11.c4. The pawn attacks b5 and d5. Black can't take with 11...dxc4, because the d-file would open and 12.Rxd8 would win the queen.",
          arrows: [['c4', 'd5', 'red'], ['d1', 'd8', 'red']],
          ann: '!'
        },
        22: {
          title: 'The b-pawn takes',
          text: '11...bxc4. Black takes with the b-pawn instead and keeps d5 in place.',
          arrows: [['b5', 'c4', 'green']]
        },
        23: {
          title: 'More pressure on d5',
          text: '12.Bxc4. The bishop now hits d5 from c4. The d5-pawn still cannot take it, because of Rxd8.',
          arrows: [['c4', 'd5', 'red'], ['d1', 'd5', 'red']],
          marks: ['d5']
        },
        24: {
          title: 'Rooks connected',
          text: '12...Qd7. The queen guards d5 and e6, and the rooks are now connected, so one can come to d8 to help.',
          arrows: [['d7', 'd5', 'green'], ['f8', 'd8', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Look behind the pawn',
      body:
        "In the Howell Attack, the d5-pawn guards e4 and blocks the d-file. If it ever captures, the file opens and White's rook sees Black's queen. Before a pawn in front of your queen captures anything, check what stands behind it."
    }
  ],
  takeaway:
    "9.Nbd2 Nc5 10.c3 d4 11.Ng5!? is a sharp gambit: if 11...Qxg5, 12.Qf3 wins the piece back. In the Howell, 9.Qe2 and 10.Rd1 aim at d5, and after 11.c4 Black must not play ...dxc4 because of Rxd8.",
  lookAhead:
    "Last in this chapter: the Riga, 6...exd4, where Black skips ...b5 and the tactics on the e-file and h2 come thick and fast.",
  drills: [
    {
      title: 'Find the knight offer',
      prompt: "You're White after 10...d4. Offer your knight, and if Black takes it, win the piece back.",
      moves: `${OPEN} Nbd2 Nc5 c3 d4 Ng5 Qxg5 Qf3`,
      start: 20,
      side: 'white',
      hints: ['Which knight can attack the e6-bishop?', 'After ...Qxg5, the c6-knight has no guard. Your queen can hit it with the a8-rook behind.'],
      success: '11.Ng5 and 12.Qf3. The queen hits the undefended c6-knight, with the a8-rook behind it, so White will win the piece back.'
    },
    {
      title: 'The Howell from memory',
      prompt: "You're White in the Open tabiya. Play the Howell Attack set-up and the c4 lever.",
      moves: `${OPEN} Qe2 Be7 Rd1 O-O c4 bxc4 Bxc4`,
      start: 16,
      side: 'white',
      hints: ['Move the queen up one square to free d1.', 'Put a rook opposite d5, then hit d5 with a pawn.'],
      success: '9.Qe2, 10.Rd1, 11.c4 and 12.Bxc4. All your pieces now aim at d5.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: "Black to move after 11.c4. Why is 11...dxc4 a mistake?",
      moves: `${OPEN} Qe2 Be7 Rd1 O-O c4`,
      orientation: 'black',
      choices: [
        { text: "It opens the d-file, and 12.Rxd8 wins Black's queen", correct: true, why: 'Right. The rook on d1 was waiting behind the d5-pawn.' },
        { text: 'It walks into a pin from the b3-bishop', why: 'The b3-bishop is not the problem. Look down the d-file: 12.Rxd8 wins the queen.' },
        { text: 'It is illegal because d5 is pinned', why: "The pawn isn't pinned to the king, so the move is legal. It just loses the queen." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 11.Ng5, what happens if Black takes the knight with 11...Qxg5?',
      moves: `${OPEN} Nbd2 Nc5 c3 d4 Ng5`,
      orientation: 'white',
      choices: [
        { text: '12.Qf3 hits the undefended c6-knight, with the a8-rook behind it', correct: true, why: 'Yes. White wins the piece back, and the fight goes on.' },
        { text: 'White is simply a knight down', why: '12.Qf3 wins material back at once. The knight offer is a real idea, not a blunder.' },
        { text: "White mates on f7", why: "There's no mate. The point is the long diagonal from f3 to c6 and a8." }
      ]
    },
    {
      type: 'plan',
      prompt: "In the Howell Attack, what is White's main target?",
      moves: `${OPEN} Qe2 Be7 Rd1`,
      orientation: 'white',
      choices: [
        { text: 'The d5-pawn', correct: true, why: 'Right. Qe2, Rd1, c4 and Bxc4 all aim at d5, the anchor of the e4-knight.' },
        { text: "The h7-pawn and Black's king", why: 'The Howell pieces line up on the d-file and the a2-g8 diagonal, not toward h7.' },
        { text: 'The a6-pawn', why: 'The a-pawn is not the point. d5 holds Black\'s center together.' }
      ]
    },
    {
      type: 'concept',
      prompt: "In Kasparov–Anand 1995, why was 14.Bc2 strong even though it gave up the c3-pawn?",
      moves: `${OPEN} Nbd2 Nc5 c3 d4 Ng5 dxc3 Nxe6 fxe6 bxc3 Qd3 Bc2`,
      orientation: 'white',
      choices: [
        { text: "It gains time on the queen while Black's king is still in the center", correct: true, why: 'Exactly. White gives a pawn to get pieces into play quickly.' },
        { text: 'It traps the black queen', why: 'The queen escapes by taking on c3. The point is time, not a trap.' },
        { text: 'It wins the c5-knight', why: 'The c5-knight is attacked later, by 15.Nb3. 14.Bc2 is about tempo.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'White has just played 9.Qe2. What is this line called?',
      moves: `${OPEN} Qe2`,
      orientation: 'white',
      choices: [
        { text: 'The Howell Attack', correct: true, why: 'Right. 9.Qe2, usually with Rd1 and c4, is the Howell Attack.' },
        { text: "Karpov's 9.Nbd2", why: 'That line starts with 9.Nbd2 and leads to the 11.Ng5 gambit.' },
        { text: 'The Breslau Variation', why: 'The Breslau is 9.c3 Be7 10.Re1 O-O 11.Nd4 Nxe5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9.Nbd2 Nc5 10.c3, what does 10...d4 do?',
      moves: `${OPEN} Nbd2 Nc5 c3 d4`,
      orientation: 'black',
      choices: [
        { text: 'It attacks c3 and opens the line from e6 to the b3-bishop', correct: true, why: 'Yes. The pawn strikes the center and frees the e6-bishop at the same time.' },
        { text: 'It defends the c5-knight', why: 'A pawn on d4 attacks c3 and e3. It does not guard c5.' },
        { text: 'It traps the b3-bishop', why: 'The bishop still has c2 and other squares. It is not trapped.' }
      ]
    }
  ],
  key: { name: 'Open Defense: 9.Nbd2 Nc5 10.c3 d4 11.Ng5', moves: `${OPEN} Nbd2 Nc5 c3 d4 Ng5`, orientation: 'white' },
  terms: [
    { term: 'Gambit', meaning: 'Giving up material, usually a pawn, early in the game to gain time or an attack.' },
    { term: 'Home preparation', meaning: 'Moves a player has studied before the game, often deep into a forcing line.' },
    { term: 'X-ray', meaning: 'A piece that attacks through another piece, like a rook behind a pawn aiming at the queen beyond it.' }
  ]
})
