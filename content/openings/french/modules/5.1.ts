import { defineModule } from '../../../types'
import { FRENCH, RUBINSTEIN, TARRASCH } from '../lines'

/** tar-3dxe4: 3.Nd2 dxe4 4.Nxe4 Nd7 5.Nf3 Ngf6 */
const VIA_ND2 = `${TARRASCH} dxe4 Nxe4 Nd7 Nf3 Ngf6`
/** rub-4nf6-gxf6: 4...Nf6 5.Nxf6+ gxf6 6.Nf3 b6 7.g3 Bb7 8.Bg2 */
const EARLY_NF6 = `${RUBINSTEIN} Nf6 Nxf6+ gxf6 Nf3 b6 g3 Bb7 Bg2`
/** rub-4nd7 up to 5...Ngf6 (engine-checked: 3...dxe4, 4...Nd7 and 5...Ngf6 are all top moves) */
const SETUP = `${RUBINSTEIN} Nd7 Nf3 Ngf6`

export default defineModule({
  id: '5.1',
  title: '3...dxe4: giving up the center',
  minutes: 10,
  level: 2,
  goals: [
    'See what Black gives up with 3...dxe4, and what Black gets back',
    'Know that 3...dxe4 works against both 3.Nc3 and 3.Nd2',
    "Understand White's small edge: more space and freer pieces"
  ],
  intro:
    'In most French lines Black keeps the pawn on d5 and lets the center lock. The Rubinstein Variation does the opposite: Black trades the d5-pawn for White\'s e4-pawn at once. Why would Black give up the center, and what does each side get in return?',
  sections: [
    {
      kind: 'walkthrough',
      title: 'The trade on e4',
      intro: 'Watch the center. After four moves, only one side still has a pawn there.',
      moves: RUBINSTEIN,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The French position',
          text: "2...d5. Black's d5-pawn attacks e4. White usually defends it, pushes it to e5 or trades it.",
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'The knight defends',
          text: '3.Nc3. The knight develops and defends e4. Black can pin it with 3...Bb4 (the Winawer), attack e4 again with 3...Nf6 (the Classical), or end the tension at once.',
          arrows: [['c3', 'e4', 'green']]
        },
        6: {
          title: 'Black takes on e4',
          text: '3...dxe4. This is the Rubinstein Variation, named after Akiba Rubinstein. Black gives up the pawn on d5, which held a strong post in the center.',
          marks: ['e4']
        },
        7: {
          title: 'Material is equal',
          text: "4.Nxe4. The knight takes back: one pawn each. But White still has a pawn on d4, and Black has no pawn on d5 any more. The d4-pawn controls c5 and e5, so White has more space. Black's e6-pawn still blocks the c8-bishop.",
          arrows: [['d4', 'e5', 'yellow'], ['d4', 'c5', 'yellow']],
          marks: ['e6']
        }
      }
    },
    {
      kind: 'text',
      title: 'What each side gets',
      body:
        "**White** gets more space and freer pieces. The d4-pawn takes away c5 and e5, the knight on e4 stands in the center, and the c1-bishop's diagonal toward g5 and h6 is open. The engine gives White a small edge.\n\n**Black** gets a compact, solid position with no weak pawns. The plan is simple: develop with ...Nd7, ...Ngf6, ...Be7 or ...Bd6 and castle, then free the game with ...c5 (Module 5.3). The one piece that still needs care is the c8-bishop, shut in by the e6-pawn. Fort Knox (Module 5.5) solves that problem first."
    },
    {
      kind: 'walkthrough',
      title: 'The same trade against 3.Nd2',
      intro: 'White picks the other knight move. Black can still take on e4.',
      moves: VIA_ND2,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: 'The same question',
          text: '2...d5. Again e4 is attacked. This time White defends it a different way.',
          arrows: [['d5', 'e4', 'red']]
        },
        5: {
          title: 'The Tarrasch',
          text: '3.Nd2. The knight defends e4 from d2, where a ...Bb4 pin would not last: c3 kicks the bishop. This is the Tarrasch (Chapter 4).',
          arrows: [['d2', 'e4', 'green']]
        },
        6: {
          title: 'The same trade',
          text: "3...dxe4. Black takes on e4 again. This sidesteps the Tarrasch's own main lines, where Black plays 3...c5 or 3...Nf6.",
          marks: ['e4']
        },
        7: {
          title: 'A transposition',
          text: '4.Nxe4. The knight came from d2 instead of c3, but it lands on the same square. The board is now exactly the same as after 3.Nc3 dxe4 4.Nxe4. That is why the Rubinstein works against both knight moves.',
          marks: ['e4']
        },
        8: {
          title: 'Preparing ...Ngf6',
          text: "4...Nd7. Black's main move. The knight gets ready to take back on f6 if White ever trades a knight there. Module 5.2 explains why this comes first.",
          arrows: [['d7', 'f6', 'blue']]
        },
        9: {
          title: 'White develops',
          text: '5.Nf3. The knight develops toward the center, where it guards d4 and e5.',
          arrows: [['f3', 'd4', 'green'], ['f3', 'e5', 'green']]
        },
        10: {
          title: 'Challenging the knight',
          text: '5...Ngf6. The knight attacks the e4-knight, which has no defender. If White takes on f6, the d7-knight takes back and Black\'s pawns stay healthy.',
          arrows: [['f6', 'e4', 'red'], ['d7', 'f6', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Why not 4...Nf6 at once?',
      intro: 'Black can develop the king\'s knight straight away. See what White does about it.',
      moves: EARLY_NF6,
      start: 7,
      orientation: 'black',
      steps: {
        7: {
          title: 'The Rubinstein position',
          text: '4.Nxe4. The knight on e4 sits in the center. Black wants to challenge it.',
          marks: ['e4']
        },
        8: {
          title: 'The knight comes out',
          text: '4...Nf6. The knight attacks e4 at once, without ...Nd7 first.',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'Trade with check',
          text: '5.Nxf6+. White trades knights with check. No black knight can take back: the b8-knight cannot reach f6. Black takes back with the g-pawn or the queen.',
          arrows: [['f6', 'e8', 'red']]
        },
        10: {
          title: 'Doubled f-pawns',
          text: "5...gxf6. Black takes back with the pawn (5...Qxf6 brings the queen out early). Black now has doubled f-pawns, and the g-file is half-open: no black pawn on it, only White's g-pawn.",
          marks: ['f6', 'f7']
        },
        11: {
          title: 'White develops',
          text: '6.Nf3. The knight develops and guards d4. White has the healthier pawns.',
          arrows: [['f3', 'd4', 'green']]
        },
        12: {
          title: 'A route for the bishop',
          text: "6...b6. Black prepares ...Bb7. On b7 the bishop uses the long diagonal, which the e6-pawn does not block.",
          arrows: [['c8', 'b7', 'blue']]
        },
        13: {
          title: 'White prepares Bg2',
          text: '7.g3. White wants to put the f1-bishop on g2, on the same long diagonal as Black\'s bishop.',
          arrows: [['f1', 'g2', 'blue']]
        },
        14: {
          title: 'The long diagonal',
          text: '7...Bb7. The bishop looks down the long diagonal at the f3-knight.',
          arrows: [['b7', 'f3', 'red']]
        },
        15: {
          title: 'A small edge for White',
          text: "8.Bg2. The bishop guards f3. Black has the bishop on the long diagonal and the half-open g-file for a rook, but the kingside pawns are broken up, so Black's king often goes to the queenside. White is a little better.",
          arrows: [['g2', 'f3', 'green'], ['h8', 'g8', 'blue']],
          marks: ['f6', 'f7']
        }
      }
    },
    {
      kind: 'tip',
      title: 'One system against two moves',
      body:
        'Because 3.Nc3 dxe4 4.Nxe4 and 3.Nd2 dxe4 4.Nxe4 reach the same position, a Black player who learns the Rubinstein has one answer to both knight moves. Theory gives White only a slight edge, which is why many strong players use it when they want a safe, solid game.'
    }
  ],
  takeaway:
    "3...dxe4 trades Black's d5-pawn for White's e4-pawn. White gets more space, freer pieces and a small edge; Black gets a solid position with no weak pawns. It works against both 3.Nc3 and 3.Nd2.",
  lookAhead: "Module 5.2 shows Black's main set-up, 4...Nd7 and 5...Ngf6, and why the order of those moves matters.",
  drills: [
    {
      title: 'Play the Rubinstein',
      prompt: "You're Black. White has played 3.Nc3. Trade on e4, then bring out both knights so that one of them can take back on f6.",
      moves: SETUP,
      start: 5,
      side: 'black',
      hints: ['First end the tension in the center with your d-pawn.', 'Put the b8-knight on d7 before the g8-knight goes to f6.'],
      success: '3...dxe4, 4...Nd7 and 5...Ngf6. If White trades on f6, the d7-knight takes back.'
    },
    {
      title: 'Answer the early knight',
      prompt: "You're White. Black has played 4...Nf6 without ...Nd7 first. Trade knights so that Black must damage the pawns or bring out the queen, then develop.",
      moves: `${RUBINSTEIN} Nf6 Nxf6+ gxf6 Nf3`,
      start: 7,
      side: 'white',
      hints: ['Which capture comes with check?', 'After 5...gxf6, develop the g1-knight toward the center.'],
      success: '5.Nxf6+ gxf6 6.Nf3. Black has doubled f-pawns, and White is a little better.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'What does Black give up with 3...dxe4?',
      moves: RUBINSTEIN,
      orientation: 'black',
      choices: [
        { text: 'The central pawn on d5: White keeps a pawn on d4 and more space', correct: true, why: 'Right. Material is equal, but only White still has a pawn in the center. The d4-pawn controls c5 and e5.' },
        { text: 'A pawn: Black ends up a pawn down', why: 'No. Black took the e4-pawn and White took back with the knight. One pawn each, so material is equal.' },
        { text: 'The right to castle', why: 'Black can still castle on either side. The cost of 3...dxe4 is the central post on d5, not the king.' }
      ]
    },
    {
      type: 'order',
      prompt: 'After which of White\'s third moves can Black play 3...dxe4 and reach the Rubinstein position after 4.Nxe4?',
      choices: [
        { text: '3.Nc3 and 3.Nd2', correct: true, why: 'Right. After either knight move, 3...dxe4 4.Nxe4 gives exactly the same position.' },
        { text: 'Only 3.Nc3', why: '3.Nd2 dxe4 4.Nxe4 reaches the same position. The knight just came from d2 instead of c3.' },
        { text: '3.e5 and 3.Nc3', why: 'After 3.e5 the pawn has left e4, so there is nothing to take there. The pawns lock instead (Chapter 2).' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does White get in the Rubinstein?',
      moves: RUBINSTEIN,
      orientation: 'white',
      choices: [
        { text: 'More space and freer pieces, and a small edge', correct: true, why: 'Right. The d4-pawn takes away c5 and e5, and White\'s pieces have more room. The edge is small.' },
        { text: "A strong attack on Black's king", why: "Black's king is safe. White's edge is small, and it comes from space, not from an attack." },
        { text: "Weak black pawns to aim at", why: 'Black has no weak pawns after 3...dxe4. That solidity is what Black plays the Rubinstein for.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'After 4...Nf6 5.Nxf6+ gxf6, what does Black get in return for the doubled f-pawns?',
      moves: `${RUBINSTEIN} Nf6 Nxf6+ gxf6`,
      orientation: 'black',
      choices: [
        { text: 'A half-open g-file for a rook', correct: true, why: 'Right. With the g-pawn gone, a rook on g8 can press down the g-file. The price is a broken kingside, so Black\'s king is less safe there.' },
        { text: 'An extra pawn', why: 'Knights were traded one for one and no pawn was won. Material is equal.' },
        { text: 'The two bishops against bishop and knight', why: 'Each side traded one knight, so both sides still have both bishops.' }
      ]
    }
  ],
  exam: [
    {
      type: 'name',
      prompt: 'White started with 3.Nd2, and Black took on e4. Which variation is on the board now?',
      moves: `${TARRASCH} dxe4 Nxe4`,
      orientation: 'black',
      choices: [
        { text: 'The Rubinstein', correct: true, why: 'Right. 3.Nd2 dxe4 4.Nxe4 is the same position as 3.Nc3 dxe4 4.Nxe4: the Rubinstein.' },
        { text: 'Fort Knox', why: "Fort Knox is a Rubinstein line with ...Bd7 and ...Bc6. Black's bishop is still on c8 here." },
        { text: 'The Tarrasch with 3...c5', why: "Black didn't play 3...c5. After 3...dxe4 the game has left the Tarrasch's own lines." },
        { text: 'The Classical', why: 'The Classical is 3.Nc3 Nf6. Here Black traded on e4 instead.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Black has a solid Rubinstein position. Which pawn move does Black usually use later to free the game and fight for the center?',
      choices: [
        { text: '...c5, hitting the d4-pawn', correct: true, why: 'Right. ...c5 attacks d4 and opens lines for Black\'s pieces. Module 5.3 shows it.' },
        { text: '...f6, hitting e5', why: 'There is no white pawn on e5 in the Rubinstein, so ...f6 has nothing to attack. It would only weaken e6.' },
        { text: '...h6 and ...g5, attacking on the kingside', why: 'Those moves weaken Black\'s own king. The Rubinstein is a solid system, and its break is ...c5.' }
      ]
    }
  ],
  key: { name: 'Rubinstein: 3.Nc3 dxe4', moves: `${FRENCH} Nc3 dxe4`, orientation: 'black' },
  terms: [
    { term: 'Rubinstein Variation', meaning: 'The French line 3.Nc3 dxe4 (or 3.Nd2 dxe4), where Black trades the d5-pawn for the e4-pawn. Named after Akiba Rubinstein.' },
    { term: 'Space', meaning: 'Room for your pieces. Pawns further up the board take squares away from the opponent, as the d4-pawn does with c5 and e5.' },
    { term: 'Half-open file', meaning: 'A file with pawns of only one color on it. After ...gxf6 the g-file has no black pawn, only White\'s.' },
    { term: 'Transposition', meaning: 'Reaching the same position by a different move order, like 3.Nd2 dxe4 4.Nxe4 and 3.Nc3 dxe4 4.Nxe4.' }
  ]
})
