import { defineModule } from '../../../types'
import { OPEN_E6, OPEN_NC6 } from '../lines'

/** 4...Nf6 5.Nc3 Bb4: the Pin Variation */
const PIN = `${OPEN_E6} Nf6 Nc3 Bb4`
/** pin-variation: 6.e5 Nd5 7.Bd2 Nxc3 8.bxc3 Be7 9.Qg4 */
const MAIN = `${PIN} e5 Nd5 Bd2 Nxc3 bxc3 Be7 Qg4`
/** pin-ne4-trap: 6.e5 Ne4? 7.Qg4 Nxc3 8.Qxg7 Rf8 9.a3 */
const TRAP = `${PIN} e5 Ne4 Qg4 Nxc3 Qxg7 Rf8 a3`
/** godiva-4qb6: 2...Nc6 3.d4 cxd4 4.Nxd4 Qb6 5.Nb3 Nf6 6.Nc3 e6 */
const QB6 = `${OPEN_NC6} Qb6 Nb3 Nf6 Nc3 e6`

export default defineModule({
  id: '6.8',
  title: 'The Pin Variation and other early tries',
  minutes: 12,
  level: 3,
  goals: [
    'Answer the Pin Variation 5...Bb4 with 6.e5!',
    'Spring the trap 6...Ne4? 7.Qg4! as White',
    'See why 4...Qb6 and 3...d5 leave White better'
  ],
  intro:
    "Not every early ...e6 idea is a good one. After 4...Nf6 5.Nc3, Black can pin the c3-knight with 5...Bb4. It looks active, but White has a strong answer and Black has a trap to avoid. This module also looks at two other early tries: the queen jump ...Qb6 and the direct ...d5.",
  sections: [
    {
      kind: 'walkthrough',
      title: '5...Bb4 6.e5!: the Pin Variation',
      intro: "From White's side. The pin threatens e4, so White simply pushes the e-pawn out of reach.",
      moves: MAIN,
      start: 9,
      orientation: 'white',
      steps: {
        9: {
          title: 'The crossroads',
          text: '5.Nc3. The knight defends e4. Now 5...Nc6 would be the Four Knights (Module 6.7). This time Black pins.',
          arrows: [['c3', 'e4', 'green']]
        },
        10: {
          title: 'The pin',
          text: "5...Bb4. The Pin Variation. The bishop pins the c3-knight to White's king, so the knight can't defend e4. Black threatens ...Nxe4.",
          arrows: [['b4', 'e1', 'red'], ['f6', 'e4', 'red']]
        },
        11: {
          title: 'Push the pawn',
          text: '6.e5. The attacked pawn moves forward and kicks the f6-knight. Now ...Nxe4 is impossible, and White gains space.',
          arrows: [['e5', 'f6', 'red']],
          ann: '!'
        },
        12: {
          title: 'Into the center',
          text: '6...Nd5. The knight jumps to d5 and attacks the pinned c3-knight.',
          arrows: [['d5', 'c3', 'red']]
        },
        13: {
          title: 'Breaking the pin',
          text: '7.Bd2. The bishop steps between b4 and e1, so the c3-knight is no longer pinned.',
          arrows: [['d2', 'c3', 'green']]
        },
        14: {
          title: 'A trade',
          text: '7...Nxc3. Black trades knights.',
          marks: ['c3']
        },
        15: {
          title: 'Toward the center',
          text: "8.bxc3. White's c-pawns are doubled, but the new c3-pawn attacks the b4-bishop, and the b-file is half-open for White's rook.",
          arrows: [['c3', 'b4', 'red']]
        },
        16: {
          title: 'The bishop retreats',
          text: '8...Be7. The bishop steps back. The e5-pawn cramps Black: no black knight can use f6 or d6.',
          arrows: [['e5', 'f6', 'red'], ['e5', 'd6', 'red']]
        },
        17: {
          title: 'Attacking g7',
          text: "9.Qg4. The queen hits g7. Castling is risky because of Bh6, so Black's best is 9...Kf8, giving up castling. White is clearly better.",
          arrows: [['g4', 'g7', 'red'], ['d2', 'h6', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The trap: 6...Ne4? 7.Qg4!',
      intro: "From White's side. Black's knight jumps forward instead of to d5, and the queen punishes it.",
      moves: TRAP,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'Same pin',
          text: '5...Bb4. The Pin Variation again.',
          arrows: [['b4', 'e1', 'red']]
        },
        11: {
          title: 'Kick the knight',
          text: '6.e5. The f6-knight must move.',
          arrows: [['e5', 'f6', 'red']]
        },
        12: {
          title: 'Too far forward',
          text: '6...Ne4. The knight attacks the pinned c3-knight. It looks active, but nothing defends it on e4.',
          marks: ['e4'],
          ann: '?'
        },
        13: {
          title: 'Double attack',
          text: '7.Qg4. The queen attacks the e4-knight and the g7-pawn. If g7 falls, the h8-rook is next.',
          arrows: [['g4', 'e4', 'red'], ['g4', 'g7', 'red']],
          ann: '!'
        },
        14: {
          title: 'Grab something',
          text: "7...Nxc3. Black's best: the knight takes on c3 rather than be lost. Now every knight move would give a discovered check from the b4-bishop.",
          arrows: [['b4', 'e1', 'red']]
        },
        15: {
          title: 'g7 falls',
          text: '8.Qxg7. White takes the pawn and attacks the h8-rook.',
          arrows: [['g7', 'h8', 'red']]
        },
        16: {
          title: 'The rook steps aside',
          text: "8...Rf8. The rook is safe, but it is shut in: g8 is covered by the queen. Black can no longer castle short.",
          marks: ['f8', 'g8']
        },
        17: {
          title: 'Both pieces hit',
          text: "9.a3. Now the b4-bishop is attacked too, and the b2-pawn already hits the c3-knight. Black's king is stuck in the center. White is much better.",
          arrows: [['a3', 'b4', 'red'], ['b2', 'c3', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'text',
      title: 'What does White win?',
      body:
        "After 9.a3, Black's best try is a forcing line: 9...Nb5+ (a discovered check from the bishop) 10.axb4 Nxd4 11.Bg5 Qb6 12.Bh6 Qxb4+ 13.c3 Nf5 14.cxb4 Nxg7 15.Bxg7. The material comes out level, but White has two strong bishops, the f8-rook is attacked, and Black's queenside pieces are still at home. White is much better.\n\nIf Black saves the bishop instead with 9...Be7, then 10.bxc3 leaves White a pawn up with an even bigger advantage. The lesson for Black: after 6.e5, the knight belongs on d5, not e4."
    },
    {
      kind: 'walkthrough',
      title: '4...Qb6: a double attack that White can meet',
      intro: "From Black's side, in the 2...Nc6 move order. The queen hits two things at once, but one calm knight move stops both.",
      moves: QB6,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'Another move order',
          text: '4.Nxd4. This is the 2...Nc6 Open Sicilian: 2...Nc6 3.d4 cxd4 4.Nxd4.',
          marks: ['d4']
        },
        8: {
          title: 'Two targets',
          text: '4...Qb6. The queen and the c6-knight both attack d4, which only the d1-queen defends. The queen also eyes the b2-pawn.',
          arrows: [['b6', 'd4', 'red'], ['c6', 'd4', 'red'], ['b6', 'b2', 'red']]
        },
        9: {
          title: 'One move, two answers',
          text: '5.Nb3. The knight leaves d4 and blocks the b-file, so b2 is safe too. Careful: 5.Nc3? would lose a knight to 5...Qxd4.',
          marks: ['b3'],
          ann: '!'
        },
        10: {
          title: 'Black develops',
          text: '5...Nf6. The knight comes out and hits e4.',
          arrows: [['f6', 'e4', 'red']]
        },
        11: {
          title: 'e4 is guarded',
          text: "6.Nc3. White develops and defends e4. Black's queen on b6 is doing little now, and White's coming Be3 will chase it.",
          arrows: [['c3', 'e4', 'green']],
          marks: ['b6']
        },
        12: {
          title: 'White leads',
          text: '6...e6. Black reaches an ...e6 set-up, but the early queen trip cost time. White has developed faster and is better.',
          marks: ['b6']
        }
      }
    },
    {
      kind: 'text',
      title: 'Hitting back at once: 3...d5',
      body:
        "After 2...e6 3.d4, Black can try 3...d5 instead of 3...cxd4. A typical line is 4.exd5 exd5 5.Bb5+ Bd7 6.Bxd7+ Nxd7 7.O-O Be7 8.dxc5 Nxc5. Black's d5-pawn ends up isolated, with no pawns beside it, and White keeps a small but clear edge.\n\nTaking first with 3...cxd4 is better. Then Black can choose the Taimanov, the Kan or the Four Knights, as this chapter showed."
    }
  ],
  takeaway:
    "Meet the Pin Variation 5...Bb4 with 6.e5!: after 6...Nd5 White is clearly better, and 6...Ne4? 7.Qg4! is a trap that leaves White much better. The early ...Qb6 and 3...d5 tries also leave White with an edge.",
  lookAhead:
    'Chapter 7 turns to White\'s anti-Sicilians: the Alapin, 2.c3, and the Smith–Morra Gambit.',
  drills: [
    {
      title: 'Spring the trap',
      prompt: "You're White. Black has just played 6...Ne4?. Punish it, and keep going until both black pieces are attacked.",
      moves: TRAP,
      start: 11,
      side: 'white',
      hints: [
        'Find a queen move that attacks the e4-knight and the g7-pawn at once.',
        '7.Qg4, then take on g7, then attack the b4-bishop with a pawn.'
      ],
      success: '7.Qg4!, 8.Qxg7 and 9.a3!. Black\'s king is stuck in the center and White is much better.'
    },
    {
      title: 'Beat the pin',
      prompt: "You're White. Black has just pinned your knight with 5...Bb4. Play the strongest answer and keep the initiative.",
      moves: MAIN,
      start: 10,
      side: 'white',
      hints: [
        'Push the attacked pawn forward so it hits the f6-knight.',
        '6.e5, 7.Bd2 to break the pin, 8.bxc3, and 9.Qg4 to hit g7.'
      ],
      success: '6.e5, 7.Bd2, 8.bxc3 and 9.Qg4. White has space, the half-open b-file and pressure on g7.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black has just played 5...Bb4, pinning the c3-knight. What is White\'s strongest answer?',
      moves: PIN,
      orientation: 'white',
      choices: [
        { text: '6.e5', correct: true, why: 'Right. The pawn escapes the threat and kicks the f6-knight. White is clearly better.' },
        { text: '6.Bd3', why: 'It guards e4, but it is passive. After 6...d6 the game is roughly level. 6.e5 is much stronger.' },
        { text: '6.Bd2', why: 'Breaking the pin at once is playable, but Black gets a roughly level game. 6.e5 is much stronger.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black has just played 6...Ne4?. What is White\'s best move?',
      moves: `${PIN} e5 Ne4`,
      orientation: 'white',
      choices: [
        { text: '7.Qg4', correct: true, why: 'Yes. The queen attacks the e4-knight and the g7-pawn at once. White ends up much better.' },
        { text: '7.Qd3', why: 'It attacks the knight, but misses g7. Black gets out with only a small disadvantage.' },
        { text: '7.Nb5', why: 'An interesting jump, but it gives Black time. 7.Qg4 hits two targets at once and is much stronger.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 4...Qb6, why would 5.Nc3? be a mistake?',
      moves: `${OPEN_NC6} Qb6`,
      orientation: 'white',
      choices: [
        { text: 'd4 is attacked twice and defended once, so 5...Qxd4 wins a knight', correct: true, why: "Right. The queen and the c6-knight both hit d4. After 6.Qxd4 Nxd4, Black is a knight up." },
        { text: 'Black wins the b2-pawn with check', why: 'No. 5...Qxb2 would not be check, and the c1-bishop would take the queen. The real problem is the d4-knight, which falls to 5...Qxd4.' },
        { text: 'It is not a mistake: the knight defends d4', why: 'A knight on c3 does not defend d4. Only the d1-queen does, and that is not enough.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 2...e6 3.d4 d5 4.exd5 exd5, what long-term problem does Black often get?',
      choices: [
        { text: 'An isolated d5-pawn, with White keeping a small edge', correct: true, why: 'Yes. After dxc5 the d5-pawn has no pawns beside it. Black does better to take on d4 first with 3...cxd4.' },
        { text: 'Doubled c-pawns', why: "Black's c-pawn is still single. The issue is the isolated d-pawn." },
        { text: 'A trapped queen', why: 'Nothing traps the queen in this line. The problem is the pawn structure.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why is 6.e5 such a strong answer to the Pin Variation 5...Bb4?',
      choices: [
        { text: 'It kicks the f6-knight, so the threat ...Nxe4 disappears, and it gains space', correct: true, why: 'Right. The pin only mattered because e4 was attacked. Push the pawn, and the pin loses its point.' },
        { text: 'It wins the b4-bishop', why: 'Nothing attacks the bishop yet. That comes later with bxc3 or a3.' },
        { text: 'It gives check', why: 'e5 attacks the knight on f6, not the king. The point is removing the threat to e4.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'In the trap 5...Bb4 6.e5 Ne4? 7.Qg4, which two black targets does the queen attack?',
      choices: [
        { text: 'The e4-knight and the g7-pawn', correct: true, why: 'Yes. A double attack: Black cannot save both, and after Qxg7 the h8-rook is hit too.' },
        { text: 'The b4-bishop and the d7-pawn', why: 'The queen on g4 reaches neither: the e6-pawn blocks the way to d7. The double attack is on e4 and g7.' },
        { text: 'The e6-pawn and the f7-pawn', why: 'The e6-pawn is guarded, and f7 is not on the queen\'s line. The targets are e4 and g7.' }
      ]
    }
  ],
  key: { name: 'Pin Variation: 5...Bb4', moves: PIN, orientation: 'white' },
  terms: [
    { term: 'Pin Variation', meaning: 'The Sicilian line 2...e6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Bb4, where Black pins the c3-knight. 6.e5! is the strong answer.' },
    { term: 'Double attack', meaning: 'One move that attacks two targets at once. The opponent can often save only one.' },
    { term: 'Discovered check', meaning: 'A check given by a piece when another piece moves out of its way.' }
  ]
})
