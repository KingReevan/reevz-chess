import { defineModule } from '../../../types'
import { WINAWER_MAIN } from '../lines'

/** win-7nf3: 7.Nf3 Nbc6 8.a4 Qa5 9.Qd2 Bd7 10.Be2 f6 */
const NF3 = `${WINAWER_MAIN} Nf3 Nbc6 a4 Qa5 Qd2 Bd7 Be2 f6`
/** win-7a4: 7.a4 Nbc6 8.Nf3 Qa5 9.Bd2 c4 10.Ng5 h6 */
const A4 = `${WINAWER_MAIN} a4 Nbc6 Nf3 Qa5 Bd2 c4 Ng5 h6`
/** 8...Qa5 9.Be2? Nxd4! 10.Bd2 Nxe2 11.Qxe2: the c3-pawn is pinned (engine's line, engine-checked) */
const PIN = `${WINAWER_MAIN} Nf3 Nbc6 a4 Qa5 Be2 Nxd4 Bd2 Nxe2 Qxe2`

export default defineModule({
  id: '7.2',
  title: '6...Ne7: plans for both sides',
  minutes: 11,
  level: 3,
  goals: [
    'Know why the king\'s knight goes to e7 in the Winawer',
    "Learn Black's plan: ...Nbc6, ...Qa5 against c3, then ...c4 or ...f6",
    "Learn White's choices: Qg4 at once, or Nf3, a4 and a bishop to d2 or a3"
  ],
  intro:
    "After 6.bxc3 the Winawer main line continues 6...Ne7. Now both sides need a plan. Black has targets on the queenside: the doubled c-pawns and the a-pawn. White has the two bishops and a kingside where Black's dark-squared bishop is missing. This module shows what each side is aiming for.",
  sections: [
    {
      kind: 'walkthrough',
      title: "Black's pressure: ...Nbc6, ...Qa5 and ...f6",
      intro: 'White plays calmly with 7.Nf3. Watch how Black piles up on c3 and d4, and then hits e5.',
      moves: NF3,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'After the trade',
          text: '6.bxc3. White has doubled c-pawns and the two bishops. Black has to bring the kingside pieces out.',
          marks: ['c3', 'a3']
        },
        12: {
          title: 'The knight goes to e7',
          text: "6...Ne7. The e5-pawn covers f6, so the knight goes to e7 instead. From there it can jump to f5 to hit d4, or to g6 to hit e5, and it leaves the f-pawn free for a later ...f6.",
          arrows: [['e7', 'f5', 'blue'], ['e7', 'g6', 'blue'], ['e5', 'f6', 'red']]
        },
        13: {
          title: 'White develops',
          text: '7.Nf3. The quiet choice. The knight defends both d4 and e5, and White keeps the queen at home for now.',
          arrows: [['f3', 'd4', 'green'], ['f3', 'e5', 'green']]
        },
        14: {
          title: 'More pressure on d4',
          text: '7...Nbc6. The other knight joins in. Now d4 is attacked by the c5-pawn and the c6-knight, and the knight also eyes e5.',
          arrows: [['c6', 'd4', 'red'], ['c5', 'd4', 'red'], ['c6', 'e5', 'red']]
        },
        15: {
          title: 'a2–a4',
          text: "8.a4. A typical White move. The pawn keeps Black's queen off a4, and it frees the a3-square for White's c1-bishop.",
          arrows: [['c1', 'a3', 'blue']]
        },
        16: {
          title: 'The queen hits c3',
          text: "8...Qa5. The queen attacks the c3-pawn, and it also pins it to the king on e1, because d2 is empty. A pinned c3-pawn can't take anything on d4. White must deal with this at once.",
          arrows: [['a5', 'c3', 'red'], ['c3', 'e1', 'yellow']],
          marks: ['c3']
        },
        17: {
          title: 'Guard and unpin',
          text: '9.Qd2. The queen defends c3 and stands between the c3-pawn and the king, so the pin is gone. 9.Bd2 does the same job.',
          arrows: [['d2', 'c3', 'green']]
        },
        18: {
          title: 'The problem bishop moves',
          text: "9...Bd7. Black develops the c8-bishop to its only free square. Now Black can castle on either side.",
          arrows: [['c8', 'd7', 'green']]
        },
        19: {
          title: 'Ready to castle',
          text: '10.Be2. White develops quietly and gets ready to castle.',
          arrows: [['e1', 'g1', 'blue']]
        },
        20: {
          title: 'The second break',
          text: "10...f6. With the queenside under pressure, Black now hits e5, the head of White's chain, and prepares to open the f-file for a rook. The position is close to equal.",
          arrows: [['f6', 'e5', 'red'], ['c5', 'd4', 'red']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'warning',
      title: 'For White: mind the pin on c3',
      body:
        "When Black's queen comes to a5 and d2 is empty, the c3-pawn is pinned to the king. It no longer defends d4, and ...Qxc3+ is a threat. Deal with it at once: **Bd2** or **Qd2** defends c3 and blocks the pin. The next walkthrough shows what happens if White doesn't."
    },
    {
      kind: 'walkthrough',
      title: 'Ignoring the pin: 9.Be2?',
      intro: 'Same position after 8...Qa5. White plays a normal developing move instead of guarding c3.',
      moves: PIN,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'c3 is pinned',
          text: '8...Qa5. The c3-pawn is attacked and pinned. It looks like it defends d4, but it can\'t take anything.',
          arrows: [['a5', 'c3', 'red'], ['c3', 'e1', 'yellow']],
          marks: ['d4']
        },
        17: {
          title: 'A natural mistake',
          text: '9.Be2. White develops and wants to castle, but c3 is still pinned.',
          ann: '?'
        },
        18: {
          title: 'The knight takes',
          text: "9...Nxd4. The pinned pawn can't take back. If 10.Nxd4, then 10...Qxc3+ is even stronger.",
          arrows: [['c6', 'd4', 'red'], ['a5', 'c3', 'red']],
          ann: '!'
        },
        19: {
          title: 'Too late',
          text: '10.Bd2. White breaks the pin now, so the c3-pawn could take the knight next move.',
          arrows: [['c3', 'd4', 'red']]
        },
        20: {
          title: 'Trade first',
          text: '10...Nxe2. Black trades the knight for White\'s light-squared bishop before it can be taken.',
          arrows: [['d4', 'e2', 'red']]
        },
        21: {
          title: 'A pawn up',
          text: '11.Qxe2. Black has won the d4-pawn and is clearly better.',
          marks: ['d4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Closing the queenside: 9...c4',
      intro: "White starts with 7.a4. This time Black locks the queenside, and White turns to the kingside.",
      moves: A4,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'White to choose',
          text: '6...Ne7. White can attack g7 at once with 7.Qg4 (Modules 7.3 and 7.4) or play a quieter move.',
          arrows: [['d1', 'g4', 'blue']]
        },
        13: {
          title: 'a4 first',
          text: '7.a4. The pawn frees a3 for the c1-bishop, where it would face no Black bishop on the dark squares, and it keeps Black\'s queen out of a4. Module 7.5 looks at this plan.',
          arrows: [['c1', 'a3', 'blue']]
        },
        14: {
          title: 'The knight comes out',
          text: '7...Nbc6. The knight adds a second attacker to d4.',
          arrows: [['c6', 'd4', 'red']]
        },
        15: {
          title: 'd4 is safe',
          text: '8.Nf3. The knight defends d4 and e5, just as in the 7.Nf3 line.',
          arrows: [['f3', 'd4', 'green'], ['f3', 'e5', 'green']]
        },
        16: {
          title: 'The pin again',
          text: '8...Qa5. The same position as in the first walkthrough. The c3-pawn is attacked and pinned.',
          arrows: [['a5', 'c3', 'red'], ['c3', 'e1', 'yellow']]
        },
        17: {
          title: 'Guard with the bishop',
          text: "9.Bd2. The bishop defends c3 and blocks the pin. Here 9.Ba3?? would be a blunder: 9...Qxc3+ attacks the king, the a1-rook and the a3-bishop.",
          arrows: [['d2', 'c3', 'green']]
        },
        18: {
          title: 'The lock',
          text: "9...c4. Black closes the queenside. The pawn covers d3 and b3, so White's light-squared bishop can't use d3, and the locked queenside gives White's bishops fewer open lines. The price: Black no longer attacks d4.",
          arrows: [['c4', 'd3', 'yellow'], ['c4', 'b3', 'yellow']],
          marks: ['c4']
        },
        19: {
          title: 'To the kingside',
          text: "10.Ng5. With the queenside closed, White looks at Black's king. The knight eyes f7 and h7.",
          arrows: [['g5', 'h7', 'red'], ['g5', 'f7', 'red']]
        },
        20: {
          title: 'Kick it',
          text: '10...h6. The pawn chases the knight away. White keeps a small edge: the two bishops and more kingside space.',
          arrows: [['h6', 'g5', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The plans in short',
      body:
        "**Black.** Bring the knights to e7 and c6. Put the queen on a5 to attack c3 and the a-pawn (c7 is another common square). Develop the bishop to d7. Then choose: keep the tension on d4, take with ...cxd4 to half-open the c-file, or close the queenside with ...c4. Later, ...f6 attacks e5, the head of the chain. Another idea is ...b6 and ...Ba6 to trade off the problem bishop (Module 7.5).\n\n**White.** Keep c3 defended and the pin under control (Bd2 or Qd2). Then either attack g7 at once with **Qg4** (Modules 7.3 and 7.4), or play positionally with **Nf3, a4** and the bishop to d2 or a3, often with h4–h5 for kingside space (Module 7.5). White's long-term hope is to open the position for the two bishops."
    }
  ],
  takeaway:
    "After 6...Ne7, Black brings the knights to e7 and c6 and the queen to a5 to attack c3. When the queen is on a5, the c3-pawn is pinned, so White must guard it with Bd2 or Qd2. Black then chooses between ...c4 and ...f6. White chooses between Qg4 and a quiet build-up with Nf3 and a4.",
  lookAhead: "Module 7.3 looks at White's most direct answer, 7.Qg4, which attacks g7 at once.",
  drills: [
    {
      title: "Black's set-up against 7.Nf3",
      prompt: "You're Black. White has played the quiet 7.Nf3. Bring your other knight out, attack c3 with your queen, develop your bishop, then hit the head of White's chain.",
      moves: NF3,
      start: 12,
      side: 'black',
      hints: ['Start with ...Nbc6, then the queen goes to a5.', 'After the bishop goes to d7, push your f-pawn to attack e5.'],
      success: '7...Nbc6, 8...Qa5, 9...Bd7 and 10...f6. Black has pressure on c3 and d4 and a second break against e5.'
    },
    {
      title: 'Guard c3 as White',
      prompt: "You're White. Defend d4 with your knight. When Black's queen comes to a5, guard c3 and break the pin with a minor piece.",
      moves: A4.split(' ').slice(0, 17).join(' '),
      start: 14,
      side: 'white',
      hints: ['Your king\'s knight defends d4 and e5 from f3.', 'After ...Qa5, which bishop move defends c3 and blocks the line to your king?'],
      success: '8.Nf3 and 9.Bd2. The c3-pawn is safe and no longer pinned.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "Why does Black's king's knight go to e7 in the Winawer main line?",
      moves: WINAWER_MAIN,
      orientation: 'black',
      choices: [
        { text: 'f6 is covered by the e5-pawn; from e7 the knight can go to f5, g6 or c6', correct: true, why: 'Right. On e7 it also leaves the f-pawn free, so Black can still play ...f6 later.' },
        { text: 'To guard the g7-pawn', why: 'A knight on e7 does not guard g7. From e7 it covers c6, c8, d5, f5, g6 and g8, but not g7. The g7-pawn is a real problem against Qg4, as Module 7.3 shows.' },
        { text: 'To attack the e5-pawn at once', why: 'From e7 the knight does not touch e5. It can attack e5 later from g6 or c6.' }
      ]
    },
    {
      type: 'trap',
      prompt: "Black has just played 8...Qa5. Why must White deal with the c3-pawn now?",
      moves: `${WINAWER_MAIN} Nf3 Nbc6 a4 Qa5`,
      orientation: 'white',
      choices: [
        { text: 'c3 is attacked and pinned to the king, so it no longer defends d4', correct: true, why: 'Right. Without Bd2 or Qd2, Black can take on d4 or play ...Qxc3+.' },
        { text: 'Black threatens ...Qxa4', why: 'The a4-pawn is defended by the a1-rook: ...Qxa4 would lose the queen. The danger is on c3.' },
        { text: 'Black threatens mate on e1', why: 'There is no mate. The queen pins c3 to the king, which makes d4 and c3 weak.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move after 8...Qa5. What is the best move?',
      moves: `${WINAWER_MAIN} a4 Nbc6 Nf3 Qa5`,
      orientation: 'white',
      choices: [
        { text: '9.Bd2', correct: true, why: 'Yes. The bishop develops, guards c3 and blocks the pin.' },
        { text: '9.Ba3', why: 'It leaves c3 undefended and pinned: 9...Qxc3+ checks the king and attacks both the a1-rook and the a3-bishop.' },
        { text: '9.Be2', why: 'It ignores the pin: 9...Nxd4! wins a pawn, because the pinned c3-pawn can\'t take back.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the 7.a4 line, Black played 9...c4. What does this pawn move do?',
      moves: A4.split(' ').slice(0, 18).join(' '),
      orientation: 'black',
      choices: [
        { text: 'It closes the queenside, so White\'s bishops have fewer open lines there', correct: true, why: 'Right. It also takes d3 from White\'s light-squared bishop. The price is that Black no longer attacks d4.' },
        { text: 'It opens the c-file for Black\'s rooks', why: 'The opposite: the c-file stays closed. Taking with ...cxd4 is the way to half-open it.' },
        { text: 'It attacks the d4-pawn a second time', why: 'A pawn on c4 attacks b3 and d3, not d4. ...c4 ends the pressure on d4.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'Why does White often play a3–a4 in the 6...Ne7 lines?',
      choices: [
        { text: 'It frees a3 for the c1-bishop and keeps Black\'s queen out of a4', correct: true, why: 'Right. From a3 the bishop works on the dark squares, where Black no longer has a bishop.' },
        { text: 'It attacks the c5-pawn', why: 'A pawn on a4 attacks b5, not c5.' },
        { text: 'It prepares to castle queenside', why: "a4 has nothing to do with castling. It is about the c1-bishop and Black's queen." }
      ]
    },
    {
      type: 'concept',
      prompt: "In the 7.Nf3 line, Black's last move was 10...f6. What does it attack?",
      moves: NF3,
      orientation: 'black',
      choices: [
        { text: "The e5-pawn, the head of White's chain", correct: true, why: 'Right. ...c5 hits the base (d4), and ...f6 hits the head (e5). Black uses both breaks.' },
        { text: 'The d4-pawn, the base of the chain', why: 'The c5-pawn and the c6-knight attack d4. The f6-pawn attacks e5 and g5.' },
        { text: "White's king", why: 'The pawn on f6 attacks e5 and g5. It prepares to open the f-file, but it is a central break, not a king attack.' }
      ]
    }
  ],
  key: { name: 'Winawer main line: 6...Ne7', moves: WINAWER_MAIN, orientation: 'black' },
  terms: [
    { term: 'Unpin', meaning: 'To end a pin, usually by putting a piece between the pinned piece and the king, or by moving the king.' },
    { term: 'Head of the chain', meaning: "The front pawn of a pawn chain. In the French it is White's e5-pawn; Black attacks it with ...f6." },
    { term: 'Closing the position', meaning: 'Locking pawns so that files and diagonals stay shut. It helps knights and hurts bishops.' }
  ]
})
