import { defineModule } from '../../../types'
import { ADVANCE_QB6, FRENCH } from '../lines'

const C5 = `${FRENCH} e5 c5`
/** adv-4nf3: 4.Nf3 cxd4 5.Bd3 Nc6 6.O-O Nge7 7.Bf4 Ng6 */
const NF3 = `${C5} Nf3 cxd4 Bd3 Nc6 O-O Nge7 Bf4 Ng6`
/** adv-4qg4: 4.Qg4?! cxd4 5.Nf3 Nc6 6.Bd3 h5! 7.Qf4 f6 */
const QG4 = `${C5} Qg4 cxd4 Nf3 Nc6 Bd3 h5 Qf4 f6`
/** adv-4dxc5: 4.dxc5 Nc6 5.Nf3 Bxc5 6.Bd3 f6 7.Qe2 fxe5 8.Nxe5 Nf6 */
const DXC5 = `${C5} dxc5 Nc6 Nf3 Bxc5 Bd3 f6 Qe2 fxe5 Nxe5 Nf6`
/** adv-mb-decline-bd7: 6.Bd3 Bd7 7.dxc5 Bxc5 8.O-O f6 9.b4 Be7 10.Bf4 */
const HOLD_E5 = `${ADVANCE_QB6} Bd3 Bd7 dxc5 Bxc5 O-O f6 b4 Be7 Bf4`

