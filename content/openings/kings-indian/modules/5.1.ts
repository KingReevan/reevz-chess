import { defineModule } from '../../../types'
import { CLASSICAL } from '../lines'

/** petrosian-7d5-a5: 7.d5 a5 8.Bg5 h6 9.Bh4 Na6 10.Nd2 Qe8 11.O-O Nh7 */
const STEIN = `${CLASSICAL} d5 a5 Bg5 h6 Bh4 Na6 Nd2 Qe8 O-O Nh7`
/** The same line up to 9...Na6 */
const PIN = `${CLASSICAL} d5 a5 Bg5 h6 Bh4 Na6`
/** Without ...a5 first: 7...Na6 8.Bg5 Nc5?! 9.b4 Ncd7 (engine line) */
const NO_A5 = `${CLASSICAL} d5 Na6 Bg5 Nc5 b4 Ncd7`

export default defineModule({
  id: '5.1',
  title: '7.d5: the Petrosian System',
  minutes: 10,
  level: 3,
  goals: [
    'See why White closes the center at once with 7.d5',
    'Understand how Bg5 pins the f6-knight and slows ...f5',
    "Learn Black's answer: ...a5, ...Na6, ...h6, ...Qe8 and ...Nh7"
  ],
  intro:
    "In Chapter 2 White castled first and only played d5 after 7...Nc6. In the Petrosian System White plays 7.d5 at once, before castling, and follows it with Bg5. Why would White lock the center so early, and how does Black untangle from the pin? Online beginners meet this system very often, so it is worth knowing well from both sides.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Lock the center, then pin',
      intro: "Watch the f6-knight. White's whole idea is to keep it stuck on f6.",
      moves: PIN,
      start: 12,
      orientation: 'white',
      steps: {
        12: {
          title: 'The Classical position',
          text: '6...e5. Black hits d4. White can castle (Chapter 2), trade on e5, or close the center right now.',
          arrows: [['e5', 'd4', 'red']]
        },
        13: {
          title: 'The center locks',
          text: '7.d5. The pawn chains are fixed: c4–d5–e4 for White, d6–e5 for Black. The d5-pawn also takes the c6-square away from both black knights.',
          arrows: [['d5', 'c6', 'yellow']],
          marks: ['c6']
        },
        14: {
          title: 'A pawn guards b4',
          text: "7...a5. Black stops b2–b4, White's usual queenside push. Now a black knight can settle on c5 without being kicked. lichess calls this the Stein Defense.",
          arrows: [['a5', 'b4', 'green']],
          marks: ['c5']
        },
        15: {
          title: 'The pin',
          text: "8.Bg5. The bishop pins the f6-knight to the queen. If the knight moves, Bxd8 wins the queen. A knight stuck on f6 blocks Black's f-pawn, so ...f5 has to wait.",
          arrows: [['g5', 'd8', 'red'], ['f7', 'f5', 'blue']],
          marks: ['f6']
        },
        16: {
          title: 'Asking the bishop',
          text: '8...h6. Black asks the bishop to decide: retreat, or give itself up for the knight. Module 5.2 shows a sharper way to use this pawn.',
          arrows: [['h6', 'g5', 'red']]
        },
        17: {
          title: 'Keeping the pin',
          text: '9.Bh4. The bishop steps back but stays on the same diagonal, so the f6-knight is still pinned.',
          arrows: [['h4', 'd8', 'red']]
        },
        18: {
          title: 'The knight finds a road',
          text: '9...Na6. The knight cannot use c6, so it goes via a6. Its target is c5, where it hits e4 and cannot be chased by b4.',
          arrows: [['a6', 'c5', 'green'], ['c5', 'e4', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Black unpins and frees the f-pawn',
      intro: 'Same line, a few moves later. Black now spends two quiet moves to get ...f5 back on the menu.',
      moves: STEIN,
      start: 18,
      orientation: 'black',
      steps: {
        18: {
          title: 'Where we are',
          text: 'The f6-knight is still pinned to the queen on d8. Black wants ...f5, but first the knight has to leave f6.',
          arrows: [['h4', 'd8', 'red']],
          marks: ['f6']
        },
        19: {
          title: "White's knight reroutes",
          text: '10.Nd2. The knight guards e4 and can go on to b3, where it supports the c4–c5 push. It also frees the f-pawn, so White can later play f3.',
          arrows: [['d2', 'b3', 'blue'], ['d2', 'e4', 'green']]
        },
        20: {
          title: 'The queen steps aside',
          text: '10...Qe8. Now there is nothing on d8, so the pin is gone. The queen still guards e5 along the e-file.',
          arrows: [['e8', 'e5', 'green']]
        },
        21: {
          title: 'White castles',
          text: '11.O-O. White finally tucks the king away. The center is closed, so there was no rush.',
          arrows: [['e1', 'g1', 'blue']]
        },
        22: {
          title: 'The f-pawn is free',
          text: '11...Nh7. The knight leaves f6, and ...f5 is now possible. The bishop on h4 bites on air: nothing is pinned any more. The position is roughly equal.',
          arrows: [['f7', 'f5', 'green'], ['h4', 'd8', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Why ...a5 comes first',
      intro: 'What happens if Black skips ...a5 and rushes the knight to c5?',
      moves: NO_A5,
      start: 12,
      orientation: 'black',
      steps: {
        12: {
          title: 'Same start',
          text: 'The Classical position after 6...e5. White is about to close the center.',
          arrows: [['d4', 'd5', 'blue']]
        },
        13: {
          title: 'The center locks',
          text: '7.d5. Exactly as before.',
          marks: ['c6']
        },
        14: {
          title: 'Knight first',
          text: '7...Na6. A fine move, aiming for c5. But the b4-square is not covered yet.',
          arrows: [['a6', 'c5', 'green']],
          marks: ['b4']
        },
        15: {
          title: 'The pin again',
          text: '8.Bg5. The f6-knight is pinned to the queen.',
          arrows: [['g5', 'd8', 'red']]
        },
        16: {
          title: 'Too early',
          text: '8...Nc5. The knight reaches c5, but nothing stops b2–b4.',
          arrows: [['b2', 'b4', 'red']],
          ann: '?!'
        },
        17: {
          title: 'Kicked with gain of space',
          text: '9.b4. The pawn chases the knight away and grabs queenside space for free. Taking on e4 does not work, because the f6-knight is pinned and cannot help.',
          arrows: [['b4', 'c5', 'red']],
          ann: '!'
        },
        18: {
          title: 'Back where it came from',
          text: '9...Ncd7. The knight retreats. White is a bit better: the queenside pawns are already rolling. With ...a5 played first, b4 would have been met by ...axb4.',
          arrows: [['a7', 'a5', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Plans for both sides',
      body:
        "**White:** keep the f6-knight pinned for as long as possible, then play Nd2 and push on the queenside with a3 and b4, or with c4–c5. The f-pawn can come to f3 to guard e4.\n\n**Black:** play ...a5 so a knight can sit on c5, unpin with ...h6 and ...Qe8, move the f6-knight (to h7 or e8), and then strike with ...f5. The order matters: ...f5 only works once the f6-knight is out of the way."
    },
    {
      kind: 'history',
      title: 'Named after Petrosian',
      body:
        'The system is named after the 9th World Champion, Tigran Petrosian. Petrosian was a famous White player against the King\'s Indian: he is quoted as saying it fed his family for years. In the 1990s Kramnik played 7.d5 a lot.'
    }
  ],
  takeaway:
    '7.d5 closes the center and Bg5 pins the f6-knight, which slows ...f5. Black answers with ...a5 (so a knight can sit on c5), ...Na6, ...h6, ...Qe8 to unpin, and ...Nh7 to free the f-pawn.',
  lookAhead:
    'Next: a sharper way to deal with the pin. Instead of unpinning quietly, Black hunts the bishop with ...h6, ...g5 and ...Nh5.',
  drills: [
    {
      title: "Black's set-up against 7.d5",
      prompt: "You're Black. White has just played 7.d5. Set up the way this module showed: stop b4, ask the bishop, bring the knight toward c5, unpin, and free the f-pawn.",
      moves: STEIN,
      start: 13,
      side: 'black',
      hints: [
        'First move: a pawn move that covers b4.',
        'Then ...h6, ...Na6, ...Qe8 and ...Nh7.'
      ],
      success: '7...a5, 8...h6, 9...Na6, 10...Qe8 and 11...Nh7. The pin is gone and ...f5 is ready.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "After 7.d5, why does Black's b8-knight usually go to a6 or d7 rather than c6?",
      moves: `${CLASSICAL} d5`,
      orientation: 'black',
      choices: [
        { text: 'The d5-pawn attacks c6', correct: true, why: 'Right. A knight on c6 would just be taken by dxc6. So the knight goes to c5 by another road.' },
        { text: 'The c-pawn must go to c6 first', why: 'Black does sometimes play ...c6, but that is not the reason. The square is simply covered by the d5-pawn.' },
        { text: 'A knight on c6 would block the g7-bishop', why: 'The g7-bishop looks along the a1–h8 diagonal, which does not pass through c6. The problem is the d5-pawn.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 7...a5 8.Bg5, Black wants to play ...f5. Why not move the f6-knight right away with 8...Nh5?',
      moves: `${CLASSICAL} d5 a5 Bg5`,
      orientation: 'black',
      choices: [
        { text: '9.Bxd8 wins the queen', correct: true, why: 'Yes. The knight is pinned to the queen. Once it moves, the bishop takes on d8. Black must unpin first.' },
        { text: '9.g4 traps the knight on h5', why: 'Look closer: White has a much bigger win. The bishop on g5 is aiming straight at the queen on d8.' },
        { text: 'Nothing is wrong with it', why: 'Something is very wrong. The f6-knight is pinned, so moving it lets Bxd8 take the queen.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the main job of 7...a5 in the Petrosian System?',
      choices: [
        { text: 'It stops b2–b4, so a knight can settle on c5', correct: true, why: "Right. Without ...a5, b4 kicks a knight off c5 and gains space. With ...a5, b4 is answered by ...axb4." },
        { text: 'It prepares ...a4 and ...a3 to attack the king', why: "White's king will be on the kingside. The a-pawn is about controlling b4, not attacking." },
        { text: 'It frees a6 for the rook', why: 'The rook rarely goes to a6 here. The a6-square is for the knight, on its way to c5.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Black has played ...Qe8 and ...Nh7. What is Black getting ready for?',
      moves: STEIN,
      orientation: 'black',
      choices: [
        { text: '...f5, hitting the e4-pawn', correct: true, why: "Yes. The f6-knight was blocking the f-pawn. Now it's on h7, the pin is gone, and ...f5 is the King's Indian's typical break." },
        { text: '...c6, opening the c-file', why: '...c6 is possible in some lines, but ...Qe8 and ...Nh7 are all about the kingside. They prepare ...f5.' },
        { text: '...Qa4, raiding the queenside', why: "The queen isn't heading there. ...Qe8 broke the pin and keeps e5 guarded." }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'White to move. Black played ...Nc5 without ...a5 first. What is the most useful move?',
      moves: NO_A5.split(' ').slice(0, 16).join(' '),
      orientation: 'white',
      choices: [
        { text: '9.b4', correct: true, why: 'Right. The pawn kicks the knight and gains queenside space, and ...Ncxe4 fails because the f6-knight is pinned.' },
        { text: '9.Bxf6', why: 'This gives up the pinning bishop for a knight. Black takes back, the pin is gone, and the game is roughly level.' },
        { text: '9.O-O', why: 'Natural, but slow. Black answers 9...h6, breaks the pin, and the game is about level.' }
      ]
    },
    {
      type: 'name',
      prompt: "What is 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.d5 called?",
      moves: `${CLASSICAL} d5`,
      orientation: 'white',
      choices: [
        { text: 'The Petrosian System', correct: true, why: 'Yes. 7.d5 closes the center at once, usually followed by Bg5.' },
        { text: 'The Gligorić System', why: 'The Gligorić is 7.Be3. Module 5.3 covers it.' },
        { text: 'The Exchange Variation', why: 'The Exchange is 7.dxe5, trading pawns and usually queens.' }
      ]
    }
  ],
  key: { name: 'Petrosian System: 7.d5 a5 8.Bg5', moves: `${CLASSICAL} d5 a5 Bg5`, orientation: 'black' },
  terms: [
    { term: 'Pin', meaning: 'A piece cannot move off a line without exposing a more valuable piece behind it.' },
    { term: 'Unpin', meaning: 'To end a pin, usually by moving the piece behind (here the queen) or by chasing the pinning piece away.' },
    { term: 'Closed center', meaning: 'A center where the pawns block each other, so pieces cannot pass through. Play moves to the wings.' },
    { term: 'Pawn break', meaning: 'A pawn move that attacks the enemy pawn chain to open lines, like ...f5 against e4.' }
  ]
})
