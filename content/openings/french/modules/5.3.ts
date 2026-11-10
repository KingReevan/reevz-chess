import { defineModule } from '../../../types'
import { RUBINSTEIN } from '../lines'

/** rub-4nd7: 4...Nd7 5.Nf3 Ngf6 6.Nxf6+ Nxf6 */
const MAIN = `${RUBINSTEIN} Nd7 Nf3 Ngf6 Nxf6+ Nxf6`
/** 7.Bd3 c5 8.dxc5 Bxc5 (the first moves of rub-7bd3) */
const BREAK = `${MAIN} Bd3 c5 dxc5 Bxc5`
/** rub-7bd3: 9.Qe2 O-O 10.Bg5 h6 11.Bh4 Qa5+ 12.c3 Nd5 */
const BD3 = `${BREAK} Qe2 O-O Bg5 h6 Bh4 Qa5+ c3 Nd5`
/** rub-6bd3: 6.Bd3 Nxe4 7.Bxe4 Nf6 8.Bd3 c5 9.dxc5 Bxc5 */
const SIX_BD3 = `${RUBINSTEIN} Nd7 Nf3 Ngf6 Bd3 Nxe4 Bxe4 Nf6 Bd3 c5 dxc5 Bxc5`

export default defineModule({
  id: '5.3',
  title: 'The ...c5 break against 7.Bd3',
  minutes: 11,
  level: 2,
  goals: [
    "Free Black's game with 7...c5 and 8...Bxc5",
    "Know White's plan: Qe2, Bg5 and long castling",
    'See how 6.Bd3 reaches the same position by another road'
  ],
  intro:
    "After 6.Nxf6+ Nxf6, Black is solid but a little cramped: White's d4-pawn takes away c5 and e5. How does Black get more room for the pieces? With one pawn move that every Rubinstein player must know: ...c5.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The break and what follows',
      intro: "Watch the d4-pawn disappear, then watch White's pieces clear the way for long castling.",
      moves: BD3,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'The main line',
          text: "6...Nxf6. Black's pawns are healthy and the pieces are compact. But the d4-pawn still takes away c5 and e5 from Black's pieces.",
          arrows: [['d4', 'c5', 'yellow'], ['d4', 'e5', 'yellow']]
        },
        13: {
          title: 'The bishop develops',
          text: "7.Bd3. White's main move. The bishop aims at Black's kingside, and White is ready to castle.",
          arrows: [['d3', 'h7', 'blue']]
        },
        14: {
          title: 'The freeing break',
          text: '7...c5. The pawn hits d4, White\'s last pawn in the center. This is the move that frees Black\'s game.',
          arrows: [['c5', 'd4', 'red']]
        },
        15: {
          title: 'White takes',
          text: '8.dxc5. White trades the d-pawn rather than defend it. Now neither side has a pawn on the d-file.',
          arrows: [['f8', 'c5', 'green']]
        },
        16: {
          title: 'An active bishop',
          text: "8...Bxc5. The bishop takes back and lands on an active square, aiming at f2. Black has caught up in development, and the position is roughly equal.",
          arrows: [['c5', 'f2', 'blue']]
        },
        17: {
          title: 'Clearing the back rank',
          text: '9.Qe2. The queen develops and leaves d1. Once the c1-bishop comes out, White can castle queenside.',
          arrows: [['e1', 'c1', 'blue']]
        },
        18: {
          title: 'Black castles',
          text: "9...O-O. Black's king goes to safety on the kingside, behind the f-, g- and h-pawns.",
          arrows: [['e8', 'g8', 'green']]
        },
        19: {
          title: 'A pin on f6',
          text: '10.Bg5. The bishop pins the f6-knight to the queen on d8, and the c1-square is now empty. White is ready for O-O-O.',
          arrows: [['g5', 'f6', 'red'], ['f6', 'd8', 'yellow']]
        },
        20: {
          title: 'Asking the bishop',
          text: '10...h6. Black asks the bishop to decide: take the knight or step back.',
          arrows: [['h6', 'g5', 'red']]
        },
        21: {
          title: 'Keeping the pin',
          text: '11.Bh4. The bishop steps back but keeps the pin on the f6-knight.',
          arrows: [['h4', 'f6', 'red'], ['f6', 'd8', 'yellow']]
        },
        22: {
          title: 'Out of the pin, with check',
          text: '11...Qa5+. The queen leaves d8, so the knight is no longer pinned, and it gives check along the a5–e1 diagonal.',
          arrows: [['a5', 'e1', 'red']]
        },
        23: {
          title: 'A pinned pawn',
          text: "12.c3. The pawn blocks the check. But now the c3-pawn is pinned: it can't move, because that would expose White's king to the queen.",
          arrows: [['a5', 'c3', 'red'], ['c3', 'e1', 'yellow']],
          marks: ['c3']
        },
        24: {
          title: 'The knight jumps in',
          text: '12...Nd5. The knight steps away from the h4-bishop and lands in the center. It hits the pinned c3-pawn and eyes f4, where it would attack White\'s queen and bishop. The position is level.',
          arrows: [['d5', 'c3', 'red'], ['d5', 'f4', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Plans for both sides',
      body:
        "**White** wants activity. Qe2 and a bishop move (Bg5, Bf4 or Be3) clear the back rank for **long castling**, and then White's pieces aim at Black's king. The d3-bishop already points at h7.\n\n**Black** has freed the game. The last piece to bring out is the c8-bishop: ...b6 and ...Bb7 put it on the long diagonal, or ...Bd7 and ...Bc6 do the same. The queen often goes to a5 or c7, and the knight to d5. With accurate play Black is fine: the engine calls the main line level."
    },
    {
      kind: 'warning',
      title: 'Answer Bg5 with ...h6',
      body:
        "After 10.Bg5, the natural 10...Qc7?! lets White play 11.Bxf6 gxf6, breaking up Black's kingside pawns just as in Module 5.2. 10...Be7 is too passive: White castles long with a pleasant edge. **10...h6** first, then ...Qa5+, keeps Black's position healthy."
    },
    {
      kind: 'walkthrough',
      title: 'Another road: 6.Bd3',
      intro: "White can keep the e4-knight instead of trading it. Watch where the game ends up.",
      moves: SIX_BD3,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The same set-up',
          text: '5...Ngf6. Black challenges the e4-knight as usual.',
          arrows: [['f6', 'e4', 'red']]
        },
        11: {
          title: 'Defending the knight',
          text: '6.Bd3. White defends the knight instead of trading it.',
          arrows: [['d3', 'e4', 'green']]
        },
        12: {
          title: 'Black trades',
          text: "6...Nxe4. Black's simplest answer: trade the strong knight.",
          marks: ['e4']
        },
        13: {
          title: 'The bishop takes back',
          text: '7.Bxe4. Now a bishop stands on e4.',
          marks: ['e4']
        },
        14: {
          title: 'With tempo',
          text: '7...Nf6. The d7-knight comes to f6 and attacks the bishop, so White must spend a move on it.',
          arrows: [['f6', 'e4', 'red']]
        },
        15: {
          title: 'Same position',
          text: '8.Bd3. The bishop steps back. Compare: this is exactly the position after 6.Nxf6+ Nxf6 7.Bd3, with Black to move.',
          arrows: [['e4', 'd3', 'blue']]
        },
        16: {
          title: 'The same break',
          text: '8...c5. Black hits d4 again.',
          arrows: [['c5', 'd4', 'red']]
        },
        17: {
          title: 'White takes',
          text: '9.dxc5. White trades the d-pawn, as before.',
          marks: ['c5']
        },
        18: {
          title: 'Roughly equal',
          text: '9...Bxc5. The bishop takes back. The plans are the same as in the main line, and the position is roughly equal.',
          arrows: [['c5', 'f2', 'blue']]
        }
      }
    }
  ],
  takeaway:
    'Against 7.Bd3, Black frees the game with 7...c5 and 8...Bxc5, then castles; the position is roughly equal. White plays Qe2 and Bg5 to castle long. Meet Bg5 with ...h6 and ...Qa5+.',
  lookAhead: "Module 5.4 shows White's other tries against the Rubinstein: the quiet 7.c3, Capablanca's 7.Ne5, and 6.Bg5.",
  drills: [
    {
      title: 'Free your game',
      prompt: "You're Black. White has played 7.Bd3. Break with your c-pawn, take back with a piece, and get your king safe.",
      moves: `${BREAK} Qe2 O-O`,
      start: 13,
      side: 'black',
      hints: ['Which pawn can attack d4?', 'After 8.dxc5, take back with the f8-bishop. Then castle.'],
      success: '7...c5 8.dxc5 Bxc5 9.Qe2 O-O. Black has caught up in development, and the game is roughly equal.'
    },
    {
      title: "White's set-up",
      prompt: "You're White. Black has just played 7...c5. Take the pawn, then put your queen on a square that clears the way for long castling.",
      moves: `${BREAK} Qe2`,
      start: 14,
      side: 'white',
      hints: ['Trade your d-pawn for the c-pawn.', 'The queen leaves d1 and develops to e2.'],
      success: '8.dxc5 Bxc5 9.Qe2. Next comes a bishop move and O-O-O.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: "Black to move. White has played 7.Bd3. What is Black's freeing break?",
      moves: `${MAIN} Bd3`,
      orientation: 'black',
      choices: [
        { text: '7...c5', correct: true, why: 'Right. The pawn hits d4, and after 8.dxc5 Bxc5 Black has free, active pieces.' },
        { text: '7...e5', why: "The e5-square is covered by the d4-pawn and the f3-knight, and nothing black guards it. After 8.dxe5 White wins a pawn." },
        { text: '7...b6', why: 'Playable, but slower. It prepares ...Bb7 without challenging d4, and White keeps a bigger edge than after 7...c5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 7.Bd3 c5 8.dxc5 Bxc5, how does the position look?',
      moves: BREAK,
      orientation: 'black',
      choices: [
        { text: 'Roughly equal: Black has caught up in development', correct: true, why: 'Right. The bishop on c5 is active, and Black is about to castle.' },
        { text: 'Black is a pawn down', why: 'No. White took on c5, and Black took back with the bishop. Material is equal.' },
        { text: 'White has a winning attack', why: "Black's king is about to castle into safety, and the engine calls the position roughly equal." }
      ]
    },
    {
      type: 'plan',
      prompt: "What are White's moves Qe2 and Bg5 preparing?",
      moves: `${BREAK} Qe2 O-O Bg5`,
      orientation: 'white',
      choices: [
        { text: 'Long castling, O-O-O', correct: true, why: 'Right. With the queen and the c1-bishop gone, the squares between the king and the a1-rook are empty.' },
        { text: 'Short castling, O-O', why: 'White could already castle short after 7.Bd3, since f1 and g1 were empty. Qe2 and Bg5 clear the queenside.' },
        { text: 'Pushing c4 to gain space', why: "Those moves don't help a c-pawn push. They clear d1 and c1 so the king can go to c1." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just played 10.Bg5, pinning the f6-knight. What is the best answer?',
      moves: `${BREAK} Qe2 O-O Bg5`,
      orientation: 'black',
      choices: [
        { text: '10...h6', correct: true, why: 'Right. Black asks the bishop at once. After 11.Bh4 Qa5+ 12.c3 Nd5 the position is level.' },
        { text: '10...Qc7', why: "This lets 11.Bxf6 gxf6, breaking up Black's kingside pawns. White is better." },
        { text: '10...Be7', why: 'Too passive. It breaks the pin, but White castles long and keeps a pleasant edge.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'White plays 6.Bd3 instead of 6.Nxf6+. After 6...Nxe4 7.Bxe4 Nf6 8.Bd3, which position is on the board?',
      moves: `${RUBINSTEIN} Nd7 Nf3 Ngf6 Bd3 Nxe4 Bxe4 Nf6 Bd3`,
      orientation: 'black',
      choices: [
        { text: 'The same position as after 6.Nxf6+ Nxf6 7.Bd3', correct: true, why: 'Right. Two roads, one position. Black answers with ...c5 in both.' },
        { text: 'A Fort Knox position', why: "Fort Knox has Black's bishop on c6. Here the c8-bishop hasn't moved." },
        { text: 'A position where Black has fallen a move behind', why: "No. White's bishop went d3–e4–d3, so nobody lost time. It is the 7.Bd3 main line." }
      ]
    },
    {
      type: 'concept',
      prompt: "After 11...Qa5+ 12.c3, why can't the c3-pawn move?",
      moves: `${BD3.split(' ').slice(0, 23).join(' ')}`,
      orientation: 'black',
      choices: [
        { text: "It is pinned to White's king by the queen on a5", correct: true, why: 'Right. The queen, the c3-pawn and the king on e1 are on one diagonal. If the pawn moved, the king would be in check.' },
        { text: 'A black piece blocks it', why: 'The c4-square is empty. The pawn is stuck because it is pinned, not blocked.' },
        { text: "It is pinned to White's queen", why: "White's queen is on e2, off that diagonal. The pin is to the king on e1, so moving the pawn would be illegal." }
      ]
    }
  ],
  key: { name: 'Rubinstein: 7.Bd3 c5 8.dxc5 Bxc5', moves: BREAK, orientation: 'black' },
  terms: [
    { term: 'Freeing break', meaning: 'A pawn move that trades off an enemy pawn and gives your pieces more room, like ...c5 against d4.' },
    { term: 'Tempo', meaning: 'One move of time. Attacking a piece so it must move, like 7...Nf6 hitting the e4-bishop, gains a tempo.' },
    { term: 'Pin', meaning: 'A piece or pawn that cannot move without exposing a more valuable piece behind it. A pin to the king makes the move illegal.' },
    { term: 'Long castling', meaning: 'Castling queenside (O-O-O). The king goes to c1 (or c8) and the rook to d1 (or d8).' }
  ]
})
