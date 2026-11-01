import { defineModule } from '../../../types'
import { KID } from '../lines'

/** 5.Nf3 O-O, before White's 6th move */
const NF3 = `${KID} Nf3 O-O`
/** kid-6h3: 6.h3 e5 7.d5 a5 8.Bg5 Na6 */
const H3 = `${NF3} h3 e5 d5 a5 Bg5 Na6`
/** kid-6be3: 6.Be3 Ng4 7.Bg5 h6 8.Bh4 c5 (Larsen Variation) */
const BE3 = `${NF3} Be3 Ng4 Bg5 h6 Bh4 c5`
/** kid-6bg5: 6.Bg5 c5 7.d5 h6 8.Bf4 e6 (Zinnowitz Variation) */
const BG5 = `${NF3} Bg5 c5 d5 h6 Bf4 e6`

export default defineModule({
  id: '5.8',
  title: "White's other 6th moves: 6.h3, 6.Bg5, 6.Be3",
  minutes: 11,
  level: 3,
  goals: [
    'Know what 6.h3 stops, and the Petrosian-style answer',
    'Meet 6.Be3 with the ...Ng4 jump (the Larsen Variation)',
    'Answer the early 6.Bg5 with ...c5 and ...h6'
  ],
  intro:
    "After 5.Nf3 O-O, White does not have to play 6.Be2. Three other moves each try to fix a problem: ...Ng4 and ...Bg4 jumps, or a black knight that sits too comfortably on f6. What does each one aim for, and which pawn break should Black choose against it?",
  sections: [
    {
      kind: 'walkthrough',
      title: '6.h3: no squares on g4',
      intro: 'The little pawn move takes g4 away from both the knight and the bishop.',
      moves: H3,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'Black has castled',
          text: '5...O-O. White picks a 6th move.',
          arrows: [['f1', 'e2', 'blue']]
        },
        11: {
          title: 'Guarding g4',
          text: '6.h3. Now neither ...Ng4 nor ...Bg4 is possible. White also prepares Be3 without worrying about ...Ng4, and sometimes g4 to grab kingside space.',
          arrows: [['h3', 'g4', 'green']],
          marks: ['g4']
        },
        12: {
          title: 'Black strikes',
          text: '6...e5. The usual break, hitting d4.',
          arrows: [['e5', 'd4', 'red']]
        },
        13: {
          title: 'Closing the center',
          text: '7.d5. White locks the center, just as in the Petrosian System (Module 5.1).',
          marks: ['c6']
        },
        14: {
          title: 'The same answer',
          text: '7...a5. Black stops b4 and prepares ...Na6–c5, exactly as against 7.d5.',
          arrows: [['a5', 'b4', 'green']]
        },
        15: {
          title: 'The pin',
          text: '8.Bg5. The f6-knight is pinned to the queen again.',
          arrows: [['g5', 'd8', 'red']]
        },
        16: {
          title: 'Knight on its way',
          text: '8...Na6. The knight heads for c5. The ideas from Modules 5.1 and 5.2 all apply: ...h6, ...Qe8 or the bishop hunt. White is a bit better.',
          arrows: [['a6', 'c5', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '6.Be3: the Larsen Variation and 6...Ng4!',
      intro: "lichess calls 6.Be3 the Larsen Variation. With no h3, nothing guards g4, so the bishop on e3 is an easy target.",
      moves: BE3,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'Black has castled',
          text: '5...O-O. Black is ready for ...e5 or ...c5.',
          arrows: [['e7', 'e5', 'blue'], ['c7', 'c5', 'blue']]
        },
        11: {
          title: 'Bishop first',
          text: '6.Be3. The bishop guards d4. But nothing stops a black knight from landing on g4.',
          marks: ['g4']
        },
        12: {
          title: 'The jump',
          text: '6...Ng4. The knight attacks the bishop at once. White must move it again, and Black gains time.',
          arrows: [['g4', 'e3', 'red']],
          ann: '!'
        },
        13: {
          title: 'Bishop to g5',
          text: "7.Bg5. Unlike the Gligorić, this does not hit the queen: Black's e-pawn is still on e7, blocking the diagonal.",
          marks: ['e7']
        },
        14: {
          title: 'Kick it',
          text: '7...h6. Black asks the bishop again.',
          arrows: [['h6', 'g5', 'red']]
        },
        15: {
          title: 'Bishop to h4',
          text: '8.Bh4. The bishop keeps an eye on e7.',
          arrows: [['h4', 'e7', 'blue']]
        },
        16: {
          title: 'The other break',
          text: '8...c5. Black strikes at d4 with the c-pawn. The g7-bishop joins in, because the f6-knight has left. Black has active play, though White keeps a small edge.',
          arrows: [['c5', 'd4', 'red'], ['g7', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '6.Bg5: the Zinnowitz Variation',
      intro: "lichess calls 6.Bg5 here the Zinnowitz Variation. Some older lists call it a Smyslov System, but lichess keeps that name for Bg5 before e4. Nothing is pinned yet, because e7 blocks the diagonal, but ...e5 would create the pin.",
      moves: BG5,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'Black has castled',
          text: '5...O-O. White is about to bring the bishop out early.',
          arrows: [['c1', 'g5', 'blue']]
        },
        11: {
          title: 'The early bishop',
          text: '6.Bg5. If Black plays 6...e5? now, the f6-knight is pinned, and 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5! wins material, the same trick as the Averbakh trap in Module 7.8. So Black chooses the other break.',
          arrows: [['g5', 'f6', 'red']],
          marks: ['e7']
        },
        12: {
          title: 'Hit d4 with the c-pawn',
          text: '6...c5. This break does not open the d8–h4 diagonal, so there is no pin.',
          arrows: [['c5', 'd4', 'red']]
        },
        13: {
          title: 'White advances',
          text: '7.d5. White gains space and keeps the center closed.',
          marks: ['d5']
        },
        14: {
          title: 'Ask the bishop',
          text: '7...h6. Black kicks the bishop before playing ...e6.',
          arrows: [['h6', 'g5', 'red']]
        },
        15: {
          title: 'Bishop to f4',
          text: '8.Bf4. The bishop looks at the d6-pawn.',
          arrows: [['f4', 'd6', 'red']]
        },
        16: {
          title: 'Hitting d5',
          text: '8...e6. Black attacks d5. If Black later takes on d5, the e-file half-opens, as in the Benoni structures of Module 5.9. If White takes on e6 instead, Black recaptures with the bishop and gets active play. The position is roughly equal.',
          arrows: [['e6', 'd5', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'One question for each move',
      body:
        "**6.h3** takes g4 away. Answer with ...e5, and after d5 play Petrosian-style: ...a5 and ...Na6.\n\n**6.Be3** leaves g4 open. Jump with **6...Ng4**, and after Bg5 h6 Bh4 hit d4 with ...c5.\n\n**6.Bg5** wants to pin the knight once ...e5 comes. Choose **...c5** instead, kick the bishop with ...h6, and then play ...e6. Hunting the bishop with ...h6 and ...g5 (Module 5.2) is the other good answer."
    }
  ],
  takeaway:
    "6.h3 stops ...Ng4 and ...Bg4, so Black plays ...e5 and the Petrosian ideas. 6.Be3 allows 6...Ng4!. Against 6.Bg5, Black avoids the pin by breaking with ...c5 and kicking the bishop with ...h6.",
  lookAhead:
    "Next: the last module of the chapter, 6...c5 against the normal 6.Be2, and the two pawn structures it leads to.",
  drills: [
    {
      title: 'Against 6.h3',
      prompt: "You're Black. White has played 6.h3. Strike in the center, and when White closes it, use the Petrosian set-up.",
      moves: H3,
      start: 11,
      side: 'black',
      hints: [
        'The usual central break first.',
        '...e5, then ...a5, then the knight to a6.'
      ],
      success: '6...e5, 7...a5 and 8...Na6. The knight is heading for c5.'
    },
    {
      title: 'Against 6.Be3',
      prompt: "You're Black. White has played 6.Be3 without h3. Attack the bishop at once, then ask it again.",
      moves: BE3.split(' ').slice(0, 14).join(' '),
      start: 11,
      side: 'black',
      hints: [
        'Which knight move hits e3?',
        '...Ng4, and after Bg5, the h-pawn.'
      ],
      success: '6...Ng4 and 7...h6. The bishop has been chased twice, and Black is ready for ...c5.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does 6.h3 stop?',
      moves: `${NF3} h3`,
      orientation: 'white',
      choices: [
        { text: 'Both ...Ng4 and ...Bg4', correct: true, why: 'Right. The h3-pawn guards g4, so neither Black piece can land there.' },
        { text: '...e5', why: '...e5 is still fine. Black plays it at once in the main line.' },
        { text: '...c5', why: 'h3 has nothing to do with the c-pawn. It controls g4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is 6...Ng4 a good answer to 6.Be3?',
      moves: `${NF3} Be3`,
      orientation: 'black',
      choices: [
        { text: 'g4 is unguarded, so the knight hits the bishop and gains time', correct: true, why: 'Right. Without h3, nothing guards g4, so nothing stops the jump, and White must move the bishop again.' },
        { text: 'It wins the e3-bishop by force', why: 'The bishop simply moves away. The gain is time, not material.' },
        { text: 'It threatens mate on f2', why: 'There is no mate. The knight attacks e3 and f2 is well defended.' }
      ]
    },
    {
      type: 'name',
      prompt: 'What does lichess call 5.Nf3 O-O 6.Bg5?',
      moves: `${NF3} Bg5`,
      orientation: 'black',
      choices: [
        { text: 'The Zinnowitz Variation', correct: true, why: 'Right. Some older lists say Smyslov, but lichess keeps that name for Bg5 before e4.' },
        { text: 'The Averbakh Variation', why: 'The Averbakh is 5.Be2 O-O 6.Bg5, with the bishop on e2 instead of a knight on f3. Chapter 7 covers it.' },
        { text: 'The Larsen Variation', why: 'The Larsen is 6.Be3.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'After 6.Bg5, why does Black prefer 6...c5 to 6...e5?',
      moves: `${NF3} Bg5`,
      orientation: 'black',
      choices: [
        { text: 'After ...e5 the f6-knight is pinned, and 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5! wins material', correct: true, why: 'Right. ...c5 hits d4 without opening the diagonal from g5 to d8, so there is no pin to exploit.' },
        { text: 'Both are equally good; it is a matter of taste', why: 'Not here. After 6...e5? 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5! White wins material in every line.' },
        { text: '...c5 attacks the bishop', why: 'The c-pawn does not touch g5. It hits d4. The point is to avoid the pin.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: "After 6.Be3 Ng4 7.Bg5, why doesn't the bishop attack Black's queen, as it did in the Gligorić after 7...Ng4 8.Bg5?",
      moves: BE3.split(' ').slice(0, 13).join(' '),
      orientation: 'black',
      choices: [
        { text: "Black's e-pawn is still on e7, blocking the diagonal", correct: true, why: "Right. In the Gligorić, Black had already played ...e5, so e7 was empty." },
        { text: 'The queen is no longer on d8', why: 'The queen is still on d8. The e7-pawn stands in the way.' },
        { text: 'The bishop is pinned', why: 'Nothing pins the bishop. The e7-pawn simply blocks its path.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'After 6.h3, Black plays 6...Ng4 out of habit. What happens?',
      moves: `${NF3} h3 Ng4`,
      orientation: 'white',
      choices: [
        { text: '7.hxg4 wins a knight', correct: true, why: 'Right. The h3-pawn guards g4, so the knight is simply lost.' },
        { text: 'Black wins the e3-bishop', why: 'There is no bishop on e3 yet, and the knight on g4 is just taken.' },
        { text: 'Nothing: the knight is safe', why: 'The h3-pawn attacks g4. That is the whole point of 6.h3.' }
      ]
    }
  ],
  key: { name: 'Larsen Variation: 6.Be3 Ng4', moves: BE3.split(' ').slice(0, 12).join(' '), orientation: 'black' },
  terms: [
    { term: 'Prophylaxis', meaning: 'A move that stops the opponent\'s idea before it happens, like 6.h3 taking g4 away.' },
    { term: 'Gain time', meaning: 'To make a move that forces the opponent to spend a move answering it, like a knight attacking a bishop.' },
    { term: 'Pawn break', meaning: 'A pawn move that attacks the enemy pawn chain to open lines, like ...e5 or ...c5 against d4.' }
  ]
})
