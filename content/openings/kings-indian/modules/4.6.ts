import { defineModule } from '../../../types'
import { BAYONET } from '../lines'

/** bayonet-9b4-nh5-nf4 */
const JUMP = `${BAYONET} Nh5 Re1 Nf4 Bf1`
/** model-kramnik-kasparov-1997, moves 1–20 (reached via 1.Nf3) */
const KRAMNIK =
  'Nf3 Nf6 c4 g6 Nc3 Bg7 e4 d6 d4 O-O Be2 e5 O-O Nc6 d5 Ne7 b4 Nh5 Re1 Nf4 Bf1 a5 bxa5 Rxa5 Nd2 c5 a4 Ra6 Ra3 g5 g3 Nh3+ Bxh3 Bxh3 Qh5 Qd7 Qxg5 h6 Qe3 f5'
/** model-petrosian-gligoric-1970, moves 1–20 (reached via 1.c4) */
const PETROSIAN =
  'c4 g6 Nf3 Bg7 d4 Nf6 Nc3 O-O e4 d6 Be2 e5 O-O Nc6 d5 Ne7 b4 Nh5 Nd2 Nf4 a4 f5 Bf3 g5 exf5 Nxf5 g3 Nd4 gxf4 Nxf3+ Qxf3 g4 Qh1 exf4 Bb2 Bf5 Rfe1 f3 Nde4 Qh4'

