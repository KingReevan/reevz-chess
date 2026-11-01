import { defineModule } from '../../../types'
import { SVESHNIKOV, SVESHNIKOV_B5 } from '../lines'

/** 9.Be2? b4: the pawn forks both knights (engine-checked illustration) */
const FORK = `${SVESHNIKOV_B5} Be2 b4`
/** svesh-9nd5-qa5: 9.Nd5 Qa5+ 10.Bd2 Qd8 11.Bg5 Qa5+ 12.Bd2 Qd8 */
const QA5 = `${SVESHNIKOV_B5} Nd5 Qa5+ Bd2 Qd8 Bg5 Qa5+ Bd2 Qd8`

export default defineModule({
  id: '5.2',
  title: '7.Bg5 a6 8.Na3 b5: the knight on the rim',
  minutes: 10,
  level: 3,
  goals: [
    'Learn the main line 7.Bg5 a6 8.Na3 b5 and what each move does',
    'See why ...b5 leaves the a3-knight stuck, and the ...b4 fork it threatens',
    "Know the ...Qa5+ repetition offer, and that White doesn't have to accept it"
  ],
  intro:
    "After 6...d6, the classical main line is 7.Bg5, aiming at the d5 square. Black answers by chasing the b5-knight to the edge of the board and then trapping it there with ...b5. Why is a knight on a3 such a problem for White? And what can Black do if a draw would be welcome?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Chasing the knight to the edge',
      intro: "Follow White's b5-knight. After four moves it has almost no squares left.",
      moves: SVESHNIKOV_B5,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'The Sveshnikov position',
          text: '6...d6. Black has covered d6. The fight is about d5: right now only the f6-knight guards it for Black.',
          arrows: [['f6', 'd5', 'green']],
          marks: ['d5']
        },
        13: {
          title: 'Pinning the defender',
          text: "7.Bg5. The bishop pins the f6-knight to the queen, because e7 is empty. White's plan is Bxf6 to remove that defender, and then a knight jump to d5.",
          arrows: [['g5', 'd8', 'red'], ['c3', 'd5', 'blue']],
          marks: ['f6']
        },
        14: {
          title: 'Now chase the knight',
          text: '7...a6. With d6 covered, Black chases the b5-knight. This is the right moment, and almost the only good move: other moves let White take on f6 and land on d5 with a big edge.',
          arrows: [['a6', 'b5', 'red']],
          ann: '!'
        },
        15: {
          title: 'To the edge',
          text: '8.Na3. The knight retreats to the rim. It has no better square: Black guards a7, c7, d4 and d6.',
          arrows: [['b5', 'a3', 'blue']]
        },
        16: {
          title: 'The knight is stuck',
          text: '8...b5. The pawn takes c4 away from the knight, and the a6-pawn guards b5. The only safe square for the a3-knight is b1. And ...b4 next would attack both of White\'s knights at once.',
          arrows: [['b5', 'c4', 'red'], ['b5', 'b4', 'yellow']],
          marks: ['a3']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why ...b5 matters',
      body:
        "Without ...b5, the a3-knight would come straight back with Nc4, where it attacks the weak d6-pawn. With ...b5, Black shuts the knight out. To bring it back, White usually plays c3 and then Nc2, or c4 to challenge the b5-pawn. Each of those costs time.\n\nThe pawn on b5 also threatens ...b4, a **fork** of the a3- and c3-knights. So White can't sit still on move nine. The two main answers are 9.Bxf6 (Module 5.3) and 9.Nd5 (Module 5.4)."
    },
    {
      kind: 'walkthrough',
      title: 'What if White ignores ...b4?',
      intro: 'Here White plays a normal-looking developing move and forgets about the threat.',
      moves: FORK,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'Two knights in a row',
          text: '8...b5. The knights on a3 and c3 stand on the same rank, with one empty square between them. A pawn on b4 would hit both.',
          marks: ['a3', 'c3']
        },
        17: {
          title: 'A careless move',
          text: '9.Be2. It develops a piece and gets ready to castle. But it does nothing about the threat.',
          ann: '?'
        },
        18: {
          title: 'The pawn fork',
          text: '9...b4. The pawn attacks both knights. White can save only one of them, so Black wins a piece for a pawn.',
          arrows: [['b4', 'a3', 'red'], ['b4', 'c3', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The ...Qa5+ repetition offer',
      intro: 'Sometimes Black is happy with a draw. Here is a trick that invites one, and the reason it does not force one.',
      moves: QA5,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'Main line position',
          text: '8...b5. White now moves the c3-knight to d5, which also gets it out of the way of the ...b4 fork.',
          arrows: [['c3', 'd5', 'blue']]
        },
        17: {
          title: 'The knight lands on d5',
          text: '9.Nd5. The knight jumps into the hole. But the c3-knight was also blocking the diagonal from a5 to White\'s king.',
          arrows: [['a5', 'e1', 'blue']]
        },
        18: {
          title: 'Check!',
          text: '9...Qa5+. The queen checks along the open diagonal. This is weaker than the main move 9...Be7, but it sets up a repetition.',
          arrows: [['a5', 'e1', 'red']],
          ann: '!?'
        },
        19: {
          title: 'Block and attack',
          text: '10.Bd2. The bishop blocks the check and attacks the queen at the same time. The bishop has had to leave g5.',
          arrows: [['d2', 'a5', 'red']]
        },
        20: {
          title: 'The queen goes home',
          text: "10...Qd8. The queen steps back. Black is asking White a question: will you put the bishop back on g5?",
          arrows: [['d2', 'g5', 'blue']]
        },
        21: {
          title: 'White goes back',
          text: '11.Bg5. White returns to the pin on f6. But that opens the diagonal to e1 again.',
          arrows: [['g5', 'd8', 'red']]
        },
        22: {
          title: 'Check again',
          text: '11...Qa5+. The same check as before.',
          arrows: [['a5', 'e1', 'red']]
        },
        23: {
          title: 'Same block',
          text: '12.Bd2. White blocks with the bishop again.',
          arrows: [['d2', 'a5', 'red']]
        },
        24: {
          title: 'A repetition, if White wants it',
          text: "12...Qd8. The same position again. A third time would be a draw. But White doesn't have to repeat: 11.c4, instead of 11.Bg5, keeps a clear edge. Module 5.4 shows it.",
          arrows: [['c2', 'c4', 'green']]
        }
      }
    },
    {
      kind: 'warning',
      title: 'The ...Qa5+ trick does not force a draw',
      body:
        "You will sometimes read that ...Qa5+ forces a draw in this line. It doesn't. White only repeats by choosing 11.Bg5. With 11.c4, White leaves the bishop on d2, where it keeps blocking the a5–e1 diagonal, and stays clearly better. For Black, the trick is a way to offer a draw, not to force one."
    }
  ],
  takeaway:
    "7.Bg5 aims at the defender of d5. Black answers 7...a6 8.Na3 b5, which leaves White's knight stuck on the rim and threatens a ...b4 fork. The ...Qa5+ trick after 9.Nd5 only offers a repetition: White can decline with 11.c4.",
  lookAhead:
    "On move nine White has two main choices. Module 5.3 starts with the sharpest one: 9.Bxf6 gxf6 10.Nd5, which breaks Black's pawns but gives Black the two bishops.",
  drills: [
    {
      title: 'The main line',
      prompt: "You're Black, in the Sveshnikov after 6...d6. White is about to play 7.Bg5. Play Black's next two moves of the main line.",
      moves: SVESHNIKOV_B5,
      start: 12,
      side: 'black',
      hints: ['Chase the b5-knight now that d6 is covered.', 'After 8.Na3, take the c4 square away from the knight with your b-pawn.'],
      success: '7...a6 8.Na3 b5. The knight is stuck on a3, and ...b4 is a threat.'
    },
    {
      title: 'Punish 9.Be2?',
      prompt: "You're Black. White is about to play 9.Be2?, ignoring your threat. Win material.",
      moves: FORK,
      start: 16,
      side: 'black',
      hints: ['Look at the two White knights on a3 and c3.', 'One pawn move attacks both of them.'],
      success: '9...b4! forks the knights. White can only save one, and Black wins a piece for a pawn.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 8...b5, why is the knight on a3 "on the rim" and in trouble?',
      moves: SVESHNIKOV_B5,
      orientation: 'white',
      choices: [
        { text: 'The b5-pawn covers c4 and the a6-pawn guards b5, so its only safe move is back to b1', correct: true, why: 'Right. White needs c3 and Nc2, or c4, to bring it back, and that costs time.' },
        { text: 'It is pinned to White\'s king', why: 'Nothing pins the a3-knight. Its problem is that it has no good squares.' },
        { text: 'The a6-pawn attacks it', why: 'The a6-pawn attacks b5, not a3. The real problem is the b5-pawn, which covers c4.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White has just played 9.Be2?. What should Black play?',
      moves: `${SVESHNIKOV_B5} Be2`,
      orientation: 'black',
      choices: [
        { text: '9...b4', correct: true, why: 'Yes. The pawn forks the a3- and c3-knights, and Black wins a piece for a pawn.' },
        { text: '9...Be7', why: "It's a normal developing move and the game stays level, but it misses the chance to win a piece. Always check for forks first." },
        { text: '9...Rb8', why: 'This guards the b-pawn, but it misses 9...b4, which wins a piece for a pawn at once.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'What is the idea behind 7.Bg5?',
      moves: `${SVESHNIKOV} Bg5`,
      orientation: 'white',
      choices: [
        { text: 'Pin and later take the f6-knight, the piece that guards d5', correct: true, why: 'Right. With the f6-knight gone, a White knight can settle on d5.' },
        { text: 'Attack the d6-pawn', why: "From g5 the bishop doesn't reach d6 at all. Its target is the f6-knight." },
        { text: 'Trap Black\'s queen', why: "The bishop pins the knight to the queen, but the queen isn't trapped. The real point is control of d5." }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9.Nd5 Qa5+ 10.Bd2 Qd8, does Black force a draw?',
      moves: `${SVESHNIKOV_B5} Nd5 Qa5+ Bd2 Qd8`,
      orientation: 'white',
      choices: [
        { text: 'No. White can play 11.c4 instead of 11.Bg5 and keep an edge', correct: true, why: 'Correct. The bishop stays on d2 and blocks the diagonal. Only a bishop move like 11.Bg5, which opens it again, allows another ...Qa5+.' },
        { text: 'Yes. Every White move allows ...Qa5+ again', why: 'Only a bishop move off the diagonal, like 11.Bg5, does. As long as the bishop stays on d2, ...Qa5+ is not possible.' },
        { text: 'Yes. If White avoids the repetition, Black wins a piece', why: "No piece is lost. After 11.c4 White's position is healthy, and White is clearly better." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In the Sveshnikov after 7.Bg5 a6 8.Na3 b5, which pawn move does Black threaten next?',
      choices: [
        { text: '...b4, forking the knights on a3 and c3', correct: true, why: 'Yes. That is why White must act at once on move nine, usually with 9.Bxf6 or 9.Nd5.' },
        { text: '...d5, opening the center', why: "...d5 is not on the cards: White hits d5 with the e4-pawn, the c3-knight and the queen, and Black has only the pinned f6-knight. The threat is ...b4." },
        { text: '...f5, hitting e4', why: "...f5 is a key idea later, but right now the f6-knight is in the way. The immediate threat is the ...b4 fork." }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. White wants to keep playing for a win. Which move avoids the repetition and keeps an edge?',
      moves: `${SVESHNIKOV_B5} Nd5 Qa5+ Bd2 Qd8`,
      orientation: 'white',
      choices: [
        { text: '11.c4', correct: true, why: 'Right. The bishop stays on d2, the c4-pawn supports the d5-knight and hits b5, and White stays clearly better.' },
        { text: '11.Bg5', why: 'This reopens the diagonal, and Black repeats with 11...Qa5+. If White keeps doing it, the game is a draw.' },
        { text: '11.Nxf6+', why: "This trades the strong d5-knight for the f6-knight and lets the queen recapture. White's edge is gone." }
      ]
    }
  ],
  key: { name: 'Sveshnikov main line: 8...b5', moves: SVESHNIKOV_B5, orientation: 'black' },
  terms: [
    { term: 'Knight on the rim', meaning: 'A knight on the edge of the board. It controls fewer squares there, which is why people say "a knight on the rim is dim".' },
    { term: 'Fork', meaning: 'One piece or pawn attacking two enemy pieces at once, so that only one can be saved.' },
    { term: 'Threefold repetition', meaning: 'If the same position appears three times with the same player to move, either player can claim a draw.' }
  ]
})
