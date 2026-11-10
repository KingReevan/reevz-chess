import { defineModule } from '../../../types'
import { WINAWER } from '../lines'

/** win-4exd5: 4.exd5 exd5 5.Bd3 Ne7 6.Qh5 Nbc6 7.a3 Bxc3+ 8.bxc3 Be6 */
const EXD5 = `${WINAWER} exd5 exd5 Bd3 Ne7 Qh5 Nbc6 a3 Bxc3+ bxc3 Be6`
/** win-4a3: 4.a3 Bxc3+ 5.bxc3 dxe4 6.Qg4 Nf6 7.Qxg7 Rg8 8.Qh6 Nbd7 */
const A3 = `${WINAWER} a3 Bxc3+ bxc3 dxe4 Qg4 Nf6 Qxg7 Rg8 Qh6 Nbd7`
/** win-4qg4: 4.Qg4 Nf6 5.Qxg7 Rg8 6.Qh6 c5 */
const QG4 = `${WINAWER} Qg4 Nf6 Qxg7 Rg8 Qh6 c5`
/* The text block uses win-4ne2 (4.Ne2 dxe4 5.a3 Be7 6.Nxe4 Nf6 7.N2g3 O-O 8.Be2 Nc6)
   and win-4bd2 (4.Bd2 dxe4 5.Qg4 Nf6 6.Qxg7 Rg8 7.Qh6 Qxd4 8.O-O-O). */

