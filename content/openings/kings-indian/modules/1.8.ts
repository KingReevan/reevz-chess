import { defineModule } from '../../../types'
import { KID } from '../lines'

/** kid-3nf3-order: the same position as 5.Nf3 O-O */
const NF3_FIRST = 'd4 Nf6 c4 g6 Nf3 Bg7 Nc3 O-O e4 d6'
/** kid-3g3-order: the Fianchetto Variation */
const G3 = 'd4 Nf6 c4 g6 g3 Bg7 Bg2 O-O Nc3 d6 Nf3'
/** kid-vs-london */
const LONDON = 'd4 Nf6 Nf3 g6 Bf4 Bg7 e3 O-O Be2 d6 h3 c5 c3'
/** kid-vs-london up to 6...c5, for the drill */
const LONDON_C5 = 'd4 Nf6 Nf3 g6 Bf4 Bg7 e3 O-O Be2 d6 h3 c5'
/** kid-5be2-order up to 6.Nf3 */
const BE2_FIRST = `${KID} Be2 O-O Nf3`

export default defineModule({
  id: '1.8',
  title: 'Same position, different move orders',
  minutes: 10,
  level: 1,
  goals: [
    'See how 3.Nf3, 2.Nf3 and 5.Be2 lead back to the same positions',
    'Recognize when g3 instead of e4 means the Fianchetto Variation',
    'Use the same set-up against the London System'
  ],
  intro:
    "White doesn't always play 3.Nc3 and 4.e4. Some players start with Nf3, some play g3, and some never play c4 at all. Does that mean you need a new opening for each? Mostly not. This module shows how different move orders arrive at the same positions, and how your set-up stays the same.",
  sections: [
    {
      kind: 'walkthrough',
      title: '3.Nf3: a different road, the same place',
      intro: 'White plays the knight to f3 before Nc3 and e4. Watch where the pieces end up.',
      moves: NF3_FIRST,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The usual start',
          text: '2...g6. So far everything is the same as in the main line.',
          arrows: [['f8', 'g7', 'blue']]
        },
        5: {
          title: 'The knight comes first',
          text: '3.Nf3. White develops the kingside knight first. It still guards d4, as in the main line.',
          arrows: [['f3', 'd4', 'green']]
        },
        6: {
          title: 'Same answer',
          text: '3...Bg7. Black doesn\'t care about the order. The bishop goes to g7 as usual.',
          arrows: [['g7', 'a1', 'blue']]
        },
        7: {
          title: 'The other knight',
          text: '4.Nc3. Now both white knights are out, but White has not played e4 yet.',
          arrows: [['e2', 'e4', 'blue']]
        },
        8: {
          title: 'Castling is safe here',
          text: "4...O-O. With no pawn on e4, White can't push e4–e5 next move, so Black can castle before ...d6.",
          marks: ['g8']
        },
        9: {
          title: 'White builds the center',
          text: '5.e4. Now the e-pawn arrives, and e4–e5 is a real idea.',
          arrows: [['e4', 'e5', 'red']]
        },
        10: {
          title: 'The same position',
          text: '5...d6. Black guards e5 at once. This is exactly the position from 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O. The road was different; the place is the same.',
          arrows: [['d6', 'e5', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'More roads to the same place',
      body:
        "**2.Nf3.** 1.d4 Nf6 2.Nf3 g6 3.c4 Bg7 4.Nc3 O-O 5.e4 d6 reaches exactly the same position again.\n\n**5.Be2 first.** After 4...d6, White can play 5.Be2 before Nf3. If White follows with 6.Nf3, Black plays 6...e5 and it is the Classical Variation again. But 5.Be2 O-O 6.Bg5 is the **Averbakh**, and 6.Be3 the Semi-Averbakh: different systems, taught in Chapter 7.\n\nThe lesson: watch the position, not the move numbers. If the same pieces stand on the same squares, it is the same position, however it was reached. Players call this a **transposition**."
    },
    {
      kind: 'walkthrough',
      title: '3.g3: the Fianchetto Variation',
      intro: 'Here White fianchettoes too, and plays Nc3 and Nf3 but not e4.',
      moves: G3,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The usual start',
          text: '2...g6. Black is ready for the fianchetto.',
          arrows: [['f8', 'g7', 'blue']]
        },
        5: {
          title: 'White copies the idea',
          text: '3.g3. White makes room for a bishop on g2.',
          arrows: [['f1', 'g2', 'blue']]
        },
        6: {
          title: 'Black carries on',
          text: '3...Bg7. Black\'s plan doesn\'t change.',
          arrows: [['f8', 'g7', 'green']]
        },
        7: {
          title: "White's fianchetto",
          text: "4.Bg2. White's bishop sits on the other long diagonal, h1–a8. It will guard White's king and look at the center and the queenside.",
          arrows: [['g2', 'a8', 'blue']]
        },
        8: {
          title: 'Castle',
          text: '4...O-O. With no white pawn on e4, there is no e4–e5 to worry about, so Black castles.',
          marks: ['g8']
        },
        9: {
          title: 'Knight out',
          text: '5.Nc3. White develops the queenside knight.',
          arrows: [['b1', 'c3', 'blue']]
        },
        10: {
          title: 'The set-up is complete',
          text: '5...d6. Black has the full King\'s Indian set-up.',
          marks: ['d6']
        },
        11: {
          title: 'The Fianchetto Variation',
          text: "6.Nf3. White's bishop on g2 makes a kingside attack much harder for Black, so the game becomes calmer. This is the Fianchetto Variation, taught in Chapter 8.",
          marks: ['g2']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Against the London System',
      intro: "Many club players start 1.d4, 2.Nf3 and 3.Bf4, the London System, and never play c4. Black's set-up still works.",
      moves: LONDON,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'No c4 here',
          text: '2...g6. White played 2.Nf3 instead of 2.c4. Black starts the fianchetto anyway.',
          arrows: [['f8', 'g7', 'blue']]
        },
        5: {
          title: 'The London bishop',
          text: '3.Bf4. The bishop comes out early. This is the London System.',
          arrows: [['c1', 'f4', 'blue']]
        },
        6: {
          title: 'Fianchetto',
          text: '3...Bg7. The same move as always.',
          arrows: [['f8', 'g7', 'green']]
        },
        7: {
          title: 'A small center',
          text: "4.e3. White builds a solid pawn chain with d4 and e3. It is smaller than the King's Indian center.",
          marks: ['d4', 'e3']
        },
        8: {
          title: 'Castle',
          text: '4...O-O. Black gets the king safe.',
          marks: ['g8']
        },
        9: {
          title: 'White develops',
          text: '5.Be2. White gets ready to castle.',
          arrows: [['f1', 'e2', 'blue']]
        },
        10: {
          title: 'The full set-up',
          text: '5...d6. The King\'s Indian set-up is complete, even though White never played c4 or e4.',
          marks: ['d6']
        },
        11: {
          title: 'A retreat square',
          text: '6.h3. This gives the f4-bishop a retreat square on h2, in case Black chases it with ...Nh5.',
          arrows: [['f4', 'h2', 'blue']]
        },
        12: {
          title: 'The break',
          text: '6...c5. Now Black strikes at d4, just like in Module 1.7.',
          arrows: [['c5', 'd4', 'red']]
        },
        13: {
          title: 'Level and comfortable',
          text: '7.c3. White props up d4. The position is level, and Black has a sound, familiar set-up. A central break with ...Nbd7 and ...e5 is also possible.',
          arrows: [['c3', 'd4', 'green']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'One rule for the move order',
      body:
        "Against almost anything, Black plays ...Nf6, ...g6, ...Bg7, ...O-O and ...d6. The only thing to watch: once White has a pawn on e4, play ...d6 before White can push e4–e5 (Module 1.4)."
    }
  ],
  takeaway:
    'Different move orders often reach the same position. Black keeps the same set-up (...Nf6, ...g6, ...Bg7, ...O-O, ...d6) and only needs ...d6 in time once White has played e4.',
  lookAhead:
    "Next, Module 1.9 draws the map: every White system you'll meet, and the chapter that teaches it.",
  drills: [
    {
      title: 'Set up against the London',
      prompt: "You're Black. White plays the London System: 3.Bf4, 4.e3, 5.Be2 and 6.h3. Build your set-up and finish with the ...c5 break.",
      moves: LONDON_C5,
      start: 4,
      side: 'black',
      hints: ['Fianchetto, castle, then the d-pawn one square.', '3...Bg7, 4...O-O, 5...d6 and 6...c5.'],
      success: 'The same set-up as always, and a central break. Against the London the position is level and easy to play.'
    },
    {
      title: 'Back to the Classical',
      prompt: "You're White. Play 5.Be2 first, and after 5...O-O play the knight to f3. That brings the game back to the Classical.",
      moves: BE2_FIRST,
      start: 8,
      side: 'white',
      hints: ['The f1-bishop goes to e2 first.', '5.Be2, then 6.Nf3.'],
      success: 'After 6...e5 this is the Classical Variation again. Had you played 6.Bg5 instead, it would be the Averbakh.'
    }
  ],
  quiz: [
    {
      type: 'order',
      prompt: '1.d4 Nf6 2.c4 g6 3.Nf3 Bg7 4.Nc3 O-O 5.e4 d6. Which position is this?',
      moves: NF3_FIRST,
      orientation: 'black',
      choices: [
        { text: 'The same as 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O', correct: true, why: 'Right. Every piece is on the same square. The move order was different, nothing else.' },
        { text: 'The Fianchetto Variation', why: "In the Fianchetto Variation White plays g3 and Bg2. Here White's bishop is still on f1." },
        { text: 'The Sämisch', why: 'The Sämisch has a white pawn on f3. Here White has a knight on f3.' }
      ]
    },
    {
      type: 'name',
      prompt: 'White has played g3 and Bg2 instead of e4. Which system is this?',
      moves: G3,
      orientation: 'black',
      choices: [
        { text: 'The Fianchetto Variation', correct: true, why: "Yes. White's bishop on g2 guards the king and makes Black's kingside attack harder. Chapter 8 teaches it." },
        { text: 'The Classical Variation', why: 'In the Classical White plays e4, Nf3 and Be2. Here there is no pawn on e4.' },
        { text: 'The Four Pawns Attack', why: 'The Four Pawns has pawns on c4, d4, e4 and f4. Here White has only two center pawns.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the 3.Nf3 order, why is it fine for Black to castle with 4...O-O before playing ...d6?',
      choices: [
        { text: "White hasn't played e4 yet, so e4–e5 can't kick the knight; when e4 comes, Black plays ...d6 at once", correct: true, why: 'Exactly. The danger in Module 1.4 only exists once a white pawn stands on e4.' },
        { text: 'Castling is always better than ...d6', why: 'Not always. Once White has a pawn on e4, ...d6 should come first.' },
        { text: 'White is not allowed to play e4 after Nf3', why: 'White can play e4 at any time. Here White does, on move 5.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Against the London System (no c4), what should Black do?',
      moves: LONDON,
      orientation: 'black',
      choices: [
        { text: 'Keep the same set-up: ...g6, ...Bg7, ...O-O, ...d6, then a central break like ...c5', correct: true, why: 'Right. The set-up works well, and the position is level.' },
        { text: "Switch to a different opening, because the set-up doesn't work without c4", why: "It works fine. Black's plan doesn't depend on White playing c4." },
        { text: 'Skip castling and attack the f4-bishop with pawns', why: 'Your king comes first. Castle, finish the set-up, then strike in the center.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'After 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Be2 O-O, which White move turns it into the Classical Variation?',
      moves: `${KID} Be2 O-O`,
      orientation: 'white',
      choices: [
        { text: '6.Nf3', correct: true, why: 'Yes. With the knight on f3 and the bishop on e2, it is the Classical. Black answers 6...e5.' },
        { text: '6.Bg5', why: 'That is the Averbakh, a different system (Chapter 7).' },
        { text: '6.Be3', why: 'That is the Semi-Averbakh, where Black often answers 6...c5 (Module 7.9).' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the London line 1.d4 Nf6 2.Nf3 g6 3.Bf4 Bg7 4.e3 O-O 5.Be2 d6, why does White play 6.h3?',
      moves: 'd4 Nf6 Nf3 g6 Bf4 Bg7 e3 O-O Be2 d6 h3',
      orientation: 'white',
      choices: [
        { text: 'To give the f4-bishop a retreat square on h2 if Black plays ...Nh5', correct: true, why: 'Right. Without h3, ...Nh5 can chase the bishop.' },
        { text: "To start a pawn storm against Black's king", why: 'One quiet pawn move is not a storm. Its job is to make room on h2 for the bishop.' },
        { text: 'To stop Black from castling', why: 'Black has already castled. h3 is about the f4-bishop.' }
      ]
    }
  ],
  key: { name: 'Move order: 3.g3 Bg7 4.Bg2 O-O 5.Nc3 d6 6.Nf3 (the Fianchetto)', moves: G3, orientation: 'black' },
  terms: [
    { term: 'Transposition', meaning: 'Reaching the same position by a different order of moves.' },
    { term: 'Move order', meaning: 'The sequence in which moves are played. Different orders can lead to the same place, or allow different replies.' },
    { term: 'London System', meaning: 'A White set-up with d4, Nf3, Bf4 and e3, usually without c4.' }
  ]
})
