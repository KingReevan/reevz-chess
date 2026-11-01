import { defineModule } from '../../../types'
import { MAIN, MDP } from '../lines'

/** mdp-9ne1-nd7 */
const ND7 = `${MAIN} Ne1 Nd7`
/** 9...Nh5? drops a pawn (engine-checked) */
const NH5 = `${MAIN} Ne1 Nh5 Bxh5 gxh5 Qxh5`
/** mdp-10nd3, first moves */
const ND3 = `${ND7} Nd3 f5 Bd2 Nf6 f3 f4 c5`

export default defineModule({
  id: '3.1',
  title: '9.Ne1 Nd7: freeing the f-pawn',
  minutes: 10,
  level: 2,
  goals: [
    'See why both sides move a knight backward after 8...Ne7',
    'Learn the two jobs of 9...Nd7: free the f-pawn and watch c5',
    'Avoid 9...Nh5?, which drops a pawn'
  ],
  intro:
    "After 8.d5 Ne7 the center is locked, and each side attacks on its own wing. Black's attack starts with the f-pawn, but the knight on f6 is standing in its way. This module shows how both sides move a knight backward to get their plans going.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Two knights step back',
      intro: 'Watch the f-pawns. By the end, both of them have moved.',
      moves: MDP,
      start: 15,
      orientation: 'black',
      steps: {
        15: {
          title: 'The center locks',
          text: "8.d5. White's pawn pushes past e5 and attacks the c6-knight. The center is now closed, so the fight moves to the wings: White's on the queenside, Black's on the kingside.",
          arrows: [['d5', 'c6', 'red']]
        },
        16: {
          title: 'A knight for the kingside',
          text: "8...Ne7. The knight steps back toward the side where Black will attack. But look at f6: that knight stands right in front of Black's f-pawn.",
          marks: ['f6', 'f7']
        },
        17: {
          title: "White's knight retreats",
          text: '9.Ne1. The knight is heading for d3, where it will support the c4–c5 push. Leaving f3 also frees White\'s f-pawn to go to f3.',
          arrows: [['e1', 'd3', 'blue'], ['c4', 'c5', 'green']]
        },
        18: {
          title: 'The f-pawn is free',
          text: '9...Nd7. Now f6 is empty, so the f-pawn can go to f5. From d7 the knight also watches c5, the square White wants for its c-pawn.',
          arrows: [['f7', 'f5', 'green'], ['d7', 'c5', 'yellow']]
        },
        19: {
          title: 'White builds a wall',
          text: "10.f3. White gets ready for ...f5. The f3-pawn will support e4, and it forms a wall in front of White's king.",
          arrows: [['f3', 'e4', 'green']]
        },
        20: {
          title: 'The first lever',
          text: "10...f5. This was the point of 9...Nd7. The f-pawn hits e4, and Black's kingside play has begun. Module 3.2 looks at this move closely.",
          arrows: [['f5', 'e4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Backward moves with a purpose',
      body:
        "In a closed position nobody can break through quickly, so there is time to put each piece on its best square. A **maneuver** is a short trip that does exactly that, and it often starts with a step backward.\n\nWhite's knight goes f3–e1–d3: it frees the f-pawn and then supports c4–c5. Black's knight goes f6–d7: it frees the f-pawn and guards c5. Later it often comes back to f6, once the f-pawn has moved on."
    },
    {
      kind: 'walkthrough',
      title: 'Where the knights go next',
      intro: 'White can also send the knight straight on to d3. Follow both knights.',
      moves: ND3,
      start: 18,
      orientation: 'black',
      steps: {
        18: {
          title: 'Same position',
          text: 'The position after 9...Nd7 again. This time White sends the knight on to d3 at once.',
          arrows: [['e1', 'd3', 'blue']]
        },
        19: {
          title: 'The knight arrives',
          text: '10.Nd3. From d3 the knight supports c4–c5. It also keeps an eye on f4, a square Black\'s pawns want.',
          arrows: [['d3', 'c5', 'green'], ['d3', 'f4', 'blue']]
        },
        20: {
          title: 'The f-pawn moves',
          text: '10...f5. Black pushes the f-pawn, just as planned.',
          arrows: [['f5', 'e4', 'red']]
        },
        21: {
          title: 'Bishop out of reach',
          text: '11.Bd2. White develops the bishop. On d2 it is safe from ...f4, which would hit a bishop on e3.',
          arrows: [['c1', 'd2', 'green']]
        },
        22: {
          title: 'The knight comes back',
          text: '11...Nf6. The f-pawn has left f7, so the d7-knight can return to f6. From there it eyes e4 and g4, the squares Black\'s attack aims at.',
          arrows: [['f6', 'e4', 'red'], ['f6', 'g4', 'blue']]
        },
        23: {
          title: 'The usual guard',
          text: '12.f3. The f3-pawn supports e4 and covers g4.',
          arrows: [['f3', 'e4', 'green'], ['f3', 'g4', 'green']]
        },
        24: {
          title: 'Black gains space',
          text: '12...f4. Black grabs space on the kingside. Module 3.3 explains this push.',
          marks: ['f4']
        },
        25: {
          title: 'The race is on',
          text: "13.c5. The d3-knight backs up White's c-pawn, which attacks d6. White attacks on the queenside while Black gets ready to attack on the kingside.",
          arrows: [['c5', 'd6', 'red'], ['d3', 'c5', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The wrong way to free the f-pawn',
      intro: '9...Nh5 also clears the f-pawn. Spot the problem before you press Next.',
      moves: NH5,
      start: 17,
      orientation: 'black',
      steps: {
        17: {
          title: 'An empty f3-square',
          text: 'After 9.Ne1 the f3-square is empty. Look at the diagonal from e2 all the way to h5.',
          arrows: [['e2', 'h5', 'blue']]
        },
        18: {
          title: 'Into the line of fire',
          text: '9...Nh5. The knight clears the f-pawn, just like 9...Nd7. But h5 is on the e2-bishop\'s diagonal, and only the g6-pawn guards it.',
          arrows: [['e2', 'h5', 'red']],
          ann: '?'
        },
        19: {
          title: 'Bishop takes knight',
          text: '10.Bxh5. White takes the knight. Black has to take back.',
          marks: ['h5']
        },
        20: {
          title: 'A loose pawn',
          text: "10...gxh5. Material is level for now: a bishop for a knight. But the h5-pawn is loose, and White's queen can see it.",
          arrows: [['d1', 'h5', 'red']]
        },
        21: {
          title: 'A pawn down',
          text: "11.Qxh5. White wins a pawn, and the queen stands close to Black's king. White is clearly better.",
          marks: ['h5'],
          ann: '!'
        }
      }
    },
    {
      kind: 'tip',
      title: 'What to call it',
      body:
        'Books use the name in different ways. Some call the whole 7...Nc6 8.d5 Ne7 main line the Mar del Plata, and lichess calls 9.Ne1 the "Classical System". In this course, the Mar del Plata means 9.Ne1 Nd7 and everything after it. Module 3.7 tells the story behind the name.'
    }
  ],
  takeaway:
    "After 9.Ne1 both knights step back. White's heads for d3 to support c4–c5. Black's goes to d7, so the f-pawn can reach f5 and c5 stays guarded. Not h5: the e2-bishop takes it.",
  lookAhead: 'Next: 10.f3 f5. What the first lever attacks, and why Black does not take on e4.',
  drills: [
    {
      title: 'Free the f-pawn',
      prompt: "You're Black. White plays 9.Ne1. Clear the way for your f-pawn, then push it two squares when White builds the wall.",
      moves: MDP,
      start: 16,
      side: 'black',
      hints: [
        'Your f6-knight stands in front of the f-pawn. Move it to a square where it also watches c5.',
        "After White's f2–f3, push the f-pawn two squares."
      ],
      success: '9...Nd7 and 10...f5. The knight clears the way, and the f-pawn hits e4. Welcome to the Mar del Plata.'
    },
    {
      title: 'Punish the edge knight',
      prompt: "You're White this time. Black just played 9...Nh5?. Win a pawn.",
      moves: NH5,
      start: 18,
      side: 'white',
      hints: ['Which of your pieces can already see h5?', 'Take the knight, and after ...gxh5 another piece can take the pawn.'],
      success: "10.Bxh5 gxh5 11.Qxh5. White is a pawn up, and Black's king has lost a defender."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Why does Black play 9...Nd7 in the Mar del Plata?',
      moves: ND7,
      orientation: 'black',
      choices: [
        { text: 'To clear the way for ...f7–f5', correct: true, why: 'Right. The f6-knight blocked the f-pawn. From d7 the knight also watches c5.' },
        { text: "To attack White's d5-pawn", why: "A knight on d7 doesn't attack d5. Its jobs are freeing the f-pawn and guarding c5." },
        { text: 'To prepare ...Nb6 and win the c4-pawn', why: "The c4-pawn is guarded by the e2-bishop, and Black's play is on the kingside. 9...Nd7 is about the f-pawn." }
      ]
    },
    {
      type: 'concept',
      prompt: "White has just played 9.Ne1. Where is this knight usually heading?",
      moves: `${MAIN} Ne1`,
      orientation: 'black',
      choices: [
        { text: 'd3, to support c4–c5', correct: true, why: 'Yes. From d3 the knight backs up the c-pawn push and also watches f4.' },
        { text: 'Back to f3', why: 'That would undo 9.Ne1. The knight left f3 so the f-pawn could go there.' },
        { text: 'g2, to guard the king', why: 'Ng2 does happen in lines where White plays g2–g4 (Module 3.8). In the main line the knight goes to d3 to help the queenside attack.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. Why is 9...Nh5? a mistake here?',
      moves: `${MAIN} Ne1`,
      orientation: 'black',
      choices: [
        { text: '10.Bxh5 gxh5 11.Qxh5 wins a pawn', correct: true, why: "Right. With the f3-knight gone, the e2-bishop sees h5. After the trade, the queen picks up the h5-pawn." },
        { text: '10.g4 traps the knight', why: 'The knight just jumps to f4. The real problem is the bishop on e2 aiming at h5.' },
        { text: "It isn't a mistake: it frees the f-pawn just like 9...Nd7", why: 'It does free the f-pawn, but it drops a pawn after 10.Bxh5 gxh5 11.Qxh5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 8...Ne7, why can\'t Black play ...f5 right away?',
      moves: MAIN,
      orientation: 'black',
      choices: [
        { text: 'The f6-knight stands in front of the f-pawn', correct: true, why: 'Pawns cannot jump. The f-pawn needs f6 to be empty before it can reach f5.' },
        { text: "White's e4-pawn would just take it", why: "exf5 is possible, but Black would take back. That is how a lever works. The real problem is the knight on f6." },
        { text: 'Black has to castle first', why: 'Black castled long ago, on move 5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'After 8.d5 Ne7 the center is locked. Which plans match the Mar del Plata?',
      moves: MAIN,
      orientation: 'black',
      choices: [
        { text: 'Black attacks on the kingside with ...f5; White attacks on the queenside with c4–c5', correct: true, why: "Right. Each side attacks where it has more space, and the game becomes a race." },
        { text: 'Both sides attack in the center', why: 'The center is locked, so neither side can break through there. The play moves to the wings.' },
        { text: 'Black attacks on the queenside with ...b5', why: "Black's pawn chain d6–e5 points to the kingside, so that is where Black attacks." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does White often play f2–f3 after 9.Ne1?',
      choices: [
        { text: 'To support e4, so that ...f5 cannot break up the center', correct: true, why: "Yes. If Black ever takes on e4, White takes back with the f-pawn and keeps a pawn there." },
        { text: 'To open the f-file for the rook', why: "f3 keeps the f-file closed for White's rook. It is a defensive move." },
        { text: "To prepare f4 and attack Black's king", why: "White's attack is on the queenside. The f3-pawn is a wall, not a battering ram." }
      ]
    }
  ],
  key: { name: 'Mar del Plata: 9.Ne1 Nd7', moves: ND7, orientation: 'black' },
  terms: [
    { term: 'Maneuver', meaning: 'A short series of moves that brings a piece to a better square, often starting with a step backward.' },
    { term: 'Lever', meaning: "A pawn move that attacks an enemy pawn to open lines. ...f5 is Black's lever against e4." },
    { term: 'Closed center', meaning: 'The center pawns are locked against each other, so the fight moves to the wings.' }
  ]
})
