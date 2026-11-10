import { defineModule } from '../../../types'
import { EXCHANGE } from '../lines'

/** exch-4bd3: 4.Bd3 Nc6 5.c3 Bd6 6.Nf3 Bg4 7.O-O Nge7 8.Re1 Qd7 */
const BD3 = `${EXCHANGE} Bd3 Nc6 c3 Bd6 Nf3 Bg4 O-O Nge7 Re1 Qd7`
/** exch-4bd3 up to 8.Re1, for the White drill */
const BD3_RE1 = `${EXCHANGE} Bd3 Nc6 c3 Bd6 Nf3 Bg4 O-O Nge7 Re1`
/** exch-4nf3: 4.Nf3 Bd6 5.Bd3 Ne7 6.O-O O-O 7.Re1 Bf5 8.Bg5 Bxd3 9.Qxd3 c6 */
const NF3 = `${EXCHANGE} Nf3 Bd6 Bd3 Ne7 O-O O-O Re1 Bf5 Bg5 Bxd3 Qxd3 c6`

export default defineModule({
  id: '3.1',
  title: '3.exd5 exd5: symmetry and a free bishop',
  minutes: 10,
  level: 2,
  goals: [
    'See what 3.exd5 exd5 changes: a free c8-bishop and an open e-file',
    'Learn the mirror-image set-ups: Bd3/...Bd6, knights out, castle, rook to e1 or e8',
    'Use the pins ...Bg4 and Bg5, and know whether a pin is to the queen or the king'
  ],
  intro:
    "In the Exchange Variation White simply takes on d5, and Black takes back with the e-pawn. The pawns now stand like a mirror image. Is that good news for Black, and what should each side do next? This module shows the two main set-ups and the ideas behind every move.",
  sections: [
    {
      kind: 'walkthrough',
      title: '4.Bd3: mirror development and the ...Bg4 pin',
      intro: "Watch Black's c8-bishop. In most French lines it is stuck behind the e6-pawn. Here it gets out at once.",
      moves: BD3,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The French position',
          text: '2...d5. Black attacks e4. White can defend it, push it to e5, or trade it.',
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'White trades',
          text: '3.exd5. The Exchange Variation. White removes the tension instead of keeping it.',
          arrows: [['e4', 'd5', 'red']]
        },
        6: {
          title: 'A free bishop',
          text: "3...exd5. Black takes back with the e-pawn. The e6-pawn is gone, so the c8-bishop's diagonal toward h3 is open. The e-file has no pawns at all now: it is an open file.",
          arrows: [['c8', 'h3', 'blue'], ['e1', 'e8', 'blue']]
        },
        7: {
          title: 'The bishop to d3',
          text: '4.Bd3. The bishop takes its best diagonal, aimed at h7. It also covers f5, a natural square for Black\'s bishop.',
          arrows: [['d3', 'h7', 'blue']],
          marks: ['f5']
        },
        8: {
          title: 'Pressure on d4',
          text: '4...Nc6. The knight hits d4. It could also jump to b4 next and chase the d3-bishop.',
          arrows: [['c6', 'd4', 'red'], ['c6', 'b4', 'blue']]
        },
        9: {
          title: 'One pawn, two jobs',
          text: '5.c3. The pawn supports d4 and takes the b4-square away from the knight, so the d3-bishop stays where it is.',
          arrows: [['c3', 'd4', 'green'], ['c3', 'b4', 'green']]
        },
        10: {
          title: 'The mirror bishop',
          text: "5...Bd6. Black's bishop copies White's: from d6 it aims at h2, next to the square where White's king will castle.",
          arrows: [['d6', 'h2', 'blue']]
        },
        11: {
          title: 'The knight develops',
          text: '6.Nf3. The knight guards d4 and h2 and prepares castling.',
          arrows: [['f3', 'd4', 'green'], ['f3', 'h2', 'green']]
        },
        12: {
          title: 'The free bishop pins',
          text: '6...Bg4. The c8-bishop is already active. It pins the f3-knight to the queen on d1: if the knight moves, Black can take the queen. This is a pin to the queen, not the king, so the knight may still move if it gains something bigger.',
          arrows: [['g4', 'd1', 'red']],
          marks: ['f3']
        },
        13: {
          title: 'White castles',
          text: "7.O-O. White's king leaves the open e-file.",
          arrows: [['e1', 'g1', 'green']]
        },
        14: {
          title: 'Knight to e7, not f6',
          text: '7...Nge7. On e7 the knight blocks the e-file in front of Black\'s king. After 7...Nf6, White could check with 8.Re1+. From e7 the knight can later go to g6 or f5.',
          arrows: [['e7', 'g6', 'blue'], ['e7', 'f5', 'blue']]
        },
        15: {
          title: 'Rook to the open file',
          text: "8.Re1. The rook takes the open file. Now the e7-knight is pinned to Black's king: it can't move at all while the king stands on e8.",
          arrows: [['e1', 'e8', 'red']],
          marks: ['e7']
        },
        16: {
          title: 'Ready to castle',
          text: '8...Qd7. The queen steps up, so Black can castle on either side next. Castling also ends the pin on e7. The engine gives White a small edge: in a mirror-image position, White is the one who moves first.',
          arrows: [['e8', 'g8', 'green'], ['e8', 'c8', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'What the trade changes',
      body:
        "**The problem bishop is solved.** In the Advance or the Winawer, Black's c8-bishop is shut in by the e6-pawn. After 3...exd5 it can go to f5, g4 or e6 at once.\n\n**The e-file is open.** No pawns stand on it, so rooks and queens love it. Checks on the e-file come quickly, and any piece standing on e2 or e7 in front of its king can be pinned. That is why both sides like to castle early and put a rook on e1 or e8.\n\n**The pawns are symmetrical.** Neither side has a weak pawn or a pawn break ready. White's only plus is the extra move. That makes the main lines roughly equal, with White a little better at most."
    },
    {
      kind: 'walkthrough',
      title: '4.Nf3: Black trades the attacking bishop',
      intro: "The same structure, with both sides castling short. Watch how Black deals with White's d3-bishop.",
      moves: NF3,
      start: 6,
      orientation: 'white',
      steps: {
        6: {
          title: 'The Exchange structure',
          text: '3...exd5. Pawns on d4 and d5, and an open e-file. This time White starts with the knight.',
          arrows: [['e1', 'e8', 'blue']]
        },
        7: {
          title: 'Knight first',
          text: '4.Nf3. The knight develops and guards d4. White keeps the bishop move for later.',
          arrows: [['f3', 'd4', 'green']]
        },
        8: {
          title: 'Bishop to d6',
          text: '4...Bd6. Black develops the bishop toward White\'s kingside, aiming at h2.',
          arrows: [['d6', 'h2', 'blue']]
        },
        9: {
          title: 'The mirror move',
          text: "5.Bd3. White's bishop aims at h7 in the same way.",
          arrows: [['d3', 'h7', 'blue']]
        },
        10: {
          title: 'Knight to e7',
          text: "5...Ne7. As before, the knight goes to e7. From there it covers f5 and g6, and it keeps the e-file closed in front of Black's king.",
          arrows: [['e7', 'f5', 'green'], ['e7', 'g6', 'green']]
        },
        11: {
          title: 'White castles',
          text: '6.O-O. White\'s king is safe.',
          arrows: [['e1', 'g1', 'green']]
        },
        12: {
          title: 'Black castles',
          text: '6...O-O. Both kings are castled. The two bishops on d3 and d6 point at the castled kings.',
          arrows: [['d3', 'h7', 'yellow'], ['d6', 'h2', 'yellow']]
        },
        13: {
          title: 'The rook arrives',
          text: '7.Re1. The rook attacks the e7-knight. The knight is defended twice, by the queen and the d6-bishop, so it is safe.',
          arrows: [['e1', 'e7', 'red'], ['d8', 'e7', 'green'], ['d6', 'e7', 'green']]
        },
        14: {
          title: 'Offer the trade',
          text: "7...Bf5. A safe, useful move. The bishop stands on the d3–h7 diagonal and offers to trade itself for White's best attacking piece. Module 3.3 shows why 7...Bg4 here is a mistake.",
          arrows: [['f5', 'd3', 'yellow']]
        },
        15: {
          title: 'A pin on e7',
          text: "8.Bg5. White's bishop pins the e7-knight to Black's queen on d8. It is a pin to the queen, not the king.",
          arrows: [['g5', 'e7', 'red']],
          marks: ['d8']
        },
        16: {
          title: 'The bishops come off',
          text: "8...Bxd3. Black trades off White's light-squared bishop, the piece that aimed at h7.",
          arrows: [['f5', 'd3', 'red']]
        },
        17: {
          title: 'The queen takes back',
          text: '9.Qxd3. The queen recaptures. With the bishops gone, Black\'s king has one attacker fewer.',
          arrows: [['d3', 'h7', 'blue']]
        },
        18: {
          title: 'A rock on d5',
          text: '9...c6. The pawn makes d5 rock-solid and opens the d8–a5 diagonal for the queen. The engine calls the position level.',
          arrows: [['c6', 'd5', 'green'], ['d8', 'a5', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Mirror, but check first',
      body:
        "Copying your opponent's moves is a fine guide in the Exchange, but White is always one move ahead. Before you copy, ask what White's last move threatens. Two things to watch: a check on the open e-file, and White's bishop aiming at h7."
    },
    {
      kind: 'history',
      title: 'An old choice',
      body:
        "Howard Staunton recommended 3.exd5 in the 19th century, and Garry Kasparov briefly tried it in the early 1990s. Since Staunton's time it has become much less popular at the top, partly because it frees Black's problem bishop. But it is common in club and online games, so it is worth knowing well."
    }
  ],
  takeaway:
    "After 3.exd5 exd5 Black's c8-bishop is free and the e-file is open. Both sides develop the same way and castle quickly. Watch for pins on the e-file and against the f3- and e7-knights.",
  lookAhead:
    'Next: does symmetry mean a draw? Module 3.2 shows how both sides can unbalance the position and play for a win.',
  drills: [
    {
      title: 'Build the 4.Nf3 set-up as Black',
      prompt: "You're Black. White has played 3.exd5 and 4.Nf3. Develop your bishop to d6, the knight to e7, castle, then trade off White's d3-bishop and finish with a solid pawn move.",
      moves: NF3,
      start: 6,
      side: 'black',
      hints: [
        'Mirror White: bishop to d6, then the king\'s knight to e7 so the e-file stays closed.',
        "After 7.Re1, put your c8-bishop on f5 to offer a trade. After 9.Qxd3, support d5 with the c-pawn."
      ],
      success: '4...Bd6, 5...Ne7, 6...O-O, 7...Bf5, 8...Bxd3 and 9...c6. Black has traded White\'s attacking bishop and the position is level.'
    },
    {
      title: 'White\'s set-up with 4.Bd3',
      prompt: "You're White. After 3...exd5, play the bishop to d3, support d4 with the c-pawn, develop the king's knight, castle and put a rook on the open file.",
      moves: BD3_RE1,
      start: 6,
      side: 'white',
      hints: [
        'The bishop goes to the diagonal that aims at h7. When the knight comes to c6, a pawn move keeps it out of b4.',
        'Knight to f3, castle, then Re1.'
      ],
      success: "4.Bd3, 5.c3, 6.Nf3, 7.O-O and 8.Re1. The rook now pins the e7-knight to Black's king, and the engine gives White a small edge."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "After 3.exd5 exd5, what has changed for Black's c8-bishop?",
      moves: EXCHANGE,
      orientation: 'black',
      choices: [
        { text: 'It is free: the e6-pawn is gone, so it can reach f5, g4 or e6', correct: true, why: "Right. The pawn that blocked it took on d5. This is the main gift of the Exchange for Black." },
        { text: 'Nothing: it is still blocked by the e6-pawn', why: 'Look again: Black took back on d5 with the e-pawn, so e6 is empty now.' },
        { text: 'It is now blocked by the d5-pawn', why: 'The d5-pawn is not on the c8–h3 diagonal. The squares d7, e6, f5, g4 and h3 are all empty.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 3.exd5 exd5, what kind of file is the e-file?',
      moves: EXCHANGE,
      orientation: 'white',
      choices: [
        { text: 'Open: there are no pawns on it', correct: true, why: 'Yes. Both e-pawns are gone. Rooks and queens can use the whole file, and checks along it come fast.' },
        { text: 'Half-open for White', why: 'A half-open file has pawns of one color on it. Here neither side has an e-pawn, so the file is fully open.' },
        { text: 'Closed', why: 'A closed file has pawns of both colors. Here both e-pawns were traded.' }
      ]
    },
    {
      type: 'concept',
      prompt: "White has just played 8.Re1. Why can't Black's e7-knight move?",
      moves: BD3_RE1,
      orientation: 'black',
      choices: [
        { text: "It is pinned to Black's king by the e1-rook", correct: true, why: 'Right. The rook, the knight and the king stand on the open e-file. Moving the knight would expose the king to check, which is illegal. Castling ends the pin.' },
        { text: "It is pinned to Black's queen", why: "The queen is on d8, not on the e-file. The piece behind the knight on the file is the king on e8." },
        { text: 'It has no free squares to go to', why: 'g6, f5 and g8 are empty. The knight is stuck only because of the pin.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 6...Bg4 do in this position?',
      moves: `${EXCHANGE} Bd3 Nc6 c3 Bd6 Nf3 Bg4`,
      orientation: 'black',
      choices: [
        { text: 'It pins the f3-knight to the queen on d1', correct: true, why: "Yes. If the knight moves, the bishop can take the queen. It is a pin to the queen, so the knight may still move, but only if it wins something bigger." },
        { text: "It pins the f3-knight to White's king", why: "White's king is on e1, not behind the knight. The piece on the g4–d1 line behind the knight is the queen." },
        { text: 'It attacks the d4-pawn', why: 'A bishop on g4 does not touch d4. The knight on c6 is the piece that hits d4.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: "In the line 4.Bd3 Nc6, why does White play 5.c3?",
      moves: `${EXCHANGE} Bd3 Nc6 c3`,
      orientation: 'white',
      choices: [
        { text: 'To support d4 and keep the knight out of b4', correct: true, why: "Right. From b4 the knight would chase the d3-bishop. The c3-pawn covers both b4 and d4." },
        { text: 'To prepare c4 next move', why: 'White has no plan of c4 here; that would cost another move. The point is d4 and b4.' },
        { text: 'To open the c-file for a rook', why: 'The c-file is still blocked by White\'s own c3-pawn. The move is about the b4- and d4-squares.' }
      ]
    },
    {
      type: 'move',
      prompt: "Black to move. Which square is best for the king's knight here?",
      moves: `${EXCHANGE} Bd3 Nc6 c3 Bd6 Nf3 Bg4 O-O`,
      orientation: 'black',
      choices: [
        { text: '7...Nge7', correct: true, why: 'Yes. On e7 the knight blocks the open e-file in front of the king and can later go to g6 or f5.' },
        { text: '7...Nf6', why: "This leaves the e-file open in front of Black's king, so 8.Re1+ comes with check. 7...Nge7 keeps the file closed." },
        { text: '7...Nh6', why: "On the edge the knight does little, and the e-file is still open in front of Black's king, so 8.Re1+ comes with check again." }
      ]
    }
  ],
  key: { name: 'Exchange: 6...Bg4 pins the f3-knight', moves: `${EXCHANGE} Bd3 Nc6 c3 Bd6 Nf3 Bg4`, orientation: 'black' },
  terms: [
    { term: 'Exchange Variation', meaning: 'The French line 3.exd5 exd5: White trades the e-pawn for the d-pawn, and the pawns stand symmetrically.' },
    { term: 'Open file', meaning: 'A file with no pawns on it. Rooks and queens use open files to attack.' },
    { term: 'Pin', meaning: "A piece can't move (or shouldn't) because a more valuable piece stands behind it on the same line. A pin to the king is absolute: moving is illegal." },
    { term: 'Symmetrical structure', meaning: "Both sides' pawns stand on the same squares, like a mirror image." }
  ]
})
