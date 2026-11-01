import { defineModule } from '../../../types'
import { KID, FOUR_PAWNS } from '../lines'

/** classical-6c5-7d5: ...c5 instead of ...e5, into a Benoni structure */
const BENONI = `${KID} Nf3 O-O Be2 c5 d5 e6 O-O exd5 cxd5 Re8`
/** samisch-gambit and samisch-gambit-accepted */
const GAMBIT = `${KID} f3 O-O Be3 c5 dxc5 dxc5 Qxd8 Rxd8 Bxc5 Nc6`

export default defineModule({
  id: '1.7',
  title: 'Break two: ...c5',
  minutes: 10,
  level: 1,
  goals: [
    'See how ...c5 hits d4 from the queenside',
    "Know White's answers: push d5, take on c5, or keep the tension",
    'Recognize the Benoni structure that often follows'
  ],
  intro:
    "Black's second way to hit the center is ...c5. Like ...e5, it attacks the d4-pawn, but from the other side. It leads to a different kind of game, with open lines on the queenside. This module shows what happens when White pushes past it, and what happens when White takes.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'White pushes past: the Benoni structure',
      intro: 'The same Classical position, but this time Black plays 6...c5 instead of 6...e5.',
      moves: BENONI,
      start: 10,
      orientation: 'black',
      steps: {
        10: {
          title: 'Choose a break',
          text: '5...O-O. Black is castled. Now Black chooses how to hit d4: with ...e5 or with ...c5.',
          arrows: [['e7', 'e5', 'blue'], ['c7', 'c5', 'blue']]
        },
        11: {
          title: 'White develops',
          text: '6.Be2. The usual Classical move.',
          arrows: [['f1', 'e2', 'blue']]
        },
        12: {
          title: 'The other break',
          text: '6...c5. The c-pawn attacks d4 from the queenside. White must decide: push past, take, or keep the tension.',
          arrows: [['c5', 'd4', 'red']]
        },
        13: {
          title: 'White pushes past',
          text: '7.d5. White keeps the pawn and gains space. The d4-square is now empty, so once the f6-knight moves, the g7-bishop will see further down the long diagonal.',
          marks: ['d4']
        },
        14: {
          title: 'Hitting d5',
          text: '7...e6. Black attacks the d5-pawn with the e-pawn. The idea is to clear the e-file for Black\'s rook.',
          arrows: [['e6', 'd5', 'red']]
        },
        15: {
          title: 'White castles',
          text: '8.O-O. White gets the king safe.',
          marks: ['g1']
        },
        16: {
          title: 'The trade',
          text: '8...exd5. Black takes on d5, and the e-file becomes half-open for Black: only White\'s e4-pawn is left on it.',
          marks: ['d5']
        },
        17: {
          title: 'The Benoni structure',
          text: '9.cxd5. Now count the pawns. White has more in the center (d5 and e4 against d6). Black has more on the queenside (a, b and c against a and b).',
          marks: ['d5', 'e4', 'd6', 'c5']
        },
        18: {
          title: "Black's plans",
          text: "9...Re8. The rook takes the half-open e-file and presses on e4. Black plays on the queenside with ...a6 and ...b5. White's dream is the push e4–e5.",
          arrows: [['e8', 'e4', 'red'], ['b7', 'b5', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: "White's three answers to ...c5",
      body:
        "**Push past with d5.** White gains space, and after ...e6 and an exchange on d5 the game gets a **Benoni structure**: White has a central pawn majority, Black has a queenside majority, the half-open e-file and the long diagonal.\n\n**Take with dxc5.** Lines open. The d-file opens for Black's rook, and with d4 gone, the long diagonal opens for the g7-bishop as soon as the f6-knight moves.\n\n**Keep the tension.** For example 7.O-O cxd4 8.Nxd4 in the Classical. White's pawns on c4 and e4 then clamp the d5-square, a structure called the Maróczy (Module 5.9)."
    },
    {
      kind: 'walkthrough',
      title: 'White takes: a pawn for open lines',
      intro: 'In the Sämisch (5.f3 O-O 6.Be3), ...c5 is a pawn offer called the Sämisch Gambit. Watch what Black gets for the pawn.',
      moves: GAMBIT,
      start: 11,
      orientation: 'black',
      steps: {
        11: {
          title: 'Before White is ready',
          text: "6.Be3. White plans Qd2 and a kingside attack, but the g1-knight and f1-bishop haven't moved yet. Black hits the center now.",
          marks: ['g1', 'f1']
        },
        12: {
          title: 'The pawn offer',
          text: '6...c5. If White takes this pawn, lines open for Black\'s pieces. A pawn offered for activity is called a gambit.',
          arrows: [['c5', 'd4', 'red']]
        },
        13: {
          title: 'White accepts',
          text: '7.dxc5. White takes the pawn.',
          marks: ['c5']
        },
        14: {
          title: 'The d-file opens',
          text: '7...dxc5. Black takes back, and the queens face each other on the open d-file.',
          arrows: [['d8', 'd1', 'yellow']]
        },
        15: {
          title: 'Queens off',
          text: '8.Qxd8. White trades queens.',
          marks: ['d8']
        },
        16: {
          title: 'The rook arrives',
          text: '8...Rxd8. The rook takes back and now owns the open d-file.',
          arrows: [['d8', 'd1', 'blue']]
        },
        17: {
          title: 'A pawn up',
          text: '9.Bxc5. White wins the c5-pawn and is a pawn ahead.',
          marks: ['c5']
        },
        18: {
          title: "Black's compensation",
          text: '9...Nc6. Black has quick development and the d-file. Once the f6-knight moves (...Nd7 hits the c5-bishop), the g7-bishop will strike at c3 and b2. The position is level. Module 6.6 explains this gambit.',
          arrows: [['g7', 'b2', 'yellow']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'When to choose ...c5',
      body:
        "Against most systems Black can pick either break. But some systems make ...c5 the natural choice. Against the **Four Pawns Attack** (5.f4), Black hits the huge center at once with ...c5 (Module 7.1). Against the **Averbakh** (5.Be2 and 6.Bg5), ...e5 has to wait, so ...c5 is the main move (Modules 7.8 and 7.9)."
    }
  ],
  takeaway:
    '...c5 hits d4 from the queenside. If White pushes d5, the game gets a Benoni structure; if White takes on c5, the d-file and the long diagonal open for Black.',
  lookAhead:
    'Next, Module 1.8 shows that White can reach these positions by many different move orders, and that your set-up stays the same.',
  drills: [
    {
      title: 'Into the Benoni',
      prompt: "You're Black. White has just played 6.Be2. Break with ...c5, attack d5 with the e-pawn, open the e-file and put your rook on it.",
      moves: BENONI,
      start: 11,
      side: 'black',
      hints: ['The c-pawn goes two squares first. After 7.d5, hit d5 with another pawn.', '6...c5, 7...e6, 8...exd5 and 9...Re8.'],
      success: 'That is the Benoni structure: your rook on the half-open e-file and a queenside majority ready to advance.'
    },
    {
      title: 'Four Pawns: White pushes past',
      prompt: "You're White in the Four Pawns Attack. Black has just struck with 6...c5. Push past it, develop the bishop, and take back on d5 with the c-pawn.",
      moves: FOUR_PAWNS,
      start: 12,
      side: 'white',
      hints: ['Push the d-pawn one square. After ...e6, develop the f1-bishop to e2.', '7.d5, 8.Be2 and 9.cxd5.'],
      success: '7.d5 e6 8.Be2 exd5 9.cxd5: the Four Pawns main line, a Benoni structure with White\'s pawns on e4 and f4. Chapter 7 continues from here.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'How do the two breaks ...e5 and ...c5 compare?',
      choices: [
        { text: 'Both attack d4: ...e5 from the kingside, ...c5 from the queenside', correct: true, why: "Right. They hit the same pawn from opposite sides, and lead to different kinds of games." },
        { text: '...e5 attacks d4, but ...c5 attacks e4', why: 'A pawn on c5 attacks b4 and d4. It never touches e4.' },
        { text: 'Both attack c4', why: 'Neither pawn reaches c4. Their target is the d4-pawn.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In this Benoni structure, where does Black have more pawns?',
      moves: BENONI,
      orientation: 'black',
      choices: [
        { text: 'On the queenside: a, b and c against a and b', correct: true, why: 'Yes. That majority is why Black plays ...a6 and ...b5.' },
        { text: 'In the center', why: 'White has more in the center: d5 and e4 against d6. That is why White dreams of e4–e5.' },
        { text: 'On the kingside', why: 'On the f-, g- and h-files both sides have three pawns. The difference is on the queenside and in the center.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move. In the Sämisch, White has taken the c-pawn with 7.dxc5. What should Black play?',
      moves: `${KID} f3 O-O Be3 c5 dxc5`,
      orientation: 'black',
      choices: [
        { text: '7...dxc5', correct: true, why: 'Right. Black takes back and opens the d-file. White can win the c5-pawn next, but Black gets open lines for the pieces in return.' },
        { text: '7...Nc6', why: 'Then 8.cxd6 takes the d6-pawn too. Black can win that pawn back, but White stays a pawn up and Black gets much less play for it. Black should recapture first.' },
        { text: '7...Be6', why: 'Then 8.cxd6 takes the d6-pawn too. White stays a pawn up, and Black no longer gets the open lines of the gambit. Recapture with 7...dxc5 first.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 6...c5 7.d5, why does Black often play ...e6?',
      choices: [
        { text: 'To attack the d5-pawn and open the e-file for the rook', correct: true, why: 'Yes. After ...exd5 the rook comes to e8 and presses on e4.' },
        { text: 'To protect the c5-pawn', why: 'A pawn on e6 guards d5 and f5, not c5. The d6-pawn already guards c5.' },
        { text: 'To open the diagonal for the g7-bishop', why: "...e6 doesn't touch the g7-bishop's diagonal. It is about the d5-pawn and the e-file." }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Against which White system is ...c5 the main move, because ...e5 has to wait?',
      choices: [
        { text: 'The Averbakh: 5.Be2 and 6.Bg5', correct: true, why: 'Right. The bishop on g5 makes an early ...e5 risky, so Black strikes with ...c5 instead.' },
        { text: 'The Classical: 5.Nf3 and 6.Be2', why: 'In the Classical, 6...e5 is the main move. Module 1.6 showed why it works.' },
        { text: 'The Exchange Variation: 7.dxe5', why: 'In the Exchange Variation Black has already played ...e5. It is not a choice between breaks.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Sämisch Gambit (6...c5 7.dxc5 dxc5 8.Qxd8 Rxd8 9.Bxc5 Nc6), what does Black get for the pawn?',
      choices: [
        { text: 'Quick development, the open d-file and a long diagonal ready to open', correct: true, why: 'Yes. The position is level even though White is a pawn up.' },
        { text: 'Nothing: it is simply a blunder', why: 'It is a deliberate gambit, and the position is level.' },
        { text: "A direct attack on White's king", why: 'The queens are off. Black plays for activity, not for mate.' }
      ]
    }
  ],
  key: { name: 'Classical 6...c5: the second break', moves: `${KID} Nf3 O-O Be2 c5`, orientation: 'black' },
  terms: [
    { term: 'Benoni structure', meaning: "White pawns on d5 and e4, Black pawns on c5 and d6. White has a central majority, Black a queenside majority." },
    { term: 'Pawn majority', meaning: 'More pawns than the opponent on one part of the board.' },
    { term: 'Half-open file', meaning: 'A file with only enemy pawns on it, like the e-file for Black in the Benoni.' },
    { term: 'Gambit', meaning: 'Giving up a pawn, or more, to get faster development or open lines.' }
  ]
})
