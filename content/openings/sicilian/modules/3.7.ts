import { defineModule } from '../../../types'
import { DRAGON } from '../lines'

/** dragon-6be2: the Classical Dragon */
const BE2 = `${DRAGON} Be2 Bg7 O-O O-O Be3 Nc6 Nb3 Be6 f4 Qc8`
/** dragon-6bc4: 9...Nxe4! 10.Nxe4 d5, the fork trick */
const BC4 = `${DRAGON} Bc4 Bg7 h3 O-O O-O Nc6 Be3 Nxe4 Nxe4 d5 Nxc6 bxc6 Bd3 dxe4 Bxe4`
/** dragon-levenfish-trap: 6.f4 Bg7?! 7.e5 dxe5 8.fxe5 Ng4? 9.Bb5+! Kf8?? 10.Ne6+ */
const LEVENFISH = `${DRAGON} f4 Bg7 e5 dxe5 fxe5 Ng4 Bb5+ Kf8 Ne6+ Bxe6 Qxd8#`

export default defineModule({
  id: '3.7',
  title: 'Quieter tries: 6.Be2, 6.Bc4 and 6.f4',
  minutes: 12,
  level: 2,
  goals: [
    'Know the calm Classical Dragon with 6.Be2 and castling kingside',
    'Use the fork trick ...Nxe4 and ...d5 against 6.Bc4',
    'Answer 6.f4 safely, and see the Levenfish trap from both sides'
  ],
  intro:
    "Not every White player wants the sharp Yugoslav race. Three quieter sixth moves are common at club level: 6.Be2, 6.Bc4 and 6.f4. Each has its own trick. One gives Black a neat tactic, and one hides a trap that can end the game in eleven moves.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Classical Dragon: 6.Be2',
      intro: 'White develops quietly and castles on the same side as Black. There is no pawn race here.',
      moves: BE2,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'The Dragon',
          text: '5...g6. Black plays the Dragon. White chooses a calm set-up.',
          marks: ['f1']
        },
        11: {
          title: 'A quiet bishop',
          text: '6.Be2. The bishop develops modestly. White is planning to castle kingside.',
          arrows: [['f1', 'e2', 'green']]
        },
        12: {
          title: 'The Dragon bishop',
          text: '6...Bg7. Black fianchettoes as usual.',
          arrows: [['g7', 'a1', 'yellow']]
        },
        13: {
          title: 'Kingside castling',
          text: '7.O-O. Both kings will be on the same side, so neither player can throw pawns at the other king safely. The game is slower and more positional.',
          marks: ['g1']
        },
        14: {
          title: 'Black castles',
          text: '7...O-O. Black castles too.',
          marks: ['g8']
        },
        15: {
          title: 'Bishop to e3',
          text: '8.Be3. The bishop guards the d4-knight.',
          arrows: [['e3', 'd4', 'green']]
        },
        16: {
          title: 'Knight to c6',
          text: '8...Nc6. The knight hits d4.',
          arrows: [['c6', 'd4', 'red']]
        },
        17: {
          title: 'The knight steps back',
          text: '9.Nb3. The knight leaves d4, where Black\'s knight and the hidden g7-bishop both aim. Next, White plans f2–f4.',
          arrows: [['d4', 'b3', 'green'], ['f2', 'f4', 'blue']]
        },
        18: {
          title: 'Bishop to e6',
          text: '9...Be6. Black develops and covers c4 and d5.',
          arrows: [['e6', 'c4', 'blue'], ['e6', 'd5', 'blue']]
        },
        19: {
          title: 'The f-pawn advances',
          text: '10.f4. White gains space and gets ready for f4–f5, which would hit the e6-bishop.',
          arrows: [['f4', 'f5', 'green'], ['f5', 'e6', 'red']]
        },
        20: {
          title: 'A level game',
          text: '10...Qc8. The queen guards the e6-bishop and lets a rook come to d8. The engine calls it level, and top players rarely choose it.',
          arrows: [['c8', 'e6', 'green'], ['f8', 'd8', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '6.Bc4 and the fork trick',
      intro: 'After 6.Bc4 Bg7 7.h3 (stopping ...Ng4) O-O 8.O-O Nc6, White plays a natural developing move. Black has a trick.',
      moves: BC4,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'The bishop on c4',
          text: "8...Nc6. White's bishop on c4 aims at f7. Notice it is not protected by anything.",
          arrows: [['c4', 'f7', 'red']],
          marks: ['c4']
        },
        17: {
          title: 'A natural move',
          text: '9.Be3. White guards d4. But now Black can grab the e4-pawn.',
          marks: ['e4']
        },
        18: {
          title: 'Knight takes pawn',
          text: '9...Nxe4. Black gives the knight for a pawn, for one move only.',
          arrows: [['f6', 'e4', 'red']],
          ann: '!'
        },
        19: {
          title: 'White takes',
          text: '10.Nxe4. White takes the knight. Black is a piece down for a pawn.',
          marks: ['e4']
        },
        20: {
          title: 'The fork',
          text: '10...d5. The pawn attacks the c4-bishop and the e4-knight at once. And with f6 empty, the g7-bishop now hits d4 too.',
          arrows: [['d5', 'c4', 'red'], ['d5', 'e4', 'red'], ['g7', 'd4', 'red']],
          ann: '!'
        },
        21: {
          title: 'White trades first',
          text: '11.Nxc6. The d4-knight was attacked twice, so White swaps it off first.',
          marks: ['c6']
        },
        22: {
          title: 'Pawn takes back',
          text: '11...bxc6. Black takes back. The fork on c4 and e4 is still there.',
          arrows: [['d5', 'c4', 'red'], ['d5', 'e4', 'red']]
        },
        23: {
          title: 'The bishop escapes',
          text: '12.Bd3. The bishop steps out of the fork and guards the e4-knight.',
          arrows: [['d3', 'e4', 'green']]
        },
        24: {
          title: 'The piece comes back',
          text: '12...dxe4. Black wins the knight back.',
          marks: ['e4']
        },
        25: {
          title: 'All square',
          text: "13.Bxe4. Material is level again. The g7-bishop now sees all the way to b2, and Black has a comfortable game.",
          arrows: [['g7', 'b2', 'yellow']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'When does the fork trick work?',
      body:
        'Look for ...Nxe4 and ...d5 when a white bishop stands on c4 and only the c3-knight guards e4. After the knight takes on e4, the d5-pawn forks the two pieces, and Black wins the piece back. Before you play it, count the trades to the end: material should come out level, not worse for you.'
    },
    {
      kind: 'walkthrough',
      title: 'The Levenfish trap',
      intro: 'Against 6.f4, White is threatening e4–e5. Watch Black make one small slip and then two big ones.',
      moves: LEVENFISH,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'The Dragon',
          text: '5...g6. White now tries something more direct.',
          marks: ['f2']
        },
        11: {
          title: 'The Levenfish Attack',
          text: '6.f4. The pawn supports e4–e5, which would kick the f6-knight.',
          arrows: [['e4', 'e5', 'red'], ['f4', 'e5', 'green']]
        },
        12: {
          title: 'A small slip',
          text: '6...Bg7. Natural, but slightly inaccurate. It does nothing about e5. 6...Nbd7 or 6...Nc6, covering e5, is simpler.',
          marks: ['e5'],
          ann: '?!'
        },
        13: {
          title: 'The pawn push',
          text: '7.e5. The pawn attacks the knight.',
          arrows: [['e5', 'f6', 'red']]
        },
        14: {
          title: 'Pawn takes',
          text: '7...dxe5. Black takes the pawn.',
          marks: ['e5']
        },
        15: {
          title: 'The knight is hit again',
          text: '8.fxe5. Again the knight is attacked. The right retreat is 8...Nfd7, and the game goes on.',
          arrows: [['e5', 'f6', 'red'], ['f6', 'd7', 'green']]
        },
        16: {
          title: 'The real mistake',
          text: '8...Ng4. The knight jumps forward and hits e5. But on g4 only the c8-bishop guards it, and b5 is open.',
          arrows: [['g4', 'e5', 'red'], ['d1', 'g4', 'red']],
          marks: ['b5'],
          ann: '?'
        },
        17: {
          title: 'The same check',
          text: "9.Bb5+. The check from Module 3.2. Blocking on d7 loses the g4-knight, because Qxg4 follows. 9...Nc6 is Black's best try, but White still comes out ahead.",
          arrows: [['b5', 'e8', 'red']],
          ann: '!'
        },
        18: {
          title: 'The losing move',
          text: '9...Kf8. The king steps aside, and nothing seems lost. But look at the e6-square.',
          marks: ['e6'],
          ann: '??'
        },
        19: {
          title: 'A royal fork',
          text: '10.Ne6+. The knight checks the king and attacks the queen on d8. If 10...fxe6, then 11.Qxd8+ wins the queen.',
          arrows: [['e6', 'f8', 'red'], ['e6', 'd8', 'red']],
          ann: '!'
        },
        20: {
          title: 'Take the knight',
          text: "10...Bxe6. Black removes the knight. But White's queen still sees d8 down the open d-file, and nothing guards Black's queen.",
          arrows: [['d1', 'd8', 'red']]
        },
        21: {
          title: 'Checkmate',
          text: "11.Qxd8#. The queen takes and gives mate. The king can't escape: e8 is covered by the b5-bishop, and g8 by the queen along the back rank.",
          arrows: [['d8', 'f8', 'red'], ['b5', 'e8', 'red']]
        }
      }
    }
  ],
  takeaway:
    "6.Be2 leads to a calm, level game. Against 6.Bc4, watch for the fork trick ...Nxe4 and ...d5. Against 6.f4, cover e5 with 6...Nbd7 or 6...Nc6; if you do play 6...Bg7, retreat with ...Nfd7 after e5, never ...Ng4.",
  lookAhead:
    "Module 3.8 turns to a cousin of the Dragon: the Accelerated Dragon, where Black plays ...g6 before ...d6.",
  drills: [
    {
      title: 'Spring the fork trick',
      prompt: "You're Black. White has just played 9.Be3. Grab the e4-pawn with a trick that wins your piece back.",
      moves: `${DRAGON} Bc4 Bg7 h3 O-O O-O Nc6 Be3 Nxe4 Nxe4 d5`,
      start: 17,
      side: 'black',
      hints: [
        'The e4-pawn is guarded only by the c3-knight. Take it.',
        'After 10.Nxe4, one pawn move attacks two white pieces.'
      ],
      success: '9...Nxe4! 10.Nxe4 d5! The pawn forks the bishop and the knight, and Black gets the piece back.'
    },
    {
      title: 'Punish the Levenfish slips',
      prompt: "You're White. Black has just played 8...Ng4?. Punish it, and if the king steps aside, finish the game.",
      moves: LEVENFISH,
      start: 16,
      side: 'white',
      hints: [
        'Black has not played ...a6. Check the king from b5.',
        'After ...Kf8, a knight jump checks the king and hits the queen.'
      ],
      success: '9.Bb5+!, 10.Ne6+! and 11.Qxd8#. The Levenfish trap.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'White to move. Black has just played 8...Ng4. What is the strongest move?',
      moves: LEVENFISH.split(' ').slice(0, 16).join(' '),
      orientation: 'white',
      choices: [
        { text: '9.Bb5+', correct: true, why: 'Right. It is the only good move. Blocking on d7 loses the knight to Qxg4, and 9...Kf8?? loses to 10.Ne6+.' },
        { text: '9.Qxg4', why: 'The c8-bishop guards g4. After 9...Bxg4 White has lost the queen.' },
        { text: '9.Bf4', why: 'It guards e5, but Black castles and wins the e5-pawn anyway, with the better game. Only the check works.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. White has just played 8.fxe5, hitting the knight. Where should it go?',
      moves: LEVENFISH.split(' ').slice(0, 15).join(' '),
      orientation: 'black',
      choices: [
        { text: '8...Nfd7', correct: true, why: 'Right. The knight is safe on d7 and attacks the e5-pawn. White is a little better, but the game goes on.' },
        { text: '8...Ng4', why: 'This runs into 9.Bb5+!, and Black loses material.' },
        { text: '8...Nh5', why: 'After 9.Bb5+ and g2–g4, the knight on the edge gets trapped. White is clearly better.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 9...Nxe4 10.Nxe4 d5, what does the d5-pawn attack?',
      moves: `${DRAGON} Bc4 Bg7 h3 O-O O-O Nc6 Be3 Nxe4 Nxe4 d5`,
      orientation: 'black',
      choices: [
        { text: 'The c4-bishop and the e4-knight', correct: true, why: 'Yes. That is a pawn fork. White cannot save both pieces, so Black wins the piece back.' },
        { text: 'The d4-knight', why: 'Pawns capture diagonally forward. The d5-pawn attacks c4 and e4, not d4.' },
        { text: 'Only the e4-knight', why: 'Look to the left as well. The pawn also hits the bishop on c4.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Classical Dragon (6.Be2), what kind of game does White choose?',
      moves: BE2,
      orientation: 'white',
      choices: [
        { text: 'Castle kingside and play slowly, often with f2–f4', correct: true, why: 'Right. With both kings on the same side, there is no pawn race. The engine calls it level.' },
        { text: 'Castle queenside and storm with h4–h5', why: 'That is the Yugoslav Attack, with Be3, f3 and Qd2.' },
        { text: 'Trade queens at once', why: 'Nothing in 6.Be2 aims for that. White develops quietly and castles kingside.' }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'White to move. Black has just played 9...Kf8. What wins?',
      moves: LEVENFISH.split(' ').slice(0, 18).join(' '),
      orientation: 'white',
      choices: [
        { text: '10.Ne6+', correct: true, why: 'Yes. The knight forks king and queen. 10...fxe6 11.Qxd8+ wins the queen, and 10...Bxe6 11.Qxd8# is mate.' },
        { text: '10.Qxg4', why: 'The c8-bishop still guards g4, so 10...Bxg4 wins White\'s queen.' },
        { text: '10.O-O', why: 'A good move, but it misses the knight fork that wins at once.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the simplest way for Black to meet the Levenfish Attack, 6.f4?',
      moves: `${DRAGON} f4`,
      orientation: 'black',
      choices: [
        { text: 'Cover e5 with 6...Nbd7 or 6...Nc6', correct: true, why: 'Right. With e5 covered, the push e4–e5 is much less dangerous.' },
        { text: '6...Bg7, and answer e5 with ...Ng4', why: 'That is exactly the trap: 7.e5 dxe5 8.fxe5 Ng4? 9.Bb5+! wins material.' },
        { text: 'Let White push e5, then attack it with ...Nh5', why: 'A knight on h5 can get trapped. Covering e5 in advance is much safer.' }
      ]
    }
  ],
  key: { name: 'Levenfish trap: 10.Ne6+!', moves: LEVENFISH.split(' ').slice(0, 19).join(' '), orientation: 'white' },
  terms: [
    { term: 'Fork trick', meaning: 'Giving up a knight for a pawn, then winning the piece back with a pawn fork. Here ...Nxe4 and ...d5.' },
    { term: 'Pawn fork', meaning: 'A pawn attacking two enemy pieces at once, one on each diagonal in front of it.' },
    { term: 'Positional game', meaning: 'A game where slow plans and good squares matter more than direct attacks on the king.' }
  ]
})
