import { defineModule } from '../../../types'
import { KID } from '../lines'

/** model-christiansen-kasparov-1982, moves 1–20 (the research line) */
const GAME = `${KID} f4 O-O Nf3 c5 d5 e6 dxe6 fxe6 Bd3 Nc6 O-O Nd4 Ng5 e5 f5 h6 Nh3 gxf5 exf5 b5 Be3 bxc4 Bxc4+ Kh8 Bxd4 cxd4 Nd5 Ba6 Nxf6 Bxc4 Nh5 Bxf1`
/** The game up to 14...b5 */
const B5 = `${KID} f4 O-O Nf3 c5 d5 e6 dxe6 fxe6 Bd3 Nc6 O-O Nd4 Ng5 e5 f5 h6 Nh3 gxf5 exf5 b5`
/** four-pawns-6na6, then four-pawns-6na6-qc2: 10.Qc2?! Nfxe4! 11.Nxe4 Bf5 12.Bd3 Bxe4 13.Bxe4 f5 */
const NA6 = `${KID} f4 O-O Nf3 Na6 Be2 e5 fxe5 dxe5 d5 Nc5`
const QC2 = `${NA6} Qc2 Nfxe4 Nxe4 Bf5 Bd3 Bxe4 Bxe4 f5`
/** four-pawns-florentine: 9.e5 Ne4 10.Nxd5 */
const FLORENTINE = `${KID} f4 O-O Nf3 c5 d5 e6 Be2 exd5 e5`

