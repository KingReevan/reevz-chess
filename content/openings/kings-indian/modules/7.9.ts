import { defineModule } from '../../../types'
import { KID, AVERBAKH } from '../lines'

/** averbakh-6c5: 6...c5 7.d5 e6 8.Qd2 exd5 9.exd5 Re8 10.Nf3 Bg4 11.O-O Nbd7 */
const C5 = `${AVERBAKH} c5 d5 e6 Qd2 exd5 exd5 Re8 Nf3 Bg4 O-O Nbd7`
/** averbakh-6h6: 6...h6 7.Be3 e5 8.d5 c6 */
const H6 = `${AVERBAKH} h6 Be3 e5 d5 c6`
/** Drill: the first three moves of the 6...c5 line, all engine top choices */
const C5_DRILL = `${AVERBAKH} c5 d5 e6 Qd2 exd5`
/** A premature ...h6 in the 6...c5 line (engine-checked): 8...h6? 9.Bxh6 */
const EARLY_H6 = `${AVERBAKH} c5 d5 e6 Qd2 h6 Bxh6`

export default defineModule({
  id: '7.9',
  title: 'Averbakh: 6...c5, 6...h6 and friends',
  minutes: 11,
  level: 3,
  goals: [
    'Play the main line 6...c5 and know why ...h6 must wait there',
    'Kick the bishop with 6...h6 so that ...e5 is safe',
    'Know the knight moves 6...Na6 and 6...Nbd7, and the Semi-Averbakh 6.Be3'
  ],
  intro:
    "Module 7.8 showed that 6...e5? walks into a pin. So what should Black play against 6.Bg5? There are several sound answers. The main one hits d4 with the c-pawn. Another kicks the bishop away first, so that ...e5 becomes safe. This module shows both, plus the knight moves and White's cousin system, 6.Be3.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The main line: 6...c5',
      intro: 'Black hits d4 from the side, as in the Four Pawns. Watch which files open.',
      moves: C5,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The Averbakh',
          text: '6.Bg5. Black wants to hit the center, but ...e5 must wait. So Black uses the other break.',
          arrows: [['c7', 'c5', 'blue'], ['g5', 'f6', 'red']]
        },
        12: {
          title: 'Hit d4 from the side',
          text: "6...c5. The engine's top choice. The e-pawn stays on e7 for now, where it blocks the diagonal from g5 to d8.",
          arrows: [['c5', 'd4', 'red']],
          marks: ['e7']
        },
        13: {
          title: 'White pushes past',
          text: '7.d5. White gains space, as in the Four Pawns and the Classical.',
          marks: ['d5']
        },
        14: {
          title: 'Hit d5',
          text: '7...e6. Black attacks the d5-pawn at once.',
          arrows: [['e6', 'd5', 'red']]
        },
        15: {
          title: 'The queen backs up the bishop',
          text: '8.Qd2. The queen and the g5-bishop now aim at h6. If Black plays ...h6, Bxh6 wins a pawn, because the queen can take back on h6.',
          arrows: [['d2', 'h6', 'yellow']],
          marks: ['h6']
        },
        16: {
          title: 'Black trades',
          text: '8...exd5. Black opens the center.',
          marks: ['d5']
        },
        17: {
          title: 'The e-file opens',
          text: "9.exd5. This time White takes with the e-pawn. Now the e-file is open: neither side has a pawn on it. The c4-pawn still guards d5.",
          arrows: [['e8', 'e1', 'blue'], ['c4', 'd5', 'green']]
        },
        18: {
          title: 'Rook to the open file',
          text: "9...Re8. The rook takes the open e-file and presses on the e2-bishop, with White's king still behind it on e1. This is the natural plan, but the engine prefers 9...Qb6, which keeps the game level.",
          arrows: [['e8', 'e2', 'red']]
        },
        19: {
          title: 'White develops',
          text: '10.Nf3. The knight comes out, and White is ready to castle.',
          arrows: [['e1', 'g1', 'blue']]
        },
        20: {
          title: 'The last bishop',
          text: '10...Bg4. Black develops the light-squared bishop with pressure on the f3-knight.',
          arrows: [['g4', 'f3', 'red']]
        },
        21: {
          title: 'White castles',
          text: '11.O-O. The king leaves the e-file.',
          arrows: [['e1', 'g1', 'green']]
        },
        22: {
          title: 'Active pieces',
          text: '11...Nbd7. All of Black\'s minor pieces are out. White is a little better, but Black\'s pieces are active and the rook owns the open e-file. The d7-knight can jump to e5 later.',
          arrows: [['d7', 'e5', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Kick the bishop first: 6...h6',
      intro: 'Black asks the bishop to leave before playing ...e5.',
      moves: H6,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The bishop on g5',
          text: '6.Bg5. This time Black deals with the bishop directly.',
          arrows: [['g5', 'd8', 'yellow']]
        },
        12: {
          title: 'Ask the bishop',
          text: '6...h6. The pawn attacks the bishop.',
          arrows: [['h6', 'g5', 'red']]
        },
        13: {
          title: 'The bishop steps back',
          text: "7.Be3. The engine's top choice. The bishop has left the g5–d8 diagonal, so there is no pin on f6 any more.",
          arrows: [['g5', 'e3', 'green']]
        },
        14: {
          title: 'Now ...e5 is safe',
          text: '7...e5. After 8.dxe5 dxe5 9.Qxd8 Rxd8 there is no pin, and the position is equal. The engine slightly prefers 7...c5 here, but ...e5 is a sound choice.',
          arrows: [['e5', 'd4', 'red']]
        },
        15: {
          title: 'The center locks',
          text: '8.d5. White closes the center, as in the main lines of Chapters 2 to 4.',
          marks: ['d5']
        },
        16: {
          title: 'Hit d5 from the side',
          text: '8...c6. Black prepares to open the c-file with ...cxd5. White has more space and is somewhat better.',
          arrows: [['c6', 'd5', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The knight moves, and 6.Be3',
      body:
        "**6...Na6** (lichess: Modern Defense). 7.Qd2 e5 8.d5 c6 9.f3 cxd5 10.cxd5. The knight is heading for c5. Here ...e5 comes even with the bishop on g5, and it works: the a6-knight guards c7, so after 8.dxe5 dxe5 9.Qxd8 Rxd8 10.Nd5, Black plays 10...Rd6!. The rook leaves the pinned diagonal and guards f6, and the trick wins nothing. After 10.cxd5, White is a little better.\n\n**6...Nbd7** (lichess: Geller Defense). 7.Qd2 e5 8.d5 Nc5 9.f3. Again ...e5 is possible, for a different reason: after 8.dxe5 dxe5 the d7-knight blocks the d-file, so there is no queen trade on d8. The engine likes this a little less than the other choices. White is better.\n\n**The Semi-Averbakh, 6.Be3.** After 5.Be2 O-O, White can put the bishop on e3 instead of g5. 6...c5 7.d5 e6 gives the same kind of structure as the main line, and White is a little better. The engine rates 6...Na6 and 6...a5 just as highly."
    },
    {
      kind: 'warning',
      title: 'Not ...h6 after Qd2',
      body:
        "In the 6...c5 line, the queen on d2 backs up the g5-bishop. So 8...h6? is a mistake: 9.Bxh6! simply wins a pawn, because if 9...Bxh6, 10.Qxh6 takes back. The engine says White is much better. Kick the bishop on move 6, before the queen arrives, or not at all."
    }
  ],
  takeaway:
    "Against the Averbakh, Black's main answer is 6...c5 7.d5 e6, opening the e-file with active pieces. 6...h6 7.Be3 makes ...e5 safe. With 6...Na6 or 6...Nbd7, ...e5 works because the knight covers c7 or blocks the d-file. Once White's queen is on d2, don't play ...h6.",
  lookAhead:
    'Chapter 8 turns to calmer systems: the Fianchetto Variation with g3 and Bg2, and other set-ups, including 5.Bg5, the Accelerated Averbakh (Module 8.8).',
  drills: [
    {
      title: 'Play the main line',
      prompt: "You're Black against the Averbakh. Hit d4 with the c-pawn, hit d5 when it arrives, then open the center.",
      moves: C5_DRILL,
      start: 11,
      side: 'black',
      hints: [
        '...c5 first. When White pushes d5, hit it with the e-pawn.',
        'After 8.Qd2, take on d5 yourself.'
      ],
      success: '6...c5, 7...e6 and 8...exd5. After 9.exd5 the e-file is open, and Black\'s pieces get active squares.'
    },
    {
      title: 'Punish the early ...h6',
      prompt: "You're White. Your queen is on d2, behind the g5-bishop, and Black has just played 8...h6?. Win a pawn.",
      moves: EARLY_H6,
      start: 16,
      side: 'white',
      hints: ['The queen and the bishop are on the same diagonal.', 'If the bishop takes on h6 and is taken, the queen takes back.'],
      success: '9.Bxh6! After 9...Bxh6 10.Qxh6, White has won a pawn and the queen is close to Black\'s king.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'White to move. Black has just played 8...h6. What is the strongest move?',
      moves: `${AVERBAKH} c5 d5 e6 Qd2 h6`,
      orientation: 'white',
      choices: [
        { text: '9.Bxh6', correct: true, why: 'Right. If 9...Bxh6, 10.Qxh6 takes back. White wins a pawn and is much better.' },
        { text: '9.Be3', why: 'Safe, but it misses the chance. White is only a little better after it.' },
        { text: '9.Bf4', why: 'The bishop keeps an eye on d6, but it misses the free pawn. The position is roughly equal.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6...h6 7.Be3, why is ...e5 safe now?',
      moves: `${AVERBAKH} h6 Be3`,
      orientation: 'black',
      choices: [
        { text: 'The bishop has left the g5–d8 diagonal, so a queen trade on d8 creates no pin', correct: true, why: 'Right. After 7...e5 8.dxe5 dxe5 9.Qxd8 Rxd8 the position is equal.' },
        { text: 'The h6-pawn defends e5', why: 'A pawn on h6 guards g5, not e5. The point is that the bishop left g5.' },
        { text: 'White can no longer trade queens', why: 'White can still trade on d8. It just wins nothing without the pin.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 6...Na6 line, Black plays ...e5 with the bishop still on g5. Why does that work?',
      moves: `${AVERBAKH} Na6 Qd2 e5`,
      orientation: 'black',
      choices: [
        { text: 'The a6-knight guards c7, and after 10.Nd5 the rook can step to d6', correct: true, why: 'Right. 8.dxe5 dxe5 9.Qxd8 Rxd8 10.Nd5 Rd6! and the trick wins nothing.' },
        { text: 'The d-file is blocked, so there is no queen trade', why: 'That is the reason in the 6...Nbd7 line, where the knight stands on d7. Here the d-file opens after dxe5.' },
        { text: 'The g5-bishop is pinned', why: 'Nothing pins the bishop. The a6-knight and the ...Rd6 resource are what save Black.' }
      ]
    },
    {
      type: 'name',
      prompt: 'White has played 5.Be2 O-O 6.Be3. What is this system called?',
      moves: `${KID} Be2 O-O Be3`,
      orientation: 'white',
      choices: [
        { text: 'The Semi-Averbakh', correct: true, why: 'Right. The bishop goes to e3 instead of g5. 6...c5 is a sound answer.' },
        { text: 'The Accelerated Averbakh', why: 'That is 5.Bg5, with the bishop out before Be2 (Module 8.8).' },
        { text: 'The Classical Variation', why: 'The Classical is 5.Nf3 and 6.Be2. Here the knight is still on g1.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 6...c5 7.d5 e6 8.Qd2 exd5 9.exd5, what can you say about the e-file?',
      moves: `${AVERBAKH} c5 d5 e6 Qd2 exd5 exd5`,
      orientation: 'black',
      choices: [
        { text: 'It is open: neither side has a pawn on it', correct: true, why: 'Right. Both e-pawns took on d5. That is why ...Re8 is so natural.' },
        { text: 'It is half-open for Black only', why: "Half-open means one side still has a pawn on it. Here White's e-pawn has gone too, so it is fully open." },
        { text: 'It is closed', why: 'There are no pawns on the e-file at all.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move against the Averbakh. Which of these moves is a mistake?',
      moves: AVERBAKH,
      orientation: 'black',
      choices: [
        { text: '6...e5', correct: true, why: 'Right, that is the mistake. 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5! wins material (Module 7.8).' },
        { text: '6...c5', why: "This is the engine's top choice and the main line, not a mistake." },
        { text: '6...h6', why: 'This is a sound move: it kicks the bishop, and after 7.Be3 ...e5 is safe.' }
      ]
    }
  ],
  key: { name: 'Averbakh main line: 6...c5 7.d5 e6', moves: `${AVERBAKH} c5 d5 e6`, orientation: 'black' },
  terms: [
    { term: 'Open file', meaning: 'A file with no pawns of either color on it.' },
    { term: 'Battery', meaning: 'Two pieces lined up on the same line, one behind the other, like a queen behind a bishop.' },
    { term: 'Semi-Averbakh', meaning: 'The system 5.Be2 O-O 6.Be3, with the bishop on e3 instead of g5.' }
  ]
})
