import { defineModule } from '../../../types'
import { CLOSED_OO } from '../../../lines'

const QH3 = `${CLOSED_OO} c3 d5 exd5 Nxd5 Nxe5 Nxe5 Rxe5 c6 d4 Bd6 Re1 Qh4 g3 Qh3`
const SPASSKY = `${QH3} Be3 Bg4 Qd3 Rae8 Nd2 Re6`
const MATE = `${QH3} Be3 Bg4 Qd2 Bf3 Bxd5 Qg2#`

export default defineModule({
  id: '5.4',
  title: 'Attacking patterns: ...Bg4, ...Rae8, ...Re6',
  minutes: 11,
  level: 4,
  goals: [
    'Bring every black piece into the attack, one with each move',
    'Know the ...Bf3 and ...Qg2 mating pattern',
    'Recognise the rook lift and the ...Bxg3 break'
  ],
  intro:
    "With the queen on h3, Black has one attacker next to White's king. One piece alone won't mate anybody. This module shows how Black adds the bishop, then a rook, then another rook, and what happens if White misses a single defensive move.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Every piece joins in',
      intro: 'This is the main line, 15.Be3. Notice that each Black move brings a new piece closer to the king.',
      moves: SPASSKY,
      start: 28,
      orientation: 'black',
      steps: {
        28: {
          title: 'One attacker so far',
          text: '14...Qh3. The queen is in. The c8-bishop and the a8-rook are still at home. Those are the next pieces to bring.',
          arrows: [['c8', 'g4', 'blue'], ['a8', 'e8', 'blue']]
        },
        29: {
          title: 'White develops',
          text: "15.Be3. White's bishop finally comes out. It also covers f4, a square the d5-knight would love to jump to.",
          arrows: [['e3', 'f4', 'green']]
        },
        30: {
          title: 'The bishop joins',
          text: "15...Bg4. The bishop attacks White's queen and eyes f3. With Black's queen on h3, a bishop on f3 would support ...Qg2 mate.",
          arrows: [['g4', 'd1', 'red'], ['g4', 'f3', 'yellow']],
          marks: ['g2']
        },
        31: {
          title: 'The queen defends',
          text: '16.Qd3. The queen escapes and now watches f1. From there it can go to f1 to guard g2 or offer a queen trade.',
          arrows: [['d3', 'f1', 'green']]
        },
        32: {
          title: 'The last piece arrives',
          text: '16...Rae8. The a8-rook was the only Black piece that had not moved. Now it stands on the open e-file, aimed at the e3-bishop.',
          arrows: [['e8', 'e3', 'red']]
        },
        33: {
          title: 'Guarding f3',
          text: '17.Nd2. The knight develops and covers f3. If Black plays ...Bf3 now, White can take it with Nxf3.',
          arrows: [['d2', 'f3', 'green']]
        },
        34: {
          title: 'The rook lift',
          text: '17...Re6. The rook climbs to the 6th rank. From here it can swing to h6, behind the queen, or to f6, aiming down the f-file at f2.',
          arrows: [['e6', 'h6', 'blue'], ['e6', 'f6', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The attacking checklist',
      body:
        "These are the patterns that come up again and again in the Marshall:\n\n**Queen on h3.** It sits in the hole next to the king and watches g2 and f1.\n\n**...Bg4 and ...Bf3.** The light-squared bishop supports ...Qg2 mate. White needs Qf1 or Nd2 ready to stop it.\n\n**...Rae8 and ...Re6.** Rooks come through the open e-file, then lift to f6 or h6.\n\n**...f5–f4.** A pawn lever that attacks g3 and the e3-bishop and opens the f-file.\n\n**...Bxg3.** When White's f-pawn has left f2, the g3-pawn is guarded only by the h-pawn, and the d6-bishop can smash through.\n\nIn the main line White's next move is 18.a4, hitting b5. White counterattacks on the queenside while Black keeps building on the kingside."
    },
    {
      kind: 'walkthrough',
      title: 'One careless move: 16.Qd2?',
      intro: "White's queen must go somewhere that guards the light squares. Here it doesn't.",
      moves: MATE,
      start: 30,
      orientation: 'black',
      steps: {
        30: {
          title: 'The queen is attacked',
          text: "15...Bg4. Black's bishop hits the queen and eyes f3. White has to move the queen.",
          arrows: [['g4', 'd1', 'red']]
        },
        31: {
          title: 'A natural-looking square',
          text: '16.Qd2. It looks like a normal developing square, but from d2 the queen covers neither f1 nor f3. Nothing can stop the bishop now.',
          marks: ['f3'],
          ann: '??'
        },
        32: {
          title: 'The bishop lands',
          text: '16...Bf3. The bishop guards g2. Black threatens ...Qg2 mate, and no White move can cover g2 in time.',
          arrows: [['h3', 'g2', 'red'], ['f3', 'g2', 'red']],
          ann: '!'
        },
        33: {
          title: 'Too late',
          text: '17.Bxd5. White grabs the knight, but every White move here allows the same finish.',
          marks: ['g2']
        },
        34: {
          title: 'Checkmate',
          text: '17...Qg2#. The king cannot take the queen because the bishop guards it, and the queen also covers f1 and h1. The f2- and h2-pawns block the rest.',
          arrows: [['f3', 'g2', 'green']],
          marks: ['g1']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Add one piece per move',
      body:
        "When you attack, ask after each move: which of my pieces is not helping yet? In the main line Black brings the queen, then the bishop, then a rook, then lifts that rook. Each move also asks White a question, so White never gets a free move."
    }
  ],
  takeaway:
    'In the Marshall, Black adds one piece per move: queen to h3, bishop to g4, rook to e8, then a rook lift. If White ever stops guarding f3 and g2, ...Bf3 and ...Qg2 mate.',
  lookAhead:
    "Next: White's other ways to defend, 15.Re4 and 12.d3.",
  drills: [
    {
      title: 'Bring everyone',
      prompt: "You're Black. White has just played 15.Be3. Bring your bishop and both rooks into the attack, following the main line.",
      moves: SPASSKY,
      start: 29,
      side: 'black',
      hints: ["Start by attacking White's queen with your last minor piece.", 'Then put the a8-rook on the e-file and lift it to the 6th rank.'],
      success: '15...Bg4, 16...Rae8 and 17...Re6. Every black piece now takes part in the attack.'
    },
    {
      title: 'Find the mate',
      prompt: "You're Black. White has just played 16.Qd2??, leaving the light squares unguarded. Finish the game.",
      moves: MATE,
      start: 31,
      side: 'black',
      hints: ['Your queen on h3 wants to land on g2. What would support it there?', 'Put the bishop on f3, then mate on g2.'],
      success: '16...Bf3! and 17...Qg2#. The bishop and queen together are deadly on the light squares.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the idea behind 15...Bg4 in the main line?',
      moves: `${QH3} Be3 Bg4`,
      orientation: 'black',
      choices: [
        { text: 'It hits the queen and prepares ...Bf3 with mate on g2', correct: true, why: 'Right. The bishop wants f3, where it supports the queen on g2.' },
        { text: 'It pins a knight on f3', why: "There's no knight on f3. White's f3-knight was traded on e5 back on move 10." },
        { text: 'It attacks the e3-bishop', why: 'The g4-bishop moves on light squares, and e3 is a dark square.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White has just played 16.f3, attacking the bishop. What is Black\'s strongest reply?',
      moves: `${QH3} Be3 Bg4 f3`,
      orientation: 'black',
      choices: [
        { text: '16...Bxg3', correct: true, why: 'Yes. With the f-pawn gone from f2, the g3-pawn is guarded only by the h-pawn, and the sacrifice smashes the king\'s cover.' },
        { text: '16...Bh5', why: 'It saves the bishop, but misses the chance. 16.f3 weakened g3, so strike at it now.' },
        { text: '16...Bf5', why: 'Also safe, but too slow. The ...Bxg3 sacrifice works because f3 has left g3 underprotected.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does White play 17.Nd2 in the main line?',
      choices: [
        { text: 'To guard f3, so ...Bf3 can be met by Nxf3', correct: true, why: 'Right. The knight is a defender of the light squares around the king.' },
        { text: 'To attack the d5-knight', why: "From d2 the knight doesn't touch d5. Its job is to guard f3." },
        { text: 'To jump to c4 next', why: 'The b5-pawn controls c4. The knight is there to defend f3.' }
      ]
    },
    {
      type: 'order',
      prompt: 'In the main line Black plays 16...Rae8, not 16...Rfe8. Why that rook?',
      choices: [
        { text: 'The a8-rook was the last Black piece still at home', correct: true, why: 'Exactly. Bringing the idle rook means every Black piece now joins the attack.' },
        { text: 'The f8-rook is pinned', why: "Nothing pins the f8-rook. The point is to activate the rook that hasn't moved yet." },
        { text: 'The a8-rook defends the queenside better from e8', why: 'On e8 it attacks, not defends. Black brings it in because it was doing nothing on a8.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'Which pawn lever does Black use in the Marshall to attack g3 and the e3-bishop?',
      choices: [
        { text: '...f7–f5–f4', correct: true, why: 'Right. The f-pawn hits g3 and e3 and can open the f-file for a rook.' },
        { text: '...c6–c5', why: "That strikes at d4 in the center, not at White's king." },
        { text: '...a6–a5', why: "That's a queenside move. The attack is on the kingside." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is this position checkmate?',
      moves: MATE,
      orientation: 'black',
      choices: [
        { text: 'The bishop guards g2, and the queen also covers f1 and h1', correct: true, why: "Yes. The king can't take, can't run, and White's own pawns block f2 and h2." },
        { text: 'A black rook cuts off the king along the first rank', why: 'No rook is involved. The bishop and queen do it alone.' },
        { text: 'The knight on d5 covers f1', why: 'The d5-knight has just been captured. The queen covers f1.' }
      ]
    }
  ],
  key: { name: 'Marshall Attack: 17...Re6, all pieces in', moves: SPASSKY, orientation: 'black' },
  terms: [
    { term: 'Rook lift', meaning: 'Moving a rook up the board, for example to the 3rd or 6th rank, so it can swing across to the king.' },
    { term: 'Pawn lever', meaning: "A pawn move that attacks an enemy pawn to open lines." },
    { term: 'Mating pattern', meaning: 'A typical arrangement of pieces that gives checkmate, such as queen on g2 supported by a bishop on f3.' }
  ]
})
