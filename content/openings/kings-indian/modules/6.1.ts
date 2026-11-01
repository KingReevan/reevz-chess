import { defineModule } from '../../../types'
import { KID, SAMISCH } from '../lines'

/** Bagirov–Gufeld, Kirovabad 1973 (model-bagirov-gufeld-1973), up to 9.Bh6. Reaches the King's Indian by 1.d4 g6. */
const GUFELD_SETUP = 'd4 g6 c4 Bg7 Nc3 d6 e4 Nf6 f3 O-O Be3 Nc6 Nge2 Rb8 Qd2 a6 Bh6'
/** kid-6be3 up to 8.Bh4: the same bishop move without f3 */
const NO_F3 = `${KID} Nf3 O-O Be3 Ng4 Bg5 h6 Bh4`

export default defineModule({
  id: '6.1',
  title: "5.f3: White's plan",
  minutes: 10,
  level: 3,
  goals: [
    'See the two jobs of the pawn on f3: guarding e4 and covering g4',
    "Know White's set-up: Be3, Qd2, Nge2, often O-O-O and a kingside attack",
    'Name the price: no Nf3, a slow kingside and weaker dark squares'
  ],
  intro:
    "In the Sämisch, White's fifth move is a pawn move, not a developing move. 5.f3 looks slow, so what does White get for it? This module shows the set-up White is aiming for, why the pawn on f3 makes it possible, and what it costs.",
  sections: [
    {
      kind: 'walkthrough',
      title: "White's set-up in a real game",
      intro:
        'This is the start of Bagirov–Gufeld, 1973. Watch where each White piece goes, and why the pawn on f3 lets it go there.',
      moves: GUFELD_SETUP,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'A familiar position',
          text: "4...Nf6. This game began 1.d4 g6, but after four moves each we have the usual King's Indian position. Black's knight attacks e4, and White now picks a pawn move instead of 5.Nf3.",
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'A pawn guards e4',
          text: "5.f3. The pawn defends e4 for good, so Black's ...Nxe4 tricks never work. It also covers g4, so a black knight can't land there.",
          arrows: [['f3', 'e4', 'green'], ['f3', 'g4', 'green']]
        },
        10: {
          title: 'Black castles first',
          text: "5...O-O. Black gets the king safe, as usual, and waits to see White's set-up before choosing a plan."
        },
        11: {
          title: 'The bishop comes to e3',
          text: '6.Be3. The main move. With g4 covered, no black knight can jump at this bishop. It guards d4 and clears the way for White to castle queenside later.',
          arrows: [['e3', 'd4', 'green']]
        },
        12: {
          title: 'Black aims at d4',
          text: '6...Nc6. The knight develops and adds pressure on d4. Black is getting ready for ...Rb8, ...a6 and ...b5, a plan that Module 6.8 covers.',
          arrows: [['c6', 'd4', 'red']]
        },
        13: {
          title: 'The knight goes to e2',
          text: '7.Nge2. The f3-pawn has taken the knight\'s usual square, so it goes to e2. It defends d4 from there, but for now it blocks the f1-bishop.',
          arrows: [['e2', 'd4', 'green']],
          marks: ['f1']
        },
        14: {
          title: 'The rook gets ready',
          text: '7...Rb8. The rook steps behind the b-pawn, so it will support ...b5 and stand on the b-file if that file opens.',
          arrows: [['b7', 'b5', 'blue']]
        },
        15: {
          title: 'Queen and bishop line up',
          text: '8.Qd2. The queen and the e3-bishop now stand on the same diagonal, aiming at h6. The back rank is also clearing, so White can castle queenside.',
          arrows: [['e3', 'h6', 'yellow']]
        },
        16: {
          title: 'Supporting ...b5',
          text: '8...a6. Now ...b5 is ready. If White takes with cxb5, Black recaptures with the a-pawn. If Black gets to take on c4 instead, the b-file half-opens for the rook.',
          arrows: [['a6', 'b5', 'green']]
        },
        17: {
          title: 'The point of the set-up',
          text: "9.Bh6. White offers to trade the dark-squared bishops. Without the g7-bishop, Black's king loses its best defender. Module 6.2 follows this game further.",
          arrows: [['h6', 'g7', 'yellow']],
          marks: ['g7']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Why not 5.Nf3 and 6.Be3?',
      intro: 'Here is the same bishop move without the pawn on f3. Watch the g4 square.',
      moves: NO_F3,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'The same starting point',
          text: '4...d6. This time White develops the knight first and then tries the same bishop move.'
        },
        9: {
          title: 'The natural move',
          text: '5.Nf3. The knight goes to its best square. But now no White pawn covers g4.',
          marks: ['g4']
        },
        10: {
          title: 'Black castles',
          text: '5...O-O. Black castles, just as in the Sämisch.'
        },
        11: {
          title: 'Bishop to e3 again',
          text: '6.Be3. The bishop goes to e3, as in the Sämisch. Here nothing stops the black knight from jumping to g4.',
          arrows: [['f6', 'g4', 'blue']]
        },
        12: {
          title: 'The knight attacks',
          text: '6...Ng4. This is the Larsen Variation. The knight hits the bishop, and if White ignores it, ...Nxe3 takes the bishop and wins Black the bishop pair.',
          arrows: [['g4', 'e3', 'red']]
        },
        13: {
          title: 'The bishop moves again',
          text: '7.Bg5. White keeps the bishop, but this is its second move.'
        },
        14: {
          title: 'Another attack',
          text: '7...h6. Black kicks the bishop again.',
          arrows: [['h6', 'g5', 'red']]
        },
        15: {
          title: 'Three moves for one bishop',
          text: '8.Bh4. White has spent three moves on one bishop, and ...g5 can chase it once more. Module 5.8 shows this line. In the Sämisch, the pawn on f3 stops all of this.',
          arrows: [['g7', 'g5', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'What 5.f3 costs',
      body:
        "Every plan has a price. The Sämisch pays in three ways.\n\n**No knight on f3.** The g1-knight has to go to e2 (or sometimes h3). On e2 it blocks the f1-bishop, so White's kingside develops slowly.\n\n**A late king.** Because the kingside is slow, White's king often castles queenside instead. That is why Sämisch games so often have the kings on opposite sides.\n\n**Weaker dark squares.** The f-pawn has left f2, so the squares near White's king, such as e3, f2 and g3, and the diagonal from e1 to h4 are easier for Black to use. Black's ...c5 gambit (Module 6.6) and the ...Qh4+ check (Modules 6.3 and 6.4) both aim at these squares."
    },
    {
      kind: 'history',
      title: 'Where the name comes from',
      body:
        'The variation is named after Friedrich Sämisch, who developed it in the 1920s. It is rarer at the very top today, but club players meet it often, because the plan is easy to understand and dangerous.'
    }
  ],
  takeaway:
    '5.f3 guards e4 and keeps Black\'s knight off g4, so White can play Be3, Qd2 and often O-O-O with a kingside attack. The price is a knight on e2, a slow kingside and weaker dark squares near White\'s king.',
  lookAhead:
    "Module 6.2 follows Bagirov–Gufeld further: White trades bishops with Bh6 and opens the h-file, and Black answers with the counterattack known as Gufeld's \"Mona Lisa\".",
  drills: [
    {
      title: "Play White's set-up",
      prompt: "You're White. Black has just played 4...Nf6. Build the Sämisch set-up from Bagirov–Gufeld: four moves.",
      moves: 'd4 g6 c4 Bg7 Nc3 d6 e4 Nf6 f3 O-O Be3 Nc6 Nge2 Rb8 Qd2',
      start: 8,
      side: 'white',
      hints: [
        'Start by guarding e4 with a pawn.',
        'Then bishop to e3, knight to e2 and queen to d2.'
      ],
      success: '5.f3, 6.Be3, 7.Nge2 and 8.Qd2. The queen and bishop now aim at h6, and White can castle queenside.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What are the two jobs of the pawn on f3?',
      choices: [
        { text: 'It guards e4 and covers g4', correct: true, why: 'Right. ...Nxe4 tricks fail, and a black knight on g4 would simply be taken.' },
        { text: 'It guards e4 and gets ready for f3–f4', why: 'White rarely pushes the pawn on in the Sämisch. It stays on f3 to hold e4. The Four Pawns Attack (Chapter 7) plays f4 at once.' },
        { text: "It makes White's king safer", why: 'The opposite. The pawn has left f2, so the dark squares near the king, like g3 and f2, become weaker.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does 6.Be3 work better after 5.f3 than after 5.Nf3?',
      choices: [
        { text: 'After 5.Nf3, ...Ng4 can attack the bishop. The f3-pawn stops that.', correct: true, why: 'Exactly. In the Sämisch, a knight on g4 would be taken by the f3-pawn, so the bishop is safe on e3.' },
        { text: 'After 5.f3, the bishop on e3 defends the e4-pawn', why: "A bishop on e3 doesn't touch e4. The f3-pawn is what guards e4." },
        { text: 'After 5.Nf3, Black can trade queens at once', why: "Nothing like that happens. The problem with 5.Nf3 and 6.Be3 is the knight jump ...Ng4." }
      ]
    },
    {
      type: 'plan',
      prompt: "In the Sämisch, where does White's king often go?",
      choices: [
        { text: 'To the queenside, after Be3 and Qd2', correct: true, why: "Right. The queenside pieces develop quickly, while the kingside is slow, and with the king on c1 White's kingside pawns are free to attack." },
        { text: 'To the kingside, as early as possible', why: 'Kingside castling is possible, but the knight on e2 and the bishop on f1 have to move first, and the f3-pawn has left the king a little more open.' },
        { text: 'It stays in the center for the whole game', why: 'A king in the middle is a target once lines open. White castles, usually queenside.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which of these is a real cost of 5.f3?',
      choices: [
        { text: 'The knight goes to e2 and blocks the f1-bishop for a while', correct: true, why: 'Yes. The f3 square is taken, so the kingside develops slowly.' },
        { text: 'White can no longer castle', why: 'White can still castle on either side. The Sämisch often castles queenside.' },
        { text: 'The e4-pawn becomes weak', why: 'The opposite. The f3-pawn makes e4 very solid.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'Name this set-up.',
      moves: SAMISCH,
      orientation: 'white',
      choices: [
        { text: 'The Sämisch Variation', correct: true, why: 'Right. 5.f3 and 6.Be3: the pawn guards e4 and the bishop is safe from ...Ng4.' },
        { text: 'The Four Pawns Attack', why: 'The Four Pawns plays 5.f4, pushing the pawn two squares. Here it stopped on f3.' },
        { text: 'The Classical Variation', why: 'The Classical develops the knight with 5.Nf3. Here the f3 square holds a pawn.' },
        { text: 'The Averbakh Variation', why: 'The Averbakh is 5.Be2 and 6.Bg5. Here White played 5.f3 and 6.Be3.' }
      ]
    },
    {
      type: 'concept',
      prompt: "After 5.f3, which squares near White's king get weaker?",
      choices: [
        { text: 'Dark squares such as e3, f2 and g3, and the e1–h4 diagonal', correct: true, why: 'Right. The f-pawn used to guard e3 and g3 and block that diagonal. Black aims at these squares with ...c5 or ...Qh4+.' },
        { text: 'The light squares e4 and g4', why: 'The f3-pawn now guards e4 and g4, so those squares get stronger.' },
        { text: 'None: 5.f3 makes the king safer', why: 'Every pawn move leaves something behind. The f-pawn no longer guards e3 and g3.' }
      ]
    }
  ],
  key: { name: 'Sämisch Variation: 5.f3 O-O 6.Be3', moves: SAMISCH, orientation: 'white' },
  terms: [
    { term: 'Sämisch Variation', meaning: "The King's Indian line 5.f3. White guards e4 with a pawn, plays Be3 and Qd2, and often castles queenside." },
    { term: 'Battery', meaning: 'Two pieces lined up on the same line, like the queen on d2 and the bishop on e3 aiming at h6.' },
    { term: 'Dark squares', meaning: 'The dark-colored squares, like e3, f2 and g3. Pawns never move backward, so once the pawns that guarded them have moved, only pieces can cover them.' }
  ]
})
