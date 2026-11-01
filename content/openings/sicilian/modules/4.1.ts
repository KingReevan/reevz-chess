import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** classical-2nc6-order: the same position from 2...Nc6 */
const NC6_ORDER = 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6'
/** classical-6be3-ng4: 6.Be3 Ng4 7.Bb5 Nxe3 8.fxe3 Bd7 */
const BE3_NG4 = `${CLASSICAL} Be3 Ng4 Bb5 Nxe3 fxe3 Bd7`

export default defineModule({
  id: '4.1',
  title: '5...Nc6: the Classical',
  minutes: 10,
  level: 2,
  goals: [
    'See what 5...Nc6 does and which White sixth moves it invites',
    'Reach the Classical by two different move orders',
    'Punish 6.Be3?! with 6...Ng4!'
  ],
  intro:
    "After 5.Nc3, Black's simplest choice is to develop the queen's knight. No ...a6, no ...g6, no ...e6 yet. What does 5...Nc6 aim at, how else can Black reach the same position, and why does the natural 6.Be3 run into trouble?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Building the Classical',
      intro: 'Follow the last few moves of the Open Sicilian. Watch the d4-knight.',
      moves: CLASSICAL,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'A knight in the center',
          text: "4.Nxd4. White's knight stands on d4, in the middle of the board. Black wants to develop fast and put pressure on it.",
          marks: ['d4']
        },
        8: {
          title: 'The e4-pawn is hit',
          text: '4...Nf6. The knight attacks the e4-pawn, so White has to look after it before doing anything else.',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'The crossroads',
          text: '5.Nc3. The knight defends e4. Here Black picks a system: 5...a6 (Najdorf), 5...g6 (Dragon), 5...e6 (Scheveningen) or 5...Nc6.',
          arrows: [['c3', 'e4', 'green']]
        },
        10: {
          title: 'The Classical: 5...Nc6',
          text: '5...Nc6. The knight develops toward the center. It attacks the d4-knight and watches e5. Black has not moved the e-pawn or the g-pawn yet, so ...e6, ...e5 or ...g6 can all come later.',
          arrows: [['c6', 'd4', 'red'], ['c6', 'e5', 'yellow']]
        }
      }
    },
    {
      kind: 'text',
      title: "White's main answers",
      body:
        "The d4-knight is attacked once and defended once, by the queen. So there is no threat yet, but Black can trade knights on d4 whenever it suits.\n\nWhite has three main plans, and each one gets its own module: **6.Bg5**, the Richter–Rauzer (Modules 4.2 and 4.3); **6.Bc4**, the Sozin (Modules 4.4 and 4.5); and the quiet **6.Be2**, which Black can answer with 6...e5 (Module 4.6). The most natural-looking move, 6.Be3, is the one White avoids. You'll see why at the end of this module."
    },
    {
      kind: 'walkthrough',
      title: 'Another road: 2...Nc6 first',
      intro: 'Black can also play the knight move first and ...d6 last. Compare the final position with the one above.',
      moves: NC6_ORDER,
      start: 3,
      orientation: 'black',
      steps: {
        3: {
          title: "White's usual second move",
          text: '2.Nf3. White prepares d4, just like before. This time Black answers with the knight.',
          arrows: [['d2', 'd4', 'blue']]
        },
        4: {
          title: 'The knight comes first',
          text: '2...Nc6. Black develops the knight before playing ...d6. The knight already watches d4.',
          arrows: [['c6', 'd4', 'yellow']]
        },
        5: {
          title: 'White opens the center',
          text: '3.d4. The usual move, just as against 2...d6.',
          arrows: [['c5', 'd4', 'red']]
        },
        6: {
          title: 'The trade',
          text: '3...cxd4. Black gives a wing pawn for a center pawn.',
          marks: ['d4']
        },
        7: {
          title: 'Knight takes back',
          text: '4.Nxd4. The knight recaptures, and the c6-knight attacks it at once.',
          arrows: [['c6', 'd4', 'red']]
        },
        8: {
          title: 'Hitting e4',
          text: "4...Nf6. The knight attacks e4. Black's d-pawn is still on d7.",
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'A new option for Black',
          text: '5.Nc3. White defends e4. In this move order Black could also play 5...e5, the Sveshnikov (Chapter 5). The Classical player chooses ...d6 instead.',
          arrows: [['c3', 'e4', 'green'], ['e7', 'e5', 'blue']]
        },
        10: {
          title: 'Same position',
          text: '5...d6. Every piece and pawn now stands exactly where it did after 2...d6 and 5...Nc6. Two roads, one position.',
          arrows: [['d7', 'd6', 'green']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Which road should you take?',
      body:
        "Each move order lets White sidestep something. After 2...d6, White can play 3.Bb5+, the Moscow. After 2...Nc6, White can play 3.Bb5, the Rossolimo. Both are covered in Chapter 9. Pick the order whose sidelines you'd rather face. The 2...Nc6 road also gives you the Sveshnikov as an extra choice on move 5."
    },
    {
      kind: 'walkthrough',
      title: '6.Be3?! runs into ...Ng4!',
      intro: 'The bishop on e3 looks natural. Watch the g4-square.',
      moves: BE3_NG4,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'Where does the bishop go?',
          text: 'The Classical position. Against other systems White often plays Be3, Qd2 and castles long. Here the f6-knight can reach g4 in one jump.',
          arrows: [['f6', 'g4', 'blue']]
        },
        11: {
          title: 'A natural move',
          text: '6.Be3. The bishop develops and guards d4. But a bishop on e3 can be hit by a knight on g4.',
          marks: ['g4'],
          ann: '?!'
        },
        12: {
          title: 'The knight hits the bishop',
          text: '6...Ng4. The knight attacks the e3-bishop. White cannot take the knight: 7.Qxg4? Bxg4 loses the queen, because the c8-bishop guards g4.',
          arrows: [['g4', 'e3', 'red'], ['c8', 'g4', 'green']],
          ann: '!'
        },
        13: {
          title: 'A pin instead',
          text: "7.Bb5. White leaves the bishop on e3 and pins the c6-knight. The knight can't move, because the black king stands behind it on e8.",
          arrows: [['b5', 'c6', 'red']],
          marks: ['e8']
        },
        14: {
          title: 'Bishop for knight',
          text: '7...Nxe3. Black takes the bishop. Black now has both bishops, and White has a bishop and two knights.',
          marks: ['e3']
        },
        15: {
          title: 'Doubled e-pawns',
          text: '8.fxe3. White takes back. The e-pawns are doubled, but the f-file is half-open for a White rook. The pin is still there: Nxc6 bxc6 Bxc6+ would fork the king and the a8-rook.',
          arrows: [['d4', 'c6', 'red'], ['f1', 'f7', 'blue']],
          marks: ['a8', 'e8']
        },
        16: {
          title: 'Breaking the pin',
          text: '8...Bd7. The bishop steps in between, so the c6-knight is free again. Black has the bishop pair, White is a little ahead in development, and the position is roughly level.',
          arrows: [['d7', 'c6', 'green']],
          ann: '!'
        }
      }
    },
    {
      kind: 'warning',
      title: '8...Bd7 is the only good move',
      body:
        'After 8.fxe3, every natural move except 8...Bd7 loses material. For example, 8...e6? 9.Nxc6 bxc6 10.Bxc6+ forks the king and the a8-rook. When your knight is pinned to the king, look for a way to break the pin before you do anything else.'
    },
    {
      kind: 'text',
      title: 'Other answers to 6...Ng4',
      body:
        'White does not have to give up the bishop. 7.Bg5, or 7.Nxc6 bxc6 8.Bd2, keeps it. But either way White has spent extra moves with the bishop, and Black is fine. That is why White usually prefers 6.Bg5, 6.Bc4 or 6.Be2 against the Classical.'
    }
  ],
  takeaway:
    '5...Nc6 develops toward d4 and keeps all of Black\'s pawn moves in reserve. The same position comes from 2...Nc6 and 5...d6. Against 6.Be3?!, the jump 6...Ng4! wins the bishop pair or costs White time.',
  lookAhead: 'Next: 6.Bg5, the Richter–Rauzer. The bishop goes to g5 instead, where ...Ng4 cannot hit it.',
  drills: [
    {
      title: 'Hit the e3-bishop',
      prompt: "You're Black. White just played 6.Be3?!. Chase the bishop, take it when you can, and then deal with the pin.",
      moves: BE3_NG4,
      start: 11,
      side: 'black',
      hints: [
        'Which knight jump attacks the bishop on e3?',
        'After 8.fxe3 your c6-knight is pinned. Put a piece between it and your king.'
      ],
      success: '6...Ng4!, 7...Nxe3 and 8...Bd7. You have the bishop pair, and the pin is broken.'
    },
    {
      title: 'The 2...Nc6 road',
      prompt: "You're Black. Reach the Classical position, but play the knight to c6 on move 2 and ...d6 last.",
      moves: NC6_ORDER,
      start: 3,
      side: 'black',
      hints: [
        'Start with the queen\'s knight, then take on d4 when White pushes the d-pawn.',
        'After 5.Nc3, play the pawn move that gives the same position as 2...d6 and 5...Nc6.'
      ],
      success: '2...Nc6, 3...cxd4, 4...Nf6 and 5...d6. Same Classical position, different road.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does the knight on c6 attack in this position?',
      moves: CLASSICAL,
      orientation: 'black',
      choices: [
        { text: 'The knight on d4', correct: true, why: 'Right. The d4-knight is attacked once and defended once by the queen, so Black can trade on d4 when it suits.' },
        { text: 'The pawn on e4', why: 'The f6-knight attacks e4. A knight on c6 reaches d4, e5, b4 and a5, but not e4.' },
        { text: 'The d5-square', why: 'A knight on c6 does not reach d5. It covers d4 and e5 in the center.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Which move order reaches the same position as 2...d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6?',
      choices: [
        { text: '2...Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 d6', correct: true, why: 'Yes. The same moves in a different order: the knight first, ...d6 last.' },
        { text: '2...Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5', why: 'That is the Sveshnikov (Chapter 5). The pawn goes to e5, not d6.' },
        { text: '2...e6 3.d4 cxd4 4.Nxd4 Nc6 5.Nc3 d6', why: "That gives pawns on d6 and e6 and no knight on f6. It's a different position." }
      ]
    },
    {
      type: 'trap',
      prompt: 'White to move. Why is 7.Qxg4 a blunder here?',
      moves: `${CLASSICAL} Be3 Ng4`,
      orientation: 'white',
      choices: [
        { text: 'The c8-bishop guards g4, so 7...Bxg4 wins the queen', correct: true, why: 'Exactly. The diagonal from c8 to g4 is open. White would get a knight for the queen.' },
        { text: 'It leaves the e3-bishop hanging', why: 'After 7.Qxg4 the knight that attacked e3 is gone. The real problem is the c8-bishop.' },
        { text: "It isn't a blunder: White wins a knight", why: "Check what guards g4 first. The c8-bishop sees all the way to g4, so the queen would be lost." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. The c6-knight is pinned. What should Black play?',
      moves: `${CLASSICAL} Be3 Ng4 Bb5 Nxe3 fxe3`,
      orientation: 'black',
      choices: [
        { text: '8...Bd7', correct: true, why: 'Right. The bishop blocks the pin, and the position is roughly level.' },
        { text: '8...e6', why: 'It ignores the pin. 9.Nxc6 bxc6 10.Bxc6+ forks the king and the a8-rook.' },
        { text: '8...Qb6', why: 'The queen hits d4, but the pin stays. White plays 9.Nd5, chasing the queen, and Nxc6 with Bxc6+ follows, winning the rook.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why does White usually prefer 6.Bg5, 6.Bc4 or 6.Be2 against the Classical, rather than 6.Be3?',
      choices: [
        { text: '6...Ng4 hits the e3-bishop, so White loses time or gives up the bishop pair', correct: true, why: "Yes. The knight jump to g4 is safe because the c8-bishop guards it, and the bishop can't stay on e3 for free." },
        { text: 'After 6.Be3 the e4-pawn is left hanging', why: 'The c3-knight still guards e4. The problem is 6...Ng4.' },
        { text: '6.Be3 allows 6...Nxd4, winning a piece', why: "6...Nxd4 is just a trade: White takes back with the bishop or the queen. The real problem is 6...Ng4." }
      ]
    },
    {
      type: 'order',
      prompt: 'Black wants the Classical. Which White sideline is possible after 2...Nc6, but not after 2...d6?',
      choices: [
        { text: 'The Rossolimo, 3.Bb5', correct: true, why: 'Right. After 2...Nc6 the bishop goes to b5 to pressure the c6-knight. After 2...d6 the same bishop move is 3.Bb5+, the Moscow.' },
        { text: 'The Moscow, 3.Bb5+', why: 'The Moscow comes after 2...d6, when the bishop gives check. After 2...Nc6 there is no check.' },
        { text: 'The Alapin, 2.c3', why: 'The Alapin is played on move 2, before Black chooses between 2...d6 and 2...Nc6.' }
      ]
    }
  ],
  key: { name: 'Classical: 6.Be3?! Ng4!', moves: `${CLASSICAL} Be3 Ng4`, orientation: 'black' },
  terms: [
    { term: 'Classical Variation', meaning: 'The Open Sicilian with 5...Nc6: Black develops the queen\'s knight before choosing a pawn set-up.' },
    { term: 'Transposition', meaning: 'Reaching the same position by a different order of moves.' },
    { term: 'Pin', meaning: 'A piece cannot move off a line without exposing a more valuable piece behind it, often the king.' },
    { term: 'Bishop pair', meaning: 'Having both bishops while the opponent has traded one. Strong in open positions.' }
  ]
})
