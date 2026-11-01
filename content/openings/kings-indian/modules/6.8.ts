import { defineModule } from '../../../types'
import { SAMISCH } from '../lines'

/** samisch-panno: 6...Nc6 7.Nge2 a6 8.Qd2 Rb8 */
const PANNO = `${SAMISCH} Nc6 Nge2 a6 Qd2 Rb8`
/** samisch-panno-9h4: 9.h4 h5 */
const H4 = `${PANNO} h4 h5`
/** samisch-panno-9nc1 (9.Nc1 e5 10.d5 Nd4), then 11.Nb3, the engine's choice */
const NC1 = `${PANNO} Nc1 e5 d5 Nd4 Nb3`

export default defineModule({
  id: '6.8',
  title: 'The Panno: ...Nc6, ...a6, ...Rb8, ...b5',
  minutes: 10,
  level: 3,
  goals: [
    'Know the Panno set-up and its goal: ...b5',
    'Stop White\'s h-pawn with 9...h5',
    'Use the d4 outpost after 9.Nc1 e5 10.d5 Nd4'
  ],
  intro:
    "In the Sämisch, White's king usually castles queenside. The Panno aims right there: Black plays ...Nc6, ...a6 and ...Rb8, then ...b5 to open lines on the queenside. How does White react, and what does Black do if White starts a pawn storm first?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The set-up, and stopping h4–h5',
      intro: 'Watch the b-pawn and the rook behind it, then White\'s h-pawn.',
      moves: H4,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The Sämisch position',
          text: "6.Be3. White's plan is Qd2 and often O-O-O. Black will aim at the queenside."
        },
        12: {
          title: 'The knight first',
          text: '6...Nc6. The knight hits d4. It blocks the c-pawn, so instead of ...c5 Black will play for ...b5. lichess calls this move the Yates Defense; the full set-up is the Panno.',
          arrows: [['c6', 'd4', 'red']]
        },
        13: {
          title: 'd4 is guarded',
          text: '7.Nge2. The knight adds a defender to d4.',
          arrows: [['e2', 'd4', 'green']]
        },
        14: {
          title: 'Preparing ...b5',
          text: '7...a6. Now ...b5 can be supported by the a-pawn.',
          arrows: [['a6', 'b5', 'green']]
        },
        15: {
          title: 'The battery',
          text: '8.Qd2. Queen and bishop line up, and queenside castling is close.'
        },
        16: {
          title: 'The rook gets behind the pawn',
          text: '8...Rb8. The Panno set-up is complete. The rook backs up ...b5. Once Black\'s b-pawn leaves the file, for example with ...bxc4, the b-file is half-open for the rook, aiming at the queenside where White\'s king often goes.',
          arrows: [['b8', 'b2', 'blue'], ['b7', 'b5', 'green']]
        },
        17: {
          title: 'The h-pawn storm',
          text: "9.h4. White wants h5 and hxg6 to open the h-file, the attack from Module 6.2.",
          arrows: [['h4', 'h5', 'red']]
        },
        18: {
          title: 'Block the pawn',
          text: "9...h5. The only good reply. The pawn stops h4–h5 for good, so White's attack slows down and Black has time for ...b5.",
          arrows: [['h5', 'h4', 'green']],
          ann: '!'
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '9.Nc1: White prepares for ...e5',
      intro: "White reroutes the e2-knight. Black switches plans and grabs a central square.",
      moves: NC1,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'The Panno position',
          text: '8...Rb8. Black is ready for ...b5.'
        },
        17: {
          title: 'A knight on its way',
          text: '9.Nc1. The knight heads for b3, where it will watch d4, c5 and a5. It also clears e2 for the f1-bishop.',
          arrows: [['c1', 'b3', 'blue']]
        },
        18: {
          title: 'A central strike',
          text: '9...e5. With the e2-knight gone, d4 has one defender fewer, so Black hits the center.',
          arrows: [['e5', 'd4', 'red']]
        },
        19: {
          title: 'The center locks',
          text: '10.d5. The only good move. White gains space and attacks the c6-knight.',
          arrows: [['d5', 'c6', 'red']]
        },
        20: {
          title: 'An outpost',
          text: "10...Nd4. The knight jumps to d4. White's c- and e-pawns have already moved past, so it is very hard to chase the knight with a pawn.",
          marks: ['d4']
        },
        21: {
          title: 'Challenging the knight',
          text: '11.Nb3. Since pawns can\'t chase the knight, White brings a piece to challenge it. The engine sees White a little better, with play for both sides.',
          arrows: [['b3', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: "Black's goal: ...b5",
      body:
        "The Panno is a counterattack on the queenside. When White castles there, ...b5 opens lines at White's king: ...bxc4 half-opens the b-file, and after cxb5 axb5, ...b4 can kick the c3-knight away from the defense.\n\nThis is exactly what Gufeld did in Module 6.2, with ...Rb8 played one move earlier. There, ...b5 and ...bxc4 half-opened the b-file, and the black rook later crashed in on b2 and a2.\n\nWhite's main answers are either quiet moves that prepare for ...b5, like Rc1 or Nc1–b3, or a fast kingside attack with h4. Against h4, ...h5 is the answer."
    }
  ],
  takeaway:
    'The Panno (...Nc6, ...a6, ...Rb8) prepares ...b5 against the queenside, where White often castles. Meet 9.h4 with 9...h5, and against 9.Nc1 switch to 9...e5 10.d5 Nd4, a knight that no pawn can chase.',
  lookAhead:
    "Module 6.9 rounds off the chapter with Black's and White's other tries: 6...c6, 6...b6, 6.Bg5 and 6.Nge2.",
  drills: [
    {
      title: 'Build the Panno',
      prompt: "You're Black. White has played 6.Be3. Build the Panno set-up, then stop White's h-pawn.",
      moves: H4,
      start: 11,
      side: 'black',
      hints: [
        'Knight, then a-pawn, then rook: all to support ...b5.',
        'When White plays h4, use your own h-pawn.'
      ],
      success: '6...Nc6, 7...a6, 8...Rb8 and 9...h5! The set-up is ready and the h-pawn is blocked.'
    },
    {
      title: 'Meet the outpost',
      prompt: "You're White in the Panno. Reroute your knight, close the center when Black strikes, then challenge the knight on d4.",
      moves: NC1,
      start: 16,
      side: 'white',
      hints: [
        'The e2-knight can go back to c1 on its way to b3.',
        'After ...e5, push past. After ...Nd4, bring the c1-knight to b3.'
      ],
      success: '9.Nc1, 10.d5 and 11.Nb3. White challenges the outpost knight with a piece, the only way to do it.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the point of ...a6 and ...Rb8 in the Panno?',
      choices: [
        { text: "To prepare ...b5 and open lines on the queenside, where White's king often goes", correct: true, why: 'Right. The a-pawn supports ...b5, and the rook stands ready for the b-file.' },
        { text: 'To prepare ...e5 and a kingside attack', why: '...e5 sometimes follows, but ...a6 and ...Rb8 are about the queenside.' },
        { text: 'To stop White from castling queenside', why: 'White can still castle there. Black wants to make it dangerous, not impossible.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White has just played 9.h4. Black to move. What is best?',
      moves: `${PANNO} h4`,
      orientation: 'black',
      choices: [
        { text: '9...h5', correct: true, why: 'Right. The only good move: it stops h4–h5, so the h-file stays closed.' },
        { text: '9...b5', why: 'Too slow. After 10.h5, White opens the h-file first and is clearly better.' },
        { text: '9...Re8', why: 'It does nothing against the h-pawn. After h5, White\'s attack arrives first.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9.Nc1 e5 10.d5 Nd4, why is the knight so strong on d4?',
      moves: `${PANNO} Nc1 e5 d5 Nd4`,
      orientation: 'black',
      choices: [
        { text: "White's c- and e-pawns have moved past, so no pawn can easily attack it", correct: true, why: 'Right. That makes d4 an outpost. Only White pieces can challenge it, which is why Nc1–b3 follows.' },
        { text: 'It attacks the White king', why: "The knight on d4 is centralized, but it doesn't attack the king directly." },
        { text: 'It cannot be captured at all', why: 'Pieces can still take it, for example a knight from b3 or e2. Only pawns can\'t attack it.' }
      ]
    },
    {
      type: 'name',
      prompt: 'What is this set-up called?',
      moves: PANNO,
      orientation: 'black',
      choices: [
        { text: 'The Panno', correct: true, why: 'Right. ...Nc6, ...a6 and ...Rb8, preparing ...b5.' },
        { text: 'The Sämisch Gambit', why: 'The gambit is 6...c5, offering a pawn. Here Black plays ...Nc6 and ...a6.' },
        { text: 'The Orthodox Sämisch', why: 'The Orthodox line is 6...e5. Here Black first builds a queenside set-up.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'Why does the Panno plan of ...b5 suit play against the Sämisch?',
      choices: [
        { text: "White's king often castles queenside, so ...b5 opens lines right where it lives", correct: true, why: 'Right. It turns the game into a race where Black attacks the king, not just pawns.' },
        { text: 'It wins the c4-pawn by force', why: 'Black may pick up the pawn sometimes, but the real target is the king.' },
        { text: "It stops White's Bh6 plan", why: 'Bh6 is still possible. The Panno answers White\'s attack with a counterattack.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black has just struck with 9...e5. White to move. What is best?',
      moves: `${PANNO} Nc1 e5`,
      orientation: 'white',
      choices: [
        { text: '10.d5', correct: true, why: 'Right. The only good move: it gains space and kicks the c6-knight.' },
        { text: '10.Nb3', why: 'After 10...exd4 Black frees the game, and the engine calls it equal. White gives up the edge.' },
        { text: '10.N1e2', why: 'Too slow. 10...b5 starts Black\'s queenside play, and Black is a bit better.' }
      ]
    }
  ],
  key: { name: 'Panno Sämisch: 6...Nc6 7.Nge2 a6 8.Qd2 Rb8', moves: PANNO, orientation: 'black' },
  terms: [
    { term: 'Outpost', meaning: 'A square, often in the center or in enemy territory, where your piece cannot be attacked by enemy pawns.' },
    { term: 'Prophylaxis', meaning: 'A move that stops the opponent\'s plan before it starts, like ...h5 against h4–h5.' },
    { term: 'Panno', meaning: 'Black\'s set-up with ...Nc6, ...a6 and ...Rb8 to prepare ...b5. It appears against the Sämisch and the Fianchetto.' }
  ]
})
