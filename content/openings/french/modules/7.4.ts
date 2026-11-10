import { defineModule } from '../../../types'
import { WINAWER, WINAWER_MAIN } from '../lines'

/** win-pp: 7.Qg4 Qc7 8.Qxg7 Rg8 9.Qxh7 cxd4 10.Ne2 Nbc6 11.f4 Bd7 12.Qd3 dxc3 */
const PP = `${WINAWER_MAIN} Qg4 Qc7 Qxg7 Rg8 Qxh7 cxd4 Ne2 Nbc6 f4 Bd7 Qd3 dxc3`
/** The Poisoned Pawn position after 9...cxd4 */
const CXD4 = `${WINAWER_MAIN} Qg4 Qc7 Qxg7 Rg8 Qxh7 cxd4`
/** win-pp-trap: 10.cxd4?? Qc3+ 11.Kd1 Qxa1 */
const TRAP = `${CXD4} cxd4 Qc3+ Kd1 Qxa1`
/** model-bronstein-uhlmann-1977 (Tallinn 1977, 0-1), up to 22...Rxh7. It reaches the win-pp position via 4...Ne7. */
const BRONSTEIN_UHLMANN = `${WINAWER} e5 Ne7 a3 Bxc3+ bxc3 c5 Qg4 Qc7 Qxg7 Rg8 Qxh7 cxd4 Ne2 Nbc6 f4 Bd7 Qd3 dxc3 h4 O-O-O h5 Nf5 h6 Rg6 h7 Rh8 Rh3 d4 Rb1 Be8 Qf3 Qd8 g4 Nh4 Qh1 Rxg4 Ng3 Rxh7`

