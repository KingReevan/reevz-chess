import { defineModule } from '../../../types'
import { FRENCH } from '../lines'

/** For comparison: 1.e4 d5 2.exd5 Qxd5 3.Nc3 (1...d5 at once; checked with chess.js and the engine) */
const ONE_D5 = 'e4 d5 exd5 Qxd5 Nc3'
/** exch-3exd5: 3.exd5 exd5 */
const TRADE = `${FRENCH} exd5 exd5`

export default defineModule({
  id: '1.1',
  title: 'Meet the French: why 1...e6 and 2...d5?',
  minutes: 10,
  level: 1,
  goals: [
    'See how 1...e6 prepares 2...d5 and opens a diagonal for the f8-bishop',
    "Know White's three answers to 2...d5: defend e4, push it or trade it",
    'Learn where the name "French Defense" comes from'
  ],
  intro:
    'Most beginners answer 1.e4 with 1...e5. In the French Defense, Black plays the quiet 1...e6 first, and only then 2...d5. Why spend two moves to put a pawn on d5? This module shows what each of the first four moves does, and the three ways White can answer.',
  sections: [
    {
      kind: 'walkthrough',
      title: 'The French in four moves',
      intro: 'Press Next and watch the center squares. Both sides want them.',
      moves: FRENCH,
      start: 0,
      orientation: 'black',
      steps: {
        0: {
          title: 'The four center squares',
          text: 'The squares d4, e4, d5 and e5 are the center. Pawns and pieces there control the most squares, so both sides fight for them from the first move.',
          marks: ['d4', 'e4', 'd5', 'e5']
        },
        1: {
          title: 'White takes the center',
          text: "1.e4. White puts a pawn in the center. It controls d5 and f5, and it opens lines for White's queen and the f1-bishop.",
          arrows: [['e4', 'd5', 'yellow'], ['e4', 'f5', 'yellow']]
        },
        2: {
          title: 'A quiet first move',
          text: '1...e6. The pawn takes one small step. It also controls d5 and f5, and it opens a diagonal for the f8-bishop, which can now go to e7, d6, c5, b4 or a3.',
          arrows: [['e6', 'd5', 'green'], ['f8', 'a3', 'blue']]
        },
        3: {
          title: 'Two pawns in the center',
          text: '2.d4. White adds a second center pawn. Pawns on d4 and e4 side by side control c5, d5, e5 and f5. A full pawn center like this is what White hopes for in many openings.',
          marks: ['c5', 'd5', 'e5', 'f5']
        },
        4: {
          title: 'The French Defense',
          text: '2...d5. Now Black hits e4. The d5-pawn is protected by the e6-pawn, so White cannot simply win it. This position is the French Defense.',
          arrows: [['d5', 'e4', 'red'], ['e6', 'd5', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Compare: 1...d5 at once',
      intro: 'Some players hit e4 right away with 1...d5 (the Scandinavian Defense). Watch what happens to the piece that takes back on d5.',
      moves: ONE_D5,
      start: 1,
      orientation: 'black',
      steps: {
        1: {
          title: 'The same first move',
          text: '1.e4. This time Black will answer with the d-pawn at once, without preparing it.',
          arrows: [['d7', 'd5', 'blue']]
        },
        2: {
          title: 'Hitting e4 at once',
          text: '1...d5. The pawn attacks e4, but no Black pawn stands behind it. If White takes on d5, no Black pawn can take back.',
          arrows: [['d5', 'e4', 'red']]
        },
        3: {
          title: 'White takes',
          text: '2.exd5. White trades the e-pawn for the d-pawn. To take back, Black has to use a piece.',
          marks: ['d5']
        },
        4: {
          title: 'The queen takes back',
          text: '2...Qxd5. Black wins the pawn back, but with the queen. A queen in the center this early is an easy target.',
          marks: ['d5']
        },
        5: {
          title: 'White gains a tempo',
          text: "3.Nc3. The knight develops and attacks the queen. The queen must move again, so White gets a free developing move. Players call this gaining a tempo. It is a real opening, but White gets a small lead in development.",
          arrows: [['c3', 'd5', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'In the French, a pawn takes back',
      intro: 'Now the same trade in the French. The e6-pawn is ready.',
      moves: TRADE,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'e4 is under attack',
          text: "After 2...d5, the d5-pawn attacks e4 and no White piece or pawn defends it. White has to do something about it now.",
          arrows: [['d5', 'e4', 'red']],
          marks: ['e4']
        },
        5: {
          title: 'White trades',
          text: '3.exd5. White takes on d5. This is the Exchange Variation, one of the three main choices.',
          marks: ['d5']
        },
        6: {
          title: 'A pawn takes back',
          text: '3...exd5. The e6-pawn takes back. Black keeps a pawn in the center and the queen stays at home. That is the reason for 1...e6.',
          marks: ['d5']
        }
      }
    },
    {
      kind: 'text',
      title: "White's three choices",
      body:
        "After 2...d5 the e4-pawn is attacked and nothing defends it. White has three basic choices, and this whole course is built around them.\n\n**Defend it** with a piece: 3.Nc3 or 3.Nd2 (or the rarer 3.Bd3).\n\n**Push it** to e5: 3.e5, the Advance Variation. The pawns lock together.\n\n**Trade it**: 3.exd5 exd5, the Exchange Variation.\n\nAfter 3.Nc3 or 3.Nd2, Black can also give up the center with 3...dxe4. Module 1.9 maps every choice and tells you which chapter teaches it."
    },
    {
      kind: 'tip',
      title: 'The price of 1...e6',
      body:
        "The e6-pawn blocks the c8-bishop's diagonal toward f5, g4 and h3. Many players call this piece the \"French bishop\", and much of French strategy is about what Black does with it. Module 1.7 shows five ways to solve the problem."
    },
    {
      kind: 'history',
      title: 'Why "French"?',
      body:
        'The opening is named after a correspondence match (games played by letter) between London and Paris in 1834. One of the Paris players, Jacques Chamouillet, persuaded his teammates to answer 1.e4 with 1...e6. The moves are older than the name: John Cochrane analyzed 1.e4 e6 2.d4 d5 3.e5 c5 in a book from 1822. The French got little attention until the 20th century, when Géza Maróczy became perhaps the first world-class player to make it his main weapon. Later Nimzowitsch, Botvinnik, Korchnoi and Uhlmann made it famous, and Ding Liren played it in both of his World Championship matches.'
    }
  ],
  takeaway:
    '1...e6 prepares 2...d5, so that the d5-pawn is protected by a pawn. After 2...d5 the e4-pawn is attacked, and White has three basic choices: defend it, push it to e5 or trade it.',
  lookAhead:
    "Module 1.2 makes sure you can read every move in this course, using the French's own main lines.",
  drills: [
    {
      title: 'Play the French as Black',
      prompt: "You're Black. Answer 1.e4 with the French: first the quiet pawn move, then the pawn that hits e4.",
      moves: FRENCH,
      start: 0,
      side: 'black',
      hints: ['Your first move is a one-square pawn move that guards d5.', '1...e6, and after 2.d4, push your d-pawn two squares: 2...d5.'],
      success: '1...e6 and 2...d5. That is the French Defense, and the e4-pawn is now under attack.'
    },
    {
      title: 'Play the first moves as White',
      prompt: "You're White. Start with the king's pawn, then put a second pawn next to it in the center.",
      moves: 'e4 e6 d4',
      start: 0,
      side: 'white',
      hints: ['Your first move puts the e-pawn in the center.', '1.e4, and after 1...e6, 2.d4.'],
      success: '1.e4 and 2.d4. Two pawns side by side in the center. Black now usually plays 2...d5.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the main job of 1...e6?',
      moves: 'e4 e6',
      orientation: 'black',
      choices: [
        { text: 'It prepares ...d5, so the d5-pawn will be protected by a pawn', correct: true, why: 'Right. When White takes on d5, the e6-pawn takes back and Black keeps a pawn in the center.' },
        { text: 'It attacks the e4-pawn', why: 'A pawn attacks the squares diagonally in front of it. From e6 it hits d5 and f5, not e4. The attack on e4 comes with 2...d5.' },
        { text: 'It gets ready to castle on the queenside', why: '1...e6 opens the diagonal of the f8-bishop, a kingside piece. It helps Black castle on the kingside, not the queenside.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'White to move. How many times is the e4-pawn defended?',
      moves: FRENCH,
      orientation: 'white',
      choices: [
        { text: 'Zero times: nothing defends it', correct: true, why: 'Right. That is why White has to act now, usually by defending it, pushing it or trading it.' },
        { text: 'Once, by the queen on d1', why: 'The queen on d1 looks along the d-file and the diagonals d1–h5 and d1–a4. None of those lines reaches e4.' },
        { text: 'Once, by the d4-pawn', why: 'A pawn defends the squares diagonally in front of it. The d4-pawn covers c5 and e5, not e4.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'White has just played 3.Nc3. Which of the three basic plans is this?',
      moves: `${FRENCH} Nc3`,
      orientation: 'white',
      choices: [
        { text: 'Defend the e4-pawn', correct: true, why: 'Yes. The c3-knight guards e4. 3.Nd2 does the same job from another square.' },
        { text: 'Push the e4-pawn', why: 'Pushing would be 3.e5, the Advance Variation. 3.Nc3 leaves the pawn on e4 and guards it.' },
        { text: 'Trade the e4-pawn', why: 'Trading would be 3.exd5, the Exchange Variation. Here the pawn stays on e4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 1...e6 cost Black?',
      choices: [
        { text: "The e6-pawn blocks the c8-bishop's diagonal toward f5, g4 and h3", correct: true, why: 'Right. This "French bishop" is the opening\'s best-known problem. Module 1.7 shows how Black solves it.' },
        { text: 'Black can no longer castle on the kingside', why: 'The opposite: 1...e6 lets the f8-bishop come out, which clears the way to castle on the kingside.' },
        { text: 'The e6-pawn can be won at once', why: 'Nothing attacks the e6-pawn. It is safe, and it guards d5 and f5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Where does the name "French Defense" come from?',
      choices: [
        { text: 'A correspondence match between London and Paris in 1834', correct: true, why: 'Right. A Paris player, Jacques Chamouillet, persuaded his team to answer 1.e4 with 1...e6.' },
        { text: 'A French player who invented 1...e6', why: 'The moves are older than the name: Cochrane analyzed them in 1822. The name comes from the Paris team in the 1834 match.' },
        { text: 'A tournament in Paris in the 20th century', why: 'The name is much older. It comes from the London–Paris correspondence match of 1834.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'White has just played 3.exd5. Why is it good for Black that a pawn can take back?',
      moves: `${FRENCH} exd5`,
      orientation: 'black',
      choices: [
        { text: 'Black keeps a pawn in the center and the queen stays safe at home', correct: true, why: 'Right. After 3...exd5 Black still has a center pawn on d5, and no tempo is lost.' },
        { text: 'It wins a pawn for Black', why: 'No pawn is won. Each side has traded one pawn for one pawn.' },
        { text: 'It opens the f8-bishop for the first time', why: 'The f8-bishop was already free after 1...e6. What 3...exd5 does is keep a center pawn without bringing the queen out.' }
      ]
    }
  ],
  key: { name: 'French Defense: 2...d5', moves: FRENCH, orientation: 'black' },
  terms: [
    { term: 'Center', meaning: 'The four middle squares: d4, e4, d5 and e5. Pawns and pieces there control the most squares.' },
    { term: 'Tempo', meaning: 'One move, seen as a unit of time. Attacking a piece that must move away, like the queen on d5, gains a tempo.' },
    { term: 'Development', meaning: 'Moving pieces off their starting squares so they can join the game.' },
    { term: 'Correspondence chess', meaning: 'Chess played by sending moves by letter, and today by email or a server. A game can last months.' }
  ]
})
