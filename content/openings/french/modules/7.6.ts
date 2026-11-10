import { defineModule } from '../../../types'
import { WINAWER } from '../lines'

/** win-5ba5: 5...Ba5 6.b4 cxd4 7.Qg4 Ne7 8.bxa5 dxc3 9.Qxg7 Rg8 10.Qxh7 Nbc6 */
const BA5 = `${WINAWER} e5 c5 a3 Ba5 b4 cxd4 Qg4 Ne7 bxa5 dxc3 Qxg7 Rg8 Qxh7 Nbc6`
/** win-5ba5-cxb4: 6...cxb4?! 7.Nb5 bxa3+ 8.c3 Bc7 9.Bxa3 */
const CXB4 = `${WINAWER} e5 c5 a3 Ba5 b4 cxb4 Nb5 bxa3+ c3 Bc7 Bxa3`
/** win-4b6: 4...b6 5.a3 Bxc3+ 6.bxc3 Qd7 7.a4 Ba6 8.Bxa6 Nxa6 */
const B6 = `${WINAWER} e5 b6 a3 Bxc3+ bxc3 Qd7 a4 Ba6 Bxa6 Nxa6`
/** win-4qd7: 4...Qd7 5.a3 Bxc3+ 6.bxc3 b6 7.Qg4 f5 8.Qg3 Ba6 */
const QD7 = `${WINAWER} e5 Qd7 a3 Bxc3+ bxc3 b6 Qg4 f5 Qg3 Ba6`
/** win-4ne7: 4...Ne7 5.a3 Bxc3+ 6.bxc3 c5 */
const NE7 = `${WINAWER} e5 Ne7 a3 Bxc3+ bxc3 c5`

