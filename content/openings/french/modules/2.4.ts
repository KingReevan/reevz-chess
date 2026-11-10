import { defineModule } from '../../../types'
import { ADVANCE_QB6 } from '../lines'

/** adv-6a3-nh6: 6.a3 Nh6 7.b4 cxd4 8.cxd4 Nf5 9.Bb2 Be7 */
const LPUT = `${ADVANCE_QB6} a3 Nh6 b4 cxd4 cxd4 Nf5 Bb2 Be7`
/** adv-lput-bd7: 10.Bd3 Bd7 11.Nbd2 Nfxd4 12.Nxd4 Nxd4 */
const LPUT_BD7 = `${LPUT} Bd3 Bd7 Nbd2 Nfxd4 Nxd4 Nxd4`
/** adv-lput-trap: 10.Bd3 Nfxd4? 11.Nxd4 Nxd4 12.Bxd4 Qxd4?? 13.Bb5+ Bd7 14.Bxd7+ Kxd7 15.Qxd4 */
const LPUT_TRAP = `${LPUT} Bd3 Nfxd4 Nxd4 Nxd4 Bxd4 Qxd4 Bb5+ Bd7 Bxd7+ Kxd7 Qxd4`
/** adv-6a3-bd7: 6.a3 Bd7 7.b4 cxd4 8.cxd4 Rc8 9.Bb2 Na5 10.Nbd2 Nc4 */
const BD7 = `${ADVANCE_QB6} a3 Bd7 b4 cxd4 cxd4 Rc8 Bb2 Na5 Nbd2 Nc4`

