import { defineModule } from '../../../types'
import { KID } from '../lines'

/** four-pawns-5f4 and four-pawns-6c5 */
const FOUR_PAWNS_C5 = `${KID} f4 O-O Nf3 c5`
/** kid-5e5: the early push is traded off */
const EARLY_PUSH = `${KID} e5 dxe5 dxe5 Qxd1+ Nxd1 Nfd7 f4 f6 exf6 Nxf6`
/** kid-5e5 up to 9.exf6, for the White drill */
const EARLY_PUSH_W = `${KID} e5 dxe5 dxe5 Qxd1+ Nxd1 Nfd7 f4 f6 exf6`
/** kid-5e5-f4-trap */
const TRAP = `${KID} e5 dxe5 dxe5 Qxd1+ Kxd1 Ng4 f4 Nf2+ Ke1 Nxh1`

export default defineModule({
  id: '1.5',
  title: "White's big center: space and targets",
  minutes: 11,
  level: 1,
  goals: [
    "See what White's pawns on c4, d4 and e4 give White",
    'Understand how pawns pushed too early become targets',
    'Spring the 7.Kxd1? Ng4 8.f4?? Nf2+ fork, and avoid it as White'
  ],
  intro:
    "In the King's Indian, White gets a big pawn center for free. That center gives White space, but every pawn move is a move not spent on the pieces, and pawns can't move backwards. So is the center a strength or a target? This module shows both sides, and a trap that punishes White for pushing too soon.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Space, and the price of space',
      intro: 'White can go further and add a fourth pawn with 5.f4, the Four Pawns Attack. Count White\'s pawn moves and piece moves.',
      moves: FOUR_PAWNS_C5,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'What the center controls',
          text: "The pawns on c4, d4 and e4 control b5, c5, d5, e5 and f5. Black's pieces can't use those squares, so Black has less room.",
          marks: ['b5', 'c5', 'd5', 'e5', 'f5']
        },
        9: {
          title: 'A fourth pawn',
          text: '5.f4. The Four Pawns Attack. White wants to push e4–e5, kick the f6-knight and squeeze Black.',
          arrows: [['e4', 'e5', 'green']]
        },
        10: {
          title: 'Black stays calm',
          text: '5...O-O. Black gets the king safe first.',
          marks: ['g8']
        },
        11: {
          title: 'Counting moves',
          text: "6.Nf3. The knight supports d4 and e5. But look: White's bishops and king haven't moved yet. Five of White's six moves were pawn moves or Nc3.",
          marks: ['c1', 'f1', 'e1']
        },
        12: {
          title: 'Hit it before it rolls',
          text: '6...c5. Black strikes at d4 at once, before White can finish developing. Chapter 7 shows how the fight goes on.',
          arrows: [['c5', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Strength or target?',
      body:
        "A big center is strong when pieces stand behind it. Then it gives White space, and Black's pieces have fewer good squares.\n\nBut a pawn can never move back. If it is pushed too far too early, it can be attacked by Black's pawns (...c5, ...e5, ...f6) and pieces, and the pawns behind it may not be able to help. Then the center becomes a **target**.\n\n**For White:** develop first, push later. **For Black:** don't panic about the center. Get the king safe, then hit it."
    },
    {
      kind: 'walkthrough',
      title: 'Pushing too soon: 5.e5?!',
      intro: 'White tries to kick the knight at once. Watch what happens to the e5-pawn.',
      moves: EARLY_PUSH,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'A tempting push',
          text: 'The pawn on e4 could go to e5 and attack the f6-knight. It looks active.',
          arrows: [['e4', 'e5', 'blue']]
        },
        9: {
          title: 'Too early',
          text: "5.e5. The pawn moves before White's pieces are ready, and the d6-pawn can take it.",
          arrows: [['d6', 'e5', 'red']],
          ann: '?!'
        },
        10: {
          title: 'Black takes',
          text: '5...dxe5. Black simply captures.',
          marks: ['e5']
        },
        11: {
          title: 'White takes back',
          text: '6.dxe5. The new pawn on e5 attacks the knight again, and the d-file is open.',
          arrows: [['e5', 'f6', 'red'], ['d8', 'd1', 'yellow']]
        },
        12: {
          title: 'Queens off, with check',
          text: "6...Qxd1+. Black trades queens. It is check, because White's king is still on e1.",
          arrows: [['d1', 'e1', 'red']]
        },
        13: {
          title: 'The right recapture',
          text: "7.Nxd1. White's best: the knight takes back, and the king stays on e1 where it guards f2. The next walkthrough shows why 7.Kxd1 is worse.",
          marks: ['f2']
        },
        14: {
          title: 'The pawn is a target',
          text: '7...Nfd7. The knight steps away and attacks e5. With the f6-knight gone, the g7-bishop hits e5 too.',
          arrows: [['d7', 'e5', 'red'], ['g7', 'e5', 'red']]
        },
        15: {
          title: 'Propping it up',
          text: '8.f4. White defends e5 with another pawn.',
          arrows: [['f4', 'e5', 'green']]
        },
        16: {
          title: 'A third attacker',
          text: '8...f6. Now Black hits e5 with a pawn as well, and the g7-bishop stands right behind it. White can no longer keep the pawn on e5.',
          arrows: [['f6', 'e5', 'red']]
        },
        17: {
          title: 'The center goes',
          text: '9.exf6. White trades the pawn off.',
          marks: ['f6']
        },
        18: {
          title: 'Nothing left',
          text: "9...Nxf6. White's big center has disappeared, and Black's pieces are active. Black is more comfortable. 5.e5 achieved nothing.",
          marks: ['c4', 'f4']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The trap: 7.Kxd1? Ng4 8.f4??',
      intro: 'Same line, but White takes back on d1 with the king. Look at the f2-pawn.',
      moves: TRAP,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'Which piece takes back?',
          text: '6...Qxd1+. White must take the queen. The knight and the king can both do it.',
          arrows: [['c3', 'd1', 'green'], ['e1', 'd1', 'blue']]
        },
        13: {
          title: 'The king takes',
          text: '7.Kxd1. It looks the same, but now the king no longer guards f2. Nothing guards that pawn any more.',
          marks: ['f2'],
          ann: '?'
        },
        14: {
          title: 'Two targets',
          text: "7...Ng4. The knight attacks e5 and eyes f2. White's best is 8.Ke1 to guard f2, but then Black takes on e5 and is a pawn up with a much better game.",
          arrows: [['g4', 'e5', 'red'], ['g4', 'f2', 'red']],
          ann: '!'
        },
        15: {
          title: 'The natural blunder',
          text: '8.f4. White defends e5 with a pawn. But the pawn has left f2, and the knight can jump in.',
          marks: ['f2'],
          ann: '??'
        },
        16: {
          title: 'The fork',
          text: '8...Nf2+. The knight checks the king on d1 and attacks the rook on h1 at the same time. That is a fork.',
          arrows: [['f2', 'd1', 'red'], ['f2', 'h1', 'red']]
        },
        17: {
          title: 'The king must move',
          text: '9.Ke1. The king steps away. Ke2 and Kc2 would lose the rook just the same.',
          arrows: [['f2', 'h1', 'red']]
        },
        18: {
          title: 'A rook up',
          text: '9...Nxh1. Black wins a whole rook. The knight in the corner may take a while to get out, but the engine confirms Black stays winning.',
          marks: ['h1']
        }
      }
    },
    {
      kind: 'warning',
      title: 'For White: two lessons',
      body:
        'First, pushing e4–e5 before you have developed only gives Black a target. Second, when you recapture, check what the moving piece was guarding. The king on e1 was the only guard of f2.'
    }
  ],
  takeaway:
    'A big center gives White space, but pawns pushed before the pieces are ready become targets. After 5.e5?! dxe5 6.dxe5 Qxd1+, White must take back with the knight: 7.Kxd1? Ng4 8.f4?? Nf2+ wins a rook.',
  lookAhead:
    "Next, Module 1.6 shows Black's main way to hit the center: the ...e5 break.",
  drills: [
    {
      title: 'Spring the trap',
      prompt: "You're Black. White just took your queen with 7.Kxd1?. Hit e5 and f2, and if White guards e5 with f4, punish it.",
      moves: TRAP,
      start: 13,
      side: 'black',
      hints: ['One knight move attacks both e5 and f2.', 'After 8.f4, the f2-square is empty. Jump in with check, then take what the knight attacks.'],
      success: '7...Ng4, 8...Nf2+ and 9...Nxh1. A fork of king and rook, and Black is a rook up.'
    },
    {
      title: 'Limit the damage',
      prompt: "You're White. You pushed 5.e5?! and Black traded queens with check. Take back the right way, then defend e5 as long as it makes sense.",
      moves: EARLY_PUSH_W,
      start: 11,
      side: 'white',
      hints: ['Keep your king on e1, where it guards f2.', 'Take back with the knight, prop up e5 with the f-pawn, and when Black plays ...f6, trade on f6.'],
      success: '7.Nxd1, 8.f4 and 9.exf6. White avoids the trap, but the center is gone: 5.e5 gained nothing.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "Which squares do White's pawns on c4, d4 and e4 control?",
      moves: KID,
      orientation: 'white',
      choices: [
        { text: 'b5, c5, d5, e5 and f5', correct: true, why: 'Yes. Each pawn covers the two squares diagonally in front of it.' },
        { text: 'Only c5, d5 and e5', why: 'Those are covered, but so are b5 (by the c4-pawn) and f5 (by the e4-pawn).' },
        { text: 'd3, e3 and f3', why: 'Pawns control squares diagonally in front of them, never behind.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. White has just defended e5 with 8.f4. What wins material?',
      moves: `${KID} e5 dxe5 dxe5 Qxd1+ Kxd1 Ng4 f4`,
      orientation: 'black',
      choices: [
        { text: '8...Nf2+', correct: true, why: 'Right. The knight forks the king on d1 and the rook on h1. Black wins the rook.' },
        { text: '8...Nxe5', why: 'After 9.fxe5 Bxe5 Black has given a knight for two pawns. The fork on f2 is much stronger.' },
        { text: '8...Nc6', why: 'It attacks e5 again and Black stays better, but 8...Nf2+ wins a whole rook.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 5.e5 dxe5 6.dxe5 Qxd1+, why is 7.Nxd1 better than 7.Kxd1?',
      choices: [
        { text: 'With the king on d1, f2 is unguarded and ...Ng4 hits e5 and f2', correct: true, why: 'Exactly. The king on e1 was the only guard of f2.' },
        { text: '7.Kxd1 is illegal while in check', why: 'Taking the checking queen with the king is legal. It is just a mistake here.' },
        { text: '7.Nxd1 develops a new piece', why: 'The knight actually goes backward, from c3 to d1. The real reason is the f2-pawn.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'What is White hoping for in the Four Pawns Attack (5.f4)?',
      moves: `${KID} f4`,
      orientation: 'white',
      choices: [
        { text: 'To push e4–e5 and squeeze Black with the huge center', correct: true, why: 'Yes. The risk is that development lags behind, so Black strikes with ...c5.' },
        { text: 'To trade queens and reach an endgame', why: 'Nothing in 5.f4 aims at a queen trade. It is about space and e4–e5.' },
        { text: 'To attack on the queenside with b2–b4', why: 'The f-pawn supports e4–e5 in the center. The queenside is not the target here.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'When does a big pawn center become a target?',
      choices: [
        { text: 'When its pawns are pushed before the pieces are ready to support them', correct: true, why: 'Right. Pawns can never move back, so an early push can leave them hanging.' },
        { text: 'As soon as it has three pawns', why: 'Three or even four center pawns can be very strong when pieces stand behind them.' },
        { text: 'Only when the queens are still on the board', why: 'In the 5.e5 line the queens came off, and the e5-pawn was still a target.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just taken back with 7.Kxd1. Which knight move attacks e5 and f2 at once?',
      moves: `${KID} e5 dxe5 dxe5 Qxd1+ Kxd1`,
      orientation: 'black',
      choices: [
        { text: '7...Ng4', correct: true, why: 'Yes. From g4 the knight hits e5 and f2, and White can no longer guard both well.' },
        { text: '7...Nfd7', why: 'It attacks e5, but not f2. 7...Ng4 hits both targets.' },
        { text: '7...Nh5', why: 'From h5 the knight attacks f4 and g3, not e5 or f2.' }
      ]
    }
  ],
  key: { name: '5.e5?! trap: 7.Kxd1? Ng4 8.f4?? Nf2+', moves: `${KID} e5 dxe5 dxe5 Qxd1+ Kxd1 Ng4 f4 Nf2+`, orientation: 'black' },
  terms: [
    { term: 'Space', meaning: 'Room for your pieces to move, usually gained by pawns that control squares in the enemy half.' },
    { term: 'Target', meaning: 'A pawn or piece that is easy to attack and hard to defend.' },
    { term: 'Fork', meaning: 'One piece attacks two or more enemy pieces at the same time.' }
  ]
})