export default defineModule({
  id: '7.6',
  title: 'Other tries for both sides',
  minutes: 12,
  level: 3,
  goals: [
    "Know 8.dxe6 fxe6 and follow Kasparov's queenside play",
    'Win back a piece with the 6...Na6 trick: ...Nfxe4 and the ...Bf5 pin',
    'Recognize the Florentine Gambit, 7.Be2 cxd4 and 6.e5?!'
  ],
  intro:
    "The main line 8.Be2 exd5 9.cxd5 is not the only way to play the Four Pawns. White can take on e6, push e5 early, or avoid the Benoni altogether, and Black has a different 6th move, 6...Na6. This module tours those tries, with one model game and one trick worth knowing by heart.",
  sections: [
    {
      kind: 'text',
      title: '8.dxe6: a different capture',
      body:
        "After 6...c5 7.d5 e6, White can take at once with 8.dxe6 instead of playing 8.Be2. In Christiansen–Kasparov, Moscow Interzonal 1982, Black recaptured 8...fxe6. There is no Benoni structure now. Black has pawns on d6 and e6, and the f-file is **half-open** for Black: only White's f4-pawn stands on it. The d-file is half-open for White, because White's d-pawn has gone. The engine calls the position equal.\n\nThe game went 9.Bd3 Nc6 10.O-O Nd4 11.Ng5 e5 12.f5 h6 13.Nh3 gxf5 14.exf5. Black's knight reached d4, and White pushed the f-pawn toward Black's king. The walkthrough starts here. Kasparov won in 40 moves."
    },
    {
      kind: 'walkthrough',
      title: 'Christiansen–Kasparov, 1982',
      intro: "Black to move after 14.exf5. Watch how Black opens the queenside, and how one White mistake decides the game.",
      moves: GAME,
      start: 27,
      orientation: 'black',
      steps: {
        27: {
          title: 'A knight on an outpost',
          text: "14.exf5. Black's knight sits on d4, where no White pawn can chase it. The pawns on d6 and e5 hold the center. White has the f5-pawn and hopes to attack the king.",
          marks: ['d4'],
          arrows: [['e5', 'd4', 'green']]
        },
        28: {
          title: 'The pawn offer',
          text: '14...b5. Kasparov offers a pawn. It attacks c4 and gets ready to open the b-file and the a6–f1 diagonal for the c8-bishop. The engine slightly prefers 14...Qe8, but this sets White a real problem.',
          arrows: [['b5', 'c4', 'red'], ['c8', 'a6', 'blue']],
          ann: '!?'
        },
        29: {
          title: 'The turning point',
          text: "15.Be3. White develops and hits the d4-knight, but ignores the pawn. 15.Nxb5 was White's only good move and would have kept the game roughly equal. Now Black is clearly better.",
          arrows: [['c3', 'b5', 'blue']],
          ann: '?'
        },
        30: {
          title: 'Black takes',
          text: "15...bxc4. Black takes the c4-pawn. The b-file is now half-open for Black: only White's b2-pawn stands on it.",
          marks: ['c4']
        },
        31: {
          title: 'A check on the diagonal',
          text: '16.Bxc4+. White takes back with check. The bishop on c4 sees all the way to g8.',
          arrows: [['c4', 'g8', 'red']]
        },
        32: {
          title: 'Into the corner',
          text: '16...Kh8. The king steps out of the check.',
          arrows: [['g8', 'h8', 'green']]
        },
        33: {
          title: 'Removing the knight',
          text: "17.Bxd4. White gives up the bishop to get rid of Black's strong knight.",
          marks: ['d4']
        },
        34: {
          title: 'Black takes back',
          text: "17...cxd4. Black recaptures. The c-file is now open: neither side has a pawn on it.",
          marks: ['d4']
        },
        35: {
          title: 'A central knight',
          text: '18.Nd5. The knight jumps to a strong central square and attacks the f6-knight.',
          arrows: [['d5', 'f6', 'red']]
        },
        36: {
          title: 'The bishop arrives',
          text: '18...Ba6. The bishop attacks the c4-bishop, which has no defender. Behind it on the same diagonal stands the rook on f1.',
          arrows: [['a6', 'c4', 'red'], ['c4', 'f1', 'yellow']]
        },
        37: {
          title: 'White hits back',
          text: '19.Nxf6. White takes the f6-knight and hopes Black will take back, so the c4-bishop can be saved.',
          marks: ['f6']
        },
        38: {
          title: 'Bishop first',
          text: '19...Bxc4. Black takes the bishop instead. Now it attacks the f1-rook, and the knight on f6 is attacked three times: by the g7-bishop, the f8-rook and the queen.',
          arrows: [['c4', 'f1', 'red'], ['g7', 'f6', 'red'], ['f8', 'f6', 'red']]
        },
        39: {
          title: 'The knight escapes',
          text: '20.Nh5. The knight runs and attacks the g7-bishop.',
          arrows: [['h5', 'g7', 'red']]
        },
        40: {
          title: 'The rook falls',
          text: '20...Bxf1. Black takes the rook. Once White takes back on f1, Black has won the exchange: a rook for a bishop. Black is winning, and Kasparov went on to win the game.',
          marks: ['f1']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '6...Na6 and the ...Nfxe4 trick',
      intro: 'Instead of 6...c5, Black can play 6...Na6. The line went 7.Be2 e5 8.fxe5 dxe5 9.d5. Now look at the queen on c2.',
      moves: QC2,
      start: 17,
      orientation: 'black',
      steps: {
        17: {
          title: 'A different set-up',
          text: '9.d5. Black played ...e5 instead of ...c5, and the knight on a6 is ready to jump to c5.',
          arrows: [['a6', 'c5', 'blue']]
        },
        18: {
          title: 'Pressure on e4',
          text: '9...Nc5. Now e4 is attacked twice (the c5- and f6-knights) and defended once (the c3-knight).',
          arrows: [['c5', 'e4', 'red'], ['f6', 'e4', 'red'], ['c3', 'e4', 'green']]
        },
        19: {
          title: 'A second defender, on a bad line',
          text: '10.Qc2. Two attackers, two defenders: it looks safe. But the queen now stands on the diagonal c2–h7. The engine prefers 10.Bg5.',
          arrows: [['c2', 'e4', 'green'], ['c2', 'f5', 'yellow']],
          ann: '?!'
        },
        20: {
          title: 'Take anyway',
          text: "10...Nfxe4. Black's only good move. The f6-knight takes, so the c5-knight stays where it is and keeps hitting e4.",
          arrows: [['c5', 'e4', 'red']],
          ann: '!'
        },
        21: {
          title: 'White takes',
          text: '11.Nxe4. For now, White has a knight for a pawn.',
          marks: ['e4']
        },
        22: {
          title: 'A real pin',
          text: "11...Bf5. The bishop attacks the e4-knight, and behind it stands White's queen. If the knight moves, ...Bxc2 wins the queen. This pin is real.",
          arrows: [['f5', 'e4', 'red'], ['e4', 'c2', 'yellow']],
          ann: '!'
        },
        23: {
          title: 'Block and defend',
          text: '12.Bd3. The bishop guards the knight and blocks the line to the queen. The queen stands right behind the bishop, so it still backs up e4.',
          arrows: [['d3', 'e4', 'green']]
        },
        24: {
          title: 'Trade on e4',
          text: '12...Bxe4. Black trades the bishop for the knight.',
          marks: ['e4']
        },
        25: {
          title: 'White takes back',
          text: '13.Bxe4. White is still a piece up for a pawn, for the moment.',
          arrows: [['c5', 'e4', 'red']]
        },
        26: {
          title: 'The pawn joins in',
          text: '13...f5. The pawn attacks the e4-bishop, which the c5-knight also attacks. The bishop cannot stay, and Black wins the piece back: for example, 14.Bxf5 Rxf5 leaves material level, and the engine prefers Black.',
          arrows: [['f5', 'e4', 'red'], ['c5', 'e4', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'text',
      title: 'Three more sidelines',
      body:
        "**The Florentine Gambit, 9.e5?!** After 8.Be2 exd5, White pushes 9.e5 instead of taking back on d5. Black answers 9...Ne4!, a central square the e-pawn has just left, and after 10.Nxd5 the engine prefers Black.\n\n**7.Be2 cxd4 8.Nxd4 Nc6 9.Be3.** White avoids the Benoni by not pushing d5. After the trade on d4, White's pawns on c4 and e4 look like the Maróczy structure from Module 5.9, with White's f-pawn already on f4. The game is roughly equal.\n\n**6.e5?! dxe5 7.fxe5 Nfd7.** White pushes before developing. The e5-pawn is overextended: Black hits d4, the pawn that guards it, with ...c5, and brings a knight to c6 to attack e5. The engine prefers Black."
    }
  ],
  takeaway:
    "Against 8.dxe6 fxe6, Black gets central pawns and active pieces, as Kasparov showed. After 6...Na6, ...Nc5 and ...Nfxe4, the ...Bf5 pin against a queen on c2 wins the piece back. Early e5 pushes (6.e5?!, 9.e5?!) leave White's center overextended.",
  lookAhead:
    "Module 7.7 shows an even earlier pawn storm, 4...O-O 5.e5 Ne8 6.f4, and how Fischer punished it with a queen sacrifice.",
  drills: [
    {
      title: 'The ...Nfxe4 trick',
      prompt: "You're Black. White has just guarded e4 a second time with 10.Qc2?!. Take on e4 anyway, pin the knight to the queen, and win the piece back.",
      moves: QC2,
      start: 19,
      side: 'black',
      hints: [
        'Take with the f6-knight, so the c5-knight keeps attacking e4.',
        'After 11.Nxe4, which bishop move pins the knight to the queen on c2? Later, a pawn joins the attack.'
      ],
      success: '10...Nfxe4!, 11...Bf5!, 12...Bxe4 and 13...f5!. The e4-bishop is lost, and Black wins the piece back.'
    },
    {
      title: "Find Christiansen's improvement",
      prompt: "You're White in Christiansen–Kasparov. Black has just offered a pawn with 14...b5. In the game White played 15.Be3? and lost. Find the move that keeps the game roughly equal.",
      moves: `${B5} Nxb5`,
      start: 28,
      side: 'white',
      hints: ['Take the pawn.', 'Take with a piece, not the c-pawn, so the c4-pawn keeps guarding d5.'],
      success: '15.Nxb5! The only good move. White takes the pawn with the knight and the game stays roughly equal.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 8.dxe6 fxe6, which file is half-open for Black?',
      moves: `${KID} f4 O-O Nf3 c5 d5 e6 dxe6 fxe6`,
      orientation: 'black',
      choices: [
        { text: 'The f-file', correct: true, why: "Right. Black's f-pawn has gone to e6, and only White's f4-pawn stands on the f-file." },
        { text: 'The e-file', why: 'Both sides have an e-pawn (e4 and e6), so the e-file is closed.' },
        { text: 'The d-file', why: "Black's d6-pawn is still there. The d-file is half-open for White, whose d-pawn took on e6." }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White has just played 10.Qc2. What is the strongest move?',
      moves: `${NA6} Qc2`,
      orientation: 'black',
      choices: [
        { text: '10...Nfxe4', correct: true, why: 'Right. After 11.Nxe4 Bf5! the knight is pinned to the queen, and Black wins the piece back.' },
        { text: '10...Qe7', why: 'Too slow. White gets time for Bg5, and White is better. The trick on e4 only works right now.' },
        { text: '10...a5', why: 'A useful move in many positions, but here it misses the chance on e4. White is a little better after it.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 10.Qc2 Nfxe4 11.Nxe4 Bf5, why can\'t the e4-knight move?',
      moves: `${NA6} Qc2 Nfxe4 Nxe4 Bf5`,
      orientation: 'black',
      choices: [
        { text: 'It is pinned to the queen: if it moves, ...Bxc2 wins the queen', correct: true, why: 'Right. A pin against the queen is real, because the queen is worth far more than the bishop.' },
        { text: 'It is pinned to the king', why: "White's king is on e1, not behind the knight. The queen on c2 is behind it." },
        { text: 'It has no squares to go to', why: 'The knight has squares, but moving it would lose the queen.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move in Christiansen–Kasparov. Black has just played 14...b5. What should White play?',
      moves: B5,
      orientation: 'white',
      choices: [
        { text: '15.Nxb5', correct: true, why: 'Right. The only good move: take the pawn with the knight, and the game stays roughly equal.' },
        { text: '15.Be3', why: 'This is what Christiansen played. After 15...bxc4 Black\'s pieces flood the queenside, and Black is clearly better.' },
        { text: '15.cxb5', why: 'Taking with the pawn gives up the c4-pawn\'s grip on d5. After 15...d5 Black is clearly better.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'White has played 9.e5 instead of 9.cxd5. What is this line called?',
      moves: FLORENTINE,
      orientation: 'black',
      choices: [
        { text: 'The Florentine Gambit', correct: true, why: 'Right. 9.e5?! leaves the d5-pawn for later. 9...Ne4! and the engine prefers Black.' },
        { text: 'The Four Pawns main line', why: 'The main line is 9.cxd5, taking back on d5. Here White pushed the e-pawn instead.' },
        { text: 'The Averbakh', why: 'The Averbakh is 5.Be2 O-O 6.Bg5. Here White played 5.f4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 6.e5?! dxe5 7.fxe5 Nfd7 good for Black?',
      moves: `${KID} f4 O-O e5 dxe5 fxe5 Nfd7`,
      orientation: 'black',
      choices: [
        { text: 'The e5-pawn is overextended: ...c5 and ...Nc6 attack it and its defender', correct: true, why: 'Right. White pushed before developing, so the pawn on e5 is hard to support.' },
        { text: 'White loses a piece by force', why: 'Nothing is lost at once. The problem is a weak, overextended pawn, not a tactic.' },
        { text: 'The e5-pawn is already undefended', why: 'The d4-pawn defends e5 for now. Black attacks that defender with ...c5.' }
      ]
    }
  ],
  key: { name: 'Four Pawns, 6...Na6: 10.Qc2?! Nfxe4! 11.Nxe4 Bf5', moves: `${NA6} Qc2 Nfxe4 Nxe4 Bf5`, orientation: 'black' },
  terms: [
    { term: 'Outpost', meaning: 'A square in or near enemy territory where your piece cannot be chased away by an enemy pawn.' },
    { term: 'The exchange', meaning: 'Winning the exchange means winning a rook for a bishop or knight.' },
    { term: 'Open file', meaning: 'A file with no pawns of either color on it. Rooks love open files.' }
  ]
})
