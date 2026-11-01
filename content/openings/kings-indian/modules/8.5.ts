import { defineModule } from '../../../types'

/** model-zita-bronstein-1946, moves 1–23 (the full game is 30 moves, 0-1) */
const ZB = 'c4 e5 Nc3 Nf6 Nf3 d6 d4 Nbd7 g3 g6 Bg2 Bg7 O-O O-O b3 Re8 Bb2 c6 e4 exd4 Nxd4 Qb6 Qd2 Nc5 Rfe1 a5 Rab1 a4 Ba1 axb3 axb3 Ng4 h3 Rxa1 Rxa1 Nxf2 Re3 Nxh3+ Kh2 Nf2 Rf3 Ncxe4 Qf4 Ng4+ Kh1 f5'
/** Zita–Bronstein up to 17.h3 */
const ZB_H3 = 'c4 e5 Nc3 Nf6 Nf3 d6 d4 Nbd7 g3 g6 Bg2 Bg7 O-O O-O b3 Re8 Bb2 c6 e4 exd4 Nxd4 Qb6 Qd2 Nc5 Rfe1 a5 Rab1 a4 Ba1 axb3 axb3 Ng4 h3'
/** Zita–Bronstein up to 16...Ng4 */
const ZB_NG4 = 'c4 e5 Nc3 Nf6 Nf3 d6 d4 Nbd7 g3 g6 Bg2 Bg7 O-O O-O b3 Re8 Bb2 c6 e4 exd4 Nxd4 Qb6 Qd2 Nc5 Rfe1 a5 Rab1 a4 Ba1 axb3 axb3 Ng4'
/** model-ivanchuk-yusupov-1991, moves 1–20 (the research line) */
const IY = 'c4 e5 g3 d6 Bg2 g6 d4 Nd7 Nc3 Bg7 Nf3 Ngf6 O-O O-O Qc2 Re8 Rd1 c6 b3 Qe7 Ba3 e4 Ng5 e3 f4 Nf8 b4 Bf5 Qb3 h6 Nf3 Ng4 b5 g5 bxc6 bxc6 Ne5 gxf4 Nxc6 Qg5'
/** Ivanchuk–Yusupov up to 12...e3 */
const IY_E3 = 'c4 e5 g3 d6 Bg2 g6 d4 Nd7 Nc3 Bg7 Nf3 Ngf6 O-O O-O Qc2 Re8 Rd1 c6 b3 Qe7 Ba3 e4 Ng5 e3'

