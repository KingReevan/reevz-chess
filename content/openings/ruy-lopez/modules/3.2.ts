import { defineModule } from '../../../types'
import { EXCHANGE } from '../../../lines'

/** exchange-5bc5-trap */
const TRAP = `${EXCHANGE} O-O Bc5 Nxe5 Qd4 Nf3 Qxe4 Re1`
/** exchange-ne7 */
const NE7 = `${EXCHANGE} O-O Ne7 Nxe5 Qd4 Nf3 Qxe4`

export default defineModule({
  id: '3.2',
  title: '5.O-O: now e5 really is attacked',
  minutes: 10,
  level: 2,
  goals: [
    'Use the threat of Nxe5 after 5.O-O',
    'Punish 5...Bc5? and know what to do if Black avoids the pin',
    'Spot the one exception: 5...Ne7 blocks the e-file'
  ],
  intro:
    "In Module 2.2 you saw the Re1 pin from the outside. Now you sit in White's chair. After 5.O-O, every Black move has to answer one question: what about e5? This module shows how to cash in when Black ignores it, and the one clever reply where taking doesn't work.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Testing Black: 5...Bc5?',
      intro: "Think like White. At each step, ask what Black's best try is before you play your move.",
      moves: TRAP,
      start: 9,
      orientation: 'white',
      steps: {
        9: {
          title: 'The threat is switched on',
          text: "5.O-O. Castling doesn't touch e5, but now 6.Nxe5 is a real threat. If Black tries the ...Qd4 trick, ...Qxe4 won't be check, and the rook is one step from e1.",
          arrows: [['f3', 'e5', 'red'], ['f1', 'e1', 'blue']],
          marks: ['e5']
        },
        10: {
          title: 'Black ignores e5',
          text: '5...Bc5. A natural developing move, but it does nothing for the e5-pawn. Your question as White: can I take, and what happens next?',
          arrows: [['f3', 'e5', 'red']],
          marks: ['e5'],
          ann: '?'
        },
        11: {
          title: 'Take the pawn',
          text: "6.Nxe5. Before taking, White checked Black's only real try: the queen fork on d4. White is ready for it.",
          arrows: [['d8', 'd4', 'blue']],
          ann: '!'
        },
        12: {
          title: 'The fork arrives',
          text: '6...Qd4. The queen hits the knight on e5 and the pawn on e4, just as in Module 2.2.',
          arrows: [['d4', 'e5', 'yellow'], ['d4', 'e4', 'yellow']]
        },
        13: {
          title: 'Retreat with an attack',
          text: '7.Nf3. The knight steps back and hits the queen. White is a pawn up, and the e4-pawn is bait.',
          arrows: [['f3', 'd4', 'red']]
        },
        14: {
          title: 'Into the pin',
          text: "7...Qxe4. The queen takes, but it now stands on the e-file with its own king, and nothing in between.",
          marks: ['e4', 'e8'],
          ann: '??'
        },
        15: {
          title: 'The rook arrives',
          text: '8.Re1. The queen is pinned to the king. Black must give it up for the rook. All of this works only because White castled first.',
          arrows: [['e1', 'e4', 'red'], ['e4', 'e8', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'tip',
      title: "If Black doesn't take the bait",
      body:
        "After 5...Bc5 6.Nxe5 Qd4 7.Nf3, a careful opponent won't grab e4. The queen retreats instead. That's fine: you are simply a pawn up with a healthy position. The pin is a bonus, not the point. The point is that e5 was free."
    },
    {
      kind: 'text',
      title: "Black's sound answers to 5.O-O",
      body:
        "Black's good fifth moves all deal with e5 at once, in one of three ways.\n\n**Guard it.** 5...f6 (the Gligorić, Module 3.3), 5...Qd6 and 5...Bd6 (Module 3.5) all defend the pawn.\n\n**Pin the attacker.** 5...Bg4 pins the f3-knight to the queen on d1. If 6.Nxe5??, then 6...Bxd1 wins the queen (Module 3.4).\n\n**Block the e-file in advance.** 5...Ne7 lets White take on e5, because the ...Qd4 trick works again. The next walkthrough shows how."
    },
    {
      kind: 'walkthrough',
      title: 'The exception: 5...Ne7',
      intro: 'Same threat, same fork. Watch the e-file this time.',
      moves: NE7,
      start: 9,
      orientation: 'white',
      steps: {
        9: {
          title: 'White castles',
          text: '5.O-O. White threatens Nxe5, exactly as before.',
          arrows: [['f3', 'e5', 'red']],
          marks: ['e5']
        },
        10: {
          title: 'A knight on the e-file',
          text: "5...Ne7. The knight is heading for g6. It doesn't guard e5, but look where it stands: on the e-file, between e4 and Black's king.",
          arrows: [['e7', 'g6', 'blue']],
          marks: ['e7']
        },
        11: {
          title: 'White takes anyway',
          text: '6.Nxe5. White grabs the pawn. Can Black repeat the fork?',
          marks: ['e5']
        },
        12: {
          title: 'The fork again',
          text: '6...Qd4. Yes. The queen hits the knight and the e4-pawn once more.',
          arrows: [['d4', 'e5', 'yellow'], ['d4', 'e4', 'yellow']]
        },
        13: {
          title: 'The knight retreats',
          text: '7.Nf3. The knight attacks the queen. White hopes for Re1 next, like last time.',
          arrows: [['f3', 'd4', 'red']]
        },
        14: {
          title: 'This time it is safe',
          text: '7...Qxe4. If White plays Re1 now, the queen just steps away, because the knight on e7 blocks the e-file. Material is level again.',
          arrows: [['f1', 'e1', 'blue']],
          marks: ['e7']
        }
      }
    },
    {
      kind: 'warning',
      title: 'Check the e-file before you grab',
      body:
        "Nxe5 works against 5...Bc5 because Black's queen ends up alone on the e-file with its king. Before you take on e5, look at the squares between e4 and e8. If a black piece stands there, like the knight on e7, Re1 pins nothing and Black wins the pawn back."
    },
    {
      kind: 'history',
      title: "Fischer's weapon",
      body:
        'Bobby Fischer revived the Exchange Variation with 5.O-O. His win against Gligorić at the 1966 Havana Olympiad is the classic model game for this line.'
    }
  ],
  takeaway:
    'After 5.O-O, Nxe5 is a real threat, because ...Qd4 and ...Qxe4 would run into the Re1 pin. Black must guard e5, pin the f3-knight, or block the e-file with ...Ne7.',
  lookAhead:
    "Next: Black's most solid answer, 5...f6, and the endgame White steers toward.",
  drills: [
    {
      title: 'Cash in on 5...Bc5?',
      prompt: "You're White. Castle, and when Black ignores e5, take it. If the queen grabs e4, punish it.",
      moves: TRAP,
      start: 8,
      side: 'white',
      hints: [
        'First get your king safe. That is what makes the whole trick work.',
        'After ...Qd4, retreat the knight with an attack on the queen. If the queen takes e4, bring the f1-rook to e1.'
      ],
      success: '5.O-O, 6.Nxe5, 7.Nf3 and 8.Re1! The queen is pinned to the king and will be lost for a rook.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: "White to move. Black's last move ignored e5. What's best?",
      moves: `${EXCHANGE} O-O Bc5`,
      orientation: 'white',
      choices: [
        {
          text: '6.Nxe5',
          correct: true,
          why: "Right. After 6...Qd4 7.Nf3 Qxe4?? 8.Re1 pins the queen, and if Black doesn't grab e4, you're simply a pawn up."
        },
        { text: '6.d3', why: 'Solid, but it guards a pawn nobody is attacking. Black gets time to defend e5, and the chance is gone.' },
        { text: '6.Re1', why: 'It prepares the pin, but it gives Black a free move to guard e5. Take the pawn while it is there.' }
      ]
    },
    {
      type: 'concept',
      prompt: "White to move. Why doesn't Re1 win Black's queen here?",
      moves: NE7,
      orientation: 'white',
      choices: [
        { text: "The knight on e7 blocks the e-file, so the queen isn't pinned", correct: true, why: 'Exactly. With the knight in between, the queen can simply step away from the rook.' },
        { text: 'The c8-bishop defends the queen', why: "The c8-bishop's diagonal runs toward h3, not e4. The real reason is the knight on e7." },
        { text: "White's rook can't reach e1", why: "It can: the f1-rook gets to e1 in one move. It just doesn't pin anything." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 5.O-O, which Black move does NOT deal with the threat to e5?',
      choices: [
        { text: '5...Bc5', correct: true, why: 'Right. It develops a piece, but 6.Nxe5! wins a pawn, because ...Qd4 and ...Qxe4 runs into Re1.' },
        { text: '5...f6', why: "This guards e5 with a pawn. It's Black's main move, the Gligorić Variation." },
        { text: '5...Bg4', why: 'This pins the f3-knight. If 6.Nxe5??, then 6...Bxd1 wins the queen.' },
        { text: '5...Qd6', why: 'The queen guards e5 directly. This is the Bronstein Variation.' }
      ]
    },
    {
      type: 'order',
      prompt: 'Why does White castle on move 5 instead of taking on e5 straight away?',
      choices: [
        { text: "So that ...Qxe4 isn't check, and Re1 can pin the queen", correct: true, why: 'Yes. Castling moves the king off the e-file and brings the rook within one move of e1.' },
        { text: 'Castling defends the e4-pawn', why: "The king on g1 doesn't guard e4. Castling matters because of the rook and the e-file." },
        { text: '5.Nxe5 is an illegal move', why: "5.Nxe5 is legal. It just wins nothing: 5...Qd4 6.Nf3 Qxe4+ comes with check." }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'Black has played 5...Bg4. Why is 6.Nxe5 a mistake here?',
      moves: `${EXCHANGE} O-O Bg4`,
      orientation: 'white',
      choices: [
        { text: "6...Bxd1 wins White's queen, because the knight was pinned", correct: true, why: 'Right. Once the knight leaves f3, the bishop on g4 sees all the way to d1.' },
        { text: '6...Qd4 forks the knight and e4', why: 'That fork exists, but there is something much bigger. Look at the diagonal from g4 to d1.' },
        { text: 'It isn\'t a mistake: White wins a clean pawn', why: 'Look at the bishop on g4. Once the knight leaves f3, the bishop takes the queen on d1.' }
      ]
    },
    {
      type: 'concept',
      prompt: "After 5.O-O Bc5 6.Nxe5 Qd4 7.Nf3, Black's queen retreats instead of taking on e4. What has White gained?",
      choices: [
        { text: 'White is simply a pawn up', correct: true, why: "Yes. The pin is only a bonus. White took on e5 and Black never won anything back." },
        { text: 'Nothing: material is level', why: 'Count again. White took on e5, and Black did not take anything in return.' },
        { text: "White's king is now unsafe", why: 'White castled on move 5 and the king is perfectly safe on g1.' }
      ]
    }
  ],
  key: { name: 'Exchange Variation: 5.O-O, threatening Nxe5', moves: `${EXCHANGE} O-O`, orientation: 'white' },
  terms: [
    { term: 'Threat', meaning: 'A move you are ready to play next that would win something. Your opponent has to deal with it.' },
    { term: 'Absolute pin', meaning: 'A pin against the king. The pinned piece may only move along the line of the pin.' },
    { term: 'Fork', meaning: 'One piece attacks two or more enemy pieces or pawns at the same time.' }
  ]
})
