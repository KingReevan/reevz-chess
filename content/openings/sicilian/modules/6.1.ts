import { defineModule } from '../../../types'
import { TAIMANOV } from '../lines'

/** taimanov-be3-bd3: 5.Nc3 Qc7 6.Be3 a6 7.Bd3 Nf6 8.O-O Ne5 9.h3 Bc5 */
const BD3 = `${TAIMANOV} Nc3 Qc7 Be3 a6 Bd3 Nf6 O-O Ne5 h3 Bc5`
/** taimanov-qc7, first moves: 7.Qd2 Nf6 8.O-O-O Bb4 */
const BB4 = `${TAIMANOV} Nc3 Qc7 Be3 a6 Qd2 Nf6 O-O-O Bb4`
/** taimanov-qc7 up to 9.f3 */
const PIN = `${BB4} f3`
/** 9.Kb1? ignores the pin: 9...Nxe4! (engine-checked, Black clearly better) */
const KB1 = `${BB4} Kb1 Nxe4`

export default defineModule({
  id: '6.1',
  title: '4...Nc6: the Taimanov idea',
  minutes: 10,
  level: 2,
  goals: [
    'Understand why the Taimanov keeps the d-pawn at home',
    'Learn what ...Qc7 and ...a6 do',
    'Know where the pieces go: ...Ne5 and ...Bc5, or ...Bb4'
  ],
  intro:
    "After 2...e6 3.d4 cxd4 4.Nxd4, the move 4...Nc6 starts the Taimanov, named after Mark Taimanov. Black develops pieces first and leaves the d-pawn on d7. Why wait with the d-pawn, and where do Black's pieces go?",
  sections: [
    {
      kind: 'text',
      title: 'Why keep the d-pawn at home?',
      body:
        "In the 2...d6 Sicilians, Black decides about the d-pawn on move 2. In the Taimanov it stays on d7 for now. Later it can go to d6 for a Scheveningen center, jump to d5 in one move to hit e4, or simply stay home while the pieces do the work. White has to pick a set-up without knowing which.\n\n**The cost:** while the d-pawn is on d7, the c8-bishop is shut in, and the d6 square has no pawn guarding it. White's knights would love to land on d6 or b5. That is why ...a6 comes early."
    },
    {
      kind: 'walkthrough',
      title: 'Building the Taimanov',
      intro: "Watch Black's pieces come out one by one while the d-pawn stays on d7.",
      moves: BD3,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'Black chooses a system',
          text: '4.Nxd4. White has taken back on d4. After 2...e6, Black now picks a system: 4...Nc6 is the Taimanov, 4...a6 the Kan.',
          marks: ['d4']
        },
        8: {
          title: 'The Taimanov knight',
          text: '4...Nc6. The knight develops and hits the d4-knight, which the d1-queen defends. Notice the d-pawn: it is still on d7.',
          arrows: [['c6', 'd4', 'red'], ['d1', 'd4', 'green']],
          marks: ['d7']
        },
        9: {
          title: 'White develops',
          text: '5.Nc3. The second knight comes out. It guards e4 and watches d5 and b5.',
          arrows: [['c3', 'e4', 'green'], ['c3', 'b5', 'blue']]
        },
        10: {
          title: 'The queen to c7',
          text: '5...Qc7. The queen watches e5, so White cannot easily push e4–e5. It also leaves d8 free and keeps every pawn move open.',
          arrows: [['c7', 'e5', 'green']]
        },
        11: {
          title: 'Guarding d4',
          text: '6.Be3. The bishop develops and adds a second guard to the d4-knight.',
          arrows: [['e3', 'd4', 'green']]
        },
        12: {
          title: 'Taking b5 away',
          text: "6...a6. This small move takes b5 from White's knights and the f1-bishop. Without it, a knight on b5 would hit the queen on c7 and eye d6.",
          arrows: [['a6', 'b5', 'green']],
          marks: ['b5', 'd6']
        },
        13: {
          title: 'A quiet set-up',
          text: '7.Bd3. The bishop guards e4, and White gets ready to castle short. This is calmer than the English Attack.',
          arrows: [['d3', 'e4', 'green']]
        },
        14: {
          title: 'Hitting e4',
          text: '7...Nf6. The knight develops and attacks e4. The c3-knight and the d3-bishop both defend it, so the pawn is safe.',
          arrows: [['f6', 'e4', 'red'], ['c3', 'e4', 'green'], ['d3', 'e4', 'green']]
        },
        15: {
          title: 'White castles',
          text: '8.O-O. The king is safe and the f1-rook is ready to support f2–f4 later.',
          marks: ['g1']
        },
        16: {
          title: 'The knight jumps to e5',
          text: '8...Ne5. The c6-knight moves to a strong central square. It eyes the d3-bishop and the g4 square, where a knight would hit the e3-bishop.',
          arrows: [['e5', 'd3', 'red'], ['e5', 'g4', 'blue']],
          marks: ['g4']
        },
        17: {
          title: 'No knight on g4',
          text: '9.h3. White takes g4 away from both black knights, so the e3-bishop stays safe.',
          arrows: [['h3', 'g4', 'green']]
        },
        18: {
          title: 'Active dark squares',
          text: '9...Bc5. The bishop develops actively and puts pressure on d4. Black has four pieces out and the d-pawn is still on d7. The game is roughly level.',
          arrows: [['c5', 'd4', 'red']],
          marks: ['d7']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '...Bb4: the pin',
      intro: "From White's side. Against the sharper English Attack set-up, Black's bishop goes to b4 instead.",
      moves: PIN,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'Same position',
          text: "6...a6. This time White chooses the aggressive plan: Qd2 and castling queenside.",
          marks: ['b5']
        },
        13: {
          title: 'Queen to d2',
          text: '7.Qd2. The queen joins the e3-bishop and clears the way for O-O-O.',
          arrows: [['e1', 'c1', 'blue']]
        },
        14: {
          title: 'Pressure on e4',
          text: '7...Nf6. The knight attacks e4. For now only the c3-knight defends it.',
          arrows: [['f6', 'e4', 'red'], ['c3', 'e4', 'green']]
        },
        15: {
          title: 'Castling queenside',
          text: '8.O-O-O. The king goes to c1. Now look at the diagonal from b4 to d2: the c3-knight stands in front of the queen.',
          marks: ['c3', 'd2']
        },
        16: {
          title: 'The pin',
          text: '8...Bb4. The bishop pins the c3-knight to the queen. If the knight takes on e4, ...Bxd2 wins the queen. So ...Nxe4 is now a real threat.',
          arrows: [['b4', 'c3', 'red'], ['f6', 'e4', 'red']],
          marks: ['d2']
        },
        17: {
          title: 'f3 holds e4',
          text: '9.f3. The f-pawn guards e4 for good, and it is part of the English Attack plan with g4. White is slightly better. Module 6.2 shows how both sides go on.',
          arrows: [['f3', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'warning',
      title: "Don't ignore the pin",
      body:
        "If White plays a natural move like 9.Kb1? instead of 9.f3, Black takes 9...Nxe4!. The c3-knight cannot take back, because ...Bxd2 would win the queen. Black wins a pawn, and after 10.Qe1 Nxc3+ 11.bxc3 the pawns in front of White's king are broken up. Black is clearly better."
    }
  ],
  takeaway:
    'In the Taimanov, Black plays ...Nc6, ...Qc7, ...a6 and ...Nf6 while the d-pawn waits on d7. Then the pieces head for active dark squares: ...Ne5 and ...Bc5 against a quiet set-up, ...Bb4 against the English Attack.',
  lookAhead:
    "Module 6.2 looks at White's main set-ups against the Taimanov: the English Attack, the quiet Bd3 plan and the Be2 route into a Scheveningen.",
  drills: [
    {
      title: 'Build the Taimanov',
      prompt: "You're Black. White has just played 4.Nxd4. Set up the Taimanov against White's quiet Bd3 plan.",
      moves: BD3,
      start: 7,
      side: 'black',
      hints: [
        'Start with the knight that hits d4. Then the queen, then the pawn that guards b5.',
        '4...Nc6, 5...Qc7, 6...a6, 7...Nf6, then the knight to e5 and the bishop to c5.'
      ],
      success: "4...Nc6, ...Qc7, ...a6, ...Nf6, ...Ne5 and ...Bc5. Black's pieces are active and the d-pawn is still waiting on d7."
    },
    {
      title: 'Use the pin',
      prompt: "You're Black. Your bishop on b4 pins the c3-knight to White's queen. White has just played 9.Kb1?. Punish it.",
      moves: KB1,
      start: 16,
      side: 'black',
      hints: ['Which White pawn is attacked but only defended by a pinned piece?', 'Take on e4 with the knight.'],
      success: '9...Nxe4! The c3-knight cannot take back without losing the queen to ...Bxd2. Black wins a pawn.'
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'Which Sicilian is this?',
      moves: TAIMANOV,
      orientation: 'black',
      choices: [
        { text: 'The Taimanov', correct: true, why: 'Right. 2...e6 and 4...Nc6: Black develops the knight and keeps the d-pawn at home.' },
        { text: 'The Kan', why: 'The Kan is the other main ...e6 system, with 4...a6 instead of 4...Nc6.' },
        { text: 'The Four Knights', why: "The Four Knights needs both Black knights out, after 4...Nf6 5.Nc3 Nc6. Here Black's king's knight is still on g8." },
        { text: 'The Scheveningen', why: "The Scheveningen has pawns on d6 and e6. Here the d-pawn is still on d7." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does Black play 6...a6 here?',
      moves: `${TAIMANOV} Nc3 Qc7 Be3 a6`,
      orientation: 'black',
      choices: [
        { text: "To keep White's knights and bishop off b5", correct: true, why: 'Yes. A knight on b5 would hit the c7-queen and eye d6, a square no black pawn guards while the d-pawn is on d7.' },
        { text: 'To free the c8-bishop', why: 'The c8-bishop is still blocked by the d7-pawn. Only a d-pawn move would free it.' },
        { text: 'To defend the queen on c7', why: 'A pawn on a6 guards b5, not c7. The point is to stop a knight from reaching b5 in the first place.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Black has just played 8...Ne5. Why does White answer 9.h3?',
      moves: `${TAIMANOV} Nc3 Qc7 Be3 a6 Bd3 Nf6 O-O Ne5`,
      orientation: 'white',
      choices: [
        { text: 'To stop a knight from landing on g4 and hitting the e3-bishop', correct: true, why: 'Right. Both black knights can reach g4. After h3, that square is covered by a pawn.' },
        { text: 'To start a pawn storm with g4', why: "White has castled short, so a g-pawn storm would weaken White's own king. h3 is a defensive move." },
        { text: 'To give the king an escape square on h2', why: "White's king is not in danger of a back-rank mate here. The real point of h3 is the g4 square." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just played 9.Kb1?, ignoring the pin. What is best?',
      moves: `${BB4} Kb1`,
      orientation: 'black',
      choices: [
        { text: '9...Nxe4', correct: true, why: 'Yes. The c3-knight is pinned to the queen, so it cannot take back. Black wins a pawn and keeps the initiative.' },
        { text: '9...Bxc3', why: 'This gives up the pinning bishop for a knight. After 10.Qxc3 the game is roughly level. Keeping the pin and taking on e4 at once is much stronger.' },
        { text: '9...Nxd4', why: 'After 10.Qxd4 the knights are traded and the game is roughly level. The pin works best right now, on e4.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In the Taimanov line 5.Nc3 Qc7 6.Be3 a6 7.Bd3 Nf6 8.O-O Ne5 9.h3 Bc5, where is Black\'s d-pawn, and why does it matter?',
      choices: [
        { text: 'Still on d7, so Black can later choose ...d6, ...d5 or neither', correct: true, why: 'Right. Keeping the d-pawn at home is the whole Taimanov idea: the pawn structure stays flexible.' },
        { text: 'On d6, guarding e5', why: "Black never played ...d6 in this line. The knight on e5 is guarded by the c7-queen, not a pawn." },
        { text: 'On d5, attacking e4', why: "Black hasn't played ...d5. That break is possible later, but the pawn is still on d7." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Against the English Attack, Black plays ...Nf6 and ...Bb4. What does the bishop move threaten?',
      choices: [
        { text: '...Nxe4, because the pinned c3-knight cannot take back', correct: true, why: 'Yes. With the queen on d2 behind the knight, Nxe4 would allow ...Bxd2. That is why White plays f3.' },
        { text: '...Bxc3, winning a pawn', why: 'Taking on c3 is just a trade of bishop for knight. No pawn is won by it.' },
        { text: 'Nothing yet: it just develops the bishop', why: 'It does more than develop. The pin makes ...Nxe4 a real threat, which is why White answers 9.f3.' }
      ]
    }
  ],
  key: { name: 'Taimanov Variation: 4...Nc6', moves: TAIMANOV, orientation: 'black' },
  terms: [
    { term: 'Taimanov', meaning: 'The Sicilian with 2...e6 and 4...Nc6, named after Mark Taimanov. Black develops pieces and keeps the d-pawn at home.' },
    { term: 'Flexible structure', meaning: 'A pawn set-up that has not decided yet. Black can still choose where the pawns go, so White cannot plan against one fixed shape.' },
    { term: 'Relative pin', meaning: 'A piece that can legally move, but moving it would expose a more valuable piece behind it, like a knight in front of a queen.' }
  ]
})
