import { defineModule } from '../../../types'
import { WINAWER, WINAWER_MAIN } from '../lines'

/** win-7qg4 */
const QG4 = `${WINAWER_MAIN} Qg4`
/** win-7qg4-oo: 7...O-O 8.Bd3 Nbc6 9.Qh5 Ng6 10.Nf3 Qc7 11.Be3 c4 12.Bxg6 fxg6 13.Qg4 Qf7 */
const CASTLE = `${QG4} O-O Bd3 Nbc6 Qh5 Ng6 Nf3 Qc7 Be3 c4 Bxg6 fxg6 Qg4 Qf7`
/** 7...O-O 8.Bd3 f5 9.exf6 Rxf6 10.Bg5 Rf7: the engine's first choice for Black (engine-checked) */
const F5 = `${QG4} O-O Bd3 f5 exf6 Rxf6 Bg5 Rf7`
/** win-6qc7: 6...Qc7 7.Qg4 Ne7 8.Qxg7 Rg8 9.Qxh7 cxd4 */
const QC7 = `${WINAWER} e5 c5 a3 Bxc3+ bxc3 Qc7 Qg4 Ne7 Qxg7 Rg8 Qxh7 cxd4`

export default defineModule({
  id: '7.3',
  title: '7.Qg4: castle or let g7 go?',
  minutes: 12,
  level: 3,
  goals: [
    'See why 7.Qg4 hits g7, and why no Black piece guards it',
    'Defend after 7...O-O: block the d3-bishop with ...f5 or ...Ng6',
    'Know that 7...Qc7 (or 6...Qc7 7.Qg4 Ne7) gives up g7: the Poisoned Pawn'
  ],
  intro:
    "Black's dark-squared bishop is gone, and in the Winawer that is felt at once on g7. White's most direct move, 7.Qg4, attacks the pawn. Black has two basic choices: guard g7 by castling, or let White take it and hit back in the center. This module shows how Black keeps the castled king safe, and where the other road leads.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Castling: 7...O-O',
      intro: "The king guards g7, but now it sits where White's pieces are aiming. Watch h7.",
      moves: CASTLE,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'The main line',
          text: "6...Ne7. Black's king's knight is out. Note what is missing: there is no Black bishop to guard the dark squares f6, g7 and h6.",
          marks: ['g7']
        },
        13: {
          title: 'The queen hits g7',
          text: '7.Qg4. The queen attacks g7, and no Black piece defends it. Black has to decide now.',
          arrows: [['g4', 'g7', 'red']],
          marks: ['g7']
        },
        14: {
          title: 'Castle',
          text: "7...O-O. The king now guards g7. The cost: the king sits on the side where White's queen already stands.",
          arrows: [['g8', 'g7', 'green']]
        },
        15: {
          title: 'The bishop aims at h7',
          text: '8.Bd3. The bishop looks down the diagonal at h7. Queen plus bishop against h7 is a classic attacking team.',
          arrows: [['d3', 'h7', 'red']],
          marks: ['h7']
        },
        16: {
          title: 'Develop and hit d4',
          text: "8...Nbc6. The knight develops and adds a second attacker to d4. It is playable, but the engine prefers 8...f5, which shuts the bishop out at once (see the next walkthrough).",
          arrows: [['c6', 'd4', 'red'], ['c5', 'd4', 'red']]
        },
        17: {
          title: 'A mate threat',
          text: '9.Qh5. Now White threatens Qxh7, which would be checkmate: the queen is defended by the d3-bishop, and the king has no square to run to.',
          arrows: [['h5', 'h7', 'red'], ['d3', 'h7', 'red']],
          marks: ['h7']
        },
        18: {
          title: 'Block the diagonal',
          text: '9...Ng6. The knight stands in the bishop\'s path. Now only the queen hits h7, and the king guards it. The knight also eyes e5.',
          arrows: [['g6', 'e5', 'red']],
          marks: ['g6']
        },
        19: {
          title: 'White develops',
          text: '10.Nf3. The knight guards d4 and e5, and it could later jump to g5 to hit h7 again.',
          arrows: [['f3', 'e5', 'green'], ['f3', 'g5', 'blue']]
        },
        20: {
          title: 'The queen joins in',
          text: '10...Qc7. The queen develops and adds another attacker to e5.',
          arrows: [['c7', 'e5', 'red']]
        },
        21: {
          title: 'Guarding d4',
          text: '11.Be3. The dark-squared bishop develops and protects d4.',
          arrows: [['e3', 'd4', 'green']]
        },
        22: {
          title: 'Kick the bishop',
          text: '11...c4. The pawn attacks the d3-bishop, the piece that was aiming at h7. It also locks the queenside.',
          arrows: [['c4', 'd3', 'red']]
        },
        23: {
          title: 'Bishop for knight',
          text: '12.Bxg6. White gives up the bishop for the g6-knight rather than retreat.',
          arrows: [['d3', 'g6', 'red']]
        },
        24: {
          title: 'Take with the f-pawn',
          text: "12...fxg6. The right recapture. The h7-pawn stays next to the king, and Black's rook gets the half-open f-file. 12...hxg6? would open lines toward Black's king, and White would be much better.",
          arrows: [['f8', 'f3', 'blue']]
        },
        25: {
          title: 'The queen steps back',
          text: '13.Qg4. The queen eyes e6 and g6. The c8-bishop defends e6, and the h7-pawn defends g6.',
          arrows: [['g4', 'e6', 'red'], ['g4', 'g6', 'red']]
        },
        26: {
          title: 'Safe enough',
          text: "13...Qf7. The queen comes over to guard the kingside and the f-file. White keeps an edge thanks to more space, but Black's king is safe.",
          arrows: [['f7', 'f3', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "The engine's way: 8...f5",
      intro: 'Same position after 8.Bd3. This time Black blocks the diagonal with a pawn, and gains a move on the queen.',
      moves: F5,
      start: 15,
      orientation: 'black',
      steps: {
        15: {
          title: 'h7 is the target',
          text: '8.Bd3. The bishop and queen are both near Black\'s king.',
          arrows: [['d3', 'h7', 'red']]
        },
        16: {
          title: 'Shut the door',
          text: '8...f5. The pawn blocks the bishop\'s diagonal on f5 and attacks the queen. This is the engine\'s first choice.',
          arrows: [['f5', 'g4', 'red'], ['d3', 'f5', 'blue']],
          ann: '!'
        },
        17: {
          title: 'En passant',
          text: '9.exf6. The e5-pawn captures the f-pawn en passant, as if it had moved only one square. The new pawn on f6 attacks g7 and e7.',
          arrows: [['f6', 'g7', 'red'], ['f6', 'e7', 'red']]
        },
        18: {
          title: 'Take with the rook',
          text: '9...Rxf6. The only good recapture. If Black leaves the pawn, fxg7 wrecks the kingside.',
          arrows: [['f8', 'f6', 'green']]
        },
        19: {
          title: 'The bishop attacks',
          text: '10.Bg5. The bishop hits the f6-rook.',
          arrows: [['g5', 'f6', 'red']]
        },
        20: {
          title: 'The rook guards the rank',
          text: "10...Rf7. The rook steps back and guards both g7 and the e7-knight along the seventh rank. White is a bit better, but Black's king is safe.",
          arrows: [['f7', 'g7', 'green'], ['f7', 'e7', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Letting g7 go: the Poisoned Pawn',
      intro: "Black's other choice. Here it comes by the move order 6...Qc7 7.Qg4 Ne7, which reaches the same position as 6...Ne7 7.Qg4 Qc7.",
      moves: QC7,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'After the trade',
          text: '6.bxc3. Black can play 6...Ne7 or bring the queen out first.',
          marks: ['c3']
        },
        12: {
          title: 'Queen first',
          text: '6...Qc7. The queen already eyes e5 along the diagonal. Once the c5-pawn moves, it will hit c3 down the c-file too.',
          arrows: [['c7', 'e5', 'blue']]
        },
        13: {
          title: 'Qg4 anyway',
          text: '7.Qg4. White attacks g7 as before.',
          arrows: [['g4', 'g7', 'red']]
        },
        14: {
          title: 'The same position',
          text: '7...Ne7. This is exactly the position after 6...Ne7 7.Qg4 Qc7. Black does not defend g7.',
          marks: ['g7'],
          arrows: [['g4', 'g7', 'red']]
        },
        15: {
          title: 'One pawn',
          text: '8.Qxg7. White takes the pawn and attacks the h8-rook.',
          arrows: [['g7', 'h8', 'red']]
        },
        16: {
          title: 'The rook gets a file',
          text: '8...Rg8. The rook escapes onto the half-open g-file, where it attacks the queen and later g2.',
          arrows: [['g8', 'g7', 'red']]
        },
        17: {
          title: 'Two pawns',
          text: '9.Qxh7. White grabs a second pawn. The h-pawn is now a passed pawn that can run.',
          arrows: [['h2', 'h7', 'blue']]
        },
        18: {
          title: 'Hit the center',
          text: "9...cxd4. Black's pay-back starts. The c3- and e5-pawns are both attacked by the queen, and the g8-rook hits g2 down the half-open g-file. Module 7.4 explains this sharp position.",
          arrows: [['c7', 'c3', 'red'], ['c7', 'e5', 'red'], ['g8', 'g2', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Which choice?',
      body:
        "**Castle (7...O-O)** is the solid choice. Black must defend carefully: block the d3-bishop with ...f5 or ...Ng6, then kick it with ...c4. White keeps an edge, but there is no forced win, and Black's king holds.\n\n**Let g7 go (7...Qc7)** is the sharp choice, the Poisoned Pawn. Black gives up two pawns to attack White's center and open the g-file. The engine gives White a small edge, but both sides must know their moves.\n\nWikipedia also mentions **7...Kf8**, a newer try: the king guards g7 without castling.\n\n**For White:** 7.Qg4 is the most direct answer to 6...Ne7. If Black castles, aim the bishop and queen at h7, but don't expect a quick mate. If Black lets g7 go, take it and be ready for a sharp fight."
    }
  ],
  takeaway:
    "7.Qg4 attacks g7, which has no defender. Black either castles and defends h7 (...f5 or ...Ng6, then ...c4), or lets g7 go with 7...Qc7, the Poisoned Pawn. 6...Qc7 7.Qg4 Ne7 reaches the same position.",
  lookAhead: 'Module 7.4 looks at the Poisoned Pawn: what each side gets after 9...cxd4, and the trap 10.cxd4?? Qc3+.',
  drills: [
    {
      title: 'Hold the castled king',
      prompt: "You're Black. You castled after 7.Qg4, and White has just played 9.Qh5, threatening mate on h7. Stop the mate, develop, kick the d3-bishop, recapture correctly and bring your queen over.",
      moves: CASTLE,
      start: 17,
      side: 'black',
      hints: ['Block the bishop\'s diagonal to h7 with your e7-knight on g6, the square next to h7.','Later, a pawn push on the queenside attacks the d3-bishop. After Bxg6, take back with the f-pawn.'],
      success: '9...Ng6, 10...Qc7, 11...c4, 12...fxg6 and 13...Qf7. The king is safe.'
    },
    {
      title: 'Against 8...f5 as White',
      prompt: "You're White. Black has castled after 7.Qg4. Aim your bishop at h7, take the f-pawn when it jumps past your e-pawn, and hit the rook.",
      moves: F5.split(' ').slice(0, 19).join(' '),
      start: 14,
      side: 'white',
      hints: ['Your f1-bishop wants the diagonal to h7.', 'After ...f5, your e5-pawn can capture en passant. Then a bishop move attacks the rook on f6.'],
      success: '8.Bd3, 9.exf6 and 10.Bg5. White is a bit better.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why is g7 a problem for Black after 7.Qg4?',
      moves: QG4,
      orientation: 'black',
      choices: [
        { text: 'Nothing defends it: Black\'s dark-squared bishop is gone', correct: true, why: "Right. Normally Black's dark-squared bishop on f8 guards g7. After ...Bxc3+, g7 has no defender until the king castles." },
        { text: 'Qxg7 would be checkmate', why: 'It would not be mate. Qxg7 wins a pawn and attacks the h8-rook, which can step to g8.' },
        { text: 'The queen also attacks the undefended e6-pawn', why: 'The f7-pawn defends e6. The real problem is g7.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black has castled, and White has just played 9.Qh5. What does White threaten?',
      moves: CASTLE.split(' ').slice(0, 17).join(' '),
      orientation: 'black',
      choices: [
        { text: 'Qxh7, checkmate', correct: true, why: 'Yes. The d3-bishop defends the queen on h7, so the king can\'t take it, and the king has no free square.' },
        { text: 'Qxf7+, winning a pawn', why: 'The f7-pawn is defended by the f8-rook and the king. Qxf7+ would just lose the queen.' },
        { text: 'Qxc5, winning a pawn', why: "The queen can't reach c5: White's own e5-pawn blocks the fifth rank. The threat is mate on h7." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move after 9.Qh5. What is the best move?',
      moves: CASTLE.split(' ').slice(0, 17).join(' '),
      orientation: 'black',
      choices: [
        { text: '9...Ng6', correct: true, why: 'Right. The knight blocks the d3-bishop, so only the queen hits h7, and the king guards it.' },
        { text: '9...Qc7', why: 'This ignores the threat: 10.Qxh7 is checkmate.' },
        { text: '9...cxd4', why: 'This ignores the threat: 10.Qxh7 is checkmate.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Black plays 6...Qc7 instead of 6...Ne7, and White answers 7.Qg4. After 7...Ne7, what has happened?',
      moves: QC7.split(' ').slice(0, 14).join(' '),
      orientation: 'black',
      choices: [
        { text: 'The position is the same as after 6...Ne7 7.Qg4 Qc7: the Poisoned Pawn', correct: true, why: 'Right. Two move orders, one position. If White takes on g7, the play is the same.' },
        { text: 'Black has lost a move compared with the main line', why: 'Both sides have made the same moves in a different order. No time was lost.' },
        { text: 'Black has defended g7 with the queen', why: 'A queen on c7 does not guard g7. Black is letting the pawn go.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'After 7...O-O 8.Bd3 f5 9.exf6, how should Black take back?',
      moves: F5.split(' ').slice(0, 17).join(' '),
      orientation: 'black',
      choices: [
        { text: '9...Rxf6', correct: true, why: 'Right. The rook removes the pawn on f6, so it can\'t take on g7.' },
        { text: '9...Nf5', why: 'Then 10.fxg7 wrecks Black\'s kingside, and White is much better.' },
        { text: '9...Ng6', why: 'Then 10.fxg7 attacks the f8-rook and opens Black\'s king, and White is much better.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the castling line, what did 11...c4 do?',
      moves: CASTLE.split(' ').slice(0, 22).join(' '),
      orientation: 'black',
      choices: [
        { text: 'It attacked the d3-bishop, the piece aiming at h7', correct: true, why: 'Right. White had to move the bishop or trade it with Bxg6. Either way, the pressure on h7 eases.' },
        { text: 'It opened the c-file for Black\'s rooks', why: 'A pawn on c4 keeps the c-file closed. Its job was to hit the d3-bishop.' },
        { text: 'It attacked the d4-pawn', why: 'A pawn on c4 attacks b3 and d3, not d4.' }
      ]
    }
  ],
  key: { name: 'Winawer 7.Qg4: castle or let g7 go?', moves: QG4, orientation: 'black' },
  terms: [
    { term: 'En passant', meaning: 'A special pawn capture. When a pawn moves two squares and lands beside an enemy pawn, that pawn may take it as if it had moved one square, but only on the very next move.' },
    { term: 'Poisoned pawn', meaning: 'A pawn that looks free but is risky to take, because grabbing it costs time or opens lines for the opponent.' },
    { term: 'Transposition', meaning: 'Reaching the same position by a different move order.' }
  ]
})
