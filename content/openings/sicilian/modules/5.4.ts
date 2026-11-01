import { defineModule } from '../../../types'
import { SVESHNIKOV_B5 } from '../lines'

/** svesh-9nd5: 9.Nd5 Be7 10.Bxf6 Bxf6 11.c3 O-O 12.Nc2 Bg5 */
const ND5 = `${SVESHNIKOV_B5} Nd5 Be7 Bxf6 Bxf6 c3 O-O Nc2 Bg5`
/** svesh-9nd5-qa5 with 11.c4 instead of 11.Bg5, then the engine's top moves 11...b4 12.Nc2 Nxe4 13.Ncxb4 */
const DECLINE = `${SVESHNIKOV_B5} Nd5 Qa5+ Bd2 Qd8 c4 b4 Nc2 Nxe4 Ncxb4`

export default defineModule({
  id: '5.4',
  title: '9.Nd5: the quieter main line',
  minutes: 10,
  level: 3,
  goals: [
    "Learn 9.Nd5 Be7 10.Bxf6 Bxf6: White trades on f6 but Black's pawns stay whole",
    "Follow White's knight from a3 to c2 and e3, and Black's ...Bg5 answer",
    'Decline the ...Qa5+ repetition offer with 11.c4'
  ],
  intro:
    "In Module 5.3 White took on f6 at once and broke Black's pawns. With 9.Nd5, White puts the knight in the hole first. Black then gets to recapture on f6 with a bishop, so the pawns stay healthy. What does each side play for in this calmer position? And how does White avoid the ...Qa5+ draw trick from Module 5.2?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Healthy pawns, long maneuvers',
      intro: "Follow two pieces: White's knight on a3 and Black's dark-squared bishop.",
      moves: ND5,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'The main line position',
          text: "8...b5. ...b4 is a threat. This time White moves the c3-knight out of the fork's way by jumping into the hole.",
          arrows: [['c3', 'd5', 'blue']]
        },
        17: {
          title: 'Knight in the hole',
          text: '9.Nd5. The knight lands on d5, out of reach of ...b4. The g5-bishop still pins the f6-knight to the queen.',
          arrows: [['g5', 'd8', 'red']],
          marks: ['d5']
        },
        18: {
          title: 'Getting ready to recapture',
          text: '9...Be7. The bishop steps between the knight and the queen, so the pin is gone. Now if White takes on f6, Black can take back with the bishop.',
          arrows: [['e7', 'f6', 'green']]
        },
        19: {
          title: 'White takes anyway',
          text: '10.Bxf6. White still removes the f6-knight, because it was the piece that fought for d5.',
          arrows: [['g5', 'f6', 'red']]
        },
        20: {
          title: 'No broken pawns',
          text: "10...Bxf6. Black recaptures with the bishop, and the pawns stay healthy. This is the big difference from Module 5.3. Black still has the bishop pair.",
          ann: '!'
        },
        21: {
          title: 'Opening c2',
          text: '11.c3. The pawn frees c2 for the a3-knight. It also takes the b4 and d4 squares away from Black\'s pieces.',
          arrows: [['a3', 'c2', 'blue'], ['c3', 'b4', 'green'], ['c3', 'd4', 'green']]
        },
        22: {
          title: 'Black castles',
          text: '11...O-O. Black gets the king safe. With healthy pawns, kingside castling is comfortable here.'
        },
        23: {
          title: 'The knight returns',
          text: '12.Nc2. The knight is off the rim at last. Its next stop is e3, where it supports d5 and eyes f5.',
          arrows: [['c2', 'e3', 'blue']]
        },
        24: {
          title: 'The bishop gets out',
          text: "12...Bg5. Black's center pawns on d6 and e5 stand on dark squares and block this bishop. On g5 it is outside them, and it watches e3, the square White's knight wants. White keeps a small edge.",
          arrows: [['g5', 'e3', 'yellow']],
          marks: ['d6', 'e5']
        }
      }
    },
    {
      kind: 'text',
      title: 'What each side wants',
      body:
        "**White** has a knight on d5 that no pawn can chase away, and a second knight on its way to e3. White often plays a4 next to attack the b5-pawn and open the a-file. In the long run, White hopes Black's dark-squared bishop has no good job.\n\n**Black** has healthy pawns, a safe king and the bishop pair. The bishop on g5 can trade itself for a White knight on e3, which leaves White with fewer pieces fighting over d5. Black can also bring the c6-knight to e7 to challenge the d5-knight, or prepare ...f5 to hit e4.\n\nThe game is calmer than in Module 5.3, but White keeps a small edge. That is why this line is a main line for White."
    },
    {
      kind: 'walkthrough',
      title: 'Declining the ...Qa5+ repetition',
      intro: "Module 5.2 showed Black's ...Qa5+ trick, which offers a draw by repetition if White keeps playing Bg5. Here White says no.",
      moves: DECLINE,
      start: 17,
      orientation: 'white',
      steps: {
        17: {
          title: 'The diagonal is open',
          text: "9.Nd5. With the c3-knight gone, the diagonal from a5 to White's king is open.",
          arrows: [['a5', 'e1', 'blue']]
        },
        18: {
          title: 'The check',
          text: '9...Qa5+. Black checks, hoping to repeat moves. This is weaker than 9...Be7.',
          arrows: [['a5', 'e1', 'red']]
        },
        19: {
          title: 'The best block',
          text: '10.Bd2. The bishop blocks and attacks the queen at the same time. Other ways to meet the check let Black equalize.',
          arrows: [['d2', 'a5', 'red']]
        },
        20: {
          title: 'The question',
          text: '10...Qd8. The queen goes home. If White plays 11.Bg5, then 11...Qa5+ comes again, and the moves can repeat.',
          arrows: [['d2', 'g5', 'blue']]
        },
        21: {
          title: 'White says no',
          text: '11.c4. The bishop stays on d2, so ...Qa5+ is no longer possible. The c4-pawn supports the d5-knight and hits b5. If 11...bxc4, White is clearly better: for example, the a3-knight can take back on c4 and is back in play.',
          arrows: [['c4', 'd5', 'green'], ['c4', 'b5', 'red']],
          ann: '!'
        },
        22: {
          title: 'Black pushes past',
          text: '11...b4. Black avoids the trade on c4 and attacks the a3-knight.',
          arrows: [['b4', 'a3', 'red']]
        },
        23: {
          title: 'Off the rim',
          text: '12.Nc2. The knight leaves the rim and attacks b4. But e4 now has no defender.',
          arrows: [['c2', 'b4', 'red'], ['f6', 'e4', 'red']]
        },
        24: {
          title: 'Black grabs e4',
          text: '12...Nxe4. Black takes the pawn and attacks the d2-bishop.',
          arrows: [['e4', 'd2', 'red']]
        },
        25: {
          title: 'Material level, White better',
          text: '13.Ncxb4. White wins the pawn back, so material is level. The b4-knight hits the c6-knight, which has no defender, and White keeps a clear edge.',
          arrows: [['b4', 'c6', 'red']],
          marks: ['c6']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Not every repetition is forced',
      body:
        "When your opponent offers a repetition, ask whether you must accept it. Here White repeats only by choosing 11.Bg5. A move that keeps the check blocked, like 11.c4, avoids the draw and keeps the edge."
    }
  ],
  takeaway:
    "After 9.Nd5 Be7 10.Bxf6 Bxf6, Black's pawns stay healthy. White reroutes the a3-knight with c3, Nc2 and Ne3, and Black answers with ...Bg5. White keeps a small edge, and against 9...Qa5+ 10.Bd2 Qd8, 11.c4 avoids the repetition.",
  lookAhead:
    'So far White has played 7.Bg5. Module 5.5 shows the modern alternative 7.Nd5, which closes the center at once.',
  drills: [
    {
      title: 'Decline the repetition',
      prompt: "You're White. You have just played 9.Nd5, and Black answers with 9...Qa5+. Block the check, and after the queen goes home, avoid the repetition.",
      moves: `${SVESHNIKOV_B5} Nd5 Qa5+ Bd2 Qd8 c4`,
      start: 17,
      side: 'white',
      hints: ['Block the check with a piece that also attacks the queen.', "Don't go back to g5. Push a pawn that supports the d5-knight and keeps the bishop on d2."],
      success: '10.Bd2 Qd8 11.c4! The bishop keeps blocking the diagonal, and White stays clearly better.'
    },
    {
      title: 'The quiet main line',
      prompt: "You're Black. White is about to play 9.Nd5. Play the main line: cover the queen, recapture with a piece, castle, and get your dark-squared bishop out.",
      moves: ND5,
      start: 16,
      side: 'black',
      hints: ['First put a bishop between the f6-knight and your queen.', 'After 11.c3 castle, and after 12.Nc2 bring the bishop to g5.'],
      success: '9...Be7 10.Bxf6 Bxf6 11.c3 O-O 12.Nc2 Bg5. Healthy pawns, a safe king and an active bishop.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'White has just played 10.Bxf6. How should Black recapture?',
      moves: `${SVESHNIKOV_B5} Nd5 Be7 Bxf6`,
      orientation: 'black',
      choices: [
        { text: '10...Bxf6', correct: true, why: "Right. That's why Black played 9...Be7: the bishop takes back and Black's pawns stay healthy." },
        { text: '10...gxf6', why: "This spoils Black's pawns for no reason: the bishop was already on e7 to take back. After 10...gxf6 White is clearly better." }
      ]
    },
    {
      type: 'plan',
      prompt: 'What is the main idea of 11.c3 in this line?',
      moves: `${SVESHNIKOV_B5} Nd5 Be7 Bxf6 Bxf6 c3`,
      orientation: 'white',
      choices: [
        { text: 'To free c2, so the a3-knight can come back via c2 to e3', correct: true, why: 'Yes. With the c-pawn on c3, the knight finally has a road back: a3, c2, e3.' },
        { text: 'To attack the b5-pawn', why: 'A pawn on c3 attacks b4 and d4, not b5. White attacks b5 later with a4.' },
        { text: 'To defend the e4-pawn', why: 'A pawn on c3 does not touch e4. Its main job is to open c2 for the knight.' }
      ]
    },
    {
      type: 'concept',
      prompt: "Why does Black play 12...Bg5?",
      moves: ND5,
      orientation: 'black',
      choices: [
        { text: "To get the bishop outside its pawns on d6 and e5, where it watches e3", correct: true, why: 'Right. The bishop was blocked by its own dark-square pawns. On g5 it is active and can trade itself for a knight on e3.' },
        { text: "To attack White's king", why: 'The bishop on g5 does not attack the king. It watches e3, the square White\'s knight wants.' },
        { text: 'To win the d5-knight', why: 'The bishop on g5 cannot reach d5. The d5-knight is safe; ...Bg5 is about e3 and the bishop\'s own activity.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9...Qa5+ 10.Bd2 Qd8 11.c4, what does the c4-pawn do?',
      moves: `${SVESHNIKOV_B5} Nd5 Qa5+ Bd2 Qd8 c4`,
      orientation: 'white',
      choices: [
        { text: 'It supports the d5-knight and hits b5, while the bishop stays on d2 to block ...Qa5+', correct: true, why: 'Exactly. White avoids the repetition and improves the position at the same time.' },
        { text: 'It attacks the black king', why: 'The c4-pawn is far from the king. Its jobs are supporting d5 and challenging b5.' },
        { text: 'It wins the d6-pawn by force', why: 'Nothing wins d6 here. The point of 11.c4 is to keep the bishop on d2 and strengthen d5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'In the line 9.Nd5, why does Black play 9...Be7 before White takes on f6?',
      choices: [
        { text: 'So that Black can take back on f6 with the bishop and keep the pawns healthy', correct: true, why: 'Right. It also breaks the pin on the f6-knight.' },
        { text: 'To attack the d5-knight', why: 'A bishop on e7 does not attack d5. In fact the d5-knight attacks the e7-bishop.' },
        { text: 'To castle queenside', why: 'Be7 clears the way for kingside castling, not queenside. Its main job is to recapture on f6.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9.Nd5 Be7 10.Bxf6 Bxf6 11.c3 O-O 12.Nc2, where is the knight heading?',
      choices: [
        { text: 'To e3, to support d5 and eye f5', correct: true, why: 'Yes. That is why Black answers 12...Bg5, watching e3.' },
        { text: 'Back to a3', why: 'White worked hard to get the knight off the rim. It is heading for e3.' },
        { text: 'To d4, to attack c6', why: 'd4 is covered by the e5-pawn and the c6-knight, so a knight there would be lost. It aims for e3.' }
      ]
    }
  ],
  key: { name: 'Sveshnikov 9.Nd5: 12...Bg5', moves: ND5, orientation: 'white' },
  terms: [
    { term: 'Bad bishop', meaning: 'A bishop blocked by its own pawns standing on squares of its color. It has fewer good squares.' },
    { term: 'Rerouting', meaning: 'Moving a piece over several moves to a better square, like a knight going from a3 to c2 to e3.' },
    { term: 'Pin', meaning: 'An attack on a piece that cannot move without exposing a more valuable piece behind it.' }
  ]
})