export default defineModule({
  id: '4.6',
  title: 'Bayonet: the ...Nf4 jump',
  minutes: 12,
  level: 3,
  goals: [
    'See why 10...Nf4 looks strong, and why 11.Bf1 takes the sting out',
    'Follow Kramnik–Kasparov 1997: chasing the knight at the right moment',
    'Learn from Petrosian–Gligorić 1970 what the knight can do if White slips'
  ],
  intro:
    "After 9.b4 Nh5 10.Re1, Black has a tempting option: jump straight into f4 instead of playing ...f5. A knight on f4 eyes White's bishop and the squares around White's king. This module shows how White handles it, and what happens when the handling goes wrong.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The knight jump and 11.Bf1',
      intro: 'Look at every square the knight attacks from f4.',
      moves: JUMP,
      start: 18,
      orientation: 'white',
      steps: {
        18: {
          title: 'The knight on h5',
          text: '9...Nh5. As in Module 4.5, the knight leaves f6. From h5 it can play ...f5, or jump into f4.',
          arrows: [['h5', 'f4', 'blue']]
        },
        19: {
          title: 'Room for the bishop',
          text: '10.Re1. The rook frees f1 for the e2-bishop. That will matter in a moment.',
          arrows: [['e2', 'f1', 'blue']]
        },
        20: {
          title: 'The knight jump',
          text: '10...Nf4. The knight attacks the e2-bishop and eyes d3, g2 and h3. It looks very strong.',
          arrows: [['f4', 'e2', 'red'], ['f4', 'h3', 'red'], ['f4', 'd3', 'red']]
        },
        21: {
          title: 'Step back, keep the bishop',
          text: '11.Bf1! The bishop avoids the trade. From f1 it guards e2, d3 and g2, and the g2-pawn covers h3, so the knight has nothing to hit. Later g2–g3 can chase the knight. The engine says White is clearly better.',
          arrows: [['g2', 'h3', 'green'], ['f1', 'd3', 'green']],
          ann: '!'
        }
      }
    },
    {
      kind: 'warning',
      title: 'Two natural moves that help Black',
      body:
        "**11.Bxf4?!** exf4. White gives up the good dark-squared bishop, and with the e5-pawn gone the g7-bishop's long diagonal opens toward c3. The engine calls it roughly equal.\n\n**11.c5 or 11.a4**, ignoring the knight. Then 11...Nxe2+ trades the knight for White's bishop. White is still a bit better, but much less than after 11.Bf1."
    },
    {
      kind: 'walkthrough',
      title: 'Kramnik–Kasparov, Novgorod 1997',
      intro: 'The game began 1.Nf3 and reached the same position. After 11.Bf1, play went 11...a5 12.bxa5 Rxa5 13.Nd2 c5 14.a4 Ra6 15.Ra3.',
      moves: KRAMNIK,
      start: 29,
      orientation: 'white',
      steps: {
        29: {
          title: 'The knight is still there',
          text: "15.Ra3. With ...c5, Black has closed the queenside. The rook guards a4 and the c3-knight. Black's knight is still on f4, and White's f1-bishop still guards d3 and e2.",
          arrows: [['f1', 'd3', 'green']],
          marks: ['f4']
        },
        30: {
          title: 'Propping up the knight',
          text: '15...g5. The pawn supports the f4-knight, so g2–g3 will not simply win it.',
          arrows: [['g5', 'f4', 'green']]
        },
        31: {
          title: 'Chasing the knight',
          text: "16.g3. White kicks the knight anyway. It has to move, and Black's best is the check on h3.",
          arrows: [['g3', 'f4', 'red']]
        },
        32: {
          title: 'Check on h3',
          text: '16...Nh3+. The knight jumps in with check. But the f1-bishop is waiting for it.',
          arrows: [['h3', 'g1', 'red'], ['f1', 'h3', 'green']]
        },
        33: {
          title: 'The point of 11.Bf1',
          text: "17.Bxh3. The bishop simply takes Black's best piece.",
          marks: ['h3']
        },
        34: {
          title: 'Two loose targets',
          text: '17...Bxh3. Black recaptures. Now nothing protects the h3-bishop, and nothing protects the g5-pawn either.',
          marks: ['h3', 'g5']
        },
        35: {
          title: 'A double attack',
          text: '18.Qh5. The queen attacks the h3-bishop and the g5-pawn at the same time.',
          arrows: [['h5', 'h3', 'red'], ['h5', 'g5', 'red']]
        },
        36: {
          title: 'Saving the bishop',
          text: '18...Qd7. The queen guards the h3-bishop, so the g5-pawn has to go.',
          arrows: [['d7', 'h3', 'green']]
        },
        37: {
          title: 'A pawn up',
          text: "19.Qxg5. White wins the pawn, and the pawn cover in front of Black's king gets thinner.",
          marks: ['g5']
        },
        38: {
          title: 'Kicking the queen',
          text: '19...h6. Black chases the queen away.',
          arrows: [['h6', 'g5', 'red']]
        },
        39: {
          title: 'Back to safety',
          text: '20.Qe3. The queen returns to the center.',
          arrows: [['e3', 'c5', 'blue']]
        },
        40: {
          title: 'White is better',
          text: '20...f5. Black hits e4 for one more try. But White is a pawn up, and the engine says White is better. Kramnik won the game.',
          arrows: [['f5', 'e4', 'red']]
        }
      }
    },
    {
      kind: 'history',
      title: "Kasparov's last King's Indian",
      body:
        "Kasparov was one of the King's Indian's most famous players. After critical losses to Kramnik he gave the opening up, and this game is his last classical King's Indian in the chessgames.com database."
    },
    {
      kind: 'walkthrough',
      title: 'Petrosian–Gligorić, Zagreb 1970',
      intro: 'Here White played 10.Nd2 instead of 10.Re1, so the e2-bishop had no f1-square. Play went 10...Nf4 11.a4 f5 12.Bf3 g5 13.exf5 Nxf5.',
      moves: PETROSIAN,
      start: 26,
      orientation: 'white',
      steps: {
        26: {
          title: 'The knight still sits on f4',
          text: "After 13...Nxf5. Black's knight is still on f4, and a second knight has arrived on f5. The engine calls this roughly equal.",
          marks: ['f4', 'f5']
        },
        27: {
          title: 'Kicking the knight',
          text: "14.g3. White attacks the f4-knight, but this loosens the pawns in front of White's king. The engine prefers quieter moves here.",
          arrows: [['g3', 'f4', 'red']],
          ann: '?!'
        },
        28: {
          title: 'Ignoring the threat',
          text: '14...Nd4. Instead of saving the f4-knight, Black brings the other knight to d4 and attacks the f3-bishop.',
          arrows: [['d4', 'f3', 'red']]
        },
        29: {
          title: 'White takes a knight',
          text: '15.gxf4. White wins a piece, but the g-pawn has left White\'s king.',
          marks: ['g2']
        },
        30: {
          title: 'Check',
          text: '15...Nxf3+. The knight takes the bishop with check.',
          arrows: [['f3', 'g1', 'red']]
        },
        31: {
          title: 'A piece up',
          text: "16.Qxf3. White is a whole piece up. But look at White's king: there is no pawn on g2 any more.",
          marks: ['g2']
        },
        32: {
          title: 'The queen is hit',
          text: '16...g4. The pawn attacks the queen and gains space near White\'s king.',
          arrows: [['g4', 'f3', 'red']]
        },
        33: {
          title: 'Into the corner',
          text: '17.Qh1. The queen steps back to the corner, next to its king.',
          marks: ['h1']
        },
        34: {
          title: 'The diagonal opens',
          text: '17...exf4. Black takes a pawn back, and with the e5-pawn gone, the g7-bishop now sees all the way to c3.',
          arrows: [['g7', 'c3', 'red']]
        },
        35: {
          title: 'Another guard',
          text: '18.Bb2. White develops the bishop and adds a guard to the c3-knight.',
          arrows: [['b2', 'c3', 'green']]
        },
        36: {
          title: 'Every piece joins',
          text: '18...Bf5. The last black bishop joins in, eyeing e4 and the light squares.',
          arrows: [['f5', 'e4', 'blue']]
        },
        37: {
          title: 'The open e-file',
          text: '19.Rfe1. The rook takes the open e-file.',
          arrows: [['e1', 'e8', 'blue']]
        },
        38: {
          title: 'A pawn wedge',
          text: "19...f3. The pawn lands close to White's king. It takes e2 and g2 away from White's pieces.",
          arrows: [['f3', 'g2', 'red'], ['f3', 'e2', 'red']]
        },
        39: {
          title: 'A central knight',
          text: '20.Nde4. The knight takes a strong central square, where it also covers f2 and g3 near the king.',
          arrows: [['e4', 'g3', 'green'], ['e4', 'f2', 'green']]
        },
        40: {
          title: 'The queen joins',
          text: '20...Qh4. The queen joins the attack. White is up a knight for a pawn, but the white king has few defenders, and the engine already prefers Black. Gligorić went on to win.',
          arrows: [['h4', 'h2', 'red']]
        }
      }
    }
  ],
  takeaway:
    'Against 10...Nf4, keep the bishop with 11.Bf1: together with the g2-pawn, it guards every square the knight wants, and the knight can be chased later. Without that retreat, as in Petrosian–Gligorić, the knight on f4 can become the start of a winning attack.',
  lookAhead: "Next: Black's most direct answer to the Bayonet, 9...a5, and a trap that costs White a whole knight.",
  drills: [
    {
      title: 'Keep the bishop',
      prompt: "You're White. Black's knight has just jumped to f4 and attacks your e2-bishop. Find the best answer.",
      moves: JUMP,
      start: 20,
      side: 'white',
      hints: ['Your rook has just left f1.', 'Retreat the bishop to the square the rook freed.'],
      success: '11.Bf1! From f1 the bishop guards e2, d3 and g2, the g2-pawn covers h3, and the knight has nothing to hit.'
    },
    {
      title: 'The Bayonet against ...Nf4',
      prompt: "You're White. Play the Bayonet from 8...Ne7 and meet Black's knight jump the right way.",
      moves: JUMP,
      start: 16,
      side: 'white',
      hints: ['Start with the b-pawn, then free f1 with a rook move.', 'When the knight lands on f4, the bishop steps back to f1.'],
      success: '9.b4, 10.Re1 and 11.Bf1. The knight on f4 looks impressive, but it has nothing to attack.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black has just played 10...Nf4, attacking the e2-bishop. What is White\'s best move?',
      moves: `${BAYONET} Nh5 Re1 Nf4`,
      orientation: 'white',
      choices: [
        { text: '11.Bf1', correct: true, why: 'Right. The bishop avoids the trade, and together with the g2-pawn it covers every square the knight wanted.' },
        { text: '11.Bxf4', why: "This gives up White's good dark-squared bishop. After 11...exf4 the g7-bishop's diagonal opens, and the engine calls it roughly equal." },
        { text: '11.c5', why: 'Ignoring the knight allows 11...Nxe2+, trading it for White\'s bishop. White keeps only a small edge.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In Kramnik–Kasparov, what did 18.Qh5 attack?',
      moves: KRAMNIK.split(' ').slice(0, 35).join(' '),
      orientation: 'white',
      choices: [
        { text: 'The h3-bishop and the g5-pawn', correct: true, why: 'Right. Both were unprotected. Black saved the bishop with 18...Qd7 and lost the pawn.' },
        { text: 'The e7-knight and the d6-pawn', why: 'Neither is attacked from h5. The two loose targets were on h3 and g5.' },
        { text: 'The a6-rook', why: 'The queen is nowhere near a6. It hit h3 and g5 at once.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is the f1-square so useful for White\'s bishop against ...Nf4?',
      moves: JUMP,
      orientation: 'white',
      choices: [
        { text: 'From f1 it guards e2, d3 and g2, so the knight has nothing to hit', correct: true, why: 'Right. The g2-pawn covers h3, and once g2–g3 is played the bishop can take a knight on h3, as in Kramnik–Kasparov.' },
        { text: 'From f1 it attacks the f4-knight', why: 'f1 and f4 are on the same file, and a bishop moves on diagonals. It does not attack the knight.' },
        { text: 'It frees e2 for the queen', why: 'The queen does not need e2. The point is to cover the squares the knight wants.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In Petrosian–Gligorić, Black gave up a knight after 14.g3. What did Black get for it?',
      moves: PETROSIAN,
      orientation: 'white',
      choices: [
        { text: "An exposed white king, a pawn on f3 and a strong attack", correct: true, why: 'Right. By move 20 the engine already preferred Black, and Gligorić won.' },
        { text: "White's queen", why: 'White kept the queen. Black got an attack, not material.' },
        { text: 'Nothing: it was a blunder and Black lost', why: 'Gligorić won the game, and by move 20 the engine preferred Black despite the missing knight.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'In Kramnik–Kasparov, the knight was chased with 16.g3 and jumped to h3 with check. What happened next?',
      moves: KRAMNIK.split(' ').slice(0, 32).join(' '),
      orientation: 'white',
      choices: [
        { text: '17.Bxh3: the f1-bishop took the knight', correct: true, why: 'Right. This is why 11.Bf1 was so useful: the bishop was waiting on the f1–h3 diagonal.' },
        { text: '17.Kh1, leaving the knight on h3', why: 'There was no need to run. The bishop on f1 was ready to take the knight.' },
        { text: '17.Kg2, attacking the knight with the king', why: 'The f1-bishop could simply take it. There was no need to involve the king.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In Petrosian–Gligorić, White played 10.Nd2 instead of 10.Re1. Why did that matter against ...Nf4?',
      moves: PETROSIAN.split(' ').slice(0, 20).join(' '),
      orientation: 'white',
      choices: [
        { text: 'With the rook still on f1, the e2-bishop had no f1-square to retreat to', correct: true, why: 'Right. The knight on f4 stayed a thorn, and later became the start of Black\'s attack.' },
        { text: 'The d2-knight blocked the c1-bishop', why: 'It did, but that was not the main problem. The e2-bishop had no f1-square to drop back to.' },
        { text: 'It allowed Black to castle', why: 'Black had already castled. The issue was the missing f1-square for the bishop.' }
      ]
    }
  ],
  key: { name: 'Bayonet: 10...Nf4 11.Bf1', moves: JUMP, orientation: 'white' },
  terms: [
    { term: 'Double attack', meaning: 'One move that creates two threats at once. The opponent can usually meet only one of them.' },
    { term: 'Loose piece', meaning: 'A piece or pawn that nothing protects. Loose pieces are easy targets for double attacks.' },
    { term: 'Pawn cover', meaning: 'The pawns in front of a castled king. When they move or disappear, the king is easier to attack.' }
  ]
})
