import { defineModule } from '../../../types'

const MODEL = 'e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7'
const EARLY_QUEEN = 'e4 e5 Qh5 Nc6 Bc4 g6 Qf3 Nf6 Nc3 Nd4 Qd1'

export default defineModule({
  id: '1.1',
  title: 'Three opening goals: center, pieces, king',
  minutes: 10,
  level: 1,
  goals: [
    'Know the three jobs of the opening: center, pieces, king',
    'See how 1.e4 e5 and the next few moves serve those jobs',
    'Learn why bringing the queen out early usually wastes time'
  ],
  intro:
    "Every strong opening, the Ruy Lopez included, is built on three simple goals. Grab a share of the center, bring your knights and bishops out, and get your king to safety. This module shows those goals in a real opening, and what happens when someone skips them.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'A model start',
      intro:
        'Moves are written like 1.e4: move 1, pawn to e4. The next module explains notation fully. For now, watch which goal each move serves.',
      moves: MODEL,
      start: 0,
      orientation: 'white',
      steps: {
        0: {
          title: 'The starting position',
          text: 'The four squares in the middle (d4, e4, d5, e5) are the center. Pieces placed near the center reach more of the board.',
          marks: ['d4', 'e4', 'd5', 'e5']
        },
        1: {
          title: 'Center first',
          text: '1.e4. The pawn takes a central square and attacks d5 and f5. It also opens lines for the queen and the f1-bishop.',
          arrows: [['e4', 'd5', 'yellow'], ['e4', 'f5', 'yellow'], ['f1', 'b5', 'blue']]
        },
        2: {
          title: 'Black claims a share',
          text: '1...e5. Black does the same thing. Now each side has a pawn in the center, and both bishops on the f-file can get out.',
          arrows: [['e5', 'd4', 'yellow'], ['e5', 'f4', 'yellow'], ['f8', 'c5', 'blue']]
        },
        3: {
          title: 'A piece with a purpose',
          text: "2.Nf3. White develops a knight toward the center, and it attacks the e5-pawn. One move, two goals: a new piece out and pressure on Black's center.",
          arrows: [['f3', 'e5', 'red']]
        },
        4: {
          title: 'Defend by developing',
          text: '2...Nc6. Black guards e5 with a knight. It defends the pawn and develops a piece at the same time, so no time is wasted.',
          arrows: [['c6', 'e5', 'green']]
        },
        5: {
          title: 'The bishop comes out',
          text: "3.Bb5. A second White piece is out. The bishop attacks the knight that guards e5. The f1-square is now empty, so White can castle next move.",
          arrows: [['b5', 'c6', 'yellow'], ['e1', 'g1', 'blue']]
        },
        6: {
          title: 'Black asks a question',
          text: "3...a6. The pawn attacks the bishop, so White has to decide where it goes. Chapter 2 is all about this move.",
          arrows: [['a6', 'b5', 'red']]
        },
        7: {
          title: 'Keep the bishop active',
          text: '4.Ba4. The bishop steps back but stays on the same diagonal, still looking at the c6-knight.',
          arrows: [['a4', 'c6', 'yellow']]
        },
        8: {
          title: 'Develop with a threat',
          text: '4...Nf6. Black brings out the second knight, and it attacks the e4-pawn. Both of Black\'s knights are now in play.',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'King to safety',
          text: "5.O-O. White castles: the king hops to g1 and the rook to f1. The king is out of the center, and the rook is closer to the middle. White has now met all three goals.",
          arrows: [['f1', 'e1', 'blue']],
          marks: ['g1']
        },
        10: {
          title: 'Black catches up',
          text: '5...Be7. Black develops the bishop and clears f8, so castling is possible next move. Both sides are following the same simple plan.',
          arrows: [['e8', 'g8', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Why not bring the queen out first?',
      body:
        "The queen is your strongest piece, so it looks tempting to use it right away. The problem is that it's also your most valuable piece. When a knight or bishop attacks it, the queen has to move, and your opponent has just developed a piece for free.\n\nEach move you spend moving the same piece again is a move you didn't spend bringing out a new one. Chess players call one move of time a **tempo**. Losing several tempi in the opening is how you fall behind."
    },
    {
      kind: 'walkthrough',
      title: 'The queen comes out too early',
      intro: 'Same first move, but this time White sends the queen out on move 2. Watch how Black answers every threat with a developing move.',
      moves: EARLY_QUEEN,
      start: 2,
      orientation: 'black',
      steps: {
        2: {
          title: 'Same start',
          text: '1.e4 e5. So far, so normal. Now White tries a shortcut.'
        },
        3: {
          title: 'The queen rushes out',
          text: '2.Qh5. The queen attacks the e5-pawn and looks at f7, the weakest square next to the black king. It looks scary, but no other White piece is out.',
          arrows: [['h5', 'e5', 'red'], ['h5', 'f7', 'red']],
          ann: '?!'
        },
        4: {
          title: 'Guard e5 with a piece',
          text: '2...Nc6. The knight defends e5 and develops. Be careful: 2...g6?? would lose to 3.Qxe5+, hitting the king and the h8-rook at once.',
          arrows: [['c6', 'e5', 'green']]
        },
        5: {
          title: 'A mate threat',
          text: '3.Bc4. Now the bishop and queen both aim at f7. White threatens 4.Qxf7, which would be checkmate. This is the famous Scholar\'s Mate idea.',
          arrows: [['h5', 'f7', 'red'], ['c4', 'f7', 'red']],
          marks: ['f7']
        },
        6: {
          title: 'Block and attack',
          text: '3...g6. The pawn blocks the queen\'s path to f7 and attacks the queen. White has to spend another move on it.',
          arrows: [['g6', 'h5', 'red']],
          ann: '!'
        },
        7: {
          title: 'The queen moves again',
          text: "4.Qf3. The queen renews the threat on f7 from a new square. But f3 is where White's g1-knight wanted to go, so the queen is in its way.",
          arrows: [['f3', 'f7', 'red']],
          marks: ['f3']
        },
        8: {
          title: 'Block with a knight',
          text: '4...Nf6. The knight shuts the f-file, so the mate threat is gone. Black has answered three threats and now has two knights out.',
          marks: ['f6', 'f7']
        },
        9: {
          title: 'White develops at last',
          text: '5.Nc3. A sensible move: the knight comes out and guards e4. But look at the queen on f3 and the empty c2-square next to it.',
          arrows: [['c3', 'e4', 'green']],
          marks: ['c2']
        },
        10: {
          title: 'Hitting the queen again',
          text: '5...Nd4. The knight attacks the queen and also threatens ...Nxc2+, which would fork the king and the a1-rook. Moving a knight twice is fine when it gains time like this.',
          arrows: [['d4', 'f3', 'red'], ['d4', 'c2', 'red']],
          ann: '!'
        },
        11: {
          title: 'Back where it started',
          text: '6.Qd1. The queen retreats and guards c2. It has made three moves and is back on its home square. Black has two active knights and is ready for ...Bg7 and castling.',
          arrows: [['d1', 'c2', 'green']],
          marks: ['d1']
        }
      }
    },
    {
      kind: 'tip',
      title: 'A checklist for your first ten moves',
      body:
        'Put a pawn in the center. Bring out knights and bishops, usually knights first. Castle. Try not to move the same piece twice, and keep the queen at home until your other pieces are out, unless you have a concrete reason.'
    }
  ],
  takeaway:
    'In the opening, fight for the center, develop your knights and bishops, and castle. An early queen sortie usually just gives your opponent free developing moves.',
  lookAhead:
    'Next you will learn to read chess notation, so you can follow every line in this course.',
  drills: [
    {
      title: 'Meet the early queen',
      prompt: "You're Black. White has brought the queen out on move 2. Answer each threat with a move that also develops or gains time.",
      moves: 'e4 e5 Qh5 Nc6 Bc4 g6 Qf3 Nf6',
      start: 3,
      side: 'black',
      hints: [
        'First guard e5 with a knight. Then block the queen with a pawn that attacks it. Then block the f-file with a piece.',
        'The moves are ...Nc6, ...g6 and ...Nf6.'
      ],
      success: 'Every threat was met by a useful move. White\'s queen has moved twice, and you have two knights out.'
    },
    {
      title: 'Punish the wandering queen',
      prompt: "You're Black. White's queen is on f3 and the c2-pawn has no defender. Find the knight move that attacks two things.",
      moves: EARLY_QUEEN.split(' ').slice(0, 10).join(' '),
      start: 9,
      side: 'black',
      hints: ['Your c6-knight can jump to a central square.', 'From d4 the knight attacks f3 and c2.'],
      success: '5...Nd4! hits the queen and threatens ...Nxc2+. The queen has to move yet again.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 1.e4 e5, why is 2.Nf3 such a good move?',
      moves: 'e4 e5',
      orientation: 'white',
      choices: [
        { text: 'It develops a piece and attacks the e5-pawn', correct: true, why: 'Right. It serves two goals at once: development and pressure on the center.' },
        { text: 'It gets the queen ready to attack f7', why: "The knight doesn't help the queen here. Its job is to develop and hit e5." },
        { text: 'It prepares to castle queenside', why: 'Moving the g1-knight clears the way to castle kingside, not queenside.' }
      ]
    },
    {
      type: 'move',
      prompt: "Black to move. White's queen attacks e5. Which move defends the pawn and develops a piece?",
      moves: 'e4 e5 Qh5',
      orientation: 'black',
      choices: [
        { text: '2...Nc6', correct: true, why: 'Yes. The knight guards e5 and comes into play.' },
        { text: '2...Nf6', why: 'It develops and attacks the queen, but 3.Qxe5+ takes the pawn with check.' },
        { text: '2...g6', why: 'It attacks the queen, but 3.Qxe5+ forks the king and the h8-rook.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is bringing the queen out early usually a mistake?',
      choices: [
        { text: 'Enemy pieces can attack it while they develop, so you lose time', correct: true, why: 'Exactly. Every time the queen must move, your opponent gets a free developing move.' },
        { text: 'The queen is not allowed to move before move 5', why: 'The queen can move whenever its path is clear. The problem is time, not the rules.' },
        { text: 'The queen is weak in the opening', why: "The queen is always strong. That's exactly why it has to run when a cheaper piece attacks it." }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does castling do for you?',
      choices: [
        { text: 'It moves the king away from the center and brings a rook toward the middle', correct: true, why: 'Right. Two jobs in one move: king safety and rook activity.' },
        { text: 'It attacks the enemy king', why: "Castling is a safety move. It doesn't attack anything by itself." },
        { text: 'It protects the center pawns', why: "The king on g1 doesn't guard e4 or d4. Castling is about king safety." }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move. White threatens 4.Qxf7 mate. Which move stops the threat and attacks the queen?',
      moves: 'e4 e5 Qh5 Nc6 Bc4',
      orientation: 'black',
      choices: [
        { text: '3...g6', correct: true, why: 'Yes. The pawn blocks the h5–f7 line and attacks the queen, so White loses another tempo.' },
        { text: '3...Nf6', why: 'It develops and hits the queen, but it allows 4.Qxf7, which is checkmate.' },
        { text: '3...Qe7', why: "It stops the mate by guarding f7, but it doesn't gain time and it blocks the f8-bishop." }
      ]
    },
    {
      type: 'plan',
      prompt: 'White to move. White has a center pawn and two pieces out. Which goal is still missing?',
      moves: 'e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6',
      orientation: 'white',
      choices: [
        { text: 'King safety: castle with 5.O-O', correct: true, why: 'Right. The f1-square is clear, so White can castle at once.' },
        { text: 'Space: push 5.a3', why: "An edge pawn move does little for the center, and it leaves the king in the middle." },
        { text: 'Attack: 5.Ng5, hitting f7', why: 'The knight moves a second time, and one attacker on f7 achieves nothing because the king guards it. Castle first.' }
      ]
    }
  ],
  key: { name: 'Early queen met by development: 4...Nf6', moves: 'e4 e5 Qh5 Nc6 Bc4 g6 Qf3 Nf6', orientation: 'black' },
  terms: [
    { term: 'Center', meaning: 'The four middle squares: d4, e4, d5 and e5. Pieces near them control more of the board.' },
    { term: 'Development', meaning: 'Moving knights and bishops off their starting squares so they can join the game.' },
    { term: 'Castling', meaning: 'A special move: the king goes two squares toward a rook, and the rook jumps over to the other side.' },
    { term: 'Tempo', meaning: 'One move of time. Gaining a tempo means making a useful move while forcing your opponent to waste one.' }
  ]
})
