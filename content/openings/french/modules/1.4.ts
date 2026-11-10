import { defineModule } from '../../../types'
import { FRENCH, ADVANCE, ADVANCE_QB6, CLASSICAL, STEINITZ } from '../lines'

/** adv-4c3: 3.e5 c5 4.c3 */
const ADV_4C3 = `${FRENCH} e5 c5 c3`

export default defineModule({
  id: '1.4',
  title: 'Attack the base: ...c5 against d4',
  minutes: 10,
  level: 1,
  goals: [
    "See why ...c5 is Black's main break in the French",
    'Count how ...Nc6 and ...Qb6 add attackers, and c3, Nf3 and Be3 add defenders',
    'Know why the queen on b6 also hits b2'
  ],
  intro:
    "Module 1.3 gave the rule: attack a pawn chain at its base. In the French, that means hitting d4 with ...c5. But White can defend d4 too. Who wins the fight? This module adds the pieces one by one, so you can count them on any board.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The fight for d4 in the Advance',
      intro: 'After each move, count the Black units that attack d4 and the White units that defend it.',
      moves: ADVANCE_QB6,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The chains are set',
          text: "3.e5. White's chain is d4–e5, and its base is d4. Right now only the queen on d1 guards d4: the squares d2 and d3 between them are empty.",
          arrows: [['d1', 'd4', 'green']],
          marks: ['d4']
        },
        6: {
          title: 'The break',
          text: '3...c5. Black attacks the base at once. One attacker, one defender. This pawn move is the main break in the French.',
          arrows: [['c5', 'd4', 'red'], ['d1', 'd4', 'green']]
        },
        7: {
          title: 'A pawn props up the base',
          text: '4.c3. Now d4 has two defenders. The main point: if Black ever plays ...cxd4, White takes back with the c-pawn, cxd4, and keeps a pawn on d4.',
          arrows: [['c3', 'd4', 'green'], ['d1', 'd4', 'green']]
        },
        8: {
          title: 'A second attacker',
          text: '4...Nc6. The knight develops and attacks d4. It also hits e5, the head of the chain. Two attackers against two defenders.',
          arrows: [['c6', 'd4', 'red'], ['c5', 'd4', 'red'], ['c6', 'e5', 'red']]
        },
        9: {
          title: 'A third defender',
          text: '5.Nf3. The knight defends d4 and e5. Now d4 has three defenders: the c3-pawn, the f3-knight and the queen.',
          arrows: [['f3', 'd4', 'green'], ['c3', 'd4', 'green'], ['d1', 'd4', 'green']]
        },
        10: {
          title: 'The queen lines up',
          text: "5...Qb6. The queen stands behind Black's own c5-pawn, so it does not hit d4 yet. Once the c-pawns are traded, it will. It also attacks b2, so White's c1-bishop is tied to guarding that pawn for now.",
          arrows: [['b6', 'd4', 'yellow'], ['b6', 'b2', 'red']],
          marks: ['c5']
        }
      }
    },
    {
      kind: 'text',
      title: 'Who can join the fight?',
      body:
        "**Black's attackers on d4:** the c5-pawn, the c6-knight, the queen on b6 (once the c-pawns are traded), and a knight on f5, which can come from e7 or h6.\n\n**White's defenders of d4:** the c3-pawn, the f3-knight, the queen on d1 (as long as nothing stands on d2 or d3), and a bishop on e3.\n\nA pawn that only defends is not doing much else, and every White piece tied to d4 is a piece that is not attacking. That is the idea behind ...c5: even if Black never wins d4, the pressure keeps White busy. Module 1.5 shows how to count before you take."
    },
    {
      kind: 'walkthrough',
      title: 'The same fight in the Classical',
      intro: 'Here White has a knight on c3, so the c-pawn cannot come to c3. Watch which piece does its job.',
      moves: STEINITZ,
      start: 8,
      orientation: 'white',
      steps: {
        8: {
          title: 'The same chain',
          text: '4...Nfd7. After 3.Nc3 Nf6 4.e5, the knight has gone back to d7. The chains are d4–e5 and e6–d5 again.',
          marks: ['d4', 'e5', 'd5', 'e6']
        },
        9: {
          title: 'Support for the head',
          text: '5.f4. The f-pawn defends e5. White will also need defenders for d4.',
          arrows: [['f4', 'e5', 'green']]
        },
        10: {
          title: 'The break again',
          text: '5...c5. Black hits the base, exactly as in the Advance. Only the queen defends d4 for now.',
          arrows: [['c5', 'd4', 'red'], ['d1', 'd4', 'green']]
        },
        11: {
          title: 'A knight defends',
          text: '6.Nf3. The knight guards d4 and e5. Two defenders against one attacker.',
          arrows: [['f3', 'd4', 'green']]
        },
        12: {
          title: 'Another attacker',
          text: '6...Nc6. The knight joins the attack on d4. Two against two.',
          arrows: [['c6', 'd4', 'red'], ['c5', 'd4', 'red']]
        },
        13: {
          title: 'The bishop does the pawn\'s job',
          text: '7.Be3. The c-pawn cannot reach c3, because the knight stands there, so the bishop becomes the third defender of d4. This is the Steinitz Variation (Chapter 6).',
          arrows: [['e3', 'd4', 'green'], ['f3', 'd4', 'green'], ['d1', 'd4', 'green']]
        }
      }
    },
    {
      kind: 'tip',
      title: 'Why the queen goes to b6',
      body:
        'From b6 the queen does two jobs. It waits behind the c5-pawn to hit d4 as soon as the c-pawns are traded, and it attacks b2. While b2 needs guarding, the c1-bishop cannot go to e3 or f4 without leaving the pawn loose. White usually answers with a3 and b4, or with Be2 or Bd3 and castling first. Chapter 2 shows these plans.'
    }
  ],
  takeaway:
    "...c5 attacks d4, the base of White's chain. Black adds ...Nc6 and ...Qb6 (and later a knight on f5); White defends with c3, Nf3, the queen and sometimes Be3. Count both sides before anyone takes.",
  lookAhead:
    'Module 1.5 shows what happens when the c-pawns are traded and Black is tempted to take on d4: the counting decides everything.',
  drills: [
    {
      title: 'Pile up on d4',
      prompt: "You're Black. White has pushed 3.e5. Hit the base with a pawn, bring a knight to attack it, then line up your queen behind the c-pawn.",
      moves: ADVANCE_QB6,
      start: 5,
      side: 'black',
      hints: ['Your first move is the main French break.', '3...c5, then the b8-knight to c6, then the queen to b6.'],
      success: '3...c5, 4...Nc6 and 5...Qb6. The Advance main line, with three Black units aiming at d4.'
    },
    {
      title: 'Hold the base',
      prompt: "You're White. Black has just attacked your base with 3...c5. Support d4 with a pawn, then bring a knight to defend it.",
      moves: ADVANCE,
      start: 6,
      side: 'white',
      hints: ['Which pawn can protect d4, so that you can take back with a pawn later?', '4.c3, and after 4...Nc6, the g1-knight to f3.'],
      success: '4.c3 and 5.Nf3. The pawn, the knight and the queen all defend d4.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: 'After 5...Qb6, how many Black units attack d4 right now?',
      moves: ADVANCE_QB6,
      orientation: 'black',
      choices: [
        { text: 'Two: the c5-pawn and the c6-knight', correct: true, why: "Right. The queen on b6 is lined up with d4, but Black's own c5-pawn blocks its path. It joins in after the c-pawns are traded." },
        { text: 'Three: the c5-pawn, the c6-knight and the queen', why: 'Look at the diagonal from b6 to d4. The c5-pawn stands in the way, so the queen does not attack d4 yet.' },
        { text: 'One: only the c5-pawn', why: 'The knight on c6 attacks d4 too. A knight on c6 attacks a5, a7, b4, b8, d4, d8, e5 and e7.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the main point of 4.c3?',
      moves: ADV_4C3,
      orientation: 'white',
      choices: [
        { text: 'If Black takes on d4, a pawn takes back and the chain stays', correct: true, why: 'Right. After ...cxd4 cxd4, White still has a pawn on d4 holding up e5.' },
        { text: "It attacks Black's c5-pawn", why: 'A pawn on c3 attacks b4 and d4, not c5. Its job is to defend d4.' },
        { text: 'It opens the c-file for a rook', why: 'The c-file stays closed: White has a pawn on c3 and Black one on c5. The point of c3 is to defend d4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'In the Classical, White defends d4 with 7.Be3. Why not with the c-pawn, as in the Advance?',
      moves: `${CLASSICAL} e5 Nfd7 f4 c5 Nf3 Nc6`,
      orientation: 'white',
      choices: [
        { text: 'The knight on c3 is in the way, so the c-pawn cannot go to c3', correct: true, why: 'Right. With the knight on c3, a bishop on e3 does the defending job instead.' },
        { text: 'c3 would lose a pawn', why: 'c2–c3 is not even possible: the c3-square is taken by White\'s own knight.' },
        { text: "7.Be3 attacks Black's queen", why: "Black's queen is still on d8. 7.Be3 develops the bishop and defends d4." }
      ]
    },
    {
      type: 'plan',
      prompt: 'Besides lining up with d4, what does 5...Qb6 do?',
      moves: ADVANCE_QB6,
      orientation: 'black',
      choices: [
        { text: "It attacks b2, so White's c1-bishop is tied to guarding it", correct: true, why: 'Right. If the c1-bishop leaves, b2 is loose. That slows down White\'s development.' },
        { text: 'It attacks the f2-pawn', why: "The diagonal from b6 to f2 is blocked by Black's own c5-pawn and by White's d4-pawn." },
        { text: 'It prepares to castle on the queenside at once', why: 'Black still has the c8-bishop at home, so queenside castling is not possible yet. The queen\'s jobs are d4 and b2.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'After 5.Nf3, which White units defend d4?',
      moves: ADVANCE,
      orientation: 'white',
      choices: [
        { text: 'The c3-pawn, the f3-knight and the queen on d1', correct: true, why: 'Right. The queen sees d4 because d2 and d3 are empty.' },
        { text: 'Only the c3-pawn and the f3-knight', why: 'Look down the d-file. d2 and d3 are empty, so the queen on d1 defends d4 too.' },
        { text: 'The c3-pawn, the f3-knight and the f1-bishop', why: 'The f1-bishop moves on the diagonals toward a6 and h3. It does not reach d4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is ...c5 called the main French break?',
      choices: [
        { text: "It attacks d4, the base of White's pawn chain", correct: true, why: 'Right. Attacking the base follows Nimzowitsch\'s rule, and most French systems use it.' },
        { text: "It attacks e5, the head of White's chain", why: 'A pawn on c5 attacks b4 and d4. The break against e5 is ...f6.' },
        { text: 'It frees the c8-bishop', why: 'The c-pawn does not block the c8-bishop. Its path toward the kingside is blocked by the e6-pawn (Module 1.7).' }
      ]
    }
  ],
  key: { name: 'Advance: 4.c3 props up the base', moves: ADV_4C3, orientation: 'white' },
  terms: [
    { term: 'Attacker', meaning: 'A piece or pawn that could capture on a square if it wanted to.' },
    { term: 'Defender', meaning: 'A piece or pawn that could take back if an enemy piece captured on that square.' },
    { term: 'Pressure', meaning: 'Attacking a point with several units at once, so the opponent must keep defending it.' }
  ]
})
