import { defineModule } from '../../../types'

/** kid-vs-e3: 4.Nf3 O-O 5.e3 d6 6.Be2 Nbd7 7.O-O e5 */
const E3 = 'd4 Nf6 c4 g6 Nc3 Bg7 Nf3 O-O e3 d6 Be2 Nbd7 O-O e5'
/** kid-vs-london: 2.Nf3 g6 3.Bf4, no c4 */
const LONDON = 'd4 Nf6 Nf3 g6 Bf4 Bg7 e3 O-O Be2 d6 h3 c5 c3'
/** The London without h3: ...Nh5 chases the bishop (engine-checked) */
const NO_H3 = 'd4 Nf6 Nf3 g6 Bf4 Bg7 e3 O-O Be2 d6 O-O Nh5 Bg5 h6 Bh4 g5 Bg3 Nxg3 hxg3'
/** The ...Nh5 line, ending on Black's 9...Nxg3 (drills end on the learner's move) */
const NO_H3_DRILL = 'd4 Nf6 Nf3 g6 Bf4 Bg7 e3 O-O Be2 d6 O-O Nh5 Bg5 h6 Bh4 g5 Bg3 Nxg3'
/** London up to 6.h3: Black to choose a break */
const LONDON_H3 = 'd4 Nf6 Nf3 g6 Bf4 Bg7 e3 O-O Be2 d6 h3'

