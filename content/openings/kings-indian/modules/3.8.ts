import { defineModule } from '../../../types'
import { MDP } from '../lines'

/** mdp-11g4, then the engine's main line: Black locks the kingside */
const LOCK = `${MDP} g4 f4 h4 Bf6 Ng2 Kh8 g5 Bg7`
/** 11...fxg4?! (engine line) */
const TAKE = `${MDP} g4 fxg4 fxg4 Rxf1+ Kxf1`

export default defineModule({
  id: '3.8',
  title: 'When White blocks the kingside: 11.g4',
  minutes: 10,
  level: 2,
  goals: [
    "Understand White's idea behind 11.g4, the Benko Attack",
    'Answer it with 11...f4, not 11...fxg4',
    'See how the game changes when the g-file stays shut'
  ],
  intro:
    'Everything in this chapter has aimed at ...g4 and the g-file. What if White blocks that plan at once, by putting a pawn on g4 first? This module shows the Benko Attack, Black\'s best reply, and how the game changes when the g-file stays shut.',
  sections: [
    {
      kind: 'walkthrough',
      title: 'Black locks the kingside',
      intro: 'Watch the g-file. By the end, both g-pawns are stuck.',
      moves: LOCK,
      start: 20,
      orientation: 'black',
      steps: {
        20: {
          title: 'The usual lever',
          text: 'The position after 10...f5. In Module 3.3 White played 11.Be3, and Black went for ...f4, ...g5 and ...g4. This time White tries to stop that plan at once.',
          arrows: [['f5', 'e4', 'red']]
        },
        21: {
          title: 'The Benko Attack',
          text: "11.g4. White's g-pawn hits f5 and takes the g4-square before Black's g-pawn can get there.",
          arrows: [['g4', 'f5', 'red']],
          marks: ['g4']
        },
        22: {
          title: 'Push past',
          text: "11...f4. Black closes the kingside, as in the main line. This is one of the engine's top choices.",
          marks: ['f4']
        },
        23: {
          title: 'More space',
          text: '12.h4. White grabs more space. The plan is g4–g5, which will shut the kingside.',
          arrows: [['g4', 'g5', 'blue']]
        },
        24: {
          title: 'A target for the bishop',
          text: "12...Bf6. The g7-bishop finally gets a target: the h4-pawn, which nothing guards yet.",
          arrows: [['f6', 'h4', 'red']]
        },
        25: {
          title: 'The knight defends',
          text: "13.Ng2. The knight guards h4. Notice where it went: g2, not d3. In this line White's knight is busy on the kingside instead of supporting c4–c5.",
          arrows: [['g2', 'h4', 'green']]
        },
        26: {
          title: 'A quiet move',
          text: '13...Kh8. The engine\'s choice. Black tucks the king into the corner and waits to see White\'s plan.',
          marks: ['h8']
        },
        27: {
          title: 'The lock',
          text: '14.g5. The pawn kicks the bishop and fixes the kingside pawns.',
          arrows: [['g5', 'f6', 'red']]
        },
        28: {
          title: 'The g-file stays shut',
          text: "14...Bg7. The bishop goes home. Look at the kingside: Black's g-pawn is stuck on g6, so it can't reach g4 and the g-file stays shut. Black's only pawn lever left there is ...h6, hitting g5. The engine calls the position roughly equal.",
          arrows: [['h7', 'h6', 'blue']],
          marks: ['g5', 'g6']
        }
      }
    },
    {
      kind: 'text',
      title: 'What changes when the g-file stays shut',
      body:
        "In the main line, Black's attack runs on one idea: ...g5–g4 to open the g-file at White's king. After 11.g4 that idea is gone, because White's pawn got to g4 first.\n\nSo the race slows down. Neither side can open the kingside quickly, and patient piece play matters more. Black looks for other targets: the h4-pawn, the ...h6 lever, and later play in the center with ...c6.\n\nThe price for White is real too. g4 and h4 loosen the pawns around White's own king, and that is why top players rarely choose 11.g4."
    },
    {
      kind: 'walkthrough',
      title: "Don't take on g4",
      intro: 'Taking the g4-pawn looks natural. It is the same mistake as ...fxe4 in Module 3.2.',
      moves: TAKE,
      start: 20,
      orientation: 'black',
      steps: {
        20: {
          title: 'Same position',
          text: 'The position after 10...f5 again.',
          arrows: [['f5', 'e4', 'red']]
        },
        21: {
          title: 'The Benko Attack',
          text: '11.g4. The g-pawn hits f5.',
          arrows: [['g4', 'f5', 'red'], ['f5', 'g4', 'blue']]
        },
        22: {
          title: 'Black takes',
          text: '11...fxg4. Black releases the tension. It opens the f-file, but White can take back with a pawn.',
          ann: '?!'
        },
        23: {
          title: 'A pawn takes back',
          text: "12.fxg4. White's f-pawn recaptures. Now White has pawns on e4 and g4, and the f-file is open.",
          arrows: [['f1', 'f8', 'blue']],
          marks: ['e4', 'g4']
        },
        24: {
          title: 'Rooks come off',
          text: '12...Rxf1+. Black trades rooks on the open file.',
          arrows: [['f8', 'f1', 'red']]
        },
        25: {
          title: 'No play left',
          text: "13.Kxf1. Black's f-pawn is gone, and with it the usual kingside plan. White's space is bigger than ever, and White's edge is bigger than after 11...f4.",
          marks: ['e4', 'g4']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Know the plan, not just the moves',
      body:
        "11.g4 is rare at the top, but it can surprise someone who only knows the ...g5–g4 plan. If you understand why Black plays ...f4 and ...g4, you can adapt: lock the kingside with ...f4, then look for new targets instead of forcing the usual break."
    }
  ],
  takeaway:
    '11.g4, the Benko Attack, stops ...g4 before it starts. Answer it with 11...f4, not 11...fxg4. With the g-file shut the race slows down, and Black turns to new targets like h4 and the ...h6 lever.',
  lookAhead:
    'Chapter 4 switches sides: how White plays the queenside attack in the main line, with c4–c5, the c-file and the c7 square.',
  drills: [
    {
      title: 'Lock it and find a target',
      prompt: "You're Black. White plays the Benko Attack, 11.g4. Close the kingside, and when White pushes the h-pawn, give your g7-bishop a target.",
      moves: `${MDP} g4 f4 h4 Bf6`,
      start: 20,
      side: 'black',
      hints: ["Don't take on g4. Push the f-pawn past instead.", 'After 12.h4, the h4-pawn is unguarded. Which bishop can attack it?'],
      success: '11...f4 and 12...Bf6. The kingside is closed, and the bishop has a target on h4.'
    },
    {
      title: 'Punish ...fxg4',
      prompt: "You're White this time. Black answered 11.g4 with 11...fxg4?!. Take back with a pawn, so that White keeps pawns on e4 and g4.",
      moves: `${MDP} g4 fxg4 fxg4`,
      start: 21,
      side: 'white',
      hints: ['Take back with a pawn, not a piece.', 'Your f3-pawn can take on g4.'],
      success: "12.fxg4. White keeps pawns on e4 and g4, and Black has little kingside play left."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the main idea of 11.g4?',
      moves: `${MDP} g4`,
      orientation: 'black',
      choices: [
        { text: 'To keep the kingside closed, so Black never gets the ...g4 break', correct: true, why: "Right. White's pawn takes g4 first, and after h4–g5 the g-file stays shut." },
        { text: 'To win the f5-pawn', why: 'If White takes on f5, Black takes back. 11.g4 is about the g4-square, not about winning a pawn.' },
        { text: "To start a mating attack against Black's king", why: "White's own king is on the same side. 11.g4 is mainly a defensive idea." }
      ]
    },
    {
      type: 'move',
      prompt: "Black to move after 11.g4. What is Black's best reply?",
      moves: `${MDP} g4`,
      orientation: 'black',
      choices: [
        { text: '11...f4', correct: true, why: 'Right. Black closes the kingside and keeps the f-pawn as a wedge.' },
        { text: '11...fxg4', why: "12.fxg4 keeps White's pawns on e4 and g4, opens the f-file, and leaves Black with little kingside play." },
        { text: '11...fxe4', why: 'Same problem: 12.fxe4 and the f3-pawn takes back. Releasing the tension helps White.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 14.g5 Bg7, which kingside pawn lever does Black still have?',
      moves: LOCK,
      orientation: 'black',
      choices: [
        { text: '...h6, hitting g5', correct: true, why: 'Right. It is the only kingside pawn move left that attacks a white pawn.' },
        { text: '...g5–g4', why: "Black's g-pawn is stuck on g6, blocked by White's pawn on g5." },
        { text: '...f3', why: "The f3-square is taken by White's pawn. Black's f-pawn is blocked on f4." }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 11.g4 cost White?',
      choices: [
        { text: "It loosens the pawns around White's own king", correct: true, why: 'Right. That is why 11.g4 is rare at the top level.' },
        { text: 'It loses a pawn', why: 'No material is lost. If ...fxg4, White takes back with the f-pawn.' },
        { text: "It stops White's queenside attack", why: 'White can still play on the queenside. The cost is on the kingside, around White\'s king.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why is 11...fxg4 a poor answer to the Benko Attack?',
      choices: [
        { text: "White takes back with the f-pawn: the center holds and Black has little kingside play left", correct: true, why: 'Right. It is the same lesson as ...fxe4 in Module 3.2: do not release the tension when a pawn can take back.' },
        { text: 'It loses a piece', why: 'Material stays level. The problem is the pawn structure.' },
        { text: "It isn't poor: it opens the f-file for Black's rook", why: 'The f-file opens for both sides, the rooks come off, and White keeps the space.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 11.g4 f4 12.h4 Bf6 13.Ng2 Kh8 14.g5 Bg7, how has the game changed?',
      moves: LOCK,
      orientation: 'black',
      choices: [
        { text: 'The race slows down: neither side can open the kingside quickly, so patient piece play matters more', correct: true, why: 'Right. Without the ...g4 break, Black needs new targets.' },
        { text: "Black's attack is faster, because White's king has lost its pawn cover", why: "White's king is looser, but with the pawns locked Black has no quick way in." },
        { text: 'White must now attack on the kingside instead of the queenside', why: "White's plans on the queenside are still there. The kingside is simply locked." }
      ]
    }
  ],
  key: { name: 'Benko Attack: 11.g4', moves: `${MDP} g4`, orientation: 'black' },
  terms: [
    { term: 'Prophylaxis', meaning: "A move that stops the opponent's plan before it starts, like 11.g4 against ...g4." },
    { term: 'Locked pawns', meaning: 'Pawns that block each other head-on and cannot move, like g5 and g6.' },
    { term: 'Weakening', meaning: 'A pawn move that leaves squares near your own king without pawn protection.' }
  ]
})
