import { defineModule } from '../../../types'
import { KID, CLASSICAL } from '../lines'

/** grunfeld-3d5: the same first moves, but 3...d5 */
const GRUNFELD = 'd4 Nf6 c4 g6 Nc3 d5'
/** kid-3nc3-bg7 plus 4.e4: the big center, before 4...d6 */
const BEFORE_D6 = 'd4 Nf6 c4 g6 Nc3 Bg7 e4'

export default defineModule({
  id: '1.1',
  title: "Meet the King's Indian",
  minutes: 10,
  level: 1,
  goals: [
    "Play the four moves of the King's Indian set-up",
    'Understand the hypermodern idea: let White build a center, then hit it',
    "Tell the King's Indian apart from the Grünfeld (3...d5)"
  ],
  intro:
    "Most beginners learn to grab the center with pawns. In the King's Indian, Black does the opposite: Black lets White build a big pawn center and plans to attack it later. Why would that work? This module shows the moves that start the opening and the idea behind each one.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The four moves',
      intro: 'Press Next and watch the four center squares: d4, e4, d5 and e5.',
      moves: KID,
      start: 0,
      orientation: 'black',
      steps: {
        0: {
          title: 'Where the fight is',
          text: 'Both sides want to control the four center squares. Pieces and pawns there have the most room to move.',
          marks: ['d4', 'e4', 'd5', 'e5']
        },
        1: {
          title: 'White takes a center square',
          text: '1.d4. White puts a pawn in the center. It controls e5 and c5, and it opens a diagonal for the c1-bishop.',
          marks: ['d4']
        },
        2: {
          title: 'A knight that watches e4',
          text: "1...Nf6. Black develops a knight. It controls e4, so White can't play 2.e4 yet: the knight would simply take the pawn.",
          arrows: [['f6', 'e4', 'red']]
        },
        3: {
          title: 'More space for White',
          text: '2.c4. A second pawn joins the fight. It controls d5, and it gives White more room on the queenside.',
          arrows: [['c4', 'd5', 'yellow']]
        },
        4: {
          title: 'A door for the bishop',
          text: '2...g6. This small pawn move makes room for the f8-bishop. It is the first sign of the King\'s Indian.',
          arrows: [['f8', 'g7', 'blue']]
        },
        5: {
          title: 'White prepares e4',
          text: '3.Nc3. The knight develops and guards e4. Now White is ready to push the e-pawn two squares.',
          arrows: [['e2', 'e4', 'green']]
        },
        6: {
          title: 'The fianchetto',
          text: '3...Bg7. The bishop sits on the long diagonal from h8 to a1. A bishop placed like this is called a fianchetto. For now the f6-knight blocks its view, but once the knight moves, the bishop looks straight at the center.',
          arrows: [['g7', 'a1', 'blue']]
        },
        7: {
          title: 'The big center',
          text: '4.e4. White now has three pawns side by side on c4, d4 and e4. Black has allowed this on purpose.',
          marks: ['c4', 'd4', 'e4']
        },
        8: {
          title: "The King's Indian",
          text: "4...d6. The pawn guards e5, so if White pushes e4–e5 to kick the knight, Black can take the pawn. This position is the King's Indian Defense.",
          arrows: [['d6', 'e5', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The hypermodern idea',
      body:
        "The old rule says: put pawns in the center early. The **hypermodern** idea says something different: control the center from a distance with pieces first, and challenge it with pawns later.\n\nThat is exactly Black's plan in the King's Indian. First, put the bishop on g7 and castle. Second, let White build the big center. Third, strike at it with a pawn: **...e5** or **...c5**. A big center gives White space, but it can also become a target.\n\nWhite's job is the mirror image: use the extra space well, finish developing, and make sure the center never turns into a weakness."
    },
    {
      kind: 'walkthrough',
      title: 'The idea in action',
      intro: "Here is the most common way the opening continues. Watch how Black first gets the king safe, and only then hits White's center.",
      moves: CLASSICAL,
      start: 8,
      orientation: 'black',
      steps: {
        8: {
          title: 'The set-up is ready',
          text: "White has the big center. Black's pieces are ready, but the king is still on e8.",
          marks: ['c4', 'd4', 'e4']
        },
        9: {
          title: 'White develops',
          text: '5.Nf3. The knight develops and guards d4. White is getting ready to castle too.',
          arrows: [['f3', 'd4', 'green']]
        },
        10: {
          title: 'King to safety',
          text: '5...O-O. Black castles. The king hides on g8, behind the g7-bishop and a wall of pawns.',
          marks: ['g8', 'g7']
        },
        11: {
          title: 'One more developing move',
          text: '6.Be2. White gets ready to castle. White still has the big center.',
          arrows: [['e1', 'g1', 'blue']]
        },
        12: {
          title: 'The strike',
          text: "6...e5. Now Black hits back. The e5-pawn attacks White's d4-pawn from the side. This is the first of Black's two pawn breaks, and Module 1.6 explains it.",
          arrows: [['e5', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Not to be confused: 3...d5',
      intro: 'The first two moves are the same as in the King\'s Indian. Watch what changes on move three.',
      moves: GRUNFELD,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The same start',
          text: 'After 1.d4 Nf6 2.c4 g6 Black is heading for a fianchetto. But this position can lead to two different openings.',
          arrows: [['f8', 'g7', 'blue']]
        },
        5: {
          title: 'White wants e4',
          text: '3.Nc3. White is ready to play e2–e4 and build the big center.',
          arrows: [['e2', 'e4', 'green']]
        },
        6: {
          title: 'Black hits back at once',
          text: "3...d5. Black puts a pawn in the center at once and challenges White's pawns straight away. This is the Grünfeld Defense, a different opening that this course does not teach. In the King's Indian, Black plays 3...Bg7 and 4...d6 and lets White have e4.",
          marks: ['d5']
        }
      }
    },
    {
      kind: 'history',
      title: 'Where the name comes from',
      body:
        "The \"Indian\" in the name honors Moheschunder Bannerjee, a Bengali player who used set-ups with ...g6 and ...d6 against John Cochrane in Calcutta in the mid-1800s. Sources disagree on who first called it the \"King's Indian\".\n\nFor a long time the opening was thought to be suspect. In the late 1940s Soviet players such as Bronstein and Boleslavsky showed that it is sound, and later it became a favorite of Fischer, Tal and Kasparov."
    }
  ],
  takeaway:
    "The King's Indian is 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6. Black lets White build a big center, gets the king safe behind the g7-bishop, and then strikes at the center with ...e5 or ...c5.",
  lookAhead:
    'Next, Module 1.2 makes sure you can read every move in this course, from 4...d6 to O-O.',
  drills: [
    {
      title: "Set up the King's Indian",
      prompt: "You're Black. White builds the center with d4, c4, Nc3 and e4. Answer with the four King's Indian moves.",
      moves: KID,
      start: 0,
      side: 'black',
      hints: ['First a knight that watches e4, then make room for the bishop.', 'Nf6, g6, Bg7, and finally the d-pawn one square: d6.'],
      success: "That's the King's Indian: 1...Nf6, 2...g6, 3...Bg7 and 4...d6."
    },
    {
      title: 'Build the big center',
      prompt: "You're White. Build the big center that the King's Indian allows: d4, c4, a knight to c3, then e4.",
      moves: BEFORE_D6,
      start: 0,
      side: 'white',
      hints: ['Start with the queen pawn two squares. The knight on c3 prepares the last pawn move.', '1.d4, 2.c4, 3.Nc3 and 4.e4.'],
      success: 'Three pawns side by side on c4, d4 and e4. That is the space White gets in the King\'s Indian.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "What is Black's basic plan in the King's Indian?",
      choices: [
        { text: 'Let White build a big center, castle, then strike at it with a pawn', correct: true, why: 'Yes. Set up, get the king safe, then hit the center with ...e5 or ...c5.' },
        { text: 'Stop White from ever playing e4', why: "In the King's Indian, Black allows e4 on purpose and attacks the center later." },
        { text: 'Trade queens early and aim for an endgame', why: "The King's Indian usually keeps the pieces on. It leads to rich middlegames where both sides attack." }
      ]
    },
    {
      type: 'name',
      prompt: 'Black has just played 3...d5. Which opening is this?',
      moves: GRUNFELD,
      orientation: 'black',
      choices: [
        { text: 'The Grünfeld Defense', correct: true, why: "Right. 3...d5 challenges the center at once. It's a different opening from the King's Indian." },
        { text: "The King's Indian Defense", why: "In the King's Indian, Black plays 3...Bg7 and 4...d6 and lets White play e4." },
        { text: "The Queen's Gambit", why: "The Queen's Gambit starts 1.d4 d5 2.c4. Here Black played ...Nf6 and ...g6 first." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does Black play 4...d6?',
      moves: KID,
      orientation: 'black',
      choices: [
        { text: 'If White pushes e4–e5, the d6-pawn can take it', correct: true, why: 'Yes. The d6-pawn guards e5, so White cannot kick the knight for free.' },
        { text: "It attacks White's d4-pawn", why: 'A pawn on d6 attacks c5 and e5, not d4. The attack on d4 comes later with ...e5 or ...c5.' },
        { text: 'It lets the g7-bishop out', why: 'The bishop is already on g7. 4...d6 opens a diagonal for the other bishop, on c8.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is a fianchetto?',
      choices: [
        { text: 'A bishop developed to the long diagonal, as on g7 after ...g6', correct: true, why: 'Right. The bishop goes to g7, b7, g2 or b2 and looks along the longest diagonal on the board.' },
        { text: 'Castling on the queenside', why: 'Castling on the queenside is written O-O-O. A fianchetto is about a bishop.' },
        { text: 'A pawn given away in the opening', why: 'That is a gambit. A fianchetto is a way to develop a bishop.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move. Which move guards e5 and completes the King\'s Indian set-up?',
      moves: BEFORE_D6,
      orientation: 'black',
      choices: [
        { text: '4...d6', correct: true, why: "Yes. The pawn guards e5, so 5.e5 can be met by taking it. This is the King's Indian position." },
        { text: '4...O-O', why: "Castling is playable, but it doesn't guard e5. White can push 5.e5 and the knight has to go back. Module 1.4 shows this." },
        { text: '4...e6', why: "4...e6 blocks the c8-bishop and doesn't guard e5. It isn't the King's Indian set-up." }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does "hypermodern" mean?',
      choices: [
        { text: 'Control the center from a distance with pieces, and attack it with pawns later', correct: true, why: "Yes. That's the King's Indian in one line: g7-bishop first, ...e5 or ...c5 later." },
        { text: 'Fill the center with as many pawns as possible', why: "That's the classical approach, and it's what White does in the King's Indian." },
        { text: 'Attack the king before developing your pieces', why: 'No opening style recommends that. Hypermodern is about how to fight for the center.' }
      ]
    }
  ],
  key: { name: "King's Indian Defense: 4...d6", moves: KID, orientation: 'black' },
  terms: [
    { term: 'Fianchetto', meaning: 'Developing a bishop to the long diagonal after moving the knight\'s pawn, as with ...g6 and ...Bg7.' },
    { term: 'Hypermodern', meaning: 'Controlling the center from a distance with pieces first, and challenging it with pawns later.' },
    { term: 'Long diagonal', meaning: 'One of the two longest diagonals on the board: a1–h8 or h1–a8.' },
    { term: 'Pawn break', meaning: "A pawn move that attacks the opponent's pawns to open the position, like ...e5 or ...c5." }
  ]
})
