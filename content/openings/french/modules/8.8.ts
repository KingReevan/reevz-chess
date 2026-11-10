import { defineModule } from '../../../types'
import { FRENCH, ADVANCE, ADVANCE_QB6, RUBINSTEIN, WINAWER_MAIN } from '../lines'

/** rub-4nd7: 4...Nd7 5.Nf3 Ngf6 6.Nxf6+ Nxf6 */
const RUB_ND7 = `${RUBINSTEIN} Nd7 Nf3 Ngf6 Nxf6+ Nxf6`

export default defineModule({
  id: '8.8',
  title: 'Choosing your French (and your answer to it)',
  minutes: 10,
  level: 3,
  goals: [
    'Pick a Black set-up against 3.Nc3 that suits your style: solid, classical or sharp',
    "Pick White's third move: the Advance, the Tarrasch, 3.Nc3 or the Exchange",
    'Learn a system the right way: plans first, then moves'
  ],
  intro:
    "You've now seen the whole French, from the Advance to the Winawer. Nobody plays all of it. Strong players pick one set-up as Black and one answer as White, and learn those well. This last module helps you choose, by style, with the chapters to go back to.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The solid road: 3...dxe4',
      intro: 'After 2...d5, White chooses a road first. Against 3.Nc3, Black has three answers. Here is the safest one.',
      moves: RUB_ND7,
      start: 4,
      orientation: 'black',
      steps: {
        4: {
          title: "White's choice",
          text: '2...d5. White picks a road: 3.e5, the Advance (Chapter 2); 3.exd5, the Exchange (Chapter 3); 3.Nd2, the Tarrasch (Chapter 4); or 3.Nc3 (Chapters 5–7).',
          arrows: [['e4', 'e5', 'blue'], ['b1', 'd2', 'blue'], ['b1', 'c3', 'blue']]
        },
        5: {
          title: "Black's choice",
          text: '3.Nc3. Now Black picks a system: 3...dxe4, the Rubinstein (Chapter 5); 3...Nf6, the Classical (Chapter 6); or 3...Bb4, the Winawer (Chapter 7).',
          arrows: [['d5', 'e4', 'blue'], ['g8', 'f6', 'blue'], ['f8', 'b4', 'blue']]
        },
        6: {
          title: 'Give up the center',
          text: '3...dxe4. Black trades the d-pawn for a compact position with no weak pawns. The same move works against 3.Nd2 too (Module 5.1).',
          marks: ['e4']
        },
        7: {
          title: 'White takes back',
          text: '4.Nxe4. White has more space and a knight in the center.',
          arrows: [['e4', 'f6', 'red']]
        },
        8: {
          title: 'Prepare ...Ngf6',
          text: '4...Nd7. The knight gets ready to support ...Ngf6, so Black can take back on f6 with a knight. 4...Bd7 and ...Bc6 instead is Fort Knox (Module 5.5).',
          arrows: [['d7', 'f6', 'green']]
        },
        9: {
          title: 'White develops',
          text: '5.Nf3. A natural developing move.',
          arrows: [['f3', 'e5', 'blue']]
        },
        10: {
          title: 'Challenge the knight',
          text: '5...Ngf6. Black offers a knight trade on f6.',
          arrows: [['f6', 'e4', 'red']]
        },
        11: {
          title: 'The trade',
          text: '6.Nxf6+. White trades knights.',
          marks: ['f6']
        },
        12: {
          title: 'Solid and healthy',
          text: "6...Nxf6. Black has no weak pawns and easy development, with ...c5 coming later (Module 5.3). White keeps more space and a slight edge. A good choice if you like safe positions and don't mind defending for a while.",
          arrows: [['c7', 'c5', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The sharp road: 3...Bb4',
      intro: 'The same position after 3.Nc3, but now Black chooses the most unbalanced answer.',
      moves: WINAWER_MAIN,
      start: 5,
      orientation: 'black',
      steps: {
        5: {
          title: 'The crossroads',
          text: '3.Nc3. This time Black pins the knight.',
          arrows: [['f8', 'b4', 'blue']]
        },
        6: {
          title: 'The Winawer',
          text: '3...Bb4. The bishop pins the knight that defends e4.',
          arrows: [['b4', 'c3', 'red'], ['c3', 'e1', 'yellow']]
        },
        7: {
          title: 'White pushes',
          text: '4.e5. The main answer: White locks the center and gains space.',
          marks: ['e5']
        },
        8: {
          title: 'Hit the base',
          text: '4...c5. Black attacks d4 at once.',
          arrows: [['c5', 'd4', 'red']]
        },
        9: {
          title: 'Ask the bishop',
          text: '5.a3. White asks the bishop to decide.',
          arrows: [['a3', 'b4', 'red']]
        },
        10: {
          title: 'Give the bishop',
          text: '5...Bxc3+. Black gives up the bishop pair to double White\'s pawns.',
          marks: ['c3']
        },
        11: {
          title: 'Doubled pawns',
          text: '6.bxc3. White has doubled c-pawns, but the two bishops and kingside space.',
          marks: ['c2', 'c3']
        },
        12: {
          title: 'A rich fight',
          text: "6...Ne7. Unbalanced pawns and plans on both wings. White keeps a small edge, but both sides play for a win. A good choice if you like sharp positions and enjoy study: 7.Qg4 and the Poisoned Pawn (Modules 7.3 and 7.4) need homework.",
          arrows: [['e7', 'f5', 'blue'], ['d8', 'a5', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "White's roads against the French",
      intro: 'Now sit on the other side. White chooses on move three.',
      moves: ADVANCE_QB6,
      start: 3,
      orientation: 'white',
      steps: {
        3: {
          title: 'Take the center',
          text: '2.d4. White builds the big center. After 2...d5, the choice is yours.',
          marks: ['d4', 'e4']
        },
        4: {
          title: 'Four roads',
          text: '2...d5. 3.Nc3 is the most testing, and the most theory: you must meet the Winawer, the Classical and the Rubinstein. 3.Nd2 avoids the Winawer (Chapter 4). 3.exd5 is simple and symmetrical (Chapter 3). 3.e5 gives you space and clear plans (Chapter 2).',
          arrows: [['b1', 'c3', 'blue'], ['b1', 'd2', 'blue'], ['e4', 'e5', 'green']]
        },
        5: {
          title: 'The Advance',
          text: '3.e5. White locks the center and takes space on the kingside.',
          marks: ['e5', 'd4']
        },
        6: {
          title: 'Black hits the base',
          text: '3...c5. Black attacks d4, the base of White\'s chain.',
          arrows: [['c5', 'd4', 'red']]
        },
        7: {
          title: 'Support the base',
          text: '4.c3. The c-pawn props up d4.',
          arrows: [['c3', 'd4', 'green']]
        },
        8: {
          title: 'More pressure',
          text: '4...Nc6. Another attacker on d4.',
          arrows: [['c6', 'd4', 'red']]
        },
        9: {
          title: 'A defender',
          text: '5.Nf3. The knight defends d4 and guards e5.',
          arrows: [['f3', 'd4', 'green'], ['f3', 'e5', 'green']]
        },
        10: {
          title: 'Count on d4',
          text: '5...Qb6. The main line. The queen lines up behind the c5-pawn and attacks b2. From here you choose between 6.a3, 6.Be2 and the Milner-Barry Gambit, 6.Bd3 (Chapter 2). Count the attackers and defenders on d4 before every capture.',
          arrows: [['b6', 'b2', 'red']],
          marks: ['d4']
        }
      }
    },
    {
      kind: 'text',
      title: 'Choose by style',
      body:
        "**As Black, against 3.Nc3:**\n\n- **You want a safe, solid game and don't mind a little less space:** the Rubinstein or Fort Knox (Chapter 5). 3...dxe4 also works against 3.Nd2.\n- **You like classical development and clear pawn chains:** the Classical, 3...Nf6 (Chapter 6). Be ready for both 4.e5 and 4.Bg5, including the Alekhine–Chatard.\n- **You love sharp, unbalanced positions and enjoy study:** the Winawer, 3...Bb4 (Chapter 7).\n\nWhatever you pick, you also need an answer to 3.Nd2 (Chapter 4: 3...c5 or 3...Nf6), to the Advance (Chapter 2), to the Exchange (Chapter 3), and to the early sidelines such as 2.d3 (Chapter 3).\n\n**As White:**\n\n- **You want space and clear plans:** the Advance, 3.e5 (Chapter 2). Against ...Qb6, learn 6.a3 or 6.Be2. The Milner-Barry Gambit, 6.Bd3, is dangerous in practice, but the engine prefers Black.\n- **You want to avoid the Winawer:** the Tarrasch, 3.Nd2 (Chapter 4).\n- **You want the most testing lines and enjoy study:** 3.Nc3 (Chapters 5–7).\n- **You want something simple and quick to learn:** the Exchange, 3.exd5 (Chapter 3). To play for a win, unbalance the position. The King's Indian Attack with 2.d3 (Module 3.4) is another quiet choice."
    },
    {
      kind: 'tip',
      title: 'Plans first, then moves',
      body:
        "Learn one system at a time. First learn its pawn structures and plans: the ...c5 and ...f6 breaks, where the c8-bishop goes, and what White is aiming for. Then learn the main moves. Play the system often, and after each game look up where you left the book. That's how the moves stick."
    }
  ],
  takeaway:
    "As Black, choose by style against 3.Nc3: the Rubinstein or Fort Knox (solid), the Classical 3...Nf6 (classical) or the Winawer 3...Bb4 (sharp), and prepare answers to 3.Nd2, 3.e5 and 3.exd5. As White, choose the Advance, the Tarrasch, 3.Nc3 or the Exchange. Learn plans first, then moves.",
  lookAhead:
    'That completes the French course. Head to the Revision hub to practice with flashcards, the line trainer and the cheat sheet, then take the final exam.',
  drills: [
    {
      title: 'The solid road',
      prompt: "You're Black. White has played 1.e4. Play the French, give up the center against 3.Nc3, and set up so you can take back on f6 with a knight.",
      moves: RUB_ND7,
      start: 1,
      side: 'black',
      hints: [
        'The e-pawn goes one square, then the d-pawn two. Against 3.Nc3, take on e4.',
        'After 4.Nxe4, the b8-knight goes to d7, then the g8-knight to f6. Take back on f6 with the knight.'
      ],
      success: '1...e6, 2...d5, 3...dxe4, 4...Nd7, 5...Ngf6 and 6...Nxf6. The Rubinstein: Chapter 5 is your home.'
    },
    {
      title: 'The Advance as White',
      prompt: "You're White. Black has played 1...e6. Take the center, push past Black's d5-pawn, and build the Advance set-up that supports d4 with a pawn and a knight.",
      moves: ADVANCE,
      start: 2,
      side: 'white',
      hints: [
        'The d-pawn goes two squares. After 2...d5, push the e-pawn.',
        'After 3...c5, support d4 with the c-pawn, then develop the g1-knight.'
      ],
      success: '2.d4, 3.e5, 4.c3 and 5.Nf3: the Advance set-up (Chapter 2).'
    }
  ],
  quiz: [
    {
      type: 'plan',
      prompt: "As Black, you want a solid position with no weak pawns, and you don't mind a little less space. Which answer to 3.Nc3 fits best?",
      moves: `${FRENCH} Nc3`,
      orientation: 'black',
      choices: [
        { text: '3...dxe4, the Rubinstein (Chapter 5)', correct: true, why: 'Right. Black gets a compact, healthy position. Fort Knox is the other solid choice in that chapter.' },
        { text: '3...Bb4, the Winawer (Chapter 7)', why: 'The Winawer is the sharpest choice: unbalanced pawns and a lot of theory.' },
        { text: '3...Nf6, the Classical (Chapter 6)', why: 'A fine choice, but it leads to locked pawn chains and sharp lines like the Alekhine–Chatard. The Rubinstein is the solid one.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'As White, you want space and clear plans, with less theory than 3.Nc3. Which third move fits?',
      moves: FRENCH,
      orientation: 'white',
      choices: [
        { text: '3.e5, the Advance (Chapter 2)', correct: true, why: 'Right. White locks the center and plays on the kingside, while counting carefully on d4.' },
        { text: '3.Nc3', why: 'The most testing choice, but also the most theory: the Winawer, the Classical and the Rubinstein.' },
        { text: '3.exd5, the Exchange (Chapter 3)', why: 'Simple, but symmetrical: it gives White no extra space.' }
      ]
    },
    {
      type: 'order',
      prompt: "White wants a knight defending e4 that can't be pinned for long by ...Bb4. Which third move does that?",
      moves: FRENCH,
      orientation: 'white',
      choices: [
        { text: '3.Nd2, the Tarrasch', correct: true, why: 'Right. If Black tries 3...Bb4, the answer 4.c3 attacks the bishop and blocks the pin in one move (Module 4.1).' },
        { text: '3.Nc3', why: 'This allows 3...Bb4, the Winawer pin.' },
        { text: '3.e5', why: 'This avoids the pin, but the e-pawn no longer needs defending: it has advanced. No knight is involved.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the best way to learn a new French system?',
      choices: [
        { text: 'Learn its structures and plans first, then the main moves, and review your games', correct: true, why: 'Right. Plans help when your opponent leaves the book, and reviewing games makes the moves stick.' },
        { text: 'Memorize every line twenty moves deep before playing it', why: "That takes forever, and opponents leave the book early. Without plans you won't know what to do when they do." },
        { text: 'Learn only the traps', why: 'Traps win a few quick games, but most opponents avoid them. You still need the plans.' }
      ]
    }
  ],
  exam: [
    {
      type: 'plan',
      prompt: 'As White, you like gambits and fast attacks. Which French line fits, and what is the honest warning?',
      choices: [
        { text: 'The Milner-Barry Gambit, 6.Bd3 in the Advance: dangerous in practice, but the engine prefers Black', correct: true, why: 'Right. It gives a pawn for quick development (Module 2.6). It is a practical weapon, not a sound gambit.' },
        { text: 'The Exchange Variation: it wins by force', why: 'The Exchange is symmetrical and calm. It does not win by force.' },
        { text: 'The Rubinstein: it gives White an attack', why: "The Rubinstein, 3...dxe4, is Black's choice, not White's." }
      ]
    },
    {
      type: 'concept',
      prompt: 'You play 3...Bb4 against 3.Nc3. Why can\'t you use the same idea against 3.Nd2?',
      moves: `${FRENCH} Nd2`,
      orientation: 'black',
      choices: [
        { text: 'The pin on the d2-knight lasts only one move: 4.c3 kicks the bishop and blocks it', correct: true, why: 'Right. Against 3.Nd2 you need another answer, such as 3...c5 or 3...Nf6 (Chapter 4).' },
        { text: '3...Bb4 is illegal after 3.Nd2', why: 'It is legal, and it does pin the d2-knight for a moment. It just achieves nothing: 4.c3 drives the bishop back.' },
        { text: 'White wins the bishop by force', why: 'The bishop is not lost. Black just wastes time.' }
      ]
    }
  ],
  key: { name: 'Choosing your French: 3.Nc3, Black to choose', moves: `${FRENCH} Nc3`, orientation: 'black' },
  terms: [
    { term: 'Repertoire', meaning: 'The set of openings you choose to play, as White and as Black, and know well.' },
    { term: 'System', meaning: 'One family of lines with shared plans, like the Winawer or the Advance.' },
    { term: 'Transposition', meaning: 'Reaching the same position by a different order of moves, like the Rubinstein after 3.Nc3 or 3.Nd2.' }
  ]
})
