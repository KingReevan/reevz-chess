import { defineModule } from '../../../types'
import { ADVANCE, ADVANCE_QB6, CLASSICAL, RUBINSTEIN } from '../lines'

/** fr-bb5-trap: 5...Bd7 6.Bb5? Nxe5! 7.Nxe5 Bxb5 8.Na3 Bc6 */
const BB5 = `${ADVANCE} Bd7 Bb5 Nxe5 Nxe5 Bxb5 Na3 Bc6`
/** adv-6a3-c4-b4: 6.a3 c4 7.b4?! cxb3 (en passant) 8.Qxb3?? Qxb3 */
const EP = `${ADVANCE_QB6} a3 c4 b4 cxb3 Qxb3 Qxb3`
/** fr-mistake-ne4: 4.e5 Ne4?! 5.Nxe4 dxe4 6.Be3 c5 7.dxc5 Nd7 8.Qg4 */
const NE4 = `${CLASSICAL} e5 Ne4 Nxe4 dxe4 Be3 c5 dxc5 Nd7 Qg4`
/** rub-6gxf6: 4...Nd7 5.Nf3 Ngf6 6.Nxf6+ gxf6?! 7.Bd3 c5 8.d5 */
const GXF6 = `${RUBINSTEIN} Nd7 Nf3 Ngf6 Nxf6+ gxf6 Bd3 c5 d5`

