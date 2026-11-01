import { defineModule } from '../../../types'
import { SVESHNIKOV } from '../lines'

/** 7.Nd5 Nxd5 8.exd5 */
const EXD5 = `${SVESHNIKOV} Nd5 Nxd5 exd5`
/** svesh-7nd5: 8...Ne7 9.c4 Ng6 */
const NE7 = `${EXD5} Ne7 c4 Ng6`
/** model-caruana-carlsen-2018-g8, first 14 moves (the line in the research goes to 16...Rb8) */
const GAME = `${EXD5} Nb8 a4 Be7 Be2 O-O O-O Nd7 Bd2 f5 a5 a6 Na3 e4`

export default defineModule({
  id: '5.5',
  title: "7.Nd5: White's modern choice",
  minutes: 11,
  level: 3,
  goals: [
    'See how 7.Nd5 Nxd5 8.exd5 closes the center at once',
    "Learn Black's knight routes, ...Ne7–g6 and ...Nb8–d7, and the ...f5 plan",
    'Follow the opening of Caruana–Carlsen, World Championship 2018, game 8'
  ],
  intro:
    "Instead of 7.Bg5, White can jump into the d5 hole straight away. After 7.Nd5 Nxd5 8.exd5, a White pawn sits on d5 and the center is closed. There is no more fight over d5. Instead, each side plays on a wing. This is the line Caruana chose against Carlsen in the 2018 World Championship.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Closing the center',
      intro: "Watch how the pawn on d5 changes the game: the c6-knight has to find a new home.",
      moves: NE7,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'The Sveshnikov position',
          text: '6...d6. Instead of pinning the f6-knight with 7.Bg5, White can occupy d5 at once.',
          marks: ['d5']
        },
        13: {
          title: 'Into the hole',
          text: "7.Nd5. Now both White knights hit c7, which only the queen guards. Black must react at once: a move like 7...Be6? runs into a knight check on c7 that forks the king and the a8-rook.",
          arrows: [['b5', 'c7', 'red'], ['d5', 'c7', 'red'], ['d8', 'c7', 'green']],
          marks: ['c7']
        },
        14: {
          title: 'The trade',
          text: '7...Nxd5. Black removes the d5-knight. This is practically forced.',
          marks: ['d5']
        },
        15: {
          title: 'A pawn on d5',
          text: "8.exd5. The pawn takes back and hits the c6-knight. The center is now closed: the d-file is blocked, so the d6-pawn is much harder to attack, but White's d5-pawn gives White more space.",
          arrows: [['d5', 'c6', 'red']]
        },
        16: {
          title: 'Toward the kingside',
          text: "8...Ne7. The knight heads for the kingside, where Black's play will be. 8...Nb8, going to d7, is the other main move.",
          arrows: [['e7', 'g6', 'blue']]
        },
        17: {
          title: 'Supporting d5',
          text: '9.c4. The pawn supports d5 and gains space on the queenside, where White will play.',
          arrows: [['c4', 'd5', 'green']]
        },
        18: {
          title: 'The knight on g6',
          text: "9...Ng6. From g6 the knight supports e5 and eyes f4. Black wants to follow with ...Be7, ...O-O and ...f5. White keeps a small edge.",
          arrows: [['g6', 'e5', 'green'], ['g6', 'f4', 'blue'], ['f7', 'f5', 'yellow']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Two wings, two plans',
      body:
        "With a White pawn on d5, the old fight over the d5 hole is over. The d-file is closed, so the backward d6-pawn is safe for now.\n\n**Black** plays on the **kingside**: ...f5, then ...e4 or ...f4, with the knight on g6 or d7 supporting the pawns.\n\n**White** plays on the **queenside**: c4 and c5, or a4 and a5, to open lines and attack d6. White's b5-knight often goes back via a3 to c4, where it eyes d6 and b6.\n\nIn a closed center, the side whose wing attack is faster usually gets the better game."
    },
    {
      kind: 'walkthrough',
      title: 'Caruana–Carlsen, 2018',
      intro: 'World Championship, London 2018, game 8. Carlsen chose 8...Nb8 and showed the ...Nd7, ...f5 and ...e4 plan.',
      moves: GAME,
      start: 15,
      orientation: 'black',
      steps: {
        15: {
          title: 'The c6-knight is hit',
          text: '8.exd5. The pawn attacks the c6-knight. Carlsen picks a modest-looking retreat.',
          arrows: [['d5', 'c6', 'red']]
        },
        16: {
          title: 'Back to b8',
          text: "8...Nb8. The knight is heading for d7. From there it watches c5 and e5, and it doesn't block the f-pawn.",
          arrows: [['b8', 'd7', 'blue']]
        },
        17: {
          title: 'Space on the queenside',
          text: '9.a4. White gains space and makes ...b5 harder. When Black chases the b5-knight with ...a6, it will have a way back via a3 and c4.',
          arrows: [['a4', 'b5', 'green']]
        },
        18: {
          title: 'Developing',
          text: '9...Be7. The bishop develops so that Black can castle.'
        },
        19: {
          title: 'White develops',
          text: '10.Be2. White also gets ready to castle.'
        },
        20: {
          title: 'Black castles',
          text: '10...O-O. Black\'s king is safe, and the rook stands behind the f-pawn.',
          arrows: [['f8', 'f5', 'blue']]
        },
        21: {
          title: 'White castles',
          text: '11.O-O. Both kings are safe. Now the wing plans begin.'
        },
        22: {
          title: 'The knight arrives',
          text: '11...Nd7. The knight reaches d7. The f-pawn is free to move.',
          arrows: [['d7', 'e5', 'green'], ['d7', 'c5', 'green']]
        },
        23: {
          title: 'Supporting a5',
          text: '12.Bd2. The bishop develops and supports the push a4–a5.',
          arrows: [['d2', 'a5', 'green']]
        },
        24: {
          title: 'The kingside plan',
          text: "12...f5. Black's main plan begins: the f-pawn advances and Black gains space on the kingside.",
          arrows: [['f5', 'e4', 'blue']],
          ann: '!'
        },
        25: {
          title: 'More queenside space',
          text: '13.a5. White grabs more space. The a5-pawn also takes the b6 square away from Black.',
          arrows: [['a5', 'b6', 'green']]
        },
        26: {
          title: 'Chasing the knight',
          text: '13...a6. Now Black kicks the b5-knight.',
          arrows: [['a6', 'b5', 'red']]
        },
        27: {
          title: 'Not stuck this time',
          text: '14.Na3. Compare this with the main line: here ...b5 would be met by axb6, taking en passant. So the knight can come back via c4.',
          arrows: [['a3', 'c4', 'blue']]
        },
        28: {
          title: 'The e-pawn rolls',
          text: '14...e4. Black pushes on and frees the e5 square for the d7-knight. White is a little better here, and the game ended in a draw.',
          arrows: [['d7', 'e5', 'blue']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'history',
      title: 'The Sveshnikov at the top',
      body:
        'In the 2018 World Championship in London, Carlsen defended the Sveshnikov three times (games 8, 10 and 12), and each time Caruana answered with 7.Nd5. In game 8 the play went on 15.Nc4 Ne5 16.Nb6 Rb8: White\'s knight reached b6 by the a3–c4 route, and Black\'s knight reached e5. The game was drawn.'
    }
  ],
  takeaway:
    "7.Nd5 Nxd5 8.exd5 closes the center: the d5 hole is filled by a White pawn. Black reroutes the c6-knight (...Ne7–g6 or ...Nb8–d7) and plays ...f5 on the kingside, while White expands on the queenside. White keeps a small edge.",
  lookAhead:
    "7.Bg5 and 7.Nd5 are White's serious tries. Module 5.6 looks at White's other sixth moves, which let Black equalize easily.",
  drills: [
    {
      title: 'Close the center',
      prompt: "You're White in the Sveshnikov after 6...d6. Jump into the hole, and take back the right way after the trade.",
      moves: EXD5,
      start: 12,
      side: 'white',
      hints: ['Put your c3-knight on the d5 square.', 'After 7...Nxd5, take back with the pawn. It attacks the c6-knight.'],
      success: '7.Nd5 Nxd5 8.exd5. The center is closed, the c6-knight is attacked, and White has more space.'
    },
    {
      title: "Carlsen's set-up",
      prompt: "You're Black after 8.exd5. Play Carlsen's moves from game 8: retreat the knight toward d7, develop, castle, and start the kingside plan.",
      moves: `${EXD5} Nb8 a4 Be7 Be2 O-O O-O Nd7 Bd2 f5`,
      start: 15,
      side: 'black',
      hints: ['The knight goes back to b8 first, and later to d7.', 'After ...Be7 and ...O-O, play ...Nd7. Then push the f-pawn two squares.'],
      success: '8...Nb8, ...Be7, ...O-O, ...Nd7 and ...f5. Black has rerouted the knight and started the kingside plan.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black has just played 7...Nxd5. How should White take back?',
      moves: `${SVESHNIKOV} Nd5 Nxd5`,
      orientation: 'white',
      choices: [
        { text: '8.exd5', correct: true, why: 'Right. The pawn takes back, attacks the c6-knight and closes the center. White keeps a small edge.' },
        { text: '8.Qxd5', why: 'The queen is exposed on d5. Black gains time with ...a6 and ...Be6, and Black is better.' },
        { text: '8.Nxa7', why: "This grabs a pawn but leaves White a piece down: Black's knight on d5 is still there. It's a blunder." }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 7.Nd5 Nxd5 8.exd5, what is Black\'s main plan?',
      moves: EXD5,
      orientation: 'black',
      choices: [
        { text: 'Reroute the c6-knight and play ...f5 on the kingside', correct: true, why: "Yes. With the center closed, Black's play is on the kingside: ...f5, then ...e4 or ...f4." },
        { text: 'Break with ...c6 against d5', why: 'Black has no c-pawn: it was traded on d4 on move three.' },
        { text: 'Break with ...d5', why: "Black's d6-pawn can't move: White's pawn on d5 blocks it." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 7...Nxd5 practically forced after 7.Nd5?',
      moves: `${SVESHNIKOV} Nd5`,
      orientation: 'black',
      choices: [
        { text: 'Both White knights attack c7, which only the queen guards', correct: true, why: 'Right. A knight check on c7 would fork the king and the a8-rook. Taking the d5-knight removes one attacker.' },
        { text: 'The d5-knight attacks Black\'s queen', why: 'A knight on d5 attacks c7, e7, f6, f4, e3, c3, b4 and b6, not d8. The danger is the c7 square.' },
        { text: 'Otherwise White mates on f7', why: 'Nothing threatens f7 here. The danger is a knight fork on c7.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In Caruana–Carlsen 2018, why could the knight retreat 14.Na3 without getting stuck on the rim?',
      moves: `${EXD5} Nb8 a4 Be7 Be2 O-O O-O Nd7 Bd2 f5 a5 a6 Na3`,
      orientation: 'white',
      choices: [
        { text: 'If Black plays ...b5, the a5-pawn takes it en passant, so the knight can come back via c4', correct: true, why: 'Exactly. White\'s a4–a5 push prepared this. In the main line with ...b5, the a3-knight really was stuck.' },
        { text: 'Black has no pawns left on the queenside', why: 'Black still has pawns on a6 and b7. The point is that ...b5 can be taken en passant.' },
        { text: 'The knight is protected by the d2-bishop', why: "The bishop doesn't guard a3, and protection is not the issue. The knight needs a way back, and c4 is free." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 7.Nd5 Nxd5 8.exd5, what happened to the backward d6-pawn?',
      choices: [
        { text: "It is harder to attack, because White's d5-pawn blocks the d-file", correct: true, why: 'Right. The d-file is closed. White must open lines on the queenside, for example with c4–c5, to get at d6.' },
        { text: 'It can now advance to d5', why: "White's pawn stands on d5, so the d6-pawn is blocked." },
        { text: 'It is lost by force', why: 'Nothing wins it. In fact the closed d-file makes it safer for now.' }
      ]
    },
    {
      type: 'name',
      prompt: 'Which move did Caruana choose against Carlsen in all three Sveshnikov games of the 2018 World Championship?',
      choices: [
        { text: '7.Nd5', correct: true, why: 'Yes. 7.Nd5 Nxd5 8.exd5 closes the center. In game 8 Carlsen answered 8...Nb8.' },
        { text: '7.Bg5', why: "7.Bg5 is the old main line (Modules 5.2 to 5.4), but Caruana chose 7.Nd5 in that match." },
        { text: '6.Nf5', why: '6.Nf5 is a sideline that lets Black equalize easily (Module 5.6). Caruana played 6.Ndb5 and 7.Nd5.' }
      ]
    }
  ],
  key: { name: 'Sveshnikov 7.Nd5: 8.exd5', moves: EXD5, orientation: 'white' },
  terms: [
    { term: 'Closed center', meaning: 'A center where the pawns block each other, so the pieces cannot pass through. Play moves to the wings.' },
    { term: 'En passant', meaning: 'When a pawn moves two squares and lands beside an enemy pawn, that pawn may take it as if it had moved one square, but only on the very next move.' },
    { term: 'Space', meaning: 'Control of more squares, usually because your pawns are further up the board. More space gives your pieces more room.' }
  ]
})
