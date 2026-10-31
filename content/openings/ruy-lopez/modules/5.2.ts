import { defineModule } from '../../../types'
import { CLOSED_OO } from '../../../lines'

const GAMBIT = `${CLOSED_OO} c3 d5 exd5 Nxd5 Nxe5 Nxe5 Rxe5`
const MAIN = `${GAMBIT} c6 d4 Bd6`
const MISTAKE = `${GAMBIT} Bd6 Rxd5`

export default defineModule({
  id: '5.2',
  title: 'The main line: 9.exd5 to 11...c6',
  minutes: 10,
  level: 3,
  goals: [
    'Play the forced moves from 9.exd5 to 11...c6',
    'See why the d5-knight needs a pawn to guard it',
    'Understand why Black spends moves on the attack, not on the pawn'
  ],
  intro:
    "After 11.Rxe5 White's rook stands in the middle of the board, and it is looking at the knight on d5. Black is a pawn down. Should Black chase the pawn, attack the rook, or calmly guard the knight? This module shows why the quiet 11...c6 is the main line.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The knight under fire',
      intro: 'Count attackers and defenders on d5 at every step.',
      moves: MAIN,
      start: 18,
      orientation: 'black',
      steps: {
        18: {
          title: 'Back in the center',
          text: '9...Nxd5. The knight recaptures. The e5-pawn is attacked by the f3-knight and the e1-rook, and Black has decided to let it go.',
          arrows: [['f3', 'e5', 'red'], ['e1', 'e5', 'red']]
        },
        19: {
          title: 'White takes',
          text: '10.Nxe5. White grabs the pawn. Black takes the knight at once, before it can cause trouble.',
          arrows: [['c6', 'e5', 'green']]
        },
        20: {
          title: 'Knights traded',
          text: '10...Nxe5. Now the e1-rook recaptures.',
          arrows: [['e1', 'e5', 'red']]
        },
        21: {
          title: 'The rook eyes d5',
          text: '11.Rxe5. The rook attacks the d5-knight along the 5th rank, and the b3-bishop attacks it too. Only the queen defends it: two attackers against one defender.',
          arrows: [['e5', 'd5', 'red'], ['b3', 'd5', 'red'], ['d8', 'd5', 'green']],
          marks: ['d5']
        },
        22: {
          title: 'A pawn guards the knight',
          text: '11...c6. Now d5 has two defenders, and the knight can stay in the center. From d5 it watches f4, e3 and c3, close to White\'s king.',
          arrows: [['c6', 'd5', 'green']],
          ann: '!'
        },
        23: {
          title: 'White frees the bishop',
          text: '12.d4. White finally opens a path for the c1-bishop and props up the rook on e5. But this is still a developing move for White, not an attacking one.',
          arrows: [['d4', 'e5', 'green'], ['c1', 'g5', 'blue']]
        },
        24: {
          title: 'Gaining time on the rook',
          text: "12...Bd6. The bishop attacks the rook, which must move again. Behind the rook, the bishop's diagonal points straight at h2, next to White's king.",
          arrows: [['d6', 'e5', 'red']],
          marks: ['h2']
        }
      }
    },
    {
      kind: 'text',
      title: "Why Black doesn't chase the pawn",
      body:
        "In a gambit, time is the currency. After 11...c6 every Black move in the main line comes with a threat: ...Bd6 hits the rook, ...Qh4 hits h2, ...Bg4 hits the queen. White has to answer each one, so White never gets the free moves needed to wake up the queenside.\n\nIf Black spent those moves winning the pawn back, White would finish developing, and Black would end up with a normal, equal position at best. **The pawn is the price. The attack is the point.**"
    },
    {
      kind: 'walkthrough',
      title: 'The careless 11...Bd6?',
      intro: 'Attacking the rook at once looks energetic. Watch what it does to the d5-knight.',
      moves: MISTAKE,
      start: 19,
      orientation: 'black',
      steps: {
        19: {
          title: 'Same start',
          text: '10.Nxe5. White has taken the pawn. Black recaptures as before.',
          arrows: [['c6', 'e5', 'green']]
        },
        20: {
          title: 'The rook is coming',
          text: '10...Nxe5. The e1-rook will land on e5 and look along the 5th rank.',
          arrows: [['e1', 'e5', 'red']]
        },
        21: {
          title: 'Two against one',
          text: '11.Rxe5. The d5-knight is attacked twice and defended once, by the queen on d8.',
          arrows: [['e5', 'd5', 'red'], ['b3', 'd5', 'red'], ['d8', 'd5', 'green']]
        },
        22: {
          title: 'Blocking your own queen',
          text: "11...Bd6. It attacks the rook, but the bishop now stands on d6, between the queen and the knight. The knight has no defender at all.",
          arrows: [['d6', 'e5', 'red']],
          marks: ['d5'],
          ann: '?'
        },
        23: {
          title: 'The knight falls',
          text: '12.Rxd5. The rook simply takes the knight. White is now a piece and a pawn up, and there is no attack to make up for it.',
          arrows: [['e5', 'd5', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'history',
      title: "From 11...Nf6 to 11...c6",
      body:
        "In the first Marshall game, Capablanca–Marshall, New York 1918, Black played 11...Nf6, moving the knight away from the rook. Capablanca won that game. Later players found that 11...c6, keeping the knight in the center, gives Black more for the pawn, and it became the main line."
    }
  ],
  takeaway:
    'After 11.Rxe5 the d5-knight is attacked twice. 11...c6 guards it with a pawn, keeps it in the center, and lets every following Black move come with a threat.',
  lookAhead:
    'Next: 12.d4 Bd6 13.Re1 Qh4. The queen joins the attack and White has to weaken the kingside.',
  drills: [
    {
      title: 'Play the main line',
      prompt: "You're Black. White has just played 8.c3. Play the Marshall up to 11...c6.",
      moves: `${GAMBIT} c6`,
      start: 15,
      side: 'black',
      hints: ['Start with the pawn sacrifice in the center.', 'Recapture on d5 and e5 with knights, then guard the d5-knight with a pawn.'],
      success: '8...d5 9.exd5 Nxd5 10.Nxe5 Nxe5 11.Rxe5 c6. The knight is safe and the attack can begin.'
    },
    {
      title: 'Punish the careless bishop',
      prompt: "You're White. Black has just played 11...Bd6?, attacking your rook. Find the best move.",
      moves: MISTAKE,
      start: 22,
      side: 'white',
      hints: ["Don't move the rook to safety. Look at what Black's bishop is blocking.", 'Who defends the knight on d5 now?'],
      success: '12.Rxd5! The bishop on d6 cut the queen off from d5, so the knight was undefended.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black to move. The d5-knight is attacked twice. What is the main-line move?',
      moves: GAMBIT,
      orientation: 'black',
      choices: [
        { text: '11...c6', correct: true, why: 'Right. A pawn becomes the second defender, and the knight stays in the center.' },
        { text: '11...Bd6', why: 'The bishop blocks the queen from d5, and 12.Rxd5 wins the knight.' },
        { text: '11...Qd6', why: 'The queen still guards d5, but two attackers beat one defender: after 12.Rxd5, taking back with the queen runs into Bxd5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 11...c6 better than trying to win the pawn back quickly?',
      choices: [
        { text: 'It keeps the knight in the center and saves Black\'s moves for the attack', correct: true, why: "Exactly. Black's later moves all come with threats, so White never gets time to develop." },
        { text: 'It wins the rook on e5', why: "11...c6 doesn't attack the rook. It defends the knight." },
        { text: 'It prepares ...c5 and ...c4 to trap the b3-bishop', why: 'That trick belongs to other lines. Here the pawn on c6 simply guards d5.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move. Black has just played 11...Bd6. What is the strongest move?',
      moves: `${GAMBIT} Bd6`,
      orientation: 'white',
      choices: [
        { text: '12.Rxd5', correct: true, why: 'Yes. The bishop on d6 blocks the queen, so the knight has no defender.' },
        { text: '12.Re1', why: 'Retreating is natural, but it misses a free knight. Look at what the bishop is blocking.' },
        { text: '12.Rh5', why: 'The rook escapes, but you leave the knight alone. 12.Rxd5 wins a whole piece.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 11.Rxe5 in the Marshall, which white pieces attack the knight on d5?',
      moves: GAMBIT,
      orientation: 'black',
      choices: [
        { text: 'The e5-rook and the b3-bishop', correct: true, why: 'Right. The rook along the 5th rank, the bishop along the a2–g8 diagonal.' },
        { text: 'The e5-rook and the d1-queen', why: "The queen's path up the d-file is blocked by White's own d2-pawn." },
        { text: 'Only the b3-bishop', why: 'The rook on e5 also attacks d5, along the rank. That makes two attackers.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move after 12.d4. Which developing move gains time by hitting the rook?',
      moves: `${GAMBIT} c6 d4`,
      orientation: 'black',
      choices: [
        { text: '12...Bd6', correct: true, why: "Yes. The rook must move, and the bishop's diagonal then points at h2." },
        { text: '12...Be6', why: "It develops, but it doesn't threaten anything, so White gets a free move." },
        { text: '12...Bb7', why: "The bishop develops, but it bites on Black's own c6-pawn and makes no threat." }
      ]
    }
  ],
  key: { name: 'Marshall Attack main line: 11...c6', moves: `${GAMBIT} c6`, orientation: 'black' },
  terms: [
    { term: 'Attackers and defenders', meaning: 'Count how many pieces hit a square and how many guard it. More attackers usually means the piece falls.' },
    { term: 'Tempo', meaning: 'A single move of time. Gaining a tempo means making a move that forces your opponent to react.' },
    { term: 'Compensation', meaning: 'What you get in return for material you gave up, such as time, activity or an attack.' }
  ]
})
