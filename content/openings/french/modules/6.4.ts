import { defineModule } from '../../../types'
import { CLASSICAL_BG5, CLASSICAL_MAIN } from '../lines'

/** cla-main: 7...O-O 8.Nf3 c5 9.Qd2 Nc6 10.O-O-O c4 (the Stahlberg), from 5...Nfd7 */
const MAIN = `${CLASSICAL_MAIN} O-O Nf3 c5 Qd2 Nc6 O-O-O c4`
/** cla-main-a6: 7...a6 8.Nf3 c5 9.Qd2 Nc6 10.dxc5 Qxc5 11.O-O-O b5 12.Kb1 b4 13.Na4 Qa5 */
const A6 = `${CLASSICAL_MAIN} a6 Nf3 c5 Qd2 Nc6 dxc5 Qxc5 O-O-O b5 Kb1 b4 Na4 Qa5`
/** cla-7nb5: 7.Nb5 Nb6 8.c3 a6 9.Na3 c5 10.Nc2 Nc6 */
const NB5 = `${CLASSICAL_BG5} Bxe7 Qxe7 Nb5 Nb6 c3 a6 Na3 c5 Nc2 Nc6`
/** 7...O-O 8.Nf3 c5 9.Bd3: the position where 9...cxd4? allows the Greek Gift */
const BD3 = `${CLASSICAL_MAIN} O-O Nf3 c5 Bd3`

