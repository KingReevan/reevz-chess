import { defineModule } from '../../../types'
import { MAIN } from '../lines'

/** model-najdorf-gligoric-1953, moves 1–20 */
const NG = `${MAIN} Ne1 Nd7 Nd3 f5 f3 f4 Bd2 Nf6 b4 g5 c5 h5 Nf2 Ng6 Rc1 Rf7 cxd6 cxd6 a4 Bf8 a5 Rg7 h3 Nh8`
/** model-piket-kasparov-1989, the complete game */
const PK = 'd4 Nf6 Nf3 g6 c4 Bg7 Nc3 O-O e4 d6 Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 Be3 f5 f3 f4 Bf2 g5 b4 Nf6 c5 Ng6 cxd6 cxd6 Rc1 Rf7 a4 Bf8 a5 Bd7 Nb5 g4 Nc7 g3 Nxa8 Nh5 Kh1 gxf2 Rxf2 Ng3+ Kg1 Qxa8 Bc4 a6 Qd3 Qa7 b5 axb5 Bxb5 Nh1'
const pk = (n: number) => PK.split(' ').slice(0, n).join(' ')

export default defineModule({
  id: '3.7',
  title: 'Model games: the name and the masterpiece',
  minutes: 12,
  level: 2,
  goals: [
    'Know where the name Mar del Plata comes from',
    "Follow Gligorić's regrouping: ...Rf7, ...Bf8, ...Rg7 and ...Nh8",
    "See how Kasparov's attack beat White's material gain"
  ],
  intro:
    'Two games, two lessons. Najdorf–Gligorić at Mar del Plata 1953 gave this variation its name, and shows Black regrouping slowly and carefully. Piket–Kasparov, Tilburg 1989, is the race at full speed: White wins material on the queenside, and loses anyway.',
  sections: [
    {
      kind: 'history',
      title: 'Where the name comes from',
      body:
        'In 1953 the 16th Mar del Plata tournament was held in Argentina. Svetozar Gligorić used this plan twice there, against Miguel Najdorf and against Erich Eliskases, and won both games. Bronstein later recalled that the line had been thought refuted after Taimanov won twice against it with White in the 1952 USSR Championship. The variation is named after this tournament, and in particular after Najdorf–Gligorić.\n\nTaimanov–Najdorf (Module 3.5) was played later that year in Zurich. It is famous, but it is not the source of the name. Sources also disagree on who first played the ...Rf7, ...Bf8 and ...Rg7 regrouping.'
    },
    {
      kind: 'walkthrough',
      title: 'Najdorf–Gligorić, Mar del Plata 1953',
      intro: 'Gligorić had Black and won in 48 moves. We follow the first 20, where he builds the attack piece by piece.',
      moves: NG,
      start: 20,
      orientation: 'black',
      steps: {
        20: {
          title: 'White heads for d3',
          text: 'Najdorf chose 10.Nd3, sending the knight on at once. Gligorić answered with the lever 10...f5.',
          arrows: [['f5', 'e4', 'red']]
        },
        21: {
          title: 'The wall',
          text: '11.f3. The f3-pawn holds e4.',
          arrows: [['f3', 'e4', 'green']]
        },
        22: {
          title: 'Kingside space',
          text: '11...f4. Black grabs space on the kingside, as in Module 3.3.',
          marks: ['f4']
        },
        23: {
          title: 'Bishop to d2',
          text: '12.Bd2. With a black pawn on f4, the bishop develops on d2 instead of e3.',
          arrows: [['c1', 'd2', 'green']]
        },
        24: {
          title: 'Knight back to f6',
          text: '12...Nf6. The d7-knight returns to f6, where it supports ...g4.',
          arrows: [['f6', 'g4', 'green']]
        },
        25: {
          title: 'Preparing c5',
          text: '13.b4. The b-pawn supports the c4–c5 push.',
          arrows: [['b4', 'c5', 'green']]
        },
        26: {
          title: 'The g-pawn',
          text: '13...g5. Black\'s next pawn joins the storm.',
          arrows: [['g5', 'g4', 'blue']]
        },
        27: {
          title: "White's lever",
          text: "14.c5. White's pawn hits d6, the base of Black's chain.",
          arrows: [['c5', 'd6', 'red']]
        },
        28: {
          title: 'The h-pawn early',
          text: '14...h5. Gligorić pushes the h-pawn to back up ...g4.',
          arrows: [['h5', 'g4', 'green']]
        },
        29: {
          title: 'A guard for g4',
          text: '15.Nf2. The d3-knight drops back to guard g4 and h3.',
          arrows: [['f2', 'g4', 'green']]
        },
        30: {
          title: 'Knight to g6',
          text: '15...Ng6. The e7-knight swings to the kingside and guards f4.',
          arrows: [['g6', 'f4', 'green']]
        },
        31: {
          title: 'Rook to c1',
          text: "16.Rc1. White's rook gets ready for the c-file.",
          marks: ['c7']
        },
        32: {
          title: 'Guard c7',
          text: '16...Rf7. The rook guards c7, as in Module 3.4.',
          arrows: [['f7', 'c7', 'green']]
        },
        33: {
          title: 'The c-file opens',
          text: '17.cxd6. White opens the c-file.',
          marks: ['d6']
        },
        34: {
          title: 'Take back',
          text: '17...cxd6. c7 stays guarded by the f7-rook.',
          arrows: [['f7', 'c7', 'green']]
        },
        35: {
          title: 'Queenside space',
          text: '18.a4. White gains more space on the queenside.',
          arrows: [['a4', 'a5', 'blue']]
        },
        36: {
          title: 'The bishop defends',
          text: '18...Bf8. The bishop guards d6 and clears g7 for the rook.',
          arrows: [['f8', 'd6', 'green']]
        },
        37: {
          title: 'Still more space',
          text: '19.a5. White keeps pushing on the queenside.',
          marks: ['a5']
        },
        38: {
          title: 'Rook to g7',
          text: '19...Rg7. The rook moves onto the g-file. But the g6-knight still stands between it and the g5-pawn.',
          arrows: [['g7', 'g5', 'blue']],
          marks: ['g6']
        },
        39: {
          title: 'Another guard',
          text: '20.h3. White adds one more guard to g4.',
          arrows: [['h3', 'g4', 'green']]
        },
        40: {
          title: 'Out of the way',
          text: '20...Nh8. It looks odd, but it has a point: the knight leaves g6, so the g7-rook now stands right behind the g5-pawn, and the knight can come back via f7. The engine calls the position roughly equal, with ...g4 coming. Gligorić went on to win.',
          arrows: [['g7', 'g5', 'green'], ['h8', 'f7', 'blue']]
        }
      }
    },
    {
      kind: 'walkthrough',
      title: 'Piket–Kasparov, Tilburg 1989',
      intro:
        'The game began 1.d4 Nf6 2.Nf3 and reached the 10.Be3 Mar del Plata, with 13.b4. This is the complete game from move 18: Black won in 28 moves.',
      moves: PK,
      start: 36,
      orientation: 'black',
      steps: {
        36: {
          title: 'Both plans are rolling',
          text: "White's pawns stand on a5 and b4, and the c-file is open. Black's pieces are in place, and Kasparov has just played 18...Bd7.",
          arrows: [['g5', 'g4', 'blue']],
          marks: ['c7']
        },
        37: {
          title: 'Heading for c7',
          text: '19.Nb5. The knight heads for c7, where it would hit the a8-rook.',
          arrows: [['b5', 'c7', 'red']]
        },
        38: {
          title: 'Ignore it',
          text: "19...g4. Kasparov ignores the knight and breaks with the g-pawn. It is the engine's first choice.",
          arrows: [['g4', 'f3', 'red']],
          ann: '!'
        },
        39: {
          title: 'The knight lands',
          text: '20.Nc7. The knight attacks the a8-rook. The c1-rook guards it, so taking it with the queen would lose the queen for a knight.',
          arrows: [['c7', 'a8', 'red'], ['c1', 'c7', 'green']]
        },
        40: {
          title: 'Let the rook go',
          text: "20...g3. Black lets the rook go and drives the pawn into White's camp. Again the engine's first choice.",
          arrows: [['g3', 'f2', 'red'], ['g3', 'h2', 'red']],
          ann: '!'
        },
        41: {
          title: 'The exchange is won',
          text: '21.Nxa8. White wins a rook for the knight. But the engine says this was the real mistake: 21.hxg3 would have kept the balance. The knight on a8 is also stuck there.',
          marks: ['a8'],
          ann: '?'
        },
        42: {
          title: 'The knight heads in',
          text: '21...Nh5. The knight heads for g3, and it clears the d8–h4 diagonal for the queen.',
          arrows: [['h5', 'g3', 'red'], ['d8', 'h4', 'blue']]
        },
        43: {
          title: 'Into the corner',
          text: '22.Kh1. The only good move. Now ...gxf2 will not come with check.',
          marks: ['h1']
        },
        44: {
          title: 'The guard is gone',
          text: "22...gxf2. The pawn takes the f2-bishop, the piece that guarded White's king.",
          marks: ['f2']
        },
        45: {
          title: 'Rook takes back',
          text: '23.Rxf2. White takes back with the rook.',
          marks: ['f2']
        },
        46: {
          title: 'Knight check',
          text: '23...Ng3+. The knight checks from g3. As Module 3.6 showed, 24.hxg3 would lose to a forced mate.',
          arrows: [['g3', 'h1', 'red']]
        },
        47: {
          title: 'The only move',
          text: '24.Kg1. The king steps out of check.',
          marks: ['g1']
        },
        48: {
          title: 'Collect the knight',
          text: "24...Qxa8. Black picks up the stranded knight. Count it up: White won a rook and a pawn, Black a bishop and a knight. But Black's pieces surround White's king, and the engine says Black is clearly better.",
          arrows: [['g3', 'e2', 'red']]
        },
        49: {
          title: 'Bishop to c4',
          text: '25.Bc4. White brings the bishop out to support the queenside pawns.',
          arrows: [['c4', 'b5', 'blue']]
        },
        50: {
          title: 'Stop the pawns',
          text: '25...a6. The a6-pawn controls b5 and slows White\'s queenside pawns.',
          arrows: [['a6', 'b5', 'green']]
        },
        51: {
          title: 'A loose move',
          text: '26.Qd3. The engine prefers other moves, such as 26.Nd3, which brings the knight over to guard f2. Now the queen stands on that square.',
          marks: ['d3']
        },
        52: {
          title: 'The pin',
          text: "26...Qa7. The queen swings onto the a7–g1 diagonal. Now the f2-rook is pinned: it can't move off the diagonal without exposing White's king.",
          arrows: [['a7', 'f2', 'red'], ['f2', 'g1', 'yellow']]
        },
        53: {
          title: 'Too late',
          text: '27.b5. White tries to break open the queenside, but it is far too slow.',
          arrows: [['b5', 'a6', 'red']]
        },
        54: {
          title: 'Take the pawn',
          text: '27...axb5. Black takes.',
          marks: ['b5']
        },
        55: {
          title: 'White takes back',
          text: '28.Bxb5. The bishop takes back and attacks the d7-bishop.',
          arrows: [['b5', 'd7', 'red']]
        },
        56: {
          title: 'The final blow',
          text: '28...Nh1. The knight attacks the pinned f2-rook a second time. After 29.Kxh1 Qxf2, Black wins the rook for the knight. Piket resigned.',
          arrows: [['h1', 'f2', 'red'], ['a7', 'f2', 'red']],
          ann: '!'
        }
      }
    },
    {
      kind: 'text',
      title: 'Who really won the race?',
      body:
        "White's queenside plan worked exactly as Chapter 4 teaches: Nb5, Nc7, Nxa8. White won the exchange. But Black's attack reached the king first, and a king under attack matters more than a rook in the corner.\n\nThe engine is precise about where White went wrong: 21.Nxa8. With 21.hxg3 White would have kept the balance. As Kotronias writes in his King's Indian repertoire books, \"Black is playing for higher stakes as his own pawn chain points directly at the white king.\""
    }
  ],
  takeaway:
    "The name comes from Najdorf–Gligorić, Mar del Plata 1953, where Gligorić's regrouping (...Rf7, ...Bf8, ...Rg7, ...Nh8) set up the attack. Piket–Kasparov shows the race at its sharpest: White won the exchange, but Black's attack on the king came first.",
  lookAhead: 'Next: what if White never lets the g-file open? The Benko Attack, 11.g4.',
  drills: [
    {
      title: "Kasparov's finish",
      prompt: "You're Black in Piket–Kasparov. White's king has just stepped back to g1. Collect the stranded knight, slow down White's pawns, then pin the f2-rook.",
      moves: pk(52),
      start: 47,
      side: 'black',
      hints: [
        'The white knight on a8 has nowhere to go. Your queen can take it.',
        'Stop the pawns with your a-pawn. Then put your queen on the a7–g1 diagonal.'
      ],
      success: "24...Qxa8, 25...a6 and 26...Qa7. The f2-rook is pinned to White's king, and the knights will finish the job."
    },
    {
      title: "Gligorić's regrouping",
      prompt: "You're Black in Najdorf–Gligorić. Finish the regrouping: guard d6 with the bishop, put the rook on the g-file, then clear the knight out of the rook's way.",
      moves: NG,
      start: 35,
      side: 'black',
      hints: [
        'The g7-bishop has little to do. Drop it back to guard d6.',
        'Then the f7-rook goes to g7, and the g6-knight goes to the corner.'
      ],
      success: '18...Bf8, 19...Rg7 and 20...Nh8. The rook now stands behind the g-pawn, ready for ...g4.'
    }
  ],
  quiz: [
    {
      type: 'name',
      prompt: 'Which game gave the Mar del Plata its name?',
      choices: [
        { text: 'Najdorf–Gligorić, Mar del Plata 1953', correct: true, why: 'Right. Gligorić won with Black at the Mar del Plata tournament, and the variation took the tournament\'s name.' },
        { text: 'Taimanov–Najdorf, Zurich 1953', why: 'A famous Black win with the ...g4–g3 break (Module 3.5), but it was played later that year in Zurich. It is not the source of the name.' },
        { text: 'Piket–Kasparov, Tilburg 1989', why: 'A Mar del Plata masterpiece, but 36 years too late to name it.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'Why did Gligorić play 20...Nh8?',
      moves: NG,
      orientation: 'black',
      choices: [
        { text: 'To get the knight out of the rook\'s way, so the g7-rook stands behind the g-pawn', correct: true, why: 'Right. The knight can come back via f7, and the rook now backs up ...g4.' },
        { text: 'Because the knight was attacked', why: 'Nothing attacked the g6-knight. The move was a planned regrouping.' },
        { text: 'To guard the h7-square against a white queen', why: "White's queen is nowhere near h7. The point is the g-file." }
      ]
    },
    {
      type: 'concept',
      prompt: 'In Piket–Kasparov, which White move does the engine call the real mistake?',
      choices: [
        { text: '21.Nxa8, grabbing the rook', correct: true, why: 'Right. 21.hxg3 would have kept the balance. Taking the rook gave Black time for the attack.' },
        { text: '24.Kg1', why: 'That was the only move. 24.hxg3 would have lost to a forced mate.' },
        { text: '22.Kh1', why: 'That was the only good move. The damage had already been done one move earlier.' }
      ]
    },
    {
      type: 'concept',
      prompt: 'What does 26...Qa7 do?',
      moves: pk(52),
      orientation: 'black',
      choices: [
        { text: "It pins the f2-rook to White's king along the a7–g1 diagonal", correct: true, why: 'Right. The rook cannot move off the diagonal, so the knights can attack it.' },
        { text: 'It attacks the b4-pawn', why: 'The queen on a7 does not reach b4. Look at the diagonal toward g1.' },
        { text: 'It gets ready to push the a-pawn', why: 'The a-pawn is blocked by White\'s pawn on a5. The queen is aiming at f2 and g1.' }
      ]
    }
  ],
  exam: [
    {
      type: 'concept',
      prompt: 'Who won Najdorf–Gligorić, Mar del Plata 1953?',
      choices: [
        { text: 'Gligorić, with Black', correct: true, why: 'Right. Gligorić won in 48 moves. He also beat Eliskases with the same plan at that tournament.' },
        { text: 'Najdorf, with White', why: 'Najdorf lost this one. He won with Black later that year against Taimanov, which is a different game.' },
        { text: 'It was drawn by perpetual check', why: 'One web page claims a draw, but the reliable game records give a win for Black.' }
      ]
    },
    {
      type: 'move',
      prompt: 'Black to move in Piket–Kasparov. What is best?',
      moves: pk(47),
      orientation: 'black',
      choices: [
        { text: '24...Qxa8', correct: true, why: 'Right. The knight on a8 had no way out. Black takes it and stays clearly better.' },
        { text: '24...Nxe2+', why: 'It takes a bishop with check, but gives up the strong g3-knight, and the engine calls the game level after it.' },
        { text: '24...Be8', why: 'Too slow. White answers 25.Qc2 and uses the c-file, and the engine says White is better.' }
      ]
    }
  ],
  key: { name: 'Najdorf–Gligorić, Mar del Plata 1953: 20...Nh8', moves: NG, orientation: 'black' },
  terms: [
    { term: 'Winning the exchange', meaning: 'Giving up a bishop or knight to capture a rook, which is worth more.' },
    { term: 'Pin', meaning: 'A piece cannot move off a line without exposing a more valuable piece, here the king, behind it.' },
    { term: 'Regrouping', meaning: 'Moving pieces to new squares where they work better, without changing the pawns.' }
  ]
})
