import { defineModule } from '../../../types'
import { NAJDORF } from '../lines'

/** najdorf-6be2: 6.Be2 e5 7.Nb3 Be7 8.O-O O-O 9.Be3 Be6 */
const E5 = `${NAJDORF} Be2 e5 Nb3 Be7 O-O O-O Be3 Be6`
/** najdorf-6be2 plus the engine's 10.Nd5 Nxd5 11.exd5 Bf5 (engine-checked) */
const E5_ND5 = `${E5} Nd5 Nxd5 exd5 Bf5`
/** scheveningen-from-najdorf: 6.Be2 e6 7.O-O Be7 8.f4 O-O 9.Kh1 Qc7 10.a4 Nc6 */
const E6 = `${NAJDORF} Be2 e6 O-O Be7 f4 O-O Kh1 Qc7 a4 Nc6`

export default defineModule({
  id: '2.2',
  title: 'Two structures: ...e5 or ...e6',
  minutes: 11,
  level: 2,
  goals: [
    'Spot the d5 hole and the backward d6-pawn after ...e5',
    'Know what ...e5 gives Black in return: space and easy development',
    'Recognize the ...e6 "small center" and its plans for both sides'
  ],
  intro:
    "After 5...a6, Black's e-pawn has two homes: e5 or e6. The choice decides the whole middlegame. This module puts the two pawn structures side by side, so you know what each side is fighting for.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The ...e5 structure',
      intro: 'Watch the d5-square and the d6-pawn. They are what this structure is about.',
      moves: E5_ND5,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'A quiet start',
          text: '6.Be2. White develops calmly and prepares to castle. Black now chooses the structure.',
          arrows: [['e7', 'e5', 'blue'], ['e7', 'e6', 'blue']]
        },
        12: {
          title: 'Black chooses ...e5',
          text: "6...e5. Black kicks the knight and grabs space. The price: Black can no longer push a pawn to guard d5, so it is a hole. And no other pawn can defend the d6-pawn: it is backward.",
          arrows: [['e5', 'd4', 'red']],
          marks: ['d5', 'd6']
        },
        13: {
          title: 'The knight retreats',
          text: "7.Nb3. Black has gained time. Notice the d-file: White's d-pawn is gone, so the queen on d1 already looks at the d6-pawn.",
          arrows: [['d1', 'd6', 'red']]
        },
        14: {
          title: 'Guarding d6',
          text: '7...Be7. The bishop develops and keeps guarding d6, together with the queen. Black is one move from castling.',
          arrows: [['e7', 'd6', 'green']]
        },
        15: {
          title: 'White castles',
          text: '8.O-O. White\'s king is safe. White\'s plan is slow and positional: control d5, then use it.',
          marks: ['d5']
        },
        16: {
          title: 'Black castles',
          text: '8...O-O. Both kings are safe. Black has developed quickly, which is the reward for ...e5.'
        },
        17: {
          title: 'The bishop on e3',
          text: '9.Be3. The bishop develops toward the queenside, covering d4, c5 and b6.',
          arrows: [['e3', 'b6', 'green']]
        },
        18: {
          title: 'Fighting for d5',
          text: "9...Be6. Black can't guard d5 with a pawn, so pieces do the job: the e6-bishop and the f6-knight. White aims three units at d5: the e4-pawn, the c3-knight and the queen.",
          arrows: [['e6', 'd5', 'green'], ['f6', 'd5', 'green'], ['c3', 'd5', 'red']],
          marks: ['d5']
        },
        19: {
          title: 'The knight lands',
          text: '10.Nd5. White puts a knight in the hole at once. No pawn can chase it from there, and it hits the e7-bishop and the f6-knight.',
          arrows: [['d5', 'e7', 'red'], ['d5', 'f6', 'red']],
          marks: ['d5']
        },
        20: {
          title: 'Trade it off',
          text: '10...Nxd5. A knight in a hole is strong, so Black simply trades it.',
          marks: ['d5']
        },
        21: {
          title: 'A pawn fills the hole',
          text: '11.exd5. The only good recapture: the queen would be taken by the e6-bishop. Now a White pawn stands on d5, and it attacks the bishop.',
          arrows: [['d5', 'e6', 'red']]
        },
        22: {
          title: 'The d-file is blocked',
          text: "11...Bf5. The bishop steps away. The d5-pawn now blocks the d-file, so White's queen no longer hits d6. A pawn on d5 is far less annoying than a knight. White keeps a small edge, but Black is solid.",
          arrows: [['d1', 'd5', 'blue']],
          marks: ['d6']
        }
      }
    },
    {
      kind: 'text',
      title: 'Why play ...e5 at all?',
      body:
        "A hole and a backward pawn sound bad. But ...e5 also does good things. It **kicks the d4-knight** away from the center, it **grabs space**, and it lets Black develop quickly with ...Be7, ...O-O and ...Be6.\n\nThe fight is all about d5. White wants a piece there. Black guards it with pieces (the f6-knight, the e6-bishop, sometimes a knight from d7 or b8) and trades off anything that lands there. If Black ever gets in ...d5 safely, the hole and the backward pawn both disappear."
    },
    {
      kind: 'walkthrough',
      title: 'The ...e6 small center',
      intro: 'Same 6.Be2, but now Black puts the pawn on e6. This is a Scheveningen structure.',
      moves: E6,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'The same choice',
          text: '6.Be2. This time Black keeps the e-pawn closer to home.',
          arrows: [['e7', 'e6', 'blue']]
        },
        12: {
          title: 'The small center',
          text: '6...e6. Pawns on d6 and e6 guard four squares in front of them: c5, d5, e5 and f5. There is no hole on d5 now.',
          marks: ['c5', 'd5', 'e5', 'f5']
        },
        13: {
          title: 'White castles',
          text: '7.O-O. White gets the king safe. The d4-knight stays in the center, because nothing kicks it.'
        },
        14: {
          title: 'Ready to castle',
          text: "7...Be7. Black develops modestly and gets ready to castle. Note the c8-bishop: the e6-pawn blocks its path to the kingside, so it has less room than in the ...e5 structure.",
          marks: ['c8']
        },
        15: {
          title: 'White grabs space',
          text: '8.f4. With the center stable, White prepares a kingside push: e4–e5 or f4–f5.',
          arrows: [['f4', 'f5', 'blue'], ['e4', 'e5', 'blue']]
        },
        16: {
          title: 'Black castles',
          text: '8...O-O. Black\'s king is safe behind the f-, g- and h-pawns.'
        },
        17: {
          title: 'King to the corner',
          text: '9.Kh1. The king steps off the g1–a7 diagonal, where a Black queen or bishop could later give check once the center opens.',
          arrows: [['g1', 'h1', 'green']]
        },
        18: {
          title: 'The queen steps up',
          text: '9...Qc7. The queen clears d8 for a rook and still guards the d6-pawn from c7. Next Black can choose between ...Nc6 and ...b5.',
          arrows: [['c7', 'd6', 'green']]
        },
        19: {
          title: 'Stopping ...b5',
          text: "10.a4. The a-pawn takes away b5, so Black can't expand there easily. The price: the a-pawn can no longer guard b4, a square Black's knight may use.",
          arrows: [['a4', 'b5', 'red']],
          marks: ['b4']
        },
        20: {
          title: 'A flexible set-up',
          text: '10...Nc6. The knight develops, hits d4 and can later jump to b4. Black waits for the right moment to break with ...e5, ...d5 or ...b5. White is only a little better.',
          arrows: [['c6', 'd4', 'red'], ['c6', 'b4', 'blue']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'A clever move order',
      body:
        "Black can reach the small center by playing 5...e6 straight away. But then White has the sharp Keres Attack, 6.g4!, chasing the f6-knight (Module 4.7). Many players start with 5...a6 instead and choose ...e6 only after White's sixth move. Against 6.Be2, White has already picked a quiet set-up. That is one reason so many Scheveningen positions start as a Najdorf."
    },
    {
      kind: 'text',
      title: 'Which one should you choose?',
      body:
        "Both are good. **...e5** gives Black space and fast development, but Black must watch d5 and the d6-pawn all game. **...e6** is compact and keeps d5 covered, but Black has less space, and White can attack with f4–f5 or g4–g5.\n\nFor White the plans differ too. Against ...e5: put a piece on d5 and press against d6. Against ...e6: stop ...b5 with a4, then attack on the kingside."
    }
  ],
  takeaway:
    "...e5 gains space and time, but leaves a hole on d5 and a backward pawn on d6, so the game revolves around d5. ...e6 builds a small center that covers d5, but gives Black less room.",
  lookAhead:
    "Next: White's most popular answer to the Najdorf, the English Attack. Module 2.3 shows what each of White's moves Be3, f3, Qd2 and O-O-O is for.",
  drills: [
    {
      title: 'Build the ...e5 set-up',
      prompt: "You're Black. White plays the quiet 6.Be2. Kick the knight with your e-pawn, develop, castle and put your light-squared bishop where it guards d5.",
      moves: E5,
      start: 10,
      side: 'black',
      hints: [
        'Kick the knight first. Then develop the dark-squared bishop and castle.',
        'Your last move puts the c8-bishop on e6, where it watches d5.'
      ],
      success: '6...e5, 7...Be7, 8...O-O and 9...Be6. The f6-knight and the e6-bishop now guard the d5-hole.'
    },
    {
      title: 'Use the hole',
      prompt: "You're White. Black has the ...e5 structure. Put a knight on the hole, and when Black trades it, take back the right way.",
      moves: `${E5} Nd5 Nxd5 exd5`,
      start: 18,
      side: 'white',
      hints: ['Which square can no Black pawn guard?', 'After ...Nxd5, take back with a pawn. The queen would be lost to the e6-bishop.'],
      success: '10.Nd5 Nxd5 11.exd5. The pawn now hits the e6-bishop and blocks the d-file. White keeps a small edge.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 6...e5, which square becomes a hole in Black\'s position?',
      moves: `${NAJDORF} Be2 e5`,
      orientation: 'black',
      choices: [
        { text: 'd5', correct: true, why: 'Right. The c-pawn is gone and the e-pawn has passed e6, so no Black pawn can be pushed to guard d5.' },
        { text: 'c5', why: 'The d6-pawn guards c5, so it is not a hole.' },
        { text: 'f5', why: 'Black can still guard f5 with pieces and with a pawn on g6. The lasting weakness is d5.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is the d6-pawn called backward in the ...e5 structure?',
      choices: [
        { text: 'No Black pawn can defend it, and White can attack it down the d-file', correct: true, why: 'Yes. The c-pawn is gone and the e-pawn has moved past it, so only pieces can defend d6.' },
        { text: 'It can never move again', why: 'It can move. ...d5 is even Black\'s dream break. It is backward because no pawn can protect it.' },
        { text: 'A White pawn on d5 blocks it', why: 'A blocked pawn is a different idea. "Backward" means that no friendly pawn can protect it.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Black has the ...e6 small center. What is the point of White\'s 10.a4 here?',
      moves: `${NAJDORF} Be2 e6 O-O Be7 f4 O-O Kh1 Qc7 a4`,
      orientation: 'white',
      choices: [
        { text: 'It stops Black from expanding with ...b5', correct: true, why: "Right. The a4-pawn attacks b5. The price is that the a-pawn can no longer guard b4, so Black's knight may use that square." },
        { text: 'It prepares to attack Black\'s king', why: 'Black\'s king is on the kingside. a4 is a queenside move that stops ...b5.' },
        { text: 'It opens the a-file for White\'s rook', why: 'The a-file stays closed for now. The move is about the b5-square.' }
      ]
    },
    {
      type: 'name',
      prompt: 'Black has played ...a6 and ...e6 with pawns on d6 and e6. What is this structure usually called?',
      moves: E6,
      orientation: 'black',
      choices: [
        { text: 'A Scheveningen', correct: true, why: 'Yes. Pawns on d6 and e6 form the Scheveningen "small center", here reached by the Najdorf move order.' },
        { text: 'A Dragon', why: 'The Dragon has ...g6 and a bishop on g7. Here the bishop is on e7.' },
        { text: 'The Venice Attack', why: 'The Venice Attack is 6.Bb5+ against an early ...e5 without ...a6.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Which squares does the ...e6 small center (pawns on d6 and e6) guard?',
      choices: [
        { text: 'c5, d5, e5 and f5', correct: true, why: 'Right. The d6-pawn covers c5 and e5, and the e6-pawn covers d5 and f5.' },
        { text: 'd4 and e4', why: 'Pawns guard the squares diagonally in front of them. From d6 and e6 that is c5, e5, d5 and f5.' },
        { text: 'Only d5', why: 'The e6-pawn guards d5 and f5, and the d6-pawn adds c5 and e5.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the ...e5 structure, what is White\'s main positional plan?',
      moves: E5,
      orientation: 'white',
      choices: [
        { text: 'Control d5 and put a piece there, often a knight', correct: true, why: 'Yes. A knight on d5 cannot be chased by a pawn. Black usually trades it off.' },
        { text: 'Push e4–e5 to open the center', why: 'Black\'s own e5-pawn stands on that square. White plays around the hole on d5.' },
        { text: 'Win the d6-pawn at once with Qd2 and Rd1', why: 'White does aim at d6, but Black guards it with the queen and the e7-bishop. The main idea is the d5-square.' }
      ]
    }
  ],
  key: { name: 'Najdorf 6.Be2: ...e5 or ...e6?', moves: `${NAJDORF} Be2`, orientation: 'black' },
  terms: [
    { term: 'Backward pawn', meaning: 'A pawn that no friendly pawn can protect, because its neighbors are gone or have moved past it.' },
    { term: 'Small center', meaning: 'Black pawns on d6 and e6. They guard c5, d5, e5 and f5 and keep Black solid.' },
    { term: 'Scheveningen', meaning: 'The Sicilian structure with Black pawns on d6 and e6, named after a 1923 tournament in Scheveningen.' },
    { term: 'Half-open file', meaning: 'A file with pawns of only one color on it. Here the d-file has a Black pawn but no White pawn.' }
  ]
})
