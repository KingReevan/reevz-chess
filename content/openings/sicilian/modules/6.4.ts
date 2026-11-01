import { defineModule } from '../../../types'
import { TAIMANOV } from '../lines'

/** 5.Nb5 d6 6.c4 Nf6 7.N1c3 a6 8.Na3: the clamp position of Module 6.3 */
const NA3 = `${TAIMANOV} Nb5 d6 c4 Nf6 N1c3 a6 Na3`
/** taimanov-kasparov-gambit: 8...d5 9.cxd5 exd5 10.exd5 Nb4 */
const GAMBIT = `${NA3} d5 cxd5 exd5 exd5 Nb4`
/** 11.Bc4: the engine's choice, a small edge for White */
const BC4 = `${GAMBIT} Bc4`
/** model-karpov-kasparov-1985-g16, moves 11–19 */
const GAME = `${GAMBIT} Be2 Bc5 O-O O-O Bf3 Bf5 Bg5 Re8 Qd2 b5 Rad1 Nd3 Nab1 h6 Bh4 b4 Na4 Bd6`

export default defineModule({
  id: '6.4',
  title: 'The Kasparov Gambit and the knight on d3',
  minutes: 12,
  level: 2,
  goals: [
    'Know the gambit 8...d5!? and what Black gets for the pawn',
    'Learn the best answer for White: 11.Bc4',
    'Follow Karpov–Kasparov 1985 and find its real turning point'
  ],
  intro:
    "Module 6.3 showed White's clamp: 5.Nb5 d6 6.c4 and 8.Na3, and Black's patient wall. Garry Kasparov had a sharper idea. He gave up a pawn with 8...d5!? to blow the center open, and used it to beat Anatoly Karpov in game 16 of their 1985 World Championship match. Is the gambit sound, and why did Black win that game?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The gambit and the best answer',
      intro: "From Black's side. Count the pawns, then look at the squares White can no longer guard.",
      moves: BC4,
      start: 15,
      orientation: 'black',
      steps: {
        15: {
          title: 'The clamp position',
          text: '8.Na3. White holds d5 with the c4- and e4-pawns. The quiet plan is ...Be7, ...O-O and ...b6.',
          arrows: [['c4', 'd5', 'yellow'], ['e4', 'd5', 'yellow']],
          marks: ['d5']
        },
        16: {
          title: 'Strike at once',
          text: "8...d5. Kasparov's gambit. Black breaks the clamp right away, even though the pawn can be won.",
          arrows: [['d5', 'c4', 'red'], ['d5', 'e4', 'red']],
          ann: '!?'
        },
        17: {
          title: 'White takes',
          text: '9.cxd5. White captures. Taking with the e-pawn first, 9.exd5, leads to the same kind of position.',
          marks: ['d5']
        },
        18: {
          title: 'Black takes back',
          text: '9...exd5. Now the d5-pawn and the f6-knight both attack e4.',
          arrows: [['d5', 'e4', 'red'], ['f6', 'e4', 'red']]
        },
        19: {
          title: 'A pawn up',
          text: "10.exd5. White wins a pawn. But the e-file is now fully open, and White's king is still on e1.",
          arrows: [['e8', 'e1', 'blue']],
          marks: ['e1']
        },
        20: {
          title: 'Eyes on d3',
          text: "10...Nb4. The knight attacks d5 and heads for d3. White's c- and e-pawns are gone, so no White pawn can ever chase a knight from d3.",
          arrows: [['b4', 'd5', 'red'], ['b4', 'd3', 'yellow']],
          marks: ['d3']
        },
        21: {
          title: 'The best answer',
          text: '11.Bc4. The bishop guards the d5-pawn and covers d3. White keeps a small edge. The gambit is not fully sound, but it is not refuted either.',
          arrows: [['c4', 'd5', 'green'], ['c4', 'd3', 'green']],
          ann: '!'
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Karpov–Kasparov 1985: the knight on d3',
      intro: 'World Championship, Moscow 1985, game 16. Karpov had White. He played 11.Be2 instead of 11.Bc4.',
      moves: GAME,
      start: 20,
      orientation: 'black',
      steps: {
        20: {
          title: 'The gambit position',
          text: '10...Nb4. White is a pawn up. Black has open lines and the d3 square.',
          marks: ['d3']
        },
        21: {
          title: 'A modest bishop',
          text: '11.Be2. The bishop covers d3, but unlike 11.Bc4 it does not defend the d5-pawn.',
          arrows: [['e2', 'd3', 'green']]
        },
        22: {
          title: 'Active bishop',
          text: '11...Bc5. The bishop develops actively and eyes f2.',
          arrows: [['c5', 'f2', 'red']]
        },
        23: {
          title: 'White castles',
          text: '12.O-O. The king leaves the open e-file.',
          marks: ['g1']
        },
        24: {
          title: 'Black castles',
          text: '12...O-O. Both kings are safe. Black is still a pawn down.',
          marks: ['g8']
        },
        25: {
          title: 'Guarding d5',
          text: '13.Bf3. The bishop now defends the d5-pawn. But it no longer covers d3.',
          arrows: [['f3', 'd5', 'green']],
          marks: ['d3']
        },
        26: {
          title: 'Support for d3',
          text: '13...Bf5. The c8-bishop comes out and covers d3, ready to support the knight there.',
          arrows: [['f5', 'd3', 'green']]
        },
        27: {
          title: 'A pin',
          text: '14.Bg5. The bishop pins the f6-knight to the queen on d8.',
          arrows: [['g5', 'd8', 'red']]
        },
        28: {
          title: 'The open file',
          text: '14...Re8. The rook takes the open e-file.',
          arrows: [['e8', 'e1', 'blue']]
        },
        29: {
          title: 'Connecting the rooks',
          text: '15.Qd2. The queen steps up and watches d3.',
          arrows: [['d2', 'd3', 'green']]
        },
        30: {
          title: 'No c4 for the knight',
          text: '15...b5. The pawn takes c4 away from the a3-knight, which now has very few good squares.',
          arrows: [['b5', 'c4', 'green']],
          marks: ['a3']
        },
        31: {
          title: 'Behind the passed pawn',
          text: '16.Rad1. The rook backs up the d-pawn. Black has no c-, d- or e-pawn left, so White\'s d5-pawn is passed.',
          marks: ['d5']
        },
        32: {
          title: 'The knight lands',
          text: "16...Nd3. The famous knight. It hits b2 and f2, and no pawn can kick it. Still, Black is only slightly better here: the game is far from over.",
          arrows: [['d3', 'b2', 'red'], ['d3', 'f2', 'red']],
          marks: ['d3'],
          ann: '!'
        },
        33: {
          title: 'The real mistake',
          text: "17.Nab1. The knight goes back to b1 to regroup. It is too slow, and Black's next moves push White's pieces back. 17.b4 or 17.d6 would have kept Black's edge small.",
          arrows: [['a3', 'b1', 'blue']],
          ann: '?'
        },
        34: {
          title: 'A question for the bishop',
          text: '17...h6. Black asks the g5-bishop to decide: take on f6, or step back.',
          arrows: [['h6', 'g5', 'red']]
        },
        35: {
          title: 'Keeping the pin',
          text: '18.Bh4. The bishop keeps the pin on the f6-knight.',
          arrows: [['h4', 'f6', 'red']]
        },
        36: {
          title: 'Kicking the c3-knight',
          text: '18...b4. Now the c3-knight is attacked and has to leave the center.',
          arrows: [['b4', 'c3', 'red']]
        },
        37: {
          title: 'To the rim',
          text: '19.Na4. White\'s knights now stand on a4 and b1, far from the action.',
          marks: ['a4', 'b1']
        },
        38: {
          title: 'Black dominates',
          text: "19...Bd6. The bishop steps away from the a4-knight's attack and aims at White's king. Black is clearly better, and Kasparov went on to win in 40 moves.",
          arrows: [['d6', 'h2', 'red']],
          marks: ['d3']
        }
      }
    },
    {
      kind: 'history',
      title: 'The octopus and the real story',
      body:
        "Karpov–Kasparov, World Championship (Moscow) 1985, game 16, ended 0-1 in 40 moves. Note the order of the names: Karpov had White. Kasparov's knight on d3 became famous, and people called it an octopus.\n\nThe engine tells a more careful story. After 16...Nd3 Black was only slightly better. The game turned on Karpov's 17.Nab1?, not on the knight alone. And the gambit itself is not fully sound: after 11.Bc4 White keeps a small edge."
    },
    {
      kind: 'tip',
      title: 'Name and status',
      body:
        "Most books call 8...d5 the Kasparov Gambit; lichess calls it the Gary Gambit. It is a surprise weapon, not Black's main line. For White, remember three moves: take twice (9.cxd5 and 10.exd5), then 11.Bc4 to guard d5 and d3."
    }
  ],
  takeaway:
    "The Kasparov Gambit 8...d5!? gives a pawn for open lines and the d3 square. It is not fully sound: 11.Bc4 keeps a small edge for White. In Karpov–Kasparov 1985 the knight reached d3, but the game turned on Karpov's 17.Nab1?.",
  lookAhead:
    'Module 6.5 turns to the other main ...e6 system, the Kan, where Black plays 4...a6 and keeps even more options open.',
  drills: [
    {
      title: 'Meet the gambit',
      prompt: "You're White. Black has just played the gambit 8...d5!?. Take the pawn and then find the best bishop move.",
      moves: BC4,
      start: 16,
      side: 'white',
      hints: [
        'Take on d5 with the c-pawn, then take back with the e-pawn.',
        'Now guard the d5-pawn with a bishop that also covers d3.'
      ],
      success: '9.cxd5, 10.exd5 and 11.Bc4. White is a pawn up with a small edge.'
    },
    {
      title: 'Head for d3',
      prompt: "You're Black. White has taken on d5. Recapture, then send your knight toward the d3 square.",
      moves: GAMBIT,
      start: 17,
      side: 'black',
      hints: ['Take back on d5 with the e-pawn first.', 'After 10.exd5, the c6-knight jumps to b4: it hits d5 and eyes d3.'],
      success: '9...exd5 and 10...Nb4. The knight attacks d5 and is one jump from d3.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "Why is d3 such a good square for Black's knight here?",
      moves: GAMBIT,
      orientation: 'black',
      choices: [
        { text: "White's c- and e-pawns are gone, so no pawn can ever attack it", correct: true, why: 'Right. A knight on a square that pawns cannot reach is hard to remove. White would have to give up a piece for it.' },
        { text: 'It attacks the white king on e1', why: 'A knight on d3 would give check to e1, but that is not why the square is strong. The point is that no pawn can chase it away.' },
        { text: 'It wins the d5-pawn back at once', why: 'The d3 square is about a lasting outpost. The knight on b4 attacks d5; on d3 it would hit b2 and f2 instead.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move. What is the best answer to the gambit here?',
      moves: GAMBIT,
      orientation: 'white',
      choices: [
        { text: '11.Bc4', correct: true, why: 'Yes. The bishop guards d5 and covers d3. White can keep the extra pawn and has a small edge.' },
        { text: '11.Be2', why: "Karpov's move. It covers d3 but not d5, so after 11...Nbxd5 Black wins the pawn back and the game is roughly level." },
        { text: '11.Bd3', why: 'The bishop sits on d3 itself, but it does not guard d5, and it blocks the d1-queen from guarding d5. After 11...Nbxd5 Black has the pawn back and the game is level.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In Karpov–Kasparov 1985, game 16, which move really decided the game?',
      choices: [
        { text: "Karpov's 17.Nab1?", correct: true, why: 'Right. After 16...Nd3 Black was only slightly better. 17.Nab1? was too slow; 17.b4 or 17.d6 would have held.' },
        { text: "Kasparov's 16...Nd3", why: 'A strong and famous move, but after it Black was only slightly better. White still had good defenses.' },
        { text: "Kasparov's 8...d5", why: 'The gambit is not fully sound. It did not win the game by itself; White went wrong later.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which statement about the Kasparov Gambit is accurate?',
      choices: [
        { text: 'It is not fully sound: after 11.Bc4 White keeps a small edge', correct: true, why: 'Yes. Black gets activity for the pawn, but not quite enough. It is a surprise weapon, not a refutation of White\'s play.' },
        { text: 'It is refuted: White wins by force', why: "That overstates it. White keeps only a small edge, and the positions stay tricky to play." },
        { text: 'It wins for Black, as Kasparov showed', why: "Kasparov's famous win came after a White mistake on move 17, not from the opening itself." }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'After 4...Nc6 5.Nb5 d6 6.c4 Nf6 7.N1c3 a6 8.Na3, Black plays 8...d5!?. What is this gambit called?',
      choices: [
        { text: 'The Kasparov Gambit', correct: true, why: 'Right. lichess calls it the Gary Gambit. Kasparov used it against Karpov in 1985.' },
        { text: 'The Smith–Morra Gambit', why: "The Morra is White's gambit on move 2: 2.d4 cxd4 3.c3." },
        { text: 'The Marshall Gambit', why: 'Black does play ...d5 here, but this gambit in the Taimanov carries Kasparov\'s name.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Kasparov Gambit, what does Black get for the pawn?',
      choices: [
        { text: "Open lines against White's uncastled king, and the d3 square for a knight", correct: true, why: 'Yes. The e-file opens while White\'s king is on e1, and ...Nb4–d3 lands on a square no pawn can guard.' },
        { text: 'The pawn back by force', why: 'Not against the best defense. After 11.Bc4 White can keep the extra pawn.' },
        { text: 'A pawn storm with ...g5 and ...h5', why: "The gambit is about the center and the open e-file, not a kingside pawn storm." }
      ]
    }
  ],
  key: { name: 'Kasparov Gambit: 8...d5!?', moves: `${NA3} d5`, orientation: 'black' },
  terms: [
    { term: 'Gambit', meaning: 'An opening where one side gives up material, usually a pawn, for faster development, open lines or the initiative.' },
    { term: 'Outpost', meaning: 'A square in or near the enemy camp that no enemy pawn can attack, where a piece can settle. Here, d3.' },
    { term: 'Passed pawn', meaning: 'A pawn with no enemy pawn in front of it or on the files next to it. Nothing but pieces can stop it from advancing.' }
  ]
})
