import { defineModule } from '../../../types'
import { DRAGON, YUGOSLAV } from '../lines'

/** dragon-yug-9bc4: 9.Bc4 Bd7 10.O-O-O Rc8 11.Bb3 Ne5 12.Kb1 */
const BC4 = `${YUGOSLAV} Bc4 Bd7 O-O-O Rc8 Bb3 Ne5 Kb1`
/** model-karpov-korchnoi-1974-g2, moves 7 to 13 (7...Nc6 8.Qd2 O-O reaches the Yugoslav) */
const KK_NC4 = `${DRAGON} Be3 Bg7 f3 Nc6 Qd2 O-O Bc4 Bd7 h4 Rc8 Bb3 Ne5 O-O-O Nc4`
const KK = `${KK_NC4} Bxc4 Rxc4`

export default defineModule({
  id: '3.3',
  title: 'The Yugoslav race: 9.Bc4',
  minutes: 11,
  level: 2,
  goals: [
    'Learn the 9.Bc4 main line and what each move is for',
    "Know Black's plan: ...Rc8 and the knight trip ...Ne5–c4",
    "Know White's plan: Bb3, Kb1, then h4–h5 and Bh6"
  ],
  intro:
    "After 8...Nc6, the main move is 9.Bc4, and soon the kings stand on opposite sides of the board. From then on it is a race: who breaks through to the enemy king first? This module shows how both sides line up their pieces for that race.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The 9.Bc4 main line',
      intro: 'Watch the c-file for Black and the light-squared bishop for White.',
      moves: BC4,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'The Yugoslav',
          text: '8...Nc6. Both sides have developed. White still has to place the light-squared bishop and decide where the king goes.',
          marks: ['f1']
        },
        17: {
          title: 'The bishop on c4',
          text: '9.Bc4. The bishop aims at f7, next to Black\'s king. It also watches d5, so Black\'s freeing move ...d5 is hard to play.',
          arrows: [['c4', 'f7', 'red'], ['c4', 'd5', 'blue']]
        },
        18: {
          title: 'Clearing c8',
          text: '9...Bd7. Black develops the last minor piece and clears c8 for a rook.',
          arrows: [['a8', 'c8', 'blue']]
        },
        19: {
          title: 'Opposite sides',
          text: '10.O-O-O. White castles long. The kings are now on opposite wings, and the race is on.',
          marks: ['c1', 'g8']
        },
        20: {
          title: 'The half-open c-file',
          text: "10...Rc8. Black has no c-pawn, so the c-file is half-open for Black's rook. Behind the c6-knight, the rook lines up with the c4-bishop.",
          arrows: [['c8', 'c4', 'yellow']],
          marks: ['c6']
        },
        21: {
          title: 'Out of the way',
          text: '11.Bb3. The bishop leaves the c-file before Black\'s knight jumps and hits it. From b3 it still aims at f7.',
          arrows: [['b3', 'f7', 'blue']]
        },
        22: {
          title: 'The knight heads for c4',
          text: '11...Ne5. The knight is going to c4, where it would attack the d2-queen, the e3-bishop and the b2-pawn. The engine prefers 11...Nxd4 followed by ...b5, which keeps White\'s edge smaller.',
          arrows: [['e5', 'c4', 'green']],
          marks: ['c4']
        },
        23: {
          title: 'A safety move',
          text: '12.Kb1. The king steps off the c-file, where Black\'s rook waits, and guards the a2-pawn. The engine prefers White here, but both kings will soon come under fire.',
          arrows: [['c1', 'b1', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'How the race works',
      body:
        "With the kings on opposite sides, each player can throw pawns at the other king without weakening their own. Material matters less than time: one wasted move can decide who gets there first.\n\n**Black's tools:** the rook on the half-open c-file, the knight trip ...Ne5–c4, the queen on a5, and pawn pushes like ...b5–b4 to chase the c3-knight. The g7-bishop waits behind the f6-knight, aimed down the long diagonal.\n\n**White's tools:** h4–h5 to open the h-file, g4 to support it and chase the f6-knight, and Bh6 to trade off the Dragon bishop. Module 3.4 shows White's attack, and Module 3.5 shows Black's."
    },
    {
      kind: 'walkthrough',
      title: 'Karpov–Korchnoi 1974: the first moves',
      intro: 'Game 2 of the 1974 Candidates final, a textbook Yugoslav that Karpov won. The players reached our position with 7...Nc6 8.Qd2 O-O.',
      moves: KK,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'The same position',
          text: '8...O-O. A different move order, but the same Yugoslav position as before.',
          marks: ['g8']
        },
        17: {
          title: 'Bishop to c4',
          text: '9.Bc4. The same bishop move as the main line.',
          arrows: [['c4', 'f7', 'red']]
        },
        18: {
          title: 'Bishop to d7',
          text: '9...Bd7. Black clears c8 for the rook again.',
          arrows: [['a8', 'c8', 'blue']]
        },
        19: {
          title: 'The h-pawn starts early',
          text: '10.h4. Karpov pushes the h-pawn before castling. It is heading for h5, to break open the h-file in front of Black\'s king.',
          arrows: [['h4', 'h5', 'green'], ['h5', 'g6', 'red']]
        },
        20: {
          title: 'Rook to c8',
          text: '10...Rc8. The rook takes the half-open c-file.',
          arrows: [['c8', 'c4', 'yellow']]
        },
        21: {
          title: 'Bishop to b3',
          text: '11.Bb3. The bishop steps off the c-file, just like in the main line.',
          arrows: [['c4', 'b3', 'green']]
        },
        22: {
          title: 'Knight to e5',
          text: '11...Ne5. The knight heads for c4.',
          arrows: [['e5', 'c4', 'green']]
        },
        23: {
          title: 'Long castling',
          text: '12.O-O-O. White castles, and the rook on h1 stays behind the h-pawn, ready for the h-file.',
          arrows: [['h1', 'h4', 'blue']]
        },
        24: {
          title: 'The knight lands',
          text: "12...Nc4. The knight hits the queen and the e3-bishop. Here the engine prefers 12...h5, stopping the h-pawn (Module 3.4). Karpov shows why.",
          arrows: [['c4', 'd2', 'red'], ['c4', 'e3', 'red']]
        },
        25: {
          title: 'Bishop takes knight',
          text: '13.Bxc4. White removes the knight and gives up the light-squared bishop. It had done its job: it gained time and kept ...d5 away.',
          marks: ['c4']
        },
        26: {
          title: 'The rook on c4',
          text: '13...Rxc4. The rook lands on c4 and hits both White knights, though each one is guarded. White is clearly better now, because the h-pawn is ready to go. Module 3.4 picks up the game here.',
          arrows: [['c4', 'c3', 'red'], ['c4', 'd4', 'red'], ['h4', 'h5', 'green']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Count the moves, not the pawns',
      body:
        'In a race, before you grab a pawn ask: how many moves until my attack lands, and how many until my opponent\'s does? A move that defends in advance, like 12.Kb1, can be worth more than a pawn.'
    }
  ],
  takeaway:
    "In the 9.Bc4 Yugoslav, White plays Bb3, castles long, tucks the king on b1 and gets ready for h4–h5. Black uses the c-file and the knight trip ...Ne5–c4. It is a race, and every move counts.",
  lookAhead:
    "Module 3.4 shows White's side of the race: h4–h5, Bh6 to trade the Dragon bishop, and the open h-file.",
  drills: [
    {
      title: "Play White's main line",
      prompt: "You're White in the Yugoslav position after 8...Nc6. Play the 9.Bc4 main line: bishop out, castle long, bishop back, king to safety.",
      moves: BC4,
      start: 16,
      side: 'white',
      hints: [
        'Start with the bishop that is still on f1. It should aim at f7.',
        'Castle queenside, move the bishop off the c-file when the rook arrives, and finish with a king move.'
      ],
      success: '9.Bc4, 10.O-O-O, 11.Bb3 and 12.Kb1. The bishop is safe from ...Ne5, and the king is off the c-file.'
    },
    {
      title: "Set up Black's c-file",
      prompt: "You're Black. White has played 9.Bc4. Develop your last minor piece and put a rook on the half-open file.",
      moves: `${YUGOSLAV} Bc4 Bd7 O-O-O Rc8`,
      start: 17,
      side: 'black',
      hints: [
        'Your light-squared bishop is still on c8, blocking a rook.',
        'Bishop to d7, then the a8-rook to the c-file.'
      ],
      success: '9...Bd7 and 10...Rc8. The rook stands on the half-open c-file, lined up with the c4-bishop.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'White to move. Why does White usually play 11.Bb3 here?',
      moves: `${YUGOSLAV} Bc4 Bd7 O-O-O Rc8`,
      orientation: 'white',
      choices: [
        { text: 'After ...Ne5, the knight and the c8-rook would both hit the c4-bishop', correct: true, why: 'Right. The rook is lined up behind the c6-knight. Moving the bishop first means Black gains no time.' },
        { text: 'To start attacking f7', why: 'The bishop already aimed at f7 from c4. The reason is the c-file.' },
        { text: 'To stop ...Nxd4', why: 'Bb3 does nothing about d4. The bishop is leaving the c-file before it gets hit.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Black has just played 12...Nc4. What does the knight attack?',
      moves: KK_NC4,
      orientation: 'black',
      choices: [
        { text: 'The d2-queen, the e3-bishop and the b2-pawn', correct: true, why: 'Yes. That is why White usually takes it at once with Bxc4.' },
        { text: 'The d4-knight', why: 'A knight on c4 does not attack d4. Its targets are d2, e3 and b2.' },
        { text: 'The king on c1', why: 'A knight on c4 does not reach c1. But it does hit the queen and the e3-bishop.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Which plan belongs to White in the 9.Bc4 Yugoslav?',
      choices: [
        { text: 'h4–h5, g4 and Bh6 against Black\'s king', correct: true, why: "Right. White opens the h-file and trades off the Dragon bishop." },
        { text: '...Rc8 and ...Ne5–c4', why: "That is Black's plan. White attacks on the other wing." },
        { text: 'Trade queens and play for an endgame', why: 'With the kings on opposite sides, White wants to attack, not trade queens.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the main point of 12.Kb1?',
      moves: BC4,
      orientation: 'white',
      choices: [
        { text: "The king steps off the c-file and guards a2", correct: true, why: 'Yes. A move of defense in advance: tactics on the c-file become less dangerous.' },
        { text: 'It defends the c3-knight', why: 'The king on b1 is not next to c3. It guards a2 and leaves the c-file.' },
        { text: 'It frees c1 for the rook', why: 'The rooks are already on d1 and h1. The point is king safety.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In the Yugoslav, why does 9.Bc4 make it hard for Black to play ...d5?',
      choices: [
        { text: 'The c4-bishop watches d5, so the square is covered', correct: true, why: 'Right. With the bishop on c4, ...d5 usually just loses a pawn. Module 3.6 shows what happens when White castles before Bc4.' },
        { text: 'The bishop pins the d-pawn', why: 'Nothing pins the d6-pawn. The bishop simply covers d5.' },
        { text: 'It attacks the d6-pawn', why: 'd6 is a dark square and the c4-bishop moves on light squares, so it can never attack d6. It covers d5.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After ...Nc4 Bxc4 Rxc4 in the Yugoslav, which pieces does the rook on c4 hit?',
      moves: KK,
      orientation: 'black',
      choices: [
        { text: 'The c3-knight and the d4-knight', correct: true, why: 'Yes. Both are guarded, but the rook ties White down and can later be given up on c3.' },
        { text: 'The c2-pawn', why: 'The c3-knight stands in front of c2, so the rook does not reach it.' },
        { text: 'The h4-pawn', why: 'The d4-knight blocks the fourth rank, so the rook does not reach h4.' }
      ]
    }
  ],
  key: { name: 'Yugoslav, 9.Bc4 main line: 12.Kb1', moves: BC4, orientation: 'black' },
  terms: [
    { term: 'Half-open file', meaning: 'A file with no pawn of your own on it but an enemy pawn still there. Your rooks can use it to put pressure on the enemy.' },
    { term: 'Race', meaning: 'When the kings castle on opposite sides and both players attack. Time matters more than material.' },
    { term: 'Prophylaxis', meaning: 'A move that stops the opponent\'s idea before it happens, like 12.Kb1 taking the king off the c-file.' }
  ]
})
