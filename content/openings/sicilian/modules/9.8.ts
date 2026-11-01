import { defineModule } from '../../../types'
import { NAJDORF, TAIMANOV, ROSSOLIMO } from '../lines'

export default defineModule({
  id: '9.8',
  title: 'Choosing your Sicilian (and your answer to it)',
  minutes: 10,
  level: 3,
  goals: [
    'Pick a Black system that suits your style, and know which White sidestep it allows',
    'Pick a White answer to 1...c5: the Open Sicilian, the Alapin, or the Bb5 systems',
    'Learn a system the right way: plans first, then moves'
  ],
  intro:
    "You've now seen the whole Sicilian, from the Najdorf to the King's Indian Attack. Nobody plays all of it. Strong players pick one system as Black and one answer as White, and learn those well. This last module helps you choose, by style, with the chapters to go back to.",
  sections: [
    {
      kind: 'walkthrough',
      title: "Black's choices on the road to the Najdorf",
      intro: 'Each Black move here is a decision. Watch where the other roads branch off.',
      moves: NAJDORF,
      start: 2,
      orientation: 'black',
      steps: {
        2: {
          title: 'The Sicilian',
          text: '1...c5. Your first choice. Now White picks a road: 2.Nf3 and 3.d4 for the Open Sicilian, or a sidestep such as 2.c3, the Alapin (Chapter 7), or 2.Nc3, the Closed Sicilian (Chapter 8).',
          arrows: [['g1', 'f3', 'green'], ['c2', 'c3', 'blue'], ['b1', 'c3', 'blue']]
        },
        3: {
          title: 'Choose a family',
          text: "2.Nf3. Black's second move picks a family: 2...d6 for the Najdorf, Dragon, Classical and Scheveningen; 2...Nc6 for the Sveshnikov and Accelerated Dragon; 2...e6 for the Taimanov and Kan.",
          arrows: [['d7', 'd6', 'blue'], ['b8', 'c6', 'blue'], ['e7', 'e6', 'blue']]
        },
        4: {
          title: 'The 2...d6 family',
          text: '2...d6. The road to the sharpest systems. It also allows 3.Bb5+, the Moscow, so a 2...d6 player needs an answer to it (Modules 9.4 and 9.5).',
          arrows: [['f1', 'b5', 'blue']]
        },
        5: {
          title: 'The Open Sicilian',
          text: '3.d4. White opens the center.',
          arrows: [['d4', 'c5', 'red']]
        },
        6: {
          title: 'The big trade',
          text: '3...cxd4. Black trades a wing pawn for a center pawn (Chapter 1).'
        },
        7: {
          title: 'Knight takes',
          text: '4.Nxd4. White has a lead in development; Black has two center pawns to one.'
        },
        8: {
          title: 'Hitting e4',
          text: '4...Nf6. The knight attacks e4 and invites 5.Nc3.',
          arrows: [['f6', 'e4', 'red']]
        },
        9: {
          title: 'The crossroads',
          text: '5.Nc3. Black chooses a system: 5...a6, the Najdorf (Chapter 2); 5...g6, the Dragon (Chapter 3); 5...Nc6, the Classical, or 5...e6, the Scheveningen (Chapter 4).',
          arrows: [['a7', 'a6', 'blue'], ['g7', 'g6', 'blue'], ['b8', 'c6', 'blue']]
        },
        10: {
          title: 'The Najdorf',
          text: '5...a6. A rich, flexible system with ...e5 or ...e6 plans. White has many sixth moves, so it asks for the most study. A good choice if you enjoy complex positions.',
          arrows: [['a6', 'b5', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The flexible road: 2...e6 and the Taimanov',
      intro: 'A quieter choice for Black, with natural development and less forcing theory.',
      moves: TAIMANOV,
      start: 3,
      orientation: 'black',
      steps: {
        3: {
          title: 'Same second move for White',
          text: '2.Nf3. This time Black picks the flexible family.'
        },
        4: {
          title: 'The ...e6 family',
          text: "2...e6. The d-pawn can stay home, go to d6, or jump to d5 in one move. White's quiet sidestep here is the King's Indian Attack with 3.d3 (Module 9.6).",
          arrows: [['e6', 'd5', 'green']]
        },
        5: {
          title: 'White opens',
          text: '3.d4. The Open Sicilian again.',
          arrows: [['d4', 'c5', 'red']]
        },
        6: {
          title: 'Trade',
          text: '3...cxd4. Black takes, as usual.'
        },
        7: {
          title: 'Knight takes',
          text: '4.Nxd4. Now Black chooses the system.'
        },
        8: {
          title: 'The Taimanov',
          text: "4...Nc6. The Taimanov (Chapter 6). Black develops with ...Qc7, ...a6 and ...Nf6 and keeps the pawns flexible. Another choice is 4...a6, the Kan. Both suit players who like solid, flexible positions.",
          arrows: [['d8', 'c7', 'blue'], ['a7', 'a6', 'blue'], ['g8', 'f6', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: "White's roads against 1...c5",
      intro: 'Now sit on the other side. White also has choices to make, on move two and on move three.',
      moves: ROSSOLIMO,
      start: 1,
      orientation: 'white',
      steps: {
        1: {
          title: 'You play 1.e4',
          text: '1.e4. If you play 1.e4 as White, you need an answer to the Sicilian.'
        },
        2: {
          title: 'Choose a road',
          text: '1...c5. The main choices: 2.Nf3 and 3.d4, the Open Sicilian (Chapters 2–6); 2.c3, the Alapin, or 2.d4, the Smith–Morra Gambit (Chapter 7); 2.Nc3, the Closed or the Grand Prix (Chapter 8).',
          arrows: [['g1', 'f3', 'green'], ['c2', 'c3', 'blue'], ['b1', 'c3', 'blue']]
        },
        3: {
          title: 'The flexible knight',
          text: '2.Nf3. The most flexible move. You can still play 3.d4, or a bishop move to b5.',
          arrows: [['d2', 'd4', 'blue'], ['f1', 'b5', 'blue']]
        },
        4: {
          title: 'Black picks a family',
          text: '2...Nc6. After 3.d4, Black can choose the Sveshnikov or the Accelerated Dragon. Do you want to meet those?',
          arrows: [['c6', 'd4', 'green']]
        },
        5: {
          title: 'The Rossolimo',
          text: "3.Bb5. If not, this is your move (Modules 9.1–9.3). Against 2...d6, the same bishop gives check with 3.Bb5+, the Moscow. Against 2...e6, 3.d3 starts the King's Indian Attack. Together they make a complete answer with little forcing theory.",
          arrows: [['b5', 'c6', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Choose by style',
      body:
        "**As Black:**\n\n- **You love sharp, attacking chess and enjoy study:** the Najdorf (Chapter 2) or the Dragon (Chapter 3). The Dragon has clear plans for both sides, but the Yugoslav race is very sharp.\n- **You like solid, flexible positions:** the Taimanov or the Kan (Chapter 6), or a Scheveningen set-up (Chapter 4).\n- **You like active pieces and don't mind a weakness:** the Sveshnikov (Chapter 5), which accepts a hole on d5 for active play, or the Classical with ...Nc6 (Chapter 4).\n\nWhatever you choose, prepare for White's sidesteps: the Alapin and the Smith–Morra (Chapter 7), the Closed and the Grand Prix (Chapter 8), and the one that goes with your second move (this chapter): 3.Bb5+ after 2...d6, 3.Bb5 after 2...Nc6, and the King's Indian Attack after 2...e6.\n\n**As White:**\n\n- **You want open, attacking games:** the Open Sicilian with 3.d4, with the English Attack, the Yugoslav or Bg5 lines (Chapters 2–6). It is the most testing choice, and also the most theory.\n- **You want a big center and less theory:** the Alapin, 2.c3 (Chapter 7).\n- **You like gambits and fast development:** the Smith–Morra (Chapter 7). It is sound enough, but not better for White.\n- **You prefer calm, positional games:** 2.Nf3 with 3.Bb5 or 3.Bb5+, and the King's Indian Attack against 2...e6 (this chapter), or the Closed Sicilian (Chapter 8)."
    },
    {
      kind: 'tip',
      title: 'Plans first, then moves',
      body:
        "Learn one system at a time. First learn its pawn structures and plans: where your pieces go, which break you want, and what your opponent is aiming for. Then learn the main moves. Play the system often, and after each game look up where you left the book. That's how the moves stick."
    }
  ],
  takeaway:
    "Pick one Black system that fits your style, and know the White sidestep its second move allows. As White, choose between the Open Sicilian (most testing, most theory), the Alapin or Smith–Morra (Chapter 7), and the Bb5 systems with the King's Indian Attack (this chapter). Learn plans first, then moves.",
  lookAhead:
    'That completes the Sicilian course. Head to the Revision hub to practice with flashcards, the line trainer and the cheat sheet, then take the final exam.',
  drills: [
    {
      title: 'The road to the Najdorf',
      prompt: "You're Black. White has played 1.e4. Play the Sicilian, choose the 2...d6 family, and go all the way to the Najdorf.",
      moves: NAJDORF,
      start: 1,
      side: 'black',
      hints: [
        'The c-pawn goes two squares, and after 2.Nf3 the d-pawn goes one.',
        'Take on d4, hit e4 with the king-side knight, and after 5.Nc3 play the small a-pawn move.'
      ],
      success: '1...c5, 2...d6, 3...cxd4, 4...Nf6 and 5...a6. The Najdorf: Chapter 2 is your home.'
    },
    {
      title: 'The Open Sicilian as White',
      prompt: "You're White. Black has played 1...c5. Go for the Open Sicilian, and against the Najdorf choose the English Attack.",
      moves: `${NAJDORF} Be3`,
      start: 2,
      side: 'white',
      hints: [
        'Knight to f3 first, then open the center with the d-pawn.',
        'Take back on d4 with the knight, guard e4 with the other knight, and against 5...a6 develop the dark-squared bishop to e3.'
      ],
      success: '2.Nf3, 3.d4, 4.Nxd4, 5.Nc3 and 6.Be3: the English Attack (Module 2.3).'
    }
  ],
  quiz: [
    {
      type: 'plan',
      prompt: 'As Black, you love sharp, attacking positions and enjoy studying. Which system fits you best?',
      choices: [
        { text: 'The Najdorf (Chapter 2)', correct: true, why: 'Right. It is rich and double-edged, and it rewards study. The Dragon (Chapter 3) is the other sharp choice.' },
        { text: 'The Taimanov (Chapter 6)', why: 'A fine system, but it is chosen for flexibility and solid structures, not for maximum sharpness.' },
        { text: 'The Moscow (Module 9.4)', why: "The Moscow is White's 3.Bb5+, not a Black system. It is something a 2...d6 player must be ready to meet." }
      ]
    },
    {
      type: 'plan',
      prompt: 'As White, you want a big pawn center and less theory than the Open Sicilian. Which choice fits?',
      choices: [
        { text: 'The Alapin, 2.c3 (Chapter 7)', correct: true, why: 'Yes. 2.c3 prepares d4, so that White can take back on d4 with a pawn and keep two center pawns.' },
        { text: 'The Open Sicilian with 3.d4', why: 'It is the most testing choice, but also the one with the most theory, from the Najdorf to the Sveshnikov.' },
        { text: 'The Najdorf', why: 'The Najdorf is a Black system. White chooses the road; Black chooses the Najdorf.' }
      ]
    },
    {
      type: 'order',
      prompt: 'You play 2...Nc6 as Black. Which White sidestep must you be ready for on move three?',
      moves: 'e4 c5 Nf3 Nc6',
      orientation: 'black',
      choices: [
        { text: 'The Rossolimo, 3.Bb5', correct: true, why: 'Right. It hits the c6-knight and avoids the Sveshnikov and the Accelerated Dragon (Modules 9.1–9.3).' },
        { text: 'The Moscow, 3.Bb5+', why: 'The Moscow needs 2...d6, so that the bishop gives check. After 2...Nc6 the d7-pawn blocks the diagonal.' },
        { text: 'The Keres Attack, 6.g4', why: 'The Keres Attack meets the Scheveningen later in the Open Sicilian. It is not a move-three sidestep.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What is the best way to learn a new Sicilian system?',
      choices: [
        { text: 'Learn its structures and plans first, then the main moves, and review your games', correct: true, why: 'Yes. Plans help you when your opponent leaves the book, and reviewing games makes the moves stick.' },
        { text: 'Memorize every line twenty moves deep before playing it', why: "That takes forever, and opponents leave the book early. Without plans, you won't know what to do when they do." },
        { text: 'Learn only the traps', why: 'Traps win a few quick games, but most opponents avoid them. You still need to know the plans.' }
      ]
    }
  ],
  exam: [
    {
      type: 'order',
      prompt: 'You play 2...e6 as Black. Which quiet White set-up should you be ready for?',
      moves: 'e4 c5 Nf3 e6',
      orientation: 'black',
      choices: [
        { text: "The King's Indian Attack: d3, g3, Bg2 and Nbd2", correct: true, why: 'Right. Claim the center with ...d5, castle, and play on the queenside (Module 9.6).' },
        { text: 'The Moscow, 3.Bb5+', why: 'The Moscow needs 2...d6. After 2...e6, Bb5 is no check.' },
        { text: 'The Sveshnikov', why: 'The Sveshnikov is a Black system after 2...Nc6, not a White set-up.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'As White, you like 2.Nf3 but want to avoid the Najdorf and the Sveshnikov. Which plan fits?',
      moves: 'e4 c5 Nf3',
      orientation: 'white',
      choices: [
        { text: '3.Bb5+ against 2...d6, and 3.Bb5 against 2...Nc6', correct: true, why: 'Yes. The Moscow and the Rossolimo avoid both, and lead to calm, positional games (this chapter).' },
        { text: '3.d4 against everything', why: 'After 3.d4 Black can choose the Najdorf (after 2...d6) or the Sveshnikov (after 2...Nc6).' },
        { text: 'Give up 2.Nf3 and switch to 1.d4', why: 'No need. The Bb5 moves let you keep 2.Nf3 and still avoid both systems.' }
      ]
    }
  ],
  key: { name: "Choosing your road: 2...d6, then 3.d4 or 3.Bb5+?", moves: 'e4 c5 Nf3 d6', orientation: 'white' },
  terms: [
    { term: 'Repertoire', meaning: 'The set of openings you choose to play, as White and as Black, and know well.' },
    { term: 'Anti-Sicilian', meaning: "Any White system that avoids the Open Sicilian (2.Nf3 and 3.d4), such as the Alapin, the Closed, the Rossolimo or the Moscow." },
    { term: 'Transposition', meaning: 'Reaching the same position by a different order of moves.' }
  ]
})