export default defineModule({
  id: '1.8',
  title: 'Early mistakes for both sides',
  minutes: 12,
  level: 1,
  goals: [
    'Spot a pin that is not really a pin: 6.Bb5? Nxe5!',
    'Understand en passant, and why 7.b4?! cxb3 8.Qxb3?? loses the queen',
    'Avoid two Black mistakes: 4...Ne4?! and 6...gxf6?!'
  ],
  intro:
    'Most opening games are not won by deep theory but by small mistakes in the first ten moves. This module shows four that beginners make in the French, two for White and two for Black, and what each one costs.',
  sections: [
    {
      kind: 'walkthrough',
      title: "White's mistake: 6.Bb5? isn't a pin",
      intro: 'In the Advance, Black has developed the bishop to d7 early. Watch the diagonal from b5 to e8.',
      moves: BB5,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The bishop on d7',
          text: "5...Bd7. Black develops the problem bishop. Look at the diagonal b5–c6–d7–e8: Black's knight, bishop and king all stand on it.",
          marks: ['c6', 'd7', 'e8']
        },
        11: {
          title: 'It looks like a pin',
          text: "6.Bb5. White attacks the c6-knight, hoping it is pinned. But Black's own bishop on d7 stands between the knight and the king, so the knight is free to move. And nothing defends the b5-bishop.",
          ann: '?',
          arrows: [['b5', 'c6', 'red']],
          marks: ['d7']
        },
        12: {
          title: 'Take the pawn',
          text: '6...Nxe5. The knight grabs the e5-pawn. As it leaves c6, the d7-bishop suddenly attacks the b5-bishop: a discovered attack.',
          ann: '!',
          arrows: [['d7', 'b5', 'red']]
        },
        13: {
          title: 'White takes the knight',
          text: '7.Nxe5. White takes the knight. Taking with the pawn, or 7.Bxd7+, is no better: Black stays a pawn up either way.',
          marks: ['e5']
        },
        14: {
          title: 'Black takes the bishop',
          text: '7...Bxb5. Now count: Black took a pawn and a bishop, White took a knight. Black is a clean pawn up.',
          marks: ['b5']
        },
        15: {
          title: 'The knight chases',
          text: '8.Na3. The knight attacks the b5-bishop.',
          arrows: [['a3', 'b5', 'red']]
        },
        16: {
          title: 'A pawn up',
          text: '8...Bc6. The bishop steps back to safety. Black is a pawn up and clearly better. White should have played a normal move such as 6.Be2.',
          marks: ['c6']
        }
      }
    },
    {
      kind: 'text',
      title: 'En passant in plain words',
      body:
        'A pawn that moves two squares from its starting square passes over one square. If it lands right beside an enemy pawn, that enemy pawn may capture it **as if it had moved only one square**, landing on the square it passed over. This special capture is called **en passant** (French for "in passing"). It is allowed only on the very next move; after that the chance is gone.\n\nIt is written like a normal pawn capture, sometimes with "e.p." after it: here, **7...cxb3**.'
    },
    {
      kind: 'walkthrough',
      title: "White's mistake: 7.b4?! and 8.Qxb3??",
      intro: 'In the Advance with 5...Qb6 6.a3, Black has just closed the queenside with 6...c4. Watch the b3-square.',
      moves: EP,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'White prepares b4',
          text: '6.a3. White wants to push b2–b4 next and gain space on the queenside.',
          arrows: [['b2', 'b4', 'blue']]
        },
        12: {
          title: 'Black closes the queenside',
          text: '6...c4. The pawn grabs space and covers b3 and d3. Watch out, White: b2–b4 now passes over b3, a square this pawn attacks.',
          arrows: [['c4', 'b3', 'yellow'], ['c4', 'd3', 'yellow']]
        },
        13: {
          title: 'The natural push',
          text: '7.b4. The pawn jumps two squares, from b2 to b4, and lands right beside the c4-pawn. That allows en passant. 7.Nbd2 or 7.Be2 was better.',
          ann: '?!',
          marks: ['b3']
        },
        14: {
          title: 'En passant',
          text: '7...cxb3. The c4-pawn takes the b-pawn as if it had stopped on b3. Black is already slightly better.',
          arrows: [['c4', 'b3', 'green']]
        },
        15: {
          title: 'The blunder',
          text: "8.Qxb3. White takes back with the queen. But Black's queen on b6 looks straight down the b-file at b3.",
          ann: '??',
          arrows: [['b6', 'b3', 'red']]
        },
        16: {
          title: 'The queen is lost',
          text: '8...Qxb3. Black takes the queen, and nothing can take back: the a-pawn has gone to a3, and pawns only capture forward. Black wins the queen. After 7...cxb3, White had to play 8.Bb2 and accept a slightly worse game.',
          marks: ['b3']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "Black's mistake: 4...Ne4?!",
      intro: 'In the Classical, 4.e5 attacks the f6-knight. The normal reply is 4...Nfd7. See what happens when the knight jumps forward instead.',
      moves: NE4,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'The knight is attacked',
          text: '4.e5. The pawn hits the f6-knight. Black should retreat with 4...Nfd7 and then strike with ...c5.',
          arrows: [['e5', 'f6', 'red'], ['f6', 'd7', 'green']]
        },
        8: {
          title: 'Forward instead',
          text: '4...Ne4. The knight jumps into the center. It looks active, but nothing supports it except the d5-pawn, and White can simply trade it.',
          ann: '?!',
          arrows: [['c3', 'e4', 'red']]
        },
        9: {
          title: 'White trades',
          text: '5.Nxe4. White takes the knight.',
          marks: ['e4']
        },
        10: {
          title: 'A lonely pawn',
          text: "5...dxe4. Black takes back. Black's only developed piece is gone, and the pawn on e4 is cut off from the other Black pawns, so it will be hard to defend.",
          marks: ['e4']
        },
        11: {
          title: 'White develops',
          text: '6.Be3. The bishop develops and guards d4.',
          arrows: [['e3', 'd4', 'green']]
        },
        12: {
          title: 'The usual break',
          text: '6...c5. Black hits d4, the normal French plan.',
          arrows: [['c5', 'd4', 'red']]
        },
        13: {
          title: 'White takes',
          text: '7.dxc5. White takes the pawn for now.',
          marks: ['c5']
        },
        14: {
          title: 'Black develops',
          text: '7...Nd7. The other knight comes out and attacks c5, to win the pawn back.',
          arrows: [['d7', 'c5', 'red']]
        },
        15: {
          title: 'Two targets',
          text: '8.Qg4. The queen attacks the e4-pawn, which has no defender, and the g7-pawn. White is better.',
          arrows: [['g4', 'e4', 'red'], ['g4', 'g7', 'red']],
          marks: ['e4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "Black's mistake: 6...gxf6?!",
      intro: 'In the Rubinstein, Black plays ...Nd7 first so that a second knight can take back on f6. Watch what happens if Black takes with a pawn instead.',
      moves: GXF6,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'Two knights ready',
          text: '5...Ngf6. The knight challenges the e4-knight. If White trades on f6, the d7-knight is ready to take back.',
          arrows: [['f6', 'e4', 'red'], ['d7', 'f6', 'green']]
        },
        11: {
          title: 'The trade',
          text: '6.Nxf6+. White trades knights with check.',
          arrows: [['f6', 'e8', 'red']]
        },
        12: {
          title: 'The wrong recapture',
          text: "6...gxf6. Black takes with the g-pawn. Now Black's kingside pawns are broken, so castling there will never be fully safe. The right move was 6...Nxf6.",
          ann: '?!',
          arrows: [['d7', 'f6', 'blue']],
          marks: ['f6', 'f7', 'h7']
        },
        13: {
          title: 'Aim at the king',
          text: "7.Bd3. White's bishop points at h7 and Black's kingside.",
          arrows: [['d3', 'h7', 'red']]
        },
        14: {
          title: 'The normal break',
          text: '7...c5. Black hits d4 as usual.',
          arrows: [['c5', 'd4', 'red']]
        },
        15: {
          title: 'Open the center',
          text: "8.d5. White pushes past and attacks e6, to open lines while Black's king is still in the middle. White is better.",
          arrows: [['d5', 'e6', 'red']]
        }
      }
    }
  ],
  takeaway:
    "Check whether a \"pin\" is real before you rely on it: after ...Bd7, 6.Bb5? loses a pawn to 6...Nxe5!. After ...c4, b2–b4 allows en passant, and 8.Qxb3?? loses the queen. For Black, retreat with 4...Nfd7, not 4...Ne4?!, and in the Rubinstein take back on f6 with the knight.",
  lookAhead:
    "Module 1.9 puts everything together: a map of White's third moves and the chapter that teaches each one.",
  drills: [
    {
      title: 'Punish 6.Bb5?',
      prompt: "You're Black. White has just played 6.Bb5, hoping the c6-knight is pinned. It isn't. Win a pawn.",
      moves: `${ADVANCE} Bd7 Bb5 Nxe5 Nxe5 Bxb5`,
      start: 11,
      side: 'black',
      hints: ['Your d7-bishop stands between the knight and your king, so the knight can move.', 'Take the e5-pawn with the knight. When White takes back, your d7-bishop takes on b5.'],
      success: '6...Nxe5! 7.Nxe5 Bxb5. Black is a clean pawn up.'
    },
    {
      title: 'En passant, then the queen',
      prompt: "You're Black. Your pawn is on c4. Watch for White's b-pawn, capture it the special way, and punish the recapture.",
      moves: EP,
      start: 12,
      side: 'black',
      hints: ['When the b-pawn jumps to b4, your c4-pawn can take it en passant, landing on b3.', 'If White takes on b3 with the queen, your b6-queen takes back, and nothing can recapture.'],
      success: '7...cxb3 (en passant) and 8...Qxb3. Black wins the queen.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'White has just played 6.Bb5. Why is the c6-knight not pinned to Black\'s king?',
      moves: `${ADVANCE} Bd7 Bb5`,
      orientation: 'black',
      choices: [
        { text: "Black's bishop on d7 stands between the knight and the king", correct: true, why: 'Right. A pin to the king needs the king right behind the knight. Here the d7-bishop is in the way, so the knight can move freely.' },
        { text: 'The knight is protected by the b7-pawn', why: 'Being protected does not stop a pin. The knight is free because the d7-bishop, not the king, stands behind it.' },
        { text: 'A Black pawn attacks the b5-bishop', why: 'No Black pawn attacks b5 here. What matters is the bishop on d7 standing between the knight and the king.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just played 7.b4. What is the best reply?',
      moves: `${ADVANCE_QB6} a3 c4 b4`,
      orientation: 'black',
      choices: [
        { text: '7...cxb3', correct: true, why: 'Right. The c4-pawn takes en passant, landing on b3. Black is already slightly better.' },
        { text: '7...Qxb4', why: 'The b4-pawn is defended by the a3- and c3-pawns. After 8.axb4 or 8.cxb4 Black has lost the queen for a pawn.' },
        { text: '7...Nxb4', why: 'The knight is lost: 8.axb4 or 8.cxb4. Black gets a pawn or two for a whole knight.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 7.b4 cxb3, why is 8.Qxb3 a blunder?',
      moves: `${ADVANCE_QB6} a3 c4 b4 cxb3`,
      orientation: 'white',
      choices: [
        { text: "Black's queen takes on b3, and nothing can take back", correct: true, why: 'Right. The a-pawn is on a3 and pawns only capture forward, so b3 is unguarded. 8.Bb2 was the move.' },
        { text: 'It allows Black to win a rook', why: 'Black does not win a rook. 8...Qxb3 simply wins the queen.' },
        { text: 'It walks into checkmate', why: 'There is no mate. The problem is 8...Qxb3, which wins the queen.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just traded knights with 6.Nxf6+. How should Black take back?',
      moves: `${RUBINSTEIN} Nd7 Nf3 Ngf6 Nxf6+`,
      orientation: 'black',
      choices: [
        { text: '6...Nxf6', correct: true, why: "Right. That is why Black played ...Nd7 first: the second knight takes back and Black's pawns stay healthy." },
        { text: '6...gxf6', why: "It breaks Black's kingside pawns, and White is clearly better. After 7.Bd3 c5 8.d5 White opens lines against Black's king." },
        { text: '6...Qxf6', why: 'The queen comes out early and becomes a target, for example after Bg5. White is clearly better.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'What is wrong with 4...Ne4 in the Classical?',
      moves: `${CLASSICAL} e5 Ne4`,
      orientation: 'black',
      choices: [
        { text: 'After 5.Nxe4 dxe4, Black has traded its only developed piece and has a lonely pawn on e4 that White can attack', correct: true, why: 'Right. White develops with Be3 and later hits e4 with Qg4. 4...Nfd7 is the normal move.' },
        { text: 'It loses the knight for nothing', why: "Nothing is lost at once: after 5.Nxe4 dxe4 the knights are traded. The problems are the weak e4-pawn and Black's slow development." },
        { text: "Nothing: it is Black's best move", why: 'The engine prefers 4...Nfd7 clearly. After 4...Ne4 White is better.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'When can a pawn capture en passant?',
      choices: [
        { text: 'Right after an enemy pawn moves two squares and lands beside it', correct: true, why: 'Right. It captures as if the enemy pawn had moved one square, and only on the very next move.' },
        { text: 'Any time an enemy pawn stands beside it', why: 'Only on the move right after the enemy pawn has jumped two squares. Later the chance is gone.' },
        { text: 'Only when the capture gives check', why: 'Check has nothing to do with it. The rule is about a pawn that has just moved two squares.' }
      ]
    }
  ],
  key: { name: 'Advance: 7.b4?! cxb3 en passant', moves: `${ADVANCE_QB6} a3 c4 b4 cxb3`, orientation: 'black' },
  terms: [
    { term: 'En passant', meaning: 'A pawn capture of an enemy pawn that has just moved two squares and landed beside it, taking it as if it had moved one. Allowed only on the next move.' },
    { term: 'Pin', meaning: 'An attack on a piece that cannot move without exposing a more valuable piece behind it. If that piece is the king, the pinned piece may not step off the line between them.' },
    { term: 'Discovered attack', meaning: 'An attack that appears when one piece moves out of the way of another, like the d7-bishop on b5 after ...Nxe5.' }
  ]
})
