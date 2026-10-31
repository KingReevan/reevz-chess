import { defineModule } from '../../../types'
import { RUY } from '../../../lines'

const BG5 = `${RUY} g6 d4 exd4 Bg5 Be7 Bxe7 Qxe7 Bxc6 dxc6 Qxd4 Nf6 Nc3`
const COZIO = `${RUY} Nge7 O-O g6`
const ZUK = `${RUY} Nge7 c3 d6 d4 Bd7 O-O Ng6 Ng5 h6 Nxf7 Kxf7 Bc4+ Ke7 Qh5 Qe8 Qg5+ hxg5 Bxg5#`

export default defineModule({
  id: '8.6',
  title: 'Fianchetto 3...g6 and Cozio 3...Nge7',
  minutes: 11,
  level: 2,
  goals: [
    'See how ...g6 and ...Nge7 plan to hold e5 from the kingside',
    "Know White's sharp test 4.d4 exd4 5.Bg5 against the Fianchetto",
    'Learn from Zukertort-Anderssen what happens to a king left in the centre'
  ],
  intro:
    "Both of these defences try to hold e5 without the usual ...a6 or ...d6 first. 3...g6 wants the bishop on g7, and 3...Nge7 keeps a knight ready to recapture on c6. Both take time on the kingside. Can White punish that time before Black's king is safe?",
  sections: [
    {
      kind: 'walkthrough',
      title: '3...g6 and the 5.Bg5 test',
      intro: "Black's plan is ...Bg7. White tries to trade that bishop before it arrives.",
      moves: BG5,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'Make room for the bishop',
          text: '3...g6. Black plans ...Bg7, where the bishop would support e5 from the long diagonal.',
          arrows: [['f8', 'g7', 'blue'], ['g7', 'e5', 'green']]
        },
        7: {
          title: 'Strike before ...Bg7',
          text: '4.d4. White hits e5 at once, before the bishop can help. Now e5 is attacked twice and guarded once.',
          arrows: [['d4', 'e5', 'red'], ['f3', 'e5', 'red']]
        },
        8: {
          title: 'Black takes',
          text: '4...exd4. Black gives up the centre pawn rather than lose it. The d4-pawn is guarded by the c6-knight.',
          arrows: [['c6', 'd4', 'green']]
        },
        9: {
          title: 'Aim at the dark squares',
          text: '5.Bg5. The bishop attacks the queen on d8. White wants to trade off the dark-squared bishops, the piece Black was counting on.',
          arrows: [['g5', 'd8', 'red']],
          ann: '!'
        },
        10: {
          title: 'Block',
          text: '5...Be7. Black blocks and offers the trade.',
          arrows: [['e7', 'g5', 'blue']]
        },
        11: {
          title: 'The trade',
          text: '6.Bxe7. White swaps the bishops. Without the dark bishop, the squares f6, g7 and h6 are weak.',
          marks: ['f6', 'g7', 'h6']
        },
        12: {
          title: 'Queen recaptures',
          text: '6...Qxe7. The queen takes back and now eyes the e4-pawn down the open e-file. Nothing guards e4 at the moment.',
          arrows: [['e7', 'e4', 'red']]
        },
        13: {
          title: 'Remove the guard of d4',
          text: '7.Bxc6. White takes the knight that was guarding the d4-pawn. From c6 the bishop also guards e4.',
          arrows: [['b5', 'c6', 'red']],
          marks: ['d4']
        },
        14: {
          title: 'Open lines',
          text: '7...dxc6. Black recaptures with the d-pawn, opening a diagonal for the c8-bishop.',
          arrows: [['c8', 'g4', 'blue']]
        },
        15: {
          title: 'Pawn back, rook attacked',
          text: '8.Qxd4. White wins the pawn back, and the queen looks down the long diagonal at the h8-rook. With the g-pawn on g6 and the bishop gone, nothing stands in the way.',
          arrows: [['d4', 'h8', 'red']]
        },
        16: {
          title: 'Block and develop',
          text: '8...Nf6. The knight blocks the diagonal and develops.',
          marks: ['f6']
        },
        17: {
          title: 'Better development',
          text: '9.Nc3. White develops with two knights against knight and bishop. Sources disagree on how much this gives White, but it is the critical test of 3...g6.',
          arrows: [['c3', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The quieter 4.c3',
      body:
        'White can also play calmly: **3...g6 4.c3 a6 5.Ba4 d6 6.d4 Bd7**. Now ...d6 guards e5 too, and ...Bg7 comes next. This position is the same as the Modern Steinitz, Fianchetto Variation, which you will meet again in module 8.7.'
    },
    {
      kind: 'walkthrough',
      title: 'The Cozio: a knight ready for c6',
      intro: 'Short line, one idea.',
      moves: COZIO,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The Spanish position',
          text: 'If White ever plays Bxc6, Black usually has to take back with a pawn and gets doubled pawns.',
          arrows: [['b5', 'c6', 'red']]
        },
        6: {
          title: 'A second guard for c6',
          text: '3...Nge7. Now if Bxc6, the e7-knight recaptures and Black keeps a healthy pawn structure. The cost: the f8-bishop is shut in for now.',
          arrows: [['e7', 'c6', 'green']],
          marks: ['f8']
        },
        7: {
          title: 'The main move',
          text: '4.O-O. White simply castles and keeps the pressure.',
          arrows: [['f1', 'e1', 'blue']]
        },
        8: {
          title: 'Free the bishop',
          text: '4...g6. The best reply. The bishop will come to g7, and then Black can castle.',
          arrows: [['f8', 'g7', 'blue'], ['e8', 'g8', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Zukertort-Anderssen, 1865',
      intro: 'A Cozio where Black guarded e5 well but left the king in the centre.',
      moves: ZUK,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'A king without shelter',
          text: "After 4.c3 d6 5.d4 Bd7 6.O-O Ng6, e5 is well guarded. But the f8-bishop hasn't moved and Black's king is still on e8.",
          marks: ['e8', 'f8']
        },
        13: {
          title: 'Hit f7',
          text: '7.Ng5. The knight attacks f7, which only the king defends.',
          arrows: [['g5', 'f7', 'red']]
        },
        14: {
          title: 'Kick the knight',
          text: '7...h6. Black chases the knight away.',
          arrows: [['h6', 'g5', 'red']]
        },
        15: {
          title: 'The sacrifice',
          text: '8.Nxf7. Instead of retreating, the knight takes on f7 and forks the queen and the h8-rook.',
          arrows: [['f7', 'd8', 'red'], ['f7', 'h8', 'red']],
          ann: '!'
        },
        16: {
          title: 'The king takes',
          text: "8...Kxf7. Black wins the knight, but the king is pulled into the open."
        },
        17: {
          title: 'Check',
          text: '9.Bc4+. The bishop checks the king on f7.',
          arrows: [['c4', 'f7', 'red']]
        },
        18: {
          title: 'The king walks forward',
          text: '9...Ke7. The king steps toward the centre instead of back to e8.',
          ann: '?'
        },
        19: {
          title: 'The queen arrives',
          text: '10.Qh5. The queen attacks the g6-knight, which nothing guards.',
          arrows: [['h5', 'g6', 'red']],
          marks: ['g6']
        },
        20: {
          title: 'Guard the knight',
          text: '10...Qe8. The queen defends g6. It looks safe, but there is a hidden mate.',
          arrows: [['e8', 'g6', 'green']],
          ann: '??'
        },
        21: {
          title: 'The queen sacrifice',
          text: '11.Qg5+. The queen gives itself up with check. Black has only one legal move: take it.',
          arrows: [['g5', 'e7', 'red']],
          ann: '!'
        },
        22: {
          title: 'Forced',
          text: '11...hxg5. The h-pawn takes the queen. Now the c1-bishop has a clear path.',
          arrows: [['c1', 'g5', 'blue']]
        },
        23: {
          title: 'Checkmate',
          text: '12.Bxg5#. The bishop checks the king on e7. Every escape square is covered or blocked by Black\'s own pieces.',
          arrows: [['g5', 'e7', 'red']],
          ann: '!'
        }
      }
    }
  ],
  takeaway:
    "3...g6 and 3...Nge7 both hold e5 from the kingside but cost time. Against 3...g6, 4.d4 exd4 5.Bg5 trades off the key bishop. In the Cozio, play ...g6 and ...Bg7 and castle quickly, or the king can be caught in the centre.",
  lookAhead:
    'Next: 3...a6 4.Ba4 d6, the Modern Steinitz. Black holds e5 with a pawn but keeps ...b5 in reserve to break the pin.',
  drills: [
    {
      title: 'Find the mate',
      prompt: "You're White in Zukertort-Anderssen. Black just defended the g6-knight with 10...Qe8. Find the forced mate.",
      moves: ZUK,
      start: 20,
      side: 'white',
      hints: [
        'Give a check that Black can only answer by capturing.',
        'After ...hxg5, the c1-bishop can reach g5 with check.'
      ],
      success: '11.Qg5+! hxg5 12.Bxg5#. A queen sacrifice that opens the path for the bishop.'
    },
    {
      title: 'Test the Fianchetto',
      prompt: "You're White. Black played 3...g6. Punish the slow kingside plan with the sharp 4.d4 line.",
      moves: BG5,
      start: 6,
      side: 'white',
      hints: [
        'Strike in the centre at once, then attack the d8-queen with your dark-squared bishop.',
        'Trade bishops on e7, take the c6-knight, win back the d4-pawn with your queen, then develop.'
      ],
      success: "4.d4, 5.Bg5, 6.Bxe7, 7.Bxc6, 8.Qxd4 and 9.Nc3. Black's dark-squared bishop is gone and White is ahead in development."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the main idea of 3...g6?',
      moves: `${RUY} g6`,
      orientation: 'black',
      choices: [
        { text: 'Put the bishop on g7 to support e5', correct: true, why: 'Right. The g7-bishop would guard e5 from the long diagonal.' },
        { text: 'Prepare ...f5', why: '...g6 can support ...f5 in some openings, but here the point is the g7-bishop guarding e5.' },
        { text: 'Attack the b5-bishop', why: 'A pawn on g6 attacks f5 and h5. It does nothing to the bishop.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Which move tests 3...g6 most sharply?',
      moves: `${RUY} g6 d4 exd4`,
      orientation: 'white',
      choices: [
        { text: '5.Bg5', correct: true, why: 'Yes. It hits the queen and aims to trade off the bishop Black wanted on g7.' },
        { text: '5.Nxd4', why: 'Playable, but it lets Black put the bishop on g7 as planned. 5.Bg5 goes straight for the dark squares.' },
        { text: '5.Qxd4', why: 'A blunder: the c6-knight guards d4, so 5...Nxd4 wins the queen.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does 8.Qxd4 attack the rook on h8?',
      moves: `${RUY} g6 d4 exd4 Bg5 Be7 Bxe7 Qxe7 Bxc6 dxc6 Qxd4`,
      orientation: 'black',
      choices: [
        { text: 'The g-pawn moved to g6 and the dark bishop is gone, so the long diagonal is open', correct: true, why: "Correct. Nothing stands on e5, f6 or g7. That's the price of ...g6 without ...Bg7." },
        { text: 'The queen jumps over the f6-square', why: 'Queens never jump. The diagonal is simply empty.' },
        { text: 'It does not; the rook is safe', why: 'It does. That is why Black has to block with 8...Nf6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the point of 3...Nge7?',
      moves: `${RUY} Nge7`,
      orientation: 'black',
      choices: [
        { text: 'If Bxc6, the knight recaptures and Black avoids doubled pawns', correct: true, why: 'Yes. That is the Cozio idea. Then ...g6 and ...Bg7 free the kingside.' },
        { text: 'It attacks the e4-pawn', why: 'A knight on e7 reaches c6, d5, f5 and g6, but not e4.' },
        { text: 'It frees the f8-bishop', why: 'The opposite: the knight on e7 shuts the f8-bishop in until ...g6.' }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'White to move. Black has just played 10...Qe8. Find the winning move.',
      moves: ZUK.split(' ').slice(0, 20).join(' '),
      orientation: 'white',
      choices: [
        { text: '11.Qg5+', correct: true, why: 'Right. 11...hxg5 is forced, and 12.Bxg5 is checkmate.' },
        { text: '11.Qxg6', why: "The e8-queen guards g6, so 11...Qxg6 wins White's queen for a knight." },
        { text: '11.Bf7', why: 'The bishop is unguarded on f7, and the queen or king simply takes it.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does the Cozio give up in return for its knight on e7?',
      moves: `${RUY} Nge7`,
      orientation: 'black',
      choices: [
        { text: 'Time: the f8-bishop is blocked until ...g6, so castling is delayed', correct: true, why: 'Exactly. That is why 4...g6 and quick castling matter.' },
        { text: 'The e5-pawn', why: 'e5 is still guarded by the c6-knight. The cost is slow kingside development.' },
        { text: 'The right to castle', why: 'Black can still castle, but only after ...g6 and ...Bg7 clear the way.' }
      ]
    }
  ],
  key: { name: 'Fianchetto Defense: 4.d4 exd4 5.Bg5', moves: `${RUY} g6 d4 exd4 Bg5`, orientation: 'white' },
  terms: [
    { term: 'Fianchetto', meaning: 'Developing a bishop to b2, g2, b7 or g7 after moving the knight pawn one square.' },
    { term: 'Long diagonal', meaning: 'The a1-h8 or h1-a8 diagonal, the longest lines on the board.' },
    { term: 'Dark squares', meaning: 'When a dark-squared bishop is traded, the dark squares it guarded can become weak.' }
  ]
})
