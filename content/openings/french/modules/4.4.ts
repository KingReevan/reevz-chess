import { defineModule } from '../../../types'
import { TARRASCH } from '../lines'

/** tar-exd5-bb5: 4.exd5 exd5 5.Bb5+ Bd7 6.Qe2+ Qe7 7.Bxd7+ Nxd7 8.dxc5 Nxc5 9.Nb3 Qxe2+ 10.Nxe2 Nxb3 11.axb3 */
const BB5 = `${TARRASCH} c5 exd5 exd5 Bb5+ Bd7 Qe2+ Qe7 Bxd7+ Nxd7 dxc5 Nxc5 Nb3 Qxe2+ Nxe2 Nxb3 axb3`
/** model-karpov-korchnoi-1978-g16, opening moves only: 11...Bc5 ... 16.c3 f6 */
const KARPOV_KORCHNOI = `${BB5} Bc5 Bd2 Ne7 Nf4 O-O O-O Rfd8 Nd3 Bb6 c3 f6`
/** 6...Be7 keeps the queens on; 7.dxc5 Nf6 (engine-checked: level) */
const KEEP_QUEENS = `${TARRASCH} c5 exd5 exd5 Bb5+ Bd7 Qe2+ Be7 dxc5 Nf6`

export default defineModule({
  id: '4.4',
  title: 'Trading queens with 5.Bb5+',
  minutes: 11,
  level: 2,
  goals: [
    'Play 5.Bb5+ Bd7 6.Qe2+ and the queen trade that follows',
    'Understand why an endgame is good news for the side facing an isolated pawn',
    "Follow the opening of Karpov–Korchnoi, World Championship 1978, game 16"
  ],
  intro:
    "Module 4.3 showed that an isolated pawn gives Black active pieces in the middlegame. So what if White simply trades the queens early? With 5.Bb5+ and 6.Qe2+, White heads for an endgame in which Black's d5-pawn is a weakness and little else. Anatoly Karpov chose this plan against Viktor Korchnoi in their 1978 World Championship match.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Checks, trades and an endgame',
      intro: 'Count the pieces as they come off. By move 11 the queens and the light-squared bishops are gone.',
      moves: BB5,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'The pawn recapture',
          text: '4...exd5. Black takes back with the e-pawn, so the e-file is open. White soon uses it.',
          arrows: [['e1', 'e8', 'blue']]
        },
        9: {
          title: 'A check on b5',
          text: '5.Bb5+. The bishop checks before Black can develop. White is happy to trade this bishop.',
          arrows: [['b5', 'e8', 'red']]
        },
        10: {
          title: 'Block with the bishop',
          text: '5...Bd7. Black blocks with the c8-bishop and offers a trade of light-squared bishops.',
          arrows: [['c8', 'd7', 'green']]
        },
        11: {
          title: 'A check on the e-file',
          text: '6.Qe2+. The queen checks down the open e-file. White wants Black to block with the queen.',
          arrows: [['e2', 'e8', 'red']]
        },
        12: {
          title: 'Queen against queen',
          text: '6...Qe7. Black blocks with the queen, so the queens face each other on the e-file. Black could also block with 6...Be7 and keep the queens on (see the last walkthrough).',
          arrows: [['e2', 'e7', 'yellow']]
        },
        13: {
          title: 'Bishops off',
          text: '7.Bxd7+. White trades the light-squared bishops, with check.',
          arrows: [['d7', 'e8', 'red']]
        },
        14: {
          title: 'The knight takes back',
          text: '7...Nxd7. The b8-knight recaptures and develops.',
          arrows: [['b8', 'd7', 'green']]
        },
        15: {
          title: 'Isolate the pawn',
          text: '8.dxc5. White takes on c5. Black has no c-pawn and no e-pawn left, so the d5-pawn is isolated.',
          marks: ['d5']
        },
        16: {
          title: 'Material is level',
          text: '8...Nxc5. The knight takes back on c5. Material is even.',
          arrows: [['d7', 'c5', 'green']]
        },
        17: {
          title: 'Hit the knight',
          text: '9.Nb3. The d2-knight attacks the c5-knight and frees the c1-bishop.',
          arrows: [['b3', 'c5', 'red']]
        },
        18: {
          title: 'Queens off',
          text: '9...Qxe2+. Black trades queens, with check.',
          arrows: [['e2', 'e1', 'red']]
        },
        19: {
          title: 'Take back with the knight',
          text: '10.Nxe2. The g1-knight recaptures and develops at the same time.',
          arrows: [['g1', 'e2', 'green']]
        },
        20: {
          title: 'Knights off',
          text: '10...Nxb3. Black trades another pair of pieces.',
          arrows: [['c5', 'b3', 'red']]
        },
        21: {
          title: 'An endgame against the IQP',
          text: "11.axb3. White's b-pawns are doubled, but the a1-rook now looks down the half-open a-file at a7. White has a small edge: the d5-pawn can't be defended by a pawn, and Black has no queen left to make threats with.",
          arrows: [['a1', 'a7', 'blue']],
          marks: ['d5']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why trade queens?',
      body:
        "In Module 4.3 the isolated pawn gave Black open lines and active pieces, with chances against White's king. Every trade takes some of that away. With the queens gone, Black has no attack, and the d5-pawn is just a pawn that only pieces can defend. In an endgame White's king can also come to the center and help attack it.\n\nThat does not make Black lost. The engine gives White only a small edge, and Black can hold with active pieces: the bishop to c5, the knight to e7, castle, and rooks to the d- and e-files.\n\n**Black's other way:** instead of 6...Qe7, Black can block the check with **6...Be7**. Then the queens stay on, and after 7.dxc5 Nf6 Black has a normal isolated-pawn middlegame with active pieces. The engine likes this a little more for Black than the queen trade."
    },
    {
      kind: 'walkthrough',
      title: 'Karpov–Korchnoi, Baguio 1978, game 16',
      intro: 'The opening moves of the game, from the position after 11.axb3. Watch the fight around d5.',
      moves: KARPOV_KORCHNOI,
      start: 21,
      orientation: 'white',
      steps: {
        21: {
          title: 'The game position',
          text: '11.axb3. Karpov and Korchnoi reached this endgame in game 16 of their World Championship match.',
          marks: ['d5']
        },
        22: {
          title: 'An active bishop',
          text: '11...Bc5. Korchnoi develops the bishop to an active square, aiming at f2.',
          arrows: [['c5', 'f2', 'blue']]
        },
        23: {
          title: 'Quiet development',
          text: '12.Bd2. Karpov develops the last minor piece. With the queens off, there is no rush to castle.',
          arrows: [['c1', 'd2', 'green']]
        },
        24: {
          title: 'Guarding d5',
          text: '12...Ne7. The knight develops and guards the d5-pawn.',
          arrows: [['e7', 'd5', 'green']]
        },
        25: {
          title: 'The knight hits d5',
          text: '13.Nf4. The knight attacks d5. One attacker, one defender: the pawn is safe for now.',
          arrows: [['f4', 'd5', 'red'], ['e7', 'd5', 'green']]
        },
        26: {
          title: 'Black castles',
          text: '13...O-O. Black\'s king is safe, and the f8-rook can come to the center.',
          arrows: [['f8', 'd8', 'blue']]
        },
        27: {
          title: 'White castles',
          text: '14.O-O. Karpov castles too. Both kings are safe.',
          arrows: [['e1', 'g1', 'green']]
        },
        28: {
          title: 'A second defender',
          text: '14...Rfd8. The rook defends d5 a second time, together with the e7-knight.',
          arrows: [['d8', 'd5', 'green'], ['e7', 'd5', 'green']]
        },
        29: {
          title: 'Hit the bishop',
          text: '15.Nd3. The knight attacks the c5-bishop.',
          arrows: [['d3', 'c5', 'red']]
        },
        30: {
          title: 'Still aiming at f2',
          text: '15...Bb6. The bishop steps back and keeps its diagonal toward f2.',
          arrows: [['b6', 'f2', 'blue']]
        },
        31: {
          title: 'Hold back the d-pawn',
          text: "16.c3. The pawn covers d4 and b4, two squares that Black's pieces and the d5-pawn would like to use.",
          arrows: [['c3', 'd4', 'green'], ['c3', 'b4', 'green']]
        },
        32: {
          title: 'No entry on e5',
          text: "16...f6. The pawn takes the e5-square away from White's knight. Here the opening is over, and the position is level. The game ended in a draw.",
          arrows: [['f6', 'e5', 'green']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'history',
      title: 'Korchnoi turns to the French',
      body:
        "The 1978 World Championship match between Anatoly Karpov and Viktor Korchnoi was played in Baguio, in the Philippines. In game 16, Korchnoi played the French Defense for the first time in the match. Karpov chose 5.Bb5+ and 6.Qe2+, trading queens on move 9 to play against the isolated d-pawn. The game was drawn after 42 moves."
    },
    {
      kind: 'walkthrough',
      title: 'Keeping the queens on: 6...Be7',
      intro: "If Black doesn't want an endgame, block the check with the bishop instead of the queen.",
      moves: KEEP_QUEENS,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The same check',
          text: '6.Qe2+. White hopes for 6...Qe7 and a queen trade.',
          arrows: [['e2', 'e8', 'red']]
        },
        12: {
          title: 'Block with the bishop',
          text: '6...Be7. The bishop blocks instead. No queen trade is on offer, and Black keeps the middlegame play that comes with an isolated pawn.',
          arrows: [['f8', 'e7', 'green']],
          ann: '!'
        },
        13: {
          title: 'The pawn is isolated',
          text: "7.dxc5. White takes on c5. Black's d5-pawn is isolated, and Black is a pawn down for the moment.",
          marks: ['c5', 'd5']
        },
        14: {
          title: 'Develop first',
          text: '7...Nf6. Black develops and gets ready to castle, with the e-file open for a rook. Black is still a pawn down, but quick development makes up for it: the engine calls the position level.',
          arrows: [['g8', 'f6', 'green'], ['e8', 'g8', 'blue']]
        }
      }
    }
  ],
  takeaway:
    "5.Bb5+ and 6.Qe2+ let White trade queens and light-squared bishops early, reaching an endgame where Black's isolated d5-pawn is a target. White keeps a small edge; Black holds with active pieces, or avoids the trade with 6...Be7.",
  lookAhead:
    "Next: White's other fourth move, 4.Ngf3. Module 4.5 shows the open lines it leads to, and Nepomniachtchi's win against Ding in 2023.",
  drills: [
    {
      title: 'White: head for the endgame',
      prompt: "You're White. Black has played 3...c5. Trade on d5, then check with the bishop and the queen, trade bishops, isolate the d-pawn, hit the c5-knight and take back on b3 so your a1-rook gets a half-open file.",
      moves: BB5,
      start: 6,
      side: 'white',
      hints: [
        'After 4.exd5 exd5, check on b5, then check on the e-file with the queen.',
        'After 8...Nxc5, the d2-knight goes to b3. Take back on e2 with the g1-knight, and on b3 with the a-pawn.'
      ],
      success: '4.exd5, 5.Bb5+, 6.Qe2+, 7.Bxd7+, 8.dxc5, 9.Nb3, 10.Nxe2 and 11.axb3. Queens off, and the d5-pawn is isolated.'
    },
    {
      title: 'Black: keep the queens on',
      prompt: "You're Black. White checks with 5.Bb5+. Block with your light-squared bishop. When the queen checks on the e-file, block in a way that offers no queen trade, then develop your king's knight.",
      moves: KEEP_QUEENS,
      start: 9,
      side: 'black',
      hints: ['Block the bishop check with your c8-bishop.', 'Block the queen check with the f8-bishop, not the queen.'],
      success: '5...Bd7, 6...Be7 and 7...Nf6. The queens stay on, and Black develops quickly. Black is a pawn down for now, but the position is level.'
    }
  ],
  quiz: [
    {
      type: 'plan',
      prompt: 'Why does White play 6.Qe2+ here?',
      moves: `${TARRASCH} c5 exd5 exd5 Bb5+ Bd7 Qe2+`,
      orientation: 'white',
      choices: [
        { text: 'To trade queens and head for an endgame against the isolated pawn', correct: true, why: 'Right. If Black blocks with 6...Qe7, the queens come off soon, and d5 becomes a long-term target.' },
        { text: 'To win the pinned d7-bishop', why: 'The d7-bishop is well defended. White simply trades it with 7.Bxd7+.' },
        { text: 'To stop Black from ever castling', why: 'Black can still castle after blocking the check. The point is the queen trade.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is an isolated pawn usually weaker in an endgame than in a middlegame?',
      choices: [
        { text: 'With fewer pieces left, its owner has less active play to make up for it', correct: true, why: "Yes. The IQP's plus is piece activity. Trade the pieces, and only the weak pawn is left." },
        { text: 'In an endgame a king can never defend a pawn', why: 'Kings defend pawns all the time in endgames. The problem is that the IQP gives no more active play.' },
        { text: 'Isolated pawns cannot move in an endgame', why: 'They can move. The issue is that only pieces can defend them, and the pieces are gone.' }
      ]
    },
    {
      type: 'move',
      prompt: "You're Black. White has just checked with 6.Qe2+. Which block keeps the queens on the board?",
      moves: `${TARRASCH} c5 exd5 exd5 Bb5+ Bd7 Qe2+`,
      orientation: 'black',
      choices: [
        { text: '6...Be7', correct: true, why: "Right. Nothing is offered for trade, and Black keeps the IQP middlegame. The engine likes this a little more than 6...Qe7." },
        { text: '6...Qe7', why: 'This is the game move, but it allows the queen trade White is aiming for.' },
        { text: '6...Ne7', why: 'The knight shuts in the f8-bishop, and White wins the c5-pawn, for example 7.Ngf3 Bxb5 8.Qxb5+ Qd7 9.Qxc5. Black ends up clearly worse.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 11.axb3, which pieces have been traded?',
      moves: BB5,
      orientation: 'white',
      choices: [
        { text: 'The queens, the light-squared bishops and one pair of knights', correct: true, why: 'Yes. Each side still has two rooks, the dark-squared bishop and one knight.' },
        { text: 'Only the queens', why: 'The light-squared bishops went on move 7, and a pair of knights on moves 10 and 11.' },
        { text: 'The queens and all four knights', why: "Each side still has one knight: White's on e2 and Black's on g8." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'What does 11.axb3 give White, besides doubled b-pawns?',
      moves: BB5,
      orientation: 'white',
      choices: [
        { text: 'A half-open a-file for the a1-rook', correct: true, why: "Right. White has no a-pawn now, so the rook looks straight at Black's a7-pawn." },
        { text: 'A passed pawn on the queenside', why: 'Black still has a- and b-pawns, so no White pawn there is passed.' },
        { text: 'An open e-file', why: 'The e-file was already open, since 4...exd5. The capture on b3 makes the a-file half-open for White.' }
      ]
    },
    {
      type: 'name',
      prompt: 'In which World Championship game did Karpov play 5.Bb5+ and 6.Qe2+ against Korchnoi?',
      choices: [
        { text: 'Baguio 1978, game 16', correct: true, why: 'Yes. It was the first time in that match that Korchnoi played the French. The game was drawn.' },
        { text: 'Astana 2023, game 7', why: 'That was Nepomniachtchi–Ding, a Tarrasch with 4.Ngf3 (Module 4.5).' },
        { text: 'San Remo 1930', why: 'San Remo 1930 is where Alekhine beat Nimzowitsch in a Winawer (Module 7.7).' }
      ]
    }
  ],
  key: { name: 'Tarrasch 5.Bb5+: 6.Qe2+ Qe7', moves: `${TARRASCH} c5 exd5 exd5 Bb5+ Bd7 Qe2+ Qe7`, orientation: 'white' },
  terms: [
    { term: 'Endgame', meaning: 'The last stage of a game, when most pieces (usually the queens) have been traded. Kings become active pieces.' },
    { term: 'Doubled pawns', meaning: 'Two pawns of the same color on one file, like White\'s b2 and b3 here. They cannot protect each other.' },
    { term: 'Simplify', meaning: 'To trade pieces on purpose, usually to reach an endgame where your advantage counts more.' }
  ]
})
