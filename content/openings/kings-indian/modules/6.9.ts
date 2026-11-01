import { defineModule } from '../../../types'
import { KID, SAMISCH } from '../lines'

/** samisch-6c6 (6...c6 7.Bd3 a6, the Byrne Defense), then 8.Qd2 b5, the engine's choices */
const BYRNE = `${SAMISCH} c6 Bd3 a6 Qd2 b5`
/** samisch-6bg5 (6.Bg5 c5 7.d5 e6 8.Qd2 exd5 9.Nxd5, the Steiner Attack), then 9...Be6, the engine's choice */
const STEINER = `${KID} f3 O-O Bg5 c5 d5 e6 Qd2 exd5 Nxd5 Be6`

export default defineModule({
  id: '6.9',
  title: 'Other Sämisch tries',
  minutes: 10,
  level: 3,
  goals: [
    "Know Black's quiet set-ups 6...c6 and 6...b6",
    "Meet White's 6.Bg5 (Steiner Attack) and 6.Nge2",
    'Tell the difference between a rare move and a bad one'
  ],
  intro:
    "The main Sämisch lines are behind you. This last module collects the other tries: two quiet set-ups for Black, and two different sixth moves for White. None of them is a main line, but you will meet them, and one of them has an unfair reputation.",
  sections: [
    {
      kind: 'walkthrough',
      title: '6...c6: the Byrne Defense',
      intro: 'A quiet set-up that prepares ...b5 without committing the center.',
      moves: BYRNE,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The usual position',
          text: '6.Be3. Instead of ...e5, ...c5 or ...Nc6, Black has a quiet option.'
        },
        12: {
          title: 'A quiet pawn move',
          text: '6...c6. Black prepares ...b5 and keeps the center flexible.',
          arrows: [['b7', 'b5', 'blue']]
        },
        13: {
          title: 'The bishop guards c4 and e4',
          text: '7.Bd3. The bishop develops and protects both c4 and e4. If Black later plays ...b5 and ...bxc4, the bishop can take back.',
          arrows: [['d3', 'c4', 'green'], ['d3', 'e4', 'green']]
        },
        14: {
          title: 'Ready for ...b5',
          text: '7...a6. Now ...b5 is fully prepared. lichess calls this set-up the Byrne Defense.',
          arrows: [['a6', 'b5', 'green']]
        },
        15: {
          title: 'The battery',
          text: '8.Qd2. The usual Sämisch queen move.'
        },
        16: {
          title: 'The queenside opens',
          text: "8...b5. Black strikes on the queenside. The engine gives White only a small edge: the quiet set-up is solid. It is a close cousin of 6...a6 7.Qd2 c6 from Module 6.2.",
          arrows: [['b5', 'c4', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '6.Bg5: the Steiner Attack',
      intro: 'White puts the bishop on g5 instead of e3. Watch what happens to the d4-pawn.',
      moves: STEINER,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'A different bishop move',
          text: '5...O-O. White now chooses g5 for the bishop instead of e3.'
        },
        11: {
          title: 'The bishop on g5',
          text: '6.Bg5. The bishop eyes the f6-knight and works with Qd2 later. lichess calls this the Steiner Attack. But from g5 the bishop no longer guards d4.',
          arrows: [['g5', 'f6', 'blue']],
          marks: ['d4']
        },
        12: {
          title: 'Hit d4 at once',
          text: '6...c5. Black attacks the d4-pawn while it has only the queen to defend it.',
          arrows: [['c5', 'd4', 'red']]
        },
        13: {
          title: 'Push past',
          text: '7.d5. White closes the center.'
        },
        14: {
          title: 'Challenge d5',
          text: '7...e6. Black hits d5 straight away, as in Module 6.7.',
          arrows: [['e6', 'd5', 'red']]
        },
        15: {
          title: 'White develops',
          text: '8.Qd2. The queen supports the bishop and prepares queenside castling.'
        },
        16: {
          title: 'The e-file half-opens',
          text: '8...exd5. Black takes on d5.'
        },
        17: {
          title: 'The knight recaptures',
          text: '9.Nxd5. White takes with the knight, which now adds pressure to f6 together with the g5-bishop. 9.cxd5 is also good.',
          arrows: [['d5', 'f6', 'red'], ['g5', 'f6', 'red']]
        },
        18: {
          title: 'Challenge the knight',
          text: '9...Be6. Black attacks the strong knight at once and is ready to trade it. The engine calls the position roughly equal.',
          arrows: [['e6', 'd5', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: '6...b6 and 6.Nge2',
      body:
        "**6...b6, the Double Fianchetto.** Black plans ...Bb7, aiming at e4 along the long light diagonal, and ...c5 later. It is rare, and you may see it called dubious. It isn't. The engine finds no refutation and rates it about as well as 6...e5. Rare only means few people play it.\n\n**6.Nge2.** White develops the knight first and keeps Be3 for later. Black's simplest answer is 6...c5, hitting d4 at once. After 7.Be3 Nc6 8.d5 Ne5 9.Ng3, the game has transposed to the 7.Nge2 line of Module 6.7."
    },
    {
      kind: 'tip',
      title: 'Rare is not the same as bad',
      body:
        'A move can be rare because it is out of fashion, because it leads to quieter positions, or simply because fewer books cover it. Before you call a move bad, look for a concrete reason: a tactic, lost material, or a plan that fails.'
    }
  ],
  takeaway:
    "Against the Sämisch, Black can also play the quiet 6...c6 or 6...b6, which are rare but sound. Against 6.Bg5 or 6.Nge2, Black's simplest answer is 6...c5, because d4 has lost a defender.",
  lookAhead:
    'Chapter 7 starts with the Four Pawns Attack, 5.f4: an even bigger center than the Sämisch, which Black must hit at once with ...c5.',
  drills: [
    {
      title: 'Punish the bishop move',
      prompt: "You're Black. White has played 6.Bg5. Hit the d4-pawn, challenge the center, and meet the knight on d5.",
      moves: STEINER,
      start: 11,
      side: 'black',
      hints: [
        'The bishop on g5 no longer guards d4. Attack d4 with a pawn.',
        'After 7.d5, hit it with your e-pawn. When the knight lands on d5, challenge it with your light-squared bishop.'
      ],
      success: '6...c5, 7...e6, 8...exd5 and 9...Be6. The center is open and the position is roughly equal.'
    },
    {
      title: 'The Byrne set-up',
      prompt: "You're Black. White has played 6.Be3. Build the quiet ...c6 and ...a6 set-up, then strike on the queenside.",
      moves: BYRNE,
      start: 11,
      side: 'black',
      hints: ['Two quiet pawn moves prepare one sharp one.', 'c-pawn first, then a-pawn, then the b-pawn goes two squares.'],
      success: '6...c6, 7...a6 and 8...b5. A solid set-up with queenside play.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Is 6...b6 (the Double Fianchetto) a mistake?',
      moves: `${SAMISCH} b6`,
      orientation: 'black',
      choices: [
        { text: 'No. It is rare, but the engine finds no refutation', correct: true, why: 'Right. The engine rates it about as well as 6...e5. Rare is not the same as bad.' },
        { text: 'Yes. It loses a pawn by force', why: 'No pawn is lost. Black simply develops in an unusual way.' },
        { text: 'Yes. White wins at once with Bh6', why: 'Bh6 is always an idea in the Sämisch, but it wins nothing here.' }
      ]
    },
    {
      type: 'name',
      prompt: 'White played 5.f3 and 6.Bg5. What is this line called?',
      moves: `${KID} f3 O-O Bg5`,
      orientation: 'white',
      choices: [
        { text: 'The Steiner Attack', correct: true, why: 'Right. A Sämisch with the bishop on g5 instead of e3.' },
        { text: 'The Averbakh Variation', why: 'The Averbakh also puts a bishop on g5, but after 5.Be2, not 5.f3. Here the f-pawn is on f3.' },
        { text: 'The Panno', why: 'The Panno is a Black set-up with ...Nc6, ...a6 and ...Rb8.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Against 6...c6, what does 7.Bd3 do?',
      moves: `${SAMISCH} c6 Bd3`,
      orientation: 'white',
      choices: [
        { text: 'It guards both c4 and e4', correct: true, why: 'Right. If Black plays ...b5 and ...bxc4, the bishop takes back.' },
        { text: 'It prepares Bh6', why: 'The light-squared bishop on d3 has nothing to do with h6. That is the job of the e3-bishop.' },
        { text: 'It attacks the black king', why: "The bishop's diagonal toward h7 is blocked by White's own e4-pawn, so there is no attack." }
      ]
    },
    {
      type: 'move',
      prompt: 'White has played 6.Nge2 instead of 6.Be3. Black to move. Which reply is good and simple?',
      moves: `${KID} f3 O-O Nge2`,
      orientation: 'black',
      choices: [
        { text: '6...c5', correct: true, why: 'Right. It hits d4 at once. After 7.Be3 Nc6 8.d5 Ne5 9.Ng3 you are in the 7.Nge2 line of Module 6.7.' },
        { text: '6...Ng4', why: 'The f3-pawn covers g4: 7.fxg4 wins the knight.' },
        { text: '6...Nxe4', why: 'The e4-pawn is guarded by the f3-pawn and the c3-knight. Black just loses a piece.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why is 6...c5 a natural reply to 6.Bg5?',
      choices: [
        { text: 'From g5 the bishop no longer guards d4, so Black hits it at once', correct: true, why: 'Right. With the bishop on e3, d4 has an extra defender. On g5, it doesn\'t.' },
        { text: 'It traps the bishop on g5', why: 'Nothing traps the bishop. The point is the d4-pawn.' },
        { text: 'It stops White from castling queenside', why: 'White can still castle queenside. ...c5 is a strike at the center, aimed at d4.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the quiet set-ups 6...c6 and 6...a6, what is Black aiming for?',
      choices: [
        { text: '...b5, to open lines on the queenside', correct: true, why: 'Right. The small pawn moves prepare ...b5, often against a king on the queenside.' },
        { text: '...f5 and a kingside attack', why: 'Those set-ups point at the queenside. ...f5 belongs to the ...e5 lines.' },
        { text: '...d5, giving up the King\'s Indian structure', why: "...d5 can come later, but the first idea of these set-ups is ...b5." }
      ]
    }
  ],
  key: { name: 'Sämisch: 6.Bg5 (Steiner Attack)', moves: `${KID} f3 O-O Bg5`, orientation: 'white' },
  terms: [
    { term: 'Double fianchetto', meaning: 'Both bishops placed on the long diagonals, with ...b6 and ...Bb7 as well as ...g6 and ...Bg7.' },
    { term: 'Sideline', meaning: 'A less common line. It can be perfectly sound; it is just played less often.' },
    { term: 'Transposition', meaning: 'Reaching the same position by a different move order.' }
  ]
})