export default defineModule({
  id: '2.9',
  title: "Nimzowitsch's ideas: 4.Nf3, 4.Qg4 and 4.dxc5",
  minutes: 11,
  level: 2,
  goals: [
    "Understand Nimzowitsch's idea: give up d4, but hold e5 with pieces",
    'Meet the early 4.Qg4?! with ...cxd4, ...Nc6 and ...h5',
    'Answer 4.dxc5 with ...Nc6, ...Bxc5 and the ...f6 break'
  ],
  intro:
    "So far White has always defended d4 with c3. Aron Nimzowitsch, one of the great thinkers of the game, asked a different question: what if White lets d4 go, and keeps e5 with pieces instead? This module shows his 4.Nf3, the risky queen sortie 4.Qg4, and 4.dxc5, and how Black should meet each one.",
  sections: [
    {
      kind: 'walkthrough',
      title: '4.Nf3: let d4 go, keep e5',
      intro: 'White does not play c3. Watch which pieces end up guarding e5.',
      moves: NF3,
      start: 6,
      orientation: 'white',
      steps: {
        6: {
          title: 'The base is attacked',
          text: '3...c5. Usually White plays 4.c3 here. Nimzowitsch had another plan.',
          arrows: [['c5', 'd4', 'red']]
        },
        7: {
          title: 'No c3',
          text: '4.Nf3. White develops and does not support d4 with a pawn. The knight guards e5, the pawn White really cares about.',
          arrows: [['f3', 'e5', 'green']]
        },
        8: {
          title: 'Black takes',
          text: "4...cxd4. The engine's choice. The base of the chain is gone.",
          marks: ['d4']
        },
        9: {
          title: 'A gambit',
          text: '5.Bd3. Instead of taking back with the knight or the queen, which is about level, White just develops. lichess calls this the Ruisdonk Gambit. White hopes to win d4 back later with a piece.',
          arrows: [['f3', 'd4', 'blue']]
        },
        10: {
          title: 'Hit e5',
          text: '5...Nc6. The knight guards the d4-pawn and attacks e5.',
          arrows: [['c6', 'e5', 'red'], ['c6', 'd4', 'green']]
        },
        11: {
          title: 'White castles',
          text: '6.O-O. White is ahead in development, and it is a pawn down.',
          arrows: [['e1', 'g1', 'green']]
        },
        12: {
          title: 'A route to g6',
          text: '6...Nge7. The knight heads for g6, where it will hit e5 again. As always, f6 is off limits because of the e5-pawn.',
          arrows: [['e7', 'g6', 'blue']]
        },
        13: {
          title: 'A piece holds e5',
          text: '7.Bf4. The bishop guards e5. Now pieces do the job the d4-pawn used to do: the f3-knight and the f4-bishop.',
          arrows: [['f4', 'e5', 'green'], ['f3', 'e5', 'green']]
        },
        14: {
          title: 'Two against two',
          text: '7...Ng6. The knight hits the bishop and e5. e5 is attacked twice and defended twice. The engine slightly prefers Black, who is still a pawn up.',
          arrows: [['g6', 'f4', 'red'], ['g6', 'e5', 'red']],
          marks: ['e5']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '4.Qg4?!: chase the queen with ...h5',
      intro: 'The queen comes out on move four. Black takes the pawn and uses the queen as a target.',
      moves: QG4,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The base is attacked',
          text: '3...c5. Black hits d4 as usual.',
          arrows: [['c5', 'd4', 'red']]
        },
        7: {
          title: 'The Nimzowitsch Attack',
          text: '4.Qg4. The queen eyes g7, which the f8-bishop still guards, and defends d4 along the fourth rank. But it is out very early.',
          arrows: [['g4', 'g7', 'red'], ['g4', 'd4', 'green']],
          ann: '?!'
        },
        8: {
          title: 'Take anyway',
          text: '4...cxd4. Black takes the pawn. 4...Nc6 first is just as good.',
          marks: ['d4']
        },
        9: {
          title: 'Develop',
          text: '5.Nf3. White plans to win the pawn back with Nxd4.',
          arrows: [['f3', 'd4', 'red']]
        },
        10: {
          title: 'Guard and hit',
          text: '5...Nc6. The knight guards the d4-pawn and attacks e5.',
          arrows: [['c6', 'd4', 'green'], ['c6', 'e5', 'red']]
        },
        11: {
          title: 'Another piece out',
          text: '6.Bd3. The bishop develops and aims at h7.',
          arrows: [['d3', 'h7', 'blue']]
        },
        12: {
          title: 'Kick the queen',
          text: "6...h5. The engine's choice. The pawn attacks the queen, so Black gains time while White has to move the queen again.",
          arrows: [['h5', 'g4', 'red']],
          ann: '!'
        },
        13: {
          title: 'The queen steps aside',
          text: '7.Qf4. From f4 the queen still guards e5 and hits d4.',
          arrows: [['f4', 'e5', 'green'], ['f4', 'd4', 'red']]
        },
        14: {
          title: 'Hit the head',
          text: '7...f6. Black attacks e5 a second time. Black is a pawn up for now, and the engine says Black is clearly better. 4.Qg4 came out too early.',
          arrows: [['f6', 'e5', 'red'], ['c6', 'e5', 'red']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '4.dxc5: ...Bxc5 and ...f6',
      intro: 'White takes on c5 and gives up the base of the chain at once. Now the e5-pawn stands alone.',
      moves: DXC5,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The base is attacked',
          text: '3...c5. White can also just take.',
          arrows: [['d4', 'c5', 'blue']]
        },
        7: {
          title: 'Giving up the base',
          text: '4.dxc5. White wins the c-pawn for now, but the e5-pawn has lost its pawn support. lichess calls this the Steinitz Variation of the Advance, not the Steinitz of the Classical (Module 6.2).',
          marks: ['e5']
        },
        8: {
          title: 'Hit e5',
          text: '4...Nc6. The knight attacks e5. 4...Bxc5 at once is also good.',
          arrows: [['c6', 'e5', 'red']]
        },
        9: {
          title: 'Guard e5',
          text: '5.Nf3. The knight guards e5.',
          arrows: [['f3', 'e5', 'green']]
        },
        10: {
          title: 'Pawn back, bishop out',
          text: '5...Bxc5. Black wins the pawn back and develops the bishop to a good diagonal, aiming at f2.',
          arrows: [['c5', 'f2', 'red']]
        },
        11: {
          title: 'White develops',
          text: '6.Bd3. The bishop gets ready for castling.',
          arrows: [['f1', 'd3', 'green']]
        },
        12: {
          title: 'Hit the head',
          text: "6...f6. The engine's choice. Now e5 is attacked twice (the f6-pawn and the c6-knight) and defended only once (the f3-knight).",
          arrows: [['f6', 'e5', 'red'], ['c6', 'e5', 'red'], ['f3', 'e5', 'green']],
          ann: '!'
        },
        13: {
          title: 'A second guard',
          text: '7.Qe2. The queen guards e5 along the e-file. Two against two.',
          arrows: [['e2', 'e5', 'green']]
        },
        14: {
          title: 'Trade it off',
          text: '7...fxe5. Black removes the e5-pawn. 7...Qc7, adding a third attacker, is about as good.',
          marks: ['e5']
        },
        15: {
          title: 'The knight recaptures',
          text: '8.Nxe5. White takes back with the knight.',
          arrows: [['e5', 'c6', 'red']]
        },
        16: {
          title: 'The knight reaches f6',
          text: '8...Nf6. With the e5-pawn gone, the g8-knight finally has its natural square. Black has a free, comfortable game, and the engine calls it about level.',
          arrows: [['g8', 'f6', 'green']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The same idea in the main line',
      body:
        "Nimzowitsch's plan also works later, with c3 already played. After 5...Qb6, White can play **6.Bd3 Bd7 7.dxc5 Bxc5 8.O-O f6 9.b4 Be7 10.Bf4**. White gives up the d4-pawn (it took on c5 and left), but **e5 is held by pieces**: the f4-bishop and the f3-knight, with the queen ready to help from e2. The engine gives White a slight edge.\n\nThe lesson for both sides: the d4-pawn matters because it supports e5. If White can hold e5 with pieces, d4 is not essential. Black's answer is always the same: hit e5 with ...f6 and with pieces, and free the position."
    },
    {
      kind: 'history',
      title: 'Nimzowitsch and the Advance',
      body:
        'Several Advance lines carry the name of Aron Nimzowitsch: 4.Qg4 is the Nimzowitsch Attack, and lichess calls 4.Nf3 the Nimzowitsch System. He also won a famous Advance game against Salwe at Karlsbad in 1911 that illustrates his blockade ideas. Module 8.4 looks at the blockade in more detail.'
    }
  ],
  takeaway:
    "Nimzowitsch's idea is to give up d4 and hold e5 with pieces. Against 4.Nf3 cxd4 and 4.dxc5, Black hits e5 with ...Nc6, ...f6 and the knights; against 4.Qg4?!, Black takes on d4 and chases the queen with ...h5.",
  lookAhead: 'Chapter 3 turns to the symmetrical Exchange Variation, 3.exd5 exd5, and the early sidelines beginners meet most.',
  drills: [
    {
      title: 'Punish the early queen',
      prompt: "You're Black. White has brought the queen out with 4.Qg4. Take the d4-pawn, guard it, chase the queen with a pawn, then hit e5.",
      moves: QG4,
      start: 7,
      side: 'black',
      hints: ['Take on d4 first, then bring the b8-knight to c6.', 'Your h-pawn can attack the queen on g4. Then the f-pawn attacks e5.'],
      success: '4...cxd4, 5...Nc6, 6...h5 and 7...f6. A pawn up, and the engine says Black is clearly better.'
    },
    {
      title: 'Against 4.dxc5',
      prompt: "You're Black. White has taken on c5. Hit e5 with a knight, win your pawn back with the bishop, then strike at e5 with a pawn.",
      moves: `${C5} dxc5 Nc6 Nf3 Bxc5 Bd3 f6`,
      start: 7,
      side: 'black',
      hints: ['First the b8-knight to c6, where it attacks e5.', 'Take back on c5 with the f8-bishop, then push the f-pawn one square.'],
      success: '4...Nc6, 5...Bxc5 and 6...f6. e5 is attacked twice, and Black is fine.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "What is Nimzowitsch's main idea with 4.Nf3 and 5.Bd3?",
      moves: `${C5} Nf3 cxd4 Bd3`,
      orientation: 'white',
      choices: [
        { text: 'Give up the d4-pawn, but keep e5 strong with pieces', correct: true, why: 'Right. The f3-knight, later Bf4 and Qe2, hold e5. White may win d4 back later with a piece.' },
        { text: 'Win the c5-pawn', why: 'The c-pawn has already taken on d4. White is a pawn down here, on purpose.' },
        { text: 'Attack on the queenside', why: "White's play is in the center and on the kingside, around e5." }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to play after 6.Bd3 in the 4.Qg4 line. What is the best move?',
      moves: `${C5} Qg4 cxd4 Nf3 Nc6 Bd3`,
      orientation: 'black',
      choices: [
        { text: '6...h5', correct: true, why: "Right. The pawn kicks the queen and gains time. It is the engine's choice, and Black is clearly better." },
        { text: '6...f6', why: 'A good idea, but kicking the queen first is stronger. After 6...f6, 7.Qh5+ is annoying.' },
        { text: '6...Qc7', why: 'Playable, but slower. 6...h5 uses the early queen as a target.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What has White given up with 4.dxc5?',
      moves: `${C5} dxc5`,
      orientation: 'black',
      choices: [
        { text: 'The d4-pawn, the base of the chain, so e5 has no pawn support', correct: true, why: 'Yes. Black attacks e5 with ...Nc6 and ...f6, and wins the c5-pawn back with ...Bxc5.' },
        { text: 'Nothing: White has won a pawn', why: 'Only for a moment. Black takes it back with ...Bxc5.' },
        { text: 'The e5-pawn', why: 'The e5-pawn is still there. What is gone is the d4-pawn that supported it.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Black to play after 6.Bd3 in the 4.dxc5 line. What is the best plan?',
      moves: `${C5} dxc5 Nc6 Nf3 Bxc5 Bd3`,
      orientation: 'black',
      choices: [
        { text: '...f6, hitting the head of the chain', correct: true, why: "Right. It is the engine's choice: e5 is attacked twice and defended once." },
        { text: '...Nge7 and ...Ng6, adding a knight against e5', why: 'Playable, but slower. The engine prefers striking at once with ...f6.' },
        { text: '...g5 and ...g4, chasing the f3-knight', why: "That weakens Black's own kingside and does nothing about e5. Hit e5 with ...f6 instead." }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'What is 4.Qg4 in the Advance called?',
      moves: `${C5} Qg4`,
      orientation: 'black',
      choices: [
        { text: 'The Nimzowitsch Attack', correct: true, why: 'Yes. It is dubious: after ...cxd4, ...Nc6 and ...h5, Black is clearly better.' },
        { text: 'The Milner-Barry Gambit', why: 'The Milner-Barry Gambit is 5...Qb6 6.Bd3 (Module 2.6).' },
        { text: 'The Wade Variation', why: 'The Wade is 4.c3 Qb6 with ...Bd7–b5 (Module 2.8).' }
      ]
    },
    {
      type: 'concept',
      prompt: 'White has given up the d4-pawn. What holds the e5-pawn now?',
      moves: HOLD_E5,
      orientation: 'white',
      choices: [
        { text: 'Pieces: the f4-bishop and the f3-knight', correct: true, why: "Right. That is Nimzowitsch's idea: hold e5 with pieces once the d4-pawn is gone." },
        { text: 'The d4-pawn', why: 'White took on c5 with that pawn, so there is no pawn on d4 any more.' },
        { text: 'The f-pawn', why: "White's f-pawn is still on f2. Only pieces guard e5 here." }
      ]
    }
  ],
  key: { name: 'Nimzowitsch System: 7.Bf4 holds e5', moves: `${C5} Nf3 cxd4 Bd3 Nc6 O-O Nge7 Bf4`, orientation: 'white' },
  terms: [
    { term: 'Blockade', meaning: "Holding a key square with a piece, so the enemy pawns can't advance or break through. Nimzowitsch's favorite idea." },
    { term: 'Strongpoint', meaning: 'A square or pawn that is well protected and hard to attack, like e5 when White holds it with pieces.' },
    { term: 'Sortie', meaning: 'An early trip by a piece, often the queen, into the middle of the board. Early sorties can lose time.' }
  ]
})