export default defineModule({
  id: '7.8',
  title: "White's fourth-move sidelines",
  minutes: 11,
  level: 3,
  goals: [
    'Know five White alternatives to 4.e5 and what each one wants',
    'Have a simple, concrete answer ready for each as Black',
    'Know which sidelines lead to calm play and which to sharp play'
  ],
  intro:
    "4.e5 is White's main answer to the Winawer, but it is not the only one. White can trade on d5, ask the bishop at once, defend c3 with the other knight, unpin with Bd2, or attack g7 straight away. Each of these is rare at the top level, but you will meet them in your own games. Here is what each one wants, and a simple answer for Black.",
  sections: [
    {
      kind: 'walkthrough',
      title: '4.exd5: the Winawer Exchange',
      intro: 'The calmest choice. The pawns become symmetrical, but Black\'s bishop is already active on b4.',
      moves: EXD5,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The pin',
          text: '3...Bb4. White must deal with the threat to e4.',
          arrows: [['b4', 'c3', 'red'], ['d5', 'e4', 'red']]
        },
        7: {
          title: 'Trade the pawns',
          text: '4.exd5. White removes the target. Now e4 is no longer attacked.',
          arrows: [['e4', 'd5', 'red']]
        },
        8: {
          title: 'Take back with the pawn',
          text: '4...exd5. The simple answer. The e-file opens, and the c8-bishop is free, because the e6-pawn is gone.',
          arrows: [['c8', 'g4', 'blue']]
        },
        9: {
          title: 'The bishop aims at h7',
          text: '5.Bd3. White develops and points the bishop at Black\'s kingside.',
          arrows: [['d3', 'h7', 'blue']]
        },
        10: {
          title: 'Knight to e7',
          text: '5...Ne7. The knight develops and guards d5. It also keeps the f-pawn free.',
          arrows: [['e7', 'd5', 'green']]
        },
        11: {
          title: 'The Canal Attack',
          text: '6.Qh5. The queen joins the bishop against h7, and it also hits f7 and d5.',
          arrows: [['h5', 'h7', 'red'], ['h5', 'd5', 'red']]
        },
        12: {
          title: 'Develop with a guard',
          text: "6...Nbc6. The knight develops. Black does not need to panic: if 7.Bxh7?, then 7...Bf5! hits the bishop, and it can't run or take on f5: the h8-rook would then take the queen on h5. Black wins material. The d5-pawn is guarded by the e7-knight and the queen.",
          arrows: [['b8', 'c6', 'green']]
        },
        13: {
          title: 'Ask the bishop',
          text: '7.a3. White attacks the b4-bishop.',
          arrows: [['a3', 'b4', 'red']]
        },
        14: {
          title: 'Bishop for knight',
          text: '7...Bxc3+. Black takes and gives White doubled c-pawns.',
          arrows: [['c3', 'e1', 'red']]
        },
        15: {
          title: 'Doubled pawns again',
          text: '8.bxc3. White has the two bishops; Black has the healthier pawns.',
          marks: ['c2', 'c3']
        },
        16: {
          title: 'Easy development',
          text: '8...Be6. The light-squared bishop comes out and guards d5. The position is roughly equal, and Black has an easy game.',
          arrows: [['e6', 'd5', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '4.a3: the bishop pair at once',
      intro: 'White asks the bishop before pushing e5, and is ready to give the e4-pawn.',
      moves: A3,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The pin',
          text: '3...Bb4. White chooses another way.',
          arrows: [['b4', 'c3', 'red']]
        },
        7: {
          title: 'Ask at once',
          text: '4.a3. White wants the bishop pair straight away.',
          arrows: [['a3', 'b4', 'red']]
        },
        8: {
          title: 'Take the knight',
          text: '4...Bxc3+. Black takes, so the e4-pawn loses its defender.',
          arrows: [['c3', 'e1', 'red']]
        },
        9: {
          title: 'Doubled pawns',
          text: '5.bxc3. Now nothing defends e4.',
          marks: ['e4']
        },
        10: {
          title: 'Take the pawn',
          text: '5...dxe4. The simple answer: Black is a pawn up.',
          arrows: [['d5', 'e4', 'green']]
        },
        11: {
          title: 'Queen to g4',
          text: '6.Qg4. White hits g7 and e4. As always, Black has no dark-squared bishop to guard g7.',
          arrows: [['g4', 'g7', 'red'], ['g4', 'e4', 'red']]
        },
        12: {
          title: 'Develop with a gain of time',
          text: '6...Nf6. The knight attacks the queen and defends e4. Black gives up g7.',
          arrows: [['f6', 'g4', 'red'], ['f6', 'e4', 'green']]
        },
        13: {
          title: 'The g-pawn falls',
          text: '7.Qxg7. Material is level again.',
          arrows: [['g7', 'h8', 'red']]
        },
        14: {
          title: 'Rook to g8',
          text: '7...Rg8. The rook attacks the queen and takes the half-open g-file.',
          arrows: [['g8', 'g7', 'red']]
        },
        15: {
          title: 'The queen steps back',
          text: '8.Qh6. The queen keeps an eye on the f6-knight and the dark squares.',
          arrows: [['h6', 'f6', 'red']]
        },
        16: {
          title: 'Guard the knight',
          text: "8...Nbd7. The knight develops and supports the f6-knight. White has the two bishops and Black has a loose kingside, but Black's pieces are active: White is at most slightly better.",
          arrows: [['d7', 'f6', 'green']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: '4.Qg4: grabbing g7 early',
      intro: 'White attacks g7 before anything else. Black develops with a gain of time and strikes in the center.',
      moves: QG4,
      start: 6,
      orientation: 'black',
      steps: {
        6: {
          title: 'The pin',
          text: '3...Bb4. Note that e4 is still attacked.',
          arrows: [['d5', 'e4', 'red']]
        },
        7: {
          title: 'Straight at g7',
          text: '4.Qg4. The queen attacks g7, and along the fourth rank it also guards e4.',
          arrows: [['g4', 'g7', 'red']]
        },
        8: {
          title: 'Hit the queen',
          text: '4...Nf6. The knight develops and attacks the queen. Black is happy to let g7 go.',
          arrows: [['f6', 'g4', 'red']]
        },
        9: {
          title: 'The pawn grab',
          text: '5.Qxg7. White wins a pawn, but the queen has now moved twice while Black develops.',
          arrows: [['g7', 'h8', 'red']]
        },
        10: {
          title: 'The rook comes out',
          text: '5...Rg8. The rook attacks the queen with a gain of time.',
          arrows: [['g8', 'g7', 'red']]
        },
        11: {
          title: 'Back to h6',
          text: '6.Qh6. The queen escapes.',
          arrows: [['h6', 'f6', 'red']]
        },
        12: {
          title: 'Strike in the center',
          text: '6...c5. Black hits d4. Black is ahead in development and White\'s queen is far from home. The position is level.',
          arrows: [['c5', 'd4', 'red']]
        }
      }
    },
    {
      kind: 'text',
      title: 'The other two: 4.Ne2 and 4.Bd2',
      body:
        "**4.Ne2, the Alekhine Gambit.** The knight from g1 goes to e2 so that after ...Bxc3+ White can take back with a knight and avoid doubled pawns. It offers the e4-pawn. **Black's answer: take it.** 4...dxe4 5.a3 Be7 6.Nxe4 Nf6 7.N2g3 O-O 8.Be2 Nc6. White wins the pawn back, and the position is level.\n\n**4.Bd2, the Fingerslip Variation.** The bishop breaks the pin at once. **Black's answer: 4...dxe4.** Now 5.Nxe4 is possible, but the main line is the gambit 5.Qg4 Nf6 6.Qxg7 Rg8 7.Qh6 Qxd4 8.O-O-O. It is wild, and the engine calls it level."
    },
    {
      kind: 'tip',
      title: 'One idea against all five',
      body:
        "Against every one of these sidelines, look at e4 first. If White lets you take it (4.a3 Bxc3+, 4.Ne2, 4.Bd2), **take it** with ...dxe4: either you keep the pawn, or White spends time winning it back. If White trades it (4.exd5), take back with the pawn and develop. If White attacks g7 (4.Qg4), develop the knight to f6 with a gain of time and hit the center with ...c5."
    }
  ],
  takeaway:
    "Against White's fourth-move sidelines, Black has simple answers: 4.exd5 exd5 and develop; 4.a3 Bxc3+ 5.bxc3 dxe4; 4.Ne2 dxe4; 4.Bd2 dxe4; 4.Qg4 Nf6 with ...c5. None of them should worry Black.",
  lookAhead: 'That completes the Winawer. Chapter 8 ties the whole French together: the Greek Gift, the ...f6 break, blockades, the bad bishop and the classic games.',
  drills: [
    {
      title: 'Meet 4.Qg4',
      prompt: "You're Black. White attacks g7 at once with 4.Qg4. Develop with a gain of time, let g7 go, bring your rook out with a gain of time, and strike in the center.",
      moves: QG4,
      start: 7,
      side: 'black',
      hints: ['Your g8-knight can attack the queen.', 'After Qxg7, the h8-rook attacks the queen from g8. Then your c-pawn hits d4.'],
      success: '4...Nf6, 5...Rg8 and 6...c5. Black is ahead in development and the position is level.'
    },
    {
      title: 'Meet 4.a3',
      prompt: "You're Black. White asks your bishop at once with 4.a3. Take the knight, then grab the pawn it was defending.",
      moves: A3.split(' ').slice(0, 10).join(' '),
      start: 7,
      side: 'black',
      hints: ['Take on c3 with check.', 'Once the knight is gone, which White pawn has no defender?'],
      success: '4...Bxc3+ and 5...dxe4. Black is a pawn up for now; White will try Qg4 next.'
    }
  ],
  quiz: [
    {
      type: 'move',
      prompt: 'White has played 4.a3 Bxc3+ 5.bxc3. What is Black\'s simplest move?',
      moves: A3.split(' ').slice(0, 9).join(' '),
      orientation: 'black',
      choices: [
        { text: '5...dxe4', correct: true, why: 'Right. The knight that defended e4 is gone, so Black takes the pawn.' },
        { text: '5...c5', why: 'It is not a bad move, but it lets White push e5 or defend e4. The free pawn is the point.' },
        { text: '5...Nf6', why: 'It attacks e4 a second time, but e4 already has no defender. Take it at once with 5...dxe4.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why does White play 4.Ne2 (the Alekhine Gambit)?',
      moves: `${WINAWER} Ne2`,
      orientation: 'white',
      choices: [
        { text: 'So that after ...Bxc3+ the e2-knight takes back and White avoids doubled pawns', correct: true, why: 'Right. The price is the e4-pawn: Black takes it with 4...dxe4.' },
        { text: 'To defend the e4-pawn a second time', why: 'A knight on e2 does not defend e4. That is why Black can take it.' },
        { text: 'To prepare castling queenside', why: 'Ne2 clears the kingside, not the queenside. Its job is to support the c3-knight.' }
      ]
    },
    {
      type: 'move',
      prompt: 'White has played 4.Qg4, attacking g7. What is Black\'s best answer?',
      moves: `${WINAWER} Qg4`,
      orientation: 'black',
      choices: [
        { text: '4...Nf6', correct: true, why: 'Right. The knight develops and attacks the queen. If 5.Qxg7, 5...Rg8 gains more time.' },
        { text: '4...Kf8', why: 'It guards g7, but it gives up castling, and after 5.e5 White is better. Black can let g7 go and develop instead.' },
        { text: '4...g6', why: 'It saves the pawn, but it weakens the dark squares f6 and h6, and after 5.e5 White is better. 4...Nf6 develops with a gain of time.' }
      ]
    },
    {
      type: 'name',
      prompt: 'White plays 4.Bd2 against the Winawer. What is this line called?',
      moves: `${WINAWER} Bd2`,
      orientation: 'black',
      choices: [
        { text: 'The Fingerslip Variation', correct: true, why: 'Right. The bishop unpins the knight at once. Black answers 4...dxe4.' },
        { text: 'The Alekhine Gambit', why: 'The Alekhine Gambit is 4.Ne2.' },
        { text: 'The Canal Attack', why: 'The Canal Attack is 6.Qh5 in the Winawer Exchange (4.exd5 exd5 5.Bd3 Ne7 6.Qh5).' }
      ]
    }
  ],
  exam: [
    {
      type: 'move',
      prompt: 'White has played 4.exd5. How should Black take back?',
      moves: `${WINAWER} exd5`,
      orientation: 'black',
      choices: [
        { text: '4...exd5', correct: true, why: 'Right. The e-file opens and the c8-bishop is free. Black has an easy game.' },
        { text: '4...Qxd5', why: 'The queen comes out early and becomes a target for White\'s developing moves; after 5.Nf3 White is clearly better. Taking with the pawn is simpler.' },
        { text: '4...Bxc3+', why: 'This gives up the bishop before recapturing. Take back on d5 first.' }
      ]
    },
    {
      type: 'plan',
      prompt: 'Against 4.Ne2 and 4.Bd2, what is Black\'s simple answer?',
      choices: [
        { text: '4...dxe4: take the e4-pawn', correct: true, why: 'Right. Black takes on e4 and either keeps the pawn or makes White spend time winning it back. Both lines are level.' },
        { text: '4...Bxc3+ at once', why: 'Against 4.Ne2 the knight takes back without doubled pawns, and against 4.Bd2 the bishop takes back. 4...dxe4 is the simple answer.' },
        { text: '4...c5', why: 'It hits d4, but it leaves e4 alone. Take the pawn first with 4...dxe4.' }
      ]
    }
  ],
  key: { name: "Winawer 3...Bb4: White's fourth-move choice", moves: WINAWER, orientation: 'black' },
  terms: [
    { term: 'Sideline', meaning: 'A rare branch of an opening, away from the main line.' },
    { term: 'Gambit', meaning: 'An opening where one side gives up material, usually a pawn, for time or attack.' },
    { term: 'Tempo', meaning: 'A move\'s worth of time. Attacking the queen while developing, like 4...Nf6 against 4.Qg4, gains a tempo.' }
  ]
})
