import { defineModule } from '../../../types'
import { ALEKHINE_CHATARD } from '../lines'

/** cla-ac-accept: 6...Bxg5 7.hxg5 Qxg5 8.Nh3 Qe7 9.Nf4 Nc6 10.Qg4 */
const ACCEPT = `${ALEKHINE_CHATARD} Bxg5 hxg5 Qxg5 Nh3 Qe7 Nf4 Nc6 Qg4`
/** cla-ac-a6, up to 8...c5: 6...a6 7.Qg4 Bxg5 8.hxg5 c5 */
const A6 = `${ALEKHINE_CHATARD} a6 Qg4 Bxg5 hxg5 c5`

export default defineModule({
  id: '6.5',
  title: 'The Alekhine–Chatard Attack 6.h4',
  minutes: 11,
  level: 3,
  goals: [
    'Understand 6.h4: a pawn offered to give White\'s rook the h-file',
    'Accept it the safe way: 6...Bxg5 7.hxg5 Qxg5, and know why Black\'s king stays unsafe',
    'See why the slow 6...a6?! runs into 7.Qg4!'
  ],
  intro:
    "After 4.Bg5 Be7 5.e5 Nfd7, White doesn't have to trade on e7. With 6.h4, White leaves the bishop on g5 and dares Black to take it. If Black does, White's h-pawn leaves the h-file, and the h1-rook aims straight at Black's kingside. This is the Alekhine–Chatard Attack. This module teaches its ideas, not long theory.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The gambit accepted',
      intro: 'Black takes a pawn. Then count how many safe homes Black\'s king has left.',
      moves: ACCEPT,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'Bishop faces bishop',
          text: '5...Nfd7. In the main line White trades with 6.Bxe7. This time White has a sharper idea.',
          arrows: [['g5', 'e7', 'yellow']]
        },
        11: {
          title: 'The h-pawn guards g5',
          text: "6.h4. The pawn defends the g5-bishop. If Black trades with ...Bxg5, White takes back hxg5, and the h-file becomes half-open: White's rook can use it.",
          arrows: [['h4', 'g5', 'green'], ['h1', 'h7', 'blue']]
        },
        12: {
          title: 'Black accepts',
          text: '6...Bxg5. Black trades bishops. With 6...h6, this is one of Black\'s two safest answers, says the engine.',
          ann: '!'
        },
        13: {
          title: 'A half-open h-file',
          text: "7.hxg5. White's h-pawn is gone from the h-file, so the h1-rook now looks straight at h7. The g5-pawn is loose, though: Black's queen attacks it.",
          arrows: [['h1', 'h7', 'red'], ['d8', 'g5', 'red']]
        },
        14: {
          title: 'A pawn up',
          text: "7...Qxg5. Black wins a pawn. But the queen has left home, and with White's rook on the half-open h-file, castling short is risky.",
          marks: ['h7']
        },
        15: {
          title: 'Develop with a threat',
          text: '8.Nh3. The knight attacks the queen, so White develops and gains time.',
          arrows: [['h3', 'g5', 'red']]
        },
        16: {
          title: 'The queen steps back',
          text: '8...Qe7. The queen returns to e7, close to the king. (8...Qh4 is also good.)',
          arrows: [['g5', 'e7', 'blue']]
        },
        17: {
          title: 'The knight finds f4',
          text: '9.Nf4. From f4 the knight presses on e6 and can jump to h5 or g6 later.',
          arrows: [['f4', 'e6', 'red'], ['f4', 'h5', 'blue']]
        },
        18: {
          title: 'Black develops',
          text: '9...Nc6. Black brings out a piece and hits d4.',
          arrows: [['c6', 'd4', 'red']]
        },
        19: {
          title: 'The queen joins in',
          text: "10.Qg4. The queen attacks g7, which nothing defends. The engine calls the position roughly level: Black is a pawn up, but Black's king has no safe home. Short castling walks into the h-file and the queen.",
          arrows: [['g4', 'g7', 'red'], ['h1', 'h7', 'red']],
          marks: ['g7']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why 6.h4 works',
      body:
        "In the main line, 6.Bxe7 trades White's bishop for Black's good bishop. With 6.h4, White keeps the tension, and the h-pawn becomes a guard and a battering ram at once.\n\n**If Black takes on g5,** White's rook gets the half-open h-file, and g8 is no longer a safe home for Black's king. Black wins a pawn, but has to play the rest of the game with an unsafe king.\n\n**If Black ignores the bishop,** White may trade on e7 later, or keep it on g5, where it cramps Black's kingside.\n\nThe engine rates 6.h4 about as good as 6.Bxe7. Black's safest answers are 6...Bxg5 and 6...h6."
    },
    {
      kind: 'walkthrough',
      title: 'A slow decline: 6...a6?! 7.Qg4!',
      intro: 'Black ignores the kingside and prepares ...c5. White punishes the slow move by bringing the queen over.',
      moves: A6,
      start: 11,
      orientation: 'white',
      steps: {
        11: {
          title: 'The offer',
          text: '6.h4. The g5-bishop is still defended by the h-pawn. Black can decline.',
          arrows: [['h4', 'g5', 'green']]
        },
        12: {
          title: 'A queenside move',
          text: '6...a6. Black wants ...c5 without allowing a knight jump to b5. But the move does nothing for the kingside, where the action is.',
          arrows: [['a6', 'b5', 'blue']],
          ann: '?!'
        },
        13: {
          title: 'The queen arrives',
          text: '7.Qg4. Now Bxe7 followed by Qxg7 is a threat: the g7-pawn has no defender, and the h8-rook would be hit next.',
          arrows: [['g5', 'e7', 'red'], ['g4', 'g7', 'yellow']],
          marks: ['g7'],
          ann: '!'
        },
        14: {
          title: 'Black trades',
          text: '7...Bxg5. Black removes the bishop before Bxe7 comes.',
          marks: ['g5']
        },
        15: {
          title: 'The rook sees h7',
          text: '8.hxg5. The h1-rook now sees h7, and the pawn on g5 takes the f6- and h6-squares away from Black\'s pieces.',
          arrows: [['h1', 'h7', 'red']],
          marks: ['f6', 'h6']
        },
        16: {
          title: 'Too late',
          text: '8...c5. Black finally hits d4, but White is clearly better. The engine\'s choice is 9.dxc5, opening more lines while Black\'s king is still in the center.',
          arrows: [['c5', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'history',
      title: 'Albin, Chatard and Alekhine',
      body:
        "The attack was devised by Adolf Albin and played by Chatard, but it was not taken seriously until Alexander Alekhine used it against Fahrni at Mannheim in 1914. So it is known both as the Alekhine–Chatard Attack and the Albin–Chatard Attack. When Black accepts with 6...Bxg5 7.hxg5 Qxg5, the line is sometimes called the Albin–Chatard Gambit."
    }
  ],
  takeaway:
    '6.h4 offers a pawn to give White\'s rook the h-file. 6...Bxg5 7.hxg5 Qxg5 wins a pawn, but Black\'s king has no safe home. Slow moves like 6...a6?! let White bring the queen to g4.',
  lookAhead:
    "Module 6.6 shows Black's other ways to decline 6.h4: the natural 6...c5 (and the right way to recapture on e7), and why castling with 6...O-O is risky.",
  drills: [
    {
      title: 'Take the pawn',
      prompt: "You're Black. White has offered the g5-bishop with 6.h4. Accept the offer and win a pawn.",
      moves: `${ALEKHINE_CHATARD} Bxg5 hxg5 Qxg5`,
      start: 11,
      side: 'black',
      hints: ['Your e7-bishop can take on g5.', 'After 7.hxg5, the g5-pawn is attacked by your queen.'],
      success: '6...Bxg5 7.hxg5 Qxg5. A pawn up, but keep an eye on the half-open h-file.'
    },
    {
      title: 'Punish the slow move',
      prompt: "You're White. Black has played 6...a6, ignoring the kingside. Bring your queen into the attack, and when Black trades bishops, take back so your rook gets the h-file.",
      moves: `${ALEKHINE_CHATARD} a6 Qg4 Bxg5 hxg5`,
      start: 12,
      side: 'white',
      hints: ['Which queen move eyes the g7-pawn?', 'After 7...Bxg5, take back with the h-pawn.'],
      success: '7.Qg4 Bxg5 8.hxg5. The h-file is half-open for your rook and the g5-pawn cramps Black. White is clearly better.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does White offer with 6.h4?',
      moves: ALEKHINE_CHATARD,
      orientation: 'white',
      choices: [
        { text: 'A pawn: after 6...Bxg5 7.hxg5 Qxg5, Black is a pawn up, but White\'s rook gets the h-file', correct: true, why: "Right. White gives a pawn so the rook can aim down the h-file at Black's kingside." },
        { text: 'The g5-bishop for nothing', why: 'The h-pawn defends the bishop. After 6...Bxg5 7.hxg5, it is a bishop trade. Black only wins the g5-pawn afterward.' },
        { text: 'Nothing: 6.h4 is just a waiting move', why: 'The h-pawn guards the bishop and prepares to give the rook the h-file. It is a real attacking idea.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. You have traded with 6...Bxg5 7.hxg5. What now?',
      moves: `${ALEKHINE_CHATARD} Bxg5 hxg5`,
      orientation: 'black',
      choices: [
        { text: '7...Qxg5', correct: true, why: 'Right. The queen wins the g5-pawn. That is the point of accepting.' },
        { text: '7...c5', why: 'Too slow. White keeps the g5-pawn, which cramps Black, and the engine gives White a clear edge.' },
        { text: '7...a6', why: 'Too slow. Black traded bishops but did not take the pawn, and the g5-pawn stays to cramp Black. The engine gives White a clear edge.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. Black has declined with 6...a6. What is White\'s strongest answer?',
      moves: `${ALEKHINE_CHATARD} a6`,
      orientation: 'white',
      choices: [
        { text: '7.Qg4', correct: true, why: 'Right. The queen threatens Bxe7 and Qxg7. The engine gives White a clear edge.' },
        { text: '7.Bxe7', why: 'Playable, but it lets Black off the hook: after 7...Qxe7 the game looks like a normal main line, and White\'s edge is small.' },
        { text: '7.f4', why: 'Solid, but slow. The engine gives White only a small edge, much less than after 7.Qg4.' }
      ]
    },
    {
      type: 'concept',
      prompt: "After 6...Bxg5 7.hxg5 Qxg5, why is Black's king unsafe?",
      moves: `${ALEKHINE_CHATARD} Bxg5 hxg5 Qxg5`,
      orientation: 'black',
      choices: [
        { text: "The half-open h-file and the missing dark-squared bishop make short castling risky", correct: true, why: "Right. White's rook already looks at h7, and Black has no bishop left to guard the dark squares near the king." },
        { text: 'Black can no longer castle at all', why: "Castling is still legal. It is just dangerous on the kingside." },
        { text: "White's queen is already attacking the king", why: "White's queen is still on d1. The danger comes from the h-file and the moves to come, like Qg4." }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'What is 4.Bg5 Be7 5.e5 Nfd7 6.h4 called?',
      moves: ALEKHINE_CHATARD,
      orientation: 'white',
      choices: [
        { text: 'The Alekhine–Chatard Attack', correct: true, why: 'Right. It is also called the Albin–Chatard Attack.' },
        { text: 'The McCutcheon Variation', why: 'The McCutcheon is 4.Bg5 Bb4. Here Black played 4...Be7.' },
        { text: 'The Steinitz Variation', why: 'The Steinitz is 4.e5 straight away, without Bg5.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the accepted line, why does White play 8.Nh3?',
      moves: `${ALEKHINE_CHATARD} Bxg5 hxg5 Qxg5 Nh3`,
      orientation: 'white',
      choices: [
        { text: 'It develops with an attack on the queen, and heads for f4', correct: true, why: 'Right. White gains time, and the knight later goes to f4, where it presses on e6.' },
        { text: 'It attacks the h7-pawn', why: 'A knight on h3 does not reach h7. It hits the queen on g5 and heads for f4.' },
        { text: 'It prepares short castling', why: "White's attack is on the kingside. White usually castles long, or keeps the king in the center for a while." }
      ]
    }
  ],
  key: { name: 'Alekhine–Chatard Attack: 6.h4', moves: ALEKHINE_CHATARD, orientation: 'black' },
  terms: [
    { term: 'Alekhine–Chatard Attack', meaning: '4.Bg5 Be7 5.e5 Nfd7 6.h4: White offers a pawn to get the h-file for the rook. Also called the Albin–Chatard Attack.' },
    { term: 'Gambit', meaning: 'An opening where one side gives up material, usually a pawn, for time or attacking chances.' },
    { term: 'Half-open file', meaning: 'A file with pawns of only one color. After hxg5 the h-file has only Black\'s h7-pawn, so White\'s rook can use it to attack h7.' },
    { term: 'Gaining time', meaning: 'Making a useful move that also forces a reply, such as developing a piece with an attack on the queen.' }
  ]
})
