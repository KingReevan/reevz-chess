import { defineModule } from '../../../types'
import { MORPHY } from '../../../lines'

/** open-riga, first moves: 6...exd4 7.Re1 d5 8.Nxd4 Bd6 */
const PIN = `${MORPHY} Nxe4 d4 exd4 Re1 d5 Nxd4 Bd6`
/** open-riga, full forcing line to 14.Kxh2 */
const RIGA = `${PIN} Nxc6 Bxh2+ Kh1 Qh4 Rxe4+ dxe4 Qd8+ Qxd8 Nxd8+ Kxd8 Kxh2`
/** The pitfall 10.Kxh2?? Qh4+ 11.Kg1 with perpetual check */
const PERPETUAL = `${PIN} Nxc6 Bxh2+ Kxh2 Qh4+ Kg1 Qxf2+ Kh1 Qh4+`

export default defineModule({
  id: '6.8',
  title: 'The Riga: 6...exd4',
  minutes: 12,
  level: 4,
  goals: [
    'See why 6...exd4 7.Re1 pins the e4-knight, and how 7...d5 saves it',
    "Follow the forcing line with ...Bxh2+, ...Qh4 and White's 11.Rxe4+!",
    'Know the pitfall 10.Kxh2?, which lets Black give perpetual check'
  ],
  intro:
    "After 5...Nxe4 6.d4, Black has a greedy alternative to 6...b5: take a second pawn with 6...exd4. This is the Riga Variation. It opens the e-file in front of Black's own king, and the play turns into a string of checks and sacrifices. With exact play White comes out better, so it is considered dubious, but both sides need to know the tactics.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The pin on the e-file',
      intro: "You're Black. Watch the e-file between White's rook and your king.",
      moves: PIN,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'A different reply',
          text: '6.d4. Instead of 6...b5, Black looks at taking a second pawn.',
          arrows: [['e5', 'd4', 'blue']]
        },
        12: {
          title: 'The e-file opens',
          text: "6...exd4. Black is two pawns up for the moment. But the e5-pawn is gone, so nothing stands between e1 and Black's king except the e4-knight.",
          arrows: [['e1', 'e8', 'blue']],
          marks: ['e4']
        },
        13: {
          title: 'The pin',
          text: "7.Re1. The rook attacks the knight, and the knight can't move: it is pinned to the king. Right now nothing guards it.",
          arrows: [['e1', 'e4', 'red'], ['e4', 'e8', 'red']],
          marks: ['e4'],
          ann: '!'
        },
        14: {
          title: 'Guard the knight',
          text: '7...d5. The pawn guards the knight. Now Rxe4 would just give a rook for a knight.',
          arrows: [['d5', 'e4', 'green']]
        },
        15: {
          title: 'Pawn back, pin back',
          text: '8.Nxd4. White wins one pawn back. Black never played ...b5, so the a4-bishop now pins the c6-knight to the king as well.',
          arrows: [['a4', 'e8', 'red'], ['d4', 'c6', 'red']],
          marks: ['c6']
        },
        16: {
          title: 'The bishop eyes h2',
          text: "8...Bd6. Black gets ready to castle and aims the bishop at h2, next to White's king. The tactics are about to start.",
          arrows: [['d6', 'h2', 'yellow']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The forcing main line',
      intro: 'Every move here is a capture, a check or a big threat. Step through slowly.',
      moves: RIGA,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'White to move',
          text: "Black wants to castle and then use the bishop on h2. White strikes first.",
          arrows: [['d6', 'h2', 'yellow']]
        },
        17: {
          title: 'The knight takes',
          text: "9.Nxc6. Now White's knight attacks Black's queen. Black can't take back with 9...bxc6, because 10.Bxc6+ would hit the king and the a8-rook.",
          arrows: [['c6', 'd8', 'red'], ['a4', 'c6', 'blue']],
          ann: '!'
        },
        18: {
          title: 'A check first',
          text: '9...Bxh2+. With the queen attacked, Black throws in a check. The bishop takes the h2-pawn.',
          arrows: [['h2', 'g1', 'red']]
        },
        19: {
          title: 'The king steps aside',
          text: '10.Kh1. The right way. Taking the bishop with 10.Kxh2? lets the queen give endless checks, as you\'ll see below.',
          ann: '!'
        },
        20: {
          title: 'The queen joins in',
          text: '10...Qh4. The queen escapes the knight and lines up on the h-file. Black threatens ...Bg3+, a discovered check, with a crushing attack on f2.',
          arrows: [['h4', 'h1', 'red'], ['h4', 'f2', 'red'], ['e4', 'f2', 'red']]
        },
        21: {
          title: 'Rook for knight',
          text: '11.Rxe4+. White gives the rook for the e4-knight, with check. That knight was one of the attackers of f2.',
          arrows: [['e4', 'e8', 'red']],
          ann: '!'
        },
        22: {
          title: 'The d-file opens',
          text: '11...dxe4. Black takes the rook. Now nothing stands between White\'s queen on d1 and d8.',
          arrows: [['d1', 'd8', 'blue']]
        },
        23: {
          title: 'Check on d8',
          text: "12.Qd8+. The c6-knight guards d8, so the king can't take. Black's only move is to take with the queen.",
          arrows: [['d8', 'e8', 'red'], ['c6', 'd8', 'green']],
          ann: '!'
        },
        24: {
          title: 'Forced',
          text: '12...Qxd8. The queens are coming off.',
          marks: ['d8']
        },
        25: {
          title: 'Discovered check',
          text: '13.Nxd8+. The knight takes back, and the a4-bishop gives check along the open diagonal. Without ...b5, that line was never blocked.',
          arrows: [['a4', 'e8', 'red']]
        },
        26: {
          title: 'The king takes',
          text: '13...Kxd8. Black wins the knight back.',
          marks: ['d8']
        },
        27: {
          title: 'The bishop falls',
          text: "14.Kxh2. Finally White takes the bishop. White has two minor pieces against a rook and two pawns, and Black's king has lost the right to castle. White is better, but it still takes good technique.",
          marks: ['h2']
        }
      }
    },
    {
      kind: 'warning',
      title: "White's pitfall: 10.Kxh2?",
      body:
        "After 9...Bxh2+, taking the bishop looks natural. But 10.Kxh2? Qh4+ 11.Kg1 Qxf2+ lets Black check forever: the king can only shuffle between g1, h1 and h2, and the queen keeps checking from f2 and h4. That is a draw by perpetual check. With 10.Kh1! White keeps the advantage."
    },
    {
      kind: 'tip',
      title: 'Two more things to remember',
      body:
        "**For Black:** after 7.Re1 the knight is pinned and unguarded. Only a move that guards it, like 7...d5, will do. 7...Be7? blocks the pin, but 8.Rxe4 still wins the knight.\n\n**For White:** 7.Re1 is the key move. Recapturing with 7.Nxd4 first gives Black time, and lets Black off lightly."
    }
  ],
  takeaway:
    "After 6...exd4 7.Re1 the e4-knight is pinned, and 7...d5 must guard it. In the forcing line, White answers 9...Bxh2+ with 10.Kh1! and 10...Qh4 with 11.Rxe4+!, reaching a better endgame. 10.Kxh2? allows perpetual check.",
  lookAhead:
    "That completes the Open Defense. Next chapter: the Berlin Defense, where Black hits e4 one move earlier with 3...Nf6.",
  drills: [
    {
      title: 'Survive the Riga',
      prompt: "You're White. Black has just played 10...Qh4, threatening a crushing attack. Find the forcing sequence.",
      moves: RIGA,
      start: 20,
      side: 'white',
      hints: ['The e4-knight is attacking f2. Take it, with check.', 'After ...dxe4 the d-file is open. Check on d8, then use your a4-bishop.'],
      success: '11.Rxe4+, 12.Qd8+, 13.Nxd8+ and 14.Kxh2. The attack is gone and you have the better endgame.'
    },
    {
      title: 'Punish 10.Kxh2',
      prompt: "You're Black. White grabbed the bishop with 10.Kxh2?. Show that you can check forever.",
      moves: PERPETUAL,
      start: 19,
      side: 'black',
      hints: ['Your queen can give check on the h-file.', 'After Kg1, take the f2-pawn with check, then go back to h4.'],
      success: '10...Qh4+, 11...Qxf2+ and 12...Qh4+. The white king cannot escape the checks: perpetual check.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "After 6...exd4 7.Re1, why can't the e4-knight move?",
      moves: `${MORPHY} Nxe4 d4 exd4 Re1`,
      orientation: 'black',
      choices: [
        { text: 'It is pinned to the king along the e-file', correct: true, why: "Right. With the e5-pawn gone, the rook on e1 looks straight through the knight to e8." },
        { text: 'It is trapped: every square is attacked', why: 'The knight has empty squares such as c5 and f6. It is pinned, not trapped.' },
        { text: 'The d4-pawn blocks it', why: 'The d4-pawn is Black\'s own and does not block the knight. The problem is the e-file pin.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move after 7.Re1. How does Black save the knight?',
      moves: `${MORPHY} Nxe4 d4 exd4 Re1`,
      orientation: 'black',
      choices: [
        { text: '7...d5', correct: true, why: 'The pawn guards the knight. Now Rxe4 would cost White a rook for a knight.' },
        { text: '7...Be7', why: 'It blocks the pin, but the knight still has no guard. 8.Rxe4 wins it.' },
        { text: '7...Nc5', why: "That move is illegal. The knight is pinned to the king and can't move at all." }
      ]
    },
    {
      type: 'trap',
      prompt: "Black to move after 9.Nxc6. Why not take back with 9...bxc6?",
      moves: PIN + ' Nxc6',
      orientation: 'black',
      choices: [
        { text: '10.Bxc6+ hits the king and the a8-rook at once', correct: true, why: 'Yes. The a4-bishop forks king and rook. That is why Black plays 9...Bxh2+ first.' },
        { text: 'It is illegal', why: 'It is legal. It just loses the a8-rook.' },
        { text: 'It allows 10.Rxe4+', why: 'That only trades a rook for a knight. The real problem is 10.Bxc6+, forking king and rook.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 9...Bxh2+, why is 10.Kxh2 a mistake?',
      moves: PIN + ' Nxc6 Bxh2+',
      orientation: 'white',
      choices: [
        { text: '10...Qh4+ 11.Kg1 Qxf2+ gives Black a perpetual check', correct: true, why: 'Right. White throws away the advantage and the game ends in a draw. 10.Kh1! is correct.' },
        { text: 'It walks into a back-rank mate', why: "There's no mate. The danger is endless checks from h4 and f2." },
        { text: 'It loses the c6-knight', why: 'The knight is not the issue. The issue is the queen checks on the open king.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Black has just played 6...exd4. What is this line called?',
      moves: `${MORPHY} Nxe4 d4 exd4`,
      orientation: 'black',
      choices: [
        { text: 'The Riga Variation', correct: true, why: 'Right. 6...exd4 in the Open Defense is the Riga.' },
        { text: 'The Open main line', why: 'The main line is 6...b5 7.Bb3 d5.' },
        { text: 'The Breslau Variation', why: 'The Breslau comes much later: 9.c3 Be7 10.Re1 O-O 11.Nd4 Nxe5.' }
      ]
    },
    {
      type: 'move',
      prompt: "White to move after 10...Qh4. Black threatens ...Bg3+. What is White's best move?",
      moves: PIN + ' Nxc6 Bxh2+ Kh1 Qh4',
      orientation: 'white',
      choices: [
        { text: '11.Rxe4+', correct: true, why: 'The rook takes the knight with check. After 11...dxe4 12.Qd8+ the queens come off.' },
        { text: '11.Bg5', why: 'It attacks the queen, but 11...Qxg5 simply takes the bishop and the attack goes on.' },
        { text: '11.Nd4+', why: 'A discovered check, but after 11...Kf8 the threats on h2 and f2 are still there.' }
      ]
    }
  ],
  key: { name: 'Riga Variation: 6...exd4', moves: `${MORPHY} Nxe4 d4 exd4`, orientation: 'black' },
  terms: [
    { term: 'Perpetual check', meaning: 'A series of checks the king cannot escape. The game is then a draw.' },
    { term: 'Discovered check', meaning: 'A piece moves out of the way and uncovers a check from a piece behind it.' },
    { term: 'Exchange sacrifice', meaning: 'Giving a rook for a bishop or knight on purpose.' }
  ]
})