export default defineModule({
  id: '8.5',
  title: 'Fianchetto model games',
  minutes: 12,
  level: 2,
  goals: [
    'See how the g7-bishop can decide a game along the long diagonal',
    "Watch a kingside attack succeed even against White's g2-bishop",
    'Take away the ideas: open lines, and bring pieces toward the king'
  ],
  intro:
    "Module 8.1 said a kingside attack is harder against the Fianchetto. Harder, not impossible. These two famous games show what Black's pieces can do once lines open: Bronstein's g7-bishop in 1946, and Yusupov's attack in 1991. Both games began with 1.c4 e5, but they reached the same kind of position as the Fianchetto Variation.",
  sections: [
    {
      kind: 'history',
      title: 'Zita–Bronstein, Prague–Moscow match 1946',
      body:
        "David Bronstein was one of the Soviet players who showed after the war that the King's Indian is sound. This game, a Black win in 30 moves, helped create the legend of Black's dark-squared bishop in the King's Indian. White fianchettoed on g2, put the other bishop on b2, and played e2–e4. After 10...exd4 11.Nxd4 the structure looks like the Long Variation from Module 8.3."
    },
    {
      kind: 'walkthrough',
      title: "Bronstein's long diagonal",
      intro: 'Watch the g7-bishop. It barely moves, but it decides the game.',
      moves: ZB,
      start: 25,
      orientation: 'black',
      steps: {
        25: {
          title: 'Black is well placed',
          text: '13.Rfe1. The c5-knight hits e4, and the queen on b6 presses on b3. The g7-bishop waits behind the f6-knight.',
          arrows: [['c5', 'e4', 'red'], ['b6', 'b3', 'red']]
        },
        26: {
          title: 'The a-pawn marches',
          text: '13...a5. Black plans ...a4 to attack b3 and open the a-file for the rook on a8.',
          arrows: [['a5', 'a4', 'green']]
        },
        27: {
          title: 'Rook behind the pawn',
          text: '14.Rab1. White brings a rook to the b-file. Once the b2-bishop moves, the rook will guard the b3-pawn.',
          arrows: [['b1', 'b3', 'blue']]
        },
        28: {
          title: 'Attacking b3',
          text: '14...a4. The pawn hits b3, and Black hopes to open the a-file.',
          arrows: [['a4', 'b3', 'red']]
        },
        29: {
          title: 'The bishop steps back',
          text: '15.Ba1. Now the b1-rook guards b3. But the bishop on a1 will soon stand on an open file.',
          marks: ['a1']
        },
        30: {
          title: 'Opening the file',
          text: '15...axb3. Black trades the a-pawn for the b-pawn.',
          marks: ['b3']
        },
        31: {
          title: 'Rook against bishop',
          text: "16.axb3. The a-file is open. Black's rook on a8 looks straight at the bishop on a1, which the b1-rook protects.",
          arrows: [['a8', 'a1', 'red']]
        },
        32: {
          title: 'The diagonal opens',
          text: "16...Ng4. The knight jumps away, and the g7-bishop's long diagonal opens. It hits the d4-knight. Further down the same diagonal stand White's c3-knight and the bishop on a1.",
          arrows: [['g7', 'd4', 'red'], ['f6', 'g4', 'blue']],
          ann: '!'
        },
        33: {
          title: 'A natural mistake',
          text: '17.h3. White attacks the knight. It looks natural, but it is a serious mistake. 17.Red1, backing up d4 from behind the queen, would have held.',
          arrows: [['h3', 'g4', 'red']],
          ann: '?'
        },
        34: {
          title: 'Rook for bishop',
          text: '17...Rxa1. Black ignores the attack on the knight and gives up the rook for White\'s dark-squared bishop. Now the g7-bishop has no rival on the long diagonal.',
          arrows: [['a8', 'a1', 'green']],
          ann: '!'
        },
        35: {
          title: 'Weak points everywhere',
          text: '18.Rxa1. White takes back. The rook has left b1, so only the d4-knight still guards the b3-pawn. Only the queen guards d4, and the g4-knight is still attacked.',
          arrows: [['g7', 'd4', 'red'], ['d2', 'd4', 'green']],
          marks: ['g4']
        },
        36: {
          title: 'Into the king\'s camp',
          text: '18...Nxf2. The knight goes forward instead of back. If 19.Kxf2, then 19...Nxb3 hits the queen and the rook, and the b6-queen can take on d4 with check.',
          arrows: [['g4', 'f2', 'green']],
          ann: '!'
        },
        37: {
          title: 'White defends',
          text: '19.Re3. White leaves the knight alone and brings the rook to the third rank.',
          arrows: [['e1', 'e3', 'blue']]
        },
        38: {
          title: 'Another pawn, with check',
          text: '19...Nxh3+. The knight takes a second pawn and checks the king.',
          arrows: [['h3', 'g1', 'red']]
        },
        39: {
          title: 'The king steps up',
          text: '20.Kh2. The king attacks the knight on h3.',
          arrows: [['h2', 'h3', 'red']]
        },
        40: {
          title: 'Back to f2',
          text: '20...Nf2. The knight jumps back to f2, close to White\'s king. Black has given a rook for a bishop, but has won two pawns, and White\'s king is wide open.',
          marks: ['f2']
        },
        41: {
          title: 'The rook hits f2',
          text: '21.Rf3. White attacks the f2-knight with the rook.',
          arrows: [['f3', 'f2', 'red']]
        },
        42: {
          title: 'The second knight strikes',
          text: "21...Ncxe4. The other knight grabs e4 and attacks White's queen. With c5 empty, Black's queen now also aims at d4.",
          arrows: [['e4', 'd2', 'red'], ['b6', 'd4', 'red'], ['g7', 'd4', 'red']],
          ann: '!'
        },
        43: {
          title: 'The queen escapes',
          text: '22.Qf4. The queen steps out of the knight\'s attack.',
          arrows: [['d2', 'f4', 'blue']]
        },
        44: {
          title: 'Check from g4',
          text: '22...Ng4+. The f2-knight jumps to g4 with check.',
          arrows: [['g4', 'h2', 'red']]
        },
        45: {
          title: 'Into the corner',
          text: '23.Kh1. The king goes back to the corner.',
          marks: ['h1']
        },
        46: {
          title: 'Black is winning',
          text: '23...f5. The pawn guards the e4-knight. Black has two knights deep in White\'s camp, and the g7-bishop still hits d4. Bronstein won seven moves later.',
          arrows: [['f5', 'e4', 'green'], ['g7', 'd4', 'yellow']]
        }
      }
    },
    {
      kind: 'history',
      title: 'Ivanchuk–Yusupov, Candidates quarter-final, Brussels 1991',
      body:
        "This game was a rapid tie-break in the 1991 Candidates quarter-final. It began 1.c4 e5 2.g3, with a fianchetto on g2. Black won in 39 moves: Yusupov sacrificed most of his pieces, including a rook with check, to checkmate White on the kingside. Below are the first 20 moves, where the attack is built."
    },
    {
      kind: 'walkthrough',
      title: "Yusupov's pawn on e3",
      intro: "Watch Black's e-pawn. It walks all the way to e3 and cramps White's whole position.",
      moves: IY,
      start: 21,
      orientation: 'black',
      steps: {
        21: {
          title: 'A Fianchetto structure',
          text: '11.Ba3. White has a fianchetto on g2 and the bishop on a3 eyes d6. Black has the King\'s Indian set-up with ...Nd7, ...Re8 and ...Qe7.',
          arrows: [['a3', 'd6', 'red']]
        },
        22: {
          title: 'Space with tempo',
          text: '11...e4. The pawn gains space and kicks the f3-knight.',
          arrows: [['e4', 'f3', 'red']]
        },
        23: {
          title: 'e4 under fire',
          text: '12.Ng5. The knight attacks e4. With f3 empty, the g2-bishop hits e4 too, and so does the c2-queen. The pawn is attacked four times.',
          arrows: [['g5', 'e4', 'red'], ['c3', 'e4', 'red'], ['g2', 'e4', 'red'], ['c2', 'e4', 'red']]
        },
        24: {
          title: 'Forward, not back',
          text: '12...e3. Instead of defending the pawn, Black pushes it. It is the only good move for Black here. It takes d2 and f2 away from White. Taking it fails: 13.fxe3? Qxe3+ checks the king, and then the queen grabs the g5-knight.',
          arrows: [['e3', 'f2', 'yellow'], ['e3', 'd2', 'yellow']],
          ann: '!'
        },
        25: {
          title: 'White blocks',
          text: '13.f4. White keeps the f-file closed and leaves the e3-pawn alone. 13.f3 was a safer choice.',
          marks: ['e3'],
          ann: '?!'
        },
        26: {
          title: 'Freeing the bishop',
          text: '13...Nf8. The knight leaves d7, which opens the diagonal for the c8-bishop.',
          arrows: [['c8', 'f5', 'blue']]
        },
        27: {
          title: 'White on the queenside',
          text: '14.b4. White starts play on the other wing.',
          arrows: [['b4', 'b5', 'blue']]
        },
        28: {
          title: 'Develop with a threat',
          text: '14...Bf5. The bishop comes out and attacks the queen on c2.',
          arrows: [['f5', 'c2', 'red']]
        },
        29: {
          title: 'The queen moves',
          text: '15.Qb3. The queen steps away.',
          arrows: [['c2', 'b3', 'blue']]
        },
        30: {
          title: 'Kick the knight',
          text: '15...h6. The pawn chases the g5-knight away from the kingside.',
          arrows: [['h6', 'g5', 'red']]
        },
        31: {
          title: 'The knight retreats',
          text: '16.Nf3. The knight goes back to f3.',
          marks: ['f3']
        },
        32: {
          title: 'A knight near the king',
          text: "16...Ng4. The other knight jumps to g4. Together with the e3-pawn, it watches f2, right next to White's king.",
          arrows: [['g4', 'f2', 'red'], ['e3', 'f2', 'red']]
        },
        33: {
          title: 'Pushing on',
          text: '17.b5. White carries on with the queenside attack.',
          arrows: [['b5', 'c6', 'red']]
        },
        34: {
          title: 'Hit the f4-pawn',
          text: '17...g5. The pawn attacks f4. If f4 falls, the g-file is half-open for Black, pointing at White\'s king.',
          arrows: [['g5', 'f4', 'red']]
        },
        35: {
          title: 'Opening the queenside',
          text: '18.bxc6. White opens lines on the queenside.',
          marks: ['c6']
        },
        36: {
          title: 'Black takes back',
          text: '18...bxc6. Black takes back. Grabbing on f4 first would be a mistake.',
          marks: ['c6']
        },
        37: {
          title: 'A strong knight',
          text: '19.Ne5. The knight jumps to the center and attacks c6 and the g4-knight.',
          arrows: [['e5', 'c6', 'red'], ['e5', 'g4', 'red']]
        },
        38: {
          title: 'Half-open g-file',
          text: '19...gxf4. Black ignores the threats, and the g-file is now half-open for Black. The new pawn on f4 also hits g3.',
          arrows: [['f4', 'g3', 'red']]
        },
        39: {
          title: 'Material is level again',
          text: "20.Nxc6. White takes back a pawn, so material is level again, and the knight attacks Black's queen.",
          arrows: [['c6', 'e7', 'red']]
        },
        40: {
          title: 'The queen joins in',
          text: "20...Qg5. The queen moves onto the g-file and lines up against the g3-pawn, which the f4-pawn also attacks. White's king stands behind it. Black's queen, knight, bishop and the pawns on e3 and f4 all point at the kingside. Black is better, and Yusupov went on to win with a mating attack.",
          arrows: [['g5', 'g3', 'yellow'], ['f4', 'g3', 'red'], ['g4', 'f2', 'red']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'What to take from these games',
      body:
        "You don't need to remember the moves. Remember the ideas. Bronstein opened the long diagonal by moving the f6-knight, then gave up a rook to remove White's dark-squared bishop. Yusupov pushed the e-pawn to e3 to cramp White, then opened lines with ...g5 and ...gxf4. In both games Black's attack worked because lines opened and several pieces joined in."
    }
  ],
  takeaway:
    "Against the Fianchetto, Black's attack needs open lines. Bronstein opened the long diagonal for the g7-bishop; Yusupov used a pawn on e3 and the g-file. When lines open and pieces join in, even the g2-bishop can't hold.",
  lookAhead:
    'Module 8.6 leaves the Fianchetto behind and shows the Makogonov 5.h3, a modern system with e4.',
  drills: [
    {
      title: "Bronstein's combination",
      prompt: "You're Black, as Bronstein. White just attacked your g4-knight with 17.h3?. Don't retreat. Find the two-move blow.",
      moves: `${ZB_H3} Rxa1 Rxa1 Nxf2`,
      start: 33,
      side: 'black',
      hints: ['Look down the open a-file. What can your rook take?', 'After the trade on a1, move the g4-knight forward, not back.'],
      success: '17...Rxa1 removes White\'s dark-squared bishop, and 18...Nxf2 jumps into White\'s camp. 19.Kxf2 would run into 19...Nxb3 and a check on d4.'
    },
    {
      title: "Yusupov's pawn push",
      prompt: "You're Black, as Yusupov. Your e4-pawn is attacked four times. Don't defend it: find the move that cramps White.",
      moves: IY_E3,
      start: 23,
      side: 'black',
      hints: ['The pawn can move forward.', 'On e3 it takes away d2 and f2, and fxe3 runs into a queen check.'],
      success: '12...e3! If 13.fxe3, then 13...Qxe3+ and the queen also wins the g5-knight.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'In Zita–Bronstein, what did 16...Ng4 do for Black\'s g7-bishop?',
      choices: [
        { text: 'It opened the long diagonal, so the bishop hit the d4-knight', correct: true, why: 'Yes. The f6-knight was blocking the bishop. Once it moved, the bishop hit the d4-knight.' },
        { text: 'It protected the bishop from an attack', why: 'The bishop was not attacked. The knight move was about opening its line.' },
        { text: "It blocked White's queen from reaching the kingside", why: "The knight on g4 does not block the queen. The point was the long diagonal." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just played 17.h3, attacking the knight. What is Black\'s strongest move?',
      moves: ZB_H3,
      orientation: 'black',
      choices: [
        { text: '17...Rxa1', correct: true, why: 'Right. Black gives the rook for White\'s dark-squared bishop and leaves the knight en prise, because 18...Nxf2 comes next.' },
        { text: '17...Ne5', why: 'A safe retreat, and the game stays level. It misses Bronstein\'s winning combination.' },
        { text: '17...Nf6', why: 'Going back home blocks the g7-bishop again, and White is a bit better.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In Ivanchuk–Yusupov, why couldn\'t White simply take the pawn with 13.fxe3?',
      moves: IY_E3,
      orientation: 'black',
      choices: [
        { text: '13...Qxe3+ is check, and then the queen also takes the g5-knight', correct: true, why: 'Exactly. The check gains the time Black needs to win the knight.' },
        { text: 'The pawn on e3 was protected by the d6-pawn', why: 'A pawn on d6 does not protect e3. The defense is the queen check on e3.' },
        { text: 'It was illegal, because the f-pawn was pinned', why: 'The f2-pawn was not pinned. 13.fxe3 was legal, but it loses a knight.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'What do these two games have in common?',
      choices: [
        { text: "Black opened lines and brought several pieces toward White's king", correct: true, why: 'Yes. The g2-bishop is a good defender, but not against a whole army.' },
        { text: 'Black won by trading queens and winning the endgame', why: 'In both games Black won with a middlegame attack, not in an endgame.' },
        { text: "White's g2-bishop was traded off early", why: 'The g2-bishop stayed on the board in both games. Black won anyway.' }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'Black to move in Zita–Bronstein after 17...Rxa1 18.Rxa1. What is the strongest follow-up?',
      moves: `${ZB_H3} Rxa1 Rxa1`,
      orientation: 'black',
      choices: [
        { text: '18...Nxf2', correct: true, why: 'Right. The knight jumps into White\'s camp, and 19.Kxf2 runs into ...Nxb3 with more threats on d4.' },
        { text: '18...Bxd4', why: 'After 19.Qxd4 Black has only traded the bishop for a knight. The attack is over, the g4-knight is still attacked, and Black is the exchange down.' },
        { text: '18...Nd3', why: 'It looks active, but after 19.Qxd3 Qxd4 the game is only level. The real blow is on f2.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In Ivanchuk–Yusupov, what did the black pawn on e3 do to White?',
      choices: [
        { text: "It took d2 and f2 away from White's pieces and cramped White's position", correct: true, why: 'Yes. A pawn that deep splits the defender\'s position in two.' },
        { text: 'It gave check to the white king', why: 'A pawn on e3 attacks d2 and f2, not the king on g1.' },
        { text: 'It was about to promote', why: 'It never got close to promoting. Its job was to cramp White.' }
      ]
    }
  ],
  key: { name: 'Zita–Bronstein 1946: 16...Ng4! opens the long diagonal', moves: ZB_NG4, orientation: 'black' },
  terms: [
    { term: 'Exchange sacrifice', meaning: 'Giving up a rook for a bishop or knight on purpose, to get something more valuable in return.' },
    { term: 'En prise', meaning: 'A piece left where it can be captured, often on purpose as part of a combination.' },
    { term: 'Combination', meaning: 'A forcing series of moves, often with a sacrifice, that wins something.' }
  ]
})
