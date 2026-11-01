import { defineModule } from '../../../types'
import { SVESHNIKOV_B5 } from '../lines'

/** svesh-9bxf6: 9.Bxf6 gxf6 10.Nd5 f5 */
const F5 = `${SVESHNIKOV_B5} Bxf6 gxf6 Nd5 f5`
/** svesh-11bd3: 11.Bd3 Be6 12.O-O Bxd5 13.exd5 Ne7 */
const BD3 = `${F5} Bd3 Be6 O-O Bxd5 exd5 Ne7`
/** svesh-11c3: 11.c3 Bg7 12.exf5 Bxf5 13.Nc2 O-O 14.Nce3 Be6 */
const C3 = `${F5} c3 Bg7 exf5 Bxf5 Nc2 O-O Nce3 Be6`
/** svesh-peresypkin: 11.Bxb5!? axb5 12.Nxb5 */
const PERESYPKIN = `${F5} Bxb5 axb5 Nxb5`
/** 9...Qxf6? 10.Nd5 Qd8 11.Bxb5! (engine's top line) */
const QXF6 = `${SVESHNIKOV_B5} Bxf6 Qxf6 Nd5 Qd8 Bxb5`

export default defineModule({
  id: '5.3',
  title: '9.Bxf6 gxf6 10.Nd5 f5: broken pawns, two bishops',
  minutes: 12,
  level: 3,
  goals: [
    "Weigh Black's broken pawns against the bishop pair and the ...f5 break",
    "Learn White's two main answers to ...f5: 11.Bd3 and 11.c3",
    "Know that Peresypkin's 11.Bxb5 is a sound sacrifice that leads to a level game"
  ],
  intro:
    "With 9.Bxf6, White gives up a bishop to remove the knight that guards d5. Black must take back with the g-pawn, and Black's kingside pawns look wrecked. Yet strong players happily play this position as Black. This module shows what Black gets for the broken pawns, and how White handles the ...f5 break.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The break and the big trade',
      intro: 'Watch the e4-pawn after 10.Nd5: its old defender has just left.',
      moves: BD3,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'The knight on the rim',
          text: '8...b5. The a3-knight is stuck, and ...b4 is a threat. White answers by grabbing control of d5 straight away.',
          marks: ['d5']
        },
        17: {
          title: 'Removing the defender',
          text: '9.Bxf6. The bishop takes the f6-knight, the only Black piece that guarded d5.',
          arrows: [['g5', 'f6', 'red']]
        },
        18: {
          title: 'Taking back with the pawn',
          text: "9...gxf6. Black's f-pawns are now doubled and the h-pawn is isolated. In return Black has the bishop pair and a half-open g-file. Taking with the queen is worse: 9...Qxf6? 10.Nd5 hits the queen and leaves White clearly better.",
          marks: ['f6', 'f7', 'h7']
        },
        19: {
          title: 'The knight in the hole',
          text: '10.Nd5. The knight lands on d5, and no Black pawn can chase it away. But look at e4: the c3-knight used to defend it.',
          marks: ['e4']
        },
        20: {
          title: 'The ...f5 break',
          text: "10...f5. The pawn hits e4, which has no defender now. This break is the heart of Black's play: it fights for the center and gets the doubled pawn moving.",
          arrows: [['f5', 'e4', 'red']],
          ann: '!'
        },
        21: {
          title: 'Guarding e4',
          text: '11.Bd3. The bishop defends e4 and gets ready for castling.',
          arrows: [['d3', 'e4', 'green']]
        },
        22: {
          title: 'Eyeing the knight',
          text: "11...Be6. The light-squared bishop develops and aims at d5. Black is ready to trade it for White's best piece.",
          arrows: [['e6', 'd5', 'yellow']]
        },
        23: {
          title: 'White castles',
          text: '12.O-O. White tucks the king away.'
        },
        24: {
          title: 'Bishop takes knight',
          text: '12...Bxd5. Black gives up the bishop pair, but the d5-knight was too strong to leave alone.',
          marks: ['d5']
        },
        25: {
          title: 'A pawn on d5',
          text: '13.exd5. Now a pawn stands on d5 instead of a knight. It attacks the c6-knight, and with e4 empty the d3-bishop now hits f5.',
          arrows: [['d5', 'c6', 'red'], ['d3', 'f5', 'red']]
        },
        26: {
          title: 'The only good move',
          text: "13...Ne7. The knight escapes, guards f5 and attacks d5. Other knight moves lose material. The game is roughly level, and Black's e- and f-pawns are free to roll forward with ...e4.",
          arrows: [['e7', 'f5', 'green'], ['e7', 'd5', 'red'], ['e5', 'e4', 'blue']],
          ann: '!'
        }
      }
    },
    {
      kind: 'text',
      title: 'Broken pawns against two bishops',
      body:
        "**What White has.** A knight on d5 that no pawn can kick, and targets: Black's doubled f-pawns and the lonely h-pawn. Black's king also has fewer pawns around it.\n\n**What Black has.** The **bishop pair**. The half-open g-file for a rook. And above all the ...f5 break, which hits e4 and gives Black a share of the center. Black's pawns look ugly, but they are active.\n\nThis line is razor-sharp, and grandmasters know it many moves deep. For now, learn the ideas and the first moves. That is enough to understand what both sides are playing for."
    },
    {
      kind: 'walkthrough',
      title: '11.c3: bringing the knight home',
      intro: "White's other main plan uses the pawn move c3 to open the c2 square for the a3-knight.",
      moves: C3,
      start: 20,
      orientation: 'white',
      steps: {
        20: {
          title: 'e4 is attacked',
          text: '10...f5. Black hits e4. White does not have to defend it directly.',
          arrows: [['f5', 'e4', 'red']]
        },
        21: {
          title: 'Opening c2',
          text: '11.c3. The pawn frees c2 for the a3-knight. If Black grabs e4 with 11...fxe4?, White can sacrifice on b5 with 12.Bxb5! and is clearly better.',
          arrows: [['a3', 'c2', 'blue']]
        },
        22: {
          title: 'The bishop comes out',
          text: '11...Bg7. The bishop uses the square the g-pawn left behind. From g7 it guards e5.',
          arrows: [['g7', 'e5', 'green']]
        },
        23: {
          title: 'Trading on f5',
          text: '12.exf5. White removes the pawn that was hitting e4.',
          marks: ['f5']
        },
        24: {
          title: 'An active bishop',
          text: '12...Bxf5. The bishop recaptures and stands actively on f5.'
        },
        25: {
          title: 'Off the rim',
          text: '13.Nc2. At last the a3-knight is back in play. It is heading for e3.',
          arrows: [['c2', 'e3', 'blue']]
        },
        26: {
          title: 'Black castles',
          text: '13...O-O. Black brings the king to safety. The g7-bishop stands in front of it.'
        },
        27: {
          title: 'Two knights on d5 and e3',
          text: '14.Nce3. The knight hits the f5-bishop and supports the d5-knight.',
          arrows: [['e3', 'f5', 'red'], ['e3', 'd5', 'green']]
        },
        28: {
          title: 'Knights against bishops',
          text: "14...Be6. The bishop steps back and eyes d5 again. White's knights against Black's two bishops: the game is roughly level.",
          arrows: [['e6', 'd5', 'yellow']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "Peresypkin's sacrifice",
      intro: 'A bold idea for White, named after Peresypkin. Is it sound?',
      moves: PERESYPKIN,
      start: 20,
      orientation: 'white',
      steps: {
        20: {
          title: 'A surprising option',
          text: "10...f5. Instead of defending e4, White can strike at Black's queenside and king."
        },
        21: {
          title: 'Bishop takes b5',
          text: '11.Bxb5. The bishop takes a pawn and offers itself to the a6-pawn.',
          arrows: [['f1', 'b5', 'red']],
          ann: '!?'
        },
        22: {
          title: 'Black accepts',
          text: '11...axb5. Black takes the bishop. For now White has given a piece for one pawn.'
        },
        23: {
          title: 'Two pawns and threats',
          text: '12.Nxb5. A second pawn falls, and both knights now aim at c7. Nbc7+ next would fork the king and the a8-rook. The game is roughly level: a real weapon, not a blunder and not a winning attack.',
          arrows: [['b5', 'c7', 'red'], ['d5', 'c7', 'red'], ['c7', 'a8', 'yellow']],
          marks: ['c7']
        }
      }
    },
    {
      kind: 'warning',
      title: 'Sound, not unsound',
      body:
        "You may read that 11.Bxb5 is unsound. Engines disagree: White gets two pawns and lasting threats for the bishop, and the game is roughly level. It is a fair practical choice for White, and Black must know how to meet it."
    }
  ],
  takeaway:
    "9.Bxf6 gxf6 10.Nd5 f5 gives White a knight on d5 and Black broken pawns, but Black gets the bishop pair and the ...f5 break against e4. 11.Bd3 and 11.c3 both lead to a level game, and so does Peresypkin's 11.Bxb5.",
  lookAhead:
    "White can also jump to d5 first with 9.Nd5. Then Black takes back on f6 with a piece, and the pawns stay healthy. Module 5.4 shows that quieter main line.",
  drills: [
    {
      title: 'Take back and strike',
      prompt: "You're Black. White is about to play 9.Bxf6. Recapture the right way, then hit back in the center after 10.Nd5.",
      moves: F5,
      start: 16,
      side: 'black',
      hints: ['Take with the g-pawn. Taking with the queen runs into Nd5.', "After 10.Nd5, which White pawn has no defender? Hit it with a pawn."],
      success: "9...gxf6 10.Nd5 f5. Your pawns are broken, but you have the two bishops and the ...f5 break."
    },
    {
      title: 'Punish 9...Qxf6?',
      prompt: "You're White. Black is about to take back on f6 with the queen. Show why that is a mistake.",
      moves: QXF6,
      start: 17,
      side: 'white',
      hints: ['Your c3-knight can jump to d5 and attack the queen. Look at c7 too.', 'After 10...Qd8 covers c7, the b5-pawn has only one defender. Sacrifice your bishop there.'],
      success: "10.Nd5 Qd8 11.Bxb5! After 11...axb5 12.Nxb5, both knights hit c7, and White is clearly better."
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 9.Bxf6 gxf6, what does Black get in return for the broken pawns?',
      moves: `${SVESHNIKOV_B5} Bxf6 gxf6`,
      orientation: 'black',
      choices: [
        { text: 'The bishop pair, a half-open g-file and the ...f5 break', correct: true, why: 'Right. Black\'s pawns are weak, but Black\'s pieces and pawns are active.' },
        { text: 'An extra pawn', why: 'Material is level: White traded a bishop for a knight. Black\'s reward is activity, not material.' },
        { text: 'A safer king', why: "Black's king is actually less safe: the g-pawn is gone and the f-pawns are doubled. Black plays for activity instead." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move after 10.Nd5. What is the key move?',
      moves: `${SVESHNIKOV_B5} Bxf6 gxf6 Nd5`,
      orientation: 'black',
      choices: [
        { text: '10...f5', correct: true, why: 'Yes. The pawn hits e4, which lost its defender when the c3-knight went to d5. This break is the heart of Black\'s play.' },
        { text: '10...Be6', why: 'It aims at d5, but after 11.c3 White can answer ...Bxd5 with Qxd5, and White is clearly better. Black needs ...f5 first.' },
        { text: '10...Rb8', why: 'This rook move is too slow. After 11.c3 White is clearly better. Black must hit e4 at once with ...f5.' }
      ]
    },
    {
      type: 'concept',
      prompt: "What is the right verdict on Peresypkin's 11.Bxb5 axb5 12.Nxb5?",
      moves: PERESYPKIN,
      orientation: 'white',
      choices: [
        { text: 'Sound: White gets two pawns and threats for the bishop, and the game is roughly level', correct: true, why: 'Correct. Engines rate it as level. It is a fair try, not a blunder and not a refutation.' },
        { text: 'Unsound: White just loses a piece', why: "You may read that, but engines disagree. White gets two pawns, and the knights' threats on c7 keep Black busy. The game is level." },
        { text: 'Winning for White by force', why: 'No. Black has good defenses, such as getting the a8-rook out of the fork. The game is level.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 12...Bxd5 13.exd5, why must Black play 13...Ne7?',
      moves: `${F5} Bd3 Be6 O-O Bxd5 exd5`,
      orientation: 'black',
      choices: [
        { text: 'The d5-pawn attacks the c6-knight, and f5 is now attacked by the d3-bishop. Ne7 deals with both', correct: true, why: 'Right. The knight escapes, guards f5 and attacks d5. Other knight moves lose material.' },
        { text: 'To get ready to castle queenside', why: "Ne7 doesn't help queenside castling. It is forced because the c6-knight is attacked and f5 needs a guard." },
        { text: 'To trap the d3-bishop', why: 'Nothing traps the bishop. Ne7 saves the c6-knight and guards f5.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In the line 9.Bxf6 gxf6 10.Nd5 f5, why is ...f5 so strong right now?',
      choices: [
        { text: 'The e4-pawn has no defender, because the c3-knight has gone to d5', correct: true, why: 'Exactly. White must react at once, with 11.Bd3, 11.c3, 11.exf5 or the sacrifice 11.Bxb5.' },
        { text: 'It attacks the d5-knight', why: 'A pawn on f5 attacks e4 and g4, not d5. Its target is the e4-pawn.' },
        { text: 'It opens the f-file for Black\'s rook', why: "The f-file isn't open: Black still has a pawn on f7. The point is the attack on e4." }
      ]
    },
    {
      type: 'move',
      prompt: 'White has just played 9.Bxf6. How should Black recapture?',
      moves: `${SVESHNIKOV_B5} Bxf6`,
      orientation: 'black',
      choices: [
        { text: '9...gxf6', correct: true, why: 'Right. The pawns get broken, but Black gets the bishop pair and the ...f5 break.' },
        { text: '9...Qxf6', why: 'This keeps the pawns healthy, but 10.Nd5 hits the queen and eyes c7, and after 10...Qd8 11.Bxb5! White is clearly better.' }
      ]
    }
  ],
  key: { name: 'Sveshnikov: 9.Bxf6 gxf6 10.Nd5 f5', moves: F5, orientation: 'black' },
  terms: [
    { term: 'Doubled pawns', meaning: 'Two pawns of the same color on one file, one in front of the other. They cannot protect each other.' },
    { term: 'Pawn break', meaning: 'A pawn move that attacks an enemy pawn to open lines or win space, like ...f5 hitting e4.' },
    { term: 'Half-open file', meaning: 'A file with no pawn of your own on it but an enemy pawn. Your rooks can use it to attack that pawn.' }
  ]
})
