import { defineModule } from '../../../types'

/** qh5-2qh5: 2.Qh5 e6 3.Qe2 Nc6 4.Nf3 Nge7 */
const QH5_E6 = 'e4 c5 Qh5 e6 Qe2 Nc6 Nf3 Nge7'
/** qh5-nf6: 2.Qh5 Nf6 3.Qxc5 Nxe4 4.Qe3 d5 */
const QH5_NF6 = 'e4 c5 Qh5 Nf6 Qxc5 Nxe4 Qe3 d5'
/** bowdler-scholars-trap: 2.Bc4 Nc6 3.Qh5 Nf6?? 4.Qxf7# */
const MATE = 'e4 c5 Bc4 Nc6 Qh5 Nf6 Qxf7#'
/** bowdler-qh5-e6: 2.Bc4 Nc6 3.Qh5 e6! 4.Nf3 Nf6 */
const DEFENSE = 'e4 c5 Bc4 Nc6 Qh5 e6 Nf3 Nf6'
/** 2.Bc4 Nc6 3.Qh5: the mate threat (also reached by 2.Qh5 Nc6 3.Bc4) */
const THREAT = 'e4 c5 Bc4 Nc6 Qh5'

export default defineModule({
  id: '8.7',
  title: "2.Qh5 and the Scholar's Mate trick",
  minutes: 12,
  level: 1,
  goals: [
    'See the two targets of 2.Qh5: c5 and f7',
    'Answer 2.Qh5 with 2...e6 or 2...Nf6',
    'Stop Qxf7# when a bishop on c4 joins the queen'
  ],
  intro:
    "Some opponents bring the queen out on move two, hoping for a quick Scholar's Mate on f7. Against 1...c5 there is a second target too: the c5-pawn. Neither is dangerous if you know what to look for. This module shows calm answers, and the one careless move that loses at once.",
  sections: [
    {
      kind: 'walkthrough',
      title: '2.Qh5 e6: guard c5, shield f7',
      intro: 'Look along the fifth rank before you answer.',
      moves: QH5_E6,
      start: 2,
      orientation: 'black',
      steps: {
        2: {
          title: 'The Sicilian',
          text: '1...c5. White brings the queen out at once.',
          arrows: [['d1', 'h5', 'blue']]
        },
        3: {
          title: 'Two targets',
          text: '2.Qh5. The queen attacks f7 and, along the fifth rank, the c5-pawn. The king guards f7 and the rook guards h7, but nothing guards c5.',
          arrows: [['h5', 'c5', 'red'], ['h5', 'f7', 'red']],
          marks: ['c5']
        },
        4: {
          title: 'One move, two jobs',
          text: '2...e6. Now the f8-bishop sees c5, so the pawn is guarded. And if White ever plays Bc4, the e6-pawn already blocks its path to f7.',
          arrows: [['f8', 'c5', 'green']],
          ann: '!'
        },
        5: {
          title: 'The queen steps back',
          text: '3.Qe2. The queen retreats. It has used two moves and isn\'t attacking anything.',
          arrows: [['h5', 'e2', 'blue']]
        },
        6: {
          title: 'Black develops',
          text: '3...Nc6. Now this natural move is safe, because c5 is guarded.',
          arrows: [['c6', 'd4', 'green']]
        },
        7: {
          title: 'White develops',
          text: '4.Nf3. White finally brings out a knight.',
          arrows: [['g1', 'f3', 'blue']]
        },
        8: {
          title: 'Black is comfortable',
          text: '4...Nge7. Black develops and prepares ...d5. Black is slightly better: White\'s queen trip cost time.',
          arrows: [['d7', 'd5', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '2...Nf6: hit the queen',
      intro: 'Black can also develop with a threat and let White take c5.',
      moves: QH5_NF6,
      start: 3,
      orientation: 'black',
      steps: {
        3: {
          title: 'The queen on h5',
          text: '2.Qh5. The c5-pawn is unguarded.',
          arrows: [['h5', 'c5', 'red']]
        },
        4: {
          title: 'Develop with a threat',
          text: '2...Nf6. The knight attacks the queen, so White has to move it again.',
          arrows: [['f6', 'h5', 'red']]
        },
        5: {
          title: 'White grabs',
          text: '3.Qxc5. White takes the pawn. But look at e4: nothing guards it now.',
          arrows: [['f6', 'e4', 'red']],
          marks: ['e4']
        },
        6: {
          title: 'Pawn back, with tempo',
          text: '3...Nxe4. Black wins the pawn back, and the knight on e4 attacks the queen on c5. Material is level.',
          arrows: [['e4', 'c5', 'red']]
        },
        7: {
          title: 'The queen moves again',
          text: '4.Qe3. The queen has now moved three times. It attacks the e4-knight.',
          arrows: [['e3', 'e4', 'red']]
        },
        8: {
          title: 'Guard the knight',
          text: '4...d5. The pawn guards the knight. The position is roughly equal, and Black has an active knight and an easy game.',
          arrows: [['d5', 'e4', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "The Scholar's Mate: 3...Nf6??",
      intro: 'Now White adds a bishop on c4. Count the attackers on f7.',
      moves: MATE,
      start: 2,
      orientation: 'black',
      steps: {
        2: {
          title: 'The Sicilian',
          text: '1...c5. This time the bishop comes out first.',
          arrows: [['f1', 'c4', 'blue']]
        },
        3: {
          title: 'The bishop on c4',
          text: '2.Bc4. The bishop aims at f7 (Module 8.6).',
          arrows: [['c4', 'f7', 'red']]
        },
        4: {
          title: 'A natural move',
          text: '2...Nc6. A normal developing move, but it does nothing for f7.',
          marks: ['f7']
        },
        5: {
          title: 'Two against one',
          text: '3.Qh5. The queen and the bishop both hit f7, and only the king guards it. White threatens Qxf7, and it would be checkmate.',
          arrows: [['h5', 'f7', 'red'], ['c4', 'f7', 'red']],
          marks: ['f7']
        },
        6: {
          title: 'Attacking the wrong thing',
          text: '3...Nf6. The knight attacks the queen, but it does not stop the threat.',
          arrows: [['f6', 'h5', 'red']],
          ann: '??'
        },
        7: {
          title: 'Checkmate',
          text: '4.Qxf7#. The bishop guards the queen, so the king cannot take it, and the king has no free square. Game over.',
          arrows: [['c4', 'f7', 'red']],
          marks: ['e8']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The right defense: 3...e6!',
      intro: 'Same threat. This time Black blocks the bishop.',
      moves: DEFENSE,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'Mate is threatened',
          text: '3.Qh5. Queen and bishop aim at f7. The queen also hits c5.',
          arrows: [['h5', 'f7', 'red'], ['c4', 'f7', 'red'], ['h5', 'c5', 'red']]
        },
        6: {
          title: 'Block the bishop',
          text: '3...e6. The pawn cuts the bishop off from f7. Now Qxf7+ would just lose the queen to Kxf7. The f8-bishop also guards c5.',
          arrows: [['f8', 'c5', 'green']],
          marks: ['e6'],
          ann: '!'
        },
        7: {
          title: 'White develops',
          text: '4.Nf3. White has nothing better than to keep developing.',
          arrows: [['g1', 'f3', 'blue']]
        },
        8: {
          title: 'Now ...Nf6 is safe',
          text: '4...Nf6. With f7 shielded, the knight attacks the queen and gains time. Black is clearly better.',
          arrows: [['f6', 'h5', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'After 2.Bc4 Nc6 3.Qh5: what works?',
      body:
        "The same position also comes from 2.Qh5 Nc6 3.Bc4. White threatens Qxf7#.\n\n**3...e6!** is best. It blocks the bishop and guards c5.\n\n**3...Nh6** also guards f7, and Black is fine.\n\n**3...g6** blocks the queen's path to f7, but 4.Qxc5 wins a pawn and White is slightly better.\n\n**3...Ne5??** guards f7 but drops the knight: 4.Qxe5.\n\n**3...Nf6??** loses at once to 4.Qxf7#."
    },
    {
      kind: 'warning',
      title: "Don't answer 2.Qh5 with 2...Nc6",
      body:
        "Against 2.Qh5 alone, 2...Nc6 looks natural but leaves c5 hanging: 3.Qxc5. Black gets quick development for the pawn, so it is not a disaster, but there is no reason to give it away. 2...e6 or 2...Nf6 is cleaner."
    }
  ],
  takeaway:
    "2.Qh5 hits c5 and f7. Answer with 2...e6 (it guards c5 and shields f7) or 2...Nf6 (it hits the queen). When a bishop on c4 joins the queen, block with ...e6 and never play ...Nf6 before f7 is safe.",
  lookAhead:
    'Module 8.8 ends the chapter with a pawn sacrifice on the other wing: the Wing Gambit, 2.b4.',
  drills: [
    {
      title: 'Stop the mate',
      prompt: "You're Black. White threatens Qxf7#. Stop the threat in the best way, then develop with a gain of time.",
      moves: DEFENSE,
      start: 5,
      side: 'black',
      hints: ['Which pawn move cuts the c4-bishop off from f7?', '...e6. After 4.Nf3, the knight on g8 can attack the queen.'],
      success: '3...e6! and 4...Nf6. The mate threat is gone, c5 is guarded, and the queen has to move again.'
    },
    {
      title: 'Win the pawn back',
      prompt: "You're Black. White's queen took your c5-pawn. Win your pawn back at once, then guard your knight with a pawn.",
      moves: QH5_NF6,
      start: 5,
      side: 'black',
      hints: ['After 3.Qxc5, the e4-pawn has no defender.', '...Nxe4, and after 4.Qe3, ...d5.'],
      success: '3...Nxe4 and 4...d5. Material is level and Black has an easy game.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 2.Qh5, which Black pawn does the queen attack that has no defender at all?',
      moves: 'e4 c5 Qh5',
      orientation: 'black',
      choices: [
        { text: 'The c5-pawn', correct: true, why: 'Yes. The queen reaches it along the fifth rank, and nothing guards it.' },
        { text: 'The f7-pawn', why: 'The queen does attack f7, but the king guards it. Qxf7+ Kxf7 would just lose the queen.' },
        { text: 'The h7-pawn', why: 'The queen attacks h7 down the h-file, but the h8-rook guards it.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move after 2.Qh5. Which answer is cleanest?',
      moves: 'e4 c5 Qh5',
      orientation: 'black',
      choices: [
        { text: '2...e6', correct: true, why: 'Right. The f8-bishop now guards c5, and the e6-pawn will block a bishop on c4.' },
        { text: '2...Nc6', why: 'It leaves c5 hanging: 3.Qxc5. Black gets some development for it, but why give a pawn away?' },
        { text: '2...g6', why: 'It attacks the queen, but 3.Qxc5 takes the pawn with a slightly better game for White.' }
      ]
    },
    {
      type: 'trap',
      prompt: 'Black to move. Which of these moves loses at once?',
      moves: THREAT,
      orientation: 'black',
      choices: [
        { text: '3...Nf6', correct: true, why: 'Yes. It attacks the queen but does not cover f7: 4.Qxf7# is checkmate.' },
        { text: '3...e6', why: 'This is the best move. It blocks the bishop, so Qxf7+ would lose the queen.' },
        { text: '3...Nh6', why: 'This is fine. The knight on h6 guards f7.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'How does 2...e6 protect the c5-pawn?',
      moves: 'e4 c5 Qh5 e6',
      orientation: 'black',
      choices: [
        { text: 'It opens a path for the f8-bishop to c5', correct: true, why: 'Right. With the e7-pawn gone, the bishop sees e7, d6 and c5.' },
        { text: 'The e6-pawn guards c5', why: 'A pawn on e6 guards d5 and f5, not c5. The bishop does the job.' },
        { text: 'It blocks the queen on the fifth rank', why: 'The e6-pawn is on the sixth rank, so the queen still sees c5. The bishop now guards it.' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'Black to move. White threatens Qxf7#. What is the best defense?',
      moves: THREAT,
      orientation: 'black',
      choices: [
        { text: '3...e6', correct: true, why: 'Right. It blocks the bishop and guards c5, and ...Nf6 will come with tempo.' },
        { text: '3...Ne5', why: 'The knight guards f7, but the queen simply takes it: 4.Qxe5.' },
        { text: '3...g6', why: 'It stops the mate, but 4.Qxc5 wins a pawn. 3...e6 keeps everything safe.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 2.Qh5 Nf6 3.Qxc5, how does Black win the pawn back?',
      moves: 'e4 c5 Qh5 Nf6 Qxc5',
      orientation: 'black',
      choices: [
        { text: '3...Nxe4, which also attacks the queen', correct: true, why: 'Yes. Nothing guards the e4-pawn, and from e4 the knight also hits the queen on c5.' },
        { text: '3...Nc6, chasing the queen', why: 'A knight on c6 does not even attack c5, and it does not win the pawn back. ...Nxe4 does, at once.' },
        { text: '3...d6, kicking the queen', why: 'The queen just moves away and White keeps the pawn for now. ...Nxe4 is the direct way.' }
      ]
    }
  ],
  key: { name: "Scholar's Mate threat: 3.Qh5", moves: THREAT, orientation: 'black' },
  terms: [
    { term: "Scholar's Mate", meaning: 'A quick checkmate on f7 (or f2) by a queen supported by a bishop on c4 (or c5).' },
    { term: 'Tempo', meaning: 'A unit of time: one move. Gaining a tempo means making a useful move that also forces the opponent to react.' },
    { term: 'Rank', meaning: 'A horizontal row of the board. The fifth rank runs from a5 to h5.' }
  ]
})
