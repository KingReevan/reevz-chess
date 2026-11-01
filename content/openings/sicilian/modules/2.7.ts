import { defineModule } from '../../../types'
import { NAJDORF_BG5 } from '../lines'

/** najdorf-poisoned-pawn: 7...Qb6 8.Qd2 Qxb2 9.Rb1 Qa3 */
const PP = `${NAJDORF_BG5} Qb6 Qd2 Qxb2 Rb1 Qa3`
/** najdorf-qb6-nb3: 7...Qb6 8.Nb3 Be7 9.Qf3 Nbd7 10.O-O-O Qc7 */
const NB3 = `${NAJDORF_BG5} Qb6 Nb3 Be7 Qf3 Nbd7 O-O-O Qc7`
/** najdorf-goteborg: 7...Be7 8.Qf3 h6 9.Bh4 g5 10.fxg5 Nfd7 11.Nxe6 fxe6 12.Qh5+ Kf8 */
const GOTEBORG = `${NAJDORF_BG5} Be7 Qf3 h6 Bh4 g5 fxg5 Nfd7 Nxe6 fxe6 Qh5+ Kf8`

export default defineModule({
  id: '2.7',
  title: 'The Poisoned Pawn and Göteborg: ideas only',
  minutes: 12,
  level: 2,
  goals: [
    'See why 7...Qb6 hits both b2 and d4',
    'Understand what each side gets after 8.Qd2 Qxb2 9.Rb1 Qa3, and the calm 8.Nb3',
    'Learn the idea of the Göteborg sacrifice 11.Nxe6, and what it really achieves'
  ],
  intro:
    "After 6.Bg5 e6 7.f4, Black has two very sharp tries. 7...Qb6 grabs a pawn and dares White to attack. 7...Be7 8.Qf3 h6 9.Bh4 g5 is the Göteborg, where White answers with a knight sacrifice. Top players know these lines by heart. You only need the ideas, and this module gives you those.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Poisoned Pawn',
      intro: "Watch Black's queen. It goes a long way from home to win one pawn.",
      moves: PP,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'A loose pawn',
          text: "7.f4. White's bishop has left c1, so nothing guards the b2-pawn now. And the d4-knight is guarded only by the queen.",
          marks: ['b2', 'd4']
        },
        14: {
          title: 'Two targets',
          text: '7...Qb6. The queen attacks b2 down the b-file and adds pressure on the d4-knight along the diagonal. It also unpins the f6-knight by leaving d8.',
          arrows: [['b6', 'b2', 'red'], ['b6', 'd4', 'red']]
        },
        15: {
          title: 'The gambit',
          text: "8.Qd2. The queen keeps guarding d4, and White offers the b2-pawn. White's bet: Black's queen will waste time while White develops and attacks.",
          arrows: [['d2', 'd4', 'green']]
        },
        16: {
          title: 'Black takes',
          text: "8...Qxb2. Black grabs the pawn. The queen now also attacks the a1-rook, which nothing defends.",
          arrows: [['b2', 'a1', 'red']],
          ann: '!?'
        },
        17: {
          title: 'Rook with tempo',
          text: '9.Rb1. The rook escapes and attacks the queen at the same time. Black has to move the queen again.',
          arrows: [['b1', 'b2', 'red']]
        },
        18: {
          title: 'The Poisoned Pawn tabiya',
          text: "9...Qa3. The only good retreat. The queen stays on the queenside, where it hits the c3-knight, and White's rook now eyes b7. Black is a pawn up, White is far ahead in development, and the engine calls it about level.",
          arrows: [['a3', 'c3', 'red'], ['b1', 'b7', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Why "poisoned"?',
      body:
        "A pawn is called **poisoned** when taking it may cost more than it gains. Here Black's queen spends three moves (...Qb6, ...Qxb2, ...Qa3) on one pawn, while White develops and opens lines. If Black is careless, the queen can even get trapped.\n\nBut the engine says Black's extra pawn and White's lead in development balance out. That is why the line has survived at the very top for decades. It is pure theory, and both sides need to know dozens of moves. For now, remember the idea, not the moves."
    },
    {
      kind: 'walkthrough',
      title: 'The calm answer: 8.Nb3',
      intro: 'White does not have to gamble. One knight move protects b2.',
      moves: NB3,
      start: 14,
      orientation: 'white',
      steps: {
        14: {
          title: 'Queen on b6',
          text: '7...Qb6. b2 is attacked, and d4 is under pressure.',
          arrows: [['b6', 'b2', 'red'], ['b6', 'd4', 'red']]
        },
        15: {
          title: 'Block the file',
          text: "8.Nb3. The knight leaves d4, where the queen was eyeing it, and blocks the b-file. The queen can't reach b2 any more, and the knight is guarded by the a2- and c2-pawns.",
          arrows: [['b6', 'b3', 'blue']],
          marks: ['b2']
        },
        16: {
          title: 'Black develops',
          text: '8...Be7. The bishop develops and gets ready for castling.',
          arrows: [['e7', 'f6', 'green']]
        },
        17: {
          title: 'Queen to f3',
          text: '9.Qf3. White guards e4 and prepares long castling, as in Module 2.6.',
          arrows: [['f3', 'e4', 'green']]
        },
        18: {
          title: 'Backing up f6',
          text: '9...Nbd7. The knight guards f6 and e5.',
          arrows: [['d7', 'f6', 'green'], ['d7', 'e5', 'green']]
        },
        19: {
          title: 'Long castling',
          text: '10.O-O-O. The king goes to c1, where it also guards the b2-pawn.',
          arrows: [['c1', 'b2', 'green']]
        },
        20: {
          title: 'Back to c7',
          text: '10...Qc7. With b2 safe, the queen goes to its usual c7-square. The position is level.',
          arrows: [['b6', 'c7', 'blue']]
        }
      }
    },
    {
      kind: 'history',
      title: 'Spassky–Fischer 1972, game 11',
      body:
        "Fischer loved the Poisoned Pawn. In game 11 of the 1972 World Championship, Spassky played 9.Nb3 instead of 9.Rb1, and later the famous retreat 14.Nb1, a knight going back to its starting square. Spassky won, Fischer's only loss with the Poisoned Pawn. It is often said that 14.Nb1 refuted Black's opening. The engine disagrees: after 14.Nb1 Black was fine, and Fischer lost because of later mistakes, the biggest being 19...Nd6."
    },
    {
      kind: 'walkthrough',
      title: 'The Göteborg sacrifice',
      intro: 'Here Black tries to kick the g5-bishop with pawns. White answers with a knight sacrifice on e6.',
      moves: GOTEBORG,
      start: 14,
      orientation: 'white',
      steps: {
        14: {
          title: 'Breaking the pin',
          text: '7...Be7. The bishop steps between the f6-knight and the queen.',
          arrows: [['e7', 'f6', 'green']]
        },
        15: {
          title: 'Queen to f3',
          text: '8.Qf3. The usual move: it guards e4 and prepares long castling.',
          arrows: [['f3', 'e4', 'green']]
        },
        16: {
          title: 'Questioning the bishop',
          text: '8...h6. Black asks the bishop where it wants to go.',
          arrows: [['h6', 'g5', 'red']]
        },
        17: {
          title: 'Keeping the pin line',
          text: '9.Bh4. The bishop stays on the h4–d8 diagonal.',
          arrows: [['h4', 'f6', 'blue']]
        },
        18: {
          title: 'Too ambitious',
          text: "9...g5. Black kicks the bishop again and plans to win the g5-pawn back and use e5 for a knight. But it loosens Black's king.",
          arrows: [['g5', 'h4', 'red']],
          ann: '?!'
        },
        19: {
          title: 'White takes',
          text: '10.fxg5. White takes the pawn. The f-file is now half-open for White.',
          marks: ['g5']
        },
        20: {
          title: "Black's plan",
          text: "10...Nfd7. The knight heads for e5, where it would hit the queen, and the g5-pawn is attacked twice. But f6 is empty now, so White's queen looks straight at f7.",
          arrows: [['d7', 'e5', 'blue'], ['f3', 'f7', 'red']],
          marks: ['g5']
        },
        21: {
          title: 'The sacrifice',
          text: "11.Nxe6. The famous sacrifice, and White's best move. The knight takes the e6-pawn and attacks Black's queen.",
          arrows: [['e6', 'd8', 'red']],
          ann: '!'
        },
        22: {
          title: 'Black takes the knight',
          text: '11...fxe6. Black accepts. But the f7-pawn has left, so the diagonal from h5 to e8 is open.',
          arrows: [['h5', 'e8', 'blue']]
        },
        23: {
          title: 'Check',
          text: '12.Qh5+. The queen checks the king along the open diagonal.',
          arrows: [['h5', 'e8', 'red']]
        },
        24: {
          title: 'The only move',
          text: "12...Kf8. Black's only legal move. Black is a piece up for two pawns, but the king can't castle and stands on the open f-file. White is clearly better, though there is no forced win.",
          marks: ['f8']
        }
      }
    },
    {
      kind: 'history',
      title: 'The Göteborg story',
      body:
        'In round 14 of the 1955 Interzonal in Gothenburg (Göteborg in Swedish), three Argentine players tried 9...g5 against three Soviet players on the same day: Geller–Panno, Keres–Najdorf and Spassky–Pilnik. All three Argentines lost. Geller won his game in 23 moves. The legend says 11.Nxe6 wins by force. It is White\'s best move and White is clearly better, but Black can still fight.'
    },
    {
      kind: 'warning',
      title: 'Ideas, not moves',
      body:
        "Don't try to memorize these lines yet. Remember three ideas: ...Qb6 hits b2 and d4 at once; 8.Nb3 is the calm answer; and an early ...g5 against Bh4 can open Black's own king to a sacrifice on e6."
    }
  ],
  takeaway:
    "7...Qb6 hits b2 and d4. After 8.Qd2 Qxb2 9.Rb1 Qa3, Black has a pawn and White has a big lead in development; 8.Nb3 calmly protects b2. In the Göteborg, 11.Nxe6 is White's best move and gives a strong attack, but not a forced win.",
  lookAhead:
    "Not every White player wants this much theory. Module 2.8 looks at two quieter sixth moves: 6.Be2 and 6.Bc4.",
  drills: [
    {
      title: 'Take the poisoned pawn',
      prompt: "You're Black. White has played 7.f4. Hit b2 and d4 with your queen, take the pawn when White offers it, then step the queen back to safety.",
      moves: PP,
      start: 13,
      side: 'black',
      hints: ['Your queen can attack b2 and d4 from one square.', 'After 9.Rb1, the queen retreats one square diagonally, toward the edge.'],
      success: '7...Qb6, 8...Qxb2 and 9...Qa3. Black is a pawn up, and White has a big lead in development.'
    },
    {
      title: 'The Göteborg sacrifice',
      prompt: "You're White. Black has just played 10...Nfd7. Sacrifice a piece to open Black's king, then give check.",
      moves: `${NAJDORF_BG5} Be7 Qf3 h6 Bh4 g5 fxg5 Nfd7 Nxe6 fxe6 Qh5+`,
      start: 19,
      side: 'white',
      hints: ['Which of your pieces can capture a pawn and attack the queen?', 'After ...fxe6, the diagonal from h5 to e8 is open.'],
      success: '11.Nxe6! fxe6 12.Qh5+. Black must play 12...Kf8, and White has a strong attack for the piece.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 7...Qb6, what does Black\'s queen attack?',
      moves: `${NAJDORF_BG5} Qb6`,
      orientation: 'black',
      choices: [
        { text: 'The b2-pawn, and it adds pressure on the d4-knight', correct: true, why: 'Right. Down the b-file it hits b2, and along the diagonal it hits d4, which only the queen defends.' },
        { text: 'The g5-bishop', why: 'The queen on b6 does not reach g5. Its targets are b2 and d4.' },
        { text: 'The c3-knight', why: 'No line from b6 reaches c3. The queen hits b2 down the b-file and d4 along the diagonal.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 8.Qd2 Qxb2 9.Rb1 Qa3, what does each side have?',
      moves: PP,
      orientation: 'black',
      choices: [
        { text: 'Black has an extra pawn; White has a big lead in development', correct: true, why: 'Yes. The engine calls it about level. It is razor-sharp for both sides.' },
        { text: "Black's queen is trapped and lost", why: 'The queen is out of play for a while, but it is not trapped here. Black is a pawn up.' },
        { text: 'Material is level, and nobody is ahead in development', why: 'Black won the b2-pawn, and White has made many more developing moves.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'How does 8.Nb3 deal with the threat to b2?',
      moves: `${NAJDORF_BG5} Qb6 Nb3`,
      orientation: 'white',
      choices: [
        { text: 'The knight blocks the b-file, so the queen no longer attacks b2', correct: true, why: 'Right. The knight on b3 is guarded by the a2- and c2-pawns, and b2 is safe behind it.' },
        { text: 'The knight attacks Black\'s queen', why: 'A knight on b3 reaches a1, a5, c1, c5, d2 and d4. It does not attack b6.' },
        { text: 'It wins the queen', why: 'The queen is not in danger. 8.Nb3 is the calm way to keep the pawn.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Göteborg, after 11.Nxe6 fxe6 12.Qh5+ Kf8. What is the correct verdict?',
      moves: GOTEBORG,
      orientation: 'white',
      choices: [
        { text: 'White is clearly better, but there is no forced win', correct: true, why: "Right. 11.Nxe6 is White's best move, and Black's king is in trouble. But Black can still fight." },
        { text: 'White wins by force', why: 'That is the legend, but the engine finds no forced win. White is clearly better, nothing more.' },
        { text: 'Black is better, because Black is a piece up', why: 'Black has a piece for two pawns, but the exposed king matters more here. White is clearly better.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: "Spassky–Fischer 1972, game 11: what does the engine say about Spassky's famous 14.Nb1?",
      choices: [
        { text: "It did not refute Black's opening; Fischer lost through later mistakes", correct: true, why: 'Right. Black was fine after 14.Nb1. The biggest mistake was 19...Nd6.' },
        { text: 'It trapped Black\'s queen by force', why: 'That is the legend. The engine says Black was fine after 14.Nb1.' },
        { text: 'It was a blunder that should have lost', why: 'It was a reasonable move. The engine slightly prefers other moves, but the game stayed roughly level.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 8.Qd2 Qxb2, what does 9.Rb1 do?',
      moves: `${NAJDORF_BG5} Qb6 Qd2 Qxb2 Rb1`,
      orientation: 'white',
      choices: [
        { text: 'It saves the a1-rook and attacks the queen at the same time', correct: true, why: 'Yes. The queen on b2 was hitting a1. Now the rook is safe, and the queen has to move again.' },
        { text: 'It prepares long castling', why: 'Moving the a1-rook takes away the right to castle long. White will keep the king in the center or castle short.' },
        { text: 'It defends the c3-knight', why: 'The rook on b1 does not guard c3. The queen on d2 does.' }
      ]
    }
  ],
  key: { name: 'Poisoned Pawn: 9.Rb1 Qa3', moves: PP, orientation: 'black' },
  terms: [
    { term: 'Poisoned pawn', meaning: 'A pawn that looks free, but taking it costs time or puts the capturing piece in danger.' },
    { term: 'Gambit', meaning: 'Giving up material, usually a pawn, to gain time, development or an attack.' },
    { term: 'Lead in development', meaning: 'Having more pieces out and ready to fight than your opponent.' },
    { term: 'Tabiya', meaning: 'A well-known starting position for a sharp line, where both sides know the theory.' }
  ]
})
