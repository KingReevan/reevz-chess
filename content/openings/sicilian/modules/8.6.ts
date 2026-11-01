import { defineModule } from '../../../types'

/** bowdler: 2.Bc4 e6 3.Nc3 a6 4.a4 Nc6 */
const BOWDLER = 'e4 c5 Bc4 e6 Nc3 a6 a4 Nc6'
/** Engine-checked: 3.Nf3 d5 4.exd5 exd5 5.Bb5+ Nc6 (roughly equal) */
const D5_OK = 'e4 c5 Bc4 e6 Nf3 d5 exd5 exd5 Bb5+ Nc6'
/** Engine-checked: 3.Nc3 d5? 4.exd5 exd5 5.Qe2+ Be7 6.Nxd5 wins a pawn for White */
const D5_EARLY = 'e4 c5 Bc4 e6 Nc3 d5 exd5 exd5 Qe2+ Be7 Nxd5'

export default defineModule({
  id: '8.6',
  title: '2.Bc4: the Bowdler Attack',
  minutes: 10,
  level: 1,
  goals: [
    "Block the bishop's diagonal with 2...e6",
    'Hit the bishop with ...d5 when d5 is safe',
    'Count the attackers on d5 before you push'
  ],
  intro:
    "Many beginners answer 1...c5 with 2.Bc4, just as they would against 1...e5. The bishop points at f7, the weak square next to Black's king. It is not a bad move, but it gives Black an easy plan: shut the diagonal, then chase the bishop with a pawn.",
  sections: [
    {
      kind: 'walkthrough',
      title: '2...e6: shut the diagonal',
      intro: 'One pawn move takes the sting out of the bishop.',
      moves: BOWDLER,
      start: 2,
      orientation: 'black',
      steps: {
        2: {
          title: 'The Sicilian',
          text: '1...c5. White looks for something simple and aggressive.',
          arrows: [['f1', 'c4', 'blue']]
        },
        3: {
          title: 'The Bowdler Attack',
          text: '2.Bc4. The bishop aims at f7. Right now only Black\'s king guards that pawn.',
          arrows: [['c4', 'f7', 'red']],
          marks: ['f7']
        },
        4: {
          title: 'Shut the door',
          text: '2...e6. The pawn blocks the diagonal, so the bishop now hits a guarded pawn on e6 instead of f7. It also prepares ...d5, which will attack the bishop.',
          arrows: [['d7', 'd5', 'blue']],
          marks: ['e6'],
          ann: '!'
        },
        5: {
          title: 'White develops',
          text: '3.Nc3. The knight develops and watches d5, so ...d5 is harder for Black now.',
          arrows: [['c3', 'd5', 'red']]
        },
        6: {
          title: 'Threatening ...b5',
          text: '3...a6. Black prepares ...b5, which would chase the bishop from c4.',
          arrows: [['b7', 'b5', 'blue']]
        },
        7: {
          title: 'White stops it',
          text: '4.a4. Now ...b5 would be met by axb5. White keeps the bishop on c4.',
          arrows: [['a4', 'b5', 'green']]
        },
        8: {
          title: 'Calm development',
          text: '4...Nc6. Black develops. Next come ...Nf6 and, when it is safe, ...d5. The position is roughly equal and Black is comfortable.',
          arrows: [['g8', 'f6', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '...d5 gains time',
      intro: 'Against 3.Nf3, Black can play ...d5 at once. Count the attackers and defenders of d5 first.',
      moves: D5_OK,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The diagonal is shut',
          text: '2...e6. The bishop on c4 now bites on the e6-pawn.',
          marks: ['e6']
        },
        5: {
          title: 'The other knight',
          text: '3.Nf3. This time White develops the king\'s knight. Nothing new covers d5.',
          arrows: [['g1', 'f3', 'blue']]
        },
        6: {
          title: 'Two against two',
          text: '3...d5. The pawn attacks the bishop and e4. White\'s e4-pawn and bishop hit d5; Black\'s e6-pawn and queen guard it. That is enough.',
          arrows: [['d5', 'c4', 'red'], ['e6', 'd5', 'green'], ['d8', 'd5', 'green']]
        },
        7: {
          title: 'White trades',
          text: '4.exd5. White takes the pawn.',
          marks: ['d5']
        },
        8: {
          title: 'The pawn returns',
          text: '4...exd5. Black takes back. The new d5-pawn attacks the bishop again, and the queen guards it.',
          arrows: [['d5', 'c4', 'red'], ['d8', 'd5', 'green']]
        },
        9: {
          title: 'The bishop moves again',
          text: '5.Bb5+. The bishop has to move a second time. White uses a check, but Black has gained time and keeps a pawn in the center. Material is level.',
          arrows: [['b5', 'e8', 'red']]
        },
        10: {
          title: 'Block and develop',
          text: '5...Nc6. The knight blocks the check and develops. The position is roughly equal.',
          arrows: [['c6', 'd4', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Too early: 3...d5? against 3.Nc3',
      intro: 'Same idea, but now White has a knight on c3. Watch what changes.',
      moves: D5_EARLY,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The diagonal is shut',
          text: '2...e6. Same start as before.',
          marks: ['e6']
        },
        5: {
          title: 'A new attacker',
          text: '3.Nc3. This knight also hits d5. That changes the count.',
          arrows: [['c3', 'd5', 'red']]
        },
        6: {
          title: 'Pushing anyway',
          text: '3...d5. Now three White units hit d5: the e4-pawn, the bishop and the knight. Only two Black units guard it.',
          arrows: [['e4', 'd5', 'red'], ['c4', 'd5', 'red'], ['c3', 'd5', 'red']],
          ann: '?'
        },
        7: {
          title: 'White takes',
          text: '4.exd5. White captures on d5.',
          marks: ['d5']
        },
        8: {
          title: 'One defender left',
          text: '4...exd5. Black takes back, but now the d5-pawn is attacked by the bishop and the knight, and only the queen guards it.',
          arrows: [['c4', 'd5', 'red'], ['c3', 'd5', 'red'], ['d8', 'd5', 'green']]
        },
        9: {
          title: 'Check first',
          text: '5.Qe2+. The queen checks down the open e-file. Black should block: 5...Kd7 is legal but even worse.',
          arrows: [['e2', 'e8', 'red']],
          ann: '!'
        },
        10: {
          title: 'A pinned bishop',
          text: '5...Be7. The bishop blocks, but now it is pinned: it cannot move without exposing the king to the queen.',
          arrows: [['e2', 'e8', 'red']],
          marks: ['e7']
        },
        11: {
          title: 'The pawn falls',
          text: '6.Nxd5. White wins the pawn, and the knight also attacks the pinned bishop on e7. White is clearly better.',
          arrows: [['d5', 'e7', 'red']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Count before ...d5',
      body:
        "...d5 is Black's best way to hit the bishop, but only when d5 is guarded enough. Count White's attackers (the e4-pawn, the c4-bishop, a knight on c3) and your defenders (the e6-pawn, the queen, a knight on f6). If White has more, develop first with moves like ...Nf6 and ...Nc6."
    }
  ],
  takeaway:
    "Against 2.Bc4, play 2...e6: it shuts the bishop out of f7 and prepares ...d5. Push ...d5 only after counting: with a White knight on c3, prepare it first.",
  lookAhead:
    "Module 8.7 adds White's queen to the attack: 2.Qh5 and the Scholar's Mate trick.",
  drills: [
    {
      title: 'Shut the diagonal',
      prompt: "You're Black. White played 2.Bc4, aiming at f7. Block the bishop safely with a pawn, then prepare ...b5 and bring out your queen's knight.",
      moves: BOWDLER,
      start: 3,
      side: 'black',
      hints: ['Which pawn move blocks the c4–f7 diagonal without losing anything?', '...e6. Then ...a6 to prepare ...b5, and ...Nc6 to develop.'],
      success: '2...e6, 3...a6 and 4...Nc6. The bishop is blunted and Black is comfortable.'
    },
    {
      title: 'Punish the early ...d5',
      prompt: "You're White. Black played 3...d5? too early. Take on d5, give a check on the e-file, then win the pawn.",
      moves: D5_EARLY,
      start: 6,
      side: 'white',
      hints: ['First capture on d5 with the e-pawn.', 'After ...exd5, check with Qe2+. When Black blocks with ...Be7, the knight takes on d5.'],
      success: '4.exd5 exd5 5.Qe2+ Be7 6.Nxd5. White wins a pawn and hits the pinned bishop.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does the bishop on c4 aim at after 2.Bc4?',
      moves: 'e4 c5 Bc4',
      orientation: 'black',
      choices: [
        { text: "The f7-pawn, next to Black's king", correct: true, why: 'Yes. Before ...e6, only the king guards f7.' },
        { text: 'The c5-pawn', why: 'c5 is not on any of the bishop\'s diagonals from c4.' },
        { text: 'The d7-pawn', why: 'The bishop\'s diagonal goes c4–d5–e6–f7. It does not touch d7.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move after 2.Bc4. What is the calm, safe answer?',
      moves: 'e4 c5 Bc4',
      orientation: 'black',
      choices: [
        { text: '2...e6', correct: true, why: 'Right. It blocks the diagonal to f7 and prepares ...d5.' },
        { text: '2...d5', why: 'Too soon. After 3.exd5, Black cannot take back: ...Qxd5 would lose the queen to Bxd5. White wins a pawn.' },
        { text: '2...f6', why: 'This weakens the king badly. 3.Qh5+ g6 4.Qxc5 wins a pawn, and White is much better.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move after 2.Bc4 e6 3.Nc3. Why is 3...d5 a mistake here?',
      moves: 'e4 c5 Bc4 e6 Nc3',
      orientation: 'black',
      choices: [
        { text: 'After 4.exd5 exd5 5.Qe2+ Be7 6.Nxd5, White wins a pawn', correct: true, why: 'Yes. With the knight on c3, White has one more attacker on d5 than Black has defenders.' },
        { text: 'It shuts in the c8-bishop', why: 'The e6-pawn already did that. The trouble is the count on d5 after 4.exd5.' },
        { text: "It isn't a mistake: ...d5 always gains time", why: 'Only when d5 is guarded enough. Here White wins the pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does White answer 3...a6 with 4.a4?',
      moves: 'e4 c5 Bc4 e6 Nc3 a6 a4',
      orientation: 'white',
      choices: [
        { text: 'To stop ...b5, which would chase the bishop', correct: true, why: 'Right. Now ...b5 would be met by axb5.' },
        { text: 'To attack the a6-pawn', why: 'The a4-pawn attacks b5, not a6. It is a defensive move.' },
        { text: 'To bring the rook out via a3', why: 'Rook lifts are possible later, but the main point is to stop ...b5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'After 2.Bc4 e6, why is ...d5 fine against 3.Nf3 but a mistake against 3.Nc3?',
      choices: [
        { text: 'The c3-knight is an extra attacker of d5', correct: true, why: 'Exactly. Against 3.Nf3 it is two against two; against 3.Nc3 it is three against two.' },
        { text: 'The f3-knight blocks the queen check on e2', why: 'The queen check is not about f3. It is the extra attacker on d5 that matters.' },
        { text: 'Against 3.Nf3, Black can castle first', why: "Black can't castle after three moves. The difference is the count on d5." }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 2...e6 do against 2.Bc4?',
      choices: [
        { text: 'It blocks the diagonal to f7 and prepares ...d5', correct: true, why: 'Yes. One pawn move defends and prepares a counterattack.' },
        { text: 'It attacks the bishop at once', why: 'The e6-pawn attacks d5 and f5, not c4. The attack comes later with ...d5.' },
        { text: 'It stops White from castling', why: 'White can still castle. The point is the c4–f7 diagonal.' }
      ]
    }
  ],
  key: { name: 'Bowdler Attack: 2.Bc4 e6', moves: 'e4 c5 Bc4 e6', orientation: 'black' },
  terms: [
    { term: 'Bowdler Attack', meaning: 'The move 2.Bc4 against the Sicilian. The bishop aims at f7.' },
    { term: 'Gaining time', meaning: 'Making a useful move that also forces the opponent to react, for example by attacking a piece.' },
    { term: 'Pin', meaning: 'A piece cannot move without exposing a more valuable piece behind it, often the king.' }
  ]
})
