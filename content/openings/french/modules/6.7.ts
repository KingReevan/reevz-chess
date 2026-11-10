import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** cla-mcc: 4.Bg5 Bb4 5.e5 h6 6.Bd2 Bxc3 7.bxc3 Ne4 8.Qg4 g6 */
const MCC = `${CLASSICAL} Bg5 Bb4 e5 h6 Bd2 Bxc3 bxc3 Ne4 Qg4 g6`
/** cla-mcc-main: 9.Bd3 Nxd2 10.Kxd2 c5 11.Nf3 Nc6 */
const MAIN = `${MCC} Bd3 Nxd2 Kxd2 c5 Nf3 Nc6`
/** cla-mcc-exd5: 5.exd5 Qxd5 6.Bxf6 gxf6 7.Qd2 Qa5 8.Nge2 Nc6 */
const EXD5 = `${CLASSICAL} Bg5 Bb4 exd5 Qxd5 Bxf6 gxf6 Qd2 Qa5 Nge2 Nc6`

export default defineModule({
  id: '6.7',
  title: 'The McCutcheon 4...Bb4',
  minutes: 12,
  level: 3,
  goals: [
    'See the counter-pin: 4...Bb4 pins the defender of e4',
    'Follow the main line 5.e5 h6 6.Bd2 Bxc3 7.bxc3 Ne4 8.Qg4 g6',
    "Understand why White's king can stay in the middle, and know the quieter 5.exd5"
  ],
  intro:
    "Against 4.Bg5, Black doesn't have to break the pin with ...Be7. With 4...Bb4, Black pins White's knight in return. This is the McCutcheon Variation, sharper than 4...Be7. Both sides end up with unusual positions: White's king often stays in the middle of the board, and Black's kingside pawns get pushed.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Pin against pin',
      intro: 'Two pins on the board at once. Watch which one White breaks first, and how.',
      moves: MCC,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The Classical',
          text: '3...Nf6. The knight attacks e4 a second time.',
          arrows: [['f6', 'e4', 'red'], ['d5', 'e4', 'red']]
        },
        7: {
          title: 'White pins',
          text: '4.Bg5. The f6-knight is pinned to the queen on d8.',
          arrows: [['g5', 'f6', 'red'], ['f6', 'd8', 'yellow']]
        },
        8: {
          title: 'Black pins back',
          text: "4...Bb4. The McCutcheon. Now the c3-knight is pinned to White's king, so it can't move, and it no longer really defends e4.",
          arrows: [['b4', 'c3', 'red'], ['c3', 'e1', 'yellow']],
          marks: ['e4']
        },
        9: {
          title: 'Kick the pinned knight',
          text: '5.e5. White saves the e-pawn by pushing it, and it attacks the f6-knight.',
          arrows: [['e5', 'f6', 'red']]
        },
        10: {
          title: 'Counterattack',
          text: '5...h6. The knight is pinned, so moving it would lose the queen to Bxd8. Instead Black hits the bishop back.',
          arrows: [['h6', 'g5', 'red']]
        },
        11: {
          title: 'Retreat and unpin',
          text: '6.Bd2. The bishop steps back. On d2 it stands between the c3-knight and the king, so the pin on c3 is gone.',
          arrows: [['g5', 'd2', 'blue']],
          marks: ['d2']
        },
        12: {
          title: 'Take the knight',
          text: '6...Bxc3. Black gives up the bishop for the knight before saving the f6-knight.',
          marks: ['c3']
        },
        13: {
          title: 'Doubled pawns',
          text: '7.bxc3. White has doubled c-pawns, but keeps both bishops, and the b-file is half-open for White\'s rook.',
          marks: ['c2', 'c3']
        },
        14: {
          title: 'The knight escapes forward',
          text: '7...Ne4. The knight jumps to a central square, defended by the d5-pawn. It hits the d2-bishop.',
          arrows: [['e4', 'd2', 'red'], ['d5', 'e4', 'green']]
        },
        15: {
          title: 'The queen comes out',
          text: '8.Qg4. The queen attacks the g7-pawn, which nothing defends, and adds pressure on the e4-knight.',
          arrows: [['g4', 'g7', 'red'], ['g4', 'e4', 'red']],
          marks: ['g7']
        },
        16: {
          title: 'Save the g-pawn',
          text: "8...g6. The pawn steps to g6, where the f7-pawn defends it. (8...Kf8, guarding g7 with the king, is the other main move.) Black's kingside pawns on g6 and h6 are now targets for White's h-pawn.",
          arrows: [['f7', 'g6', 'green'], ['h2', 'h4', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "9.Bd3: White's king stays in the middle",
      intro: 'White attacks the knight again. The recapture sends White\'s king to d2.',
      moves: MAIN,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'The key position',
          text: '8...g6. The e4-knight is attacked by the queen and defended by the d5-pawn.',
          arrows: [['g4', 'e4', 'red'], ['d5', 'e4', 'green']]
        },
        17: {
          title: 'A second attacker',
          text: '9.Bd3. Now the e4-knight is attacked twice and defended once.',
          arrows: [['d3', 'e4', 'red'], ['g4', 'e4', 'red']]
        },
        18: {
          title: 'Trade it off',
          text: '9...Nxd2. The knight takes the bishop before it can be won.',
          marks: ['d2']
        },
        19: {
          title: 'The king takes back',
          text: '10.Kxd2. The only way to recapture, because White\'s queen is on g4. White can no longer castle. But the pawns on d4 and e5 against d5 and e6 keep the center closed, so the king is fairly safe on d2.',
          arrows: [['e1', 'd2', 'green']],
          marks: ['d4', 'e5']
        },
        20: {
          title: 'Hit the base',
          text: '10...c5. Black attacks d4, the base of the chain, as always in the French.',
          arrows: [['c5', 'd4', 'red']]
        },
        21: {
          title: 'Guard the center',
          text: '11.Nf3. The knight defends d4 and e5.',
          arrows: [['f3', 'd4', 'green'], ['f3', 'e5', 'green']]
        },
        22: {
          title: 'Both sides have trumps',
          text: '11...Nc6. White has more kingside space and can push h4–h5 against g6. Black has a sound pawn structure and pressure on d4. The engine prefers White.',
          arrows: [['c6', 'd4', 'red'], ['h2', 'h4', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The quiet 5.exd5',
      intro: 'White can avoid the sharp main line by trading in the center.',
      moves: EXD5,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'The counter-pin',
          text: '4...Bb4. Instead of 5.e5, White trades on d5.',
          arrows: [['e4', 'd5', 'blue']]
        },
        9: {
          title: 'White trades',
          text: '5.exd5. The e4-pawn is no longer a target.',
          marks: ['d5']
        },
        10: {
          title: 'The queen recaptures',
          text: '5...Qxd5. The queen attacks the g5-bishop, which nothing defends, and the g2-pawn.',
          arrows: [['d5', 'g5', 'red'], ['d5', 'g2', 'red']]
        },
        11: {
          title: 'Give up the bishop',
          text: "6.Bxf6. White solves the problem by trading the bishop and spoiling Black's pawns.",
          marks: ['f6']
        },
        12: {
          title: 'Doubled f-pawns',
          text: "6...gxf6. Black's f-pawns are doubled, but the g-file is now half-open for Black's rook.",
          arrows: [['h8', 'g8', 'blue']],
          marks: ['f6', 'f7']
        },
        13: {
          title: 'Guard c3',
          text: '7.Qd2. The queen defends the c3-knight. Now the knight is pinned to the queen instead of the king.',
          arrows: [['d2', 'c3', 'green']]
        },
        14: {
          title: 'Pressure on c3',
          text: '7...Qa5. The queen lines up behind the b4-bishop against c3.',
          arrows: [['a5', 'c3', 'red']]
        },
        15: {
          title: 'One more guard',
          text: '8.Nge2. The knight defends c3 a third time.',
          arrows: [['e2', 'c3', 'green']]
        },
        16: {
          title: 'Slightly better for White',
          text: "8...Nc6. Black develops. White has the healthier pawns, Black has the bishop pair and the g-file. The engine gives White a slight edge.",
          arrows: [['c6', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'history',
      title: 'Who was McCutcheon?',
      body:
        "The line is named after John Lindsay McCutcheon of Philadelphia (1857–1905). He used it to beat World Champion Wilhelm Steinitz in a simultaneous exhibition in Manhattan in 1885. It was most popular from 1905 to 1925. The correct spelling is McCutcheon, not MacCutcheon."
    },
    {
      kind: 'tip',
      title: 'Plans for both sides',
      body:
        "**White:** use the space on the kingside. Qg4 and h4–h5 hit Black's weakened g6- and h6-pawns. Don't worry too much about the king on d2: while the center stays closed, it is fairly safe there.\n\n**Black:** play ...c5 and ...Nc6 against d4, and aim at White's doubled c-pawns later. Choose a home for your own king with care, because ...h6 and ...g6 have loosened the kingside."
    }
  ],
  takeaway:
    '4...Bb4 pins the c3-knight back. After 5.e5 h6 6.Bd2 Bxc3 7.bxc3 Ne4 8.Qg4 g6 9.Bd3 Nxd2 10.Kxd2, White\'s king stays on d2, fairly safe behind the closed center, and White keeps a slight edge.',
  lookAhead:
    "Module 6.8 shows Black's most solid answer to 4.Bg5: the Burn, 4...dxe4, where Black gives up the center to free the position.",
  drills: [
    {
      title: 'Play the McCutcheon',
      prompt: "You're Black. White has pinned your knight with 4.Bg5. Pin back, answer 5.e5 with a counterattack, trade on c3, jump into e4 and save your g-pawn.",
      moves: MCC,
      start: 7,
      side: 'black',
      hints: ['The f8-bishop pins the c3-knight. After 5.e5, hit the g5-bishop with a pawn.', 'Then ...Bxc3, ...Ne4, and push the g-pawn one square when the queen attacks it.'],
      success: '4...Bb4, 5...h6, 6...Bxc3, 7...Ne4 and 8...g6. The McCutcheon main line.'
    },
    {
      title: 'The king takes back',
      prompt: "You're White. Attack the e4-knight a second time, and when Black trades on d2, take back with the only piece that can.",
      moves: `${MCC} Bd3 Nxd2 Kxd2`,
      start: 16,
      side: 'white',
      hints: ['The f1-bishop can attack e4 too.', 'Your queen is on g4, so only one piece can recapture on d2.'],
      success: '9.Bd3 Nxd2 10.Kxd2. The king stays in the center, safe enough while the pawns keep it closed.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 4...Bb4 do?',
      moves: `${CLASSICAL} Bg5 Bb4`,
      orientation: 'black',
      choices: [
        { text: "It pins the c3-knight, the defender of e4, to White's king", correct: true, why: 'Right. A pin against a pin. The c3-knight cannot move, so it no longer really defends e4.' },
        { text: 'It breaks the pin on the f6-knight', why: 'The f6-knight is still pinned to the queen. ...Be7 would break that pin; ...Bb4 creates a new pin instead.' },
        { text: 'It wins the c3-knight', why: 'The knight is pinned, not lost. Black usually trades the bishop for it later with ...Bxc3.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has attacked the f6-knight with 5.e5. What is best?',
      moves: `${CLASSICAL} Bg5 Bb4 e5`,
      orientation: 'black',
      choices: [
        { text: '5...h6', correct: true, why: 'Right. Black hits the g5-bishop back. After 6.Bd2 Bxc3 7.bxc3 Ne4, the knight is safe.' },
        { text: '5...Bxc3+', why: 'Playable, but it gives up the bishop too early. The engine gives White a clear edge.' },
        { text: '5...c5', why: 'This ignores the attack: 6.exf6 wins a piece.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9.Bd3 Nxd2, why does White take back with the king?',
      moves: `${MCC} Bd3 Nxd2`,
      orientation: 'white',
      choices: [
        { text: "It is the only piece that can, and the closed center keeps the king fairly safe", correct: true, why: 'Right. The queen is on g4, so 10.Kxd2 is forced. With pawns locked on d4, e5, d5 and e6, the center stays closed, and the engine still gives White a slight edge.' },
        { text: 'To castle queenside next move', why: 'After a king move, castling is no longer allowed.' },
        { text: 'Because the king attacks e4 from d2', why: 'From d2 the king does not reach e4. 10.Kxd2 is simply the only recapture.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 8.Qg4, what is the queen attacking?',
      moves: `${CLASSICAL} Bg5 Bb4 e5 h6 Bd2 Bxc3 bxc3 Ne4 Qg4`,
      orientation: 'black',
      choices: [
        { text: 'The g7-pawn, which nothing defends, and the e4-knight', correct: true, why: 'Right. 8...g6 saves the pawn: on g6 the f7-pawn defends it. The e4-knight is defended by the d5-pawn.' },
        { text: 'The h6-pawn', why: 'The queen on g4 does not reach h6. Its targets are g7 and e4.' },
        { text: 'The d5-pawn', why: 'd5 is not on any of the queen\'s lines from g4. The targets are g7 and the e4-knight.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'What is 3.Nc3 Nf6 4.Bg5 Bb4 called?',
      moves: `${CLASSICAL} Bg5 Bb4`,
      orientation: 'black',
      choices: [
        { text: 'The McCutcheon Variation', correct: true, why: 'Right. Named after John Lindsay McCutcheon, who beat Steinitz with it in an 1885 simultaneous exhibition.' },
        { text: 'The Winawer Variation', why: 'The Winawer is 3...Bb4, before ...Nf6. Here the bishop comes out after 3...Nf6 4.Bg5.' },
        { text: 'The Burn Variation', why: 'The Burn is 4...dxe4. Here Black pins the knight with 4...Bb4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 5.exd5 Qxd5 6.Bxf6 gxf6, what has Black got for the doubled f-pawns?',
      moves: `${CLASSICAL} Bg5 Bb4 exd5 Qxd5 Bxf6 gxf6`,
      orientation: 'black',
      choices: [
        { text: 'The bishop pair and a half-open g-file', correct: true, why: 'Right. White gave up the dark-squared bishop on f6, and the g-file can be used by Black\'s rook. The engine still gives White a slight edge.' },
        { text: 'An extra pawn', why: 'Material is level: White took on d5 and f6, and Black took back both times.' },
        { text: 'A safe castled king', why: "Black hasn't castled, and the kingside pawns are broken. Black's king usually looks for a home elsewhere." }
      ]
    }
  ],
  key: { name: 'McCutcheon: 4...Bb4, the counter-pin', moves: `${CLASSICAL} Bg5 Bb4`, orientation: 'black' },
  terms: [
    { term: 'McCutcheon Variation', meaning: '3.Nc3 Nf6 4.Bg5 Bb4: Black answers the pin on f6 by pinning the c3-knight.' },
    { term: 'Counter-pin', meaning: 'Answering a pin by pinning one of the opponent\'s pieces in return.' },
    { term: 'Doubled pawns', meaning: 'Two pawns of the same color on one file, such as White\'s c2- and c3-pawns after 7.bxc3. They are harder to defend and can\'t protect each other.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has only one or none. In open positions it is often an advantage.' }
  ]
})
