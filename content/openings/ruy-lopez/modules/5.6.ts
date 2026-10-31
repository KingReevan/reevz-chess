import { defineModule } from '../../../types'
import { CLOSED_OO } from '../../../lines'

const B4 = `${CLOSED_OO} a4 b4 d3 d6 a5 Be6`
const BB7 = `${CLOSED_OO} a4 Bb7 d3`
const IGNORE = `${CLOSED_OO} a4 h6 axb5 axb5 Rxa8`

export default defineModule({
  id: '5.6',
  title: 'Anti-Marshall: 8.a4',
  minutes: 10,
  level: 3,
  goals: [
    'Understand how 8.a4 sidesteps the Marshall',
    'See the threat on b5 and the a-file',
    'Know the two main replies, 8...b4 and 8...Bb7'
  ],
  intro:
    "You've castled with 7...O-O, ready for 8.c3 d5. But White doesn't play 8.c3. Instead 8.a4 hits your b5-pawn before you have time for ...d5. What exactly does it threaten, and how should Black answer?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The threat behind 8.a4',
      intro: 'First see what happens if Black ignores the a-pawn. Watch the a8-rook.',
      moves: IGNORE,
      start: 14,
      orientation: 'black',
      steps: {
        14: {
          title: 'Ready for the Marshall',
          text: '7...O-O. Black is ready to meet 8.c3 with 8...d5.',
          arrows: [['d7', 'd5', 'blue']]
        },
        15: {
          title: 'White hits b5',
          text: '8.a4. The pawn attacks b5, which only the a6-pawn defends. White has skipped c3, so there is no Marshall.',
          arrows: [['a4', 'b5', 'red']],
          marks: ['b5']
        },
        16: {
          title: 'Ignoring the threat',
          text: '8...h6. A move that does nothing about b5. Now White can open the a-file.',
          ann: '?'
        },
        17: {
          title: 'The pawn falls',
          text: '9.axb5. White wins a pawn. Taking back looks natural, but look at the a-file first.',
          arrows: [['a1', 'a8', 'blue']]
        },
        18: {
          title: 'Opening the file',
          text: "9...axb5. Now the a-file is open from a1 to a8, and the a8-rook has no defender: the c8-bishop stands between it and the queen.",
          arrows: [['a1', 'a8', 'red']],
          marks: ['c8'],
          ann: '??'
        },
        19: {
          title: 'A rook for nothing',
          text: '10.Rxa8. White wins a whole rook. That is the hidden threat of 8.a4: if Black ever recaptures ...axb5 with the bishop still on c8, Rxa8 wins.',
          ann: '!'
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '8...b4: step past the pawn',
      intro: 'The traditional answer. The b-pawn moves on, and the a-file stays closed.',
      moves: B4,
      start: 14,
      orientation: 'black',
      steps: {
        14: {
          title: 'Same position',
          text: '7...O-O. Black has castled. Now White plays the Anti-Marshall.',
          marks: ['b5']
        },
        15: {
          title: 'The attack on b5',
          text: '8.a4. The a-pawn hits b5.',
          arrows: [['a4', 'b5', 'red']]
        },
        16: {
          title: 'Moving on',
          text: '8...b4. The pawn steps past the a4-pawn, so the a-file stays closed. On b4 it also takes c3 away from White\'s knight and pawn.',
          arrows: [['b4', 'c3', 'green']],
          ann: '!'
        },
        17: {
          title: 'A quiet center',
          text: '9.d3. White guards e4 with a pawn. Instead of c3 and d4, White chooses a slow manoeuvring game.',
          arrows: [['d3', 'e4', 'green']]
        },
        18: {
          title: 'Guarding e5',
          text: '9...d6. Black guards e5 and opens the diagonal for the c8-bishop.',
          arrows: [['d6', 'e5', 'green'], ['c8', 'e6', 'blue']]
        },
        19: {
          title: 'Grabbing space',
          text: '10.a5. The pawn takes the a5-square: the c6-knight can no longer go there to hit the b3-bishop. It also fixes Black\'s a6-pawn.',
          marks: ['a5', 'a6']
        },
        20: {
          title: 'Challenging the Spanish bishop',
          text: "10...Be6. Black offers to trade off White's best bishop. If Bxe6 fxe6, Black gets a pawn on e6 guarding d5 and f5, and the f-file is half-open for the rook.",
          arrows: [['e6', 'b3', 'yellow']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '8...Bb7: guard the rook instead',
      intro: 'The other main reply. Black lets the a-file open but makes sure the rook is protected.',
      moves: BB7,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'Before castling',
          text: '7.Bb3. Black will castle and then answer 8.a4.',
          arrows: [['e8', 'g8', 'blue']]
        },
        14: {
          title: 'Castled',
          text: '7...O-O. The usual Marshall setup.',
          arrows: [['d7', 'd5', 'blue']]
        },
        15: {
          title: 'The Anti-Marshall',
          text: '8.a4. Again b5 is attacked.',
          arrows: [['a4', 'b5', 'red']]
        },
        16: {
          title: 'Connecting queen and rook',
          text: '8...Bb7. With the bishop off c8, the queen now guards a8. If axb5 axb5 Rxa8, then ...Qxa8 and nothing is lost. Once the c6-knight moves, the bishop will also aim at e4.',
          arrows: [['d8', 'a8', 'green']]
        },
        17: {
          title: 'White stays solid',
          text: '9.d3. White guards e4 with a pawn and keeps a slow, flexible position.',
          arrows: [['d3', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'warning',
      title: "Why not play 8...d5 anyway?",
      body:
        "After 8.a4 d5?!, White has 9.axb5!, and now the b5-pawn attacks the c6-knight. Black can't get the Marshall position, because White's a-pawn has changed everything on the queenside. Deal with b5 first."
    },
    {
      kind: 'text',
      title: 'Why White chooses 8.a4',
      body:
        "The Marshall only arises after 8.c3. With 8.a4, White never gives Black that chance, and Black must spend a move on the b5-pawn. Then White plays d3, guarding e4 with a pawn, and the game turns into a slow positional battle.\n\nFor Black, that's fine. You don't get your gambit, but the positions after 8...b4 or 8...Bb7 are solid and roughly equal."
    }
  ],
  takeaway:
    "8.a4 attacks b5 and threatens axb5, when ...axb5 would lose the a8-rook to Rxa8. Answer with 8...b4, keeping the a-file closed, or 8...Bb7, so the queen guards a8.",
  lookAhead:
    'Next: the other ways White avoids the Marshall, 8.h3, 8.d4 and 8.d3.',
  drills: [
    {
      title: 'Meet 8.a4',
      prompt: "You're Black. White has just played the Anti-Marshall 8.a4. Play the 8...b4 main line.",
      moves: B4,
      start: 15,
      side: 'black',
      hints: ['Push the attacked pawn forward so the a-file stays closed.', 'Then guard e5 with the d-pawn and develop the light-squared bishop to challenge the b3-bishop.'],
      success: '8...b4, 9...d6 and 10...Be6. The a-file is closed and White\'s best bishop is challenged.'
    },
    {
      title: 'See it from White\'s side',
      prompt: "You're White. Black has ignored your a-pawn with 8...h6. Win a pawn, and if Black takes back carelessly, win more.",
      moves: IGNORE,
      start: 16,
      side: 'white',
      hints: ['The b5-pawn can be taken.', 'If Black recaptures on b5, the a-file is open. Who defends the a8-rook?'],
      success: '9.axb5 axb5?? 10.Rxa8. The c8-bishop blocked the queen, so the rook had no defender.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 8.a4 threaten?',
      moves: `${CLOSED_OO} a4`,
      orientation: 'black',
      choices: [
        { text: 'axb5, and if ...axb5 then Rxa8 wins the rook', correct: true, why: 'Right. The c8-bishop blocks the queen, so the a8-rook is undefended once the a-file opens.' },
        { text: 'a5, trapping the c6-knight', why: 'The c6-knight has plenty of squares. The target is the b5-pawn.' },
        { text: 'Bxf7+, winning a pawn', why: 'f7 is guarded by the rook and king. 8.a4 is about the queenside.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. Which reply keeps the a-file closed?',
      moves: `${CLOSED_OO} a4`,
      orientation: 'black',
      choices: [
        { text: '8...b4', correct: true, why: 'Yes. The pawn steps past a4, so a4 and a6 still block the file.' },
        { text: '8...bxa4', why: "It doesn't win anything. White recaptures on a4, and Black is left with a lonely a6-pawn." },
        { text: '8...h6', why: 'It ignores the threat. 9.axb5 wins a pawn, and ...axb5 would drop the rook.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 8...Bb7 a good answer to 8.a4?',
      choices: [
        { text: 'With the bishop gone from c8, the queen guards a8', correct: true, why: 'Right. Then axb5 axb5 Rxa8 Qxa8 costs Black nothing.' },
        { text: 'It attacks the a4-pawn', why: 'The bishop on b7 points down the long diagonal toward e4, not at a4.' },
        { text: 'It prepares ...b4', why: '8...Bb7 is a different plan. It protects a8 and aims at e4.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the 8...b4 line, what is the idea of 10.a5?',
      moves: `${CLOSED_OO} a4 b4 d3 d6 a5`,
      orientation: 'black',
      choices: [
        { text: 'It grabs space and stops ...Na5 hitting the b3-bishop', correct: true, why: 'Yes. The a5-square belongs to White now, and Black\'s a6-pawn is fixed.' },
        { text: 'It attacks the b4-pawn', why: 'A pawn on a5 attacks b6, not b4.' },
        { text: 'It opens the a-file for the rook', why: 'The a-file stays closed: the a5- and a6-pawns block it.' }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'Black to move. Why would 9...axb5 be a blunder here?',
      moves: `${CLOSED_OO} a4 h6 axb5`,
      orientation: 'black',
      choices: [
        { text: '10.Rxa8 wins the rook, because the c8-bishop blocks the queen', correct: true, why: 'Right. The rook would be on an open file with no defender.' },
        { text: '10.Bxf7+ wins the queen', why: 'There is no such trick. The problem is on the a-file.' },
        { text: '10.Nxe5 wins the e5-pawn', why: "The knight on c6 still guards e5. The real danger is Rxa8." }
      ]
    },
    {
      type: 'concept',
      prompt: 'How does 8.a4 avoid the Marshall Attack?',
      choices: [
        { text: 'White never plays 8.c3, and Black must deal with b5 first', correct: true, why: 'Yes. The Marshall needs 8.c3. After 8.a4 and d3 the game becomes slow and positional.' },
        { text: 'The a4-pawn controls d5', why: 'The a4-pawn controls b5. It does nothing to d5.' },
        { text: 'It prepares c3 and d4 at once', why: 'In the main lines White plays the slower d3, guarding e4.' }
      ]
    }
  ],
  key: { name: 'Anti-Marshall: 8.a4', moves: `${CLOSED_OO} a4`, orientation: 'black' },
  terms: [
    { term: 'Anti-Marshall', meaning: 'Any White 8th move that avoids 8.c3, so that Black cannot play the Marshall Attack.' },
    { term: 'Open file', meaning: 'A file with no pawns on it. Rooks are strongest on open files.' },
    { term: 'Spanish bishop', meaning: "White's light-squared bishop in the Ruy Lopez, usually on b3 or c2, aiming at Black's kingside." }
  ]
})
