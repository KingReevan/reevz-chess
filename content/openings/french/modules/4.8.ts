import { defineModule } from '../../../types'
import { TARRASCH } from '../lines'

/** tar-3nc6: 3...Nc6 4.Ngf3 Nf6 5.e5 Nd7 6.Nb3 Be7 7.Bb5 a6 */
const GUIMARD = `${TARRASCH} Nc6 Ngf3 Nf6 e5 Nd7 Nb3 Be7 Bb5 a6`
/** tar-3nc6 plus 8.Bxc6 (engine-checked: White is clearly better after 7...a6) */
const GUIMARD_BXC6 = `${GUIMARD} Bxc6`
/** tar-3a6: 3...a6 4.Ngf3 c5 5.exd5 exd5 */
const A6 = `${TARRASCH} a6 Ngf3 c5 exd5 exd5`
/** tar-3dxe4: 3...dxe4 4.Nxe4 Nd7 5.Nf3 Ngf6 (a Rubinstein) */
const DXE4 = `${TARRASCH} dxe4 Nxe4 Nd7 Nf3 Ngf6`

export default defineModule({
  id: '4.8',
  title: 'Guimard 3...Nc6, 3...a6 and 3...dxe4',
  minutes: 10,
  level: 2,
  goals: [
    'Know the cost of the Guimard: the knight blocks the c-pawn',
    'See how 3...a6 takes b5 away and rules out the Bb5+ lines',
    'Recognize that 3...dxe4 against 3.Nd2 is a Rubinstein'
  ],
  intro:
    "3...c5, 3...Nf6 and 3...Be7 are Black's main answers to 3.Nd2. Three more moves come up often enough that both sides should know them: the Guimard 3...Nc6, the waiting move 3...a6, and 3...dxe4. Each one has a clear idea, and one of them takes you straight into another chapter.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The Guimard: 3...Nc6',
      intro: "Watch Black's c-pawn. With a knight in front of it, the usual ...c5 break has to wait.",
      moves: GUIMARD,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The Tarrasch',
          text: '3.Nd2. Black tries a less common reply.',
          arrows: [['d2', 'e4', 'green']]
        },
        6: {
          title: 'The Guimard Defense',
          text: '3...Nc6. The knight develops and eyes d4 and e5. But it stands in front of the c-pawn, so the ...c5 break is gone for now.',
          arrows: [['c6', 'd4', 'red'], ['c6', 'e5', 'blue']],
          marks: ['c7']
        },
        7: {
          title: 'Simple development',
          text: '4.Ngf3. White develops and guards d4. The knight on f3 also watches e5.',
          arrows: [['f3', 'd4', 'green'], ['f3', 'e5', 'green']]
        },
        8: {
          title: 'Hit e4',
          text: '4...Nf6. Black attacks e4 a second time.',
          arrows: [['f6', 'e4', 'red'], ['d5', 'e4', 'red']]
        },
        9: {
          title: 'Push past',
          text: '5.e5. White gains space and kicks the knight, as in the closed Tarrasch.',
          arrows: [['e5', 'f6', 'red']]
        },
        10: {
          title: 'The knight retreats',
          text: '5...Nd7. The knight goes back to d7. Black would like to break with ...f6, now that ...c5 is not available.',
          arrows: [['f7', 'f6', 'blue']]
        },
        11: {
          title: 'Free the bishop, watch c5',
          text: '6.Nb3. The d2-knight moves on, so the c1-bishop is free. From b3 it also controls c5 and supports d4.',
          arrows: [['b3', 'c5', 'green'], ['b3', 'd4', 'green']],
          marks: ['c1']
        },
        12: {
          title: 'Develop',
          text: '6...Be7. Black develops and gets ready to castle.',
          arrows: [['e8', 'g8', 'blue']]
        },
        13: {
          title: 'Pressure on c6',
          text: '7.Bb5. The bishop attacks the c6-knight and threatens to double Black\'s pawns with Bxc6. White has a small but clear edge.',
          arrows: [['b5', 'c6', 'red']]
        },
        14: {
          title: 'Asking the bishop',
          text: '7...a6. This asks the bishop to decide, but after 8.Bxc6 bxc6 Black is left with doubled c-pawns and an isolated a-pawn, and White is clearly better. A better try is 7...a5, planning ...Na7 and ...c5 to free the c-pawn.',
          arrows: [['b5', 'c6', 'red']],
          ann: '?!'
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '3...a6: take b5 away',
      intro: 'A quiet pawn move with a clear point. Look at the b5-square.',
      moves: A6,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The Tarrasch',
          text: '3.Nd2. Black waits with a pawn move.',
          arrows: [['d2', 'e4', 'green']]
        },
        6: {
          title: 'No Bb5',
          text: '3...a6. The pawn takes b5 away from White\'s bishop and knights. In the lines of Modules 4.3 and 4.4, White\'s bishop came to b5.',
          arrows: [['a6', 'b5', 'green']],
          marks: ['b5']
        },
        7: {
          title: 'White develops',
          text: '4.Ngf3. White develops and guards d4.',
          arrows: [['f3', 'd4', 'green']]
        },
        8: {
          title: 'Now ...c5',
          text: '4...c5. Black strikes at d4, as in the main lines.',
          arrows: [['c5', 'd4', 'red']]
        },
        9: {
          title: 'Trade on d5',
          text: '5.exd5. White trades in the center.',
          arrows: [['e6', 'd5', 'blue']]
        },
        10: {
          title: 'No check on b5',
          text: '5...exd5. The e-file is open, but White has no Bb5+ here: the a6-pawn guards b5. So the 5.Bb5+ queen trade of Module 4.4 is not available. The position is level.',
          arrows: [['a6', 'b5', 'green'], ['f1', 'b5', 'blue']],
          marks: ['b5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '3...dxe4: into the Rubinstein',
      intro: "Black gives up the center at once. The position that follows is one you will meet again in Chapter 5.",
      moves: DXE4,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The Tarrasch',
          text: '3.Nd2. The knight defends e4.',
          arrows: [['d2', 'e4', 'green']]
        },
        6: {
          title: 'Trade on e4',
          text: '3...dxe4. Black trades the d-pawn for White\'s e-pawn. Black gives up the center for a solid, compact position.',
          marks: ['e4']
        },
        7: {
          title: 'The knight recaptures',
          text: '4.Nxe4. The knight takes back. It is the same position as after 3.Nc3 dxe4 4.Nxe4: a knight on e4 is a knight on e4, wherever it came from.',
          marks: ['e4']
        },
        8: {
          title: 'Prepare ...Ngf6',
          text: '4...Nd7. The knight gets ready to support ...Ngf6, so Black can take back on f6 with a knight.',
          arrows: [['d7', 'f6', 'green']]
        },
        9: {
          title: 'White develops',
          text: '5.Nf3. White develops the last knight.',
          arrows: [['g1', 'f3', 'green']]
        },
        10: {
          title: 'A Rubinstein',
          text: '5...Ngf6. This is the Rubinstein Variation. White has more space and freer pieces, Black a position with no weak pawns. Chapter 5 teaches it in full.',
          arrows: [['f6', 'e4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Three ideas in brief',
      body:
        "**3...Nc6 (Guimard Defense)** develops quickly but blocks the c-pawn, so Black has to break with ...f6 or move the knight again to free ...c5. White keeps a small but clear edge with simple development.\n\n**3...a6** takes b5 away from White's pieces and waits. After 4.Ngf3 c5 5.exd5 exd5, White's usual Bb5 ideas are gone, and the position is level.\n\n**3...dxe4** gives up the center and leads to the Rubinstein, the same position as after 3.Nc3 dxe4 4.Nxe4. It is solid, and White keeps a little more space."
    },
    {
      kind: 'tip',
      title: 'Transpositions save work',
      body:
        "When two move orders reach the same position, it is called a transposition. If you play the Rubinstein against 3.Nc3, you can use the same set-up against 3.Nd2 with 3...dxe4. One set-up, two answers. White, for its part, should expect it after either knight move."
    }
  ],
  takeaway:
    "The Guimard 3...Nc6 blocks the c-pawn, so White develops simply and keeps an edge. 3...a6 rules out White's Bb5 lines. 3...dxe4 against 3.Nd2 is a Rubinstein, the same position as after 3.Nc3 dxe4 4.Nxe4.",
  lookAhead:
    "That completes the Tarrasch. Chapter 5 starts from 3...dxe4: Module 5.1 shows what Black gets for giving up the center, against both 3.Nc3 and 3.Nd2.",
  drills: [
    {
      title: 'White: against the Guimard',
      prompt: "You're White. Black has played 3...Nc6. Develop your g1-knight, push past the f6-knight, move the d2-knight to free your bishop, attack the c6-knight with your f1-bishop, and when Black asks it with ...a6, take on c6.",
      moves: GUIMARD_BXC6,
      start: 6,
      side: 'white',
      hints: [
        '4.Ngf3, then 5.e5 against ...Nf6. The d2-knight goes to b3.',
        'The f1-bishop goes to b5. After 7...a6, give up the bishop for the knight to double Black\'s pawns.'
      ],
      success: '4.Ngf3, 5.e5, 6.Nb3, 7.Bb5 and 8.Bxc6. Black is left with doubled c-pawns, and White is clearly better.'
    },
    {
      title: 'Black: the a6 waiting move',
      prompt: "You're Black against 3.Nd2. Take b5 away with a pawn, then strike at d4 with your c-pawn, and take back on d5 with the e-pawn.",
      moves: A6,
      start: 5,
      side: 'black',
      hints: ['Push the a-pawn one square.', 'After 4.Ngf3, play ...c5. After 5.exd5, take back with the e-pawn.'],
      success: '3...a6, 4...c5 and 5...exd5. The e-file is open, but White has no Bb5+ trick. The position is level.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What is the main drawback of the Guimard, 3...Nc6?',
      moves: `${TARRASCH} Nc6`,
      orientation: 'black',
      choices: [
        { text: 'The knight blocks the c-pawn, so the ...c5 break has to wait', correct: true, why: 'Right. Black has to break with ...f6 or move the knight again before ...c5.' },
        { text: 'The knight blocks the c8-bishop', why: 'The c8-bishop is held back by the b7- and e6-pawns, not by the knight. The knight blocks the c-pawn.' },
        { text: 'It leaves the d5-pawn undefended', why: 'The e6-pawn and the queen still defend d5. The problem is the blocked c-pawn.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 3...a6 4.Ngf3 c5 5.exd5 exd5, why can\'t White play the Bb5+ queen-trade line of Module 4.4?',
      moves: A6,
      orientation: 'white',
      choices: [
        { text: 'The a6-pawn guards b5, so a bishop there would be taken', correct: true, why: 'Yes. That is the point of 3...a6: White\'s bishop and knights cannot use b5.' },
        { text: 'The e-file is closed', why: 'The e-file is open after 5...exd5. The problem for White is the b5-square.' },
        { text: 'White\'s queen cannot reach e2', why: 'The queen can reach e2. The point is the b5-square: without Bb5+, White cannot force the trade of the light-squared bishops.' }
      ]
    },
    {
      type: 'move',
      prompt: "You're White. Black has just played 7...a6 in the Guimard. What is your best move?",
      moves: GUIMARD,
      orientation: 'white',
      choices: [
        { text: '8.Bxc6', correct: true, why: 'Right. After 8...bxc6 Black has doubled c-pawns and an isolated a-pawn, and White is clearly better.' },
        { text: '8.Be2', why: 'The bishop retreats and gives up the chance to damage Black\'s pawns. The position is only roughly level.' },
        { text: '8.Bd3', why: 'Playable, but it lets Black keep a healthy structure. 8.Bxc6 is much stronger.' }
      ]
    },
    {
      type: 'name',
      prompt: '3.Nd2 dxe4 4.Nxe4 Nd7 5.Nf3 Ngf6 leads to which variation?',
      moves: DXE4,
      orientation: 'black',
      choices: [
        { text: 'The Rubinstein', correct: true, why: 'Yes. It is the same position as after 3.Nc3 dxe4 4.Nxe4 Nd7 5.Nf3 Ngf6 (Chapter 5).' },
        { text: 'The Winawer', why: 'The Winawer is 3.Nc3 Bb4. Here Black has traded on e4.' },
        { text: 'The Guimard', why: 'The Guimard is 3...Nc6. Here Black played 3...dxe4.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'What is 3.Nd2 Nc6 called?',
      moves: `${TARRASCH} Nc6`,
      orientation: 'black',
      choices: [
        { text: 'The Guimard Defense', correct: true, why: 'Yes. The knight develops at once but blocks the c-pawn.' },
        { text: "Morozevich's line", why: "Morozevich's line is 3...Be7 (Module 4.7)." },
        { text: 'The Chistyakov Defense', why: "That is lichess's name for 3...c5 4.exd5 Qxd5 (Module 4.2)." }
      ]
    },
    {
      type: 'concept',
      prompt: 'Which move order reaches the same position as 3.Nd2 dxe4 4.Nxe4 Nd7 5.Nf3 Ngf6?',
      choices: [
        { text: '1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Nf3 Ngf6', correct: true, why: 'Right. The knight reaches e4 from c3 instead of d2, and every other piece stands the same. That is a transposition.' },
        { text: '1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5', why: 'That is the Winawer. The pawns are still on e5 and d5.' },
        { text: '1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6', why: 'That is the Advance Variation, with a locked center.' }
      ]
    }
  ],
  key: { name: 'Guimard Defense: 3.Nd2 Nc6', moves: `${TARRASCH} Nc6`, orientation: 'black' },
  terms: [
    { term: 'Guimard Defense', meaning: 'The French with 3.Nd2 Nc6. The knight develops at once but blocks Black\'s c-pawn.' },
    { term: 'Transposition', meaning: 'Reaching the same position by a different move order, like 3.Nd2 dxe4 4.Nxe4 and 3.Nc3 dxe4 4.Nxe4.' },
    { term: 'Rubinstein Variation', meaning: 'The French with ...dxe4 against 3.Nc3 or 3.Nd2. Black gives up the center for a solid position.' }
  ]
})
