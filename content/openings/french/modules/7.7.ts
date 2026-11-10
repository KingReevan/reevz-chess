import { defineModule } from '../../../types'
import { WINAWER } from '../lines'

/** win-5bd2: 5.Bd2 Ne7 6.Nb5 Bxd2+ 7.Qxd2 O-O 8.c3 b6 9.f4 Ba6 */
const BD2 = `${WINAWER} e5 c5 Bd2 Ne7 Nb5 Bxd2+ Qxd2 O-O c3 b6 f4 Ba6`
/** model-alekhine-nimzowitsch-1930 (San Remo 1930, 1-0), moves 10-16 */
const SPACE = `${BD2} Nf3 Qd7 a4 Nbc6 b4 cxb4 cxb4 Bb7 Nd6 f5 a5 Nc8 Nxb7 Qxb7`
/** the same game, moves 17-26: building Alekhine's gun */
const GUN = `${SPACE} a6 Qf7 Bb5 N8e7 O-O h6 Rfc1 Rfc8 Rc2 Qe8 Rac1 Rab8 Qe3 Rc7 Rc3 Qd7 R1c2 Kf8 Qc1 Rbc8`
/** the gun position after 26.Qc1 */
const GUN_POSITION = GUN.split(' ').slice(0, 51).join(' ')