export default defineModule({
  id: '7.4',
  title: 'The Poisoned Pawn: ideas only',
  minutes: 12,
  level: 3,
  goals: [
    'Know what each side gets after 7...Qc7 8.Qxg7 Rg8 9.Qxh7 cxd4',
    'Never take back on d4 with the c3-pawn: 10.cxd4?? Qc3+ wins a rook',
    'See how Uhlmann stopped and then won the h-pawn against Bronstein (1977)'
  ],
  intro:
    "In the Poisoned Pawn, Black lets White's queen eat the g7- and h7-pawns. In return Black hits White's center and gets the g-file. It is one of the sharpest lines in the French, full of long theory. This module does not ask you to learn that theory. It shows what each side is playing for, one trap every player must know, and a classic game.",
  sections: [
    {
      kind: 'walkthrough',
      title: 'Two pawns for the center',
      intro: "Follow the material and the targets. White grabs pawns on the kingside; Black takes them back in the center.",
      moves: PP,
      start: 13,
      orientation: 'black',
      steps: {
        13: {
          title: 'g7 is attacked',
          text: '7.Qg4. The queen hits g7. Black decides not to defend it.',
          arrows: [['g4', 'g7', 'red']]
        },
        14: {
          title: 'Let it go',
          text: '7...Qc7. The queen eyes e5, and c3 once the c-pawn moves. This is the Poisoned Pawn.',
          arrows: [['c7', 'e5', 'red']]
        },
        15: {
          title: 'Pawn one',
          text: '8.Qxg7. White takes the pawn and attacks the h8-rook.',
          arrows: [['g7', 'h8', 'red']]
        },
        16: {
          title: 'The rook on the g-file',
          text: '8...Rg8. The rook escapes with a gain of time: it attacks the queen. From g8 it will press on g2.',
          arrows: [['g8', 'g7', 'red']]
        },
        17: {
          title: 'Pawn two',
          text: "9.Qxh7. White is two pawns up. Black has no g- or h-pawn left, so White's h-pawn is a passed pawn: nothing can stop it with a pawn.",
          arrows: [['h2', 'h7', 'blue']],
          marks: ['h2']
        },
        18: {
          title: 'The counterattack',
          text: "9...cxd4. Black takes one pawn back. Now the queen attacks both c3 and e5, and neither is defended.",
          arrows: [['c7', 'c3', 'red'], ['c7', 'e5', 'red'], ['d4', 'c3', 'red']],
          marks: ['c3', 'e5']
        },
        19: {
          title: 'Guard c3',
          text: '10.Ne2. White develops and guards c3, so ...Qxc3+ no longer works: the knight would take the queen. Taking back with 10.cxd4?? would be a terrible blunder (see the next walkthrough).',
          arrows: [['e2', 'c3', 'green']],
          ann: '!'
        },
        20: {
          title: 'e5 is hit twice',
          text: '10...Nbc6. The knight develops and adds a second attacker to e5.',
          arrows: [['c6', 'e5', 'red'], ['c7', 'e5', 'red']],
          marks: ['e5']
        },
        21: {
          title: 'Hold e5',
          text: '11.f4. The f-pawn defends e5.',
          arrows: [['f4', 'e5', 'green']]
        },
        22: {
          title: 'Ready to castle long',
          text: "11...Bd7. The bishop develops and clears the way for ...O-O-O. Black's king will be safer on the queenside, far from White's h-pawn.",
          arrows: [['e8', 'c8', 'blue']]
        },
        23: {
          title: 'The queen comes home',
          text: '12.Qd3. The queen returns to the center, where it attacks d4 and guards c3.',
          arrows: [['d3', 'd4', 'red'], ['d3', 'c3', 'green']]
        },
        24: {
          title: 'Material is level',
          text: "12...dxc3. Black has won back the second pawn: six pawns each. White has the passed h-pawn and the two bishops. Black has the center pawns, the g-file and a pawn on c3 deep in White's camp. The engine gives White a small edge, but both kings are in danger.",
          marks: ['h2', 'c3']
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'The trap: 10.cxd4??',
      intro: 'After 9...cxd4, taking back with the pawn looks natural. It loses a rook.',
      moves: TRAP,
      start: 18,
      orientation: 'black',
      steps: {
        18: {
          title: 'Look at the c-file',
          text: "9...cxd4. Black's queen on c7 looks down the c-file at c3. Only the c3-pawn stands in the way.",
          arrows: [['c7', 'c3', 'yellow']]
        },
        19: {
          title: 'Opening the file',
          text: '10.cxd4. White takes back, but now the c-file is open all the way to c3.',
          ann: '??'
        },
        20: {
          title: 'The fork',
          text: '10...Qc3+. The queen checks the king on e1 and attacks the a1-rook at the same time. A fork.',
          arrows: [['c3', 'e1', 'red'], ['c3', 'a1', 'red']],
          ann: '!'
        },
        21: {
          title: 'The king steps aside',
          text: "11.Kd1. White gets out of check, but the rook can't be saved.",
          marks: ['a1']
        },
        22: {
          title: 'A rook up',
          text: '11...Qxa1. Black wins a whole rook. White has two extra pawns, but that is nowhere near a rook, and Black is winning. (11...Qxd4+ first, then ...Qxa1, is even a little stronger.)',
          marks: ['a1']
        }
      }
    },
    {
      kind: 'warning',
      title: 'For White: never 10.cxd4',
      body:
        "After 9...cxd4, the c3-pawn must not take back. Play **10.Ne2**, which guards c3 (10.Rb1 and 10.Qd3 are also fine). A careless move like 10.Nf3 or 10.Qh6 leaves c3 unguarded, and 10...Qxc3+ wins the a1-rook just the same. In general, in the Poisoned Pawn White's c3-pawn stays where it is until the queen on c7 has been dealt with."
    },
    {
      kind: 'walkthrough',
      title: 'Bronstein vs Uhlmann, Tallinn 1977',
      intro: "This game reached the position above by a different move order (4...Ne7 5.a3 Bxc3+ 6.bxc3 c5). Watch White's h-pawn run, and how Black stops it.",
      moves: BRONSTEIN_UHLMANN,
      start: 26,
      orientation: 'black',
      steps: {
        26: {
          title: 'Kings choose sides',
          text: "13.h4 O-O-O. White starts the passed h-pawn; Black castles long, away from it. White's king stays in the center.",
          arrows: [['h4', 'h8', 'blue']]
        },
        27: {
          title: 'The pawn runs',
          text: '14.h5. Every step brings the pawn closer to h8.',
          arrows: [['h5', 'h8', 'blue']]
        },
        28: {
          title: 'A knight on f5',
          text: '14...Nf5. The knight takes a fine square in front of the f4-pawn. It watches h6, a square the h-pawn has to pass.',
          arrows: [['f5', 'h6', 'green']]
        },
        29: {
          title: 'h6',
          text: '15.h6. The pawn keeps going. The h1-rook supports it from behind.',
          arrows: [['h1', 'h6', 'green']]
        },
        30: {
          title: 'Rook to g6',
          text: '15...Rg6. The rook attacks the h6-pawn.',
          arrows: [['g6', 'h6', 'red']]
        },
        31: {
          title: 'One step from queening',
          text: '16.h7. The pawn reaches the seventh rank. If it reached h8 it would become a queen.',
          marks: ['h8']
        },
        32: {
          title: 'Block the square',
          text: '16...Rh8. The rook from d8 sits on h8, right in front of the pawn. Now the pawn can\'t move. Blocking a passed pawn like this is called a blockade.',
          arrows: [['h8', 'h7', 'green']],
          marks: ['h8']
        },
        33: {
          title: 'A rook lift',
          text: '17.Rh3. The rook guards h7 from behind and can swing along the third rank. The engine prefers 17.Qxc3, taking back the pawn first.',
          arrows: [['h3', 'h7', 'green'], ['h3', 'e3', 'blue']]
        },
        34: {
          title: 'Use the center',
          text: "17...d4. Black uses the center. The pawn now protects c3, and with the d5-pawn gone, the d5- and e4-squares on the long diagonal are clear. The engine already prefers Black here.",
          arrows: [['d4', 'c3', 'green']],
          ann: '!'
        },
        35: {
          title: 'The b-file',
          text: "18.Rb1. The other rook uses the half-open b-file to aim at b7, in front of Black's king.",
          arrows: [['b1', 'b7', 'red']]
        },
        36: {
          title: 'The bishop steps back',
          text: '18...Be8. The bishop guards f7 and keeps flexible.',
          arrows: [['e8', 'f7', 'green']]
        },
        37: {
          title: 'The queen swings over',
          text: '19.Qf3. The queen joins the kingside and eyes the c6-knight along the long diagonal.',
          arrows: [['f3', 'c6', 'red']]
        },
        38: {
          title: 'The queen eyes h4',
          text: '19...Qd8. The queen reaches the d8–h4 diagonal, aiming at the kingside.',
          arrows: [['d8', 'h4', 'blue']]
        },
        39: {
          title: 'Kick the knight',
          text: '20.g4. White chases the f5-knight away.',
          arrows: [['g4', 'f5', 'red']]
        },
        40: {
          title: 'The knight hits the queen',
          text: '20...Nh4. The knight jumps to h4, backed by the queen on d8, and attacks White\'s queen on f3.',
          arrows: [['h4', 'f3', 'red'], ['d8', 'h4', 'green']]
        },
        41: {
          title: 'The real mistake',
          text: "21.Qh1. The queen retreats to the corner, far from the action. The engine says this was White's biggest mistake; 21.Qg3 was better. From here Black is clearly better.",
          ann: '?'
        },
        42: {
          title: 'The g4-pawn falls',
          text: '21...Rxg4. The rook takes the g4-pawn.',
          arrows: [['g6', 'g4', 'red']]
        },
        43: {
          title: 'The knight blocks',
          text: '22.Ng3. The knight comes to g3 to block the g-file.',
          arrows: [['e2', 'g3', 'blue']]
        },
        44: {
          title: 'The h-pawn is gone',
          text: '22...Rxh7. The blockading rook takes the h-pawn. White\'s great hope is gone, and Black is two pawns up.',
          marks: ['h7']
        }
      }
    },
    {
      kind: 'history',
      title: 'How the game ended',
      body:
        "Black kept the initiative and went on to win: the game ended after 30...Ng5+, and Uhlmann won in 30 moves (0-1). Wikipedia lists Wolfgang Uhlmann among the great contributors to French Defense theory. The lesson for Black: stop the h-pawn with a piece in front of it, keep the king away from it, and use the center."
    }
  ],
  takeaway:
    "In the Poisoned Pawn, White wins two kingside pawns and gets a passed h-pawn; Black hits c3 and e5, takes the pawns back in the center and uses the g-file. After 9...cxd4, White must never play 10.cxd4??, because 10...Qc3+ forks king and rook.",
  lookAhead: 'Module 7.5 leaves the sharp lines behind: the positional 7.Nf3, 7.a4 and 7.h4, and the ...b6 and ...Ba6 bishop trade.',
  drills: [
    {
      title: 'Punish 10.cxd4??',
      prompt: "You're Black. White has just taken back on d4 with the c3-pawn. Find the move that wins material.",
      moves: TRAP.split(' ').slice(0, 20).join(' '),
      start: 19,
      side: 'black',
      hints: ['Your queen on c7 now sees down the c-file all the way to c3.', 'Which queen move gives check and attacks the a1-rook at the same time?'],
      success: '10...Qc3+! forks the king and the a1-rook. Black wins a rook.'
    },
    {
      title: 'Take the pawns, then stop the counterattack',
      prompt: "You're White. Black has let g7 go with 7...Qc7. Take both kingside pawns, then guard c3 and e5, and bring your queen back to the center.",
      moves: PP.split(' ').slice(0, 23).join(' '),
      start: 14,
      side: 'white',
      hints: ['Take on g7, then on h7. After ...cxd4, do not take back with the c3-pawn.', 'A knight move guards c3. Then a pawn defends e5, and the queen comes back to d3.'],
      success: '8.Qxg7, 9.Qxh7, 10.Ne2, 11.f4 and 12.Qd3. White has avoided the trap and keeps a small edge.'
    }
  ],
  quiz: [
    {
      type: 'trap',
      prompt: 'Why is 10.cxd4 a blunder here?',
      moves: CXD4,
      orientation: 'white',
      choices: [
        { text: '10...Qc3+ forks the king and the a1-rook', correct: true, why: 'Right. With the c3-pawn gone, the queen comes down the c-file with check and wins the rook.' },
        { text: 'It drops the e5-pawn to ...Qxe5+', why: 'After 10.cxd4 the d4-pawn defends e5, so ...Qxe5+ would lose the queen to dxe5. The real problem is ...Qc3+.' },
        { text: 'It lets Black win a pawn with ...Rxg2', why: 'The f1-bishop guards g2: after ...Rxg2, Bxg2 wins the rook. The winning move is 10...Qc3+.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does Black get in return for the g- and h-pawns?',
      moves: CXD4,
      orientation: 'black',
      choices: [
        { text: "Attacks on c3 and e5, and the half-open g-file against g2", correct: true, why: 'Right. Black wins pawns back in the center and puts pressure on the kingside along the g-file.' },
        { text: 'A passed h-pawn', why: 'The passed h-pawn belongs to White: Black has no g- or h-pawn left to stop it.' },
        { text: 'The two bishops', why: 'White has the two bishops. Black gave up the dark-squared bishop on move 5.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White to move after 9...cxd4. What is the best move?',
      moves: CXD4,
      orientation: 'white',
      choices: [
        { text: '10.Ne2', correct: true, why: 'Yes. The knight develops and guards c3, so ...Qxc3+ would just lose the queen.' },
        { text: '10.cxd4', why: 'A blunder: 10...Qc3+ forks the king and the a1-rook.' },
        { text: '10.Qh6', why: 'It leaves c3 unguarded: 10...Qxc3+ forks the king and the a1-rook, just as after 10.cxd4.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'In Bronstein vs Uhlmann, how did Black deal with the passed h-pawn?',
      moves: BRONSTEIN_UHLMANN.split(' ').slice(0, 32).join(' '),
      orientation: 'black',
      choices: [
        { text: 'A rook blocked it on h8, and later took it', correct: true, why: 'Right. 16...Rh8 set up a blockade, and 22...Rxh7 won the pawn.' },
        { text: 'Black chased White\'s king instead and let it queen', why: 'The pawn never queened. Black stopped it on h7 with the rook on h8.' },
        { text: 'A pawn on the g-file stopped it', why: "Black had no g- or h-pawn left. Only pieces could stop it, so a rook did the job." }
      ]
    }
  ],
  exam: [
    {
      type: 'trap',
      prompt: 'After 9...cxd4 10.cxd4?, what does Black play?',
      moves: `${CXD4} cxd4`,
      orientation: 'black',
      choices: [
        { text: '10...Qc3+', correct: true, why: 'Right. The queen forks the king and the a1-rook, and Black wins the rook.' },
        { text: '10...Qxe5+', why: 'The d4-pawn now defends e5: 11.dxe5 takes the queen. 10...Qc3+ wins a rook.' },
        { text: '10...Nbc6', why: 'A natural developing move, but it lets White off the hook. 10...Qc3+ wins a rook.' }
      ]
    },
    {
      type: 'concept',
      prompt: "Where does Black's king often go in the Poisoned Pawn, and why?",
      moves: PP,
      orientation: 'black',
      choices: [
        { text: "To the queenside with ...O-O-O, away from White's h-pawn and the open kingside", correct: true, why: 'Right. The kingside has no Black g- or h-pawn left, so it is no place for the king.' },
        { text: 'To g8 with ...O-O', why: 'Short castling is no longer allowed: the h8-rook has moved to g8. And with no g- or h-pawn, the kingside is no place for the king.' },
        { text: 'To f8', why: "The kingside is open and White's h-pawn is running there. Black's king goes the other way." }
      ]
    }
  ],
  key: { name: 'Poisoned Pawn: 9...cxd4', moves: CXD4, orientation: 'black' },
  terms: [
    { term: 'Fork', meaning: 'One piece attacking two enemy pieces at once, like the queen on c3 hitting the king and the a1-rook.' },
    { term: 'Passed pawn', meaning: 'A pawn with no enemy pawns in front of it or on the files next to it. Only pieces can stop it.' },
    { term: 'Blockade', meaning: 'Stopping a pawn by putting a piece on the square right in front of it, like 16...Rh8 against the h7-pawn.' }
  ]
})
