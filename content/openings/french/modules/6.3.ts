import { defineModule } from '../../../types'
import { CLASSICAL, STEINITZ } from '../lines'

/** cla-steinitz-qxb2: 7...cxd4 8.Nxd4 Qb6 9.Qd2 Qxb2 10.Rb1 Qa3 11.Bb5 */
const QXB2 = `${STEINITZ} cxd4 Nxd4 Qb6 Qd2 Qxb2 Rb1 Qa3 Bb5`
/** cla-5nce2: 5.Nce2 c5 6.c3 Nc6 7.f4 Qb6 8.Nf3 f6 9.a3 */
const NCE2 = `${CLASSICAL} e5 Nfd7 Nce2 c5 c3 Nc6 f4 Qb6 Nf3 f6 a3`
/** model-gukesh-ding-2024-g1, the first 15 moves (research §14) */
const GAME = `${CLASSICAL} e5 Nfd7 f4 c5 Nce2 Nc6 c3 a5 Nf3 a4 Be3 Be7 g4 Qa5 Bg2 a3 b3 cxd4 b4 Qc7 Nexd4 Nb6 O-O Nc4`

export default defineModule({
  id: '6.3',
  title: "Steinitz sidelines and Ding's 2024 win",
  minutes: 12,
  level: 2,
  goals: [
    'Weigh the pawn grab 8...Qb6 9.Qd2 Qxb2: a pawn against a lead in development',
    'Know 5.Nce2, which frees c3 for a pawn to support d4',
    "Follow Black's queenside plan in Gukesh–Ding, World Championship 2024"
  ],
  intro:
    "Module 6.2 showed the main Steinitz plans. Now three more ideas. Black can grab a pawn on b2 with the queen, if Black dares. White can play 5.Nce2 to build a big pawn chain with c3. And in 2024, Ding Liren beat Gukesh against this set-up in the first game of their World Championship match.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The pawn grab: 8...Qb6 and ...Qxb2',
      intro: 'Black wins a pawn. Count how many White pieces are in play when it is over.',
      moves: QXB2,
      start: 15,
      orientation: 'white',
      steps: {
        15: {
          title: 'The Steinitz again',
          text: '8.Nxd4. The position from Module 6.2. Instead of 8...Bc5, Black can bring the queen out.',
          arrows: [['d8', 'b6', 'blue']]
        },
        16: {
          title: 'Two targets',
          text: '8...Qb6. The queen attacks the d4-knight and the b2-pawn. Nothing defends b2.',
          arrows: [['b6', 'd4', 'red'], ['b6', 'b2', 'red']],
          marks: ['b2']
        },
        17: {
          title: 'Take it if you dare',
          text: "9.Qd2. White keeps guarding d4 and simply lets the b2-pawn go. White's plan is to win time while Black's queen goes pawn hunting.",
          arrows: [['d2', 'd4', 'green']]
        },
        18: {
          title: 'The pawn grab',
          text: '9...Qxb2. Black is a pawn up. But the queen is far from the kingside, and Black has developed only the queen and two knights.',
          ann: '!?'
        },
        19: {
          title: 'Chase the queen',
          text: '10.Rb1. The rook attacks the queen and gets onto the half-open b-file. Every attack on the queen gains White time.',
          arrows: [['b1', 'b2', 'red']]
        },
        20: {
          title: 'The queen hides',
          text: '10...Qa3. The queen escapes to a3, where it hits the c3-knight and the a2-pawn. Both are defended for now.',
          arrows: [['a3', 'c3', 'red'], ['a3', 'a2', 'red']]
        },
        21: {
          title: 'Everything is out',
          text: "11.Bb5. White threatens Nxc6 bxc6 Bxc6, with the bishop hitting the a8-rook. Black's king is still in the center and the queen is offside. Black usually trades with 11...Nxd4, and the engine gives White a slight edge: risky for Black, but not losing.",
          arrows: [['b5', 'c6', 'red'], ['d4', 'c6', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '5.Nce2: a pawn for c3',
      intro: 'In the Steinitz, the c3-knight stops White from playing c3. This knight move fixes that.',
      moves: NCE2,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'The Steinitz position',
          text: '4...Nfd7. White usually plays 5.f4 here. There is another plan.',
          arrows: [['f2', 'f4', 'blue']]
        },
        9: {
          title: 'The knight steps aside',
          text: '5.Nce2. This is the Shirov–Anand Variation. The knight leaves c3 so the c-pawn can go there and support d4.',
          arrows: [['c3', 'e2', 'blue'], ['c2', 'c3', 'green']]
        },
        10: {
          title: 'Hit the base anyway',
          text: '5...c5. Black attacks d4 as usual.',
          arrows: [['c5', 'd4', 'red']]
        },
        11: {
          title: 'A pawn guards d4',
          text: '6.c3. Now the chain runs c3–d4–e5. A pawn on c3 is a steadier guard than a piece, because it doesn\'t mind being attacked.',
          arrows: [['c3', 'd4', 'green']]
        },
        12: {
          title: 'More pressure',
          text: '6...Nc6. The knight adds a second attacker on d4.',
          arrows: [['c6', 'd4', 'red']]
        },
        13: {
          title: 'Now f4',
          text: '7.f4. The f-pawn supports e5, just as in the main Steinitz.',
          arrows: [['f4', 'e5', 'green']]
        },
        14: {
          title: 'The queen joins',
          text: '7...Qb6. The queen hits b2, which the c1-bishop guards. It also lines up behind the c5-pawn: after a later ...cxd4, the queen joins the attack on d4.',
          arrows: [['b6', 'b2', 'red'], ['b6', 'd4', 'blue']]
        },
        15: {
          title: 'A fourth defender',
          text: '8.Nf3. Now d4 has four defenders: the c3-pawn, both knights and the queen. Black attacks it only twice.',
          arrows: [['f3', 'd4', 'green'], ['e2', 'd4', 'green'], ['c3', 'd4', 'green']]
        },
        16: {
          title: 'Hit the head',
          text: "8...f6. Black's second break, against e5, the head of the chain.",
          arrows: [['f6', 'e5', 'red']]
        },
        17: {
          title: 'Queenside space',
          text: '9.a3. White prepares b4, gaining space and hitting c5. The engine calls the position level.',
          arrows: [['b2', 'b4', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Gukesh–Ding, 2024: the a-pawn and the c4-knight',
      intro: 'World Championship 2024, game 1. Gukesh had White, Ding Liren Black. Watch Black\'s a-pawn and one knight.',
      moves: GAME,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The Steinitz',
          text: '5...c5. A normal Steinitz so far. Now Gukesh chooses a Shirov–Anand-style set-up.',
          arrows: [['c5', 'd4', 'red']]
        },
        11: {
          title: 'Knight to e2',
          text: '6.Nce2. As in the last walkthrough, the knight makes room for c3.',
          arrows: [['c2', 'c3', 'blue']]
        },
        12: {
          title: 'Develop',
          text: '6...Nc6. Black adds a second attacker on d4.',
          arrows: [['c6', 'd4', 'red']]
        },
        13: {
          title: 'The chain is ready',
          text: '7.c3. The c3-pawn supports d4. White\'s pawns stand on c3, d4, e5 and f4.',
          marks: ['c3', 'd4', 'e5', 'f4']
        },
        14: {
          title: 'The a-pawn starts',
          text: "7...a5. Ding's plan: run the a-pawn up the board to gain queenside space and loosen White's queenside pawns.",
          arrows: [['a5', 'a3', 'blue']]
        },
        15: {
          title: 'Guard d4',
          text: '8.Nf3. The knight develops and guards d4.',
          arrows: [['f3', 'd4', 'green']]
        },
        16: {
          title: 'The pawn keeps going',
          text: '8...a4. One more step.',
          arrows: [['a4', 'a3', 'blue']]
        },
        17: {
          title: 'Another guard',
          text: '9.Be3. The bishop also guards d4.',
          arrows: [['e3', 'd4', 'green']]
        },
        18: {
          title: 'Develop',
          text: '9...Be7. Black gets ready to castle.',
          arrows: [['e8', 'g8', 'blue']]
        },
        19: {
          title: 'Kingside space',
          text: '10.g4. Gukesh grabs space on the kingside. Later he wants f4–f5 to hit the e6-pawn.',
          arrows: [['f4', 'f5', 'blue']]
        },
        20: {
          title: 'Queen to a5',
          text: '10...Qa5. The queen supports the a-pawn and puts pressure on c3.',
          arrows: [['a5', 'c3', 'red']]
        },
        21: {
          title: 'The bishop develops',
          text: '11.Bg2. White gets ready to castle short.',
          arrows: [['e1', 'g1', 'blue']]
        },
        22: {
          title: 'The pawn arrives',
          text: '11...a3. The pawn hits b2, which nothing defends. The engine preferred 11...b5 and now gives White a small edge, but the a3-pawn will matter later.',
          arrows: [['a3', 'b2', 'red']]
        },
        23: {
          title: 'Push past it',
          text: '12.b3. White doesn\'t take on a3. Now the a3-pawn is stuck, but it controls the b2-square for the rest of the game.',
          marks: ['b2']
        },
        24: {
          title: 'Trade on d4',
          text: '12...cxd4. Black trades the c-pawn.',
          arrows: [['c8', 'c3', 'blue']]
        },
        25: {
          title: 'Kick the queen',
          text: '13.b4. White gains time on the queen. But the b-pawn has now passed c4 for good.',
          arrows: [['b4', 'a5', 'red']],
          marks: ['c4']
        },
        26: {
          title: 'The queen steps back',
          text: '13...Qc7. The queen steps back to c7.',
          arrows: [['a5', 'c7', 'blue']]
        },
        27: {
          title: 'Take back',
          text: '14.Nexd4. The e2-knight recaptures the pawn.',
          marks: ['d4']
        },
        28: {
          title: 'A knight on the move',
          text: '14...Nb6. The knight heads for c4.',
          arrows: [['b6', 'c4', 'blue']]
        },
        29: {
          title: 'White castles',
          text: '15.O-O. White\'s king goes to the kingside.'
        },
        30: {
          title: 'An outpost on c4',
          text: '15...Nc4. No White pawn can attack this knight: there is no d-pawn, and the b-pawn has passed by. From c4 it hits the e3-bishop and eyes b2, the square the a3-pawn controls.',
          arrows: [['c4', 'e3', 'red'], ['c4', 'b2', 'blue']],
          marks: ['c4', 'b2']
        }
      }
    },
    {
      kind: 'history',
      title: 'How the game ended',
      body:
        "The knight later reached b2: 16.Bf2 Bd7 17.Qe2 Nxd4 18.Nxd4 Nb2, where the a3-pawn protected it. By the middlegame Black was slightly better. Then Gukesh went wrong with 22.Qe1 and 30.Qc2, and Ding won in 42 moves (0-1). It was the first game of the 2024 World Championship match in Singapore."
    },
    {
      kind: 'text',
      title: 'What to take from these lines',
      body:
        "**For Black:** the pawn grab ...Qxb2 is playable but risky. Only take it if you know the follow-up, because White gets a big lead in development. The safer plans are those of Module 6.2. In set-ups with c3, the ...a5–a4–a3 march gains space and creates holes in White's queenside.\n\n**For White:** against ...Qb6, you don't always have to defend b2. Qd2 and Rb1 can give you more than a pawn's worth of time. 5.Nce2 and c3 build a solid chain, but the knight on e2 blocks the f1-bishop for a while."
    }
  ],
  takeaway:
    "8...Qb6 9.Qd2 Qxb2 wins a pawn but gives White a big lead in development. 5.Nce2 lets White support d4 with c3. In Gukesh–Ding 2024, Black's a-pawn reached a3 and a knight found a safe home on c4.",
  lookAhead:
    'Module 6.4 turns to the other main line, 4.Bg5 Be7 5.e5 Nfd7 6.Bxe7 Qxe7 7.f4, where the dark-squared bishops come off.',
  drills: [
    {
      title: 'Punish the pawn grab with time',
      prompt: "You're White. Black has played 8...Qb6, hitting d4 and b2. Keep d4 guarded and let the pawn go. Then chase the queen and bring out your last minor piece with a threat.",
      moves: QXB2,
      start: 16,
      side: 'white',
      hints: ['The queen can keep guarding d4 from d2.', 'After ...Qxb2, attack the queen with the a1-rook. Then develop the f1-bishop where it hits the c6-knight.'],
      success: '9.Qd2 Qxb2 10.Rb1 Qa3 11.Bb5. Black is a pawn up, but White has a big lead in development.'
    },
    {
      title: 'The Shirov–Anand chain',
      prompt: "You're White. You have played 5.Nce2 and Black hit d4 with 5...c5. Support d4 with a pawn, then support e5 with another, develop the knight and prepare b4.",
      moves: NCE2,
      start: 10,
      side: 'white',
      hints: ['The c-pawn can now go to c3.', 'Then f4, Nf3, and a quiet a-pawn move to prepare b4.'],
      success: '6.c3, 7.f4, 8.Nf3 and 9.a3. A solid chain from c3 to e5, and b4 is coming.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the point of 5.Nce2?',
      moves: `${CLASSICAL} e5 Nfd7 Nce2`,
      orientation: 'white',
      choices: [
        { text: 'To free c3 for the c-pawn, so a pawn can support d4', correct: true, why: 'Right. After c3, the chain runs c3–d4–e5, and d4 is much harder to win.' },
        { text: 'To attack the d5-pawn', why: 'From e2 the knight does not reach d5. It just steps aside for the c-pawn.' },
        { text: 'To prepare castling queenside', why: 'Castling queenside needs b1, c1 and d1 empty. The move is about c3 and d4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9...Qxb2 10.Rb1 Qa3 11.Bb5, what does each side have?',
      moves: QXB2,
      orientation: 'white',
      choices: [
        { text: 'Black has an extra pawn; White has a big lead in development', correct: true, why: "Right. The engine gives White a slight edge: the time is worth a little more than the pawn." },
        { text: 'Black has an extra pawn and a safe position', why: "Black's king is still in the center and the queen is far away on a3. It is risky." },
        { text: 'White has won material', why: 'Material is not level: Black is a pawn up. White has time and active pieces instead.' }
      ]
    },
    {
      type: 'concept',
      prompt: "In Gukesh–Ding, why was c4 such a good square for Black's knight?",
      moves: GAME,
      orientation: 'black',
      choices: [
        { text: 'No White pawn could attack it', correct: true, why: 'Right. White had no d-pawn, and the b-pawn had already passed c4. A square like this is called an outpost.' },
        { text: 'It gave check from there', why: 'The knight on c4 does not check the king on g1. Its strength is that no pawn can chase it.' },
        { text: "It attacked White's queen", why: 'The queen was on d1. From c4 the knight hit the e3-bishop and eyed b2.' }
      ]
    },
    {
      type: 'plan',
      prompt: "In Gukesh–Ding, what did Black's march ...a5, ...a4 and ...a3 achieve?",
      moves: `${CLASSICAL} e5 Nfd7 f4 c5 Nce2 Nc6 c3 a5 Nf3 a4 Be3 Be7 g4 Qa5 Bg2 a3 b3`,
      orientation: 'black',
      choices: [
        { text: 'The a3-pawn took control of b2, a future square for a knight', correct: true, why: 'Right. After 12.b3, the a3-pawn stayed, and later a knight landed on b2 under its protection.' },
        { text: 'It won the b2-pawn', why: 'White answered with 12.b3, so no pawn was won. The gain was the b2-square.' },
        { text: "It attacked White's king", why: "White's king went to the kingside. The a-pawn march was about queenside squares." }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'White to move. Black has just taken on b2 with the queen. What is White\'s best move?',
      moves: `${STEINITZ} cxd4 Nxd4 Qb6 Qd2 Qxb2`,
      orientation: 'white',
      choices: [
        { text: '10.Rb1', correct: true, why: 'Right. The rook attacks the queen and takes over the b-file. Other moves lose material: for example, 10.Rd1 Bb4 leaves the c3-knight in trouble.' },
        { text: '10.Nxc6', why: 'The queen on b2 attacks the a1-rook, and nothing defends it. 10...Qxa1+ wins a whole rook with check.' },
        { text: '10.Bb5', why: 'This ignores the attack on the a1-rook: 10...Qxa1+ wins it.' }
      ]
    },
    {
      type: 'name',
      prompt: 'Who had Black, and who won, in game 1 of the 2024 World Championship, a Steinitz French?',
      choices: [
        { text: 'Ding Liren had Black and won', correct: true, why: "Right. Ding won with the French against Gukesh, 0-1 in 42 moves." },
        { text: 'Gukesh had Black and won', why: 'Gukesh had White in game 1. Ding won it with Black.' },
        { text: 'The game was drawn', why: 'It was decisive: Ding won with Black after White went wrong with 22.Qe1 and 30.Qc2.' }
      ]
    }
  ],
  key: { name: 'Steinitz: 9...Qxb2, the pawn grab', moves: `${STEINITZ} cxd4 Nxd4 Qb6 Qd2 Qxb2`, orientation: 'white' },
  terms: [
    { term: 'Lead in development', meaning: 'Having more pieces out and ready to play than your opponent. It can be worth more than a pawn.' },
    { term: 'Outpost', meaning: 'A square, usually in the enemy half, where no enemy pawn can attack your piece. Knights love outposts.' },
    { term: 'Shirov–Anand Variation', meaning: '4.e5 Nfd7 5.Nce2: the knight leaves c3 so the c-pawn can support d4.' },
    { term: 'Pawn grab', meaning: 'Winning a pawn at the cost of time, often with the queen. Good if you survive, bad if you fall too far behind.' }
  ]
})
