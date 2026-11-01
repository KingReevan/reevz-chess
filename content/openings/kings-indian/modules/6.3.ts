import { defineModule } from '../../../types'
import { SAMISCH } from '../lines'

/** samisch-7d5-nh5: 7.d5 Nh5 8.Qd2 Qh4+ 9.Bf2 Qe7 10.O-O-O f5 */
const NH5 = `${SAMISCH} e5 d5 Nh5 Qd2 Qh4+ Bf2 Qe7 O-O-O f5`
/** Karpov–Kasparov, World Championship 1990, game 23 (model-karpov-kasparov-1990-g23), complete */
const KK23 =
  `${SAMISCH} e5 d5 Nh5 Qd2 Qh4+ g3 Qe7 O-O-O f5 exf5 gxf5 Nh3 Na6 Rg1 Nf6 Nf2 Kh8 Be2 Bd7 Bg5 Nc5 g4 e4 fxe4 fxe4 Be3 Na4 g5 Nxc3 bxc3 Ng8 Ng4 c5 dxc6 Bxc6 h4 d5 cxd5 Bxd5 Qxd5 Rac8 Qd6 Rxc3+ Kb1 Qf7 Bd4`

export default defineModule({
  id: '6.3',
  title: '6...e5 7.d5: opposite-side castling',
  minutes: 12,
  level: 3,
  goals: [
    'Know the 6...e5 7.d5 Nh5 plan: ...Qh4+, ...f5 and play against e4',
    'Understand races where the kings castle on opposite sides',
    'Follow Karpov–Kasparov 1990, game 23, a White win in this line'
  ],
  intro:
    "Black's most direct answer to the Sämisch is 6...e5. If White closes the center with 7.d5, the knight goes to h5 and the f-pawn gets ready to strike. White castles queenside, Black stays kingside, and the game becomes a race. Who gets there first?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main plan: ...Nh5 and ...f5',
      intro: 'This is the Orthodox Sämisch (also called the Classical Defense to the Sämisch). Watch how the f3-pawn helps Black here.',
      moves: NH5,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The Sämisch set-up',
          text: '6.Be3. White has the f3-pawn, the e3-bishop and plans Qd2. Black now hits the center.'
        },
        12: {
          title: 'Strike at d4',
          text: '6...e5. The pawn attacks d4. White must take, defend, or push past.',
          arrows: [['e5', 'd4', 'red']]
        },
        13: {
          title: 'The center locks',
          text: '7.d5. White pushes past and gains space. Now the center is closed, so Black needs a pawn lever to open lines: ...f5 against e4.',
          arrows: [['f7', 'f5', 'blue']],
          marks: ['e4']
        },
        14: {
          title: 'Clearing the f-pawn',
          text: '7...Nh5. The knight steps aside so the f-pawn can advance. It also eyes f4, and it opens the diagonal from d8 to h4 for the queen.',
          arrows: [['f7', 'f5', 'green'], ['h5', 'f4', 'blue'], ['d8', 'h4', 'blue']]
        },
        15: {
          title: 'The queen develops',
          text: '8.Qd2. The queen joins the bishop and gets ready for queenside castling.'
        },
        16: {
          title: 'Check on the weak diagonal',
          text: '8...Qh4+. Here is a cost of 5.f3: with the f-pawn gone from f2, the diagonal from h4 to e1 is open. White usually blocks the check.',
          arrows: [['h4', 'e1', 'red']]
        },
        17: {
          title: 'Bishop blocks',
          text: '9.Bf2. The bishop blocks and attacks the queen. Module 6.4 shows the other block, 9.g3.',
          arrows: [['f2', 'h4', 'red']]
        },
        18: {
          title: 'The queen steps back',
          text: '9...Qe7. The check has done its job: White\'s bishop has left the c1–h6 diagonal, so Bh6 is off for now. The queen also keeps an eye on e5.',
          arrows: [['e7', 'e5', 'green']]
        },
        19: {
          title: 'Opposite sides',
          text: '10.O-O-O. White castles queenside. With the kings on opposite wings, each side can push pawns at the other king without weakening its own.',
          marks: ['c1', 'g8']
        },
        20: {
          title: 'The lever',
          text: '10...f5. Black attacks e4 and prepares to open the f-file. The engine prefers White here: the Sämisch is a dangerous weapon, and Black must play actively.',
          arrows: [['f5', 'e4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'How a race works',
      body:
        "When the kings castle on opposite sides, the rules change. Pawn storms are safe, because the pawns you push are not in front of your own king. White attacks Black's king with g4, h4 and the g- or h-file. Black opens lines toward c1: the c- and b-files, ...c6 or ...c5, and knights jumping to a4 or c5.\n\nThe side that opens lines first usually wins. That is why **speed matters more than material** in these positions: a pawn or even a piece is often worth giving if it opens the enemy king.\n\nBlack's other main 7th move is **7...c6**, which aims to open the c-file: 8.Bd3 cxd5 9.cxd5 Nh5 10.Nge2 f5. The engine gives White a small edge there too."
    },
    {
      kind: 'text',
      title: 'Karpov–Kasparov, 1990: the first 17 moves',
      body:
        "In game 23 of their 1990 World Championship match, Karpov met 8...Qh4+ with **9.g3**, and Kasparov retreated 9...Qe7. Then: 10.O-O-O f5 11.exf5 gxf5 12.Nh3 Na6 13.Rg1 Nf6 14.Nf2 Kh8 15.Be2 Bd7 16.Bg5 Nc5 17.g4.\n\nLook at the plans. White's rook on g1 and the g-pawn aim at Black's king along the g-file. Black's knight has traveled a6–c5 and is heading for White's king. The race is on."
    },
    {
      kind: 'walkthrough',
      title: 'Karpov–Kasparov, 1990, game 23',
      intro: 'Count the material at each step. Black tries to open White\'s king, and White wins the race.',
      moves: KK23,
      start: 33,
      orientation: 'white',
      steps: {
        33: {
          title: 'The g-pawn attacks',
          text: '17.g4. The pawn attacks f5, and the rook on g1 waits behind it for the g-file to open.',
          arrows: [['g4', 'f5', 'red'], ['g1', 'g8', 'blue']]
        },
        34: {
          title: 'Black hits back',
          text: '17...e4. Kasparov doesn\'t wait. The pawn attacks f3 and tries to open the center.',
          arrows: [['e4', 'f3', 'red']]
        },
        35: {
          title: 'White takes',
          text: '18.fxe4. White takes the pawn.'
        },
        36: {
          title: 'The f-file opens',
          text: '18...fxe4. Black takes back. The f-file is now open, and Black has a pawn on e4.'
        },
        37: {
          title: 'The bishop returns',
          text: '19.Be3. The bishop goes back to e3 and attacks the knight on c5.',
          arrows: [['e3', 'c5', 'red']]
        },
        38: {
          title: "Toward White's king",
          text: '19...Na4. The knight jumps closer to White\'s king and threatens ...Nxc3, breaking up the pawns in front of it.',
          arrows: [['a4', 'c3', 'red']]
        },
        39: {
          title: 'A pawn attacks the knight',
          text: '20.g5. The g-pawn attacks the f6-knight.',
          arrows: [['g5', 'f6', 'red']]
        },
        40: {
          title: 'Take first, then move',
          text: '20...Nxc3. Before saving the f6-knight, Black takes on c3. This is an in-between move.'
        },
        41: {
          title: "White's king is opened",
          text: '21.bxc3. White takes back. The b2-pawn has left the king, and the c3-pawn is weak, so White\'s king has less cover.',
          marks: ['c3', 'b2']
        },
        42: {
          title: 'The knight retreats',
          text: '21...Ng8. Now the knight steps back. Material is level.'
        },
        43: {
          title: 'The knight heads in',
          text: '22.Ng4. The knight comes toward the center, eyeing f6, e5 and h6.',
          arrows: [['g4', 'f6', 'blue'], ['g4', 'e5', 'blue']]
        },
        44: {
          title: 'Trying to open lines',
          text: '22...c5. Black pushes the c-pawn two squares, hoping to open lines on the queenside. But it lets White capture en passant and half-open the d-file.',
          ann: '?'
        },
        45: {
          title: 'En passant',
          text: '23.dxc6. White captures en passant: the d5-pawn takes the c5-pawn as if it had moved only one square, landing on c6.',
          marks: ['c6']
        },
        46: {
          title: 'A weak pawn on d6',
          text: "23...Bxc6. Black takes back. White has no d-pawn now, so the d-file is half-open, and the d6-pawn faces White's queen and rook with no pawn in front to shield it.",
          arrows: [['d2', 'd6', 'red']],
          marks: ['d6']
        },
        47: {
          title: 'Calm support',
          text: '24.h4. The pawn supports g5 and gets ready for h5.',
          arrows: [['h4', 'g5', 'green']]
        },
        48: {
          title: 'A desperate try',
          text: '24...d5. A desperate try to open lines toward White\'s king. The engine says it simply loses a piece.',
          ann: '?'
        },
        49: {
          title: 'White takes',
          text: '25.cxd5. White takes the pawn.'
        },
        50: {
          title: 'An unguarded bishop',
          text: '25...Bxd5. The bishop takes back, but nothing defends it on d5.',
          marks: ['d5']
        },
        51: {
          title: 'A piece up',
          text: '26.Qxd5. The queen takes the bishop down the d-file. White is a piece up.'
        },
        52: {
          title: "Black's idea",
          text: "26...Rac8. The rook aims down the c-file at c3 and White's king.",
          arrows: [['c8', 'c3', 'red']]
        },
        53: {
          title: 'Offering a trade',
          text: '27.Qd6. The queen attacks Black\'s queen. A piece up, White is happy to trade queens, because that ends Black\'s attack.',
          arrows: [['d6', 'e7', 'red']]
        },
        54: {
          title: 'A check',
          text: '27...Rxc3+. The rook takes the c3-pawn with check.',
          arrows: [['c3', 'c1', 'red']]
        },
        55: {
          title: 'The king steps aside',
          text: '28.Kb1. The king steps out of the check.'
        },
        56: {
          title: 'Avoiding the trade',
          text: '28...Qf7. Black avoids the queen trade.'
        },
        57: {
          title: 'The end',
          text: '29.Bd4. The bishop attacks the rook on c3 and lines up against the g7-bishop. Kasparov resigned: White is winning.',
          arrows: [['d4', 'c3', 'red'], ['d4', 'g7', 'red']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Sacrifices must work',
      body:
        "In a race, giving material to open the enemy king is normal. But the sacrifice has to work. In Module 6.2, Gufeld's piece sacrifice kept the game level and won after White's mistake. Here, 24...d5 opened lines but just lost a piece, and Karpov, a piece up, soon won."
    }
  ],
  takeaway:
    'After 6...e5 7.d5, Black plays ...Nh5 and ...f5 against e4, often with ...Qh4+ first. With the kings on opposite sides it is a race: open lines at the enemy king quickly, but only give material when it really opens the king.',
  lookAhead:
    "Module 6.4 looks at 9.g3, Karpov's choice, and Bronstein's famous queen sacrifice against it: 9...Nxg3.",
  drills: [
    {
      title: "Karpov's moves",
      prompt: "You're White. Black has just played 6...e5. Close the center, develop, meet the check and castle, as Karpov did.",
      moves: `${SAMISCH} e5 d5 Nh5 Qd2 Qh4+ g3 Qe7 O-O-O`,
      start: 12,
      side: 'white',
      hints: [
        'First push past the e5-pawn to close the center.',
        'Queen to d2, block the check with a pawn, then castle queenside.'
      ],
      success: '7.d5, 8.Qd2, 9.g3 and 10.O-O-O. The kings are on opposite sides and the race can begin.'
    },
    {
      title: 'Retreat, then strike',
      prompt: "You're Black. White has blocked your check with 9.Bf2. Bring the queen back to safety, then play your lever after White castles.",
      moves: NH5,
      start: 17,
      side: 'black',
      hints: [
        'The queen is attacked by the f2-bishop. Step back to a square where it still watches e5.',
        'Which pawn move attacks e4?'
      ],
      success: '9...Qe7 and 10...f5. The queen is safe, and the f-pawn attacks the center.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 6...e5 7.d5, what does 7...Nh5 prepare?',
      moves: `${SAMISCH} e5 d5 Nh5`,
      orientation: 'black',
      choices: [
        { text: '...f5, a lever against the e4-pawn', correct: true, why: 'Right. The knight gets out of the f-pawn\'s way. It also eyes f4 and opens the d8–h4 diagonal for the queen.' },
        { text: '...Nxe4, winning a pawn', why: 'The e4-pawn is guarded by the f3-pawn and the c3-knight. There is nothing to win.' },
        { text: "...Nxe3, taking White's bishop", why: "A knight on h5 can't reach e3. Its job is to clear the way for ...f5." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 8...Qh4+ possible in this line?',
      choices: [
        { text: '5.f3 moved the f-pawn off the diagonal from h4 to e1', correct: true, why: 'Exactly. With a pawn on f2 the check would be blocked. This is one of the dark-square costs of the Sämisch.' },
        { text: "White's queen has left d1", why: 'The queen on d1 never guarded that diagonal. The f2-pawn did.' },
        { text: 'The knight on h5 gives check', why: 'The knight only cleared the diagonal. The check comes from the queen.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'White has castled queenside and Black kingside. What usually matters most?',
      choices: [
        { text: 'Speed: opening lines toward the enemy king first', correct: true, why: 'Right. In opposite-side races, the side that opens lines first usually wins, even at the cost of some material.' },
        { text: 'Keeping every pawn', why: 'Material matters less here. A pawn sacrifice that opens the enemy king is often worth it.' },
        { text: 'Waiting for the opponent to attack first', why: 'Waiting is the classic mistake. If you defend while your opponent attacks, you lose the race.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In Karpov–Kasparov, why was 27.Qd6, offering a queen trade, good for White?',
      moves: `${SAMISCH} e5 d5 Nh5 Qd2 Qh4+ g3 Qe7 O-O-O f5 exf5 gxf5 Nh3 Na6 Rg1 Nf6 Nf2 Kh8 Be2 Bd7 Bg5 Nc5 g4 e4 fxe4 fxe4 Be3 Na4 g5 Nxc3 bxc3 Ng8 Ng4 c5 dxc6 Bxc6 h4 d5 cxd5 Bxd5 Qxd5 Rac8 Qd6`,
      orientation: 'white',
      choices: [
        { text: "White was a piece up, and trading queens would end Black's attack", correct: true, why: 'Right. When you are ahead in material, trades make your extra piece count and take the sting out of the attack.' },
        { text: 'It threatened checkmate on the back rank', why: "There was no mate threat. The point was the trade offer." },
        { text: 'It won the rook on c8', why: "The c8-rook was not attacked. Black's queen on e7 was." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 8...Qh4+ 9.Bf2 Qe7, what has Black\'s check achieved?',
      moves: `${SAMISCH} e5 d5 Nh5 Qd2 Qh4+ Bf2 Qe7`,
      orientation: 'black',
      choices: [
        { text: 'The bishop left the c1–h6 diagonal, so Bh6 is off for now', correct: true, why: 'Right. The bishop now sits on f2, and the queen is safe on e7.' },
        { text: 'Black has won a pawn', why: 'Material is level. The check changed where the white bishop stands.' },
        { text: 'White can no longer castle', why: 'White has not moved the king, so castling is still allowed. In this line White castles queenside next move.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Karpov–Kasparov, after 25.cxd5 Bxd5. White to move. What did Karpov play?',
      moves: `${SAMISCH} e5 d5 Nh5 Qd2 Qh4+ g3 Qe7 O-O-O f5 exf5 gxf5 Nh3 Na6 Rg1 Nf6 Nf2 Kh8 Be2 Bd7 Bg5 Nc5 g4 e4 fxe4 fxe4 Be3 Na4 g5 Nxc3 bxc3 Ng8 Ng4 c5 dxc6 Bxc6 h4 d5 cxd5 Bxd5`,
      orientation: 'white',
      choices: [
        { text: '26.Qxd5', correct: true, why: 'Nothing guards the bishop on d5, so the queen simply takes it down the d-file. White is a piece up.' },
        { text: '26.h5', why: 'A useful attacking move, but it leaves Black\'s bishop alive. Taking it is much stronger.' },
        { text: '26.Bc4', why: 'A blunder: 26...Bxc4 takes White\'s bishop instead, because nothing guards c4.' }
      ]
    }
  ],
  key: { name: 'Orthodox Sämisch: 7.d5 Nh5 ... 10.O-O-O f5', moves: NH5, orientation: 'black' },
  terms: [
    { term: 'Opposite-side castling', meaning: 'One king castles kingside and the other queenside. Both sides can then storm the other king with pawns.' },
    { term: 'Lever', meaning: 'A pawn move that attacks an enemy pawn to open lines, like ...f5 against e4.' },
    { term: 'En passant', meaning: 'When a pawn moves two squares and lands beside an enemy pawn, that pawn may take it as if it had moved one square. Only on the very next move.' }
  ]
})
