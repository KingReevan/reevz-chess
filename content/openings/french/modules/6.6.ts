import { defineModule } from '../../../types'
import { ALEKHINE_CHATARD } from '../lines'

/** start of cla-ac-c5: 6...c5 7.Bxe7 Kxe7 8.f4 */
const KXE7 = `${ALEKHINE_CHATARD} c5 Bxe7 Kxe7 f4`
/** cla-ac-c5-qxe7: 7...Qxe7 8.Nb5 Kd8 9.c3 */
const QXE7 = `${ALEKHINE_CHATARD} c5 Bxe7 Qxe7 Nb5 Kd8 c3`
/** cla-ac-oo: 6...O-O 7.Bd3 c5 8.Qh5 g6 9.Qh6 */
const OO = `${ALEKHINE_CHATARD} O-O Bd3 c5 Qh5 g6 Qh6`

export default defineModule({
  id: '6.6',
  title: 'Declining 6.h4: ...c5, and why not castle',
  minutes: 11,
  level: 3,
  goals: [
    'After 6...c5 7.Bxe7, recapture with the king: 7...Kxe7!',
    'See how 7...Qxe7?! 8.Nb5! traps Black\'s king in the center',
    'Know why 6...O-O?! is risky: 7.Bd3 c5 8.Qh5! (and not 8.Bxh7+?)'
  ],
  intro:
    "Module 6.5 showed how to accept 6.h4. Many players would rather decline it with a normal French move: ...c5, or simply castling. One of them is playable if you recapture the right way; the other castles straight into White's attack. This module shows both, from both sides of the board.",
  sections: [
    {
      kind: 'walkthrough',
      title: '6...c5 7.Bxe7 Kxe7!',
      intro: 'Black plays the usual French break and leaves the g5-bishop alone. White trades at once. Now the recapture matters.',
      moves: KXE7,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The offer',
          text: '6.h4. The g5-bishop is still guarded by the h-pawn.',
          arrows: [['h4', 'g5', 'green']]
        },
        12: {
          title: 'The natural break',
          text: '6...c5. Black hits d4, as in every French. It is playable, but the engine prefers 6...Bxg5 or 6...h6.',
          arrows: [['c5', 'd4', 'red']]
        },
        13: {
          title: 'White trades',
          text: '7.Bxe7. Now the pawn has left c7, so the c7-square is empty. Black has to think about Nb5 before recapturing.',
          marks: ['c7', 'd6']
        },
        14: {
          title: 'The king takes back',
          text: '7...Kxe7. It looks strange, but it is the right recapture. The queen stays on d8 and guards c7, and the king guards d6. A knight on b5 would have nothing to hit.',
          arrows: [['d8', 'c7', 'green'], ['e7', 'd6', 'green']],
          ann: '!'
        },
        15: {
          title: 'Support for e5',
          text: "8.f4. White supports e5. Black goes on with ...Qb6, ...Nc6 or ...cxd4 against d4. Black's king can't castle any more, so it stays in the center for now. The engine prefers White, but much less than after 7...Qxe7.",
          arrows: [['f4', 'e5', 'green'], ['c5', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '7...Qxe7?! 8.Nb5!',
      intro: 'The "normal" recapture. Watch the c7- and d6-squares.',
      moves: QXE7,
      start: 13,
      orientation: 'white',
      steps: {
        13: {
          title: 'The same position',
          text: '7.Bxe7. Black can take back with the queen or the king.',
          arrows: [['d8', 'e7', 'blue'], ['e8', 'e7', 'blue']]
        },
        14: {
          title: 'The natural recapture',
          text: '7...Qxe7. It looks normal. But the d7-knight now blocks the queen from c7, so nothing guards c7.',
          marks: ['c7'],
          ann: '?!'
        },
        15: {
          title: 'Two knight checks',
          text: '8.Nb5. White threatens Nc7+, forking the king and the a8-rook, and also Nd6+, where taking with ...Qxd6 exd6 would give up the queen for a knight.',
          arrows: [['b5', 'c7', 'red'], ['b5', 'd6', 'red'], ['c7', 'a8', 'red']],
          ann: '!'
        },
        16: {
          title: 'The king steps aside',
          text: '8...Kd8. Black\'s best. The king guards c7, and no material is lost. But Black can never castle now.',
          arrows: [['d8', 'c7', 'green']]
        },
        17: {
          title: 'White is clearly better',
          text: "9.c3. White supports d4 with the c-pawn and keeps the knight on its strong square. Black's king is stuck in the middle, and the engine says White is clearly better.",
          arrows: [['c3', 'd4', 'green']],
          marks: ['d8']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '6...O-O?! castles into the attack',
      intro: 'Castling is usually the safest thing you can do. Not here: count the defenders of h7.',
      moves: OO,
      start: 11,
      orientation: 'white',
      steps: {
        11: {
          title: 'The offer',
          text: '6.h4. White\'s h-pawn is already on its way.',
          arrows: [['h4', 'h5', 'blue']]
        },
        12: {
          title: 'Castling into it',
          text: '6...O-O. The king goes right where White is attacking. The f6-knight is gone, so h7 has only one defender: the king.',
          marks: ['h7'],
          ann: '?!'
        },
        13: {
          title: 'Aim at h7',
          text: '7.Bd3. The bishop looks straight at h7.',
          arrows: [['d3', 'h7', 'red']]
        },
        14: {
          title: 'The usual break',
          text: '7...c5. Black hits d4. Now White has a tempting sacrifice, and a better move.',
          arrows: [['c5', 'd4', 'red']]
        },
        15: {
          title: 'Threatening mate',
          text: "8.Qh5. The threat is Qxh7 mate: the bishop supports the queen, and the f8-rook blocks the king's escape.",
          arrows: [['h5', 'h7', 'red'], ['d3', 'h7', 'red']],
          ann: '!'
        },
        16: {
          title: 'The only good defense',
          text: '8...g6. The pawn blocks the bishop and attacks the queen. Other defenses like 8...h6 or 8...f5 lose much more.',
          arrows: [['g6', 'h5', 'red']]
        },
        17: {
          title: 'The queen settles in',
          text: '9.Qh6. The queen sits close to Black\'s king. Next comes h4–h5 to break open g6 and the h-file. White is clearly better.',
          arrows: [['h4', 'h5', 'green']],
          marks: ['g8']
        }
      }
    },
    {
      kind: 'warning',
      title: 'Not 8.Bxh7+?',
      body:
        "After 6...O-O 7.Bd3 c5, the sacrifice 8.Bxh7+? looks tempting, but it fails: White's g1-knight is too far away to reach g5. After **8...Kxh7 9.Qh5+ Kg8 10.Bxe7 Qxe7**, White's attack runs out, and Black is a piece for a pawn up. Black must take the bishop, though: **8...Kh8?? 9.Qh5** leads to mate. Module 8.2 explains when the Greek Gift fails."
    },
    {
      kind: 'text',
      title: "Black's choices against 6.h4",
      body:
        "**6...Bxg5** (Module 6.5) and **6...h6**: the engine's safest answers.\n\n**6...c5:** natural and playable, but after 7.Bxe7 take back with the king. 7...Qxe7?! 8.Nb5! leaves White clearly better.\n\n**6...a6?!** is too slow: 7.Qg4! (Module 6.5).\n\n**6...O-O?!** castles into the attack: 7.Bd3 c5 8.Qh5! and White is clearly better.\n\n**For White,** the lesson is the same in every line: if Black spends time on the queenside, bring the queen to the kingside (Qg4 or Qh5) and use the h-pawn."
    }
  ],
  takeaway:
    'Against 6.h4, after 6...c5 7.Bxe7 recapture with the king (7...Kxe7!), because 7...Qxe7?! 8.Nb5! keeps Black\'s king in the center. Don\'t castle early: 6...O-O?! 7.Bd3 c5 8.Qh5! is strong, while 8.Bxh7+? fails.',
  lookAhead:
    "Module 6.7 shows another answer to 4.Bg5: the McCutcheon, 4...Bb4, where Black pins White's knight in return.",
  drills: [
    {
      title: 'The right recapture',
      prompt: "You're Black. You declined 6.h4 with 6...c5, and White has traded with 7.Bxe7. Take back so that Nb5 has nothing to hit.",
      moves: `${ALEKHINE_CHATARD} c5 Bxe7 Kxe7`,
      start: 12,
      side: 'black',
      hints: ['Your queen should stay on d8, where it guards c7.', 'Take back with the king.'],
      success: '7...Kxe7! The queen guards c7, the king guards d6, and Nb5 leads nowhere.'
    },
    {
      title: 'Punish early castling',
      prompt: "You're White. Black has castled with 6...O-O. Aim a bishop at h7, then bring the queen to the kingside with a mate threat, and keep it there.",
      moves: OO,
      start: 11,
      side: 'white',
      hints: ['The f1-bishop goes to d3, looking at h7.', 'After 7...c5, the queen threatens mate from h5. When ...g6 kicks it, go to h6.'],
      success: '7.Bd3, 8.Qh5 and 9.Qh6. White is clearly better, and h4–h5 is coming.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'Black to move. White has just played 7.Bxe7. How should Black recapture?',
      moves: `${ALEKHINE_CHATARD} c5 Bxe7`,
      orientation: 'black',
      choices: [
        { text: '7...Kxe7', correct: true, why: 'Right. The queen keeps guarding c7 from d8, and the king guards d6.' },
        { text: '7...Qxe7', why: 'Natural, but 8.Nb5! threatens Nc7+ and Nd6+. After 8...Kd8 Black loses no material, but White is clearly better.' },
        { text: '7...Qa5', why: "This doesn't take back at all. White's bishop escapes from e7, and White is a piece up." }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 7...Qxe7 8.Nb5, what does White threaten?',
      moves: `${ALEKHINE_CHATARD} c5 Bxe7 Qxe7 Nb5`,
      orientation: 'white',
      choices: [
        { text: 'Nc7+, forking the king and the a8-rook, and Nd6+', correct: true, why: 'Right. The d7-knight blocks the queen from c7, so c7 is unguarded. Black\'s best is 8...Kd8.' },
        { text: 'Nxa7, winning a pawn', why: 'The a8-rook guards a7, so Nxa7 would just lose the knight. The checks on c7 and d6 are the real threats.' },
        { text: 'Qg4, attacking g7', why: 'That is a different idea. 8.Nb5 is about the c7- and d6-squares.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Black has castled early, and played 7...c5. What is White\'s best move?',
      moves: `${ALEKHINE_CHATARD} O-O Bd3 c5`,
      orientation: 'white',
      choices: [
        { text: '8.Qh5', correct: true, why: 'Right. It threatens Qxh7 mate, and after 8...g6 9.Qh6 White is clearly better.' },
        { text: '8.Bxh7+', why: "It fails: White's knight can't reach g5 in time. After 8...Kxh7 9.Qh5+ Kg8 10.Bxe7 Qxe7, Black is a piece for a pawn up." },
        { text: '8.f4', why: 'Solid, but it gives Black time. 8.Qh5 makes the most of Black\'s early castling.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 8.Bxh7+, Black to move. What should Black play?',
      moves: `${ALEKHINE_CHATARD} O-O Bd3 c5 Bxh7+`,
      orientation: 'black',
      choices: [
        { text: '8...Kxh7', correct: true, why: 'Right. Take the bishop. After 9.Qh5+ Kg8 10.Bxe7 Qxe7, Black is a piece for a pawn up.' },
        { text: '8...Kh8', why: 'A blunder: 9.Qh5 leads to mate. Declining the bishop is not safer.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Why is 7...Kxe7 better than 7...Qxe7 after 6...c5 7.Bxe7?',
      moves: `${ALEKHINE_CHATARD} c5 Bxe7`,
      orientation: 'black',
      choices: [
        { text: 'The queen stays on d8 to guard c7, so 8.Nb5 has no targets', correct: true, why: 'Right. And the king on e7 guards d6. After 7...Qxe7?!, the d7-knight cuts the queen off from c7.' },
        { text: 'The king is safer on e7 than after castling', why: 'Black cannot castle after 7...Kxe7, and that is a real cost. The reason is the c7-square.' },
        { text: 'It wins a pawn', why: 'Both recaptures just win back the bishop. The difference is the defense of c7 and d6.' }
      ]
    },
    {
      type: 'plan',
      prompt: "After 6...O-O 7.Bd3 c5 8.Qh5 g6 9.Qh6, what is White's next idea?",
      moves: OO,
      orientation: 'white',
      choices: [
        { text: 'h4–h5, to break open g6 and the h-file', correct: true, why: "Right. With the queen on h6, opening the h-file brings the rook into the attack." },
        { text: 'Bxh7+ at once', why: "The g6-pawn blocks the bishop's diagonal to h7, so Bxh7+ isn't possible now." },
        { text: 'Trade queens', why: "White's queen is the star of the attack. There's no reason to trade it." }
      ]
    }
  ],
  key: { name: 'Alekhine–Chatard: 7...Kxe7!', moves: `${ALEKHINE_CHATARD} c5 Bxe7 Kxe7`, orientation: 'black' },
  terms: [
    { term: 'Fork', meaning: 'One piece attacking two enemy pieces at once. Nc7+ would fork Black\'s king and the a8-rook.' },
    { term: 'Recapture', meaning: 'Taking back after the opponent captures. Choosing the right piece to recapture with can decide the game.' },
    { term: 'Castling into an attack', meaning: 'Putting the king on the wing where the opponent is already attacking. Here 6...O-O?! walks into h4, Bd3 and Qh5.' }
  ]
})