export default defineModule({
  id: '6.4',
  title: '4.Bg5 Be7: the main Classical',
  minutes: 12,
  level: 2,
  goals: [
    'Know why White trades with 6.Bxe7 and supports e5 with 7.f4',
    'Learn two plans for Black: the Stahlberg 10...c4, and 7...a6 with ...c5 and ...b5',
    'Meet 7.Nb5, which hits c7, and avoid 9...cxd4? against 9.Bd3'
  ],
  intro:
    "After 4.Bg5 Be7 5.e5 Nfd7, the bishops on g5 and e7 face each other. White's main move trades them and then props up e5 with the f-pawn. This is the main line of the Classical. What does each side play for, and which natural move walks into a sacrifice on h7?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main line and the Stahlberg 10...c4',
      intro: "Watch Black's dark-squared bishop disappear, and then where the two kings go.",
      moves: MAIN,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'Bishop faces bishop',
          text: '5...Nfd7. The knight has left f6, so the g5-bishop and the e7-bishop attack each other.',
          arrows: [['g5', 'e7', 'yellow']]
        },
        11: {
          title: 'The trade',
          text: "6.Bxe7. White removes Black's good bishop. Black's pawns on d5 and e6 stand on light squares, so they never blocked this dark-squared bishop. Black is left with the c8-bishop, the problem piece.",
          marks: ['c8']
        },
        12: {
          title: 'The queen takes back',
          text: '6...Qxe7. The queen recaptures, and the king can still castle. Here 6...Kxe7 would just leave the king in the center.',
          arrows: [['e8', 'g8', 'blue']]
        },
        13: {
          title: 'Support for e5',
          text: '7.f4. The f-pawn supports e5. White now has a lot of space on the kingside.',
          arrows: [['f4', 'e5', 'green']]
        },
        14: {
          title: 'Black castles',
          text: '7...O-O. Black gets the king safe at once.',
          arrows: [['e8', 'g8', 'green']]
        },
        15: {
          title: 'The knight develops',
          text: '8.Nf3. The knight guards d4 and e5.',
          arrows: [['f3', 'd4', 'green'], ['f3', 'e5', 'green']]
        },
        16: {
          title: 'Hit the base',
          text: "8...c5. The usual French break against d4.",
          arrows: [['c5', 'd4', 'red']]
        },
        17: {
          title: 'Ready to castle long',
          text: '9.Qd2. White clears d1 and prepares O-O-O, as in the Steinitz.',
          arrows: [['e1', 'c1', 'blue']]
        },
        18: {
          title: 'More pressure',
          text: '9...Nc6. A second attacker on d4.',
          arrows: [['c6', 'd4', 'red']]
        },
        19: {
          title: 'Opposite sides',
          text: '10.O-O-O. The kings are on opposite wings again. White will attack on the kingside, Black on the queenside.',
          marks: ['c1', 'g8']
        },
        20: {
          title: 'The Stahlberg',
          text: "10...c4. Black closes the queenside and gains space. Next comes ...b5 and ...b4 against White's king, even at the cost of the b-pawn, to open the b-file. The engine gives White a small edge and prefers 10...a6 slightly.",
          arrows: [['b7', 'b5', 'blue'], ['b5', 'b4', 'blue']],
          marks: ['c4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '7...a6: queenside play first',
      intro: "Black delays castling and starts the queenside play at once.",
      moves: A6,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'The same position',
          text: '7.f4. This time Black keeps the king in the center for a while.',
          marks: ['e8']
        },
        14: {
          title: 'No Nb5',
          text: "7...a6. The pawn takes b5 away from White's knight, which would like to jump in and hit c7. It also prepares ...b5.",
          arrows: [['a6', 'b5', 'green']],
          marks: ['c7']
        },
        15: {
          title: 'Develop',
          text: '8.Nf3. The knight guards d4 and e5.',
          arrows: [['f3', 'd4', 'green']]
        },
        16: {
          title: 'The break',
          text: '8...c5. Black hits the base of the chain.',
          arrows: [['c5', 'd4', 'red']]
        },
        17: {
          title: 'The queen steps up',
          text: '9.Qd2. Ready to castle long.',
          arrows: [['e1', 'c1', 'blue']]
        },
        18: {
          title: 'Another attacker',
          text: '9...Nc6. Now d4 is attacked twice.',
          arrows: [['c6', 'd4', 'red']]
        },
        19: {
          title: 'White takes first',
          text: '10.dxc5. White trades the d4-pawn and frees the d4-square for a knight.',
          marks: ['d4']
        },
        20: {
          title: 'The queen recaptures',
          text: '10...Qxc5. The queen takes back and stays active. 10...Nxc5 is also good, and the engine even prefers it slightly.',
          arrows: [['c5', 'c3', 'blue']]
        },
        21: {
          title: 'White castles long',
          text: '11.O-O-O. White\'s king goes to the queenside, where Black is about to push pawns.',
          marks: ['c1']
        },
        22: {
          title: 'The pawn storm starts',
          text: '11...b5. Black pushes toward White\'s king.',
          arrows: [['b5', 'b4', 'green']]
        },
        23: {
          title: 'A safety move',
          text: "12.Kb1. The king steps off the c-file, where Black's queen and rook can later become dangerous.",
          arrows: [['c1', 'b1', 'green']]
        },
        24: {
          title: 'Kick the knight',
          text: '12...b4. The pawn attacks the c3-knight. 13.Nxd5? fails here, so the knight has to find another square.',
          arrows: [['b4', 'c3', 'red']]
        },
        25: {
          title: 'To the edge',
          text: '13.Na4. The knight goes to the rim, where nothing defends it.',
          marks: ['a4']
        },
        26: {
          title: 'Hit the loose knight',
          text: "13...Qa5. The queen attacks the a4-knight, and White will defend it with 14.b3. Black has real queenside play, but the engine still gives White a slight edge.",
          arrows: [['a5', 'a4', 'red']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'Against 9.Bd3, never 9...cxd4?',
      body:
        "After 7...O-O 8.Nf3 c5, White can also play the natural 9.Bd3, aiming at h7. If Black answers 9...cxd4?, White sacrifices with **10.Bxh7+!**: after 10...Kxh7 11.Ng5+, the f4-pawn can recapture on g5, so taking the knight with ...Qxg5 costs Black the queen. White gets a strong attack and is clearly better, though nothing is won by force. Declining with 10...Kh8 is no safer. The right answer is **9...f6!**, hitting the head of the chain before the sacrifice works; then the position is close to level. Module 8.1 teaches this sacrifice, the Greek Gift, in full."
    },
    {
      kind: 'walkthrough',
      title: '7.Nb5: the knight hits c7',
      intro: 'A sharper seventh move for White. It is called the Alapin Variation (not to be mixed up with the Alapin Gambit, 3.Be3).',
      moves: NB5,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'Another seventh move',
          text: '6...Qxe7. Instead of 7.f4, White can jump with the knight.',
          arrows: [['c3', 'b5', 'blue']]
        },
        13: {
          title: 'The knight jumps',
          text: '7.Nb5. The threat is Nxc7+, forking Black\'s king and the a8-rook. Right now nothing guards c7. Emanuel Lasker played this move several times.',
          arrows: [['b5', 'c7', 'red'], ['c7', 'a8', 'red'], ['c7', 'e8', 'red']],
          marks: ['c7']
        },
        14: {
          title: 'Open the queen\'s line',
          text: '7...Nb6. The knight leaves d7, so now the e7-queen guards c7.',
          arrows: [['e7', 'c7', 'green']]
        },
        15: {
          title: 'A pawn for d4',
          text: '8.c3. With the knight gone from c3, the c-pawn can support d4.',
          arrows: [['c3', 'd4', 'green']]
        },
        16: {
          title: 'Kick the knight',
          text: '8...a6. The pawn chases the knight away. 9.Nxc7+? Qxc7 would just give up the knight for a pawn.',
          arrows: [['a6', 'b5', 'red']]
        },
        17: {
          title: 'The knight retreats',
          text: '9.Na3. The knight steps back. It will come back into play via c2.',
          arrows: [['a3', 'c2', 'blue']]
        },
        18: {
          title: 'Hit the base',
          text: '9...c5. The usual break.',
          arrows: [['c5', 'd4', 'red']]
        },
        19: {
          title: 'The knight guards d4',
          text: '10.Nc2. Now d4 is guarded by the c3-pawn, the c2-knight and the queen.',
          arrows: [['c2', 'd4', 'green'], ['c3', 'd4', 'green']]
        },
        20: {
          title: 'A level position',
          text: '10...Nc6. Black develops and keeps up the pressure on d4. The engine calls the position level.',
          arrows: [['c6', 'd4', 'red']]
        }
      }
    }
  ],
  takeaway:
    '6.Bxe7 Qxe7 7.f4 is the main Classical: White trades Black\'s good bishop and props up e5. Black castles and plays ...c5 (with ...c4 or ...a6 later), or starts with 7...a6. Against 9.Bd3, play 9...f6!, not 9...cxd4?.',
  lookAhead:
    "Module 6.5 shows White's sharpest sixth move: 6.h4, the Alekhine–Chatard Attack, where White offers a pawn instead of trading on e7.",
  drills: [
    {
      title: 'The main line as Black',
      prompt: "You're Black. White has played 7.f4. Get your king safe, hit the base of the chain, and add a knight to the attack on d4.",
      moves: `${CLASSICAL_MAIN} O-O Nf3 c5 Qd2 Nc6`,
      start: 13,
      side: 'black',
      hints: ['Castle first.', 'Then the c-pawn goes two squares, and the b8-knight joins in.'],
      success: '7...O-O, 8...c5 and 9...Nc6. Next you choose between ...c4 and ...a6.'
    },
    {
      title: 'Stop the knight jump',
      prompt: "You're Black. White has played 7.Nb5, threatening Nxc7+. Defend c7, chase the knight, hit d4 and develop.",
      moves: NB5,
      start: 13,
      side: 'black',
      hints: ['Move the d7-knight so your queen can see c7.', 'Then kick the knight with the a-pawn, and play the usual French break.'],
      success: '7...Nb6, 8...a6, 9...c5 and 10...Nc6. A level position.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does White play 6.Bxe7?',
      moves: CLASSICAL_BG5,
      orientation: 'white',
      choices: [
        { text: "To trade off Black's good dark-squared bishop", correct: true, why: "Right. Black's pawns on d5 and e6 are on light squares, so the dark-squared bishop was Black's good one. The c8-bishop stays." },
        { text: 'To win a pawn', why: 'It is an even trade: bishop for bishop, after 6...Qxe7.' },
        { text: "To ruin Black's pawns", why: "Black takes back with the queen, so Black's pawns are untouched." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just played 9.Bd3. What is the best answer?',
      moves: BD3,
      orientation: 'black',
      choices: [
        { text: '9...f6', correct: true, why: 'Right. Black hits the head of the chain before the sacrifice on h7 can work. The engine calls it close to level.' },
        { text: '9...cxd4', why: 'This allows 10.Bxh7+! Kxh7 11.Ng5+, and White gets a strong attack (Module 8.1).' },
        { text: '9...Nc6', why: 'Natural, but 10.Bxh7+! works here too, and even better for White.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 7.Nb5 threaten?',
      moves: `${CLASSICAL_BG5} Bxe7 Qxe7 Nb5`,
      orientation: 'black',
      choices: [
        { text: 'Nxc7+, forking the king and the a8-rook', correct: true, why: 'Right. The d7-knight blocks the queen from c7, so nothing guards it. 7...Nb6 opens the queen\'s line.' },
        { text: 'Nd6+, winning the queen', why: 'The d6-square is guarded by the c7-pawn and the e7-queen, so Nd6+ just loses the knight.' },
        { text: 'Nothing: it is just a developing move', why: 'The knight is already developed. From b5 it threatens the fork on c7.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After the Stahlberg 10...c4, what is Black\'s plan?',
      moves: MAIN,
      orientation: 'black',
      choices: [
        { text: "Push ...b5 and ...b4 against White's king, even giving up the b-pawn", correct: true, why: "Right. White's king is on c1, so opening the b-file brings Black's rooks into the attack." },
        { text: 'Attack on the kingside with ...f6 and ...g5', why: "Black's king is on the kingside. With opposite-side castling, Black attacks on the other wing." },
        { text: 'Win the d4-pawn', why: 'After ...c4, the c-pawn no longer attacks d4. Black plays for space and the b-file instead.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'What is the main idea of 7...a6 in the Classical main line?',
      moves: `${CLASSICAL_MAIN} a6`,
      orientation: 'black',
      choices: [
        { text: "It stops Nb5 and prepares ...b5", correct: true, why: 'Right. The knight can no longer jump to b5 to hit c7, and the b-pawn can advance with support.' },
        { text: 'It prepares long castling', why: 'Black usually keeps the king in the center for a while or castles short. The move is about b5.' },
        { text: 'It attacks White\'s e5-pawn', why: 'The a-pawn does not touch e5. Black hits e5 with ...f6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9.Bd3 cxd4? 10.Bxh7+ Kxh7 11.Ng5+, why is White\'s attack so strong here?',
      moves: `${BD3} cxd4 Bxh7+ Kxh7 Ng5+`,
      orientation: 'white',
      choices: [
        { text: "The f4-pawn can recapture on g5, and Black's dark-squared bishop is gone", correct: true, why: 'Right. Black has no bishop to take on g5, and ...Qxg5 is met by fxg5. The checklist for the sacrifice is in Module 8.1.' },
        { text: "Black's king has no squares at all", why: 'The king has four squares (g8, h8, g6 and h6). The point is that Black cannot easily remove the g5-knight.' },
        { text: 'It wins Black\'s queen by force', why: 'Black can give up the queen with ...Qxg5 to limit the damage. White is clearly better, but nothing is won by force.' }
      ]
    }
  ],
  key: { name: 'Classical main line: 7.f4', moves: CLASSICAL_MAIN, orientation: 'black' },
  terms: [
    { term: 'Good bishop', meaning: 'A bishop whose own pawns stand on the other color, so they do not block it. In the French, Black\'s dark-squared bishop.' },
    { term: 'Stahlberg Variation', meaning: 'The Classical main line with 10...c4: Black closes the queenside and attacks with ...b5–b4.' },
    { term: 'Greek Gift', meaning: 'A bishop sacrifice on h7 (Bxh7+), usually followed by Ng5+ and a queen move to the h-file.' },
    { term: 'Alapin Variation', meaning: '7.Nb5 in the Classical main line: the knight aims at c7 and d6.' }
  ]
})
