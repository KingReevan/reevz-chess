import { defineModule } from '../../../types'
import { MAIN, MDP, MDP_G5 } from '../lines'

/** mdp-10be3: the Neo-Classical move order */
const BE3_FIRST = `${MAIN} Ne1 Nd7 Be3 f5 f3 f4 Bf2 g5`

export default defineModule({
  id: '3.3',
  title: '11.Be3 f4 12.Bf2 g5: grabbing space',
  minutes: 10,
  level: 2,
  goals: [
    'See how 11...f4 gains space with tempo',
    'Know what 12...g5 prepares: the ...g4 lever against f3',
    'Reach the same position from 10.Be3'
  ],
  intro:
    "The tension of 10...f5 can't last forever. In the main line Black ends it by pushing, not taking: ...f4 gains space and ...g5 brings the next pawn. This module shows the push, what it gives up, and a second move order that leads to the same place.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Space with tempo',
      intro: "Watch Black's pawns march, and notice what White's bishop has to do.",
      moves: MDP_G5,
      start: 20,
      orientation: 'black',
      steps: {
        20: {
          title: 'The tension',
          text: "The position from Module 3.2: f5 against e4. White now develops the dark-squared bishop.",
          arrows: [['f5', 'e4', 'blue']]
        },
        21: {
          title: 'A useful bishop',
          text: '11.Be3. From e3 the bishop eyes c5 and a7, so it helps the queenside attack. But it stands right where Black\'s f-pawn can hit it.',
          arrows: [['e3', 'a7', 'blue']],
          marks: ['e3']
        },
        22: {
          title: 'Push with tempo',
          text: '11...f4. The pawn gains space and attacks the bishop, so White must spend a move saving it. Black stops pressing on e4, but the kingside pawns can now roll.',
          arrows: [['f4', 'e3', 'red']]
        },
        23: {
          title: "The bishop's best square",
          text: '12.Bf2. On f2 the bishop guards White\'s king and still eyes c5 and a7 along the g1–a7 diagonal.',
          arrows: [['f2', 'a7', 'blue']]
        },
        24: {
          title: 'The next pawn',
          text: '12...g5. The g-pawn joins in. It guards f4 and prepares ...g4, which will hit the f3-pawn, the base of White\'s kingside wall.',
          arrows: [['g5', 'g4', 'green']],
          marks: ['f3']
        }
      }
    },
    {
      kind: 'text',
      title: 'What 11...f4 gives and gets',
      body:
        "**Gets:** space on the kingside, and a tempo, because the bishop had to move. The f4-pawn takes the e3- and g3-squares away from White's pieces, and Black's g- and h-pawns are free to advance.\n\n**Gives:** the pressure on e4. The f-file stays closed and the tension is gone. That's fine, because the next lever, ...g5–g4, aims at f3, the pawn that holds up e4.\n\nWhile Black does this, White is not waiting. The usual 13th moves are Rc1, Nd3, a4 and b4, all preparing c4–c5 on the queenside. Chapter 4 shows them from White's side."
    },
    {
      kind: 'walkthrough',
      title: 'Same position, different order',
      intro: 'White can play the bishop out first. Black answers with the same moves.',
      moves: BE3_FIRST,
      start: 18,
      orientation: 'black',
      steps: {
        18: {
          title: 'After 9...Nd7',
          text: 'The usual position. This time White develops the bishop before playing f3.',
          arrows: [['c1', 'e3', 'blue']]
        },
        19: {
          title: 'Bishop first',
          text: '10.Be3. lichess calls this order the Neo-Classical Line. The bishop already eyes c5 and a7.',
          arrows: [['e3', 'a7', 'blue']]
        },
        20: {
          title: 'The lever anyway',
          text: '10...f5. Black plays the lever right away.',
          arrows: [['f5', 'e4', 'red']]
        },
        21: {
          title: 'Now f3 is needed',
          text: '11.f3. White supports e4. Without it, 11...fxe4 would let Black equalize, as Module 3.2 showed.',
          arrows: [['f3', 'e4', 'green']]
        },
        22: {
          title: 'The same push',
          text: '11...f4. Again the pawn gains space and hits the bishop.',
          arrows: [['f4', 'e3', 'red']]
        },
        23: {
          title: 'The same retreat',
          text: '12.Bf2. The bishop goes to its usual square.',
          arrows: [['f2', 'a7', 'blue']]
        },
        24: {
          title: 'Same position',
          text: '12...g5. This is exactly the position from the first walkthrough. When different move orders reach the same position, it is called a transposition.',
          arrows: [['g5', 'g4', 'green']],
          marks: ['f3']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Attack the base of the chain',
      body:
        "White's kingside pawns form a chain: f3 holds up e4. The front of the chain (e4) is hard to win, so Black attacks the base instead. First ...f5 pressed on e4; now ...g5–g4 will hit f3. Remove f3 and the whole chain loses its support."
    }
  ],
  takeaway:
    '11...f4 gains space with tempo, and 12...g5 gets the next lever ready: ...g4 will hit f3, the base of White\'s kingside chain. 10.Be3 f5 11.f3 f4 12.Bf2 g5 reaches the same position.',
  lookAhead: "Next: Black's piece tour. How ...Ng6, ...Rf7, ...Bf8 and ...h5 get the army ready for ...g4.",
  drills: [
    {
      title: 'Grab the space',
      prompt: "You're Black. White develops with 11.Be3. Push your f-pawn with tempo, then bring the g-pawn.",
      moves: MDP_G5,
      start: 20,
      side: 'black',
      hints: ['Which pawn can attack the bishop on e3?', 'After the bishop retreats, the next pawn to advance is the g-pawn.'],
      success: '11...f4 and 12...g5. Black has kingside space, and ...g4 is on the way.'
    },
    {
      title: 'The other move order',
      prompt: "You're Black. This time White plays 10.Be3 first. Reach the same Mar del Plata position.",
      moves: BE3_FIRST,
      start: 18,
      side: 'black',
      hints: ['Start with the lever against e4.', 'Then the same plan: push the f-pawn past e4 with tempo, then the g-pawn.'],
      success: '10...f5, 11...f4 and 12...g5. A different road to the same position: a transposition.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why do we say 11...f4 comes "with tempo"?',
      moves: `${MDP} Be3 f4`,
      orientation: 'black',
      choices: [
        { text: 'It attacks the e3-bishop, so White must spend a move saving it', correct: true, why: 'Right. Black gains space and White loses a move. That is what "with tempo" means.' },
        { text: 'It wins the e4-pawn', why: 'The f4-pawn attacks e3 and g3, not e4. Black gives up the pressure on e4 with this push.' },
        { text: "It threatens mate on White's king", why: 'Not yet. The attack needs ...g5–g4 and more pieces first.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 12...g5 prepare?',
      moves: MDP_G5,
      orientation: 'black',
      choices: [
        { text: '...g4, hitting the f3-pawn', correct: true, why: 'Yes. f3 holds up e4. Attacking it is the next step of the kingside plan.' },
        { text: '...g4, to trap the f2-bishop', why: "The bishop isn't in danger. ...g4 is about opening lines near White's king." },
        { text: 'A safe square for the king on g7', why: 'The g7-bishop is there. The pawn moves to attack, not to make room for the king.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Which move order reaches the same position as 10.f3 f5 11.Be3 f4 12.Bf2 g5?',
      choices: [
        { text: '10.Be3 f5 11.f3 f4 12.Bf2 g5', correct: true, why: 'Right. The same moves in a different order: a transposition.' },
        { text: '10.Be3 f5 11.Nd3 fxe4', why: 'Here White skipped f3 and Black took on e4. That is a different position (Module 3.2).' },
        { text: '10.Nd3 f5 11.Bd2 Nf6', why: "That's the 10.Nd3 line. White's bishop goes to d2, not f2." }
      ]
    },
    {
      type: 'concept',
      prompt: "What does White's bishop do on f2?",
      moves: MDP_G5,
      orientation: 'black',
      choices: [
        { text: 'It guards the king and eyes c5 and a7 for the queenside attack', correct: true, why: 'Yes. One bishop, two jobs: defense on the kingside and support for c4–c5.' },
        { text: 'It stops ...g4 by guarding g3 and h4', why: "It does see g3 and h4, but it can't stop ...g4. Its main jobs are guarding the king and helping c4–c5." },
        { text: "Nothing much: it just escaped the f-pawn", why: 'It escaped, but f2 is also its best square. It guards the king and eyes c5 and a7.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: "White to move. Black's f-pawn attacks the bishop. Where should it go?",
      moves: `${MDP} Be3 f4`,
      orientation: 'white',
      choices: [
        { text: '12.Bf2', correct: true, why: 'Right. On f2 the bishop guards the king and keeps its eye on c5 and a7.' },
        { text: '12.Bxf4', why: 'The bishop is simply lost: 12...exf4 takes it.' },
        { text: '12.Bc1', why: "Safe, but passive. The bishop no longer helps c4–c5 or guards the king's diagonal." }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does Black give up by playing 11...f4?',
      choices: [
        { text: 'The pressure on e4: the tension is gone', correct: true, why: 'Right. In return Black gains space, and the next lever, ...g4, will hit f3.' },
        { text: 'A pawn', why: 'No material changes hands. ...f4 is a push, not a sacrifice.' },
        { text: "The g7-bishop's long diagonal", why: 'The g7-bishop was already blocked by Black\'s own e5-pawn. ...f4 does not change that.' }
      ]
    }
  ],
  key: { name: 'Mar del Plata: 11...f4, space with tempo', moves: `${MDP} Be3 f4`, orientation: 'black' },
  terms: [
    { term: 'Tempo', meaning: 'A move, counted as time. Gaining a tempo means making a useful move that forces your opponent to waste one.' },
    { term: 'Space', meaning: 'The squares your pawns control or stand behind. More space gives your pieces more room to move.' },
    { term: 'Transposition', meaning: 'Reaching the same position by a different move order.' },
    { term: 'Base of a pawn chain', meaning: 'The rear pawn that supports the others. Attacking it weakens the whole chain.' }
  ]
})