export default defineModule({
  id: '7.7',
  title: "5.Bd2 and Alekhine's gun",
  minutes: 12,
  level: 3,
  goals: [
    'Know the idea of 5.Bd2 and 6.Nb5: trade the dark-squared bishops',
    'See why a knight on d6 is so strong once that bishop is gone',
    "Recognize Alekhine's gun: a queen behind two rooks on one file"
  ],
  intro:
    "Against 4...c5, White doesn't have to play 5.a3. With 5.Bd2, White breaks the pin and plans to trade off Black's dark-squared bishop on White's own terms. This is how Alekhine beat Nimzowitsch at San Remo in 1930, in a game famous for a new piece formation: Alekhine's gun.",
  sections: [
    {
      kind: 'walkthrough',
      title: '5.Bd2: trading the dark-squared bishops',
      intro: 'Watch the d6-square. Once the bishops are traded, no Black bishop can ever guard it.',
      moves: BD2,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'The usual position',
          text: '4...c5. Black hits d4. The c3-knight is still pinned.',
          arrows: [['b4', 'c3', 'red'], ['c5', 'd4', 'red']]
        },
        9: {
          title: 'Break the pin',
          text: '5.Bd2. The bishop steps between the knight and the king, so the knight is free to move again.',
          arrows: [['d2', 'c3', 'green']]
        },
        10: {
          title: 'Develop',
          text: '5...Ne7. The e5-pawn covers f6, so the knight goes to e7, as usual.',
          arrows: [['g8', 'e7', 'green']]
        },
        11: {
          title: 'The knight jumps',
          text: "6.Nb5. The knight leaves c3, so now White's d2-bishop and Black's b4-bishop face each other. The knight also eyes d6 and c7.",
          arrows: [['d2', 'b4', 'red'], ['b5', 'd6', 'blue'], ['b5', 'c7', 'blue']]
        },
        12: {
          title: 'Bishops off',
          text: '6...Bxd2+. Black trades the bishops.',
          arrows: [['b4', 'd2', 'red']]
        },
        13: {
          title: 'Take back',
          text: "7.Qxd2. Now Black has no dark-squared bishop, and d6 is a hole: no Black pawn can ever attack it.",
          marks: ['d6']
        },
        14: {
          title: 'Black castles',
          text: '7...O-O. The king gets safe.',
          arrows: [['e8', 'g8', 'green']]
        },
        15: {
          title: 'Support d4',
          text: '8.c3. The pawn supports d4, so after ...cxd4 White can take back with a pawn.',
          arrows: [['c3', 'd4', 'green']]
        },
        16: {
          title: 'Preparing ...Ba6',
          text: '8...b6. The same idea as in Module 7.5: clear b7 so the problem bishop can go to a6. (The engine prefers to take on d4 first with 8...cxd4.)',
          arrows: [['c8', 'a6', 'blue']]
        },
        17: {
          title: 'Hold e5',
          text: '9.f4. The f-pawn supports e5, so a later ...f6 is less effective.',
          arrows: [['f4', 'e5', 'green']]
        },
        18: {
          title: 'The bishop comes out',
          text: "9...Ba6. The bishop attacks the b5-knight. Once the knight moves, it will also face White's f1-bishop. White is slightly better.",
          arrows: [['a6', 'b5', 'red'], ['a6', 'f1', 'yellow']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Alekhine vs Nimzowitsch: space and a knight on d6',
      intro: 'San Remo 1930. The opening was the line above. Watch White grab queenside space and plant a knight on d6.',
      moves: SPACE,
      start: 18,
      orientation: 'white',
      steps: {
        18: {
          title: 'The game position',
          text: '9...Ba6. The position from the first walkthrough.',
          arrows: [['a6', 'b5', 'red']]
        },
        19: {
          title: 'Develop',
          text: '10.Nf3. The knight guards d4 and e5.',
          arrows: [['f3', 'd4', 'green'], ['f3', 'e5', 'green']]
        },
        20: {
          title: 'Pressure on b5',
          text: '10...Qd7. The queen joins the a6-bishop against the b5-knight.',
          arrows: [['d7', 'b5', 'red'], ['a6', 'b5', 'red']]
        },
        21: {
          title: 'A pawn guard',
          text: '11.a4. Now a pawn defends the knight on b5.',
          arrows: [['a4', 'b5', 'green']]
        },
        22: {
          title: 'The other knight',
          text: '11...Nbc6. Black develops and adds pressure on d4.',
          arrows: [['c6', 'd4', 'red']]
        },
        23: {
          title: 'Queenside space',
          text: '12.b4. White attacks c5 and grabs space on the queenside.',
          arrows: [['b4', 'c5', 'red']]
        },
        24: {
          title: 'Black takes',
          text: '12...cxb4.',
          arrows: [['c5', 'b4', 'red']]
        },
        25: {
          title: 'The c-file opens',
          text: '13.cxb4. Now there are no pawns on the c-file at all: it is an open file. Remember it.',
          arrows: [['c1', 'c8', 'blue']]
        },
        26: {
          title: 'The bishop steps back',
          text: '13...Bb7. The bishop retreats to b7.',
          arrows: [['a6', 'b7', 'blue']]
        },
        27: {
          title: 'The knight lands',
          text: "14.Nd6. The knight sits on d6, protected by e5. No Black pawn can attack it, and Black has no dark-squared bishop to trade it. It hits b7 and f7.",
          arrows: [['d6', 'b7', 'red'], ['d6', 'f7', 'red'], ['e5', 'd6', 'green']],
          marks: ['d6']
        },
        28: {
          title: 'A serious mistake',
          text: "14...f5. The engine calls this a serious mistake. 14...Nf5! was the move: the knight attacks d6 and can trade off White's best piece. Now Black's own pawn sits on f5.",
          arrows: [['e7', 'f5', 'blue']],
          marks: ['f5'],
          ann: '?'
        },
        29: {
          title: 'More space',
          text: '15.a5. White keeps pushing. (The engine says 15.Qc3, taking the open c-file at once, was even stronger.)',
          arrows: [['a5', 'b6', 'red']]
        },
        30: {
          title: 'Challenging d6',
          text: '15...Nc8. The e7-knight goes back to c8 to attack d6.',
          arrows: [['c8', 'd6', 'red']]
        },
        31: {
          title: 'Knight for bishop',
          text: '16.Nxb7. White trades the knight for Black\'s bishop.',
          arrows: [['d6', 'b7', 'red']]
        },
        32: {
          title: 'Black takes back',
          text: '16...Qxb7. Now White plays 17.a6!, a strong move that attacks the queen, controls b7 and cramps Black for the rest of the game.',
          arrows: [['a5', 'a6', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "Building Alekhine's gun",
      intro: 'After 17.a6 Qf7 18.Bb5 N8e7 19.O-O h6, White is winning. Now watch where the queen and rooks go.',
      moves: GUN,
      start: 38,
      orientation: 'white',
      steps: {
        38: {
          title: 'White is winning',
          text: "19...h6. The a6-pawn cramps Black's queenside, and the b5-bishop hits the c6-knight. The open c-file is waiting.",
          arrows: [['b5', 'c6', 'red'], ['c1', 'c8', 'blue']]
        },
        39: {
          title: 'Rook to the open file',
          text: '20.Rfc1. The first rook takes the c-file.',
          arrows: [['f1', 'c1', 'green']]
        },
        40: {
          title: 'Black contests',
          text: '20...Rfc8. Black puts a rook on the file too.',
          arrows: [['f8', 'c8', 'blue']]
        },
        41: {
          title: 'Rook up the file',
          text: '21.Rc2. The rook steps up to make room behind it.',
          arrows: [['c1', 'c2', 'green']]
        },
        42: {
          title: 'Black waits',
          text: '21...Qe8. Black has few useful moves.',
          arrows: [['f7', 'e8', 'blue']]
        },
        43: {
          title: 'Two rooks',
          text: '22.Rac1. Now both White rooks are on the c-file: a battery.',
          arrows: [['a1', 'c1', 'green']]
        },
        44: {
          title: 'The other rook',
          text: '22...Rab8. Black brings the a8-rook to b8.',
          arrows: [['a8', 'b8', 'blue']]
        },
        45: {
          title: 'The queen on its way',
          text: '23.Qe3. The queen heads for the c-file.',
          arrows: [['e3', 'c1', 'blue']]
        },
        46: {
          title: 'Defending c6',
          text: '23...Rc7. A Black rook guards the c6-knight from behind.',
          arrows: [['c7', 'c6', 'green']]
        },
        47: {
          title: 'The front rook',
          text: '24.Rc3. One rook moves up to c3, at the front.',
          arrows: [['c3', 'c6', 'red']]
        },
        48: {
          title: 'Another guard',
          text: '24...Qd7. The queen also guards c6.',
          arrows: [['d7', 'c6', 'green']]
        },
        49: {
          title: 'Rooks on c3 and c2',
          text: '25.R1c2. The second rook moves to c2. Now c1 is free for the queen.',
          arrows: [['c1', 'c2', 'green']]
        },
        50: {
          title: 'The king steps over',
          text: '25...Kf8. Black has nothing better than waiting.',
          arrows: [['g8', 'f8', 'blue']]
        },
        51: {
          title: "Alekhine's gun",
          text: "26.Qc1. Rook on c3 at the front, rook on c2 behind it, and the queen on c1 at the back. A queen behind two rooks on one file: this formation is now called Alekhine's gun. All three aim at c6 and the c-file.",
          arrows: [['c1', 'c6', 'red']],
          marks: ['c3', 'c2', 'c1']
        },
        52: {
          title: 'Black can only defend',
          text: "26...Rbc8. Black lines up too, but only to defend. Black's pieces are tied to the c6-knight, and Black has almost no useful moves left.",
          marks: ['c6']
        }
      }
    },
    {
      kind: 'history',
      title: 'How it ended',
      body:
        "The game went 27.Ba4 b5 28.Bxb5 Ke8 29.Ba4 Kd8 30.h4 h5 31.Kh2 g6 32.g3, and the game ended 1-0. White simply made small, useful moves while Black's pieces stayed tied to c6. The name \"Alekhine's gun\" comes from this game."
    },
    {
      kind: 'tip',
      title: 'What to take from this game',
      body:
        "**For White:** with 5.Bd2 and 6.Nb5 you trade Black's dark-squared bishop. After that, a knight on d6 can't be chased by a pawn or traded by a bishop. Open a file and pile up on it.\n\n**For Black:** when a White knight lands on d6, challenge it at once with a knight (14...Nf5 was the move). Don't let White take the open c-file for free."
    }
  ],
  takeaway:
    "5.Bd2 breaks the pin, and 6.Nb5 trades Black's dark-squared bishop, leaving d6 as a hole for White's knight. In Alekhine vs Nimzowitsch, White opened the c-file and built Alekhine's gun: a queen behind two rooks on one file.",
  lookAhead: "Module 7.8 covers White's other fourth moves against the Winawer: 4.exd5, 4.a3, 4.Ne2, 4.Bd2 and 4.Qg4.",
  drills: [
    {
      title: 'Play 5.Bd2 as White',
      prompt: "You're White. Against 4...c5, break the pin with your bishop, jump to b5 with the knight, and take back on d2.",
      moves: BD2.split(' ').slice(0, 13).join(' '),
      start: 8,
      side: 'white',
      hints: ['Your first move puts a piece between the knight and the king.', 'Then the knight jumps to b5. After ...Bxd2+, take back with the queen.'],
      success: '5.Bd2, 6.Nb5 and 7.Qxd2. Black has lost the dark-squared bishop, and d6 is a hole.'
    },
    {
      title: "Black's set-up against 5.Bd2",
      prompt: "You're Black. White has played 5.Bd2. Develop the knight, trade bishops when the knight jumps to b5, and castle.",
      moves: BD2.split(' ').slice(0, 14).join(' '),
      start: 9,
      side: 'black',
      hints: ['The g8-knight goes to e7.', 'After 6.Nb5, take on d2 with check, then castle.'],
      success: '5...Ne7, 6...Bxd2+ and 7...O-O. Next, the engine likes 8...cxd4.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 5.Bd2 do?',
      moves: `${WINAWER} e5 c5 Bd2`,
      orientation: 'white',
      choices: [
        { text: 'It breaks the pin: the bishop stands between the c3-knight and the king', correct: true, why: 'Right. The knight is free to move, and 6.Nb5 comes next.' },
        { text: 'It attacks the c5-pawn', why: 'A bishop on d2 does not touch c5. Its job is to block the pin.' },
        { text: 'It prepares to castle queenside', why: 'White may castle later, but the point of Bd2 is the pin on c3.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why is a White knight on d6 so strong in this line?',
      moves: SPACE.split(' ').slice(0, 27).join(' '),
      orientation: 'white',
      choices: [
        { text: 'No Black pawn can attack it, and Black has no dark-squared bishop to trade it', correct: true, why: 'Right. Only Black knights, rooks or the queen can challenge it, and the e5-pawn protects it.' },
        { text: 'It gives check', why: 'A knight on d6 does not check the king on g8. It is strong because it can\'t be chased away.' },
        { text: 'It is attacking the queen', why: 'From d6 the knight hits b7 and f7, not the queen on d7. Its strength is that it is safe there.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move after 14.Nd6. Which move is best?',
      moves: SPACE.split(' ').slice(0, 27).join(' '),
      orientation: 'black',
      choices: [
        { text: '14...Nf5', correct: true, why: 'Right. The knight attacks d6, so Black can trade off White\'s strongest piece.' },
        { text: '14...f5', why: 'This is what Nimzowitsch played. The engine calls it a serious mistake: the pawn takes f5 away from Black\'s own knight.' },
        { text: '14...Ba6', why: 'Nothing guards a6, so 15.Bxa6 wins the bishop. Challenge the knight with ...Nf5 instead.' }
      ]
    },
    {
      type: 'name',
      prompt: "White's queen is on c1, behind rooks on c2 and c3. What is this formation called?",
      moves: GUN_POSITION,
      orientation: 'white',
      choices: [
        { text: "Alekhine's gun", correct: true, why: 'Right. A queen behind two rooks on one file, named after this very game.' },
        { text: 'A fianchetto', why: 'A fianchetto is a bishop on b2, g2, b7 or g7. This is a queen behind two rooks.' },
        { text: 'A Greek Gift', why: 'The Greek Gift is the Bxh7+ sacrifice (Module 8.1). This is a queen behind two rooks on a file.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: "In Alekhine's gun after 26.Qc1, how are White's pieces lined up on the c-file, from front to back?",
      moves: GUN_POSITION,
      orientation: 'white',
      choices: [
        { text: 'Rook on c3, rook on c2, queen on c1', correct: true, why: 'Right. The two rooks lead and the queen pushes from behind.' },
        { text: 'Queen on c3, rook on c2, rook on c1', why: 'In Alekhine\'s gun the queen is at the back, behind both rooks.' },
        { text: 'Rook on c3, queen on c2, rook on c1', why: 'The queen is behind both rooks, on c1. The rooks are on c3 and c2.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Why does White play 6.Nb5 after 5.Bd2 Ne7?',
      moves: BD2.split(' ').slice(0, 11).join(' '),
      orientation: 'white',
      choices: [
        { text: "To clear c3 so the bishops face each other, and trade off Black's dark-squared bishop", correct: true, why: 'Right. After 6...Bxd2+ 7.Qxd2, no Black bishop can ever guard d6, and the knight can use it.' },
        { text: 'To win the c7-pawn at once', why: 'Black has played ...c5, so there is no pawn on c7. The knight eyes d6 and c7 as squares, and the move clears the way for the bishop trade.' },
        { text: 'To attack the a7-pawn', why: 'A knight on b5 does attack a7, but it is defended by the a8-rook. The point is the bishop trade and the d6-square.' }
      ]
    }
  ],
  key: { name: "Alekhine's gun: 26.Qc1", moves: GUN_POSITION, orientation: 'white' },
  terms: [
    { term: "Alekhine's gun", meaning: 'A queen placed behind two rooks on the same file, so all three press down it together.' },
    { term: 'Battery', meaning: 'Two or more pieces lined up on one file or diagonal, so they attack together, like rooks on c2 and c1.' },
    { term: 'Hole', meaning: 'A square that no enemy pawn can ever attack, like d6 here. A knight on a hole is hard to remove.' },
    { term: 'Open file', meaning: 'A file with no pawns of either color, like the c-file after 13.cxb4.' }
  ]
})
