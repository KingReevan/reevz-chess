import { defineModule } from '../../../types'
import { RUY, BERLIN } from '../../../lines'

const STEINITZ = `${RUY} d6 d4 Bd7`

export default defineModule({
  id: '1.6',
  title: "Map of Black's defenses",
  minutes: 10,
  level: 1,
  goals: [
    "Know Black's main answers to 3.Bb5 and the idea behind each",
    'Group the defenses by what they do about e5 and the bishop',
    'Know where in this course each defense is taught'
  ],
  intro:
    "After 3.Bb5, Black has many reasonable moves. That sounds like a lot to learn, but almost every defense follows one of a few simple ideas. This module gives you the map, so you always know where you are and which chapter to open.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Question the bishop: 3...a6',
      intro: 'The most popular reply, and the road to most of this course.',
      moves: `${RUY} a6 Ba4 Nf6 O-O`,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: "Black's big choice",
          text: 'The two most popular replies are 3...a6 and 3...Nf6. We start with the first one.',
          arrows: [['a7', 'a6', 'blue'], ['g8', 'f6', 'blue']]
        },
        6: {
          title: 'The Morphy Defense',
          text: '3...a6. Black asks the bishop to decide at once: take the knight or step back. Chapter 2 starts here.',
          arrows: [['a6', 'b5', 'red']]
        },
        7: {
          title: 'White keeps the pressure',
          text: '4.Ba4. The usual retreat. If White takes on c6 instead, that is the Exchange Variation, which has its own chapter (Chapter 3).',
          arrows: [['a4', 'c6', 'yellow'], ['b5', 'c6', 'blue']]
        },
        8: {
          title: 'Develop and hit e4',
          text: '4...Nf6. Black brings out a knight and attacks the e4-pawn.',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'The big fork in the road',
          text: '5.O-O. Now Black chooses again. 5...Be7 leads to the Closed Ruy Lopez (Chapters 4 and 5), and 5...Nxe4 to the Open Defense (Chapter 6).',
          arrows: [['f8', 'e7', 'blue'], ['f6', 'e4', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Hit e4 at once: 3...Nf6',
      intro: 'The second most popular reply skips ...a6 and goes straight for the e4-pawn.',
      moves: `${BERLIN} O-O Nxe4 d4 Nd6`,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'Back at move 3',
          text: 'Same position. This time Black counterattacks instead of questioning the bishop.',
          arrows: [['g8', 'f6', 'blue']]
        },
        6: {
          title: 'The Berlin Defense',
          text: '3...Nf6. Black develops with an attack on e4. This is the Berlin Defense, the subject of Chapter 7.',
          arrows: [['f6', 'e4', 'red']]
        },
        7: {
          title: 'White castles anyway',
          text: '4.O-O. As in the main line, White gets the king safe first and lets e4 go for now.',
          marks: ['e4']
        },
        8: {
          title: 'Black takes the pawn',
          text: "4...Nxe4. Black grabs the pawn. White's answer has to be quick, because Black's king is still in the center.",
          marks: ['e4', 'e8']
        },
        9: {
          title: 'Strike in the center',
          text: '5.d4. White attacks e5 and opens lines toward the black king.',
          arrows: [['d4', 'e5', 'red']]
        },
        10: {
          title: 'Toward the Berlin endgame',
          text: '5...Nd6. The knight retreats and attacks the b5-bishop. In the main line, the queens soon come off: the famous Berlin endgame.',
          arrows: [['d6', 'b5', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Hold e5 directly: 3...d6',
      intro: 'Some defenses simply add another defender to e5. Watch the hidden cost.',
      moves: STEINITZ,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'A third approach',
          text: 'Black can also just protect e5 with a pawn.',
          arrows: [['d7', 'd6', 'blue']]
        },
        6: {
          title: 'The Old Steinitz Defense',
          text: '3...d6. The pawn guards e5. But the d7-square is now empty, so the bishop pins the c6-knight to the king. That knight cannot move at all.',
          arrows: [['b5', 'e8', 'red']],
          marks: ['c6']
        },
        7: {
          title: 'Pressure on e5',
          text: '4.d4. Two White pieces hit e5. The pinned knight cannot recapture on e5, so Black is under real pressure.',
          arrows: [['d4', 'e5', 'red'], ['f3', 'e5', 'red']]
        },
        8: {
          title: 'Breaking the pin',
          text: "4...Bd7. The bishop steps in between, so the knight is free again. Black is solid but cramped, and usually has to give up the center with ...exd4 later. That's Module 8.5.",
          arrows: [['d7', 'c6', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The other defenses',
      body:
        "**Counterattack e4.** 3...f5, the **Schliemann** (also called the Jaenisch Gambit), hits e4 at once and opens the f-file. Sharp and risky (Modules 8.1–8.2).\n\n**Develop actively elsewhere.** 3...Bc5, the **Classical** (or Cordel) Defense, puts the bishop on an active diagonal but doesn't guard e5 (8.3). 3...Nd4, **Bird's Defense**, trades knights so a black pawn lands on d4 (8.4).\n\n**Support e5.** Besides 3...d6, Black can fianchetto with 3...g6 so a bishop on g7 guards e5 (the **Fianchetto Defense**), or play 3...Nge7, the **Cozio**, so a knight can recapture on c6 (both in 8.6).\n\nA few other third moves exist, like 3...f6 or 3...Qf6, but they are doubtful and almost never seen at master level."
    },
    {
      kind: 'tip',
      title: 'Where to start',
      body:
        "Learn 3...a6 first. It leads to the main lines that both sides need to know. The Berlin is the next most important defense. The rest of Chapter 8 can wait until you meet them in your own games."
    }
  ],
  takeaway:
    "Black's main replies to 3.Bb5 are 3...a6 (question the bishop), 3...Nf6 (hit e4 at once) and moves that support e5 or counterattack. 3...a6 is the most popular and leads to most of this course.",
  lookAhead:
    'Chapter 2 follows the main road: 3...a6 and the moves that lead to the Closed Ruy Lopez.',
  drills: [
    {
      title: 'Play the Berlin',
      prompt: "You're Black. Answer 3.Bb5 by hitting e4 at once, and take the pawn when White castles.",
      moves: `${BERLIN} O-O Nxe4`,
      start: 4,
      side: 'black',
      hints: ['Develop the g8-knight with an attack on e4.', 'After 4.O-O nothing guards e4, so the knight can take it.'],
      success: '3...Nf6 and 4...Nxe4: the Berlin Defense. Chapter 7 shows what happens next.'
    },
    {
      title: 'Break the pin',
      prompt: "You're Black. You played 3...d6 and White hit e5 with 4.d4. Your c6-knight is pinned. Free it.",
      moves: STEINITZ,
      start: 6,
      side: 'black',
      hints: ['Put a piece between the bishop and your king.', 'The c8-bishop can go to d7.'],
      success: '4...Bd7 breaks the pin, so the knight can defend again.'
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'Which defense has Black chosen?',
      moves: `${RUY} a6`,
      orientation: 'black',
      choices: [
        { text: 'The Morphy Defense', correct: true, why: 'Right. 3...a6 is the Morphy Defense, the most popular reply.' },
        { text: 'The Berlin Defense', why: 'The Berlin is 3...Nf6, attacking e4.' },
        { text: 'The Old Steinitz Defense', why: 'The Old Steinitz is 3...d6, guarding e5 with a pawn.' }
      ]
    },
    {
      type: 'name',
      prompt: 'Which defense has Black chosen?',
      moves: `${RUY} f5`,
      orientation: 'black',
      choices: [
        { text: 'The Schliemann Defense', correct: true, why: 'Yes. 3...f5 hits e4 and opens the f-file. It is also called the Jaenisch Gambit.' },
        { text: 'The Classical Defense', why: 'The Classical is 3...Bc5, a bishop move.' },
        { text: "Bird's Defense", why: "Bird's Defense is 3...Nd4, offering a knight trade." }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the most popular reply to 3.Bb5?',
      choices: [
        { text: '3...a6', correct: true, why: 'Right. The Morphy Defense is the main road, and most of this course grows from it.' },
        { text: '3...Nf6', why: 'The Berlin is very popular too, but it comes second, after 3...a6.' },
        { text: '3...d6', why: '3...d6 is rare today. It is solid but leaves Black cramped.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 3...d6, why is the c6-knight pinned?',
      moves: `${RUY} d6`,
      orientation: 'black',
      choices: [
        { text: "The d7-square is empty, so the bishop on b5 lines up with Black's king", correct: true, why: 'Exactly. If the knight moved, the king would be in check, so it cannot move at all.' },
        { text: "White's knight on f3 attacks it", why: "The f3-knight doesn't attack c6. The pin comes from the bishop and the king behind." },
        { text: 'The pawn on d6 blocks it', why: 'The pawn blocks the c8-bishop, not the knight. The problem is the empty d7-square.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Which defense has Black chosen?',
      moves: BERLIN,
      orientation: 'black',
      choices: [
        { text: 'The Berlin Defense', correct: true, why: 'Right. 3...Nf6 develops with an immediate attack on e4.' },
        { text: 'The Morphy Defense', why: 'The Morphy Defense is 3...a6. Here Black skipped it.' },
        { text: 'The Cozio Defense', why: 'The Cozio is 3...Nge7, a knight move to e7, not f6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which defense supports e5 with a bishop on g7?',
      choices: [
        { text: 'The Fianchetto Defense, 3...g6', correct: true, why: 'Yes. After ...g6 and ...Bg7, the bishop guards e5 from the long diagonal.' },
        { text: 'The Classical Defense, 3...Bc5', why: "The bishop goes to c5 there, and it doesn't guard e5." },
        { text: "Bird's Defense, 3...Nd4", why: 'That is a knight move that offers a trade. No bishop goes to g7.' }
      ]
    }
  ],
  key: { name: 'Old Steinitz: 4...Bd7 breaks the pin', moves: STEINITZ, orientation: 'black' },
  terms: [
    { term: 'Defense', meaning: "A named set of moves for Black, such as the Berlin Defense. Black's choices in an opening are usually called defenses." },
    { term: 'Pin', meaning: 'A piece cannot move without exposing a more valuable piece behind it. If that piece is the king, the move is illegal.' },
    { term: 'Fianchetto', meaning: 'Developing a bishop on the long diagonal, for example ...g6 and ...Bg7.' }
  ]
})
