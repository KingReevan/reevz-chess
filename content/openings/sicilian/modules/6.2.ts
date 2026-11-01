import { defineModule } from '../../../types'
import { TAIMANOV } from '../lines'

/** taimanov-qc7: 5.Nc3 Qc7 6.Be3 a6 7.Qd2 Nf6 8.O-O-O Bb4 9.f3 Ne5 10.Nb3 b5 */
const ENG = `${TAIMANOV} Nc3 Qc7 Be3 a6 Qd2 Nf6 O-O-O Bb4 f3 Ne5 Nb3 b5`
/** 11.g4? Nxf3! 12.Qe2 Bxc3 13.Qxf3 Be5: engine-checked, Black wins a pawn */
const G4 = `${ENG} g4 Nxf3 Qe2 Bxc3 Qxf3 Be5`
/** scheveningen-from-taimanov: 6.Be2 a6 7.O-O Nf6 8.Be3 Be7 9.f4 d6 10.Qe1 O-O */
const SCHEV = `${TAIMANOV} Nc3 Qc7 Be2 a6 O-O Nf6 Be3 Be7 f4 d6 Qe1 O-O`

export default defineModule({
  id: '6.2',
  title: 'Taimanov against the English Attack',
  minutes: 11,
  level: 2,
  goals: [
    'Follow the English Attack plan against the Taimanov, for both sides',
    'Spot the ...Nxf3 trick when White pushes g4 too early',
    'See how 6.Be2 turns the Taimanov into a Scheveningen'
  ],
  intro:
    "Module 6.1 built Black's Taimanov set-up. Now look at it from White's side. White can attack with Be3, Qd2 and O-O-O (the English Attack), play quietly with Bd3, or develop with Be2 and f4. What does each plan aim for, and how does Black answer?",
  sections: [
    {
      kind: 'walkthrough',
      title: 'The English Attack set-up',
      intro: 'We pick up the line from Module 6.1, right after the pin 8...Bb4.',
      moves: ENG,
      start: 16,
      orientation: 'white',
      steps: {
        16: {
          title: 'The pin again',
          text: '8...Bb4. The bishop pins the c3-knight to the queen on d2, so ...Nxe4 is a threat.',
          arrows: [['b4', 'c3', 'red'], ['f6', 'e4', 'red']],
          marks: ['d2']
        },
        17: {
          title: 'The f-pawn holds e4',
          text: "9.f3. The pawn guards e4 for good. It also takes the g4 square away from Black's knights.",
          arrows: [['f3', 'e4', 'green'], ['f3', 'g4', 'green']]
        },
        18: {
          title: 'The knight finds e5',
          text: '9...Ne5. The knight eyes c4, where it would hit the queen and the e3-bishop. It also attacks the f3-pawn.',
          arrows: [['e5', 'c4', 'blue'], ['e5', 'f3', 'red']]
        },
        19: {
          title: 'The knight steps back',
          text: "10.Nb3. The knight leaves d4 for a safe square. The d-file is now clear, and White's queen looks straight up it at the d7-pawn.",
          arrows: [['d2', 'd7', 'blue']]
        },
        20: {
          title: 'Space on the queenside',
          text: '10...b5. Black gains space. Next comes ...Bb7 to hit e4, and once the b4-bishop steps back, ...b4 can chase the c3-knight. White is slightly better, but both sides have clear plans.',
          arrows: [['c8', 'b7', 'blue'], ['b5', 'b4', 'blue']]
        }
      }
    },
    {
      kind: 'text',
      title: 'Two plans',
      body:
        "**White** has castled queenside and wants to push Black's pieces back. Typical moves are Kb1, to take the king off the c-file where Black's queen is lined up, then Qe1 or Qf2 and Bb6 to hit the black queen. Later comes f4, or g4–g5 once it is safe.\n\n**Black** plays on the queenside, where White's king lives: ...Bb7 against e4, ...Rb8 and ...b4, and the knight jump ...Ne5–c4. The black king often stays in the center a little longer, or castles short."
    },
    {
      kind: 'walkthrough',
      title: 'Careful with g4: the f3-pawn',
      intro: "White's most natural attacking move is g4. Right now it is a mistake. Watch what guards the f3-pawn.",
      moves: G4,
      start: 20,
      orientation: 'white',
      steps: {
        20: {
          title: 'Count the guards on f3',
          text: '10...b5. White would love to push g4–g5 to chase the f6-knight. But the f3-pawn is attacked by the e5-knight, and only the g2-pawn guards it.',
          arrows: [['e5', 'f3', 'red'], ['g2', 'f3', 'green']],
          marks: ['f3']
        },
        21: {
          title: 'The guard walks away',
          text: '11.g4. The g-pawn leaves g2, and now nothing guards f3.',
          marks: ['f3'],
          ann: '?'
        },
        22: {
          title: 'The knight grabs f3',
          text: '11...Nxf3. The knight takes the pawn and attacks the queen on d2. No White piece can take the knight.',
          arrows: [['f3', 'd2', 'red']],
          ann: '!'
        },
        23: {
          title: 'The queen hits back',
          text: '12.Qe2. The queen steps away and attacks the f3-knight.',
          arrows: [['e2', 'f3', 'red']]
        },
        24: {
          title: 'Trade first',
          text: "12...Bxc3. Black first swaps the bishop for White's c3-knight. If 13.bxc3, the f3-knight escapes with ...Ne5 and White's pawns are broken.",
          arrows: [['b2', 'c3', 'blue']]
        },
        25: {
          title: 'The knight falls',
          text: '13.Qxf3. White wins the knight back. Now the c3-bishop is attacked by the b2-pawn.',
          arrows: [['b2', 'c3', 'red']]
        },
        26: {
          title: 'A clean pawn up',
          text: "13...Be5. The bishop steps back to a strong central square. The knights are traded, and Black has won the f3-pawn. Black is clearly better.",
          marks: ['e5'],
          ann: '!'
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The Be2 road to a Scheveningen',
      intro: "White's calm option: Be2, castling short and f4. Watch where Black's d-pawn finally goes.",
      moves: SCHEV,
      start: 10,
      orientation: 'white',
      steps: {
        10: {
          title: 'The usual start',
          text: '5...Qc7. The same Taimanov position. This time White chooses quiet development.',
          arrows: [['c7', 'e5', 'green']]
        },
        11: {
          title: 'A modest bishop',
          text: '6.Be2. The bishop develops without fuss. White plans to castle short and push f2–f4.',
          arrows: [['f2', 'f4', 'blue']]
        },
        12: {
          title: 'b5 is covered',
          text: '6...a6. The usual move: no White knight or bishop can use b5.',
          arrows: [['a6', 'b5', 'green']]
        },
        13: {
          title: 'White castles',
          text: '7.O-O. The king is safe, and the f1-rook will back up the f-pawn.',
          marks: ['g1']
        },
        14: {
          title: 'Hitting e4',
          text: '7...Nf6. The knight attacks e4, and the c3-knight defends it.',
          arrows: [['f6', 'e4', 'red'], ['c3', 'e4', 'green']]
        },
        15: {
          title: 'Guarding d4',
          text: '8.Be3. The bishop protects the d4-knight. Everything is ready for f4.',
          arrows: [['e3', 'd4', 'green']]
        },
        16: {
          title: 'Quiet development',
          text: '8...Be7. Black develops modestly too and gets ready to castle.',
          marks: ['e8']
        },
        17: {
          title: 'Space on the kingside',
          text: '9.f4. White grabs space. Now e4–e5 is a real idea, because the f4-pawn would support it.',
          arrows: [['f4', 'e5', 'blue'], ['e4', 'e5', 'blue']]
        },
        18: {
          title: 'The d-pawn decides',
          text: '9...d6. At last the d-pawn moves. It guards e5, so e4–e5 is stopped. With pawns on d6 and e6, Black has a Scheveningen center.',
          arrows: [['d6', 'e5', 'green']],
          marks: ['d6', 'e6']
        },
        19: {
          title: 'The queen swings over',
          text: '10.Qe1. The queen is heading for g3. From there it would look down the g-file at g7.',
          arrows: [['e1', 'g3', 'blue'], ['g3', 'g7', 'red']]
        },
        20: {
          title: 'A classical Scheveningen',
          text: '10...O-O. Black castles. White will attack on the kingside with Qg3 and f4–f5 or e4–e5. Black plays ...Bd7, ...b5 or a central break. The game is roughly level.',
          marks: ['g8']
        }
      }
    },
    {
      kind: 'tip',
      title: 'Why take the Taimanov road?',
      body:
        "The position after 10...O-O is a classical Scheveningen, the same structure as 2...d6 with ...e6. Many players prefer to reach it through the Taimanov, because the direct move order 5...e6 allows the Keres Attack, 6.g4 (Module 4.7). Module 4.8 covers the classical Scheveningen in detail, including Tal–Larsen 1965, which reached it by a Taimanov move order.\n\nWhite's third choice, the quiet 7.Bd3, was the main line of Module 6.1: Black answers ...Nf6, ...Ne5 and ...Bc5, and the game is roughly level."
    }
  ],
  takeaway:
    "Against the English Attack, Black pins with ...Bb4 and plays on the queenside with ...Ne5, ...b5 and ...Bb7; White guards e4 with f3 and must not push g4 while it leaves f3 hanging. Against 6.Be2, Black's d-pawn goes to d6 and the game becomes a Scheveningen.",
  lookAhead:
    'Module 6.3 shows a very different White idea: 5.Nb5, forcing ...d6, and then c4 to clamp the center.',
  drills: [
    {
      title: 'Play the English Attack',
      prompt: "You're White. Black has just played 5...Qc7. Set up the English Attack, and deal with the pin on c3.",
      moves: `${TAIMANOV} Nc3 Qc7 Be3 a6 Qd2 Nf6 O-O-O Bb4 f3`,
      start: 10,
      side: 'white',
      hints: [
        'Bishop to e3, queen to d2, then castle queenside.',
        "After ...Bb4, the e4-pawn needs a guard that can't be pinned. Use the f-pawn."
      ],
      success: '6.Be3, 7.Qd2, 8.O-O-O and 9.f3. The e4-pawn is safe, and White is ready to start the attack.'
    },
    {
      title: 'The Scheveningen road',
      prompt: "You're Black. White has played the quiet 6.Be2. Develop and choose the right moment for the d-pawn.",
      moves: SCHEV,
      start: 11,
      side: 'black',
      hints: [
        'First take b5 away, then bring out the king\'s knight and the dark-squared bishop.',
        'When White plays f4, push the d-pawn one square to stop e4–e5, then castle.'
      ],
      success: '6...a6, 7...Nf6, 8...Be7, 9...d6 and 10...O-O. You have a classical Scheveningen, reached without allowing the Keres Attack.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'White to move. Which of these moves is a mistake?',
      moves: ENG,
      orientation: 'white',
      choices: [
        { text: '11.g4', correct: true, why: 'Right. The g-pawn was the only guard of f3, so 11...Nxf3! wins a pawn and hits the queen.' },
        { text: '11.Kb1', why: "A good, safe move. The king steps off the c-file, where Black's queen is lined up." },
        { text: '11.Qe1', why: 'A good move. The queen leaves d2 and can go to f2 or g3 later.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Black has just played 9...d6. Which pawn structure does Black have now?',
      moves: `${TAIMANOV} Nc3 Qc7 Be2 a6 O-O Nf6 Be3 Be7 f4 d6`,
      orientation: 'black',
      choices: [
        { text: 'A Scheveningen: pawns on d6 and e6', correct: true, why: 'Yes. The Taimanov has turned into a Scheveningen, one of the most common transpositions in the Sicilian.' },
        { text: 'A Najdorf with ...e5', why: "Black's e-pawn is on e6, not e5. The pawns on d6 and e6 make a Scheveningen." },
        { text: 'A Dragon', why: "A Dragon needs ...g6 and a bishop on g7. Here Black's bishop is on e7 and the g-pawn hasn't moved." }
      ]
    },
    {
      type: 'order',
      prompt: 'Many players reach the Scheveningen through the Taimanov move order instead of 2...d6 and 5...e6. What do they avoid?',
      choices: [
        { text: 'The Keres Attack, 6.g4', correct: true, why: 'Right. Against the direct 2...d6 and 5...e6, White can answer 6.g4 at once to chase the f6-knight. On the Taimanov road, Black reaches the same center only after White has chosen another set-up, like 6.Be2 here.' },
        { text: 'The Richter–Rauzer, 6.Bg5', why: 'The Rauzer belongs to the Classical (5...Nc6 with ...d6). It is not the reason players choose the Taimanov road.' },
        { text: 'The Smith–Morra Gambit', why: 'The Morra comes on move 2 (2.d4 cxd4 3.c3), before Black chooses any Open Sicilian system.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'White has just played 10.Qe1. Where is the queen heading?',
      moves: `${TAIMANOV} Nc3 Qc7 Be2 a6 O-O Nf6 Be3 Be7 f4 d6 Qe1`,
      orientation: 'white',
      choices: [
        { text: "To g3, aiming at g7 and Black's kingside", correct: true, why: 'Yes. Qe1–g3 is a standard attacking maneuver in the Scheveningen. The f2 square is free because the f-pawn went to f4.' },
        { text: 'To d2, to prepare O-O-O', why: 'White has already castled short. The queen is joining a kingside attack instead.' },
        { text: 'To b4, to attack the d6-pawn', why: 'The c3-knight blocks the path from e1 to b4. The queen is going the other way, to g3.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'In the English Attack line 9.f3 Ne5 10.Nb3 b5, which White pawn drops if White pushes 11.g4 too early?',
      choices: [
        { text: 'The f3-pawn', correct: true, why: 'Right. The e5-knight attacks f3, and the g2-pawn was its only guard. 11.g4? Nxf3! wins it.' },
        { text: 'The e4-pawn', why: 'e4 is still guarded by the f3-pawn. The weak point after g4 is f3 itself.' },
        { text: 'The h2-pawn', why: "Black's queen is not attacking h2 here. The tactic is ...Nxf3, hitting the queen on d2." }
      ]
    },
    {
      type: 'plan',
      prompt: 'In the Taimanov with 6.Be2, White plays f4. What does Black\'s answer ...d6 stop?',
      choices: [
        { text: 'The push e4–e5', correct: true, why: 'Yes. The d6-pawn guards e5, so White cannot push e4–e5 to kick the f6-knight.' },
        { text: 'The push f4–f5', why: 'A pawn on d6 does not touch f5. Black stops f5 with pieces, or by meeting it with ...e5.' },
        { text: 'A knight jump to b5', why: 'That job was done earlier by ...a6. The d6-pawn is about e5.' }
      ]
    }
  ],
  key: { name: 'Taimanov English Attack: 10.Nb3 b5', moves: ENG, orientation: 'white' },
  terms: [
    { term: 'English Attack', meaning: 'A White set-up with Be3, Qd2, f3 and O-O-O, often followed by a kingside pawn push. Named after the English players who made it popular.' },
    { term: 'Scheveningen', meaning: 'A Sicilian pawn center with Black pawns on d6 and e6. Small but solid, and it can be reached from several move orders.' },
    { term: 'Transposition', meaning: 'Reaching the same position by a different order of moves.' }
  ]
})
