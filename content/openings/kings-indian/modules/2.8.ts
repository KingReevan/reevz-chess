import { defineModule } from '../../../types'
import { BAYONET, MAIN, MDP_G5 } from '../lines'

export default defineModule({
  id: '2.8',
  title: 'Attack where your pawns point',
  minutes: 10,
  level: 2,
  goals: [
    'See which way each pawn chain points after 8.d5 Ne7',
    'Know the rule: attack on the side your chain points to',
    'Understand why the main line becomes a race'
  ],
  intro:
    "After 8.d5 Ne7 the center is locked. So where should each side play? Strong players use a simple rule in every locked center: attack where your pawns point. This module shows the rule in one picture, and why it turns the King's Indian into a race.",
  sections: [
    {
      kind: 'walkthrough',
      title: "Black's pawns head for the king",
      intro: "This is the start of the Mar del Plata. Don't learn the moves yet. Chapter 3 does that. Just watch which way Black's pawns travel.",
      moves: MDP_G5,
      start: 16,
      orientation: 'black',
      steps: {
        16: {
          title: 'Follow the chain',
          text: "8...Ne7. Black's chain runs d6–e5. Follow that diagonal onward and it leads to f4, g3 and h2, toward White's king. That's Black's side of the board.",
          arrows: [['d6', 'e5', 'green'], ['e5', 'h2', 'yellow']]
        },
        17: {
          title: 'White looks the other way',
          text: "9.Ne1. White's knight heads for d3, where it will support c4–c5 on the queenside. It also makes room for f2–f3.",
          arrows: [['e1', 'd3', 'blue'], ['c4', 'c5', 'blue']]
        },
        18: {
          title: 'Clear the f-pawn',
          text: '9...Nd7. The f6-knight steps aside so the f-pawn can advance.',
          arrows: [['f7', 'f5', 'blue']]
        },
        19: {
          title: 'White props up e4',
          text: "10.f3. White supports e4, the base of White's chain, before Black can hit it.",
          arrows: [['f3', 'e4', 'green']]
        },
        20: {
          title: 'The first lever',
          text: "10...f5. Black's pawn attacks e4. This is Black's main pawn break.",
          arrows: [['f5', 'e4', 'red']]
        },
        21: {
          title: 'White develops',
          text: '11.Be3. The bishop comes out. Black can gain time by attacking it.',
          arrows: [['f5', 'f4', 'blue']]
        },
        22: {
          title: 'Space on the kingside',
          text: "11...f4. The pawn gains space and hits the bishop. Black's pawns now aim straight at White's king.",
          arrows: [['f4', 'e3', 'red']]
        },
        23: {
          title: 'Eyes on the queenside',
          text: "12.Bf2. The bishop retreats. From f2 it looks at c5 and a7, on White's attacking wing.",
          arrows: [['f2', 'c5', 'blue']]
        },
        24: {
          title: 'The race begins',
          text: '12...g5. Next comes ...g4, to open lines near White\'s king. White, meanwhile, will push c4–c5. Each side attacks on its own wing.',
          arrows: [['g5', 'g4', 'red'], ['c4', 'c5', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "White's pawns head for the queenside",
      intro: "Now look from White's side. White's king is on the kingside, so White wants the action far away from it.",
      moves: BAYONET,
      start: 13,
      orientation: 'white',
      steps: {
        13: {
          title: "White's king is on g1",
          text: "7.O-O. White's king lives on the kingside, the very side Black's pawns will point at.",
          marks: ['g1']
        },
        14: {
          title: 'Pressure on d4',
          text: '7...Nc6. Black adds a second attacker on d4, as in Module 2.6.',
          arrows: [['c6', 'd4', 'red']]
        },
        15: {
          title: 'The lock',
          text: '8.d5. White pushes past and locks the center. The new chain runs e4–d5.',
          arrows: [['e4', 'd5', 'green']]
        },
        16: {
          title: 'Follow the chain',
          text: "8...Ne7. Follow White's chain from e4 through d5 and it leads to c6 and b7, on Black's queenside. That's White's side. The target is d6, which c4–c5 will hit.",
          arrows: [['d5', 'b7', 'yellow'], ['c4', 'c5', 'blue']],
          marks: ['d6']
        },
        17: {
          title: "White doesn't wait",
          text: "9.b4. The Bayonet Attack. White skips Ne1 and gets ready for c4–c5 at once, before Black's ...f5 arrives. Chapter 4 shows how it works.",
          arrows: [['b4', 'c5', 'green'], ['c4', 'c5', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The rule',
      body:
        "**A pawn chain points toward one side of the board. Attack on that side**, because that is where you have more space. Then aim at the base of the enemy chain.\n\n**White's chain** (e4–d5) points to the queenside. White attacks there with c4–c5, b2–b4 and a2–a4, aiming at d6 and the c-file.\n\n**Black's chain** (d6–e5) points to the kingside. Black attacks there with ...f5, ...f4, ...g5 and ...g4, aiming at e4 and then at White's king."
    },
    {
      kind: 'text',
      title: "Why it's a race",
      body:
        "Both sides attack on different wings, and neither wants to waste time defending. So every move counts, and the side that gets there first usually wins.\n\nThe two attacks are not equal in kind. White's attack usually wins material or space on the queenside. Black's attack aims at the king. A mating attack can win even after White has broken through, which is why King's Indian players love this position. Chapter 3 shows Black's side of the race, and Chapter 4 shows White's."
    },
    {
      kind: 'warning',
      title: "Don't attack where your opponent is stronger",
      body:
        "If Black plays on the queenside, White's extra space there usually wins out. If White starts pushing pawns on the kingside, White weakens the pawns in front of the king. That is why a move like 11.g4 for White (Module 3.8) is rare."
    }
  ],
  takeaway:
    "In the main line, White's chain points to the queenside and Black's points to the kingside. Each side attacks where its pawns point, and the game becomes a race.",
  lookAhead:
    "Chapter 3 shows Black's kingside attack in the Mar del Plata, move by move, starting with 9.Ne1 Nd7.",
  drills: [
    {
      title: "Black's pawns roll",
      prompt: "You're Black. White plays the Mar del Plata set-up. Free your f-pawn, then push your kingside pawns toward White's king.",
      moves: MDP_G5,
      start: 16,
      side: 'black',
      hints: ['First move the f6-knight out of the way of the f-pawn.', 'Then f-pawn, f-pawn again with tempo, and the g-pawn.'],
      success: '9...Nd7, 10...f5, 11...f4 and 12...g5. Your pawns point at White\'s king, and the race is on.'
    },
    {
      title: "White's queenside start",
      prompt: "You're White. Close the center, then start your queenside attack right away.",
      moves: BAYONET,
      start: 14,
      side: 'white',
      hints: ['Push past the attack on d4 to lock the center.', 'Which pawn move prepares c4–c5 at once?'],
      success: '8.d5 and 9.b4. The center is locked and White is already racing on the queenside.'
    }
  ],
  quiz: [
    {
      type: 'concept',
      prompt: "Which way does White's pawn chain e4–d5 point?",
      moves: MAIN,
      orientation: 'white',
      choices: [
        { text: 'Toward the queenside', correct: true, why: "Right. From e4 through d5 the line heads for c6 and b7, Black's queenside." },
        { text: 'Toward the kingside', why: "Follow the diagonal from e4 to d5 and keep going: it reaches c6 and b7, not the kingside." },
        { text: 'Straight up the board', why: 'Pawn chains run diagonally. This one slants toward the queenside.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Where should Black attack in the main line after 8.d5 Ne7?',
      moves: MAIN,
      orientation: 'black',
      choices: [
        { text: 'On the kingside, with ...f5, ...f4 and ...g5', correct: true, why: "Yes. Black's chain d6–e5 points there, and White's king lives there." },
        { text: 'On the queenside, with ...b5', why: "That's where White's chain points and White has more space. Black would be playing on White's strong side." },
        { text: 'In the center, with ...d5', why: "Impossible: White's pawn already stands on d5, and the center is locked." }
      ]
    },
    {
      type: 'concept',
      prompt: "White's typical queenside break is c4–c5. Which Black pawn does it attack?",
      moves: MAIN,
      orientation: 'white',
      choices: [
        { text: 'd6', correct: true, why: "Right. A pawn on c5 attacks d6, the base of Black's chain." },
        { text: 'e5', why: 'A pawn on c5 attacks b6 and d6. e5 is out of its reach.' },
        { text: 'c7', why: 'A pawn on c5 attacks b6 and d6. The c7-pawn only comes under fire later, once the c-file opens.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why is the main line often called a race?',
      choices: [
        { text: 'Both sides attack on opposite wings, so speed counts more than anything', correct: true, why: 'Yes. Neither side wants to defend, so every move matters.' },
        { text: 'Both kings run toward the center', why: 'The kings stay on the kingside. The race is between two pawn attacks.' },
        { text: 'The side that trades queens first wins', why: 'The queens usually stay on in the main line. The race is about attacks, not trades.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'What is the idea of the Bayonet Attack, 9.b4?',
      moves: BAYONET,
      orientation: 'white',
      choices: [
        { text: "Start the queenside attack before Black's ...f5 arrives", correct: true, why: 'Right. b4 prepares c4–c5 at once, without spending a move on Ne1.' },
        { text: 'Stop Black from playing ...f5', why: "b4 is on the other wing and doesn't touch f5. It simply races ahead." },
        { text: 'Prepare to castle queenside', why: 'White has already castled kingside.' }
      ]
    },
    {
      type: 'concept',
      prompt: "Why can Black's kingside attack win even after White breaks through on the queenside?",
      moves: MDP_G5,
      orientation: 'black',
      choices: [
        { text: 'It aims at the king, and checkmate beats any amount of material', correct: true, why: "Exactly. White's gains on the queenside don't matter if the king is mated first." },
        { text: "Black's attack is always faster", why: 'Not always. The race is often very close, which is why every move counts.' },
        { text: 'White has no pieces near the kingside', why: "White usually has the f3-pawn, the f2-bishop and other defenders there. Black's attack is dangerous because its target is the king." }
      ]
    }
  ],
  key: { name: 'The race begins: 12...g5', moves: MDP_G5, orientation: 'black' },
  terms: [
    { term: 'Race', meaning: 'A position where both sides attack on different wings and the faster attack usually wins.' },
    { term: 'Pawn lever', meaning: 'A pawn move that attacks an enemy pawn to open lines, such as ...f5 against e4.' },
    { term: 'Wing', meaning: 'One side of the board: the kingside (files e to h) or the queenside (files a to d).' }
  ]
})