export default defineModule({
  id: '8.9',
  title: 'Quiet set-ups: 5.e3 and the London',
  minutes: 10,
  level: 2,
  goals: [
    "Use the same King's Indian set-up against quiet White systems",
    'Answer 5.e3 with ...d6, ...Nbd7 and ...e5',
    'Meet the London with ...c5, and chase the bishop with ...Nh5 if White skips h3'
  ],
  intro:
    "Many club players avoid theory with quiet set-ups: a pawn on e3 instead of e4, or the London System, with an early Bf4 and no c4 at all. You will meet these a lot. The good news: you don't need new moves. The King's Indian set-up plus one central pawn break gives Black an easy game. Here is what to play, and why it works.",
  sections: [
    {
      kind: 'walkthrough',
      title: '5.e3: a smaller center',
      intro: 'Compare this with the main lines. White\'s e-pawn only goes one square.',
      moves: E3,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'A normal start',
          text: "4.Nf3 O-O. So far this is an ordinary King's Indian. Now White chooses a quiet move.",
          marks: ['g8']
        },
        9: {
          title: 'The quiet e3',
          text: "5.e3. The e-pawn goes only one square. It guards d4 and lets the bishop out, but White's center is smaller than with e4. This set-up is sometimes called the Semi-Classical.",
          arrows: [['e3', 'd4', 'green']],
          marks: ['e4']
        },
        10: {
          title: 'The usual set-up',
          text: '5...d6. Black carries on with the normal plan.',
          marks: ['d6']
        },
        11: {
          title: 'White develops',
          text: '6.Be2. White calmly gets ready to castle.',
          arrows: [['e1', 'g1', 'blue']]
        },
        12: {
          title: 'Prepare ...e5',
          text: '6...Nbd7. The knight backs up the ...e5 push.',
          arrows: [['d7', 'e5', 'green']]
        },
        13: {
          title: 'White castles',
          text: '7.O-O. Both kings are safe.',
          marks: ['g1']
        },
        14: {
          title: 'Black takes the center',
          text: '7...e5. Black stakes a claim in the center. With no white pawn on e4, the e5-pawn takes a fair share of the center, and Black is comfortable. The game is roughly level.',
          arrows: [['e5', 'd4', 'red']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The London System: ...c5',
      intro: 'No c4 at all. White builds a solid triangle with d4, e3 and c3, and puts the bishop on f4 first.',
      moves: LONDON,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: "Heading for the King's Indian",
          text: '1.d4 Nf6 2.Nf3 g6. Black aims for the usual set-up.',
          arrows: [['f8', 'g7', 'blue']]
        },
        5: {
          title: 'The London System',
          text: '3.Bf4. The London. The bishop comes out early to f4, outside White\'s pawn chain. White usually won\'t play c4.',
          arrows: [['c1', 'f4', 'blue']]
        },
        6: {
          title: 'Bishop to g7',
          text: '3...Bg7. Same as always.',
          arrows: [['g7', 'd4', 'yellow']]
        },
        7: {
          title: 'The pawn triangle',
          text: '4.e3. The pawn supports d4 and opens a path for the f1-bishop.',
          arrows: [['e3', 'd4', 'green']]
        },
        8: {
          title: 'Castle',
          text: '4...O-O. Black castles.',
          marks: ['g8']
        },
        9: {
          title: 'White develops',
          text: '5.Be2. White gets ready to castle.',
          marks: ['e2']
        },
        10: {
          title: 'Both breaks ready',
          text: '5...d6. Black keeps both central breaks in reserve: ...c5 or ...e5.',
          arrows: [['c7', 'c5', 'blue'], ['e7', 'e5', 'blue']]
        },
        11: {
          title: 'A home for the bishop',
          text: '6.h3. A useful move: it gives the f4-bishop a retreat square on h2. You will see why in a moment.',
          arrows: [['f4', 'h2', 'blue']]
        },
        12: {
          title: 'The ...c5 break',
          text: '6...c5. Black hits d4 from the side. Here ...c5 is better than ...e5, because the f4-bishop and the d4-pawn both hit e5.',
          arrows: [['c5', 'd4', 'red'], ['f4', 'e5', 'yellow']]
        },
        13: {
          title: 'A level game',
          text: '7.c3. White supports d4 with the c-pawn. The game is level, and Black has an easy position. Good next moves are ...Qb6 or ...cxd4.',
          arrows: [['c3', 'd4', 'green'], ['d8', 'b6', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'No h3? Chase the bishop with ...Nh5',
      intro: 'Same London, but this time White castles instead of playing h3. Now the f4-bishop has no retreat on h2.',
      moves: NO_H3,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'The same position',
          text: '5...d6. Black has the usual set-up. Watch what happens if White skips h3.',
          marks: ['h2']
        },
        11: {
          title: 'No h3',
          text: '6.O-O. A natural move, but the h2-square is still taken by a pawn. The f4-bishop has no safe home there.',
          marks: ['h2', 'f4']
        },
        12: {
          title: 'The knight attacks',
          text: '6...Nh5. The knight hits the f4-bishop. If White lets the knight take it, Black wins the bishop pair.',
          arrows: [['h5', 'f4', 'red']]
        },
        13: {
          title: 'The bishop runs',
          text: '7.Bg5. The bishop steps away from the knight.',
          arrows: [['f4', 'g5', 'blue']]
        },
        14: {
          title: 'Kick it again',
          text: '7...h6. Black chases the bishop once more.',
          arrows: [['h6', 'g5', 'red']]
        },
        15: {
          title: 'Bishop to h4',
          text: '8.Bh4. The bishop keeps running along the diagonal.',
          arrows: [['g5', 'h4', 'blue']]
        },
        16: {
          title: 'No more room',
          text: '8...g5. And again. The bishop has no comfortable square left.',
          arrows: [['g5', 'h4', 'red']]
        },
        17: {
          title: 'Into the knight\'s reach',
          text: '9.Bg3. The bishop retreats, but g3 is within reach of the h5-knight.',
          arrows: [['h5', 'g3', 'red']]
        },
        18: {
          title: 'Black takes',
          text: '9...Nxg3. Black trades the knight for the bishop.',
          marks: ['g3']
        },
        19: {
          title: 'The bishop pair',
          text: '10.hxg3. Black has the bishop pair. Black\'s kingside pawns have moved forward, so Black must be a little careful, but the game is level.',
          arrows: [['g7', 'd4', 'yellow'], ['c8', 'h3', 'yellow']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Your plan against quiet set-ups',
      body:
        "**Against 5.e3 (with c4):** ...Nf6, ...g6, ...Bg7, ...O-O and ...d6, then ...Nbd7 and ...e5.\n\n**Against the London (no c4):** the same five moves, then ...c5. Avoid an early ...e5 while the f4-bishop and the d4-pawn both hit e5. If White hasn't played h3, ...Nh5 chases the bishop.\n\n**Why it works:** White's pawns claim less of the center than in the main lines, so one break from Black takes a fair share of it. You never have to face the big c4–d4–e4 center. If you are White and like these set-ups, they are sound and level. Just remember h3 in the London, so the bishop has a home on h2."
    }
  ],
  takeaway:
    "Against quiet set-ups, keep the King's Indian set-up and add one central break: ...Nbd7 and ...e5 against 5.e3, ...c5 against the London. If the London player skips h3, ...Nh5 chases the bishop and wins the bishop pair.",
  lookAhead:
    "That completes the King's Indian course. Head to the Revision hub to practice with flashcards, the line trainer and the cheat sheet, then take the final exam.",
  drills: [
    {
      title: 'Meet 5.e3 as Black',
      prompt: "You're Black. White has played the quiet 5.e3. Finish your set-up, prepare the central break, then play it.",
      moves: E3,
      start: 9,
      side: 'black',
      hints: ['First the usual d-pawn move.', 'Then the queen\'s knight to d7 to back up ...e5, and push the e-pawn when you have castled and White has too.'],
      success: '5...d6, 6...Nbd7 and 7...e5. Black has a fair share of the center and an easy game.'
    },
    {
      title: 'Chase the London bishop',
      prompt: "You're Black. White castled without playing h3. Chase the f4-bishop until you can take it.",
      moves: NO_H3_DRILL,
      start: 11,
      side: 'black',
      hints: ['Your f6-knight can attack the bishop from h5.', 'Keep kicking it with pawns: first the h-pawn, then the g-pawn. When it lands on g3, take it.'],
      success: '...Nh5, ...h6, ...g5 and ...Nxg3. Black has won the bishop pair.'
    }
  ],
  quiz: [
    {
      type: 'plan',
      prompt: 'Against 5.e3, what is a simple, sound plan for Black?',
      choices: [
        { text: '...d6, ...Nbd7 and ...e5', correct: true, why: 'Right. With no white pawn on e4, the e5-pawn gives Black a fair share of the center.' },
        { text: 'A quick ...h5 and ...h4 pawn storm', why: "White's king is safe and the center is calm. Pushing the h-pawn only loosens Black's own king." },
        { text: 'Leave the center alone and wait', why: 'Waiting gives White a free hand. Black needs one central break.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the London System, why is h3 a useful move for White?',
      choices: [
        { text: 'It gives the f4-bishop a retreat on h2, so ...Nh5 can\'t win the bishop pair', correct: true, why: 'Yes. With h3 played, the bishop simply drops back to h2.' },
        { text: "It prepares g4 and a kingside attack", why: 'The London is a quiet system. h3 is mainly about the bishop.' },
        { text: "It stops Black from castling", why: 'Black castles without any trouble. h3 is about a retreat square for the bishop.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move in the London. White has played 6.h3. Which central break fits best?',
      moves: LONDON_H3,
      orientation: 'black',
      choices: [
        { text: '6...c5', correct: true, why: 'Right. It hits d4 from the side, and the game is level.' },
        { text: '6...e5', why: 'The f4-bishop and the d4-pawn both hit e5. After 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Bxe5, Black has lost a pawn.' },
        { text: '6...Nh5', why: 'With h3 played, the bishop just retreats to h2, and the knight on h5 is out of play.' }
      ]
    },
    {
      type: 'concept',
      prompt: "Why does the King's Indian set-up work so well against quiet systems?",
      choices: [
        { text: "White's pawns claim less of the center, so one black break takes a fair share", correct: true, why: "Exactly. Without the big c4–d4–e4 center, Black's ...e5 or ...c5 is enough for an easy game." },
        { text: 'Quiet systems are bad, and Black wins by force', why: 'They are sound, and the positions are level. Black is comfortable, not winning.' },
        { text: "White can't castle in these systems", why: 'White castles normally. The point is the smaller center.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move. White castled in the London without playing h3. What is a good way to bother the f4-bishop?',
      moves: 'd4 Nf6 Nf3 g6 Bf4 Bg7 e3 O-O Be2 d6 O-O',
      orientation: 'black',
      choices: [
        { text: '6...Nh5', correct: true, why: 'Right. The knight hits the bishop, which has no retreat on h2. Black can win the bishop pair.' },
        { text: '6...g5', why: 'The g5-pawn is attacked by the bishop and the f3-knight and has no defender. White just takes it.' },
        { text: '6...e5', why: 'The f4-bishop and the d4-pawn both hit e5, and after 7.dxe5 White is better.' }
      ]
    },
    {
      type: 'name',
      prompt: 'White has played 1.d4, 2.Nf3 and 3.Bf4 with no c4. What is this system called?',
      moves: 'd4 Nf6 Nf3 g6 Bf4',
      orientation: 'black',
      choices: [
        { text: 'The London System', correct: true, why: 'Yes. An early Bf4 with e3 and c3 is the London.' },
        { text: 'The Fianchetto Variation', why: 'In the Fianchetto, White puts the king\'s bishop on g2.' },
        { text: 'The Averbakh', why: 'The Averbakh has pawns on c4, d4 and e4, and the bishop goes to g5.' }
      ]
    }
  ],
  key: { name: "King's Indian set-up vs the London: 6...c5", moves: LONDON.split(' ').slice(0, 12).join(' '), orientation: 'black' },
  terms: [
    { term: 'London System', meaning: 'A quiet set-up for White with d4, Nf3, an early Bf4, e3 and c3, usually without c4.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one. Strong in open positions.' },
    { term: 'Retreat square', meaning: 'A safe square a piece can step back to when it is attacked.' }
  ]
})