export default defineModule({
  id: '7.6',
  title: "5...Ba5 and Black's other fourth moves",
  minutes: 12,
  level: 3,
  goals: [
    'Know the Armenian 5...Ba5: Black keeps the bishop',
    'After 6.b4, take toward the center with 6...cxd4, not 6...cxb4?!',
    'Recognize 4...Ne7, 4...Qd7 (Petrosian) and 4...b6'
  ],
  intro:
    "In the main line Black gives up the dark-squared bishop with 5...Bxc3+. Is there a way to keep it? And does Black have to play 4...c5 at once? This module covers the bishop retreat 5...Ba5, and three other fourth moves that aim for the same kind of position by a different road.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Armenian: 5...Ba5 6.b4 cxd4',
      intro: 'Black keeps the bishop. White chases it, and both sides grab material.',
      moves: BA5,
      start: 9,
      orientation: 'black',
      steps: {
        9: {
          title: 'The question',
          text: '5.a3. White asks the bishop to take on c3 or retreat.',
          arrows: [['a3', 'b4', 'red']]
        },
        10: {
          title: 'Keep the bishop',
          text: "5...Ba5. The Retreat Variation, sometimes called the Armenian Variation; its best-known player is Rafael Vaganian. The bishop keeps the pin on the c3-knight, and Black keeps a bishop for the dark squares.",
          arrows: [['a5', 'e1', 'red']]
        },
        11: {
          title: 'Chase it again',
          text: '6.b4. The pawn attacks the bishop and the c5-pawn, and it blocks the pin.',
          arrows: [['b4', 'a5', 'red'], ['b4', 'c5', 'red']]
        },
        12: {
          title: 'Into the center',
          text: "6...cxd4. Black takes toward the center. Now the d4-pawn attacks the c3-knight, while White's b4-pawn still attacks the bishop.",
          arrows: [['d4', 'c3', 'red'], ['b4', 'a5', 'red']],
          ann: '!'
        },
        13: {
          title: 'Hit g7',
          text: "7.Qg4. White ignores the threats and hits g7, as in the main line. The engine's first choice for Black here is 7...Kf8, guarding g7 with the king.",
          arrows: [['g4', 'g7', 'red']]
        },
        14: {
          title: 'Develop',
          text: '7...Ne7. Black develops and lets g7 go, as in the Poisoned Pawn.',
          marks: ['g7']
        },
        15: {
          title: 'The bishop falls',
          text: '8.bxa5. White takes the bishop.',
          arrows: [['b4', 'a5', 'red']]
        },
        16: {
          title: 'The knight falls',
          text: '8...dxc3. Black takes the knight: a bishop for a knight. Black has also won the d4-pawn, so Black is a pawn up for now.',
          arrows: [['d4', 'c3', 'red']]
        },
        17: {
          title: 'g7 goes',
          text: '9.Qxg7. White takes the pawn and attacks the h8-rook.',
          arrows: [['g7', 'h8', 'red']]
        },
        18: {
          title: 'The rook steps out',
          text: '9...Rg8. The rook attacks the queen from the half-open g-file.',
          arrows: [['g8', 'g7', 'red']]
        },
        19: {
          title: 'h7 goes too',
          text: '10.Qxh7. White has won two pawns and is now a pawn up, with a passed h-pawn.',
          arrows: [['h2', 'h7', 'blue']]
        },
        20: {
          title: 'Wild and sharp',
          text: "10...Nbc6. Black develops and hits e5. Black has a pawn on c3 deep in White's camp, and White's a-pawns are doubled. It is extremely sharp, and the engine gives White a clear edge.",
          arrows: [['c6', 'e5', 'red']],
          marks: ['c3']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The wrong capture: 6...cxb4?!',
      intro: 'Taking the b4-pawn looks greedy and good. It hands White a dangerous attack.',
      moves: CXB4,
      start: 11,
      orientation: 'white',
      steps: {
        11: {
          title: 'b4 is attacked',
          text: '6.b4. The pawn on b4 is attacked by the c5-pawn.',
          arrows: [['c5', 'b4', 'red']]
        },
        12: {
          title: 'Grabbing',
          text: "6...cxb4. Black takes a pawn and attacks the c3-knight and the a3-pawn. But the center is now weaker: d4 is no longer attacked.",
          arrows: [['b4', 'c3', 'red'], ['b4', 'a3', 'red']],
          ann: '?!'
        },
        13: {
          title: 'The knight jumps',
          text: '7.Nb5. The only good move. The knight escapes and eyes d6 and c7. Nd6+ is a threat.',
          arrows: [['b5', 'd6', 'red'], ['b5', 'c7', 'red']],
          ann: '!'
        },
        14: {
          title: 'Discovered check',
          text: '7...bxa3+. The pawn takes, and its move uncovers a check from the a5-bishop.',
          arrows: [['a5', 'e1', 'red']]
        },
        15: {
          title: 'Block with a pawn',
          text: '8.c3. The pawn blocks the check and makes a strong center: c3, d4 and e5.',
          arrows: [['c3', 'd4', 'green']]
        },
        16: {
          title: 'Guarding d6',
          text: '8...Bc7. The bishop steps back to c7, where it guards d6 and keeps the knight out of c7.',
          arrows: [['c7', 'd6', 'green']]
        },
        17: {
          title: 'White on top',
          text: "9.Bxa3. White wins a pawn back (the engine likes 9.Qg4 even more). The bishop on a3 rules the a3–f8 diagonal: it covers f8, so Black can't castle short, and it hits d6. Black is a pawn up, but White is clearly better.",
          arrows: [['a3', 'f8', 'red']],
          marks: ['f8']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Trade the bishop first: 4...b6',
      intro: "Black doesn't hurry with ...c5. The first job is the problem bishop.",
      moves: B6,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The pin',
          text: '3...Bb4. The Winawer.',
          arrows: [['b4', 'c3', 'red']]
        },
        7: {
          title: 'White pushes',
          text: '4.e5. The usual answer.',
          arrows: [['e5', 'f6', 'red']]
        },
        8: {
          title: 'A road for the bishop',
          text: '4...b6. Black clears b7, so the c8-bishop can go to a6.',
          arrows: [['c8', 'a6', 'blue']]
        },
        9: {
          title: 'The question',
          text: '5.a3. White asks the bishop.',
          arrows: [['a3', 'b4', 'red']]
        },
        10: {
          title: 'Take',
          text: '5...Bxc3+. Black takes, as in the main line.',
          arrows: [['c3', 'e1', 'red']]
        },
        11: {
          title: 'Doubled pawns',
          text: '6.bxc3. The familiar structure, but Black has played ...b6 instead of ...c5.',
          marks: ['c3']
        },
        12: {
          title: 'The queen on d7',
          text: '6...Qd7. The queen protects e6, so Black can meet Qg4 with ...f5. It also eyes the a4-square.',
          arrows: [['d7', 'e6', 'green'], ['d7', 'a4', 'blue']]
        },
        13: {
          title: 'a4',
          text: "7.a4. White frees a3 for the c1-bishop.",
          arrows: [['c1', 'a3', 'blue']]
        },
        14: {
          title: 'Bishop to a6',
          text: "7...Ba6. Black offers the trade of light-squared bishops, just as in Module 7.5.",
          arrows: [['a6', 'f1', 'yellow']]
        },
        15: {
          title: 'White takes',
          text: '8.Bxa6. White trades.',
          arrows: [['f1', 'a6', 'red']]
        },
        16: {
          title: 'The bad bishop is gone',
          text: "8...Nxa6. The problem bishop is gone. Black is fine for material, but White keeps an edge: the queenside pawns are weak, yet White has space and the dark-squared bishop.",
          marks: ['a6']
        }
      }
    },
    {
      kind: 'text',
      title: 'Two more fourth moves',
      body:
        "**4...Ne7** keeps ...c5 for later: 4...Ne7 5.a3 Bxc3+ 6.bxc3 c5 reaches exactly the main-line position from Module 7.2. Bronstein vs Uhlmann (Module 7.4) began this way.\n\n**4...Qd7, the Petrosian Variation,** aims for the same ...b6 and ...Ba6 trade as 4...b6. The queen also protects e6 in advance, so Black can meet Qg4 with ...f5. A typical line is 4...Qd7 5.a3 Bxc3+ 6.bxc3 b6 7.Qg4 f5 8.Qg3 Ba6, and the bishop trade comes next.\n\nBoth 4...Qd7 and 4...b6 are playable, but the engine gives White a clear edge. They are rare at the top level. 4...c5 remains the main move."
    },
    {
      kind: 'tip',
      title: 'For White: punish the greedy capture',
      body:
        "Against 5...Ba5 6.b4, if Black grabs with 6...cxb4, jump in at once with **7.Nb5!**. Then answer 7...bxa3+ with 8.c3 and take back on a3 with the bishop. The a3-bishop and the b5-knight give White a strong initiative."
    }
  ],
  takeaway:
    "5...Ba5 keeps Black's bishop. After 6.b4 Black should take toward the center with 6...cxd4; 6...cxb4?! 7.Nb5! gives White a strong game. 4...Ne7 transposes to the main line, and 4...b6 and 4...Qd7 aim to trade the problem bishop with ...Ba6.",
  lookAhead: "Module 7.7 turns to White's 5.Bd2, a quieter way to meet 4...c5, and the famous game behind \"Alekhine's gun\".",
  drills: [
    {
      title: 'Play the Armenian',
      prompt: "You're Black. After 5.a3, keep your bishop. When White's b-pawn chases it, take toward the center.",
      moves: BA5.split(' ').slice(0, 12).join(' '),
      start: 9,
      side: 'black',
      hints: ['Retreat the bishop along the diagonal it is already on.', 'After 6.b4, capture with the c-pawn toward the center, not toward the edge.'],
      success: '5...Ba5 and 6...cxd4. The d4-pawn now attacks the c3-knight.'
    },
    {
      title: 'Punish 6...cxb4',
      prompt: "You're White. Black has just grabbed a pawn with 6...cxb4?!. Get your knight out of danger with a threat, then block the check with a pawn.",
      moves: CXB4.split(' ').slice(0, 15).join(' '),
      start: 12,
      side: 'white',
      hints: ['Your c3-knight is attacked. Jump to a square that eyes d6 and c7.', 'After the discovered check, block with your c-pawn. It also builds a strong center.'],
      success: '7.Nb5 and 8.c3. After 8...Bc7, White can win the pawn back with 9.Bxa3 or play 9.Qg4. White is clearly better.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black to move after 5...Ba5 6.b4. What is the best capture?',
      moves: BA5.split(' ').slice(0, 11).join(' '),
      orientation: 'black',
      choices: [
        { text: '6...cxd4', correct: true, why: 'Right. Black takes toward the center, and the d4-pawn attacks the c3-knight.' },
        { text: '6...cxb4', why: 'After 7.Nb5! the knight eyes d6 and c7, and White gets a strong initiative. After 7...bxa3+ 8.c3 Bc7 9.Bxa3, Wikipedia and the engine agree that White is clearly better.' },
        { text: '6...Bxb4', why: 'The a3-pawn defends b4, so 7.axb4 wins the bishop for a pawn. Take with the c-pawn, toward the center.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does Black keep by playing 5...Ba5 instead of 5...Bxc3+?',
      moves: BA5.split(' ').slice(0, 10).join(' '),
      orientation: 'black',
      choices: [
        { text: 'The dark-squared bishop, and the pin on the c3-knight', correct: true, why: 'Right. Black avoids giving White the two bishops, at the cost of a sharp fight after 6.b4.' },
        { text: 'A healthier pawn structure', why: "5...Bxc3+ doesn't hurt Black's pawns; it doubles White's. 5...Ba5 is about keeping the bishop." },
        { text: 'The right to castle', why: 'Black can castle either way. 5...Ba5 keeps the bishop and the pin.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Black plays 4...Ne7 5.a3 Bxc3+ 6.bxc3 c5. Which position is this?',
      moves: NE7,
      orientation: 'black',
      choices: [
        { text: 'The Winawer main line, the same as 4...c5 5.a3 Bxc3+ 6.bxc3 Ne7', correct: true, why: 'Right. Same moves, different order. Bronstein vs Uhlmann began like this.' },
        { text: 'The Armenian Variation', why: 'The Armenian is 5...Ba5, keeping the bishop. Here Black took on c3.' },
        { text: 'The Petrosian Variation', why: 'The Petrosian is 4...Qd7. Here Black played 4...Ne7 and later ...c5, reaching the main line.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Petrosian line, why is the queen on d7 useful when White plays Qg4?',
      moves: QD7.split(' ').slice(0, 13).join(' '),
      orientation: 'black',
      choices: [
        { text: 'Black can answer ...f5, because the queen still protects e6', correct: true, why: 'Right. 7...f5 hits the queen. The f-pawn no longer guards e6, but the queen on d7 does.' },
        { text: 'The queen on d7 defends g7', why: 'A queen on d7 does not reach g7. The point is ...f5 with e6 protected.' },
        { text: 'The queen is ready to take on g4', why: 'The queen on d7 does not attack g4: its own e6-pawn blocks the diagonal. The idea is ...f5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'White to move after 5...Ba5 6.b4 cxb4. What is the best move?',
      moves: CXB4.split(' ').slice(0, 12).join(' '),
      orientation: 'white',
      choices: [
        { text: '7.Nb5', correct: true, why: 'Right. The knight escapes the b4-pawn and eyes d6 and c7, and White gets a strong initiative.' },
        { text: '7.axb4', why: 'It wins the pawn back, but after 7...Bxb4 Black is fine. 7.Nb5 is much stronger.' },
        { text: '7.Na4', why: 'The knight is safe on a4 but does nothing there, and 7...bxa3+ follows. 7.Nb5 eyes d6 and c7.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What do 4...b6 and 4...Qd7 have in common?',
      choices: [
        { text: 'Both prepare ...Ba6 to trade the problem bishop', correct: true, why: 'Right. Both delay ...c5 to solve the c8-bishop first.' },
        { text: 'Both keep the dark-squared bishop', why: 'In both lines Black usually takes on c3 after 5.a3. The common idea is ...Ba6.' },
        { text: 'Both attack d4 at once', why: 'Neither move touches d4. They are about the c8-bishop.' }
      ]
    }
  ],
  key: { name: 'Armenian: 5...Ba5 6.b4 cxd4', moves: BA5.split(' ').slice(0, 12).join(' '), orientation: 'black' },
  terms: [
    { term: 'Discovered check', meaning: 'A check given by a piece when another piece moves out of its way, like the a5-bishop after ...bxa3+.' },
    { term: 'Initiative', meaning: 'The ability to keep making threats, so the opponent has to react instead of following their own plan.' },
    { term: 'Retreat', meaning: 'Moving a piece back toward your own side, like 5...Ba5, usually to keep it from being traded or taken.' }
  ]
})