export default defineModule({
  id: '2.4',
  title: 'The Lputian 6...Nh6 and 6...Bd7',
  minutes: 12,
  level: 2,
  goals: [
    'Bring a third attacker to d4 with ...Nh6–f5, and see how White answers with Bb2',
    'After 10.Bd3, develop first with 10...Bd7, then take on d4',
    'Know the other plan against 6.a3: ...Bd7, ...Rc8 and ...Na5–c4'
  ],
  intro:
    "Against 6.a3, Black does not have to close the queenside with ...c4. The Lputian Variation, 6...Nh6, keeps up the pressure on d4 instead: the knight goes to f5. Then comes a moment where the count says d4 is free, but grabbing it walks into a trap. This module shows that moment from both sides, plus a quieter plan with 6...Bd7.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Lputian: ...Nh6–f5, then develop first',
      intro: 'Count d4 after every move. Then watch what Black does when the count finally looks good.',
      moves: LPUT_BD7,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'White prepares b4',
          text: '6.a3. White wants b2–b4 and then Bb2.',
          arrows: [['b2', 'b4', 'blue']]
        },
        12: {
          title: 'The Lputian',
          text: "6...Nh6. The knight can't use f6 (the e5-pawn guards it), so it goes to h6 on its way to f5. This is named after Smbat Lputian.",
          arrows: [['h6', 'f5', 'blue'], ['e5', 'f6', 'red']]
        },
        13: {
          title: 'Space on the queenside',
          text: '7.b4. The b-pawn leaves b2, so the queen has nothing to attack there, and the c1-bishop can come to b2.',
          arrows: [['c1', 'b2', 'blue']]
        },
        14: {
          title: 'Trade the c-pawns',
          text: "7...cxd4. Black's best. It opens the queen's diagonal to d4.",
          arrows: [['b6', 'd4', 'blue']]
        },
        15: {
          title: 'Two against two',
          text: '8.cxd4. d4 is attacked by the c6-knight and the queen, and defended by the f3-knight and the queen.',
          arrows: [['c6', 'd4', 'red'], ['b6', 'd4', 'red'], ['f3', 'd4', 'green']],
          marks: ['d4']
        },
        16: {
          title: 'The third attacker',
          text: '8...Nf5. Now d4 is attacked three times and defended only twice. Black threatens to win it.',
          arrows: [['f5', 'd4', 'red'], ['c6', 'd4', 'red'], ['b6', 'd4', 'red']],
          marks: ['d4']
        },
        17: {
          title: 'The third defender',
          text: '9.Bb2. White\'s best: the bishop joins the defense, so it is three against three again. A move like 9.Bd3, which blocks the queen, would let Black take on d4.',
          arrows: [['b2', 'd4', 'green'], ['f3', 'd4', 'green'], ['d1', 'd4', 'green']]
        },
        18: {
          title: 'Develop',
          text: '9...Be7. Black develops and gets ready to castle. The engine sees only a small edge for White.',
          arrows: [['e8', 'g8', 'blue']]
        },
        19: {
          title: 'The queen is cut off',
          text: "10.Bd3. The bishop develops and hits the f5-knight. But it also blocks the queen's line from d1 to d4. Now the count is three attackers against two defenders.",
          arrows: [['d3', 'f5', 'red'], ['d1', 'd3', 'yellow']],
          marks: ['d4']
        },
        20: {
          title: 'Develop first',
          text: "10...Bd7. The engine's move. The bishop now stands on the diagonal between b5 and Black's king, so a white bishop on b5 can never give check. And once the c6-knight moves, the d7-bishop guards b5 too.",
          marks: ['b5', 'd7'],
          ann: '!'
        },
        21: {
          title: 'White develops',
          text: '11.Nbd2. The knight comes out. It also stands on the d-file, so the queen still can\'t see d4.',
          marks: ['d2']
        },
        22: {
          title: 'Now take',
          text: '11...Nfxd4. Now it is safe. Three attackers against two defenders, and no Bb5+ trick.',
          arrows: [['f5', 'd4', 'green']]
        },
        23: {
          title: 'Trade knights',
          text: '12.Nxd4. White takes the knight.',
          arrows: [['f3', 'd4', 'red']]
        },
        24: {
          title: 'A pawn won',
          text: '12...Nxd4. Black has won the d4-pawn. The queen guards the knight. White gets some play for the pawn, for example Qg4 against g7, and the engine calls the position about level.',
          arrows: [['b6', 'd4', 'green'], ['b2', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The trap: 10...Nfxd4? and 12...Qxd4??',
      intro: 'Back to the moment after 10.Bd3. The count says three against two, so Black grabs at once.',
      moves: LPUT_TRAP,
      start: 19,
      orientation: 'white',
      steps: {
        19: {
          title: 'Three against two',
          text: '10.Bd3. The d3-bishop blocks the queen, so only the f3-knight and the b2-bishop guard d4.',
          arrows: [['f3', 'd4', 'green'], ['b2', 'd4', 'green']],
          marks: ['d3']
        },
        20: {
          title: 'The grab',
          text: '10...Nfxd4. It looks like the count works. But Black has not covered b5.',
          marks: ['b5'],
          ann: '?'
        },
        21: {
          title: 'Take the knight',
          text: '11.Nxd4. White takes back. Black\'s best now is 11...Nxe5, but that only gives two pawns for a piece: White is clearly better.',
          arrows: [['c6', 'd4', 'red']]
        },
        22: {
          title: 'Again',
          text: '11...Nxd4. Black keeps taking. The knight on d4 is guarded by the queen and attacked only by the b2-bishop.',
          arrows: [['b2', 'd4', 'red'], ['b6', 'd4', 'green']]
        },
        23: {
          title: 'The bishop takes',
          text: '12.Bxd4. Now Black is a piece for a pawn down, and the bishop also attacks the queen. Black should move the queen away.',
          arrows: [['d4', 'b6', 'red']]
        },
        24: {
          title: 'It looks safe',
          text: '12...Qxd4. The queen takes the bishop. The d1-queen looks blocked by the d3-bishop.',
          arrows: [['d1', 'd3', 'yellow']],
          ann: '??'
        },
        25: {
          title: 'Check, and a hidden attack',
          text: '13.Bb5+. The bishop moves away with check, and the d1-queen now attacks the queen on d4. Black must deal with the check first.',
          arrows: [['b5', 'e8', 'red'], ['d1', 'd4', 'red']],
          ann: '!'
        },
        26: {
          title: 'Block',
          text: '13...Bd7. Black blocks. Moving the king would not help either: White takes the queen next move.',
          marks: ['d4']
        },
        27: {
          title: 'Trade with check',
          text: '14.Bxd7+. White trades first, with check, so the bishop is not lost.',
          arrows: [['d7', 'e8', 'red']]
        },
        28: {
          title: 'Taking back',
          text: '14...Kxd7. The king takes back. The queen on d4 is still attacked.',
          arrows: [['d1', 'd4', 'red']]
        },
        29: {
          title: 'Queen won',
          text: '15.Qxd4. White has won the queen for a pawn. Module 2.7 shows the same trick in the Milner-Barry Gambit.',
          marks: ['d4']
        }
      }
    },
    {
      kind: 'warning',
      title: 'The rule: develop before you take',
      body:
        "When White's bishop is on d3, the queen's defense of d4 is hidden, not gone. A bishop move to b5 with check can uncover it. So the count is only half the story. Play **...Bd7 first**: then the bishop stands between b5 and your king, and Bb5 is never check. Only then take on d4."
    },
    {
      kind: 'walkthrough',
      title: 'The other plan: 6...Bd7, ...Rc8 and ...Na5–c4',
      intro: 'A calmer answer to 6.a3. Black develops the bishop first and plays on the c-file.',
      moves: BD7,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'White prepares b4',
          text: '6.a3. The same start.',
          arrows: [['b2', 'b4', 'blue']]
        },
        12: {
          title: 'The bishop first',
          text: '6...Bd7. Black develops and keeps the knight on g8 for now. The bishop will guard b5 once the c6-knight moves.',
          marks: ['b5']
        },
        13: {
          title: 'b4 again',
          text: '7.b4. White grabs queenside space and frees b2 for the bishop.',
          arrows: [['c1', 'b2', 'blue']]
        },
        14: {
          title: 'Trade',
          text: '7...cxd4. The c-pawns come off.',
          arrows: [['c5', 'd4', 'red']]
        },
        15: {
          title: 'An open file',
          text: '8.cxd4. Neither side has a pawn on the c-file any more. It is an open file, a highway for the rooks.',
          arrows: [['c7', 'c2', 'blue']]
        },
        16: {
          title: 'Rook to the open file',
          text: '8...Rc8. The rook takes the c-file first.',
          arrows: [['c8', 'c3', 'blue']]
        },
        17: {
          title: 'Guarding d4',
          text: '9.Bb2. The bishop develops and guards d4. Now d4 is attacked twice (the knight and the queen) and defended three times (the f3-knight, the bishop and the queen).',
          arrows: [['b2', 'd4', 'green']]
        },
        18: {
          title: 'Heading for c4',
          text: '9...Na5. The knight heads for c4. No White pawn can ever attack c4: the b-pawn has passed it on b4 and the d-pawn on d4.',
          arrows: [['a5', 'c4', 'blue']],
          marks: ['c4']
        },
        19: {
          title: 'Watching c4',
          text: '10.Nbd2. The knight develops and guards c4.',
          arrows: [['d2', 'c4', 'green']]
        },
        20: {
          title: 'The knight lands',
          text: '10...Nc4. The knight is guarded by the d5-pawn and the rook, and it hits the b2-bishop and the d2-knight. White usually trades it with Nxc4. The engine gives White a slight edge.',
          arrows: [['c4', 'b2', 'red'], ['c4', 'd2', 'red'], ['d5', 'c4', 'green']]
        }
      }
    }
  ],
  takeaway:
    "In the Lputian, ...Nh6–f5 makes d4 three against two, and White's best answer is 9.Bb2. After 10.Bd3, play 10...Bd7 first and take on d4 only afterwards: 10...Nfxd4? runs into Bb5+ tricks.",
  lookAhead: 'Module 2.5 shows the same ...Nh6–f5 idea against 6.Be2, and what happens when White takes the knight on h6.',
  drills: [
    {
      title: 'Hold d4',
      prompt: "You're White. Black's knight has just landed on f5, and d4 is attacked three times. Find the defender.",
      moves: `${ADVANCE_QB6} a3 Nh6 b4 cxd4 cxd4 Nf5 Bb2`,
      start: 16,
      side: 'white',
      hints: ['Your b-pawn has left b2. Which piece can use that square?', 'From b2, the c1-bishop guards d4.'],
      success: '9.Bb2. Three attackers, three defenders: d4 holds.'
    },
    {
      title: 'Develop first',
      prompt: "You're Black. White has just played 10.Bd3, and the count says d4 is three against two. Don't grab yet: find the move that makes the capture safe.",
      moves: `${LPUT} Bd3 Bd7`,
      start: 19,
      side: 'black',
      hints: ['Which white bishop move would come with check if you take on d4 now?', 'Put a piece on the diagonal between b5 and your king.'],
      success: '10...Bd7. Now Bb5 is never check, and Black can take on d4 next.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Black has just played 8...Nf5. Count d4. What does White have to do?',
      moves: `${ADVANCE_QB6} a3 Nh6 b4 cxd4 cxd4 Nf5`,
      orientation: 'white',
      choices: [
        { text: 'Add a third defender: 9.Bb2', correct: true, why: 'Right. Three attackers (both knights and the queen) against two defenders. 9.Bb2 makes it three against three.' },
        { text: 'Nothing: d4 is defended well enough', why: 'Three attackers against two defenders means Black threatens to win the pawn.' },
        { text: '9.Bd3, to trade off the f5-knight', why: "On d3 the bishop blocks the queen's line to d4. The engine says Black is slightly better after 9.Bd3, for example 9...Nfxd4." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to play after 10.Bd3. What is the best move?',
      moves: `${LPUT} Bd3`,
      orientation: 'black',
      choices: [
        { text: '10...Bd7', correct: true, why: "Right. It is the engine's move. The bishop covers b5 first; then Black can take on d4 safely." },
        { text: '10...Nfxd4', why: 'Too early. After 11.Nxd4, the best Black gets is two pawns for a piece, and 11...Nxd4 12.Bxd4 Qxd4?? 13.Bb5+ even loses the queen.' },
        { text: '10...O-O', why: 'Castling is a good move too, but a little slower. The engine slightly prefers 10...Bd7, which prepares to win d4.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 12...Qxd4, why does 13.Bb5+ win the queen?',
      moves: `${LPUT} Bd3 Nfxd4 Nxd4 Nxd4 Bxd4 Qxd4`,
      orientation: 'white',
      choices: [
        { text: 'The bishop gives check and uncovers the d1-queen\'s attack on d4', correct: true, why: 'Yes. A discovered attack with check: Black must answer the check, and then the queen on d4 is taken.' },
        { text: 'The bishop on b5 attacks the queen directly', why: 'The bishop on b5 attacks the king on e8, not the queen. It is the d1-queen that attacks d4.' },
        { text: 'The black queen is pinned to the king', why: "There is no pin. Black's queen can move, but Black has to answer the check first, and then it is too late." }
      ]
    },
    {
      type: 'plan',
      prompt: "In the 6...Bd7 line, what is Black's idea with ...Rc8 and ...Na5–c4?",
      moves: BD7,
      orientation: 'black',
      choices: [
        { text: 'Use the open c-file and the c4-square, where no White pawn can attack the knight', correct: true, why: "Right. The rook owns the c-file, and the knight on c4 hits b2 and d2." },
        { text: "Attack White's king on the kingside", why: 'All of these moves are on the queenside. Black is playing on the c-file.' },
        { text: 'Win the d4-pawn by force', why: 'd4 is attacked only once here (by the queen) and defended twice (by the f3-knight and the b2-bishop). The plan is about c4 and the c-file.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 10.Bd3 Bd7 11.Nbd2, why can Black now take on d4 safely?',
      moves: `${LPUT} Bd3 Bd7 Nbd2`,
      orientation: 'black',
      choices: [
        { text: 'The d7-bishop stands between b5 and the king, so Bb5 is never check', correct: true, why: 'Right. Without the Bb5+ trick, the count of three attackers against two defenders really works.' },
        { text: 'The d2-knight defends d4', why: 'A knight on d2 does not guard d4. It actually blocks the d-file even more.' },
        { text: "White's queen has left the d-file", why: 'The queen is still on d1. The difference is the bishop on d7.' }
      ]
    },
    {
      type: 'name',
      prompt: 'What is 6...Nh6 against 6.a3 called?',
      moves: `${ADVANCE_QB6} a3 Nh6`,
      orientation: 'black',
      choices: [
        { text: 'The Lputian Variation', correct: true, why: 'Yes, named after Smbat Lputian. The knight heads for f5 to hit d4.' },
        { text: 'The Milner-Barry Gambit', why: 'The Milner-Barry Gambit is 6.Bd3, a White pawn sacrifice (Module 2.6).' },
        { text: 'The Euwe Variation', why: 'The Euwe Variation is 5...Bd7 (Module 2.8).' }
      ]
    }
  ],
  key: { name: 'Lputian: 10.Bd3, develop first', moves: `${LPUT} Bd3`, orientation: 'black' },
  terms: [
    { term: 'Discovered attack', meaning: 'A piece moves out of the way and uncovers an attack by another piece behind it. With check, it is very hard to meet.' },
    { term: 'Open file', meaning: 'A file with no pawns of either color on it. Rooks are strongest on open files.' },
    { term: 'Lputian Variation', meaning: 'The Advance with 5...Qb6 6.a3 Nh6: the knight goes to h6 and then f5 to attack d4.' }
  ]
})
