import { defineModule } from '../../../types'
import { WINAWER, WINAWER_MAIN } from '../lines'

/** win-5a3: 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 */
const TRADE = `${WINAWER} e5 c5 a3 Bxc3+ bxc3`
/** 4.Nf3? dxe4 5.Ne5: the pinned knight can't take back on e4 (engine's line, engine-checked) */
const NF3 = `${WINAWER} Nf3 dxe4 Ne5`

export default defineModule({
  id: '7.1',
  title: '3...Bb4: pinning the defender of e4',
  minutes: 10,
  level: 3,
  goals: [
    'See how 3...Bb4 pins the c3-knight, the only defender of e4',
    'Know the main line: 4.e5 c5 5.a3 Bxc3+ 6.bxc3',
    'Weigh the trade: doubled c-pawns against the two bishops and weak dark squares'
  ],
  intro:
    "After 3.Nc3, White's knight defends the e4-pawn. In the Winawer, Black doesn't attack e4 again. Black pins the defender instead, with 3...Bb4. What does the pin threaten, how does White answer it, and what does each side get once the bishop takes the knight?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The pin and the main line',
      intro: 'Watch the c3-knight. First it is pinned, then it is taken, and the trade changes the pawns on both sides.',
      moves: TRADE,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The French position',
          text: '2...d5. The d5-pawn attacks e4. White usually defends the pawn, pushes it or trades it.',
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'The knight defends e4',
          text: '3.Nc3. The knight develops and guards e4. It is the only White piece that defends the pawn.',
          arrows: [['c3', 'e4', 'green']],
          marks: ['e4']
        },
        6: {
          title: 'The pin',
          text: "3...Bb4. The Winawer. The bishop pins the c3-knight to White's king on e1, because d2 is empty. A piece pinned to the king may not move at all, so the knight can't take back on e4. Black now threatens ...dxe4, winning a pawn.",
          arrows: [['b4', 'c3', 'red'], ['c3', 'e1', 'yellow'], ['d5', 'e4', 'red']]
        },
        7: {
          title: 'Push past the pin',
          text: "4.e5. White's main answer. The pawn steps out of the attack, so the pin no longer costs a pawn. The center is locked, White gains kingside space, and the e5-pawn takes away f6, the usual square of Black's g8-knight.",
          arrows: [['e5', 'f6', 'red']],
          marks: ['f6']
        },
        8: {
          title: 'Hit the base',
          text: "4...c5. The usual French break. The pawn attacks d4, the base of White's chain. The b4-bishop keeps the knight pinned.",
          arrows: [['c5', 'd4', 'red'], ['b4', 'c3', 'red']],
          marks: ['d4']
        },
        9: {
          title: 'The question',
          text: '5.a3. The pawn attacks the bishop. Black must decide now: take the knight, or keep the bishop with 5...Ba5 (Module 7.6). Both are playable.',
          arrows: [['a3', 'b4', 'red'], ['b4', 'a5', 'blue']]
        },
        10: {
          title: 'Bishop for knight',
          text: "5...Bxc3+. Black takes with check. Black gives up the dark-squared bishop, and keeps the c8-bishop, which is still shut in by the e6-pawn.",
          arrows: [['c3', 'e1', 'red']],
          marks: ['c8']
        },
        11: {
          title: 'Doubled pawns',
          text: "6.bxc3. The only good reply: 6.Bd2? Bxd2+ just loses a piece. White now has doubled c-pawns (c2 and c3) and a lonely a3-pawn. In return White has the two bishops, the half-open b-file, and Black's kingside dark squares (f6, g7, h6) have lost their bishop.",
          arrows: [['b1', 'b7', 'blue']],
          marks: ['c2', 'c3', 'a3', 'g7']
        }
      }
    },
    {
      kind: 'text',
      title: 'Who got what?',
      body:
        "Material is level: a bishop for a knight. But both sides have changed their position.\n\n**White** has the **two bishops** against bishop and knight, and more space on the kingside. Black's **dark-squared bishop is gone**, so f6, g7 and h6 have lost their best defender. That is why White's queen often jumps to g4 to attack g7 (Module 7.3). White's c1-bishop has no rival on the dark squares. It often heads for a3 (after the a-pawn moves on to a4) and works along the a3–f8 diagonal.\n\n**Black** has a sound pawn chain and **targets**: the doubled pawns on c2 and c3 and the lonely a-pawn. They are on the queenside, where Black's ...c5 pawn already presses. Black's c8-bishop is still blocked by its own e6-pawn, which is the price of this set-up.\n\nThe engine gives White a small edge in the main line. It is a sharp, unbalanced fight, which is why players who want to win with Black like it."
    },
    {
      kind: 'walkthrough',
      title: 'What the pin threatens: 4.Nf3?',
      intro: 'A natural developing move that ignores the pin. Count the defenders of e4.',
      moves: NF3,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'e4 has one defender',
          text: '3...Bb4. The c3-knight is the only piece guarding e4, and it is pinned to the king.',
          arrows: [['b4', 'c3', 'red'], ['c3', 'e1', 'yellow']],
          marks: ['e4']
        },
        7: {
          title: 'Ignoring the pin',
          text: '4.Nf3. A normal developing move, but it does nothing for e4.',
          marks: ['e4'],
          ann: '?'
        },
        8: {
          title: 'Black takes',
          text: "4...dxe4. Black wins a pawn. Nxe4 is illegal: the knight would leave the king in check from the b4-bishop. The e4-pawn now attacks the f3-knight too.",
          arrows: [['e4', 'f3', 'red'], ['b4', 'e1', 'red']],
          ann: '!'
        },
        9: {
          title: 'A pawn down',
          text: '5.Ne5. The knight escapes. Black is a clean pawn up and clearly better. Against 3...Bb4, White has to do something about e4 at once.',
          marks: ['e4']
        }
      }
    },
    {
      kind: 'tip',
      title: "For White: dealing with the pin",
      body:
        "After 3...Bb4, e4 is the problem. **4.e5** is the main move: the pawn moves out of the attack. White can also unpin with 4.Bd2, which puts a piece between the knight and the king, trade with 4.exd5, or ask the bishop at once with 4.a3. Module 7.8 shows these side roads. What White can't do is play an ordinary developing move like 4.Nf3 and hope."
    },
    {
      kind: 'history',
      title: 'Winawer, Nimzowitsch and Botvinnik',
      body:
        "The variation is named after Szymon Winawer, a Polish master of the 19th century. Some older books call 3...Bb4 the Nimzowitsch Variation. Aron Nimzowitsch and later Mikhail Botvinnik made it a serious weapon. It was once Black's most common answer to 3.Nc3. Today 3...Nf6 is played more often, but the Winawer is still a favorite of players who want a sharp game."
    }
  ],
  takeaway:
    "3...Bb4 pins the c3-knight, the only defender of e4, so White must act at once, usually with 4.e5. After 4...c5 5.a3 Bxc3+ 6.bxc3, White has doubled c-pawns and Black has weak dark squares on the kingside. White has the two bishops, and Black has targets on c3 and a3.",
  lookAhead: "Module 7.2 shows Black's main sixth move, 6...Ne7, and the plans both sides follow from there.",
  drills: [
    {
      title: 'Play the Winawer main line',
      prompt: "You're Black. You have pinned the knight with 3...Bb4, and White pushes 4.e5. Hit the base of the chain, answer a3 by taking on c3, then develop your king's knight.",
      moves: WINAWER_MAIN,
      start: 6,
      side: 'black',
      hints: ['First hit d4 with your c-pawn. When a3 attacks the bishop, take the knight with check.', "The e5-pawn covers f6, so your g8-knight goes to e7."],
      success: '4...c5, 5...Bxc3+ and 6...Ne7. This is the Winawer main line.'
    },
    {
      title: 'Answer the pin as White',
      prompt: "You're White. Black has just pinned your knight with 3...Bb4. Get the e-pawn out of the attack, put the question to the bishop, and recapture correctly.",
      moves: TRADE,
      start: 6,
      side: 'white',
      hints: ['Your e4-pawn is attacked, and the knight can\'t defend it. Push it.', 'After ...c5, attack the bishop with your a-pawn. Take back on c3 with a pawn.'],
      success: '4.e5, 5.a3 and 6.bxc3. You have the two bishops; Black will aim at your doubled c-pawns.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'Black has just played 3...Bb4. What is pinned, and to what?',
      moves: WINAWER,
      orientation: 'black',
      choices: [
        { text: 'The c3-knight, to the king on e1', correct: true, why: 'Right. The d2-square is empty, so the king stands right behind the knight. A pin to the king is absolute: the knight may not move at all.' },
        { text: 'The c3-knight, to the queen on d1', why: 'The queen is not on that diagonal. The line runs b4, c3, d2, e1, so the piece behind the knight is the king.' },
        { text: 'The d4-pawn, to the king', why: 'The b4-bishop does not touch d4. Its diagonals run through c3 and c5, not d4.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White has just played 4.Nf3?, ignoring the pin. What is Black\'s best move?',
      moves: `${WINAWER} Nf3`,
      orientation: 'black',
      choices: [
        { text: '4...dxe4', correct: true, why: 'Yes. The pinned knight cannot take back, so Black is simply a pawn up, and the pawn now hits the f3-knight.' },
        { text: '4...Bxc3+', why: 'This gives up the bishop and lets White take back with a pawn. After 5.bxc3 the game is level. Keep the pin and take on e4 at once.' },
        { text: '4...Nf6', why: 'A good developing move, but it misses the free pawn. With the knight pinned, e4 is undefended right now.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6.bxc3, what has White got in return for the doubled c-pawns?',
      moves: TRADE,
      orientation: 'white',
      choices: [
        { text: 'The two bishops, and weak dark squares around Black\'s king', correct: true, why: 'Right. Black gave up the dark-squared bishop, so f6, g7 and h6 have lost their best guard.' },
        { text: 'An extra pawn', why: 'Material is level: a bishop for a knight, then a pawn recapture. The trade is about structure and bishops, not material.' },
        { text: 'An open c-file for the rooks', why: 'The c-file is not open: White has pawns on c2 and c3 and Black has one on c5. The file that opened is the b-file, and it is only half-open.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 6.bxc3, which White pawns are Black\'s long-term targets?',
      moves: TRADE,
      orientation: 'black',
      choices: [
        { text: 'The doubled c-pawns and the a3-pawn', correct: true, why: 'Yes. No pawn can defend c3 or a3, so Black aims pieces at them, for example with ...Qa5, which hits both.' },
        { text: 'The e5-pawn', why: 'e5 is the head of the chain and is well protected by d4. Black\'s main targets are on the queenside.' },
        { text: 'The f2- and g2-pawns', why: 'Those are still at home and safe. The weak pawns White got from the trade are on the queenside.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In the Winawer main line, what is the point of White\'s 5.a3?',
      moves: `${WINAWER} e5 c5 a3`,
      orientation: 'white',
      choices: [
        { text: 'It attacks the bishop: Black must take on c3 or retreat', correct: true, why: 'Right. White is happy to take back with the b-pawn and get the two bishops. 5...Ba5 is the main alternative.' },
        { text: 'It defends the c3-knight', why: 'A pawn on a3 guards b4, not c3. It attacks the bishop.' },
        { text: 'It stops ...c5', why: 'Black has already played ...c5. The a-pawn attacks the bishop on b4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Black gave up the dark-squared bishop with ...Bxc3+. Which squares near Black\'s king are now weaker?',
      moves: TRADE,
      orientation: 'black',
      choices: [
        { text: 'The dark squares f6, g7 and h6', correct: true, why: 'Right. No Black bishop can guard dark squares any more. That is why White\'s queen often goes to g4 to attack g7.' },
        { text: 'The light squares f7 and h7', why: 'Black still has the light-squared bishop on c8. The squares that lost their guard are the dark ones.' },
        { text: 'd5 and e6', why: 'Those squares hold Black\'s own chain pawns, and they are light squares. The weakness is on the dark squares near the king.' }
      ]
    }
  ],
  key: { name: 'Winawer: 6.bxc3, doubled c-pawns', moves: TRADE, orientation: 'black' },
  terms: [
    { term: 'Absolute pin', meaning: 'A pin to the king. The pinned piece may not move at all, because moving it would put its own king in check.' },
    { term: 'Doubled pawns', meaning: 'Two pawns of the same color on one file, like White\'s c2 and c3. They can\'t protect each other.' },
    { term: 'Bishop pair', meaning: 'Having both bishops when the opponent has given one up. In open positions the two bishops are a real advantage.' },
    { term: 'Half-open file', meaning: 'A file with pawns of only one color on it. After 6.bxc3, the b-file has a Black pawn but no White pawn.' }
  ]
})
